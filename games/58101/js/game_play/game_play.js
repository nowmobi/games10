let GamePlay = new Phaser.Class({
 
	Extends: Phaser.GameObjects.Container,   

	initialize:

	function GamePlay (scene)
	{
		this.scene = game_data['scene'];
		Phaser.GameObjects.Container.call(this, this.scene, 0, 0);        
		this.emitter = new Phaser.Events.EventEmitter();
        this.level_fail = false;
        this.level_active = false;
        this.tictac_played = false;
        this.allow_click = true;

        this.timer = this.scene.time.addEvent({delay: 100, callback: this.handler_timer, callbackScope: this, loop: true});	
        this.timer.paused = true;
	},

	init(params) {
        game_data['game_play'] = this;
        let bg = new Phaser.GameObjects.Image(this.scene, 0, 0, 'back');
        bg.setInteractive();
        bg.on('pointerdown', () => {
            if (this.puzzle) {
                if (this.puzzle.type === 'link') this.hide_non_connected_items();
            }
        }, this);
        bg.on('pointerup', () => {
            this.pointerup();
        }, this);
        bg.setOrigin(0, 0);
        this.add(bg);

        this.moving_holder = new Phaser.GameObjects.Container(this.scene, 0, 0);
        this.add(this.moving_holder);

        this.hint_panel = new HintPanel(game_data['scene']);
        this.hint_panel.x = loading_vars['W'] * 0.91;
        this.hint_panel.y = loading_vars['H'] * 0.93;
        this.hint_panel.init({ 'moving_holder': game_data.moving_holder });
        this.add(this.hint_panel);
        this.hint_panel.emitter.on('EVENT', this.handler_event, this);

        this.btn_back = new CustomButton(this.scene, 50, 50, () => {
            this.handler_back();
        }, 'common1', 'btn1_home2', 'btn2_home2', 'btn1_home2',  this);
        this.add(this.btn_back);

        this.level_no = new Phaser.GameObjects.Text(this.scene, loading_vars['W'] * 0.98, 30, '0', {fontFamily:"font2", fontSize: 45, color:'#fff'});
        this.level_no.setOrigin(1, 0.5);
        this.add(this.level_no);

        this.star_txt = new Phaser.GameObjects.Text(this.scene, loading_vars['W'] / 2, 30, '20', {fontFamily:"font2", fontSize: 45, color:'#fff'});
        this.star_txt.setOrigin(0.5);
        this.add(this.star_txt);
    
        this.add_info();
    },

    add_info(){
        this.infoGroup = this.scene.add.group();
        this.tutorial_txt = new Phaser.GameObjects.Text(this.scene, loading_vars['W'] / 2, loading_vars['H'] * 0.8, '', {fontFamily:"font2", fontSize: 28, color:'#fff', align: 'center',  wordWrap: {'width': 530}});
        this.tutorial_txt.setOrigin(0.5);
        this.add(this.tutorial_txt);
        this.infoGroup.add(this.tutorial_txt);
        this.infoGroup.setVisible(false);
    },

    handler_back() {
        game_data['utils'].game_play_stop();
        this.removeLevel();
        this.emitter.emit('EVENT', {'event': 'show_scene', 'scene_id': 'GAME_MAP'});
    },

    level_complete(params) {
        this.confetti_anim();
        this.scene.time.addEvent({
            delay: 1500,
            callbackScope: this,
            callback: function() {
                this.stop_confetti();
            }
        });
        this.pause_timer();

        game_data['utils'].check_ads('level_win');
        game_data['utils'].game_play_stop();
        game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'level_complete'});
        game_request.request({'level_complete': true, 'level_id': this.level_id, 'star_collected': params.star_collected}, res => {
            if (res && res['success']) {
                game_data['game_map'].update_levels();
                if (res['happy_moment']) game_data['utils'].happy_moment();
                this.emitter.emit('EVENT', {'event': 'show_window', 'window_id': 'level_complete', 'level_id': this.level_id, 'star_collected': params.star_collected });
            }
        });
    },

    update_level(params) {
        game_data['utils'].game_play_start();
        this.level_id = params['level_id'];
        let level_info = levels[this.level_id - 1];
        this.level_info = level_info;
        // level_info['time'] = 100000;
        if (level_info['type'] === 'link') this.puzzle = new LinkPuzzle();
        else if (level_info['type'] === 'memory') this.puzzle = new MemoryPuzzle();
        else if (level_info['type'] === 'word') this.puzzle = new WordPuzzle();
        else if (level_info['type'] === 'related') this.puzzle = new RelatedPuzzle();
        else if (level_info['type'] === 'shadow') this.puzzle = new ShadowPuzzle();
        else if (level_info['type'] === 'crop') this.puzzle = new CropPuzzle();
        else throw new Error(`Incrorrect level type ${level_info['type']}`);

        let first_app_ind = levels.findIndex(level => level['type'] === level_info['type']);
        let cur_ind = levels.indexOf(level_info);
        level_info['tutorial'] = first_app_ind === cur_ind;
        
        
        this.puzzle.init();
        this.add(this.puzzle);
        this.puzzle.emitter.on('EVENT', this.handler_event, this);
        params['level_info'] = level_info;
        this.puzzle.update_level(params);
        this.base_time = -1;
        
        if ('time' in level_info && level_info['time'] !== -1) {
            this.level_time = level_info['time'];
            this.base_time = level_info['time'];
            this.star_txt.setText(`${this.level_time}.0`);
            this.star_txt.setVisible(true);
            this.timer_mode = true;
        }
        else {
            this.star_txt.setVisible(false);
            this.timer_mode = false;
        }
        if (level_info['tutorial']) {
            this.infoGroup.setVisible(true);
            let res = game_data['utils'].generate_string({
                'scene_id': 'game_play', 'item_id': 'tutorial', 'phrase_id': level_info['type'], 'values': [], 'base_size': 28
            });
            this.tutorial_txt.setText(res['text'].toUpperCase());
            this.tutorial_txt.setFontSize(res['size']);
            this.tutorial_txt.y = loading_vars['H'] * 0.8;

            if (level_info['type'] === 'link') {
                this.puzzle.y -= 70;
            }
            else if (level_info['type'] === 'word') {
                this.puzzle.y -= 40;
                this.tutorial_txt.y = 830;
            }
        }
        else {
            this.infoGroup.setVisible(false);
        }
        this.level_active = true;
        this.ads_watched = 0;
        this.level_fail = false;
        this.level_no.setText(this.level_id);
        this.hand = new Phaser.GameObjects.Image(this.scene, 0, 0, 'common1', 'tap').setOrigin(0.5, 0).setVisible(false).setScale(0.7);
        this.add(this.hand);
        this.bringToTop(this.hand);
    },

    get_level_type() {
        return this.puzzle.get_type();
    },

    handler_event(params) {
        switch (params['event']) {
            case 'level_complete':
                this.level_complete(params);
            break;
            case 'level_failed':
                this.level_failed(params);
            break;
            case 'pause_timer':
                this.pause_timer(params);
            break;
            case 'resume_timer':
                this.resume_timer(params);
            break;

            default:
            //console.log('Unknown event=',params['event'])
            break;
          }
    },

    level_start(params) {
        this.update_level(params);
    },

    gameOver(){
        if (!this.level_fail) {
            this.level_fail = true;
            game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'level_fail'});
            this.level_failed();
        }
    },

    level_failed(params) {
        let reason = 'reason' in params ? params['reason'] : null;
        game_data['utils'].game_play_stop();
        game_data['utils'].check_ads('level_lost');
        this.emitter.emit('EVENT', {'event': 'show_window', 'window_id': 'level_failed', 'level_id': this.level_id, 'ads_watched': this.ads_watched, 'reason': reason });
    },

    continue_game(params) {
        // continue
        let reason = params['reason'];
        this.level_fail = false;
        let level_info = levels[this.level_id - 1];
        if ('time' in level_info) {
            if (reason === 'time') {
                this.level_time = level_info['time'];
                this.star_txt.setText(`${this.level_time}.0`);
            }
            this.resume_timer(true);
        }
        this.puzzle.continue_game(params);
    },

    update(){
        if (this.level_active) {
            this.puzzle.update();
        }
    },

    pause_timer() {
        if (this.level_active && !game_data['game_windows'].game_window) {
            if (this.timer && this.timer_mode) this.timer.paused = true;
        }
    },

    resume_timer(forced=false) {
        if (this.level_active && (!game_data['game_windows'].game_window || forced)) {
            if (this.timer && this.timer_mode) this.timer.paused = false;
            
        }
    },

    update_language() {
        if (this.level_info) {
            let res = game_data['utils'].generate_string({'scene_id': 'game_play', 'item_id': 'tutorial', 'phrase_id': this.level_info['type'], 'values': [], 'base_size': 28});
            this.tutorial_txt.setText(res['text'].toUpperCase());
            this.tutorial_txt.setFontSize(res['size']);
        }
    },

    confetti_anim() {
        this.confetti_time = game_request.get_time();
        let shape = new Phaser.Geom.Rectangle(0, -50, loading_vars['W'], -20);
        let emitter = this.scene.add.particles(0, 0, 'common1', {
            frame: { frames: [ 'con1', 'con2', 'con3',  'con4', 'con5', 'con6']},
            alpha: { start: 1, end: 0.7 },
            scaleX: { start: 1.2, end: -1 },
            scaleY: { start: 1, end: 0.8 },
            speed: { min: -100, max: 100 },
            lifespan: 3500,
            gravityY: 250,
            rotate: { onEmit: ()=> { return Math.random()*360; } },
            onUpdate: (particle) => {
                return particle.angle + 1
                },
            blendMode: 'NORMAL',
            emitZone: { type: 'random', source: shape },
        });
        game_data['moving_holder'].add(emitter);
        this.confetti_emitter = emitter;
    },

    stop_confetti() {
        let now = game_request.get_time();
        let timeout = 10;
        if (now - this.confetti_time < 2000) timeout = now - this.confetti_time;
        if (timeout < 0) timeout = 10;
        setTimeout(() => {
            if (this.confetti_emitter) {
                this.confetti_emitter.stop();
                setTimeout(() => {
                    if (this.confetti_emitter) this.confetti_emitter.destroy();
                }, 2800);
            }
        }, timeout);
    },

    rewarded_ad_watched() {
        this.ads_watched++;
    },

    replayLevel() {
    },

    removeLevel() {
        this.timer.paused = true;
        this.level_active = false;
        this.tictac_played = false;
        if (this.puzzle) this.puzzle.remove_level();
        this.puzzle = null;
    },

    hide_non_connected_items() {
        this.puzzle.hide_non_connected_items();
    },

    pointerup() {
        this.puzzle.pointerup();
    },

    handler_timer() {
        this.level_time -= 0.1;
        let val = Math.round((this.level_time + Number.EPSILON) * 100) / 100
        if (val <= 0) val = 0;
        if (!`${val}`.includes('.')) val = val + '.0';
        
        this.star_txt.setText(val);
        let perc = this.level_time / this.base_time;
        if (perc <= 0.15 && !this.tictac_played) {
            game_data['audio_manager'].sound_event({'play': true,  'sound_name': 'tic-tac'});
            this.tictac_played = true;
        }

        if (this.level_time <= 0) {
            this.puzzle.time_out();
            this.timer.paused = true;
        }
    },
});
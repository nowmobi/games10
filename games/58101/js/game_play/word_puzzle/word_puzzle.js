let WordPuzzle = new Phaser.Class({

	Extends: Phaser.GameObjects.Container,

	initialize:

	function WordPuzzle()
	{
		this.scene = game_data['scene'];
		Phaser.GameObjects.Container.call(this, this.scene, 0, 0);
		this.emitter = new Phaser.Events.EventEmitter();
        this.tries_amount = game_data['tries_allowed']['word'];
	},

	init() {
        this.attr = {};
        this.type = 'word';
        this.items_cont = new Phaser.GameObjects.Container(this.scene, 0, 0);
        this.add(this.items_cont);
        this.items_target_cont = new Phaser.GameObjects.Container(this.scene, 0, 0);
        this.add(this.items_target_cont);
        this.wnd_overlay = new Phaser.GameObjects.Image(this.scene, 0, 0,'dark_overlay');
		this.wnd_overlay.setOrigin(0,0);
		this.wnd_overlay.alpha = 0.01;
		game_data['scene'].add.existing(this.wnd_overlay);
		this.wnd_overlay.setInteractive();
		this.wnd_overlay.visible = false;
	},

    update_level(params) {
        this.level_info = params['level_info'];
        let { col, row, phrase_id } = this.level_info;
        let items_target = [ ...this.level_info['items_target'] ];
        let items_extra = 'items_extra' in this.level_info ? [ ...this.level_info['items_extra'] ] : [];
        if (items_target.length <= 0) throw new Error('Level is broken, items_target length less or equals to 0');
        let all_items = [
            ...items_target,
            ...items_extra
        ];
        this.all_items = all_items;
        this.items_target = items_target;
        this.phrase_id = phrase_id;
        let need_item_amount = col * row;

        let emojies_copy = game_data['utils'].deep_copy(game_data['emojies']);
        let keys = Object.keys(emojies_copy);
        keys.forEach(key => {
            emojies_copy[key]['arr'] = Phaser.Utils.Array.NumberArray(emojies_copy[key]['start_index'], emojies_copy[key]['end_index']);
        })
        this.default_urls = all_items.map(key => `assets/emojies/${key}.png`);;
        this.random_urls = [];
        
        while (all_items.length < need_item_amount) {
            let key = Phaser.Utils.Array.GetRandom(keys);
            let ind = Phaser.Utils.Array.RemoveRandomElement(emojies_copy[key]['arr']);
            
            if (!all_items.includes(`${key}/${key}_${ind}`)) {
                all_items.push(`${key}/${key}_${ind}`);
                this.random_urls.push(`assets/emojies/${key}/${key}_${ind}.png`);
            }
        }

        let emo_keys = all_items.map(key => key);
        let emo_urls = emo_keys.map(key => `assets/emojies/${key}.png`);

        game_data['utils'].add_loading(() => {
            game_data['utils'].load_images(
                emo_keys,
                emo_urls, () => {
                    setTimeout(() => {
                        game_data['utils'].remove_loading();
                        this.create_level(params);
                    }, 200);
                    
                })
        });        
    },

    create_level(params) {
        let { phrase_id } = this.level_info;
        this.create_items();
        this.create_items_target();
        let res = game_data['utils'].generate_string({'scene_id': 'word_puzzle', 'item_id': 'word_puzzle', 'phrase_id': phrase_id, 'values': [], 'base_size': 45});
        let phrase = new Phaser.GameObjects.Text(this.scene, loading_vars['W'] / 2, this.items_cont.y - 325 + 50, res['text'], {fontFamily:"font2", fontSize: res['size'], color:'#ffffff'});
        phrase.setOrigin(0.5);
        this.add(phrase);
        this.phrase = phrase;
        this.create_tries_panel();
        this.start_game_play();
    },

    create_items() {
        let dx = 150;
        let dy = 150;
        let all_y = 0;
        let level_scale = this.get_field_scale(this.level_info);
        
        this.items = [];
        for (let col = 0; col < this.level_info['col']; col++) {
            
            for (let row = 0; row < this.level_info['row']; row++) {
                let id = Phaser.Utils.Array.RemoveRandomElement(this.all_items);
                let item = new Phaser.GameObjects.Image(this.scene, 0, 0, id).setScale(0.7).setOrigin(0.5);
                item.id = id;
                item.setInteractive();
                this.items.push(item);
                item.on('pointerdown', () => {
                    this.check_item(item);
                }, this)
                item.x = col * dx;
                item.y = row * dy;
                
                all_y += row * dy;
                this.items_cont.add(item);
            }
        }

        let start_x = 0;
        let start_y = 0;
        let col = this.level_info['col'];
        let row = this.level_info['row'];
        let end_x = row;
        let end_y = col;

        this.items_cont.scale = level_scale;
        let x = loading_vars['W'] / 2;
        let y = loading_vars['H'] / 2 + 120;
        let dx2 = ((end_y - start_y - 1) * dy * level_scale) / 2;
        let dy2 = ((end_x - start_x - 1) * dx * level_scale) / 2;
        x -= dx2;
        y -= dy2;
        this.items_cont.x = x;
        this.items_cont.y = y;
    },

    create_items_target() {
        let dx = 150;
        let level_scale2 = this.get_targets_scale({ row: this.items_target.length });
        this.items_target_cont.setScale(level_scale2);
        this.pos = [];
        
        this.items_target.forEach((item, i) => {
            let item_bg = new Phaser.GameObjects.Image(this.scene, dx * i, this.items_cont.y - 225 + 50, 'common1', 'rect_4').setOrigin(0.5);
            item_bg.x += item_bg.displayWidth / 2;
            this.items_target_cont.add(item_bg);
            this.pos.push(item_bg);
        });
        let orig_w = this.items_target.length * dx - 14;
        let x2 = (loading_vars['W'] - orig_w * level_scale2) / 2;
        // let y2 = (136 - (dy - 14) * level_scale2);
        let y2 = 2 * 136 * (1 - level_scale2);
        
        this.items_target_cont.x += x2;
        this.items_target_cont.y += y2;
    },

    create_tries_panel() {
        if ('tries_allowed' in this.level_info && this.level_info['tries_allowed'] >= 0) this.tries_amount = this.level_info['tries_allowed'];
        let horizontal_mode = !('time' in this.level_info && this.level_info['time'] !== -1);
        this.tries_active = [];
        this.tries_nonactive = [];
        this.try_cont = new Phaser.GameObjects.Container(this.scene, loading_vars['W'] / 2, this.phrase.y - 50);
        this.add(this.try_cont);
        let dist = 50;
        let dx = 0;
        let dy = 0;
        if (!horizontal_mode) {
            dx = 0;
            dy = 50;
            this.try_cont.x = loading_vars['W'] * 0.95;
            
        }
        
        for (let i = 0; i < this.tries_amount; i++) {
            let try_ico = new Phaser.GameObjects.Image(this.scene, dx, dy, 'common1', 'try').setOrigin(0.5);
            try_ico.setTintFill(0xd9d9d9);
            this.try_cont.add(try_ico);
            this.tries_nonactive.push(try_ico);

            try_ico = new Phaser.GameObjects.Image(this.scene, dx, dy, 'common1', 'try').setOrigin(0.5);
            try_ico.alpha = 0;
            this.try_cont.add(try_ico);
            this.tries_active.push(try_ico);
            if (!horizontal_mode) {
                dy += 50;
            }
            else {
                dx += 50;
            }
            
        }

        if (horizontal_mode) {
            this.try_cont.x = loading_vars['W'] / 2 - (dist * 0.5 * (this.tries_nonactive.length - 1));
        }
        this.try_ind = 0;
    },

    start_game_play() {
        this.emitter.emit('EVENT', {'event': 'resume_timer'});
    },

    check_item(item, anim = true) {
        let ind = this.items_target.indexOf(item.id);
        if (ind !== -1) {
            let item_bg = this.pos[ind];
            this.items_cont.remove(item);
            this.items_target_cont.add(item);
            game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'tap2'});

            if (anim) {
                let pt_start = game_data['utils'].toGlobal(this.items_cont, new Phaser.Geom.Point(item.x, item.y));
                pt_start = game_data['utils'].toLocal(this.items_target_cont, new Phaser.Geom.Point(pt_start.x, pt_start.y));
                
                let pt_end = new Phaser.Geom.Point(item_bg.x, item_bg.y)
                item.x = pt_start.x;
                item.y = pt_start.y;
                let pt_start1 = new Phaser.Geom.Point(pt_start.x, pt_start.y + 35);
                let pt_end1 = new Phaser.Geom.Point(pt_end.x, pt_end.y + 50);
                let pt_mid1 = new Phaser.Geom.Point(pt_end.x - 200, pt_end.y + 200);
                let pt_mid2 = new Phaser.Geom.Point(pt_end.x, pt_end.y + 150);
    
                this.block_interface();
                let items_remained = this.pos.filter(bg => bg.filled).length;
                if (items_remained === 1) this.emitter.emit('EVENT', {'event': 'pause_timer'});
                game_data['utils'].bezier(pt_start, pt_mid2, pt_end, item, 750, 'Sine.easeOut', this, () => {
                    
                    this.check_win();
                    this.unblock_interface();
                }, pt_mid1, 0); 
                let curve = new Phaser.Curves.CubicBezier(pt_start1, pt_mid1, pt_mid2, pt_end1);
                let freq = 40;
                let dur = 500;
                let amount = Math.ceil(dur / freq);
                let particles_limit = amount;
                let config = {
                    alpha: { start: 1, end: 0.1 },
                    scale: { start: 0.6, end: 0.15 },
                    speed: { min: -30, max: 30 },
                    gravityY: 200,
                    blendMode: 'ADD',
                    frequency: freq,
                    maxParticles: amount,
                    lifespan: 500,
                    emitZone: { type: 'edge', source: curve, quantity: amount, yoyo: false }
                };
                let emitter = this.scene.add.particles(0, 0, item.id, config);
                this.items_target_cont.add(emitter);
                this.items_target_cont.bringToTop(item);
                emitter.onParticleEmit(()=>{
                    particles_limit -= 1;
                    if (particles_limit <= 1) {
                        emitter.stop();
                    }
                }, this)
            }
            else {
                item.x = item_bg.x;
                item.y = item_bg.y;
                this.check_win();
            }

            item_bg.filled = true;
            
        }
        else {
            game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'error'});
            item.alpha = 0;
            item.hide = true;
            
            let cross_ico = new Phaser.GameObjects.Image(this.scene, 0, 0, 'common1', 'cross').setOrigin(0.5).setScale(0);
            this.items_target_cont.add(cross_ico);
            let pt = game_data['utils'].toGlobal(this.items_cont, new Phaser.Geom.Point(item.x, item.y));
            pt = game_data['utils'].toLocal(this.items_target_cont, new Phaser.Geom.Point(pt.x, pt.y))
            cross_ico.x = pt.x;
            cross_ico.y = pt.y;
            this.block_interface();
            game_data['scene'].tweens.chain({
                targets: cross_ico,
                tweens: [
                    {
                        scale: 1,
                        duration: 400,
                        ease: 'Back.easeOut',
                    },
                    {
                        alpha: 0,
                        ease: 'Sine.easeInOut',
                        duration: 100,
                        onComplete: () => {
                            cross_ico.setVisible(false);
                            if (!(this.try_ind in this.tries_active)) {
                                this.emitter.emit('EVENT', {'event': 'level_failed', 'reason': 'tries'});
                            }
                            this.unblock_interface();
                        }
                    }
                ]
            });

            let try_ico = this.tries_active[this.try_ind];
            if (try_ico) {
                game_data['scene'].tweens.add({
                    targets: try_ico,
                    alpha: 1,
                    duration: 90,
                    delay: 60,
                    ease: 'Sine.easeInOut',
                    onComplete: () => {
                    }
                });
                game_data['scene'].tweens.add({
                    targets: try_ico,
                    scale: 1.1,
                    duration: 140,
                    yoyo: true,
                    ease: 'Sine.easeInOut',
                    onComplete: () => {
                    }
                });
            }
            this.try_ind++;
        }
    },

    check_win() {
        let all_filled = this.pos.every(bg => bg.filled);
        if (all_filled) {
            this.emitter.emit('EVENT', {'event': 'level_complete', 'star_collected': true});
        }
    },


    get_field_scale(params) {
		let col = params['col'];
		let row = params['row'];
		let level_scale;
        let fieldW = 550;
        let fieldH = 520;
        let item_width = 136;
        let item_height = 141;
        let start_x = 0;
        let start_y = 0;
        let end_x = row - 1;
        let end_y = col - 1;

        let orig_w =  (end_x - start_x + 1) * item_width;
        let orig_h =  (end_y - start_y + 1) * item_height;
        
        level_scale = Math.min(
            fieldW / orig_w, 
            fieldH / orig_h, 
            1
        );

        game_data['level_scale'] = level_scale;
        return level_scale;
		
	},

    get_targets_scale(params) {
		let row = params['row'];
		let level_scale;
        let fieldW = 136 * 4;
        let item_width = 136;
        let start_x = 0;
        let end_x = row - 1;

        let orig_w =  (end_x - start_x + 1) * item_width;
        
        level_scale = Math.min(
            fieldW / orig_w,
            1
        );

        game_data['level_scale2'] = level_scale;
        return level_scale;
		
	},

    pointerup(params) {

    },

    block_interface() {
		console.log('block')
		if (this.wnd_overlay) this.wnd_overlay.visible = true;
	},

	unblock_interface() {
		console.log('unblock')
		if (this.wnd_overlay) this.wnd_overlay.visible = false;
	},

    get_candidates() {
        // this.items_target
        let elements = this.items.filter(child => !child.hide && this.items_target.includes(child.id))
        return elements;
    },

    get_type() {
        return this.type;
    },
    
    continue_game() {
        this.level_fail = false;
        this.try_ind = 0;
        this.tries_active.forEach(el => el.alpha = 0);
    },
    
    time_out() {
        if (!this.level_completed) {
            this.level_fail = true;
            this.emitter.emit('EVENT', {'event': 'level_failed', 'reason': 'time'});
        }
    },
    
    remove_level() {
        this.destroy();
    },

});

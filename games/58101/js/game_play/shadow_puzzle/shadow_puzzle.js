let ShadowPuzzle = new Phaser.Class({
 
	Extends: Phaser.GameObjects.Container,   

	initialize:

	function ShadowPuzzle(scene)
	{
		this.scene = game_data['scene'];
		Phaser.GameObjects.Container.call(this, this.scene, 0, 0);        
		this.emitter = new Phaser.Events.EventEmitter();
        this.tries_amount = game_data['tries_allowed']['shadow'];
	},

	init(params) {
        this.type = 'shadow';

        let cross_ico = new Phaser.GameObjects.Image(this.scene, 0, 0, 'common1', 'cross').setOrigin(0.5).setScale(0).setVisible(false);
        this.add(cross_ico);
        this.cross_ico = cross_ico;

        this.wnd_overlay = new Phaser.GameObjects.Image(this.scene, 0, 0,'dark_overlay');
		this.wnd_overlay.setOrigin(0,0);
		this.wnd_overlay.alpha = 0.01;
		game_data['scene'].add.existing(this.wnd_overlay);
		this.wnd_overlay.setInteractive();
		this.wnd_overlay.visible = false;

    },

    get_type() {
        return this.type;
    },

    create_level() {
        this.create_shadow_items();
        this.create_target_items();
        this.create_tries_panel();
        this.start_game_play();
    },

    start_game_play() {
        this.emitter.emit('EVENT', {'event': 'resume_timer'});
    },

    create_shadow_items() {
        let dx = 170;
        let dy = 240;
        let limit_x = 470;
        if (this.items.length <= 4) dy = 300;
        if (this.items.length === 2) dx = 240;
        else if (this.items.length === 1) dx = 320;
        else if (this.items.length > 3) {
            dx = 90;
            limit_x = 620;
        }
        let start_x = dx;
        this.shadow_items = this.items.map(id => {
            let item = new Phaser.GameObjects.Image(this.scene, dx, dy, id).setScale(0.7).setOrigin(0.5);
            item.id = id;
            item.setTintFill(0xa6a5a4);
            this.add(item);
            dx+=150;
            if (dx > limit_x) {
                dx = start_x;
                dy += 140;
            }
            return item;
        });
        this.dy = dy;
    },

    create_target_items() {
        let dx = 170;
        let dy = this.dy + 60;
        let limit_x = 470;
        if (this.items.length === 2) dx = 240;
        else if (this.items.length === 1) dx = 320;
        else if (this.items.length > 3) {
            dx = 90;
            limit_x = 620;
        }
        let start_x = dx;

        let points = [];
        
        this.target_items = this.items.map(id => {
            let rect = new Phaser.GameObjects.Image(this.scene, dx, dy, 'common1', 'rect_1').setScale(1).setOrigin(0.5);
            this.add(rect);
            let item = new Phaser.GameObjects.Image(this.scene, dx, dy, id).setScale(0.7).setOrigin(0.5);
            points.push({x: dx, y: dy });
            item.id = id;
            item.bg = rect;
            item.setInteractive({ draggable: true });
            item.start_x = item.x;
            item.start_y = item.y;
            item.on('dragstart', function(pointer, dragX, dragY) {
                game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'tap'});
                this.bringToTop(item);
            }, this);
            item.on('drag', function(pointer, dragX, dragY ){
                item.x = Phaser.Math.Clamp(dragX, 60, 580);
                item.y = Phaser.Math.Clamp(dragY, 60, 900);
            }, this);
            item.on('dragend', function(pointer, dragX, dragY, dropped) { 
                let no_overlap = true;
                for (let i = 0; i < this.shadow_items.length; i++) {
                    let item2 = this.shadow_items[i];
                    let hasDrop = Phaser.Geom.Rectangle.Area(
                    Phaser.Geom.Rectangle.Intersection(
                        item.getBounds(), item2.getBounds())) > 6000;
                
                  if(hasDrop && !item2.matched) {
                    no_overlap = false;
                    this.check_item(item, item2);
                     break;
                  }
                }
                if (no_overlap) {
                    item.x = item.start_x;
                    item.y = item.start_y; 
                }

             }, this);
            this.add(item);
            dx+=150;
            if (dx > limit_x) {
                dx = start_x;
                dy += 140;
            }
            return item;
        });

        this.target_items.forEach(item => {
            let point = Phaser.Utils.Array.RemoveRandomElement(points);
            item.x = point.x;
            item.y = point.y;
            item.bg.x = point.x;
            item.bg.y = point.y;
            item.start_x = item.x;
            item.start_y = item.y;
        });
    },

    create_tries_panel() {
        if ('tries_allowed' in this.level_info && this.level_info['tries_allowed'] >= 0) this.tries_amount = this.level_info['tries_allowed'];
        this.tries_active = [];
        this.tries_nonactive = [];
        this.try_cont = new Phaser.GameObjects.Container(this.scene, loading_vars['W'] / 2, 90);
        this.add(this.try_cont);
        let dist = 50;
        let dx = 0;
        for (let i = 0; i < this.tries_amount; i++) {
            let try_ico = new Phaser.GameObjects.Image(this.scene, dx, 0, 'common1', 'try').setOrigin(0.5);
            try_ico.setTintFill(0xd9d9d9);
            this.try_cont.add(try_ico);
            this.tries_nonactive.push(try_ico);

            try_ico = new Phaser.GameObjects.Image(this.scene, dx, 0, 'common1', 'try').setOrigin(0.5);
            try_ico.alpha = 0;
            this.try_cont.add(try_ico);
            this.tries_active.push(try_ico);
            dx += 50;
        }

        this.try_cont.x = loading_vars['W'] / 2 - (dist * 0.5 * (this.tries_nonactive.length - 1));
        this.try_ind = 0;
    },

    check_item(item, item2, anim = false) {
        if (item.id === item2.id) {
            game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'tap'});
            if (!anim) {
                item.x = item2.x;
                item.y = item2.y;
                item.removeInteractive();
                item.matched = true;
                item2.matched = true
                item.bg.setVisible(false);
                this.check_win();
            }
            else {
                this.block_interface();
                game_data['scene'].tweens.add({
                    targets: item,
                    x: item2.x,
                    y: item2.y,
                    duration: 200,
                    ease: 'Sine.easeInOut',
                    onComplete: () => {
                        item.x = item2.x;
                        item.y = item2.y;
                        item.removeInteractive();
                        item.matched = true;
                        item2.matched = true
                        item.bg.setVisible(false);
                        this.check_win();
                        this.unblock_interface();
                    }
                });
            }

        }
        else {
            game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'error'});
            let cross_ico = this.cross_ico;
            this.bringToTop(cross_ico);
            cross_ico.setVisible(true).setAlpha(1).setScale(0);
            cross_ico.x = item.x;
            cross_ico.y = item.y;
            this.block_interface();
            game_data['scene'].tweens.chain({
                targets: cross_ico,
                tweens: [
                    {
                        scale: 0.7,
                        duration: 400,
                        ease: 'Back.easeOut'
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
            this.try_ind++;

            item.x = item.start_x;
            item.y = item.start_y;
        }
    },

    check_win() {
        let all_matched = this.target_items.every(item => item.matched);
        if (all_matched) {
            this.emitter.emit('EVENT', {'event': 'level_complete', 'star_collected': true});
        }
    },

    update_level(params) {
        this.level_info = params['level_info'];
        let { items } = this.level_info;
        this.items = items;
        if (items.length <= 0) throw new Error('Level is broken, items length less or equals to 0');
        else if (items.length > 8) throw new Error('Level is broken, items length is greater than 8');
        
        let all_items = [];
        all_items = [
            ...items
        ];
        let emo_keys = all_items.map(key => key);
        let emo_urls = emo_keys.map(key => `assets/emojies/${key}.png`);
        this.default_urls = emo_urls;
        this.random_urls = [];

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

    get_candidates() {
        return [...this.target_items.filter(item => !item.matched)];
    },

    get_shadow_items() {
        return this.shadow_items;
    },

    pointerup() {

    },

    continue_game() {
        this.try_ind = 0;
        this.tries_active.forEach(el => el.alpha = 0);
    },

    block_interface() {
		console.log('block')
		if (this.wnd_overlay) this.wnd_overlay.visible = true;
	},

	unblock_interface() {
		console.log('unblock')
		if (this.wnd_overlay) this.wnd_overlay.visible = false;
	},

    time_out() {
        if (!this.level_completed) {
            this.level_fail = true;
            this.emitter.emit('EVENT', {'event': 'level_failed', 'reason': 'time'});
        }
    },
    
    remove_level() {
        this.destroy();
    }
});
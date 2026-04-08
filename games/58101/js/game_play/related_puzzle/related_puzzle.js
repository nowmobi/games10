let RelatedPuzzle = new Phaser.Class({
 
	Extends: Phaser.GameObjects.Container,   

	initialize:

	function RelatedPuzzle(scene)
	{
		this.scene = game_data['scene'];
		Phaser.GameObjects.Container.call(this, this.scene, 0, 0);        
		this.emitter = new Phaser.Events.EventEmitter();
        this.tries_amount = game_data['tries_allowed']['related'];
	},

	init(params) {
        this.type = 'related';
        this.groups_cont = new Phaser.GameObjects.Container(this.scene, loading_vars.W / 2, loading_vars.H / 2 - 130);
        this.add(this.groups_cont);
        this.back_bg = new Phaser.GameObjects.Image(this.scene, 0, 0, 'common1', 'big_bg').setOrigin(0.5);
        this.groups_cont.add(this.back_bg);

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
        this.create_group_items();
        this.create_related_items();
        this.create_tries_panel();
        this.start_game_play();
    },

    start_game_play() {
        this.emitter.emit('EVENT', {'event': 'resume_timer'});
    },

    create_group_items() {
        this.groups_group = this.scene.add.group();
        this.current_stage = 0;
        this.groups[this.current_stage];
        this.group_pos = [
            {x: -100, y: -100},
            {x: 100, y: -100},
            {x: -100, y: 100},
            {x: 100, y: 100},
        ];
        this.groups[this.current_stage].forEach((item, i) => {
            let { x, y } = this.group_pos[i];
            let ico = new Phaser.GameObjects.Image(this.scene, this.back_bg.x + x, this.back_bg.y + y, item).setScale(0.7);
            this.groups_group.add(ico);
            this.groups_cont.add(ico);
        });
        
    },

    create_related_items() {
        this.related_group = this.scene.add.group();
        let dx = 170;
        let dy = 0;
        let points = [];
        if (this.related_items.length === 2) dx = 240;
        else if (this.related_items.length === 1) dx = 320;
        this.related_items.forEach((item, i) => {
            let ico = new Phaser.GameObjects.Image(this.scene, dx, this.groups_cont.y + this.back_bg.y + this.back_bg.displayHeight / 2 + 100 + dy, item).setScale(0.7);
            this.related_group.add(ico);
            ico.related_id = i;
            ico.setInteractive({ draggable: true });
            points.push({x: ico.x, y: ico.y });
            ico.on('dragstart', function(pointer, dragX, dragY){
                game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'tap'});
            }, this);
            ico.on('drag', function(pointer, dragX, dragY){
                ico.x = Phaser.Math.Clamp(dragX, 60, 580);
                ico.y = Phaser.Math.Clamp(dragY, 60, 900);
            }, this);
            ico.on('dragend', function(pointer, dragX, dragY, dropped){ 
                var hasDrop = Phaser.Geom.Rectangle.Area(
                    Phaser.Geom.Rectangle.Intersection(
                        ico.getBounds(), this.back_bg.getBounds())) > 10000;
                

                  if(hasDrop) {
                    this.check_item(ico);
                  }
                  else {
                    ico.x = ico.start_x;
                    ico.y = ico.start_y;
                  }
             }, this);
            this.add(ico);
            dx += 150;
            if (dx > 470) {
                dx = 170;
                dy += 120;
            }
        });

        this.related_group.getChildren().forEach(item => {
            let point = Phaser.Utils.Array.RemoveRandomElement(points);
            item.x = point.x;
            item.y = point.y;
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

    check_item(item, anim = false) {
        if (item.related_id === this.current_stage) {
            let { x, y } = this.group_pos[3];
            if (!anim) {
                item.x = x;
                item.y = y;
                item.removeInteractive();
                this.groups_cont.add(item);
                this.related_group.remove(item);
                this.groups_group.add(item);
                this.update_stage();
            }
            else {
                this.block_interface();
                item.removeInteractive();
                this.groups_cont.add(item);
                let pt = game_data['utils'].toGlobal(this, new Phaser.Geom.Point(item.x, item.y));
                pt = game_data['utils'].toLocal(this.groups_cont, new Phaser.Geom.Point(pt.x, pt.y))
                item.x = pt.x;
                item.y = pt.y;
                game_data['scene'].tweens.add({
                    targets: item,
                    x: x,
                    y: y,
                    duration: 130,
                    ease: 'Sine.easeInOut',
                    onComplete: () => {
                        item.x = x;
                        item.y = y;
                        this.related_group.remove(item);
                        this.groups_group.add(item);
                        this.update_stage();
                        this.unblock_interface();
                    }
                });
            }
            game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'tap'});
        }
        else {
            game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'error'});
            let cross_ico = this.cross_ico;
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

    update_stage() {
        this.current_stage++;
        if (this.current_stage >= this.groups.length) {
            this.emitter.emit('EVENT', {'event': 'level_complete', 'star_collected': true});
        }
        else {
            this.block_interface();
            game_data['scene'].tweens.chain({
                
                tweens: [
                    {
                        targets: this.groups_group.getChildren(),
                        alpha: 0,
                        duration: 140,
                        delay: 250,
                        ease: 'Sine.easeInOut',
                        onComplete: () => {
                            
                            this.groups_group.clear();
                            this.groups[this.current_stage].forEach((item, i) => {
                                let { x, y } = this.group_pos[i];
                                let ico = new Phaser.GameObjects.Image(this.scene, this.back_bg.x + x, this.back_bg.y + y, item).setScale(0.7);
                                ico.alpha = 0;
                                this.groups_group.add(ico);
                                this.groups_cont.add(ico);
                            });
                        }
                    },
                    {
                        targets: this.groups_group.getChildren(),
                        alpha: 1,
                        ease: 'Sine.easeInOut',
                        duration: 250,
                        onComplete: () => {
                            this.unblock_interface();
                        }
                    }
                ]
            });
        }
    },

    update_level(params) {
        this.level_info = params['level_info'];
        let { groups, related_items } = this.level_info;
        this.related_items = related_items;
        this.groups = groups;

        let level_correct = groups.every((gr, i) => gr.length + (i in related_items ? 1 : 0) === 4);
        
        if (!level_correct) throw new Error('Level is broken, all groups are not equal to 4');

        
        let all_items = [];
        groups.forEach(g => {
            all_items = [
                ...all_items,
                ...g
            ]
        });
        all_items = [
            ...all_items,
            ...related_items
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
        let childs = this.related_group.getChildren();
        return [childs.find(c => c.related_id === this.current_stage)];
    },

    pointerup() {

    },

    continue_game() {
        this.level_fail = false;
        this.try_ind = 0;
        this.tries_active.forEach(el => el.alpha = 0);
        // this.block_level = false;
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
        // this.stop_hand();
        this.destroy();
    }
});
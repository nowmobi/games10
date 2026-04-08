let LinkPuzzle = new Phaser.Class({
 
	Extends: Phaser.GameObjects.Container,   

	initialize:

	function LinkPuzzle(scene)
	{
		this.scene = game_data['scene'];
		Phaser.GameObjects.Container.call(this, this.scene, 0, 0);        
		this.emitter = new Phaser.Events.EventEmitter();
        this.colors = {
            'success': 0x28db5e,
            'fail': 0xec5757
        };
	},

	init(params) {
        this.type = 'link';
        this.items_cont = new Phaser.GameObjects.Container(this.scene, 200, 0);
        this.add(this.items_cont);
        this.line_graphics = new Phaser.GameObjects.Graphics(game_data['scene']);
        this.items_cont.addAt(this.line_graphics, 0); 
    },

    get_type() {
        return this.type;
    },

    update_level(params) {
        this.level_info = params['level_info'];
        this.emojies = this.level_info['items'];
        if (this.emojies.length <= 0) throw new Error('Level is broken, items length less or equals to 0');
        let emo_keys = [];
        this.emojies.map(arr => arr.map(name => emo_keys.push(name)))
        let emo_urls = emo_keys.map(key => `assets/emojies/${key}.png`);
        this.default_urls = emo_urls;
        this.random_urls = [];
        
        game_data['utils'].add_loading(() => {
            game_data['utils'].load_images(
                emo_keys,
                emo_urls, () => {
                    setTimeout(() => {
                        game_data['utils'].remove_loading();
                        this.create_level();
                    }, 200);
                    
                })
        });
    },

    get_candidates() {
        if (0 in this.emojies) {
            let threshold = this.emojies[0].length - 1;
            let res = [];
            this.items.forEach(item => {
                let sequence = item.data.get('sequence');
                let related_id = item.data.get('related_id');
                if (item.connected_item) {
                    let related_id2 = item.connected_item.data.get('related_id');
                    if (sequence < threshold && !(related_id === related_id2)) res.push(item);
                }
                else if (sequence < threshold) res.push(item);
            });
            return res;
        }
        return [];
        
    },

    create_level(params) {
        let dy = 200;
        this.items = [];
        let id = 0;
        this.y_coords = [];
        this.emojies.forEach((pair, ind1) => {
            pair.forEach((el, ind2) => {
                let item = new LinkPuzzleItem();
                item.init({ id, related_id: ind1, sequence: ind2, name: el });
                item.emitter.on('EVENT', this.handler_event, this);
                item.x = ind2 * 250;
                item.y = ind1 * dy;
                this.items.push(item);
                this.items_cont.add(item);
                if (ind2 !== 0) this.y_coords.push(item.y);
                id++;
            });
        });
        let level_scale = this.get_field_scale({ col: this.emojies.length });
        this.items_cont.scale = level_scale;
        let x = 100 * (1 - level_scale);
        let y = ((loading_vars['H'] - (dy * (this.emojies.length - 1)) * level_scale) / 2);
        this.items_cont.y += y;
        this.items_cont.x += x;
        

        this.items.forEach(item => {
            let sequence = item.data.get('sequence');
            if (sequence !== 0) {
                let y = Phaser.Utils.Array.RemoveRandomElement(this.y_coords);
                item.y = y;
            }
        });

        this.start_game_play();
    },

    get_field_scale(params) {
		let col = params['col'];
		let level_scale;
        let fieldH = loading_vars['H'];
        let item_height = 200;
        let start_y = 0;
        let end_y = col - 1;
        let orig_h =  (end_y - start_y + 1) * item_height;
        
        level_scale = Math.min(
            fieldH / orig_h, 
            1
        );

        game_data['level_scale'] = level_scale;
        return level_scale;
		
	},

    start_game_play() {
        this.emitter.emit('EVENT', {'event': 'resume_timer'});
    },
    
    hide_all_items() {
        this.items.forEach(item => item.hide());
    },

    hide_non_connected_items() {
        this.items.forEach(item => {
            if (!(item.connected && item.connected_item)) {
                item.hide()
            }
        });
    },

    hide_items(params) {
        let sequence = params['sequence'];
        this.items.forEach(item => {
            if (!item.connected) {
                let item_sequence = item.data.get('sequence');
                if (item_sequence === sequence) item.hide()
            }
        });
    },

    check_connect(params) {
        let { item } = params;
        let sequence = item.data.get('sequence');
        if (item.connected) {
            item.connected = false;
            item.connected_item.connected_item = null;
            item.connected_item.hide();
            item.connected_line.destroy();
            item.connected_line = null;
            item.connected_item.connected_line = null;
            item.connected_item.connected = false;  
            item.connected_item = null;
            item.connected_line = null;
            
        }
        this.items.forEach(item2 => {
            let item_sequence = item2.data.get('sequence');
            let item_id = item2.data.get('id');
            if (Math.abs(item_sequence - sequence) === 1) {
                
                if (item2.showed && !item2.connected) {
                    let points = [
                        new Phaser.Math.Vector2(item.x, item.y),
                        new Phaser.Math.Vector2(item2.x, item2.y)
                    ];
                    let curve = new Phaser.Curves.Spline(points);
                    let graphics = new Phaser.GameObjects.Graphics(game_data['scene']);  
                    graphics.lineStyle(5, this.colors['success'], 1);
                    curve.draw(graphics, 64);
                    graphics.curve = curve;
                    this.items_cont.addAt(graphics, 0);
                    item.connected = true;
                    item.connected_item = item2;
                    item2.connected = true;
                    item2.connected_item = item;
                    item.connected_line = graphics;
                    item2.connected_line = graphics;
                    game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'tap'});
                    this.check_win();
                }

            }
        });
    },

    check_win() {
        let all_connected = this.items.every(item => item.connected);
        if (all_connected) {
            let isWin = true;
            this.items.forEach(item => {
                let related_id = item.data.get('related_id');
                let related_id2 = item.connected_item.data.get('related_id');
                if (!(related_id === related_id2)) {
                    item.connected_line.clear();
                    item.connected_line.lineStyle(5, this.colors['fail'], 1);
                    item.connected_line.curve.draw(item.connected_line, 64);
                    isWin = false;
                }
            });
            this.reset_ready_move();
            if (isWin) {
                this.emitter.emit('EVENT', {'event': 'level_complete', 'star_collected': true});
            }
            else {
                game_data['game_root'].block_interface();
                this.fal_tid = setTimeout(() => {
                    this.emitter.emit('EVENT', {'event': 'level_failed', 'reason': 'tries'});
                    clearTimeout(this.fal_tid);
                    game_data['game_root'].unblock_interface();
                }, 1000);
            }
        }
    },

    update() {
        if (this.ready_move) {
            if (this.from_item) {
                let pt_start = new Phaser.Geom.Point(this.from_item.x, this.from_item.y);
                let pt_end = new Phaser.Geom.Point(game_data.scene.game.input.mousePointer.x, game_data.scene.game.input.mousePointer.y);;
                pt_end = game_data['utils'].toLocal(this.items_cont, new Phaser.Geom.Point(pt_end.x, pt_end.y));

                this.line_graphics.clear();
                this.line_graphics.lineStyle(5, this.colors['success'], 5);
                let points = [
                    new Phaser.Math.Vector2(pt_start.x, pt_start.y),
                    new Phaser.Math.Vector2(pt_end.x, pt_end.y)
                ];
                let curve = new Phaser.Curves.Spline(points);
                curve.draw(this.line_graphics, 64);
                
            }
        }
    },

    reset_ready_move() {
        if (this.ready_move) {
            this.ready_move = false;
            this.from_item = null;
            this.line_graphics.clear();
            
        }
    },
    
    pointerup(params) {
        this.reset_ready_move();
    },

    pointerdown(params) {
        this.ready_move = true;
        this.from_item = params['item'];
    },

    pointerover(params) {
        if (this.ready_move) {
            if (params['item'] && this.from_item && this.from_item !== params['item']) {
                let sequence = this.from_item.data.get('sequence');
                let sequence2 = params['item'].data.get('sequence');
                if (Math.abs(sequence - sequence2) === 1) {
                    params['item'].show();
                    this.pointerup();
                }
            }
        }
    },

    handler_event(params) {
        switch (params['event']) {
            case 'hide_all_items': 
                this.hide_all_items(params)
            break;

            case 'hide_items': 
                this.hide_items(params)
            break;

            case 'check_connect':
                this.stop_hand();
                this.check_connect(params)
            break;

            case 'pointerup':
                this.pointerup(params);
            break;

            case 'pointerdown':
                this.pointerdown(params);
            break;

            case 'pointerover':
                this.pointerover(params);
            break;

            default:
            //console.log('Unknown event=',params['event'])
            break;
          }
    },

    continue_game() {
        this.items.forEach(item => {
            let related_id = item.data.get('related_id');
            let related_id2 = item.connected_item.data.get('related_id');
            if (!(related_id === related_id2)) {
                item.connected_line.clear();
                item.connected = false;
                item.hide();
                item.connected = false;
                item.connected_item.connected_item.hide();
            }
        });
    },

    show_hint(elem1, elem2) {
        this.show_hand(elem1.x, elem1.y, elem2.x, elem2.y);
        elem1 = game_data['utils'].toLocal(this.items_cont, new Phaser.Geom.Point(elem1.x, elem1.y));
        elem2 = game_data['utils'].toLocal(this.items_cont, new Phaser.Geom.Point(elem2.x, elem2.y));
        this.create_dotted_line(elem1.x, elem1.y, elem2.x, elem2.y);
    },

    show_hand(startX, startY, endX, endY) {
        this.stop_hand();
        game_data['game_play'].hand.setVisible(true);
        game_data['game_play'].hand.x = startX;
        game_data['game_play'].hand.y = startY;

        this.hand_tween = game_data['scene'].tweens.add({
            targets: game_data['game_play'].hand,
            x: endX,
            y: endY,
            repeat: -1,
            duration: 2000,
            ease: 'Sine.easeInOut',
            onComplete: () => {
            }
        });
    },

    stop_hand() {
        if (this.hand_tween) {
            this.hand_tween.stop();
            this.hand_tween = null;
        }
        game_data['game_play'].hand.setVisible(false);
    },

    create_dotted_line(startX, startY, endX, endY, n = 25) {
        let points = [];
    
        // Calculate the difference between the end and start coordinates
        let deltaX = (endX - startX) / (n - 1);
        let deltaY = (endY - startY) / (n - 1);
        
        // Generate points along the line
        for (let i = 0; i < n; i++) {
            let x = startX + i * deltaX;
            let y = startY + i * deltaY;
            points.push({ x: x, y: y });
        }
        
        this.dotted_graphics = new Phaser.GameObjects.Graphics(game_data['scene']);
        this.items_cont.addAt(this.dotted_graphics, 0); 
        
        points.forEach((point, i) => {
            if (i+1 in points) {
                let point1 = point;
                let point2 = points[i+1];
                this.dotted_graphics.lineStyle(5, this.colors['success'], 5);
                if (i % 2 === 0) this.dotted_graphics.lineStyle(5, this.colors['success'], 0);
    
                this.dotted_graphics.lineBetween(point1.x, point1.y, point2.x, point2.y);
            }
        })
    },

    time_out() {
        if (!this.level_completed) {
            this.level_fail = true;
            this.emitter.emit('EVENT', {'event': 'level_failed', 'reason': 'time'});
        }
    },
    
    remove_level() {
        this.stop_hand();
        this.destroy();
    }
});
let MemoryPuzzle = new Phaser.Class({

	Extends: Phaser.GameObjects.Container,

	initialize:

	function MemoryPuzzle()
	{
		this.scene = game_data['scene'];
		Phaser.GameObjects.Container.call(this, this.scene, 0, 0);
		this.emitter = new Phaser.Events.EventEmitter();
        this.allow_click = true;
        this.level_fail = false;
        this.level_completed = false;
        this.opening_cards = [];
        this.closing_cards = [];
	},

	init() {
        this.attr = {};
        this.type = 'memory';
        this.cards_holder = new Phaser.GameObjects.Container(this.scene, 0, 0);
        this.add(this.cards_holder);
        this.cards_group = new Phaser.GameObjects.Group(this.scene);
        this.wnd_overlay = new Phaser.GameObjects.Image(this.scene, 0, 0,'dark_overlay');
		this.wnd_overlay.setOrigin(0,0);
		this.wnd_overlay.alpha = 0.01;
		game_data['scene'].add.existing(this.wnd_overlay);
		this.wnd_overlay.setInteractive();
		this.wnd_overlay.visible = false;
	},

    start_game_play() {
        this.emitter.emit('EVENT', {'event': 'resume_timer'});
    },

    update_level(params) {
        this.level_info = params['level_info'];
        this.emojies = [...this.level_info['items']];
        if (this.emojies.length <= 0) throw new Error('Level is broken, items length less or equals to 0');
        else if (!('col' in this.level_info)) throw new Error('Level is broken, col is missed');
        else if (!('row' in this.level_info)) throw new Error('Level is broken, row is missed');
        let need_item_amount = this.level_info['col'] * this.level_info['row'] / 2;

        let emojies_copy = game_data['utils'].deep_copy(game_data['emojies']);
        let keys = Object.keys(emojies_copy);
        keys.forEach(key => {
            emojies_copy[key]['arr'] = Phaser.Utils.Array.NumberArray(emojies_copy[key]['start_index'], emojies_copy[key]['end_index']);
        })
        this.default_urls = this.emojies.map(key => `assets/emojies/${key}.png`);;
        this.random_urls = [];
        
        while (this.emojies.length < need_item_amount) {
            let key = Phaser.Utils.Array.GetRandom(keys);
            let ind = Phaser.Utils.Array.RemoveRandomElement(emojies_copy[key]['arr']);
            if (!this.emojies.includes(`${key}/${key}_${ind}`)) {
                this.emojies.push(`${key}/${key}_${ind}`);
                this.random_urls.push(`assets/emojies/${key}/${key}_${ind}.png`);
            }
        }
        let emo_keys = this.emojies.map(key => key);
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
        let to_increment_stage = 'to_increment_stage' in params ? params['to_increment_stage'] : true;
        this.level_info = params['level_info'];
        let level = this.level_info;
        let dx = 150;
        let dy = 150;
        this.selected_cards = [];
        let level_scale = this.get_field_scale(level);
        let ids = [];
        let del = 2000;
        let total = level['col'] * level['row'];
        let total_ids = [...this.emojies]

        for (let i = 0; i < Math.floor(total / 2); i++) {
            let id = Phaser.Utils.Array.RemoveRandomElement(total_ids);
            if (!id) id = 1;
            ids.push(id);
            ids.push(id);
        }
        this.block_interface();
        for (let col = 0; col < level['col']; col++) {
            for (let row = 0; row < level['row']; row++) {
                let card = new MemoryPuzzleItem();
                let id = Phaser.Utils.Array.RemoveRandomElement(ids);
                card.init({ id });
                card.emitter.on('EVENT', this.handler_event, this);
                card.x = col * dx;
                card.y = row * dy;
                let unblock = ids.length === 0;
                card.open_card(null, true);
                this.close_card_before_start(card, unblock, del);
                this.cards_group.add(card);
                this.cards_holder.add(card);
                
                del+=155;
            }
        }
        
        if (to_increment_stage) this.currentStage++;
        let start_x = 0;
        let start_y = 0;
        let col = level['col'];
        let row = level['row'];
        let end_x = row;
        let end_y = col;

        this.cards_holder.scale = level_scale;
        let x = loading_vars['W'] / 2;
        let y = loading_vars['H'] / 2;
        let dx2 = ((end_y - start_y - 1) * dy * level_scale) / 2;
        let dy2 = ((end_x - start_x - 1) * dx * level_scale) / 2;
        x -= dx2;
        y -= dy2;
        this.cards_holder.x = x;
        this.cards_holder.y = y;
        this.attr['paused'] = false;
    },

    close_card_before_start(card, unblock, del) {
        if (game_data['unpaused'] === 0) {
            setTimeout(() => {
                this.close_card_before_start(card, unblock, del);
            }, 100);
        }
        else {
            setTimeout(() => {
                if (game_data['unpaused'] === 0) {
                    setTimeout(() => {
                        this.close_card_before_start(card, unblock, del);
                    }, 100);
                }
                else {
                    card.close_card(() => {
                        if (unblock) {
                            this.unblock_interface();
                            this.start_game_play();
                        }
                    });
                }
            }, del);
        }
    },

    get_field_scale(params) {
		let col = params['col'];
		let row = params['row'];
		let level_scale;
        let fieldW = 550;
        let fieldH = 520;
        let item_width = 103;
        let item_height = 117;
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

    handler_event(params) {
        switch (params['event']) {
            case 'CARD_CLICKED':
                this.handler_card_clicked(params);
                break;
            case 'ADD_OPENING_CARD':
                this.add_opening_card(params);
                break;
            case 'REMOVE_OPENING_CARD':
                this.remove_opening_card(params);
                break;
            case 'ADD_CLOSING_CARD':
                this.add_closing_card(params);
                break;
            case 'REMOVE_CLOSING_CARD':
                this.remove_closing_card(params);
                break;
            default:
                this.emitter.emit('EVENT', params);
            break;
        }
    },

    add_opening_card(obj) {
        let card = obj['playing_card'];
        let ind = this.opening_cards.indexOf(card);
        if (ind === -1) this.opening_cards.push(card);
    },

    remove_opening_card(obj) {
        let card = obj['playing_card'];
        let ind = this.opening_cards.indexOf(card);
        if (ind !== -1) this.opening_cards.splice(ind, 1);
    },

    add_closing_card(obj) {
        let card = obj['playing_card'];
        let ind = this.closing_cards.indexOf(card);
        if (ind === -1) this.closing_cards.push(card);
    },

    remove_closing_card(obj) {
        let card = obj['playing_card'];
        let ind = this.closing_cards.indexOf(card);
        if (ind !== -1) this.closing_cards.splice(ind, 1);
    },

    board_completed() {
        let children = this.cards_group.getChildren();
        let element = children.find(child => !child.attr.matched)
        return !element;
    },
 
    last_pair() {
        let children = this.cards_group.getChildren();
        let elements = children.filter(child => !child.attr.matched)
        return elements.length === 2;
    },

    get_candidates() {
        let children = this.cards_group.getChildren();
        let elements = children.filter(child => !child.attr.matched)
        return elements;
    },

    check_win() {
        if (this.board_completed() && !this.level_fail) {
            this.level_completed = true;
            this.emitter.emit('EVENT', {'event': 'level_complete', 'star_collected': true});
        }
    },

    handler_card_clicked(obj) {
        let res = this.remove_cards(obj);
        if (res['success'] && !this.level_fail) {
            this.matching_anim = true;
            this.selected_cards.forEach((obj, i) => {
                let playing_card = obj['playing_card'];
                let allow_unblock = i === this.selected_cards.length - 1;
                if (!this.level_fail) playing_card.match_card(() => {
                    if (allow_unblock) this.matching_anim = false;
                });
            });
            this.check_win();
            this.selected_cards = []; 
        }
        else if (res['mistake']) {
            this.closing_anim = true;
            this.selected_cards.forEach((obj, i) => {
                let playing_card = obj['playing_card'];
                let allow_unblock = i === this.selected_cards.length - 1;
                playing_card.close_card(() => {
                    if (allow_unblock) this.closing_anim = false;
                });
                playing_card.attr.opened = false;
            });
            this.selected_cards = [];
        }
    },

    remove_cards(obj) {
		let res = {};
		let playing_card = obj['playing_card'];
        
        if (this.selected_cards.length == 0) {
			this.selected_cards.push(obj);
			res['success'] = false;
            
		}
        else if (this.selected_cards[0]['playing_card'] == playing_card) {
            this.selected_cards = [];
            res['second_cond'] = true;
			res['success'] = false;
		}
        else if (this.selected_cards.length > 0) {
			let rank1 = this.selected_cards[0]['playing_card'].get_rank();
			let rank2 = playing_card.get_rank();
			if (this.check_remove_card(rank1, rank2) ) {
                this.selected_cards.push(obj);
				res['success'] = this.selected_cards.length > 1;
                res['fourth_cond'] = true;
			}
			else {
                this.selected_cards.push(obj);
				res['success'] = false;
				res['mistake'] = true;
                res['third_cond'] = true;
			}
		}
		return res;
    },

    check_remove_card(rank1, rank2) {
        return (rank1 == rank2);
	},

    get_type() {
        return this.type;
    },

    block_interface() {
		console.log('block')
		if (this.wnd_overlay) this.wnd_overlay.visible = true;
	},

	unblock_interface() {
		console.log('unblock')
		if (this.wnd_overlay) this.wnd_overlay.visible = false;
	},

    pointerup(params) {

    },

    continue_game() {
        this.level_fail = false;
    },


    time_out() {
        if (!this.level_completed) {
            this.level_fail = true;           
            this.emitter.emit('EVENT', {'event': 'level_failed', 'reason': 'time'});
        }
    },

    remove_level() {
        this.level_completed = false;
        this.score = 0;
        this.currentStage = 0;
        this.level_fail = false;
        this.tictac_played = false;
        this.currentStageAdsWatched = 0;
        this.cards_holder.removeAll(true);
        this.destroy();
    },

});

let MemoryPuzzleItem = new Phaser.Class({

	Extends: Phaser.GameObjects.Container,

	initialize:

	function MemoryPuzzleItem()
	{
		this.scene = game_data['scene'];
		Phaser.GameObjects.Container.call(this, this.scene, 0, 0);
		this.emitter = new Phaser.Events.EventEmitter();
	},

	init({ id }) {
		this.attr = {
			'opened': false,
			'matched': false,
			'anim_playing': false,
			'collapse_playing': false,
			'id': null
		};

		this.assign_card(id);
        this.scene = game_data['scene'];
        this.removeAll(true);
		this.content_holder = new Phaser.GameObjects.Container(this.scene, 0, 0);
		this.add(this.content_holder);

		this.card_content = new Phaser.GameObjects.Container(this.scene, 0, 0);
		this.card_shirt = new Phaser.GameObjects.Container(this.scene, 0, 0);

        this.content_holder.add(this.card_shirt);
		this.content_holder.add(this.card_content);

		
        this.card_shirt.bg = new Phaser.GameObjects.Image(this.scene, 0, 0, 'common1', 'rect_1');
        this.card_bg1 = new Phaser.GameObjects.Image(this.scene, 0, 0, 'common1', 'rect_1');
        this.card_bg2 = new Phaser.GameObjects.Image(this.scene, 0, 0, this.attr.id).setScale(0.7);
		this.card_shirt.add(this.card_shirt.bg);
		this.card_content.add(this.card_bg1);
		this.card_content.add(this.card_bg2);

        let bg = this.card_shirt.bg;
		this.content_holder.setInteractive({hitArea: new Phaser.Geom.Rectangle(-bg.width*0.5, -bg.height*0.5, bg.width, bg.height),
			hitAreaCallback: Phaser.Geom.Rectangle.Contains,
			useHandCursor: true });
		this.content_holder.on('pointerover', this.handler_over, this)
		this.content_holder.on('pointerout', this.handler_out, this)
		this.content_holder.on('pointerdown', this.handler_click, this)

		this.close_card(null, true);
	},

	assign_card(id) {
		this.attr.id = id;
	},

	match_card(on_complete = () => {}) {
		this.attr.matched = true;
		this.attr.collapse_playing = true;
		game_data['scene'].tweens.add({
			targets: this,
			rotation: Phaser.Math.DegToRad(500),
			scaleX: 0,
			scaleY: 0,
			duration: 400,
			ease: 'Sine.easeInOut',
			onComplete: () => {
				this.setVisible(false);
				this.attr.collapse_playing = false;
				on_complete();
			}
		})
	},

    handler_click(on_complete = () => {}) {
		if (!this.attr.opened && game_data['game_play'].puzzle.last_pair() && game_data['game_play'].puzzle.selected_cards.length > 0)  {
			this.emitter.emit('EVENT', {'event': 'pause_timer'});
		}
		
        if (!game_data['game_play'].puzzle.matching_anim && !game_data['game_play'].puzzle.closing_anim && game_data['game_play'].puzzle.opening_cards.length < 2 && game_data['game_play'].puzzle.closing_cards.length === 0) {
			if (!this.attr.anim_playing) {
				if (this.attr.opened) {
					this.close_card(() => {
						this.emitter.emit('EVENT', {'event': 'CARD_CLICKED', 'playing_card': this, 'manual':true});
					});
				}
				else {
					this.open_card(() => {
						this.emitter.emit('EVENT', {'event': 'CARD_CLICKED', 'playing_card': this, 'manual':true});
					});
				}
				this.attr.opened = !this.attr.opened;
			}
		}
    },

    handler_out() {

    },

    handler_over() {

    },

	get_id() {
		return this.attr.id;
	},

	get_rank() {
		return this.attr.id;
	},

	open_card(on_complete = null, quick = false, dur = 230) {
		this.opened = true;
		this.attr.anim_playing = true;
		this.emitter.emit('EVENT', {'event': 'ADD_OPENING_CARD', 'playing_card': this});
		if (quick) {
			this.card_shirt.visible = false;
			this.card_content.visible = true;
			this.attr.anim_playing = false;
			this.emitter.emit('EVENT', {'event': 'REMOVE_OPENING_CARD', 'playing_card': this});
		}
		else if (this.scene) {
			game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'open_card'});
			game_data['scene'].tweens.add({targets: this.content_holder, scaleX : 0, scaleY : 1.1, ease: 'Sine.easeIn', duration: dur, onComplete: () => {
				if (this.scene) {
					this.card_shirt.visible = false;
					this.content_holder.remove(this.card_shirt);
					this.content_holder.add(this.card_content);
					this.card_content.visible = true;
					game_data['scene'].tweens.add({targets: this.content_holder, scaleX : 1, scaleY : 1, ease: 'Sine.easeOut', duration: dur, onComplete: () => {
						if (on_complete) on_complete();
						this.attr.anim_playing = false;
						this.emitter.emit('EVENT', {'event': 'REMOVE_OPENING_CARD', 'playing_card': this});
					}});
				}
				else {
					this.attr.anim_playing = false;
					this.emitter.emit('EVENT', {'event': 'REMOVE_OPENING_CARD', 'playing_card': this});
				}
			}});
		}
		else {
			this.attr.anim_playing = false;
			this.emitter.emit('EVENT', {'event': 'REMOVE_OPENING_CARD', 'playing_card': this});
		}
	},

	close_card(on_complete = null, quick = false, dur = 230) {
		this.opened = false;
		this.attr.anim_playing = true;
		this.emitter.emit('EVENT', {'event': 'ADD_CLOSING_CARD', 'playing_card': this});
		if (quick) {
			this.card_content.visible = false;
			this.card_shirt.visible = true;
			this.attr.anim_playing = false;
			this.emitter.emit('EVENT', {'event': 'REMOVE_CLOSING_CARD', 'playing_card': this});
		}
		else if (this.scene) game_data['scene'].tweens.add({targets: this.content_holder, scaleX : 0, scaleY : 1.1, ease: 'Sine.easeIn', duration: dur, onComplete: () => {
			this.card_content.visible = false;
			this.content_holder.remove(this.card_content);
			this.content_holder.add(this.card_shirt);
			this.card_shirt.visible = true;
			if (this.scene) game_data['scene'].tweens.add({targets: this.content_holder, scaleX : 1, scaleY : 1, ease: 'Sine.easeOut', duration: dur, onComplete: () => {
				if (on_complete) on_complete();
				this.attr.anim_playing = false;
				this.emitter.emit('EVENT', {'event': 'REMOVE_CLOSING_CARD', 'playing_card': this});
			}});
			else {
				this.attr.anim_playing = false;
				this.emitter.emit('EVENT', {'event': 'REMOVE_CLOSING_CARD', 'playing_card': this});
			}
		}});
		else {
			this.attr.anim_playing = false;
			this.emitter.emit('EVENT', {'event': 'REMOVE_CLOSING_CARD', 'playing_card': this});
		}
	},

});

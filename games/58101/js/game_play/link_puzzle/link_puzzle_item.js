let LinkPuzzleItem = new Phaser.Class({
 
	Extends: Phaser.GameObjects.Container,   

	initialize:

	function LinkPuzzleItem(scene)
	{
		this.scene = game_data['scene'];
		Phaser.GameObjects.Container.call(this, this.scene, 0, 0);        
		this.emitter = new Phaser.Events.EventEmitter();
        this.showed = false;
	},

	init(params) {
        let { id, related_id, sequence, name } = params;
        let back = new Phaser.GameObjects.Image(this.scene, 0, 0, 'common1', 'rect_1');
        this.back = back;
        back.setInteractive({ useHandCursor: true });
        back.alpha = 0.01;
        back.on('pointerdown', () => {
            game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'tap'});
            this.emitter.emit('EVENT', {'event': 'pointerdown', 'item': this });
            this.show();
        }, this);
        back.on('pointerover', () => {
            this.emitter.emit('EVENT', {'event': 'pointerover', 'item': this });
        }, this);

        back.on('pointerup', () => {
            
            this.emitter.emit('EVENT', {'event': 'pointerup', 'item': this });
        }, this);
        let img = new Phaser.GameObjects.Image(this.scene, 0, 0, name);
        img.setScale((141 - 30) / Math.max(img.width,img.height));
        this.setData({
            id,
            related_id,
            sequence
        });
        this.add(back);
        this.add(img);
    },

    show(on_complete = () => {}) {
        let sequence = this.data.get('sequence');
        this.emitter.emit('EVENT', {'event': 'hide_items', 'sequence': sequence});
        this.emitter.emit('EVENT', {'event': 'check_connect', 'item': this });
        
        this.show_anim1 = game_data.scene.tweens.add({
            targets: this,
            scale: 1.1,
            yoyo: true,
            ease: 'Sine.easeInOut',
            duration: 140,
            onComplete: () => {}
        });
        
        this.show_anim2 = game_data.scene.tweens.add({
            targets: this.back,
            alpha: 1,
            ease: 'Sine.easeInOut',
            delay: 20,
            duration: 120,
            onComplete: () => {
                on_complete();
            }
        });
        this.showed = true;
    },

    hide(on_complete = () => {}) {
        if (this.showed) {
            this.stop_tween();
            this.showed = false;
            game_data.scene.tweens.add({
                targets: this.back,
                alpha: 0.01,
                ease: 'Sine.easeInOut',
                duration: 70,
                onComplete: () => {
                    on_complete();
                }
            });
        }
    },

    stop_tween() {
        if (this.show_anim1) {
            this.show_anim1.stop();
            this.show_anim1 = null;
        }
        if (this.show_anim2) {
            this.show_anim2.stop();
            this.show_anim2 = null;
        }
    }

});
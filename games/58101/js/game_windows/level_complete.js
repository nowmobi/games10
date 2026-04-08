let LevelComplete = new Phaser.Class({
 
	Extends: Phaser.GameObjects.Container,   

	initialize:

	function LevelComplete()
    {
        this.scene = game_data['scene'];
        Phaser.GameObjects.Container.call(this, this.scene, 0, 0);        
        this.emitter = new Phaser.Events.EventEmitter();
    },


init(params) {
	this.level_id = params['level_id'];
    this.star_collected = params['star_collected'];
    let temp = {'scene_id': 'game_windows', 'item_id': 'level_complete', 'phrase_id': '1', 'values': []}
	game_data['graphics_manager'].get_window('info', null, [{ handler: this.handler_replay, type: 'big' }], this, temp, true);
	this.button_play = this.buttons[0];
	this.button_play.setVisible(false);
    this.create_assets();
},	

create_assets() {
    let star = new Phaser.GameObjects.Image(this.scene, 0, -60, 'common1', 'star_unactive');
    this.add(star);

	if (this.star_collected) {
		let icon = new Phaser.GameObjects.Image(this.scene, 0, -60, 'common1', 'star_active');
		this.add(icon);
		icon.alpha = 0;
		this.anim_star({ icon }, 400)
	}

    let res = game_data['utils'].generate_string({'scene_id': 'game_windows', 'item_id': 'complete_phrase', 'phrase_id': Phaser.Math.Between(1,12), 'values': [], 'base_size': 38});	
	this.phrase = new Phaser.GameObjects.Text(this.scene, 0, 10, res['text'], {fontFamily:"font2", fontSize: res['size'], color:'#000'});
	this.phrase.setOrigin(0.5);
	this.add(this.phrase);

    this.button_play = new CustomButton(this.scene, 0, 100, () => {
		this.handler_next();
	}, 'common1', 'btn1_play_big', 'btn2_play_big', 'btn1_play_big', this, null, null, 1);
	this.add(this.button_play);
	if (!game_data['utils'].is_level_available(this.level_id + 1)) {
		this.button_play.alpha = 0.5;

		res = game_data['utils'].generate_string({'scene_id': 'game_windows', 'item_id': 'level_complete', 'phrase_id': '4', 'values': [], 'base_size': 24});
		let temp = new Phaser.GameObjects.Text(this.scene, 0, 105, res['text'], {fontFamily:"font2", fontSize: res['size'], color:'#fff', wordWrap: {'width': 100}, align: 'center'});
		temp.setOrigin(0.5);
		this.add(temp);

		game_data['scene'].tweens.add({
			targets: temp,
			alpha: 0.4,
			duration: 400,
			repeat: -1,
			yoyo: true,
			ease: 'Sine.easeInOut',
			onComplete: () => {}
		})
	}

    this.button_repeat = new CustomButton(this.scene, 170, 100, () => {
		this.handler_replay();
	}, 'common1', 'btn1_repeat', 'btn2_repeat', 'btn1_repeat', this, null, null, 1);
	this.add(this.button_repeat);

    this.button_menu = new CustomButton(this.scene, -170, 100, () => {
		this.handler_menu();
	}, 'common1', 'btn1_home2', 'btn2_home2', 'btn1_home2', this, null, null, 1);
	this.add(this.button_menu);
},

handler_next() {
	let passed = game_data['utils'].get_passed_amount();
	if (loading_vars['demo_mode'] && passed >= game_data['demo_limit_level'] && this.level_id + 1 > game_data['demo_limit_level']) {
		let pt = game_data['utils'].toGlobal(this.button_play, new Phaser.Geom.Point(0, 0));
		game_data['utils'].show_tip({'pt': pt, 'scene_id': 'game_map', 'item_id': 'demo', 'phrase_id': '1', 'values': [], 'forced': true});
	}
	else {
		if (game_data['utils'].is_level_available(this.level_id + 1)) {
			if (this.level_id in levels) {
				game_data['utils'].remove_level_from_cache([
					...game_data['game_play'].puzzle.default_urls,
					...game_data['game_play'].puzzle.random_urls
				]);
				this.close_window();
				game_data['game_play'].removeLevel();
				game_data['game_map'].handler_level_start(this.level_id + 1);
			}
			else {
				this.handler_menu();
			}
		}
	}
},

handler_replay() {
	game_data['utils'].remove_level_from_cache([
		...game_data['game_play'].puzzle.random_urls
	]);
	this.close_window();
	game_data['game_play'].removeLevel();
	game_data['game_map'].handler_level_start(this.level_id);
},

handler_menu() {
	game_data['utils'].remove_level_from_cache([
		...game_data['game_play'].puzzle.default_urls,
		...game_data['game_play'].puzzle.random_urls
	]);
	this.close_window();
	game_data['game_play'].removeLevel();
	game_data['game_play'].handler_back();
},

handler_close(params) {
	// to not to close the window accidentally 
	// this.close_window();
},

close_window(params) {
	this.emitter.emit("EVENT", {'event': 'window_close'});
},

anim_star(obj, delay) {
	let icon = obj['icon'];
	setTimeout(() => {
		if (this.scene) {
			let dx = icon.x;
			let dy = icon.y;
			let d_angle = icon.angle;
			icon.y -= 350;
			let sign = (Math.random() < 0.5 ? 1 : -1);
			icon.angle = -300 * sign;
			icon.x += (Math.random() * 200 + 200) * sign;
			let start_pt = {'x': icon.x, 'y': icon.y};
			let end_pt = {'x': dx, 'y': dy};
			let mid_pt = {'x': dx + 100 * sign, 'y': dy - 50};
			let dur = 600;

			let emitter = this.scene.add.particles(0, 0, 'common1', {
				frame: 'star_active',
				follow: icon,
				lifespan: 1000,
				blendMode: 'ADD',
				alpha: { start: 1, end: 0.2 },
				scale: { start: 0.6, end: 0 },
				speed: { min: -200, max: 200 },
				quantity: 4,
				gravityY: -50,
				rotate: { onEmit: ()=> { return Math.random()*360; } },
			});
			this.add(emitter);

			game_data['utils'].bezier(start_pt, mid_pt, end_pt, icon, dur, 'Sine.easeOut', this, ()=>{
				if (this.scene) {
					setTimeout(() => {
						emitter.destroy();
					}, 1200);
				}
			}, null, 0, emitter);
			game_data['scene'].tweens.add({targets: icon, alpha: 1, duration: 100});
			game_data['scene'].tweens.add({targets: icon, angle: d_angle - 360, duration: dur});
			setTimeout(() => {
				if (this.scene && !this.is_closed) game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'get_star'});
			}, dur - 100);
		}

	}, delay);
}
});
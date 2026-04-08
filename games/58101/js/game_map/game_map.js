let GameStart = new Phaser.Class({
 
	Extends: Phaser.GameObjects.Container,   

	initialize:

	function GameStart (scene)
	{
		this.scene = game_data['scene'];
		Phaser.GameObjects.Container.call(this, scene, 0, 0);        
		this.emitter = new Phaser.Events.EventEmitter();
		this.params = {
			'items_per_page': 20
		}
	},


init(params) {
	game_data['game_map'] = this;
	this.create_assets();
	this.create_levels();

	let star = new Phaser.GameObjects.Image(this.scene, 50, 50, 'common1', 'star_active');
	this.add(star);

	this.star_txt = new Phaser.GameObjects.Text(this.scene, star.x + 45, star.y, '0', {
		fontFamily:"font2", fontSize: 60, color:'#ffffff', stroke: '#000', strokeThickness: 3
	});
	this.star_txt.setOrigin(0, 0.5);
	this.add(this.star_txt);

	let { items_per_page } = this.params;
	
	this.current_page = Math.floor(game_data['user_data']['levels_passed'].length/items_per_page);
	if (this.current_page < 0) this.current_page = 0;
	if (this.current_page > this.total_pages - 1) this.current_page = this.total_pages - 1;
	
	this.btn_left = new CustomButton(this.scene, loading_vars.W * 0.07, loading_vars['H'] * 0.46, () => {
		this.handler_left();
	}, 'common1', 'btn1_arrow', 'btn2_arrow', 'btn1_arrow',  this);
	this.btn_left.scaleX = -1;
	this.add(this.btn_left);

	this.btn_right = new CustomButton(this.scene, loading_vars.W * 0.93, loading_vars['H'] * 0.46, () => {
		this.handler_right();
	}, 'common1', 'btn1_arrow', 'btn2_arrow', 'btn1_arrow',  this);
	this.add(this.btn_right);

	this.update_levels();
	this.update_buttons();

	this.create_lang_button();
	this.create_sound_buttons();
	this.create_remove_ad_button();
},

create_remove_ad_button() {
	this.button_ad = new Phaser.GameObjects.Container(this.scene, 0, 0);
	this.add(this.button_ad);

	this.button_ad2 = new CustomButton(this.scene, loading_vars['W'] - 50, loading_vars['H'] - 50, this.handler_remove_ad, 'common1', 'btn1_no_ads', 'btn2_no_ads', 'btn1_no_ads',  this);
	this.button_ad.add(this.button_ad2);
},


handler_remove_ad() {
	window.open("https://newkidsgames.org/?utm_source=GameMonetize&utm_medium=emoji_skill_puzzles", "_blank");
},

create_lang_button() {
	this.button_lang = new Phaser.GameObjects.Container(this.scene, 0, 0);
	this.add(this.button_lang);

	this.button_lang2 = new CustomButton(this.scene, 50, loading_vars['H'] - 50, this.handler_lang, 'common1', 'btn1_lang', 'btn2_lang', 'btn1_lang', this);
	this.button_lang.add(this.button_lang2);
},

handler_lang() {
	this.emitter.emit('EVENT', {'event': 'show_window', 'window_id': 'select_language'});

				sdk.showBanner();

	// this.emitter.emit('EVENT', {'event': 'show_window', 'window_id': 'level_start'});
},

create_sound_buttons() {
	this.buttonsGroup = this.scene.add.group();

	this.button_music = new Phaser.GameObjects.Container(this.scene, 0, 0);
	this.add(this.button_music);
	this.button_music_on = new CustomButton(this.scene, loading_vars['W'] - 150, 50, this.handler_music, 'common1', 'btn1_music_on', 'btn2_music_on', 'btn1_music_on',  this);
	this.button_music.add(this.button_music_on);
	this.button_music_off = new CustomButton(this.scene, loading_vars['W'] - 150, 50, this.handler_music, 'common1', 'btn1_music_off', 'btn2_music_off', 'btn1_music_off', this);
	this.button_music.add(this.button_music_off);
	this.buttonsGroup.add(this.button_music);
	 
	this.button_sound = new Phaser.GameObjects.Container(this.scene, 0, 0);
	this.add(this.button_sound);
	this.button_sound_on = new CustomButton(this.scene, loading_vars['W'] - 50, 50, this.handler_sound, 'common1', 'btn_sound_on1', 'btn_sound_on2', 'btn_sound_on1', this);
	this.button_sound.add(this.button_sound_on);
	this.button_sound_off = new CustomButton(this.scene, loading_vars['W'] - 50, 50, this.handler_sound, 'common1', 'btn_sound_off1', 'btn_sound_off2', 'btn_sound_off1', this);
	this.button_sound.add(this.button_sound_off);
	this.buttonsGroup.add(this.button_sound);
	
	this.update_sound_buttons();
},

handler_music(params) { 	
	game_data['user_data']['music'] = 1 - game_data['user_data']['music'];
	this.update_sound_buttons();
	game_request.request({
		'set_options': true, 'sound': game_data['user_data']['sound'] , 'music': game_data['user_data']['music']
	}, () => {});
	game_data['audio_manager'].update_volume();
},

handler_sound(params) {	
	game_data['user_data']['sound'] = 1 - game_data['user_data']['sound'];
	this.update_sound_buttons();
	game_request.request({
		'set_options': true, 'sound': game_data['user_data']['sound'] , 'music': game_data['user_data']['music']
	}, () => {});
	game_data['audio_manager'].update_volume();
},

update_sound_buttons() {
	this.button_music_on.visible = game_data['user_data']['music'] == 1;
	this.button_music_off.visible = game_data['user_data']['music'] == 0;
	
	this.button_sound_on.visible = game_data['user_data']['sound'] == 1;
	this.button_sound_off.visible = game_data['user_data']['sound'] == 0;
},

create_assets() {

},

create_levels() {
	this.level_items = [];
	let coords = [
		{x: 0, y: 0}, {x: 100 + 20, y: 0}, {x: 200 + 40, y: 0}, {x: 300 + 60, y: 0},
		{x: 0, y: 100 + 40}, {x: 100 + 20, y: 100 + 40}, {x: 200 + 40, y: 100 + 40}, {x: 300 + 60, y: 100 + 40},
		{x: 0, y: 200 + 80}, {x: 100 + 20, y: 200 + 80}, {x: 200 + 40, y: 200 + 80}, {x: 300 + 60, y: 200 + 80},
		{x: 0, y: 300 + 120}, {x: 100 + 20, y: 300 + 120}, {x: 200 + 40, y: 300 + 120}, {x: 300 + 60, y: 300 + 120},
		{x: 0, y: 400 + 160}, {x: 100 + 20, y: 400 + 160}, {x: 200 + 40, y: 400 + 160}, {x: 300 + 60, y: 400 + 160},
	];
	let { items_per_page } = this.params;
	let levels_total = levels.length;
	let total_pages = Math.ceil(levels_total / items_per_page);
	this.total_pages = total_pages;
	this.pages = [];
	let level_id = 1;
	let res;
	let temp;
	
	for (let i = 0; i < total_pages; i++) {
		let page = new Phaser.GameObjects.Container(this.scene, 140, 190);
		this.add(page);
		page.items_group = this.scene.add.group();
		this.pages.push(page);

		let _items_per_page = items_per_page;
		if ((i+1) * items_per_page > levels_total) _items_per_page = levels_total - i * items_per_page

		for (let j = 0; j < _items_per_page; j++) {
			let { x, y } = coords[j];
			let id = level_id;
			let level_item = new CustomButton(this.scene, x, y, () => {
				this.handler_level_start(id, level_item);
			}, 'common1', 'btn_level_unlocked1', 'btn_level_unlocked2', 'btn_level_unlocked1',  this, null, null, 0.6);
			page.add(level_item);
			page.items_group.add(level_item);
			level_item.id = id;

			let level_no = new Phaser.GameObjects.Text(this.scene, 0, -2, level_id, {fontFamily:"font2", fontSize: 45, color:'#ffffff', stroke: '#000', strokeThickness: 3});
			level_no.setOrigin(0.5);
			level_item.add(level_no);
			level_id++;

			
			let star = new Phaser.GameObjects.Image(this.scene, 0, -55, 'common1', 'star_unactive');
			star.scale = 0.8;
			level_item.add(star);
			level_item.star = star;
			this.level_items.push(level_item);
		}
	}
	
},

update_levels() {
	let levels_passed = game_data['user_data']['levels_passed'];
	let sum = game_data['utils'].get_user_stars();

	this.star_txt.setText(sum);
	this.level_items.forEach(item => {
		let texture;
		if ((item.id - 1) in levels_passed && levels_passed[item.id - 1] === 1) {
			texture = 'star_active';
		}
		else if ((item.id - 1) in levels_passed && levels_passed[item.id - 1] === 0) {
			texture = 'star_unactive';
		}
		if (texture) {
			item.star.setTexture('common1', texture);
			item.star.setVisible(true);
		}
		else {
			item.star.setVisible(false);
		}
	});
	
},

handler_level_start(level_id, level_item) {
	let passed = game_data['utils'].get_passed_amount();
	if (loading_vars['demo_mode'] && passed >= game_data['demo_limit_level'] && level_id > game_data['demo_limit_level']) {
		let pt = game_data['utils'].toGlobal(level_item, new Phaser.Geom.Point(0, 0));
		game_data['utils'].show_tip({'pt': pt, 'scene_id': 'game_map', 'item_id': 'demo', 'phrase_id': '1', 'values': []});
	}
	else {
		if (game_data['utils'].is_level_available(level_id)) {
			game_data['utils'].check_ads('level_start');
			this.emitter.emit('EVENT', {'event': 'show_scene', 'scene_id': 'GAMEPLAY', 'level_id': level_id});
		}
		else {
			let pt = game_data['utils'].toGlobal(level_item, new Phaser.Geom.Point(0, 0));
			game_data['utils'].show_tip({'pt': pt, 'scene_id': 'game_map', 'item_id': 'level_inavailable', 'phrase_id': '1', 'values': []});
		}
	}
},

show(params) {
	this.update_buttons();
},

update_language() {	

},

update() {
	
},

handler_back() {
	this.emitter.emit('EVENT', {'event': 'show_scene', 'scene_id': 'MAP'});
},

update_buttons() {
	this.btn_left.setVisible(true);
	this.btn_right.setVisible(true);

	if (this.current_page === 0) this.btn_left.setVisible(false);
	if (this.current_page === this.total_pages - 1) this.btn_right.setVisible(false);
	this.pages.forEach(page => page.setVisible(false));
	
	this.pages[this.current_page].setVisible(true);
},

handler_right() {
	this.current_page++;
	if (this.current_page > this.total_pages - 1) this.current_page = this.total_pages - 1;
	this.update_buttons();
	
},

handler_left() {
	this.current_page--;
	if (this.current_page < 0) this.current_page = 0;
	this.update_buttons();
},

});
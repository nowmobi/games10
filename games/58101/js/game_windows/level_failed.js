let LevelFailed = new Phaser.Class({
 
	Extends: Phaser.GameObjects.Container,   

	initialize:

	function LevelFailed()
    {
        this.scene = game_data['scene'];
        Phaser.GameObjects.Container.call(this, this.scene, 0, 0);        
        this.emitter = new Phaser.Events.EventEmitter();
    },


init(params) {
	this.level_id = params['level_id'];
	this.ads_watched = params['ads_watched'];
    this.star_collected = params['star_collected'];
	this.reason = params['reason'];
    let temp = {'scene_id': 'game_windows', 'item_id': 'level_failed', 'phrase_id': '1', 'values': []}
	game_data['graphics_manager'].get_window('info', null, [{ handler: this.handler_replay, type: 'big' }], this, temp, true);
	this.button_play = this.buttons[0];
	this.button_play.setVisible(false);
    this.create_assets();
},	

create_assets() {
	let sad = new Phaser.GameObjects.Image(this.scene, 0, -60, 'common1', 'sad').setScale(0.7);
	this.add(sad);

    let res = game_data['utils'].generate_string({'scene_id': 'game_windows', 'item_id': 'fail_phrase', 'phrase_id': Phaser.Math.Between(1,7), 'values': [], 'base_size': 38});	
	this.phrase = new Phaser.GameObjects.Text(this.scene, 0, 25, res['text'], {fontFamily:"font2", fontSize: res['size'], color:'#000'});
	this.phrase.setOrigin(0.5);
	this.add(this.phrase);



    this.button_repeat = new CustomButton(this.scene, 100, 110, () => {
		this.handler_replay();
		
	}, 'common1', 'btn1_repeat', 'btn2_repeat', 'btn1_repeat', this, null, null, 1);
	this.add(this.button_repeat);

    this.button_menu = new CustomButton(this.scene, -100, 110, () => {
		this.handler_menu();
	}, 'common1', 'btn1_home2', 'btn2_home2', 'btn1_home2', this, null, null, 1);
	this.add(this.button_menu);

	if (this.ads_watched >= game_data['allowed_trials']) {
		this.button_try.setVisible(false);
		this.button_repeat.x = 80;
		this.button_menu.x = -80;
	}
},



handler_replay() {
	this.close_window();
	game_data['game_play'].removeLevel();
	game_data['game_map'].handler_level_start(this.level_id);
	
},

handler_menu() {
	this.close_window();
	game_data['game_play'].handler_back();
},

handler_close(params) {
	// to not to close the window accidentally
	// this.close_window();
},

close_window(params) {
	this.emitter.emit("EVENT", {'event': 'window_close'});
},

});
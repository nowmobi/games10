let PurchaseSuccess = new Phaser.Class({
 
	Extends: Phaser.GameObjects.Container,   

	initialize:

	function PurchaseSuccess()
    {
        this.scene = game_data['scene'];
        Phaser.GameObjects.Container.call(this, this.scene, 0, 0);        
        this.emitter = new Phaser.Events.EventEmitter();
    },


init(params) {
    let temp = {'scene_id': 'game_windows', 'item_id': 'purchase_complete', 'phrase_id': '1', 'values': []}
	game_data['graphics_manager'].get_window('info', null, [{ handler: this.handler_close, type: 'big' }], this, temp, true);
	this.button_play = this.buttons[0];
    this.button_play.setScale(0.4);

    res = game_data['utils'].generate_string({'scene_id': 'game_windows', 'item_id': 'purchase_complete', 'phrase_id': '3', 'values': [], 'base_size': 65});
    let button_txt = new Phaser.GameObjects.Text(this.scene, 0, -3, res['text'], {fontFamily:"font1", fontSize: res['size']});
    button_txt.setOrigin(0.5);
    this.button_play.add(button_txt);
    
	let no_ads = new Phaser.GameObjects.Image(this.scene, 0, -45, 'common1', 'no_ads');
	this.add(no_ads);
},


handler_close(params) {
	this.close_window();
},

close_window(params) {
	this.emitter.emit("EVENT", {'event': 'window_close'});
},

});
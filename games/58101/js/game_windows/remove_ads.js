let RemoveAds = new Phaser.Class({
 
	Extends: Phaser.GameObjects.Container,   

	initialize:

	function RemoveAds()
    {
        this.scene = game_data['scene'];
        Phaser.GameObjects.Container.call(this, this.scene, 0, 0);        
        this.emitter = new Phaser.Events.EventEmitter();
    },


init(params) {
    this.shop_item = {};
    for (i = 0; i < game_data['shop']['purchase'].length; i++) {
        if (game_data['shop']['purchase'][i]['id'] == 'remove_ad') {
            this.shop_item = game_data['shop']['purchase'][i];
            break;
        }
    }

	this.level_id = params['level_id'];
	this.ads_watched = params['ads_watched'];
    this.star_collected = params['star_collected'];
    let temp = {'scene_id': 'game_windows', 'item_id': 'remove_ads', 'phrase_id': '1', 'values': []}
	game_data['graphics_manager'].get_window('info', null, [{ handler: this.handler_buy, type: 'big'}], this, temp, true);
	this.button_play = this.buttons[0];
    this.button_play.setScale(0.8);
	// this.button_play.setVisible(false);
    this.create_assets();
},

create_assets() {
    let ico = new Phaser.GameObjects.Image(this.scene, 0, -50, 'common1', 'no_ads');
	this.add(ico);

    let button_txt = new Phaser.GameObjects.Text(this.scene, 0, 0, this.shop_item['price'] + '$', {fontFamily:"font1", fontSize: 100, color:'#fff'});
    button_txt.setOrigin(0.5);
    this.button_play.add(button_txt);
},

handler_buy() {
    game_data['utils'].purchase({'item_info': this.shop_item}, result => {
        if ('success' in result && result['success']) {
            game_request.request({'update_purchase': true, 'item_info': this.shop_item}, res => {
                game_data['game_map'].update_ad_btn();
                this.emitter.emit('EVENT', {'events': [{'event': 'window_close', 'immediate': true},
                    {'event': 'show_window', 'window_id': 'purchase_success'}
                ]});
            });
        }
        else {
            this.emitter.emit('EVENT', {'events': [{'event': 'window_close', 'immediate': true},
                                                    {'event': 'show_window', 'window_id': 'purchase_failed'}
            ]});
        }
    });
},

handler_close(params) {
	this.close_window();
},

close_window(params) {
	this.emitter.emit("EVENT", {'event': 'window_close'});
},

});
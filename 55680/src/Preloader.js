
BasicGame.Preloader = function (game) {
	this.background = null;
	this.preloadBar = null;
	this.ready = false;

};

BasicGame.Preloader.prototype = {
	preload: function () {
		this["box1"] = this.add.graphics(1, 1);
		this["box1"].beginFill(0x5C187A, 1);
		this["box1"].drawRect(0, 0, 540, 960);
		this.quesTxt1 = this.add.text(0, 0, "LOADING..", { font: "20px Arial", fill: "#ffffff", align: "right" });
		this.group = this.game.add.group();
		this.preloadBar = this.add.sprite(0, 0, 'preloaderBar');
		this.quesTxt1.x = (540 / 2) - (this.quesTxt1.width / 2)
		this.quesTxt1.y = 960 / 2
		this.preloadBar.x = this.quesTxt1.x - 20
		this.preloadBar.y = this.quesTxt1.y + 50
		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('bg', 'assets/Art/background.png');
		this.load.image('box', 'assets/Art/box.png');
		this.load.image('chars_left', 'assets/Art/chars_left.png');
		this.load.image('chars_right', 'assets/Art/chars_right.png');
		this.load.image('frame', 'assets/Art/frame.png');
		this.load.image('box_frame', 'assets/Art/box_frame.png');
		this.load.image('tiles0001', 'assets/Art/tiles0001.png');
		this.load.image('tiles0002', 'assets/Art/tiles0002.png');
		this.load.image('tiles0003', 'assets/Art/tiles0003.png');
		this.load.image('tiles0004', 'assets/Art/tiles0004.png');
		this.load.image('tiles0005', 'assets/Art/tiles0005.png');
		this.load.image('tiles0006', 'assets/Art/tiles0006.png');
		this.load.image('tiles0007', 'assets/Art/tiles0007.png');
		this.load.image('tiles0008', 'assets/Art/tiles0008.png');
		this.load.image('chars_menu', 'assets/Art/chars_menu.png');
		this.load.image('title', 'assets/Art/title.png');
		this.load.image('btns0012', 'assets/Art/btns0012.png');
		this.load.image('btns0004', 'assets/Art/btns0004.png');
		this.load.image('btns0007', 'assets/Art/btns0007.png');
		this.load.image('btns0008', 'assets/Art/btns0008.png');
		this.load.image('btns0002', 'assets/Art/btns0002.png');
		this.load.image('btns0014', 'assets/Art/btns0014.png');
		this.load.image('game over', 'assets/Art/game over.png');
		this.load.image('msg_box', 'assets/Art/msg_box.png');
		this.load.image('level up', 'assets/Art/level up.png');
		this.load.image('btn_back', 'assets/Art/btn_back.png');
		this.load.image('btn_pause', 'assets/Art/btn_pause.png');
		this.load.image('btns0015', 'assets/Art/btns0015.png');
		this.load.image('help_btn', 'assets/Art/help.png');
		this.load.image('btn_continue', 'assets/Art/btn_continue.png');
		this.load.image('game_paused', 'assets/Art/game_paused.png');
		this.load.image('help', 'assets/Art/help.png');
		this.load.image('won', 'assets/Art/won.png');
		this.load.image('logo', 'assets/logo.png');



		this.load.atlasJSONHash('tileanim1', 'assets/Art/tileanim1.png', 'assets/Art/tileanim1.json')
		this.load.atlasJSONHash('tileanim2', 'assets/Art/tileanim2.png', 'assets/Art/tileanim2.json')
		this.load.atlasJSONHash('tileanim3', 'assets/Art/tileanim3.png', 'assets/Art/tileanim3.json')
		this.load.atlasJSONHash('tileanim4', 'assets/Art/tileanim4.png', 'assets/Art/tileanim4.json')
		this.load.atlasJSONHash('tileanim5', 'assets/Art/tileanim5.png', 'assets/Art/tileanim5.json')
		this.load.atlasJSONHash('tileanim6', 'assets/Art/tileanim6.png', 'assets/Art/tileanim6.json')
		this.load.atlasJSONHash('tileanim7', 'assets/Art/tileanim7.png', 'assets/Art/tileanim7.json')
		this.load.atlasJSONHash('tileanim8', 'assets/Art/tileanim8.png', 'assets/Art/tileanim8.json')


		this.load.audio('music', 'assets/sounds/VideoGameIntenseLevel.mp3', 'assets/sounds/VideoGameIntenseLevel.ogg');
		this.load.audio('blast', 'assets/sounds/BLAST.mp3', 'assets/sounds/BLAST.ogg');
		this.load.audio('gameoversnd', 'assets/sounds/UH_DUH.mp3', 'assets/sounds/UH_DUH.ogg');


	},
	create: function () {
		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		BasicGame.music = this.game.add.audio('music')
	},
	update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.

		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.

		//if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		//{
		//this.ready = true;
		//this.state.start('MainMenu');
		if (this.cache.isSoundDecoded('music') && this.ready == false) {
			this["box1"].inputEnabled = true
			this["box1"].input.useHandCursor = true;
			BasicGame.music.play("", 0, 1, true, true);
			BasicGame.music.onLoop.add(this.hasLooped, this);
			BasicGame.playing = true;
			this.state.start('MainMenu');
			this.preloadBar.destroy();
			this.ready = true;

		}
	},

	hasLooped: function () {

	},


	//}

}





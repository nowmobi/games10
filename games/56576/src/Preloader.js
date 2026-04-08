
BasicGame.Preloader = function (game) {
	this.background = null;
	this.preloadBar = null;
	this.ready = false;

};

BasicGame.Preloader.prototype = {
	preload: function () {
		this["box1"] = this.add.graphics(1, 1);
		this["box1"].beginFill(0x2D0000, 1);
		this["box1"].drawRect(0, 0, 960, 540);
		this.quesTxt1 = this.add.text(0, 0, "LOADING..", { font: "20px Arial", fill: "#000", align: "right" });
		this.group = this.game.add.group();
		this.preloadBar = this.add.sprite(0, 0, 'preloaderBar');
		this.quesTxt1.x = (960 / 2) - (this.quesTxt1.width / 2) + 20
		this.quesTxt1.y = 540 / 2
		this.preloadBar.x = this.quesTxt1.x - 75
		this.preloadBar.y = this.quesTxt1.y + 50
		this.load.setPreloadSprite(this.preloadBar);
		this.load.image('menubg', 'assets/Art/menu bg.png');
		this.load.image('helpbox', 'assets/Art/help box.png');
		this.load.image('overtitle', 'assets/Art/over.png');
		this.load.image('wontitle', 'assets/Art/won.png');
		this.load.image('leveluptitle', 'assets/Art/levelup.png');
		this.load.image('menutitle', 'assets/Art/title.png');
		this.load.image('playagainBtn', 'assets/Art/btn_playagain.png');
		this.load.image('okBtn', 'assets/Art/btn_ok.png');
		this.load.image('nextBtn', 'assets/Art/btn_next.png');
		this.load.image('menuBtn', 'assets/Art/btn_menu.png');
		this.load.image('helpBtn', 'assets/Art/btn_help.png');
		this.load.image('playBtn', 'assets/Art/btn_play.png');
		this.load.image('arrow', 'assets/Art/arrow.png');
		this.load.image('soundon', 'assets/Art/snd1.png');
		this.load.image('soundoff', 'assets/Art/snd2.png');
		this.load.image('logo', 'assets/Art/logo.png');
		this.load.image('hud', 'assets/Art/hud.png');
		this.load.image('shapebase_level1', 'assets/Art/1/shapebase_level1.png');
		for (var i = 1; i < 4; i++) {
			this.load.image('shapepiece' + i + '_level1', 'assets/Art/1/shapepiece' + i + '_level1.png');
			this.load.image('piece' + i + '_level1', 'assets/Art/1/piece' + i + '_level1.png')
		}
		this.load.image('shapebase_level2', 'assets/Art/2/shapebase_level2.png');
		for (var i = 1; i < 4; i++) {
			this.load.image('shapepiece' + i + '_level2', 'assets/Art/2/shapepiece' + i + '_level2.png');
			this.load.image('piece' + i + '_level2', 'assets/Art/2/piece' + i + '_level2.png')
		}
		this.load.image('shapebase_level3', 'assets/Art/3/shapebase_level3.png');
		for (var i = 1; i < 4; i++) {
			this.load.image('shapepiece' + i + '_level3', 'assets/Art/3/shapepiece' + i + '_level3.png');
			this.load.image('piece' + i + '_level3', 'assets/Art/3/piece' + i + '_level3.png')
		}

		this.load.image('shapebase_level4', 'assets/Art/4/shapebase_level4.png');
		for (var i = 1; i < 4; i++) {
			this.load.image('shapepiece' + i + '_level4', 'assets/Art/4/shapepiece' + i + '_level4.png');
			this.load.image('piece' + i + '_level4', 'assets/Art/4/piece' + i + '_level4.png');
		}

		this.load.image('shapebase_level5', 'assets/Art/5/shapebase_level5.png');
		for (var i = 1; i < 5; i++) {
			this.load.image('shapepiece' + i + '_level5', 'assets/Art/5/shapepiece' + i + '_level5.png');
			this.load.image('piece' + i + '_level5', 'assets/Art/5/piece' + i + '_level5.png');
		}
		this.load.image('shapebase_level6', 'assets/Art/6/shapebase_level6.png');
		for (var i = 1; i < 5; i++) {
			this.load.image('shapepiece' + i + '_level6', 'assets/Art/6/shapepiece' + i + '_level6.png');
			this.load.image('piece' + i + '_level6', 'assets/Art/6/piece' + i + '_level6.png');
		}
		this.load.image('shapebase_level7', 'assets/Art/7/shapebase_level7.png');
		for (var i = 1; i < 4; i++) {
			this.load.image('shapepiece' + i + '_level7', 'assets/Art/7/shapepiece' + i + '_level7.png');
			this.load.image('piece' + i + '_level7', 'assets/Art/7/piece' + i + '_level7.png');
		}

		this.load.image('shapebase_level8', 'assets/Art/8/shapebase_level8.png');
		for (var i = 1; i < 5; i++) {
			this.load.image('shapepiece' + i + '_level8', 'assets/Art/8/shapepiece' + i + '_level8.png');
			this.load.image('piece' + i + '_level8', 'assets/Art/8/piece' + i + '_level8.png');
		}
		this.load.image('shapebase_level9', 'assets/Art/9/shapebase_level9.png');
		for (var i = 1; i < 6; i++) {
			this.load.image('shapepiece' + i + '_level9', 'assets/Art/9/shapepiece' + i + '_level9.png');
			this.load.image('piece' + i + '_level9', 'assets/Art/9/piece' + i + '_level9.png');
		}

		this.load.image('shapebase_level10', 'assets/Art/10/shapebase_level10.png');
		for (var i = 1; i < 5; i++) {
			this.load.image('shapepiece' + i + '_level10', 'assets/Art/10/shapepiece' + i + '_level10.png');
			this.load.image('piece' + i + '_level10', 'assets/Art/10/piece' + i + '_level10.png');
		}

		this.load.image('shapebase_level11', 'assets/Art/11/shapebase_level11.png');
		for (var i = 1; i < 5; i++) {
			this.load.image('shapepiece' + i + '_level11', 'assets/Art/11/shapepiece' + i + '_level11.png');
			this.load.image('piece' + i + '_level11', 'assets/Art/11/piece' + i + '_level11.png');
		}

		this.load.image('shapebase_level12', 'assets/Art/12/shapebase_level12.png');
		for (var i = 1; i < 7; i++) {
			this.load.image('shapepiece' + i + '_level12', 'assets/Art/12/shapepiece' + i + '_level12.png');
			this.load.image('piece' + i + '_level12', 'assets/Art/12/piece' + i + '_level12.png');
		}

		this.load.image('shapebase_level13', 'assets/Art/13/shapebase_level13.png');
		for (var i = 1; i < 6; i++) {
			this.load.image('shapepiece' + i + '_level13', 'assets/Art/13/shapepiece' + i + '_level13.png');
			this.load.image('piece' + i + '_level13', 'assets/Art/13/piece' + i + '_level13.png');
		}
		this.load.image('shapebase_level14', 'assets/Art/14/shapebase_level14.png');
		for (var i = 1; i < 5; i++) {
			this.load.image('shapepiece' + i + '_level14', 'assets/Art/14/shapepiece' + i + '_level14.png');
			this.load.image('piece' + i + '_level14', 'assets/Art/14/piece' + i + '_level14.png');
		}
		this.load.image('shapebase_level15', 'assets/Art/15/shapebase_level15.png');
		for (var i = 1; i < 7; i++) {
			this.load.image('shapepiece' + i + '_level15', 'assets/Art/15/shapepiece' + i + '_level15.png');
			this.load.image('piece' + i + '_level15', 'assets/Art/15/piece' + i + '_level15.png');
		}
		this.load.image('shapebase_level16', 'assets/Art/16/shapebase_level16.png');
		for (var i = 1; i < 5; i++) {
			this.load.image('shapepiece' + i + '_level16', 'assets/Art/16/shapepiece' + i + '_level16.png');
			this.load.image('piece' + i + '_level16', 'assets/Art/16/piece' + i + '_level16.png');
		}
		this.load.image('shapebase_level17', 'assets/Art/17/shapebase_level17.png');
		for (var i = 1; i < 7; i++) {
			this.load.image('shapepiece' + i + '_level17', 'assets/Art/17/shapepiece' + i + '_level17.png');
			this.load.image('piece' + i + '_level17', 'assets/Art/17/piece' + i + '_level17.png');
		}
		this.load.image('shapebase_level18', 'assets/Art/18/shapebase_level18.png');
		for (var i = 1; i < 7; i++) {
			this.load.image('shapepiece' + i + '_level18', 'assets/Art/18/shapepiece' + i + '_level18.png');
			this.load.image('piece' + i + '_level18', 'assets/Art/18/piece' + i + '_level18.png');
		}
		this.load.image('shapebase_level19', 'assets/Art/19/shapebase_level19.png');
		for (var i = 1; i < 9; i++) {
			this.load.image('shapepiece' + i + '_level19', 'assets/Art/19/shapepiece' + i + '_level19.png');
			this.load.image('piece' + i + '_level19', 'assets/Art/19/piece' + i + '_level19.png');
		}
		this.load.image('shapebase_level20', 'assets/Art/20/shapebase_level20.png');
		for (var i = 1; i < 8; i++) {
			this.load.image('shapepiece' + i + '_level20', 'assets/Art/20/shapepiece' + i + '_level20.png');
			this.load.image('piece' + i + '_level20', 'assets/Art/20/piece' + i + '_level20.png');
		}
		this.load.atlasJSONHash('effect', 'assets/Art/effect.png', 'assets/Art/effect.json')
		this.game.load.physics("sprite_physics", 'assets/Art/space_physics.json');
		this.load.image('lifebase', 'assets/Art/life_base.png');
		this.load.image('levelbtn0001', 'assets/Art/level-icons/level_0001.png');
		this.load.image('levelbtn0002', 'assets/Art/level-icons/level_0002.png');
		this.load.image('levelbtn0003', 'assets/Art/level-icons/level_0003.png');
		this.load.image('levelbtn0004', 'assets/Art/level-icons/level_0004.png');
		this.load.image('levelbtn0005', 'assets/Art/level-icons/level_0005.png');
		this.load.image('levelbtn0006', 'assets/Art/level-icons/level_0006.png');
		this.load.image('levelbtn0007', 'assets/Art/level-icons/level_0007.png');
		this.load.image('levelbtn0008', 'assets/Art/level-icons/level_0008.png');
		this.load.image('levelbtn0009', 'assets/Art/level-icons/level_0009.png');
		this.load.image('levelbtn00010', 'assets/Art/level-icons/level_0010.png');
		this.load.image('levelbtn00011', 'assets/Art/level-icons/level_0011.png');
		this.load.image('levelbtn00012', 'assets/Art/level-icons/level_0012.png');
		this.load.image('levelbtn00013', 'assets/Art/level-icons/level_0013.png');
		this.load.image('levelbtn00014', 'assets/Art/level-icons/level_0014.png');
		this.load.image('levelbtn00015', 'assets/Art/level-icons/level_0015.png');
		this.load.image('levelbtn00016', 'assets/Art/level-icons/level_0016.png');
		this.load.image('levelbtn00017', 'assets/Art/level-icons/level_0017.png');
		this.load.image('levelbtn00018', 'assets/Art/level-icons/level_0018.png');
		this.load.image('levelbtn00019', 'assets/Art/level-icons/level_0019.png');
		this.load.image('levelbtn00020', 'assets/Art/level-icons/level_0020.png');
		this.load.image('select', 'assets/Art/select level.png');
		this.load.audio('correct', 'assets/sounds/pickup_15.mp3', 'assets/sounds/pickup_15.ogg');
		this.load.audio('hit2', 'assets/sounds/V_iceattack.mp3', 'assets/sounds/V_iceattack.ogg');
		this.load.audio('music', 'assets/sounds/music.mp3', 'assets/sounds/music.ogg');
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
			BasicGame.music.play();
			this.state.start('MainMenu');
			this.preloadBar.destroy()
			this.ready = true;

		}
	},

	hasLooped: function () {

	},


	//}

}






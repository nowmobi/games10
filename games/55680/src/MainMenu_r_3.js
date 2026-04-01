
BasicGame.MainMenu = function (game) {

	///this.music = null;
	/////this.playButton = null;

	var ypos;


};

BasicGame.MainMenu.prototype = {

	create: function () {
		this["box1"] = this.add.graphics(1, 1);
		this["box1"].beginFill(0x4AE2ED, 1);
		this["box1"].drawRect(0, 0, window.innerWidth, window.innerHeight);
		this.group = this.game.add.group();
		this.game.stage.backgroundColor = "#222224";
		this.group.create(0, 0, 'bg');
		this.addedMenu();


	},



	addedMenu: function () {

		this.bgup = this.game.add.sprite(0, 500, 'chars_menu');
		this.group.add(this.bgup);
		this.bgup.scale.set(.9);
		this.title = this.game.add.sprite(-50, 40, 'title');
		this.group.add(this.title);
		this.title.scale.set(.5);

		this.PlayButton = this.game.add.sprite(300, 400, 'btns0012');
		this.group.add(this.PlayButton);
		this.PlayButton.scale.set(.5);
		this.PlayButton.inputEnabled = true
		this.PlayButton.input.useHandCursor = true;
		this.PlayButton.events.onInputDown.add(this.startGame, this);
		this.helpButton = this.game.add.sprite(300, 500, 'btns0004');
		this.group.add(this.helpButton);
		this.helpButton.scale.set(.5);
		this.helpButton.inputEnabled = true
		this.helpButton.input.useHandCursor = true;
		this.helpButton.events.onInputDown.add(this.helppageFunc, this);
		this.soundButtonOn = this.game.add.sprite(300, 600, 'btns0007');
		this.group.add(this.soundButtonOn);
		this.soundButtonOn.scale.set(.5);
		this.soundButtonOff = this.game.add.sprite(300, 600, 'btns0008');
		this.group.add(this.soundButtonOff);
		this.soundButtonOff.scale.set(.5);
		this.soundButtonOn.inputEnabled = true
		this.soundButtonOn.input.useHandCursor = true;
		this.soundButtonOn.events.onInputDown.add(this.soundFunc, this);


		this.soundButtonOff.inputEnabled = true
		this.soundButtonOff.input.useHandCursor = true;
		this.soundButtonOff.events.onInputDown.add(this.soundFunc, this);

		this.logo = this.game.add.sprite(400, 800, 'logo');
		this.group.add(this.logo);
		this.logo.scale.set(.8);
		this.soundButtonOff.visible = false;
		this.arraowPlaced = true;
		if (BasicGame.soundplay == 0) {
			this.soundButtonOff.visible = false;
			this.soundButtonOn.visible = true;
		} else if (BasicGame.soundplay == 1) {
			this.soundButtonOff.visible = true;
			this.soundButtonOn.visible = false;
		}

		document.addEventListener("visibilitychange", this.pausefunction);
	},

	pausefunction: function () {
		console.log(BasicGame.soundplay);
		if (BasicGame.adshowing == false) {
			if (document.hidden) {

				if (BasicGame.soundplay == 0) {
					BasicGame.music.pause();
					BasicGame.soundplay = 1;
				}
			}
			else {

				if (BasicGame.soundplay == 1) {
					BasicGame.music.play();
					BasicGame.soundplay = 0;
				}

			}
		}
	},

	startGame: function (pointer) {
		BasicGame.Level = 1;
		BasicGame.Coin = 0;
		BasicGame.Life = 5;
		BasicGame.score = 0;
		this.PlayButton.visible = false;
		BasicGame.scoreval = 0;
		this.clearAll();
		console.log("gameeee")
		//	And start the actual game
		if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
			sdk.showBanner();
		}

		var that = this;
		setTimeout(function () {
			that.mainStart();
		}, 1000);
	},
	clearAll: function () {
		this.helpButton.destroy();
		this.soundButtonOn.destroy();
		this.soundButtonOff.destroy();
	},
	mainStart: function () {
		this.state.start('Game');
	},
	soundFunc: function () {
		if (BasicGame.soundplay == 0) {
			BasicGame.soundbtnclicks = true;
			BasicGame.music.stop();
			this.soundButtonOff.visible = true;
			this.soundButtonOn.visible = false;
			BasicGame.soundplay = 1;
		} else if (BasicGame.soundplay == 1) {
			BasicGame.soundbtnclicks = false;
			BasicGame.music.play();
			this.soundButtonOff.visible = false;
			this.soundButtonOn.visible = true;
			BasicGame.soundplay = 0;
		}
	},

	helppageFunc: function (pointer) {
		this.helppagebool = true;
		this.soundButtonOn.visible = false;
		this.PlayButton.visible = false;
		this.soundButtonOff.visible = false;
		//this.title.visible=false;
		this.helpButton.visible = false;
		this.logo.visible = false;

		this.helppage = this.game.add.sprite(100, 350, 'help');
		this.group.add(this.helppage)
		//	this.helppage.scale.set(.7);

		this.backButton = this.game.add.sprite(150, 700, 'btns0002');
		this.group.add(this.backButton)
		this.backButton.scale.set(.7);
		this.backButton.inputEnabled = true
		this.backButton.input.useHandCursor = true;
		this.backButton.events.onInputDown.add(this.backToMenu, this);

	},

	backToMenu: function () {
		this.logo.visible = true;
		this.PlayButton.visible = true;
		this.helpButton.visible = true;
		this.title.visible = true;
		if (BasicGame.soundplay == 0) {
			this.soundButtonOn.visible = true;
			this.soundButtonOff.visible = false;
		} else {
			this.soundButtonOff.visible = true;
			this.soundButtonOn.visible = false;
		}
		this.helppagebool = false;
		this.helppage.destroy();
		this.backButton.destroy();
		this.arraowPlaced = true;
	},

};

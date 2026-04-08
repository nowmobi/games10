
BasicGame.MainMenu = function (game) {


	var ypos;


};

BasicGame.MainMenu.prototype = {

	create: function () {

		this.group = this.game.add.group();
		this.game.stage.backgroundColor = "#222224";
		//	this.resize();
		this.group.create(0, 0, 'menubg');
		this.addedMenu();
		BasicGame.music.play();

	},

	resize: function () {
		BasicGame.windowWidth = Math.max(window.innerWidth, window.innerHeight);
		BasicGame.windowHeight = Math.min(window.innerWidth, window.innerHeight);
		var s = Math.min(BasicGame.windowWidth / (960), BasicGame.windowHeight / (540));
		this.group.scale.set(s);
		this.group.y = window.innerHeight / 2 - 540 * this.group.scale.x / 2;
		this.group.x = window.innerWidth / 2 - 960 * this.group.scale.y / 2
	},

	addedMenu: function () {
		this.title = this.game.add.sprite(200, 0, 'menutitle');
		this.group.add(this.title);
		this.PlayButton = this.game.add.sprite(400, 280, 'playBtn');
		this.group.add(this.PlayButton);
		this.PlayButton.inputEnabled = true
		this.PlayButton.input.useHandCursor = true;
		this.PlayButton.events.onInputDown.add(this.startGame, this);
		this.helpButton = this.game.add.sprite(400, 350, 'helpBtn');
		this.group.add(this.helpButton);
		this.helpButton.inputEnabled = true
		this.helpButton.input.useHandCursor = true;
		this.helpButton.events.onInputDown.add(this.helppageFunc, this);
		this.soundButtonOn = this.game.add.sprite(428, 420, 'soundon');
		this.group.add(this.soundButtonOn);
		this.soundButtonOff = this.game.add.sprite(428, 420, 'soundoff');
		this.group.add(this.soundButtonOff);
		this.logo = this.game.add.sprite(550, 420, 'logo');
		this.group.add(this.logo);
		this.logo.scale.set(.8);
		this.soundButtonOff.visible = false;
		this.arraowPlaced = true;
		this.soundButtonOn.inputEnabled = true
		this.soundButtonOn.input.useHandCursor = true;
		this.soundButtonOn.events.onInputDown.add(this.soundFunc, this);


		this.soundButtonOff.inputEnabled = true
		this.soundButtonOff.input.useHandCursor = true;
		this.soundButtonOff.events.onInputDown.add(this.soundFunc, this);
		console.log(BasicGame.soundplay)
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

		console.log(BasicGame.adshowing, "adshowing")
		if (BasicGame.adshowing == false) {
			if (document.hidden) {
				console.log(BasicGame.sound, "pausesiund")
				if (BasicGame.sound == 0) {
					BasicGame.music.pause();
					BasicGame.sound = 1;
				}
			}
			else {
				console.log(BasicGame.soundbtnclicks, "soundbtnclicks")
				if (BasicGame.soundbtnclicks == true) {

				} else {
					if (BasicGame.sound == 1) {
						BasicGame.music.play();
						BasicGame.sound = 0;
					}
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
		BasicGame.adshowing = true
		this.clearAll();
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
		BasicGame.adshowing = false
		this.state.start('Game');
	},
	soundFunc: function () {
		if (BasicGame.soundplay == 0) {
			BasicGame.music.stop();
			this.soundButtonOff.visible = true;
			this.soundButtonOn.visible = false;
			BasicGame.soundplay = 1;
		} else if (BasicGame.soundplay == 1) {
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
		this.title.visible = false;
		this.helpButton.visible = false;
		this.logo.visible = false;
		this.PlayButton.inputEnabled
		this.helppage = this.game.add.sprite(320, 100, 'helpbox');
		this.group.add(this.helppage)
		var style = { font: "14px Courier New", fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 200, align: "center" };
		this.helptext = this.game.add.text(130, 120, "", style);
		this.helppage.addChild(this.helptext);
		this.helptext.anchor.set(0.5);
		this.helptext.text = "Objective is to fill the correct shape within time."
		this.backButton = this.game.add.sprite(400, 360, 'okBtn');
		this.group.add(this.backButton)
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
	update: function () {
		if (this.helppagebool) {
			this.game.input.keyboard.onDownCallback = function (e) {
				if (e.keyCode == 13 || e.keyCode == 53) {
					this.backToMenu();
				}
				e.preventDefault();
				e.stopPropagation();
			}.bind(this);
		}
		//	Do some nice funky main menu effect here

	}


};

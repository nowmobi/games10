
BasicGame.Levelup = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

	this.game;		//	a reference to the currently running game

};

BasicGame.Levelup.prototype = {

	create: function () {

		this.group = this.game.add.group();
		//Sthis.resize();
		this.game.stage.backgroundColor = "#9cb6da";
		this.group.create(0, 0, 'menubg');
		this.title = this.game.add.sprite(280, 50, 'leveluptitle');
		this.group.add(this.title);
		this.PlayAgainButton = this.game.add.sprite(400, 350, 'nextBtn');
		this.PlayAgainButton.inputEnabled = true
		this.PlayAgainButton.input.useHandCursor = true;
		this.group.add(this.PlayAgainButton);
		this.PlayAgainButton.events.onInputDown.add(this.BackToGame, this);
		var style = { font: " 18px Courier New ", fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 100, align: "center" };
		this.scoretextbg = this.game.add.text(415, 300, "", style);
		this.scoretextbg.anchor.set(0.5);
		this.scoretextbg.text = "Score";
		this.group.add(this.scoretextbg);
		this.scoretext = this.game.add.text(500, 300, "", style);
		this.scoretext.anchor.set(0.5);
		this.scoretext.text = "" + BasicGame.score;
		this.group.add(this.scoretext);

	},
	resize: function () {
		BasicGame.windowWidth = Math.max(window.innerWidth, window.innerHeight);
		BasicGame.windowHeight = Math.min(window.innerWidth, window.innerHeight);
		var s = Math.min(BasicGame.windowWidth / (960), BasicGame.windowHeight / (540));
		this.group.scale.set(s);
		this.group.y = window.innerHeight / 2 - 540 * this.group.scale.x / 2;
		this.group.x = window.innerWidth / 2 - 960 * this.group.scale.y / 2
	},
	update: function () {


	},
	BackToGame: function () {

		this.PlayAgainButton.destroy();

		if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
			sdk.showBanner();
		}
		var that = this;
		setTimeout(function () {
			that.mainStart();
		}, 1000);


	},
	mainStart: function () {
		BasicGame.Level += 1;
		this.state.start('Game');
	},
	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.state.start('MainMenu');

	}

};


BasicGame.Gamewon = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:
	var ypos;
	this.game;		//	a reference to the currently running game
	var arrowArr = [];
};

BasicGame.Gamewon.prototype = {

	create: function () {
		this["box1"] = this.add.graphics(1, 1);
		this["box1"].beginFill(0x4AE2ED, 1);
		this["box1"].drawRect(0, 0, window.innerWidth, window.innerHeight);
		this.group = this.game.add.group();

		this.game.stage.backgroundColor = "#222224";
		this.group.create(0, 0, 'bg');
		//this.box.scale.set(.9);
		this.bgup = this.game.add.sprite(0, 530, 'chars_menu');
		this.group.add(this.bgup);
		this.bgup.scale.set(.9);
		this.title = this.game.add.sprite(250, 200, 'won');
		this.title.anchor.set(.5);
		this.title.scale.set(.5);
		this.group.add(this.title);
		this.PlayAgainButton = this.game.add.sprite(300, 500, 'btns0015');
		this.PlayAgainButton.scale.set(.6);
		this.PlayAgainButton.inputEnabled = true
		this.PlayAgainButton.input.useHandCursor = true;
		this.PlayAgainButton.events.onInputDown.add(this.BackToGame, this);
		this.group.add(this.PlayAgainButton);


		/* 	this.hud = this.game.add.sprite(162, 245,'hud');
			this.hud.anchor.set(.5);
			this.hud.scale.setTo(.5,1);
			this.hud.alpha=.8 */
		var style = { font: " bold 30px Impact ", fill: "#A43EDA", wordWrap: true, wordWrapWidth: 300, align: "center" };
		this.msgbox = this.game.add.sprite(150, 350, 'msg_box');
		this.group.add(this.msgbox);
		this.msgbox.scale.set(.6);
		this.leveltextbg = this.game.add.text(200, 400, "", style);
		this.leveltextbg.anchor.set(0.5);
		this.leveltextbg.text = "Level";
		this.group.add(this.leveltextbg);
		this.leveltext = this.game.add.text(300, 400, "", style);
		this.leveltext.anchor.set(0.5);
		this.leveltext.text = "" + BasicGame.Level;

		this.group.add(this.leveltext);

		this.scoretextbg = this.game.add.text(200, 450, "", style);
		this.scoretextbg.anchor.set(0.5);
		this.scoretextbg.text = "Score";
		this.group.add(this.scoretextbg);
		this.scoretext = this.game.add.text(300, 450, "", style);
		this.scoretext.anchor.set(0.5);
		this.scoretext.text = "" + BasicGame.score;

		this.group.add(this.scoretext);


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
		BasicGame.Level = 1;
		this.state.start('MainMenu');
	},

	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.


	}

};


BasicGame.Gamewon = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

	this.game;		//	a reference to the currently running game

};

BasicGame.Gamewon.prototype = {

	create: function () {

		this.group = this.game.add.group();
		//Sthis.resize();
		this.game.stage.backgroundColor = "#9cb6da";
		this.group.create(0, 0, 'menubg');


		this.title = this.game.add.sprite(300, 60, 'wontitle');
		this.group.add(this.title);
		this.PlayAgainButton = this.game.add.sprite(420, 350, 'menuBtn');
		this.PlayAgainButton.scale.set(.7);
		this.PlayAgainButton.inputEnabled = true
		this.PlayAgainButton.input.useHandCursor = true;
		this.group.add(this.PlayAgainButton);
		this.PlayAgainButton.events.onInputDown.add(this.BackToGame, this);



		var style = { font: " 22px Courier New ", fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 100, align: "center" };
		this.scoretextbg = this.game.add.text(430, 290, "", style);
		this.scoretextbg.anchor.set(0.5);
		this.scoretextbg.text = "Score";
		this.group.add(this.scoretextbg);
		this.scoretext = this.game.add.text(525, 290, "", style);
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
		BasicGame.Level = 1;
		this.state.start('MainMenu');
	},
	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.state.start('MainMenu');

	}

};

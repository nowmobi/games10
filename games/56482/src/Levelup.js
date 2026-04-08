
GardenCollapse.Levelup = function (game) {

	this.music = null;
	var playButton1 = null;
	//var playButton2 = null;
	var bg = null;

	var title = null;
	var title1 = null;

	var levelBase = null;
	var scoreBase = null;
	var level = null;
	var score = null;
	var style = null;



};

GardenCollapse.Levelup.prototype = {

	create: function () {

		//this.state.start('Game');
		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		///this.music = this.add.audio('titleMusic');
		//this.music.play();


		/*var group = this.game.add.group();
		group.create(0,0,'bg'+BasicGame.assetScale);
		group.scale.setTo(BasicGame.scaleRatio);
		group.y = window.innerHeight/2 - 540*BasicGame.assetScale*group.scale.x/2;
		group.x = window.innerWidth/2 - 960*BasicGame.assetScale*group.scale.y/2;*/

		style = { font: (24) + "px ROCKEB", fill: "#FFFFFF", wordWrap: true, fontWeight: "bold", align: "left" };

		bg = this.game.add.sprite(0, 0, 'menuBg');

		title = this.game.add.sprite(480, 120, 'menuTitle');
		title.anchor.set(.5);
		title.scale.x = title.scale.y = .6;

		title1 = this.game.add.sprite(480, 240, 'levelupTitle');
		title1.anchor.set(.5);


		levelBase = this.game.add.sprite(480, 320, 'levelBox');
		levelBase.anchor.set(.5);

		scoreBase = this.game.add.sprite(480, 360, 'scoreBox');
		scoreBase.anchor.set(.5);

		level = this.add.bitmapText(480, 320, 'angleFont2', String(GardenCollapse.level), 22);
		level.anchor.set(0.5);

		score = this.add.bitmapText(480, 360, 'angleFont2', String(GardenCollapse.score), 22);
		score.anchor.set(0.5);



		playButton1 = this.add.button(480, 430, 'okBtn1');
		playButton1.anchor.set(.5);
		playButton1.scale.x = playButton1.scale.y = .75;
		playButton1.buttonMode = true;
		playButton1.events.onInputOver.add(this.onButtonOver, this);
		playButton1.events.onInputOut.add(this.out, this);
		playButton1.events.onInputDown.add(this.isButtonClicked, this);
		playButton1.inputEnabled = true;
		playButton1.input.useHandCursor = true;
		//playButton1.visible=false;



	},

	onButtonOver: function (pointer) {
		playButton1.scale.setTo(.8, .8);
		//playButton2.visible=true;
	},

	out: function (pointer) {
		playButton1.scale.setTo(.75, .75);
		//playButton2.visible=false;
	},

	isButtonClicked: function (pointer) {

		playButton1.destroy();
		if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
			sdk.showBanner();
		}
		var that = this;
		setTimeout(function () {
			that.mainStart();
		}, 1700);

	},
	mainStart: function () {
		GardenCollapse.level++;
		this.quitGame();
		this.state.start('Game');
	},



	update: function () {

	},

	quitGame: function () {

		bg.destroy();

		title.destroy();


	}
};

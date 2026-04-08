
GardenCollapse.MainMenu = function (game) {

	this.music = null;



	var playBtn1 = null;
	//var playBtn2=null;
	var helpBtn1 = null;
	//var helpBtn2=null;
	var soundonBtn1 = null;
	//var soundonBtn2=null;
	var soundoffBtn1 = null;
	//var soundoffBtn2=null;

	var bg = null;
	var title = null;

	var style = null;
	var versionText = null;
	var logo = null;
};

GardenCollapse.MainMenu.prototype = {

	create: function () {

		GardenCollapse.level = 1;
		GardenCollapse.score = 0;
		GardenCollapse.isPaused = true;
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

		style = { font: (24) + "px ROCKEB", fill: "#FFFFFF", wordWrap: true, fontWeight: "bold", wordWrapWidth: 340, align: "left" };

		bg = this.add.sprite(0, 0, 'menuBg');


		title = this.add.sprite(250, 50, 'menuTitle');


		//this.title=this.game.time.events.add(Phaser.Timer.SECOND,this.titleFunction,this);








		//versionText=this.game.add.text(470,450, "Under development v0.03", style);//String(this.level)
		//versionText.anchor.set(0.5);



		logo = this.add.button(480, 520, 'logo');
		logo.anchor.set(.5);
		logo.scale.x = logo.scale.y = .6;
		logo.buttonMode = true;
		logo.events.onInputDown.add(this.isLogoClicked, this);
		logo.inputEnabled = true;
		logo.input.useHandCursor = true;
		/**/

		playBtn1 = this.add.button(480, 320, 'playBtn1');
		playBtn1.anchor.set(.5);
		playBtn1.scale.x = playBtn1.scale.y = .75;
		playBtn1.buttonMode = true;
		playBtn1.events.onInputOver.add(this.onButtonOver, this);
		playBtn1.events.onInputOut.add(this.out, this);
		playBtn1.events.onInputDown.add(this.isButtonClicked, this);
		playBtn1.inputEnabled = true;
		playBtn1.input.useHandCursor = true;

		//playBtn1.visible=false;



		soundonBtn1 = this.add.button(480, 440, 'soundOnBtn1');
		soundonBtn1.anchor.set(.5);
		soundonBtn1.scale.x = soundonBtn1.scale.y = .75;
		soundonBtn1.buttonMode = true;
		soundonBtn1.events.onInputOver.add(this.onSoundOver, this);
		soundonBtn1.events.onInputOut.add(this.onSoundOut, this);
		soundonBtn1.events.onInputDown.add(this.isSoundClicked, this);
		soundonBtn1.inputEnabled = true;
		soundonBtn1.input.useHandCursor = true;

		//soundonBtn1.visible=false;
		//console.log(soundonBtn1.visible,"visiblsssss)


		soundoffBtn1 = this.add.button(480, 440, 'soundOffBtn1');
		soundoffBtn1.anchor.set(.5);
		soundoffBtn1.scale.x = soundoffBtn1.scale.y = .75;
		soundoffBtn1.buttonMode = true;
		soundoffBtn1.events.onInputOver.add(this.onSoundOver, this);
		soundoffBtn1.events.onInputOut.add(this.onSoundOut, this);
		soundoffBtn1.events.onInputDown.add(this.isSoundClicked, this);
		soundoffBtn1.inputEnabled = true;
		soundoffBtn1.input.useHandCursor = true;



		if (GardenCollapse.soundReady == true) {
			soundonBtn1.visible = false;
			soundoffBtn1.visible = true;
		} else {
			soundonBtn1.visible = true;
			console.log(soundonBtn1.visible, "visiblesss111eeeeeeeeeee")
			soundoffBtn1.visible = false;
		}



		helpBtn1 = this.add.button(480, 380, 'helpBtn1');
		helpBtn1.anchor.set(.5);
		helpBtn1.scale.x = helpBtn1.scale.y = .75;
		helpBtn1.buttonMode = true;
		helpBtn1.events.onInputOver.add(this.onButtonOver, this);
		helpBtn1.events.onInputOut.add(this.out, this);
		helpBtn1.events.onInputDown.add(this.isHelpClicked, this);
		helpBtn1.inputEnabled = true;
		helpBtn1.input.useHandCursor = true;

		//helpBtn1.visible=false;





		document.addEventListener("visibilitychange", this.pausefunction);
	},
	pausefunction: function () {
		if (GardenCollapse.adshowing == false) {
			if (GardenCollapse.soundbtnclicks == false) {
				console.log(GardenCollapse.soundReady, "ffffffffffffffffffff", document.hidden);
				if (document.hidden) {
					if (GardenCollapse.soundReady == true) {
						GardenCollapse.music.pause();
						GardenCollapse.soundReady = false;
					}
				}
				else {
					console.log(soundonBtn1.visible, "visible")
					if (soundonBtn1.visible == true) {

					} else {
						if (GardenCollapse.soundReady == false) {
							GardenCollapse.music.play();
							GardenCollapse.soundReady = true;
						}
					}
				}
			}
		}
	},

	titleFunction: function () {
		/*title1.visible = true;
		title1.play('anim',15,true);
		this.game.time.events.remove(this.title);
		this.title=null;*/
	},

	update: function () {
		//	Do some nice funky main menu effect here

	},

	onButtonOver: function (item) {
		item.scale.setTo(.8, .8);
		//playBtn2.visible=true;
	},

	out: function (item) {
		item.scale.setTo(.75, .75);
		//playBtn2.visible=false;
	},

	isButtonClicked: function (pointer) {
		if (GardenCollapse.soundReady == true) {
			this.clickSnd = null;
			this.clickSnd = this.game.add.audio('clickSnd', 1, true);
			this.clickSnd.play('', 0, 1, false);
		}
		this.quitGame();

		//	And start the actual game
		//  And start the actual game
		if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
			sdk.showBanner();
		}
		var that = this;
		setTimeout(function () {
			that.mainStart();
		}, 1000);




	},

	mainStart: function () {
		this.state.start('Game');
	},
	isHelpClicked: function (pointer) {
		if (GardenCollapse.soundReady == true) {
			this.clickSnd = null;
			this.clickSnd = this.game.add.audio('clickSnd', 1, true);
			this.clickSnd.play('', 0, 1, false);
		}
		this.quitGame();
		//this.playButton.stop();
		//this.playButton.kill();
		this.state.start('Help');
	},

	onLogoOver: function (pointer) {
		//this.playButton1.scale.setTo(1.1,1.1);
		logo.scale.x = logo.scale.y = .75;
	},

	LogoOut: function (pointer) {
		//this.playButton1.scale.setTo(1,1);
		logo.scale.x = logo.scale.y = .7;
	},

	isLogoClicked: function (pointer) {
		logo.scale.x = logo.scale.y = .7;
		window.open('http://www.csharks.com', '_blank');
	},
	onSoundOver: function (item) {
		item.scale.setTo(.8, .8);
	},

	onSoundOut: function (item) {
		item.scale.setTo(.75, .75);
		if (GardenCollapse.soundReady == true) {
			soundonBtn1.visible = false;
			soundoffBtn1.visible = true;
		} else {
			soundonBtn1.visible = true;
			console.log(soundonBtn1.visible, "visiblesss1111111111")
			soundoffBtn1.visible = false;
		}
	},

	isSoundClicked: function (pointer) {
		console.log(GardenCollapse.soundReady);
		if (GardenCollapse.soundReady == true) {
			GardenCollapse.soundbtnclicks = true;
			GardenCollapse.music.pause();
			GardenCollapse.soundReady = false;
			soundonBtn1.visible = true;
			soundoffBtn1.visible = false;

		} else {
			GardenCollapse.music.resume();
			GardenCollapse.soundReady = true;
			GardenCollapse.soundbtnclicks = false;
			soundonBtn1.visible = false;
			soundoffBtn1.visible = true;

		}
		console.log(soundonBtn1.visible, "visiblesss")
		console.log(GardenCollapse.soundReady);
	},
	quitGame: function () {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		//this.state.start('MainMenu');
		playBtn1.destroy();
		//playBtn2.destroy();
		helpBtn1.destroy();
		//helpBtn2.destroy();
		soundonBtn1.destroy();
		//soundonBtn2.destroy();
		soundoffBtn1.destroy();
		//soundoffBtn2.destroy();
		//versionText.destroy();
		bg.destroy();
		//logo.destroy();
		title.destroy();





	}
};

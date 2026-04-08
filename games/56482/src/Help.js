
GardenCollapse.Help = function (game) {
	
	this.music = null;
	var backButton1 = null;
	//var backButton2 = null;
	var bg=null;
	
	var helpText=null;
	
	
	var style2=null;
	var style1=null;
};

GardenCollapse.Help.prototype = {

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
		
		
		style2 = { font: (24)+"px SCHLBKBI", fill: "#000000", wordWrap: true, fontWeight:"bold", wordWrapWidth: 340, align: "center" };
		style1 = { font: (34)+"px harngton", fill: "#7500EA", wordWrap: true, fontWeight:"bold", wordWrapWidth: 220, align: "center" };
		
		
		bg=this.game.add.sprite(0,0,'game');
		/*var txt="            Your aim is to destroy the flowers \n           as soon as possible before the timer \n       turns off. Same colored flowers explods \n          when they comes near to each other. \n        You can drag the flowers to possible \n           vacant locations. In higher levels, \n          there are elevator and laser beams \n                            to help you.";*/
		
		var txt="      Remove all the blocks before\n              the timer turns off.\n      Same colored blocks explodes\nwhen they comes near to each other.\n         You can drag the block to\n         possible vacant locations.";
		
		helpText = this.add.bitmapText(250, 120, 'angleFont',txt,28);
		
		//helpText=this.game.add.text(70,50, txt, style2);
		//0x4F00000x713800
		
		backButton1 = this.add.button(480,390,'backBtn1');
		backButton1.anchor.set(.5);
		backButton1.scale.x=backButton1.scale.y=.75;
		backButton1.buttonMode = true;
		backButton1.events.onInputOver.add(this.onButtonOver, this);
		backButton1.events.onInputOut.add(this.out, this);
		backButton1.events.onInputDown.add(this.isButtonClicked, this);
		backButton1.inputEnabled = true;
		backButton1.input.useHandCursor = true;
		//backButton1.visible=false;
		
	
		
	},
	
	onButtonOver: function (pointer){
		backButton1.scale.setTo(.8,.8);
		
	},
	
	out: function (pointer){
		backButton1.scale.setTo(.75,.75);
		
	},
	
	isButtonClicked: function (pointer){
		this.quitGame();
		//this.playButton.stop();
		//this.playButton.kill();
		this.state.start('MainMenu');
	},
	
	update: function () {
		
	},
	
	quitGame: function () {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		//this.state.start('MainMenu');
		backButton1.destroy();
		helpText.destroy();
		bg.destroy();
		
		
		
	}
};

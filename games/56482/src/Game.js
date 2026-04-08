
GardenCollapse.Game = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

	this.game;		//	a reference to the currently running game
	this.add;		//	used to add sprites, text, groups, etc
	this.camera;	//	a reference to the game camera
	this.cache;		//	the game cache
	this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
	this.load;		//	for preloading assets
	this.math;		//	lots of useful common math operations
	this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
	this.stage;		//	the game stage
	this.time;		//	the clock
	this.tweens;	//	the tween manager
	this.world;		//	the game world
	this.particles;	//	the particle manager
	this.physics;	//	the physics manager
	this.rnd;		//	the repeatable random number generator

	//	You can use any of these from any function within this State.
	//	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.


	var bg = null;





	var time = 0;
	var delay = 0;
	var levelupFlag = false;



	var timerBase = null;
	var levelBase = null;
	var scoreBase = null;


	var timer = null;
	var level = null;
	var score = null;


	var gameArea = null;



	var menuBtn1 = null;
	var menuNam = null;
	//var menuBtn2=null;
	var helpBtn1 = null;
	var helpNam = null;
	//var helpBtn2=null;
	var pauseBtn1 = null;
	var pauseNam = null;
	//var pauseBtn2=null;
	var soundonBtn1 = null;
	var soundonNam = null;
	//var soundonBtn2=null;
	var soundoffBtn1 = null;
	var soundoffNam = null;
	//var soundoffBtn2=null;
	var okBtn1 = null;
	//var okBtn2=null;
	var resetBtn1 = null;


	var menuBtnp1 = null;
	//var menuBtnp2=null;
	var continueBtn1 = null;
	//var continueBtn2=null;
	var pauseBox = null;
	var helpDisplayed = false;
	var pauseDisplayed = false;
	var helpText = null;
	//var helptxt="";


	var currentRow = 0;
	var currentCol = 0;
	var levelArray = [];
	var MainArr = [];
	var FlowerArr = [];
	var TileArr = [];
	var LFArr = [];
	var trapArr = [];

	var MaxRow = 15;
	var MaxCol = 14;
	var flowerSelected = false;
	var currentFlower = null;
	var lift = null;
	var bomb = null;
	var TempScore = 0;
	var dist = 0;
	var preScore = 0;
	var levelTime = 0;

};

GardenCollapse.Game.prototype = {

	create: function () {
		//this.game.physics.startSystem(Phaser.Physics.ARCADE);

		//var style = { font: (70)+"ROCKEB", fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 120, align: "left" };
		GardenCollapse.isPaused = true;

		//new
		GardenCollapse.levelscore = 0

		time = 50;
		helpDisplayed = false;
		pauseDisplayed = false;
		levelArray = new Array();
		MainArr = new Array();
		FlowerArr = new Array();
		TileArr = new Array();
		LFArr = new Array();
		trapArr = new Array();

		levelArray = [];
		MainArr = [];
		FlowerArr = [];
		TileArr = [];
		LFArr = [];
		trapArr = [];

		MaxRow = 11;
		MaxCol = 14;
		flowerSelected = false;
		currentRow = 0;
		currentCol = 0;
		lift = null;
		bomb = null;
		bg = this.game.add.sprite(0, 0, 'game');
		bg.inputEnabled = true;
		bg.events.onInputUp.add(this.bgClick, this);
		levelupFlag = false;
		dist = 42;
		gameArea = this.game.add.group();
		if (this.game.device.desktop) {
		} else {
			//if(WHRatio<1){
			//gameArea.y=-30;
			//}

		}

		//////First 15 LEVELS

		if (GardenCollapse.level == 1) {
			levelArray = [

				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 4, 7, 7, 8, 0, 0, 0, 0, 0],
				[0, 0, 4, 7, 7, 10, 0, 0, 9, 7, 7, 8, 0, 0],
				[0, 0, 2, 19, 0, 0, 0, 0, 0, 0, 19, 2, 0, 0],
				[0, 0, 3, 5, 0, 0, 0, 0, 0, 0, 12, 11, 0, 0],
				[0, 0, 2, 0, 18, 22, 0, 0, 18, 0, 22, 2, 0, 0],
				[0, 0, 9, 7, 7, 8, 0, 0, 4, 7, 7, 10, 0, 0],
				[0, 0, 0, 0, 0, 9, 7, 7, 10, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			];

			GardenCollapse.score = 0;
			targetScore = 100;
			time = 40;
			//game_mc.colorLevel.gotoAndStop(1);
		} else if (GardenCollapse.level == 2) {
			levelArray = [

				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 4, 7, 7, 8, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 4, 10, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 2, 0, 0, 0, 9, 7, 7, 7, 7, 8, 0, 0],
				[0, 0, 2, 0, 0, 0, 0, 0, 18, 19, 0, 2, 0, 0],
				[0, 0, 2, 0, 0, 0, 0, 0, 12, 5, 0, 2, 0, 0],
				[0, 0, 2, 22, 19, 0, 0, 0, 0, 0, 18, 2, 0, 0],
				[0, 0, 9, 7, 7, 7, 7, 8, 22, 0, 4, 10, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 9, 7, 7, 10, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

			];
			targetScore = 200;
			time = 40;
			//game_mc.colorLevel.gotoAndStop(1);
		} else if (GardenCollapse.level == 3) {
			levelArray = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 4, 7, 7, 7, 7, 7, 7, 7, 7, 8, 0, 0],
				[0, 0, 2, 20, 19, 0, 0, 0, 0, 19, 18, 2, 0, 0],
				[0, 0, 9, 7, 8, 0, 0, 0, 0, 4, 7, 10, 0, 0],
				[0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
				[0, 0, 4, 7, 10, 0, 0, 0, 0, 9, 7, 8, 0, 0],
				[0, 0, 2, 18, 0, 0, 1, 1, 0, 0, 20, 2, 0, 0],
				[0, 0, 9, 7, 7, 7, 7, 7, 7, 7, 7, 10, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			];

			targetScore = 300;
			time = 50;
			//game_mc.colorLevel.gotoAndStop(1);
		} else if (GardenCollapse.level == 4) {
			levelArray = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 4, 7, 7, 8, 0, 0],
				[0, 0, 0, 0, 4, 7, 7, 7, 10, 0, 0, 2, 0, 0],
				[0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 23, 2, 0, 0],
				[0, 4, 7, 7, 10, 0, 0, 19, 0, 18, 4, 10, 0, 0],
				[0, 2, 23, 19, 0, 0, 0, 12, 7, 7, 11, 0, 0, 0],
				[0, 9, 7, 7, 8, 0, 0, 0, 0, 0, 9, 8, 0, 0],
				[0, 0, 0, 0, 2, 0, 0, 19, 0, 0, 0, 2, 0, 0],
				[0, 0, 0, 0, 9, 7, 7, 7, 8, 0, 18, 2, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 9, 7, 7, 10, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			];

			targetScore = 400;
			time = 60;
			//game_mc.colorLevel.gotoAndStop(2);
		} else if (GardenCollapse.level == 5) {
			levelArray = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 4, 7, 7, 7, 7, 8, 0, 0, 0, 0, 0, 0, 0],
				[0, 2, 0, 0, 0, 0, 9, 7, 7, 8, 0, 0, 0, 0],
				[0, 2, 21, 0, 0, 0, 21, 0, 0, 2, 0, 0, 0, 0],
				[0, 9, 7, 8, 0, 0, 19, 0, 0, 2, 0, 0, 0, 0],
				[0, 0, 0, 2, 0, 0, 6, 0, 0, 2, 0, 0, 0, 0],
				[0, 0, 0, 2, 0, 0, 19, 0, 0, 9, 7, 8, 0, 0],
				[0, 0, 0, 2, 19, 21, 14, 0, 0, 0, 0, 2, 0, 0],
				[0, 0, 0, 9, 7, 7, 26, 8, 0, 0, 21, 2, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 9, 7, 7, 7, 10, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			];
			targetScore = 500;
			time = 70;
			//game_mc.colorLevel.gotoAndStop(2);				
		} else if (GardenCollapse.level == 6) {
			levelArray = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 4, 13, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 0],
				[0, 3, 10, 22, 0, 0, 21, 20, 0, 0, 0, 0, 2, 0],
				[0, 2, 0, 6, 0, 0, 19, 21, 0, 0, 0, 0, 2, 0],
				[0, 2, 0, 0, 0, 19, 21, 20, 22, 0, 0, 0, 2, 0],
				[0, 2, 0, 0, 0, 6, 7, 7, 7, 6, 0, 0, 2, 0],
				[0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
				[0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 6, 22, 2, 0],
				[0, 2, 0, 20, 22, 0, 0, 0, 0, 0, 19, 4, 11, 0],
				[0, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 26, 10, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			];
			time = 80;
			targetScore = 600;
			//game_mc.colorLevel.gotoAndStop(2);				
		} else if (GardenCollapse.level == 7) {
			levelArray = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 4, 7, 7, 7, 7, 13, 13, 7, 7, 7, 7, 8, 0],
				[0, 2, 18, 0, 0, 19, 2, 2, 19, 0, 0, 18, 2, 0],
				[0, 2, 21, 0, 0, 12, 10, 9, 5, 0, 0, 21, 2, 0],
				[0, 2, 22, 0, 0, 0, 0, 0, 0, 0, 0, 19, 2, 0],
				[0, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 12, 11, 0],
				[0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
				[0, 2, 0, 21, 12, 7, 8, 4, 7, 5, 18, 0, 2, 0],
				[0, 2, 22, 18, 0, 22, 2, 2, 20, 0, 20, 22, 2, 0],
				[0, 9, 7, 7, 7, 7, 26, 26, 7, 7, 7, 7, 10, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			];
			targetScore = 700;
			time = 100;
			//game_mc.colorLevel.gotoAndStop(2);				
		} else if (GardenCollapse.level == 8) {
			levelArray = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 4, 7, 7, 7, 7, 7, 7, 7, 7, 8, 0, 1, 0],
				[0, 2, 0, 0, 18, 0, 0, 0, 0, 0, 9, 8, 0, 0],
				[0, 2, 0, 0, 19, 22, 1, 20, 23, 0, 0, 9, 8, 0],
				[0, 2, 20, 0, 18, 1, 7, 7, 8, 0, 20, 0, 2, 0],
				[0, 2, 22, 19, 22, 0, 0, 0, 2, 23, 6, 0, 2, 0],
				[0, 9, 7, 8, 18, 22, 0, 0, 9, 7, 11, 18, 2, 0],
				[0, 0, 0, 9, 7, 8, 19, 0, 0, 0, 9, 7, 11, 0],
				[0, 0, 6, 0, 0, 9, 7, 8, 0, 0, 20, 19, 2, 0],
				[0, 6, 0, 0, 1, 0, 0, 9, 7, 7, 7, 7, 10, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			];
			targetScore = 800;
			time = 140;
			//game_mc.colorLevel.gotoAndStop(3);				
		} else if (GardenCollapse.level == 9) {
			levelArray = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 4, 7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 8, 0],
				[0, 2, 18, 0, 18, 0, 21, 23, 0, 20, 0, 20, 2, 0],
				[0, 3, 7, 7, 5, 0, 12, 5, 0, 12, 7, 7, 11, 0],
				[0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
				[0, 2, 0, 0, 0, 0, 22, 19, 0, 0, 0, 0, 2, 0],
				[0, 2, 0, 0, 14, 18, 19, 22, 20, 14, 0, 0, 2, 0],
				[0, 2, 0, 0, 9, 7, 7, 7, 7, 10, 0, 0, 2, 0],
				[0, 2, 21, 18, 0, 0, 21, 23, 0, 0, 20, 23, 2, 0],
				[0, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 10, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			];

			targetScore = 900;
			time = 160;
			//game_mc.colorLevel.gotoAndStop(3);				
		} else if (GardenCollapse.level == 10) {
			levelArray = [
				[4, 7, 7, 7, 7, 7, 7, 7, 7, 7, 13, 7, 7, 8],
				[2, 0, 0, 0, 0, 0, 0, 0, 22, 0, 2, 20, 0, 2],
				[2, 0, 18, 0, 0, 25, 0, 0, 1, 0, 9, 5, 0, 2],
				[3, 7, 7, 5, 0, 12, 5, 0, 0, 0, 0, 0, 0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 21, 20, 2],
				[2, 25, 0, 0, 0, 0, 0, 0, 0, 4, 7, 7, 7, 11],
				[3, 5, 0, 0, 0, 0, 0, 22, 4, 10, 0, 0, 0, 2],
				[2, 0, 0, 0, 19, 4, 7, 7, 10, 0, 0, 0, 0, 2],
				[2, 0, 0, 12, 7, 10, 0, 0, 0, 0, 0, 0, 0, 2],
				[2, 0, 0, 0, 0, 0, 0, 18, 21, 22, 25, 19, 20, 2],
				[9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 10]
			];
			time = 180;
			targetScore = 1000;
			//game_mc.colorLevel.gotoAndStop(3);				
		} else if (GardenCollapse.level == 11) {
			levelArray = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 4, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 0],
				[0, 2, 0, 23, 0, 0, 0, 0, 0, 19, 18, 22, 2, 0],
				[0, 2, 0, 19, 14, 0, 0, 0, 0, 4, 7, 7, 11, 0],
				[0, 2, 22, 21, 2, 0, 0, 0, 0, 6, 0, 0, 2, 0],
				[0, 3, 7, 7, 10, 0, 0, 0, 0, 0, 0, 0, 2, 0],
				[0, 2, 0, 0, 0, 0, 18, 21, 0, 0, 0, 0, 2, 0],
				[0, 2, 0, 0, 14, 0, 4, 7, 7, 7, 7, 7, 10, 0],
				[0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0],
				[0, 2, 0, 23, 2, 15, 2, 0, 0, 0, 0, 0, 0, 0],
				[0, 9, 7, 7, 26, 7, 10, 0, 0, 0, 0, 0, 0, 0]
			];
			time = 180;
			targetScore = 1000;
			//game_mc.colorLevel.gotoAndStop(3);				
		} else if (GardenCollapse.level == 12) {
			levelArray = [
				[4, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
				[2, 18, 19, 21, 25, 20, 22, 24, 23, 0, 0, 0, 0, 2],
				[3, 7, 7, 7, 7, 7, 7, 7, 7, 5, 6, 1, 0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
				[2, 0, 12, 7, 5, 6, 12, 7, 7, 7, 7, 7, 7, 11],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 23, 2],
				[3, 7, 7, 7, 7, 7, 7, 7, 5, 0, 12, 7, 7, 11],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
				[2, 6, 12, 5, 6, 4, 5, 6, 12, 7, 7, 7, 7, 11],
				[2, 0, 19, 23, 0, 2, 23, 0, 22, 24, 18, 25, 20, 2],
				[9, 7, 7, 7, 7, 26, 7, 7, 7, 7, 7, 7, 7, 10]
			];
			time = 160;
			targetScore = 1000;
			//game_mc.colorLevel.gotoAndStop(3);				
		} else if (GardenCollapse.level == 13) {
			levelArray = [
				[4, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
				[2, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 19, 21, 2],
				[2, 19, 14, 0, 12, 7, 7, 7, 6, 7, 7, 8, 22, 2],
				[2, 18, 2, 0, 0, 20, 18, 0, 0, 0, 0, 2, 18, 2],
				[9, 7, 11, 0, 0, 12, 5, 0, 0, 0, 0, 3, 7, 10],
				[0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
				[0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
				[0, 0, 2, 0, 21, 24, 18, 24, 23, 24, 0, 2, 0, 0],
				[0, 0, 2, 0, 4, 7, 7, 7, 7, 8, 0, 2, 0, 0],
				[0, 0, 2, 15, 2, 0, 0, 0, 0, 2, 20, 2, 0, 0],
				[0, 0, 9, 7, 10, 0, 0, 0, 0, 9, 7, 10, 0, 0]
			];
			time = 140;
			targetScore = 1000;
			//game_mc.colorLevel.gotoAndStop(3);				
		} else if (GardenCollapse.level == 14) {
			levelArray = [
				[4, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 2],
				[2, 19, 0, 22, 20, 19, 23, 25, 0, 14, 22, 14, 0, 2],
				[3, 5, 0, 12, 7, 7, 7, 5, 0, 9, 7, 10, 0, 2],
				[2, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 2],
				[2, 0, 0, 0, 12, 7, 5, 0, 1, 0, 0, 0, 0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 2],
				[2, 0, 12, 5, 0, 0, 0, 0, 0, 1, 0, 0, 15, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
				[2, 23, 0, 14, 23, 25, 0, 0, 24, 4, 7, 8, 0, 2],
				[9, 7, 7, 26, 7, 7, 7, 7, 5, 9, 7, 10, 12, 10]
			];
			time = 150;
			targetScore = 1000;
			//game_mc.colorLevel.gotoAndStop(3);				
		} else if (GardenCollapse.level == 15) {
			levelArray = [
				[4, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
				[2, 0, 0, 0, 0, 0, 0, 12, 7, 7, 7, 5, 0, 2],
				[2, 0, 0, 0, 19, 0, 22, 0, 24, 0, 0, 0, 0, 2],
				[2, 0, 25, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 2],
				[2, 0, 14, 18, 1, 0, 0, 0, 1, 22, 14, 0, 0, 2],
				[2, 0, 2, 24, 20, 23, 1, 24, 20, 21, 2, 0, 0, 2],
				[2, 0, 3, 5, 18, 20, 0, 19, 1, 20, 2, 22, 0, 2],
				[2, 0, 1, 0, 22, 21, 0, 21, 18, 23, 1, 25, 0, 2],
				[3, 13, 13, 13, 13, 8, 0, 4, 13, 13, 13, 8, 15, 2],
				[9, 26, 26, 26, 26, 26, 7, 26, 26, 26, 26, 26, 7, 10]
			];
			time = 160;
			targetScore = 1000;
			//game_mc.colorLevel.gotoAndStop(3);				
		}

		TempScore = GardenCollapse.score;
		preScore = GardenCollapse.score;
		levelTime = time;
		this.AttachTiles();
		if (GardenCollapse.level == 11 || GardenCollapse.level == 13 || GardenCollapse.level == 14 || GardenCollapse.level == 15) {
			this.liftm = this.game.time.events.loop(Phaser.Timer.SECOND, this.liftMove, this);
		}
		if (GardenCollapse.level == 12 || GardenCollapse.level == 13 || GardenCollapse.level == 14 || GardenCollapse.level == 15) {
			this.traptm = this.game.time.events.loop(Phaser.Timer.SECOND, this.trapFunction, this);
		}

		// this.game.physics.enable(gun, Phaser.Physics.ARCADE);


		/*okBtn1 = this.game.add.sprite(480,380,'okBtn1');
		okBtn1.buttonMode = true;
		okBtn1.anchor.set(.5);
		okBtn1.events.onInputOver.add(this.onOkOver, this);
		//okBtn1.events.onInputOut.add(this.out, this);
		okBtn1.events.onInputDown.add(this.toGame, this);
		okBtn1.inputEnabled = true;
		okBtn1.input.useHandCursor = true;
		
		okBtn2 = this.game.add.sprite(480,380,'okBtn2');
		okBtn2.buttonMode = true;
		okBtn2.anchor.set(.5);
		//okBtn2.events.onInputOver.add(this.onOkOver, this);
		okBtn2.events.onInputOut.add(this.OkOut, this);
		okBtn2.events.onInputDown.add(this.toGame, this);
		okBtn2.inputEnabled = true;
		okBtn2.input.useHandCursor = true;
		okBtn2.visible=false;
		targetDisplayed=true;*/



		/*console.log(this.game.world.height+"////");
		 this.game.debug.text('this.game.world.height: ' + this.game.world.height, 100, 100);*/

		timerBase = this.game.add.sprite(850, 250, 'timerBox');
		timerBase.anchor.set(.5);
		//timerBase.scale.x=1.2;
		//timerBase.scale.y=1.1;0x00A4A4

		levelBase = this.game.add.sprite(850, 295, 'levelBox');
		levelBase.anchor.set(.5);
		//levelBase.scale.x=levelBase.scale.y=.75;

		scoreBase = this.game.add.sprite(850, 340, 'scoreBox');
		scoreBase.anchor.set(.5);
		//scoreBase.scale.x=scoreBase.scale.y=.75;





		timer = this.add.bitmapText(875, 250, 'angleFont2', String(time), 22);
		//timer=this.game.add.text(578,515, String(time), style);//String(this.level)
		timer.anchor.set(0.5);

		level = this.add.bitmapText(875, 295, 'angleFont2', String(GardenCollapse.level), 22);
		level.anchor.set(0.5);

		score = this.add.bitmapText(875, 340, 'angleFont2', String(GardenCollapse.score), 22);
		score.anchor.set(0.5);


		resetBtn1 = this.add.button(850, 420, 'resetBtn1');
		resetBtn1.anchor.set(.5);
		//resetBtn1.scale.x=resetBtn1.scale.y=1.5;
		resetBtn1.buttonMode = true;
		resetBtn1.events.onInputOver.add(this.onResetOver, this);
		resetBtn1.events.onInputOut.add(this.onResetOut, this);
		resetBtn1.events.onInputDown.add(this.isResetClicked, this);
		resetBtn1.inputEnabled = true;
		resetBtn1.input.useHandCursor = true;



		menuNam = this.add.bitmapText(773, 120, 'angleFont2', "menu", 20);
		helpNam = this.add.bitmapText(873, 120, 'angleFont2', "help", 20);
		pauseNam = this.add.bitmapText(923, 120, 'angleFont2', "pause", 20);
		soundonNam = this.add.bitmapText(823, 120, 'angleFont2', "sound on", 20);
		soundoffNam = this.add.bitmapText(823, 120, 'angleFont2', "sound off", 20);
		menuNam.anchor.set(.5);
		helpNam.anchor.set(.5);
		pauseNam.anchor.set(.5);
		soundonNam.anchor.set(.5);
		soundoffNam.anchor.set(.5);
		menuNam.visible = false;
		helpNam.visible = false;
		pauseNam.visible = false;
		soundonNam.visible = false;
		soundoffNam.visible = false;

		menuBtn1 = this.add.button(773, 150, 'menu1');
		menuBtn1.anchor.set(.5);
		menuBtn1.scale.x = menuBtn1.scale.y = .6;
		menuBtn1.buttonMode = true;
		menuBtn1.events.onInputOver.add(this.onOver, this);
		menuBtn1.events.onInputOut.add(this.onOut, this);
		menuBtn1.events.onInputDown.add(this.isMenuClicked, this);
		menuBtn1.inputEnabled = true;
		menuBtn1.input.useHandCursor = true;
		menuBtn1.nam = menuNam;

		soundOnBtn1 = this.add.button(823, 150, 'soundOn1');
		soundOnBtn1.anchor.set(.5);
		soundOnBtn1.scale.x = soundOnBtn1.scale.y = .6;
		soundOnBtn1.buttonMode = true;
		soundOnBtn1.events.onInputOver.add(this.onOver, this);
		soundOnBtn1.events.onInputOut.add(this.onOut, this);
		soundOnBtn1.events.onInputDown.add(this.isSoundClicked, this);
		soundOnBtn1.inputEnabled = true;
		soundOnBtn1.input.useHandCursor = true;
		soundOnBtn1.visible = false;
		soundOnBtn1.nam = soundonNam;

		soundOffBtn1 = this.add.button(823, 150, 'soundOff1');
		soundOffBtn1.anchor.set(.5);
		soundOffBtn1.scale.x = soundOffBtn1.scale.y = .6;
		soundOffBtn1.buttonMode = true;
		soundOffBtn1.events.onInputOver.add(this.onOver, this);
		soundOffBtn1.events.onInputOut.add(this.onOut, this);
		soundOffBtn1.events.onInputDown.add(this.isSoundClicked, this);
		soundOffBtn1.inputEnabled = true;
		soundOffBtn1.input.useHandCursor = true;
		soundOffBtn1.visible = false;
		soundOffBtn1.nam = soundoffNam;


		if (GardenCollapse.soundReady == true) {
			soundOnBtn1.visible = true;
		} else {
			soundOffBtn1.visible = true;
		}


		helpBtn1 = this.add.button(873, 150, 'help1');
		helpBtn1.anchor.set(.5);
		helpBtn1.scale.x = helpBtn1.scale.y = .6;
		helpBtn1.buttonMode = true;
		helpBtn1.events.onInputOver.add(this.onOver, this);
		helpBtn1.events.onInputOut.add(this.onOut, this);
		helpBtn1.events.onInputDown.add(this.isHelpClicked, this);
		helpBtn1.inputEnabled = true;
		helpBtn1.input.useHandCursor = true;
		helpBtn1.nam = helpNam;


		pauseBtn1 = this.add.button(923, 150, 'pause1');
		pauseBtn1.anchor.set(.5);
		pauseBtn1.scale.x = pauseBtn1.scale.y = .565;
		pauseBtn1.buttonMode = true;
		pauseBtn1.events.onInputOver.add(this.onPauseOver, this);
		pauseBtn1.events.onInputOut.add(this.onPauseOut, this);
		pauseBtn1.events.onInputDown.add(this.isPauseClicked, this);
		pauseBtn1.inputEnabled = true;
		pauseBtn1.input.useHandCursor = true;
		pauseBtn1.nam = pauseNam;

		this.box1 = this.add.graphics(1, 1);
		this.box1.beginFill(0x000000, .6);
		this.box1.drawRect(2, -200, 1920, 1080);

		this.box1.events.onInputDown.add(this.clickToStart, this);
		this.box1.inputEnabled = true;
		var style1 = { font: "50px Arial", fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 500, align: "center" };
		this.clicktostart = this.game.add.text(450, 330, "0", style1);
		this.clicktostart.anchor.set(0.5);
		this.clicktostart.text = "Click To Start"


		spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		spaceKey.onDown.add(this.clickToStart, this);
		this.game.input.onTap.add(this.clickdocument, this);
		/*if (this.game.device.desktop)
		{
		}else{
			
			if(WHRatio<1){
				hud.y=480;
				timerBase.y=445;
				this.timerTxt.y=435;
				this.timer.y=460;
			}
		}*/
		//hud.y=this.game.world.height;

	},
	clickToStart: function () {

		spaceKey.onDown.remove(this.clickToStart, this);
		GardenCollapse.isPaused = false;
		this.box1.destroy();
		this.clicktostart.destroy();
		this.getTimer = this.game.time.events.loop(Phaser.Timer.SECOND, this.TimerFunction, this);
		//this.game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);

		//this.game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
	},
	clickdocument: function () {
		console.log("focus");
		window.focus();
	},
	onResetOver: function (item) {
		if (!GardenCollapse.isPaused) {
			item.scale.setTo(1.05, 1.05);
		}
	},
	onResetOut: function (item) {
		item.scale.setTo(1, 1);
	},
	isResetClicked: function (item) {
		if (!GardenCollapse.isPaused && !levelupFlag) {
			GardenCollapse.isPaused = true;

			this.quitTile();
		}
	},


	onOver: function (item) {
		//if(!GardenCollapse.isPaused){
		item.scale.setTo(.65, .65);
		item.nam.visible = true;
		//}
	},

	onOut: function (item) {
		item.scale.setTo(.6, .6);
		item.nam.visible = false;
	},

	onPauseOver: function (item) {
		//if(!GardenCollapse.isPaused){
		item.scale.setTo(.575, .575);
		item.nam.visible = true;
		//}
	},

	onPauseOut: function (item) {
		item.scale.setTo(.565, .565);
		item.nam.visible = false;
	},

	isMenuClicked: function (pointer) {
		if (GardenCollapse.soundReady == true) {
			this.clickSnd = null;
			this.clickSnd = this.game.add.audio('clickSnd', 1, true);
			this.clickSnd.play('', 0, 1, false);
		}
		this.quitGame();
		//this.playButton.stop();
		//this.playButton.kill();
		this.state.start('MainMenu');
	},


	isSoundClicked: function (item) {
		if (GardenCollapse.soundReady == true) {
			GardenCollapse.soundbtnclicks = true;
			GardenCollapse.music.pause();
			GardenCollapse.soundReady = false;
			soundOnBtn1.visible = false;
			soundOffBtn1.visible = true;

		} else {
			GardenCollapse.soundbtnclicks = false;
			GardenCollapse.music.resume();
			GardenCollapse.soundReady = true;
			soundOffBtn1.visible = false;
			soundOnBtn1.visible = true;
		}
		item.nam.visible = false;
		item.scale.setTo(.6, .6);
	},


	isHelpClicked: function (pointer) {
		if (!GardenCollapse.isPaused && !helpDisplayed) {
			if (GardenCollapse.soundReady == true) {
				this.clickSnd = null;
				this.clickSnd = this.game.add.audio('clickSnd', 1, true);
				this.clickSnd.play('', 0, 1, false);
			}
			GardenCollapse.isPaused = true;
			helpDisplayed = true;
			gameArea.visible = false;
			/*var txt="            Your aim is to destroy the flowers \n           as soon as possible before the timer \n       turns off. Same colored flowers explods \n          when they comes near to each other. \n        You can drag the flowers to possible \n           vacant locations. In higher levels, \n          there are elevator and laser beams \n                            to help you.";*/

			var txt = "      Remove all the blocks before\n              the timer turns off.\n      Same colored blocks explodes\nwhen they comes near to each other.\n         You can drag the block to\n         possible vacant locations.";


			helpText = this.add.bitmapText(180, 140, 'angleFont', txt, 28);

			okBtn1 = this.game.add.sprite(400, 400, 'okBtn1');
			okBtn1.buttonMode = true;
			okBtn1.anchor.set(.5);
			okBtn1.scale.setTo(.6, .6);
			okBtn1.events.onInputOver.add(this.onBtnOver, this);
			okBtn1.events.onInputOut.add(this.onBtnOut, this);
			okBtn1.events.onInputDown.add(this.isOkClicked, this);
			okBtn1.inputEnabled = true;
			okBtn1.input.useHandCursor = true;

			helpBtn1.nam.visible = false;
			helpBtn1.scale.setTo(.6, .6);
		}
	},
	onBtnOver: function (item) {
		item.scale.setTo(.65, .65);
	},

	onBtnOut: function (item) {
		item.scale.setTo(.6, .6);

	},

	isOkClicked: function (pointer) {
		if (GardenCollapse.soundReady == true) {
			this.clickSnd = null;
			this.clickSnd = this.game.add.audio('clickSnd', 1, true);
			this.clickSnd.play('', 0, 1, false);
		}
		GardenCollapse.isPaused = false;
		helpDisplayed = false;
		helpText.destroy();
		okBtn1.destroy();
		gameArea.visible = true;
	},




	isPauseClicked: function (pointer) {
		if (!GardenCollapse.isPaused && !pauseDisplayed) {
			if (GardenCollapse.soundReady == true) {
				this.clickSnd = null;
				this.clickSnd = this.game.add.audio('clickSnd', 1, true);
				this.clickSnd.play('', 0, 1, false);
			}
			GardenCollapse.isPaused = true;
			pauseDisplayed = true;
			gameArea.visible = false;
			pauseBox = this.game.add.sprite(350, 270, 'pausedBox');
			pauseBox.anchor.set(.5);


			menuBtnp1 = this.game.add.sprite(240, 320, 'menuBtn1');
			menuBtnp1.buttonMode = true;
			menuBtnp1.anchor.set(.5);
			menuBtnp1.scale.x = menuBtnp1.scale.y = .6;
			menuBtnp1.events.onInputOver.add(this.onBtnOver, this);
			menuBtnp1.events.onInputOut.add(this.onBtnOut, this);
			menuBtnp1.events.onInputDown.add(this.isMenuClicked, this);
			menuBtnp1.inputEnabled = true;
			menuBtnp1.input.useHandCursor = true;

			continueBtn1 = this.game.add.sprite(465, 320, 'continueBtn1');
			continueBtn1.buttonMode = true;
			continueBtn1.anchor.set(.5);
			continueBtn1.scale.x = continueBtn1.scale.y = .6;
			continueBtn1.events.onInputOver.add(this.onBtnOver, this);
			continueBtn1.events.onInputOut.add(this.onBtnOut, this);
			continueBtn1.events.onInputDown.add(this.isContinueClicked, this);
			continueBtn1.inputEnabled = true;
			continueBtn1.input.useHandCursor = true;
			pauseBtn1.nam.visible = false;
			pauseBtn1.scale.setTo(.565, .565);
		}
	},


	isContinueClicked: function (pointer) {
		if (GardenCollapse.soundReady == true) {
			this.clickSnd = null;
			this.clickSnd = this.game.add.audio('clickSnd', 1, true);
			this.clickSnd.play('', 0, 1, false);
		}
		GardenCollapse.isPaused = false;
		pauseDisplayed = false;
		gameArea.visible = true;
		menuBtnp1.destroy();
		continueBtn1.destroy();
		pauseBox.destroy();
	},

	AttachTiles: function () {
		var xpos = 0;
		var ypos = 0;
		dist = 45
		for (var i = 0; i < MaxRow; ++i) {
			MainArr[i] = new Array();
			for (var j = 0; j < MaxCol; ++j) {
				xpos = 75 + (j * dist);
				ypos = 35 + (i * dist);
				switch (levelArray[i][j]) {
					case 0:
						MainArr[i][j] = 0;
						break;
					case 1:
						var tile = this.game.add.sprite(xpos, ypos, 'tile1');
						gameArea.add(tile);
						tile.anchor.set(0.5);
						//tile.scale.x=.9;
						//tile.scale.y=.9;
						tile.fNo = 1;
						MainArr[i][j] = tile;
						TileArr.push(tile);
						break;
					case 2:
						var tile = this.game.add.sprite(xpos, ypos, 'tile2');
						gameArea.add(tile);
						tile.anchor.set(0.5);
						//tile.scale.x=.9;
						//tile.scale.y=.9;
						//tile.angle=90;
						tile.fNo = 2;
						MainArr[i][j] = tile;
						TileArr.push(tile);
						break;
					case 3:
						var tile = this.game.add.sprite(xpos, ypos, 'tile3');
						gameArea.add(tile);
						tile.anchor.set(0.5);
						//tile.scale.x=.9;
						//tile.scale.y=.9;
						//tile.angle=90;
						tile.fNo = 3;
						MainArr[i][j] = tile;
						TileArr.push(tile);
						break;
					case 4:
						var tile = this.game.add.sprite(xpos, ypos, 'tile4');
						gameArea.add(tile);
						tile.anchor.set(0.5);
						//tile.scale.x=.9;
						//tile.scale.y=.9;
						tile.fNo = 4;
						MainArr[i][j] = tile;
						TileArr.push(tile);
						break;
					case 5:
						var tile = this.game.add.sprite(xpos, ypos, 'tile5');
						gameArea.add(tile);
						tile.anchor.set(0.5);
						//tile.scale.x=.9;
						//tile.scale.y=.9;
						//tile.angle=90;
						tile.fNo = 5;
						MainArr[i][j] = tile;
						TileArr.push(tile);
						break;
					case 6:
						var tile = this.game.add.sprite(xpos, ypos, 'tile1');
						gameArea.add(tile);
						tile.anchor.set(0.5);
						//tile.scale.x=.9;
						//tile.scale.y=.9;
						tile.row = i;
						tile.col = j;
						tile.fNo = 6;
						MainArr[i][j] = tile;
						TileArr.push(tile);
						trapArr.push(tile);
						/*if(Math.floor(Math.random()*2)==0){
							tile.alpha=0.3;
							MainArr[i][j]=0;
						}*/
						break;
					case 7:
						var tile = this.game.add.sprite(xpos, ypos, 'tile2');
						gameArea.add(tile);
						tile.anchor.set(0.5);
						//tile.scale.x=.9;
						//tile.scale.y=.9;
						tile.angle = 90;
						tile.fNo = 7;
						MainArr[i][j] = tile;
						TileArr.push(tile);
						break;
					case 8:
						var tile = this.game.add.sprite(xpos, ypos, 'tile4');
						gameArea.add(tile);
						tile.anchor.set(0.5);
						//tile.scale.x=.9;
						//tile.scale.y=.9;
						tile.angle = 90;
						tile.fNo = 8;
						MainArr[i][j] = tile;
						TileArr.push(tile);
						break;
					case 9:
						var tile = this.game.add.sprite(xpos, ypos, 'tile4');
						gameArea.add(tile);
						tile.anchor.set(0.5);
						//tile.scale.x=.9;
						//tile.scale.y=.9;
						tile.angle = -90;
						tile.fNo = 9;
						MainArr[i][j] = tile;
						TileArr.push(tile);
						break;
					case 10:
						var tile = this.game.add.sprite(xpos, ypos, 'tile4');
						gameArea.add(tile);
						tile.anchor.set(0.5);
						//tile.scale.x=.9;
						//tile.scale.y=.9;
						tile.angle = 180;
						tile.fNo = 10;
						MainArr[i][j] = tile;
						TileArr.push(tile);
						break;
					case 11:
						var tile = this.game.add.sprite(xpos, ypos, 'tile3');
						gameArea.add(tile);
						tile.anchor.set(0.5);
						//tile.scale.x=.9;
						//tile.scale.y=.9;
						tile.angle = 180;
						tile.fNo = 11;
						MainArr[i][j] = tile;
						TileArr.push(tile);
						break;
					case 12:
						var tile = this.game.add.sprite(xpos, ypos, 'tile5');
						gameArea.add(tile);
						tile.anchor.set(0.5);
						//tile.scale.x=.9;
						//tile.scale.y=.9;
						tile.angle = 180;
						tile.fNo = 12;
						MainArr[i][j] = tile;
						TileArr.push(tile);
						break;
					case 13:
						var tile = this.game.add.sprite(xpos, ypos, 'tile3');
						gameArea.add(tile);
						tile.anchor.set(0.5);
						//tile.scale.x=.9;
						//tile.scale.y=.9;
						tile.angle = 90;
						tile.fNo = 13;
						MainArr[i][j] = tile;
						TileArr.push(tile);
						break;
					case 14:
						var tile = this.game.add.sprite(xpos, ypos, 'tile5');
						gameArea.add(tile);
						tile.anchor.set(0.5);
						//tile.scale.x=.9;
						//tile.scale.y=.9;
						tile.angle = 270;
						tile.fNo = 14;
						MainArr[i][j] = tile;
						TileArr.push(tile);
						break;
					case 15:
						var tile = this.game.add.sprite(xpos, ypos, 'tiles');
						gameArea.add(tile);
						tile.scale.x = tile.scale.y = .9;
						tile.scale.x = .92;
						tile.scale.y = .92;
						tile.anchor.set(0.5);
						tile.frame = 47;
						tile.row = i;
						tile.col = j;
						tile.fNo = 15;
						tile.animations.add('anim', [47, 48]);
						tile.play('anim', 10, true);
						TileArr.push(tile);
						MainArr[i][j] = tile;
						lift = tile;
						LFArr = [tile];
						//lift.flower=null;
						lift.direction = "up";
						break;
					case 16:
						var tile = this.game.add.sprite(xpos, ypos, 'tiles');
						gameArea.add(tile);
						tile.scale.x = tile.scale.y = .9;
						//tile.scale.x=.9;
						//tile.scale.y=.9
						tile.anchor.set(0.5);
						tile.frame = 5;
						tile.frameMax = 6;
						tile.row = i;
						tile.col = j;
						tile.fNo = 16;
						tile.matched = false;
						tile.checking = false;
						tile.lifting = false;
						tile.animations.add('anim', [5, 6]);
						tile.play('anim', 10, true);
						TileArr.push(tile);
						MainArr[i][j] = tile;

						break;
					case 17:
						var tile = this.game.add.sprite(xpos, ypos, 'tiles');
						gameArea.add(tile);
						tile.scale.x = tile.scale.y = .9;
						//tile.scale.x=.9;
						//tile.scale.y=.9
						tile.anchor.set(0.5);
						tile.frame = 0;
						tile.frameMax = 4;
						tile.row = i;
						tile.col = j;
						tile.fNo = 17;
						tile.matched = false;
						tile.checking = false;
						tile.lifting = false;
						tile.animations.add('anim', [0, 1, 2, 3, 4]);
						//FlowerArr.push(tile);
						MainArr[i][j] = tile;
						bomb = tile;
						break;
					case 18:
						var tile = this.game.add.sprite(xpos, ypos, 'tiles');
						gameArea.add(tile);
						tile.scale.x = tile.scale.y = .9;
						tile.scale.x = .92;
						tile.scale.y = .92;
						tile.anchor.set(0.5);
						tile.frame = 7;
						tile.frameMax = 11;
						tile.row = i;
						tile.col = j;
						tile.clicked = false;
						tile.fNo = 18;
						tile.matched = false;
						tile.checking = false;
						tile.lifting = false;
						tile.animations.add('anim', [7, 8, 9, 10, 11]);
						FlowerArr.push(tile);
						MainArr[i][j] = tile;
						break;
					case 19:
						var tile = this.game.add.sprite(xpos, ypos, 'tiles');
						gameArea.add(tile);
						tile.scale.x = .92;
						tile.scale.y = .92;
						tile.anchor.set(0.5);
						tile.frame = 27;
						tile.frameMax = 31;
						tile.row = i;
						tile.col = j;
						tile.clicked = false;
						tile.fNo = 19;
						tile.matched = false;
						tile.checking = false;
						tile.lifting = false;
						tile.animations.add('anim', [27, 28, 29, 30, 31]);
						MainArr[i][j] = tile;
						FlowerArr.push(tile);
						break;
					case 20:
						var tile = this.game.add.sprite(xpos, ypos, 'tiles');
						gameArea.add(tile);
						tile.scale.x = tile.scale.y = .9;
						tile.scale.x = .92;
						tile.scale.y = .92;
						tile.anchor.set(0.5);
						tile.frame = 32;
						tile.frameMax = 36;
						tile.row = i;
						tile.col = j;
						tile.clicked = false;
						tile.fNo = 20;
						tile.matched = false;
						tile.checking = false;
						tile.lifting = false;
						tile.animations.add('anim', [32, 33, 34, 35, 36]);
						MainArr[i][j] = tile;
						FlowerArr.push(tile);
						break;
					case 21:
						var tile = this.game.add.sprite(xpos, ypos, 'tiles');
						gameArea.add(tile);
						tile.scale.x = tile.scale.y = .9;
						tile.scale.x = .92;
						tile.scale.y = .92;
						tile.anchor.set(0.5);
						tile.frame = 37;
						tile.frameMax = 41;
						tile.row = i;
						tile.col = j;
						tile.clicked = false;
						tile.fNo = 21;
						tile.matched = false;
						tile.checking = false;
						tile.lifting = false;
						tile.animations.add('anim', [37, 38, 39, 40, 41]);
						MainArr[i][j] = tile;
						FlowerArr.push(tile);
						break;
					case 22:
						var tile = this.game.add.sprite(xpos, ypos, 'tiles');
						gameArea.add(tile);
						tile.scale.x = .92;
						tile.scale.y = .92;
						tile.anchor.set(0.5);
						tile.frame = 42;
						tile.frameMax = 46;
						tile.row = i;
						tile.col = j;
						tile.clicked = false;
						tile.fNo = 22;
						tile.matched = false;
						tile.checking = false;
						tile.lifting = false;
						tile.animations.add('anim', [42, 43, 44, 45, 46]);
						MainArr[i][j] = tile;
						FlowerArr.push(tile);


						break;
					case 23:
						var tile = this.game.add.sprite(xpos, ypos, 'tiles');
						gameArea.add(tile);
						tile.scale.x = .92;
						tile.scale.y = .92;
						tile.anchor.set(0.5);
						tile.frame = 12;
						tile.frameMax = 16;
						tile.row = i;
						tile.col = j;
						tile.clicked = false;
						tile.fNo = 23;
						tile.matched = false;
						tile.checking = false;
						tile.lifting = false;
						tile.animations.add('anim', [12, 13, 14, 15, 16]);
						MainArr[i][j] = tile;
						FlowerArr.push(tile);
						break;
					case 24:
						var tile = this.game.add.sprite(xpos, ypos, 'tiles');
						gameArea.add(tile);
						tile.scale.x = .92;
						tile.scale.y = .92;
						tile.anchor.set(0.5);
						tile.frame = 17;
						tile.frameMax = 21;
						tile.row = i;
						tile.col = j;
						tile.clicked = false;
						tile.fNo = 24;
						tile.matched = false;
						tile.checking = false;
						tile.lifting = false;
						tile.animations.add('anim', [17, 18, 19, 20, 21]);
						MainArr[i][j] = tile;
						FlowerArr.push(tile);
						break;
					case 25:
						var tile = this.game.add.sprite(xpos, ypos, 'tiles');
						gameArea.add(tile);
						tile.scale.x = .92;
						tile.scale.y = .92;
						tile.anchor.set(0.5);
						tile.frame = 22;
						tile.frameMax = 26;
						tile.row = i;
						tile.col = j;
						tile.clicked = false;
						tile.fNo = 25;
						tile.matched = false;
						tile.checking = false;
						tile.lifting = false;
						tile.animations.add('anim', [22, 23, 24, 25, 26]);
						MainArr[i][j] = tile;
						FlowerArr.push(tile);
						break;
					case 26:
						var tile = this.game.add.sprite(xpos, ypos, 'tile3');
						gameArea.add(tile);
						tile.anchor.set(0.5);
						//tile.scale.x=.9;
						//tile.scale.y=.9;
						tile.angle = 270;
						tile.fNo = 26;
						MainArr[i][j] = tile;
						TileArr.push(tile);
						break;

				}

			}
			GardenCollapse.isPaused = false;
		}
		for (var i = 0; i < FlowerArr.length; i++) {
			FlowerArr[i].inputEnabled = true;
			FlowerArr[i].events.onInputOver.add(this.onFlowerOver, this);
			FlowerArr[i].events.onInputOut.add(this.FlowerOut, this);
			FlowerArr[i].events.onInputDown.add(this.isFlowerClicked, this);
			FlowerArr[i].events.onInputUp.add(this.isFlowerUp, this);
		}
	},
	onFlowerOver: function (flower) {

		if (!GardenCollapse.isPaused && flower.matched == false) {
			if (flower.frame < flower.frameMax) {
				flower.play('anim', 10, false);
			}
		}
	},
	FlowerOut: function (flower) {
		if (flower.matched == false) {
			flower.frame = flower.frameMax - 4;
		}
	},
	isFlowerClicked: function (flower) {
		if (!GardenCollapse.isPaused) {
			if (flower.matched == false) {
				flowerSelected = true;
				currentFlower = flower;
				currentRow = flower.row;
				currentCol = flower.col;
			}
		}
	},
	isFlowerUp: function (flower) {
		flowerSelected = false;
		currentFlower = null;
	},
	bgClick: function () {
		flowerSelected = false;
		currentFlower = null;
	},
	TimerFunction: function () {
		if (GardenCollapse.orientated == true) {
			if (!GardenCollapse.isPaused) {
				//delay++;
				//console.log(delay);
				if (time > 0) {//delay>1 && 
					time--;
					timer.text = String(time);
					//delay=0;
				}
			}
		}
	},
	toLevelup: function () {
		if (!GardenCollapse.isPaused) {
			this.quitGame();
			if (GardenCollapse.soundReady == true) {
				this.clickSnd = null;
				this.clickSnd = this.game.add.audio('levelupSnd', 1, true);
				this.clickSnd.play('', 0, 1, false);
			}
			if (GardenCollapse.level == 15) {
				this.state.start('Gamewon');
			} else {
				this.state.start('Levelup');
			}
		}
	},
	update: function () {

		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!

		if (!GardenCollapse.isPaused) {
			if (!levelupFlag) {
				this.moveFlower();
				this.checkRaw();
				this.checkMatch();
				for (i = FlowerArr.length - 1; i >= 0; i--) {
					if (FlowerArr[i].matched == true) {
						FlowerArr[i].scale.x += .005;
						FlowerArr[i].scale.y += .005;
						//console.log(FlowerArr[i].frame+"=="+FlowerArr[i].frameMax+"//"+FlowerArr[i].scale.x);
						if (FlowerArr[i].frame == FlowerArr[i].frameMax || FlowerArr[i].scale.x > 1.1) {
							if (GardenCollapse.soundReady == true) {
								this.clickSnd = null;
								this.clickSnd = this.game.add.audio('collideSnd', 1, true);
								this.clickSnd.play('', 0, 1, false);
							}
							FlowerArr[i].destroy();
							//FlowerArr[i].alpha=.2;
							FlowerArr.splice(i, 1);
							TempScore += 10;
							//score.text=String(GardenCollapse.score);
						}
					} else {
						if (FlowerArr[i].frame == FlowerArr[i].frameMax) {
							FlowerArr[i].frame = FlowerArr[i].frameMax - 4;
							FlowerArr[i].animations.stop(null, true);
						}
					}

				}
				if (FlowerArr.length == 0) {
					levelupFlag = true;
					this.levelup = this.game.time.events.loop(Phaser.Timer.SECOND, this.toLevelup, this);
				} else {
					if (time <= 0) {
						this.quitGame();
						if (GardenCollapse.soundReady == true) {
							this.clickSnd = null;
							this.clickSnd = this.game.add.audio('gameoverSnd', 1, true);
							this.clickSnd.play('', 0, 1, false);
						}
						console.log(preScore);
						GardenCollapse.levelscore = preScore
						this.state.start('Gameover');
					}
				}
			} else {
				TempScore += (time * 2);
				//score.text=String(GardenCollapse.score);
			}
			if (GardenCollapse.score < TempScore) {
				GardenCollapse.score += 2;
				score.text = String(GardenCollapse.score);
			}
		}
	},
	trapFunction: function () {
		if (!GardenCollapse.isPaused) {
			for (i = 0; i < trapArr.length; i++) {
				if (trapArr[i].alpha == 0.3 && MainArr[trapArr[i].row][trapArr[i].col] == 0) {

					trapArr[i].alpha = 1;
					MainArr[trapArr[i].row][trapArr[i].col] = trapArr[i];

				} else {
					//if(Math.floor(Math.random()*2)==0){
					trapArr[i].alpha = 0.3;
					MainArr[trapArr[i].row][trapArr[i].col] = 0;
					//}
				}
			}
		}
	},
	liftMove: function () {
		if (!GardenCollapse.isPaused) {
			if (LFArr.length > 0) {
				if (lift.direction == "up") {
					if (MainArr[LFArr[LFArr.length - 1].row - 1][LFArr[LFArr.length - 1].col] == 0) {
						for (i = LFArr.length - 1; i >= 0; i--) {
							LFArr[i].y -= dist;
							MainArr[LFArr[i].row][LFArr[i].col] = 0;
							LFArr[i].row -= 1;
							MainArr[LFArr[i].row][LFArr[i].col] = LFArr[i];
						}
					} else {
						lift.direction = "down"
					}
				} else if (lift.direction == "down") {
					if (MainArr[LFArr[0].row + 1][LFArr[0].col] == 0) {
						for (i = 0; i < LFArr.length; i++) {
							LFArr[i].y += dist;
							MainArr[LFArr[i].row][LFArr[i].col] = 0;
							LFArr[i].row += 1;
							MainArr[LFArr[i].row][LFArr[i].col] = LFArr[i];
						}
					} else {
						lift.direction = "up"
					}
				}
			}
		}
	},
	moveFlower: function () {
		if (!GardenCollapse.isPaused) {
			if (flowerSelected) {
				if (currentFlower.matched == false) {
					currentRow = currentFlower.row;
					if (this.game.input.x > (currentFlower.x + 25) && MainArr[currentRow][currentCol + 1] == 0 && this.game.input.y < (currentFlower.y + 40) && this.game.input.y > (currentFlower.y - 40)) {
						if (GardenCollapse.soundReady == true) {
							this.clickSnd = null;
							this.clickSnd = this.game.add.audio('flowerSnd', 1, true);
							this.clickSnd.play('', 0, 1, false);
						}
						MainArr[currentRow][currentCol + 1] = currentFlower;
						currentFlower.x += dist;
						MainArr[currentRow][currentCol] = 0;
						currentCol += 1;
						currentFlower.col = currentCol;
						if (currentFlower.lifting) {
							for (i = 1; i < LFArr.length; i++) {
								if (LFArr[i] == currentFlower) {
									currentFlower.lifting = false;
									LFArr.splice(i, 1); flowerSelected = false;
									break;
								}
							}
						}
					} else if (this.game.input.x < (currentFlower.x - 25) && MainArr[currentRow][currentCol - 1] == 0 && this.game.input.y < (currentFlower.y + 40) && this.game.input.y > (currentFlower.y - 40)) {
						if (GardenCollapse.soundReady == true) {
							this.clickSnd = null;
							this.clickSnd = this.game.add.audio('flowerSnd', 1, true);
							this.clickSnd.play('', 0, 1, false);
						}
						MainArr[currentRow][currentCol - 1] = currentFlower;
						currentFlower.x -= dist;
						MainArr[currentRow][currentCol] = 0;
						currentCol -= 1;
						currentFlower.col = currentCol;
						if (currentFlower.lifting) {
							for (i = 1; i < LFArr.length; i++) {
								if (LFArr[i] == currentFlower) {
									currentFlower.lifting = false;
									LFArr.splice(i, 1); flowerSelected = false;
									break;
								}
							}
						}

					}

				}
			}
		}
	},
	checkRaw: function () {
		if (!GardenCollapse.isPaused) {
			var r = 0;
			var c = 0;
			for (i = 0; i < FlowerArr.length; i++) {
				if (FlowerArr[i].matched == false) {
					r = FlowerArr[i].row;
					c = FlowerArr[i].col;
					if (MainArr[r + 1][c] == 0) {
						if (flowerSelected && currentFlower == FlowerArr[i]) {
							currentFlower = null;
							flowerSelected = false;
						}
						FlowerArr[i].y += dist;
						MainArr[r + 1][c] = FlowerArr[i];
						MainArr[r][c] = 0;
						FlowerArr[i].row = r + 1;
						//break;
					} else if (bomb != null && MainArr[r + 1][c] == bomb) {
						if (flowerSelected && currentFlower == FlowerArr[i]) {
							currentFlower = null;
							flowerSelected = false;
						}
						FlowerArr[i].frame = FlowerArr[i].frameMax - 4;
						FlowerArr[i].play('anim', 10, true);
						FlowerArr[i].matched = true;
						FlowerArr.push(bomb);
						bomb.play('anim', 10, true);
						bomb.matched = true;
						MainArr[r][c] = 0;
						MainArr[r + 1][c] = 0;
						if (GardenCollapse.soundReady == true) {
							this.clickSnd = null;
							this.clickSnd = this.game.add.audio('bombSnd', 1, true);
							this.clickSnd.play('', 0, 1, false);
						}
					} else if (MainArr[r + 1][c].fNo == 16) {
						if (flowerSelected && currentFlower == FlowerArr[i]) {
							currentFlower = null;
							flowerSelected = false;
						}
						if (GardenCollapse.soundReady == true) {
							this.clickSnd = null;
							this.clickSnd = this.game.add.audio('fireSnd', 1, true);
							this.clickSnd.play('', 0, 1, false);
						}
						FlowerArr[i].frame = FlowerArr[i].frameMax - 4;
						FlowerArr[i].play('anim', 10, true);
						FlowerArr[i].matched = true;
						MainArr[r][c] = 0;

					} else {
						if (LFArr.length > 0) {
							if (MainArr[r + 1][c] == LFArr[LFArr.length - 1] && FlowerArr[i].lifting == false) {
								if (flowerSelected && currentFlower == FlowerArr[i]) {
									currentFlower = null;
									flowerSelected = false;
								}
								LFArr.push(FlowerArr[i]);
								FlowerArr[i].lifting = true;
								//break;
							}

						}
					}
				}
			}
		}
	},
	checkMatch: function () {
		if (!GardenCollapse.isPaused) {
			var matchArray = new Array();
			matchArray = [];
			for (i = 0; i < FlowerArr.length; i++) {
				if (FlowerArr[i].matched == false && MainArr[FlowerArr[i].row + 1][FlowerArr[i].col] != 0) {
					matchArray = [FlowerArr[i]];
					FlowerArr[i].checking = true;
					for (j = 0; j < matchArray.length; j++) {
						for (k = 0; k < FlowerArr.length; k++) {
							if (FlowerArr[k].matched == false && FlowerArr[k].checking == false && FlowerArr[k].fNo == matchArray[j].fNo && MainArr[FlowerArr[k].row + 1][FlowerArr[k].col] != 0) {
								if (FlowerArr[k].row == matchArray[j].row && (FlowerArr[k].col == matchArray[j].col - 1 || FlowerArr[k].col == matchArray[j].col + 1)) {
									matchArray.push(FlowerArr[k]);
									FlowerArr[k].checking = true;
								} else if (FlowerArr[k].col == matchArray[j].col && (FlowerArr[k].row == matchArray[j].row - 1 || FlowerArr[k].row == matchArray[j].row + 1)) {
									matchArray.push(FlowerArr[k]);
									FlowerArr[k].checking = true;
								}
							}
						}
					}
				}
				/////////////////////////////////////////////////////
				if (matchArray.length >= 2) {
					for (m = 0; m < matchArray.length; m++) {
						if (flowerSelected && currentFlower == matchArray[m]) {
							currentFlower = null;
							flowerSelected = false;
						}
						matchArray[m].frame = matchArray[m].frameMax - 4;
						matchArray[m].play('anim', 10, true);
						matchArray[m].matched = true;
						MainArr[matchArray[m].row][matchArray[m].col] = 0;
						//console.log(matchArray[m].row+"//"+matchArray[m].col+"//"+MainArr[matchArray[m].row][matchArray[m].col]);
					}
				} else {
					for (m = 0; m < matchArray.length; m++) {
						if (matchArray[m].matched == false) {
							matchArray[m].checking = false;
						}
					}

				}
				matchArray.splice(0, matchArray.length);
			}
		}

	},
	quitTile: function () {

		if (bomb != null) {
			bomb.destroy();
		}
		for (i = TileArr.length - 1; i >= 0; i--) {
			TileArr[i].destroy();
		}
		for (i = FlowerArr.length - 1; i >= 0; i--) {
			FlowerArr[i].destroy();
		}

		//levelArray = [];
		MainArr = [];
		FlowerArr = [];
		TileArr = [];
		LFArr = [];
		trapArr = [];

		flowerSelected = false;
		currentRow = 0;
		currentCol = 0;
		lift = null;
		bomb = null;
		currentFlower = null;
		//GardenCollapse.isPaused=true;
		this.AttachTiles();
		console.log(preScore);
		GardenCollapse.score = preScore;
		TempScore = preScore;
		score.text = String(GardenCollapse.score);
		time = levelTime;
		timer.text = String(time);


	},
	quitGame: function () {

		if (helpDisplayed) {
			helpText.destroy();
			okBtn1.destroy();

		}
		if (pauseDisplayed) {
			menuBtnp1.destroy();
			continueBtn1.destroy();
			pauseBox.destroy();
		}

		timerBase.destroy();
		levelBase.destroy();
		scoreBase.destroy();

		timer.destroy();
		level.destroy();
		score.destroy();

		menuBtn1.destroy();
		menuNam.destroy();
		helpBtn1.destroy();
		helpNam.destroy();
		pauseBtn1.destroy();
		pauseNam.destroy();
		soundonBtn1.destroy();
		soundonNam.destroy();
		soundoffBtn1.destroy();
		soundoffNam.destroy();
		resetBtn1.destroy();

		if (bomb != null) {
			bomb.destroy();
		}
		for (i = TileArr.length - 1; i >= 0; i--) {
			TileArr[i].destroy();
		}
		for (i = FlowerArr.length - 1; i >= 0; i--) {
			FlowerArr[i].destroy();
		}

		gameArea.destroy();
		bg.destroy();

		//GardenCollapse.isPaused=true;
	}

};

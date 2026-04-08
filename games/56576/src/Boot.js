BasicGame = {
	tempScore: 0,
	score: 0,
	music: null,
	orientated: false,
	Level: 1,
	soundplay: 0,
	Life: 5,
	Timer: 0,
	gameon: false,
	playing: false,
	loadedData: null,
	versonNum: 0.1,
	desk: false,
	Version: 1,

};

BasicGame.Boot = function (game) {

};

BasicGame.Boot.prototype = {
	init: function () {
		this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = true;
		// if (this.game.device.desktop) {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		// this.scale.setMinMax(960, 540, 960, 540);
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;

		/*init: function () {
		  this.input.maxPointers = 1;
			this.stage.disableVisibilityChange = true;
		   // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
				this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
		  //  this.scale.setMinMax(480, 260, 1920, 1080);
			this.scale.pageAlignHorizontally = true;
			this.scale.pageAlignVertically = true;
			this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
			this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
		 
			 var assetScale = 1;
			var screen = "small";
			if (this.game.device.desktop){
				desktops=true;
				
			}else{
				desktops=false;
			}
			console.log(desktops+"desktops");
			if(desktops==true){
				if(window.innerWidth>960 || window.innerHeight>540){
					assetScale = 2;
					screen="large";
				}
			}
		console.log(assetScale);
			var w = LunchBox.windowWidth = Math.max(window.innerWidth,window.innerHeight);
			var h = LunchBox.windowHeight = Math.min(window.innerWidth,window.innerHeight);
		  var ws = w/(1920*assetScale);
		  var wh = h/(1080*assetScale);
			LunchBox.assetScale = assetScale;
			LunchBox.screen=screen;
			LunchBox.scaleRatio = Math.max(ws,wh);
			LunchBox.desktops=desktops;
		},*/
	},
	preload: function () {
		this.load.image('preloaderBar', 'assets/preloader_bar.png');
		//	this.load.image('splash','assets//splash.png');
	},

	create: function () {


		this.state.start('Preloader');
	},

	gameResized: function (width, height) {
		//
	},

	enterIncorrectOrientation: function () {
		BasicGame.orientated = false;
		document.getElementById('orientation').style.display = 'block';
	},

	leaveIncorrectOrientation: function () {
		BasicGame.orientated = true;
		document.getElementById('orientation').style.display = 'none';
	}

};
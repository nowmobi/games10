BasicGame = {
	tempScore: 0,
    score: 0,
    music: null,
    orientated: false,
	Level:1,
	soundplay:0,
	Life:5,
    Timer:0,
    gameon:false,
	playing:false,
	loadedData: null,
    versonNum:0.1,
    countGameover:0,
	desk:false,
    Version:1,
    pausetimer:null,
	soundbtnclicks:false,
	adshowing:false,
	Bestscore:0
 
};

BasicGame.Boot = function (game) {
	
};

BasicGame.Boot.prototype = {
  init: function () {
	this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = true;
		
	if (this.game.device.desktop)
        {
			BasicGame.desk=true;
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
          //  this.scale.setMinMax(540,960,540,960);
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
        }else {
			BasicGame.desk=false;
			 this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
			
			//this.scale.setMinMax(540, 960,540, 960);
      
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceOrientation(true, false);
           
			 
           // this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
           // this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
		}
		
	
		
		assetScale=1;
		
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
       // document.getElementById('orientation').style.display = 'block';
    },

    leaveIncorrectOrientation: function () {
        BasicGame.orientated = true;
      //  document.getElementById('orientation').style.display = 'none';
    }

};
GardenCollapse = {

    /* Here we've just got some global level vars that persist regardless of State swaps */
    score: 0,
	level:1,
	levelscore:0,
    target:0,
    adshowing:false,
    soundbtnclicks:false,
	isPaused:true,
    /* If the music in your game needs to play through-out a few State swaps, then you could reference it here */
    music: null,
	soundReady:false,

    /* Your game can check BasicGame.orientated in internal loops to know if it should pause or not */
    orientated: true

};

GardenCollapse.Boot = function (game) {
};

GardenCollapse.Boot.prototype = {

    init: function () {

        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;

       if (this.game.device.desktop)
        {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(480, 270, 960, 540);
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
        }
        else
        {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(460, 250, 940, 520);//450, 240, 930, 510
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceOrientation(true, false);
            this.scale.setResizeCallback(this.gameResized, this);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
        }
        
    
        
        
    },

    preload: function () {

        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
     
	  // this.load.image('bg', 'assets/1x/sky.png');
	   //this.load.image('bg', 'assets/1x/sky1.png');
	    this.load.image('bg', 'assets/1x/MenuBg.png');
       this.load.image('preloaderBar', 'assets/preloader_bar.png');

    },

    create: function () {

    // setTimeout(function(){
		  
		    this.state.start('Preloader');
	// }.bind(this), 1000);

    },
		
    gameResized: function (width, height) {

        //  This could be handy if you need to do any extra processing if the game resizes.
        //  A resize could happen if for example swapping orientation on a device or resizing the browser window.
        //  Note that this callback is only really useful if you use a ScaleMode of RESIZE and place it inside your main game state.

    },

    enterIncorrectOrientation: function () {
this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        GardenCollapse.orientated = false;

        document.getElementById('orientation').style.display = 'block';

    },

    leaveIncorrectOrientation: function () {
this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        GardenCollapse.orientated = true;

        document.getElementById('orientation').style.display = 'none';

    }

};
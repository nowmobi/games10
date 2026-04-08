
GardenCollapse.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

GardenCollapse.Preloader.prototype = {

	preload: function () {
		
		this.bg = this.add.sprite(0, 0,'bg');
		this.quesTxt1 = this.add.text(0,0,"LOADING...",{ font: "Bold 20px Arial",fill:"#000000",  align: "right" });
		this.quesTxt1.x = (this.bg.x+this.bg.width/2)-(this.quesTxt1.width / 2);
		this.quesTxt1.y = this.bg.height/2-this.quesTxt1.height/2;
		this.preloadBar = this.add.sprite((this.quesTxt1.x-100), this.quesTxt1.y+90, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);

		/**/
		this.load.image('playBtn1', 'assets/1x/buttons/PlayBtn.png');
		//this.load.image('playBtn2', 'assets/1x/buttons/playBtn2.png');
		this.load.image('helpBtn1', 'assets/1x/buttons/HelpBtn.png');
		//this.load.image('helpBtn2', 'assets/1x/buttons/helpBtn2.png');
		this.load.image('soundOnBtn1', 'assets/1x/buttons/SoundonBtn.png');
		//this.load.image('soundOnBtn2', 'assets/1x/buttons/soundOnBtn2.png');
		this.load.image('soundOffBtn1', 'assets/1x/buttons/SoundoffBtn.png');
		//this.load.image('soundOffBtn2', 'assets/1x/buttons/soundOffBtn2.png');
		this.load.image('okBtn1', 'assets/1x/buttons/okBtn.png');
		//this.load.image('okBtn2', 'assets/1x/buttons/okBtn2.png');
		this.load.image('againBtn1', 'assets/1x/buttons/AgainBtn.png');
		//this.load.image('againBtn2', 'assets/1x/buttons/againBtn2.png');
		this.load.image('backBtn1', 'assets/1x/buttons/backButton.png');
		//this.load.image('backBtn2', 'assets/1x/buttons/backBtn2.png');
		this.load.image('menuBtn1', 'assets/1x/buttons/menuButton.png');
		//this.load.image('menuBtn2', 'assets/1x/buttons/menuBtn2.png');
		this.load.image('continueBtn1', 'assets/1x/buttons/continueButton.png');
		//this.load.image('continueBtn2', 'assets/1x/buttons/continueBtn2.png');
		//this.load.image('menupBtn1', 'assets/1x/buttons/menupBtn1.png');
		//this.load.image('menupBtn2', 'assets/1x/buttons/menupBtn2.png');
		this.load.image('help1', 'assets/1x/buttons/InsideHelpBtn.png');
		//this.load.image('help2', 'assets/1x/buttons/help2.png');
		this.load.image('pause1', 'assets/1x/buttons/InsidePauseBtn.png');
		//this.load.image('pause2', 'assets/1x/buttons/pause2.png');
		this.load.image('menu1', 'assets/1x/buttons/InsideMenuBtn.png');
		//this.load.image('menu2', 'assets/1x/buttons/menu2.png');
		this.load.image('soundOff1', 'assets/1x/buttons/InsideSoundoffBtn.png');
		//this.load.image('soundOff2', 'assets/1x/buttons/soundOff2.png');
		this.load.image('soundOn1', 'assets/1x/buttons/InsideSoundBtn.png');
		//this.load.image('soundOn2', 'assets/1x/buttons/soundOn2.png');
		this.load.image('resetBtn1', 'assets/1x/buttons/resetButton.png');
		
		this.load.image('pausedBox', 'assets/1x/buttons/gamePaused.png');
		
		this.load.image('scoreBox', 'assets/1x/buttons/scoreBox.png');
		this.load.image('levelBox', 'assets/1x/buttons/levelBox.png');
		this.load.image('timerBox', 'assets/1x/buttons/timerBox.png');
		
		this.load.image('retryBtn1', 'assets/1x/buttons/retryButton.png');
				
		
		//this.load.image('game', 'assets/1x/GameBg.png');
		this.load.image('game', 'assets/1x/MenuBg.png');
		this.load.image('sky', 'assets/1x/sky.png');
		this.load.image('menuBg', 'assets/1x/MenuBg.png');
		this.load.image('congrats', 'assets/1x/ConGratulation.png');
		this.load.image('overTitle', 'assets/1x/GameOver.png');
		this.load.image('levelupTitle', 'assets/1x/LevelUp.png');
		this.load.image('menuTitle', 'assets/1x/title.png');
		
		this.load.image('tile1', 'assets/1x/tiles0001.png');
		this.load.image('tile2', 'assets/1x/tiles0002.png');
		this.load.image('tile3', 'assets/1x/tiles0003.png');
		this.load.image('tile4', 'assets/1x/tiles0004.png');
		this.load.image('tile5', 'assets/1x/tiles0005.png');
		
		
		
		this.load.image('logo', 'assets/1x/logo.png');
		
		
		
		this.load.atlasJSONHash('tiles', 'assets/1x/tileImgs.png', 'assets/1x/tileImgs.json');
	
		
		this.load.bitmapFont('angleFont', 'assets/BitmapFont/font41.png', 'assets/BitmapFont/font41.fnt');
		this.load.bitmapFont('angleFont2', 'assets/BitmapFont/font42.png', 'assets/BitmapFont/font42.fnt');
		
		
		this.load.audio('music','assets/sounds/music.m4a','assets/sounds/music.ogg','assets/sounds/music.mp3');
		
		this.load.audio('clickSnd','assets/sounds/Click.mp3','assets/sounds/Click.ogg','assets/sounds/Click.m4a');
		this.load.audio('flowerSnd','assets/sounds/pop1.mp3','assets/sounds/pop1.ogg','assets/sounds/pop1.m4a');
		this.load.audio('levelupSnd','assets/sounds/levelup.mp3','assets/sounds/levelup.ogg','assets/sounds/levelup.m4a');
		this.load.audio('gameoverSnd','assets/sounds/loss.mp3','assets/sounds/loss.ogg','assets/sounds/loss.m4a');
		this.load.audio('bombSnd','assets/sounds/bomb.mp3','assets/sounds/bomb.ogg','assets/sounds/bobm.m4a');
		this.load.audio('fireSnd','assets/sounds/fire.mp3','assets/sounds/fire.ogg','assets/sounds/fire.m4a');
		this.load.audio('collideSnd','assets/sounds/pickup7.mp3','assets/sounds/pickup7.ogg','assets/sounds/pickup7.m4a');
		
		//this.load.atlas('playButton', 'assets/playagain.png', 'assets/button1.json');
		//this.load.atlas('embroidery', 'assets/embroidery_1x.png', 'assets/button1.json');

	},

	create: function () {
		
		GardenCollapse.music = this.game.add.audio('music');
		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		//this.preloadBar.cropEnabled = false;

	},

	update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.
		
		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.
		
		if (this.cache.isSoundDecoded('music') && this.ready == false)
		{
		//if(this.ready == false){
			//if (this.game.device.desktop){
				//GardenCollapse.music = this.game.add.audio('music');
				GardenCollapse.music.play("",0,1,true,true);
				GardenCollapse.soundReady=true;
				this.ready = true;
				//window.showAd('cpmstar',window,document,{},{},{},{});
///setTimeout(function(){
		  
		    this.state.start('MainMenu');
			//}.bind(this), 5000);
				//this.state.start('MainMenu');
			/*}else{
				this.quesTxt1.text = "Click to Start";
				this.bg.inputEnabled=true;
				this.bg.input.useHandCursor=true;
				this.bg.events.onInputDown.add(this.clickStart,this);
				GardenCollapse.music = this.game.add.audio('music');
				this.preloadBar.destroy();
				this.ready = true;
			}*/
		}

	},
	hasLooped: function () {
		
	},
	
	
	/*clickStart: function () {
		if(GardenCollapse.soundReady==false){
			GardenCollapse.music.play("",0,1,true,true);
			GardenCollapse.music.onLoop.add(this.hasLooped, this);
			GardenCollapse.soundReady=true;
			//window.showAd('cpmstar',window,document,{},{},{},{});
			//	 setTimeout(function(){
		  
		    this.state.start('MainMenu');
			//}.bind(this), 5000);
		}
	}*/

};

var soundYahoo = null;
var soundJump = null;
var soundEnabled = true;
var soundLSkey = 'DoxxaSoftSound01';

window.onload = function() {
//*** START Boot() ******************************************
    var Boot = function(){};
    Boot.prototype = {
    preload: function(){
		// scale up the game
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		// disable stage visibility change
        	game.stage.disableVisibilityChange = true;
		// load the preloading image
		game.load.image('logo', 'assets/sprites/logo.jpg');	
		
    },// --- END preload() ---------
	
    create: function(){	
		//add game states
		game.state.add("preload", Preload);
		game.state.add("gameTitle", GameTitle);
		game.state.add("help", Help);
		game.state.add("sound", Sound);					
		game.state.add("level01", Level01);
		game.state.add("level02", Level02);
		game.state.add("level03", Level03);
		game.state.add("level04", Level04);
		game.state.add("level05", Level05);
		game.state.add("level06", Level06);
		game.state.add("level07", Level07);
		game.state.add("level08", Level08);
		game.state.add("level09", Level09);
		game.state.add("level10", Level10);
		game.state.add("level11", Level11);
		game.state.add("level12", Level12);
		game.state.add("level13", Level13);
		game.state.add("level14", Level14);
		game.state.add("level15", Level15);
		game.state.add("levelSelect", LevelSelect);

		// get saved values from local storage
		soundEnabled = localStorage.getItem(soundLSkey) == null ? true : 
		JSON.parse(localStorage.getItem(soundLSkey));
		//console.log(soundEnabled);
		if(localStorage.getItem(starsArrayLSkey) == null){
			for(var i = 0; i < 20; i ++){starsArray[i] = 4;}
			starsArray[0] = 0;
		} else {
			starsArray = JSON.parse(localStorage.getItem(starsArrayLSkey));
		}
		//console.log(starsArray);
		
		// start the preloading state
		game.state.start("preload");
		
    },// --- END create() --------------
	
   }// *** END Boot() ****************

	//*** START Preload() ******************************************
	var Preload = function(){};
	Preload.prototype = {
		
	preload: function(){
	// --- start preloading animation -----------------------------------
	logoImg = game.add.image(game.world.centerX, game.world.centerY, 'logo');
	logoImg.anchor.set(0.5);
	logoTween = game.add.tween(logoImg).to( { angle: 360 }, 5000, null, true, 500, Infinity);
	logoTween = game.add.tween(logoImg.scale).to( {x: 0.2, y: 0.2 }, 1500, null, true);
	// --- end preloading animation ------------------------------------
	// sounds
	game.load.audio('yahooSound', ['assets/yahoo.mp3', 'assets/yahoo.ogg']);// yahoo
	game.load.audio('jumpSound', ['assets/jump.mp3', 'assets/jump.ogg']);// jump
	// images
 	game.load.image('titleBG', 'assets/sprites/titleBG.jpg');		
 	game.load.image('textBG', 'assets/sprites/textBG.jpg');
	game.load.image('goalBG', 'assets/sprites/goalBG.jpg');
	game.load.image('next', 'assets/sprites/next.jpg');
	game.load.spritesheet('quitBtn', 'assets/sprites/quitBTN.png', 180, 70);
	game.load.spritesheet('hintBtn', 'assets/sprites/hintBTN.png', 180, 70);
	game.load.spritesheet('retryBtn', 'assets/sprites/retryBTN.png', 180, 70);
	game.load.spritesheet('backBtn', 'assets/sprites/backBTN.png', 220, 70);	
	game.load.spritesheet('playBtn', 'assets/sprites/playBTN.png', 240, 75);	
	game.load.spritesheet('helpBtn', 'assets/sprites/helpBTN.png', 240, 75);	
	game.load.spritesheet('soundBtn', 'assets/sprites/soundBTN.png', 240, 75);
	game.load.spritesheet('soundOnBtn', 'assets/sprites/soundOnBTN.png', 120, 120);	
	game.load.spritesheet('soundOffBtn', 'assets/sprites/soundOffBTN.png', 120, 120);		
	game.load.spritesheet("levels", 'assets/sprites/levels.png', 140, 140);
	game.load.spritesheet('arrowHint', 'assets/sprites/arrowHint.png', 80, 80);
	game.load.spritesheet('arrowD', 'assets/sprites/arrowD.png', 80, 80);
	game.load.spritesheet('arrowU', 'assets/sprites/arrowU.png', 80, 80);
	game.load.spritesheet('arrowL', 'assets/sprites/arrowL.png', 80, 80);
	game.load.spritesheet('arrowR', 'assets/sprites/arrowR.png', 80, 80);
	game.load.spritesheet('floorTiles', 'assets/sprites/s_objects.png', 80, 80);
	game.load.spritesheet('bob', 'assets/sprites/s_bob.png', 80, 80);
	game.load.spritesheet('key', 'assets/sprites/s_key.png', 80, 80);
	game.load.spritesheet('paint', 'assets/sprites/s_paint.png', 80, 80);
	game.load.spritesheet('help', 'assets/sprites/s_help.png', 120, 120);	
		
	},// --- END preload() -----
	
	create: function(){
	// destroy preloading resources
	logoTween.stop();
        logoImg.destroy();
	// start the game title state
	game.state.start("gameTitle");
	},// --- END create() -------------
	
	}// *** END Preload() *************************************

	//*** START GameTitle() *********************
	var GameTitle = function(){};
	GameTitle.prototype = {
		
	preload: function(){
		// nothing
	},// --- END preload() ---------
	
	create: function(){
			
		// Background
		var titleBGd = game.add.image(0,0,'titleBG');
		titleBGd.anchor.set(0,0);
		// start game button
		var playBtn = game.add.button(Math.floor((game.width -240)/2), 400, 'playBtn', playClick, this, 2, 1, 0);
		// help button
		var helpBtn = game.add.button(Math.floor((game.width -240)/2), 550, 'helpBtn', helpClick, this, 2, 1, 0);
		// sound button
		var soundBtn = game.add.button(Math.floor((game.width -240)/2), 700, 'soundBtn', soundClick, this, 2, 1, 0);
		
		function playClick(){
if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {sdk.showBanner()}
			game.state.start("levelSelect");
		}// --- END playClick() --------
		
		function helpClick(){
			game.state.start("help");
		}// --- END helpClick() --------
		
		function soundClick(){
			game.state.start("sound");
		}// --- END soundClick() --------
						
	// adding yahoo sound
	if(soundEnabled){
		soundYahoo = game.sound.add ('yahooSound', 1);
		soundJump = game.sound.add ('jumpSound', 1);
	}
	
	
	},// --- END create() -------------

	}// *** END GameTitle() ********************


	//*** START Help() *********************
	var Help = function(){};
	Help.prototype = {
		
	preload: function(){
		// nothing
	},// --- END preload() ---------
	
	create: function(){
			
		// set background
	        game.stage.setBackgroundColor(0x006766);
		
		// draw help screen
		var gHelp =game.add.graphics(0,0);
		gHelp.lineStyle(5, 0x153433, 1);
		gHelp.moveTo(20,20);	
		gHelp.lineTo(game.width - 20, 20);
		gHelp.lineTo(game.width - 20, 1140);
		gHelp.lineTo(20, 1140);	gHelp.lineTo(20,20);
		var hT1 = 'The goal is to help \"Bob The Painter\" collect all the colored keys. ' +
			'The number of required keys is indicated at the top board. ' +
			'When Bob finds a key, he can collected it, but only if Bob and the key have the same color.\n' +
			'Sometimes Bob must mix different colors to match the color of the keys.\n' +
			'The brown paint does not mix with the other colors.\n' +
			'The white paint resets Bob\'s color to white.\n' +
			'Watch out that Bob does not fall of the building or into a floor hole.\n' +
			'In addition to Bob there are few other objects in the game:-\n';
		var helpText = game.add.text(30, 30, hT1,
			{font: "24px Arial", fill: '#ddffff', align: "left", wordWrap: true, wordWrapWidth: '660',});
    		helpText.anchor.set(0,0);
			
		var s1 = game.add.sprite(30, helpText.height + 30, "help", 0);
		var s1T = 'Bob The Painter - must collect all the colored keys to progress to the next level.';
		var s1Text = game.add.text(50 + s1.width, s1.y + Math.floor(s1.height/2), s1T,
			{font: "24px Arial", fill: '#ddffff', align: "left", wordWrap: true, wordWrapWidth: '520',});
    		s1Text.anchor.set(0,0.5);
			
		var s2 = game.add.sprite(30, s1.y + s1.height + 20, "help", 1);	
		var s2T = 'Ladder - cannot move, but it stops any object from moving.';
		var s2Text = game.add.text(50 + s2.width, s2.y + Math.floor(s2.height/2), s2T,
			{font: "24px Arial", fill: '#ddffff', align: "left", wordWrap: true, wordWrapWidth: '520',});
    		s2Text.anchor.set(0,0.5);
			
		var s3 = game.add.sprite(30, s2.y + s2.height + 20 ,"help", 2);
		var s3T = 'Paint Roller - can fall off the building or into a floor hole.';
		var s3Text = game.add.text(50 + s3.width, s3.y + Math.floor(s3.height/2), s3T,
			{font: "24px Arial", fill: '#ddffff', align: "left", wordWrap: true, wordWrapWidth: '520',});
    		s3Text.anchor.set(0,0.5);
			
		var s4 = game.add.sprite(30, s3.y + s3.height + 20, "help", 3);	
		var s4T = 'Paint Can - available in Red, Yellow, Blue and White. ' +
			'When collected it will change Bob\'\s color.';
		var s4Text = game.add.text(50 + s4.width, s4.y + Math.floor(s4.height/2), s4T,
			{font: "24px Arial", fill: '#ddffff', align: "left", wordWrap: true, wordWrapWidth: '520',});
    		s4Text.anchor.set(0,0.5);
			
		var s5 = game.add.sprite(30, s4.y + s4.height + 20, "help", 4);	
		var s5T = 'Floor Hole - Every object disapears in the hole.';
		var s5Text = game.add.text(50 + s5.width, s5.y + Math.floor(s5.height/2), s5T,
			{font: "24px Arial", fill: '#ddffff', align: "left", wordWrap: true, wordWrapWidth: '520',});
    		s5Text.anchor.set(0,0.5);					

		// back button
		var backBtn = game.add.button(Math.floor((game.width -220)/2), 1175, 'backBtn', backClick, this, 2, 1, 0);

		function backClick(){
			game.state.start('gameTitle');
		}// --- END helpClick() --------
	
	},// --- END create() -------------

	}// *** END Help() ********************

	//*** START Sound() *********************
	var Sound = function(){};
	Sound.prototype = {
		
	preload: function(){
		// nothing
	},// --- END preload() ---------
	
	create: function(){
			
		// Background
		game.stage.setBackgroundColor(0x006766);

		// sound control
		var soundOnBtn = game.add.button(Math.floor(game.width/2 -200), 500, 'soundOnBtn', soundOnClick, this, 2, 1, 0);		
		var soundOffBtn = game.add.button(Math.floor(game.width/2 + 80), 500, 'soundOffBtn', soundOffClick, this, 2, 1, 0);		
		var soundStatus = null;
		if (soundEnabled) {
			soundStatus = 'Sound is ENABLED';
			soundOnBtn.inputEnabled = false;
			soundOnBtn.setFrames(0,0,0);// gray out button			
		} else {
			soundStatus = 'Sound is DISABLED';
			soundOffBtn.inputEnabled = false;
			soundOffBtn.setFrames(0,0,0);// gray out button
		}
		var style = {font: "48px Arial", fill: "#eeac46"};
		var soundText = game.add.text(Math.floor(game.width/2), 300, soundStatus, style);
		soundText.anchor.set(0.5);
		soundText.setShadow(3, 3, 'rgba(0,0,0,1)', 0);
		
		// sound ON button click action
		function soundOnClick(){
			soundEnabled = true;
			if(soundEnabled){
				soundOnBtn.inputEnabled = false; soundOnBtn.setFrames(0,0,0);// button disable
				soundOffBtn.inputEnabled = true; soundOffBtn.setFrames(2,1,0);// button enable
				soundYahoo = game.sound.add ('yahooSound', 1);
				soundJump = game.sound.add ('jumpSound', 1);
			}
			soundText.text = 'Sound is ENABLED';
			localStorage.setItem(soundLSkey, JSON.stringify(soundEnabled));
			
		}// --- END soundOnClick() --------
		
		// sound OFF button click action
		function soundOffClick(){
			soundEnabled = false;
			if(!soundEnabled){
				soundOffBtn.inputEnabled = false; soundOffBtn.setFrames(0,0,0);// button disable
				soundOnBtn.inputEnabled = true; soundOnBtn.setFrames(2,1,0);// button enable
				soundYahoo.destroy();
				soundJump.destroy();
			}
			soundText.text = 'Sound is DISABLED';
			localStorage.setItem(soundLSkey, JSON.stringify(soundEnabled));
			
		}// --- END soundOffClick() --------
						
		// back button
		var backBtn = game.add.button(Math.floor((game.width -220)/2), 900, 'backBtn', backClick, this, 2, 1, 0);
		function backClick(){
			game.state.start('gameTitle');
		}// --- END backClick() --------
	
	},// --- END create() -------------

	}// *** END Sound() *****************************

	
	var game = new Phaser.Game(720, 1280, Phaser.AUTO);
	game.state.add("boot", Boot);
	game.state.start("boot");

}// --- END windowOnload() ----------
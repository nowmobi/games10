
BasicGame.Game = function (game) {

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
	var scalevals;
	this.lifeArr;
	this.gameover;
	var key1;
	var key11;
	var Levels;
	//	You can use any of these from any function within this State.
	//	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

BasicGame.Game.prototype = {

	create: function () {

		this.group = this.game.add.group();
		this.group1 = this.game.add.group();
		this.group2 = this.game.add.group();
		//Sthis.resize();
		this.correct = false;
		this.mousedon = false;
		scalevals = .05
		this.life = 3;
		this.lose = true;
		this.shoots = false;
		this.strings = ""
		this.LevelArr = [Level1s, Level2, Level3, Level4, Level5, Level6, Level7, Level8, Level9, Level10, Level11, Level12, Level13, Level14, Level16, Level15, Level17, Level18, Level19, Level20]
		this.playGame = true;
		this.gameover = 0
		this.scores = 0;
		this.arrob = new Array();
		this.lifeArr = new Array()
		//Jio.Level=20
		BasicGame.timer = 60
		BasicGame.paused = true;

		this.bg = this.game.add.sprite(0, 0, 'menubg');
		this.group1.add(this.bg);
		this.scores = 0;
		this.hud = this.game.add.sprite(160, 500, 'hud');
		this.hud.anchor.set(.5);
		this.group1.add(this.hud);
		for (var i = 3; i > 0; i--) {
			this["lifebase" + i] = this.game.add.sprite(-80 + (i * 35), 0, 'lifebase');
			this["lifebase" + i].anchor.set(.5);
			this["lifebase" + i].scale.set(.8);
			this.hud.addChild(this["lifebase" + i]);
			this.lifeArr.push(this["lifebase" + i])
		}
		var style = { font: "14px Courier New", fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 100, align: "center" };
		this.levelbg = this.game.add.text(-150, -10, "", style);
		this.hud.addChild(this.levelbg);
		this.levelbg.text = "Level : ";
		this.leveltext = this.game.add.text(70, 10, "", style);
		this.levelbg.addChild(this.leveltext);
		this.leveltext.anchor.set(0.5);
		this.leveltext.text = "" + BasicGame.Level;
		this.scorebg = this.game.add.text(55, -20, "", style);
		this.hud.addChild(this.scorebg);
		this.scorebg.text = "Score : ";
		this.scoretext = this.game.add.text(72, 10, "", style);
		this.scorebg.addChild(this.scoretext);
		this.scoretext.anchor.set(0.5);
		this.scoretext.text = "" + this.scores;
		this.timerbg = this.game.add.text(55, 0, "", style);
		this.hud.addChild(this.timerbg);
		this.timerbg.text = "Timer : ";
		this.timerbgtext = this.game.add.text(72, 11, "", style);
		this.timerbg.addChild(this.timerbgtext);
		this.timerbgtext.anchor.set(0.5);
		this.timerbgtext.text = "" + BasicGame.timer;


		//	Jio.Level=15
		Levels = new this.LevelArr[BasicGame.Level - 1](this, this.group1);

		//Levels.y=-100
		this.down = false;
		this.Addkeys();
		this.box1 = this.add.graphics(1, 1);
		this.box1.beginFill(0x000000, .6);
		this.box1.drawRect(2, -200, 1920, 1080);
		this.group1.add(this.box1)
		this.box1.events.onInputDown.add(this.clickToStart, this);
		this.box1.inputEnabled = true;

		var style1 = { font: "20px Arial", fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 500, align: "center" };
		this.clicktostart = this.game.add.text(450, 330, "0", style1);
		this.clicktostart.anchor.set(0.5);
		this.clicktostart.text = "Click To Start\n Press 'Enter' Key to shoot"
		this.group1.add(this.clicktostart)

		spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		spaceKey.onDown.add(this.clickToStart, this);
		this.game.input.onTap.add(this.clickdocument, this);
	},
	clickToStart: function () {

		spaceKey.onDown.remove(this.clickToStart, this);
		BasicGame.paused = false;
		this.box1.destroy();
		this.clicktostart.destroy();
		this.game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);

		//this.game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
	},
	clickdocument: function () {
		console.log("focus");
		window.focus();
	},

	Addkeys: function () {
		key1 = this.game.input.keyboard.addKey(13)
		key11 = this.game.input.keyboard.addKey(53)

		key1.onDown.add(this.MoveUpToShootGame, this);
		key11.onDown.add(this.MoveUpToShootGame, this);

	},
	MoveUpToShootGame: function () {
		if (BasicGame.paused == false) {
			this.up = false;
			this.down = true;
			if (BasicGame.gameon == false) {
				if (this.playGame && this.shoots == false && this.mousedon == false) {
					this.game.input.keyboard.removeKeyCapture(13);
					this.game.input.keyboard.removeKeyCapture(53);

					key1.onDown.remove(this.MoveUpToShootGame, this);
					key11.onDown.remove(this.MoveUpToShootGame, this);

					console.log("dddd");
					Levels.MoveUpToShoot();
					this.strings = "down"
				}
			}
		}


	},
	updateCounter: function () {
		if (BasicGame.paused == false) {
			if (this.playGame) {
				if (BasicGame.timer <= 0) {
					this.GameOverPage();
				} else {
					BasicGame.timer--;
				}

			}
			this.timerbgtext.text = "" + BasicGame.timer;
		}
	},
	HitOn: function (sprite, arrofOb) {
		if (BasicGame.paused == false) {
			console.log("rrrrrr")

			if (this.lose == false) {
				console.log(arrofOb.length, "iii", sprite.name, "ggg", arrofOb[0].name)
				if (arrofOb.length != 0) {


					if (sprite.name == arrofOb[0].name) {

						if (arrofOb[0].hit == false) {
							this.lose = true;
							this.correct = true;
							arrofOb[0].hit = true;

							this.strings = "hit"
							this.scores += BasicGame.timer
							arrofOb[0].twee = null;
							arrofOb[0].body.static = true;
							arrofOb[0].alpha = 0;
							var playerTween1 = this.game.add.tween(sprite).to({
								alpha: 1
							}, 480, Phaser.Easing.Linear.None, true);
							if (BasicGame.soundplay == 0) {
								this.correctsnd = null;
								this.correctsnd = this.game.add.audio('correct', 1, true);
								this.correctsnd.play('', 0, 1, false);
							}
							this.arrob = new Array();
							for (var i = 0; i < arrofOb.length; i++) {
								this.arrob.push(arrofOb[i])
							}

							//arrofOb.splice(0,1);
							if (this.up == true) {
								console.log("111");
								this.timesetforcorrect = this.game.time.events.add(500, this.lastscetionOfCorrect, this);
							}
							console.log("hitsss");


						}
					} else {
						if (this.life != 0 && arrofOb[0].hit == false) {
							this.lose = true;
							arrofOb[0].hit = true;

							if (arrofOb[0].twee != null) {
								arrofOb[0].twee.stop();
							}

							arrofOb[0].body.static = true;
							this.life--;
							this.lifeArr[this.life].destroy();
							if (BasicGame.soundplay == 0) {
								this.wrongsnd = null;
								this.wrongsnd = this.game.add.audio('hit2', 1, true);
								this.wrongsnd.play('', 0, 1, false);
							}
							var playerTween1 = this.game.add.tween(arrofOb[0]).to({
								alpha: 0
							}, 480, Phaser.Easing.Linear.None, true);
							var explode = this.game.add.sprite(-10, -10, 'effect');
							arrofOb[0].addChild(explode);
							explode.anchor.setTo(.5);
							explode.scale.set(2);
							var explodeanim = explode.animations.add('effect');
							explode.animations.play('effect', 20, false);
							explodeanim.onComplete.add(function () {
								explode.destroy();

								arrofOb[0].body.x = arrofOb[0].xpos;
								arrofOb[0].body.y = arrofOb[0].ypos;
								var playerTween2 = this.game.add.tween(arrofOb[0]).to({
									alpha: 1
								}, 300, Phaser.Easing.Linear.None, true);
								playerTween2.onComplete.add(function () {

									arrofOb[0].hit = false;

									this.shoots = false;

								}.bind(this));

							}.bind(this));
						}

						if (this.life == 0) {
							this.shoots = false;
							Levels.gotoClear()
							Levels.destroy()

							this.lose = true;
							this.GameOverPage();
						}

						this.lose = true;


					}
				}
			}
		}

	},
	lastscetionOfCorrect: function () {
		if (this.playGame) {
			if (this.up) {
				if (this.timesetforcorrect != null) {
					this.game.time.events.remove(this.timesetforcorrect);
				}
				console.log("222");
				this.arrob.splice(0, 1)

				if (this.arrob.length != 0) {

					Levels.changesArr();

					this.shoots = false;

					this.correct = false;


					this.arrob[0].alpha = 1;

				} else {
					if (BasicGame.Level == 20) {
						this.GameWonPage();
					} else {
						this.LevelUpPage();
					}
				}


				this.Addkeys();
				this.up = false
			}
		}
	},
	update: function () {

		if (BasicGame.paused == false) {

			this.scoretext.text = "" + this.scores;
			//console.log(this.playGame);
			if (this.playGame) {
				this.game.input.keyboard.onUpCallback = function (e) {
					console.log("up")
					//this.strings="up"
					this.up = true;
					this.down = false;
					BasicGame.gameon = false;
					if (this.correct == true) {

						this.timesetforcorrect = this.game.time.events.add(100, this.lastscetionOfCorrect, this);
					} else {
						this.Addkeys();
					}

				}.bind(this);
				this.game.input.keyboard.onDownCallback = function (e) {

					if (e.key == "0") {
						if (this.playGame && this.down == false) {
							console.log("ppp");
							this.playGame = false;
							this.box1 = this.add.graphics(1, 1);
							this.box1.beginFill(0x000000, .6);
							this.box1.drawRect(0, 0, 320, 640);
							var style = { font: "bold 13px Arial", fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 100, align: "center", fontSize: "36px" };
							this.pausetext = this.game.add.text(220, 200, "", style);
							this.pausetext.anchor.set(1);
							this.pausetext.text = "Game Paused";
							var style1 = { font: "bold 13px Arial", fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 1000, align: "center" };
							this.pausetext1 = this.game.add.text(210, 235, "", style1);
							this.pausetext1.anchor.set(1);
							this.pausetext1.text = "Press 0 to Resume";

							this.game.time.events.pause();



						}
						else {
							this.playGame = true;
							/* for(var i=0;i<this.itemArr.length;i++){
								if(	this.itemArr[i]!=null){
								this.itemArr[i].body.velocity.setTo(this.itemArr[i].mainvelocityx,this.itemArr[i].mainvelocityy);
								
								}
							
							} */
							cameraspeed = 1;
							this.game.time.events.resume();



							if (this.pausetext != null) {


								this.pausetext.destroy();
								/* 	this.menutext.destroy();f
									this.playtext.destroy(); */
								this.box1.destroy();
								this.pausetext1.destroy();

							}

						}


					}

					e.preventDefault();
					e.stopPropagation();
				}.bind(this);
			}
		}
	},
	LevelUpPage: function () {
		console.log("Levelup");
		BasicGame.score += this.scores;
		BasicGame.tempScore = BasicGame.score
		this.clearAll();
		BasicGame.scoreval = BasicGame.tempScore;
		this.state.start('Levelup')
	},
	GameOverPage: function () {
		BasicGame.score += this.scores;
		BasicGame.tempScore = BasicGame.score
		this.clearAll();
		BasicGame.scoreval = BasicGame.tempScore;
		this.state.start('Gameover');
	},
	GameWonPage: function () {

		BasicGame.score += this.scores;
		BasicGame.tempScore = BasicGame.score
		this.clearAll();
		BasicGame.scoreval = BasicGame.tempScore;
		this.state.start('Gamewon');

	},
	clearAll: function () {
		//event.stopPropagation()
		this.playGame = false;
		Levels.destroy();
	},
	/////////////////////////////////////////////////////
	render: function () {

		/*for(var i=0;i<grassArr.length;i++){
			if(grassArr[i]!=null){
					this.game.debug.body(grassArr[i].hitboxname);
			}
		}*/

		//this.game.debug.body(this.grass.hitboxname);
		//	this.game.debug.body(grassArr[i].hitboxname);*/
		//this.game.debug.body(this.hitbox1);
		//this.game.debug.body(this.hitbox2);
		//if(this.spray!=null){
		//this.game.debug.body(this.hitbox22);
		//	}
	},
};


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
	var baseArr;
	var AllbaseArr;
	var basetimers;
	var jumptimer;
	var scores;
	var hitOnkey;
	var basetodowns;
	var tileGrid=new Array();
	var matches=new Array();
	var matchesRepeat=new Array();
    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

BasicGame.Game.prototype = {

	create: function () {
		this.tilesArray=new Array();
		this.tileBase=new Array();
		this.tileInGrid=new Array();
		this.randomtile=new Array();
		this.randInitTile =new Array();
		this.maxRow=6
		this.maxCol=13
		this.pausetimer=null;
		this.tileheight=59
		this.starttileRand=1;
		this.endtileRand=4;
		BasicGame.paused=false;
		this.randAddmonsterInTile=3000
		this.callAddMonster=false;
		this.targetCount=0;
		this.takenTarget=0;
		this.clicked=false;
		this["box1"]= this.add.graphics(1,1);
		this["box1"].beginFill(0x4AE2ED,1);
		this["box1"].drawRect(0,0,540,960);
		this.group = this.game.add.group();
		
		this.group1 = this.game.add.group();
		this.group2 = this.game.add.group();

		this.group11 = this.game.add.group();
		this.group12 = this.game.add.group();
		this.group.create(0,0,"bg");
		//bg.anchor.set(.5);
		//this.group1.add(bg);
		//this.tileGrid = new Array[this.maxRow][this.maxCol];
		this.tileBase = new Array(this.maxRow);
		for (var i=0; i < this.maxCol; i +=1) {
			this.tileBase[i]=new Array(this.maxRow)
		}
		for(var j=0;j<this.maxCol;j++){
			for(var i=0;i<this.maxRow;i++){
				this.tileBase[i][j]=null;
			}
		}


		tileGrid = new Array(this.maxRow);
		for (var i=0; i < this.maxCol; i +=1) {
			tileGrid[i]=new Array(this.maxRow)
		}
		for(var j=0;j<this.maxCol;j++){
			for(var i=0;i<this.maxRow;i++){
				tileGrid[i][j]=null;
			}
		}
			

	
	
		

	this.box1 = this.add.graphics(1, 1);
	this.box1.beginFill(0x000000, .6);
	this.box1.drawRect(-20, -100, 1920, 1080);
	this.group1.add(this.box1)
	this.box1.events.onInputDown.add(this.clickToStart, this);
	this.box1.inputEnabled = true;

	var style1 = { font: "50px Arial", fill: "#FFFFFF", wordWrap: true, wordWrapWidth:500, align: "center" };
	this.clicktostart = this.game.add.text(265,500, "0", style1);
	this.clicktostart.anchor.set(0.5);
	this.clicktostart.text="Click To Start"
	this.group1.add(this.clicktostart)
	BasicGame.paused=true;
	spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	spaceKey.onDown.add(this.clickToStart, this);
	this.game.input.onTap.add(this.clickdocument, this);
},

clickToStart:function(){

spaceKey.onDown.remove(this.clickToStart, this);
BasicGame.paused=false;
this.box1.destroy();
this.clicktostart.destroy();
this.playGame=true;
this.GameAdded();

},
clickdocument:function(){

window.focus();
},
GameAdded:function(){

this.leftchar=this.game.add.sprite(52,490,"chars_left");
this.leftchar.anchor.set(.5);
this.group1.add(this.leftchar);
this.rightchar=this.game.add.sprite(500,700,"chars_right");
this.rightchar.anchor.set(.5);
this.group1.add(this.rightchar);
this.bg=this.game.add.sprite(275,482,"frame");
this.bg.anchor.set(.5);
this.group1.add(this.bg);
BasicGame.timer=60
this.scores=0;
	this.AddUi();

	this.AddInitialTiles();
	this.AddInitialMonster();
	this.randommonster();

},
AddUi:function(){
	var style = { font: " bold 20px Impact ", fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 300, align: "center" };
	
	this.leveltextbg = this.game.add.text(-140,-440, "", style);
	this.leveltextbg.anchor.set(0.5);
	this.leveltextbg.text="Level";
	this.bg.addChild(this.leveltextbg);
	this.leveltext = this.game.add.text(-140,-410, "", style);
	this.leveltext.anchor.set(0.5);
	this.leveltext.text=""+BasicGame.Level;

	this.bg.addChild(this.leveltext);




	this.scoretextbg = this.game.add.text(110,-440, "", style);
	this.scoretextbg.anchor.set(0.5);
	this.scoretextbg.text="Score";
	this.bg.addChild(this.scoretextbg);
	this.scoretext = this.game.add.text(110,-410, "", style);
	this.scoretext.anchor.set(0.5);
	this.scoretext.text=""+this.scores;
	this.bg.addChild(this.scoretext);

	this.pause=this.game.add.sprite(230,-440,"btn_pause")
	this.pause.anchor.set(.5);
	this.pause.scale.set(.5);
	this.bg.addChild(this.pause);
	this.pause.inputEnabled=true
	this.pause.input.useHandCursor=true;
	this.pause.events.onInputDown.add(this.pausePressed,this);

	this.backbtn=this.game.add.sprite(-230,-440,"btn_back")
	this.backbtn.anchor.set(.5);
	this.backbtn.scale.set(.5);
	this.bg.addChild(this.backbtn);
	this.backbtn.inputEnabled=true
	this.backbtn.input.useHandCursor=true;
	this.backbtn.events.onInputDown.add(this.backPressed,this);
	switch(BasicGame.Level){
		case 1:
			this.starttileRand=1;
			this.endtileRand=2;
			BasicGame.timer=60;
			this.targetCount=100;
			this.takenTarget=0;
			this.randAddmonsterInTile=2000;

		break;
		case 2:
			this.starttileRand=1;
			this.endtileRand=3;
			BasicGame.timer=60;
			this.targetCount=100;
			this.takenTarget=0;
			this.randAddmonsterInTile=2000;
		break;
		case 3:
			this.starttileRand=1;
			this.endtileRand=3;
			this.targetCount=100;
			this.takenTarget=0;
			BasicGame.timer=60;
			this.randAddmonsterInTile=3000;
		break;
		case 4:
			this.starttileRand=1;
			this.endtileRand=3;
			BasicGame.timer=60;
			this.targetCount=100;
			this.takenTarget=0;

			this.randAddmonsterInTile=3000;
		break;
		case 5:
			this.starttileRand=1;
			this.endtileRand=3;
			this.targetCount=100;
			this.takenTarget=0;
			BasicGame.timer=60;
			this.randAddmonsterInTile=3000;
		break;
		case 6:
			this.starttileRand=1;
			this.endtileRand=4;
			BasicGame.timer=50;
			this.targetCount=150;
			this.takenTarget=0;
			this.randAddmonsterInTile=3000;
		break;
		case 7:
			this.starttileRand=1;
			this.endtileRand=4;
			BasicGame.timer=50;
			this.targetCount=100;
			this.takenTarget=0;
			this.randAddmonsterInTile=3000;
		break;
		case 8:
			this.starttileRand=1;
			this.endtileRand=4;
			BasicGame.timer=50;
			this.targetCount=100;
			this.takenTarget=0;
			this.randAddmonsterInTile=3000;
		break;
		case 9:
			this.starttileRand=1;
			this.endtileRand=4;
			BasicGame.timer=40;
			this.targetCount=100;
			this.takenTarget=0;
			this.randAddmonsterInTile=2700;
		break;
		case 10:
			this.starttileRand=1;
			this.endtileRand=5;
			BasicGame.timer=40;
			this.targetCount=80;
			this.takenTarget=0;
			this.randAddmonsterInTile=2700;
		break;
		case 11:
			this.starttileRand=1;
			this.endtileRand=5;
			BasicGame.timer=40;
			this.targetCount=80;
			this.takenTarget=0;
			this.randAddmonsterInTile=2700;
		break;
		case 12:
			this.starttileRand=1;
			this.endtileRand=5;
			this.targetCount=80;
			this.takenTarget=0;
			BasicGame.timer=40;
			this.randAddmonsterInTile=2700;
		break;
		case 13:
			this.starttileRand=1;
			this.endtileRand=6;
			this.targetCount=80;
			this.takenTarget=0;
			BasicGame.timer=40;
			this.randAddmonsterInTile=2500;
		break;
		case 14:
		this.starttileRand=1;
		this.endtileRand=6;
		this.targetCount=80;
			this.takenTarget=0;
		BasicGame.timer=40;
		this.randAddmonsterInTile=2500;
	break;
	case 15:
		this.starttileRand=1;
		this.endtileRand=6;
		this.targetCount=60;
			this.takenTarget=0;
		BasicGame.timer=40;
		this.randAddmonsterInTile=2500;
	break;
	case 16:
		this.starttileRand=1;
		this.endtileRand=7;
		this.targetCount=60;
			this.takenTarget=0;
		BasicGame.timer=40;
		this.randAddmonsterInTile=2500;
	break;
	case 16:
		this.starttileRand=1;
		this.endtileRand=7;
		this.targetCount=60;
			this.takenTarget=0;
		BasicGame.timer=40;
		this.randAddmonsterInTile=2500;
	break;
	case 18:
		this.starttileRand=1;
		this.endtileRand=7;
		this.targetCount=60;
			this.takenTarget=0;
		BasicGame.timer=40;
		this.randAddmonsterInTile=2500;
	break;
		default:
			this.starttileRand=1;
			this.endtileRand=8;
			this.targetCount=50;
			this.takenTarget=0;
			BasicGame.timer=30;
			this.randAddmonsterInTile=2000;
	break;
	}
	this.targettextbg = this.game.add.text(-10,-440, "", style);
	this.targettextbg.anchor.set(0.5);
	this.targettextbg.text="Target";
	this.bg.addChild(this.targettextbg);
	this.targettext = this.game.add.text(-10,-410, "", style);
	this.targettext.anchor.set(0.5);
	this.targettext.text=this.takenTarget+"/"+this.targetCount;

	this.bg.addChild(this.targettext);
	//this.mainupdates=this.game.time.events.loop(1000, this.updateCounter, this);
},
backPressed:function(){

	this.state.start('MainMenu');
},
pausePressed:function(){
	if(BasicGame.paused==false){
		BasicGame.paused=true;
		this.pausetimer=this.game.time.events;
		this.pausetimer.pause();
		this["pausebox2"]= this.add.graphics(1,1);
		this["pausebox2"].beginFill(0x000000,.6);
		this["pausebox2"].drawRect(0,0,540, 960);
		this.group2.add(this["pausebox2"]);
		this.gamepause1 = this.game.add.sprite(265, 450,'game_paused');
		this.gamepause1.anchor.set(.5);
		
		this.group2.add(this.gamepause1);
		this.resume = this.game.add.sprite(260, 600,'btn_continue');
		this.resume.anchor.set(.5);
		this.resume.scale.set(.6);
		this.group12.add(this.resume);
		this.resume.inputEnabled=true
		this.resume.input.useHandCursor=true;
		this.resume.events.onInputDown.add(this.resumeGame,this);
	}
		
},
resumeGame:function(){

	if(BasicGame.paused==true){
		BasicGame.paused=false;
		this["pausebox2"].destroy();
		this.gamepause1.destroy();
		this.resume.destroy();
		this.pausetimer.resume();
	}

},
/*updateCounter:function(){
	if(BasicGame.paused==false)
	{
		BasicGame.timer-=1;
		if(BasicGame.timer==0){
			BasicGame.score+=this.scores;
		//	if(BasicGame.Level==10){
			//	this.state.start('Gamewon');
		//	}else{
			this.state.start('Levelup');
		//	}
		}


	}
},*/
AddInitialTiles:function(){
	//Loop through each position in a specific column, starting from the top
	for(var j = 0; j < this.maxCol; j++){
		for(var i = 0; i <this.maxRow; i++){
		
		//Add the tile to the game at this grid position
		var tile = this.addTileInit(i, j);
	 	//Keep a track of the tiles position in our tileGrid
		 this.tileBase[i][j] = tile;

		}
	}
	this.box_frame=this.game.add.sprite(275,880,"box_frame");
		this.box_frame.anchor.set(.5);
		this.group2.addChild(this.box_frame);
	for(var i=0;i<this.maxRow;i++){
		
		this.tiles=this.game.add.sprite(-148+(i*59),415,"box");
		this.tiles.anchor.set(.5);
		this.tiles.scale.set(.9);
		this.bg.addChild(this.tiles);
		this.randInitTile.push(this.tiles);
	}
},
addTileInit:function(i,j){

	var tiles=this.game.add.sprite(-148+(i*59),345-(j*59),"box");
	tiles.anchor.set(.5);
	tiles.scale.set(.9);
	this.bg.addChild(tiles);
	this.tilesArray.push(tiles);
	return tiles;

},
AddInitialMonster:function(){
	//Loop through each position in a specific column, starting from the top
	
	for(var j=0;j<3;j++){
				for(var i=0;i<this.maxRow;i++){
		//Add the tile to the game at this grid position
		var tile = this.AddMoster(i, j);
	 	//Keep a track of the tiles position in our tileGrid
		 tileGrid[i][j] = tile;
	

		}
	}
},
AddMoster:function(i,j){
	var s=Math.floor(this.starttileRand+Math.random()*this.endtileRand);
	var tiles=this.game.add.sprite(this.tileBase[i][j].x,this.tileBase[i][j].y,"tileanim"+s)
	tiles.anchor.set(.5);
	tiles.scale.set(.8);
	tiles.xpos=i;
	tiles.ypos=j;
	tiles.tileType=s;

	tiles.tilename="tile"+i+(j);
	this.bg.addChild(tiles);
	//this.tileAnim1 = this.game.add.sprite(0,0,"tileanim"+s);
	//this.tileAnim1.anchor.set(.5);
	//this.tileAnim1.scale.set(.8);
	//tiles.addChild(this.tileAnim1);
	tiles.animations.add('idle',[0]); 
	tiles.animations.add('anims',[0,1,2,3,4,5]); 
	tiles.animations.play('idle',10,false);
	//this.tileAnim1.visible=false;
	//tiles.anim=this.tileanims2;
	//tiles.anim=this.tileAnim1;
	tiles.inputEnabled=true

	tiles.input.useHandCursor=true;
	tiles.events.onInputDown.add(this.ChecktileNum,this,tiles);
	this.tileInGrid.push(tiles);
	return tiles;
},
randommonster:function(){
	this.clicked=false;
	this.randomtile.splice(0)
	for(var i=0;i<this.maxRow;i++){
		var s=Math.floor(this.starttileRand+Math.random()*this.endtileRand);
		this.tiles1=this.game.add.sprite(this.randInitTile[i].x,this.randInitTile[i].y,"tileanim"+s);
		this.tiles1.anchor.set(.5);
		this.tiles1.scale.set(.8);
		this.tiles1.tileType=s;
		this.tiles1.alpha=0;
	//this.tileAnim1 = this.game.add.sprite(0,0,"tileanim"+s);
	//this.tileAnim1.anchor.set(.5);
	//this.tileAnim1.scale.set(.8);
	//tiles.addChild(this.tileAnim1);
	this.tiles1.animations.add('idle',[0]); 
	this.tiles1.animations.add('anims',[0,1,2,3,4,5]); 
	this.tiles1.animations.play('idle',10,false);

	//this.tiles1.anim=this.tileanims2;

	
		this.bg.addChild(this.tiles1);
		this.randomtile.push(this.tiles1);
		var playerTween2 = this.game.add.tween(this.tiles1).to({alpha:1}, 2000, Phaser.Easing.Linear.None, true); 
	}

	this.randMonst= this.game.time.events.add(this.randAddmonsterInTile, this.AddRandMonster, this);
},
AddRandMonster:function(){
	if(this.randMonst!=null){
	this.game.time.events.remove(this.randMonst);
	}
	if(this.clicked==false){
		this.callAddMonster=false;
	this.clicked=false;



	for(var i=0;i<this.tileInGrid.length;i++){
		var x1=this.tileInGrid[i].xpos;
		var y1=this.tileInGrid[i].ypos;
		var playerTween1 = this.game.add.tween(this.tileInGrid[i]).to({x:this.tileBase[x1][y1+1].x,y:this.tileBase[x1][y1+1].y}, 300, Phaser.Easing.Linear.None, true); 
			this.tileInGrid[i].xpos=x1;
			this.tileInGrid[i].tilename="tile"+x1+(y1+1);
		this.tileInGrid[i].ypos=y1+1;
		tileGrid[x1][y1+1] = this.tileInGrid[i];
	}
	for(var i=0;i<this.maxrow;i++){
		tileGrid[i][0]=null;
	}
	for(var i=0;i<this.randomtile.length;i++){
		var playerTween2 = this.game.add.tween(this.randomtile[i]).to({x:this.tileBase[i][0].x,y:this.tileBase[i][0].y}, 300, Phaser.Easing.Linear.None, true); 
		this.randomtile[i].xpos=i;
		this.randomtile[i].ypos=0;
		tileGrid[i][0]=this.randomtile[i];
		this.randomtile[i].tilename="tile"+i+"0"
		this.tileInGrid.push(this.randomtile[i]);
		this.randomtile[i].inputEnabled=true

		this.randomtile[i].input.useHandCursor=true;
		this.randomtile[i].events.onInputDown.add(this.ChecktileNum,this,this.randomtile[i]);
	
		

    	
	}
	var sd=0;
	
	for(var i=0;i<this.maxRow;i++){
	
		if(tileGrid[i][this.maxCol-1]!=null){
			sd=1;
		};
	}
	if(sd==0){
	this.randommonster();
	}else{
		if(BasicGame.soundplay==0){
			this.snd=null;
			this.snd=this.game.add.audio('gameoversnd',1,true);
			this.snd.play('',0,1,false);
		}
		
		this.state.start('Gameover');
	}
}else{

	this.callAddMonster=true;
}

},
ChecktileNum:function(pointer){

	if(BasicGame.paused==false)
	{
	if(this.clicked==false){
		
	
	this.clicked=true;
	
	this.getAdjacenttiles(pointer);

	if(matches.length > 0){
		this.takenTarget+=matches.length;
		this.targettext.text=this.takenTarget+"/"+this.targetCount;
		this.match=true;
		if(BasicGame.soundplay==0){
			this.blast=null;
			this.blast=this.game.add.audio('blast',1,true);
			this.blast.play('',0,1,false);
		}
		//Remove the tiles
		this.showAnim(matches);
		
		this.game.time.events.add(300, function(){
			this.removeTileGroup(matches);
			this.resetTile();
		   }.bind(this));

	}else{
		this.clicked=false;
		
	}
}
	}



},
showAnim: function(matches1){
	var me = this;
	
    //Loop through all the matches and remove the associated tiles
    for(var i = 0; i < matches1.length; i++){
		var tile = matches1[i];
		
		tile.animations.play('anims',20,false);
		
		
	}

},
removeTileGroup: function(matches1){
 
    var me = this;
	
    //Loop through all the matches and remove the associated tiles
    for(var i = 0; i < matches1.length; i++){
        var tile = matches1[i];
		var tilePos = this.getTilePos(tileGrid, tile);
		for(var p=0;p<this.tileInGrid.length;p++){
	
			if(tile==this.tileInGrid[p]){
				this.tileInGrid.splice(p, 1); 
	
			}
		}
		this.scores+=10;
		
		this.bg.removeChild(tile);
			//Remove the tile from the theoretical grid
			if(tilePos.x != -1 && tilePos.y != -1){
				tileGrid[tilePos.x][tilePos.y] = null;
				
			}

	}
	
},

resetTile: function(){
 
    var me = this;

	

    //Loop through each column starting from the left
    for (var i = 0; i < this.maxRow; i++)
    {
	
        //Loop through each tile in column from bottom to top
        for (var j = this.maxCol - 1; j > 0; j--)
        {
 
			//console.log(i+" _ "+j);
            //If this space is blank, but the one above it is not, move the one above down
            if(tileGrid[i][j] != null && tileGrid[i][j-1] == null)
            {
                //Move the tile above down one
                var tempTile = tileGrid[i][j];
                tileGrid[i][j-1] = tempTile;
                tileGrid[i][j] = null;
				tempTile.xpos=i;
				tempTile.ypos=j-1;


				
			

                me.game.add.tween(tempTile).to({y:this.tileBase[i][j-1].y}, 200, Phaser.Easing.Linear.In, true);
			//	tempTile.y=
                //The positions have changed so start this process again from the bottom
                //NOTE: This is not set to me.tileGrid[i].length - 1 because it will immediately be decremented as
                //we are at the end of the loop.
                j = this.maxCol;
            }
        }
	}

		for (var j = 0; j < this.maxCol; j++)
		{
			for (var i = 0; i < this.maxRow; i++)
			{
				if(tileGrid[i][j]!=null){
			
				}
		}
	}
	
	
	this.clicked=false;
	if(this.callAddMonster){
		this.randMonst= this.game.time.events.add(200, this.AddRandMonster, this);

	}
	if(this.takenTarget>=this.targetCount){
BasicGame.score+=this.scores;
		this.state.start("Levelup");
	}
 
},

getTilePos: function(tileGrid, tile)
{
    var pos = {x:-1, y:-1};
 
    //Find the position of a specific tile in the grid
    for(var i = 0; i < tileGrid.length ; i++)
    {
        for(var j = 0; j < tileGrid[i].length; j++)
        {
            //There is a match at this position so return the grid coords
            if(tile == tileGrid[i][j])
            {
                pos.x = i;
                pos.y = j;
                break;
            }
        }
    }
 
    return pos;
},
getAdjacenttiles:function(tilegrids){
	 matches = [];
	 matchesRepeat= [];
	var i=tilegrids.xpos;
	var j=tilegrids.ypos;
	var sames=0;

	if(i>1&&tileGrid[i][j]&&tileGrid[i-1][j]&&tileGrid[i-2][j]){
	
		if(tileGrid[i][j].tileType ==tileGrid[i-1][j].tileType &&tileGrid[i-1][j].tileType==tileGrid[i-2][j].tileType){
			sames=1;
			
		}
	}
	 if(i<(this.maxRow-1)&&tileGrid[i][j]&&tileGrid[i+1][j]&&tileGrid[i+2][j]){
	
		if(tileGrid[i][j].tileType ==tileGrid[i+1][j].tileType &&tileGrid[i+1][j].tileType==tileGrid[i+2][j].tileType){
			sames=1;
		
		}
	} if(j>1&&tileGrid[i][j]&&tileGrid[i][j-1]&&tileGrid[i][j-2]){
	
		if(tileGrid[i][j].tileType ==tileGrid[i][j-1].tileType &&tileGrid[i][j-1].tileType==tileGrid[i][j-2].tileType){
			sames=1;
		
		}
	} if(j<(this.maxCol-1)&&tileGrid[i][j]&&tileGrid[i][j+1]&&tileGrid[i][j+2]){
		
		if(tileGrid[i][j].tileType ==tileGrid[i][j+1].tileType &&tileGrid[i][j+1].tileType==tileGrid[i][j+2].tileType){
			sames=1;
			
		}
	} if(i!=0&&i!=this.maxrow&&tileGrid[i][j]&&tileGrid[i-1][j]&&tileGrid[i+1][j]){
		
		if(tileGrid[i][j].tileType ==tileGrid[i-1][j].tileType &&tileGrid[i-1][j].tileType==tileGrid[i+1][j].tileType){
			sames=1;
			
		}

	} if(j!=0&&j!=this.maxCol&&tileGrid[i][j]&&tileGrid[i][j+1]&&tileGrid[i][j-1]){
		
		if(tileGrid[i][j].tileType ==tileGrid[i][j+1].tileType &&tileGrid[i][j+1].tileType==tileGrid[i][j-1].tileType){
			sames=1;
		
		}
	}


	if(i!=this.maxrow&&j!=this.maxCol&&tileGrid[i][j]&&tileGrid[i][j+1]&&tileGrid[i+1][j+1]){
		
		if(tileGrid[i][j].tileType ==tileGrid[i][j+1].tileType &&tileGrid[i][j+1].tileType==tileGrid[i+1][j+1].tileType){
			sames=1;
		
		}
	}
	if(i!=0&&j!=this.maxCol&&tileGrid[i][j]&&tileGrid[i][j+1]&&tileGrid[i-1][j+1]){
	
		if(tileGrid[i][j].tileType ==tileGrid[i][j+1].tileType &&tileGrid[i][j+1].tileType==tileGrid[i-1][j+1].tileType){
			sames=1;
		
		}
	}

	if(i!=this.maxrow&&j!=0&&tileGrid[i][j]&&tileGrid[i][j-1]&&tileGrid[i+1][j-1]){
	
		if(tileGrid[i][j].tileType ==tileGrid[i][j-1].tileType &&tileGrid[i][j-1].tileType==tileGrid[i+1][j-1].tileType){
			sames=1;
		
		}
	}
	if(i!=0&&j!=0&&tileGrid[i][j]&&tileGrid[i][j-1]&&tileGrid[i-1][j-1]){
	
		if(tileGrid[i][j].tileType ==tileGrid[i][j-1].tileType &&tileGrid[i][j-1].tileType==tileGrid[i-1][j-1].tileType){
			sames=1;
		
		}
	}
	if(i!=0&&j!=0&&tileGrid[i][j]&&tileGrid[i-1][j]&&tileGrid[i-1][j-1]){
	
		if(tileGrid[i][j].tileType ==tileGrid[i-1][j].tileType &&tileGrid[i-1][j].tileType==tileGrid[i-1][j-1].tileType){
			sames=1;
		
		}
	}
	if(i!=this.maxrow&&j!=0&&tileGrid[i][j]&&tileGrid[i+1][j]&&tileGrid[i+1][j-1]){
	
		if(tileGrid[i][j].tileType ==tileGrid[i+1][j].tileType &&tileGrid[i+1][j].tileType==tileGrid[i+1][j-1].tileType){
			sames=1;
		
		}
	}
	if(i!=0&&j!=this.maxCol&&tileGrid[i][j]&&tileGrid[i-1][j]&&tileGrid[i-1][j+1]){
	
		if(tileGrid[i][j].tileType ==tileGrid[i-1][j].tileType &&tileGrid[i-1][j].tileType==tileGrid[i-1][j+1].tileType){
			sames=1;
		
		}
	}
	if(i!=this.maxrow&&j!=this.maxCol&&tileGrid[i][j]&&tileGrid[i+1][j]&&tileGrid[i+1][j+1]){
	
		if(tileGrid[i][j].tileType ==tileGrid[i+1][j].tileType &&tileGrid[i+1][j].tileType==tileGrid[i+1][j+1].tileType){
			sames=1;
		
		}
	}
	if(i!=this.maxrow&&j!=this.maxCol&&tileGrid[i][j]&&tileGrid[i+1][j]&&tileGrid[i][j+1]){
	
		if(tileGrid[i][j].tileType ==tileGrid[i+1][j].tileType &&tileGrid[i+1][j].tileType==tileGrid[i][j+1].tileType){
			sames=1;
		
		}
	}
	if(i!=0&&j!=0&&tileGrid[i][j]&&tileGrid[i-1][j]&&tileGrid[i][j-1]){
		
		if(tileGrid[i][j].tileType ==tileGrid[i-1][j].tileType &&tileGrid[i-1][j].tileType==tileGrid[i][j-1].tileType){
			sames=1;
		
		}
	}

	if(i!=this.maxrow&&j!=0&&tileGrid[i][j]&&tileGrid[i+1][j]&&tileGrid[i][j-1]){
		
		if(tileGrid[i][j].tileType ==tileGrid[i+1][j].tileType &&tileGrid[i+1][j].tileType==tileGrid[i][j-1].tileType){
			sames=1;
		
		}
	}
	if(i!=0&&j!=this.maxCol&&tileGrid[i][j]&&tileGrid[i-1][j]&&tileGrid[i][j+1]){
	
		if(tileGrid[i][j].tileType ==tileGrid[i-1][j].tileType &&tileGrid[i-1][j].tileType==tileGrid[i][j+1].tileType){
			sames=1;
		
		}
	}

	if(sames==1){

		matches.push(tileGrid[i][j]);
		matchesRepeat.push(tileGrid[i][j]);
	if(i-1>=0){
		if(tileGrid[i-1][j]!=null&&tileGrid[i-1][j].tileType==tileGrid[i][j].tileType){
			matches.push(tileGrid[i-1][j]);
			this.checkleftRowAdj(tileGrid[i-1][j]);
		}

	}
	if(i+1<this.maxRow){
		if(tileGrid[i+1][j]!=null&&tileGrid[i+1][j].tileType==tileGrid[i][j].tileType){
			matches.push(tileGrid[i+1][j]);
			this.checkRightRowAdj(tileGrid[i+1][j]);
		}

	}
	if(j-1>=0){
		if(tileGrid[i][j-1]!=null&&tileGrid[i][j-1].tileType==tileGrid[i][j].tileType){
			matches.push(tileGrid[i][j-1]);
			//matches.push(tileGrid[i][j-1]);
			this.checkDowndj(tileGrid[i][j-1]);
		}

	}
	if(j+1<this.maxCol){
		if(tileGrid[i][j+1]!=null&&tileGrid[i][j+1].tileType==tileGrid[i][j].tileType){
			matches.push(tileGrid[i][j+1]);
			//matches.push(tileGrid[i][j-1]);
			this.checkUpdj(tileGrid[i][j+1]);
		}

	}
}

},
checkleftRowAdj:function(tilegrids){
	
	var i=tilegrids.xpos;
	var j=tilegrids.ypos;
	var repeats=false;

	for(var p=0;p<matchesRepeat.length;p++){
	
		if(matchesRepeat[p]==tileGrid[i][j]){
			repeats=true;

		}
	
	}
	if(repeats==false){
		matchesRepeat.push(tileGrid[i][j]);
	if(i-1>=0){
		if(tileGrid[i-1][j]!=null&&tileGrid[i-1][j].tileType==tileGrid[i][j].tileType){
			matches.push(tileGrid[i-1][j]);
			
			var pq=0;
			for(var p=0;p<matchesRepeat.length;p++){
	
				if(matchesRepeat[p]==tileGrid[i-1][j]){
					pq=1;
		
				}
			
			}
			if(pq==0){
		
			this.checkleftRowAdj(tileGrid[i-1][j]);
			}
		}

	}
	if(j-1>=0){
		if(tileGrid[i][j-1]!=null&&tileGrid[i][j-1].tileType==tileGrid[i][j].tileType){
			matches.push(tileGrid[i][j-1]);
			
			var pq=0;
			for(var p=0;p<matchesRepeat.length;p++){
	
				if(matchesRepeat[p]==tileGrid[i][j-1]){
					pq=1;
		
				}
			
			}
			if(pq==0){
			
			this.checkDowndj(tileGrid[i][j-1]);
			}
		}

	}
	if(j+1<this.maxCol){
		if(tileGrid[i][j+1]!=null&&tileGrid[i][j+1].tileType==tileGrid[i][j].tileType){
			matches.push(tileGrid[i][j+1]);
			
			var pq=0;
			for(var p=0;p<matchesRepeat.length;p++){
	
				if(matchesRepeat[p]==tileGrid[i][j+1]){
					pq=1;
		
				}
			
			}
			if(pq==0){
			
			this.checkUpdj(tileGrid[i][j+1]);
			}
		}

	}


	}

},
checkRightRowAdj:function(tilegrids){
	
	var i=tilegrids.xpos;
	var j=tilegrids.ypos;
	var repeats=false;
	
	for(var p=0;p<matchesRepeat.length;p++){
	
		if(matchesRepeat[p]==tileGrid[i][j]){
			repeats=true;

		}
	
	}
	if(repeats==false){
		matchesRepeat.push(tileGrid[i][j]);
	if(i+1<this.maxRow){
		if(tileGrid[i+1][j]!=null&&tileGrid[i+1][j].tileType==tileGrid[i][j].tileType){
			matches.push(tileGrid[i+1][j]);
		
			var pq=0;
			for(var p=0;p<matchesRepeat.length;p++){
	
				if(matchesRepeat[p]==tileGrid[i+1][j]){
					pq=1;
		
				}
			
			}
			if(pq==0){
			
			this.checkRightRowAdj(tileGrid[i+1][j]);
			}
		}

	}
	if(j-1>=0){
		if(tileGrid[i][j-1]!=null&&tileGrid[i][j-1].tileType==tileGrid[i][j].tileType){
			matches.push(tileGrid[i][j-1]);
	
			var pq=0;
			for(var p=0;p<matchesRepeat.length;p++){
	
				if(matchesRepeat[p]==tileGrid[i][j-1]){
					pq=1;
		
				}
			
			}
			if(pq==0){
			
			this.checkDowndj(tileGrid[i][j-1]);
			}
		}

	}
	if(j+1<this.maxCol){
		if(tileGrid[i][j+1]!=null&&tileGrid[i][j+1].tileType==tileGrid[i][j].tileType){
			matches.push(tileGrid[i][j+1]);
			
			var pq=0;
			for(var p=0;p<matchesRepeat.length;p++){
	
				if(matchesRepeat[p]==tileGrid[i][j+1]){
					pq=1;
		
				}
			
			}
			if(pq==0){
			
			this.checkUpdj(tileGrid[i][j+1]);
			}
		}

	
}

	}

},
checkDowndj:function(tilegrids){
	
	var i=tilegrids.xpos;
	var j=tilegrids.ypos;
	var repeats=false;
	
	for(var p=0;p<matchesRepeat.length;p++){
	
		if(matchesRepeat[p]==tileGrid[i][j]){
			repeats=true;

		}
	
	}
	if(repeats==false){
		matchesRepeat.push(tileGrid[i][j]);
	if(i-1>=0){
		if(tileGrid[i-1][j]!=null&&tileGrid[i-1][j].tileType==tileGrid[i][j].tileType){
			matches.push(tileGrid[i-1][j]);
			
			var pq=0;
			for(var p=0;p<matchesRepeat.length;p++){
	
				if(matchesRepeat[p]==tileGrid[i-1][j]){
					pq=1;
		
				}
			
			}
			if(pq==0){
			
			this.checkleftRowAdj(tileGrid[i-1][j]);
			}
		}

	}
	if(i+1<this.maxRow){
		if(tileGrid[i+1][j]!=null&&tileGrid[i+1][j].tileType==tileGrid[i][j].tileType){
			matches.push(tileGrid[i+1][j]);
			
			var pq=0;
			for(var p=0;p<matchesRepeat.length;p++){
	
				if(matchesRepeat[p]==tileGrid[i+1][j]){
					pq=1;
		
				}
			
			}
			if(pq==0){
			
			this.checkRightRowAdj(tileGrid[i+1][j]);
			}
		}

	}
	if(j-1>=0){
		if(tileGrid[i][j-1]!=null&&tileGrid[i][j-1].tileType==tileGrid[i][j].tileType){
			matches.push(tileGrid[i][j-1]);
		
			var pq=0;
			for(var p=0;p<matchesRepeat.length;p++){
	
				if(matchesRepeat[p]==tileGrid[i][j-1]){
					pq=1;
		
				}
			
			}
			if(pq==0){
			
			this.checkDowndj(tileGrid[i][j-1]);
			}
		}

	}
}




},
checkUpdj:function(tilegrids){
	

	var i=tilegrids.xpos;
	var j=tilegrids.ypos;

	var repeats=false;
	for(var p=0;p<matchesRepeat.length;p++){
	
		if(matchesRepeat[p]==tileGrid[i][j]){
			repeats=true;

		}
	
	}
	if(repeats==false){
		matchesRepeat.push(tileGrid[i][j]);
	if(i-1>=0){
		if(tileGrid[i-1][j]!=null&&tileGrid[i-1][j].tileType==tileGrid[i][j].tileType){
			matches.push(tileGrid[i-1][j]);
		
			var pq=0;
			for(var p=0;p<matchesRepeat.length;p++){
	
				if(matchesRepeat[p]==tileGrid[i-1][j]){
					pq=1;
		
				}
			
			}
			if(pq==0){
				
			this.checkleftRowAdj(tileGrid[i-1][j]);
			}
		}

	}
	if(i+1<this.maxRow){
		if(tileGrid[i+1][j]!=null&&tileGrid[i+1][j].tileType==tileGrid[i][j].tileType){
			matches.push(tileGrid[i+1][j]);
		
			var pq=0;
			for(var p=0;p<matchesRepeat.length;p++){
	
				if(matchesRepeat[p]==tileGrid[i+1][j]){
					pq=1;
		
				}
			
			}
			if(pq==0){
			
			this.checkRightRowAdj(tileGrid[i+1][j]);
			}
		}

	}
	if(j+1<this.maxCol){
		if(tileGrid[i][j+1]!=null&&tileGrid[i][j+1].tileType==tileGrid[i][j].tileType){
			matches.push(tileGrid[i][j+1]);
		
			var pq=0;
			for(var p=0;p<matchesRepeat.length;p++){
	
				if(matchesRepeat[p]==tileGrid[i][j+1]){
					pq=1;
		
				}
			
			}
			if(pq==0){
			
			this.checkUpdj(tileGrid[i][j+1]);
			}

		}

	}
	
	
}

},
update:function(){
	
	if(BasicGame.adshowing==true){
		
		if(BasicGame.paused==false){
	
		this.pausePressed();
		}
	}
	if(BasicGame.paused==false)
	{

		if(this.scoretext!=null){
			this.scoretext.text=""+this.scores;
		//	this.timertext.text=""+BasicGame.timer;
		}
	}
},


render:function(){
//	this.game.context.fillStyle = 'rgb(255,255,0)';
//	this.game.context.fillRect(this.p1.x, this.p1.y, 4, 4);
	/*for(var i=0;i<enemyarr.length;i++){
		if(enemyarr[i]!=null){
			this.game.context.fillStyle = 'rgb(255,255,0)';
	this.game.context.fillRect(enemyarr[i].mainpoint.x, enemyarr[i].mainpoint.y, 4, 4);
			this.game.debug.body(enemyarr[i].hitboxname);
		}
	}*/
	//if(baseArr[0]!=null){
		//this.game.debug.body(baseArr[0].hitboxname);
	//}
	//if(baseArr[1]!=null){
	//	this.game.debug.body(baseArr[1].hitboxname);
	//}
	////this.game.debug.body(baseArr[0].hitboxname);
	//this.game.debug.body(baseArr[1].hitboxname);
	//this.game.debug.body(this.rabbit.hitboxname);
},


	
};

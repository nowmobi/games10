var Level14 = function(){};
// variables here
var scrW = 720; // screen width
var scrH = 1280; // screen height
var mapRows = 11;// map number of rows
var mapCols = 9;// map number of coloumns
var tileW = 80;// tile width px
var tileH = 80;// tile height px
var oX=0, oY = 0;// field origin x, y
var FLOOR = 0, LADDER = 1, HOLE = 2, ROLLER = 3, BOB = 5;
var WHITE = 6, RED = 7, BLUE = 8; YELLOW = 9; DEAD = 20;
var KEY0 = 10, KEY1 = 11, KEY2 = 12, KEY3 = 13, KEY4 = 14, KEY5 = 15;

// initial level field map array (size is 9 x 11 tiles)
var level14Init = [
	[20,20,20,20,20,20,20,20,20],
	[20,0,0,0,0,1,1,0,20],		
	[20,3,0,1,0,0,0,12,20],		
	[20,6,0,0,0,8,0,13,20],
	[20,1,0,0,3,0,0,0,20],
	[20,0,0,9,0,7,0,1,20],
	[20,1,0,0,0,0,0,0,20],
	[20,5,0,0,0,0,9,0,20],
	[20,0,2,0,0,0,0,10,20],
	[20,0,0,11,1,0,0,0,20],
	[20,20,20,20,20,20,20,20,20]];
	
var level = [];// level field dynamic array
	
var hintButton, retryButton;// hint and retry buttons
var hintArrow;// hint arrow	
var hintDir = 0;// directions are 0=Right,1=Up, 2=Left, 3=Down (must be set in init) 	

var fixedGroup, movingGroup, keyGroup, paintGroup;// element groups
var bobAL, bobAR, bobAD, bobAU;// bob arrows
var goalTile = [];// goal tiles array
var goal = 0;// pairs to make (set in init)
var moveNum = 0;// total number of moves (tweens + hint)
var keyNum = 0;// total numer of keys found
var bobColor = 0;// color number of Bob
var paintFrameOld = 0;// paint can old frame number

Level14.prototype = {

	init: function(){
		keyNum = 0; moveNum = 0;
		bobColor = 1;// 0=blue, 1=green, 2=orange, 3=purple, 4=red, 5=yellow, 6=white, 7=black (fixed set here)
		hintDir = 0;// directions are 0=Right,1=Up, 2=Left, 3=Down (fixed set here) 
		goal = 4;// number of keys to find (fixed set here)

	},// --- END init() ------------	
	
	preload: function(){
		// nothing to preload
		},// --- END preload() ---------------

	create: function(){

		// map origin (all objects are referenced to this)
		oX = (scrW - tileW * mapCols)/2;
		oY = 100;				

		//draw the background				
		this.game.stage.setBackgroundColor(0x006766);
		var g = this.game.add.graphics(0,0);
		g.lineStyle(7, 0x000000, 1);
		g.moveTo(oX + tileW, oY + (mapRows - 1) * tileH);
		g.lineTo(oX + (mapCols - 1) * tileW, oY + (mapRows - 1) * tileH);
		g.lineTo(oX + (mapCols - 1) * tileW, oY + tileH); 
		
		// --- adding goal board ---------------------------------------------
		var goX = oX + tileW;
		var goY = oY - 80;
		var goalBg = this.game.add.image(goX, goY, 'goalBG');
		goalBg.anchor.set(0, 0);
		// adding goal sprites
		for(var x=0; x < goal; x++){
			goalTile[x] = this.game.add.sprite(goX+180+(tileW+10)*x, goY + 10, "key");
			goalTile[x].frame = 6;
		}
		
		// --- adding field and moving objects --------------------------------------

		// creating and initialising field map array
		for(var i = 0; i < level14Init.length; i++){
			level[i] =[];
			for(var j = 0; j < level14Init[i].length; j++){
				level[i][j] = level14Init[i][j];
			}
		}		
		/*  adding groups to the game.
		The fixedGroup will contain all non-movable objects.
        The movingGroup will contain moveable objects.
		*/
		fixedGroup = this.game.add.group();
		movingGroup = this.game.add.group();
		keyGroup = this.game.add.group();	
		paintGroup = this.game.add.group();		
		
		var tile;// local variable used for tiles creation
		
		// render field map (floor plus objects)
		//
		// looping trough all level rows
		for(var i=0;i<level.length;i++){
			//looping through all level columns
			for(var j=0;j<level[i].length;j++){
				// what do we have at row j, col i?
				switch(level[i][j]){
				case BOB:           
					// since bob is on the floor, I am first creating the floor tile
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"floorTiles");
					tile.frame = FLOOR;
					fixedGroup.add(tile);// adding floor to fixedGroup
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"bob");
					tile.frame = bobColor;// assigning the proper tile frame
					tile.inputEnabled = true;// interactive tile
					tile.events.onInputDown.add(bobClick, this);// click event callback
					// custom attributes to store tile x and y position and id
					tile.posX = j;
					tile.posY = i;
					tile.id = level[i][j];
					tile.arrowGroup = this.game.add.group();// adding arrow group 
					movingGroup.add(tile);// adding tile to movingGroup
					tile.ix = movingGroup.getIndex(tile);					
					break;
		
				case ROLLER:           
					// since roller is on the floor, I am first creating the floor tile
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"floorTiles");
					tile.frame = FLOOR;
					fixedGroup.add(tile);// adding floor to fixedGroup
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"floorTiles");
					tile.frame = level[i][j];// assigning the proper tile frame
					tile.inputEnabled = true;// interactive tile
					tile.events.onInputDown.add(bobClick, this);// click event callback
					// custom attributes to store tile x and y position and id
					tile.posX = j;
					tile.posY = i;
					tile.id = level[i][j];					
					tile.arrowGroup = this.game.add.group();// adding arrow group
					movingGroup.add(tile);// adding tile to movingGroup
					tile.ix = movingGroup.getIndex(tile);
					break;
					
				case KEY0:           
					// since key is on the floor, I am first creating the floor tile
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"floorTiles");
					tile.frame = FLOOR;
					fixedGroup.add(tile);// adding floor to fixedGroup				
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"key");
					keyGroup.add(tile);
					tile.posX = j;
					tile.posY = i;
					tile.frame = level[i][j] - 10;// assigning the proper tile frame
					break;
					
				case KEY1:           
					// since key is on the floor, I am first creating the floor tile
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"floorTiles");
					tile.frame = FLOOR;
					fixedGroup.add(tile);// adding floor to fixedGroup				
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"key");
					keyGroup.add(tile);
					tile.posX = j;
					tile.posY = i;					
					tile.frame = level[i][j] - 10;// assigning the proper tile frame
					break;
						
				case KEY2:           
					// since key is on the floor, I am first creating the floor tile
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"floorTiles");
					tile.frame = FLOOR;
					fixedGroup.add(tile);// adding floor to fixedGroup				
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"key");
					keyGroup.add(tile);
					tile.posX = j;
					tile.posY = i;							
					tile.frame = level[i][j] - 10;// assigning the proper tile frame
					break;
						
				case KEY3:           
					// since key is on the floor, I am first creating the floor tile
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"floorTiles");
					tile.frame = FLOOR;
					fixedGroup.add(tile);// adding floor to fixedGroup				
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"key");
					keyGroup.add(tile);
					tile.posX = j;
					tile.posY = i;							
					tile.frame = level[i][j] - 10;// assigning the proper tile frame
					break;
						
				case KEY4:           
					// since key is on the floor, I am first creating the floor tile
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"floorTiles");
					tile.frame = FLOOR;
					fixedGroup.add(tile);// adding floor to fixedGroup				
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"key");
					keyGroup.add(tile);
					tile.posX = j;
					tile.posY = i;							
					tile.frame = level[i][j] - 10;// assigning the proper tile frame
					break;
					
				case KEY5:           
					// since key is on the floor, I am first creating the floor tile
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"floorTiles");
					tile.frame = FLOOR;
					fixedGroup.add(tile);// adding floor to fixedGroup				
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"key");
					keyGroup.add(tile);
					tile.posX = j;
					tile.posY = i;							
					tile.frame = level[i][j] - 10;// assigning the proper tile frame
					break;
																																													
				case WHITE:           
					// since paint is on the floor, I am first creating the floor tile
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"floorTiles");
					tile.frame = FLOOR;
					fixedGroup.add(tile);// adding floor to fixedGroup
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"paint");
					tile.frame = level[i][j] - 6;// assigning the proper tile frame
					tile.posX = j;
					tile.posY = i;							
					paintGroup.add(tile);
					break;
					
				case RED:           
					// since paint is on the floor, I am first creating the floor tile
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"floorTiles");
					tile.frame = FLOOR;
					fixedGroup.add(tile);// adding floor to fixedGroup
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"paint");
					tile.frame = level[i][j] - 6;// assigning the proper tile frame
					tile.posX = j;
					tile.posY = i;							
					paintGroup.add(tile);					
					break;
					
				case BLUE:           
					// since paint is on the floor, I am first creating the floor tile
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"floorTiles");
					tile.frame = FLOOR;
					fixedGroup.add(tile);// adding floor to fixedGroup
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"paint");
					tile.frame = level[i][j] - 6;// assigning the proper tile frame
					tile.posX = j;
					tile.posY = i;							
					paintGroup.add(tile);				
					break;
					
				case YELLOW:           
					// since paint is on the floor, I am first creating the floor tile
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"floorTiles");
					tile.frame = FLOOR;
					fixedGroup.add(tile);// adding floor to fixedGroup
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"paint");
					tile.frame = level[i][j] - 6;// assigning the proper tile frame
					tile.posX = j;
					tile.posY = i;							
					paintGroup.add(tile);					
					break;
					
				case HOLE:           
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"floorTiles");
					tile.frame = level[i][j];// assigning the proper tile frame
					fixedGroup.add(tile);
					break;

				case LADDER:
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"floorTiles");
					tile.frame = level[i][j];
					fixedGroup.add(tile);
					break;

				case FLOOR:
					tile = this.game.add.sprite(oX+tileW*j,oY+tileH*i,"floorTiles");
					tile.frame = level[i][j];
					fixedGroup.add(tile);
					
				case DEAD:
					// do not draw this! 
					break;
										
				default:
					break;
				}// end switch
			}// end for
		}// end for	
		
		// --- adding buttons	---------------------------------------------------------------
		quitButton = this.game.add.button(scrW - (oX + tileW +180), oY + tileH * mapRows + 10, 'quitBtn', quit, this, 2, 1, 0 );	
		hintButton = this.game.add.button(oX + tileW, oY + tileH * mapRows + 10, 'hintBtn', hint, this, 2, 1, 0 );
		hintButton.visible = true;
		hintButton.inputEnabled = true;
		retryButton = this.game.add.button(oX + tileW, oY + tileH * mapRows + 10, 'retryBtn', retry, this, 2, 1, 0 );
		retryButton.visible = false;
		retryButton.inputEnabled = false;

		// --- adding hint text ------------
		var hintBG = this.game.add.image(0, quitButton.y + 140, 'textBG');
		hintBG.anchor.set(0,0);
		hintBG.x = Math.floor((scrW - hintBG.width) / 2);
		var text1 = 'Find a safe path to the colored key.\n' +
			'Pick up the can of white paint to reset Bob\'s color to white.\n' +
			'Avoid the floor holes.';
		hintText = this.game.add.text(hintBG.x + 10, hintBG.y + Math.floor(hintBG.height/2), text1,
			{font: "24px Arial", fill: '#000000', align: "left"});
    		hintText.anchor.set(0,0.5);	
		
		// --- functions -----------------------------------------
		function hint(){
			var hB = 2;// hint moving element index
			moveNum += 5;// this will get you one star result
			// kill arrows and enable input of all objects
			for(var x = 0; x < movingGroup.length; x++){
				if(typeof movingGroup.getAt(x).arrowGroup !== 'undefined') movingGroup.getAt(x).arrowGroup.kill();
				movingGroup.getAt(x).inputEnabled = true;
			}
			hintButton.inputEnabled = false;// disable repetative clicks
			hintArrow = this.game.add.sprite(0, 0, 'arrowHint');
			// right arrow
			if(hintDir == 0){
				if(this.isWalkable(movingGroup.getAt(hB).posX + 1, movingGroup.getAt(hB).posY, movingGroup.getAt(hB).id)){
					hintArrow.x = (movingGroup.getAt(hB).posX + 1) * tileW+oX;
					hintArrow.y = movingGroup.getAt(hB).posY * tileH+oY;
					hintArrow.frame = hintDir;				
				}			
			}	
			// UP arrow			
			if(hintDir == 1){
				if(this.isWalkable(movingGroup.getAt(hB).posX, movingGroup.getAt(hB).posY - 1, movingGroup.getAt(hB).id)){
					hintArrow.x = movingGroup.getAt(hB).posX * tileW+oX;
					hintArrow.y = (movingGroup.getAt(hB).posY - 1) * tileH+oY;
					hintArrow.frame = hintDir;								
				}			
			}
			// left arrow
			if(hintDir == 2){
				if(this.isWalkable(movingGroup.getAt(hB).posX - 1, movingGroup.getAt(hB).posY, movingGroup.getAt(hB).id)){
					hintArrow.x = (movingGroup.getAt(hB).posX - 1) * tileW+oX;
					hintArrow.y = movingGroup.getAt(hB).posY * tileH+oY;
					hintArrow.frame = hintDir;										
				}						
			}	
			// down arrow
			if(hintDir == 3){
				if(this.isWalkable(movingGroup.getAt(hB).posX, movingGroup.getAt(hB).posY + 1, movingGroup.getAt(hB).id)){
					hintArrow.x = movingGroup.getAt(hB).posX * tileW+oX;
					hintArrow.y = (movingGroup.getAt(hB).posY + 1) * tileH+oY;
					hintArrow.frame = hintDir;								
				}					
			}

		}// --- END hint() -----------		
		
		function retry(){

			this.state.restart();				
	
		}// --- END retry() -----------	

		function quit(){
			// go to level selection
			this.game.state.start('levelSelect');
		
		}// --- END quit() ----------	
	
	// --- roller controls ---------------
	
	
	// ---- bob controls ---------------------------------------
	function bobClick(bob){
		for(var x = 0; x < movingGroup.length; x++){
			if(x != bob.ix) {if(typeof movingGroup.getAt(x).arrowGroup !== 'undefined') movingGroup.getAt(x).arrowGroup.kill();}
		}
		if(typeof hintArrow !== 'undefined')hintArrow.kill();
		hintButton.inputEnabled = true;
		movingGroup.setAll('inputEnabled', true);
		bob.inputEnabled = false;// prevent repetative clicks		
		bob.arrowGroup = this.game.add.group();// adding arrows group		
		if(this.isWalkable(bob.posX - 1, bob.posY, bob.id)){

			bobAL = this.game.add.button((bob.posX - 1) * tileW+oX, bob.posY * tileH+oY, 'arrowL', bArrowLeft, this, 2, 1, 0 );
			bob.arrowGroup.add(bobAL);
		}	
		function bArrowLeft(){
	
			movingGroup.setAll('inputEnabled', false);
			bob.arrowGroup.kill();// remove all arrows
			// move bob to destination
			var deltaX = 0;
			for (var i = bob.posX - 1; i > -1 ; i--){
				if(this.isWalkable(i, bob.posY, bob.id)){
					deltaX--;
					if(level[bob.posY][i] != FLOOR ) break;
				} else {break;}
			}
			this.moveBob(deltaX, 0, bob);		
		}// --- END arrowLeft() -----	

		if(this.isWalkable(bob.posX + 1, bob.posY, bob.id)){

			bobAR = this.game.add.button((bob.posX + 1) * tileW+oX, bob.posY * tileH+oY, 'arrowR', bArrowRight, this, 2, 1, 0 );			
			bob.arrowGroup.add(bobAR);
		}
		function bArrowRight(){

			movingGroup.setAll('inputEnabled', false);
			bob.arrowGroup.kill();// remove all arrows
			// move bob to destination
			var deltaX = 0;
			for (var i = bob.posX + 1; i < mapCols ; i++){
				if(this.isWalkable(i, bob.posY, bob.id)){
					deltaX++;
					if(level[bob.posY][i] != FLOOR) break;
				} else {break;}
			}
			this.moveBob(deltaX, 0, bob);
		}// --- END arrowRight() -----	
	
		if(this.isWalkable(bob.posX, bob.posY - 1, bob.id)){
			bobAU = this.game.add.button(bob.posX * tileW+oX, (bob.posY - 1) * tileH+oY, 'arrowU', bArrowUp, this, 2, 1, 0 );			

			bob.arrowGroup.add(bobAU);			
		}
		
		function bArrowUp(){

			movingGroup.setAll('inputEnabled', false);
			bob.arrowGroup.kill();// remove all arrows
			// move bob to destination
			var deltaY = 0;
			for (var i = bob.posY - 1; i > -1 ; i--){
				if(this.isWalkable(bob.posX, i, bob.id)){
					deltaY--;
					if(level[i][bob.posX] != FLOOR) break;
				} else {break;}
			}
			this.moveBob(0, deltaY, bob);		
		}// --- END arrowUp() -----	

		if(this.isWalkable(bob.posX, bob.posY + 1, bob.id)){
			bobAD = this.game.add.button(bob.posX * tileW+oX, (bob.posY + 1) * tileH+oY, 'arrowD', bArrowDown, this, 2, 1, 0 );						

			bob.arrowGroup.add(bobAD);			
		}	
		
		function bArrowDown(){

			movingGroup.setAll('inputEnabled', false);
			bob.arrowGroup.kill();// remove all arrows
			// move bob to destination
			var deltaY = 0;
			for (var i = bob.posY + 1; i < mapRows; i++){
				if(this.isWalkable(bob.posX, i, bob.id)){
					deltaY++;
					if(level[i][bob.posX] != FLOOR) break;
				} else {break;}
			}
			this.moveBob(0, deltaY, bob);
		
		}// --- END arrowDown() -----	
			
	}// --- END bobClick() ---

	},// --- END create() --------------------

	// --- common functions ----------------------------------------------	
	// a tile is walkable when it's grass tile
    isWalkable: function(posX, posY, playerID){
		if(playerID == BOB){
		var walkableKey = false;
		if((level[posY][posX] == KEY0 && bobColor == KEY0 - 10) || 
			(level[posY][posX] == KEY1 && bobColor == KEY1 - 10) ||
			(level[posY][posX] == KEY2 && bobColor == KEY2 - 10) ||
			(level[posY][posX] == KEY3 && bobColor == KEY3 - 10) ||
			(level[posY][posX] == KEY4 && bobColor == KEY4 - 10) ||
			(level[posY][posX] == KEY5 && bobColor == KEY5 - 10)){
			walkableKey = true;
		} else {
			walkableKey = false;
		}
		return (level[posY][posX] == FLOOR || level[posY][posX] == DEAD || 
			walkableKey || level[posY][posX] == HOLE || level[posY][posX] == WHITE || 
			(level[posY][posX] == RED || level[posY][posX] == BLUE || 
			level[posY][posX] == YELLOW) && bobColor != 7);
		} else {// roller
		return (level[posY][posX] == FLOOR || level[posY][posX] == DEAD || level[posY][posX] == HOLE);			
		}	
	},// --- END isWalkable() ---------

	// function to move bob
	moveBob: function(deltaX, deltaY, player){

		// ...then move the player and exit the function
		// moving tween with adjusted time based on distance
		if (Math.abs(deltaX) > 0){
			var time = Math.abs(deltaX) * 300;
		} else {
			time = Math.abs(deltaY) * 300;
		}
		// start tweening to the new position
		var playerTween = this.game.add.tween(player);
		playerTween.to({
			x: player.x + deltaX * tileW,
			y: player.y + deltaY * tileH}, time, Phaser.Easing.Linear.None, true); 		

		// updating player old position in level array   
        if(level[player.posY][player.posX] == BOB || level[player.posY][player.posX] == ROLLER){
			level[player.posY][player.posX] = FLOOR;
		}
		// updating paint can old position frame 
		if(player.id == BOB){
		for(var x = 0; x < paintGroup.length; x++){
			if(paintGroup.getAt(x).frame == 4){
				paintGroup.getAt(x).frame = paintFrameOld;
				break;
			}
		}
		}		
		// --- find player2 and check if it is a key or paint ---------------
		//0=blue, 1=green, 2=orange, 3=purple, 4=red, 5=yellow, 6=white, 7=brown
		var paintedBob = false;
		var foundKey = false;
		var player2ix = 0;
		var newPosX = player.posX+deltaX;
		var newPosY = player.posY+deltaY;
		if(level[newPosY][newPosX] > 9 && level[newPosY][newPosX] < 16){
			foundKey = true;
			for(var x = 0; x < keyGroup.length; x++){
				if(keyGroup.getAt(x).posX == newPosX && keyGroup.getAt(x).posY == newPosY){
					player2ix = x;
					break;
				}
			}
			level[newPosY][newPosX] = FLOOR;
		} else if(level[newPosY][newPosX] == WHITE){
			bobColor = 6; paintedBob = true;
			for(var x = 0; x < paintGroup.length; x++){
				if(paintGroup.getAt(x).posX == newPosX && paintGroup.getAt(x).posY == newPosY){
					player2ix = x;
					break;
				}	
			}
		} else if(level[newPosY][newPosX] == RED){
			paintedBob = true;
			if(bobColor == 0){bobColor = 3} else if(bobColor == 1){bobColor = 7} 
			else if(bobColor == 5){bobColor = 2} else if(bobColor == 6) {bobColor = 4}
			else {bobColor = bobColor}
			for(var x = 0; x < paintGroup.length; x++){
				if(paintGroup.getAt(x).posX == newPosX && paintGroup.getAt(x).posY == newPosY){
					player2ix = x;
					break;
				}	
			}			
		} else if(level[newPosY][newPosX] == BLUE){
			paintedBob =true;
			if(bobColor == 2){bobColor = 7} else if(bobColor == 4){bobColor = 3} 
			else if(bobColor == 5){bobColor = 1} else if(bobColor == 6){bobColor = 0}
			else {bobColor = bobColor}			
			for(var x = 0; x < paintGroup.length; x++){
				if(paintGroup.getAt(x).posX == newPosX && paintGroup.getAt(x).posY == newPosY){
					player2ix = x;
					break;
				}	
			}			
		} else if(level[newPosY][newPosX] == YELLOW){
			paintedBob = true;
			if(bobColor == 0){bobColor = 1} else if(bobColor == 3){bobColor = 7} 
			else if(bobColor == 4){bobColor = 2} else if(bobColor == 6){bobColor = 5}
			else {bobColor = bobColor}	
			for(var x = 0; x < paintGroup.length; x++){
				if(paintGroup.getAt(x).posX == newPosX && paintGroup.getAt(x).posY == newPosY){
					player2ix = x;
					break;
				}	
			}			
		} else {
			paintedBob = false; 
			foundKey = false;
		}
				
			
		// --- end find player2 --------------
		
		// updating player custom posX and posY attributes
        player.posX = newPosX;
        player.posY = newPosY;


		// check if player must be destoyed at the end of tween
		playerTween.onComplete.add(onComplete, this);		
		function onComplete(){
			moveNum++;
			movingGroup.setAll('inputEnabled', true);
			if(level[player.posY][player.posX] == DEAD || 
				level[player.posY][player.posX] == HOLE || foundKey || paintedBob){
				// update goal board and check for game over
				if(foundKey){
					keyGroup.getAt(player2ix).kill();
					keyNum++;
					if(soundEnabled){soundYahoo.play();}
					// shake player2
					var pairTween = this.game.add.tween(player);
					pairTween.to({x: player.x + tileW/15}, 20, Phaser.Easing.Cubic.None);
					pairTween.to({x: player.x - tileW/15}, 20, Phaser.Easing.Cubic.None);
					pairTween.to({x: player.x + tileW/15}, 20, Phaser.Easing.Cubic.None);
					pairTween.to({x: player.x - tileW/15}, 20, Phaser.Easing.Cubic.None);
					pairTween.to({x: player.x}, 20, Phaser.Easing.Cubic.None);
					pairTween.start();
					pairTween.onComplete.add(pairComplete, this);
					function pairComplete(){
						if(keyNum != goal){
							level[player.posY][player.posX] = player.id; 							
						} else {
							player.kill();
						}
						this.goalBoard();
					}
				} else if(paintedBob){
					player.frame = bobColor;
					paintFrameOld = paintGroup.getAt(player2ix).frame;
					paintGroup.getAt(player2ix).frame = 4;
				} else {
					// dead
					player.kill();
					if(soundEnabled){soundJump.play();}
				}
			} else {
				// updating player new position in level array 
				level[player.posY][player.posX] = player.id; 
			}
		// replace hint with retry button
		if(hintButton.alive){
			hintButton.kill();
			retryButton.visible = true;
			retryButton.inputEnabled = true;	
		}
		
		}// --- END onComplete() ------
		
	},// --- END moveBob() ----------
		
	goalBoard: function(){
		// update goal board
		goalTile[keyNum - 1].frame = bobColor;
		// check for game over
		if(keyNum == goal) {
			var wellDone = this.game.add.image(scrW/2, 150,'next');
			wellDone.anchor.set(0.5,0);
			wellDone.alpha = 0.8;
			wellDone.scale.setTo(1.0, 1.0);// adjust as required
			wellDone.inputEnabled = true;// interactive image
			// update stars achieved
			var min = 43;// minimum moves to solution
			if (moveNum < min+1 && starsArray[13] < 3) starsArray[13] = 3;
			if (moveNum > min && moveNum < min+2 && starsArray[13] < 2) starsArray[13] = 2;
			if (moveNum > min+2 && starsArray[13] < 1) starsArray[13] = 1;
			console.log(moveNum);
			localStorage.setItem(starsArrayLSkey, JSON.stringify(starsArray));
			wellDone.events.onInputDown.add(nextLevel, this);// click event callback
		}
		function nextLevel(){
if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {sdk.showBanner()}
			console.log('LEVEL14 --> LEVEL15');
			if(starsArray[14] == 4) starsArray[14] = 0;
			localStorage.setItem(starsArrayLSkey, JSON.stringify(starsArray));
			this.game.state.start('level15');
		}
			
	},// --- END goalBoard() ------	
	

}// *** END Level14() ******************
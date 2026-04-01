var LevelSelect = function(){};
//variables here
var thumbRows = 5;// number of thumbnail rows
var thumbCols = 4;// number of thumbnail cololumns
var thumbWidth = 140;// width of a thumbnail, in pixels
var thumbHeight = 140;// height of a thumbnail, in pixels
var thumbSpacing = 15;// space among thumbnails, in pixels
var levelThumbsGroup;// thumbnails group container
// array with finished levels and stars collected.
// 0 = playable yet unfinished level
// 1, 2, 3 = level finished with 1, 2, 3 stars
// 4 = locked
var starsArray = [0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
var starsArrayLSkey = 'DoxxaSoftStarsArray01';

LevelSelect.prototype = {

preload: function() {
	// nothing to preload
	},// --- END preload() -----------


create: function() {
	//console.log(starsArray);
	// draw the background
	this.game.stage.setBackgroundColor(0x006766);
	var g = this.game.add.graphics(0,0);
	g.beginFill(0x0b4a49);	
	g.drawRect(30, 30, 660, 820);
	g.endFill();
	g.lineStyle(6, 0x000000, 1);
	g.moveTo(690, 33); g.lineTo(33, 33); g.lineTo(33, 850); 

	// back button
	var backBtn = this.game.add.button(Math.floor((this.game.width -220)/2), 950, 'backBtn', backClick, this, 2, 1, 0);
	function backClick(){
		this.game.state.start('gameTitle');
	}// --- END helpClick() --------	
	
	// adding the level thumbnails
	levelThumbsGroup = this.game.add.group();
	// determining page width and height
	var levelLength = thumbWidth*thumbCols+thumbSpacing*(thumbCols-1);
	var levelHeight = thumbWidth*thumbRows+thumbSpacing*(thumbRows-1);
	// horizontal offset to have level thumbnails horizontally centered in the page
	var offsetX = (this.game.width-levelLength)/2;
	// I am not interested in having level thumbnails vertically centered in the page, but
	// if you are, simple replace my "50" with
	// (game.height-levelHeight)/2
	var offsetY = 60;
	// looping through each level thumbnails
	for(var i = 0; i < thumbRows; i ++){
	    for(var j = 0; j < thumbCols; j ++){  
	     	// which level does the thumbnail refer?
			var levelNumber = i*thumbCols+j;
			// adding the thumbnail, as a button which will call thumbClicked function if clicked   		
			var levelThumb = this.game.add.button(offsetX+j*(thumbWidth+thumbSpacing), offsetY+i*(thumbHeight+thumbSpacing), "levels", this.thumbClicked, this);	
			//levelThumb.scale.setTo(1, 1);// remove this if you have 140 x 140 sprite
			// shwoing proper frame
			levelThumb.frame=starsArray[levelNumber];
			// custom attribute 
			levelThumb.levelNumber = levelNumber+1;
			// adding the level thumb to the group
			levelThumbsGroup.add(levelThumb);
			// if the level is playable, also write level number
			if(starsArray[levelNumber]<4){
				var style = {
					font: "48px Arial",
					fill: "#ffffff"
				};
				var levelText = this.game.add.text(levelThumb.x+5,levelThumb.y+5,levelNumber+1,style);
				levelText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 1);
				levelThumbsGroup.add(levelText);
			}
		}
	}

},// --- END create() ----------------

thumbClicked: function(button){
	// check if the level is playable
	if(button.frame < 4){
		
		switch(button.levelNumber){
			case 1:
				this.game.state.start('level01');
				console.log("playing level " + button.levelNumber);
				break;
			case 2:
				this.game.state.start('level02');
				console.log("playing level " + button.levelNumber);
				break;
			case 3: 
				this.game.state.start('level03');
				console.log("playing level " + button.levelNumber);
				break;
			case 4: 
				this.game.state.start('level04');
				console.log("playing level " + button.levelNumber);
				break;
			case 5:
				this.game.state.start('level05');
				console.log("playing level " + button.levelNumber);
				break;
			case 6:
				this.game.state.start('level06');
				console.log("playing level " + button.levelNumber);
				break;
			case 7: 
				this.game.state.start('level07');
				console.log("playing level " + button.levelNumber);
				break;
			case 8:
				this.game.state.start('level08');
				console.log("playing level " + button.levelNumber);
				break;
			case 9: 
				this.game.state.start('level09');
				console.log("playing level " + button.levelNumber);
				break;
			case 10: 
				this.game.state.start('level10');
				console.log("playing level " + button.levelNumber);
				break;
			case 11: 
				this.game.state.start('level11');
				console.log("playing level " + button.levelNumber);
				break;
			case 12: 
				this.game.state.start('level12');
				console.log("playing level " + button.levelNumber);
				break;
			case 13: 
				this.game.state.start('level13');
				console.log("playing level " + button.levelNumber);
				break;
			case 14: 
				this.game.state.start('level14');
				console.log("playing level " + button.levelNumber);
				break;
			case 15:
				this.game.state.start('level15');
				console.log("playing level " + button.levelNumber);
				break;
			case 16: 				
				// console.log("playing level " + button.levelNumber);
				break;
			case 17: 				
				// console.log("playing level " + button.levelNumber);
				break;
			case 18:
				// console.log("playing level " + button.levelNumber);
				break;
			case 19:
				// console.log("playing level " + button.levelNumber);
				break;
			case 20:
				// console.log("playing level " + button.levelNumber);
				break;
																																																																																																			
			default: break;
		}	
	} else {
		//shake the locked levels
		var buttonTween = this.game.add.tween(button);
		buttonTween.to({
			x: button.x+thumbWidth/15
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x-thumbWidth/15
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x+thumbWidth/15
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x-thumbWidth/15
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.start();
	}
}

}// *** END LevelSelect() *****************
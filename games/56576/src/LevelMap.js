BasicGame.LevelMap = function (game) {
    this.game;		//	a reference to the currently running game
    this.arrow = null;
    this.keyboardNavigation = null;

    this.menuBtn = null;
};


BasicGame.LevelMap.prototype = {
    create: function(){
        this.keyboardNavigation = new KeyboardNavigation();

        this.game.add.sprite(0,0,'menubg');
        var title = this.game.add.sprite(0,0,'select');
        title.anchor.set(0.5);
        title.x = this.game.world.width/2;
        title.y = 30;
		title.scale.set(.7);
        this.arrow = this.game.add.sprite(0,0,'arrow');
        this.arrow.anchor.set(0.5);
          this.arrow.angle = 0;
		   this.arrow.scale.set(.8);
           
        var r = 5;
        var c = 4;
        var l = 1;
        var ox = 80;
        var oy = 95;
        var firstItem = null;
        for(var i=0;i<r;i++){
            var rowelements = [];
            for(var j=0;j<c;j++){
                var xx = ox + j*55;
                var yy = oy + i*50;
                var lb = new LevelButton(this.game, xx, yy, l);
                lb.anchor.setTo(0.5);
                this.game.add.existing(lb);
               /* if(!BasicGame.hasLevelData(l)){
                    lb.alpha=.5
                   
                   // lb.disable();
                }else{
                    rowelements.push(lb);
                }*/
                if(!firstItem){
                    firstItem = lb;
                }
                l++;
            }
            if(rowelements.length > 0){
                this.keyboardNavigation.addRow(rowelements);
            }
        }

        this.keyboardNavigation.setSelectedItem(firstItem);


        this.menuBtn = this.game.add.sprite(0,0,'menuBtn');
        this.menuBtn.anchor.set(0.5);
        this.menuBtn.x = this.game.world.width/2;
        this.menuBtn.y = this.game.world.height - this.menuBtn.height;

        this.keyboardNavigation.addRow([this.menuBtn]);

        setTimeout(this.startKeyListening.bind(this), 200);
        this.updateArrowPosition();
    },

    startKeyListening: function(){
        this.game.input.keyboard.onDownCallback = function(e){
             if(e.keyCode == 38||e.keyCode ==50){
                this.keyboardNavigation.up();
            }
            if(e.keyCode == 40||e.keyCode ==56){
                this.keyboardNavigation.down();
            }
            if(e.keyCode == 37||e.keyCode ==52){
                this.keyboardNavigation.left();
            }
            if(e.keyCode == 39||e.keyCode ==54){
                this.keyboardNavigation.right();
            }
            if(e.keyCode == 13||e.keyCode ==53){
                this.doMenuAction();
            }if(e.keyCode == 0){
                this.gotoMenu();
            }
            this.updateArrowPosition();
        }.bind(this);
    },

    updateArrowPosition: function(){
        var target = this.keyboardNavigation.getSelectedItem();

        this.arrow.x = target.centerX;
        this.arrow.y = (target.centerY - target.height/2 - this.arrow.height/2);

        this.game.world.bringToTop(this.arrow);
    },

    doMenuAction: function(){
        var t = this.keyboardNavigation.getSelectedItem();
        if(t instanceof LevelButton){
            this.onLevelButtonClick(t);
        }
        if(t == this.menuBtn){
            this.gotoMenu();
        }
    },

    gotoMenu: function(){
        this.game.state.start("MainMenu");
    },

    onLevelButtonClick: function(b){
        BasicGame.Level = b.level;
        this.game.input.keyboard.onDownCallback=null;
       
       this.game.state.start('Game');
    }
}



var LevelButton = (function(){
    function LevelButton(game, x, y, level){

		var levelstext="levelbtn000"+level
			
        Phaser.Sprite.call(this, game, x, y, levelstext);
        this.scale.set(0.8);
       /* var style = { font: "bold 32px Arial", fill: "#395EAD", align: "center" };
        var text = new Phaser.Text(game, 0, 0, level, style);
        this.addChild(text);
        text.anchor.set(0.5);
        text.x = 0;*/

        this.level = level;
        this.disabled = false;
    }

    LevelButton.prototype = Object.create(Phaser.Sprite.prototype);
    LevelButton.prototype.constructor = LevelButton;

    LevelButton.prototype.disable = function() {
        this.disabled = true;
       // this.loadTexture('levelButtonInactive');
    }


    return LevelButton;
} ());
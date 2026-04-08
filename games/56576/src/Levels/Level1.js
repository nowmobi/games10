
var Level1 = function(game,groups){
	Phaser.Group.call(this,game);
	this.game=game;
	this.group1=groups;
 	var arrofOb=new Array();
	var lose=false;
	var playerTween;
	var cnt=0;
	this.init();
}
Level1.prototype = Object.create(Phaser.Group.prototype);
Level1.prototype.constructor = Level1;
Level1.prototype.init=function(){
	this.groups=this.game.add.group();
	this.group1.add(this.groups);
	this.levelarray1=new Array();
	arrofOb=new Array();
	this.cnt=0;
	lose=false;
	cnt=0;
//	this.resize();
	console.log(BasicGame.desk);
	if (BasicGame.desk)
    {
		this.groups.scale.set(1.5);
		this.groups.x=250
		this.groups.y=-150
	}else{
		this.groups.scale.set(1.2);
		this.groups.x=350
		this.groups.y=-50
	
	}
	this.game.physics.startSystem(Phaser.Physics.P2JS);	
	this.LevelAdd1();
}

Level1.prototype.LevelAdd1=function(){
	
	this.level1main = this.game.add.sprite(150, 280,'shapebase_level1');
	this.level1main.anchor.set(.5);
//	this.level1main.scale.set(.8);
	this.game.physics.p2.enable(this.level1main);
	this.level1main.name="ob"
	this.level1main.body.static = true;
	this.level1main.body.clearShapes();
	this.level1main.body.loadPolygon('sprite_physics', 'shapebase_level1'); 
	this.level1main.body.angle=0;

	this.groups.add(this.level1main);
	this.levelarray1.push(this.level1main)
	for(var i=1;i<4;i++){
		this.AddOriginalPiece(i);
	} 
this.AddPieces(220,380);
	//this.AddPieces(200,350);
	this.AddPieces(40,290);
	this.AddPieces(210,180);
	

}
Level1.prototype.AddOriginalPiece=function(cnts){
	var names='shapepiece'+cnts+'_level1';
	this.level1main1 = this.game.add.sprite(150, 280,names);
	this.level1main1.anchor.set(.5);
	//this.level1main1.scale.set(.8);
	this.game.physics.p2.enable(this.level1main1);
	this.level1main1.name="ob"+cnts
	this.level1main1.body.static = true;
	this.groups.add(this.level1main1);
	this.level1main1.body.clearShapes();
	this.level1main1.body.loadPolygon('sprite_physics', names);
	this.level1main1.body.angle=0;
	this.level1main1.alpha=0;
	this.levelarray1.push(this.level1main1)
}
Level1.prototype.AddPieces=function(x,y){
	cnt++;
	var names='piece'+cnt+'_level1';
	this.ob1 = this.game.add.sprite(x, y,names);
	this.ob1.anchor.set(.5);
	this.game.physics.p2.enable(this.ob1);
//	this.ob1.scale.set(.8);

	this.ob1.body.angle=0;
	this.ob1.name="ob"+cnt
	this.groups.add(this.ob1);
	this.ob1.hit=false;
	this.ob1.xpos=this.ob1.body.x;
	this.ob1.ypos=this.ob1.body.y;
	console.log(this.ob1.xpos,this.ob1.ypos);
    this.ob1.body.clearShapes();
	this.ob1.body.loadPolygon('sprite_physics', names);
	this.ob1.body.angle=0;
	arrofOb.push(this.ob1);

	this.ob1.body.onBeginContact.add(this.obHit, this);
	if(cnt>1){
		this.ob1.alpha=.4
	}
}
Level1.prototype.obHit=function(body1){
	if(this.game!=null&&this.game.playGame&&this.game.shoots&&this.game.lose==false){
	this.game.HitOn(body1.sprite,arrofOb)
	}
}
Level1.prototype.gotoClear=function(){
	this.destroy();
	console.log("clear"+this);
}
Level1.prototype.changesArr=function(){
	arrofOb.splice(0,1);
	arrofOb[0].alpha=1;
}
Level1.prototype.MoveUpToShoot=function(event){
	console.log(arrofOb.length,"");
	if(arrofOb.length!=0&&arrofOb[0].hit==false){
		this.game.lose=false;
	
		
		this.game.strings="hit1"
		arrofOb[0].body.static = false;
		var playerTween = this.game.add.tween(arrofOb[0].body).to({
			x: this.level1main.body.x,
			y: this.level1main.body.y
		}, 300, Phaser.Easing.Linear.None, true);  
		arrofOb[0].twee=playerTween;
		this.game.shoots=true;
	}

}

Level1.prototype.update=function(){
	
	for(var i=0;i<this.levelarray1.length;i++){
		this.levelarray1[i].body.rotation+=0.04;
	}

}


var Level15= function(game,groups){
	Phaser.Group.call(this,game);
	
   this.game=game;
   this.group1=groups;
  
  
	var rnds=0;
	var arrofOb=new Array();
	var lose=false;
	var cnt=0;

	var playerTween;
		this.init();
}

Level15.prototype = Object.create(Phaser.Group.prototype);
Level15.prototype.constructor = Level15;
Level15.prototype.init=function(){
	this.addgroup();
	this.levelarray1=new Array();
	arrofOb=new Array();
	cnt=0;
	lose=false;
	rnds=0;//Math.floor(1+Math.random()*2);
	this.game.physics.startSystem(Phaser.Physics.P2JS);	
	
	this.timeeventforchangeX=this.game.time.events.add(3000, this.counterchange, this);
	this.LevelAdd();
	
}
Level15.prototype.addgroup=function(){
	this.groups=this.game.add.group();
	this.group1.add(this.groups);
	if (BasicGame.desk)
    {
		this.groups.scale.set(1.5);
		this.groups.x=250
		this.groups.y=-30
	
	}else{
		this.groups.x=350
		this.groups.y=30
	this.groups.scale.set(1.1);
	}
}

Level15.prototype.counterchange=function(){
	if(this.timeeventforchangeX!=null){
		this.game.time.events.remove(this.timeeventforchangeX)
		}
		var rd=Math.floor(2000+Math.random()*4000);
		console.log(rnds);
		if(rnds==0){
			rnds=1;
			this.timeeventforchangeX=this.game.time.events.add(rd, this.counterchange, this);	
			
		}else if(rnds==1){
			rnds=0;
			
			this.timeeventforchangeX=this.game.time.events.add(rd, this.counterchange, this);
		}
}
Level15.prototype.LevelAdd=function(){
	this.level1main = this.game.add.sprite(150, 200,'shapebase_level15');
	this.level1main.anchor.set(.5);
	this.game.physics.p2.enable(this.level1main);
	this.groups.add(this.level1main);
	this.level1main.name="ob"
	this.level1main.body.static = true;
	this.level1main.body.clearShapes();
	this.level1main.body.loadPolygon('sprite_physics', 'shapebase_level15'); 
	this.level1main.body.angle=0;
	//
	this.levelarray1.push(this.level1main)
	for(var i=1;i<7;i++){
		this.AddOriginalPiece(i);
	}
	
	cnt=0;
 	this.AddPieces(30,205);
	 this.AddPieces(90,95);
 	this.AddPieces(215,100); 
	this.AddPieces(245,200);    
	this.AddPieces(205,296);    
	this.AddPieces(100,296);  
	this.shoot=false;
	

}

Level15.prototype.AddOriginalPiece=function(cnts){
	var names='shapepiece'+cnts+'_level15';
	this.level1main1 = this.game.add.sprite(150, 200,names);
	this.level1main1.anchor.set(.5);
	this.game.physics.p2.enable(this.level1main1);
	this.groups.add(this.level1main1);
	this.level1main1.name="ob"+cnts
	this.level1main1.body.static = true;
	this.level1main1.body.clearShapes();
	this.level1main1.body.loadPolygon('sprite_physics', names);
	this.level1main1.body.angle=0;
	this.level1main1.alpha=0;
	this.levelarray1.push(this.level1main1)
}
Level15.prototype.AddPieces=function(x,y){
	cnt++;
	var names='piece'+cnt+'_level15';
	this.ob1 = this.game.add.sprite(x, y,names);
	this.ob1.anchor.set(.5);
	this.game.physics.p2.enable(this.ob1);
	this.groups.add(this.ob1);
	this.ob1.body.angle=0;
	this.ob1.name="ob"+cnt
	this.ob1.hit=false;
	this.ob1.xpos=this.ob1.body.x;
	this.ob1.ypos=this.ob1.body.y;

    this.ob1.body.clearShapes();
	this.ob1.body.loadPolygon('sprite_physics', names);
	this.ob1.body.angle=0;
	arrofOb.push(this.ob1);
	this.ob1.body.onBeginContact.add(this.obHit, this);
	if(cnt>1){
		this.ob1.alpha=.4
	}
}
Level15.prototype.obHit=function(body1){
	console.log("ff",arrofOb);
	if(this.game!=null&&this.game.playGame&&this.game.shoots&&this.game.lose==false){
	this.game.HitOn(body1.sprite,arrofOb)
	}

	
}
Level15.prototype.gotoClear=function(){

	this.destroy();
}
Level15.prototype.changesArr=function(){
	arrofOb.splice(0,1);
	arrofOb[0].alpha=1;
}
Level15.prototype.MoveUpToShoot=function(){
	if(arrofOb.length!=0&&arrofOb[0].hit==false){
		this.game.lose=false;
		arrofOb[0].body.static = false;
		var playerTween = this.game.add.tween(arrofOb[0].body).to({
			x: this.level1main.body.x,
			y: this.level1main.body.y
		}, 300, Phaser.Easing.Linear.None, true);  
		arrofOb[0].twee=playerTween;
		this.game.shoots=true;
	}
}

Level15.prototype.update=function(){
	
	if(rnds==0){
		for(var i=0;i<this.levelarray1.length;i++){
	
			this.levelarray1[i].body.rotation+=0.05;
		}
	}else{
		for(var i=0;i<this.levelarray1.length;i++){
		
			this.levelarray1[i].body.rotation-=0.05;
		}
	}
}

	


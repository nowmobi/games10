gdjs.Level_324Code = {};
gdjs.Level_324Code.localVariables = [];
gdjs.Level_324Code.GDDuckObjects3_1final = [];

gdjs.Level_324Code.forEachIndex4 = 0;

gdjs.Level_324Code.forEachObjects4 = [];

gdjs.Level_324Code.forEachTemporary4 = null;

gdjs.Level_324Code.forEachTotalCount4 = 0;

gdjs.Level_324Code.GDDuckObjects1= [];
gdjs.Level_324Code.GDDuckObjects2= [];
gdjs.Level_324Code.GDDuckObjects3= [];
gdjs.Level_324Code.GDDuckObjects4= [];
gdjs.Level_324Code.GDBlockObjects1= [];
gdjs.Level_324Code.GDBlockObjects2= [];
gdjs.Level_324Code.GDBlockObjects3= [];
gdjs.Level_324Code.GDBlockObjects4= [];
gdjs.Level_324Code.GDKeyObjects1= [];
gdjs.Level_324Code.GDKeyObjects2= [];
gdjs.Level_324Code.GDKeyObjects3= [];
gdjs.Level_324Code.GDKeyObjects4= [];
gdjs.Level_324Code.GDDoorObjects1= [];
gdjs.Level_324Code.GDDoorObjects2= [];
gdjs.Level_324Code.GDDoorObjects3= [];
gdjs.Level_324Code.GDDoorObjects4= [];
gdjs.Level_324Code.GDSpikeObjects1= [];
gdjs.Level_324Code.GDSpikeObjects2= [];
gdjs.Level_324Code.GDSpikeObjects3= [];
gdjs.Level_324Code.GDSpikeObjects4= [];
gdjs.Level_324Code.GDDuckArtworkObjects1= [];
gdjs.Level_324Code.GDDuckArtworkObjects2= [];
gdjs.Level_324Code.GDDuckArtworkObjects3= [];
gdjs.Level_324Code.GDDuckArtworkObjects4= [];
gdjs.Level_324Code.GDLevelObjects1= [];
gdjs.Level_324Code.GDLevelObjects2= [];
gdjs.Level_324Code.GDLevelObjects3= [];
gdjs.Level_324Code.GDLevelObjects4= [];
gdjs.Level_324Code.GDSparkleParticleObjects1= [];
gdjs.Level_324Code.GDSparkleParticleObjects2= [];
gdjs.Level_324Code.GDSparkleParticleObjects3= [];
gdjs.Level_324Code.GDSparkleParticleObjects4= [];
gdjs.Level_324Code.GDCloudsObjects1= [];
gdjs.Level_324Code.GDCloudsObjects2= [];
gdjs.Level_324Code.GDCloudsObjects3= [];
gdjs.Level_324Code.GDCloudsObjects4= [];
gdjs.Level_324Code.GDDownButtonObjects1= [];
gdjs.Level_324Code.GDDownButtonObjects2= [];
gdjs.Level_324Code.GDDownButtonObjects3= [];
gdjs.Level_324Code.GDDownButtonObjects4= [];
gdjs.Level_324Code.GDNewLightObjects1= [];
gdjs.Level_324Code.GDNewLightObjects2= [];
gdjs.Level_324Code.GDNewLightObjects3= [];
gdjs.Level_324Code.GDNewLightObjects4= [];
gdjs.Level_324Code.GDNewLight2Objects1= [];
gdjs.Level_324Code.GDNewLight2Objects2= [];
gdjs.Level_324Code.GDNewLight2Objects3= [];
gdjs.Level_324Code.GDNewLight2Objects4= [];
gdjs.Level_324Code.GDNewLight3Objects1= [];
gdjs.Level_324Code.GDNewLight3Objects2= [];
gdjs.Level_324Code.GDNewLight3Objects3= [];
gdjs.Level_324Code.GDNewLight3Objects4= [];
gdjs.Level_324Code.GDFireObjects1= [];
gdjs.Level_324Code.GDFireObjects2= [];
gdjs.Level_324Code.GDFireObjects3= [];
gdjs.Level_324Code.GDFireObjects4= [];
gdjs.Level_324Code.GDDoorLightObjects1= [];
gdjs.Level_324Code.GDDoorLightObjects2= [];
gdjs.Level_324Code.GDDoorLightObjects3= [];
gdjs.Level_324Code.GDDoorLightObjects4= [];


gdjs.Level_324Code.userFunc0xa000a8 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
sdk.showBanner();
}
};
gdjs.Level_324Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level_324Code.userFunc0xa000a8(runtimeScene);

}


};gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewLight3Objects4Objects = Hashtable.newFrom({"NewLight3": gdjs.Level_324Code.GDNewLight3Objects4});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDFireObjects4Objects = Hashtable.newFrom({"Fire": gdjs.Level_324Code.GDFireObjects4});
gdjs.Level_324Code.eventsList1 = function(runtimeScene) {

};gdjs.Level_324Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_324Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spike"), gdjs.Level_324Code.GDSpikeObjects3);

for (gdjs.Level_324Code.forEachIndex4 = 0;gdjs.Level_324Code.forEachIndex4 < gdjs.Level_324Code.GDSpikeObjects3.length;++gdjs.Level_324Code.forEachIndex4) {
gdjs.Level_324Code.GDFireObjects4.length = 0;

gdjs.Level_324Code.GDNewLight3Objects4.length = 0;

gdjs.Level_324Code.GDSpikeObjects4.length = 0;


gdjs.Level_324Code.forEachTemporary4 = gdjs.Level_324Code.GDSpikeObjects3[gdjs.Level_324Code.forEachIndex4];
gdjs.Level_324Code.GDSpikeObjects4.push(gdjs.Level_324Code.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDNewLight3Objects4Objects, (( gdjs.Level_324Code.GDSpikeObjects4.length === 0 ) ? 0 :gdjs.Level_324Code.GDSpikeObjects4[0].getPointX("Center")), (( gdjs.Level_324Code.GDSpikeObjects4.length === 0 ) ? 0 :gdjs.Level_324Code.GDSpikeObjects4[0].getPointY("Center")), "Lighting");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDFireObjects4Objects, (( gdjs.Level_324Code.GDSpikeObjects4.length === 0 ) ? 0 :gdjs.Level_324Code.GDSpikeObjects4[0].getPointX("Center")), (( gdjs.Level_324Code.GDSpikeObjects4.length === 0 ) ? 0 :gdjs.Level_324Code.GDSpikeObjects4[0].getPointY("Center")), "Objects");
}{for(var i = 0, len = gdjs.Level_324Code.GDFireObjects4.length ;i < len;++i) {
    gdjs.Level_324Code.GDFireObjects4[i].setAngle(270);
}
}}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 2));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\How Far We've Come - Cooper Cannell.mp3", 2, false, 40, 1);
}}

}


};gdjs.Level_324Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewLight"), gdjs.Level_324Code.GDNewLightObjects2);
{for(var i = 0, len = gdjs.Level_324Code.GDNewLightObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewLightObjects2[i].setPosition((( gdjs.Level_324Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_324Code.GDDuckObjects2[0].getPointX("")),(( gdjs.Level_324Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_324Code.GDDuckObjects2[0].getPointY("")) - 20);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 2);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}
{ //Subevents
gdjs.Level_324Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects1);
gdjs.copyArray(runtimeScene.getObjects("Level"), gdjs.Level_324Code.GDLevelObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewLight3"), gdjs.Level_324Code.GDNewLight3Objects1);
{for(var i = 0, len = gdjs.Level_324Code.GDNewLight3Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewLight3Objects1[i].setRadius(gdjs.randomInRange(70, 80));
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{for(var i = 0, len = gdjs.Level_324Code.GDLevelObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDLevelObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckObjects1[i].hide();
}
}}

}


};gdjs.Level_324Code.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDDuckObjects3.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDDuckObjects3[k] = gdjs.Level_324Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDDuckObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDDuckObjects3.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDDuckObjects3[k] = gdjs.Level_324Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDDuckObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11860900);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_324Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects3[i].setAnimationName("Walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDDuckObjects3.length;i<l;++i) {
    if ( !(gdjs.Level_324Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDDuckObjects3[k] = gdjs.Level_324Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDDuckObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11862044);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_324Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects3[i].setAnimationName("Idle");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_324Code.GDDownButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_324Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects3[i].setPosition((( gdjs.Level_324Code.GDDuckObjects3.length === 0 ) ? 0 :gdjs.Level_324Code.GDDuckObjects3[0].getPointX("")) + 32,(( gdjs.Level_324Code.GDDuckObjects3.length === 0 ) ? 0 :gdjs.Level_324Code.GDDuckObjects3[0].getPointY("")) - 5);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDownButtonObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDownButtonObjects3[i].setPosition((( gdjs.Level_324Code.GDDuckObjects3.length === 0 ) ? 0 :gdjs.Level_324Code.GDDuckObjects3[0].getPointX("")) - 32,(( gdjs.Level_324Code.GDDuckObjects3.length === 0 ) ? 0 :gdjs.Level_324Code.GDDuckObjects3[0].getPointY("")) - 150);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}}

}


};gdjs.Level_324Code.eventsList5 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11869940);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDDuckObjects3 */
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_324Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_324Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckObjects3[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{runtimeScene.getScene().getVariables().get("JumpsRemaining").sub(1);
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects3[i].setHeight(55);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects3[i].setWidth(70);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects3[i].getBehavior("Tween").addObjectWidthTween("Squash Jump", 64, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects3[i].getBehavior("Tween").addObjectHeightTween("Stretch Jump", 64, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckObjects3[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


};gdjs.Level_324Code.eventsList6 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_324Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects3[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_324Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects3[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{



}


{

gdjs.Level_324Code.GDDuckObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Level_324Code.GDDuckObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects4);
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDDuckObjects4.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDDuckObjects4[i].getBehavior("PlatformerObject").canJump() ) {
        isConditionTrue_1 = true;
        gdjs.Level_324Code.GDDuckObjects4[k] = gdjs.Level_324Code.GDDuckObjects4[i];
        ++k;
    }
}
gdjs.Level_324Code.GDDuckObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_324Code.GDDuckObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Level_324Code.GDDuckObjects3_1final.indexOf(gdjs.Level_324Code.GDDuckObjects4[j]) === -1 )
            gdjs.Level_324Code.GDDuckObjects3_1final.push(gdjs.Level_324Code.GDDuckObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects4);
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDDuckObjects4.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDDuckObjects4[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_1 = true;
        gdjs.Level_324Code.GDDuckObjects4[k] = gdjs.Level_324Code.GDDuckObjects4[i];
        ++k;
    }
}
gdjs.Level_324Code.GDDuckObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_324Code.GDDuckObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Level_324Code.GDDuckObjects3_1final.indexOf(gdjs.Level_324Code.GDDuckObjects4[j]) === -1 )
            gdjs.Level_324Code.GDDuckObjects3_1final.push(gdjs.Level_324Code.GDDuckObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_324Code.GDDuckObjects3_1final, gdjs.Level_324Code.GDDuckObjects3);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("JumpsRemaining")) > 0;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_324Code.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDDuckObjects2.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDDuckObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDDuckObjects2[k] = gdjs.Level_324Code.GDDuckObjects2[i];
        ++k;
    }
}
gdjs.Level_324Code.GDDuckObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("JumpsRemaining")) != 1;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("JumpsRemaining").setNumber(2);
}}

}


};gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_324Code.GDDuckObjects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDSpikeObjects2Objects = Hashtable.newFrom({"Spike": gdjs.Level_324Code.GDSpikeObjects2});
gdjs.Level_324Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.random(100) < 25);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


};gdjs.Level_324Code.eventsList8 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects2);
gdjs.copyArray(runtimeScene.getObjects("Spike"), gdjs.Level_324Code.GDSpikeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects2Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDSpikeObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11874060);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDDuckObjects2 */
{runtimeScene.getScene().getVariables().get("Key").setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\laserLarge_002.ogg", false, 30, 1);
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level_324Code.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Level_324Code.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDDuckObjects2.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDDuckObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDDuckObjects2[k] = gdjs.Level_324Code.GDDuckObjects2[i];
        ++k;
    }
}
gdjs.Level_324Code.GDDuckObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11878740);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_324Code.GDDuckArtworkObjects2);
{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects2[i].setHeight(50);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects2[i].setWidth(100);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects2[i].getBehavior("Tween").addObjectHeightTween("Stretch", 64, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects2[i].getBehavior("Tween").addObjectWidthTween("Squash", 64, "linear", 80, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDDuckObjects1.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDDuckObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDDuckObjects1[k] = gdjs.Level_324Code.GDDuckObjects1[i];
        ++k;
    }
}
gdjs.Level_324Code.GDDuckObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11880052);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_324Code.GDDuckArtworkObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects1[i].getBehavior("Tween").addObjectHeightTween("Stretch Air", 75, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects1[i].getBehavior("Tween").addObjectWidthTween("Squash Air", 50, "linear", 80, false);
}
}}

}


};gdjs.Level_324Code.eventsList10 = function(runtimeScene) {

{


gdjs.Level_324Code.eventsList4(runtimeScene);
}


{


gdjs.Level_324Code.eventsList6(runtimeScene);
}


{


gdjs.Level_324Code.eventsList8(runtimeScene);
}


{


gdjs.Level_324Code.eventsList9(runtimeScene);
}


};gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_324Code.GDDuckObjects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDKeyObjects2Objects = Hashtable.newFrom({"Key": gdjs.Level_324Code.GDKeyObjects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDSparkleParticleObjects2Objects = Hashtable.newFrom({"SparkleParticle": gdjs.Level_324Code.GDSparkleParticleObjects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_324Code.GDDuckObjects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Level_324Code.GDDoorObjects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_324Code.GDDuckObjects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Level_324Code.GDDoorObjects2});
gdjs.Level_324Code.eventsList11 = function(runtimeScene) {

{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11887180);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), false);
}}

}


};gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects1Objects = Hashtable.newFrom({"Duck": gdjs.Level_324Code.GDDuckObjects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level_324Code.GDDoorObjects1});
gdjs.Level_324Code.eventsList12 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects2);
gdjs.copyArray(runtimeScene.getObjects("Key"), gdjs.Level_324Code.GDKeyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects2Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDKeyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDKeyObjects2 */
gdjs.Level_324Code.GDSparkleParticleObjects2.length = 0;

{runtimeScene.getScene().getVariables().get("Key").setNumber(1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDSparkleParticleObjects2Objects, (( gdjs.Level_324Code.GDKeyObjects2.length === 0 ) ? 0 :gdjs.Level_324Code.GDKeyObjects2[0].getPointX("Center")), (( gdjs.Level_324Code.GDKeyObjects2.length === 0 ) ? 0 :gdjs.Level_324Code.GDKeyObjects2[0].getPointY("Center")), "Player");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Key.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.Level_324Code.GDKeyObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDKeyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_324Code.GDDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects2Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDoorObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Key")) > 0;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDDoorObjects2 */
{for(var i = 0, len = gdjs.Level_324Code.GDDoorObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDDoorObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\doorOpen_001.ogg", false, 50, 1);
}{runtimeScene.getScene().getVariables().get("Key").setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_324Code.GDDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects2Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDoorObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDDoorObjects2.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDDoorObjects2[i].isCurrentAnimationName("Unlocked") ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDDoorObjects2[k] = gdjs.Level_324Code.GDDoorObjects2[i];
        ++k;
    }
}
gdjs.Level_324Code.GDDoorObjects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_324Code.GDDownButtonObjects2);
/* Reuse gdjs.Level_324Code.GDDuckObjects2 */
{for(var i = 0, len = gdjs.Level_324Code.GDDownButtonObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDDownButtonObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDownButtonObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDDownButtonObjects2[i].setPosition((( gdjs.Level_324Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_324Code.GDDuckObjects2[0].getPointX("")) - 32,(( gdjs.Level_324Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_324Code.GDDuckObjects2[0].getPointY("")) - 150);
}
}
{ //Subevents
gdjs.Level_324Code.eventsList11(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_324Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects1Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDoorObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11887980);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_324Code.GDDownButtonObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDDownButtonObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDDownButtonObjects1[i].hide();
}
}}

}


};gdjs.Level_324Code.eventsList13 = function(runtimeScene) {

{



}


{


gdjs.Level_324Code.eventsList3(runtimeScene);
}


{


gdjs.Level_324Code.eventsList10(runtimeScene);
}


{


gdjs.Level_324Code.eventsList12(runtimeScene);
}


};

gdjs.Level_324Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_324Code.GDDuckObjects1.length = 0;
gdjs.Level_324Code.GDDuckObjects2.length = 0;
gdjs.Level_324Code.GDDuckObjects3.length = 0;
gdjs.Level_324Code.GDDuckObjects4.length = 0;
gdjs.Level_324Code.GDBlockObjects1.length = 0;
gdjs.Level_324Code.GDBlockObjects2.length = 0;
gdjs.Level_324Code.GDBlockObjects3.length = 0;
gdjs.Level_324Code.GDBlockObjects4.length = 0;
gdjs.Level_324Code.GDKeyObjects1.length = 0;
gdjs.Level_324Code.GDKeyObjects2.length = 0;
gdjs.Level_324Code.GDKeyObjects3.length = 0;
gdjs.Level_324Code.GDKeyObjects4.length = 0;
gdjs.Level_324Code.GDDoorObjects1.length = 0;
gdjs.Level_324Code.GDDoorObjects2.length = 0;
gdjs.Level_324Code.GDDoorObjects3.length = 0;
gdjs.Level_324Code.GDDoorObjects4.length = 0;
gdjs.Level_324Code.GDSpikeObjects1.length = 0;
gdjs.Level_324Code.GDSpikeObjects2.length = 0;
gdjs.Level_324Code.GDSpikeObjects3.length = 0;
gdjs.Level_324Code.GDSpikeObjects4.length = 0;
gdjs.Level_324Code.GDDuckArtworkObjects1.length = 0;
gdjs.Level_324Code.GDDuckArtworkObjects2.length = 0;
gdjs.Level_324Code.GDDuckArtworkObjects3.length = 0;
gdjs.Level_324Code.GDDuckArtworkObjects4.length = 0;
gdjs.Level_324Code.GDLevelObjects1.length = 0;
gdjs.Level_324Code.GDLevelObjects2.length = 0;
gdjs.Level_324Code.GDLevelObjects3.length = 0;
gdjs.Level_324Code.GDLevelObjects4.length = 0;
gdjs.Level_324Code.GDSparkleParticleObjects1.length = 0;
gdjs.Level_324Code.GDSparkleParticleObjects2.length = 0;
gdjs.Level_324Code.GDSparkleParticleObjects3.length = 0;
gdjs.Level_324Code.GDSparkleParticleObjects4.length = 0;
gdjs.Level_324Code.GDCloudsObjects1.length = 0;
gdjs.Level_324Code.GDCloudsObjects2.length = 0;
gdjs.Level_324Code.GDCloudsObjects3.length = 0;
gdjs.Level_324Code.GDCloudsObjects4.length = 0;
gdjs.Level_324Code.GDDownButtonObjects1.length = 0;
gdjs.Level_324Code.GDDownButtonObjects2.length = 0;
gdjs.Level_324Code.GDDownButtonObjects3.length = 0;
gdjs.Level_324Code.GDDownButtonObjects4.length = 0;
gdjs.Level_324Code.GDNewLightObjects1.length = 0;
gdjs.Level_324Code.GDNewLightObjects2.length = 0;
gdjs.Level_324Code.GDNewLightObjects3.length = 0;
gdjs.Level_324Code.GDNewLightObjects4.length = 0;
gdjs.Level_324Code.GDNewLight2Objects1.length = 0;
gdjs.Level_324Code.GDNewLight2Objects2.length = 0;
gdjs.Level_324Code.GDNewLight2Objects3.length = 0;
gdjs.Level_324Code.GDNewLight2Objects4.length = 0;
gdjs.Level_324Code.GDNewLight3Objects1.length = 0;
gdjs.Level_324Code.GDNewLight3Objects2.length = 0;
gdjs.Level_324Code.GDNewLight3Objects3.length = 0;
gdjs.Level_324Code.GDNewLight3Objects4.length = 0;
gdjs.Level_324Code.GDFireObjects1.length = 0;
gdjs.Level_324Code.GDFireObjects2.length = 0;
gdjs.Level_324Code.GDFireObjects3.length = 0;
gdjs.Level_324Code.GDFireObjects4.length = 0;
gdjs.Level_324Code.GDDoorLightObjects1.length = 0;
gdjs.Level_324Code.GDDoorLightObjects2.length = 0;
gdjs.Level_324Code.GDDoorLightObjects3.length = 0;
gdjs.Level_324Code.GDDoorLightObjects4.length = 0;

gdjs.Level_324Code.eventsList13(runtimeScene);
gdjs.Level_324Code.GDDuckObjects1.length = 0;
gdjs.Level_324Code.GDDuckObjects2.length = 0;
gdjs.Level_324Code.GDDuckObjects3.length = 0;
gdjs.Level_324Code.GDDuckObjects4.length = 0;
gdjs.Level_324Code.GDBlockObjects1.length = 0;
gdjs.Level_324Code.GDBlockObjects2.length = 0;
gdjs.Level_324Code.GDBlockObjects3.length = 0;
gdjs.Level_324Code.GDBlockObjects4.length = 0;
gdjs.Level_324Code.GDKeyObjects1.length = 0;
gdjs.Level_324Code.GDKeyObjects2.length = 0;
gdjs.Level_324Code.GDKeyObjects3.length = 0;
gdjs.Level_324Code.GDKeyObjects4.length = 0;
gdjs.Level_324Code.GDDoorObjects1.length = 0;
gdjs.Level_324Code.GDDoorObjects2.length = 0;
gdjs.Level_324Code.GDDoorObjects3.length = 0;
gdjs.Level_324Code.GDDoorObjects4.length = 0;
gdjs.Level_324Code.GDSpikeObjects1.length = 0;
gdjs.Level_324Code.GDSpikeObjects2.length = 0;
gdjs.Level_324Code.GDSpikeObjects3.length = 0;
gdjs.Level_324Code.GDSpikeObjects4.length = 0;
gdjs.Level_324Code.GDDuckArtworkObjects1.length = 0;
gdjs.Level_324Code.GDDuckArtworkObjects2.length = 0;
gdjs.Level_324Code.GDDuckArtworkObjects3.length = 0;
gdjs.Level_324Code.GDDuckArtworkObjects4.length = 0;
gdjs.Level_324Code.GDLevelObjects1.length = 0;
gdjs.Level_324Code.GDLevelObjects2.length = 0;
gdjs.Level_324Code.GDLevelObjects3.length = 0;
gdjs.Level_324Code.GDLevelObjects4.length = 0;
gdjs.Level_324Code.GDSparkleParticleObjects1.length = 0;
gdjs.Level_324Code.GDSparkleParticleObjects2.length = 0;
gdjs.Level_324Code.GDSparkleParticleObjects3.length = 0;
gdjs.Level_324Code.GDSparkleParticleObjects4.length = 0;
gdjs.Level_324Code.GDCloudsObjects1.length = 0;
gdjs.Level_324Code.GDCloudsObjects2.length = 0;
gdjs.Level_324Code.GDCloudsObjects3.length = 0;
gdjs.Level_324Code.GDCloudsObjects4.length = 0;
gdjs.Level_324Code.GDDownButtonObjects1.length = 0;
gdjs.Level_324Code.GDDownButtonObjects2.length = 0;
gdjs.Level_324Code.GDDownButtonObjects3.length = 0;
gdjs.Level_324Code.GDDownButtonObjects4.length = 0;
gdjs.Level_324Code.GDNewLightObjects1.length = 0;
gdjs.Level_324Code.GDNewLightObjects2.length = 0;
gdjs.Level_324Code.GDNewLightObjects3.length = 0;
gdjs.Level_324Code.GDNewLightObjects4.length = 0;
gdjs.Level_324Code.GDNewLight2Objects1.length = 0;
gdjs.Level_324Code.GDNewLight2Objects2.length = 0;
gdjs.Level_324Code.GDNewLight2Objects3.length = 0;
gdjs.Level_324Code.GDNewLight2Objects4.length = 0;
gdjs.Level_324Code.GDNewLight3Objects1.length = 0;
gdjs.Level_324Code.GDNewLight3Objects2.length = 0;
gdjs.Level_324Code.GDNewLight3Objects3.length = 0;
gdjs.Level_324Code.GDNewLight3Objects4.length = 0;
gdjs.Level_324Code.GDFireObjects1.length = 0;
gdjs.Level_324Code.GDFireObjects2.length = 0;
gdjs.Level_324Code.GDFireObjects3.length = 0;
gdjs.Level_324Code.GDFireObjects4.length = 0;
gdjs.Level_324Code.GDDoorLightObjects1.length = 0;
gdjs.Level_324Code.GDDoorLightObjects2.length = 0;
gdjs.Level_324Code.GDDoorLightObjects3.length = 0;
gdjs.Level_324Code.GDDoorLightObjects4.length = 0;


return;

}

gdjs['Level_324Code'] = gdjs.Level_324Code;

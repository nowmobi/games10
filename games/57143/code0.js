gdjs.Title_32ScreenCode = {};
gdjs.Title_32ScreenCode.localVariables = [];
gdjs.Title_32ScreenCode.GDTitlescreenObjects1= [];
gdjs.Title_32ScreenCode.GDTitlescreenObjects2= [];
gdjs.Title_32ScreenCode.GDStartGameObjects1= [];
gdjs.Title_32ScreenCode.GDStartGameObjects2= [];


gdjs.Title_32ScreenCode.userFunc0xae2a70 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
sdk.showBanner();
}
};
gdjs.Title_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Title_32ScreenCode.userFunc0xae2a70(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.Title_32ScreenCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11840788);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}
{ //Subevents
gdjs.Title_32ScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartGame"), gdjs.Title_32ScreenCode.GDStartGameObjects1);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDStartGameObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDStartGameObjects1[i].getBehavior("Flash").Flash(1000000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}}

}


};

gdjs.Title_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32ScreenCode.GDTitlescreenObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTitlescreenObjects2.length = 0;
gdjs.Title_32ScreenCode.GDStartGameObjects1.length = 0;
gdjs.Title_32ScreenCode.GDStartGameObjects2.length = 0;

gdjs.Title_32ScreenCode.eventsList1(runtimeScene);
gdjs.Title_32ScreenCode.GDTitlescreenObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTitlescreenObjects2.length = 0;
gdjs.Title_32ScreenCode.GDStartGameObjects1.length = 0;
gdjs.Title_32ScreenCode.GDStartGameObjects2.length = 0;


return;

}

gdjs['Title_32ScreenCode'] = gdjs.Title_32ScreenCode;

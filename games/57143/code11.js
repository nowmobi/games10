gdjs.Level_3211Code = {};
gdjs.Level_3211Code.localVariables = [];
gdjs.Level_3211Code.GDTheEndObjects1= [];
gdjs.Level_3211Code.GDTheEndObjects2= [];
gdjs.Level_3211Code.GDBackgroundObjects1= [];
gdjs.Level_3211Code.GDBackgroundObjects2= [];
gdjs.Level_3211Code.GDDuckObjects1= [];
gdjs.Level_3211Code.GDDuckObjects2= [];
gdjs.Level_3211Code.GDNewLightObjects1= [];
gdjs.Level_3211Code.GDNewLightObjects2= [];


gdjs.Level_3211Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "TheEnd.mp3", 1, false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Screen", false);
}{/* Unknown instruction - skipped. */}}

}


};

gdjs.Level_3211Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_3211Code.GDTheEndObjects1.length = 0;
gdjs.Level_3211Code.GDTheEndObjects2.length = 0;
gdjs.Level_3211Code.GDBackgroundObjects1.length = 0;
gdjs.Level_3211Code.GDBackgroundObjects2.length = 0;
gdjs.Level_3211Code.GDDuckObjects1.length = 0;
gdjs.Level_3211Code.GDDuckObjects2.length = 0;
gdjs.Level_3211Code.GDNewLightObjects1.length = 0;
gdjs.Level_3211Code.GDNewLightObjects2.length = 0;

gdjs.Level_3211Code.eventsList0(runtimeScene);
gdjs.Level_3211Code.GDTheEndObjects1.length = 0;
gdjs.Level_3211Code.GDTheEndObjects2.length = 0;
gdjs.Level_3211Code.GDBackgroundObjects1.length = 0;
gdjs.Level_3211Code.GDBackgroundObjects2.length = 0;
gdjs.Level_3211Code.GDDuckObjects1.length = 0;
gdjs.Level_3211Code.GDDuckObjects2.length = 0;
gdjs.Level_3211Code.GDNewLightObjects1.length = 0;
gdjs.Level_3211Code.GDNewLightObjects2.length = 0;


return;

}

gdjs['Level_3211Code'] = gdjs.Level_3211Code;

gdjs.finCode = {};
gdjs.finCode.localVariables = [];
gdjs.finCode.GDupsObjects1= [];
gdjs.finCode.GDupsObjects2= [];
gdjs.finCode.GDbtnHomeObjects1= [];
gdjs.finCode.GDbtnHomeObjects2= [];
gdjs.finCode.GDpuntosObjects1= [];
gdjs.finCode.GDpuntosObjects2= [];
gdjs.finCode.GDrecordObjects1= [];
gdjs.finCode.GDrecordObjects2= [];
gdjs.finCode.GDpaintEfectoObjects1= [];
gdjs.finCode.GDpaintEfectoObjects2= [];
gdjs.finCode.GDfondoObjects1= [];
gdjs.finCode.GDfondoObjects2= [];


gdjs.finCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() > runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
/* Reuse gdjs.finCode.GDupsObjects1 */
{for(var i = 0, len = gdjs.finCode.GDupsObjects1.length ;i < len;++i) {
    gdjs.finCode.GDupsObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.storage.readNumberFromJSONFile("juego", "max", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}{gdjs.evtTools.storage.writeNumberInJSONFile("juego", "max", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}}

}


};gdjs.finCode.mapOfGDgdjs_9546finCode_9546GDbtnHomeObjects1Objects = Hashtable.newFrom({"btnHome": gdjs.finCode.GDbtnHomeObjects1});
gdjs.finCode.mapOfGDgdjs_9546finCode_9546GDbtnHomeObjects1Objects = Hashtable.newFrom({"btnHome": gdjs.finCode.GDbtnHomeObjects1});
gdjs.finCode.mapOfGDgdjs_9546finCode_9546GDbtnHomeObjects1Objects = Hashtable.newFrom({"btnHome": gdjs.finCode.GDbtnHomeObjects1});
gdjs.finCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("paintEfecto"), gdjs.finCode.GDpaintEfectoObjects1);
gdjs.copyArray(runtimeScene.getObjects("puntos"), gdjs.finCode.GDpuntosObjects1);
gdjs.copyArray(runtimeScene.getObjects("record"), gdjs.finCode.GDrecordObjects1);
gdjs.copyArray(runtimeScene.getObjects("ups"), gdjs.finCode.GDupsObjects1);
{for(var i = 0, len = gdjs.finCode.GDpaintEfectoObjects1.length ;i < len;++i) {
    gdjs.finCode.GDpaintEfectoObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("5;102;98", 0.5, "Vertical", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.finCode.GDupsObjects1.length ;i < len;++i) {
    gdjs.finCode.GDupsObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}{for(var i = 0, len = gdjs.finCode.GDpuntosObjects1.length ;i < len;++i) {
    gdjs.finCode.GDpuntosObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}{for(var i = 0, len = gdjs.finCode.GDrecordObjects1.length ;i < len;++i) {
    gdjs.finCode.GDrecordObjects1[i].getBehavior("Text").setText("Max: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()));
}
}
{ //Subevents
gdjs.finCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.finCode.GDfondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ups"), gdjs.finCode.GDupsObjects1);
{for(var i = 0, len = gdjs.finCode.GDupsObjects1.length ;i < len;++i) {
    gdjs.finCode.GDupsObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.finCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.finCode.GDfondoObjects1[i].setYOffset(gdjs.finCode.GDfondoObjects1[i].getYOffset() - (0.4));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnHome"), gdjs.finCode.GDbtnHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.finCode.mapOfGDgdjs_9546finCode_9546GDbtnHomeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.finCode.GDbtnHomeObjects1 */
{for(var i = 0, len = gdjs.finCode.GDbtnHomeObjects1.length ;i < len;++i) {
    gdjs.finCode.GDbtnHomeObjects1[i].setColor("105;255;187");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnHome"), gdjs.finCode.GDbtnHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.finCode.mapOfGDgdjs_9546finCode_9546GDbtnHomeObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.finCode.GDbtnHomeObjects1 */
{for(var i = 0, len = gdjs.finCode.GDbtnHomeObjects1.length ;i < len;++i) {
    gdjs.finCode.GDbtnHomeObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnHome"), gdjs.finCode.GDbtnHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.finCode.mapOfGDgdjs_9546finCode_9546GDbtnHomeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("paintEfecto"), gdjs.finCode.GDpaintEfectoObjects1);
{for(var i = 0, len = gdjs.finCode.GDpaintEfectoObjects1.length ;i < len;++i) {
    gdjs.finCode.GDpaintEfectoObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("5;102;98", 0.5, "Vertical", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "seleccion.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("paintEfecto"), gdjs.finCode.GDpaintEfectoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.finCode.GDpaintEfectoObjects1.length;i<l;++i) {
    if ( gdjs.finCode.GDpaintEfectoObjects1[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.finCode.GDpaintEfectoObjects1[k] = gdjs.finCode.GDpaintEfectoObjects1[i];
        ++k;
    }
}
gdjs.finCode.GDpaintEfectoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "inicio", true);
}}

}


};

gdjs.finCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.finCode.GDupsObjects1.length = 0;
gdjs.finCode.GDupsObjects2.length = 0;
gdjs.finCode.GDbtnHomeObjects1.length = 0;
gdjs.finCode.GDbtnHomeObjects2.length = 0;
gdjs.finCode.GDpuntosObjects1.length = 0;
gdjs.finCode.GDpuntosObjects2.length = 0;
gdjs.finCode.GDrecordObjects1.length = 0;
gdjs.finCode.GDrecordObjects2.length = 0;
gdjs.finCode.GDpaintEfectoObjects1.length = 0;
gdjs.finCode.GDpaintEfectoObjects2.length = 0;
gdjs.finCode.GDfondoObjects1.length = 0;
gdjs.finCode.GDfondoObjects2.length = 0;

gdjs.finCode.eventsList1(runtimeScene);
gdjs.finCode.GDupsObjects1.length = 0;
gdjs.finCode.GDupsObjects2.length = 0;
gdjs.finCode.GDbtnHomeObjects1.length = 0;
gdjs.finCode.GDbtnHomeObjects2.length = 0;
gdjs.finCode.GDpuntosObjects1.length = 0;
gdjs.finCode.GDpuntosObjects2.length = 0;
gdjs.finCode.GDrecordObjects1.length = 0;
gdjs.finCode.GDrecordObjects2.length = 0;
gdjs.finCode.GDpaintEfectoObjects1.length = 0;
gdjs.finCode.GDpaintEfectoObjects2.length = 0;
gdjs.finCode.GDfondoObjects1.length = 0;
gdjs.finCode.GDfondoObjects2.length = 0;


return;

}

gdjs['finCode'] = gdjs.finCode;

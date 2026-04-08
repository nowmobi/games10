gdjs.inicioCode = {};
gdjs.inicioCode.localVariables = [];
gdjs.inicioCode.GDlogoObjects1= [];
gdjs.inicioCode.GDlogoObjects2= [];
gdjs.inicioCode.GDbtnNormalObjects1= [];
gdjs.inicioCode.GDbtnNormalObjects2= [];
gdjs.inicioCode.GDbtnRelaxObjects1= [];
gdjs.inicioCode.GDbtnRelaxObjects2= [];
gdjs.inicioCode.GDbtnExtremeObjects1= [];
gdjs.inicioCode.GDbtnExtremeObjects2= [];
gdjs.inicioCode.GDpaintEfectoObjects1= [];
gdjs.inicioCode.GDpaintEfectoObjects2= [];
gdjs.inicioCode.GDfondoObjects1= [];
gdjs.inicioCode.GDfondoObjects2= [];


gdjs.inicioCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.readNumberFromJSONFile("juego", "max", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}}

}


};gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnNormalObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnRelaxObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnExtremeObjects1Objects = Hashtable.newFrom({"btnNormal": gdjs.inicioCode.GDbtnNormalObjects1, "btnRelax": gdjs.inicioCode.GDbtnRelaxObjects1, "btnExtreme": gdjs.inicioCode.GDbtnExtremeObjects1});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnNormalObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnRelaxObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnExtremeObjects1Objects = Hashtable.newFrom({"btnNormal": gdjs.inicioCode.GDbtnNormalObjects1, "btnRelax": gdjs.inicioCode.GDbtnRelaxObjects1, "btnExtreme": gdjs.inicioCode.GDbtnExtremeObjects1});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnNormalObjects1Objects = Hashtable.newFrom({"btnNormal": gdjs.inicioCode.GDbtnNormalObjects1});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnRelaxObjects1Objects = Hashtable.newFrom({"btnRelax": gdjs.inicioCode.GDbtnRelaxObjects1});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnExtremeObjects1Objects = Hashtable.newFrom({"btnExtreme": gdjs.inicioCode.GDbtnExtremeObjects1});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnNormalObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnRelaxObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnExtremeObjects1Objects = Hashtable.newFrom({"btnNormal": gdjs.inicioCode.GDbtnNormalObjects1, "btnRelax": gdjs.inicioCode.GDbtnRelaxObjects1, "btnExtreme": gdjs.inicioCode.GDbtnExtremeObjects1});
gdjs.inicioCode.userFunc0xacc9d8 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
sdk.showBanner();
}
};
gdjs.inicioCode.eventsList1 = function(runtimeScene) {

{


gdjs.inicioCode.userFunc0xacc9d8(runtimeScene);

}


};gdjs.inicioCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.inicioCode.GDfondoObjects1);
{for(var i = 0, len = gdjs.inicioCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDfondoObjects1[i].setYOffset(gdjs.inicioCode.GDfondoObjects1[i].getYOffset() - (0.4));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("paintEfecto"), gdjs.inicioCode.GDpaintEfectoObjects1);
{gdjs.evtTools.network.enableMetrics(runtimeScene, false);
}{gdjs.evtsExt__PauseFocusLost__Active.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "seleccion.wav");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(-(1));
}{for(var i = 0, len = gdjs.inicioCode.GDpaintEfectoObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDpaintEfectoObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("5;102;98", 0.5, "Vertical", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.inicioCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnExtreme"), gdjs.inicioCode.GDbtnExtremeObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnNormal"), gdjs.inicioCode.GDbtnNormalObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnRelax"), gdjs.inicioCode.GDbtnRelaxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnNormalObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnRelaxObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnExtremeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.inicioCode.GDbtnExtremeObjects1 */
/* Reuse gdjs.inicioCode.GDbtnNormalObjects1 */
/* Reuse gdjs.inicioCode.GDbtnRelaxObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDbtnNormalObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnNormalObjects1[i].setColor("105;255;187");
}
for(var i = 0, len = gdjs.inicioCode.GDbtnRelaxObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnRelaxObjects1[i].setColor("105;255;187");
}
for(var i = 0, len = gdjs.inicioCode.GDbtnExtremeObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnExtremeObjects1[i].setColor("105;255;187");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnExtreme"), gdjs.inicioCode.GDbtnExtremeObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnNormal"), gdjs.inicioCode.GDbtnNormalObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnRelax"), gdjs.inicioCode.GDbtnRelaxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnNormalObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnRelaxObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnExtremeObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.inicioCode.GDbtnExtremeObjects1 */
/* Reuse gdjs.inicioCode.GDbtnNormalObjects1 */
/* Reuse gdjs.inicioCode.GDbtnRelaxObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDbtnNormalObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnNormalObjects1[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.inicioCode.GDbtnRelaxObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnRelaxObjects1[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.inicioCode.GDbtnExtremeObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnExtremeObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnNormal"), gdjs.inicioCode.GDbtnNormalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnNormalObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnRelax"), gdjs.inicioCode.GDbtnRelaxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnRelaxObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnExtreme"), gdjs.inicioCode.GDbtnExtremeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnExtremeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnExtreme"), gdjs.inicioCode.GDbtnExtremeObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnNormal"), gdjs.inicioCode.GDbtnNormalObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnRelax"), gdjs.inicioCode.GDbtnRelaxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnNormalObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnRelaxObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnExtremeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("paintEfecto"), gdjs.inicioCode.GDpaintEfectoObjects1);
{for(var i = 0, len = gdjs.inicioCode.GDpaintEfectoObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDpaintEfectoObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("5;102;98", 0.5, "Vertical", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "seleccion.wav", false, 100, 1);
}
{ //Subevents
gdjs.inicioCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("paintEfecto"), gdjs.inicioCode.GDpaintEfectoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicioCode.GDpaintEfectoObjects1.length;i<l;++i) {
    if ( gdjs.inicioCode.GDpaintEfectoObjects1[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicioCode.GDpaintEfectoObjects1[k] = gdjs.inicioCode.GDpaintEfectoObjects1[i];
        ++k;
    }
}
gdjs.inicioCode.GDpaintEfectoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 0;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "juego_f1", false);
}}

}


};

gdjs.inicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.inicioCode.GDlogoObjects1.length = 0;
gdjs.inicioCode.GDlogoObjects2.length = 0;
gdjs.inicioCode.GDbtnNormalObjects1.length = 0;
gdjs.inicioCode.GDbtnNormalObjects2.length = 0;
gdjs.inicioCode.GDbtnRelaxObjects1.length = 0;
gdjs.inicioCode.GDbtnRelaxObjects2.length = 0;
gdjs.inicioCode.GDbtnExtremeObjects1.length = 0;
gdjs.inicioCode.GDbtnExtremeObjects2.length = 0;
gdjs.inicioCode.GDpaintEfectoObjects1.length = 0;
gdjs.inicioCode.GDpaintEfectoObjects2.length = 0;
gdjs.inicioCode.GDfondoObjects1.length = 0;
gdjs.inicioCode.GDfondoObjects2.length = 0;

gdjs.inicioCode.eventsList2(runtimeScene);
gdjs.inicioCode.GDlogoObjects1.length = 0;
gdjs.inicioCode.GDlogoObjects2.length = 0;
gdjs.inicioCode.GDbtnNormalObjects1.length = 0;
gdjs.inicioCode.GDbtnNormalObjects2.length = 0;
gdjs.inicioCode.GDbtnRelaxObjects1.length = 0;
gdjs.inicioCode.GDbtnRelaxObjects2.length = 0;
gdjs.inicioCode.GDbtnExtremeObjects1.length = 0;
gdjs.inicioCode.GDbtnExtremeObjects2.length = 0;
gdjs.inicioCode.GDpaintEfectoObjects1.length = 0;
gdjs.inicioCode.GDpaintEfectoObjects2.length = 0;
gdjs.inicioCode.GDfondoObjects1.length = 0;
gdjs.inicioCode.GDfondoObjects2.length = 0;


return;

}

gdjs['inicioCode'] = gdjs.inicioCode;

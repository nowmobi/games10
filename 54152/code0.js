gdjs.InicioCode = {};
gdjs.InicioCode.GDimgLogoObjects1= [];
gdjs.InicioCode.GDimgLogoObjects2= [];
gdjs.InicioCode.GDfondp_9595papelObjects1= [];
gdjs.InicioCode.GDfondp_9595papelObjects2= [];
gdjs.InicioCode.GDbtnDerObjects1= [];
gdjs.InicioCode.GDbtnDerObjects2= [];
gdjs.InicioCode.GDbtnIzqObjects1= [];
gdjs.InicioCode.GDbtnIzqObjects2= [];
gdjs.InicioCode.GDbtnColorObjects1= [];
gdjs.InicioCode.GDbtnColorObjects2= [];
gdjs.InicioCode.GDbtnCatDerObjects1= [];
gdjs.InicioCode.GDbtnCatDerObjects2= [];
gdjs.InicioCode.GDbtnCatIzqObjects1= [];
gdjs.InicioCode.GDbtnCatIzqObjects2= [];
gdjs.InicioCode.GDtxtCategoriaObjects1= [];
gdjs.InicioCode.GDtxtCategoriaObjects2= [];
gdjs.InicioCode.GDfondo_9595categoriaObjects1= [];
gdjs.InicioCode.GDfondo_9595categoriaObjects2= [];
gdjs.InicioCode.GDversionObjects1= [];
gdjs.InicioCode.GDversionObjects2= [];
gdjs.InicioCode.GDimg_9595colorObjects1= [];
gdjs.InicioCode.GDimg_9595colorObjects2= [];


gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDbtnDerObjects1Objects = Hashtable.newFrom({"btnDer": gdjs.InicioCode.GDbtnDerObjects1});
gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDbtnIzqObjects1Objects = Hashtable.newFrom({"btnIzq": gdjs.InicioCode.GDbtnIzqObjects1});
gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDbtnCatIzqObjects1Objects = Hashtable.newFrom({"btnCatIzq": gdjs.InicioCode.GDbtnCatIzqObjects1});
gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDbtnCatDerObjects1Objects = Hashtable.newFrom({"btnCatDer": gdjs.InicioCode.GDbtnCatDerObjects1});
gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDbtnDerObjects1ObjectsGDgdjs_9546InicioCode_9546GDbtnIzqObjects1ObjectsGDgdjs_9546InicioCode_9546GDbtnColorObjects1ObjectsGDgdjs_9546InicioCode_9546GDbtnCatDerObjects1ObjectsGDgdjs_9546InicioCode_9546GDbtnCatIzqObjects1Objects = Hashtable.newFrom({"btnDer": gdjs.InicioCode.GDbtnDerObjects1, "btnIzq": gdjs.InicioCode.GDbtnIzqObjects1, "btnColor": gdjs.InicioCode.GDbtnColorObjects1, "btnCatDer": gdjs.InicioCode.GDbtnCatDerObjects1, "btnCatIzq": gdjs.InicioCode.GDbtnCatIzqObjects1});
gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDbtnDerObjects1ObjectsGDgdjs_9546InicioCode_9546GDbtnIzqObjects1ObjectsGDgdjs_9546InicioCode_9546GDbtnColorObjects1ObjectsGDgdjs_9546InicioCode_9546GDbtnCatDerObjects1ObjectsGDgdjs_9546InicioCode_9546GDbtnCatIzqObjects1Objects = Hashtable.newFrom({"btnDer": gdjs.InicioCode.GDbtnDerObjects1, "btnIzq": gdjs.InicioCode.GDbtnIzqObjects1, "btnColor": gdjs.InicioCode.GDbtnColorObjects1, "btnCatDer": gdjs.InicioCode.GDbtnCatDerObjects1, "btnCatIzq": gdjs.InicioCode.GDbtnCatIzqObjects1});
gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDbtnColorObjects1Objects = Hashtable.newFrom({"btnColor": gdjs.InicioCode.GDbtnColorObjects1});
gdjs.InicioCode.userFunc0x7d6a48 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
sdk.showBanner();
}

};
gdjs.InicioCode.eventsList0 = function(runtimeScene) {

{


gdjs.InicioCode.userFunc0x7d6a48(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Juego", true);
}}

}


};gdjs.InicioCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("img_color"), gdjs.InicioCode.GDimg_9595colorObjects1);
{gdjs.evtTools.network.enableMetrics(runtimeScene, false);
}{for(var i = 0, len = gdjs.InicioCode.GDimg_9595colorObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDimg_9595colorObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.InicioCode.GDimg_9595colorObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDimg_9595colorObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("dibujo").getChild("catactual")));
}
}{for(var i = 0, len = gdjs.InicioCode.GDimg_9595colorObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDimg_9595colorObjects1[i].setAnimationFrame(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("dibujo").getChild("actual")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnDer"), gdjs.InicioCode.GDbtnDerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDbtnDerObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("img_color"), gdjs.InicioCode.GDimg_9595colorObjects1);
{for(var i = 0, len = gdjs.InicioCode.GDimg_9595colorObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDimg_9595colorObjects1[i].setAnimationFrame(gdjs.InicioCode.GDimg_9595colorObjects1[i].getAnimationFrame() + (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnIzq"), gdjs.InicioCode.GDbtnIzqObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDbtnIzqObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("img_color"), gdjs.InicioCode.GDimg_9595colorObjects1);
{for(var i = 0, len = gdjs.InicioCode.GDimg_9595colorObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDimg_9595colorObjects1[i].setAnimationFrame(gdjs.InicioCode.GDimg_9595colorObjects1[i].getAnimationFrame() - (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnCatIzq"), gdjs.InicioCode.GDbtnCatIzqObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDbtnCatIzqObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("img_color"), gdjs.InicioCode.GDimg_9595colorObjects1);
{for(var i = 0, len = gdjs.InicioCode.GDimg_9595colorObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDimg_9595colorObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.InicioCode.GDimg_9595colorObjects1[i].getBehavior("Animation").getAnimationIndex() - (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnCatDer"), gdjs.InicioCode.GDbtnCatDerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDbtnCatDerObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("img_color"), gdjs.InicioCode.GDimg_9595colorObjects1);
{for(var i = 0, len = gdjs.InicioCode.GDimg_9595colorObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDimg_9595colorObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.InicioCode.GDimg_9595colorObjects1[i].getBehavior("Animation").getAnimationIndex() + (1));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("btnCatDer"), gdjs.InicioCode.GDbtnCatDerObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnCatIzq"), gdjs.InicioCode.GDbtnCatIzqObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnDer"), gdjs.InicioCode.GDbtnDerObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnIzq"), gdjs.InicioCode.GDbtnIzqObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_categoria"), gdjs.InicioCode.GDfondo_9595categoriaObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondp_papel"), gdjs.InicioCode.GDfondp_9595papelObjects1);
gdjs.copyArray(runtimeScene.getObjects("img_color"), gdjs.InicioCode.GDimg_9595colorObjects1);
gdjs.copyArray(runtimeScene.getObjects("txtCategoria"), gdjs.InicioCode.GDtxtCategoriaObjects1);
{for(var i = 0, len = gdjs.InicioCode.GDfondp_9595papelObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDfondp_9595papelObjects1[i].setCenterYInScene(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InicioCode.GDimg_9595colorObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDimg_9595colorObjects1[i].setCenterYInScene(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InicioCode.GDbtnDerObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDbtnDerObjects1[i].setCenterYInScene((( gdjs.InicioCode.GDfondp_9595papelObjects1.length === 0 ) ? 0 :gdjs.InicioCode.GDfondp_9595papelObjects1[0].getPointY("p1")));
}
}{for(var i = 0, len = gdjs.InicioCode.GDbtnIzqObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDbtnIzqObjects1[i].setCenterYInScene((( gdjs.InicioCode.GDfondp_9595papelObjects1.length === 0 ) ? 0 :gdjs.InicioCode.GDfondp_9595papelObjects1[0].getPointY("p1")));
}
}{for(var i = 0, len = gdjs.InicioCode.GDbtnCatDerObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDbtnCatDerObjects1[i].setCenterYInScene((( gdjs.InicioCode.GDfondp_9595papelObjects1.length === 0 ) ? 0 :gdjs.InicioCode.GDfondp_9595papelObjects1[0].getPointY("p2")));
}
}{for(var i = 0, len = gdjs.InicioCode.GDbtnCatIzqObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDbtnCatIzqObjects1[i].setCenterYInScene((( gdjs.InicioCode.GDfondp_9595papelObjects1.length === 0 ) ? 0 :gdjs.InicioCode.GDfondp_9595papelObjects1[0].getPointY("p2")));
}
}{for(var i = 0, len = gdjs.InicioCode.GDfondo_9595categoriaObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDfondo_9595categoriaObjects1[i].setCenterYInScene((( gdjs.InicioCode.GDfondp_9595papelObjects1.length === 0 ) ? 0 :gdjs.InicioCode.GDfondp_9595papelObjects1[0].getPointY("")) + (( gdjs.InicioCode.GDfondp_9595papelObjects1.length === 0 ) ? 0 :gdjs.InicioCode.GDfondp_9595papelObjects1[0].getHeight()) + 35);
}
}{for(var i = 0, len = gdjs.InicioCode.GDtxtCategoriaObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDtxtCategoriaObjects1[i].setCenterYInScene((( gdjs.InicioCode.GDfondo_9595categoriaObjects1.length === 0 ) ? 0 :gdjs.InicioCode.GDfondo_9595categoriaObjects1[0].getPointY("")) + 45);
}
}{for(var i = 0, len = gdjs.InicioCode.GDtxtCategoriaObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDtxtCategoriaObjects1[i].getBehavior("Text").setText((( gdjs.InicioCode.GDimg_9595colorObjects1.length === 0 ) ? "" :gdjs.InicioCode.GDimg_9595colorObjects1[0].getBehavior("Animation").getAnimationName()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnCatDer"), gdjs.InicioCode.GDbtnCatDerObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnCatIzq"), gdjs.InicioCode.GDbtnCatIzqObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnColor"), gdjs.InicioCode.GDbtnColorObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnDer"), gdjs.InicioCode.GDbtnDerObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnIzq"), gdjs.InicioCode.GDbtnIzqObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDbtnDerObjects1ObjectsGDgdjs_9546InicioCode_9546GDbtnIzqObjects1ObjectsGDgdjs_9546InicioCode_9546GDbtnColorObjects1ObjectsGDgdjs_9546InicioCode_9546GDbtnCatDerObjects1ObjectsGDgdjs_9546InicioCode_9546GDbtnCatIzqObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.InicioCode.GDbtnCatDerObjects1 */
/* Reuse gdjs.InicioCode.GDbtnCatIzqObjects1 */
/* Reuse gdjs.InicioCode.GDbtnColorObjects1 */
/* Reuse gdjs.InicioCode.GDbtnDerObjects1 */
/* Reuse gdjs.InicioCode.GDbtnIzqObjects1 */
{for(var i = 0, len = gdjs.InicioCode.GDbtnDerObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDbtnDerObjects1[i].getBehavior("Opacity").setOpacity(200);
}
for(var i = 0, len = gdjs.InicioCode.GDbtnIzqObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDbtnIzqObjects1[i].getBehavior("Opacity").setOpacity(200);
}
for(var i = 0, len = gdjs.InicioCode.GDbtnColorObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDbtnColorObjects1[i].getBehavior("Opacity").setOpacity(200);
}
for(var i = 0, len = gdjs.InicioCode.GDbtnCatDerObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDbtnCatDerObjects1[i].getBehavior("Opacity").setOpacity(200);
}
for(var i = 0, len = gdjs.InicioCode.GDbtnCatIzqObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDbtnCatIzqObjects1[i].getBehavior("Opacity").setOpacity(200);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnCatDer"), gdjs.InicioCode.GDbtnCatDerObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnCatIzq"), gdjs.InicioCode.GDbtnCatIzqObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnColor"), gdjs.InicioCode.GDbtnColorObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnDer"), gdjs.InicioCode.GDbtnDerObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnIzq"), gdjs.InicioCode.GDbtnIzqObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDbtnDerObjects1ObjectsGDgdjs_9546InicioCode_9546GDbtnIzqObjects1ObjectsGDgdjs_9546InicioCode_9546GDbtnColorObjects1ObjectsGDgdjs_9546InicioCode_9546GDbtnCatDerObjects1ObjectsGDgdjs_9546InicioCode_9546GDbtnCatIzqObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.InicioCode.GDbtnCatDerObjects1 */
/* Reuse gdjs.InicioCode.GDbtnCatIzqObjects1 */
/* Reuse gdjs.InicioCode.GDbtnColorObjects1 */
/* Reuse gdjs.InicioCode.GDbtnDerObjects1 */
/* Reuse gdjs.InicioCode.GDbtnIzqObjects1 */
{for(var i = 0, len = gdjs.InicioCode.GDbtnDerObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDbtnDerObjects1[i].getBehavior("Opacity").setOpacity(255);
}
for(var i = 0, len = gdjs.InicioCode.GDbtnIzqObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDbtnIzqObjects1[i].getBehavior("Opacity").setOpacity(255);
}
for(var i = 0, len = gdjs.InicioCode.GDbtnColorObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDbtnColorObjects1[i].getBehavior("Opacity").setOpacity(255);
}
for(var i = 0, len = gdjs.InicioCode.GDbtnCatDerObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDbtnCatDerObjects1[i].getBehavior("Opacity").setOpacity(255);
}
for(var i = 0, len = gdjs.InicioCode.GDbtnCatIzqObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDbtnCatIzqObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnColor"), gdjs.InicioCode.GDbtnColorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDbtnColorObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("img_color"), gdjs.InicioCode.GDimg_9595colorObjects1);
{runtimeScene.getGame().getVariables().get("dibujo").getChild("actual").setNumber((( gdjs.InicioCode.GDimg_9595colorObjects1.length === 0 ) ? 0 :gdjs.InicioCode.GDimg_9595colorObjects1[0].getAnimationFrame()));
}{runtimeScene.getGame().getVariables().get("dibujo").getChild("catactual").setNumber((( gdjs.InicioCode.GDimg_9595colorObjects1.length === 0 ) ? 0 :gdjs.InicioCode.GDimg_9595colorObjects1[0].getBehavior("Animation").getAnimationIndex()));
}
{ //Subevents
gdjs.InicioCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.InicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InicioCode.GDimgLogoObjects1.length = 0;
gdjs.InicioCode.GDimgLogoObjects2.length = 0;
gdjs.InicioCode.GDfondp_9595papelObjects1.length = 0;
gdjs.InicioCode.GDfondp_9595papelObjects2.length = 0;
gdjs.InicioCode.GDbtnDerObjects1.length = 0;
gdjs.InicioCode.GDbtnDerObjects2.length = 0;
gdjs.InicioCode.GDbtnIzqObjects1.length = 0;
gdjs.InicioCode.GDbtnIzqObjects2.length = 0;
gdjs.InicioCode.GDbtnColorObjects1.length = 0;
gdjs.InicioCode.GDbtnColorObjects2.length = 0;
gdjs.InicioCode.GDbtnCatDerObjects1.length = 0;
gdjs.InicioCode.GDbtnCatDerObjects2.length = 0;
gdjs.InicioCode.GDbtnCatIzqObjects1.length = 0;
gdjs.InicioCode.GDbtnCatIzqObjects2.length = 0;
gdjs.InicioCode.GDtxtCategoriaObjects1.length = 0;
gdjs.InicioCode.GDtxtCategoriaObjects2.length = 0;
gdjs.InicioCode.GDfondo_9595categoriaObjects1.length = 0;
gdjs.InicioCode.GDfondo_9595categoriaObjects2.length = 0;
gdjs.InicioCode.GDversionObjects1.length = 0;
gdjs.InicioCode.GDversionObjects2.length = 0;
gdjs.InicioCode.GDimg_9595colorObjects1.length = 0;
gdjs.InicioCode.GDimg_9595colorObjects2.length = 0;

gdjs.InicioCode.eventsList1(runtimeScene);

return;

}

gdjs['InicioCode'] = gdjs.InicioCode;

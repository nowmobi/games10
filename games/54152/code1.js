gdjs.JuegoCode = {};
gdjs.JuegoCode.GDNewShapePainterObjects1= [];
gdjs.JuegoCode.GDNewShapePainterObjects2= [];
gdjs.JuegoCode.GDNewShapePainterObjects3= [];
gdjs.JuegoCode.GDbtn_9595menosObjects1= [];
gdjs.JuegoCode.GDbtn_9595menosObjects2= [];
gdjs.JuegoCode.GDbtn_9595menosObjects3= [];
gdjs.JuegoCode.GDbtn_9595masObjects1= [];
gdjs.JuegoCode.GDbtn_9595masObjects2= [];
gdjs.JuegoCode.GDbtn_9595masObjects3= [];
gdjs.JuegoCode.GDima_9595lineaObjects1= [];
gdjs.JuegoCode.GDima_9595lineaObjects2= [];
gdjs.JuegoCode.GDima_9595lineaObjects3= [];
gdjs.JuegoCode.GDbtn_9595homeObjects1= [];
gdjs.JuegoCode.GDbtn_9595homeObjects2= [];
gdjs.JuegoCode.GDbtn_9595homeObjects3= [];
gdjs.JuegoCode.GDbtn_9595borrarObjects1= [];
gdjs.JuegoCode.GDbtn_9595borrarObjects2= [];
gdjs.JuegoCode.GDbtn_9595borrarObjects3= [];
gdjs.JuegoCode.GDobj_9595fondoObjects1= [];
gdjs.JuegoCode.GDobj_9595fondoObjects2= [];
gdjs.JuegoCode.GDobj_9595fondoObjects3= [];
gdjs.JuegoCode.GDobj_9595tituloObjects1= [];
gdjs.JuegoCode.GDobj_9595tituloObjects2= [];
gdjs.JuegoCode.GDobj_9595tituloObjects3= [];
gdjs.JuegoCode.GDobj_9595paletaObjects1= [];
gdjs.JuegoCode.GDobj_9595paletaObjects2= [];
gdjs.JuegoCode.GDobj_9595paletaObjects3= [];
gdjs.JuegoCode.GDobj_9595selectorObjects1= [];
gdjs.JuegoCode.GDobj_9595selectorObjects2= [];
gdjs.JuegoCode.GDobj_9595selectorObjects3= [];
gdjs.JuegoCode.GDzoomObjects1= [];
gdjs.JuegoCode.GDzoomObjects2= [];
gdjs.JuegoCode.GDzoomObjects3= [];
gdjs.JuegoCode.GDbtn_9595zoomDerObjects1= [];
gdjs.JuegoCode.GDbtn_9595zoomDerObjects2= [];
gdjs.JuegoCode.GDbtn_9595zoomDerObjects3= [];
gdjs.JuegoCode.GDbtn_9595zoomIzqObjects1= [];
gdjs.JuegoCode.GDbtn_9595zoomIzqObjects2= [];
gdjs.JuegoCode.GDbtn_9595zoomIzqObjects3= [];
gdjs.JuegoCode.GDbtn_9595zoomSupObjects1= [];
gdjs.JuegoCode.GDbtn_9595zoomSupObjects2= [];
gdjs.JuegoCode.GDbtn_9595zoomSupObjects3= [];
gdjs.JuegoCode.GDbtn_9595zoomInfObjects1= [];
gdjs.JuegoCode.GDbtn_9595zoomInfObjects2= [];
gdjs.JuegoCode.GDbtn_9595zoomInfObjects3= [];
gdjs.JuegoCode.GDbtn_9595descargarObjects1= [];
gdjs.JuegoCode.GDbtn_9595descargarObjects2= [];
gdjs.JuegoCode.GDbtn_9595descargarObjects3= [];
gdjs.JuegoCode.GDimg_9595colorObjects1= [];
gdjs.JuegoCode.GDimg_9595colorObjects2= [];
gdjs.JuegoCode.GDimg_9595colorObjects3= [];


gdjs.JuegoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewShapePainter"), gdjs.JuegoCode.GDNewShapePainterObjects1);
{for(var i = 0, len = gdjs.JuegoCode.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDNewShapePainterObjects1[i].setFillColor("0;100;191");
}
}{for(var i = 0, len = gdjs.JuegoCode.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDNewShapePainterObjects1[i].setOutlineColor("0;100;191");
}
}}

}


};gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDobj_95959595fondoObjects1ObjectsGDgdjs_9546JuegoCode_9546GDobj_95959595tituloObjects1ObjectsGDgdjs_9546JuegoCode_9546GDzoomObjects1ObjectsGDgdjs_9546JuegoCode_9546GDbtn_95959595zoomDerObjects1ObjectsGDgdjs_9546JuegoCode_9546GDbtn_95959595zoomIzqObjects1ObjectsGDgdjs_9546JuegoCode_9546GDbtn_95959595zoomSupObjects1ObjectsGDgdjs_9546JuegoCode_9546GDbtn_95959595zoomInfObjects1Objects = Hashtable.newFrom({"obj_fondo": gdjs.JuegoCode.GDobj_9595fondoObjects1, "obj_titulo": gdjs.JuegoCode.GDobj_9595tituloObjects1, "zoom": gdjs.JuegoCode.GDzoomObjects1, "btn_zoomDer": gdjs.JuegoCode.GDbtn_9595zoomDerObjects1, "btn_zoomIzq": gdjs.JuegoCode.GDbtn_9595zoomIzqObjects1, "btn_zoomSup": gdjs.JuegoCode.GDbtn_9595zoomSupObjects1, "btn_zoomInf": gdjs.JuegoCode.GDbtn_9595zoomInfObjects1});
gdjs.JuegoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) != gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 0);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewShapePainter"), gdjs.JuegoCode.GDNewShapePainterObjects2);
{for(var i = 0, len = gdjs.JuegoCode.GDNewShapePainterObjects2.length ;i < len;++i) {
    gdjs.JuegoCode.GDNewShapePainterObjects2[i].drawLineV2(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), gdjs.evtTools.input.getCursorX(runtimeScene, "Dibujo", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "Dibujo", 0), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.JuegoCode.GDNewShapePainterObjects2.length ;i < len;++i) {
    gdjs.JuegoCode.GDNewShapePainterObjects2[i].drawCircle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) / 2);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "Dibujo", 0));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "Dibujo", 0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11338404);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "Dibujo", 0));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "Dibujo", 0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewShapePainter"), gdjs.JuegoCode.GDNewShapePainterObjects1);
{for(var i = 0, len = gdjs.JuegoCode.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDNewShapePainterObjects1[i].drawCircle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) / 2);
}
}}

}


};gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDbtn_95959595masObjects1Objects = Hashtable.newFrom({"btn_mas": gdjs.JuegoCode.GDbtn_9595masObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDbtn_95959595menosObjects1Objects = Hashtable.newFrom({"btn_menos": gdjs.JuegoCode.GDbtn_9595menosObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDobj_95959595fondoObjects1Objects = Hashtable.newFrom({"obj_fondo": gdjs.JuegoCode.GDobj_9595fondoObjects1});
gdjs.JuegoCode.userFunc0x97d2c8 = function GDJSInlineCode(runtimeScene) {
"use strict";

const timestamp = Date.now();
var canvas = document.getElementsByTagName("canvas")[0];
var img    = canvas.toDataURL("image/png");     
var link = document.createElement("a");
link.download = "PintaColour" + timestamp;
link.href = img;
link.click();
link.remove();


};
gdjs.JuegoCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


gdjs.JuegoCode.userFunc0x97d2c8(runtimeScene);

}


};gdjs.JuegoCode.asyncCallback11128732 = function (runtimeScene, asyncObjectsList) {

{ //Subevents
gdjs.JuegoCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.JuegoCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.JuegoCode.asyncCallback11128732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDbtn_95959595homeObjects1Objects = Hashtable.newFrom({"btn_home": gdjs.JuegoCode.GDbtn_9595homeObjects1});
gdjs.JuegoCode.userFunc0x8da720 = function GDJSInlineCode(runtimeScene) {
"use strict";
var strconfirm = confirm("Do you want to go back to home?");
if (strconfirm) {
    runtimeScene.requestChange(gdjs.SceneChangeRequest.PUSH_SCENE, "Inicio");

    if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
    sdk.showBanner();
    }


    //var canvas = document.getElementsByTagName("canvas")[0];
    //var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    //runtimeScene.getGame().getVariables().get("imagen").setString(image);
    
}
};
gdjs.JuegoCode.eventsList4 = function(runtimeScene) {

{


gdjs.JuegoCode.userFunc0x8da720(runtimeScene);

}


};gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDbtn_95959595borrarObjects1Objects = Hashtable.newFrom({"btn_borrar": gdjs.JuegoCode.GDbtn_9595borrarObjects1});
gdjs.JuegoCode.userFunc0x8d99c8 = function GDJSInlineCode(runtimeScene) {
"use strict";
const painter = runtimeScene.getObjects("NewShapePainter");

var strconfirm = confirm("Do you want to erase your drawing?");
if (strconfirm) {
    painter[0].clear();
}

};
gdjs.JuegoCode.eventsList5 = function(runtimeScene) {

{


gdjs.JuegoCode.userFunc0x8d99c8(runtimeScene);

}


};gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDobj_95959595tituloObjects1Objects = Hashtable.newFrom({"obj_titulo": gdjs.JuegoCode.GDobj_9595tituloObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDobj_95959595fondoObjects1Objects = Hashtable.newFrom({"obj_fondo": gdjs.JuegoCode.GDobj_9595fondoObjects1});
gdjs.JuegoCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("btn_zoomDer"), gdjs.JuegoCode.GDbtn_9595zoomDerObjects2);
gdjs.copyArray(runtimeScene.getObjects("btn_zoomInf"), gdjs.JuegoCode.GDbtn_9595zoomInfObjects2);
gdjs.copyArray(runtimeScene.getObjects("btn_zoomIzq"), gdjs.JuegoCode.GDbtn_9595zoomIzqObjects2);
gdjs.copyArray(runtimeScene.getObjects("btn_zoomSup"), gdjs.JuegoCode.GDbtn_9595zoomSupObjects2);
{for(var i = 0, len = gdjs.JuegoCode.GDbtn_9595zoomIzqObjects2.length ;i < len;++i) {
    gdjs.JuegoCode.GDbtn_9595zoomIzqObjects2[i].setCenterYInScene((gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 320) / 2);
}
}{for(var i = 0, len = gdjs.JuegoCode.GDbtn_9595zoomSupObjects2.length ;i < len;++i) {
    gdjs.JuegoCode.GDbtn_9595zoomSupObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.JuegoCode.GDbtn_9595zoomInfObjects2.length ;i < len;++i) {
    gdjs.JuegoCode.GDbtn_9595zoomInfObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.JuegoCode.GDbtn_9595zoomDerObjects2.length ;i < len;++i) {
    gdjs.JuegoCode.GDbtn_9595zoomDerObjects2[i].setCenterYInScene((gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 320) / 2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "UI", 0) < (gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn_zoomInf"), gdjs.JuegoCode.GDbtn_9595zoomInfObjects2);
gdjs.copyArray(runtimeScene.getObjects("obj_titulo"), gdjs.JuegoCode.GDobj_9595tituloObjects2);
{for(var i = 0, len = gdjs.JuegoCode.GDbtn_9595zoomInfObjects2.length ;i < len;++i) {
    gdjs.JuegoCode.GDbtn_9595zoomInfObjects2[i].getBehavior("Tween").addObjectPositionYTween2("btnzoom", gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (( gdjs.JuegoCode.GDobj_9595tituloObjects2.length === 0 ) ? 0 :gdjs.JuegoCode.GDobj_9595tituloObjects2[0].getHeight()) - (gdjs.JuegoCode.GDbtn_9595zoomInfObjects2[i].getHeight()) + 9, "linear", 0.05, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "UI", 0) == (gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn_zoomInf"), gdjs.JuegoCode.GDbtn_9595zoomInfObjects1);
gdjs.copyArray(runtimeScene.getObjects("obj_fondo"), gdjs.JuegoCode.GDobj_9595fondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("obj_titulo"), gdjs.JuegoCode.GDobj_9595tituloObjects1);
{for(var i = 0, len = gdjs.JuegoCode.GDbtn_9595zoomInfObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDbtn_9595zoomInfObjects1[i].getBehavior("Tween").addObjectPositionYTween2("btnzoom", gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (( gdjs.JuegoCode.GDobj_9595fondoObjects1.length === 0 ) ? 0 :gdjs.JuegoCode.GDobj_9595fondoObjects1[0].getHeight()) - (( gdjs.JuegoCode.GDobj_9595tituloObjects1.length === 0 ) ? 0 :gdjs.JuegoCode.GDobj_9595tituloObjects1[0].getHeight()) - (gdjs.JuegoCode.GDbtn_9595zoomInfObjects1[i].getHeight()) + 9, "linear", 0.1, false);
}
}}

}


};gdjs.JuegoCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("btn_zoomDer"), gdjs.JuegoCode.GDbtn_9595zoomDerObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_zoomInf"), gdjs.JuegoCode.GDbtn_9595zoomInfObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_zoomIzq"), gdjs.JuegoCode.GDbtn_9595zoomIzqObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_zoomSup"), gdjs.JuegoCode.GDbtn_9595zoomSupObjects1);
{for(var i = 0, len = gdjs.JuegoCode.GDbtn_9595zoomIzqObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDbtn_9595zoomIzqObjects1[i].setCenterYInScene(-(300));
}
}{for(var i = 0, len = gdjs.JuegoCode.GDbtn_9595zoomSupObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDbtn_9595zoomSupObjects1[i].setCenterXInScene(-(300));
}
}{for(var i = 0, len = gdjs.JuegoCode.GDbtn_9595zoomInfObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDbtn_9595zoomInfObjects1[i].setCenterXInScene(-(300));
}
}{for(var i = 0, len = gdjs.JuegoCode.GDbtn_9595zoomDerObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDbtn_9595zoomDerObjects1[i].setCenterYInScene(-(300));
}
}}

}


};gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDbtn_95959595zoomIzqObjects2Objects = Hashtable.newFrom({"btn_zoomIzq": gdjs.JuegoCode.GDbtn_9595zoomIzqObjects2});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDbtn_95959595zoomDerObjects2Objects = Hashtable.newFrom({"btn_zoomDer": gdjs.JuegoCode.GDbtn_9595zoomDerObjects2});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDbtn_95959595zoomSupObjects2Objects = Hashtable.newFrom({"btn_zoomSup": gdjs.JuegoCode.GDbtn_9595zoomSupObjects2});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDbtn_95959595zoomInfObjects1Objects = Hashtable.newFrom({"btn_zoomInf": gdjs.JuegoCode.GDbtn_9595zoomInfObjects1});
gdjs.JuegoCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btn_zoomIzq"), gdjs.JuegoCode.GDbtn_9595zoomIzqObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDbtn_95959595zoomIzqObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "Dibujo", 0) - (1.5), "Dibujo", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "Layer", 0) - (1.5), "Layer", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_zoomDer"), gdjs.JuegoCode.GDbtn_9595zoomDerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDbtn_95959595zoomDerObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "Dibujo", 0) + (1.5), "Dibujo", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "Layer", 0) + (1.5), "Layer", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_zoomSup"), gdjs.JuegoCode.GDbtn_9595zoomSupObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDbtn_95959595zoomSupObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "Dibujo", 0) - (1.5), "Dibujo", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "Layer", 0) - (1.5), "Layer", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_zoomInf"), gdjs.JuegoCode.GDbtn_9595zoomInfObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDbtn_95959595zoomInfObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "Dibujo", 0) + (1.5), "Dibujo", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "Layer", 0) + (1.5), "Layer", 0);
}}

}


};gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDbtn_95959595descargarObjects1Objects = Hashtable.newFrom({"btn_descargar": gdjs.JuegoCode.GDbtn_9595descargarObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDobj_95959595fondoObjects1Objects = Hashtable.newFrom({"obj_fondo": gdjs.JuegoCode.GDobj_9595fondoObjects1});
gdjs.JuegoCode.userFunc0xa8a358 = function GDJSInlineCode(runtimeScene) {
"use strict";

const timestamp = Date.now();
var canvas = document.getElementsByTagName("canvas")[0];
var img    = canvas.toDataURL("image/png");     
var link = document.createElement("a");
link.download = "PintaColour" + timestamp;
link.href = img;
link.click();
link.remove();

if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
sdk.showBanner();
}



};
gdjs.JuegoCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


gdjs.JuegoCode.userFunc0xa8a358(runtimeScene);

}


};gdjs.JuegoCode.asyncCallback11166644 = function (runtimeScene, asyncObjectsList) {

{ //Subevents
gdjs.JuegoCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.JuegoCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.JuegoCode.asyncCallback11166644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.JuegoCode.eventsList11 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("img_color"), gdjs.JuegoCode.GDimg_9595colorObjects1);
{for(var i = 0, len = gdjs.JuegoCode.GDimg_9595colorObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDimg_9595colorObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.JuegoCode.GDimg_9595colorObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDimg_9595colorObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("dibujo").getChild("catactual")));
}
}{for(var i = 0, len = gdjs.JuegoCode.GDimg_9595colorObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDimg_9595colorObjects1[i].setAnimationFrame(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("dibujo").getChild("actual")));
}
}{for(var i = 0, len = gdjs.JuegoCode.GDimg_9595colorObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDimg_9595colorObjects1[i].setCenterYInScene((gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 320) / 2);
}
}
{ //Subevents
gdjs.JuegoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_zoomDer"), gdjs.JuegoCode.GDbtn_9595zoomDerObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_zoomInf"), gdjs.JuegoCode.GDbtn_9595zoomInfObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_zoomIzq"), gdjs.JuegoCode.GDbtn_9595zoomIzqObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_zoomSup"), gdjs.JuegoCode.GDbtn_9595zoomSupObjects1);
gdjs.copyArray(runtimeScene.getObjects("obj_fondo"), gdjs.JuegoCode.GDobj_9595fondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("obj_titulo"), gdjs.JuegoCode.GDobj_9595tituloObjects1);
gdjs.copyArray(runtimeScene.getObjects("zoom"), gdjs.JuegoCode.GDzoomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDobj_95959595fondoObjects1ObjectsGDgdjs_9546JuegoCode_9546GDobj_95959595tituloObjects1ObjectsGDgdjs_9546JuegoCode_9546GDzoomObjects1ObjectsGDgdjs_9546JuegoCode_9546GDbtn_95959595zoomDerObjects1ObjectsGDgdjs_9546JuegoCode_9546GDbtn_95959595zoomIzqObjects1ObjectsGDgdjs_9546JuegoCode_9546GDbtn_95959595zoomSupObjects1ObjectsGDgdjs_9546JuegoCode_9546GDbtn_95959595zoomInfObjects1Objects, runtimeScene, true, false);
isConditionTrue_0 = !isConditionTrue_1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.JuegoCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("btn_mas"), gdjs.JuegoCode.GDbtn_9595masObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDbtn_95959595masObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) < 90);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_menos"), gdjs.JuegoCode.GDbtn_9595menosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDbtn_95959595menosObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) >= 6);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).sub(2);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("btn_mas"), gdjs.JuegoCode.GDbtn_9595masObjects1);
gdjs.copyArray(runtimeScene.getObjects("ima_linea"), gdjs.JuegoCode.GDima_9595lineaObjects1);
{for(var i = 0, len = gdjs.JuegoCode.GDima_9595lineaObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDima_9595lineaObjects1[i].getBehavior("Resizable").setHeight(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.JuegoCode.GDima_9595lineaObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDima_9595lineaObjects1[i].setCenterYInScene((( gdjs.JuegoCode.GDbtn_9595masObjects1.length === 0 ) ? 0 :gdjs.JuegoCode.GDbtn_9595masObjects1[0].getCenterYInScene()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10373124);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("obj_fondo"), gdjs.JuegoCode.GDobj_9595fondoObjects1);
{gdjs.evtsExt__Helpers__Menu.func(runtimeScene, gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDobj_95959595fondoObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.JuegoCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_home"), gdjs.JuegoCode.GDbtn_9595homeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDbtn_95959595homeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11343980);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.JuegoCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("btn_borrar"), gdjs.JuegoCode.GDbtn_9595borrarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDbtn_95959595borrarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11346260);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.JuegoCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("obj_titulo"), gdjs.JuegoCode.GDobj_9595tituloObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDobj_95959595tituloObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11347500);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("obj_fondo"), gdjs.JuegoCode.GDobj_9595fondoObjects1);
{gdjs.evtsExt__Helpers__Menu.func(runtimeScene, gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDobj_95959595fondoObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("obj_paleta"), gdjs.JuegoCode.GDobj_9595paletaObjects1);
gdjs.copyArray(runtimeScene.getObjects("obj_selector"), gdjs.JuegoCode.GDobj_9595selectorObjects1);
{for(var i = 0, len = gdjs.JuegoCode.GDobj_9595selectorObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDobj_9595selectorObjects1[i].setY((( gdjs.JuegoCode.GDobj_9595paletaObjects1.length === 0 ) ? 0 :gdjs.JuegoCode.GDobj_9595paletaObjects1[0].getAABBCenterY()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("obj_paleta"), gdjs.JuegoCode.GDobj_9595paletaObjects1);
gdjs.copyArray(runtimeScene.getObjects("obj_selector"), gdjs.JuegoCode.GDobj_9595selectorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JuegoCode.GDobj_9595selectorObjects1.length;i<l;++i) {
    if ( gdjs.JuegoCode.GDobj_9595selectorObjects1[i].getX() < (( gdjs.JuegoCode.GDobj_9595paletaObjects1.length === 0 ) ? 0 :gdjs.JuegoCode.GDobj_9595paletaObjects1[0].getPointX("izq")) ) {
        isConditionTrue_0 = true;
        gdjs.JuegoCode.GDobj_9595selectorObjects1[k] = gdjs.JuegoCode.GDobj_9595selectorObjects1[i];
        ++k;
    }
}
gdjs.JuegoCode.GDobj_9595selectorObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JuegoCode.GDobj_9595paletaObjects1 */
/* Reuse gdjs.JuegoCode.GDobj_9595selectorObjects1 */
{for(var i = 0, len = gdjs.JuegoCode.GDobj_9595selectorObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDobj_9595selectorObjects1[i].setX((( gdjs.JuegoCode.GDobj_9595paletaObjects1.length === 0 ) ? 0 :gdjs.JuegoCode.GDobj_9595paletaObjects1[0].getPointX("izq")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("obj_paleta"), gdjs.JuegoCode.GDobj_9595paletaObjects1);
gdjs.copyArray(runtimeScene.getObjects("obj_selector"), gdjs.JuegoCode.GDobj_9595selectorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JuegoCode.GDobj_9595selectorObjects1.length;i<l;++i) {
    if ( gdjs.JuegoCode.GDobj_9595selectorObjects1[i].getX() > (( gdjs.JuegoCode.GDobj_9595paletaObjects1.length === 0 ) ? 0 :gdjs.JuegoCode.GDobj_9595paletaObjects1[0].getPointX("der")) ) {
        isConditionTrue_0 = true;
        gdjs.JuegoCode.GDobj_9595selectorObjects1[k] = gdjs.JuegoCode.GDobj_9595selectorObjects1[i];
        ++k;
    }
}
gdjs.JuegoCode.GDobj_9595selectorObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JuegoCode.GDobj_9595paletaObjects1 */
/* Reuse gdjs.JuegoCode.GDobj_9595selectorObjects1 */
{for(var i = 0, len = gdjs.JuegoCode.GDobj_9595selectorObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDobj_9595selectorObjects1[i].setX((( gdjs.JuegoCode.GDobj_9595paletaObjects1.length === 0 ) ? 0 :gdjs.JuegoCode.GDobj_9595paletaObjects1[0].getPointX("der")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("obj_selector"), gdjs.JuegoCode.GDobj_9595selectorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "UI", 0) == (gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JuegoCode.GDobj_9595selectorObjects1.length;i<l;++i) {
    if ( gdjs.JuegoCode.GDobj_9595selectorObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.JuegoCode.GDobj_9595selectorObjects1[k] = gdjs.JuegoCode.GDobj_9595selectorObjects1[i];
        ++k;
    }
}
gdjs.JuegoCode.GDobj_9595selectorObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewShapePainter"), gdjs.JuegoCode.GDNewShapePainterObjects1);
/* Reuse gdjs.JuegoCode.GDobj_9595selectorObjects1 */
{for(var i = 0, len = gdjs.JuegoCode.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDNewShapePainterObjects1[i].setFillColor(gdjs.evtsExt__ReadPixels__ReadPixelColor.func(runtimeScene, (( gdjs.JuegoCode.GDobj_9595selectorObjects1.length === 0 ) ? 0 :gdjs.JuegoCode.GDobj_9595selectorObjects1[0].getPointX("")), (( gdjs.JuegoCode.GDobj_9595selectorObjects1.length === 0 ) ? 0 :gdjs.JuegoCode.GDobj_9595selectorObjects1[0].getPointY("")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.JuegoCode.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDNewShapePainterObjects1[i].setOutlineColor(gdjs.evtsExt__ReadPixels__ReadPixelColor.func(runtimeScene, (( gdjs.JuegoCode.GDobj_9595selectorObjects1.length === 0 ) ? 0 :gdjs.JuegoCode.GDobj_9595selectorObjects1[0].getPointX("")), (( gdjs.JuegoCode.GDobj_9595selectorObjects1.length === 0 ) ? 0 :gdjs.JuegoCode.GDobj_9595selectorObjects1[0].getPointY("")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("zoom"), gdjs.JuegoCode.GDzoomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JuegoCode.GDzoomObjects1.length;i<l;++i) {
    if ( gdjs.JuegoCode.GDzoomObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.JuegoCode.GDzoomObjects1[k] = gdjs.JuegoCode.GDzoomObjects1[i];
        ++k;
    }
}
gdjs.JuegoCode.GDzoomObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2.5, "Dibujo", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2.5, "Layer", 0);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "UIZoom");
}
{ //Subevents
gdjs.JuegoCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("zoom"), gdjs.JuegoCode.GDzoomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JuegoCode.GDzoomObjects1.length;i<l;++i) {
    if ( !(gdjs.JuegoCode.GDzoomObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.JuegoCode.GDzoomObjects1[k] = gdjs.JuegoCode.GDzoomObjects1[i];
        ++k;
    }
}
gdjs.JuegoCode.GDzoomObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "Layer", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, "Layer", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, "Layer", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, "Dibujo", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "Dibujo", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, "Dibujo", 0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "UIZoom");
}
{ //Subevents
gdjs.JuegoCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "UIZoom");
if (isConditionTrue_0) {

{ //Subevents
gdjs.JuegoCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_descargar"), gdjs.JuegoCode.GDbtn_9595descargarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDbtn_95959595descargarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11219116);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("obj_fondo"), gdjs.JuegoCode.GDobj_9595fondoObjects1);
{gdjs.evtsExt__Helpers__Menu.func(runtimeScene, gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDobj_95959595fondoObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.JuegoCode.eventsList10(runtimeScene);} //End of subevents
}

}


};

gdjs.JuegoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JuegoCode.GDNewShapePainterObjects1.length = 0;
gdjs.JuegoCode.GDNewShapePainterObjects2.length = 0;
gdjs.JuegoCode.GDNewShapePainterObjects3.length = 0;
gdjs.JuegoCode.GDbtn_9595menosObjects1.length = 0;
gdjs.JuegoCode.GDbtn_9595menosObjects2.length = 0;
gdjs.JuegoCode.GDbtn_9595menosObjects3.length = 0;
gdjs.JuegoCode.GDbtn_9595masObjects1.length = 0;
gdjs.JuegoCode.GDbtn_9595masObjects2.length = 0;
gdjs.JuegoCode.GDbtn_9595masObjects3.length = 0;
gdjs.JuegoCode.GDima_9595lineaObjects1.length = 0;
gdjs.JuegoCode.GDima_9595lineaObjects2.length = 0;
gdjs.JuegoCode.GDima_9595lineaObjects3.length = 0;
gdjs.JuegoCode.GDbtn_9595homeObjects1.length = 0;
gdjs.JuegoCode.GDbtn_9595homeObjects2.length = 0;
gdjs.JuegoCode.GDbtn_9595homeObjects3.length = 0;
gdjs.JuegoCode.GDbtn_9595borrarObjects1.length = 0;
gdjs.JuegoCode.GDbtn_9595borrarObjects2.length = 0;
gdjs.JuegoCode.GDbtn_9595borrarObjects3.length = 0;
gdjs.JuegoCode.GDobj_9595fondoObjects1.length = 0;
gdjs.JuegoCode.GDobj_9595fondoObjects2.length = 0;
gdjs.JuegoCode.GDobj_9595fondoObjects3.length = 0;
gdjs.JuegoCode.GDobj_9595tituloObjects1.length = 0;
gdjs.JuegoCode.GDobj_9595tituloObjects2.length = 0;
gdjs.JuegoCode.GDobj_9595tituloObjects3.length = 0;
gdjs.JuegoCode.GDobj_9595paletaObjects1.length = 0;
gdjs.JuegoCode.GDobj_9595paletaObjects2.length = 0;
gdjs.JuegoCode.GDobj_9595paletaObjects3.length = 0;
gdjs.JuegoCode.GDobj_9595selectorObjects1.length = 0;
gdjs.JuegoCode.GDobj_9595selectorObjects2.length = 0;
gdjs.JuegoCode.GDobj_9595selectorObjects3.length = 0;
gdjs.JuegoCode.GDzoomObjects1.length = 0;
gdjs.JuegoCode.GDzoomObjects2.length = 0;
gdjs.JuegoCode.GDzoomObjects3.length = 0;
gdjs.JuegoCode.GDbtn_9595zoomDerObjects1.length = 0;
gdjs.JuegoCode.GDbtn_9595zoomDerObjects2.length = 0;
gdjs.JuegoCode.GDbtn_9595zoomDerObjects3.length = 0;
gdjs.JuegoCode.GDbtn_9595zoomIzqObjects1.length = 0;
gdjs.JuegoCode.GDbtn_9595zoomIzqObjects2.length = 0;
gdjs.JuegoCode.GDbtn_9595zoomIzqObjects3.length = 0;
gdjs.JuegoCode.GDbtn_9595zoomSupObjects1.length = 0;
gdjs.JuegoCode.GDbtn_9595zoomSupObjects2.length = 0;
gdjs.JuegoCode.GDbtn_9595zoomSupObjects3.length = 0;
gdjs.JuegoCode.GDbtn_9595zoomInfObjects1.length = 0;
gdjs.JuegoCode.GDbtn_9595zoomInfObjects2.length = 0;
gdjs.JuegoCode.GDbtn_9595zoomInfObjects3.length = 0;
gdjs.JuegoCode.GDbtn_9595descargarObjects1.length = 0;
gdjs.JuegoCode.GDbtn_9595descargarObjects2.length = 0;
gdjs.JuegoCode.GDbtn_9595descargarObjects3.length = 0;
gdjs.JuegoCode.GDimg_9595colorObjects1.length = 0;
gdjs.JuegoCode.GDimg_9595colorObjects2.length = 0;
gdjs.JuegoCode.GDimg_9595colorObjects3.length = 0;

gdjs.JuegoCode.eventsList11(runtimeScene);

return;

}

gdjs['JuegoCode'] = gdjs.JuegoCode;

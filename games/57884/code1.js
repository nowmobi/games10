gdjs.juego_95f1Code = {};
gdjs.juego_95f1Code.localVariables = [];
gdjs.juego_95f1Code.GDobjetoObjects1= [];
gdjs.juego_95f1Code.GDobjetoObjects2= [];
gdjs.juego_95f1Code.GDobjetoObjects3= [];
gdjs.juego_95f1Code.GDobjetoObjects4= [];
gdjs.juego_95f1Code.GDsitioObjects1= [];
gdjs.juego_95f1Code.GDsitioObjects2= [];
gdjs.juego_95f1Code.GDsitioObjects3= [];
gdjs.juego_95f1Code.GDsitioObjects4= [];
gdjs.juego_95f1Code.GDtxtPuntosObjects1= [];
gdjs.juego_95f1Code.GDtxtPuntosObjects2= [];
gdjs.juego_95f1Code.GDtxtPuntosObjects3= [];
gdjs.juego_95f1Code.GDtxtPuntosObjects4= [];
gdjs.juego_95f1Code.GDbarraSuperiorObjects1= [];
gdjs.juego_95f1Code.GDbarraSuperiorObjects2= [];
gdjs.juego_95f1Code.GDbarraSuperiorObjects3= [];
gdjs.juego_95f1Code.GDbarraSuperiorObjects4= [];
gdjs.juego_95f1Code.GDbarraTiempoObjects1= [];
gdjs.juego_95f1Code.GDbarraTiempoObjects2= [];
gdjs.juego_95f1Code.GDbarraTiempoObjects3= [];
gdjs.juego_95f1Code.GDbarraTiempoObjects4= [];
gdjs.juego_95f1Code.GDbarraTiempoFondoObjects1= [];
gdjs.juego_95f1Code.GDbarraTiempoFondoObjects2= [];
gdjs.juego_95f1Code.GDbarraTiempoFondoObjects3= [];
gdjs.juego_95f1Code.GDbarraTiempoFondoObjects4= [];
gdjs.juego_95f1Code.GDrelojObjects1= [];
gdjs.juego_95f1Code.GDrelojObjects2= [];
gdjs.juego_95f1Code.GDrelojObjects3= [];
gdjs.juego_95f1Code.GDrelojObjects4= [];
gdjs.juego_95f1Code.GDayudaObjects1= [];
gdjs.juego_95f1Code.GDayudaObjects2= [];
gdjs.juego_95f1Code.GDayudaObjects3= [];
gdjs.juego_95f1Code.GDayudaObjects4= [];
gdjs.juego_95f1Code.GDtxtMaxPuntosObjects1= [];
gdjs.juego_95f1Code.GDtxtMaxPuntosObjects2= [];
gdjs.juego_95f1Code.GDtxtMaxPuntosObjects3= [];
gdjs.juego_95f1Code.GDtxtMaxPuntosObjects4= [];
gdjs.juego_95f1Code.GDpart1Objects1= [];
gdjs.juego_95f1Code.GDpart1Objects2= [];
gdjs.juego_95f1Code.GDpart1Objects3= [];
gdjs.juego_95f1Code.GDpart1Objects4= [];
gdjs.juego_95f1Code.GDpaintEfectoObjects1= [];
gdjs.juego_95f1Code.GDpaintEfectoObjects2= [];
gdjs.juego_95f1Code.GDpaintEfectoObjects3= [];
gdjs.juego_95f1Code.GDpaintEfectoObjects4= [];
gdjs.juego_95f1Code.GDfondoObjects1= [];
gdjs.juego_95f1Code.GDfondoObjects2= [];
gdjs.juego_95f1Code.GDfondoObjects3= [];
gdjs.juego_95f1Code.GDfondoObjects4= [];


gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDobjetoObjects1Objects = Hashtable.newFrom({"objeto": gdjs.juego_95f1Code.GDobjetoObjects1});
gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDayudaObjects1Objects = Hashtable.newFrom({"ayuda": gdjs.juego_95f1Code.GDayudaObjects1});
gdjs.juego_95f1Code.mapOfEmptyGDayudaObjects = Hashtable.newFrom({"ayuda": []});
gdjs.juego_95f1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) > 25;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) < 35;
}
if (isConditionTrue_0) {
{gdjs.juego_95f1Code.localVariables[0].getFromIndex(1).setNumber(gdjs.randomInRange(2, 3));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) >= 35;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) < 55;
}
if (isConditionTrue_0) {
{gdjs.juego_95f1Code.localVariables[0].getFromIndex(1).setNumber(gdjs.randomInRange(3, 4));
}{gdjs.juego_95f1Code.localVariables[0].getFromIndex(0).setNumber(gdjs.randomInRange(3, 4));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) >= 55;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) < 75;
}
if (isConditionTrue_0) {
{gdjs.juego_95f1Code.localVariables[0].getFromIndex(1).setNumber(gdjs.randomInRange(4, 6));
}{gdjs.juego_95f1Code.localVariables[0].getFromIndex(0).setNumber(gdjs.randomInRange(4, 6));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) >= 75;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) < 90;
}
if (isConditionTrue_0) {
{gdjs.juego_95f1Code.localVariables[0].getFromIndex(1).setNumber(gdjs.randomInRange(5, 7));
}{gdjs.juego_95f1Code.localVariables[0].getFromIndex(0).setNumber(gdjs.randomInRange(5, 6));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) >= 90;
if (isConditionTrue_0) {
{gdjs.juego_95f1Code.localVariables[0].getFromIndex(1).setNumber(gdjs.randomInRange(7, 8));
}{gdjs.juego_95f1Code.localVariables[0].getFromIndex(0).setNumber(gdjs.randomInRange(7, 7));
}}

}


};gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDobjetoObjects2Objects = Hashtable.newFrom({"objeto": gdjs.juego_95f1Code.GDobjetoObjects2});
gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDobjetoObjects2Objects = Hashtable.newFrom({"objeto": gdjs.juego_95f1Code.GDobjetoObjects2});
gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDobjetoObjects2Objects = Hashtable.newFrom({"objeto": gdjs.juego_95f1Code.GDobjetoObjects2});
gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDobjetoObjects1Objects = Hashtable.newFrom({"objeto": gdjs.juego_95f1Code.GDobjetoObjects1});
gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDobjetoObjects1Objects = Hashtable.newFrom({"objeto": gdjs.juego_95f1Code.GDobjetoObjects1});
gdjs.juego_95f1Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(gdjs.juego_95f1Code.localVariables[1].getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("objeto"), gdjs.juego_95f1Code.GDobjetoObjects2);
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDobjetoObjects2Objects);
}{for(var i = 0, len = gdjs.juego_95f1Code.GDobjetoObjects2.length ;i < len;++i) {
    gdjs.juego_95f1Code.GDobjetoObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}{for(var i = 0, len = gdjs.juego_95f1Code.GDobjetoObjects2.length ;i < len;++i) {
    gdjs.juego_95f1Code.GDobjetoObjects2[i].setAnimationFrame(0);
}
}{gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDobjetoObjects2Objects);
}{for(var i = 0, len = gdjs.juego_95f1Code.GDobjetoObjects2.length ;i < len;++i) {
    gdjs.juego_95f1Code.GDobjetoObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs.juego_95f1Code.GDobjetoObjects2.length ;i < len;++i) {
    gdjs.juego_95f1Code.GDobjetoObjects2[i].returnVariable(gdjs.juego_95f1Code.GDobjetoObjects2[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(gdjs.juego_95f1Code.localVariables[1].getFromIndex(0)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("objeto"), gdjs.juego_95f1Code.GDobjetoObjects1);
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDobjetoObjects1Objects);
}{for(var i = 0, len = gdjs.juego_95f1Code.GDobjetoObjects1.length ;i < len;++i) {
    gdjs.juego_95f1Code.GDobjetoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}{for(var i = 0, len = gdjs.juego_95f1Code.GDobjetoObjects1.length ;i < len;++i) {
    gdjs.juego_95f1Code.GDobjetoObjects1[i].setAnimationFrame(1);
}
}{gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDobjetoObjects1Objects);
}{for(var i = 0, len = gdjs.juego_95f1Code.GDobjetoObjects1.length ;i < len;++i) {
    gdjs.juego_95f1Code.GDobjetoObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.juego_95f1Code.GDobjetoObjects1.length ;i < len;++i) {
    gdjs.juego_95f1Code.GDobjetoObjects1[i].returnVariable(gdjs.juego_95f1Code.GDobjetoObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}}

}


};gdjs.juego_95f1Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) <= 10;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(0, 10));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) > 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) <= 25;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(0, 30));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) > 25;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(0, runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= 1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.juego_95f1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(30);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
{gdjs.juego_95f1Code.localVariables[0].getFromIndex(1).setNumber(9);
}{gdjs.juego_95f1Code.localVariables[0].getFromIndex(0).setNumber(9);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber();
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("objeto"), gdjs.juego_95f1Code.GDobjetoObjects2);
{gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.func(runtimeScene, gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDobjetoObjects2Objects, gdjs.juego_95f1Code.localVariables[0].getFromIndex(1).getAsNumber(), gdjs.juego_95f1Code.localVariables[0].getFromIndex(0).getAsNumber(), 0, 0, 16, 16, "", "", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.juego_95f1Code.GDobjetoObjects2.length ;i < len;++i) {
    gdjs.juego_95f1Code.GDobjetoObjects2[i].getBehavior("Animation").pauseAnimation();
}
}}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("imageMala", variable);
}
gdjs.juego_95f1Code.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{gdjs.juego_95f1Code.localVariables[1].getFromIndex(0).setNumber(gdjs.randomInRange(0, 1));
}
{ //Subevents
gdjs.juego_95f1Code.eventsList1(runtimeScene);} //End of subevents
}
gdjs.juego_95f1Code.localVariables.pop();

}


};gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDobjetoObjects2Objects = Hashtable.newFrom({"objeto": gdjs.juego_95f1Code.GDobjetoObjects2});
gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDpart1Objects2Objects = Hashtable.newFrom({"part1": gdjs.juego_95f1Code.GDpart1Objects2});
gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDobjetoObjects2Objects = Hashtable.newFrom({"objeto": gdjs.juego_95f1Code.GDobjetoObjects2});
gdjs.juego_95f1Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1 + Math.floor((runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber()) / 2));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}}

}


};gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDobjetoObjects2Objects = Hashtable.newFrom({"objeto": gdjs.juego_95f1Code.GDobjetoObjects2});
gdjs.juego_95f1Code.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("objeto"), gdjs.juego_95f1Code.GDobjetoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDobjetoObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.juego_95f1Code.GDobjetoObjects2.length;i<l;++i) {
    if ( gdjs.juego_95f1Code.GDobjetoObjects2[i].getVariableBoolean(gdjs.juego_95f1Code.GDobjetoObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.juego_95f1Code.GDobjetoObjects2[k] = gdjs.juego_95f1Code.GDobjetoObjects2[i];
        ++k;
    }
}
gdjs.juego_95f1Code.GDobjetoObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10823844);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.juego_95f1Code.GDobjetoObjects2 */
gdjs.copyArray(runtimeScene.getObjects("txtPuntos"), gdjs.juego_95f1Code.GDtxtPuntosObjects2);
gdjs.juego_95f1Code.GDpart1Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDpart1Objects2Objects, (( gdjs.juego_95f1Code.GDtxtPuntosObjects2.length === 0 ) ? 0 :gdjs.juego_95f1Code.GDtxtPuntosObjects2[0].getCenterXInScene()), (( gdjs.juego_95f1Code.GDtxtPuntosObjects2.length === 0 ) ? 0 :gdjs.juego_95f1Code.GDtxtPuntosObjects2[0].getCenterYInScene()), "UI");
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDobjetoObjects2Objects);
}{for(var i = 0, len = gdjs.juego_95f1Code.GDobjetoObjects2.length ;i < len;++i) {
    gdjs.juego_95f1Code.GDobjetoObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ok.wav", false, 100, 1);
}
{ //Subevents
gdjs.juego_95f1Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("objeto"), gdjs.juego_95f1Code.GDobjetoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDobjetoObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.juego_95f1Code.GDobjetoObjects2.length;i<l;++i) {
    if ( gdjs.juego_95f1Code.GDobjetoObjects2[i].getVariableBoolean(gdjs.juego_95f1Code.GDobjetoObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.juego_95f1Code.GDobjetoObjects2[k] = gdjs.juego_95f1Code.GDobjetoObjects2[i];
        ++k;
    }
}
gdjs.juego_95f1Code.GDobjetoObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10828196);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(100);
}{gdjs.evtTools.sound.playSound(runtimeScene, "mal.wav", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10828932);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tiempo");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tiempo") >= 0.03;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("barraTiempo"), gdjs.juego_95f1Code.GDbarraTiempoObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(6).add(0.03);
}{for(var i = 0, len = gdjs.juego_95f1Code.GDbarraTiempoObjects2.length ;i < len;++i) {
    gdjs.juego_95f1Code.GDbarraTiempoObjects2[i].getBehavior("Resizable").setWidth(400 - (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() * 400 / runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber()));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tiempo");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)) >= runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber();
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(100);
}{gdjs.evtTools.sound.playSound(runtimeScene, "mal.wav", false, 100, 1);
}}

}


};gdjs.juego_95f1Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.juego_95f1Code.GDfondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("objeto"), gdjs.juego_95f1Code.GDobjetoObjects1);
gdjs.copyArray(runtimeScene.getObjects("txtPuntos"), gdjs.juego_95f1Code.GDtxtPuntosObjects1);
{gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.func(runtimeScene, gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDobjetoObjects1Objects, 90, 150, 1, 0.1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.juego_95f1Code.GDtxtPuntosObjects1.length ;i < len;++i) {
    gdjs.juego_95f1Code.GDtxtPuntosObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()));
}
}{for(var i = 0, len = gdjs.juego_95f1Code.GDfondoObjects1.length ;i < len;++i) {
    gdjs.juego_95f1Code.GDfondoObjects1[i].setYOffset(gdjs.juego_95f1Code.GDfondoObjects1[i].getYOffset() - (0.4));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("paintEfecto"), gdjs.juego_95f1Code.GDpaintEfectoObjects1);
gdjs.copyArray(runtimeScene.getObjects("txtMaxPuntos"), gdjs.juego_95f1Code.GDtxtMaxPuntosObjects1);
{for(var i = 0, len = gdjs.juego_95f1Code.GDpaintEfectoObjects1.length ;i < len;++i) {
    gdjs.juego_95f1Code.GDpaintEfectoObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("5;102;98", 0.5, "Vertical", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(-(1));
}{for(var i = 0, len = gdjs.juego_95f1Code.GDtxtMaxPuntosObjects1.length ;i < len;++i) {
    gdjs.juego_95f1Code.GDtxtMaxPuntosObjects1[i].getBehavior("Text").setText("Max: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "ok.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "mal.wav");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("paintEfecto"), gdjs.juego_95f1Code.GDpaintEfectoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.juego_95f1Code.GDpaintEfectoObjects1.length;i<l;++i) {
    if ( gdjs.juego_95f1Code.GDpaintEfectoObjects1[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.juego_95f1Code.GDpaintEfectoObjects1[k] = gdjs.juego_95f1Code.GDpaintEfectoObjects1[i];
        ++k;
    }
}
gdjs.juego_95f1Code.GDpaintEfectoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == -(1);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10802316);
}
}
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ayuda"), gdjs.juego_95f1Code.GDayudaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.juego_95f1Code.mapOfGDgdjs_9546juego_959595f1Code_9546GDayudaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.juego_95f1Code.GDayudaObjects1 */
{for(var i = 0, len = gdjs.juego_95f1Code.GDayudaObjects1.length ;i < len;++i) {
    gdjs.juego_95f1Code.GDayudaObjects1[i].getBehavior("Tween").addObjectPositionYTween2("ayuda", -(600), "easeOutQuad", 0.3, true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "seleccion.wav", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.juego_95f1Code.mapOfEmptyGDayudaObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == -(1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{



}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(2);
variables._declare("nColumna", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(2);
variables._declare("nFila", variable);
}
gdjs.juego_95f1Code.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10805236);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{ //Subevents
gdjs.juego_95f1Code.eventsList2(runtimeScene);} //End of subevents
}
gdjs.juego_95f1Code.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.juego_95f1Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 100;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10832124);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("paintEfecto"), gdjs.juego_95f1Code.GDpaintEfectoObjects1);
{for(var i = 0, len = gdjs.juego_95f1Code.GDpaintEfectoObjects1.length ;i < len;++i) {
    gdjs.juego_95f1Code.GDpaintEfectoObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("5;102;98", 0.5, "Vertical", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("paintEfecto"), gdjs.juego_95f1Code.GDpaintEfectoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 100;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.juego_95f1Code.GDpaintEfectoObjects1.length;i<l;++i) {
    if ( gdjs.juego_95f1Code.GDpaintEfectoObjects1[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.juego_95f1Code.GDpaintEfectoObjects1[k] = gdjs.juego_95f1Code.GDpaintEfectoObjects1[i];
        ++k;
    }
}
gdjs.juego_95f1Code.GDpaintEfectoObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "fin", true);
}}

}


};

gdjs.juego_95f1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.juego_95f1Code.GDobjetoObjects1.length = 0;
gdjs.juego_95f1Code.GDobjetoObjects2.length = 0;
gdjs.juego_95f1Code.GDobjetoObjects3.length = 0;
gdjs.juego_95f1Code.GDobjetoObjects4.length = 0;
gdjs.juego_95f1Code.GDsitioObjects1.length = 0;
gdjs.juego_95f1Code.GDsitioObjects2.length = 0;
gdjs.juego_95f1Code.GDsitioObjects3.length = 0;
gdjs.juego_95f1Code.GDsitioObjects4.length = 0;
gdjs.juego_95f1Code.GDtxtPuntosObjects1.length = 0;
gdjs.juego_95f1Code.GDtxtPuntosObjects2.length = 0;
gdjs.juego_95f1Code.GDtxtPuntosObjects3.length = 0;
gdjs.juego_95f1Code.GDtxtPuntosObjects4.length = 0;
gdjs.juego_95f1Code.GDbarraSuperiorObjects1.length = 0;
gdjs.juego_95f1Code.GDbarraSuperiorObjects2.length = 0;
gdjs.juego_95f1Code.GDbarraSuperiorObjects3.length = 0;
gdjs.juego_95f1Code.GDbarraSuperiorObjects4.length = 0;
gdjs.juego_95f1Code.GDbarraTiempoObjects1.length = 0;
gdjs.juego_95f1Code.GDbarraTiempoObjects2.length = 0;
gdjs.juego_95f1Code.GDbarraTiempoObjects3.length = 0;
gdjs.juego_95f1Code.GDbarraTiempoObjects4.length = 0;
gdjs.juego_95f1Code.GDbarraTiempoFondoObjects1.length = 0;
gdjs.juego_95f1Code.GDbarraTiempoFondoObjects2.length = 0;
gdjs.juego_95f1Code.GDbarraTiempoFondoObjects3.length = 0;
gdjs.juego_95f1Code.GDbarraTiempoFondoObjects4.length = 0;
gdjs.juego_95f1Code.GDrelojObjects1.length = 0;
gdjs.juego_95f1Code.GDrelojObjects2.length = 0;
gdjs.juego_95f1Code.GDrelojObjects3.length = 0;
gdjs.juego_95f1Code.GDrelojObjects4.length = 0;
gdjs.juego_95f1Code.GDayudaObjects1.length = 0;
gdjs.juego_95f1Code.GDayudaObjects2.length = 0;
gdjs.juego_95f1Code.GDayudaObjects3.length = 0;
gdjs.juego_95f1Code.GDayudaObjects4.length = 0;
gdjs.juego_95f1Code.GDtxtMaxPuntosObjects1.length = 0;
gdjs.juego_95f1Code.GDtxtMaxPuntosObjects2.length = 0;
gdjs.juego_95f1Code.GDtxtMaxPuntosObjects3.length = 0;
gdjs.juego_95f1Code.GDtxtMaxPuntosObjects4.length = 0;
gdjs.juego_95f1Code.GDpart1Objects1.length = 0;
gdjs.juego_95f1Code.GDpart1Objects2.length = 0;
gdjs.juego_95f1Code.GDpart1Objects3.length = 0;
gdjs.juego_95f1Code.GDpart1Objects4.length = 0;
gdjs.juego_95f1Code.GDpaintEfectoObjects1.length = 0;
gdjs.juego_95f1Code.GDpaintEfectoObjects2.length = 0;
gdjs.juego_95f1Code.GDpaintEfectoObjects3.length = 0;
gdjs.juego_95f1Code.GDpaintEfectoObjects4.length = 0;
gdjs.juego_95f1Code.GDfondoObjects1.length = 0;
gdjs.juego_95f1Code.GDfondoObjects2.length = 0;
gdjs.juego_95f1Code.GDfondoObjects3.length = 0;
gdjs.juego_95f1Code.GDfondoObjects4.length = 0;

gdjs.juego_95f1Code.eventsList5(runtimeScene);
gdjs.juego_95f1Code.GDobjetoObjects1.length = 0;
gdjs.juego_95f1Code.GDobjetoObjects2.length = 0;
gdjs.juego_95f1Code.GDobjetoObjects3.length = 0;
gdjs.juego_95f1Code.GDobjetoObjects4.length = 0;
gdjs.juego_95f1Code.GDsitioObjects1.length = 0;
gdjs.juego_95f1Code.GDsitioObjects2.length = 0;
gdjs.juego_95f1Code.GDsitioObjects3.length = 0;
gdjs.juego_95f1Code.GDsitioObjects4.length = 0;
gdjs.juego_95f1Code.GDtxtPuntosObjects1.length = 0;
gdjs.juego_95f1Code.GDtxtPuntosObjects2.length = 0;
gdjs.juego_95f1Code.GDtxtPuntosObjects3.length = 0;
gdjs.juego_95f1Code.GDtxtPuntosObjects4.length = 0;
gdjs.juego_95f1Code.GDbarraSuperiorObjects1.length = 0;
gdjs.juego_95f1Code.GDbarraSuperiorObjects2.length = 0;
gdjs.juego_95f1Code.GDbarraSuperiorObjects3.length = 0;
gdjs.juego_95f1Code.GDbarraSuperiorObjects4.length = 0;
gdjs.juego_95f1Code.GDbarraTiempoObjects1.length = 0;
gdjs.juego_95f1Code.GDbarraTiempoObjects2.length = 0;
gdjs.juego_95f1Code.GDbarraTiempoObjects3.length = 0;
gdjs.juego_95f1Code.GDbarraTiempoObjects4.length = 0;
gdjs.juego_95f1Code.GDbarraTiempoFondoObjects1.length = 0;
gdjs.juego_95f1Code.GDbarraTiempoFondoObjects2.length = 0;
gdjs.juego_95f1Code.GDbarraTiempoFondoObjects3.length = 0;
gdjs.juego_95f1Code.GDbarraTiempoFondoObjects4.length = 0;
gdjs.juego_95f1Code.GDrelojObjects1.length = 0;
gdjs.juego_95f1Code.GDrelojObjects2.length = 0;
gdjs.juego_95f1Code.GDrelojObjects3.length = 0;
gdjs.juego_95f1Code.GDrelojObjects4.length = 0;
gdjs.juego_95f1Code.GDayudaObjects1.length = 0;
gdjs.juego_95f1Code.GDayudaObjects2.length = 0;
gdjs.juego_95f1Code.GDayudaObjects3.length = 0;
gdjs.juego_95f1Code.GDayudaObjects4.length = 0;
gdjs.juego_95f1Code.GDtxtMaxPuntosObjects1.length = 0;
gdjs.juego_95f1Code.GDtxtMaxPuntosObjects2.length = 0;
gdjs.juego_95f1Code.GDtxtMaxPuntosObjects3.length = 0;
gdjs.juego_95f1Code.GDtxtMaxPuntosObjects4.length = 0;
gdjs.juego_95f1Code.GDpart1Objects1.length = 0;
gdjs.juego_95f1Code.GDpart1Objects2.length = 0;
gdjs.juego_95f1Code.GDpart1Objects3.length = 0;
gdjs.juego_95f1Code.GDpart1Objects4.length = 0;
gdjs.juego_95f1Code.GDpaintEfectoObjects1.length = 0;
gdjs.juego_95f1Code.GDpaintEfectoObjects2.length = 0;
gdjs.juego_95f1Code.GDpaintEfectoObjects3.length = 0;
gdjs.juego_95f1Code.GDpaintEfectoObjects4.length = 0;
gdjs.juego_95f1Code.GDfondoObjects1.length = 0;
gdjs.juego_95f1Code.GDfondoObjects2.length = 0;
gdjs.juego_95f1Code.GDfondoObjects3.length = 0;
gdjs.juego_95f1Code.GDfondoObjects4.length = 0;


return;

}

gdjs['juego_95f1Code'] = gdjs.juego_95f1Code;

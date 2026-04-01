
if (typeof gdjs.evtsExt__Helpers__Menu !== "undefined") {
  gdjs.evtsExt__Helpers__Menu.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Helpers__Menu = {};
gdjs.evtsExt__Helpers__Menu.GDobj_9595fondoObjects1= [];
gdjs.evtsExt__Helpers__Menu.GDobj_9595fondoObjects2= [];


gdjs.evtsExt__Helpers__Menu.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "UI", 0) == (gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("obj_fondo"), gdjs.evtsExt__Helpers__Menu.GDobj_9595fondoObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "NI", gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), ((gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2) - ((( gdjs.evtsExt__Helpers__Menu.GDobj_9595fondoObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Helpers__Menu.GDobj_9595fondoObjects1[0].getHeight()) / 2)), "UI", "easeInOutQuad", 0.5);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "UI", 0) < (gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
if (isConditionTrue_0) {
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "NI", gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2), "UI", "easeInOutQuad", 0.5);
}}

}


};

gdjs.evtsExt__Helpers__Menu.func = function(runtimeScene, obj_fondo, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"obj_fondo": obj_fondo
},
  _objectArraysMap: {
"obj_fondo": gdjs.objectsListsToArray(obj_fondo)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Helpers__Menu.GDobj_9595fondoObjects1.length = 0;
gdjs.evtsExt__Helpers__Menu.GDobj_9595fondoObjects2.length = 0;

gdjs.evtsExt__Helpers__Menu.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Helpers__Menu.registeredGdjsCallbacks = [];
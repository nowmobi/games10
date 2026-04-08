
if (typeof gdjs.evtsExt__PauseFocusLost__Active !== "undefined") {
  gdjs.evtsExt__PauseFocusLost__Active.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PauseFocusLost__Active = {};


gdjs.evtsExt__PauseFocusLost__Active.userFunc0x7e9c40 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var sound_manager = runtimeScene.getGame().getSoundManager();
var volumen = sound_manager.getGlobalVolume();

window.addEventListener('focus', function (event) {
sound_manager.setGlobalVolume(volumen);
runtimeScene.getGame().pause(false);
});

window.addEventListener('blur', function (event) {
sound_manager.setGlobalVolume(0);
runtimeScene.getGame().pause(true);
});
};
gdjs.evtsExt__PauseFocusLost__Active.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PauseFocusLost__Active.userFunc0x7e9c40(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PauseFocusLost__Active.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PauseFocusLost"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PauseFocusLost"),
  localVariables: [],
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


gdjs.evtsExt__PauseFocusLost__Active.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PauseFocusLost__Active.registeredGdjsCallbacks = [];
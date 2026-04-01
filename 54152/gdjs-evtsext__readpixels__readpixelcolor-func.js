
if (typeof gdjs.evtsExt__ReadPixels__ReadPixelColor !== "undefined") {
  gdjs.evtsExt__ReadPixels__ReadPixelColor.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ReadPixels__ReadPixelColor = {};


gdjs.evtsExt__ReadPixels__ReadPixelColor.userFunc0x7c81a0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const canvas = runtimeScene.getGame().getRenderer().getCanvas();
if (!canvas) return;

const canvasType = gdjs._readPixels.getCanvasType(canvas);
let x = eventsFunctionContext.getArgument("PositionX");
let y = eventsFunctionContext.getArgument("PositionY");
let layer = runtimeScene.getLayer("");
let position = layer.convertInverseCoords(x, y);

if (canvasType === "webgl" || canvasType === "webgl2" || canvasType === "experimental-webgl") {
    eventsFunctionContext.returnValue = gdjs._readPixels.getPixelColor(canvas, 0, position[0], position[1]) + ";" + gdjs._readPixels.getPixelColor(canvas, 1, position[0], position[1]) + ";" + gdjs._readPixels.getPixelColor(canvas, 2, position[0], position[1]);
    // 0 is for red, in pixel buffer
} else if (canvasType === "2d") {
    let ctx = canvas.getContext("2d");
    let data = ctx.getImageData(position[0], position[1], 1, 1).data;
    eventsFunctionContext.returnValue = data[0] + ";" + data[1] + ";" + data[2];
} else {
    eventsFunctionContext.returnValue = 0;
}
};
gdjs.evtsExt__ReadPixels__ReadPixelColor.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__ReadPixels__ReadPixelColor.userFunc0x7c81a0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ReadPixels__ReadPixelColor.func = function(runtimeScene, PositionX, PositionY, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ReadPixels__ReadPixelColor.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ReadPixels__ReadPixelColor.registeredGdjsCallbacks = [];
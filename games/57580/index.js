/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */

window.screenOrientation = "sensor_landscape";
var platform = ""; // "wx,oppo,vivo,qq,byte,h5";
var channel = null; // "tapon";

//-----libs-begin-----
 loadLib("libs/laya.core.js")
 loadLib("fillimage.js")
loadLib("libs/laya.html.js")
 loadLib("libs/laya.ui.js")
 loadLib("libs/laya.d3.js")
loadLib("libs/laya.physics3D.js")
//-----libs-end-------

loadLib("fc-framework/fc.define.js");
loadLib("fc-framework/fc.framework.js");
loadLib("fc-framework/fc.plugin.js");
loadLib("fc-framework/fc.utils.js");
loadLib("fc-framework/fc.ad.export.js");
loadLib("fc-framework/platform/fc.view.js");
loadLib("fc-framework/plugin/umeng/fc.umeng.js");
loadLib("fc-framework/adapter/fc.oppo.js");
loadLib("fc-framework/platform/fc.oppo.js");

// var scriptUrl = platform;
// if (scriptUrl == "native" && typeof fcn !== "undefined" && fcn.getScriptUrl != null) {
//     scriptUrl = fcn.getScriptUrl();
// }
// if (scriptUrl != null && scriptUrl != "" && scriptUrl != platform) {
//     loadLib(`${scriptUrl}`);
// }
// else {
//     loadLib(`fc-framework/platform/fc.${platform}.js`);
// }


loadLib("js/main.js");

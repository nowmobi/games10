/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//-----libs-begin-----
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.12.0/laya.core.js")
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.12.0/laya.ani.js")
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.12.0/laya.ui.js")
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.12.0/laya.html.js")
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.12.0/laya.d3.js")
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.12.0/laya.physics.js")
loadLib("libs/fairygui.js")
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.12.0/rawinflate.min.js")
//-----libs-end-------
loadLib("js/main.js");

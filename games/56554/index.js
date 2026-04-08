/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//-----libs-begin-----
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.9.0/laya.core.js")
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.9.0/laya.ani.js")
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.9.0/laya.d3.js")
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.9.0/laya.physics3d.js")
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.9.0/laya.ui.js")

//-----libs-end-------
loadLib("js/main.js");
window.SdkUtil = {
    TDEvent(e) {},
    ADInit() {},
    TDGuanQia(e, t) {},
    luzhiKaishi() {},
    ShowChaPing() {},
    ShowBanner() {},
    GetConfig(e) {},
    ShowVideo(e) {
        // e(1)
        if(YYGGames.rewardReady) {
            YYGGames.showReward(() => {
                e(1);
            }); 
        } else {
            YYGGames.showTip("No Available Video");
        }
    },
    CloseBanner() {}
}
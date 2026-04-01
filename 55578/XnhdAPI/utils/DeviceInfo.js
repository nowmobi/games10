var DeviceInfo;
!function(e) {
    function initScreen() {
        if (2 === XnhdDefault.Param.platType && 1 === XnhdDefault.Param.channelType) {
            Laya.Browser.window.wx.getSystemInfoSync().model.indexOf("iPhone X") > -1 && (XnhdDefault.Param.navigationViewHeight = 107)
        }
        "horizontal" === XnhdDefault.Param.screenMode ? (XnhdDefault.Param.screenHeight = 750,
        XnhdDefault.Param.screenWidth = Math.floor(750 * Laya.Browser.clientWidth / Laya.Browser.clientHeight)) : (XnhdDefault.Param.screenWidth = 750,
        XnhdDefault.Param.screenHeight = Math.floor(750 * Laya.Browser.clientHeight / Laya.Browser.clientWidth))
    }
    e.init = function() {
        initScreen(),
        1 === XnhdDefault.Param.platType ? (Laya.stage.screenMode = "none",
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO,
        XnhdDefault.Param.screenScale = Math.min(Laya.Browser.width / XnhdDefault.Param.screenWidth, Laya.Browser.height / XnhdDefault.Param.screenHeight),
        "number" != typeof e._minScale && (e._minScale = XnhdDefault.Param.screenScale),
        XnhdDefault.Param.screenScale < e._minScale && (XnhdDefault.Param.screenScale = e._minScale)) : (Laya.stage.screenMode = XnhdDefault.Param.screenMode,
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH,
        XnhdDefault.Param.screenScale = Laya.Browser.width / XnhdDefault.Param.screenWidth),
        Laya.stage.on(Laya.Event.RESIZE, this, ()=>{
            XnhdDefault.logDebug("触发了屏幕尺寸变化"),
            initScreen(),
            e.resizeCallback && e.resizeCallback()
        }
        )
    }
    ,
    e.initScreen = initScreen
}(DeviceInfo || (DeviceInfo = {})),
XnhdDefault.regClassName("DeviceInfo", DeviceInfo);

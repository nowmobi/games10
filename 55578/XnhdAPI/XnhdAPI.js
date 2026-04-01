var XnhdAPI;
!function (a) {
    let e;
    function nativeAd_reportAdClick(a, e) {
        2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 10 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 11 !== XnhdDefault.Param.channelType || HonorLiteGameAPI.AdManager.Default.nativeAd_reportAdClick(a, e) : HuaweiLiteGameAPI.AdManager.Default.nativeAd_reportAdClick(a, e) : VivoLiteGameAPI.AdManager.Default.nativeAd_reportAdClick(a, e) : OppoLiteGameAPI.AdManager.Default.nativeAd_reportAdClick(a, e)
    }
    a.init = function (e, t) {
        // if (function (a) {
        //     XnhdDefault.Param.localConfig = a,
        //         XnhdDefault.Param.screenMode = a.screenMode,
        //         XnhdDefault.Param.LayaVersion = a.LayaVersion,
        //         XnhdDefault.Param.gameVersion = a.gameVersion;
        //     let e = a.platType;
        //     if ("number" == typeof e && XnhdDefault.Param.channelList[e.toString()]) {
        //         XnhdDefault.Param.platType = a.platType;
        //         let t = a.channelType;
        //         "number" == typeof t && XnhdDefault.Param.channelList[e.toString()][t] ? XnhdDefault.Param.channelType = t : "string" == typeof t && XnhdDefault.Param.channelList[e.toString()].indexOf(t) > -1 ? XnhdDefault.Param.channelType = XnhdDefault.Param.channelList[e.toString()].indexOf(t) : XnhdDefault.logError("配置文件的channelType参数错误")
        //     } else
        //         XnhdDefault.logError("配置文件的platType参数错误")
        // }(e),
        //     // "Laya1" === XnhdDefault.Param.LayaVersion && (window.qg ? (2 === XnhdDefault.Param.channelType && Laya.QGMiniAdapter.init(),
        //     //     3 === XnhdDefault.Param.channelType && Laya.VVMiniAdapter.init(),
        //     //     7 === XnhdDefault.Param.channelType && Laya.KGMiniAdapter.init(),
        //     //     10 === XnhdDefault.Param.channelType && Laya.HWMiniAdapter.init()) : window.swan && laya.bd.mini.BMiniAdapter ? laya.bd.mini.BMiniAdapter.init() :
        //     //     window.qq ? Laya.QQMiniAdapter.init(!0, !1) : window.wx ? Laya.MiniAdpter.init(!0, !1) : window.tt ? Laya.MiniAdpter.init(!0, !1) :
        //     //         window.hbs && Laya.HWMiniAdapter.init()),
        //     e.Laya3DConfig && "boolean" == typeof e.Laya3DConfig.isAntialias) {
        //     if ("Laya2" === XnhdDefault.Param.LayaVersion) {
        //         let a = new Laya.Config3D;
        //         for (let t in e.Laya3DConfig)
        //             a[t] = e.Laya3DConfig[t];
        //         Laya3D.init(Laya.Browser.width, Laya.Browser.height, a)
        //     } else
        //         Laya3D.init(Laya.Browser.width, Laya.Browser.height);
        //     Laya.MouseManager.multiTouchEnabled = !!e.multiTouchEnabled,
        //         Laya.Input3D && (Laya.Input3D.multiTouchEnabled = !!e.multiTouchEnabled)
        // } else
            Laya.init(750, 1334, Laya.WebGL),
                Laya.MouseManager.multiTouchEnabled = !!e.multiTouchEnabled;
        XnhdDefault.Param.logSwitch = !!e.gameVersion1,
        Laya.stage.scaleMode = "showall"
        Laya.stage.alignV = "middle",
        Laya.stage.alignH = "center",
            // DeviceInfo.init(),
            a.saveDataToCache("initTime", Math.floor(Date.now() / 1e3), !0),
            a.saveDataToCache("lastSplashTime", Math.floor(Date.now() / 1e3), !0);
        let n = a.readDataFromCache("firstLaunchTime", !0);
        ("number" != typeof n || n <= 0) && a.saveDataToCache("firstLaunchTime", Math.floor(Date.now() / 1e3), !0),
            Laya.loader.load("xnhd.json", Laya.Handler.create(this, () => {
                var e = Laya.loader.getRes("xnhd.json");
                e && a.isset(e, "network") && "boolean" == typeof e.network && (XnhdDefault.Param.networkEnable = e.network,
                    console.log("set networkEnable=" + XnhdDefault.Param.networkEnable)),
                    e && a.isset(e, "ageTips") && "number" == typeof e.ageTips && (XnhdDefault.Param.ageTips = e.ageTips,
                        console.log("set ageTips=" + XnhdDefault.Param.ageTips)),
                    e && a.isset(e, "beianNumber") && "string" == typeof e.beianNumber && (XnhdDefault.Param.beianNumber = e.beianNumber,
                        console.log("set beianNumber=" + XnhdDefault.Param.beianNumber)),
                    e && a.isset(e, "avatarFrom") && "string" == typeof e.avatarFrom && (XnhdDefault.Param.avatarFrom = e.avatarFrom,
                        console.log("set avatarFrom=" + XnhdDefault.Param.avatarFrom))
            }
            )),
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType
                || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 4 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 5 !== XnhdDefault.Param.channelType
                    ? 2 !== XnhdDefault.Param.platType || 6 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 7 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType ||
                        8 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 9 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 10 !== XnhdDefault.Param.channelType ?
                            2 !== XnhdDefault.Param.platType || 11 !== XnhdDefault.Param.channelType ? 1 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 1 !== XnhdDefault.Param.platType ||
                                2 !== XnhdDefault.Param.channelType ? 1 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 1 !== XnhdDefault.Param.platType || 4 !== XnhdDefault.Param.channelType ?
                                    0 !== XnhdDefault.Param.platType ? (Laya.stage.on(Laya.Event.VISIBILITY_CHANGE, this, () => {
                                        Laya.stage.isVisibility ? (XnhdDefault.logDebug("进入前台"),
                                            XnhdDefault.Param._LayaCallback.onShow && XnhdDefault.Param._LayaCallback.onShow()) : (XnhdDefault.logDebug("进入后台"),
                                                XnhdDefault.Param._LayaCallback.onHide && XnhdDefault.Param._LayaCallback.onHide())
                                    }
                                    ),
                                        t && t()) :
                                        NativeGameAPI.init(XnhdDefault.Param.localConfig, t) : XingyouWebGameAPI.init(XnhdDefault.Param.localConfig.webType[XnhdDefault.Param.channelList[1][4]], t) :
                                XiaomiWebGameAPI.init(XnhdDefault.Param.localConfig.webType[XnhdDefault.Param.channelList[1][3]], t) :
                                QuTouTiaorWebGameAPI.init(XnhdDefault.Param.localConfig.webType[XnhdDefault.Param.channelList[1][2]], t) :
                                FunPepperWebGameAPI.init(XnhdDefault.Param.localConfig.webType[XnhdDefault.Param.channelList[1][1]], t) :
                                HonorLiteGameAPI.init(XnhdDefault.Param.localConfig.liteType[XnhdDefault.Param.channelList[2][10]], e.gameVersion, t) :
                            HuaweiLiteGameAPI.init(XnhdDefault.Param.localConfig.liteType[XnhdDefault.Param.channelList[2][10]], e.gameVersion, t) :
                        ZjtdLiteGameAPI.init(XnhdDefault.Param.localConfig.liteType[XnhdDefault.Param.channelList[2][9]], t) :
                        QQLiteGameAPI.init(XnhdDefault.Param.localConfig.liteType[XnhdDefault.Param.channelList[2][8]], t) :
                        XiaomiLiteGameAPI.init(XnhdDefault.Param.localConfig.liteType[XnhdDefault.Param.channelList[2][7]], t) :
                        BdLiteGameAPI.init(XnhdDefault.Param.localConfig.liteType[XnhdDefault.Param.channelList[2][6]], t) :
                    VivoPKGameAPI.init(XnhdDefault.Param.localConfig.liteType[XnhdDefault.Param.channelList[2][5]], t) :
                HudieLiteGameAPI.init(XnhdDefault.Param.localConfig.liteType[XnhdDefault.Param.channelList[2][4]], t) :
                VivoLiteGameAPI.init(XnhdDefault.Param.localConfig.liteType[XnhdDefault.Param.channelList[2][3]], e.gameVersion, t) :
                OppoLiteGameAPI.init(XnhdDefault.Param.localConfig.liteType[XnhdDefault.Param.channelList[2][2]], e.gameVersion, t) :
                WxLiteGameAPI.init(XnhdDefault.Param.localConfig.liteType[XnhdDefault.Param.channelList[2][1]], t)
    }
        ,
        a.accelerometerStart = function (a, e = null) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType || QQLiteGameAPI.accelerometerStart(a, e) : VivoLiteGameAPI.accelerometerStart(a, e) : OppoLiteGameAPI.accelerometerStart(a, e) : WxLiteGameAPI.accelerometerStart(a, e)
        }
        ,
        a.setResizeCallback = function (a) {
            DeviceInfo.resizeCallback = a
        }
        ,
        a.setDebugLogStatus = function (a) {
            XnhdDefault.Param.logSwitch = a
        }
        ,
        a.setGameConfigGetCallback = function (a) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 7 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 10 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 11 !== XnhdDefault.Param.channelType ? 0 !== XnhdDefault.Param.platType || NativeGameAPI.setGameConfigCallback(a) : HonorLiteGameAPI.setGameConfigCallback(a) : HuaweiLiteGameAPI.setGameConfigCallback(a) : QQLiteGameAPI.setGameConfigCallback(a) : XiaomiLiteGameAPI.setGameConfigCallback(a) : VivoLiteGameAPI.setGameConfigCallback(a) : OppoLiteGameAPI.setGameConfigCallback(a) : WxLiteGameAPI.setGameConfigCallback(a)
        }
        ,
        a.showTips = function (a, e = !0, t = 2e3) {
            XnhdDefault.showTips(a, e, t)
        }
        ,
        a.showDialog = function (a, e = null, t = "公告", n = "确定") {
            XnhdDefault.showDialog(a, e, t, n)
        }
        ,
        a.matchOpponents = function (a, e = null, t = 10) {
            XnhdDefault.matchOpponents(a, e, t)
        }
        ,
        a.loadUnpack = function (a = null) {
            let e = [];
            Laya.loader.load("unpack.json", Laya.Handler.create(this, () => {
                var t = Laya.loader.getRes("unpack.json");
                for (let a in t) {
                    let n = t[a];
                    n.indexOf(".") > -1 && e.push({
                        url: n,
                        type: Laya.Loader.IMAGE
                    })
                }
                e.length > 0 ? Laya.loader.load(e, Laya.Handler.create(this, t => {
                    console.log("unpack.json Loaded:" + e.length + " " + (t ? "success" : "failed")),
                        a && a(e.length)
                }
                )) : (console.log("unpack.json Loaded:0 success"),
                    a && a(0))
            }
            ), null, Laya.Loader.JSON)
        }
        ,
        a.isset = function isset(a, e = null, t = null) {
            return void 0 !== a && null != a && ("object" != typeof a || null == e || (Array.isArray(a) ? null == t ? void 0 !== a[e] && null !== a[e] : isset(a[e], t) : null == t ? "string" == typeof e && a.hasOwnProperty(e) : isset(a[e], t)))
        }
        ,
        a.getScreenHeight = function () {
            return 1334//XnhdDefault.Param.screenHeight
        }
        ,
        a.getScreenWidth = function () {
            return 750//XnhdDefault.Param.screenWidth
        }
        ,
        a.getScreenScale = function () {
            return 1//XnhdDefault.Param.screenScale
        }
        ,
        a.logDebug = function (a) {
            XnhdDefault.logDebug(a)
        }
        ,
        a.logError = function (a) {
            XnhdDefault.logError(a)
        }
        ,
        a.updateOtherScore = function (a) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType || QQLiteGameAPI.Subcontent.Manager.updateOtherScore(a) : WxLiteGameAPI.Subcontent.Manager.updateOtherScore(a)
        }
        ,
        a.updateHighScore = function (a) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType || QQLiteGameAPI.Subcontent.Manager.updateScore(a) : WxLiteGameAPI.Subcontent.Manager.updateScore(a)
        }
        ,
        a.login = function () {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType || QQLiteGameAPI.login() : WxLiteGameAPI.login()
        }
        ,
        a.clientIP = function () {
            return 2 === XnhdDefault.Param.platType && 1 === XnhdDefault.Param.channelType ? WxLiteGameAPI.clientIP() : 2 === XnhdDefault.Param.platType && 8 === XnhdDefault.Param.channelType ? QQLiteGameAPI.clientIP() : 2 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType ? OppoLiteGameAPI.clientIP() : 2 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType ? VivoLiteGameAPI.clientIP() : 2 === XnhdDefault.Param.platType && 7 === XnhdDefault.Param.channelType ? XiaomiLiteGameAPI.clientIP() : 2 === XnhdDefault.Param.platType && 10 === XnhdDefault.Param.channelType ? HuaweiLiteGameAPI.clientIP() : 2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType ? HonorLiteGameAPI.clientIP() : 0 === XnhdDefault.Param.platType ? NativeGameAPI.clientIP() : null
        }
        ,
        a.privacyUrl = function () {
            return 2 === XnhdDefault.Param.platType && 1 === XnhdDefault.Param.channelType ? WxLiteGameAPI.privacyUrl() : 2 === XnhdDefault.Param.platType && 8 === XnhdDefault.Param.channelType ? QQLiteGameAPI.privacyUrl() : 2 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType ? OppoLiteGameAPI.privacyUrl() : 2 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType ? VivoLiteGameAPI.privacyUrl() : 2 === XnhdDefault.Param.platType && 7 === XnhdDefault.Param.channelType ? XiaomiLiteGameAPI.privacyUrl() : 2 === XnhdDefault.Param.platType && 10 === XnhdDefault.Param.channelType ? HuaweiLiteGameAPI.privacyUrl() : 2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType ? HonorLiteGameAPI.privacyUrl() : 0 === XnhdDefault.Param.platType ? NativeGameAPI.privacyUrl() : null
        }
        ,
        a.bizSwitch = function () {
            return 2 === XnhdDefault.Param.platType && 1 === XnhdDefault.Param.channelType ? WxLiteGameAPI.bizSwitch() : 2 === XnhdDefault.Param.platType && 8 === XnhdDefault.Param.channelType ? QQLiteGameAPI.bizSwitch() : 2 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType ? OppoLiteGameAPI.bizSwitch() : 2 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType ? VivoLiteGameAPI.bizSwitch() : 2 === XnhdDefault.Param.platType && 7 === XnhdDefault.Param.channelType ? XiaomiLiteGameAPI.bizSwitch() : 2 === XnhdDefault.Param.platType && 10 === XnhdDefault.Param.channelType ? HuaweiLiteGameAPI.bizSwitch() : 2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType ? HonorLiteGameAPI.bizSwitch() : 0 === XnhdDefault.Param.platType ? NativeGameAPI.bizSwitch() : null
        }
        ,
        a.networkEnable = function () {
            return XnhdDefault.Param.networkEnable
        }
        ,
        a.beianNumber = function () {
            return XnhdDefault.Param.beianNumber
        }
        ,
        a.ageTips = function () {
            return XnhdDefault.Param.ageTips > 0 ? XnhdDefault.Param.ageTips : 2 === XnhdDefault.Param.platType && 1 === XnhdDefault.Param.channelType ? WxLiteGameAPI.ageTips() : 2 === XnhdDefault.Param.platType && 8 === XnhdDefault.Param.channelType ? QQLiteGameAPI.ageTips() : 2 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType ? OppoLiteGameAPI.ageTips() : 2 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType ? VivoLiteGameAPI.ageTips() : 2 === XnhdDefault.Param.platType && 7 === XnhdDefault.Param.channelType ? XiaomiLiteGameAPI.ageTips() : 2 === XnhdDefault.Param.platType && 10 === XnhdDefault.Param.channelType ? HuaweiLiteGameAPI.ageTips() : 2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType ? HonorLiteGameAPI.ageTips() : 0 === XnhdDefault.Param.platType ? NativeGameAPI.ageTips() : 0
        }
        ,
        a.writeFile = function (a, e, t, n) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 6 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 10 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 11 !== XnhdDefault.Param.channelType ? n && n(null) : HonorLiteGameAPI.writeFile(a, e, t, n) : HuaweiLiteGameAPI.writeFile(a, e, t, n) : QQLiteGameAPI.writeFile(a, e, t, n) : BdLiteGameAPI.writeFile(a, e, t, n) : VivoLiteGameAPI.writeFile(a, e, t, n) : OppoLiteGameAPI.writeFile(a, e, t, n) : WxLiteGameAPI.writeFile(a, e, t, n)
        }
        ,
        a.deleteFile = function (a, e) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 6 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 10 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 11 !== XnhdDefault.Param.channelType ? e && e(!1) : HonorLiteGameAPI.deleteFile(a, e) : HuaweiLiteGameAPI.deleteFile(a, e) : QQLiteGameAPI.deleteFile(a, e) : BdLiteGameAPI.deleteFile(a, e) : VivoLiteGameAPI.deleteFile(a, e) : OppoLiteGameAPI.deleteFile(a, e) : WxLiteGameAPI.deleteFile(a, e)
        }
        ,
        a.checkFile = function (a) {
            return 2 === XnhdDefault.Param.platType && 1 === XnhdDefault.Param.channelType ? WxLiteGameAPI.checkFile(a) : 2 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType ? OppoLiteGameAPI.checkFile(a) : 2 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType ? VivoLiteGameAPI.checkFile(a) : 2 === XnhdDefault.Param.platType && 6 === XnhdDefault.Param.channelType ? BdLiteGameAPI.checkFile(a) : 2 === XnhdDefault.Param.platType && 8 === XnhdDefault.Param.channelType ? QQLiteGameAPI.checkFile(a) : 2 === XnhdDefault.Param.platType && 10 === XnhdDefault.Param.channelType ? HuaweiLiteGameAPI.checkFile(a) : 2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType ? HonorLiteGameAPI.checkFile(a) : null
        }
        ,
        a.shareImage = function (a = !1, e = 0, t = null, n = null, l = null, r = null, h = !1) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 4 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 6 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 9 !== XnhdDefault.Param.channelType || ZjtdLiteGameAPI.shareImage(a, t, n, e, l, r) : QQLiteGameAPI.shareImage(a, t, n, e, l, r, h) : BdLiteGameAPI.shareImage(r, t, n) : HudieLiteGameAPI.shareImage(r, t, n) : WxLiteGameAPI.shareImage(a, t, n, e, l, r, h)
        }
        ,
        a.saveDataToCache = function (a, e, t = !1, n = null) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 7 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 9 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 10 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 11 !== XnhdDefault.Param.channelType ? (t && (e = e.toString()),
                Laya.LocalStorage.setItem(a, e)) : HonorLiteGameAPI.saveDataToCache(a, e, t) : HuaweiLiteGameAPI.saveDataToCache(a, e, t) : ZjtdLiteGameAPI.saveDataToCache(a, e, n) : QQLiteGameAPI.saveDataToCache(a, e, n) : XiaomiLiteGameAPI.saveDataToCache(a, e, t) : VivoLiteGameAPI.saveDataToCache(a, e, t) : OppoLiteGameAPI.saveDataToCache(a, e, t) : WxLiteGameAPI.saveDataToCache(a, e, n)
        }
        ,
        a.readDataFromCache = function (a, e = !1) {
            if (2 === XnhdDefault.Param.platType && 1 === XnhdDefault.Param.channelType) {
                let t = WxLiteGameAPI.getDataFromCache(a);
                return e && "string" == typeof t && (t = 0 === t.length ? 0 : parseInt(t)),
                    t
            }
            if (2 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType)
                return OppoLiteGameAPI.getDataFromCache(a, e);
            if (2 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType)
                return VivoLiteGameAPI.getDataFromCache(a, e);
            if (2 === XnhdDefault.Param.platType && 7 === XnhdDefault.Param.channelType)
                return XiaomiLiteGameAPI.getDataFromCache(a, e);
            if (2 === XnhdDefault.Param.platType && 8 === XnhdDefault.Param.channelType) {
                let t = QQLiteGameAPI.getDataFromCache(a);
                return e && "string" == typeof t && (t = 0 === t.length ? 0 : parseInt(t)),
                    t
            }
            if (2 === XnhdDefault.Param.platType && 9 === XnhdDefault.Param.channelType) {
                let t = ZjtdLiteGameAPI.getDataFromCache(a);
                return e && "string" == typeof t && (t = 0 === t.length ? 0 : parseInt(t)),
                    t
            }
            if (2 === XnhdDefault.Param.platType && 10 === XnhdDefault.Param.channelType)
                return HuaweiLiteGameAPI.getDataFromCache(a, e);
            if (2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType)
                return HonorLiteGameAPI.getDataFromCache(a, e);
            let t = Laya.LocalStorage.getItem(a);
            return e && t ? parseInt(t) : t
        }
        ,
        a.loadSubpackage = function (a, e = null, t = null, n = null) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType || VivoLiteGameAPI.loadSubpackage(a, e, t, n) : OppoLiteGameAPI.loadSubpackage(a, e, t, n) : WxLiteGameAPI.loadSubpackage(a, e, t, n)
        }
        ,
        a.requestHttp = function (e, t, n = "", l = null, r = "post", h = "json", p = null) {
            a.logDebug("---------------request http---------------networkEnable:" + a.networkEnable()),
                a.networkEnable() && (2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 6 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType ? XnhdTools.normalRequestHttp(e, t, n, l, r, h, p) : QQLiteGameAPI.requestHttpOriginal(e, t, n, l, r) : BdLiteGameAPI.requestHttpOriginal(e, t, n, l, r) : WxLiteGameAPI.requestHttpOriginal(e, t, n, l, r, h))
        }
        ,
        a.onShow = function (a) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 4 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 10 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 11 !== XnhdDefault.Param.channelType ? 0 !== XnhdDefault.Param.platType ? XnhdDefault.Param._LayaCallback.onShow = a : NativeGameAPI.setOnShow(a) : HonorLiteGameAPI.setOnShow(a) : HuaweiLiteGameAPI.setOnShow(a) : QQLiteGameAPI.setOnShow(a) : HudieLiteGameAPI.setOnShowFunc(a) : VivoLiteGameAPI.setOnShow(a) : OppoLiteGameAPI.setOnShow(a) : WxLiteGameAPI.setOnShow(a)
        }
        ,
        a.onHide = function (a) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 4 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 10 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 11 !== XnhdDefault.Param.channelType ? XnhdDefault.Param._LayaCallback.onHide = a : HonorLiteGameAPI.setOnHide(a) : HuaweiLiteGameAPI.setOnHide(a) : QQLiteGameAPI.setOnHide(a) : HudieLiteGameAPI.setOnHideFunc(a) : VivoLiteGameAPI.setOnHide(a) : OppoLiteGameAPI.setOnHide(a) : WxLiteGameAPI.setOnHide(a)
        }
        ,
        a.rankList_setTextColor = function (a) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType || QQLiteGameAPI.Subcontent.Manager.setTextColor(a) : WxLiteGameAPI.Subcontent.Manager.setTextColor(a)
        }
        ,
        a.rankList_showBig = function (a, e = null) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType || QQLiteGameAPI.Subcontent.Manager.showRankList(a) : WxLiteGameAPI.Subcontent.Manager.showRankList(a, e)
        }
        ,
        a.rankList_moveBig = function (a) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType || QQLiteGameAPI.Subcontent.Manager.moveRankList(a) : WxLiteGameAPI.Subcontent.Manager.moveRankList(a)
        }
        ,
        a.rankList_close = function () {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType || QQLiteGameAPI.Subcontent.Manager.closeWxSub() : WxLiteGameAPI.Subcontent.Manager.closeWxSub()
        }
        ,
        a.rankList_showSmall = function (a) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType || QQLiteGameAPI.Subcontent.Manager.showSmallRankList(a) : WxLiteGameAPI.Subcontent.Manager.showSmallRankList(a)
        }
        ,
        a.rankList_initNextFriend = function (a, e) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType || QQLiteGameAPI.Subcontent.Manager.showNextFriend(a, e) : WxLiteGameAPI.Subcontent.Manager.showNextFriend(a, e)
        }
        ,
        a.rankList_showNextFriend = function (a) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType || QQLiteGameAPI.Subcontent.Manager.changeNextFriend(a) : WxLiteGameAPI.Subcontent.Manager.changeNextFriend(a)
        }
        ,
        a.showBox9Ad = function (a = null, e = !1, t = null) {
            2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType || VivoLiteGameAPI.AdManager.Default.showBox9Ad(a, e, t) : OppoLiteGameAPI.AdManager.Default.showBox9Ad(a, e, t)
        }
        ,
        a.hideBox9Ad = function (a = !1) {
            2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType || VivoLiteGameAPI.AdManager.Default.hideBox9Ad(a) : OppoLiteGameAPI.AdManager.Default.destroyBox9Ad()
        }
        ,
        a.showCustomAd = function (a, e = -1, t = null, n = null, l = null) {
            2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 11 !== XnhdDefault.Param.channelType ? n && n() : HonorLiteGameAPI.AdManager.Default.showCustomAd(a, e, t, n, l) : VivoLiteGameAPI.AdManager.Default.showCustomAd(a, e, t, n, l) : OppoLiteGameAPI.AdManager.Default.showCustomAd(a, e, t, n, l)
        }
        ,
        a.hideCustomAd = function (a = !0) {
            2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 11 !== XnhdDefault.Param.channelType || HonorLiteGameAPI.AdManager.Default.hideCustomAd(a) : VivoLiteGameAPI.AdManager.Default.hideCustomAd(a) : OppoLiteGameAPI.AdManager.Default.hideCustomAd()
        }
        ,
        a.showDrawerAd = function (a = null, e = null) {
            2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType || OppoLiteGameAPI.AdManager.Default.showDrawerAd(a)
        }
        ,
        a.hideDrawAd = function (a = !1) {
            2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType || OppoLiteGameAPI.AdManager.Default.hideDrawerAd(a)
        }
        ,
        a.showBannerAd = function (a = XnhdDefault.Param.screenHeight - 220, e = null, t = null, n = null) {
            console.log("showBannerAd:" + a + "/" + XnhdDefault.Param.screenHeight),
                Laya.timer.once(500, this, () => {
                    2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 4 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 6 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 7 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 9 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 10 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 11 !== XnhdDefault.Param.channelType ? 1 !== XnhdDefault.Param.platType || 4 !== XnhdDefault.Param.channelType ? 0 !== XnhdDefault.Param.platType ? t && t() : NativeGameAPI.showBannerAd(a, e, t, n) : XingyouWebGameAPI.showBannerAd(a, e, t) : HonorLiteGameAPI.AdManager.Default.showBannerAd(a, e, t) : HuaweiLiteGameAPI.AdManager.Default.showBannerAd(a, e, t) : ZjtdLiteGameAPI.AdManager.Default.showBannerAd(a, e, t) : QQLiteGameAPI.AdManager.Default.showBannerAd(a, e, t) : XiaomiLiteGameAPI.AdManager.Default.showBannerAd(e, t) : BdLiteGameAPI.AdManager.Default.showBannerAd(a) : HudieLiteGameAPI.AdManager.Default.showBannerAd(a) : "over" == n || "box" == n ? VivoLiteGameAPI.AdManager.Default.showBoxBannerAd(e, t) : VivoLiteGameAPI.AdManager.Default.showBannerAd(e, t) : "must" == n ? OppoLiteGameAPI.AdManager.Default.showOppoLiteBannerAd(a, e, t, !0) : "over" == n ? OppoLiteGameAPI.AdManager.Default.boxBannerInited() ? OppoLiteGameAPI.AdManager.Default.showBoxBannerAd(e, t) : OppoLiteGameAPI.AdManager.Default.showOppoLiteBannerAd(a, e, t) : OppoLiteGameAPI.AdManager.Default.showRealBanner() : WxLiteGameAPI.AdManager.Default.showBannerAd(a, e, t)
                }
                )
        }
        ,
        a.hideBannerAd = function () {
            return 2 === XnhdDefault.Param.platType && 1 === XnhdDefault.Param.channelType ? (WxLiteGameAPI.AdManager.Default.hideBannerAd(),
                void WxLiteGameAPI.AdManager.Default.customBannerAd_destroy()) : 2 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType ? (OppoLiteGameAPI.getPlatformVersion() >= 1076 && OppoLiteGameAPI.AdManager.Default.hideBoxBannerAd(!1),
                    void OppoLiteGameAPI.AdManager.Default.hideBannerAd()) : 2 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType ? (VivoLiteGameAPI.AdManager.Default.hideBoxBannerAd(!1),
                        void VivoLiteGameAPI.AdManager.Default.hideBannerAd()) : void (2 !== XnhdDefault.Param.platType || 4 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 6 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 7 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 9 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 10 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 11 !== XnhdDefault.Param.channelType ? 1 !== XnhdDefault.Param.platType || 4 !== XnhdDefault.Param.channelType ? 0 !== XnhdDefault.Param.platType || NativeGameAPI.hideBannerAd() : XingyouWebGameAPI.closeBannerAd() : HonorLiteGameAPI.AdManager.Default.hideBannerAd() : HuaweiLiteGameAPI.AdManager.Default.hideBannerAd() : ZjtdLiteGameAPI.AdManager.Default.hideBannerAd() : QQLiteGameAPI.AdManager.Default.hideBannerAd() : XiaomiLiteGameAPI.AdManager.Default.hideBannerAd() : BdLiteGameAPI.AdManager.Default.hideBannerAd() : HudieLiteGameAPI.AdManager.Default.hideBannerAd())
        }
        ,
        a.showVideoAd = function (a, e, t = null) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 4 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 6 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 7 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 9 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 10 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 11 !== XnhdDefault.Param.channelType ? 1 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 1 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 1 !== XnhdDefault.Param.platType || 4 !== XnhdDefault.Param.channelType ? 0 !== XnhdDefault.Param.platType ? e && e() : NativeGameAPI.showVideoAd(a, e, t) : XingyouWebGameAPI.showVideoAd(a, e) : XiaomiWebGameAPI.showVideoAd(a, e) : QuTouTiaorWebGameAPI.AdManager.Default.showVideoAd(a, e) : HonorLiteGameAPI.AdManager.Default.showHonorLiteVideoAd(a, e) : HuaweiLiteGameAPI.AdManager.Default.showHuaweiLiteVideoAd(a, e) : ZjtdLiteGameAPI.AdManager.Default.showVideoAd(a, e) : QQLiteGameAPI.AdManager.Default.showVideoAd(a, e) : XiaomiLiteGameAPI.AdManager.Default.showVideoAd(a, e) : BdLiteGameAPI.AdManager.Default.showVideoAd(a, e) : HudieLiteGameAPI.AdManager.Default.showVideoAd(a, e) : VivoLiteGameAPI.AdManager.Default.showVivoLiteVideoAd(a, e) : OppoLiteGameAPI.AdManager.Default.showOppoLiteVideoAd(a, e) : WxLiteGameAPI.AdManager.Default.showVideoAd(a, e)
        }
        ,
        a.checkVideoAd = function () {
            if (2 === XnhdDefault.Param.platType && 1 === XnhdDefault.Param.channelType)
                return WxLiteGameAPI.AdManager.Default.getVideoStatus() ? 3 : 0;
            if (2 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType)
                return OppoLiteGameAPI.AdManager.Default.getVideoStatus() ? 3 : 0;
            if (2 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType)
                return VivoLiteGameAPI.AdManager.Default.getVideoStatus() ? 3 : 0;
            if (0 === XnhdDefault.Param.platType)
                return NativeGameAPI.checkVideoAd() ? 3 : 0;
            if (2 === XnhdDefault.Param.platType && 4 === XnhdDefault.Param.channelType) {
                let a = HudieLiteGameAPI.AdManager.Default.getVideoStatus();
                return 3010004 === a ? 1 : [3010005, 3010006].indexOf(a) > -1 ? 2 : 0 === a ? 3 : 0
            }
            if (2 === XnhdDefault.Param.platType && 6 === XnhdDefault.Param.channelType) {
                let a = BdLiteGameAPI.AdManager.Default.getVideoStatus();
                return 3010004 === a ? 1 : [3010005, 3010006].indexOf(a) > -1 ? 2 : 0 === a ? 3 : 0
            }
            return 2 === XnhdDefault.Param.platType && 7 === XnhdDefault.Param.channelType ? XiaomiLiteGameAPI.AdManager.Default.getVideoStatus() ? 3 : 0 : 2 === XnhdDefault.Param.platType && 8 === XnhdDefault.Param.channelType ? QQLiteGameAPI.AdManager.Default.getVideoStatus() ? 3 : 0 : 2 === XnhdDefault.Param.platType && 9 === XnhdDefault.Param.channelType ? ZjtdLiteGameAPI.AdManager.Default.getVideoStatus() ? 3 : 0 : 2 === XnhdDefault.Param.platType && 10 === XnhdDefault.Param.channelType ? HuaweiLiteGameAPI.AdManager.Default.getVideoStatus() ? 3 : 0 : 2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType ? HonorLiteGameAPI.AdManager.Default.getVideoStatus() ? 3 : 0 : 1 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType ? QuTouTiaorWebGameAPI.AdManager.Default.getVideoStatus() ? 3 : 0 : 1 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType ? 3 : 1 === XnhdDefault.Param.platType && 4 === XnhdDefault.Param.channelType ? 3 : 0
        }
        ,
        a.showInterstitialAd = function (a = null, e = null, t = null) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 7 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 10 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 11 !== XnhdDefault.Param.channelType ? 0 !== XnhdDefault.Param.platType ? e && e() : NativeGameAPI.showInterstitialAd(a, e, t) : HonorLiteGameAPI.AdManager.Default.showHonorLiteInterstitialAd(a, e) : HuaweiLiteGameAPI.AdManager.Default.showHuaweiLiteInterstitialAd(a, e) : XiaomiLiteGameAPI.AdManager.Default.showInterstitialAd(a, e) : VivoLiteGameAPI.AdManager.Default.showInterstitialAd(a, e) : OppoLiteGameAPI.AdManager.Default.showOppoLiteInterstitialAd(a, e) : WxLiteGameAPI.AdManager.Default.showInterstitial(a, e)
        }
        ,
        a.getAddrParam = function () {
            return 2 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType ? OppoLiteGameAPI.getAddrParam() : 2 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType ? VivoLiteGameAPI.getAddrParam() : 2 === XnhdDefault.Param.platType && 10 === XnhdDefault.Param.channelType ? HuaweiLiteGameAPI.getAddrParam() : 2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType ? HonorLiteGameAPI.getAddrParam() : 0 === XnhdDefault.Param.platType ? NativeGameAPI.getAddrParam() : 0
        }
        ,
        a.getModeParam = function () {
            return 2 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType ? OppoLiteGameAPI.getModeParam() : 2 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType ? VivoLiteGameAPI.getModeParam() : 2 === XnhdDefault.Param.platType && 10 === XnhdDefault.Param.channelType ? HuaweiLiteGameAPI.getModeParam() : 2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType ? HonorLiteGameAPI.getModeParam() : 0 === XnhdDefault.Param.platType ? NativeGameAPI.getModeParam() : 0
        }
        ,
        a.getNativeCtrl = function (a) {
            return 2 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType ? OppoLiteGameAPI.AdManager.Default.nativeAd_getNativeCtrl(a) : 2 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType ? VivoLiteGameAPI.AdManager.Default.nativeAd_getNativeCtrl(a) : 2 === XnhdDefault.Param.platType && 10 === XnhdDefault.Param.channelType ? HuaweiLiteGameAPI.AdManager.Default.nativeAd_getNativeCtrl(a) : 2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType ? HonorLiteGameAPI.AdManager.Default.nativeAd_getNativeCtrl(a) : 0 === XnhdDefault.Param.platType ? NativeGameAPI.getNativeCtrl() : 0
        }
        ,
        a.nativeAd_get = function (a = !1) {
            return 2 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType ? OppoLiteGameAPI.AdManager.Default.nativeAd_get(a) : 2 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType ? VivoLiteGameAPI.AdManager.Default.nativeAd_get(a) : 2 === XnhdDefault.Param.platType && 10 === XnhdDefault.Param.channelType ? HuaweiLiteGameAPI.AdManager.Default.nativeAd_get(a) : 2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType ? HonorLiteGameAPI.AdManager.Default.nativeAd_get(a) : 0 === XnhdDefault.Param.platType ? NativeGameAPI.nativeAd_get(a) : []
        }
        ,
        a.nativeAd_getSync = function (a) {
            return 2 === XnhdDefault.Param.platType && 10 === XnhdDefault.Param.channelType ? HuaweiLiteGameAPI.AdManager.Default.createNativeAdSync(a) : 2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType ? HonorLiteGameAPI.AdManager.Default.createNativeAdSync(a) : void 0
        }
        ,
        a.nativeAd_getFakeStatus = function () {
            return 2 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType ? OppoLiteGameAPI.AdManager.Default.nativeAd_getFakeStatus() : 2 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType ? VivoLiteGameAPI.AdManager.Default.nativeAd_getFakeStatus() : 2 === XnhdDefault.Param.platType && 10 === XnhdDefault.Param.channelType ? HuaweiLiteGameAPI.AdManager.Default.nativeAd_getFakeStatus() : 2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType && HonorLiteGameAPI.AdManager.Default.nativeAd_getFakeStatus()
        }
        ,
        a.nativeAd_CTR_check = function (a = .1) {
            a > 1 && (a = 1),
                a < 0 && (a = 0);
            let e = 2;
            return 2 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType && (e = OppoLiteGameAPI.AdManager.Default.nativeAd_CTR_get()),
                2 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType && (e = VivoLiteGameAPI.AdManager.Default.nativeAd_CTR_get()),
                2 === XnhdDefault.Param.platType && 10 === XnhdDefault.Param.channelType && (e = HuaweiLiteGameAPI.AdManager.Default.nativeAd_CTR_get()),
                2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType && (e = HonorLiteGameAPI.AdManager.Default.nativeAd_CTR_get()),
                0 === XnhdDefault.Param.platType && (e = NativeGameAPI.nativeAd_CTR_get()),
                e <= a
        }
        ,
        a.nativeAd_canShow = function () {
            return 2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType || OppoLiteGameAPI.nativeAd_canShow()
        }
        ,
        a.nativeAd_setTapArea = function (t, n, l, r = null) {
            if (2 === XnhdDefault.Param.platType && [2, 3, 10, 11].indexOf(XnhdDefault.Param.channelType) > -1) {
                let a = n;
                return (e = t).on(Laya.Event.CLICK, this, () => {
                    nativeAd_reportAdClick(a, !1),
                        l && l()
                }
                ),
                    void function (a) {
                        2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 10 !== XnhdDefault.Param.channelType ? 2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType && HonorLiteGameAPI.AdManager.Default.nativeAd_reportAdShow(a) : HuaweiLiteGameAPI.AdManager.Default.nativeAd_reportAdShow(a) : VivoLiteGameAPI.AdManager.Default.nativeAd_reportAdShow(a) : OppoLiteGameAPI.AdManager.Default.nativeAd_reportAdShow(a)
                    }(n)
            }
            if (0 === XnhdDefault.Param.platType) {
                let e = t.globalScaleX
                    , n = t.globalScaleY
                    , h = new Laya.Point(t.x, t.y)
                    , p = t.parent;
                for (; p && !p.destroyed && p != Laya.stage;)
                    h = p.toParentPoint(h),
                        p = p.parent;
                p && !p.destroyed || (h.x = h.x * XnhdDefault.Param.screenScale,
                    h.y = h.y * XnhdDefault.Param.screenScale,
                    e *= XnhdDefault.Param.screenScale,
                    n *= XnhdDefault.Param.screenScale);
                let m = Math.round(t.width * e)
                    , d = Math.round(t.height * n)
                    , u = -t.pivotX * e
                    , i = -t.pivotY * n;
                return h.x += u,
                    h.y += i,
                    a.logDebug("nativeAd_setTapArea:1"),
                    void NativeGameAPI.nativeAd_show(h.y, h.x, m, d, l, r)
            }
        }
        ,
        a.nativeAd_destroy = function () {
            e && e.offAll(),
                2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 10 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 11 !== XnhdDefault.Param.channelType ? 0 !== XnhdDefault.Param.platType || NativeGameAPI.nativeAd_destroy() : HonorLiteGameAPI.AdManager.Default.nativeAd_destroy() : HuaweiLiteGameAPI.AdManager.Default.nativeAd_destroy() : VivoLiteGameAPI.AdManager.Default.nativeAd_destroy() : OppoLiteGameAPI.AdManager.Default.nativeAd_destroy()
        }
        ,
        a.nativeAd_reportAdClick = nativeAd_reportAdClick,
        a.showFloatAd = function () {
            0 !== XnhdDefault.Param.platType || NativeGameAPI.showFloatAd()
        }
        ,
        a.setLoadingProgress = function (a) {
            2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 4 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 5 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 10 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 11 !== XnhdDefault.Param.channelType ? 0 !== XnhdDefault.Param.platType || NativeGameAPI.setLoadingProgress(a) : HonorLiteGameAPI.setLoadingProgress(a) : HuaweiLiteGameAPI.setLoadingProgress(a) : VivoPKGameAPI.setPKLoadingProgress(a) : HudieLiteGameAPI.setLoadingProgress(a) : VivoLiteGameAPI.setLoadingProgress(a) : OppoLiteGameAPI.setLoadingProgress(a)
        }
        ,
        a.getPlayerAuthorize = function (a, e) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType ? e && e() : QQLiteGameAPI.getUserInfo(a, e, null) : WxLiteGameAPI.getUserInfo(a, e, null)
        }
        ,
        a.getOpenId = function () {
            return 2 === XnhdDefault.Param.platType && 1 === XnhdDefault.Param.channelType ? WxLiteGameAPI.Param.openid : 2 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType ? OppoLiteGameAPI.Param.userInfo.uid : 2 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType ? VivoLiteGameAPI.Param.userInfo.openId : 2 === XnhdDefault.Param.platType && 8 === XnhdDefault.Param.channelType ? QQLiteGameAPI.Param.openid : 2 === XnhdDefault.Param.platType && 10 === XnhdDefault.Param.channelType ? HuaweiLiteGameAPI.Param.userInfo.uid : 2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType ? HonorLiteGameAPI.Param.userInfo.uid : ""
        }
        ,
        a.getPlayerAvatar = function () {
            return 2 === XnhdDefault.Param.platType && 1 === XnhdDefault.Param.channelType ? (null != WxLiteGameAPI.Param.userInfo.avatarUrl && 0 != WxLiteGameAPI.Param.userInfo.avatarUrl.length || WxLiteGameAPI.getUserInfo(null, null, null),
                WxLiteGameAPI.Param.userInfo.avatarUrl) : 2 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType ? OppoLiteGameAPI.Param.userInfo.avatar : 2 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType ? VivoLiteGameAPI.Param.userInfo.biggerAvatar : 2 === XnhdDefault.Param.platType && 8 === XnhdDefault.Param.channelType ? QQLiteGameAPI.Param.userInfo.avatarUrl : 2 === XnhdDefault.Param.platType && 10 === XnhdDefault.Param.channelType ? HuaweiLiteGameAPI.Param.userInfo.avatar : 2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType ? HonorLiteGameAPI.Param.userInfo.avatar : ""
        }
        ,
        a.getPlayerNickName = function () {
            return 2 === XnhdDefault.Param.platType && 1 === XnhdDefault.Param.channelType ? WxLiteGameAPI.Param.userInfo.nickName : 2 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType ? OppoLiteGameAPI.Param.userInfo.nickName : 2 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType ? VivoLiteGameAPI.Param.userInfo.nickName : 2 === XnhdDefault.Param.platType && 8 === XnhdDefault.Param.channelType ? QQLiteGameAPI.Param.userInfo.nickName : 2 === XnhdDefault.Param.platType && 10 === XnhdDefault.Param.channelType ? HuaweiLiteGameAPI.Param.userInfo.nickName : 2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType ? HonorLiteGameAPI.Param.userInfo.nickName : ""
        }
        ,
        a.specializeBtn = function (a, e, t = null, n = null) {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType || QQLiteGameAPI.createBtnWithAuthorize(a, e, t, n) : WxLiteGameAPI.createBtnWithAuthorize(a, e, t, n)
        }
        ,
        a.showSpecialBtn = function () {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 4 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType || QQLiteGameAPI.showBtnWithAuthorize() : HudieLiteGameAPI.showBtnWithAuthorize() : WxLiteGameAPI.showBtnWithAuthorize()
        }
        ,
        a.hideSpecialBtn = function () {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 4 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType || QQLiteGameAPI.hideBtnWithAuthorize() : HudieLiteGameAPI.hideBtnWithAuthorize() : WxLiteGameAPI.hideBtnWithAuthorize()
        }
        ,
        a.exitProgram = function () {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 4 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 6 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 7 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 9 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 10 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 11 !== XnhdDefault.Param.channelType ? 0 !== XnhdDefault.Param.platType || NativeGameAPI.exitProgram() : HonorLiteGameAPI.exitProgram() : HuaweiLiteGameAPI.exitProgram() : ZjtdLiteGameAPI.exitProgram() : QQLiteGameAPI.exitProgram() : XiaomiLiteGameAPI.exitProgram() : BdLiteGameAPI.exitProgram() : HudieLiteGameAPI.exitProgram() : VivoLiteGameAPI.exitProgram() : OppoLiteGameAPI.exitProgram() : WxLiteGameAPI.exitProgram()
        }
        ,
        a.checkVerify = function () {
            return 2 === XnhdDefault.Param.platType && 1 === XnhdDefault.Param.channelType ? WxLiteGameAPI.checkVerify() : 2 === XnhdDefault.Param.platType && 2 === XnhdDefault.Param.channelType ? OppoLiteGameAPI.checkVerify() : 2 === XnhdDefault.Param.platType && 3 === XnhdDefault.Param.channelType ? VivoLiteGameAPI.checkVerify() : 2 === XnhdDefault.Param.platType && 7 === XnhdDefault.Param.channelType ? XiaomiLiteGameAPI.checkVerify() : 2 === XnhdDefault.Param.platType && 8 === XnhdDefault.Param.channelType ? QQLiteGameAPI.checkVerify() : 2 === XnhdDefault.Param.platType && 10 === XnhdDefault.Param.channelType ? HuaweiLiteGameAPI.checkVerify() : 2 === XnhdDefault.Param.platType && 11 === XnhdDefault.Param.channelType ? HonorLiteGameAPI.checkVerify() : 0 === XnhdDefault.Param.platType && NativeGameAPI.checkVerify()
        }
        ,
        a.vibrateShort = function () {
            2 !== XnhdDefault.Param.platType || 1 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 2 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 3 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 8 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 9 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 10 !== XnhdDefault.Param.channelType ? 2 !== XnhdDefault.Param.platType || 11 !== XnhdDefault.Param.channelType ? 0 !== XnhdDefault.Param.platType || NativeGameAPI.vibrateShort() : HonorLiteGameAPI.vibrateShort() : HuaweiLiteGameAPI.vibrateShort() : ZjtdLiteGameAPI.vibrateShort() : QQLiteGameAPI.vibrateShort() : VivoLiteGameAPI.vibrateShort() : OppoLiteGameAPI.vibrateShort() : WxLiteGameAPI.vibrateShort()
        }
        ,
        a.getUrlParam = function (a) {
            return XnhdDefault.getUrlParam(a)
        }
        ,
        a.updateGameStat = function (a) {
            0 !== XnhdDefault.Param.platType || NativeGameAPI.updateGameStat(a)
        }
}(XnhdAPI || (XnhdAPI = {})),
    XnhdDefault.regClassName("XnhdAPI", XnhdAPI);

var OppoLiteGameAPI;
!function(t) {
    let e;
    t.loadSubpackage = function(t, e=null, i=null, a=null) {
        qg.loadSubpackage({
            name: t,
            success: function(t) {
                console.log("load subpackage success:" + t),
                e && e(t)
            },
            fail: function(t) {
                console.log("load subpackage fail:" + t),
                i && i(t)
            },
            complete: function(t) {
                console.log("load subpackage complete," + t),
                a && a(t)
            }
        })
    }
    ,
    t.accelerometerStart = function(t, e=null) {
        t ? (qg.onAccelerometerChange(function(t, i, a) {
            "object" == typeof t ? e && e(t) : "number" == typeof t && "number" == typeof i && "number" == typeof a && e && e({
                x: t,
                y: i,
                z: a
            })
        }),
        qg.startAccelerometer({
            interval: "game",
            success: function(t) {
                console.log("qg.startAccelerometer")
            },
            fail: function(t) {
                console.log("qg.startAccelerometer failed")
            },
            complete: function(t) {}
        })) : qg.stopAccelerometer({
            success: function(t) {
                console.log("qg.stopAccelerometer")
            },
            fail: function(t) {
                console.log("qg.stopAccelerometer failed")
            },
            complete: function(t) {}
        })
    }
    ,
    function(t) {
        t.privacyUrl = null,
        t.ageTips = 0,
        t.bizSwitch = null,
        t.ip = null,
        t.userInfo = {
            uid: "",
            nickName: "",
            avatar: "",
            token: "",
            sex: "",
            age: "",
            constellation: "",
            location: ""
        },
        t.appInfo = {
            ver: "",
            xnhd_id: "",
            appid: "",
            packageName: "",
            appName: "",
            platformVersion: 1040,
            isValidated: !1,
            addr: 1,
            mode: 1
        },
        t.otherInfo = {
            payCallbackUrl: "",
            oppoLiteAppVersion: "",
            canPay: !1
        },
        t.advertiseInfo = {
            mediaId: "",
            bannerAd: "",
            interstitialAd: "",
            nativeAd: [],
            customAd: [],
            videoAd: "",
            BoxAd_Banner: "",
            BoxAd_9: "",
            drawerAd: ""
        },
        t.loadingPage = null,
        t.oppoLiteActivityInfo = {
            code: 0
        },
        t.statistics = {
            total_days_login: 0,
            total_open_Times: 0,
            today: 0,
            today_onlineTime: 0,
            f_Native: {
                lastClick: 0,
                clickTimes: 0
            }
        },
        t.game_config_getStatus = 4,
        t.url_Info = {
            server_url: "https://game.batwan.cn/"
        },
        t.callBack = {
            onGameConfig: null,
            onHide: null,
            onShow: null
        },
        t.delayFunc = []
    }(e = t.Param || (t.Param = {}));
    var i = !1
      , a = 0
      , n = 30;
    function reportToOppo(t="game_scene", e=0) {
        try {
            if (qg.reportMonitor(t, e),
            i)
                return;
            i = "game_scene" === t && 0 === e
        } catch (t) {}
    }
    function processDialog(t) {
        if (t && "string" == typeof t.content) {
            let e = t.content
              , i = "公告"
              , a = "确定"
              , n = 5e3;
            "string" == typeof t.title && (i = t.title),
            "string" == typeof t.btnTxt && (a = t.btnTxt),
            "number" == typeof t.delay && (n = t.delay),
            Laya.timer.once(n, this, ()=>{
                XnhdDefault.showDialog(e, null, i, a)
            }
            )
        }
    }
    function replaceAdParam(t, i, a, n) {
        if ("string" == typeof a && a.length > 0)
            if (a.indexOf(",") > -1) {
                let t = a.split(",");
                for (let i = 0; i < t.length; i++) {
                    let a = t[i];
                    e.advertiseInfo.nativeAd.indexOf(a) < 0 && e.advertiseInfo.nativeAd.push(a)
                }
            } else
                e.advertiseInfo.nativeAd.indexOf(a) < 0 && e.advertiseInfo.nativeAd.push(a);
        for (let t in e.advertiseInfo) {
            if ("nativeAd" == t)
                continue;
            if (e.advertiseInfo[t].length > 0)
                return void d.Default.init()
        }
        "string" == typeof t && t.length > 0 && (e.advertiseInfo.bannerAd = t),
        "string" == typeof i && i.length > 0 && (e.advertiseInfo.videoAd = i),
        "string" == typeof n && n.length > 0 && (e.advertiseInfo.interstitialAd = n),
        d.Default.init()
    }
    function saveStatistics() {
        XnhdAPI.saveDataToCache("Statistics", JSON.stringify(e.statistics))
    }
    function login(t) {
        XnhdDefault.logDebug("oppoLogin的pkgName：" + e.appInfo.packageName);
        try {
            qg.login({
                success: i=>{
                    XnhdDefault.logDebug("oppoLogin的参数：" + JSON.stringify(i));
                    try {
                        e.userInfo.token = i.data.token,
                        i.uid && (e.userInfo.uid = i.uid),
                        i.nickName && (e.userInfo.nickName = i.nickName),
                        i.avatar && (e.userInfo.avatar = i.avatar),
                        i.sex && (e.userInfo.sex = i.sex),
                        i.location && (e.userInfo.location = i.location),
                        function() {
                            for (let t = 0; t < e.delayFunc.length; t++)
                                e.delayFunc[t]();
                            e.delayFunc = []
                        }(),
                        e.userInfo.uid.length > 0 ? (console.log("-读取到登录信息,openId:" + e.userInfo.uid),
                        t && t()) : (XnhdTools.normalRequestHttp(e.url_Info.server_url + "api/quick_login", t=>{
                            console.log("oppo登录:" + JSON.stringify(t)),
                            t.userInfo && (t.userInfo.userId && (e.userInfo.uid = t.userInfo.userId),
                            t.userInfo.userName && (e.userInfo.nickName = t.userInfo.userName),
                            t.userInfo.avatar && (e.userInfo.avatar = t.userInfo.avatar),
                            t.userInfo.sex && (e.userInfo.sex = t.userInfo.sex),
                            t.userInfo.location && (e.userInfo.location = t.userInfo.location),
                            t.userInfo.constellation && (e.userInfo.constellation = t.userInfo.constellation),
                            t.userInfo.age && (e.userInfo.age = t.userInfo.age),
                            "string" == typeof t.userInfo.userId && t.userInfo.userId.length > 0 && (saveDataToCache("_userInfo", JSON.stringify(t.userInfo), !1),
                            XnhdDefault.logDebug("_userInfo written!")),
                            XnhdDefault.logDebug("oppo登录,done!"))
                        }
                        , JSON.stringify({
                            pkgName: e.appInfo.packageName,
                            token: e.userInfo.token,
                            chan: "oppo"
                        }), null, "post"),
                        t && t())
                    } catch (t) {
                        XnhdDefault.logDebug("OppoLiteGame Login success but fail JSON.parse>> " + t.toString())
                    }
                }
                ,
                fail: t=>{
                    XnhdDefault.logError("oppoLogin Fail：" + JSON.stringify(t)),
                    d.Default.init()
                }
            })
        } catch (t) {
            XnhdDefault.logDebug("OppoLiteGame Login fail >> " + t.toString())
        }
    }
    t.nativeAd_canShow = function() {
        return a >= n
    }
    ,
    t.nativeAd_showed = function() {
        a -= n
    }
    ,
    t.timerOnLine = function() {
        ++a % 10 == 0 && console.log("=" + a + "/" + n)
    }
    ,
    t.bizSwitch = function() {
        return e.bizSwitch
    }
    ,
    t.privacyUrl = function() {
        return e.privacyUrl
    }
    ,
    t.clientIP = function() {
        return e.ip
    }
    ,
    t.ageTips = function() {
        return e.ageTips
    }
    ,
    t.reportToOppo = reportToOppo,
    t.checkVerify = function() {
        return e.appInfo.isValidated
    }
    ,
    t.setGameConfigCallback = function(t) {
        if (e.gameConfig && t)
            return t(e.gameConfig);
        e.callBack.onGameConfig = t
    }
    ,
    t.vibrateShort = function() {
        try {
            qg.vibrateShort()
        } catch (t) {}
    }
    ,
    t.exitProgram = function() {
        qg.exitApplication({
            success: function() {
                console.log("exitProgram success")
            },
            fail: function(t) {
                console.log("exitProgram fail")
            },
            complete: function() {
                console.log("exitProgram complete")
            }
        })
    }
    ,
    t.installShortcut = function(t, i=null) {
        if (e.appInfo.platformVersion >= 1040) {
            console.log("qg.installShortcut");
            try {
                qg.installShortcut({
                    success: function() {
                        console.log("创建成功1"),
                        t && t(),
                        console.log("创建成功2"),
                        XnhdAPI.saveDataToCache("installShortcutTime", Math.floor(Date.now() / 1e3), !0)
                    },
                    fail: function(t) {
                        console.log("installShortcut fail" + JSON.stringify(t)),
                        i && i(t)
                    },
                    complete: function() {
                        console.log("installShortcut complete")
                    }
                })
            } catch (t) {
                console.log("installShortcut error:" + JSON.stringify(t))
            }
        } else
            console.log("Param.appInfo.platformVersion:" + e.appInfo.platformVersion)
    }
    ,
    t.checkShortcut = function(t) {
        if (e.appInfo.platformVersion >= 1044)
            try {
                qg.hasShortcutInstalled({
                    success: e=>{
                        t && t(e)
                    }
                })
            } catch (t) {}
    }
    ,
    t.getPlatformVersion = function() {
        return e.appInfo.platformVersion
    }
    ,
    t.writeFile = function(t, e, i, a) {
        let n = qg.getFileSystemManager();
        t.replace("\\", "/");
        let o = qg.env.USER_DATA_PATH + "/" + t;
        try {
            n.mkdirSync(o, !0)
        } catch (t) {}
        n.writeFile({
            filePath: o + "/" + e,
            data: i,
            success: t=>{
                a && a(o + "/" + e)
            }
            ,
            fail: t=>{
                XnhdDefault.logError("Write File Fail:" + t.errMsg),
                a && a(null)
            }
        })
    }
    ,
    t.deleteFile = function(t, e) {
        t.indexOf(qg.env.USER_DATA_PATH) < 0 && (t = qg.env.USER_DATA_PATH + "/" + t);
        try {
            qg.getFileSystemManager().unlink({
                filePath: t,
                success: t=>{
                    e && e(!0)
                }
                ,
                fail: t=>{
                    XnhdDefault.logError("deleteFile fail: " + JSON.stringify(t)),
                    e && e(!1)
                }
            })
        } catch (t) {}
    }
    ,
    t.checkFile = function(t) {
        t.indexOf(qg.env.USER_DATA_PATH) < 0 && (t = qg.env.USER_DATA_PATH + "/" + t);
        try {
            return qg.getFileSystemManager().accessSync(t),
            t
        } catch (t) {
            return null
        }
    }
    ,
    t.downloadFileAndSave = function(t, e, i="", a="") {
        let n;
        n = i.length > 0 ? a + i : "temp/" + t.substring(t.lastIndexOf("/") + 1);
        let o = qg.getFileSystemManager();
        try {
            o.mkdirSync(qg.env.USER_DATA_PATH + "/" + a, !0)
        } catch (t) {
            XnhdDefault.logError(t)
        }
        try {
            qg.downloadFile({
                url: t,
                filePath: qg.env.USER_DATA_PATH + "/" + n,
                success: t=>{
                    e && e(t.filePath)
                }
                ,
                fail: t=>{
                    e && e(""),
                    XnhdDefault.logError("下载失败" + JSON.stringify(t))
                }
            })
        } catch (t) {}
    }
    ,
    t.openMiniApp = function(t, i, a) {
        try {
            qg.navigateToMiniGame({
                pkgName: t,
                success: ()=>{
                    if ("string" == typeof a && a.length > 0) {
                        let t = Date.now().toString()
                          , i = e.appInfo.appid + a + t;
                        i = XnhdEncrypt.hex_md5(i);
                        let n = JSON.stringify({
                            appId: e.appInfo.appid,
                            statId: a,
                            openId: e.userInfo.uid,
                            nonce: t,
                            sign: i
                        });
                        XnhdTools.normalRequestHttp(e.url_Info.server_url + "api/quick_game_stat.php", null, n, null, "post")
                    }
                }
                ,
                fail: t=>{
                    XnhdDefault.logDebug("openMiniApp fail: " + JSON.stringify(t))
                }
            })
        } catch (t) {
            XnhdDefault.logError("openMiniApp Fail " + t.toString())
        }
    }
    ,
    t.init = function(i, a, o) {
        !function() {
            let t = getDataFromCache("_userInfo", !1);
            if ("string" == typeof t && t.length > 0) {
                console.log("_userinfo:" + t);
                try {
                    let i = JSON.parse(t);
                    i.userId && (e.userInfo.uid = i.userId),
                    i.userName && (e.userInfo.nickName = i.userName),
                    i.avatar && (e.userInfo.avatar = i.avatar),
                    i.sex && (e.userInfo.sex = i.sex),
                    i.location && (e.userInfo.location = i.location),
                    i.constellation && (e.userInfo.constellation = i.constellation),
                    i.age && (e.userInfo.age = i.age)
                } catch (t) {}
            }
        }(),
        "string" == typeof i.xnhd_id && (e.appInfo.xnhd_id = i.xnhd_id),
        "string" == typeof i.appid && (e.appInfo.appid = i.appid),
        "string" == typeof i.packageName && (e.appInfo.packageName = i.packageName),
        "string" == typeof i.bannerAd && (e.advertiseInfo.bannerAd = i.bannerAd),
        "string" == typeof i.interstitialAd && (e.advertiseInfo.interstitialAd = i.interstitialAd),
        "string" == typeof i.videoAd && (e.advertiseInfo.videoAd = i.videoAd),
        i.nativeAd && (e.advertiseInfo.nativeAd = i.nativeAd.concat()),
        i.customAd && (e.advertiseInfo.customAd = i.customAd.concat()),
        "string" == typeof i.mediaId && i.mediaId.length > 0 ? e.advertiseInfo.mediaId = i.mediaId : e.advertiseInfo.mediaId = i.appid,
        "string" == typeof i.boxAd_banner && (e.advertiseInfo.BoxAd_Banner = i.boxAd_banner),
        "string" == typeof i.boxAd_9 && (e.advertiseInfo.BoxAd_9 = i.boxAd_9),
        "string" == typeof i.drawerAd && (e.advertiseInfo.drawerAd = i.drawerAd),
        e.appInfo.ver = a,
        function() {
            let t = XnhdAPI.readDataFromCache("Statistics");
            if (t && t.length)
                try {
                    if (t = JSON.parse(t),
                    e.statistics.total_open_Times = t.total_open_Times,
                    e.statistics.total_days_login = t.total_days_login,
                    e.statistics.today = t.today,
                    t.f_Native)
                        for (let i in t.f_Native)
                            e.statistics.f_Native[i] = t.f_Native[i]
                } catch (t) {
                    XnhdDefault.logError("readDataNeed error >> " + t.toString())
                }
            let i = Math.floor(Date.now() / 864e5);
            e.statistics.total_open_Times++,
            i > e.statistics.today && (e.statistics.today = i,
            e.statistics.total_days_login++,
            e.statistics.f_Native.clickTimes = 0,
            e.statistics.f_Native.lastClick = 0),
            saveStatistics()
        }();
        // let s = qg.getSystemInfoSync();
        // "number" == typeof s.platformVersionCode && (e.appInfo.platformVersion = s.platformVersionCode),
        setLoadingProgress(0);
        // try {
        //     qg.onShow(()=>{
        //         XnhdDefault.logDebug("qg.onShow"),
        //         e.callBack.onShow && e.callBack.onShow(),
        //         Laya.timer.loop(1e3, this, t.timerOnLine)
        //     }
        //     ),
        //     Laya.timer.loop(1e3, this, t.timerOnLine),
        //     qg.onHide(()=>{
        //         XnhdDefault.logDebug("qg.onHide"),
        //         e.callBack.onHide && e.callBack.onHide(),
        //         Laya.timer.clear(this, t.timerOnLine)
        //     }
        //     ),
        //     o && o(),
        //     Laya.timer.loop(6e4, this, ()=>{
        //         e.statistics.today_onlineTime++,
        //         saveStatistics()
        //     }
        //     )
        // } catch (t) {}
        login(()=>{}
        ),
        function requestGameConfig() {
            if (e.game_config_getStatus > 0) {
                let t = JSON.stringify({
                    appid: e.appInfo.xnhd_id,
                    openid: e.userInfo.uid,
                    days: e.statistics.total_days_login,
                    times: e.statistics.total_open_Times
                });
                XnhdTools.normalRequestHttp(e.url_Info.server_url + "api/quick_game_config.php", t=>{
                    try {
                        t.data && t.data.valid_ver != XnhdDefault.Param.localConfig.gameVersion ? e.appInfo.isValidated = !0 : t.valid_ver != XnhdDefault.Param.localConfig.gameVersion && (e.appInfo.isValidated = !0),
                        t.data && "number" == typeof t.data.addr_param ? e.appInfo.addr = t.data.addr_param : "number" == typeof t.addr_param && (e.appInfo.addr = t.addr_param),
                        t.data && "number" == typeof t.data.mode ? e.appInfo.mode = t.data.mode : "number" == typeof t.mode && (e.appInfo.mode = t.mode),
                        t.data && "string" == typeof t.data.privacy ? e.privacyUrl = t.data.privacy : "string" == typeof t.privacy && (e.privacyUrl = t.privacy),
                        console.log("privacyUrl:" + e.privacyUrl),
                        t.data && "number" == typeof t.data.ageTips ? e.ageTips = t.data.ageTips : "number" == typeof t.ageTips && (e.ageTips = t.ageTips),
                        t.data && void 0 !== t.data.biz ? e.bizSwitch = t.data.biz : void 0 !== t.biz && (e.bizSwitch = t.biz),
                        t.data && "string" == typeof t.data.ip ? e.ip = t.data.ip : "string" == typeof t.ip && (e.ip = t.ip),
                        console.log("ageTips:" + e.ageTips),
                        t.data && t.data.showDialog ? processDialog(t.data.showDialog) : t.showDialog && processDialog(t.showDialog),
                        t.data && t.data.ad ? replaceAdParam(t.data.ad.bannerAd, t.data.ad.videoAd, t.data.ad.nativeAd, t.data.ad.interstitialAd) : t.ad ? replaceAdParam(t.ad.bannerAd, t.ad.videoAd, t.ad.nativeAd, t.ad.interstitialAd) : d.Default.init(),
                        t.data && t.data.iNativeRefresh && "number" == typeof t.data.iNativeRefresh && t.data.iNativeRefresh > 0 ? (n = t.data.iNativeRefresh,
                        console.log("nativeAdRefreshTime:" + n)) : t.iNativeRefresh && "number" == typeof t.iNativeRefresh && t.iNativeRefresh > 0 && (n = t.iNativeRefresh,
                        console.log("nativeAdRefreshTime:" + n)),
                        e.gameConfig = t,
                        e.callBack.onGameConfig && (t.channel || t.data.channel) && e.callBack.onGameConfig(t)
                    } catch (t) {
                        XnhdDefault.logError("oppoliteGame requestGameConfig Parse Error:" + t)
                    }
                }
                , t, ()=>{
                    Laya.timer.frameLoop(3600, this, ()=>{
                        e.game_config_getStatus--,
                        requestGameConfig()
                    }
                    )
                }
                , "post")
            } else
                d.Default.init()
        }()
    }
    ,
    t.setOnShow = function(t) {
        e.callBack.onShow = t
    }
    ,
    t.setOnHide = function(t) {
        e.callBack.onHide = t
    }
    ,
    t.getAddrParam = function() {
        return e.appInfo.addr
    }
    ,
    t.getModeParam = function() {
        return e.appInfo.mode
    }
    ,
    t.updateRankScore = function updateRankScore(t, i=1) {
        let a = function() {
            XnhdTools.normalRequestHttp(e.url_Info.server_url + "interface/oppo_rank.php", t=>{
                XnhdDefault.logDebug("上传活动分数成功：" + JSON.stringify(t))
            }
            , JSON.stringify({
                appid: e.appInfo.appid,
                userId: e.userInfo.uid,
                rankScore: t
            }), e=>{
                XnhdDefault.logDebug("上传分数失败：" + e),
                Laya.timer.once(1e3 * i, this, updateRankScore, [t, 2 * i])
            }
            , "post")
        };
        0 === e.appInfo.appid.length ? e.delayFunc.push(a) : a()
    }
    ,
    t.requestActivityInfo = function requestActivityInfo(t, i=1) {
        let a = function() {
            XnhdTools.normalRequestHttp(e.url_Info.server_url + "interface/oppo_act.php", i=>{
                e.oppoLiteActivityInfo[t.toString()] = i,
                XnhdDefault.logDebug("获取活动成功：" + JSON.stringify(i))
            }
            , JSON.stringify({
                appid: e.appInfo.appid,
                actid: t
            }), e=>{
                XnhdDefault.logDebug("获取活动" + t.toString() + "失败：" + e),
                Laya.timer.once(1e3 * i, this, requestActivityInfo, [t, 2 * i])
            }
            , "post")
        };
        0 === e.appInfo.appid.length ? e.delayFunc.push(a) : a()
    }
    ;
    let o = !0;
    function setLoadingProgress(t) {
        if (t < 101 && t > -1)
            try {
                qg.setLoadingProgress({
                    progress: t
                }),
                100 === t && o && qg.loadingComplete({
                    success: t=>{
                        reportToOppo(),
                        o = !1
                    }
                })
            } catch (e) {
                XnhdDefault.logError("OppoLiteGame setLoadingProgress " + t.toString() + " fail >> " + e.toString())
            }
    }
    function saveDataToCache(t, e, i) {
        i && (e = e.toString()),
        localStorage.setItem(t, e)
    }
    function getDataFromCache(t, e) {
        let i = localStorage.getItem(t);
        return e && i ? parseInt(i) : i
    }
    t.setLoadingProgress = setLoadingProgress,
    t.saveDataToCache = saveDataToCache,
    t.getDataFromCache = getDataFromCache;
    const s = 5
      , r = 15e3;
    class d {
        constructor() {
            this._bannerAd = null,
            this._bannerAdShow = !1,
            this._bannerTimerSwitch = !0,
            this._bannerIsNativeAd = !0,
            this._bannerIsAllwaysNative = !0,
            this._videoAd = null,
            this._videoAdLoaded = !1,
            this._interstitialAdLoaded = !1,
            this._nativeAd = [],
            this._nativeNotReported = !1,
            this._nativeUpdateClick = !1,
            this._nativeAdIsShow = 0,
            this._nativeAdInitArr = [],
            this._nativeAdCTR = {
                show: 1,
                click: 1
            },
            this._nativeWarn = -1,
            this._f_NativeParam = {
                maxClick: 0,
                interval: 300,
                nativeCtrl: [1, 1, 1, 1, 1, 1, 1]
            },
            this._boxBanner = null,
            this._boxBannerLoad = !1,
            this._boxBannerInited = !1,
            this._box9Load = !1,
            this._drawerAd = null,
            this._customAd = null,
            this._customAdSuccessCB = null,
            this._customAdFailedCB = null,
            this._customAdCloseCB = null,
            this.realBannerAdShowStatus = !1,
            this.onVideoRewarded = !1,
            this.isWait = !1,
            this.mainNativeAdIndex = 0
        }
        getInterstitialAdStatus() {
            return this._interstitialAdLoaded
        }
        getVideoStatus() {
            return this._videoAdLoaded
        }
        init() {
            if (XnhdDefault.logDebug("platformVersion=" + e.appInfo.platformVersion),
            e.appInfo.platformVersion < 1051 && e.advertiseInfo.mediaId.length > 0)
                try {
                    qg.initAdService({
                        appId: e.advertiseInfo.mediaId,
                        isDebug: !0,
                        success: t=>{
                            this.initBannerAd(),
                            this.initInterstitialAd(),
                            this.initVideoAd(),
                            this.readNativeAdStat(),
                            this.initNativeAd()
                        }
                        ,
                        fail: t=>{
                            XnhdDefault.logDebug("fail:" + t)
                        }
                    })
                } catch (t) {}
            else
                e.appInfo.platformVersion >= 1051 && (this.initBannerAd(),
                this.initInterstitialAd(),
                this.initVideoAd(),
                this.readNativeAdStat(),
                this.initNativeAd(),
                e.appInfo.platformVersion >= 1076 && (this.initBoxBannerAd(),
                this.initBox9Ad()))
        }
        showCustomAd(t=-1, i=-1, a, n, o) {
            if (this._customAdSuccessCB = a,
            this._customAdFailedCB = n,
            this._customAdCloseCB = o,
            qg.createCustomAd) {
                this._customAd && this._customAd.destroy(),
                this._customAd = null;
                let a = e.advertiseInfo.customAd.length;
                if (0 == a)
                    return console.log("showCustomAd failed,no adIds"),
                    void (this._customAdFailedCB && this._customAdFailedCB());
                console.log("top=" + t + ",adId=" + i);
                let n = null;
                if (i > 0 && i <= a)
                    n = e.advertiseInfo.customAd[i - 1];
                else if (0 == i) {
                    let t = XnhdTools.randomInt(0, a - 1);
                    console.log("n=" + t),
                    n = e.advertiseInfo.customAd[t]
                } else {
                    if (!(i < 0 && Math.abs(i) <= a))
                        return;
                    {
                        let t = XnhdTools.randomInt(0, Math.abs(i) - 1);
                        console.log("n=" + t),
                        n = e.advertiseInfo.customAd[t]
                    }
                }
                if (t < 0)
                    this._customAd = qg.createCustomAd({
                        adUnitId: n
                    });
                else {
                    let e = XnhdAPI.getScreenHeight()
                      , i = qg.getSystemInfoSync()
                      , a = (i.screenWidth,
                    Math.floor(i.screenHeight - (e - t)))
                      , o = .85
                      , s = 0;
                    "horizontal" === XnhdDefault.Param.screenMode && (s = .25 * i.screenWidth,
                    o = .5,
                    i.screenWidth * o < 300 && (s = (i.screenWidth - 300) / 2)),
                    console.log("height=" + e),
                    console.log("screenWidth=" + i.screenWidth),
                    console.log("screenHeight=" + i.screenHeight),
                    console.log("top=" + t),
                    console.log("topY=" + a),
                    this._customAd = qg.createCustomAd({
                        adUnitId: n,
                        style: {
                            left: s,
                            top: a
                        }
                    })
                }
                console.log("createCustomAd!"),
                this._customAd.onError(t=>{
                    console.log("showCustomAd load failed", t)
                }
                ),
                this._customAd.onHide(()=>{
                    this._customAd.offHide(),
                    console.log("showCustomAd close"),
                    this._customAdCloseCB && this._customAdCloseCB()
                }
                ),
                this._customAd.show().then(()=>{
                    console.log("showCustomAd success"),
                    this._customAdSuccessCB && this._customAdSuccessCB(this._customAd)
                }
                ).catch(t=>{
                    console.log("showCustomAd failed:" + t.errCode + "," + t.errMsg),
                    this._customAdFailedCB && this._customAdFailedCB()
                }
                )
            } else
                console.log("qg.createCustomAd undefined"),
                this._customAdFailedCB && this._customAdFailedCB()
        }
        hideCustomAd(t=!0) {
            if (console.log("hideCustomAd"),
            this._customAd) {
                try {
                    this._customAd.hide()
                } catch (t) {}
                if (t) {
                    try {
                        this._customAd.destroy()
                    } catch (t) {}
                    console.log("hideCustomAd destroy"),
                    this._customAd = null
                }
            }
        }
        showDrawerAd(t) {
            if (0 !== e.advertiseInfo.drawerAd.length)
                if (this._drawerAdshowSuccess = t,
                this._drawerAd)
                    try {
                        this._drawerAd.show()
                    } catch (t) {}
                else if (qg.createGameDrawerAd) {
                    this._drawerAd = qg.createGameDrawerAd({
                        adUnitId: e.advertiseInfo.drawerAd
                    }),
                    this._drawerAd.onError(function(t) {
                        console.log("抽屉广告加载失败", t)
                    }),
                    this._drawerAd.onShow(function() {
                        console.log("drawer 广告显示"),
                        this._drawerAdshowSuccess && this._drawerAdshowSuccess()
                    });
                    try {
                        console.log("drawerAd show success"),
                        this._drawerAd.show()
                    } catch (t) {
                        console.log("drawerAd show failed")
                    }
                } else
                    console.log("暂不支持抽屉广告相关 API")
        }
        hideDrawerAd(t) {
            if (XnhdAPI.logDebug("hideDrawerAd"),
            this._drawerAd) {
                try {
                    this._drawerAd.hide()
                } catch (t) {}
                if (t) {
                    try {
                        this._drawerAd.destroy()
                    } catch (t) {}
                    XnhdAPI.logDebug("hideDrawerAd destroy"),
                    this._drawerAd = null
                }
            }
        }
        destroyBox9Ad() {
            if (XnhdAPI.logDebug("destroyBox9Ad"),
            this._box9) {
                try {
                    this._box9.destroy(),
                    this._box9Load = !1
                } catch (t) {}
                XnhdAPI.logDebug("hideBox9Ad destroy"),
                this._box9 = null
            }
        }
        initBox9Ad() {
            if (0 !== e.advertiseInfo.BoxAd_9.length)
                try {
                    this._box9 = qg.createGamePortalAd({
                        adUnitId: e.advertiseInfo.BoxAd_9
                    }),
                    this._box9.onError(t=>{
                        this._box9Load = !1,
                        XnhdDefault.logError("OppoLite box9Ad load error >>" + JSON.stringify(t)),
                        Laya.timer.once(2e4, this, ()=>{
                            this._box9.load()
                        }
                        )
                    }
                    ),
                    this._box9.onLoad(()=>{
                        this._box9Load = !0
                    }
                    ),
                    this._box9.onClose(()=>{
                        this._box9Close && this._box9Close(),
                        this._box9CloseNeedDestroy ? (this._box9Load = !1,
                        this._box9.destroy()) : this._box9.load()
                    }
                    ),
                    XnhdDefault.logDebug("OppoLite box9Ad inited..")
                } catch (t) {
                    XnhdDefault.logError("OppoLite box9Ad error >>" + JSON.stringify(t))
                }
        }
        showBox9Ad(t, e, i=null) {
            if (!this._box9 || !this._box9Load)
                return !1;
            this._box9Close = t,
            this._box9CloseNeedDestroy = e;
            try {
                this._box9.show(),
                i && i()
            } catch (t) {}
            return !0
        }
        checkBox9AdReady() {
            return this._box9Load
        }
        boxBannerInited() {
            return this._boxBannerInited
        }
        initBoxBannerAd() {
            if (0 !== e.advertiseInfo.BoxAd_Banner.length)
                if (e.appInfo.isValidated && e.gameConfig && e.gameConfig.noBoxBanner && "number" == typeof e.gameConfig.noBoxBanner && 1 == e.gameConfig.noBoxBanner)
                    XnhdDefault.logDebug("初始化--noBoxBanner");
                else if (e.appInfo.isValidated && e.gameConfig && e.gameConfig.data && e.gameConfig.data.noBoxBanner && "number" == typeof e.gameConfig.data.noBoxBanner && 1 == e.gameConfig.data.noBoxBanner)
                    XnhdDefault.logDebug("初始化--noBoxBanner");
                else {
                    XnhdDefault.logDebug("初始化--initBoxBannerAd");
                    try {
                        this._boxBanner = qg.createGameBannerAd({
                            adUnitId: e.advertiseInfo.BoxAd_Banner
                        }),
                        this._boxBanner.onError(t=>{
                            this._boxBannerLoad = !1,
                            XnhdDefault.logError("OppoLite boxBanner load error >>" + JSON.stringify(t));
                            try {
                                this._boxBanner.destroy()
                            } catch (t) {}
                            Laya.timer.once(2e4, this, this.initBoxBannerAd)
                        }
                        ),
                        this._boxBanner.onLoad(()=>{
                            this._boxBannerLoad = !0
                        }
                        ),
                        this._boxBannerInited = !0
                    } catch (t) {
                        XnhdAPI.logError("initBoxBannerAd:" + JSON.stringify(t))
                    }
                }
        }
        showBoxBannerAd(t, e) {
            if (XnhdAPI.logDebug("showBoxBannerAd"),
            this._boxBanner)
                try {
                    this._boxBanner.show(),
                    XnhdAPI.logDebug("showBoxBannerAd success"),
                    t && t()
                } catch (t) {
                    e && e(),
                    XnhdAPI.logError("showBoxBannerAd:" + JSON.stringify(t))
                }
        }
        hideBoxBannerAd(t, e=2e4) {
            if (XnhdAPI.logDebug("hideBoxBannerAd"),
            this._boxBanner) {
                try {
                    this._boxBanner.hide()
                } catch (t) {}
                if (t) {
                    this._boxBannerLoad = !1;
                    try {
                        this._boxBanner.destroy()
                    } catch (t) {}
                    XnhdAPI.logDebug("hideBoxBannerAd destroy"),
                    this._boxBanner = null,
                    Laya.timer.once(e, this, this.initBoxBannerAd)
                }
            }
        }
        initBannerAd() {
            if (e.advertiseInfo.bannerAd.length > 0) {
                if (this._bannerAd)
                    return;
                if (XnhdDefault.logDebug("初始化banner"),
                e.appInfo.isValidated && e.gameConfig && e.gameConfig.noBanner && "number" == typeof e.gameConfig.noBanner && 1 == e.gameConfig.noBanner)
                    return void XnhdDefault.logDebug("初始化noBanner");
                if (e.appInfo.isValidated && e.gameConfig && e.gameConfig.data && e.gameConfig.data.noBanner && "number" == typeof e.gameConfig.data.noBanner && 1 == e.gameConfig.data.noBanner)
                    return void XnhdDefault.logDebug("初始化noBanner");
                try {
                    this._bannerAd = qg.createBannerAd({
                        posId: e.advertiseInfo.bannerAd
                    }),
                    this._bannerAd.onError(t=>{
                        XnhdDefault.logError("OppoLite bannerAd load error >>" + JSON.stringify(t))
                    }
                    ),
                    this._bannerAd.onHide(t=>{
                        this._bannerAdShow = !1
                    }
                    )
                } catch (t) {
                    XnhdDefault.logError("OppoLite initBannerAd error >>" + JSON.stringify(t))
                }
            }
        }
        hideBannerAd() {
            this._nativeBanner && (this._nativeBanner.visible = !1),
            this.hideRealBanner()
        }
        hideRealBanner() {
            if (this._bannerAd && this.realBannerAdShowStatus) {
                this.realBannerAdShowStatus = !1;
                try {
                    this._bannerAd.hide()
                } catch (t) {}
            }
        }
        showRealBanner() {
            if (this._bannerAd && !this.realBannerAdShowStatus) {
                this.realBannerAdShowStatus = !0;
                try {
                    this._bannerAd.show()
                } catch (t) {}
            }
        }
        bannerRefresh() {
            if (e.appInfo.isValidated && 0 == e.appInfo.addr && this._bannerAdShow) {
                if (this._nativeBanner)
                    try {
                        this._nativeBanner.destroy()
                    } catch (t) {}
                this.hideRealBanner(),
                this._bannerAdShow = !1,
                this._bannerIsAllwaysNative || (this._bannerIsNativeAd = !this._bannerIsNativeAd),
                this.showOppoLiteBannerAd(XnhdDefault.Param.screenHeight - 230, this._bannerShowSuccessCallback, this._bannerShowFailCallback)
            }
        }
        showOppoLiteBannerAd(e, i, a, n=!1) {
            if (XnhdAPI.logDebug("showOppoLiteBannerAd"),
            this._bannerTimerSwitch && (this._bannerTimerSwitch = !1,
            Laya.timer.loop(6e4, this, this.bannerRefresh)),
            this._bannerShowSuccessCallback = i,
            this._bannerShowFailCallback = a,
            this._bannerAdShow = !0,
            this._bannerIsNativeAd) {
                if (!this._nativeBanner) {
                    if (!n && !XnhdAPI.nativeAd_canShow())
                        return void XnhdAPI.logDebug("!nativeAd_canShow");
                    let i = this.nativeAd_get(!1);
                    if (i.length > 0)
                        for (let a = 0; a < i.length; a++)
                            if ([0, 1, 2, 3, 6, 7, 8].indexOf(i[a].creativeType) > -1) {
                                let n = i[a]
                                  , o = XnhdDefault.Param.screenHeight - e;
                                XnhdAPI.logDebug("展示原生banner,height=" + o),
                                (o > 300 || o < 150) && (o = 230),
                                this._nativeBanner = new c(n,()=>{
                                    this._nativeBanner = null
                                }
                                ,()=>{
                                    this._nativeBanner = null
                                }
                                ,o),
                                t.nativeAd_showed(),
                                XnhdAPI.logDebug("success");
                                break
                            }
                }
                if (this._nativeBanner)
                    return this._nativeBanner.visible = !0,
                    XnhdAPI.logDebug("_nativeBanner.visible = true"),
                    void (i && i());
                XnhdAPI.logDebug("_nativeBanner=null"),
                a && a()
            }
            this._bannerIsAllwaysNative || (this._bannerAd ? (this._bannerIsNativeAd = !1,
            this.showRealBanner()) : (this._bannerIsNativeAd = !1,
            this.initBannerAd(),
            this.showRealBanner()))
        }
        initInterstitialAd(t=null) {
            if (e.advertiseInfo.interstitialAd.length > 0)
                try {
                    this._interstitialAd = qg.createInsertAd({
                        posId: e.advertiseInfo.interstitialAd
                    }),
                    this._interstitialAd.onLoad(e=>{
                        this._interstitialAdLoaded = !0,
                        t && t()
                    }
                    ),
                    this._interstitialAd.onError(e=>{
                        XnhdDefault.logError("OppoLite interstitialAd load error >>" + JSON.stringify(e)),
                        this._interstitialAdLoaded = !1,
                        this._interstitialShowFailCallback && (this._interstitialShowFailCallback(),
                        this._interstitialShowFailCallback = null),
                        1004 !== e.errCode && Laya.timer.once(3e4, this, ()=>{
                            this._interstitialAd.load(t)
                        }
                        )
                    }
                    ),
                    this._interstitialAd.load()
                } catch (t) {
                    XnhdDefault.logError("OppoLite interstitialAd onLoad error >>" + t.toString())
                }
        }
        showOppoLiteInterstitialAd(t, e) {
            if (this._interstitialShowSuccessCallback = t,
            this._interstitialShowFailCallback = e,
            this._interstitialAd && this._interstitialAdLoaded) {
                this._interstitialAd.onShow(()=>{
                    this._interstitialShowSuccessCallback && (this._interstitialShowSuccessCallback(),
                    this._interstitialShowSuccessCallback = null),
                    this._interstitialAd.offShow(),
                    this._interstitialAd.load()
                }
                );
                try {
                    this._interstitialAd.show()
                } catch (t) {}
            } else
                this._interstitialShowFailCallback && (this._interstitialShowFailCallback(),
                this._interstitialShowFailCallback = null)
        }
        initVideoAd() {
            if (e.advertiseInfo.videoAd.length > 0)
                try {
                    e.appInfo.platformVersion < 1051 ? (console.log("create rewarded videoAd 1"),
                    this._videoAd = qg.createRewardedVideoAd({
                        posId: e.advertiseInfo.videoAd
                    })) : (console.log("create rewarded videoAd 2"),
                    this._videoAd = qg.createRewardedVideoAd({
                        adUnitId: e.advertiseInfo.videoAd
                    })),
                    this._videoAd.onLoad(t=>{
                        this._videoAdLoaded = !0
                    }
                    ),
                    this._videoAd.onError(t=>{
                        this.videoErrorFun(t)
                    }
                    ),
                    this._videoAd.load()
                } catch (t) {
                    XnhdDefault.logError("OppoLite videoAd init error >>" + t.toString())
                }
        }
        videoErrorFun(t) {
            XnhdDefault.logDebug("OppoLite videoAd load error >>" + JSON.stringify(t)),
            this._videoAdLoaded = !1,
            Laya.timer.once(3e4, this, ()=>{
                this._videoAd.load()
            }
            )
        }
        showOppoLiteVideoAd(t=null, e=null) {
            if (this._videoAd && this._videoAdLoaded) {
                this._videoAd.onVideoStart ? this._videoAd.onVideoStart(()=>{
                    XnhdAPI.saveDataToCache("videoStartTime", Math.floor(Date.now() / 1e3), !0),
                    console.log("onVideoStart"),
                    this._videoAd.offVideoStart && this._videoAd.offVideoStart(),
                    this._videoAdLoaded = !1,
                    this._videoAd.load()
                }
                ) : console.log("onVideoStart undefined"),
                this.onVideoRewarded = !1,
                this._videoAd.onRewarded && this._videoAd.onRewarded(()=>{
                    XnhdAPI.saveDataToCache("videoFinishTime", Math.floor(Date.now() / 1e3), !0),
                    console.log("onRewarded"),
                    this._videoAd.offRewarded && this._videoAd.offRewarded(),
                    this.onVideoRewarded = !0,
                    t && t()
                }
                ),
                this._videoAd.onClose(i=>{
                    XnhdAPI.saveDataToCache("videoFinishTime", Math.floor(Date.now() / 1e3), !0),
                    this._videoAd.offClose(),
                    XnhdDefault.logDebug("OPPO小游戏获得视频奖励：" + JSON.stringify(i)),
                    this._videoAd.onRewarded ? i && i.isEnded || (console.log("onClose-unfinished:" + this.onVideoRewarded),
                    !this.onVideoRewarded && e && e("unfinished")) : i && i.isEnded ? (console.log("onClose-successCallback"),
                    t && t()) : (console.log("onClose-unfinished 2"),
                    e && e("unfinished"))
                }
                );
                try {
                    this._videoAd.show()
                } catch (t) {}
            } else
                e && e()
        }
        initNativeAd() {
            e.appInfo.platformVersion < 1031 || 0 !== e.advertiseInfo.nativeAd.length && (e.advertiseInfo.nativeAd.length > 0 && this._nativeAdInitArr.push(0),
            e.advertiseInfo.nativeAd.length > 1 && this._nativeAdInitArr.push(1),
            e.advertiseInfo.nativeAd.length > 2 && this._nativeAdInitArr.push(2),
            this.loadNativeAd())
        }
        createNativeAd() {
            if (0 === this._nativeAdInitArr.length)
                return;
            let t = this._nativeAdInitArr.shift();
            XnhdAPI.logDebug("开始创建原生广告" + t + "，队列：" + this._nativeAdInitArr.toString());
            let i = this._nativeAd[t];
            i || (i = {
                adObj: null,
                data: null,
                dataStr: null,
                tryTimes: s,
                index: t,
                adId: null
            },
            this._nativeAd[t] = i);
            try {
                i.adObj = qg.createNativeAd({
                    posId: e.advertiseInfo.nativeAd[t]
                }),
                this.isWait = !1,
                i.adObj.onLoad(e=>{
                    if (e && e.adList && e.adList.length > 0)
                        for (let a = 0; a < e.adList.length; a++)
                            if ([0, 1, 2, 3, 6, 7, 8].indexOf(e.adList[a].creativeType) > -1)
                                return i.data = e.adList,
                                i.adId = i.data[a].adId,
                                i.dataStr = JSON.stringify(i.data),
                                i.tryTimes = s,
                                i.adObj.offLoad(),
                                XnhdDefault.logDebug("获得原生广告" + t + "：" + JSON.stringify(e)),
                                void this.waitLoadNativeAd();
                    XnhdDefault.logError("获得原生" + t + "广告失败onLoad：" + JSON.stringify(e)),
                    this.tryLoadNativeAd(i)
                }
                ),
                i.adObj.onError(e=>{
                    XnhdDefault.logError("获得原生" + t + "广告失败onError：" + JSON.stringify(e)),
                    this.tryLoadNativeAd(i)
                }
                ),
                i.adObj.load()
            } catch (t) {
                XnhdDefault.logError("OppoLite createNativeAd error >>" + JSON.stringify(t))
            }
        }
        loadNativeAd() {
            this._nativeNotReported || (this._nativeNotReported = !0,
            this._nativeUpdateClick = !1,
            0 !== this._nativeAdInitArr.length && this.waitLoadNativeAd())
        }
        tryLoadNativeAd(t) {
            if (Laya.timer.clear(this, this.createNativeAd),
            t.tryTimes--,
            XnhdAPI.logDebug("尝试重新创建原生广告" + t.index + "，剩余尝试次数：" + t.tryTimes),
            t.adObj.offError(),
            t.adObj.offLoad(),
            t.tryTimes > 0)
                return this._nativeAdInitArr.push(t.index),
                void this.waitLoadNativeAd();
            this._nativeAd.length !== e.advertiseInfo.nativeAd.length && (this._nativeAdInitArr.push(this._nativeAd.length),
            this.waitLoadNativeAd())
        }
        waitLoadNativeAd() {
            this.isWait || (this.isWait = !0,
            Laya.timer.once(r, this, this.createNativeAd))
        }
        readNativeAdStat() {
            let t = XnhdAPI.readDataFromCache("vivoNative", !1);
            if (t && t.length > 0)
                try {
                    this._nativeAdCTR = JSON.parse(t)
                } catch (t) {}
        }
        saveNativeAdStat() {
            XnhdAPI.saveDataToCache("vivoNative", JSON.stringify(this._nativeAdCTR))
        }
        nativeAd_get(t) {
            if (!this._nativeAd)
                return [];
            if (this._nativeAdIndex > -1)
                return JSON.parse(this._nativeAd[this._nativeAdIndex].dataStr);
            let e = t ? 1 : 0;
            for (let t = this.mainNativeAdIndex; t < this._nativeAd.length; t++) {
                if (this._nativeAd[t].data) {
                    if (!e)
                        return this._nativeAdIndex = t,
                        JSON.parse(this._nativeAd[t].dataStr);
                    e--
                }
            }
            for (let t = 0; t < this.mainNativeAdIndex; t++) {
                if (this._nativeAd[t].data) {
                    if (!e)
                        return this._nativeAdIndex = t,
                        JSON.parse(this._nativeAd[t].dataStr);
                    e--
                }
            }
            return this._nativeAdIndex = -1,
            []
        }
        nativeAd_CTR_get() {
            return this._nativeWarn > -1 ? this._nativeWarn : 0 === this._nativeAdCTR.show ? 0 : this._nativeAdCTR.click / this._nativeAdCTR.show
        }
        nativeAd_getFakeStatus() {
            return e.statistics.f_Native.clickTimes < this._f_NativeParam.maxClick && e.statistics.today_onlineTime - e.statistics.f_Native.lastClick > this._f_NativeParam.interval
        }
        nativeAd_getNativeCtrl(t) {
            return this._f_NativeParam.nativeCtrl[t]
        }
        nativeAd_reportAdShow(t) {
            if (console.log("_nativeAdIndex:" + this._nativeAdIndex),
            !(this._nativeAdIndex < 0) && (this._nativeAdIsShow++,
            this._nativeNotReported && this._nativeAdIndex < this._nativeAd.length)) {
                let e = this._nativeAd[this._nativeAdIndex];
                XnhdAPI.logDebug("展示原生广告" + this._nativeAdIndex);
                try {
                    e && e.adObj && e.adObj.reportAdShow({
                        adId: e.adId
                    }),
                    this._nativeAdCTR.show++,
                    this._nativeNotReported = !1,
                    this.saveNativeAdStat(),
                    this.nativeAd_update(!1, t)
                } catch (t) {}
            }
        }
        nativeAd_reportAdClick(t, i) {
            if (this._nativeAdIndex < 0)
                return;
            if (this._nativeNotReported)
                return;
            this._nativeUpdateClick && (this._nativeAdCTR.click++,
            this._nativeNotReported = !1,
            this.saveNativeAdStat(),
            this.nativeAd_update(!0, t),
            i && (e.statistics.f_Native.clickTimes++,
            e.statistics.f_Native.lastClick = e.statistics.today_onlineTime,
            saveStatistics()),
            XnhdAPI.logDebug("响应原生广告"));
            let a = this._nativeAd[this._nativeAdIndex];
            a.adObj.reportAdClick({
                adId: a.adId
            }),
            XnhdAPI.saveDataToCache("nativeAdClickTime", Math.floor(Date.now() / 1e3), !0)
        }
        nativeAd_destroy() {
            if (this._nativeAdIndex < 0)
                return;
            if (this._nativeNotReported)
                return;
            if (this._nativeAdIsShow--,
            this._nativeAdIsShow > 0)
                return;
            this._nativeAd[this._nativeAdIndex].data.map(t=>{
                t.icon && "string" == typeof t.icon && Laya.loader.clearRes(t.icon, !0),
                t.iconUrlList && t.iconUrlList.map(t=>{
                    t && "string" == typeof t && Laya.loader.clearRes(t, !0)
                }
                ),
                t.logoUrl && "string" == typeof t.logoUrl && Laya.loader.clearRes(t.logoUrl, !0),
                t.imgUrlList && t.imgUrlList.map(t=>{
                    t && "string" == typeof t && Laya.loader.clearRes(t, !0)
                }
                )
            }
            ),
            this._nativeAdInitArr.push(this._nativeAdIndex),
            this.mainNativeAdIndex = this._nativeAdIndex + 1,
            this._nativeAdIndex = -1,
            this.loadNativeAd()
        }
        nativeAd_update(t, i) {
            let a = !1;
            t ? this._nativeUpdateClick || (this._nativeUpdateClick = !0,
            a = !0) : a = !0;
            let n = JSON.stringify({
                unitid: e.advertiseInfo.nativeAd[this._nativeAdIndex],
                openid: e.userInfo.uid,
                action: t ? 2 : 1,
                chan: "oppo",
                platform: "lite",
                ver: e.appInfo.ver,
                xnhdid: e.appInfo.xnhd_id,
                scene: XnhdDefault.getNativeAdScene_String(i)
            });
            a && XnhdDefault.logDebug("updating game_adv_stat_test:" + n),
            a && XnhdTools.normalRequestHttp(e.url_Info.server_url + "api/game_adv_stat_test.php", t=>{
                if ("string" == typeof t)
                    try {
                        XnhdDefault.logDebug("already updated game_adv_stat_test:" + t),
                        (t = JSON.parse(t)).data && this.getGameAdvStat(t.data)
                    } catch (t) {}
                else
                    XnhdDefault.logDebug("already updated game_adv_stat_test:" + JSON.stringify(t)),
                    t && t.data && this.getGameAdvStat(t.data)
            }
            , n, null, "post")
        }
        getGameAdvStat(t) {
            "number" == typeof t.warn && (this._nativeWarn = t.warn),
            "number" == typeof t.native_min_interval && (this._f_NativeParam.interval = t.native_min_interval),
            "number" == typeof t.native_day_max && (this._f_NativeParam.maxClick = t.native_day_max),
            "number" == typeof t.nativeCtrl && (this._f_NativeParam.nativeCtrl[4] = t.nativeCtrl),
            "number" == typeof t.nativeBlock && (this._f_NativeParam.nativeCtrl[5] = t.nativeBlock)
        }
        updateNative_report() {}
        getGameNativeStat(t) {
            "number" == typeof t.warn && (this._nativeWarn = t.warn)
        }
    }
    d.Default = new d,
    t.AdManager = d;
    class l {
        constructor() {}
        init(t) {
            login(()=>{
                XnhdDefault.logDebug("获取对战对象"),
                this._Battle = qg.getBattle(),
                XnhdDefault.logDebug("设置常用回调"),
                this._Battle.onGameStart(t=>{
                    XnhdDefault.logDebug("对战开始" + JSON.stringify(t)),
                    this._gameStartCallback && this._gameStartCallback(t)
                }
                ),
                this._Battle.onMessage(t=>{
                    this._gameMsgCallback && this._gameMsgCallback(t)
                }
                ),
                this.battleInit(t)
            }
            )
        }
        battleInit(t) {
            XnhdDefault.logDebug("开始初始化对战"),
            this._Battle.init({
                success: e=>{
                    XnhdDefault.logDebug("对战初始化成功" + JSON.stringify(e)),
                    t(e)
                }
                ,
                fail: t=>{
                    XnhdDefault.logDebug("对战初始化失败" + JSON.stringify(t))
                }
            })
        }
        setGameStartFun(t) {
            this._gameStartCallback = t
        }
        setOnMessage(t) {
            this._gameMsgCallback = t
        }
        postMessage(t) {
            this._Battle.postMessage({
                type: 1,
                data: t
            })
        }
        quitGame(t) {
            let e = 1 === t ? 2 : 2 === t ? 4 : 3;
            this._Battle.postGameStatus({
                status: e
            })
        }
        game_Ready(t) {
            this._Battle.postGameStatus({
                status: 1,
                data: t,
                success: ()=>{
                    XnhdDefault.logDebug("init ok")
                }
            })
        }
    }
    l.Manager = new l,
    t.Battle = l;
    class h extends Laya.View {
        constructor() {
            super()
        }
        createChildren() {
            super.createChildren(),
            this.createView(h.uiView)
        }
    }
    h.uiView = {
        type: "View",
        props: {
            width: 750,
            height: 300
        },
        compId: 2,
        child: [{
            type: "Image",
            props: {
                y: 0,
                x: 0,
                width: 750,
                var: "bg",
                skin: "xnhdPic/SprWhite.png",
                sizeGrid: "1,1,1,1",
                height: 300
            },
            compId: 4
        }, {
            type: "Image",
            props: {
                y: 100,
                x: 120,
                width: 200,
                var: "adIcon",
                height: 200,
                anchorY: .5,
                anchorX: .5
            },
            compId: 19
        }, {
            type: "Image",
            props: {
                y: 0,
                x: 375,
                var: "adPic",
                anchorX: .5
            },
            compId: 5
        }, {
            type: "Label",
            props: {
                y: 240,
                x: 0,
                var: "adTitle",
                text: "“京东金融”赞助 ",
                fontSize: 32,
                color: "#000000",
                bold: !0,
                anchorY: 1,
                anchorX: 0
            },
            compId: 8
        }, {
            type: "Label",
            props: {
                y: 280,
                x: 0,
                width: 610,
                var: "adDescription",
                valign: "middle",
                text: "京东金融，钱的事我们很行",
                overflow: "hidden",
                height: 32,
                fontSize: 20,
                color: "#999999",
                bold: !0,
                anchorY: 1,
                anchorX: 0,
                align: "left"
            },
            compId: 9
        }, {
            type: "Image",
            props: {
                y: 150,
                x: 580,
                width: 200,
                var: "BtnBot",
                skin: "xnhdPic/SprRed.png",
                sizeGrid: "10,10,10,10",
                height: 100,
                anchorY: .5,
                anchorX: .5
            },
            compId: 10,
            child: [{
                type: "Label",
                props: {
                    y: 52,
                    x: 100,
                    width: 200,
                    var: "BtnTxt",
                    valign: "middle",
                    underlineColor: "#000000",
                    underline: !1,
                    text: "打开",
                    height: 68,
                    fontSize: 40,
                    color: "#FFFFFF",
                    bold: !1,
                    anchorY: .5,
                    anchorX: .5,
                    align: "center"
                },
                compId: 11
            }]
        }, {
            type: "Image",
            props: {
                y: 28,
                x: 723,
                width: 40,
                var: "BtnClose",
                skin: "xnhdPic/an _gb.png",
                height: 40,
                anchorY: .5,
                anchorX: .5
            },
            compId: 14
        }, {
            type: "Box",
            props: {
                y: 0,
                x: 0,
                width: 700,
                var: "BoxClick",
                height: 300,
                anchorY: 0,
                anchorX: 0
            },
            compId: 15
        }, {
            type: "Image",
            props: {
                y: 0,
                x: 0,
                var: "adLogo",
                top: 0
            },
            compId: 6
        }, {
            type: "Label",
            props: {
                y: 0,
                x: 0,
                width: 40,
                var: "adFlag",
                valign: "middle",
                text: " 广告 ",
                height: 20,
                fontSize: 15,
                color: "#f4ebeb",
                bgColor: "#c8b7b7",
                align: "center"
            },
            compId: 17
        }],
        loadList: ["xnhdPic/SprWhite.png", "xnhdPic/SprRed.png", "xnhdPic/an _gb.png"],
        loadList3D: []
    };
    class c extends h {
        constructor(t, e=null, i=null, a=300, n=0) {
            super(),
            this.btnCloseSwitch = !0,
            this.creativeType = 0,
            this.closeCallback = null,
            this.clickCallBack = null,
            this.clickAreaOffset = 0,
            this._nHeight = 300,
            this._showIcon = !1,
            this._showPic = !1,
            this.tapAreaSetted = !1,
            Laya.stage.addChild(this),
            this.size(750, a);
            let o = XnhdAPI.getScreenScale();
            this.scale(o, o),
            "horizontal" === XnhdDefault.Param.screenMode ? this.pos(Math.floor((Laya.stage.width - 750) / 2), Laya.stage.height - Math.round(a * o)) : this.pos(0, Laya.stage.height - Math.round(a * o)),
            this.zOrder = 2e4,
            this.clickAreaOffset = n,
            this.closeCallback = e,
            this.clickCallBack = i,
            this._nHeight = a,
            this.nativeInfo = t,
            this.BtnBotLabel = this.BtnBot.getChildAt(0),
            this.UIAdjust(1),
            this.showNativeAd(),
            this.showFake = !1,
            this.BtnClose.on(Laya.Event.CLICK, this, ()=>{
                this.destroy()
            }
            )
        }
        UIAdjust(t=0) {
            this._nHeight > 0 && this._nHeight < 100 ? this._nHeight = 100 : this._nHeight < 0 && (this._nHeight = 300),
            console.log("nHeight:" + this._nHeight + ",style:" + t);
            let e = this._nHeight;
            this.zOrder = 999998,
            this.height = e,
            this.bg.height = e,
            this.BoxClick.height = e,
            0 == t ? (this.adTitle.pos(0, e - 60),
            this.adDescription.pos(0, e - 20),
            this.BtnBot.pos(375, e - 50)) : (this.adIcon.pos(120, e / 2),
            this.adTitle.pos(230, e / 2 - 20),
            this.adDescription.pos(230, e / 2 + 30),
            this.BtnBot.pos(580, e / 2)),
            this._nHeight < 200 && this.BtnBot.scale(.7, .7),
            0 !== this.clickAreaOffset && (this.BoxClick.y += this.clickAreaOffset)
        }
        showComponent(t) {
            this.bg.visible = t,
            this.BtnClose.visible = t,
            this.BtnBot.visible = t
        }
        showNativeAd() {
            if (this.destroyed)
                return void XnhdAPI.logDebug("NativeBanner destroyed!...");
            this.showBtnTxt(this.nativeInfo);
            let t = this.nativeInfo;
            null != t ? ("string" == typeof t.title && t.title.length > 0 ? this.adTitle.text = t.title : this.adTitle.visible = !1,
            "string" == typeof t.desc && t.desc.length > 0 ? this.adDescription.text = t.desc : this.adDescription.visible = !1,
            "string" == typeof t.clickBtnTxt && t.clickBtnTxt.length > 0 && (this.BtnTxt.text = t.clickBtnTxt),
            this.showIcon(t, ()=>{
                this._showIcon = !0,
                this.UIAdjust(1)
            }
            , ()=>{
                this.showPic(t, ()=>{
                    this._showPic = !0
                }
                )
            }
            )) : XnhdAPI.logDebug("_info = null"),
            0 == XnhdDefault.Param.platType && this.setNativeTapArea()
        }
        showBtnTxt(t) {
            null != t && (this.BtnBot.visible = !1,
            this.BtnBot.visible = !0,
            "string" == typeof t.clickBtnTxt && t.clickBtnTxt.length > 0 && (this.BtnTxt.text = t.clickBtnTxt),
            this.BtnBot.on(Laya.Event.CLICK, this, ()=>{
                this.showAd(this.showFake)
            }
            ),
            this.adTitle.on(Laya.Event.CLICK, this, this.showAd, [!1]),
            this.adDescription.on(Laya.Event.CLICK, this, this.showAd, [!1]),
            this.adIcon.on(Laya.Event.CLICK, this, this.showAd, [!1]),
            this.adPic.on(Laya.Event.CLICK, this, this.showAd, [!1]))
        }
        convertWebp(t) {
            let e = t.length;
            return e > 15 && t.lastIndexOf(".short.webp") == e - 11 && (t = t.substring(0, e - 11),
            XnhdAPI.logDebug("convertWebp:" + t)),
            t
        }
        showPic(t, e=null, i=null) {
            if (t.imgUrlList && t.imgUrlList.length > 0 && "string" == typeof t.imgUrlList[0] && t.imgUrlList[0].length > 0) {
                let a = this.convertWebp(t.imgUrlList[0]);
                Laya.loader.load(a, Laya.Handler.create(this, t=>{
                    t ? (XnhdAPI.logDebug("广告图加载成功"),
                    this.destroyed || this.adPic.destroyed ? XnhdAPI.logDebug("已经被删除了") : (this.adPic.skin = a,
                    Laya.timer.frameOnce(1, this, this.adjustAdPicSize),
                    e && e())) : (XnhdAPI.logDebug("广告图加载失败"),
                    i && i())
                }
                ), null, Laya.Loader.IMAGE),
                "string" == typeof t.logoUrl && t.logoUrl.length > 0 && Laya.loader.load(t.logoUrl, Laya.Handler.create(this, e=>{
                    e && (this.destroyed || this.adLogo.destroyed || (this.adLogo.skin = t.logoUrl,
                    XnhdAPI.logDebug("adLogo size:" + this.adLogo.width + "x" + this.adLogo.height),
                    this.adFlag.visible = !1,
                    Laya.timer.frameOnce(1, this, this.adjustAdLogoSize)))
                }
                ), null, Laya.Loader.IMAGE)
            } else
                i && i()
        }
        showIcon(t, e=null, i=null) {
            if (this.destroyed)
                return XnhdAPI.logDebug("NativeBanner showIcon() but destroyed..."),
                void (i && i());
            let a = "";
            if ("string" == typeof t.icon && t.icon.length > 0 ? a = t.icon : t.iconUrlList && t.iconUrlList.length > 0 && "string" == typeof t.iconUrlList[0] && t.iconUrlList[0].length > 0 && (a = t.iconUrlList[0]),
            XnhdAPI.logDebug("showIcon:" + a),
            a.length > 0) {
                this.showComponent(!0),
                this.adIcon.skin = "";
                let n = this._nHeight >= 200 ? Math.floor(.67 * this._nHeight) : Math.floor(.8 * this._nHeight);
                console.log("iconSize:" + n),
                this.adIcon.size(n, n),
                Laya.loader.load(a, Laya.Handler.create(this, t=>{
                    t ? (XnhdAPI.logDebug("icon加载成功1"),
                    this.destroyed || this.adIcon.destroyed || (this.adIcon.skin = a,
                    Laya.timer.frameOnce(1, this, this.setNativeTapArea),
                    e && e(),
                    XnhdAPI.logDebug("icon加载成功2"))) : (XnhdAPI.logDebug("icon加载失败"),
                    i && i())
                }
                ), null, Laya.Loader.IMAGE),
                "string" == typeof t.logoUrl && t.logoUrl.length > 0 && Laya.loader.load(t.logoUrl, Laya.Handler.create(this, e=>{
                    e && (this.destroyed || this.adLogo.destroyed || (this.adLogo.skin = t.logoUrl,
                    XnhdAPI.logDebug("adLogo size:" + this.adLogo.width + "x" + this.adLogo.height),
                    this.adFlag.visible = !1,
                    Laya.timer.frameOnce(1, this, this.adjustAdLogoSize)))
                }
                ), null, Laya.Loader.IMAGE)
            } else
                this.showComponent(!0),
                i && i()
        }
        destroy() {
            XnhdAPI.logDebug("NativeAd_passed_3 destroy:" + this.destroyed),
            super.destroy(),
            this.adIcon.skin && Laya.loader.clearTextureRes(this.adIcon.skin),
            this.adLogo.skin && Laya.loader.clearTextureRes(this.adLogo.skin),
            "xnhdPic/SprWhite.png" !== this.bg.skin && Laya.loader.clearTextureRes(this.bg.skin),
            d.Default.nativeAd_destroy(),
            this.closeCallback && this.closeCallback(),
            this.closeCallback = null
        }
        adjustAdLogoSize() {
            let t = Math.min(60 / this.adLogo.width, 30 / this.adLogo.height);
            this.adLogo.scale(t, t)
        }
        adjustAdPicSize() {
            let t = this._nHeight;
            2 == XnhdDefault.Param.channelType && 103 === this.creativeType && (t = this._nHeight > 220 ? 220 : this._nHeight);
            let e = Math.min(750 / this.adPic.width, t / this.adPic.height);
            this.adPic.scale(e, e),
            this.setNativeTapArea()
        }
        showAd(t) {
            0 != XnhdDefault.Param.platType && (XnhdAPI.logDebug("showAd"),
            XnhdAPI.nativeAd_reportAdClick(5, t),
            Laya.timer.once(1e3, this, this.destroy),
            this.clickCallBack && this.clickCallBack(),
            this.clickCallBack = null)
        }
        setNativeTapArea() {
            XnhdAPI.logDebug("setNativeTapArea:" + this.tapAreaSetted),
            0 == XnhdDefault.Param.platType && this.tapAreaSetted || (this.tapAreaSetted = !0,
            0 == XnhdDefault.Param.platType ? [3, 2, 1].indexOf(XnhdDefault.Param.channelType) > -1 ? Laya.timer.once(1e3, this, ()=>{
                XnhdAPI.nativeAd_setTapArea(this.BoxClick, 5, ()=>{
                    this.destroy(),
                    this.clickCallBack && this.clickCallBack(),
                    this.clickCallBack = null
                }
                , "laya.view")
            }
            ) : XnhdAPI.nativeAd_setTapArea(this.BoxClick, 5, ()=>{
                this.destroy(),
                this.clickCallBack && this.clickCallBack(),
                this.clickCallBack = null
            }
            , "laya.view") : (this.clickAreaOffset,
            XnhdAPI.nativeAd_setTapArea(this.BoxClick, 5, ()=>{
                this.destroy()
            }
            )))
        }
    }
}(OppoLiteGameAPI || (OppoLiteGameAPI = {})),
XnhdDefault.regClassName("OppoLiteGameAPI", OppoLiteGameAPI);

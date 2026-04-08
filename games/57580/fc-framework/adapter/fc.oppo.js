window.fc = window.fc || {},
window.fc.oppo = window.fc.oppo || {},
function(e, n) {
    "use strict";
    var t = fc.utils.Md5Utils,
    i = fc.utils.HttpRequestUtils,
   // o = "https://play.open.oppomobile.com/instant-game-open/userInfo";
   o = "";
    class a {
        static init() {
            return "undefined" == typeof qg ? (console.warn("[adapter]Channel.init:", "qg is undefine"), !1) : (console.log("oppo.init"), qg.onError(function(e) {
                console.error(e)
            }), !0)
        }
        static exitApplication() {
            "undefined" != typeof qg ? qg.exitApplication({
                success: function() {
                    console.log("exitApplication success")
                },
                fail: function() {
                    console.log("exitApplication fail")
                },
                complete: function() {
                    console.log("exitApplication complete")
                }
            }) : console.warn("[adapter]Channel.init:", "qg is undefine")
        }
        static initAdService(e) {
            return e && e.appId ? "undefined" == typeof qg ? (console.warn("[adapter]Channel.init:", "qg is undefine"), !1) : (
            //     qg.initAdService({
            //     appId: e.appId,
            //     isDebug: !1,
            //     success: function(e) {
            //         console.log("success")
            //     },
            //     fail: function(e) {
            //         console.log("fail:" + e.code + e.msg)
            //     },
            //     complete: function(e) {
            //         console.log("complete")
            //     }
            // }), 
            this.gameStartTime = Date.now(), this.adShowCount = 0, this.adMaxCount = e.adMaxCount || 2, e.videoAdUnitId && this.initVideoAd(e.videoAdUnitId), e.bannerAdUnitId && this.initBannerAd(e.bannerAdUnitId, 1), e.insertAdUnitId && this.initInsertAd(e.insertAdUnitId), e.nativeAdUnitId && this.initNativeAd(e.nativeAdUnitId), e.gameBoxUnitId && this.initGameBox(e.gameBoxUnitId), e.gameBannerUnitId && this.initGameBanner(e.gameBannerUnitId), e.customAdUnitId && this.initCustomAd(e.customAdUnitId), console.log("initAdService", e), !0) : (console.warn("[adapter]Channel.init:", "info is invalid"), !0)
        }
        static initCustomAd(e) {
            return this.customAdUnitId = e,
            !0
        }
        static initVideoAd(e) {
            if (this.rewardedVideoAd = null, "undefined" == typeof qg) return console.warn("[adapter]Channel.initVideoAd:", "qg is undefine"),
            !1;
            if (null == e || "" == e) return console.warn("[adapter]Channel.initVideoAd:", "videoAdUnit is invalid"),
            !1;
            if (this.createVideoAdNum += 1, this.rewardedVideoAd = qg.createRewardedVideoAd({
                posId: e
            }), null == this.rewardedVideoAd) return ! 1;
            var n = this;
            return this.videoReady = !1,
            this.videoRequirePlay = !1,
            this.rewardedVideoAd.load(),
            this.rewardedVideoAd.onLoad(function() {
                console.log("激励视频加载成功"),
                n.videoReady = !0,
                n.videoRequirePlay && (n.rewardedVideoAd.show(), n.videoRequirePlay = !1)
            }),
            this.rewardedVideoAd.onError(function(e) {
                console.log("激励视频错误：", e),
                n.rewardedVideoAd = null,
                n.videoReady = !1,
                n.videoRequirePlay = !1,
                n.videoErrorHandler && n.videoErrorHandler.runWith(e)
            }),
            this.rewardedVideoAd.onClose(function(e) {
                n.videoReady = !1,
                n.videoRequirePlay = !1,
                n.rewardedVideoAd.load(),
                e.isEnded ? (n.videoCompletedHandler && n.videoCompletedHandler.run(), console.log("激励视频广告完成，发放奖励:" + Date.now())) : (n.videoInterruptHandler && n.videoInterruptHandler.run(), console.log("激励视频广告取消关闭，不发放奖励:" + Date.now()))
            }),
            !0
        }
        static initBannerAd(e, n) {
            return this.bannerAdUnitId = e,
            !0
        }
        static initInsertAd(e) {
            return this.insertAdUnitId = e,
            !0
        }
        static initNativeAd(e) {
            return this.isClikNativeAd = !0,
            this.nativeAdRes = null,
            this.nativeAdShowTime = Date.now(),
            this.nativeAdUnitId = e,
            !0
        }
        static initGameBox(e) {
            // return console.log("initGameBox:", e),
            // this.gameBoxUnitId = e,
            // "undefined" == typeof qg ? (console.warn("[adapter]Channel.initGameBox:", "qg is undefine"), !1) : qg.getSystemInfoSync().platformVersionCode >= 1076 ? (this.gameBoxAd = qg.createGamePortalAd({
            //     adUnitId: this.gameBoxUnitId
            // }), !0) : (console.log("快应用平台版本号低于1076，暂不支持互推盒子相关 API"), !1)
        }
        static isGameBoxValid() {
            return null != this.gameBoxAd
        }
        static initGameBanner(e) {
            this.gameBannerUnitId = e
        }
        static createGameBanner(e, n) {
            return console.log("createGameBanner"),
            "undefined" == typeof qg ? (console.warn("[adapter]Channel.initGameBanner:", "qg is undefine"), !1) : qg.getSystemInfoSync().platformVersionCode >= 1076 ? (this.gameBannerAd = qg.createGameBannerAd({
                adUnitId: this.gameBannerUnitId
            }), !0) : (console.log("快应用平台版本号低于1076，暂不支持互推盒子相关 API"), !1)
        }
        static showGameBanner() {
            return console.log("showGameBanner"),
            !!this.gameBannerAd && (this.gameBannerAd.show().then(function() {
                console.log("show success")
            }).
            catch(function(e) {
                console.log("show fail with:" + e.errCode + "," + e.errMsg)
            }), !0)
        }
        static hideGameBanner() {
            return console.log("hideGameBanner"),
            !!this.gameBannerAd && (this.gameBannerAd.hide().then(function() {
                console.log("hide success")
            }).
            catch(function(e) {
                console.log("hide fail with:" + e.errCode + "," + e.errMsg)
            }), !0)
        }
        static destroyGameBanner() {
            return console.log("destroyGameBanner"),
            !!this.gameBannerAd && (gameBannerAd.destroy().then(function() {
                console.log("destroy success")
            }).
            catch(function(e) {
                console.log("destroy fail with:" + e.errCode + "," + e.errMsg)
            }), this.gameBannerAd = null, !0)
        }
        static showGameBox(e, n, t) {
            if (console.log("showGameBox"), "undefined" == typeof qg) return console.warn("[adapter]Channel.showGameBox:", "qg is undefine"),
            !1;
            if (!this.gameBoxAd) return console.warn("[adapter]Channel.showGameBox:", "gameBoxAd is undefine"),
            !1;
            this.gameBoxAd.onClose(function() {
                t && t.run()
            });
            var i = this;
            return this.gameBoxAd.load().then(function() {
                console.log("load success"),
                i.gameBoxAd.show().then(function() {
                    console.log("show gameBoxAd success"),
                    e && e.run()
                }).
                catch(function(e) {
                    console.log("show gameBoxAd fail with:" + e.errCode + "," + e.errMsg),
                    n && n.runWith(e.errMsg)
                })
            }).
            catch(function(e) {
                console.log("load fail with:" + e.errCode + "," + e.errMsg),
                n && n.runWith(e.errMsg)
            }),
            !0
        }
        static login(e, n, a, r, d) {
            if ("undefined" == typeof qg) return console.warn("[adapter]Channel.login:", "qg is undefine"),
            e && e.runWith("0"),
            !0;
            var s = this;
            return this.loginNum++,
            qg.login({
                success: function(l) {
                    var c = Date.now(),
                    u = l.data.token,
                    h = `appKey = ${
                        a
                    } & appSecret = ${
                        r
                    } & pkgName = ${
                        d
                    } & timeStamp = ${
                        c
                    } & token = ${
                        u
                    }`;
                    h = t.hex_md5(h);
                    var A = {
                        pkgName: d,
                        timeStamp: c,
                        token: u,
                        sign: h,
                        version: "1.0.0"
                    };
                    i.get(o, A, null, s, s.onXHRError, s.onXHRCompleted, e, n)
                },
                fail: function(t) {
                    this.loginNum <= 3 ? setTimeout(function() {
                        console.log("----------延迟登录"),
                        this.login(e, n)
                    },
                    200) : n && n.runWith({
                        code: 2,
                        desc: "login platform error"
                    })
                }
            }),
            !0
        }
        static onXHRError(e, n) {
            console.warn("request userInfo out time"),
            n && n.run()
        }
        static onXHRCompleted(e, n, t) {
            console.log("onXHRCompleted:" + t);
            var i = JSON.parse(t);
            200 == i.errCode ? e && e.runWith(i.userInfo.userId) : (console.warn(`request userInfo failed[${
                i.errCode
            }] : ${
                i.errMsg
            }`), n && n.run())
        }
        static loadSubpackage(e, n, t, i) {
            return "undefined" == typeof qg ? (console.warn("[adapter]Channel.loadSubpackage:", "qg is undefine"), !1) : !!qg.loadSubpackage({
                name: e,
                fail(e) {
                    console.log(e)
                },
                complete() {
                    t && t.runWith(1)
                }
            }) || (console.warn("[adapter]Channel.loadSubpackage:", "loadTask is invalid"), !1)
        }
        static navigate2Mini(e, n, t, i, o, a) {
            return "undefined" != typeof qg || (console.warn("[adapter]Channel.navigate2Mini:", "qg is undefine"), !1)
        }
        static showModal(e, n, t, i, o, a, r) {
            return "undefined" == typeof qg ? (console.warn("[adapter]Channel.showModal:", "qg is undefine"), !1) : (qg.showModal({
                title: e,
                content: n,
                cancelText: i,
                confirmText: t,
                success(e) {
                    o && o.runWith(e)
                },
                fail() {
                    a && a.run()
                },
                complete() {
                    r && r.run()
                }
            }), !0)
        }
        static isVideoEnable() {
            return null != this.rewardedVideoAd && this.videoReady
        }
        static playVideo(e, n, t) {
            e && e();
            return;
            if (null == this.rewardedVideoAd) return console.warn("[adapter]Channel.playVideo:", "video is undefine"),
            !1;
            this.videoErrorHandler = t,
            this.videoCompletedHandler = e,
            this.videoInterruptHandler = n,
            this.videoReady ? (this.rewardedVideoAd.show(), console.log("playVideo" + Date.now())) : (this.videoRequirePlay = !0, this.rewardedVideoAd.load())
        }
        static createBannerAd(e) {
            if ("undefined" == typeof qg) return console.warn("[adapter]Channel.createBannerAd:", "qg is undefine"),
            !1;
            if (null == this.bannerAdUnitId || "" == this.bannerAdUnitId) return console.warn("[adapter]Channel.createBannerAd:", "bannerAdUnitId is invalid"),
            !1;
            if (console.log("初始化banner:", this.bannerAdUnitId), this.createBannerNum += 1, this.bannerErrorHandler = e, qg.getSystemInfoSync().platformVersionCode < 1051) return console.warn("[adapter]Channel.createBannerAd:", "platformVersionCode < 1051"),
            !1;
            if (this.bannerAd = qg.createBannerAd({
                adUnitId: this.bannerAdUnitId
            }), null == this.bannerAd) return console.log("banner create fail"),
            !1;
            console.log("banner create success");
            var n = this;
            return this.bannerAd.onError(function(e) {
                console.log("bannerAd error:", e),
                n.bannerErrorHandler && n.bannerErrorHandler.run(),
                n.bannerAd || console.log("bannerAd lose")
            }),
            !0
        }
        static showBannerAd() {
            // return console.log("showBannerAd"),
            // this.bannerAd ? this.gameStartTime > 0 && this.adShowCount / Math.ceil((Date.now() - this.gameStartTime) / 6e4) > this.adMaxCount ? (console.warn("平均一Min钟内banner和原生超过2次:", "广告展示频繁"), !1) : (console.log("bannerAd show"), this.bannerAd.show(), this.bannerAdVisible = !0, this.adShowCount++, !0) : (console.warn("[adapter]Channel.showBannerAd:", "bannerAd is undefine"), !1)
        }
        static hideBannerAd() {
            // return console.log("hideBannerAd"),
            // this.bannerAd ? (this.bannerAd.hide(), this.bannerAdVisible = !1, !0) : (console.warn("[adapter]Channel.hideBannerAd:", "bannerAd is undefine"), !1)
        }
        static destroyBannerAd() {
            return console.log("destroyBannerAd"),
            this.bannerAdIsReady = !1,
            this.bannerAdVisible = !1,
            this.bannerAd ? (this.bannerAd.destroy(), this.bannerAd = null, !0) : (console.warn("[adapter]Channel.destroyBannerAd:", "bannerAd is undefine"), !1)
        }
        static isBannerAdValid() {
            return !! this.bannerAd
        }
        static loadInsertAd(e, n) {
            if ("undefined" == typeof qg) return console.warn("[adapter]Channel.loadInsertAd:", "qg is undefine"),
            !1;
            if (null == this.insertAdUnitId) return console.warn("[adapter]Channel.loadInsertAd:", "insertAdUnitId is undefine"),
            !1;
            if (console.log("初始化插屏广告：" + this.insertAdUnitId), this.insertAd = qg.createInsertAd({
                posId: this.insertAdUnitId
            }), null == this.insertAd) return console.warn("[adapter]Channel.loadInsertAd:", "insertAd is undefine"),
            !1;
            this.insertAd.onLoad(function() {
                console.log("插屏广告加载成功"),
                e && e.run()
            });
            var t = this;
            return this.insertAd.onError(function(e) {
                console.log("插屏广告失败"),
                console.log(e),
                t.insertAd = null,
                n && n.runWith(e)
            }),
            this.insertAd.load(),
            !0
        }
        static showInsertAd(e, n) {
            if (null == this.insertAd) return console.warn("[adapter]Channel.showInsertAd:", "insertAd is undefine"),
            !1;
            var t = this;
            return this.insertAd.onClose(function() {
                t.insertAd = null,
                e && e.run()
            }),
            this.insertAd.onError(function(e) {
                console.log(e),
                t.insertAd = null,
                n && n.runWith(e)
            }),
            this.insertAd.show(),
            console.log("播放插屏广告"),
            !0
        }
        static createNativeAd(e) {
            if ("undefined" == typeof qg) return console.warn("[adapter]Channel.initNativeAd:", "qg is undefine"),
            !1;
            if (null == this.nativeAdUnitId) return console.warn("[adapter]Channel.initNativeAd:", "nativeAdUnitId is undefine"),
            !1;
            if (!this.isClikNativeAd && Date.now() - this.nativeAdShowTime < 1e4 && this.nativeAd && this.nativeAdRes) return console.warn("[adapter]Channel.initNativeAd:", "nativeAdUnitId is no click"),
            !0;
            if (this.nativeAd && this.nativeAd.destroy(), this.nativeAdRes = null, this.gameStartTime > 0 && this.adShowCount / Math.ceil((Date.now() - this.gameStartTime) / 6e4) > this.adMaxCount) return console.warn("平均一Min钟内banner和原生超过2次:", "广告展示频繁"),
            !1;
            if (this.nativeAdErrorHandler = e, this.nativeAd = qg.createNativeAd({
                posId: this.nativeAdUnitId
            }), null == this.nativeAd) return console.warn("[adapter]Channel.initNativeAd:", "nativeAd is undefine"),
            !1;
            var n = this;
            return this.nativeAd.onError(function(e) {
                console.log("原生广告失败"),
                console.log(e),
                n.nativeAdErrorHandler && n.nativeAdErrorHandler.runWith(e)
            }),
            !0
        }
        static loadNativeAd(e, n) {
            if ("undefined" == typeof qg) return console.warn("[adapter]Channel.loadNativeAd:", "qg is undefine"),
            !1;
            if (null == this.nativeAd) return console.warn("[adapter]Channel.loadNativeAd:", "nativeAd is invalid"),
            !1;
            if (!this.isClikNativeAd && this.nativeAd && this.nativeAdRes) return console.warn("[adapter]Channel.loadNativeAd:", "nativeAdUnitId is no click"),
            console.log("缓存的数据：", this.nativeAdRes),
            e && e.runWith(this.nativeAdRes),
            !0;
            if (this.gameStartTime > 0 && this.adShowCount / Math.ceil((Date.now() - this.gameStartTime) / 6e4) > this.adMaxCount) return console.warn("平均一Min钟内banner和原生超过2次:", "广告展示频繁"),
            !1;
            var t = this;
            return this.nativeAdErrorHandler = n,
            this.nativeAd.onLoad(function(n) {
                console.log("原生广告加载完成", JSON.stringify(n)),
                n && n.adList && (t.nativeAdRes = n, t.nativeAdShowTime = Date.now(), e && (t.isShowNativeAd = !1, e.runWith(n)))
            }),
            this.nativeAd.load(),
            this.adShowCount++,
            !0
        }
        static reportNativeAdShow(e) {
            return this.nativeAd ? (console.log("reportNativeAdShow:" + Date.now(), this.isClikNativeAd, this.isShowNativeAd), this.isShowNativeAd || (console.log("reportNativeAdShow:上报曝光"), this.nativeAd.reportAdShow({
                adId: e.toString()
            })), this.isShowNativeAd = !0, this.isClikNativeAd = !1, !0) : (console.warn("[adapter]Channel.reportNativeAdShow:", "report show is fail"), !1)
        }
        static reportNativeAdClick(e) {
            return ! this.nativeAd || this.isClikNativeAd ? (console.warn("[adapter]Channel.reportNativeAdClick:", "report is fail"), !1) : (console.log("reportNativeAdClick:" + Date.now()), this.nativeAd.reportAdClick({
                adId: e.toString()
            }), this.isClikNativeAd = !0, this.nativeAd && (this.nativeAd.destroy(), this.nativeAd = null), !0)
        }
        static createCustomAd(e, n, t, i, o) {
            // if ("undefined" == typeof qg) return console.warn("[adapter]Channel.createNativeAd:", "wx is undefine"),
            // !1;
            // if (n && (this.customAdUnitId = n), null == this.customAdUnitId || "" == this.customAdUnitId) return console.warn("[adapter]Channel.createNativeAd:", "inserAdUnitId is undefine"),
            // !1;
            // if ("function" == typeof qg.createCustomAd) {
            //     this.destroyCustomAd();
            //     qg.getSystemInfoSync();
            //     if (this.customAd = qg.createCustomAd({
            //         adUnitId: this.customAdUnitId
            //     }), null == this.customAd) return console.warn("[adapter]Channel.createNativeAd:", "inserAdUnitId is undefine"),
            //     !1;
            //     var a = this;
            //     return this.customAd.onError(function(n) {
            //         a.customAd && (console.log("原生模板插屏广告加载失败", n), a.customAd.destroy(), a.customAd = null, e && e.runWith(n))
            //     }),
            //     !0
            // }
            // console.warn("[adapter]Channel.createNativeAd:", "interstitialAd is unsupported")
        }
        static loadCustomAd(e, n) {
            if (null == this.customAd) return console.warn("[adapter]Channel.loadNativeAd:", "insertAd is undefine"),
            !1;
            var t = this;
            return this.customAd.onLoad(function() {
                e && (console.log("原生模板插屏广告加载成功"), e.run())
            }),
            this.customAd.onHide(function() {
                t.customAd && (console.log("原生模板插屏广告关闭"), t.customAd.destroy(), t.customAd = null, n && n.runWith())
            }),
            this.customAd.onError(function(e) {
                t.customAd && (console.log("原生模板插屏广告加载失败2", e), t.customAd.destroy(), t.customAd = null, n && n.runWith(e))
            }),
            this.customAd.show().then(() =>{
                console.log("原生模板广告展示完成")
            }).
            catch(e =>{
                console.log("原生模板广告展示失败", JSON.stringify(e)),
                t.customAd && (console.log("原生模板插屏广告加载失败2", e), t.customAd.destroy(), t.customAd = null, n && n.runWith(e))
            }),
            !0
        }
        static destroyCustomAd() {
            // return console.log("destroyCustomAd"),
            // this.customAd ? (this.customAd.destroy(), this.customAd = null, !0) : (console.warn("[adapter]Channel.destroyCustomAd:", "nativeAd is undefine"), !1)
        }
        static hasDesktopIcon(e) {
            return "undefined" == typeof qg ? (console.warn("[adapter]Channel.hasDesktopIcon:", "qg is undefine"), !1) : (qg.hasShortcutInstalled({
                success: function(n) {
                    e && e.runWith({
                        hasIcon: n
                    })
                },
                fail: function(e) {
                    console.log("request desktop icon error:" + JSON.stringify(e))
                }
            }), !0)
        }
        static createDesktopIcon(e) {
            return "undefined" == typeof qg ? (console.warn("[adapter]Channel.createDesktopIcon:", "qg is undefine"), !1) : (qg.installShortcut({
                success: function(n) {
                    e && e.runWith(),
                    console.log("create DesktopIcon success:", n)
                },
                fail: function(e) {
                    console.log("create desktop icon fail", e)
                },
                complete: function() {
                    console.log("create desktop icon complete")
                }
            }), !0)
        }
        static reportMonitor(e, n) {
            if ("undefined" == typeof qg) return console.warn("[adapter]Channel.reportMonitor:", "qg is undefine"),
            !1;
            return qg.getSystemInfoSync().platformVersionCode < 1060 ? (console.warn("[adapter]Channel.reportMonitor:", "platformVersionCode < 1060"), !1) : (qg.reportMonitor(e, n), !0)
        }
    }
    a.loginNum = 0,
    a.videoAdUnit = null,
    a.createVideoAdNum = 0,
    a.rewardedVideoAd = null,
    a.videoReady = !1,
    a.videoRequirePlay = !1,
    a.videoCompletedHandler = null,
    a.videoInterruptHandler = null,
    a.videoErrorHandler = null,
    a.bannerAdUnitId = null,
    a.bannerAd = null,
    a.bannerErrorHandler = null,
    a.createBannerNum = 0,
    a.insertAd = null,
    a.insertAdUnitId = null,
    a.nativeAd = null,
    a.nativeAdErrorHandler = null,
    a.nativeAdLoadedHandler = null,
    a.gameStartTime = 0,
    a.adShowCount = 0,
    a.adMaxCount = 2,
    a.gameBoxUnitId = null,
    a.gameBoxAdReady = !0,
    a.gameBoxAd = null,
    a.gameBannerUnitId = null,
    a.gameBannerAd = null,
    a.isClikNativeAd = !1,
    a.isShowNativeAd = !1,
    a.nativeAdShowTime = 0,
    a.nativeAdRes = null,
    a.customAdUnitId = null;
    class r {
        static get statusBarHeight() {
            return this.sDeviceInfo ? this.sDeviceInfo.notchHeight: 0
        }
        static get screenWidth() {
            return this.sDeviceInfo ? this.sDeviceInfo.screenWidth: 1
        }
        static get screenHeight() {
            return this.sDeviceInfo ? this.sDeviceInfo.screenHeight: 1
        }
        static init(e, n) {
            console.log("oppoDevice.init"),
            "undefined" != typeof qg ? (this.sDeviceInfo = qg.getSystemInfoSync(), console.log(this.sDeviceInfo), qg.onShow(function(n) {
                console.log("oppoDevice.show:" + Date.now()),
                e && e.runWith(n)
            }), qg.onHide(function() {
                console.log("oppoDevice.hide:" + Date.now()),
                n && n.run()
            })) : console.warn("oppoDevice.init", "qg is undefined")
        }
        static vibrateShort() {
            "undefined" != typeof qg && qg.vibrateShort({
                fail: function() {
                    console.log("vibrateShort failed")
                },
                success: function() {},
                complete: function() {}
            })
        }
        static vibrateLong() {
            "undefined" != typeof qg && qg.vibrateLong({
                fail: function() {
                    console.log("vibrateLong failed")
                },
                success: function() {},
                complete: function() {}
            })
        }
        static isNetValid() {
            return ! 0
        }
    }
    r.sDeviceInfo = null,
    e.Channel = a,
    e.Device = r
} (window.fc.oppo = window.fc.oppo || {},
Laya),
window.fc.adapter = window.fc.oppo;
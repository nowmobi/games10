var XnhdDefault;
!function(e) {
    let a;
    function matchOpponentsLocal(a, n=null, o=10) {
        let l = "unpack/avatar.json"
          , i = "unpack/avatar/"
          , r = "cdn" == e.Param.avatarFrom.toLowerCase();
        if (e.Param.networkEnable ? r && (l = "https://cdn.batwan.cn/cache/avatar.json",
        i = "https://cdn.batwan.cn/cache/avatar/",
        XnhdAPI.logDebug("matchOpponents:2")) : (i = "unpack/avatar/",
        XnhdAPI.logDebug("matchOpponents:3")),
        null != t && XnhdAPI.isset(t, "data") && t.data.length > 0) {
            let e = t.data.length
              , n = {
                code: 0,
                data: []
            };
            XnhdAPI.logDebug(l + " from cache:" + e);
            let r = XnhdTools.randomInt(0, e - o - 1);
            for (let e = 0; e < o; ++e) {
                let a = t.data[e + r];
                if (XnhdAPI.isset(a, "avatar")) {
                    let e = {
                        nick: a.nick,
                        avatar: i + a.avatar
                    };
                    n.data.push(e)
                }
            }
            a && a(n)
        }
        Laya.loader.load(l, Laya.Handler.create(this, e=>{
            var r = Laya.loader.getRes(l);
            if (e && r && r.data && r.data.length > o) {
                let e = r.data.length
                  , n = {
                    code: 0,
                    data: []
                };
                XnhdAPI.logDebug(l + " exists:" + e);
                let s = XnhdTools.randomInt(0, e - o - 1);
                for (let e = 0; e < o; ++e) {
                    let a = r.data[e + s];
                    if (XnhdAPI.isset(a, "avatar")) {
                        let e = {
                            nick: a.nick,
                            avatar: i + a.avatar
                        };
                        n.data.push(e)
                    }
                }
                null == t && (t = r),
                a && a(n)
            } else
                XnhdAPI.logDebug(l + " not exists"),
                n && n()
        }
        ))
    }
    !function(e) {
        e.logSwitch = !0,
        e.networkEnable = !0,
        e.ageTips = 0,
        e.beianNumber = null,
        e.avatarFrom = "network",
        e.channelList = {
            0: ["Default", "Xiaomi", "OPPO", "VIVO", "MEIZU", "4399", "ChuanSJ", "Quanmin"],
            1: ["Default", "FunPepper", "QuToutiao", "Xiaomi", "Xingyou"],
            2: ["Default", "WxLiteGame", "OppoLiteGame", "VivoLiteGame", "HudieLiteGame", "VivoPKGame", "BdLiteGame", "XiaomiLiteGame", "QQLiteGame", "ZjtdLiteGame", "HuaweiLiteGame", "HonorLiteGame"]
        },
        e.screenWidth = 750,
        e.screenHeight = 1334,
        e.screenScale = 1,
        e.languageList = ["zh-CN", "en-US", "zh-TW", "id-ID", "vi-VN", "ja-JP", "ar-EG"],
        e.curLanguage = 0,
        e.navigationViewHeight = 0,
        e.hasUserId = 0,
        e._LayaCallback = {
            onHide: null,
            onShow: null
        }
    }(a = e.Param || (e.Param = {})),
    e.setLanguage = function(e) {
        let t = a.languageList.indexOf(e);
        t > -1 ? a.curLanguage = t : logError("不支持当前传入的语言字符串：" + e)
    }
    ,
    e.showTips = function(e, t=!0, n=2e3) {
        let o = Laya.stage.getChildByName("XnhdTips");
        o ? Laya.Tween.clearAll(o) : ((o = new Laya.Label).width = 800,
        o.color = "#ffffff",
        o.strokeColor = "#120bcf",
        o.fontSize = 35,
        o.stroke = 3,
        o.bold = !0,
        o.align = "center",
        o.padding = "20,35,20,35",
        o.wordWrap = !0,
        o.name = "XnhdTips",
        o.zOrder = 2e4,
        Laya.stage.addChild(o),
        o.scale(a.screenScale, a.screenScale)),
        o.centerX = 0,
        o.centerY = 0,
        o.alpha = .9,
        t && (o.bgColor = "#000000"),
        o.text = e,
        Laya.Tween.to(o, {
            alpha: 0
        }, n, null, Laya.Handler.create(this, ()=>{
            o.destroy()
        }
        ), n)
    }
    ,
    e.showDialog = function(e, t=null, n="公告", o="确定") {
        console.log("showDialog");
        let l = Laya.stage.getChildByName("XnhdDialog");
        l && Laya.Tween.clearAll(l),
        console.log("start showDialog"),
        l = new class extends Laya.View {
            constructor(e, t=null, n="公告", o="确定") {
                super(),
                this.BtnAgree = null,
                this.cb = null,
                this.cb = t,
                this.visible = !1,
                this.name = "XnhdDialog",
                this.height = a.screenHeight;
                let l = new Laya.Image("xnhdPic/SprBlack.png");
                l.sizeGrid = "1,1,1,1",
                l.width = 750,
                l.height = this.height,
                l.alpha = .7,
                this.addChild(l);
                let i = new Laya.Image("xnhdPic/SprWhite.png");
                i.size(700, 600),
                i.anchorX = .5,
                i.anchorY = .5,
                i.x = 375,
                i.y = this.height / 2,
                this.BtnAgree = new Laya.Image("xnhdPic/SprBlack.png"),
                this.BtnAgree.anchorX = .5,
                this.BtnAgree.size(200, 80),
                this.BtnAgree.pos(350, 610);
                let r = new Laya.Label(o);
                r.size(200, 80),
                r.fontSize = 40,
                r.color = "#ffffff",
                r.align = "center",
                r.valign = "middle",
                this.BtnAgree.addChild(r),
                i.addChild(this.BtnAgree);
                let s = new Laya.Image("xnhdPic/SprBlack.png");
                s.anchorX = .5,
                s.anchorY = .5,
                s.size(700, 80),
                s.pos(350, 0);
                let h = new Laya.Label(n);
                h.anchorX = .5,
                h.size(696, 40),
                h.fontSize = 40,
                h.color = "#ffffff",
                h.align = "center",
                h.pos(352, 20),
                s.addChild(h),
                i.addChild(s);
                let g = new Laya.Panel;
                g.vScrollBarSkin = "xnhdPic/vscroll.png",
                g.size(680, 500),
                g.pos(10, 90);
                let c = new Laya.Text;
                c.color = "#000000",
                c.fontSize = 35,
                c.wordWrap = !0,
                c.align = "left",
                c.size(679, 2e3),
                g.addChild(c),
                i.addChild(g);
                let d = e.split("\n").length;
                console.log("rows:" + d),
                c.height = 37 * d,
                c.text = e,
                this.addChild(i),
                this.visible = !0,
                this.zOrder = 1000001,
                Laya.stage.addChild(this),
                this.scale(a.screenScale, a.screenScale),
                this.BtnAgree.on(Laya.Event.CLICK, this, ()=>{
                    console.log("XnhdDialog destroy!"),
                    this.destroy(),
                    this.cb && this.cb()
                }
                )
            }
        }
        (e,t,n,o),
        console.log("showDialog done")
    }
    ,
    e.matchOpponents = function(a, t=null, n=10) {
        let o = "cdn" == e.Param.avatarFrom.toLowerCase();
        e.Param.networkEnable && !o ? (XnhdAPI.logDebug("matchOpponents:1"),
        XnhdAPI.requestHttp("https://game.batwan.cn/api/game_avatar.php?num=" + n, e=>{
            "number" == typeof e.code && 0 == e.code && e.data && e.data.length > 0 ? (console.log("matchOpponents success,fetched:" + e.data.length),
            a && a(e)) : (console.log("matchOpponents failed,data error."),
            t && t())
        }
        , "", e=>{
            console.log("matchOpponents requestHttp error."),
            matchOpponentsLocal(a, t, n)
        }
        )) : matchOpponentsLocal(a, t, n)
    }
    ;
    var t = null;
    function logError(e) {
        a.logSwitch && (0 === a.platType ? NativeGameAPI.printErrorLogToApk(e) : console.error(formatDateTime(Date.now()) + ":" + e))
    }
    function formatDateTime(e) {
        let a = new Date(e);
        return a.getFullYear() + "-" + (a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : (a.getMonth() + 1).toString()) + "-" + (a.getDate() < 10 ? "0" + a.getDate() : a.getDate().toString()) + " " + (a.getHours() < 10 ? "0" + a.getHours() : a.getHours().toString()) + ":" + (a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes().toString()) + ":" + (a.getSeconds() < 10 ? "0" + a.getSeconds() : a.getSeconds().toString())
    }
    e.logDebug = function(e) {
        a.logSwitch && (0 === a.platType ? NativeGameAPI.printLogToApk(e) : console.log(formatDateTime(Date.now()) + ":" + e))
    }
    ,
    e.logError = logError,
    e.formatDateTime = formatDateTime,
    e.getNativeAdScene_String = function(e) {
        return 2 === e ? "pushgift" : 3 === e ? "rebirth" : 4 === e ? "interadv" : 5 === e ? "passed" : 6 === e ? "splash" : "default"
    }
    ,
    e.getUrlParam = function(e) {
        let a = new RegExp("(^|&)" + e + "=([^&]*)(&|$)")
          , t = Laya.Browser.window.location.search.substr(1).match(a);
        return null != t ? decodeURI(t[2]) : null
    }
    ,
    e.regClassName = function(e, a) {
        if (!Laya.AtlasInfoManager)
            return;
        let t = e.split(".")
          , n = Laya.Browser.window;
        for (let e = 0; e < t.length; e++)
            e === t.length - 1 ? n[t[e]] = a : (n[t[e]] || (n[t[e]] = {}),
            n = n[t[e]])
    }
}(XnhdDefault || (XnhdDefault = {})),
XnhdDefault.regClassName("XnhdDefault", XnhdDefault);

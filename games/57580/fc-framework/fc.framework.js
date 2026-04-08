window.fc = window.fc || {},
window.fc.framework = window.fc.framework || {},
function(e, t) {
    "use strict";
    var s = fc.define.Event,
    i = fc.define.SceneId,
    n = fc.define.LoadingStep;
    class a {
        static hex_md5(e) {
            return this.binl2hex(this.core_md5(this.str2binl(e), e.length * this.chrsz))
        }
        static b64_md5(e) {
            return this.binl2b64(this.core_md5(this.str2binl(e), e.length * this.chrsz))
        }
        static str_md5(e) {
            return this.binl2str(this.core_md5(this.str2binl(e), e.length * this.chrsz))
        }
        static hex_hmac_md5(e, t) {
            return this.binl2hex(this.core_hmac_md5(e, t))
        }
        static b64_hmac_md5(e, t) {
            return this.binl2b64(this.core_hmac_md5(e, t))
        }
        static str_hmac_md5(e, t) {
            return this.binl2str(this.core_hmac_md5(e, t))
        }
        static hex_md5(e) {
            return this.binl2hex(this.core_md5(this.str2binl(e), e.length * this.chrsz))
        }
        static b64_md5(e) {
            return this.binl2b64(this.core_md5(this.str2binl(e), e.length * this.chrsz))
        }
        static str_md5(e) {
            return this.binl2str(this.core_md5(this.str2binl(e), e.length * this.chrsz))
        }
        static hex_hmac_md5(e, t) {
            return this.binl2hex(this.core_hmac_md5(e, t))
        }
        static b64_hmac_md5(e, t) {
            return this.binl2b64(this.core_hmac_md5(e, t))
        }
        static str_hmac_md5(e, t) {
            return this.binl2str(this.core_hmac_md5(e, t))
        }
        static core_md5(e, t) {
            e[t >> 5] |= 128 << t % 32,
            e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var s = 1732584193,
            i = -271733879,
            n = -1732584194,
            a = 271733878,
            r = 0; r < e.length; r += 16) {
                var c = s,
                l = i,
                h = n,
                o = a;
                s = this.md5_ff(s, i, n, a, e[r + 0], 7, -680876936),
                a = this.md5_ff(a, s, i, n, e[r + 1], 12, -389564586),
                n = this.md5_ff(n, a, s, i, e[r + 2], 17, 606105819),
                i = this.md5_ff(i, n, a, s, e[r + 3], 22, -1044525330),
                s = this.md5_ff(s, i, n, a, e[r + 4], 7, -176418897),
                a = this.md5_ff(a, s, i, n, e[r + 5], 12, 1200080426),
                n = this.md5_ff(n, a, s, i, e[r + 6], 17, -1473231341),
                i = this.md5_ff(i, n, a, s, e[r + 7], 22, -45705983),
                s = this.md5_ff(s, i, n, a, e[r + 8], 7, 1770035416),
                a = this.md5_ff(a, s, i, n, e[r + 9], 12, -1958414417),
                n = this.md5_ff(n, a, s, i, e[r + 10], 17, -42063),
                i = this.md5_ff(i, n, a, s, e[r + 11], 22, -1990404162),
                s = this.md5_ff(s, i, n, a, e[r + 12], 7, 1804603682),
                a = this.md5_ff(a, s, i, n, e[r + 13], 12, -40341101),
                n = this.md5_ff(n, a, s, i, e[r + 14], 17, -1502002290),
                i = this.md5_ff(i, n, a, s, e[r + 15], 22, 1236535329),
                s = this.md5_gg(s, i, n, a, e[r + 1], 5, -165796510),
                a = this.md5_gg(a, s, i, n, e[r + 6], 9, -1069501632),
                n = this.md5_gg(n, a, s, i, e[r + 11], 14, 643717713),
                i = this.md5_gg(i, n, a, s, e[r + 0], 20, -373897302),
                s = this.md5_gg(s, i, n, a, e[r + 5], 5, -701558691),
                a = this.md5_gg(a, s, i, n, e[r + 10], 9, 38016083),
                n = this.md5_gg(n, a, s, i, e[r + 15], 14, -660478335),
                i = this.md5_gg(i, n, a, s, e[r + 4], 20, -405537848),
                s = this.md5_gg(s, i, n, a, e[r + 9], 5, 568446438),
                a = this.md5_gg(a, s, i, n, e[r + 14], 9, -1019803690),
                n = this.md5_gg(n, a, s, i, e[r + 3], 14, -187363961),
                i = this.md5_gg(i, n, a, s, e[r + 8], 20, 1163531501),
                s = this.md5_gg(s, i, n, a, e[r + 13], 5, -1444681467),
                a = this.md5_gg(a, s, i, n, e[r + 2], 9, -51403784),
                n = this.md5_gg(n, a, s, i, e[r + 7], 14, 1735328473),
                i = this.md5_gg(i, n, a, s, e[r + 12], 20, -1926607734),
                s = this.md5_hh(s, i, n, a, e[r + 5], 4, -378558),
                a = this.md5_hh(a, s, i, n, e[r + 8], 11, -2022574463),
                n = this.md5_hh(n, a, s, i, e[r + 11], 16, 1839030562),
                i = this.md5_hh(i, n, a, s, e[r + 14], 23, -35309556),
                s = this.md5_hh(s, i, n, a, e[r + 1], 4, -1530992060),
                a = this.md5_hh(a, s, i, n, e[r + 4], 11, 1272893353),
                n = this.md5_hh(n, a, s, i, e[r + 7], 16, -155497632),
                i = this.md5_hh(i, n, a, s, e[r + 10], 23, -1094730640),
                s = this.md5_hh(s, i, n, a, e[r + 13], 4, 681279174),
                a = this.md5_hh(a, s, i, n, e[r + 0], 11, -358537222),
                n = this.md5_hh(n, a, s, i, e[r + 3], 16, -722521979),
                i = this.md5_hh(i, n, a, s, e[r + 6], 23, 76029189),
                s = this.md5_hh(s, i, n, a, e[r + 9], 4, -640364487),
                a = this.md5_hh(a, s, i, n, e[r + 12], 11, -421815835),
                n = this.md5_hh(n, a, s, i, e[r + 15], 16, 530742520),
                i = this.md5_hh(i, n, a, s, e[r + 2], 23, -995338651),
                s = this.md5_ii(s, i, n, a, e[r + 0], 6, -198630844),
                a = this.md5_ii(a, s, i, n, e[r + 7], 10, 1126891415),
                n = this.md5_ii(n, a, s, i, e[r + 14], 15, -1416354905),
                i = this.md5_ii(i, n, a, s, e[r + 5], 21, -57434055),
                s = this.md5_ii(s, i, n, a, e[r + 12], 6, 1700485571),
                a = this.md5_ii(a, s, i, n, e[r + 3], 10, -1894986606),
                n = this.md5_ii(n, a, s, i, e[r + 10], 15, -1051523),
                i = this.md5_ii(i, n, a, s, e[r + 1], 21, -2054922799),
                s = this.md5_ii(s, i, n, a, e[r + 8], 6, 1873313359),
                a = this.md5_ii(a, s, i, n, e[r + 15], 10, -30611744),
                n = this.md5_ii(n, a, s, i, e[r + 6], 15, -1560198380),
                i = this.md5_ii(i, n, a, s, e[r + 13], 21, 1309151649),
                s = this.md5_ii(s, i, n, a, e[r + 4], 6, -145523070),
                a = this.md5_ii(a, s, i, n, e[r + 11], 10, -1120210379),
                n = this.md5_ii(n, a, s, i, e[r + 2], 15, 718787259),
                i = this.md5_ii(i, n, a, s, e[r + 9], 21, -343485551),
                s = this.safe_add(s, c),
                i = this.safe_add(i, l),
                n = this.safe_add(n, h),
                a = this.safe_add(a, o)
            }
            return Array(s, i, n, a)
        }
        static md5_cmn(e, t, s, i, n, a) {
            return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(t, e), this.safe_add(i, a)), n), s)
        }
        static md5_ff(e, t, s, i, n, a, r) {
            return this.md5_cmn(t & s | ~t & i, e, t, n, a, r)
        }
        static md5_gg(e, t, s, i, n, a, r) {
            return this.md5_cmn(t & i | s & ~i, e, t, n, a, r)
        }
        static md5_hh(e, t, s, i, n, a, r) {
            return this.md5_cmn(t ^ s ^ i, e, t, n, a, r)
        }
        static md5_ii(e, t, s, i, n, a, r) {
            return this.md5_cmn(s ^ (t | ~i), e, t, n, a, r)
        }
        static core_hmac_md5(e, t) {
            var s = this.str2binl(e);
            s.length > 16 && (s = this.core_md5(s, e.length * this.chrsz));
            for (var i = Array(16), n = Array(16), a = 0; a < 16; a++) i[a] = 909522486 ^ s[a],
            n[a] = 1549556828 ^ s[a];
            var r = this.core_md5(i.concat(this.str2binl(t)), 512 + t.length * this.chrsz);
            return this.core_md5(n.concat(r), 640)
        }
        static safe_add(e, t) {
            var s = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (s >> 16) << 16 | 65535 & s
        }
        static bit_rol(e, t) {
            return e << t | e >>> 32 - t
        }
        static str2binl(e) {
            for (var t = Array(), s = (1 << this.chrsz) - 1, i = 0; i < e.length * this.chrsz; i += this.chrsz) t[i >> 5] |= (e.charCodeAt(i / this.chrsz) & s) << i % 32;
            return t
        }
        static binl2str(e) {
            for (var t = "",
            s = (1 << this.chrsz) - 1, i = 0; i < 32 * e.length; i += this.chrsz) t += String.fromCharCode(e[i >> 5] >>> i % 32 & s);
            return t
        }
        static binl2hex(e) {
            for (var t = this.hexcase ? "0123456789ABCDEF": "0123456789abcdef", s = "", i = 0; i < 4 * e.length; i++) s += t.charAt(e[i >> 2] >> i % 4 * 8 + 4 & 15) + t.charAt(e[i >> 2] >> i % 4 * 8 & 15);
            return s
        }
        static binl2b64(e) {
            for (var t = "",
            s = 0; s < 4 * e.length; s += 3) for (var i = (e[s >> 2] >> s % 4 * 8 & 255) << 16 | (e[s + 1 >> 2] >> (s + 1) % 4 * 8 & 255) << 8 | e[s + 2 >> 2] >> (s + 2) % 4 * 8 & 255, n = 0; n < 4; n++) 8 * s + 6 * n > 32 * e.length ? t += this.b64pad: t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >> 6 * (3 - n) & 63);
            return t
        }
    }
    a.hexcase = 0,
    a.b64pad = "",
    a.chrsz = 8,
    t.ILaya.regClass(a),
    t.ClassUtils.regClass("fc.framework.Md5Utils", a);
    class r {
        static compareVersion(e, t) {
            e = e.split("."),
            t = t.split(".");
            for (var s = Math.max(e.length, t.length); e.length < s;) e.push("0");
            for (; t.length < s;) t.push("0");
            for (var i = 0; i < s; i++) {
                var n = parseInt(e[i]),
                a = parseInt(t[i]);
                if (n > a) return 1;
                if (n < a) return - 1
            }
            return 0
        }
        static isToday(e) {
            var t = new Date(Date.now()),
            s = new Date(e);
            return t.getFullYear() == s.getFullYear() && t.getMonth() == s.getMonth() && t.getDate() == s.getDate()
        }
        static random(e, t) {
            return Math.random() * (t - e) + e << 0
        }
        static isNumber(e) {
            return ! (!/^\d+(\.\d+)?$/.test(e) && !/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/.test(e))
        }
        static number2String(e, t) {
            var s = e.toString();
            if (s.length != t) {
                if (s.length > t) return s.substring(s.length - t);
                var i = "";
                for (let e = t - s.length; e > 0; e--) i = i.concat("0");
                return s = i.concat(s)
            }
        }
        static array2UrlStrArgs(e) {
            if (!e || 0 == e.length) return "";
            if (1 == e.length) return e[0];
            for (var t = e[0] + "=" + e[1], s = 2; s + 1 < e.length; s += 2) t += "&" + e[s] + "=" + e[s + 1];
            return t
        }
        static object2UrlStrArgs(e) {
            if (e) {
                var t = "";
                for (var s in e) e.hasOwnProperty(s) && (t += s + "=" + e[s] + "&");
                return t.substr(0, t.length - 1)
            }
            return ""
        }
        static isEmptyString(e) {
            return ! e || 0 == e.length
        }
    }
    t.ILaya.regClass(r),
    t.ClassUtils.regClass("fc.framework.MiscUtils", r);
    class c {
        static get Instance() {
            return 0 == this.sInitialized && (this.sInitialized = !0, this.sInstance = fc.adapter.Channel),
            this.sInstance
        }
        static get bannerHeight() {
            return this.sInstance && this.sInstance.bannerHeight ? this.sInstance.bannerHeight: this.sBannerHeight
        }
        static init() {
            return this.callFunc("init")
        }
        static initAdService(e) {
            return this.sShareDesc = e.shareDesc ? e.shareDesc: "",
            this.sShareTitle = e.shareTitle ? e.shareTitle: "",
            this.sShareImgUrl = e.shareImgUrl ? e.shareImgUrl: "",
            this.callFunc("initAdService", null, [e])
        }
        static pushGameData(e) {
            return this.callFunc("pushGameData", null, [e])
        }
        static login(e, t, ...s) {
            return this.callFunc("login", t, [e, t, ...s])
        }
        static loadSubpackage(e, t, s, i) {
            return this.callFunc("loadSubpackage", s, [e, t, s, i])
        }
        static navigate2Mini(e, t, s, i, n, a) {
            return this.callFunc("navigate2Mini", n, [e, t, s, i, n, a])
        }
        static showModal(e, t, s, i, n, a, r) {
            return this.callFunc("showModal", a, [e, t, s, i, n, a, r])
        }
        static shareAppMessage(e, t, s) {
            var i = e || {};
            return i.title = i.title || this.sShareTitle,
            i.imageUrl = i.imageUrl || this.sShareImgUrl,
            i.desc = i.desc || this.sShareDesc,
            this.callFunc("shareAppMessage", s, [i, t, s])
        }
        static isShareEnable() {
            return this.Instance && this.Instance.shareAppMessage
        }
        static createGameBanner(e, t) {
            return this.callFunc("createGameBanner", e, [e, t])
        }
        static showGameBanner() {
            return this.callFunc("showGameBanner")
        }
        static hideGameBanner() {
            return this.callFunc("hideGameBanner")
        }
        static destroyGameBanner() {
            return this.callFunc("destroyGameBanner")
        }
        static createBannerAd(e) {
            return this.callFunc("createBannerAd", null, [e])
        }
        static showBannerAd() {
            // return this.callFunc("showBannerAd")
        }
        static hideBannerAd() {
            // return this.callFunc("hideBannerAd")
        }
        static destroyBannerAd() {
            return this.callFunc("destroyBannerAd")
        }
        static isBannerAdValid() {
            return this.callFunc("isBannerAdValid")
        }
        static createNativeAd(e) {
            return !! p.isGMMode || this.callFunc("createNativeAd", null, [e])
        }
        static loadNativeAd(e, t) {
            if (p.isGMMode) {
                return e.runWith({
                    adList: [{
                        adId: "8b92d67f-fee3-450a-96fe-81648ae42ecb",
                        clickBtnTxt: "Click to view",
                        creativeType: 6,
                        desc: "渠道请勿使用",
                        iconUrlList: [],
                        icon: "",
                        interactionType: 1,
                        logoUrl: "",
                        title: "拼多多",
                        imgUrlList: ["http://images.pinduoduo.com/marketing_api/2020-05-17/5243f066-6924-4a2b-b8d4-d23f6a4edda7.jpg"]
                    }],
                    code: 0,
                    msg: "ok"
                }),
                !0
            }
            return this.callFunc("loadNativeAd", t, [e, t])
        }
        static destroyNativeAd() {
            return this.callFunc("destroyNativeAd")
        }
        static createCustomAd(e, t, s, i, n) {
            return !! p.isGMMode || this.callFunc("createCustomAd", null, [e, t, s, i, n])
        }
        static loadCustomAd(e, t) {
            return !! p.isGMMode || this.callFunc("loadCustomAd", t, [e, t])
        }
        static destroyCustomAd() {
            return this.callFunc("destroyCustomAd")
        }
        static reportNativeAdShow(e) {
            return this.callFunc("reportNativeAdShow", null, [e])
        }
        static reportNativeAdClick(e) {
            return this.callFunc("reportNativeAdClick", null, [e])
        }
        static playVideo(e, s, i) {
            e.run();
            return;
            return p.isGMMode ? (t.stage.event(this.EVENT_AD_VIDEO_CLOSED), e && e.run(), !0) : this.Instance && this.Instance.playVideo ? (t.stage.event(this.EVENT_AD_VIDEO_PLAY), void(0 == this.Instance.playVideo(t.Handler.create(this,
            function() {
                t.stage.event(this.EVENT_AD_VIDEO_CLOSED),
                e && e.run()
            },
            null, !1), t.Handler.create(this,
            function() {
                t.stage.event(this.EVENT_AD_VIDEO_CLOSED),
                s && s.run()
            },
            null, !1), t.Handler.create(this,
            function(e) {
                t.stage.event(this.EVENT_AD_VIDEO_CLOSED),
                i && i.runWith(e)
            },
            null, !1)) && i && t.stage.frameOnce(1, this,
            function(e) {
                e.run()
            },
            [i]))) : (t.stage.event(this.EVENT_AD_VIDEO_PLAY), e && t.stage.frameOnce(1, this,
            function(e) {
                t.stage.event(this.EVENT_AD_VIDEO_CLOSED),
                e.run()
            },
            [e]), console.warn("Channel", "playVideo is not exist"), !0)
        }
        static isVideoEnable() {
            return !! p.isGMMode || this.callFunc("isVideoEnable")
        }
        static loadInsertAd(e, t) {
            return this.callFunc("loadInsertAd", t, [e, t])
        }
        static showInsertAd(e, t) {
            return this.callFunc("showInsertAd", t, [e, t])
        }
        static isInsertAdEnable() {
            return this.callFunc("isInsertAdEnable")
        }
        static loadFullScreenAd(e, t) {
            return this.callFunc("loadFullScreenAd", e, [e, t])
        }
        static showFullScreenAd(e, t) {
            return this.callFunc("showFullScreenAd", t, [e, t])
        }
        static isFullScreenAdEnable() {
            return this.callFunc("isFullScreenAdEnable")
        }
        static isRecorderEnable() {
            return this.Instance && this.Instance.startRecorder
        }
        static startRecorder(e) {
            return this.callFunc("startRecorder", null, [e])
        }
        static stopRecorder(e) {
            return this.callFunc("stopRecorder", null, [e])
        }
        static pauseRecorder() {
            return this.callFunc("pauseRecorder")
        }
        static resumeRecorder() {
            return this.callFunc("resumeRecorder")
        }
        static canShareRecorder() {
            return this.callFunc("canShareRecorder")
        }
        static isGameBoxValid() {
            return this.callFunc("isGameBoxValid")
        }
        static showGameBox(e, t, s, i, n) {
            return this.callFunc("showGameBox", t, [e, t, s, i, n])
        }
        static hideGameBox() {
            return this.callFunc("hideGameBox")
        }
        static hasDesktopIcon(e) {
            return this.callFunc("hasDesktopIcon", null, [e])
        }
        static createDesktopIcon(e) {
            return this.callFunc("createDesktopIcon", null, [e])
        }
        static reportMonitor(e, t) {
            return this.callFunc("reportMonitor", null, [e, t])
        }
        static loadAd(e) {
            return this.callFunc("loadAd", null, [e])
        }
        static loadCfg(e) {
            return this.callFunc("loadCfg", null, [e])
        }
        static pay(e) {
            return this.callFunc("pay", null, [e])
        }
        static isRankListValid() {
            return this.callFunc("isRankListValid")
        }
        static showRankList(e) {
            return this.callFunc("showRankList", null, [e])
        }
        static updateMyRankData(e) {
            return this.callFunc("updateMyRankData", null, [e])
        }
        static exitApplication() {
            return this.callFunc("exitApplication")
        }
        static callFunc(e, s = null, i = null) {
            if (this.Instance && this.Instance[e]) {
                var n = this.Instance[e].apply(this.Instance, i);
                return ! n && s && t.stage.frameOnce(1, this,
                function(e) {
                    e.run()
                },
                [s]),
                n
            }
            return s && t.stage.frameOnce(1, this,
            function(e) {
                e.run()
            },
            [s]),
            console.warn("Channel", e, " is not exist"),
            !1
        }
    }
    c.sInstance = null,
    c.sInitialized = !1,
    c.sShareImgUrl = null,
    c.sShareTitle = "",
    c.sShareDesc = "",
    c.sBannerHeight = 228,
    c.EVENT_AD_VIDEO_PLAY = s.AD_VIDEO_PLAY,
    c.EVENT_AD_VIDEO_CLOSED = s.AD_VIDEO_CLOSED,
    t.ILaya.regClass(c),
    t.ClassUtils.regClass("fc.framework.Channel", c);
    class l {
        static get Instance() {
            return 0 == this.sInitialized && (this.sInitialized = !0, this.sInstance = fc.adapter.Joystick),
            this.sInstance
        }
        static init() {
            var e = t.Handler.create(this,
            function(e) {
                t.stage.event(s.JOYSTICK_KEY_PRESS, e)
            },
            null, !1),
            i = t.Handler.create(this,
            function(e) {
                t.stage.event(s.JOYSTICK_KEY_DOWN, e)
            },
            null, !1),
            n = t.Handler.create(this,
            function(e, i) {
                t.stage.event(s.JOYSTICK_KEY_UP, [e, i])
            },
            null, !1);
            return this.callFunc("init", [e, i, n])
        }
        static callFunc(e, t = null) {
            return this.Instance && this.Instance[e] ? this.Instance[e].apply(this.Instance, t) : (console.warn("Joystick", e, " is not exist"), !1)
        }
    }
    l.sInstance = null,
    l.sInitialized = !1;
    class h {
        static get Instance() {
            return 0 == this.sInitialized && (this.sInitialized = !0, this.sInstance = fc.adapter.Device),
            this.sInstance
        }
        static init(e, t) {
            this.Instance && this.Instance.init && this.Instance.init(e, t)
        }
        static get deviceUid() {
            return this.Instance && null != this.Instance.deviceUid ? this.Instance.deviceUid: ""
        }
        static get statusBarHeight() {
            return this.Instance && null != this.Instance.statusBarHeight ? this.Instance.statusBarHeight: 0
        }
        static get screenWidth() {
            return this.Instance && null != this.Instance.screenWidth ? this.Instance.screenWidth: t.stage.width
        }
        static get screenHeight() {
            return this.Instance && null != this.Instance.screenHeight ? this.Instance.screenHeight: t.stage.height
        }
        static get soundVolume() {
            return this.Instance && null != this.Instance.soundVolume ? this.Instance.soundVolume: t.SoundManager.soundVolume
        }
        static set soundVolume(e) {
            this.Instance && null != this.Instance.soundVolume ? this.Instance.soundVolume = e: t.SoundManager.soundVolume = e
        }
        static get soundMuted() {
            return this.Instance && null != this.Instance.soundMuted ? this.Instance.soundMuted: t.SoundManager.soundMuted
        }
        static set soundMuted(e) {
            this.Instance && null != this.Instance.soundMuted ? this.Instance.soundMuted = e: t.SoundManager.soundMuted = e
        }
        static get musicVolume() {
            return this.Instance && null != this.Instance.musicVolume ? this.Instance.musicVolume: t.SoundManager.musicVolume
        }
        static set musicVolume(e) {
            this.Instance && null != this.Instance.musicVolume ? this.Instance.musicVolume = e: t.SoundManager.musicVolume = e
        }
        static get musicMuted() {
            return this.Instance && null != this.Instance.musicMuted ? this.Instance.musicMuted: t.SoundManager.musicMuted
        }
        static set musicMuted(e) {
            this.Instance && null != this.Instance.musicMuted ? this.Instance.musicMuted = e: t.SoundManager.musicMuted = e
        }
        static playSound(e, s, i) {
            this.Instance && this.Instance.playSound ? this.Instance.playSound(e, s, i) : t.SoundManager.playSound(e, s ? 0 : 1, i)
        }
        static stopSound(e) {
            this.Instance && this.Instance.stopSound ? this.Instance.stopSound(e) : t.SoundManager.stopSound(e)
        }
        static playMusic(e) {
            this.Instance && this.Instance.playMusic ? this.Instance.playMusic(e) : t.SoundManager.playMusic(e, 0)
        }
        static stopMusic(e) {
            null != e && (this.Instance && this.Instance.stopMusic ? this.Instance.stopMusic(e) : t.SoundManager.stopMusic(e))
        }
        static stopAll() {
            this.stopMusic(),
            this.stopAllSound()
        }
        static stopAllSound() {
            this.Instance && this.Instance.stopAllSound ? this.Instance.stopAllSound() : t.SoundManager.stopAllSound()
        }
        static vibrateShort() {
            1 == fc.framework.GameFrame.playerInfo.vibrate && (Date.now() - this.sShortVibrateTime < 100 || (this.sShortVibrateTime = Date.now(), this.Instance && this.Instance.vibrateShort ? this.Instance.vibrateShort() : "undefined" != typeof navigator && "vibrate" in navigator ? navigator.vibrate(500) : (console.log("vibrateShort"), console.warn("Device", "vibrateShort is not exist"))))
        }
        static vibrateLong() {
            1 == fc.framework.GameFrame.playerInfo.vibrate && (this.Instance && this.Instance.vibrateLong ? this.Instance.vibrateLong() : "undefined" != typeof navigator && "vibrate" in navigator ? navigator.vibrate(1e3) : (console.log("vibrateLong"), console.warn("Device", "vibrateLong is not exist")))
        }
        static isNetValid() {
            return this.Instance && this.Instance.isNetValid ? this.Instance.isNetValid() : navigator.onLine
        }
    }
    h.sShortVibrateTime = 0,
    h.sInstance = null,
    h.sInitialized = !1,
    t.ILaya.regClass(h),
    t.ClassUtils.regClass("fc.framework.Device", h);
    class o {
        static get IsBgmPlaying() {
            return this.sIsBgmPlaying
        }
        static get soundVolume() {
            return h.soundVolume
        }
        static set soundVolume(e) {
            h.soundVolume = e
        }
        static get soundMuted() {
            return h.soundMuted
        }
        static set soundMuted(e) {
            h.soundMuted = e
        }
        static get musicVolume() {
            return h.musicVolume
        }
        static set musicVolume(e) {
            h.musicVolume = e
        }
        static get musicMuted() {
            return h.musicMuted
        }
        static set musicMuted(e) {
            h.musicMuted = e
        }
        static playMusic(e) {
            null != e && 1 == fc.framework.GameFrame.playerInfo.music && (this.sCurMusicUrl == e && 0 != this.sIsBgmPlaying || (this.sCurMusicUrl != e && null != this.sCurMusicUrl && h.stopMusic(this.sCurMusicUrl), this.sCurMusicUrl = e, this.sIsBgmPlaying = !0, h.playMusic(this.sCurMusicUrl)))
        }
        static stopMusic() {
            h.stopMusic(this.sCurMusicUrl),
            this.sIsBgmPlaying = !1
        }
        static playSound(e, s) {
            1 == fc.framework.GameFrame.playerInfo.sound && (s && -1 != this.sLoopSounds.indexOf(e) || (s ? (this.sLoopSounds.push(e), h.playSound(e, !1, t.Handler.create(this, this.onSoundCompleted, [e]))) : h.playSound(e, !1, null)))
        }
        static stopSound(e) {
            var t = this.sLoopSounds.indexOf(e); - 1 != t && this.sLoopSounds.splice(t, 1),
            h.stopSound(e)
        }
        static onSoundCompleted(e) { - 1 != this.sLoopSounds.indexOf(e) && h.playSound(e, 1, t.Handler.create(this, this.onSoundCompleted, [e]))
        }
        static stopAll() {
            this.stopMusic(),
            this.stopAllSound()
        }
        static stopAllSound() {
            h.stopAllSound(),
            this.sLoopSounds.splice(0)
        }
    }
    o.sCurMusicUrl = null,
    o.sIsBgmPlaying = !1,
    o.sLoopSounds = [],
    t.ILaya.regClass(o),
    t.ClassUtils.regClass("fc.framework.Audio", o);
    var d = class {
        static loadSubpackageAsyn(e, t, s, i) {
            c.loadSubpackage(e, t, s, i)
        }
        static loadFontAsyn(e, t, s) {
            e && e.loadFont(t, s)
        }
        static loadResAsyn(e, s, i) {
            t.loader.load(e, s, i)
        }
        static createResAsyn(e, s, i) {
            t.loader.create(e, s, i)
        }
    };
    class g {
        static registerSubPkg(e, t) {
            this.subPkgMap[e] = t
        }
        static get3dResUrl(e, t) {
            return t && this.subPkgMap[t] ? this.subPkgMap[t] + e: this.threeDResRootPath + e
        }
        static get3dPrefabUrl(e, t) {
            return t && this.subPkgMap[t] ? this.subPkgMap[t] + e + ".lh": this.threeDResRootPath + e + ".lh"
        }
        static get3dSceneUrl(e, t) {
            return t && this.subPkgMap[t] ? this.subPkgMap[t] + e + ".ls": this.threeDResRootPath + e + ".ls"
        }
        static get curScene3dUrl() {
            return this.curScene3d ? this.curScene3d.fc_res_url: null
        }
        static loadSubpackage(e, s, i) {
            d.loadSubpackageAsyn(e, i, s, t.Handler.create(this,
            function() {
                console.error("subPkgError:", e),
                s && s.run()
            }))
        }
        static loadFont(e, s, i) {
            var n = new t.BitmapFont;
            e instanceof Array ? d.loadFontAsyn(n, `font / ${
                e[0]
            }.fnt`, t.Handler.create(this, this.onFontReady, [n, e[0], e, s, i])) : d.loadFontAsyn(n, `font / ${
                e
            }.fnt`, t.Handler.create(this, this.onFontReady, [n, e, [], s, i]))
        }
        static onFontReady(e, s, i, n, a) {
            if (t.Text.registerBitmapFont(s, e), 0 == i.length) n && n.run(),
            a && a.runWith(1);
            else {
                var r = i.indexOf(s) + 1;
                r == i.length ? (n && n.run(), a && a.runWith(1)) : (d.loadFontAsyn(e, `font / ${
                    s[r]
                }.fnt`, t.Handler.create(this, this.onFontReady, [e, s[r], s, n, a])), a && a.runWith(r / i.length))
            }
        }
        static loadRes(e) {
            return t.loader.getRes(e)
        }
        static loadResAsyn(e, s, i, n) {
            if (n && !(this.loadedPkg.indexOf(n) >= 0)) return null == this.loadingPkg[n] ? (this.loadingPkg[n] = [{
                cb: s,
                step: i,
                res: e,
                type: "load"
            }], void d.loadSubpackageAsyn(n, null, t.Handler.create(this, this.onSubPkgReady, [n]), t.Handler.create(this, this.onSubPkgError, [n]))) : void this.loadingPkg[n].push({
                cb: s,
                step: i,
                res: e
            });
            d.loadResAsyn(e, s, i)
        }
        static load3dRes(e) {
            return t.loader.getRes(e)
        }
        static load3dResAsyn(e, s, i, n) {
            if (n && !(this.loadedPkg.indexOf(n) >= 0)) return null == this.loadingPkg[n] ? (this.loadingPkg[n] = [{
                cb: s,
                step: i,
                res: e,
                type: "create"
            }], void d.loadSubpackageAsyn(n, null, t.Handler.create(this, this.onSubPkgReady, [n]), t.Handler.create(this, this.onSubPkgError, [n]))) : void this.loadingPkg[n].push({
                cb: s,
                step: i,
                res: e
            });
            d.createResAsyn(e, s, i)
        }
        static loadSprite3d(e, t) {
            return this.load3dRes(this.get3dPrefabUrl(e, t))
        }
        static loadSprite3dAsyn(e, t, s, i) {
            if (e instanceof Array) {
                var n = [];
                for (let t = 0; t < e.length; t++) n.push(this.get3dPrefabUrl(e[t], i));
                this.load3dResAsyn(n, t, s, i)
            } else {
                var a = this.get3dPrefabUrl(e, i);
                this.load3dResAsyn(a, t, s, i)
            }
        }
        static loadScene3d(e, s) {
            var i = this.curScene3d;
            this.curScene3d = null;
            var n = null != i ? i.fc_scene_url: null;
            return i && (i.removeSelf(), i.destroy(), i = null),
            this.curScene3d = t.loader.getRes(this.get3dSceneUrl(e, s)),
            this.curScene3d && (this.curScene3d.fc_scene_url = e),
            n && this.unloadSceneRes(n),
            this.curScene3d
        }
        static loadScene3dAsyn(e, s, i, n) {
            if (n && !(this.loadedPkg.indexOf(n) >= 0)) return d.loadSubpackageAsyn(n, null, t.Handler.create(this,
            function() {
                this.initScene3d(e, s, i, n)
            }), t.Handler.create(this,
            function() {
                console.error("subPkgError:", n),
                console.error("loadSceneError:", e),
                this.initScene3d(e, s, i, n)
            })),
            null;
            this.initScene3d(e, s, i, n)
        }
        static initScene3d(e, s, i, n) {
            this.curDownloadSceneUrl != e && t.loader.cancelLoadByUrl(this.curDownloadSceneUrl),
            this.curDownloadSceneUrl = null;
            var a = this.curScene3d;
            this.curScene3d = null;
            var r = null != a ? a.fc_scene_url: null;
            a && (a.removeSelf(), a.destroy(), a = null, t.loader.clearRes(r));
            var c = this.get3dSceneUrl(e, n);
            if (this.curScene3d = t.loader.getRes(c), this.curScene3d) return this.curScene3d.fc_scene_url = e,
            r && this.unloadSceneRes(r),
            i && i.runWith(1),
            s && s.runWith(this.curScene3d),
            this.curScene3d;
            console.log("sceneUrl:" + c),
            this.curDownloadSceneUrl = c,
            d.createResAsyn(c, t.Handler.create(null,
            function(t) {
                g.curDownloadSceneUrl = null,
                g.curScene3d = t,
                g.curScene3d && (g.curScene3d.fc_scene_url = e),
                r && g.unloadSceneRes(r),
                s && s.runWith(g.curScene3d)
            }), i)
        }
        static unloadSceneRes(e, s) {
            t.loader.load(this.get3dResUrl(e + ".json", s), t.Handler.create(this, this.destroyScene3dRes, [e + ".json", s]))
        }
        static printSceneDependences(e, s) {
            t.loader.load(this.get3dResUrl(e + ".json", s), t.Handler.create(this, this.printScene3dRes, [e + ".json", s]))
        }
        static printScene3dRes(e, s) {
            var i = t.loader.getRes(this.get3dResUrl(e, s));
            if (null != i) for (var n = {},
            a = i.length - 1; a > -1; a--) {
                var r = this.get3dResUrl(i[a], s),
                c = t.loader.getRes(r);
                null == c || (n[r] = c.referenceCount)
            }
        }
        static destroyScene3dRes(e, s) {
            var i = t.loader.getRes(this.get3dResUrl(e, s));
            if (null != i) for (var n = i.length - 1; n > -1; n--) {
                var a = this.get3dResUrl(i[n], s),
                r = t.loader.getRes(a);
                null == r || r.referenceCount > 0 || (r.destroy(), t.loader.clearRes(a))
            }
        }
        static onSubPkgReady(e) {
            console.log("onSubPkgReady:", e),
            this.loadedPkg.push(e);
            var t = this.loadingPkg[e];
            if (this.loadingPkg[e] = null, null != t) for (let e = 0; e < t.length; e++) {
                const s = t[e];
                "load" == s.type ? d.loadResAsyn(s.res, s.cb, s.step) : d.createResAsyn(s.res, s.cb, s.step)
            }
        }
        static onSubPkgError(e) {
            console.error("subPkgError:", e),
            this.loadedPkg.push(e);
            var t = this.loadingPkg[e];
            if (this.loadingPkg[e] = null, null != t) for (let e = 0; e < t.length; e++) {
                const s = t[e];
                "load" == s.type ? d.loadResAsyn(s.res, s.cb, s.step) : d.createResAsyn(s.res, s.cb, s.step)
            }
        }
    }
    g.curScene3d = null,
    g.curDownloadSceneUrl = null,
    g.threeDResRootPath = "3dres/Conventional/",
    g.loadedPkg = [],
    g.loadingPkg = {},
    g.subPkgMap = {},
    t.ILaya.regClass(g),
    t.ClassUtils.regClass("fc.framework.Resource", g);
    class u {
        static init(e, s) {
            this.viewCfg = e,
            this.sceneCfg = s,
            t.timer.loop(1e3, this, this.onTostMsgLoop)
        }
        static registerView(e, t) {
            this.viewCfg || (this.viewCfg = {}),
            this.viewCfg[e] = t
        }
        static registerScene(e, t, s) {
            this.sceneCfg || (this.sceneCfg = {}),
            this.sceneCfg[e] = {
                type: s,
                array: t
            }
        }
        static isSceneEmpty() {
            return 0 == this.sequence.length && 0 == this.openedList.length
        }
        static unloadScene() {
            this.sequence.splice(0),
            this.syncList.splice(0),
            this.taskList.splice(0);
            for (var e = Object.keys(this.viewCfg), s = 0; s < e.length; s++) this.closeView(e[s]);
            null != this.sceneId && t.timer.callLater(this, this.broadcastUnloadScene, [this.sceneId, null]),
            this.sceneId = null
        }
        static loadScene(e, s, i) {
            console.log("loadScene:" + e),
            this.sceneId = null,
            this.sequence.splice(0),
            this.syncList.splice(0),
            this.taskList.splice(0);
            for (var n = Object.keys(this.viewCfg), a = 0; a < n.length; a++) this.closeView(n[a]);
            if (this.sceneId = e, this.sceneData = s, this.sceneCb = i, null != this.sceneCfg) {
                var r = this.sceneCfg[e];
                if (null == r) return console.warn("[ViewManager]loadScene:", "sceneId is undefine,", e),
                void t.timer.callLater(this, this.broadcastUnloadScene, [e, i]);
                if (!r.array || 0 == r.array.length) return console.warn("[ViewManager]loadScene:", "array is invalid"),
                void t.timer.callLater(this, this.broadcastUnloadScene, [e, i]);
                if ("sequence" == r.type) {
                    for (let e = 0; e < r.array.length; e++) {
                        const t = r.array[e];
                        t.checkCode && this.checkFun && !this.checkFun(t.checkCode) || this.sequence.push(t)
                    }
                    if (0 == this.sequence.length) return console.warn("[ViewManager]loadScene:", "no valid view"),
                    void t.timer.callLater(this, this.broadcastUnloadScene, [e, i]);
                    this.openView(this.sequence[0].viewId, this.sceneData, null)
                } else {
                    for (let e = 0; e < r.array.length; e++) {
                        const t = r.array[e];
                        t.checkCode && this.checkFun && !this.checkFun(t.checkCode) || this.syncList.push(t)
                    }
                    if (0 == this.syncList.length) return console.warn("[ViewManager]loadScene:", "no valid view"),
                    void t.timer.callLater(this, this.broadcastUnloadScene, [e, i]);
                    this.openView(this.syncList[0].viewId, this.sceneData, null)
                }
                console.log("loadScene over")
            } else console.warn("[ViewManager]loadScene:", "sceneCfg is undefine")
        }
        static openView(e, s, i) {
            if (null != this.viewCfg) {
                var n = this.viewCfg[e];
                if (null == n) return console.warn("[ViewManager]openView:", "invalid param, ", e),
                void(i && i.runWith([null, e]));
                if (s = s || {},
                n.status) return console.warn("[ViewManager]openView:", "view has opened", e),
                void(i && i.runWith([null, e]));
                var a = !1;
                if (0 != this.sequence.length) for (let t = 0; t < this.sequence.length; t++) {
                    if (this.sequence[t].viewId == e && 0 != t) return console.warn("[ViewManager]openView:", "view has in sequence", e),
                    void(i && i.runWith([null, e]));
                    a = !0
                }
                if (0 != this.syncList.length) for (let t = 0; t < this.syncList.length; t++) {
                    if (this.syncList[t].viewId == e && 0 != t) return console.warn("[ViewManager]openView:", "view has in sync list", e),
                    void(i && i.runWith([null, e]));
                    a = !0
                }
                if (a || 0 == this.taskList.length) n.status = 1,
                t.Scene.open(n.url, !1, s, t.Handler.create(this, this.onViewLoaded, [e, s, i]));
                else {
                    for (let t = 0; t < this.taskList.length; t++) {
                        if (this.taskList[t].viewId == e) return console.warn("[ViewManager]openView:", "view has in task list", e),
                        void(i && i.runWith([null, e]))
                    }
                    this.taskList.push({
                        viewId: e,
                        data: s,
                        callback: i
                    })
                }
            } else console.warn("[ViewManager]openView:", "viewCfg is undefine")
        }
        static onViewLoaded(e, i, n, a) {
            if (a && (a.viewId = e), 1 != this.viewCfg[e].status) return a.visible = !1,
            this.viewCfg[e].status = 0,
            t.Scene.close(this.viewCfg[e].url),
            void(n && n.runWith([null, e]));
            if (this.viewCfg[e].script) {
                var r = t.ClassUtils.getClass(this.viewCfg[e].script);
                if (null == r) console.warn("invalid scriptType:" + this.viewCfg[e].script);
                else {
                    var c = a.getComponent(r);
                    null == c && (c = a.addComponent(r))
                }
            }
            for (var l = a.getComponents(t.Script), h = 0; l && h < l.length; h++) l[h].initView && l[h].initView(i),
            l[h].viewId = e;
            this.viewCfg[e].view = a,
            this.viewCfg[e].status = 2,
            this.openedList.push(e),
            n && n.runWith([a, e]);
            var o = this.viewCfg[e].url;
            if (o = o.substring(o.lastIndexOf("/") + 1, o.lastIndexOf(".")), t.stage.frameOnce(1, this,
            function(e, i, n) {
                t.stage.event(s.UI_VIEW_OPENED, [e, i, n])
            },
            [o, e, a], !1), 1 == this.sequence.length && this.sequence[0].viewId == e && (this.sceneCb && this.sceneCb.run(), t.stage.event(s.UI_SCENE_LOADED, this.sceneId)), null != i.zOrder ? a.zOrder = i.zOrder: a.zOrder = this.openedList.length, this.syncList.length > 0) {
                var d = this.syncList.shift();
                null != d.zOrder && (a.zOrder = d.zOrder),
                this.syncList.length > 0 ? this.syncList[0].delay ? t.stage.timerOnce(this.syncList[0].delay, this, this.openView, [this.syncList[0].viewId, this.sceneData, null], !1) : this.openView(this.syncList[0].viewId, this.sceneData, null) : (this.sceneCb && this.sceneCb.run(), t.stage.event(s.UI_SCENE_LOADED, this.sceneId))
            } else if (this.taskList.length > 0) {
                var g = this.taskList.shift();
                this.openView(g.viewId, g.data, g.callback)
            }
        }
        static closeView(e) {
            var i = "";
            if ("string" == typeof e) {
                if (i = e, null == this.viewCfg[i]) return;
                if (!this.viewCfg[i].status) return;
                if (1 == this.viewCfg[i].status) return void(this.viewCfg[i].status = 0)
            } else {
                if (! (e instanceof t.View)) return void console.warn("[ViewManager]closeView:", "Invalid param");
                for (var n = Object.keys(this.viewCfg), a = 0; a < n.length; a++) {
                    const t = n[a];
                    if (this.viewCfg[t] && this.viewCfg[t].view == e) {
                        i = t;
                        break
                    }
                }
                if ("" == i) {
                    var r = e.url,
                    c = r.substring(r.lastIndexOf("/") + 1, r.lastIndexOf("."));
                    return void console.warn("[ViewManager]closeView:", "view has closed, ", c)
                }
            }
            this.viewCfg[i].view = null,
            this.viewCfg[i].status = 0,
            t.Scene.close(this.viewCfg[i].url);
            var l = this.openedList.indexOf(i);
            l >= 0 && this.openedList.splice(l, 1);
            var h = this.viewCfg[i].url;
            h = h.substring(h.lastIndexOf("/") + 1, h.lastIndexOf(".")),
            t.stage.frameOnce(1, this,
            function(e, i) {
                t.stage.event(s.UI_VIEW_CLOSED, [e, i])
            },
            [h, i], !1),
            this.sequence.length > 0 && this.sequence[0].viewId == i && (this.sequence.shift(), this.sequence.length > 0 && this.openView(this.sequence[0].viewId, this.sceneData, null)),
            0 == this.sequence.length && 0 == this.syncList.length && 0 == this.openedList.length && null != this.sceneId && (t.timer.callLater(this, this.broadcastUnloadScene, [this.sceneId, null]), this.sceneId = null)
        }
        static broadcastUnloadScene(e, i) {
            console.log(e),
            t.stage.frameOnce(1, this,
            function(e, i) {
                i && i.run(),
                t.stage.event(s.UI_SCENE_UNLOADED, e)
            },
            [e, i])
        }
        static hideViews() {}
        static showViews() {}
        static showToastMsg(e) {
            this.toastList.push(e),
            this.toastList.length > 10 && this.toastList.shift(),
            null == this.toastMsg && (this.toastMsg = 1, t.loader.create("fc-layout/prefab/toastMsg.prefab", t.Handler.create(this, this.onToastPrefabReady), null, t.Loader.PREFAB))
        }
        static onToastPrefabReady(e) {
            this.toastMsg = e,
            this.toastCompleted = !0
        }
        static onTostMsgLoop() {
            if (this.toastCompleted) for (let t = 0; t < 10 && this.toastList.length > 0; t++) {
                var e = this.toastList.shift();
                this.popToast(e, 1e3 * t)
            }
        }
        static popToast(e, s) {
            var i = t.Pool.getItemByCreateFun("frameTip", this.toastMsg.create, this.toastMsg);
            t.stage.addChild(i);
            var n = i.getChildByName("msg");
            n.text = e,
            i.getChildByName("bg").height = n.height,
            i.visible = !0,
            i.bottom = 0,
            i.centerX = 0,
            t.Tween.to(i, {
                bottom: .35 * t.stage.height
            },
            500, t.Ease.elasticOut, t.Handler.create(this, this.onTipTweenCompleted, [i]), s, !1, !0)
        }
        static onTipTweenCompleted(e) {
            t.stage.timerOnce(1e3, this, e =>{
                e.visible = !1,
                e.removeSelf(),
                t.Pool.recover("frameTip", e)
            },
            [e])
        }
        static showMessageBox(e, s) {
            this.messageList.push({
                message: e,
                confirm: s
            }),
            null == this.messageBox ? (this.messageBox = 1, t.loader.create("fc-layout/prefab/msgBox.json", t.Handler.create(this, this.onMessagePrefabReady), null, t.Loader.PREFAB)) : 1 == this.messageList.length && this.messageCompleted && this.popMessageBox()
        }
        static onMessagePrefabReady(e) {
            this.messageBox = t.stage.addChild(e.create()),
            this.messageBox.getChildByName("msgDialog").getChildByName("confirmBtn").clickHandler = t.Handler.create(this, this.onMsgBoxConfirm, null, !1),
            this.popMessageBox()
        }
        static popMessageBox() {
            if (0 != this.messageList.length) {
                this.messageCompleted = !1,
                this.messageData = this.messageList.shift();
                var e = this.messageBox.getChildByName("msgDialog");
                this.messageBox.visible = !0,
                this.messageBox.centerY = 0,
                this.messageBox.centerX = 0,
                e.getChildByName("content").text = this.messageData.message,
                this.messageBox.zOrder = 100,
                e.scaleX = .1,
                e.scaleY = .1;
                var s = this.messageBox.getChildByName("bg");
                s.width = t.stage.width,
                s.height = t.stage.height,
                t.Tween.to(e, {
                    scaleX: 1,
                    scaleY: 1
                },
                500, null)
            } else this.messageBox.visible = !1
        }
        static onMsgBoxConfirm() {
            this.messageData.confirm && this.messageData.confirm.run(),
            this.messageData = null;
            var e = this.messageBox.getChildByName("msgDialog");
            t.Tween.to(e, {
                scaleX: .1,
                scaleY: .1
            },
            500, null, t.Handler.create(this,
            function() {
                this.messageCompleted = !0,
                this.messageBox.visible = !1,
                t.timer.once(500, this, this.popMessageBox)
            }))
        }
    }
    u.viewCfg = {},
    u.sceneCfg = {},
    u.syncList = [],
    u.sequence = [],
    u.taskList = [],
    u.openedList = [],
    u.sceneId = null,
    u.sceneData = null,
    u.sceneCb = null,
    u.checkFun = null,
    u.toastList = [],
    u.toastMsg = null,
    u.toastCompleted = !1,
    u.messageList = [],
    u.messageBox = null,
    u.messageCompleted = !1,
    u.messageData = null;
    class f {
        static get appCfgUrl() {
            return this.sAppCfgUrl
        }
        static set appCfgUrl(e) {
            e && (this.sAppCfgUrl = e)
        }
        static loadAppCfg(e) {
            console.log("loadAppCfg:" + this.appCfgUrl),
            g.loadResAsyn(this.sAppCfgUrl, t.Handler.create(this, this.onAppCfgLoaded, [e]))
        }
        static onAppCfgLoaded(e, t) {
            console.log("onAppCfgLoaded", t),
            this.startUpCfg = t.startUpCfg,
            this.startUpCfg.bgm = t.appInfo.bgm,
            this.startUpCfg.default3dScene = t.appInfo.default3dScene,
            this.startUpCfg.subPkgCfg = t.subPkgCfg,
            e && e.runWith(t)
        }
        static loadAppRes(e) {
            if (console.log("loadAppRes"), this.onAppResReady = e, null != this.startUpCfg.subPkgCfg) for (let e = 0; e < this.startUpCfg.subPkgCfg.length; e++) {
                const t = this.startUpCfg.subPkgCfg[e];
                g.registerSubPkg(t.pkgName, t.pkgPath)
            }
            t.stage.event(s.LOADING_PROGRESS, (n.LOAD_SUBPACKAGE + 1) / n.TOTAL_STEPS);
            for (var i = [], a = 0; a < this.startUpCfg.subpackage.length; a++) i.push(this.startUpCfg.subpackage[a]);
            console.log("loadSubpackage"),
            this.loadSubpackage(i)
        }
        static loadSubpackage(e) {
            if (e && e.length > 0) {
                var s = e.pop();
                g.loadSubpackage(s, t.Handler.create(this, this.loadSubpackage, [e]))
            } else this.loadBaseConfig()
        }
        static loadBaseConfig() {
            console.log("loadBaseConfig"),
            t.stage.event(s.LOADING_PROGRESS, (n.LOAD_CONFIG + 1) / n.TOTAL_STEPS),
            this.startUpCfg.configList = this.startUpCfg.configList ? this.startUpCfg.configList: [],
            this.startUpCfg.pluginCfg && this.startUpCfg.configList.push(this.startUpCfg.pluginCfg),
            this.startUpCfg.languageCfg && this.startUpCfg.configList.push(this.startUpCfg.languageCfg),
            0 == this.startUpCfg.configList.length ? this.loadBaseRes() : g.loadResAsyn(this.startUpCfg.configList, t.Handler.create(this, this.loadBaseRes))
        }
        static loadBaseRes() {
            if (console.log("loadBaseRes"), t.stage.event(s.LOADING_PROGRESS, (n.LOAD_3DRES + 1) / n.TOTAL_STEPS), this.startUpCfg.bgm && (console.log("loadMusic", this.startUpCfg.bgm), o.playMusic(this.startUpCfg.bgm)), this.startUpCfg.fontList && this.startUpCfg.fontList.length > 0 && (console.log("loadFont"), g.loadFont(this.startUpCfg.fontList)), null == this.startUpCfg.baseResList || 0 == this.startUpCfg.baseResList.length) this.loadScene3d();
            else {
                for (var e = [], i = 0; i < this.startUpCfg.baseResList.length; i++) {
                    2 == (a = this.startUpCfg.baseResList[i].split(",")).length ? e.push(g.get3dResUrl(a[1], a[0])) : e.push(g.get3dResUrl(a[0]))
                }
                var a;
                2 == (a = this.startUpCfg.baseResList.shift().split(",")).length ? g.load3dResAsyn(g.get3dResUrl(a[1], a[0]), t.Handler.create(this, this.onBaseResReady), null, a[0]) : g.load3dResAsyn(g.get3dResUrl(a[0]), t.Handler.create(this, this.onBaseResReady))
            }
        }
        static onBaseResReady() {
            if (console.log("onBaseResReady"), 0 == this.startUpCfg.baseResList.length) this.loadScene3d();
            else {
                var e = this.startUpCfg.baseResList.shift().split(",");
                2 == e.length ? g.load3dResAsyn(g.get3dResUrl(e[1], e[0]), t.Handler.create(this, this.onBaseResReady), null, e[0]) : g.load3dResAsyn(g.get3dResUrl(e[0]), t.Handler.create(this, this.onBaseResReady))
            }
        }
        static loadScene3d() {
            if (console.log("loadScene3d"), t.stage.event(s.LOADING_PROGRESS, (n.LOAD_3DSCENE + 1) / n.TOTAL_STEPS), null != this.startUpCfg.default3dScene && 0 != this.startUpCfg.default3dScene.length) {
                var e = this.startUpCfg.default3dScene.split(",");
                1 == e.length ? g.loadScene3dAsyn(this.startUpCfg.default3dScene, t.Handler.create(this, this.onLaunchResReady)) : g.loadScene3dAsyn(e[1], t.Handler.create(this, this.onLaunchResReady), null, e[0])
            } else this.onLaunchResReady(null)
        }
        static onLaunchResReady(e) {
            console.log("onLaunchResReady"),
            o.stopMusic(),
            this.onAppResReady && this.onAppResReady.runWith(e)
        }
    }
    f.sAppCfgUrl = "config/appConfig.json",
    f.onAppCfgReady = null,
    f.onAppResReady = null;
    class p {
        static startUp(e, i, n, a, r) {
            this.channelTag = i,
            (t.Browser.onIOS || t.Browser.onIPad || t.Browser.onIPhone) && t.Browser.onWeiXin,
            t.stage.on(s.APP_SHOW, this, this.onGameShow),
            t.stage.on(s.APP_HIDE, this, this.onGameHide),
            t.stage.on(s.UI_SCENE_UNLOADED, this, this.onSceneUnloaded),
            this.viewCfg = n,
            this.sceneCfg = a,
            this.playerInfo = r || {},
            h.init(t.Handler.create(this, this.onGameShow, null, !1), t.Handler.create(this, this.onGameHide, null, !1)),
            c.init(),
            f.appCfgUrl = e,
            f.loadAppCfg(t.Handler.create(this, this.onAppCfgReady))
        }
        static onGameShow(e) {
            t.stage.renderingEnabled = !0,
            this.appInfo && this.appInfo.bgm && !o.IsBgmPlaying && p.gameSceneId == fc.define.SceneId.Game && o.playMusic(this.appInfo.bgm),
            this.resume(),
            console.log("onGameShow"),
            t.stage.event(s.DEVICE_SHOW, e)
        }
        static onGameHide() {
            this.pause(),
            t.stage.renderingEnabled = !1,
            o.stopAll(),
            console.log("onGameHide"),
            t.stage.event(s.DEVICE_HIDE)
        }
        static onSceneUnloaded(e) {
            e == this.curSceneId && this.curSceneId != this.nextSceneId && (this.curSceneId = this.nextSceneId, u.loadScene(this.nextSceneId, this.sceneData), this.sceneEvent && t.stage.event(this.sceneEvent, this.sceneData), this.curSceneId == i.ShowFailed ? this.reportFailed(this.sceneData) : this.curSceneId == i.ShowSuccess ? this.reportSuccess(this.sceneData) : this.curSceneId == i.Over ? this.go2Home() : this.curSceneId == i.Home && this.resume())
        }
        static onAppCfgReady(e) {
            if (console.log("onAppCfgReady"), this.appInfo = e.appInfo, this.startUpCfg = e.startUpCfg, this.gameCfg = e.gameCfg, this.goodsCfg = e.goodsCfg, this.startUpCfg.logoPage && (this.viewCfg.Logo = this.startUpCfg.logoPage), e.playerCfg) for (var n = Object.keys(e.playerCfg), a = 0; a < n.length; a++) this.playerInfo[n[a]] = e.playerCfg[n[a]];
            if (this.loadPlayerInfo(), e.viewCfg) for (n = Object.keys(e.viewCfg), a = 0; a < n.length; a++) this.viewCfg[n[a]] = e.viewCfg[n[a]],
            p.registerView(n[a], e.viewCfg[n[a]]);
            if (e.sceneCfg) for (n = Object.keys(e.sceneCfg), a = 0; a < n.length; a++) {
                const t = e.sceneCfg[n[a]];
                this.sceneCfg[n[a]] = t,
                p.registerScene(n[a], t.array, t.type)
            }
            console.log("openLoading"),
            u.init(this.viewCfg, this.sceneCfg),
            t.stage.once(s.UI_VIEW_OPENED, this, this.onLoadingOpened),
            u.loadScene(i.Loading, null, null)
        }
        static onLoadingOpened() {
            t.stage.off(s.UI_VIEW_OPENED, this, this.onLoadingOpened),
            f.loadAppRes(t.Handler.create(this, this.onAppResReady))
        }
        static onAppResReady(e) {
            if (e && (this.scene3d = t.stage.addChildAt(e, 0)), this.startUpCfg.languageCfg && (this.langCfg = t.loader.getRes(this.startUpCfg.languageCfg)), this.startUpCfg.pluginCfg) {
                if (this.pluginCfg = t.loader.getRes(this.startUpCfg.pluginCfg), this.pluginCfg.viewCfg) for (var i = Object.keys(this.pluginCfg.viewCfg), n = 0; n < i.length; n++) this.viewCfg[i[n]] = this.pluginCfg.viewCfg[i[n]],
                p.registerView(i[n], this.pluginCfg.viewCfg[i[n]]);
                if (this.pluginCfg.sceneCfg) for (i = Object.keys(this.pluginCfg.sceneCfg), n = 0; n < i.length; n++) {
                    const e = this.pluginCfg.sceneCfg[i[n]];
                    this.sceneCfg[i[n]] = e,
                    p.registerScene(i[n], e.array, e.type)
                }
                if (this.pluginCfg.gameCfg) for (i = Object.keys(this.pluginCfg.gameCfg), n = 0; n < i.length; n++) this.gameCfg[i[n]] = this.pluginCfg.gameCfg[i[n]];
                if (this.pluginCfg.goodsCfg && (this.goodsCfg = this.pluginCfg.goodsCfg), this.pluginCfg.playerCfg) {
                    for (i = Object.keys(this.pluginCfg.playerCfg), n = 0; n < i.length; n++) null == this.playerInfo[i[n]] && (this.playerInfo[i[n]] = this.pluginCfg.playerCfg[i[n]]);
                    if (this.pluginCfg.playerCfg.goodsInUse) for (n = this.playerInfo.goodsInUse.length; n < this.pluginCfg.playerCfg.goodsInUse.length; n++) this.playerInfo.goodsInUse.push(config.playerCfg.goodsInUse[n]);
                    if (this.pluginCfg.playerCfg.goodsInBag) for (n = this.playerInfo.goodsInBag.length; n < this.pluginCfg.playerCfg.goodsInBag.length; n++) this.playerInfo.goodsInBag.push(config.playerCfg.goodsInBag[n])
                }
            }
            this.resLoaded = !0,
            "hw" != fc.platform.PlatformConfig.platformTag && t.stage.event(s.LAUNCH_COMPLETED)
        }
        static get gameSceneId() {
            return this.curSceneId
        }
        static get isGamePaused() {
            return ! this.isRunning
        }
        static pause() {
            this.isRunning = !1,
            t.stage.event(s.GAME_SLEEP)
        }
        static resume() {
            this.isRunning = !0,
            t.stage.event(s.GAME_WAKEUP)
        }
        static go2Scene(e) {
            this.isRelive = !!e.isRelive,
            this.isRestart = !!e.isRestart,
            this.sceneData = e.sceneData,
            this.sceneEvent = e.sceneEvent,
            this.nextSceneId = e.nextSceneId,
            null != e.relivedTime && (this.relivedTime = e.relivedTime)
        }
        static finishLoading() {
            this.go2Home(),
            t.stage.event(s.UI_LOADING_COMPLETED)
        }
        static go2Home(e) {
            this.go2Scene({
                isRelive: !1,
                isRestart: !1,
                sceneData: e,
                sceneEvent: s.GAME_HOME,
                nextSceneId: i.Home,
                relivedTime: 0
            })
        }
        static go2Game(e) {
            this.go2Scene({
                isRelive: !1,
                isRestart: !1,
                sceneData: e,
                sceneEvent: s.GAME_PREPARE,
                nextSceneId: i.Prepare
            })
        }
        static startGame(e) {
            this.go2Scene({
                isRelive: !1,
                isRestart: !1,
                sceneData: e,
                sceneEvent: s.GAME_START,
                nextSceneId: i.Game
            })
        }
        static relive2Game(e) {
            this.go2Scene({
                isRelive: !0,
                isRestart: !1,
                sceneData: e,
                sceneEvent: s.GAME_RELIVE_START,
                nextSceneId: i.Game
            })
        }
        static resetGame(e) {
            this.go2Scene({
                isRelive: !1,
                isRestart: !0,
                sceneData: e,
                sceneEvent: s.GAME_RESET,
                nextSceneId: i.Prepare
            })
        }
        static go2Relive(e) {
            this.go2Scene({
                isRelive: !0,
                isRestart: !1,
                sceneData: e,
                sceneEvent: s.GAME_RELIVE,
                nextSceneId: i.Prepare,
                relivedTime: this.relivedTime + 1
            })
        }
        static showSuccessed(e) {
            this.go2Scene({
                isRelive: !1,
                isRestart: !1,
                sceneData: e,
                sceneEvent: s.GAME_SHOW_WIN,
                nextSceneId: i.ShowSuccess
            })
        }
        static showFailed(e) {
            this.go2Scene({
                isRelive: !1,
                isRestart: !1,
                sceneData: e,
                sceneEvent: s.GAME_SHOW_FAIL,
                nextSceneId: i.ShowFailed
            })
        }
        static reportSuccess(e) {
            this.go2Scene({
                isRelive: !1,
                isRestart: !1,
                sceneData: e,
                sceneEvent: s.GAME_WIN,
                nextSceneId: i.Success
            })
        }
        static reportFailed(e) {
            this.go2Scene({
                isRelive: !1,
                isRestart: !1,
                sceneData: e,
                sceneEvent: s.GAME_FAILED,
                nextSceneId: i.Failed
            })
        }
        static overGame(e) {
            this.savePlayerInfo(e),
            this.go2Scene({
                isRelive: !1,
                isRestart: !1,
                sceneData: e,
                sceneEvent: s.GAME_OVER,
                nextSceneId: i.Over
            })
        }
        static back2Home(e) {
            this.go2Scene({
                isRelive: !1,
                isRestart: !1,
                sceneData: e,
                sceneEvent: s.GAME_BACK_HOME,
                nextSceneId: i.Home
            })
        }
        static exitApplication() {
            window.conch && window.conch.exit()
        }
        static savePlayerInfo(e) {
            if (null != e) {
                if (e != this.playerInfo) for (var s = Object.keys(e), i = 0; i < s.length; i++) this.playerInfo[s[i]] = e[s[i]];
                "" != this.accountId ? t.LocalStorage.setItem(`${
                    this.appInfo.appName
                }:${
                    this.accountId
                }`, JSON.stringify(this.playerInfo)) : t.LocalStorage.setItem(`${
                    this.appInfo.appName
                }:`, JSON.stringify(this.playerInfo))
            }
        }
        static loadPlayerInfo() {
            var e;
            if (null != (e = "" != this.accountId ? t.LocalStorage.getItem(`${
                this.appInfo.appName
            }:${
                this.accountId
            }`, JSON.stringify(this.playerInfo)) : t.LocalStorage.getItem(`${
                this.appInfo.appName
            }`, JSON.stringify(this.playerInfo))) && 0 != e.length) for (var s = JSON.parse(e), i = Object.keys(s), n = 0; n < i.length; n++) this.playerInfo[i[n]] = s[i[n]]
        }
        static playClickSound() {
            o.playSound(this.appInfo.soundClick, !1)
        }
        static showToastMsg(e) {
            u.showToastMsg(e)
        }
        static showMessageBox(e, t) {
            u.showMessageBox(e, t)
        }
        static showModal(e, t, s, i, n, a, r) {
            return c.showModal(e, t, s, i, n, a, r)
        }
        static openView(e, t, s) {
            u.openView(e, t, s)
        }
        static closeView(e) {
            u.closeView(e)
        }
        static closeAllViews() {
            u.unloadScene()
        }
        static setViewValidCheckFun(e) {
            u.checkFun = e
        }
        static registerView(e, t) {
            u.registerView(e, t)
        }
        static registerScene(e, t, s) {
            u.registerScene(e, t, s)
        }
        static getLocalStorage(e) {
            return "" != this.accountId ? t.LocalStorage.getItem(`${
                this.appInfo.appName
            }:${
                this.accountId
            }: ${
                e
            }`) : t.LocalStorage.getItem(`${
                this.appInfo.appName
            }:${
                e
            }`)
        }
        static setLocalStorage(e, s) {
            var i;
            null != s && (i = "" != this.accountId ? `${
                this.appInfo.appName
            }:${
                this.accountId
            }: ${
                e
            }`: `${
                this.appInfo.appName
            }:${
                e
            }`, s instanceof Object ? t.LocalStorage.setItem(i, JSON.stringify(s)) : s instanceof Array ? t.LocalStorage.setItem(i, JSON.stringify(s)) : t.LocalStorage.setItem(i, s.toString()))
        }
    }
    p.appInfo = {},
    p.startUpCfg = {},
    p.langCfg = {
        gettxt: "You get",
        getcointxt: "You get金币",
        novideotxt: "暂无可看视频，请稍后再试",
        novideotxt2: "现在没有视频看了",
        nocointxt: "Not enough coins!",
        nokeytxt: "No keys, watch video to get more?",
        sharetimeshort: "录屏失败：录屏时长低于 3 s!",
        sharefailtxt: "Min享失败!",
        ok: "确定",
        cancel: "Cancel",
        videocanceltitle: "Not finished watching the video",
        videocanceldesc: "Pls watch the ad completely, so that you can claim your reward",
        unlock: "Locked",
        level: "Level"
    },
    p.nicknameList = {},
    p.gameCfg = {},
    p.goodsCfg = {},
    p.pluginCfg = {},
    p.playerInfo = {},
    p.viewCfg = {},
    p.sceneCfg = {},
    p.scene3d = null,
    p.channelTag = "unknown",
    p.isGMMode = !1,
    p.isRunning = !0,
    p.isRestart = !1,
    p.resLoaded = !1,
    p.isRelive = !1,
    p.relivedTime = 0,
    p.curSceneId = i.Loading,
    p.nextSceneId = i.Loading,
    p.sceneData = null,
    p.sceneEvent = null,
    p.accountId = "",
    t.ILaya.regClass(p),
    t.ClassUtils.regClass("fc.framework.GameFrame", p),
    e.Audio = o,
    e.Device = h,
    e.Channel = c,
    e.Joystick = l,
    e.Resource = g,
    e.Md5Utils = a,
    e.MiscUtils = r,
    e.GameFrame = p
} (window.fc.framework, Laya);
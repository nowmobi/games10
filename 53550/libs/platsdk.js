var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var cafesdk;
(function (cafesdk) {
    cafesdk.netswh = [];
    function netswh_init($swh) {
        for (var i = 0; i < $swh.length; i++) {
            cafesdk.netswh[i] = Number($swh[i]);
        }
        cafe.event.dispatch("NETSWH_LOAD_END");
    }
    cafesdk.netswh_init = netswh_init;
    function getnetswh(index) {
        return cafesdk.netswh && cafesdk.netswh[index] == 1;
    }
    cafesdk.getnetswh = getnetswh;
})(cafesdk || (cafesdk = {}));
var cafesdk;
(function (cafesdk) {
    cafesdk.ad = {};
    cafesdk.adstate = {};
    function ad_init($ad, callback) {
        cafesdk.ad.admap = {};
        for (var s in $ad) {
            var key = $ad[s][3];
            if (key == 0) {
                cafesdk.ad[s] = {};
                cafesdk.ad[s]["type"] = $ad[s][0];
                cafesdk.ad[s]["swh"] = $ad[s][1];
                cafesdk.ad[s]["aid"] = $ad[s][2];
                cafesdk.ad[s]["pos"] = $ad[s][3];
                cafesdk.ad[s]["trigger"] = $ad[s][4];
            }
            else {
                cafesdk.ad.admap[key] = {};
                cafesdk.ad.admap[key]["type"] = $ad[s][0];
                cafesdk.ad.admap[key]["swh"] = $ad[s][1];
                cafesdk.ad.admap[key]["aid"] = $ad[s][2];
                cafesdk.ad.admap[key]["pos"] = $ad[s][3];
                cafesdk.ad.admap[key]["trigger"] = $ad[s][4];
            }
        }
        cafesdk.log("admap:", cafesdk.ad.admap);
        cafesdk.ad.isAdHander = callback;
    }
    cafesdk.ad_init = ad_init;
    function getad(pos) {
        cafesdk.log("admappos" + pos + ": " + JSON.stringify(cafesdk.ad.admap));
        return cafesdk.ad.admap && cafesdk.ad.admap[pos];
    }
    cafesdk.getad = getad;
    function getadbytype(type) {
        for (var s in cafesdk.ad.admap) {
            var o = cafesdk.ad.admap[s];
            if (o.type == type) {
                return o;
            }
        }
        return null;
    }
    cafesdk.getadbytype = getadbytype;
    function getadsbytype(type) {
        var list = [];
        for (var s in cafesdk.ad.admap) {
            var o = cafesdk.ad.admap[s];
            if (o.type == type) {
                list[list.length] = o;
            }
        }
        return list;
    }
    cafesdk.getadsbytype = getadsbytype;
    function setAdState(type, state) {
        cafesdk.adstate[type] = state;
    }
    cafesdk.setAdState = setAdState;
    function getAdState(type) {
        return cafesdk.adstate[type];
    }
    cafesdk.getAdState = getAdState;
})(cafesdk || (cafesdk = {}));
// var CHANNELID = "weixin.mnblq";
// // var CHANNELID = "ios.hlttt";
// var VERSION = 101001;
// var GAMEID = 33034;
// var PLATTYPE = PlatDefine.PLAT_WEB;
// // var LOGINWS = "wss://xiaoyouxi.game.i66wan.com/feixingqi_ios";
// var ADVISIBLE = true;//广告开关: true-展示,false-隐藏
// var LogSwitch = true;//日志开关: true-显示, false-隐藏
// var Engine = PlatDefine.ENGINE_LAYA;//引擎: cocos layabox
// var NaviSwitch = true;//跳转开关: true-展示,false-隐藏
// var Orientation = PlatDefine.PORTRAIT;//屏幕方向
// var ShareSwitch = true;//分享开关:true-显示分享按钮,false-隐藏
// var RankSwitch = true;//分享开关:true-显示分享按钮,false-隐藏
var cafesdk;
(function (cafesdk) {
    cafesdk.RESOURCE_VERSION = 0;
    cafesdk.RESOURCE_PATH = "";
    cafesdk.RESOURCE_URL = "";
    cafesdk.CONFIG_VERSION = 0;
    cafesdk.CONFIG_PATH = "";
    cafesdk.config = {};
    var currData;
    function config_init($conifg) {
        for (var s in $conifg) {
            cafesdk.config[s] = $conifg[s];
        }
        cafesdk.RESOURCE_VERSION = $conifg["RESOURCE_VERSION"];
        cafesdk.RESOURCE_PATH = $conifg["RESOURCE_PATH"];
        if (cafesdk.RESOURCE_PATH == "") {
            cafesdk.RESOURCE_URL = "";
        }
        else {
            if (cafesdk.RESOURCE_VERSION != 0) {
                cafesdk.RESOURCE_URL = cafesdk.RESOURCE_PATH + cafesdk.RESOURCE_VERSION + "/";
            }
            else {
                cafesdk.RESOURCE_URL = cafesdk.RESOURCE_PATH;
            }
        }
        cafesdk.CONFIG_PATH = $conifg["CONFIG_PATH"];
        cafesdk.CONFIG_VERSION = $conifg["CONFIG_VERSION"];
        currData = Laya.LocalStorage.getJSON(cafesdk.config.GAMEID + "_CURRDATA");
        if (!currData)
            currData = { time: new Date().valueOf() };
    }
    cafesdk.config_init = config_init;
    function getCurrDayData($name) {
        var currtime = new Date().getDate();
        var datatime = new Date(currData.time).getDate();
        if (currtime != datatime) {
            currData = { time: new Date().valueOf() };
        }
        if (!currData[$name]) {
            currData[$name] = 0;
        }
        return currData[$name];
    }
    cafesdk.getCurrDayData = getCurrDayData;
    function setCurrDayData($name, $value) {
        var currtime = new Date().getDate();
        var datatime = new Date(currData.time).getDate();
        if (currtime != datatime) {
            currData = { time: new Date().valueOf() };
        }
        currData[$name] = $value;
    }
    cafesdk.setCurrDayData = setCurrDayData;
})(cafesdk || (cafesdk = {}));
var cafesdk;
(function (cafesdk) {
    cafesdk.share = {};
    // export var shareSWH:IShareSwitch={};
    // export var isShareHandler:(type:number)=>boolean;
    function share_init($shareTemp, callback) {
        cafesdk.share.shareTemp = $shareTemp;
        cafesdk.share.isShareHandler = callback; //share.shareTemp.isShare;
        // if(Laya.Browser.window.tt){
        //     Laya.Browser.window.tt.onShareAppMessage(()=>{
        //         return {
        //             title: share.shareTemp.title,
        //             imageUrl: share.shareTemp.shareUrl,
        //             success:()=>{
        //                 // TipUtils.showTip("分享成功");
        //             },
        //             fail:(err)=>{
        //                 // TipUtils.showTip("分享失败"+err);
        //             }
        //         }
        //     });
        // }
        // for(var s in $share){
        //     share[s]=$share[s];
        // }
    }
    cafesdk.share_init = share_init;
})(cafesdk || (cafesdk = {}));
var cafesdk;
(function (cafesdk) {
    cafesdk.swh = {};
    function swh_init($swh) {
        for (var s in $swh) {
            cafesdk.swh[s] = $swh[s];
        }
    }
    cafesdk.swh_init = swh_init;
})(cafesdk || (cafesdk = {}));
var cafesdk;
(function (cafesdk) {
    cafesdk.toGameSWH = {};
    function togame_init($games, $togame) {
        cafesdk.games = $games;
        cafesdk.togame = $togame;
        // cafesdk.log($games);
        // cafesdk.log($togame);
        // for(var s in $swh){
        //     toGameSWH[s]=$swh[s];
        // }
        // togame.LIKE=$like;
        // togame.DEFAULT=$default;
        // togame.MORE=$more;
        // togame.GAME=$game;
        // togame.SETTLE=$settle;
    }
    cafesdk.togame_init = togame_init;
    function getTogameByName(keyname) {
        var list = [];
        var arr = cafesdk.togame[keyname];
        if (arr) {
            for (var i = 0; i < arr.length; i++) {
                var game = cafesdk.games[arr[i]];
                if (game) {
                    list[list.length] = game;
                }
            }
        }
        return list;
    }
    cafesdk.getTogameByName = getTogameByName;
})(cafesdk || (cafesdk = {}));
var cafesdk;
(function (cafesdk) {
    function log(message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (cafesdk.swh.log) {
            console.log(message, optionalParams);
        }
    }
    cafesdk.log = log;
    function error(message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (cafesdk.swh.log) {
            console.error(message, optionalParams);
        }
    }
    cafesdk.error = error;
    function info(message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (cafesdk.swh.log) {
            console.info(message, optionalParams);
        }
    }
    cafesdk.info = info;
    function debug(message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (cafesdk.swh.log) {
            console.debug(message, optionalParams);
        }
    }
    cafesdk.debug = debug;
})(cafesdk || (cafesdk = {}));
var cafesdk;
(function (cafesdk) {
    var utils;
    (function (utils) {
        //----生成uuid----
        function genUUID() {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";
            var uuid = s.join("");
            return uuid;
        }
        utils.genUUID = genUUID;
        function getUUID() {
            var _uuid = this.localGetItem("_uuid");
            if (_uuid) {
                slog("uuid:" + _uuid);
                return _uuid;
            }
            else {
                _uuid = this.genUUID();
                this.localSetItem("_uuid", _uuid);
            }
            return _uuid;
        }
        utils.getUUID = getUUID;
        // export function localSetItem(key, value) {
        //     laya.net.LocalStorage.setItem(key, value);
        // }
        // export function localGetItem(key) {
        //     return laya.net.LocalStorage.getItem(key);
        // }
    })(utils = cafesdk.utils || (cafesdk.utils = {}));
})(cafesdk || (cafesdk = {}));
var cafesdk;
(function (cafesdk) {
    var NetCommonSDK = /** @class */ (function () {
        function NetCommonSDK() {
            this.name = ["北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "重庆"];
            this.nameCode = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
            this.ipAdressUrl = [
                "https://quzhi.zywxgames.com/admin/api/getIpCity",
            ];
            this.sfcity = "";
        }
        NetCommonSDK.prototype.dealTakeNum = function () {
            console.log('---dealTakeNum----');
            var self = this;
            var url = 'https://quzhi.zywxgames.com/admin/api/role?pkm=' + cafesdk.config.PACKAGE + '&canshu=' + cafesdk.config.CHANNEL + '&iccid=' + this.sfip + '&ip=' + this.sfip + '&url=new&yys=yd';
            console.log(url);
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                console.log("canshu value : ", xhr.readyState, xhr.status);
                if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                    var response = xhr.responseText;
                    console.log("response: ", response);
                    self.getGGType = response;
                    cafesdk.netswh_init(response);
                    //self.dealMessage(response);
                }
            };
            xhr.open("GET", url, true);
            xhr.send();
        };
        NetCommonSDK.prototype.getIpAddressChagne = function (str) {
            var ss = "00";
            for (var i = 0; i < this.name.length; i++) {
                if (str.indexOf(this.name[i]) != -1) {
                    ss = this.nameCode[i];
                    break;
                }
            }
            return ss;
        };
        NetCommonSDK.prototype.getIpAddress = function () {
            var self = this;
            var url = this.ipAdressUrl[0];
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                console.log("canshu ip : ", xhr.readyState, xhr.status);
                if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                    var response = xhr.responseText;
                    self.sfcity = response;
                    console.log('---ip--start pb--' + response);
                    self.sfip = self.getIpAddressChagne(response);
                    self.dealTakeNum();
                }
            };
            xhr.open("GET", url, true);
            xhr.send();
        };
        return NetCommonSDK;
    }());
    cafesdk.NetCommonSDK = NetCommonSDK;
})(cafesdk || (cafesdk = {}));
var cafesdk;
(function (cafesdk) {
    var net;
    (function (net) {
        // var _userId = 0;
        var NetWork = /** @class */ (function () {
            function NetWork() {
            }
            NetWork.getInstance = function () {
                if (!this._instance) {
                    this._instance = new NetWork();
                    // httpUtil = new HttpUtils();
                }
                return this._instance;
            };
            NetWork.sendLog = function (act, msg) {
                var _this = this;
                return new cafe.com.too(function (succ, fail) {
                    var _http = new Laya.HttpRequest();
                    function err(e) {
                    }
                    function success(res) {
                        try {
                            var data = JSON.parse(res);
                            if (data.ref == 0) {
                                succ(data.msg);
                            }
                            else {
                                fail(data);
                            }
                        }
                        catch (e) {
                            cafesdk.log(NetWork.URL_HTTPGAME + "出错了");
                        }
                    }
                    _http.once(Laya.Event.COMPLETE, _this, success);
                    _http.once(Laya.Event.ERROR, _this, err);
                    // _http.on(Laya.Event.PROGRESS,this,process);
                    var action = {};
                    action.act = act;
                    action.tb = NetWork.LOG_GAME_ID;
                    action.data = msg;
                    var url = NetWork.URL_HTTPGAME;
                    url += "?" + JSON.stringify(action);
                    _http.send(url, "", "get", "text");
                });
            };
            // private static URL_HTTPGAME:string="http://192.168.0.36:12801";
            // private static URL_HTTPGAME: string = "http://www.dbug.ltd/tt/";
            NetWork.URL_HTTPGAME = "https://www.dbug.ltd/tt/";
            NetWork.LOG_GAME_ID = "10001";
            return NetWork;
        }());
        net.NetWork = NetWork;
    })(net = cafesdk.net || (cafesdk.net = {}));
})(cafesdk || (cafesdk = {}));
var cafesdk;
(function (cafesdk) {
    var GameActionType = /** @class */ (function () {
        function GameActionType() {
        }
        GameActionType.SET_LOADING_PROGRESS = 1;
        GameActionType.LOADING_COMPLETE = 2;
        GameActionType.LOGIN = 10001;
        GameActionType.GET_CONFIG = 10002;
        GameActionType.GET_USER_INFO = 10003;
        GameActionType.GAME_READY = 20000;
        GameActionType.GAME_START = 20001;
        GameActionType.GAME_END = 20002;
        return GameActionType;
    }());
    cafesdk.GameActionType = GameActionType;
})(cafesdk || (cafesdk = {}));
var cafesdk;
(function (cafesdk) {
    var GetInfoType = /** @class */ (function () {
        function GetInfoType() {
        }
        GetInfoType.openId = 1;
        GetInfoType.isConnected = 2;
        return GetInfoType;
    }());
    cafesdk.GetInfoType = GetInfoType;
})(cafesdk || (cafesdk = {}));
var cafesdk;
(function (cafesdk) {
    var SDKActionType = /** @class */ (function () {
        function SDKActionType() {
        }
        /**
         * 预加载banner广告
         */
        // static LOAD_BANNER:number=10001;
        /**
        * 预加载插屏广告
        */
        // static LOAD_INTER:number=10002;
        /**
        * 预加载激励视频广告
        */
        // static LOAD_VIDEO:number=10003;
        /**
         * 预加载全屏广告
         */
        // static LOAD_FULLSCREEN:number=10004;
        /**-------------------------------------------------------------------------广告分享 */
        /**
         * 展示banner广告
         */
        SDKActionType.SHOW_BANNER = 20001;
        /**
         * 展示插屏广告
         */
        SDKActionType.SHOW_INTER = 20002;
        /**
       * 展示激励视频
       */
        SDKActionType.SHOW_VIDEO = 20003;
        /**
         * 展示全屏广告
         */
        SDKActionType.SHOW_FULLSCREEN = 20004;
        /**
         * 隐藏banner广告
         */
        SDKActionType.HIDE_BANNER = 20005;
        SDKActionType.HIDE_INTER = 20006;
        SDKActionType.HIDE_VIDEO = 20007;
        SDKActionType.HIDE_FULLSCREEN = 20008;
        /**
         * 展示原生BANNER广告
         */
        SDKActionType.SHOW_NATIVE_BANNER = 30101;
        /**
         * 展示原生BANNER广告点击
         */
        SDKActionType.SHOW_NATIVE_BANNER_CLICK = 30202;
        /**
         * 展示原生插屏广告
         */
        SDKActionType.SHOW_NATIVE_INTER = 30201;
        /**
         * 展示原生插屏广告点击
         */
        SDKActionType.SHOW_NATIVE_INTER_CLICK = 30202;
        /**
         * 展示原生视频广告
         */
        SDKActionType.SHOW_NATIVE_VIDEO = 30301;
        /**
         * 展示原生视频广告点击
         */
        SDKActionType.SHOW_NATIVE_VIDEO_CLICK = 30302;
        /**
       * 关闭原生视频广告点击
       */
        SDKActionType.HIDE_NATIVE_VIDEO = 30303;
        /**
         * 展示原生轮播广告
         */
        SDKActionType.SHOW_NATIVE_THREEICON = 30401;
        /**
         * 展示原生轮播广告点击
         */
        SDKActionType.SHOW_NATIVE_THREEICON_CLICK = 30402;
        /**
         * 关闭原生轮播广告点击
         */
        SDKActionType.HIDE_NATIVE_THREEICON = 30403;
        /**
         * 关闭原生轮播广告点击
         */
        SDKActionType.DISPOSE_NATIVE_THREEICON = 30404;
        /**
         * 展示原生图片广告
         */
        SDKActionType.SHOW_NATIVE_ICON = 30501;
        /**
         * 展示原生图片广告点击
         */
        SDKActionType.SHOW_NATIVE_ICON_CLICK = 30502;
        /**
        * 关闭原生图片广告点击
        */
        SDKActionType.HIDE_NATIVE_ICON = 30503;
        /**
        * 关闭原生图片广告点击
        */
        SDKActionType.DISPOSE_NATIVE_ICON = 30504;
        /**
        * 分享
        */
        SDKActionType.SHARE = 40001;
        /**-------------------------------------------------------------------------广告 */
        /**-------------------------------------------------------------------------系统 */
        /**设置网络回调 */
        SDKActionType.SET_NET_WORK_HANDLER = 10001;
        /**开始录制视频 */
        SDKActionType.START_RECORD_SCREEN = 10002;
        /**结束录制视频 */
        SDKActionType.STOP_RECORD_SCREEN = 10003;
        /**视频录制状态 */
        SDKActionType.GET_RECORD_STATE = 10004;
        /**
        * 展示游戏圈
        */
        SDKActionType.SHOW_GAME_CLUB = 10101;
        /**
         * 隐藏游戏圈
         */
        SDKActionType.HIDE_GAME_CLUB = 10102;
        /**
        * 跳转至其他小游戏
        */
        SDKActionType.JUMP_GAME = 10201;
        /**显示更多游戏 */
        SDKActionType.SHOW_MORE_GAMES = 10202;
        /**
         * 添加震动
         */
        SDKActionType.VIBBRATE_SHORT = 10005;
        //小游戏设置屏幕常亮
        SDKActionType.KEEP_SCREEN_ON = 10006;
        /**游戏上报 */
        SDKActionType.GAME_REPORT = 90000;
        /**添加到我的程序 */
        SDKActionType.ADD_TO_MY_APP = 10301;
        /**添加到我的桌面状态获取 */
        SDKActionType.IS_ADD_TO_MY_DESKTOP = 10401;
        /**添加到我的桌面 */
        SDKActionType.ADD_TO_MY_DESKTOP = 10402;
        return SDKActionType;
    }());
    cafesdk.SDKActionType = SDKActionType;
})(cafesdk || (cafesdk = {}));
var cafesdk;
(function (cafesdk) {
    var BaseApi = /** @class */ (function () {
        function BaseApi() {
        }
        /**
         * 平台初始化
         */
        BaseApi.prototype.init = function (params, callback) {
        };
        /**
         * 平台行为
         * @param params {act:行为,params:附加参数}
         */
        BaseApi.prototype.plat_action = function (act, params, callback) {
            return null;
        };
        /**
       * 游戏行为
       * @param params {act:行为,params:附加参数}
       */
        BaseApi.prototype.game_action = function (act, params, callback) {
            return null;
        };
        BaseApi.prototype.get_info = function (type) {
            return null;
        };
        return BaseApi;
    }());
    cafesdk.BaseApi = BaseApi;
})(cafesdk || (cafesdk = {}));
var cafesdk;
(function (cafesdk) {
    var PlatApi = /** @class */ (function (_super) {
        __extends(PlatApi, _super);
        function PlatApi() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(PlatApi, "inst", {
            get: function () {
                if (!PlatApi._inst)
                    PlatApi._inst = new PlatApi();
                return PlatApi._inst;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 平台初始化
         */
        PlatApi.prototype.init = function (params, callback) {
            // initConfig(callback: Laya.Handler) {
            var self = this;
            var version = new Date().valueOf() / 1000;
            Laya.loader.load("localSDK.json?v=" + version, Laya.Handler.create(self, function (data) {
                var msg;
                if (typeof data == "string") {
                    msg = JSON.parse(data);
                }
                else {
                    msg = data;
                }
                cafesdk.config_init(msg);
                Laya.loader.load(cafesdk.CONFIG_PATH + cafesdk.CONFIG_VERSION + ".json?v=" + version, Laya.Handler.create(self, function (config) {
                    if (typeof config == "string") {
                        msg = JSON.parse(config);
                    }
                    else {
                        msg = config;
                    }
                    cafesdk.swh_init(msg.swh);
                    cafesdk.ad_init(msg.adids, params.isAd);
                    cafesdk.share_init(msg.shareTemp, params.isShare);
                    cafesdk.togame_init(msg.games, msg.togame);
                    self._sdk = new cafesdk.PlatSDK();
                    self._sdk.init();
                    self._game = new cafesdk.PlatGame();
                    self._commonNet = new cafesdk.NetCommonSDK();
                    self._commonNet.getIpAddress();
                    // callback && callback();
                    callback && callback.run();
                }));
                // cafesdk.RESOURCE_PATH = msg["RESOURCE_PATH"];
                // cafesdk.RESOURCE_VERSION = msg["RESOURCE_VERSION"];
                // PTSDK._instance.sdk = cafesdk.PlatSDK.instance;
            }));
            // }
        };
        /**
         * 平台行为
         * @param params {act:行为,params:附加参数}
         */
        PlatApi.prototype.plat_action = function (act, params, callback) {
            var self = this;
            switch (act) {
                // case SDKActionType.LOAD_BANNER:
                //     // self._sdk.load
                // break;
                // case SDKActionType.LOAD_FULLSCREEN:
                // break;
                // case SDKActionType.LOAD_INTER:
                // break;
                // case SDKActionType.LOAD_VIDEO:
                // break;
                case cafesdk.SDKActionType.SET_NET_WORK_HANDLER:
                    self._sdk.netWorkHandler = callback;
                    break;
                // case SDKActionType.SHOW_BANNER:
                // break;
                // case SDKActionType.SHOW_FULLSCREEN:
                //     // self._sdk.show(params.id);
                // break;
                // case SDKActionType.SHOW_INTER:
                // break;
                case cafesdk.SDKActionType.SHOW_VIDEO:
                    callback && callback.runWith([1]);
                    break;
                // case SDKActionType.HIDE_BANNER:
                // break;
                // case SDKActionType.HIDE_FULLSCREEN:
                // break;
                // case SDKActionType.HIDE_INTER:
                //     //  self._sdk.hide
                // break;
                // case SDKActionType.HIDE_VIDEO:
                // break;
                // case SDKActionType.VIBBRATE_SHORT:
                // break;
                // case SDKActionType.SHARE:
                // break;
                // case SDKActionType.JUMP_GAME:
                // break;
                // case SDKActionType.SHOW_GAME_CLUB:
                // break;
                // case SDKActionType.HIDE_GAME_CLUB:
                // break;
                // case SDKActionType.KEEP_SCREEN_ON:
                // break;
                default:
                    callback && callback.runWith([1]);
                    break;
            }
            return null;
        };
        /**
       * 游戏行为
       * @param params {act:行为,params:附加参数}
       */
        PlatApi.prototype.game_action = function (act, params, callback) {
            var self = this;
            switch (act) {
                // case GameActionType.SET_LOADING_PROGRESS:
                // break;
                // case GameActionType.LOADING_COMPLETE:
                // break;
                case cafesdk.GameActionType.LOGIN:
                    self._game.login(callback);
                    break;
                case cafesdk.GameActionType.GET_CONFIG:
                    // self._game.getUserInfo(callback);
                    // net.NetWork.getInstance().getConfig(callback);
                    break;
                // case GameActionType.GET_USER_INFO:
                //     // self._game.getUserInfo(callback);
                // break;
                // case GameActionType.GAME_READY:
                // break;
                // case GameActionType.GAME_START:
                // break;
                // case GameActionType.GAME_END:
                // break;
                default:
                    callback && callback.runWith([1]);
                    break;
            }
            return null;
        };
        PlatApi.prototype.get_info = function (type) {
            var self = this;
            switch (type) {
                case cafesdk.GetInfoType.openId: return self._game.openid;
                case cafesdk.GetInfoType.isConnected: return self.isConnected;
            }
            return null;
        };
        return PlatApi;
    }(cafesdk.BaseApi));
    cafesdk.PlatApi = PlatApi;
})(cafesdk || (cafesdk = {}));
var cafesdk;
(function (cafesdk) {
    var PlatGame = /** @class */ (function () {
        function PlatGame() {
        }
        PlatGame.prototype.login = function (callback) {
            var netWork = new cafesdk.net.NetWork();
            // var utils = new utils.Data();
            var uuid = cafesdk.utils.getUUID();
            // netWork.loginWeb(uuid, "", "", callback);
        };
        return PlatGame;
    }());
    cafesdk.PlatGame = PlatGame;
})(cafesdk || (cafesdk = {}));
var cafesdk;
(function (cafesdk) {
    var PlatSDK = /** @class */ (function () {
        function PlatSDK() {
        }
        PlatSDK.prototype.init = function () {
            var self = this;
            self.onNetStateChange();
            window["onerror"] = function (msg, url, row, col, error) {
                // console.log('onerror 错误信息 ↙');
                // console.log(error.stack);
                var info = {};
                info.game_id = cafesdk.config.GAMEID.toString();
                info.sysinfo = "PC_WIN10_WEB_PC" + "_" + cafesdk.RESOURCE_VERSION.toString();
                info.err = error.stack;
                info.time = Math.round(new Date().getTime() / 1000);
                cafesdk.net.NetWork.sendLog("gamelog", info).start();
                // console.log({
                // 	msg,  url,  row, col, error
                // })
            };
        };
        // showVideo(id, callback, pos){
        //     callback(1);
        // }
        PlatSDK.prototype.onNetStateChange = function () {
            var self = this;
            window.addEventListener("offline", function (e) {
                var res = { isConnected: false };
                cafesdk.PlatApi.inst.isConnected = false;
                // slog(`网络修改：${res.isConnected} `);
                self.netWorkHandler && self.netWorkHandler.runWith([res]);
            });
            window.addEventListener("online", function (e) {
                // slog(`网络修改：${res.isConnected} `);
                var res = { isConnected: true };
                cafesdk.PlatApi.inst.isConnected = true;
                self.netWorkHandler && self.netWorkHandler.runWith([res]);
            });
        };
        return PlatSDK;
    }());
    cafesdk.PlatSDK = PlatSDK;
})(cafesdk || (cafesdk = {}));
window["cafesdk"] = cafesdk;

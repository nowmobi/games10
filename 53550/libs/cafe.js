var cafe;
(function (cafe) {
    cafe.logType = 1;
    cafe.isZip = false;
    var _cid = 0;
    function getid(target) {
        if (target["_cid"]) {
            return target["_cid"];
        }
        target["_cid"] = _cid;
        _cid++;
        return target["_cid"];
    }
    cafe.getid = getid;
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var com;
    (function (com) {
        var io = /** @class */ (function () {
            function io() {
            }
            // public static init(){
            // var r=Math.floor(new Date().valueOf()/(60*1000));
            // io.resItems=JSON.parse(io.readFile("data/res.txt?v="+r));
            // for(var i=0;i<io.resItems.length;i++){
            //     var resArr=io.resItems[i];
            //     io.resHash[resArr[0]]=resArr;
            // }
            // if(io.resHash["doc"]){
            //     var s=io.readFile("data/doc.txt");
            //     var str=io.readFile("data/doc.txt");
            //     io.docHash=JSON.parse(str);
            // }
            // }
            io.initTable = function (baseItems, items, hash) {
                var fields = baseItems[0];
                for (var i = 1; i < baseItems.length; i++) {
                    var arr = baseItems[i];
                    var obj = {};
                    for (var j = 0; j < fields.length; j++) {
                        obj[fields[j]] = arr[j];
                    }
                    items.push(obj);
                    hash[arr[0]] = obj;
                }
            };
            io.readFile = function (path) {
                return cafe.com.too.create(function (succ, fail) {
                    Laya.loader.load(path, Laya.Handler.create(self, function (target) {
                        succ(target);
                    }));
                });
                // if(cafe.wx.enabled){
                //     return cafe.wx.readFile(path);
                // }
                // var xh=new window["XMLHttpRequest"]();
                // xh["open"]("GET",path,false);
                // try{
                //     xh["send"](null);
                //     return xh["responseText"];
                // }
                // catch(e){
                //     return "";
                // }
            };
            // public static readTypeFile(path:string,type:string){
            // if(Wx.enabled){
            //     return Wx.readFile(path);
            // }
            // return new too(function(succ){
            //     var xh=new window["XMLHttpRequest"]();
            //     xh.responseType="arraybuffer";
            //     xh["open"]("GET",path,true);
            //     xh["addEventListener"]("load", function (oEvent) {
            //         succ(xh.response);
            //     })
            //     // xh.addEventListener()
            //     // xh.onload = function (oEvent) {
            //     //     // var arrayBuffer = xh.response; // 注意:不是oReq.responseText
            //     // };
            //     xh.send(null);
            // })
            // xh.setRequestHeader("client_type", "DESKTOP_WEB");
            // xh.setRequestHeader("desktop_web_access_key", _desktop_web_access_key);
            // try{
            // 	xh["send"](null);
            // 	return xh["response"];
            // }
            // catch(e){
            // 	return "";
            // }
            // }
            io.readJson = function (path) {
                return com.too.create(function (succ, fail) {
                    Laya.loader.load(path, Laya.Handler.create(self, function (target) {
                        var json = JSON.parse(target);
                        succ(json);
                    }));
                });
            };
            io.resHash = {};
            io.resJsonHash = {};
            return io;
        }());
        com.io = io;
    })(com = cafe.com || (cafe.com = {}));
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var com;
    (function (com) {
        var too = /** @class */ (function () {
            function too(callback) {
                this.curIdx = -1;
                this._callbacks = [];
                this._succbacks = [];
                this.idx = 0;
                this.total = 0;
                if (callback) {
                    this._callbacks[this.total] = callback;
                }
                else {
                    this._callbacks[this.total] = function (succ, fail) {
                        succ();
                    };
                }
                this._succbacks[this.total] = null;
            }
            too.create = function (callback) {
                return new too(callback);
            };
            too.prototype.add = function (callback) {
                this.total++;
                this._callbacks[this.total] = callback;
                return this;
            };
            too.prototype.then = function (succback) {
                this._succbacks[this.total] = succback;
                return this;
            };
            too.prototype.error = function (failback) {
                this._failback = failback;
                return this;
            };
            too.prototype.start = function () {
                this.next();
                return this;
            };
            too.prototype.next = function () {
                console.error("next")
                var self = this;
                if (self.curIdx == self.idx)
                    return;
                try {
                    // let idx=self.idx;
                    self.curIdx = self.idx;
                    // console.error(self.total+"当前运行第："+self.curIdx);
                    if (self.idx > self.total)
                        return;
                    var call_1 = self._callbacks[self.idx];
                    call_1(function (data) {
                        self._succbacks[self.idx] && self._succbacks[self.idx](data);
                        self.idx++;
                        if (self.idx <= self.total) {
                            self.next();
                        }
                    }, function (e) {
                        self._failback && self._failback(e);
                    });
                }
                catch (e) {
                    serror("第" + self.idx + "步出错" + e.stack);
                    // console.error("第"+self.idx+"步出错"+e);
                    self._failback && self._failback("第" + self.idx + "步出错");
                }
            };
            return too;
        }());
        com.too = too;
    })(com = cafe.com || (cafe.com = {}));
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var app;
    (function (app) {
        function initCafeGlobal(params) {
            cafe.game_id = params.game_id;
            cafe.game_tag = params.game_tag;
            if (params.isZip)
                cafe.isZip = params.isZip;
            if (params.logType)
                cafe.logType = params.logType;
            if (params.table_path)
                cafe.table_path = params.table_path;
            if (params.config_path)
                cafe.config_path = params.config_path;
        }
        app.initCafeGlobal = initCafeGlobal;
        function enter() {
            return new cafe.com.too(function (succ, fail) {
                if (cafe.isZip) {
                    cafe.com.io.readFile("config.zip").then(function (res) {
                        app.zip = new JSZip(res);
                        // var a=zip.load(res,{optimizedBinaryString:true})
                        // init();
                        succ();
                        // serror(zip.file("config\\game.json").asText());
                        // serror(zip.file("config\\http.json").asText());
                    }).start();
                }
                else {
                    // init();
                    succ();
                }
            });
        }
        app.enter = enter;
        // function init(){
        //     Shell.init();
        //     lconfig.init();
        //     ltable.init();
        //     ldata.init();
        // }
    })(app = cafe.app || (cafe.app = {}));
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var cmd;
    (function (cmd) {
        var BaseCmd = /** @class */ (function () {
            function BaseCmd(TYPEID) {
                if (TYPEID === void 0) { TYPEID = 0; }
                this.desc = ""; //命令描述，用于调试
                this.id = TYPEID;
            }
            BaseCmd.prototype.toEncodeScocketByteArray = function () {
                // var des:ByteArray = MsgUtil.creatByteArray();
                // des.writeShort(id);
                // des.writeShort(argu);
                // var isfirst:Boolean = true;
                // this.createBody();
                // if(seg && seg.length > 0)
                // {
                // 	des.writeBytes(seg,0,seg.length);
                // }		
                return null;
            };
            BaseCmd.prototype.createBodySegment = function () {
                // seg = MsgUtil.creatByteArray();
                return null;
            };
            /**
             *    子类覆盖此函数，并使用createBodySegment创建byteArray类型的变量seg
             *
             * */
            BaseCmd.prototype.createBody = function () {
            };
            BaseCmd.prototype.writeUTF = function (ba, str) {
                // if(str == null)
                // 	str = "null";
                // ba.writeUTF(str);
                // ba.writeByte(0);
            };
            BaseCmd.prototype.write64Int = function (ba, n) {
                // var h:number = n /(65536*65536);
                // var l:number = n %(65536*65536);
                // if(ba.endian == Endian.LITTLE_ENDIAN)
                // {
                // 	ba.writeInt(l);
                // 	ba.writeInt(h);
                // }
                // else
                // {
                // 	ba.writeInt(h);
                // 	ba.writeInt(l);
                // }
            };
            BaseCmd.prototype.read64Int = function (ba) {
                // var h:int = ba.readInt();
                // var l:int = ba.readInt();
                // var n:Number;
                // if(ba.endian == Endian.LITTLE_ENDIAN)
                // 	n = 65536*65536 * l + h;
                // else
                // 	n = 65536*65536 * h + l;
                return null;
            };
            return BaseCmd;
        }());
        cmd.BaseCmd = BaseCmd;
    })(cmd = cafe.cmd || (cafe.cmd = {}));
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var config;
    (function (config) {
        var BaseConfig = /** @class */ (function () {
            function BaseConfig(name) {
                this.exist = false;
                this.name = name;
            }
            BaseConfig.prototype.exp = function (src, type) {
                var self = this;
                switch (type) {
                    case 0:
                        self.path = cafe.config_path + src;
                        self.ext = ".json";
                        self.dejson();
                        self.exist = true;
                        break;
                    default:
                        break;
                }
            };
            BaseConfig.prototype.dejson = function () {
                var self = this;
                // var json:string;
                if (cafe.isZip) {
                    var json = cafe.app.zip.file(self.path + self.ext).asText();
                    this._table = window["JSON"]["parse"](json);
                }
                else {
                    this._table = Laya.loader.getRes(self.path + self.ext);
                    // cafe.com.io.readJson(self.path+self.ext).then(target=>{
                    //     this._table=target;
                    // }).start();
                }
            };
            BaseConfig.prototype.table = function () {
                return this._table;
            };
            return BaseConfig;
        }());
        config.BaseConfig = BaseConfig;
    })(config = cafe.config || (cafe.config = {}));
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var data;
    (function (data_1) {
        var BaseData = /** @class */ (function () {
            function BaseData(name) {
                this.isInitComplete = true;
                this.name = name;
            }
            /**
             * 读取数据
             */
            BaseData.prototype.readData = function () {
                var self = this;
            };
            BaseData.prototype.register = function () {
            };
            BaseData.prototype.dispose = function () {
            };
            /** 数据改变后注册它 **/
            BaseData.prototype.invalidate = function (type, data) {
                if (type === void 0) { type = "all"; }
                if (data === void 0) { data = null; }
                var self = this;
                cafe.event.dispatch(self.name + "_" + type, { type: type, value: data, data: self });
                if (type != "all") {
                    cafe.event.dispatch(self.name + "_all", { type: type, value: data, data: self });
                }
            };
            /**
             * 保存数据
             */
            BaseData.prototype.saveData = function () {
                var self = this;
            };
            BaseData.ALL = "all";
            return BaseData;
        }());
        data_1.BaseData = BaseData;
    })(data = cafe.data || (cafe.data = {}));
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var msg;
    (function (msg_1) {
        var BaseMsg = /** @class */ (function () {
            function BaseMsg() {
            }
            BaseMsg.prototype.getErrorCode = function () {
                return this.error;
            };
            BaseMsg.prototype.getError = function () {
                //			return ErrorUtil.getError(this.ErrorCode);
                return "";
            };
            /**
             *    调用些方法来进行解析，并覆盖ParseBody
             * */
            BaseMsg.prototype.read = function (r) {
                var self = this;
                var b;
                try {
                    b = true;
                    var json = JSON.parse(r);
                    if (json.error != 0) {
                        self.error = json.error;
                        b = false;
                    }
                    else {
                        // for(var s in json["data"]){
                        // 	self[s]=json["data"][s];
                        // }
                        var list = this.getObject();
                        for (var i = 0; i < list.length; i++) {
                            // msg[list[i]]=self[list[i]];
                            self[list[i]] = json["data"][list[i]];
                        }
                    }
                }
                catch (e) {
                    b = false;
                }
                // this.id=byte.readUnsignedShort();//读取id
                // this.error=byte.readUnsignedShort();//读取错误号
                // if(byte.bytesAvailable>0)
                // 	b =this.ParseBody(byte);
                return b;
            };
            BaseMsg.prototype.wirte = function () {
                var self = this;
                try {
                    var msg_2 = {};
                    var list = this.getObject();
                    var isUse = false;
                    for (var i = 0; i < list.length; i++) {
                        if (self[list[i]] || self[list[i]] == 0) {
                            msg_2[list[i]] = self[list[i]];
                            isUse = true;
                        }
                    }
                    if (!isUse)
                        return false;
                    self.toMsg = msg_2;
                    self.toMsgString = JSON.stringify(msg_2);
                }
                catch (e) {
                    return false;
                }
                return true;
            };
            BaseMsg.prototype.toData = function (data) {
                var self = this;
                try {
                    // let msg={};
                    var list = this.getObject();
                    var isUse = false;
                    for (var i = 0; i < list.length; i++) {
                        if (self[list[i]] || self[list[i]] == 0) {
                            data[list[i]] = self[list[i]];
                            isUse = true;
                        }
                    }
                    if (!isUse)
                        return false;
                }
                catch (e) {
                    return false;
                }
                return true;
            };
            BaseMsg.prototype.getObject = function () {
                return null;
            };
            return BaseMsg;
        }());
        msg_1.BaseMsg = BaseMsg;
    })(msg = cafe.msg || (cafe.msg = {}));
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var proxy;
    (function (proxy) {
        var BaseProxy = /** @class */ (function () {
            // protected var connect:ServerConnector = ServerConnector.instance;
            function BaseProxy(name) {
                // CONFIG::debug{assert(getProxy(name) == null, name + " 代理已经存在，不可以再次实例化");}
                this.name = name;
            }
            BaseProxy.prototype.register = function () {
            };
            // /** 创建简易的cmd **/
            // public static creatEasyCmd(TYPEID:number,argu:number=0): any
            // {
            //     // var ba:ByteArray = new ByteArray();
            //     // ba.endian = Endian.LITTLE_ENDIAN;
            //     // ba.writeShort(TYPEID);
            //     // ba.writeShort(argu);
            //     return ba;
            // }
            // public static getTypeId(ba:any):number
            // {
            //     ba.position = 0;
            //     return ba.readInt();	
            // }
            BaseProxy.prototype.dispose = function () {
            };
            return BaseProxy;
        }());
        proxy.BaseProxy = BaseProxy;
    })(proxy = cafe.proxy || (cafe.proxy = {}));
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var sql;
    (function (sql) {
        var BaseSQL = /** @class */ (function () {
            function BaseSQL(name) {
                this.isLocalData = false;
                var self = this;
                self.invalidates = [];
                self.handlers = [];
                self._sql = {};
                self.sqlname = name;
                self.initSQL();
            }
            BaseSQL.prototype.initSQL = function () {
                var self = this;
                var list = self.changeType();
                for (var i = 0; i < list.length; i++) {
                    var type = list[i];
                    self._sql[type] = self.read(i);
                }
            };
            BaseSQL.prototype.connect = function (handler) {
                var self = this;
                if (!handler) {
                    serror("连接失败，没有传回调");
                    return;
                }
                self.handlers[self.handlers.length] = handler;
                self.connectRef(handler);
            };
            BaseSQL.prototype.connectRef = function (handler) {
            };
            BaseSQL.prototype.invalidate = function (params, changeType) {
                if (changeType === void 0) { changeType = 0; }
                var self = this;
                // var change=self.changeType()[changeType];
                var index = self.invalidates.indexOf(changeType);
                if (index == -1) {
                    self.invalidates[self.invalidates.length] = changeType;
                }
                for (var i = 0; i < self.handlers.length; i++) {
                    var handler = self.handlers[i];
                    handler.runWith(params);
                }
            };
            BaseSQL.prototype.save = function (changeType) {
                if (changeType === void 0) { changeType = 0; }
                var self = this;
                var change = self.changeType()[changeType];
                localSaveJson(self.sqlname + "_" + change, self._sql[change]);
                self.invalidates = [];
            };
            BaseSQL.prototype.changeType = function () {
                return ["all"];
            };
            BaseSQL.prototype.read = function (changeType) {
                if (changeType === void 0) { changeType = 0; }
                var self = this;
                var change = self.changeType()[changeType];
                return localReadJson(self.sqlname + "_" + change);
            };
            return BaseSQL;
        }());
        sql.BaseSQL = BaseSQL;
    })(sql = cafe.sql || (cafe.sql = {}));
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var table;
    (function (table) {
        var BaseTable = /** @class */ (function () {
            function BaseTable(name) {
                this.exist = false;
                this.name = name;
            }
            BaseTable.prototype.exp = function (src, type) {
                var self = this;
                switch (type) {
                    case 0:
                        self.path = cafe.table_path + src;
                        self.ext = ".json";
                        self.dejson();
                        self.exist = true;
                        break;
                    default:
                        break;
                }
            };
            BaseTable.prototype.dejson = function () {
                var self = this;
                if (cafe.isZip) {
                    var json = cafe.app.zip.file(self.path + self.ext).asText();
                    this._tb = window["JSON"]["parse"](json);
                }
                else {
                    // cafe.com.io.readFile(self.path+self.ext).then(target=>{
                    this._tb = Laya.loader.getRes(self.path + self.ext);
                    // }).start();
                }
            };
            BaseTable.prototype.tb = function () {
                return this._tb;
            };
            return BaseTable;
        }());
        table.BaseTable = BaseTable;
    })(table = cafe.table || (cafe.table = {}));
})(cafe || (cafe = {}));
// export default class BaseTemp{
//     // public NAME:string;
//     constructor(){
//         let self=this;
//         // self.NAME=name;
//     }
// }
var cafe;
(function (cafe) {
    var temp;
    (function (temp) {
        var BaseTemp = /** @class */ (function () {
            function BaseTemp(name) {
                this.NAME = "";
                var self = this;
                self.NAME = name;
            }
            return BaseTemp;
        }());
        temp.BaseTemp = BaseTemp;
    })(temp = cafe.temp || (cafe.temp = {}));
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var config;
    (function (config_1) {
        function init(systems) {
            window["systems"] = systems;
        }
        config_1.init = init;
        /* 注册数据进来，统一管理
         * @param data
         *
         */
        function reg(config) {
            if (!window["systems"])
                window["systems"] = {};
            // CONFIG::debug{assert(_datas[data.name] == null, "数据" + data.name +"重复注册了！");}
            if (window["systems"][config.name] == null)
                window["systems"][config.name] = config.table();
        }
        config_1.reg = reg;
    })(config = cafe.config || (cafe.config = {}));
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var data;
    (function (data_2) {
        var _datas = {};
        /* 注册数据进来，统一管理
         * @param data
         *
         */
        function reg(data) {
            // CONFIG::debug{assert(_datas[data.name] == null, "数据" + data.name +"重复注册了！");}
            if (_datas[data.name] == null) {
                _datas[data.name] = data;
            }
            return data;
        }
        data_2.reg = reg;
        /**
         * 反注册数据，会进行销毁
         * @param data
         *
         */
        function del(name) {
            if (_datas[name] != null)
                delete _datas[name];
            return null;
        }
        data_2.del = del;
        // export function install()
        /**
         * 根据名字快速获取数据实例
         * @param name
         * @return
         *
         */
        function get(name) {
            //			CONFIG::debug{assert(_datas[name] != null, "没有名字为:" + name + "的数据！");}
            return _datas[name];
        }
        data_2.get = get;
        /**
         * 判断是否存在指定名字的数据实例
         * @param name
         * @return
         *
         */
        function has(name) {
            return _datas[name] != null ? true : false;
        }
        data_2.has = has;
        /**
         * 绑定数据，该数据的所有可能类型的更新会自动
         * @param name
         * @param func
         * @param changeType
         *
         */
        function on(name, func, target, changeType, isInitInvalidate) {
            if (changeType === void 0) { changeType = "all"; }
            if (isInitInvalidate === void 0) { isInitInvalidate = true; }
            // CONFIG::debug{assert(hasData(name), "要绑定的名字为" + name + "的数据并不存在！");}
            cafe.event.on(name + "_" + changeType, func, target);
            //如果数据已经初始化完毕，则注册的时候立即派发一个数据改变给该监听
            var data = get(name);
            if (isInitInvalidate) {
                call([target, func], data);
            }
        }
        data_2.on = on;
        /**
         * 解绑某数据
         * @param name
         * @param func
         *
         */
        function off(name, func, target, changeType) {
            if (changeType === void 0) { changeType = "all"; }
            cafe.event.off(name + "_" + changeType, func, target);
        }
        data_2.off = off;
    })(data = cafe.data || (cafe.data = {}));
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var event;
    (function (event) {
        var _evts = {};
        var eid = 0;
        function on(type, handler, target, priority, isActive) {
            if (priority === void 0) { priority = 3; }
            if (isActive === void 0) { isActive = true; }
            if (!_evts[type]) {
                _evts[type] = [];
            }
            var gid = cafe.getid(target); // (target["$_eid"] || (target["$_eid"]=eid++));
            var obj = _evts[type].filter(function (a) { return a.gid == gid; })[0];
            if (!obj) {
                obj = { handler: [target, handler], gid: gid, priority: priority, isActive: isActive };
                _evts[type].push(obj);
            }
            _evts[type].sort(function (a, b) {
                return a.priority - b.priority;
            });
        }
        event.on = on;
        function setActiveState(type, handler, target, isActive) {
            var gid = cafe.getid(target);
            if (_evts[type]) {
                var obj = _evts[type].filter(function (a) { return a.gid == gid; })[0];
                if (obj) {
                    obj.isActive = isActive;
                }
            }
        }
        event.setActiveState = setActiveState;
        function off(type, handler, target) {
            var gid = cafe.getid(target);
            if (_evts[type]) {
                var objs = _evts[type].filter(function (a) { return a.gid == gid; });
                for (var i = 0; i < objs.length; i++) {
                    var obj = objs[i];
                    if (obj) {
                        var index = _evts[type].indexOf(obj);
                        if (index != -1) {
                            _evts[type].splice(index, 1);
                        }
                    }
                }
            }
        }
        event.off = off;
        function dispatch(type, data) {
            var arr = _evts[type];
            if (arr) {
                for (var i = 0; i < arr.length; i++) {
                    var obj = arr[i];
                    obj.isActive && call(obj.handler, data);
                }
            }
        }
        event.dispatch = dispatch;
    })(event = cafe.event || (cafe.event = {}));
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var global;
    (function (global) {
        var values;
        /**
         * install
         */
        function install() {
            values = {};
        }
        global.install = install;
        /**
         * reg
         * @param dataname string
         * @param target any
         * @param valuename string
         */
        function reg(dataname, target, valuename) {
            values[dataname] = { target: target, valuename: valuename };
        }
        global.reg = reg;
        /**
         * get
         * @param dataname string
         */
        function get(dataname) {
            var data = values[dataname];
            if (!data.target)
                return null;
            var value = data.target[data.valuename];
            return value;
        }
        global.get = get;
        /**
         * get
         * @param dataname string
         * @param value any
         */
        function set(dataname, value) {
            var data = values[dataname];
            if (!data.target)
                return;
            data.target[data.valuename] = value;
        }
        global.set = set;
    })(global = cafe.global || (cafe.global = {}));
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var mount;
    (function (mount) {
        var _mounts = {};
        var _mountEvts = {};
        var _prioritys = {};
        var _list = [];
        function mountOn(type, handler, target) {
            if (!_mounts[type]) {
                _mounts[type] = {};
            }
            var gid = cafe.getid(target);
            if (!_mounts[type][gid]) {
                _mounts[type][gid] = [target, handler];
            }
        }
        mount.mountOn = mountOn;
        function reg(type, priority) {
            _prioritys[type] = priority;
        }
        mount.reg = reg;
        function mountOff(type, handler, target) {
            var gid = cafe.getid(target);
            if (_mounts[type] && _mounts[type][gid]) {
                delete _mounts[type][gid];
            }
        }
        mount.mountOff = mountOff;
        function mountCapture(type, data) {
            var obj = _mounts[type];
            // var isTrue=true;
            for (var s in obj) {
                if (!call(obj[s], data)) {
                    return false;
                }
            }
            return true;
        }
        mount.mountCapture = mountCapture;
        function on(type, handler, target) {
            if (!_mountEvts[type]) {
                _mountEvts[type] = {};
            }
            var gid = cafe.getid(target); // (target["$_eid"] || (target["$_eid"]=eid++));
            if (!_mountEvts[type][gid]) {
                _mountEvts[type][gid] = [target, handler];
            }
        }
        mount.on = on;
        function off(type, handler, target) {
            var gid = cafe.getid(target);
            if (_mountEvts[type] && _mountEvts[type][gid]) {
                delete _mountEvts[type][gid];
            }
        }
        mount.off = off;
        function mountEvtLength(type) {
            var num = 0;
            for (var s in _mountEvts[type]) {
                num++;
            }
            return num;
        }
        mount.mountEvtLength = mountEvtLength;
        function dispatch(type, data) {
            // for(var i=0;i<types.length;i++){
            //     var type=types[i];
            var obj = _mounts[type];
            if (mountEvtLength(type) > 0) {
                _list.push({ type: type, priority: _prioritys[type], time: new Date().valueOf(), data: data });
            }
            // }
            _list.sort(function (a, b) {
                if (a.priority < b.priority) {
                    return -1;
                }
                else if (a.priority > b.priority) {
                    return 1;
                }
                if (a.time < b.time) {
                    return -1;
                }
                else if (a.time > b.time) {
                    return 1;
                }
                return 0;
            });
        }
        mount.dispatch = dispatch;
        function execute() {
            if (_list.length <= 0)
                return;
            var evtdata = _list[0];
            if (!mountCapture(evtdata.type, evtdata.data))
                return;
            _list.shift();
            var obj = _mountEvts[evtdata.type];
            for (var s in obj) {
                call(obj[s], evtdata.data);
            }
        }
        mount.execute = execute;
    })(mount = cafe.mount || (cafe.mount = {}));
})(cafe || (cafe = {}));
/**
 * 收到服务器的数据包派发的信息
 */
var cafe;
(function (cafe) {
    var msg;
    (function (msg_3) {
        var _socket;
        var _protos = {};
        function initSocket(socket) {
            _socket = socket;
        }
        msg_3.initSocket = initSocket;
        function reg(proto, target, func, mType) {
            if (mType === void 0) { mType = null; }
            if (_protos[proto] != null)
                return false;
            var protoData = {};
            // protoData.target = target;
            protoData.func = [target, func];
            protoData.mType = mType;
            _protos[proto] = protoData;
            _socket["on"](proto, function (data) {
                serror("收到协议：", proto);
                domsg(proto, data);
                // if(args.length==1 && typeof args[0]=="function"){
                // 	args[0](data);
                // }else if(args.length==2 && typeof args[1]=="function"){
                // 	args[1].apply(args[0],data);
                // }
                // if(data && data["panel"])Gbs.open(data["panel"],data);
            });
            return true;
        }
        msg_3.reg = reg;
        function del(proto) {
            _protos[proto] = null;
        }
        msg_3.del = del;
        function domsg(proto, msg) {
            // var proto:number = msg.proto;
            // if (BaseParams.isShowCmdAndMsg)
            // 	log("get msg:" + proto);
            if (_protos[proto] == null) {
                trace("ID为" + proto + "的消息找不到对应的类处理");
                return false;
            }
            var m = null;
            var cls = _protos[proto].mType;
            if (cls != null)
                m = new cls();
            if (m != null && !m.read(msg)) {
                // trace("DoMsg::!m.Read(msg):" + proto + ":" + msg.bytesAvailable);
                return false;
            }
            // if (msg.bytesAvailable)
            // {
            // 	trace("DoMsg::msg.bytesAvailable:" + proto);
            // 	return false;
            // }
            // CONFIG::debug
            // {
            // 	trace("收到协议: ",proto);
            // }
            if (m == null) {
                _protos[proto].func[1].apply(_protos[proto].func[0]);
            }
            else {
                call(_protos[proto].func, m);
            }
            return true;
        }
        msg_3.domsg = domsg;
    })(msg = cafe.msg || (cafe.msg = {}));
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var proxy;
    (function (proxy_1) {
        var _proxys = {};
        function addAll() {
            for (var s in _proxys) {
                _proxys[s].register();
            }
        }
        proxy_1.addAll = addAll;
        function removeAll() {
            for (var s in _proxys) {
                _proxys[s].dispose();
            }
        }
        proxy_1.removeAll = removeAll;
        function reg(proxy) {
            // CONFIG::debug{assert(_proxys[proxy.name] == null, "代理" + proxy.name +"重复注册了！");}
            if (_proxys[proxy.name] == null)
                _proxys[proxy.name] = proxy;
        }
        proxy_1.reg = reg;
        function get(name) {
            return _proxys[name];
        }
        proxy_1.get = get;
        function has(name) {
            return (_proxys[name] != null);
        }
        proxy_1.has = has;
        function del(proxy) {
            if (_proxys[proxy.name] != null)
                delete _proxys[proxy.name];
        }
        proxy_1.del = del;
    })(proxy = cafe.proxy || (cafe.proxy = {}));
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var sql;
    (function (sql_1) {
        var sqls;
        function init() {
            sqls = {};
            Laya.stage.timerLoop(5000, null, checkSQLChange);
        }
        sql_1.init = init;
        function reg(sql) {
            sqls[sql.sqlname] = sql;
            return sql;
        }
        sql_1.reg = reg;
        function checkSQLChange() {
            for (var s in sqls) {
                var sql = sqls[s];
                var length = sql.invalidates.length;
                for (var i = 0; i < length; i++) {
                    var type = sql.invalidates[i];
                    sql.save();
                }
                sql.invalidates = [];
            }
        }
        sql_1.checkSQLChange = checkSQLChange;
    })(sql = cafe.sql || (cafe.sql = {}));
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var table;
    (function (table_1) {
        // export var tbs:any;
        function init(tb) {
            window["tbs"] = tb;
        }
        table_1.init = init;
        /* 注册数据进来，统一管理
         * @param data
         *
         */
        function reg(table) {
            // CONFIG::debug{assert(_datas[data.name] == null, "数据" + data.name +"重复注册了！");}
            if (!window["tbs"])
                window["tbs"] = {};
            if (window["tbs"][table.name] == null)
                window["tbs"][table.name] = table;
        }
        table_1.reg = reg;
    })(table = cafe.table || (cafe.table = {}));
})(cafe || (cafe = {}));
var cafe;
(function (cafe) {
    var temp;
    (function (temp_1) {
        var temps;
        var tempTxt;
        function install() {
            tempTxt = {};
            temps = {};
        }
        temp_1.install = install;
        function reg(value) {
            temps[value.NAME] = value;
        }
        temp_1.reg = reg;
        function setTxtValue(paramsCmd, value) {
            var self = this;
            var params = paramsCmd.split("_");
            temps[params[0]][params[1]] = String(value);
        }
        temp_1.setTxtValue = setTxtValue;
        function addTxtValue(paramsCmd, value) {
            var self = this;
            var params = paramsCmd.split("_");
            var num = Number(temps[params[0]][params[1]]);
            num += Number(value);
            temps[params[0]][params[1]] = num.toString();
        }
        temp_1.addTxtValue = addTxtValue;
        function getValue(paramsCmd) {
            var params = paramsCmd.split("_");
            return temps[params[0]][params[1]];
        }
        function binTxt(paramsCmd, target) {
            var id = cafe.getid(target);
            if (!tempTxt[paramsCmd])
                tempTxt[paramsCmd] = {};
            tempTxt[paramsCmd][id] = target;
            var cmdlist = paramsCmd.split("_");
            if (cmdlist[0] == "temp") {
                target.text = getValue(cmdlist[1] + "_" + cmdlist[2]);
                // target.text=MoneyUtils.getMoney(getValue(cmdlist[1]+"_"+cmdlist[2]));
            }
        }
        temp_1.binTxt = binTxt;
        function unbinTxt(paramsCmd, target) {
            var id = cafe.getid(target);
            if (!tempTxt[paramsCmd])
                tempTxt[paramsCmd] = {};
            delete tempTxt[paramsCmd][id];
        }
        temp_1.unbinTxt = unbinTxt;
        function dispatchTxt(cmd_value, value) {
            if (!tempTxt[cmd_value])
                return;
            for (var s in tempTxt[cmd_value]) {
                var temp_2 = tempTxt[cmd_value][s];
                // if(typeof value =="number"){
                //     // temp.text=MoneyUtils.getMoney(value);
                // }else{
                // }
                if (typeof value == "number") {
                    // temp.text=MoneyUtils.getMoney(value);
                }
                else {
                    temp_2.text = value;
                }
            }
        }
        temp_1.dispatchTxt = dispatchTxt;
    })(temp = cafe.temp || (cafe.temp = {}));
})(cafe || (cafe = {}));
/**节能A点到B点的角度 */
window["getPosToAngle"] = function (startPos, endPos, isangle) {
    if (isangle === void 0) { isangle = false; }
    var xDis = endPos.x - startPos.x;
    var yDis = endPos.y - startPos.y;
    var angle = window["Math"]["atan2"](yDis, xDis);
    if (isangle) {
        angle = Math.round(angle * 180 / Math.PI) + 90;
    }
    return angle;
};
/**节能A点到B点的距离 */
window["getDistance"] = function (one, two) {
    var heroX = one.x;
    var heroY = one.y;
    var thingX = two.x;
    var thingY = two.y;
    var xDis = window["Math"]["abs"](heroX - thingX);
    var yDis = window["Math"]["abs"](heroY - thingY);
    var hero2ThingDis = window["Math"]["sqrt"](xDis * xDis + yDis * yDis);
    return hero2ThingDis;
};
window["getAngleToAngleE"] = function (angle) {
    return angle * Math.PI / 180;
};
window["getAngleEToAngle"] = function (angleE) {
    return (angleE - 90) * Math.PI / 180;
};
window["getPosToAngleAndDistance"] = function (one, two, angleE) {
    if (angleE === void 0) { angleE = 0; }
    var heroX = one.x;
    var heroY = one.y;
    var thingX = two.x;
    var thingY = two.y;
    var xDis = window["Math"]["abs"](heroX - thingX);
    var yDis = window["Math"]["abs"](heroY - thingY);
    var distance = window["Math"]["sqrt"](xDis * xDis + yDis * yDis);
    // var xDis: number = ;
    // var yDis: number = endPos.y - startPos.y;
    var angle = window["Math"]["atan2"](two.y - one.y, two.x - one.x);
    angle += getAngleToAngleE(angleE);
    return { d: distance, a: angle };
};
window["getDistanceAngleEToPos"] = function (pos, distance, angleE) {
    var pos1 = {};
    var angle = (angleE - 90) * Math.PI / 180;
    pos1.x = pos.x + distance * window["Math"]["cos"](angle);
    pos1.y = pos.y + distance * window["Math"]["sin"](angle);
    return pos1;
};
window["getDistanceAngleToPos"] = function (pos, distance, angle) {
    var pos1 = {};
    pos1.x = pos.x + distance * window["Math"]["cos"](angle);
    pos1.y = pos.y + distance * window["Math"]["sin"](angle);
    return pos1;
};
window["getATBNextDistance"] = function (one, two, distance, isMaxDistance) {
    if (isMaxDistance === void 0) { isMaxDistance = false; }
    var pos = {};
    var xDis = window["Math"]["abs"](one.x - two.x);
    var yDis = window["Math"]["abs"](one.y - two.y);
    var currDistance = window["Math"]["sqrt"](xDis * xDis + yDis * yDis);
    if (!isMaxDistance && currDistance <= distance) {
        return two;
    }
    xDis = two.x - one.x;
    yDis = two.y - one.y;
    var angle = window["Math"]["atan2"](yDis, xDis);
    pos.x = one.x + distance * window["Math"]["cos"](angle);
    pos.y = one.y + distance * window["Math"]["sin"](angle);
    return pos;
};
window["getFishData"] = function (one, two, distance) {
    var pos = {};
    var xDis = two.x - one.x;
    var yDis = two.y - one.y;
    var angle = window["Math"]["atan2"](yDis, xDis);
    pos.x = one.x + distance * window["Math"]["cos"](angle);
    pos.y = one.y + distance * window["Math"]["sin"](angle);
    var heroX = one.x;
    var heroY = one.y;
    var thingX = two.x;
    var thingY = two.y;
    xDis = window["Math"]["abs"](heroX - thingX);
    yDis = window["Math"]["abs"](heroY - thingY);
    var todistance = window["Math"]["sqrt"](xDis * xDis + yDis * yDis);
    return { angle: Math.round(angle * 180 / Math.PI), toDistance: todistance, pos: pos };
};
/**相对于舞台的y坐标*/
window["abs"] = function (target) {
    var box = target;
    var y = 0;
    var x = 0;
    var istrue = false;
    while (box != null) {
        if (istrue) {
            y += box.y - box.pivotY;
            x += box.x - box.pivotX;
        }
        else {
            y += box.y;
            x += box.x;
        }
        // box=box.parent;
        istrue = true;
    }
    return { x: x, y: y };
};
window["AREA"] = function (a, r1, b, r2) {
    var d = Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
    if (d >= r1 + r2)
        return 0;
    if (r1 > r2) {
        var tmp = r1;
        r1 = r2;
        r2 = tmp;
    }
    if (r2 - r1 >= d)
        return Math.PI * r1 * r1;
    var ang1 = Math.acos((r1 * r1 + d * d - r2 * r2) / (2 * r1 * d));
    var ang2 = Math.acos((r2 * r2 + d * d - r1 * r1) / (2 * r2 * d));
    return ang1 * r1 * r1 + ang2 * r2 * r2 - r1 * d * Math.sin(ang1);
};
// window["getPosToAngle"] = function circleAndRectHit(circle:Circle, rect:Rect)
// {
//     //圆的半径
//     var radius = circle.r;
//     //圆形中心与矩形中心的相对坐标
//     var x = circle.x - rect.x;
//     var y = circle.y - rect.y;
//     var minX = Math.min(x, rect.w/2);
//     var maxX = Math.max(minX, -rect.w/2);
//     var minY = Math.min(y, rect.h/2);
//     var maxY = Math.max(minY, -rect.h/2);
//     if((maxX - x) * (maxX - x) + (maxY - y) * (maxY - y) <= radius * radius)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
window["DistanceBetweenTwoPoints"] = function (x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
};
// 计算点(x, y)到经过两点(x1, y1)和(x2, y2)的直线的距离
window["DistanceFromPointToLine"] = function (x, y, x1, y1, x2, y2) {
    var a = y2 - y1;
    var b = x1 - x2;
    var c = x2 * y1 - x1 * y2;
    // assert(fabs(a) > 0.00001f || fabs(b) > 0.00001f);
    return Math.abs(a * x + b * y + c) / Math.sqrt(a * a + b * b);
};
// 圆与矩形碰撞检测
// 圆心(x, y), 半径r, 矩形中心(x0, y0), 矩形上边中心(x1, y1), 矩形右边中心(x2, y2)
window["IsCircleIntersectRectangle"] = function (x, y, r, x0, y0, x1, y1, x2, y2) {
    var w1 = DistanceBetweenTwoPoints(x0, y0, x2, y2);
    var h1 = DistanceBetweenTwoPoints(x0, y0, x1, y1);
    var w2 = DistanceFromPointToLine(x, y, x0, y0, x1, y1);
    var h2 = DistanceFromPointToLine(x, y, x0, y0, x2, y2);
    if (w2 > w1 + r)
        return false;
    if (h2 > h1 + r)
        return false;
    if (w2 <= w1)
        return true;
    if (h2 <= h1)
        return true;
    return (w2 - w1) * (w2 - w1) + (h2 - h1) * (h2 - h1) <= r * r;
};
window["isHeroCircleInRect"] = function (pos, Ro, Ra, Rb, angle) {
    var ox = Ro.x;
    var oy = Ro.y - Rb;
    var ax = Ro.x;
    var ay = oy - Rb;
    var bx = Ro.x + Ra;
    var by = oy;
    // serror("pos:",pos.x,pos.y," yb:",ox,oy,ax,ay,bx,by);
    var od = getDistance(Ro, { x: ox, y: oy });
    var oa = getPosToAngle(Ro, { x: ox, y: oy });
    var ad = getDistance(Ro, { x: ax, y: ay });
    var aa = getPosToAngle(Ro, { x: ax, y: ay });
    var bd = getDistance(Ro, { x: bx, y: by });
    var ba = getPosToAngle(Ro, { x: bx, y: by });
    // serror("ya:",oa,aa,ba);
    var o = getDistanceAngleToPos(Ro, od, oa + angle);
    var a = getDistanceAngleToPos(Ro, ad, aa + angle);
    var b = getDistanceAngleToPos(Ro, bd, ba + angle);
    return IsCircleIntersectRectangle(pos.x, pos.y, 0.01, o.x, o.y, a.x, a.y, b.x, b.y);
};
window["absHitRect"] = function (target, toTarget) {
    var rects = target.hitArea;
    if (!(rects instanceof Array)) {
        rects = [rects];
    }
    var points = [];
    for (var i = 0; i < rects.length; i++) {
        var rect = rects[i];
        var a = new Laya.Point(rect.x, rect.y);
        var b = new Laya.Point(rect.width, rect.y);
        var c = new Laya.Point(rect.x, rect.height);
        var d = new Laya.Point(rect.width, rect.height);
        points[points.length] = toTarget.globalToLocal(target.localToGlobal(a));
        points[points.length] = toTarget.globalToLocal(target.localToGlobal(b));
        points[points.length] = toTarget.globalToLocal(target.localToGlobal(c));
        points[points.length] = toTarget.globalToLocal(target.localToGlobal(d));
    }
    var area = toTarget.hitArea;
    if (!(area instanceof Array)) {
        area = [area];
    }
    for (var i = 0; i < area.length; i++) {
        var o = area[i];
        if (o.width <= 0 || o.height <= 0)
            continue;
        // var tl=[a,b,c,d];
        for (var j = 0; j < points.length; j++) {
            var p = points[j];
            if (p.x >= o.x && p.x < o.right) {
                if (p.y >= o.y && p.y < o.bottom) {
                    return true;
                }
            }
        }
        continue;
    }
    return false;
};
window["trace"] = function (text) {
    cafe["trace"](text);
};
window["slog"] = function () {
    var args = [];
    for (var _a = 0; _a < arguments.length; _a++) {
        args[_a] = arguments[_a];
    }
    if (cafe.logType != 1)
        return;
    window["console"]["log"](window["JSON"]["stringify"](args));
};
window["clog"] = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (cafe.logType != 1)
        return;
    window["console"]["log"](args);
};
window["serror"] = function () {
    var args = [];
    for (var _a = 0; _a < arguments.length; _a++) {
        args[_a] = arguments[_a];
    }
    if (cafe.logType == 0)
        return;
    if (cafe.logType == 1) {
        // window["console"]["error"](window["JSON"]["stringify"](args));
        window["console"]["error"](args);
        // G.trace.apply(null,window["JSON"]["stringify"](args));
    }
    else if (cafe.logType == 2) {
        window["console"]["error"](args);
        // G.trace.apply(null,window["JSON"]["stringify"](args));
    }
};
window["syslog"] = function () {
    var args = [];
    for (var _a = 0; _a < arguments.length; _a++) {
        args[_a] = arguments[_a];
    }
    if (cafe.logType == 0)
        return;
    if (cafe.logType == 1) {
        window["console"]["warn"](window["JSON"]["stringify"](args));
    }
    else if (cafe.logType == 2) {
        window["console"]["warn"](args);
        // G.trace["apply"](null,window["JSON"]["stringify"](args));
    }
};
window["call"] = function (foo, param) {
    if (!foo)
        return null;
    if (param != null) {
        foo = foo.slice(0);
        foo.push(param);
    }
    if (isFunction(foo[0])) {
        return foo[0].apply(null, foo.slice(1));
    }
    else if (isClass(foo[0])) {
        // return foo[1](foo[0], foo.slice(2));
        return new foo[0](foo[1], foo[2], foo[3], foo[4], foo[5]);
    }
    else if (isString(foo[1])) {
        foo[0][foo[1]] = foo[2];
    }
    else if (isFunction(foo[1])) {
        return foo[1].apply(foo[0], foo.slice(2));
    }
};
/**字符串转json*/
window["dejson"] = function (str) {
    try {
        return window["JSON"]["parse"](str);
    }
    catch (e) {
        return null;
    }
};
/**json转字符串*/
window["enjson"] = function (obj) {
    try {
        return window["JSON"]["stringify"](obj);
    }
    catch (e) { }
    return null;
};
/**转换为整数*/
window["int"] = function (v) {
    if (!v)
        return 0;
    var n = v * 1;
    if (window["isNaN"](n))
        return 0;
    if (n >= 0)
        return Math.floor(n);
    return Math.ceil(n);
};
/**是否字符串*/
window["isString"] = function (v) {
    return typeof (v) == "string";
};
/**是否数字*/
window["isNumber"] = function (v) {
    return v == true || v == false || typeof (v) == "number";
};
/**是否数组*/
window["isArray"] = function (v) {
    return v instanceof Array;
};
/**是否函数对象*/
window["isFunction"] = function (v) {
    return typeof (v) == "function" && !v["__className"];
};
/**是否类对象*/
window["isClass"] = function (v) {
    return typeof (v) == "function" && v["__className"] && v["prototype"] ? true : false;
};
window["localRead"] = function (type) {
    return Laya.LocalStorage.getItem(cafe.game_id + "_" + cafe.game_tag + "_" + type);
};
window["localSave"] = function (type, content) {
    Laya.LocalStorage.setItem(cafe.game_id + "_" + cafe.game_tag + "_" + type, content);
};
window["localReadJson"] = function (type) {
    return Laya.LocalStorage.getJSON(cafe.game_id + "_" + cafe.game_tag + "_" + type);
};
window["localSaveJson"] = function (type, data) {
    Laya.LocalStorage.setJSON(cafe.game_id + "_" + cafe.game_tag + "_" + type, data);
};
window["httpGetText"] = function (url, response, error, process) {
    var _http = new laya.net.HttpRequest();
    function err(e) {
        error && error(e);
    }
    function success(res) {
        response && response(res);
    }
    _http.once(Laya.Event.COMPLETE, _http, success);
    _http.once(Laya.Event.ERROR, _http, err);
    if (process) {
        _http.on(Laya.Event.PROGRESS, _http, process);
    }
    _http.send(url, null, "get", "text", ["Content-type", "application/x-www-form-urlencoded"]);
};
window["httpGetJson"] = function (url, response, error, process) {
    var _http = new laya.net.HttpRequest();
    function err(e) {
        error && error(e);
    }
    function success(res) {
        response && response(res);
    }
    _http.once(Laya.Event.COMPLETE, _http, success);
    _http.once(Laya.Event.ERROR, _http, err);
    if (process) {
        _http.on(Laya.Event.PROGRESS, _http, process);
    }
    _http.send(url, null, "get", "json", ["Content-type", "application/json"]);
};
window["httpPostText"] = function (url, params, response, error, process) {
    var _http = new laya.net.HttpRequest();
    function err(e) {
        error && error(e);
    }
    function success(res) {
        response && response(res);
    }
    _http.once(Laya.Event.COMPLETE, _http, success);
    _http.once(Laya.Event.ERROR, _http, err);
    if (process) {
        _http.on(Laya.Event.PROGRESS, _http, process);
    }
    _http.send(url, params, "post", "text", ["Content-type", "application/x-www-form-urlencoded"]);
};
window["httpPostJson"] = function (url, json, response, error, process) {
    var _http = new laya.net.HttpRequest();
    function err(e) {
        error && error(e);
    }
    function success(res) {
        response && response(res);
    }
    _http.once(Laya.Event.COMPLETE, _http, success);
    _http.once(Laya.Event.ERROR, _http, err);
    if (process) {
        _http.on(Laya.Event.PROGRESS, _http, process);
    }
    _http.send(url, json, "post", "json", ["Content-type", "application/json"]);
};
window["handlercreate"] = function (caller, method, args, once) {
    if (Laya.Handler["_pool"].length)
        return Laya.Handler["_pool"].shift().setTo(caller, method, args, once);
    return new Laya.Handler(caller, method, args, once);
};
window["cafe"] = cafe;
//# sourceMappingURL=cafe.js.map
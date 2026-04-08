window.GAMEDATA = "";
window.showUIFlag = false;
window.aCode = false;
window.sCode = false;
window.dCode = false;
window.wCode = false;
(function () {
	'use strict';

	var Scene = Laya.Scene;
	var REG = Laya.ClassUtils.regClass;
	var ui;
	(function (ui) {
		var test;
		(function (test) {
			class GameSceneUI extends Scene {
				constructor() {
					super();
				}
				createChildren() {
					super.createChildren();
					this.loadScene('test/GameScene');
				}
			}
			test.GameSceneUI = GameSceneUI;
			REG('ui.test.GameSceneUI', GameSceneUI);
		})((test = ui.test || (ui.test = {})));
	})(ui || (ui = {}));

	class Dictionary extends Object {
		constructor() {
			super();
		}
	}

	class I18nResource {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.msg = byteArray.readUTFString();
			this.itemid = byteArray.readUTFString();
			this.icon = byteArray.readUTFString();
			this.txt = byteArray.readUTFString();
			this.gettype = byteArray.readUint8();
			this.type = byteArray.readUint8();

            let items = GAMEDATA.I18nResource;
            items.forEach(item => {
                if(this.id == item.id) {
                    this.msg = item.msg;
                    this.txt = item.txt;
                }
            });
		}
		static getItemByKey(id) {
			return I18nResource.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return I18nResource.itemsDic[key1 + ',' + key2];
		}
	}
	I18nResource.items = new Array();
	I18nResource.itemsDic = new Dictionary();

	class ConfigLib {
		constructor() {}
		static ReadArray(byte) {
			var length = byte.readUint8();
			if (length == 0) {
				return [];
			}
			var isHasNext = byte.readByte() == 1;
			var splitArr = new Array(length);
			for (var i = 0; i < length; i++) {
				if (isHasNext) {
					splitArr[i] = this.ReadArray(byte);
				} else {
					splitArr[i] = byte.readUTFString();
				}
			}
			return splitArr;
		}
	}

	class AdResource {
		constructor() {}
		parseItem(byteArray) {
			this.platform = byteArray.readUTFString();
			this.id = byteArray.readUint8();
			this.type = byteArray.readUint8();
			this.result0 = ConfigLib.ReadArray(byteArray);
			this.result1 = ConfigLib.ReadArray(byteArray);
			this.result2 = ConfigLib.ReadArray(byteArray);
			this.result3 = ConfigLib.ReadArray(byteArray);
			this.result4 = ConfigLib.ReadArray(byteArray);
			this.result5 = ConfigLib.ReadArray(byteArray);
			this.result6 = ConfigLib.ReadArray(byteArray);
			this.result7 = ConfigLib.ReadArray(byteArray);
			this.result8 = ConfigLib.ReadArray(byteArray);
			this.result9 = ConfigLib.ReadArray(byteArray);
		}
		static getItemByKey(id) {
			return AdResource.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return AdResource.itemsDic[key1 + ',' + key2];
		}
	}
	AdResource.items = new Array();
	AdResource.itemsDic = new Dictionary();

	class ConfigValue {
		constructor() {}
		parseItem(byteArray) {
			this.work = ConfigLib.ReadArray(byteArray);
			this.key = byteArray.readUTFString();
			this.value = byteArray.readUTFString();
		}
		static getItemByKey(id) {
			return ConfigValue.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return ConfigValue.itemsDic[key1 + ',' + key2];
		}
	}
	ConfigValue.items = new Array();
	ConfigValue.itemsDic = new Dictionary();

	class HardResource {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.Mod = byteArray.readUint8();
			this.speed = byteArray.readUTFString();
			this.Addition = byteArray.readUTFString();
			this.Lock = byteArray.readUint8();
			this.clue = byteArray.readUint8();
			this.HardTxt = byteArray.readUTFString();
			this.name = byteArray.readUTFString();
			this.introduce = byteArray.readUTFString();

            let items = GAMEDATA.HardResource;
            items.forEach(item => {
                if(this.id == item.id) {
                    this.HardTxt = item.HardTxt;
                    this.name = item.name;
                    this.introduce = item.introduce;
                }
            });
		}
		static getItemByKey(id) {
			return HardResource.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return HardResource.itemsDic[key1 + ',' + key2];
		}
	}
	HardResource.items = new Array();
	HardResource.itemsDic = new Dictionary();

	class GametxtResource {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.Type = byteArray.readUint8();
			this.GameStory = byteArray.readUTFString();

            let items = GAMEDATA.GametxtResource;
            items.forEach(item => {
                if(this.id == item.id) {
                    this.GameStory = item.GameStory;
                }
            });
		}
		static getItemByKey(id) {
			return GametxtResource.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return GametxtResource.itemsDic[key1 + ',' + key2];
		}
	}
	GametxtResource.items = new Array();
	GametxtResource.itemsDic = new Dictionary();

	class DayConfig {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.day = byteArray.readUint8();
			this.daypic = byteArray.readUTFString();
			this.daytxt = byteArray.readUTFString();

            let items = GAMEDATA.DayConfig;
            items.forEach(item => {
                if(this.id == item.id) {
                    this.daypic = item.daypic;
                    this.daytxt = item.daytxt;
                }
            });
		}
		static getItemByKey(id) {
			return DayConfig.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return DayConfig.itemsDic[key1 + ',' + key2];
		}
	}
	DayConfig.items = new Array();
	DayConfig.itemsDic = new Dictionary();

	class ItemResource {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.iType = byteArray.readUint8();
			this.Name = byteArray.readUTFString();
			this.Mod = byteArray.readUTFString();
			this.Randomid = byteArray.readUTFString();
			this.rotate = byteArray.readUTFString();
			this.Weight = byteArray.readUTFString();
			this.number = byteArray.readUint8();
			this.Hard = byteArray.readUint8();
			this.handrotate = byteArray.readUTFString();
			this.sacle = byteArray.readUTFString();
			this.drawing = ConfigLib.ReadArray(byteArray);
			this.drawingtxt = ConfigLib.ReadArray(byteArray);
			this.itemtxt = byteArray.readUTFString();

            let items = GAMEDATA.ItemResource;
            items.forEach(item => {
                if(this.id == item.id) {
                    this.Name = item.Name;
                    this.drawingtxt = item.drawingtxt;
                    this.itemtxt = item.itemtxt;
                    this.Randomid = item.Randomid;
                    this.sacle = item.sacle;
                }
            });
		}
		static getItemByKey(id) {
			return ItemResource.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return ItemResource.itemsDic[key1 + ',' + key2];
		}
	}
	ItemResource.items = new Array();
	ItemResource.itemsDic = new Dictionary();

	class MapResource {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint16();
			this.nextid = ConfigLib.ReadArray(byteArray);
			this.high = ConfigLib.ReadArray(byteArray);
			this.rect = ConfigLib.ReadArray(byteArray);
		}
		static getItemByKey(id) {
			return MapResource.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return MapResource.itemsDic[key1 + ',' + key2];
		}
	}
	MapResource.items = new Array();
	MapResource.itemsDic = new Dictionary();

	class NpcBuffResource {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.type = byteArray.readUint8();
			this.buffvalue = byteArray.readUint8();
			this.bufftime = byteArray.readUint8();
		}
		static getItemByKey(id) {
			return NpcBuffResource.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return NpcBuffResource.itemsDic[key1 + ',' + key2];
		}
	}
	NpcBuffResource.items = new Array();
	NpcBuffResource.itemsDic = new Dictionary();

	class Position {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.Position = byteArray.readUTFString();
			this.sure = byteArray.readUint8();
			this.shelter = byteArray.readUint8();
			this.name = byteArray.readUTFString();
			this.tips = byteArray.readUTFString();
			this.txt = byteArray.readUTFString();

            let items = GAMEDATA.Position;
            items.forEach(item => {
                if(this.id == item.id) {
                    this.tips = item.tips;
                    this.txt = item.txt;
                }
            });
		}
		static getItemByKey(id) {
			return Position.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return Position.itemsDic[key1 + ',' + key2];
		}
	}
	Position.items = new Array();
	Position.itemsDic = new Dictionary();

	class Music {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.Musicname = byteArray.readUTFString();
			this.loop = byteArray.readUint8();
			this.play = byteArray.readUint8();
			this.trigger = byteArray.readUint8();
		}
		static getItemByKey(id) {
			return Music.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return Music.itemsDic[key1 + ',' + key2];
		}
	}
	Music.items = new Array();
	Music.itemsDic = new Dictionary();

	class Guide {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.position = byteArray.readUTFString();
		}
		static getItemByKey(id) {
			return Guide.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return Guide.itemsDic[key1 + ',' + key2];
		}
	}
	Guide.items = new Array();
	Guide.itemsDic = new Dictionary();

	class Floor {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.nextid = byteArray.readUTFString();
			this.high = byteArray.readUTFString();
		}
		static getItemByKey(id) {
			return Floor.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return Floor.itemsDic[key1 + ',' + key2];
		}
	}
	Floor.items = new Array();
	Floor.itemsDic = new Dictionary();

	class DayTipConfig {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.weight = byteArray.readUint8();
			this.txt = byteArray.readUTFString();

            let items = GAMEDATA.DayTipConfig;
            items.forEach(item => {
                if(this.id == item.id) {
                    this.txt = item.txt;
                }
            });
		}
		static getItemByKey(id) {
			return DayTipConfig.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return DayTipConfig.itemsDic[key1 + ',' + key2];
		}
	}
	DayTipConfig.items = new Array();
	DayTipConfig.itemsDic = new Dictionary();

	class Guidetxt {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.order = byteArray.readUint8();
			this.txt = byteArray.readUTFString();

            let items = GAMEDATA.Guidetxt;
            items.forEach(item => {
                if(this.id == item.id) {
                    this.txt = item.txt;
                }
            });
		}
		static getItemByKey(id) {
			return Guidetxt.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return Guidetxt.itemsDic[key1 + ',' + key2];
		}
	}
	Guidetxt.items = new Array();
	Guidetxt.itemsDic = new Dictionary();

	class SetupResource {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.Type = byteArray.readUint8();
			this.NameTxt = byteArray.readUTFString();
			this.Txt = byteArray.readUTFString();

            let items = GAMEDATA.SetupResource;
            items.forEach(item => {
                if(this.id == item.id) {
                    this.NameTxt = item.NameTxt;
                    this.Txt = item.Txt;
                }
            });
		}
		static getItemByKey(id) {
			return SetupResource.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return SetupResource.itemsDic[key1 + ',' + key2];
		}
	}
	SetupResource.items = new Array();
	SetupResource.itemsDic = new Dictionary();

	class RandomGuideItem {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.item = ConfigLib.ReadArray(byteArray);
			this.itemrandom = ConfigLib.ReadArray(byteArray);
			this.event = ConfigLib.ReadArray(byteArray);
			this.txt = ConfigLib.ReadArray(byteArray);
			this.popuptxt = byteArray.readUTFString();
			this.starttxt = ConfigLib.ReadArray(byteArray);
			this.vaguetxt = ConfigLib.ReadArray(byteArray);

            let items = GAMEDATA.RandomGuideItem;
            items.forEach(item => {
                if(this.id == item.id) {
                    this.txt = item.txt;
                    this.popuptxt = item.popuptxt;
                    this.starttxt = item.starttxt;
                    this.vaguetxt = item.vaguetxt;
                }
            });
		}
		static getItemByKey(id) {
			return RandomGuideItem.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return RandomGuideItem.itemsDic[key1 + ',' + key2];
		}
	}
	RandomGuideItem.items = new Array();
	RandomGuideItem.itemsDic = new Dictionary();

	class Popup {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.txt = byteArray.readUTFString();

            let items = GAMEDATA.Popup;
            items.forEach(item => {
                if(this.id == item.id) {
                    this.txt = item.txt;
                }
            });
		}
		static getItemByKey(id) {
			return Popup.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return Popup.itemsDic[key1 + ',' + key2];
		}
	}
	Popup.items = new Array();
	Popup.itemsDic = new Dictionary();

	class LoadingRes {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.floorid = byteArray.readUTFString();
			this.position = ConfigLib.ReadArray(byteArray);
			this.hidefloor = ConfigLib.ReadArray(byteArray);
		}
		static getItemByKey(id) {
			return LoadingRes.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return LoadingRes.itemsDic[key1 + ',' + key2];
		}
	}
	LoadingRes.items = new Array();
	LoadingRes.itemsDic = new Dictionary();

	class danmuConfigResource {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.size = byteArray.readUTFString();
			this.speed = byteArray.readUTFString();
			this.percent = byteArray.readUTFString();
		}
		static getItemByKey(id) {
			return danmuConfigResource.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return danmuConfigResource.itemsDic[key1 + ',' + key2];
		}
	}
	danmuConfigResource.items = new Array();
	danmuConfigResource.itemsDic = new Dictionary();

	class danmuNameResource {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.name = byteArray.readUTFString();

            let items = GAMEDATA.danmuNameResource;
            items.forEach(item => {
                if(this.id == item.id) {
                    this.name = item.name;
                }
            });
		}
		static getItemByKey(id) {
			return danmuNameResource.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return danmuNameResource.itemsDic[key1 + ',' + key2];
		}
	}
	danmuNameResource.items = new Array();
	danmuNameResource.itemsDic = new Dictionary();

	class danmuResource {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.name = byteArray.readUTFString();
			this.percent = byteArray.readUint8();

            let items = GAMEDATA.danmuResource;
            items.forEach(item => {
                if(this.id == item.id) {
                    this.name = item.name;
                }
            });
		}
		static getItemByKey(id) {
			return danmuResource.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return danmuResource.itemsDic[key1 + ',' + key2];
		}
	}
	danmuResource.items = new Array();
	danmuResource.itemsDic = new Dictionary();

	class KickResource {
		constructor() {}
		parseItem(byteArray) {
			this.itemid = byteArray.readUint8();
			this.positionid = byteArray.readUint8();
		}
		static getItemByKey(id) {
			return KickResource.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return KickResource.itemsDic[key1 + ',' + key2];
		}
	}
	KickResource.items = new Array();
	KickResource.itemsDic = new Dictionary();

	class NameResource {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint16();
			this.name = byteArray.readUTFString();

            let items = GAMEDATA.NameResource;
            items.forEach(item => {
                if(this.id == item.id) {
                    this.name = item.name;
                }
            });
		}
		static getItemByKey(id) {
			return NameResource.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return NameResource.itemsDic[key1 + ',' + key2];
		}
	}
	NameResource.items = new Array();
	NameResource.itemsDic = new Dictionary();

	class RankResource {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.rank = ConfigLib.ReadArray(byteArray);
			this.hardrange = ConfigLib.ReadArray(byteArray);
			this.hardlimit = byteArray.readUint8();
			this.timerange = ConfigLib.ReadArray(byteArray);
			this.timelimit = byteArray.readFloat64();
			this.timeuprange = ConfigLib.ReadArray(byteArray);
		}
		static getItemByKey(id) {
			return RankResource.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return RankResource.itemsDic[key1 + ',' + key2];
		}
	}
	RankResource.items = new Array();
	RankResource.itemsDic = new Dictionary();

	class InitTpl {
		constructor() {}
		static start() {
			InitTpl.TplMaping = [
				['I18nResource', I18nResource, ['id']],
				['ConfigValue', ConfigValue, ['key']],
				['AdResource', AdResource, ['platform', 'id']],
				['HardResource', HardResource, ['id']],
				['GametxtResource', GametxtResource, ['id']],
				['DayConfig', DayConfig, ['id']],
				['ItemResource', ItemResource, ['id']],
				['MapResource', MapResource, ['id']],
				['NpcBuffResource', NpcBuffResource, ['id']],
				['Position', Position, ['id']],
				['Music', Music, ['id']],
				['Guide', Guide, ['id']],
				['Floor', Floor, ['id']],
				['DayTipConfig', DayTipConfig, ['id']],
				['Guidetxt', Guidetxt, ['id']],
				['SetupResource', SetupResource, ['id']],
				['RandomGuideItem', RandomGuideItem, ['id']],
				['Popup', Popup, ['id']],
				['LoadingRes', LoadingRes, ['id']],
				['danmuConfigResource', danmuConfigResource, ['id']],
				['danmuNameResource', danmuNameResource, ['id']],
				['danmuResource', danmuResource, ['id']],
				['KickResource', KickResource, ['itemid']],
				['NameResource', NameResource, ['id']],
				['RankResource', RankResource, ['id']]
			];
		}
		static InitTpls(bytearray) {
			if (InitTpl.TplMaping == null) {
				InitTpl.start();
			}
			if (InitTpl.dic == null) {
				InitTpl.dic = new Dictionary();
				for (var i = 0; i < InitTpl.TplMaping.length; i++) {
					var data = InitTpl.TplMaping[i];
					InitTpl.dic[data[0]] = new MappingVO(
						data[1],
						data[2],
						data[3]
					);
				}
			}
			bytearray.endian = Laya.Byte.LITTLE_ENDIAN;
			while (bytearray.bytesAvailable) {
				var tplName = bytearray.readUTFString();
				var mapVO = InitTpl.dic[tplName];
				var len = bytearray.readUint32();
				var end = bytearray.pos + len;
				if (mapVO == null) {
					bytearray.pos += len;
				} else {
					var cls = mapVO.tplCls;
					while (bytearray.pos < end) {
						var tplObj = new cls();
						tplObj.parseItem(bytearray);
						cls.items.push(tplObj);
						var hashKey;
						if (mapVO.idprop.length == 1) {
							hashKey = tplObj[mapVO.idprop[0]];
						} else if (mapVO.idprop.length == 2) {
							if (mapVO.hashFunction == null) {
								hashKey =
									tplObj[mapVO.idprop[0]] +
									',' +
									tplObj[mapVO.idprop[1]];
							} else {
								hashKey = mapVO.hashFunction(
									tplObj[mapVO.idprop[0]],
									tplObj[mapVO.idprop[1]]
								);
							}
						} else if (mapVO.idprop.length == 3) {
							hashKey = mapVO.hashFunction(
								tplObj[mapVO.idprop[0]],
								tplObj[mapVO.idprop[1]],
								tplObj[mapVO.idprop[2]]
							);
						} else {
							throw new Error('暂时不支持!');
						}
						if (hashKey in cls.itemsDic) {
						} else {
							cls.itemsDic[hashKey] = tplObj;
						}
					}
				}
			}
			bytearray.clear();
		}
	}
	class MappingVO {
		constructor(tplCls, id, hashFunction) {
			this.hashFunction = hashFunction;
			this.idprop = id;
			this.tplCls = tplCls;
		}
	}

	class UrlUtils {
		constructor() {}
		static GetEntityLhUrl(resName) {
			return UrlUtils.PREFAB + resName + UrlUtils.resLh;
		}
		static GetSceneUrl(resName) {
			return UrlUtils.SCENE + resName + UrlUtils.resLs;
		}
		static GetSceneEndUrl(resName) {
			return UrlUtils.SCENE_END + resName + UrlUtils.resLs;
		}
		static GetLevelUrl(resName) {
			return UrlUtils.LEVEL + resName + UrlUtils.resBin;
		}
		static GetTemplateUrl(resName) {
			return UrlUtils.TEMPLATE + resName + UrlUtils.resBin;
		}
		static GetEffectUrl(resName) {
			return UrlUtils.EFFECT + resName + UrlUtils.resLh;
		}
		static GetSkinUrl(resName) {
			return UrlUtils.SKIN + resName + UrlUtils.resPng;
		}
		static GetLevelIconUrl(resName) {
			return UrlUtils.ICON_LEVEL + resName + UrlUtils.resPng;
		}
		static GetSkinIconUrl(resName) {
			return UrlUtils.ICON_SKIN + resName + UrlUtils.resPng;
		}
		static GetUiUlr(resName) {
			let arr = [
				{
					url: resName + '_atlas0' + UrlUtils.resPng,
					type: Laya.Loader.IMAGE
				},
				{ url: resName + UrlUtils.resBin, type: Laya.Loader.BUFFER }
			];
			switch (resName) {
				case UrlUtils.UI + 'UIPlatform':
					arr = [
						{
							url: resName + '_atlas0' + UrlUtils.resPng,
							type: Laya.Loader.IMAGE
						},
						{
							url: resName + '_atlas0_1' + UrlUtils.resPng,
							type: Laya.Loader.IMAGE
						},
						{
							url: resName + '_atlas0_2' + UrlUtils.resPng,
							type: Laya.Loader.IMAGE
						},
						{
							url: resName + UrlUtils.resBin,
							type: Laya.Loader.BUFFER
						}
					];
					break;
				case UrlUtils.UI + 'UIPrivacy':
					arr = [
						{
							url: resName + '_atlas0' + UrlUtils.resPng,
							type: Laya.Loader.IMAGE
						},
						{
							url: resName + '_atlas0_1' + UrlUtils.resPng,
							type: Laya.Loader.IMAGE
						},
						{
							url: resName + UrlUtils.resBin,
							type: Laya.Loader.BUFFER
						}
					];
					break;
			}
			return arr;
		}
		static GetMusic(resName, isWav = true) {
			if (isWav) {
				return UrlUtils.MUSIC + resName + UrlUtils.resWav;
			} else {
				return UrlUtils.MUSIC + resName + UrlUtils.resMP3;
			}
		}
		static GetSpineUrl(resName) {
			return UrlUtils.SPINE + resName + UrlUtils.resSk;
		}
		static GetAstarUrl(resName) {
			return UrlUtils.ASTAR + resName + UrlUtils.resBin;
		}
		static GetLhResUrl(resName) {
			return UrlUtils.PREFAB + resName + UrlUtils.resLh;
		}
		static get PREFAB() {
			if (
				!Laya.Browser.window.tt &&
				!Laya.Browser.onQQMiniGame &&
				!Laya.Browser.window.wx &&
				!Laya.Browser.onVVMiniGame
			) {
				if (Laya.Browser.onIOS) {
					return UrlUtils.PREFAB_IOS;
				}
				if (Laya.Browser.onAndroid) {
					return UrlUtils.PREFAB_CONVENTIONAL;
				}
			}
			return UrlUtils.PREFAB_CONVENTIONAL;
		}
	}
	UrlUtils.RES = 'res/';
	UrlUtils.PREFAB_IOS = UrlUtils.RES + 'Prefab/LayaScene_entity/Conventional/';
	UrlUtils.PREFAB_ADNROID = UrlUtils.RES + 'Prefab/LayaScene_entity/Conventional/';
	UrlUtils.PREFAB_CONVENTIONAL =
		UrlUtils.RES + 'Prefab/LayaScene_entity/Conventional/';
	UrlUtils.LIBARARY = 'Assets/modle/';
	UrlUtils.SCENE = UrlUtils.RES + 'Scene/Conventional/';
	UrlUtils.SCENE_END = UrlUtils.RES + 'SceneEnd/Conventional/';
	UrlUtils.LEVEL = UrlUtils.RES + 'Level/';
	UrlUtils.TEMPLATE = UrlUtils.RES + 'template/';
	UrlUtils.UI = UrlUtils.RES + 'ui/';
	UrlUtils.EFFECT = UrlUtils.RES + 'Effect/Conventional/';
	UrlUtils.MUSIC = UrlUtils.RES + 'music/';
	UrlUtils.SKIN = UrlUtils.RES + 'skin/';
	UrlUtils.ICON = UrlUtils.RES + 'icon/';
	UrlUtils.ICON_LEVEL = UrlUtils.ICON + 'level/';
	UrlUtils.ICON_SKIN = UrlUtils.ICON + 'skin/';
	UrlUtils.ASTAR = UrlUtils.RES + 'astar/';
	UrlUtils.SPINE = UrlUtils.RES + 'spine/';
	UrlUtils.resPng = '.png';
	UrlUtils.resJpg = '.jpg';
	UrlUtils.resMP3 = '.mp3';
	UrlUtils.resWav = '.wav';
	UrlUtils.resJson = '.json';
	UrlUtils.resBin = '.bin';
	UrlUtils.resLm = '.lm';
	UrlUtils.resLh = '.lh';
	UrlUtils.resLs = '.ls';
	UrlUtils.resSk = '.sk';
	UrlUtils.version = '?' + new Date().getTime().toString();

	class Logger {
		constructor() {}
		static log(obj, str) {
			if (Logger.isShowLog) {
				Logger.outPut(
					'[log] [' + Logger.getClassName(obj) + '] ' + str
				);
			}
		}
		static net(obj, str) {
			if (Logger.isShowLog && Logger.isNet) {
				Logger.outPut(
					'[net] [' + Logger.getClassName(obj) + '] ' + str
				);
			}
		}
		static error(obj, str) {}
		static warning(obj, str) {
			if (Logger.isShowLog) {
				Logger.outPut(
					'[warning] [' + Logger.getClassName(obj) + '] ' + str
				);
			}
		}
		static outPut(value) {
			console.log(value);
		}
		static getClassName(obj) {
			if (typeof obj == 'string') {
				return String(obj);
			}
			return obj;
		}
	}
	Logger.isNet = false;
	Logger.isShowLog = false;

	class Dictionary$1 {
		constructor() {
			this.isOne = true;
			this.keys = new Array();
			this.values = new Array();
		}
		set(key, value) {
			if (this.isOne) {
				if (this.check(key)) return true;
			}
			for (let i = 0; i < this.keys.length; i++) {
				if (this.keys[i] === undefined) {
					this.keys[i] = key;
					this.values[i] = value;
					return;
				}
			}
			this.keys.push(key);
			this.values.push(value);
		}
		check(key) {
			for (let i = 0; i < this.keys.length; i++) {
				if (this.keys[i] === key) {
					return true;
				}
			}
			return false;
		}
		get(key) {
			for (let i = 0; i < this.keys.length; i++) {
				if (this.keys[i] === key) {
					return this.values[i];
				}
			}
		}
		gets(key) {
			if (this.isOne) {
				return;
			}
			let arr = [];
			for (let i = 0; i < this.keys.length; i++) {
				if (this.keys[i] === key) {
					arr.push(this.values[i]);
				}
			}
			return arr;
		}
		indexOf(value) {
			for (let i = 0; i < this.values.length; i++) {
				if (this.values[i] === value) {
					return i;
				}
			}
			return undefined;
		}
		remove(key) {
			for (let i = 0; i < this.keys.length; i++) {
				if (this.keys[i] === key) {
					this.keys[i] = undefined;
					this.values[i] = undefined;
					console.log('【Dictionary】 - 移除成功:' + key);
					return;
				}
			}
		}
		removeByArg(key, arg) {
			for (let i = 0; i < this.keys.length; i++) {
				if (
					this.keys[i] === key &&
					(arg.value === this.values[i][arg.name] ||
						arg === undefined)
				) {
					this.keys[i] = undefined;
					this.values[i] = undefined;
				}
			}
		}
		clear() {
			this.keys = [];
			this.values = [];
		}
		getDicList() {
			for (let i = 0; i < this.keys.length; i++) {
				console.log('【' + i + '】-----------key:' + this.keys[i]);
				console.log('value', this.values[i]);
			}
		}
		getValuesArr() {
			return this.values;
		}
		getKeysArr() {
			return this.keys;
		}
	}

	class FiniteStateMachine {
		constructor() {
			this._currentState = null;
			this._LastState = null;
			this._nextState = null;
			Laya.timer.frameLoop(1, this, this.advanceTime);
		}
		GetCurState() {
			return this._currentState;
		}
		getLastState() {
			return this._LastState;
		}
		getNextState() {
			return this._nextState;
		}
		SetCurState(value, data) {
			var state;
			if (this._currentState) {
				state = this._currentState;
				this._currentState = null;
				this._nextState = value;
				this._LastState = state;
				state.exit();
				state.SetCurStateMachine(null);
			}
			this._currentState = value;
			if (this._currentState) {
				this._currentState.SetCurStateMachine(this);
				this._currentState.enter(data);
			}
		}
		advanceTime() {
			if (this._currentState) {
				this._currentState.advanceTime(Laya.timer.delta);
			}
		}
		exit() {
			this._currentState = null;
		}
		forceStop() {
			if (this._currentState) this._currentState.forceStop();
			this.SetCurState(null);
		}
	}

	class RoleFiniteStateMachine extends FiniteStateMachine {
		constructor() {
			super();
		}
		SetCurState(value, data = null, statName_) {
			var state;
			if (this._currentState) {
				if (statName_ != statName.Die) {
					if (!this._currentState.canStopByOther(value)) return;
				}
				state = this._currentState;
				this._currentState = null;
				MainRoleMgr.Inst.getRoleScript().curState = statName_;
				state.exit();
				state.SetCurStateMachine(null);
			}
			this._currentState = value;
			if (this._currentState) {
				this._currentState.SetCurStateMachine(this);
				this._currentState.enter(data);
			}
		}
	}

	class BaseState {
		constructor() {
			this.canBeForceStop = true;
		}
		enter(data) {}
		forceStop() {}
		exit() {}
		advanceTime(time) {}
		canStopByOther(stat) {
			if (stat == this) return true;
			return this.canBeForceStop;
		}
		GetCurStateMachine() {
			return this.curStateMachine;
		}
		SetCurStateMachine(value) {
			this.curStateMachine = value;
		}
	}

	class GameLayer {
		static start() {
			Laya.stage.addChild(fgui.GRoot.inst.displayObject);
			fgui.GRoot.inst.displayObject.zOrder = 5;
			GameLayer.fightLayer = new fgui.GComponent();
			GameLayer.mainLayer = new fgui.GComponent();
			GameLayer.windowLayer = new fgui.GComponent();
			GameLayer.alertLayer = new fgui.GComponent();
			GameLayer.flayLayer = new fgui.GComponent();
			GameLayer.topLayer = new fgui.GComponent();
			fgui.GRoot.inst.addChild(GameLayer.fightLayer);
			fgui.GRoot.inst.addChild(GameLayer.mainLayer);
			fgui.GRoot.inst.addChild(GameLayer.windowLayer);
			fgui.GRoot.inst.addChild(GameLayer.alertLayer);
			fgui.GRoot.inst.addChild(GameLayer.flayLayer);
			fgui.GRoot.inst.addChild(GameLayer.topLayer);
			fgui.UIConfig.defaultFont = GameConfig.Font_Normal;
			fgui.UIConfig.packageFileExtension = 'bin';
			Laya.stage.on(Laya.Event.RESIZE, GameLayer, GameLayer.onResize);
			this.onResize();
		}
		static onResize() {
			// GameConfig.scale = Laya.Browser.height / GameConfig.height;
			// GameConfig.viewWidth = Laya.Browser.width / GameConfig.scale;
			// GameConfig.viewHeight = Laya.Browser.height / GameConfig.scale;
			// GameLayer.onUpdate(GameLayer.mainLayer);
			// GameLayer.onUpdate(GameLayer.windowLayer);
			// GameLayer.onUpdate(GameLayer.alertLayer);
			// GameLayer.onUpdate(GameLayer.topLayer);
		}
		static onUpdate(parent) {
			let length = parent.numChildren;
			var view = null;
			for (var i = 0; i < length; i++) {
				view = parent.getChildAt(i);
				if (view != null && view.isLoaded) {
					view.onResize();
				}
			}
		}
	}

	class LayerType {
		constructor() {}
		static SetWindowLayout(view) {
			let vs = view.GetViewStruct();
			switch (vs.layout) {
				case 1: {
					view.x = 0;
					view.y = 0;
					break;
				}
				case 2: {
					view.x = (GameConfig.viewWidth - view.viewWidth) * 0.5;
					view.y = 0;
					break;
				}
				case 3: {
					view.x = GameConfig.viewWidth;
					view.y = 0;
					break;
				}
				case 4: {
					view.x = 0;
					view.y = (GameConfig.viewHeight - view.viewHeight) * 0.5;
					break;
				}
				case 5: {
					view.x = (GameConfig.viewWidth - view.viewWidth) * 0.5;
					view.y = (GameConfig.viewHeight - view.viewHeight) * 0.5;
					break;
				}
				case 6: {
					view.x = GameConfig.viewWidth;
					view.y = (GameConfig.viewHeight - view.viewHeight) * 0.5;
					break;
				}
				case 7: {
					view.x = 0;
					view.y = GameConfig.viewHeight;
					break;
				}
				case 8: {
					view.x = (GameConfig.viewWidth - view.viewWidth) * 0.5;
					view.y = GameConfig.viewHeight;
					break;
				}
				case 9: {
					view.x = GameConfig.viewWidth - view.viewWidth;
					view.y = GameConfig.viewHeight;
					break;
				}
			}
		}
		static SetWindowLayer(view) {
			let i = 0;
			let len = 0;
			let panel;
			let isExclusion = view.GetViewStruct().isExclusion;
			switch (view.GetViewStruct().layerType) {
				case LayerType.TYPE_SCENE: {
					if (isExclusion) {
						len = GameLayer.fightLayer.numChildren;
						for (i = len - 1; i >= 0; i--) {
							panel = GameLayer.fightLayer.getChildAt(i);
							if (panel.GetViewStruct().isExclusion)
								UISystem.Inst.RemoveWindowView(panel);
						}
					}
					GameLayer.fightLayer.addChild(view);
					break;
				}
				case LayerType.TYPE_MAIN: {
					if (isExclusion) {
						len = GameLayer.mainLayer.numChildren;
						for (i = len - 1; i >= 0; i--) {
							panel = GameLayer.mainLayer.getChildAt(i);
							if (panel.GetViewStruct().isExclusion)
								UISystem.Inst.RemoveWindowView(panel);
						}
					}
					GameLayer.mainLayer.addChild(view);
					break;
				}
				case LayerType.TYPE_WINDOW: {
					if (isExclusion) {
						len = GameLayer.windowLayer.numChildren;
						for (i = len - 1; i >= 0; i--) {
							panel = GameLayer.windowLayer.getChildAt(i);
							if (panel.GetViewStruct().isExclusion)
								UISystem.Inst.RemoveWindowView(panel);
						}
					}
					GameLayer.windowLayer.addChild(view);
					break;
				}
				case LayerType.TYPE_ALERT: {
					if (isExclusion) {
						len = GameLayer.alertLayer.numChildren;
						for (i = len - 1; i >= 0; i--) {
							panel = GameLayer.alertLayer.getChildAt(i);
							if (panel.GetViewStruct().isExclusion)
								UISystem.Inst.RemoveWindowView(panel);
						}
					}
					GameLayer.alertLayer.addChild(view);
					break;
				}
				case LayerType.TYPE_TOP:
					if (isExclusion) {
						len = GameLayer.topLayer.numChildren;
						for (i = len - 1; i >= 0; i--) {
							panel = GameLayer.topLayer.getChildAt(i);
							if (panel.GetViewStruct().isExclusion)
								UISystem.Inst.RemoveWindowView(panel);
						}
					}
					GameLayer.topLayer.addChild(view);
					break;
			}
		}
	}
	LayerType.TYPE_SCENE = 1;
	LayerType.TYPE_MAIN = 2;
	LayerType.TYPE_WINDOW = 3;
	LayerType.TYPE_ALERT = 4;
	LayerType.TYPE_TOP = 5;

	class UISystem {
		constructor() {
			this.m_view = new Dictionary();
			this.m_gc_view = new Dictionary();
		}
		static get Inst() {
			if (this._Inst == null) this._Inst = new UISystem();
			return this._Inst;
		}
		HasView(cls) {
			return this.m_view[cls] != null;
		}
		CreateWindowView(cls, param = null) {
			if (cls == null) {
				return;
			}
			let view = this.m_view[cls];
			if (view != null) return;
			if (view == null) {
				if (view == null) {
					view = new cls();
					view.cls = cls;
				}
				this.m_view[cls] = view;
			}
			if (view.isLoaded) {
				LayerType.SetWindowLayer(view);
				view.AddListener();
				view.InitData(param);
			} else view.LoadAtlas(param);
			return view;
		}
		RemoveWindowClass(cls) {
			this.RemoveWindowView(this.m_view[cls]);
		}
		RemoveWindowView(view) {
			if (view == null || view.parent == null) {
				return;
			}
			let _self = this;
			view.removeFromParent();
			view.RemoveListener();
			view.Reset();
			if (view.cls in this.m_view) {
				delete this.m_view[view.cls];
				this.m_gc_view[view.cls] = view;
			}
		}
		GetWindowView(cls) {
			return this.m_view[cls];
		}
	}

	class View extends fgui.GComponent {
		constructor() {
			super();
			this.cls = null;
		}
	}

	class ViewStruct {
		constructor() {
			this.layerType = LayerType.TYPE_WINDOW;
			this.layout = 5;
			this.isShowBg = false;
			this.isExclusion = true;
			this.isEffect = false;
		}
	}

	class AssetCache {
		constructor() {}
		static AddAsset(url, asset) {
			AssetCache.assetDic[url] = asset;
		}
		static GetAsset(url) {
			return AssetCache.assetDic[url];
		}
		static DestoryAsset(url) {
			let asset = AssetCache.assetDic[url];
			if (asset == null) return;
			asset.destroy(true);
			delete AssetCache.assetDic[url];
		}
	}
	AssetCache.assetDic = new Dictionary();

	class LoadTask {
		constructor() {
			this.handlers = new Array();
			this.level = 0;
			this.state = LoadTask.STATE_DEFAULT;
			this.rate = 0;
		}
		get wx() {
			return window['wx'];
		}
		run() {
			this.state = LoadTask.STATE_RUN;
		}
		onComplete(asset, isCache = true) {
			if (isCache && asset != null) {
				AssetCache.AddAsset(this.url, asset);
			}
			this.state = LoadTask.STATE_COMPLETE;
			var leng = this.handlers.length;
			var func;
			for (var i = 0; i < leng; i++) {
				func = this.handlers[i];
				if (func) {
					asset != null ? func.runWith(asset) : func.run();
				}
			}
			this.handlers.length = 0;
		}
		onUpdate() {
			if (this.rate < 0.95) {
				this.rate += 0.001;
			}
		}
		onLoadProgress(rate) {
			this.rate = rate;
		}
	}
	LoadTask.STATE_DEFAULT = 0;
	LoadTask.STATE_RUN = 1;
	LoadTask.STATE_COMPLETE = 2;

	class LoadLevel {
		constructor() {}
	}
	LoadLevel.UI_MODEL = 0;
	LoadLevel.DEFAULT = 1;
	LoadLevel.SCENE = 2;
	LoadLevel.EQUIP = 3;
	LoadLevel.SOUND = 4;

	class BinLoadTask extends LoadTask {
		constructor() {
			super();
		}
		run() {
			super.run();
			console.log('loader - BinLoadTask' + this.url);
			Laya.loader.load(
				this.url,
				Laya.Handler.create(this, this.onLoadComplete),
				Laya.Handler.create(this, this.onLoadProgress, null, false),
				Laya.Loader.BUFFER,
				this.level
			);
		}
		onLoadComplete(buffer) {
			let bytes = new Laya.Byte(buffer);
			Laya.loader.clearRes(this.url);
			super.onComplete(bytes);
		}
	}

	class Scene3DLoadTask extends LoadTask {
		constructor() {
			super();
		}
		run() {
			super.run();
			Laya.loader.on(Laya.Event.ERROR, this, this.onError);
			console.log('loader - Scene3DLoadTask' + this.url);
			// let url = this.wx.env.USER_DATA_PATH + '/cache/' + this.url;
			let url = this.url;
			Laya.loader.load(
				url,
				Laya.Handler.create(this, this.onLoadComplete),
				Laya.Handler.create(this, this.onLoadProgress, null, false),
				Laya.Loader.HIERARCHY,
				this.level
			);
		}
		onLoadComplete(scene) {
			super.onComplete(scene, false);
		}
		onError(errorMsg) {
			console.error('加载出错：', errorMsg);
		}
	}

	class ParticleLoadTask extends LoadTask {
		constructor() {
			super();
		}
		run() {
			super.run();
			console.log('loader - ParticleLoadTask' + this.url);
			Laya.loader.load(
				this.url,
				Laya.Handler.create(this, this.onLoadComplete),
				Laya.Handler.create(this, this.onLoadProgress, null, false),
				Laya.Loader.HIERARCHY,
				this.level
			);
		}
		onLoadComplete(sprite) {
			super.onComplete(sprite);
		}
	}

	class UILoadTask extends LoadTask {
		constructor() {
			super();
		}
		run() {
			super.run();
			Laya.loader.on(Laya.Event.ERROR, this, function (e) {
				console.error(e);
			});
			console.log('loader - UILoadTask' + this.url);
			Laya.loader.load(
				UrlUtils.GetUiUlr(this.url),
				Laya.Handler.create(this, this.onLoadComplete),
				Laya.Handler.create(this, this.onLoadProgress, null, false),
				null,
				this.level
			);
		}
		onLoadComplete(isSuccess) {
			super.onComplete(isSuccess);
		}
	}

	class Sprite3DLoadTask extends LoadTask {
		constructor() {
			super();
		}
		run() {
			super.run();
			console.log('loader - Sprite3DLoadTask' + this.url);
			// let url = this.wx.env.USER_DATA_PATH + '/cache/' + this.url;
			let url = this.url;
			Laya.loader.load(
				url,
				Laya.Handler.create(this, this.onLoadComplete),
				Laya.Handler.create(this, this.onLoadProgress, null, false),
				Laya.Loader.HIERARCHY,
				this.level
			);
		}
		onLoadComplete(sp) {
			super.onComplete(sp);
		}
	}

	class TextureLoadTask extends LoadTask {
		constructor() {
			super();
		}
		run() {
			super.run();
			console.log('loader - TextureLoadTask' + this.url);
			Laya.loader.load(
				this.url,
				Laya.Handler.create(this, this.onLoadComplete),
				Laya.Handler.create(this, this.onLoadProgress, null, false),
				Laya.Loader.TEXTURE2D,
				this.level
			);
		}
		onLoadComplete(texture) {
			super.onComplete(texture);
		}
	}

	class SoundLoadTask extends LoadTask {
		constructor() {
			super();
		}
		run() {
			super.run();
			console.log('loader - SoundLoadTask' + this.url);
			Laya.loader.load(
				this.url,
				Laya.Handler.create(this, this.onLoadComplete),
				Laya.Handler.create(this, this.onLoadProgress, null, false),
				Laya.Loader.SOUND,
				this.level
			);
		}
		onLoadComplete(sound) {
			super.onComplete(sound);
		}
	}

	class LoadQueue {
		constructor() {
			this.currentActions = new Array();
			this.curByteLoad = 0;
			this.byteLoaded = 0;
			this.byteTotal = 0;
			Laya.loader.retryNum = 3;
		}
		static get Inst() {
			if (this._Inst == null) {
				this._Inst = new LoadQueue();
			}
			return this._Inst;
		}
		loadSound(url, handler = null, level = LoadLevel.SOUND) {
			if (this.checkCache(url, handler)) {
				return true;
			}
			if (this.checkQueue(url, handler)) {
				return false;
			}
			var loadTask = new SoundLoadTask();
			loadTask.handlers.push(handler);
			loadTask.url = url;
			loadTask.level = level;
			this.addTask(loadTask);
		}
		loadTexture(url, handler = null, level = LoadLevel.DEFAULT) {
			if (this.checkCache(url, handler)) {
				return true;
			}
			if (this.checkQueue(url, handler)) {
				return false;
			}
			var loadTask = new TextureLoadTask();
			loadTask.handlers.push(handler);
			loadTask.url = url;
			loadTask.level = level;
			this.addTask(loadTask);
		}
		loadUI(url, handler = null, level = LoadLevel.UI_MODEL) {
			if (this.checkCache(url, handler)) {
				return true;
			}
			if (this.checkQueue(url, handler)) {
				return false;
			}
			var loadTask = new UILoadTask();
			loadTask.handlers.push(handler);
			loadTask.url = url;
			loadTask.level = level;
			this.addTask(loadTask);
		}
		loadParticle(url, handler = null, level = LoadLevel.DEFAULT) {
			if (this.checkCache(url, handler)) {
				return true;
			}
			if (this.checkQueue(url, handler)) {
				return false;
			}
			var loadTask = new ParticleLoadTask();
			loadTask.handlers.push(handler);
			loadTask.url = url;
			loadTask.level = level;
			this.addTask(loadTask);
		}
		loadSprite3D(url, handler = null, level = LoadLevel.DEFAULT) {
			if (this.checkCache(url, handler)) {
				return true;
			}
			if (this.checkQueue(url, handler)) {
				return false;
			}
			var loadTask = new Sprite3DLoadTask();
			loadTask.handlers.push(handler);
			loadTask.url = url;
			loadTask.level = level;
			this.addTask(loadTask);
		}
		loadScene3D(url, handler = null, level = LoadLevel.SCENE) {
			if (this.checkCache(url, handler)) {
				return true;
			}
			if (this.checkQueue(url, handler)) {
				return false;
			}
			var loadTask = new Scene3DLoadTask();
			loadTask.handlers.push(handler);
			loadTask.url = url;
			loadTask.level = level;
			this.addTask(loadTask);
		}
		loadBin(url, handler = null, level = LoadLevel.DEFAULT) {
			if (this.checkCache(url, handler)) {
				return true;
			}
			if (this.checkQueue(url, handler)) {
				return false;
			}
			var loadTask = new BinLoadTask();
			loadTask.handlers.push(handler);
			loadTask.url = url;
			loadTask.level = level;
			this.addTask(loadTask);
		}
		checkCache(url, handler) {
			var cache = AssetCache.assetDic[url];
			if (cache != null) {
				if (handler != null) {
					handler.runWith(cache);
				}
				return true;
			} else {
				return false;
			}
		}
		checkQueue(url, handler) {
			var task;
			var leng = this.currentActions.length;
			for (var i = 0; i < leng; i++) {
				task = this.currentActions[i];
				if (task.url == url) {
					if (handler != null) {
						task.handlers.push(handler);
					}
					return true;
				}
			}
			return false;
		}
		addTask(value) {
			this.byteTotal++;
			var leng = this.currentActions.length;
			if (leng == 0) {
				Laya.timer.frameLoop(1, this, this.advanceTime);
			}
			this.currentActions.push(value);
			value.run();
		}
		advanceTime() {
			if (this.isEmpty) {
				Laya.timer.clear(this, this.advanceTime);
				return;
			}
			var self = this;
			var task;
			var leng = self.currentActions.length;
			for (var i = 0; i < leng; i++) {
				task = self.currentActions[i];
				task.onUpdate();
				if (task.state == LoadTask.STATE_COMPLETE) {
					self.currentActions.splice(i, 1);
					leng--;
					i--;
					self.byteLoaded++;
				}
			}
		}
		GetRate() {
			var rate = 0;
			var self = this;
			var task;
			self.curByteLoad = self.byteLoaded;
			var leng = self.currentActions.length;
			for (var i = 0; i < leng; i++) {
				task = self.currentActions[i];
				self.curByteLoad += task.rate;
			}
			return self.curByteLoad / self.byteTotal;
		}
		get isEmpty() {
			return this.currentActions.length == 0;
		}
		clearRate() {
			this.curByteLoad = 0;
			this.byteLoaded = 0;
			this.byteTotal = 0;
			this.currentActions.length = 0;
		}
	}

	class FairyUtils {
		constructor() {}
		static setVar(parent, thisObject, btns = null) {
			if (!parent) return;
			if (parent != null && thisObject != null) {
				for (let i = 0; i < parent.numChildren; i++) {
					let transObj;
					transObj = parent.getChildAt(i);
					if (thisObject != null)
						thisObject[transObj.name] = transObj;
					if (transObj instanceof fgui.GTextField && transObj.font) {
						transObj.font = GameConfig.Font_Normal;
					} else if (
						btns != null &&
						transObj instanceof fgui.GButton
					) {
						btns.push(transObj);
					}
					if (transObj instanceof fgui.GComponent)
						this.setVar(transObj, null, btns);
				}
			}
		}
	}

	class EffectUtil {
		constructor() {}
		static openWindowEffect(
			window,
			complete = null,
			thisObj = null,
			params = null,
			isMust = false
		) {
			fgui.GTween.kill(window);
			window.scaleX = window.scaleY = 0.3;
			window.alpha = 1;
			let w = window.viewWidth;
			let h = window.viewHeight;
			window.x = (w - window.scaleX * w) * 0.5;
			window.y = (h - window.scaleY * h) * 0.5;
			let _self = null;
			fgui.GTween.to2(0.3, 0.3, 1.05, 1.05, 0.3)
				.setTarget(window, _self)
				.onUpdate(onUpdate, _self)
				.onComplete(function onComplete() {
					fgui.GTween.to2(1.05, 1.05, 0.98, 0.98, 0.3)
						.setTarget(window, _self)
						.onUpdate(onUpdate, _self)
						.onComplete(function onComplete1() {
							fgui.GTween.to2(0.98, 0.98, 1, 1, 0.2)
								.setTarget(window, _self)
								.onUpdate(onUpdate, _self)
								.onComplete(function onComplete2() {
									fgui.GTween.kill(window);
									if (complete != null) {
										complete.apply(thisObj, params);
									}
								}, _self);
						}, _self);
				}, _self);
			function onUpdate(tw) {
				window.scaleX = tw.value.x;
				window.scaleY = tw.value.y;
				window.x = (w - window.scaleX * w) * 0.5;
				window.y = (h - window.scaleY * h) * 0.5;
			}
		}
		static closeWindowEffect(
			window,
			complete = null,
			thisObj = null,
			params = null,
			isMust = false
		) {
			if (window) {
				if (!isMust && window['isWindowEffect']) {
					return;
				} else if (isMust) {
					fgui.GTween.kill(window);
				}
				window.alpha = 1;
				window.scaleX = window.scaleY = 1;
				let w = window.width;
				let h = window.height;
				fgui.GTween.to3(1, 1, 1, 0.8, 0.8, 0, 0.3)
					.setTarget(window, this)
					.onUpdate(function onUpdate(tw) {
						window.scaleX = tw.value.x;
						window.scaleY = tw.value.y;
						window.alpha = tw.value.z;
						window.x =
							(Laya.Browser.width - window.scaleX * w) * 0.5;
						window.y =
							(Laya.Browser.height - window.scaleY * h) * 0.5;
					}, this)
					.onComplete(function onComplete() {
						fgui.GTween.kill(window);
						if (complete != null) {
							complete.apply(thisObj, params);
						}
					}, this);
			}
		}
	}

	class UIBaseWindow extends View {
		constructor(pkgName = '', resName = '') {
			super();
			this._pkgName = '';
			this._resName = '';
			this._view = null;
			this.m_mask = null;
			this.viewStruct = null;
			this._btns = null;
			this._isLoaded = false;
			this.param = null;
			this._pkgName = pkgName;
			this._resName = resName;
			this._btns = new Array();
			this.SetViewStruct();
		}
		get view() {
			return this._view;
		}
		LoadAtlas(param) {
			this.param = param;
			this.visible = false;
			LoadQueue.Inst.loadUI(
				UrlUtils.UI + this._pkgName,
				Laya.Handler.create(this, this.onLoaded)
			);
		}
		onLoaded(isSuccess) {
			if (!isSuccess) return;
			let self = this;
			self._isLoaded = true;
			fgui.UIPackage.addPackage(UrlUtils.UI + self._pkgName);
			self.registerClasses();
			self._view = fgui.UIPackage.createObject(
				self._pkgName,
				self._resName
			).asCom;
			self.addChild(self._view);
			FairyUtils.setVar(self._view, self, self._btns);
			LayerType.SetWindowLayer(self);
			self.onDelay();
		}
		registerClasses() {}
		onDelay() {
			let self = this;
			self.Registered();
			self.InitUI();
			self.onResize();
			self.AddListener();
			self.InitData(self.param);
			self.viewStruct.isShowBg ? self.showMask() : self.hideMask();
			self.visible = true;
			if (self.viewStruct.isEffect)
				EffectUtil.openWindowEffect(self._view);
		}
		get isLoaded() {
			return this._isLoaded;
		}
		Registered() {}
		InitUI() {}
		AddListener() {
			for (let btn of this._btns) {
				btn.onClick(this, this.lisClick);
			}
		}
		RemoveListener() {
			for (let btn of this._btns) {
				btn.offClick(this, this.lisClick);
			}
			this.hideMask();
		}
		InitData(param) {}
		Reset() {}
		lisClick() {}
		SetViewStruct() {
			if (this.viewStruct == null) {
				this.viewStruct = new ViewStruct();
			}
		}
		GetViewStruct() {
			return this.viewStruct;
		}
		onResize() {
			LayerType.SetWindowLayout(this);
			if (this.m_mask == null) return;
			// this.m_mask.viewWidth = GameConfig.viewWidth;
			// this.m_mask.viewHeight = GameConfig.viewHeight;
			// this.m_mask.x = -this.x;
			// this.m_mask.y = -this.y;
		}
		showMask() {
			if (this.m_mask == null) {
				this.m_mask = fgui.UIPackage.createObject(
					'common',
					'ui_mask'
				).asCom;
				this.addChildAt(this.m_mask, 0);
				this.m_mask.touchable = true;
				this.m_mask.onClick(this, this.onTouchEndHandler);
				this.onResize();
			}
		}
		onTouchEndHandler(event) {
			event.stopPropagation();
			UISystem.Inst.RemoveWindowView(this);
		}
		hideMask() {
			if (this.m_mask != null) {
				if (this.m_mask.parent != null)
					this.m_mask.parent.removeChild(this.m_mask);
				this.m_mask.offClick(this, this.onTouchEndHandler);
				this.m_mask = null;
			}
		}
		get viewWidth() {
			return this._view && this._view.viewWidth;
		}
		get viewHeight() {
			return this._view && this._view.viewHeight;
		}
	}

	class DicUtil {
		static rotationDeal(fx, fy, sx, sy, getString) {
			let c = Math.sqrt(Math.pow(fx - sx, 2) + Math.pow(fy - sy, 2));
			let a = sx - fx;
			let b = sy - fy;
			if (getString == 'sin') {
				return b / c;
			} else if (getString == 'cos') {
				return a / c;
			} else {
				return b / a;
			}
		}
		static countDic_Object(f, s) {
			return Math.sqrt(Math.pow(f.x - s.x, 2) + Math.pow(f.y - s.y, 2));
		}
		static countDic_Object3D(point1, point2) {
			return Laya.Vector3.distance(point1, point2);
		}
		static countRoByVce2(vec1, vec2) {
			let a = Math.sqrt(Math.pow(vec1.x, 2) + Math.pow(vec1.y, 2));
			let b = Math.sqrt(Math.pow(vec2.x, 2) + Math.pow(vec2.y, 2));
			let cos = ((vec1.x * vec2.x + vec2.y * vec1.y) / a) * b;
			return cos;
		}
	}

	class RoleData {
		constructor() {
			this.isFirstGame = false;
			this.isUseYinShen = false;
			this.isHasIntroduce = false;
			this.isFirstLookEAd = true;
			this.uid = null;
			this.isLeftMouseOn = false;
			this.isRightMouseOn = false;
			this.isFirstUseNoSound = true;
			this.bestRankData = null;
			this.bestRoleRank = null;
			this.carRankData = null;
			this.carRoleRank = null;
			this.commonRankData = null;
			this.commonRoleRank = null;
			this.changeIndex = null;
			this.roleRank = {
				index: null,
				name: 'Me',
				upIndex: 180,
				url: null,
				time: null,
				diff: null
			};
			this.propId = null;
			this.dayNum = 1;
			this.dayMax = 5;
			this.yinShenTimes = 1;
			this.noSoundTimes = 1;
			this.difficult = 1;
			this.backgroundMusic = 0;
			this.NightMare = 0;
			this.drakGame = 0;
			this.otherLock = 0;
			this.rotatPercent = 0.5 * 1.2;
			this.zhiZhuLock = false;
			this.ziDanPositon = null;
			this.zhengQiStat = 0;
			this.isOpenDoor_Yinger = false;
			this.siOK_MubanQiao = false;
			this.isDropMuBan = false;
			this.isOpenBookWall = false;
			this.isCutXiGua = false;
			this.introduceId = 1;
			this.introducePointStatus = 1;
			this.introduceTextStatus = 1;
			this.isSslectEnd = false;
			this.endIntroduceChoose = 2;
			this.introduceConfigId = 1;
			this.propInfoArr = [23];
			this.fengShanKeys = ['28,0'];
			this.gostEventKeys = ['20,0'];
			this.carBeHindKeys = ['10,0'];
			this.carKeys = ['39,0', '40,0', '41,0', '42,0', '28,0'];
			this.gunKeys = ['1,0', '2,0', '3,0'];
			this.dianDoorKeys = ['23,0'];
			this.wuQiDoorKeys = ['12,0'];
			this.DogDoorKeys = ['11,0'];
			this.BaoXianGuiKeys = ['15,0'];
			this.LouTiJianKeys = ['44,0'];
			this.shuiJingKeys = ['29,0'];
			this.cutXiGuaKeys = ['27,0'];
			this.bigDoorKeys = ['14,1', '13,1', '18,0', '28,0'];
			this.bigDoorDownMoodKeys = ['18,0'];
			this.bigDoorOpen = ['9,0'];
			this.chaXiaoKeys = ['24,0'];
			this.lingDang1Keys = ['28,0'];
			this.lingDang2Keys = ['28,0'];
			this.huaKuangKeys = ['34,0', '35,1', '36,0', '37,0', '38,0'];
			this.daDianXiangKeys = ['28,0'];
			this.carBigDoorKeys = ['9,0'];
			this.dogHouseKeys = ['21,0', '22,0'];
			this.muLanMen1Keys = [
				'18,0',
				'18,0',
				'18,0',
				'18,0',
				'18,0',
				'18,0'
			];
			this.muLanMen2Keys = [
				'18,0',
				'18,0',
				'18,0',
				'18,0',
				'18,0',
				'18,0'
			];
			this.maZuiZhenKeys = ['8,0', '8,0', '8,0'];
			this.miShiWallKeys = ['19,0'];
			this.wanJuQiangKeys = ['14,0'];
			this.wanJuQiangColiderKeys = ['14,0'];
			this.rouPanZiKeys = ['31,0'];
			this.zhiZhuMuBanKeys = ['8,0'];
			this.endIntroduceKeys = null;
			this.endIntroduceAdKeys = null;
			this.propDetailArr = [];
			this.num_ZiDanMian = ['0:6'];
			this.num_HuJiaoMian = ['0:5'];
			this.num_BingShuang = ['0:1'];
			this.num_ZhuangQiang = ['0:3'];
			this.kuLouDoorState = 1;
			this.oilSate = 0;
			this.kbnnKeepTransform = null;
			this.roleStorageData = null;
			this.roleKeepCameraTransform = null;
			this.storageSureProp = null;
			this.storageRandomPosition = null;
			this.endStoragePosition = null;
			this.destoryPropArr = null;
			this.propTransformArr = null;
			this.nuStatusData = null;
			this.carData = null;
		}
	}
	class GameData {
		constructor() {
			this.isUseYinShen = false;
			this.introduceId = 1;
			this.uid = null;
			this.needClear5_11 = null;
			this.isShowHealthTip = false;
			this.showBtnGuide = false;
			this.yinShenTimes = 0;
			this.noSoundTimes = 0;
			this.bestRankData = null;
			this.bestRoleRank = null;
			this.carRankData = null;
			this.carRoleRank = null;
			this.commonRankData = null;
			this.commonRoleRank = null;
			this.tempGetIntroduce = null;
			this.loginIndex = 0;
			this.loginTemp = null;
			this.isGetLoginAwrad = null;
			this.getFromStorage();
			this.initData();
		}
		initData() {
			if (!this.needClear5_11) {
				localStorage.clear();
				this.setGameData('needClear5_11', true);
				this.isUseYinShen = false;
				this.introduceId = -100;
				this.uid = this.uid;
			}
			if (!this.uid) {
				this.uid = this.generateMixed(10);
				this.yinShenTimes = 1;
				this.noSoundTimes = 1;
			}
			if (this.introduceId != -100) this.introduceId = 1;
			localStorage.setItem('gameData', JSON.stringify(this));
			this.isUseYinShen = false;
			this.nowData = new Date();
		}
		isFirstIntroduce() {
			if (!this.tempGetIntroduce) {
				this.tempGetIntroduce = new Date().getTime();
				return true;
			}
			let newdata = new Date(this.tempGetIntroduce);
			if (
				this.nowData.getMonth() == newdata.getMonth() &&
				this.nowData.getDay() == newdata.getDay()
			) {
				return false;
			} else {
				return true;
			}
		}
		setFirstIntroduce() {
			this.tempGetIntroduce = new Date().getTime();
			this.setToStorage();
		}
		setGameData(str, value) {
			this[str] = value;
			this.setToStorage();
		}
		getGameData(str) {
			return this[str];
		}
		changeGameData(str, value) {
			this[str] += value;
			this.setToStorage();
		}
		hasTheParam(value) {
			return this[value] === undefined ? false : true;
		}
		setToStorage() {
			localStorage.setItem('gameData', JSON.stringify(this));
		}
		getFromStorage() {
			let obj = localStorage.getItem('gameData');
			if (obj) {
				obj = JSON.parse(obj);
				let num = Object.keys(obj);
				for (let i = 0; i < num.length; i++) {
					let nameString = num[i];
					this[nameString] = obj[nameString];
				}
			}
		}
		generateMixed(n) {
			var chars = [
				'0',
				'1',
				'2',
				'3',
				'4',
				'5',
				'6',
				'7',
				'8',
				'9',
				'A',
				'B',
				'C',
				'D',
				'E',
				'F',
				'G',
				'H',
				'I',
				'J',
				'K',
				'L',
				'M',
				'N',
				'O',
				'P',
				'Q',
				'R',
				'S',
				'T',
				'U',
				'V',
				'W',
				'X',
				'Y',
				'Z'
			];
			var res = '';
			for (var i = 0; i < n; i++) {
				var id = Math.ceil(Math.random() * 35);
				res += chars[id];
			}
			return res;
		}
	}
	GameData.ins_ = new GameData();

	class SkeletonAnimation extends fgui.GComponent {
		constructor() {
			super();
			this.spineName = null;
			this.mFactory = null;
			this.skeleton = null;
			this.isLoop = true;
			this.isOverRemove = false;
			this.handler = null;
			this.touchable = false;
		}
		play(
			spineName,
			isLoop = true,
			isOverRemove = false,
			handler = null,
			aniName = null
		) {
			let sl = this;
			if (sl.spineName == spineName) return;
			sl.clear();
			sl.spineName = spineName;
			sl.isLoop = isLoop;
			sl.isOverRemove = isOverRemove;
			sl.handler = handler;
			sl.mFactory = new Laya.Templet();
			sl.mFactory.loadAni(UrlUtils.GetSpineUrl(spineName));
			sl.mFactory.once(Laya.Event.COMPLETE, this, this.onComplete, [
				aniName
			]);
		}
		onComplete(aniName) {
			this.skeleton = this.mFactory.buildArmature(0);
			this.displayObject.addChild(this.skeleton);
			this.skeleton.pos(0, 0);
			this.skeleton.play(aniName == null ? 0 : aniName, this.isLoop);
			if (!this.isLoop)
				this.skeleton.once(
					Laya.Event.STOPPED,
					this,
					this.completeHandler
				);
		}
		PlayAni(aniName, isLoop = true, stopPecent) {
			this.skeleton.play(aniName, isLoop, true);
			if (stopPecent)
				Laya.timer.loop(16, this, this.aniCounter, [stopPecent]);
		}
		playAniStopArr(aniName, isLoop, stopPecent, handler) {
			this.skeleton.play(aniName, isLoop, true);
			if (stopPecent)
				Laya.timer.loop(16, this, this.aniCounterArr, [
					stopPecent,
					handler
				]);
		}
		aniCounter(stopPecent) {
			if (
				stopPecent <
				this.skeleton.player.currentPlayTime /
					this.skeleton.player.playDuration
			) {
				this.skeleton.paused();
			}
		}
		aniCounterArr(stopPecent, handler) {
			for (let i = 0; i < stopPecent.length; i++) {
				if (!stopPecent[i]) continue;
				if (
					stopPecent[i] <
					this.skeleton.player.currentPlayTime /
						this.skeleton.player.playDuration
				) {
					this.skeleton.paused();
					stopPecent[i] = undefined;
					handler.runWith([i]);
				}
			}
		}
		contiune() {
			this.skeleton.resume();
		}
		completeHandler() {
			if (this.isOverRemove) this.clear();
			if (this.handler != null) this.handler.run();
		}
		clear() {
			this.spineName = null;
			this.isLoop = true;
			this.isOverRemove = false;
			this.handler = null;
			this.displayObject.removeChildren();
			if (this.mFactory != null) {
				this.mFactory.off(
					Laya.Event.COMPLETE,
					this,
					this.onComplete,
					false
				);
				this.mFactory.destroy();
				this.mFactory = null;
			}
			if (this.skeleton != null) {
				this.skeleton.off(
					Laya.Event.STOPPED,
					this,
					this.completeHandler,
					false
				);
				this.skeleton.destroy();
				this.skeleton = null;
			}
		}
	}

	class UILoadingView extends UIBaseWindow {
		constructor() {
			super('UILoadingView', 'UILoadingView');
			this.initHandler = null;
			this.completeHandler = null;
			this.slider = null;
			this.bg = null;
			this.n2 = null;
			this.n4 = null;
			this.n5 = null;
			this.n6 = null;
			this.lab_tips = null;
		}
		SetViewStruct() {
			super.SetViewStruct();
			this.viewStruct.layerType = LayerType.TYPE_TOP;
			this.viewStruct.layout = 5;
		}
		InitUI() {
			if (!this.loadingSpine) {
				this.loadingSpine = new SkeletonAnimation();
				this.addChild(this.loadingSpine);
				this.loadingSpine.x = this.bg.width / 2;
				this.loadingSpine.y = this.bg.height / 2;
			}
			this.loadingSpine.play('loading', true);
			// setTimeout(() => {
			// 	let load_and_uzip = window['load_and_uzip'];
			// 	load_and_uzip && load_and_uzip();
			// }, 300);
		}
		InitData(param) {
			this.initHandler = param[0];
			this.completeHandler = param[1];
			LoadQueue.Inst.clearRate();
			Laya.timer.frameLoop(1, this, this.onUpdate);
			if (this.initHandler) this.initHandler.run();
		}
		onUpdate() {
			let rate = LoadQueue.Inst.GetRate();
			Logger.log(this, 'loading...	' + rate);
			if (rate >= 1) {// && Laya['dataUnziped'] == true
				Laya.timer.clear(this, this.onUpdate);
				if (this.completeHandler != null) this.completeHandler.run();
				else {
					UISystem.Inst.RemoveWindowView(this);
				}
			}
			let onValue = Math.ceil(rate * 100);
			if (this.slider.value > onValue) {
				return;
			}
			fgui.GTween.kill(this.slider);
			fgui.GTween.to(this.slider.value, onValue, 0.2)
				.setTarget(this.slider, 'value')
				.onComplete(this.txtComplet, this);
		}
		txtComplet() {
			let lf = this;
			if (lf.slider.value >= 100) {
				Logger.log(lf, 'completeHandler： ' + lf.completeHandler);
				Laya.timer.frameOnce(1, null, function () {
					if (lf.completeHandler != null) lf.completeHandler.run();
				});
			}
		}
		onResize() {
			// super.onResize();
			// this.bg.x = -this.x;
			// this.bg.y = -this.y;
			// this.bg.width = GameConfig.viewWidth;
			// this.bg.height = GameConfig.viewHeight;
			// this.slider.x = GameConfig.viewWidth - 347 - this.x;
			// this.n2.x = GameConfig.viewWidth - 190 - this.x;
			// this.n4.x = GameConfig.viewWidth - 80 - this.x;
			// this.n5.x = GameConfig.viewWidth - 71 - this.x;
			// this.n6.x = GameConfig.viewWidth - 62 - this.x;
			// this.loadingSpine.scaleX = this.bg._rawWidth / 1280;
			// this.lab_tips.x = this.loadingSpine.x - this.lab_tips.width / 2;
		}
		Reset() {
			Laya.timer.clear(this, this.onUpdate);
			this.initHandler = null;
			this.completeHandler = null;
		}
	}

	class Dictionary$2 {
		constructor() {
			this.isOne = true;
			this.keys = new Array();
			this.values = new Array();
		}
		set(key, value) {
			if (this.isOne) {
				if (this.check(key)) return true;
			}
			for (let i = 0; i < this.keys.length; i++) {
				if (this.keys[i] === undefined) {
					this.keys[i] = key;
					this.values[i] = value;
					return;
				}
			}
			this.keys.push(key);
			this.values.push(value);
		}
		check(key) {
			for (let i = 0; i < this.keys.length; i++) {
				if (this.keys[i] === key) {
					return true;
				}
			}
			return false;
		}
		get(key) {
			for (let i = 0; i < this.keys.length; i++) {
				if (this.keys[i] === key) {
					return this.values[i];
				}
			}
		}
		gets(key) {
			if (this.isOne) {
				return;
			}
			let arr = [];
			for (let i = 0; i < this.keys.length; i++) {
				if (this.keys[i] === key) {
					arr.push(this.values[i]);
				}
			}
			return arr;
		}
		indexOf(value) {
			for (let i = 0; i < this.values.length; i++) {
				if (this.values[i] === value) {
					return i;
				}
			}
			return undefined;
		}
		remove(key) {
			for (let i = 0; i < this.keys.length; i++) {
				if (this.keys[i] === key) {
					this.keys[i] === undefined;
					this.values[i] === undefined;
					return;
				}
			}
		}
		removeByArg(key, arg) {
			for (let i = 0; i < this.keys.length; i++) {
				if (
					this.keys[i] === key &&
					(arg.value === this.values[i][arg.name] ||
						arg === undefined)
				) {
					this.keys[i] === undefined;
					this.values[i] === undefined;
				}
			}
		}
		clear() {
			this.keys = [];
			this.values = [];
		}
		getDicList() {
			for (let i = 0; i < this.keys.length; i++) {
				console.log('【' + i + '】-----------key:' + this.keys[i]);
				console.log('value', this.values[i]);
			}
		}
		getValuesArr() {
			return this.values;
		}
		getKeysArr() {
			return this.keys;
		}
	}

	var SDK_ORDER;
	(function (SDK_ORDER) {
		SDK_ORDER[(SDK_ORDER['AD_VIDEO_CLOSE'] = 0)] = 'AD_VIDEO_CLOSE';
		SDK_ORDER[(SDK_ORDER['AD_VIDEO_ISSHOW'] = 1)] = 'AD_VIDEO_ISSHOW';
		SDK_ORDER[(SDK_ORDER['AD_NATIVE_BANNER_ISSHOW'] = 2)] =
			'AD_NATIVE_BANNER_ISSHOW';
		SDK_ORDER[(SDK_ORDER['AD_INSERT_ISSHOW'] = 3)] = 'AD_INSERT_ISSHOW';
		SDK_ORDER[(SDK_ORDER['AD_IMPACTION_ISSHOW'] = 4)] =
			'AD_IMPACTION_ISSHOW';
		SDK_ORDER[(SDK_ORDER['AD_NATIVE_SMALL_ISSHOW'] = 5)] =
			'AD_NATIVE_SMALL_ISSHOW';
		SDK_ORDER[(SDK_ORDER['AD_CLICK_NATIVE_BANNER'] = 6)] =
			'AD_CLICK_NATIVE_BANNER';
		SDK_ORDER[(SDK_ORDER['AD_CLICK_NATIVE_INSERT'] = 7)] =
			'AD_CLICK_NATIVE_INSERT';
		SDK_ORDER[(SDK_ORDER['AD_CLICK_NATIVE_IMPACTION'] = 8)] =
			'AD_CLICK_NATIVE_IMPACTION';
		SDK_ORDER[(SDK_ORDER['AD_CLICK_SUPRISED_BOX'] = 9)] =
			'AD_CLICK_SUPRISED_BOX';
		SDK_ORDER[(SDK_ORDER['AD_NATIVE_INSERT_CLOSE'] = 10)] =
			'AD_NATIVE_INSERT_CLOSE';
		SDK_ORDER[(SDK_ORDER['AD_QQ_BOX_SHOW'] = 11)] = 'AD_QQ_BOX_SHOW';
		SDK_ORDER[(SDK_ORDER['AD_MISTAKE_BTN_UP'] = 12)] = 'AD_MISTAKE_BTN_UP';
		SDK_ORDER[(SDK_ORDER['AD_OV_SUPRISEDBOX_NATIVE'] = 13)] =
			'AD_OV_SUPRISEDBOX_NATIVE';
		SDK_ORDER[(SDK_ORDER['HT_HORIZ_BOX_ISSHOW'] = 14)] =
			'HT_HORIZ_BOX_ISSHOW';
		SDK_ORDER[(SDK_ORDER['HT_MORE_GAME_ISSHOW'] = 15)] =
			'HT_MORE_GAME_ISSHOW';
		SDK_ORDER[(SDK_ORDER['HT_GAME_ICON_ISSHOW'] = 16)] =
			'HT_GAME_ICON_ISSHOW';
		SDK_ORDER[(SDK_ORDER['HT_GAME_LIST_BOX_ISSHOW'] = 17)] =
			'HT_GAME_LIST_BOX_ISSHOW';
		SDK_ORDER[(SDK_ORDER['HT_JUMP_TO_GAME'] = 18)] = 'HT_JUMP_TO_GAME';
		SDK_ORDER[(SDK_ORDER['HT_YOU_LIKE_ICON'] = 19)] = 'HT_YOU_LIKE_ICON';
		SDK_ORDER[(SDK_ORDER['HT_CHANGE_VIEDO_RECODE'] = 20)] =
			'HT_CHANGE_VIEDO_RECODE';
		SDK_ORDER[(SDK_ORDER['SHARE_GAME'] = 21)] = 'SHARE_GAME';
		SDK_ORDER[(SDK_ORDER['HT_CHANGE_SHARE_GAME_ICON'] = 22)] =
			'HT_CHANGE_SHARE_GAME_ICON';
		SDK_ORDER[(SDK_ORDER['HT_ICON_NO_SOUND_CHANGE'] = 23)] =
			'HT_ICON_NO_SOUND_CHANGE';
		SDK_ORDER[(SDK_ORDER['HT_VER_LEFT_BOX'] = 24)] = 'HT_VER_LEFT_BOX';
		SDK_ORDER[(SDK_ORDER['HT_VER_RIGHT_BOX'] = 25)] = 'HT_VER_RIGHT_BOX';
		SDK_ORDER[(SDK_ORDER['HT_LEFT_CHOU_TI_BOX'] = 26)] =
			'HT_LEFT_CHOU_TI_BOX';
		SDK_ORDER[(SDK_ORDER['HT_HORIZO_BOX'] = 27)] = 'HT_HORIZO_BOX';
		SDK_ORDER[(SDK_ORDER['HT_BIG_GAME_xBOX'] = 28)] = 'HT_BIG_GAME_xBOX';
		SDK_ORDER[(SDK_ORDER['HT_ICON_SETTING_BOX'] = 29)] =
			'HT_ICON_SETTING_BOX';
		SDK_ORDER[(SDK_ORDER['HT_ICON_WX'] = 30)] = 'HT_ICON_WX';
		SDK_ORDER[(SDK_ORDER['ALD_SEND_EVENT'] = 31)] = 'ALD_SEND_EVENT';
		SDK_ORDER[(SDK_ORDER['YUN_ZHI_REPORT_DATA'] = 32)] =
			'YUN_ZHI_REPORT_DATA';
		SDK_ORDER[(SDK_ORDER['CHANGE_GAME_BY_PLTFORM'] = 33)] =
			'CHANGE_GAME_BY_PLTFORM';
		SDK_ORDER[(SDK_ORDER['CHANGE_GAME_PROP_DETAIL'] = 34)] =
			'CHANGE_GAME_PROP_DETAIL';
		SDK_ORDER[(SDK_ORDER['CHANGE_GAME_CLICK_BAO_XIANG'] = 35)] =
			'CHANGE_GAME_CLICK_BAO_XIANG';
		SDK_ORDER[(SDK_ORDER['CHANGE_GAME_GET_ENINTRODUCE'] = 36)] =
			'CHANGE_GAME_GET_ENINTRODUCE';
		SDK_ORDER[(SDK_ORDER['CHANGE_GAME_GET_YIN_SHEN'] = 37)] =
			'CHANGE_GAME_GET_YIN_SHEN';
		SDK_ORDER[(SDK_ORDER['CHANGE_GAME_GET_ADD_DAY'] = 38)] =
			'CHANGE_GAME_GET_ADD_DAY';
		SDK_ORDER[(SDK_ORDER['CHANGE_GAME_LOAGIN_AWARD'] = 39)] =
			'CHANGE_GAME_LOAGIN_AWARD';
		SDK_ORDER[(SDK_ORDER['CHANGE_QQ_MAIN_BAOXIANG'] = 40)] =
			'CHANGE_QQ_MAIN_BAOXIANG';
		SDK_ORDER[(SDK_ORDER['CHANGE_FOUND_AWARD'] = 41)] =
			'CHANGE_FOUND_AWARD';
		SDK_ORDER[(SDK_ORDER['CHANGE_FOUND_AWARD_WX_ICON'] = 42)] =
			'CHANGE_FOUND_AWARD_WX_ICON';
		SDK_ORDER[(SDK_ORDER['CHANGE_CLOSE_ENINTRODUCE'] = 43)] =
			'CHANGE_CLOSE_ENINTRODUCE';
		SDK_ORDER[(SDK_ORDER['HANDLER_RUN'] = 44)] = 'HANDLER_RUN';
		SDK_ORDER[(SDK_ORDER['SHOW_MSG'] = 45)] = 'SHOW_MSG';
		SDK_ORDER[(SDK_ORDER['REPORT_MONITOR'] = 46)] = 'REPORT_MONITOR';
		SDK_ORDER[(SDK_ORDER['BARRAGE_WRODS_Change'] = 47)] =
			'BARRAGE_WRODS_Change';
		SDK_ORDER[(SDK_ORDER['NO_SDK_HANDLER'] = 48)] = 'NO_SDK_HANDLER';
		SDK_ORDER[(SDK_ORDER['TIPS_GAME'] = 49)] = 'TIPS_GAME';
		SDK_ORDER[(SDK_ORDER['EXIT_GAME'] = 50)] = 'EXIT_GAME';
		SDK_ORDER[(SDK_ORDER['SHOW_PRIVACY_ICON'] = 51)] = 'SHOW_PRIVACY_ICON';
	})(SDK_ORDER || (SDK_ORDER = {}));
	class SDK {
		constructor() {
			this.dir_Handler = new Dictionary$2();
			this.dir_Handler.isOne = false;
		}
		register(arr_symbol, Handler) {
			Handler.once = false;
			for (let i = 0; i < arr_symbol.length; i++) {
				this.dir_Handler.set(arr_symbol[i], Handler);
			}
		}
		send(symbol, args) {
			let arr = this.dir_Handler.gets(symbol);
			if (!arr) {
				console.log('此事件为空');
				return;
			}
			for (let i = 0; i < arr.length; i++) {
				let ar = arr[i].args;
				if (!ar) ar = args;
				if (!ar) ar = {};
				ar.sym = symbol;
				arr[i].runWith(ar);
			}
		}
		remove(symbol, caller) {
			let arr = this.dir_Handler.gets(symbol);
			if (!arr) {
				console.log('此事件为空');
				return;
			}
			this.dir_Handler.removeByArg(symbol, {
				name: 'caller',
				value: caller
			});
			for (let i = 0; i < arr.length; i++) {
				if (arr[i].caller === caller || caller === undefined) {
					arr[i].recover();
				}
			}
		}
	}
	SDK.ins_ = new SDK();

	class UIDayView extends UIBaseWindow {
		constructor() {
			super('UIDayView', 'UIDayView');
			this.text_DayTips = null;
			this.text_RandomTips = null;
			this.day = null;
			this.bg = null;
		}
		SetViewStruct() {
			super.SetViewStruct();
			this.viewStruct.layerType = LayerType.TYPE_MAIN;
			this.viewStruct.layout = 4;
		}
		InitUI() {
			let curDay = Role.ins_.getDayNum();
			if (curDay == Role.ins_.getDataByString('dayMax')) curDay = 5;
			let DayCon = DayConfig.getItemByKey(curDay);
			if (!DayCon) curDay = 5;
			this.text_DayTips.text = DayConfig.getItemByKey(curDay).daytxt;
			let num = 0;
			let add = 0;
			for (let id = 1; id <= DayTipConfig.items.length; id++) {
				let item = DayTipConfig.getItemByKey(id);
				num += item.weight;
			}
			num = num * Math.random();
			for (let id = 1; id <= DayTipConfig.items.length; id++) {
				let item = DayTipConfig.getItemByKey(id);
				add += item.weight;
				if (add > num) {
					add = id;
					break;
				}
			}
			this.text_RandomTips.text = DayTipConfig.getItemByKey(add).txt;
			this.day.url = DayConfig.getItemByKey(curDay).daypic;
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'wx',
				isShow: false,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'meizu',
				isShow: false,
				adPoint: 4
			});
		}
		InitData() {
			SDK.ins_.send(SDK_ORDER.AD_IMPACTION_ISSHOW, {
				name: 'oppo',
				isShow: true,
				adPoint: 7
			});
			SDK.ins_.send(SDK_ORDER.AD_IMPACTION_ISSHOW, {
				name: 'vivo',
				isShow: true,
				adPoint: 7
			});
			SDK.ins_.send(SDK_ORDER.AD_IMPACTION_ISSHOW, {
				name: 'meizu',
				isShow: true,
				adPoint: 7
			});
		}
		countTimer() {
			Laya.timer.once(2000, this, this.Hide);
		}
		Hide() {
			UISystem.Inst.CreateWindowView(UIGamePlayView);
		}
		onResize() {
			// super.onResize();
			// this.bg.x = -this.x;
			// this.bg.y = -this.y;
			// this.bg.height = GameConfig.viewHeight;
			// this.bg.width = GameConfig.viewWidth;
			// this.text_RandomTips.x = GameConfig.viewWidth - 35;
		}
	}

	class BuffVO {
		constructor() {
			this._buffId = 0;
			this.buffRes = null;
			this.time = 0;
			this.startTime = 0;
			this.date = null;
			this.date = new Date();
		}
		set buffId(value) {
			this._buffId = value;
			if (value > 0) {
				this.buffRes = NpcBuffResource.getItemByKey(value);
				this.startTime = new Date().getTime();
			}
		}
		get buffId() {
			return this._buffId;
		}
		Check() {
			if (this.time == 0) return false;
			return new Date().getTime() - this.startTime >= this.time;
		}
		GetLastTime() {
			return this.time + this.startTime - new Date().getTime();
		}
	}
	BuffVO.TYPE_ADDSPEED = 0;
	BuffVO.TYPE_LESSSPEED = 1;
	BuffVO.TYPE_COMA = 2;
	BuffVO.TYPE_TAUNT = 3;
	BuffVO.TYPE_BLINDING = 4;

	class BuffModel {
		constructor() {
			this.curBuffs = null;
			this.curAutoBuff = null;
			this.curBuffs = new Dictionary();
			Laya.timer.frameLoop(1, this, this.onUpdate);
		}
		static get Inst() {
			if (this._Inst == null) this._Inst = new BuffModel();
			return this._Inst;
		}
		ClearAutoBuffVO() {
			this.curAutoBuff = null;
		}
		GetTriggerBuffVO() {
			if (this.curAutoBuff == null) return null;
			if (this.curAutoBuff.Check()) return null;
			return this.curAutoBuff;
		}
		onUpdate() {
			for (const key in this.curBuffs) {
				let buffVO = this.curBuffs[key];
				if (buffVO && buffVO.Check()) {
					this.RemoveBuff(buffVO.buffId);
				}
			}
		}
		GetBuffVO(buffId) {
			return this.curBuffs[buffId];
		}
		AddBuff(buffId) {
			let buffRes = NpcBuffResource.getItemByKey(buffId);
			if (buffRes == null) return;
			this.RemoveBuff(buffId);
			let buffVO = new BuffVO();
			buffVO.buffId = buffId;
			this.curBuffs[buffId] = buffVO;
			buffVO.time = buffRes.bufftime * 1000;
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			if (kbnn) kbnn.AddBuffVO(buffVO);
		}
		RemoveBuff(buffId) {
			let buffVO = this.GetBuffVO(buffId);
			if (buffVO == null) return;
			delete this.curBuffs[buffId];
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			if (kbnn) kbnn.RemoveBuffVO(buffVO);
		}
		GetBuffVOByBuffId(buffId) {
			return this.curBuffs[buffId];
		}
		GetSpeedRate() {
			let rate = 0;
			for (const key in this.curBuffs) {
				let buffVO = this.curBuffs[key];
				if (buffVO) {
					if (buffVO.buffRes.type == BuffVO.TYPE_ADDSPEED) {
						rate += buffVO.buffRes.buffvalue * 0.01;
					} else if (buffVO.buffRes.type == BuffVO.TYPE_LESSSPEED) {
						rate -= buffVO.buffRes.buffvalue * 0.01;
					}
				}
			}
			return rate;
		}
	}
	BuffModel._Inst = null;
	BuffModel.BUFFID_1 = 1;
	BuffModel.BUFFID_2 = 2;
	BuffModel.BUFFID_3 = 3;
	BuffModel.BUFFID_4 = 4;
	BuffModel.BUFFID_5 = 5;
	BuffModel.BUFFID_6 = 6;
	BuffModel.BUFFID_7 = 7;
	BuffModel.BUFFID_8 = 8;
	BuffModel.BUFFID_9 = 9;
	BuffModel.BUFFID_10 = 10;
	BuffModel.BUFFID_11 = 11;
	BuffModel.BUFFID_12 = 12;
	BuffModel.BUFFID_13 = 13;
	BuffModel.BUFFID_14 = 14;
	BuffModel.BUFFID_15 = 15;
	BuffModel.BUFFID_16 = 16;
	BuffModel.BUFFID_17 = 17;

	class PropPositionMgr {
		constructor() {}
		static get Inst() {
			if (this.inst == null) {
				window.boot = this.inst = new PropPositionMgr();
			}
			return this.inst;
		}
		setPropVo(vo) {
			this.propVo.push(vo);
			this.propPositon(vo, ItemResource.getItemByKey(vo.different));
		}
		propPositon(vo, config) {
			let propPostionArr = config.Randomid.split(',');
			let surelock = false;
			let randomlock = false;
			for (let p = 0; p < propPostionArr.length; p++) {
				if (!surelock) {
					for (let i = 0; i < this.surePostionArr.length; i++) {
						if (
							this.surePostionArr[i].getId() ==
							parseInt(propPostionArr[p])
						) {
							this.sureProp.push(vo);
							surelock = true;
							break;
						}
					}
				}
				if (!randomlock) {
					for (let i = 0; i < this.randomPositionArr.length; i++) {
						if (
							this.randomPositionArr[i].getId() ==
							parseInt(propPostionArr[p])
						) {
							this.randomProp.push(vo);
							randomlock = true;
							break;
						}
					}
				}
				if (surelock && randomlock) return;
			}
			if (config.Name == '弹药') {
				this.ziDanProp.push(vo);
			}
		}
		randomPosition() {
			for (let i = 0; i < this.sureProp.length; i++) {
				let vo = this.sureProp[i];
				let randomId = Math.floor(Math.random() * this.sureProp.length);
				this.sureProp[i] = this.sureProp[randomId];
				this.sureProp[randomId] = vo;
			}
			for (let i = 0; i < this.randomPositionArr.length; i++) {
				let position = this.randomPositionArr[i];
				let randomId = Math.floor(
					Math.random() * this.randomPositionArr.length
				);
				this.randomPositionArr[i] = this.randomPositionArr[randomId];
				this.randomPositionArr[randomId] = position;
			}
		}
		postionSetAction() {
			this.randomPosition();
			this.recordStorage();
			this.setPosition();
			if (Role.ins_.getDataByString('endStoragePosition'))
				this.ChangePostion();
			this.storageVoPos();
		}
		storageVoPos() {
			let roleStorageData = Role.ins_.getDataByString('roleStorageData');
			if (!roleStorageData) return;
			for (let i = 0; i < this.propVo.length; i++) {
				if (roleStorageData.handProp == this.propVo[i]) {
					this.propVo[i].x = roleStorageData.position.x;
					this.propVo[i].y = roleStorageData.position.y;
					this.propVo[i].z = roleStorageData.position.z + 1.5;
					return;
				}
			}
			let propTransfs = Role.ins_.getDataByString('propTransformArr');
			if (propTransfs) {
				for (let i = 0; i < this.propVo.length; i++) {
					if (this.propVo[i].different == roleStorageData.handProp)
						continue;
					let transf = propTransfs[this.propVo[i].different + ''];
					if (transf) {
						this.propVo[i].x = transf.x;
						this.propVo[i].y = transf.y;
						this.propVo[i].z = transf.z;
						this.propVo[i].EulerX = transf.rx;
						this.propVo[i].EulerY = transf.ry;
						this.propVo[i].EulerZ = transf.rx;
					}
				}
			}
		}
		recordStorage() {
			this.getFromStroage();
			for (let i = 0; i < this.sureProp.length; i++) {
				this.storageSureProp.push(this.sureProp[i].different);
			}
			for (let i = 0; i < this.randomPositionArr.length; i++) {
				this.storageRandomPosition.push(
					this.randomPositionArr[i].getId()
				);
			}
		}
		setPosition() {
			for (let i = 0; i < this.surePostionArr.length; i++) {
				let position = this.surePostionArr[i];
				for (let v = 0; v < this.sureProp.length; v++) {
					let vo = this.sureProp[v];
					if (this.isVoUse(vo)) continue;
					let num = position.setProp(
						vo,
						ItemResource.getItemByKey(vo.different)
					);
					if (num != 0) {
						this.hasPostionArr.push(position);
						this.alreadyUes.push(vo);
						break;
					}
				}
			}
			for (let i = 0; i < this.randomProp.length; i++) {
				let propVo = this.randomProp[i];
				if (this.isVoUse(propVo)) continue;
				for (let p = 0; p < this.randomPositionArr.length; p++) {
					let num = this.randomPositionArr[p].setProp(
						propVo,
						ItemResource.getItemByKey(propVo.different)
					);
					if (num != 0) {
						this.hasPostionArr.push(this.randomPositionArr[p]);
						this.alreadyUes.push(propVo);
						break;
					}
				}
			}
			this.ziDanPosition[0].setProp_Array(this.ziDanProp);
			this.hasPostionArr.push(this.ziDanPosition[0]);
		}
		newSpecialProp(vo) {
			for (let i = 0; i < this.hasPostionArr.length; i++) {
				let position = this.hasPostionArr[i];
                if(!position.flag) continue;
				for (let v = 0; v < position.vo.length; v++) {
					if (vo == position.vo[v]) {
						PropMgr.Inst.specialProp(
							position.vo[v],
							position.arrPosition[v],
							position
						);
						return;
					}
				}
			}
			this.sureProp = null;
			this.propVo = null;
			this.randomProp = null;
			this.alreadyUes = null;
			this.ziDanPosition = null;
			this.ziDanProp = null;
			this.nullVo = null;
		}
		isHasInArrHasPositon(vo) {
			for (let i = 0; i < this.hasPostionArr.length; i++) {
				let position = this.hasPostionArr[i];
				for (let v = 0; v < position.vo.length; v++) {
					if (vo == position.vo[v]) {
						return true;
					}
				}
			}
			return false;
		}
		createChotiProp() {
			for (let i = 0; i < this.hasPostionArr.length; i++) {
				let position = this.hasPostionArr[i];
				for (let v = 0; v < position.vo.length; v++) {
					if (position.parentName != '') {
						let prop = PropMgr.Inst.specialProp(
							position.vo[v],
							position.arrPosition[v],
							position
						);
						position.prop[v] = prop;
					}
				}
			}
		}
		isVoUse(vo) {
			for (let a = 0; a < this.alreadyUes.length; a++) {
				if (vo === this.alreadyUes[a]) return true;
			}
			return false;
		}
		addChouti(nameString, childName, sprite3D) {
			this.choutiArr.set(nameString + ',' + childName, sprite3D);
			for (let i = 0; i < this.randomPositionArr.length; i++) {
				let position = this.randomPositionArr[i];
				if (position.parentName == nameString + ',' + childName) {
					if (!position.prop[0]) {
						position.parentNode = sprite3D;
						continue;
					}
					if (position.prop[0].propSprite) {
						position.prop[0].propSprite.removeSelf();
						sprite3D.addChild(position.prop[0].propSprite);
						position.prop[0].propSprite.transform.localPosition =
							new Laya.Vector3(0, -0.0303, 0);
						if (
							position.parentName ==
							'suoyoujiaoben,Car,Car_Glove_box'
						) {
							position.prop[0].propSprite.transform.position =
								new Laya.Vector3(0.278, 0.7509999, -0.5800195);
						}
						position.prop[0].propSprite.active = true;
					} else {
						position.parentNode = sprite3D;
					}
				}
			}
		}
		getAbPositon(id) {
			for (let i = 0; i < this.surePostionArr.length; i++) {
				if (id == this.surePostionArr[i].id) {
					return this.surePostionArr[i];
				}
			}
		}
		mgrInit() {
			this.surePostionArr = [];
			this.randomPositionArr = [];
			this.hasPostionArr = [];
			this.sureProp = [];
			this.propVo = [];
			this.randomProp = [];
			this.alreadyUes = [];
			this.ziDanPosition = [];
			this.storageSureProp = [];
			this.storageRandomPosition = [];
			this.ziDanProp = [];
			this.nullVo = [];
			this.allPostionDic = new Dictionary$1();
			this.choutiArr = new Dictionary$1();
			let index = 1;
			while (Position.getItemByKey(index)) {
				if (Laya.Browser.window.tt) {
					let isOK = false;
					for (let i = 0; i < KickResource.items.length; i++) {
						if (KickResource.items[i].positionid == index) {
							isOK = true;
							index++;
							break;
						}
					}
					if (isOK) continue;
				}
				let postionItem = Position.getItemByKey(index);
				let postion = new PropPositon(postionItem);
				switch (postionItem.sure) {
					case 1:
						this.surePostionArr.push(postion);
						this.allPostionDic.set(postionItem.id, postion);
						break;
					case 0:
						this.randomPositionArr.push(postion);
						this.allPostionDic.set(postionItem.id, postion);
						break;
					case 2:
						this.ziDanPosition.push(new PropPositon(postionItem));
						break;
				}
				index++;
			}
		}
		setToStorage() {
			Role.ins_.setDataByString('storageSureProp', this.storageSureProp);
			Role.ins_.setDataByString(
				'storageRandomPosition',
				this.storageRandomPosition
			);
			Role.ins_.setDataByString(
				'endStoragePosition',
				this.endStoragePosition
			);
		}
		getFromStroage() {
			if (!Role.ins_.getDataByString('isLoadGame')) return;
			let arrSure = Role.ins_.getDataByString('storageSureProp');
			let arrRandomPostion = Role.ins_.getDataByString(
				'storageRandomPosition'
			);
			if (!arrSure || !arrRandomPostion) return;
			for (let i = 0; i < arrSure.length; i++) {
				for (let v = 0; v < this.propVo.length; v++) {
					if (this.propVo[v].different == arrSure[i]) {
						this.sureProp[i] = this.propVo[v];
						break;
					}
				}
			}
			let arrRandomPostion_ = [];
			for (let i = 0; i < arrRandomPostion.length; i++) {
				for (
					let indexR = 0;
					indexR < this.randomPositionArr.length;
					indexR++
				) {
					if (
						arrRandomPostion[i] ==
						this.randomPositionArr[indexR].getId()
					) {
						arrRandomPostion_.push(this.randomPositionArr[indexR]);
						break;
					}
				}
			}
			this.randomPositionArr = arrRandomPostion_;
		}
		ChangePostion() {
			let allPosition = [];
			for (let i = 0; i < this.allPostionDic.values.length; i++) {
				allPosition.push(this.allPostionDic.values[i]);
			}
			this.changeRandom(allPosition);
			this.recordChangeStorage(allPosition);
			this.changeSetPostion(allPosition);
		}
		recordChangeStorage(allPosition) {
			this.endStoragePosition =
				Role.ins_.getDataByString('endStoragePosition');
			if (this.endStoragePosition) {
				allPosition = [];
				this.endStoragePosition.forEach(id => {
					for (let i = 0; i < this.allPostionDic.values.length; i++) {
						if (this.allPostionDic.values[i].id == id) {
							allPosition.push(this.allPostionDic.values[i]);
						}
					}
				});
			} else {
				this.endStoragePosition = [];
				allPosition.forEach(position => {
					this.endStoragePosition.push(position.id);
				});
			}
		}
		changeRandom(allPosition) {
			for (let i = 0; i < allPosition.length; i++) {
				let vo = allPosition[i];
				let randomId = Math.floor(Math.random() * allPosition.length);
				allPosition[i] = allPosition[randomId];
				allPosition[randomId] = vo;
			}
		}
		changeSetPostion(allPosition) {
			let configObj = { arrPropId: null, arrPostionId: null };
			let configId = Role.ins_.getDataByString('introduceConfigId');
			let config = RandomGuideItem.getItemByKey(configId);
			let allReadyUsePos = [];
			configObj.arrPropId = config.item;
			configObj.arrPostionId = config.itemrandom;
			for (let i = 0; i < configObj.arrPropId.length; i++) {
				let id = parseInt(configObj.arrPropId[i][0]);
				let oldPostion = this.getPropPosition(id);
				let newPostion = this.changeNewPostion(
					configObj.arrPostionId[i],
					allPosition,
					allReadyUsePos
				);
				if (!newPostion || !oldPostion) {
					console.error(
						'出错 或 无 不更新【' + id + '】',
						oldPostion,
						newPostion
					);
					continue;
				}
				allReadyUsePos.push(newPostion.id);
				console.error(
					'物品[' +
						id +
						'] => [' +
						oldPostion.id +
						']  转到 [' +
						newPostion.id +
						' - * ]'
				);
				if (!this.isHasInArrHasPositon(newPostion.vo[0]))
					this.hasPostionArr.push(newPostion);
				this.changeOldNewPositon(oldPostion, newPostion);
			}
			console.error(
				'---------------------------位置交换完毕---------------------------------'
			);
		}
		changeNewPostion(arrPositionString, allPosition, allReadyUsePos) {
			if (arrPositionString == 'null') return null;
			let arrStringPos = arrPositionString;
			if (typeof arrStringPos == 'string')
				arrStringPos = arrStringPos.split(',');
			for (let out = 0; out < allPosition.length; out++) {
				let position = allPosition[out];
				for (let i = 0; i < arrStringPos.length; i++) {
					if (this.changeIsAllReadyUse(allReadyUsePos, position.id))
						break;
					if (position.id == parseInt(arrStringPos[i])) {
						if (position.prop.length > 0) {
							if (!position.prop[0]) break;
						}
						return position;
					}
				}
			}
			return null;
		}
		changeOldNewPositon(oldPostion, newPostion) {
			if (oldPostion.prop.length > 0) {
				if (oldPostion.prop[0]) {
					if (oldPostion.prop[0].id == Role.ins_.getHandPropId()) {
						MainRoleMgr.Inst.Drop();
						oldPostion.prop[0].propSprite.getComponent(
							Laya.Rigidbody3D
						).isKinematic = true;
					}
				}
			}
			let prop = [];
			let propConfig = [];
			let vo = [];
			prop = oldPostion.prop;
			propConfig = oldPostion.propConfig;
			vo = oldPostion.vo;
			oldPostion.prop = newPostion.prop;
			oldPostion.propConfig = newPostion.propConfig;
			oldPostion.vo = newPostion.vo;
			newPostion.prop = prop;
			newPostion.propConfig = propConfig;
			newPostion.vo = vo;
			this.changePropSprite(oldPostion);
			this.changePropSprite(newPostion);
		}
		changePropSprite(position) {
			let hasProp = position.prop.length > 0 ? true : false;
			let hasVo = position.vo.length > 0 ? true : false;
			if (hasVo) {
				let postion = position.config.Position.split('|');
				let arrVc = postion[0].split(',');
				position.vo[0].x = parseFloat(arrVc[0]);
				position.vo[0].y = parseFloat(arrVc[1]);
				position.vo[0].z = parseFloat(arrVc[2]);
			}
			if (hasProp) {
				let prop = position.prop[0].propSprite;
				if (position.parentName == '') {
					position.prop[0].propSprite.removeSelf();
					SceneMgr.Inst.getScene().addChild(
						position.prop[0].propSprite
					);
				}
				prop.transform.position = new Laya.Vector3(
					-position.vo[0].x,
					position.vo[0].y,
					position.vo[0].z
				);
			}
			if (position.parentName != '') {
				let scene = SceneMgr.Inst.getScene();
				let arrNodeName = position.parentName.split(',');
				let curNode = this.choutiArr.get(position.parentName);
				if (hasProp && curNode) {
					position.prop[0].propSprite.removeSelf();
					curNode.addChild(position.prop[0].propSprite);
					position.prop[0].propSprite.transform.localPosition =
						new Laya.Vector3(0, -0.0303, 0);
					if (
						position.parentName == 'suoyoujiaoben,Car,Car_Glove_box'
					) {
						position.prop[0].propSprite.transform.position =
							new Laya.Vector3(0.278, 0.7509999, -0.5800195);
					}
					position.prop[0].propSprite.active = true;
				} else if (!hasProp && curNode) {
					position.parentNode = curNode;
				} else if (hasProp && !curNode) {
				} else {
				}
			}
		}
		changeIsAllReadyUse(allReadyUsePos, id) {
			for (let i = 0; i < allReadyUsePos.length; i++) {
				if (allReadyUsePos[i] == id) {
					return true;
				}
			}
			return false;
		}
		getPropPosition(id) {
			for (let i = 0; i < this.allPostionDic.values.length; i++) {
				if (this.allPostionDic.values[i].judgePostion(id)) {
					return this.allPostionDic.values[i];
				}
			}
			return null;
		}
		clearMgr() {
			for (let i = 0; i < this.surePostionArr.length; i++) {
				let postion = this.surePostionArr[i];
				postion.clear();
			}
			for (let i = 0; i < this.randomPositionArr.length; i++) {
				let position = this.randomPositionArr[i];
				position.clear();
			}
            if(this.ziDanPosition) {
                for (let i = 0; i < this.ziDanPosition.length; i++) {
                    let position = this.ziDanPosition[i];
                    position.clear();
                }
            }
			this.allPostionDic.clear();
			this.surePostionArr = null;
			this.randomPositionArr = null;
			this.ziDanPosition = null;
			this.hasPostionArr = null;
			this.choutiArr = null;
			this.nullVo = null;
			this.propVo = null;
			this.sureProp = null;
			this.alreadyUes = null;
			this.storageSureProp = null;
			this.storageRandomPosition = null;
			this.endStoragePosition = null;
		}
	}
	class PropPositon {
		constructor(config) {
			this.isDestory = false;
			this.prop = [];
			this.propConfig = [];
			this.vo = [];
			this.arrPosition = [];
			this.config = config;
			this.has = false;
            this.flag = true;
			this.id = config.id;
			this.parentName = config.name;
			this.writePosition(config);
		}
		getId() {
			return this.id;
		}
		getDestory() {
			return this.isDestory;
		}
		judgePostion(id) {
			for (let i = 0; i < this.vo.length; i++) {
				let different = this.vo[i].different;
				if (different == id) {
					return true;
				}
			}
			return false;
		}
		writePosition(positionConfig) {
			this.isShelter = positionConfig.isShelter;
			if (positionConfig.Position == 'null') return;
			let arr = positionConfig.Position.split('|');
			for (let i = 0; i < arr.length; i++) {
				let arrVc = arr[i].split(',');
				this.arrPosition.push(
					new Laya.Vector3(
						-parseFloat(arrVc[0]),
						parseFloat(arrVc[1]),
						parseFloat(arrVc[2])
					)
				);
			}
		}
		isUse() {
			if (this.prop.length != 0 && this.propConfig.length != 0)
				return true;
			else return false;
		}
		setProp(vo, config) {
			let propPostionArr = config.Randomid.split(',');
			for (let i = 0; i < propPostionArr.length; i++) {
				if (this.has) continue;
				let id = parseInt(propPostionArr[i]);
				if (id == this.id) {
					this.has = true;
					let postion = this.config.Position.split('|');
					let arrVc = postion[this.vo.length].split(',');
					vo.x = parseFloat(arrVc[0]);
					vo.y = parseFloat(arrVc[1]);
					vo.z = parseFloat(arrVc[2]);
					this.propConfig.push(config);
					this.vo.push(vo);
					return this.id;
				}
			}
			return 0;
		}
		setProp_Array(voArr) {
			this.vo = voArr;
			for (let i = 0; i < voArr.length; i++) {
				this.propConfig.push(
					ItemResource.getItemByKey(voArr[i].different)
				);
			}
			this.has = true;
		}
		removeProp(prop) {
			let has = false;
			for (let i = 0; i < this.prop.length; i++) {
				if (this.prop[i] == prop) {
					this.prop[i] == undefined;
					break;
				}
			}
			for (let i = 0; i < this.prop.length; i++) {
				if (this.prop[i]) has = true;
			}
			this.has = has;
		}
		setProp_(prop) {
			this.prop.push(prop);
			prop.propSprite.transform.position = new Laya.Vector3(
				this.arrPosition[0].x,
				this.arrPosition[0].y,
				this.arrPosition[0].z
			);
			switch (this.id) {
				case 60:
					GameEventMgr.Inst.registetEvent(
						EventName.SHOW_XI_GUA_PROP,
						prop.id
					);
					prop.setActive(false);
					prop.isTestActive = false;
					this.parentNode = null;
					return;
				case 62:
					prop.propSprite.transform.position = new Laya.Vector3(
						100,
						0,
						0
					);
					break;
				case 55:
					break;
			}
			if (this.parentName == '') {
				prop.propSprite.removeSelf();
				SceneMgr.Inst.getScene().addChild(prop.propSprite);
			} else {
				if (this.parentNode) {
					this.parentNode.addChild(prop.propSprite);
					prop.propSprite.transform.localPosition = new Laya.Vector3(
						0,
						-0.0303,
						0
					);
					if (this.parentName == 'suoyoujiaoben,Car,Car_Glove_box') {
						prop.propSprite.transform.position = new Laya.Vector3(
							0.278,
							0.7509999,
							-0.5800195
						);
					}
					this.parentNode = null;
					prop.propSprite.active = true;
				}
			}
		}
        hide() {
            this.flag = false;
        }
		clear() {
			this.arrPosition = null;
			this.prop = null;
			this.vo = null;
			this.parentNode = null;
			this.id = null;
			this.arrPosition = null;
			this.isShelter = null;
			this.parentName = null;
			this.has = null;
			this.isDestory = null;
			this.config = null;
		}
	}

	class EndIntroduceMgr {
		constructor() {
			this.index = null;
			this.eventObj = { functionName: null, event: null, propId: null };
			this.trigger = [];
		}
		static get Inst() {
			if (this._Inst == null) this._Inst = new EndIntroduceMgr();
			return this._Inst;
		}
		initConfig() {
			let configId = Role.ins_.getDataByString('introduceConfigId');
			this.config = RandomGuideItem.getItemByKey(configId);
			let itemArr = this.config.item;
			let arrAd = [];
			for (let i = 0; i < itemArr.length; i++) {
				arrAd.push(1 + ',' + 0);
			}
			Role.ins_.setDataByString('endIntroduceAdKeys', arrAd);
			EndIntroduceMgr.Inst.changeIndex();
		}
		getIndex() {
			return this.onTriggerIntroduce();
		}
		isNeedLookAd() {
			if (this.onTriggerIntroduce() != this.index) {
				console.error('开始计时');
				return true;
			}
			console.error('不用计时');
			return false;
		}
		onTriggerIntroduce() {
			if (!this.config) return;
			let index = null;
			for (let i = 0; i < this.config.item.length; i++) {
				this.parseEventString(i);
				index = i;
				if (!this.testEvent(i)) {
					break;
				}
			}
			return index;
		}
		changeIndex() {
			if (!this.config) return;
			for (let i = 0; i < this.config.item.length; i++) {
				this.parseEventString(i);
				this.index = i;
				if (!this.testEvent(i)) {
					return;
				}
			}
		}
		testComplete() {
			if (!this.config) return false;
			for (let i = 0; i < this.config.item.length; i++) {
				this.parseEventString(i);
				if (!this.testEvent(i)) {
					if (this.index != i) {
						if (this.config.item[this.index][1] != '0') {
							return true;
						} else {
							return false;
						}
					}
				}
			}
			return false;
		}
		parseEventString(index) {
			let event = this.config.event;
			this.eventObj.functionName = event[index][0];
			this.eventObj.event = event[index][1];
			this.eventObj.propId = event[index][2];
		}
		testEvent(eventIndex) {
			let functionName = this.eventObj.functionName;
			let event = this.eventObj.event;
			let prop = this.eventObj.propId.split('#');
			let num = 0;
			for (let i = 0; i < prop.length; i++) {
				if (prop[i] == '') {
					num++;
					continue;
				}
				num += this.dealEvent(
					functionName,
					event,
					parseInt(prop[i]),
					i
				);
			}
			if (num == prop.length) {
				return true;
			}
			return false;
		}
		dealEvent(functionName, event, propId, index) {
			switch (functionName) {
				case 'isActiveOneProp':
					if (Role.ins_.isActiveOneProp(propId, event)) return 1;
					return 0;
				case 'getGearStatus':
					if (Role.ins_.getGearStatus(event)) return 1;
					return 0;
				default:
					console.error('错误：查看事件名称  ' + functionName);
					return 0;
			}
		}
	}
	EndIntroduceMgr._Inst = null;

	class WXAd {
		constructor(deal) {
			this._wx = Laya.Browser.window.wx;
			this.videoAd = null;
			this.bannerAd = null;
			this.insertAd = null;
			this.nativeAdHide = null;
			this.nativeAdTake = null;
			this.nativeBannerAd = null;
			this.bannerLock = false;
			this.insertIsOpen = false;
			this.bannerIsOpen = false;
			this.video_id_list = [
				'adunit-e1290e575e59b4f1',
				'adunit-e1290e575e59b4f1'
			];
			this.video_id_index = 0;
			this.deal = deal;
		}
		init(config) {
			this.adConfig = config;
			if (!this._wx) return;
			this.bannerLock = false;
			this.isFirstBanner = true;
			this.bannerIsOpen = false;
			this.insertIsOpen = false;
			this.createInsetAd();
			this.onShareAppMessage();
			this.createNativeAd(
				Laya.Browser.clientWidth - 140,
				50,
				'nativeAdTake'
			);
			this.createNativeAd(60, 90, 'nativeAdHide');
			this.createNativeAd(
				Laya.Browser.clientWidth / 2 - 150,
				Laya.Browser.clientHeight - 85,
				'nativeBannerAd'
			);
		}
		onOffOnEable(data) {
			this.createBannerAd(data);
		}
		createNativeAd(left, top, nativeAd, adIntervals = 30) {
			let lf = this;
			if (nativeAd == 'nativeBannerAd') {
				this.adConfig.nativeId = 'adunit-efd24c9018e8f8e4';
			} else {
				this.adConfig.nativeId = 'adunit-70ecd213a09b8759';
			}
			lf[nativeAd] = this._wx.createCustomAd({
				adUnitId: this.adConfig.nativeId,
				adIntervals: 30,
				style: {
					left: left,
					top: top,
					fixed: true
				}
			});
			lf[nativeAd].onLoad(() => {
				console.log('原生模板广告加载成功');
				lf.showNativeFoundAward();
			});
			lf[nativeAd].onClose(() => {
				console.log('原生模板广告关闭，再创建');
				lf[nativeAd].destroy();
				lf.createNativeAd(left, top, nativeAd);
			});
		}
		showNativeFoundAward() {
			this.nativeAdTake.show();
			this.nativeAdHide.show();
		}
		hideNativeFoundAward() {
			this.nativeAdTake.hide();
			this.nativeAdHide.hide();
		}
		initRewardAd() {
			let lf = this;
			console.error('WX 视频ID', lf.adConfig.videoId);
			this.videoAd = this._wx.createRewardedVideoAd({
				adUnitId: lf.adConfig.videoId
			});
			this.videoAd.onLoad(function () {
				console.error('加载完毕');
			});
			this.videoAd.onClose(res => {
				console.error('视频关闭', res);
				if ((res && res.isEnded) || res === undefined) {
					SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
						name: 'wx',
						info: 'ok'
					});
				} else {
					SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
						name: 'wx',
						info: 'notEnd',
						res: res
					});
				}
				lf.insertIsOpen = false;
			});
			this.videoAd.onError(function (err) {
				lf.video_id_index += 1;
				lf.adConfig.videoId =
					lf.video_id_list[
						lf.video_id_index % lf.video_id_list.length
					];
				console.error('[wxVideo]', err);
				SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
					name: 'xw',
					info: 'noAd',
					res: err
				});
				lf.insertIsOpen = false;
			});
			this.showRewardVideo();
		}
		showRewardVideo(data) {
			console.log('showRewardVideo');
			let lf = this;
			if (!this.videoAd) {
				this.initRewardAd();
			} else
				this.videoAd.show().catch(() => {
					lf.videoAd.load().then(() => lf.videoAd.show());
				});
		}
		createBannerAd(data) {
			if (this.bannerAd) {
				this.bannerAd.destroy();
				this.bannerAd = null;
			}
			let lf = this;
			console.log('this.adConfig.bannerId: ' + this.adConfig.bannerId);
			console.error('banner时间：', data.bannerInterval);
			let bannerObj = {
				adUnitId: this.adConfig.bannerId,
				adIntervals: data.bannerInterval,
				style: {
					top: 0,
					left: 10,
					height: 10,
					width: 200
				}
			};
			this.bannerAd = this._wx.createBannerAd(bannerObj);
			this.bannerAd.onError(err => {
				console.error('【banner Error】', err);
				lf.bannerIsOpen = false;
				if (lf.nativeBannerAd) {
					lf.nativeBannerAd.show();
				}
			});
			this.bannerAd.onLoad(res => {
				console.log('banner 广告加载成功', res);
				if (lf.isFirstBanner) {
					if (!lf.bannerIsOpen) return;
					lf.bannerAd
						.show()
						.then(() => {
							console.log('广告显示成功');
							if (lf.bannerHandler) {
								lf.bannerHandler.run();
								lf.bannerHandler = null;
							}
						})
						.catch(err => {
							console.log('广告显示失败', err);
							if (lf.nativeBannerAd) {
								lf.nativeBannerAd.show();
							}
						});
				}
			});
			this.bannerAd.onResize(res => {
				let info = lf._wx.getSystemInfoSync();
				lf.bannerAd.style.top = info.screenHeight - res.height;
				lf.bannerAd.style.left = (info.screenWidth - res.width) / 2;
			});
		}
		showBanner(data) {
			console.log('this.bannerLock : ' + this.bannerLock);
			if (
				Role.ins_.getDataByString('introduceId') > 0 &&
				GameMgr.Inst.isInGame
			) {
				console.log('新手引导内，不出banner');
				return;
			}
			if (this.bannerLock) return;
			this.bannerHandler = data.handler;
			let lf = this;
			console.log('lf.bannerIsOpen : ' + lf.bannerIsOpen);
			lf.createBannerAd(data);
			if (!this.isFirstBanner) {
				this.bannerAd
					.show()
					.then(() => {
						if (!lf.bannerIsOpen) return;
						console.log('广告显示成功');
						if (lf.bannerHandler) {
							lf.bannerHandler.run();
							lf.bannerHandler = null;
						}
					})
					.catch(err => {
						console.log('广告显示失败', err);
						if (lf.nativeBannerAd) {
							lf.nativeBannerAd.show();
						}
					});
			} else {
				this.isFirstBanner = false;
				this.bannerAd
					.show()
					.then(() => {
						if (!lf.bannerIsOpen) return;
						console.log('广告显示成功');
						if (lf.bannerHandler) {
							lf.bannerHandler.run();
							lf.bannerHandler = null;
						}
					})
					.catch(err => {
						console.log('广告显示失败', err);
						if (lf.nativeBannerAd) {
							lf.nativeBannerAd.show();
						}
					});
			}
			this.bannerIsOpen = true;
		}
		hideBanner() {
			console.log('hideBanner');
			this.bannerIsOpen = false;
			this.bannerAd.hide();
			if (this.nativeBannerAd) {
				this.nativeBannerAd.hide();
			}
		}
		createInsetAd() {
			let lf = this;
			this.insertAd = this._wx.createInterstitialAd({
				adUnitId: lf.adConfig.interId
			});
			this.insertAd.onClose(() => {
				lf.insertAd.destroy();
				lf.createInsetAd();
			});
			this.insertAd.onLoad(() => {
				console.log('插屏 广告加载成功');
			});
			this.insertAd.onError(err => {
				console.log(err);
			});
		}
		showInsetAd() {
			let lf = this;
			if (!this.insertAd) {
				lf.createInsetAd();
			}
			this.insertIsOpen = false;
			console.log('showInsetAd', this.insertIsOpen);
			if (this.insertAd && !this.insertIsOpen)
				this.insertAd
					.load()
					.then(() => {
						lf.insertAd.show();
						lf.insertIsOpen = true;
						lf.deal.ctrInserTimer(false);
					})
					.catch(err => {
						console.log('[qqInsert]', err);
					});
		}
		nativeSuprisedBox(data) {}
		btnUpTween(data, delayTime) {
			this.hideBanner();
			this.bannerLock = true;
			let btn = data.btn;
			let oY = btn.y;
			btn.y = 720 - 40;
			Laya.Tween.to(
				btn,
				{ y: oY },
				400,
				Laya.Ease.elasticInOut,
				null,
				delayTime
			);
			let time = delayTime - 500;
			if (delayTime < 0) delayTime = 10;
			Laya.timer.once(time, this, function () {
				this.bannerLock = false;
				SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
					name: 'wx',
					isShow: true,
					adPoint: 4
				});
			});
		}
		getLocation() {
			console.error('【获取地理位置授权】');
			this.deal.getLocation2();
		}
		shareGame(data) {
			this._wx.shareAppMessage({
				title: '寻找线索，逃出小木屋~',
				// imageUrl: 'https://www.guanglunshiji.com/kbnn/wx/share.png',
				imageUrl: '',
				query: Role.ins_.openId
			});
		}
		onShareAppMessage() {
			this._wx.showShareMenu({
				withShareTicket: true
			});
			this._wx.onShareAppMessage(() => {
				return {
					title: '寻找线索，逃出小木屋~',
					// imageUrl: 'https://www.guanglunshiji.com/kbnn/wx/share.png',
					imageUrl: '',
					query: Role.ins_.openId
				};
			});
		}
	}

	class WxAld {
		constructor(deal) {
			this.wx_ = Laya.Browser.window.wx;
			this.deal = deal;
		}
		init() {}
		aldEventSend(data) {}
	}

	var exports$1 = {};
	(function (t, r) {
		for (var n in r) t[n] = r[n];
	})(
		exports$1,
		(function (t) {
			var r = {};
			function n(e) {
				if (r[e]) return r[e].exports;
				var o = (r[e] = { i: e, l: !1, exports: {} });
				return (
					t[e].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
				);
			}
			return (
				(n.m = t),
				(n.c = r),
				(n.d = function (t, r, e) {
					n.o(t, r) ||
						Object.defineProperty(t, r, {
							configurable: !1,
							enumerable: !0,
							get: e
						});
				}),
				(n.r = function (t) {
					Object.defineProperty(t, '__esModule', { value: !0 });
				}),
				(n.n = function (t) {
					var r =
						t && t.__esModule
							? function () {
									return t.default;
							  }
							: function () {
									return t;
							  };
					return n.d(r, 'a', r), r;
				}),
				(n.o = function (t, r) {
					return Object.prototype.hasOwnProperty.call(t, r);
				}),
				(n.p = ''),
				n((n.s = 1))
			);
		})([
			function (t, r, n) {
				'use strict';
				Object.defineProperty(r, '__esModule', { value: !0 });
				var e = (function () {
					function t() {}
					return (
						(t.lerr = function () {
							for (var t = [], r = 0; r < arguments.length; r++)
								t[r] = arguments[r];
							t.unshift('====>'), console.error.apply(window, t);
						}),
						(t.llog = function () {
							for (var t = [], r = 0; r < arguments.length; r++)
								t[r] = arguments[r];
							t.unshift('====>'), console.log.apply(window, t);
						}),
						(t.twoInt = function (t) {
							return t < 10 ? '0' + t : t;
						}),
						(t.todayStr = function () {
							var r = new Date();
							return (
								'' +
								r.getFullYear() +
								t.twoInt(r.getMonth() + 1) +
								t.twoInt(r.getDate())
							);
						}),
						(t.randomInt = function (t, r) {
							return Math.floor(Math.random() * (r - t + 1) + t);
						}),
						(t.saveData = function (t, r) {
							var n = window.localStorage;
							n && n.setItem('kcSdk_' + t, r);
						}),
						(t.loadData = function (t) {
							var r = window.localStorage;
							if (r) {
								var n = r.getItem('kcSdk_' + t);
								if (n) return n;
							}
							return null;
						}),
						(t.encodeUTF8 = function (t) {
							var r,
								n,
								e,
								o = [];
							for (r = 0; r < t.length; r++)
								(n = t.charCodeAt(r)) < 128
									? o.push(n)
									: n < 2048
									? o.push(
											192 + ((n >> 6) & 31),
											128 + (63 & n)
									  )
									: ((e = 55296 ^ n) >> 10 == 0
											? ((n =
													(e << 10) +
													(56320 ^
														t.charCodeAt(++r)) +
													65536),
											  o.push(
													240 + ((n >> 18) & 7),
													128 + ((n >> 12) & 63)
											  ))
											: o.push(224 + ((n >> 12) & 15)),
									  o.push(
											128 + ((n >> 6) & 63),
											128 + (63 & n)
									  ));
							return o;
						}),
						(t.s = function (r) {
							var n,
								e,
								o,
								i = new Uint8Array(t.encodeUTF8(r)),
								a = 16 + (((i.length + 8) >>> 6) << 4);
							for (
								(r = new Uint8Array(a << 2)).set(
									new Uint8Array(i.buffer)
								),
									r = new Uint32Array(r.buffer),
									o = new DataView(r.buffer),
									n = 0;
								n < a;
								n++
							)
								r[n] = o.getUint32(n << 2);
							(r[i.length >> 2] |=
								128 << (24 - 8 * (3 & i.length))),
								(r[a - 1] = i.length << 3);
							var u = [],
								s = [
									function () {
										return (f[1] & f[2]) | (~f[1] & f[3]);
									},
									function () {
										return f[1] ^ f[2] ^ f[3];
									},
									function () {
										return (
											(f[1] & f[2]) |
											(f[1] & f[3]) |
											(f[2] & f[3])
										);
									},
									function () {
										return f[1] ^ f[2] ^ f[3];
									}
								],
								l = function (t, r) {
									return (t << r) | (t >>> (32 - r));
								},
								c = [
									1518500249, 1859775393, -1894007588,
									-899497514
								],
								f = [
									1732584193,
									-271733879,
									null,
									null,
									-1009589776
								];
							for (
								f[2] = ~f[0], f[3] = ~f[1], n = 0;
								n < r.length;
								n += 16
							) {
								var h = f.slice(0);
								for (e = 0; e < 80; e++)
									(u[e] =
										e < 16
											? r[n + e]
											: l(
													u[e - 3] ^
														u[e - 8] ^
														u[e - 14] ^
														u[e - 16],
													1
											  )),
										(o =
											(l(f[0], 5) +
												s[(e / 20) | 0]() +
												f[4] +
												u[e] +
												c[(e / 20) | 0]) |
											0),
										(f[1] = l(f[1], 30)),
										f.pop(),
										f.unshift(o);
								for (e = 0; e < 5; e++)
									f[e] = (f[e] + h[e]) | 0;
							}
							for (
								o = new DataView(new Uint32Array(f).buffer),
									n = 0;
								n < 5;
								n++
							)
								f[n] = o.getUint32(n << 2);
							return Array.prototype.map
								.call(
									new Uint8Array(new Uint32Array(f).buffer),
									function (t) {
										return (
											(t < 16 ? '0' : '') + t.toString(16)
										);
									}
								)
								.join('');
						}),
						(t.b = function (t) {
							var r = [];
							for (var n in t) r.push(n);
							r = r.sort();
							for (var e = '', o = 0; o < r.length; o++) {
								var i = t[r[o]];
								'object' == typeof i && (i = this.b(i)),
									(e += r[o] + i);
							}
							return e;
						}),
						(t.a = function (r, n, e) {
							var o = [];
							for (var i in r)
								null !== r[i] && void 0 !== r[i]
									? o.push(i)
									: delete r[i];
							o = o.sort();
							var a = t.b(r);
							return (
								n && (a += n),
								(a += e || 'pH0Xhyenu2e1zdUg'),
								t.s(a)
							);
						}),
						(t.jax = function (r, n, e) {
							e ||
								(e = function (r) {
									if (r) return t.lerr(r);
								});
							var o = new XMLHttpRequest(),
								i = new Date().getTime();
							(n.s = t.a(n, i)),
								o.open('POST', r, !0),
								o.setRequestHeader(
									'Content-Type',
									'application/json; charset=utf-8'
								),
								o.setRequestHeader('ts', '' + i);
							var a = JSON.stringify(n);
							o.send(a),
								(o.onload = function () {
									if (200 == o.status) {
										var r = { jaxERR: '' + o.responseText };
										try {
											r = JSON.parse(o.responseText);
										} catch (r) {
											return (
												t.lerr(r),
												e(null, {
													re: '1111',
													err:
														'jsonErr:' +
														o.responseText
												})
											);
										}
										return e(null, r);
									}
									return e(null, { re: '9' + o.status });
								});
						}),
						t
					);
				})();
				(r.jax = e.jax),
					(r.llog = e.llog),
					(r.lerr = e.lerr),
					(r.saveData = e.saveData),
					(r.loadData = e.loadData),
					(r.randomInt = e.randomInt),
					(r.todayStr = e.todayStr);
			},
			function (t, r, n) {
				'use strict';
				Object.defineProperty(r, '__esModule', { value: !0 });
				var e = n(0),
					o = (function () {
						function t() {
							(this.version = '1.2.0'),
								(this.navGap = 3e3),
								(this.lastNavT = 0),
								(this.htHost =
									// 'https://dk.gametdd.com/htApi/ht_api/'),
									''),
								(this.picType = 'jpg');
						}
						return (
							(t.instance = function () {
								return t.me ? t.me : ((t.me = new t()), t.me);
							}),
							(t.prototype.getUid = function () {
								return t.Uid
									? t.Uid
									: ((t.Uid = e.loadData('uid')),
									  t.Uid || 'null');
							}),
							(t.prototype.setUid = function (r) {
								r &&
									t.Uid !== r &&
									((t.Uid = r), e.saveData('uid', r));
							}),
							(t.prototype.jht = function (t, r, n) {
								(r.v = this.version),
									e.jax(this.htHost + t, r, function (t, r) {
										return t || !r
											? (e.llog('jhtERR', t),
											  n(t || new Error('no re')))
											: 0 !== r.re
											? (e.llog(
													'jht FAILED!' +
														JSON.stringify(r)
											  ),
											  n(new Error('err:' + r.re)))
											: void n(null, r);
									});
							}),
							(t.prototype.init = function (r, n, o) {
								var i = this;
								e.llog('HTS init v:' + this.version + ',' + r),
									(t.Gid = r);
								var a = e.loadData('htHost');
								a && (this.htHost = a);
								var u = e.loadData('picType');
								u && (this.picType = u);
								var s = {
									gid: r,
									uid: this.getUid(),
									query: n || 'null'
								};
								e.llog(
									'init start...' +
										this.picType +
										',' +
										this.htHost
								),
									this.jht('init', s, function (r, n) {
										if (r) o(r);
										else {
											e.llog('init done:' + n.re),
												i.setUid(n.uid),
												n.iconPre &&
													(t.IconPre = n.iconPre),
												n.picType &&
													((i.picType = n.picType),
													e.saveData(
														'picType',
														n.picType
													)),
												n.navGap &&
													(i.navGap = n.navGap);
											for (
												var a = [], u = 0;
												u < n.midArr.length;
												u++
											) {
												var s = n.midArr[u],
													l = '';
												n.vArr &&
													n.vArr.length ===
														n.midArr.length &&
													0 !== parseInt(n.vArr[u]) &&
													(l = '_' + n.vArr[u]),
													a.push({
														iconUrl:
															n.iconPre +
															s +
															l +
															'.' +
															i.picType,
														mid: s
													});
											}
											o(null, a),
												n.htHost &&
													n.htHost !== i.htHost &&
													((i.htHost = n.htHost),
													e.saveData(
														'htHost',
														n.htHost
													));
										}
									});
							}),
							(t.prototype.getBox = function (r, n) {
								var o = this;
								if (!t.IconPre)
									return (
										e.llog('htSdk 未初始化!!' + t.IconPre),
										n(new Error('htSdk 未初始化'))
									);
								var i = { bid: r };
								this.jht('getBox', i, function (e, i) {
									if (e) return n(e);
									if (!i.arr || i.arr.length <= 0)
										return n(
											new Error('服务配置有误bid:' + r)
										);
									for (
										var a = [], u = 0;
										u < i.arr.length;
										u++
									) {
										for (
											var s = i.arr[u], l = [], c = 0;
											c < s.length;
											c++
										) {
											var f = s[c].split('@'),
												h = '',
												p = '';
											f.length >= 4 &&
												'0' !== f[3] &&
												(h = '_' + f[3]),
												f.length >= 5 && (p = f[4]),
												l.push({
													jumpKey: f[1],
													mid: f[0],
													iconUrl:
														t.IconPre +
														f[0] +
														h +
														'.' +
														o.picType,
													txt: f[2],
													mark: p,
													query:
														'mid=' +
														f[0] +
														'&bid=' +
														r +
														'&uid=' +
														t.Uid +
														'&po=' +
														u
												});
										}
										a.push(l);
									}
									n(null, a);
								});
							}),
							(t.prototype.navTo = function (r, n, o, i) {
								var a = this,
									u = new Date().getTime();
								if (u - this.lastNavT < this.navGap)
									e.llog('navTo too');
								else {
									this.lastNavT = u;
									var s = {
										gid: r || t.Gid,
										uid: this.getUid(),
										bid: n,
										mid: o
									};
									n
										? o
											? (i && (s.fail = 'true'),
											  e.llog(
													'navTo',
													JSON.stringify(s)
											  ),
											  this.jht(
													'navTo',
													s,
													function (t, r) {
														t || a.setUid(r.uid);
													}
											  ))
											: e.llog('navTo 无mid')
										: e.llog('navTo 无bid');
								}
							}),
							(t.prototype.navFrom = function (r, n) {
								var o = this;
								if (n) {
									t.Gid = r;
									var i = {
										gid: r,
										uid: this.getUid(),
										query: n || 'null'
									};
									e.llog('navFrom', JSON.stringify(i)),
										this.jht('navFrom', i, function (t, r) {
											t || o.setUid(r.uid);
										});
								} else e.llog('navFrom query is empty!' + n);
							}),
							(t.prototype.jlog = function (r, n, o) {
								var i = this;
								if (t.Gid) {
									var a = {
										act: r,
										gid: t.Gid,
										uid: this.getUid(),
										data: n,
										user: o
									};
									e.llog('jlog', JSON.stringify(a)),
										this.jht('jlog', a, function (t, r) {
											t || i.setUid(r.uid);
										});
								} else e.llog('jlog no gid', r, n);
							}),
							(t.prototype.getSharePic = function (t, r) {
								this.jht('getSharePic', { game: t }, r);
							}),
							(t.prototype.shareTo = function (t) {
								this.jht(
									'shareTo',
									{ wxPicId: t },
									function (r) {
										r
											? e.lerr(r)
											: e.llog('shareTo OK,' + t);
									}
								);
							}),
							(t.prototype.shareFrom = function (t) {
								this.jht(
									'shareFrom',
									{ wxPicId: t },
									function (r) {
										r
											? e.lerr(r)
											: e.llog('shareFrom OK,' + t);
									}
								);
							}),
							(t.prototype.jreq = function (t, r, n) {
								e.jax(t, r, n);
							}),
							t
						);
					})();
				r.default = o.instance();
			}
		])
	);
	var htSdk = exports$1.default;

	class Hts {
		constructor() {
			this.htSdk = htSdk;
		}
		static instance() {
			if (Hts.me) {
				return Hts.me;
			}
			Hts.me = new Hts();
			return Hts.me;
		}
		getUid() {
			return this.htSdk.getUid();
		}
		init(gid, query, callback) {
			this.htSdk.init(gid, query, callback);
		}
		getBox(bid, callback) {
			this.htSdk.getBox(bid, callback);
		}
		navFrom(gid, query) {
			this.htSdk.navFrom(gid, query);
		}
		navTo(gid, bid, mid, isFail) {
			this.htSdk.navTo(gid, bid, mid, isFail);
		}
		jlog(act, data, user) {
			this.htSdk.jlog(act, data, user);
		}
		getSharePic(act, callback) {
			this.htSdk.getSharePic(act, callback);
		}
		shareTo(wxPicId) {
			this.htSdk.shareTo(wxPicId);
		}
		shareFrom(wxPicId) {
			this.htSdk.shareFrom(wxPicId);
		}
		jreq(url, data, callback) {
			this.htSdk.jreq(url, data, callback);
		}
	}
	const hts = Hts.instance();

	class MD5 {
		static md5(string) {
			function md5_RotateLeft(lValue, iShiftBits) {
				return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
			}
			function md5_AddUnsigned(lX, lY) {
				var lX4, lY4, lX8, lY8, lResult;
				lX8 = lX & 0x80000000;
				lY8 = lY & 0x80000000;
				lX4 = lX & 0x40000000;
				lY4 = lY & 0x40000000;
				lResult = (lX & 0x3fffffff) + (lY & 0x3fffffff);
				if (lX4 & lY4) {
					return lResult ^ 0x80000000 ^ lX8 ^ lY8;
				}
				if (lX4 | lY4) {
					if (lResult & 0x40000000) {
						return lResult ^ 0xc0000000 ^ lX8 ^ lY8;
					} else {
						return lResult ^ 0x40000000 ^ lX8 ^ lY8;
					}
				} else {
					return lResult ^ lX8 ^ lY8;
				}
			}
			function md5_F(x, y, z) {
				return (x & y) | (~x & z);
			}
			function md5_G(x, y, z) {
				return (x & z) | (y & ~z);
			}
			function md5_H(x, y, z) {
				return x ^ y ^ z;
			}
			function md5_I(x, y, z) {
				return y ^ (x | ~z);
			}
			function md5_FF(a, b, c, d, x, s, ac) {
				a = md5_AddUnsigned(
					a,
					md5_AddUnsigned(md5_AddUnsigned(md5_F(b, c, d), x), ac)
				);
				return md5_AddUnsigned(md5_RotateLeft(a, s), b);
			}
			function md5_GG(a, b, c, d, x, s, ac) {
				a = md5_AddUnsigned(
					a,
					md5_AddUnsigned(md5_AddUnsigned(md5_G(b, c, d), x), ac)
				);
				return md5_AddUnsigned(md5_RotateLeft(a, s), b);
			}
			function md5_HH(a, b, c, d, x, s, ac) {
				a = md5_AddUnsigned(
					a,
					md5_AddUnsigned(md5_AddUnsigned(md5_H(b, c, d), x), ac)
				);
				return md5_AddUnsigned(md5_RotateLeft(a, s), b);
			}
			function md5_II(a, b, c, d, x, s, ac) {
				a = md5_AddUnsigned(
					a,
					md5_AddUnsigned(md5_AddUnsigned(md5_I(b, c, d), x), ac)
				);
				return md5_AddUnsigned(md5_RotateLeft(a, s), b);
			}
			function md5_ConvertToWordArray(string) {
				var lWordCount;
				var lMessageLength = string.length;
				var lNumberOfWords_temp1 = lMessageLength + 8;
				var lNumberOfWords_temp2 =
					(lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
				var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
				var lWordArray = Array(lNumberOfWords - 1);
				var lBytePosition = 0;
				var lByteCount = 0;
				while (lByteCount < lMessageLength) {
					lWordCount = (lByteCount - (lByteCount % 4)) / 4;
					lBytePosition = (lByteCount % 4) * 8;
					lWordArray[lWordCount] =
						lWordArray[lWordCount] |
						(string.charCodeAt(lByteCount) << lBytePosition);
					lByteCount++;
				}
				lWordCount = (lByteCount - (lByteCount % 4)) / 4;
				lBytePosition = (lByteCount % 4) * 8;
				lWordArray[lWordCount] =
					lWordArray[lWordCount] | (0x80 << lBytePosition);
				lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
				lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
				return lWordArray;
			}
			function md5_WordToHex(lValue) {
				var WordToHexValue = '',
					WordToHexValue_temp = '',
					lByte,
					lCount;
				for (lCount = 0; lCount <= 3; lCount++) {
					lByte = (lValue >>> (lCount * 8)) & 255;
					WordToHexValue_temp = '0' + lByte.toString(16);
					WordToHexValue =
						WordToHexValue +
						WordToHexValue_temp.substr(
							WordToHexValue_temp.length - 2,
							2
						);
				}
				return WordToHexValue;
			}
			function md5_Utf8Encode(string) {
				string = string.replace(/\r\n/g, '\n');
				var utftext = '';
				for (var n = 0; n < string.length; n++) {
					var c = string.charCodeAt(n);
					if (c < 128) {
						utftext += String.fromCharCode(c);
					} else if (c > 127 && c < 2048) {
						utftext += String.fromCharCode((c >> 6) | 192);
						utftext += String.fromCharCode((c & 63) | 128);
					} else {
						utftext += String.fromCharCode((c >> 12) | 224);
						utftext += String.fromCharCode(((c >> 6) & 63) | 128);
						utftext += String.fromCharCode((c & 63) | 128);
					}
				}
				return utftext;
			}
			var x = Array();
			var k, AA, BB, CC, DD, a, b, c, d;
			var S11 = 7,
				S12 = 12,
				S13 = 17,
				S14 = 22;
			var S21 = 5,
				S22 = 9,
				S23 = 14,
				S24 = 20;
			var S31 = 4,
				S32 = 11,
				S33 = 16,
				S34 = 23;
			var S41 = 6,
				S42 = 10,
				S43 = 15,
				S44 = 21;
			string = md5_Utf8Encode(string);
			x = md5_ConvertToWordArray(string);
			a = 0x67452301;
			b = 0xefcdab89;
			c = 0x98badcfe;
			d = 0x10325476;
			for (k = 0; k < x.length; k += 16) {
				AA = a;
				BB = b;
				CC = c;
				DD = d;
				a = md5_FF(a, b, c, d, x[k + 0], S11, 0xd76aa478);
				d = md5_FF(d, a, b, c, x[k + 1], S12, 0xe8c7b756);
				c = md5_FF(c, d, a, b, x[k + 2], S13, 0x242070db);
				b = md5_FF(b, c, d, a, x[k + 3], S14, 0xc1bdceee);
				a = md5_FF(a, b, c, d, x[k + 4], S11, 0xf57c0faf);
				d = md5_FF(d, a, b, c, x[k + 5], S12, 0x4787c62a);
				c = md5_FF(c, d, a, b, x[k + 6], S13, 0xa8304613);
				b = md5_FF(b, c, d, a, x[k + 7], S14, 0xfd469501);
				a = md5_FF(a, b, c, d, x[k + 8], S11, 0x698098d8);
				d = md5_FF(d, a, b, c, x[k + 9], S12, 0x8b44f7af);
				c = md5_FF(c, d, a, b, x[k + 10], S13, 0xffff5bb1);
				b = md5_FF(b, c, d, a, x[k + 11], S14, 0x895cd7be);
				a = md5_FF(a, b, c, d, x[k + 12], S11, 0x6b901122);
				d = md5_FF(d, a, b, c, x[k + 13], S12, 0xfd987193);
				c = md5_FF(c, d, a, b, x[k + 14], S13, 0xa679438e);
				b = md5_FF(b, c, d, a, x[k + 15], S14, 0x49b40821);
				a = md5_GG(a, b, c, d, x[k + 1], S21, 0xf61e2562);
				d = md5_GG(d, a, b, c, x[k + 6], S22, 0xc040b340);
				c = md5_GG(c, d, a, b, x[k + 11], S23, 0x265e5a51);
				b = md5_GG(b, c, d, a, x[k + 0], S24, 0xe9b6c7aa);
				a = md5_GG(a, b, c, d, x[k + 5], S21, 0xd62f105d);
				d = md5_GG(d, a, b, c, x[k + 10], S22, 0x2441453);
				c = md5_GG(c, d, a, b, x[k + 15], S23, 0xd8a1e681);
				b = md5_GG(b, c, d, a, x[k + 4], S24, 0xe7d3fbc8);
				a = md5_GG(a, b, c, d, x[k + 9], S21, 0x21e1cde6);
				d = md5_GG(d, a, b, c, x[k + 14], S22, 0xc33707d6);
				c = md5_GG(c, d, a, b, x[k + 3], S23, 0xf4d50d87);
				b = md5_GG(b, c, d, a, x[k + 8], S24, 0x455a14ed);
				a = md5_GG(a, b, c, d, x[k + 13], S21, 0xa9e3e905);
				d = md5_GG(d, a, b, c, x[k + 2], S22, 0xfcefa3f8);
				c = md5_GG(c, d, a, b, x[k + 7], S23, 0x676f02d9);
				b = md5_GG(b, c, d, a, x[k + 12], S24, 0x8d2a4c8a);
				a = md5_HH(a, b, c, d, x[k + 5], S31, 0xfffa3942);
				d = md5_HH(d, a, b, c, x[k + 8], S32, 0x8771f681);
				c = md5_HH(c, d, a, b, x[k + 11], S33, 0x6d9d6122);
				b = md5_HH(b, c, d, a, x[k + 14], S34, 0xfde5380c);
				a = md5_HH(a, b, c, d, x[k + 1], S31, 0xa4beea44);
				d = md5_HH(d, a, b, c, x[k + 4], S32, 0x4bdecfa9);
				c = md5_HH(c, d, a, b, x[k + 7], S33, 0xf6bb4b60);
				b = md5_HH(b, c, d, a, x[k + 10], S34, 0xbebfbc70);
				a = md5_HH(a, b, c, d, x[k + 13], S31, 0x289b7ec6);
				d = md5_HH(d, a, b, c, x[k + 0], S32, 0xeaa127fa);
				c = md5_HH(c, d, a, b, x[k + 3], S33, 0xd4ef3085);
				b = md5_HH(b, c, d, a, x[k + 6], S34, 0x4881d05);
				a = md5_HH(a, b, c, d, x[k + 9], S31, 0xd9d4d039);
				d = md5_HH(d, a, b, c, x[k + 12], S32, 0xe6db99e5);
				c = md5_HH(c, d, a, b, x[k + 15], S33, 0x1fa27cf8);
				b = md5_HH(b, c, d, a, x[k + 2], S34, 0xc4ac5665);
				a = md5_II(a, b, c, d, x[k + 0], S41, 0xf4292244);
				d = md5_II(d, a, b, c, x[k + 7], S42, 0x432aff97);
				c = md5_II(c, d, a, b, x[k + 14], S43, 0xab9423a7);
				b = md5_II(b, c, d, a, x[k + 5], S44, 0xfc93a039);
				a = md5_II(a, b, c, d, x[k + 12], S41, 0x655b59c3);
				d = md5_II(d, a, b, c, x[k + 3], S42, 0x8f0ccc92);
				c = md5_II(c, d, a, b, x[k + 10], S43, 0xffeff47d);
				b = md5_II(b, c, d, a, x[k + 1], S44, 0x85845dd1);
				a = md5_II(a, b, c, d, x[k + 8], S41, 0x6fa87e4f);
				d = md5_II(d, a, b, c, x[k + 15], S42, 0xfe2ce6e0);
				c = md5_II(c, d, a, b, x[k + 6], S43, 0xa3014314);
				b = md5_II(b, c, d, a, x[k + 13], S44, 0x4e0811a1);
				a = md5_II(a, b, c, d, x[k + 4], S41, 0xf7537e82);
				d = md5_II(d, a, b, c, x[k + 11], S42, 0xbd3af235);
				c = md5_II(c, d, a, b, x[k + 2], S43, 0x2ad7d2bb);
				b = md5_II(b, c, d, a, x[k + 9], S44, 0xeb86d391);
				a = md5_AddUnsigned(a, AA);
				b = md5_AddUnsigned(b, BB);
				c = md5_AddUnsigned(c, CC);
				d = md5_AddUnsigned(d, DD);
			}
			return (
				md5_WordToHex(a) +
				md5_WordToHex(b) +
				md5_WordToHex(c) +
				md5_WordToHex(d)
			).toLowerCase();
		}
	}

	class UIBaseComponent extends fgui.GComponent {
		constructor(pkgName = '', resName = '', param) {
			super();
			this._pkgName = '';
			this._resName = '';
			this.isOnEable = false;
			this._pkgName = pkgName;
			this._resName = resName;
			this.loadAtlas(param);
		}
		loadAtlas(param) {
			this.param = param;
			LoadQueue.Inst.loadUI(
				UrlUtils.UI + this._pkgName,
				Laya.Handler.create(this, this.onLoaded)
			);
		}
		onLoaded() {
			if (this._component) return;
			fgui.UIPackage.addPackage(UrlUtils.UI + this._pkgName);
			this._component = fgui.UIPackage.createObject(
				this._pkgName,
				this._resName
			).asCom;
			this._view = this._component;
			this.addChild(this._component);
			FairyUtils.setVar(this._component, this);
			this.isOnEable = true;
			this.initCom();
			this.addEvent();
			this.onEnable();
			this.initData(this.param);
		}
		onEnable() {
			this.upDataUI();
		}
		setData(data) {
			this.uiData = data;
			if (this.isOnEable) this.onEnable();
		}
		destory() {
			this.removEvent();
			this.removeFromParent();
		}
		initData(param) {}
		initCom() {}
		upDataUI() {}
		addEvent() {}
		removEvent() {}
		initUI() {}
		setStyle(data) {
			this.removeFromParent();
			if (data.parent) {
				if (data.zOrder) data.parent.addChildAt(this, data.zOrder);
				else data.parent.addChild(this);
			}
			if (data.x != null) this.x = data.x;
			if (data.y != null) this.y = data.y;
			this.visible = true;
			this.initUI();
		}
	}

	class WX_Icon extends fgui.GComponent {
		constructor() {
			super();
		}
		constructFromXML(xml) {
			super.constructFromXML(xml);
			FairyUtils.setVar(this, this);
			this.onClick(this, this.onClickIcon);
		}
		updataUI(data) {
			let addstring = data.info.address;
			this.loader_gameImg.url = addstring.replace(/http/, 'https');
			this.text_gameName.text = data.info.toAppname;
			this.gmdata = data;
		}
		onClickIcon() {
			SDK.ins_.send(SDK_ORDER.HT_JUMP_TO_GAME, {
				name: this.gmdata.name,
				data: this.gmdata.info
			});
		}
		hide() {
			this.removeFromParent();
			this.gmdata = null;
		}
		setStyle(data) {
			this.removeFromParent();
			if (data.parent) {
				if (data.zOrder) data.parent.addChildAt(this, data.zOrder);
				else data.parent.addChild(this);
			}
			if (data.x != null) this.x = data.x;
			if (data.y != null) this.y = data.y;
			this.visible = true;
		}
	}

	class WX_GameListBox extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'WX_GameListBox');
		}
		initCom() {
			fgui.UIObjectFactory.setPackageItemExtension(
				'ui://UIPlatform/WX_Icon',
				WX_Icon
			);
			this.list_GameIcon.itemRenderer = Laya.Handler.create(
				this,
				this.RenderListItem,
				null,
				false
			);
			this.list_GameIcon.setVirtualAndLoop();
			this.list_GameIcon2.itemRenderer = Laya.Handler.create(
				this,
				this.RenderListItem2,
				null,
				false
			);
			this.list_GameIcon2.setVirtualAndLoop();
		}
		addEvent() {
			this.btn_Close.onClick(this, this.hide);
		}
		removEvent() {
			this.btn_Close.offClick(this, this.hide);
		}
		upDataUI() {
			if (!this.uiData) return;
			this.visible = true;
			GameMgr.Inst.pauseGame();
			Laya.stage.addChild(this.displayObject);
			this.displayObject.zOrder = 1000;
			this.list_GameIcon.numItems = this.uiData.infoList.length;
			this.list_GameIcon2.numItems = this.uiData.infoList.length;
			this.timeCount = 3;
			this.text_Time.visible = true;
			this.text_tips.visible = true;
			this.btn_Close.visible = false;
			this.x = GameConfig.viewWidth / 2;
			this.y = GameConfig.viewHeight / 2;
			this.text_Time.text = '' + this.timeCount;
			Laya.timer.loop(1100, this, this.timeCountTimer);
			Laya.timer.frameLoop(1, this, this.runLoop);
		}
		runLoop() {
			this.list_GameIcon.scrollPane.posX += 0.5;
			this.list_GameIcon2.scrollPane.posX -= 0.5;
		}
		updata(data) {
			this.uiData = data;
			this.list_GameIcon.numItems = this.uiData.infoList.length;
			this.list_GameIcon2.numItems = this.uiData.infoList.length;
		}
		timeCountTimer() {
			this.timeCount--;
			if (this.timeCount <= 0) {
				Laya.timer.clear(this, this.timeCountTimer);
				this.text_Time.visible = false;
				this.text_tips.visible = false;
				this.btn_Close.visible = true;
				return;
			}
			this.text_Time.text = this.timeCount + '';
		}
		RenderListItem(index, item) {
			item.updataUI({
				info: this.uiData.infoList[index],
				name: this.uiData.name
			});
		}
		RenderListItem2(index, item) {
			item.updataUI({
				info: this.uiData.infoList[
					this.uiData.infoList.length - index - 1
				],
				name: this.uiData.name
			});
		}
		hide() {
			GameMgr.Inst.contiueGame();
			Laya.timer.clearAll(this);
			this.displayObject.removeSelf();
			this.visible = false;
		}
	}

	class WX_verBoxOnly extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'WX_verBoxOnly');
		}
		initCom() {
			this.transForm = this._view.getTransition('shake');
			fgui.UIObjectFactory.setPackageItemExtension(
				'ui://UIPlatform/WX_Icon',
				WX_Icon
			);
			this.list_VerBox.itemRenderer = Laya.Handler.create(
				this,
				this.RenderListItem,
				null,
				false
			);
			this.list_VerBox.setVirtual();
		}
		upDataUI() {
			if (!this.uiData) return;
			this.randomList();
			this.list_VerBox.numItems = 3;
			this.transForm.play();
			Laya.timer.loop(15000, this, this.shake);
		}
		shake() {
			if (this.uiData) {
				this.transForm.play();
				this.randomList();
				this.list_VerBox.numItems = 3;
			}
		}
		randomList() {
			let len = this.uiData.infoList.length;
			let item;
			let random;
			for (let i = 0; i < len; i++) {
				random = Math.floor(len * Math.random());
				item = this.uiData.infoList[i];
				this.uiData.infoList[i] = this.uiData.infoList[random];
				this.uiData.infoList[random] = item;
			}
		}
		RenderListItem(index, item) {
			item.updataUI({
				info: this.uiData.infoList[index],
				name: this.uiData.name
			});
		}
		hide() {
			this.removeFromParent();
			Laya.timer.clearAll(this);
			this.uiData = null;
		}
	}

	class WX_verBox extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'WX_verBox');
		}
		initCom() {
			fgui.UIObjectFactory.setPackageItemExtension(
				'ui://UIPlatform/WX_Icon',
				WX_Icon
			);
			this.listGame.itemRenderer = Laya.Handler.create(
				this,
				this.RenderListItem,
				null,
				false
			);
			this.listGame.setVirtualAndLoop();
		}
		addEvent() {
			this.onClick(this, this.showGameList);
		}
		removEvent() {
			this.offClick(this, this.showGameList);
		}
		showGameList() {
			SDK.ins_.send(SDK_ORDER.HT_BIG_GAME_xBOX, {
				name: this.uiData.name,
				isShow: true
			});
		}
		upDataUI() {
			if (!this.uiData) return;
			this.listGame.numItems = this.uiData.infoList.length;
			Laya.timer.frameLoop(1, this, this.runLoop);
		}
		runLoop() {
			this.listGame.scrollPane.posY += 0.4;
		}
		RenderListItem(index, item) {
			item.updataUI({
				info: this.uiData.infoList[index],
				name: this.uiData.name
			});
		}
		hide() {
			this.removeFromParent();
			Laya.timer.clearAll(this);
			this.uiData = null;
		}
	}

	class Wx_IconSetting extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'WX_Icon2');
		}
		addEvent() {
			this.onClick(this, this.onClickIcon);
		}
		initCom() {
			this.shake = this._view.getTransition('shake');
		}
		upDataUI() {
			if (!this.uiData) return;
			this.loader_gameImg.url = this.uiData.info.address.replace(
				/http/,
				'https'
			);
			this.text_gameName.text = this.uiData.info.toAppname;
			this.shake.play();
		}
		onClickIcon() {
			SDK.ins_.send(SDK_ORDER.HT_JUMP_TO_GAME, {
				name: this.uiData.name,
				data: this.uiData.info
			});
		}
		hide() {
			this.removeFromParent();
			this.uiData = null;
		}
	}

	class WxHt {
		constructor(deal) {
			this.nativeIcon_bid = 'adunit-16fabe389dfabeb7';
			this.moreGame_bid = '5e96bcd16afd6f2f208052a9';
			this.horizeBox_bid = '5e96bcd16afd6f2f208052a9';
			this.deal = deal;
		}
		init() {
			this.isLeftWait = null;
			this.isRightWait = null;
			this.htHttps = new Laya.HttpRequest();
			this.htHttps.on(Laya.Event.COMPLETE, this, this.getData);
			this.htHttps.on(Laya.Event.ERROR, this, this.getDataError);
			this.alreadyUse = [];
			this.htSdkInit();
		}
		getData(data) {
			if (!data.data) return;
			this.sdkData = data.data.cpabuyamount;
			this.sdkData.sort(function (a, b) {
				return a.sort - b.sort;
			});
			if (this.isRightWait) {
				this.changeRightVerBox(this.isRightWait);
				this.isRightWait = null;
			}
			if (this.isLeftWait) {
				this.changeRightVerBox(this.isLeftWait);
				this.isLeftWait = null;
			}
		}
		getDataError(data) {
			console.error('获取数据出错', data);
		}
		htSdkInit() {
			let lf = this;
			this.gid = '5e96bbfc6afd6f2f208052a6';
			hts.init(this.gid, null, function (err, re) {
				console.log('err', err);
				console.log('re', re);
				console.error('互推初始化成功-------------------------->>');
				lf.getBox();
				lf.arr_GameArr = [];
			});
			Laya.timer.loop(5000, this, this.getBox);
		}
		getBox() {
			this.sendHttps();
		}
		sendHttps() {
			var timestamp = new Date().getTime();
			let timeString = this.convertDateFromString(
				new Date().getTime(),
				'Y-M-D h:m:s'
			);
			let requestParam =
				'gameCode=kbnn&' +
				'materialType=CHANGE_CPA_BUYAMOUNT&' +
				'date=' +
				timeString +
				'&' +
				'sign=' +
				MD5.md5('kbnn' + 'CHANGE_CPA_BUYAMOUNT' + timeString);
			this.htHttps.send(
				// 'https://webproxy.leiting.com/advert/terrace/cpa_material_api!getData.action?' +
				'' +
					requestParam,
				'',
				'get',
				'json'
			);
		}
		onLoaded() {}
		changeHorziBox(data) {}
		changeGameIcon(data) {}
		changeMoreGame(data) {}
		changeGameListBox(data) {}
		gameIconLoop() {
			let numRandom1 = Math.floor(
				Math.random() * this.arr_NativeIcon.length
			);
			let numRandom2 = Math.floor(
				Math.random() * this.arr_NativeIcon[0].length
			);
			this.gameIcon.setData(
				this.arr_NativeIcon[numRandom1][numRandom2],
				1,
				this.nativeIcon_bid
			);
		}
		changeLeftVerBox(data) {
			if (!this.sdkData) {
				this.isLeftWait = data;
				return;
			}
			if (!this.leftVerBox) this.leftVerBox = new WX_verBoxOnly();
			if (data.isShow) {
				this.leftVerBox.setStyle(data);
				this.leftVerBox.setData({
					infoList: this.canUseArr(),
					name: 'wx'
				});
			} else {
				this.leftVerBox.hide();
			}
		}
		changeRightVerBox(data) {
			if (!this.sdkData) {
				this.isRightWait = data;
				return;
			}
			if (!this.rightVerBox) this.rightVerBox = new WX_verBoxOnly();
			if (data.isShow) {
				this.rightVerBox.setStyle(data);
				this.rightVerBox.setData({
					infoList: this.canUseArr(),
					name: 'wx'
				});
			} else {
				this.rightVerBox.hide();
			}
		}
		changeIcon_2(data) {
			if (!this.sdkData) {
				return;
			}
			if (!this.iconBox) this.iconBox = new Wx_IconSetting();
			if (data.isShow) {
				this.iconBox.setStyle(data);
				let arr = this.canUseArr();
				this.iconBox.setData({
					info: arr[Math.floor(arr.length * Math.random())],
					name: 'wx'
				});
				Laya.timer.loop(15000, this, this.timerIcon2);
			} else {
				this.iconBox.hide();
				Laya.timer.clear(this, this.timerIcon2);
			}
		}
		timerIcon2() {
			let arr = this.canUseArr();
			this.iconBox.setData({
				info: arr[Math.floor(arr.length * Math.random())],
				name: 'wx'
			});
		}
		changeHorizoBox(data) {
			if (!this.sdkData) {
				return;
			}
			if (!this.bigGameBox) this.bigGameBox = new WX_GameListBox();
			if (data.isShow) {
				this.bigGameBox.setData({
					infoList: this.canUseArr(),
					name: 'wx'
				});
			} else {
				this.bigGameBox.hide();
			}
		}
		changeBigBoxList(data) {
			if (!this.sdkData) {
				return;
			}
			if (!this.bigGameBox) this.bigGameBox = new WX_GameListBox();
			if (data.isShow) {
				this.bigGameBox.setData({
					infoList: this.canUseArr(),
					name: 'wx'
				});
			} else {
				this.bigGameBox.hide();
			}
		}
		changeVerChouTiBox(data) {
			if (!this.sdkData) {
				return;
			}
			if (!this.leftGameBox) this.leftGameBox = new WX_verBox();
			if (data.isShow) {
				this.leftGameBox.setStyle(data);
				this.leftGameBox.setData({
					infoList: this.canUseArr(),
					name: 'wx'
				});
			} else {
				this.leftGameBox.hide();
			}
		}
		convertDateFromString(number, format) {
			let time = new Date(number);
			let newArr = [];
			let formatArr = ['Y', 'M', 'D', 'h', 'm', 's'];
			function formatNumber(n) {
				n = n.toString();
				return n[1] ? n : '0' + n;
			}
			newArr.push(time.getFullYear());
			newArr.push(formatNumber(time.getMonth() + 1));
			newArr.push(formatNumber(time.getDate()));
			newArr.push(formatNumber(time.getHours()));
			newArr.push(formatNumber(time.getMinutes()));
			newArr.push(formatNumber(time.getSeconds()));
			for (let i in newArr) {
				format = format.replace(formatArr[i], newArr[i]);
			}
			return format;
		}
		canUseArr() {
			let arr = [];
			let item;
			if (!this.sdkData) return [];
			if (!this.alreadyUse) return [];
			let len = this.sdkData.length;
			let alLen = this.alreadyUse.length;
			let canAdd;
			if (!this.sdkData) return null;
			for (let i = 0; i < len; i++) {
				let item = this.sdkData[i];
				if (!item) return null;
				canAdd = true;
				for (let use = 0; use < alLen; use++) {
					if (item.appId == this.alreadyUse[use]) {
						canAdd = false;
						break;
					}
				}
				if (canAdd) arr.push(item);
			}
			return arr;
		}
		createHtIcon() {
			let lf = this;
			let sysInfo = Laya.Browser.window.wx.getSystemInfoSync();
			this.wxHtIcon1 = Laya.Browser.window.wx.createGameIcon({
				adUnitId: 'PBgAAl97RoRW3HlY',
				count: 2
			});
			this.wxHtIcon1.onLoad(res => {
				lf.wxHtIcon1.show();
			});
			this.wxHtIcon1.onResize(res => {
				for (let i = 0; i < res.length; i++) {
					let re = res[i];
					re.appNameHidden = true;
					re.left = sysInfo.screenWidth - 60;
					re.top = sysInfo.screenHeight / 2 + i * 60;
				}
			});
		}
		showIcon(data) {
			let icon = this.wxHtIcon1;
			if (icon) {
				if (data.isShow) {
					icon.load();
				} else {
					icon.hide();
				}
			} else {
				this.createHtIcon();
			}
		}
		jumpToGame(data) {
			let wx_ = Laya.Browser.window.wx;
			if (!wx_) return;
			let lf = this;
			let gameJumpData = data.data;
			let sysinfo = wx_.getSystemInfoSync();
			let plat = 3;
			if (sysinfo.platform == 'ios') plat = 1;
			if (sysinfo.platform == 'android') plat = 2;
			let jumpObj = {
				toappname: gameJumpData.toAppname,
				appid: gameJumpData.appId,
				gameCode: gameJumpData.gameCode,
				toapppath: gameJumpData.toApppath,
				address: gameJumpData.address,
				platform: plat,
				sort: gameJumpData.sort
			};
			wx_.navigateToMiniProgram({
				appId: gameJumpData.appId,
				extraData: jumpObj,
				path: gameJumpData.toApppath,
				success(res) {
					lf.alreadyUse.push(gameJumpData.appId);
					if (lf.bigGameBox)
						lf.bigGameBox.updata({
							infoList: lf.canUseArr(),
							name: 'wx'
						});
				},
				fail(res) {
					lf.changeBigBoxList({ isShow: true });
				}
			});
		}
	}

	class BaseDeal {
		constructor() {
			this.curVersion = 'versionDefualt';
			this.onOffName = 'onOffOnLine';
			this.fileName = null;
		}
		initPlatform(DealObj, arrUI) {
			this.adData = DealObj.adData;
			this.curPlatForm = DealObj.curPlatForm;
			this.curVersion = DealObj.curVersion;
			this.userData = DealObj.userData;
			this.fileName = DealObj.fileName;
			this.logIndex = 0;
			this.sdkTest();
			this.uiItemRigist(arrUI);
			this.getOnOff(0);
			this.initAtlas();
		}
		sdkTest() {
			let string = '';
			if (
				SDKConfig.LOCAL_AD_ON_OFF ||
				SDKConfig.LOG_TEXT ||
				SDKConfig.LOCAL_ON_OFF_TEST ||
				GameConfig.isTest ||
				SDKConfig.LOCAL_PROVINCE ||
				SDKConfig.LOCAL_CITY ||
				SDKConfig.LOCAL_TIME ||
				SDKConfig.LOCAL_HOUR
			) {
				string = '有本地SDK测试数据打开，正式版需要关闭';
			} else {
				string = '测试都已经关闭，可以提交该版本！请核对版本号……';
			}
			console.log('');
			console.warn('----------------【警告】--------------');
			console.warn('*************************************');
			console.warn('*************************************');
			console.warn('*************************************');
			console.warn(string);
			console.warn('*************************************');
			console.warn('*************************************');
			console.warn('*************************************');
			console.warn('----------------【警告】--------------');
			console.log('');
		}
		initAtlas() {
			LoadQueue.Inst.loadUI(
				UrlUtils.UI + 'UIPlatform',
				Laya.Handler.create(this, function () {
					console.error('图集准备完毕');
					fgui.UIPackage.addPackage(UrlUtils.UI + 'UIPlatform');
					this.atlasOnLoad();
				})
			);
		}
		uiItemRigist(arr) {
			for (let i = 0; i < arr.length; i++) {
				fgui.UIObjectFactory.setPackageItemExtension(
					arr[i].url,
					arr[i].cls
				);
			}
		}
		atlasOnLoad() {}
		getLocalOnOff() {
			let self = this;
			Laya.loader.load(
				'onOff/wx.json',
				Laya.Handler.create(this, function (json) {
					console.error('---------------本地配置-----------------');
					self.showLog('---------------本地配置-----------------');
					self.getOnOffConfig(json);
				}),
				null,
				Laya.Loader.JSON
			);
		}
		getOnOff(_index) {
			this.getLocalOnOff();
			if (!SDKConfig.LOCAL_AD_ON_OFF) {
				let http = new Laya.HttpRequest();
				let index = _index;
				let fileName = this.curPlatForm;
				if (this.fileName !== null) fileName = this.fileName;
				let self = this;
				http.once(Laya.Event.COMPLETE, this, function (data) {
					console.log('onoff - success ' + data);
					if (!data) return;
					console.error('网络配置');
					self.showLog('网络配置');
					self.getOnOffConfig(data);
				});
				http.once(Laya.Event.ERROR, this, function () {
					console.log('onoff - fail ');
					if (index >= 2) return;
					Laya.timer.once(50, this, function () {
						this.getOnOff(index + 1);
					});
					console.error('【重新连接】');
				});
				http.send(
					// 'https://minires.yingtenaier.com/wx_kbnn/onOff/wx.json',
					'',
					'',
					'get',
					'json'
				);
			}
		}
		getOnOffConfig(data) {
			let onOffName = data.versionMap[this.curVersion];
			if (!onOffName) {
				onOffName = data.versionMap['versionDefualt'];
				console.error('未找到改为默认配置');
			}
			let onOff = data[onOffName];
			this.onOff = onOff;
			console.error(
				'获取到的配置' + this.curVersion + '  当前配置' + onOffName,
				this.onOff
			);
			this.showLog(
				'获取到的配置' + this.curVersion + '  当前配置' + onOffName
			);
			this.onOffOnEable();
		}
		showLog(str) {
			if (!SDKConfig.LOG_TEXT) return;
			let text = new Laya.Text();
			Laya.stage.addChild(text);
			text.text = str;
			text.fontSize = 20;
			text.stroke = 1;
			text.strokeColor = '#fff';
			text.x = GameConfig.viewWidth / 2;
			text.y = 30 * this.logIndex++;
			text.zOrder = 10000;
		}
		getAdPoint(adPoint) {
			let adNewPointDefault = {
				isOn: false,
				banCity: 'none,none',
				express: '还未获取到广告配置',
				value: 100
			};
			if (!adPoint) {
				console.error('send未带adPoint ad' + adPoint);
				return adNewPointDefault;
			}
			if (!this.onOff) {
				console.error('还未获取到广告配置');
				return adNewPointDefault;
			}
			let adNewPoint = this.onOff['ad' + adPoint];
			if (!adNewPoint) {
				console.error('无该广告策略 ad' + adPoint);
				return adNewPointDefault;
			}
			return adNewPoint;
		}
		isInAarea(adPoint) {
			let areaArr = this.getAdPoint(adPoint).banCity.split(',');
			if (!areaArr) return false;
			for (let i = 0; i < areaArr.length; i++) {
				if (!this.userData.province) return false;
				if (
					this.userData.province == areaArr[i] ||
					this.userData.city == areaArr[i]
				)
					return true;
			}
			return false;
		}
		isInTime(adPoint) {
			let arr = this.getAdPoint(adPoint).value;
			let isIn = false;
			let hours = new Date().getHours();
			if (SDKConfig.LOCAL_HOUR) hours = SDKConfig.LOCAL_HOUR;
			for (let i = 0; i < arr.length; i++) {
				if (hours >= arr[i].start && hours <= arr[i].end) {
					isIn = true;
					break;
				}
			}
			return isIn;
		}
		getLocation(res) {
			const latitude = res.latitude;
			const longitude = res.longitude;
			let http = new Laya.HttpRequest();
			http.once(Laya.Event.COMPLETE, this, function (data) {
				let location = JSON.parse(data);
			});
			http.send(
				// 'https://apis.map.qq.com/ws/geocoder/v1/?location=' +
				'' +
					latitude +
					',' +
					longitude +
					'&key=LTSBZ-PY464-2ZYUV-DAAPZ-2FZD2-E3FHI',
				'',
				'get',
				'text'
			);
		}
		getLocation2() {
			let http = new Laya.HttpRequest();
			http.once(Laya.Event.COMPLETE, this, function (data) {
				let strings = '';
				let index = 0;
				for (let i = 0; i < data.length; i++) {
					let str = data.charAt(i);
					if (str == '{') index = 1;
					if (index == 1) strings += str;
					if (str == '}') index = 2;
				}
				let location = JSON.parse(strings);
				if (!location) return;
				this.splitCity(location.cname);
			});
			http.send(
				// 'https://pv.sohu.com/cityjson?ie=utf-8',
				'',
				'',
				'get',
				'text'
			);
		}
		splitCity(location) {
			let locations = location;
			let city = '';
			let province = '';
			let isProvince = false;
			for (let i = 0; i < locations.length; i++) {
				let char = locations.charAt(i);
				if (!isProvince) city += char;
				else province += char;
				if (char == '省') {
					isProvince = true;
				}
			}
			if (!isProvince || province == '') province = city;
			if (!city || city == '') city = province;
			if (SDKConfig.LOCAL_CITY && SDKConfig.LOCAL_PROVINCE) {
				this.userData.province = SDKConfig.LOCAL_PROVINCE;
				this.userData.city = SDKConfig.LOCAL_CITY;
				console.error(
					'测试虚拟地址：',
					this.userData.province,
					this.userData.city
				);
				return;
			}
			this.userData.province = province;
			this.userData.city = city;
			console.error('真实定位地址', province, city);
		}
		judgeWorkDay(work, nowork) {
			let http = new Laya.HttpRequest();
			let date = new Date();
			let requesStr =
				'' +
				date.getFullYear() +
				dayString(date.getMonth() + 1) +
				dayString(date.getDate());
			if (SDKConfig.LOCAL_TIME) requesStr = SDKConfig.LOCAL_TIME;
			function dayString(num) {
				if (num / 10 < 1) {
					return '0' + num;
				} else {
					return num;
				}
			}
			this.isWorkDay = this.isWorkDayJudge(requesStr, work, nowork);
			if (this.isWorkDay) console.error('【工作日】');
			else console.error('【节假日】');
		}
		isWorkDayJudge(dataStr, work, nowork) {
			if (!work) work = [];
			if (!nowork) nowork = [];
			let date = dataStr.substring(4, dataStr.length);
			function checkDay(arr) {
				for (let i = 0; i < arr.length; i++) {
					let str = arr[i];
					if (str == date) return true;
				}
			}
			if (checkDay(work)) return true;
			if (checkDay(nowork)) return false;
			let index = new Date().getDay();
			if (index == 0 || index == 6) return false;
			return true;
		}
		onOffOnEable() {}
		videoChange(data) {}
		bannerChange(data) {}
		impactionChange(data) {}
		insertChange(data) {}
		clickInsert(data) {}
		clickBanner(data) {}
		clickImpaction(data) {}
		onNativeInsertClose(data) {}
		reportMonitor() {}
		nativeSmallChange(data) {}
		boxAdShow(data) {}
		btnUpTween(data) {}
		nativeSupriseBox(data) {}
		clickSuperBox(data) {}
		filterHorizBox(data) {
			if (!data) return;
			if (data.name != this.curPlatForm) return;
			this.HorizBoxChange(data);
		}
		HorizBoxChange(data) {}
		filterMoreGame(data) {
			if (!data) return;
			if (data.name != this.curPlatForm) return;
			this.moreGameChange(data);
		}
		moreGameChange(data) {}
		fliterGameIcon(data) {
			if (!data) return;
			if (this.filterPlatForm(data)) return;
			this.gameIconChange(data);
		}
		gameIconChange(data) {}
		fliterGameListBox(data) {
			if (!data) return;
			if (this.filterPlatForm(data)) return;
			this.fliterGameIcon(data);
		}
		gameListBoxChange(data) {}
		fliterJumpToGame(data) {
			if (this.filterPlatForm(data)) return;
			this.jumpToGame(data);
		}
		jumpToGame(data) {}
		fliterYouLike(data) {
			if (this.filterPlatForm(data)) return;
			this.youLikeChange(data);
		}
		youLikeChange(data) {}
		filterGameRecoder(data) {
			if (this.filterPlatForm(data)) return;
			this.gameRecoderChange(data);
		}
		gameRecoderChange(data) {}
		shareGame(data) {}
		changeShareGameIcon(data) {}
		changeNoSound(data) {}
		changeHtWxIcon(data) {}
		changeGame(data) {}
		showPropDetail(data) {}
		clickBaoXiang(data) {}
		changeLeftVerBox(data) {}
		changeRightVerBox(data) {}
		changeHorizoBox(data) {}
		changeVerChouTiBox(data) {}
		changeBigBoxList(data) {}
		changeIconSetting(data) {}
		changeGetEndIntroduce(data) {}
		changeGetYinshen(data) {}
		changeGetAddDay(data) {}
		changeLoginAward(data) {}
		showQQMainBox(data) {}
		changeFoundAward(data) {}
		changeBtnEndIntroduce(data) {}
		changeFoundAwardWXIcon(data) {}
		exitGame(data) {}
		showPrivacyIcon(data) {}
		filterAldEvent(data) {
			if (this.filterPlatForm(data)) return;
			this.aldEventSend(data);
		}
		aldEventSend(data) {}
		YunZhiDataReport(data) {}
		filterPlatForm(data) {
			return data.name != this.curPlatForm;
		}
		barrageWordChange(data) {}
		filterShowMsg(data) {
			if (this.filterPlatForm(data)) return;
			this.showMsg(data);
		}
		showMsg(data) {}
	}

	class BaseSdkComp extends fgui.GComponent {
		constructor() {
			super();
			this.platFormName = '';
		}
		setPlatFormName(nameString) {
			this.platFormName = nameString;
		}
		constructFromXML(xml) {
			super.constructFromXML(xml);
			FairyUtils.setVar(this, this);
		}
		setStyle(data) {
			this.removeFromParent();
			if (data.parent) {
				if (data.zOrder) data.parent.addChildAt(this, data.zOrder);
				else data.parent.addChild(this);
			}
			if (data.x != null) this.x = data.x;
			if (data.y != null) this.y = data.y;
			this.visible = true;
		}
		dataParse(data) {
			this.htData = [];
			for (let i = 0; i < data.length; i++) {
				for (let d = 0; d < data[i].length; d++) {
					this.htData.push(data[i][d]);
				}
			}
		}
	}

	class HT_HorizBox extends BaseSdkComp {
		constructor() {
			super();
			this.isOpen = false;
			this.xOrgin = 0;
		}
		initUI() {
			this.btn_moregame.getChild('img_jiantou').scaleX = -1;
		}
		addListener() {
			this.btn_moregame.onClick(this, this.changeBox);
		}
		removeListener() {
			this.btn_moregame.offClick(this, this.changeBox);
		}
		changeBox() {
			if (this.tween) this.tween.complete();
			if (!this.isOpen) {
				this.xOrgin = this.x;
				this.tween = Laya.Tween.to(
					this,
					{ x: this.x + 415 },
					300,
					Laya.Ease.backIn
				);
			} else {
				this.tween = Laya.Tween.to(
					this,
					{ x: this.xOrgin },
					300,
					Laya.Ease.backIn
				);
			}
			this.btn_moregame.getChild('img_jiantou').scaleX *= -1;
			this.isOpen = !this.isOpen;
		}
		setData(data, scale, bid) {
			this.dataParse(data);
			this.addListener();
			this.pivotX = this.width / 2;
			this.scale_ = scale;
			this.arr_GameIcon = [];
			for (let i = 0; i < this.htData.length; i++) {
				let dataGame = this.htData[i];
				let gameIcon = Laya.Pool.getItem('gameIcon');
				if (!gameIcon) {
					gameIcon = fgui.UIPackage.createObject(
						'UIPlatform',
						'Ht_Icon'
					);
				}
				gameIcon.setPlatFormName(this.platFormName);
				gameIcon.setData(dataGame, this.scale_, bid);
				gameIcon.setBackGround(false);
				gameIcon.x = i * (88 * this.scale_ + 30);
				gameIcon.y = 0;
				this.icon_parent.addChild(gameIcon);
				this.arr_GameIcon.push(gameIcon);
			}
			Laya.timer.loop(16, this, this.loopRo);
		}
		loopRo() {
			this.visible = true;
			for (let i = 0; i < this.arr_GameIcon.length; i++) {
				let gameIcon = this.arr_GameIcon[i];
				gameIcon.x -= 0.7;
				if (gameIcon.x <= -(30 + 88 * this.scale_)) {
					gameIcon.x =
						(this.arr_GameIcon.length - 1) *
						(88 * this.scale_ + 30);
				}
			}
		}
		closeThis() {
			this.isOpen = false;
			this.btn_moregame.getChild('img_jiantou').scaleX = -1;
			Laya.timer.clear(this, this.loopRo);
			this.removeListener();
			this.removeFromParent();
			this.visible = false;
			if (!this.arr_GameIcon) return;
			if (this.arr_GameIcon.length == 0) return;
			for (let i = 0; i < this.arr_GameIcon.length; i++) {
				let gameIcon = this.arr_GameIcon[i];
				gameIcon.removeFromParent();
				Laya.Pool.recover('gameIcon', gameIcon);
			}
		}
	}

	class HT_GameIcon extends BaseSdkComp {
		constructor() {
			super();
			this.x_ = 0;
			this.y_ = 0;
			this.xL = 0;
			this.yL = 0;
		}
		addEvents() {
			this.onClick(this, this.jump);
		}
		removeEvents() {
			this.offClick(this, this.jump);
		}
		setBackGround(isShow) {
			this.img_backGround.visible = isShow;
		}
		setData(data, scale = 0.7, bid) {
			this.iconData = data;
			this.bid = bid;
			this.scaleNum = scale;
			this.update();
			this.addEvents();
			this.loader_gameImg.scaleX = 0.6;
			this.loader_gameImg.scaleY = 0.6;
			this.visible = true;
		}
		update() {
			this.off(Laya.Event.CLICK, this, this.jump);
			this.scaleX = this.scaleNum;
			this.scaleY = this.scaleNum;
			this.text_gameName.text = this.iconData.txt;
			this.loader_gameImg.url = this.iconData.iconUrl;
			this.on(Laya.Event.CLICK, this, this.jump);
		}
		setpos_() {
			this.xL = this.x;
			this.yL = this.y;
		}
		shake() {
			Laya.timer.loop(6000, this, this.skakeMgr);
		}
		skakeMgr() {
			Laya.timer.loop(17, this, this.skakeTimer);
			Laya.timer.once(1000, this, function () {
				Laya.timer.clear(this, this.skakeTimer);
			});
		}
		jump() {
			SDK.ins_.send(SDK_ORDER.HT_JUMP_TO_GAME, {
				name: this.platFormName,
				appId: this.iconData.jumpKey,
				bid: this.bid,
				mid: this.iconData.mid
			});
		}
		skakeTimer() {
			let ix = 1;
			let iy = 1;
			if (this.x_ > 0) ix = -1;
			if (this.y_ > 0) iy = -1;
			this.x_ = ix * Math.floor(4 * Math.random() + 1);
			this.y_ = iy * Math.floor(4 * Math.random() + 1);
			this.x = this.xL + this.x_;
			this.y = this.yL + this.y_;
		}
		clearTimer_() {
			this.x = this.xL;
			this.y = this.yL;
			Laya.timer.clear(this, this.skakeTimer);
			Laya.timer.clear(this, this.skakeMgr);
			Laya.timer.clearAll(this);
			this.visible = false;
			this.loader_gameImg.url = '';
			this.removeFromParent();
			this.removeEvents();
		}
		closeThis_() {
			this.clearTimer_();
		}
	}

	class HT_GameListBox extends UIBaseWindow {
		constructor(name) {
			super('UIPlatform', 'Ht_GameListBox');
			this.width_Icon = 88;
			this.heigth_Icon = 88;
			this.marginLeft = 100;
			this.marginTop = 100;
			this.platFormName = name;
		}
		SetViewStruct() {
			super.SetViewStruct();
			this.viewStruct.layerType = LayerType.TYPE_ALERT;
			this.viewStruct.layout = 5;
		}
		InitUI() {
			super.InitUI();
		}
		InitData(param) {
			this.arr_GameIcon = [];
			this.bid = param[1];
			this.platFormName = param[3];
			this.dataParse(param[0]);
			this.showList(param[2]);
		}
		dataParse(data) {
			this.htData = [];
			for (let i = 0; i < data.length; i++) {
				for (let d = 0; d < data[i].length; d++) {
					this.htData.push(data[i][d]);
				}
			}
		}
		showList(scale) {
			this.pivotX = this.width / 2;
			this.arr_GameIcon = [];
			this.height = 350;
			let width = this.listPanel.width;
			let maxDataWidth =
				(this.htData.length / 2) *
					(this.width_Icon * scale + this.marginLeft) -
				this.marginLeft;
			let add = 0;
			if (width > maxDataWidth) add = (width - maxDataWidth) / 2;
			for (let i = 0; i < this.htData.length; i++) {
				let dataGame = this.htData[i];
				let gameIcon = Laya.Pool.getItem('gameIcon');
				if (!gameIcon) {
					gameIcon = fgui.UIPackage.createObject(
						'UIPlatform',
						'Ht_Icon'
					);
				}
				gameIcon.setPlatFormName(this.platFormName);
				gameIcon.setData(dataGame, scale, this.bid);
				gameIcon.setBackGround(false);
				gameIcon.x =
					Math.floor(i / 2) *
						(this.width_Icon * scale + this.marginLeft) +
					add;
				gameIcon.y =
					(i % 2) * (this.heigth_Icon * scale + this.marginLeft);
				this.listPanel.addChild(gameIcon);
				this.arr_GameIcon.push(gameIcon);
			}
			if (width < maxDataWidth)
				Laya.timer.loop(16, this, this.loopRo, [scale]);
		}
		loopRo(scale) {
			this.visible = true;
			for (let i = 0; i < this.arr_GameIcon.length; i++) {
				let gameIcon = this.arr_GameIcon[i];
				gameIcon.x -= 0.7;
				if (
					gameIcon.x <= -(this.marginLeft + this.width_Icon * scale)
				) {
					gameIcon.x =
						Math.floor((this.arr_GameIcon.length - 1) / 2) *
						(this.width_Icon * scale + this.marginLeft);
				}
			}
		}
		AddListener() {
			this.btn_close.onClick(this, this.onHide);
		}
		RemoveListener() {
			this.btn_close.offClick(this, this.onHide);
		}
		onHide() {
			UISystem.Inst.RemoveWindowView(this);
		}
	}

	class HT_MoreGame extends BaseSdkComp {
		constructor() {
			super();
		}
		addEvents() {
			this.onClick(this, this.showMoreGame);
		}
		removeEvents() {
			this.offClick(this, this.showMoreGame);
		}
		setData(data, bid, scale = 1) {
			this.htData = data;
			this.bid = bid;
			this.scale = scale;
			this.addEvents();
			this.loader.url = 'ui://UIPlatform/cainiaiwan';
			this.visible = true;
		}
		closeThis_() {
			this.removeFromParent();
			this.removeEvents();
			this.visible = false;
		}
		showMoreGame() {
			UISystem.Inst.CreateWindowView(HT_GameListBox, [
				this.htData,
				this.bid,
				this.scale,
				this.platFormName
			]);
		}
	}

	class GetIntroduceBox extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'GetIntroduceBox');
		}
		initCom() {
			this.btn_lingqu.visible = false;
		}
		addEvent() {
			this.btn_getFree.onClick(this, this.onfree, [true]);
			this.btn_getVideo.onClick(this, this.onGetVideo);
			this.btn_lingqu.onClick(this, this.onGetVideo);
			this.btn_close.onClick(this, this.onClose);
		}
		upDataUI() {
			if (!this.uiData) return;
			let uiPlaying = UISystem.Inst.GetWindowView(UIGamePlayView);
			uiPlaying.ChangeImgBlack(true, 200, null, null, 0.7);
			GameMgr.Inst.pauseGame();
			this.btn_getFree.visible = true;
			this.btn_getVideo.visible = true;
			this.scaleX = 0;
			this.scaleY = 0;
			if (!this.uiData.isfree) {
				this.btn_getFree.visible = false;
			} else {
				this.btn_getVideo.visible = false;
			}
			this.text_Content.text = this.uiData.text;
			UISystem.Inst.CreateWindowView(UIEndIntroduce);
			let ui = UISystem.Inst.GetWindowView(UIEndIntroduce);
			ui.visible = false;
			Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, 300);
			if (this.uiData.name == 'qq') {
			} else {
				this.btn_close.visible = false;
				if (this.uiData.noDelay) {
					this.delayShow();
				} else Laya.timer.once(2000, this, this.delayShow);
			}
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: this.uiData.name,
				isShow: true,
				parent: this.parent,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
		}
		delayShow() {
			this.btn_close.visible = true;
		}
		onfree(isOver) {
			let ui = UISystem.Inst.GetWindowView(UIEndIntroduce);
			if (!ui) return;
			ui.visible = true;
			ui.onAdLookOver(isOver);
			this.hide();
			GameData.ins_.setFirstIntroduce();
		}
		onGetVideo() {
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: this.uiData.name,
				handler: Laya.Handler.create(this, this.onfree)
			});
		}
		onClose() {
			UISystem.Inst.RemoveWindowClass(UIEndIntroduce);
			this.hide();
		}
		hide() {
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: this.uiData.name,
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: this.uiData.name,
				isShow: true,
				adPoint: 4
			});
			this.removeFromParent();
			Laya.Tween.to(this, { scaleX: 0, scaleY: 0 }, 300);
			GameMgr.Inst.contiueGame();
			let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
			ui.ChangeImgBlack(false, 200, null);
			let uiplayingView = UISystem.Inst.GetWindowView(UIGamePlayView);
		}
	}

	class GetYinShenBox extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'GetYinShenBox');
		}
		initCom() {
			this.img_no = this.btn_get.getChild('img_no').asImage;
			this.img_yes = this.btn_get.getChild('img_yes').asImage;
		}
		addEvent() {
			this.btn_get.onClick(this, this.onVideo);
			this.btn_select.onClick(this, this.changeSelect);
			this.btn_wx_no.onClick(this, this.onClose);
		}
		changeSelect() {
			this.img_no.visible = !this.btn_select.selected;
			this.img_yes.visible = this.btn_select.selected;
		}
		upDataUI() {
			if (!this.uiData) return;
			this.btn_select.selected = true;
			this.changeSelect();
			let uiPlaying = UISystem.Inst.GetWindowView(UIGamePlayView);
			uiPlaying.ChangeImgBlack(true, 200, null, null, 0.7);
			GameMgr.Inst.pauseGame();
			this.text_content.text = this.uiData.text;
			this.scaleX = 0;
			this.scaleY = 0;
			Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, 300);
			this.btn_select.visible = false;
			this.btn_wx_no.visible = false;
			if (this.uiData.name == 'qq') {
				this.img_playIcon.visible = false;
				this.btn_select.visible = true;
			} else {
				if (this.uiData.noDelay) {
					this.delayShow();
				} else Laya.timer.once(2000, this, this.delayShow);
			}
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: this.uiData.name,
				isShow: true,
				parent: this.parent,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
		}
		delayShow() {
			this.btn_wx_no.visible = true;
		}
		onVideo() {
			if (this.btn_select.selected) {
				SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
					name: this.uiData.name,
					handler: Laya.Handler.create(this, this.onlook)
				});
			} else {
				this.onClose();
			}
		}
		onlook(isOver) {
			if (isOver) {
				Role.ins_.changeDataByString('yinShenTimes', 1);
				let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
				ui.onBtnYinShen();
				this.hide();
			}
		}
		onClose() {
			this.hide();
		}
		hide() {
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: this.uiData.name,
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: this.uiData.name,
				isShow: true,
				adPoint: 4
			});
			this.visible = false;
			this.removeFromParent();
			GameMgr.Inst.contiueGame();
			let uiPlaying = UISystem.Inst.GetWindowView(UIGamePlayView);
			uiPlaying.ChangeImgBlack(false, 200, null);
			Laya.Tween.to(this, { scaleX: 0, scaleY: 0 }, 300);
			let uiplayingView = UISystem.Inst.GetWindowView(UIGamePlayView);
		}
	}

	class AddDataBox extends GetIntroduceBox {
		constructor() {
			super();
		}
		initCom() {
			this.btn_getVideo.visible = false;
			this.btn_getFree.visible = false;
		}
		upDataUI() {
			if (!this.uiData) return;
			let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
			ui.ChangeImgBlack(true, 200, null, null, 0.7);
			GameMgr.Inst.pauseGame();
			this.btn_lingqu.visible = true;
			this.text_Content.text = this.uiData.text;
			this.scaleX = 0;
			this.scaleY = 0;
			Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, 300);
			if (this.uiData.name == 'qq') {
			} else {
				this.btn_close.visible = false;
				if (this.uiData.noDelay) {
					this.delayShow();
				} else Laya.timer.once(2000, this, this.delayShow);
			}
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: this.uiData.name,
				isShow: true,
				parent: this.parent,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
		}
		onfree(isOver) {
			if (isOver) {
				Role.ins_.changeDataByString('dayMax', 1);
				this.onClose();
			}
		}
		onClose() {
			this.hide();
			GameMgr.Inst.contiueGame();
			let uiplayingView = UISystem.Inst.GetWindowView(UIGamePlayView);
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: this.uiData.name,
				isShow: false,
				parent: this.parent,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: this.uiData.name,
				isShow: true,
				adPoint: 4
			});
		}
	}

	class UIPlayYinShen extends UIBaseWindow {
		constructor(a, b) {
			if (a && b) {
				super(a, b);
				return;
			}
			super('UIGamePlayingView', 'UIPlayYinShen');
		}
		InitUI() {
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnMengBan(
				true,
				0.7
			);
			GameMgr.Inst.pauseGame();
		}
		InitData() {
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'oppo',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'meizu',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'vivo',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'toutiao',
				isShow: true,
				parent: this,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'qq',
				isShow: true,
				parent: this,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'wx',
				isShow: true,
				parent: this,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.HT_VER_LEFT_BOX, {
				isShow: true,
				name: 'wx',
				parent: this.parent,
				x: 0,
				y: (720 - 520) / 2
			});
			SDK.ins_.send(SDK_ORDER.HT_VER_RIGHT_BOX, {
				isShow: true,
				name: 'wx',
				parent: this.parent,
				x: GameConfig.viewWidth - 167,
				y: (720 - 520) / 2
			});
			this.btn_lookAdTT.visible = false;
			this.btn_close.visible = false;
			this.btn_lookAd.visible = false;
			if (Laya.Browser.window.tt) {
				this.btn_close.visible = true;
				this.btn_lookAdTT.visible = true;
			} else this.btn_lookAd.visible = true;
		}
		SetViewStruct() {
			super.SetViewStruct();
			this.viewStruct.layerType = LayerType.TYPE_WINDOW;
			this.viewStruct.layout = 5;
		}
		AddListener() {
			this.btn_no.onClick(this, this.no);
			this.btn_lookAd.onClick(this, this.lookAd);
			this.btn_lookAdTT.onClick(this, this.lookAd);
			this.btn_close.onClick(this, this.no);
		}
		RemoveListener() {
			this.btn_no.offClick(this, this.no);
			this.btn_lookAd.offClick(this, this.lookAd);
			this.btn_lookAdTT.offClick(this, this.lookAd);
			this.btn_close.offClick(this, this.no);
		}
		no() {
			UISystem.Inst.RemoveWindowView(this);
			GameMgr.Inst.contiueGame();
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'toutiao',
				isShow: false,
				adPoint: 4,
				isDialog: true
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'meizu',
				isShow: false,
				adPoint: 4,
				isDialog: true
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'qq',
				isShow: false,
				adPoint: 4,
				isDialog: true
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'wx',
				isShow: false,
				adPoint: 4,
				isDialog: true
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'vivo',
				isShow: false,
				adPoint: 4,
				isDialog: true
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'oppo',
				isShow: false,
				adPoint: 4,
				isDialog: true
			});
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnMengBan(
				false,
				0.7
			);
			SDK.ins_.send(SDK_ORDER.HT_VER_LEFT_BOX, {
				isShow: false,
				name: 'wx'
			});
			SDK.ins_.send(SDK_ORDER.HT_VER_RIGHT_BOX, {
				isShow: false,
				name: 'wx'
			});
		}
		lookAd() {
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'oppo',
				handler: Laya.Handler.create(this, this.adLookOver),
				needReplay: true
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'qq',
				handler: Laya.Handler.create(this, this.adLookOver),
				needReplay: true
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'meizu',
				handler: Laya.Handler.create(this, this.adLookOver),
				needReplay: true
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'wx',
				handler: Laya.Handler.create(this, this.adLookOver),
				needReplay: true
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'toutiao',
				handler: Laya.Handler.create(this, this.adLookOver),
				needReplay: false
			});
			SDK.ins_.send(SDK_ORDER.NO_SDK_HANDLER, {
				name: 'web',
				handler: Laya.Handler.create(this, this.adLookOver, [true]),
				needReplay: true
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'vivo',
				handler: Laya.Handler.create(this, this.adLookOver),
				needReplay: true
			});
		}
		adLookOver(isOver) {
			if (!isOver) return;
			let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
			if (Laya.Browser.window.tt) {
				Role.ins_.changeDataByString('yinShenTimes', 2);
			} else Role.ins_.changeDataByString('yinShenTimes', 1);
			UISystem.Inst.RemoveWindowView(this);
			GameMgr.Inst.contiueGame();
			ui.ChangeBtnMengBan(false, 0.7);
			ui.updataYinShenTimesUI();
			ui.onBtnYinShen();
			SDK.ins_.send(SDK_ORDER.HT_VER_LEFT_BOX, {
				isShow: false,
				name: 'wx'
			});
			SDK.ins_.send(SDK_ORDER.HT_VER_RIGHT_BOX, {
				isShow: false,
				name: 'wx'
			});
		}
	}

	class UIPlayJingYin extends UIPlayYinShen {
		constructor() {
			super('UIGamePlayingView', 'UIPlayJingYin');
		}
		setNoSoundUi(nosound) {
			this.btnNoSound = nosound;
		}
		adLookOver(isOver) {
			if (!isOver) return;
			let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
			if (Laya.Browser.window.tt) {
				Role.ins_.changeDataByString('noSoundTimes', 2);
			} else Role.ins_.changeDataByString('noSoundTimes', 1);
			this.btnNoSound && this.btnNoSound.upDataUI();
			UISystem.Inst.RemoveWindowView(this);
			ui.ChangeBtnMengBan(false, 0.7);
			SDK.ins_.send(SDK_ORDER.HT_VER_LEFT_BOX, {
				isShow: false,
				name: 'wx'
			});
			SDK.ins_.send(SDK_ORDER.HT_VER_RIGHT_BOX, {
				isShow: false,
				name: 'wx'
			});
		}
		Reset() {
			GameMgr.Inst.contiueGame();
			this.btnNoSound = null;
			super.Reset();
		}
	}

	class Btn_NoSound extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'Btn_NoSound');
		}
		initCom() {
			this.num = this.com.getChild('num');
			this.iconPlay = this.com.getChild('icon');
			this.shineImg = this.com.getChild('shineImg');
			this.trafromShake = this._view.getTransition('shake');
			this.trafromShine = this.com.getTransition('shine');
			this.name = 'btn_NoSound';
			this.num.text = '' + Role.ins_.getDataByString('noSoundTimes');
			if (Laya.Browser.window.tt) {
				this.iconPlay.visible = false;
			}
		}
		setPlatName(name) {
			this.platName = name;
		}
		initUI() {
			this.addEvent();
		}
		upDataUI() {
			this.shineImg.visible = true;
			let numTime = Role.ins_.getDataByString('noSoundTimes');
			console.log('更新静音', numTime);
			this.num.text = '';
			if (numTime == 0) {
				this.iconPlay.visible = true;
			} else {
				this.iconPlay.visible = false;
				this.num.text = numTime + '';
			}
			if (Laya.Browser.window.tt) {
				this.iconPlay.visible = false;
			}
		}
		addEvent() {
			this.onClick(this, this.onMouseClick);
		}
		removEvent() {
			this.offClick(this, this.onMouseClick);
		}
		onMouseClick() {
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
				id: 6,
				trigger: true,
				sym: 'btn_NoSound'
			});
			if (Role.ins_.getDataByString('noSoundTimes') > 0) {
				Role.ins_.changeDataByString('noSoundTimes', -1);
				MainRoleMgr.Inst.setCantHeard();
				this.upDataUI();
				return;
			}
			if (Laya.Browser.window.tt) {
				GameMgr.Inst.pauseGame();
				let view = UISystem.Inst.CreateWindowView(UIPlayJingYin);
				view.setNoSoundUi(this);
				return;
			}
			GameMgr.Inst.pauseGame();
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: this.platName,
				isShow: true,
				handler: Laya.Handler.create(this, this.lookOver)
			});
		}
		lookOver(isOver) {
			if (isOver) {
				if (Laya.Browser.window.tt) {
					Role.ins_.changeDataByString('noSoundTimes', 2);
				} else Role.ins_.changeDataByString('noSoundTimes', 1);
				this.upDataUI();
			}
			GameMgr.Inst.contiueGame();
		}
		closeThis() {
			this.shineImg.visible = false;
			this.removEvent();
			this.removeFromParent();
			GameMgr.Inst.contiueGame();
		}
	}

	class FoundAward extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'FoundAward');
		}
		addEvent() {
			this.btn_addDay.onClick(this, this.videoPlay, [1]);
			this.btn_addYinshen.onClick(this, this.videoPlay, [2]);
			this.btn_addnoSound.onClick(this, this.videoPlay, [3]);
			this.btn_getTwoOne.onClick(this, this.videoPlay, [4]);
			this.btn_NeedAlll.onClick(this, this.videoPlay, [5]);
			this.btn_no.onClick(this, this.onClose);
		}
		videoPlay(btnIndex) {
			if (this['isGet' + btnIndex]) return;
			this.clickWitch = btnIndex;
			if (this['needAd' + btnIndex]) {
				SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
					name: this.uiData.name,
					handler: Laya.Handler.create(this, this.getAward)
				});
			} else {
				if (this.needChange && btnIndex >= 2 && btnIndex <= 4) {
					this.needAd1 = true;
					this.needAd2 = true;
					this.needAd3 = true;
					this.needAd4 = true;
					this.needChange = false;
					if (this.uiData.noDelay) {
						this.btn_no.visible = true;
						this.btn_NeedAlll.alpha = 1;
						this.btn_NeedAlll.visible = true;
						if (
							this.uiData.name == 'oppo' ||
							this.uiData.name == 'vivo'
						) {
							this.btn_NeedAlll.alpha = 0;
							this.img_allGer.visible = true;
							this.play_allGet.visible = true;
						}
					} else {
						Laya.timer.once(2000, this, function () {
							this.btn_no.visible = true;
							this.btn_NeedAlll.alpha = 1;
							this.btn_NeedAlll.visible = true;
							if (
								this.uiData.name == 'oppo' ||
								this.uiData.name == 'vivo'
							) {
								this.btn_NeedAlll.alpha = 0;
								this.img_allGer.visible = true;
								this.play_allGet.visible = true;
							}
						});
					}
				}
				this.getAward(true, true);
			}
		}
		getAward(isOver, isNotVideo) {
			if (isOver) {
				switch (this.clickWitch) {
					case 1:
						this.getAddDay();
						break;
					case 2:
						this.getDoubleYinShen();
						break;
					case 3:
						this.getDoublieJinYin();
						break;
					case 4:
						this.getEveyOne();
						break;
					case 5:
						this.getAll();
						break;
				}
				this['isGet' + this.clickWitch] = true;
				this.loaderImgUpdata();
				let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
				if (ui) ui.updataYinShenTimesUI();
				SDK.ins_.send(SDK_ORDER.HT_ICON_NO_SOUND_CHANGE, {
					name: this.uiData.name,
					syms: 'updata'
				});
			}
		}
		getAddDay() {
			if (this.isGet1) return false;
			Role.ins_.changeDataByString('dayMax', 1);
			SDK.ins_.send(SDK_ORDER.TIPS_GAME, {
				text: "You get more time to escape!"
			});
			return true;
		}
		getDoubleYinShen() {
			if (this.isGet2) return false;
			SDK.ins_.send(SDK_ORDER.TIPS_GAME, { text: 'Claim Invisibility Cloak*2' });
			Role.ins_.changeDataByString('yinShenTimes', 2);
			return true;
		}
		getDoublieJinYin() {
			if (this.isGet3) return false;
			SDK.ins_.send(SDK_ORDER.TIPS_GAME, { text: 'Claim Mute props*2' });
			Role.ins_.changeDataByString('noSoundTimes', 2);
			return true;
		}
		getEveyOne() {
			if (this.isGet4) return false;
			Role.ins_.changeDataByString('noSoundTimes', 1);
			Role.ins_.changeDataByString('yinShenTimes', 1);
			SDK.ins_.send(SDK_ORDER.TIPS_GAME, {
				text: 'Claim Invisibility Cloak*1 Mute props*1'
			});
			return true;
		}
		getAll() {
			let boo =
				this.getAddDay() ||
				this.getDoubleYinShen() ||
				this.getDoublieJinYin() ||
				this.getEveyOne();
			if (!boo) {
				SDK.ins_.send(SDK_ORDER.TIPS_GAME, {
					text: 'The rewards have been collected and there are no rewards left.'
				});
			}
			this.onClose();
		}
		upDataUI() {
			if (!this.uiData) return;
			this.visible = true;
			GameMgr.Inst.pauseGame();
			this.needAd5 = true;
			this.btn_no.visible = false;
			this.btn_NeedAlll.visible = false;
			this.img_allGer.visible = false;
			this.play_allGet.visible = false;
			this.isGet();
			this.btnTypeSet();
			this.loaderImgUpdata();
			this.x = (GameConfig.viewWidth - this._view.width) / 2;
			this.y = 0;
		}
		isGet() {
			this.isGet1 = false;
			this.isGet2 = false;
			this.isGet3 = false;
			this.isGet4 = false;
		}
		btnTypeSet() {
			this.needAd1 = true;
			this.needAd2 = false;
			this.needAd3 = false;
			this.needAd4 = false;
			if (this.uiData.index == 0) {
				this.needChange = false;
				if (this.uiData.noDelay) {
					this.btn_no.visible = true;
				} else {
					Laya.timer.once(2000, this, function () {
						this.btn_no.visible = true;
					});
				}
			} else {
				this.needChange = true;
			}
		}
		loaderImgUpdata() {
			for (let i = 1; i <= 4; i++) {
				let loader = this['loader' + i];
				this['play' + i + '_1'].visible = false;
				this['play' + i + '_2'].visible = false;
				if (this['isGet' + i]) {
					loader.url = 'ui://UIPlatform/gou';
				} else if (this['needAd' + i]) {
					loader.url = 'ui://UIPlatform/lingqu(2)';
					if (
						this.uiData.name == 'oppo' ||
						this.uiData.name == 'vivo'
					) {
						loader.url = 'ui://UIPlatform/lingqu_2';
						this['play' + i + '_1'].visible = true;
						this['play' + i + '_2'].visible = true;
					}
				} else {
					loader.url = 'ui://UIPlatform/lingqu_2';
				}
			}
		}
		onClose() {
			this.destory();
			this.visible = false;
			let uiplayingView = UISystem.Inst.GetWindowView(UIGamePlayView);
			GameMgr.Inst.contiueGame();
		}
	}

	class FoundGun extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'FoundGun');
		}
		initCom() {
			this.isGet = false;
		}
		addEvent() {
			this.btn_no.onClick(this, this.onClose);
			this.btn_get.onClick(this, this.get);
		}
		get() {
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: this.uiData.name,
				handler: Laya.Handler.create(this, this.onVideo)
			});
		}
		upDataUI() {
			if (!this.uiData) return;
			GameMgr.Inst.pauseGame();
			this.btn_no.visible = false;
			Laya.timer.once(2000, this, function () {
				this.btn_no.visible = true;
			});
			if (this.uiData.name == 'vivo') this.btn_no.visible = true;
			this.x = (GameConfig.viewWidth - this._view.width) / 2;
			this.y = 0;
			if (this.isGet) {
				this.onClose();
				let uiplayingView = UISystem.Inst.GetWindowView(UIGamePlayView);
			}
		}
		onVideo(isShow) {
			if (isShow) {
				SDK.ins_.send(SDK_ORDER.TIPS_GAME, {
					text: 'Get Powerful crossbow*1 and Anesthesia needle*1'
				});
				PropMgr.Inst.getHandProp(5);
				Laya.timer.once(20, PropMgr.Inst, PropMgr.Inst.getHandProp, [
					46
				]);
				let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
				ui.ChangeBtnShoot(true);
				this.onClose();
				this.isGet = true;
			}
		}
		onClose() {
			this.destory();
			let uiplayingView = UISystem.Inst.GetWindowView(UIGamePlayView);
			GameMgr.Inst.contiueGame();
		}
	}

	class DetailItem extends UIBaseWindow {
		constructor() {
			super();
		}
		constructFromXML(xml) {
			super.constructFromXML(xml);
			FairyUtils.setVar(this, this);
		}
		updata(url, str) {
			this.loader_img.url = 'ui://UIPlatform/' + url;
			this.text_tips.text = str;
		}
	}

	class UIPropInfoDetail extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'UIPropInfoDetail');
		}
		addEvent() {
			fgui.UIObjectFactory.setPackageItemExtension(
				'ui://UIPlatform/DetailItem',
				DetailItem
			);
			this.list_detail.itemRenderer = Laya.Handler.create(
				this,
				this.RenderListItem,
				null,
				false
			);
			this.list_detail.setVirtual();
			this.btn_getDetail.onClick(this, this.lookAdVideo);
			this.btn_ttVideo.onClick(this, this.lookAdVideo);
			this.btn_Close.onClick(this, this.close);
			this.btn_ttClose.onClick(this, this.close);
		}
		removEvent() {
			this.btn_getDetail.offClick(this, this.lookAdVideo);
			this.btn_ttVideo.offClick(this, this.lookAdVideo);
			this.btn_Close.offClick(this, this.close);
			this.btn_ttClose.offClick(this, this.close);
		}
		lookAdVideo() {
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: this.curPlatForm,
				handler: Laya.Handler.create(this, this.showDetail)
			});
		}
		showDetail(isOver) {
			if (isOver) {
				Role.ins_.setPropDetail(Role.ins_.getHandPropId());
				this.upDataUI();
			}
		}
		setName(name) {
			this.curPlatForm = name;
		}
		upDataUI() {
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnMengBan(
				true,
				0.8
			);
			this.x = GameConfig.viewWidth / 2;
			this.y = GameConfig.viewHeight / 2;
			this.list_detail.visible = false;
			this.btn_ttVideo.visible = false;
			this.btn_ttClose.visible = false;
			this.btn_getDetail.visible = false;
			this.btn_ttVideo.visible = true;
			this.btn_ttClose.visible = true;
			console.log('====>显示字节按钮');
			let id = Role.ins_.getHandPropId();
			let iconUrl = this.getAdId(id);
			console.log('====>更新UI', iconUrl, id);
			if (iconUrl == null) {
				this.close();
				return;
			}
			if (id) {
				this.config = ItemResource.getItemByKey(id);
				this.prop_Name.text = this.config.Name;
				this.loader_prop.setSize(110, 110);
				this.loader_prop.url = 'ui://UIGamePlayingView/' + iconUrl;
				this.text_propInfo.text = this.config.itemtxt;
				let has = Role.ins_.isHasPropDetail(id);
				console.log('====>更新详情', has);
				if (has) this.showListDetails();
			}
		}
		getAdId(id) {
			let items = I18nResource.items;
			for (let i = 0; i < items.length; i++) {
				if (items[i].itemid == id + '') {
					return items[i].icon;
				}
			}
			return null;
		}
		showListDetails() {
			this.list_detail.visible = true;
			this.btn_getDetail.visible = false;
			this.btn_ttVideo.visible = false;
			this.btn_ttClose.visible = false;
			this.list_detail.numItems = this.config.drawing.length;
		}
		RenderListItem(index, obj) {
			obj.updata(
				this.config.drawing[index],
				this.config.drawingtxt[index]
			);
		}
		close() {
			this.removeFromParent();
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnMengBan(
				false,
				1
			);
		}
	}

	class QQCloseBtnCtr extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'QQCloseBtnCtr');
		}
		addEvent() {
			this.onClick(this, this.updateStatus);
		}
		upDataUI() {
			if (!this.uiData) return;
			this._view.selected = false;
			this.btn_playIcon.removeFromParent();
			this.btn_playIcon.x = 8;
			this.btn_playIcon.y = 0;
			this.updateStatus();
		}
		updateStatus() {
			if (!this._view.selected) {
				this.uiData.btn.offClick(this.uiData.ui, this.uiData.fun);
				this.uiData.btn.onClick(this, this.lookVideo);
				this.uiData.btn.addChild(this.btn_playIcon);
				this.btn_playIcon.visible = true;
			} else {
				this.removeEvent();
			}
		}
		removeEvent() {
			this.uiData.btn.offClick(this, this.lookVideo);
			this.uiData.btn.onClick(this.uiData.ui, this.uiData.fun);
			this.btn_playIcon.removeFromParent();
			this.btn_playIcon.visible = false;
		}
		lookVideo() {
			if (!this.uiData) return;
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: this.uiData.name,
				handler: this.uiData.videoHandler
			});
		}
		close() {
			this.removeFromParent();
			this.btn_playIcon.removeFromParent();
			if (this.uiData && this.uiData.btn)
				this.uiData.btn.onClick(this.uiData.ui, this.uiData.fun);
			this.btn_playIcon.visible = false;
			if (this.uiData && this.uiData.videoHandler)
				this.uiData.videoHandler.recover();
			this.uiData = null;
		}
	}

	class SpineFactory {
		constructor() {
			this.spineFactoryDic = new Dictionary$1();
		}
		static get ins_() {
			if (!this._ins) {
				this._ins = new SpineFactory();
			}
			return this._ins;
		}
		getSkeletonByName(spineName, useHandler) {
			let templete = this.spineFactoryDic.get(spineName);
			if (!templete) {
				templete = new Laya.Templet();
				this.spineFactoryDic.set(spineName, templete);
				templete.loadAni(UrlUtils.GetSpineUrl(spineName));
				templete.once(Laya.Event.COMPLETE, this, this.onComplete, [
					useHandler,
					templete,
					spineName
				]);
			} else {
				this.onComplete(useHandler, templete, spineName);
			}
		}
		onComplete(handler, templete, spineName) {
			let skAniPlayer = this.getAniPlayer(templete.buildArmature(0));
			if (!handler) return;
			if (handler.args) {
				handler.args.push(skAniPlayer);
				handler.args.push(spineName);
			} else handler.args = [skAniPlayer, spineName];
			handler.runWith(handler.args);
		}
		getAniPlayer(sk) {
			let aniPlyer = Laya.Pool.getItem('skAniPlayer');
			if (!aniPlyer) {
				aniPlyer = new skAniPlayer();
			}
			aniPlyer.init(sk);
			return aniPlyer;
		}
	}
	class skAniPlayer {
		constructor() {}
		init(sk) {
			this.sk = sk;
		}
		getSk() {
			return this.sk;
		}
		play(
			aniName,
			isLoop,
			isForce = false,
			isOverReMove = false,
			handlerComplete = null
		) {
			this.sk.play(aniName == null ? 0 : aniName, isLoop, isForce);
			if (!isLoop)
				this.sk.once(Laya.Event.STOPPED, this, this.onPlay, [
					handlerComplete,
					isOverReMove
				]);
		}
		onPlay(handlerComplete, isOverReMove) {
			if (handlerComplete) handlerComplete.runWith(handlerComplete.args);
			if (isOverReMove) {
			}
		}
		playPause(
			aniName,
			isLoop,
			isForce = false,
			stopPercent,
			stopHandler = null
		) {
			this.sk.play(aniName == null ? 0 : aniName, isLoop, isForce);
			if (stopPercent)
				Laya.timer.loop(16, this, this.aniCounter, [
					stopPercent,
					this.sk,
					stopHandler
				]);
		}
		aniCounter(stopPecent, stopHandler) {
			if (
				stopPecent <
				this.sk.player.currentPlayTime / this.sk.player.playDuration
			) {
				this.sk.paused();
				Laya.timer.clear(this, this.aniCounter);
				if (stopHandler) stopHandler.runWith(stopHandler.args);
			}
		}
		playPauseArr(aniName, isLoop, stopPecent, handler) {
			this.sk.play(aniName, isLoop, true);
			if (stopPecent)
				Laya.timer.loop(16, this, this.aniCounterArr, [
					stopPecent,
					handler
				]);
		}
		aniCounterArr(stopPecent, handler) {
			for (let i = 0; i < stopPecent.length; i++) {
				if (!stopPecent[i]) continue;
				if (
					(stopPecent[i] * 1000) / this.sk.player.playDuration <
					this.sk.player.currentPlayTime / this.sk.player.playDuration
				) {
					this.sk.paused();
					stopPecent[i] = undefined;
					handler.runWith([i]);
					if (stopPecent[stopPecent.length - 1] == undefined)
						handler.recover();
				}
			}
		}
		getAniName() {
			for (let i = 0; i < this.sk.getAnimNum(); i++) {
				console.log('sk动画名字', this.sk.getAniNameByIndex(i));
			}
		}
		pause() {
			this.sk.paused();
		}
		resume() {
			this.sk.resume();
		}
		setPlaySpeed(speed) {
			this.sk.playbackRate(speed);
		}
		destory() {
			this.sk.destroy(true);
			this.sk = null;
			Laya.timer.clearAll(this);
			Laya.Pool.recover('skAniPlayer', this);
		}
	}

	class BaoXiang extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'BaoXiang');
		}
		initCom() {}
		initSk() {
			SpineFactory.ins_.getSkeletonByName(
				'mengdiankaixiang',
				Laya.Handler.create(this, this.skOnWake)
			);
			this.img_title.x += 50;
			this.loader.x += 50;
			this.loader_Award.x += 50;
			this.btn_Sure.x += 50;
			this.img_kuang.x += 50;
		}
		skOnWake(skPlayer) {
			this.skPlayer = skPlayer;
			this.btn_baoxiang = new Laya.Sprite();
			this.btn_baoxiang.width = 300;
			this.btn_baoxiang.height = 250;
			this.btn_baoxiang.pivotX = 300 * 0.5;
			this.btn_baoxiang.pivotY = 250 * 0.5;
			this.displayObject.addChild(skPlayer.getSk());
			this.displayObject.addChild(this.btn_baoxiang);
			this.skPlayer.play(0, true);
			this.btn_baoxiang.on(Laya.Event.CLICK, this, this.clickBaoXiang);
			this.skPlayer.getSk().y = 720 / 2 - 80;
			this.skPlayer.getSk().x = 50;
			this.btn_baoxiang.x = 0;
			this.btn_baoxiang.y = 720 / 2 - 80;
		}
		addEvent() {
			this.btn_Sure.onClick(this, this.hide);
		}
		removEvent() {
			this.btn_Sure.offClick(this, this.hide);
			this.btn_baoxiang.off(Laya.Event.CLICK, this, this.clickBaoXiang);
		}
		upDataUI() {
			if (!this.uiData) return;
			this.initSk();
			this.loader_Award.visible = false;
			this.btn_Sure.visible = false;
			this.img_kuang.visible = false;
			this.img_title.visible = true;
			this.loader.visible = true;
			if (this.skPlayer) this.skPlayer.getSk().visible = true;
			this.curTimes = 1;
			this.targetTimes = 24;
			this.bannerTimes = 10 + Math.ceil(10 * Math.random());
			this.scaleX = 0;
			this.scaleY = 0;
			Laya.stage.addChild(this.displayObject);
			this.displayObject.x = GameConfig.viewWidth / 2;
			this.displayObject.y = GameConfig.viewHeight / 2;
			this.displayObject.zOrder = 100;
			Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, 200);
			this.loader.url = 'ui://UIPlatform/xiangzi_1';
		}
		clickBaoXiang() {
			this.curTimes++;
			Laya.timer.loop(500, this, this.reduce);
			if (this.targetTimes == this.curTimes) {
				this.showAward();
			}
			if (this.curTimes == this.bannerTimes) {
				this.bannerTimes = -1;
				this.showAd();
			}
			this.updateBaoXiang();
		}
		showAd() {
			if (this.uiData.isBanner) {
				SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
					name: this.uiData.name,
					forceShow: true,
					isShow: true,
					adPoint: 4,
					handler: Laya.Handler.create(this, this.showBanner)
				});
			} else {
				SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
					name: this.uiData.name,
					handler: Laya.Handler.create(this, this.showBanner)
				});
			}
		}
		updateBaoXiang() {
			this.loader.url = 'ui://UIPlatform/xiangzi_' + this.curTimes;
		}
		showBanner() {
			Laya.timer.once(2000, this, this.hideBanner);
		}
		hideBanner() {
			this.bannerTimes = -2;
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: this.uiData.name,
				isShow: false,
				adPoint: 4
			});
		}
		reduce() {
			this.curTimes--;
			if (this.curTimes <= 1) this.curTimes = 1;
			this.updateBaoXiang();
		}
		bannerClick() {
			if (this.bannerTimes == -1) {
				this.showAward();
				this.hideBanner();
			}
		}
		showAward() {
			Laya.timer.clear(this, this.reduce);
			Laya.timer.clear(this, this.hideBanner);
			this.loader_Award.visible = true;
			this.btn_Sure.visible = true;
			this.img_kuang.visible = true;
			this.img_title.visible = false;
			this.loader.visible = false;
			if (this.skPlayer) this.skPlayer.getSk().visible = false;
			this.loader_Award.url = 'ui://7mmd16qvr4kw5s';
			Role.ins_.changeDataByString('yinShenTimes', 1);
		}
		hide() {
			Laya.timer.clearAll(this);
			this.displayObject.removeSelf();
			if (this.uiData && this.uiData.handler) this.uiData.handler.run();
			this.uiData = null;
		}
	}

	class WXGm {
		constructor() {
			this.arrGetIntroduceText = [
				"Time is running out, check the clues and get out of this ghost place",
				"Can't deal with too many clues? Click to view the clues to help you leave this terrible place",
				"Can't deal with too many clues? Click More to view the clues to help you leave this terrible place",
				"Click to view to get more clues to help you escape"
			];
			this.arrYinShenText = [
				"You were found by granny, quickly get the Invisibility Cloak and hide your tracks",
				"Shh! Don't make a sound, put on the Invisibility Cloak quickly, granny won't notice you",
				"Granny found you, here is an Invisibility Cloak, put it on"
			];
			this.arrAddDaytext = [
				"You were found by granny and knocked unconscious and brought here. Your escape time is reduced by one day. Click below to claim it. Granny will give you an extra day to escape from here.",
				"We got you here before grandma knocked you out, click here and we'll give you an extra day to get out of this terrible place.",
				"After some struggles, you escaped from granny's claws, but because you were discovered by granny, you lost one day to leave. In view of your bravery, we will give you an extra day to help you escape"
			];
		}
		init() {
			this.unlockTimer = 0;
			this.getIntroduceTimes = 0;
			this.yinShenIndex = 0;
			this.foundIndex = 0;
			this.getYinShenLock = false;
			this.addDayIndex = 0;
			this.getIntroduceLock = false;
			this.noSound = new Btn_NoSound();
			this.noSound.setPlatName('wx');
		}
		unlockIntroduce(data) {
			if (data.getIntro) {
				if (this.getIntroduceLock) return;
				this.getIntroduceLock = true;
				Laya.timer.once(60000, this, this.unlockTimeOver);
			} else {
				this.getIntroduceLock = false;
				Laya.timer.clear(this, this.unlockTimeOver);
			}
			if (data.isShow == false) {
				if (this.getIntroduceBox) {
					this.getIntroduceBox.removeFromParent();
					let uiPlaying = UISystem.Inst.GetWindowView(UIGamePlayView);
					uiPlaying.ChangeImgBlack(false, 200, null);
				}
			}
		}
		unlockTimeOver() {
			this.getIntroduceLock = false;
			if (!this.getIntroduceBox) {
				this.getIntroduceBox = new GetIntroduceBox();
			}
			if (MainRoleMgr.Inst.isRoleDie()) return;
			this.getIntroduceBox.setStyle({
				parent: GameLayer.windowLayer,
				x: GameConfig.viewWidth / 2,
				y: GameConfig.viewHeight / 2
			});
			this.getIntroduceBox.setData({
				name: 'wx',
				text: this.arrGetIntroduceText[this.getIntroduceTimes],
				isfree: GameData.ins_.isFirstIntroduce()
			});
			this.getIntroduceTimes++;
			if (this.getIntroduceTimes >= this.arrGetIntroduceText.length)
				this.getIntroduceTimes = 0;
		}
		getYinShen(data) {
			if (!this.getYinshenBox) {
				this.getYinshenBox = new GetYinShenBox();
			}
			if (data.isShow != false) {
				if (this.getYinShenLock) return;
				if (MainRoleMgr.Inst.isRoleDie()) return;
				this.getYinShenLock = true;
				Laya.timer.once(60000, this, function () {
					this.getYinShenLock = false;
				});
				this.getYinshenBox.setStyle({
					parent: GameLayer.windowLayer,
					x: GameConfig.viewWidth / 2,
					y: GameConfig.viewHeight / 2
				});
				this.getYinshenBox.setData({
					name: 'wx',
					text: this.arrYinShenText[this.yinShenIndex]
				});
				this.yinShenIndex++;
				if (this.yinShenIndex >= this.arrYinShenText.length)
					this.yinShenIndex = 0;
			} else {
				this.getYinshenBox.removeFromParent();
				let uiPlaying = UISystem.Inst.GetWindowView(UIGamePlayView);
				uiPlaying.ChangeImgBlack(false, 200, null);
			}
		}
		changeAddDayBox(data) {
			if (!this.addDayBox) {
				this.addDayBox = new AddDataBox();
			}
			if (data.isShow != false) {
				if (Role.ins_.getDataByString('dayNum') == 1) return;
				if (MainRoleMgr.Inst.isRoleDie()) return;
				this.addDayBox.setStyle({
					parent: GameLayer.windowLayer,
					x: GameConfig.viewWidth / 2,
					y: GameConfig.viewHeight / 2
				});
				this.addDayBox.setData({
					name: 'wx',
					text: this.arrAddDaytext[this.addDayIndex]
				});
				this.addDayIndex++;
				if (this.addDayIndex >= this.arrAddDaytext.length)
					this.addDayIndex = 0;
			} else {
				this.addDayBox.removeFromParent();
				let uiPlaying = UISystem.Inst.GetWindowView(UIGamePlayView);
				uiPlaying.ChangeImgBlack(false, 200, null);
			}
		}
		changeNoSound(data) {
			if (MainRoleMgr.Inst.isRoleDie()) return;
			if (data.syms == 'updata') {
				this.noSound.setData({});
				return;
			}
			if (data.isShow) {
				this.noSound.setStyle(data);
				this.noSound.setData({});
			} else {
				this.noSound.closeThis();
			}
		}
		loginAward(data) {
			if (!this.loginAwardUI) return;
			let index = Role.ins_.getLoginIndex();
			if (index == 0) return;
			if (Role.ins_.getDataByString('isGetLoginAwrad') == 1) return;
			this.loginAwardUI.setStyle(data);
			this.loginAwardUI.setData({ index: index, name: 'wx' });
		}
		showFoundAward(data) {
			if (!this.foundeAward) {
				this.foundeAward = new FoundAward();
			}
			if (!this.foundGun) {
				this.foundGun = new FoundGun();
			}
			if (this.foundIndex == 3) {
				this.foundIndex = 2;
				this.foundGun.setStyle(data);
				this.foundGun.setData({ name: 'wx' });
			} else {
				this.foundeAward.setStyle(data);
				this.foundeAward.setData({
					name: 'wx',
					index: this.foundIndex
				});
				this.foundIndex++;
			}
		}
		showPropDetail(data) {
			if (!this.propDetail) this.propDetail = new UIPropInfoDetail();
			this.propDetail.setName('wx');
			this.propDetail.setStyle(data);
			this.propDetail.upDataUI();
		}
		QQCloseBtnCtr(data) {
			if (!this.qqEnIntroduceBtn) {
				this.qqEnIntroduceBtn = new QQCloseBtnCtr();
			}
			if (data.isShow) {
				this.qqEnIntroduceBtn.setStyle(data);
				this.qqEnIntroduceBtn.setData(data);
			} else {
				this.qqEnIntroduceBtn.close();
			}
		}
		changeGame(data) {
			this[data.function](data);
		}
		clickBaoXiang(data, adPoint, isBanner) {
			if (!this.baoxiangUI) {
				this.baoxiangUI = new BaoXiang();
			}
			this.baoxiangUI.setStyle(data);
			this.baoxiangUI.setData({
				name: 'wx',
				handler: data.handler,
				isBanner: isBanner
			});
		}
		showQQMainBox(data, adType, needClose) {}
	}

	class AD_NativeBanner extends BaseSdkComp {
		constructor(name) {
			super();
			this.beCtrTime = 0;
		}
		setName(name) {
			this.platFormName = name;
		}
		addEvents() {
			if (this.platFormName == 'vivo') {
				this.loder_adUrl.onClick(this, this.clickBanner);
				this.btn_look.onClick(this, this.clickBanner);
			} else {
				this.onClick(this, this.clickBanner);
			}
			this.btn_close.onClick(this, this.onClickClose);
		}
		removeEvents() {
			if (this.platFormName == 'vivo') {
				this.loder_adUrl.offClick(this, this.clickBanner);
				this.btn_look.offClick(this, this.clickBanner);
			} else {
				this.onClick(this, this.clickBanner);
			}
			this.btn_close.offClick(this, this.onClickClose);
		}
		onClickClose() {
			this.beCtrTime++;
			this.closeThis_();
			this.clickClose();
		}
		clickBanner() {
			SDK.ins_.send(SDK_ORDER.AD_CLICK_NATIVE_BANNER, {
				name: this.platFormName,
				id: this.natvieData.adId,
				adPoint: 4
			});
		}
		setData(data) {
			this.removeEvents();
			this.visible = true;
			this.natvieData = data.adList[0];
			let ad = data.adList[0];
			this.text_name.text = ad.title;
			this.text_adWords.text = ad.desc;
			this.loder_adUrl.url =
				ad.icon != '' && ad.icon ? ad.icon : ad.imgUrlList[0];
			this.loder_adUrl.setSize(100, 100);
			this.addEvents();
		}
		clearTimer_() {
			Laya.timer.clearAll(this);
			this.visible = false;
			this.removeFromParent();
			this.removeEvents();
		}
		clickClose() {
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: this.platFormName,
				isShow: false,
				adPoint: 4,
				isUserCtr: true
			});
		}
		closeThis_() {
			this.clearTimer_();
		}
	}

	class AD_NativeInsert extends BaseSdkComp {
		constructor(name) {
			super();
		}
		setName(name) {
			this.platFormName = name;
		}
		addEvents() {
			this.btn_NativeInsert.onClick(this, this.clickBanner);
			this.btn_close.onClick(this, this.closeThis_);
		}
		removeEvents() {
			this.btn_NativeInsert.offClick(this, this.clickBanner);
			this.btn_close.offClick(this, this.closeThis_);
		}
		clickBanner() {
			SDK.ins_.send(SDK_ORDER.AD_CLICK_NATIVE_INSERT, {
				name: this.platFormName,
				id: this.natvieData.adId
			});
		}
		setData(data) {
			this.visible = true;
			this.natvieData = data.adList[0];
			let ad = data.adList[0];
			this.text_title.text = ad.title;
			this.text_adWords.text = ad.desc;
			this.loader_img.setSize(720, 321);
			this.loader_icon.setSize(49, 32);
			Laya.loader.load(
				ad.imgUrlList[0],
				Laya.Handler.create(this, this.imgShow, [ad])
			);
			this.addEvents();
		}
		imgShow(ad) {
			if (!ad.imgUrlList[0]) {
				this.closeThis_();
				return;
			}
			this.loader_img.url = ad.imgUrlList[0];
			if (ad.icon) this.loader_icon.url = ad.icon;
			else this.loader_icon.url = ad.imgUrlList[0];
		}
		clearTimer_() {
			Laya.timer.clearAll(this);
			this.visible = false;
			this.removeFromParent();
			this.removeEvents();
		}
		closeThis_() {
			this.clearTimer_();
		}
	}

	class AD_NativeImpaction extends BaseSdkComp {
		constructor(name) {
			super();
		}
		setName(name) {
			this.platformName = name;
			this.scaleX = 0.8;
			this.scaleY = 0.8;
		}
		addEvents() {
			this.btn_NativeInsert.onClick(this, this.clickBanner);
			this.btn_close.onClick(this, this.closeThis_);
		}
		removeEvents() {
			this.btn_NativeInsert.offClick(this, this.clickBanner);
			this.btn_close.offClick(this, this.closeThis_);
		}
		clickBanner() {
			SDK.ins_.send(SDK_ORDER.AD_CLICK_NATIVE_IMPACTION, {
				name: this.platformName,
				id: this.natvieData.adId
			});
		}
		setData(data) {
			this.visible = true;
			this.natvieData = data.adList[0];
			let ad = data.adList[0];
			this.loader_img.url = ad.imgUrlList[0];
			if (ad.icon) this.loader_icon.url = ad.icon;
			else this.loader_icon.url = ad.imgUrlList[0];
			this.text_title.text = ad.title;
			this.text_adWords.text = ad.desc;
			this.loader_img.setSize(720, 321);
			this.loader_icon.setSize(49, 32);
			this.addEvents();
			this.btn_close.visible = false;
		}
		clearTimer_() {
			Laya.timer.clearAll(this);
			this.visible = false;
			this.removeFromParent();
			this.removeEvents();
		}
		closeThis_() {
			this.clearTimer_();
		}
	}

	class AD_SmallNative extends BaseSdkComp {
		constructor(name) {
			super();
		}
		setName(name) {
			this.platformName = name;
		}
		addEvents() {
			this.AD_img.onClick(this, this.clickBanner);
			this.btn_close.onClick(this, this.closeThis_);
		}
		removeEvents() {
			this.AD_img.offClick(this, this.clickBanner);
			this.btn_close.offClick(this, this.closeThis_);
		}
		clickBanner() {
			SDK.ins_.send(SDK_ORDER.AD_CLICK_NATIVE_INSERT, {
				name: this.platformName,
				id: this.natvieData.adId
			});
		}
		setData(data) {
			let ad = data.adList[0];
			this.visible = true;
			this.natvieData = data.adList[0];
			this.AD_img.url = ad.imgUrlList[0];
			this.text_name.text = ad.title;
			this.AD_img.setSize(122, 63);
			this.addEvents();
		}
		clearTimer_() {
			Laya.timer.clearAll(this);
			this.visible = false;
			this.removeFromParent();
			this.removeEvents();
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_INSERT_CLOSE, {
				name: this.platformName
			});
		}
		closeThis_() {
			this.clearTimer_();
		}
	}

	class WxDeal extends BaseDeal {
		constructor() {
			super();
			this.isFirstBeAttack = true;
			this.beAttactCount = 0;
			this.WxAd = new WXAd(this);
			this.WxAld = new WxAld(this);
			this.WxHt = new WxHt(this);
			this.WXGm = new WXGm();
			this.arrUI = [
				{
					url: 'ui://UIPlatform/AD_NativeBanner',
					cls: AD_NativeBanner
				},
				{
					url: 'ui://UIPlatform/AD_NativeInsert',
					cls: AD_NativeInsert
				},
				{
					url: 'ui://UIPlatform/AD_NativeImpaction',
					cls: AD_NativeImpaction
				},
				{ url: 'ui://UIPlatform/Ht_HorizBox', cls: HT_HorizBox },
				{ url: 'ui://UIPlatform/Ht_Icon', cls: HT_GameIcon },
				{ url: 'ui://UIPlatform/Ht_maybeLike', cls: HT_MoreGame },
				{ url: 'ui://UIPlatform/AD_SmallNative', cls: AD_SmallNative }
			];
			this.lockTimerInsert = false;
		}
		initPlatform(dealObj, userData) {
			super.initPlatform(dealObj, this.arrUI);
			this.WxAd.init(dealObj.adData);
			this.WxHt.init();
			this.WxAld.init();
			this.WXGm.init();
			let adPoint = this.getAdPoint(10);
		}
		onOffOnEable() {
			this.getLocation2();
			this.ctrInserTimer(true);
			let adPoint = this.getAdPoint(4);
			this.WxAd.onOffOnEable({ bannerInterval: adPoint.value });
		}
		boxAdShow(data) {}
		videoChange(data) {
			this.WxAd.showRewardVideo(data);
		}
		insertChange(data) {
			console.log('insertChange : ', data);
			let canShow;
			let adPoint = this.getAdPoint(data.adPoint);
			switch (data.adPoint) {
				case 8:
					if (this.isInAarea(data.adPoint) || !adPoint.isOn) return;
					let time = adPoint.value * 1000;
					console.error('延迟', time);
					Laya.timer.once(
						time,
						this,
						function (data) {
							this.WxAd.showInsetAd(data);
						},
						[data]
					);
					break;
				default:
					console.log('adPoint.isOn : ' + adPoint.isOn);
					if (data.adPoint == 3 || true) {
						adPoint.isOn = true;
					}
					if (!adPoint.isOn) {
						return;
					}
					console.log(
						'this.isInAarea(data.adPoint) : ' +
							this.isInAarea(data.adPoint)
					);
					if (this.isInAarea(data.adPoint)) {
						return;
					}
					if (this.isFirstBeAttack && data.adPoint == 3) {
						this.isFirstBeAttack = false;
						return;
					}
					if (data.adPoint == 3) {
						this.beAttactCount++;
						canShow =
							(this.beAttactCount / 2) % 1 == 0 ? true : false;
						this.WxAd.showInsetAd();
						return;
					} else {
						let random = adPoint.value;
						canShow = Math.random() <= random;
					}
					canShow = false;
					console.log('insertChange -> canShow : ' + canShow);
					if (canShow) {
						this.WxAd.showInsetAd();
					}
					break;
			}
		}
		bannerChange(data) {
			if (data == null) {
				data = { name: 'wx', isShow: true, adPoint: 4 };
			}
			console.log('bannerChange : ', data);
			Laya.timer.clear(this, this.bannerChange);
			let adPoint = this.getAdPoint(data.adPoint);
			if (data.isShow) {
				this.WxAd.showBanner(data);
				let delay = adPoint.value;
				console.error('banner延迟', delay * 1000);
				if (delay != 0)
					Laya.timer.once(delay * 1000, this, this.bannerChange, [
						this.curBannerData
					]);
				return;
			} else {
				this.WxAd.hideBanner();
			}
			return;
			Laya.timer.clear(this, this.bannerChange);
			if (!this.isInAarea(data.adPoint) && adPoint.isOn) {
				if (data.isDialog) return;
				if (data.isShow) {
					this.curBannerData = data;
					this.WxAd.showBanner(data);
					let delay = adPoint.value;
					console.error('banner延迟', delay * 1000);
					if (delay != 0)
						Laya.timer.once(delay * 1000, this, this.bannerChange, [
							this.curBannerData
						]);
				} else {
					this.WxAd.hideBanner();
				}
			} else {
				if (data.isShow) {
					if (!data.isDialog) return;
					this.WxAd.showBanner(data);
				} else {
					this.WxAd.hideBanner();
				}
			}
		}
		HorizBoxChange(data) {
			this.WxHt.changeHorziBox(data);
		}
		moreGameChange(data) {
			this.WxHt.changeMoreGame(data);
		}
		gameIconChange(data) {
			this.WxHt.changeGameIcon(data);
		}
		gameListBoxChange(data) {
			this.WxHt.changeGameListBox(data);
		}
		changeBigBoxList(data) {
			this.WxHt.changeBigBoxList(data);
		}
		changeIconSetting(data) {
			this.WxHt.changeIcon_2(data);
		}
		changeLeftVerBox(data) {
			this.WxHt.changeLeftVerBox(data);
		}
		changeRightVerBox(data) {
			this.WxHt.changeRightVerBox(data);
		}
		changeHorizoBox(data) {
			this.WxHt.changeHorizoBox(data);
		}
		changeVerChouTiBox(data) {
			this.WxHt.changeVerChouTiBox(data);
		}
		changeNoSound(data) {
			if (!this.canOpenWindow()) return;
			this.WXGm.changeNoSound(data);
		}
		changeGetEndIntroduce(data) {
			if (!this.canOpenWindow()) return;
			this.WXGm.unlockIntroduce(data);
		}
		changeGetAddDay(data) {
			if (!this.canOpenWindow()) return;
			this.WXGm.changeAddDayBox(data);
		}
		changeGetYinshen(data) {
			if (!this.canOpenWindow()) return;
			this.WXGm.getYinShen(data);
		}
		changeLoginAward(data) {
			this.WXGm.loginAward(data);
		}
		changeHtWxIcon(data) {
			this.WxHt.showIcon(data);
		}
		showPropDetail(data) {
			if (!this.canOpenWindow()) return;
			this.WXGm.showPropDetail(data);
		}
		changeBtnEndIntroduce(data) {
			let adPoint = this.getAdPoint(15);
			if (this.isInAarea(15) || !adPoint.isOn) return;
			this.WXGm.QQCloseBtnCtr(data);
		}
		canOpenWindow() {
			return true;
		}
		insertTimer(value) {
			console.log('insertTimer====>isLock', this.lockTimerInsert);
			if (!this.lockTimerInsert) {
				let adPoint16 = this.getAdPoint(16);
				if (adPoint16.isOn && !this.isInAarea(16))
					this.WxAd.showInsetAd();
				console.error('延迟[' + value * 1000 + ']秒  出插屏');
				Laya.timer.once(value * 1000, this, this.insertTimer, [value]);
			} else
				Laya.timer.once(value * 1000, this, this.insertTimer, [value]);
		}
		ctrInserTimer(isOpen) {
			let adPointInsert = this.getAdPoint(16);
			console.log('【timer插屏】=====》', isOpen, adPointInsert);
			if (isOpen) {
				if (adPointInsert.isOn && !this.isInAarea(16)) {
					console.log('开始insertTimer');
					Laya.timer.once(
						adPointInsert.value * 1000,
						this,
						this.insertTimer,
						[adPointInsert.value]
					);
				}
			} else {
				Laya.timer.clear(this, this.insertTimer);
			}
		}
		clickBaoXiang(data) {
			let bannerShow = this.boxCanShowByTime();
			let adPoint = this.getAdPoint(data.adPoint);
			let isInBanCity = this.isInAarea(data.adPoint);
			let arrString = adPoint.value.split(',');
			let can = parseInt(
				arrString[Role.ins_.getDataByString('dayNum') - 1]
			);
			if (adPoint.isOn && !isInBanCity && can) {
				let adPointType = this.getAdPoint(13);
				this.WXGm.clickBaoXiang(data, adPoint, bannerShow);
			} else {
				if (data.handler) data.handler.run();
			}
		}
		showQQMainBox(data) {
			let bannerShow = this.boxCanShowByTime();
			let adPoint = this.getAdPoint(11);
			if (!this.isInAarea(11) && adPoint.isOn) {
				let adPointType = this.getAdPoint(13);
				let isIn = this.isInAarea(13);
				if (isIn) adPointType.value = false;
				this.WXGm.showQQMainBox(data, bannerShow, adPointType.value);
			}
		}
		boxCanShowByTime() {
			let point = this.getAdPoint(11);
			if (point.value.work.length <= point.value.noWork.length)
				return true;
			else false;
		}
		btnUpTween(data) {
			let adPoint = this.getAdPoint(12);
			if (!this.isInAarea(12) && adPoint.isOn) {
				let bannerPoint4 = this.getAdPoint(4);
				this.WxAd.btnUpTween(data, adPoint.value);
			}
		}
		aldEventSend(data) {
			this.WxAld.aldEventSend(data);
		}
		jumpToGame(data) {
			this.WxHt.jumpToGame(data);
		}
	}

	class SuprisedBox2 extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'SurprisedBox2');
		}
		addEvent() {
			this.btn_ad.onClick(this, this.clickNative);
			this.btn_close.onClick(this, this.hide);
			this.btn_get.onClick(this, this.clickGet);
			this.btn_closeAd.onClick(this, this.onBtnCloseAd);
		}
		onBtnCloseAd() {
			this.SetShowOOrHied(false);
		}
		SetShowOOrHied(isShow) {
			this.loader_main.visible = isShow;
			this.btn_ad.visible = isShow;
			this.btn_closeAd.visible = isShow;
			this._view.getChild('n2').visible = isShow;
			this._view.getChild('n3').visible = isShow;
			this._view.getChild('text_des').visible = isShow;
			this._view.getChild('loader_Icon').visible = isShow;
			this._view.getChild('text_name').visible = isShow;
		}
		clickNative() {
			if (!this.loader_main.visible) return;
			let id = this.uiData.res.adId;
			if (this.uiData.res.adList) id = this.uiData.res.adList[0].adId;
			SDK.ins_.send(SDK_ORDER.AD_CLICK_SUPRISED_BOX, {
				name: this.uiData.name,
				id: id
			});
		}
		clickGet() {
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: this.uiData.name,
				handler: Laya.Handler.create(this, this.onVideo)
			});
		}
		onVideo(isOver) {
			if (isOver) {
				SDK.ins_.send(SDK_ORDER.TIPS_GAME, {
					text: 'Claim Invisibility Cloak*1'
				});
				Role.ins_.changeDataByString('yinShenTimes', 1);
				let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
				if (ui) ui.updataYinShenTimesUI();
				this.hide();
			}
		}
		upDataUI() {
			if (!this.uiData) return;
			GameMgr.Inst.pauseGame();
			this.SetShowOOrHied(true);
			if (this.uiData.close) {
				this.hide();
				return;
			}
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: this.uiData.name,
				isShow: false,
				adPoint: 4
			});
			this.visible = true;
			let ad = this.uiData.res;
			if (this.uiData.res.adList) {
				ad = this.uiData.res.adList[0];
			}
			this.x = GameConfig.viewWidth - this._view.width;
			this.text_name.text = ad.title;
			this.text_des.text = ad.desc;
			this.loader_main.url = ad.icon;
			if (!this.loader_main.url || this.loader_main.url == '')
				this.loader_main.url = ad.imgUrlList[0];
			this.play_sanJiao.visible = false;
			this.play_video.visible = false;
			this.img_balckBg.visible = true;
			if (this.uiData.name == 'vivo' || this.uiData.name == 'oppo') {
				this.play_sanJiao.visible = true;
			}
			if (this.uiData.name == 'vivo') {
				SDK.ins_.send(SDK_ORDER.CHANGE_FOUND_AWARD, {
					isShow: false,
					name: this.uiData.name
				});
			}
		}
		setStyle(data) {
			this.displayObject.removeSelf();
			this.displayObject.zOrder = 100000;
			Laya.stage.addChild(this.displayObject);
			if (data.x != null) this.x = data.x;
			if (data.y != null) this.y = data.y;
			this.x = GameConfig.viewWidth - 1164 / 2;
			this.y = GameConfig.viewHeight / 2;
			this.visible = true;
			this.initUI();
		}
		hide() {
			this.displayObject.removeSelf();
			this.visible = false;
			GameMgr.Inst.contiueGame();
			let uiplayingView = UISystem.Inst.GetWindowView(UIGamePlayView);
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: this.uiData.name,
				isShow: true,
				parent: uiplayingView,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
			if (this.uiData.name == 'vivo')
				SDK.ins_.send(SDK_ORDER.CHANGE_FOUND_AWARD, {
					isShow: true,
					name: this.uiData.name
				});
		}
	}

	class OppoAd {
		constructor(deal) {
			this.oppo_ = Laya.Browser.window.qg;
			this.videoAd = null;
			this.nativeBanner = null;
			this.bannerAd = null;
			this.insertAd = null;
			this.nativeInsertAd = null;
			this.nativeImpactionAd = null;
			this.nativeSmallAd = null;
			this.nativeSupriseAd = null;
			this.nativeIconAd = null;
			this.insertIsShow = false;
			this.isLoadInsert = false;
			this.listIndex = 0;
			this.smallNativeNum = 0;
			this.isUserCtr = true;
			this.deal = deal;
		}
		init(config) {
			this.adConfig = config;
			if (!this.oppo_) return;
			this.initRewardAd();
			this.LoadNativeInsert();
			this.initAddShortcut();
		}
		initAddShortcut() {}
		initUICom() {}
		initRewardAd() {
			let lf = this;
			this.videoAd = this.oppo_.createRewardedVideoAd({
				adUnitId: this.adConfig.videoId
			});
			this.videoAd.onLoad(function () {
				lf.videoAd.show();
			});
			this.videoAd.onClose(res => {
				if ((res && res.isEnded) || res === undefined) {
					SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
						name: 'oppo',
						info: 'ok'
					});
				} else {
					SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
						name: 'oppo',
						info: 'notEnd'
					});
				}
			});
			this.videoAd.onError(function (err) {
				SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
					name: 'oppo',
					info: 'noAd'
				});
			});
		}
		showRewardVideo() {
			this.videoAd.load();
		}
		createBanner() {
			let lf = this;
			this.bannerAd = this.oppo_.createBannerAd({
				adUnitId: lf.adConfig.bannerId
			});
			this.bannerAd.onLoad(function () {
				lf.showNativeBanner({ isShow: false });
				console.error('官方banner显示======>');
				lf.deal.isShowNativeBanner = true;
			});
			this.bannerAd.onHide(function (res) {
				console.error('=====》关闭', res);
			});
			this.bannerAd.onError(function (err) {
				console.error('=====》官方banner', err);
				lf.deal.isShowNativeBanner = !lf.deal.isShowNativeBanner;
			});
			this.bannerAd.onResize(res => {
				let info = lf.oppo_.getSystemInfoSync();
				this.bannerAd.style.top = info.screenHeight - res.height;
				this.bannerAd.style.left = (info.screenWidth - res.width) / 2;
			});
		}
		showBanner(data) {
			console.error('触发官方banner', data);
			if (!this.bannerAd) {
				this.createBanner();
			}
			if (data.isShow) {
				if (this.bannerCanShow()) this.bannerAd.show();
			} else {
				this.isUserCtr = false;
				this.bannerAd.hide();
			}
		}
		createNativeBanner() {
			let lf = this;
			this.nativeBanner = undefined;
			this.nativeBanner = this.oppo_.createNativeAd({
				adUnitId: lf.adConfig.nativeIconId
			});
			this.nativeBanner.onLoad(function (res) {
				if (!lf.bannerCanShow()) {
					lf.nativeBannerUI.visible = false;
					return;
				}
				console.log('原生banner显示==============>', res.adList);
				lf.nativeBannerUI.setData(res);
				lf.isUserCtr = false;
				if (lf.bannerAd) lf.bannerAd.hide();
				lf.nativeBanner.reportAdShow({ adId: res.adList[0].adId });
				lf.deal.bannerTimes++;
				lf.deal.isShowNativeBanner = false;
				console.error('banner上报[展示]');
			});
			this.nativeBanner.onError(function (err) {
				console.error('原生banner加载失败  官方banner======>');
				lf.showBanner(lf.bannerData);
				lf.deal.isShowNativeBanner = !lf.deal.isShowNativeBanner;
			});
		}
		showNativeBanner(data) {
			console.error('触发原生banner', data);
			this.bannerData = data;
			if (!this.nativeBannerUI) {
				this.nativeBannerUI = fgui.UIPackage.createObject(
					'UIPlatform',
					'AD_NativeBanner'
				);
				this.nativeBannerUI.setName('oppo');
			}
			if (data.isShow) {
				if (!this.timesCtr()) {
					console.error('banner次数已达上限');
					return;
				}
				if (!this.bannerCanShow()) {
					return;
				}
				if (this.nativeBanner) this.nativeBanner.destroy();
				this.createNativeBanner();
				this.nativeBannerUI.setStyle(data);
				this.nativeBannerUI.visible = false;
				console.error('原生banner加载======>');
				this.nativeBanner.load();
			} else {
				if (this.nativeBannerUI) this.nativeBannerUI.closeThis_();
				this.isUserCtr = false;
			}
		}
		timesCtr() {
			let adPoint = this.deal.getAdPoint(12);
			if (adPoint.isOn) {
				if (this.nativeBannerUI.beCtrTime >= adPoint.value)
					return false;
				else return true;
			}
			if (this.deal.isInAarea(12)) {
				if (this.nativeBannerUI.beCtrTime >= adPoint.value)
					return false;
				else return true;
			} else {
				return true;
			}
		}
		reportClickBanner(adId) {
			console.error('banner上报[点击]');
			this.nativeBanner.reportAdClick({ adId: adId });
			if (this.nativeBannerUI) this.nativeBannerUI.closeThis_();
		}
		initInsert() {
			let lf = this;
			this.insertAd = this.oppo_.createInsertAd({
				adUnitId: this.adConfig.interId
			});
			this.insertAd.onLoad(function () {
				lf.insertIsShow = true;
				lf.insertAd.show();
				lf.isLoadInsert = false;
				if (lf.nativeBannerUI) lf.nativeBannerUI.visible = false;
			});
			this.insertAd.onClose(function () {
				lf.insertIsShow = false;
				lf.isLoadInsert = false;
				if (lf.nativeBannerUI) {
					if (lf.nativeBannerUI.natvieData && lf.bannerCanShow())
						lf.nativeBannerUI.visible = true;
				}
			});
			this.insertAd.onError(function (err) {
				lf.isLoadInsert = false;
			});
		}
		showInsertAd(data) {
			if (this.insertAd) {
				if (this.nativeInsertUI) {
					if (this.nativeInsertUI.visible || this.insertIsShow)
						return;
				}
			}
			if (!this.insertAd) {
				this.initInsert();
				return;
			}
			this.insertData = data;
			this.isLoadInsert = true;
			this.insertAd.load();
		}
		showInsertAd_Native(data) {
			this.insertData = data;
			this.showNativeInsert(this.insertData);
		}
		createNativeInsert() {
			let lf = this;
			this.nativeInsertAd = undefined;
			this.nativeInsertAd = this.oppo_.createNativeAd({
				adUnitId: lf.adConfig.nativeInsertId
			});
			this.nativeInsertAd.onLoad(function (res) {
				console.error('[insertNative]插屏广告加载', res.adList);
				lf.nativeInsertAdData = res;
			});
			this.nativeInsertAd.onError(function (err) {
				lf.LoadNativeInsert();
			});
		}
		LoadNativeInsert(isDestory = false) {
			if (this.nativeInsertAdData) return;
			if (isDestory) {
				this.nativeInsertAd.destroy();
				this.nativeInsertAd = null;
			}
			if (!this.nativeInsertAd) this.createNativeInsert();
			this.nativeInsertAd.load();
			console.error('[insertNative]原生加载--------------》');
		}
		showNativeInsert(data) {
			if (!this.nativeInsertUI) {
				this.nativeInsertUI = fgui.UIPackage.createObject(
					'UIPlatform',
					'AD_NativeInsert'
				);
				this.nativeInsertUI.setName('oppo');
			}
			if (data.isShow) {
				if (this.nativeInsertAdData) {
					this.nativeInsertStyle(data);
					this.nativeInsertUI.setData(this.nativeInsertAdData);
					if (this.nativeBannerUI)
						this.nativeBannerUI.visible = false;
					console.error('插屏上报[展示]');
					this.nativeInsertAd.reportAdShow({
						adId: this.nativeInsertAdData.adList[0].adId
					});
					this.nativeInsertAdData = null;
				} else {
					console.error(
						'[insertNative]原生无法启动--------------》插屏启动'
					);
					this.nativeInsertAdData = null;
					this.LoadNativeInsert(true);
					this.showInsertAd(this.insertData);
				}
			} else {
				if (this.nativeInsertUI) this.nativeInsertUI.closeThis_();
			}
		}
		nativeInsertStyle(data) {
			if (data.inStage) {
				Laya.stage.addChild(this.nativeInsertUI.displayObject);
				this.nativeInsertUI.displayObject.zOrder = 10;
				this.nativeInsertUI.x = GameConfig.viewWidth / 2;
				this.nativeInsertUI.y = GameConfig.viewHeight / 2;
				this.nativeInsertUI.displayObject.visible = true;
			} else {
				data['parent'] = UISystem.Inst.GetWindowView(UIGamePlayView);
				data['x'] = GameConfig.viewWidth / 2;
				data['y'] = GameConfig.viewHeight / 2;
				this.nativeInsertUI.setStyle(data);
				this.nativeInsertUI.visible = false;
			}
		}
		reportClickInsert(adId) {
			if (this.nativeInsertUI) this.nativeInsertUI.closeThis_();
			console.error('插屏上报[点击]');
			this.nativeInsertAd.reportAdClick({ adId: adId });
		}
		onNativeInsertClose(data) {
			if (this.nativeBannerUI) {
				if (this.nativeBannerUI.natvieData && this.bannerCanShow())
					this.nativeBannerUI.visible = true;
			}
			this.LoadNativeInsert(true);
		}
		createNativeImpaction() {
			let lf = this;
			if (this.nativeImpactionAd) this.nativeImpactionAd.destroy();
			this.nativeImpactionAd = undefined;
			this.nativeImpactionAd = this.oppo_.createNativeAd({
				adUnitId: lf.adConfig.nativeInsertId
			});
			this.nativeImpactionAd.onLoad(function (res) {
				console.log('插屏广告加载', res.adList);
				lf.nativeImpactionUI.setData(res);
				console.error(' 天数插屏上报[展示]');
				lf.nativeImpactionAd.reportAdShow({ adId: res.adList[0].adId });
			});
			this.nativeImpactionAd.onError(function (err) {});
		}
		showNativeImpaction(data) {
			if (!this.nativeImpactionUI) {
				this.nativeImpactionUI = fgui.UIPackage.createObject(
					'UIPlatform',
					'AD_NativeImpaction'
				);
				this.nativeImpactionUI.setName('oppo');
			}
			if (data.isShow) {
				if (this.nativeImpactionAd) this.nativeImpactionAd.destroy();
				this.createNativeImpaction();
				data['parent'] = UISystem.Inst.GetWindowView(UIDayView);
				data['x'] = GameConfig.viewWidth / 2;
				data['y'] = 440 / 2;
				this.nativeImpactionUI.setStyle(data);
				this.nativeImpactionUI.visible = false;
				this.nativeImpactionAd.load();
				console.error('原生加载--------------》');
			} else {
				if (this.nativeImpactionUI) this.nativeImpactionUI.closeThis_();
			}
		}
		reportClickImpaction(adId) {
			if (this.nativeImpactionUI) this.nativeImpactionUI.closeThis_();
			console.error('天数上报[点击]');
			this.nativeImpactionAd.reportAdClick({ adId: adId });
		}
		createNativeSmall() {
			let lf = this;
			if (this.nativeSmallAd) this.nativeSmallAd.destroy();
			this.nativeSmallAd = undefined;
			this.nativeSmallAd = this.oppo_.createNativeAd({
				adUnitId: lf.adConfig.nativeInsertId
			});
			this.nativeSmallAd.onLoad(function (res) {
				console.log('小原生广告加载成功===》', res.adList);
				lf.nativeSmallUI.setData(res);
				console.error('小原生上报[展示]');
				lf.nativeSmallAd.reportAdShow({ adId: res.adList.pop().adId });
			});
			this.nativeSmallAd.onError(function (err) {
				console.error('小原生加载失败');
				lf.nativeSmallUI.visible = false;
			});
			this.nativeSmallAd.load();
		}
		showNativeSmall(data) {}
		reportClickSmall(adId) {
			if (this.nativeSmallUI) this.nativeSmallUI.closeThis_();
			console.error('小原生上报[点击]');
			this.nativeSmallAd.reportAdClick({ adId: adId });
		}
		createNativeSuprisedBox() {
			let lf = this;
			this.nativeSupriseAd = undefined;
			this.nativeSupriseAd = this.oppo_.createNativeAd({
				adUnitId: lf.adConfig.nativeIconId
			});
			this.nativeSupriseAd.onLoad(function (res) {
				console.error('惊喜盒子加载成功======>', res);
				lf.nativeSuprisedBoxUI.setData({ name: 'oppo', res: res });
				lf.nativeSuprisedBoxUI.setStyle(lf.superBoxData);
				lf.nativeSupriseAd.reportAdShow({ adId: res.adList[0].adId });
			});
			this.nativeSupriseAd.onError(function (err) {
				lf.nativeSuprisedBoxUI.setData({ name: 'oppo', close: true });
				console.error('惊喜盒子加载失败======>', err);
				lf.deal.canAwradShow = true;
			});
		}
		nativeSuprisedBox(data) {
			if (!this.nativeSuprisedBoxUI) {
				this.nativeSuprisedBoxUI = new SuprisedBox2();
				this.nativeSuprisedBoxUI.visible = false;
			}
			if (this.nativeSuprisedBoxUI.visible) {
				console.error('【惊喜盒子】正在显示，不予第二次显示');
				return;
			}
			if (this.nativeSupriseAd) this.nativeSupriseAd.destroy();
			this.createNativeSuprisedBox();
			this.superBoxData = data;
			this.nativeSupriseAd.load();
		}
		reportClickSuperBox(data) {
			console.error('惊喜盒子上报[点击]');
			this.nativeSupriseAd.reportAdClick({ adId: data.id });
		}
		getLocation() {
			console.error('【获取地理位置授权】');
			this.deal.getLocation2();
		}
		bannerCanShow() {
			if (this.insertIsShow || this.isLoadInsert) return false;
			return true;
		}
	}

	class OppoHt {
		constructor(deal) {
			this.gid = '5ea79b0b532fd11488a3c635';
			this.nativeIcon_bid = '5ea79b6b532fd11488a3c636';
			this.moreGame_bid = '5ea79b9e532fd11488a3c637';
			this.horizeBox_bid = '5ea79be1532fd11488a3c638';
			this.onHorizDataHandler = null;
			this.deal = deal;
		}
		init() {
			this.htSdkInit();
		}
		htSdkInit() {
			let lf = this;
			hts.init(this.gid, null, function (err, re) {
				console.log('err', err);
				console.log('re', re);
				console.error('互推初始化成功-------------------------->>');
				lf.getBox();
				lf.arr_GameArr = [];
				Laya.timer.loop(4000, lf, lf.getBox);
			});
		}
		getBox() {
			let lf = this;
			hts.getBox(this.nativeIcon_bid, function (err, re) {
				if (!re) return;
				lf.arr_NativeIcon = re;
			});
			hts.getBox(this.moreGame_bid, function (err, re) {
				if (!re) return;
				lf.arr_MoreGame = re;
			});
			hts.getBox(this.horizeBox_bid, function (err, re) {
				if (!re) return;
				lf.arr_HorizeBox = re;
				if (lf.onHorizDataHandler) {
					lf.onHorizDataHandler.runWith(lf.onHorizDataHandler.args);
					lf.onHorizDataHandler = null;
				}
			});
		}
		onLoaded() {}
		changeHorziBox(data) {}
		changeGameIcon(data) {
			if (!this.arr_NativeIcon) return;
			if (!this.gameIcon) {
				this.gameIcon = fgui.UIPackage.createObject(
					'UIPlatform',
					'Ht_Icon'
				);
				this.gameIcon.setPlatFormName(this.deal.curPlatForm);
			}
			if (data.isShow) {
				let numRandom1 = Math.floor(
					Math.random() * this.arr_NativeIcon.length
				);
				let numRandom2 = Math.floor(
					Math.random() * this.arr_NativeIcon[0].length
				);
				this.gameIcon.setData(
					this.arr_NativeIcon[numRandom1][numRandom2],
					1,
					this.nativeIcon_bid
				);
				Laya.timer.loop(2500, this, this.gameIconLoop);
				this.gameIcon.setStyle(data);
			} else {
				this.gameIcon.clearTimer_();
				Laya.timer.clear(this, this.gameIconLoop);
			}
		}
		changeMoreGame(data) {}
		changeGameListBox(data) {}
		gameIconLoop() {
			let numRandom1 = Math.floor(
				Math.random() * this.arr_NativeIcon.length
			);
			let numRandom2 = Math.floor(
				Math.random() * this.arr_NativeIcon[0].length
			);
			this.gameIcon.setData(
				this.arr_NativeIcon[numRandom1][numRandom2],
				1,
				this.nativeIcon_bid
			);
		}
		jumpToGame(data) {
			let oppo_ = Laya.Browser.window.qg;
			let lf = this;
			if (!oppo_) return;
			oppo_.navigateToMiniGame({
				pkgName: data.appId,
				success() {
					console.error(
						'上传:',
						data.appId,
						lf.gid,
						data.bid,
						data.mid
					);
					hts.navTo(lf.gid, data.bid, data.mid, false);
				},
				fail(res) {
					hts.navTo(lf.gid, data.bid, data.mid, true);
				}
			});
		}
	}

	class LoginAward extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'GameLoginAward');
		}
		initCom() {
			this.trans1 = this._view.getTransition('shake1');
			this.trans2 = this._view.getTransition('shake2');
			this.trans3 = this._view.getTransition('shake3');
		}
		addEvent() {
			this.btn_close.onClick(this, this.onHide);
			this.btn_get.onClick(this, this.onGet);
			this.btn_justXiaoYin.onClick(this, this.onJustXY);
			this.btn_needAll.onClick(this, this.needAll);
		}
		needAll() {
			this.isNeedAll = true;
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: this.uiData.name,
				handler: Laya.Handler.create(this, this.onVideo)
			});
		}
		onJustXY() {
			Role.ins_.changeDataByString('noSoundTimes', 1);
			SDK.ins_.send(SDK_ORDER.TIPS_GAME, { text: 'Claim Mute props*1' });
			this.onHide();
		}
		noLook() {}
		upDataUI() {
			if (!this.uiData) return;
			this.btn_needAll.visible = false;
			this.btn_get.visible = false;
			this.btn_close.visible = false;
			this.btn_justXiaoYin.visible = false;
			this.trans1.stop();
			this.trans2.stop();
			this.trans3.stop();
			this['trans' + this.uiData.index].play();
			let loginSym = Role.ins_.getDataByString('isGetLoginAwrad');
			if (loginSym == -1 || loginSym == undefined) {
				Role.ins_.setDataByString('isGetLoginAwrad', 0);
				GameData.ins_.setToStorage();
				this.btn_needAll.visible = true;
				if (this.uiData.noDelay) {
					this.justNeed();
				} else Laya.timer.once(2000, this, this.justNeed);
				if (this.uiData.name == 'vivo')
					this.btn_justXiaoYin.visible = true;
				Role.ins_.setDataByString('isGetLoginAwrad', 0);
			} else if (loginSym == 0) {
				this.btn_close.visible = true;
				this.btn_get.visible = true;
			}
		}
		justNeed() {
			this.btn_justXiaoYin.visible = true;
		}
		onGet() {
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: this.uiData.name,
				handler: Laya.Handler.create(this, this.onVideo)
			});
		}
		onVideo(isLookOver) {
			if (isLookOver) {
				if (this.isNeedAll)
					Role.ins_.changeDataByString('noSoundTimes', 1);
				switch (this.uiData.index) {
					case 1:
						Role.ins_.changeDataByString('yinShenTimes', 2);
						SDK.ins_.send(SDK_ORDER.TIPS_GAME, {
							text: 'Claim Invisibility Cloak*2'
						});
						break;
					case 2:
						Role.ins_.changeDataByString('noSoundTimes', 2);
						SDK.ins_.send(SDK_ORDER.TIPS_GAME, {
							text: 'Claim Mute props*2'
						});
						break;
					case 3:
						Role.ins_.changeDataByString('noSoundTimes', 1);
						Role.ins_.changeDataByString('yinShenTimes', 1);
						SDK.ins_.send(SDK_ORDER.TIPS_GAME, {
							text: 'Claim Invisibility Cloak*1 Mute props*1'
						});
						break;
				}
				Role.ins_.setDataByString('isGetLoginAwrad', 1);
				this.btn_get.visible = false;
				this.onHide();
			}
			this.isNeedAll = false;
		}
		onHide() {
			this.destory();
		}
	}

	class OppoGm {
		constructor(deal) {
			this.arrGetIntroduceText = [
				"Time is running out, check the clues and get out of this ghost place",
				"Can't deal with too many clues? Click to view the clues to help you leave this terrible place",
				"Can't deal with too many clues? Click More to view the clues to help you leave this terrible place",
				"Click to view to get more clues to help you escape "
			];
			this.arrYinShenText = [
				"You were found by granny, quickly get the Invisibility Cloak and hide your tracks",
				"Shh! Don't make a sound, put on the Invisibility Cloak quickly, granny won't notice you",
				"Granny found you, here is an Invisibility Cloak, put it on"
			];
			this.arrAddDaytext = [
				"You were found by granny and knocked unconscious and brought here. Your escape time is reduced by one day. Click below to claim it. Granny will give you an extra day to escape from here.",
				"We got you here before grandma knocked you out, click here and we'll give you an extra day to get out of this terrible place.",
				"After some struggles, you escaped from granny's claws, but because you were discovered by granny, you lost one day to leave. In view of your bravery, we will give you an extra day to help you escape"
			];
			this.loginAwardTextArr = [
				'Invisibility Cloak*2',
				'Invisibility Mute prop*2',
				'Invisibility Cloak*1 Mute prop*1'
			];
			this.deal = deal;
		}
		showPropDetail(data) {
			if (!this.propDetail) this.propDetail = new UIPropInfoDetail();
			this.propDetail.setName('oppo');
			this.propDetail.setStyle(data);
			this.propDetail.upDataUI();
		}
		init() {
			this.foundIndex = 0;
			this.unlockTimer = 0;
			this.getIntroduceTimes = 0;
			this.yinShenIndex = 0;
			this.getYinShenLock = false;
			this.addDayIndex = 0;
			this.getIntroduceLock = false;
			this.noSound = new Btn_NoSound();
			this.loginAwardUI = new LoginAward();
			this.noSound.setPlatName('oppo');
		}
		unlockIntroduce(data) {
			if (data.getIntro) {
				if (this.getIntroduceLock) return;
				this.getIntroduceLock = true;
				Laya.timer.once(60000, this, this.unlockTimeOver);
			} else {
				this.getIntroduceLock = false;
				Laya.timer.clear(this, this.unlockTimeOver);
			}
			if (data.isShow == false) {
				if (this.getIntroduceBox) {
					this.getIntroduceBox.removeFromParent();
					let uiPlaying = UISystem.Inst.GetWindowView(UIGamePlayView);
					uiPlaying.ChangeImgBlack(false, 200, null);
				}
			}
		}
		unlockTimeOver() {
			this.getIntroduceLock = false;
			if (!this.getIntroduceBox) {
				this.getIntroduceBox = new GetIntroduceBox();
			}
			if (MainRoleMgr.Inst.isRoleDie()) return;
			this.getIntroduceBox.setStyle({
				parent: GameLayer.windowLayer,
				x: GameConfig.viewWidth / 2,
				y: GameConfig.viewHeight / 2
			});
			this.getIntroduceBox.setData({
				name: 'oppo',
				text: this.arrGetIntroduceText[this.getIntroduceTimes],
				isfree: GameData.ins_.isFirstIntroduce(),
				noDelay: true
			});
			this.getIntroduceTimes++;
			if (this.getIntroduceTimes >= this.arrGetIntroduceText.length)
				this.getIntroduceTimes = 0;
		}
		getYinShen(data) {
			if (!this.getYinshenBox) {
				this.getYinshenBox = new GetYinShenBox();
			}
			if (data.isShow != false) {
				if (this.getYinShenLock) return;
				if (MainRoleMgr.Inst.isRoleDie()) return;
				this.getYinShenLock = true;
				Laya.timer.once(60000, this, function () {
					this.getYinShenLock = false;
				});
				this.getYinshenBox.setStyle({
					parent: GameLayer.windowLayer,
					x: GameConfig.viewWidth / 2,
					y: GameConfig.viewHeight / 2
				});
				this.getYinshenBox.setData({
					name: 'oppo',
					text: this.arrYinShenText[this.yinShenIndex],
					noDelay: true
				});
				this.yinShenIndex++;
				if (this.yinShenIndex >= this.arrYinShenText.length)
					this.yinShenIndex = 0;
			} else {
				this.getYinshenBox.removeFromParent();
				let uiPlaying = UISystem.Inst.GetWindowView(UIGamePlayView);
				uiPlaying.ChangeImgBlack(false, 200, null);
			}
		}
		changeAddDayBox(data) {
			if (!this.addDayBox) {
				this.addDayBox = new AddDataBox();
			}
			if (data.isShow != false) {
				if (Role.ins_.getDataByString('dayNum') == 1) return;
				if (MainRoleMgr.Inst.isRoleDie()) return;
				this.addDayBox.setStyle({
					parent: GameLayer.windowLayer,
					x: GameConfig.viewWidth / 2,
					y: GameConfig.viewHeight / 2
				});
				this.addDayBox.setData({
					name: 'oppo',
					text: this.arrAddDaytext[this.addDayIndex],
					noDelay: true
				});
				this.addDayIndex++;
				if (this.addDayIndex >= this.arrAddDaytext.length)
					this.addDayIndex = 0;
			} else {
				this.addDayBox.removeFromParent();
				let uiPlaying = UISystem.Inst.GetWindowView(UIGamePlayView);
				uiPlaying.ChangeImgBlack(false, 200, null);
			}
		}
		changeNoSound(data) {
			if (MainRoleMgr.Inst.isRoleDie()) return;
			if (data.syms == 'updata') {
				this.noSound.setData({});
				return;
			}
			if (data.isShow) {
				this.noSound.setStyle(data);
				this.noSound.setData({});
			} else {
				this.noSound.closeThis();
			}
		}
		loginAward(data) {
			if (!this.loginAwardUI) return;
			let index = Role.ins_.getLoginIndex();
			if (index == 0) return;
			this.loginAwardUI.setStyle(data);
			this.loginAwardUI.setData({
				index: index,
				text: this.loginAwardTextArr[index - 1],
				name: 'oppo',
				noDelay: true
			});
			this.loginAwardUI = null;
		}
		showFoundAward(data) {
			if (!this.foundeAward) {
				this.foundeAward = new FoundAward();
			}
			if (!this.foundGun) {
				this.foundGun = new FoundGun();
			}
			if (this.foundIndex == 3) {
				this.foundIndex = 2;
				this.foundGun.setStyle(data);
				this.foundGun.setData({ name: 'oppo' });
			} else {
				this.foundeAward.setStyle(data);
				this.foundeAward.setData({
					name: 'oppo',
					index: this.foundIndex,
					noDelay: true
				});
				this.foundIndex++;
			}
		}
	}

	class UIPrivacy extends UIBaseWindow {
		constructor() {
			super('UIPrivacy', 'OppoPrivacy');
		}
		SetViewStruct() {
			super.SetViewStruct();
			this.viewStruct.layerType = LayerType.TYPE_ALERT;
			this.viewStruct.layout = 5;
		}
		initUI() {
			this.readBox.visible = false;
			this.width = GameConfig.viewWidth;
			this.height = GameConfig.viewHeight;
		}
		InitData(data) {
			this.isGameIn = data;
			if (this.isGameIn) {
				this.readBox.visible = true;
				return;
			}
			this.btn_ok.getController('select').selectedIndex = 0;
			this.update();
		}
		AddListener() {
			this.btn_read1.onClick(this, this.read);
			this.btn_read2.onClick(this, this.read);
			this.btn_sure.onClick(this, this.onOk);
			this.btn_ok.onClick(this, this.onSelect);
			this.btn_cancle.onClick(this, this.onClose);
			this.btn_close.onClick(this, this.onBack);
		}
		RemoveListener() {
			this.btn_read1.offClick(this, this.read);
			this.btn_read2.offClick(this, this.read);
			this.btn_sure.offClick(this, this.onOk);
			this.btn_ok.offClick(this, this.onSelect);
			this.btn_cancle.offClick(this, this.onClose);
			this.btn_close.offClick(this, this.onBack);
		}
		read() {
			this.readBox.visible = true;
			this.list.visible = false;
			this.view.getTransitionAt(0).play(
				Laya.Handler.create(this, () => {
					this.list.visible = true;
					this.btn_close.visible = true;
				})
			);
		}
		onOk() {
			if (this.btn_sure.grayed) {
				SDK.ins_.send(SDK_ORDER.TIPS_GAME, {
					text: '请先阅读隐私政策、勾选同意隐私协议。'
				});
				return;
			}
			Role.ins_.setGetPrivate(true);
			UISystem.Inst.RemoveWindowClass(UIPrivacy);
		}
		onSelect() {
			let ctr = this.btn_ok.getController('select');
			ctr.selectedIndex = ctr.selectedIndex == 0 ? 1 : 0;
			this.update();
		}
		update() {
			let ctr = this.btn_ok.getController('select');
			this.btn_sure.grayed = ctr.selectedIndex == 0;
		}
		onClose() {
			Role.ins_.setGetPrivate(false);
			SDK.ins_.send(SDK_ORDER.EXIT_GAME, { name: 'oppo' });
			SDK.ins_.send(SDK_ORDER.EXIT_GAME, { name: 'vivo' });
		}
		onBack() {
			if (this.isGameIn) {
				UISystem.Inst.RemoveWindowClass(UIPrivacy);
				return;
			}
			this.btn_close.visible = false;
			this.list.visible = false;
			this.view.getTransitionAt(1).play(
				Laya.Handler.create(this, () => {
					this.readBox.visible = false;
				})
			);
		}
	}

	class PrivacyIcon extends UIBaseComponent {
		constructor() {
			super('UIPrivacy', 'YinSiBtn');
		}
		addEvent() {
			this.onClick(this, this.show);
		}
		removEvent() {
			this.offClick(this, this.show);
		}
		show() {
			UISystem.Inst.CreateWindowView(UIPrivacy, true);
		}
	}

	class OppoDeal extends BaseDeal {
		constructor() {
			super();
			this.isFirstBeAttack = true;
			this.beAttactCount = 0;
			this.timeCanShowBanner = false;
			this.foundIndex = 0;
			this.OppoAd = new OppoAd(this);
			this.oppoGm = new OppoGm(this);
			this.oppoHt = new OppoHt(this);
			this.arrUI = [
				{
					url: 'ui://UIPlatform/AD_NativeBanner',
					cls: AD_NativeBanner
				},
				{
					url: 'ui://UIPlatform/AD_NativeInsert',
					cls: AD_NativeInsert
				},
				{
					url: 'ui://UIPlatform/AD_NativeImpaction',
					cls: AD_NativeImpaction
				},
				{ url: 'ui://UIPlatform/Ht_HorizBox', cls: HT_HorizBox },
				{ url: 'ui://UIPlatform/Ht_Icon', cls: HT_GameIcon },
				{ url: 'ui://UIPlatform/Ht_maybeLike', cls: HT_MoreGame },
				{ url: 'ui://UIPlatform/AD_SmallNative', cls: AD_SmallNative }
			];
		}
		initPlatform(dealObj) {
			super.initPlatform(dealObj, this.arrUI);
			this.OppoAd.getLocation();
			this.OppoAd.init(dealObj.adData);
			this.oppoHt.init();
			this.oppoGm.init();
			if (!Role.ins_.privateAllowed()) {
				UISystem.Inst.CreateWindowView(UIPrivacy);
			}
			let adPoint = this.getAdPoint(10);
			Laya.timer.once(adPoint.value * 1000, this, function () {
				this.timeCanShowBanner = true;
			});
			this.bannerTimes = 0;
			this.foundIndex = 0;
			this.canAwradShow = true;
			this.isShowNativeBanner = true;
			Laya.timer.loop(60000, this, function () {
				this.bannerTimes = 0;
				console.error('banner展示归0');
			});
		}
		videoChange(data) {
			this.OppoAd.showRewardVideo();
		}
		insertChange(data) {}
		bannerChange(data) {
			let adPoint = this.getAdPoint(data.adPoint);
			this.curBannerData = data;
			if (!this.isInAarea(data.adPoint) && adPoint.isOn) {
				if (data.isDialog) return;
				if (data.isShow) {
					if (!this.timesShowBanner(data)) {
						if (this.timeShowBanner()) this.showBannerChange(data);
					}
				} else {
					Laya.timer.clear(this, this.bannerChange);
					this.showBannerChange(data);
				}
				let delay = adPoint.value;
				console.error('banner延迟', delay * 1000);
				if (delay != 0 && data.isShow)
					Laya.timer.once(delay * 1000, this, this.bannerChange, [
						this.curBannerData
					]);
			} else {
				if (!this.timeShowBanner()) return;
				if (data.isDialog) {
					this.showBannerChange(data);
				} else if (!data.isShow) this.showBannerChange(data);
			}
		}
		showBannerChange(data) {
			if (data.isShow) {
				if (this.isShowNativeBanner) {
					this.OppoAd.showNativeBanner(data);
				} else {
					this.OppoAd.showBanner(data);
				}
			} else {
				this.OppoAd.showNativeBanner(data);
				this.OppoAd.showBanner(data);
			}
		}
		timesShowBanner(data) {
			if (data.isShow) {
				if (this.getAdPoint(4).isOn == false) return false;
				if (this.bannerTimes >= 2) return true;
			}
			return false;
		}
		timeShowBanner() {
			let adPoint = this.getAdPoint(11);
			if (adPoint.isOn) {
				return this.timeCanShowBanner;
			} else {
				if (this.isInAarea(11)) {
					return this.timeCanShowBanner;
				} else return true;
			}
		}
		impactionChange(data) {
			let adPoint = this.getAdPoint(data.adPoint);
			if (this.isInAarea(data.adPoint) || !adPoint.isOn) return;
			let canShow = false;
			if (data.adPoint == 7) {
				let random = adPoint.value;
				canShow = Math.random() <= random;
			}
			if (canShow) {
				this.OppoAd.showNativeImpaction(data);
			}
		}
		nativeSmallChange(data) {
			let adPoint = this.getAdPoint(data.adPoint);
			if (this.isInAarea(data.adPoint) || !adPoint.isOn) return;
			if (data.isShow) {
				let time = adPoint.value;
				Laya.timer.once(time * 1000, this, this.nativeSmallChange, [
					data
				]);
			} else {
				Laya.timer.clear(this, this.nativeSmallChange);
			}
			this.OppoAd.showNativeSmall(data);
		}
		clickBanner(data) {
			this.OppoAd.reportClickBanner(data.id);
		}
		clickInsert(data) {
			this.OppoAd.reportClickInsert(data.id);
		}
		clickImpaction(data) {
			this.OppoAd.reportClickImpaction(data.id);
		}
		onNativeInsertClose(data) {
			this.OppoAd.onNativeInsertClose(data);
		}
		reportMonitor() {
			Laya.Browser.window.qg.reportMonitor();
		}
		nativeSupriseBox(data) {}
		clickSuperBox(data) {
			this.OppoAd.reportClickSuperBox(data);
		}
		HorizBoxChange(data) {
			this.oppoHt.changeHorziBox(data);
		}
		moreGameChange(data) {
			this.oppoHt.changeMoreGame(data);
		}
		gameIconChange(data) {
			this.oppoHt.changeGameIcon(data);
		}
		gameListBoxChange(data) {
			this.oppoHt.changeGameListBox(data);
		}
		jumpToGame(data) {
			this.oppoHt.jumpToGame(data);
		}
		showPropDetail(data) {
			if (!this.canOpenWindow()) return;
			this.oppoGm.showPropDetail(data);
		}
		changeNoSound(data) {
			if (!this.canOpenWindow()) return;
			this.oppoGm.changeNoSound(data);
		}
		changeGetEndIntroduce(data) {
			if (!this.canOpenWindow()) return;
			this.oppoGm.unlockIntroduce(data);
		}
		changeGetAddDay(data) {
			if (!this.canOpenWindow()) return;
			this.oppoGm.changeAddDayBox(data);
		}
		changeGetYinshen(data) {
			if (!this.canOpenWindow()) return;
			this.oppoGm.getYinShen(data);
		}
		changeLoginAward(data) {
			if (!this.canOpenWindow()) return;
			this.oppoGm.loginAward(data);
		}
		canOpenWindow() {
			if (!this.OppoAd.nativeSuprisedBoxUI) return true;
			if (this.OppoAd.nativeSuprisedBoxUI.visible) return false;
			return true;
		}
		changeFoundAward(data, canShow) {
			if (this.oppoGm.foundeAward && this.OppoAd.nativeSuprisedBoxUI) {
				if (
					this.oppoGm.foundeAward.visible ||
					this.OppoAd.nativeSuprisedBoxUI.visible
				)
					return;
			}
			if (data.sbol == 'timeRun') {
				this.canAwradShow = true;
				this.timerRun(data, true);
				console.error('【惊喜宝箱】计时，第一次');
				return;
			}
			if (data.sbol == 'timeClear') {
				console.error('【惊喜宝箱】计时器清除');
				Laya.timer.clear(this, this.timerRun);
				return;
			}
			if (this.canAwradShow) {
				this.canAwradShow = false;
				console.error('【惊喜宝箱】=================>>【按钮】弹出');
				this.showWhatBaoXiang(data, this.showWhat());
			}
		}
		timerRun(data, isFirst) {
			if (!isFirst && this.canAwradShow) {
				this.showWhatBaoXiang(data, this.showWhat());
				this.canAwradShow = false;
				console.error(
					'【惊喜宝箱】=================>>【定时器】自动弹出'
				);
			}
			let ad14 = this.getAdPoint(14);
			let time = parseFloat(ad14.value.split(',')[0]);
			Laya.timer.once(time * 1000, this, this.timerRun, [data, false]);
			this.canAwradShow = true;
			console.error('【惊喜宝箱】计时', time * 1000);
		}
		supriseBox(data) {
			let adPoint = this.getAdPoint(14);
			if (!this.isInAarea(14) && adPoint.isOn)
				this.OppoAd.nativeSuprisedBox(data);
		}
		showWhatBaoXiang(data, showWhat) {
			console.error('showWhat', showWhat);
			if (showWhat == 1) {
				this.oppoGm.showFoundAward(data);
				console.error('发现奖励 ==========》触发');
			}
			if (showWhat == 2) {
				let ad14 = this.getAdPoint(14);
				let delay = parseFloat(ad14.value.split(',')[1]);
				Laya.timer.once(delay * 1000, this, this.supriseBox, [data]);
			}
			if (showWhat == 3) {
				if (this.foundIndex % 2 == 0) {
					this.oppoGm.showFoundAward(data);
					console.error('发现奖励 ==========》触发');
				} else {
					this.supriseBox(data);
					console.error('发现惊喜 ==========》触发');
				}
				this.foundIndex++;
			}
		}
		showWhat() {
			let adPoint = this.getAdPoint(13);
			let closeTreeChooseOne = this.isInAarea(13) || !adPoint.isOn;
			let adPoint14 = this.getAdPoint(14);
			let closeSuprisedBaox = this.isInAarea(14) || !adPoint14.isOn;
			if (closeTreeChooseOne && !closeSuprisedBaox) return 2;
			if (!closeTreeChooseOne && closeSuprisedBaox) return 1;
			if (!closeTreeChooseOne && !closeSuprisedBaox) return 3;
			return 0;
		}
		showMsg(data) {
			this.OppoAd.oppo_.showToast({
				title: data.text,
				icon: 'none',
				duration: 1500
			});
		}
		atlasOnLoad() {
			this.OppoAd.initUICom();
		}
		exitGame() {
			qg.exitApplication({});
		}
		showPrivacyIcon(data) {
			let component = new PrivacyIcon();
			data.parent.addChild(component);
			component.x = data.x;
			component.y = data.y;
		}
	}

	class TT_TurnGameIcon extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'TT_TurnGameIcon');
			this.platFormName = '';
			this.turnNameMaxIndex = 9;
		}
		setPlatFormName(nameString) {
			this.platFormName = nameString;
		}
		initData() {
			this.onClick(this, this.onClickIcon);
			this.LoaderGame.setSize(95, 95);
		}
		onClickIcon() {
			SDK.ins_.send(SDK_ORDER.HT_JUMP_TO_GAME, {
				name: this.platFormName
			});
		}
		setStyle(data) {
			this.removeFromParent();
			if (data.parent) {
				if (data.zOrder) data.parent.addChildAt(this, data.zOrder);
				else data.parent.addChild(this);
			}
			if (data.x != null) this.x = data.x;
			if (data.y != null) this.y = data.y;
			this.visible = true;
		}
		upDataUI() {
			if (!this.uiData) return;
			this.turnIcon();
			Laya.timer.loop(2500, this, this.turnIcon);
		}
		turnIcon() {
			let num = Math.ceil(this.turnNameMaxIndex * Math.random());
			this.LoaderGame.url = 'ui://UIPlatform/gameIcon (' + num + ')';
			this.text_Title.text = this.uiData.title;
		}
		clearTimer() {
			Laya.timer.clearAll(this);
		}
	}

	class TT_VideoRecoder extends UIBaseComponent {
		constructor(onwer) {
			super('UIPlatform', 'TT_VideoRecoder');
			this.platFormName = '';
			this.timeCount = 0;
			this.onwer = onwer;
			SpineFactory.ins_.getSkeletonByName(
				'fenxiangluping',
				Laya.Handler.create(this, function (sk) {
					this.sk = sk;
					console.log('===>加载完成spine  录屏');
				})
			);
		}
		initData(data) {
			this.img_fenxiang.visible = false;
			this.img_luzhi.visible = false;
			this.img_luzhizhong.visible = false;
			this.text_recodeTime.visible = false;
		}
		setPlatFormName(nameString) {
			this.platFormName = nameString;
		}
		setStyle(data) {
			this.removeFromParent();
			if (data.parent) {
				if (data.zOrder) data.parent.addChildAt(this, data.zOrder);
				else data.parent.addChild(this);
			}
			if (data.x != null) this.x = data.x;
			if (data.y != null) this.y = data.y;
			this.visible = true;
		}
		upDataUI() {
			if (!this.uiData) return;
			if (!this.sk) console.log('===>还未加载完成');
			this.img_fenxiang.visible = false;
			this.img_luzhi.visible = false;
			this.img_luzhizhong.visible = false;
			this.text_recodeTime.visible = false;
			this.img_fenxiang.offClick(this, this.changeRecodeStat);
			this.img_luzhizhong.offClick(this, this.changeRecodeStat);
			this.img_luzhi.offClick(this, this.changeRecodeStat);
			this.sk.getSk().removeSelf();
			this.sk.getSk().x = this.getChildAt(0).width / 2;
			this.sk.getSk().y = this.getChildAt(0).height / 2 + 10;
			this.img_fenxiang.alpha = 1;
			switch (this.uiData.stat) {
				case '停止录制':
					this.img_luzhi.visible = true;
					this.img_luzhi.onClick(this, this.changeRecodeStat);
					break;
				case '开始录制':
					this.img_luzhizhong.visible = true;
					this.text_recodeTime.visible = true;
					this.img_luzhizhong.onClick(this, this.changeRecodeStat);
					break;
				case '可以分享':
					this.displayObject.addChild(this.sk.getSk());
					this.sk.play(null, true);
					this.text_recodeTime.visible = true;
					this.img_fenxiang.visible = true;
					this.img_fenxiang.alpha = 0;
					this.img_fenxiang.onClick(this, this.changeRecodeStat);
					break;
				case '点击分享':
					this.displayObject.addChild(this.sk.getSk());
					this.img_fenxiang.alpha = 0;
					this.sk.play(null, true);
					this.text_recodeTime.visible = true;
					this.img_fenxiang.visible = true;
					this.img_fenxiang.onClick(this, this.changeRecodeStat);
					break;
			}
		}
		updataGray() {
			this.touchable = !(
				Role.ins_.getDataByString('isLeftMouseOn') ||
				Role.ins_.getDataByString('isRightMouseOn')
			);
		}
		addEvent() {}
		changeRecodeStat() {
			SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
				name: this.platFormName,
				symReco: 'click'
			});
		}
		setString(string) {
			this.text_recodeTime.text = string;
		}
		getString() {
			return this.text_recodeTime.text;
		}
	}

	class TimeUtil {
		constructor() {}
		static formatToHMS(time, flex = ':') {
			var h = ((time - (time % 3600)) / 3600) % 24;
			var m = ((time % 3600) - (time % 60)) / 60;
			var s = time % 60;
			var mStr = '';
			if (h < 10) mStr += '0';
			mStr += h;
			mStr += flex;
			if (m < 10) mStr += '0';
			mStr += m;
			mStr += flex;
			if (s < 10) mStr += '0';
			mStr += s;
			return mStr;
		}
		static formatToMS(time, flex = ':') {
			var m = ((time % 3600) - (time % 60)) / 60;
			var s = Math.floor(time % 60);
			var mStr = '';
			if (m < 10) mStr += '0';
			mStr += m;
			mStr += flex;
			if (s < 10) mStr += '0';
			mStr += s;
			return mStr;
		}
	}

	class ScreenUtil {
		constructor() {}
		static setPositionAt_Screen_Bottom(obj, distance, width) {
			let box = obj;
			box.y =
				ScreenUtil.getScreenHeight(width) -
				box.height -
				distance +
				box.pivotY;
		}
		static getScreenHeight(width) {
			return (
				width * (Laya.Browser.clientHeight / Laya.Browser.clientWidth)
			);
		}
	}

	class LiWu extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'LiWu');
			this.img_VIP = null;
			this.lab_Name = null;
			this.lab_Num = null;
			this.percentNum = [1, 5, 10];
			this.colorStringArr = ['#d7130f', '#d7770f', '#d7b70f'];
			this.isVip = false;
			SpineFactory.ins_.getSkeletonByName(
				'rocket',
				Laya.Handler.create(this, this.onLoad)
			);
			SpineFactory.ins_.getSkeletonByName(
				'airplane',
				Laya.Handler.create(this, this.onLoad)
			);
		}
		onLoad(player, spineName) {
			if (spineName == 'rocket') {
				this.spineFire = player;
			}
			if (spineName == 'airplane') {
				this.spinePlane = player;
			}
		}
		initData(param) {
			this.visible = false;
		}
		update() {
			this.visible = true;
			this.alpha = 1;
			this.x = -300;
			this.lab_Num.color = this.colorString;
			this.lab_Num.text = 'X ' + this.randomNum;
			this.img_VIP.visible = this.isVip;
			this.lab_Name.color = '#ffffff';
			this.lab_Name.text =
				this.nameArr[Math.floor(this.nameArr.length * Math.random())]
					.name + ' 送出';
			if (this.isVip) {
				Laya.Tween.to(
					this,
					{ x: 0 },
					500,
					Laya.Ease.elasticInOut,
					Laya.Handler.create(this, function () {
						Laya.Tween.to(
							this,
							{ alpha: 0 },
							500,
							null,
							Laya.Handler.create(this, this.recover),
							1500
						);
					})
				);
			}
		}
		run(parent, type, index = 0) {
			this.visible = false;
			this.type = type;
			this.spineFire.getSk().visible = false;
			this.spinePlane.getSk().visible = false;
			this.img_VIP.visible = false;
			switch (type) {
				case 1:
					this.spineFire.play(null, false);
					break;
				case 2:
					this.spinePlane.play(null, false);
					break;
				case 3:
					this.isVip = true;
					break;
			}
			this.randomNum = Math.ceil(
				this.percentNum[type - 1] * Math.random()
			);
			this.colorString = this.colorStringArr[type - 1];
			this.y = 200;
			this.update();
		}
		recover() {
			this.visible = false;
			this.isVip = false;
			Laya.Pool.recover('liwu', this);
		}
	}

	class DanMu extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'DanMu');
			this.ArrayColor = [
				'2b96e9',
				'8986ff',
				'ff6161',
				'c4753b',
				'f376ef',
				'04c2a0',
				'4acc31',
				'da8814'
			];
		}
		upData() {
			this.visible = true;
			this.y = this.y_;
			this.text_Danmu.text = this.wordestring;
			this.text_Danmu.fontSize = 28 * this.size_;
			this.text_Danmu.color =
				'#' +
				this.ArrayColor[
					Math.floor(this.ArrayColor.length * Math.random())
				];
			this.x = this.parent.width + 50;
			if (!this.isCenter)
				Laya.Tween.to(
					this,
					{ x: -800 },
					6000 * this.speed,
					null,
					Laya.Handler.create(this, this.recover)
				);
			else this.centerFont();
		}
		centerFont() {
			this.text_Danmu.fontSize = 28 * 1.6;
			this.y = this.parent.height / 2;
			this.x = (this.parent.width - this.text_Danmu.width) / 2;
			Laya.timer.once(3500, this, this.recover);
		}
		run(parent, y, Wordstring, size, speed, isCenter) {
			this.removeFromParent();
			this.parent_ = parent;
			this.y_ = y;
			this.wordestring = Wordstring;
			this.size_ = size;
			this.speed = speed;
			this.isCenter = isCenter;
			this.isCenter = false;
			parent.addChild(this);
			this.upData();
		}
		recover() {
			this.visible = false;
			Laya.Pool.recover('danmu', this);
		}
	}

	class DanMuView extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'LiveView');
			this.onOff = true;
			this.isCenter = false;
			this.canGetLiWu = true;
			this.totlArrPecent = 0;
			this.totlDanMuPecent = 0;
		}
		initData() {
			this.btn_Close.visible = false;
			this.btn_Open.visible = false;
			this.getChildAt(0).width = GameConfig.viewWidth;
			this.getChildAt(0).x = 0;
			this.btn_Close.x = GameConfig.viewWidth - 100;
			this.btn_Open.x = GameConfig.viewWidth - 100;
			this.onEvent();
			ScreenUtil.setPositionAt_Screen_Bottom(this.downArea, 0, 1280);
		}
		onEvent() {}
		getLiWu(num) {
			if (!this.canGetLiWu) return;
			this.canGetLiWu = false;
			Laya.timer.once(5000, this, function () {
				this.canGetLiWu = true;
			});
			let randomType = Math.ceil(Math.random() * 3);
			if (num) randomType = num;
			let liwu = Laya.Pool.getItemByClass('liwu', LiWu);
			liwu.run(this.downArea, randomType);
		}
		onOffDanMu(isOpen) {
			this.stringArr = danmuResource.items;
			this.danMuArr = danmuConfigResource.items;
			this.totlArrPecent = 0;
			this.totlDanMuPecent = 0;
			for (let i = 0; i < this.stringArr.length; i++) {
				this.totlArrPecent += this.stringArr[i].percent;
			}
			for (let i = 0; i < this.danMuArr.length; i++) {
				this.totlDanMuPecent += parseFloat(this.danMuArr[i].percent);
			}
			this.onOff = isOpen;
			this.updateByState();
		}
		start() {
			let randomTime = 200 - 400 * Math.random();
			Laya.timer.once(1000 + randomTime, this, this.danMuFly);
		}
		danMuFly() {
			let danMu = Laya.Pool.getItemByClass('danmu', DanMu);
			let parent;
			let num = Math.ceil(2 * Math.random());
			num = 1;
			if (num == 1) {
				parent = this.upArea;
			} else {
				parent = this.downArea;
			}
			if (this.isCenter) parent = this.upArea;
			let string = this.selectDanMu();
			danMu.run(
				parent,
				parent.actualHeight * Math.random(),
				string,
				this.selextPropty().size,
				this.selextPropty().speed,
				this.isCenter
			);
			this.isCenter = false;
			this.start();
		}
		centerRandom() {
			this.isCenter = true;
			Laya.timer.once(
				15000 + 5000 - 10000 * Math.random(),
				this,
				this.centerRandom
			);
		}
		updateByState() {
			this.downArea.width = GameConfig.viewWidth;
			this.upArea.width = GameConfig.viewWidth;
			this.upArea.x = 0;
			this.downArea.x = 0;
			if (this.onOff) {
				this.upArea.visible = true;
				this.downArea.visible = true;
				this.btn_Open.visible = true;
				this.start();
			} else {
				this.upArea.visible = false;
				this.downArea.visible = false;
				this.btn_Close.visible = true;
				Laya.timer.clear(this, this.danMuFly);
			}
			this.btn_Close.visible = false;
			this.btn_Open.visible = false;
		}
		selectDanMu() {
			let arrDanMu = [
				'Stealth, stealth! !',
				'Quickly stealth. Buddy.',
				"She's catching up, click the upper right corner to get in stealth !",
				'Use the Invisibility Cloak! ! !',
				'You deserve the Invisibility Cloak~',
				'Hurry up, stealth',
				'Stealth, stealth! !',
				'Stealth, stealth! !',
				'Stealth, stealth! !',
				'Stealth, stealth! !',
				'Quickly stealth. Buddy.',
				'Quickly stealth. Buddy.',
				'Quickly stealth. Buddy.',
				'Hurry up, stealth'
			];
			let stringDanMu =
				arrDanMu[Math.floor(arrDanMu.length * Math.random())];
			if (Math.random() > 0.35 || MainRoleMgr.Inst.isRoleDie())
				stringDanMu = this.randomByPercent(
					this.stringArr,
					this.totlArrPecent
				).name;
			return stringDanMu;
		}
		selextPropty() {
			let propty = {};
			propty.size = parseFloat(
				this.randomByPercent(this.danMuArr, this.totlDanMuPecent).size
			);
			propty.speed = parseFloat(
				this.randomByPercent(this.danMuArr, this.totlDanMuPecent).speed
			);
			return propty;
		}
		randomByPercent(arr, totlePecent) {
			let random = Math.random();
			let num = 0;
			for (let i = 0; i < arr.length; i++) {
				num += parseFloat(arr[i].percent);
				if (random <= num / totlePecent) {
					return arr[i];
				}
			}
		}
		clearTimer() {
			Laya.timer.clearAll(this);
		}
	}

	class TT_ShareWindow extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'TT_ShareWindow');
			this.platFormName = '';
		}
		setPlatFormName(nameString) {
			this.platFormName = nameString;
		}
		initData(data) {
			this.displayObject.zOrder = 15;
		}
		addEvent() {
			this.btn_close.onClick(this, this.close);
			this.btn_Share.onClick(this, this.onShare);
		}
		removEvent() {
			this.btn_close.offClick(this, this.close);
			this.btn_Share.offClick(this, this.onShare);
		}
		upDataUI() {
			if (!this.uiData) return;
			this.x = (GameConfig.viewWidth - 1280) / 2;
			this.img_Day.visible = false;
			this.img_end.visible = false;
			switch (this.uiData.type) {
				case 'Day 2':
					this.img_Day.visible = true;
					break;
				case 'Successful':
					this.img_end.visible = true;
					break;
			}
		}
		close() {
			if (!this.uiData) return;
			this.displayObject.removeSelf();
			if (this.uiData.type == 'Day 2')
				SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
					name: 'toutiao',
					symReco: 'start'
				});
			if (this.uiData.handler)
				this.uiData.handler.runWith(this.uiData.handler.args);
			this.uiData = null;
		}
		onShare() {
			MainRoleMgr.Inst.setMainRoleAniSpeed(0);
			SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
				name: 'toutiao',
				symReco: 'share',
				needAddYinShen: true
			});
		}
	}

	class TT_MoreVideo extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'TT_MoreVideo');
		}
		addEvent() {
			this.btn_share.onClick(this, this.onShare);
			this.btn_close.onClick(this, this.closeThis);
			this.btn_closeTT.onClick(this, this.closeThis);
			this.btn_sure.onClick(this, this.onLookAd);
			this.btn_sureTT.onClick(this, this.onLookAd);
		}
		initData(data) {
			this.x = (GameConfig.viewWidth - 1280) / 2;
			this.displayObject.zOrder = 10;
			this.btn_closeTT.visible = false;
			if (Laya.Browser.window.tt) this.btn_closeTT.visible = true;
		}
		initCom() {
			this.btn_icon = this._view.getChild('btn_sure').getChild('icon');
		}
		upDataUI() {
			if (!this.uiData) return;
			Laya.stage.addChild(this.displayObject);
			this.visible = true;
			this.btn_share.visible = false;
			this.btn_sure.visible = false;
			this.btn_sureTT.visible = false;
			this.btn_icon.visible = false;
			if (this.uiData.type == 'success') {
				this.lab_content.text =
					'Amazing! One step closer to escaping. Post a video to show off!';
				this.lab_title.text = 'Successful';
				this.btn_share.visible = true;
				this.btn_share.getTransition('shake').play();
				this.btn_share.getTransition('shake').changePlayTimes(-1);
				SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
					name: 'toutiao',
					symReco: 'stop',
					handler: Laya.Handler.create(this, this.closeThis),
					shareAtOnce: true
				});
			} else if (this.uiData.type == 'noSound') {
				this.btn_sure.visible = true;
				this.lab_title.text = 'Unexpected surprise';
				this.lab_content.text =
					'Get the Mute prop! Make granny deaf for 60 seconds, unable to hear you!';
				this.btn_sure.getTransition('shake').play();
				this.btn_sure.getTransition('shake').changePlayTimes(-1);
				this.btn_icon.visible = true;
				if (this.btn_sure.visible && Laya.Browser.window.tt) {
					this.btn_sureTT.visible = true;
					this.btn_sure.visible = false;
				}
			} else if (this.uiData.type == 'yinshen') {
				this.btn_icon.visible = true;
				this.lab_title.text = 'Unexpected surprise';
				this.lab_content.text =
					'Get the Invisibility prop! With it, you can find clues whatever you want!';
				this.btn_sure.visible = true;
				this.btn_sure.getTransition('shake').play();
				this.btn_sure.getTransition('shake').changePlayTimes(-1);
				if (this.btn_sure.visible && Laya.Browser.window.tt) {
					this.btn_sureTT.visible = true;
					this.btn_sure.visible = false;
				}
			} else {
				this.lab_content.text = '视频未看完，无法获得奖励，再看一次！';
				this.lab_title.text = '提示';
				this.btn_sure.visible = true;
				this.btn_sure.getTransition('shake').play();
				this.btn_sure.getTransition('shake').changePlayTimes(-1);
			}
			if (Laya.Browser.window.tt) {
				this.btn_close.x = 691;
				this.btn_sureTT.x = 443;
				this.btn_share.x = 443;
			}
		}
		onShare() {
			SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
				name: 'toutiao',
				symReco: 'share',
				handler: Laya.Handler.create(this, this.closeThis)
			});
		}
		closeThis() {
			console.error('关闭创口');
			this.btn_sure.getTransition('shake').stop();
			this.btn_share.getTransition('shake').stop();
			this.displayObject.removeSelf();
			this.visible = false;
			SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
				name: 'toutiao',
				symReco: 'start'
			});
			if (this.uiData.closeHandler)
				this.uiData.closeHandler.runWith(this.uiData.closeHandler.args);
		}
		onLookAd() {
			if (this.uiData.type == 'yinshen') {
				SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
					name: 'toutiao',
					handler: this.uiData.handler,
					needReplay: true
				});
			}
			if (this.uiData.type == 'noSound') {
				SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
					name: 'toutiao',
					handler: this.uiData.handler,
					needReplay: true
				});
			} else {
				SDK.ins_.send(SDK_ORDER.CHANGE_GAME_BY_PLTFORM, {
					name: 'toutiao',
					function: 'videoWithoutFinish',
					videoRun: true,
					handler: this.uiData.handler
				});
			}
			this.closeThis();
		}
	}

	class TT_RecoderTips extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'TT_RecoderTips');
		}
		addEvent() {}
		initData(data) {}
		upDataUI() {
			if (!this.uiData) return;
		}
		closeThis() {
			if (!this.visible) return;
			this.removeFromParent();
			this.visible = false;
		}
		setStyle(data) {
			this.removeFromParent();
			if (data.parent) {
				if (data.zOrder) data.parent.addChildAt(this, data.zOrder);
				else data.parent.addChild(this);
			}
			if (data.x != null) this.x = data.x;
			if (data.y != null) this.y = data.y;
			this.visible = true;
		}
	}

	class TTHt {
		constructor(deal) {
			this._tt = Laya.Browser.window.tt;
			this.videoTime = 0;
			this.stopShareAtOnce = false;
			this.needAddYinShen = false;
			this.isRecoding = false;
			this.notShare = false;
			this.deal = deal;
		}
		init() {
			if (this._tt.getSystemInfoSync().platform !== 'ios') {
				this.youLikeIcon = new TT_TurnGameIcon();
				this.youLikeIcon.setPlatFormName(this.deal.curPlatForm);
			}
			this.danMu = new DanMuView();
			this.noSound = new Btn_NoSound();
			this.noSound.setPlatName(this.deal.curPlatForm);
			this.getRecoderManager();
			this.onShare();
		}
		getRecoderManager() {
			console.log('【获取】录屏对象');
			let lf = this;
			this.recoderIcon = new TT_VideoRecoder(this);
			this.shareWindow = new TT_ShareWindow();
			this.recoderTips = new TT_RecoderTips();
			this.reSureShareWindow = new TT_MoreVideo();
			this.shareWindow.setPlatFormName(this.deal.curPlatForm);
			this.recoderIcon.setPlatFormName(this.deal.curPlatForm);
			this.recoderVideo = this._tt.getGameRecorderManager();
			this.recoderVideo.onStart(res => {
				console.error('录屏开始');
				lf.videoTime = 0;
				lf.isRecoding = true;
				lf.recoderIcon.setData({ stat: '开始录制' });
				lf.recoderIcon.setString('');
				Laya.timer.loop(1000, lf, lf.timeLoop);
			});
			this.recoderVideo.onStop(res => {
				console.error('录制结束【地址】：', res);
				lf.isRecoding = false;
				lf.videoUrl = res.videoPath;
				if (lf.videoTime > 4) {
					lf.videoGameUrl = res.videoPath;
				}
				Laya.timer.clear(lf, lf.timeLoop);
				if (lf.videoTime < 290) {
					if (!lf.notShare) {
						lf.recoderIcon.setData({ stat: '点击分享' });
						lf.recoderIcon.setString('点击分享');
						lf.videoTime = -1;
					} else {
						lf.recoderIcon.setData({ stat: '停止录制' });
						lf.videoTime = 0;
					}
				} else {
					lf.recoderIcon.setString('Maximum Duration');
				}
			});
			this.recoderVideo.onError(res => {
				console.error(res);
			});
		}
		gameRecoderChange(data) {
			if (!data.symReco) {
				if (data.isShow) {
					this.recoderIcon.setStyle(data);
				} else {
					this.recoderIcon.removeFromParent();
				}
				return;
			}
			this.notShare = false;
			if (data.notShare !== undefined) this.notShare = data.notShare;
			if (data.needAddYinShen !== undefined)
				this.needAddYinShen = data.needAddYinShen;
			if (data.symReco == 'click') this.gameRecoderClick();
			if (data.symReco == 'stop') {
				this.recoderVideo.stop();
			}
			if (data.symReco == 'pause') {
				this.recoderVideo.pause();
				Laya.timer.clear(this, this.timeLoop);
			}
			if (data.symReco == 'resume') {
				if (this.isRecoding) {
					this.recoderVideo.resume();
					Laya.timer.loop(1000, this, this.timeLoop);
				} else {
					this.recoderVideo.start({ duration: 300 });
				}
			}
			if (data.symReco == 'share') this.shareRecoder();
			if (data.symReco == 'start') {
				this.recoderVideo.start({ duration: 300 });
			}
			if (data.symReco == 'showWindow') {
				if (data.isShow) {
					Laya.stage.addChild(this.shareWindow.displayObject);
					this.shareWindow.setData({
						type: data.type,
						handler: data.handler
					});
				} else {
					this.shareWindow.displayObject.removeSelf();
				}
			}
			if (data.symReco == 'reSureWindow') {
				this.reSureShareWindow.setData(data);
			}
			if (data.symReco == 'updataUI') {
				this.recoderIcon.updataGray();
			}
			if (data.symReco == 'recoderTips') {
				this.changeRecoderTips(data);
			}
			if (data.handler) this.videoHandler = data.handler;
		}
		changeRecoderTips(data) {
			if (data.isShow) {
				this.recoderTips.setStyle(data);
			} else {
				this.recoderTips.closeThis();
			}
		}
		youLikeChange(data) {
			if (this._tt.getSystemInfoSync().platform == 'ios') return;
		}
		moreGameChange(data) {
			if (this._tt.getSystemInfoSync().platform == 'ios') return;
			if (!this.moreGameIcon) {
				this.moreGameIcon = fgui.UIPackage.createObject(
					'UIPlatform',
					'Ht_maybeLike'
				);
				this.moreGameIcon.setPlatFormName(this.deal.curPlatForm);
			}
			if (data.isShow) {
				this.moreGameIcon.setStyle(data);
				this.moreGameIcon.setData();
			} else {
				this.moreGameIcon.closeThis_();
			}
		}
		barrageWordChange(data) {
			if (Role.ins_.getDataByString('introduceId') > 0) return;
			if (data.isShow) {
				if (this.danMu.visible) return;
				this.danMu.onOffDanMu(data.isShow);
				this.danMu.visible = true;
				Laya.stage.addChild(this.danMu.displayObject);
				this.danMu.displayObject.zOrder = 10;
				this.danMu.centerRandom();
			} else {
				this.danMu.onOffDanMu(data.isShow);
				this.danMu.visible = false;
				this.danMu.displayObject.removeSelf();
				this.danMu.clearTimer();
			}
		}
		changeNoSound(data) {
			if (data.syms == 'updata') {
				this.noSound.upDataUI();
				return;
			}
			if (data.isShow) {
				this.noSound.setStyle(data);
			} else {
				this.noSound.closeThis();
			}
		}
		jumpToGame(data) {
			if (this._tt.getSystemInfoSync().platform !== 'ios') {
				this._tt.showMoreGamesModal({
					appLaunchOptions: [
						{
							appId: 'ttXXXXXX',
							query: 'foo=bar&baz=qux',
							extraData: {}
						}
					],
					success(res) {
						console.log('success', res.errMsg);
					},
					fail(res) {
						console.log('fail', res.errMsg);
					}
				});
			}
		}
		gameRecoderClick() {
			if (!this.recoderIcon.touchable) {
				SDK.ins_.send(SDK_ORDER.SHOW_MSG, {
					text: '请手指操作，再尝试分享录屏!'
				});
				return;
			}
			if (this.videoTime == 0) {
				SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
					name: this.deal.curPlatForm,
					symReco: 'start'
				});
			}
			if (0 < this.videoTime && this.videoTime <= 3) {
				SDK.ins_.send(SDK_ORDER.SHOW_MSG, {
					name: this.deal.curPlatForm,
					text: '录屏失败：录屏时间小于3秒'
				});
			}
			if (this.videoTime > 4 && this.videoTime <= 10) {
				SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
					name: this.deal.curPlatForm,
					symReco: 'stop',
					notShare: true
				});
			}
			if (this.videoTime > 10 && this.videoTime < 290) {
				SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
					name: this.deal.curPlatForm,
					symReco: 'stop'
				});
			}
			if (this.videoTime >= 290) {
				SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
					name: this.deal.curPlatForm,
					symReco: 'share'
				});
			}
			if (this.videoTime == -1) {
				SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
					name: this.deal.curPlatForm,
					symReco: 'share'
				});
			}
		}
		timeLoop() {
			if (this.videoTime > 10) {
				this.recoderIcon.setData({ stat: '可以分享' });
			}
			if (this.videoTime > 0) {
				this.recoderIcon.setString(TimeUtil.formatToMS(this.videoTime));
			}
			if (this.videoTime > 295) {
				Laya.timer.clear(this, this.timeLoop);
				this.recoderIcon.setString('Maximum Duration');
				SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
					name: this.deal.curPlatForm,
					symReco: 'stop'
				});
			}
			this.videoTime++;
		}
		shareRecoder() {
			if (!this.videoGameUrl) return;
			let lf = this;
			Laya.MouseManager.enabled = false;
			GameMgr.Inst.pauseGame();
			this._tt.shareAppMessage({
				channel: 'video',
				title: '#恐怖奶奶   寻找线索，逃离奶奶的恐怖小木屋~',
				desc: '#恐怖奶奶   寻找线索，逃离奶奶的恐怖小木屋~',
				extra: {
					videoPath: lf.videoGameUrl,
					videoTopics: [
						'#恐怖奶奶   寻找线索，逃离奶奶的恐怖小木屋~',
						'#恐怖奶奶#'
					]
				},
				success(res) {
					console.error('分享视频成功');
					lf.videoTime = 0;
					lf.recoderIcon.setData({ stat: '停止录制' });
					lf.shareWindow.close();
					if (lf.needAddYinShen) Role.ins_.addYinShenTime();
					if (lf.videoHandler)
						lf.videoHandler.runWith(lf.videoHandler.args);
					lf.needAddYinShen = false;
					if (MainRoleMgr.Inst.getCurAniName() == 'Camera_01') {
						MainRoleMgr.Inst.setMainRoleAniSpeed(1);
					}
					Laya.MouseManager.enabled = true;
					GameMgr.Inst.contiueGame();
					SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
						name: lf.deal.curPlatForm,
						symReco: 'start'
					});
				},
				fail(res) {
					lf.videoTime = 0;
					lf.shareWindow.close();
					lf.needAddYinShen = false;
					Laya.MouseManager.enabled = true;
					lf.recoderIcon.setData({ stat: '停止录制' });
					console.error('分享失败 ', res);
					SDK.ins_.send(SDK_ORDER.TIPS_GAME, {
						text: '分享失败，请重新录制视频！'
					});
					if (lf.reSureShareWindow.visible) {
						console.error('不进行下一步');
						GameMgr.Inst.contiueGame();
						return;
					}
					if (MainRoleMgr.Inst.getCurAniName() == 'Camera_01') {
						MainRoleMgr.Inst.setMainRoleAniSpeed(1);
					}
					GameMgr.Inst.contiueGame();
					SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
						name: lf.deal.curPlatForm,
						symReco: 'start'
					});
				}
			});
		}
		onShare() {
			this._tt.onShareAppMessage(function (res) {
				return {
					title: '快跑，奶奶来了！',
					templateId: '28deo9k27h9jekdidb',
					imageUrl: '28deo9k27h9jekdidb',
					success() {
						console.log('分享成功');
					},
					fail(e) {
						console.log('分享失败', e);
					}
				};
			});
		}
	}

	class TTAd {
		constructor(deal) {
			this._tt = Laya.Browser.window.tt;
			this.videoAd = null;
			this.bannerAd = null;
			this.insertAd = null;
			this.needReplay = false;
			this.deal = deal;
		}
		init(config) {
			this.adConfig = config;
			if (!this._tt) return;
			this.initRewardAd();
			this.createBannerAd();
		}
		initRewardAd() {
			let lf = this;
			if (!this._tt.createRewardedVideoAd) return;
			this.videoAd = this._tt.createRewardedVideoAd({
				adUnitId: this.adConfig.videoId
			});
			this.videoAd.onLoad(function () {
				console.error('加载完毕');
			});
			this.videoAd.onClose(res => {
				if ((res && res.isEnded) || res === undefined) {
					SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
						name: 'toutiao',
						info: 'ok'
					});
				} else {
					if (lf.needReplay) {
						SDK.ins_.send(SDK_ORDER.CHANGE_GAME_BY_PLTFORM, {
							name: 'toutiao',
							function: 'videoWithoutFinish',
							handler: lf.videoHandler
						});
					}
					SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
						name: 'toutiao',
						info: 'notEnd'
					});
				}
			});
			this.videoAd.onError(function (err) {
				console.error('视频组件出错--->', err);
				SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
					name: 'toutiao',
					info: 'noAd'
				});
			});
		}
		showRewardVideo(data) {
			this.needReplay = data.needReplay;
			this.videoHandler = data.handler;
			let lf = this;
			this.videoAd
				.show()
				.then(() => console.log('激励视频 广告显示'))
				.catch(err => {
					console.error(err);
					lf.videoAd.load().then(() => lf.videoAd.show());
				});
		}
		createBannerAd() {
			let lf = this;
			this.bannerAd = this._tt.createBannerAd({
				adUnitId: this.adConfig.bannerId,
				adIntervals: 30,
				style: {
					width: 150
				}
			});
			this.bannerAd.onError(err => {
				console.error('【banner】', err);
			});
			this.bannerAd.onLoad(() => {
				console.log('banner 广告加载成功');
			});
			this.bannerAd.onResize(res => {
				console.error('【尺寸变化回调触发 - 原始】', lf.bannerAd);
				let info = lf._tt.getSystemInfoSync();
				lf.bannerAd.style.top = info.screenHeight - res.height;
				lf.bannerAd.style.left = (info.screenWidth - res.width) / 2;
				console.error('【尺寸变化回调触发 - 现在】', lf.bannerAd);
			});
		}
		showBanner() {
			this.bannerAd
				.show()
				.then(() => {
					console.log('bannerAd show ok');
				})
				.catch(res => {
					console.log('bannerAd show error', res);
				});
		}
		hideBanner() {
			this.bannerAd.hide();
		}
		createInsetAd() {
			let lf = this;
			this.insertAd = this._tt.createInterstitialAd({
				adUnitId: this.adConfig.interId
			});
			this.insertAd.onClose(() => {
				lf.insertAd.destroy();
			});
		}
		showInsetAd() {
			let lf = this;
			this.createInsetAd();
			this.insertAd
				.load()
				.then(() => {
					lf.insertAd.show();
				})
				.catch(err => {
					console.log(err);
				});
		}
	}

	class TT_MoreGame extends BaseSdkComp {
		constructor() {
			super();
		}
		addEvents() {
			this.onClick(this, this.showMoreGame);
		}
		removeEvents() {
			this.offClick(this, this.showMoreGame);
		}
		setData(scale = 1) {
			this.scale = scale;
			this.addEvents();
			this.loader.url = 'ui://UIPlatform/cainiaiwan';
			this.visible = true;
		}
		closeThis_() {
			this.removeFromParent();
			this.removeEvents();
			this.visible = false;
		}
		showMoreGame() {
			SDK.ins_.send(SDK_ORDER.HT_JUMP_TO_GAME, {
				name: this.platFormName
			});
		}
	}

	class TT_btnDaoJuXianSuo extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'TT_btnDaoJuXianSuo');
		}
		initData() {
			this.img_Kuang.visible = false;
			this.icon_play.visible = false;
			this.lab_txt.visible = false;
			this.lab_Name.visible = false;
		}
		initUI() {
			this.addEvent();
			this.img_Kuang.visible = false;
			this.icon_play.visible = false;
			this.lab_txt.visible = false;
			this.lab_Name.visible = false;
		}
		upDataUI() {
			if (!this.uiData) return;
			if (this.uiData.isShow) {
				let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
				let data = { parent: ui.getChildAt(1), zOrder: 10 };
				if (this.uiData.type == 'hand') {
					data.x = ui.BtnDrop.x + ui.BtnDrop.width / 2 + 18;
					data.y = ui.BtnDrop.y - ui.BtnDrop.height / 2;
				}
				if (this.uiData.type == 'select') {
					data.x = ui.BtnTakeUp.x - (176 - 130) / 2;
					data.y = ui.BtnTakeUp.y + ui.BtnTakeUp.height + 18;
				}
				this.setStyle(data);
				this.updatePlay();
			} else {
				this.removeFromParent();
				this.removEvent();
			}
		}
		addEvent() {
			this.on('mousedown', this, this.onMouseDown);
			this.on('mouseout', this, this.onMouseOut);
			this.on('mouseUp', this, this.onMouseOut);
		}
		removEvent() {
			this.off('mousedown', this, this.onMouseDown);
			this.off('mouseout', this, this.onMouseOut);
			this.off('mouseUp', this, this.onMouseOut);
		}
		onMouseDown() {
			if (Role.ins_.isInPropInfo(this.uiData.adId)) {
				this.lab_txt.visible = true;
				this.lab_Name.visible = true;
				this.img_Kuang.visible = true;
				this.updateText();
			} else {
				SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
					name: 'toutiao',
					handler: Laya.Handler.create(this, this.onLookOver),
					needReplay: true
				});
			}
		}
		onMouseOut() {
			this.img_Kuang.visible = false;
			this.lab_txt.visible = false;
			this.lab_Name.visible = false;
		}
		updatePlay() {
			this.icon_play.visible = true;
			if (this.uiData.type != 'select') {
				this.lab_Name.visible = false;
			}
			this.img_Kuang.x =
				(GameConfig.viewWidth - this.img_Kuang.width) / 2 - this.x;
			this.img_Kuang.y =
				(GameConfig.viewHeight - this.img_Kuang.height) / 2 - this.y;
			this.lab_txt.x = this.img_Kuang.x;
			this.lab_txt.y = this.img_Kuang.y;
			this.lab_Name.x = this.img_Kuang.x;
			this.lab_Name.y = this.img_Kuang.y;
			if (Role.ins_.isInPropInfo(this.uiData.adId)) {
				this.icon_play.visible = false;
			}
		}
		updateText() {
			let config = I18nResource.getItemByKey(this.uiData.adId);
			this.lab_txt.text = config.txt.replace(/\\n/g, '\n');
			this.lab_Name.text = '线索:' + config.msg;
		}
		onLookOver(isOver) {
			if (isOver) {
				Role.ins_.setPropInfo(this.uiData.adId);
				this.upDataUI();
			}
			GameMgr.Inst.contiueGame();
		}
		closeThis() {
			this.removEvent();
			this.removeFromParent();
		}
	}

	class TTGm {
		constructor(onwer) {
			this.propId = null;
			this.adId = null;
			this.type = '';
			this.index = 0;
			this.onwer = onwer;
			this.daoJuXianSuoUI = new TT_btnDaoJuXianSuo();
		}
		changeGame(data) {
			this[data.function](data);
		}
		yinShenNoWindow(data) {
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'toutiao',
				handler: Laya.Handler.create(this, function (isOver) {
					if (isOver) {
						Role.ins_.addYinShenTime();
						data.playView.onBtnYinShen();
						GameMgr.Inst.contiueGame();
					} else {
						GameMgr.Inst.contiueGame();
					}
				}),
				needReplay: true
			});
		}
		cellShowVideo(data) {
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'toutiao',
				handler: Laya.Handler.create(
					this,
					function () {
						Role.ins_.setPropInfo(data.adId);
						GameEventMgr.Inst.sendEvent([
							EventName.REFRESH_UI_PROPLIST
						]);
					},
					null,
					false
				),
				needReplay: true
			});
		}
		endIntroduceVideo(data) {
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'toutiao',
				handler: Laya.Handler.create(
					this,
					function () {
						Role.ins_.setPropByIndex(
							'endIntroduceAdKeys',
							data.adIndex
						);
						UISystem.Inst.GetWindowView(UIEndIntroduce).updataUI();
					},
					null,
					false
				),
				needReplay: true
			});
		}
		videoWithoutFinish(data) {
			if (!data.videoRun) {
				SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
					name: 'toutiao',
					symReco: 'reSureWindow',
					type: 'reLook',
					handler: data.handler
				});
			} else {
				SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
					name: 'toutiao',
					handler: data.handler,
					needReplay: false
				});
			}
		}
		changeDaoJuXianSuo(data) {
			if (this.propId == data.propId && this.type == data.type) return;
			this.propId = data.propId;
			let isShow = false;
			switch (data.type) {
				case 'select':
					if (this.type == 'hand') return;
					isShow = true;
					break;
				case 'noSelect':
					if (this.type == 'hand') return;
					isShow = false;
					break;
				case 'hand':
					isShow = true;
					break;
				case 'drop':
					if (this.type != 'hand') return;
					isShow = false;
					break;
				case 'hide':
					isShow = false;
					this.daoJuXianSuoUI.removeFromParent();
					this.daoJuXianSuoUI.removEvent();
					return;
			}
			this.adId = this.hasAd(data.propId);
			if (this.adId == null) {
				this.type = null;
				return;
			} else {
				this.type = data.type;
			}
			this.showXianSuo(this.adId, this.type, isShow);
		}
		hasAd(propId) {
			if (propId) {
				this.adId = null;
				for (let i = 1; i <= I18nResource.items.length; i++) {
					if (i <= 4) continue;
					let config = I18nResource.getItemByKey(i);
					if (config.itemid == '') continue;
					let arr = config.itemid.split('|');
					for (let arrIndex = 0; arrIndex < arr.length; arrIndex++) {
						if (parseInt(arr[arrIndex]) == propId) {
							return config.id;
						}
					}
				}
			} else return null;
		}
		showXianSuo(adId, type, isShow) {
			let data = {
				isShow: isShow,
				adId: adId,
				type: type
			};
			if (data.isShow) {
				this.daoJuXianSuoUI.setData(data);
			} else {
				this.daoJuXianSuoUI.closeThis();
			}
		}
		needShareWindowOpen(data) {
			if (!this.onwer.onOff.ad10.isOn) return;
			if (this.onwer.isInAarea(10)) return;
			let canShow = Math.random() < this.onwer.onOff.ad10.value;
			if (!canShow) return;
			GameMgr.Inst.pauseGame();
			SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
				name: 'toutiao',
				symReco: 'reSureWindow',
				type: 'success',
				closeHandler: Laya.Handler.create(this, this.closeWindowHandler)
			});
		}
		closeWindowHandler(data) {
			GameMgr.Inst.contiueGame();
			if (!this.onwer.onOff.ad11.isOn) return;
			if (this.onwer.isInAarea(11)) return;
			this.getNoSoundYinShen();
		}
		getNoSoundYinShen() {
			this.windowType = 'yinshen';
			if (this.index % this.onwer.onOff.ad11.value == 0)
				this.windowType = 'noSound';
			this.index++;
			GameMgr.Inst.pauseGame();
			SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
				name: 'toutiao',
				symReco: 'reSureWindow',
				type: this.windowType,
				handler: Laya.Handler.create(this, this.lookOver),
				closeHandler: Laya.Handler.create(this, this.closeWindow)
			});
		}
		lookOver(isOver) {
			console.error('看完视频奖励次数', isOver);
			if (isOver) {
				if (this.windowType == 'yinshen') {
					UISystem.Inst.GetWindowView(UIGamePlayView).adLookOver(
						isOver
					);
				} else {
					Role.ins_.changeDataByString('noSoundTimes', 1);
					SDK.ins_.send(SDK_ORDER.HT_ICON_NO_SOUND_CHANGE, {
						name: 'toutiao',
						syms: 'updata'
					});
				}
			}
			GameMgr.Inst.contiueGame();
		}
		closeWindow() {
			GameMgr.Inst.contiueGame();
		}
		showMsgIntroduce(data) {
			switch (data.type) {
				case 'Large electrical box':
					if (
						!Role.ins_.isActiveOneProp(28, 'daDianXiangKeys') &&
						Role.ins_.getDataByString('introduceId') > 0
					) {
						SDK.ins_.send(SDK_ORDER.SHOW_MSG, {
							name: 'toutiao',
							text: 'Find the electrical box on the next floor and cut its wires!',
							time: 8000
						});
					}
					break;
			}
		}
		removeDuanTouTai(data) {
			if (
				data.resName == 'duantoutai_03' ||
				data.resName == 'duantoutai_01' ||
				data.resName == 'duantoutai_02' ||
				data.resName == 'xigua_duantoutai'
			) {
				data.sprite.active = false;
			}
			if (data.resName == 'KBNN_-1_2_2') data.sprite.active = true;
			if (data.resName == 'tuzhi_01') data.sprite.active = false;
		}
		showPropDetail(data) {
			if (!this.propDetail) this.propDetail = new UIPropInfoDetail();
			this.propDetail.setName('toutiao');
			this.propDetail.setStyle(data);
			this.propDetail.upDataUI();
		}
	}

	class TTAld {
		constructor(deal) {
			this.tt = Laya.Browser.window.tt;
			this.deal = deal;
		}
		init() {}
		sendEvent(data) {
			console.error('上报TT事件', data);
			this.tt.reportAnalytics(data.aldSym, data.infoObj);
		}
	}

	class TTDeal extends BaseDeal {
		constructor() {
			super();
			this.isFirstBeAttack = true;
			this.beAttactCount = 0;
			this.arrUI = [
				{ url: 'ui://UIPlatform/Ht_Icon', cls: HT_GameIcon },
				{ url: 'ui://UIPlatform/Ht_maybeLike', cls: TT_MoreGame }
			];
			this.TouTiaoHt = new TTHt(this);
			this.ttAd = new TTAd(this);
			this.ttGm = new TTGm(this);
			this.ttAld = new TTAld(this);
		}
		initPlatform(dealObj) {
			super.initPlatform(dealObj, this.arrUI);
			this.TouTiaoHt.init();
			this.ttAd.init(dealObj.adData);
		}
		videoChange(data) {
			this.ttAd.showRewardVideo(data);
		}
		bannerChange(data) {
			let adPoint = this.getAdPoint(data.adPoint);
			if (!this.isInAarea(data.adPoint) && adPoint.isOn) {
				if (data.isDialog) return;
				if (data.isShow) {
					Laya.timer.clear(this, this.bannerChange);
					this.curBannerData = data;
					this.ttAd.showBanner();
					let delay = adPoint.value;
					console.error('banner延迟', delay * 1000);
					if (delay != 0)
						Laya.timer.once(delay * 1000, this, this.bannerChange, [
							this.curBannerData
						]);
				} else {
					this.ttAd.hideBanner();
				}
			} else {
				if (data.isShow) {
					if (!data.isDialog) return;
					this.ttAd.showBanner();
				} else {
					this.ttAd.hideBanner();
				}
			}
		}
		insertChange(data) {
			let canShow;
			let adPoint = this.getAdPoint(data.adPoint);
			switch (data.adPoint) {
				case 8:
					if (this.isInAarea(data.adPoint) || !adPoint.isOn) {
						return;
					} else {
						let time = adPoint.value * 1000;
						console.error('延迟', time);
						Laya.timer.once(
							time,
							this,
							function (data) {
								this.ttAd.showInsetAd();
							},
							[data]
						);
					}
					break;
				default:
					if (!adPoint.isOn) return;
					if (this.isInAarea(data.adPoint)) {
						return;
					}
					if (this.isFirstBeAttack && data.adPoint == 3) {
						this.isFirstBeAttack = false;
						return;
					}
					if (data.adPoint == 3) {
						this.beAttactCount++;
						canShow =
							(this.beAttactCount / 2) % 1 == 0 ? true : false;
					} else {
						let random = adPoint.value;
						canShow = Math.random() <= random;
					}
					if (canShow) {
						this.ttAd.showInsetAd();
					}
					break;
			}
		}
		moreGameChange(data) {
			this.TouTiaoHt.moreGameChange(data);
		}
		youLikeChange(data) {
			this.TouTiaoHt.youLikeChange(data);
		}
		gameRecoderChange(data) {
			this.TouTiaoHt.gameRecoderChange(data);
		}
		jumpToGame(data) {
			this.TouTiaoHt.jumpToGame(data);
		}
		barrageWordChange(data) {
			this.TouTiaoHt.barrageWordChange(data);
		}
		changeNoSound(data) {
			this.TouTiaoHt.changeNoSound(data);
		}
		aldEventSend(data) {
			this.ttAld.sendEvent(data);
		}
		changeGame(data) {
			this.ttGm.changeGame(data);
		}
		showPropDetail(data) {
			this.ttGm.showPropDetail(data);
		}
		showMsg(data) {
			console.error('提示消息', data);
			let tt = 2000;
			if (data.time) tt = data.time;
			Laya.Browser.window.tt.showToast({
				title: data.text,
				duration: tt,
				icon: 'none'
			});
		}
	}

	class VivoAd {
		constructor(deal) {
			this.vivo_ = Laya.Browser.window.qg;
			this.bannerTimerCount = null;
			this.videoAd = null;
			this.bannerAd = null;
			this.insertAd = null;
			this.nativeAd = null;
			this.nativeBannerAd = null;
			this.nativeSupriseAd = null;
			this.nativeKeepNumber = 3;
			this.nativeBannerKeepNumber = 10;
			this.isNativeBannerShow = false;
			this.isNativeInsertShow = false;
			this.canShowVideo = true;
			this.isFirstLook = true;
			this.timerIndex = 0;
			this.deal = deal;
		}
		init(config) {
			this.adConfig = config;
			if (!this.vivo_) return;
			Laya.timer.loop(11000, this, this.nativeLoadTime);
			this.bannerTimerCount = 0;
		}
		initUICom() {}
		nativeLoadTime() {
			if (this.timerIndex == 0) {
				if (!this.nativeAd) {
					this.createNativeAd();
				}
				this.loadNativeAd();
			} else if (this.timerIndex >= 1) {
				if (this.nativeBannerAd) {
					if (this.nativeBannerAd.javaObject == null) {
						this.nativeBannerAd = null;
						this.createNativeBannerAd();
					}
				} else {
					this.createNativeBannerAd();
				}
				this.loadNativeBannerAd();
			}
			this.timerIndex++;
			5;
			if (this.timerIndex > 4) {
				this.timerIndex = 0;
			}
		}
		createNativeAd() {
			let lf = this;
			this.nativeAd = undefined;
			this.nativeAd = this.vivo_.createNativeAd({
				posId: lf.adConfig.nativeId
			});
			this.nativeAd.onLoad(function (res) {
				lf.res = res;
				console.error('[insert、small]===>原生广告', res);
			});
			this.nativeAd.onError(function (err) {
				console.error('[error]nativeAd', err);
			});
		}
		loadNativeAd() {
			if (this.res) {
				if (this.res.adList.length < this.nativeKeepNumber) {
					this.nativeAd.load();
					console.error('[insert、small]===>原生广告 加载');
				}
			} else if (this.nativeAd) {
				this.nativeAd.load();
				console.error('[insert、small ERROR]===>原生广告 加载');
			}
		}
		createNativeBannerAd() {
			if (this.nativeBannerAd) {
				if (this.nativeBannerAd.javaObject != null) return;
			}
			let lf = this;
			this.nativeBannerAd = this.vivo_.createNativeAd({
				posId: lf.adConfig.nativeBannerId
			});
			this.nativeBannerAd.onLoad(function (bannerRes) {
				lf.bannerRes = bannerRes;
				console.error('[banner]===>原生广告', bannerRes);
			});
			console.error('创建--->原生banner', this.nativeBannerAd);
			this.nativeBannerAd.onError(function (err) {
				console.error('[banner ERROR]===>原生广告', err);
			});
		}
		loadNativeBannerAd() {
			if (this.bannerRes) {
				if (
					this.bannerRes.adList.length < this.nativeBannerKeepNumber
				) {
					console.error('[banner]===>原生广告banner 加载');
					if (this.nativeBannerAd.javaObject == null)
						this.createNativeBannerAd();
					else this.nativeBannerAd.load();
				}
			} else if (this.nativeBannerAd) {
				this.nativeBannerAd.load();
				console.error('[banner]===>原生广告banner 加载');
			}
		}
		initRewardAd() {
			let lf = this;
			this.videoAd = this.vivo_.createRewardedVideoAd({
				posId: this.adConfig.videoId
			});
			this.videoAd.onLoad(function () {
				lf.canShowVideo = false;
				Laya.timer.once(50000, this, function () {
					lf.canShowVideo = true;
				});
				lf.videoAd
					.show()
					.then(() => {
						console.log('激励视频广告展示完成');
						SoundMgr.Inst.isPass = false;
						GameMgr.Inst.pauseGame();
						Laya.timer.scale = 0;
					})
					.catch(err => {
						console.log(
							'激励视频广告展示失败',
							JSON.stringify(err)
						);
						SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
							name: 'vivo',
							info: 'noAd'
						});
					});
			});
			this.videoAd.onClose(res => {
				Laya.timer.scale = 1;
				if ((res && res.isEnded) || res === undefined) {
					SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
						name: 'vivo',
						info: 'ok'
					});
				} else {
					SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
						name: 'vivo',
						info: 'notEnd'
					});
				}
			});
			this.videoAd.onError(function (err) {
				Laya.timer.scale = 1;
				SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
					name: 'vivo',
					info: 'noAd'
				});
			});
		}
		showRewardVideo() {
			if (!this.canShowVideo) {
				SDK.ins_.send(SDK_ORDER.SHOW_MSG, {
					name: this.deal.curPlatForm,
					text: '广告冷却中，请稍后再试!'
				});
				return;
			}
			if (!this.videoAd) {
				this.initRewardAd();
				return;
			}
			this.videoAd.load();
		}
		createBanner() {
			let lf = this;
			if (this.bannerAd) this.bannerAd.destroy();
			this.bannerAd = null;
			this.bannerAd = this.vivo_.createBannerAd({
				posId: lf.adConfig.bannerId,
				style: {}
			});
			if (!this.bannerAd || !this.bannerAd.onResize) return;
			this.bannerAd.onResize(res => {
				let info = lf.vivo_.getSystemInfoSync();
				if (!lf.bannerAd.style) return;
				lf.bannerAd.style.left = (info.screenWidth - res.width) / 2;
				lf.bannerAd.style.top = info.screenHeight - res.height;
			});
		}
		showBanner(data) {
			this.createBanner();
			this.bannerData = data;
			if (data.isShow) {
				let lf = this;
				this.bannerAd
					.show()
					.then(() => {
						console.log('banner广告展示完成');
						lf.deal.isBannerNative = true;
						if (lf.nativeBannerUI) lf.nativeBannerUI.clearTimer_();
					})
					.catch(err => {
						lf.showNativeBanner(this.bannerData, false);
						console.log('banner广告展示失败', JSON.stringify(err));
						if (err.code == 30002) {
							lf.createBanner();
						}
					});
			} else {
				this.bannerAd.hide();
				console.log('======>关闭banner');
			}
		}
		showNativeBanner(data, needBanner = true) {
			this.bannerData = data;
			if (!this.nativeBannerUI) {
				this.nativeBannerUI = fgui.UIPackage.createObject(
					'UIPlatform',
					'AD_NativeBanner'
				);
				this.nativeBannerUI.setName('vivo');
				this.nativeBannerUI.visible = false;
			}
			if (data.isShow) {
				if (!this.bannerRes) {
					if (this.nativeBannerAd) this.nativeBannerAd.load();
					if (needBanner) {
						this.showBanner(data);
					}
					return;
				}
				let info = this.bannerRes.adList.pop();
				if (info) {
					this.deal.isBannerNative = false;
					this.nativeBannerUI.setStyle(data);
					this.nativeBannerUI.setData({ adList: [info] });
					this.nativeBannerAd.reportAdShow({ adId: info.adId });
					this.bannerTimerCount++;
					console.error('banner上传次数', this.bannerTimerCount);
					if (this.bannerAd) this.bannerAd.hide();
				} else {
					if (needBanner) {
						this.showBanner(data);
					}
				}
			} else {
				this.nativeBannerUI.clearTimer_();
			}
		}
		reportClickBanner(adId) {
			this.nativeBannerAd.reportAdClick({ adId: adId });
		}
		initInsert() {
			let lf = this;
			this.insertAd = this.vivo_.createInterstitialAd({
				posId: this.adConfig.interId
			});
			this.insertAd.onLoad(function () {});
			this.insertAd.onClose(function () {});
			this.insertAd.onError(function (err) {
				console.error('插屏', err);
				if (err.errCode == 30002) {
					lf.initInsert();
				}
			});
		}
		showInsertAd(data) {
			if (this.res) {
				if (this.res.length > 0) return;
			}
			this.initInsert();
			this.insertData = data;
			this.insertAd.show();
		}
		showInsertAd_Native(data) {
			this.insertData = data;
			this.showNativeInsert(this.insertData);
		}
		showNativeInsert(data) {
			if (!this.nativeInsertUI) {
				this.nativeInsertUI = fgui.UIPackage.createObject(
					'UIPlatform',
					'AD_NativeInsertW'
				);
				this.nativeInsertUI.setName('vivo');
			}
			if (data.isShow) {
				if (!this.res) {
					this.showInsertAd(data);
					return;
				}
				let info = this.res.adList.pop();
				if (info) {
					this.isNativeInsertShow = true;
					this.nativeInsertStyle(data);
					this.nativeInsertUI.setData({ adList: [info] });
					this.nativeAd.reportAdShow({ adId: info.adId });
				} else {
				}
			} else {
				this.isNativeInsertShow = false;
				this.nativeInsertUI.visible = false;
			}
		}
		nativeInsertStyle(data) {
			if (data.inStage) {
				Laya.stage.addChild(this.nativeInsertUI.displayObject);
				this.nativeInsertUI.displayObject.zOrder = 10;
				this.nativeInsertUI.x = GameConfig.viewWidth / 2;
				this.nativeInsertUI.y = GameConfig.viewHeight / 2;
				this.nativeInsertUI.displayObject.visible = true;
			} else {
				data['parent'] = UISystem.Inst.GetWindowView(UIGamePlayView);
				data['x'] = GameConfig.viewWidth / 2;
				data['y'] = GameConfig.viewHeight / 2;
				this.nativeInsertUI.setStyle(data);
				this.nativeInsertUI.visible = false;
			}
		}
		reportClickInsert(adId) {
			this.nativeAd.reportAdClick({ adId: adId });
		}
		onNativeInsertClose(data) {
			this.isNativeInsertShow = false;
			console.error('插屏关闭');
		}
		showNativeImpaction(data) {
			if (!this.nativeImpactionUI) {
				this.nativeImpactionUI = fgui.UIPackage.createObject(
					'UIPlatform',
					'AD_NativeImpaction'
				);
				this.nativeImpactionUI.setName('vivo');
			}
			if (data.isShow) {
				if (!this.res) return;
				let info = this.res.adList.pop();
				if (!info) return;
				data['parent'] = UISystem.Inst.GetWindowView(UIDayView);
				data['x'] = GameConfig.viewWidth / 2;
				data['y'] = 440 / 2;
				this.nativeImpactionUI.setStyle(data);
				this.nativeImpactionUI.setData({ adList: [info] });
				this.nativeAd.reportAdShow({ adId: info.adId });
			} else {
				this.nativeImpactionUI.visible = false;
			}
		}
		reportClickImpaction(adId) {
			this.nativeAd.reportAdClick({ adId: adId });
		}
		showNativeSmall(data) {
			this.smallData = data;
			if (!data.parent) {
				console.error('没有 parent');
			}
			if (!this.nativeSmallUI) {
				this.nativeSmallUI = fgui.UIPackage.createObject(
					'UIPlatform',
					'AD_SmallNative'
				);
				this.nativeSmallUI.setName('vivo');
			}
			if (data.isShow) {
				if (!this.res) return;
				let info = this.res.adList.pop();
				if (!info) return;
				this.nativeSmallUI.setStyle(data);
				this.nativeSmallUI.setData({ adList: [info] });
				this.nativeAd.reportAdShow({ adId: info.adId });
			} else {
				this.nativeSmallUI.visible = false;
				this.nativeSmallUI.removeFromParent();
			}
		}
		reportClickSmall(adId) {
			this.nativeAd.reportAdClick({ adId: adId });
		}
		nativeSuprisedBox(data) {
			if (!this.nativeSuprisedBoxUI) {
				this.nativeSuprisedBoxUI = new SuprisedBox2();
			}
			this.superBoxData = data;
			if (!this.bannerRes) {
				this.showBanner(data);
				return;
			}
			let info = this.bannerRes.adList.pop();
			if (info) {
				console.error('惊喜盒子======>显示', info);
				this.nativeSuprisedBoxUI.setData({ name: 'vivo', res: info });
				this.nativeSuprisedBoxUI.setStyle(this.superBoxData);
				this.nativeBannerAd.reportAdShow({ adId: info.adId });
				this.bannerTimerCount++;
				console.error('banner上传次数', this.bannerTimerCount);
			} else {
				this.nativeSuprisedBoxUI.setData({ name: 'vivo', close: true });
			}
		}
		reportClickSuperBox(data) {
			console.error('惊喜盒子上报[点击]');
			this.nativeBannerAd.reportAdClick({ adId: data.id });
		}
		getLocation() {
			console.error('【获取地理位置授权】');
			this.deal.getLocation2();
		}
		bannerCanShow() {
			return true;
		}
	}

	class VivoHt {
		constructor(deal) {
			this.gid = '5ea79b0b532fd11488a3c635';
			this.nativeIcon_bid = '5ea79b6b532fd11488a3c636';
			this.moreGame_bid = '5ea79b9e532fd11488a3c637';
			this.horizeBox_bid = '5ea79be1532fd11488a3c638';
			this.onHorizDataHandler = null;
			this.deal = deal;
		}
		init() {
			this.htSdkInit();
		}
		htSdkInit() {
			let lf = this;
			hts.init(this.gid, null, function (err, re) {
				console.log('err', err);
				console.log('re', re);
				console.error('互推初始化成功-------------------------->>');
				lf.getBox();
				lf.arr_GameArr = [];
				Laya.timer.loop(4000, lf, lf.getBox);
			});
		}
		getBox() {
			let lf = this;
			hts.getBox(this.nativeIcon_bid, function (err, re) {
				if (!re) return;
				lf.arr_NativeIcon = re;
			});
			hts.getBox(this.moreGame_bid, function (err, re) {
				if (!re) return;
				lf.arr_MoreGame = re;
			});
			hts.getBox(this.horizeBox_bid, function (err, re) {
				if (!re) return;
				lf.arr_HorizeBox = re;
				if (lf.onHorizDataHandler) {
					lf.onHorizDataHandler.runWith(lf.onHorizDataHandler.args);
					lf.onHorizDataHandler = null;
				}
			});
		}
		onLoaded() {}
		changeHorziBox(data) {
			if (!this.arr_HorizeBox) {
				this.onHorizDataHandler = Laya.Handler.create(
					this,
					this.changeHorziBox,
					[data]
				);
				return;
			}
			if (!this.horizBox) {
				this.horizBox = fgui.UIPackage.createObject(
					'UIPlatform',
					'Ht_HorizBox'
				);
				this.horizBox.setPlatFormName(this.deal.curPlatForm);
			}
			if (data.isShow) {
				this.horizBox.closeThis();
				this.horizBox.setData(
					this.arr_HorizeBox,
					1,
					this.horizeBox_bid
				);
				this.horizBox.setStyle(data);
			} else {
				this.horizBox.closeThis();
			}
		}
		changeGameIcon(data) {}
		changeMoreGame(data) {
			if (!this.moreGame) {
				this.moreGame = fgui.UIPackage.createObject(
					'UIPlatform',
					'Ht_maybeLike'
				);
				this.moreGame.setPlatFormName(this.deal.curPlatForm);
			}
			if (data.isShow) {
				this.moreGame.setData(
					this.arr_MoreGame,
					this.moreGame_bid,
					1.5
				);
				this.moreGame.setStyle(data);
			} else {
				this.moreGame.closeThis_();
			}
		}
		changeGameListBox(data) {
			if (!this.arr_MoreGame) return;
			if (!this.gameListBox) {
				this.gameListBox = new HT_GameListBox(this.deal.curPlatForm);
			}
			if (data.isShow) {
				this.gameListBox = UISystem.Inst.CreateWindowView(
					HT_GameListBox,
					data
				);
			} else {
				UISystem.Inst.RemoveWindowView(this.gameListBox);
			}
		}
		gameIconLoop() {
			let numRandom1 = Math.floor(
				Math.random() * this.arr_NativeIcon.length
			);
			let numRandom2 = Math.floor(
				Math.random() * this.arr_NativeIcon[0].length
			);
			this.gameIcon.setData(
				this.arr_NativeIcon[numRandom1][numRandom2],
				1,
				this.nativeIcon_bid
			);
		}
		jumpToGame(data) {
			let oppo_ = Laya.Browser.window.qg;
			let lf = this;
			if (!oppo_) return;
			oppo_.navigateToMiniGame({
				pkgName: data.appId,
				success() {
					console.error(
						'上传:',
						data.appId,
						lf.gid,
						data.bid,
						data.mid
					);
					hts.navTo(lf.gid, data.bid, data.mid, false);
				},
				fail(res) {
					hts.navTo(lf.gid, data.bid, data.mid, true);
				}
			});
		}
	}

	class AD_NativeInsertW extends BaseSdkComp {
		constructor(name) {
			super();
		}
		setName(name) {
			this.platFormName = name;
		}
		addEvents() {
			this.btn_NativeInsert.onClick(this, this.clickBanner);
			this.btn_close.onClick(this, this.closeThis_);
		}
		removeEvents() {
			this.btn_NativeInsert.offClick(this, this.clickBanner);
			this.btn_close.offClick(this, this.closeThis_);
		}
		clickBanner() {
			SDK.ins_.send(SDK_ORDER.AD_CLICK_NATIVE_INSERT, {
				name: this.platFormName,
				id: this.natvieData.adId
			});
		}
		setData(data) {
			this.visible = true;
			this.natvieData = data.adList[0];
			let ad = data.adList[0];
			this.loader_img.url = ad.imgUrlList[0];
			if (ad.icon) this.loader_icon.url = ad.icon;
			else this.loader_icon.url = ad.imgUrlList[0];
			this.text_title.text = ad.title;
			this.text_adWords.text = ad.desc;
			this.loader_img.setSize(729, 321);
			this.loader_icon.setSize(49, 32);
			this.addEvents();
		}
		clearTimer_() {
			Laya.timer.clearAll(this);
			this.visible = false;
			this.removeFromParent();
			this.removeEvents();
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_INSERT_CLOSE, {
				name: this.platFormName
			});
		}
		closeThis_() {
			this.clearTimer_();
		}
	}

	class VivoGm {
		constructor(deal) {
            this.arrGetIntroduceText = [
				"Time is running out, check the clues and get out of this ghost place",
				"Can't deal with too many clues? Click to view the clues to help you leave this terrible place",
				"Can't deal with too many clues? Click More to view the clues to help you leave this terrible place",
				"Click to view to get more clues to help you escape"
			];
			this.arrYinShenText = [
				"You were found by granny, quickly get the Invisibility Cloak and hide your tracks",
				"Shh! Don't make a sound, put on the Invisibility Cloak quickly, granny won't notice you",
				"Granny found you, here is an Invisibility Cloak, put it on"
			];
			this.arrAddDaytext = [
				"You were found by granny and knocked unconscious and brought here. Your escape time is reduced by one day. Click below to claim it. Granny will give you an extra day to escape from here.",
				"We got you here before grandma knocked you out, click here and we'll give you an extra day to get out of this terrible place.",
				"After some struggles, you escaped from granny's claws, but because you were discovered by granny, you lost one day to leave. In view of your bravery, we will give you an extra day to help you escape"
			];
			this.loginAwardTextArr = [
				'Invisibility Cloak*2',
				'Invisibility Mute prop*2',
				'Invisibility Cloak*1 Mute prop*1'
			];
			this.deal = deal;
		}
		showPropDetail(data) {
			if (!this.propDetail) this.propDetail = new UIPropInfoDetail();
			this.propDetail.setName('vivo');
			this.propDetail.setStyle(data);
			this.propDetail.upDataUI();
		}
		init() {
			this.unlockTimer = 0;
			this.getIntroduceTimes = 0;
			this.yinShenIndex = 0;
			this.getYinShenLock = false;
			this.foundIndex = 0;
			this.addDayIndex = 0;
			this.getIntroduceLock = false;
			this.noSound = new Btn_NoSound();
			this.loginAwardUI = new LoginAward();
			this.noSound.setPlatName('vivo');
		}
		unlockIntroduce(data) {
			if (data.getIntro) {
				if (this.getIntroduceLock) return;
				this.getIntroduceLock = true;
				Laya.timer.once(60000, this, this.unlockTimeOver);
			} else {
				this.getIntroduceLock = false;
				Laya.timer.clear(this, this.unlockTimeOver);
			}
			if (data.isShow == false) {
				if (this.getIntroduceBox) {
					this.getIntroduceBox.removeFromParent();
					let uiPlaying = UISystem.Inst.GetWindowView(UIGamePlayView);
					uiPlaying.ChangeImgBlack(false, 200, null);
				}
			}
		}
		unlockTimeOver() {
			this.getIntroduceLock = false;
			if (!this.getIntroduceBox) {
				this.getIntroduceBox = new GetIntroduceBox();
			}
			if (MainRoleMgr.Inst.isRoleDie()) return;
			this.getIntroduceBox.setStyle({
				parent: GameLayer.windowLayer,
				x: GameConfig.viewWidth / 2,
				y: GameConfig.viewHeight / 2
			});
			this.getIntroduceBox.setData({
				name: 'vivo',
				text: this.arrGetIntroduceText[this.getIntroduceTimes],
				isfree: GameData.ins_.isFirstIntroduce(),
				noDelay: true
			});
			this.getIntroduceTimes++;
			if (this.getIntroduceTimes >= this.arrGetIntroduceText.length)
				this.getIntroduceTimes = 0;
		}
		getYinShen(data) {
			if (!this.getYinshenBox) {
				this.getYinshenBox = new GetYinShenBox();
			}
			if (data.isShow != false) {
				if (this.getYinShenLock) return;
				if (MainRoleMgr.Inst.isRoleDie()) return;
				this.getYinShenLock = true;
				Laya.timer.once(60000, this, function () {
					this.getYinShenLock = false;
				});
				this.getYinshenBox.setStyle({
					parent: GameLayer.windowLayer,
					x: GameConfig.viewWidth / 2,
					y: GameConfig.viewHeight / 2
				});
				this.getYinshenBox.setData({
					name: 'vivo',
					text: this.arrYinShenText[this.yinShenIndex],
					noDelay: true
				});
				this.yinShenIndex++;
				if (this.yinShenIndex >= this.arrYinShenText.length)
					this.yinShenIndex = 0;
			} else {
				this.getYinshenBox.removeFromParent();
				let uiPlaying = UISystem.Inst.GetWindowView(UIGamePlayView);
				uiPlaying.ChangeImgBlack(false, 200, null);
			}
		}
		changeAddDayBox(data) {
			if (!this.addDayBox) {
				this.addDayBox = new AddDataBox();
			}
			if (data.isShow != false) {
				if (Role.ins_.getDataByString('dayNum') == 1) return;
				if (MainRoleMgr.Inst.isRoleDie()) return;
				this.addDayBox.setStyle({
					parent: GameLayer.windowLayer,
					x: GameConfig.viewWidth / 2,
					y: GameConfig.viewHeight / 2
				});
				this.addDayBox.setData({
					name: 'vivo',
					text: this.arrAddDaytext[this.addDayIndex],
					noDelay: true
				});
				this.addDayIndex++;
				if (this.addDayIndex >= this.arrAddDaytext.length)
					this.addDayIndex = 0;
			} else {
				this.addDayBox.removeFromParent();
				let uiPlaying = UISystem.Inst.GetWindowView(UIGamePlayView);
				uiPlaying.ChangeImgBlack(false, 200, null);
			}
		}
		changeNoSound(data) {
			if (MainRoleMgr.Inst.isRoleDie()) return;
			if (data.syms == 'updata') {
				this.noSound.setData({});
				return;
			}
			if (data.isShow) {
				this.noSound.setStyle(data);
				this.noSound.setData({});
			} else {
				this.noSound.closeThis();
			}
		}
		loginAward(data) {
			if (!this.loginAwardUI) return;
			let index = Role.ins_.getLoginIndex();
			if (index == 0) return;
			this.loginAwardUI.setStyle(data);
			this.loginAwardUI.setData({
				index: index,
				text: this.loginAwardTextArr[index - 1],
				name: 'vivo',
				noDelay: true
			});
			this.loginAwardUI = null;
		}
		showFoundAward(data) {
			if (!this.foundeAward) {
				this.foundeAward = new FoundAward();
			}
			if (!this.foundGun) {
				this.foundGun = new FoundGun();
			}
			if (this.foundIndex == 3) {
				this.foundIndex = 2;
				this.foundGun.setStyle(data);
				this.foundGun.setData({ name: 'vivo' });
			} else {
				this.foundeAward.setStyle(data);
				this.foundeAward.setData({
					name: 'vivo',
					index: this.foundIndex
				});
				this.foundIndex++;
			}
		}
	}

	class VivoDeal extends BaseDeal {
		constructor() {
			super();
			this.isFirstBeAttack = true;
			this.beAttactCount = 0;
			this.foundIndex = 0;
			this.VivoAd = new VivoAd(this);
			this.VivoHt = new VivoHt(this);
			this.vivoGm = new VivoGm(this);
			this.arrUI = [
				{
					url: 'ui://UIPlatform/AD_NativeBanner',
					cls: AD_NativeBanner
				},
				{
					url: 'ui://UIPlatform/AD_NativeInsertW',
					cls: AD_NativeInsertW
				},
				{
					url: 'ui://UIPlatform/AD_NativeImpaction',
					cls: AD_NativeImpaction
				},
				{ url: 'ui://UIPlatform/Ht_HorizBox', cls: HT_HorizBox },
				{ url: 'ui://UIPlatform/Ht_Icon', cls: HT_GameIcon },
				{ url: 'ui://UIPlatform/Ht_maybeLike', cls: HT_MoreGame },
				{ url: 'ui://UIPlatform/AD_SmallNative', cls: AD_SmallNative }
			];
		}
		initPlatform(dealObj, version) {
			super.initPlatform(dealObj, this.arrUI);
			this.VivoAd.getLocation();
			this.VivoAd.init(dealObj.adData);
			this.VivoHt.init();
			this.vivoGm.init();
			this.foundIndex = 0;
			this.isBannerNative = true;
			this.register();
			if (!Role.ins_.privateAllowed()) {
				UISystem.Inst.CreateWindowView(UIPrivacy);
			}
		}
		exitGame() {
			qg.exitApplication({});
		}
		videoChange(data) {
			let adPoint = this.getAdPoint(12);
			if (adPoint.isOn) {
				let handler = data.handler;
				if (handler) handler.runWith([true]);
				return;
			}
			this.VivoAd.showRewardVideo();
		}
		get canShowNative() {
			let adPoint = this.getAdPoint(100);
			if (!adPoint) {
				return true;
			}
			if (this.isInAarea(100) || adPoint.isOn) {
				return false;
			}
			return true;
		}
		get canShowBanner() {
			let adPoint = this.getAdPoint(101);
			if (!adPoint) {
				return true;
			}
			if (this.isInAarea(101) || adPoint.isOn) {
				return false;
			}
			return true;
		}
		insertChange(data) {
			if (!this.canShowNative) {
				console.log('不显示原生广告');
				return;
			}
			if (this.VivoAd.nativeSuprisedBoxUI) {
				if (this.VivoAd.nativeSuprisedBoxUI.visible) return;
			}
			let canShow;
			let adPoint = this.getAdPoint(data.adPoint);
			switch (data.adPoint) {
				case 8:
					if (this.isInAarea(data.adPoint) || !adPoint.isOn) {
						return;
					} else {
						let time = adPoint.value * 1000;
						console.error('延迟', time);
						Laya.timer.once(
							time,
							this,
							function (data) {
								this.VivoAd.showInsertAd_Native(data);
							},
							[data]
						);
					}
					break;
				default:
					if (!adPoint.isOn) return;
					if (this.isInAarea(data.adPoint)) {
						return;
					}
					if (this.isFirstBeAttack && data.adPoint == 3) {
						this.isFirstBeAttack = false;
						return;
					}
					if (data.adPoint == 3) {
						this.beAttactCount++;
						canShow =
							(this.beAttactCount / 2) % 1 == 0 ? true : false;
					} else {
						let random = adPoint.value;
						canShow = Math.random() <= random;
					}
					if (canShow) {
						this.VivoAd.showInsertAd_Native(data);
					}
					break;
			}
		}
		bannerChange(data) {
			if (!this.canShowBanner) {
				console.log('不显示banner广告');
				return;
			}
			let adPoint = this.getAdPoint(data.adPoint);
			if (!this.isInAarea(data.adPoint) && adPoint.isOn) {
				if (data.isDialog) return;
				if (!data.isShow) {
					Laya.timer.clear(this, this.bannerChange);
				}
				this.bannerShowCtr(data);
				this.curBannerData = data;
				let delay = adPoint.value;
				console.error('banner延迟', delay * 1000);
				if (delay != 0 && data.isShow)
					Laya.timer.once(delay * 1000, this, this.bannerChange, [
						this.curBannerData
					]);
			} else {
				if (data.isDialog) {
					this.bannerShowCtr(data);
				} else if (!data.isShow) this.bannerShowCtr(data);
			}
		}
		bannerShowCtr(data) {
			if (data.isShow) {
				if (this.isBannerNative) {
					if (!this.canShowNative) {
						console.log('不显示原生广告');
						return;
					}
					this.VivoAd.showNativeBanner(data);
				} else {
					this.VivoAd.showBanner(data);
				}
			} else {
				this.VivoAd.showNativeBanner(data);
				this.VivoAd.showBanner(data);
				console.log('==========》关闭两类banner');
			}
		}
		impactionChange(data) {
			if (!this.canShowNative) {
				console.log('不显示原生广告');
				return;
			}
			let adPoint = this.getAdPoint(data.adPoint);
			if (this.isInAarea(data.adPoint) || !adPoint.isOn) return;
			let canShow = false;
			if (data.adPoint == 7) {
				let random = adPoint.value;
				canShow = Math.random() <= random;
			}
			if (canShow) {
				this.VivoAd.showNativeImpaction(data);
			}
		}
		nativeSmallChange(data) {
			if (!this.canShowNative) {
				console.log('不显示原生广告');
				return;
			}
			let adPoint = this.getAdPoint(data.adPoint);
			if (this.isInAarea(data.adPoint) || !adPoint.isOn) return;
			if (data.isShow) {
				let time = adPoint.value;
				Laya.timer.once(time * 1000, this, this.nativeSmallChange, [
					data
				]);
			} else {
				Laya.timer.clear(this, this.nativeSmallChange);
			}
			this.VivoAd.showNativeSmall(data);
		}
		clickBanner(data) {
			this.VivoAd.reportClickBanner(data.id);
		}
		clickInsert(data) {
			this.VivoAd.reportClickInsert(data.id);
		}
		clickImpaction(data) {
			this.VivoAd.reportClickImpaction(data.id);
		}
		onNativeInsertClose(data) {
			this.VivoAd.onNativeInsertClose(data);
		}
		reportMonitor() {
			Laya.Browser.window.qg.reportMonitor();
		}
		nativeSupriseBox(data) {}
		changeFoundAward(data, canShow) {
			if (this.vivoGm.foundeAward && this.VivoAd.nativeSuprisedBoxUI) {
				if (
					this.vivoGm.foundeAward.visible ||
					this.VivoAd.nativeSuprisedBoxUI.visible
				)
					return;
			}
			let showWhat = this.showWhat();
			if (showWhat == 0) return;
			let adPoint = this.getAdPoint(10);
			let time = adPoint.value;
			if (showWhat == 2) time = this.getAdPoint(11).value;
			if (!MainRoleMgr.Inst) return;
			if (data.time) time = data.time;
			if (data.isShow) {
				this.foundData = data;
				Laya.timer.once(time, this, this.changeFoundAward, [
					data,
					true
				]);
				if (
					!MainRoleMgr.Inst.isRoleDie() &&
					canShow &&
					MainRoleMgr.Inst.isRoleDie() != null
				) {
					this.showWhatBaoXiang(data, showWhat);
				}
			} else {
				Laya.timer.clear(this, this.changeFoundAward);
			}
		}
		clickSuperBox(data) {
			this.VivoAd.reportClickSuperBox(data);
		}
		supriseBox(data) {
			if (!this.canShowNative) {
				console.log('不显示原生广告');
				return;
			}
			if (Role.ins_.getDataByString('introduceId') > 0) return;
			let adPoint14 = this.getAdPoint(11);
			let closeSuprisedBaox = this.isInAarea(11) || !adPoint14.isOn;
			if (!closeSuprisedBaox) {
				if (
					this.VivoAd.nativeInsertUI &&
					this.VivoAd.nativeInsertUI.visible
				)
					return;
				this.VivoAd.nativeSuprisedBox(data);
			}
		}
		showPrivacyIcon(data) {
			let component = new PrivacyIcon();
			data.parent.addChild(component);
			component.x = data.x;
			component.y = data.y;
		}
		showWhatBaoXiang(data, showWhat) {
			console.error('showWhat', showWhat);
			if (showWhat == 1) {
				this.vivoGm.showFoundAward(data);
				console.error('发现奖励 ==========》触发');
			}
			if (showWhat == 2) {
				this.supriseBox(data);
				console.error('发现惊喜 ==========》触发');
			}
			if (showWhat == 3) {
				if (this.foundIndex % 2 == 0) {
					this.vivoGm.showFoundAward(data);
					console.error('发现奖励 ==========》触发');
				} else {
					this.supriseBox(data);
					console.error('发现惊喜 ==========》触发');
				}
				this.foundIndex++;
			}
		}
		showWhat() {
			let adPoint = this.getAdPoint(10);
			let closeTreeChooseOne = this.isInAarea(10) || !adPoint.isOn;
			let adPoint14 = this.getAdPoint(11);
			let closeSuprisedBaox = this.isInAarea(11) || !adPoint14.isOn;
			if (closeTreeChooseOne && !closeSuprisedBaox) return 2;
			if (!closeTreeChooseOne && closeSuprisedBaox) return 1;
			if (!closeTreeChooseOne && !closeSuprisedBaox) return 3;
			return 0;
		}
		HorizBoxChange(data) {}
		moreGameChange(data) {}
		gameIconChange(data) {}
		gameListBoxChange(data) {}
		jumpToGame(data) {}
		showMsg(data) {
			this.VivoAd.vivo_.showToast({
				message: data.text
			});
		}
		atlasOnLoad() {
			this.VivoAd.initUICom();
		}
		showPropDetail(data) {
			this.vivoGm.showPropDetail(data);
		}
		changeNoSound(data) {
			this.vivoGm.changeNoSound(data);
		}
		changeGetEndIntroduce(data) {
			this.vivoGm.unlockIntroduce(data);
		}
		changeGetAddDay(data) {
			this.vivoGm.changeAddDayBox(data);
		}
		changeGetYinshen(data) {
			this.vivoGm.getYinShen(data);
		}
		changeLoginAward(data) {
			this.vivoGm.loginAward(data);
		}
		register() {
			this.VivoAd.vivo_.onShow(this.onShow);
			this.VivoAd.vivo_.onHide(this.onHide);
		}
		onShow() {
			console.log('===>显示');
			Laya.timer.resume();
		}
		onHide() {
			console.log('===>隐藏');
			Laya.timer.pause();
		}
	}

	class QQAld {
		constructor(deal) {
			this.qq_ = Laya.Browser.window.qq;
			this.appId = '1110496396';
			this.deal = deal;
			if (!deal) {
				this.init();
				this.num = 0;
				this.userLogin();
			} else {
				this.num = 100;
			}
		}
		init() {
			this.http = new Laya.HttpRequest();
			this.http.on(Laya.Event.COMPLETE, this, function (res) {
				if (res.openid && res.ret == 0) {
					Role.ins_.openId = res.openid;
					Role.ins_.session_key = res.session_key;
				}
				this.num++;
				if (this.num == 1) this.reportData_Yun({ typeString: 'login' });
			});
			this.http.on(Laya.Event.PROGRESS, this, function (res) {});
			this.http.on(Laya.Event.ERROR, this, function (res) {});
		}
		reportData_Yun(data) {
			let url;
			let via;
			let sysInfo;
			let LaunchInfo;
			let mobile;
			let mobileType;
			let os = 1;
			let obj;
			LaunchInfo = this.qq_.getLaunchOptionsSync();
			sysInfo = this.qq_.getSystemInfoSync();
			let items = Object.keys(LaunchInfo.query);
			via = 'scene=' + LaunchInfo.scene;
			for (let i = 0; i < items.length; i++) {
				via += '&' + items[i] + '=' + LaunchInfo.query[items[i]];
			}
			switch (data.typeString) {
				case 'register':
					// url = 'https://report.173kw.com/rpt/code2reg';
					url = '';
					mobile = sysInfo.brand;
					mobileType = sysInfo.model;
					obj = {
						appid: this.appId,
						code: data.code,
						pf: 'qqqgame',
						via: via,
						mobile: mobile,
						mobiletype: mobileType,
						os: os
					};
					if (Laya.Browser.onIOS) os = 2;
					break;
				case 'createRole':
					// url = 'https://report.173kw.com/rpt/regchar';
					url = '';
					if (Role.ins_.openId == '') return;
					obj = {
						appid: this.appId,
						openid: Role.ins_.openId,
						pf: 'qqqgame'
					};
					break;
				case 'login':
					// url = 'https://report.173kw.com/rpt/login';
					url = '';
					if (Role.ins_.openId == '') return;
					obj = {
						appid: this.appId,
						openid: Role.ins_.openId,
						pf: 'qqqgame',
						via: via
					};
					break;
				case 'ad':
					if (this.num <= 99) return;
					// url = 'https://report.173kw.com/rpt/adpoint';
					url = '';
					obj = {
						appid: this.appId,
						adid: data.adId,
						adtype: data.adType,
						adstate: data.adState
					};
					break;
			}
			this.http.send(url, JSON.stringify(obj), 'post', 'json', [
				'Content-Type',
				'application/json'
			]);
		}
		userLogin() {
			let lf = this;
			this.qq_.login({
				success(res) {
					if (res.code) {
						lf.reportData_Yun({
							code: res.code,
							typeString: 'register'
						});
					} else {
					}
				}
			});
		}
	}
	var adType;
	(function (adType) {
		adType[(adType['bannerAd'] = 1)] = 'bannerAd';
		adType[(adType['videoAd'] = 2)] = 'videoAd';
	})(adType || (adType = {}));
	var adstate;
	(function (adstate) {
		adstate[(adstate['show'] = 1)] = 'show';
		adstate[(adstate['close'] = 2)] = 'close';
		adstate[(adstate['lookVideoOver'] = 3)] = 'lookVideoOver';
		adstate[(adstate['error'] = 4)] = 'error';
		adstate[(adstate['click'] = 5)] = 'click';
	})(adstate || (adstate = {}));

	class QQ_MoreGame extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'btn_MoreGame');
		}
		addEvent() {
			this._view.onClick(this, this.clickmoreGame);
		}
		removEvent() {
			this._view.offClick(this, this.clickmoreGame);
		}
		clickmoreGame() {
			SDK.ins_.send(SDK_ORDER.AD_QQ_BOX_SHOW, { name: 'qq' });
		}
		close() {
			this.removeFromParent();
		}
	}

	class QQAd {
		constructor(deal) {
			this._qq = Laya.Browser.window.qq;
			this.videoAd = null;
			this.bannerAd = null;
			this.bannerIsOpen = false;
			this.insertAd = null;
			this.insertIsOpen = false;
			this.appBox = null;
			this.bannerLock = false;
			this.deal = deal;
		}
		init(config) {
			this.adConfig = config;
			this.bannerLock = false;
			this.isFirstBanner = true;
			this.bannerIsOpen = false;
			this.insertIsOpen = false;
			this.needBox = false;
			if (!this._qq) return;
			this.createBannerAd();
			this.initRewardAd();
			this.createInsetAd();
			this.createAppBox();
			this.onShareAppMessage();
		}
		createAppBox() {
			let lf = this;
			this.appBox = this._qq.createAppBox({
				adUnitId: lf.adConfig.boxId
			});
			this.appBox.onError(err => {
				console.error('【box】', err);
			});
			this.appBox.onLoad(() => {
				console.log('【box】 广告加载成功');
			});
			this.appBox.onClose(() => {
				console.log('【box】用户关闭盒子广告 --->广告');
				lf.insertIsOpen = false;
			});
		}
		appBoxShow(data) {
			let lf = this;
			this.appBox.load().then(() => {
				lf.insertIsOpen = true;
				lf.appBox.show();
			});
		}
		moreGame(data) {
			if (!this.moreGameUI) {
				this.moreGameUI = new QQ_MoreGame();
			}
			if (data.isShow) {
				this.moreGameUI.setStyle(data);
			} else {
				this.moreGameUI.close();
			}
		}
		btnUpTween(data, delayTime) {
			this.hideBanner();
			this.bannerLock = true;
			let btn = data.btn;
			let oY = btn.y;
			btn.y = 720 - 40;
			Laya.Tween.to(
				btn,
				{ y: oY },
				400,
				Laya.Ease.elasticInOut,
				null,
				delayTime
			);
			Laya.timer.once(delayTime - 500, this, function () {
				this.bannerLock = false;
				SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
					name: 'qq',
					isShow: true,
					adPoint: 4
				});
			});
		}
		initRewardAd() {
			let lf = this;
			console.error('QQ 视频ID', lf.adConfig.videoId);
			this.videoAd = this._qq.createRewardedVideoAd({
				adUnitId: lf.adConfig.videoId
			});
			this.videoAd.onLoad(function () {
				console.error('加载完毕');
				SDK.ins_.send(SDK_ORDER.YUN_ZHI_REPORT_DATA, {
					name: 'qq',
					adId: this.adConfig.videoId,
					adType: adType.videoAd,
					adState: adstate.show,
					typeString: 'ad'
				});
			});
			this.videoAd.onClose(res => {
				lf.deal.lockTimerInsert = false;
				if ((res && res.isEnded) || res === undefined) {
					SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
						name: 'qq',
						info: 'ok'
					});
					SDK.ins_.send(SDK_ORDER.YUN_ZHI_REPORT_DATA, {
						name: 'qq',
						adId: this.adConfig.videoId,
						adType: adType.videoAd,
						adState: adstate.lookVideoOver,
						typeString: 'ad'
					});
				} else {
					SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
						name: 'qq',
						info: 'notEnd',
						res: res
					});
					SDK.ins_.send(SDK_ORDER.YUN_ZHI_REPORT_DATA, {
						name: 'qq',
						adId: this.adConfig.videoId,
						adType: adType.videoAd,
						adState: adstate.close,
						typeString: 'ad'
					});
				}
			});
			this.videoAd.onError(function (err) {
				lf.deal.lockTimerInsert = false;
				console.error('[qqVideo]', err);
				SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
					name: 'qq',
					info: 'noAd',
					res: err
				});
				SDK.ins_.send(SDK_ORDER.YUN_ZHI_REPORT_DATA, {
					name: 'qq',
					adId: this.adConfig.videoId,
					adType: adType.videoAd,
					adState: adstate.error,
					typeString: 'ad'
				});
			});
		}
		showRewardVideo(data) {
			let lf = this;
			console.error(data);
			if (!this.videoAd) {
				this.initRewardAd();
			} else {
				lf.deal.lockTimerInsert = true;
				this.videoAd.show();
			}
			SDK.ins_.send(SDK_ORDER.YUN_ZHI_REPORT_DATA, {
				name: 'qq',
				adId: this.adConfig.videoId,
				adType: adType.videoAd,
				adState: adstate.click,
				typeString: 'ad'
			});
		}
		createBannerAd() {
			if (this.bannerAd) {
				this.bannerAd.destroy();
				this.bannerAd = null;
			}
			let lf = this;
			let bannerObj = {
				adUnitId: this.adConfig.bannerId,
				style: {
					top: 0,
					left: 100,
					height: 200,
					width: 250
				}
			};
			this.bannerAd = this._qq.createBannerAd(bannerObj);
			this.bannerAd.onError(err => {
				SDK.ins_.send(SDK_ORDER.YUN_ZHI_REPORT_DATA, {
					name: 'qq',
					adId: this.adConfig.bannerId,
					adType: adType.bannerAd,
					adState: adstate.error,
					typeString: 'ad'
				});
			});
			this.bannerAd.onLoad(res => {
				console.log('banner 广告加载成功', res);
				if (!lf.isFirstBanner) {
					if (!lf.bannerIsOpen) return;
					lf.bannerAd
						.show()
						.then(() => {
							console.log('广告显示成功');
							if (lf.bannerHandler) {
								lf.bannerHandler.run();
								lf.bannerHandler = null;
							}
						})
						.catch(err => {
							console.log('广告显示失败', err);
						});
				}
			});
			this.bannerAd.onResize(res => {
				let info = lf._qq.getSystemInfoSync();
				lf.bannerAd.style.top = info.screenHeight - res.height;
				lf.bannerAd.style.left = (info.screenWidth - res.width) / 2;
			});
		}
		showBanner(data) {
			if (
				Role.ins_.getDataByString('introduceId') > 0 &&
				GameMgr.Inst.isInGame
			) {
				console.log('新手引导内，不出banner');
				return;
			}
			if (this.bannerLock) return;
			this.bannerHandler = data.handler;
			let lf = this;
			if (!this.isFirstBanner) {
				this.createBannerAd();
			} else {
				this.isFirstBanner = false;
				this.bannerAd
					.show()
					.then(() => {
						console.log('广告显示成功');
						if (lf.bannerHandler) {
							lf.bannerHandler.run();
							lf.bannerHandler = null;
						}
					})
					.catch(err => {
						console.log('广告显示失败', err);
					});
			}
			this.bannerIsOpen = true;
			SDK.ins_.send(SDK_ORDER.YUN_ZHI_REPORT_DATA, {
				name: 'qq',
				adId: this.adConfig.bannerId,
				adType: adType.bannerAd,
				adState: adstate.show,
				typeString: 'ad'
			});
		}
		hideBanner() {
			this.bannerIsOpen = false;
			this.bannerAd.hide();
		}
		createInsetAd() {
			let lf = this;
			this.insertAd = this._qq.createInterstitialAd({
				adUnitId: lf.adConfig.interId
			});
			this.insertAd.onClose(() => {
				lf.deal.ctrInserTimer(true);
				lf.insertIsOpen = false;
			});
			this.insertAd.onError(err => {
				console.log('[qqInsert]', err);
				lf.deal.ctrInserTimer(true);
				if (lf.needBox) lf.appBoxShow(null);
			});
		}
		showInsetAd(needBox = true) {
			let lf = this;
			this.needBox = needBox;
			if (this.insertAd && !this.insertIsOpen)
				this.insertAd.load().then(() => {
					lf.insertAd.show();
					lf.insertIsOpen = true;
					lf.deal.ctrInserTimer(false);
				});
		}
		getLocation() {
			console.error('【获取地理位置授权】');
			this.deal.getLocation2();
		}
		shareGame(data) {
			this._qq.shareAppMessage({
				title: '寻找线索，逃离奶奶的恐怖小木屋~',
				// imageUrl: 'https://www.guanglunshiji.com/kbnn/qq/share.png',
				imageUrl: '',
				query: Role.ins_.openId
			});
		}
		onShareAppMessage() {
			this._qq.showShareMenu({
				withShareTicket: true
			});
			this._qq.onShareAppMessage(() => {
				return {
					title: '寻找线索，逃离奶奶的恐怖小木屋~',
					// imageUrl: 'https://www.guanglunshiji.com/kbnn/qq/share.png',
					imageUrl: '',
					query: Role.ins_.openId
				};
			});
		}
	}

	class HT_Share extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'HT_Share');
			this.platFormName = '';
			this.turnNameMaxIndex = 29;
		}
		setPlatFormName(nameString) {
			this.platFormName = nameString;
		}
		initData() {
			this.onClick(this, this.onClickIcon);
		}
		addEvent() {
			this.onClick(this, this.onClickIcon);
		}
		onClickIcon() {
			SDK.ins_.send(SDK_ORDER.SHARE_GAME, { name: this.platFormName });
		}
		upDataUI() {
			if (!this.uiData) return;
		}
	}

	class QQHt {
		constructor(deal) {
			this._qq = Laya.Browser.window.qq;
			this.videoTime = 0;
			this.stopShareAtOnce = false;
			this.needAddYinShen = false;
			this.isRecoding = false;
			this.notShare = false;
			this.deal = deal;
		}
		init() {
			if (this._qq.getSystemInfoSync().platform !== 'ios') {
				this.youLikeIcon = new TT_TurnGameIcon();
				this.youLikeIcon.setPlatFormName(this.deal.curPlatForm);
			}
			this.danMu = new DanMuView();
			this.shareGameIcon = new HT_Share();
			this.shareGameIcon.setPlatFormName(this.deal.curPlatForm);
		}
		youLikeChange(data) {
			if (this._qq.getSystemInfoSync().platform == 'ios') return;
		}
		moreGameChange(data) {
			if (this._qq.getSystemInfoSync().platform == 'ios') return;
			if (!this.moreGameIcon) {
				this.moreGameIcon = fgui.UIPackage.createObject(
					'UIPlatform',
					'Ht_maybeLike'
				);
				this.moreGameIcon.setPlatFormName(this.deal.curPlatForm);
			}
			if (data.isShow) {
				this.moreGameIcon.setStyle(data);
				this.moreGameIcon.setData();
			} else {
				this.moreGameIcon.closeThis_();
			}
		}
		barrageWordChange(data) {
			if (Role.ins_.getDataByString('introduceId') > 0) return;
			if (data.isShow) {
				if (this.danMu.visible) return;
				this.danMu.onOffDanMu(data.isShow);
				this.danMu.visible = true;
				Laya.stage.addChild(this.danMu.displayObject);
				this.danMu.displayObject.zOrder = 10;
				this.danMu.centerRandom();
			} else {
				this.danMu.onOffDanMu(data.isShow);
				this.danMu.visible = false;
				this.danMu.displayObject.removeSelf();
				this.danMu.clearTimer();
			}
		}
		jumpToGame(data) {
			if (this._qq.getSystemInfoSync().platform !== 'ios') {
				this._qq.showMoreGamesModal({
					appLaunchOptions: [
						{
							appId: 'ttXXXXXX',
							query: 'foo=bar&baz=qux',
							extraData: {}
						}
					],
					success(res) {
						console.log('success', res.errMsg);
					},
					fail(res) {
						console.log('fail', res.errMsg);
					}
				});
			}
		}
		changeShareGameIcon(data) {
			if (data.isShow) {
				this.shareGameIcon.setStyle(data);
			} else {
				this.shareGameIcon.removeFromParent();
			}
		}
	}

	class QQBaoXiang extends UIBaseComponent {
		constructor() {
			super('UIPlatform', 'QQBaoXiang');
		}
		initCom() {
			this.addNum = 20;
			this.now = 0;
			this.lock = false;
			this.progress.value = 0;
			this.random = Math.random() * 0.4 + 0.4;
			this.btn_close.x = this._view.width - 100;
			this.btn_close.y = 720 - 50;
			SpineFactory.ins_.getSkeletonByName(
				'chongneng',
				Laya.Handler.create(this, function (player) {
					this.skPlayer = player;
					this.skPlayer.play(null, true);
					this._view.displayObject.addChild(this.skPlayer.getSk());
					this.skPlayer.getSk().x =
						this.btn.x + this.btn.width / 2 - 10;
					this.skPlayer.getSk().y = this.btn.y + 50;
					this.skPlayer.getSk().mouseThrough = true;
				})
			);
		}
		addEvent() {
			this.btn_close.onClick(this, this.close);
			this.btn.onClick(this, this.clickBtn);
		}
		removEvent() {
			this.btn_close.offClick(this, this.close);
			this.btn.offClick(this, this.clickBtn);
		}
		clickBtn() {
			this.now++;
			this.progress.value = (this.now / this.addNum) * 100;
			if (!this.lock && this.now / this.addNum > this.random) {
				this.lock = true;
				this.showAd();
			}
			if (this.progress.value == 100) {
				Laya.Tween.to(
					this,
					{ scaleX: 0, scaleY: 0 },
					300,
					null,
					Laya.Handler.create(this, this.close)
				);
			}
		}
		showAd() {
			if (this.uiData.isBanner) {
				SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
					adPoint: 4,
					isShow: true,
					name: this.uiData.name,
					forceShow: true,
					handler: Laya.Handler.create(this, function () {
						Laya.timer.once(3000, this, this.clickBanner);
					})
				});
			} else {
				SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
					name: this.uiData.name,
					handler: Laya.Handler.create(this, this.clickBanner)
				});
			}
		}
		upDataUI() {
			if (!this.uiData) return;
			let lf = this;
			this.btn_close.visible = false;
			if (this.uiData.needClose) this.btn_close.visible = true;
			Laya.Browser.window[this.uiData.name].onHide(this.clickBanner);
		}
		clickBanner() {
			console.log('离开界面');
			if (!this.uiData) return;
			this.lock = true;
			Laya.timer.clearAll(this);
			if (this.uiData.isBanner) {
				SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
					isShow: false,
					name: this.uiData.name,
					adPoint: 4
				});
			}
		}
		close() {
			Laya.timer.clearAll(this);
			if (this.skPlayer) this.skPlayer.destory();
			Laya.Browser.window[this.uiData.name].offHide(this.clickBanner);
			this.destory();
			this.btn = null;
			this.progress = null;
			this.addNum = null;
			this.now = null;
			this.lock = null;
			this.random = null;
		}
	}

	class QQGm {
		constructor(deal) {
			this.qq_ = Laya.Browser.window.qq;
            this.arrYinShenText = [
				"You were found by granny, quickly get the Invisibility Cloak and hide your tracks",
				"Shh! Don't make a sound, put on the Invisibility Cloak quickly, granny won't notice you",
				"Granny found you, here is an Invisibility Cloak, put it on"
			];
			this.deal = deal;
		}
		init() {
			let lf = this;
			this.yinShenIndex = 0;
			this.getYinShenLock = false;
			this.qq_.onHide(() => {
				if (lf.baoxiangUI) {
					lf.baoxiangUI.bannerClick();
				}
			});
		}
		showPropDetail(data) {
			if (!this.propDetail) this.propDetail = new UIPropInfoDetail();
			this.propDetail.setName('qq');
			this.propDetail.setStyle(data);
			this.propDetail.upDataUI();
		}
		clickBaoXiang(data, adPoint, isBanner) {
			if (!this.baoxiangUI) {
				this.baoxiangUI = new BaoXiang();
			}
			this.baoxiangUI.setStyle(data);
			this.baoxiangUI.setData({
				name: 'qq',
				handler: data.handler,
				isBanner: isBanner
			});
		}
		showQQMainBox(data, adType, needClose) {
			if (!this.mainBaoXiang) {
				this.mainBaoXiang = new QQBaoXiang();
			}
			this.mainBaoXiang.setStyle(data);
			this.mainBaoXiang.setData({
				name: 'qq',
				isBanner: adType,
				needClose: needClose
			});
		}
		getYinShen(data) {
			if (!this.getYinshenBox) {
				this.getYinshenBox = new GetYinShenBox();
			}
			if (data.isShow != false) {
				if (this.getYinShenLock) return;
				if (MainRoleMgr.Inst.isRoleDie()) return;
				this.getYinShenLock = true;
				Laya.timer.once(60000, this, function () {
					this.getYinShenLock = false;
				});
				this.getYinshenBox.setStyle({
					parent: GameLayer.windowLayer,
					x: GameConfig.viewWidth / 2,
					y: GameConfig.viewHeight / 2
				});
				this.getYinshenBox.setData({
					name: 'qq',
					text: this.arrYinShenText[this.yinShenIndex]
				});
				this.yinShenIndex++;
				if (this.yinShenIndex >= this.arrYinShenText.length)
					this.yinShenIndex = 0;
			} else {
				this.getYinshenBox.removeFromParent();
				let uiPlaying = UISystem.Inst.GetWindowView(UIGamePlayView);
				uiPlaying.ChangeImgBlack(false, 200, null);
			}
		}
		QQCloseBtnCtr(data) {
			if (!this.qqEnIntroduceBtn) {
				this.qqEnIntroduceBtn = new QQCloseBtnCtr();
			}
			if (data.isShow) {
				this.qqEnIntroduceBtn.setStyle(data);
				this.qqEnIntroduceBtn.setData(data);
			} else {
				this.qqEnIntroduceBtn.close();
			}
		}
		changeGame(data) {
			this[data.function](data);
		}
		removeDuanTouTai(data) {
			if (
				data.resName == 'duantoutai_03' ||
				data.resName == 'duantoutai_01' ||
				data.resName == 'duantoutai_02' ||
				data.resName == 'xigua_duantoutai'
			) {
				data.sprite.active = false;
			}
			if (data.resName == 'KBNN_-1_2_2') data.sprite.active = true;
			if (data.resName == 'tuzhi_01') data.sprite.active = false;
		}
	}

	class QQDeal extends BaseDeal {
		constructor() {
			super();
			this.isFirstBeAttack = true;
			this.beAttactCount = 0;
			this.QQAd = new QQAd(this);
			this.QQHt = new QQHt(this);
			this.QQAld = new QQAld(this);
			this.QQGm = new QQGm(this);
			this.arrUI = [
				{
					url: 'ui://UIPlatform/AD_NativeBanner',
					cls: AD_NativeBanner
				},
				{
					url: 'ui://UIPlatform/AD_NativeInsert',
					cls: AD_NativeInsert
				},
				{
					url: 'ui://UIPlatform/AD_NativeImpaction',
					cls: AD_NativeImpaction
				},
				{ url: 'ui://UIPlatform/Ht_HorizBox', cls: HT_HorizBox },
				{ url: 'ui://UIPlatform/Ht_Icon', cls: HT_GameIcon },
				{ url: 'ui://UIPlatform/Ht_maybeLike', cls: HT_MoreGame },
				{ url: 'ui://UIPlatform/AD_SmallNative', cls: AD_SmallNative }
			];
			this.lockTimerInsert = false;
		}
		initPlatform(dealObj) {
			super.initPlatform(dealObj, this.arrUI);
			this.QQAd.getLocation();
			this.QQAd.init(dealObj.adData);
			this.QQHt.init();
			this.QQAld.init();
			this.QQGm.init();
		}
		onOffOnEable() {
			this.ctrInserTimer(true);
		}
		boxAdShow(data) {
			this.QQAd.appBoxShow(data);
		}
		videoChange(data) {
			this.QQAd.showRewardVideo(data);
		}
		insertChange(data) {
			let canShow;
			let adPoint = this.getAdPoint(data.adPoint);
			switch (data.adPoint) {
				case 8:
					if (!adPoint.isOn || this.isInAarea(data.adPoint)) return;
					let time = adPoint.value * 1000;
					console.error('延迟', time);
					Laya.timer.once(
						time,
						this,
						function (data) {
							this.QQAd.showInsetAd();
						},
						[data]
					);
					break;
				default:
					if (!adPoint.isOn) return;
					if (this.isInAarea(data.adPoint)) {
						return;
					}
					if (this.isFirstBeAttack && data.adPoint == 3) {
						this.isFirstBeAttack = false;
						return;
					}
					if (data.adPoint == 3) {
						this.beAttactCount++;
						canShow =
							(this.beAttactCount / 2) % 1 == 0 ? true : false;
					} else {
						let random = adPoint.value;
						canShow = Math.random() <= random;
					}
					if (canShow) {
						this.QQAd.showInsetAd();
					}
					break;
			}
		}
		bannerChange(data) {
			let adPoint = this.getAdPoint(data.adPoint);
			if (data.forceShow && data.isShow) {
				this.QQAd.showBanner(data);
				return;
			}
			Laya.timer.clear(this, this.bannerChange);
			if (!this.isInAarea(data.adPoint) && adPoint.isOn) {
				if (data.isDialog) return;
				if (data.isShow) {
					this.curBannerData = data;
					this.QQAd.showBanner(data);
					let delay = adPoint.value;
					console.error('banner延迟', delay * 1000);
					if (delay != 0)
						Laya.timer.once(delay * 1000, this, this.bannerChange, [
							this.curBannerData
						]);
				} else {
					this.QQAd.hideBanner();
				}
			} else {
				if (data.isShow) {
					if (!data.isDialog) return;
					this.QQAd.showBanner(data);
				} else {
					this.QQAd.hideBanner();
				}
			}
		}
		insertTimer(value) {
			console.log('insertTimer====>isLock', this.lockTimerInsert);
			if (!this.lockTimerInsert) {
				let adPoint16 = this.getAdPoint(16);
				if (adPoint16.isOn && !this.isInAarea(16))
					this.QQAd.showInsetAd(false);
				console.error('延迟[' + value * 1000 + ']秒  出插屏');
				Laya.timer.once(value * 1000, this, this.insertTimer, [value]);
			} else
				Laya.timer.once(value * 1000, this, this.insertTimer, [value]);
		}
		ctrInserTimer(isOpen) {
			let adPointInsert = this.getAdPoint(16);
			console.log('【timer插屏】=====》', isOpen, adPointInsert);
			if (isOpen) {
				if (adPointInsert.isOn && !this.isInAarea(16)) {
					console.log('开始insertTimer');
					Laya.timer.once(
						adPointInsert.value * 1000,
						this,
						this.insertTimer,
						[adPointInsert.value]
					);
				}
			} else {
				Laya.timer.clear(this, this.insertTimer);
			}
		}
		btnUpTween(data) {
			let adPoint = this.getAdPoint(12);
			if (!this.isInAarea(12) && adPoint.isOn) {
				let bannerPoint4 = this.getAdPoint(4);
				this.QQAd.btnUpTween(data, adPoint.value);
			}
		}
		HorizBoxChange(data) {}
		moreGameChange(data) {
			this.QQAd.moreGame(data);
		}
		gameIconChange(data) {}
		gameListBoxChange(data) {}
		jumpToGame(data) {
			this.QQHt.jumpToGame(data);
		}
		shareGame(data) {
			this.QQAd.shareGame(data);
		}
		changeShareGameIcon(data) {
			this.QQHt.changeShareGameIcon(data);
		}
		changeGetYinshen(data) {
			this.QQGm.getYinShen(data);
		}
		changeBtnEndIntroduce(data) {
			let adPoint = this.getAdPoint(15);
			if (this.isInAarea(15) || !adPoint.isOn) return;
			this.QQGm.QQCloseBtnCtr(data);
		}
		showPropDetail(data) {
			this.QQGm.showPropDetail(data);
		}
		clickBaoXiang(data) {
			let bannerShow = this.boxCanShowByTime();
			let adPoint = this.getAdPoint(data.adPoint);
			let isInBanCity = this.isInAarea(data.adPoint);
			let arrString = adPoint.value.split(',');
			let can = parseInt(
				arrString[Role.ins_.getDataByString('dayNum') - 1]
			);
			if (adPoint.isOn && !isInBanCity && can) {
				let adPointType = this.getAdPoint(13);
				this.QQGm.clickBaoXiang(data, adPoint, bannerShow);
			} else {
				if (data.handler) data.handler.run();
			}
		}
		showQQMainBox(data) {
			let bannerShow = this.boxCanShowByTime();
			let adPoint = this.getAdPoint(11);
			if (!this.isInAarea(11) && adPoint.isOn) {
				let adPointType = this.getAdPoint(13);
				let isIn = this.isInAarea(13);
				if (isIn) adPointType.value = false;
				this.QQGm.showQQMainBox(data, bannerShow, adPointType.value);
			}
		}
		YunZhiDataReport(data) {
			this.QQAld.reportData_Yun(data);
		}
		showMsg(data) {
			this.QQAd._qq.showToast({
				title: data.text,
				icon: 'none',
				duration: 1500
			});
		}
		changeGame(data) {
			this.QQGm.changeGame(data);
		}
		atlasOnLoad() {}
		boxCanShowByTime() {
			let point = this.getAdPoint(11);
			this.judgeWorkDay(point.value.work, point.value.noWork);
			let adPoint = this.getAdPoint(14);
			if (adPoint.isOn) return true;
			if (this.isWorkDay) {
				let isInTime = this.isInTime(14);
				if (isInTime) return true;
				else return false;
			} else return true;
		}
	}

	class MzAd {
		constructor(deal) {
			this.meizu_ = Laya.Browser.window.qg;
			this.videoAd = null;
			this.nativeBanner = null;
			this.bannerAd = null;
			this.insertAd = null;
			this.nativeInsertAd = null;
			this.nativeImpactionAd = null;
			this.nativeSmallAd = null;
			this.insertIsShow = false;
			this.isLoadInsert = false;
			this.listIndex = 0;
			this.smallNativeNum = 0;
			this.isUserCtr = true;
			this.closeTime = 0;
			this.deal = deal;
		}
		init(config) {
			this.adConfig = config;
			if (!this.meizu_) return;
		}
		initUICom() {}
		initRewardAd() {
			let lf = this;
			this.videoAd = this.meizu_.createRewardedVideoAd({
				adUnitId: this.adConfig.videoId
			});
			this.videoAd.onLoad(function () {
				lf.videoAd.show();
			});
			this.videoAd.onClose(res => {
				if ((res && res.isEnded) || res === undefined) {
					SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
						name: 'meizu',
						info: 'ok'
					});
				} else {
					SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
						name: 'meizu',
						info: 'notEnd'
					});
				}
			});
			this.videoAd.onError(function (err) {
				SDK.ins_.send(SDK_ORDER.AD_VIDEO_CLOSE, {
					name: 'meizu',
					info: 'noAd'
				});
			});
		}
		showRewardVideo() {
			if (!this.videoAd) {
				this.initRewardAd();
			} else {
				this.videoAd.load();
			}
		}
		createBanner() {
			let lf = this;
			var screenHeight = this.meizu_.getSystemInfoSync().screenHeight;
			var screenWidth = this.meizu_.getSystemInfoSync().screenWidth;
			this.bannerAd = this.meizu_.createBannerAd({
				adUnitId: lf.adConfig.bannerId,
				style: {
					top: 300,
					left: screenHeight - 1000 / 6.7,
					width: 1000,
					height: 1000 / 6.7
				}
			});
			this.bannerAd.onLoad(function () {
				lf.isUserCtr = false;
				lf.bannerAd.show();
				console.error('官方banner显示=====>');
			});
			this.bannerAd.onClose(function (res) {
				lf.bannerAd = null;
				lf.closeTime++;
				console.error('=====》关闭', res, lf.closeTime);
			});
			this.bannerAd.onError(function (err) {
				console.error('=====》错误', err);
			});
			this.bannerAd.onResize(res => {
				let info = this.meizu_.getSystemInfoSync();
				lf.bannerAd.style.height = res.width / 6.7;
				lf.bannerAd.style.top = info.screenHeight - res.height;
				lf.bannerAd.style.left = (info.screenWidth - res.width) / 2;
			});
		}
		showBanner(data) {
			if (data.isShow) {
				if (!this.timesCtr()) return;
				if (!this.bannerAd) {
					this.createBanner();
				}
				this.bannerAd.show();
			} else {
				this.isUserCtr = false;
				if (this.bannerAd) this.bannerAd.hide();
			}
		}
		createNativeBanner() {}
		showNativeBanner(data) {
			this.showBanner(data);
		}
		timesCtr() {
			let adPoint = this.deal.getAdPoint(12);
			if (adPoint.isOn) {
				if (this.closeTime >= adPoint.value) return false;
				else return true;
			}
			if (this.deal.isInAarea(12)) {
				if (this.closeTime >= adPoint.value) return false;
				else return true;
			} else {
				return true;
			}
		}
		reportClickBanner(adId) {}
		initInsert() {
			let lf = this;
			this.insertAd = this.meizu_.createInsertAd({
				adUnitId: this.adConfig.interId
			});
			this.insertAd.onLoad(function () {
				lf.insertIsShow = true;
				lf.insertAd.show();
				lf.isLoadInsert = false;
			});
			this.insertAd.onClose(function () {
				lf.insertIsShow = false;
				lf.isLoadInsert = false;
			});
			this.insertAd.onError(function (err) {
				lf.isLoadInsert = false;
			});
		}
		showInsertAd(data) {
			if (!this.insertAd) {
				this.initInsert();
				return;
			}
			this.insertData = data;
			this.isLoadInsert = true;
			this.insertAd.load();
		}
		showInsertAd_Native(data) {
			this.showInsertAd(data);
		}
		createNativeInsert() {}
		LoadNativeInsert(isDestory = false) {}
		showNativeInsert(data) {
			if (data.isShow) {
				if (this.nativeInsertAdData) {
					console.error('插屏上报[展示]');
					this.nativeInsertAd.reportAdShow({
						adId: this.nativeInsertAdData.adList[0].adId
					});
					this.nativeInsertAdData = null;
				} else {
					console.error(
						'[insertNative]原生无法启动--------------》插屏启动'
					);
					this.nativeInsertAdData = null;
					this.LoadNativeInsert(true);
					this.showInsertAd(this.insertData);
				}
			} else {
			}
		}
		nativeInsertStyle(data) {}
		reportClickInsert(adId) {}
		onNativeInsertClose(data) {}
		createNativeImpaction() {}
		showNativeImpaction(data) {}
		reportClickImpaction(adId) {}
		createNativeSmall() {}
		showNativeSmall(data) {}
		reportClickSmall(adId) {}
		getLocation() {
			console.error('【获取地理位置授权】');
			this.deal.getLocation2();
		}
	}

	class MzDeal extends BaseDeal {
		constructor() {
			super();
			this.isFirstBeAttack = true;
			this.beAttactCount = 0;
			this.timeCanShowBanner = false;
			this.MzAd = new MzAd(this);
			this.arrUI = [];
		}
		initPlatform(dealObj) {
			super.initPlatform(dealObj, this.arrUI);
			this.MzAd.getLocation();
			this.MzAd.init(dealObj.adData);
			let adPoint = this.getAdPoint(10);
			Laya.timer.once(adPoint.value * 1000, this, function () {
				this.timeCanShowBanner = true;
			});
		}
		videoChange(data) {
			this.MzAd.showRewardVideo();
		}
		insertChange(data) {
			let canShow;
			let adPoint = this.getAdPoint(data.adPoint);
			switch (data.adPoint) {
				case 8:
					if (this.isInAarea(data.adPoint) || !adPoint.isOn) {
						this.MzAd.showInsertAd_Native(data);
					} else {
						let time = adPoint.value * 1000;
						console.error('延迟', time);
						Laya.timer.once(
							time,
							this,
							function (data) {
								this.MzAd.showInsertAd_Native(data);
							},
							[data]
						);
					}
					break;
				default:
					if (!adPoint.isOn) return;
					if (this.isInAarea(data.adPoint)) {
						return;
					}
					if (this.isFirstBeAttack && data.adPoint == 3) {
						this.isFirstBeAttack = false;
						return;
					}
					if (data.adPoint == 3) {
						this.beAttactCount++;
						canShow =
							(this.beAttactCount / 2) % 1 == 0 ? true : false;
					} else {
						let random = adPoint.value;
						canShow = Math.random() <= random;
					}
					if (canShow) {
						this.MzAd.showInsertAd_Native(data);
					}
					break;
			}
		}
		bannerChange(data) {
			let adPoint = this.getAdPoint(data.adPoint);
			if (!this.isInAarea(data.adPoint) && adPoint.isOn) {
				if (data.isDialog) return;
				if (data.isShow) {
					Laya.timer.clear(this, this.bannerChange);
					this.curBannerData = data;
				}
				if (this.timeShowBanner()) {
					this.MzAd.showNativeBanner(data);
				}
				let delay = adPoint.value;
				console.error('banner延迟', delay * 1000);
				if (delay != 0 && data.isShow)
					Laya.timer.once(delay * 1000, this, this.bannerChange, [
						this.curBannerData
					]);
			} else {
				if (!this.timeShowBanner()) return;
				if (data.isDialog) this.MzAd.showNativeBanner(data);
			}
		}
		timeShowBanner() {
			let adPoint = this.getAdPoint(11);
			if (adPoint.isOn) {
				return this.timeCanShowBanner;
			} else {
				if (this.isInAarea(11)) {
					return this.timeCanShowBanner;
				} else return true;
			}
		}
		impactionChange(data) {
			let adPoint = this.getAdPoint(data.adPoint);
			if (this.isInAarea(data.adPoint) || !adPoint.isOn) return;
			let canShow = false;
			if (data.adPoint == 7) {
				let random = adPoint.value;
				canShow = Math.random() <= random;
			}
			if (canShow) {
				this.MzAd.showNativeImpaction(data);
			}
		}
		nativeSmallChange(data) {
			let adPoint = this.getAdPoint(data.adPoint);
			if (this.isInAarea(data.adPoint) || !adPoint.isOn) return;
			if (data.isShow) {
				let time = adPoint.value;
				Laya.timer.once(time * 1000, this, this.nativeSmallChange, [
					data
				]);
			} else {
				Laya.timer.clear(this, this.nativeSmallChange);
			}
			this.MzAd.showNativeSmall(data);
		}
		clickBanner(data) {
			this.MzAd.reportClickBanner(data.id);
		}
		clickInsert(data) {
			this.MzAd.reportClickInsert(data.id);
		}
		clickImpaction(data) {
			this.MzAd.reportClickImpaction(data.id);
		}
		onNativeInsertClose(data) {
			this.MzAd.onNativeInsertClose(data);
		}
		reportMonitor() {}
		HorizBoxChange(data) {}
		moreGameChange(data) {}
		gameIconChange(data) {}
		gameListBoxChange(data) {}
		jumpToGame(data) {}
		showMsg(data) {
			this.MzAd.meizu_.showToast({
				title: data.text,
				icon: 'none',
				duration: 1500
			});
		}
		atlasOnLoad() {
			this.MzAd.initUICom();
		}
	}

	class SDKConfig {}
	SDKConfig.SHOW_SDK_MSG = false;
	SDKConfig.LOCAL_AD_ON_OFF = false;
	SDKConfig.LOCAL_PROVINCE = null;
	SDKConfig.LOCAL_CITY = null;
	SDKConfig.LOCAL_TIME = null;
	SDKConfig.LOCAL_HOUR = null;
	SDKConfig.LOCAL_ON_OFF_TEST = null;
	SDKConfig.LOG_TEXT = false;
	SDKConfig.CLOS_WINDOW_ENATIVE_INSERT = true;
	SDKConfig.configPlateform = [
		{
			plateform: 'wx',
			deal: WxDeal,
			judge: Laya.Browser.window.wx,
			curVersion: 'version1_0_16',
			fileName: null
		},
		{
			plateform: 'oppo',
			deal: OppoDeal,
			judge: Laya.Browser.onQGMiniGame,
			curVersion: 'version2_10',
			fileName: null
		},
		{
			plateform: 'toutiao',
			deal: TTDeal,
			judge: Laya.Browser.window.tt,
			curVersion: 'version6_31',
			fileName: null
		},
		{
			plateform: 'vivo',
			deal: VivoDeal,
			judge: Laya.Browser.onVVMiniGame,
			curVersion: 'version1_15',
			fileName: null
		},
		{
			plateform: 'qq',
			deal: QQDeal,
			judge: Laya.Browser.onQQMiniGame,
			curVersion: 'version1_2_9',
			fileName: null
		},
		{
			plateform: 'meizu',
			deal: MzDeal,
			judge: Laya.Browser.window.mz_jsb,
			curVersion: 'version7_22',
			fileName: null
		}
	];
	SDKConfig.channelConf = {
		vivo: {
			name: 'vivo',
			videoId: 'bfd12e76eca7486e86145fb941170ba8',
			bannerId: '208cb0f33e3844559b50667794268197',
			interId: '1853f0c65d03425b917f6e0e347c1d7c',
			nativeId: 'cb242682e0f94f17b078510700226975',
			nativeBannerId: 'ff9b088b3d464b43b0d745f5a14e857d'
		},
		wx: {
			name: 'wx',
			videoId: 'adunit-e1290e575e59b4f1',
			bannerId: 'adunit-3ed58fe61576be35',
			interId: 'adunit-ddbaeb557015967f',
			nativeId: 'adunit-efd24c9018e8f8e4'
		},
		oppo: {
			name: 'oppo',
			videoId: '172931',
			interId: '172936',
			nativeInsertId: '172927',
			nativeBannerId: '172929',
			nativeIconId: '234119',
			openAdId: '172926',
			bannerId: '178459'
		},
		toutiao: {
			name: 'toutiao',
			videoId: '99c75n909mq3wqejix',
			bannerId: '5vqbirftlf21p8pblp',
			interId: '2ca25d0i3be94t3t6m'
		},
		qq: {
			name: 'qq',
			videoId: 'affbfb67fd490e6e927ee3b1ee7f248a',
			bannerId: '5cdfa4e7ed5aab0d0de70e4066a8f297',
			interId: '942232527244443756e90069a38c248a',
			boxId: '87fdf2ff478a660a88ab17e67e4b2ce5'
		},
		meizu: {
			name: 'meizu',
			videoId: 'xAD9UI9f',
			bannerId: '8uH6TLH1',
			interId: 'NhPxeMmi'
		}
	};

	class UIEndIntroduce extends UIBaseWindow {
		constructor() {
			super('UIEndIntroduce', 'UIEndIntroduce');
			this.btn_end1 = null;
			this.btn_end2 = null;
			this.btn_end3 = null;
			this.img_kuang = null;
			this.btn_sure = null;
			this.btn_no = null;
			this.text_Info = null;
			this.btn_lookAd = null;
			this.img_choose = null;
			this.btn_chacha = null;
			this.sureWindow = null;
			this.adIndex = null;
			this.btn_end4 = null;
			this.btn_LookVideo = null;
			this.text_info1 = null;
			this.text_info2 = null;
		}
		SetViewStruct() {
			super.SetViewStruct();
			this.viewStruct.layerType = LayerType.TYPE_ALERT;
			this.viewStruct.layout = 5;
		}
		InitUI() {
			super.InitUI();
			this.btn_ttVideo.visible = false;
			this.btn_ttClose.visible = false;
			this.btn_lookAd.visible = false;
			this.sureWindow.visible = false;
			this.text_info1.visible = false;
			this.text_info2.visible = false;
			this.btn_LookVideo.visible = false;
            this.sureWindow.getChild('aniIcon').alpha = 0;
		}
		InitData() {
			GameMgr.Inst.pauseGame();
			this.adIndex = EndIntroduceMgr.Inst.onTriggerIntroduce();
			this.updataUI();
			if (!SDKConfig.CLOS_WINDOW_ENATIVE_INSERT) {
				SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
					name: 'oppo',
					isShow: true,
					adPoint: 8,
					inStage: true
				});
				SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
					name: 'vivo',
					isShow: true,
					adPoint: 8,
					inStage: true
				});
				SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
					name: 'meizu',
					isShow: true,
					adPoint: 8,
					inStage: true
				});
				SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
					name: 'qq',
					isShow: true,
					adPoint: 8,
					inStage: true
				});
				SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
					name: 'wx',
					isShow: true,
					adPoint: 8,
					inStage: true
				});
				SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
					name: 'toutiao',
					isShow: true,
					adPoint: 8,
					inStage: true
				});
			}
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'oppo',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'meizu',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'vivo',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'wx',
				isShow: true,
				parent: this,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'toutiao',
				isShow: true,
				parent: this,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'qq',
				isShow: true,
				parent: this,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.HT_VER_LEFT_BOX, {
				isShow: true,
				name: 'wx',
				parent: this.parent,
				x: 0,
				y: (720 - 520) / 2
			});
			SDK.ins_.send(SDK_ORDER.HT_VER_RIGHT_BOX, {
				isShow: true,
				name: 'wx',
				parent: this.parent,
				x: GameConfig.viewWidth - 167,
				y: (720 - 520) / 2
			});
			let changeIndex = Role.ins_.getDataByString('changeIndex');
			if (changeIndex) {
				Role.ins_.setDataByString('endIntroduceChoose', changeIndex);
				Role.ins_.setDataByString('isSslectEnd', true);
				this.judgeEnd();
				this.aldPoint();
				EndIntroduceMgr.Inst.initConfig();
				this.adIndex = EndIntroduceMgr.Inst.onTriggerIntroduce();
				MainRoleMgr.Inst.getRoleScript().RayCheckOnOff(false);
				PropPositionMgr.Inst.ChangePostion();
				MainRoleMgr.Inst.getRoleScript().RayCheckOnOff(true);
				this.updataUI();
				Role.ins_.setDataByString('changeIndex', null);
			}
			this.btn_sureTT.visible = false;
			this.btn_refuseTT.visible = false;
			if (!Role.ins_.getDataByString('isSslectEnd')) {
				if (Laya.Browser.window.tt) {
					this.btn_sure.visible = false;
					this.btn_sureTT.visible = true;
					this.btn_refuseTT.visible = true;
				}
			}
		}
		AddListener() {
			this.btn_sure.onClick(this, this.onSure);
			this.btn_sureTT.onClick(this, this.onSure);
			this.btn_lookAd.onClick(this, this.onLookAd);
			this.btn_ttVideo.onClick(this, this.onLookAd);
			this.btn_LookVideo.onClick(this, this.onLookAd);
			this.AddEventNo();
			let chooseId = Role.ins_.getDataByString('endIntroduceChoose');
			this.btn_end1.onClick(this, this.onChooseEnd, [1]);
			this.btn_end2.onClick(this, this.onChooseEnd, [2]);
			this.btn_end3.onClick(this, this.onChooseEnd, [3]);
			this.btn_end4.onClick(this, this.onChooseEnd, [4]);
			this.sureWindow
				.getChild('btn_sure')
				.onClick(this, this.onSureWindowSure);
			this.sureWindow
				.getChild('btn_sureTT')
				.onClick(this, this.onSureWindowSure);
			this.sureWindow
				.getChild('btn_no')
				.onClick(this, this.onSureWindowNo);
			this.btn_chacha.onClick(this, this.onNo);
			this.btn_ttClose.onClick(this, this.onNo);
			this.btn_refuseTT.onClick(this, this.onNo);
            MainRoleMgr.Inst.ChangeMainRoleState(statName.stop);
            window.showUIFlag = true;
		}
		AddEventNo() {
			this.btn_no.onClick(this, this.onNo);
		}
		removeEventNo() {
			this.btn_no.offClick(this, this.onNo);
		}
		RemoveListener() {
			this.btn_end1.offClick(this, this.onChooseEnd);
			this.btn_end2.offClick(this, this.onChooseEnd);
			this.btn_end3.offClick(this, this.onChooseEnd);
			this.btn_end4.offClick(this, this.onChooseEnd);
			this.btn_sure.offClick(this, this.onSure);
			this.btn_sureTT.onClick(this, this.onSure);
			this.removeEventNo();
			this.btn_chacha.offClick(this, this.onNo);
			this.btn_ttClose.offClick(this, this.onNo);
			this.btn_refuseTT.onClick(this, this.onNo);
			this.btn_LookVideo.offClick(this, this.onLookAd);
			this.btn_ttVideo.offClick(this, this.onLookAd);
			this.btn_lookAd.offClick(this, this.onLookAd);
			this.sureWindow
				.getChild('btn_sure')
				.offClick(this, this.onSureWindowSure);
			this.sureWindow
				.getChild('btn_sureTT')
				.offClick(this, this.onSureWindowSure);
			this.sureWindow
				.getChild('btn_no')
				.offClick(this, this.onSureWindowNo);
            window.showUIFlag = false;
		}
		onChooseEnd(index) {
			if (!Role.ins_.getDataByString('isSslectEnd')) {
				Role.ins_.setDataByString('endIntroduceChoose', index);
				this.updataUI();
				if (Laya.Browser.window.tt) {
					if (index == 2) {
						this.btn_sureTT.icon = 'ui://8ekjgvgwjlb43';
						this.text_TT.visible = true;
					} else {
						this.btn_sureTT.icon = 'ui://8ekjgvgwowrilz';
						this.text_TT.visible = true;
					}
					console.log('处理按钮,', index);
				}
			} else {
				if (Role.ins_.getDataByString('endIntroduceChoose') == index)
					return;
				this.showReStartWindonw(index);
			}
		}
		showReStartWindonw(index) {
			this.sureWindow.getChild('aniIcon').alpha = 1;
			this.sureWindow.getChild('btn_sureTT').visible = false;
			if (Laya.Browser.window.tt) {
				this.sureWindow.getChild('aniIcon').alpha = 0;
				this.sureWindow.getChild('btn_sureTT').visible = true;
				this.sureWindow.getChild('btn_sure').visible = false;
			}
			this.sureWindow.getChild('txt_tip').text =
				'After switching the ending, the game will restart, please choose carefully!';
			this.sureWindow.visible = true;
			this.sureWindow
				.getChild('btn_sure')
				.offClick(this, this.onSureWindowSure);
			this.sureWindow
				.getChild('btn_sureTT')
				.offClick(this, this.onSureWindowSure);
			this.sureWindow
				.getChild('btn_no')
				.offClick(this, this.onSureWindowNo);
			this.sureWindow
				.getChild('btn_sure')
				.onClick(this, this.lookReStarVideo, [index]);
			this.sureWindow
				.getChild('btn_sureTT')
				.onClick(this, this.lookReStarVideo, [index]);
			this.sureWindow.getChild('btn_no').onClick(this, this.cancle);
		}
		lookReStarVideo(index) {
			this.reStarIndex = index;
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'wx',
				handler: Laya.Handler.create(this, this.onRestart)
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'qq',
				handler: Laya.Handler.create(this, this.onRestart)
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'vivo',
				handler: Laya.Handler.create(this, this.onRestart)
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'toutiao',
				handler: Laya.Handler.create(this, this.onRestart)
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'oppo',
				handler: Laya.Handler.create(this, this.onRestart)
			});
			SDK.ins_.send(SDK_ORDER.NO_SDK_HANDLER, {
				name: 'web',
				handler: Laya.Handler.create(this, this.onRestart, [true])
			});
		}
		onRestart(islookOver) {
			if (islookOver) {
				this.onNo();
				Role.ins_.setDataByString(
					'endIntroduceChoose',
					this.reStarIndex
				);
				GameMgr.Inst.reStart(this.reStarIndex);
			}
		}
		cancle() {
			this.sureWindow.visible = false;
		}
		onLookAd() {
			let handler = Laya.Handler.create(
				this,
				this.onAdLookOver,
				null,
				false
			);
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'oppo',
				handler: handler,
				needReplay: true
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'vivo',
				handler: handler,
				needReplay: true
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'wx',
				handler: handler,
				needReplay: true
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'meizu',
				handler: handler,
				needReplay: true
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'qq',
				handler: handler,
				needReplay: true
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_BY_PLTFORM, {
				name: 'toutiao',
				function: 'endIntroduceVideo',
				handler: handler,
				adIndex: this.adIndex
			});
			SDK.ins_.send(SDK_ORDER.NO_SDK_HANDLER, {
				name: 'web',
				handler: Laya.Handler.create(this, this.onAdLookOver, [true])
			});
		}
		onAdLookOver(isOver) {
			if (isOver) {
				SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_ENINTRODUCE, {
					name: 'wx'
				});
				SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_ENINTRODUCE, {
					name: 'oppo'
				});
				SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_ENINTRODUCE, {
					name: 'vivo'
				});
				Role.ins_.setPropByIndex('endIntroduceAdKeys', this.adIndex);
				this.updataUI();
			}
		}
		updataUI() {
			if (this.adIndex === null) return;
			this.text_Info.visible = true;
			let popupId = 1;
			let chooseId = Role.ins_.getDataByString('endIntroduceChoose');
			this.img_choose.x = this['btn_end' + chooseId].x;
			this.btn_LookVideo.visible = false;
			this.btn_lookAd.visible = false;
			this.btn_ttVideo.visible = false;
			this.btn_ttClose.visible = false;
			this.img_kuang.visible = false;
			this.btn_no.visible = false;
			this.btn_sure.visible = false;
			this.text_Info.visible = false;
			this.text_info1.visible = false;
			this.text_info2.visible = false;
			this.btnCloseHide();
			if (chooseId == 1) popupId = 2;
			if (chooseId == 2) popupId = 3;
			if (chooseId == 4) popupId = 4;
			this.text_Info.text =
				Popup.getItemByKey(popupId).txt.replace(/\\n/g, '\n') + '';
			if (Role.ins_.getDataByString('isSslectEnd')) {
				if (popupId == 4) {
					this.freeText(
						Role.ins_.getDataByString('introduceConfigId')
					);
				} else {
					let config = RandomGuideItem.getItemByKey(
						Role.ins_.getDataByString('introduceConfigId')
					);
					if (
						config.item[this.adIndex][1] == '0' ||
						Role.ins_.getDataByString('isFirstLookEAd')
					) {
						Role.ins_.setPropByIndex(
							'endIntroduceAdKeys',
							this.adIndex
						);
						Role.ins_.setDataByString('isFirstLookEAd', false);
					}
					if (!Role.ins_.needLookAdByIndex(this.adIndex)) {
						this.updataText();
					} else {
						this.setPlayIcon();
					}
				}
			} else {
				this.btn_no.visible = true;
				this.updataText();
			}
		}
		setPlayIcon() {
			this.btn_ttVideo.visible = false;
			this.btn_ttClose.visible = false;
			this.btn_ttClose.visible = true;
			this.btn_ttVideo.visible = true;
			this.btnCloseShow();
		}
		btnCloseHide() {
			this.addHandler = Laya.Handler.create(
				this,
				this.AddEventNo,
				null,
				false
			);
			this.removeHandler = Laya.Handler.create(
				this,
				this.removeEventNo,
				null,
				false
			);
			this.videoHandler = Laya.Handler.create(
				this,
				this.onAdLookOver,
				null,
				false
			);
			SDK.ins_.send(SDK_ORDER.CHANGE_CLOSE_ENINTRODUCE, {
				isShow: false,
				name: 'qq'
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_CLOSE_ENINTRODUCE, {
				isShow: false,
				name: 'wx'
			});
		}
		btnCloseShow() {
			SDK.ins_.send(SDK_ORDER.CHANGE_CLOSE_ENINTRODUCE, {
				isShow: true,
				name: 'qq',
				btn: this.btn_chacha,
				parent: this._view,
				ui: this,
				fun: this.onNo,
				x: 50 + 100,
				y: 30,
				videoHandler: this.videoHandler
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_CLOSE_ENINTRODUCE, {
				isShow: true,
				name: 'wx',
				btn: this.btn_chacha,
				parent: this._view,
				ui: this,
				fun: this.onNo,
				x: 50 + 100,
				y: 30,
				videoHandler: this.videoHandler
			});
		}
		freeText(configId) {
			this.text_Info.visible = false;
			this.img_kuang.visible = true;
			this.btn_lookAd.visible = false;
			this.btn_ttVideo.visible = false;
			this.btn_ttClose.visible = false;
			let config = RandomGuideItem.getItemByKey(
				Role.ins_.getDataByString('introduceConfigId')
			);
			this.updateFreeText(configId);
			if (Role.ins_.needLookAdByIndex(this.adIndex)) {
				this.btn_ttVideo.visible = false;
				this.btn_ttClose.visible = false;
				if (Laya.Browser.window.tt) {
					this.btn_ttVideo.visible = true;
					this.btn_ttClose.visible = true;
				} else this.btn_LookVideo.visible = true;
				if (!this.fliter) this.fliter = new Laya.BlurFilter();
				this.fliter.strength = 20;
				this.text_info2.displayObject.filters = [this.fliter];
			}
		}
		updateFreeText(configId) {
			this.btn_sure.visible = true;
			this.text_info1.visible = true;
			this.text_info2.visible = true;
			if (Role.ins_.getDataByString('isSslectEnd')) {
				this.btn_sure.x = 552;
				if (!Role.ins_.endIntroduceObj)
					Role.ins_.endIntroduceObj = new EndIntroduceObj();
				Role.ins_.endIntroduceObj.updataFree(this.adIndex);
				this.text_info1.text = Role.ins_.endIntroduceObj.headString;
				this.text_info2.text = Role.ins_.endIntroduceObj.followString;
				this.text_info2.displayObject.filters = null;
			}
		}
		updataText() {
			this.img_kuang.visible = true;
			this.btn_sure.visible = true;
			this.text_Info.visible = true;
			if (Role.ins_.getDataByString('isSslectEnd')) {
				this.btn_sure.x = 552;
				if (!Role.ins_.endIntroduceObj)
					Role.ins_.endIntroduceObj = new EndIntroduceObj();
				Role.ins_.endIntroduceObj.updata(this.adIndex);
				this.text_Info.text = Role.ins_.endIntroduceObj.textString;
			}
		}
		Reset() {}
		onSure() {
			if (!Role.ins_.getDataByString('isSslectEnd')) {
				let chooseId = Role.ins_.getDataByString('endIntroduceChoose');
				let popupId = 1;
				if (chooseId == 1) popupId = 2;
				if (chooseId == 2) popupId = 3;
				if (chooseId == 4) popupId = 4;
				this.sureWindow.getChild('txt_tip').text = Popup.getItemByKey(
					popupId + 4
				).txt.replace(/\\n/g, '\n');
				this.sureWindow.getChild('btn_sureTT').visible = false;
				if (Laya.Browser.window.tt && chooseId != 2) {
					console.log('处理视频');
					SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
						name: 'toutiao',
						handler: Laya.Handler.create(
							this,
							this.onSureWindowSure
						)
					});
					SDK.ins_.send(SDK_ORDER.NO_SDK_HANDLER, {
						name: 'web',
						handler: Laya.Handler.create(
							this,
							this.onSureWindowSure,
							[true]
						)
					});
					return;
				} else this.sureWindow.visible = true;
			} else {
				this.onNo();
			}
		}
		onSureWindowSure(isover) {
			if (!isover) return;
			Role.ins_.setDataByString('isSslectEnd', true);
			this.sureWindow.visible = false;
			this.judgeEnd();
			this.aldPoint();
			EndIntroduceMgr.Inst.initConfig();
			this.adIndex = EndIntroduceMgr.Inst.onTriggerIntroduce();
			MainRoleMgr.Inst.getRoleScript().RayCheckOnOff(false);
			PropPositionMgr.Inst.ChangePostion();
			MainRoleMgr.Inst.getRoleScript().RayCheckOnOff(true);
			this.updataUI();
			this.text_TT.visible = true;
			this.btn_sureTT.visible = false;
			this.btn_refuseTT.visible = false;
		}
		onNo() {
			UISystem.Inst.RemoveWindowView(this);
			GameMgr.Inst.contiueGame();
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'toutiao',
				isShow: false,
				adPoint: 4,
				isDialog: true
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'meizu',
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'qq',
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'qq',
				isShow: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'wx',
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'vivo',
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'oppo',
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.HT_VER_LEFT_BOX, {
				isShow: false,
				name: 'wx'
			});
			SDK.ins_.send(SDK_ORDER.HT_VER_RIGHT_BOX, {
				isShow: false,
				name: 'wx'
			});
			if (Role.ins_.getDataByString('introduceId') == -99) {
				UISystem.Inst.GetWindowView(UIGamePlayView).ChangeTipsBox(
					true,
					'Act quickly and find a way to escape!'
				);
				Role.ins_.setDataByString('introduceId', -1);
			}
			let uiplayingView = UISystem.Inst.GetWindowView(UIGamePlayView);
		}
		onSureWindowNo() {
			this.sureWindow.visible = false;
		}
		judgeEnd() {
			let choose = Role.ins_.getDataByString('endIntroduceChoose');
			if (choose == 4) {
				choose = Math.floor(1 + 3 * Math.random());
			}
			let diffcult = Role.ins_.getDifficulty() + 1;
			let hasOtherLock =
				Role.ins_.getDataByString('otherLock') == 1 ? true : false;
			if (choose == 3) {
				Role.ins_.setDataByString('introduceConfigId', 1);
				return;
			}
			if (choose == 1) {
				Role.ins_.setDataByString('introduceConfigId', 2);
				if (diffcult == 1) {
					Role.ins_.setDataByString('introduceConfigId', 4);
					if (hasOtherLock)
						Role.ins_.setDataByString('introduceConfigId', 9);
				}
				if (diffcult == 2 && hasOtherLock) {
					Role.ins_.setDataByString('introduceConfigId', 9);
				}
				if (diffcult >= 3) {
					Role.ins_.setDataByString('introduceConfigId', 5);
					if (hasOtherLock)
						Role.ins_.setDataByString('introduceConfigId', 7);
				}
			}
			if (choose == 2) {
				Role.ins_.setDataByString('introduceConfigId', 3);
				if (diffcult == 1) {
					Role.ins_.setDataByString('introduceConfigId', 4);
					if (hasOtherLock)
						Role.ins_.setDataByString('introduceConfigId', 10);
				}
				if (diffcult == 2 && hasOtherLock) {
					Role.ins_.setDataByString('introduceConfigId', 10);
				}
				if (diffcult >= 3) {
					Role.ins_.setDataByString('introduceConfigId', 6);
					if (hasOtherLock)
						Role.ins_.setDataByString('introduceConfigId', 8);
				}
			}
		}
		aldPoint() {
			let chooseId = Role.ins_.getDataByString('endIntroduceChoose');
			let popupId = 1;
			if (chooseId == 1) popupId = 2;
			if (chooseId == 2) popupId = 3;
			SDK.ins_.send(SDK_ORDER.ALD_SEND_EVENT, {
				name: 'wx',
				eventName: '观看线索视频',
				arg: {
					结局id: Role.ins_.getDataByString('introduceConfigId'),
					选择结局: Popup.getItemByKey(popupId + 3).txt
				}
			});
		}
	}
	class EndIntroduceObj {
		constructor() {}
		updata(adIndex) {
			let config = RandomGuideItem.getItemByKey(
				Role.ins_.getDataByString('introduceConfigId')
			);
			let arr_string = config.txt[adIndex].split('#');
			if (arr_string.length > 1) {
				let stringPostion = PropPositionMgr.Inst.getPropPosition(
					parseInt(config.item[adIndex][0])
				).config.txt;
				this.textString =
					arr_string[0].replace(/\\n/g, '\n') +
					'' +
					stringPostion +
					arr_string[1].replace(/\\n/g, '\n');
			} else {
				this.textString = arr_string[0].replace(/\\n/g, '\n');
			}
		}
		updataFree(adIndex) {
			let config = RandomGuideItem.getItemByKey(
				Role.ins_.getDataByString('introduceConfigId')
			);
			this.headString = config.starttxt[adIndex];
			let arr_followString = config.vaguetxt[adIndex].split('#');
			if (arr_followString.length > 1) {
				let stringPostion = PropPositionMgr.Inst.getPropPosition(
					parseInt(config.item[adIndex][0])
				).config.txt;
				this.followString =
					arr_followString[0].replace(/\\n/g, '\n') +
					'' +
					stringPostion +
					arr_followString[1].replace(/\\n/g, '\n');
			} else {
				this.followString = arr_followString[0].replace(/\\n/g, '\n');
			}
		}
	}

	class GameMgr {
		constructor() {
			this.num = 0;
			this.isInGame = false;
			this.isPauseGame = false;
		}
		static get Inst() {
			if (!this._inst) {
				this._inst = new GameMgr();
			}
			return this._inst;
		}
		gameStart() {
			SceneMgr.Inst.gotoScene();
			UISystem.Inst.CreateWindowView(UIDayView);
			PropPositionMgr.Inst.mgrInit();
			PropMgr.Inst.GM_Open(true);
			SoundMgr.Inst.playSound(27);
			this.gameSettingActive();
			PropPositionMgr.Inst.createChotiProp();
			this.time = 0;
			this.timer(true);
			SDK.ins_.send(SDK_ORDER.CHANGE_FOUND_AWARD, {
				name: 'oppo',
				sbol: 'timeRun'
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_FOUND_AWARD, {
				name: 'wx',
				sbol: 'timeRun'
			});
		}
		gameSettingActive() {
			let diffcult = Role.ins_.getDifficulty();
			BuffModel.Inst.AddBuff(diffcult + 10);
			if (Role.ins_.getGearStatus('NightMare')) {
				BuffModel.Inst.AddBuff(BuffModel.BUFFID_15);
			}
			if (diffcult >= 2 && !Role.ins_.getDataByString('isLoadGame'))
				Role.ins_.setProp(14, 'bigDoorKeys', 0, false);
		}
		gameReadyOver() {
			this.isPauseGame = false;
			this.num++;
			SoundMgr.Inst.stopMusic();
			SoundMgr.Inst.playMusic(2);
			if (this.num <= 1) return;
			MainRoleMgr.Inst.CreatMainRole();
			PropMgr.Inst.timerCtl(true);
			PropMgr.Inst.propLoadReady();
			if (Role.ins_.getDataByString('isLoadGame')) {
				MainRoleMgr.Inst.getFromStorage();
			} else {
				MainRoleMgr.Inst.ChangeMainRoleState(statName.getUp);
				Laya.timer.once(6300, this, function () {
					PropMgr.Inst.startDicTest = false;
					console.error('【矩形范围关闭】');
				});
			}
			SceneMgr.Inst.AddNbnn();
			MainRoleMgr.Inst.getRoleScript().coliderScript.enabled = true;
			if (Role.ins_.getDataByString('isLoadGame')) {
				Laya.timer.once(200, this, function () {
					SceneMgr.Inst.GetKbnnScript().kbnnActive();
					MainRoleMgr.Inst.delaySetStatus();
				});
				PropMgr.Inst.startDicTest = false;
				Role.ins_.setDataByString('isLoadGame', null);
			}
			this.UIAction();
			this.isInGame = true;
		}
		UIAction() {
			GameLayer.sceneLayer.visible = true;
			UISystem.Inst.RemoveWindowClass(UILoadingView);
			UISystem.Inst.GetWindowView(UIDayView).countTimer();
		}
		nextDay() {
			MainRoleMgr.Inst.role.roleData.dayNum++;
			if (Role.ins_.getDayNum() > Role.ins_.roleData.dayMax) {
				this.failGameAni();
				// SDK.ins_.send(SDK_ORDER.BARRAGE_WRODS_Change, {
				// 	name: 'toutiao',
				// 	isShow: false
				// });
				return;
			}
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeInjuredSpine(
				false,
				false
			);
			MainRoleMgr.Inst.timerCtl(false);
			GameEventMgr.Inst.sendEvent([EventName.ZHI_ZHU], { stop: true });
			SceneMgr.Inst.GetKbnnScript().Reset();
			SceneMgr.Inst.destoryKbnn();
			MainRoleMgr.Inst.ChangeMainRoleState(statName.NextDay);
			SoundMgr.Inst.playSound(13);
			PropMgr.Inst.timerCtl(true);
		}
		failGameAni() {
			Laya.MouseManager.enabled = false;
			GameEventMgr.Inst.sendEvent([EventName.FAIL_GAME_ANI]);
		}
		winGameAni(winId) {
            UISystem.Inst.GetWindowView(UIGamePlayView).ChangeWinStatus();
			Role.ins_.setRoleRank(winId, this.time);
			SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
				name: 'toutiao',
				symReco: 'stop'
			});
			SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
				name: 'toutiao',
				symReco: 'showWindow',
				isShow: true,
				type: 'Successful'
			});
			this.gameWinHandler(winId);
		}
		gameWinHandler(winId) {
			if (winId == null) {
				if (Role.ins_.getDifficulty() == 0) winId = 2;
				else {
					if (Role.ins_.isActiveProp('gostEventKeys')) winId = 1;
					else winId = 3;
				}
			}
			Role.ins_.RoleChangeStatLock = true;
			GameEventMgr.Inst.sendEvent([EventName.WIN_GAME_ANI], {
				id: winId
			});
			SDK.ins_.send(SDK_ORDER.ALD_SEND_EVENT, {
				name: 'wx',
				eventName: 'Game Complete',
				arg: { 通关id: winId }
			});
		}
		GameFail() {
			this.clearGame();
			this.timer(false);
			SDK.ins_.send(SDK_ORDER.HT_VER_LEFT_BOX, {
				isShow: false,
				name: 'wx'
			});
			SDK.ins_.send(SDK_ORDER.HT_VER_RIGHT_BOX, {
				isShow: false,
				name: 'wx'
			});
		}
		gameWin() {
			this.clearGame();
			this.timer(false);
		}
		pauseGame() {
			if (!this.isInGame) return;
			console.log('----游戏暂停----');
			if (!SceneMgr.Inst.GetKbnnScript()) return;
			if (!SceneMgr.Inst.GetKbnnScript().getStateMachine()) return;
			MainRoleMgr.Inst.getRoleScript().RayCheckOnOff(false);
			PropMgr.Inst.timerCtl(false);
			SceneMgr.Inst.GetKbnnScript().Pause();
			this.isPauseGame = true;
		}
		contiueGame() {
			if (!this.isInGame) return;
			console.log('----游戏继续----');
			this.isPauseGame = false;
			if (!SceneMgr.Inst.GetKbnnScript().getStateMachine()) return;
			MainRoleMgr.Inst.getRoleScript().RayCheckOnOff(true);
			PropMgr.Inst.timerCtl(true);
			SceneMgr.Inst.GetKbnnScript().Resume();
		}
		reStart(selectIndex) {
			this.clearGame(false);
			Role.ins_.setDataByString('isLoadGame', false);
			Role.ins_.setDataByString('changeIndex', selectIndex);
			GameMgr.Inst.gameStart();
		}
		clearGame(needBackMain = true) {
			if (Role.ins_.getDataByString('introduceId') > 0) {
				Role.ins_.setDataByString('introduceId', -100);
				GameEventMgr.Inst.introduceMgr.exit(false);
			}
			SceneMgr.Inst.GetKbnnScript().SetStateMachine(null);
			MainRoleMgr.Inst.timerCtl(false);
			PropMgr.Inst.timerCtl(false);
			UISystem.Inst.RemoveWindowClass(UIEndIntroduce);
			GameEventMgr.Inst.sendEvent([EventName.CLEAR_TIMER]);
			PropMgr.Inst.destoryProp();
			PropPositionMgr.Inst.clearMgr();
			MainRoleMgr.Inst.destroyRole();
			SceneMgr.Inst.destoryScene();
			UISystem.Inst.RemoveWindowView(
				UISystem.Inst.GetWindowView(UIGamePlayView)
			);
			Role.ins_.reSet();
			if (needBackMain) {
				SceneMgr.Inst.BackMainView();
				this.isInGame = false;
				SDK.ins_.send(SDK_ORDER.CHANGE_FOUND_AWARD, {
					name: 'oppo',
					sbol: 'timeClear'
				});
				SDK.ins_.send(SDK_ORDER.CHANGE_FOUND_AWARD, {
					name: 'wx',
					sbol: 'timeClear'
				});
			}
			Laya.MouseManager.enabled = true;
			SoundMgr.Inst.stopMusic();
			SoundMgr.Inst.playMusic(1);
		}
		timer(onOff) {
			if (onOff) {
				Laya.timer.loop(1000, this, this.countTime);
			} else {
				Laya.timer.clear(this, this.countTime);
			}
		}
		countTime() {
			this.time++;
		}
	}

	class UIHelpView extends UIBaseWindow {
		constructor() {
			super('UIHelpTipView', 'UIHelpTipView');
			this.btn_continue = null;
			this.bg = null;
			this.n2 = null;
			this.tip1 = null;
			this.tip2 = null;
		}
		SetViewStruct() {
			super.SetViewStruct();
			this.viewStruct.layerType = LayerType.TYPE_MAIN;
			this.viewStruct.layout = 5;
		}
		InitUI() {
			this.tip1.text = GametxtResource.getItemByKey(1).GameStory.replace(
				/\\n/g,
				'\n'
			);
			this.tip2.text = GametxtResource.getItemByKey(2).GameStory.replace(
				/\\n/g,
				'\n'
			);
			SDK.ins_.send(SDK_ORDER.HT_MORE_GAME_ISSHOW, {
				isShow: true,
				name: 'qq',
				parent: this,
				x: this.btn_continue.x + 250,
				y: this.btn_continue.y
			});
			SDK.ins_.send(SDK_ORDER.HT_HORIZ_BOX_ISSHOW, {
				isShow: true,
				name: 'wx',
				x: -(GameConfig.viewWidth - 1280) / 2 - 413,
				y: 0,
				parent: this
			});
			SDK.ins_.send(SDK_ORDER.HT_HORIZ_BOX_ISSHOW, {
				isShow: true,
				name: 'oppo',
				x: -(GameConfig.viewWidth - 1280) / 2 - 413,
				y: 0,
				parent: this
			});
			SDK.ins_.send(SDK_ORDER.HT_HORIZ_BOX_ISSHOW, {
				isShow: true,
				name: 'vivo',
				x: -(GameConfig.viewWidth - 1280) / 2 - 413,
				y: 0,
				parent: this
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'oppo',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'vivo',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'meizu',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'toutiao',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'qq',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'wx',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
			this.createClear();
			SDK.ins_.send(SDK_ORDER.AD_OV_SUPRISEDBOX_NATIVE, {
				name: 'oppo',
				parent: this
			});
		}
		AddListener() {
			this.btn_continue.onClick(this, this.onBtnContinueClick);
		}
		RemoveListener() {
			this.btn_continue.offClick(this, this.onBtnContinueClick);
		}
		onBtnContinueClick() {
			// SDK.ins_.send(SDK_ORDER.HT_HORIZ_BOX_ISSHOW, {
			// 	isShow: false,
			// 	name: 'wx'
			// });
			// SDK.ins_.send(SDK_ORDER.HT_HORIZ_BOX_ISSHOW, {
			// 	isShow: false,
			// 	name: 'oppo'
			// });
			// SDK.ins_.send(SDK_ORDER.ALD_SEND_EVENT, {
			// 	name: 'wx',
			// 	eventName: 'Click "Continue" on the Select page'
			// });
            YYGGames.showInterstitial(()=>{
                Role.ins_.setDataByString('isLoadGame', false);
                GameMgr.Inst.gameStart();
                this.sprite.removeSelf();
                this.sprite.destroy();
            });
			// SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
			// 	name: 'qq',
			// 	isShow: false,
			// 	adPoint: 4
			// });
			// SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
			// 	name: 'meizu',
			// 	isShow: false,
			// 	adPoint: 4
			// });
			// SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
			// 	isShow: false,
			// 	name: 'vivo'
			// });
		}
		createClear() {
			this.sprite = new Laya.Sprite();
			this.sprite.width = 100;
			this.sprite.height = 20;
			this.sprite.x = GameConfig.viewWidth / 2;
			Laya.stage.addChild(this.sprite);
			this.num = 0;
			this.sprite.on(Laya.Event.CLICK, this, this.clearClick);
		}
		clearClick() {
			this.num++;
			if (this.num == 5) {
				localStorage.clear();
				console.error('清除');
			}
		}
		onResize() {
			// super.onResize();
			// this.bg.x = -this.x;
			// this.bg.y = -this.y;
			// this.bg.height = GameConfig.viewHeight;
			// this.bg.width = GameConfig.viewWidth;
		}
	}

	class UIGameSettingView extends UIBaseWindow {
		constructor() {
			super('UIGameSettingView', 'UIGameSetting');
			this.btn_isDark = null;
			this.btn_isHaveLock = null;
			this.btn_isHaveMusic = null;
			this.btn_isNightmare = null;
			this.btn_diffculty1 = null;
			this.btn_diffculty2 = null;
			this.btn_diffculty3 = null;
			this.btn_diffculty4 = null;
			this.btn_diffculty5 = null;
			this.quality = null;
			this.bottomtext = null;
			this.btn_continue = null;
			this.dif_introduce = null;
			this.difficulttext = null;
			this.bg = null;
			this.btnsbg = null;
			this.textkuang = null;
			this.title = null;
			this.difficulimg = null;
			this.qualityimg = null;
			this.diffcultString = '';
			this.drakString = '';
			this.lockString = '';
			this.musicString = '';
			this.eMengString = '';

            window.bottomtext = this.bottomtext;
            window.title = this.title;
            window.difficulttext = this.difficulttext;
            window.dif_introduce = this.dif_introduce;
		}
		SetViewStruct() {
			super.SetViewStruct();
			this.viewStruct.layerType = LayerType.TYPE_MAIN;
			this.viewStruct.layout = 5;
		}
		InitUI() {
			for (let i = 1; i <= 5; i++) {
				this['btn_diffculty' + i].selected = false;
				if (Role.ins_.getDifficulty() + 1 == i)
					this['btn_diffculty' + i].selected = true;
			}
			this.btn_isDark.selected = StorageUtils.Inst.GetSelectDark();
			this.btn_isHaveLock.selected = StorageUtils.Inst.GetHaveExtraLock();
			this.btn_isHaveMusic.selected = StorageUtils.Inst.GetMusic();
			this.btn_isNightmare.selected = StorageUtils.Inst.GetIsNightMare();
			this.quality.selectedIndex = 1;
			this.quality.selectedIndex = StorageUtils.Inst.GetImageQuality();
			var hard = HardResource.getItemByKey(Role.ins_.getDifficulty() + 1);
			this.difficulttext.text = hard.name;
			this.diffcultString = hard.HardTxt;
			this.drakString = '';
			this.musicString = SetupResource.getItemByKey(3).Txt;
			this.lockString = '';
			this.eMengString = '';
			this.bottomtext.text = hard.introduce;
			this.updateTextString();
			SDK.ins_.send(SDK_ORDER.HT_MORE_GAME_ISSHOW, {
				isShow: true,
				name: 'qq',
				parent: this,
				x: this.btn_continue.x + 50,
				y: this.btn_continue.y - 150
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'oppo',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'vivo',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'meizu',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'toutiao',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'qq',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'wx',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.HT_HORIZ_BOX_ISSHOW, {
				isShow: true,
				name: 'wx',
				x: -(GameConfig.viewWidth - 1280) / 2 - 413,
				y: 0,
				parent: this
			});
			SDK.ins_.send(SDK_ORDER.HT_HORIZ_BOX_ISSHOW, {
				isShow: true,
				name: 'oppo',
				x: -(GameConfig.viewWidth - 1280) / 2 - 413,
				y: 0,
				parent: this
			});
			SDK.ins_.send(SDK_ORDER.HT_HORIZ_BOX_ISSHOW, {
				isShow: true,
				name: 'vivo',
				x: -(GameConfig.viewWidth - 1280) / 2 - 413,
				y: 0,
				parent: this
			});
			SDK.ins_.send(SDK_ORDER.HT_ICON_SETTING_BOX, {
				isShow: true,
				name: 'wx',
				parent: this,
				x: GameConfig.viewWidth - (1334 - 1067),
				y: 307
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'wx',
				isShow: true,
				adPoint: 3
			});
		}
		InitData() {
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'oppo',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'vivo',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'qq',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'meizu',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'wx',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
		}
		AddListener() {
			this.btn_continue.onClick(this, this.onBtnContinueClick);
			this.btn_isDark.onClick(this, this.onBtnDarkSelectClick);
			this.btn_isHaveLock.onClick(this, this.onBtnHaveLockClick);
			this.btn_isHaveMusic.onClick(this, this.onBtnMusicClick);
			this.btn_isNightmare.onClick(this, this.onBtnNightMareClick);
			this.btn_diffculty1.onClick(this, this.ChangeDifficulty, [1]);
			this.btn_diffculty2.onClick(this, this.ChangeDifficulty, [2]);
			this.btn_diffculty3.onClick(this, this.ChangeDifficulty, [3]);
			this.btn_diffculty4.onClick(this, this.ChangeDifficulty, [4]);
			this.btn_diffculty5.onClick(this, this.ChangeDifficulty, [5]);
			this.quality.on(
				fgui.Events.STATE_CHANGED,
				this,
				this.ChangeImageQuality
			);
		}
		RemoveListener() {
			this.btn_continue.offClick(this, this.onBtnContinueClick);
			this.btn_isDark.offClick(this, this.onBtnDarkSelectClick);
			this.btn_isHaveLock.offClick(this, this.onBtnHaveLockClick);
			this.btn_isHaveMusic.offClick(this, this.onBtnMusicClick);
			this.btn_isNightmare.offClick(this, this.onBtnNightMareClick);
			this.btn_diffculty1.offClick(this, this.ChangeDifficulty);
			this.btn_diffculty2.offClick(this, this.ChangeDifficulty);
			this.btn_diffculty3.offClick(this, this.ChangeDifficulty);
			this.btn_diffculty4.offClick(this, this.ChangeDifficulty);
			this.btn_diffculty5.offClick(this, this.ChangeDifficulty);
			this.quality.off(
				fgui.Events.STATE_CHANGED,
				this,
				this.ChangeImageQuality
			);
		}
		onBtnDarkSelectClick() {
			this.drakString = '';
			if (this.btn_isDark.selected) {
				Role.ins_.setStatus(1, 'drakGame');
				this.drakString = SetupResource.getItemByKey(1).Txt;
			} else {
				Role.ins_.setStatus(0, 'drakGame');
			}
			this.updateTextString();
		}
		onBtnHaveLockClick() {
			this.lockString = '';
			if (this.btn_isHaveLock.selected) {
				Role.ins_.setStatus(1, 'otherLock');
				Role.ins_.setProp(13, 'bigDoorKeys', 0, false);
				this.lockString = SetupResource.getItemByKey(2).Txt;
			} else {
				Role.ins_.setProp(13, 'bigDoorKeys', 1, false);
				Role.ins_.setStatus(0, 'otherLock');
			}
			this.updateTextString();
		}
		onBtnMusicClick() {
			this.musicString = '';
			if (this.btn_isHaveMusic.selected)
				this.musicString = SetupResource.getItemByKey(3).Txt;
			Role.ins_.needBackMusic(this.btn_isHaveMusic.selected);
			this.updateTextString();
		}
		onBtnNightMareClick() {
			this.eMengString = '';
			if (this.btn_isNightmare.selected)
				this.eMengString = SetupResource.getItemByKey(4).Txt;
			if (this.btn_isNightmare.selected)
				Role.ins_.setStatus(1, 'NightMare');
			else Role.ins_.setStatus(0, 'NightMare');
			this.updateTextString();
		}
		onBtnContinueClick() {
            YYGGames.showInterstitial(()=>{
                UISystem.Inst.CreateWindowView(UIHelpView);
            });
			// SDK.ins_.send(SDK_ORDER.HT_HORIZ_BOX_ISSHOW, {
			// 	isShow: false,
			// 	name: 'wx'
			// });
			// SDK.ins_.send(SDK_ORDER.HT_HORIZ_BOX_ISSHOW, {
			// 	isShow: false,
			// 	name: 'oppo'
			// });
			// SDK.ins_.send(SDK_ORDER.ALD_SEND_EVENT, {
			// 	name: 'wx',
			// 	eventName: 'Click "Continue" on the Select page'
			// });
			// SDK.ins_.send(SDK_ORDER.HT_ICON_SETTING_BOX, {
			// 	isShow: false,
			// 	name: 'wx'
			// });
		}
		ChangeImageQuality() {
			StorageUtils.Inst.SetImageQuality(this.quality.selectedIndex);
		}
		ChangeDifficulty(index) {
			Role.ins_.SetDifficulty(index - 1);
			for (let i = 1; i <= 5; i++) {
				this['btn_diffculty' + i].selected = false;
				if (Role.ins_.getDifficulty() + 1 == i)
					this['btn_diffculty' + i].selected = true;
			}
			var hard = HardResource.getItemByKey(index);
			this.difficulttext.text = hard.name;
			this.bottomtext.text = hard.introduce;
			this.diffcultString = hard.HardTxt;
			this.updateTextString();
		}
		updateTextString() {
			let string = this.diffcultString.replace(/\\n/g, '\n');
			this.dif_introduce.text =
				string +
				'\n' +
                '\n' +
				this.drakString +
				this.lockString +
				this.musicString +
				this.eMengString;
		}
		onResize() {
			// super.onResize();
			// this.bg.x = -this.x;
			// this.bg.y = -this.y;
			// this.bg.height = GameConfig.viewHeight;
			// this.bg.width = GameConfig.viewWidth;
		}
	}

	class UIRankItem extends UIBaseWindow {
		constructor() {
			super();
		}
		constructFromXML(xml) {
			super.constructFromXML(xml);
			FairyUtils.setVar(this, this);
		}
		updata(data, objme) {
			if (data.self) {
				data.name = 'Me';
				data.imgUrl = '';
				data.time = objme.time;
				data.rank = objme.index;
			}
			let string = '';
			this.testRank.font = 'ui://vf2p2s6mxet232';
			let hardText = HardResource.getItemByKey(data.diff).name;
			this.itemMe.visible = data.self;
			this.testRank.text = data.rank + string;
			if (data.rank == 1) this.testRank.text = 'a';
			if (data.rank == 2) this.testRank.text = 'b';
			if (data.rank == 3) this.testRank.text = 'c';
			this.text_name.text = data.name;
			this.text_time.text = TimeUtil.formatToMS(data.time);
			this.text_diff.text = hardText;
			this.loader_head.url = 'ui://UIMainView/' + data.imgUrl;
			this.loader_head.visible = true;
		}
	}

	class UIRankView extends UIBaseWindow {
		constructor() {
			super('UIMainView', 'UIRank');
			this.select = 'common';
		}
		SetViewStruct() {
			super.SetViewStruct();
			this.viewStruct.layerType = LayerType.TYPE_TOP;
			this.viewStruct.layout = 5;
		}
		registerClasses() {
			fgui.UIObjectFactory.setPackageItemExtension(
				'ui://UIMainView/UIRankItem',
				UIRankItem
			);
		}
		InitUI() {
			this.btn_carOff.visible = false;
			this.btn_carOn.visible = false;
			this.btn_commonOff.visible = false;
			this.btn_commonOn.visible = false;
			this.btn_bestOff.visible = false;
			this.btn_bestOn.visible = false;
			this.list_rank.itemRenderer = Laya.Handler.create(
				this,
				this.RenderListItem,
				null,
				false
			);
			this.list_rank.setVirtual();
			this.onChange('btn_commonOn');
		}
		AddListener() {
			this.btn_carOff.onClick(this, this.onChange, ['btn_carOn']);
			this.btn_commonOff.onClick(this, this.onChange, ['btn_commonOn']);
			this.btn_bestOff.onClick(this, this.onChange, ['btn_bestOn']);
			this.btn_Close.onClick(this, this.onCloseWindow);
			this.btn_Close2.onClick(this, this.onCloseWindow);
		}
		RemoveListener() {
			this.btn_carOff.offClick(this, this.onChange);
			this.btn_commonOff.offClick(this, this.onChange);
			this.btn_bestOff.offClick(this, this.onChange);
			this.btn_Close.offClick(this, this.onCloseWindow);
			this.btn_Close2.offClick(this, this.onCloseWindow);
		}
		onCloseWindow() {
			UISystem.Inst.RemoveWindowView(this);
		}
		onChange(btn_string) {
			this.btn_carOff.visible = true;
			this.btn_carOn.visible = false;
			this.btn_commonOff.visible = true;
			this.btn_commonOn.visible = false;
			this.btn_bestOff.visible = true;
			this.btn_bestOn.visible = false;
			this[btn_string].visible = true;
			if (btn_string == 'btn_commonOn') this.select = 'common';
			if (btn_string == 'btn_carOn') this.select = 'car';
			if (btn_string == 'btn_bestOn') this.select = 'best';
			this.myRank = Role.ins_.getDataByString(this.select + 'RoleRank');
			this.updataList();
		}
		updataList() {
			if (!this.myRank) this.btn_myRankTxt.text = 'Not cleared, no ranking yet';
			else {
				this.btn_myRankTxt.text = this.myRank.index + '';
				this.text_myRank.font = 'ui://vf2p2s6mxet232';
				this.text_myRank.text = this.myRank.index + '';
				if (this.myRank.index == 1) this.text_myRank.text = 'a';
				if (this.myRank.index == 2) this.text_myRank.text = 'b';
				if (this.myRank.index == 3) this.text_myRank.text = 'c';
				this.lab_diff.text = HardResource.getItemByKey(
					this.myRank.diff
				).name;
				this.lab_time.text = TimeUtil.formatToMS(this.myRank.time);
			}
			this.list_rank.numItems = 10;
		}
		RenderListItem(index, obj) {
			let self = false;
			let upIndex = 30;
			if (this.myRank) {
				if (this.myRank.index == this.myRank.upIndex + index)
					self = true;
				if (this.myRank.index < this.myRank.upIndex + index) index -= 1;
				upIndex = this.myRank.upIndex;
			}
			let Irank = Role.ins_.getRankIndex(upIndex + index, this.select);
			let objItem = {
				self: self,
				rank: Irank.index,
				name: Irank.name,
				diff: Irank.diff,
				imgUrl: Irank.url,
				time: Irank.time
			};
			obj.updata(objItem, this.myRank);
		}
	}

	class UIGameMainView extends UIBaseWindow {
		constructor() {
			super('UIMainView', 'UIMainView');
			this.btn_start = null;
			this.btn_readsave = null;
			this.bg = null;
			this.green_bg = null;
			this.log = null;
			this.green_logo = null;
			this.btn_ok = null;
			this.img_kuang = null;
			this.img_tipBg = null;
			// this.btn_rank = null;
			this.img_logo_tt = null;
			this.tt_Logo = null;
			this.img_oppoIcon = null;
		}
		SetViewStruct() {
			super.SetViewStruct();
			this.viewStruct.layerType = LayerType.TYPE_MAIN;
			this.viewStruct.layout = 5;
		}
		AddListener() {
			this.btn_ok.onClick(this, this.hideTip);
			this.btn_start.onClick(this, this.onBtnPlayClick);
			this.btn_readsave.onClick(this, this.onBtnArchiveClick);
			// this.btn_rank.onClick(this, this.onBtnRank);
		}
		RemoveListener() {
			this.btn_ok.offClick(this, this.hideTip);
			// this.btn_rank.offClick(this, this.onBtnRank);
			this.btn_start.offClick(this, this.onBtnPlayClick);
			this.btn_readsave.offClick(this, this.onBtnArchiveClick);
		}
		InitUI() {
			this.img_logo_tt.visible = false;
			UISystem.Inst.RemoveWindowClass(UILoadingView);
			if (!this.stk) {
				this.stk = new SkeletonAnimation();
				this.addChild(this.stk);
				this.stk.x = this.bg.width / 2;
				this.stk.y = this.bg.height / 2;
			}
            
			// SDK.ins_.send(SDK_ORDER.HT_HORIZ_BOX_ISSHOW, {
			// 	isShow: true,
			// 	name: 'wx',
			// 	x: -(GameConfig.viewWidth - 1280) / 2 - 413,
			// 	y: 0,
			// 	parent: this
			// });
			// SDK.ins_.send(SDK_ORDER.HT_VER_LEFT_BOX, {
			// 	isShow: true,
			// 	name: 'wx',
			// 	parent: this,
			// 	x: 0,
			// 	y: (720 - 520) / 2
			// });
			// SDK.ins_.send(SDK_ORDER.HT_MORE_GAME_ISSHOW, {
			// 	isShow: true,
			// 	name: 'qq',
			// 	parent: this,
			// 	x: this.btn_start.x - 150,
			// 	y: this.btn_start.y - 30
			// });
			// SDK.ins_.send(SDK_ORDER.HT_HORIZ_BOX_ISSHOW, {
			// 	isShow: true,
			// 	name: 'oppo',
			// 	x: -(GameConfig.viewWidth - 1280) / 2 - 413,
			// 	y: 0,
			// 	parent: this
			// });
			// SDK.ins_.send(SDK_ORDER.HT_HORIZ_BOX_ISSHOW, {
			// 	isShow: true,
			// 	name: 'vivo',
			// 	x: -(GameConfig.viewWidth - 1280) / 2 - 413,
			// 	y: 0,
			// 	parent: this
			// });
			// SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
			// 	name: 'oppo',
			// 	isShow: true,
			// 	parent: this,
			// 	x: GameConfig.viewWidth / 2,
			// 	y: 720,
			// 	adPoint: 4
			// });
			// SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
			// 	name: 'vivo',
			// 	isShow: true,
			// 	parent: this,
			// 	x: GameConfig.viewWidth / 2,
			// 	y: 720,
			// 	adPoint: 4
			// });
			// SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
			// 	name: 'toutiao',
			// 	isShow: true,
			// 	parent: this,
			// 	x: GameConfig.viewWidth / 2,
			// 	y: 720,
			// 	adPoint: 4
			// });
			// SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
			// 	name: 'meizu',
			// 	isShow: true,
			// 	parent: this,
			// 	x: GameConfig.viewWidth / 2,
			// 	y: 720,
			// 	adPoint: 4
			// });
			// SDK.ins_.send(SDK_ORDER.REPORT_MONITOR, { name: 'oppo' });
			this.btn_readsave.visible = false;
			this.img_kuang.visible = false;
			this.btn_ok.visible = false;
			this.img_tipBg.visible = false;
			let obj = localStorage.getItem('gameData');
			if (obj) obj = JSON.parse(obj);
			if (!obj.isShowHealthTip) {
				GameData.ins_.setGameData('isShowHealthTip', true);
			}
			this.green_bg.visible = false;
			this.green_logo.visible = false;
			this.tt_Logo.visible = false;
			if (Laya.Browser.window.wx) {
				this.green_bg.visible = true;
				this.green_logo.visible = true;
			}
			if (Laya.Browser.window.tt) {
				this.log.visible = false;
				this.green_logo.visible = false;
				this.tt_Logo.visible = true;
				this.green_bg.visible = true;
			}
			this.img_oppoIcon.visible = false;
			if (Laya.Browser.onQGMiniGame) {
			}
			Role.ins_.sendSDKSend({ typeString: 'createRole' });
			Role.ins_.sendSDKSend(false);
			Role.ins_.initRank();
			// SDK.ins_.send(SDK_ORDER.CHANGE_GAME_LOAGIN_AWARD, {
			// 	name: 'wx',
			// 	parent: this,
			// 	x: GameConfig.viewWidth / 2,
			// 	y: GameConfig.viewHeight / 2
			// });
			// SDK.ins_.send(SDK_ORDER.CHANGE_GAME_LOAGIN_AWARD, {
			// 	name: 'oppo',
			// 	parent: this,
			// 	x: GameConfig.viewWidth / 2,
			// 	y: GameConfig.viewHeight / 2
			// });
			// SDK.ins_.send(SDK_ORDER.CHANGE_GAME_LOAGIN_AWARD, {
			// 	name: 'vivo',
			// 	parent: this,
			// 	x: GameConfig.viewWidth / 2,
			// 	y: GameConfig.viewHeight / 2
			// });
			// SDK.ins_.send(SDK_ORDER.CHANGE_QQ_MAIN_BAOXIANG, {
			// 	name: 'qq',
			// 	parent: this,
			// 	x: 1334 / 2,
			// 	y: GameConfig.viewHeight / 2
			// });
			// SDK.ins_.send(SDK_ORDER.CHANGE_QQ_MAIN_BAOXIANG, {
			// 	name: 'wx',
			// 	parent: this,
			// 	x: 1334 / 2,
			// 	y: GameConfig.viewHeight / 2
			// });
			// SDK.ins_.send(SDK_ORDER.SHOW_PRIVACY_ICON, {
			// 	name: 'oppo',
			// 	parent: this,
			// 	x: 100,
			// 	y: this.btn_rank.y
			// });
			// SDK.ins_.send(SDK_ORDER.SHOW_PRIVACY_ICON, {
			// 	name: 'vivo',
			// 	parent: this,
			// 	x: 100,
			// 	y: this.btn_rank.y
			// });
            let logo = new Laya.Image();
            logo.skin = "game/logo.png";
            this.displayObject.addChild(logo);//这里父节点自己找一下
            logo.x = 350;
            logo.y = 20;
            logo.name = "logo";
            logo.scaleX = 1;
            logo.scaleY = 1;
            logo.visible = true;
            window.logo = logo;
            YYGGames.gameBox.visible = true;
            h5splash.hideLoading();
		}
		onBtnRank() {
			UISystem.Inst.CreateWindowView(UIRankView);
		}
		onBtnPlayClick() {
			// SDK.ins_.send(SDK_ORDER.HT_HORIZ_BOX_ISSHOW, {
			// 	isShow: false,
			// 	name: 'wx'
			// });
			// SDK.ins_.send(SDK_ORDER.HT_HORIZ_BOX_ISSHOW, {
			// 	isShow: false,
			// 	name: 'oppo'
			// });
			// SDK.ins_.send(SDK_ORDER.ALD_SEND_EVENT, {
			// 	name: 'wx',
			// 	eventName: 'Click "Start" on the Home page'
			// });
            YYGGames.showInterstitial(()=>{
                UISystem.Inst.CreateWindowView(UIGameSettingView);
                YYGGames.gameBox.visible = false;
            });
		}
		onBtnArchiveClick() {
			if (Role.ins_.hasStorageData()) {
				Role.ins_.getRoleDataFromStorage();
				Role.ins_.setDataByString('isLoadGame', true);
				GameMgr.Inst.gameStart();
			} else {
			}
		}
		hideTip() {
			this.img_kuang.visible = false;
			this.btn_ok.visible = false;
			this.img_tipBg.visible = false;
		}
		onResize() {
			// super.onResize();
			// this.bg.x = -this.x;
			// this.bg.y = -this.y;
			// this.bg.height = GameConfig.viewHeight;
			// this.bg.width = GameConfig.viewWidth;
			// this.green_bg.width = this.bg.width;
			// this.green_bg.x = this.bg.x;
			// this.btn_start.x = GameConfig.viewWidth - 412 - this.x;
			// this.btn_readsave.x = GameConfig.viewWidth - 412 - this.x;
			// this.log.x = GameConfig.viewWidth - (1280 - 536);
			// this.green_logo.x = this.log.x;
			// this.tt_Logo.x = this.log.x;
			// this.btn_rank.x = this.btn_start.x + 250;
			// this.btn_rank.visible = false;
		}
	}

	class BaseVO {
		constructor() {
			this.resName = null;
			this.name = null;
			this.type = 0;
			this.r = 0;
			this.g = 0;
			this.b = 0;
			this.a = 0;
			this.x = 0;
			this.y = 0;
			this.z = 0;
			this.qx = 0;
			this.qy = 0;
			this.qz = 0;
			this.qw = 0;
			this.EulerX = 0;
			this.EulerY = 0;
			this.EulerZ = 0;
			this.sx = 0;
			this.sy = 0;
			this.sz = 0;
		}
		parse(bytes) {
			let isColor = bytes.readByte() == 1;
			if (isColor) {
				this.r = bytes.readFloat32();
				this.g = bytes.readFloat32();
				this.b = bytes.readFloat32();
				this.a = bytes.readFloat32();
			}
			this.resName = BaseVO.readUtf8String(bytes);
			this.name = BaseVO.readUtf8String(bytes);
			this.x = bytes.readFloat32();
			this.y = bytes.readFloat32();
			this.z = bytes.readFloat32();
			this.qx = bytes.readFloat32();
			this.qy = bytes.readFloat32();
			this.qz = bytes.readFloat32();
			this.qw = bytes.readFloat32();
			this.EulerX = bytes.readFloat32();
			this.EulerY = bytes.readFloat32();
			this.EulerZ = bytes.readFloat32();
			this.sx = bytes.readFloat32();
			this.sy = bytes.readFloat32();
			this.sz = bytes.readFloat32();
		}
		static readUtf8String(bytes) {
			let len = bytes.readUint16();
			return bytes.readUTFBytes(len);
		}
		isReflex() {
			return true;
		}
		get scriptCls() {
			return null;
		}
	}
	BaseVO.MAP = 1;
	BaseVO.ENTITY = 2;
	BaseVO.ROLE = 3;
	BaseVO.LIGHT = 4;
	BaseVO.BEZIER = 5;

	class BaseScript extends Laya.Script3D {
		constructor() {
			super();
		}
		onEnable() {}
		onDisable() {}
		SetVO(vo) {
			this.vo = vo;
		}
	}

	class MapScript extends BaseScript {
		constructor() {
			super();
		}
		get scriptCls() {
			return MapScript;
		}
	}

	class MapVO extends BaseVO {
		constructor() {
			super();
			this.map = 0;
		}
		parse(bytes) {
			super.parse(bytes);
		}
		get scriptCls() {
			return MapScript;
		}
	}
	MapVO.Collision = 1;
	MapVO.NoCollision = 2;

	class EntityScript extends BaseScript {
		constructor() {
			super();
		}
		onAwake() {}
		get entityVO() {
			return this.vo;
		}
	}

	class EntityVO extends BaseVO {
		constructor() {
			super();
			this.entity = 0;
			this.different = 0;
		}
		parse(bytes) {
			this.entity = bytes.getUint16();
			this.different = bytes.getUint16();
			super.parse(bytes);
		}
		isReflex() {
			return false;
		}
		get scriptCls() {
			return EntityScript;
		}
	}
	EntityVO.Door = 1;

	class RoleScript extends BaseScript {
		constructor() {
			super();
			this.IsOutGou = false;
		}
		onAwake() {}
		SetVO(vo) {
			super.SetVO(vo);
		}
		onDestroy() {
			super.onDestroy();
		}
	}

	class RoleVO extends BaseVO {
		constructor() {
			super();
		}
		get scriptCls() {
			return RoleScript;
		}
		parse(bytes) {
			super.parse(bytes);
		}
	}

	class SceneConfig {}
	SceneConfig.tileSize = 512;
	SceneConfig.htileSize = SceneConfig.tileSize >> 1;
	SceneConfig.RATE = 50;
	SceneConfig.FPS = (1 / 60) * 1000;
	SceneConfig.TILE_WIDTH = 30;
	SceneConfig.TILE_HEIGHT = 30;
	SceneConfig.TILE_HALF_WIDTH = SceneConfig.TILE_WIDTH * 0.5;
	SceneConfig.TILE_HALF_HEIGHT = SceneConfig.TILE_HEIGHT * 0.5;
	SceneConfig.TILE_WIDTH_1_4 = SceneConfig.TILE_HALF_WIDTH * 0.5;
	SceneConfig.TILE_HEIGHT_1_4 = SceneConfig.TILE_HALF_HEIGHT * 0.5;
	SceneConfig.TILE_DISTANCE = Math.sqrt(
		SceneConfig.TILE_HALF_WIDTH * SceneConfig.TILE_HALF_WIDTH +
			SceneConfig.TILE_HALF_HEIGHT * SceneConfig.TILE_HALF_HEIGHT
	);

	class GridRounder {
		constructor(round = 50) {
			GridRounder.DIRS[0] = [-1, 0];
			GridRounder.DIRS[1] = [1, 0];
			GridRounder.DIRS[2] = [0, -1];
			GridRounder.DIRS[3] = [0, 1];
			var len = 0;
			for (var i = 0; i < round; i++) {
				len += 8 + i * 4;
			}
			this.roundPos = new Array(len);
			var x = 0;
			var y = 0;
			var r = 0;
			var idx = 0;
			var num = 0;
			var roundNum = 2;
			for (i = 0; i < round; i++) {
				x++;
				y++;
				while (r < 4) {
					x += GridRounder.DIRS[r][0];
					y += GridRounder.DIRS[r][1];
					this.roundPos[idx] = [x, y];
					idx++;
					num++;
					if (num == roundNum) {
						r++;
						num = 0;
					}
				}
				roundNum += 2;
				r = 0;
			}
		}
	}
	GridRounder.DIRS = new Array(4);

	class MathUtil {
		constructor() {}
		static distance(px1, py1, px2, py2) {
			let dx = px1 - px2;
			let dy = py1 - py2;
			return Math.sqrt(dx * dx + dy * dy);
		}
		static distanceNS(sx, sy, tx, ty) {
			let dx = tx - sx;
			let dy = ty - sy;
			return dx * dx + dy * dy;
		}
		static random(jilv, maxJilv = MathUtil.max) {
			let base = Math.random() * maxJilv;
			return base <= jilv;
		}
		static makeRandom(min, max) {
			let num = min + Math.random() * (max - min);
			return num < max ? Math.floor(num) : max;
		}
		static goldFormat(val) {
			if (val < 0) return '0';
			let k = Math.floor(val / 100) / 10;
			let m = Math.floor(val / 100000) / 10;
			let b = Math.floor(val / 100000000) / 10;
			if (b >= 1) {
				return b.toString() + 'B';
			}
			if (m >= 1) {
				return m.toString() + 'M';
			}
			if (k >= 1) {
				return k.toString() + 'K';
			}
			return val.toString();
		}
		static MultiPointBezier(points, t) {
			var len = points.length;
			var x = 0,
				y = 0;
			var erxiangshi = function (start, end) {
				var cs = 1,
					bcs = 1;
				while (end > 0) {
					cs *= start;
					bcs *= end;
					start--;
					end--;
				}
				return cs / bcs;
			};
			for (var i = 0; i < len; i++) {
				var point = points[i];
				x +=
					point.x *
					Math.pow(1 - t, len - 1 - i) *
					Math.pow(t, i) *
					erxiangshi(len - 1, i);
				y +=
					point.y *
					Math.pow(1 - t, len - 1 - i) *
					Math.pow(t, i) *
					erxiangshi(len - 1, i);
			}
			return { x: x, y: y };
		}
		static angle3D(a, b) {
			let aa = new Laya.Vector3();
			Laya.Vector3.normalize(a, aa);
			let bb = new Laya.Vector3();
			Laya.Vector3.normalize(b, bb);
			let angle = Math.acos(Laya.Vector3.dot(aa, bb));
			return angle * (180 / Math.PI);
		}
		static angle2D(x1, y1, x2, y2) {
			let angle = Math.atan2(y2 - y1, x2 - x1);
			return (angle * 180) / Math.PI;
		}
		static GetMeshRenderer(sp) {
			if (sp == null) return null;
			if (sp instanceof Laya.MeshSprite3D) {
				return sp;
			}
			let length = sp.numChildren;
			for (let i = 0; i < length; i++) {
				const element = sp.getChildAt(i);
				let meshRender = this.GetMeshRenderer(element);
				if (meshRender != null) return meshRender;
			}
			return null;
		}
		static SetMaterSkinnedMeshSprite3D(sp) {
			if (sp == null) return null;
			if (sp instanceof Laya.SkinnedMeshSprite3D) {
				return sp.skinnedMeshRenderer;
			}
			let length = sp.numChildren;
			for (let i = 0; i < length; i++) {
				const element = sp.getChildAt(i);
				let meshRender = this.SetMaterSkinnedMeshSprite3D(element);
				if (meshRender != null) return meshRender;
			}
			return null;
		}
		static calculateLinePoint(bpoint, direction, length) {
			return new Laya.Vector3(
				bpoint.x + direction.x * length,
				bpoint.y + direction.y * length,
				bpoint.z + direction.z * length
			);
		}
	}
	MathUtil.max = 10000;

	class AStar {
		constructor() {
			this.ROW = 0;
			this.CELL = 0;
			this.openListLen = 0;
			this.tilePos = new Laya.Point();
			this.intPos = new Laya.Point();
			this.gridRounder = new GridRounder(20);
			AStar.DIRS[0] = [1, 0];
			AStar.DIRS[1] = [0, 1];
			AStar.DIRS[2] = [-1, 0];
			AStar.DIRS[3] = [0, -1];
			AStar.DIRS[4] = [1, 1];
			AStar.DIRS[5] = [-1, 1];
			AStar.DIRS[6] = [-1, -1];
			AStar.DIRS[7] = [1, -1];
			AStar.COST[0] = AStar.COST_STRAIGHT;
			AStar.COST[1] = AStar.COST_STRAIGHT;
			AStar.COST[2] = AStar.COST_STRAIGHT;
			AStar.COST[3] = AStar.COST_STRAIGHT;
			AStar.COST[4] = AStar.COST_DIAGONAL;
			AStar.COST[5] = AStar.COST_DIAGONAL;
			AStar.COST[6] = AStar.COST_DIAGONAL;
			AStar.COST[7] = AStar.COST_DIAGONAL;
		}
		InitData(data, row, cell) {
			if (data == null) return;
			this.ROW = row;
			this.CELL = cell;
			this.blockData = data;
			let length = cell * row;
			this.openList = new Object();
			this.closeList = new Object();
			this.nodeList = new Array(length);
			for (var i = 0; i < length; i++) {
				this.nodeList[i] = [0, 0, 0, 0];
			}
		}
		Clear() {
			this.openListLen = 0;
			this.openList = new Object();
			this.closeList = new Object();
		}
		FindPath(
			sx,
			sy,
			tx,
			ty,
			TILE_WIDTH = SceneConfig.TILE_WIDTH,
			TILE_HEIGHT = SceneConfig.TILE_HEIGHT
		) {
			var sef = this;
			sx = Math.floor(sx);
			sy = Math.floor(sy);
			tx = Math.floor(tx);
			ty = Math.floor(ty);
			if (GameConfig.stat) {
				var time = Laya.timer.currTimer;
			}
			var startX = Math.floor(sx / TILE_WIDTH);
			var startY = Math.floor(sy / TILE_HEIGHT);
			var endX = Math.floor(tx / TILE_WIDTH);
			var endY = Math.floor(ty / TILE_HEIGHT);
			if (sef.IsGridBlock(startX, startY)) {
				console.log('起始点在阻挡点上');
				var intPos = this.findNearestCanReach(startX, startY);
				if (intPos == null) return null;
				startX = intPos.x;
				startY = intPos.y;
			}
			if (sef.IsGridBlock(endX, endY)) {
				var intPos = this.findNearestCanReach(endX, endY);
				if (intPos == null) return null;
				endX = intPos.x;
				endY = intPos.y;
				tx = TileModel.GetCenterX(endX);
				ty = TileModel.GetCenterY(endY);
			}
			console.log('起点    ' + startX + '     ' + startY);
			console.log('终点    ' + endX + '     ' + endY);
			if (startX == endX && startY == endY) {
				console.log('起始点和结束点在同一位置');
				return null;
			}
			var g = 0;
			var h = 0;
			var f = 0;
			var neighborX = 0;
			var neighborY = 0;
			var neighborId = 0;
			var dirs = AStar.COST.length;
			var curNode;
			var startId = sef.Create(startX, startY);
			var endId = sef.Create(endX, endY);
			var currentId = startId;
			this.AddOpenList(currentId, g, f, -1);
			var neighborNode = null;
			var path = null;
			while (sef.openListLen > 0) {
				curNode = sef.nodeList[currentId];
				sef.CloseOpenList(currentId);
				if (currentId == endId) {
					break;
				}
				for (var i = 0; i < dirs; i++) {
					neighborX =
						Math.floor(currentId % sef.ROW) + AStar.DIRS[i][0];
					neighborY =
						Math.floor(currentId / sef.ROW) + AStar.DIRS[i][1];
					neighborId = sef.Create(neighborX, neighborY);
					neighborNode = sef.nodeList[neighborId];
					if (
						neighborX < 0 ||
						neighborX >= sef.ROW ||
						neighborY < 0 ||
						neighborY >= sef.CELL
					) {
						continue;
					}
					if (sef.IsGridBlockByIndex(neighborId)) {
						continue;
					}
					if (sef.closeList[neighborId] != null) {
						continue;
					}
					g = curNode[1] + AStar.COST[i];
					h =
						(neighborX > endX
							? neighborX - endX
							: endX - neighborX) +
						(neighborY > endY
							? neighborY - endY
							: endY - neighborY);
					h *= AStar.COST_STRAIGHT;
					f = g + h;
					if (sef.openList[neighborId] == null) {
						sef.AddOpenList(neighborId, g, f, curNode[0]);
					} else {
						if (neighborNode[1] > g) {
							neighborNode[0] = neighborId;
							neighborNode[1] = g;
							neighborNode[2] = f;
							neighborNode[3] = curNode[0];
						}
					}
				}
				currentId = sef.UpdateOpenList();
			}
			if (curNode != null) path = sef.GetPath(curNode, tx, ty);
			sef.Clear();
			if (GameConfig.stat) {
				var now = Laya.timer.currTimer;
				console.log('find path use times 		' + (now - time));
			}
			return path;
		}
		UpdateOpenList() {
			var onNode = null;
			var curNode = null;
			for (let i in this.openList) {
				curNode = this.nodeList[i];
				if (onNode == null || curNode[2] < onNode[2]) {
					onNode = curNode;
				}
			}
			return onNode == null ? 0 : onNode[0];
		}
		GetPath(node, tx, ty) {
			var path = new Array();
			while (node != null) {
				path.push(this.Parse(node[0]));
				if (node[3] <= -1) break;
				node = this.GetNextNode(node);
			}
			if (path.length > 0) {
				path[0].x = tx;
				path[0].y = ty;
			}
			return path;
		}
		GetNextNode(node) {
			var curNode = node;
			var nextNode1 = null;
			var sI = 0;
			var sJ = 0;
			var toI = 0;
			var toJ = 0;
			sI = TileModel.GetX(Math.floor(node[0] % this.ROW));
			sJ = TileModel.GetY(Math.floor(node[0] / this.ROW));
			while (curNode != null) {
				if (curNode[3] <= -1) return curNode;
				nextNode1 = this.nodeList[curNode[3]];
				return nextNode1;
				curNode = nextNode1;
			}
			return null;
		}
		CheckLineBlock(sI, sJ, toI, toJ) {
			var rate = 0;
			var distance = 0;
			var distanceX = 0;
			var distanceY = 0;
			var length = 0;
			var i = 0;
			var curDistanceX = 0;
			var curDistanceY = 0;
			distance = MathUtil.distance(sI, sJ, toI, toJ);
			length = Math.ceil(distance / SceneConfig.TILE_DISTANCE);
			rate = 1 / length;
			distanceX = toI - sI;
			distanceY = toJ - sJ;
			for (i = 1; i <= length; i++) {
				curDistanceX = sI + distanceX * rate * i;
				curDistanceY = sJ + distanceY * rate * i;
				if (
					this.IsGridBlock(
						TileModel.GetGridXByX(curDistanceX),
						TileModel.GetGridYByY(curDistanceY)
					)
				) {
					return true;
				}
			}
			return false;
		}
		Parse(index) {
			var pos = new Laya.Point();
			var i = TileModel.GridXToTileX(Math.floor(index % this.ROW));
			var j = Math.floor(index / this.ROW);
			pos.x = TileModel.GetCenterX(i);
			pos.y = TileModel.GetCenterY(j);
			return pos;
		}
		Create(i, j) {
			return this.ROW * j + i;
		}
		AddOpenList(index, g, f, parentId) {
			this.openList[index] = index;
			var node = this.nodeList[index];
			node[0] = index;
			node[1] = g;
			node[2] = f;
			node[3] = parentId;
			this.openListLen++;
			return node;
		}
		CloseOpenList(index) {
			this.closeList[index] = this.openList[index];
			delete this.openList[index];
			this.openListLen--;
		}
		GetRecentNodeId() {
			var onNode = null;
			var curNode = null;
			for (let i in this.closeList) {
				curNode = this.nodeList[i];
				if (curNode[2] <= 0) continue;
				if (onNode == null || curNode[2] < onNode[2]) {
					onNode = curNode;
				}
			}
			return onNode == null ? 0 : onNode[0];
		}
		IsGridBlockByIndex(index) {
			return this.blockData[index] == AStar.TYPE_BLOCK;
		}
		IsGridBlock(i, j) {
			return this.IsGridBlockByIndex(this.Create(i, j));
		}
		IsBlock(tileX, tileY) {
			return this.IsGridBlock(TileModel.GetGridX(tileX, tileY), tileY);
		}
		IsBlockTypeByIndex(index, block = AStar.TYPE_BLOCK) {
			return this.blockData[index] == block;
		}
		IsBlockType(i, j, block = AStar.TYPE_BLOCK) {
			return this.IsBlockTypeByIndex(this.Create(i, j), block);
		}
		IsBlockByTile(tileX, tileY, block = AStar.TYPE_BLOCK) {
			return this.IsBlockType(
				TileModel.GetGridX(tileX, tileY),
				tileY,
				block
			);
		}
		IsBlockByPos(x, y, block = AStar.TYPE_BLOCK) {
			return this.IsBlockByTile(
				TileModel.GetTileX(x),
				TileModel.GetTileY(y),
				block
			);
		}
		findNearestCanReach(x, y, pos = null) {
			if (pos == null) pos = this.intPos;
			if (x < 0 || y >= this.CELL || y < 0 || x >= this.ROW) {
				return null;
			}
			var roundPos = this.gridRounder.roundPos;
			var len = roundPos.length;
			var cx;
			var cy;
			for (var i = 0; i < len; i++) {
				cx = x + roundPos[i][0];
				cy = y + roundPos[i][1];
				if (!this.IsGridBlock(cx, cy)) {
					pos.setTo(cx, cy);
					return pos;
				}
			}
			return null;
		}
	}
	AStar.TYPE_DEFAULT = 0;
	AStar.TYPE_BLOCK = 1;
	AStar.TYPE_TRANSPARENT = 2;
	AStar.TYPE_NAVIGATION_POINT = 3;
	AStar.TOTAL_DIRS = 8;
	AStar.COST_STRAIGHT = 10;
	AStar.COST_DIAGONAL = 14;
	AStar.COST = new Array(8);
	AStar.DIRS = new Array(8);

	class TileVO {
		constructor() {
			this.mapId = 0;
			this.mapUrl = null;
			this.maxWidth = 0;
			this.maxHeight = 0;
			this.ROW = 0;
			this.CELL = 0;
			this.blockInfos = null;
			this.patrolInfos = null;
			this.aStar = null;
			this.parseHandler = null;
		}
		Parse(byte, handler) {
			byte.pos = 0;
			byte.endian = Laya.Byte.BIG_ENDIAN;
			this.mapId = byte.readInt16();
			this.mapUrl = byte.readUTFString();
			this.maxWidth = byte.readInt16();
			this.maxHeight = byte.readInt16();
			this.ROW = byte.readInt16();
			this.CELL = byte.readInt16();
			this.parseHandler = handler;
			Laya.timer.frameOnce(1, this, this.ParseInitBlock, [byte]);
		}
		ParseInitBlock(byte) {
			var patrolLength = byte.readInt16();
			var blockLength = byte.readInt16();
			this.blockInfos = new Array(this.ROW * this.CELL);
			for (var l = 0; l < blockLength; l++) {
				var block = byte.readByte();
				var bI = Math.floor(l % this.ROW);
				var bJ = Math.floor(l / this.ROW);
				this.ParseBlock(this.blockInfos, block, bI, bJ);
			}
			this.SetBlockData(this.mapId);
		}
		SetBlockData(floor) {
			this.aStar = new AStar();
			this.aStar.InitData(this.blockInfos, this.ROW, this.CELL);
			Laya.timer.frameOnce(1, this.parseHandler, this.parseHandler.run);
		}
		FindPath(
			sx,
			sy,
			tx,
			ty,
			TILE_WIDTH = SceneConfig.TILE_WIDTH,
			TILE_HEIGHT = SceneConfig.TILE_HEIGHT
		) {
			return this.aStar.FindPath(sx, sy, tx, ty, TILE_WIDTH, TILE_HEIGHT);
		}
		ParseBlock(blocks, block, i, j) {
			if (i < 0 || j < 0) {
				return;
			}
			var index = this.CreateBlock(i, j);
			blocks[index] = block;
		}
		CreateBlock(i, j) {
			return this.ROW * j + i;
		}
	}

	class TileModel {
		constructor() {
			this.layerAstarDic = null;
			this.layerAstarDic = new Dictionary();
		}
		static get Inst() {
			if (this._Inst == null) this._Inst = new TileModel();
			return this._Inst;
		}
		Parse(byte, handler) {
			let tileVO = new TileVO();
			tileVO.Parse(byte, handler);
			this.layerAstarDic[tileVO.mapId] = tileVO;
		}
		FindPath(
			floor,
			sx,
			sy,
			tx,
			ty,
			TILE_WIDTH = SceneConfig.TILE_WIDTH,
			TILE_HEIGHT = SceneConfig.TILE_HEIGHT
		) {
			let tileVO = this.layerAstarDic[floor];
			if (tileVO == null) return null;
			return tileVO.FindPath(sx, sy, tx, ty, TILE_WIDTH, TILE_HEIGHT);
		}
		static GetTileX(x) {
			return Math.floor(x / SceneConfig.TILE_WIDTH);
		}
		static GetTileY(y) {
			return Math.floor(y / SceneConfig.TILE_HEIGHT);
		}
		static GetTileXBy3D(x) {
			return TileModel.GetTileX(TileModel.D3To2DX(x));
		}
		static GetTileYBy3D(y) {
			return TileModel.GetTileY(TileModel.D3To2DZ(y));
		}
		static GetX(i) {
			return i * SceneConfig.TILE_WIDTH;
		}
		static GetY(j) {
			return j * SceneConfig.TILE_HEIGHT;
		}
		static GetCenterX(i) {
			return TileModel.GetX(i) + SceneConfig.TILE_HALF_WIDTH;
		}
		static GetCenterY(j) {
			return TileModel.GetY(j) + SceneConfig.TILE_HALF_HEIGHT;
		}
		static GetBottomY(j) {
			return TileModel.GetY(j) + SceneConfig.TILE_HEIGHT;
		}
		static GetGridX(tileX, tileY) {
			return tileX;
		}
		static GridXToTileX(gridX) {
			return gridX;
		}
		static GetGridXByX(x) {
			return Math.floor(x / SceneConfig.TILE_WIDTH);
		}
		static GetGridYByY(y) {
			return Math.floor(y / SceneConfig.TILE_HEIGHT);
		}
		static D3To2DX(x) {
			return 722 - x * SceneConfig.RATE;
		}
		static D3To2DZ(z) {
			return 1021 - z * SceneConfig.RATE;
		}
		static D2To3DX(x) {
			return (722 - x) / SceneConfig.RATE;
		}
		static D2To3DZ(z) {
			return (1021 - z) / SceneConfig.RATE;
		}
	}

	class MapNetVO {
		constructor() {
			this.mapId = 0;
			this.endPos = null;
			this._nextMap = null;
		}
		set nextMap(value) {
			this._nextMap = value;
			this.endPos = this.GetEnterPos();
		}
		get nextMap() {
			return this._nextMap;
		}
		GetEnterPos() {
			if (this._nextMap == null) return null;
			let mapRes = MapResource.getItemByKey(this.mapId);
			let nextMapId = this._nextMap.mapId;
			for (const mapArr of mapRes.nextid) {
				if (nextMapId == mapArr[0]) {
					return new Laya.Point(
						TileModel.GetCenterX(mapArr[1]),
						TileModel.GetCenterY(mapArr[2])
					);
				}
			}
			return null;
		}
	}

	class MapModel {
		constructor() {}
		static get Inst() {
			if (this._Inst == null) this._Inst = new MapModel();
			return this._Inst;
		}
		GetLoadUrls() {
			let arr = [];
			let length = MapResource.items.length;
			for (let i = 0; i < length; i++) {
				arr.push(MapResource.items[i].id);
			}
			return arr;
		}
		GetLayer(pos) {
			for (const mapRes of MapResource.items) {
				if (
					parseFloat(mapRes.high[0]) <= pos.y &&
					parseFloat(mapRes.high[1]) >= pos.y &&
					this.CheckRect(mapRes, pos)
				)
					return mapRes.id;
			}
			return -1;
		}
		CheckRect(mapRes, pos) {
			if (mapRes.rect.length == 0) return true;
			if (
				parseFloat(mapRes.rect[0][0]) >= pos.x &&
				parseFloat(mapRes.rect[0][2]) >= pos.z &&
				parseFloat(mapRes.rect[1][0]) <= pos.x &&
				parseFloat(mapRes.rect[1][2]) >= pos.z &&
				parseFloat(mapRes.rect[2][0]) >= pos.x &&
				parseFloat(mapRes.rect[2][2]) <= pos.z &&
				parseFloat(mapRes.rect[3][0]) <= pos.x &&
				parseFloat(mapRes.rect[3][2]) <= pos.z
			)
				return true;
			if (mapRes.rect.length > 4) {
				if (
					parseFloat(mapRes.rect[4][0]) >= pos.x &&
					parseFloat(mapRes.rect[4][2]) >= pos.z &&
					parseFloat(mapRes.rect[5][0]) <= pos.x &&
					parseFloat(mapRes.rect[5][2]) >= pos.z &&
					parseFloat(mapRes.rect[6][0]) >= pos.x &&
					parseFloat(mapRes.rect[6][2]) <= pos.z &&
					parseFloat(mapRes.rect[7][0]) <= pos.x &&
					parseFloat(mapRes.rect[7][2]) <= pos.z
				)
					return true;
			}
			return false;
		}
		FindPath(sPos, toPos) {
			let sLayer = this.GetLayer(sPos);
			let toLayer = this.GetLayer(toPos);
			if (sLayer == -1) sLayer = toLayer;
			if (toLayer == -1) toLayer = sLayer;
			let mapArr = this.getMapArrById(toLayer, sLayer);
			let mapNetArr = [];
			let mapNetVO = null;
			let length = mapArr.length;
			for (let i = 0; i < length; i++) {
				let vo = new MapNetVO();
				vo.mapId = mapArr[i];
				vo.nextMap = mapNetVO;
				if (mapNetVO == null)
					vo.endPos = new Laya.Point(
						TileModel.D3To2DX(toPos.x),
						TileModel.D3To2DZ(toPos.z)
					);
				mapNetVO = vo;
			}
			return mapNetVO;
		}
		getMapArrById(tomapId, currentMapId) {
			var currentMap = MapResource.getItemByKey(currentMapId);
            if(!currentMap) return [];
			let mapArr = [];
			if (currentMap.id != tomapId)
				this.parseMap(
					tomapId,
					currentMap.nextid,
					mapArr,
					[],
					currentMap.id > tomapId ? true : false
				);
			mapArr.push(currentMap.id);
			return mapArr;
		}
		check(tomap, tomapId) {
			for (const mapArr of tomap) {
				if (mapArr[0] == tomapId) return true;
			}
			return false;
		}
		parseMap(tomapId, tomap, includeMapIdArr, sArr, sort) {
			if (sArr == null) sArr = [];
			if (this.check(tomap, tomapId)) {
				includeMapIdArr.push(tomapId);
				return true;
			}
			var mapArr = tomap.slice();
			var leng = mapArr.length;
			var mapVo;
			for (var i = 0; i < leng; i++) {
				let map = sort ? mapArr.shift() : mapArr.pop();
				mapVo = MapResource.getItemByKey(map[0]);
				if (mapVo != null) {
					if (sArr.indexOf(mapVo.id) == -1) {
						sArr.push(mapVo.id);
						if (mapVo.id == tomapId) {
							includeMapIdArr.push(mapVo.id);
							return true;
						} else {
							var value = this.parseMap(
								tomapId,
								mapVo.nextid,
								includeMapIdArr,
								sArr,
								sort
							);
							if (value) {
								includeMapIdArr.push(mapVo.id);
								return value;
							}
						}
					}
				}
			}
			return false;
		}
		GetNearIndex(arr, pos) {
			let minDistance = Number.MAX_VALUE;
			let minIndex = -1;
			let length = arr.length;
			for (let i = 0; i < length; i++) {
				const v = arr[i];
				let distance = Laya.Vector3.distanceSquared(pos, v);
				if (distance < minDistance) {
					minIndex = i;
					minDistance = distance;
				}
			}
			return minIndex;
		}
	}

	class KbnnBaseState extends BaseState {
		constructor() {
			super();
		}
		enter(data) {
			super.enter(data);
			this.PlayState(this.GetStateName());
		}
		PlayState(name, handler = null, speed = 1) {
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			if (kbnn == null) return;
			kbnn.PlayState(name, handler, speed);
		}
		GetStateName() {
			return null;
		}
		exit() {
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			if (kbnn == null) return;
			kbnn.Move(new Laya.Vector3());
		}
		Pause() {}
		Resume() {}
	}

	class MoveProper {
		constructor() {}
		init(startX, startY, endX, endY, time) {
			this.startX = startX;
			this.startY = startY;
			this.endX = endX;
			this.endY = endY;
			this.SetStartTime(Laya.timer.currTimer);
			this.moveX = endX - startX;
			this.moveY = endY - startY;
			this.taskNeedTime = time;
		}
		get distance() {
			return Math.sqrt(this.moveX * this.moveX + this.moveY * this.moveY);
		}
		get Rate() {
			return (
				(Laya.timer.currTimer - this.taskStartTime) / this.taskNeedTime
			);
		}
		SetStartTime(time) {
			this.taskStartTime = time;
		}
	}

	class KbnnMoveState extends KbnnBaseState {
		constructor() {
			super();
			this.mapNetVO = null;
			this.outHitResult = null;
			this.moveDir = null;
			this.targetDistance = 2;
			this.targetDistanceY = 0.5;
			this.Rate = 0;
			this.isEnd = false;
			this.paths = null;
			this.toPos = null;
			this.pauseTime = 0;
			this.isPause = false;
			this.tileStartTime = 0;
			this.tileStartPos = null;
			this.outHitResult = new Laya.HitResult();
			this.moveProper = new MoveProper();
			this.tileStartPos = new Laya.Point();
		}
		enter(data) {
			super.enter(data);
		}
		FindPath() {
            if(!this.mapNetVO) return;
			let to = this.mapNetVO.endPos;
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			let from = kbnn.GetTransform().position.clone();
			console.log('当前地图', this.mapNetVO.mapId);
			this.paths = TileModel.Inst.FindPath(
				this.mapNetVO.mapId,
				TileModel.D3To2DX(from.x),
				TileModel.D3To2DZ(from.z),
				to.x,
				to.y
			);
			if (this.paths == null) {
				if (this.mapNetVO.nextMap) {
					this.mapNetVO = this.mapNetVO.nextMap;
					this.FindPath();
				} else this.FindNearPathComplete();
				return;
			}
			this.paths.pop();
			this.MoveTo();
		}
		FindMapNetVO(toPos) {
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			let sPos = kbnn.GetTransform().position.clone();
			this.mapNetVO = MapModel.Inst.FindPath(sPos, toPos);
		}
		advanceTime(time) {
			super.advanceTime(time);
			if (this.moveDir != null && this.toPos != null) {
				let kbnn = SceneMgr.Inst.GetKbnnScript();
				kbnn.Move(this.moveDir);
				let from = kbnn.GetTransform().position;
				if (
					!this.isEnd &&
					MathUtil.distance(
						from.x,
						from.z,
						this.toPos.x,
						this.toPos.z
					) < 0.5
				) {
					this.isEnd = true;
				}
				if (this.moveProper.Rate >= 1 && this.isEnd) {
					kbnn.Move(new Laya.Vector3());
					this.MoveTo();
					this.isEnd = false;
				}
			}
			if (this.CheckTileStart()) {
				return;
			}
			this.CheckDistance();
			this.CheckDoor();
		}
		CheckDoor() {
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			if (kbnn == null) return;
			let from = kbnn.GetTransform().position.clone();
			from.y += 0.5;
			let direction = new Laya.Vector3();
			kbnn.GetTransform().getForward(direction);
			direction.x *= -1;
			direction.y *= -1;
			direction.z *= -1;
			let ray = new Laya.Ray(from, direction);
			kbnn.owner.scene.physicsSimulation.rayCast(
				ray,
				this.outHitResult,
				1.5
			);
			if (this.outHitResult.succeeded) {
				PropMgr.Inst.userPropByNN(this.outHitResult.collider.owner);
			}
		}
		FindNearPath() {}
		MoveTo() {
			if (this.paths == null) {
				let kbnn = SceneMgr.Inst.GetKbnnScript();
				kbnn.SetStateMachine(KbnnFiniteStateMachine.nainai_zoulu);
				return;
			}
			if (this.paths.length <= 0) {
				if (this.mapNetVO.nextMap) {
					this.mapNetVO = this.mapNetVO.nextMap;
					this.FindPath();
				} else this.FindNearPathComplete();
				return;
			}
			let path = this.paths.pop();
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			let from = kbnn.GetTransform().position.clone();
			let toPos = new Laya.Vector3(
				TileModel.D2To3DX(path.x),
				from.y,
				TileModel.D2To3DZ(path.y)
			);
			this.toPos = toPos;
			let direction = new Laya.Vector3();
			Laya.Vector3.subtract(toPos, from, direction);
			Laya.Vector3.normalize(direction, direction);
			Laya.Vector3.scale(direction, kbnn.GetCurSpeed(), direction);
			let distance = Laya.Vector3.distance(from, toPos);
			let uintDistance = Laya.Vector3.scalarLength(direction);
			let time = (distance / uintDistance) * SceneConfig.FPS;
			kbnn.GetTransform().lookAt(toPos, Laya.Vector3['_Up'], false);
			kbnn.GetTransform().localRotationEulerY += 180;
			this.moveDir = direction;
			this.moveProper.init(
				TileModel.D3To2DX(from.x),
				TileModel.D3To2DZ(from.z),
				path.x,
				path.y,
				time
			);
		}
		FindNearPathComplete() {}
		CheckRole(isCheckState = true) {
			if (this.CheckDisppearTarget()) return false;
			if (isCheckState) {
				if (this.CheckRoleState()) return false;
			}
			if (!this.CheckAngle()) return false;
			if (this.CheckRoleByOffset(0)) return true;
			if (this.CheckRoleByOffset(0.85)) return true;
			if (this.CheckRoleByOffset(1.55)) return true;
			return false;
		}
		CheckDisppearTarget() {
			return SceneMgr.Inst.GetKbnnScript().isBlinding;
		}
		CheckRoleByOffset(offY) {
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			if (kbnn == null) return false;
			let to = MainRoleMgr.Inst.GetMainRolePosRemoveHeight();
			let from = kbnn.GetTransform().position.clone();
			from.y += offY;
			to.y += offY;
			let direction = new Laya.Vector3();
			Laya.Vector3.subtract(to, from, direction);
			Laya.Vector3.normalize(direction, direction);
			let ray = new Laya.Ray(from, direction);
			kbnn.owner.scene.physicsSimulation.rayCast(
				ray,
				this.outHitResult,
				100
			);
			if (this.outHitResult.succeeded) {
				let mainRole = MainRoleMgr.Inst.GetMainRole();
				if (this.outHitResult.collider.owner == mainRole) {
					return true;
				}
			}
			return false;
		}
		CheckAngle() {
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			if (kbnn == null) return false;
			let from = kbnn.GetTransform().position.clone();
			from.y += 0.5;
			let direction1 = new Laya.Vector3();
			kbnn.GetTransform().getForward(direction1);
			direction1.x *= -1;
			direction1.y *= -1;
			direction1.z *= -1;
			let to = MainRoleMgr.Inst.GetMainRolePosRemoveHeight();
			let direction2 = new Laya.Vector3();
			Laya.Vector3.subtract(to, from, direction2);
			let angle = MathUtil.angle3D(direction1, direction2);
			return angle <= 90;
		}
		CheckRoleState() {
			return (
				MainRoleMgr.Inst.getCurState() == statName.hideInBed ||
				MainRoleMgr.Inst.getCurState() == statName.hideMuXiang
			);
		}
		CheckDistance() {
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			if (kbnn == null) return;
			let to = MainRoleMgr.Inst.GetMainRolePosRemoveHeight();
			let from = kbnn.GetTransform().position.clone();
			let distance = Laya.Vector3.distance(from, to);
			if (
				distance < this.targetDistance &&
				Math.abs(to.y - from.y) <= this.targetDistanceY &&
				this.CheckRole()
			) {
				this.OnComplete();
			}
		}
		OnComplete() {
			if (MainRoleMgr.Inst.getCurState() == statName.hideMuXiang) {
				let kbnn = SceneMgr.Inst.GetKbnnScript();
				kbnn.SetStateMachine(KbnnFiniteStateMachine.nainai_zoulu);
				return;
			}
			this.GetCurStateMachine().SetCurState(
				KbnnFiniteStateMachine.nainai_jida
			);
		}
		onTileStart() {
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			if (kbnn == null) return;
			this.tileStartTime = Laya.timer.currTimer;
			this.tileStartPos.setTo(
				TileModel.GetTileXBy3D(kbnn.GetTransform().position.x),
				TileModel.GetTileYBy3D(kbnn.GetTransform().position.z)
			);
		}
		CheckTileStart() {
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			if (kbnn == null) return false;
			let tileX = TileModel.GetTileXBy3D(kbnn.GetTransform().position.x);
			let tileY = TileModel.GetTileYBy3D(kbnn.GetTransform().position.z);
			if (tileX != this.tileStartPos.x || tileY != this.tileStartPos.y) {
				this.onTileStart();
				return false;
			} else if (
				Laya.timer.currTimer > this.tileStartTime + 10000 &&
				!this.isPause
			) {
				kbnn.RandomInit();
				BuffModel.Inst.AddBuff(BuffModel.BUFFID_17);
				return true;
			}
			return false;
		}
		exit() {
			super.exit();
			this.tileStartTime = 0;
			this.tileStartPos.setTo(0, 0);
		}
		Pause() {
			this.pauseTime = Laya.timer.currTimer;
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			kbnn.Move(new Laya.Vector3());
			this.isPause = true;
		}
		Resume() {
			Laya.timer.frameOnce(1, this, this.Resume);
		}
		runResume() {
			this.isPause = false;
			this.tileStartTime = Laya.timer.currTimer;
			let lastTime = Laya.timer.currTimer - this.pauseTime;
			this.moveProper.SetStartTime(
				this.moveProper.taskStartTime + lastTime
			);
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			kbnn.Move(this.moveDir);
		}
	}

	class KbnnStateType {
		constructor() {}
	}
	KbnnStateType.nainai_zoulu = 'nainai_zoulu';
	KbnnStateType.nainai_paxing = 'nainai_paxing';
	KbnnStateType.nainai_zhuanshen = 'nainai_zhuanshen';
	KbnnStateType.nainai_zhuanshen2 = 'nainai_zhuanshen2';
	KbnnStateType.nainai_manpao = 'nainai_manpao';
	KbnnStateType.nainai_jida = 'nainai_jida';
	KbnnStateType.nainai_hunmi = 'nainai_hunmi';
	KbnnStateType.nainai_paxia = 'nainai_paxia';
	KbnnStateType.nainai_stand = 'nainai_stand';

	class KbnnZouluState extends KbnnMoveState {
		constructor() {
			super();
			this.PATROL_POINT = null;
		}
		GetStateName() {
			return KbnnStateType.nainai_zoulu;
		}
		enter(data) {
			super.enter(data);
			this.FindNearPath();
		}
		FindNearPath() {
			if (this.PATROL_POINT == null || this.PATROL_POINT.length == 0) {
				let kbnn = SceneMgr.Inst.GetKbnnScript();
				let minIndex = MapModel.Inst.GetNearIndex(
					KbnnScript.PATROL_POINT,
					kbnn.GetTransform().position
				);
				if (minIndex == 0) {
					this.PATROL_POINT =
						KbnnScript.PATROL_POINT.slice().reverse();
				} else if (minIndex == KbnnScript.PATROL_POINT.length - 1) {
					this.PATROL_POINT = KbnnScript.PATROL_POINT.slice();
				} else {
					this.PATROL_POINT = KbnnScript.PATROL_POINT.slice(minIndex);
					this.PATROL_POINT = this.PATROL_POINT.reverse();
				}
			}
			this.FindMapNetVO(this.PATROL_POINT.pop());
			this.FindPath();
		}
		FindNearPathComplete() {
			this.FindNearPath();
		}
		advanceTime(time) {
			super.advanceTime(time);
			if (this.CheckRole()) {
				let to = MainRoleMgr.Inst.GetMainRolePosRemoveHeight();
				let kbnn = SceneMgr.Inst.GetKbnnScript();
				kbnn.SetStateMachine(KbnnFiniteStateMachine.nainai_manpao, to);
				return;
			}
			let judgePos = MainRoleMgr.Inst.judgeRoleVoice();
			if (judgePos) {
				let kbnn = SceneMgr.Inst.GetKbnnScript();
				console.log('听见声音', judgePos);
				kbnn.SetStateMachine(
					KbnnFiniteStateMachine.nainai_xunlu,
					judgePos
				);
			}
		}
	}

	class KbnnPaxingState extends KbnnBaseState {
		constructor() {
			super();
		}
		GetStateName() {
			return KbnnStateType.nainai_paxing;
		}
		enter(data) {
			super.enter(data);
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			let from = kbnn.GetTransform().localPosition;
			let to = MainRoleMgr.Inst.getCameraPos().clone();
			to.y = from.y;
			Laya.Tween.to(
				kbnn.GetTransform(),
				{
					localPositionX: to.x,
					localPositionZ: to.z
				},
				500,
				null,
				Laya.Handler.create(this, this.OnComplete)
			);
		}
		exit() {}
		OnComplete() {
			MainRoleMgr.Inst.ChangeMainRoleState(statName.Die, { type: 1 });
			this.GetCurStateMachine().SetCurState(null);
		}
	}

	class KbnnZhuanshenState extends KbnnBaseState {
		constructor() {
			super();
		}
		GetStateName() {
			return KbnnStateType.nainai_zhuanshen;
		}
	}

	class KbnnZhuanshenState2 extends KbnnBaseState {
		constructor() {
			super();
		}
		GetStateName() {
			return KbnnStateType.nainai_zhuanshen2;
		}
	}

	class KbnnManPaoState extends KbnnMoveState {
		constructor() {
			super();
			this.targetPos = null;
			this.isFollow = false;
		}
		GetStateName() {
			return KbnnStateType.nainai_manpao;
		}
		advanceTime(time) {
			super.advanceTime(time);
			if (this.CheckRole2()) {
				let to = MainRoleMgr.Inst.GetMainRolePosRemoveHeight();
				if (
					TileModel.GetTileXBy3D(this.targetPos.x) !=
						TileModel.GetTileXBy3D(to.x) ||
					TileModel.GetTileYBy3D(this.targetPos.z) !=
						TileModel.GetTileYBy3D(to.z)
				) {
					console.log('主角位置： ');
					console.log(to);
					this.FindPathTo(to);
					this.isFollow = true;
				}
			} else if (this.isFollow) {
				if (!this.CheckRole(false)) {
					let kbnn = SceneMgr.Inst.GetKbnnScript();
					kbnn.SetStateMachine(KbnnFiniteStateMachine.nainai_zoulu);
				}
			}
		}
		CheckRole(isCheckState = true) {
			return super.CheckRole(false);
		}
		CheckRole2() {
			if (this.CheckDisppearTarget()) return false;
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			if (kbnn == null) return false;
			let to = MainRoleMgr.Inst.GetMainRolePosRemoveHeight();
			let from = kbnn.GetTransform().position.clone();
			return (
				Laya.Vector3.distanceSquared(from, to) <= KbnnManPaoState.MAX
			);
		}
		enter(data) {
			super.enter(data);
			this.FindPathTo(data);
			BuffModel.Inst.AddBuff(BuffModel.BUFFID_8);
			SoundMgr.Inst.playSound(101);
			MainRoleMgr.Inst.beCatchUp(true);
			let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
			if (ui) ui.ChangeFoundImg(0);
		}
		FindPathTo(toPos) {
			this.targetPos = toPos.clone();
			this.FindMapNetVO(this.targetPos);
			this.FindPath();
		}
		FindNearPathComplete() {
			this.GetCurStateMachine().SetCurState(
				KbnnFiniteStateMachine.nainai_zoulu
			);
		}
		exit() {
			super.exit();
			MainRoleMgr.Inst.beCatchUp(false);
			SoundMgr.Inst.stopSound(101);
			BuffModel.Inst.RemoveBuff(BuffModel.BUFFID_8);
			let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
			if (ui) ui.ChangeFoundImg(4);
		}
	}
	KbnnManPaoState.MAX = 10 * 10;

	class KbnnJidaState extends KbnnBaseState {
		constructor() {
			super();
		}
		enter() {
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			kbnn.Move(new Laya.Vector3(0, 0, 0));
			if (this.CheckRoleState()) {
				kbnn.SetStateMachine(KbnnFiniteStateMachine.nainai_paxia_stand);
				return;
			}
			let to = MainRoleMgr.Inst.GetMainRolePosRemoveHeight();
			let from = kbnn.GetTransform().position.clone();
			to.y = from.y;
			kbnn.GetTransform().lookAt(to, Laya.Vector3['_Up'], false);
			kbnn.GetTransform().localRotationEulerY += 180;
			MainRoleMgr.Inst.ChangeMainRoleState(statName.LookAtNN);
			if (!Laya.Browser.window.tt) {
				Laya.timer.once(1000, this, function () {
					this.PlayState(
						this.GetStateName(),
						Laya.Handler.create(this, this.onComplete)
					);
				});
			} else {
				if (!this.GetCurStateMachine()) return;
				this.GetCurStateMachine().SetCurState(null);
			}
		}
		onComplete() {
			SoundMgr.Inst.playSound(60);
			if (!this.GetCurStateMachine()) return;
			this.GetCurStateMachine().SetCurState(null);
		}
		GetStateName() {
			return KbnnStateType.nainai_jida;
		}
		CheckRoleState() {
			console.log('击打时主角状态', MainRoleMgr.Inst.getCurState());
			return MainRoleMgr.Inst.getCurState() == statName.hideInBed;
		}
	}

	class KbnnHunmiState extends KbnnBaseState {
		constructor() {
			super();
		}
		GetStateName() {
			return KbnnStateType.nainai_hunmi;
		}
	}

	class KbnnPaxiaState extends KbnnBaseState {
		constructor() {
			super();
			this.endTime = 0;
		}
		GetStateName() {
			return KbnnStateType.nainai_paxia;
		}
		enter(data) {
			super.enter(data);
			this.endTime = Laya.timer.currTimer + 1000;
			BuffModel.Inst.RemoveBuff(BuffModel.BUFFID_8);
		}
		exit() {}
		advanceTime(time) {
			if (Laya.timer.currTimer > this.endTime) {
				this.GetCurStateMachine().SetCurState(
					KbnnFiniteStateMachine.nainai_paxing
				);
			}
		}
		CheckRoleState() {
			return MainRoleMgr.Inst.getCurState() == statName.hideInBed;
		}
	}

	class KbnnDaijiState extends KbnnMoveState {
		constructor() {
			super();
		}
		enter(data) {
			super.enter(data);
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			let isTriggerRole = this.CheckRole();
			if (isTriggerRole) {
				kbnn.SetStateMachine(KbnnFiniteStateMachine.nainai_manpao);
			} else {
				kbnn.SetStateMachine(KbnnFiniteStateMachine.nainai_zoulu);
			}
		}
		GetStateName() {
			return KbnnStateType.nainai_stand;
		}
	}

	class KbnnChaofengState extends KbnnBaseState {
		constructor() {
			super();
		}
		GetStateName() {
			return KbnnStateType.nainai_stand;
		}
	}

	class KbnnFindPathState extends KbnnMoveState {
		constructor() {
			super();
		}
		GetStateName() {
			return KbnnStateType.nainai_manpao;
		}
		advanceTime(time) {
			super.advanceTime(time);
			if (this.CheckRole()) {
				let to = MainRoleMgr.Inst.GetMainRolePosRemoveHeight();
				let kbnn = SceneMgr.Inst.GetKbnnScript();
				kbnn.SetStateMachine(KbnnFiniteStateMachine.nainai_manpao, to);
			}
			let judgePos = MainRoleMgr.Inst.judgeRoleVoice();
			if (judgePos) {
				let kbnn = SceneMgr.Inst.GetKbnnScript();
				console.log('听见声音', judgePos);
				kbnn.SetStateMachine(
					KbnnFiniteStateMachine.nainai_xunlu,
					judgePos
				);
			}
		}
		enter(data) {
			this.FindPathTo(data);
			let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
			if (ui) {
				ui.ChangeXiYin(true);
				this.showTipOutNoSound();
			}
			BuffModel.Inst.AddBuff(BuffModel.BUFFID_9);
		}
		FindNearPathComplete() {
			this.GetCurStateMachine().SetCurState(
				KbnnFiniteStateMachine.nainai_zoulu
			);
		}
		FindPathTo(toPos) {
			this.FindMapNetVO(toPos);
			this.FindPath();
		}
		exit() {
			super.exit();
			let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
			if (ui) {
				ui.ChangeXiYin(false);
				if (Laya.Browser.window.tt) {
					if (
						this.GetCurStateMachine().getNextState() !=
						KbnnFiniteStateMachine.nainai_xunlu
					) {
						UISystem.Inst.GetWindowView(
							UIGamePlayView
						).ChangeTipsBox(false, null, null, null, true);
						UISystem.Inst.GetWindowView(
							UIGamePlayView
						).ChangeNarrowSpine(false);
					}
				}
			}
			BuffModel.Inst.RemoveBuff(BuffModel.BUFFID_9);
		}
		showTipOutNoSound() {
			let playigUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			if (!playigUI) return;
			if (Laya.Browser.window.tt) {
				if (!Role.ins_.getDataByString('isFirstUseNoSound')) return;
				playigUI.ChangeTipsBox(
					true,
					'Quickly use the magic weapon to pass the level, the Mute prop! Let granny not hear any noise from you!',
					false
				);
				playigUI.ChangeNarrowSpine(true, {
					rotation: 90,
					x: GameConfig.viewWidth - (1280 - (880 - 89 * 0.5)),
					y: 120
				});
				Role.ins_.setDataByString('isFirstUseNoSound', false);
			}
		}
	}

	class KbnnPaxiaStandState extends KbnnBaseState {
		constructor() {
			super();
		}
		enter(data) {
			super.enter(data);
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			let to = MainRoleMgr.Inst.getCameraPos().clone();
			let from = kbnn.GetTransform().position;
			to.y = from.y;
			kbnn.GetTransform().lookAt(to, Laya.Vector3['_Up'], false);
			kbnn.GetTransform().localRotationEulerY += 180;
			kbnn.Move(new Laya.Vector3(0, 0, 0));
			Laya.timer.once(2000, this, this.GotoPaXia);
		}
		GetStateName() {
			return KbnnStateType.nainai_stand;
		}
		GotoPaXia() {
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			kbnn.SetStateMachine(KbnnFiniteStateMachine.nainai_paxia);
		}
	}

	class KbnnFixedPatrolState extends KbnnMoveState {
		constructor() {
			super();
			this.PATROL_POINT = null;
			this.curPosArr = null;
		}
		GetStateName() {
			return KbnnStateType.nainai_zoulu;
		}
		enter(data) {
			super.enter(data);
			this.PATROL_POINT = new Array();
			this.parseFixedPatrolArr(
				ConfigValue.getItemByKey('fixedPatrolArr1').work
			);
			this.parseFixedPatrolArr(
				ConfigValue.getItemByKey('fixedPatrolArr2').work
			);
			this.parseFixedPatrolArr(
				ConfigValue.getItemByKey('fixedPatrolArr3').work
			);
			this.FindNearPath();
		}
		parseFixedPatrolArr(patrolArr) {
			let patrol_points = [];
			let length = patrolArr.length;
			for (let i = 0; i < length; i++) {
				const pos = patrolArr[i];
				let v = new Laya.Vector3(
					-parseFloat(pos[0]),
					parseFloat(pos[1]),
					parseFloat(pos[2])
				);
				patrol_points.push(v);
			}
			this.PATROL_POINT.push(patrol_points.reverse());
		}
		FindNearPath() {
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			if (this.curPosArr == null || this.curPosArr.length == 0) {
				if (this.PATROL_POINT.length == 0) {
					kbnn.Reset();
					GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
						id: 6,
						trigger: true,
						isShow: false,
						sym: 'kbnnleave'
					});
					return;
				}
				if (this.curPosArr == null) {
					this.curPosArr = this.PATROL_POINT.shift();
					kbnn.GetTransform().position = this.curPosArr.pop();
				} else {
					this.curPosArr = this.PATROL_POINT.shift();
					kbnn.Pause();
					this.PlayState('win3_stand1');
					Laya.timer.once(
						parseInt(
							ConfigValue.getItemByKey('nainaiDelayTime').value
						),
						this,
						this.onDelay
					);
					return;
				}
			}
			this.FindMapNetVO(this.curPosArr.pop());
			this.FindPath();
		}
		onDelay() {
			let kbnn = SceneMgr.Inst.GetKbnnScript();
			kbnn.Resume();
			this.PlayState(KbnnStateType.nainai_zoulu);
			this.FindNearPath();
		}
		FindNearPathComplete() {
			this.FindNearPath();
		}
		CheckDistance() {}
		exit() {
			super.exit();
			this.PATROL_POINT = null;
			this.curPosArr = null;
		}
	}

	class KbnnFiniteStateMachine extends FiniteStateMachine {
		constructor() {
			super();
			this.IsPlay = true;
		}
		advanceTime() {
			if (this.IsPlay) super.advanceTime();
		}
		SetCurState(value, data) {
			this.IsPlay = true;
			super.SetCurState(value, data);
		}
		Pause() {
			this.IsPlay = false;
			this.GetCurState().Pause();
		}
		Resume() {
			this.IsPlay = true;
			this.GetCurState().Resume();
		}
		getIsPlay() {
			return this.IsPlay;
		}
	}
	KbnnFiniteStateMachine.nainai_zoulu = new KbnnZouluState();
	KbnnFiniteStateMachine.nainai_paxing = new KbnnPaxingState();
	KbnnFiniteStateMachine.nainai_zhuanshen = new KbnnZhuanshenState();
	KbnnFiniteStateMachine.nainai_zhuanshen2 = new KbnnZhuanshenState2();
	KbnnFiniteStateMachine.nainai_manpao = new KbnnManPaoState();
	KbnnFiniteStateMachine.nainai_jida = new KbnnJidaState();
	KbnnFiniteStateMachine.nainai_hunmi = new KbnnHunmiState();
	KbnnFiniteStateMachine.nainai_paxia = new KbnnPaxiaState();
	KbnnFiniteStateMachine.nainai_chaofeng = new KbnnChaofengState();
	KbnnFiniteStateMachine.nainai_daiji = new KbnnDaijiState();
	KbnnFiniteStateMachine.nainai_xunlu = new KbnnFindPathState();
	KbnnFiniteStateMachine.nainai_paxia_stand = new KbnnPaxiaStandState();
	KbnnFiniteStateMachine.nainai_fixed_patrol = new KbnnFixedPatrolState();

	class KbnnScript extends Laya.Script {
		constructor() {
			super();
			this.characterController = null;
			this.transfrom = null;
			this.animator = null;
			this.baseSpeed = 0;
			this.curSpeed = 0;
			this.firstPos = true;
			this._isBlinding = false;
		}
		onAwake() {
			this.stateMachine = new KbnnFiniteStateMachine();
			this.transfrom = this.owner.transform;
			this.characterController = this.owner.addComponent(
				Laya.CharacterController
			);
			let sphereShape = new Laya.CapsuleColliderShape(0.3, 1.6, 1);
			sphereShape.localOffset = new Laya.Vector3(0, 0.7, 0);
			this.characterController.colliderShape = sphereShape;
			this.animator = this.owner.getComponent(Laya.Animator);
			this.animator.getControllerLayer().playOnWake = false;
			this.owner.getChildByName('lengdong').active = false;
			let patrolArr = ConfigValue.getItemByKey('patrolArr').work;
			let patrol_points = [];
			let length = patrolArr.length;
			for (let i = 0; i < length; i++) {
				const pos = patrolArr[i];
				let v = new Laya.Vector3(
					-parseFloat(pos[0]),
					parseFloat(pos[1]),
					parseFloat(pos[2])
				);
				patrol_points.push(v);
				console.log(
					'巡逻点',
					TileModel.GetTileX(TileModel.D3To2DX(v.x)),
					TileModel.GetTileY(TileModel.D3To2DZ(v.z))
				);
			}
			KbnnScript.PATROL_POINT = patrol_points;
			this.baseSpeed = parseFloat(
				ConfigValue.getItemByKey('nainaiBaseSpeed').value
			);
			this.UpdateCurSpeed();
		}
		onStart() {
			this.Reset();
		}
		Reset() {
			this.kbnnPosSet();
			if (Role.ins_.getDifficulty() == 0) {
				this.stateMachine.SetCurState(null);
				this.owner.getComponent(
					Laya.CharacterController
				).enabled = false;
				this.owner.active = false;
				return;
			}
			if (
				(!GameEventMgr.Inst.introduceMgr.intorduceOver() ||
					Role.ins_.getDataByString('isLoadGame')) &&
				this.firstPos
			) {
				this.stateMachine.SetCurState(null);
				this.owner.getComponent(
					Laya.CharacterController
				).enabled = false;
				this.owner.active = false;
			} else
				this.stateMachine.SetCurState(
					KbnnFiniteStateMachine.nainai_zoulu
				);
			this._isBlinding = false;
		}
		kbnnPosSet() {
			let nainaiInitPos = ConfigValue.getItemByKey('nainaiInitPos').work;
			let posVc3 = new Laya.Vector3(
				-parseFloat(nainaiInitPos[0]),
				parseFloat(nainaiInitPos[1]),
				parseFloat(nainaiInitPos[2])
			);
			let storagePos = Role.ins_.getDataByString('kbnnKeepTransform');
			let storageRo;
			if (storagePos && this.firstPos) {
				storageRo = storagePos.split('|')[1].split(',');
				storagePos = storagePos.split('|')[0].split(',');
				this.transfrom.position = new Laya.Vector3(
					parseFloat(storagePos[0]),
					parseFloat(storagePos[1]),
					parseFloat(storagePos[2])
				);
				this.transfrom.rotationEuler = new Laya.Vector3(
					parseFloat(storageRo[0]),
					parseFloat(storageRo[1]),
					parseFloat(storageRo[2])
				);
			} else {
				this.transfrom.position = posVc3;
			}
		}
		PlayFixedPatrolStatus() {
			this.owner.active = true;
			this.owner.getComponent(Laya.CharacterController).enabled = true;
			this.stateMachine.SetCurState(
				KbnnFiniteStateMachine.nainai_fixed_patrol
			);
		}
		kbnnActive() {
			if (!this.owner) return;
			if (this.owner.active || Role.ins_.getDifficulty() == 0) return;
			console.error('新手，奶奶延迟出现！');
			this.owner.active = true;
			this.enabled = true;
			this.owner.getComponent(Laya.CharacterController).enabled = true;
			this.stateMachine.SetCurState(KbnnFiniteStateMachine.nainai_zoulu);
		}
		RandomInit() {
			let pos =
				KbnnScript.PATROL_POINT[
					MathUtil.makeRandom(0, KbnnScript.PATROL_POINT.length)
				];
			this.transfrom.position = new Laya.Vector3(pos.x, pos.y, pos.z);
			this.stateMachine.SetCurState(KbnnFiniteStateMachine.nainai_zoulu);
		}
		Move(movement) {
			this.characterController.move(movement);
		}
		onEnable() {}
		onDisable() {}
		SetStateMachine(value, data) {
			this.stateMachine.SetCurState(value, data);
		}
		getStateMachine() {
			return this.stateMachine.GetCurState();
		}
		PlayState(name, handler = null, speed = 1) {
			if (this.animator == null) return;
			this.animator.speed = speed;
			this.animator.play(name);
			if (handler == null) return;
			Laya.timer.frameLoop(1, this, this.playComplete, [handler]);
		}
		playComplete(handler) {
			if (this.animator == null) return;
			if (
				this.animator.getCurrentAnimatorPlayState().normalizedTime >= 1
			) {
				Laya.timer.clear(this, this.playComplete);
				if (handler != null) handler.run();
			}
		}
		GetTransform() {
			return this.transfrom;
		}
		UpdateCurSpeed() {
			this.curSpeed =
				this.baseSpeed * (1 + BuffModel.Inst.GetSpeedRate());
			console.log('更新恐怖奶奶速度', this.curSpeed);
		}
		GetCurSpeed() {
			return this.curSpeed;
		}
		AddBuffVO(buffVO) {
			switch (buffVO.buffRes.type) {
				case BuffVO.TYPE_ADDSPEED:
					this.UpdateCurSpeed();
					break;
				case BuffVO.TYPE_LESSSPEED:
					this.UpdateCurSpeed();
					this.owner.getChildByName('lengdong').active = true;
					break;
				case BuffVO.TYPE_COMA:
					this.stateMachine.SetCurState(
						KbnnFiniteStateMachine.nainai_hunmi,
						buffVO
					);
					break;
				case BuffVO.TYPE_TAUNT:
					this.stateMachine.SetCurState(
						KbnnFiniteStateMachine.nainai_chaofeng,
						buffVO
					);
					break;
				case BuffVO.TYPE_BLINDING:
					this.isBlinding = true;
					break;
				default:
					break;
			}
		}
		RemoveBuffVO(buffVO) {
			switch (buffVO.buffRes.type) {
				case BuffVO.TYPE_ADDSPEED:
					this.UpdateCurSpeed();
					break;
				case BuffVO.TYPE_LESSSPEED:
					this.UpdateCurSpeed();
					this.owner.getChildByName('lengdong').active = false;
					break;
				case BuffVO.TYPE_COMA:
					this.RandomInit();
					break;
				case BuffVO.TYPE_TAUNT:
					this.stateMachine.SetCurState(
						KbnnFiniteStateMachine.nainai_daiji
					);
					break;
				case BuffVO.TYPE_BLINDING:
					this.isBlinding = false;
					let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
					if (ui) ui.ChangeSpineYinShen(false);
					break;
				default:
					break;
			}
		}
		onTriggerStay(other) {
			switch (other.owner.name) {
				case 'sangNaTest':
					if (Role.ins_.ZhengQiUsing())
						BuffModel.Inst.AddBuff(BuffModel.BUFFID_6);
					break;
			}
		}
		Pause() {
			this.stateMachine.Pause();
		}
		Resume() {
			this.stateMachine.Resume();
		}
		isPause() {
			return this.stateMachine.getIsPlay();
		}
		setToStorage() {
			Role.ins_.setStorageStat('kbnnKeepTransform', this.owner.transform);
		}
		getDataFromStorage() {}
		set isBlinding(value) {
			this._isBlinding = value;
		}
		get isBlinding() {
			return this._isBlinding;
		}
	}
	KbnnScript.PATROL_POINT = null;

	class ModName {
		constructor() {}
		parseItem(byteArray) {
			this.id = byteArray.readUint8();
			this.modname = byteArray.readUTFString();
		}
		static getItemByKey(id) {
			return ModName.itemsDic[id];
		}
		static getItemBy2Keys(key1, key2) {
			return ModName.itemsDic[key1 + ',' + key2];
		}
	}
	ModName.items = new Array();
	ModName.itemsDic = new Dictionary();

	class SceneMgr {
		constructor() {
			this.curGameArr = null;
			this._curScene = null;
			this._camera = null;
			this._KbnnScript = null;
			this.curGameArr = new Array();
		}
		static get Inst() {
			if (this._inst == null) {
				this._inst = new SceneMgr();
			}
			return this._inst;
		}
		gotoScene() {
			UISystem.Inst.CreateWindowView(UILoadingView, [
				Laya.Handler.create(this, this.initLoad),
				Laya.Handler.create(this, this.onDelay)
			]);
		}
		initLoad() {
			this.startime = Date.parse(new Date() + '');
			this.LoadScene();
			let astarUrls = MapModel.Inst.GetLoadUrls();
			for (const mapId of astarUrls) {
				LoadQueue.Inst.loadBin(UrlUtils.GetAstarUrl(mapId));
			}
			LoadQueue.Inst.loadSprite3D(UrlUtils.GetEntityLhUrl('kbnn_nainai'));
			console.log(
				'kbnn-entity - initLoad ' + UrlUtils.GetLevelUrl('Kbnn_entity')
			);
			Laya.loader.load(
				UrlUtils.GetLevelUrl('Kbnn_entity'),
				Laya.Handler.create(this, this.onLoadComplete),
				null,
				Laya.Loader.BUFFER
			);
			let perfabId = 1;
			while (ModName.getItemByKey(perfabId)) {
				LoadQueue.Inst.loadSprite3D(
					UrlUtils.GetLhResUrl(ModName.getItemByKey(perfabId).modname)
				);
				perfabId++;
			}
			if (Role.ins_.getDataByString('isLoadGame')) {
				let roleStorageData =
					Role.ins_.getDataByString('roleStorageData');
				if (
					roleStorageData.status == statName.hideMuXiang ||
					roleStorageData.status == statName.hideInBed
				) {
					LoadQueue.Inst.loadSprite3D(
						UrlUtils.GetLhResUrl(roleStorageData.hideRes)
					);
				}
			}
		}
		onLoadComplete() {
			let buffer = Laya.loader.getRes(
				UrlUtils.GetLevelUrl('Kbnn_entity')
			);
			Laya.loader.clearRes(UrlUtils.GetLevelUrl('Kbnn_entity'));
			let bytes = new Laya.Byte(buffer);
			bytes.pos = 0;
			let length = bytes.readUint16();
			for (let i = 0; i < length; i++) {
				var vo = null;
				let type = bytes.readUint16();
				switch (type) {
					case BaseVO.MAP:
						vo = new MapVO();
						vo.type = type;
						vo.parse(bytes);
						this.curGameArr.push(vo);
						break;
					case BaseVO.ENTITY:
						vo = new EntityVO();
						vo.type = type;
						vo.parse(bytes);
						this.curGameArr.push(vo);
						PropMgr.Inst.setVO(vo);
						break;
					case BaseVO.ROLE:
						vo = new RoleVO();
						vo.type = type;
						vo.parse(bytes);
						this.curGameArr.push(vo);
						break;
					case BaseVO.LIGHT:
						vo = new BaseVO();
						vo.type = type;
						vo.parse(bytes);
						this.curGameArr.push(vo);
						break;
					default:
						break;
				}
			}
			this.curGameArr.sort(function (a, b) {
				if (a.type < b.type) return -1;
				else if (a.type > b.type) return 1;
				else return 0;
			});
			PropPositionMgr.Inst.postionSetAction();
			PropMgr.Inst.updataPropTree();
		}
		onDelay() {
			console.error(
				'【Loading】加载时长：' +
					(Date.parse(new Date() + '') - SceneMgr.Inst.startime) +
					'ms'
			);
			GameMgr.Inst.gameReadyOver();
		}
		LoadScene() {
			let lf = this;
			GameLayer.sceneLayer.visible = false;
			LoadQueue.Inst.loadScene3D(
				UrlUtils.GetSceneUrl('Kbnn_entity' + Role.ins_.getDrakGame()),
				Laya.Handler.create(null, function (scene) {
					console.error(
						'【场景】加载时长：' +
							(Date.parse(new Date() + '') -
								SceneMgr.Inst.startime) +
							'ms'
					);
					scene.input.multiTouchEnabled = false;
					lf._curScene = scene;
					GameLayer.sceneLayer.addChild(scene);
					lf._camera = scene
						.getChildByName('RoleObj')
						.getChildAt(0)
						.getChildAt(0)
						.getChildByName('chushengshexiangji');
					lf._camera.enableHDR = false;
					GameMgr.Inst.gameReadyOver();
				}),
				LoadLevel.SCENE
			);
		}
		loadLightMap() {
			let arr = [
				'res/Scene/Conventional/Assets/Kbnn/Scenes/Kbnn_entity/Lightmap-0_comp_light.jpg',
				'res/Scene/Conventional/Assets/Kbnn/Scenes/Kbnn_entity/Lightmap-1_comp_light.jpg',
				'res/Scene/Conventional/Assets/Kbnn/Scenes/Kbnn_entity/Lightmap-2_comp_light.jpg',
				'res/Scene/Conventional/Assets/Kbnn/Scenes/Kbnn_entity/Lightmap-3_comp_light.jpg',
				'res/Scene/Conventional/Assets/Kbnn/Scenes/Kbnn_entity/Lightmap-4_comp_light.jpg',
				'res/Scene/Conventional/Assets/Kbnn/Scenes/Kbnn_entity/Lightmap-5_comp_light.jpg',
				'res/Scene/Conventional/Assets/Kbnn/Scenes/Kbnn_entity/Lightmap-6_comp_light.jpg',
				'res/Scene/Conventional/Assets/Kbnn/Scenes/Kbnn_entity/Lightmap-7_comp_light.jpg'
			];
			let mapArr = [];
			for (let i = 0; i < arr.length; i++) {
				let t2d = new Laya.Texture2D();
				t2d._setCreateURL(arr[i]);
				mapArr.push(t2d);
			}
			this._curScene.setlightmaps(mapArr);
		}
		BackMainView() {
			Laya.Resource.destroyUnusedResources();
			UISystem.Inst.CreateWindowView(UIGameMainView);
		}
		AddNbnn() {
			let lf = this;
			if (lf._KbnnScript != null) {
				lf._KbnnScript.owner.active = true;
				lf._KbnnScript.Reset();
				return;
			}
			lf.loadAstar(
				MapModel.Inst.GetLoadUrls(),
				Laya.Handler.create(lf, lf.onLoadAstarComplete)
			);
		}
		AddLight() {
			let light = new Laya.DirectionLight();
			this._curScene.addChild(light);
			light.transform.rotationEuler = new Laya.Vector3(-90, 0, 0);
		}
		loadAstar(urls, handler) {
			if (urls.length == 0) {
				handler.run();
				return;
			}
			let lf = this;
			let mapId = urls.pop();
			LoadQueue.Inst.loadBin(
				UrlUtils.GetAstarUrl(mapId),
				Laya.Handler.create(null, function (bytes) {
					TileModel.Inst.Parse(
						bytes,
						Laya.Handler.create(null, function () {
							lf.loadAstar(urls, handler);
						})
					);
				})
			);
		}
		onLoadAstarComplete() {
			let lf = this;
			LoadQueue.Inst.loadSprite3D(
				UrlUtils.GetEntityLhUrl('kbnn_nainai'),
				Laya.Handler.create(null, function (entity) {
					entity = entity.clone();
					lf._curScene.addChild(entity);
					lf._KbnnScript = entity.addComponent(KbnnScript);
					if (Role.ins_.getGearStatus('drakGame') == 1) {
						entity.getChildByName(
							'polySurface31'
						).skinnedMeshRenderer.material.albedoColor =
							new Laya.Vector4(0.2358, 0.2358, 0.2358, 1);
						entity.getChildByName(
							'polySurface37'
						).skinnedMeshRenderer.material.albedoColor =
							new Laya.Vector4(0.2358, 0.2358, 0.2358, 1);
					}
				})
			);
		}
		GetCamera() {
			return this._camera;
		}
		getScene() {
			return this._curScene;
		}
		GetKbnnScript() {
			return this._KbnnScript;
		}
		destoryKbnn() {
			if (this._KbnnScript == null) return;
			this._KbnnScript.owner.active = false;
		}
		destoryScene() {
			this._KbnnScript.SetStateMachine(null);
			this._KbnnScript.owner.destroy(true);
			this._KbnnScript.destroy();
			this._curScene.destroy(true);
			this.curGameArr = [];
			this._KbnnScript = null;
			this._camera = null;
			this._curScene = null;
		}
	}
	SceneMgr._inst = null;

	class Role {
		constructor() {
			this.RoleChangeStatLock = false;
			this.roleData = new RoleData();
			if (Laya.Browser.window.qq) this.QQald = new QQAld();
		}
		privateAllowed() {
			return GameData.ins_.getGameData('isFirstPrivate');
		}
		setGetPrivate(is) {
			return GameData.ins_.setGameData('isFirstPrivate', is);
		}
		sendSDKSend(data) {
			if (!Laya.Browser.window.qq) return;
			if (!this.QQald) return;
			if (data == false) {
				this.QQald = null;
				return;
			}
			this.QQald.reportData_Yun(data);
		}
		getHandPropId() {
			return this.roleData.propId;
		}
		setHandPropId(id) {
			this.roleData.propId = id;
		}
		SetDifficulty(num) {
			this.roleData.difficult = num;
		}
		getDayNum() {
			return this.roleData.dayNum;
		}
		getDifficulty() {
			return this.roleData.difficult;
		}
		addLifeDay() {
			this.roleData.dayMax++;
		}
		setPropByIndex(str, index) {
			let arr = this.roleData[str][index].split(',');
			if (!arr) return;
			EndIntroduceMgr.Inst.changeIndex();
			this.roleData[str][index] = arr[0] + ',' + 1;
			this.sdkGame(str);
			return;
		}
		setProp(propId, str, value, needEnd = true) {
			if (!propId) propId = this.roleData.propId;
			if (!propId) return;
			EndIntroduceMgr.Inst.changeIndex();
			for (let i = 0; i < this.roleData[str].length; i++) {
				let arr = this.roleData[str][i].split(',');
				if (propId == parseInt(arr[0])) {
					if (value == null) {
						this.roleData[str][i] = propId + ',' + 1;
					} else this.roleData[str][i] = propId + ',' + value;
					this.sdkGame(str);
					return this.roleData[str];
				}
			}
			return this.roleData[str];
		}
		isActiveProp(str) {
			let num = 0;
			for (let i = 0; i < this.roleData[str].length; i++) {
				let arr = this.roleData[str][i].split(',');
				if ('1' == arr[1]) num++;
			}
			if (num == this.roleData[str].length) return true;
			else return false;
		}
		isActiveOneProp(propId, str) {
			if (!propId) propId = this.roleData.propId;
			if (!propId) return;
			for (let i = 0; i < this.roleData[str].length; i++) {
				let arr = this.roleData[str][i].split(',');
				if (propId == parseInt(arr[0]) && arr[1] == '1') {
					return true;
				}
			}
			return false;
		}
		isActivePropByIndex(str, index) {
			let arr = this.roleData[str][index].split(',');
			if (!arr) return false;
			if (arr[1] == '1') {
				return true;
			} else {
				return false;
			}
		}
		usePropCount(str, isTest) {
			for (let i = 0; i < this.roleData[str].length; i++) {
				let arr = this.roleData[str][i].split(':');
				if (arr[0] == arr[1]) return false;
				else {
					if (!isTest) {
						this.roleData[str][i] =
							parseInt(arr[0]) + 1 + ':' + arr[1];
						if (parseInt(arr[0]) + 1 + '' == arr[1]) return false;
					}
					return true;
				}
			}
		}
		lastNum(str, index = 0) {
			let arr = this.roleData[str][index].split(':');
			return parseInt(arr[1]) - parseInt(arr[0]);
		}
		ZhengQiUsing() {
			if (this.roleData.zhengQiStat == 1) {
				this.roleData.zhengQiStat = 2;
				return true;
			} else return false;
		}
		setGearStatus(num, dataName) {
			EndIntroduceMgr.Inst.changeIndex();
			this.roleData[dataName] = num;
			this.sdkGame(dataName);
		}
		getGearStatus(dataName) {
			return this.roleData[dataName];
		}
		isOpenDoor_YingEr() {
			return this.roleData.isOpenDoor_Yinger;
		}
		needBackMusic(isNeed) {
			isNeed
				? (this.roleData.backgroundMusic = 1)
				: (this.roleData.backgroundMusic = 0);
		}
		setStatus(num, dataName) {
			this.roleData[dataName] = num;
		}
		getDrakGame() {
			if (this.roleData.drakGame == 1 || this.roleData.difficult == 4)
				return '_';
			else return '';
		}
		reSet() {
			this.roleData = new RoleData();
		}
		setPropInfo(id, propId) {
			if (propId) {
				for (let i = 1; i <= I18nResource.items.length; i++) {
					if (i <= 4) continue;
					let config = I18nResource.getItemByKey(i);
					if (config.itemid == '') return false;
					let arr = config.itemid.split('|');
					for (let arrIndex = 0; arrIndex < arr.length; arrIndex++) {
						if (parseInt(arr[arrIndex]) == propId) {
							id = config.id;
							break;
						}
					}
					if (id != -1) break;
				}
			}
			for (let i = 0; i < this.roleData.propInfoArr.length; i++) {
				if (this.roleData.propInfoArr[i] == id) {
					return false;
				}
			}
			this.roleData.propInfoArr.push(id);
			return true;
		}
		isInPropInfo(id) {
			for (let i = 0; i < this.roleData.propInfoArr.length; i++) {
				if (id == this.roleData.propInfoArr[i]) {
					return true;
				}
			}
			return false;
		}
		getPropInfo() {
			return this.roleData.propInfoArr;
		}
		setPropDetail(detailId) {
			for (let i = 0; i < this.roleData.propDetailArr.length; i++) {
				if (detailId == this.roleData.propDetailArr[i]) {
					return;
				}
			}
			this.roleData.propDetailArr.push(detailId);
		}
		isHasPropDetail(detailId) {
			for (let i = 0; i < this.roleData.propDetailArr.length; i++) {
				if (detailId == this.roleData.propDetailArr[i]) {
					return true;
				}
			}
			return false;
		}
		getDataByString(paramName) {
			if (!GameConfig.isTest && GameData.ins_.hasTheParam(paramName)) {
				return GameData.ins_.getGameData(paramName);
			}
			return this.roleData[paramName];
		}
		setDataByString(paramName, value) {
			this.roleData[paramName] = value;
			if (!GameConfig.isTest && GameData.ins_.hasTheParam(paramName)) {
				GameData.ins_.setGameData(paramName, value);
			}
		}
		changeDataByString(paramName, value) {
			this.roleData[paramName] += value;
			if (!GameConfig.isTest && GameData.ins_.hasTheParam(paramName)) {
				GameData.ins_.changeGameData(paramName, value);
			}
		}
		needLookAdByIndex(index) {
			if (!Role.ins_.isActivePropByIndex('endIntroduceAdKeys', index)) {
				return true;
			}
			return false;
		}
		isFristUseYinShen() {
			if (GameConfig.isTest) {
				return this.roleData.isUseYinShen;
			}
			return GameData.ins_.getGameData('isUseYinShen');
		}
		useYinShen() {
			if (GameConfig.isTest) {
				this.roleData.isUseYinShen = true;
				return;
			}
			GameData.ins_.setGameData('isUseYinShen', true);
		}
		addYinShenTime() {
			let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
			if (Laya.Browser.window.tt) {
				Role.ins_.changeDataByString('yinShenTimes', 2);
			} else Role.ins_.changeDataByString('yinShenTimes', 1);
			if (ui) ui.updataYinShenTimesUI();
		}
		initRank() {
			this.initRankData('common');
			this.initRankData('car');
			this.initRankData('best');
			this.updataRankData('common');
			Laya.timer.once(
				180000,
				this,
				this.updataRankData,
				['common'],
				false
			);
			this.updataRankData('car');
			Laya.timer.once(180000, this, this.updataRankData, ['car'], false);
			this.updataRankData('best');
			Laya.timer.once(180000, this, this.updataRankData, ['best'], false);
		}
		clearRankTimer() {
			Laya.timer.clearAll(this);
		}
		initRankData(paramString) {
			let rankData = this.getRank(paramString);
			if (rankData) return;
			rankData = [];
			let config = RankResource.items;
			let obj;
			let urlRandom = [];
			let keep;
			let random;
			for (let i = 1; i <= 45; i++) {
				urlRandom.push(i);
			}
			for (let i = 0; i < urlRandom.length / 2; i++) {
				random = Math.floor(Math.random() * 44);
				keep = urlRandom[i];
				urlRandom[i] = urlRandom[random];
				urlRandom[random] = keep;
			}
			let nameRandom = [];
			let headIndex = 0;
			for (let index = 0; index < config.length; index++) {
				let item = config[index];
				for (
					let i = 0;
					i < parseInt(item.rank[1]) - parseInt(item.rank[0]) + 1;
					i++
				) {
					let time =
						parseFloat(item.timerange[0]) +
						Math.round(
							Math.random() *
								(parseFloat(item.timerange[1]) -
									parseFloat(item.timerange[0]))
						);
					let hardRage0 = parseInt(item.hardrange[0]);
					let hardRage1 = parseInt(item.hardrange[1]);
					obj = {
						url: 'head (' + urlRandom[headIndex] + ')',
						diff:
							hardRage0 +
							Math.round(Math.random() * (hardRage1 - hardRage0)),
						name: NameResource.items[urlRandom[headIndex]].name,
						index: headIndex,
						time: time,
						timeLimit: Math.floor(item.timelimit * time),
						timeUp: item.timeuprange,
						isUpdiff: false
					};
					rankData.push(obj);
					headIndex++;
				}
			}
			this.setRank(rankData, paramString);
		}
		getRankIndex(index, paramString) {
			let rankData = this.getRank(paramString);
			if (!rankData) return null;
			return rankData[index];
		}
		getRank(paramString) {
			let rankData = this.roleData[paramString + 'RankData'];
			if (
				!GameConfig.isTest &&
				GameData.ins_.hasTheParam(paramString + 'RankData')
			) {
				rankData = GameData.ins_[paramString + 'RankData'];
			}
			return rankData;
		}
		setRank(value, paramString) {
			this.roleData[paramString + 'RankData'] = value;
			if (
				!GameConfig.isTest &&
				GameData.ins_.hasTheParam(paramString + 'RankData')
			) {
				GameData.ins_[paramString + 'RankData'] = value;
			}
		}
		getLoginIndex() {
			let index = 0;
			if (GameData.ins_.loginIndex == 0) {
				GameData.ins_.loginTemp = new Date().getTime();
				GameData.ins_.loginIndex++;
				GameData.ins_.setToStorage();
				return index;
			}
			if (GameData.ins_.loginIndex && GameData.ins_.loginTemp) {
				let loginDate = new Date(GameData.ins_.loginTemp);
				let nowDate = new Date();
				if (
					nowDate.getMonth() == loginDate.getMonth() &&
					nowDate.getDay() == loginDate.getDay()
				) {
					if (Role.ins_.getDataByString('isGetLoginAwrad') == 1) {
						return 0;
					} else return GameData.ins_.loginIndex;
				} else {
					GameData.ins_.isGetLoginAwrad = -1;
					GameData.ins_.loginTemp = nowDate.getTime();
					index = GameData.ins_.loginIndex;
					GameData.ins_.loginIndex++;
					if (GameData.ins_.loginIndex >= 4)
						GameData.ins_.loginIndex = 1;
					GameData.ins_.setToStorage();
					return index;
				}
			}
			return 0;
		}
		updataRankData(paramString) {
			let diffArr = [0, 0.1, 0.15, 0.18, 0.2];
			let rankData = this.getRank(paramString);
			let diff;
			let time;
			let diffAdd;
			let updiff;
			for (let index = 0; index < rankData.length; index++) {
				let Irank = rankData[index];
				diffAdd = Math.random() < diffArr[Irank.diff - 1] ? 1 : 0;
				if (diffAdd && !Irank.isUpdiff) {
					Irank.isUpdiff = true;
					if (Irank.diff != 5) diff = Irank.diff + diffAdd;
				}
				time =
					Irank.time *
					(Math.random() * parseFloat(Irank.timeUp[0]) +
						Math.random() * parseFloat(Irank.timeUp[1]));
				time = Math.floor(time);
				if (time < Irank.timeLimit) {
					time = Irank.timeLimit;
					Irank.time = Irank.timeLimit;
				}
				if (time < Irank.time) Irank.time = time;
			}
			rankData.sort(function (a, b) {
				return a.time - b.time;
			});
			for (let i = 0; i < rankData.length; i++) {
				rankData[i].index = i + 1;
			}
			GameData.ins_.setToStorage();
		}
		setRoleRank(winId, time) {
			let paramString = 'common';
			if (winId == 1) paramString = 'best';
			if (winId == 2 || winId == 3) paramString = 'common';
			if (winId == 4) paramString = 'car';
			let rankData = this.roleData[paramString + 'RankData'];
			let roleData = this.roleData[paramString + 'RoleRank'];
			if (
				!GameConfig.isTest &&
				GameData.ins_.hasTheParam(paramString + 'RankData')
			) {
				rankData = GameData.ins_[paramString + 'RankData'];
				roleData = GameData.ins_[paramString + 'RoleRank'];
			}
			if (!roleData) roleData = {};
			if (!roleData.time) {
				roleData.time = time;
				roleData.diff = this.roleData.difficult + 1;
			} else if (time < roleData.time) {
				roleData.time = time;
				roleData.diff = this.roleData.difficult + 1;
			}
			for (let i = 0; i < rankData.length; i++) {
				if (time < rankData[i].time) {
					roleData.index = i + 1;
					roleData.upIndex = roleData.index - 5;
					if (roleData.index < 10) roleData.upIndex = 1;
					if (roleData.index > 50) roleData.upIndex = 30;
					break;
				}
			}
			this.roleData[paramString + 'RoleRank'] = roleData;
			if (
				!GameConfig.isTest &&
				GameData.ins_.hasTheParam(paramString + 'RankData')
			) {
				GameData.ins_[paramString + 'RoleRank'] = roleData;
			}
		}
		setStoragePropTransf(symbole, transfrom) {
			let transf = {
				x: transfrom.position.x,
				y: transfrom.position.y,
				z: transfrom.position.z,
				rx: transfrom.rotationEuler.x,
				ry: transfrom.rotationEuler.y,
				rz: transfrom.rotationEuler.z
			};
			if (!this.roleData['propTransformArr'])
				this.roleData['propTransformArr'] = {};
			this.roleData['propTransformArr']['' + symbole] = transf;
		}
		getRoleDataFromStorage() {
			let obj = localStorage.getItem('RoleData');
			if (obj) {
				obj = JSON.parse(obj);
				let num = Object.keys(obj);
				for (let i = 0; i < num.length; i++) {
					let nameString = num[i];
					this.roleData[nameString] = obj[nameString];
				}
				return true;
			} else return false;
		}
		setRoleDataToStroage() {
			SceneMgr.Inst.GetKbnnScript().setToStorage();
			MainRoleMgr.Inst.setToStorage();
			PropMgr.Inst.setToStorage();
			PropPositionMgr.Inst.setToStorage();
			localStorage.setItem('RoleData', JSON.stringify(this.roleData));
		}
		clearDataFromStorage() {
			localStorage.removeItem('RoleData');
			localStorage.removeItem('gameData');
		}
		setStorageStat(paramName, transfrom) {
			this.roleData[paramName] =
				transfrom.position.x +
				',' +
				transfrom.position.y +
				',' +
				transfrom.position.z +
				'|' +
				transfrom.rotation.x +
				',' +
				transfrom.rotation.y +
				',' +
				transfrom.rotation.z;
		}
		hasStorageData() {
			let obj = localStorage.getItem('RoleData');
			if (obj) return true;
			else return false;
		}
		sdkGame(str) {
			if (str != 'endIntroduceKeys' && str != 'endIntroduceAdKeys') {
				GameMgr.Inst.isInGame &&
					SDK.ins_.send(SDK_ORDER.CHANGE_GAME_BY_PLTFORM, {
						name: 'toutiao',
						function: 'needShareWindowOpen'
					});
			}
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_ENINTRODUCE, {
				name: 'wx',
				getIntro: EndIntroduceMgr.Inst.isNeedLookAd()
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_ENINTRODUCE, {
				name: 'oppo',
				getIntro: EndIntroduceMgr.Inst.isNeedLookAd()
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_ENINTRODUCE, {
				name: 'vivo',
				getIntro: EndIntroduceMgr.Inst.isNeedLookAd()
			});
		}
	}
	Role.ins_ = new Role();

	class JoystickModule extends Laya.EventDispatcher {
		constructor(mainView) {
			super();
			this.vcetor2Center = new Laya.Vector2(1, 0);
			this._button = mainView.getChild('joystick').asButton;
			this._button.changeStateOnClick = false;
			this._center = mainView.getChild('joystick_center');
			this.touchId = -1;
			this.radius = 55;
			this._curPos = new Laya.Point();
			this._InitX = this._button.x;
			this._InitY = this._button.y;
			this._button.on(Laya.Event.MOUSE_DOWN, this, this.onTouchDown);
		}
		Trigger(evt) {
			this.onTouchDown(evt);
		}
		onTouchDown(evt) {
			if (this.touchId == -1) {
				this.touchId = evt.touchId;
				if (this._tweener != null) {
					this._tweener.kill();
					this._tweener = null;
				}
				Role.ins_.setDataByString('isLeftMouseOn', true);
				SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
					name: 'toutiao',
					symReco: 'updataUI'
				});
				fgui.GRoot.inst.globalToLocal(
					Laya.stage.mouseX,
					Laya.stage.mouseY,
					this._curPos
				);
				var bx = this._curPos.x;
				var by = this._curPos.y;
				this._lastStageX = bx;
				this._lastStageY = by;
				this._button.selected = true;
				this._button.x = bx - this._button.width / 2;
				this._button.y = by - this._button.height / 2;
				var deltaX = bx - this._InitX;
				var deltaY = by - this._InitY;
				var degrees = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
				fgui.GRoot.inst.globalToLocal(
					this._button.x + this._button.width / 2,
					this._button.y + this._button.height / 2,
					this._curPos
				);
				Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.OnTouchMove);
				Laya.stage.on(Laya.Event.MOUSE_UP, this, this.OnTouchUp);
			}
		}
		OnTouchUp(evt) {
			if (!evt) {
				this.touchId = -1;
				this.reSetPos();
				return;
			}
			if (this.touchId != -1 && evt.touchId == this.touchId) {
				this.touchId = -1;
				this.reSetPos();
			}
		}
		reSetPos() {
			this._tweener = fgui.GTween.to2(
				this._button.x,
				this._button.y,
				this._InitX,
				this._InitY,
				0.3
			)
				.setTarget(this._button, this._button.setXY)
				.setEase(fgui.EaseType.CircOut)
				.onComplete(this.onTweenComplete, this);
			Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.OnTouchMove);
			Laya.stage.off(Laya.Event.MOUSE_UP, this, this.OnTouchUp);
			this.event(JoystickModule.JoystickUp);
			MainRoleMgr.Inst.ChangeMainRoleState(statName.stop);
			Role.ins_.setDataByString('isLeftMouseOn', false);
			SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
				name: 'toutiao',
				symReco: 'updataUI'
			});
		}
		onTweenComplete() {
			this._tweener = null;
			this._button.selected = false;
		}
		OnTouchMove(evt) {
			if (GameMgr.Inst.isPauseGame) {
				this.OnTouchUp();
				return;
			}
			if (Laya.MouseManager.instance.mouseX <= 4) {
				let event = new Laya.Event();
				event.touchId = this.touchId;
				this.OnTouchUp(event);
			}
			if (this.touchId != -1 && evt.touchId == this.touchId) {
				var bx = Laya.stage.mouseX;
				var by = Laya.stage.mouseY;
				let centerX = this._InitX;
				let centerY = this._InitY;
				var buttonX;
				var buttonY;
				let vcetor2 = new Laya.Vector2(
					bx - centerX - this._button.width / 2,
					by - centerY - this._button.height / 2
				);
				let dic = Laya.Vector2.scalarLength(vcetor2);
				let cos = DicUtil.countRoByVce2(vcetor2, this.vcetor2Center);
				if (dic >= this._button.width / 2) {
					buttonX = centerX + (this._button.width / 2) * cos;
					if (vcetor2.y < 0)
						buttonY =
							centerY +
							(this._button.width / 2) *
								-Math.sqrt(1 - Math.pow(cos, 2));
					else
						buttonY =
							centerY +
							(this._button.width / 2) *
								Math.sqrt(1 - Math.pow(cos, 2));
					MainRoleMgr.Inst.getRoleScript().setSpeed(
						0.04 * parseFloat(ConfigValue.getItemByKey('2').value)
					);
				} else {
					buttonX = Laya.stage.mouseX - this._button.width / 2;
					buttonY = Laya.stage.mouseY - this._button.height / 2;
					MainRoleMgr.Inst.getRoleScript().setSpeed(
						0.04 *
							parseFloat(ConfigValue.getItemByKey('1').value) *
							(0.5 + 0.5 * (dic / this._button.width))
					);
				}
				var offsetX = buttonX - this._InitX;
				var offsetY = buttonY - this._InitY;
				var rad = Math.atan2(offsetY, offsetX);
				var degree = (rad * 180) / Math.PI;
				if (offsetX > this.radius / 2 || offsetY > this.radius / 2) {
					MainRoleMgr.Inst.ChangeMainRoleState(statName.walk, {
						degree: degree
					});
				} else {
					MainRoleMgr.Inst.ChangeMainRoleState(statName.walk, {
						degree: degree
					});
				}
				this._button.x = buttonX;
				this._button.y = buttonY;
				this.event(JoystickModule.JoystickMoving, degree);
			}
		}
	}
	JoystickModule.JoystickMoving = 'JoystickMoving';
	JoystickModule.JoystickUp = 'JoystickUp';

	class UIPlaySettingView extends UIBaseWindow {
		constructor() {
			super('UIGamePlayingView', 'UIPlaySettingView');
			this.btn_save = null;
			this.btn_home = null;
			this.btn_continue = null;
			this.slider = null;
		}
		InitUI() {
			this.slider.value = Role.ins_.roleData.rotatPercent * 100;
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeImgBlack(
				true,
				200,
				null,
				null,
				0.8
			);
			this.btn_save.visible = false;
		}
		InitData(data) {
			GameMgr.Inst.pauseGame();
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'toutiao',
				isShow: true,
				parent: this,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'meizu',
				isShow: true,
				parent: this,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'qq',
				isShow: true,
				parent: this,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'wx',
				isShow: true,
				parent: this,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
			if (!SDKConfig.CLOS_WINDOW_ENATIVE_INSERT) {
				SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
					name: 'oppo',
					isShow: true,
					adPoint: 8,
					inStage: true
				});
				SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
					name: 'vivo',
					isShow: true,
					adPoint: 8,
					inStage: true
				});
				SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
					name: 'meizu',
					isShow: true,
					adPoint: 8,
					inStage: true
				});
				SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
					name: 'qq',
					isShow: true,
					adPoint: 8,
					inStage: true
				});
				SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
					name: 'wx',
					isShow: true,
					adPoint: 8,
					inStage: true
				});
				SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
					name: 'toutiao',
					isShow: true,
					adPoint: 8,
					inStage: true
				});
			}
			SDK.ins_.send(SDK_ORDER.HT_VER_LEFT_BOX, {
				isShow: true,
				name: 'wx',
				parent: this.parent,
				x: 0,
				y: (720 - 520) / 2
			});
			SDK.ins_.send(SDK_ORDER.HT_VER_RIGHT_BOX, {
				isShow: true,
				name: 'wx',
				parent: this.parent,
				x: GameConfig.viewWidth - 167,
				y: (720 - 520) / 2
			});
		}
		SetViewStruct() {
			super.SetViewStruct();
			this.viewStruct.layerType = LayerType.TYPE_WINDOW;
			this.viewStruct.layout = 5;
		}
		AddListener() {
			this.btn_continue.onClick(this, this.Back);
			this.btn_home.onClick(this, this.GotoMainView);
			this.slider.on(
				fgui.Events.STATE_CHANGED,
				this,
				this.ChangeSensitivity
			);
			this.btn_save.onClick(this, this.onKeepData);
            MainRoleMgr.Inst.ChangeMainRoleState(statName.stop);
            window.showUIFlag = true;
		}
		RemoveListener() {
			this.btn_continue.onClick(this, this.Back);
			this.btn_home.offClick(this, this.GotoMainView);
			this.slider.off(
				fgui.Events.STATE_CHANGED,
				this,
				this.ChangeSensitivity
			);
			this.btn_save.onClick(this, this.onKeepData);
            window.showUIFlag = false;
		}
		onKeepData() {
			Role.ins_.setRoleDataToStroage();
		}
		Back() {
            YYGGames.showInterstitial(()=>{
                UISystem.Inst.RemoveWindowView(this);
                GameMgr.Inst.contiueGame();
                UISystem.Inst.GetWindowView(UIGamePlayView).ChangeImgBlack(
                    false,
                    200,
                    null,
                    null,
                    0.8
                );
            });
			// SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
			// 	name: 'toutiao',
			// 	isShow: false,
			// 	adPoint: 4,
			// 	isDialog: true
			// });
			// SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
			// 	name: 'meizu',
			// 	isShow: false,
			// 	isDialog: true,
			// 	adPoint: 4
			// });
			// SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
			// 	name: 'qq',
			// 	isShow: false,
			// 	isDialog: true,
			// 	adPoint: 4
			// });
			// SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
			// 	name: 'wx',
			// 	isShow: false,
			// 	isDialog: true,
			// 	adPoint: 4
			// });
			// SDK.ins_.send(SDK_ORDER.HT_VER_LEFT_BOX, {
			// 	isShow: false,
			// 	name: 'wx'
			// });
			// SDK.ins_.send(SDK_ORDER.HT_VER_RIGHT_BOX, {
			// 	isShow: false,
			// 	name: 'wx'
			// });
		}
		GotoMainView() {
            YYGGames.showInterstitial(()=>{
                // GameMgr.Inst.winGameAni(5);
                // GameMgr.Inst.failGameAni();
                GameMgr.Inst.GameFail();
                Role.ins_.setDataByString('introduceId', -100);
                UISystem.Inst.RemoveWindowView(this);
            });
		}
		ChangeSensitivity() {
			Role.ins_.roleData.rotatPercent = this.slider.value / 100;
		}
	}

	class Cell extends fgui.GComponent {
		constructor() {
			super();
			this.type = 1;
		}
		constructFromXML(xml) {
			super.constructFromXML(xml);
			FairyUtils.setVar(this, this);
			this.btn_lookVideo.onClick(this, this.onClickVideo);
			this.btn_lookVideoTT.onClick(this, this.onClickVideo);
			this.btn_lookEnd.onClick(this, this.onClickVideo);
			this.btn_lookEndTT.onClick(this, this.onClickVideo);
		}
		initUI(id) {
			this.adId = id;
			let title = this.lab_Msg;
			let content = this.n7;
			let config = I18nResource.getItemByKey(id);
			if (config.type != this.type) return;
			this.lab_Msg.text = config.msg;
			this.n7.text = config.txt.replace(/\\n/g, '\n');
			this.btn_lookVideo.visible = false;
			this, (this.btn_lookVideoTT.visible = false);
			this.playImgChange(false);
			this.btnChange(false);
			if (!Role.ins_.isInPropInfo(id)) {
				this.lab_Msg.text = '?';
				this.n7.text = 'No relevant clues have been found yet...';
				this.playImgChange(true);
				this.btnChange(true);
			} else {
			}
			this.imgLoader.setSize(110, 110);
			this.imgLoader.url = 'ui://UIGamePlayingView/' + config.icon;
		}
		playImgChange(isShow) {
			this.img_playB.visible = false;
			this.img_playS.visible = false;
			if (!isShow || Laya.Browser.window.tt) return;
			// let isSamll = Laya.Browser.onQQMiniGame;
			// if (isSamll) {
			// 	this.img_playS.visible = true;
			// } else {
			// 	this.img_playB.visible = true;
			// }
		}
		btnChange(isShow) {
			this.btn_lookEnd.visible = false;
			this.btn_lookEndTT.visible = false;
			this.btn_lookVideo.visible = false;
			this.btn_lookVideoTT.visible = false;
			if (!isShow) return;
			if (this.type == 1) {
				this.btn_lookVideoTT.visible = true;
			} else {
				this.btn_lookEndTT.visible = true;
			}
		}
		setType(num) {
			this.type = num;
		}
		onClickVideo() {
			SoundMgr.Inst.isPass = false;
			YYGGames.showReward(() => {
                this.showUIInfoWindowHandler(true);
            });
		}
		showUIInfoWindowHandler(isOver) {
			if (isOver) {
				Role.ins_.setPropInfo(this.adId);
				GameEventMgr.Inst.sendEvent([EventName.REFRESH_UI_PROPLIST]);
				SoundMgr.Inst.isPass = true;
			} else {
				GameMgr.Inst.contiueGame;
			}
		}
		recover() {}
	}

	class UIPropListView extends UIBaseWindow {
		constructor() {
			super('UIPropListView', 'UIPropList');
			this.list_props = null;
			this.btn_back = null;
			this.btn_endList = null;
			this.btn_propList = null;
			this.ispropList = true;
		}
		SetViewStruct() {
			super.SetViewStruct();
			this.viewStruct.layout = 2;
		}
		registerClasses() {
			GameMgr.Inst.pauseGame();
			fgui.UIObjectFactory.setPackageItemExtension(
				'ui://UIPropListView/Cell',
				Cell
			);
		}
		InitUI() {
			super.InitUI();
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeImgBlack(
				true,
				200,
				null,
				null,
				0.8
			);
			this.list_props.itemRenderer = Laya.Handler.create(
				this,
				this.RenderListItem,
				null,
				false
			);
			this.list_props.setVirtual();
			if (Laya.Browser.window.wx) {
				this.btn_back.y -= this.btn_back.height / 2;
			}
			SDK.ins_.send(SDK_ORDER.AD_MISTAKE_BTN_UP, {
				name: 'qq',
				btn: this.btn_back
			});
			SDK.ins_.send(SDK_ORDER.AD_MISTAKE_BTN_UP, {
				name: 'wx',
				btn: this.btn_back
			});
            this.btn_propList.getControllerAt(1).selectedIndex = 1;
		}
		InitData(data) {
			this.showList();
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'oppo',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'qq',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'meizu',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'wx',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'vivo',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'toutiao',
				isShow: true,
				parent: this,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
			if (!SDKConfig.CLOS_WINDOW_ENATIVE_INSERT) {
				SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
					name: 'oppo',
					isShow: true,
					adPoint: 8,
					inStage: true
				});
				SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
					name: 'meizu',
					isShow: true,
					adPoint: 8,
					inStage: true
				});
				SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
					name: 'toutiao',
					isShow: true,
					adPoint: 8,
					inStage: true
				});
				SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
					name: 'vivo',
					isShow: true,
					adPoint: 8,
					inStage: true
				});
			}
			SDK.ins_.send(SDK_ORDER.HT_VER_LEFT_BOX, {
				isShow: true,
				name: 'wx',
				parent: this.parent,
				x: 0,
				y: (720 - 520) / 2
			});
			SDK.ins_.send(SDK_ORDER.HT_VER_RIGHT_BOX, {
				isShow: true,
				name: 'wx',
				parent: this.parent,
				x: GameConfig.viewWidth - 167,
				y: (720 - 520) / 2
			});
		}
		RenderListItem(index, obj) {
			obj.setType(this.type);
			obj.initUI(this.listOK[index]);
			if (this.dataArr) {
				for (let i = 0; i < this.dataArr.length; i++) {
					if (this.dataArr[i] == this.listOK[index]) {
						obj.grayed = false;
						break;
					} else {
						obj.grayed = true;
					}
				}
			}
		}
		showList() {
			let list = Role.ins_.getPropInfo();
			if (this.listOK_) list = this.listOK_;
			let allList = I18nResource.items;
			this.listOK = [];
			this.listLast = [];
			this.type = 1;
			if (!this.ispropList) this.type = 2;
			for (let i = 0; i < list.length; i++) {
				if (I18nResource.getItemByKey(list[i]).type != this.type)
					continue;
				this.listOK.push(list[i]);
			}
			for (let i = 0; i < allList.length; i++) {
				if (i < 4) continue;
				if (allList[i].type != this.type) continue;
				if (this.judgeCollect(list, i + 1)) {
					continue;
				}
				this.listLast.push(allList[i].id);
			}
			this.okLimit = this.listOK.length;
			this.listOK = this.listOK.concat(this.listLast);
			this.list_props.numItems = this.listOK.length;
		}
		judgeCollect(list, i) {
			for (let p = 0; p < list.length; p++) {
				if (i == list[p]) return true;
			}
			return false;
		}
		AddListener() {
			this.btn_back.onClick(this, this.onBtnClose);
			this.btn_endList.onClick(this, this.showDifferentList, [false]);
			this.btn_propList.onClick(this, this.showDifferentList, [true]);
			GameEventMgr.Inst.registetEvent_ANY(
				EventName.REFRESH_UI_PROPLIST,
				this
			);
            MainRoleMgr.Inst.ChangeMainRoleState(statName.stop);
            window.showUIFlag = true;
		}
		RemoveListener() {
			this.btn_back.offClick(this, this.onBtnClose);
			this.btn_endList.offClick(this, this.showDifferentList);
			this.btn_propList.offClick(this, this.showDifferentList);
			GameEventMgr.Inst.removeEvent(EventName.REFRESH_UI_PROPLIST);
            window.showUIFlag = false;
		}
		showDifferentList(isPropList) {
            if(isPropList) {
                this.btn_propList.getControllerAt(1).selectedIndex = 1;
                this.btn_endList.getControllerAt(1).selectedIndex = 0;
            } else {
                this.btn_propList.getControllerAt(1).selectedIndex = 0;
                this.btn_endList.getControllerAt(1).selectedIndex = 1;
            }
			if (this.ispropList == isPropList) return;
			this.ispropList = isPropList;
			this.showList();
		}
		narrow() {
			if (!this.narrowSpine) {
				this.narrowSpine = new SkeletonAnimation();
				this.addChild(this.narrowSpine);
			}
			this.narrowSpine.play('narrow', true);
			this.narrowSpine.x = this.btn_back.x + this.btn_back.width + 50;
			this.narrowSpine.y = this.btn_back.y + this.btn_back.height / 2;
		}
		onBtnClose() {
			this.recover();
			this.dataArr = null;
			this.listOK_ = null;
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeImgBlack(
				false,
				200,
				null,
				null,
				0.8
			);
			if (this.narrowSpine) this.narrowSpine.dispose();
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
				id: 9,
				sym: 'cloasePropList',
				trigger: true
			});
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
				id: 16,
				sym: 'closePropList',
				trigger: true
			});
			UISystem.Inst.RemoveWindowView(this);
			GameMgr.Inst.contiueGame();
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'toutiao',
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'meizu',
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'qq',
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'wx',
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'vivo',
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'oppo',
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'qq',
				isShow: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.HT_VER_LEFT_BOX, {
				isShow: false,
				name: 'wx'
			});
			SDK.ins_.send(SDK_ORDER.HT_VER_RIGHT_BOX, {
				isShow: false,
				name: 'wx'
			});
			let uiplayingView = UISystem.Inst.GetWindowView(UIGamePlayView);
		}
		setData(arrOk, lisok) {
			this.dataArr = arrOk;
			this.listOK_ = lisok;
			if (this.list_props) this.showList();
		}
		recover() {}
	}

	var IntorduceUITYPE;
	(function (IntorduceUITYPE) {
		IntorduceUITYPE[(IntorduceUITYPE['UINarrow'] = 0)] = 'UINarrow';
		IntorduceUITYPE[(IntorduceUITYPE['SceneNarrow'] = 1)] = 'SceneNarrow';
		IntorduceUITYPE[(IntorduceUITYPE['Hand'] = 2)] = 'Hand';
		IntorduceUITYPE[(IntorduceUITYPE['BlackLock'] = 3)] = 'BlackLock';
	})(IntorduceUITYPE || (IntorduceUITYPE = {}));
	class BaseIntroduce {
		constructor() {
			this.arrtimes = [1, 1, 1, 1];
			this.arrtimes_use = [0, 0, 0, 0];
			this.id = 1;
			this.kbnnScrpt = SceneMgr.Inst.GetKbnnScript();
			this.role = Role.ins_;
			this.roleScript = MainRoleMgr.Inst.getRoleScript();
			this.roleTransform = this.roleScript.cameraRoleObj.transform;
			this.playigUI = UISystem.Inst.GetWindowView(UIGamePlayView);
		}
		getId() {
			return this.id;
		}
		enter() {}
		exit() {
			this.role.setDataByString('introduceId', this.id + 1);
		}
		setId(id) {
			this.id = id;
			console.error('[当前引导]------------------' + id);
		}
		triggerUI(data) {
			switch (data.type) {
				case IntorduceUITYPE.BlackLock:
					this.blackLock(data.isShow, data);
					this.arrtimes_use[IntorduceUITYPE.BlackLock]++;
					break;
				case IntorduceUITYPE.UINarrow:
					this.UINarrow(data.isShow, data);
					this.arrtimes_use[IntorduceUITYPE.UINarrow]++;
					break;
				case IntorduceUITYPE.Hand:
					this.hand(data.isShow, data);
					this.arrtimes_use[IntorduceUITYPE.Hand]++;
					break;
				case IntorduceUITYPE.SceneNarrow:
					this.sceneNarrow(data.isShow, data);
					this.arrtimes_use[IntorduceUITYPE.SceneNarrow]++;
					break;
			}
			if (!data.type) this.defaultTrigger(data);
		}
		judgeCanUse(type) {
			return this.arrtimes[type] >= this.arrtimes_use[type]
				? true
				: false;
		}
		defaultTrigger(data) {}
		blackLock(isShow, data) {}
		hand(isShow, data) {}
		sceneNarrow(isShow, data) {}
		UINarrow(isShow, data) {}
		forceExit(needEndIntroduce = true) {
			if (!GameEventMgr.Inst.introduceMgr.isIn) {
				return;
			}
			GameEventMgr.Inst.introduceMgr.isIn = false;
			this.playigUI.forceHideVisible = null;
			this.playigUI.showIntroduceBlack(false, null);
			this.playigUI.ChangeNarrowSpine(false);
			this.playigUI.ChangeHandSpine(false);
			this.roleScript.RayCheckOnOff(false);
			this.roleScript.RayCheckOnOff(true);
			if (Role.ins_.getHandPropId() == null)
				this.playigUI.ChangeBtnDrop(false);
			else this.playigUI.ChangeBtnDrop(true);
			if (this.id != 17) {
				this.playigUI.ChangeTipsBox(false);
			}
			Laya.timer.once(60000, this, function () {
				if (this.kbnnScrpt) this.kbnnScrpt.kbnnActive();
			});
			this.playigUI.ChangeXiYin(false);
			this.playigUI.ChangeBtnPropList(true);
			this.playigUI.ChangeBtnSet(true);
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_POINT], {
				eventIndex: 1,
				add: 1,
				force: 100
			});
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_POINT], {
				active: false
			});
			UISystem.Inst.GetWindowView(UIGamePlayView).updateStopIntroduce();
			GameEventMgr.Inst.sendEvent([EventName.OTHER_INTRODUCE_POINT]);
			this.roleScript.moveLock = false;
			this.roleScript.viewLock_X = false;
			this.roleScript.viewLock_Y = false;
			if (needEndIntroduce) {
				this.playigUI.ChangeBtnYinShen(true);
				this.playigUI.ChangeBtnEndIntroduce(true);
				UISystem.Inst.CreateWindowView(UIEndIntroduce);
			} else {
				this.kbnnScrpt = null;
				this.roleScript = null;
				this.roleTransform = null;
				this.playigUI = null;
				this.role = null;
				this.arrtimes = null;
				this.arrtimes_use = null;
				this.id = null;
			}
		}
	}

	class UIStopIntroduce extends UIBaseWindow {
		constructor() {
			super('UIStopIntroduce', 'UIStopIntroduce');
			this.btn_sure = null;
			this.btn_close = null;
		}
		SetViewStruct() {
			super.SetViewStruct();
			this.viewStruct.layerType = LayerType.TYPE_ALERT;
			this.viewStruct.layout = 5;
		}
		InitUI() {
			super.InitUI();
		}
		InitData(data) {
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeImgBlack(
				true,
				200,
				null,
				null,
				0.8
			);
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'toutiao',
				isShow: true,
				parent: this,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'qq',
				isShow: true,
				parent: this,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'wx',
				isShow: true,
				parent: this,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'meizu',
				isShow: true,
				parent: this,
				width: 200,
				isDialog: true,
				adPoint: 4
			});
		}
		AddListener() {
			this.btn_sure.onClick(this, this.onBtnSure);
			this.btn_close.onClick(this, this.onBtnClose);
		}
		RemoveListener() {
			this.btn_sure.offClick(this, this.onBtnSure);
			this.btn_close.offClick(this, this.onBtnClose);
		}
		onBtnClose() {
			UISystem.Inst.RemoveWindowClass(UIStopIntroduce);
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'toutiao',
				isShow: false,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'qq',
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'meizu',
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'wx',
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeImgBlack(
				false,
				200,
				null,
				null,
				0.8
			);
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'qq',
				isShow: true,
				adPoint: 4
			});
		}
		onBtnSure() {
			UISystem.Inst.RemoveWindowClass(UIStopIntroduce);
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeImgBlack(
				false,
				200,
				null,
				null,
				0.8
			);
			GameEventMgr.Inst.introduceMgr.exit();
			SDK.ins_.send(SDK_ORDER.ALD_SEND_EVENT, {
				name: 'wx',
				eventName: 'Guidance complete',
				arg: { 是否是强制结束: true }
			});
		}
	}

	class UIGamePlayView extends UIBaseWindow {
		constructor() {
			super('UIGamePlayingView', 'UIGamePlayingView');
			this.btn_squat = null;
			this.btn_set = null;
			this.btn_hide = null;
			this.btn_drop = null;
			this.btn_takeup = null;
			this.sight = null;
			this._joystick = null;
			this.point = null;
			this.joystick = null;
			this.joystick_center = null;
			this.img_mengban = null;
			this.btn_shoot = null;
			this.btn_AddOil = null;
			this.slider_Oil = null;
			this.btn_forward = null;
			this.btn_houtui = null;
			this.btn_StartCar = null;
			this.lab_PropName = null;
			this.btn_practise = null;
			this.img_End = null;
			this.btn_PropList = null;
			this.img_Red = null;
			this.img_Yellow = null;
			this.img_Found = null;
			this.img_xiyin = null;
			this.tipBox = null;
			this.btn_IntroducBlack = null;
			this.btn_StopIntroduce = null;
			this.btn_endIntroduce = null;
			this.btn_yinshen = null;
			this.lab_yinshenTimes = null;
			this.img_yinshen = null;
			this.img_NoSound = null;
			this.UIpropDetail = null;
			this.black = null;
			this.forceHideVisible = null;
			this.forceDropVisible = null;
			this.forceStopIntroduceVisible = null;
			this.lockComString = null;
			this.wordIndex = 1;
			this.wordsString = '';

            this.btn_squat_text = "Z"; 
            this.btn_takeup_text = "E";
		}
		SetViewStruct() {
			super.SetViewStruct();
			this.viewStruct.layerType = LayerType.TYPE_MAIN;
			this.viewStruct.layout = 1;
		}
		InitData(param) {
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'oppo',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'meizu',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'toutiao',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'qq',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'wx',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'vivo',
				isShow: false,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				adPoint: 4
			});
		}
		InitUI() {
			super.InitUI();
			this.visible = true;
			this.sight.visible = false;
			this.btn_drop.visible = false;
			this.btn_hide.visible = false;
			this.btn_takeup.visible = false;
			this.btn_takeup_text.visible = false;
			this.btn_shoot.visible = false;
			this.btn_AddOil.visible = false;
			this.slider_Oil.visible = false;
			this.btn_forward.visible = false;
			this.btn_houtui.visible = false;
			this.btn_StartCar.visible = false;
			this.img_mengban.visible = false;
			this.lab_PropName.text = '';
			this.btn_practise.visible = false;
			this.img_End.visible = false;
			this.btn_PropList.visible = true;
			this.btn_squat.visible = false;
            this.btn_squat_text.visible = false;
			this.joystick.visible = false;
			this.joystick_center.visible = false;
			this.img_Red.visible = false;
			this.img_Found.visible = false;
			this.img_xiyin.visible = false;
			this.img_Yellow.visible = false;
			this.tipBox.visible = false;
			this.tipBox.touchable = false;
			this.btn_IntroducBlack.visible = false;
			this.btn_StopIntroduce.visible = false;
			this.lab_yinshenTimes.visible = false;
			this.btn_yinshen.visible = false;
			this.img_NoSound.visible = false;
			this.btn_endIntroduce.visible = false;
			this.img_yinshen.visible = false;
			if (!this.injuredSpine) {
				this.injuredSpine = new SkeletonAnimation();
				this.addChildAt(this.injuredSpine, 0);
			}
			this.injuredSpine.play('injured', true);
			this.injuredSpine.visible = false;
			if (!this.dieSpine) {
				this.dieSpine = new SkeletonAnimation();
				this.addChild(this.dieSpine);
			}
			this.dieSpine.play('dead', true);
			this.dieSpine.visible = false;
			if (!this.handSpine) {
				this.handSpine = new SkeletonAnimation();
				this.addChild(this.handSpine);
			}
			this.handSpine.play('hand', true);
			this.handSpine.visible = false;
			this.handSpine.y = GameConfig.viewHeight / 3 + 100;
			this.handSpine.x = GameConfig.viewWidth - 300;
			if (!this.yinshenSpine) {
				this.yinshenSpine = new SkeletonAnimation();
				this.addChild(this.yinshenSpine);
			}
			this.yinshenSpine.play('yinshen', true);
			this.yinshenSpine.visible = false;
			if (Laya.Browser.window.tt) {
				this.btn_yinshen
					.getChildAt(0)
					.asCom.getChild('img_count0').visible = false;
			}
			if (!this.sigeManHuaSPine) {
				SpineFactory.ins_.getSkeletonByName(
					'sigemanhu',
					Laya.Handler.create(this, function (sk) {
						this.sigeManHuaSPine = sk;
						this.sigeManHuaSPine.getAniName();
						this.displayObject.addChild(sk.getSk());
						this.wordsBox.removeFromParent();
						this.displayObject.addChild(
							this.wordsBox.displayObject
						);
					})
				);
			}
			if (!this.narrowSpine) {
				this.narrowSpine = new SkeletonAnimation();
				this.addChild(this.narrowSpine);
			}
			this.narrowSpine.play('narrow', true);
			this.narrowSpine.visible = false;
			this.narrowSpine.y = GameConfig.viewHeight / 3 + 100;
			this.narrowSpine.x = GameConfig.viewWidth - 300;
			if (!this.touTiaoDieSpine) {
				this.touTiaoDieSpine = new SkeletonAnimation();
				this.addChild(this.touTiaoDieSpine);
			}
			this.touTiaoDieSpine.play('die', true);
			this.touTiaoDieSpine.visible = false;
			this.touTiaoDieSpine.scaleX = GameConfig.viewWidth / 1280;
			this.touTiaoDieSpine.y = GameConfig.viewHeight / 2;
			this.touTiaoDieSpine.x = GameConfig.viewWidth / 2;
			this.wordsBox.visible = false;
			this.wordsBox.getChild('text_Words').text = '';
			this.updataYinShenTimesUI();
			this.slider_Oil.value = Role.ins_.getGearStatus('oilSate') * 100;
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeImgBlack(
				false,
				1000
			);
		}
		AddListener() {
			this._joystick.on(
				JoystickModule.JoystickMoving,
				this,
				this.JoystickMoving
			);
			this._joystick.on(JoystickModule.JoystickUp, this, this.JoystickUp);
			this.btn_set.onClick(this, this.onBtnSetClick);
			this.btn_shoot.onClick(this, this.onShoot);
			this.btn_squat.onClick(this, this.onBtnSquatClick);
			this.btn_takeup.onClick(this, this.onBtnTakeUpClick);
			this.btn_StartCar.onClick(this, this.onBtnStartCar);
			this.btn_PropList.onClick(this, this.onBtnShowListProp);
			this.btn_StopIntroduce.onClick(this, this.onBtnStopIntroduce);
			this.btn_endIntroduce.onClick(this, this.onBtnEndIntroduce);
			this.btn_yinshen.onClick(this, this.onBtnYinShen);
			this.btn_forward.on('mousedown', this, this.btnCarGo, [
				{ isForward: true, event: 'mousedown' }
			]);
			this.btn_forward.on('mouseout', this, this.btnCarGo, [
				{ isForward: true, event: 'mouseout' }
			]);
			this.btn_forward.on('mouseup', this, this.btnCarGo, [
				{ isForward: true, event: 'mouseup' }
			]);
			this.btn_houtui.on('mousedown', this, this.btnCarGo, [
				{ isForward: false, event: 'mousedown' }
			]);
			this.btn_houtui.on('mouseout', this, this.btnCarGo, [
				{ isForward: false, event: 'mouseout' }
			]);
			this.btn_houtui.on('mouseup', this, this.btnCarGo, [
				{ isForward: false, event: 'mouseup' }
			]);
			this.btn_AddOil.on('mousedown', this, this.onBtnAddOil);
			this.btn_AddOil.on('mouseout', this, this.onBtnAddOil);
			this.btn_AddOil.on('mouseup', this, this.onBtnAddOil);
			this.btn_takeup.on('mousedown', this, this.btnTakeMouseDown);
			this.btn_takeup.on('mouseout', this, this.btnTakeMouseUp);
			this.btn_takeup.on('mouseup', this, this.btnTakeMouseUp);
			this.btn_hide.onClick(this, this.onBtnHideClick);
			this.btn_drop.onClick(this, this.onBtnDropClick);
			Laya.stage.on(Laya.Event.KEY_UP, this, this.keyUp);
			Laya.stage.on(Laya.Event.KEY_PRESS, this, this.keyControl);
		}

		RemoveListener() {
			this._joystick.off(
				JoystickModule.JoystickMoving,
				this,
				this.JoystickMoving
			);
			this._joystick.off(
				JoystickModule.JoystickUp,
				this,
				this.JoystickUp
			);
			this.btn_takeup.offClick(this, this.onBtnTakeUpClick);
			this.btn_shoot.offClick(this, this.onShoot);
			this.btn_StartCar.offClick(this, this.onBtnStartCar);
			this.btn_PropList.offClick(this, this.onBtnShowListProp);
			this.btn_StopIntroduce.offClick(this, this.onBtnStopIntroduce);
			this.btn_endIntroduce.offClick(this, this.onBtnEndIntroduce);
			this.btn_yinshen.offClick(this, this.onBtnYinShen);
			this.btn_forward.off('mousedown', this, this.btnCarGo);
			this.btn_forward.off('mouseout', this, this.btnCarGo);
			this.btn_forward.off('mouseup', this, this.btnCarGo);
			this.btn_houtui.off('mousedown', this, this.btnCarGo);
			this.btn_houtui.off('mouseout', this, this.btnCarGo);
			this.btn_houtui.off('mouseup', this, this.btnCarGo);
			this.btn_AddOil.off('mousedown', this, this.onBtnAddOil);
			this.btn_AddOil.off('mouseout', this, this.onBtnAddOil);
			this.btn_AddOil.off('mouseup', this, this.onBtnAddOil);
			this.btn_takeup.off('mousedown', this, this.btnTakeMouseDown);
			this.btn_takeup.off('mouseout', this, this.btnTakeMouseUp);
			this.btn_takeup.off('mouseup', this, this.btnTakeMouseUp);
			this.btn_hide.offClick(this, this.onBtnHideClick);
			this.btn_set.offClick(this, this.onBtnSetClick);
			this.btn_squat.offClick(this, this.onBtnSquatClick);
			this.btn_drop.offClick(this, this.onBtnDropClick);
			Laya.stage.off(Laya.Event.KEY_UP, this, this.keyUp);
			Laya.stage.off(Laya.Event.KEY_PRESS, this, this.keyControl);
		}
		onBtnSquatClick(event) {
			MainRoleMgr.Inst.Squat(this.btn_squat.selected);
		}
		onBtnSetClick(event) {
			UISystem.Inst.CreateWindowView(UIPlaySettingView);
		}
		onBtnHideClick(event) {
			PropMgr.Inst.useProp();
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
				id: 5,
				trigger: true,
				type: IntorduceUITYPE.UINarrow,
				isShow: false,
				sym: 'hideok'
			});
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
				id: 5,
				trigger: true,
				type: IntorduceUITYPE.BlackLock,
				isShow: false,
				sym: 'hideok'
			});
			if (!this.btn_hide.selected)
				GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
					id: 6,
					trigger: true,
					sym: 'leaveBed'
				});
		}
		onBtnDropClick(event) {
			MainRoleMgr.Inst.Drop();
		}
		onBtnTakeUpClick(event) {
			PropMgr.Inst.useProp();
		}
		JoystickMoving(degree) {
			if (MainRoleMgr.Inst.getCurState() == statName.UseCarState) {
				MainRoleMgr.Inst.ChangeMainRoleState(statName.UseCarState, {
					degree: degree
				});
				return;
			}
			MainRoleMgr.Inst.degree = degree;
		}
		onShoot(event) {
			GameEventMgr.Inst.sendEvent([EventName.SHOOT_EVENT], {
				propId: Role.ins_.getHandPropId()
			});
		}
		get BtnDrop() {
			return this.btn_drop;
		}
		get BtnTakeUp() {
			return this.btn_takeup;
		}
		btnTakeMouseDown(isShow) {
			if (!this.btn_takeup) return;
			PropMgr.Inst.mouseDown(true);
		}
		btnTakeMouseUp(isShow) {
			if (!this.btn_takeup) return;
			PropMgr.Inst.mouseDown(false);
		}
		btnCarGo(data) {
			GameEventMgr.Inst.sendEvent([EventName.CAR_GO], data);
		}
		onBtnShowListProp() {
			UISystem.Inst.CreateWindowView(UIPropListView);
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
				trigger: true,
				id: 9,
				sym: 'clickPropList'
			});
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
				id: 16,
				trigger: true,
				sym: 'click'
			});
		}
		onBtnStartCar() {
			let isCan = true;
			if (Role.ins_.getGearStatus('oilSate') != 1) {
				isCan = false;
				GameEventMgr.Inst.sendEvent([EventName.SHOW_UI_INFO_WINDOW], {
					id: 27
				});
			}
			if (!Role.ins_.isActiveProp('carKeys')) {
				isCan = false;
				GameEventMgr.Inst.sendEvent([EventName.SHOW_UI_INFO_WINDOW], {
					id: 28
				});
			}
			if (isCan) {
				this.ChangeBtnForwadHoutui(true);
				this.btn_StartCar.visible = false;
				SoundMgr.Inst.playSound(43);
			}
		}
		keyControl(e) {
			let degree = null;
            if(showUIFlag) return;
            // if(this.btn_forward.visible) {
            //     switch (e['keyCode']) {
            //         case 87:
            //         case 119:
            //             GameEventMgr.Inst.sendEvent([EventName.CAR_GO], { isForward: true, event: 'mousedown' });
            //             break;
            //         case 83:
            //         case 115:
            //             GameEventMgr.Inst.sendEvent([EventName.CAR_GO], { isForward: false, event: 'mousedown' });
            //             break;
            //         case 69:
            //         case 101:
            //             PropMgr.Inst.useProp();
            //             break;
            //     }
            // } else {
                switch (e['keyCode']) {
                    case 87:
                    case 119:
                        wCode = true;
                        degree = -90;
                        break;
                    case 83:
                    case 115:
                        sCode = true;
                        degree = 90;
                        break;
                    case 65:
                    case 97:
                        aCode = true;
                        degree = 180;
                        break;
                    case 68:
                    case 100:
                        dCode = true;
                        degree = 1;
                        break;
                    case 69:
                    case 101:
                        MainRoleMgr.Inst.ChangeMainRoleState(statName.stop);
                        this.btnTakeMouseDown(true);
                        PropMgr.Inst.useProp();
                        break;
                    case 90:
                    case 122:
                        this.btn_squat.selected = !this.btn_squat.selected;
                        MainRoleMgr.Inst.Squat(this.btn_squat.selected);
                        break;
                }
                if (degree != null) {
                    MainRoleMgr.Inst.degree = degree;
                    MainRoleMgr.Inst.ChangeMainRoleState(statName.walk, {
                        degree: degree
                    });
                }
            // }
		}
		keyUp(e) {
            if(showUIFlag) return;
            // if(this.btn_forward.visible) {
            //     switch (e['keyCode']) {
            //         case 87:
            //             GameEventMgr.Inst.sendEvent([EventName.CAR_GO], { isForward: true, event: 'mouseup' });
            //             break;
            //         case 83:
            //             GameEventMgr.Inst.sendEvent([EventName.CAR_GO], { isForward: false, event: 'mouseup' });
            //             break;
            //     }
            // } else {
                switch (e['keyCode']) {
                    case 87:
                        wCode = false;
                        break;
                    case 83:
                        sCode = false;
                        break;
                    case 65:
                        aCode = false;
                        break;
                    case 68:
                        dCode = false;
                        break;
                    case 69:
                        this.btnTakeMouseUp(false);
                        break;
                }
                if(!aCode && !dCode && !wCode && !sCode) {
                    MainRoleMgr.Inst.ChangeMainRoleState(statName.stop);
                } else if(aCode && !dCode && !wCode && !sCode) {
                    MainRoleMgr.Inst.degree = 180;
                    MainRoleMgr.Inst.ChangeMainRoleState(statName.walk, {
                        degree: 180
                    });
                } else if(!aCode && dCode && !wCode && !sCode) {
                    MainRoleMgr.Inst.degree = 1;
                    MainRoleMgr.Inst.ChangeMainRoleState(statName.walk, {
                        degree: 1
                    });
                } else if(!aCode && !dCode && wCode && !sCode) {
                    MainRoleMgr.Inst.degree = -90;
                    MainRoleMgr.Inst.ChangeMainRoleState(statName.walk, {
                        degree: -90
                    });
                } else if(!aCode && !dCode && !wCode && !sCode) {
                    MainRoleMgr.Inst.degree = 90;
                    MainRoleMgr.Inst.ChangeMainRoleState(statName.walk, {
                        degree: 90
                    });
                }
            // }
		}
		JoystickUp() {}
		ChangeWordsBox(isShow, word, handler) {
			if (!this.wordsBox) return;
			if (isShow) {
				Laya.timer.clear(this, this.wordsBoxTimer);
				this.wordsBox.alpha = 0;
				Laya.Tween.to(this.wordsBox, { alpha: 1 }, 500);
				this.wordsString = '';
				this.wordIndex = 0;
				this.wordsBox.visible = true;
				this.wordsBox.getChild('text_Words').text = '';
				Laya.stage.off(Laya.Event.CLICK, this, this.wordsClick);
				Laya.timer.loop(100, this, this.wordsBoxTimer, [word]);
				Laya.stage.on(Laya.Event.CLICK, this, this.wordsClick, [word]);
			} else {
				Laya.timer.clear(this, this.wordsBoxTimer);
				this.wordsBox.alpha = 1;
				this.wordsBox.visible = false;
				Laya.Tween.to(
					this.wordsBox,
					{ alpha: 0 },
					800,
					null,
					this.wordsHander
				);
				Laya.stage.off(Laya.Event.CLICK, this, this.wordsClick);
			}
			this.wordsHander = handler;
		}
		wordsClick(word) {
			let len = word[this.wordIndex].length;
			if (this.wordsString.length == len) {
				this.wordIndex++;
				this.wordsString = '';
				Laya.timer.loop(100, this, this.wordsBoxTimer, [word]);
				Laya.timer.clear(this, this.wordsClick);
				console.log('点击了');
			} else {
			}
		}
		wordsBoxTimer(word) {
			let stringWords = word[this.wordIndex];
			if (!stringWords) {
				this.ChangeWordsBox(false);
				return;
			}
			let strLen = stringWords.length;
			let cutLen = this.wordsString.length;
			if (strLen == cutLen) {
				Laya.timer.clear(this, this.wordsBoxTimer);
				Laya.timer.once(3000, this, this.wordsClick, [word]);
				return;
			}
			this.wordsString = stringWords.substring(0, cutLen + 1);
			this.wordsBox.getChild('text_Words').text = this.wordsString;
		}
		ChangeBtnTakeAndSight(isShow, text = '', justShowName = false) {
			if (!this.btn_takeup || !this.sight) return;
			this.lab_PropName.text = text;
			if (justShowName) return;
			this.btn_takeup.visible = isShow;
			this.btn_takeup_text.visible = Laya.Browser.onPC && isShow;
			if (!MainRoleMgr.Inst.role.getHandPropId()) {
				this.sight.visible = isShow;
			} else this.sight.visible = false;
		}
		ChangeSpineYinShen(isShow) {
			if (!this.yinshenSpine) return;
			this.yinshenSpine.visible = isShow;
			this.img_yinshen.visible = isShow;
		}
        ChangeWinStatus() {
            this.yinshenSpine.visible = false;
			this.img_yinshen.visible = false;
            this.img_Found.visible = false;
            this.img_xiyin.visible = false;
        }
		ChangeBtnEndIntroduce(isShow) {
			if (!this.btn_endIntroduce) return;
			this.btn_endIntroduce.visible = isShow;
		}
		ChangeSigeManHua(sym, timeArr, handler) {
			console.log('四格漫画:' + sym, '  timeArr:', timeArr);
			if (sym == 1) {
				this.sigeManHuaSPine.getSk().visible = true;
				this.ChangeBtnMengBan(true, 0.9);
				this.ChangeImgBlack(true, 800, null, 0, 0.8);
				this.sigeManHuaSPine.playPauseArr(
					'animation',
					false,
					timeArr,
					handler
				);
				this.sigeManHuaSPine.getSk().y = GameConfig.viewHeight / 2;
				this.sigeManHuaSPine.getSk().x = GameConfig.viewWidth / 2;
			} else if (sym == -1) {
				this.ChangeBtnMengBan(false, 0.9);
				this.sigeManHuaSPine.getSk().visible = false;
				this.ChangeImgBlack(false, 800, null, 0, 0.8);
			} else {
				this.sigeManHuaSPine.resume();
				this.sigeManHuaSPine.getSk().visible = true;
			}
		}
		ChangeBtnNoSound(isShow) {
			if (!this.img_NoSound) return;
			this.img_NoSound.visible = !MainRoleMgr.Inst.canHeard;
			this.img_NoSound.y = 185;
			if (this.img_Red.visible || this.img_yinshen.visible) {
				this.img_NoSound.y = 185 + 112;
			}
			if (this.img_Yellow.visible) {
				SceneMgr.Inst.GetKbnnScript().SetStateMachine(
					KbnnFiniteStateMachine.nainai_zoulu
				);
				this.ChangeXiYin(false);
			}
		}
		ChangeBtnYinShen(isShow) {
			if (!this.btn_yinshen || !this.lab_yinshenTimes) return;
			this.btn_yinshen.visible = isShow;
			this.lab_yinshenTimes.visible = isShow;
			this.updataYinShenTimesUI();
		}
		updataYinShenTimesUI() {
			this.btn_yinshen
				.getChildAt(0)
				.asCom.getChild('img_count0').visible = false;
			this.lab_yinshenTimes.text =
				Role.ins_.getDataByString('yinShenTimes') + '';
			if (Role.ins_.getDataByString('yinShenTimes') == 0) {
				this.btn_yinshen
					.getChildAt(0)
					.asCom.getChild('img_count0').visible = true;
				this.lab_yinshenTimes.text = '';
			}
			if (Laya.Browser.window.tt) {
				this.btn_yinshen
					.getChildAt(0)
					.asCom.getChild('img_count0').visible = false;
			}
		}
		ChangeBtnJoystick(isShow) {
			if (!this.joystick || !this.joystick_center) return;
			this.joystick.visible = !Laya.Browser.onPC && isShow;
			this.joystick_center.visible = !Laya.Browser.onPC && isShow;
			if (isShow) {
				SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
					name: 'wx',
					isShow: true,
					parent: this,
					x: GameConfig.viewWidth / 2,
					y: 720,
					adPoint: 4
				});
			} else {
				SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
					name: 'wx',
					isShow: false,
					parent: this,
					x: GameConfig.viewWidth / 2,
					y: 720,
					adPoint: 4
				});
			}
		}
		ChangeBtnMengBan(isShow, alpha) {
			if (!this.img_mengban) return;
			this.img_mengban.visible = isShow;
			this.img_mengban.alpha = alpha;
		}
		ChangeBtnForwadHoutui(isShow) {
			if (!this.btn_forward || !this.btn_houtui) return;
			this.btn_forward.visible = isShow;
			this.btn_houtui.visible = isShow;
		}
		ChangeBtnTake(isShow) {
			if (!this.btn_takeup) return;
			this.btn_takeup.visible = isShow;
            this.btn_takeup_text.visible = Laya.Browser.onPC && isShow;
			if (isShow) {
				SDK.ins_.send(SDK_ORDER.CHANGE_FOUND_AWARD, { name: 'oppo' });
				SDK.ins_.send(SDK_ORDER.CHANGE_FOUND_AWARD, { name: 'wx' });
			}
		}
		ChangeBtnStartCar(isShow) {
			if (!this.btn_StartCar) return;
			this.btn_StartCar.visible = isShow;
		}
		ChangeBtnDrop(isShow) {
			if (!this.btn_drop) return;
			this.btn_drop.visible = isShow;
			if (this.forceDropVisible != null)
				this.btn_drop.visible = this.forceDropVisible;
		}
		ChangeBtnPropList(isShow) {
			if (!this.btn_PropList) return;
			this.btn_PropList.visible = isShow;
		}
		ChangeBtnAddOil(isShow) {
			if (!this.btn_AddOil || !this.slider_Oil) return;
			this.btn_AddOil.visible = isShow;
			this.slider_Oil.visible = isShow;
		}
		ChangeBtnRed(isShow) {
			if (!this.img_Red) return;
			if (this.img_yinshen.visible) isShow = false;
			this.img_Red.visible = isShow;
			if (isShow) {
				this.img_Red.alpha = 1;
				Laya.Tween.from(this.img_Red, { alpha: 0 }, 500);
				this.btn_yinshen.getTransition('shake').play(null, -1);
				this.changeYinShenNarrow(true);
				this.img_NoSound.y = 185 + 112;
				this.ChangeXiYin(false);
			} else {
				this.img_Red.alpha = 0;
				this.btn_yinshen.getTransition('shake').stop();
				Laya.Tween.from(this.img_Red, { alpha: 1 }, 500);
			}
		}
		changeYinShenNarrow(isShow) {
			if (isShow) {
				Laya.Tween.to(
					this.btn_yinshen,
					{ scaleX: 1.1, scaleY: 1.1 },
					800,
					Laya.Ease.backInOut
				);
				this.ChangeNarrowSpine(
					true,
					{
						x: this.btn_yinshen.x + 50,
						y: this.btn_yinshen.y + 110,
						rotation: 90
					},
					5000
				);
				this.ChangeTipsBox(true, 'Danger! Use the Invisibility Cloak!');
				SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_YIN_SHEN, {
					name: 'wx'
				});
				SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_YIN_SHEN, {
					name: 'oppo'
				});
				SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_YIN_SHEN, {
					name: 'qq'
				});
				SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_YIN_SHEN, {
					name: 'vivo'
				});
			} else {
				this.ChangeNarrowSpine(false);
				this.btn_yinshen.scaleX = 1;
				this.btn_yinshen.scaleY = 1;
				if (this.tipBox) this.tipBox.visible = false;
			}
		}
		changeTouTiaoDie(isShow) {
			if (!Laya.Browser.window.tt) return;
			if (isShow) {
				this.touTiaoDieSpine.visible = true;
				this.touTiaoDieSpine.PlayAni(0, false);
			} else {
				this.touTiaoDieSpine.visible = false;
			}
		}
		ChangeBtnYellow(isShow) {
			if (!this.img_Yellow) return;
			this.img_Yellow.visible = isShow;
		}
		ChangeBtnShoot(isShow) {
			if (!this.btn_shoot) return;
			this.btn_shoot.visible = isShow;
		}
		ChangeBtnHide(isShow) {
			if (!this.btn_hide) return;
			this.btn_hide.visible = isShow;
            this.btn_takeup_text.visible = Laya.Browser.onPC && isShow;
			if (isShow) {
				SDK.ins_.send(SDK_ORDER.CHANGE_FOUND_AWARD, { name: 'oppo' });
				SDK.ins_.send(SDK_ORDER.CHANGE_FOUND_AWARD, { name: 'wx' });
			}
			if (this.forceHideVisible != null)
				this.btn_hide.visible = this.forceHideVisible,this.btn_takeup_text.visible = Laya.Browser.onPC && this.forceHideVisible;
			if (!this.btn_hide.visible) {
				SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
					isShow: true,
					name: 'toutiao',
					symReco: 'recoderTips',
					parent: this._view,
					zOrder: 10,
					x: this.btn_yinshen.x,
					y: this.btn_yinshen.width + this.btn_yinshen.y + 20
				});
			} else {
				SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
					isShow: false,
					name: 'toutiao',
					symReco: 'recoderTips'
				});
			}
		}
		ChangeBtnSquat(isShow) {
			if (!this.btn_squat) return;
			this.btn_squat.visible = isShow;
            this.btn_squat_text.visible = Laya.Browser.onPC && isShow;
		}
		ChangViewEnd(isShow) {
			if (!this.img_End) return;
			this.img_End.visible = isShow;
			return this.img_End;
		}
		ChangePractise(isShow) {
			if (!this.btn_practise) return;
			this.btn_practise.visible = isShow;
			return this.btn_practise;
		}
		ChangeInjuredSpine(isShow, isLoop) {
			if (!Laya.Browser.window.tt) return;
			this.injuredSpine.visible = isShow;
			if (isShow) {
				if (isLoop) this.injuredSpine.PlayAni('animation', false, 0.2);
				else this.injuredSpine.PlayAni('animation', false);
			}
		}
		ChangeFoundImg(num = 0) {
			if (!this.img_Found || !this.img_yinshen) return;
			if (this.img_yinshen.visible) num = 4;
			num++;
			if (num > 3) {
				Laya.Tween.to(
					this.img_Found,
					{ alpha: 0 },
					200,
					null,
					Laya.Handler.create(this, function () {
						this.img_Found.visible = false;
						this.btn_yinshen.scaleX = 1;
						this.btn_yinshen.scaleY = 1;
					})
				);
				return;
			}
			this.img_Found.visible = true;
			this.img_Found.alpha = 0;
			Laya.Tween.to(
				this.img_Found,
				{ alpha: 1 },
				500,
				null,
				Laya.Handler.create(this, function () {
					Laya.Tween.to(
						this.img_Found,
						{ alpha: 0 },
						500,
						null,
						Laya.Handler.create(this, this.ChangeFoundImg, [num])
					);
				})
			);
		}
		changeNoSound(isShow) {
			SDK.ins_.send(SDK_ORDER.HT_ICON_NO_SOUND_CHANGE, {
				isShow: isShow,
				name: 'toutiao',
				parent: this._view,
				zOrder: 10,
				x: this.btn_yinshen.x - this.btn_yinshen.width / 2 - 10,
				y: this.btn_yinshen.y + this.btn_yinshen.height / 2
			});
			SDK.ins_.send(SDK_ORDER.HT_ICON_NO_SOUND_CHANGE, {
				isShow: isShow,
				name: 'wx',
				parent: this._view,
				zOrder: 10,
				x: this.btn_yinshen.x - this.btn_yinshen.width / 2 - 10,
				y: this.btn_yinshen.y + this.btn_yinshen.height / 2
			});
			SDK.ins_.send(SDK_ORDER.HT_ICON_NO_SOUND_CHANGE, {
				isShow: isShow,
				name: 'oppo',
				parent: this._view,
				zOrder: 10,
				x: this.btn_yinshen.x - this.btn_yinshen.width / 2 - 10,
				y: this.btn_yinshen.y + this.btn_yinshen.height / 2
			});
			SDK.ins_.send(SDK_ORDER.HT_ICON_NO_SOUND_CHANGE, {
				isShow: isShow,
				name: 'vivo',
				parent: this._view,
				zOrder: 10,
				x: this.btn_yinshen.x - this.btn_yinshen.width / 2 - 10,
				y: this.btn_yinshen.y + this.btn_yinshen.height / 2
			});
		}
		ChangeDieSpine(isShow) {
			this.dieSpine.visible = isShow;
			if (isShow) this.dieSpine.alpha = 1,this.dieSpine.x = 650,this.dieSpine.y=300;
			else this.dieSpine.alpha = 0;
			this.dieSpine.PlayAni('in', false);
			Laya.timer.once(500, this, function () {
				this.dieSpine.PlayAni('stay', false);
				Laya.timer.once(2500, this, function () {
					Laya.Tween.to(this.dieSpine, { alpha: 0 }, 500);
				});
			});
		}
		ChangeNarrowSpine(isShow, posData, delay) {
			if (this.narrowSpine.visible && isShow) return;
			Laya.timer.clear(this, this.ChangeNarrowSpine);
			if (isShow) {
				if (posData) {
					this.narrowSpine.x = posData.x;
					this.narrowSpine.y = posData.y;
					this.narrowSpine.rotation = posData.rotation;
				}
				this.narrowSpine.play('narrow', true);
				this.narrowSpine.visible = true;
			} else {
				this.narrowSpine.visible = false;
			}
			if (delay)
				Laya.timer.loop(delay, this, this.ChangeNarrowSpine, [false]);
		}
		ChangeHandSpine(isShow, rotation) {
			this.handSpine.rotation = 0;
			if (isShow) {
				this.handSpine.visible = true;
				if (rotation) this.handSpine.rotation = rotation;
			} else {
				this.handSpine.visible = false;
			}
		}
		ChangeTipsBox(
			isShow,
			text,
			needRe = true,
			x = GameConfig.viewWidth / 2 + 25,
			atOnece = false
		) {
			if (!this.tipBox) return;
			this.tipBox.x = 650;
			if (isShow) {
				if (this.introduceTween) Laya.Tween.clear(this.introduceTween);
				Laya.timer.clear(this, this.ChangeTipsBox);
				this.tipBox.visible = true;
				this.tipBox.alpha = 0;
				this.tipBox.getChildAt(1).text = text;
				Laya.Tween.to(this.tipBox, { alpha: 1 }, 300);
				if (needRe)
					Laya.timer.once(5000, this, this.ChangeTipsBox, [false]);
			} else {
				if (atOnece) {
					this.tipBox.alpha = 0;
					this.tipBox.visible = false;
					return;
				}
				Laya.timer.clear(this, this.ChangeTipsBox);
				this.tipBox.alpha = 1;
				this.introduceTween = Laya.Tween.to(
					this.tipBox,
					{ alpha: 0 },
					800,
					null,
					Laya.Handler.create(this, function () {
						this.ChangeTipsBox.visible = false;
					})
				);
			}
		}
		ChangeRecoderTips(isShow) {
			SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
				isShow: isShow,
				name: 'toutiao',
				symReco: 'recoderTips',
				parent: this._view,
				zOrder: 10,
				x: this.btn_yinshen.x,
				y: this.btn_yinshen.width + this.btn_yinshen.y + 20
			});
		}
		ChangeXiYin(isShow, justxiyin = false) {
			if (!this.img_xiyin) return;
			if (isShow && this.img_yinshen.visible) return;
			this.img_xiyin.visible = isShow;
			if (!justxiyin) this.ChangeBtnYellow(isShow);
		}
		ChangeImgBlack(isShow, delaytime, handler, delay = 0, alpha) {
			if (isShow) {
				this.black.alpha = 0;
				let _alpha = 1;
				if (alpha) _alpha = alpha;
				Laya.timer.once(delay, this, function () {
					Laya.Tween.to(
						this.black,
						{ alpha: _alpha },
						delaytime,
						null,
						handler
					);
				});
			} else {
				this.black.alpha = 1;
				if (alpha) this.black.alpha = alpha;
				Laya.timer.once(delay, this, function () {
					Laya.Tween.to(
						this.black,
						{ alpha: 0 },
						delaytime,
						null,
						handler
					);
				});
			}
		}
		showIntroduceBlack(isShow, showName) {
			if (!isShow && showName == null) {
				if (!this.lockComString) return;
				showName = this.lockComString;
			}
			let gComponent = this._view.getChild(showName);
			let index = this._view.getChildIndex(this.btn_IntroducBlack);
			let indexComponet = this._view.getChildIndex(gComponent);
			if (isShow && index < indexComponet) return;
			gComponent.removeFromParent();
			let roleScript = MainRoleMgr.Inst.getRoleScript();
			if (!isShow) {
				this.btn_IntroducBlack.alpha = 0;
				this.btn_IntroducBlack.visible = false;
				this._view.addChildAt(gComponent, index - 1);
				roleScript.moveLock = false;
				roleScript.viewLock_X = false;
				roleScript.viewLock_Y = false;
				this.lockComString = null;
				return;
			}
			this.lockComString = showName;
			roleScript.moveLock = true;
			roleScript.viewLock_X = true;
			roleScript.viewLock_Y = true;
			Laya.stage.event(Laya.Event.MOUSE_UP, { touchId: 0 });
			Laya.stage.event(Laya.Event.MOUSE_OUT, { touchId: 0 });
			MainRoleMgr.Inst.ChangeMainRoleState(statName.stop);
			this._view.addChildAt(gComponent, index);
			this.btn_IntroducBlack.visible = true;
			this.btn_IntroducBlack.alpha = 0.6;
		}
		DropItem() {
			this.ChangeBtnDrop(false);
		}
		setTipBoxPos(x) {
			this.tipBox.x = GameConfig.viewWidth - 363 / 2;
		}
		onBtnAddOil(isAdd) {
			if (Role.ins_.getHandPropId() != 43) return;
			if (isAdd) {
				this.oilTween = Laya.Tween.to(
					this.slider_Oil,
					{ value: 100 },
					3000 * (1 - Role.ins_.getGearStatus('oilSate'))
				);
				Role.ins_.setGearStatus(this.slider_Oil.value / 100, 'oilSate');
			} else {
				Laya.Tween.clear(this.oilTween);
			}
		}
		updateStopIntroduce() {
			if (!this.btn_StopIntroduce) return;
			if (this.forceStopIntroduceVisible != null) {
				this.btn_StopIntroduce.visible = this.forceStopIntroduceVisible;
				return;
			}
			if (
				GameEventMgr.Inst.introduceMgr.getCurIntroduceId() ==
				Role.ins_.getDataByString('introduceId')
			)
				this.btn_StopIntroduce.visible = true;
			else this.btn_StopIntroduce.visible = false;
		}
		onBtnStopIntroduce() {
			UISystem.Inst.CreateWindowView(UIStopIntroduce);
		}
		onBtnEndIntroduce() {
			UISystem.Inst.CreateWindowView(UIEndIntroduce);
		}
		onBtnYinShen() {
			let num = Role.ins_.getDataByString('yinShenTimes');
			if (num > 0) {
				this.ChangeNarrowSpine(false);
				Role.ins_.changeDataByString('yinShenTimes', -1);
				this.updataYinShenTimesUI();
				BuffModel.Inst.AddBuff(BuffModel.BUFFID_16);
				this.ChangeXiYin(false);
				this.ChangeFoundImg(4);
				this.ChangeBtnRed(false);
				this.ChangeSpineYinShen(true);
				this.img_NoSound.y = 185 + 112;
				if (Laya.Browser.window.tt) {
					this.btn_yinshen
						.getChildAt(0)
						.asCom.getChild('img_count0').visible = false;
				}
				return;
			}
			if (Laya.Browser.window.tt) {
				this.showUIYinShen();
				if (Laya.Browser.window.tt) {
					this.btn_yinshen
						.getChildAt(0)
						.asCom.getChild('img_count0').visible = false;
				}
				return;
			}
			GameMgr.Inst.pauseGame();
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'oppo',
				handler: Laya.Handler.create(this, this.adLookOver, null, false)
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'wx',
				handler: Laya.Handler.create(this, this.adLookOver, null, false)
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'toutiao',
				handler: Laya.Handler.create(this, this.adLookOver, null, false)
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'meizu',
				handler: Laya.Handler.create(this, this.adLookOver, null, false)
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'qq',
				handler: Laya.Handler.create(this, this.adLookOver, null, false)
			});
			SDK.ins_.send(SDK_ORDER.NO_SDK_HANDLER, {
				name: 'web',
				handler: Laya.Handler.create(
					this,
					this.adLookOver,
					[true],
					true
				)
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'vivo',
				handler: Laya.Handler.create(this, this.adLookOver, null, false)
			});
			this.btn_yinshen.scaleX = 1;
			this.btn_yinshen.scaleY = 1;
		}
		adLookOver(isOver) {
			if (isOver) {
				Role.ins_.addYinShenTime();
				GameMgr.Inst.contiueGame();
				this.updataYinShenTimesUI();
				this.onBtnYinShen();
				return;
			}
			this.adLookFail();
		}
		adLookFail() {
			GameMgr.Inst.contiueGame();
		}
		showUIYinShen() {
			UISystem.Inst.CreateWindowView(UIPlayYinShen);
		}
		ChangeBtnSet(isShow) {
			if (!this.btn_set) return;
			this.btn_set.visible = isShow;
			if (isShow) this.htShow();
		}
		ChangeAll(isShow) {
			this.btn_squat.visible = isShow;
            this.btn_squat_text.visible = isShow;
			this.btn_hide.visible = isShow;
			this.btn_shoot.visible = isShow;
			this.slider_Oil.visible = isShow;
			this.btn_StartCar.visible = isShow;
			this.btn_takeup.visible = isShow;
            this.btn_takeup_text.visible = isShow;
			this.btn_forward.visible = isShow;
			this.btn_houtui.visible = isShow;
			this.joystick.visible = isShow;
			this.sight.visible = isShow;
			this.joystick_center.visible = isShow;
			this.btn_set.visible = isShow;
			this.img_xiyin.visible = isShow;
			this.img_Found.visible = isShow;
			this.btn_PropList.visible = isShow;
			if (this.img_NoSound) this.img_NoSound.visible = isShow;
			if (MainRoleMgr.Inst.canHeard) this.img_NoSound.visible = false;
			this.btn_yinshen.visible = isShow;
			this.lab_yinshenTimes.visible = isShow;
			this.btn_endIntroduce.visible = isShow;
			if (!isShow) this.htHide(isShow);
			if (!isShow) this.btn_drop.visible = isShow;
			if (this.btn_StopIntroduce) {
				if (!isShow) this.btn_StopIntroduce.visible = false;
				else this.updateStopIntroduce();
			}
		}
		onResize() {
			// super.onResize();
			// this.btn_set.x = GameConfig.viewWidth - (1280 - 960);
			// this.btn_yinshen.x = this.btn_set.x - 100;
			// this.lab_yinshenTimes.x = this.btn_yinshen.x + (89 - 14);
			// this.btn_hide.x = GameConfig.viewWidth - (1280 - 1116);
			// this.btn_takeup.x = GameConfig.viewWidth - (1280 - 1116);
			// this.sight.x = GameConfig.viewWidth / 2;
			// this.sight.y = GameConfig.viewHeight / 2;
			// this.lab_PropName.x = this.sight.x + 25;
			// this.point.x = GameConfig.viewWidth / 2;
			// this.point.y = GameConfig.viewHeight / 2;
			// this.btn_drop.x = GameConfig.viewWidth / 2;
			// this.btn_drop.y = 610;
			// if (Laya.Browser.window.qq) {
			// 	this.btn_drop.y = 463;
			// 	this.btn_drop.x += 10;
			// }
			// if (Laya.Browser.window.wx) {
			// 	this.btn_drop.y = 463;
			// 	this.btn_drop.x += 10;
			// }
			// this.img_mengban.width = GameConfig.viewWidth;
			// this.img_mengban.height = GameConfig.viewHeight;
			// this.btn_practise.x = GameConfig.viewWidth / 2;
			// this.btn_practise.y = GameConfig.viewHeight / 2;
			// this.img_End.x = GameConfig.viewWidth / 2;
			// this.img_End.y = GameConfig.viewHeight / 2;
			// this.ChangeTipsBox.x = GameConfig.viewWidth - (1280 - 892);
			// this.img_yinshen.x = GameConfig.viewWidth / 2;
			// this.img_NoSound.x = GameConfig.viewWidth / 2;
			// this.yinshenSpine.x = GameConfig.viewWidth / 2;
			// this.yinshenSpine.y = GameConfig.viewHeight / 2;
			// this.injuredSpine.x = GameConfig.viewWidth / 2;
			// this.injuredSpine.y = GameConfig.viewHeight / 2;
			// this.injuredSpine.scaleX = GameConfig.viewWidth / 1280;
			// this.dieSpine.x = GameConfig.viewWidth / 2;
			// this.dieSpine.y = GameConfig.viewHeight / 2;
			// if (this.handSpine) this.handSpine.x = GameConfig.viewWidth - 300;
			// this.tipBox.x = GameConfig.viewWidth / 2 + 25;
			// this.black.scaleX = GameConfig.viewWidth / 1280;
			// this.btn_IntroducBlack.scaleX = GameConfig.viewWidth / 1280;
			// this.img_Red.scaleX = GameConfig.viewWidth / 1280;
			// this.img_Yellow.scaleX = GameConfig.viewWidth / 1280;
			// this.btn_AddOil.x = GameConfig.viewWidth - 228;
			// this.slider_Oil.x = GameConfig.viewWidth - 228;
			// this.btn_StartCar.x = GameConfig.viewWidth - 272;
			// this.joystick.y = GameConfig.viewHeight - 248 - 50;
			// this.joystick_center.y = GameConfig.viewHeight - 273 - 50;
			this._joystick = new JoystickModule(this._view);
			// this.img_Found.x = GameConfig.viewWidth / 2;
			// this.wordsBox.x = GameConfig.viewWidth / 2;
			// this.img_xiyin.x = GameConfig.viewWidth / 2;
			// this.htShow();
		}
		htShow() {
			SDK.ins_.send(SDK_ORDER.HT_MORE_GAME_ISSHOW, {
				isShow: true,
				name: 'wx',
				parent: this._view,
				zOrder: 10,
				x: 18,
				y: 68
			});
			SDK.ins_.send(SDK_ORDER.HT_GAME_ICON_ISSHOW, {
				isShow: true,
				name: 'wx',
				parent: this._view,
				zOrder: 10,
				x: this.btn_yinshen.x - 110,
				y: 20
			});
			SDK.ins_.send(SDK_ORDER.HT_LEFT_CHOU_TI_BOX, {
				isShow: true,
				name: 'wx',
				parent: this._view,
				zOrder: 10,
				x: 0,
				y: (720 - 600) / 2
			});
			SDK.ins_.send(SDK_ORDER.HT_ICON_NO_SOUND_CHANGE, {
				isShow: true,
				name: 'wx',
				parent: this._view,
				zOrder: 10,
				x: this.btn_yinshen.x - this.btn_yinshen.width / 2 - 10,
				y: this.btn_yinshen.y + this.btn_yinshen.height / 2
			});
			SDK.ins_.send(SDK_ORDER.HT_ICON_WX, { isShow: true, name: 'wx' });
			SDK.ins_.send(SDK_ORDER.HT_MORE_GAME_ISSHOW, {
				isShow: true,
				name: 'oppo',
				parent: this._view,
				zOrder: 10,
				x: 18,
				y: 20
			});
			SDK.ins_.send(SDK_ORDER.HT_GAME_ICON_ISSHOW, {
				isShow: true,
				name: 'oppo',
				parent: this._view,
				zOrder: 10,
				x: 18,
				y: 20
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_SMALL_ISSHOW, {
				isShow: true,
				name: 'oppo',
				parent: this._view,
				adPoint: 9,
				zOrder: 10,
				x: this.btn_yinshen.x - 15,
				y: 28
			});
			SDK.ins_.send(SDK_ORDER.HT_ICON_NO_SOUND_CHANGE, {
				isShow: true,
				name: 'oppo',
				parent: this._view,
				zOrder: 10,
				x: this.btn_yinshen.x - this.btn_yinshen.width / 2 - 10,
				y: this.btn_yinshen.y + this.btn_yinshen.height / 2
			});
			SDK.ins_.send(SDK_ORDER.HT_MORE_GAME_ISSHOW, {
				isShow: true,
				name: 'vivo',
				parent: this._view,
				zOrder: 10,
				x: 18,
				y: 20
			});
			SDK.ins_.send(SDK_ORDER.HT_GAME_ICON_ISSHOW, {
				isShow: true,
				name: 'vivo',
				parent: this._view,
				zOrder: 10,
				x: this.btn_yinshen.x - 120,
				y: 20
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_SMALL_ISSHOW, {
				isShow: true,
				name: 'vivo',
				parent: this._view,
				adPoint: 9,
				zOrder: 10,
				x: this.btn_yinshen.x - 115,
				y: 28
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_FOUND_AWARD, {
				isShow: true,
				name: 'vivo'
			});
			SDK.ins_.send(SDK_ORDER.HT_ICON_NO_SOUND_CHANGE, {
				isShow: true,
				name: 'vivo',
				parent: this._view,
				zOrder: 10,
				x: this.btn_yinshen.x - this.btn_yinshen.width / 2 - 10,
				y: this.btn_yinshen.y + this.btn_yinshen.height / 2
			});
			SDK.ins_.send(SDK_ORDER.HT_MORE_GAME_ISSHOW, {
				isShow: true,
				name: 'toutiao',
				parent: this._view,
				zOrder: 10,
				x: 23,
				y: 23
			});
			SDK.ins_.send(SDK_ORDER.HT_YOU_LIKE_ICON, {
				isShow: true,
				name: 'toutiao',
				parent: this._view,
				zOrder: 10,
				x: this.btn_yinshen.x - 110,
				y: 10
			});
			SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
				isShow: true,
				name: 'toutiao',
				parent: this._view,
				zOrder: 10,
				x: this.btn_yinshen.x,
				y: this.btn_yinshen.width + this.btn_yinshen.y + 20
			});
			SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
				isShow: true,
				name: 'toutiao',
				symReco: 'recoderTips',
				parent: this._view,
				zOrder: 10,
				x: this.btn_yinshen.x,
				y: this.btn_yinshen.width + this.btn_yinshen.y + 20
			});
			SDK.ins_.send(SDK_ORDER.HT_ICON_NO_SOUND_CHANGE, {
				isShow: true,
				name: 'toutiao',
				parent: this._view,
				zOrder: 10,
				x: this.btn_yinshen.x - this.btn_yinshen.width / 2 - 10,
				y: this.btn_yinshen.y + this.btn_yinshen.height / 2
			});
			SDK.ins_.send(SDK_ORDER.HT_CHANGE_SHARE_GAME_ICON, {
				isShow: true,
				name: 'qq',
				parent: this._view,
				zOrder: 10,
				x: 30,
				y: 25
			});
			SDK.ins_.send(SDK_ORDER.HT_MORE_GAME_ISSHOW, {
				isShow: true,
				name: 'qq',
				parent: this._view,
				zOrder: 10,
				x: this.btn_yinshen.x - 110,
				y: 15
			});
			if (Laya.Browser.window.tt) this.btn_set.visible = false;
		}
		htHide(isShow) {
			SDK.ins_.send(SDK_ORDER.HT_GAME_ICON_ISSHOW, {
				isShow: false,
				name: 'wx'
			});
			SDK.ins_.send(SDK_ORDER.HT_MORE_GAME_ISSHOW, {
				isShow: false,
				name: 'wx'
			});
			SDK.ins_.send(SDK_ORDER.HT_LEFT_CHOU_TI_BOX, {
				isShow: false,
				name: 'wx'
			});
			SDK.ins_.send(SDK_ORDER.HT_ICON_NO_SOUND_CHANGE, {
				isShow: false,
				name: 'wx'
			});
			SDK.ins_.send(SDK_ORDER.HT_ICON_WX, { isShow: false, name: 'wx' });
			SDK.ins_.send(SDK_ORDER.HT_GAME_ICON_ISSHOW, {
				isShow: false,
				name: 'oppo'
			});
			SDK.ins_.send(SDK_ORDER.HT_MORE_GAME_ISSHOW, {
				isShow: false,
				name: 'oppo'
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_SMALL_ISSHOW, {
				isShow: false,
				adPoint: 9,
				name: 'oppo'
			});
			SDK.ins_.send(SDK_ORDER.HT_ICON_NO_SOUND_CHANGE, {
				isShow: false,
				name: 'oppo'
			});
			SDK.ins_.send(SDK_ORDER.HT_GAME_ICON_ISSHOW, {
				isShow: false,
				name: 'vivo'
			});
			SDK.ins_.send(SDK_ORDER.HT_MORE_GAME_ISSHOW, {
				isShow: false,
				name: 'vivo'
			});
			SDK.ins_.send(SDK_ORDER.HT_ICON_NO_SOUND_CHANGE, {
				isShow: false,
				name: 'vivo'
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_SMALL_ISSHOW, {
				isShow: false,
				adPoint: 9,
				name: 'vivo'
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_FOUND_AWARD, {
				isShow: false,
				name: 'vivo'
			});
			SDK.ins_.send(SDK_ORDER.HT_MORE_GAME_ISSHOW, {
				isShow: false,
				name: 'toutiao'
			});
			SDK.ins_.send(SDK_ORDER.HT_YOU_LIKE_ICON, {
				isShow: false,
				name: 'toutiao'
			});
			SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
				isShow: false,
				name: 'toutiao'
			});
			SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
				isShow: false,
				name: 'toutiao',
				symReco: 'recoderTips'
			});
			SDK.ins_.send(SDK_ORDER.HT_ICON_NO_SOUND_CHANGE, {
				isShow: false,
				name: 'toutiao'
			});
			SDK.ins_.send(SDK_ORDER.HT_CHANGE_SHARE_GAME_ICON, {
				isShow: false,
				name: 'qq'
			});
			SDK.ins_.send(SDK_ORDER.HT_MORE_GAME_ISSHOW, {
				isShow: false,
				name: 'qq'
			});
		}
	}

	class BaseProp {
		constructor(vo, id) {
			this.colorVc4 = new Laya.Vector4(0.195, 0.195, 0.195, 1);
			this.isTestActive = true;
			this.vo = vo;
			this.id = id;
			this.status = 1;
			this.propArr = new Array();
			this.loadhandlerArr = [];
			this.initProp();
		}
		initProp() {
			LoadQueue.Inst.loadSprite3D(
				UrlUtils.GetEntityLhUrl(this.vo.resName),
				Laya.Handler.create(this, function (sprite3D) {
					if (!SceneMgr.Inst._curScene) return;
					sprite3D = sprite3D.clone();
					SceneMgr.Inst._curScene.addChild(sprite3D);
					this.propSprite = sprite3D;
					this.propSprite.transform.position = new Laya.Vector3(
						-this.vo.x,
						this.vo.y,
						this.vo.z
					);
					this.propSprite.transform.rotationEuler = new Laya.Vector3(
						this.vo.EulerX,
						-this.vo.EulerY,
						this.vo.EulerZ
					);
					this.propSprite.transform.setWorldLossyScale(
						new Laya.Vector3(this.vo.sx, this.vo.sy, this.vo.sz)
					);
					this.setMatColor();
					this.setColiderGroup();
					this.onWake();
				}),
				this.getLoadLevel()
			);
		}
		getLoadLevel() {
			switch (this.vo.entity) {
				case PropType.NO_MUTUAL:
					return LoadLevel.EQUIP;
				case PropType.PUBLIC_COLIDER:
					return LoadLevel.SCENE;
				case PropType.PUBLIC_DOOR:
					return LoadLevel.SCENE;
				case PropType.BE_USED:
					return LoadLevel.SCENE;
				default:
					return 5;
			}
		}
		onWake() {
			this.propArr.push(this.propSprite);
			if (this.propSprite.name == 'KBNN_-1_2_2') {
				console.error('生成了');
			}
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			if (!gameUI) return;
			gameUI.ChangeBtnHide(false);
			gameUI.ChangeBtnTakeAndSight(false);
			gameUI.ChangeBtnTake(false);
		}
		useProp_ByStatus() {}
		mouseDownUp(isDown) {}
		setTargetName(target) {
			this.target = target;
		}
		BeUsed(data) {}
		setForce(vce3, sp3D) {}
		setActive(isActive) {
			if (!this.propSprite) return;
			this.propSprite.active = isActive;
			this.hideAndShow();
		}
		hideAndShow() {
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_BY_PLTFORM, {
				name: 'toutiao',
				function: 'removeDuanTouTai',
				resName: this.vo.resName,
				sprite: this.propSprite
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_BY_PLTFORM, {
				name: 'qq',
				function: 'removeDuanTouTai',
				resName: this.vo.resName,
				sprite: this.propSprite
			});
		}
		destory() {
			this.propSprite.removeSelf();
			this.propSprite.destroy(true);
			this.propSprite = null;
		}
		beRayHit() {}
		noSelect() {}
		reSet() {}
		setToStorage() {}
		timerClear() {}
		setMatColor() {
			if (
				Role.ins_.getGearStatus('drakGame') == 0 &&
				Role.ins_.getDifficulty() != 4
			)
				return;
			this.changeColor(this.propSprite);
			if (this.propSprite.meshRenderer) {
				this.propSprite.meshRenderer.sharedMaterial.albedoColor =
					this.colorVc4;
			} else if (this.propSprite.skinnedMeshRenderer) {
				this.propSprite.skinnedMeshRenderer.sharedMaterial.albedoColor =
					this.colorVc4;
			}
		}
		changeColor(sprite3D) {
			if (sprite3D.numChildren == 0) return;
			for (let i = 0; i < sprite3D.numChildren; i++) {
				let childSpr = sprite3D.getChildAt(i);
				if (!this.needChange(childSpr)) continue;
				if (childSpr.meshRenderer) {
					childSpr.meshRenderer.sharedMaterial.albedoColor =
						this.colorVc4;
				} else if (childSpr.skinnedMeshRenderer) {
					childSpr.skinnedMeshRenderer.sharedMaterial.albedoColor =
						this.colorVc4;
				}
				this.changeColor(childSpr);
			}
		}
		setColiderGroup() {
			this.changeGroup(this.propSprite);
			let physcolider = this.propSprite.getComponent(
				Laya.PhysicsCollider
			);
			let Rigidbody3D = this.propSprite.getComponent(Laya.Rigidbody3D);
			if (physcolider) {
				physcolider.collisionGroup = 32;
			}
			if (Rigidbody3D) {
				Rigidbody3D.collisionGroup = 32;
			}
		}
		changeGroup(sprite3D) {
			if (sprite3D.numChildren == 0) return;
			let physcolider;
			for (let i = 0; i < sprite3D.numChildren; i++) {
				let childSpr = sprite3D.getChildAt(i);
				let physcolider = childSpr.getComponent(Laya.PhysicsCollider);
				let Rigidbody3D = childSpr.getComponent(Laya.Rigidbody3D);
				if (physcolider) {
					physcolider.collisionGroup = 32;
				}
				if (Rigidbody3D) {
					Rigidbody3D.collisionGroup = 32;
				}
				this.changeGroup(childSpr);
			}
		}
		needChange(sp) {
			let arr = ['Eff_chekuqiang_01', 'donghua'];
			for (let i = 0; i < arr.length; i++) {
				if (sp.name == arr[i]) return false;
			}
			return true;
		}
		LoadOk() {
			for (let i = 0; i < this.loadhandlerArr.length; i++) {
				this.loadhandlerArr[i].run();
			}
			this.loadhandlerArr = null;
		}
		setLoadHandler(handler) {
			this.loadhandlerArr.push(handler);
		}
	}

	class DoorDeal {
		constructor() {}
		static openClose(
			doorSprite,
			isOpen,
			data = { openX: -90, closeX: 90 }
		) {
			if (DoorDeal.dic.get(doorSprite)) return false;
			DoorDeal.dic.set(doorSprite, true);
			let target = doorSprite.transform.localRotationEulerY + data.openX;
			if (!isOpen) {
				target = doorSprite.transform.localRotationEulerY + data.closeX;
			}
			Laya.Tween.to(
				doorSprite.transform,
				{ localRotationEulerY: target },
				800,
				Laya.Ease.cubicInOut,
				Laya.Handler.create(this, function () {
					DoorDeal.dic.remove(doorSprite);
				})
			);
			return true;
		}
		static openCloseZ(
			doorSprite,
			isOpen,
			data = { openX: -90, closeX: 90 }
		) {
			if (DoorDeal.dic.get(doorSprite)) return false;
			DoorDeal.dic.set(doorSprite, true);
			let target = doorSprite.transform.localRotationEulerZ + data.openX;
			if (!isOpen) {
				target = doorSprite.transform.localRotationEulerZ + data.closeX;
			}
			Laya.Tween.to(
				doorSprite.transform,
				{ localRotationEulerZ: target },
				800,
				Laya.Ease.cubicInOut,
				Laya.Handler.create(this, function () {
					DoorDeal.dic.remove(doorSprite);
				})
			);
			return true;
		}
	}
	DoorDeal.dic = new Dictionary$1();

	class PublicDoor extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
		}
		onWake() {
			this.propArr.push(this.propSprite);
			if (this.vo.name == 'suoyoujiaoben,men,men_06 (2)') {
				GameEventMgr.Inst.registetEvent(
					EventName.SLEEP_ROOM_DOOR,
					this.id
				);
			}
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			switch (this.status) {
				case 1:
					gameUI.ChangeBtnTake(true);
					if (this.vo.name == 'suoyoujiaoben,men,men_06 (2)') {
						GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
							id: 7
						});
					}
					break;
				case 2:
					gameUI.ChangeBtnTake(true);
					break;
				default:
					gameUI.ChangeBtnTake(false);
			}
		}
		doorClose() {
			if (this.status == 2) {
				this.useProp_ByStatus();
			}
		}
		useProp_ByStatus() {
			let data = { openX: -90, closeX: 90 };
			if (this.vo.name == 'suoyoujiaoben,men,men_06 (2)' && this.target) {
				GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
					id: 7,
					trigger: true,
					sym: 'userDoor'
				});
			}
			if (this.vo.name == 'suoyoujiaoben,men,men_05' && this.target) {
				if (
					GameEventMgr.Inst.introduceMgr.getCurId() >= 10 ||
					Role.ins_.getDataByString('introduceId') < 0
				) {
					GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
						id: 11
					});
				} else {
					let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
					gameUI.ChangeTipsBox(true, 'Please check the red indicator light on the door first!');
					return;
				}
			}
			if (this.vo.different == 1) data = { openX: 90, closeX: -90 };
			switch (this.status) {
				case 1:
					if (DoorDeal.openClose(this.propArr[0], true, data)) {
						this.status = 2;
						this.propArr[0].getComponent(
							Laya.PhysicsCollider
						).isTrigger = true;
						this.specialDeal(true);
					}
					break;
				case 2:
					if (DoorDeal.openClose(this.propArr[0], false, data)) {
						this.status = 1;
						this.propArr[0].getComponent(
							Laya.PhysicsCollider
						).isTrigger = false;
						this.specialDeal(false);
					}
					break;
			}
		}
		reSet() {
			if (this.status == 2) {
				this.target = null;
				this.useProp_ByStatus();
			}
		}
		specialDeal(isopen) {
			if (!this.target) return;
			switch (this.target.name) {
				case 'men_11':
					if (isopen) SoundMgr.Inst.playSound(63);
					else SoundMgr.Inst.playSound(64);
					break;
				case 'weibolu_02':
					if (isopen) {
						SoundMgr.Inst.playSound(66);
						GameEventMgr.Inst.sendEvent([EventName.WEI_BO_LU]);
					}
					break;
				case 'guizi_05_2':
					if (isopen) SoundMgr.Inst.playSound(69);
					else SoundMgr.Inst.playSound(70);
					break;
				default:
					if (isopen) SoundMgr.Inst.playSound(21);
					else SoundMgr.Inst.playSound(22);
					break;
			}
		}
	}

	class Window_canting extends PublicDoor {
		constructor(vo, id) {
			super(vo, id);
		}
		showCtrlUI_ByStatus() {
			super.showCtrlUI_ByStatus();
			if (
				Math.floor(MainRoleMgr.Inst.getCurRoleRotation().y * 1000) *
					Math.floor(MainRoleMgr.Inst.getCurRoleRotation().w * 1000) >
				0
			) {
				this.status = 1;
			} else {
				this.status = 2;
			}
		}
		useProp_ByStatus() {
			switch (this.status) {
				case 1:
					DoorDeal.openClose(this.propArr[0], true, {
						openX: 90,
						closeX: -90
					});
					GameEventMgr.Inst.sendEvent([EventName.THOURGE_WINDOW], {
						isOut: true
					});
					SoundMgr.Inst.playSound(3);
					Laya.timer.once(2500, this, function () {
						DoorDeal.openClose(this.propArr[0], false, {
							openX: 90,
							closeX: -90
						});
					});
					break;
				case 2:
					SoundMgr.Inst.playSound(4);
					DoorDeal.openClose(this.propArr[0], true, {
						openX: 90,
						closeX: -90
					});
					GameEventMgr.Inst.sendEvent([EventName.THOURGE_WINDOW], {
						isOut: false
					});
					Laya.timer.once(2500, this, function () {
						DoorDeal.openClose(this.propArr[0], false, {
							openX: 90,
							closeX: -90
						});
					});
					break;
			}
		}
		reSet() {}
	}

	class PublicBed extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
			this.locationPosition = new Laya.Vector3(0, -0.8, 0);
			this.lookPoint = new Laya.Vector3(0, 0, 0);
		}
		initProp() {
			super.initProp();
			if (this.data) {
				this.locationPosition = this.data.enterPosition;
				this.lookPoint = this.data.lookSize;
			}
		}
		onWake() {
			this.propArr.push(this.propSprite);
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			if (!gameUI) return;
			switch (this.status) {
				case 1:
					GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
						trigger: true,
						id: 5,
						sym: 'coliderBed'
					});
					gameUI.ChangeBtnHide(true);
					break;
				case 2:
					gameUI.ChangeBtnHide(true);
			}
		}
		useProp_ByStatus() {
			switch (this.status) {
				case 1:
					MainRoleMgr.Inst.ChangeMainRoleState(statName.hideInBed, {
						lookSize: new Laya.Vector3(
							0,
							this.propSprite.transform.rotationEuler.y,
							0
						),
						locationPosition: new Laya.Vector3(
							this.propSprite.transform.localPositionX,
							10.4 - 0.7,
							this.propSprite.transform.localPositionZ
						),
						isHide: true,
						isLockX: true,
						isLockY: false
					});
					PropMgr.Inst.setHideProp(this);
					this.status = 2;
					break;
				case 2:
					PropMgr.Inst.setHideProp(null);
					UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnHide(
						false
					);
					MainRoleMgr.Inst.ChangeMainRoleState(statName.hideInBed, {
						isHide: false,
						isLockX: false,
						isLockY: false
					});
					this.status = 1;
					break;
			}
		}
		setForce() {
			this.showCtrlUI_ByStatus();
		}
	}

	class PublicYiGui extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
		}
		initProp() {
			super.initProp();
		}
		onWake() {
			this.propArr.push(this.propSprite.getChildAt(1));
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			switch (this.status) {
				case 1:
					gameUI.ChangeBtnTake(true);
					break;
				case 2:
					gameUI.ChangeBtnTake(true);
					break;
				default:
					gameUI.ChangeBtnTake(false);
					gameUI.ChangeBtnHide(false);
			}
		}
		useProp_ByStatus() {
			switch (this.status) {
				case 1:
					if (DoorDeal.openClose(this.propArr[0], true)) {
						this.status = 2;
						SoundMgr.Inst.playSound(73);
					}
					break;
				case 2:
					if (DoorDeal.openClose(this.propArr[0], false)) {
						this.status = 1;
						SoundMgr.Inst.playSound(74);
					}
					break;
			}
		}
		reSet() {
			if (this.status == 2) this.useProp_ByStatus();
		}
	}

	class PublicColider extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
			this.reSetCd = 8;
			this.canTrigger = true;
			this.isChange = false;
		}
		onWake() {
			super.onWake();
			let rigibody = this.propArr[0].getComponent(Laya.Rigidbody3D);
			if (rigibody) {
				rigibody.isTrigger = false;
				rigibody.isKinematic = true;
				rigibody.linearDamping = 0.1;
			}
			if (this.vo.name == 'suoyoujiaoben,canting,zhuozi_03') {
				GameEventMgr.Inst.registetEvent(
					EventName.DESK_AUTO_BEFORCE,
					this.id
				);
			}
			this.updata();
		}
		setForce(vce3, sp3D) {
			this.specialDeal(sp3D);
			let rigibody = this.propArr[0].getComponent(Laya.Rigidbody3D);
			if (rigibody) {
				this.isChange = true;
				rigibody.isTrigger = false;
				rigibody.isKinematic = false;
			}
			if (this.vo.different != 65535)
				Laya.timer.once(this.reSetCd * 1000, this, this.reSet);
			MainRoleMgr.Inst.setRoleVoice();
			if (this.vo.different == 1) return;
			if (rigibody) {
				rigibody.applyForce(vce3, new Laya.Vector3(0, 2, 0));
			}
		}
		reSet() {
			if (!this) return;
			if (!this.propSprite) return;
			if (!this.propSprite.transform) return;
			this.propSprite.transform.position = new Laya.Vector3(
				-this.vo.x,
				this.vo.y,
				this.vo.z
			);
			this.propSprite.transform.rotationEuler = new Laya.Vector3(
				this.vo.EulerX,
				-this.vo.EulerY,
				this.vo.EulerZ
			);
			this.propSprite.transform.setWorldLossyScale(
				new Laya.Vector3(this.vo.sx, this.vo.sy, this.vo.sz)
			);
			let rigibody = this.propArr[0].getComponent(Laya.Rigidbody3D);
			if (rigibody) {
				rigibody.isKinematic = true;
			}
		}
		specialDeal(sp) {
			if (!sp) sp = this.vo.resName;
			switch (sp) {
				case 'Car_houbaoxian':
					SoundMgr.Inst.playSound(8);
					SoundMgr.Inst.playSound(55);
					break;
				case 'zhuozi_03':
					SoundMgr.Inst.playSound(36);
					break;
				case 'zhutai_01':
					SoundMgr.Inst.playSound(37);
					break;
				case 'bihua_01':
				case 'bihua_02':
				case 'bihua_03':
				case 'bihua_04':
				case 'bihua_05':
				case 'bihua_06':
				case 'bihua_07':
				case 'bihua_08':
				case 'bihua_09':
					SoundMgr.Inst.playSound(38);
					break;
				case 'yizi_01':
					SoundMgr.Inst.playSound(39);
					break;
				case 'men_03':
					SoundMgr.Inst.playSound(67);
					break;
				case 'men_10':
					SoundMgr.Inst.playSound(67);
					break;
				case 'panzi_01':
				case 'panzi_01 (5)':
				case 'panzi_01 (6)':
				case 'panzi_01 (7)':
				case 'panzi_01 (8)':
					SoundMgr.Inst.playSound(36);
					break;
				case 'jiaren_01':
					SoundMgr.Inst.playSound(36);
					break;
				case 'luodideng_01 (2)':
				case 'luodideng_01':
				case 'luodideng_01 (3)':
					SoundMgr.Inst.playSound(36);
					break;
				case 'tieguan_01':
					SoundMgr.Inst.playSound(36);
					break;
			}
		}
		setToStorage() {
			let transf = this.propSprite.transform;
			if (this.isChange) {
				Role.ins_.setStoragePropTransf(this.vo.name, transf);
			}
		}
		updata() {
			if (this.vo.different == 65535) {
				let propTransfs = Role.ins_.getDataByString('propTransformArr');
				if (propTransfs) {
					let transf = propTransfs[this.vo.name];
					if (transf) {
						this.propSprite.transform.position = new Laya.Vector3(
							transf.x,
							transf.y,
							transf.z
						);
						this.propSprite.transform.rotationEuler =
							new Laya.Vector3(transf.rx, transf.ry, transf.rz);
					}
				}
			}
		}
	}

	class OnOff_WoShi extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
			this.useing = false;
		}
		initProp() {
			super.initProp();
		}
		onWake() {
			super.onWake();
			if (this.vo.different == 1)
				GameEventMgr.Inst.registetEvent(
					EventName.ON_OFF_DUAN_TOU_TAI,
					this.id
				);
			this.updata();
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			switch (this.status) {
				case 1:
					gameUI.ChangeBtnTake(true);
					break;
				default:
					gameUI.ChangeBtnTake(false);
			}
		}
		setData() {
			if (this.vo.different == 2)
				this.data = {
					ro: 'X',
					num: -90,
					eventName: [EventName.DOOR_IN_MISS]
				};
			if (this.vo.different == 1) {
				this.data = {
					ro: 'Z',
					num: 90,
					eventName: [EventName.DUAN_TOU_TAI],
					isRecover: true
				};
			}
			if (this.vo.different == 3)
				this.data = {
					ro: 'X',
					num: -90,
					eventName: [EventName.SANG_NA],
					isRecover: true
				};
		}
		useProp_ByStatus() {
			this.setData();
			if (this.useing) return;
			let propString = 'localRotationEuler';
			let num;
			let baseNum;
			if (this.data) {
				propString = 'localRotationEuler' + this.data.ro;
				num = this.data.num;
			} else {
				propString = 'localRotationEulerX';
				num = -90;
			}
			baseNum = this.propArr[0].transform[propString];
			switch (this.status) {
				case 1:
					if (this.data.ro == 'X')
						Laya.Tween.to(
							this.propArr[0].transform,
							{ localRotationEulerX: baseNum + num },
							800,
							Laya.Ease.expoInOut,
							Laya.Handler.create(this, this.handler)
						);
					if (this.data.ro == 'Y')
						Laya.Tween.to(
							this.propArr[0].transform,
							{ localRotationEulerY: baseNum + num },
							800,
							Laya.Ease.expoInOut,
							Laya.Handler.create(this, this.handler)
						);
					if (this.data.ro == 'Z')
						Laya.Tween.to(
							this.propArr[0].transform,
							{ localRotationEulerZ: baseNum + num },
							800,
							Laya.Ease.expoInOut,
							Laya.Handler.create(this, this.handler)
						);
					break;
			}
			this.useing = true;
			switch (this.vo.different) {
				case 1:
					SoundMgr.Inst.playSound(78);
					break;
				case 2:
					Role.ins_.setDataByString('isOpenBookWall', true);
					SoundMgr.Inst.playSound(23);
					break;
				case 3:
					break;
			}
		}
		handler() {
			this.useing = false;
			this.status = 2;
			GameEventMgr.Inst.sendEvent(this.data.eventName, { id: this.id });
			if (this.data.isRecover) {
				let propString = 'localRotationEuler';
				let num;
				let baseNum;
				if (this.data) {
					propString = 'localRotationEuler' + this.data.ro;
					num = this.data.num;
				} else {
					propString = 'localRotationEulerX';
					num = -90;
				}
				baseNum = this.propArr[0].transform[propString];
				if (this.data.ro == 'X')
					Laya.Tween.to(
						this.propArr[0].transform,
						{ localRotationEulerX: baseNum - num },
						800,
						Laya.Ease.expoInOut,
						Laya.Handler.create(this, this.handler2),
						2000
					);
				if (this.data.ro == 'Y')
					Laya.Tween.to(
						this.propArr[0].transform,
						{ localRotationEulerY: baseNum - num },
						800,
						Laya.Ease.expoInOut,
						Laya.Handler.create(this, this.handler2),
						2000
					);
				if (this.data.ro == 'Z')
					Laya.Tween.to(
						this.propArr[0].transform,
						{ localRotationEulerZ: baseNum - num },
						800,
						Laya.Ease.expoInOut,
						Laya.Handler.create(this, this.handler2),
						2000
					);
			}
		}
		handler2() {
			this.useing = false;
			this.status = 1;
		}
		updata() {
			this.setData();
			let propString = 'localRotationEuler';
			let num;
			let baseNum;
			if (this.data) {
				propString = 'localRotationEuler' + this.data.ro;
				num = this.data.num;
			} else {
				propString = 'localRotationEulerX';
				num = -90;
			}
			baseNum = this.propArr[0].transform[propString];
			switch (this.vo.different) {
				case 2:
					if (Role.ins_.getDataByString('isOpenBookWall')) {
						this.propArr[0].transform.localRotationEulerX =
							baseNum + num;
						this.useing = true;
						break;
					}
			}
		}
	}

	class ChouTiDeal {
		constructor() {}
		static openCloseChouTi(chouTiSprite, isOpen, data) {
			if (!chouTiSprite) return false;
			if (ChouTiDeal.dic.get(chouTiSprite)) return false;
			ChouTiDeal.dic.set(chouTiSprite, true);
			let targetTramsform =
				chouTiSprite.transform.localPosition.z + data.openX;
			if (!isOpen) {
				targetTramsform =
					chouTiSprite.transform.localPosition.z + data.closeX;
			}
			Laya.Tween.to(
				chouTiSprite.transform,
				{ localPositionZ: targetTramsform },
				800,
				Laya.Ease.elasticInOut,
				Laya.Handler.create(this, function () {
					ChouTiDeal.dic.remove(chouTiSprite);
				})
			);
			return true;
		}
	}
	ChouTiDeal.dic = new Dictionary$1();

	class PublicChouTi extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
			this.status2 = 1;
			this.openCloseData = { openX: 0.4, closeX: -0.4 };
		}
		initProp() {
			super.initProp();
			if (this.data) this.openCloseData = this.data;
		}
		onWake() {
			this.propArr.push(this.propSprite.getChildByName('chouti_01'));
			this.propArr.push(this.propSprite.getChildByName('chouti_01 (1)'));
			PropPositionMgr.Inst.addChouti(
				this.vo.name,
				'chouti_01',
				this.propArr[0]
			);
			PropPositionMgr.Inst.addChouti(
				this.vo.name,
				'chouti_01 (1)',
				this.propArr[1]
			);
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			let stat = this.status;
			if (this.target == this.propArr[0]) stat = this.status2;
			switch (stat) {
				case 1:
					gameUI.ChangeBtnTake(true);
					if (
						this.vo.name ==
							'suoyoujiaoben,canting,guizi_03_wenzi' &&
						this.target == this.propArr[1]
					) {
						GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
							id: 3,
							trigger: true,
							type: IntorduceUITYPE.BlackLock,
							isShow: true
						});
						GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
							id: 3,
							trigger: true,
							type: IntorduceUITYPE.UINarrow,
							isShow: true
						});
					}
					break;
				case 2:
					gameUI.ChangeBtnTake(true);
					break;
				default:
					gameUI.ChangeBtnTake(false);
			}
		}
		useProp_ByStatus() {
			let stat = this.status2;
			let prop = this.propArr[1];
			if (this.target == this.propArr[0]) {
				stat = this.status;
				prop = this.propArr[0];
			}
			if (
				this.vo.name == 'suoyoujiaoben,canting,guizi_03_wenzi' &&
				this.target == this.propArr[1]
			) {
				GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
					id: 3,
					trigger: true,
					type: IntorduceUITYPE.BlackLock,
					isShow: false,
					sym: 'UseChouTi'
				});
				GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
					id: 3,
					trigger: true,
					type: IntorduceUITYPE.UINarrow,
					isShow: false
				});
			}
			switch (stat) {
				case 1:
					if (
						ChouTiDeal.openCloseChouTi(
							prop,
							true,
							this.openCloseData
						)
					) {
						if (this.target == this.propArr[0]) this.status = 2;
						else this.status2 = 2;
						SoundMgr.Inst.playSound(7);
					}
					break;
				case 2:
					if (
						ChouTiDeal.openCloseChouTi(
							prop,
							false,
							this.openCloseData
						)
					) {
						if (this.target == this.propArr[0]) this.status = 1;
						else this.status2 = 1;
					}
					break;
			}
		}
	}

	class ShuJia_woshi_02 extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
		}
		onWake() {
			super.onWake();
			GameEventMgr.Inst.registetEvent(EventName.DOOR_IN_MISS, this.id);
			this.updata();
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			switch (this.status) {
				case 1:
					gameUI.ChangeBtnTake(true);
					break;
				default:
					gameUI.ChangeBtnTake(false);
			}
		}
		useProp_ByStatus() {
			if (this.status == 1) {
				GameEventMgr.Inst.sendEvent([EventName.SHOW_UI_INFO_WINDOW], {
					id: 38
				});
			}
		}
		BeUsed() {
			Laya.Tween.to(
				this.propArr[0].transform,
				{
					localPositionX:
						this.propArr[0].transform.localPositionX + 1.2
				},
				3000
			);
			SoundMgr.Inst.playSound(52);
			this.status = 2;
		}
		updata() {
			if (Role.ins_.getDataByString('isOpenBookWall')) {
				this.propArr[0].transform.localPositionX =
					this.propArr[0].transform.localPositionX + 1.2;
				this.status = 2;
			}
		}
	}

	class duanTouTai_yuanzi extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
			GameEventMgr.Inst.registetEvent(EventName.DUAN_TOU_TAI, id);
		}
		BeUsed() {
			Laya.Tween.to(
				this.propArr[0].transform,
				{
					localPositionY: this.propArr[0].transform.localPositionY - 2
				},
				800,
				Laya.Ease.cubicInOut,
				Laya.Handler.create(this, function () {
					GameEventMgr.Inst.sendEvent([EventName.CUT_XI_GUA]);
					Laya.Tween.to(
						this.propArr[0].transform,
						{
							localPositionY:
								this.propArr[0].transform.localPositionY + 2
						},
						2000,
						Laya.Ease.cubicInOut
					);
				})
			);
		}
	}

	class PublicLockDoor extends PublicDoor {
		constructor(vo, id, arr_Lock) {
			super(vo, id);
			this.arr_Lock = [];
			this.arr_Lock = arr_Lock;
		}
		onWake() {
			super.onWake();
			this.updata();
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			switch (this.status) {
				case 1:
					gameUI.ChangeBtnTake(true);
					break;
				case 2:
					gameUI.ChangeBtnTake(true);
					break;
				default:
					gameUI.ChangeBtnTake(false);
			}
		}
		useProp_ByStatus() {
			switch (this.status) {
				case 1:
					if (this.lockCompare()) {
						if (DoorDeal.openClose(this.propArr[0], true))
							this.status = 2;
					} else {
						this.specialDeal();
					}
					break;
				case 2:
					if (DoorDeal.openClose(this.propArr[0], false))
						this.status = 1;
					break;
			}
		}
		lockCompare() {
			let rightNum = 0;
			for (let i = 0; i < this.arr_Lock.length; i++) {
				let arr = this.arr_Lock[i].split(',');
				if (arr[1] == '1') {
					rightNum++;
					continue;
				}
				if (MainRoleMgr.Inst.role.getHandPropId() == parseInt(arr[0])) {
					this.arr_Lock[i] = arr[0] + ',' + 1;
					rightNum++;
				}
			}
			if (rightNum === this.arr_Lock.length) return true;
			else {
				console.error(
					'【Short of ' + (this.arr_Lock.length - rightNum) + ' keys】'
				);
				return false;
			}
		}
		specialDeal() {
			switch (this.vo.different) {
				case 3:
					SoundMgr.Inst.playSound(49);
					GameEventMgr.Inst.sendEvent(
						[EventName.SHOW_UI_INFO_WINDOW],
						{ id: 13 }
					);
					break;
				case 1:
					GameEventMgr.Inst.sendEvent(
						[EventName.SHOW_UI_INFO_WINDOW],
						{ id: 10 }
					);
					break;
			}
		}
		uiSpecialDeal() {
			switch (this.vo.different) {
				case 3:
					break;
				case 1:
					break;
			}
		}
		updata() {
			if (
				Role.ins_.isActiveProp('wuQiDoorKeys') &&
				this.vo.different == 1
			) {
				this.useProp_ByStatus();
			}
			if (
				Role.ins_.isActiveProp('BaoXianGuiKeys') &&
				this.vo.different == 3
			) {
				this.useProp_ByStatus();
			}
		}
	}

	class JingGai_YuanZi extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			switch (this.status) {
				case 1:
					gameUI.ChangeBtnTake(true);
					break;
				default:
					gameUI.ChangeBtnTake(false);
			}
		}
		useProp_ByStatus() {
			if (this.status == 1) {
				let jinggai = this.propArr[0].getComponent(Laya.Animator);
				if (this.vo.different == 0)
					jinggai.play('Door_1_yuanzi_jinggai', 0);
				if (this.vo.different == 1) jinggai.play('jinggai_2', 0);
				this.status = 2;
			}
		}
	}

	class PublicGear extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
		}
		onWake() {
			super.onWake();
			GameEventMgr.Inst.registetEvent(EventName.GEAR, this.id);
			this.updata();
		}
		BeUsed(data) {
			if (data.muban) {
				GameEventMgr.Inst.sendEvent([EventName.MU_BAN_SHOW]);
				return;
			}
			if (!Role.ins_.roleData.isDropMuBan) {
				for (let i = 0; i < 6; i++) {
					this.propSprite
						.getChildAt(i)
						.getComponent(Laya.Rigidbody3D).isKinematic = false;
					this.propSprite
						.getChildAt(i)
						.getComponent(Laya.Rigidbody3D)
						.applyForce(
							new Laya.Vector3(
								-2 + 2 * Math.random(),
								-2 + 1 * Math.random(),
								-2 + 5 * Math.random()
							)
						);
				}
			}
			if (data.visible == false) return;
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeAll(false);
			SceneMgr.Inst.GetKbnnScript().SetStateMachine(null);
			SceneMgr.Inst.destoryKbnn();
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeInjuredSpine(
				true,
				true
			);
			Laya.Tween.to(
				MainRoleMgr.Inst.getRoleScript().cameraRoleObj.transform,
				{
					localPositionX: 7.2785,
					localPositionY: 12.2,
					localPositionZ: -5.7364
				},
				450,
				null
			);
			Laya.timer.once(1100, this, function () {
				MainRoleMgr.Inst.ChangeMainRoleState(statName.Die);
				if (!Role.ins_.roleData.isDropMuBan) {
					SoundMgr.Inst.playSound(17);
					Role.ins_.setDataByString('isDropMuBan', true);
				}
			});
		}
		updata() {
			if (Role.ins_.roleData.isDropMuBan) {
				for (let i = 0; i < 6; i++) {
					this.propSprite.getChildAt(i).active = false;
				}
			}
		}
	}

	class PublicMuXiang extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
			this.locationPosition = new Laya.Vector3(0, -0.8, 0);
			this.lookPoint = new Laya.Vector3(0, 0, 0);
		}
		initProp() {
			super.initProp();
			if (this.data) {
				this.locationPosition = this.data.enterPosition;
				this.lookPoint = this.data.lookSize;
			}
		}
		onWake() {
			this.propArr.push(this.propSprite);
			this.propArr.push(this.propSprite.getChildByName('muxiang_01'));
			this.gaizi = this.propSprite.getChildByName('muxiang_02');
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			switch (this.status) {
				case 1:
					gameUI.ChangeBtnHide(true);
					break;
				case 2:
					gameUI.ChangeBtnHide(true);
			}
		}
		useProp_ByStatus() {
			let cameraPoint = this.propSprite.getChildByName('cameraPoint');
			switch (this.status) {
				case 1:
					MainRoleMgr.Inst.ChangeMainRoleState(statName.hideMuXiang, {
						lookSize: new Laya.Vector3(
							0,
							this.propSprite.transform.rotationEuler.y - 90,
							0
						),
						locationPosition: cameraPoint.transform.position,
						isHide: true,
						isLockX: true,
						isLockY: false
					});
					this.gaizi.transform.localPosition = new Laya.Vector3(
						-0.023,
						0,
						0.395
					);
					this.gaizi.transform.localRotationEuler = new Laya.Vector3(
						0,
						-48.6,
						0
					);
					PropMgr.Inst.setHideProp(this);
					this.status = 2;
					break;
				case 2:
					PropMgr.Inst.setHideProp(null);
					UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnHide(
						false
					);
					MainRoleMgr.Inst.ChangeMainRoleState(statName.hideMuXiang, {
						isHide: false,
						isLockX: false,
						isLockY: false
					});
					this.gaizi.transform.localPosition = new Laya.Vector3(
						-0.3576679,
						0,
						0.97868
					);
					this.gaizi.transform.localRotationEuler = new Laya.Vector3(
						0,
						0,
						0
					);
					this.status = 1;
					break;
			}
		}
		setForce() {
			this.showCtrlUI_ByStatus();
		}
	}

	class PublicPropColiderScript extends Laya.Script3D {
		constructor() {
			super();
			this.colideLock = false;
			this.dic_Prop = PropMgr.Inst.dic_Prop;
		}
		onCollisionEnter(collision) {
			if ('RoleObj' == collision.other.owner.name) return;
			for (let i = 0; i < Floor.items.length; i++) {
				let floorItem = Floor.getItemByKey(i + 1);
				if (floorItem.nextid == collision.other.owner.name) {
					console.error('确认' + floorItem.nextid);
					let colider = this.owner.getComponent(Laya.Rigidbody3D);
					colider.linearVelocity = new Laya.Vector3(0, 0, 0);
					colider.isKinematic = true;
					SoundMgr.Inst.playSound(20);
					if (floorItem.high != 'null') {
						this.owner.transform.localPositionY =
							parseFloat(floorItem.high) + 0.1;
						Laya.Tween.to(
							this.owner.transform,
							{
								localRotationEulerX: 0,
								localRotationEulerY: 0,
								localRotationEulerZ: 0
							},
							200
						);
						this.enabled = false;
					}
				}
			}
		}
		onCollisionStay(collision) {}
		onCollisionExit(collision) {}
	}

	class PropPublicBase extends BaseProp {
		constructor(vo, id, postion, positonObj) {
			super(vo, id);
			this.showLock = false;
			this.isChange = false;
			this.position = postion;
			this.positonObj = positonObj;
			this.config = ItemResource.getItemByKey(this.id);
		}
		initProp() {
			LoadQueue.Inst.loadSprite3D(
				UrlUtils.GetEntityLhUrl(this.vo.resName),
				Laya.Handler.create(this, function (sprite3D) {
					sprite3D = sprite3D.clone();
					SceneMgr.Inst._curScene.addChild(sprite3D);
					if (!SceneMgr.Inst._curScene) {
						console.error('null');
					}
					this.propSprite = sprite3D;
					sprite3D.transform.position = new Laya.Vector3(
						-this.vo.x,
						this.vo.y,
						this.vo.z
					);
					sprite3D.transform.rotationEuler = new Laya.Vector3(
						this.vo.EulerX,
						-this.vo.EulerY,
						this.vo.EulerZ
					);
					if (this.position && this.config) {
						let arr = this.config.rotate.split(',');
						sprite3D.transform.rotationEuler = new Laya.Vector3(
							parseFloat(arr[0]),
							-parseFloat(arr[1]),
							parseFloat(arr[2])
						);
					}
					sprite3D.transform.setWorldLossyScale(
						new Laya.Vector3(this.vo.sx, this.vo.sy, this.vo.sz)
					);
					this.addColiderScript();
					this.onWake();
				}),
				5
			);
		}
		onWake() {
			super.onWake();
			let colider = this.propSprite.getComponent(Laya.Rigidbody3D);
			if (colider && this.vo.different != 25) {
				colider.isTrigger = false;
				colider.isKinematic = true;
			}
			this.propSprite.active = false;
			if (this.positonObj) {
				this.positonObj.setProp_(this);
			}
			this.testHand();
			this.testTransf();
			this.testDestory();
			this.hideAndShow();
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			gameUI.ChangeBtnTakeAndSight(true, this.config.Name);
			this.deal();
		}
		useProp_ByStatus() {
			switch (this.status) {
				case 1:
					MainRoleMgr.Inst.ChangeMainRoleState(statName.handProp, {
						sprite3D: this.propArr[0],
						propId: this.id,
						config: this.config
					});
                    PropPositionMgr.Inst.getPropPosition(this.id) && PropPositionMgr.Inst.getPropPosition(this.id).hide();
					if (this.positonObj) this.positonObj.removeProp(this);
					break;
			}
			this.isChange = true;
		}
		reSet() {
			if (!this) return;
			if (!this.propSprite) return;
			if (!this.propSprite.transform) return;
			switch (this.id) {
				case 25:
					if (this.position && this.config) {
						let arr = this.config.rotate.split(',');
						this.propSprite.transform.position = new Laya.Vector3(
							this.position.x,
							this.position.y,
							this.position.z
						);
						this.propSprite.transform.rotationEuler =
							new Laya.Vector3(
								parseFloat(arr[0]),
								-parseFloat(arr[1]),
								parseFloat(arr[2])
							);
					} else {
						this.propSprite.transform.position = new Laya.Vector3(
							-this.vo.x,
							this.vo.y,
							this.vo.z
						);
						this.propSprite.transform.rotationEuler =
							new Laya.Vector3(
								this.vo.EulerX,
								-this.vo.EulerY,
								this.vo.EulerZ
							);
					}
					break;
			}
		}
		setActive(isActive) {
			if (!this.propSprite) return;
			if (!this.isTestActive) return;
			this.propSprite.active = isActive;
		}
		addColiderScript() {
			this.coliderScript = this.propSprite.addComponent(
				PublicPropColiderScript
			);
		}
		deal() {
			switch (this.id) {
				case 28:
					GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
						trigger: true,
						id: 12,
						sym: 'found28'
					});
					break;
			}
		}
		testDestory() {
			let arrDestory = Role.ins_.getDataByString('destoryPropArr');
			if (!arrDestory) return;
			for (let i = 0; i < arrDestory.length; i++) {
				if (this.vo.different == arrDestory[i]) {
					PropMgr.Inst.setPropDestory(this.vo.different, true);
					return;
				}
			}
		}
		testHand() {
			let roleStorageData = Role.ins_.getDataByString('roleStorageData');
			if (!roleStorageData) return;
			if (roleStorageData.handProp == this.vo.different) {
				Role.ins_.setHandPropId(null);
				MainRoleMgr.Inst.ChangeMainRoleState(statName.handProp, {
					sprite3D: this.propArr[0],
					propId: this.id,
					config: this.config
				});
			}
		}
		testTransf() {
			let propTransfs = Role.ins_.getDataByString('propTransformArr');
			if (!propTransfs) return;
			let transf = propTransfs[this.id + ''];
			if (!transf) return;
			this.propSprite.removeSelf();
			SceneMgr.Inst.getScene().addChild(this.propSprite);
			this.propSprite.transform.position = new Laya.Vector3(
				transf.x,
				transf.y,
				transf.z
			);
			this.propSprite.transform.rotationEuler = new Laya.Vector3(
				transf.rx,
				transf.ry,
				transf.rz
			);
		}
		setToStorage() {
			let transf = this.propSprite.transform;
			if (this.isChange) {
				Role.ins_.setStoragePropTransf(this.id, transf);
			}
		}
		destory() {
			super.destory();
		}
	}

	class PublicBeUse extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
		}
		onWake() {
			super.onWake();
			switch (this.vo.different) {
				case 1:
					this.propArr[0] = this.propSprite.getChildByName('menshua');
					this.propArr[1] = this.propSprite.getChildByName('men_01');
					GameEventMgr.Inst.registetEvent(
						EventName.SANG_NA_MU_BAN,
						this.id
					);
					break;
				case 2:
					break;
				case 3:
					this.propArr[0] =
						this.propSprite.getChildByName('Object193');
					this.propArr[1] =
						this.propSprite.getChildByName('Object194');
					this.propArr[2] =
						this.propSprite.getChildByName('Object152');
					this.propArr[3] =
						this.propSprite.getChildByName('Object195');
					this.propArr[4] = this.propSprite;
					for (let i = 0; i < 3; i++) {
						this.propArr[i].active = false;
					}
					break;
				case 4:
					GameEventMgr.Inst.registetEvent(
						EventName.MISS_QIANG,
						this.id
					);
					break;
				case 5:
					this.propArr[1] = this.propSprite.getChildAt(0);
					this.propArr[1].active = false;
					break;
				case 6:
					GameEventMgr.Inst.registetEvent(
						EventName.OPEN_DIAN_DOOR,
						this.id
					);
					break;
				case 7:
					this.data = { isFirst: true };
					GameEventMgr.Inst.registetEvent(
						EventName.CUT_XI_GUA,
						this.id
					);
					this.propArr[0] = this.propSprite.getChildByName('test');
					this.propArr[1] =
						this.propSprite.getChildByName('xigua_02');
					this.propArr[2] =
						this.propSprite.getChildByName('xigua_01');
					this.propArr[1].active = false;
					this.propArr[2].active = false;
					break;
				case 8:
					break;
				case 9:
					GameEventMgr.Inst.registetEvent(
						EventName.CHA_XIAO_MEN,
						this.id
					);
					break;
				case 10:
					this.data = { can: true };
					GameEventMgr.Inst.registetEvent(
						EventName.LING_DANG_1,
						this.id
					);
					this.animator = this.propSprite
						.getChildByName('Cylinder028')
						.getComponent(Laya.Animator);
					break;
				case 11:
					this.data = { can: true };
					this.animator = this.propSprite
						.getChildByName('Cylinder028')
						.getComponent(Laya.Animator);
					GameEventMgr.Inst.registetEvent(
						EventName.LING_DANG_2,
						this.id
					);
					break;
				case 12:
					break;
				case 13:
					break;
				case 14:
					break;
				case 15:
					GameEventMgr.Inst.registetEvent(
						EventName.WAN_JU_DOOR,
						this.id
					);
					this.data = { can: false };
					break;
				case 16:
					this.propArr[0] =
						this.propSprite.getChildByName('test_shengjing');
					this.propSprite.getChildByName(
						'shengjing_01'
					).active = false;
					break;
				case 17:
					this.propArr[1] = this.propSprite.getChildAt(0);
					this.propArr[1].active = false;
					break;
				case 18:
					GameEventMgr.Inst.registetEvent(
						EventName.GOU_WU_SUO,
						this.id
					);
					break;
				case 19:
					this.propSprite.getChildAt(0).active = false;
					break;
				case 20:
					GameEventMgr.Inst.registetEvent(
						EventName.NIAO_LONG_DOOR,
						this.id
					);
					this.status = 1;
					break;
				case 21:
					GameEventMgr.Inst.registetEvent(
						EventName.KU_LOU_DOOR,
						this.id
					);
					this.propArr[1] =
						this.propSprite.getChildByName('jiguan_01');
					break;
				case 22:
					GameEventMgr.Inst.registetEvent(
						EventName.ZHI_ZHU_MU_BAN,
						this.id
					);
					break;
				case 23:
					GameEventMgr.Inst.registetEvent(
						EventName.ZHI_ZHU_JI_GUAN,
						this.id
					);
					break;
				case 24:
					GameEventMgr.Inst.registetEvent(EventName.SANG_NA, this.id);
					GameEventMgr.Inst.registetEvent(
						EventName.SANG_NA_SMOKE,
						this.id
					);
					this.propSprite.getChildAt(0).particleSystem.stop();
					break;
				case 25:
					GameEventMgr.Inst.registetEvent(
						EventName.YING_ER_BED,
						this.id
					);
					this.propArr[0] = this.propSprite.getChildAt(0);
					this.propArr[0].active = false;
					this.propArr[0].getComponent(Laya.Animator).enabled = false;
					break;
				case 26:
					this.propArr[0] = this.propSprite;
					this.propArr[1] = this.propSprite.getChildByName('muban');
					this.propArr[2] =
						this.propSprite.getChildByName('men_08_add');
					this.propArr[1].active = false;
					this.propArr[2].active = false;
					GameEventMgr.Inst.registetEvent(
						EventName.MU_BAN_SHOW,
						this.id
					);
					break;
				case 27:
					this.propArr[0] = this.propSprite;
					break;
				case 28:
					GameEventMgr.Inst.registetEvent(
						EventName.ZU_DUAN_COLIDER,
						this.id
					);
					this.propSprite.getComponent(
						Laya.PhysicsCollider
					).isTrigger = true;
					break;
				case 29:
					GameEventMgr.Inst.registetEvent(
						EventName.WALL_DESTORY,
						this.id
					);
					break;
				case 30:
					this.propSprite.active = false;
					GameEventMgr.Inst.registetEvent(
						EventName.FORGE_CAR,
						this.id
					);
					break;
				case 31:
					this.propSprite.active = false;
					GameEventMgr.Inst.registetEvent(
						EventName.WEI_BO_LU,
						this.id
					);
					break;
				case 32:
					GameEventMgr.Inst.registetEvent(
						EventName.HUA_KUANG_TE_XIAO,
						this.id
					);
					break;
				case 33:
					if (GameEventMgr.Inst.introduceMgr.intorduceOver()) {
						this.propSprite.removeSelf();
						this.propSprite.active = false;
						PropMgr.Inst.setPropDestory(this.id);
						return;
					}
					this.propSprite.transform.position.y += 1;
					GameEventMgr.Inst.registetEvent(
						EventName.OTHER_INTRODUCE_POINT,
						this.id
					);
					break;
			}
			this.updata();
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			switch (this.vo.different) {
				case 1:
					gameUI.ChangeBtnTake(true);
					break;
				case 3:
					gameUI.ChangeBtnTake(true);
					break;
				case 5:
					if (this.propArr[1].active) return;
					gameUI.ChangeBtnTake(true);
					break;
				case 7:
					if (this.target == this.propArr[0]) {
						gameUI.ChangeBtnTake(true);
					}
					break;
				case 8:
					gameUI.ChangeBtnTake(true);
					break;
				case 9:
					if (!Role.ins_.isActiveProp('chaXiaoKeys')) {
						gameUI.ChangeBtnTake(true);
					}
					break;
				case 12:
					break;
				case 13:
					break;
				case 14:
					gameUI.ChangeBtnTake(true);
					break;
				case 16:
					gameUI.ChangeBtnTake(true);
					break;
				case 17:
					gameUI.ChangeBtnTake(true);
					break;
				case 18:
					break;
				case 19:
					if (this.propSprite.getChildAt(0).active) return;
					gameUI.ChangeBtnTake(true);
					break;
				case 20:
					gameUI.ChangeBtnTake(true);
					break;
				case 21:
					gameUI.ChangeBtnTake(true);
					break;
				case 26:
					if (Role.ins_.roleData.siOK_MubanQiao) return;
					if (Role.ins_.getHandPropId() == 50) {
						gameUI.ChangeBtnTake(true);
						this.propArr[2].active = true;
					}
					break;
				case 27:
					if (Role.ins_.isActiveProp('gostEventKeys')) return;
					gameUI.ChangeBtnTake(true);
					break;
			}
		}
		useProp_ByStatus() {
			switch (this.vo.different) {
				case 1:
					if (this.target == this.propArr[0]) {
						if (
							this.propArr[0].transform.localRotationEulerX == -90
						)
							Laya.Tween.to(
								this.propArr[0].transform,
								{ localRotationEulerX: 0 },
								800,
								Laya.Ease.expoInOut
							);
						if (this.propArr[0].transform.localRotationEulerX == 0)
							Laya.Tween.to(
								this.propArr[0].transform,
								{ localRotationEulerX: -90 },
								800,
								Laya.Ease.expoInOut
							);
						SoundMgr.Inst.playSound(28);
					} else {
						if (
							this.propArr[0].transform.localRotationEulerX == -90
						) {
							if (
								this.propArr[1].transform.localRotationEulerY ==
								0
							)
								Laya.Tween.to(
									this.propArr[1].transform,
									{ localRotationEulerY: -90 },
									800,
									Laya.Ease.expoInOut
								);
							if (
								this.propArr[1].transform.localRotationEulerY ==
								-90
							)
								Laya.Tween.to(
									this.propArr[1].transform,
									{ localRotationEulerY: 0 },
									800,
									Laya.Ease.expoInOut
								);
						}
						if (this.propArr[0].transform.localRotationEulerX == 0)
							if (
								this.propArr[1].transform.localRotationEulerY ==
								-90
							)
								Laya.Tween.to(
									this.propArr[1].transform,
									{ localRotationEulerY: 0 },
									800,
									Laya.Ease.expoInOut
								);
					}
					break;
				case 3:
					let arr = MainRoleMgr.Inst.role.setProp(
						MainRoleMgr.Inst.role.getHandPropId(),
						'gunKeys'
					);
					let num = 0;
					if (!arr) break;
					for (let i = 0; i < arr.length; i++) {
						let strArr = arr[i].split(',');
						if (strArr[1] == '1') {
							let prop = this.propArr[parseInt(strArr[0]) - 1];
							prop.active = true;
							num++;
						}
					}
					if (MainRoleMgr.Inst.role.isActiveProp('gunKeys')) {
						this.propArr[4].active = false;
					}
					break;
				case 5:
					MainRoleMgr.Inst.role.setProp(null, 'dianDoorKeys');
					if (!MainRoleMgr.Inst.role.isActiveProp('dianDoorKeys')) {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 21 }
						);
						return;
					}
					this.propArr[1].active = true;
					MainRoleMgr.Inst.Drop();
					PropMgr.Inst.setPropDestory(23);
					Laya.Tween.to(
						this.propArr[1].transform,
						{ localPositionY: -0.043 },
						1000,
						null,
						Laya.Handler.create(this, function () {
							SoundMgr.Inst.playSound(34);
							Laya.Tween.to(
								this.propArr[1].transform,
								{ localRotationEulerY: 90 },
								800,
								null,
								Laya.Handler.create(this, function () {
									GameEventMgr.Inst.sendEvent(
										[EventName.OPEN_DIAN_DOOR],
										this.id
									);
								})
							);
						})
					);
					break;
				case 7:
					MainRoleMgr.Inst.role.setProp(null, 'cutXiGuaKeys');
					if (MainRoleMgr.Inst.role.isActiveProp('cutXiGuaKeys')) {
						this.propArr[1].active = true;
						this.propArr[2].active = true;
						this.propArr[0].active = false;
						let id = MainRoleMgr.Inst.role.getHandPropId();
						MainRoleMgr.Inst.Drop();
						PropMgr.Inst.setPropDestory(id);
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 39 }
						);
					}
					break;
				case 8:
					MainRoleMgr.Inst.role.setProp(24, 'chaXiaoKeys');
					if (MainRoleMgr.Inst.role.isActiveProp('chaXiaoKeys')) {
						Laya.Tween.to(
							this.propArr[0].transform,
							{ localPositionX: 6.37 },
							1000,
							Laya.Ease.bounceInOut,
							Laya.Handler.create(this, function () {
								this.propArr[0].getComponent(
									Laya.Rigidbody3D
								).isKinematic = false;
								GameEventMgr.Inst.sendEvent(
									[EventName.CHA_XIAO_MEN],
									{ isClose: false }
								);
								console.log('打开插销门');
							})
						);
					}
					break;
				case 9:
					GameEventMgr.Inst.sendEvent(
						[EventName.SHOW_UI_INFO_WINDOW],
						{ id: 22 }
					);
					SoundMgr.Inst.playSound(58);
					break;
				case 12:
					if (MainRoleMgr.Inst.role.isActiveProp('lingDang1Keys')) {
						GameEventMgr.Inst.removeEvent(EventName.LING_DANG_1);
						console.log('剪断 - 铃铛大门电线');
					}
					break;
				case 13:
					if (MainRoleMgr.Inst.role.isActiveProp('lingDang2Keys')) {
						GameEventMgr.Inst.removeEvent(EventName.LING_DANG_2);
						console.log('剪断 - 铃铛院子电线');
					}
					break;
				case 14:
					Laya.Tween.to(
						this.propArr[0].transform,
						{ localPositionX: -9.697 },
						800,
						Laya.Ease.expoInOut,
						Laya.Handler.create(this, function () {
							GameEventMgr.Inst.sendEvent([
								EventName.WAN_JU_DOOR
							]);
							Role.ins_.setProp(14, 'wanJuQiangKeys');
						})
					);
					break;
				case 15:
					Laya.Tween.to(
						this.propArr[0].transform,
						{ localRotationEulerY: 97 },
						1000
					);
					break;
				case 16:
					if (MainRoleMgr.Inst.role.getHandPropId() != 19) {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 17 }
						);
						return;
					}
					Role.ins_.setProp(19, 'miShiWallKeys');
					this.propArr[0].active = false;
					this.propSprite.getChildByName(
						'shengjing_01'
					).active = true;
					let id = MainRoleMgr.Inst.role.getHandPropId();
					MainRoleMgr.Inst.Drop();
					PropMgr.Inst.setPropDestory(id);
					GameEventMgr.Inst.sendEvent([EventName.MISS_QIANG]);
					break;
				case 17:
					if (MainRoleMgr.Inst.role.getHandPropId() == 31) {
						Role.ins_.setProp(31, 'rouPanZiKeys');
						this.propArr[1].active = true;
						GameEventMgr.Inst.sendEvent([EventName.ZHI_ZHU], {
							stat: 3
						});
						let id = MainRoleMgr.Inst.role.getHandPropId();
						MainRoleMgr.Inst.Drop();
						PropMgr.Inst.setPropDestory(id);
						Laya.timer.once(30000, this, function () {
							this.propArr[1].active = false;
							GameEventMgr.Inst.sendEvent([EventName.ZHI_ZHU], {
								stat: 2,
								canChange: true
							});
						});
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 26 }
						);
					}
					break;
				case 19:
					if (MainRoleMgr.Inst.role.getHandPropId() == 30) {
						let id = MainRoleMgr.Inst.role.getHandPropId();
						this.propSprite.getChildAt(0).active = true;
						GameEventMgr.Inst.sendEvent([EventName.WU_YA], {
							stat: 3,
							canChange: true
						});
						Laya.timer.once(10000, this, function () {
							this.propSprite.getChildAt(0).active = false;
							GameEventMgr.Inst.sendEvent([EventName.WU_YA], {
								stat: 5,
								canChange: true
							});
						});
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 25 }
						);
					}
					break;
				case 20:
					let data = { openX: 90, closeX: -90 };
					switch (this.status) {
						case 1:
							if (
								DoorDeal.openClose(this.propArr[0], true, data)
							) {
								this.status = 2;
								this.propArr[0].getComponent(
									Laya.PhysicsCollider
								).isTrigger = true;
							}
							break;
						case 2:
							if (
								DoorDeal.openClose(this.propArr[0], false, data)
							) {
								this.status = 1;
								this.propArr[0].getComponent(
									Laya.PhysicsCollider
								).isTrigger = false;
							}
							break;
					}
					break;
				case 21:
					SoundMgr.Inst.playSound(41);
					if (Role.ins_.getGearStatus('kuLouDoorState') == 1)
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 40 }
						);
					break;
				case 26:
					if (Role.ins_.getHandPropId() == 50) {
						MainRoleMgr.Inst.ChangeMainRoleState(
							statName.handMuBan,
							{ beHand: false, isPut: true }
						);
					}
					break;
				case 27:
					GameEventMgr.Inst.sendEvent(
						[EventName.SHOW_UI_INFO_WINDOW],
						{ id: 18 }
					);
					break;
			}
		}
		BeUsed(data) {
			switch (this.vo.different) {
				case 2:
					console.log('--------------事件：桑拿开启------------');
					GameEventMgr.Inst.sendEvent([EventName.SANG_NA_SMOKE]);
					break;
				case 4:
					Laya.Tween.to(
						this.propArr[0].transform,
						{ localPositionZ: -30 },
						8000
					);
					SoundMgr.Inst.playSound(24);
					SoundMgr.Inst.playSound(53);
					break;
				case 6:
					Laya.Tween.to(
						this.propArr[0].transform,
						{ localRotationEulerY: -90 },
						1000
					);
					break;
				case 7:
					if (Role.ins_.isActiveProp('cutXiGuaKeys')) {
						if (!this.data.isFirst) return;
						this.data.isFirst = false;
						Laya.Tween.to(
							this.propArr[1].transform,
							{
								localPositionX:
									this.propArr[1].transform.localPositionX +
									0.24,
								localPositionY:
									this.propArr[1].transform.localPositionY -
									0.1
							},
							300,
							null,
							Laya.Handler.create(this, function () {
								this.propArr[1].getComponent(
									Laya.Rigidbody3D
								).isKinematic = false;
								this.propArr[1].getComponent(
									Laya.Rigidbody3D
								).isTrigger = false;
								this.propArr[1].active = true;
								this.propArr[2].active = true;
								SoundMgr.Inst.playSound(77);
							})
						);
						Laya.timer.once(800, this, function () {
							Role.ins_.setDataByString('isCutXiGua', true);
							let sprite3D = GameEventMgr.Inst.getPropByEventName(
								EventName.SHOW_XI_GUA_PROP
							);
							sprite3D.propSprite.getComponent(
								Laya.Rigidbody3D
							).isKinematic = false;
							sprite3D.propSprite.getComponent(
								Laya.Rigidbody3D
							).isTrigger = false;
						});
					}
					break;
				case 9:
					if (data.isClose) {
						if (MainRoleMgr.Inst.role.isActiveProp('chaXiaoKeys'))
							return;
						Laya.Tween.to(
							this.propArr[0].transform,
							{ localRotationEulerY: -180 },
							800,
							Laya.Ease.bounceInOut
						);
						SoundMgr.Inst.playSound(40);
					} else {
						Laya.Tween.to(
							this.propArr[0].transform,
							{ localRotationEulerY: -90 },
							1000,
							Laya.Ease.bounceInOut
						);
						SoundMgr.Inst.playSound(57);
					}
					break;
				case 10:
					console.log('--------------铃铛响1-----------');
					if (!this.data.can) return;
					this.data.can = false;
					Laya.timer.once(500, this, function () {
						this.data.can = true;
					});
					MainRoleMgr.Inst.setRoleVoice();
					SoundMgr.Inst.playSound(16);
					this.animator.crossFade('lingdang_01', 0.2);
					break;
				case 11:
					if (!this.data.can) return;
					this.data.can = false;
					Laya.timer.once(500, this, function () {
						this.data.can = true;
					});
					MainRoleMgr.Inst.setRoleVoice();
					console.log('--------------铃铛响2-----------');
					SoundMgr.Inst.playSound(16);
					this.animator.crossFade('lingdang_01', 0.2);
					break;
				case 15:
					Laya.Tween.to(
						this.propArr[0].transform,
						{ localRotationEulerY: 160 },
						800
					);
					this.data.can = true;
					SoundMgr.Inst.playSound(71);
					break;
				case 18:
					this.propSprite.getComponent(
						Laya.Rigidbody3D
					).isKinematic = false;
					break;
				case 20:
					if (this.status == 1) {
						this.useProp_ByStatus();
					}
					break;
				case 21:
					Laya.Tween.to(
						this.propArr[1].transform,
						{ localPositionZ: 0.34 },
						1000,
						null,
						Laya.Handler.create(this, function () {
							Laya.Tween.to(
								this.propSprite.transform,
								{ localRotationEulerY: -90 },
								800
							);
						})
					);
					Role.ins_.setGearStatus(2, 'kuLouDoorState');
					break;
				case 22:
					Role.ins_.setProp(8, 'zhiZhuMuBanKeys');
					GameEventMgr.Inst.sendEvent([EventName.ZHI_ZHU], {
						stop: true
					});
					Laya.Tween.to(
						this.propArr[0].transform,
						{ localPositionY: 16.062 },
						800,
						Laya.Ease.backOut
					);
					break;
				case 23:
					GameEventMgr.Inst.sendEvent([EventName.ZHI_ZHU_MU_BAN], {
						stop: true
					});
					break;
				case 24:
					if (Role.ins_.roleData.zhengQiStat == 0) {
						Laya.timer.loop(3500, this, this.timerPublic);
						Role.ins_.roleData.zhengQiStat = 1;
						this.propSprite.getChildAt(0).particleSystem.play();
						Laya.timer.once(30000, this, function () {
							Laya.timer.clear(this, this.timerPublic);
							Role.ins_.roleData.zhengQiStat = 0;
						});
					}
					break;
				case 25:
					this.propArr[0].active = true;
					SoundMgr.Inst.playSound(26);
					this.propArr[0].getComponent(Laya.Animator).enabled = true;
					break;
				case 26:
					this.propArr[1].active = true;
					this.propArr[2].active = false;
					break;
				case 28:
					let colider = this.propSprite.getComponent(
						Laya.PhysicsCollider
					);
					colider.isTrigger = data.isTrgger;
					break;
				case 29:
					for (let i = 0; i < this.propSprite.numChildren; i++) {
						let prop = this.propSprite.getChildAt(i);
						prop.getComponent(Laya.Rigidbody3D).isKinematic = false;
						prop.getComponent(Laya.Rigidbody3D).applyForce(
							new Laya.Vector3(
								0,
								0,
								(300 + 100 * Math.random()) *
									parseInt(prop.name.split(',')[1])
							),
							null
						);
					}
					break;
				case 30:
					this.propSprite.active = true;
					this.propSprite.particleSystem.play();
					break;
				case 31:
					this.propSprite.active = true;
					this.propSprite.getChildAt(0).particleSystem.play();
					break;
				case 32:
					this.propSprite.getChildAt(0).particleSystem.play();
					this.propSprite
						.getChildAt(0)
						.getChildAt(0)
						.particleSystem.play();
					break;
				case 33:
					if (!this.propSprite) return;
					this.propSprite.transform.position.y += 1;
					break;
			}
		}
		setForce(vce) {
			switch (this.vo.different) {
				case 15:
					if (this.data.can) {
						SoundMgr.Inst.playSound(51);
						Role.ins_.setProp(14, 'wanJuQiangColiderKeys');
						Laya.Tween.to(
							this.propArr[0].transform,
							{ localRotationEulerY: 97 },
							1000
						);
					}
					break;
			}
		}
		timerPublic() {
			switch (this.vo.different) {
				case 24:
					this.propSprite.getChildAt(0).particleSystem.play();
					break;
			}
		}
		noSelect() {
			switch (this.vo.different) {
				case 26:
					this.propArr[2].active = false;
					break;
			}
		}
		updata() {
			switch (this.vo.different) {
				case 3:
					let arr = MainRoleMgr.Inst.role.setProp(
						Role.ins_.getHandPropId(),
						'gunKeys'
					);
					let num = 0;
					if (!arr) break;
					for (let i = 0; i < arr.length; i++) {
						let strArr = arr[i].split(',');
						if (strArr[1] == '1') {
							let prop = this.propArr[parseInt(strArr[0]) - 1];
							prop.active = true;
							num++;
						}
					}
					if (MainRoleMgr.Inst.role.isActiveProp('gunKeys')) {
						this.propArr[4].active = false;
					}
					break;
				case 4:
					if (Role.ins_.isActiveProp('miShiWallKeys')) {
						this.propArr[0].transform.localPositionZ = -30;
					}
					break;
				case 5:
					if (Role.ins_.isActiveProp('dianDoorKeys')) {
						this.propArr[1].active = true;
						this.propArr[1].transform.localPositionY = -0.043;
						this.propArr[1].transform.localRotationEulerY = 90;
					}
					break;
				case 6:
					if (Role.ins_.isActiveProp('dianDoorKeys')) {
						this.propArr[0].transform.localRotationEulerY = -90;
					}
					break;
				case 7:
					if (MainRoleMgr.Inst.role.isActiveProp('cutXiGuaKeys')) {
						this.propArr[1].active = true;
						this.propArr[2].active = true;
						this.propArr[0].active = false;
					}
					if (Role.ins_.getDataByString('isCutXiGua')) {
						Laya.timer.once(1500, this, function () {
							GameEventMgr.Inst.sendEvent(
								[EventName.DUAN_TOU_TAI],
								{ isRecover: true }
							);
						});
						return;
					}
					break;
				case 8:
					if (MainRoleMgr.Inst.role.isActiveProp('chaXiaoKeys')) {
						Laya.Tween.to(
							this.propArr[0].transform,
							{ localPositionX: 6.37 },
							1000,
							Laya.Ease.bounceInOut,
							Laya.Handler.create(this, function () {
								this.propArr[0].getComponent(
									Laya.Rigidbody3D
								).isKinematic = false;
							})
						);
					}
					break;
				case 9:
					if (MainRoleMgr.Inst.role.isActiveProp('chaXiaoKeys')) {
						return;
					}
					this.propArr[0].transform.localRotationEulerY = -90;
					break;
				case 12:
					if (MainRoleMgr.Inst.role.isActiveProp('lingDang1Keys')) {
						GameEventMgr.Inst.removeEvent(EventName.LING_DANG_1);
						console.log('剪断 - 铃铛大门电线');
					}
					break;
				case 13:
					if (MainRoleMgr.Inst.role.isActiveProp('lingDang2Keys')) {
						GameEventMgr.Inst.removeEvent(EventName.LING_DANG_2);
						console.log('剪断 - 铃铛院子电线');
					}
					break;
				case 14:
					if (
						MainRoleMgr.Inst.role.isActiveProp('wanJuQiangKeys') &&
						!MainRoleMgr.Inst.role.isActiveProp(
							'wanJuQiangColiderKeys'
						)
					) {
						Laya.Tween.to(
							this.propArr[0].transform,
							{ localPositionX: -9.697 },
							800,
							Laya.Ease.expoInOut,
							Laya.Handler.create(this, function () {
								GameEventMgr.Inst.sendEvent([
									EventName.WAN_JU_DOOR
								]);
							})
						);
					}
					break;
				case 15:
					if (
						MainRoleMgr.Inst.role.isActiveProp(
							'wanJuQiangColiderKeys'
						)
					) {
						Laya.Tween.to(
							this.propArr[0].transform,
							{ localRotationEulerY: 97 },
							1000
						);
					}
					break;
				case 16:
					if (Role.ins_.isActiveProp('miShiWallKeys')) {
						this.propArr[0].active = false;
						this.propSprite.getChildByName(
							'shengjing_01'
						).active = true;
					}
					break;
				case 17:
					if (Role.ins_.isActiveProp('rouPanZiKeys')) {
						this.propArr[1].active = true;
						Laya.timer.once(1500, this, function () {
							Role.ins_.setDataByString('zhiZhuLock', false);
							GameEventMgr.Inst.sendEvent([EventName.ZHI_ZHU], {
								stat: 3
							});
						});
						Laya.timer.once(15000, this, function () {
							this.propArr[1].active = false;
							Role.ins_.setDataByString('zhiZhuLock', false);
							GameEventMgr.Inst.sendEvent([EventName.ZHI_ZHU], {
								stat: 2,
								canChange: true
							});
						});
					}
					break;
				case 18:
					if (Role.ins_.isActiveProp('DogDoorKeys')) {
						this.propSprite.getComponent(
							Laya.Rigidbody3D
						).isKinematic = false;
					}
					break;
				case 19:
					break;
				case 20:
					break;
				case 21:
					if (Role.ins_.getGearStatus('kuLouDoorState') == 2) {
						this.propArr[1].transform.localPositionZ = 0.34;
						this.propSprite.transform.localRotationEulerY = -90;
					}
					break;
				case 22:
					if (Role.ins_.isActiveProp('zhiZhuMuBanKeys')) {
						this.propArr[0].transform.localPositionY = 16.062;
					}
					break;
				case 23:
					break;
				case 24:
					break;
				case 25:
					if (Role.ins_.isActiveProp('gostEventKeys')) {
						this.propArr[0].active = true;
						this.propArr[0].getComponent(
							Laya.Animator
						).enabled = true;
					}
					break;
				case 26:
					if (Role.ins_.roleData.siOK_MubanQiao) {
						this.propArr[1].active = true;
						this.propArr[2].active = false;
					}
					break;
				case 27:
					break;
				case 28:
					break;
				case 29:
					break;
				case 30:
					break;
				case 31:
					break;
				case 32:
					break;
				case 33:
					if (Role.ins_.getDataByString('introduceId') != 1) {
						this.propSprite.active = false;
					}
					break;
			}
		}
	}

	class Car extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
			this.isYinQingGai = 1;
			this.carAchive = false;
			this.stateArr = [false, false, false];
			this.moveSpeed = 0;
			this.a = 0.01;
			this.param = 1;
			this.MAX_SPEED = 0.3;
			this.num = 0;
			this.coliderZ = 4.393;
		}
		onWake() {
			GameEventMgr.Inst.registetEvent(EventName.CAR_GO, this.id);
			this.carProp = [];
			this.carProp.push(this.propSprite.getChildByName('car_wolun'));
			this.carProp.push(this.propSprite.getChildByName('car_dianping'));
			this.carProp.push(this.propSprite.getChildByName('car_yinqinggai'));
			this.carProp.push(this.propSprite.getChildByName('Car_youxiang'));
			this.carProp.push(this.propSprite.getChildByName('car_huohuasai'));
			for (let i = 0; i < this.carProp.length; i++) {
				this.carProp[i].active = false;
			}
			this.carProp[3].active = true;
			let pengzhuang = this.propSprite.getChildByName('pengzhuang');
			for (let i = 0; i < pengzhuang.numChildren; i++) {
				this.propArr.push(pengzhuang.getChildAt(i));
			}
			this.propArr.push(this.propSprite.getChildByName('Car_The_Hood'));
			this.propArr.push(this.propSprite.getChildByName('Car_Trunk'));
			this.propArr.push(this.propSprite.getChildByName('Car_RoghtDoor'));
			this.propArr.push(this.propSprite.getChildByName('Car_Glove_box'));
			this.propArr.push(this.propSprite.getChildByName('UI_huohuasai'));
			this.propArr.push(this.propSprite.getChildByName('huohuasai'));
			this.propArr.push(this.propSprite.getChildByName('Car_LeftDoor'));
			this.propArr.push(this.propSprite.getChildByName('useCarPoint'));
			this.propArr[8].active = false;
			PropPositionMgr.Inst.addChouti(
				this.vo.name,
				'Car_Glove_box',
				this.propArr[7]
			);
			this.carTransform = this.propSprite.transform;
			this.updataCar();
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			switch (this.target) {
				case this.propArr[0]:
					gameUI.ChangeBtnTake(true);
					break;
				case this.propArr[1]:
					gameUI.ChangeBtnTake(true);
					break;
				case this.propArr[2]:
					gameUI.ChangeBtnTake(true);
					break;
				case this.propArr[3]:
					if (MainRoleMgr.Inst.role.getHandPropId() == 43) {
						gameUI.ChangeBtnAddOil(true);
					} else {
						gameUI.ChangeBtnTake(true);
					}
					break;
				case this.propArr[4]:
					gameUI.ChangeBtnTake(true);
					break;
				case this.propArr[5]:
					gameUI.ChangeBtnTake(true);
					break;
				case this.propArr[6]:
					if (this.stateArr[2]) return;
					gameUI.ChangeBtnTake(true);
					break;
				case this.propArr[7]:
					gameUI.ChangeBtnTake(true);
					break;
				case this.propArr[9]:
					if (this.isYinQingGai == 2) {
						this.propArr[8].active = true;
					}
					if (
						!Role.ins_.isActiveOneProp(39, 'carKeys') ||
						!Role.ins_.isActiveOneProp(28, 'carKeys')
					) {
						gameUI.ChangeBtnTake(true);
						if (this.isYinQingGai == 1) {
						} else {
						}
					}
					break;
				case this.propArr[10]:
					gameUI.ChangeBtnTake(true);
					break;
				default:
					gameUI.ChangeBtnTake(false);
					break;
			}
			Laya.timer.once(
				200,
				this,
				function () {
					if (PropMgr.Inst.getCurTraget() != this.propArr[9])
						this.propArr[8].active = false;
				},
				null,
				true
			);
		}
		noSelect() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			gameUI.ChangeBtnAddOil(false);
		}
		useProp_ByStatus() {
			console.log(MainRoleMgr.Inst.role);
			let handId = MainRoleMgr.Inst.role.getHandPropId();
			switch (this.target) {
				case this.propArr[0]:
					if (handId == 40) {
						this.carArr = MainRoleMgr.Inst.role.setProp(
							handId,
							'carKeys'
						);
						MainRoleMgr.Inst.Drop();
						PropMgr.Inst.setPropDestory(40);
						this.propArr[0].active = false;
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 29 }
						);
					}
					break;
				case this.propArr[1]:
					if (handId == 41) {
						this.carArr = MainRoleMgr.Inst.role.setProp(
							handId,
							'carKeys'
						);
						MainRoleMgr.Inst.Drop();
						PropMgr.Inst.setPropDestory(41);
						this.propArr[1].active = false;
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 32 }
						);
					}
					break;
				case this.propArr[2]:
					if (handId == 42) {
						this.carArr = MainRoleMgr.Inst.role.setProp(
							handId,
							'carKeys'
						);
						MainRoleMgr.Inst.Drop();
						PropMgr.Inst.setPropDestory(42);
						this.propArr[2].active = false;
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 30 }
						);
					}
					break;
				case this.propArr[3]:
					GameEventMgr.Inst.sendEvent(
						[EventName.SHOW_UI_INFO_WINDOW],
						{ id: 34 }
					);
					break;
				case this.propArr[4]:
					if (!this.stateArr[0]) {
						Laya.Tween.to(
							this.propArr[4].transform,
							{ localRotationEulerX: -39 },
							800
						);
						this.stateArr[0] = true;
					} else {
						Laya.Tween.to(
							this.propArr[4].transform,
							{ localRotationEulerX: 0 },
							800
						);
						this.stateArr[0] = false;
					}
					break;
				case this.propArr[5]:
					MainRoleMgr.Inst.role.setProp(handId, 'carBeHindKeys');
					if (MainRoleMgr.Inst.role.isActiveProp('carBeHindKeys')) {
						if (!this.stateArr[1]) {
							Laya.Tween.to(
								this.propArr[5].transform,
								{ localRotationEulerX: 65 },
								800
							);
							this.stateArr[1] = true;
							SoundMgr.Inst.playSound(11);
						} else {
							Laya.Tween.to(
								this.propArr[5].transform,
								{ localRotationEulerX: 0 },
								800
							);
							this.stateArr[1] = false;
							SoundMgr.Inst.playSound(10);
						}
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 8 }
						);
					}
					break;
				case this.propArr[6]:
					this.stateArr[2] = true;
					SoundMgr.Inst.playSound(9);
					Laya.Tween.to(
						this.propArr[6].transform,
						{ localRotationEulerY: 60 },
						800,
						Laya.Ease.elasticInOut,
						Laya.Handler.create(
							this,
							function (rightDoor) {
								rightDoor.getComponent(
									Laya.Rigidbody3D
								).isKinematic = false;
								SoundMgr.Inst.playSound(80);
							},
							[this.propArr[6]]
						)
					);
					break;
				case this.propArr[7]:
					Laya.Tween.to(
						this.propArr[7].transform,
						{ localRotationEulerX: -90 },
						800
					);
					break;
				case this.propArr[9]:
					if (this.isYinQingGai == 1) {
						if (handId == 39) {
							this.carArr = MainRoleMgr.Inst.role.setProp(
								handId,
								'carKeys'
							);
							this.isYinQingGai = 2;
							MainRoleMgr.Inst.Drop();
							PropMgr.Inst.setPropDestory(39);
							return;
						} else {
							GameEventMgr.Inst.sendEvent(
								[EventName.SHOW_UI_INFO_WINDOW],
								{ id: 31 }
							);
						}
					}
					if (this.isYinQingGai == 2) {
						if (handId == 28) {
							SoundMgr.Inst.playSound(50);
							this.carArr = MainRoleMgr.Inst.role.setProp(
								handId,
								'carKeys'
							);
							this.isYinQingGai = 3;
							Laya.Tween.to(
								this.carProp[4].transform,
								{
									localPositionY:
										this.carProp[4].transform
											.localPositionY - 0.1
								},
								1000
							);
							this.propArr[9].active = false;
							return;
						} else {
							GameEventMgr.Inst.sendEvent(
								[EventName.SHOW_UI_INFO_WINDOW],
								{ id: 33 }
							);
						}
					}
					break;
				case this.propArr[10]:
					if (
						MainRoleMgr.Inst.getCurState() != statName.UseCarState
					) {
						MainRoleMgr.Inst.ChangeMainRoleState(
							statName.UseCarState,
							{ car: this, isIn: true }
						);
					} else {
						MainRoleMgr.Inst.ChangeMainRoleState(
							statName.UseCarState,
							{ car: this, isIn: false }
						);
					}
					break;
			}
			this.updataCar();
		}
		updataCar() {
			if (Role.ins_.isActiveOneProp(39, 'carKeys')) {
				for (let i = 4; i < this.carProp.length; i++) {
					this.carProp[i].active = true;
				}
			}
			if (Role.ins_.isActiveOneProp(40, 'carKeys'))
				this.carProp[0].active = true;
			if (Role.ins_.isActiveOneProp(41, 'carKeys'))
				this.carProp[1].active = true;
			if (Role.ins_.isActiveOneProp(42, 'carKeys'))
				this.carProp[2].active = true;
			if (Role.ins_.isActiveOneProp(43, 'carKeys'))
				this.carProp[3].active = true;
			let obj = Role.ins_.getDataByString('carData');
			if (obj) {
				this.propArr[4].transform.localRotationEulerX = obj.front;
				this.propArr[5].transform.localRotationEulerX = obj.behind;
				Role.ins_.setDataByString('carData', null);
			}
			if (
				Role.ins_.isActiveProp('carKeys') &&
				Role.ins_.getGearStatus('oilSate') == 1
			) {
				console.log('车辆组装完成');
				this.carAchive = true;
			}
		}
		setToStorage() {
			let obj = {
				front: this.propArr[4].transform.localRotationEulerX,
				behind: this.propArr[5].transform.localRotationEulerX
			};
			Role.ins_.setDataByString('carData', obj);
		}
		BeUsed(data) {
			if (data.dieByCar) {
				Laya.Tween.to(
					this.propSprite.transform,
					{ localPositionZ: -1 },
					1000,
					Laya.Ease.cubicIn,
					Laya.Handler.create(this, function () {
						Laya.Tween.to(
							this.propSprite.transform,
							{ localPositionZ: 4.393 },
							500,
							Laya.Ease.cubicIn,
							null,
							4000
						);
					})
				);
				return;
			}
			if (data.event == 'mousedown') {
				Laya.timer.loop(16, this, this.carMoveLoop);
			} else {
				Laya.timer.clear(this, this.carMoveLoop);
				this.moveSpeed = 0;
			}
			if (data.isForward) {
				this.param = 1;
			} else {
				this.param = -1;
			}
		}
		carMoveLoop() {
			this.moveSpeed += this.a;
			if (this.moveSpeed > this.MAX_SPEED)
				this.moveSpeed = this.MAX_SPEED;
			this.carTransform.localPositionZ += this.moveSpeed * this.param;
			if (this.carTransform.localPositionZ < -3.25) {
				this.carTransform.localPositionZ = -3.25;
				this.carShake();
			}
			if (this.carTransform.localPositionZ > this.coliderZ) {
				this.carTransform.localPositionZ = this.coliderZ;
				this.carShake();
			}
		}
		carShake() {
			Laya.timer.clear(this, this.carMoveLoop);
			this.num++;
			if (
				this.param == 1 &&
				this.moveSpeed > 0.2 &&
				Role.ins_.isActiveProp('carBigDoorKeys')
			) {
				Role.ins_.usePropCount('num_ZhuangQiang', false);
				MainRoleMgr.Inst.getRoleScript().playAni(
					'chezhen_Animation',
					1,
					0.01,
					null
				);
				GameEventMgr.Inst.sendEvent([EventName.FORGE_CAR]);
			}
			if (!Role.ins_.usePropCount('num_ZhuangQiang', true)) {
				this.moveSpeed = 0.2;
				Laya.timer.loop(16, this, this.keepGo);
				let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
				gameUI.ChangeAll(false);
				GameEventMgr.Inst.sendEvent([EventName.WALL_DESTORY]);
				GameEventMgr.Inst.sendEvent([EventName.FORGE_CAR]);
				GameMgr.Inst.winGameAni(4);
			}
		}
		keepGo() {
			this.moveSpeed += this.a;
			if (this.moveSpeed > this.MAX_SPEED)
				this.moveSpeed = this.MAX_SPEED;
			this.carTransform.localPositionZ += this.moveSpeed;
			if (this.carTransform.localPositionZ > 19) {
				this.carTransform.localPositionZ = 19;
				Laya.timer.clear(this, this.keepGo);
			}
		}
	}

	class TuZhi extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
			this.stateArr = [false, false, false];
		}
		onWake() {
			this.showArr = [];
			let pengzhuang = this.propSprite.getChildByName('pengzhuang');
			for (let i = 0; i < pengzhuang.numChildren; i++) {
				this.propArr.push(pengzhuang.getChildAt(i));
			}
			pengzhuang.getChildByName('ok').active = false;
			this.showArr.push(this.propSprite.getChildByName('qiangtuo'));
			this.showArr.push(this.propSprite.getChildByName('qiangba'));
			this.showArr.push(this.propSprite.getChildByName('qiangguan'));
			this.showArr.forEach(elm => {
				elm.active = false;
			});
			this.updata(true);
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			switch (this.target) {
				case this.propArr[0]:
					gameUI.ChangeBtnTake(true);
					break;
				case this.propArr[1]:
					gameUI.ChangeBtnTake(true);
					break;
				case this.propArr[2]:
					gameUI.ChangeBtnTake(true);
					break;
				default:
					gameUI.ChangeBtnTake(false);
					break;
			}
		}
		useProp_ByStatus() {
			let handId = MainRoleMgr.Inst.role.getHandPropId();
			switch (this.target) {
				case this.propArr[0]:
					if (handId == 1) {
						this.gunArr = MainRoleMgr.Inst.role.setProp(
							handId,
							'gunKeys'
						);
						MainRoleMgr.Inst.ChangeMainRoleState(statName.dropProp);
						PropMgr.Inst.setPropDestory(handId);
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 35 }
						);
					}
					break;
				case this.propArr[1]:
					if (handId == 2) {
						this.gunArr = MainRoleMgr.Inst.role.setProp(
							handId,
							'gunKeys'
						);
						MainRoleMgr.Inst.ChangeMainRoleState(statName.dropProp);
						PropMgr.Inst.setPropDestory(handId);
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 35 }
						);
					}
					break;
				case this.propArr[2]:
					if (handId == 3) {
						this.gunArr = MainRoleMgr.Inst.role.setProp(
							handId,
							'gunKeys'
						);
						MainRoleMgr.Inst.ChangeMainRoleState(statName.dropProp);
						PropMgr.Inst.setPropDestory(handId);
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 35 }
						);
					}
					break;
			}
			this.updata();
		}
		updata(isOnAwake = false) {
			if (Role.ins_.isActiveOneProp(1, 'gunKeys')) {
				this.showArr[0].active = true;
			}
			if (Role.ins_.isActiveOneProp(2, 'gunKeys')) {
				this.showArr[1].active = true;
			}
			if (Role.ins_.isActiveOneProp(3, 'gunKeys')) {
				this.showArr[2].active = true;
			}
			if (Role.ins_.isActiveProp('gunKeys')) {
				console.log('枪支组装完成');
				this.propArr.forEach(elem => {
					elem.active = false;
				});
				if (isOnAwake) {
					this.showArr.forEach(elem => {
						elem.active = false;
					});
				} else {
					Laya.timer.once(800, this, function () {
						this.showArr.forEach(elem => {
							elem.active = false;
						});
						GameEventMgr.Inst.sendEvent([EventName.QIANG_IS_OK]);
					});
				}
			}
		}
	}

	class Qiang extends PropPublicBase {
		constructor(vo, id, position, positionObj) {
			super(vo, id, position, positionObj);
			this.hasZiDan = false;
			this.propId = null;
		}
		onWake() {
			super.onWake();
			this.animator = this.propSprite.getComponent(Laya.Animator);
			this.animator.play('gun_ready');
			GameEventMgr.Inst.registetEvent(EventName.QIANG_IS_OK, this.id);
			for (let i = 0; i < this.propSprite.numChildren; i++) {
				this.propSprite.getChildAt(i).active = false;
			}
			this.propSprite.active = false;
			this.propSprite.transform.position = new Laya.Vector3(300, 0, 0);
			this.updata();
		}
		showCtrlUI_ByStatus() {
			super.showCtrlUI_ByStatus();
		}
		BeUsed(isUpdata = false) {
			for (let i = 0; i < this.propSprite.numChildren; i++) {
				this.propSprite.getChildAt(i).active = true;
			}
			this.propSprite.active = true;
			if (!isUpdata)
				this.propSprite.transform.position = new Laya.Vector3(
					-this.vo.x,
					this.vo.y,
					this.vo.z
				);
			else
				this.propSprite.transform.position = new Laya.Vector3(
					this.vo.x,
					this.vo.y,
					this.vo.z
				);
		}
		changeStat(stat, propId) {
			if (propId) this.propId = propId;
			switch (stat) {
				case 1:
					if (this.hasZiDan) return;
					this.hasZiDan = true;
					console.log('------------换子弹--------------');
					SoundMgr.Inst.playSound(81);
					Laya.timer.once(200, this, function () {
						SoundMgr.Inst.playSound(83);
					});
					Role.ins_.usePropCount('num_ZiDanMian', false);
					if (Role.ins_.lastNum('num_ZiDanMian') <= 2) {
						PropMgr.Inst.setPropDestory(this.propId);
					}
					this.animator.speed = 1;
					this.animator.play('gun_zhuang');
					break;
				case 2:
					if (!this.hasZiDan) return;
					console.log('------------射击----------------');
					let traget = PropMgr.Inst.getCurTraget();
					SoundMgr.Inst.playSound(68);
					Laya.timer.once(300, this, function () {
						SoundMgr.Inst.playSound(82);
					});
					this.hasZiDan = false;
					if (traget.name == 'kbnn_nainai') {
						BuffModel.Inst.AddBuff(BuffModel.BUFFID_5);
					}
					this.propSprite
						.getChildByName('Eff_gun_01')
						.getChildAt(0)
						.particleSystem.play();
					this.animator.speed = 1;
					this.animator.play('gun_sheji');
					break;
			}
		}
		useProp_ByStatus() {
			switch (this.status) {
				case 1:
					UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnShoot(
						true
					);
					MainRoleMgr.Inst.ChangeMainRoleState(statName.handProp, {
						sprite3D: this.propArr[0],
						propId: this.id,
						config: this.config
					});
					if (!this.hasZiDan) this.animator.play('gun_stand');
					if (this.positonObj) this.positonObj.removeProp(this);
                    PropPositionMgr.Inst.getPropPosition(this.id).hide();
					break;
			}
			this.isChange = true;
		}
		beRayHit() {
			if (this.hasZiDan) this.changeStat(2);
			else {
				GameEventMgr.Inst.sendEvent([EventName.SHOW_UI_INFO_WINDOW], {
					id: 6
				});
			}
		}
		updata() {
			if (Role.ins_.isActiveProp('gunKeys')) {
				this.BeUsed(true);
			}
		}
	}

	class Special_Door_LouTi extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
			this.arr_Lock = [];
		}
		onWake() {
			super.onWake();
			this.propArr.push(this.propSprite.getChildAt(0));
			this.propArr.push(this.propSprite.getChildAt(1));
			this.updata();
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			switch (this.status) {
				case 1:
					if (MainRoleMgr.Inst.role.isActiveProp('LouTiJianKeys')) {
						if (this.target == this.propArr[0]) {
							gameUI.ChangeBtnTake(true);
						}
					} else {
						if (this.target == this.propArr[1]) {
							gameUI.ChangeBtnTake(true);
						}
					}
					break;
				case 2:
					if (this.target == this.propArr[0]) {
						gameUI.ChangeBtnTake(true);
					}
					break;
				default:
					gameUI.ChangeBtnTake(false);
			}
		}
		useProp_ByStatus() {
			switch (this.status) {
				case 1:
					if (MainRoleMgr.Inst.role.isActiveProp('LouTiJianKeys')) {
						if (this.target == this.propArr[0]) {
							if (DoorDeal.openClose(this.propArr[0], true))
								this.status = 2;
						} else {
							GameEventMgr.Inst.sendEvent(
								[EventName.SHOW_UI_INFO_WINDOW],
								{ id: 14 }
							);
						}
					} else {
						if (this.target == this.propArr[1]) {
							MainRoleMgr.Inst.role.setProp(
								null,
								'LouTiJianKeys'
							);
							if (
								MainRoleMgr.Inst.role.isActiveProp(
									'LouTiJianKeys'
								)
							) {
								SoundMgr.Inst.playSound(32);
								Laya.Tween.to(
									this.propArr[2].transform,
									{ localPositionZ: -0.77 },
									1000,
									Laya.Ease.backInOut
								);
							} else {
								SoundMgr.Inst.playSound(56);
								GameEventMgr.Inst.sendEvent(
									[EventName.SHOW_UI_INFO_WINDOW],
									{ id: 14 }
								);
							}
						}
					}
					break;
				case 2:
					if (DoorDeal.openClose(this.propArr[0], false))
						this.status = 1;
					break;
			}
		}
		updata() {
			if (MainRoleMgr.Inst.role.isActiveProp('LouTiJianKeys')) {
				this.propArr[2].transform.localPositionZ = -0.77;
			}
		}
	}

	class Special_Shui_Jing extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
		}
		onWake() {
			this.propArr.push(
				this.propSprite.getChildByName('Test').getChildAt(0)
			);
			this.propArr.push(this.propSprite.getChildByName('shuijing_02'));
			this.propArr.push(this.propSprite.getChildByName('shuijing_03_4'));
			this.propArr.push(this.propSprite.getChildByName('shuijing_03_3'));
			this.propArr.push(this.propSprite.getChildByName('shuijing_03_2'));
			this.propArr[1].active = false;
			this.isPlaying = false;
			this.updata();
			this.ani_ShuiTong = this.propArr[2].getComponent(Laya.Animator);
			this.ani_Shengzi = this.propArr[3].getComponent(Laya.Animator);
			this.ani_ZhuanTong = this.propArr[4].getComponent(Laya.Animator);
			this.ani_ShuiTong.enabled = false;
			this.ani_Shengzi.enabled = false;
			this.ani_ZhuanTong.enabled = false;
		}
		setActive(isActive) {
			if (!this.propSprite) return;
			this.propSprite.active = isActive;
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			switch (this.status) {
				case 1:
					gameUI.ChangeBtnTake(true);
					break;
				case 2:
					gameUI.ChangeBtnTake(true);
					break;
			}
		}
		useProp_ByStatus() {
			switch (this.status) {
				case 1:
					MainRoleMgr.Inst.role.setProp(null, 'shuiJingKeys');
					if (MainRoleMgr.Inst.role.isActiveProp('shuiJingKeys')) {
						this.updata();
						let id = MainRoleMgr.Inst.role.getHandPropId();
						MainRoleMgr.Inst.Drop();
						PropMgr.Inst.setPropDestory(id);
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 24 }
						);
					}
					break;
			}
		}
		mouseDownUp(isdown) {
			if (this.status == 1) return;
			if (isdown) {
				Laya.timer.loop(16, this, this.shuiJingTimer);
				this.ani_ShuiTong.enabled = true;
				this.ani_Shengzi.enabled = true;
				this.ani_ZhuanTong.enabled = true;
				console.error('【开始播放】');
			} else {
				console.error('【停止播放】');
				Laya.timer.clear(this, this.shuiJingTimer);
				this.isPlaying = false;
				this.ani_ShuiTong.speed = 0;
				this.ani_Shengzi.speed = 0;
				this.ani_ZhuanTong.speed = 0;
			}
		}
		shuiJingTimer() {
			this.propArr[1].transform && (this.propArr[1].transform.localRotationEulerZ += 3);
			if (!this.isPlaying) {
				this.isPlaying = true;
				this.ani_ShuiTong.speed = 1;
				this.ani_Shengzi.speed = 1;
				this.ani_ZhuanTong.speed = 1;
				this.ani_ShuiTong.play('shuijing_Animation_shuitong_up');
				this.ani_Shengzi.play('shuijing_Animation_up');
				this.ani_ZhuanTong.play('shuijing_Animation_1');
			}
			if (this.propArr[2].transform.localPositionY >= 0.4) {
				let pos = PropPositionMgr.Inst.getAbPositon(62);
                if(!pos.prop[0]) return;
				pos.prop[0].propSprite.active = true;
				pos.prop[0].propSprite.transform.position = pos.arrPosition[0];
			}
		}
		updata() {
			if (MainRoleMgr.Inst.role.isActiveProp('shuiJingKeys')) {
				this.propArr[1].active = true;
				this.status = 2;
			}
		}
	}

	class Special_Da_Men extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
			this.isFirst = true;
			this.isFirst_prop8 = true;
			this.isFirst_prop6 = true;
		}
		onWake() {
			this.propArr[0] = this.propSprite.getChildByName('men_02_1');
			this.propArr[1] = this.propSprite.getChildByName('men_02_2');
			this.propArr[2] = this.propSprite.getChildByName('men_02_3');
			this.propArr[3] = this.propSprite.getChildByName('suoxin');
			this.propArr[4] = this.propSprite.getChildByName('men_02_4');
			this.propArr[5] = this.propSprite.getChildByName('dikusuo (1)');
			this.propArr[6] = this.propSprite
				.getChildByName('men_02')
				.getChildByName('dianxiantest');
			this.propArr[7] = this.propSprite.getChildByName('men_02_6');
			this.propArr[8] = this.propSprite.getChildByName('men_02_6 (1)');
			this.propArr[9] = this.propSprite.getChildByName('dianxian_01');
			this.propArr[10] = this.propSprite.getChildByName('dianxian_02');
			this.propArr[11] = this.propSprite.getChildByName('wenzi_01');
			this.propArr[10].active = false;
			GameEventMgr.Inst.registetEvent(EventName.DA_MEN, this.id);
			this.updata();
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
				id: 8,
				trigger: true,
				sym: 'addPropInfo'
			});
			switch (this.target) {
				case this.propArr[0]:
					gameUI.ChangeBtnTake(true);
					break;
				case this.propArr[1]:
					if (
						MainRoleMgr.Inst.role.isActiveOneProp(13, 'bigDoorKeys')
					) {
						gameUI.ChangeBtnTake(true);
					}
					break;
				case this.propArr[5]:
					if (!Role.ins_.isActiveOneProp(13, 'bigDoorKeys')) {
						gameUI.ChangeBtnTake(true);
					}
					break;
				case this.propArr[4]:
					if (!Role.ins_.isActiveOneProp(14, 'bigDoorKeys')) {
						gameUI.ChangeBtnTake(true);
					}
					break;
				case this.propArr[3]:
					gameUI.ChangeBtnTake(true);
					break;
				case this.propArr[6]:
					gameUI.ChangeBtnTake(true);
					if (this.isFirst_prop8) {
						if (GameEventMgr.Inst.introduceMgr.getCurId() == 7) {
							GameEventMgr.Inst.sendEvent(
								[EventName.INTRODUCE_MGS],
								{ id: 8 }
							);
							this.isFirst_prop8 = false;
						}
						return;
					}
					GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
						id: 15,
						trigger: true,
						sym: 'foundXian'
					});
					break;
				case this.propArr[8]:
					gameUI.ChangeBtnTake(true);
					if (this.isFirst_prop8) {
						GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
							id: 8
						});
						this.isFirst_prop8 = false;
					}
					break;
			}
		}
		useProp_ByStatus() {
			switch (this.target) {
				case this.propArr[0]:
					if (MainRoleMgr.Inst.role.getHandPropId() == 18) {
						MainRoleMgr.Inst.role.setProp(
							18,
							'bigDoorDownMoodKeys'
						);
						this.propArr[0].getComponent(
							Laya.Rigidbody3D
						).isKinematic = false;
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 16 }
						);
					}
					break;
				case this.propArr[1]:
					if (MainRoleMgr.Inst.role.getHandPropId() == 18) {
						MainRoleMgr.Inst.role.setProp(18, 'bigDoorKeys');
						this.propArr[1].getComponent(
							Laya.Rigidbody3D
						).isKinematic = false;
						this.propArr[1]
							.getComponent(Laya.Rigidbody3D)
							.applyForce(new Laya.Vector3(-20, 0, 0));
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 16 }
						);
					}
					break;
				case this.propArr[5]:
					if (MainRoleMgr.Inst.role.getHandPropId() == 13) {
						MainRoleMgr.Inst.role.setProp(13, 'bigDoorKeys');
						this.propArr[5].getComponent(
							Laya.Rigidbody3D
						).isKinematic = false;
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 11 }
						);
					}
					break;
				case this.propArr[4]:
					if (MainRoleMgr.Inst.role.getHandPropId() == 14) {
						MainRoleMgr.Inst.role.setProp(14, 'bigDoorKeys');
						this.propArr[4].getComponent(
							Laya.Rigidbody3D
						).isKinematic = false;
						Laya.Tween.to(
							this.propArr[2].transform,
							{ localPositionZ: 0.093 },
							800,
							null,
							Laya.Handler.create(this, function () {
								let Rigidbody3D = this.propArr[2].getComponent(
									Laya.Rigidbody3D
								);
								Rigidbody3D.isKinematic = false;
								Rigidbody3D.isTrigger = false;
							}),
							800
						);
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 12 }
						);
					}
					break;
				case this.propArr[3]:
					this.checkOk();
					break;
				case this.propArr[6]:
					if (GameEventMgr.Inst.introduceMgr.getCurId() == 8) {
						if (
							!MainRoleMgr.Inst.role.isActiveOneProp(
								28,
								'bigDoorKeys'
							)
						) {
							GameEventMgr.Inst.sendEvent(
								[EventName.SHOW_UI_INFO_WINDOW],
								{ id: 37 }
							);
						}
						GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
							trigger: true,
							id: 8,
							sym: 'clickProp6'
						});
						return;
					}
					GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
						id: 15,
						trigger: true,
						sym: 'cutXian'
					});
					if (MainRoleMgr.Inst.role.getHandPropId() == 28) {
						MainRoleMgr.Inst.role.setProp(28, 'bigDoorKeys');
						SDK.ins_.send(SDK_ORDER.CHANGE_GAME_BY_PLTFORM, {
							name: 'toutiao',
							function: 'showMsgIntroduce',
							type: 'Large electrical box'
						});
						SoundMgr.Inst.playSound(48);
						this.propArr[8].meshRenderer.material =
							new Laya.BlinnPhongMaterial();
						this.propArr[8].meshRenderer.material.albedoColor =
							new Laya.Vector4(0, 255, 0, 255);
						this.propArr[9].active = false;
						this.propArr[10].active = true;
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 23 }
						);
					}
					break;
				case this.propArr[8]:
					if (
						!MainRoleMgr.Inst.role.isActiveOneProp(
							28,
							'bigDoorKeys'
						)
					) {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 37 }
						);
					}
					GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
						trigger: true,
						id: 8,
						sym: 'clickProp6'
					});
					break;
			}
		}
		checkOk() {
			if (
				MainRoleMgr.Inst.role.isActiveProp('bigDoorKeys') &&
				Role.ins_.isActiveProp('daDianXiangKeys') &&
				Role.ins_.isActiveProp('bigDoorDownMoodKeys')
			) {
				if (MainRoleMgr.Inst.role.getHandPropId() == 9) {
					console.log(
						'-------------------------------游戏通关------------------------------'
					);
					GameMgr.Inst.winGameAni(null);
					UISystem.Inst.GetWindowView(UIGamePlayView).ChangeImgBlack(
						true,
						1000,
						null
					);
				} else {
					GameEventMgr.Inst.sendEvent(
						[EventName.SHOW_UI_INFO_WINDOW],
						{ id: 7 }
					);
				}
			} else {
				if (MainRoleMgr.Inst.role.getHandPropId() != 9)
					GameEventMgr.Inst.sendEvent(
						[EventName.SHOW_UI_INFO_WINDOW],
						{ id: 7 }
					);
			}
		}
		updata() {
			if (Role.ins_.isActiveOneProp(13, 'bigDoorKeys')) {
				this.propArr[5].getComponent(
					Laya.Rigidbody3D
				).isKinematic = false;
				this.propArr[5].active = false;
			}
			if (Role.ins_.isActiveOneProp(14, 'bigDoorKeys')) {
				this.propArr[4].getComponent(
					Laya.Rigidbody3D
				).isKinematic = false;
				this.propArr[4].active = false;
				this.propArr[2].transform.localPositionZ =
					this.propArr[2].transform.localPositionZ - 0.3677;
			}
			if (Role.ins_.isActiveOneProp(28, 'bigDoorKeys')) {
				this.propArr[8].meshRenderer.material =
					new Laya.BlinnPhongMaterial();
				this.propArr[8].meshRenderer.material.albedoColor =
					new Laya.Vector4(0, 255, 0, 255);
				this.propArr[9].active = false;
				this.propArr[10].active = true;
			}
			if (Role.ins_.isActiveProp('daDianXiangKeys')) {
				this.propArr[7].meshRenderer.material =
					new Laya.BlinnPhongMaterial();
				this.propArr[7].meshRenderer.material.albedoColor =
					new Laya.Vector4(0, 255, 0, 255);
			}
			if (Role.ins_.isActiveProp('bigDoorDownMoodKeys')) {
				this.propArr[0].getComponent(
					Laya.Rigidbody3D
				).isKinematic = false;
			}
			if (Role.ins_.isActiveOneProp(18, 'bigDoorKeys')) {
				this.propArr[1].getComponent(
					Laya.Rigidbody3D
				).isKinematic = false;
				this.propArr[1]
					.getComponent(Laya.Rigidbody3D)
					.applyForce(new Laya.Vector3(-20, 0, 0));
			}
			this.propArr[11].active = false;
			if (Role.ins_.getDifficulty() == 0) {
				this.propArr[11].active = true;
			}
		}
		BeUsed(data) {
			if (data.xia) {
				this.propArr[7].meshRenderer.material =
					new Laya.BlinnPhongMaterial();
				this.propArr[7].meshRenderer.material.albedoColor =
					new Laya.Vector4(0, 255, 0, 255);
			}
		}
		setToStorage() {
			super.setToStorage();
		}
	}

	class Specail_Zhi_Zhu extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
			this.panziPosition = new Laya.Vector3(6.805, 15.569, -8.293);
			this.soundArr = [false, false, false];
		}
		onWake() {
			super.onWake();
			GameEventMgr.Inst.registetEvent(EventName.ZHI_ZHU, this.id);
			this.oldPostion = new Laya.Vector3(
				this.propSprite.transform.position.x,
				this.propSprite.transform.position.y,
				this.propSprite.transform.position.z
			);
		}
		BeUsed(data) {
			if (Role.ins_.roleData.zhiZhuLock) return;
			Role.ins_.roleData.zhiZhuLock = true;
			Laya.timer.loop(16, this, this.zhiZhuTimer, [data], true);
		}
		stop(isReset) {
			Role.ins_.roleData.zhiZhuLock = false;
			Laya.timer.clear(this, this.zhiZhuTimer);
			if (isReset) this.propSprite.transform.position = this.oldPostion;
			SoundMgr.Inst.stopSound(46);
			SoundMgr.Inst.stopSound(47);
			SoundMgr.Inst.stopSound(45);
			this.soundArr = [false, false, false];
		}
		zhiZhuTimer(data) {
			if (!Role.ins_.roleData.zhiZhuLock) return;
			if (Role.ins_.isActiveProp('zhiZhuMuBanKeys')) {
				Laya.timer.clear(this, this.zhiZhuTimer);
				return;
			}
			if (this.stat != 3 || data.canChange) {
				this.stat = data.stat;
			}
			switch (this.stat) {
				case 1:
					let rolePostion = MainRoleMgr.Inst.getCurRolePosition();
					if (!this.soundArr[0]) {
						this.soundArr[0] = true;
						this.soundArr[1] = false;
						this.soundArr[2] = false;
						SoundMgr.Inst.playSound(45);
						SoundMgr.Inst.stopSound(46);
						SoundMgr.Inst.stopSound(47);
						console.error('【蜘蛛】: 找人');
					}
					this.go(rolePostion);
					break;
				case 2:
					if (!this.soundArr[1]) {
						this.soundArr[1] = true;
						this.soundArr[0] = false;
						this.soundArr[2] = false;
						SoundMgr.Inst.playSound(46);
						SoundMgr.Inst.stopSound(45);
						SoundMgr.Inst.stopSound(47);
						console.error('【蜘蛛】: 回窝');
					}
					this.go(this.oldPostion, true);
					break;
				case 3:
					this.go(this.panziPosition);
					break;
			}
		}
		go(targert, timerClear) {
			let spiderPositon = this.propSprite.transform.position;
			let vct3 = new Laya.Vector3();
			Laya.Vector3.subtract(spiderPositon, targert, vct3);
			if (Math.abs(vct3.x) > 0.5) {
				this.propSprite.transform.lookAt(
					targert,
					new Laya.Vector3(0, 1, 0),
					false
				);
				Laya.Vector3.normalize(vct3, vct3);
				this.propSprite.transform.translate(
					new Laya.Vector3(-vct3.x * 0.08, 0, -vct3.z * 0.08),
					false
				);
			} else {
				if (timerClear) {
					this.stop();
					console.error('【蜘蛛】：停止');
				} else {
					SoundMgr.Inst.playSound(47);
					console.error('【蜘蛛】: 进食');
				}
			}
		}
	}

	class Special_Hua_Kuang extends PropPublicBase {
		constructor(vo, id, PropPublicBase, positionObj) {
			super(vo, id, PropPublicBase, positionObj);
		}
		onWake() {
			super.onWake();
			this.propSprite.getChildByName('donghua').active = false;
			this.updateHuaKuang();
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			if (MainRoleMgr.Inst.role.isActiveProp('huaKuangKeys')) return;
			gameUI.ChangeBtnTake(true);
		}
		useProp_ByStatus() {
			MainRoleMgr.Inst.role.setProp(null, 'huaKuangKeys');
			let id = MainRoleMgr.Inst.role.getHandPropId();
			if (!Role.ins_.isActiveOneProp(id, 'huaKuangKeys')) {
				GameEventMgr.Inst.sendEvent([EventName.SHOW_UI_INFO_WINDOW], {
					id: 36
				});
			} else {
                MainRoleMgr.Inst.Drop();
				PropMgr.Inst.setPropDestory(id);
                PropPositionMgr.Inst.getPropPosition(id).hide();
            }
            this.updateHuaKuang();
		}
		updateHuaKuang() {
			let arr = MainRoleMgr.Inst.role.roleData.huaKuangKeys;
			for (let i = 0; i < arr.length; i++) {
				let id = parseInt(arr[i].split(',')[0]);
				let has = arr[i].split(',')[1];
				this.propSprite.getChildByName(
					'huakuangsuipina_0' + (id - 33)
				).active = false;
				if (has == '1') {
					this.propSprite.getChildByName(
						'huakuangsuipina_0' + (id - 33)
					).active = true;
				}
			}
			if (MainRoleMgr.Inst.role.isActiveProp('huaKuangKeys')) {
				console.log('-------------【画框完成】---------------');
				this.propSprite.getChildByName('donghua').active = true;
				GameEventMgr.Inst.sendEvent([EventName.HUA_KUANG_TE_XIAO]);
				this.propSprite.getComponent(Laya.Rigidbody3D).isTrigger = true;
				this.propSprite.getComponent(
					Laya.Rigidbody3D
				).isKinematic = true;
			}
		}
	}

	class DianXiang extends PublicLockDoor {
		constructor(vo, id) {
			super(vo, id, ['17,0']);
		}
		initProp() {
			super.initProp();
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			switch (this.status) {
				case 1:
					gameUI.ChangeBtnTake(true);
					break;
				case 2:
					gameUI.ChangeBtnTake(true);
					break;
				default:
					gameUI.ChangeBtnTake(false);
			}
		}
		useProp_ByStatus() {
			switch (this.status) {
				case 1:
					if (this.lockCompare()) {
						this.propArr[0].getComponent(
							Laya.Rigidbody3D
						).isKinematic = false;
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 15 }
						);
					}
					break;
			}
		}
	}

	class DaDianXiang extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
		}
		onWake() {
			super.onWake();
			this.propArr[0] = this.propSprite.getChildByName('dianxiang_2');
			this.propArr[1] = this.propSprite.getChildByName('dianxian_01');
			this.propArr[2] = this.propSprite.getChildByName('dianxian_02');
			this.propArr[2].active = false;
			this.updata();
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			switch (this.target) {
				case this.propArr[0]:
					gameUI.ChangeBtnTake(true);
					GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
						trigger: true,
						id: 13,
						type: IntorduceUITYPE.BlackLock,
						isShow: true
					});
					GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
						trigger: true,
						id: 13,
						type: IntorduceUITYPE.UINarrow,
						isShow: true
					});
					break;
				case this.propArr[1]:
					gameUI.ChangeBtnTake(true);
					GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
						trigger: true,
						id: 14,
						type: IntorduceUITYPE.BlackLock,
						isShow: true
					});
					GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
						trigger: true,
						id: 14,
						type: IntorduceUITYPE.UINarrow,
						isShow: true
					});
					break;
			}
		}
		useProp_ByStatus() {
			switch (this.target) {
				case this.propArr[0]:
					Laya.Tween.to(
						this.propArr[0].transform,
						{ localRotationEulerY: -188 },
						800,
						null
					);
					GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
						trigger: true,
						id: 13,
						sym: 'useDianXiang'
					});
					break;
				case this.propArr[1]:
					MainRoleMgr.Inst.role.setProp(null, 'daDianXiangKeys');
					if (MainRoleMgr.Inst.role.isActiveProp('daDianXiangKeys')) {
						GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
							trigger: true,
							id: 14,
							sym: 'useDianXian'
						});
						this.propArr[1].active = false;
						this.propArr[2].active = true;
						GameEventMgr.Inst.sendEvent([EventName.DA_MEN], {
							xia: true
						});
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 23 }
						);
					}
					break;
			}
		}
		updata() {
			if (MainRoleMgr.Inst.role.isActiveProp('daDianXiangKeys')) {
				this.propArr[0].transform.localRotationEulerY = -188;
				this.propArr[1].active = false;
				this.propArr[2].active = true;
			}
		}
	}

	class MuBanMen extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
			this.select = 0;
		}
		onWake() {
			for (let i = 0; i < this.propSprite.numChildren; i++) {
				this.propArr.push(this.propSprite.getChildAt(i));
			}
			this.update();
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			switch (this.target) {
				case this.propArr[0]:
					this.select = 0;
					gameUI.ChangeBtnTake(true);
					break;
				case this.propArr[1]:
					this.select = 1;
					gameUI.ChangeBtnTake(true);
					break;
				case this.propArr[2]:
					this.select = 2;
					gameUI.ChangeBtnTake(true);
					break;
				case this.propArr[3]:
					this.select = 3;
					gameUI.ChangeBtnTake(true);
					break;
				case this.propArr[4]:
					this.select = 4;
					gameUI.ChangeBtnTake(true);
					break;
			}
		}
		useProp_ByStatus() {
			if (
				MainRoleMgr.Inst.role.getHandPropId() == 18 &&
				!MainRoleMgr.Inst.role.isActivePropByIndex(
					'muLanMen' + this.vo.different + 'Keys',
					this.select
				)
			) {
				if (this.select == this.propSprite.numChildren - 1) {
					MainRoleMgr.Inst.role.setPropByIndex(
						'muLanMen' + this.vo.different + 'Keys',
						this.select
					);
					this.target.getComponent(Laya.Rigidbody3D).isTrigger = true;
					this.target.getComponent(
						Laya.Rigidbody3D
					).isKinematic = true;
					SoundMgr.Inst.playSound(54);
					if (
						MainRoleMgr.Inst.role.isActivePropByIndex(
							'muLanMen' + this.vo.different + 'Keys',
							this.select
						)
					) {
						Laya.Tween.to(
							this.target.transform,
							{ localRotationEulerX: -90, localPositionY: 0.07 },
							700,
							Laya.Ease.bounceOut
						);
					}
					return;
				}
				SoundMgr.Inst.playSound(54);
				MainRoleMgr.Inst.role.setPropByIndex(
					'muLanMen' + this.vo.different + 'Keys',
					this.select
				);
				if (
					MainRoleMgr.Inst.role.isActivePropByIndex(
						'muLanMen' + this.vo.different + 'Keys',
						this.select
					)
				) {
					this.target.getComponent(Laya.Rigidbody3D).isTrigger = true;
					this.target.getComponent(
						Laya.Rigidbody3D
					).isKinematic = true;
					Laya.Tween.to(
						this.target.transform,
						{
							localRotationEulerX: 90,
							localRotationEulerY: 20 - 40 * Math.random()
						},
						700,
						Laya.Ease.bounceOut
					);
				}
			} else if (
				MainRoleMgr.Inst.role.isActivePropByIndex(
					'muLanMen' + this.vo.different + 'Keys',
					this.select
				)
			) {
				this.target.active = false;
				GameEventMgr.Inst.sendEvent([EventName.MU_BAN_HAND], {
					sp3: this.target
				});
			} else {
				GameEventMgr.Inst.sendEvent([EventName.SHOW_UI_INFO_WINDOW], {
					id: 16
				});
			}
		}
		update() {
			for (let i = 0; i < 5; i++) {
				if (
					MainRoleMgr.Inst.role.isActivePropByIndex(
						'muLanMen' + this.vo.different + 'Keys',
						i
					)
				) {
					this.target = this.propArr[i];
					this.propArr[i].getComponent(
						Laya.Rigidbody3D
					).isTrigger = true;
					this.propArr[i].getComponent(
						Laya.Rigidbody3D
					).isKinematic = true;
					if (i == this.propSprite.numChildren - 1) {
						this.target.transform.localRotationEulerX = -90;
						this.target.transform.localPositionY = 0.07;
						Laya.Tween.to(
							this.target.transform,
							{ localRotationEulerX: -90, localPositionY: 0.07 },
							700,
							Laya.Ease.bounceOut
						);
						continue;
					}
					this.target.transform.localRotationEulerX = 90;
					this.target.transform.localRotationEulerY =
						20 - 40 * Math.random();
					Laya.Tween.to(
						this.target.transform,
						{
							localRotationEulerX: 90,
							localRotationEulerY: 20 - 40 * Math.random()
						},
						700,
						Laya.Ease.bounceOut
					);
				}
			}
		}
	}

	class GouShe extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
		}
		onWake() {
			this.propArr.push(
				this.propSprite.getChildByName('goushe_jiguan_02')
			);
			this.propArr.push(this.propSprite.getChildAt(0).getChildAt(0));
			this.propArr.push(this.propSprite.getChildAt(0).getChildAt(1));
			this.propArr[1].active = false;
			this.propArr[2].active = false;
			this.propArr.push(
				this.propSprite.getChildAt(0).getChildAt(2).getChildAt(0)
			);
			this.propArr.push(
				this.propSprite.getChildAt(0).getChildAt(2).getChildAt(1)
			);
			this.updata();
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			switch (this.target) {
				case this.propArr[3]:
					gameUI.ChangeBtnTake(true);
					break;
				case this.propArr[4]:
					gameUI.ChangeBtnTake(true);
					break;
			}
		}
		useProp_ByStatus() {
			switch (this.target) {
				case this.propArr[3]:
					MainRoleMgr.Inst.role.setProp(null, 'dogHouseKeys');
					if (
						MainRoleMgr.Inst.role.isActiveOneProp(
							null,
							'dogHouseKeys'
						)
					) {
						this.propArr[1].active = true;
						MainRoleMgr.Inst.Drop();
						PropMgr.Inst.setPropDestory(22);
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 19 }
						);
					}
					break;
				case this.propArr[4]:
					MainRoleMgr.Inst.role.setProp(null, 'dogHouseKeys');
					if (
						MainRoleMgr.Inst.role.isActiveOneProp(
							null,
							'dogHouseKeys'
						)
					) {
						this.propArr[2].active = true;
						MainRoleMgr.Inst.Drop();
						PropMgr.Inst.setPropDestory(21);
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 20 }
						);
					}
					break;
			}
			this.updata();
		}
		updata() {
			if (MainRoleMgr.Inst.role.isActiveOneProp(21, 'dogHouseKeys')) {
				this.propArr[2].active = true;
			}
			if (MainRoleMgr.Inst.role.isActiveOneProp(22, 'dogHouseKeys')) {
				this.propArr[1].active = true;
			}
			if (MainRoleMgr.Inst.role.isActiveProp('dogHouseKeys')) {
				Laya.Tween.to(
					this.propArr[0].transform,
					{ localPositionX: 0.31 },
					500
				);
			}
		}
	}

	class GouSheLockDoor extends PublicLockDoor {
		constructor(vo, id, arr_Lock) {
			super(vo, id, arr_Lock);
			this.arr_Lock = [];
			this.arr_Lock = arr_Lock;
		}
		onWake() {
			super.onWake();
			this.updata();
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			switch (this.status) {
				case 1:
					gameUI.ChangeBtnTake(true);
					break;
				case 2:
					gameUI.ChangeBtnTake(true);
					break;
				default:
					gameUI.ChangeBtnTake(false);
			}
		}
		useProp_ByStatus() {
			switch (this.status) {
				case 1:
					if (this.lockCompare()) {
						if (DoorDeal.openClose(this.propArr[0], true))
							this.status = 2;
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 9 }
						);
					}
					break;
				case 2:
					if (DoorDeal.openClose(this.propArr[0], false))
						this.status = 1;
					break;
			}
		}
		updata() {
			if (MainRoleMgr.Inst.role.isActiveProp('DogDoorKeys')) {
				DoorDeal.openClose(this.propArr[0], true);
				this.status = 2;
			}
		}
	}

	class WuYa extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
			this.stat = 1;
			this.isPlayingSound = false;
		}
		onWake() {
			let outPoint_ =
				this.propSprite.getChildByName('outPoint').transform.position;
			this.outPoint = new Laya.Vector3(
				outPoint_.x,
				outPoint_.y,
				outPoint_.z
			);
			this.startPoint = new Laya.Vector3(
				this.propSprite.transform.position.x,
				this.propSprite.transform.position.y,
				this.propSprite.transform.position.z
			);
			GameEventMgr.Inst.registetEvent(EventName.WU_YA, this.id);
			this.animator = this.propSprite.getComponent(Laya.Animator);
			this.propArr.push(this.propSprite);
		}
		showCtrlUI_ByStatus() {
			switch (this.target) {
				case this.propSprite:
					let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
					gameUI.ChangeBtnTake(true);
					break;
			}
		}
		useProp_ByStatus() {
			SoundMgr.Inst.playSound(14);
			MainRoleMgr.Inst.getRoleScript().playAni(
				'shouji_Animation',
				1,
				0.001,
				null
			);
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeInjuredSpine(
				true,
				false
			);
		}
		BeUsed(data) {
			if (this.stat == 2 || this.stat == 1 || data.canChange)
				this.stat = data.stat;
			console.log(
				'-------------【乌鸦状态】' + this.stat + '----------------'
			);
			this.animator.speed = 1;
			switch (this.stat) {
				case 1:
					this.animator.crossFade('stand', 0.2);
					break;
				case 2:
					this.animator.crossFade('zhuo', 0.2);
					break;
				case 3:
					this.animator.crossFade('up', 0.2);
					GameEventMgr.Inst.sendEvent([EventName.NIAO_LONG_DOOR]);
					Laya.timer.once(170, this, function () {
						Laya.timer.loop(16, this, this.go, [this.outPoint]);
					});
					Laya.timer.once(1200, this, this.BeUsed, [
						{ stat: 4, canChange: true }
					]);
					break;
				case 4:
					this.animator.crossFade('zhuo', 0.2);
					break;
				case 5:
					this.animator.crossFade('up', 0.2);
					Laya.timer.once(170, this, function () {
						Laya.timer.loop(16, this, this.go, [this.startPoint]);
					});
					GameEventMgr.Inst.sendEvent([EventName.NIAO_LONG_DOOR]);
					Laya.timer.once(2500, this, this.BeUsed, [
						{ stat: 1, canChange: true }
					]);
					break;
			}
		}
		go(targert) {
			let spiderPositon = this.propSprite.transform.position;
			let vct3 = new Laya.Vector3();
			Laya.Vector3.subtract(spiderPositon, targert, vct3);
			if (Math.abs(vct3.z) > 0.05) {
				this.propSprite.transform.lookAt(
					targert,
					new Laya.Vector3(0, 1, 0),
					false
				);
				Laya.Vector3.normalize(vct3, vct3);
				this.propSprite.transform.translate(
					new Laya.Vector3(
						-vct3.x * 0.08,
						-vct3.y * 0.08,
						-vct3.z * 0.08
					),
					false
				);
			} else {
				Laya.timer.clear(this, this.go);
				this.animator.crossFade('down', 0.2);
			}
		}
	}

	class Nu extends PropPublicBase {
		constructor(vo, id, position, positionObj) {
			super(vo, id, position, positionObj);
			this.stat = 1;
		}
		onWake() {
			super.onWake();
			this.modeNu = this.propSprite.getChildAt(0).getChildByName('mode');
			this.modeNu.active = false;
			this.animator = this.propSprite
				.getChildAt(0)
				.getComponent(Laya.Animator);
			this.updata();
		}
		changeStat(stat, propId) {
			if (stat == 1 && this.stat == 2) return;
			if (this.stat == 2 && stat == 2) return;
			this.stat = stat;
			if (propId) this.propId = propId;
			switch (this.stat) {
				case 1:
					this.animator.crossFade('nothing', 0.2);
					this.animator.speed = 0;
					break;
				case 2:
					this.animator.crossFade('up', 0.2);
					this.modeNu.active = true;
					Laya.Tween.from(
						this.modeNu.transform,
						{ localPositionZ: -3 },
						30
					);
					SoundMgr.Inst.playSound(5);
					PropMgr.Inst.getProp(this.propId).propSprite.getChildAt(
						0
					).active = false;
					break;
				case 3:
					this.animator.crossFade('shoot', 0.2);
					SoundMgr.Inst.playSound(6);
					let zidan = PropMgr.Inst.getProp(this.propId);
					zidan.propSprite.transform.position =
						this.modeNu.transform.position;
					this.modeNu.active = false;
					let from = zidan.propSprite.transform.position;
					let target = PropMgr.Inst.getCurPoint();
					zidan.propSprite.getChildAt(0).active = true;
					Laya.timer.loop(16, this, this.go, [target, from, zidan]);
					this.stat = 1;
					break;
			}
		}
		useProp_ByStatus() {
			super.useProp_ByStatus();
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnShoot(true);
		}
		beRayHit() {
			if (this.stat == 2) this.changeStat(3);
			else {
				GameEventMgr.Inst.sendEvent([EventName.SHOW_UI_INFO_WINDOW], {
					id: 5
				});
			}
		}
		go(targert, from, zidan) {
			let spiderPositon = from;
			let vct3 = new Laya.Vector3();
			Laya.Vector3.subtract(spiderPositon, targert, vct3);
			if (Laya.Vector3.distance(targert, spiderPositon) > 0.4) {
				zidan.propSprite.transform.lookAt(
					targert,
					new Laya.Vector3(0, 1, 0),
					false
				);
				Laya.Vector3.normalize(vct3, vct3);
				zidan.propSprite.getComponent(
					Laya.Rigidbody3D
				).isKinematic = true;
				zidan.propSprite.transform.translate(
					new Laya.Vector3(
						-vct3.x * 0.4,
						-vct3.y * 0.4,
						-vct3.z * 0.4
					),
					false
				);
			} else {
				Laya.timer.clear(this, this.go);
				zidan.propSprite.getComponent(
					Laya.Rigidbody3D
				).isKinematic = false;
			}
		}
		timerClear() {
			Laya.timer.clear(this, this.go);
		}
		updata() {
			let data = Role.ins_.getDataByString('nuStatusData');
			if (!data) return;
			this.stat = data.stat;
			if (Role.ins_.getHandPropId() == this.vo.different) {
				UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnShoot(
					true
				);
			}
			if (this.stat == 2) {
				let zidan = PropMgr.Inst.getProp(data.propId);
				if (zidan.loadhandlerArr == null) {
					this.changeStat(this.stat, data.propId);
				} else {
					zidan.setLoadHandler(
						Laya.Handler.create(this, this.mazuizhenLoadOver, [
							data
						])
					);
				}
			} else {
				this.changeStat(this.stat);
			}
		}
		mazuizhenLoadOver(data) {
			this.changeStat(this.stat, data.propId);
		}
		setToStorage() {
			super.setToStorage();
			Role.ins_.setDataByString('nuStatusData', {
				stat: this.stat,
				propId: this.propId
			});
		}
	}

	class Special_Hu_Jiao_Mian extends PropPublicBase {
		constructor(vo, id, position, positionObj) {
			super(vo, id, position, positionObj);
			this.hasZiDan = false;
		}
		onWake() {
			super.onWake();
		}
		showCtrlUI_ByStatus() {
			super.showCtrlUI_ByStatus();
		}
		useProp_ByStatus() {
			super.useProp_ByStatus();
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnShoot(true);
		}
		beRayHit() {
			if (!MainRoleMgr.Inst.role.usePropCount('num_HuJiaoMian', true)) {
				PropMgr.Inst.setPropDestory(6);
				return;
			}
			let traget = PropMgr.Inst.getCurTraget();
			if (traget.name == 'kbnn_nainai') {
				if (
					Laya.Vector3.distance(
						SceneMgr.Inst.GetKbnnScript().GetTransform().position,
						MainRoleMgr.Inst.getCurRolePosition()
					) < 3.3
				) {
					console.log('------------胡椒面攻击----------------');
					BuffModel.Inst.AddBuff(BuffModel.BUFFID_1);
				}
			}
			if (!MainRoleMgr.Inst.role.usePropCount('num_HuJiaoMian', false)) {
				MainRoleMgr.Inst.Drop();
				PropMgr.Inst.setPropDestory(6);
				console.log('使用');
				return;
			}
			this.propSprite.getChildAt(0).getChildAt(0).particleSystem.play();
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnShoot(true);
		}
	}

	class Special_Bing_Attack extends PropPublicBase {
		constructor(vo, id, position, positionObj) {
			super(vo, id, position, positionObj);
			this.hasZiDan = false;
		}
		useProp_ByStatus() {
			super.useProp_ByStatus();
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnShoot(true);
		}
		beRayHit() {
			if (!MainRoleMgr.Inst.role.usePropCount('num_BingShuang', true)) {
				PropMgr.Inst.setPropDestory(6);
				return;
			}
			let traget = PropMgr.Inst.getCurTraget();
			if (traget.name == 'kbnn_nainai') {
				if (
					Laya.Vector3.distance(
						SceneMgr.Inst.GetKbnnScript().GetTransform().position,
						MainRoleMgr.Inst.getCurRolePosition()
					) < 3.3
				) {
					console.log('------------冰霜攻击----------------');
					BuffModel.Inst.AddBuff(BuffModel.BUFFID_2);
				}
			}
			if (!MainRoleMgr.Inst.role.usePropCount('num_BingShuang', false)) {
				MainRoleMgr.Inst.Drop();
				PropMgr.Inst.setPropDestory(26);
				return;
			}
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnShoot(true);
		}
	}

	class MaZuiZhenColiderScript extends Laya.Script3D {
		constructor() {
			super();
			this.dic_Prop = PropMgr.Inst.dic_Prop;
		}
		onTriggerEnter(other) {
			switch (other.owner.name) {
				case 'jiguan_02':
					GameEventMgr.Inst.sendEvent([EventName.ZHI_ZHU_JI_GUAN]);
					break;
			}
		}
		onTriggerStay(other) {}
		onTriggerExit(other) {}
		onCollisionEnter(collision) {
			switch (collision.other.owner.name) {
				case 'kbnn_nainai':
					BuffModel.Inst.AddBuff(BuffModel.BUFFID_4);
					this.owner.getComponent(
						Laya.Rigidbody3D
					).isKinematic = false;
					PropMgr.Inst.getProp(5).timerClear();
					SoundMgr.Inst.playSound(84);
					break;
				case 'jiguan_01':
					GameEventMgr.Inst.sendEvent([EventName.KU_LOU_DOOR]);
					break;
				case 'jiguan_02':
					GameEventMgr.Inst.sendEvent([EventName.ZHI_ZHU_JI_GUAN]);
					break;
			}
			let arrVar = this.dic_Prop.getValuesArr();
			for (let i = 0; i < arrVar.length; i++) {
				if (!arrVar[i]) continue;
				for (let n = 0; n < arrVar[i].propArr.length; n++) {
					if (collision.other.owner == arrVar[i].propArr[n]) {
						let curVec3 = new Laya.Vector3();
						MainRoleMgr.Inst.GetMainRole().transform.getForward(
							curVec3
						);
						break;
					}
				}
			}
		}
		onCollisionStay(collision) {}
		onCollisionExit(collision) {}
	}

	class Special_Ma_Zui_Zhen extends PropPublicBase {
		constructor(vo, id, position, positionObj) {
			super(vo, id, position, positionObj);
		}
		onWake() {
			super.onWake();
			this.propArr[0].addComponent(MaZuiZhenColiderScript);
		}
		showCtrlUI_ByStatus() {
			if (Role.ins_.getHandPropId() == 5) {
				super.showCtrlUI_ByStatus();
			}
		}
	}

	class Special_Zi_Dan extends PropPublicBase {
		constructor(vo, id, position, positionObj) {
			super(vo, id, position, positionObj);
		}
		onWake() {
			super.onWake();
		}
		showCtrlUI_ByStatus() {
			if (Role.ins_.getHandPropId() == 4) {
				super.showCtrlUI_ByStatus();
			} else {
				let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
				gameUI.ChangeBtnTakeAndSight(true, this.config.Name, true);
			}
		}
	}

	class YingErColiderScript extends Laya.Script3D {
		constructor() {
			super();
			this.dic_Prop = PropMgr.Inst.dic_Prop;
		}
		onTriggerEnter(other) {
			switch (other.owner.name) {
				case 'yingeryaolan':
					GameEventMgr.Inst.sendEvent([EventName.YING_ER_BED]);
					break;
			}
		}
		onTriggerStay(other) {}
		onTriggerExit(other) {}
		onCollisionEnter(collision) {
			switch (collision.other.owner.name) {
				case 'underground':
					break;
				case 'underground_out_2':
					break;
				case 'underground_out':
					break;
			}
		}
		onCollisionStay(collision) {}
		onCollisionExit(collision) {}
	}

	class Special_Ying_Er extends PropPublicBase {
		constructor(vo, id, position, positionObj) {
			super(vo, id, position, positionObj);
		}
		onWake() {
			super.onWake();
			this.propArr[0].addComponent(YingErColiderScript);
		}
		useProp_ByStatus() {
			switch (this.status) {
				case 1:
					MainRoleMgr.Inst.ChangeMainRoleState(statName.handProp, {
						sprite3D: this.propArr[0],
						propId: this.id,
						config: this.config
					});
					BuffModel.Inst.AddBuff(BuffModel.BUFFID_7);
					if (this.positonObj) this.positonObj.removeProp(this);
					break;
			}
		}
	}

	class FengShan extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
			this.isro = true;
		}
		onWake() {
			this.propArr.push(this.propSprite.getChildByName('Object128'));
			this.propArr.push(this.propSprite.getChildByName('dang'));
			this.propArr.push(this.propSprite.getChildByName('dianxian_01'));
			this.propArr.push(this.propSprite.getChildByName('dianxian_02'));
			this.propArr.push(this.propSprite.getChildByName('xianTest'));
			this.propArr[3].active = false;
			GameEventMgr.Inst.registetEvent(EventName.FENG_SHAN_TIMER, this.id);
			Laya.timer.loop(16, this, this.ro);
			this.updata();
		}
		timerClear() {
			Laya.timer.clear(this, this.ro);
		}
		ro() {
			if (this.isro) {
				if (this.propArr[0].transform)
					this.propArr[0].transform.localRotationEulerY += 30;
			}
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			gameUI.ChangeBtnTake(true);
		}
		useProp_ByStatus() {
			switch (this.target) {
				case this.propArr[1]:
					MainRoleMgr.Inst.getRoleScript().playAni(
						'shouji_Animation',
						1,
						0.01,
						null
					);
					break;
				default:
					Role.ins_.setProp(null, 'fengShanKeys');
					if (Role.ins_.isActiveProp('fengShanKeys')) {
						this.isro = true;
						Laya.timer.clear(this, this.ro);
						Laya.Tween.to(
							this.propArr[0].transform,
							{
								localRotationEulerY:
									this.propArr[0].transform
										.localRotationEulerY + 450
							},
							1500,
							Laya.Ease.circOut
						);
						this.propArr[3].active = true;
						this.propArr[2].active = false;
						this.propArr[1].active = false;
					} else {
						GameEventMgr.Inst.sendEvent(
							[EventName.SHOW_UI_INFO_WINDOW],
							{ id: 23 }
						);
					}
					break;
			}
		}
		updata() {
			if (Role.ins_.isActiveProp('fengShanKeys')) {
				this.isro = true;
				Laya.timer.clear(this, this.ro);
				this.propArr[0].transform.localRotationEulerY =
					this.propArr[0].transform.localRotationEulerY + 450;
				this.propArr[3].active = true;
				this.propArr[2].active = false;
				this.propArr[1].active = false;
			}
		}
	}

	class YuanZiDoor extends PublicDoor {
		constructor(vo, id) {
			super(vo, id);
		}
		onWake() {
			this.propArr.push(this.propSprite);
		}
		showCtrlUI_ByStatus() {}
		useProp_ByStatus() {
			let data = { openX: -90, closeX: 90 };
			if (this.vo.different == 1) data = { openX: 90, closeX: -90 };
			switch (this.status) {
				case 1:
					if (DoorDeal.openClose(this.propArr[0], true, data)) {
						this.status = 2;
						this.propArr[0].getComponent(
							Laya.PhysicsCollider
						).isTrigger = true;
						Laya.timer.once(1500, this, this.reSet);
					}
					break;
				case 2:
					if (DoorDeal.openClose(this.propArr[0], false, data)) {
						this.status = 1;
						this.propArr[0].getComponent(
							Laya.PhysicsCollider
						).isTrigger = false;
					}
					break;
			}
		}
		reSet() {
			if (this.status == 2) this.useProp_ByStatus();
		}
	}

	class YingErDoor extends PublicDoor {
		constructor(vo, id) {
			super(vo, id);
		}
		onWake() {
			this.propArr.push(this.propSprite);
		}
		showCtrlUI_ByStatus() {
			if (Role.ins_.isOpenDoor_YingEr()) {
				let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
				gameUI.ChangeBtnTake(true);
			}
		}
		useProp_ByStatus() {
			let data = { openX: -90, closeX: 90 };
			if (this.vo.different == 1) data = { openX: 90, closeX: -90 };
			Role.ins_.roleData.isOpenDoor_Yinger = true;
			switch (this.status) {
				case 1:
					if (DoorDeal.openClose(this.propArr[0], true, data)) {
						this.status = 2;
						this.propArr[0].getComponent(
							Laya.PhysicsCollider
						).isTrigger = true;
					}
					break;
				case 2:
					if (DoorDeal.openClose(this.propArr[0], false, data)) {
						this.status = 1;
						this.propArr[0].getComponent(
							Laya.PhysicsCollider
						).isTrigger = false;
					}
					break;
			}
		}
		reSet() {}
	}

	class MuBanView extends PropPublicBase {
		constructor(vo, id, position, positionObj) {
			super(vo, id, position, positionObj);
			this.isBeHand = false;
		}
		onWake() {
			super.onWake();
			this.propSprite.active = false;
		}
		BeUsed(data) {
			if (!this.isBeHand) {
				MainRoleMgr.Inst.ChangeMainRoleState(statName.handMuBan, {
					config: this.config,
					beHand: true,
					sprite3D: this.propSprite,
					recodSp3: data.sp3,
					propId: this.id
				});
			}
		}
	}

	class Special_CarBigDoor extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
		}
		onWake() {
			this.propArr[0] = this.propSprite.getChildByName('dikusuo');
			this.propArr[1] = this.propSprite.getChildByName('men_04_1');
			this.ani = this.propSprite.getComponent(Laya.Animator);
			this.ani.speed = 0;
			this.updata();
		}
		showCtrlUI_ByStatus() {
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			switch (this.target) {
				case this.propArr[0]:
					gameUI.ChangeBtnTake(true);
					break;
			}
		}
		useProp_ByStatus() {
			switch (this.target) {
				case this.propArr[0]:
					Role.ins_.setProp(null, 'carBigDoorKeys');
					if (Role.ins_.isActiveProp('carBigDoorKeys')) {
						this.propArr[0].getComponent(
							Laya.Rigidbody3D
						).isKinematic = false;
						Laya.Tween.to(
							this.propArr[1].transform,
							{ localRotationEulerZ: 90 },
							800,
							Laya.Ease.bounceInOut,
							Laya.Handler.create(this, function () {
								this.ani.speed = 1;
								this.ani.crossFade('Take 001', 0.1);
								Laya.timer.once(4000, this, function () {
									this.ani.speed = 0;
								});
							})
						);
					}
					break;
			}
		}
		updata() {
			if (Role.ins_.isActiveProp('carBigDoorKeys')) {
				this.propArr[0].getComponent(
					Laya.Rigidbody3D
				).isKinematic = false;
				Laya.Tween.to(
					this.propArr[1].transform,
					{ localRotationEulerZ: 90 },
					800,
					Laya.Ease.bounceInOut,
					Laya.Handler.create(this, function () {
						this.ani.speed = 1;
						this.ani.crossFade('Take 001', 0.1);
						Laya.timer.once(4000, this, function () {
							this.ani.speed = 0;
						});
					})
				);
			}
		}
	}

	class IntroducePoint extends BaseProp {
		constructor(vo, id) {
			super(vo, id);
		}
		onWake() {
			super.onWake();
			this.propArr[1] = this.propSprite.getChildAt(0);
			GameEventMgr.Inst.registetEvent(EventName.INTRODUCE_POINT, this.id);
			this.propSprite.transform.position = new Laya.Vector3(0, 0, 0);
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_POINT], {
				add: false,
				eventIndex: false
			});
		}
		update(data) {
			if (GameEventMgr.Inst.introduceMgr.intorduceOver()) {
				this.propSprite.active = false;
				this.propArr[1].active = false;
				return;
			}
			let config = Guide.getItemByKey(
				Role.ins_.roleData.introducePointStatus
			);
			if (config) {
				this.propSprite.active = true;
				this.propArr[1].active = true;
				let postionArr = config.position.split('|')[0].split(',');
				this.propSprite.transform.position = new Laya.Vector3(
					-parseFloat(postionArr[0]),
					parseFloat(postionArr[1]),
					parseFloat(postionArr[2])
				);
				if (config.position.split('|')[1]) {
					let rotationArr = config.position.split('|')[1].split(',');
					this.propSprite.transform.rotationEuler = new Laya.Vector3(
						parseFloat(rotationArr[0]),
						-parseFloat(rotationArr[1]),
						parseFloat(rotationArr[2])
					);
				}
			} else {
				this.propSprite.active = false;
				this.propArr[1].active = false;
			}
			if (data.active != undefined) {
				this.propSprite.active = data.active;
				this.propArr[1].active = data.active;
			}
		}
	}

	class Special_Hua_Ping extends PropPublicBase {
		constructor(vo, id, position, positionObj) {
			super(vo, id, position, positionObj);
		}
		onWake() {
			super.onWake();
			let rigidbody = this.propSprite.getComponent(Laya.Rigidbody3D);
			if (rigidbody) rigidbody.isKinematic = true;
			Laya.timer.once(
				3000,
				this,
				function (rigidbody) {
					rigidbody.isKinematic = false;
				},
				[rigidbody]
			);
		}
		useProp_ByStatus() {
			super.useProp_ByStatus();
		}
		reSet() {
			super.reSet();
			Laya.timer.once(2000, this, function () {
				let colider = this.propSprite.getComponent(Laya.Rigidbody3D);
				colider.isKinematic = false;
			});
		}
	}

	class MaZuiZhen extends PropPublicBase {
		constructor(vo, id, position, positionObj) {
			super(vo, id, position, positionObj);
		}
		onWake() {
			super.onWake();
			this.LoadOk();
			this.isChange = true;
		}
		setToStorage() {
			super.setToStorage();
			let nu = PropMgr.Inst.getProp(5);
			if (nu.stat == 2 && nu.propId == this.vo.different) {
				let transf = {};
				transf.position = nu.propSprite.transform.position.clone();
				transf.rotationEuler =
					nu.propSprite.transform.rotationEuler.clone();
				if (this.isChange) {
					Role.ins_.setStoragePropTransf(this.id, transf);
				}
			}
		}
	}

	class PropMgr {
		constructor() {
			this._startDicTest = true;
			this.propNum = 0;
			this.index = 0;
			this.dic_propVo = new Dictionary$1();
			this.dic_Prop = new Dictionary$1();
			this.doorArray = new Array();
			this.propTree = new PropTree();
			this.reslutRay = new Laya.HitResult();
			this.destoryPropArr = new Array();
		}
		static get Inst() {
			if (this.inst == null) {
				this.inst = new PropMgr();
			}
			return this.inst;
		}
		set startDicTest(value) {
			this._startDicTest = value;
			this.curArea = null;
		}
		setToStorage() {
			Role.ins_.setDataByString('destoryPropArr', this.destoryPropArr);
			let values = this.dic_Prop.values;
			if (values) {
				for (let i = 0; i < values.length; i++) {
					if (!values[i]) continue;
					values[i].setToStorage();
				}
			}
		}
		setVO(VO) {
			if (VO.entity != 18)
				this.dic_propVo.set(this.dic_propVo.values.length + 51, VO);
			else {
				if (VO.different == 13) {
					if (
						Role.ins_.getDifficulty() != 4 &&
						!Role.ins_.getDataByString('otherLock')
					) {
						console.error('加固锁钥匙不刷新');
						return;
					}
				}
				if (
					KickResource.getItemByKey(VO.different) &&
					Laya.Browser.window.tt
				)
					return;
				this.dic_propVo.set(VO.different, VO);
				PropPositionMgr.Inst.setPropVo(VO);
			}
		}
		updataPropTree() {
			this.propTree.updata();
		}
		setHideProp(prop) {
			this.hideProp = prop;
		}
		useProp() {
			if (this.coliderSprite) this.coliderSprite.useProp_ByStatus();
			else if (this.selectedProp) {
				this.selectedProp.useProp_ByStatus();
			}
		}
		mouseDown(isDown) {
			if (this.selectedProp) this.selectedProp.mouseDownUp(isDown);
		}
		getProp(propKey) {
			return this.dic_Prop.get(propKey);
		}
		setPropDestory(propId, arrHas) {
			let prop = this.dic_Prop.get(propId);
			if (!prop) return;
			if (!arrHas) this.destoryPropArr.push(propId);
			this.dic_Prop.remove(propId);
			this.dic_propVo.remove(propId);
			prop.destory();
		}
		getCurTraget() {
			return this.tragetSprite3d;
		}
		getCurPoint() {
			return this.coliderPoint;
		}
		setCurPoint(vc3) {
			this.coliderPoint = vc3;
		}
		nextDayPropInit() {
			let values = this.dic_Prop.values;
			for (let i = 0; i < values.length; i++) {
				if (!values[i]) continue;
				values[i].reSet();
			}
		}
		GM_Open(isOpen) {
			if (isOpen)
				Laya.stage.on(Laya.Event.KEY_PRESS, this, this.keyControl);
			else Laya.stage.off(Laya.Event.KEY_PRESS, this, this.keyControl);
		}
		getHandProp(propId) {
			let prop = this.getProp(propId);
			MainRoleMgr.Inst.ChangeMainRoleState(statName.handProp, {
				sprite3D: prop.propArr[0],
				propId: propId,
				config: prop.config
			});
		}
		keyControl(e) {
			// let degree = null;
			// switch (e['keyCode']) {
			// 	case 112:
			// 		let word = prompt(
			// 			'Enter the Item ID you want to get (Tips, if you already have the item in hand, you will not get it)'
			// 		);
			// 		if (word) {
			// 			this.getHandProp(parseInt(word));
			// 		}
			// 		break;
			// 	case 111:
			// 		MainRoleMgr.Inst.ChangeMainRoleState(statName.ClearState, {
			// 			wudi: confirm('Whether to be invincible?')
			// 		});
			// 		break;
			// 	case 113:
			// 		let speed = prompt('Enter speed multiplier (number)');
			// 		if (speed) {
			// 			let prop = parseInt(speed);
			// 			MainRoleMgr.Inst.getRoleScript().Speed =
			// 				MainRoleMgr.Inst.getRoleScript().Speed * prop;
			// 		}
			// 		break;
			// 	case 114:
			// 		if (confirm('Whether to clear data?')) {
			// 			Role.ins_.clearDataFromStorage();
			// 		}
			// 		break;
			// 	case 116:
			// 		let propId = prompt('Enter the Item ID whose location you want to get');
			// 		if (propId) {
			// 			let position = PropPositionMgr.Inst.getPropPosition(
			// 				parseInt(propId)
			// 			);
			// 			if (position) {
			// 				console.error(
			// 					'物品prop:',
			// 					PropMgr.inst.getProp(parseInt(propId))
			// 				);
			// 				console.error(
			// 					'物品[' +
			// 						propId +
			// 						']的地址在' +
			// 						position.config.tips,
			// 					'  id - [' + position.config.id + ']'
			// 				);
			// 				console.error('物品', position);
			// 			}
			// 		}
			// 		break;
			// }
		}
		timerCtl(open) {
			if (open) {
				this.role = MainRoleMgr.Inst.GetMainRole();
			} else Laya.timer.clearAll(this);
		}
		userPropByNN(sp) {
			let targetPerentName = sp.name;
			let targetName = sp.name;
			let prop;
			for (let i = 0; i < this.doorArray.length; i++) {
				let vo = this.doorArray[i].vo;
				switch (vo.entity) {
					case PropType.PUBLIC_DOOR:
					case PropType.DOOR_YUAN_ZI:
					case PropType.Door_YING_ER_ROOM:
						if (vo.different != 2) continue;
						for (
							let n = 0;
							n < this.doorArray[i].propArr.length;
							n++
						) {
							if (sp == this.doorArray[i].propArr[n]) {
								if (this.doorArray[i].status == 2) return;
								console.log('奶奶开门:' + targetName);
								this.doorArray[i].useProp_ByStatus();
								break;
							}
						}
						break;
					case PropType.PUBLIC_YI_GUI:
						for (
							let n = 0;
							n < this.doorArray[i].propArr.length;
							n++
						) {
							if (sp == this.doorArray[i].propArr[n]) {
								if (
									this.doorArray[i].status == 2 &&
									targetName != 'guizi_04_2_01'
								)
									return;
								console.log('奶奶竖柜:' + targetName);
								this.doorArray[i].useProp_ByStatus();
								break;
							}
						}
						break;
				}
			}
		}
		propBeSelected(hitPro) {
			if (this.tragetSprite3d) {
				if (this.tragetSprite3d != hitPro.collider.owner) {
					if (this.selectedProp) {
						this.selectedProp.noSelect();
					}
				}
			}
			this.selectedProp = null;
			let targetName = hitPro.collider.owner.name;
			let values = this.dic_Prop.getValuesArr();
			let keys = this.dic_Prop.getKeysArr();
			let prop;
			this.tragetSprite3d = hitPro.collider.owner;
			if (!this.hideProp) {
				for (let i = 0; i < values.length; i++) {
					let value = values[i];
					if (!value) continue;
					for (let n = 0; n < value.propArr.length; n++) {
						if (hitPro.collider.owner == value.propArr[n]) {
							if (hitPro.point) {
								if (
									Laya.Vector3.distance(
										MainRoleMgr.Inst.getCurRolePosition(),
										hitPro.point
									) > GameConfig.propDic
								) {
									continue;
								}
							} else continue;
							this.selectedProp = value;
							this.selectedProp.setTargetName(
								hitPro.collider.owner
							);
							break;
						}
					}
					if (this.selectedProp) break;
				}
			} else {
				this.selectedProp = this.hideProp;
			}
			if (
				this.selectedProp &&
				UISystem.Inst.GetWindowView(UIGamePlayView)
			) {
				this.selectedProp.showCtrlUI_ByStatus();
			} else {
				let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
				if (!gameUI) return;
				if (!this.coliderSprite) gameUI.ChangeBtnHide(false);
				gameUI.ChangeBtnTakeAndSight(false);
				gameUI.ChangeBtnTake(false);
			}
		}
		judgeProp(data) {
			switch (data.propId) {
				case 8:
				case 46:
				case 47:
					if (MainRoleMgr.Inst.role.getHandPropId() == 5) {
						this.getProp(5).changeStat(2, data.propId);
						return true;
					}
					break;
				case 48:
				case 49:
				case 7:
					if (MainRoleMgr.Inst.role.getHandPropId() == 4) {
						this.getProp(4).changeStat(1, data.propId);
						return true;
					}
					break;
			}
			return false;
		}
		destoryProp() {
			for (let i = 0; i < this.dic_Prop.values.length; i++) {
				let prop = this.dic_Prop[i];
				if (prop) this.setPropDestory(prop.id);
			}
			this.dic_propVo = new Dictionary$1();
			this.dic_Prop = new Dictionary$1();
			this.doorArray = new Array();
			this.propTree = new PropTree();
			this.destoryPropArr = new Array();
			this.selectedProp = null;
			this.coliderPoint = null;
			this.hideProp = null;
			this.tragetSprite3d = null;
			this._startDicTest = true;
			this.role = null;
			this.coliderSprite = null;
			this.propNum = null;
			this.curArea = null;
			this.arrHideRoom = null;
			this.lineRay = null;
			this.index = null;
			Laya.timer.clearAll(this);
		}
		propLoadReady() {
			let vo = this.dic_propVo.get(5);
			this.specialProp(vo, null, null);
			vo = this.dic_propVo.get(46);
			this.specialProp(vo, null, null);
		}
		areaTest(name) {
			let arr = this.propTree.getPostionArrByName(name);
			if (!arr) return;
			if (name != this.curArea) {
				this.showSceneRoom(arr.arrRoom);
			}
			this.curArea = name;
			Laya.timer.frameLoop(1, this, this.directionJudge, [arr]);
		}
		directionJudge(arr) {
			let num = 0;
			let dic = this.propTree.getLineItem();
			let values = dic.values;
			let keys = dic.keys;
			let role = MainRoleMgr.Inst.getCurRolePosition();
			let roleCamera =
				MainRoleMgr.Inst.getRoleScript().cameraBox.transform.position;
			let roleCameraVct = roleCamera;
			let Vector3_ = new Laya.Vector3();
			this.role.transform.getForward(Vector3_);
			let value;
			let arrProp = [];
			let isInSight = true;
			for (let i = 0; i < values.length; i++) {
				if (!values[i]) continue;
				let prop = this.dic_Prop.get(keys[i]);
				value = new Laya.Vector3(
					-values[i].x,
					values[i].y,
					values[i].z
				);
				if (prop)
					if (prop.propSprite) {
						value = prop.propSprite.transform.position;
					}
				if (this.isPropCanGet(value, role, arr, values[i])) {
					if (GameConfig.needRayTest) {
						isInSight = this.isPropInSight(
							prop,
							roleCameraVct,
							this.reslutRay
						);
					}
					if (isInSight) {
						if (prop) prop.setActive(true);
						else this.createByType(values, i, keys);
					} else if (prop) prop.setActive(false);
				} else if (prop) prop.setActive(false);
			}
			this.propNum = num;
			Vector3_ = null;
		}
		isPropCanGet(value, role, arr, vo) {
			if (this._startDicTest) {
				let up = value.x < 0.549 && value.y < 12.492 && value.z < 7.778;
				let down =
					value.x > -7.569 && value.y > 9.409 && value.z > -4.844;
				return up && down;
			}
			if (!arr) return false;
			if (this.isInSqure(arr.arrSqu, value)) {
				return true;
			} else return false;
		}
		dicJudge(value, role) {
			return Laya.Vector3.distance(value, role) < GameConfig.viewSize
				? true
				: false;
		}
		isInSqure(arrSqu, value) {
			let small = null;
			let big = null;
			let isInSmall = null;
			let isInBig = null;
			for (let i = 0; i < arrSqu.length; i++) {
				small = arrSqu[i].small;
				big = arrSqu[i].big;
				isInSmall =
					value.x >= small.x &&
					value.y >= small.y &&
					value.z >= small.z;
				isInBig =
					value.x <= big.x && value.y <= big.y && value.z <= big.z;
				if (isInSmall && isInBig) return true;
			}
			return false;
		}
		showSceneRoom(arr_Room) {
			let node = null;
			let roomUrl = null;
			if (this.arrHideRoom) {
				for (let i = 0; i < this.arrHideRoom.length; i++) {
					roomUrl = this.arrHideRoom[i];
					node = SceneMgr.Inst.getScene();
					for (let r = 0; r < roomUrl.length; r++) {
						node = node.getChildByName(roomUrl[r]);
					}
					node.active = true;
				}
			}
			for (let i = 0; i < arr_Room.length; i++) {
				roomUrl = arr_Room[i];
				node = SceneMgr.Inst.getScene();
				let nodeRoced = null;
				for (let r = 0; r < roomUrl.length; r++) {
					nodeRoced = node;
					node = node.getChildByName(roomUrl[r]);
					if (!node) {
						console.error(
							'--------------------------------------------------'
						);
						console.error('出错名字', roomUrl[r]);
						console.error('出错数组', roomUrl);
						for (let z = 0; z < nodeRoced.numChildren; z++) {
							console.error(
								'该节点父节点下的子节点名称:[' +
									nodeRoced.getChildAt(z).name +
									']'
							);
						}
						return;
					}
				}
				node.active = false;
			}
			node = null;
			roomUrl = null;
			this.arrHideRoom = arr_Room;
		}
		isInDic(prop, roleCameraVct) {
			let propV = prop.propSprite.transform.position;
			let vc3 = new Laya.Vector3(propV.x, 0, propV.z);
			let vc3_2 = new Laya.Vector3(roleCameraVct.x, 0, roleCameraVct.z);
			let dic = Laya.Vector3.distance(vc3, vc3_2);
			if (
				dic < GameConfig.viewSize &&
				propV.y > roleCameraVct.y - 2 &&
				propV.y < roleCameraVct.y + 2
			) {
				propV = null;
				vc3 = null;
				vc3_2 = null;
				dic = null;
				return true;
			}
		}
		isPropInSight(prop, roleCameraVct, hitRes) {
			if (!prop) return true;
			if (!prop.propSprite) return true;
			if (!prop.propSprite.meshRenderer) return true;
			if (this.isInDic(prop, roleCameraVct)) return true;
			let postion = prop.propSprite.transform.position;
			if (
				SceneMgr.Inst.getScene().physicsSimulation.raycastFromTo(
					postion,
					roleCameraVct,
					hitRes,
					32,
					1
				)
			) {
				if (hitRes.collider) {
					if (hitRes.collider.owner.name == 'Role') {
						if (!this.testRoArea(postion, roleCameraVct)) {
							return this.boxTest(
								prop.propSprite,
								roleCameraVct,
								hitRes
							);
						}
						return true;
					} else {
						return this.boxTest(
							prop.propSprite,
							roleCameraVct,
							hitRes
						);
					}
				}
			} else return true;
		}
		boxTest(prop, roleCameraVct, hitRes) {
			let meshRenderer = prop.meshRenderer;
			let skinnedMeshRenderer = prop.skinnedMeshRenderer;
			let boundBox;
			let arrBoundsExtents;
			if (meshRenderer) {
				boundBox = meshRenderer.bounds._boundBox;
			}
			if (skinnedMeshRenderer) {
				boundBox = skinnedMeshRenderer.bounds._boundBox;
			}
			if (!boundBox) {
				for (let i = 0; i < prop.numChildren; i++) {
					if (this.boxTest(prop.getChildAt(i), roleCameraVct, hitRes))
						return true;
				}
			} else {
				arrBoundsExtents = [];
				boundBox.getCorners(arrBoundsExtents);
				for (let i = 0; i < arrBoundsExtents.length; i++) {
					if (!this.testRoArea(arrBoundsExtents[i], roleCameraVct))
						continue;
					if (
						SceneMgr.Inst.getScene().physicsSimulation.raycastFromTo(
							arrBoundsExtents[i],
							roleCameraVct,
							hitRes,
							32,
							1
						)
					) {
						if (!hitRes.collider) continue;
						if (hitRes.collider.owner.name == 'Role') {
							arrBoundsExtents = null;
							return true;
						}
					} else return true;
				}
			}
			return false;
		}
		testRoArea(point, roleCamera) {
			let Vector3 = new Laya.Vector3();
			let Vector3_ = new Laya.Vector3();
			this.role.transform.getForward(Vector3_);
			Laya.Vector3.subtract(point, roleCamera, Vector3);
			let ro_ok = DicUtil.countRoByVce2(
				new Laya.Vector2(Vector3.x, Vector3.z),
				new Laya.Vector2(Vector3_.x, Vector3_.z)
			);
			if (-0.1 < ro_ok && ro_ok < 1) {
				return true;
			} else return false;
		}
		createByType(values, i, keys) {
			switch (values[i].entity) {
				case PropType.PUBLIC_DOOR:
					this.dic_Prop.set(
						keys[i],
						new PublicDoor(values[i], keys[i])
					);
					this.doorArray.push(this.dic_Prop.get(keys[i]));
					break;
				case PropType.DOOR_YUAN_ZI:
					this.dic_Prop.set(
						keys[i],
						new YuanZiDoor(values[i], keys[i])
					);
					this.doorArray.push(this.dic_Prop.get(keys[i]));
					break;
				case PropType.Door_YING_ER_ROOM:
					this.dic_Prop.set(
						keys[i],
						new YingErDoor(values[i], keys[i])
					);
					this.doorArray.push(this.dic_Prop.get(keys[i]));
					break;
				case PropType.PUBLIC_CHOUTI:
					this.dic_Prop.set(
						keys[i],
						new PublicChouTi(values[i], keys[i])
					);
					break;
				case PropType.PUBLIC_BED:
					this.dic_Prop.set(
						keys[i],
						new PublicBed(values[i], keys[i])
					);
					break;
				case PropType.PUBLIC_COLIDER:
					this.dic_Prop.set(
						keys[i],
						new PublicColider(values[i], keys[i])
					);
					break;
				case PropType.NO_MUTUAL:
					this.dic_Prop.set(
						keys[i],
						new BaseProp(values[i], keys[i])
					);
					break;
				case PropType.PUBLIC_YI_GUI:
					this.dic_Prop.set(
						keys[i],
						new PublicYiGui(values[i], keys[i])
					);
					this.doorArray.push(this.dic_Prop.get(keys[i]));
					break;
				case PropType.WINDOW:
					this.dic_Prop.set(
						keys[i],
						new Window_canting(values[i], keys[i])
					);
					break;
				case PropType.JING_GAI:
					this.dic_Prop.set(
						keys[i],
						new JingGai_YuanZi(values[i], keys[i])
					);
					break;
				case PropType.HIDE_MU_XIANG:
					this.dic_Prop.set(
						keys[i],
						new PublicMuXiang(values[i], keys[i])
					);
					break;
				case PropType.DUAN_TOU_TAI:
					this.dic_Prop.set(
						keys[i],
						new duanTouTai_yuanzi(values[i], keys[i])
					);
					break;
				case PropType.PUBLIC_GEAR:
					this.dic_Prop.set(
						keys[i],
						new PublicGear(values[i], keys[i])
					);
					break;
				case PropType.ON_OFF:
					this.dic_Prop.set(
						keys[i],
						new OnOff_WoShi(values[i], keys[i])
					);
					break;
				case PropType.SHU_JIA:
					this.dic_Prop.set(
						keys[i],
						new ShuJia_woshi_02(values[i], keys[i])
					);
					break;
				case PropType.RUO_DIAN_XIANG:
					this.dic_Prop.set(
						keys[i],
						new DianXiang(values[i], keys[i])
					);
					break;
				case PropType.PUBLIC_LOOK_DOOR:
					this.lockDoor(values, keys, i);
					break;
				case PropType.BE_USED:
					this.dic_Prop.set(
						keys[i],
						new PublicBeUse(values[i], keys[i])
					);
					break;
				case PropType.CAR:
					this.dic_Prop.set(keys[i], new Car(values[i], keys[i]));
					break;
				case PropType.TU_ZHI:
					this.dic_Prop.set(keys[i], new TuZhi(values[i], keys[i]));
					break;
				case PropType.LOU_TI_JIAN:
					this.dic_Prop.set(
						keys[i],
						new Special_Door_LouTi(values[i], keys[i])
					);
					break;
				case PropType.SHUI_JING:
					this.dic_Prop.set(
						keys[i],
						new Special_Shui_Jing(values[i], keys[i])
					);
					break;
				case PropType.DA_MEN:
					this.dic_Prop.set(
						keys[i],
						new Special_Da_Men(values[i], keys[i])
					);
					break;
				case PropType.ZHI_ZHU:
					this.dic_Prop.set(
						keys[i],
						new Specail_Zhi_Zhu(values[i], keys[i])
					);
					break;
				case PropType.DIAN_XIANG:
					this.dic_Prop.set(
						keys[i],
						new DaDianXiang(values[i], keys[i])
					);
					break;
				case PropType.MU_BAN_MEN:
					this.dic_Prop.set(
						keys[i],
						new MuBanMen(values[i], keys[i])
					);
					break;
				case PropType.DOG_HOUSE:
					this.dic_Prop.set(keys[i], new GouShe(values[i], keys[i]));
					break;
				case PropType.WU_YA:
					this.dic_Prop.set(keys[i], new WuYa(values[i], keys[i]));
					break;
				case PropType.FENG_SHAN:
					this.dic_Prop.set(
						keys[i],
						new FengShan(values[i], keys[i])
					);
					break;
				case PropType.GAME_PROP:
					if (
						ItemResource.getItemByKey(values[i].different)
							.Randomid == 'null'
					) {
						this.specialProp(values[i], null, null);
					} else {
						PropPositionMgr.Inst.newSpecialProp(values[i]);
					}
					break;
				case PropType.CAR_BIG_DOOR:
					this.dic_Prop.set(
						keys[i],
						new Special_CarBigDoor(values[i], keys[i])
					);
					break;
				case PropType.INTRODUCE_POINT:
					this.dic_Prop.set(
						keys[i],
						new IntroducePoint(values[i], keys[i])
					);
					break;
			}
		}
		lockDoor(values, keys, i) {
			let data;
			switch (values[i].different) {
				case 1:
					data = MainRoleMgr.Inst.role.roleData.wuQiDoorKeys;
					break;
				case 2:
					data = MainRoleMgr.Inst.role.roleData.DogDoorKeys;
					this.dic_Prop.set(
						keys[i],
						new GouSheLockDoor(values[i], keys[i], data)
					);
					this.doorArray.push(this.dic_Prop.get(keys[i]));
					return;
				case 3:
					data = MainRoleMgr.Inst.role.roleData.BaoXianGuiKeys;
					break;
			}
			this.dic_Prop.set(
				keys[i],
				new PublicLockDoor(values[i], keys[i], data)
			);
			this.doorArray.push(this.dic_Prop.get(keys[i]));
		}
		specialProp(vo, position, positonObj) {
			let prop;
			if (!vo) return;
			switch (vo.different) {
				case 4:
					prop = new Qiang(vo, vo.different, position, positonObj);
					break;
				case 33:
					prop = new Special_Hua_Kuang(
						vo,
						vo.different,
						position,
						positonObj
					);
					break;
				case 5:
					prop = new Nu(vo, vo.different, position, positonObj);
					break;
				case 6:
					prop = new Special_Hu_Jiao_Mian(
						vo,
						vo.different,
						position,
						positonObj
					);
					break;
				case 26:
					prop = new Special_Bing_Attack(
						vo,
						vo.different,
						position,
						positonObj
					);
					break;
				case 8:
				case 46:
				case 47:
					prop = new Special_Ma_Zui_Zhen(
						vo,
						vo.different,
						position,
						positonObj
					);
					break;
				case 7:
				case 48:
				case 49:
					prop = new Special_Zi_Dan(
						vo,
						vo.different,
						position,
						positonObj
					);
					break;
				case 20:
					prop = new Special_Ying_Er(
						vo,
						vo.different,
						position,
						positonObj
					);
					break;
				case 50:
					prop = new MuBanView(
						vo,
						vo.different,
						position,
						positonObj
					);
					break;
				case 25:
					prop = new Special_Hua_Ping(
						vo,
						vo.different,
						position,
						positonObj
					);
					break;
				case 26:
					prop = new MaZuiZhen(
						vo,
						vo.different,
						position,
						positonObj
					);
					break;
				default:
					prop = new PropPublicBase(
						vo,
						vo.different,
						position,
						positonObj
					);
					break;
			}
			this.dic_Prop.set(vo.different, prop);
			return prop;
		}
	}
	class PropTree {
		constructor() {
			this.arrHight = [0, 3, 6, 6.5, 7, 9, 10, 12, 100];
			this.index = 0;
			this.testLine = [];
			this.squreDic = new Dictionary$1();
			this.init();
			this.item();
		}
		updata() {
			let values = PropMgr.Inst.dic_propVo.values;
			let keys = PropMgr.Inst.dic_propVo.keys;
			for (let i = 0; i < keys.length; i++) {
				let vo = values[i];
				for (let h = 1; h < this.arrHight.length; h++) {
					if (vo.y < this.arrHight[h]) {
						let dic = this.testLine[h - 1];
						dic.set(keys[i], vo);
						break;
					}
				}
			}
		}
		item() {
			for (let i = 0; i < this.arrHight.length; i++) {
				if (!this.testLine[i]) this.testLine.push(new Dictionary$1());
			}
		}
		clearTestLine() {
			for (let i = 0; i < this.testLine.length; i++) {
				this.testLine[i].clear();
			}
		}
		getLineItem() {
			let dic = this.testLine[this.index];
			if (!dic) this.index = 0;
			dic = this.testLine[this.index];
			this.index++;
			return dic;
		}
		isOk() {
			if (this.arrHight[this.index]) return false;
			return true;
		}
		init() {
			let items = LoadingRes.items;
			let item = null;
			let length = items.length;
			let positionArr = null;
			let pos;
			let arrString;
			let arrSqu = null;
			let arrName = null;
			for (let i = 0; i < length; i++) {
				item = items[i];
				positionArr = item.position;
				let arrSqu = this.parsePositon(positionArr);
				let arrName = this.parseName(item.floorid);
				this.squreDic.set(arrName, {
					arrSqu: arrSqu,
					arrRoom: item.hidefloor
				});
			}
		}
		parseName(str) {
			return str.split(',');
		}
		parsePositon(positionArr) {
			let obj_ = { small: null, big: null };
			let arrSqu = null;
			let smallVct = null;
			let bigVct = null;
			let smallVctArr = null;
			let bigVctArr = null;
			arrSqu = [];
			for (let i = 0; i < positionArr.length; i++) {
				obj_ = { small: null, big: null };
				smallVct = positionArr[i].split('#')[0];
				bigVct = positionArr[i].split('#')[1];
				smallVctArr = smallVct.split('^');
				bigVctArr = bigVct.split('^');
				obj_.small = new Laya.Vector3(
					-parseFloat(smallVctArr[0]),
					parseFloat(smallVctArr[1]),
					parseFloat(smallVctArr[2])
				);
				obj_.big = new Laya.Vector3(
					-parseFloat(bigVctArr[0]),
					parseFloat(bigVctArr[1]),
					parseFloat(bigVctArr[2])
				);
				arrSqu.push(obj_);
			}
			return arrSqu;
		}
		getPostionArrByName(nameString) {
			let keys = this.squreDic.keys;
			for (let i = 0; i < keys.length; i++) {
				let arrName = keys[i];
				for (let n = 0; n < arrName.length; n++) {
					if (nameString == arrName[n]) {
						return this.squreDic.values[i];
					}
				}
			}
			return null;
		}
	}
	var PropType;
	(function (PropType) {
		PropType[(PropType['NO_MUTUAL'] = 1)] = 'NO_MUTUAL';
		PropType[(PropType['PUBLIC_DOOR'] = 2)] = 'PUBLIC_DOOR';
		PropType[(PropType['PUBLIC_BED'] = 3)] = 'PUBLIC_BED';
		PropType[(PropType['PUBLIC_CHOUTI'] = 4)] = 'PUBLIC_CHOUTI';
		PropType[(PropType['PUBLIC_COLIDER'] = 5)] = 'PUBLIC_COLIDER';
		PropType[(PropType['PUBLIC_GEAR'] = 6)] = 'PUBLIC_GEAR';
		PropType[(PropType['PUBLIC_LOOK_DOOR'] = 7)] = 'PUBLIC_LOOK_DOOR';
		PropType[(PropType['PUBLIC_YI_GUI'] = 8)] = 'PUBLIC_YI_GUI';
		PropType[(PropType['PUBLIC_WAN_GUI'] = 9)] = 'PUBLIC_WAN_GUI';
		PropType[(PropType['PUBLIC_SHU_JIA'] = 10)] = 'PUBLIC_SHU_JIA';
		PropType[(PropType['WINDOW'] = 11)] = 'WINDOW';
		PropType[(PropType['JING_GAI'] = 12)] = 'JING_GAI';
		PropType[(PropType['HIDE_MU_XIANG'] = 13)] = 'HIDE_MU_XIANG';
		PropType[(PropType['DUAN_TOU_TAI'] = 14)] = 'DUAN_TOU_TAI';
		PropType[(PropType['SHU_JIA'] = 15)] = 'SHU_JIA';
		PropType[(PropType['ON_OFF'] = 16)] = 'ON_OFF';
		PropType[(PropType['RUO_DIAN_XIANG'] = 17)] = 'RUO_DIAN_XIANG';
		PropType[(PropType['GAME_PROP'] = 18)] = 'GAME_PROP';
		PropType[(PropType['BE_USED'] = 19)] = 'BE_USED';
		PropType[(PropType['CAR'] = 20)] = 'CAR';
		PropType[(PropType['TU_ZHI'] = 21)] = 'TU_ZHI';
		PropType[(PropType['LOU_TI_JIAN'] = 22)] = 'LOU_TI_JIAN';
		PropType[(PropType['SHUI_JING'] = 23)] = 'SHUI_JING';
		PropType[(PropType['DA_MEN'] = 24)] = 'DA_MEN';
		PropType[(PropType['ZHI_ZHU'] = 25)] = 'ZHI_ZHU';
		PropType[(PropType['DIAN_XIANG'] = 26)] = 'DIAN_XIANG';
		PropType[(PropType['MU_BAN_MEN'] = 27)] = 'MU_BAN_MEN';
		PropType[(PropType['DOG_HOUSE'] = 28)] = 'DOG_HOUSE';
		PropType[(PropType['WU_YA'] = 29)] = 'WU_YA';
		PropType[(PropType['FENG_SHAN'] = 30)] = 'FENG_SHAN';
		PropType[(PropType['DOOR_YUAN_ZI'] = 31)] = 'DOOR_YUAN_ZI';
		PropType[(PropType['Door_YING_ER_ROOM'] = 32)] = 'Door_YING_ER_ROOM';
		PropType[(PropType['CAR_BIG_DOOR'] = 33)] = 'CAR_BIG_DOOR';
		PropType[(PropType['INTRODUCE_POINT'] = 34)] = 'INTRODUCE_POINT';
	})(PropType || (PropType = {}));

	class UIInfoWindowView extends UIBaseWindow {
		constructor() {
			super('UIInfoWindowView', 'UIInfoWindowView');
			this.btn_Sure = null;
			this.btn_Close = null;
			this.btn_LookAd = null;
			this.btn_LookAdTT = null;
			this.btn_CloseTT = null;
			this.img_GetInfo = null;
			this.lab_Info = null;
			this.lab_Name = null;
			this.n9 = null;
			this.imgLoader = null;
			this.text_Tip = null;
		}
		SetViewStruct() {
			super.SetViewStruct();
			this.viewStruct.layerType = LayerType.TYPE_ALERT;
			this.viewStruct.layout = 5;
		}
		InitUI() {
			this.btn_Sure.visible = false;
			this.btn_LookAdTT.visible = false;
			this.btn_LookAd.visible = false;
			this.btn_CloseTT.visible = false;
			if (Laya.Browser.window.tt) {
				this.btn_LookAdTT.visible = true;
				this.btn_CloseTT.visible = true;
			} else this.btn_LookAd.visible = true;
			this.img_GetInfo.visible = true;
			this.lab_Info.visible = false;
			this.btn_Close.visible = true;
			this.imgLoader.visible = false;
			this.lab_Name.visible = false;
			this.text_Tip.visible = false;
			this.text_Tip.color = '#D0D0D0';
			GameMgr.Inst.pauseGame();
		}
		InitData(data) {
			this.adId = data.id;
			console.log('获得广告', +this.adId);
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeImgBlack(
				true,
				200,
				null,
				null,
				0.8
			);
			this.btnCloseShow();
			if (Role.ins_.isInPropInfo(this.adId)) this.onAdLookOver(true);
			if (Role.ins_.getHandPropId() != null) {
				this.text_Tip.visible = true;
			}
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'oppo',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'meizu',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'vivo',
				isShow: true,
				parent: this,
				x: GameConfig.viewWidth / 2,
				y: 720,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'toutiao',
				isShow: true,
				parent: this,
				viewWidth: 200,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'qq',
				isShow: true,
				parent: this,
				viewWidth: 200,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'wx',
				isShow: true,
				parent: this,
				viewWidth: 200,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.HT_VER_LEFT_BOX, {
				isShow: true,
				name: 'wx',
				parent: this.parent,
				x: 0,
				y: (720 - 520) / 2
			});
			SDK.ins_.send(SDK_ORDER.HT_VER_RIGHT_BOX, {
				isShow: true,
				name: 'wx',
				parent: this.parent,
				x: GameConfig.viewWidth - 167,
				y: (720 - 520) / 2
			});
		}
		AddListener() {
			this.btn_Sure.onClick(this, this.onCloseUI);
			this.btn_Close.onClick(this, this.onClose2);
			this.btn_LookAd.onClick(this, this.onBtnLookAd);
			this.btn_LookAdTT.onClick(this, this.onBtnLookAd);
			this.btn_CloseTT.onClick(this, this.onCloseUI);
		}
		RemoveListener() {
			this.btn_Sure.offClick(this, this.onCloseUI);
			this.btn_Close.offClick(this, this.onClose2);
			this.btn_LookAd.offClick(this, this.onBtnLookAd);
			this.btn_LookAdTT.offClick(this, this.onBtnLookAd);
			this.btn_CloseTT.offClick(this, this.onCloseUI);
		}
		onCloseUI() {
			this.onBtnClose();
		}
		onClose2() {
			this.onBtnClose();
		}
		onBtnClose() {
			GameMgr.Inst.contiueGame();
			UISystem.Inst.RemoveWindowView(this);
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'toutiao',
				isShow: false,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'meizu',
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'qq',
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			SDK.ins_.send(SDK_ORDER.AD_NATIVE_BANNER_ISSHOW, {
				name: 'wx',
				isShow: false,
				isDialog: true,
				adPoint: 4
			});
			this.dealInfo();
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeImgBlack(
				false,
				200,
				null,
				null,
				0.8
			);
			SDK.ins_.send(SDK_ORDER.HT_VER_LEFT_BOX, {
				isShow: false,
				name: 'wx'
			});
			SDK.ins_.send(SDK_ORDER.HT_VER_RIGHT_BOX, {
				isShow: false,
				name: 'wx'
			});
			let uiplayingView = UISystem.Inst.GetWindowView(UIGamePlayView);
		}
		onBtnLookAd() {
			let handler = Laya.Handler.create(
				this,
				this.onAdLookOver,
				null,
				false
			);
			SoundMgr.Inst.isPass = false;
			console.log('------------看广告------------');
			this.aldPoint();
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'oppo',
				handler: handler,
				needReplay: true
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'wx',
				handler: handler,
				needReplay: true
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'qq',
				handler: handler,
				needReplay: true
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'meizu',
				handler: handler,
				needReplay: true
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'toutiao',
				handler: handler,
				needReplay: true
			});
			SDK.ins_.send(SDK_ORDER.NO_SDK_HANDLER, {
				name: 'web',
				handler: Laya.Handler.create(
					this,
					this.onAdLookOver,
					[true],
					false
				),
				needReplay: true
			});
			SDK.ins_.send(SDK_ORDER.AD_VIDEO_ISSHOW, {
				name: 'vivo',
				handler: handler,
				needReplay: true
			});
		}
		onAdLookOver(isOver) {
			if (!isOver) return;
			Role.ins_.setPropInfo(this.adId);
			this.showInfo();
			GameEventMgr.Inst.sendEvent([EventName.REFRESH_UI_PROPLIST]);
			this.text_Tip.visible = false;
			SoundMgr.Inst.isPass = true;
			this.btn_Close.offClick(this, this.onClose2);
			this.btn_Close.onClick(this, this.onClose2);
		}
		showInfo() {
			this.btn_Sure.visible = true;
			this.btn_LookAd.visible = false;
			this.btn_LookAdTT.visible = false;
			this.btn_CloseTT.visible = false;
			this.img_GetInfo.visible = false;
			this.lab_Info.visible = true;
			this.imgLoader.visible = true;
			this.lab_Name.visible = true;
			let config = I18nResource.getItemByKey(this.adId);
			this.imgLoader.setSize(110, 110);
			this.imgLoader.url = 'ui://UIInfoWindowView/' + config.icon;
			this.lab_Info.text = config.msg;
			this.lab_Name.text = config.txt.replace(/\\n/g, '\n');
			this.btnCloseHide();
		}
		btnCloseHide() {
			this.videoHandler = Laya.Handler.create(
				this,
				this.onAdLookOver,
				null,
				false
			);
			SDK.ins_.send(SDK_ORDER.CHANGE_CLOSE_ENINTRODUCE, {
				isShow: false,
				name: 'qq'
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_CLOSE_ENINTRODUCE, {
				isShow: false,
				name: 'wx'
			});
		}
		btnCloseShow() {
			this.videoHandler = Laya.Handler.create(
				this,
				this.onAdLookOver,
				null,
				false
			);
			SDK.ins_.send(SDK_ORDER.CHANGE_CLOSE_ENINTRODUCE, {
				isShow: true,
				name: 'qq',
				btn: this.btn_Close,
				parent: this._view,
				ui: this,
				fun: this.onClose2,
				x: 365,
				y: 30,
				videoHandler: this.videoHandler
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_CLOSE_ENINTRODUCE, {
				isShow: true,
				name: 'wx',
				btn: this.btn_Close,
				parent: this._view,
				ui: this,
				fun: this.onClose2,
				x: 365,
				y: 30,
				videoHandler: this.videoHandler
			});
		}
		dealInfo() {
			switch (this.adId) {
				case 37:
					GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
						id: 9
					});
					break;
			}
		}
		aldPoint() {
			SDK.ins_.send(SDK_ORDER.ALD_SEND_EVENT, {
				name: 'wx',
				eventName: '观看线索视频',
				arg: {
					观看的线索id: this.adId,
					观看的线索: I18nResource.getItemByKey(this.adId).msg
				}
			});
		}
	}

	class BaseEndEvent {
		constructor(isNewScene) {
			this.role = MainRoleMgr.Inst.getRoleScript();
			this.kbnnScript = SceneMgr.Inst.GetKbnnScript();
			this.kbnnScript.enabled = false;
			this.kbnnScript.owner.active = true;
			this.kbnnTramsform = this.kbnnScript.owner.transform;
			this.playingUi = UISystem.Inst.GetWindowView(UIGamePlayView);
			this.animator = this.role.cameraBox.getComponent(Laya.Animator);
			this.kbnnScript.owner.getComponent(
				Laya.CharacterController
			).enabled = false;
			this.role.RayCheckOnOff(false);
			this.playingUi.ChangeAll(false);
			if (isNewScene) {
				this.newScene();
				return;
			}
		}
		newScene() {
			let lf = this;
			LoadQueue.Inst.loadScene3D(
				UrlUtils.GetSceneEndUrl('shiwai'),
				Laya.Handler.create(null, function (scene) {
					GameLayer.sceneLayer.addChild(scene);
					scene
						.getChildByName('jueju_01')
						.getChildAt(0).enableHDR = false;
					lf.kbnn_new = scene.getChildByName('kbnn_nainai');
					lf.camera = scene.getChildByName('jueju_01').getChildAt(0);
					lf.wanJuXiong = scene.getChildByName('wanjuxiong');
					lf.animator = lf.camera.getComponent(Laya.Animator);
					lf.guihun = scene.getChildByName('Mod_eff_nvgui');
					lf._CurScene = scene;
					lf.kbnnAniNew = lf.kbnn_new.getComponent(Laya.Animator);
					lf.jieshuyu = scene.getChildByName('jieshusyu');
					lf.onWake();
					lf.sdk();
				}),
				LoadLevel.SCENE
			);
		}
		onWake() {
			this.role.cameraRoleObj.active = false;
			this.kbnnScript.owner.active = false;
			SceneMgr.Inst._curScene.active = false;
			this.guihun.active = false;
		}
		sdk() {}
		aniPlay_2(aniName, timePointArr, numFoalt = 0.001) {
			this.animator.speed = 1;
			this.animator.play(aniName);
			this.aniPlayStatus = this.animator.getCurrentAnimatorPlayState();
			Laya.timer.loop(16, this, this.playStatue, [
				timePointArr,
				numFoalt
			]);
		}
		aniPlay(aniName, timePointArr, numFoalt = 0.001) {
			PropMgr.Inst.timerCtl(true);
			this.role.camera_OUT_IN(true);
			this.role.cameraRoleObj.transform.lookAt(
				this.role.cameraBox.transform.position,
				new Laya.Vector3(0, 1, 0),
				false
			);
			this.animator.speed = 1;
			this.animator.play(aniName);
			this.aniPlayStatus = this.animator.getCurrentAnimatorPlayState();
			Laya.timer.loop(16, this, this.playStatue, [
				timePointArr,
				numFoalt
			]);
		}
		playStatue(timePointArr, numFoalt) {
			if (this.aniPlayStatus.normalizedTime >= 1) {
				this.aniEnd();
				Laya.timer.clear(this, this.playStatue);
			}
			if (!timePointArr) return;
			for (let i = 0; i < timePointArr.length; i++) {
				let playtime =
					this.aniPlayStatus.duration *
					this.aniPlayStatus.normalizedTime;
				if (
					playtime > timePointArr[i] - numFoalt &&
					playtime < timePointArr[i] + numFoalt
				) {
					this.timeEventDeal(timePointArr[i]);
					timePointArr[i] = -1;
				}
			}
		}
		timeEventDeal(timePoint) {}
		aniEnd() {}
		gameOver() {
			SDK.ins_.send(SDK_ORDER.HT_VER_LEFT_BOX, {
				isShow: true,
				name: 'wx',
				parent: this.playingUi,
				x: 0,
				y: (720 - 520) / 2
			});
			SDK.ins_.send(SDK_ORDER.HT_VER_RIGHT_BOX, {
				isShow: true,
				name: 'wx',
				parent: this.playingUi,
				x: GameConfig.viewWidth - 167,
				y: (720 - 520) / 2
			});
			PropMgr.Inst.timerCtl(false);
			this.playingUi.ChangeInjuredSpine(false, false);
			SoundMgr.Inst.stopSound(75);
			Role.ins_.RoleChangeStatLock = false;
		}
	}

	class DieByCarEvent extends BaseEndEvent {
		constructor() {
			super();
		}
		enter() {
			this.playingUi.ChangeInjuredSpine(true, true);
			SoundMgr.Inst.playSound(91);
			this.kbnnTramsform.position = new Laya.Vector3(1.325, 0, -1.371);
			this.kbnnTramsform.rotationEuler = new Laya.Vector3(0, 0, 0);
			this.kbnnScript.PlayState('lost1_stand');
			GameConfig.needRayTest = false;
			this.role.cameraRoleObj.transform.position = new Laya.Vector3(
				-1.18,
				-0.5,
				-2.038
			);
			this.role.cameraRoleObj.transform.lookAt(
				this.role.cameraBox.transform.position,
				new Laya.Vector3(0, 1, 0),
				false
			);
			this.playingUi.ChangeImgBlack(false, 2000, null, 3000);
			Laya.timer.loop(16, this, this.testArea);
			Laya.timer.once(3000, this, function () {
				this.aniPlay('Lose_cheku_Animation_01', [16, 18, 23.2], 0.02);
			});
		}
		testArea() {
			PropMgr.Inst.areaTest('diban1');
		}
		aniEnd() {
			this.playingUi.ChangeImgBlack(
				true,
				2000,
				Laya.Handler.create(this, this.gameOver)
			);
		}
		timeEventDeal(timePoint) {
			switch (timePoint) {
				case 16:
					this.kbnnScript.PlayState('lost1_jushou');
					break;
				case 18:
					let car = GameEventMgr.Inst.getPropByEventName(
						EventName.CAR_GO
					);
					car.propSprite.addChild(this.kbnnScript.owner);
					GameEventMgr.Inst.sendEvent([EventName.CAR_GO], {
						dieByCar: true
					});
					break;
				case 23.2:
					SoundMgr.Inst.playSound(92);
					break;
			}
		}
		gameOver() {
			super.gameOver();
			SoundMgr.Inst.playSound(93);
			this.playingUi.ChangeDieSpine(true);
			Laya.timer.clear(this, this.testArea);
			GameConfig.needRayTest = true;
			Laya.timer.once(4000, this, function () {
				GameEventMgr.Inst.sendEvent([EventName.FAIL_ANI_OVER]);
			});
		}
	}

	class DieByPushEvent extends BaseEndEvent {
		constructor() {
			super();
		}
		enter() {
			this.playingUi.ChangeInjuredSpine(true, true);
			this.kbnnTramsform.position = new Laya.Vector3(
				5.446,
				5.996,
				-8.237
			);
			this.kbnnTramsform.rotationEuler = new Laya.Vector3(0, -90, 0);
			this.role.cameraRoleObj.transform.position = new Laya.Vector3(
				-2.065,
				4.218,
				-9.515
			);
			this.playingUi.ChangeImgBlack(false, 1000, null, 200);
			this.aniPlay('Lose_louti_Animation', [5, 8, 15.5], 0.02);
			SoundMgr.Inst.playSound(94);
		}
		timeEventDeal(timePoint) {
			switch (timePoint) {
				case 5:
					this.playingUi.ChangeImgBlack(true, 500, null);
					this.kbnnTramsform.position = new Laya.Vector3(
						0.996,
						2.9,
						-2.67
					);
					this.kbnnTramsform.rotationEuler = new Laya.Vector3(
						0,
						23.4,
						0
					);
					break;
				case 8:
					this.playingUi.ChangeImgBlack(false, 2000, null);
					break;
				case 15.5:
					this.kbnnScript.PlayState('lost2_kill');
					break;
			}
		}
		aniEnd() {
			this.playingUi.ChangeImgBlack(
				true,
				1500,
				Laya.Handler.create(this, function () {
					Laya.timer.once(2500, this, this.gameOver);
				})
			);
		}
		gameOver() {
			super.gameOver();
			this.playingUi.ChangeDieSpine(true);
			Laya.timer.once(4000, this, function () {
				SoundMgr.Inst.stopSound(94);
				GameEventMgr.Inst.sendEvent([EventName.FAIL_ANI_OVER]);
				PropMgr.Inst.timerCtl(false);
			});
		}
	}

	class DieByDropEvent extends BaseEndEvent {
		constructor() {
			super();
		}
		enter() {
			this.playingUi.ChangeInjuredSpine(true, true);
			this.kbnnTramsform.position = new Laya.Vector3(
				7.979,
				12.854,
				-2.988
			);
			this.kbnnTramsform.rotationEuler = new Laya.Vector3(0, 216.2, 0);
			this.role.cameraRoleObj.transform.position = new Laya.Vector3(
				8.253,
				13.608,
				-1.598
			);
			this.role.cameraRoleObj.transform.lookAt(
				this.role.cameraBox.transform.position,
				new Laya.Vector3(0, 1, 0),
				false
			);
			this.playingUi.ChangeImgBlack(false, 6000, null, 300);
			this.aniPlay(
				'Lose_zhuiluo_Animation',
				[15.3, 16, 21.5, 22, 23.8, 24.8, 26.25],
				0.04
			);
			SoundMgr.Inst.playSound(95);
		}
		aniEnd() {
			this.playingUi.ChangeImgBlack(
				true,
				200,
				Laya.Handler.create(this, function () {
					this.gameOver();
				})
			);
		}
		timeEventDeal(timePoint) {
			switch (timePoint) {
				case 15.3:
					SoundMgr.Inst.playSound(96);
					break;
				case 16:
					this.kbnnScript.PlayState('lost4_shiyi');
					break;
				case 21.5:
					this.kbnnScript.PlayState('lost4_zhuantou');
					break;
				case 23.8:
					SoundMgr.Inst.playSound(97);
					break;
				case 22:
					this.kbnnScript.PlayState('lost4_kill');
					break;
				case 24.8:
					GameEventMgr.Inst.sendEvent([EventName.GEAR], {
						visible: false
					});
					break;
				case 26.25:
					SoundMgr.Inst.playSound(98);
					break;
			}
		}
		gameOver() {
			super.gameOver();
			this.playingUi.ChangeDieSpine(true);
			Laya.timer.once(4000, this, function () {
				SoundMgr.Inst.stopSound(95);
				GameEventMgr.Inst.sendEvent([EventName.FAIL_ANI_OVER]);
				PropMgr.Inst.timerCtl(false);
			});
		}
	}

	class DieByCutEvent extends BaseEndEvent {
		constructor() {
			super();
		}
		enter() {
			this.playingUi.ChangeInjuredSpine(true, true);
			SoundMgr.Inst.playSound(99);
			this.kbnnTramsform.position = new Laya.Vector3(-12.1, 5.9, 12.49);
			this.kbnnTramsform.rotationEuler = new Laya.Vector3(
				18.55,
				136.22,
				14.1
			);
			this.role.cameraRoleObj.transform.position = new Laya.Vector3(
				-12.01,
				6.681,
				17.756
			);
			this.playingUi.ChangeImgBlack(false, 2000, null, 200);
			this.aniPlay('Lose_duantoutai_Animation', [10.5, 13, 13.5], 0.01);
		}
		aniEnd() {
			this.playingUi.ChangeImgBlack(
				true,
				500,
				Laya.Handler.create(this, function () {
					Laya.timer.once(2500, this, this.gameOver);
				})
			);
		}
		timeEventDeal(timePoint) {
			switch (timePoint) {
				case 10.5:
					this.onoff = GameEventMgr.Inst.getPropByEventName(
						EventName.ON_OFF_DUAN_TOU_TAI
					);
					this.onoff.propSprite.transform.position = new Laya.Vector3(
						-11.43247,
						6.39,
						12.103
					);
					this.kbnnScript.PlayState('lost3_kill', null, 1);
					Laya.timer.once(1300, this, function () {
						Laya.Tween.to(
							this.onoff.propSprite.transform,
							{
								localRotationEulerZ:
									this.onoff.propSprite.transform
										.localRotationEulerZ + 90
							},
							800,
							Laya.Ease.expoInOut
						);
					});
					break;
				case 13:
					SoundMgr.Inst.playSound(100);
					break;
				case 13.5:
					GameEventMgr.Inst.sendEvent([EventName.DUAN_TOU_TAI]);
					break;
			}
		}
		gameOver() {
			super.gameOver();
			this.playingUi.ChangeDieSpine(true);
			Laya.timer.once(4000, this, function () {
				SoundMgr.Inst.stopSound(99);
				GameEventMgr.Inst.sendEvent([EventName.FAIL_ANI_OVER]);
			});
		}
	}

	class WinByCarEvent extends BaseEndEvent {
		constructor() {
			super();
		}
		enter() {
			SoundMgr.Inst.playSound(89);
			SoundMgr.Inst.playSound(90);
			this.kbnnScript.SetStateMachine(null);
			this.kbnnScript.owner.transform.position = new Laya.Vector3(
				0.544,
				0,
				4.67
			);
			this.kbnnScript.owner.transform.rotationEuler = new Laya.Vector3(
				0,
				0,
				0
			);
			this.animator.speed = 1;
			this.aniPlay('jieju_04_Animation', [7], 0.01);
			this.kbnnScript.PlayState('win2_stand1');
		}
		timeEventDeal(timePoint) {
			switch (timePoint) {
				case 7:
					let img = this.playingUi.ChangViewEnd(true);
					Laya.Tween.from(img, { alpha: 0 }, 1000);
					break;
			}
		}
		aniEnd() {
			this.gameOver();
		}
		gameOver() {
			super.gameOver();
			GameEventMgr.Inst.sendEvent([EventName.FAIL_ANI_OVER]);
		}
	}

	class WinByEnd2Event extends BaseEndEvent {
		constructor() {
			super(true);
		}
		onWake() {
			this.guihun.active = false;
			this.playingUi.ChangeBtnMengBan(true, 0.8);
			this.wanJuXiong.active = false;
			this.kbnn_new.transform.position = new Laya.Vector3(
				14.09,
				5.508,
				-3.04
			);
			this.kbnn_new.transform.rotationEuler = new Laya.Vector3(0, 220, 0);
			this.playingUi.ChangeImgBlack(
				false,
				1000,
				Laya.Handler.create(this, function () {
					SceneMgr.Inst.getScene().active = false;
				})
			);
			this.aniPlay_2('jieju_02_Animation', [3, 7], 0.01);
			this.kbnnAniNew.play('win2_stand1');
		}
		timeEventDeal(timePoint) {
			switch (timePoint) {
				case 3:
					this.kbnnAniNew.crossFade('win2_zhuantou', 0.1);
					SoundMgr.Inst.playSound(87);
					break;
				case 7:
					let img = this.playingUi.ChangePractise(true);
					Laya.Tween.from(
						img,
						{ alpha: 0, scaleX: 3, scaleY: 3 },
						1000
					);
					Laya.Tween.to(this._CurScene, { fogStart: 0 }, 1000);
					Laya.Tween.to(this._CurScene, { fogRange: 8 }, 1000);
					break;
			}
		}
		aniEnd() {
			super.gameOver();
			Laya.timer.once(3000, this, function () {
				GameEventMgr.Inst.sendEvent([EventName.FAIL_ANI_OVER]);
			});
		}
	}

	class WinByEnd3Event extends BaseEndEvent {
		constructor() {
			super(true);
		}
		onWake() {
			this.wanJuXiong.active = false;
			this.guihun.active = false;
			this.playingUi.ChangeBtnMengBan(true, 0.8);
			this.playingUi.ChangeImgBlack(
				false,
				1500,
				Laya.Handler.create(this, function () {
					SceneMgr.Inst.getScene().active = false;
				})
			);
			this.kbnn_new.transform.position = new Laya.Vector3(
				11.106,
				6.023,
				-4.5
			);
			this.kbnn_new.transform.rotationEuler = new Laya.Vector3(0, 90, 0);
			this.aniPlay_2('jieju_03_Animation', [2.5, 6, 9, 10], 0.02);
			this.kbnnAniNew.play('win3_stand1');
		}
		timeEventDeal(timePoint) {
			switch (timePoint) {
				case 2.5:
					SoundMgr.Inst.playSound(87);
					break;
				case 6:
					Laya.Tween.to(this._CurScene, { fogStart: 2 }, 3000);
					Laya.Tween.to(this._CurScene, { fogRange: 6 }, 3000);
					break;
				case 9:
					Laya.Tween.to(
						this.kbnn_new.transform,
						{
							localPositionX: 55.005,
							localPositionY: 8.225,
							localPositionZ: -4.5
						},
						1000
					);
					break;
				case 10:
					SoundMgr.Inst.playSound(86);
					this.kbnnAniNew.play('win3_zhui');
					Laya.Tween.to(this._CurScene, { fogStart: 0 }, 2000);
					Laya.Tween.to(this._CurScene, { fogRange: 0.05 }, 2000);
					break;
			}
		}
		aniEnd() {
			super.gameOver();
			Laya.timer.once(3000, this, function () {
				GameEventMgr.Inst.sendEvent([EventName.FAIL_ANI_OVER]);
				this.playingUi.ChangeBtnMengBan(false, 1);
			});
		}
	}

	class WinByEnd1Event extends BaseEndEvent {
		constructor() {
			super(true);
		}
		onWake() {
			this.guihun.active = true;
			this.aniPlay_2('jieju_01_Animation', [3.3, 4.34, 6.8, 9], 0.01);
			this.kbnnAniNew.play('win1_stand1');
			this.playingUi.ChangeImgBlack(
				false,
				1000,
				Laya.Handler.create(this, function () {
					SceneMgr.Inst.getScene().active = false;
				})
			);
		}
		timeEventDeal(timePoint) {
			switch (timePoint) {
				case 3.3:
					this.kbnnAniNew.crossFade('win1_zhuantou', 0.1);
					SoundMgr.Inst.playSound(87);
					break;
				case 4.34:
					this.kbnnAniNew.crossFade('win1_stand2', 0.1);
					break;
				case 6.8:
					let img = this.playingUi.ChangViewEnd(true);
					Laya.Tween.from(
						img,
						{ alpha: 0, scaleX: 3, scaleY: 3 },
						1000
					);
					break;
				case 9:
					this.playingUi.ChangeImgBlack(true, 1000, null);
					break;
			}
		}
		aniEnd() {
			super.gameOver();
			Laya.timer.once(3000, this, function () {
				GameEventMgr.Inst.sendEvent([EventName.FAIL_ANI_OVER]);
			});
		}
	}

	class GameDispatcher extends Laya.EventDispatcher {
		constructor() {
			super();
		}
		static get Inst() {
			if (this._Inst == null) this._Inst = new GameDispatcher();
			return this._Inst;
		}
	}
	GameDispatcher._Inst = null;

	class ProIntroduce1 extends BaseIntroduce {
		constructor() {
			super();
		}
		enter() {
			this.playigUI.ChangeWordsBox(true, [
				'Me: My head hurts...\\n Where am I?'
			]);
		}
		getUpOk() {
			this.roleScript.moveLock = true;
			this.roleScript.viewLock_X = true;
			this.roleScript.viewLock_Y = true;
			let word = ['Me: Seems like someone attacked me from behind,\\n What the hell happened.'];
			this.playigUI.ChangeWordsBox(
				true,
				word,
				Laya.Handler.create(this, this.introdce)
			);
		}
		introdce() {
			this.roleScript.viewLock_X = false;
			this.roleScript.viewLock_Y = false;
			this.playigUI.forceStopIntroduceVisible = false;
			this.playigUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			this.playigUI.ChangeHandSpine(true, 1);
			GameEventMgr.Inst.sendEvent([EventName.SHOW_INTRODUCE_TEXT], {
				id: 1
			});
			Laya.timer.loop(16, this, this.isLookAtIntrodcePoint);
		}
		isLookAtIntrodcePoint() {
			let num = MainRoleMgr.Inst.isLookAtIntrodcePoint();
			if (
				num == 1 ||
				!Guide.getItemByKey(this.role.roleData.introducePointStatus)
			) {
				this.exit();
				GameEventMgr.Inst.sendEvent([EventName.SHOW_INTRODUCE_TEXT], {
					id: 2
				});
			}
		}
		exit() {
			super.exit();
			Laya.timer.clear(this, this.isLookAtIntrodcePoint);
			this.playigUI.ChangeHandSpine(false, 1);
			this.roleScript.moveLock = false;
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], { id: 2 });
		}
		defaultTrigger(data) {
			switch (data.sym) {
				case 'getUp':
					this.getUpOk();
					break;
			}
		}
		blackLock(isShow) {}
		hand(isShow) {}
		sceneNarrow(isShow) {}
		UINarrow(isShow) {}
		forceExit(needWindow = true) {
			Laya.timer.clear(this, this.isLookAtIntrodcePoint);
			super.forceExit(needWindow);
		}
	}

	class ProIntroduce2 extends BaseIntroduce {
		constructor() {
			super();
			this.arrtimes = [1, 1, 1, 1];
			this.arrtimes_use = [0, 0, 0, 0];
		}
		enter() {
			this.roleScript.RayCheckOnOff(false);
			this.roleTransform = this.roleScript.cameraRoleObj.transform;
			this.playigUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			this.playigUI.ChangeNarrowSpine(true, {
				x: 215,
				y: 370,
				rotation: 90
			});
			this.playigUI.showIntroduceBlack(true, 'joystick');
			Laya.timer.loop(16, this, this.isLookAtIntrodcePoint);
		}
		isLookAtIntrodcePoint() {
			if (this.roleTransform.localPositionX < -5.253) {
				this.exit();
			}
		}
		exit() {
			super.exit();
			this.roleScript.RayCheckOnOff(true);
			Laya.timer.clear(this, this.isLookAtIntrodcePoint);
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], { id: 3 });
		}
		defaultTrigger() {}
		blackLock(isShow) {
			if (
				this.arrtimes_use[IntorduceUITYPE.BlackLock] <=
				this.arrtimes[IntorduceUITYPE.BlackLock]
			)
				this.playigUI.showIntroduceBlack(false, 'joystick');
		}
		hand(isShow) {}
		sceneNarrow(isShow) {}
		UINarrow(isShow) {
			if (
				this.arrtimes_use[IntorduceUITYPE.UINarrow] <=
				this.arrtimes[IntorduceUITYPE.UINarrow]
			)
				this.playigUI.ChangeNarrowSpine(false);
		}
		forceExit(needWindow = true) {
			Laya.timer.clear(this, this.isLookAtIntrodcePoint);
			super.forceExit(needWindow);
		}
	}

	class ProIntroduce3 extends BaseIntroduce {
		constructor() {
			super();
			this.arrtimes = [1, 1, 1, 1];
			this.arrtimes_use = [0, 0, 0, 0];
		}
		enter() {
			this.roleScript.moveLock = true;
			this.playigUI.ChangeHandSpine(true, -90);
		}
		exit() {
			super.exit();
			this.roleScript.moveLock = false;
			this.roleScript.viewLock_X = false;
			this.roleScript.viewLock_Y = false;
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], { id: 4 });
			this.playigUI.ChangeSigeManHua(-1);
		}
		defaultTrigger(data) {}
		blackLock(isShow, data) {
			if (data.sym == 'UseChouTi') {
				this.playigUI.showIntroduceBlack(false, 'btn_takeup');
				this.playigUI.ChangeBtnTake(false);
				this.roleScript.viewLock_X = true;
				this.roleScript.viewLock_Y = true;
				this.playigUI.ChangeWordsBox(
					true,
					['Me: It seems like it was left here intentionally.'],
					Laya.Handler.create(this, this.playSpine)
				);
				GameEventMgr.Inst.sendEvent([EventName.OTHER_INTRODUCE_POINT]);
				GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_POINT], {
					eventIndex: 1,
					add: 1
				});
			}
			if (
				this.arrtimes_use[IntorduceUITYPE.BlackLock] <=
				this.arrtimes[IntorduceUITYPE.BlackLock]
			) {
				this.playigUI.showIntroduceBlack(isShow, 'btn_takeup');
				this.playigUI.ChangeHandSpine(false);
			}
		}
		playSpine() {
			Laya.timer.once(800, this, function () {
				this.playigUI.ChangeSigeManHua(
					1,
					[2, 3.5, 5, 6],
					Laya.Handler.create(this, this.onBtnStage, null, false)
				);
				this.roleScript.moveLock = true;
			});
		}
		onBtnStage(index) {
			console.log(index);
			switch (index) {
				case 0:
					this.playigUI.ChangeWordsBox(
						true,
						['Me: A traveler...'],
						Laya.Handler.create(this, function () {
							this.playigUI.ChangeSigeManHua(0);
						})
					);
					break;
				case 1:
					this.playigUI.ChangeWordsBox(
						true,
						['Me: Who attacked him...'],
						Laya.Handler.create(this, function () {
							this.playigUI.ChangeSigeManHua(0);
						})
					);
					break;
				case 2:
					this.playigUI.ChangeWordsBox(
						true,
						['Me: Five days...'],
						Laya.Handler.create(this, function () {
							this.playigUI.ChangeSigeManHua(0);
						})
					);
					break;
				default:
					this.playigUI.ChangeWordsBox(
						true,
						['Me: What... what is this! What a horror!'],
						Laya.Handler.create(this, this.exit)
					);
					break;
			}
		}
		hand(isShow, data) {}
		sceneNarrow(isShow, data) {}
		UINarrow(isShow, data) {
			if (!isShow) {
				this.playigUI.ChangeNarrowSpine(isShow);
			}
			if (
				this.arrtimes_use[IntorduceUITYPE.BlackLock] <=
				this.arrtimes[IntorduceUITYPE.BlackLock]
			) {
				this.playigUI.ChangeNarrowSpine(isShow, {
					x: GameConfig.viewWidth - 150,
					y: 300,
					rotation: 180
				});
			}
		}
		forceExit(needWindow = true) {
			super.forceExit(needWindow);
		}
	}

	class ProIntroduce4 extends BaseIntroduce {
		constructor() {
			super();
			this.arrtimes = [1, 1, 1, 1];
			this.arrtimes_use = [0, 0, 0, 0];
		}
		enter() {
			this.roleScript.moveLock = true;
			this.roleScript.viewLock_X = true;
			this.roleScript.viewLock_Y = true;
			this.playigUI.ChangeWordsBox(
				true,
				['Me: No! I need to escape quickly.'],
				Laya.Handler.create(this, this.onReadOver)
			);
		}
		onReadOver() {
			this.roleScript.moveLock = false;
			this.roleScript.viewLock_X = false;
			this.roleScript.viewLock_Y = false;
			this.roleScript.RayCheckOnOff(false);
			GameEventMgr.Inst.sendEvent([EventName.SHOW_INTRODUCE_TEXT], {
				id: 3
			});
			Laya.timer.loop(16, this, this.textPos);
		}
		textPos() {
			if (this.roleTransform.localPositionZ < 3.375) {
				GameEventMgr.Inst.sendEvent([EventName.DESK_AUTO_BEFORCE]);
				Laya.timer.clear(this, this.textPos);
				this.playigUI.ChangeAll(false);
				this.playigUI.ChangeXiYin(true);
				Laya.timer.once(1000, this, this.cameraAni);
				GameEventMgr.Inst.sendEvent([EventName.SHOW_INTRODUCE_TEXT], {
					id: 4
				});
				GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_POINT], {
					eventIndex: 2,
					add: 1
				});
			}
		}
		cameraAni() {
			this.roleScript.camera_OUT_IN(true, null, null, null, false);
			this.roleScript.cameraRoleObj.transform.position = new Laya.Vector3(
				-3.019,
				11.163,
				4.553
			);
			this.roleScript.cameraRoleObj.transform.localRotationEulerY = 0;
			this.playigUI.ChangeImgBlack(
				true,
				400,
				Laya.Handler.create(this, function () {
					this.playigUI.ChangeImgBlack(false, 400);
					this.aniOver();
				})
			);
		}
		aniOver() {
			this.roleScript.camera_OUT_IN(false);
			this.roleScript.cameraRoleObj.transform.position = new Laya.Vector3(
				-4.491,
				this.roleScript.cameraRoleObj.transform.localPositionY,
				4.073
			);
			this.roleScript.cameraRoleObj.transform.localRotationEulerY =
				-127.017;
			this.roleScript.cameraBox.transform.localRotationEulerX = -30.542;
			this.exit();
			GameEventMgr.Inst.sendEvent([EventName.SHOW_INTRODUCE_TEXT], {
				id: 5
			});
		}
		exit() {
			super.exit();
			this.playigUI.ChangeBtnPropList(true);
			this.playigUI.ChangeBtnSquat(true);
			this.playigUI.ChangeBtnJoystick(true);
			this.playigUI.ChangeBtnSet(true);
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], { id: 5 });
		}
		defaultTrigger(data) {}
		blackLock(isShow, data) {}
		hand(isShow, data) {}
		sceneNarrow(isShow, data) {}
		UINarrow(isShow, data) {}
		forceExit(needWindow = true) {
			Laya.timer.clear(this, this.cameraAni);
			Laya.timer.clear(this, this.textPos);
			Laya.timer.clearAll(this);
			this.roleScript.camera_OUT_IN(false);
			this.roleScript.cameraRoleObj.transform.position = new Laya.Vector3(
				-4.491,
				this.roleScript.cameraRoleObj.transform.localPositionY,
				4.073
			);
			this.roleScript.cameraRoleObj.transform.localRotationEulerY =
				-127.017;
			this.roleScript.cameraBox.transform.localRotationEulerX = -30.542;
			super.forceExit(needWindow);
			this.playigUI.ChangeBtnPropList(true);
			this.playigUI.ChangeBtnSquat(true);
			this.playigUI.ChangeBtnJoystick(true);
			this.playigUI.ChangeBtnSet(true);
			this.playigUI.ChangeXiYin(false);
		}
	}

	class ProIntroduce5 extends BaseIntroduce {
		constructor() {
			super();
			this.arrtimes = [1, 1, 1, 1];
			this.arrtimes_use = [0, 0, 0, 0];
			this.coliderBed = false;
		}
		enter() {
			this.roleScript.moveLock = true;
			this.roleScript.viewLock_X = true;
			this.roleScript.viewLock_Y = true;
			this.playigUI.ChangeWordsBox(
				true,
				['Me: Someone is coming up, I have to hide first.'],
				Laya.Handler.create(this, this.onColiderOver)
			);
		}
		onColiderOver() {
			this.playigUI.ChangeNarrowSpine(true, {
				x: 215,
				y: 370,
				rotation: 90
			});
			this.roleScript.viewLock_Y = true;
			this.roleScript.moveLock = false;
			this.roleScript.viewLock_X = false;
		}
		textPos() {
			if (this.roleTransform.localPositionZ >= 4.89) {
				this.roleScript.moveLock = true;
				this.roleScript.RayCheckOnOff(true);
				this.arrtimes_use = [0, 0, 0, 0];
				this.playigUI.ChangeNarrowSpine(false);
				this.playigUI.showIntroduceBlack(true, 'btn_hide');
				this.playigUI.ChangeNarrowSpine(true, {
					rotation: 135,
					x: GameConfig.viewWidth - 150,
					y: 200
				});
				Laya.timer.clear(this, this.textPos);
			}
		}
		exit() {
			super.exit();
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], { id: 6 });
		}
		defaultTrigger(data) {
			if (data.sym == 'coliderBed' && !this.coliderBed) {
				this.coliderBed = true;
				this.roleScript.moveLock = true;
				this.roleScript.RayCheckOnOff(true);
				this.arrtimes_use = [0, 0, 0, 0];
				this.playigUI.ChangeNarrowSpine(false);
				this.playigUI.showIntroduceBlack(true, 'btn_hide');
				this.playigUI.ChangeNarrowSpine(true, {
					rotation: 135,
					x: GameConfig.viewWidth - 150,
					y: 200
				});
			}
		}
		blackLock(isShow, data) {
			if (
				data.sym == 'hideok' &&
				this.judgeCanUse(IntorduceUITYPE.BlackLock)
			) {
				this.playigUI.showIntroduceBlack(false, 'btn_hide');
				this.roleScript.cameraRoleObj.transform.localRotationEulerY = 0;
				this.exit();
			}
		}
		hand(isShow, data) {}
		sceneNarrow(isShow, data) {}
		UINarrow(isShow, data) {
			if (
				data.sym == 'hideok' &&
				this.judgeCanUse(IntorduceUITYPE.UINarrow)
			) {
				this.playigUI.ChangeNarrowSpine(false);
			}
		}
		forceExit(needWindow = true) {
			Laya.timer.clear(this, this.textPos);
			super.forceExit(needWindow);
		}
	}

	class Introduce6 extends BaseIntroduce {
		constructor() {
			super();
			this.arrtimes = [1, 1, 1, 1];
			this.arrtimes_use = [0, 0, 0, 0];
			this.stop = false;
			this.isLeaveBed = false;
		}
		enter() {
			SoundMgr.Inst.playSound(101);
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_POINT], {
				active: false
			});
			this.roleScript.RayCheckOnOff(false);
			this.roleScript.RayCheckOnOff(true, 1);
			this.playigUI.ChangeXiYin(false, true);
			GameEventMgr.Inst.sendEvent([EventName.SHOW_INTRODUCE_TEXT], {
				id: 6,
				needRe: false
			});
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_POINT], {
				active: false
			});
			this.playigUI.ChangeBtnPropList(false);
			this.playigUI.ChangeBtnSet(false);
			this.playigUI.ChangeAll(false);
			this.playigUI.forceHideVisible = false;
			this.roleScript.moveLock = true;
			this.roleScript.viewLock_X = true;
			this.playigUI.ChangeRecoderTips(false);
			Laya.timer.once(2000, this, function () {
				if (this.stop) return;
				this.kbnnScrpt.PlayFixedPatrolStatus();
			});
		}
		exit() {
			GameEventMgr.Inst.sendEvent([EventName.SHOW_INTRODUCE_TEXT], {
				id: 7
			});
			this.roleScript.moveLock = false;
			this.roleScript.viewLock_X = false;
			this.roleScript.viewLock_Y = false;
			super.exit();
			this.forceExit();
			SDK.ins_.send(SDK_ORDER.ALD_SEND_EVENT, {
				name: 'toutiao',
				aldSym: 'overIntroduce',
				infoObj: {}
			});
			Role.ins_.setDataByString('introduceId', -100);
			console.error('---------------新手引导完成--------------');
		}
		defaultTrigger(data) {
			if (data.sym == 'kbnnleave') {
				this.playigUI.ChangeBtnPropList(true);
				this.playigUI.ChangeBtnSet(true);
				this.playigUI.forceStopIntroduceVisible = null;
				GameEventMgr.Inst.sendEvent([EventName.SLEEP_ROOM_DOOR]);
				SoundMgr.Inst.stopSound(101);
				Laya.timer.once(1000, this, function () {
					this.playigUI.updateStopIntroduce();
					this.playigUI.forceHideVisible = null;
					this.playigUI.showIntroduceBlack(true, 'btn_hide');
					this.playigUI.ChangeNarrowSpine(true, {
						rotation: 135,
						x: GameConfig.viewWidth - 150,
						y: 200
					});
				});
			}
			if (data.sym == 'btn_NoSound') {
				this.playigUI.ChangeNarrowSpine(false);
				this.roleScript.RayCheckOnOff(true, 1);
				this.playigUI.ChangeRecoderTips(true);
				this.playigUI.showIntroduceBlack(false, 'btn_NoSound');
				this.playigUI.ChangeXiYin(false);
				Laya.timer.once(2000, this, function () {
					this.exit();
				});
			}
			if (data.sym == 'leaveBed') {
				this.isLeaveBed = true;
				this.playigUI.showIntroduceBlack(false, 'btn_hide');
				this.playigUI.ChangeXiYin(false);
				this.playigUI.ChangeTipsBox(false);
				this.playigUI.ChangeNarrowSpine(false);
				this.roleScript.moveLock = true;
				this.roleScript.viewLock_X = true;
				this.roleScript.viewLock_Y = true;
				let word = [
					'Me: This is... the guy in the comics! \\n No, I have to find a way to escape!'
				];
				Laya.timer.once(100, this, function () {
					this.playigUI.ChangeWordsBox(
						true,
						word,
						Laya.Handler.create(this, this.ttRoad)
					);
				});
			}
		}
		ttRoad() {
			if (Laya.Browser.window.tt) {
				this.ttStand();
			} else {
				this.exit();
			}
		}
		ttStand() {
			this.isLeaveBed = true;
			this.playigUI.ChangeTipsBox(
				true,
				'Quickly use the magic weapon to pass the level, the Mute prop! Let granny not hear any noise from you!',
				false
			);
			this.playigUI.showIntroduceBlack(true, 'btn_NoSound');
			this.playigUI.ChangeNarrowSpine(true, {
				rotation: 90,
				x: GameConfig.viewWidth - (1280 - (880 - 89 * 0.5)),
				y: 120
			});
		}
		blackLock(isShow, data) {}
		hand(isShow, data) {}
		sceneNarrow(isShow, data) {}
		UINarrow(isShow, data) {}
		forceExit(needWindow = true) {
			super.forceExit(needWindow);
			this.stop = true;
			GameEventMgr.Inst.sendEvent([EventName.SLEEP_ROOM_DOOR]);
			if (!this.isLeaveBed) {
				this.roleScript.viewLock_X = true;
				this.roleScript.moveLock = true;
			}
		}
	}

	class IntroduceMgr {
		constructor() {
			this.arr = [
				ProIntroduce1,
				ProIntroduce2,
				ProIntroduce3,
				ProIntroduce4,
				ProIntroduce5,
				Introduce6
			];
		}
		init() {
			this.isIn = true;
			let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
			ui.forceStopIntroduceVisible = false;
			ui.ChangeBtnYinShen(false);
			ui.ChangeBtnNoSound(false);
			ui.ChangeBtnEndIntroduce(false);
		}
		getCurId() {
			return this.id;
		}
		enter(id) {
			if (this.intorduceOver()) {
				UISystem.Inst.GetWindowView(
					UIGamePlayView
				).updateStopIntroduce();
				return;
			}
			if (id == 1) {
				this.init();
			}
			if (id != Role.ins_.getDataByString('introduceId')) return;
			let cls = this.arr[id - 1];
			this.id = id;
			this.currentIntroduce = new cls();
			this.currentIntroduce.setId(id);
			UISystem.Inst.GetWindowView(UIGamePlayView).updateStopIntroduce();
			this.currentIntroduce.enter();
		}
		getCurIntroduceId() {
			if (!this.currentIntroduce) return;
			return this.currentIntroduce ? this.currentIntroduce.getId() : 0;
		}
		trigger(data) {
			if (data.id != Role.ins_.getDataByString('introduceId')) return;
			this.currentIntroduce.triggerUI(data);
		}
		exit(needEndIntroduce) {
			if (this.currentIntroduce) {
				SDK.ins_.send(SDK_ORDER.ALD_SEND_EVENT, {
					name: 'toutiao',
					aldSym: 'stopIntroduce',
					infoObj: {
						stepId: Role.ins_.getDataByString('introduceId')
					}
				});
				Role.ins_.setDataByString('introduceId', -100);
				if (needEndIntroduce == null) needEndIntroduce = true;
				this.currentIntroduce.forceExit(needEndIntroduce);
				this.currentIntroduce = null;
				console.error('---------------新手引导完成--------------');
			}
			let uiplayingView = UISystem.Inst.GetWindowView(UIGamePlayView);
		}
		intorduceOver() {
			return Role.ins_.getDataByString('introduceId') > 0 ? false : true;
		}
	}

	var EventName;
	(function (EventName) {
		EventName[(EventName['DOOR_IN_MISS'] = 25)] = 'DOOR_IN_MISS';
		EventName[(EventName['THOURGE_WINDOW'] = 26)] = 'THOURGE_WINDOW';
		EventName[(EventName['DUAN_TOU_TAI'] = 27)] = 'DUAN_TOU_TAI';
		EventName[(EventName['SANG_NA'] = 28)] = 'SANG_NA';
		EventName[(EventName['SANG_NA_MU_BAN'] = 29)] = 'SANG_NA_MU_BAN';
		EventName[(EventName['QIANG_IS_OK'] = 30)] = 'QIANG_IS_OK';
		EventName[(EventName['MISS_QIANG'] = 31)] = 'MISS_QIANG';
		EventName[(EventName['OPEN_DIAN_DOOR'] = 32)] = 'OPEN_DIAN_DOOR';
		EventName[(EventName['CUT_XI_GUA'] = 33)] = 'CUT_XI_GUA';
		EventName[(EventName['CHA_XIAO_MEN'] = 34)] = 'CHA_XIAO_MEN';
		EventName[(EventName['LING_DANG_1'] = 35)] = 'LING_DANG_1';
		EventName[(EventName['LING_DANG_2'] = 36)] = 'LING_DANG_2';
		EventName[(EventName['ZHI_ZHU'] = 37)] = 'ZHI_ZHU';
		EventName[(EventName['WAN_JU_DOOR'] = 38)] = 'WAN_JU_DOOR';
		EventName[(EventName['GOU_WU_SUO'] = 39)] = 'GOU_WU_SUO';
		EventName[(EventName['WU_YA'] = 40)] = 'WU_YA';
		EventName[(EventName['NIAO_LONG_DOOR'] = 41)] = 'NIAO_LONG_DOOR';
		EventName[(EventName['KU_LOU_DOOR'] = 42)] = 'KU_LOU_DOOR';
		EventName[(EventName['ZHI_ZHU_MU_BAN'] = 43)] = 'ZHI_ZHU_MU_BAN';
		EventName[(EventName['ZHI_ZHU_JI_GUAN'] = 44)] = 'ZHI_ZHU_JI_GUAN';
		EventName[(EventName['YING_ER_BED'] = 45)] = 'YING_ER_BED';
		EventName[(EventName['GEAR'] = 46)] = 'GEAR';
		EventName[(EventName['SHOW_XI_GUA_PROP'] = 47)] = 'SHOW_XI_GUA_PROP';
		EventName[(EventName['SANG_NA_SMOKE'] = 48)] = 'SANG_NA_SMOKE';
		EventName[(EventName['CLEAR_TIMER'] = 49)] = 'CLEAR_TIMER';
		EventName[(EventName['SHOOT_EVENT'] = 50)] = 'SHOOT_EVENT';
		EventName[(EventName['MU_BAN_HAND'] = 51)] = 'MU_BAN_HAND';
		EventName[(EventName['MU_BAN_SHOW'] = 52)] = 'MU_BAN_SHOW';
		EventName[(EventName['ZU_DUAN_COLIDER'] = 53)] = 'ZU_DUAN_COLIDER';
		EventName[(EventName['CAR_GO'] = 54)] = 'CAR_GO';
		EventName[(EventName['WALL_DESTORY'] = 55)] = 'WALL_DESTORY';
		EventName[(EventName['DA_MEN'] = 56)] = 'DA_MEN';
		EventName[(EventName['INTRODUCE_POINT'] = 57)] = 'INTRODUCE_POINT';
		EventName[(EventName['FORGE_CAR'] = 58)] = 'FORGE_CAR';
		EventName[(EventName['WEI_BO_LU'] = 59)] = 'WEI_BO_LU';
		EventName[(EventName['HUA_KUANG_TE_XIAO'] = 60)] = 'HUA_KUANG_TE_XIAO';
		EventName[(EventName['DESK_AUTO_BEFORCE'] = 61)] = 'DESK_AUTO_BEFORCE';
		EventName[(EventName['SLEEP_ROOM_DOOR'] = 62)] = 'SLEEP_ROOM_DOOR';
		EventName[(EventName['OTHER_INTRODUCE_POINT'] = 63)] =
			'OTHER_INTRODUCE_POINT';
		EventName[(EventName['ON_OFF_DUAN_TOU_TAI'] = 64)] =
			'ON_OFF_DUAN_TOU_TAI';
		EventName[(EventName['FENG_SHAN_TIMER'] = 65)] = 'FENG_SHAN_TIMER';
		EventName[(EventName['SHOW_WINDOW_INFO'] = 66)] = 'SHOW_WINDOW_INFO';
		EventName[(EventName['SHOW_UI_INFO_WINDOW'] = 67)] =
			'SHOW_UI_INFO_WINDOW';
		EventName[(EventName['SHOW_INTRODUCE_TEXT'] = 68)] =
			'SHOW_INTRODUCE_TEXT';
		EventName[(EventName['FAIL_GAME_ANI'] = 69)] = 'FAIL_GAME_ANI';
		EventName[(EventName['WIN_GAME_ANI'] = 70)] = 'WIN_GAME_ANI';
		EventName[(EventName['FAIL_ANI_OVER'] = 71)] = 'FAIL_ANI_OVER';
		EventName[(EventName['REFRESH_UI_PROPLIST'] = 72)] =
			'REFRESH_UI_PROPLIST';
		EventName[(EventName['INTRODUCE_MGS'] = 73)] = 'INTRODUCE_MGS';
	})(EventName || (EventName = {}));
	class GameEventMgr {
		constructor() {
			this.introduceMgr = new IntroduceMgr();
			this.dic_Event_Prop = new Dictionary$1();
		}
		static get Inst() {
			if (this.inst == null) {
				this.inst = new GameEventMgr();
			}
			return this.inst;
		}
		sendEvent(eventName, data) {
			for (let i = 0; i < eventName.length; i++) {
				let propId = this.dic_Event_Prop.get(eventName[i]);
				switch (eventName[i]) {
					case EventName.DOOR_IN_MISS:
						PropMgr.Inst.getProp(propId).BeUsed();
						break;
					case EventName.THOURGE_WINDOW:
						MainRoleMgr.Inst.ChangeMainRoleState(
							statName.thoughWindow,
							data
						);
						break;
					case EventName.DUAN_TOU_TAI:
						PropMgr.Inst.getProp(propId).BeUsed();
						break;
					case EventName.SANG_NA_MU_BAN:
						PropMgr.Inst.getProp(propId).BeUsed();
						break;
					case EventName.SANG_NA:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed();
						break;
					case EventName.QIANG_IS_OK:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed();
						break;
					case EventName.MISS_QIANG:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed();
						break;
					case EventName.OPEN_DIAN_DOOR:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed();
						break;
					case EventName.CUT_XI_GUA:
						if (propId) {
							PropMgr.Inst.getProp(propId).BeUsed();
							this.sendEvent([EventName.SHOW_XI_GUA_PROP]);
						}
						break;
					case EventName.CHA_XIAO_MEN:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed(data);
						break;
					case EventName.LING_DANG_1:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed();
						break;
					case EventName.LING_DANG_2:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed();
						break;
					case EventName.ZHI_ZHU:
						if (!PropMgr.Inst.getProp(propId)) return;
						if (data.stop) {
							PropMgr.Inst.getProp(propId).stop(true);
							return;
						}
						if (propId) PropMgr.Inst.getProp(propId).BeUsed(data);
						break;
					case EventName.WAN_JU_DOOR:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed();
						break;
					case EventName.GOU_WU_SUO:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed();
						break;
					case EventName.WU_YA:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed(data);
						break;
					case EventName.NIAO_LONG_DOOR:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed(data);
						break;
					case EventName.KU_LOU_DOOR:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed();
						break;
					case EventName.ZHI_ZHU_MU_BAN:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed();
						break;
					case EventName.ZHI_ZHU_JI_GUAN:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed();
						break;
					case EventName.GEAR:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed(data);
						break;
					case EventName.YING_ER_BED:
						if (Role.ins_.isActiveProp('gostEventKeys')) return;
						console.log(
							'---------------【触发鬼魂事件】------------------'
						);
						Role.ins_.setProp(20, 'gostEventKeys');
						if (propId) PropMgr.Inst.getProp(propId).BeUsed();
						break;
					case EventName.SHOW_XI_GUA_PROP:
						if (propId) {
							if (!Role.ins_.isActiveProp('cutXiGuaKeys')) return;
							if (!PropMgr.Inst.getProp(propId)) return;
							PropMgr.Inst.getProp(propId).isTestActive = true;
							PropMgr.Inst.getProp(propId).setActive(true);
						}
						break;
					case EventName.SANG_NA_SMOKE:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed();
						break;
					case EventName.CLEAR_TIMER:
						propId = this.dic_Event_Prop.get(
							EventName.FENG_SHAN_TIMER
						);
						if (PropMgr.Inst.getProp(propId))
							PropMgr.Inst.getProp(propId).timerClear();
						break;
					case EventName.SHOOT_EVENT:
						switch (data.propId) {
							case 4:
								PropMgr.Inst.getProp(4).beRayHit();
								break;
							case 5:
								PropMgr.Inst.getProp(5).beRayHit();
								break;
							case 6:
								PropMgr.Inst.getProp(6).beRayHit();
								break;
							case 26:
								PropMgr.Inst.getProp(26).beRayHit();
								break;
							default:
								console.error('没有该武器');
								return;
						}
						break;
					case EventName.MU_BAN_HAND:
						PropMgr.Inst.getProp(50).BeUsed(data);
						break;
					case EventName.MU_BAN_SHOW:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed(data);
						break;
					case EventName.SHOW_WINDOW_INFO:
						UISystem.Inst.GetWindowView(
							UIInfoWindowView
						).showInfo();
						break;
					case EventName.SHOW_UI_INFO_WINDOW:
						UISystem.Inst.CreateWindowView(UIInfoWindowView, {
							id: data.id
						});
						break;
					case EventName.ZU_DUAN_COLIDER:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed(data);
						break;
					case EventName.CAR_GO:
						if (propId) {
							PropMgr.Inst.getProp(propId).BeUsed(data);
						}
						break;
					case EventName.WALL_DESTORY:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed(data);
						break;
					case EventName.FAIL_GAME_ANI:
						SoundMgr.Inst.stopMusic();
						SoundMgr.Inst.playSound(75);
						this.failGameAni(data);
						break;
					case EventName.WIN_GAME_ANI:
						SoundMgr.Inst.stopMusic();
						this.winGameAni(data.id);
						break;
					case EventName.FAIL_ANI_OVER:
						GameMgr.Inst.GameFail();
						break;
					case EventName.DA_MEN:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed(data);
						break;
					case EventName.INTRODUCE_POINT:
						if (data.add && data.eventIndex) {
							if (data.force)
								Role.ins_.setDataByString(
									'introducePointStatus',
									data.force
								);
							if (
								Role.ins_.getDataByString(
									'introducePointStatus'
								) == data.eventIndex
							) {
								Role.ins_.setDataByString(
									'introducePointStatus',
									data.add + data.eventIndex
								);
							}
						}
						if (PropMgr.Inst.getProp(propId))
							PropMgr.Inst.getProp(propId).update(data);
						break;
					case EventName.FORGE_CAR:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed(data);
						break;
					case EventName.WEI_BO_LU:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed(data);
						break;
					case EventName.HUA_KUANG_TE_XIAO:
						if (propId) PropMgr.Inst.getProp(propId).BeUsed(data);
						break;
					case EventName.SHOW_INTRODUCE_TEXT:
						let id = data.id;
						let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
						let config = Guidetxt.getItemByKey(id);
						if (
							id ==
							Role.ins_.getDataByString('introduceTextStatus')
						) {
							if (data.needRe != null)
								ui.ChangeTipsBox(true, config.txt, data.needRe);
							else ui.ChangeTipsBox(true, config.txt);
							Role.ins_.setDataByString(
								'introduceTextStatus',
								id + 1
							);
						}
						break;
					case EventName.REFRESH_UI_PROPLIST:
						let uiPropList = propId;
						if (!uiPropList) return;
						uiPropList.showList();
						break;
					case EventName.INTRODUCE_MGS:
						if (data.trigger) {
							this.introduceMgr.trigger(data);
							return;
						}
						this.introduceMgr.enter(data.id);
						break;
					case EventName.DESK_AUTO_BEFORCE:
						if (propId)
							PropMgr.Inst.getProp(propId).setForce(
								new Laya.Vector3(0, 0, -50)
							);
						break;
					case EventName.SLEEP_ROOM_DOOR:
						if (propId) PropMgr.Inst.getProp(propId).doorClose();
						break;
					case EventName.OTHER_INTRODUCE_POINT:
						if (propId) {
							let prop = PropMgr.Inst.getProp(propId);
							if (prop) prop.BeUsed();
						}
						break;
				}
			}
		}
		failGameAni(data) {
			let num = Math.floor(4 * Math.random());
			if (data) num = data.id;
			switch (num) {
				case 0:
					if (!this.dieByCar) this.dieByCar = new DieByCarEvent();
					this.dieByCar.enter();
					break;
				case 1:
					if (!this.dieByPush) this.dieByPush = new DieByPushEvent();
					this.dieByPush.enter();
					break;
				case 2:
					if (Laya.Browser.window.tt) {
						this.failGameAni({ id: 0 });
						return;
					}
					if (!this.dieByCut) this.dieByCut = new DieByCutEvent();
					this.dieByCut.enter();
					break;
				case 3:
					if (!this.dieByDrop) this.dieByDrop = new DieByDropEvent();
					this.dieByDrop.enter();
					break;
			}
		}
		winGameAni(id) {
			switch (id) {
				case 1:
					if (!this.winByEnd1) this.winByEnd1 = new WinByEnd1Event();
					else this.winByEnd1.onWake();
					Role.ins_.setPropInfo(43);
					break;
				case 2:
					if (!this.winByEnd2) this.winByEnd2 = new WinByEnd2Event();
					else this.winByEnd2.onWake();
					Role.ins_.setPropInfo(41);
					break;
				case 3:
					if (!this.winByEnd3) this.winByEnd3 = new WinByEnd3Event();
					else this.winByEnd3.onWake();
					Role.ins_.setPropInfo(42);
					break;
				case 4:
					if (!this.winByCar) this.winByCar = new WinByCarEvent();
					this.winByCar.enter();
					Role.ins_.setPropInfo(44);
					break;
			}
		}
		getPropByEventName(eventName) {
			let sprite = PropMgr.Inst.getProp(
				this.dic_Event_Prop.get(eventName)
			);
			return sprite;
		}
		removeEvent(eventName) {
			this.dic_Event_Prop.remove(eventName);
			GameDispatcher;
		}
		registetEvent(eventName, propId) {
			this.dic_Event_Prop.set(eventName, propId);
		}
		registetEvent_ANY(eventName, any) {
			this.dic_Event_Prop.set(eventName, any);
		}
	}

	class WalkState extends BaseState {
		constructor(owner) {
			super();
			this.addSub = 1;
			this.handPointAddSub = 1;
			this.isPlaying = false;
			this.owner = owner;
		}
		enter(data) {
			this.degree = data.degree;
			if (this.introduceLock()) {
				if (this.degree > -135 && this.degree < -45) this.degree = -90;
				else this.degree = null;
			}
		}
		exit() {}
		forceStop() {}
		advanceTime(time) {
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
				id: 2,
				trigger: true,
				type: IntorduceUITYPE.BlackLock,
				isShow: false
			});
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
				id: 2,
				trigger: true,
				type: IntorduceUITYPE.UINarrow,
				isShow: false
			});
			if (this.owner.moveLock) return;
			if (!this.degree) return;
			var direction = new Laya.Vector3(
				Math.cos((this.degree * Math.PI) / 180),
				0,
				Math.sin((this.degree * Math.PI) / 180)
			);
			Laya.Vector3.normalize(direction, direction);
			var direction = new Laya.Vector3(
				direction.x * this.owner.Speed,
				0,
				direction.z * this.owner.Speed
			);
			var rotate = this.owner.cameraRoleObj.transform.rotationEuler.y;
			this.owner.curDirection = new Laya.Vector3(
				Math.sin((rotate * Math.PI) / 180) * direction.z +
					Math.cos((rotate * Math.PI) / 180) * direction.x,
				0,
				Math.cos((rotate * Math.PI) / 180) * direction.z -
					Math.sin((rotate * Math.PI) / 180) * direction.x
			);
			this.owner.character.move(this.owner.curDirection);
		}
		introduceLock() {
			let id = GameEventMgr.Inst.introduceMgr.getCurIntroduceId();
			if (id == 2 || id == 5) {
				return true;
			}
			return false;
		}
	}

	class StopState extends BaseState {
		constructor(owner) {
			super();
			this.owner = owner;
		}
		onEnable() {}
		onDisable() {}
		enter() {
			this.owner.character.move(new Laya.Vector3(0, 0, 0));
		}
	}

	class RoleColiderScript extends Laya.Script3D {
		constructor() {
			super();
			this.dic_Prop = PropMgr.Inst.dic_Prop;
		}
		onTriggerEnter(other) {
			switch (other.owner.name) {
				case 'ground_test_chaxiao':
					other.owner.removeSelf();
					GameEventMgr.Inst.sendEvent([EventName.CHA_XIAO_MEN], {
						isClose: true
					});
					console.log('插销门关闭');
					break;
				case 'xian_01':
					GameEventMgr.Inst.sendEvent([EventName.LING_DANG_1]);
					break;
				case 'xian_02':
					GameEventMgr.Inst.sendEvent([EventName.LING_DANG_2]);
					break;
				case 'zhizhu_test':
					GameEventMgr.Inst.sendEvent([EventName.ZHI_ZHU], {
						stat: 1
					});
					break;
				case 'Kbnn_zhizhu':
					console.log(' ------------死亡------------------ ');
					MainRoleMgr.Inst.ChangeMainRoleState(statName.Die);
					UISystem.Inst.GetWindowView(
						UIGamePlayView
					).ChangeInjuredSpine(true, true);
					break;
				case 'test_suiPian':
					GameEventMgr.Inst.sendEvent([EventName.GEAR], {
						muban: false
					});
					break;
				case 'WuYa_test':
					GameEventMgr.Inst.sendEvent([EventName.WU_YA], { stat: 2 });
					break;
				case 'diban':
				case 'diban (1)':
				case 'diban (2)':
				case 'diban (3)':
				case 'diban (4)':
				case 'diban (5)':
				case 'diban (6)':
				case 'diban (7)':
				case 'diban (8)':
				case 'diban (9)':
					SoundMgr.Inst.playSound(76);
					console.log(' ------------特殊地板------------------ ');
					MainRoleMgr.Inst.setRoleVoice();
					break;
			}
		}
		onTriggerStay(other) {
			switch (other.owner.name) {
				case 'standColider1':
					UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnSquat(
						false
					);
					break;
				case 'standColider2':
					UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnSquat(
						false
					);
					break;
				case 'standColider3':
					UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnSquat(
						false
					);
					break;
				case 'standColider4':
					UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnSquat(
						false
					);
					break;
			}
		}
		onTriggerExit(other) {
			switch (other.owner.name) {
				case 'zhizhu_test':
					Role.ins_.roleData.zhiZhuLock = false;
					GameEventMgr.Inst.sendEvent([EventName.ZHI_ZHU], {
						stat: 2
					});
					break;
				case 'WuYa_test':
					console.log('-------------乌鸦安静-------------------');
					GameEventMgr.Inst.sendEvent([EventName.WU_YA], { stat: 1 });
					break;
				case 'standColider1':
					UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnSquat(
						true
					);
					break;
				case 'standColider2':
					UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnSquat(
						true
					);
					break;
				case 'standColider3':
					UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnSquat(
						true
					);
					break;
				case 'standColider4':
					UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnSquat(
						true
					);
					break;
				case 'wall':
					GameEventMgr.Inst.sendEvent([EventName.ZU_DUAN_COLIDER], {
						isTrgger: false
					});
					break;
			}
		}
		onCollisionEnter(collision) {
			let arrVar = this.dic_Prop.getValuesArr();
			for (let i = 0; i < arrVar.length; i++) {
				if (!arrVar[i]) continue;
				for (let n = 0; n < arrVar[i].propArr.length; n++) {
					if (collision.other.owner == arrVar[i].propArr[n]) {
						let curVec3 = new Laya.Vector3();
						MainRoleMgr.Inst.GetMainRole().transform.getForward(
							curVec3
						);
						if (!curVec3) return;
						arrVar[i].setForce(
							new Laya.Vector3(
								curVec3.x * 50,
								curVec3.y * 50,
								curVec3.z * 50
							),
							collision.other.owner
						);
						break;
					}
				}
			}
			switch (collision.other.owner.name) {
				case 'wall':
					GameEventMgr.Inst.sendEvent([EventName.ZU_DUAN_COLIDER], {
						isTrgger: true
					});
					break;
				case 'diban2':
					GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
						trigger: true,
						id: 11,
						sym: 'underground1'
					});
					break;
			}
		}
		onCollisionStay(collision) {
			switch (collision.other.owner.name) {
				case 'tongdao1':
					UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnSquat(
						false
					);
					break;
				case 'chuang_01':
					this.getBaseProp(collision.other.owner);
					break;
				case 'muxiang_01':
					this.getBaseProp(collision.other.owner.parent);
					break;
			}
			PropMgr.Inst.areaTest(collision.other.owner.name);
		}
		onCollisionExit(collision) {
			switch (collision.other.owner.name) {
				case 'tongdao1':
					UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnSquat(
						true
					);
					break;
				case 'chuang_01':
					PropMgr.Inst.coliderSprite = null;
					break;
				case 'muxiang_01':
					PropMgr.Inst.coliderSprite = null;
					break;
			}
		}
		getBaseProp(Sprite3D) {
			let arrVar = this.dic_Prop.getValuesArr();
			for (let i = 0; i < arrVar.length; i++) {
				if (!arrVar[i]) continue;
				for (let n = 0; n < arrVar[i].propArr.length; n++) {
					if (Sprite3D == arrVar[i].propArr[n]) {
						arrVar[i].setForce();
						PropMgr.Inst.coliderSprite = arrVar[i];
					}
				}
			}
		}
	}

	class StartTurnState extends BaseState {
		constructor(owner) {
			super();
			this.owner = owner;
		}
		onEnable() {}
		onDisable() {}
		enter() {
			SoundMgr.Inst.playSound(25);
			Laya.timer.once(2000, this, this.getUp);
			this.owner.isDie = false;
		}
		getUp() {
			SDK.ins_.send(SDK_ORDER.BARRAGE_WRODS_Change, {
				name: 'toutiao',
				isShow: false
			});
			Role.ins_.RoleChangeStatLock = true;
			this.owner.camera_OUT_IN(true, null, null, null, false);
			this.owner.playAni(
				'Camera_01',
				1,
				null,
				Laya.Handler.create(this, this.onAniOver)
			);
			if (Role.ins_.getDayNum() == 1) {
				SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
					name: 'toutiao',
					symReco: 'start'
				});
			}
			Laya.timer.once(1000, this, function () {
				GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
					id: 1
				});
			});
		}
		onAniOver() {
			let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
			Role.ins_.RoleChangeStatLock = false;
			ui.ChangeBtnJoystick(true);
			ui.ChangeBtnSquat(true);
			ui.ChangeBtnSet(true);
			ui.ChangeBtnPropList(true);
			ui.changeNoSound(true);
			ui.ChangeBtnYinShen(true);
			ui.ChangeBtnEndIntroduce(true);
			this.owner.camera_OUT_IN(false);
			this.owner.RayCheckOnOff(true);
			this.owner.viewLock_X = false;
			this.owner.viewLock_Y = false;
			this.owner.moveLock = false;
			console.error('起床onhandler');
			if (Role.ins_.getDataByString('changeIndex')) {
				ui.onBtnEndIntroduce();
			}
			GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
				id: 1,
				trigger: true,
				sym: 'getUp'
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_ADD_DAY, { name: 'wx' });
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_ADD_DAY, { name: 'oppo' });
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_ADD_DAY, { name: 'vivo' });
		}
	}

	class HandPropState extends BaseState {
		constructor(onwer) {
			super();
			this.owner = onwer;
		}
		enter(data) {
            this.setPropInfo(data);
			if (MainRoleMgr.Inst.role.getHandPropId()) {
				let isUse = PropMgr.Inst.judgeProp(data);
				if (isUse) return;
				MainRoleMgr.Inst.Drop();
			}
			let rigidBody = data.sprite3D.getComponent(Laya.Rigidbody3D);
			this.transformSet(data, rigidBody);
			this.owner.curItem = data.sprite3D;
			rigidBody.enabled = false;
			MainRoleMgr.Inst.role.setHandPropId(data.propId);
			this.handDetailSDK();
			let prop = PropMgr.Inst.getProp(data.propId);
			if (prop.coliderScript) {
				prop.coliderScript.enabled = true;
			}
			this.dealProp(data);
			this.sdk();
			if (this.owner.curItem) {
				UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnDrop(true);
			}
		}
		setPropInfo(data) {
			Role.ins_.setPropInfo(-1, data.propId);
		}
		transformSet(data, rigidBody) {
			data.sprite3D.removeSelf();
			this.owner.handPoint.addChild(data.sprite3D);
			data.sprite3D.transform.localPosition = new Laya.Vector3(0, 0, 0);
			if (data.config) {
				let arrPosition = data.config.handrotate
					.split('|')[0]
					.split(',');
				let arrSize = data.config.sacle.split(',');
				data.sprite3D.transform.localPosition = new Laya.Vector3(
					-parseFloat(arrPosition[0]),
					parseFloat(arrPosition[1]),
					parseFloat(arrPosition[2])
				);
				if (data.config.handrotate.split('|').length == 2) {
					let arrRotation = data.config.handrotate
						.split('|')[1]
						.split(',');
					data.sprite3D.transform.localRotationEuler =
						new Laya.Vector3(
							parseFloat(arrRotation[0]),
							-parseFloat(arrRotation[1]),
							-parseFloat(arrRotation[2])
						);
				} else
					data.sprite3D.transform.localRotationEuler =
						new Laya.Vector3(0, 0, 0);
				data.sprite3D.transform.setWorldLossyScale(
					new Laya.Vector3(
						parseFloat(arrSize[0]),
						parseFloat(arrSize[1]),
						parseFloat(arrSize[2])
					)
				);
				rigidBody.isTrigger = true;
				rigidBody.isKinematic = true;
			}
		}
		forceStop() {}
		exit() {}
		advanceTime(time) {}
		dealProp(data) {
			switch (data.propId) {
				case 28:
					GameEventMgr.Inst.sendEvent([EventName.INTRODUCE_MGS], {
						id: 13
					});
					break;
			}
		}
		sdk() {
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'oppo',
				isShow: true,
				adPoint: 5
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'meizu',
				isShow: true,
				adPoint: 5
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'qq',
				isShow: true,
				adPoint: 5
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'wx',
				isShow: true,
				adPoint: 5
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'vivo',
				isShow: true,
				adPoint: 5
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'toutiao',
				isShow: true,
				adPoint: 5
			});
		}
		handDetailSDK() {
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_PROP_DETAIL, {
				name: 'qq',
				parent: UISystem.Inst.GetWindowView(UIGamePlayView)
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_PROP_DETAIL, {
				name: 'toutiao',
				parent: UISystem.Inst.GetWindowView(UIGamePlayView)
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_PROP_DETAIL, {
				name: 'oppo',
				parent: UISystem.Inst.GetWindowView(UIGamePlayView)
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_PROP_DETAIL, {
				name: 'vivo',
				parent: UISystem.Inst.GetWindowView(UIGamePlayView)
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_PROP_DETAIL, {
				name: 'wx',
				parent: UISystem.Inst.GetWindowView(UIGamePlayView)
			});
		}
	}

	class ThoughWindowStat extends BaseState {
		constructor(owner) {
			super();
			this.owner = owner;
		}
		enter(data) {
			this.canBeForceStop = false;
			UISystem.Inst.GetWindowView(UIGamePlayView).visible = false;
			this.owner.camera_OUT_IN(true, null, null, null, false);
			this.owner.animator.speed = 1.0;
			let delay = 0;
			if (data.isOut) {
				delay = 2000;
				this.owner.animator.play('Camera_Animation_chuchuang', 0);
				this.owner.cameraRoleObj.transform.position = new Laya.Vector3(
					-8.1,
					7.62,
					2.67
				);
				this.owner.cameraRoleObj.transform.lookAt(
					new Laya.Vector3(-100, 7.62, 2.67),
					new Laya.Vector3(0, 1, 0),
					false
				);
				this.owner.cameraRoleObj.transform.localRotationEulerY = 90;
			} else {
				delay = 1600;
				this.owner.animator.play('Camera_Animation_ruchuang', 0);
				this.owner.cameraRoleObj.transform.position = new Laya.Vector3(
					-6.8,
					7.67,
					2.67
				);
				this.owner.cameraRoleObj.transform.lookAt(
					new Laya.Vector3(100, 7.62, 2.67),
					new Laya.Vector3(0, 1, 0),
					false
				);
			}
			Laya.timer.once(
				delay,
				this,
				function (isout) {
					if (MainRoleMgr.Inst.getCurState() != statName.thoughWindow)
						return;
					this.owner.cameraRoleObj.transform.position =
						this.owner.cameraBox.transform.position;
					this.owner.cameraRoleObj.transform.position.y =
						this.owner.cameraBox.transform.position.y - 0.55;
					this.owner.animator.speed = 0.0;
					this.owner.camera_OUT_IN(false);
					Laya.Tween.to(
						this.owner.cameraBox.transform,
						{
							localPositionY:
								this.owner.cameraBox.transform.localPositionY -
								0.3
						},
						150,
						Laya.Ease.cubicOut,
						Laya.Handler.create(this, function () {
							Laya.Tween.to(
								this.owner.cameraBox.transform,
								{
									localPositionY:
										this.owner.cameraBox.transform
											.localPositionY + 0.3
								},
								350,
								Laya.Ease.cubicIn,
								Laya.Handler.create(this, function () {
									UISystem.Inst.GetWindowView(
										UIGamePlayView
									).visible = true;
									this.canBeForceStop = true;
								})
							);
						})
					);
				},
				[data.isOut]
			);
		}
		exit() {}
		forceStop() {}
		advanceTime(time) {}
	}

	class HideInBed extends BaseState {
		constructor(owner) {
			super();
			this.owner = owner;
		}
		onEnable() {}
		onDisable() {}
		exit() {}
		enter(data) {
			let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
			if (data.isHide) {
				this.canBeForceStop = false;
				this.owner.isLeaveBody = true;
				this.owner.camera_OUT_IN(
					true,
					data.isLockX,
					data.isLockY,
					undefined,
					true
				);
				this.owner.cameraBox.transform.position = data.locationPosition;
				this.owner.cameraBox.transform.localRotationEuler =
					data.lookSize;
				this.owner.cameraRoleObj.transform.localRotationEulerY = 0;
				SoundMgr.Inst.playSound(33);
				ui.ChangeBtnSquat(false);
				ui.ChangeBtnJoystick(false);
				ui.ChangeBtnDrop(false);
			} else {
				this.canBeForceStop = true;
				this.owner.isLeaveBody = false;
				this.owner.camera_OUT_IN(false, data.isLockX, data.isLockY);
				MainRoleMgr.Inst.ChangeMainRoleState(statName.stop);
				ui.ChangeBtnSquat(true);
				ui.ChangeBtnJoystick(true);
				if (Role.ins_.getHandPropId() != null) ui.ChangeBtnDrop(true);
			}
		}
	}

	class DropPropState extends BaseState {
		constructor(onwer) {
			super();
			this.owner = onwer;
		}
		enter(data) {
			let oldPosition = this.owner.handPoint.transform.position;
			let prop = PropMgr.Inst.getProp(
				MainRoleMgr.Inst.role.getHandPropId()
			);
			let id = MainRoleMgr.Inst.role.getHandPropId();
			this.owner.handPoint.removeChild(this.owner.curItem);
			SceneMgr.Inst._curScene.addChild(this.owner.curItem);
			let Rigidbody3D = this.owner.curItem.getComponent(Laya.Rigidbody3D);
			if (Rigidbody3D) {
				Rigidbody3D.enabled = true;
				Rigidbody3D.isTrigger = false;
				Rigidbody3D.isKinematic = false;
			}
			let forward = new Laya.Vector3();
			this.owner.cameraRoleObj.transform.getForward(forward);
			if (id == 25 || id == 20) {
				this.dropByFrowrd(oldPosition, forward);
			} else {
				this.drop(oldPosition, forward);
			}
			prop && prop.propSprite.transform.setWorldLossyScale(
				new Laya.Vector3(1, 1, 1)
			);
			this.owner.curItem = null;
			MainRoleMgr.Inst.role.setHandPropId(null);
			this.deal(id);
			this.sdk();
			let playView = UISystem.Inst.GetWindowView(UIGamePlayView);
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_BY_PLTFORM, {
				name: 'toutiao',
				function: 'changeDaoJuXianSuo',
				type: 'drop',
				propId: id
			});
			if (!this.owner.curItem) {
				playView.ChangeBtnDrop(false);
				playView.ChangeBtnShoot(false);
			}
		}
		forceStop() {}
		exit() {}
		advanceTime(time) {}
		drop(oldPosition, forward) {
            if(!this.owner.curItem.transform) return;
			this.owner.curItem.transform.position = oldPosition;
			if (this.owner.standAndDun) {
				this.owner.curItem.transform.translate(
					new Laya.Vector3(
						forward.x * 0.2,
						forward.y * 0.2,
						forward.z * 0.2
					),
					false
				);
			} else {
				this.owner.curItem.transform.translate(
					new Laya.Vector3(0, 1, 0)
				);
				this.owner.curItem.transform.translate(
					new Laya.Vector3(
						forward.x * 0.2,
						forward.y * 0.2,
						forward.z * 0.2
					),
					false
				);
			}
		}
		dropByFrowrd(oldPosition, forward) {
			this.owner.curItem.transform.position = oldPosition;
			this.owner.curItem.getComponent(Laya.Rigidbody3D).linearVelocity =
				new Laya.Vector3(
					forward.x * 2.5,
					forward.y * 2.5,
					forward.z * 2.5
				);
		}
		deal(id) {}
		sdk() {
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'oppo',
				isShow: true,
				adPoint: 5
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'meizu',
				isShow: true,
				adPoint: 5
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'vivo',
				isShow: true,
				adPoint: 5
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'qq',
				isShow: true,
				adPoint: 5
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'wx',
				isShow: true,
				adPoint: 5
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'toutiao',
				isShow: true,
				adPoint: 5
			});
		}
	}

	class DieState extends BaseState {
		constructor(owner) {
			super();
			this.canDie = true;
			this.add = 1;
			this.old = 0;
			this.DieType = 0;
			this.owner = owner;
		}
		onEnable() {}
		onDisable() {}
		enter(data) {
			this.owner.isDie = true;
			// SDK.ins_.send(SDK_ORDER.BARRAGE_WRODS_Change, {
			// 	name: 'toutiao',
			// 	isShow: true
			// });
			if (data) this.DieType = data.type;
			MainRoleMgr.Inst.ChangeMainRoleState(statName.ClearState, {
				handler: Laya.Handler.create(this, this.playDieAni)
			});
			this.aldPoint();
		}
		playDieAni() {
			switch (this.DieType) {
				case 0:
					this.dieType0();
					UISystem.Inst.GetWindowView(
						UIGamePlayView
					).ChangeInjuredSpine(true, true);
					break;
				case 1:
					this.dieType1();
					break;
			}
		}
		dieType0() {
			Laya.timer.once(1200, this, function () {
				SoundMgr.Inst.playSound(61);
			});
			SoundMgr.Inst.playSound(72);
			this.canBeForceStop = false;
			this.owner.animator.speed = 1.0;
			this.owner.animator.play('Camera_siwang', 0);
			this.NextStep();
		}
		dieType1() {
			this.canBeForceStop = false;
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeImgBlack(
				true,
				1000,
				Laya.Handler.create(this, function () {
					Laya.timer.once(500, this, function () {
						this.canBeForceStop = true;
						GameMgr.Inst.nextDay();
					});
				})
			);
		}
		NextStep() {
			Laya.timer.once(2800, this, function () {
				UISystem.Inst.GetWindowView(UIGamePlayView).ChangeImgBlack(
					true,
					500,
					Laya.Handler.create(this, function () {
						this.canBeForceStop = true;
						GameMgr.Inst.nextDay();
					})
				);
			});
		}
		aldPoint() {
			SDK.ins_.send(SDK_ORDER.ALD_SEND_EVENT, {
				name: 'wx',
				eventName: '玩家被打晕',
				arg: { 当前天数: Role.ins_.getDayNum() }
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'oppo',
				isShow: true,
				adPoint: 3
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'meizu',
				isShow: true,
				adPoint: 3
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'qq',
				isShow: true,
				adPoint: 3
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'wx',
				isShow: true,
				adPoint: 3
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'toutiao',
				isShow: true,
				adPoint: 3
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'vivo',
				isShow: true,
				adPoint: 3
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_ADD_DAY, {
				name: 'wx',
				isShow: false
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_ENINTRODUCE, {
				name: 'wx',
				isShow: false
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_YIN_SHEN, {
				name: 'wx',
				isShow: false
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_ADD_DAY, {
				name: 'oppo',
				isShow: false
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_YIN_SHEN, {
				name: 'oppo',
				isShow: false
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_ENINTRODUCE, {
				name: 'oppo',
				isShow: false
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_ADD_DAY, {
				name: 'vivo',
				isShow: false
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_YIN_SHEN, {
				name: 'vivo',
				isShow: false
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_ENINTRODUCE, {
				name: 'vivo',
				isShow: false
			});
			SDK.ins_.send(SDK_ORDER.CHANGE_GAME_GET_YIN_SHEN, {
				name: 'qq',
				isShow: false
			});
		}
	}

	class NextDayState extends BaseState {
		constructor(owner) {
			super();
			this.owner = owner;
		}
		onEnable() {}
		onDisable() {}
		enter() {
			UISystem.Inst.GetWindowView(UIGamePlayView).InitUI();
			UISystem.Inst.CreateWindowView(UIDayView);
			this.initGame();
		}
		initGame() {
			UISystem.Inst.GetWindowView(UIDayView).countTimer();
			this.owner.initMainRole();
			SceneMgr.Inst.AddNbnn();
			MainRoleMgr.Inst.ChangeMainRoleState(statName.getUp);
			Laya.MouseManager.enabled = true;
			PropMgr.Inst.nextDayPropInit();
		}
	}

	class ClearRoleState extends BaseState {
		constructor(owner) {
			super();
			this.canDie = true;
			this.add = 1;
			this.old = 0;
			this.owner = owner;
		}
		onEnable() {}
		onDisable() {}
		enter(data) {
			if (data.wudi != undefined) {
				this.canDie = !data.wudi;
				return;
			}
			if (!this.canDie) return;
			if (Role.ins_.getHandPropId()) {
				MainRoleMgr.Inst.Drop();
			}
			this.canBeForceStop = false;
			let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
			PropMgr.Inst.timerCtl(false);
			gameUI.ChangeFoundImg(4);
			gameUI.changeYinShenNarrow(false);
			gameUI.ChangeAll(false);
			if (UISystem.Inst.GetWindowView(UIInfoWindowView))
				UISystem.Inst.GetWindowView(UIInfoWindowView).visible = false;
			this.owner.Squat(false, false);
			if (PropMgr.Inst.hideProp) {
				if (PropMgr.Inst.hideProp.status == 2)
					PropMgr.Inst.hideProp.useProp_ByStatus();
			}
			this.canBeForceStop = true;
			if (data.handler) data.handler.run();
		}
	}

	class RoleLookNNState extends BaseState {
		constructor(owner) {
			super();
			this.canDie = true;
			this.add = 1;
			this.old = 0;
			this.owner = owner;
		}
		onEnable() {}
		onDisable() {}
		enter(data) {
			MainRoleMgr.Inst.ChangeMainRoleState(statName.ClearState, {
				handler: Laya.Handler.create(this, this.cameraToKbnn)
			});
		}
		cameraToKbnn() {
			this.owner.camera_OUT_IN(true);
			if (!this.owner.standAndDun) {
				this.owner.Squat(false);
			}
			this.rotation = this.owner.cameraRoleObj.transform.rotation.clone();
			this.owner.animator.speed = 0;
			let kbnnTransForm = SceneMgr.Inst.GetKbnnScript().GetTransform();
			let vect3 = new Laya.Vector3();
			console.log('奶奶击打', kbnnTransForm.position);
			kbnnTransForm.getForward(vect3);
			let near = new Laya.Vector3(
				kbnnTransForm.position.x - vect3.x * 1,
				kbnnTransForm.position.y + 1.4,
				kbnnTransForm.position.z - vect3.z * 1
			);
			let far = new Laya.Vector3(
				kbnnTransForm.position.x - vect3.x * 1.5,
				kbnnTransForm.position.y + 1.4,
				kbnnTransForm.position.z - vect3.z * 1.5
			);
			this.owner.cameraBox.transform.position = far;
			this.owner.cameraBox.transform.lookAt(
				new Laya.Vector3(
					kbnnTransForm.position.x,
					kbnnTransForm.position.y + 1.4,
					kbnnTransForm.position.z
				),
				new Laya.Vector3(0, 1, 0),
				false
			);
			Laya.timer.loop(16, this, this.go, [near]);
		}
		go(targert) {
			let num = this.add + this.old;
			this.old = this.add;
			this.add = num;
			if (this.add > 40000) this.add = 40000;
			let Positon = this.owner.cameraBox.transform.position;
			let vct3 = new Laya.Vector3();
			Laya.Vector3.subtract(Positon, targert, vct3);
			if (Math.abs(vct3.x) > 0.08 || Math.abs(vct3.z) > 0.08) {
				this.owner.cameraBox.transform.lookAt(
					targert,
					new Laya.Vector3(0, 1, 0),
					false
				);
				Laya.Vector3.normalize(vct3, vct3);
				this.owner.cameraBox.transform.translate(
					new Laya.Vector3(
						-vct3.x * (0.02 + this.add * 0.000001),
						0,
						-vct3.z * (0.02 + this.add * 0.000001)
					),
					false
				);
			} else {
				Laya.timer.clear(this, this.go);
				Laya.timer.once(750, this, function () {
					UISystem.Inst.GetWindowView(
						UIGamePlayView
					).changeTouTiaoDie(true);
				});
				Laya.timer.once(1000, this, function () {
					this.owner.camera_OUT_IN(false);
					this.owner.cameraRoleObj.transform.rotation = this.rotation;
					MainRoleMgr.Inst.ChangeMainRoleState(statName.Die);
				});
			}
		}
	}

	class UseCarState extends BaseState {
		constructor(owner) {
			super();
			this.owner = owner;
		}
		enter(data) {
			if (data.degree != undefined) {
				this.moveCar(data.degree);
				return;
			}
			this.car = data.car;
			Laya.MouseManager.enabled = false;
			if (data.isIn) this.inToCar(this.car);
			else this.outCar(this.car);
		}
		exit() {}
		forceStop() {}
		advanceTime(time) {}
		inToCar(car) {
            window.showUIFlag = true;
			this.owner.cameraRoleObj.getComponent(
				Laya.CharacterController
			).enabled = false;
			Laya.Tween.to(
				car.propArr[10].transform,
				{ localRotationEulerY: -60 },
				800,
				null,
				Laya.Handler.create(this, function () {
					Laya.MouseManager.enabled = true;
					let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
					gameUI.ChangeBtnStartCar(true);
					gameUI.ChangeBtnSquat(false);
					gameUI.ChangeBtnJoystick(false);
					this.canBeForceStop = false;
					this.cameraBoxPosition = this.owner.cameraBox.transform.localPosition.clone();
					this.cameraBoxRotation = this.owner.cameraBox.transform.rotationEuler.clone();
					this.roleRotation = this.owner.cameraRoleObj.transform.rotationEuler.clone();
					this.rolePosition = this.owner.cameraRoleObj.transform.position.clone();
					this.owner.cameraRoleObj.transform.position = new Laya.Vector3(1.2750020027160645, 1.1155999898910522, -1.336359977722168);//car.propArr[11].transform.position;
                    console.error(this.owner.cameraRoleObj.transform.position);
					this.owner.cameraRoleObj.removeSelf();
					car.propSprite.addChild(this.owner.cameraRoleObj);
					Laya.Tween.to(
						car.propArr[10].transform,
						{ localRotationEulerY: 0 },
						1200
					);
                    window.showUIFlag = false;
				})
			);
		}
		outCar(car) {
			Laya.Tween.to(
				car.propArr[10].transform,
				{ localRotationEulerY: -60 },
				800,
				null,
				Laya.Handler.create(this, function () {
					Laya.MouseManager.enabled = true;
					let gameUI = UISystem.Inst.GetWindowView(UIGamePlayView);
					gameUI.ChangeBtnStartCar(false);
					gameUI.ChangeBtnSquat(true);
					gameUI.ChangeBtnJoystick(true);
					gameUI.ChangeBtnForwadHoutui(false);
					this.canBeForceStop = true;
					MainRoleMgr.Inst.ChangeMainRoleState(statName.stop);
					// this.owner.cameraRoleObj.transform.rotationEuler = this.roleRotation;
					// this.owner.cameraRoleObj.transform.position = this.rolePosition;
					// this.owner.cameraBox.transform.localPosition = this.cameraBoxPosition;
					// this.owner.cameraBox.transform.rotationEuler = this.cameraBoxRotation;
					this.owner.cameraRoleObj.removeSelf();
					SceneMgr.Inst._curScene.addChild(this.owner.cameraRoleObj);
					this.owner.cameraRoleObj.getComponent(
						Laya.CharacterController
					).enabled = true;
					Laya.Tween.to(
						car.propArr[10].transform,
						{ localRotationEulerY: 0 },
						1200
					);
				})
			);
		}
		moveCar(degree) {}
		moveOn() {}
	}

	class HandMuBanState extends BaseState {
		constructor(onwer) {
			super();
			this.owner = onwer;
		}
		enter(data) {
			if (data.beHand) {
				this.hand(data);
			} else {
				this.drop(data);
			}
		}
		forceStop() {}
		exit() {}
		advanceTime(time) {}
		hand(data) {
			if (MainRoleMgr.Inst.role.getHandPropId()) {
				PropMgr.Inst.judgeProp(data);
				return;
			}
			data.sprite3D.removeSelf();
			data.sprite3D.active = true;
			this.recodMuBan = data.recodSp3;
			this.owner.handPoint.addChild(data.sprite3D);
			data.sprite3D.transform.localPosition = new Laya.Vector3(0, 0, 0);
			if (data.config) {
				if (data.config.handrotate.split('|').length < 2) return;
				let arrPosition = data.config.handrotate
					.split('|')[0]
					.split(',');
				let arrRotation = data.config.handrotate
					.split('|')[1]
					.split(',');
				data.sprite3D.transform.localPosition = new Laya.Vector3(
					-parseFloat(arrPosition[0]),
					parseFloat(arrPosition[1]),
					parseFloat(arrPosition[2])
				);
				data.sprite3D.transform.localRotationEuler = new Laya.Vector3(
					parseFloat(arrRotation[0]),
					-parseFloat(arrRotation[1]),
					-parseFloat(arrRotation[2])
				);
			}
			this.owner.curItem = data.sprite3D;
			MainRoleMgr.Inst.role.setHandPropId(data.propId);
			if (this.owner.curItem) {
				UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnDrop(true);
			}
		}
		drop(data) {
			let oldPosition = this.owner.handPoint.transform.position;
			let prop = PropMgr.Inst.getProp(
				MainRoleMgr.Inst.role.getHandPropId()
			);
			let id = MainRoleMgr.Inst.role.getHandPropId();
			this.owner.curItem.removeSelf();
			SceneMgr.Inst._curScene.addChild(this.owner.curItem);
			this.owner.curItem.active = false;
			this.owner.curItem.transform.position = new Laya.Vector3(
				0,
				1000,
				0
			);
			let forward = new Laya.Vector3();
			this.owner.cameraRoleObj.transform.getForward(forward);
			this.drop_(oldPosition, forward, data);
			this.owner.curItem = null;
			this.recodMuBan = null;
			MainRoleMgr.Inst.role.setHandPropId(null);
			SoundMgr.Inst.playSound(20);
			let playView = UISystem.Inst.GetWindowView(UIGamePlayView);
			if (!this.owner.curItem) {
				playView.ChangeBtnDrop(false);
				playView.ChangeBtnShoot(false);
			}
		}
		drop_(oldPosition, forward, data) {
			this.recodMuBan.active = true;
			if (data.isPut) {
				GameEventMgr.Inst.sendEvent([EventName.GEAR], { muban: true });
				this.recodMuBan.active = false;
				return;
			}
			this.recodMuBan.removeSelf();
			SceneMgr.Inst._curScene.addChild(this.recodMuBan);
			this.recodMuBan.transform.position = oldPosition;
			if (this.owner.standAndDun) {
				this.recodMuBan.transform.translate(
					new Laya.Vector3(
						forward.x * 0.2,
						forward.y * 0.2,
						forward.z * 0.2
					),
					false
				);
			} else {
				this.recodMuBan.transform.translate(new Laya.Vector3(0, 1, 0));
				this.recodMuBan.transform.translate(
					new Laya.Vector3(
						forward.x * 0.2,
						forward.y * 0.2,
						forward.z * 0.2
					),
					false
				);
			}
			this.recodMuBan.getComponent(Laya.Rigidbody3D).isTrigger = false;
			this.recodMuBan.getComponent(Laya.Rigidbody3D).isKinematic = false;
		}
	}

	class StandState extends BaseState {
		constructor(owner) {
			super();
			this.owner = owner;
		}
		onEnable() {}
		onDisable() {}
		enter(data) {
			if (data.neadRecover) {
				let transform = this.owner.cameraRoleObj.transform;
				Laya.Tween.to(
					transform,
					{ localPositionY: transform.localPositionY + 0.85 },
					200
				);
			}
			this.owner.standAndDun = true;
			this.owner.character.colliderShape = this.owner.bigcollidershape;
			this.owner.setSpeed(0.04);
			SoundMgr.Inst.playSound(44);
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'oppo',
				isShow: true,
				adPoint: 6
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'meizu',
				isShow: true,
				adPoint: 6
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'vivo',
				isShow: true,
				adPoint: 6
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'toutiao',
				isShow: true,
				adPoint: 6
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'qq',
				isShow: true,
				adPoint: 6
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'wx',
				isShow: true,
				adPoint: 6
			});
		}
	}

	class DunState extends BaseState {
		constructor(owner) {
			super();
			this.owner = owner;
		}
		onEnable() {}
		onDisable() {}
		enter(data) {
			let transform = this.owner.cameraRoleObj.transform;
			Laya.Tween.to(
				transform,
				{ localPositionY: transform.localPositionY - 0.85 },
				200
			);
			this.owner.character.colliderShape = this.owner.smallcollidershape;
			this.owner.standAndDun = false;
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'oppo',
				isShow: true,
				adPoint: 6
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'meizu',
				isShow: true,
				adPoint: 6
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'vivo',
				isShow: true,
				adPoint: 6
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'qq',
				isShow: true,
				adPoint: 6
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'wx',
				isShow: true,
				adPoint: 6
			});
			SDK.ins_.send(SDK_ORDER.AD_INSERT_ISSHOW, {
				name: 'toutiao',
				isShow: true,
				adPoint: 6
			});
		}
	}

	class HideMuXiangState extends BaseState {
		constructor(owner) {
			super();
			this.owner = owner;
		}
		onEnable() {}
		onDisable() {}
		exit() {}
		enter(data) {
			let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
			if (data.isHide) {
				this.canBeForceStop = false;
				this.owner.isLeaveBody = true;
				this.owner.camera_OUT_IN(
					true,
					data.isLockX,
					data.isLockY,
					undefined,
					true
				);
				this.owner.cameraBox.transform.position = data.locationPosition;
				this.owner.cameraBox.transform.localRotationEuler =
					data.lookSize;
				SoundMgr.Inst.playSound(33);
				ui.ChangeBtnSquat(false);
				ui.ChangeBtnJoystick(false);
				ui.ChangeBtnDrop(false);
			} else {
				this.canBeForceStop = true;
				this.owner.isLeaveBody = false;
				this.owner.camera_OUT_IN(false, data.isLockX, data.isLockY);
				MainRoleMgr.Inst.ChangeMainRoleState(statName.stop);
				ui.ChangeBtnSquat(true);
				ui.ChangeBtnJoystick(true);
				if (Role.ins_.getHandPropId() != null) ui.ChangeBtnDrop(true);
			}
		}
	}

	class LookAtDoorState extends BaseState {
		constructor(onwer) {
			super();
			this.owner = onwer;
		}
		enter(data) {
			SDK.ins_.send(SDK_ORDER.BARRAGE_WRODS_Change, {
				name: 'toutiao',
				isShow: true
			});
			this.canBeForceStop = false;
			let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
			ui.ChangeAll(false);
			ui.ChangeImgBlack(
				true,
				300,
				Laya.Handler.create(this, this.playAni)
			);
		}
		playAni() {
			let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
			ui.ChangeImgBlack(false, 400, null);
			this.recodeLocalElr =
				this.owner.cameraBox.transform.rotationEuler.clone();
			this.recodeLocalPostion =
				this.owner.cameraBox.transform.localPosition.clone();
			this.recodePostion =
				this.owner.cameraRoleObj.transform.position.clone();
			this.recodeRotation =
				this.owner.cameraRoleObj.transform.rotation.clone();
			this.owner.camera_OUT_IN(true);
			this.owner.playAni(
				'texie_Animation',
				1,
				null,
				Laya.Handler.create(this, function () {
					ui.ChangeImgBlack(
						true,
						0,
						Laya.Handler.create(this, function () {
							this.canBeForceStop = true;
							MainRoleMgr.Inst.ChangeMainRoleState(statName.stop);
							GameEventMgr.Inst.sendEvent(
								[EventName.INTRODUCE_MGS],
								{ id: 7, trigger: true, sym: 'aniOver' }
							);
						})
					);
				})
			);
		}
		forceStop() {}
		exit() {
			let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
			ui.ChangeImgBlack(false, 500, null, 200);
			this.owner.camera_OUT_IN(false);
			this.owner.cameraRoleObj.transform.rotation = this.recodeRotation;
			this.owner.cameraRoleObj.transform.position = this.recodePostion;
			this.owner.cameraBox.transform.rotationEuler = this.recodeLocalElr;
			this.owner.cameraBox.transform.localPosition =
				this.recodeLocalPostion;
			ui.ChangeBtnSquat(true);
			ui.ChangeBtnPropList(true);
			ui.ChangeBtnSet(true);
			ui.ChangeBtnJoystick(true);
			ui.ChangeBtnNoSound(true);
			if (Role.ins_.getHandPropId() != null) ui.ChangeBtnDrop(true);
		}
		advanceTime(time) {}
	}

	var statName;
	(function (statName) {
		statName[(statName['walk'] = 0)] = 'walk';
		statName[(statName['stop'] = 1)] = 'stop';
		statName[(statName['getUp'] = 2)] = 'getUp';
		statName[(statName['handProp'] = 3)] = 'handProp';
		statName[(statName['dropProp'] = 4)] = 'dropProp';
		statName[(statName['thoughWindow'] = 5)] = 'thoughWindow';
		statName[(statName['hideInBed'] = 6)] = 'hideInBed';
		statName[(statName['Die'] = 7)] = 'Die';
		statName[(statName['NextDay'] = 8)] = 'NextDay';
		statName[(statName['LookAtNN'] = 9)] = 'LookAtNN';
		statName[(statName['ClearState'] = 10)] = 'ClearState';
		statName[(statName['UseCarState'] = 11)] = 'UseCarState';
		statName[(statName['handMuBan'] = 12)] = 'handMuBan';
		statName[(statName['stand'] = 13)] = 'stand';
		statName[(statName['dun'] = 14)] = 'dun';
		statName[(statName['hideMuXiang'] = 15)] = 'hideMuXiang';
		statName[(statName['lookAtDoor'] = 16)] = 'lookAtDoor';
	})(statName || (statName = {}));
	class MainRoleScript {
		constructor() {
			this.camera = null;
			this.initPosVec3 = new Laya.Vector3(-3.019, 11.163, 4.553);
			this.cameraBoxPos = new Laya.Vector3(-3.019, 11.163, 4.553);
			this.initRoVec3 = new Laya.Vector3(0, 0, 0);
			this.stateDic = new Dictionary();
			this.walk = new WalkState(this);
			this.stop = new StopState(this);
			this.startTurnState = new StartTurnState(this);
			this.handProp = new HandPropState(this);
			this.dropProp = new DropPropState(this);
			this.die = new DieState(this);
			this.thoughWindowState = new ThoughWindowStat(this);
			this.hideInBed = new HideInBed(this);
			this.nextDayState = new NextDayState(this);
			this.clearState = new ClearRoleState(this);
			this.lookAtNN = new RoleLookNNState(this);
			this.useCarState = new UseCarState(this);
			this.handMubanStat = new HandMuBanState(this);
			this.standState = new StandState(this);
			this.dunState = new DunState(this);
			this.hideMuXiangState = new HideMuXiangState(this);
			this.lookAtDoor = new LookAtDoorState(this);
			this.viewLock_X = false;
			this.viewLock_Y = false;
			this.moveLock = false;
			this.isLeaveBody = false;
			this.standAndDun = true;
			this.squat = false;
			this.isDie = true;
			this.curAniName = 'null';
			this.camera = SceneMgr.Inst.GetCamera();
			if (this.camera) {
				this.camera.nearPlane = 0.01;
				this.camera.fieldOfView = 45;
			} else {
				console.error('相机未加载好');
			}
			this.cameraBox = this.camera.parent;
			this.roleBox = this.cameraBox.parent;
			this.cameraRoleObj = this.roleBox.parent;
			this.handPoint = this.cameraBox.getChildByName('handPoint');
			this.cameraRoleObj.transform.position = this.initPosVec3;
			this.cameraRoleObj.transform.rotationEuler = this.initRoVec3;
			let pos = this.roleBox.transform.position;
			this.initRolePos = this.roleBox.transform.position =
				new Laya.Vector3(pos.x, pos.y, pos.z);
			this.animator = this.cameraBox.getComponent(Laya.Animator);
			this.animator.enabled = true;
			this.stateMachine = new RoleFiniteStateMachine();
			this.stateDic[statName.walk] = this.walk;
			this.stateDic[statName.stop] = this.stop;
			this.stateDic[statName.getUp] = this.startTurnState;
			this.stateDic[statName.handProp] = this.handProp;
			this.stateDic[statName.dropProp] = this.dropProp;
			this.stateDic[statName.thoughWindow] = this.thoughWindowState;
			this.stateDic[statName.hideInBed] = this.hideInBed;
			this.stateDic[statName.Die] = this.die;
			this.stateDic[statName.NextDay] = this.nextDayState;
			this.stateDic[statName.ClearState] = this.clearState;
			this.stateDic[statName.LookAtNN] = this.lookAtNN;
			this.stateDic[statName.UseCarState] = this.useCarState;
			this.stateDic[statName.handMuBan] = this.handMubanStat;
			this.stateDic[statName.stand] = this.standState;
			this.stateDic[statName.dun] = this.dunState;
			this.stateDic[statName.hideMuXiang] = this.hideMuXiangState;
			this.stateDic[statName.lookAtDoor] = this.lookAtDoor;
			if (!this.cameraRoleObj.getComponents(Laya.CharacterController)) {
				this.character = this.cameraRoleObj.addComponent(
					Laya.CharacterController
				);
				this.cameraRoleObj.name = 'Role';
			}
			if (!this.cameraRoleObj.getComponents(RoleColiderScript)) {
				this.coliderScript =
					this.cameraRoleObj.addComponent(RoleColiderScript);
				this.coliderScript.enabled = false;
			}
			this.bigcollidershape = new Laya.CapsuleColliderShape(0.3, 1.8, 1);
			this.bigcollidershape.localOffset = new Laya.Vector3(0, -0.8, 0);
			this.smallcollidershape = new Laya.CapsuleColliderShape(
				0.25,
				0.85,
				1
			);
			this.smallcollidershape.localOffset = new Laya.Vector3(0, -0.55, 0);
			this.character.colliderShape = this.bigcollidershape;
			this.character.gravity = new Laya.Vector3(0, -10, 0);
			this.character.ccdMotionThreshold = 0;
			this.IntMainRole();
		}
		IntMainRole() {
			this.setSpeed(0.04);
		}
		RayCheckOnOff(isOpen, timer = 16) {
			if (isOpen) Laya.timer.loop(timer, this, this.CameraRayCheck);
			else Laya.timer.clear(this, this.CameraRayCheck);
		}
		setSpeed(number) {
			if (Role.ins_.getDayNum() == 1) this.Speed = number;
			else
				this.Speed =
					number * parseFloat(ConfigValue.getItemByKey('4').value);
			if (!this.standAndDun)
				this.Speed =
					this.Speed *
					parseFloat(ConfigValue.getItemByKey('3').value);
		}
		initMainRole() {
			this.setSpeed(0.04);
			this.animator.speed = 0;
			if (this.isLeaveBody) this.camera_OUT_IN(false);
			this.character.colliderShape = this.bigcollidershape;
			this.cameraRoleObj.transform.localRotationEuler = new Laya.Vector3(
				0,
				0,
				0
			);
			this.cameraRoleObj.transform.position = this.initPosVec3;
			this.cameraRoleObj.transform.rotationEuler = this.initRoVec3;
			this.roleBox.transform.position = new Laya.Vector3(
				this.initRolePos.x,
				this.initRolePos.y,
				this.initRolePos.z
			);
			this.cameraBox.transform.localPosition = this.initPosVec3;
			this.viewLock_X = false;
			this.viewLock_Y = false;
			this.moveLock = false;
			this.isLeaveBody = false;
		}
		GetCurState() {
			return this.curState;
		}
		Rotate(rotate) {
			if (this.isLeaveBody) {
				if (!this.viewLock_Y)
					this.cameraBox.transform.rotate(
						new Laya.Vector3(0, rotate.y, 0)
					);
				if (!this.viewLock_X)
					this.cameraBox.transform.rotate(
						new Laya.Vector3(rotate.x, 0, 0)
					);
			} else {
				if (!this.viewLock_Y) {
					this.recodeHandPointPoint =
						this.handPoint.transform.localPosition.clone();
					this.cameraRoleObj.transform.rotate(
						new Laya.Vector3(0, rotate.y, 0)
					);
					this.handPointAni(rotate);
				}
				if (!this.viewLock_X)
					this.cameraBox.transform.rotate(
						new Laya.Vector3(rotate.x, 0, 0)
					);
			}
			if (
				this.cameraBox.transform.localRotationEulerX <= -80 ||
				this.cameraBox.transform.localRotationEulerX > 100
			) {
				this.cameraBox.transform.localRotationEulerX = -80;
			}
			if (this.cameraBox.transform.localRotationEulerX > 50) {
				this.cameraBox.transform.localRotationEulerX = 50;
			}
			if (!this.isLeaveBody) {
				this.cameraBox.transform.localRotationEulerY = 0;
				this.cameraBox.transform.localRotationEulerZ = 0;
			}
		}
		handPointAni(rotate) {
			if (rotate.y < 0) {
				this.handPointtween = Laya.Tween.to(
					this.handPoint.transform,
					{ localPositionX: 0.04 - 0.005 },
					200,
					null,
					Laya.Handler.create(this, function () {
						this.handPointtween = Laya.Tween.to(
							this.handPoint.transform,
							{ localPositionX: 0.04 },
							400
						);
					})
				);
			}
			if (rotate.y > 0) {
				this.handPointtween = Laya.Tween.to(
					this.handPoint.transform,
					{ localPositionX: 0.04 + 0.005 },
					200,
					null,
					Laya.Handler.create(this, function () {
						this.handPointtween = Laya.Tween.to(
							this.handPoint.transform,
							{ localPositionX: 0.04 },
							400
						);
					})
				);
			}
		}
		Die() {
			this.IntMainRole();
		}
		GetSelf() {
			return this.slef;
		}
		ChangeState(state, data) {
			if (this.stateDic[state]) {
				this.stateMachine.SetCurState(
					this.stateDic[state],
					data,
					state
				);
			}
		}
		Squat(Squat, neadRecover = true) {
			this.squat = Squat;
			if (Squat) {
				this.ChangeState(statName.dun, { neadRecover: neadRecover });
			} else {
				this.ChangeState(statName.stand, { neadRecover: neadRecover });
			}
		}
		CameraRayCheck() {
			var point = new Laya.Vector2();
			var hit = new Laya.HitResult();
			var ray = new Laya.Ray(
				new Laya.Vector3(0, 0, 0),
				new Laya.Vector3(0, 0, 0)
			);
			point.x = GameConfig.viewWidth / 2 + 21;
			point.y = GameConfig.viewHeight / 2 + 21;
	
            point.x = point.x * Laya.stage.clientScaleX;
            point.y = point.y * Laya.stage.clientScaleY;
			this.camera.viewportPointToRay(point, ray);
			SceneMgr.Inst._curScene.physicsSimulation.rayCast(ray, hit, 20, 32);
			PropMgr.Inst.setCurPoint(hit.point);
			if (hit) {
				if (hit.collider) {
                    // console.error(hit.collider.owner.name);
					PropMgr.Inst.propBeSelected(hit);
				}
			}
		}
		camera_OUT_IN(isout, isLockX, isLockY, isMoveLock, needRecod = true) {
			if (isout) {
				if (needRecod)
					this.inOutCameraLocalRo =
						this.cameraBox.transform.localRotationEuler.clone();
				this.cameraBox.removeSelf();
				SceneMgr.Inst._curScene.addChild(this.cameraBox);
				this.moveLock = isMoveLock !== undefined ? isMoveLock : true;
				this.viewLock_X = isLockX !== undefined ? isLockX : true;
				this.viewLock_Y = isLockY !== undefined ? isLockY : true;
			} else {
				this.cameraBox.removeSelf();
				this.roleBox.addChild(this.cameraBox);
				this.moveLock = isMoveLock !== undefined ? isMoveLock : false;
				this.viewLock_X = isLockX !== undefined ? isLockX : false;
				this.viewLock_Y = isLockY !== undefined ? isLockY : false;
				this.cameraRoleObj.transform.rotation =
					this.cameraBox.transform.rotation;
				if (!this.inOutCameraLocalRo)
					this.cameraBox.transform.localRotationEuler =
						new Laya.Vector3(0, 0, 0);
				else
					this.cameraBox.transform.localRotationEuler =
						this.inOutCameraLocalRo;
				this.cameraBox.transform.localPosition = this.cameraBoxPos;
				this.inOutCameraLocalRo = null;
			}
			this.isLeaveBody = isout;
		}
		playAni(aniName, speed = 1, corss = 0, handler) {
			if (!corss) this.animator.play(aniName);
			else this.animator.crossFade(aniName, corss);
			this.animator.speed = 1;
			this.aniPlayStatus = this.animator.getCurrentAnimatorPlayState();
			this.curAniName = aniName;
			Laya.timer.loop(16, this, this.playStatue, [handler]);
		}
		playStatue(handler) {
			if (this.aniPlayStatus.normalizedTime >= 1) {
				Laya.timer.clear(this, this.playStatue);
				this.animator.play('null');
				this.curAniName = 'null';
				this.animator.speed = 0;
				if (handler) handler.runWith(handler.args);
			}
		}
		getCurAniName() {
			return this.curAniName;
		}
		setPostion(roleStorageData) {
			this.ChangeState(statName.stop);
			let positon = roleStorageData.position;
			let eRo = roleStorageData.Erotation;
			this.cameraRoleObj.transform.position = new Laya.Vector3(
				positon.x,
				positon.y,
				positon.z
			);
			this.cameraRoleObj.transform.rotationEuler = new Laya.Vector3(
				eRo.x,
				eRo.y,
				eRo.z
			);
		}
		setStorageStatus(statName_, squat) {
			this.cameraBox.transform.localRotationEuler = new Laya.Vector3(
				0,
				0,
				0
			);
			this.cameraBox.transform.localPosition = this.cameraBoxPos;
			this.IntMainRole();
			this.RayCheckOnOff(true);
			let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
			ui.ChangeBtnJoystick(true);
			ui.ChangeBtnSquat(true);
			ui.ChangeBtnSet(true);
			ui.ChangeBtnPropList(true);
			if (Role.ins_.getHandPropId()) ui.ChangeBtnDrop(true);
			switch (statName_) {
				case statName.handMuBan:
					break;
				case statName.hideInBed:
					PropMgr.Inst.useProp();
					break;
				case statName.hideMuXiang:
					PropMgr.Inst.useProp();
					break;
				case statName.UseCarState:
					break;
				default:
					this.Squat(squat, true);
					break;
			}
		}
		destorySelf() {
			this.cameraRoleObj.destroy(true);
		}
	}
	MainRoleScript.HEIGHT_OFFSET = 1.6;

	class MainRoleMgr extends Laya.Script {
		constructor() {
			super();
			this.hasVoice = false;
			this.canHeard = true;
			this.mainRole = null;
			this.role = Role.ins_;
		}
		static get Inst() {
			if (this.inst == null) {
				this.inst = new MainRoleMgr();
			}
			return this.inst;
		}
		onEnable() {}
		onDisable() {}
		setCantHeard() {
			this.canHeard = false;
			this.hasVoice = false;
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnNoSound(true);
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeTipsBox(
				false,
				null,
				null,
				null,
				true
			);
			UISystem.Inst.GetWindowView(UIGamePlayView).ChangeNarrowSpine(
				false
			);
			Laya.timer.once(60000, this, function () {
				this.canHeard = true;
				UISystem.Inst.GetWindowView(UIGamePlayView).ChangeBtnNoSound(
					false
				);
			});
		}
		CreatMainRole() {
			this.mainRole = new MainRoleScript();
		}
		Rotate(point) {
			if (!this.mainRole) return;
			if (Role.ins_.RoleChangeStatLock) return;
			let xishu = 0.2 + 0.6 * Role.ins_.roleData.rotatPercent;
			var rotate = new Laya.Vector3(
				-point.y * 0.01 * xishu,
				-point.x * 0.01 * xishu,
				0
			);
			this.mainRole.Rotate(rotate);
		}
		Drop() {
			switch (this.role.getHandPropId()) {
				case 50:
					this.ChangeMainRoleState(statName.handMuBan, {
						beHand: false
					});
					break;
				default:
					this.ChangeMainRoleState(statName.dropProp);
					break;
			}
		}
		ChangeMainRoleState(state, data) {
			if (
				state == statName.walk ||
				state == statName.stand ||
				state == statName.dun
			) {
				if (Role.ins_.RoleChangeStatLock) return;
			}
			this.mainRole.ChangeState(state, data);
		}
		RoleDie() {
			this.mainRole.Die();
		}
		Squat(squat) {
			this.mainRole.Squat(squat);
		}
		RoleSquatState() {
			return this.getRoleScript().standAndDun;
		}
		getCurDirection() {
			return this.mainRole.curDirection;
		}
		getCurAniName() {
			return this.mainRole.getCurAniName();
		}
		getCurState() {
			return this.mainRole.GetCurState();
		}
		getCurRoleRotation() {
			return this.mainRole.cameraRoleObj.transform.rotation;
		}
		getCurRolePosition() {
			return this.mainRole.cameraRoleObj.transform.position;
		}
		getCamera() {
			return this.mainRole.cameraBox;
		}
		getCameraPos() {
			return this.mainRole.cameraBox.transform.position;
		}
		isRoleDie() {
			if (!this.mainRole) return null;
			return this.mainRole.isDie;
		}
		GetMainRole() {
			return this.mainRole.cameraRoleObj;
		}
		GetMainRolePosRemoveHeight() {
			let to = this.getCurRolePosition().clone();
			to.y -= MainRoleScript.HEIGHT_OFFSET;
			if (!this.RoleSquatState()) to.y += 0.83;
			return to;
		}
		getRoleScript() {
			return this.mainRole;
		}
		setRoleVoice() {
			if (!this.canHeard) return;
			this.hasVoice = true;
			let Vector3 = this.mainRole.cameraRoleObj.transform.position;
			Laya.timer.once(800, this, function () {
				this.hasVoice = false;
			});
		}
		judgeRoleVoice() {
			if (this.hasVoice)
				return this.mainRole.cameraRoleObj.transform.position;
			return null;
		}
		setMainRoleAniSpeed(number) {
			this.getRoleScript().animator.speed = number;
		}
		timerCtl(open) {
			if (open) {
				this.setRoleVoice();
			} else {
				Laya.timer.clearAll(this);
				this.canHeard = true;
				this.hasVoice = false;
				MainRoleMgr.Inst.getRoleScript().RayCheckOnOff(false);
			}
		}
		beCatchUp(isFound) {
			let ui = UISystem.Inst.GetWindowView(UIGamePlayView);
			if (!ui) return;
			if (isFound) {
				ui.ChangeBtnRed(true);
				SDK.ins_.send(SDK_ORDER.BARRAGE_WRODS_Change, {
					name: 'toutiao',
					isShow: true
				});
			} else {
				ui.ChangeBtnRed(false);
				SDK.ins_.send(SDK_ORDER.BARRAGE_WRODS_Change, {
					name: 'toutiao',
					isShow: false
				});
			}
		}
		isLookAtIntrodcePoint() {
			let transform = this.mainRole.cameraRoleObj.transform;
			if (
				transform.localRotationEulerY > 86 &&
				transform.localRotationEulerY < 95
			) {
				return 1;
			}
		}
		setToStorage() {
			let transform = this.getRoleScript().cameraRoleObj.transform;
			let hideProp = PropMgr.Inst.hideProp;
			if (hideProp) hideProp = hideProp.vo.resName;
			else hideProp = null;
			this.roleStorageData = {
				position: transform.position,
				Erotation: transform.rotationEuler,
				squat: this.getRoleScript().squat,
				status: this.getCurState(),
				hideRes: hideProp,
				handProp: Role.ins_.getHandPropId()
			};
			Role.ins_.setDataByString('roleStorageData', this.roleStorageData);
		}
		getFromStorage() {
			this.roleStorageData = Role.ins_.getDataByString('roleStorageData');
			this.getRoleScript().setPostion(this.roleStorageData);
			this.getRoleScript().animator.speed = 0;
		}
		delaySetStatus() {
			this.getRoleScript().setStorageStatus(
				this.roleStorageData.status,
				this.roleStorageData.squat
			);
		}
		destroyRole() {
			this.hasVoice = false;
			this.mainRole.destorySelf();
			this.mainRole = null;
			this.hasVoice = false;
		}
	}

	class SoundMgr {
		constructor() {
			this._isPass = true;
			this._bgId = null;
			this.soundChannel = null;
			this.isPass = StorageUtils.Inst.GetMusic();
			this.lockDic = new Dictionary$1();
		}
		static get Inst() {
			if (this._Inst == null) this._Inst = new SoundMgr();
			return this._Inst;
		}
		playSound(
			id,
			loops = 1,
			complete = null,
			soundClass = null,
			startTime = 0
		) {
			let config = this.getMusicConfigById(id);
			let url = this.getUrlStringById(id);
			config.loop == 1 ? (loops = 0) : (loops = 1);
			if (!this._isPass) return;
			if (!this.soundCd(config, id)) return;
			if (config.trigger == 1) MainRoleMgr.Inst.setRoleVoice();
			Laya.SoundManager.playSound(
				url,
				loops,
				complete,
				soundClass,
				startTime
			);
		}
		playMusic(id, loops = 0, complete = null, startTime = 0) {
			let config = this.getMusicConfigById(id);
			let url = this.getUrlStringById(id);
			config.loop == 1 ? (loops = 0) : (loops = 1);
			if (!this._isPass) return;
			if (!this.soundCd(config, id)) return;
			if (this.soundChannel) {
				this.soundChannel.completeHandler = null;
				this.soundChannel.stop();
			}
            this.stopMusic();
			this.soundChannel = Laya.SoundManager.playMusic(
				url,
				1,
				Laya.Handler.create(this, this.playComplete, [url]),
				0
			);
			this._bgId = id;
		}
		playComplete(url) {
			if (this.isPass != false) {
				this.soundChannel = Laya.SoundManager.playMusic(
					url,
					1,
					Laya.Handler.create(this, this.playComplete, [url]),
					0
				);
			}
		}
		soundCd(config, id) {
			if (config.play) {
				if (!this.lockDic.get(id)) {
					this.lockDic.set(id, true);
					Laya.timer.once(
						config.play * 1000,
						this,
						function (id) {
							this.lockDic.remove(id);
							Laya.SoundManager.stopSound(
								this.getUrlStringById(id)
							);
						},
						[id]
					);
					return true;
				} else {
					return false;
				}
			}
			return true;
		}
		stopMusic() {
			if (this.soundChannel != null) {
				this.soundChannel.completeHandler = null;
				this.soundChannel.stop();
			}
			Laya.SoundManager.stopMusic();
		}
		stopSound(id, loops = 0, complete = null, startTime = 0) {
			let config = this.getMusicConfigById(id);
			let url = this.getUrlStringById(id);
			Laya.SoundManager.stopSound(url);
		}
		set isPass(value) {
			this._isPass = value;
			if (!value) {
				this.stopMusic();
			} else {
				if (this._bgId != null) this.playMusic(this._bgId);
			}
		}
		getUrlStringById(id) {
			return UrlUtils.GetMusic(
				this.getMusicConfigById(id).Musicname,
				false
			);
		}
		getMusicConfigById(id) {
			return Music.getItemByKey(id);
		}
	}
	SoundMgr._Inst = null;

	class StorageUtils {
		constructor() {
			this._user = null;
			this._date = null;
			this.LoginTime = 0;
			this._date = new Date();
		}
		static get Inst() {
			if (this._Inst == null) this._Inst = new StorageUtils();
			return this._Inst;
		}
		initStorage(handler) {
			if (handler != null) handler.run();
		}
		GetUserInfo() {
			if (!(StorageUtils.userinfo in this.user)) {
				this.user[StorageUtils.userinfo] = { uid: this.LoginTime };
			}
			return this.user[StorageUtils.userinfo];
		}
		get user() {
			if (this._user == null) {
				if (this._user == null) {
					this._user = {};
				}
			}
			return this._user;
		}
		clear() {
			this._user = {};
			this.SaveUser();
		}
		SaveUser() {
			Laya.LocalStorage.setJSON(StorageUtils.username, this.user);
		}
		GetShake() {
			let state =
				StorageUtils.shake in this.user
					? this.user[StorageUtils.shake]
					: true;
			return state;
		}
		SetShake(value) {
			SoundMgr.Inst.isPass = value;
			this.user[StorageUtils.shake] = value;
			this.SaveUser();
		}
		GetMusic() {
			let state =
				StorageUtils.music in this.user
					? this.user[StorageUtils.music]
					: true;
			return state;
		}
		SetMusic(value) {
			SoundMgr.Inst.isPass = value;
			this.user[StorageUtils.music] = value;
			this.SaveUser();
		}
		GetDifficulty() {
			let difficulty =
				StorageUtils.difficulty in this.user
					? this.user[StorageUtils.difficulty]
					: 2;
			return difficulty;
		}
		SetDifficulty(difficulty) {
			this.user[StorageUtils.difficulty] = difficulty;
			this.SaveUser();
		}
		GetSoundValue() {
			let soundValue =
				StorageUtils.soundValue in this.user
					? this.user[StorageUtils.soundValue]
					: 50;
			return soundValue;
		}
		SetSoundValue(soundValue) {
			this.user[StorageUtils.soundValue] = soundValue;
			this.SaveUser();
		}
		GetSelectDark() {
			let selectdark =
				StorageUtils.selectdark in this.user
					? this.user[StorageUtils.selectdark]
					: false;
			return selectdark;
		}
		SetSelectDark(selectdark) {
			this.user[StorageUtils.selectdark] = selectdark;
			this.SaveUser();
		}
		GetHaveExtraLock() {
			let extralock =
				StorageUtils.extralock in this.user
					? this.user[StorageUtils.extralock]
					: false;
			return extralock;
		}
		SetHaveExtraLock(extralock) {
			this.user[StorageUtils.extralock] = extralock;
			this.SaveUser();
		}
		GetIsNightMare() {
			let nightmare =
				StorageUtils.nightmare in this.user
					? this.user[StorageUtils.nightmare]
					: false;
			return nightmare;
		}
		SetNightMare(nightmare) {
			this.user[StorageUtils.nightmare] = nightmare;
			this.SaveUser();
		}
		GetImageQuality() {
			let imagequality =
				StorageUtils.imagequality in this.user
					? this.user[StorageUtils.imagequality]
					: 1;
			return imagequality;
		}
		SetImageQuality(imagequality) {
			this.user[StorageUtils.imagequality] = imagequality;
			this.SaveUser();
		}
		GetSensitivity() {
			let sensitivity =
				StorageUtils.sensitivity in this.user
					? this.user[StorageUtils.sensitivity]
					: 50;
			return sensitivity;
		}
		SetSensitivity(sensitivity) {
			this.user[StorageUtils.sensitivity] = sensitivity;
			this.SaveUser();
		}
	}
	StorageUtils.username = 'username';
	StorageUtils.userinfo = 'userinfo';
	StorageUtils.shake = 'shake';
	StorageUtils.music = 'music';
	StorageUtils.difficulty = 'difficulty';
	StorageUtils.soundValue = 'soundValue';
	StorageUtils.selectdark = 'selectdark';
	StorageUtils.extralock = 'extralock';
	StorageUtils.nightmare = 'nightmare';
	StorageUtils.imagequality = 'imagequality';
	StorageUtils.sensitivity = 'sensitivity';

	class PlatFormEventDeal {
		constructor(platFormMgr, platFormDeal) {
			this.needReplay = false;
			this.platFormMgr = platFormMgr;
			this.platFormDeal = platFormDeal;
		}
		deal(data) {
			switch (data.sym) {
				case SDK_ORDER.AD_VIDEO_CLOSE:
					this.endVideo(data.info, data.res);
					break;
				case SDK_ORDER.AD_NATIVE_BANNER_ISSHOW:
					this.platFormDeal.bannerChange(data);
					break;
				case SDK_ORDER.AD_CLICK_NATIVE_BANNER:
					this.platFormDeal.clickBanner(data);
					break;
				case SDK_ORDER.AD_CLICK_NATIVE_INSERT:
					this.platFormDeal.clickInsert(data);
					break;
				case SDK_ORDER.AD_INSERT_ISSHOW:
					this.platFormDeal.insertChange(data);
					break;
				case SDK_ORDER.AD_VIDEO_ISSHOW:
					this.handler = data.handler;
					this.needReplay = data.needReplay;
					SoundMgr.Inst.isPass = false;
					this.platFormDeal.videoChange(data);
					break;
				case SDK_ORDER.AD_NATIVE_INSERT_CLOSE:
					this.platFormDeal.onNativeInsertClose(data);
					break;
				case SDK_ORDER.AD_IMPACTION_ISSHOW:
					this.platFormDeal.impactionChange(data);
					break;
				case SDK_ORDER.AD_NATIVE_SMALL_ISSHOW:
					this.platFormDeal.nativeSmallChange(data);
					break;
				case SDK_ORDER.AD_CLICK_NATIVE_IMPACTION:
					this.platFormDeal.clickImpaction(data);
					break;
				case SDK_ORDER.AD_QQ_BOX_SHOW:
					this.platFormDeal.boxAdShow(data);
					break;
				case SDK_ORDER.AD_MISTAKE_BTN_UP:
					this.platFormDeal.btnUpTween(data);
					break;
				case SDK_ORDER.CHANGE_FOUND_AWARD:
					this.platFormDeal.changeFoundAward(data);
					break;
				case SDK_ORDER.CHANGE_FOUND_AWARD_WX_ICON:
					this.platFormDeal.changeFoundAwardWXIcon(data);
					break;
				case SDK_ORDER.CHANGE_CLOSE_ENINTRODUCE:
					this.platFormDeal.changeBtnEndIntroduce(data);
					break;
				case SDK_ORDER.EXIT_GAME:
					this.platFormDeal.exitGame(data);
					break;
				case SDK_ORDER.SHOW_PRIVACY_ICON:
					this.platFormDeal.showPrivacyIcon(data);
					break;
				case SDK_ORDER.AD_OV_SUPRISEDBOX_NATIVE:
					this.platFormDeal.nativeSupriseBox(data);
					break;
				case SDK_ORDER.AD_CLICK_SUPRISED_BOX:
					this.platFormDeal.clickSuperBox(data);
					break;
				case SDK_ORDER.HT_GAME_ICON_ISSHOW:
					if (GameConfig.isHtShow)
						this.platFormDeal.fliterGameIcon(data);
					break;
				case SDK_ORDER.HT_HORIZ_BOX_ISSHOW:
					if (GameConfig.isHtShow)
						this.platFormDeal.filterHorizBox(data);
					break;
				case SDK_ORDER.HT_MORE_GAME_ISSHOW:
					if (GameConfig.isHtShow)
						this.platFormDeal.filterMoreGame(data);
					break;
				case SDK_ORDER.HT_GAME_LIST_BOX_ISSHOW:
					if (GameConfig.isHtShow)
						this.platFormDeal.fliterGameListBox(data);
					break;
				case SDK_ORDER.HT_JUMP_TO_GAME:
					if (GameConfig.isHtShow)
						this.platFormDeal.fliterJumpToGame(data);
					break;
				case SDK_ORDER.HT_YOU_LIKE_ICON:
					if (GameConfig.isHtShow)
						this.platFormDeal.fliterYouLike(data);
					break;
				case SDK_ORDER.HT_CHANGE_VIEDO_RECODE:
					if (GameConfig.isHtShow)
						this.platFormDeal.filterGameRecoder(data);
					break;
				case SDK_ORDER.SHARE_GAME:
					this.platFormDeal.shareGame(data);
					break;
				case SDK_ORDER.HT_CHANGE_SHARE_GAME_ICON:
					if (GameConfig.isHtShow)
						this.platFormDeal.changeShareGameIcon(data);
					break;
				case SDK_ORDER.HT_ICON_NO_SOUND_CHANGE:
					if (GameConfig.isHtShow)
						this.platFormDeal.changeNoSound(data);
					break;
				case SDK_ORDER.HT_VER_LEFT_BOX:
					if (GameConfig.isHtShow)
						this.platFormDeal.changeLeftVerBox(data);
					break;
				case SDK_ORDER.HT_VER_RIGHT_BOX:
					if (GameConfig.isHtShow)
						this.platFormDeal.changeRightVerBox(data);
					break;
				case SDK_ORDER.HT_LEFT_CHOU_TI_BOX:
					if (GameConfig.isHtShow)
						this.platFormDeal.changeVerChouTiBox(data);
					break;
				case SDK_ORDER.HT_HORIZO_BOX:
					if (GameConfig.isHtShow)
						this.platFormDeal.changeHorizoBox(data);
					break;
				case SDK_ORDER.HT_BIG_GAME_xBOX:
					if (GameConfig.isHtShow)
						this.platFormDeal.changeBigBoxList(data);
					break;
				case SDK_ORDER.HT_ICON_SETTING_BOX:
					if (GameConfig.isHtShow)
						this.platFormDeal.changeIconSetting(data);
					break;
				case SDK_ORDER.HT_ICON_WX:
					if (GameConfig.isHtShow)
						this.platFormDeal.changeHtWxIcon(data);
					break;
				case SDK_ORDER.CHANGE_GAME_BY_PLTFORM:
					this.platFormDeal.changeGame(data);
					break;
				case SDK_ORDER.CHANGE_GAME_PROP_DETAIL:
					this.platFormDeal.showPropDetail(data);
					break;
				case SDK_ORDER.CHANGE_GAME_CLICK_BAO_XIANG:
					this.platFormDeal.clickBaoXiang(data);
					break;
				case SDK_ORDER.CHANGE_GAME_GET_ENINTRODUCE:
					this.platFormDeal.changeGetEndIntroduce(data);
					break;
				case SDK_ORDER.CHANGE_GAME_GET_ADD_DAY:
					this.platFormDeal.changeGetAddDay(data);
					break;
				case SDK_ORDER.CHANGE_GAME_GET_YIN_SHEN:
					this.platFormDeal.changeGetYinshen(data);
					break;
				case SDK_ORDER.CHANGE_GAME_LOAGIN_AWARD:
					this.platFormDeal.changeLoginAward(data);
					break;
				case SDK_ORDER.CHANGE_QQ_MAIN_BAOXIANG:
					this.platFormDeal.showQQMainBox(data);
					break;
				case SDK_ORDER.ALD_SEND_EVENT:
					this.platFormDeal.filterAldEvent(data);
					break;
				case SDK_ORDER.YUN_ZHI_REPORT_DATA:
					this.platFormDeal.YunZhiDataReport(data);
					break;
				case SDK_ORDER.HANDLER_RUN:
					if (!this.handler) return;
					if (this.needReplay) this.handler.once = false;
					if (this.handler.args) this.handler.args.unshift(data.type);
					else this.handler.args = [data.type];
					this.handler.runWith(this.handler.args);
					if (this.handler && !this.needReplay) {
						this.handler.recover();
						this.handler = null;
						this.needReplay = null;
					}
					break;
				case SDK_ORDER.SHOW_MSG:
					this.platFormDeal.filterShowMsg(data);
					break;
				case SDK_ORDER.REPORT_MONITOR:
					this.platFormDeal.reportMonitor();
					break;
				case SDK_ORDER.BARRAGE_WRODS_Change:
					this.platFormDeal.barrageWordChange(data);
					break;
			}
		}
		endVideo(info, res) {
			console.error(info);
			switch (info) {
				case 'notEnd':
					console.log('未播放完成');
					SDK.ins_.send(SDK_ORDER.HANDLER_RUN, {
						name: this.platFormMgr.plateFormName,
						type: false
					});
					break;
				case 'noAd':
					console.log('无广告，或者错误', res);
					SDK.ins_.send(SDK_ORDER.SHOW_MSG, {
						name: this.platFormMgr.plateFormName,
						text: '暂无广告,请稍后再试!'
					});
					SDK.ins_.send(SDK_ORDER.HANDLER_RUN, {
						name: this.platFormMgr.plateFormName,
						type: false
					});
					break;
				default:
					SDK.ins_.send(SDK_ORDER.HANDLER_RUN, {
						name: this.platFormMgr.plateFormName,
						type: true
					});
					break;
			}
			SoundMgr.Inst.isPass = true;
			Laya.MouseManager.enabled = true;
		}
		netTest() {
			let https = new Laya.HttpRequest();
			https.once(Laya.Event.ERROR, this, function () {
				SDK.ins_.send(SDK_ORDER.SHOW_MSG, {
					text: '网络状况不好，请稍候重试。'
				});
			});
			https.once(Laya.Event.COMPLETE, this, function () {
				console.log('网络状况良好');
			});
			// https.send('https://www.baidu.com/s?wd=1', '', 'get', 'text');
			https.send('', '', 'get', 'text');
		}
	}

	class PlatFormUserData {
		constructor() {
			this.city = '';
			this.province = '';
			this.qqAppId = '1110496396';
			this.code = '';
			this.unionid = '';
		}
	}

	class TestCLS extends BaseDeal {
		constructor() {
			super();
		}
		initPlatform(dealObj, version) {
			super.initPlatform(dealObj, []);
		}
		changeFoundAward(data, canShow) {
			let showWhat = this.showWhat();
			if (showWhat == 0) return;
			let adPoint = this.getAdPoint(10);
			let time = adPoint.value;
			if (showWhat == 2) time = this.getAdPoint(11).value;
			if (!MainRoleMgr.Inst) return;
			if (data.time) time = data.time;
			if (data.isShow) {
				this.foundData = data;
				Laya.timer.once(time, this, this.changeFoundAward, [
					data,
					true
				]);
				if (
					!MainRoleMgr.Inst.isRoleDie() &&
					canShow &&
					MainRoleMgr.Inst.isRoleDie() != null
				) {
					this.showWhatBaoXiang(data, showWhat);
				}
			} else {
				Laya.timer.clear(this, this.changeFoundAward);
			}
		}
		supriseBox(data) {
			let adPoint14 = this.getAdPoint(11);
			let closeSuprisedBaox = this.isInAarea(11) || !adPoint14.isOn;
			if (!closeSuprisedBaox) {
				console.error('=====>展示惊喜保险');
			}
		}
		showWhatBaoXiang(data, showWhat) {
			if (showWhat == 1) {
				console.error('发现奖励 ==========》触发');
			}
			if (showWhat == 2) {
				console.error('发现惊喜 ==========》触发');
				this.supriseBox(data);
			}
			if (showWhat == 3) {
			}
		}
		showWhat() {
			let adPoint = this.getAdPoint(10);
			let closeTreeChooseOne = this.isInAarea(10) || !adPoint.isOn;
			let adPoint14 = this.getAdPoint(11);
			let closeSuprisedBaox = this.isInAarea(11) || !adPoint14.isOn;
			if (closeTreeChooseOne && !closeSuprisedBaox) return 2;
			if (!closeTreeChooseOne && closeSuprisedBaox) return 1;
			if (!closeTreeChooseOne && !closeSuprisedBaox) return 3;
			return 0;
		}
	}

	class PlateFormMgr {
		constructor() {
			this.plateFormName = ' ';
			this.fileName = null;
			this.curVersion = '';
			this.initSDK();
			this.userData = new PlatFormUserData();
			this.initChannel();
		}
		initChannel() {
			this.jugdePlatFrom();
			const conf = SDKConfig.channelConf[this.plateFormName];
			console.error('平台：' + this.plateFormName);
			if (!conf) {
				console.log('无此channelName');
				return;
			}
			let DealObj = {
				adData: conf,
				curPlatForm: this.plateFormName,
				userData: this.userData,
				curVersion: this.curVersion,
				fileName: this.fileName
			};
			this.platformDeal.initPlatform(DealObj, this.userData);
			this.platformEventDeal = new PlatFormEventDeal(
				this,
				this.platformDeal
			);
		}
		jugdePlatFrom() {
			let configPlatfrom;
			this.plateFormName = 'web';
			this.platformDeal = null;
			for (let i = 0; i < SDKConfig.configPlateform.length; i++) {
				configPlatfrom = SDKConfig.configPlateform[i];
				if (
					configPlatfrom.judge ||
					configPlatfrom.plateform == SDKConfig.LOCAL_ON_OFF_TEST
				) {
					this.plateFormName = configPlatfrom.plateform;
					this.curVersion = configPlatfrom.curVersion;
					if (SDKConfig.LOCAL_ON_OFF_TEST)
						this.platformDeal = new TestCLS();
					else this.platformDeal = new configPlatfrom.deal();
					this.fileName = configPlatfrom.fileName;
				}
			}
		}
		initSDK() {
			let eventArr = [];
			let nameArr = Object.keys(SDK_ORDER);
			for (let i = nameArr.length / 2; i < nameArr.length; i++) {
				eventArr.push(SDK_ORDER[nameArr[i] + '']);
			}
			console.log('【注册一次】');
			SDK.ins_.register(
				eventArr,
				Laya.Handler.create(this, this.eventAccept)
			);
		}
		eventAccept(data) {
			if (data.name != this.plateFormName) return;
			if (data.sym == SDK_ORDER.NO_SDK_HANDLER) {
                YYGGames.showReward(()=>{
                    if (data.handler) data.handler.runWith(data.handler.args);
                });
				return;
			}
			if (!this.onMiniGame() && !SDKConfig.LOCAL_ON_OFF_TEST) {
				console.log('[不在小游戏平台]');
				if (data.handler) data.handler.runWith(data.handler.args);
				return;
			}
			this.eventDeal(data);
		}
		eventDeal(data) {
			switch (data.sym) {
				default:
					this.platformEventDeal.deal(data);
					break;
			}
		}
		onMiniGame() {
			return (
				Laya.Browser.window.wx ||
				Laya.Browser.window.qq ||
				Laya.Browser.window.tt ||
				Laya.Browser.window.qg
			);
		}
	}

	class UITips extends Laya.Sprite {
		constructor() {
			super();
			Laya.stage.addChild(this);
		}
		onAwake() {}
		onEnable() {
			this.zOrder = 10000;
			this.mouseThrough = true;
			SDK.ins_.register(
				[SDK_ORDER.TIPS_GAME],
				Laya.Handler.create(this, this.recept)
			);
		}
		recept(data) {
			switch (data.sym) {
				case SDK_ORDER.TIPS_GAME:
					this.showTipsCenter(data.text);
					break;
			}
		}
		showTipsCenter(str) {
			let lab = Laya.Pool.getItemByClass('labTips', Laya.Label);
			lab.removeSelf();
			lab.alpha = 0;
			lab.fontSize = 25;
			lab.font = 'Arial';
			lab.color = '#FFFFFF';
			lab.stroke = 2;
			lab.strokeColor = '#000000';
			lab.text = str;
			lab.width = 1000;
			lab.height = 200;
			lab.mouseThrough = true;
			lab.visible = true;
			lab.align = 'center';
			lab.anchorX = 0.5;
			lab.anchorY = 0.5;
			lab.x = GameConfig.viewWidth / 2;
			lab.y = GameConfig.viewHeight / 2 + 200;
			Laya.Tween.to(
				lab,
				{ y: GameConfig.viewHeight / 2, alpha: 1 },
				800,
				Laya.Ease.backInOut,
				Laya.Handler.create(this, this.wait, [lab])
			);
			this.addChild(lab);
		}
		wait(lab) {
			Laya.Tween.to(
				lab,
				{ y: GameConfig.viewHeight / 2 - 100, alpha: 0 },
				300,
				null,
				Laya.Handler.create(this, this.recover, [lab]),
				1300
			);
		}
		recover(lab) {
			Laya.Tween.clearAll(lab);
			lab.visible = false;
			lab.removeSelf();
			Laya.Pool.recover('labTips', lab);
		}
	}

	class GameUI extends ui.test.GameSceneUI {
		constructor() {
			super();
			this.rate = 0;
			this.isDown = false;
			this.clickPoint = new Laya.Point();
			Laya.stage.frameRate = Laya.Stage.FRAME_FAST;
			this.touchID = -2;
			this.AddMouseEvent();
		}
		AddMouseEvent() {
			this.on(Laya.Event.ADDED, this, this.onAdd);
			Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.MouseDown);
			// this.on(Laya.Event.MOUSE_MOVE, this, this.MouseMove);
			// this.on(Laya.Event.MOUSE_OUT, this, this.MouseOut);
			// this.on(Laya.Event.MOUSE_UP, this, this.MouseUp);
		}
		MouseUp(event) {
			if (this.touchID != -2 && event.touchId == this.touchID) {
				this.touchID = -2;
				this.isDown = false;
				Role.ins_.setDataByString('isRightMouseOn', this.isDown);
				SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
					name: 'toutiao',
					symReco: 'updataUI'
				});
				Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.MouseMove);
				this.MouseMove(event);
			}
		}
		MouseDown(event) {
            if(showUIFlag) return;
			if (this.touchID == -2) {
				if (Laya.stage.mouseX <= 500) return;
				this.touchID = event.touchId;
			}
			Role.ins_.setDataByString('isRightMouseOn', true);
			SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
				name: 'toutiao',
				symReco: 'updataUI'
			});
			this.isDown = true;
			Laya.MouseManager.instance.mouseMoveAccuracy = 2;
			this.clickPoint.setTo(
				Laya.MouseManager.instance.mouseX,
				Laya.MouseManager.instance.mouseY
			);
			Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.MouseMove);
			Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.MouseMove);
			Laya.stage.on(Laya.Event.MOUSE_UP, this, this.MouseUp);
			Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.MouseOut);
		}
		MouseMove(event) {
			if (
				this.isDown &&
				event.touchId != -2 &&
				event.touchId == this.touchID
			) {
				let movedis = new Laya.Point(
					Laya.MouseManager.instance.mouseX - this.clickPoint.x,
					Laya.MouseManager.instance.mouseY - this.clickPoint.y
				);
				MainRoleMgr.Inst.Rotate(movedis);
				this.clickPoint.setTo(
					Laya.MouseManager.instance.mouseX,
					Laya.MouseManager.instance.mouseY
				);
			}
		}
		MouseOut(event) {
			if (this.touchID != -2 && event.touchId == this.touchID) {
				this.touchID = -2;
				this.isDown = false;
				Role.ins_.setDataByString('isRightMouseOn', this.isDown);
				SDK.ins_.send(SDK_ORDER.HT_CHANGE_VIEDO_RECODE, {
					name: 'toutiao',
					symReco: 'updataUI'
				});
				Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.MouseMove);
				this.MouseMove(event);
			}
		}
		onAdd() {
			this.off(Laya.Event.ADDED, this, this.onAdd);
			GameLayer.sceneLayer = this;
			GameLayer.start();
			this.loadInitAll();
			this.width = GameConfig.viewWidth;
			this.height = GameConfig.viewHeight;
		}
		loadInitAll() {
			UISystem.Inst.CreateWindowView(UILoadingView, [
				Laya.Handler.create(this, this.loadingInit),
				Laya.Handler.create(this, this.enterScene)
			]);
		}
		loadingInit() {
			LoadQueue.Inst.loadBin(
				UrlUtils.GetTemplateUrl('ExcelsData'),
				Laya.Handler.create(this, this.onLoadTemplate)
			);
			LoadQueue.Inst.loadUI(UrlUtils.UI + 'common');
			LoadQueue.Inst.loadUI(UrlUtils.UI + 'UIPlatform');
		}
		onLoadTemplate(bytes) {
			InitTpl.InitTpls(bytes);
			SoundMgr.Inst.playMusic(1);
		}
		enterScene() {
            console.error("loading完");
			fgui.UIPackage.addPackage(UrlUtils.UI + 'common');
			Logger.log(this, 'loading完成');
			StorageUtils.Inst.initStorage(
				Laya.Handler.create(null, function () {
					new PlateFormMgr();
					new UITips();
					UISystem.Inst.CreateWindowView(UIGameMainView);
				})
			);
			Role.ins_.initRank();
		}
		AddScene(scene) {}
	}

	class GameConfig {
		constructor() {}
		static init() {
			var reg = Laya.ClassUtils.regClass;
			reg('script/GameUI.ts', GameUI);
		}
	}
	GameConfig.width = 1280;
	GameConfig.height = 720;
	GameConfig.scaleMode = "showall";
	GameConfig.screenMode = "none";
	GameConfig.alignV = 'middle';
	GameConfig.alignH = 'center';
	GameConfig.startScene = 'test/GameScene.scene';
	GameConfig.sceneRoot = '';
	GameConfig.debug = false;
	GameConfig.stat = false;
	GameConfig.physicsDebug = false;
	GameConfig.exportSceneToJson = true;
	GameConfig.viewSize = 8;
	GameConfig.propDic = 2;
	GameConfig.scale = 1;
	GameConfig.viewWidth = 1280;
	GameConfig.viewHeight = 720;
	GameConfig.Font_Normal = 'Microsoft YaHei';
	GameConfig.isIos = false;
	GameConfig.isHtShow = false;
	GameConfig.isTest = false;
	GameConfig.needRayTest = true;
	GameConfig.init();

	class Main {
		constructor() {
            const userAgent = window.navigator.userAgent;
            if (userAgent.indexOf("OS 15_1") > -1 || userAgent.indexOf("OS 15_0_2") > -1) {
                Config.useWebGL2 = false;
            }
			// if (Laya.Browser.onVVMiniGame)
			// 	Laya.Browser.window.optConfig.disableBatchGLCommandsToNative();

			if (window['Laya3D'])
				Laya3D.init(GameConfig.width, GameConfig.height);
			else 
                Laya.init(GameConfig.width, GameConfig.height, Laya['WebGL']);
			Laya['Physics'] && Laya['Physics'].enable();
			Laya['DebugPanel'] && Laya['DebugPanel'].enable();
			Laya.stage.scaleMode = GameConfig.scaleMode;
			Laya.stage.screenMode = GameConfig.screenMode;
			Laya.stage.alignV = GameConfig.alignV;
			Laya.stage.alignH = GameConfig.alignH;
			Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
			Laya.MouseManager.multiTouchEnabled = true;
			if (
				GameConfig.debug ||
				Laya.Utils.getQueryString('debug') == 'true'
			)
				Laya.enableDebugPanel();
			if (GameConfig.physicsDebug && Laya['PhysicsDebugDraw'])
				Laya['PhysicsDebugDraw'].enable();
			if (GameConfig.stat) Laya.Stat.show();
			else {
			}
			Laya.alertGlobalError = true;
			let url = 'version.json';
            Laya.ResourceVersion.enable(null, Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
		}
		onVersionLoaded() {
            YYGGames.init("Granny-Halloween-House", () => {
                YYGGames.icon.top = 5;
                YYGGames.icon.right = 5;
                YYGGames.icon.scaleX = 0.3;
                YYGGames.icon.scaleY = 0.3;

                YYGGames.gameBox.scaleX = 0.6;
                YYGGames.gameBox.scaleY = 0.6;
                YYGGames.gameBox.visible = false;

                YYGGames.gameBox.game1.left = 240;
                YYGGames.gameBox.game2.left = 1700;
                YYGGames.gameBox.bottom = 20;

                YYGGames.gameBanner.scaleX = 0.5;
                YYGGames.gameBanner.scaleY = 0.5;
                YYGGames.gameBanner.bottom = 10;
                YYGGames.gameBanner.right = 0;
                YYGGames.gameBanner.visible = false;
                
                Laya.loader.load("js/data.json", Laya.Handler.create(this, (e) => {
                    GAMEDATA = e;
                    Laya.loader.load([
                        "game/logo.png"
                    ], Laya.Handler.create(this, () => {
                        Laya.AtlasInfoManager.enable('fileconfig.json', Laya.Handler.create(this, this.onConfigLoaded));
                    }));
                }));
            });
		}
		onConfigLoaded() {
			GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
			GameConfig.isIos = Laya.Browser.onIOS;
		}
	}
	new Main();
})();
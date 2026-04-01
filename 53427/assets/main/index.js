window.__require = (function e(t, n, o) {
	function i(r, s) {
		if (!n[r]) {
			if (!t[r]) {
				var c = r.split('/');
				if (((c = c[c.length - 1]), !t[c])) {
					var l = 'function' == typeof __require && __require;
					if (!s && l) return l(c, !0);
					if (a) return a(c, !0);
					throw new Error("Cannot find module '" + r + "'");
				}
				r = c;
			}
			var d = (n[r] = { exports: {} });
			t[r][0].call(
				d.exports,
				function (e) {
					return i(t[r][1][e] || e);
				},
				d,
				d.exports,
				e,
				t,
				n,
				o
			);
		}
		return n[r].exports;
	}
	for (
		var a = 'function' == typeof __require && __require, r = 0;
		r < o.length;
		r++
	)
		i(o[r]);
	return i;
})(
	{
		BaiDuAppBoxAd: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, 'c6e42KsrOlLSptPydWfO1oC', 'BaiDuAppBoxAd'),
					cc._RF.pop();
			},
			{}
		],
		ExpressAdComponent: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, '24b7am8nR9O/qdQQ3YjyY88', 'ExpressAdComponent');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyControl'),
					s = e('./LyUtils'),
					c = cc._decorator,
					l = c.ccclass;
				c.property;
				var d = (function (e) {
					function t() {
						return (null !== e && e.apply(this, arguments)) || this;
					}
					return (
						i(t, e),
						(t.prototype.onEnable = function () {
							var e = this;
							setTimeout(function () {
								e.openExpressAd();
							}, 50);
						}),
						(t.prototype.openExpressAd = function () {
							var e = s.LyUtils.getNativeAdMsg(918, 740, 5);
							r.LyControl.showExpressAd(
								e.width,
								e.height,
								e.posY
							);
						}),
						(t.prototype.onDisable = function () {
							r.LyControl.closeExpressAd();
						}),
						a([l], t)
					);
				})(cc.Component);
				(n.default = d), cc._RF.pop();
			},
			{ './LyControl': 'LyControl', './LyUtils': 'LyUtils' }
		],
		FeedbackBtn: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '0ed43F2Q7BIIaeWgrD4+OH3', 'FeedbackBtn'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						onLoad: function () {
							var e = !0;
							ly.queryPlatform &&
								'xiaomiAd' == ly.queryPlatform() &&
								(e = !1),
								(this.node.active = e);
						},
						start: function () {},
						onClickBtn: function () {
							ly.openFeedback();
						}
					}),
					cc._RF.pop();
			},
			{}
		],
		LNGcommon: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '51145ovcJtPpp2TgV5sVdNt', 'LNGcommon'),
					cc._RF.pop();
			},
			{}
		],
		LyConcealAdConfig: [
			function (e, t, n) {
				'use strict';
				cc._RF.push(t, '437bepVrP9ATpuJ5IMA8Yvy', 'LyConcealAdConfig'),
					Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.LyConcealAdConfig = void 0);
				var o = (function () {
					function e() {}
					return (
						(e.Configs = [
							'IsOpenBanner',
							'EnterSetting',
							'ExitSetting',
							'ShowVideoLayerDis',
							'ShowVideoLayer',
							'showVideoLayerCount',
							'EnterFishLayer',
							'ExitFishLayer',
							'VideoBuyFish',
							'ClickSelectFish',
							'FishLockDemand',
							'ClickJumpLv',
							'ClickResetLv',
							'EnterBoxLayer',
							'ExitBoxLayer',
							'GetBoxKey',
							'EnterEndLayer',
							'ClickNextLvEndLayer',
							'ClickAddCoinEndLayer',
							'ClickJumlLvEndLayer',
							'ClickAgainEndLayer',
							'EndShowVideoCount',
							'EnterLockFishLayer',
							'ExitLockFishLayer',
							'ClickVideoLockFish',
							'EnterAddCoinLayer',
							'ExitAddCoinLayer',
							'ClickAddCoin',
							'EnterGameAd'
						]),
						(e.IsOpenBanner = {
							name: 'isOpenBanner',
							defValue: '1',
							des: '1\u8868\u793a\u6253\u5f00 0\u8868\u793a\u5173\u95ed \u662f\u5426\u6253\u5f00banner'
						}),
						(e.EnterSetting = {
							name: 'enterSetting',
							defValue: '0+0',
							des: '\u8fdb\u5165\u8bbe\u7f6e\u9875\u9762'
						}),
						(e.ExitSetting = {
							name: 'exitSetting',
							defValue: '0+0',
							des: '\u9000\u51fa\u8bbe\u7f6e\u9875\u9762'
						}),
						(e.ShowVideoLayerDis = {
							name: 'showVideoLayerDis',
							defValue: '0',
							des: '\u6bcf\u9694\u51e0\u5173\u5c55\u793a\u9690\u85cf\u89c6\u9891\u8282\u70b9'
						}),
						(e.ShowVideoLayer = {
							name: 'showVideoLayer',
							defValue: '0+0',
							des: '\u5c55\u793a\u7684\u9690\u85cf\u89c6\u9891\u8282\u70b9\u7684\u7c7b\u578b\u548c\u6982\u7387'
						}),
						(e.showVideoLayerCount = {
							name: 'showVideoLayerCount',
							defValue: '0',
							des: '\u6bcf\u4e00\u5173\u53ef\u5c55\u793a\u7684\u6b21\u6570'
						}),
						(e.EnterFishLayer = {
							name: 'enterFishLayer',
							defValue: '0+0',
							des: '\u8fdb\u5165\u9c7c\u7c7b\u9875\u9762'
						}),
						(e.ExitFishLayer = {
							name: 'exitFishLayer',
							defValue: '0+0',
							des: '\u9000\u51fa\u9c7c\u7c7b\u9875\u9762'
						}),
						(e.VideoBuyFish = {
							name: 'videoBuyFish',
							defValue: '2+100',
							des: '\u89c6\u9891\u8d2d\u4e70\u9c7c'
						}),
						(e.ClickSelectFish = {
							name: 'clickSelectFish',
							defValue: '0+0',
							des: '\u70b9\u51fb\u9009\u62e9\u9c7c'
						}),
						(e.FishLockDemand = {
							name: 'fishLockDemand',
							defValue: '1',
							des: '\u89e3\u9501\u9c7c\u7684\u8981\u6c42'
						}),
						(e.ClickJumpLv = {
							name: 'clickJumpLv',
							defValue: '2+100',
							des: '\u70b9\u51fb\u8df3\u8fc7\u5173\u5361'
						}),
						(e.ClickResetLv = {
							name: 'clickResetLv',
							defValue: '2+100',
							des: '\u70b9\u51fb\u91cd\u7f6e\u5173\u5361'
						}),
						(e.EnterBoxLayer = {
							name: 'enterBoxLayer',
							defValue: '0+0',
							des: '\u8fdb\u5165\u5b9d\u7bb1\u9875\u9762'
						}),
						(e.ExitBoxLayer = {
							name: 'exitBoxLayer',
							defValue: '0+0',
							des: '\u9000\u51fa\u5b9d\u7bb1\u9875\u9762'
						}),
						(e.GetBoxKey = {
							name: 'getBoxKey',
							defValue: '2+100',
							des: '\u83b7\u53d6\u5b9d\u7bb1\u94a5\u5319'
						}),
						(e.EnterEndLayer = {
							name: 'enterEndLayer',
							defValue: '0+0',
							des: '\u8fdb\u5165\u7ed3\u7b97\u9875\u9762'
						}),
						(e.ClickNextLvEndLayer = {
							name: 'clickNextLvEndLayer',
							defValue: '0+0',
							des: '\u7ed3\u7b97\u9875\u9762\u70b9\u4e0b\u4e00\u5173'
						}),
						(e.ClickAddCoinEndLayer = {
							name: 'clickAddCoinEndLayer',
							defValue: '2+100',
							des: '\u7ed3\u7b97\u9875\u9762\u70b9\u52a0\u91d1\u5e01'
						}),
						(e.ClickJumlLvEndLayer = {
							name: 'clickJumlLvEndLayer',
							defValue: '2+100',
							des: '\u7ed3\u7b97\u9875\u9762\u70b9\u8df3\u5173'
						}),
						(e.ClickAgainEndLayer = {
							name: 'clickAgainEndLayer',
							defValue: '0+0',
							des: '\u7ed3\u7b97\u9875\u9762\u70b9\u91cd\u6765'
						}),
						(e.EndShowVideoCount = {
							name: 'endShowVideoCount',
							defValue: '99',
							des: '\u6bcf\u9694\u51e0\u5173\u5c55\u793a\u7ed3\u675f\u9875\u9762\u7684\u6fc0\u52b1\u89c6\u9891'
						}),
						(e.EnterLockFishLayer = {
							name: 'enterLockFishLayer',
							defValue: '0+0',
							des: '\u8fdb\u5165\u89e3\u9501\u9c7c\u9875\u9762'
						}),
						(e.ExitLockFishLayer = {
							name: 'exitLockFishLayer',
							defValue: '0+0',
							des: '\u9000\u51fa\u89e3\u9501\u9c7c\u9875\u9762'
						}),
						(e.ClickVideoLockFish = {
							name: 'clickVideoLockFish',
							defValue: '2+100',
							des: '\u89e3\u9501\u9c7c\u9875\u9762\u70b9\u89c6\u9891\u89e3\u9501'
						}),
						(e.EnterAddCoinLayer = {
							name: 'enterAddCoinLayer',
							defValue: '0+0',
							des: '\u8fdb\u5165\u52a0\u91d1\u5e01\u9875\u9762'
						}),
						(e.ExitAddCoinLayer = {
							name: 'exitAddCoinLayer',
							defValue: '0+0',
							des: '\u9000\u51fa\u52a0\u91d1\u5e01\u9875\u9762'
						}),
						(e.ClickAddCoin = {
							name: 'clickAddCoin',
							defValue: '2+0',
							des: '\u70b9\u51fb\u589e\u52a0\u91d1\u5e01'
						}),
						(e.StarGame = {
							name: 'StarGame',
							defValue: '0+0',
							des: '\u5f00\u59cb\u6e38\u620f'
						}),
						(e.EnterGameAd = {
							name: 'enterGameAd',
							defValue: '0+0',
							des: '\u8fdb\u5165\u6e38\u620f\u64ad\u653e\u7684\u5e7f\u544a'
						}),
						(e.EndShowBlock = {
							name: 'endShowBlock',
							defValue: '0',
							des: '\u7ed3\u675f\u9875\u9762\u662f\u5426\u6253\u5f00\u539f\u751f\u5e7f\u544a  1\u8868\u793a\u6253\u5f00  0\u8868\u793a\u5173\u95ed'
						}),
						(e.yuans1 = {
							name: 'yuans1',
							defValue: '0+0+0+0',
							des: '\u8bbe\u7f6e\u754c\u9762'
						}),
						(e.yuans2 = {
							name: 'yuans2',
							defValue: '0+0+0+0',
							des: '\u6210\u529f\u5931\u8d25\u7ed3\u7b97\u754c\u9762'
						}),
						(e.yuans3 = {
							name: 'yuans3',
							defValue: '0+0+0+0',
							des: '\u83b7\u5f97\u91d1\u5e01\u754c\u9762'
						}),
						(e.yuans4 = {
							name: 'yuans4',
							defValue: '0+0+0+0',
							des: '\u65b0\u9c7c\u89e3\u9501\u754c\u9762'
						}),
						(e.showIntersIntervalTime = {
							name: 'showIntersIntervalTime',
							defValue: '0',
							des: '\u5c55\u793a\u63d2\u5c4f\u5e7f\u544a\u95f4\u9694\u65f6\u95f4 \u5355\u4f4d\uff1a\u79d2'
						}),
						(e.autoRefreshBannerTime = {
							name: 'autoRefreshBannerTime',
							defValue: '60',
							des: '\u81ea\u52a8\u5237\u65b0banner\u5e7f\u544a\u95f4\u9694\u65f6\u95f4 \u5355\u4f4d\uff1a\u79d2'
						}),
						(e.delayShowIntersAdTime = {
							name: 'delayShowIntersAdTime',
							defValue: '0',
							des: '\u5ef6\u8fdf\u5c55\u793a\u63d2\u5c4f\u65f6\u95f4 \u9ed8\u8ba4\uff1a0 \u5355\u4f4d\uff1a\u6beb\u79d2'
						}),
						(e.autoRefreshIntersIntervalTime = {
							name: 'autoRefreshIntersIntervalTime',
							defValue: '-1',
							des: '\u81ea\u52a8\u5c55\u793a\u63d2\u5c4f\u5e7f\u544a\u95f4\u9694\u65f6\u95f4\xa0\u5355\u4f4d\uff1a\u79d2, -1\u8868\u793a\u5173\u95ed'
						}),
						(e.custom_isOpen = {
							name: 'custom_isOpen',
							defValue: '1',
							des: '\u539f\u751f\u6a21\u677f\u5e7f\u544a 1\u4e3a\u5f00\u542f 0\u4e3a\u5173\u95ed'
						}),
						(e.autoRefreshBannerIntervalTime = {
							name: 'autoRefreshBannerIntervalTime',
							defValue: '-1'
						}),
						e
					);
				})();
				(n.LyConcealAdConfig = o), cc._RF.pop();
			},
			{}
		],
		LyConfig: [
			function (e, t, n) {
				'use strict';
				cc._RF.push(t, '1a942Jd2BxH9bILSu7lGEMF', 'LyConfig');
				var o,
					i = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.LyConfig = n.LIB_TYPE = void 0);
				var a,
					r = cc._decorator,
					s = r.ccclass;
				r.property,
					((a = o = n.LIB_TYPE || (n.LIB_TYPE = {})).CHANNEL =
						'channel'),
					(a.LIANYUN = 'lianyun'),
					(a.MINI = 'mini');
				var c = (function () {
					function e() {}
					return (
						(e.GAME_NAME = 'saveFish'),
						(e.LY_LIB_TYPE = o.MINI),
						(e.IS_LOADING = !1),
						(e.IS_DEBUG = !1),
						(e.AD_NAME = {
							BANNER: 'banner',
							INTERS_Suspend: 'inters',
							INTERS_Win: 'inters',
							INTERS_Gk: 'inters',
							VIDEO: 'video',
							VIDEO_Tips: 'video',
							VIDEO_Skip: 'video',
							VIDEO_Skin: 'video',
							VIDEO_Unlock: 'video',
							SPLASH: 'splash',
							INTERSTITIAL: 'inters',
							NATIVE_RE_FL: 'native_re_fl',
							NATIVE_RE_NINE: 'native_re_nine',
							NATIVE_RE_BANNER: 'native_re_banner',
							NATIVE_ICON: 'native_icon',
							NATIVE_BIG_PIC: 'native_big_pic',
							NATIVE_SMALL_PIC: 'native_small_pic',
							NATIVE_MORE_PIC: 'native_more_pic',
							NATIVE_BOX: 'native_box',
							CUSTOM_ICON: 'custom_icon',
							CUSTOM_ICON2: 'custom_icon2',
							CUSTOM_ICON3: 'custom_icon3',
							CUSTOM_ICON4: 'custom_icon4',
							CUSTOM_BANNER1: 'custom_banner1',
							CUSTOM_INTER: 'Custom_inter',
							CUSTOM_EXPRESS: 'Custom_express'
						}),
						(e.AD_NAME2 = {
							BANNER: 'banner',
							INTERS_Suspend: 'game_suspend',
							INTERS_Win: 'game_win',
							INTERS_Gk: 'game_gk',
							VIDEO_Double: 'game_double',
							VIDEO_Blood: 'game_blood',
							VIDEO_cj: 'game_cj',
							VIDEO_Hb: 'game_hb',
							VIDEO_Task: 'game_task',
							VIDEO_Triple: 'game_triple',
							VIDEO_Fh: 'game_fh',
							SPLASH: ''
						}),
						(e.AD_KIND = { VIDEO: 0, INTER: 1, BANNER: 2 }),
						(e.NATIVE_BTN_POS = { TOP: 0, BOTTOM: 1 }),
						(e.INTER_TYPE = {
							NATIVE_PIC: 600,
							NATIVE_VIDEO: 800,
							NORMAL_PIC: 1e3,
							NORMAL_VIDEO: 1001
						}),
						(e.PlatformDefine = {
							UnKnown: 0,
							Web: 1,
							H5: 2,
							WeChatGame: 12,
							BaiduGame: 14,
							OppoQuickGame: 100,
							VivoQuickGame: 101,
							QQminiGame: 104
						}),
						i([s], e)
					);
				})();
				(n.LyConfig = c), cc._RF.pop();
			},
			{}
		],
		LyControl: [
			function (e, t, n) {
				'use strict';
				cc._RF.push(t, '76ff32lWPxFlId8627JFzbX', 'LyControl'),
					Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.LyControl = void 0);
				var o = e('./gameSaveFishGameData'),
					i = e('./gameSaveFishGameUtils'),
					a = e('./VivoAd'),
					r = e('./LyConcealAdConfig'),
					s = e('./LyConfig'),
					c = e('./LyProbability'),
					l = e('./MiniGameControl'),
					d = e('./NativeChannelControl'),
					u = e('./NativeLianYunControl'),
					f = (function () {
						function e() {}
						return (
							(e.initLyLib = function () {
								s.LyConfig.LY_LIB_TYPE == s.LIB_TYPE.CHANNEL
									? d.NativeChannelControl.init()
									: s.LyConfig.LY_LIB_TYPE ==
									  s.LIB_TYPE.LIANYUN
									? u.NativeLianYunControl.init()
									: s.LyConfig.LY_LIB_TYPE ==
											s.LIB_TYPE.MINI &&
									  l.MiniGameControl.init();
							}),
							(e.isAdReady = function (e, t) {
								return (
									void 0 === t && (t = null),
									!(
										!cc.sys.isBrowser &&
										!s.LyConfig.IS_DEBUG
									) ||
										(s.LyConfig.LY_LIB_TYPE ==
										s.LIB_TYPE.MINI
											? l.MiniGameControl.isAdReady(e)
											: s.LyConfig.LY_LIB_TYPE ==
											  s.LIB_TYPE.CHANNEL
											? d.NativeChannelControl.isAdReady(
													e,
													t
											  )
											: s.LyConfig.LY_LIB_TYPE ==
											  s.LIB_TYPE.LIANYUN
											? u.NativeLianYunControl.isAdReady(
													e,
													t
											  )
											: void 0)
								);
							}),
							(e.openAd = function (e, t, n) {
								void 0 === t && (t = null),
									void 0 === n && (n = null),
									cc.sys.isBrowser || s.LyConfig.IS_DEBUG
										? 'function' == typeof n && n(!0)
										: s.LyConfig.LY_LIB_TYPE ==
										  s.LIB_TYPE.CHANNEL
										? d.NativeChannelControl.openAd(e, t, n)
										: s.LyConfig.LY_LIB_TYPE ==
										  s.LIB_TYPE.MINI
										? l.MiniGameControl.openAd(e, t, n)
										: u.NativeLianYunControl.openAd(
												e,
												t,
												n
										  );
							}),
							(e.openInterAd = function (e, t) {
								s.LyConfig.LY_LIB_TYPE == s.LIB_TYPE.CHANNEL
									? d.NativeChannelControl.openInterAd(e, t)
									: s.LyConfig.LY_LIB_TYPE ==
									  s.LIB_TYPE.LIANYUN
									? u.NativeLianYunControl.openInterAd(e, t)
									: s.LyConfig.LY_LIB_TYPE ==
											s.LIB_TYPE.MINI &&
									  l.MiniGameControl.openInterAd(e, t);
							}),
							(e.closeAd = function (e) {
								void 0 === e && (e = null),
									s.LyConfig.LY_LIB_TYPE == s.LIB_TYPE.CHANNEL
										? d.NativeChannelControl.closeAd(e)
										: s.LyConfig.LY_LIB_TYPE ==
										  s.LIB_TYPE.LIANYUN
										? u.NativeLianYunControl.closeAd(e)
										: s.LyConfig.LY_LIB_TYPE ==
												s.LIB_TYPE.MINI &&
										  l.MiniGameControl.closeAd(e);
							}),
							(e.showInterAd = function (e, t, n, o, i) {
								void 0 === e && (e = null),
									void 0 === t && (t = null),
									void 0 === n && (n = null),
									void 0 === o && (o = null),
									void 0 === i && (i = null),
									s.LyConfig.LY_LIB_TYPE == s.LIB_TYPE.MINI &&
										l.MiniGameControl.showInterAd(
											e,
											t,
											n,
											o,
											i
										);
							}),
							(e.initShowVideoNodeMsg = function () {
								this.NOW_SHOW_VIDEO_COUNT = 0;
							}),
							(e.obtainGameControlConf = function (e) {
								var t = e.defValue;
								return (
									s.LyConfig.LY_LIB_TYPE == s.LIB_TYPE.CHANNEL
										? (t = ly.obtainGameControlConf(
												e.name,
												e.defValue
										  ))
										: s.LyConfig.LY_LIB_TYPE ==
												s.LIB_TYPE.MINI &&
										  (t =
												l.MiniGameControl.obtainGameControlConf(
													e
												)),
									t
								);
							}),
							(e.openConcealAd = function (e, t, n, o, i) {
								void 0 === t && (t = null),
									void 0 === n && (n = null),
									void 0 === o && (o = null),
									void 0 === i && (i = null);
								var a =
										this.obtainGameControlConf(e).split(
											'+'
										),
									r = a[0],
									l = a[1],
									d = a[2],
									u = a[3];
								if (
									c.LyProbability.getResult(
										e.name,
										parseInt(l)
									)
								)
									if (
										('function' == typeof o && o(!0),
										-1 != r.indexOf('0'))
									)
										console.error(
											'\u4e0d\u8d70\u5e7f\u544a'
										),
											'function' == typeof t && t(!0);
									else if (-1 != r.indexOf('1')) {
										var f =
											i && i.interAdType
												? i.interAdType
												: null;
										this.showInterAd(t, n, d, u, f);
									} else
										-1 != r.indexOf('2')
											? (console.error(
													'\u6fc0\u52b1\u89c6\u9891'
											  ),
											  YYGGames.rewardReady
													? YYGGames.showReward(
															function () {
																t(e);
															}
													  )
													: (n(),
													  YYGGames.showTip(
															'No Available Video'
													  )))
											: '4' == r &&
											  this.showMiniExpressAd(
													s.LyConfig.AD_NAME
														.CUSTOM_EXPRESS,
													d,
													u
											  );
							}),
							(e.showMiniExpressAd = function (e, t, n) {
								s.LyConfig.LY_LIB_TYPE == s.LIB_TYPE.MINI &&
									l.MiniGameControl.showMiniExpressAd(
										e,
										t,
										n
									);
							}),
							(e.checkShowVideoNode = function () {
								var e = this,
									t = o.default.NOW_ALL_PLAY_LV,
									n = this.getOnceConcealValue(
										r.LyConcealAdConfig.ShowVideoLayerDis
									),
									i = this.getOnceConcealValue(
										r.LyConcealAdConfig.showVideoLayerCount
									),
									a = this.NOW_SHOW_VIDEO_COUNT;
								console.log('alreadyShowCount = ', a),
									(t - 1) % n == 0 &&
										a < i &&
										((this.IS_SHOW_VIDEO_LAYER = !0),
										this.openConcealAd(
											r.LyConcealAdConfig.ShowVideoLayer,
											function () {
												(e.IS_SHOW_VIDEO_LAYER = !1),
													(e.NOW_SHOW_VIDEO_COUNT += 1);
											},
											function () {
												e.IS_SHOW_VIDEO_LAYER = !1;
											}
										));
							}),
							(e.getOnceConcealValue = function (e) {
								var t = this.obtainGameControlConf(e);
								return parseInt(t);
							}),
							(e.checkIsVideo = function (t) {
								var n = { name: t, defValue: '2+100' };
								return (
									'2' ==
									e.obtainGameControlConf(n).split('+')[0]
								);
							}),
							(e.destoryNativeAd = function (t) {
								e.getPlatformType() ==
									s.LyConfig.PlatformDefine.VivoQuickGame &&
									a.VivoAd.destoryAd(t);
							}),
							(e.loadExpressAd = function () {
								s.LyConfig.LY_LIB_TYPE == s.LIB_TYPE.CHANNEL
									? d.NativeChannelControl.loadExpressAd()
									: s.LyConfig.LY_LIB_TYPE ==
											s.LIB_TYPE.LIANYUN &&
									  u.NativeLianYunControl.loadExpressAd();
							}),
							(e.showExpressAd = function (t, n, o, i) {
								void 0 === i &&
									(i = s.LyConfig.NATIVE_BTN_POS.BOTTOM),
									e._isExpressAdShow ||
										(console.log(
											'\u6253\u5f00\u539f\u751f\u5e7f\u544a'
										),
										(e._isExpressAdShow = !0),
										s.LyConfig.LY_LIB_TYPE ==
										s.LIB_TYPE.CHANNEL
											? d.NativeChannelControl.showExpressAd(
													t,
													n,
													o,
													i
											  )
											: s.LyConfig.LY_LIB_TYPE ==
													s.LIB_TYPE.LIANYUN &&
											  u.NativeLianYunControl.showExpressAd());
							}),
							(e.closeExpressAd = function () {
								e._isExpressAdShow &&
									(console.log(
										'\u5173\u95ed\u539f\u751f\u5e7f\u544a'
									),
									(e._isExpressAdShow = !1),
									s.LyConfig.LY_LIB_TYPE == s.LIB_TYPE.CHANNEL
										? d.NativeChannelControl.closeExpressAd()
										: s.LyConfig.LY_LIB_TYPE ==
												s.LIB_TYPE.LIANYUN &&
										  u.NativeLianYunControl.closeExpressAd());
							}),
							(e.getScreeSize = function () {
								if (s.LyConfig.LY_LIB_TYPE == s.LIB_TYPE.MINI)
									return l.MiniGameControl.getScreenSize();
							}),
							(e.loadStageDataForFile = function (e) {
								s.LyConfig.LY_LIB_TYPE == s.LIB_TYPE.MINI &&
									l.MiniGameControl.loadStageDataForFile(e);
							}),
							(e.getPlatformType = function () {
								var e = s.LyConfig.PlatformDefine.UnKnown;
								return (
									'object' == typeof qq
										? (e =
												s.LyConfig.PlatformDefine
													.QQminiGame)
										: 'object' == typeof qg
										? (e =
												qg.getProvider &&
												'OPPO' == qg.getProvider()
													? s.LyConfig.PlatformDefine
															.OppoQuickGame
													: s.LyConfig.PlatformDefine
															.VivoQuickGame)
										: 'object' == typeof wx &&
										  (e =
												s.LyConfig.PlatformDefine
													.WeChatGame),
									e
								);
							}),
							(e.showProtocalUI = function () {
								i.default.loadBundleRes(
									'gameSaveFishResources',
									'common/protocalHallLayer',
									function (e) {
										var t = cc.instantiate(e);
										cc.find('Canvas').parent.addChild(t),
											(t.zIndex = 500);
									},
									cc.Prefab
								);
							}),
							(e.showUserProLayer = function () {
								s.LyConfig.LY_LIB_TYPE == s.LIB_TYPE.MINI
									? i.default.loadBundleRes(
											'gameSaveFishResources',
											'common/userProShowLayer',
											function (e) {
												var t = cc.instantiate(e);
												cc
													.find('Canvas')
													.parent.addChild(t),
													(t.zIndex = 502);
											},
											cc.Prefab
									  )
									: ly.openUserAgreement();
							}),
							(e.showPrivateProLayer = function () {
								s.LyConfig.LY_LIB_TYPE == s.LIB_TYPE.MINI
									? i.default.loadBundleRes(
											'gameSaveFishResources',
											'common/privateShowLayer',
											function (e) {
												var t = cc.instantiate(e);
												cc
													.find('Canvas')
													.parent.addChild(t),
													(t.zIndex = 501);
											},
											cc.Prefab
									  )
									: ly.openPrivacyPolicy();
							}),
							(e.showProtocal = function (t) {
								void 0 === t && (t = null),
									e.getLocalNeedShowProtocal() &&
										e.getPlatformType() ==
											s.LyConfig.PlatformDefine
												.QQminiGame &&
										e.showProtocalUI();
							}),
							(e.getLocalNeedShowProtocal = function () {
								var e = s.LyConfig.GAME_NAME + '_showProtocal',
									t = cc.sys.localStorage.getItem(e),
									n = !0;
								return t && t.length > 0 && (n = !1), n;
							}),
							(e.setIsShowProtocal = function () {
								var e = s.LyConfig.GAME_NAME + '_showProtocal';
								cc.sys.localStorage.setItem(e, 'true');
							}),
							(e.NOW_SHOW_VIDEO_COUNT = 0),
							(e.IS_SHOW_VIDEO_LAYER = !1),
							(e._isExpressAdShow = !1),
							e
						);
					})();
				(n.LyControl = f), cc._RF.pop();
			},
			{
				'./LyConcealAdConfig': 'LyConcealAdConfig',
				'./LyConfig': 'LyConfig',
				'./LyProbability': 'LyProbability',
				'./MiniGameControl': 'MiniGameControl',
				'./NativeChannelControl': 'NativeChannelControl',
				'./NativeLianYunControl': 'NativeLianYunControl',
				'./VivoAd': 'VivoAd',
				'./gameSaveFishGameData': 'gameSaveFishGameData',
				'./gameSaveFishGameUtils': 'gameSaveFishGameUtils'
			}
		],
		LyProbability: [
			function (e, t, n) {
				'use strict';
				cc._RF.push(t, '32f91Uf2EBH+7fvvUsZzLIy', 'LyProbability');
				var o = function (e, t, n, o) {
					var i,
						a = arguments.length,
						r =
							a < 3
								? t
								: null === o
								? (o = Object.getOwnPropertyDescriptor(t, n))
								: o;
					if (
						'object' == typeof Reflect &&
						'function' == typeof Reflect.decorate
					)
						r = Reflect.decorate(e, t, n, o);
					else
						for (var s = e.length - 1; s >= 0; s--)
							(i = e[s]) &&
								(r =
									(a < 3
										? i(r)
										: a > 3
										? i(t, n, r)
										: i(t, n)) || r);
					return a > 3 && r && Object.defineProperty(t, n, r), r;
				};
				Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.LyProbability = void 0);
				var i = cc._decorator.ccclass,
					a = (function () {
						function e() {}
						return (
							(e.getResult = function () {
								return !0;
							}),
							(e.getMax = function (e) {
								var t = Math.max.apply(
									Math,
									e.map(function (e) {
										return e.num;
									})
								);
								for (var n in (console.log(t), e))
									if (e[n].num == t) return e[n];
							}),
							(e.staticWeights = {}),
							(e.dynamicWeights = {}),
							(e.max = 100),
							o([i], e)
						);
					})();
				(n.LyProbability = a), cc._RF.pop();
			},
			{}
		],
		LyUtils: [
			function (e, t, n) {
				'use strict';
				cc._RF.push(t, '1b783MdqI5JSZvkAHJyDg/M', 'LyUtils'),
					Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.LyUtils = void 0),
					e('./gameSaveFishViewControl');
				var o = e('./LyConcealAdConfig'),
					i = e('./LyConfig'),
					a = e('./LyControl'),
					r = (function () {
						function e() {}
						return (
							(e.getNativeAdMsg = function (e, t, n) {
								var o = cc.find('Canvas'),
									i = o.width,
									a = o.height,
									r = t / e,
									s = Math.floor((e / i) * 1e3);
								return {
									width: s,
									height: Math.floor(s * r),
									posY: Math.floor((1e3 * (a / 2 - n)) / a)
								};
							}),
							(e._checkAdType = function (e) {
								return e == i.LyConfig.AD_NAME.INTERSTITIAL ||
									e == i.LyConfig.AD_NAME.INTERS_Suspend ||
									e == i.LyConfig.AD_NAME.INTERS_Gk ||
									e == i.LyConfig.AD_NAME.INTERS_Win
									? i.LyConfig.AD_KIND.INTER
									: e == i.LyConfig.AD_NAME.VIDEO
									? i.LyConfig.AD_KIND.VIDEO
									: e == i.LyConfig.AD_NAME.BANNER
									? i.LyConfig.AD_KIND.BANNER
									: -1;
							}),
							(e.showToast = function (e) {
								YYGGames.showTip(e);
							}),
							(e.versionToNum = function (e) {
								for (
									var t = (e = e.toString()).split('.'),
										n = [
											'',
											'0',
											'00',
											'000',
											'0000'
										].reverse(),
										o = 0;
									o < t.length;
									o++
								) {
									var i = t[o].length;
									t[o] = n[i] + t[o];
								}
								return t.join('');
							}),
							(e.cpr_version = function (e, t) {
								return (
									this.versionToNum(e) == this.versionToNum(t)
								);
							}),
							(e.getAdPosByNode = function (e) {
								var t = e.convertToWorldSpaceAR(cc.v2(0, 0)),
									n = cc.v2(
										t.x - e.width / 2,
										t.y + e.height / 2
									),
									o = cc.winSize,
									i = n.x,
									r = cc.winSize.height - n.y,
									s = i / o.width,
									c = r / o.height,
									l = a.LyControl.getScreeSize();
								return { left: l.width * s, top: l.height * c };
							}),
							(e.printConcealData = function () {
								for (
									var e = '{\n', t = 0;
									t < o.LyConcealAdConfig.Configs.length;
									t++
								) {
									var n = o.LyConcealAdConfig.Configs[t],
										i = o.LyConcealAdConfig[n];
									e +=
										'\t"' +
										i.name +
										'":{ "value":"' +
										i.defValue +
										'","des":"' +
										i.des +
										'"},\n';
								}
								(e += '\n}'), console.log(e);
							}),
							e
						);
					})();
				(n.LyUtils = r), cc._RF.pop();
			},
			{
				'./LyConcealAdConfig': 'LyConcealAdConfig',
				'./LyConfig': 'LyConfig',
				'./LyControl': 'LyControl',
				'./gameSaveFishViewControl': 'gameSaveFishViewControl'
			}
		],
		LyVideoSpControl: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, 'e0e58zcqphEuIxhJHxRTujA', 'LyVideoSpControl');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyControl'),
					s = cc._decorator,
					c = s.ccclass,
					l = s.property,
					d = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (t.videoName = ''), t;
						}
						return (
							i(t, e),
							(t.prototype.start = function () {}),
							(t.prototype.onEnable = function () {
								this.node.active = r.LyControl.checkIsVideo(
									this.videoName
								);
							}),
							a([l(cc.String)], t.prototype, 'videoName', void 0),
							a([c], t)
						);
					})(cc.Component);
				(n.default = d), cc._RF.pop();
			},
			{ './LyControl': 'LyControl' }
		],
		Mcomm: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, 'c04b3dAAQlKmZJcQlN8gPSf', 'Mcomm');
				var n = e('./gameSaveFishGameUtils'),
					o = '_leyun_saveTheFish',
					i = {
						bEncry: !1,
						wxURL: '',
						StrComp: o,
						StrKDCoin: o + 'kdcoin',
						StrSkin: o + 'skin',
						StrIsFirstEnter: o + 'isFirstEnter',
						StrFirstEnterTime: o + 'FirstEnterTime',
						StrRedPkg: o + 'Redpkginfo',
						StrGameLV: o + 'gamelv',
						StrGameAllStep: o + 'gameallstep',
						StrGameCurrStep: o + 'gamecurrstep',
						StrGods: o + 'gamegods',
						StrGameTask: o + 'gametask',
						StrGodIndex: o + 'gamegodIndex',
						StrGameInfiniteMaxScore: o + 'InfiniteMaxScore',
						StrIsGetMainGod: o + 'isGetMainGod',
						StrLastGetTodayFhTime: o + 'lastGetTodayFhTime',
						StrHBRainTime: o + 'hbraintime',
						StrTurnTable: o + 'turntable',
						StrHBfh: o + 'hbfenhong',
						StrHBBox: o + 'hbBox',
						StrHBTodayfh: o + 'hbtodayfenhong',
						StrHBSign: o + 'hbsign',
						StrHBIsFirstSign: o + 'hbisFirstSign',
						StrwxWXAccount: o + 'wxaccount',
						StrwxVisitAccount: o + 'wxvisitaccount',
						StrSign: o + 'StrSign',
						StrMaxScore: o + 'StrMaxScore',
						StrCoin: o + 'QtdzzStrCoin',
						StrSkinQtdzz: o + 'StrSkinQtdzz',
						StrMusic: o + 'music',
						StrEffect: o + 'effect',
						mTabResource: [],
						mpTabSpriteAtlasCards: [],
						bMusic: 1,
						bEffect: 1,
						mbIsNewTaiZi: !1,
						mbIsTaiZiNum: !1,
						log: function () {},
						setGameName: function (e) {
							o += e + '_';
						},
						deepCopy: function (e) {
							var t;
							if ('object' == typeof e)
								if (Array.isArray(e))
									for (var n in ((t = []), e))
										t.push(this.deepCopy(e[n]));
								else if (null === e) t = null;
								else if (e.constructor === RegExp) t = e;
								else
									for (var o in ((t = {}), e))
										t[o] = this.deepCopy(e[o]);
							else t = e;
							return t;
						},
						_compileStr: function (e) {
							for (
								var t = String.fromCharCode(
										e.charCodeAt(0) + e.length
									),
									n = 1;
								n < e.length;
								n++
							)
								t += String.fromCharCode(
									e.charCodeAt(n) + e.charCodeAt(n - 1)
								);
							return escape(t);
						},
						_uncompileStr: function (e) {
							e = unescape(e);
							for (
								var t = String.fromCharCode(
										e.charCodeAt(0) - e.length
									),
									n = 1;
								n < e.length;
								n++
							)
								t += String.fromCharCode(
									e.charCodeAt(n) - t.charCodeAt(n - 1)
								);
							return t;
						},
						SaveLocalStorage: function (e, t) {
							var n = e + o,
								a = t + '';
							i.bEncry &&
								((n = i._compileStr(n)),
								(a = i._compileStr(a))),
								cc.sys.localStorage.setItem(n, a);
						},
						GetLocalStorage: function (e) {
							var t = e + o;
							i.bEncry && (t = i._compileStr(t));
							var n = cc.sys.localStorage.getItem(t);
							return n && i.bEncry && (n = i._uncompileStr(n)), n;
						},
						dealwithSpecialString: function (e) {
							var t;
							return (
								i.log('dealwithSpecialString str:', e),
								(t = unescape(
									escape(e).replace(/\%uD.{3}/g, '\u25a1')
								).replace(/&/g, '\u25a1')),
								i.log('result:', t, ' totalLen:0'),
								t
							);
						},
						dealwithNumber: function (e, t) {
							e = parseInt(e);
							for (
								var n = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
									o = [
										'K',
										'M',
										'G',
										'T',
										'W',
										'B',
										'L',
										'wbl',
										'a',
										'aa'
									],
									i = n.length,
									a = -1,
									r = 0;
								r < i - 1;
								r++
							) {
								if (e < (s = Math.pow(10, n[r]))) return e;
								if (e > s && e <= 1e3 * s) {
									a = r;
									break;
								}
							}
							if (a >= 0) {
								var s = Math.pow(10, n[a]);
								return t
									? Math.ceil((e / s) * 100) / 100 + o[a]
									: Math.floor((e / s) * 100) / 100 + o[a];
							}
							return e;
						},
						PreLoadRes: function (e, t, n) {
							new Date().getTime(),
								cc.loader.loadResDir(e, t, function (e, t, o) {
									if (e)
										console.error(
											'PreLoadRes start err:',
											e
										);
									else {
										var a = o.length;
										if (t.length == a)
											for (var r = 0; r < a; r++)
												i.mTabResource[o[r]] = t[r];
										else
											console.error(
												'loadResDir \u52a0\u8f7d\u6570\u91cf\u51fa\u9519'
											);
										n && n();
									}
								});
						},
						PreLoadTextureAtls: function (e, t) {
							cc.loader.loadRes(
								e,
								cc.SpriteAtlas,
								function (n, o) {
									n
										? console.error(
												'PreLoadRes ' + e + ' err:',
												n
										  )
										: (i.mpTabSpriteAtlasCards = o),
										t && t();
								}
							);
						},
						GetSpriteFrame: function (e) {
							var t = i.mpTabSpriteAtlasCards.getSpriteFrame(e);
							return (
								t ||
									console.error(
										'getSpriteFrame _name:',
										e,
										' is nil'
									),
								t
							);
						},
						GetLoadRes: function (e) {
							return this.mTabResource[e];
						},
						_addSoudRes: function (e, t) {
							t && e
								? (i.mTabResource[e] = t)
								: console.error(
										'AddSoudRes _key:',
										e,
										'_audioClip:',
										t
								  );
						},
						PlayLoadSound: function (e, t, o) {
							var a = e,
								r = -1;
							if (a) {
								if (i.GetLoadRes(a))
									return (
										(r = t
											? i.PlayMusic(a)
											: i.PlayEffect(a)),
										void (o && o(a, r))
									);
								n.default.loadBundleRes(
									'gameSaveFishResources',
									a,
									function (e) {
										var n = e.name;
										i._addSoudRes(n, e),
											(r = t
												? i.PlayMusic(n)
												: i.PlayEffect(n)),
											o && o(n, r);
									},
									cc.AudioClip
								);
							}
						},
						getMusicOpen: function () {
							var e = this.GetLocalStorage(this.StrMusic);
							return (
								e && e.length > 0
									? (this.bMusic = parseInt(e))
									: (this.bMusic = 1),
								this.bMusic
							);
						},
						getEffectOpen: function () {
							var e = this.GetLocalStorage(this.StrEffect);
							return (
								e && e.length > 0
									? (this.bEffect = parseInt(e))
									: (this.bEffect = 1),
								this.bEffect
							);
						},
						SetMusicOpen: function (e) {
							(this.bMusic = e),
								this.SaveLocalStorage(this.StrMusic, e),
								-1 == e && this.StopMusic();
						},
						SetEffectOpen: function (e) {
							(this.bEffect = e),
								this.SaveLocalStorage(this.StrEffect, e);
						},
						stopEffect: function () {
							YYGGames.audioEngine.stopSound();
						},
						PlayEffect: function (e) {
							if (-1 != this.bEffect) {
								var t = this.GetLoadRes(e);
								console.error('sound:', e),
									t &&
										window.YYGGames &&
										window.YYGGames.audioEngine.playSound(
											t.nativeUrl
										);
							}
							return -1;
						},
						PlayMusic: function (e) {
							if (1 == this.bMusic) {
								var t = this.GetLoadRes(e);
								console.error('music:', e),
									t &&
										window.YYGGames &&
										window.YYGGames.audioEngine.playMusic(
											t.nativeUrl
										);
							}
							return -1;
						},
						StopMusic: function () {
							YYGGames.audioEngine.stopMusic();
						},
						audioPause: function () {
							YYGGames.audioEngine.pause = !0;
						},
						audioResum: function () {
							YYGGames.audioEngine.pause = !1;
						},
						audioPlay: function (e) {
							e && cc.audioEngine.play(e, !1, 0.5);
						},
						SendPostReq: function (e, t, n) {
							var o = this.wxURL + e;
							if (
								(console.log(
									'SendPostReq _url:',
									o,
									'jdata:',
									t,
									JSON.stringify(t)
								),
								'object' == typeof wx)
							) {
								var a = i.nWxMiniToken;
								console.log('_token:', a),
									wx.request({
										url: o,
										header: {
											Authorization: 'Bearer ' + (a || 0)
										},
										data: t,
										method: 'POST',
										success: function (e) {
											console.log('succes res:', e);
											var t = e.data;
											0 == t.code
												? n(t)
												: wx.showToast(t.msg);
										},
										fail: function (e) {
											console.log('fail res:', e);
										},
										complete: function (e) {
											console.log('complete res:', e);
										}
									});
							} else {
								var r = JSON.stringify(t);
								ly.LyHttp1.post(
									{ url: o, timeout: 5e3 },
									r,
									function (e) {
										console.log(
											'http responseData: ' + e.data
										),
											n(e);
									}
								);
							}
						},
						SendRequest: function (e, t, n, o) {
							var i = cc.loader.getXMLHttpRequest();
							i.timeout = 5e3;
							var a = '?';
							for (var r in t)
								'?' != a && (a += '&'), (a += r + '=' + t[r]);
							var s = this.wxURL + e + encodeURI(a);
							return (
								console.log('requestURL:', s),
								(i._callBack = o),
								(i._timeOut = !1),
								n &&
									(i._timer = setTimeout(function () {
										(i._timeOut = !0),
											i.abort(),
											i._quitxhr();
									}, 5e3)),
								(i._quitxhr = function () {
									clearTimeout(i._timer);
								}),
								i.open('GET', s, !0),
								cc.sys.isNative &&
									i.setRequestHeader(
										'Accept-Encoding',
										'gzip,deflate',
										'text/html;charset=UTF-8'
									),
								(i.onreadystatechange = function () {
									if (
										(i._quitxhr(),
										i._timeOut,
										4 === i.readyState &&
											i.status >= 200 &&
											i.status < 300)
									) {
										console.log(
											'http ' + i.readyState,
											'xhr.status:',
											i.status,
											'res(' +
												i.responseText.length +
												'):' +
												i.responseText
										);
										try {
											var e = JSON.parse(i.responseText);
											null !== o && o(e);
										} catch (t) {
											console.log('err:', t);
										} finally {
											console.log('http finally');
										}
									}
								}),
								(i.onerror = function () {
									console.error('http onerror'),
										i._callBack &&
											i._callBack({ code: -2 }),
										i._quitxhr();
								}),
								i.send(),
								i
							);
						},
						checkNetworking: function (e) {
							'function' == typeof e && e();
						},
						showNoNetWorkPrefab: function (e) {
							var t = cc
								.find('Canvas')
								.getChildByName('node_noNetwork');
							t
								? (t.active = !0)
								: cc.loader.loadRes(
										'node_noNetwork',
										cc.Prefab,
										function (t, n) {
											if (t)
												console.error(
													'loadResMsg err:',
													t.message || t
												);
											else {
												var o = cc.instantiate(n);
												cc.find('Canvas').addChild(o),
													(o.name = 'node_noNetwork'),
													o
														.getComponent(
															'node_noNetwork'
														)
														.init(e);
											}
										}
								  );
						}
					};
				(window.Mcomm = i), cc._RF.pop();
			},
			{ './gameSaveFishGameUtils': 'gameSaveFishGameUtils' }
		],
		MiniGameControl: [
			function (e, t, n) {
				'use strict';
				cc._RF.push(t, 'c147fYFMlREPopkVfcF+jfZ', 'MiniGameControl'),
					Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.MiniGameControl = void 0);
				var o = e('./qqModule'),
					i = e('./VivoAd'),
					a = e('./VivoDatas'),
					r = e('./wxModule'),
					s = e('./LyConfig'),
					c = e('./LyControl'),
					l = e('./LyUtils'),
					d = (function () {
						function e() {}
						return (
							(e.init = function () {
								var e = this;
								c.LyControl.getPlatformType() ==
									s.LyConfig.PlatformDefine.VivoQuickGame &&
									(console.log(
										'\u5f53\u524d\u6e20\u9053\u662f VIVO'
									),
									(this.currMiniAppID =
										'1759394808563101697'),
									i.VivoAd.init()),
									this.getGameAdConfig(function (t, n) {
										t &&
											null != t &&
											(console.log(
												'\u6570\u636e\u4e3a: ',
												JSON.stringify(t)
											),
											(e._dynamicData = t),
											console.log(
												'\u6570\u636e\u4e3axxxxxxxxxx: ',
												e._dynamicData
											),
											(e.isGetData = !0),
											(e._adChannelData = n),
											e.obtainAdChannelGames(
												e._adChannelData
											));
									});
							}),
							(e.getMiniGameModule = function () {
								return c.LyControl.getPlatformType() ==
									s.LyConfig.PlatformDefine.QQminiGame
									? o.qqModule
									: c.LyControl.getPlatformType() ==
									  s.LyConfig.PlatformDefine.WeChatGame
									? r.wxModule
									: void 0;
							}),
							(e.getScreenSize = function () {
								if (
									c.LyControl.getPlatformType() ==
									s.LyConfig.PlatformDefine.WeChatGame
								)
									return r.wxModule.getScreenSize();
							}),
							(e.isAdReady = function (e, t) {
								return void 0 === t && (t = null), !0;
							}),
							(e.setinitAdCallFunc = function (e) {
								e ||
									l.LyUtils.showToast(
										'\u6682\u65e0\u5e7f\u544a'
									);
							}),
							(e.openAd = function (e, t, n) {
								void 0 === t && (t = null),
									void 0 === n && (n = null),
									console.log(
										'\u6253\u5f00\u5e7f\u544a \uff1a ',
										e
									),
									c.LyControl.getPlatformType() ==
									s.LyConfig.PlatformDefine.QQminiGame
										? o.qqModule.openAd(e, t, n)
										: c.LyControl.getPlatformType() ==
										  s.LyConfig.PlatformDefine.WeChatGame
										? r.wxModule.openAd(
												e,
												this.setinitAdCallFunc,
												n
										  )
										: c.LyControl.getPlatformType() ==
												s.LyConfig.PlatformDefine
													.VivoQuickGame &&
										  i.VivoAd.openAd(
												e,
												this.setinitAdCallFunc,
												n
										  );
							}),
							(e.openInterAd = function (e, t) {
								this.isAdReady(e)
									? this.openAd(
											e,
											function () {},
											function () {
												'function' == typeof t && t();
											}
									  )
									: 'function' == typeof t && t();
							}),
							(e.closeAd = function (e) {
								s.LyConfig.AD_NAME.BANNER,
									c.LyControl.getPlatformType() ==
									s.LyConfig.PlatformDefine.WeChatGame
										? r.wxModule.closeAd(e)
										: c.LyControl.getPlatformType() ==
										  s.LyConfig.PlatformDefine.QQminiGame
										? o.qqModule.closeAd(e)
										: c.LyControl.getPlatformType() ==
												s.LyConfig.PlatformDefine
													.VivoQuickGame &&
										  i.VivoAd.closeAd(e);
							}),
							(e.obtainGameControlConf = function (e) {
								var t = e.name,
									n = e.defValue;
								return (
									this._dynamicData &&
										this._dynamicData[t] &&
										(n = this._dynamicData[t].value),
									n
								);
							}),
							(e.showVideoAd = function (e, t) {
								void 0 === e && (e = null),
									void 0 === t && (t = null),
									s.LyConfig.IS_DEBUG || cc.sys.isBrowser
										? 'function' == typeof e && e(!0)
										: c.LyControl.getPlatformType() ==
										  s.LyConfig.PlatformDefine.WeChatGame
										? r.wxModule.openAd(
												s.LyConfig.AD_NAME.VIDEO,
												this.setinitAdCallFunc,
												e
										  )
										: c.LyControl.getPlatformType() ==
												s.LyConfig.PlatformDefine
													.VivoQuickGame &&
										  i.VivoAd.openAd(
												s.LyConfig.AD_NAME.VIDEO,
												this.setinitAdCallFunc,
												e
										  );
							}),
							(e.showInterAd = function (e, t, n, o, a) {
								void 0 === e && (e = null),
									void 0 === t && (t = null),
									void 0 === n && (n = null),
									void 0 === o && (o = null),
									void 0 === a && (a = null),
									s.LyConfig.IS_DEBUG || cc.sys.isBrowser
										? 'function' == typeof e && e(!0)
										: c.LyControl.getPlatformType() ==
										  s.LyConfig.PlatformDefine.WeChatGame
										? r.wxModule.openAd(
												s.LyConfig.AD_NAME.INTERS_Gk,
												this.setinitAdCallFunc,
												e
										  )
										: c.LyControl.getPlatformType() ==
												s.LyConfig.PlatformDefine
													.VivoQuickGame &&
										  (console.log(
												'showInterAd2  closeCallFunc = ',
												e,
												'noAdCallFunc = ',
												t
										  ),
										  i.VivoAd.openAd(
												s.LyConfig.AD_NAME.CUSTOM_INTER,
												this.setinitAdCallFunc,
												e,
												n,
												o
										  ));
							}),
							(e.showMiniExpressAd = function (e, t, n) {
								c.LyControl.getPlatformType() ==
									s.LyConfig.PlatformDefine.VivoQuickGame &&
									i.VivoAd.openExpressAd(e, t, n);
							}),
							(e.loadStageDataForFile = function (e) {
								var t = '';
								c.LyControl.getPlatformType() ==
									s.LyConfig.PlatformDefine.WeChatGame &&
									(t = ''),
									cc.loader.load(t, function (t, n) {
										if (t)
											console.error(
												'\u8fdc\u7a0b\u83b7\u53d6json\u6587\u4ef6\u5931\u8d25 error : ',
												t
											);
										else {
											var o = JSON.stringify(n),
												i = JSON.parse(o);
											'function' == typeof e && e(i),
												console.log(
													'json\u6570\u636e\u83b7\u53d6\u6210\u529f',
													i
												);
										}
									});
							}),
							(e.getGameAdConfig = function () {}),
							(e.obtainAdChannelGames = function (e) {
								if (null != e) {
									for (
										var t = [], n = {}, o = 0;
										o < e.length;
										o++
									) {
										var i = e[o];
										(t[o] = i),
											(n = {
												adType: t[o].adType,
												id: t[o].id
											}),
											this.obtainAdChannelGamesDesc(n);
									}
									a.default.cus_ExpIdArr;
								}
							}),
							(e.obtainAdChannelGamesDesc = function (e) {
								var t = e.adType,
									n = e.id;
								this._dynamicData &&
									this._dynamicData[t] &&
									(n = this._dynamicData[t].id),
									'banner' == t
										? (a.default.bannerIdIdArr.push(n),
										  console.log(
												'bannerIdIdArr',
												a.default.bannerIdIdArr
										  ))
										: 'reward' == t
										? (a.default.videoIdArr.push(n),
										  console.log(
												'videoIdArr',
												a.default.videoIdArr
										  ))
										: 'nativeTemplateInters' == t
										? (a.default.cus_intIdArr.push(n),
										  console.log(
												'cus_intIdArr',
												a.default.cus_intIdArr
										  ))
										: 'nativeTemplate' == t &&
										  (a.default.cus_ExpIdArr.push(n),
										  console.log(
												'cus_ExpIdArr',
												a.default.cus_ExpIdArr
										  ));
							}),
							(e._dynamicData = null),
							(e._adChannelData = null),
							(e.isGetData = !1),
							(e._isInterShowTime = !1),
							(e.currMiniAppID = '1759394808563101697'),
							(e.miniAppAdControls = []),
							e
						);
					})();
				(n.MiniGameControl = d), cc._RF.pop();
			},
			{
				'./LyConfig': 'LyConfig',
				'./LyControl': 'LyControl',
				'./LyUtils': 'LyUtils',
				'./VivoAd': 'VivoAd',
				'./VivoDatas': 'VivoDatas',
				'./qqModule': 'qqModule',
				'./wxModule': 'wxModule'
			}
		],
		NativeChannelControl: [
			function (e, t, n) {
				'use strict';
				cc._RF.push(
					t,
					'f7c2e1SmiNKA7IG6dVAQpHB',
					'NativeChannelControl'
				);
				var o = function (e, t, n, o) {
					var i,
						a = arguments.length,
						r =
							a < 3
								? t
								: null === o
								? (o = Object.getOwnPropertyDescriptor(t, n))
								: o;
					if (
						'object' == typeof Reflect &&
						'function' == typeof Reflect.decorate
					)
						r = Reflect.decorate(e, t, n, o);
					else
						for (var s = e.length - 1; s >= 0; s--)
							(i = e[s]) &&
								(r =
									(a < 3
										? i(r)
										: a > 3
										? i(t, n, r)
										: i(t, n)) || r);
					return a > 3 && r && Object.defineProperty(t, n, r), r;
				};
				Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.NativeChannelControl = void 0);
				var i = e('./LyConfig'),
					a = e('./LyUtils'),
					r = cc._decorator,
					s = r.ccclass;
				r.property;
				var c = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.init = function () {
							(window.ly = lyLib1),
								ly.init({ appId: 'lygame' }),
								setTimeout(function () {
									ly.gameContentShow();
								}, 500),
								this.initLyChannel(),
								window.ly.onPauseMusic(function () {}),
								window.ly.onResumeMusic(function () {});
						}),
						(e.initLyChannel = function () {
							var e = ly.queryPlatform();
							cc.sys.isBrowser || 'nothingAd' == e
								? (i.LyConfig.IS_LOADING = !0)
								: ly.loginNative(function () {
										ly.doGetUserInfo(),
											(i.LyConfig.IS_LOADING = !0);
								  });
						}),
						(e.isAdReady = function (e, t) {
							return (
								void 0 === t && (t = null), ly.isAdReady(e, t)
							);
						}),
						(e.openAd = function (e, n, o) {
							if (
								(void 0 === n && (n = null),
								void 0 === o && (o = null),
								console.log(
									'\u6253\u5f00\u5e7f\u544a \uff1a ',
									e
								),
								e == i.LyConfig.AD_NAME.BANNER)
							)
								ly.showBannerAd(105);
							else if (e == i.LyConfig.AD_NAME.SPLASH)
								ly.showSplashAd();
							else {
								var r = a.LyUtils._checkAdType(e);
								1 == r
									? ly.showInterstitialAd(null, n, o)
									: 0 == r
									? t.openVideoAd(!0, n, o)
									: console.error(
											'\u672a\u8bc6\u522b\u5e7f\u544a\u540d\u79f0:',
											e
									  );
							}
						}),
						(e.openVideoAd = function (e, n, o) {
							i.LyConfig.IS_DEBUG || cc.sys.isBrowser
								? 'function' == typeof o && o(!0)
								: ly.showRewardVideoAd(n, function (n) {
										n &&
											e &&
											t.openAd(i.LyConfig.AD_NAME.SPLASH),
											o(n);
								  });
						}),
						(e.openInterAd = function (e, n) {
							t.isAdReady(e)
								? t.openAd(
										e,
										function () {},
										function (e) {
											'function' == typeof n && n(e);
										}
								  )
								: 'function' == typeof n && n(!1);
						}),
						(e.closeAd = function (e) {
							void 0 === e && (e = null),
								e == i.LyConfig.AD_NAME.BANNER &&
									(console.log('\u5173\u95edBanner'),
									ly.closeAd('banner'));
						}),
						(e.loadExpressAd = function () {
							ly.loadExpressAd('express', 0, 0, 0, 0);
						}),
						(e.showExpressAd = function (e, t, n, o) {
							void 0 === o &&
								(o = i.LyConfig.NATIVE_BTN_POS.BOTTOM),
								console.log(
									'\u6253\u5f00\u539f\u751f\u5e7f\u544a'
								);
							var a = (1e3 - e) / 2;
							ly.openExpressAd('express', n, a, e, t, o);
						}),
						(e.closeExpressAd = function () {
							ly.closeAd('express'), t.loadExpressAd();
						}),
						(t = o([s], e))
					);
				})();
				(n.NativeChannelControl = c), cc._RF.pop();
			},
			{ './LyConfig': 'LyConfig', './LyUtils': 'LyUtils' }
		],
		NativeLianYunControl: [
			function (e, t, n) {
				'use strict';
				cc._RF.push(
					t,
					'e2872dHiCZL3ry47umvBcs3',
					'NativeLianYunControl'
				);
				var o = function (e, t, n, o) {
					var i,
						a = arguments.length,
						r =
							a < 3
								? t
								: null === o
								? (o = Object.getOwnPropertyDescriptor(t, n))
								: o;
					if (
						'object' == typeof Reflect &&
						'function' == typeof Reflect.decorate
					)
						r = Reflect.decorate(e, t, n, o);
					else
						for (var s = e.length - 1; s >= 0; s--)
							(i = e[s]) &&
								(r =
									(a < 3
										? i(r)
										: a > 3
										? i(t, n, r)
										: i(t, n)) || r);
					return a > 3 && r && Object.defineProperty(t, n, r), r;
				};
				Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.NativeLianYunControl = void 0);
				var i = e('./LyConfig'),
					a = e('./LyUtils'),
					r = cc._decorator,
					s = r.ccclass;
				r.property;
				var c = (function () {
					function e() {}
					return (
						(e.init = function () {
							(window.ly = lyLib2),
								(i.LyConfig.AD_NAME = i.LyConfig.AD_NAME2);
							var e = '0';
							'object' == typeof lynative &&
								'function' == typeof lynative.getPrjectId &&
								(e = lynative.getPrjectId()),
								console.log('projectId:', e),
								ly.init({ appId: e }),
								window.ly.onPauseMusic(function () {}),
								window.ly.onResumeMusic(function () {});
						}),
						(e.isAdReady = function (e, t) {
							return (
								void 0 === t && (t = null), ly.isAdReady(e, t)
							);
						}),
						(e.openAd = function (e, t, n) {
							if (
								(void 0 === t && (t = null),
								void 0 === n && (n = null),
								e == i.LyConfig.AD_NAME.BANNER)
							)
								ly.openAd(i.LyConfig.AD_NAME.BANNER);
							else {
								if (i.LyConfig.IS_DEBUG)
									return void (
										'function' == typeof n && n(!0)
									);
								var o = a.LyUtils._checkAdType(e);
								0 == o
									? ly.openAd(e, t, n)
									: 1 == o
									? ly.openAd(e, t, n)
									: console.error(
											'\u672a\u8bc6\u522b\u5e7f\u544a\u540d\u79f0:',
											e
									  );
							}
						}),
						(e.openInterAd = function (e, t) {
							this.isAdReady(e)
								? this.openAd(
										e,
										function () {},
										function () {
											'function' == typeof t && t();
										}
								  )
								: 'function' == typeof t && t();
						}),
						(e.closeAd = function (e) {
							void 0 === e && (e = null),
								e == i.LyConfig.AD_NAME.BANNER &&
									(console.log('\u5173\u95edBanner'),
									ly.closeAd('banner'));
						}),
						(e.loadExpressAd = function () {
							var e,
								t = cc.find('Canvas'),
								n = 1e3 / t.width,
								o = 1e3 / t.height;
							e = t.height / t.width > 1.78 ? 110 : 80;
							var i = t.height / 2 - 112;
							console.log('\u539f\u751f\u5e7f\u544a\u8fdb\u6765'),
								ly.loadExpressAd(
									'express',
									(t.width - 2 * e) * n,
									i * o
								);
						}),
						(e.showExpressAd = function () {
							var e,
								t = cc.find('Canvas'),
								n = 1e3 / t.width,
								o = 1e3 / t.height;
							e = t.height / t.width > 1.78 ? 110 : 80;
							var i = (t.height / 1920) * 924,
								a = t.height / 2 + (350 - i / 2);
							ly.openExpressAd(
								'express',
								(t.width - 2 * e) * n,
								a * o,
								e * n,
								(t.height - a + 60) * o
							);
						}),
						(e.closeExpressAd = function () {
							ly.closeAd('express'), this.loadExpressAd();
						}),
						o([s], e)
					);
				})();
				(n.NativeLianYunControl = c), cc._RF.pop();
			},
			{ './LyConfig': 'LyConfig', './LyUtils': 'LyUtils' }
		],
		OppoAd: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '13d55LY0SFN3JcLZwUVtxXL', 'OppoAd'),
					cc._RF.pop();
			},
			{}
		],
		PrivacyBtn: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '7915cxxPZ1MAq3LVX9k7HeJ', 'PrivacyBtn'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						onLoad: function () {},
						start: function () {},
						onClickBtn: function () {
							ly.openPrivacyPolicy();
						}
					}),
					cc._RF.pop();
			},
			{}
		],
		ProtocalBtn: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, 'dc23bBlkAxKQpI+4bz4mg21', 'ProtocalBtn'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						onLoad: function () {},
						start: function () {},
						onClickBtn: function () {
							ly.openUserAgreement();
						}
					}),
					cc._RF.pop();
			},
			{}
		],
		RecorderAd: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '52264vg561JXrEp/wfQSepX', 'RecorderAd'),
					cc._RF.pop();
			},
			{}
		],
		ToastScript: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '81842Zmo7FJXaSdTGIRjGn7', 'ToastScript'),
					cc.Class({
						extends: cc.Component,
						properties: { content: cc.Label },
						onLoad: function () {},
						start: function () {},
						showToast: function (e) {
							var t = this;
							(this.content.string = e + ''),
								this.node.runAction(
									cc.sequence(
										cc.delayTime(0.5),
										cc.spawn(
											cc.moveBy(0.3, cc.v2(0, 100)),
											cc.fadeOut(0.3)
										),
										cc.callFunc(function () {
											t.node.parent &&
												(t.node.removeFromParent(),
												(t.node = null));
										})
									)
								);
						}
					}),
					cc._RF.pop();
			},
			{}
		],
		UtilNet: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, 'e625ducT0dMToqCiz0bdfM1', 'UtilNet');
				var n = {
						URL_DOMAIN: '',
						URL_DOMAIN_TEST: '',
						URL_DOMAIN_LOGIN: '',
						URL_DOMAIN_LOGIN_INTERFACE:
							'users/login_by_source_id_0',
						URL_DOMAIN_SUBMITUSERInfo_INTERFACE:
							'users/improve_user_baseI_info_0'
					},
					o = {
						quest: function (e, t) {
							var n = e.url,
								o = e.method,
								i = e.data,
								a = e.timeout || 0,
								r = new XMLHttpRequest(),
								s = {};
							(s.xhr = r), a > 0 && (r.timeout = a);
							var c = new Date().getTime();
							if (
								(cc.sys.platform != cc.sys.MACOS &&
									cc.sys.platform != cc.sys.IPHONE &&
									cc.sys.platform != cc.sys.IPAD &&
									(r.withCredentials = !0),
								(r.onreadystatechange = function () {
									if (
										4 == r.readyState &&
										((s.status = r.status),
										(s.status_message = r.statusText),
										r.status >= 200 &&
											r.status < 400 &&
											(s.body = r.responseText),
										t)
									) {
										var e = new Date().getTime();
										(s.duration = e - c), t(s), (t = null);
									}
								}),
								r.open(o, n, e.async),
								r.setRequestHeader(
									'Content-Type',
									'application/json;charset=UTF-8'
								),
								e.cookie &&
									e.cookie.length > 0 &&
									r.setRequestHeader('cookie', e.cookie),
								'object' == typeof i)
							)
								try {
									i = JSON.stringify(i);
								} catch (l) {}
							r.send(i),
								(r.ontimeout = function () {
									if (
										((s.status = r.status),
										(s.status_message = r.statusText),
										t)
									) {
										var e = new Date().getTime();
										(s.duration = e - c), t(s), (t = null);
									}
									console.log(
										'%c\u8fde%c\u63a5%c\u8d85%c\u65f6',
										'color:red',
										'color:orange',
										'color:purple',
										'color:green'
									);
								});
						},
						get: function (e, t, n) {
							var o = { timeout: 1e4, async: !0 };
							'object' == typeof e
								? Object.assign(o, e)
								: 'string' == typeof e && (o.url = e),
								(o.method = 'get'),
								(o.cookie = t),
								this.quest(o, n);
						},
						post: function (e, t, n, o) {
							var i = { timeout: 1e4, async: !0 };
							'object' == typeof e
								? Object.assign(i, e)
								: 'string' == typeof e && (i.url = e),
								(i.method = 'post'),
								(i.data = t),
								(i.cookie = n),
								this.quest(i, o);
						},
						getQueryString: function (e, t) {
							try {
								var n = new RegExp(
										'(^|&)' + t + '=([^&]*)(&|$)',
										'i'
									),
									o = e.substr(1).match(n);
								if (o) return unescape(o[2]);
							} catch (i) {}
							return null;
						},
						getQueryInt: function (e, t) {
							try {
								var n = Number.parseInt(
									this.getQueryString(e, t)
								);
								if (isNaN(n)) return null;
							} catch (o) {}
							return null;
						},
						httpResponseParse: function (e) {
							var t = { code: -1 };
							(t.http_status = e.status),
								(t.http_status_message = e.status_message),
								(t.duration = e.duration);
							try {
								var n = JSON.parse(e.body);
								(t.code = n.code), (t.data = n.data);
							} catch (o) {
								console.log(
									'UtilNet - httpResponseParse - err',
									o
								);
							}
							return t;
						}
					};
				(n.get = function (e, t) {
					var n = this;
					o.get(e, this.cookie, function (e) {
						t &&
							((n.cookie = e.xhr.getResponseHeader('Set-Cookie')),
							t(o.httpResponseParse(e)));
					});
				}),
					(n.post = function (e, t, n) {
						var i = this;
						o.post(e, t, this.cookie, function (e) {
							n &&
								((i.cookie =
									e.xhr.getResponseHeader('Set-Cookie')),
								n(o.httpResponseParse(e)));
						});
					}),
					(t.exports = n),
					cc._RF.pop();
			},
			{}
		],
		VivoAd: [
			function (e, t, n) {
				'use strict';
				cc._RF.push(t, '4e2eeFpy8RMQKhLIzQfzPkf', 'VivoAd');
				var o,
					i = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.VivoAd =
						n.Custom_Express =
						n.Custom_Inter =
						n.Custom_Banner1 =
						n.SudokuAd =
						n.InterstitialAd =
						n.VideoAd =
						n.BannerAd =
							void 0);
				var a,
					r = e('./LyConcealAdConfig'),
					s = e('./LyConfig'),
					c = e('./LyControl'),
					l = e('./MiniGameControl'),
					d = e('./VivoDatas'),
					u = cc._decorator,
					f = u.ccclass;
				u.property,
					((a = o || (o = {})).BANNER =
						'98602008b53b4bee8043663b18ccc22d'),
					(a.BANNER2 = '1da2248edf4d42189f93d535d1b0ec56'),
					(a.VIDEO = '750acee9d3b2478fb846319c81b8e845'),
					(a.VIDEO2 = '91fe1848e46444bfa61662c0a243ba9d'),
					(a.INTERSTITIAL = ''),
					(a.SudokuAd = ''),
					(a.CUSTOM_INTER = '4e383ebfc3b24674af43d4298d97a500'),
					(a.CUSTOM_INTER2 = 'be17dbdab9434469a5776fd9ec9e2fcb'),
					(a.CUSTOM_INTER3 = 'c791e68b83e34d488ca86d7c8bb9d158'),
					(a.CUSTOM_EXPRESS = 'f799a864eeb64b629e71c8d46536cce6'),
					(a.CUSTOM_EXPRESS2 = '199e950f50784f4a9f2e39a2915a1865'),
					(a.Custom_Banner1 = '');
				var h = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.load = function () {
							console.log('vivoAd banner load success');
						}),
						(e.openAd = function () {
							if (!t.bannerAd) {
								console.log('\u52a0\u8f7dbanner');
								var e = qg.getSystemInfoSync();
								e.screenWidth;
								var n = e.screenHeight;
								0 == t.adUnitIdArr.length &&
									(t.adUnitIdArr = [o.BANNER, o.BANNER2]),
									(t.adUnitId =
										t.adUnitIdArr[
											Math.floor(
												Math.random() *
													t.adUnitIdArr.length
											)
										]),
									(t.bannerAd = qg.createBannerAd({
										posId: t.adUnitId,
										style: { left: 0, top: n - 160 }
									})),
									t.bannerAd.onLoad(t.load),
									t.bannerAd.onError(function (e) {
										console.error(
											'vivoAd banner load error : ',
											e
										);
									});
							}
							t.bannerAd.show();
						}),
						(e.close = function () {
							t.bannerAd && t.bannerAd.hide();
						}),
						(e.onClose = function () {
							t.bannerAd &&
								(console.log('banner\u5df2\u5173\u95ed'),
								t.bannerAd.destoryAd());
						}),
						(e.destoryAd = function () {
							t.bannerAd &&
								(t.bannerAd.hide(), (t.bannerAd = null));
						}),
						(e.doRefresh = function () {
							(t.BANNER_REFRESH_TIME =
								c.LyControl.getOnceConcealValue(
									r.LyConcealAdConfig.autoRefreshBannerTime
								)),
								-1 != t.BANNER_REFRESH_TIME &&
									((t.rTime += 1),
									t.rTime >= t.BANNER_REFRESH_TIME &&
										((t.rTime = 0),
										(t._pauseTimer = !0),
										t.refreshBanner()));
						}),
						(e.refreshBanner = function () {
							t.destoryAd(),
								setTimeout(function () {
									t.openAd();
								}, 2e3),
								console.log(
									'BannerAd \u5237\u65b0\u6210\u529f'
								);
						}),
						(e.adUnitIdArr = d.default.bannerIdIdArr),
						(e.adUnitId = null),
						(e.bannerAd = null),
						(e.rTime = 27),
						(e._isShowBanner = !1),
						(e._pauseTimer = !0),
						(e.BANNER_REFRESH_TIME = null),
						(t = i([f], e))
					);
				})();
				n.BannerAd = h;
				var p = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.onLoad = function () {
							(t.isReady = !0),
								console.log(
									'vivoAd - video - onLoad - ',
									t.isReady
								);
						}),
						(e.onError = function (e) {
							console.log(
								'vivoAd - video - onError:',
								e && e.errCode,
								e && e.errMsg
							);
						}),
						(e.onClose = function (e) {
							console.log('vivoAd - video - onClose'),
								e && e.isEnded
									? (console.log(
											'vivoAd - video - onClose - \u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1'
									  ),
									  'function' == typeof t.closeAdCallback &&
											t.closeAdCallback(!0))
									: (console.log(
											'vivoAd - video - onClose - \u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1'
									  ),
									  'function' == typeof t.closeAdCallback &&
											t.closeAdCallback(!1)),
								(t.openAdCallback = null),
								(t.closeAdCallback = null),
								t.videoAd &&
									(t.videoAd.offLoad(t.onLoad),
									t.videoAd.offError(t.onError),
									t.videoAd.offClose(t.onClose));
						}),
						(e.isAdReady = function () {
							return t.isReady;
						}),
						(e.openAd = function (e, n) {
							(t.isReady = !1),
								console.log(
									'VideoAd.adUnitIdArr-----',
									t.adUnitIdArr
								),
								0 == t.adUnitIdArr.length &&
									((t.adUnitIdArr = [o.VIDEO, o.VIDEO2]),
									console.log(
										'VideoAd.adUnitIdArr \u4e3a\u7a7a',
										t.adUnitIdArr
									)),
								(t.adUnitId =
									t.adUnitIdArr[
										Math.floor(
											Math.random() * t.adUnitIdArr.length
										)
									]),
								console.log(
									'\u62c9\u53d6\u5230\u7684id:  VideoAd',
									t.adUnitId
								),
								t.videoAd ||
									(t.videoAd = qg.createRewardedVideoAd({
										adUnitId: t.adUnitId
									})),
								t.videoAd.onLoad(t.onLoad),
								t.videoAd.onError(t.onError);
							var i = t.videoAd.load();
							i &&
								i
									.then(function () {
										console.log(
											'vivoAd - video - preloadAd - \u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u6210\u529f'
										);
										var o = t.videoAd.show();
										o
											? (o
													.then(function () {
														console.log(
															'vivoAd - video - openAd - \u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u6210\u529f'
														),
															'function' ==
																typeof e &&
																e(!0);
													})
													.catch(function (t) {
														console.log(
															'vivoAd - video - openAd - \u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u5931\u8d25',
															t
														),
															'function' ==
																typeof e &&
																e(!1);
													}),
											  (t.closeAdCallback = n),
											  t.videoAd.onClose(t.onClose))
											: (console.log(
													'vivoAd - video - openAd - t_ad = null'
											  ),
											  'function' == typeof n && n(!1));
									})
									.catch(function () {
										e(!1);
									});
						}),
						(e.close = function () {}),
						(e.adUnitIdArr = d.default.videoIdArr),
						(e.adUnitId = null),
						(e.videoAd = null),
						(e.isReady = !1),
						(e.openAdCallback = null),
						(e.closeAdCallback = null),
						(t = i([f], e))
					);
				})();
				n.VideoAd = p;
				var g = (function () {
					function e() {}
					return (
						(e.openAd = function (e) {
							e && e();
						}),
						i([f], e)
					);
				})();
				n.InterstitialAd = g;
				var m = (function () {
					function e() {}
					return (
						(e.openAd = function () {
							e.sudokuAd
								? (e.sudokuAd.show().then(function () {
										console.log('show success');
								  }),
								  console.log(
										'\u6682\u4e0d\u652f\u6301\u4e92\u63a8\u76d2\u5b50\u76f8\u5173 API'
								  ))
								: ((e.sudokuAd = qg.createBoxPortalAd({
										adUnitId: e.adUnitId,
										image: '',
										marginTop: 500
								  })),
								  e.sudokuAd.onError(function (e) {
										console.log(
											'\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25',
											e
										);
								  }),
								  e.sudokuAd.onClose(function () {
										console.log('close'),
											e.sudokuAd.isDestroyed ||
												e.sudokuAd.show();
								  }),
								  e.sudokuAd.show().then(function () {
										console.log('show success');
								  }));
						}),
						(e.destoryAd = function () {
							null != e.sudokuAd &&
								((e.sudokuAd.isDestroyed = !0),
								e.sudokuAd.offError(p.onError),
								e.sudokuAd.offClose(p.onClose),
								e.sudokuAd.destroy());
						}),
						(e.adUnitId = o.SudokuAd),
						(e.sudokuAd = null),
						e
					);
				})();
				n.SudokuAd = m;
				var y = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.load = function () {
							console.log('vivoAd Custom_Banner1 load success'),
								t._isShowBanner && (t._pauseTimer = !1);
						}),
						(e.onClose = function (e) {
							console.log('vivoAd Custom_Banner1 openAd onClose'),
								e && e.isEnded
									? (console.log(
											'vivoAd - Custom_Banner1 - onClose - \u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1'
									  ),
									  console.log(
											'customAd.closeAdCallback = ',
											t.closeAdCallback
									  ),
									  'function' == typeof t.closeAdCallback &&
											t.closeAdCallback(!0))
									: (console.log(
											'vivoAd - Custom_Banner1 - onClose - \u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1'
									  ),
									  'function' == typeof t.closeAdCallback &&
											t.closeAdCallback(!1)),
								setTimeout(function () {
									(t.openAdCallback = null),
										(t.closeAdCallback = null);
								}, 10),
								t.customAd &&
									(t.customAd.offClose(t.onClose),
									t.customAd.onLoad(t.load),
									t.customAd.offError(),
									t.customAd.offHide());
						}),
						(e.openAd = function () {
							if (
								0 !=
								c.LyControl.getOnceConcealValue(
									r.LyConcealAdConfig.custom_isOpen
								)
							) {
								if (
									((t._pauseTimer = !0),
									(t._isShowBanner = !0),
									t.customAd)
								)
									t._isShowBanner && (t._pauseTimer = !1);
								else {
									console.log(
										'Custom_Banner1\u52a0\u8f7d\u4e2d...'
									);
									var e = qg.getSystemInfoSync();
									e.screenWidth,
										e.screenHeight,
										(t.customAd = qg.createCustomAd({
											adUnitId: t.adUnitId
										}));
									var n = t.customAd.show();
									n &&
										n
											.then(function () {
												t.customAd.onLoad(t.load);
											})
											.catch(function (e) {
												t.customAd.onClose(t.onClose),
													console.error(
														'vivoAd Custom_Banner1 load error : ',
														e
													);
											});
								}
								t.customAd.onHide(function () {
									t.customAd &&
										(t.customAd.offError(),
										t.customAd.offHide(),
										(t.customAd = null),
										(t._pauseTimer = !0),
										(t._isShowBanner = !1));
								});
							}
						}),
						(e.destoryAd = function () {
							t.customAd &&
								(t.customAd.offError(),
								t.customAd.offHide(),
								t.customAd.hide(),
								(t.customAd = null),
								(t._pauseTimer = !0),
								(t._isShowBanner = !1));
						}),
						(e.close = function () {
							t.customAd &&
								(t.customAd.hide(),
								(t._pauseTimer = !0),
								(t._isShowBanner = !1));
						}),
						(e.doRefresh = function () {
							(t.BANNER_REFRESH_TIME =
								c.LyControl.getOnceConcealValue(
									r.LyConcealAdConfig
										.autoRefreshBannerIntervalTime
								)),
								-1 != t.BANNER_REFRESH_TIME &&
									((t.rTime += 1),
									t.rTime >= t.BANNER_REFRESH_TIME &&
										((t.rTime = 0),
										(t._pauseTimer = !0),
										t.refreshBanner()));
						}),
						(e.refreshBanner = function () {
							t.destoryAd(),
								setTimeout(function () {
									t.openAd();
								}, 500),
								console.log(
									'Custom_Banner1 \u5237\u65b0\u6210\u529f'
								);
						}),
						(e.adUnitId = o.Custom_Banner1),
						(e.customAd = null),
						(e.openAdCallback = null),
						(e.closeAdCallback = null),
						(e.rTime = 27),
						(e._isShowBanner = !1),
						(e._pauseTimer = !0),
						(e.BANNER_REFRESH_TIME = null),
						(t = i([f], e))
					);
				})();
				n.Custom_Banner1 = y;
				var A = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.onClose = function () {
							(t.isShowAd = !1),
								t.closeAdCallback(),
								t.destoryAd(),
								console.log(
									'\u5173\u95ed\u539f\u751f\u6a21\u677f  '
								);
						}),
						(e.openAd = function (e, n, i) {
							if (
								(console.log(
									'showInterAd4  closeAdCallback = ',
									e,
									'adTopPos = ',
									n
								),
								0 !=
									c.LyControl.getOnceConcealValue(
										r.LyConcealAdConfig.custom_isOpen
									))
							) {
								var a = new Date().getTime(),
									s = a - t.lastShowTime,
									d =
										1e3 *
										c.LyControl.getOnceConcealValue(
											r.LyConcealAdConfig
												.showIntersIntervalTime
										);
								console.log(
									'\u63d2\u5c4f\u5c55\u793a\u65f6\u95f4\u95f4\u9694\u4e3a\uff1a',
									d / 1e3
								);
								var u = s <= d;
								if ((console.log('tempTime = ', u), u))
									l.MiniGameControl._isInterShowTime = !0;
								else {
									(t.lastShowTime = a),
										(l.MiniGameControl._isInterShowTime =
											!1),
										console.log(
											'Custom_Inter.adUnitIdArr-----',
											t.adUnitIdArr
										),
										0 == t.adUnitIdArr.length &&
											((t.adUnitIdArr = [
												o.CUSTOM_INTER,
												o.CUSTOM_INTER2,
												o.CUSTOM_INTER3
											]),
											console.log(
												'Custom_Inter.adUnitIdArr-----\u4e3a\u7a7a',
												t.adUnitIdArr
											)),
										(t.adUnitId =
											t.adUnitIdArr[
												Math.floor(
													Math.random() *
														t.adUnitIdArr.length
												)
											]),
										console.log(
											'\u62c9\u53d6\u5230\u7684id: Custom_Inter',
											t.adUnitId
										),
										console.log(
											'Custom_Inter.customAd-----',
											t.customAd
										),
										console.log(
											'\u6267\u884copenAd  Custom_Inter'
										);
									var f = qg.getSystemInfoSync().screenHeight;
									t.customAd = qg.createCustomAd({
										adUnitId: t.adUnitId,
										style: {
											left: i,
											top: 0 == n ? f / 3 : n
										}
									});
									var h = c.LyControl.getOnceConcealValue(
										r.LyConcealAdConfig
											.delayShowIntersAdTime
									);
									console.log(
										'\u5ef6\u8fdf\u5c55\u793a\u63d2\u5c4f\u65f6\u95f4: ',
										h
									),
										setTimeout(function () {
											(t.closeAdCallback = e),
												console.log(
													'\u539f\u751f\u6a21\u677f\u5e7f\u544a\u52a0\u8f7d\u4e2d  Custom_Inter'
												),
												t.customAd
													.show()
													.then(function () {
														(t.isShowAd = !0),
															console.log(
																'\u539f\u751f\u6a21\u677f\u5e7f\u544a\u5c55\u793a\u5b8c\u6210  Custom_Inter'
															);
													})
													.catch(function (e) {
														t.closeAdCallback(),
															console.log(
																'\u539f\u751f\u6a21\u677f\u5e7f\u544a\u5c55\u793a\u5931\u8d25  Custom_Inter',
																JSON.stringify(
																	e
																)
															);
													});
										}, h),
										t.customAd.onError(function (e) {
											t.closeAdCallback(),
												console.log(
													t.adUnitId,
													'\u539f\u751f\u6a21\u677f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25  Custom_Inter',
													e
												);
										}),
										t.customAd.onClose(t.onClose);
								}
							}
						}),
						(e.destoryAd = function () {
							t.customAd &&
								(t.customAd.offLoad(),
								t.customAd.offClose(t.onClose),
								t.customAd.offError(),
								t.customAd.offHide(),
								t.customAd.offClose(),
								(t.openAdCallback = null),
								(t.closeAdCallback = null),
								(t.customAd = null));
						}),
						(e.close = function () {
							console.log('\u5173\u95edxxxxx'),
								t.customAd &&
									(t.customAd.offLoad(),
									t.customAd.offClose(t.onClose()),
									t.customAd.offError(),
									t.customAd.offHide(),
									t.customAd.hide(),
									(t.openAdCallback = null),
									(t.closeAdCallback = null),
									(t.customAd = null));
						}),
						(e.doRefresh = function () {
							(t.CUSTOM_INTER_REFRESH_TIME =
								c.LyControl.getOnceConcealValue(
									r.LyConcealAdConfig
										.autoRefreshIntersIntervalTime
								)),
								-1 != t.CUSTOM_INTER_REFRESH_TIME &&
									((t._refreshTime += 1),
									t._refreshTime >=
										t.CUSTOM_INTER_REFRESH_TIME &&
										((t._refreshTime = 0),
										t.openAd(
											function () {
												console.log(
													'Custom_Inter \u81ea\u52a8\u5f39\u51fa\u6210\u529f'
												);
											},
											0,
											0
										)));
						}),
						(e.adUnitIdArr = d.default.cus_intIdArr),
						(e.adUnitId = null),
						(e.customAd = null),
						(e.isShowAd = !1),
						(e.openAdCallback = null),
						(e.closeAdCallback = null),
						(e.lastShowTime = -1),
						(e._refreshTime = 0),
						(e.CUSTOM_INTER_REFRESH_TIME = null),
						(t = i([f], e))
					);
				})();
				n.Custom_Inter = A;
				var v = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.openAd = function (e, n) {
							if (
								0 !=
								c.LyControl.getOnceConcealValue(
									r.LyConcealAdConfig.custom_isOpen
								)
							)
								if (
									(0 == t.adUnitIdArr.length &&
										(t.adUnitIdArr = [
											o.CUSTOM_EXPRESS,
											o.CUSTOM_EXPRESS2
										]),
									(t.adUnitId =
										t.adUnitIdArr[
											Math.floor(
												Math.random() *
													t.adUnitIdArr.length
											)
										]),
									console.log(
										'\u62c9\u53d6\u5230\u7684id:  Custom_Express',
										t.adUnitId
									),
									t.customAd)
								)
									t.customAd
										.show()
										.then(function () {
											console.log(
												'\u539f\u751f\u6a21\u677f\u5e7f\u544a\u5c55\u793a\u5b8c\u6210  Custom_Express2'
											);
										})
										.catch(function (e) {
											console.log(
												'\u539f\u751f\u6a21\u677f\u5e7f\u544a\u5c55\u793a\u5931\u8d25  Custom_Express2',
												JSON.stringify(e)
											);
										});
								else {
									console.log('\u6267\u884copenAd');
									var i = qg.getSystemInfoSync().screenHeight;
									(t.customAd = qg.createCustomAd({
										adUnitId: t.adUnitId,
										style: {
											left: n,
											top: 0 == e ? i / 2 : e
										}
									})),
										t.customAd.onLoad(function () {
											console.log(
												'\u539f\u751f\u6a21\u677f\u5e7f\u544a\u52a0\u8f7d\u4e2d  Custom_Express'
											),
												t.customAd
													.show()
													.then(function () {
														console.log(
															'\u539f\u751f\u6a21\u677f\u5e7f\u544a\u5c55\u793a\u5b8c\u6210  Custom_Express'
														);
													})
													.catch(function (e) {
														console.log(
															'\u539f\u751f\u6a21\u677f\u5e7f\u544a\u5c55\u793a\u5931\u8d25  Custom_Express',
															JSON.stringify(e)
														);
													});
										}),
										t.customAd.onError(function (e) {
											console.log(
												t.adUnitId,
												'\u539f\u751f\u6a21\u677f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25  Custom_Express',
												e
											);
										});
								}
						}),
						(e.destoryAd = function () {
							t.customAd &&
								(t.customAd.offLoad(),
								t.customAd.offError(),
								t.customAd.offHide(),
								t.customAd.hide(),
								(t.customAd = null),
								(t.openAdCallback = null),
								(t.closeAdCallback = null));
						}),
						(e.close = function () {
							t.customAd &&
								(t.customAd.offLoad(),
								t.customAd.offError(),
								t.customAd.offHide(),
								t.customAd.hide(),
								(t.openAdCallback = null),
								(t.closeAdCallback = null),
								(t.customAd = null));
						}),
						(e.adUnitIdArr = d.default.cus_ExpIdArr),
						(e.adUnitId = null),
						(e.customAd = null),
						(e.openAdCallback = null),
						(e.closeAdCallback = null),
						(t = i([f], e))
					);
				})();
				n.Custom_Express = v;
				var _ = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.init = function () {
							t.openAd(
								s.LyConfig.AD_NAME.BANNER,
								null,
								null,
								null
							),
								t.doHeartTimer();
						}),
						(e.log = function (e) {
							console.log(e);
						}),
						(e.getAdClass = function (e) {
							var t = null;
							return (
								e == s.LyConfig.AD_NAME.BANNER
									? (t = h)
									: e == s.LyConfig.AD_NAME.VIDEO
									? (t = p)
									: e == s.LyConfig.AD_NAME.INTERSTITIAL
									? (t = g)
									: e == s.LyConfig.AD_NAME.CUSTOM_BANNER1
									? (t = y)
									: e == s.LyConfig.AD_NAME.CUSTOM_EXPRESS
									? (t = v)
									: e == s.LyConfig.AD_NAME.CUSTOM_INTER
									? (t = A)
									: console.error(
											'\u6ca1\u6709\u627e\u5230\u6307\u5b9avivo\u5e7f\u544a \uff1a ',
											e
									  ),
								t
							);
						}),
						(e.judgeCanShowSpecialAd = function () {
							var e = new Date().getTime(),
								n = e - t.lastAddBannerTime;
							return (
								console.log('passTime = ', n),
								n > 6e4
									? ((t.oneMinShowCount = 1),
									  (t.lastAddBannerTime = e))
									: t.oneMinShowCount < 2 &&
									  (t.oneMinShowCount += 1),
								!0
							);
						}),
						(e.openAd = function (e, t, n, o, i) {
							void 0 === o && (o = null),
								void 0 === i && (i = null),
								console.log('VivoAd openAd ad Name:', e),
								e == s.LyConfig.AD_NAME.BANNER
									? h.openAd()
									: e == s.LyConfig.AD_NAME.VIDEO
									? p.openAd(t, n)
									: e == s.LyConfig.AD_NAME.INTERSTITIAL
									? g.openAd(n)
									: e == s.LyConfig.AD_NAME.CUSTOM_BANNER1
									? y.openAd()
									: e == s.LyConfig.AD_NAME.CUSTOM_INTER
									? (console.log(
											'showInterAd3  openAdCallback = ',
											t,
											'closeAdCallback = ',
											n
									  ),
									  A.openAd(n, o, i))
									: e == s.LyConfig.AD_NAME.CUSTOM_EXPRESS &&
									  v.openAd(o, i);
						}),
						(e.openExpressAd = function (e, t, n, o) {
							void 0 === t && (t = null),
								void 0 === n && (n = null),
								void 0 === o && (o = null),
								console.log('VivoAd openAd adName:', e),
								e == s.LyConfig.AD_NAME.CUSTOM_EXPRESS &&
									v.openAd(t, n);
						}),
						(e.closeAd = function (e) {
							var n = t.getAdClass(e);
							n && n.close && n.close();
						}),
						(e.loadAd = function (e, n) {
							void 0 === n && (n = null);
							var o = t.getAdClass(e);
							o && o.load && o.load(n);
						}),
						(e.getNativeData = function (e) {
							var n = null;
							return (
								this.judgeCanShowSpecialAd() &&
									(n = t.getAdClass(e).getAdDatas()),
								n
							);
						}),
						(e.reportAdShow = function (e, n) {
							var o = t.getAdClass(e);
							o && o.reportAdShow && o.reportAdShow(n);
						}),
						(e.reportAdClick = function (e, n) {
							var o = t.getAdClass(e);
							o && o.reportAdClick && o.reportAdClick(n);
						}),
						(e.destoryAd = function (e) {
							var n = t.getAdClass(e);
							n && n.destoryAd && n.destoryAd();
						}),
						(e.isShowAd = function (e) {
							var t = !1;
							return (
								e == s.LyConfig.AD_NAME.CUSTOM_INTER &&
									(t = A.isShowAd),
								t
							);
						}),
						(e.doHeartTimer = function () {
							setInterval(function () {
								y.doRefresh(), h.doRefresh(), A.doRefresh();
							}, 1e3);
						}),
						(e.lastAddBannerTime = -1),
						(e.oneMinShowCount = 0),
						(t = i([f], e))
					);
				})();
				(n.VivoAd = _), cc._RF.pop();
			},
			{
				'./LyConcealAdConfig': 'LyConcealAdConfig',
				'./LyConfig': 'LyConfig',
				'./LyControl': 'LyControl',
				'./MiniGameControl': 'MiniGameControl',
				'./VivoDatas': 'VivoDatas'
			}
		],
		VivoDatas: [
			function (e, t, n) {
				'use strict';
				cc._RF.push(t, 'a9c84Tx57VJzo1q1l5K6ojo', 'VivoDatas'),
					Object.defineProperty(n, '__esModule', { value: !0 });
				var o = (function () {
					function e() {}
					return (
						(e.bannerIdIdArr = []),
						(e.videoIdArr = []),
						(e.cus_intIdArr = []),
						(e.cus_ExpIdArr = []),
						e
					);
				})();
				(n.default = o), cc._RF.pop();
			},
			{}
		],
		YYGplatform: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '332e1PYboNL77C41+ju6bhv', 'YYGplatform'),
					(window.SOUNDFlag = !0);
				var n,
					o,
					i,
					a,
					r,
					s,
					c,
					l,
					d,
					u,
					f,
					h = {
						appName: 'Clownfish Pin Out',
						appID: 'Clownfish-Pin-Out'
					},
					p = 0,
					g = !0,
					m = [],
					y = [],
					A = [],
					v = !1;
				(window.YYGplatform =
					((i = function (e, t) {
						if ('undefined' == typeof YYGGames) {
							var n = document.createElement('script');
							n.setAttribute('type', 'text/javascript'),
								n.setAttribute('src', e),
								document
									.getElementsByTagName('body')[0]
									.appendChild(n),
								t && (n.onload = t);
						} else t();
					}),
					(a = function (e) {
						document.getElementsByTagName('title')[0].innerText = e;
					}),
					(r = function () {
						var e = document.createElement('style');
						(e.innerText =
							'body {overflow: hidden;} #Game {position: absolute;margin: 0;overflow: hidden;width: 1080 px; height: 1080px;left: 50%;top: 50%;transform: translate(-50%, -50%);}#AdTip {overflow: hidden;word-break: break-all;overflow-wrap: break-word;font-family: Arial;padding: 10px;min-height: 20px;color: rgb(255, 255, 255);line-height: 20px;text-align: center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0, 0.7);font-size: 18px;width: 90%;opacity: 1;-webkit-transform: 0.5s ease-in, opacity 0.5s ease-in;}.divImage {position: absolute;z-index: 99999;}'),
							document.head.appendChild(e);
					}),
					(s = function (e) {
						var t = new cc.Node();
						(t.name = 'GameBox1'),
							(t.width = 165),
							(t.height = 165),
							(t.anchorX = t.anchorY = 0.5),
							(t.x = -100),
							(t.y = 0);
						var n = new cc.Node();
						(n.name = 'item'),
							(n.width = 165),
							(n.height = 165),
							(n.anchorX = n.anchorY = 0.5),
							(n.x = 0),
							(n.y = 0);
						var o = n.addComponent(cc.Sprite);
						(o.sizeMode = 0), (o.spriteFrame = window.di);
						var i = new cc.Node();
						(i.x = 0),
							(i.y = 0),
							(i.width = 150),
							(i.height = 150),
							(i.name = 'Mask');
						var a = i.addComponent(cc.Mask);
						(a.type = cc.Mask.Type.IMAGE_STENCIL),
							(a.spriteFrame = window.di),
							(a.inverted = !1),
							n.addChild(i),
							t.addChild(n);
						var r = new cc.Node();
						(r.name = 'GameBox2'),
							(r.width = 165),
							(r.height = 165),
							(r.anchorX = r.anchorY = 0.5),
							(r.x = 100),
							(r.y = 0);
						var s = new cc.Node();
						(s.name = 'item2'),
							(s.width = 165),
							(s.height = 165),
							(s.anchorX = s.anchorY = 0.5),
							(s.x = 0),
							(s.y = 0);
						var c = s.addComponent(cc.Sprite);
						(c.sizeMode = 0), (c.spriteFrame = window.di);
						var l = new cc.Node();
						(l.x = 0),
							(l.y = 0),
							(l.width = 150),
							(l.height = 150),
							(l.name = 'Mask2');
						var d = l.addComponent(cc.Mask);
						(d.type = cc.Mask.Type.IMAGE_STENCIL),
							(d.spriteFrame = window.di),
							(d.inverted = !1),
							s.addChild(l),
							r.addChild(s);
						var u = new cc.Node();
						return (
							u.addChild(t),
							u.addChild(r),
							(YYGplatform.GameBox = u),
							e.addChild(u),
							console.log('AdNode: ', [t, r]),
							u
						);
					}),
					(c = function (e, t) {
						for (var n = [], i = 0; i < 12; i++) n.push(i);
						var a = n[Math.floor(12 * Math.random())];
						n.splice(a, 1);
						var r = cc.find('item/Mask', e),
							s = new cc.Node();
						r.addChild(s);
						var c = s.addComponent(cc.Sprite);
						(c.sizeMode = 0),
							(c.spriteFrame = new cc.SpriteFrame(A[a])),
							(s.width = 150),
							(s.height = 150),
							s.addComponent(cc.Button),
							s.on('click', function () {
								YYGGames.navigate('MainMenu', 'MORE', o[a].id);
							});
						var l = n[Math.floor(11 * Math.random())],
							d = cc.find('item2/Mask2', t),
							u = new cc.Node();
						d.addChild(u);
						var f = u.addComponent(cc.Sprite);
						(f.sizeMode = 0),
							(f.spriteFrame = new cc.SpriteFrame(A[l])),
							(u.width = 150),
							(u.height = 150),
							u.addComponent(cc.Button),
							u.on('click', function () {
								YYGGames.navigate('MainMenu', 'MORE', o[l].id);
							});
					}),
					(l = function (e) {
						var t = new cc.Node();
						(t.name = 'GameBanner'),
							(t.width = 1405),
							(t.height = 185),
							(t.anchorX = t.anchorY = 0),
							(t.x = -702.5),
							(t.y = -630);
						var n = new cc.Node();
						(n.name = 'New ScrollView'),
							(n.width = 1405),
							(n.height = 185),
							(n.anchorX = n.anchorY = 0),
							(n.x = n.y = 0);
						var o = n.addComponent(cc.Sprite);
						(o.sizeMode = 0), (o.spriteFrame = window.di2);
						var i = new cc.Node();
						(i.name = 'view'),
							(i.width = 1405),
							(i.height = 185),
							(i.anchorX = i.anchorY = 0),
							(i.x = i.y = 0);
						var a = i.addComponent(cc.Mask);
						(a.type = cc.Mask.Type.IMAGE_STENCIL),
							(a.spriteFrame = window.di),
							(a.inverted = !1);
						var r = new cc.Node();
						(r.name = 'content'),
							(r.width = 1405),
							(r.height = 185),
							(r.anchorX = r.anchorY = 0),
							(r.x = r.y = 0);
						var s = new cc.Node();
						(s.name = 'item'),
							(s.anchorX = s.anchorY = 0),
							(s.x = 10),
							(s.y = 20),
							(s.width = 145),
							(s.height = 145);
						var c = new cc.Node();
						(c.x = 72.5),
							(c.y = 72.5),
							(c.width = 145),
							(c.height = 145),
							(c.name = 'Mask'),
							e.addChild(t),
							t.addChild(n),
							n.addChild(i),
							i.addChild(r),
							r.addChild(s),
							s.addChild(c);
						var l = c.addComponent(cc.Mask);
						return (
							(l.type = cc.Mask.Type.IMAGE_STENCIL),
							(l.spriteFrame = window.di),
							(l.inverted = !1),
							(YYGplatform.GameBanner = t),
							t
						);
					}),
					(d = function (e) {
						e &&
							g &&
							(e.x > -(e.width - 540 - 50)
								? (e.x -= 0.5)
								: (e.x = 0));
					}),
					(u = function (e) {
						a(h.appName),
							r(),
							i(
								'https://h5gamessdk.yyggames.com/sdk/YYGGames.js',
								function () {
									var t = this;
									YYGGames.init({
										appName: h.appID,
										channel: 5,
										config: {
											gamedistributionId:
												h.gamedistributionId,
											gamemonetizeId: h.gamemonetizeId
										},
										complete: function () {
											(window.showMetheAuthor =
												function () {
													var e =
														document.createElement(
															'iframe'
														);
													(e.style.display = 'none'),
														document.head.appendChild(
															e
														),
														e.contentWindow.console.log.apply(
															this,
															[
																'%c %c %c YYGGAMES %c%s %c %c ',
																'background: #fb8cb3',
																'background: #d44a52',
																'color: #ffffff; background: #871905',
																'color: #ffffff;background: #871905;',
																'116,104,101,32,103,97,109,101,32,105,115,32,112,111,119,101,114,101,100,32,98,121,32,121,121,103'
																	.split(',')
																	.map(
																		function (
																			e
																		) {
																			return String.fromCharCode(
																				~~e
																			);
																		}
																	)
																	.join(''),
																'background: #d44a52',
																'background: #fb8cb3'
															]
														);
												}),
												document.getElementById(
													'AdTip'
												) &&
													(YYGGames.showTip =
														function (e, t) {
															(t = isNaN(t)
																? 2e3
																: t),
																(document.getElementById(
																	'AdTip'
																).innerHTML =
																	e),
																(document.getElementById(
																	'AdTip'
																).style.display =
																	''),
																setTimeout(
																	function () {
																		document.getElementById(
																			'AdTip'
																		).style.display =
																			'none';
																	},
																	t
																);
														});
											var n = location.href;
											YYGGames.moreGameEnabled &&
											-1 ==
												n.indexOf(
													'gamedistribution.c'
												) &&
											-1 == n.indexOf('gamemonetize.c')
												? f(e)
												: ((v = !0), e()),
												YYGGames.addEventListener(
													YYGGames.events.adDismissed,
													t,
													function () {
														YYGGames.showTip(
															'Pls watch the ad completely, so that you can claim your reward'
														);
													}
												);
										}
									});
								}
							);
					}),
					(f = function (e) {
						v = !1;
						var t = YYGGames.forgames.slice();
						console.log('forgames', t),
							t.length > 1 &&
								(t.sort(function () {
									return 0.5 - Math.random();
								}),
								(o = t),
								(function n() {
									cc.loader.load(t[p].thumb, function (o, i) {
										o ||
											(A.push(i),
											++p < t.length ? n() : e && e());
									});
								})());
					}),
					{
						init: function (e) {
							cc.loader.load(
								'https://h5gamessdk.yyggames.com/sdk/res/di1.png',
								function (t, n) {
									t ||
										cc.loader.load(
											'https://h5gamessdk.yyggames.com/sdk/res/di2.png',
											function (t, o) {
												if (!t) {
													(window.di =
														new cc.SpriteFrame(n)),
														(window.di2 =
															new cc.SpriteFrame(
																o
															));
													var i =
														new XMLHttpRequest();
													i.open('get', 'cnf.json'),
														i.send(null),
														(i.onload =
															function () {
																if (
																	200 ==
																	i.status
																) {
																	var t =
																		JSON.parse(
																			i.responseText
																		);
																	console.info(
																		'%c cnf: ',
																		'background:#a8edcc',
																		t
																	),
																		(h = t);
																}
																u(e);
															});
												}
											}
										);
								}
							);
						},
						initGameBanner: function (e) {
							var t = l(e);
							if (v) t.active = 0;
							else {
								var i = cc.find('New ScrollView', t);
								y = [];
								for (var a = 0; a < 12; a++) {
									var r = cc.find('view/content/item', i),
										s = cc.find('view/content', i),
										c = cc.instantiate(r);
									c.x = 10 + 170 * a;
									var u = cc.find('Mask', c),
										f = new cc.Node(),
										h = f.addComponent(cc.Sprite);
									(h.sizeMode = 0),
										(h.spriteFrame = new cc.SpriteFrame(
											A[a]
										)),
										(f.width = 150),
										(f.height = 150),
										u.addChild(f),
										y.push(f),
										m.push(u),
										s.addChild(c);
								}
								console.log('btnArray: ', y);
								for (
									var p = function (e) {
											y[e].addComponent(cc.Button),
												y[e].on('click', function () {
													console.log(
														'btnArray[i]',
														e
													),
														YYGGames.navigate(
															'MainMenu',
															'MORE',
															o[e].id
														);
												}),
												y[e].on(
													'mouseenter',
													function () {
														0 != m.length &&
															((g = !1),
															(m[e].scaleX = 1.1),
															(m[
																e
															].scaleY = 1.1));
													}
												),
												y[e].on(
													'mouseleave',
													function () {
														0 != m.length &&
															((g = !0),
															(m[e].scaleX = 1),
															(m[e].scaleY = 1));
													}
												);
											var t =
												document.getElementById(
													'GameCanvas'
												);
											t &&
												t.addEventListener(
													'mouseout',
													function () {
														0 != m.length &&
															((g = !0),
															(m[e].scaleX = 1),
															(m[e].scaleY = 1));
													}
												);
										},
										_ = 0;
									_ < y.length;
									_++
								)
									p(_);
								n = setInterval(function () {
									d(s);
								}, 1);
							}
						},
						initGameBox: function (e) {
							var t = s(e);
							v
								? (t.active = 0)
								: c(
										t.getChildByName('GameBox1'),
										t.getChildByName('GameBox2')
								  );
						},
						removeBanner: function () {
							(m = []), clearInterval(n);
						},
						showInterstitial: function (e) {
							YYGGames.showInterstitial(e);
						},
						showReward: function (e) {
							if (!YYGGames.rewardReady)
								return (
									YYGGames.showTip('No Available Video'),
									void (
										e.rewardDismissed && e.rewardDismissed()
									)
								);
							YYGGames.showReward(e);
						},
						hideIcon: function () {
							document
								.getElementById('puzzlegame')
								.setAttribute('style', 'display: none');
						},
						showIcon: function () {
							document
								.getElementById('puzzlegame')
								.setAttribute(
									'style',
									'width:15%;top: 1%;right: 1%;'
								);
						}
					})),
					cc._RF.pop();
			},
			{}
		],
		baiDuAd: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '0c27do4PLJBfpnakXncMoGl', 'baiDuAd'),
					cc._RF.pop();
			},
			{}
		],
		baseAdNode: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '780fb1zmNNM3atucHtK8ZWW', 'baseAdNode'),
					cc._RF.pop();
			},
			{}
		],
		btnBreathAnim: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, 'c28450w2a1O+4Tq2VL+9GWI', 'btnBreathAnim');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyConfig'),
					s = cc._decorator,
					c = s.ccclass;
				s.property;
				var l = (function (e) {
					function t() {
						var t =
							(null !== e && e.apply(this, arguments)) || this;
						return (t._initScale = 0), t;
					}
					return (
						i(t, e),
						(t.prototype.onLoad = function () {
							this._initScale = this.node.scale;
						}),
						(t.prototype.start = function () {}),
						(t.prototype.onEnable = function () {
							r.LyConfig.LY_LIB_TYPE == r.LIB_TYPE.CHANNEL &&
								(this.node.stopAllActions(),
								this._initScale &&
									(this.node.scale = this._initScale),
								this.node.active &&
									this.node.getComponent(cc.Button)
										.interactable &&
									this.node.runAction(
										cc
											.sequence(
												cc.scaleBy(0.3, 1.2),
												cc.scaleTo(
													0.3,
													this._initScale
												),
												cc.scaleBy(0.3, 1.2),
												cc.scaleTo(
													0.3,
													this._initScale
												),
												cc.delayTime(0.5)
											)
											.repeatForever()
									));
						}),
						a([c], t)
					);
				})(cc.Component);
				(n.default = l), cc._RF.pop();
			},
			{ './LyConfig': 'LyConfig' }
		],
		btnDelayShow: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '7f97dSSwjpMYKJ2mevr9rN5', 'btnDelayShow');
				var n = e('./LyConfig').LyConfig,
					o = e('./LyControl').LyControl;
				cc.Class({
					extends: cc.Component,
					properties: { btnPro: cc.Button, deleayTime: 2e3 },
					onEnable: function () {
						var e = this;
						o.getPlatformType() != n.PlatformDefine.WeChatGame &&
							this &&
							this.node &&
							this.node.opacity &&
							((this.node.opacity = 0),
							(this.btnPro.interactable = !1),
							setTimeout(function () {
								e.node &&
									(e.node.runAction(cc.fadeIn(0.2)),
									(e.btnPro.interactable = !0));
							}, this.deleayTime));
					},
					start: function () {}
				}),
					cc._RF.pop();
			},
			{ './LyConfig': 'LyConfig', './LyControl': 'LyControl' }
		],
		btnOppogdjc: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, '86e8bmAIA5Fr7SR+YDM6W6r', 'btnOppogdjc');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = cc._decorator,
					s = r.ccclass,
					c = r.property,
					l = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.mSpriteIcon = null),
								(t.mNeedLoadPic = !0),
								(t.mIsLoaded = !1),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.onLoad = function () {
								var e = !1;
								ly.queryPlatform &&
									'oppoAd' == ly.queryPlatform() &&
									((e = !0), this.loadPic()),
									(this.node.active = e);
							}),
							(t.prototype.loadPic = function () {
								if (this.mNeedLoadPic) {
									var e =
											'http://oss.leyungame.com/share/lywx/ht/oppogdjc.png',
										t = this.mSpriteIcon;
									cc.assetManager.loadRemote(
										e,
										function (n, o) {
											n
												? console.error(
														'load _url:',
														e,
														' error:',
														n
												  )
												: ((t.spriteFrame =
														new cc.SpriteFrame(o)),
												  (this.mIsLoaded = !0));
										}.bind(this)
									);
								} else this.mIsLoaded = !0;
							}),
							(t.prototype.onBtnClicked = function () {
								this.mIsLoaded
									? ly.JumpToOtherpush()
									: (this.node.active = !1);
							}),
							a(
								[c(cc.Sprite)],
								t.prototype,
								'mSpriteIcon',
								void 0
							),
							a(
								[c(cc.Boolean)],
								t.prototype,
								'mNeedLoadPic',
								void 0
							),
							a([s], t)
						);
					})(cc.Component);
				(n.default = l), cc._RF.pop();
			},
			{}
		],
		btnScaleAnim: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, '69d3cvTbkxDjZ+cTOYQnzjv', 'btnScaleAnim');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyConfig'),
					s = e('./LyControl'),
					c = cc._decorator,
					l = c.ccclass,
					d = c.property,
					u = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (t.btnNode = null), (t.doDelayTime = 1), t;
						}
						return (
							i(t, e),
							(t.prototype.start = function () {}),
							(t.prototype.onEnable = function () {
								s.LyControl.getPlatformType() ==
									r.LyConfig.PlatformDefine.WeChatGame &&
									(this.doDelayTime = 0.01),
									this.btnNode.runAction(
										cc.sequence(
											cc.delayTime(this.doDelayTime),
											cc.scaleTo(0.2, 1)
										)
									);
							}),
							(t.prototype.onDisable = function () {
								this.btnNode.scaleX = 0;
							}),
							a([d(cc.Node)], t.prototype, 'btnNode', void 0),
							a(
								[d(cc.Integer)],
								t.prototype,
								'doDelayTime',
								void 0
							),
							a([l], t)
						);
					})(cc.Component);
				(n.default = u), cc._RF.pop();
			},
			{ './LyConfig': 'LyConfig', './LyControl': 'LyControl' }
		],
		expressAd: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, 'a61c5/RTANKdpRNghmfOnnx', 'expressAd');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyConfig'),
					s = e('./LyControl'),
					c = e('./LyUtils'),
					l = cc._decorator,
					d = l.ccclass,
					u = l.property,
					f = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (t.delayShowTime = 1), t;
						}
						return (
							i(t, e),
							(t.prototype.start = function () {}),
							(t.prototype.onEnable = function () {
								var e = this;
								setTimeout(function () {
									var t = c.LyUtils.getNativeAdMsg(
										e.node.width,
										e.node.height,
										e.node.y
									);
									s.LyControl.showExpressAd(
										t.width,
										t.height,
										t.posY,
										r.LyConfig.NATIVE_BTN_POS.TOP
									);
								}, 50 + this.delayShowTime);
							}),
							(t.prototype.onDisable = function () {
								s.LyControl.closeExpressAd();
							}),
							a(
								[u(cc.Integer)],
								t.prototype,
								'delayShowTime',
								void 0
							),
							a([d], t)
						);
					})(cc.Component);
				(n.default = f), cc._RF.pop();
			},
			{
				'./LyConfig': 'LyConfig',
				'./LyControl': 'LyControl',
				'./LyUtils': 'LyUtils'
			}
		],
		gameSaveFishAddCoinBtn: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'8b8a19Yn7JBJJ2q52urhnVe',
					'gameSaveFishAddCoinBtn'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./gameSaveFishGameUtils'),
					s = e('./gameSaveFishViewControl'),
					c = cc._decorator,
					l = c.ccclass;
				c.property;
				var d = (function (e) {
					function t() {
						return (null !== e && e.apply(this, arguments)) || this;
					}
					return (
						i(t, e),
						(t.prototype.start = function () {}),
						(t.prototype.onClickAddCoin = function () {
							r.default.openEffect('Button'),
								s.default.addCoinLayer();
						}),
						a([l], t)
					);
				})(cc.Component);
				(n.default = d), cc._RF.pop();
			},
			{
				'./gameSaveFishGameUtils': 'gameSaveFishGameUtils',
				'./gameSaveFishViewControl': 'gameSaveFishViewControl'
			}
		],
		gameSaveFishAddCoinLayer: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'b704aHTA1REdZQExXo+ePbm',
					'gameSaveFishAddCoinLayer'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyConcealAdConfig'),
					s = e('./LyConfig'),
					c = e('./LyControl'),
					l = e('./LyUtils'),
					d = e('./MiniGameControl'),
					u = e('./gameSaveFishGameData'),
					f = e('./gameSaveFishGameUtils'),
					h = e('./gameSaveFishViewControl'),
					p = cc._decorator,
					g = p.ccclass,
					m = p.property,
					y = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.layerNode = null),
								(t.coinLabel = null),
								(t.btnCoinNode = null),
								(t.targetCoinNode = null),
								(t.adPos = null),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.onLoad = function () {
								this.layerNode.opacity = 0;
							}),
							(t.prototype.start = function () {}),
							(t.prototype.onEnable = function () {
								f.default._jellyPopLayer(
									this.layerNode,
									function () {
										d.MiniGameControl._isInterShowTime
											? (console.log(
													'\u63d2\u5c4f\u65f6\u95f4\u95f4\u9694\u4e2d\uff0c\u5c55\u793a\u4fe1\u606f\u6d41'
											  ),
											  c.LyControl.openConcealAd(
													r.LyConcealAdConfig.yuans3
											  ))
											: c.LyControl.openConcealAd(
													r.LyConcealAdConfig
														.EnterAddCoinLayer,
													function () {
														c.LyControl.openConcealAd(
															r.LyConcealAdConfig
																.yuans3
														);
													}
											  );
									}
								),
									this.updateCoinLabel();
							}),
							(t.prototype.onDisable = function () {
								c.LyControl.openConcealAd(
									r.LyConcealAdConfig.ExitAddCoinLayer
								),
									(this.layerNode.opacity = 0),
									c.LyControl.getPlatformType() ==
										s.LyConfig.PlatformDefine
											.VivoQuickGame &&
										(console.log(
											'\u539f\u751f\u6a21\u677f\u5e7f\u544a\u5173\u95ed CUSTOM_EXPRESS  1'
										),
										c.LyControl.destoryNativeAd(
											s.LyConfig.AD_NAME.CUSTOM_INTER
										),
										c.LyControl.destoryNativeAd(
											s.LyConfig.AD_NAME.CUSTOM_EXPRESS
										));
							}),
							(t.prototype.updateCoinLabel = function () {
								this.coinLabel.string =
									u.default.getCoinCount() + '';
							}),
							(t.prototype.updateTempCoinLabel = function (e) {
								(this.coinLabel.string = e + ''),
									l.LyUtils.showToast('Coin +1000');
							}),
							(t.prototype.onClickExit = function () {
								f.default.openEffect('Button'),
									(this.node.active = !1);
							}),
							(t.prototype.onClickGet = function () {
								f.default.openEffect('Button');
								var e = this;
								c.LyControl.openConcealAd(
									r.LyConcealAdConfig.ClickAddCoin,
									function (t) {
										if (t) {
											var n =
												u.default.getCoinCount() + 0;
											u.default.addCoinCount(1e3),
												h.default.updateAllCoinUI(),
												h.default.addFlyCoinAnim(
													e.btnCoinNode,
													e.targetCoinNode,
													function (t, o) {
														if (t == o - 1)
															e.updateCoinLabel();
														else {
															var i =
																	((t + 1) /
																		o) *
																	1e3,
																a = Math.floor(
																	n + i
																);
															e.updateTempCoinLabel(
																a
															);
														}
													}
												);
										} else
											l.LyUtils.showToast(
												'\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1'
											);
									},
									function () {
										l.LyUtils.showToast(
											'\u6682\u65e0\u89c6\u9891'
										);
									}
								);
							}),
							a([m(cc.Node)], t.prototype, 'layerNode', void 0),
							a([m(cc.Label)], t.prototype, 'coinLabel', void 0),
							a([m(cc.Node)], t.prototype, 'btnCoinNode', void 0),
							a(
								[m(cc.Node)],
								t.prototype,
								'targetCoinNode',
								void 0
							),
							a([m(cc.Node)], t.prototype, 'adPos', void 0),
							a([g], t)
						);
					})(cc.Component);
				(n.default = y), cc._RF.pop();
			},
			{
				'./LyConcealAdConfig': 'LyConcealAdConfig',
				'./LyConfig': 'LyConfig',
				'./LyControl': 'LyControl',
				'./LyUtils': 'LyUtils',
				'./MiniGameControl': 'MiniGameControl',
				'./gameSaveFishGameData': 'gameSaveFishGameData',
				'./gameSaveFishGameUtils': 'gameSaveFishGameUtils',
				'./gameSaveFishViewControl': 'gameSaveFishViewControl'
			}
		],
		gameSaveFishAnimPin: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'f78f8GFMxRP372SkY9DaHNH',
					'gameSaveFishAnimPin'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyControl'),
					s = cc._decorator,
					c = s.ccclass,
					l = s.property,
					d = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.pinAnim = null),
								(t._nowPosIndex = 1),
								(t._canTouch = !0),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.onLoad = function () {
								this.node.on(
									cc.Node.EventType.TOUCH_END,
									this.onTouchEnd,
									this
								),
									this.pinAnim.on(
										'finished',
										this.animEndCall,
										this
									);
							}),
							(t.prototype.start = function () {}),
							(t.prototype.animEndCall = function () {
								this._canTouch = !0;
							}),
							(t.prototype.onTouchEnd = function () {
								if (
									this._canTouch &&
									!r.LyControl.IS_SHOW_VIDEO_LAYER
								) {
									this._canTouch = !1;
									for (
										var e = this.pinAnim.getClips(),
											t = [],
											n = 0;
										n < e.length;
										n++
									) {
										var o = e[n].name;
										t.push(o);
									}
									var i = this.pinAnim.getClips().length;
									(this._nowPosIndex += 1),
										(this._nowPosIndex =
											this._nowPosIndex > i - 1
												? 0
												: this._nowPosIndex);
									var a = t[this._nowPosIndex];
									this.pinAnim.playAdditive(a);
								}
							}),
							(t.prototype.update = function () {}),
							a(
								[l(cc.Animation)],
								t.prototype,
								'pinAnim',
								void 0
							),
							a([c], t)
						);
					})(cc.Component);
				(n.default = d), cc._RF.pop();
			},
			{ './LyControl': 'LyControl' }
		],
		gameSaveFishBoxLayer: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'c8d10egugZL0YlLdgNan7EL',
					'gameSaveFishBoxLayer'
				);
				var i,
					a =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					r = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.BOXS_REWARD_ENUM = void 0);
				var s,
					c = e('./LyConcealAdConfig'),
					l = e('./LyControl'),
					d = e('./LyUtils'),
					u = e('./gameSaveFishGameConfig'),
					f = e('./gameSaveFishGameData'),
					h = e('./gameSaveFishGameUtils'),
					p = e('./gameSaveFishViewControl'),
					g = e('./gameSaveFishBoxNode'),
					m = cc._decorator,
					y = m.ccclass,
					A = m.property;
				((s = i = n.BOXS_REWARD_ENUM || (n.BOXS_REWARD_ENUM = {}))[
					(s.COIN_1 = 0)
				] = 'COIN_1'),
					(s[(s.COIN_2 = 1)] = 'COIN_2'),
					(s[(s.FISH = 2)] = 'FISH');
				var v = (function (e) {
					function t() {
						var t =
							(null !== e && e.apply(this, arguments)) || this;
						return (
							(t.coinLabel = null),
							(t.boxLayer = null),
							(t.jingyuNode = null),
							(t.keyLayer = null),
							(t.keyNodes = []),
							(t.earnBtnNode = null),
							(t.btnBegin = null),
							(t.fishSpine = null),
							(t.coinNode = null),
							(t.fishSpineNode = null),
							(t.bestCoin = null),
							(t._keyCount = 3),
							(t._openCount = 0),
							(t._isGetFish = !1),
							(t._starCount = 3),
							(t._fishIndex = -1),
							(t._addKeyCount = 0),
							t
						);
					}
					return (
						a(t, e),
						(t.prototype.start = function () {
							for (
								var e = 0;
								e < this.boxLayer.childrenCount;
								e++
							)
								this.boxLayer.children[e]
									.getComponent(g.default)
									.init(this);
						}),
						(t.prototype.onEnable = function () {
							var e = this;
							l.LyControl.openConcealAd(
								c.LyConcealAdConfig.EnterBoxLayer
							),
								this.updateCoinLabel(),
								(this._keyCount = f.default.getKeyCount()),
								(this._openCount = 0),
								(this._isGetFish = !1),
								this.showKeyCount(),
								(this._addKeyCount = 0),
								(this._fishIndex =
									f.default.getRandomUnlockFish()),
								this.updateFishSprite(),
								setTimeout(function () {
									e.showBoxAnim();
								}, 500);
						}),
						(t.prototype.onDisable = function () {
							l.LyControl.openConcealAd(
								c.LyConcealAdConfig.ExitBoxLayer
							),
								(this.jingyuNode.scale = 0);
							for (
								var e = 0;
								e < this.boxLayer.childrenCount;
								e++
							)
								this.boxLayer.children[e].scale = 0;
						}),
						(t.prototype.showBoxAnim = function () {
							var e = this;
							this.jingyuNode.runAction(
								cc.sequence(
									cc.scaleTo(0.1, 0.8, 1.2),
									cc.scaleTo(0.1, 1.2, 0.8),
									cc.scaleTo(0.1, 1, 1),
									cc.callFunc(function () {
										for (
											var t = 0;
											t < e.boxLayer.childrenCount;
											t++
										)
											e.boxLayer.children[t].runAction(
												cc.sequence(
													cc.delayTime(0.05 * t),
													cc.scaleTo(0.2, 1.2),
													cc.scaleTo(0.1, 1)
												)
											);
									})
								)
							);
						}),
						(t.prototype.updateFishSprite = function () {
							-1 != this._fishIndex
								? ((this.bestCoin.active = !1),
								  (this.fishSpineNode.active = !0),
								  h.default.updateFishSkin(
										this.fishSpine,
										'Idle2',
										this._fishIndex
								  ))
								: ((this.bestCoin.active = !0),
								  (this.fishSpineNode.active = !1));
						}),
						(t.prototype.updateCoinLabel = function () {
							this.coinLabel.string =
								f.default.getCoinCount() + '';
						}),
						(t.prototype.updateTempCoinLabel = function (e) {
							this.coinLabel.string = e + '';
						}),
						(t.prototype.showKeyCount = function () {
							if (this._keyCount <= 0)
								this._addKeyCount >= 2
									? ((this.keyLayer.active = !1),
									  (this.earnBtnNode.active = !1),
									  (this.btnBegin.active = !0))
									: ((this.keyLayer.active = !1),
									  (this.earnBtnNode.active = !0),
									  (this.btnBegin.active = !0));
							else {
								(this.keyLayer.active = !0),
									(this.earnBtnNode.active = !1),
									(this.btnBegin.active = !1);
								for (var e = 0; e < this.keyNodes.length; e++)
									this.keyNodes[e].active =
										e + 1 <= this._keyCount;
							}
						}),
						(t.prototype.getBoxReward = function (e) {
							var t = this;
							(this._keyCount -= 1),
								f.default.setKeyCount(this._keyCount),
								(this._openCount += 1),
								this.showKeyCount();
							var n =
									u.default.BOX_MSG.concat()[
										this._openCount - 1
									],
								o = n.rewardType,
								a = n.rate;
							3 != o.length ||
								(-1 != this._fishIndex && !this._isGetFish) ||
								(o.pop(), a.pop());
							for (var r = [], s = 0; s < o.length; s++)
								for (var c = o[s], l = a[s], d = 0; d < l; d++)
									r.push(c);
							var h = r[Math.floor(Math.random() * r.length)],
								g = { rewardIndex: h, count: this._fishIndex },
								m = f.default.getCoinCount() + 0;
							return (
								h == i.FISH
									? (f.default.setFishIsLock(this._fishIndex),
									  (this._isGetFish = !0))
									: h == i.COIN_1
									? (f.default.addCoinCount(100),
									  p.default.addFlyCoinAnim(
											e,
											this.coinNode,
											function (e, n) {
												if (e == n - 1)
													t.updateCoinLabel();
												else {
													var o = ((e + 1) / n) * 100,
														i = Math.floor(m + o);
													t.updateTempCoinLabel(i);
												}
											}
									  ))
									: h == i.COIN_2 &&
									  (f.default.addCoinCount(200),
									  p.default.addFlyCoinAnim(
											e,
											this.coinNode,
											function (e, n) {
												if (e == n - 1)
													t.updateCoinLabel();
												else {
													var o = ((e + 1) / n) * 200,
														i = Math.floor(m + o);
													t.updateTempCoinLabel(i);
												}
											}
									  )),
								g
							);
						}),
						(t.prototype.setStarCount = function (e) {
							this._starCount = e;
						}),
						(t.prototype.onClickExit = function () {
							var e = this;
							h.default.openEffect('Button'),
								YYGGames.showInterstitial(function () {
									p.default.addGameEndLayer(!0, e._starCount),
										(e.node.active = !1);
								});
						}),
						(t.prototype.onClickEarnKey = function () {
							h.default.openEffect('Button');
							var e = this;
							l.LyControl.openConcealAd(
								c.LyConcealAdConfig.GetBoxKey,
								function (t) {
									t
										? ((e._addKeyCount += 1),
										  (e._keyCount = 3),
										  e.showKeyCount())
										: d.LyUtils.showToast(
												'\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1'
										  );
								},
								function () {
									d.LyUtils.showToast(
										'\u6682\u65e0\u89c6\u9891'
									);
								}
							);
						}),
						r([A(cc.Label)], t.prototype, 'coinLabel', void 0),
						r([A(cc.Node)], t.prototype, 'boxLayer', void 0),
						r([A(cc.Node)], t.prototype, 'jingyuNode', void 0),
						r([A(cc.Node)], t.prototype, 'keyLayer', void 0),
						r([A(cc.Node)], t.prototype, 'keyNodes', void 0),
						r([A(cc.Node)], t.prototype, 'earnBtnNode', void 0),
						r([A(cc.Node)], t.prototype, 'btnBegin', void 0),
						r([A(sp.Skeleton)], t.prototype, 'fishSpine', void 0),
						r([A(cc.Node)], t.prototype, 'coinNode', void 0),
						r([A(cc.Node)], t.prototype, 'fishSpineNode', void 0),
						r([A(cc.Node)], t.prototype, 'bestCoin', void 0),
						r([y], t)
					);
				})(cc.Component);
				(n.default = v), cc._RF.pop();
			},
			{
				'./LyConcealAdConfig': 'LyConcealAdConfig',
				'./LyControl': 'LyControl',
				'./LyUtils': 'LyUtils',
				'./gameSaveFishBoxNode': 'gameSaveFishBoxNode',
				'./gameSaveFishGameConfig': 'gameSaveFishGameConfig',
				'./gameSaveFishGameData': 'gameSaveFishGameData',
				'./gameSaveFishGameUtils': 'gameSaveFishGameUtils',
				'./gameSaveFishViewControl': 'gameSaveFishViewControl'
			}
		],
		gameSaveFishBoxNode: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'1d5674uwspGiqDNQS7dSV5o',
					'gameSaveFishBoxNode'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyUtils'),
					s = e('./gameSaveFishGameUtils'),
					c = e('./gameSaveFishBoxLayer'),
					l = cc._decorator,
					d = l.ccclass,
					u = l.property,
					f = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.closeNode = null),
								(t.openNode = null),
								(t.countLabel = null),
								(t.coinNode = null),
								(t.fishNode = null),
								(t.fishSpine = null),
								(t.lightSpine = null),
								(t.openBoxSpine = null),
								(t._isOpen = !1),
								(t._boxLayerScript = null),
								(t._fishIndex = -1),
								(t._boxType = null),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.start = function () {}),
							(t.prototype.onDisable = function () {
								this.setIsOpen(!1);
							}),
							(t.prototype.init = function (e) {
								this._boxLayerScript = e;
							}),
							(t.prototype.setIsOpen = function (e) {
								(this.closeNode.active = !e),
									(this.openNode.active = e),
									(this._isOpen = e),
									(this.coinNode.active =
										this._boxType ==
											c.BOXS_REWARD_ENUM.COIN_1 ||
										this._boxType ==
											c.BOXS_REWARD_ENUM.COIN_2),
									(this.fishNode.active =
										this._boxType ==
										c.BOXS_REWARD_ENUM.FISH),
									this._boxType == c.BOXS_REWARD_ENUM.FISH
										? (this.lightSpine.setAnimation(
												1,
												'animation',
												!1
										  ),
										  this.updateFishSprite())
										: this._boxType ==
										  c.BOXS_REWARD_ENUM.COIN_1
										? (this.openBoxSpine.setAnimation(
												1,
												'animation',
												!1
										  ),
										  (this.countLabel.string = '+100'))
										: this._boxType ==
												c.BOXS_REWARD_ENUM.COIN_2 &&
										  (this.openBoxSpine.setAnimation(
												1,
												'animation',
												!1
										  ),
										  (this.countLabel.string = '+200'));
							}),
							(t.prototype.updateFishSprite = function () {
								s.default.updateFishSkin(
									this.fishSpine,
									'Idle2',
									this._fishIndex
								);
							}),
							(t.prototype.onClickBox = function () {
								if (!this._isOpen)
									if (
										(s.default.openEffect('Button'),
										this._boxLayerScript._keyCount > 0)
									) {
										var e =
											this._boxLayerScript.getBoxReward(
												this.node
											);
										(this._boxType = e.rewardIndex),
											(this._fishIndex = e.count),
											this.setIsOpen(!0);
									} else
										r.LyUtils.showToast('Not enough keys');
							}),
							a([u(cc.Node)], t.prototype, 'closeNode', void 0),
							a([u(cc.Node)], t.prototype, 'openNode', void 0),
							a([u(cc.Label)], t.prototype, 'countLabel', void 0),
							a([u(cc.Node)], t.prototype, 'coinNode', void 0),
							a([u(cc.Node)], t.prototype, 'fishNode', void 0),
							a(
								[u(sp.Skeleton)],
								t.prototype,
								'fishSpine',
								void 0
							),
							a(
								[u(sp.Skeleton)],
								t.prototype,
								'lightSpine',
								void 0
							),
							a(
								[u(sp.Skeleton)],
								t.prototype,
								'openBoxSpine',
								void 0
							),
							a([d], t)
						);
					})(cc.Component);
				(n.default = f), cc._RF.pop();
			},
			{
				'./LyUtils': 'LyUtils',
				'./gameSaveFishBoxLayer': 'gameSaveFishBoxLayer',
				'./gameSaveFishGameUtils': 'gameSaveFishGameUtils'
			}
		],
		gameSaveFishCoinFlyAnim: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'ca510nlnwRP+KJPTaYdplb/',
					'gameSaveFishCoinFlyAnim'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./gameSaveFishGameUtils'),
					s = cc._decorator,
					c = s.ccclass,
					l = s.property,
					d = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.coinAnim = null),
								(t._startNode = null),
								(t._endNode = null),
								(t._callFunc = null),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.start = function () {
								this.coinAnim.on(
									'finished',
									this.onFinished,
									this
								);
							}),
							(t.prototype.onFinished = function () {
								for (
									var e = this,
										t = this._endNode.convertToWorldSpaceAR(
											cc.v2(0, 0)
										),
										n = function (n) {
											var i = o.node.children[n],
												a =
													i.parent.convertToNodeSpaceAR(
														t
													);
											i.runAction(
												cc.sequence(
													cc.delayTime(0.1 * n),
													cc.moveTo(
														0.3,
														cc.v2(a.x, a.y)
													),
													cc.callFunc(function () {
														r.default.openEffect(
															'Coin'
														);
														var t =
															n ==
															e.node
																.childrenCount -
																1;
														'function' ==
															typeof e._callFunc &&
															e._callFunc(
																n,
																e.node
																	.childrenCount
															),
															t &&
																e.node.removeFromParent();
													})
												)
											);
										},
										o = this,
										i = 0;
									i < this.node.childrenCount;
									i++
								)
									n(i);
							}),
							(t.prototype.doAnim = function (e, t, n) {
								void 0 === n && (n = null),
									(this._startNode = e),
									(this._endNode = t),
									(this._callFunc = n);
								var o = e.convertToWorldSpaceAR(cc.v2(0, 0)),
									i =
										this.node.parent.convertToNodeSpaceAR(
											o
										);
								(this.node.x = i.x),
									(this.node.y = i.y),
									this.coinAnim.play();
							}),
							a(
								[l(cc.Animation)],
								t.prototype,
								'coinAnim',
								void 0
							),
							a([c], t)
						);
					})(cc.Component);
				(n.default = d), cc._RF.pop();
			},
			{ './gameSaveFishGameUtils': 'gameSaveFishGameUtils' }
		],
		gameSaveFishConcatBase: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'9de53ovsa1Gwrys19FJIjtO',
					'gameSaveFishConcatBase'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./gameSaveFishGameConfig'),
					s = e('./gameSaveFishGameData'),
					c = e('./gameSaveFishGameUtils'),
					l = e('./gameSaveFishNodePoolUtils.js'),
					d = e('./gameSaveFishViewControl'),
					u = e('./gameSaveFishWoodSwitch'),
					f = cc._decorator,
					h = f.ccclass,
					p = f.property,
					g = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (t.elemType = r.ELEM_TYPE.WATER), t;
						}
						var n;
						return (
							i(t, e),
							(n = t),
							(t.prototype.start = function () {}),
							(t.prototype.onCollisionEnter = function (e, t) {
								if (s.default.IS_GAME_BEGIN) {
									var o = t.node,
										i = e.node,
										a = t.world,
										c = o.getComponent(n);
									c.elemType == r.ELEM_TYPE.WATER &&
										this.doWaterConcatStartLogic(o, i, a),
										c.elemType == r.ELEM_TYPE.VIRUS &&
											this.doVirusConcatStartLogic(o, i),
										c.elemType == r.ELEM_TYPE.DIRTEWATER &&
											this.doDirtyWaterConcatStartLogic(
												o,
												i,
												a
											),
										c.elemType == r.ELEM_TYPE.FISH &&
											this.doFishConcatStartLogic(
												o,
												i,
												a
											),
										c.elemType == r.ELEM_TYPE.STON &&
											this.doStonConcatStartLogic(o, i),
										c.elemType == r.ELEM_TYPE.BOMB &&
											this.doBombConcatStartLogic(o, i),
										c.elemType == r.ELEM_TYPE.DIR &&
											this.doDieConcatStartLogic(o, i),
										c.elemType == r.ELEM_TYPE.SWITCH &&
											this.doSwitchConcatStartLogic(o, i);
								}
							}),
							(t.prototype.onCollisionExit = function (e, t) {
								if (s.default.IS_GAME_BEGIN) {
									var o = t.node,
										i = e.node,
										a = o.getComponent(n),
										c = i.getComponent(n);
									a.elemType == r.ELEM_TYPE.FISH
										? this.doFishConcatEndLogic(o, i)
										: a.elemType ==
												r.ELEM_TYPE.DIRTEWATER &&
										  c.elemType ==
												r.ELEM_TYPE.DIRTEWATER &&
										  (o
												.getComponent(
													'gameSaveFishDirtyWater'
												)
												.reduceConcatNode(i),
										  i
												.getComponent(
													'gameSaveFishDirtyWater'
												)
												.reduceConcatNode(o));
								}
							}),
							(t.prototype.doFishConcatStartLogic = function (
								e,
								t
							) {
								var o = t.getComponent(n),
									i = e.getComponent('gameSaveFishFish');
								o.elemType == r.ELEM_TYPE.WATER
									? i.addTouchCount(1)
									: o.elemType == r.ELEM_TYPE.DIRTEWATER
									? (d.default.addYanjiangEffect(
											t.convertToWorldSpaceAR(cc.v2(0, 0))
									  ),
									  i.reduceFishHp())
									: o.elemType == r.ELEM_TYPE.CRAB ||
									  o.elemType == r.ELEM_TYPE.VIRUS
									? i.setFishDie()
									: o.elemType == r.ELEM_TYPE.BOMB &&
									  i.setFishDie();
							}),
							(t.prototype.doFishConcatEndLogic = function (
								e,
								t
							) {
								t.getComponent(n).elemType ==
									r.ELEM_TYPE.WATER &&
									e
										.getComponent('gameSaveFishFish')
										.addTouchCount(-1);
							}),
							(t.prototype.doWaterConcatStartLogic = function (
								e,
								t
							) {
								e.getComponent(n),
									t.getComponent(n).elemType ==
										r.ELEM_TYPE.DIRTEWATER &&
										(d.default.addYanjiangEffect(
											t.convertToWorldSpaceAR(cc.v2(0, 0))
										),
										(e.active = !1),
										(t.active = !1),
										c.default.openDestoryEffect());
							}),
							(t.prototype.doVirusConcatStartLogic = function (
								e,
								t
							) {
								var o = t.getComponent(n);
								o.elemType == r.ELEM_TYPE.WATER
									? l.recycleNode(
											r.default.getElemNameByElemType(
												o.elemType
											),
											t
									  )
									: o.elemType == r.ELEM_TYPE.CRAB &&
									  (t
											.getComponent('gameSaveFishCrab')
											.reduceFishMoreHp(5),
									  d.default
											.getManager(d.GAME_STATU.GAME)
											._lvManager.checkNeedCleanVirus());
							}),
							(t.prototype.doDirtyWaterConcatStartLogic =
								function (e, t) {
									e.getComponent(n);
									var o = t.getComponent(n);
									o.elemType == r.ELEM_TYPE.CRAB
										? (d.default.addYanjiangEffect(
												e.convertToWorldSpaceAR(
													cc.v2(0, 0)
												)
										  ),
										  t
												.getComponent(
													'gameSaveFishCrab'
												)
												.reduceFishHp(),
										  (e.active = !1),
										  d.default
												.getManager(d.GAME_STATU.GAME)
												._lvManager.checkNeedCleanVirus(),
										  c.default.openDestoryEffect())
										: o.elemType ==
												r.ELEM_TYPE.DIRTEWATER &&
										  (e
												.getComponent(
													'gameSaveFishDirtyWater'
												)
												.addConcatNode(t),
										  t
												.getComponent(
													'gameSaveFishDirtyWater'
												)
												.addConcatNode(e));
								}),
							(t.prototype.doStonConcatStartLogic = function (
								e,
								t
							) {
								e.getComponent(n),
									t.getComponent(n).elemType ==
										r.ELEM_TYPE.ICE &&
										(d.default.addIceEffect(t),
										setTimeout(function () {
											e.removeFromParent();
										}, 500),
										t.removeFromParent(),
										c.default.openDestoryEffect());
							}),
							(t.prototype.doBombConcatStartLogic = function (
								e,
								t
							) {
								e.getComponent(n);
								var o = t.getComponent(n);
								o.elemType == r.ELEM_TYPE.CRAB
									? (d.default.addBombEffect(e),
									  e.removeFromParent(),
									  t.removeFromParent(),
									  d.default
											.getManager(d.GAME_STATU.GAME)
											._lvManager.checkNeedCleanVirus(),
									  c.default.openDestoryEffect())
									: o.elemType == r.ELEM_TYPE.BOMB &&
									  (d.default.addBombEffect(e),
									  d.default.addBombEffect(t),
									  e.parent && e.removeFromParent(),
									  t.parent && t.removeFromParent(),
									  c.default.openDestoryEffect());
							}),
							(t.prototype.doDieConcatStartLogic = function (
								e,
								t
							) {
								e.getComponent(n),
									t.getComponent(n).elemType ==
										r.ELEM_TYPE.CRAB &&
										(t.removeFromParent(),
										d.default
											.getManager(d.GAME_STATU.GAME)
											._lvManager.checkNeedCleanVirus(),
										c.default.openDestoryEffect());
							}),
							(t.prototype.doSwitchConcatStartLogic = function (
								e,
								t
							) {
								e.getComponent(n),
									t.getComponent(n).elemType ==
										r.ELEM_TYPE.STON &&
										(t.removeFromParent(),
										e.getComponent(u.default).openSwitch());
							}),
							a(
								[p({ type: cc.Enum(r.ELEM_TYPE) })],
								t.prototype,
								'elemType',
								void 0
							),
							(n = a([h], t))
						);
					})(cc.Component);
				(n.default = g), cc._RF.pop();
			},
			{
				'./gameSaveFishGameConfig': 'gameSaveFishGameConfig',
				'./gameSaveFishGameData': 'gameSaveFishGameData',
				'./gameSaveFishGameUtils': 'gameSaveFishGameUtils',
				'./gameSaveFishNodePoolUtils.js': 'gameSaveFishNodePoolUtils',
				'./gameSaveFishViewControl': 'gameSaveFishViewControl',
				'./gameSaveFishWoodSwitch': 'gameSaveFishWoodSwitch'
			}
		],
		gameSaveFishCrab: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, '6109fGD/JJNMr3qi68fNl4G', 'gameSaveFishCrab');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./gameSaveFishConcatBase'),
					s = cc._decorator,
					c = s.ccclass,
					l = s.property,
					d = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.isCrab = !0),
								(t._health = 15),
								(t._enemySpine = null),
								(t._canRunAction = !0),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.onLoad = function () {
								this._enemySpine =
									this.node.getComponentInChildren(
										sp.Skeleton
									);
							}),
							(t.prototype.start = function () {}),
							(t.prototype.reduceFishHp = function () {
								var e = this;
								(this._health -= 1),
									this._canRunAction &&
										(this._enemySpine.setAnimation(
											0,
											'Hit',
											!1
										),
										(this._canRunAction = !1),
										setTimeout(function () {
											e._canRunAction = !0;
										}, 1e3)),
									this._health <= 0 &&
										this.node.removeFromParent();
							}),
							(t.prototype.reduceFishMoreHp = function (e) {
								(this._health -= e),
									this._health <= 0 &&
										this.node.removeFromParent();
							}),
							a([l(cc.Boolean)], t.prototype, 'isCrab', void 0),
							a([c], t)
						);
					})(r.default);
				(n.default = d), cc._RF.pop();
			},
			{ './gameSaveFishConcatBase': 'gameSaveFishConcatBase' }
		],
		gameSaveFishCreateCount: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'a5547gxjV1NXKmHP1MtkPPC',
					'gameSaveFishCreateCount'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./gameSaveFishGameConfig'),
					s = cc._decorator,
					c = s.ccclass,
					l = s.property,
					d = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.createCount = 100),
								(t.createType = r.ELEM_TYPE.WATER),
								t
							);
						}
						return (
							i(t, e),
							a(
								[l(cc.Integer)],
								t.prototype,
								'createCount',
								void 0
							),
							a(
								[l({ type: cc.Enum(r.ELEM_TYPE) })],
								t.prototype,
								'createType',
								void 0
							),
							a([c], t)
						);
					})(cc.Component);
				(n.default = d), cc._RF.pop();
			},
			{ './gameSaveFishGameConfig': 'gameSaveFishGameConfig' }
		],
		gameSaveFishDirtyWater: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'757e4qoJThJOLvE+o4PcVWK',
					'gameSaveFishDirtyWater'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./gameSaveFishViewControl'),
					s = e('./gameSaveFishConcatBase'),
					c = cc._decorator,
					l = c.ccclass,
					d = c.property,
					u = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.waterRigid = null),
								(t._concatNodeArray = []),
								(t._index = 0),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.start = function () {}),
							(t.prototype.onEnable = function () {
								var e = this,
									t = Math.floor(1e3 * Math.random() + 1e3);
								cc.director
									.getScheduler()
									.isScheduled(this.scheduleCallFunc, this) ||
									setTimeout(function () {
										e.schedule(e.scheduleCallFunc, 1);
									}, t);
							}),
							(t.prototype.scheduleCallFunc = function () {
								0 == this.waterRigid.linearVelocity.mag() &&
									(this.waterRigid.linearVelocity = cc.v2(
										0,
										1
									));
							}),
							(t.prototype.onDisable = function () {
								cc.director
									.getScheduler()
									.isScheduled(this.scheduleCallFunc, this) &&
									this.unschedule(this.scheduleCallFunc);
							}),
							(t.prototype.addConcatNode = function (e) {
								e.active &&
									this._concatNodeArray.indexOf(e) < 0 &&
									(this._concatNodeArray[
										this._concatNodeArray.length
									] = e);
							}),
							(t.prototype.reduceConcatNode = function (e) {
								var t = this._concatNodeArray.indexOf(e);
								t >= 0 && this._concatNodeArray.splice(t, 1);
							}),
							(t.prototype.getTopHaveOtherWater = function () {
								for (
									var e = !1, t = 0;
									t < this._concatNodeArray.length;
									t++
								) {
									var n = this._concatNodeArray[t],
										o = n.y - this.node.y;
									if (n.active && o >= 0) {
										e = !0;
										break;
									}
								}
								return e;
							}),
							(t.prototype.update = function () {
								(this._index += 1),
									this._index % 5 == 0 &&
										this.node
											.getComponent(cc.RigidBody)
											.linearVelocity.mag() <= 10 &&
										(this.getTopHaveOtherWater()
											? r.default.addYanJiangPaoPaoEffect(
													this.node
											  )
											: r.default.addSmokeEffect(
													this.node
											  ));
							}),
							a(
								[d(cc.RigidBody)],
								t.prototype,
								'waterRigid',
								void 0
							),
							a([l], t)
						);
					})(s.default);
				(n.default = u), cc._RF.pop();
			},
			{
				'./gameSaveFishConcatBase': 'gameSaveFishConcatBase',
				'./gameSaveFishViewControl': 'gameSaveFishViewControl'
			}
		],
		gameSaveFishEditScene2: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'30f37QGFX9OILGSaGRfu8Bj',
					'gameSaveFishEditScene2'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./gameSaveFishPoint'),
					s = cc._decorator,
					c = s.ccclass,
					l = s.property,
					d = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.mainCamera = null),
								(t.ctx = null),
								(t.outNode = null),
								(t.inNode = null),
								(t.pointPrefab = null),
								(t.pointsNode = null),
								(t._pointArray = null),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.onLoad = function () {
								this.node.on(
									cc.Node.EventType.MOUSE_WHEEL,
									this.mouseWheel,
									this
								);
							}),
							(t.prototype.start = function () {
								this.getPoint();
							}),
							(t.prototype.getPoint = function () {
								this._pointArray = [];
								for (
									var e = this.outNode.getComponent(
											cc.PhysicsChainCollider
										).points,
										t = this.inNode.getComponent(
											cc.PhysicsChainCollider
										).points,
										n = 0;
									n < t.length;
									n++
								) {
									var o = cc.instantiate(this.pointPrefab);
									this.pointsNode.addChild(o),
										o.getComponent(r.default).init(this);
									var i = t[n];
									(o.x = i.x), (o.y = i.y);
									var a = this.inNode.convertToWorldSpaceAR(
											cc.v2(i.x, i.y)
										),
										s =
											this.pointsNode.convertToNodeSpaceAR(
												a
											);
									this._pointArray.push(s);
								}
								var c = e.reverse();
								for (n = 0; n < c.length; n++)
									(o = cc.instantiate(this.pointPrefab)),
										this.pointsNode.addChild(o),
										o.getComponent(r.default).init(this),
										(i = c[n]),
										(o.x = i.x),
										(o.y = i.y),
										(a = this.outNode.convertToWorldSpaceAR(
											cc.v2(i.x, i.y)
										)),
										(s =
											this.pointsNode.convertToNodeSpaceAR(
												a
											)),
										this._pointArray.push(s);
								this.drawLine();
							}),
							(t.prototype.mouseWheel = function (e) {
								1 == (e._scrollY > 0 ? 1 : -1)
									? (this.mainCamera.zoomRatio += 0.1)
									: (this.mainCamera.zoomRatio -= 0.1);
							}),
							(t.prototype.drawLine = function () {
								this.ctx.clear();
								var e = this._pointArray;
								this.ctx.moveTo(e[0].x, e[0].y);
								for (var t = 1; t < e.length; t++)
									this.ctx.lineTo(e[t].x, e[t].y);
								this.ctx.lineTo(e[0].x, e[0].y),
									this.ctx.stroke();
							}),
							(t.prototype.onClickPrint = function () {
								for (
									var e = this._pointArray, t = '', n = 0;
									n < e.length;
									n++
								)
									(t += '{\n'),
										(t += '"__type__": "cc.Vec2",\n'),
										(t +=
											'"x": ' +
											Math.floor(100 * e[n].x) / 100 +
											',\n'),
										(t +=
											'"y": ' +
											Math.floor(100 * e[n].y) / 100 +
											'\n'),
										(t += '},\n');
								console.log(t);
							}),
							(t.prototype.onClickLoading = function () {
								cc.director.loadScene(
									'gameSaveFishLoadingScene'
								);
							}),
							a(
								[l(cc.Camera)],
								t.prototype,
								'mainCamera',
								void 0
							),
							a([l(cc.Graphics)], t.prototype, 'ctx', void 0),
							a([l(cc.Node)], t.prototype, 'outNode', void 0),
							a([l(cc.Node)], t.prototype, 'inNode', void 0),
							a(
								[l(cc.Prefab)],
								t.prototype,
								'pointPrefab',
								void 0
							),
							a([l(cc.Node)], t.prototype, 'pointsNode', void 0),
							a([c], t)
						);
					})(cc.Component);
				(n.default = d), cc._RF.pop();
			},
			{ './gameSaveFishPoint': 'gameSaveFishPoint' }
		],
		gameSaveFishEditScene: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'484ddT9CKRJto/fqb7GVkLI',
					'gameSaveFishEditScene'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./gameSaveFishPoint'),
					s = cc._decorator,
					c = s.ccclass,
					l = s.property,
					d = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.elemCamera = null),
								(t.pointsNode = null),
								(t.chainCollider = null),
								(t.ctx = null),
								(t.pointPrefab = null),
								(t._pointArray = null),
								(t._nowSelectNode = null),
								(t._isCameraDown = null),
								(t._isCameraUp = null),
								(t._isClickW = !1),
								(t._isClickS = !1),
								(t._isClickA = !1),
								(t._isClickD = !1),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.onLoad = function () {
								(cc.director.getPhysicsManager().enabled = !0),
									cc.systemEvent.on(
										cc.SystemEvent.EventType.KEY_DOWN,
										this.keyDown,
										this
									),
									cc.systemEvent.on(
										cc.SystemEvent.EventType.KEY_UP,
										this.keyUp,
										this
									),
									this.node.on(
										cc.Node.EventType.MOUSE_WHEEL,
										this.mouseWheel,
										this
									);
							}),
							(t.prototype.start = function () {}),
							(t.prototype.keyDown = function (e) {
								e.keyCode == cc.macro.KEY.c
									? (this._isCameraDown = !0)
									: e.keyCode == cc.macro.KEY.v
									? (this._isCameraUp = !0)
									: e.keyCode == cc.macro.KEY.w
									? (this._isClickW = !0)
									: e.keyCode == cc.macro.KEY.s
									? (this._isClickS = !0)
									: e.keyCode == cc.macro.KEY.a
									? (this._isClickA = !0)
									: e.keyCode == cc.macro.KEY.d
									? (this._isClickD = !0)
									: e.keyCode == cc.macro.KEY.o &&
									  ((this.elemCamera.zoomRatio = 1),
									  (this.elemCamera.node.x = 0),
									  (this.elemCamera.node.y = 0));
							}),
							(t.prototype.mouseWheel = function (e) {
								1 == (e._scrollY > 0 ? 1 : -1)
									? (this.elemCamera.zoomRatio += 0.1)
									: (this.elemCamera.zoomRatio -= 0.1);
							}),
							(t.prototype.setNowSelectNode = function (e) {
								this._nowSelectNode &&
									(this._nowSelectNode.children[0].color =
										cc.color(46, 255, 0)),
									(e.children[0].color = cc.color(255, 0, 0)),
									(this._nowSelectNode = e);
							}),
							(t.prototype.keyUp = function (e) {
								if (
									e.keyCode == cc.macro.KEY.q &&
									this._nowSelectNode
								) {
									var t = this._pointArray.indexOf(
										this._nowSelectNode
									);
									t > -1 && this._pointArray.splice(t, 1),
										this._nowSelectNode.removeFromParent(),
										(this._nowSelectNode = null),
										this.drawLine();
								} else
									e.keyCode == cc.macro.KEY.c
										? (this._isCameraDown = !1)
										: e.keyCode == cc.macro.KEY.v
										? (this._isCameraUp = !1)
										: e.keyCode == cc.macro.KEY.w
										? ((this._isClickW = !1),
										  (this.elemCamera.node.y += 1))
										: e.keyCode == cc.macro.KEY.s
										? ((this._isClickS = !1),
										  (this.elemCamera.node.y -= 1))
										: e.keyCode == cc.macro.KEY.a
										? ((this._isClickA = !1),
										  (this.elemCamera.node.x -= 1))
										: e.keyCode == cc.macro.KEY.d &&
										  ((this._isClickD = !1),
										  (this.elemCamera.node.x += 1));
							}),
							(t.prototype.getPoints = function () {
								for (
									var e = this.chainCollider.points,
										t = [],
										n = [],
										o = 1;
									o < e.length;
									o++
								) {
									var i = e[o],
										a = e[o - 1],
										s = this.getLineOutSidePonit(
											25,
											a.x,
											a.y,
											i.x,
											i.y
										),
										c = s.left,
										l = s.right;
									t.push(c), n.push(l);
								}
								var d = n.reverse(),
									u = e;
								for (o = 0; o < d.length; o++) u.push(d[o]);
								for (
									this._pointArray = [], o = 0;
									o < u.length;
									o++
								) {
									var f = cc.instantiate(this.pointPrefab);
									this.pointsNode.addChild(f),
										f.getComponent(r.default).init(this);
									var h = u[o];
									(f.x = h.x),
										(f.y = h.y),
										this._pointArray.push(f);
								}
							}),
							(t.prototype.printArray = function () {
								for (
									var e = this._pointArray, t = '', n = 0;
									n < e.length;
									n++
								)
									(t += '{\n'),
										(t += '"__type__": "cc.Vec2",\n'),
										(t +=
											'"x": ' +
											Math.floor(100 * e[n].x) / 100 +
											',\n'),
										(t +=
											'"y": ' +
											Math.floor(100 * e[n].y) / 100 +
											'\n'),
										(t += '},\n');
								console.log(t);
							}),
							(t.prototype.drawLine = function () {
								this.ctx.clear();
								var e = this._pointArray;
								this.ctx.moveTo(e[0].x, e[0].y);
								for (var t = 1; t < e.length; t++)
									this.ctx.lineTo(e[t].x, e[t].y);
								this.ctx.lineTo(e[0].x, e[0].y),
									this.ctx.stroke();
							}),
							(t.prototype.getLineOutSidePonit = function (
								e,
								t,
								n,
								o,
								i
							) {
								var a = e,
									r = Math.sqrt(
										Math.pow(o - t, 2) + Math.pow(i - n, 2)
									),
									s = (a * -(i - n)) / r,
									c = (a * (o - t)) / r;
								return {
									left: cc.v2(t - s, n - c),
									right: cc.v2(t + s, n + c)
								};
							}),
							(t.prototype.onClickGetPoint = function () {
								this.getPoints();
							}),
							(t.prototype.onClickDrawLine = function () {
								this.drawLine();
							}),
							(t.prototype.onClickPrint = function () {
								this.printArray();
							}),
							(t.prototype.onClickToLoading = function () {
								cc.director.loadScene(
									'gameSaveFishLoadingScene'
								);
							}),
							(t.prototype.update = function () {
								this._isClickW
									? (this.elemCamera.node.y -= 1)
									: this._isClickS
									? (this.elemCamera.node.y += 1)
									: this._isClickA
									? (this.elemCamera.node.x += 1)
									: this._isClickD &&
									  (this.elemCamera.node.x -= 1);
							}),
							a(
								[l(cc.Camera)],
								t.prototype,
								'elemCamera',
								void 0
							),
							a([l(cc.Node)], t.prototype, 'pointsNode', void 0),
							a(
								[l(cc.PhysicsChainCollider)],
								t.prototype,
								'chainCollider',
								void 0
							),
							a([l(cc.Graphics)], t.prototype, 'ctx', void 0),
							a(
								[l(cc.Prefab)],
								t.prototype,
								'pointPrefab',
								void 0
							),
							a([c], t)
						);
					})(cc.Component);
				(n.default = d), cc._RF.pop();
			},
			{ './gameSaveFishPoint': 'gameSaveFishPoint' }
		],
		gameSaveFishElemMoveControl: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'94749l+5YhBOK2G9sZ5veV9',
					'gameSaveFishElemMoveControl'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./gameSaveFishGameUtils'),
					s = cc._decorator,
					c = s.ccclass,
					l = s.property,
					d = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.leftPos = null),
								(t.rightPos = null),
								(t.toLeft = !0),
								(t.mul = 1),
								(t.needChangeDir = !1),
								(t.targetPos = null),
								(t.readyPos = null),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.start = function () {
								(this.targetPos = this.toLeft
									? this.leftPos
									: this.rightPos),
									(this.readyPos = this.toLeft
										? this.rightPos
										: this.leftPos);
							}),
							(t.prototype.update = function () {
								var e = cc.v2(this.node.x, this.node.y),
									t = this.targetPos
										.sub(e)
										.normalize()
										.mul(1 * this.mul);
								if (
									((this.node.x += t.x),
									(this.node.y += t.y),
									r.default.getTwoPointDis(
										this.node.position,
										this.targetPos
									) <= 10)
								) {
									var n = cc.v2(
										this.targetPos.x + 0,
										this.targetPos.y + 0
									);
									(this.targetPos = this.readyPos),
										(this.readyPos = n),
										this.needChangeDir &&
											(this.node.scaleX =
												-this.node.scaleX);
								}
							}),
							a([l(cc.Vec2)], t.prototype, 'leftPos', void 0),
							a([l(cc.Vec2)], t.prototype, 'rightPos', void 0),
							a([l(cc.Boolean)], t.prototype, 'toLeft', void 0),
							a([l(cc.Integer)], t.prototype, 'mul', void 0),
							a(
								[l(cc.Boolean)],
								t.prototype,
								'needChangeDir',
								void 0
							),
							a([c], t)
						);
					})(cc.Component);
				(n.default = d), cc._RF.pop();
			},
			{ './gameSaveFishGameUtils': 'gameSaveFishGameUtils' }
		],
		gameSaveFishFish: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, 'dc2e7vdFspGpLUIqHXxa977', 'gameSaveFishFish');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./gameSaveFishViewControl'),
					s = e('./gameSaveFishConcatBase'),
					c = cc._decorator,
					l = c.ccclass,
					d = c.property,
					u = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.needTouchCount = 20),
								(t._touchWaterCount = 0),
								(t._health = 5),
								(t._isDoHappyAnim = !1),
								(t._minX = 0),
								(t._maxX = 0),
								(t._nowDir = 1),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.start = function () {
								this._isDoHappyAnim = !1;
							}),
							(t.prototype.addTouchCount = function (e) {
								void 0 === e && (e = 0),
									(this._touchWaterCount += e),
									this._touchWaterCount >=
										this.needTouchCount &&
										(console.log(
											'\u6e38\u620f\u80dc\u5229'
										),
										(this.node.group = 'default'),
										r.default.addPaoPaoEffect(this.node),
										r.default
											.getManager(r.GAME_STATU.GAME)
											.gameEnd(!0));
							}),
							(t.prototype.reduceFishHp = function () {
								(this._health -= 1),
									this._health <= 0 &&
										(console.log(
											'\u6e38\u620f\u5931\u8d25'
										),
										r.default
											.getManager(r.GAME_STATU.GAME)
											.gameEnd(!1));
							}),
							(t.prototype.setFishDie = function () {
								console.log('\u6e38\u620f\u5931\u8d25'),
									r.default
										.getManager(r.GAME_STATU.GAME)
										.gameEnd(!1);
							}),
							(t.prototype.doFishHappyAnim = function () {
								console.log('doFishHappyAnim'),
									(this._isDoHappyAnim = !0),
									(this._minX = this.node.x - 50),
									(this._maxX = this.node.x + 50),
									(this._nowDir = 1);
							}),
							(t.prototype.update = function () {
								this._isDoHappyAnim &&
									((this.node.angle = 0),
									(this.node.x += 3 * this._nowDir),
									(this.node.x >= this._maxX ||
										this.node.x <= this._minX) &&
										((this.node.scaleX = -this.node.scaleX),
										(this._nowDir = -this._nowDir)));
							}),
							a(
								[d(cc.Integer)],
								t.prototype,
								'needTouchCount',
								void 0
							),
							a([l], t)
						);
					})(s.default);
				(n.default = u), cc._RF.pop();
			},
			{
				'./gameSaveFishConcatBase': 'gameSaveFishConcatBase',
				'./gameSaveFishViewControl': 'gameSaveFishViewControl'
			}
		],
		gameSaveFishGameConfig: [
			function (e, t, n) {
				'use strict';
				var o, i, a;
				cc._RF.push(
					t,
					'f9b94TOHzZIo4rNyerP/ecf',
					'gameSaveFishGameConfig'
				),
					cc._RF.push(
						t,
						'f9b94TOHzZIo4rNyerP/ecf',
						'gameSaveFishGameConfig'
					),
					Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.FISH_LOCK_TYPE = n.ELEM_TYPE = void 0),
					((a = i = n.ELEM_TYPE || (n.ELEM_TYPE = {}))[
						(a.WATER = 1)
					] = 'WATER'),
					(a[(a.DIRTEWATER = 2)] = 'DIRTEWATER'),
					(a[(a.VIRUS = 3)] = 'VIRUS'),
					(a[(a.FISH = 4)] = 'FISH'),
					(a[(a.CRAB = 5)] = 'CRAB'),
					(a[(a.STON = 6)] = 'STON'),
					(a[(a.ICE = 7)] = 'ICE'),
					(a[(a.BOMB = 8)] = 'BOMB'),
					(a[(a.DIR = 9)] = 'DIR'),
					(a[(a.SWITCH = 10)] = 'SWITCH'),
					(function (e) {
						(e[(e.DEFINE = 0)] = 'DEFINE'),
							(e[(e.COIN = 1)] = 'COIN'),
							(e[(e.VIDEO = 2)] = 'VIDEO');
					})((o = n.FISH_LOCK_TYPE || (n.FISH_LOCK_TYPE = {})));
				var r = (function () {
					function e() {}
					return (
						(e.getElemNameByElemType = function (t) {
							var n = '';
							switch (t) {
								case i.WATER:
									n = e.POOL_NAMES.WATER;
									break;
								case i.DIRTEWATER:
									n = e.POOL_NAMES.DIRTY_WATER;
									break;
								case i.VIRUS:
									n = e.POOL_NAMES.VIRUS;
							}
							return n;
						}),
						(e.getFishMsgByTag = function (e) {
							for (
								var t = this.FISH_MSG.concat(), n = 0;
								n < t.length;
								n++
							) {
								var o = t[n];
								if (o.tag == e) return o;
							}
							return null;
						}),
						(e.POOL_NAMES = {
							WATER: 'water',
							DIRTY_WATER: 'dirtyWater',
							VIRUS: 'virus',
							FISH: 'fish',
							SMOKE: 'smoke',
							YANJIANG: 'yanjiang',
							YANJIANGPAOPAO: 'yanjiangPaoPao'
						}),
						(e.FISH_MSG = [
							{ tag: 1, lockType: o.DEFINE, price: 0 },
							{ tag: 2, lockType: o.COIN, price: 3e3 },
							{ tag: 3, lockType: o.COIN, price: 5e3 },
							{ tag: 4, lockType: o.VIDEO, price: 1 },
							{ tag: 5, lockType: o.VIDEO, price: 1 },
							{ tag: 6, lockType: o.VIDEO, price: 1 },
							{ tag: 7, lockType: o.VIDEO, price: 1 },
							{ tag: 8, lockType: o.VIDEO, price: 1 },
							{ tag: 9, lockType: o.VIDEO, price: 1 }
						]),
						(e.BOX_MSG = [
							{ tag: 1, rewardType: [0, 1], rate: [2, 1] },
							{ tag: 2, rewardType: [0, 1], rate: [1, 1] },
							{ tag: 3, rewardType: [0, 1], rate: [2, 3] },
							{ tag: 4, rewardType: [0, 1], rate: [1, 3] },
							{ tag: 5, rewardType: [0, 1, 2], rate: [10, 9, 1] },
							{ tag: 6, rewardType: [0, 1, 2], rate: [10, 9, 1] },
							{ tag: 7, rewardType: [0, 1, 2], rate: [5, 4, 1] },
							{ tag: 8, rewardType: [0, 1, 2], rate: [5, 4, 1] },
							{ tag: 9, rewardType: [0, 1, 2], rate: [3, 2, 1] }
						]),
						(e.LV_STAR_DEMAND = [
							{ LV: 1, NUM: 1 },
							{ LV: 2, NUM: 1 },
							{ LV: 3, NUM: 2 },
							{ LV: 4, NUM: 2 },
							{ LV: 5, NUM: 3 },
							{ LV: 6, NUM: 5 },
							{ LV: 7, NUM: 2 },
							{ LV: 8, NUM: 2 },
							{ LV: 9, NUM: 5 },
							{ LV: 10, NUM: 3 },
							{ LV: 11, NUM: 2 },
							{ LV: 12, NUM: 3 },
							{ LV: 13, NUM: 3 },
							{ LV: 14, NUM: 3 },
							{ LV: 15, NUM: 3 },
							{ LV: 16, NUM: 3 },
							{ LV: 17, NUM: 4 },
							{ LV: 18, NUM: 3 },
							{ LV: 19, NUM: 5 },
							{ LV: 20, NUM: 2 },
							{ LV: 21, NUM: 6 },
							{ LV: 22, NUM: 5 },
							{ LV: 23, NUM: 6 },
							{ LV: 24, NUM: 1 },
							{ LV: 25, NUM: 4 },
							{ LV: 26, NUM: 7 },
							{ LV: 27, NUM: 8 },
							{ LV: 28, NUM: 4 },
							{ LV: 29, NUM: 4 },
							{ LV: 30, NUM: 5 },
							{ LV: 31, NUM: 6 },
							{ LV: 32, NUM: 3 },
							{ LV: 33, NUM: 4 },
							{ LV: 34, NUM: 4 },
							{ LV: 35, NUM: 3 },
							{ LV: 36, NUM: 4 },
							{ LV: 37, NUM: 3 },
							{ LV: 38, NUM: 5 },
							{ LV: 39, NUM: 6 },
							{ LV: 40, NUM: 20 },
							{ LV: 41, NUM: 20 },
							{ LV: 42, NUM: 4 },
							{ LV: 43, NUM: 5 },
							{ LV: 44, NUM: 5 },
							{ LV: 45, NUM: 2 },
							{ LV: 46, NUM: 4 },
							{ LV: 47, NUM: 3 },
							{ LV: 48, NUM: 5 },
							{ LV: 49, NUM: 5 },
							{ LV: 50, NUM: 1 },
							{ LV: 51, NUM: 3 },
							{ LV: 52, NUM: 4 },
							{ LV: 53, NUM: 6 },
							{ LV: 54, NUM: 3 },
							{ LV: 55, NUM: 7 },
							{ LV: 56, NUM: 6 },
							{ LV: 57, NUM: 2 },
							{ LV: 58, NUM: 6 },
							{ LV: 59, NUM: 4 },
							{ LV: 60, NUM: 4 },
							{ LV: 61, NUM: 4 },
							{ LV: 62, NUM: 5 },
							{ LV: 63, NUM: 4 },
							{ LV: 64, NUM: 3 },
							{ LV: 65, NUM: 8 },
							{ LV: 66, NUM: 3 },
							{ LV: 67, NUM: 2 },
							{ LV: 68, NUM: 5 },
							{ LV: 69, NUM: 4 },
							{ LV: 70, NUM: 6 },
							{ LV: 71, NUM: 6 },
							{ LV: 72, NUM: 4 },
							{ LV: 73, NUM: 6 },
							{ LV: 74, NUM: 6 },
							{ LV: 75, NUM: 1 },
							{ LV: 76, NUM: 8 },
							{ LV: 77, NUM: 20 },
							{ LV: 78, NUM: 4 },
							{ LV: 79, NUM: 5 },
							{ LV: 80, NUM: 3 },
							{ LV: 81, NUM: 3 },
							{ LV: 82, NUM: 4 },
							{ LV: 83, NUM: 3 },
							{ LV: 84, NUM: 3 },
							{ LV: 85, NUM: 3 },
							{ LV: 86, NUM: 2 },
							{ LV: 87, NUM: 4 },
							{ LV: 88, NUM: 5 },
							{ LV: 89, NUM: 5 },
							{ LV: 90, NUM: 5 },
							{ LV: 91, NUM: 6 },
							{ LV: 92, NUM: 3 },
							{ LV: 93, NUM: 6 },
							{ LV: 94, NUM: 4 },
							{ LV: 95, NUM: 6 },
							{ LV: 96, NUM: 4 },
							{ LV: 97, NUM: 5 },
							{ LV: 98, NUM: 4 },
							{ LV: 99, NUM: 6 },
							{ LV: 100, NUM: 4 }
						]),
						e
					);
				})();
				(n.default = r), cc._RF.pop();
			},
			{}
		],
		gameSaveFishGameData: [
			function (e, t, n) {
				'use strict';
				cc._RF.push(
					t,
					'82c6fV0I6dKloywPO9E+GGY',
					'gameSaveFishGameData'
				),
					Object.defineProperty(n, '__esModule', { value: !0 });
				var o = e('./LyConcealAdConfig'),
					i = e('./LyControl'),
					a = e('./gameSaveFishGameConfig'),
					r = (function () {
						function e() {}
						return (
							(e.getNowLv = function () {
								var t = Mcomm.GetLocalStorage(this.NOW_LV_STR),
									n = 1;
								return (
									t && t.length > 0 && (n = parseInt(t)),
									(e.NOW_LV = n),
									n
								);
							}),
							(e.setNowLv = function (e) {
								Mcomm.SaveLocalStorage(this.NOW_LV_STR, e);
							}),
							(e.addNowLv = function () {
								var t = this.getNowLv();
								return (
									(t = (t += 1) > 100 ? 100 : t),
									(e.NOW_LV = t),
									Mcomm.SaveLocalStorage(this.NOW_LV_STR, t),
									t
								);
							}),
							(e.initFishArray = function () {
								for (
									var t = [1], n = 1;
									n < a.default.FISH_MSG.length;
									n++
								)
									t.push(0);
								var o = Mcomm.GetLocalStorage(
										e.LOCK_FISH_ARRAT_STR
									),
									i = JSON.stringify(t);
								(o && o.length > 0) ||
									Mcomm.SaveLocalStorage(
										e.LOCK_FISH_ARRAT_STR,
										i
									);
							}),
							(e.getLockFishArray = function () {
								var t = [],
									n = Mcomm.GetLocalStorage(
										e.LOCK_FISH_ARRAT_STR
									);
								if (n && n.length > 0)
									for (
										var o = JSON.parse(n), i = 0;
										i < o.length;
										i++
									)
										t[i] = parseInt(o[i]);
								else
									for (
										t.push(1), i = 1, t.push(1), i = 1;
										i < a.default.FISH_MSG.length;
										i++
									)
										t.push(0);
								return t;
							}),
							(e.setFishIsLock = function (t) {
								var n = this.getLockFishArray();
								0 == n[t - 1] && (n[t - 1] = 1);
								var o = JSON.stringify(n);
								Mcomm.SaveLocalStorage(
									e.LOCK_FISH_ARRAT_STR,
									o
								);
							}),
							(e.getFishIsLock = function (e) {
								return 1 == this.getLockFishArray()[e - 1];
							}),
							(e.getRandomUnlockFish = function () {
								for (
									var e = this.getLockFishArray(),
										t = [],
										n = 0;
									n < e.length;
									n++
								)
									e[n] == [0] && (t[t.length] = n + 1);
								var o = -1;
								return (
									t.length > 0 &&
										(o =
											t[
												Math.floor(
													Math.random() * t.length
												)
											]),
									o
								);
							}),
							(e.getHaveUnlockFish = function () {
								for (
									var e = this.getLockFishArray(),
										t = !1,
										n = 0;
									n < e.length;
									n++
								)
									if (0 == e[n]) {
										t = !0;
										break;
									}
								return t;
							}),
							(e.initNowVideoLockFishRate = function () {
								for (
									var t = [3], n = 1;
									n < a.default.FISH_MSG.length;
									n++
								)
									t.push(0);
								var o = Mcomm.GetLocalStorage(
										e.NOW_VIDEO_LOCKFISH_RATE
									),
									i = JSON.stringify(t);
								(o && o.length > 0) ||
									Mcomm.SaveLocalStorage(
										e.NOW_VIDEO_LOCKFISH_RATE,
										i
									);
							}),
							(e.getNowVideoLockFishRate = function () {
								var t = [],
									n = Mcomm.GetLocalStorage(
										e.NOW_VIDEO_LOCKFISH_RATE
									);
								if (n && n.length > 0)
									for (
										var o = JSON.parse(n), i = 0;
										i < o.length;
										i++
									)
										t[i] = parseInt(o[i]);
								else
									for (
										t.push(3), i = 1, t.push(3), i = 1;
										i < a.default.FISH_MSG.length;
										i++
									)
										t.push(0);
								return t;
							}),
							(e.getTargetVideoLockFishRate = function (e) {
								return this.getNowVideoLockFishRate()[e - 1];
							}),
							(e.addNowVideoLockFishRate = function (t) {
								var n = this.getNowVideoLockFishRate(),
									a = n[t - 1];
								(a += 1), (n[t - 1] = a);
								var r = JSON.stringify(n);
								Mcomm.SaveLocalStorage(
									e.NOW_VIDEO_LOCKFISH_RATE,
									r
								);
								var s = !1;
								return (
									a >=
										i.LyControl.getOnceConcealValue(
											o.LyConcealAdConfig.FishLockDemand
										) &&
										((s = !0),
										e.setFishIsLock(t),
										e.setNowUseFish(t)),
									s
								);
							}),
							(e.getNowUseFish = function () {
								var e = a.default.FISH_MSG[0].tag,
									t = Mcomm.GetLocalStorage(
										this.NOW_USE_FISH_STR
									);
								return (
									t && t.length > 0
										? (e = parseInt(t))
										: Mcomm.SaveLocalStorage(
												this.NOW_USE_FISH_STR,
												e
										  ),
									e
								);
							}),
							(e.getLockingFish = function () {
								for (
									var e = this.getLockFishArray(), t = 0;
									t < e.length;
									t++
								)
									if (0 == e[t]) return t + 1;
								return 9;
							}),
							(e.setNowUseFish = function (e) {
								Mcomm.SaveLocalStorage(
									this.NOW_USE_FISH_STR,
									e
								);
							}),
							(e.initLvLockFishMsg = function (t) {
								var n = {
										fishIndex: this.getRandomUnlockFish(),
										rate: 0
									},
									o = Mcomm.GetLocalStorage(e.LV_LOCK_FISH),
									i = JSON.stringify(n);
								return (
									t
										? Mcomm.SaveLocalStorage(
												e.LV_LOCK_FISH,
												i
										  )
										: (o && o.length > 0) ||
										  Mcomm.SaveLocalStorage(
												e.LV_LOCK_FISH,
												i
										  ),
									n
								);
							}),
							(e.getLvLockFishMsg = function () {
								var t = Mcomm.GetLocalStorage(e.LV_LOCK_FISH);
								return t && t.length > 0
									? JSON.parse(t)
									: this.initLvLockFishMsg(!1);
							}),
							(e.addLvLocalFishMsg = function () {
								var t = this.getLvLockFishMsg(),
									n = t.rate,
									o = n + 20,
									i = o >= 98;
								if (i) this.initLvLockFishMsg(!0);
								else {
									t.rate = o;
									var a = JSON.stringify(t);
									Mcomm.SaveLocalStorage(e.LV_LOCK_FISH, a);
								}
								return {
									fishIndex: t.fishIndex,
									now: n,
									target: o,
									isFull: i
								};
							}),
							(e.initCoinCount = function () {
								var t = this.getCoinCount();
								Mcomm.SaveLocalStorage(e.COIN_LOCAL_STR, t);
							}),
							(e.getCoinCount = function () {
								var t = 0,
									n = Mcomm.GetLocalStorage(e.COIN_LOCAL_STR);
								return (
									n && n.length > 0 && (t = parseInt(n)), t
								);
							}),
							(e.addCoinCount = function (t) {
								var n = this.getCoinCount();
								return (
									(n += t),
									(n = (n = Math.floor(n)) < 0 ? 0 : n),
									Mcomm.SaveLocalStorage(e.COIN_LOCAL_STR, n),
									n
								);
							}),
							(e.initKeyCount = function () {
								var t = this.getKeyCount();
								Mcomm.SaveLocalStorage(
									e.KEY_COUNT_LOCAL_STR,
									t
								);
							}),
							(e.getKeyCount = function () {
								var t = 0,
									n = Mcomm.GetLocalStorage(
										e.KEY_COUNT_LOCAL_STR
									);
								return (
									n && n.length > 0 && (t = parseInt(n)), t
								);
							}),
							(e.addKeyCount = function (t) {
								var n = this.getKeyCount();
								return (
									(n = (n += t) > 3 ? 3 : n),
									Mcomm.SaveLocalStorage(
										e.KEY_COUNT_LOCAL_STR,
										n
									),
									n
								);
							}),
							(e.setKeyCount = function (t) {
								Mcomm.SaveLocalStorage(
									e.KEY_COUNT_LOCAL_STR,
									t
								);
							}),
							(e.checkNeedAddKey = function () {
								return 100 * Math.random() <= e.GET_KEY_RATE;
							}),
							(e.NOW_LV = 1),
							(e.IS_GAME_BEGIN = !1),
							(e.DYNAMIC_MSG = null),
							(e.NOW_PASS_LV = 0),
							(e.NOW_ALL_PLAY_LV = 0),
							(e.GET_KEY_RATE = 60),
							(e.NOW_LV_STR = 'nowLvLocalStr'),
							(e.LOCK_FISH_ARRAT_STR = 'lockFishArrayStr'),
							(e.NOW_VIDEO_LOCKFISH_RATE =
								'nowVideoLockFishRate'),
							(e.NOW_USE_FISH_STR = 'nowUseFishStr'),
							(e.LV_LOCK_FISH = 'LvLockFish'),
							(e.COIN_LOCAL_STR = 'coinLocalStr'),
							(e.KEY_COUNT_LOCAL_STR = 'keyCountLocalStr'),
							e
						);
					})();
				(n.default = r), cc._RF.pop();
			},
			{
				'./LyConcealAdConfig': 'LyConcealAdConfig',
				'./LyControl': 'LyControl',
				'./gameSaveFishGameConfig': 'gameSaveFishGameConfig'
			}
		],
		gameSaveFishGameEndLayer: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'5f87cZKsnxPCr/zKDo5qZ63',
					'gameSaveFishGameEndLayer'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./qqBlockAd'),
					s = e('./LyConcealAdConfig'),
					c = e('./LyConfig'),
					l = e('./LyControl'),
					d = e('./LyUtils'),
					u = e('./MiniGameControl'),
					f = e('./gameSaveFishGameData'),
					h = e('./gameSaveFishGameUtils'),
					p = e('./gameSaveFishViewControl'),
					g = cc._decorator,
					m = g.ccclass,
					y = g.property,
					A = [
						'Star1_settlement',
						'Star2_settlement',
						'Star3_settlement'
					],
					v = [-355, -319, -283, -247, -211, -175],
					_ = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.successNode = null),
								(t.failNode = null),
								(t.waterNode = null),
								(t.fishRateLabel = null),
								(t.starNodes = []),
								(t.fishSpine = null),
								(t.bossDisShowArray = []),
								(t.coinNode = null),
								(t.btnCoinNode = null),
								(t.coinLabel = null),
								(t.caidai1 = null),
								(t.caidai2 = null),
								(t.adNativeNode = null),
								(t.endSuccessAnim = null),
								(t.endFailAnim = null),
								(t.layerShowNode = null),
								(t.gameBanner = null),
								(t.qqBlock = null),
								(t._isSuccess = !1),
								(t._nowRate = 0),
								(t._targetRate = 0),
								(t._fishIndex = 0),
								(t._starCount = 3),
								(t._isRunMaskReduce = !1),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.start = function () {
								this.endSuccessAnim.on(
									'finished',
									this.successAnimCall,
									this
								);
							}),
							(t.prototype.onEnable = function () {
								this.gameBanner.getChildByName('GameBanner') &&
									(this.gameBanner.getChildByName(
										'GameBanner'
									).parent = null),
									YYGplatform.initGameBanner(this.gameBanner),
									(YYGplatform.GameBanner.y = -920);
							}),
							(t.prototype.showExpress = function () {}),
							(t.prototype.successCallFunc = function (e) {
								f.default.NOW_PASS_LV += 1;
								var t = l.LyControl.getOnceConcealValue(
									s.LyConcealAdConfig.EndShowVideoCount
								);
								e
									? f.default.NOW_PASS_LV >= t
										? u.MiniGameControl._isInterShowTime
											? (console.log(
													'\u63d2\u5c4f\u65f6\u95f4\u95f4\u9694\u4e2d\uff0c\u5c55\u793a\u4fe1\u606f\u6d41'
											  ),
											  l.LyControl.openConcealAd(
													s.LyConcealAdConfig.yuans2
											  ),
											  (f.default.NOW_PASS_LV = 0))
											: l.LyControl.openConcealAd(
													s.LyConcealAdConfig
														.EnterEndLayer,
													function () {
														l.LyControl.openConcealAd(
															s.LyConcealAdConfig
																.yuans2
														),
															(f.default.NOW_PASS_LV = 0);
													}
											  )
										: l.LyControl.openConcealAd(
												s.LyConcealAdConfig.yuans2
										  )
									: f.default.NOW_PASS_LV >= t &&
									  (f.default.NOW_PASS_LV = 0);
							}),
							(t.prototype.failCallFunc = function () {
								f.default.NOW_PASS_LV += 1;
								var e = l.LyControl.getOnceConcealValue(
									s.LyConcealAdConfig.EndShowVideoCount
								);
								f.default.NOW_PASS_LV >= e &&
									(f.default.NOW_PASS_LV = 0);
							}),
							(t.prototype.onDisable = function () {
								YYGplatform.removeBanner(),
									(this.layerShowNode.active = !1),
									cc.audioEngine.stopAllEffects(),
									this.stopStarAnim(),
									l.LyControl.getPlatformType() ==
										c.LyConfig.PlatformDefine
											.VivoQuickGame &&
										(console.log(
											'\u539f\u751f\u5173\u95ed11111111111111111111111'
										),
										l.LyControl.destoryNativeAd(
											c.LyConfig.AD_NAME.CUSTOM_EXPRESS
										));
							}),
							(t.prototype.successAnimCall = function () {
								1 ==
									l.LyControl.getOnceConcealValue(
										s.LyConcealAdConfig.EndShowBlock
									) && (this.layerShowNode.active = !0),
									this.caidai1.resetSystem(),
									this.caidai2.resetSystem(),
									this.showRetStar(this._starCount);
								var e = p.default.getManager(p.GAME_STATU.GAME);
								this.doBossDisShowAnim(e._lv),
									this.showFishMaskAnim(),
									(this._isRunMaskReduce = !0);
							}),
							(t.prototype.init = function (e, t) {
								var n = this;
								(this._isSuccess = e),
									(this.successNode.active = e),
									(this.failNode.active = !e),
									this.updateCoinLabel();
								var o = p.default.getManager(p.GAME_STATU.GAME);
								o.recyleLv(),
									setTimeout(function () {
										n.updateFishSprite();
									}, 50),
									(this._starCount = t),
									e
										? (f.default.setNowLv(o._lv + 1),
										  this.endSuccessAnim.play())
										: (this.endFailAnim.play(),
										  l.LyControl.getPlatformType() ==
												c.LyConfig.PlatformDefine
													.VivoQuickGame &&
												(u.MiniGameControl
													._isInterShowTime
													? (console.log(
															'\u63d2\u5c4f\u65f6\u95f4\u95f4\u9694\u4e2d\uff0c\u5c55\u793a\u4fe1\u606f\u6d41'
													  ),
													  l.LyControl.openConcealAd(
															s.LyConcealAdConfig
																.yuans2
													  ))
													: l.LyControl.openConcealAd(
															s.LyConcealAdConfig
																.EnterEndLayer,
															function () {
																l.LyControl.openConcealAd(
																	s
																		.LyConcealAdConfig
																		.yuans2
																);
															}
													  )),
										  l.LyControl.getPlatformType() ==
												c.LyConfig.PlatformDefine
													.WeChatGame &&
												1 ==
													l.LyControl.getOnceConcealValue(
														s.LyConcealAdConfig
															.EndShowBlock
													) &&
												l.LyControl.closeAd(
													c.LyConfig.AD_NAME.BANNER
												),
										  this.failCallFunc(),
										  this.qqBlock
												.getComponent(r.default)
												.openAd());
							}),
							(t.prototype.showRetStar = function (e) {
								if (e > 0) {
									var t = e;
									this.showStarAnim(0, t);
								}
							}),
							(t.prototype.showStarAnim = function (e, t) {
								var n = this;
								e < t &&
									this.starNodes[e].runAction(
										cc.sequence(
											cc.delayTime(0.1),
											cc.spawn(
												cc.scaleTo(0.2, 0.9),
												cc.fadeIn(0.2)
											),
											cc.scaleTo(0.1, 1),
											cc.callFunc(function () {
												n.starNodes[e].parent
													.getComponentInChildren(
														sp.Skeleton
													)
													.setAnimation(
														1,
														'animation',
														!1
													);
											}),
											cc.delayTime(0.1),
											cc.callFunc(function () {
												h.default.openEffect(A[e]),
													(e += 1),
													n.showStarAnim(e, t);
											})
										)
									);
							}),
							(t.prototype.stopStarAnim = function () {
								for (
									var e = 0;
									e < this.starNodes.length;
									e++
								) {
									var t = this.starNodes[e];
									t.stopAllActions(),
										(t.scale = 2.5),
										(t.opacity = 0);
								}
							}),
							(t.prototype.updateCoinLabel = function () {
								this.coinLabel.string =
									f.default.getCoinCount() + '';
							}),
							(t.prototype.updateTempCoinLabel = function (e) {
								(this.coinLabel.string = e + ''),
									d.LyUtils.showToast('Coin +1000');
							}),
							(t.prototype.updateFishSprite = function () {
								var e = f.default.getLockingFish();
								h.default.updateFishSkin(
									this.fishSpine,
									'Idle2',
									e
								);
							}),
							(t.prototype.doBossDisShowAnim = function (e) {
								var t = e % 5;
								console.error(e, t), (t = 0 == t ? 5 : t);
								for (
									var n = function (e) {
											var n = o.bossDisShowArray[e],
												i = n.getChildByName('jindu'),
												a = i.getComponent(cc.Sprite),
												r = i.getComponent(
													cc.Animation
												);
											(n.getChildByName('center').active =
												e <= t),
												r.stop(),
												e < t - 1
													? (a.fillRange = 1)
													: e == t - 1
													? setTimeout(function () {
															r.play();
													  }, 100)
													: (a.fillRange = 0);
										},
										o = this,
										i = 0;
									i < this.bossDisShowArray.length;
									i++
								)
									n(i);
							}),
							(t.prototype.showFishMaskAnim = function () {
								var e = f.default.addLvLocalFishMsg();
								this._fishIndex = e.fishIndex;
								var t = e.now,
									n = e.target,
									o = v[this.getWaterRateIndex(t)];
								(this.waterNode.y = o),
									(this.fishRateLabel.string = t + '%'),
									(this._nowRate = t),
									(this._targetRate = n),
									this._targetRate <= 90 &&
										(l.LyControl.getPlatformType() ==
											c.LyConfig.PlatformDefine
												.WeChatGame &&
											1 ==
												l.LyControl.getOnceConcealValue(
													s.LyConcealAdConfig
														.EndShowBlock
												) &&
											l.LyControl.closeAd(
												c.LyConfig.AD_NAME.BANNER
											),
										this.successCallFunc(!0),
										this.qqBlock
											.getComponent(r.default)
											.openAd());
							}),
							(t.prototype.getWaterRateIndex = function (e) {
								return e <= 0
									? 0
									: e <= 22
									? 1
									: e <= 42
									? 2
									: e <= 62
									? 3
									: e <= 82
									? 4
									: 5;
							}),
							(t.prototype.onClickNextLv = function () {
								var e = this;
								YYGGames.showInterstitial(function () {
									h.default.openEffect('Button'),
										f.default.addCoinCount(500),
										l.LyControl.getPlatformType() ==
											c.LyConfig.PlatformDefine
												.VivoQuickGame &&
											(console.log(
												'\u539f\u751f\u5173\u95ed222222222222222'
											),
											l.LyControl.destoryNativeAd(
												c.LyConfig.AD_NAME
													.CUSTOM_EXPRESS
											)),
										l.LyControl.openConcealAd(
											s.LyConcealAdConfig
												.ClickNextLvEndLayer
										);
									var t = p.default.getManager(
										p.GAME_STATU.GAME
									);
									t.toLv(t._lv + 1), (e.node.active = !1);
								});
							}),
							(t.prototype.onClickHomeLv = function () {
								h.default.openEffect('Button'),
									l.LyControl.getPlatformType() ==
										c.LyConfig.PlatformDefine
											.VivoQuickGame &&
										(console.log(
											'\u539f\u751f\u5173\u95ed222222222222222'
										),
										l.LyControl.destoryNativeAd(
											c.LyConfig.AD_NAME.CUSTOM_EXPRESS
										)),
									l.LyControl.openConcealAd(
										s.LyConcealAdConfig.ClickNextLvEndLayer
									),
									p.default
										.getManager(p.GAME_STATU.MAIN)
										.toLv(),
									(this.node.active = !1);
							}),
							(t.prototype.onClickAddCoin = function () {
								var e = this;
								if (
									(h.default.openEffect('Button'),
									!this.addCoinFlag)
								) {
									(this.addCoinFlag = !0),
										this.scheduleOnce(function () {
											e.addCoinFlag = !1;
										}, 3);
									var t = this;
									l.LyControl.getPlatformType() ==
										c.LyConfig.PlatformDefine
											.VivoQuickGame &&
										(console.log(
											'\u539f\u751f\u5173\u95ed   3333333333333333333'
										),
										l.LyControl.destoryNativeAd(
											c.LyConfig.AD_NAME.CUSTOM_EXPRESS
										)),
										l.LyControl.openConcealAd(
											s.LyConcealAdConfig
												.ClickAddCoinEndLayer,
											function (e) {
												if (e) {
													var n =
														f.default.getCoinCount() +
														0;
													f.default.addCoinCount(1e3),
														p.default.addFlyCoinAnim(
															t.btnCoinNode,
															t.coinNode,
															function (e, o) {
																if (
																	e ==
																	o - 1
																) {
																	t.updateCoinLabel();
																	var i =
																		p.default.getManager(
																			p
																				.GAME_STATU
																				.GAME
																		);
																	i.toLv(
																		i._lv +
																			1
																	),
																		(t.node.active =
																			!1);
																} else {
																	var a =
																			((e +
																				1) /
																				o) *
																			1e3,
																		r =
																			Math.floor(
																				n +
																					a
																			);
																	t.updateTempCoinLabel(
																		r
																	);
																}
															}
														);
												} else
													d.LyUtils.showToast(
														'\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1'
													);
											},
											function () {
												d.LyUtils.showToast(
													'\u6682\u65e0\u89c6\u9891'
												);
											}
										);
								}
							}),
							(t.prototype.onClickJump = function () {
								h.default.openEffect('Button');
								var e = this;
								l.LyControl.openConcealAd(
									s.LyConcealAdConfig.ClickJumlLvEndLayer,
									function (t) {
										if (t) {
											f.default.addCoinCount(500);
											var n = p.default.getManager(
												p.GAME_STATU.GAME
											);
											n.toLv(n._lv + 1),
												(e.node.active = !1);
										} else
											d.LyUtils.showToast(
												'\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1'
											);
									},
									function () {
										d.LyUtils.showToast(
											'\u6682\u65e0\u89c6\u9891'
										);
									}
								);
							}),
							(t.prototype.onClickAgain = function () {
								h.default.openEffect('Button'),
									l.LyControl.getPlatformType() ==
										c.LyConfig.PlatformDefine
											.VivoQuickGame &&
										(console.log(
											'\u539f\u751f\u5173\u95ed 444444444444444444'
										),
										l.LyControl.destoryNativeAd(
											c.LyConfig.AD_NAME.CUSTOM_EXPRESS
										)),
									l.LyControl.openConcealAd(
										s.LyConcealAdConfig.ClickAgainEndLayer
									);
								var e = p.default.getManager(p.GAME_STATU.GAME);
								e.toLv(e._lv), (this.node.active = !1);
							}),
							(t.prototype.onClickReset = function () {
								var e = this;
								YYGGames.showInterstitial(function () {
									h.default.openEffect('Button'),
										l.LyControl.getPlatformType() ==
											c.LyConfig.PlatformDefine
												.VivoQuickGame &&
											(console.log(
												'\u539f\u751f\u5173\u95ed 55555555555555'
											),
											l.LyControl.destoryNativeAd(
												c.LyConfig.AD_NAME
													.CUSTOM_EXPRESS
											)),
										l.LyControl.openConcealAd(
											s.LyConcealAdConfig
												.ClickAgainEndLayer
										);
									var t = p.default.getManager(
										p.GAME_STATU.GAME
									);
									t.toLv(t._lv), (e.node.active = !1);
								});
							}),
							(t.prototype.update = function () {
								if (
									((this.coinLabel.string =
										f.default.getCoinCount() + ''),
									this._isSuccess && this._isRunMaskReduce)
								) {
									this._nowRate += 1;
									var e = this;
									if (
										this._nowRate >= this._targetRate &&
										((this._nowRate = this._targetRate),
										(this._isRunMaskReduce = !1),
										100 == this._targetRate)
									)
										for (
											var t =
													f.default.getLockFishArray(),
												n = 0;
											n < t.length;
											n++
										)
											if (0 == t[n]) {
												p.default.addLockFishLayer(
													n + 1,
													function () {
														l.LyControl.getPlatformType() ==
															c.LyConfig
																.PlatformDefine
																.WeChatGame &&
															1 ==
																l.LyControl.getOnceConcealValue(
																	s
																		.LyConcealAdConfig
																		.EndShowBlock
																) &&
															l.LyControl.closeAd(
																c.LyConfig
																	.AD_NAME
																	.BANNER
															),
															e.qqBlock
																.getComponent(
																	r.default
																)
																.openAd(),
															e.successCallFunc(
																!1
															),
															e.updateFishSprite();
													}
												);
												break;
											}
									(this.waterNode.y += 1.8),
										(this.fishRateLabel.string =
											this._nowRate + '%');
								}
							}),
							a([y(cc.Node)], t.prototype, 'successNode', void 0),
							a([y(cc.Node)], t.prototype, 'failNode', void 0),
							a([y(cc.Node)], t.prototype, 'waterNode', void 0),
							a(
								[y(cc.Label)],
								t.prototype,
								'fishRateLabel',
								void 0
							),
							a([y(cc.Node)], t.prototype, 'starNodes', void 0),
							a(
								[y(sp.Skeleton)],
								t.prototype,
								'fishSpine',
								void 0
							),
							a(
								[y(cc.Node)],
								t.prototype,
								'bossDisShowArray',
								void 0
							),
							a([y(cc.Node)], t.prototype, 'coinNode', void 0),
							a([y(cc.Node)], t.prototype, 'btnCoinNode', void 0),
							a([y(cc.Label)], t.prototype, 'coinLabel', void 0),
							a(
								[y(cc.ParticleSystem)],
								t.prototype,
								'caidai1',
								void 0
							),
							a(
								[y(cc.ParticleSystem)],
								t.prototype,
								'caidai2',
								void 0
							),
							a(
								[y(cc.Node)],
								t.prototype,
								'adNativeNode',
								void 0
							),
							a(
								[y(cc.Animation)],
								t.prototype,
								'endSuccessAnim',
								void 0
							),
							a(
								[y(cc.Animation)],
								t.prototype,
								'endFailAnim',
								void 0
							),
							a(
								[y(cc.Node)],
								t.prototype,
								'layerShowNode',
								void 0
							),
							a([y(cc.Node)], t.prototype, 'gameBanner', void 0),
							a([y(cc.Node)], t.prototype, 'qqBlock', void 0),
							a([m], t)
						);
					})(cc.Component);
				(n.default = _), cc._RF.pop();
			},
			{
				'./LyConcealAdConfig': 'LyConcealAdConfig',
				'./LyConfig': 'LyConfig',
				'./LyControl': 'LyControl',
				'./LyUtils': 'LyUtils',
				'./MiniGameControl': 'MiniGameControl',
				'./gameSaveFishGameData': 'gameSaveFishGameData',
				'./gameSaveFishGameUtils': 'gameSaveFishGameUtils',
				'./gameSaveFishViewControl': 'gameSaveFishViewControl',
				'./qqBlockAd': 'qqBlockAd'
			}
		],
		gameSaveFishGameManager: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'6e3f8euUXlDgIgs3Inbdhcy',
					'gameSaveFishGameManager'
				),
					(window.GameSoundFlag = !0);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyConcealAdConfig'),
					s = e('./LyConfig'),
					c = e('./LyControl'),
					l = e('./LyUtils'),
					d = e('./gameSaveFishGameConfig'),
					u = e('./gameSaveFishGameData'),
					f = e('./gameSaveFishGameUtils'),
					h = e('./gameSaveFishViewControl'),
					p = e('./gameSaveFishlvManager'),
					g = cc._decorator,
					m = g.ccclass,
					y = g.property,
					A = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.gWaterCamera = null),
								(t.playingNode = null),
								(t.lvLabel = null),
								(t.flyKeyNode = null),
								(t.settingPanel = null),
								(t.musicNode = null),
								(t.effectNode = null),
								(t.settingBg = null),
								(t.resetVideo = null),
								(t.resetIcon = null),
								(t.soundNode = null),
								(t.starNodes = []),
								(t.keyNodes = []),
								(t.moveNodesArray = []),
								(t._lv = -1),
								(t._lvManager = null),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.onLoad = function () {
								var e = this;
								this.initMusicAndEffectSwitch();
								var t = c.LyControl.checkIsVideo(
									r.LyConcealAdConfig.ClickResetLv.name
								);
								(this.resetVideo.active = t),
									(this.resetIcon.active = !t),
									c.LyControl.openConcealAd(
										r.LyConcealAdConfig.EnterGameAd
									),
									(this.onNode =
										this.soundNode.getChildByName(
											'onNode'
										)),
									(this.offNode =
										this.soundNode.getChildByName(
											'offNode'
										)),
									this.soundInit(),
									cc.sys.os == cc.sys.OS_IOS &&
										setTimeout(function () {
											for (
												var t = 0;
												t < e.moveNodesArray.length;
												t++
											)
												e.moveNodesArray[t].y += 70;
										}, 500);
							}),
							(t.prototype.soundInit = function () {
								0 ==
								~~cc.sys.localStorage.getItem(
									'Save-The-Fish-3d-soundFlag'
								)
									? ((this.onNode.active = !0),
									  (this.offNode.active = !1),
									  Mcomm.PlayLoadSound(
											'gameSaveFish/sound/BGM_game',
											!0
									  ),
									  (YYGGames.audioEngine.pause = !1))
									: ((this.onNode.active = !1),
									  (this.offNode.active = !0),
									  (YYGGames.audioEngine.pause = !0));
							}),
							(t.prototype.onClickSoundHandler = function () {
								f.default.openEffect('Button'),
									1 ==
									~~cc.sys.localStorage.getItem(
										'Save-The-Fish-3d-soundFlag'
									)
										? ((this.onNode.active = !0),
										  (this.offNode.active = !1),
										  (YYGGames.audioEngine.pause = !1),
										  Mcomm.PlayLoadSound(
												'gameSaveFish/sound/BGM_game',
												!0
										  ),
										  cc.sys.localStorage.setItem(
												'Save-The-Fish-3d-soundFlag',
												0
										  ))
										: ((this.onNode.active = !1),
										  (this.offNode.active = !0),
										  (YYGGames.audioEngine.pause = !0),
										  cc.sys.localStorage.setItem(
												'Save-The-Fish-3d-soundFlag',
												1
										  ));
							}),
							(t.prototype.gameBegin = function (e) {
								var t = this;
								1 ==
									c.LyControl.getOnceConcealValue(
										r.LyConcealAdConfig.IsOpenBanner
									) &&
									c.LyControl.openAd(
										s.LyConfig.AD_NAME.BANNER
									),
									c.LyControl.openConcealAd(
										r.LyConcealAdConfig.StarGame
									),
									(this._lv = e),
									(this.lvLabel.string = 'Level ' + e + ' '),
									this.setStarNum(),
									this.setKeyCount(!1);
								var n = e % 100;
								(n = 0 == n ? 100 : n),
									c.LyControl.initShowVideoNodeMsg(),
									(u.default.NOW_ALL_PLAY_LV += 1),
									f.default.loadBundleRes(
										'gameSaveFishResources',
										'gameSaveFish/lv/lv' + n,
										function (e) {
											var n = cc.instantiate(e);
											t.playingNode.addChild(n);
											var o = n.getComponent(p.default);
											(t._lvManager = o),
												setTimeout(function () {
													o.createWater(),
														(u.default.IS_GAME_BEGIN =
															!0),
														t.setGameCamera(
															o.spWaterShow
														);
												}, 400);
										},
										cc.Prefab
									);
							}),
							(t.prototype.preloadLv = function () {}),
							(t.prototype.gameEnd = function (e) {
								if (((u.default.IS_GAME_BEGIN = !1), e)) {
									f.default.openEffect('Fish_Water'),
										this._lvManager.doFishHappySpine();
									var t = this._lvManager._usePinCount,
										n = this._lv % 100;
									n = 0 == n ? 100 : n;
									var o =
										t <= d.default.LV_STAR_DEMAND[n - 1].NUM
											? 3
											: 2;
									if (
										(this.showRetStar(o),
										u.default.checkNeedAddKey())
									)
										if (3 == u.default.getKeyCount())
											setTimeout(function () {
												h.default.addBoxLayer(o);
											}, 2e3);
										else {
											var i = u.default.addKeyCount(1);
											this.setKeyCount(!0),
												3 == i
													? setTimeout(function () {
															h.default.addBoxLayer(
																o
															);
													  }, 2e3)
													: setTimeout(function () {
															h.default.addGameEndLayer(
																e,
																o
															);
													  }, 2e3);
										}
									else
										setTimeout(function () {
											h.default.addGameEndLayer(e, o);
										}, 2e3);
								} else
									f.default.openEffect('Fish_DIE'),
										setTimeout(function () {
											h.default.addGameEndLayer(e, 0);
										}, 100);
							}),
							(t.prototype.gameEnd1 = function () {
								(u.default.IS_GAME_BEGIN = !1),
									h.default.addGameEndLayer(e, 3);
							}),
							(t.prototype.recyleLv = function () {
								this._lvManager &&
									(this._lvManager.recyleAllLv(),
									(this._lvManager = null)),
									this.playingNode.removeAllChildren();
							}),
							(t.prototype.setGameCamera = function (e) {
								var t = new cc.RenderTexture();
								t.initWithSize(e.node.width, e.node.height);
								var n = new cc.SpriteFrame();
								n.setTexture(t),
									(this.gWaterCamera.targetTexture = t),
									(e.spriteFrame = n);
							}),
							(t.prototype.toLv = function (e) {
								u.default.setNowLv(e), this.gameBegin(e);
							}),
							(t.prototype.showStarAnim = function (e, t) {
								var n = this;
								e < t &&
									this.starNodes[e].runAction(
										cc.sequence(
											cc.scaleTo(0.2, 2),
											cc.scaleTo(0.2, 0.9),
											cc.callFunc(function () {
												n.starNodes[e].parent
													.getComponentInChildren(
														sp.Skeleton
													)
													.setAnimation(
														1,
														'animation',
														!1
													);
											}),
											cc.scaleTo(0.1, 1),
											cc.delayTime(0.1),
											cc.callFunc(function () {
												(e += 1), n.showStarAnim(e, t);
											})
										)
									);
							}),
							(t.prototype.showRetStar = function (e) {
								if ((this.setStarNum(), e > 0)) {
									var t = e;
									this.showStarAnim(0, t);
								}
							}),
							(t.prototype.setStarNum = function () {
								for (var e = 0; e < this.starNodes.length; e++)
									this.starNodes[e].scale = 0;
							}),
							(t.prototype.setKeyCount = function (e) {
								void 0 === e && (e = !1);
								var t = u.default.getKeyCount();
								if (e) {
									for (
										var n = 0;
										n < this.keyNodes.length;
										n++
									)
										this.keyNodes[n].active = n + 1 < t;
									var o = this.keyNodes[t - 1];
									(this.flyKeyNode.scale = 2),
										f.default.doFlyAnim(
											this.flyKeyNode,
											1,
											this.node,
											o,
											function () {
												o.active = !0;
											}
										);
								} else
									for (n = 0; n < this.keyNodes.length; n++) {
										var i = n + 1 <= t;
										this.keyNodes[n].active = i;
									}
							}),
							(t.prototype.onClickNextLv = function () {
								f.default.openEffect('Button');
								var e = this;
								c.LyControl.openConcealAd(
									r.LyConcealAdConfig.ClickJumpLv,
									function (t) {
										t
											? (e._lvManager &&
													(e._lvManager.recyleAllLv(),
													(e._lvManager = null)),
											  setTimeout(function () {
													e.playingNode.removeAllChildren(),
														e.toLv(e._lv + 1);
											  }, 500))
											: l.LyUtils.showToast(
													'\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1'
											  );
									},
									function () {
										l.LyUtils.showToast(
											'\u6682\u65e0\u89c6\u9891'
										);
									}
								);
							}),
							(t.prototype.onClickNextLv1 = function () {
								f.default.openEffect('Button');
								var e = this;
								c.LyControl.openConcealAd(
									r.LyConcealAdConfig.ClickJumpLv,
									function (t) {
										t
											? (e._lvManager &&
													(e._lvManager.recyleAllLv(),
													(e._lvManager = null)),
											  setTimeout(function () {
													e.gameEnd1();
											  }, 500))
											: l.LyUtils.showToast(
													'\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1'
											  );
									},
									function () {
										l.LyUtils.showToast(
											'\u6682\u65e0\u89c6\u9891'
										);
									}
								);
							}),
							(t.prototype.onClickReset = function () {
								if (
									(f.default.openEffect('Button'),
									u.default.IS_GAME_BEGIN)
								) {
									var e = this;
									c.LyControl.openConcealAd(
										r.LyConcealAdConfig.ClickResetLv,
										function (t) {
											t
												? (e._lvManager &&
														(e._lvManager.recyleAllLv(),
														(e._lvManager = null)),
												  setTimeout(function () {
														e.playingNode.removeAllChildren(),
															e.toLv(e._lv);
												  }, 100))
												: l.LyUtils.showToast(
														'\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1'
												  );
										},
										function () {
											l.LyUtils.showToast(
												'\u6682\u65e0\u89c6\u9891'
											);
										}
									);
								}
							}),
							(t.prototype.onClickSetting = function () {
								f.default.openEffect('Button'),
									h.default.addGameSettingLayer();
							}),
							(t.prototype.onClickSelectFish = function () {
								YYGGames.showInterstitial(function () {
									f.default.openEffect('Button'),
										h.default.addSelectFishLayer();
								});
							}),
							(t.prototype.onClickMusic = function () {
								f.default.openEffect('Button');
								var e = 1 == Mcomm.bMusic,
									t = (e = !e) ? 1 : -1;
								Mcomm.SetMusicOpen(t),
									e &&
										Mcomm.PlayLoadSound(
											'gameSaveFish/sound/BGM_game',
											!0
										),
									this.setMusicSwitch(e);
							}),
							(t.prototype.onClickEffect = function () {
								f.default.openEffect('Button');
								var e = 1 == Mcomm.bEffect,
									t = (e = !e) ? 1 : -1;
								Mcomm.SetEffectOpen(t),
									e || cc.audioEngine.stopAllEffects(),
									this.setEffectSwitch(e);
							}),
							(t.prototype.initMusicAndEffectSwitch =
								function () {
									var e = 1 == Mcomm.bMusic,
										t = 1 == Mcomm.bEffect;
									this.setMusicSwitch(e),
										this.setEffectSwitch(t);
								}),
							(t.prototype.setMusicSwitch = function (e) {
								var t = this.musicNode.getChildByName('open'),
									n = this.musicNode.getChildByName('close');
								(t.active = e), (n.active = !e);
							}),
							(t.prototype.setEffectSwitch = function (e) {
								var t = this.effectNode.getChildByName('open'),
									n = this.effectNode.getChildByName('close');
								(t.active = e), (n.active = !e);
							}),
							a(
								[y(cc.Camera)],
								t.prototype,
								'gWaterCamera',
								void 0
							),
							a([y(cc.Node)], t.prototype, 'playingNode', void 0),
							a([y(cc.Label)], t.prototype, 'lvLabel', void 0),
							a([y(cc.Node)], t.prototype, 'flyKeyNode', void 0),
							a(
								[y(cc.Node)],
								t.prototype,
								'settingPanel',
								void 0
							),
							a([y(cc.Node)], t.prototype, 'musicNode', void 0),
							a([y(cc.Node)], t.prototype, 'effectNode', void 0),
							a([y(cc.Node)], t.prototype, 'settingBg', void 0),
							a([y(cc.Node)], t.prototype, 'resetVideo', void 0),
							a([y(cc.Node)], t.prototype, 'resetIcon', void 0),
							a([y(cc.Node)], t.prototype, 'starNodes', void 0),
							a([y(cc.Node)], t.prototype, 'keyNodes', void 0),
							a([y(cc.Node)], t.prototype, 'soundNode', void 0),
							a(
								[y(cc.Node)],
								t.prototype,
								'moveNodesArray',
								void 0
							),
							a([m], t)
						);
					})(cc.Component);
				(n.default = A), cc._RF.pop();
			},
			{
				'./LyConcealAdConfig': 'LyConcealAdConfig',
				'./LyConfig': 'LyConfig',
				'./LyControl': 'LyControl',
				'./LyUtils': 'LyUtils',
				'./gameSaveFishGameConfig': 'gameSaveFishGameConfig',
				'./gameSaveFishGameData': 'gameSaveFishGameData',
				'./gameSaveFishGameUtils': 'gameSaveFishGameUtils',
				'./gameSaveFishViewControl': 'gameSaveFishViewControl',
				'./gameSaveFishlvManager': 'gameSaveFishlvManager'
			}
		],
		gameSaveFishGameUtils: [
			function (e, t, n) {
				'use strict';
				cc._RF.push(
					t,
					'cfcb644XQFGLJGS2cUxtAIF',
					'gameSaveFishGameUtils'
				),
					Object.defineProperty(n, '__esModule', { value: !0 });
				var o = (function () {
					function e() {}
					return (
						(e.openEffect = function (e) {
							Mcomm.PlayLoadSound('gameSaveFish/sound/' + e);
						}),
						(e.openDynamicWater = function () {}),
						(e.openStaticWater = function () {
							var e = this;
							this.canOpenDyWater &&
								this.canOpenStWater &&
								((this.canOpenStWater = !1),
								setTimeout(function () {
									e.canOpenStWater = !0;
								}, 6e3),
								this.openEffect('WaterFlow'));
						}),
						(e.openDestoryEffect = function () {
							var e = this;
							this.canOpenDestory &&
								this.canOpenDestory &&
								((this.canOpenDestory = !1),
								setTimeout(function () {
									e.canOpenDestory = !0;
								}, 3e3),
								this.openEffect('Destroys'));
						}),
						(e.getElemIsAlreadyLoad = function (e, t) {
							for (var n = 0; n < t.length; n++) {
								var o = t[n];
								if (o.name == e) return o.elem;
							}
							return !1;
						}),
						(e.orderLoadMsg = function (e, t, n) {
							this._loadingArray.push({
								name: e,
								type: t,
								callFunc: n
							}),
								this._isLoading ||
									((this._isLoading = !0),
									this.loadResMsg2(e, t, n, 0));
						}),
						(e.loadBundleRes = function (e, t, n, o) {
							if (e) {
								var i = cc.assetManager.getBundle(e);
								i
									? o
										? i.load(t, o, function (e, o) {
												e
													? cc.error(
															'\u52a0\u8f7d\u51fa\u9519',
															t
													  )
													: n && n(o);
										  })
										: i.load(t, function (e, o) {
												e
													? cc.error(
															'\u52a0\u8f7d\u51fa\u9519',
															t
													  )
													: n && n(o);
										  })
									: cc.error(
											'assetBundle \u4e0d\u5b58\u5728',
											e
									  );
							} else
								cc.error(
									'assetBundleName \u540d\u5b57\u6709\u8bef',
									e
								);
						}),
						(e.loadImgRes = function (e, t, n, o, i, a) {
							void 0 === o && (o = null),
								void 0 === i && (i = !0),
								void 0 === a && (a = cc.SpriteFrame),
								this.loadBundleRes(
									e,
									t,
									function (e) {
										if (cc.isValid(n.node)) {
											if (
												(a == cc.SpriteFrame
													? (n.spriteFrame = e)
													: (n.spriteFrame =
															new cc.SpriteFrame(
																e
															)),
												(n.node.active = !!i),
												n instanceof cc.Mask)
											) {
												var t = e.getRect();
												n.node.setContentSize(
													t.width,
													t.height
												);
											}
											o &&
												(o.m_loadedResArr ||
													(o.m_loadedResArr = []),
												e.addRef(),
												o.m_loadedResArr.push(e));
										}
									},
									a
								);
						}),
						(e.loadResMsg2 = function (e, t, n, o) {
							var i = this;
							void 0 === o && (o = 0),
								cc.loader.loadRes(e, t, function (a, r) {
									if (a)
										if (
											(console.error(
												'loadResMsg err:',
												a.message || a
											),
											(o += 1) < 3)
										)
											i.loadResMsg2(e, t, n, o);
										else if (
											(i._loadingArray.shift(),
											i._loadingArray.length > 0)
										) {
											var s = i._loadingArray[0];
											i.loadResMsg2(
												s.name,
												s.type,
												s.callfunc,
												0
											);
										} else i._isLoading = !1;
									else
										i._alreadyLoadMsg.push({
											name: e,
											elem: r
										}),
											'function' == typeof n && n(r),
											i._loadingArray.shift(),
											i._loadingArray.length > 0
												? ((s = i._loadingArray[0]),
												  i.loadResMsg2(
														s.name,
														s.type,
														s.callFunc,
														0
												  ))
												: (i._isLoading = !1);
								});
						}),
						(e.loadResMsg = function (e, t, n, o) {
							var i = this;
							void 0 === o && (o = 0);
							var a = this.getElemIsAlreadyLoad(
								e,
								this._alreadyLoadMsg
							);
							a
								? 'function' == typeof n && n(a)
								: cc.loader.loadRes(e, t, function (a, r) {
										if (a)
											return (
												console.error(
													'loadResMsg err:',
													a.message || a
												),
												void (
													(o += 1) < 3 &&
													setTimeout(function () {
														i.loadResMsg(
															e,
															t,
															n,
															o
														);
													}, 50)
												)
											);
										i._alreadyLoadMsg.push({
											name: e,
											elem: r
										}),
											'function' == typeof n && n(r);
								  });
						}),
						(e.setBtnEnabled = function (e) {
							var t = e.getComponent(cc.Button);
							(t.interactable = !1),
								setTimeout(function () {
									t.interactable = !0;
								}, 500);
						}),
						(e._jellyPopLayer = function (e, t) {
							(e.scale = 0.1),
								(e.opacity = 0),
								e.runAction(
									cc.sequence(
										cc.spawn(
											cc.fadeIn(0.2),
											cc.scaleTo(0.2, 1.1)
										),
										cc.scaleTo(0.06, 1),
										cc.callFunc(function () {
											'function' == typeof t && t();
										})
									)
								);
						}),
						(e._jellyPushLayer = function (e, t) {
							e.runAction(
								cc.sequence(
									cc.scaleTo(0.06, 1.1),
									cc.spawn(
										cc.scaleTo(0.2, 0),
										cc.fadeOut(0.2)
									),
									cc.callFunc(function () {
										'function' == typeof t && t();
									})
								)
							);
						}),
						(e.getTwoPointDis = function (e, t) {
							var n = (t.x - e.x) * (t.x - e.x),
								o = (t.y - e.y) * (t.y - e.y);
							return Math.sqrt(n + o);
						}),
						(e.checkPointInRect = function (e, t) {
							var n = t.width,
								o = t.height,
								i = t.x,
								a = t.y,
								r = e.x,
								s = e.y;
							return (
								r >= i - n / 2 &&
								r <= i + n / 2 &&
								s <= a + o / 2 &&
								s >= a - o / 2
							);
						}),
						(e.getTwoPointAngle = function (e, t) {
							return Math.atan2(t.y - e.y, t.x - e.x);
						}),
						(e.doFlyAnim = function (e, t, n, o, i) {
							void 0 === i && (i = null);
							var a = cc.v2(e.x, e.y),
								r = n.convertToWorldSpaceAR(cc.v2(0, 0)),
								s = o.convertToWorldSpaceAR(cc.v2(0, 0)),
								c = e.parent.convertToNodeSpaceAR(r),
								l = e.parent.convertToNodeSpaceAR(s);
							(e.x = c.x),
								(e.y = c.y),
								e.runAction(
									cc.sequence(
										cc.spawn(
											cc.moveTo(t, cc.v2(l.x, l.y)),
											cc.scaleTo(t, 1)
										),
										cc.callFunc(function () {
											'function' == typeof i && i(),
												(e.x = a.x),
												(e.y = a.y);
										})
									)
								);
						}),
						(e.checkOnceNodeNearbyHaveSameNode = function (
							t,
							n,
							o,
							i
						) {
							void 0 === o && (o = 0), void 0 === i && (i = 30);
							for (var a = 0, r = 0; r < n.length; r++) {
								var s = n[r],
									c = s.width + i,
									l = s.convertToWorldSpaceAR(cc.v2(0, 0));
								if (
									e.getTwoPointDis(t, l) <= c &&
									(a += 1) >= o
								)
									return !0;
							}
							return !1;
						}),
						(e.updateFishSkin = function (t, n, o) {
							e.loadBundleRes(
								'gameSaveFishResources',
								'gameSaveFish/fishSpine/' + o + '/' + o,
								function (e) {
									(t.skeletonData = e),
										t.setAnimation(0, n, !0);
								},
								sp.SkeletonData
							);
						}),
						(e.canOpenDyWater = !0),
						(e.canOpenStWater = !0),
						(e.isOpenDyWater = !0),
						(e.canOpenDestory = !0),
						(e._alreadyLoadMsg = []),
						(e._isLoading = !1),
						(e._loadingArray = []),
						e
					);
				})();
				(n.default = o), cc._RF.pop();
			},
			{}
		],
		gameSaveFishGuideLayer: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'558a2Vgcb9EILX4uc5u9hCi',
					'gameSaveFishGuideLayer'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = cc._decorator,
					s = r.ccclass,
					c = r.property,
					l = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (t.touchNode = null), t;
						}
						return (
							i(t, e),
							(t.prototype.start = function () {
								this.touchNode.on(
									cc.Node.EventType.TOUCH_START,
									this.onTouchStart,
									this
								),
									(this.touchNode._touchListener.swallowTouches =
										!1);
							}),
							(t.prototype.onTouchStart = function () {
								this.node.removeFromParent();
							}),
							a([c(cc.Node)], t.prototype, 'touchNode', void 0),
							a([s], t)
						);
					})(cc.Component);
				(n.default = l), cc._RF.pop();
			},
			{}
		],
		gameSaveFishHomeManager: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'ce41eQAwBxMxJ0RkjUZGEoA',
					'gameSaveFishHomeManager'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./gameSaveFishGameUtils'),
					s = e('./gameSaveFishGameData'),
					c = cc._decorator,
					l = c.ccclass,
					d = c.property,
					u = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.gameBox = null),
								(t.soundNode = null),
								(t.coinLabel = null),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.onLoad = function () {
								(this.onNode =
									this.soundNode.getChildByName('onNode')),
									(this.offNode =
										this.soundNode.getChildByName(
											'offNode'
										)),
									this.soundInit(),
									YYGplatform.initGameBox(this.gameBox),
									(YYGplatform.GameBox.children[0].scale = 2),
									(YYGplatform.GameBox.children[1].scale = 2),
									(YYGplatform.GameBox.children[0].x = -300),
									(YYGplatform.GameBox.children[1].x = 300),
									(YYGplatform.GameBox.children[0].y = -750),
									(YYGplatform.GameBox.children[1].y = -750),
									!window.firstGame &&
										setTimeout(function () {
											if (document.createEvent) {
												var e =
													document.createEvent(
														'HTMLEvents'
													);
												e.initEvent('resize', !0, !0),
													window.dispatchEvent(e);
											} else document.createEventObject && window.fireEvent('onresize');
											(window.firstGame = !0),
                                            h5splash.hideLoading();YYGGames.onLoadingFinished();
										}, 1e3);
							}),
							(t.prototype.update = function () {
								this.coinLabel.string =
									s.default.getCoinCount() + '';
							}),
							(t.prototype.start = function () {}),
							(t.prototype.soundInit = function () {
								0 ==
								~~cc.sys.localStorage.getItem(
									'Save-The-Fish-3d-soundFlag'
								)
									? ((this.onNode.active = !0),
									  (this.offNode.active = !1),
									  Mcomm.PlayLoadSound(
											'gameSaveFish/sound/BGM_game',
											!0
									  ),
									  (YYGGames.audioEngine.pause = !1))
									: ((this.onNode.active = !1),
									  (this.offNode.active = !0),
									  (YYGGames.audioEngine.pause = !0));
							}),
							(t.prototype.onClickSoundHandler = function () {
								r.default.openEffect('Button'),
									1 ==
									~~cc.sys.localStorage.getItem(
										'Save-The-Fish-3d-soundFlag'
									)
										? ((this.onNode.active = !0),
										  (this.offNode.active = !1),
										  (YYGGames.audioEngine.pause = !1),
										  Mcomm.PlayLoadSound(
												'gameSaveFish/sound/BGM_game',
												!0
										  ),
										  cc.sys.localStorage.setItem(
												'Save-The-Fish-3d-soundFlag',
												0
										  ))
										: ((this.onNode.active = !1),
										  (this.offNode.active = !0),
										  (YYGGames.audioEngine.pause = !0),
										  cc.sys.localStorage.setItem(
												'Save-The-Fish-3d-soundFlag',
												1
										  ));
							}),
							a([d(cc.Node)], t.prototype, 'gameBox', void 0),
							a([d(cc.Node)], t.prototype, 'soundNode', void 0),
							a([d(cc.Label)], t.prototype, 'coinLabel', void 0),
							a([l], t)
						);
					})(cc.Component);
				(n.default = u), cc._RF.pop();
			},
			{
				'./gameSaveFishGameData': 'gameSaveFishGameData',
				'./gameSaveFishGameUtils': 'gameSaveFishGameUtils'
			}
		],
		gameSaveFishLoadingScene: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'25f97nCXGtDzIupe3hzSmrJ',
					'gameSaveFishLoadingScene'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyControl'),
					s = e('./gameSaveFishGameConfig'),
					c = e('./gameSaveFishGameData'),
					l = e('./gameSaveFishNodePoolUtils.js'),
					d = cc._decorator,
					u = d.ccclass,
					f = d.property,
					h = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.mProgress = null),
								(t.descProgress = null),
								(t.mWaterPrefab = null),
								(t.mDirtyWaterPrefab = null),
								(t.mVirusPrefab = null),
								(t.mSmokePrefab = null),
								(t.mYanJiangPrefab = null),
								(t.mYanJiangPaoPaoPrefab = null),
								(t._beginLoadScene = !1),
								(t._isLoading = !1),
								(t._isLoadDynamicData = !1),
								(t._nowLoadCount = 0),
								(t.res = []),
								(t.m_maxAssetBundleCounts = 0),
								(t.m_curLoadingSubIndex = 0),
								(t.m_isFinishedLoadBundle = !1),
								(t.m_allAssetBundleArr = [
									{
										name: 'gameSaveFishResources',
										version: ''
									}
								]),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.onLoad = function () {
								this._initData(),
									r.LyControl.initLyLib(),
									r.LyControl.showProtocal();
							}),
							(t.prototype.start = function () {
								this.initAssetBundleData();
								for (var e = 0; e < 100; e++)
									l.getNode(s.default.POOL_NAMES.WATER),
										l.getNode(
											s.default.POOL_NAMES.DIRTY_WATER
										),
										l.getNode(s.default.POOL_NAMES.VIRUS);
								for (e = 0; e < 10; e++)
									l.getNode(s.default.POOL_NAMES.SMOKE),
										l.getNode(
											s.default.POOL_NAMES.YANJIANG
										),
										l.getNode(
											s.default.POOL_NAMES.YANJIANGPAOPAO
										);
							}),
							(t.prototype._initData = function () {
								(this.res = ['gameSaveFishMainScene']),
									(this.statistics = []),
									this.getLocalDatas(),
									(this._isLoadDynamicData = !0);
							}),
							(t.prototype.getLocalDatas = function () {
								c.default.getNowLv(),
									c.default.initFishArray(),
									c.default.initLvLockFishMsg(!1),
									c.default.getNowUseFish(),
									c.default.initCoinCount(),
									c.default.initKeyCount(),
									l.initNodePool(
										this.mWaterPrefab,
										s.default.POOL_NAMES.WATER
									),
									l.initNodePool(
										this.mDirtyWaterPrefab,
										s.default.POOL_NAMES.DIRTY_WATER
									),
									l.initNodePool(
										this.mVirusPrefab,
										s.default.POOL_NAMES.VIRUS
									),
									l.initNodePool(
										this.mSmokePrefab,
										s.default.POOL_NAMES.SMOKE
									),
									l.initNodePool(
										this.mYanJiangPrefab,
										s.default.POOL_NAMES.YANJIANG
									),
									l.initNodePool(
										this.mYanJiangPaoPaoPrefab,
										s.default.POOL_NAMES.YANJIANGPAOPAO
									);
							}),
							(t.prototype.loadGameBGM = function () {
								Mcomm.getMusicOpen() &&
									Mcomm.PlayLoadSound(
										'gameSaveFish/sound/BGM_game',
										!0
									),
									Mcomm.getEffectOpen();
							}),
							(t.prototype.preLoadRes = function () {
								var e = this;
								this.res.forEach(function (t) {
									e.statistics[t] ||
										(e.statistics[t] = {
											cpt: 0,
											total: 0
										}),
										t.indexOf('resources'),
										cc.director.preloadScene(
											t,
											function (n, o) {
												(e.statistics[t].cpt = n),
													(e.statistics[t].total = o),
													e.setProgress();
											},
											function () {}
										);
								});
							}),
							(t.prototype.setProgress = function () {
								var e = 0;
								for (var t in this.statistics) {
									var n = this.statistics[t],
										o = n.cpt / n.total / this.res.length;
									isNaN(o) && (o = 0), (e += o);
								}
								if (e >= 1 && !this._beginLoadScene)
									(this._beginLoadScene = !0),
										this._checkLogin(0, function () {
											var e = this;
											YYGplatform.init(function () {
												cc.director.loadScene(
													'gameSaveFishMainScene'
												),
													YYGGames.addEventListener(
														YYGGames.events
															.beforeShowAd,
														e,
														function () {
															(YYGGames.audioEngine.pause =
																!0),
																(window.GameSoundFlag =
																	~~cc.sys.localStorage.getItem(
																		'Save-The-Fish-3d-soundFlag'
																	)),
																(window.showAdFlag =
																	!0);
														}
													),
													YYGGames.addEventListener(
														YYGGames.events
															.afterShowAd,
														e,
														function () {
															(window.showAdFlag =
																!1),
																(YYGGames.audioEngine.pause =
																	window.GameSoundFlag);
														}
													),
													window.addEventListener(
														'focus',
														function () {
															YYGGames.audioEngine.pause =
																window.GameSoundFlag ||
																window.showAdFlag;
														}
													),
													window.addEventListener(
														'blur',
														function () {
															(window.GameSoundFlag =
																~~cc.sys.localStorage.getItem(
																	'Save-The-Fish-3d-soundFlag'
																)),
																(YYGGames.audioEngine.pause =
																	!0);
														}
													);
											});
										});
								else {
									if (e < this.mProgress.fillRange) return;
									(this.mProgress.fillRange = e),
										(this.descProgress.string =
											Math.round(100 * e) + '%');
								}
							}),
							(t.prototype._checkLogin = function (e, t) {
								var n = this;
								this.m_isFinishedLoadBundle &&
								this._isLoadDynamicData
									? t()
									: setTimeout(function () {
											n._checkLogin(e, t);
									  }, 100);
							}),
							(t.prototype.initAssetBundleData = function () {
								(this.m_maxAssetBundleCounts =
									this.m_allAssetBundleArr.length),
									(this.m_curLoadingSubIndex = 0),
									this.loadAssetBundle();
							}),
							(t.prototype.loadAssetBundle = function () {
								var e = this;
								if (
									this.m_curLoadingSubIndex >=
									this.m_maxAssetBundleCounts
								)
									this.m_isFinishedLoadBundle = !0;
								else {
									var t =
											this.m_allAssetBundleArr[
												this.m_curLoadingSubIndex
											],
										n = t.name,
										o = t.version;
									console.log(
										'loading assetBundle, name--\x3e',
										n
									),
										cc.assetManager.loadBundle(
											n,
											{ version: o },
											function (t) {
												t
													? console.log(
															'load assetBundle error, name--\x3e' +
																n
													  )
													: (console.log(
															'\u3010load assetBundle success, name => ' +
																n +
																'\u3011'
													  ),
													  e.m_curLoadingSubIndex++,
													  e.loadGameBGM(),
													  e.loadAssetBundle(),
													  e.preLoadRes());
											}
										);
								}
							}),
							a([f(cc.Sprite)], t.prototype, 'mProgress', void 0),
							a(
								[f(cc.Label)],
								t.prototype,
								'descProgress',
								void 0
							),
							a(
								[f(cc.Prefab)],
								t.prototype,
								'mWaterPrefab',
								void 0
							),
							a(
								[f(cc.Prefab)],
								t.prototype,
								'mDirtyWaterPrefab',
								void 0
							),
							a(
								[f(cc.Prefab)],
								t.prototype,
								'mVirusPrefab',
								void 0
							),
							a(
								[f(cc.Prefab)],
								t.prototype,
								'mSmokePrefab',
								void 0
							),
							a(
								[f(cc.Prefab)],
								t.prototype,
								'mYanJiangPrefab',
								void 0
							),
							a(
								[f(cc.Prefab)],
								t.prototype,
								'mYanJiangPaoPaoPrefab',
								void 0
							),
							a([u], t)
						);
					})(cc.Component);
				(n.default = h), cc._RF.pop();
			},
			{
				'./LyControl': 'LyControl',
				'./gameSaveFishGameConfig': 'gameSaveFishGameConfig',
				'./gameSaveFishGameData': 'gameSaveFishGameData',
				'./gameSaveFishNodePoolUtils.js': 'gameSaveFishNodePoolUtils'
			}
		],
		gameSaveFishLockFishLayer: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'585bbT0QrVDioYgmYQN8w6C',
					'gameSaveFishLockFishLayer'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyConcealAdConfig'),
					s = e('./LyConfig'),
					c = e('./LyControl'),
					l = e('./LyUtils'),
					d = e('./MiniGameControl'),
					u = e('./gameSaveFishGameConfig'),
					f = e('./gameSaveFishGameData'),
					h = e('./gameSaveFishGameUtils'),
					p = e('./gameSaveFishViewControl'),
					g = cc._decorator,
					m = g.ccclass,
					y = g.property,
					A = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.fishSpine = null),
								(t.coinLockBtn = null),
								(t.videoLockBtn = null),
								(t.coinLabel = null),
								(t.priceLabel = null),
								(t.titleAnim = null),
								(t.caidai1 = null),
								(t.caidai2 = null),
								(t._fishIndex = null),
								(t._price = 0),
								(t._closeCallFunc = null),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.start = function () {}),
							(t.prototype.init = function (e, t) {
								c.LyControl.getPlatformType() ==
									s.LyConfig.PlatformDefine.VivoQuickGame &&
									(d.MiniGameControl._isInterShowTime
										? (console.log(
												'\u63d2\u5c4f\u65f6\u95f4\u95f4\u9694\u4e2d\uff0c\u5c55\u793a\u4fe1\u606f\u6d41'
										  ),
										  c.LyControl.openConcealAd(
												r.LyConcealAdConfig.yuans4
										  ))
										: c.LyControl.openConcealAd(
												r.LyConcealAdConfig
													.EnterLockFishLayer,
												function () {
													c.LyControl.openConcealAd(
														r.LyConcealAdConfig
															.yuans4
													);
												}
										  )),
									(this._closeCallFunc = t),
									(this._fishIndex = e),
									this.updateFishSprite();
								var n = u.default.getFishMsgByTag(
									this._fishIndex
								);
								(this.coinLockBtn.active =
									n.lockType == u.FISH_LOCK_TYPE.COIN),
									(this.videoLockBtn.active =
										n.lockType == u.FISH_LOCK_TYPE.VIDEO),
									this.caidai1.resetSystem(),
									this.caidai2.resetSystem(),
									this.titleAnim.play(),
									n.lockType == u.FISH_LOCK_TYPE.COIN &&
										((this._price = n.price),
										(this.priceLabel.string =
											n.price + ''));
							}),
							(t.prototype.onDisable = function () {
								c.LyControl.getPlatformType() ==
									s.LyConfig.PlatformDefine.VivoQuickGame &&
									(c.LyControl.destoryNativeAd(
										s.LyConfig.AD_NAME.CUSTOM_INTER
									),
									c.LyControl.destoryNativeAd(
										s.LyConfig.AD_NAME.CUSTOM_EXPRESS
									));
							}),
							(t.prototype.updateCoinLabel = function () {
								this.coinLabel.string =
									f.default.getCoinCount() + '';
							}),
							(t.prototype.update = function () {
								this.coinLabel.string =
									f.default.getCoinCount() + '';
							}),
							(t.prototype.updateFishSprite = function () {
								h.default.updateFishSkin(
									this.fishSpine,
									'Idle2',
									this._fishIndex
								);
							}),
							(t.prototype.onClickVideoLock = function () {
								var e = this;
								h.default.openEffect('Button');
								var t = this;
								c.LyControl.openConcealAd(
									r.LyConcealAdConfig.ClickVideoLockFish,
									function (n) {
										n
											? (f.default.addNowVideoLockFishRate(
													t._fishIndex
											  ) &&
													l.LyUtils.showToast(
														'New skin unlocked!'
													),
											  (e.node.active = !1),
											  'function' ==
													typeof e._closeCallFunc &&
													e._closeCallFunc(),
											  (e._closeCallFunc = null))
											: l.LyUtils.showToast(
													'\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1'
											  );
									},
									function () {
										l.LyUtils.showToast(
											'\u6682\u65e0\u89c6\u9891'
										);
									}
								);
							}),
							(t.prototype.doExitLogic = function () {
								this.node.active = !1;
							}),
							(t.prototype.onClickCoinLock = function () {
								h.default.openEffect('Button'),
									f.default.getCoinCount() >= this._price
										? (f.default.addCoinCount(-this._price),
										  l.LyUtils.showToast(
												'New skin unlocked!'
										  ),
										  f.default.setFishIsLock(
												this._fishIndex
										  ),
										  this.doExitLogic())
										: (p.default.addCoinLayer(),
										  l.LyUtils.showToast(
												'Not enough coins'
										  ));
							}),
							(t.prototype.onClickExit = function () {
								var e = this;
								h.default.openEffect('Button'),
									YYGGames.showInterstitial(function () {
										e.doExitLogic();
									});
							}),
							a(
								[y(sp.Skeleton)],
								t.prototype,
								'fishSpine',
								void 0
							),
							a([y(cc.Node)], t.prototype, 'coinLockBtn', void 0),
							a(
								[y(cc.Node)],
								t.prototype,
								'videoLockBtn',
								void 0
							),
							a([y(cc.Label)], t.prototype, 'coinLabel', void 0),
							a([y(cc.Label)], t.prototype, 'priceLabel', void 0),
							a(
								[y(cc.Animation)],
								t.prototype,
								'titleAnim',
								void 0
							),
							a(
								[y(cc.ParticleSystem)],
								t.prototype,
								'caidai1',
								void 0
							),
							a(
								[y(cc.ParticleSystem)],
								t.prototype,
								'caidai2',
								void 0
							),
							a([m], t)
						);
					})(cc.Component);
				(n.default = A), cc._RF.pop();
			},
			{
				'./LyConcealAdConfig': 'LyConcealAdConfig',
				'./LyConfig': 'LyConfig',
				'./LyControl': 'LyControl',
				'./LyUtils': 'LyUtils',
				'./MiniGameControl': 'MiniGameControl',
				'./gameSaveFishGameConfig': 'gameSaveFishGameConfig',
				'./gameSaveFishGameData': 'gameSaveFishGameData',
				'./gameSaveFishGameUtils': 'gameSaveFishGameUtils',
				'./gameSaveFishViewControl': 'gameSaveFishViewControl'
			}
		],
		gameSaveFishMainScene: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'72309Rbl6dAMYZQ/pbhC57G',
					'gameSaveFishMainScene'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyConfig'),
					s = e('./LyControl'),
					c = e('./gameSaveFishGameData'),
					l = e('./gameSaveFishViewControl'),
					d = e('./gameSaveFishGameManager'),
					u = e('./gameSaveFishHomeManager'),
					f = cc._decorator,
					h = f.ccclass,
					p = f.property,
					g = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.mHomeManager = null),
								(t.mGameManager = null),
								(t.mHomeLayer = null),
								(t.mGameLayer = null),
								(t.mCommonLayer = null),
								(t.mEffectLayer = null),
								(t._nowStatu = l.GAME_STATU.INIT),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.onLoad = function () {
								this.init(),
									s.LyControl.loadExpressAd(),
									this.openPhysics();
							}),
							(t.prototype.onEnable = function () {
								s.LyControl.openAd(r.LyConfig.AD_NAME.BANNER);
							}),
							(t.prototype.start = function () {
								this.setGameStatu(
									l.GAME_STATU.HOME,
									c.default.getNowLv()
								);
							}),
							(t.prototype.toLv = function () {
								var e = this;
								YYGGames.showInterstitial(function () {
									e.setGameStatu(
										l.GAME_STATU.HOME,
										c.default.getNowLv()
									);
								});
							}),
							(t.prototype.gameStart = function () {
								var e = this;
								YYGGames.showInterstitial(function () {
									e.setGameStatu(
										l.GAME_STATU.GAME,
										c.default.getNowLv()
									);
								});
							}),
							(t.prototype.setGameStatu = function (e, t) {
								if (
									(void 0 === t && (t = 1),
									e != this._nowStatu)
								) {
									var n = this.mHomeManager.node,
										o = this.mGameManager.node;
									switch (this._nowStatu) {
										case l.GAME_STATU.HOME:
									}
									switch (
										((this._nowStatu = e), this._nowStatu)
									) {
										case l.GAME_STATU.HOME:
											(n.active = !0), (o.active = !1);
											break;
										case l.GAME_STATU.GAME:
											(n.active = !1),
												(o.active = !0),
												this.mGameManager.gameBegin(t);
									}
								}
							}),
							(t.prototype.init = function () {
								l.default.init(
									this,
									this.mGameManager,
									this.mHomeManager
								),
									l.default.initPushLayer(
										this.mHomeLayer,
										this.mGameLayer,
										this.mCommonLayer,
										this.mEffectLayer
									);
							}),
							(t.prototype.openPhysics = function () {
								(cc.director.getPhysicsManager().enabled = !0),
									(cc.director.getCollisionManager().enabled =
										!0);
							}),
							a(
								[p(u.default)],
								t.prototype,
								'mHomeManager',
								void 0
							),
							a(
								[p(d.default)],
								t.prototype,
								'mGameManager',
								void 0
							),
							a([p(cc.Node)], t.prototype, 'mHomeLayer', void 0),
							a([p(cc.Node)], t.prototype, 'mGameLayer', void 0),
							a(
								[p(cc.Node)],
								t.prototype,
								'mCommonLayer',
								void 0
							),
							a(
								[p(cc.Node)],
								t.prototype,
								'mEffectLayer',
								void 0
							),
							a([h], t)
						);
					})(cc.Component);
				(n.default = g), cc._RF.pop();
			},
			{
				'./LyConfig': 'LyConfig',
				'./LyControl': 'LyControl',
				'./gameSaveFishGameData': 'gameSaveFishGameData',
				'./gameSaveFishGameManager': 'gameSaveFishGameManager',
				'./gameSaveFishHomeManager': 'gameSaveFishHomeManager',
				'./gameSaveFishViewControl': 'gameSaveFishViewControl'
			}
		],
		gameSaveFishNodePoolUtils: [
			function (e, t) {
				'use strict';
				cc._RF.push(
					t,
					'40e739XDuhD9aHTjJntbAs2',
					'gameSaveFishNodePoolUtils'
				);
				var n = {
					NodePools: {},
					PrefabPools: {},
					initNodePool: function (e, t) {
						if (!this.NodePools[t]) {
							var n = new cc.NodePool();
							(this.NodePools[t] = n),
								(this.PrefabPools[t] = e),
								this.fillPool(t);
						}
					},
					initNodePoolPrefab: function (e, t) {
						(this.PrefabPools[t] = e), this.fillPool(t);
					},
					fillPool: function (e) {
						var t = cc.instantiate(this.PrefabPools[e]);
						this.NodePools[e].put(t);
					},
					getNode: function (e) {
						var t = this.NodePools[e];
						if (t)
							return t.size() <= 0 && this.fillPool(e), t.get();
						console.log(
							'\u8fd8\u6ca1\u6709\u8be5\u5bf9\u8c61\u6c60!'
						);
					},
					recycleNode: function (e, t) {
						t.parent && t.removeFromParent();
						var n = this.NodePools[e];
						n
							? n.put(t)
							: console.log(
									'\u8fd8\u6ca1\u6709\u8be5\u5bf9\u8c61\u6c60!'
							  );
					},
					recycleAllNode: function (e, t) {
						var n = this.NodePools[e];
						if (n)
							for (var o = t.length, i = 0; i < o; i++)
								n.put(t[0]);
						else
							console.log(
								'\u8fd8\u6ca1\u6709\u8be5\u5bf9\u8c61\u6c60!'
							);
					},
					clearNodePool: function () {}
				};
				(t.exports = n), cc._RF.pop();
			},
			{}
		],
		gameSaveFishPin: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, 'b53b0RQdlxJ6JHoBgsizQ65', 'gameSaveFishPin');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyControl'),
					s = e('./gameSaveFishGameData'),
					c = e('./gameSaveFishGameUtils'),
					l = e('./gameSaveFishViewControl'),
					d = cc._decorator,
					u = d.ccclass,
					f = d.property,
					h = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.movePosArray = []),
								(t.concatNode = null),
								(t._disVec = null),
								(t._nowPosIndex = 0),
								(t._canTouch = !0),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.onLoad = function () {
								this.node.children[0].on(
									cc.Node.EventType.TOUCH_START,
									this.onTouchEnd,
									this
								);
							}),
							(t.prototype.start = function () {
								if (this.concatNode) {
									var e = this.node.convertToWorldSpaceAR(
											cc.v2(0, 0)
										),
										t =
											this.concatNode.convertToWorldSpaceAR(
												cc.v2(0, 0)
											);
									this._disVec = cc.v2(e.x - t.x, e.y - t.y);
								}
							}),
							(t.prototype.onTouchEnd = function () {
								var e = this;
								if (
									this._canTouch &&
									!r.LyControl.IS_SHOW_VIDEO_LAYER
								) {
									(l.default.getManager(
										l.GAME_STATU.GAME
									)._lvManager._usePinCount += 1),
										(this._nowPosIndex += 1),
										(this._nowPosIndex =
											this._nowPosIndex >
											this.movePosArray.length - 1
												? 0
												: this._nowPosIndex);
									var t =
										this.movePosArray[this._nowPosIndex];
									(this._canTouch = !1),
										c.default.openEffect('PInUnlock'),
										this.node.runAction(
											cc.sequence(
												cc.moveTo(0.3, cc.v2(t.x, t.y)),
												cc.callFunc(function () {
													e._canTouch = !0;
												})
											)
										);
								}
							}),
							(t.prototype.update = function () {
								this.concatNode &&
									s.default.IS_GAME_BEGIN &&
									((this.concatNode.x =
										this.node.x - this._disVec.x),
									(this.concatNode.y =
										this.node.y - this._disVec.y));
							}),
							a(
								[f([cc.Vec2])],
								t.prototype,
								'movePosArray',
								void 0
							),
							a([f(cc.Node)], t.prototype, 'concatNode', void 0),
							a([u], t)
						);
					})(cc.Component);
				(n.default = h), cc._RF.pop();
			},
			{
				'./LyControl': 'LyControl',
				'./gameSaveFishGameData': 'gameSaveFishGameData',
				'./gameSaveFishGameUtils': 'gameSaveFishGameUtils',
				'./gameSaveFishViewControl': 'gameSaveFishViewControl'
			}
		],
		gameSaveFishPoint: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, 'b1b1fZuyDNEs4ZEkJeTtS0P', 'gameSaveFishPoint');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = cc._decorator,
					s = r.ccclass;
				r.property;
				var c = (function (e) {
					function t() {
						var t =
							(null !== e && e.apply(this, arguments)) || this;
						return (t._editScene = null), t;
					}
					return (
						i(t, e),
						(t.prototype.start = function () {
							this.node.on(
								cc.Node.EventType.TOUCH_START,
								this.onTouchStart,
								this
							),
								this.node.on(
									cc.Node.EventType.TOUCH_MOVE,
									this.onTouchMove,
									this
								),
								this.node.on(
									cc.Node.EventType.TOUCH_END,
									this.onTouchEnd,
									this
								);
						}),
						(t.prototype.init = function (e) {
							this._editScene = e;
						}),
						(t.prototype.onTouchStart = function (e) {
							e.getLocation(),
								this._editScene.setNowSelectNode(this.node);
						}),
						(t.prototype.onTouchMove = function (e) {
							var t = e.getLocation(),
								n =
									this._editScene.elemCamera.getScreenToWorldPoint(
										t
									),
								o = this.node.parent.convertToNodeSpaceAR(n);
							(this.node.x = o.x),
								(this.node.y = o.y),
								this._editScene.drawLine();
						}),
						(t.prototype.onTouchEnd = function (e) {
							e.getLocation();
						}),
						a([s], t)
					);
				})(cc.Component);
				(n.default = c), cc._RF.pop();
			},
			{}
		],
		gameSaveFishRotationPin: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'ee6e0TzS5xPgYO6MnsUinCD',
					'gameSaveFishRotationPin'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyControl'),
					s = e('./gameSaveFishViewControl'),
					c = cc._decorator,
					l = c.ccclass,
					d = c.property,
					u = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.angleArray = []),
								(t._nowPosIndex = 0),
								(t._canTouch = !0),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.onLoad = function () {
								this.node.on(
									cc.Node.EventType.TOUCH_START,
									this.onTouchEnd,
									this
								);
							}),
							(t.prototype.start = function () {}),
							(t.prototype.onTouchEnd = function () {
								var e = this;
								if (
									this._canTouch &&
									!r.LyControl.IS_SHOW_VIDEO_LAYER
								) {
									(s.default.getManager(
										s.GAME_STATU.GAME
									)._lvManager._usePinCount += 1),
										(this._nowPosIndex += 1),
										(this._nowPosIndex =
											this._nowPosIndex >
											this.angleArray.length - 1
												? 0
												: this._nowPosIndex);
									var t = this.angleArray[this._nowPosIndex];
									(this._canTouch = !1),
										this.node.runAction(
											cc.sequence(
												cc.rotateTo(0.3, -t),
												cc.callFunc(function () {
													e._canTouch = !0;
												})
											)
										);
								}
							}),
							(t.prototype.update = function () {
								this.node.children[0].angle = 0;
							}),
							a(
								[d([cc.Integer])],
								t.prototype,
								'angleArray',
								void 0
							),
							a([l], t)
						);
					})(cc.Component);
				(n.default = u), cc._RF.pop();
			},
			{
				'./LyControl': 'LyControl',
				'./gameSaveFishViewControl': 'gameSaveFishViewControl'
			}
		],
		gameSaveFishSelectFishLayer: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'add2cfjcm5KVra1/GkDszUC',
					'gameSaveFishSelectFishLayer'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyConcealAdConfig'),
					s = e('./LyControl'),
					c = e('./LyUtils'),
					l = e('./gameSaveFishGameConfig'),
					d = e('./gameSaveFishGameData'),
					u = e('./gameSaveFishGameUtils'),
					f = e('./gameSaveFishViewControl'),
					h = e('./gameSaveFishSelectItem'),
					p = cc._decorator,
					g = p.ccclass,
					m = p.property,
					y = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.fishSpine = null),
								(t.layoutNode = null),
								(t.itemPrefab = null),
								(t.coinLabel = null),
								(t.btnCoinNode = null),
								(t.coinNode = null),
								(t.guiziNode = null),
								(t._closeCallFunc = null),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.start = function () {}),
							(t.prototype.onEnable = function () {
								this.updateCoinUI(),
									s.LyControl.openConcealAd(
										r.LyConcealAdConfig.EnterFishLayer
									);
							}),
							(t.prototype.updateCoinUI = function () {
								this.coinLabel.string =
									d.default.getCoinCount() + '';
							}),
							(t.prototype.updateTempCoinLabel = function (e) {
								this.coinLabel.string = e + '';
							}),
							(t.prototype.setCloseCallFunc = function (e) {
								void 0 === e && (e = null),
									(this._closeCallFunc = e);
							}),
							(t.prototype.onDisable = function () {
								(this.guiziNode.x = -1061),
									this.guiziNode.stopAllActions(),
									s.LyControl.openConcealAd(
										r.LyConcealAdConfig.ExitFishLayer
									);
							}),
							(t.prototype.initUI = function () {
								for (
									var e = this,
										t = d.default.getLockFishArray(),
										n = l.default.FISH_MSG.concat(),
										o = d.default.getNowUseFish(),
										i = 0;
									i < n.length;
									i++
								) {
									var a = cc.instantiate(this.itemPrefab);
									this.layoutNode.addChild(a), (a.scale = 0);
									var r = a.getComponent(h.default),
										s = n[i],
										c = s.tag,
										f = 1 == t[i],
										p = o == c;
									r.updateUI(this, f, p, s);
								}
								u.default.updateFishSkin(
									this.fishSpine,
									'Idle2',
									d.default.getNowUseFish()
								),
									this.guiziNode.runAction(
										cc.sequence(
											cc.delayTime(0.2),
											cc.moveTo(
												0.3,
												cc.v2(75, this.guiziNode.y)
											),
											cc.moveTo(
												0.1,
												cc.v2(0, this.guiziNode.y)
											),
											cc.callFunc(function () {
												for (
													var t = 0;
													t < n.length;
													t++
												)
													e.layoutNode.children[
														t
													].runAction(
														cc.sequence(
															cc.delayTime(
																0.05 * t
															),
															cc.scaleTo(
																0.2,
																1.2
															),
															cc.scaleTo(0.1, 1)
														)
													);
											})
										)
									);
							}),
							(t.prototype.updateUI = function (e) {
								for (
									var t = this,
										n = d.default.getLockFishArray(),
										o = l.default.FISH_MSG.concat(),
										i = d.default.getNowUseFish(),
										a = 0;
									a < o.length;
									a++
								) {
									var r = this.layoutNode.children[a];
									e && (r.scale = 0);
									var s = r.getComponent(h.default),
										c = o[a],
										f = c.tag,
										p = 1 == n[a],
										g = i == f;
									s.updateUI(this, p, g, c);
								}
								u.default.updateFishSkin(
									this.fishSpine,
									'Idle2',
									d.default.getNowUseFish()
								),
									e &&
										this.guiziNode.runAction(
											cc.sequence(
												cc.delayTime(0.2),
												cc.moveTo(
													0.3,
													cc.v2(75, this.guiziNode.y)
												),
												cc.moveTo(
													0.1,
													cc.v2(0, this.guiziNode.y)
												),
												cc.callFunc(function () {
													for (
														var e = 0;
														e < o.length;
														e++
													)
														t.layoutNode.children[
															e
														].runAction(
															cc.sequence(
																cc.delayTime(
																	0.05 * e
																),
																cc.scaleTo(
																	0.2,
																	1.2
																),
																cc.scaleTo(
																	0.1,
																	1
																)
															)
														);
												})
											)
										);
							}),
							(t.prototype.onClickReturn = function () {
								var e = this;
								u.default.openEffect('Button'),
									YYGGames.showInterstitial(function () {
										e._closeCallFunc &&
											('function' ==
												typeof e._closeCallFunc &&
												e._closeCallFunc(),
											(e._closeCallFunc = null)),
											(e.node.active = !1);
									});
							}),
							(t.prototype.onClickSelect = function () {
								u.default.openEffect('Button');
							}),
							(t.prototype.onClickAddCoin = function () {
								var e = this;
								u.default.openEffect('Button');
								var t = this;
								s.LyControl.openConcealAd(
									r.LyConcealAdConfig.VideoBuyFish,
									function (n) {
										if (n) {
											var o =
												d.default.getCoinCount() + 0;
											d.default.addCoinCount(1e3),
												f.default.addFlyCoinAnim(
													e.btnCoinNode,
													e.coinNode,
													function (n, i) {
														if (n == i - 1)
															t.updateCoinUI();
														else {
															var a =
																	((n + 1) /
																		i) *
																	1e3,
																r = Math.floor(
																	o + a
																);
															e.updateTempCoinLabel(
																r
															);
														}
													}
												);
										} else
											c.LyUtils.showToast(
												'\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1'
											);
									},
									function () {
										c.LyUtils.showToast(
											'\u6682\u65e0\u89c6\u9891'
										);
									}
								);
							}),
							a(
								[m(sp.Skeleton)],
								t.prototype,
								'fishSpine',
								void 0
							),
							a([m(cc.Node)], t.prototype, 'layoutNode', void 0),
							a(
								[m(cc.Prefab)],
								t.prototype,
								'itemPrefab',
								void 0
							),
							a([m(cc.Label)], t.prototype, 'coinLabel', void 0),
							a([m(cc.Node)], t.prototype, 'btnCoinNode', void 0),
							a([m(cc.Node)], t.prototype, 'coinNode', void 0),
							a([m(cc.Node)], t.prototype, 'guiziNode', void 0),
							a([g], t)
						);
					})(cc.Component);
				(n.default = y), cc._RF.pop();
			},
			{
				'./LyConcealAdConfig': 'LyConcealAdConfig',
				'./LyControl': 'LyControl',
				'./LyUtils': 'LyUtils',
				'./gameSaveFishGameConfig': 'gameSaveFishGameConfig',
				'./gameSaveFishGameData': 'gameSaveFishGameData',
				'./gameSaveFishGameUtils': 'gameSaveFishGameUtils',
				'./gameSaveFishSelectItem': 'gameSaveFishSelectItem',
				'./gameSaveFishViewControl': 'gameSaveFishViewControl'
			}
		],
		gameSaveFishSelectItem: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'c273crx63BELo7nY1I4c1BQ',
					'gameSaveFishSelectItem'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyConcealAdConfig'),
					s = e('./LyControl'),
					c = e('./LyUtils'),
					l = e('./gameSaveFishGameConfig'),
					d = e('./gameSaveFishGameData'),
					u = e('./gameSaveFishGameUtils'),
					f = e('./gameSaveFishViewControl'),
					h = cc._decorator,
					p = h.ccclass,
					g = h.property,
					m = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.fishSpine = null),
								(t.videoNode = null),
								(t.coinNode = null),
								(t.selectNode = null),
								(t.coinLabel = null),
								(t.isSelectNode = null),
								(t.videoSpNode = null),
								(t.videoRateLabel = null),
								(t._fishIndex = null),
								(t._selectLayerScript = null),
								(t._price = null),
								(t._isInit = !1),
								(t._nowStatu = -1),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.start = function () {}),
							(t.prototype.setFishSprite = function () {
								this._isInit ||
									((this._isInit = !0),
									u.default.updateFishSkin(
										this.fishSpine,
										'Idle2',
										this._fishIndex
									));
							}),
							(t.prototype.updateUI = function (e, t, n, o) {
								if (
									((this._selectLayerScript = e),
									(this._fishIndex = o.tag),
									(this._price = o.price),
									n)
								)
									(this.videoNode.active = !1),
										(this.coinNode.active = !1),
										(this.selectNode.active = !1),
										(this.isSelectNode.active = !0),
										(this._nowStatu = 1);
								else if (t)
									(this.isSelectNode.active = !1),
										(this.videoNode.active = !1),
										(this.coinNode.active = !1),
										(this.selectNode.active = !0),
										(this._nowStatu = 2);
								else if (
									((this.selectNode.active = !1),
									(this.isSelectNode.active = !1),
									(this.coinNode.active =
										o.lockType == l.FISH_LOCK_TYPE.COIN),
									(this.videoNode.active =
										o.lockType == l.FISH_LOCK_TYPE.VIDEO),
									o.lockType == l.FISH_LOCK_TYPE.COIN)
								)
									(this._nowStatu = 3),
										(this.coinLabel.string = '' + o.price);
								else {
									this._nowStatu = 4;
									var i = s.LyControl.getOnceConcealValue(
											r.LyConcealAdConfig.FishLockDemand
										),
										a =
											d.default.getTargetVideoLockFishRate(
												this._fishIndex
											);
									0 == a || a == i
										? ((this.videoSpNode.active = !0),
										  (this.videoRateLabel.node.active =
												!1))
										: a > i
										? ((this.videoSpNode.active = !0),
										  (this.videoRateLabel.node.active =
												!1))
										: ((this.videoSpNode.active = !1),
										  (this.videoRateLabel.node.active =
												!0),
										  (this.videoRateLabel.string =
												a + '/' + i));
								}
								this.setFishSprite();
							}),
							(t.prototype.onClickitem = function () {
								u.default.openEffect('Button');
								var e = this,
									t = f.default.getManager(f.GAME_STATU.GAME);
								2 == this._nowStatu
									? (d.default.setNowUseFish(this._fishIndex),
									  t._lvManager &&
											t._lvManager.updateFishSkin(),
									  this._selectLayerScript.updateUI(!1))
									: 3 == this._nowStatu
									? d.default.getCoinCount() >= this._price
										? (d.default.addCoinCount(-this._price),
										  d.default.setFishIsLock(
												this._fishIndex
										  ),
										  d.default.setNowUseFish(
												this._fishIndex
										  ),
										  t._lvManager &&
												t._lvManager.updateFishSkin(),
										  this._selectLayerScript.updateUI(!1),
										  this._selectLayerScript.updateCoinUI())
										: (f.default.addCoinLayer(),
										  c.LyUtils.showToast(
												'Not enough coins'
										  ))
									: 4 == this._nowStatu &&
									  s.LyControl.openConcealAd(
											r.LyConcealAdConfig.VideoBuyFish,
											function (n) {
												n
													? (d.default.addNowVideoLockFishRate(
															e._fishIndex
													  ) &&
															t._lvManager &&
															t._lvManager.updateFishSkin(),
													  e._selectLayerScript.updateUI(
															!1
													  ))
													: c.LyUtils.showToast(
															'\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1'
													  );
											},
											function () {
												c.LyUtils.showToast(
													'\u6682\u65e0\u89c6\u9891'
												);
											}
									  );
							}),
							(t.prototype.onClickVideoLock = function () {
								u.default.openEffect('Button');
								var e = this,
									t = f.default.getManager(f.GAME_STATU.GAME);
								s.LyControl.openConcealAd(
									r.LyConcealAdConfig.VideoBuyFish,
									function (n) {
										n
											? (d.default.addNowVideoLockFishRate(
													e._fishIndex
											  ) &&
													t._lvManager &&
													t._lvManager.updateFishSkin(),
											  e._selectLayerScript.updateUI(!1))
											: c.LyUtils.showToast(
													'\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1'
											  );
									},
									function () {
										c.LyUtils.showToast(
											'\u6682\u65e0\u89c6\u9891'
										);
									}
								);
							}),
							(t.prototype.onClickCoinLock = function () {
								u.default.openEffect('Button');
								var e = d.default.getCoinCount(),
									t = f.default.getManager(f.GAME_STATU.GAME);
								e >= this._price
									? (d.default.addCoinCount(-this._price),
									  d.default.setFishIsLock(this._fishIndex),
									  d.default.setNowUseFish(this._fishIndex),
									  t._lvManager &&
											t._lvManager.updateFishSkin(),
									  this._selectLayerScript.updateUI(!1),
									  this._selectLayerScript.updateCoinUI())
									: (f.default.addCoinLayer(),
									  c.LyUtils.showToast('Not enough coins'));
							}),
							(t.prototype.onClickSelect = function () {
								u.default.openEffect('Button'),
									s.LyControl.openConcealAd(
										r.LyConcealAdConfig.ClickSelectFish
									);
								var e = f.default.getManager(f.GAME_STATU.GAME);
								d.default.setNowUseFish(this._fishIndex),
									e._lvManager &&
										e._lvManager.updateFishSkin(),
									this._selectLayerScript.updateUI(!1);
							}),
							a(
								[g(sp.Skeleton)],
								t.prototype,
								'fishSpine',
								void 0
							),
							a([g(cc.Node)], t.prototype, 'videoNode', void 0),
							a([g(cc.Node)], t.prototype, 'coinNode', void 0),
							a([g(cc.Node)], t.prototype, 'selectNode', void 0),
							a([g(cc.Label)], t.prototype, 'coinLabel', void 0),
							a(
								[g(cc.Node)],
								t.prototype,
								'isSelectNode',
								void 0
							),
							a([g(cc.Node)], t.prototype, 'videoSpNode', void 0),
							a(
								[g(cc.Label)],
								t.prototype,
								'videoRateLabel',
								void 0
							),
							a([p], t)
						);
					})(cc.Component);
				(n.default = m), cc._RF.pop();
			},
			{
				'./LyConcealAdConfig': 'LyConcealAdConfig',
				'./LyControl': 'LyControl',
				'./LyUtils': 'LyUtils',
				'./gameSaveFishGameConfig': 'gameSaveFishGameConfig',
				'./gameSaveFishGameData': 'gameSaveFishGameData',
				'./gameSaveFishGameUtils': 'gameSaveFishGameUtils',
				'./gameSaveFishViewControl': 'gameSaveFishViewControl'
			}
		],
		gameSaveFishSettingLayer: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'b841d3f5t1FoLvl0p/uq6Cc',
					'gameSaveFishSettingLayer'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyConcealAdConfig'),
					s = e('./LyConfig'),
					c = e('./LyControl'),
					l = e('./MiniGameControl'),
					d = e('./gameSaveFishGameUtils'),
					u = cc._decorator,
					f = u.ccclass,
					h = u.property,
					p = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.musicNode = null),
								(t.effectNode = null),
								(t.feedBackBtn = null),
								(t._bmusic = !1),
								(t._beffect = !1),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.start = function () {}),
							(t.prototype.onEnable = function () {
								(this._bmusic = 1 == Mcomm.bMusic),
									(this._beffect = 1 == Mcomm.bEffect),
									this.updateMusicSwitch(),
									this.updateEffectSwitch(),
									c.LyControl.getPlatformType() ==
										s.LyConfig.PlatformDefine
											.VivoQuickGame &&
										(l.MiniGameControl._isInterShowTime
											? (console.log(
													'\u63d2\u5c4f\u65f6\u95f4\u95f4\u9694\u4e2d\uff0c\u5c55\u793a\u4fe1\u606f\u6d41'
											  ),
											  c.LyControl.openConcealAd(
													r.LyConcealAdConfig.yuans1
											  ))
											: c.LyControl.openConcealAd(
													r.LyConcealAdConfig
														.EnterSetting,
													function () {
														c.LyControl.openConcealAd(
															r.LyConcealAdConfig
																.yuans1
														);
													}
											  ));
							}),
							(t.prototype.onDisable = function () {
								c.LyControl.openConcealAd(
									r.LyConcealAdConfig.ExitSetting
								),
									c.LyControl.getPlatformType() ==
										s.LyConfig.PlatformDefine
											.VivoQuickGame &&
										(console.log(
											'\u539f\u751f\u6a21\u677f\u5e7f\u544a\u5173\u95ed CUSTOM_EXPRESS  1'
										),
										c.LyControl.destoryNativeAd(
											s.LyConfig.AD_NAME.CUSTOM_INTER
										),
										c.LyControl.destoryNativeAd(
											s.LyConfig.AD_NAME.CUSTOM_EXPRESS
										));
							}),
							(t.prototype.updateMusicSwitch = function () {
								var e = this.musicNode.getChildByName('open'),
									t = this.musicNode.getChildByName('close');
								(e.active = this._bmusic),
									(t.active = !this._bmusic);
							}),
							(t.prototype.updateEffectSwitch = function () {
								var e = this.effectNode.getChildByName('open'),
									t = this.effectNode.getChildByName('close');
								(e.active = this._beffect),
									(t.active = !this._beffect);
							}),
							(t.prototype.openBgMusic = function () {
								Mcomm.PlayLoadSound(
									'gameSaveFish/sound/BGM_game',
									!0
								);
							}),
							(t.prototype.onClickMusic = function () {
								d.default.openEffect('Button'),
									(this._bmusic = !this._bmusic);
								var e = this._bmusic ? 1 : -1;
								Mcomm.SetMusicOpen(e),
									this._bmusic && this.openBgMusic(),
									this.updateMusicSwitch();
							}),
							(t.prototype.onClickEffect = function () {
								d.default.openEffect('Button'),
									(this._beffect = !this._beffect);
								var e = this._beffect ? 1 : -1;
								Mcomm.SetEffectOpen(e),
									this._beffect ||
										cc.audioEngine.stopAllEffects(),
									this.updateEffectSwitch();
							}),
							(t.prototype.onClickClose = function () {
								d.default.openEffect('Button'),
									(this.node.active = !1);
							}),
							(t.prototype.onClickPrivate = function () {
								d.default.openEffect('Button'),
									c.LyControl.showPrivateProLayer();
							}),
							(t.prototype.onClickPro = function () {
								d.default.openEffect('Button'),
									c.LyControl.showUserProLayer();
							}),
							a([h(cc.Node)], t.prototype, 'musicNode', void 0),
							a([h(cc.Node)], t.prototype, 'effectNode', void 0),
							a([h(cc.Node)], t.prototype, 'feedBackBtn', void 0),
							a([f], t)
						);
					})(cc.Component);
				(n.default = p), cc._RF.pop();
			},
			{
				'./LyConcealAdConfig': 'LyConcealAdConfig',
				'./LyConfig': 'LyConfig',
				'./LyControl': 'LyControl',
				'./MiniGameControl': 'MiniGameControl',
				'./gameSaveFishGameUtils': 'gameSaveFishGameUtils'
			}
		],
		gameSaveFishTouchMovePin: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'3e2065PiKZKSaEmEtNGSA7r',
					'gameSaveFishTouchMovePin'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./gameSaveFishViewControl'),
					s = cc._decorator,
					c = s.ccclass,
					l = s.property,
					d = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.isMoveXDir = !0), (t.max = 0), (t.min = 0), t
							);
						}
						return (
							i(t, e),
							(t.prototype.onLoad = function () {
								this.node.on(
									cc.Node.EventType.TOUCH_MOVE,
									this.onTouchMove,
									this
								);
							}),
							(t.prototype.start = function () {}),
							(t.prototype.onTouchMove = function (e) {
								r.default.getManager(
									r.GAME_STATU.GAME
								)._lvManager._usePinCount += 1;
								var t = e.getLocation(),
									n =
										this.node.parent.convertToNodeSpaceAR(
											t
										);
								if (this.isMoveXDir) {
									var o = n.x;
									(o =
										(o = o > this.max ? this.max : o) <
										this.min
											? this.min
											: o),
										(this.node.x = o);
								} else {
									var i = n.y;
									(i =
										(i = i > this.max ? this.max : i) <
										this.min
											? this.min
											: i),
										(this.node.y = i);
								}
							}),
							(t.prototype.update = function () {}),
							a(
								[l(cc.Boolean)],
								t.prototype,
								'isMoveXDir',
								void 0
							),
							a([l(cc.Integer)], t.prototype, 'max', void 0),
							a([l(cc.Integer)], t.prototype, 'min', void 0),
							a([c], t)
						);
					})(cc.Component);
				(n.default = d), cc._RF.pop();
			},
			{ './gameSaveFishViewControl': 'gameSaveFishViewControl' }
		],
		gameSaveFishVideoLayer: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'c0a07cKoAZF9LUnvXN8iaRy',
					'gameSaveFishVideoLayer'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyControl'),
					s = cc._decorator,
					c = s.ccclass;
				s.property;
				var l = (function (e) {
					function t() {
						return (null !== e && e.apply(this, arguments)) || this;
					}
					return (
						i(t, e),
						(t.prototype.start = function () {
							this.node.on(
								cc.Node.EventType.TOUCH_START,
								this.onTouchStart,
								this
							),
								(this.node._touchListener.swallowTouches = !1);
						}),
						(t.prototype.onTouchStart = function () {
							r.LyControl.checkShowVideoNode();
						}),
						a([c], t)
					);
				})(cc.Component);
				(n.default = l), cc._RF.pop();
			},
			{ './LyControl': 'LyControl' }
		],
		gameSaveFishViewControl: [
			function (e, t, n) {
				'use strict';
				cc._RF.push(
					t,
					'295b6CMSNdA/YfTalCaK2tw',
					'gameSaveFishViewControl'
				),
					Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.GAME_STATU = void 0);
				var o = e('./gameSaveFishCoinFlyAnim'),
					i = e('./gameSaveFishGameEndLayer'),
					a = e('./gameSaveFishLockFishLayer'),
					r = e('./gameSaveFishSelectFishLayer'),
					s = e('./gameSaveFishGameUtils'),
					c = e('./gameSaveFishNodePoolUtils.js'),
					l = e('./gameSaveFishGameConfig'),
					d = e('./gameSaveFishBoxLayer'),
					u = null,
					f = null,
					h = null;
				n.GAME_STATU = cc.Enum({
					INIT: 'init',
					HOME: 'home',
					GAME: 'game',
					MAIN: 'main'
				});
				var p = (function () {
					function e() {}
					return (
						(e.init = function (e, t, n) {
							(u = e), (f = t), (h = n);
						}),
						(e.initPushLayer = function (t, n, o, i) {
							(e.HOME_LAYER = t),
								(e.GAME_LAYER = n),
								(e.COMMON_LAYER = o),
								(e.EFFECT_LAYER = i);
						}),
						(e.getManager = function (e) {
							var t = null;
							return (
								e == n.GAME_STATU.HOME
									? (t = h)
									: e == n.GAME_STATU.GAME
									? (t = f)
									: e == n.GAME_STATU.MAIN && (t = u),
								t
							);
						}),
						(e.addGameEndLayer = function (t, n, o) {
							if (
								(void 0 === o && (o = null),
								this.closeSettingLayer(),
								e.GAME_END_LAYER)
							) {
								var a = e.GAME_END_LAYER;
								a.getComponent(i.default).init(t, n),
									(a.active = !0);
							} else
								s.default.loadBundleRes(
									'gameSaveFishResources',
									'gameSaveFish/UI/gameSaveFishGameEndLayer',
									function (o) {
										var a = cc.instantiate(o);
										e.COMMON_LAYER.addChild(a),
											(e.GAME_END_LAYER = a),
											a
												.getComponent(i.default)
												.init(t, n);
									},
									cc.Prefab
								);
						}),
						(e.addGameSettingLayer = function () {
							e.GAME_SETTING_LAYER
								? (e.GAME_SETTING_LAYER.active = !0)
								: s.default.loadBundleRes(
										'gameSaveFishResources',
										'gameSaveFish/UI/gameSaveFishSettingLayer',
										function (t) {
											var n = cc.instantiate(t);
											e.GAME_LAYER.addChild(n),
												(e.GAME_SETTING_LAYER = n);
										},
										cc.Prefab
								  );
						}),
						(e.closeSettingLayer = function () {
							e.GAME_SETTING_LAYER &&
								(e.GAME_SETTING_LAYER.active = !1);
						}),
						(e.addLockFishLayer = function (t, n) {
							if (e.LOCK_FISH_LAYER) {
								var o = e.LOCK_FISH_LAYER;
								o.getComponent(a.default).init(t, n),
									(o.active = !0);
							} else
								s.default.loadBundleRes(
									'gameSaveFishResources',
									'gameSaveFish/UI/gameSaveFishLockFishLayer',
									function (o) {
										var i = cc.instantiate(o);
										e.COMMON_LAYER.addChild(i),
											(e.LOCK_FISH_LAYER = i),
											i
												.getComponent(a.default)
												.init(t, n);
									},
									cc.Prefab
								);
						}),
						(e.updateAllCoinUI = function () {
							e.SELECT_FISH_LAYER &&
								e.SELECT_FISH_LAYER.active &&
								e.SELECT_FISH_LAYER.getComponent(
									r.default
								).updateCoinUI(),
								e.LOCK_FISH_LAYER &&
									e.LOCK_FISH_LAYER.active &&
									e.LOCK_FISH_LAYER.getComponent(
										a.default
									).updateCoinLabel(),
								e.GAME_END_LAYER &&
									e.GAME_END_LAYER.active &&
									e.GAME_END_LAYER.getComponent(
										i.default
									).updateCoinLabel();
						}),
						(e.addCoinLayer = function () {
							if (e.ADD_COIN_LAYER) {
								var t = e.ADD_COIN_LAYER;
								(t.zIndex = 101), (t.active = !0);
							} else
								s.default.loadBundleRes(
									'gameSaveFishResources',
									'gameSaveFish/UI/gameSaveFishAddCoinLayer',
									function (t) {
										var n = cc.instantiate(t);
										e.COMMON_LAYER.addChild(n),
											(n.zIndex = 101),
											(e.ADD_COIN_LAYER = n);
									},
									cc.Prefab
								);
						}),
						(e.addBoxLayer = function (t) {
							if (e.BOX_LAYER) {
								var n = e.BOX_LAYER;
								n.getComponent(d.default).setStarCount(t),
									(n.active = !0);
							} else
								s.default.loadBundleRes(
									'gameSaveFishResources',
									'gameSaveFish/UI/gameSaveFishBoxLayer',
									function (n) {
										var o = cc.instantiate(n);
										e.GAME_LAYER.addChild(o),
											o
												.getComponent(d.default)
												.setStarCount(t),
											(e.BOX_LAYER = o);
									},
									cc.Prefab
								);
						}),
						(e.addSelectFishLayer = function (t) {
							if (
								(void 0 === t && (t = null),
								e.SELECT_FISH_LAYER)
							) {
								var n = e.SELECT_FISH_LAYER,
									o = n.getComponent(r.default);
								(n.zIndex = 100),
									(n.active = !0),
									o.updateUI(!0),
									o.setCloseCallFunc(t);
							} else
								s.default.loadBundleRes(
									'gameSaveFishResources',
									'gameSaveFish/UI/gameSaveFishSelectFishLayer',
									function (n) {
										var o = cc.instantiate(n);
										(o.zIndex = 100),
											e.COMMON_LAYER.addChild(o),
											(e.SELECT_FISH_LAYER = o);
										var i = o.getComponent(r.default);
										i.initUI(), i.setCloseCallFunc(t);
									},
									cc.Prefab
								);
						}),
						(e.addFlyCoinAnim = function (t, n, i) {
							void 0 === i && (i = null),
								s.default.loadBundleRes(
									'gameSaveFishResources',
									'gameSaveFish/UI/coinFlyAnimPrefab',
									function (a) {
										var r = cc.instantiate(a);
										e.COMMON_LAYER.addChild(r),
											(r.zIndex = 1e3),
											r
												.getComponent(o.default)
												.doAnim(t, n, i);
									},
									cc.Prefab
								);
						}),
						(e.addEffect = function (t, n) {
							var o = c.getNode(t);
							e.EFFECT_LAYER.addChild(o);
							var i = e.EFFECT_LAYER.convertToNodeSpaceAR(n);
							return (o.x = i.x), (o.y = i.y), o;
						}),
						(e.addSmokeEffect = function (t) {
							var n = t.convertToWorldSpaceAR(
								cc.v2(0, t.height / 2)
							);
							if (
								!s.default.checkOnceNodeNearbyHaveSameNode(
									n,
									e.SMOKE_ARRAY
								)
							) {
								var o = e.addEffect(
									l.default.POOL_NAMES.SMOKE,
									n
								);
								e.SMOKE_ARRAY[e.SMOKE_ARRAY.length] = o;
								var i = Math.floor(1e3 * Math.random() + 2500);
								setTimeout(function () {
									var t = e.SMOKE_ARRAY.indexOf(o);
									e.SMOKE_ARRAY.splice(t, 1),
										c.recycleNode(
											l.default.POOL_NAMES.SMOKE,
											o
										);
								}, i);
							}
						}),
						(e.addYanJiangPaoPaoEffect = function (t) {
							var n = t.convertToWorldSpaceAR(cc.v2(0, 0));
							if (
								!s.default.checkOnceNodeNearbyHaveSameNode(
									n,
									e.YANJAINGPAOPAO_ARRAY,
									0,
									100
								)
							) {
								var o = e.addEffect(
									l.default.POOL_NAMES.YANJIANGPAOPAO,
									n
								);
								e.YANJAINGPAOPAO_ARRAY[
									e.YANJAINGPAOPAO_ARRAY.length
								] = o;
								var i = Math.floor(1e3 * Math.random() + 2500);
								setTimeout(function () {
									var t = e.YANJAINGPAOPAO_ARRAY.indexOf(o);
									e.YANJAINGPAOPAO_ARRAY.splice(t, 1),
										c.recycleNode(
											l.default.POOL_NAMES.YANJIANGPAOPAO,
											o
										);
								}, i);
							}
						}),
						(e.addBombEffect = function (t) {
							var n = t.convertToWorldSpaceAR(cc.v2(0, 0));
							s.default.loadBundleRes(
								'gameSaveFishResources',
								'gameSaveFish/effectPrefab/Bomb',
								function (t) {
									var o = cc.instantiate(t);
									e.EFFECT_LAYER.addChild(o);
									var i =
										e.EFFECT_LAYER.convertToNodeSpaceAR(n);
									(o.x = i.x),
										(o.y = i.y),
										setTimeout(function () {
											o.removeFromParent();
										}, 2e3);
								},
								cc.Prefab
							);
						}),
						(e.addIceEffect = function (t) {
							var n = t.convertToWorldSpaceAR(cc.v2(0, 0));
							s.default.loadBundleRes(
								'gameSaveFishResources',
								'gameSaveFish/effectPrefab/ice',
								function (t) {
									var o = cc.instantiate(t);
									e.EFFECT_LAYER.addChild(o);
									var i =
										e.EFFECT_LAYER.convertToNodeSpaceAR(n);
									(o.x = i.x),
										(o.y = i.y),
										setTimeout(function () {
											o.removeFromParent();
										}, 2e3);
								},
								cc.Prefab
							);
						}),
						(e.addYanjiangEffect = function (t) {
							var n = e.addEffect(
								l.default.POOL_NAMES.YANJIANG,
								t
							);
							(e.YANJIANG_ARRAY[e.YANJIANG_ARRAY.length] = n),
								n
									.getComponentInChildren(cc.ParticleSystem)
									.resetSystem(),
								setTimeout(function () {
									var t = e.YANJIANG_ARRAY.indexOf(n);
									e.YANJIANG_ARRAY.splice(t, 1),
										c.recycleNode(
											l.default.POOL_NAMES.YANJIANG,
											n
										);
								}, 6e3);
						}),
						(e.addPaoPaoEffect = function (e) {
							s.default.loadBundleRes(
								'gameSaveFishResources',
								'gameSaveFish/effectPrefab/paopao',
								function (t) {
									var n = cc.instantiate(t);
									e.addChild(n),
										(n.x = 0),
										(n.y = e.height / 2 + 2);
								},
								cc.Prefab
							);
						}),
						(e.showToast = function (e) {
							s.default.loadBundleRes(
								'gameSaveFishResources',
								'gameSaveFish/toastPrefab',
								function (t) {
									var n = cc.instantiate(t);
									cc.find('Canvas').parent.addChild(n),
										(n.zIndex = 9999),
										n
											.getComponent('ToastScript')
											.showToast(e);
								},
								cc.Prefab
							);
						}),
						(e.HOME_LAYER = null),
						(e.GAME_LAYER = null),
						(e.COMMON_LAYER = null),
						(e.EFFECT_LAYER = null),
						(e.GAME_END_LAYER = null),
						(e.GAME_SETTING_LAYER = null),
						(e.LOCK_FISH_LAYER = null),
						(e.ADD_COIN_LAYER = null),
						(e.BOX_LAYER = null),
						(e.SELECT_FISH_LAYER = null),
						(e.SMOKE_ARRAY = []),
						(e.YANJAINGPAOPAO_ARRAY = []),
						(e.YANJIANG_ARRAY = []),
						e
					);
				})();
				(n.default = p), cc._RF.pop();
			},
			{
				'./gameSaveFishBoxLayer': 'gameSaveFishBoxLayer',
				'./gameSaveFishCoinFlyAnim': 'gameSaveFishCoinFlyAnim',
				'./gameSaveFishGameConfig': 'gameSaveFishGameConfig',
				'./gameSaveFishGameEndLayer': 'gameSaveFishGameEndLayer',
				'./gameSaveFishGameUtils': 'gameSaveFishGameUtils',
				'./gameSaveFishLockFishLayer': 'gameSaveFishLockFishLayer',
				'./gameSaveFishNodePoolUtils.js': 'gameSaveFishNodePoolUtils',
				'./gameSaveFishSelectFishLayer': 'gameSaveFishSelectFishLayer'
			}
		],
		gameSaveFishVirus: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, '7a8d3XLwXRL0L9uIecQ6HTQ', 'gameSaveFishVirus');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./gameSaveFishConcatBase'),
					s = cc._decorator,
					c = s.ccclass,
					l = s.property,
					d = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (t.virusRigid = null), t;
						}
						return (
							i(t, e),
							(t.prototype.start = function () {}),
							(t.prototype.onEnable = function () {
								var e = this;
								setTimeout(function () {
									e.initSpeed();
								}, 200);
							}),
							(t.prototype.initSpeed = function () {
								var e = Math.random() > 0.5 ? 100 : -100,
									t = Math.random() > 0.5 ? 100 : -100;
								this.node.getComponent(
									cc.RigidBody
								).linearVelocity = cc.v2(e, t);
							}),
							a(
								[l(cc.RigidBody)],
								t.prototype,
								'virusRigid',
								void 0
							),
							a([c], t)
						);
					})(r.default);
				(n.default = d), cc._RF.pop();
			},
			{ './gameSaveFishConcatBase': 'gameSaveFishConcatBase' }
		],
		gameSaveFishWater: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, '1f6daAiBxVMU4TwK0j/p5tz', 'gameSaveFishWater');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./gameSaveFishGameUtils'),
					s = e('./gameSaveFishConcatBase'),
					c = cc._decorator,
					l = c.ccclass,
					d = c.property,
					u = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (t.waterRigid = null), t;
						}
						return (
							i(t, e),
							(t.prototype.start = function () {}),
							(t.prototype.onEnable = function () {
								var e = this,
									t = Math.floor(1e3 * Math.random() + 1e3);
								cc.director
									.getScheduler()
									.isScheduled(this.scheduleCallFunc, this) ||
									setTimeout(function () {
										e.schedule(e.scheduleCallFunc, 1);
									}, t);
							}),
							(t.prototype.scheduleCallFunc = function () {
								0 == this.waterRigid.linearVelocity.mag() &&
									(this.waterRigid.linearVelocity = cc.v2(
										0,
										1
									));
							}),
							(t.prototype.onDisable = function () {
								cc.director
									.getScheduler()
									.isScheduled(this.scheduleCallFunc, this) &&
									this.unschedule(this.scheduleCallFunc);
							}),
							(t.prototype.update = function () {
								this.waterRigid.linearVelocity.mag() < 200
									? r.default.openStaticWater()
									: r.default.openDynamicWater();
							}),
							a(
								[d(cc.RigidBody)],
								t.prototype,
								'waterRigid',
								void 0
							),
							a([l], t)
						);
					})(s.default);
				(n.default = u), cc._RF.pop();
			},
			{
				'./gameSaveFishConcatBase': 'gameSaveFishConcatBase',
				'./gameSaveFishGameUtils': 'gameSaveFishGameUtils'
			}
		],
		gameSaveFishWoodSwitch: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'f7e88Mv7jNDvY70ihl3plY0',
					'gameSaveFishWoodSwitch'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = cc._decorator,
					s = r.ccclass,
					c = r.property,
					l = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.open = null),
								(t.close = null),
								(t.woodNode = null),
								(t.time = 2),
								(t.isClockwise = !0),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.start = function () {}),
							(t.prototype.openSwitch = function () {
								(this.open.active = !0),
									(this.close.active = !1),
									this.woodNode.stopAllActions();
								var e = this.isClockwise ? 360 : -360;
								this.woodNode.runAction(
									cc.rotateBy(this.time, e).repeatForever()
								);
							}),
							a([c(cc.Node)], t.prototype, 'open', void 0),
							a([c(cc.Node)], t.prototype, 'close', void 0),
							a([c(cc.Node)], t.prototype, 'woodNode', void 0),
							a([c(cc.Integer)], t.prototype, 'time', void 0),
							a(
								[c(cc.Boolean)],
								t.prototype,
								'isClockwise',
								void 0
							),
							a([s], t)
						);
					})(cc.Component);
				(n.default = l), cc._RF.pop();
			},
			{}
		],
		gameSaveFishlvManager: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'2366cmcTb1OQoIMEE9YCH0q',
					'gameSaveFishlvManager'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./gameSaveFishGameConfig'),
					s = e('./gameSaveFishGameData'),
					c = e('./gameSaveFishGameUtils'),
					l = e('./gameSaveFishNodePoolUtils.js'),
					d = e('./gameSaveFishViewControl'),
					u = e('./gameSaveFishConcatBase'),
					f = e('./gameSaveFishCreateCount'),
					h = e('./gameSaveFishFish'),
					p = cc._decorator,
					g = p.ccclass,
					m = p.property,
					y = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.spWaterShow = null),
								(t.createLayer = null),
								(t.waterLayerNode = null),
								(t.guideNode = null),
								(t.needClearVirusArray = []),
								(t._fishSpine = null),
								(t._waterGenrateCount = 0),
								(t._usePinCount = 0),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.onLoad = function () {
								var e = this.node.getChildByName('fish');
								(this._fishSpine = e.getComponentInChildren(
									sp.Skeleton
								)),
									(this._usePinCount = 0),
									this.setShowGuideNode();
							}),
							(t.prototype.start = function () {
								this.updateFishSkin();
							}),
							(t.prototype.setShowGuideNode = function () {
								var e = d.default.getManager(d.GAME_STATU.GAME);
								this.guideNode && e._lv >= 22
									? (this.guideNode.active = !1)
									: this.guideNode;
							}),
							(t.prototype.updateFishSkin = function () {
								var e = s.default.getNowUseFish(),
									t = this;
								c.default.loadBundleRes(
									'gameSaveFishResources',
									'gameSaveFish/fishSpine/' + e + '/' + e,
									function (e) {
										(t._fishSpine.skeletonData = e),
											t._fishSpine.setAnimation(
												0,
												'Idle1',
												!0
											);
									},
									sp.SkeletonData
								);
							}),
							(t.prototype.doFishHappySpine = function () {
								var e = this.node.getChildByName('fish');
								this._fishSpine.setAnimation(1, 'Idle2', !0),
									e.getComponent(h.default).doFishHappyAnim();
							}),
							(t.prototype.createWater = function () {
								for (
									var e = 0;
									e < this.createLayer.childrenCount;
									e++
								)
									for (
										var t = this.createLayer.children[e],
											n = t.getComponent(f.default),
											o = r.default.getElemNameByElemType(
												n.createType
											),
											i = n.createCount,
											a = 0;
										a < i;
										a++
									) {
										var s = l.getNode(o);
										this.waterLayerNode.addChild(s),
											this.setWaterMsg(s, t),
											(s.active = !0);
									}
							}),
							(t.prototype.setWaterMsg = function (e, t) {
								(e.scale = 0.4),
									(e.getComponent(
										cc.RigidBody
									).linearVelocity = cc.v2());
								var n = t.convertToWorldSpaceAR(cc.v2(0, 0)),
									o =
										this.waterLayerNode.convertToNodeSpaceAR(
											n
										),
									i = Math.floor(
										Math.random() * t.width +
											(o.x - t.width / 2)
									),
									a = Math.floor(
										Math.random() * t.height +
											(o.y - t.height / 2)
									);
								(e.x = i), (e.y = a);
							}),
							(t.prototype.recyleAllLv = function () {
								for (
									var e =
										this.waterLayerNode.childrenCount - 1;
									e >= 0;
									e--
								) {
									var t = this.waterLayerNode.children[e],
										n = t.getComponent(u.default),
										o = r.default.getElemNameByElemType(
											n.elemType
										);
									l.recycleNode(o, t);
								}
							}),
							(t.prototype.checkNeedCleanVirus = function () {
								if (this.needClearVirusArray.length > 0) {
									for (
										var e = !0, t = 0;
										t < this.needClearVirusArray.length;
										t++
									)
										if (
											(n = this.needClearVirusArray[t])
												.parent
										) {
											e = !1;
											break;
										}
									if (e)
										for (
											t =
												this.waterLayerNode
													.childrenCount - 1;
											t >= 0;
											t--
										) {
											var n,
												o = (n =
													this.waterLayerNode
														.children[
														t
													]).getComponent(u.default),
												i =
													r.default.getElemNameByElemType(
														o.elemType
													);
											o.elemType == r.ELEM_TYPE.VIRUS &&
												l.recycleNode(i, n);
										}
								}
							}),
							a(
								[m(cc.Sprite)],
								t.prototype,
								'spWaterShow',
								void 0
							),
							a([m(cc.Node)], t.prototype, 'createLayer', void 0),
							a(
								[m(cc.Node)],
								t.prototype,
								'waterLayerNode',
								void 0
							),
							a([m(cc.Node)], t.prototype, 'guideNode', void 0),
							a(
								[m(cc.Node)],
								t.prototype,
								'needClearVirusArray',
								void 0
							),
							a([g], t)
						);
					})(cc.Component);
				(n.default = y), cc._RF.pop();
			},
			{
				'./gameSaveFishConcatBase': 'gameSaveFishConcatBase',
				'./gameSaveFishCreateCount': 'gameSaveFishCreateCount',
				'./gameSaveFishFish': 'gameSaveFishFish',
				'./gameSaveFishGameConfig': 'gameSaveFishGameConfig',
				'./gameSaveFishGameData': 'gameSaveFishGameData',
				'./gameSaveFishGameUtils': 'gameSaveFishGameUtils',
				'./gameSaveFishNodePoolUtils.js': 'gameSaveFishNodePoolUtils',
				'./gameSaveFishViewControl': 'gameSaveFishViewControl'
			}
		],
		handNodeAnim: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, 'f91cdPwdltJoYQA6wYbVepf', 'handNodeAnim');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyConfig'),
					s = e('./LyControl'),
					c = cc._decorator,
					l = c.ccclass,
					d = c.property,
					u = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.bindBtnNode = null),
								(t.animTag = 2),
								(t.needChannelControl = !1),
								(t._initAngle = 0),
								(t._initPos = cc.v2(0, 0)),
								(t._isInit = !1),
								(t._btnActionTag = null),
								(t._bindNodeInitScale = 1),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.start = function () {}),
							(t.prototype.onDisable = function () {
								this.node.stopAllActions(),
									(this.node.angle = this._initAngle),
									(this.node.x = this._initPos.x),
									(this.node.y = this._initPos.y),
									this.bindBtnNode &&
										this._btnActionTag &&
										(this.bindBtnNode.stopAction(
											this._btnActionTag
										),
										(this.bindBtnNode.scale =
											this._bindNodeInitScale));
							}),
							(t.prototype.onEnable = function () {
								var e = this;
								if (
									(this.needChannelControl &&
										s.LyControl.getPlatformType() ==
											r.LyConfig.PlatformDefine
												.QQminiGame) ||
									s.LyControl.getPlatformType() ==
										r.LyConfig.PlatformDefine.WeChatGame
								)
									this.node.active = !1;
								else if (
									(this._isInit ||
										((this._initAngle = this.node.angle),
										(this._initPos = cc.v2(
											this.node.x,
											this.node.y
										))),
									r.LyConfig.LY_LIB_TYPE ==
										r.LIB_TYPE.CHANNEL ||
										r.LyConfig.LY_LIB_TYPE ==
											r.LIB_TYPE.MINI)
								) {
									var t = !1;
									if (this.bindBtnNode) {
										if (
											((t =
												this.bindBtnNode.active &&
												this.bindBtnNode.getComponent(
													cc.Button
												).interactable),
											(this.node.active = t),
											t)
										) {
											this._bindNodeInitScale =
												this.bindBtnNode.scale;
											var n = this.bindBtnNode.scale,
												o = cc
													.sequence(
														cc.scaleBy(0.3, 1.2),
														cc.scaleTo(0.3, n),
														cc.scaleBy(0.3, 1.2),
														cc.scaleTo(0.3, n),
														cc.delayTime(0.5)
													)
													.repeatForever();
											(this._btnActionTag = o),
												setTimeout(function () {
													e.bindBtnNode.runAction(o);
												}, 500);
										}
									} else t = !0;
									t &&
										(1 == this.animTag
											? this.doAnim_1()
											: 2 == this.animTag &&
											  setTimeout(function () {
													e.doAnim_2();
											  }, 200));
								} else this.node.active = !1;
							}),
							(t.prototype.doAnim_1 = function () {
								this.node.runAction(
									cc
										.sequence(
											cc.spawn(
												cc.rotateTo(0.2, 50),
												cc.moveBy(0.2, cc.v2(-10, 10))
											),
											cc.spawn(
												cc.rotateTo(0.2, 0),
												cc.moveBy(0.2, cc.v2(10, -10))
											),
											cc.delayTime(0.3)
										)
										.repeatForever()
								);
							}),
							(t.prototype.doAnim_2 = function () {
								this.node.stopAllActions(),
									this.node.runAction(
										cc
											.sequence(
												cc.moveBy(0.2, cc.v2(30, -30)),
												cc.moveBy(0.2, cc.v2(-30, 30)),
												cc.delayTime(0.2)
											)
											.repeatForever()
									);
							}),
							a([d(cc.Node)], t.prototype, 'bindBtnNode', void 0),
							a([d(cc.Integer)], t.prototype, 'animTag', void 0),
							a(
								[d(cc.Boolean)],
								t.prototype,
								'needChannelControl',
								void 0
							),
							a([l], t)
						);
					})(cc.Component);
				(n.default = u), cc._RF.pop();
			},
			{ './LyConfig': 'LyConfig', './LyControl': 'LyControl' }
		],
		leYunGame: [
			function (e, t) {
				(function (e) {
					'use strict';
					function n(e) {
						if (void 0 === e)
							throw new ReferenceError(
								"this hasn't been initialised - super() hasn't been called"
							);
						return e;
					}
					function o(e, t) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n];
							(o.enumerable = o.enumerable || !1),
								(o.configurable = !0),
								'value' in o && (o.writable = !0),
								Object.defineProperty(e, o.key, o);
						}
					}
					function i(e, t, n) {
						return (
							t && o(e.prototype, t),
							n && o(e, n),
							Object.defineProperty(e, 'prototype', {
								writable: !1
							}),
							e
						);
					}
					function a(e, t) {
						(e.prototype = Object.create(t.prototype)),
							(e.prototype.constructor = e),
							r(e, t);
					}
					function r(e, t) {
						return (r = Object.setPrototypeOf
							? Object.setPrototypeOf.bind()
							: function (e, t) {
									return (e.__proto__ = t), e;
							  })(e, t);
					}
					function s(e, t) {
						var n =
							('undefined' != typeof Symbol &&
								e[Symbol.iterator]) ||
							e['@@iterator'];
						if (n) return (n = n.call(e)).next.bind(n);
						if (
							Array.isArray(e) ||
							(n = c(e)) ||
							(t && e && 'number' == typeof e.length)
						) {
							n && (e = n);
							var o = 0;
							return function () {
								return o >= e.length
									? { done: !0 }
									: { done: !1, value: e[o++] };
							};
						}
						throw new TypeError(
							'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						);
					}
					function c(e, t) {
						if (e) {
							if ('string' == typeof e) return l(e, t);
							var n = Object.prototype.toString
								.call(e)
								.slice(8, -1);
							return (
								'Object' === n &&
									e.constructor &&
									(n = e.constructor.name),
								'Map' === n || 'Set' === n
									? Array.from(e)
									: 'Arguments' === n ||
									  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
											n
									  )
									? l(e, t)
									: void 0
							);
						}
					}
					function l(e, t) {
						(null == t || t > e.length) && (t = e.length);
						for (var n = 0, o = new Array(t); n < t; n++)
							o[n] = e[n];
						return o;
					}
					cc._RF.push(t, 'aa327aazdxD5ZhrGxHC/RJt', 'leYunGame');
					var d = function () {};
					d = console.log;
					var u,
						f,
						h = function () {
							return (
								cc.sys.os === cc.sys.OS_ANDROID ||
								(d('\u5e73\u53f0\u4e0d\u662fAndroid'), !1)
							);
						},
						p = 'com.leyun.cocosplayer.bridge.BridgeContainer',
						g =
							'com.leyun.cocosplayer.bridge.FunctionBridgeContainer';
					((f = u || (u = {})).switchOnAd = function () {}),
						(f.switchOffAd = function () {}),
						(f.getAdPositionParam = function () {
							return null;
						}),
						(f.preloadAd = function () {}),
						(f.closeAllBannerAd = function () {
							f.ads.AdManager.getInstance().closeAllBanner();
						}),
						(function (e) {
							var t = function () {};
							(t.RankMode_week = 'week'),
								(t.RankMode_all = 'all'),
								(t.RankMode_friendWeek = 'friendWeek'),
								(t.RankMode_friendAll = 'friendAll'),
								(t.RankMode_groupWeek = 'groupWeek'),
								(t.RankMode_groupAll = 'groupAll'),
								(t.User_Info_Name = 'user_name'),
								(t.User_Info_Phone = 'user_phone'),
								(t.User_Info_Image = 'user_image'),
								(t.User_Info_Sex = 'user_sex'),
								(e.Constants = t);
						})(u || (u = {})),
						(function (e) {
							(e.init = function (t) {
								e.AppConfigManager.getInstance().setAppConfig(
									t
								),
									e.core.PlatformManager.getInstance(),
									e.core.promote &&
										e.core.promote.PromoteManager.getInstance(),
									e.ads && e.ads.AdManager.getInstance();
							}),
								(e.getPlatformType = function () {
									return e.core.PlatformManager.getInstance().getPlatformType();
								}),
								(e.getAppConfig = function () {
									return e.AppConfigManager.getInstance().getAppConfig();
								}),
								(e.showToast = function (t) {
									return e.core.PlatformManager.getInstance().showToast(
										t
									);
								}),
								(e.isExitGame = function () {
									return !1;
								}),
								(e.openExitGame = function (e) {
									e && e(!1);
								}),
								(e.isBadWord = function () {
									return !1;
								}),
								(e.isComment = function () {
									return !1;
								}),
								(e.openComment = function () {}),
								(e.onPauseMusic = function (t) {
									e.core.PlatformManager.getInstance().onPauseMusic(
										t
									);
								}),
								(e.onResumeMusic = function (t) {
									e.core.PlatformManager.getInstance().onResumeMusic(
										t
									);
								}),
								(e.login = function (t) {
									e.core.PlatformManager.getInstance().login(
										t
									);
								}),
								(e.loginGuest = function (t) {
									e.core.PlatformManager.getInstance().loginGuest(
										t
									);
								}),
								(e.logout = function () {
									e.core.PlatformManager.getInstance().logout();
								}),
								(e.getLoginType = function () {
									return e.core.PlatformManager.getInstance().getLoginType();
								}),
								(e.checkThirdAuthUserInfo = function (t) {
									e.core.PlatformManager.getInstance().checkThirdAuthUserInfo(
										t,
										!0
									);
								}),
								(e.getSelfUser = function () {
									return e.core.PlatformManager.getInstance().getUser();
								}),
								(e.getThirdUserInfo = function (t) {
									e.core.PlatformManager.getInstance().getThirdUserInfo(
										t
									);
								}),
								(e.getThirdUserInfoOriginal = function (t) {
									e.core.PlatformManager.getInstance().getThirdUserInfoOriginal(
										t
									);
								}),
								(e.parseThirdUserInfoOriginal = function (t) {
									return e.core.PlatformManager.getInstance().parseThirdUserInfoOriginal(
										t
									);
								}),
								(e.getRank = function (t, n) {
									e.RankManager.getInstance().getRank(t, n);
								}),
								(e.updateRank = function (t, n, o) {
									void 0 === o && (o = 0),
										e.RankManager.getInstance().updateRank(
											t,
											n,
											o
										);
								}),
								(e.isPromote = function () {
									return e.core.promote.PromoteManager.getInstance().isPromote();
								}),
								(e.getPromoteItem = function (t, n) {
									return e.core.promote.PromoteManager.getInstance().getPromoteItem(
										t,
										n
									);
								}),
								(e.doGetAntiAddictionInfo = function (t) {
									return e.core.PlatformManager.getInstance().doGetAntiAddictionInfo(
										t
									);
								}),
								(e.hasVibrate = function () {
									return e.core.PlatformManager.getInstance().hasVibrate();
								}),
								(e.vibrate = function (t, n) {
									return e.core.PlatformManager.getInstance().vibrate(
										t,
										n
									);
								}),
								(e.cancelVibrate = function () {
									return e.core.PlatformManager.getInstance().cancelVibrate();
								});
						})(u || (u = {})),
						(function (e) {
							(e.isPay = function () {
								return e.payApi.PayManager.getInstance().isPay();
							}),
								(e.pay = function (t, n) {
									e.payApi.PayManager.getInstance().pay(t, n);
								});
						})(u || (u = {})),
						(function (e) {
							var t = function () {};
							(t.UnKnown = 0),
								(t.Web = 1),
								(t.H5 = 2),
								(t.Native_Android = 3),
								(t.Native_IOS = 4),
								(t.GoogleInstantApp = 10),
								(t.Facebook = 11),
								(t.WeChatGame = 12),
								(t.QQPlay = 13),
								(t.BaiduGame = 14),
								(t.TouTiaoGame = 15),
								(t.LyH5Game = 99),
								(t.OppoQuickGame = 100),
								(t.VivoQuickGame = 101),
								(t.HuaweiQuickGame = 102),
								(t.MiQuickGame = 103),
								(t.QQminiGame = 104),
								(t.QTTGame = 105),
								(t.FtnnMiniGame = 106),
								(t.UCGame = 107),
								(e.PlatformDefine = t);
						})(u || (u = {})),
						(function (e) {
							(e.ShareParam = (function () {
								return function () {};
							})()),
								(e.isShare = function () {
									return e.core.PlatformManager.getInstance().isShare();
								}),
								(e.share = function (t, n, o) {
									e.core.PlatformManager.getInstance().share(
										t.title,
										t.imageUrl,
										n,
										o
									);
								}),
								(e.shareGroupRank = function (t, n, o) {
									e.core.PlatformManager.getInstance().shareGroupRank(
										t.title,
										t.imageUrl,
										n,
										o
									);
								}),
								(e.onRequestShareParam = function (t) {
									e.core.PlatformManager.getInstance().setOnRequestShareParam(
										t
									);
								});
						})(u || (u = {})),
						(function (e) {
							(function (e) {
								var t;
								function n(e) {
									switch (e) {
										case 'any':
											return t.any;
										case 'splash':
											return t.splash;
										case 'banner':
											return t.banner;
										case 'interstitial':
											return t.interstitial;
										case 'video':
											return t.video;
										case 'interaction':
											return t.interaction;
									}
									return null;
								}
								(function (e) {
									(e[(e.Inited = 0)] = 'Inited'),
										(e[(e.Loading = 1)] = 'Loading'),
										(e[(e.LoadSuccess = 2)] =
											'LoadSuccess'),
										(e[(e.LoadFail = 3)] = 'LoadFail'),
										(e[(e.Showing = 4)] = 'Showing'),
										(e[(e.ShowSuccess = 5)] =
											'ShowSuccess'),
										(e[(e.ShowFail = 6)] = 'ShowFail'),
										(e[(e.Closing = 7)] = 'Closing'),
										(e[(e.Closed = 8)] = 'Closed');
								})(e.AdStatus || (e.AdStatus = {})),
									(function (e) {
										(e.any = 'any'),
											(e.splash = 'splash'),
											(e.banner = 'banner'),
											(e.interstitial = 'interstitial'),
											(e.video = 'video'),
											(e.interaction = 'interaction');
									})((t = e.AdType || (e.AdType = {})));
								var o = function () {
									(this.refreshInterval = 30),
										(this.loadFailCount = 0),
										(this.loadFailLastTime = 0);
								};
								e.AdSourcePlacement = o;
								var i = function () {
									this.adSourcePlacementList = new Array();
								};
								e.AdSource = i;
								var a = function () {
									(this.type = t.any),
										(this.refreshInterval = 30),
										(this.closeReopenInterval = 30),
										(this.adSourcePlacementList =
											new Map());
								};
								e.AdPosition = a;
								var r = (function () {
									function e() {
										(this.adSourceList = new Array()),
											(this.adSourcePlacementList =
												new Map()),
											(this.adPositionList = new Array());
									}
									e.fromJson = function (t) {
										if (t && t.adSources && t.adPositions)
											try {
												var n = new e();
												return n.parseAdConfig(t), n;
											} catch (o) {
												console.error(o);
											}
										return null;
									};
									var t = e.prototype;
									return (
										(t.parseAdConfig = function (e) {
											for (
												var t, r = s(e.adSources);
												!(t = r()).done;

											) {
												var c = t.value,
													l = new i();
												if (
													((l.name = c.name),
													(l.appId = c.appId),
													(l.appKey = c.appKey),
													c.placements)
												)
													for (
														var d,
															u = s(c.placements);
														!(d = u()).done;

													) {
														var f = d.value,
															h = new o();
														(h.adSource = l),
															(h.identifier =
																f.identifier),
															(h.type = n(
																f.type
															)),
															(h.placementId =
																f.placementId),
															l.adSourcePlacementList.push(
																h
															),
															this.adSourcePlacementList.set(
																l.name +
																	'.' +
																	h.identifier,
																h
															);
													}
												this.adSourceList.push(l);
											}
											for (
												var p, g = s(e.adPositions);
												!(p = g()).done;

											) {
												var m = p.value,
													y = new a();
												y.name = m.name;
												var A = n(m.type);
												A && (y.type = A),
													(y.percent = m.percent),
													m.refreshInterval &&
														(y.refreshInterval =
															m.refreshInterval),
													m.closeReopenInterval &&
														(y.refreshInterval =
															m.closeReopenInterval);
												for (
													var v,
														_ = s(
															m.adSourcePlacements
														);
													!(v = _()).done;

												) {
													var C = v.value,
														I = C.identifier,
														S =
															this.adSourcePlacementList.get(
																I
															);
													y.adSourcePlacementList.set(
														S,
														C.percent
													);
												}
												this.adPositionList.push(y);
											}
										}),
										(t.getAdPosition = function (e) {
											for (
												var t,
													n = s(this.adPositionList);
												!(t = n()).done;

											) {
												var o = t.value;
												if (o.name == e) return o;
											}
											return null;
										}),
										e
									);
								})();
								e.AdConfig = r;
							})(e.ads || (e.ads = {}));
						})(u || (u = {})),
						(function (e) {
							(function (e) {
								var t;
								(function (e) {
									(e[(e.CODE_UNKNOWN = 100)] =
										'CODE_UNKNOWN'),
										(e[(e.CODE_INIT_ERROR = 1001)] =
											'CODE_INIT_ERROR'),
										(e[(e.CODE_INTERNAL_ERROR = 1002)] =
											'CODE_INTERNAL_ERROR'),
										(e[(e.CODE_AD_PARAM_ERROR = 1003)] =
											'CODE_AD_PARAM_ERROR'),
										(e[(e.CODE_NO_NETWORK_CONNECT = 2e3)] =
											'CODE_NO_NETWORK_CONNECT'),
										(e[(e.CODE_NETWORK_ERROR = 2001)] =
											'CODE_NETWORK_ERROR'),
										(e[(e.CODE_NO_AD = 3e3)] =
											'CODE_NO_AD'),
										(e[(e.CODE_AD_LOAD_FAIL = 3001)] =
											'CODE_AD_LOAD_FAIL'),
										(e[(e.CODE_AD_NOT_READY = 3002)] =
											'CODE_AD_NOT_READY'),
										(e[(e.CODE_AD_SHOW_FAIL = 3003)] =
											'CODE_AD_SHOW_FAIL'),
										(e[(e.CODE_AD_CLOSED = 3004)] =
											'CODE_AD_CLOSED');
								})((t = e.AdErrorCode || (e.AdErrorCode = {}))),
									(e.AdError = (function () {
										function e(e) {
											switch (((this.code = e), e)) {
												case t.CODE_UNKNOWN:
													this.msg =
														'\u672a\u77e5\u9519\u8bef';
													break;
												case t.CODE_INIT_ERROR:
													this.msg =
														'\u521d\u59cb\u5316\u9519\u8bef';
													break;
												case t.CODE_INTERNAL_ERROR:
													this.msg =
														'\u5185\u90e8\u9519\u8bef';
													break;
												case t.CODE_AD_PARAM_ERROR:
													this.msg =
														'\u5e7f\u544a\u53c2\u6570\u9519\u8bef';
													break;
												case t.CODE_NO_NETWORK_CONNECT:
													this.msg =
														'\u65e0\u7f51\u7edc\u8fde\u63a5';
													break;
												case t.CODE_NETWORK_ERROR:
													this.msg =
														'\u7f51\u7edc\u9519\u8bef';
													break;
												case t.CODE_NO_AD:
													this.msg =
														'\u65e0\u5e7f\u544a\u586b\u5145';
													break;
												case t.CODE_AD_LOAD_FAIL:
													this.msg =
														'\u52a0\u8f7d\u5e7f\u544a\u5931\u8d25';
													break;
												case t.CODE_AD_NOT_READY:
													this.msg =
														'\u6ca1\u6709\u52a0\u8f7d\u6210\u529f\u7684\u5e7f\u544a';
													break;
												case t.CODE_AD_SHOW_FAIL:
													this.msg =
														'\u5e7f\u544a\u5c55\u793a\u5931\u8d25';
													break;
												case t.CODE_AD_CLOSED:
													this.msg =
														'\u5e7f\u544a\u5df2\u5173\u95ed';
											}
										}
										var n = e.prototype;
										return (
											(n.getCode = function () {
												return this.code;
											}),
											(n.setCode = function (e) {
												this.code = e;
											}),
											(n.getMsg = function () {
												return this.msg;
											}),
											(n.setMsg = function (e) {
												this.msg = e;
											}),
											(n.getSdkCode = function () {
												return this.sdkCode;
											}),
											(n.setSdkCode = function (e) {
												this.sdkCode = e;
											}),
											(n.getSdkMsg = function () {
												return this.sdkMsg;
											}),
											(n.setSdkMsg = function (e) {
												this.sdkMsg = e;
											}),
											(n.toString = function () {
												var e =
													'code: ' +
													this.code +
													', msg: ' +
													this.msg;
												return (
													this.sdkCode &&
														this.sdkCode.length >
															0 &&
														(e +=
															', sdkCode: ' +
															this.sdkCode),
													this.sdkMsg &&
														this.sdkMsg.length >
															0 &&
														(e +=
															', sdkMsg: ' +
															this.sdkMsg),
													e
												);
											}),
											e
										);
									})());
							})(e.ads || (e.ads = {}));
						})(u || (u = {})),
						(function (e) {
							var t;
							(t = e.ads || (e.ads = {})).AdItem = (function () {
								function n(e) {
									(this.status = t.AdStatus.Inited),
										(this.loadingTime = 0),
										(this.loadFinishTime = 0),
										(this.isReward = !1),
										(this.openAdResultCallback = null),
										(this.onAdCloseCallback = null),
										(this.adItemParam = e);
								}
								var o = n.prototype;
								return (
									(o.loadAd = function () {
										console.log(
											'ad loadAd: ' +
												this.adItemParam.adSource.name +
												' ' +
												this.adItemParam
													.adSourcePlacement.type
										),
											this.onLoading();
									}),
									(o.showAd = function () {
										console.log(
											'ad showAd: ' +
												this.adItemParam.adSource.name +
												' ' +
												this.adItemParam
													.adSourcePlacement.type
										),
											this.onShowing();
									}),
									(o.closeAd = function () {
										console.log(
											'ad closeAd: ' +
												this.adItemParam.adSource.name +
												' ' +
												this.adItemParam
													.adSourcePlacement.type
										),
											this.isShowSuccess()
												? this.onClosing()
												: this.destroyAd();
									}),
									(o.destroyAd = function () {
										var e = this;
										this.status != t.AdStatus.Closing &&
											setTimeout(function () {
												e.onClosed();
											}, 3e3),
											this.status != t.AdStatus.Closed &&
												((this.status =
													t.AdStatus.Closing),
												this.close(),
												setTimeout(function () {
													e.onClosed();
												}, 3e3));
									}),
									(o.getAdItemParam = function () {
										return this.adItemParam;
									}),
									(o.getAppId = function () {
										return this.adItemParam.getAppId();
									}),
									(o.getAppKey = function () {
										return this.adItemParam.getAppKey();
									}),
									(o.getAdPlacementId = function () {
										return this.adItemParam.getAdPlacementId();
									}),
									(o.onLoading = function () {
										(this.status != t.AdStatus.Inited &&
											this.status !=
												t.AdStatus.LoadFail &&
											this.status !=
												t.AdStatus.ShowFail &&
											this.status != t.AdStatus.Closed) ||
											((this.status = t.AdStatus.Loading),
											(this.loadingTime =
												new Date().getTime()),
											t.AdManager.getInstance().onLoading(
												this
											),
											this.load());
									}),
									(o.onLoadSuccess = function () {
										(this.status != t.AdStatus.Loading &&
											this.status !=
												t.AdStatus.LoadFail) ||
											(console.log(
												'ad onLoadSuccess: ' +
													this.adItemParam.adSource
														.name +
													' ' +
													this.adItemParam
														.adSourcePlacement.type
											),
											(this.status =
												t.AdStatus.LoadSuccess),
											(this.loadFinishTime =
												new Date().getTime()),
											t.AdManager.getInstance().onLoadSuccess(
												this
											));
									}),
									(o.onLoadFail = function (e) {
										this.status == t.AdStatus.Loading ||
										this.status == t.AdStatus.LoadSuccess
											? (console.log(
													'ad onLoadFail: ' +
														this.adItemParam
															.adSource.name +
														' ' +
														this.adItemParam
															.adSourcePlacement
															.type +
														'; ' +
														e.toString()
											  ),
											  (this.status =
													t.AdStatus.LoadFail),
											  (this.loadFinishTime =
													new Date().getTime()),
											  t.AdManager.getInstance().onLoadFail(
													this,
													e
											  ))
											: this.status ==
													t.AdStatus.Showing &&
											  this.onShowFailed(e);
									}),
									(o.onShowing = function () {
										this.status == t.AdStatus.LoadSuccess &&
											((this.status = t.AdStatus.Showing),
											t.AdManager.getInstance().onShowing(
												this
											),
											this.open());
									}),
									(o.onShowSuccess = function () {
										this.status == t.AdStatus.Showing &&
											(console.log(
												'ad onShowSuccess: ' +
													this.adItemParam.adSource
														.name +
													' ' +
													this.adItemParam
														.adSourcePlacement.type
											),
											(this.status =
												t.AdStatus.ShowSuccess),
											t.AdManager.getInstance().onShowSuccess(
												this
											),
											this.adItemParam.getAdType() ==
												t.AdType.video &&
												e.core.PlatformManager.getInstance().pauseMusic(),
											this.openAdResultCallback &&
												(this.openAdResultCallback(!0),
												(this.openAdResultCallback =
													null)));
									}),
									(o.onShowFailed = function (e) {
										this.status == t.AdStatus.Showing &&
											(console.log(
												'ad onShowFailed: ' +
													this.adItemParam.adSource
														.name +
													' ' +
													this.adItemParam
														.adSourcePlacement
														.type +
													'; ' +
													e.toString()
											),
											(this.status = t.AdStatus.ShowFail),
											t.AdManager.getInstance().onShowFailed(
												this,
												e
											),
											this.openAdResultCallback &&
												(this.openAdResultCallback(!1),
												(this.openAdResultCallback =
													null)));
									}),
									(o.onReward = function () {
										this.isReward ||
											(console.log(
												'ad onReward: ' +
													this.adItemParam.adSource
														.name +
													' ' +
													this.adItemParam
														.adSourcePlacement.type
											),
											(this.isReward = !0),
											t.AdManager.getInstance().onReward(
												this
											));
									}),
									(o.onClosing = function () {
										this.status != t.AdStatus.Closing &&
											this.status != t.AdStatus.Closed &&
											((this.status = t.AdStatus.Closing),
											t.AdManager.getInstance().onClosing(
												this
											),
											this.close());
									}),
									(o.onClosed = function () {
										this.status != t.AdStatus.Closed &&
											(console.log(
												'ad onClosed: ' +
													this.adItemParam.adSource
														.name +
													' ' +
													this.adItemParam
														.adSourcePlacement.type
											),
											(this.status = t.AdStatus.Closed),
											t.AdManager.getInstance().onClosed(
												this
											),
											this.adItemParam.getAdType() ==
												t.AdType.video &&
												e.core.PlatformManager.getInstance().resumeMusic(),
											this.onAdCloseCallback &&
												(this.onAdCloseCallback(
													this.isReward
												),
												(this.onAdCloseCallback =
													null)));
									}),
									(o.onClicked = function () {
										t.AdManager.getInstance().onClicked(
											this
										);
									}),
									(o.isLoading = function () {
										return (
											this.status == t.AdStatus.Loading
										);
									}),
									(o.isLoadSuccess = function () {
										return (
											this.status ==
											t.AdStatus.LoadSuccess
										);
									}),
									(o.isLoadFail = function () {
										return (
											this.status == t.AdStatus.LoadFail
										);
									}),
									(o.isShow = function () {
										return (
											this.status == t.AdStatus.Showing ||
											this.status ==
												t.AdStatus.ShowFail ||
											this.status ==
												t.AdStatus.ShowSuccess
										);
									}),
									(o.isShowSuccess = function () {
										return (
											this.status ==
											t.AdStatus.ShowSuccess
										);
									}),
									(o.isShowFail = function () {
										return (
											this.status == t.AdStatus.ShowFail
										);
									}),
									(o.isClosed = function () {
										return (
											this.status == t.AdStatus.Closing ||
											this.status == t.AdStatus.Closed
										);
									}),
									n
								);
							})();
						})(u || (u = {})),
						(function (e) {
							var t;
							((t = e.ads || (e.ads = {})).AdSourceParam =
								(function () {
									function e(e) {
										this.adSource = e;
									}
									var t = e.prototype;
									return (
										(t.getAppId = function () {
											return this.adSource.appId;
										}),
										(t.getAppKey = function () {
											return this.adSource.appKey;
										}),
										e
									);
								})()),
								(t.AdItemParam = (function () {
									function e(e, t) {
										(this.adSource = e),
											(this.adSourcePlacement = t);
									}
									var t = e.prototype;
									return (
										(t.getAdType = function () {
											return this.adSourcePlacement.type;
										}),
										(t.getAppId = function () {
											return this.adSource.appId;
										}),
										(t.getAppKey = function () {
											return this.adSource.appKey;
										}),
										(t.getAdPlacementId = function () {
											return this.adSourcePlacement
												.placementId;
										}),
										e
									);
								})());
						})(u || (u = {})),
						(function (e) {
							(function (e) {
								var t = (function () {
									function t(e) {
										(this.adSourceList = new Array()),
											(this.adPositionList = new Array()),
											(this.m_loadAdItems = new Map()),
											(this.m_usingAdItems = new Array()),
											(this.m_allAdPositionLoaders =
												new Array()),
											(this.adSourceList =
												e.adSourceList),
											(this.adPositionList =
												e.adPositionList);
									}
									t.create = function (e) {
										return new t(e);
									};
									var n = t.prototype;
									return (
										(n.onUpdate = function () {
											for (
												var e,
													t = new Array(),
													n = s(
														this
															.m_allAdPositionLoaders
													);
												!(e = n()).done;

											) {
												var o = e.value,
													i = o.adItem;
												!o.checkTimeout &&
													i &&
													this.checkAdItemLoadTimeout(
														i
													) &&
													t.push(o);
											}
											for (
												var a = 0, r = t;
												a < r.length;
												a++
											) {
												var c = r[a];
												c.checkTimeout ||
													((c.checkTimeout = !0),
													this.preloadAdPosition2(
														c.adPosition
													));
											}
										}),
										(n.initTask = function () {
											for (
												var t,
													n = this,
													o =
														this.adSourceList
															.length,
													i = 0,
													a = s(this.adSourceList);
												!(t = a()).done;

											) {
												var r = t.value,
													c = new e.AdSourceParam(r),
													l =
														e.AdManager.getInstance().getAdAgent(
															r.name
														);
												l &&
													l.loadAdSource(
														c,
														function () {
															++i >= o &&
																n.preloadAllAdPosition();
														}
													);
											}
										}),
										(n.hasAdPosition = function (e) {
											return (
												this.adPositionList.findIndex(
													function (t) {
														return t == e;
													}
												) >= 0
											);
										}),
										(n.getAdPosition = function (e) {
											return this.adPositionList.find(
												function (t) {
													return t.name == e;
												}
											);
										}),
										(n.preloadAllAdPosition = function () {
											for (
												var e,
													t = s(this.adPositionList);
												!(e = t()).done;

											) {
												var n = e.value;
												this.preloadAdPosition2(n);
											}
										}),
										(n.preloadAdPosition = function (e) {
											var t = this.getAdPosition(e);
											if (t)
												return this.preloadAdPosition2(
													t
												);
										}),
										(n.preloadAdPosition2 = function (t) {
											if (this.hasAdPosition(t)) {
												for (
													var n,
														o = s(
															this
																.m_allAdPositionLoaders
														);
													!(n = o()).done;

												) {
													var i = n.value;
													if (
														i.adPosition == t &&
														i.adItem &&
														(i.adItem.isLoadSuccess() ||
															(i.adItem.isLoading() &&
																!this.checkAdItemLoadTimeout(
																	i.adItem
																)))
													)
														return;
												}
												var a = new e.AdPositionLoader(
													t
												);
												this.m_allAdPositionLoaders.push(
													a
												),
													this.loadAdPositionLoader(
														a
													);
											}
										}),
										(n.getAdItems = function (e) {
											var t = this.m_loadAdItems.get(e);
											return (
												t ||
													((t = new Array()),
													this.m_loadAdItems.set(
														e,
														t
													)),
												t
											);
										}),
										(n.checkAdItemLoadTimeout = function (
											e
										) {
											return !!(
												e.isLoading() &&
												new Date().getTime() -
													e.loadingTime >
													1e4
											);
										}),
										(n.checkAdItemRefAndLoad = function (
											e
										) {
											if (e.adPosition) {
												for (
													var t,
														n = 0,
														o = s(
															this
																.m_allAdPositionLoaders
														);
													!(t = o()).done;

												) {
													var i = t.value;
													i.adItem &&
														i.adItem == e &&
														i.adPosition !=
															e.adPosition &&
														n++;
												}
												if (n > 0) {
													var a,
														r = this.getAdItems(
															e.adItemParam
																.adSourcePlacement
														);
													if (r.length > 0)
														for (
															var c, l = s(r);
															!(c = l()).done;

														) {
															var d = c.value;
															(this.checkAdItemLoadTimeout(
																d
															) &&
																!d.isLoadSuccess()) ||
																(a = d);
														}
													if (
														(a ||
															((a =
																this.createAdItem(
																	e
																		.adItemParam
																		.adSourcePlacement
																)) &&
																(r.push(a),
																a.loadAd())),
														a)
													)
														for (
															var u,
																f = s(
																	this
																		.m_allAdPositionLoaders
																);
															!(u = f()).done;

														) {
															var h = u.value;
															h.adItem &&
																h.adItem == e &&
																h.adPosition !=
																	e.adPosition &&
																(h.adItem = a);
														}
												}
											}
										}),
										(n.createAdItem = function (t) {
											var n = new e.AdItemParam(
													t.adSource,
													t
												),
												o =
													e.AdManager.getInstance().getAdAgent(
														t.adSource.name
													);
											if (o)
												switch (t.type) {
													case e.AdType.banner:
														return o.createBannerAd(
															n
														);
													case e.AdType.interstitial:
														return o.createInterstitialAd(
															n
														);
													case e.AdType.video:
														return o.createVideoAd(
															n
														);
													case e.AdType.interaction:
														return o.createInteractionAd(
															n
														);
												}
											return null;
										}),
										(n.loadAdPositionLoader = function (e) {
											var t = this;
											if (!e.allLoadFail) {
												for (
													var n,
														o = e.adPosition,
														i = new Map(),
														a = function () {
															var o = n.value,
																a = o[0],
																r = o[1];
															if (
																!(
																	e.failAdSourcePlacements.findIndex(
																		function (
																			e
																		) {
																			return (
																				e ==
																				a
																			);
																		}
																	) >= 0
																)
															) {
																if (
																	a.loadFailCount >
																	0
																) {
																	var s =
																		new Date().getTime() -
																		a.loadFailLastTime;
																	if (
																		a.loadFailCount <=
																		1
																	) {
																		if (
																			s <
																			1e4
																		)
																			return 'continue';
																	} else if (
																		a.loadFailCount <=
																		3
																	) {
																		if (
																			s <
																			3e4
																		)
																			return 'continue';
																	} else if (
																		a.loadFailCount <=
																		5
																	) {
																		if (
																			s <
																			12e4
																		)
																			return 'continue';
																	} else {
																		if (
																			!(
																				a.loadFailCount <=
																				10
																			)
																		)
																			return 'continue';
																		if (
																			s <
																			6e5
																		)
																			return 'continue';
																	}
																}
																if (
																	t.m_allAdPositionLoaders.findIndex(
																		function (
																			e
																		) {
																			var n =
																				e.adItem;
																			return !(
																				!n ||
																				n
																					.adItemParam
																					.adSourcePlacement !=
																					a ||
																				!t.checkAdItemLoadTimeout(
																					n
																				)
																			);
																		}
																	) >= 0
																)
																	return 'break';
																i.set(a, r);
															}
														},
														r = s(
															o.adSourcePlacementList
														);
													!(n = r()).done;

												) {
													var c = a();
													if (
														'continue' !== c &&
														'break' === c
													)
														break;
												}
												if (i.size > 0) {
													for (
														var l, d = 0, u = s(i);
														!(l = u()).done;

													) {
														var f = l.value;
														f[0], (d += f[1]);
													}
													if (d > 0)
														for (
															var h,
																p =
																	Math.random() *
																	d,
																g = 0,
																m = s(i);
															!(h = m()).done;

														) {
															var y = h.value,
																A = y[0];
															if (
																p < (g += y[1])
															) {
																var v = void 0,
																	_ =
																		this.getAdItems(
																			A
																		);
																if (
																	_.length > 0
																)
																	for (
																		var C,
																			I =
																				s(
																					_
																				);
																		!(C =
																			I())
																			.done;

																	) {
																		var S =
																			C.value;
																		if (
																			S.isLoading() &&
																			!this.checkAdItemLoadTimeout(
																				S
																			)
																		) {
																			v =
																				S;
																			break;
																		}
																		if (
																			S.isLoadSuccess()
																		) {
																			v =
																				S;
																			break;
																		}
																	}
																v
																	? (e.adItem =
																			v)
																	: ((v =
																			this.createAdItem(
																				A
																			)),
																	  (e.adItem =
																			v),
																	  v &&
																			(_.push(
																				v
																			),
																			v.loadAd()));
																break;
															}
														}
												} else
													(e.allLoadFail = !0),
														(e.failAdSourcePlacements.length = 0),
														(e.adItem = null),
														setTimeout(function () {
															(e.allLoadFail =
																!1),
																t.loadAdPositionLoader(
																	e
																);
														}, 1e4);
											}
										}),
										(n.isAdReady = function (e) {
											var t = this.getAdPosition(e);
											return !!t && this.isAdReady2(t);
										}),
										(n.isAdReady2 = function (e, t) {
											for (
												var n,
													o = s(
														this
															.m_allAdPositionLoaders
													);
												!(n = o()).done;

											) {
												var i = n.value;
												if (i.adPosition == e) {
													var a = i.adItem;
													if (a && a.isLoadSuccess())
														return !0;
													if (t && i.checkTimeout)
														return !0;
												}
											}
											return !1;
										}),
										(n.useAd = function (e) {
											var t = this.getAdPosition(e);
											return t ? this.useAd2(t) : null;
										}),
										(n.useAd2 = function (e) {
											for (
												var t,
													n = s(
														this
															.m_allAdPositionLoaders
													);
												!(t = n()).done;

											) {
												var o = t.value;
												if (o.adPosition == e) {
													var i = o.adItem;
													if (
														i &&
														i.isLoadSuccess()
													) {
														i.adPosition = e;
														for (
															var a =
																	this.getAdItems(
																		i
																			.adItemParam
																			.adSourcePlacement
																	),
																r = 0;
															r < a.length;
															r++
														)
															a[r] == i &&
																a.splice(r, 1);
														return (
															this.m_usingAdItems.push(
																i
															),
															i
														);
													}
												}
											}
											return null;
										}),
										(n.onLoading = function () {}),
										(n.onLoadSuccess = function () {}),
										(n.onLoadFail = function (e) {
											e.adItemParam.adSourcePlacement
												.loadFailCount++,
												(e.adItemParam.adSourcePlacement.loadFailLastTime =
													new Date().getTime());
											for (
												var t = this.getAdItems(
														e.adItemParam
															.adSourcePlacement
													),
													n = 0;
												n < t.length;
												n++
											)
												if (t[n] == e) {
													t.splice(n, 1), n--;
													break;
												}
											for (
												var o,
													i = s(
														this
															.m_allAdPositionLoaders
													);
												!(o = i()).done;

											) {
												var a = o.value;
												a.adItem == e &&
													(-1 ==
														a.failAdSourcePlacements.findIndex(
															function (t) {
																return (
																	t ==
																	e
																		.adItemParam
																		.adSourcePlacement
																);
															}
														) &&
														a.failAdSourcePlacements.push(
															e.adItemParam
																.adSourcePlacement
														),
													this.loadAdPositionLoader(
														a
													));
											}
											e.destroyAd();
										}),
										(n.onShowing = function () {}),
										(n.onShowSuccess = function () {}),
										(n.onShowFailed = function (e) {
											e.adItemParam.adSourcePlacement
												.loadFailCount++,
												(e.adItemParam.adSourcePlacement.loadFailLastTime =
													new Date().getTime());
											for (
												var t = 0;
												t < this.m_usingAdItems.length;
												t++
											)
												if (
													this.m_usingAdItems[t] == e
												) {
													this.m_usingAdItems.splice(
														t,
														1
													),
														t--;
													break;
												}
											for (
												var n,
													o = s(
														this
															.m_allAdPositionLoaders
													);
												!(n = o()).done;

											) {
												var i = n.value;
												i.adItem == e &&
													(-1 ==
														i.failAdSourcePlacements.findIndex(
															function (t) {
																return (
																	t ==
																	e
																		.adItemParam
																		.adSourcePlacement
																);
															}
														) &&
														i.failAdSourcePlacements.push(
															e.adItemParam
																.adSourcePlacement
														),
													this.loadAdPositionLoader(
														i
													));
											}
											e.destroyAd();
										}),
										(n.onReward = function () {}),
										(n.onClosing = function () {}),
										(n.onClosed = function (e) {
											for (
												var t = 0;
												t < this.m_usingAdItems.length;
												t++
											)
												if (
													this.m_usingAdItems[t] == e
												) {
													this.m_usingAdItems.splice(
														t,
														1
													),
														t--;
													break;
												}
											for (
												var n = 0;
												n <
												this.m_allAdPositionLoaders
													.length;
												n++
											) {
												var o =
													this.m_allAdPositionLoaders[
														n
													];
												o.adItem == e &&
													o.adPosition ==
														e.adPosition &&
													(this.m_allAdPositionLoaders.splice(
														n,
														1
													),
													n--);
											}
											this.preloadAdPosition2(
												e.adPosition
											),
												this.checkAdItemRefAndLoad(e);
										}),
										(n.onClicked = function () {}),
										t
									);
								})();
								e.AdLoader = t;
							})(e.ads || (e.ads = {}));
						})(u || (u = {})),
						(function (e) {
							var t, n, o;
							(t = e.ads || (e.ads = {})),
								(n = function () {
									(this.lastTime = new Date().getTime()),
										(this.status = 0);
								}),
								(o = (function () {
									function o() {
										(this.adConfig = null),
											(this.adLoader = null),
											(this.openedBannerRecord =
												new Map()),
											(this.updateTimerId = null),
											(this.adAgents = new Map());
									}
									o.getInstance = function () {
										return (
											this._instance ||
												((o._instance = new o()),
												o._instance.init()),
											this._instance
										);
									};
									var i = o.prototype;
									return (
										(i.init = function () {
											var t = this,
												n =
													e.core.PlatformManager.getInstance().getPlatformAdAgent();
											n &&
												n.init(function (e) {
													e &&
														t.adAgents.set(
															n.name,
															n
														),
														t.loadAdConfig();
												});
										}),
										(i.loadAdConfig = function () {
											var n =
												e.AppConfigManager.getInstance()
													.getAppConfig()
													.getProperty('adConfig');
											(this.adConfig =
												t.AdConfig.fromJson(n)),
												this.adConfig &&
													((this.adLoader =
														t.AdLoader.create(
															this.adConfig
														)),
													this.adLoader.initTask(),
													clearInterval(
														this.updateTimerId
													),
													(this.updateTimerId =
														setInterval(
															this.onUpdate.bind(
																this
															),
															1e3
														)));
										}),
										(i.onUpdate = function () {
											this.adLoader.onUpdate();
											for (
												var e,
													t = new Date().getTime(),
													n = s(
														this.openedBannerRecord
													);
												!(e = n()).done;

											) {
												var o = e.value,
													i = o[0],
													a = o[1];
												if (a.openedAdItem)
													if (
														a.openedAdItem.isShow()
													) {
														if (
															((a.status = 1),
															a.refreshInterval >
																0 &&
																t - a.lastTime >
																	1e3 *
																		a.refreshInterval)
														) {
															a.lastTime = t;
															var r =
																this.adLoader.getAdPosition(
																	i
																);
															r &&
																(this.handleOpenAd2(
																	r,
																	null,
																	null
																) ||
																	((a.status = 0),
																	(a.openedAdItem =
																		null)));
														}
													} else
														a.openedAdItem.isClosed() &&
															((a.status = 2),
															(a.lastTime = t),
															(a.openedAdItem =
																null));
												else if (0 == a.status) {
													if (t - a.lastTime >= 3e3) {
														a.lastTime = t;
														var c =
															this.adLoader.getAdPosition(
																i
															);
														c &&
															this.adLoader.isAdReady2(
																c
															) &&
															this.handleOpenAd2(
																c,
																null,
																null
															);
														continue;
													}
												} else if (
													2 == a.status &&
													a.closeReopenInterval > 0 &&
													t - a.lastTime >
														1e3 *
															a.closeReopenInterval
												) {
													(a.status = 0),
														(a.lastTime = t);
													var l =
														this.adLoader.getAdPosition(
															i
														);
													l &&
														this.adLoader.isAdReady2(
															l,
															!0
														) &&
														this.handleOpenAd2(
															l,
															null,
															null
														);
												}
											}
										}),
										(i.getAdAgent = function (e) {
											return this.adAgents.get(e);
										}),
										(i.isAdReady = function (e) {
											return (
												!!this.adLoader &&
												this.adLoader.isAdReady(e)
											);
										}),
										(i.preloadAd = function (e) {
											this.adLoader.preloadAdPosition(e);
										}),
										(i.openAd = function (e, o, i) {
											if (this.adLoader) {
												var a =
													this.adLoader.getAdPosition(
														e
													);
												if (a) {
													var r = !0;
													if (
														(a.percent &&
															a.percent < 100 &&
															(r =
																100 *
																	Math.random() <
																a.percent),
														r &&
															a.type ==
																t.AdType.banner)
													) {
														var s =
															this.openedBannerRecord.get(
																a.name
															);
														s ||
															((s = new n()),
															this.openedBannerRecord.set(
																a.name,
																s
															)),
															(s.status = 0),
															(s.refreshInterval =
																a.refreshInterval),
															(s.closeReopenInterval =
																a.closeReopenInterval);
													}
													return void this.handleOpenAd2(
														a,
														o,
														i
													);
												}
											}
											o && o(!1);
										}),
										(i.handleOpenAd = function (e, t, n) {
											if (this.adLoader) {
												var o =
													this.adLoader.getAdPosition(
														e
													);
												if (o)
													return this.handleOpenAd2(
														o,
														t,
														n
													);
											}
											return null;
										}),
										(i.handleOpenAd2 = function (e, n, o) {
											e.type == t.AdType.banner &&
												this.handleCloseAd(e.name);
											var i = this.adLoader.useAd2(e);
											if (i) {
												if (e.type == t.AdType.banner) {
													var a =
														this.openedBannerRecord.get(
															e.name
														);
													a &&
														((a.refreshInterval =
															e.refreshInterval),
														(a.closeReopenInterval =
															e.closeReopenInterval),
														(a.status = 1),
														(a.lastTime =
															new Date().getTime()),
														(a.openedAdItem = i));
												}
												(i.adPosition = e),
													(i.openAdResultCallback =
														n),
													(i.onAdCloseCallback = o),
													i.showAd();
											} else n && n(!1);
											return i;
										}),
										(i.closeAd = function (e) {
											var t =
												this.openedBannerRecord.get(e);
											t &&
												(this.openedBannerRecord.delete(
													e
												),
												t.openedAdItem &&
													t.openedAdItem.closeAd()),
												this.handleCloseAd(e);
										}),
										(i.handleCloseAd = function (e) {
											var t =
												this.openedBannerRecord.get(e);
											if (
												(t &&
													1 == t.status &&
													t.openedAdItem &&
													t.openedAdItem.isShow() &&
													t.openedAdItem.closeAd(),
												this.adLoader)
											)
												for (
													var n,
														o = s(
															this.adLoader
																.m_usingAdItems
														);
													!(n = o()).done;

												) {
													var i = n.value;
													i &&
														i.adPosition.name ==
															e &&
														i.isShow() &&
														i.closeAd();
												}
										}),
										(i.closeAllBanner = function () {
											if (
												this.openedBannerRecord.size > 0
											) {
												for (
													var e,
														n = s(
															this
																.openedBannerRecord
														);
													!(e = n()).done;

												) {
													var o = e.value,
														i = (o[0], o[1]);
													i.openedAdItem &&
														i.openedAdItem.closeAd();
												}
												this.openedBannerRecord.clear();
											}
											for (
												var a,
													r = s(
														this.adLoader
															.adPositionList
													);
												!(a = r()).done;

											) {
												var c = a.value;
												c &&
													c.type == t.AdType.banner &&
													this.closeAd(c.name);
											}
										}),
										(i.openExpressAd = function () {}),
										(i.onLoading = function (e) {
											this.adLoader.onLoading(e);
										}),
										(i.onLoadSuccess = function (e) {
											if (
												(this.adLoader.onLoadSuccess(e),
												e.adItemParam.adSourcePlacement
													.type == t.AdType.banner)
											)
												for (
													var n,
														o = s(
															this
																.openedBannerRecord
														);
													!(n = o()).done;

												) {
													var i = n.value,
														a = i[0],
														r = i[1];
													0 != r.status ||
														r.openedAdItem ||
														(this.isAdReady(a) &&
															this.handleOpenAd(
																a,
																null,
																null
															));
												}
										}),
										(i.onLoadFail = function (e, t) {
											this.adLoader.onLoadFail(e, t);
										}),
										(i.onShowing = function (e) {
											this.adLoader.onShowing(e);
										}),
										(i.onShowSuccess = function (e) {
											this.adLoader.onShowSuccess(e);
										}),
										(i.onShowFailed = function (e, n) {
											if (
												e.adItemParam.adSourcePlacement
													.type == t.AdType.banner
											)
												for (
													var o,
														i = s(
															this
																.openedBannerRecord
														);
													!(o = i()).done;

												) {
													var a = o.value,
														r = (a[0], a[1]);
													1 == r.status &&
														e == r.openedAdItem &&
														((r.status = 0),
														(r.openedAdItem = null),
														(r.lastTime =
															new Date().getTime() -
															2e3));
												}
											this.adLoader.onShowFailed(e, n);
										}),
										(i.onReward = function (e) {
											this.adLoader.onReward(e);
										}),
										(i.onClosing = function (e) {
											this.adLoader.onClosing(e);
										}),
										(i.onClosed = function (e) {
											this.adLoader.onClosed(e);
										}),
										(i.onClicked = function (e) {
											this.adLoader.onReward(e);
										}),
										o
									);
								})()),
								(t.AdManager = o);
						})(u || (u = {})),
						(function (e) {
							(e.ads || (e.ads = {})).AdPositionLoader =
								(function () {
									return function (e) {
										(this.failAdSourcePlacements =
											new Array()),
											(this.allLoadFail = !1),
											(this.checkTimeout = !1),
											(this.adPosition = e);
									};
								})();
						})(u || (u = {})),
						(function (e) {
							var t;
							((t = e.ads || (e.ads = {})).BaseBannerAdItem =
								(function (e) {
									function t() {
										return e.apply(this, arguments) || this;
									}
									return a(t, e), t;
								})(t.AdItem)),
								(t.BaseInterstitialAdItem = (function (e) {
									function t() {
										return e.apply(this, arguments) || this;
									}
									return (
										a(t, e),
										(t.prototype.close = function () {}),
										t
									);
								})(t.AdItem)),
								(t.BaseVideoAdItem = (function (e) {
									function t() {
										return e.apply(this, arguments) || this;
									}
									return (
										a(t, e),
										(t.prototype.close = function () {}),
										t
									);
								})(t.AdItem)),
								(t.BaseInteractionAdItem = (function (e) {
									function t() {
										return e.apply(this, arguments) || this;
									}
									return (
										a(t, e),
										(t.prototype.close = function () {}),
										t
									);
								})(t.AdItem)),
								(t.BaseAdAgent = (function () {
									function e() {}
									var t = e.prototype;
									return (
										(t.init = function (e) {
											e(!0);
										}),
										(t.loadAdSource = function (e, t) {
											t(!0);
										}),
										(t.createBannerAd = function () {
											return null;
										}),
										(t.createInterstitialAd = function () {
											return null;
										}),
										(t.createVideoAd = function () {
											return null;
										}),
										(t.createInteractionAd = function () {
											return null;
										}),
										e
									);
								})());
						})(u || (u = {})),
						(function (e) {
							var t, n;
							(t = e.analytics || (e.analytics = {})),
								((n = (function () {
									function t() {
										this.analytics = null;
									}
									t.getInstance = function () {
										return (
											this.instance ||
												((this.instance = new t()),
												this.instance.init()),
											this.instance
										);
									};
									var n = t.prototype;
									return (
										(n.init = function () {
											this.analytics =
												e.core.PlatformManager.getInstance().getPlatformAnalytics();
										}),
										(n.profileSignIn = function (e) {
											this.analytics &&
												this.analytics.profileSignIn(e);
										}),
										(n.profileSignIn2 = function (e, t) {
											this.analytics &&
												this.analytics.profileSignIn2(
													e,
													t
												);
										}),
										(n.profileSignOff = function () {
											this.analytics &&
												this.analytics.profileSignOff();
										}),
										(n.setPlayerLevel = function (e) {
											this.analytics &&
												this.analytics.setPlayerLevel(
													e
												);
										}),
										(n.pay = function (e, t, n) {
											this.analytics &&
												this.analytics.pay(e, t, n);
										}),
										(n.pay2 = function (e, t, n, o, i) {
											this.analytics &&
												this.analytics.pay2(
													e,
													t,
													n,
													o,
													i
												);
										}),
										(n.buy = function (e, t, n) {
											this.analytics &&
												this.analytics.buy(e, t, n);
										}),
										(n.use = function (e, t, n) {
											this.analytics &&
												this.analytics.use(e, t, n);
										}),
										(n.bonus = function (e, t) {
											this.analytics &&
												this.analytics.bonus(e, t);
										}),
										(n.bonus2 = function (e, t, n, o) {
											this.analytics &&
												this.analytics.bonus2(
													e,
													t,
													n,
													o
												);
										}),
										(n.startLevel = function (e) {
											this.analytics &&
												this.analytics.startLevel(e);
										}),
										(n.finishLevel = function (e, t) {
											this.analytics &&
												this.analytics.finishLevel(
													e,
													t
												);
										}),
										(n.failLevel = function (e, t) {
											this.analytics &&
												this.analytics.failLevel(e, t);
										}),
										(n.event = function (e) {
											this.analytics &&
												this.analytics.event(e);
										}),
										(n.event2 = function (e, t) {
											this.analytics &&
												this.analytics.event2(e, t);
										}),
										(n.event3 = function (e, t) {
											this.analytics &&
												this.analytics.event3(e, t);
										}),
										(n.event4 = function (e, t, n) {
											this.analytics &&
												this.analytics.event4(e, t, n);
										}),
										t
									);
								})()).instance = null),
								(t.AnalyticsManager = n);
						})(u || (u = {})),
						(function (e) {
							(function (e) {
								var t = (function () {
									function e() {}
									var t = e.prototype;
									return (
										(t.profileSignIn = function () {}),
										(t.profileSignIn2 = function () {}),
										(t.profileSignOff = function () {}),
										(t.setPlayerLevel = function () {}),
										(t.pay = function () {}),
										(t.pay2 = function () {}),
										(t.buy = function () {}),
										(t.use = function () {}),
										(t.bonus = function () {}),
										(t.bonus2 = function () {}),
										(t.startLevel = function () {}),
										(t.finishLevel = function () {}),
										(t.failLevel = function () {}),
										(t.event = function () {}),
										(t.event2 = function () {}),
										(t.event3 = function () {}),
										(t.event4 = function () {}),
										e
									);
								})();
								(e.BaseAnalytics = t),
									(e.NodeAnalytics = (function (e) {
										function t() {
											return (
												e.apply(this, arguments) || this
											);
										}
										return a(t, e), t;
									})(t));
							})(e.analytics || (e.analytics = {}));
						})(u || (u = {})),
						(function (e) {
							var t;
							(t = e.analytics || (e.analytics = {})).Ald =
								(function (t) {
									function n() {
										return t.apply(this, arguments) || this;
									}
									a(n, t);
									var o = n.prototype;
									return (
										(o.summitChapterEndedData = function (
											t,
											n,
											o
										) {
											wx.aldStage &&
												wx.aldStage.onEnd({
													stageId: t,
													stageName: n,
													userId: e
														.getSelfUser()
														.getUserInfo().userId,
													event: o
														? 'complete'
														: 'fail'
												});
										}),
										(o.use = function (t, n) {
											try {
												var o = JSON.parse(t),
													i = o.level,
													a = o.name,
													r = o.propName,
													s = o.propId;
												wx.aldStage &&
													wx.aldStage.onRunning({
														stageId: i,
														stageName: a,
														userId: e
															.getSelfUser()
															.getUserInfo()
															.userId,
														event: 'tools',
														params: {
															itemName: r,
															itemIdL: s,
															itemCount: n
														}
													});
											} catch (c) {
												console.log(c);
											}
										}),
										(o.startLevel = function (t) {
											try {
												var n =
														t.match(
															/\d+\.?\d*$/g
														)[0],
													o = n,
													i = n;
												wx.aldStage &&
													wx.aldStage.onStart({
														stageId: o,
														stageName: i,
														userId: e
															.getSelfUser()
															.getUserInfo()
															.userId
													});
											} catch (a) {
												console.log(a);
											}
										}),
										(o.finishLevel = function (e) {
											try {
												var t =
														e.match(
															/\d+\.?\d*$/g
														)[0],
													n = t,
													o = t;
												this.summitChapterEndedData(
													n,
													o,
													!0
												);
											} catch (i) {
												console.log(i);
											}
										}),
										(o.failLevel = function (e) {
											try {
												var t =
														e.match(
															/\d+\.?\d*$/g
														)[0],
													n = t,
													o = t;
												this.summitChapterEndedData(
													n,
													o,
													!1
												);
											} catch (i) {
												console.log(i);
											}
										}),
										n
									);
								})(t.BaseAnalytics);
						})(u || (u = {})),
						((u || (u = {})).AppConfigImpl = (function () {
							function e() {
								this.properties = new Map();
							}
							var t = e.prototype;
							return (
								(t.getProperty = function (e, t) {
									var n = this.properties.get(e);
									return n || (n = t || null), n;
								}),
								(t.getPropertyString = function (e) {
									try {
										return (
											this.getProperty(e).toString() || ''
										);
									} catch (t) {
										console.log(t);
									}
									return '';
								}),
								(t.setProperty = function (e, t) {
									this.properties.set(e, t);
								}),
								i(e, [
									{
										key: 'appId',
										get: function () {
											return this.getPropertyString(
												'appId'
											);
										}
									},
									{
										key: 'projectId',
										get: function () {
											return this.getPropertyString(
												'projectId'
											);
										}
									},
									{
										key: 'channelId',
										get: function () {
											return this.getPropertyString(
												'channelId'
											);
										}
									},
									{
										key: 'packageName',
										get: function () {
											return this.getPropertyString(
												'packageName'
											);
										}
									},
									{
										key: 'appName',
										get: function () {
											return this.getPropertyString(
												'appName'
											);
										}
									},
									{
										key: 'versionName',
										get: function () {
											return this.getPropertyString(
												'versionName'
											);
										}
									},
									{
										key: 'versionCode',
										get: function () {
											return this.getPropertyString(
												'versionCode'
											);
										}
									}
								]),
								e
							);
						})()),
						(function (e) {
							var t = (function () {
								function t() {
									this.appConfig = new e.AppConfigImpl();
								}
								t.getInstance = function () {
									return (
										this._instance ||
											(t._instance = new t()),
										this._instance
									);
								};
								var n = t.prototype;
								return (
									(n.getAppConfig = function () {
										return this.appConfig;
									}),
									(n.setAppConfig = function (e) {
										for (var t in e)
											this.appConfig.setProperty(t, e[t]);
									}),
									t
								);
							})();
							e.AppConfigManager = t;
						})(u || (u = {})),
						(function (e) {
							var t = function () {};
							(t.URL_DOMAIN_LOGIN = t.URL_DOMAIN = ''),
								(t.URL_DOMAIN_LOGIN_INTERFACE =
									'users/login_by_source_id_0'),
								(t.URL_DOMAIN_SUBMITUSERInfo_INTERFACE =
									'users/improve_user_baseI_info_0'),
								(e.ConstInner = t);
						})(u || (u = {})),
						(function (e) {
							(e.core || (e.core = {})).BasePlatform =
								(function () {
									function e() {}
									var t = e.prototype;
									return (
										(t.getPlatformAdAgent = function () {
											return null;
										}),
										(t.getPlatformAnalytics = function () {
											return null;
										}),
										(t.getPlatformPay = function () {
											return null;
										}),
										(t.getPlatformPromoteAgent =
											function () {
												return null;
											}),
										(t.doGetAntiAddictionInfo = function (
											e
										) {
											e(0, '', -1);
										}),
										(t.isShare = function () {
											return !1;
										}),
										(t.share = function () {
											return !1;
										}),
										(t.shareGroupRank = function () {
											return !1;
										}),
										(t.showToast = function () {
											return !1;
										}),
										(t.isSupportLogin = function () {
											return !1;
										}),
										(t.sdkLogin = function () {}),
										(t.hasVibrate = function () {
											return !1;
										}),
										(t.vibrate = function () {}),
										(t.cancelVibrate = function () {}),
										e
									);
								})();
						})(u || (u = {})),
						(function (e) {
							var t, n;
							(t = e.core || (e.core = {})),
								(n = (function () {
									function n() {
										(this.platform = null),
											(e.nativeLoginType = 0),
											(this.guestUser = null);
									}
									n.getInstance = function () {
										return (
											this._instance ||
												((this._instance = new n()),
												this._instance.init()),
											this._instance
										);
									};
									var o = n.prototype;
									return (
										(o.init = function () {
											try {
												this.platform =
													new t.NativePlatform();
											} catch (e) {
												console.log(e);
											}
											this.platform &&
												this.platform.init();
										}),
										(o.getPlatformType = function () {
											return this.platform
												? this.platform.getPlatformType()
												: 0;
										}),
										(o.getPlatformAdAgent = function () {
											return this.platform
												? this.platform.getPlatformAdAgent()
												: null;
										}),
										(o.getPlatformAnalytics = function () {
											return this.platform
												? this.platform.getPlatformAnalytics()
												: null;
										}),
										(o.getPlatformPay = function () {
											return this.platform
												? this.platform.getPlatformPay()
												: null;
										}),
										(o.getPlatformPromoteAgent =
											function () {
												return this.platform
													? this.platform.getPlatformPromoteAgent()
													: null;
											}),
										(o.onPauseMusic = function (e) {
											this.pauseMusicFunc = e;
										}),
										(o.pauseMusic = function () {
											this.pauseMusicFunc &&
												this.pauseMusicFunc();
										}),
										(o.onResumeMusic = function (e) {
											this.resumeMusicFunc = e;
										}),
										(o.resumeMusic = function () {
											this.resumeMusicFunc &&
												this.resumeMusicFunc();
										}),
										(o.isShare = function () {
											return (
												!!this.platform &&
												this.platform.isShare()
											);
										}),
										(o.share = function (e, t, n, o) {
											this.platform
												? this.platform.share(
														e,
														t,
														n,
														o
												  )
												: n && n(!1);
										}),
										(o.shareGroupRank = function (
											e,
											t,
											n,
											o
										) {
											this.platform
												? this.platform.shareGroupRank(
														e,
														t,
														n,
														o
												  )
												: n && n(!1);
										}),
										(o.getShareParam = function () {
											return this.onRequestShareParam
												? this.onRequestShareParam()
												: null;
										}),
										(o.setOnRequestShareParam = function (
											e
										) {
											this.onRequestShareParam = e;
										}),
										(o.showToast = function (e) {
											return (
												!!this.platform &&
												this.platform.showToast(e)
											);
										}),
										(o.login = function (t) {
											1 != e.nativeLoginType
												? this.platform
													? this.platform.login(
															function (n) {
																n &&
																	(e.nativeLoginType = 1),
																	t(n);
															}
													  )
													: t(!1)
												: t(!0);
										}),
										(o.loginGuest = function (n) {
											(this.guestUser =
												new t.LocalUser()),
												this.guestUser.syncThirdUserInfo(),
												(e.nativeLoginType = 2),
												n(!0);
										}),
										(o.logout = function () {
											this.platform &&
												this.platform.logout(),
												(e.LyHttp1.cookie = null),
												(e.nativeLoginType = 0);
										}),
										(o.getLoginType = function () {
											return e.nativeLoginType;
										}),
										(o.checkThirdAuthUserInfo = function (
											e,
											t
										) {
											this.platform
												? this.platform.checkThirdAuthUserInfo(
														e,
														t
												  )
												: e && e(!0);
										}),
										(o.getUser = function () {
											return 2 == e.nativeLoginType
												? this.guestUser
												: this.platform.getUser();
										}),
										(o.getThirdUserInfo = function (e) {
											var t = this;
											this.getThirdUserInfoOriginal(
												function (n) {
													var o =
														t.parseThirdUserInfoOriginal(
															n
														);
													e && e(o);
												}
											);
										}),
										(o.getThirdUserInfoOriginal = function (
											e
										) {
											return this.platform
												? this.platform.getThirdUserInfoOriginal(
														e
												  )
												: null;
										}),
										(o.parseThirdUserInfoOriginal =
											function (e) {
												return this.platform
													? this.platform.parseThirdUserInfoOriginal(
															e
													  )
													: null;
											}),
										(o.doGetAntiAddictionInfo = function (
											e
										) {
											this.platform &&
												this.platform.doGetAntiAddictionInfo(
													e
												);
										}),
										(o.isSupportLogin = function (e) {
											this.platform &&
												this.platform.isSupportLogin(e);
										}),
										(o.sdkLogin = function (e, t) {
											this.platform &&
												this.platform.sdkLogin(e, t);
										}),
										(o.hasVibrate = function () {
											this.platform &&
												this.platform.hasVibrate();
										}),
										(o.vibrate = function (e, t) {
											this.platform &&
												this.platform.vibrate(e, t);
										}),
										(o.cancelVibrate = function () {
											this.platform &&
												this.platform.cancelVibrate();
										}),
										n
									);
								})()),
								(t.PlatformManager = n);
						})(u || (u = {})),
						(function (e) {
							(function (e) {
								(function (e) {
									var t = function () {};
									e.PromoteItemImpl = (function () {
										function n() {
											this.promoteItemParam = new t();
										}
										return (
											(n.prototype.open = function () {
												e.PromoteManager.getInstance().openPromoteItem(
													this
												);
											}),
											i(n, [
												{
													key: 'position',
													get: function () {
														return this
															.promoteItemParam
															.position;
													},
													set: function (e) {
														this.promoteItemParam.position =
															e;
													}
												},
												{
													key: 'title',
													get: function () {
														return this
															.promoteItemParam
															.title;
													},
													set: function (e) {
														this.promoteItemParam.title =
															e;
													}
												},
												{
													key: 'iconUrl',
													get: function () {
														return this
															.promoteItemParam
															.iconUrl;
													},
													set: function (e) {
														this.promoteItemParam.iconUrl =
															e;
													}
												},
												{
													key: 'packageName',
													get: function () {
														return this
															.promoteItemParam
															.packageName;
													},
													set: function (e) {
														this.promoteItemParam.packageName =
															e;
													}
												},
												{
													key: 'path',
													get: function () {
														return this
															.promoteItemParam
															.path;
													},
													set: function (e) {
														this.promoteItemParam.path =
															e;
													}
												},
												{
													key: 'extra',
													get: function () {
														return this
															.promoteItemParam
															.extra;
													},
													set: function (e) {
														this.promoteItemParam.extra =
															e;
													}
												}
											]),
											n
										);
									})();
								})(e.promote || (e.promote = {}));
							})(e.core || (e.core = {}));
						})(u || (u = {})),
						(function (e) {
							(function (e) {
								(function (t) {
									t.BasePromoteAgent = (function () {
										function e() {
											(this.updateStatus = 0),
												(this.updateFinishTasks =
													new Array());
										}
										var t = e.prototype;
										return (
											(t.init = function () {
												this.updatePromoteItem();
											}),
											(t.onUpdatePromoteItemFinish =
												function () {
													var e = this;
													(this.updateStatus = 2),
														this.updateFinishTasks.forEach(
															function (t, n) {
																t(),
																	e.updateFinishTasks.splice(
																		n
																	);
															}
														);
												}),
											(t.getPromoteItem = function (
												e,
												t
											) {
												var n = this;
												if (2 == this.updateStatus) {
													for (
														var o,
															i = s(
																this
																	.promoteItemList
															);
														!(o = i()).done;

													) {
														var a = o.value;
														if (a.position == e)
															return void t(a);
													}
													t(null);
												} else
													this.updateFinishTasks.push(
														function () {
															n.getPromoteItem(
																e,
																t
															);
														}
													);
											}),
											e
										);
									})();
									var n = (function () {
										function t() {}
										t.getInstance = function () {
											return (
												this._instance ||
													((this._instance = new t()),
													this._instance.init()),
												this._instance
											);
										};
										var n = t.prototype;
										return (
											(n.init = function () {
												(this.promoteAgent =
													e.PlatformManager.getInstance().getPlatformPromoteAgent()),
													this.promoteAgent &&
														this.promoteAgent.init();
											}),
											(n.isPromote = function () {
												return !!this.promoteAgent;
											}),
											(n.getPromoteItem = function (
												e,
												t
											) {
												this.promoteAgent
													? this.promoteAgent.getPromoteItem(
															e,
															t
													  )
													: t && t(null);
											}),
											(n.updatePromoteItem = function (
												e
											) {
												this.promoteAgent
													? this.promoteAgent.updatePromoteItem(
															e
													  )
													: e && e(1);
											}),
											(n.openPromoteItem = function (e) {
												this.promoteAgent &&
													this.promoteAgent.openPromoteItem(
														e
													);
											}),
											t
										);
									})();
									t.PromoteManager = n;
								})(e.promote || (e.promote = {}));
							})(e.core || (e.core = {}));
						})(u || (u = {})),
						(function (e) {
							var t = (function () {
								function t() {
									(this.rank = -1),
										(this.user_id = -1),
										(this.user_name = ''),
										(this.user_sex = 0),
										(this.user_image = ''),
										(this.max_score = 0),
										(this.user_gate_all = 0),
										(this.day_max_score = 0),
										(this.user_gold = 0);
								}
								return (
									(t.toRankItem = function (t) {
										var n = new e.RankItemImpl();
										return (
											(n.userName = t.user_name),
											(n.sex = t.user_sex),
											(n.score = t.max_score),
											(n.headImgUrl = t.user_image),
											(n.stage = t.user_gate_all),
											(n.challengeMinDuration =
												t.day_max_score),
											(n.gold = t.user_gold),
											n
										);
									}),
									t
								);
							})();
							e.NetRankData = (function () {
								function n() {
									(this.all_rank = null),
										(this.my_rank = null);
								}
								return (
									(n.toRank = function (n, o) {
										for (
											var i,
												a = new e.RankImpl(o),
												r = s(n.all_rank);
											!(i = r()).done;

										) {
											var c = i.value,
												l = t.toRankItem(c);
											a.addRankItem(l);
										}
										return (
											(a.selfRankItem = t.toRankItem(
												n.my_rank
											)),
											(a.selfRankId = n.my_rank.rank),
											a
										);
									}),
									n
								);
							})();
						})(u || (u = {})),
						(function (e) {
							var t = (function () {
									function t() {
										(this.selfRankItem =
											new e.RankItemImpl()),
											(this.selfRankId = -1),
											(this.rankItems = new Array());
									}
									return (
										(t.fromJsonString = function (n) {
											try {
												var o = JSON.parse(
														n,
														function (t, n) {
															if (
																'selfRankItem' ==
																t
															) {
																var o =
																	new e.RankItemImpl();
																return (
																	n &&
																		n.rankItemData &&
																		(o.rankItemData =
																			n.rankItemData),
																	o
																);
															}
															if (
																'rankItems' == t
															) {
																for (
																	var i,
																		a =
																			new Array(),
																		r =
																			s(
																				n
																			);
																	!(i = r())
																		.done;

																) {
																	var c =
																			i.value,
																		l =
																			new e.RankItemImpl();
																	(l.rankItemData =
																		c.rankItemData),
																		a.push(
																			l
																		);
																}
																return a;
															}
															return n;
														}
													),
													i = new t();
												return Object.assign(i, o), i;
											} catch (a) {
												console.log(a);
											}
											return null;
										}),
										(t.prototype.toJsonString =
											function () {
												return JSON.stringify(this);
											}),
										t
									);
								})(),
								n = (function () {
									function e(e) {
										(this.rankData = new t()),
											(this.rankMode = e);
									}
									e.fromJsonString = function (n) {
										var o = t.fromJsonString(n);
										if (o) {
											var i = new e(o.rankMode);
											return (i.rankData = o), i;
										}
										return null;
									};
									var n = e.prototype;
									return (
										(n.toJsonString = function () {
											return this.rankData.toJsonString();
										}),
										(n.addRankItem = function (e) {
											this.rankData.rankItems.push(e);
										}),
										(n.sort = function () {
											this.rankData.rankItems.sort(
												function (e, t) {
													return t.score - e.score;
												}
											);
											for (
												var e = 0;
												e <
												this.rankData.rankItems.length;
												e++
											) {
												var t =
													this.rankData.rankItems[e];
												if (
													this.selfRankItem
														.headImgUrl ==
													t.headImgUrl
												)
													return (
														(this.rankData.selfRankId =
															e + 1),
														void (this.rankData.selfRankItem.score =
															t.score)
													);
											}
											this.rankData.selfRankId = -1;
										}),
										(n.getRankItem = function (e) {
											return this.rankItems[e - 1];
										}),
										i(e, [
											{
												key: 'rankMode',
												get: function () {
													return this.rankData
														.rankMode;
												},
												set: function (e) {
													this.rankData.rankMode = e;
												}
											},
											{
												key: 'selfRankItem',
												get: function () {
													return this.rankData
														.selfRankItem;
												},
												set: function (e) {
													this.rankData.selfRankItem =
														e;
												}
											},
											{
												key: 'selfRankId',
												get: function () {
													return this.rankData
														.selfRankId;
												},
												set: function (e) {
													this.rankData.selfRankId =
														e;
												}
											},
											{
												key: 'rankItems',
												get: function () {
													return this.rankData
														.rankItems;
												}
											}
										]),
										e
									);
								})();
							e.RankImpl = n;
						})(u || (u = {})),
						(function (e) {
							var t = function () {
								(this.userName = ''),
									(this.sex = 0),
									(this.score = 0),
									(this.headImgUrl = ''),
									(this.stage = 0),
									(this.challengeMinDuration = 0),
									(this.gold = 0);
							};
							(e.RankItemData = t),
								(e.RankItemImpl = (function () {
									function e() {
										this.rankItemData = new t();
									}
									return (
										i(e, [
											{
												key: 'userName',
												get: function () {
													return this.rankItemData
														.userName;
												},
												set: function (e) {
													this.rankItemData.userName =
														e;
												}
											},
											{
												key: 'sex',
												get: function () {
													return this.rankItemData
														.sex;
												},
												set: function (e) {
													this.rankItemData.sex = e;
												}
											},
											{
												key: 'score',
												get: function () {
													return this.rankItemData
														.score;
												},
												set: function (e) {
													this.rankItemData.score = e;
												}
											},
											{
												key: 'gold',
												get: function () {
													return this.rankItemData
														.gold;
												},
												set: function (e) {
													this.rankItemData.gold = e;
												}
											},
											{
												key: 'headImgUrl',
												get: function () {
													return this.rankItemData
														.headImgUrl;
												},
												set: function (e) {
													this.rankItemData.headImgUrl =
														e;
												}
											},
											{
												key: 'stage',
												get: function () {
													return this.rankItemData
														.stage;
												},
												set: function (e) {
													this.rankItemData.stage = e;
												}
											},
											{
												key: 'challengeMinDuration',
												get: function () {
													return this.rankItemData
														.challengeMinDuration;
												},
												set: function (e) {
													this.rankItemData.challengeMinDuration =
														e;
												}
											}
										]),
										e
									);
								})());
						})(u || (u = {})),
						(function (e) {
							var t = (function () {
								function t() {
									(this.onRankChangeListeners = new Array()),
										(this.weekRank = new e.RankImpl(
											e.Constants.RankMode_week
										)),
										(this.allRank = new e.RankImpl(
											e.Constants.RankMode_all
										));
								}
								t.getInstance = function () {
									return (
										this._instance ||
											((this._instance = new t()),
											this._instance.init()),
										this._instance
									);
								};
								var n = t.prototype;
								return (
									(n.init = function () {}),
									(n.getRank = function (t, n) {
										t == e.Constants.RankMode_week
											? this.weekRank
												? n && n(this.weekRank)
												: this.updateRank(t, n)
											: t ==
											  e.Constants.RankMode_friendWeek
											? this.getFriendWeekRank(n)
											: t ==
											  e.Constants.RankMode_friendAll
											? this.getFriendAllRank(n)
											: t ==
											  e.Constants.RankMode_groupWeek
											? this.getGroupWeekRank(n)
											: t == e.Constants.RankMode_groupAll
											? this.getGroupAllRank(n)
											: n && n(null);
									}),
									(n.updateRank = function (t, n, o) {
										var i = this;
										if (
											(void 0 === o && (o = 0),
											t == e.Constants.RankMode_week)
										) {
											if (
												1 !=
												e.core.PlatformManager.getInstance().getLoginType()
											)
												return void (n && n(null));
											var a = e.getSelfUser().getUserId();
											if (!a) return void (n && n(null));
											var r =
													e.ConstInner.URL_DOMAIN +
													'rank/get_all_user_rank_0',
												s = JSON.stringify({
													user_id: Number.parseInt(a),
													start_num: 0,
													end_num: 99,
													game: e.getAppConfig()
														.appId,
													rank_type: o
												});
											console.log(
												'\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014rankData = ',
												s
											),
												e.LyHttp1.post(
													r,
													s,
													function (o) {
														var a = new e.RankImpl(
															t
														);
														if (
															(console.log(
																'\u6392\u884c\u699c\u6570\u636e\u4e3a: ',
																JSON.stringify(
																	o
																)
															),
															0 == o.code)
														)
															try {
																var s =
																	new e.NetRankData();
																return (
																	Object.assign(
																		s,
																		o.data
																	),
																	void (
																		(a =
																			e.NetRankData.toRank(
																				s,
																				t
																			)) &&
																		((i.weekRank =
																			a),
																		n &&
																			n(
																				a
																			),
																		i.rankChanged(
																			t,
																			a
																		))
																	)
																);
															} catch (r) {
																console.log(r);
															}
														n && n(null);
													}
												);
										} else
											t == e.Constants.RankMode_all
												? n && n(this.allRank)
												: t ==
												  e.Constants
														.RankMode_friendWeek
												? this.getFriendWeekRank(n)
												: t ==
												  e.Constants.RankMode_friendAll
												? this.getFriendAllRank(n)
												: n && n(null);
									}),
									(n.onRankChange = function (e) {
										this.onRankChangeListeners.push(e);
									}),
									(n.rankChanged = function (e, t) {
										for (
											var n,
												o = s(
													this.onRankChangeListeners
												);
											!(n = o()).done;

										)
											(0, n.value)(e, t);
									}),
									(n.getFriendWeekRank = function (e) {
										e && e(null);
									}),
									(n.getFriendAllRank = function (e) {
										e && e(null);
									}),
									(n.getGroupWeekRank = function (e) {
										e && e(null);
									}),
									(n.getGroupAllRank = function (e) {
										e && e(null);
									}),
									t
								);
							})();
							e.RankManager = t;
						})(u || (u = {})),
						(function (e) {
							var t;
							(t = e.core || (e.core = {})).UserImpl =
								(function () {
									function n() {
										(this.userInfo = null),
											(this.userGoods = null),
											(this.userSign = new t.UserSignImpl(
												this
											));
									}
									var o = n.prototype;
									return (
										(o.setUserInfo = function (e) {
											(this.userInfo = e),
												(this.userGoods =
													new t.UserGoodsImpl(this));
										}),
										(o.syncThirdUserInfo = function (e) {
											var n = this;
											t.PlatformManager.getInstance().getThirdUserInfo(
												function (t) {
													t
														? (t.userName &&
																(n.userInfo.userName =
																	t.userName),
														  t.sex &&
																(n.userInfo.sex =
																	t.sex),
														  t.headImgUrl &&
																(n.userInfo.headImgUrl =
																	t.headImgUrl),
														  n.submitAllUserInfo(),
														  n.submitUserGoods(),
														  e && e(0))
														: e && e(1);
												}
											);
										}),
										(o.getUserInfo = function () {
											return this.userInfo;
										}),
										(o.getUserInfoJsonStr = function () {
											return this.userInfo.toJsonString();
										}),
										(o.getUserId = function () {
											return this.userInfo.userId;
										}),
										(o.getCookie = function () {
											return e.LyHttp1.cookie;
										}),
										(o.applyUserParams = function (t) {
											t.has(e.Constants.User_Info_Name) &&
												(this.userInfo.userName = t.get(
													e.Constants.User_Info_Name
												)),
												t.has(
													e.Constants.User_Info_Image
												) &&
													(this.userInfo.headImgUrl =
														t.get(
															e.Constants
																.User_Info_Image
														)),
												t.has(
													e.Constants.User_Info_Sex
												) &&
													(this.userInfo.sex = t.get(
														e.Constants
															.User_Info_Sex
													));
										}),
										(o.submitAllUserInfo = function (t) {
											var n = new Map();
											n.set(
												e.Constants.User_Info_Name,
												this.userInfo.userName
											),
												n.set(
													e.Constants.User_Info_Sex,
													this.userInfo.sex
												),
												n.set(
													e.Constants.User_Info_Image,
													this.userInfo.headImgUrl
												),
												this.submitUserInfo(n, t);
										}),
										(o.getUserGoods = function () {
											return this.userGoods;
										}),
										(o.getUserSign = function () {
											return this.userSign;
										}),
										(o.submitGold = function () {}),
										n
									);
								})();
						})(u || (u = {})),
						(function (e) {
							var t;
							(t = e.core || (e.core = {})).LocalUser =
								(function (t) {
									function n() {
										var n,
											o = (n =
												t.call(this) ||
												this).decryptStr(
												localStorage.getItem(
													'ly_userInfo'
												) || ''
											),
											i =
												e.UserInfoImpl.fromJsonString(
													o
												);
										return (
											i || (i = new e.UserInfoImpl()),
											i.userId || (i.userId = n.genUID()),
											n.setUserInfo(i),
											n
										);
									}
									a(n, t);
									var o = n.prototype;
									return (
										(o.genUID = function () {
											var e =
													'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
														''
													),
												t = 'TMP';
											t += new Date().getTime();
											for (
												var n = e.length, o = 0;
												o < 60;
												o++
											)
												t +=
													e[
														Math.round(
															Math.random() * n
														)
													];
											return t.substr(0, 64), t;
										}),
										(o.submitUserInfo = function (e, t) {
											this.applyUserParams(e),
												localStorage.setItem(
													'ly_userInfo',
													this.encryptStr(
														this.getUserInfoJsonStr()
													) || ''
												),
												t && t(0);
										}),
										(o.submitChallengeDuration = function (
											e,
											t
										) {
											e <= 0 && t && t(1),
												e >=
													this.userInfo
														.score_everyday &&
													t &&
													t(1),
												(this.userInfo.score_everyday =
													e),
												localStorage.setItem(
													'ly_userInfo',
													this.getUserInfoJsonStr()
												),
												t && t(0);
										}),
										(o.submitStage = function (e, t) {
											e > 0 || (t && t(1)),
												(this.userInfo.stage += e),
												localStorage.setItem(
													'ly_userInfo',
													this.getUserInfoJsonStr()
												),
												t && t(0);
										}),
										(o.submitGold = function (e, t) {
											this.userInfo.userId
												? ((this.userInfo.gold += e),
												  localStorage.setItem(
														'ly_userInfo',
														this.encryptStr(
															this.getUserInfoJsonStr()
														) || ''
												  ),
												  t && t(0))
												: t && t(1);
										}),
										(o.submitScore = function (t, n) {
											0 == t && n && n(1);
											var o = !1;
											t != this.userInfo.score_all &&
												((this.userInfo.score_all = t),
												(o = !0));
											var i = new Date();
											e.TimeUtil.isSameWeek(
												i,
												new Date(
													this.userInfo.score_week_times
												)
											)
												? t >
														this.userInfo
															.score_week &&
												  ((this.userInfo.score_week =
														t),
												  (this.userInfo.score_week_times =
														i.getTime()),
												  (o = !0))
												: ((this.userInfo.score_week =
														t),
												  (this.userInfo.score_week_times =
														i.getTime()),
												  (o = !0)),
												o &&
													localStorage.setItem(
														'ly_userInfo',
														this.encryptStr(
															this.getUserInfoJsonStr()
														) || ''
													),
												n && n(0);
										}),
										(o.submitUserGoods = function (e) {
											localStorage.setItem(
												'ly_userInfo',
												this.encryptStr(
													this.getUserInfoJsonStr()
												) || ''
											),
												e && e(0);
										}),
										(o.encryptStr = function (e) {
											for (
												var t = String.fromCharCode(
														e.charCodeAt(0) +
															e.length
													),
													n = 1;
												n < e.length;
												n++
											)
												t += String.fromCharCode(
													e.charCodeAt(n) +
														e.charCodeAt(n - 1)
												);
											return escape(t);
										}),
										(o.decryptStr = function (e) {
											e = unescape(e);
											for (
												var t = String.fromCharCode(
														e.charCodeAt(0) -
															e.length
													),
													n = 1;
												n < e.length;
												n++
											)
												t += String.fromCharCode(
													e.charCodeAt(n) -
														t.charCodeAt(n - 1)
												);
											return t;
										}),
										n
									);
								})(t.UserImpl);
						})(u || (u = {})),
						(function (e) {
							(function (t) {
								t.NetUserInfo = (function () {
									function t() {
										(this.user_name = ''),
											(this.user_sex = 0),
											(this.user_level = 0),
											(this.user_upgrade_exp = 0),
											(this.user_now_exp = 0),
											(this.user_gold = 0),
											(this.user_diamonds = 0),
											(this.max_score = 0),
											(this.week_max_score = 0),
											(this.daily_share_time = 0),
											(this.user_gate_all = 0),
											(this.day_max_score = 0);
									}
									return (
										(t.prototype.toUserInfo = function () {
											var t = new e.UserInfoImpl();
											(t.userId = this.user_id),
												(t.userName = this.user_name),
												(t.sex = this.user_sex),
												(t.headImgUrl =
													this.user_image),
												(t.stage = this.user_gate_all);
											var n =
												e.Convert.stringToMap_number(
													this.user_props
												);
											return (
												(t.goodses = n || new Map()),
												(t.score_all = this.max_score),
												(t.score_week =
													this.week_max_score),
												(t.score_everyday =
													this.day_max_score),
												(t.gold = this.user_gold),
												t
											);
										}),
										t
									);
								})();
								var o = function () {
									(this.user_level = 0),
										(this.user_upgrade_exp = 0),
										(this.user_now_exp = 0),
										(this.user_gold = 0),
										(this.user_diamonds = 0),
										(this.user_gate_all = 0),
										(this.max_score = 0),
										(this.week_max_score = 0),
										(this.day_max_score = 0);
								};
								t.NetUser = (function (t) {
									function i() {
										var o;
										return (
											((o =
												t.call(this) ||
												this).tempUserInfo = null),
											(o.tempUserInfo =
												new e.UserInfoImpl()),
											t.prototype.setUserInfo.call(
												n(o),
												o.tempUserInfo
											),
											o
										);
									}
									a(i, t);
									var r = i.prototype;
									return (
										(r.setUserInfo = function (e) {
											if (
												(t.prototype.setUserInfo.call(
													this,
													e
												),
												this.tempUserInfo)
											) {
												for (
													var n,
														o = s(
															this.tempUserInfo
																.goodses
														);
													!(n = o()).done;

												) {
													var i = n.value,
														a = i[0],
														r = i[1],
														c = e.goodses.get(a);
													isNaN(c) && (c = 0),
														(c += r),
														e.goodses.set(a, c);
												}
												(this.tempUserInfo = null),
													this.submitUserGoods();
											}
										}),
										(r.login = function (e) {
											e(1);
										}),
										(r.submitUserInfo = function (t, n) {
											var o = this;
											if (this.userInfo.userId) {
												var i =
													e.ConstInner
														.URL_DOMAIN_LOGIN +
													e.ConstInner
														.URL_DOMAIN_SUBMITUSERInfo_INTERFACE;
												t.set(
													'user_id',
													Number.parseInt(
														this.userInfo.userId
													)
												);
												var a =
													e.Convert.MapToString(t);
												e.LyHttp1.post(
													i,
													a,
													function (e) {
														0 == e.code
															? (o.applyUserParams(
																	t
															  ),
															  n && n(0))
															: 200 !=
															  e.http_status
															? n && n(-1)
															: n && n(1);
													}
												);
											} else n && n(1);
										}),
										(r.submitChallengeDuration = function (
											t,
											n
										) {
											var i = this;
											if (this.userInfo.userId) {
												t <= 0 && n && n(1),
													t >=
														this.userInfo
															.score_everyday &&
														n &&
														n(1);
												var a =
														e.ConstInner
															.URL_DOMAIN_LOGIN +
														'users/update_user_info_0',
													r = JSON.stringify({
														user_id:
															Number.parseInt(
																this.getUserId()
															),
														day_max_score: t
													});
												e.LyHttp1.post(
													a,
													r,
													function (e) {
														if (0 == e.code) {
															try {
																var a = new o();
																Object.assign(
																	a,
																	e.data
																),
																	(i.userInfo.score_everyday =
																		a.day_max_score);
															} catch (t) {
																console.log(t);
															}
															n && n(0);
														} else
															200 != e.http_status
																? n && n(-1)
																: n && n(1);
													}
												);
											} else n && n(1);
										}),
										(r.submitStage = function (t, n) {
											var i = this;
											if (this.userInfo.userId) {
												t > 0 || (n && n(1));
												var a =
														e.ConstInner
															.URL_DOMAIN_LOGIN +
														'users/update_user_info_0',
													r = JSON.stringify({
														user_id:
															Number.parseInt(
																this.getUserId()
															),
														user_gate_count: t
													});
												e.LyHttp1.post(
													a,
													r,
													function (e) {
														if (0 == e.code) {
															try {
																var a = new o();
																Object.assign(
																	a,
																	e.data
																),
																	(i.userInfo.stage =
																		a.user_gate_all);
															} catch (t) {
																console.log(t);
															}
															n && n(0);
														} else
															200 != e.http_status
																? n && n(-1)
																: n && n(1);
													}
												);
											} else n && n(1);
										}),
										(r.submitGold = function (t, n) {
											var i = this;
											if (this.userInfo.userId)
												if (t != this.userInfo.gold) {
													var a =
															e.ConstInner
																.URL_DOMAIN_LOGIN +
															'users/update_user_info_0',
														r = JSON.stringify({
															user_id:
																Number.parseInt(
																	this.getUserId()
																),
															user_gold: t
														});
													console.log(
														'___________submitGold = ',
														r
													),
														e.LyHttp1.post(
															a,
															r,
															function (e) {
																if (
																	(console.log(
																		'___________submitGold respose = ',
																		JSON.stringify(
																			e
																		)
																	),
																	0 == e.code)
																) {
																	try {
																		var a =
																			new o();
																		Object.assign(
																			a,
																			e.data
																		),
																			(i.userInfo.gold =
																				a.user_gold);
																	} catch (t) {
																		console.log(
																			t
																		);
																	}
																	n && n(0);
																} else
																	200 !=
																	e.http_status
																		? n &&
																		  n(-1)
																		: n &&
																		  n(1);
															}
														);
												} else n && n(1);
											else n && n(1);
										}),
										(r.submitScore = function (t, n) {
											var i = this;
											if (this.userInfo.userId)
												if (0 != t) {
													var a =
															e.ConstInner
																.URL_DOMAIN_LOGIN +
															'users/update_user_info_0',
														r = JSON.stringify({
															user_id:
																Number.parseInt(
																	this.getUserId()
																),
															max_score: t
														});
													e.LyHttp1.post(
														a,
														r,
														function (e) {
															if (0 == e.code) {
																try {
																	var a =
																		new o();
																	Object.assign(
																		a,
																		e.data
																	),
																		(i.userInfo.score_all =
																			a.max_score),
																		(i.userInfo.score_week =
																			a.week_max_score);
																} catch (t) {
																	console.log(
																		t
																	);
																}
																n && n(0);
															} else
																200 !=
																e.http_status
																	? n && n(-1)
																	: n && n(1);
														}
													);
												} else n && n(1);
											else n && n(1);
										}),
										(r.submitUserGoods = function (t) {
											if (this.userInfo.userId) {
												var n =
														e.ConstInner
															.URL_DOMAIN_LOGIN +
														'users/update_user_props_info_0',
													o = JSON.stringify({
														user_id:
															Number.parseInt(
																this.getUserId()
															),
														user_props:
															this.userGoods.toJsonString()
													});
												e.LyHttp1.post(
													n,
													o,
													function (e) {
														0 == e.code
															? t && t(0)
															: 200 !=
															  e.http_status
															? t && t(-1)
															: t && t(1);
													}
												);
											} else t && t(1);
										}),
										i
									);
								})(t.UserImpl);
							})(e.core || (e.core = {}));
						})(u || (u = {})),
						(function (e) {
							(e.core || (e.core = {})).UserGoodsImpl =
								(function () {
									function t(e) {
										this.user = e;
									}
									var n = t.prototype;
									return (
										(n.toJsonString = function () {
											return e.Convert.MapToString(
												this.goodses
											);
										}),
										(n.hasGoods = function (e) {
											return this.goodses.has(e);
										}),
										(n.removeGoods = function (e) {
											this.goodses.delete(e);
										}),
										(n.getGoodsNum = function (e, t) {
											var n = this.goodses.get(e);
											return (
												isNaN(n) && (n = t),
												isNaN(n) && (n = 0),
												n
											);
										}),
										(n.addGoodsNum = function (e, t, n, o) {
											var i = this.getGoodsNum(e, n);
											this.setGoodsNum(e, i + t, o);
										}),
										(n.useGoodsNum = function (e, t, n, o) {
											var i = this.getGoodsNum(e, n);
											return (
												i >= t &&
												(this.setGoodsNum(e, i - t, o),
												!0)
											);
										}),
										(n.setGoodsNum = function (e, t, n) {
											isNaN(t) ||
												(this.goodses.set(e, t),
												(n || null == n || null == n) &&
													this.submit());
										}),
										(n.submit = function (e) {
											this.user.submitUserGoods(e);
										}),
										i(t, [
											{
												key: 'goodses',
												get: function () {
													return this.user.getUserInfo()
														.goodses;
												}
											}
										]),
										t
									);
								})();
						})(u || (u = {})),
						(function (e) {
							var t = (function () {
								function t() {
									(this.userId = ''),
										(this.userName = ''),
										(this.sex = 0),
										(this.headImgUrl = ''),
										(this.stage = 0),
										(this.gold = 0),
										(this.score_all = 0),
										(this.score_week = 0),
										(this.score_week_times = 0),
										(this.score_everyday = 0),
										(this.goodses = new Map());
								}
								return (
									(t.fromJsonString = function (n) {
										try {
											var o = JSON.parse(
													n,
													function (t, n) {
														return 'goodses' == t
															? e.Convert.stringToMap_number(
																	n
															  ) || new Map()
															: n;
													}
												),
												i = new t();
											return Object.assign(i, o), i;
										} catch (a) {
											console.log(a);
										}
										return null;
									}),
									(t.prototype.toJsonString = function () {
										var t = this;
										return JSON.stringify(
											this,
											function (n, o) {
												return 'goodses' == n
													? e.Convert.MapToString(
															t.goodses
													  )
													: o;
											}
										);
									}),
									t
								);
							})();
							e.UserInfoData = t;
							var n = (function () {
								function e() {
									this.userInfoData = new t();
								}
								return (
									(e.fromJsonString = function (n) {
										var o = t.fromJsonString(n);
										if (o) {
											var i = new e();
											return (i.userInfoData = o), i;
										}
										return null;
									}),
									(e.prototype.toJsonString = function () {
										return this.userInfoData.toJsonString();
									}),
									i(e, [
										{
											key: 'userId',
											get: function () {
												return this.userInfoData.userId;
											},
											set: function (e) {
												this.userInfoData.userId = e;
											}
										},
										{
											key: 'userName',
											get: function () {
												return this.userInfoData
													.userName;
											},
											set: function (e) {
												this.userInfoData.userName = e;
											}
										},
										{
											key: 'sex',
											get: function () {
												return this.userInfoData.sex;
											},
											set: function (e) {
												this.userInfoData.sex = e;
											}
										},
										{
											key: 'headImgUrl',
											get: function () {
												return this.userInfoData
													.headImgUrl;
											},
											set: function (e) {
												this.userInfoData.headImgUrl =
													e;
											}
										},
										{
											key: 'stage',
											get: function () {
												return this.userInfoData.stage;
											},
											set: function (e) {
												this.userInfoData.stage = e;
											}
										},
										{
											key: 'gold',
											get: function () {
												return this.userInfoData.gold;
											},
											set: function (e) {
												this.userInfoData.gold = e;
											}
										},
										{
											key: 'goodses',
											get: function () {
												return this.userInfoData
													.goodses;
											},
											set: function (e) {
												this.userInfoData.goodses = e;
											}
										},
										{
											key: 'score_all',
											get: function () {
												return this.userInfoData
													.score_all;
											},
											set: function (e) {
												this.userInfoData.score_all = e;
											}
										},
										{
											key: 'score_week',
											get: function () {
												return this.userInfoData
													.score_week;
											},
											set: function (e) {
												this.userInfoData.score_week =
													e;
											}
										},
										{
											key: 'score_everyday',
											get: function () {
												return this.userInfoData
													.score_everyday;
											},
											set: function (e) {
												this.userInfoData.score_everyday =
													e;
											}
										},
										{
											key: 'score_week_times',
											get: function () {
												return this.userInfoData
													.score_week_times;
											},
											set: function (e) {
												this.userInfoData.score_week_times =
													e;
											}
										}
									]),
									e
								);
							})();
							e.UserInfoImpl = n;
						})(u || (u = {})),
						(function (e) {
							var t, n;
							(t = e.core || (e.core = {})),
								((n = (function () {
									function t(e) {
										(this.user = null), (this.user = e);
									}
									var n = t.prototype;
									return (
										(n.getLastSignDate = function () {
											return this.user
												.getUserGoods()
												.getGoodsNum(
													t.UserSignKey_LastSignDate
												);
										}),
										(n.getSignNum = function () {
											return this.user
												.getUserGoods()
												.getGoodsNum(
													t.UserSignKey_SignNum
												);
										}),
										(n.resetSignNum = function () {
											this.user
												.getUserGoods()
												.setGoodsNum(
													t.UserSignKey_SignNum,
													0
												);
										}),
										(n.getCurrentDate = function () {
											return e.TimeUtil.getDate();
										}),
										(n.isNeedSign = function () {
											var e = this.getCurrentDate(),
												t = this.getLastSignDate();
											return e >= 0 && t >= 0 && e > t;
										}),
										(n.sign = function (e) {
											var n = this;
											this.isNeedSign() || (e && e(1));
											var o = this.getLastSignDate(),
												i = this.getSignNum();
											this.user
												.getUserGoods()
												.setGoodsNum(
													t.UserSignKey_LastSignDate,
													this.getCurrentDate(),
													!1
												),
												this.user
													.getUserGoods()
													.setGoodsNum(
														t.UserSignKey_SignNum,
														i + 1,
														!1
													),
												this.user.submitUserGoods(
													function (a) {
														0 == a
															? e && e(0)
															: (n.user
																	.getUserGoods()
																	.setGoodsNum(
																		t.UserSignKey_LastSignDate,
																		o,
																		!1
																	),
															  n.user
																	.getUserGoods()
																	.setGoodsNum(
																		t.UserSignKey_SignNum,
																		i,
																		!1
																	),
															  e && e(a));
													}
												);
										}),
										(n.getLastAndCurrentIntervalSignDay =
											function () {
												var e = this.getLastSignDate(),
													t = this.getCurrentDate();
												return e <= 0 || t <= 0
													? 0
													: this.getIntervalDay(e, t);
											}),
										(n.getIntervalDay = function (e, t) {
											var n = new Date(
												this.convertDate(e)
											).getTime();
											return (
												(new Date(
													this.convertDate(t)
												).getTime() -
													n) /
												864e5
											);
										}),
										(n.convertDate = function (e) {
											var t = e % 1e4;
											return new Date(
												e / 1e4,
												t / 100 - 1,
												t % 100,
												0,
												0,
												0
											);
										}),
										t
									);
								})()).UserSignKey_LastSignDate = -1),
								(n.UserSignKey_SignNum = -2),
								(t.UserSignImpl = n);
						})(u || (u = {})),
						(function (e) {
							(e.payApi || (e.payApi = {})).BasePay =
								(function () {
									function e() {}
									var t = e.prototype;
									return (
										(t.isPay = function () {
											return !1;
										}),
										(t.pay = function () {}),
										e
									);
								})();
						})(u || (u = {})),
						(function (e) {
							var t, n;
							(t = e.payApi || (e.payApi = {})),
								((n = (function () {
									function t() {
										this.pays = null;
									}
									t.getInstance = function () {
										return (
											this.instance ||
												((this.instance = new t()),
												this.instance.init()),
											this.instance
										);
									};
									var n = t.prototype;
									return (
										(n.init = function () {
											this.pays =
												e.core.PlatformManager.getInstance().getPlatformPay();
										}),
										(n.isPay = function () {
											var e = !1;
											return (
												this.pays &&
													(e = this.pays.isPay()),
												e
											);
										}),
										(n.pay = function (e, t) {
											this.pays && this.pays.pay(e, t);
										}),
										t
									);
								})()).instance = null),
								(t.PayManager = n);
						})(u || (u = {})),
						((u || (u = {})).Convert = (function () {
							function e() {}
							return (
								(e.MapToObj = function (e) {
									var t = Object.create(null);
									return (
										e.forEach(function (e, n) {
											t[n] = e;
										}),
										t
									);
								}),
								(e.MapToString = function (e) {
									var t = this.MapToObj(e);
									try {
										return JSON.stringify(t);
									} catch (n) {
										console.log(n);
									}
								}),
								(e.objToMap = function (e) {
									for (
										var t = new Map(),
											n = 0,
											o = Object.keys(e);
										n < o.length;
										n++
									) {
										var i = o[n];
										t.set(i, e[i]);
									}
									return t;
								}),
								(e.stringToMap = function (e) {
									try {
										var t = JSON.parse(e);
										return this.objToMap(t);
									} catch (n) {
										console.log(n);
									}
									return null;
								}),
								(e.objToMap_number = function (e) {
									for (
										var t = new Map(),
											n = 0,
											o = Object.keys(e);
										n < o.length;
										n++
									) {
										var i = o[n];
										try {
											var a = Number.parseInt(i);
											a && !isNaN(a) && t.set(a, e[i]);
										} catch (r) {}
									}
									return t;
								}),
								(e.stringToMap_number = function (e) {
									try {
										var t = JSON.parse(e);
										return this.objToMap_number(t);
									} catch (n) {
										console.log(n);
									}
								}),
								e
							);
						})()),
						(function (e) {
							var t = function () {
								(this.timeout = 1e4), (this.async = !0);
							};
							(e.HttpResponse = function () {}),
								(e.HttpUtil = (function () {
									function e() {}
									return (
										(e.quest = function () {}),
										(e.get = function (e, n, o) {
											var i = new t();
											'object' == typeof e
												? Object.assign(i, e)
												: 'string' == typeof e &&
												  (i.url = e),
												(i.method = 'get'),
												(i.cookie = n),
												this.quest(i, o);
										}),
										(e.post = function (e, n, o, i) {
											var a = new t();
											'object' == typeof e
												? Object.assign(a, e)
												: 'string' == typeof e &&
												  (a.url = e),
												(a.method = 'post'),
												(a.data = n),
												(a.cookie = o),
												this.quest(a, i);
										}),
										(e.getQueryString = function (e, t) {
											try {
												var n = new RegExp(
														'(^|&)' +
															t +
															'=([^&]*)(&|$)',
														'i'
													),
													o = e.substr(1).match(n);
												if (o) return unescape(o[2]);
											} catch (i) {}
											return null;
										}),
										(e.getQueryInt = function (e, t) {
											try {
												var n = Number.parseInt(
													this.getQueryString(e, t)
												);
												if (isNaN(n)) return null;
											} catch (o) {}
											return null;
										}),
										e
									);
								})());
						})(u || (u = {})),
						(function (e) {
							var t = (function () {
								function e() {
									this.code = -1;
								}
								return (
									(e.parse = function (t) {
										var n = new e();
										(n.http_status = t.status),
											(n.http_status_message =
												t.status_message),
											(n.duration = t.duration);
										try {
											var o = JSON.parse(t.body);
											(n.code = o.code),
												(n.data = o.data);
										} catch (i) {
											console.log(i);
										}
										return n;
									}),
									e
								);
							})();
							(e.LyHttpResponse = t),
								(e.LyHttp1 = (function () {
									function n() {}
									return (
										(n.get = function (n, o) {
											var i = this;
											e.HttpUtil.get(
												n,
												this.cookie,
												function (e) {
													o &&
														((i.cookie =
															e.xhr.getResponseHeader(
																'Set-Cookie'
															)),
														o(t.parse(e)));
												}
											);
										}),
										(n.post = function (n, o, i) {
											var a = this;
											e.HttpUtil.post(
												n,
												o,
												this.cookie,
												function (e) {
													i &&
														((a.cookie =
															e.xhr.getResponseHeader(
																'Set-Cookie'
															)),
														i(t.parse(e)));
												}
											);
										}),
										n
									);
								})());
						})(u || (u = {})),
						((u || (u = {})).TimeUtil = (function () {
							function e() {}
							return (
								(e.getDate = function () {
									var e,
										t,
										n = new Date(),
										o = '';
									return (
										(o += n.getFullYear()),
										(o +=
											(e = n.getMonth() + 1) >= 10
												? e
												: '0' + e),
										(o +=
											(t = n.getDate()) >= 10
												? t
												: '0' + t),
										Number.parseInt(o)
									);
								}),
								(e.isThisWeek = function (e) {
									return this.isSameWeek(e, new Date());
								}),
								(e.isSameWeek = function (e, t) {
									try {
										var n = Math.trunc(e.getTime() / 864e5),
											o = Math.trunc(t.getTime() / 864e5);
										return (
											Math.trunc((n + 3) / 7) ==
											Math.trunc((o + 3) / 7)
										);
									} catch (i) {
										console.log(i);
									}
									return !1;
								}),
								e
							);
						})()),
						(function (e) {
							var t;
							(t = e.core || (e.core = {})).NativePlatform =
								(function (n) {
									function o() {
										var e;
										return (
											((e =
												n.apply(this, arguments) ||
												this).user = null),
											(e.nativeAnalyticsEvent = null),
											e
										);
									}
									a(o, n);
									var i = o.prototype;
									return (
										(i.getPlatformType = function () {
											return e.PlatformDefine
												.Native_Android;
										}),
										(i.init = function () {
											return (
												(e.isLianYunChannel = !0),
												(e.nativeLoginType = 0),
												(e.isExitGame =
													this.isExitGame),
												(e.openExitGame =
													this.openExitGame),
												(e.isBadWord = this.isBadWord),
												(e.isPromote = function () {
													return !0;
												}),
												(e.getLoginType =
													this.getLoginType),
												(e.loginNative =
													this.loginNative),
												(e.doAuth = this.doAuth),
												(e.core.promote = null),
												(e.closeAd = this.closeAd),
												(e.isAdReady =
													this.getAdIsReady),
												(e.getAdIsReady =
													this.getAdIsReady),
												(e.openAd = this.openAd),
												(e.interstitialAdIsShow =
													this.interstitialAdIsShow),
												(e.showBannerAd =
													this.showBannerAd),
												(e.closeBannerAd =
													this.closeBannerAd),
												(e.showInterstitialAd =
													this.showInterstitialAd),
												(e.showRewardVideoAd =
													this.showRewardVideoAd),
												(e.loadRewardVideoAd =
													this.loadRewardVideoAd),
												(e.showSplashAd =
													this.showSplashAd),
												(e.loadExpressAd =
													this.loadNativeAd),
												(e.closeNativeAd =
													this.closeNativeAd),
												(e.openExpressAd =
													this.openExpressAd),
												(e.nativeAdIsShow =
													this.nativeAdIsShow),
												(e.onInitCallBack =
													this.onInitCallBack),
												(e.onLookedCallBack =
													this.onLookedCallBack),
												(e.openPrivacyPolicy =
													this.openPrivacyPolicy),
												(e.openUserAgreement =
													this.openUserAgreement),
												(e.openFeedback =
													this.openFeedback),
												(e.queryPlatform =
													this.queryPlatform),
												(e.gameContentShow =
													this.gameContentShow),
												(e.JumpToOtherpush =
													this.JumpToOtherpush),
												(e.onMoreGameSwitchCallback =
													this.onMoreGameSwitchCallback),
												(e.checkMoreGameSwitch =
													this.checkMoreGameSwitch),
												(e.gameLevelEvent =
													this.gameLevelEvent),
												(e.ordinaryEvent =
													this.ordinaryEvent),
												(e.doGetUserInfo =
													this.doGetUserInfo),
												(e.onLoginedCallBack =
													this.onLoginedCallBack),
												(e.obtainGameControlConf =
													this.obtainGameControlConf),
												(e.analytics = {
													startLevel: function (t) {
														e.gameLevelEvent(
															'Level_' + t,
															0,
															0,
															''
														);
													},
													finishLevel: function (t) {
														e.gameLevelEvent(
															'Level_' + t,
															1,
															1e5,
															''
														);
													},
													failLevel: function (t) {
														e.gameLevelEvent(
															'Level_' + t,
															-1,
															1e5,
															''
														);
													},
													event: function (t) {
														e.ordinaryEvent(t);
													}
												}),
												(e.ads = null),
												(this.nativeAnalyticsEvent =
													function () {}),
												!0
											);
										}),
										(i.onLoginedCallBack = function (e) {
											e && 0 == e.code && e.data,
												this._onloginCallBack &&
													this._onloginCallBack();
										}),
										(i.doGetUserInfo = function () {
											var e = '';
											return (
												h() &&
													((e =
														jsb.reflection.callStaticMethod(
															p,
															'doGetUserInfo',
															'()V'
														)),
													d(
														'-------------\tdoGetUserInfo _result:',
														e
													)),
												e
											);
										}),
										(i.gameLevelEvent = function (
											e,
											t,
											n,
											o
										) {
											if (h()) {
												var i =
													jsb.reflection.callStaticMethod(
														g,
														'gameLevelEvent',
														'(Ljava/lang/String;IJLjava/lang/String;)V',
														e,
														t,
														n,
														o
													);
												console.log(
													'gameLevelEvent ret : ',
													i
												);
											}
										}),
										(i.ordinaryEvent = function (e) {
											if (h()) {
												var t =
													jsb.reflection.callStaticMethod(
														g,
														'ordinaryEvent',
														'(Ljava/lang/String;)V',
														e
													);
												console.log(
													'ordinaryEvent ret : ',
													t
												);
											}
										}),
										(i.getLoginType = function () {
											return e.nativeLoginType;
										}),
										(i.doAuth = function () {
											var e = '';
											return (
												h() &&
													((e =
														jsb.reflection.callStaticMethod(
															p,
															'doGetVerifiedInfo',
															'()V'
														)),
													d(
														'-------------\tdoGetVerifiedInfo _result:',
														e
													)),
												e
											);
										}),
										(i.loginNative = function (e) {
											this._onloginCallBack = e;
											var t = !1;
											return (
												h()
													? ((t =
															jsb.reflection.callStaticMethod(
																p,
																'doLogin',
																'()V'
															)),
													  d(
															'-------------doLogin _result:',
															t
													  ))
													: e({ userinfo: 0 }),
												!1
											);
										}),
										(i.checkMoreGameSwitch = function (e) {
											(this.mMoreGameSwitchCallBack = e),
												h() &&
													jsb.reflection.callStaticMethod(
														g,
														'queryCollectionGameSwitch',
														'()V'
													);
										}),
										(i.closeAd = function (e) {
											'banner' == e
												? (console.log(
														'\u5173\u95edBanner'
												  ),
												  this.closeBannerAd())
												: 'express' == e &&
												  this.closeNativeAd();
										}),
										(i.JumpToOtherpush = function () {
											var e = !1;
											return (
												h() &&
													((e =
														jsb.reflection.callStaticMethod(
															p,
															'jumpLeisureSubject',
															'()V'
														)),
													d(
														'-------------jumpLeisureSubject _result:',
														e
													)),
												e
											);
										}),
										(i.openAd = function (e, t, n) {
											switch (
												(void 0 === t && (t = null),
												void 0 === n && (n = null),
												console.log(
													'\u6253\u5f00\u5e7f\u544a \uff1a ',
													e
												),
												e)
											) {
												case 'banner':
													this.showBannerAd(105);
													break;
												case 'game_video':
												case 'video':
													this.showRewardVideoAd(
														t,
														n
													);
													break;
												case 'inters':
												case 'game_chapin':
													this.showInterstitialAd(
														null,
														t,
														n
													);
													break;
												case 'splash':
													this.showSplashAd();
											}
										}),
										(i.onInitCallBack = function (e) {
											d(
												'-------- onInitCallBack:',
												JSON.stringify(e)
											);
										}),
										(i.onMoreGameSwitchCallback = function (
											e
										) {
											this.mMoreGameSwitchCallBack
												? this.mMoreGameSwitchCallBack(
														e
												  )
												: console.error(
														'\u56de\u8c03\u51fd\u6570\u662f\u7a7a'
												  );
										}),
										(i.onLookedCallBack = function (e) {
											d(
												'-------- onLookedCallBack:',
												JSON.stringify(e)
											);
											var t = e.code,
												n = e.data;
											'video' == n
												? ('function' ==
														typeof this
															.mVideoCloseCallBack &&
														this.mVideoCloseCallBack(
															t
														),
												  (this.mVideoCloseCallBack =
														null))
												: 'inters' == n
												? ('function' ==
														typeof this
															.mIntersCloseCallBack &&
														this.mIntersCloseCallBack(
															t
														),
												  (this.mIntersCloseCallBack =
														null))
												: console.error(
														'\u56de\u8c03\u51fd\u6570\u662f\u7a7a'
												  );
										}),
										(i.isExitGame = function () {
											return !0;
										}),
										(i.openExitGame = function () {
											var e = !1;
											h() &&
												((e =
													jsb.reflection.callStaticMethod(
														p,
														'doExit',
														'()V'
													)),
												d(
													'-------------openExitGame _result:',
													e
												));
										}),
										(i.isBadWord = function () {
											return !1;
										}),
										(i.getAdIsReady = function (e) {
											var t = !1;
											if (h())
												switch (e) {
													case 'banner':
														t = !0;
														break;
													case 'game_video':
													case 'video':
														t =
															jsb.reflection.callStaticMethod(
																p,
																'rewardVideoIsReady',
																'()Z'
															);
														break;
													case 'inters':
													case 'game_chapin':
														t =
															jsb.reflection.callStaticMethod(
																p,
																'interstitialIsReady',
																'(I)Z',
																null
															);
														break;
													case 'splash':
														t = !0;
												}
											return t;
										}),
										(i.interstitialAdIsShow = function () {
											if (h()) {
												var e =
													jsb.reflection.callStaticMethod(
														p,
														'interstitialAdIsShow',
														'()V'
													);
												console.log(
													'-------------interstitialAdIsShow _result:',
													e
												);
											}
										}),
										(i.showBannerAd = function (e) {
											if (h()) {
												var t =
													jsb.reflection.callStaticMethod(
														p,
														'showBannerAd',
														'(I)V',
														e
													);
												console.log(
													'-------------showBannerAd _result:',
													t
												);
											}
										}),
										(i.closeBannerAd = function () {
											if (h()) {
												var e =
													jsb.reflection.callStaticMethod(
														p,
														'closeBannerAd',
														'()V'
													);
												console.log(
													'-------------closeBannerAd _result:',
													e
												);
											}
										}),
										(i.showInterstitialAd = function (
											e,
											t,
											n
										) {
											if (h()) {
												this.mIntersCloseCallBack = n;
												var o =
													jsb.reflection.callStaticMethod(
														p,
														'showInterstitialAd',
														'(I)V',
														e
													);
												console.log(
													'-------------showInterstitialAd _result:',
													o
												);
											}
										}),
										(i.showRewardVideoAd = function (e, t) {
											if (h()) {
												this.mVideoCloseCallBack = t;
												var n =
													jsb.reflection.callStaticMethod(
														p,
														'showRewardVideoAd',
														'()V'
													);
												console.log(
													'-------------showRewardVideoAd _result:',
													n
												);
											}
										}),
										(i.loadRewardVideoAd = function () {
											if (h()) {
												var e =
													jsb.reflection.callStaticMethod(
														p,
														'loadRewardVideoAd',
														'()V'
													);
												console.log(
													'-------------loadRewardVideoAd _result:',
													e
												);
											}
										}),
										(i.showSplashAd = function () {
											if (h()) {
												var e =
													jsb.reflection.callStaticMethod(
														p,
														'showSplashAd',
														'()V'
													);
												console.log(
													'-------------showSplashAd _result:',
													e
												);
											}
										}),
										(i.loadNativeAd = function (
											e,
											t,
											n,
											o,
											i
										) {
											if (
												(void 0 === t && (t = 0),
												void 0 === n && (n = 0),
												void 0 === o && (o = 0),
												void 0 === i && (i = 0),
												h())
											) {
												var a =
													jsb.reflection.callStaticMethod(
														p,
														'loadNativeAd',
														'(IIII)V',
														10,
														10,
														10,
														10
													);
												console.log(
													'-------------loadNativeAd _result:',
													a
												);
											}
										}),
										(i.closeNativeAd = function () {
											if (h()) {
												var e =
													jsb.reflection.callStaticMethod(
														p,
														'closeNativeAd',
														'()V'
													);
												console.log(
													'-------------closeNativeAd _result:',
													e
												);
											}
										}),
										(i.openExpressAd = function (
											e,
											t,
											n,
											o,
											i,
											a
										) {
											if (h()) {
												console.log(
													'\u6253\u5f00\u539f\u751f\u5e7f\u544a'
												);
												var r =
													jsb.reflection.callStaticMethod(
														p,
														'showNativeAd',
														'(IIIII)V',
														t,
														n,
														o,
														i,
														a
													);
												console.log(
													'-------------openExpressAd _result:',
													r
												);
											}
										}),
										(i.nativeAdIsShow = function () {
											if (h()) {
												var e =
													jsb.reflection.callStaticMethod(
														p,
														'nativeAdIsShow',
														'()V'
													);
												console.log(
													'-------------nativeAdIsShow _result:',
													e
												);
											}
										}),
										(i.openPrivacyPolicy = function () {
											if (h()) {
												var e =
													jsb.reflection.callStaticMethod(
														g,
														'showPrivacyPolicy',
														'()V'
													);
												d(
													'-------------showPrivacyPolicy _result:',
													e
												);
											}
										}),
										(i.openUserAgreement = function () {
											if (h()) {
												var e =
													jsb.reflection.callStaticMethod(
														g,
														'showUserAgreement',
														'()V'
													);
												d(
													'-------------showUserAgreement _result:',
													e
												);
											}
										}),
										(i.openFeedback = function () {
											if (h()) {
												var e =
													jsb.reflection.callStaticMethod(
														g,
														'showFeedback',
														'()V'
													);
												d(
													'-------------showUserAgreement _result:',
													e
												);
											}
										}),
										(i.queryPlatform = function () {
											var e = 'web';
											return (
												h() &&
													(e =
														jsb.reflection.callStaticMethod(
															g,
															'queryPlatform',
															'()Ljava/lang/String;'
														)),
												e
											);
										}),
										(i.payApiPay = function () {}),
										(i.gameContentShow = function () {
											var e = !1;
											return (
												h() &&
													(e =
														jsb.reflection.callStaticMethod(
															g,
															'gameContentShow',
															'()V'
														)),
												e
											);
										}),
										(i.showToast = function (e) {
											if (h()) {
												var t =
													jsb.reflection.callStaticMethod(
														g,
														'showToast',
														'(Ljava/lang/String;)V',
														e
													);
												d(
													'-------------showToast _result:',
													t
												);
											}
											return null;
										}),
										(i.login = function (e) {
											console.log('native login'),
												(this.user =
													new t.NativeUser()),
												this.user.login(function (t) {
													e(0 == t);
												});
										}),
										(i.logout = function () {
											this.user = null;
										}),
										(i.checkThirdAuthUserInfo = function (
											e,
											t
										) {
											this.user &&
												t &&
												this.user.syncThirdUserInfo(),
												e(!0);
										}),
										(i.getUser = function () {
											return this.user;
										}),
										(i.getThirdUserInfoOriginal = function (
											e
										) {
											e && e(null);
										}),
										(i.parseThirdUserInfoOriginal =
											function () {
												return null;
											}),
										(i.obtainGameControlConf = function (
											e,
											t
										) {
											var n = t;
											return (
												h() &&
													((n =
														jsb.reflection.callStaticMethod(
															p,
															'obtainGameControlConf',
															'(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;',
															e,
															t
														)),
													console.log(
														'obtainGameControlConf ret : ',
														n
													)),
												n
											);
										}),
										o
									);
								})(t.BasePlatform);
						})(u || (u = {})),
						(function (e) {
							var t;
							(t = e.core || (e.core = {})).NativeUser =
								(function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									a(o, n);
									var i = o.prototype;
									return (
										(i.login = function (n) {
											var o = this,
												i =
													e.ConstInner
														.URL_DOMAIN_LOGIN +
													e.ConstInner
														.URL_DOMAIN_LOGIN_INTERFACE,
												a = 'chessMaster_channel',
												r = localStorage.getItem(
													'userSourceId_' + a
												);
											(r && r.length > 0) ||
												((r = (r =
													a +
													'_' +
													this._getRandomID()).substr(
													0,
													32
												)),
												localStorage.setItem(
													'userSourceId_' + a,
													r
												));
											var s = {
												source: 'android',
												source_id: r,
												game: e.getAppConfig().appId
											};
											console.log(
												'native login data: ' +
													JSON.stringify(s)
											),
												e.LyHttp1.post(
													{ url: i, timeout: 5e3 },
													JSON.stringify(s),
													function (e) {
														console.log(
															'login info:' +
																JSON.stringify(
																	e
																)
														),
															console.log(
																'native login code: ' +
																	e.code
															);
														var i = 1;
														if (0 == e.code)
															try {
																var r =
																	new t.NetUserInfo();
																Object.assign(
																	r,
																	e.data
																),
																	o.setUserInfo(
																		r.toUserInfo()
																	),
																	o.syncThirdUserInfo(),
																	(i = 0);
															} catch (a) {
																(i = 1),
																	console.log(
																		a
																	);
															}
														else i = -1;
														n(i);
													}
												);
										}),
										(i._getRandomID = function () {
											for (
												var e =
														'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
															''
														),
													t =
														new Date().getTime() +
														'_',
													n = 0;
												n < 32;
												n++
											)
												t +=
													e[
														Math.round(
															Math.random() *
																e.length
														)
													];
											return t;
										}),
										o
									);
								})(t.NetUser);
						})(u || (u = {})),
						(function (e) {
							var t;
							(t = e.core || (e.core = {})).HtmlPlatfrom =
								(function (n) {
									function o() {
										var e;
										return (
											((e =
												n.apply(this, arguments) ||
												this).user = null),
											e
										);
									}
									a(o, n);
									var i = o.prototype;
									return (
										(i.getPlatformType = function () {
											return e.PlatformDefine.Web;
										}),
										(i.init = function () {
											return !0;
										}),
										(i.isShare = function () {
											return !1;
										}),
										(i.login = function (e) {
											(this.user = new t.HtmlUser()),
												this.user.login(function (t) {
													e(0 == t);
												});
										}),
										(i.logout = function () {
											this.user = null;
										}),
										(i.checkThirdAuthUserInfo =
											function () {}),
										(i.getUser = function () {
											return this.user;
										}),
										(i.getThirdUserInfoOriginal =
											function () {}),
										(i.parseThirdUserInfoOriginal =
											function () {
												return null;
											}),
										o
									);
								})(t.BasePlatform);
						})(u || (u = {})),
						(function (e) {
							var t;
							(t = e.core || (e.core = {})).HtmlUser = (function (
								n
							) {
								function o() {
									var e;
									return (
										((e =
											n.apply(this, arguments) ||
											this).userSourceId = null),
										e
									);
								}
								return (
									a(o, n),
									(o.prototype.login = function (n, o) {
										var i = this;
										void 0 === o && (o = null);
										var a =
												e.ConstInner.URL_DOMAIN_LOGIN +
												e.ConstInner
													.URL_DOMAIN_LOGIN_INTERFACE,
											r =
												localStorage.getItem(
													'userSourceId'
												),
											s = !0;
										r ||
											((s = !1),
											(r =
												o && o.code
													? o.code
													: '' +
													  Math.floor(
															1e9 * Math.random()
													  )));
										var c = {
											source: 'web',
											source_id: r,
											game: 'zgxq'
										};
										console.log('HtmlUser - data:', c),
											e.LyHttp1.post(
												{ url: a, timeout: 5e3 },
												JSON.stringify(c),
												function (e) {
													var o = 1;
													if (
														(console.log(
															'HtmlUser - lyHttpResponse:',
															e
														),
														0 == e.code)
													)
														try {
															var r =
																new t.NetUserInfo();
															Object.assign(
																r,
																e.data
															),
																i.setUserInfo(
																	r.toUserInfo()
																),
																s ||
																	((i.userSourceId =
																		e.data.sourceId),
																	localStorage.setItem(
																		'userSourceId',
																		i.userSourceId
																	)),
																i.syncThirdUserInfo(),
																(o = 0);
														} catch (a) {
															(o = 1),
																console.log(a);
														}
													else o = -1;
													n(o);
												}
											);
									}),
									o
								);
							})(t.NetUser);
						})(u || (u = {})),
						(('undefined' == typeof window ? e : window).lyLib1 =
							u),
						cc._RF.pop();
				}).call(
					this,
					'undefined' != typeof global
						? global
						: 'undefined' != typeof self
						? self
						: 'undefined' != typeof window
						? window
						: {}
				);
			},
			{}
		],
		lygame: [
			function (e, t) {
				(function (e) {
					'use strict';
					function n(e) {
						if (void 0 === e)
							throw new ReferenceError(
								"this hasn't been initialised - super() hasn't been called"
							);
						return e;
					}
					function o(e, t) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n];
							(o.enumerable = o.enumerable || !1),
								(o.configurable = !0),
								'value' in o && (o.writable = !0),
								Object.defineProperty(e, o.key, o);
						}
					}
					function i(e, t, n) {
						return (
							t && o(e.prototype, t),
							n && o(e, n),
							Object.defineProperty(e, 'prototype', {
								writable: !1
							}),
							e
						);
					}
					function a(e, t) {
						(e.prototype = Object.create(t.prototype)),
							(e.prototype.constructor = e),
							r(e, t);
					}
					function r(e, t) {
						return (r = Object.setPrototypeOf
							? Object.setPrototypeOf.bind()
							: function (e, t) {
									return (e.__proto__ = t), e;
							  })(e, t);
					}
					function s(e, t) {
						var n =
							('undefined' != typeof Symbol &&
								e[Symbol.iterator]) ||
							e['@@iterator'];
						if (n) return (n = n.call(e)).next.bind(n);
						if (
							Array.isArray(e) ||
							(n = c(e)) ||
							(t && e && 'number' == typeof e.length)
						) {
							n && (e = n);
							var o = 0;
							return function () {
								return o >= e.length
									? { done: !0 }
									: { done: !1, value: e[o++] };
							};
						}
						throw new TypeError(
							'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						);
					}
					function c(e, t) {
						if (e) {
							if ('string' == typeof e) return l(e, t);
							var n = Object.prototype.toString
								.call(e)
								.slice(8, -1);
							return (
								'Object' === n &&
									e.constructor &&
									(n = e.constructor.name),
								'Map' === n || 'Set' === n
									? Array.from(e)
									: 'Arguments' === n ||
									  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
											n
									  )
									? l(e, t)
									: void 0
							);
						}
					}
					function l(e, t) {
						(null == t || t > e.length) && (t = e.length);
						for (var n = 0, o = new Array(t); n < t; n++)
							o[n] = e[n];
						return o;
					}
					var d, u;
					cc._RF.push(t, 'd9697Rn+HZM8bd5GPlkDCh9', 'lygame'),
						(d = f || (f = {})),
						((u = function () {}).UnKnown = 0),
						(u.Web = 1),
						(u.H5 = 2),
						(u.Native_Android = 3),
						(u.Native_IOS = 4),
						(u.GoogleInstantApp = 10),
						(u.Facebook = 11),
						(u.WeChatGame = 12),
						(u.QQPlay = 13),
						(u.BaiduGame = 14),
						(u.TouTiaoGame = 15),
						(u.LyH5Game = 99),
						(u.OppoQuickGame = 100),
						(u.VivoQuickGame = 101),
						(u.HuaweiQuickGame = 102),
						(u.MiQuickGame = 103),
						(u.QQminiGame = 104),
						(u.QTTGame = 105),
						(u.FtnnMiniGame = 106),
						(u.UCGame = 107),
						(u.LianShangMiniGame = 108),
						(u.MeizuMiniGame = 109),
						(u.HelloMiniGame = 110),
						(d.PlatformDefine = u),
						(function (e) {
							var t = function () {};
							(t.RankMode_week = 'week'),
								(t.RankMode_all = 'all'),
								(t.RankMode_friendWeek = 'friendWeek'),
								(t.RankMode_friendAll = 'friendAll'),
								(t.RankMode_groupWeek = 'groupWeek'),
								(t.RankMode_groupAll = 'groupAll'),
								(t.User_Info_Name = 'user_name'),
								(t.User_Info_Phone = 'user_phone'),
								(t.User_Info_Image = 'user_image'),
								(t.User_Info_Sex = 'user_sex'),
								(e.Constants = t);
						})(f || (f = {})),
						(function (e) {
							function t(t) {
								e.AppConfigManager.getInstance().setAppConfig(
									t
								),
									e.core.PlatformManager.getInstance(),
									e.core.promote &&
										e.core.promote.PromoteManager.getInstance(),
									e.ads && e.ads.AdManager.getInstance();
							}
							function n() {
								return e.core.PlatformManager.getInstance().getPlatformType();
							}
							function o() {
								return e.AppConfigManager.getInstance().getAppConfig();
							}
							function i(t) {
								return e.core.PlatformManager.getInstance().showToast(
									t
								);
							}
							function a() {
								return !1;
							}
							function r(e) {
								e && e(!1);
							}
							function s() {
								return !1;
							}
							function c() {
								return !1;
							}
							function l() {}
							function d(t) {
								e.core.PlatformManager.getInstance().onPauseMusic(
									t
								);
							}
							function u(t) {
								e.core.PlatformManager.getInstance().onResumeMusic(
									t
								);
							}
							function f() {
								return e.core.promote.PromoteManager.getInstance().isPromote();
							}
							function h(t, n) {
								return e.core.promote.PromoteManager.getInstance().getPromoteItem(
									t,
									n
								);
							}
							function p(t) {
								return e.core.PlatformManager.getInstance().doGetAntiAddictionInfo(
									t
								);
							}
							function g() {
								return e.core.PlatformManager.getInstance().hasVibrate();
							}
							function m(t, n) {
								return e.core.PlatformManager.getInstance().vibrate(
									t,
									n
								);
							}
							function y() {
								return e.core.PlatformManager.getInstance().cancelVibrate();
							}
							function A() {
								return e.core.WithDrawManager.getInstance().checkCanBonus();
							}
							function v(t, n) {
								e.core.WithDrawManager.getInstance().takeBonus(
									t,
									n
								);
							}
							function _(t, n) {
								e.core.WithDrawManager.getInstance().takeBonusByPosID(
									t,
									n
								);
							}
							(e.init = t),
								(e.init = t),
								(e.getPlatformType = n),
								(e.getPlatformType = n),
								(e.getAppConfig = o),
								(e.getAppConfig = o),
								(e.showToast = i),
								(e.showToast = i),
								(e.isExitGame = a),
								(e.isExitGame = a),
								(e.openExitGame = r),
								(e.openExitGame = r),
								(e.isBadWord = s),
								(e.isBadWord = s),
								(e.isComment = c),
								(e.isComment = c),
								(e.openComment = l),
								(e.openComment = l),
								(e.onPauseMusic = d),
								(e.onPauseMusic = d),
								(e.onResumeMusic = u),
								(e.onResumeMusic = u),
								(e.isPromote = f),
								(e.isPromote = f),
								(e.getPromoteItem = h),
								(e.getPromoteItem = h),
								(e.doGetAntiAddictionInfo = p),
								(e.doGetAntiAddictionInfo = p),
								(e.hasVibrate = g),
								(e.hasVibrate = g),
								(e.vibrate = m),
								(e.vibrate = m),
								(e.cancelVibrate = y),
								(e.cancelVibrate = y),
								(e.checkCanBonus = A),
								(e.checkCanBonus = A),
								(e.takeBonus = v),
								(e.takeBonus = v),
								(e.takeBonusByPosID = _),
								(e.takeBonusByPosID = _);
						})(f || (f = {})),
						(function (e) {
							function t() {
								return !1;
							}
							function n(t) {
								e.core.PlatformManager.getInstance().login(t);
							}
							function o(t) {
								e.core.PlatformManager.getInstance().loginGuest(
									t
								);
							}
							function i(t, n, o) {
								e.core.PlatformManager.getInstance().loginTP(
									t,
									n,
									o
								);
							}
							function a() {
								e.core.PlatformManager.getInstance().logout();
							}
							function r() {
								return e.core.PlatformManager.getInstance().getLoginType();
							}
							(e.LoginInfo = (function () {
								return function () {};
							})()),
								(e.isSupportLogin = t),
								(e.isSupportLogin = t),
								(e.login = n),
								(e.login = n),
								(e.loginGuest = o),
								(e.loginGuest = o),
								(e.loginTP = i),
								(e.loginTP = i),
								(e.logout = a),
								(e.logout = a),
								(e.getLoginType = r),
								(e.getLoginType = r),
								(e.checkThirdAuthUserInfo = function (t) {
									e.core.PlatformManager.getInstance().checkThirdAuthUserInfo(
										t,
										!0
									);
								}),
								(e.getSelfUser = function () {
									return e.core.PlatformManager.getInstance().getUser();
								}),
								(e.getThirdUserInfo = function (t) {
									e.core.PlatformManager.getInstance().getThirdUserInfo(
										t
									);
								}),
								(e.getThirdUserInfoOriginal = function (t) {
									e.core.PlatformManager.getInstance().getThirdUserInfoOriginal(
										t
									);
								}),
								(e.parseThirdUserInfoOriginal = function (t) {
									return e.core.PlatformManager.getInstance().parseThirdUserInfoOriginal(
										t
									);
								}),
								(e.getRank = function (t, n) {
									e.RankManager.getInstance().getRank(t, n);
								}),
								(e.updateRank = function (t, n, o) {
									void 0 === o && (o = 0),
										e.RankManager.getInstance().updateRank(
											t,
											n,
											o
										);
								});
						})(f || (f = {})),
						(function (e) {
							function t(t) {
								e.ads.AdManager.getInstance().preloadAd(t);
							}
							function n(t) {
								return e.ads.AdManager.getInstance().isAdReady(
									t
								);
							}
							function o(t, n, o) {
								e.ads.AdManager.getInstance().openAd(t, n, o);
							}
							function i(t) {
								e.ads.AdManager.getInstance().closeAd(t);
							}
							function a() {
								e.ads.AdManager.getInstance().closeAllBanner();
							}
							function r(t, n, o) {
								e.ads.AdManager.getInstance().loadExpressAd(
									t,
									n,
									o
								);
							}
							function s(t, n, o, i, a, r, s) {
								e.ads.AdManager.getInstance().openExpressAd(
									t,
									n,
									o,
									i,
									a,
									r,
									s
								);
							}
							(e.switchOnAd = function () {}),
								(e.switchOffAd = function () {}),
								(e.getAdPositionParam = function () {
									return null;
								}),
								(e.preloadAd = t),
								(e.preloadAd = t),
								(e.isAdReady = n),
								(e.isAdReady = n),
								(e.openAd = o),
								(e.openAd = o),
								(e.closeAd = i),
								(e.closeAd = i),
								(e.closeAllBannerAd = a),
								(e.closeAllBannerAd = a),
								(e.loadExpressAd = r),
								(e.loadExpressAd = r),
								(e.openExpressAd = s),
								(e.loadExpreopenExpressAdsAd = s);
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								function n() {
									1 == arguments.length
										? t.AnalyticsManager.getInstance().profileSignIn(
												arguments.length <= 0
													? void 0
													: arguments[0]
										  )
										: 2 == arguments.length &&
										  t.AnalyticsManager.getInstance().profileSignIn2(
												arguments.length <= 0
													? void 0
													: arguments[0],
												arguments.length <= 1
													? void 0
													: arguments[1]
										  );
								}
								function o() {
									t.AnalyticsManager.getInstance().profileSignOff();
								}
								function i(e) {
									t.AnalyticsManager.getInstance().setPlayerLevel(
										e
									);
								}
								function a() {
									3 == arguments.length
										? t.AnalyticsManager.getInstance().pay(
												arguments.length <= 0
													? void 0
													: arguments[0],
												arguments.length <= 1
													? void 0
													: arguments[1],
												arguments.length <= 2
													? void 0
													: arguments[2]
										  )
										: 5 == arguments.length &&
										  t.AnalyticsManager.getInstance().pay2(
												arguments.length <= 0
													? void 0
													: arguments[0],
												arguments.length <= 1
													? void 0
													: arguments[1],
												arguments.length <= 2
													? void 0
													: arguments[2],
												arguments.length <= 3
													? void 0
													: arguments[3],
												arguments.length <= 4
													? void 0
													: arguments[4]
										  );
								}
								function r(e, n, o) {
									t.AnalyticsManager.getInstance().buy(
										e,
										n,
										o
									);
								}
								function s(e, n, o) {
									t.AnalyticsManager.getInstance().use(
										e,
										n,
										o
									);
								}
								function c() {
									2 == arguments.length
										? t.AnalyticsManager.getInstance().bonus(
												arguments.length <= 0
													? void 0
													: arguments[0],
												arguments.length <= 1
													? void 0
													: arguments[1]
										  )
										: 4 == arguments.length &&
										  t.AnalyticsManager.getInstance().bonus2(
												arguments.length <= 0
													? void 0
													: arguments[0],
												arguments.length <= 1
													? void 0
													: arguments[1],
												arguments.length <= 2
													? void 0
													: arguments[2],
												arguments.length <= 3
													? void 0
													: arguments[3]
										  );
								}
								function l(e) {
									t.AnalyticsManager.getInstance().startLevel(
										e
									);
								}
								function d(e, n) {
									t.AnalyticsManager.getInstance().finishLevel(
										e,
										n
									);
								}
								function u(e, n) {
									t.AnalyticsManager.getInstance().failLevel(
										e,
										n
									);
								}
								function f() {
									1 == arguments.length
										? t.AnalyticsManager.getInstance().event(
												arguments.length <= 0
													? void 0
													: arguments[0]
										  )
										: 2 == arguments.length
										? 'string' ==
										  typeof (arguments.length <= 1
												? void 0
												: arguments[1])
											? t.AnalyticsManager.getInstance().event2(
													arguments.length <= 0
														? void 0
														: arguments[0],
													arguments.length <= 1
														? void 0
														: arguments[1]
											  )
											: t.AnalyticsManager.getInstance().event3(
													arguments.length <= 0
														? void 0
														: arguments[0],
													arguments.length <= 1
														? void 0
														: arguments[1]
											  )
										: 3 == arguments.length &&
										  t.AnalyticsManager.getInstance().event4(
												arguments.length <= 0
													? void 0
													: arguments[0],
												arguments.length <= 1
													? void 0
													: arguments[1],
												arguments.length <= 2
													? void 0
													: arguments[2]
										  );
								}
								(t.profileSignIn = n),
									(e.analytics.profileSignIn = n),
									(t.profileSignOff = o),
									(e.analytics.profileSignOff = o),
									(t.setPlayerLevel = i),
									(e.analytics.setPlayerLevel = i),
									(t.pay = a),
									(e.analytics.pay = a),
									(t.buy = r),
									(e.analytics.buy = r),
									(t.use = s),
									(e.analytics.use = s),
									(t.bonus = c),
									(e.analytics.bonus = c),
									(t.startLevel = l),
									(e.analytics.startLevel = l),
									(t.finishLevel = d),
									(e.analytics.finishLevel = d),
									(t.failLevel = u),
									(e.analytics.failLevel = u),
									(t.event = f),
									(e.analytics.event = f);
							})(e.analytics || (e.analytics = {}));
						})(f || (f = {})),
						(function (e) {
							function t() {
								return e.payApi.PayManager.getInstance().isPay();
							}
							function n(t, n) {
								e.payApi.PayManager.getInstance().pay(t, n);
							}
							function o(t, n) {
								e.payApi.PayManager.getInstance().payOrderNum(
									t,
									n
								);
							}
							function i(t) {
								e.payApi.PayManager.getInstance().checkWaitHandleOrder(
									t
								);
							}
							(e.isPay = t),
								(e.isPay = t),
								(e.pay = n),
								(e.pay = n),
								(e.payOrderNum = o),
								(e.payOrderNum = o),
								(e.checkWaitHandleOrder = i),
								(e.checkWaitHandleOrder = i);
						})(f || (f = {})),
						(function (e) {
							(e.ShareParam = (function () {
								return function () {};
							})()),
								(e.isShare = function () {
									return e.core.PlatformManager.getInstance().isShare();
								}),
								(e.share = function (t, n, o) {
									e.core.PlatformManager.getInstance().share(
										t.title,
										t.imageUrl,
										n,
										o
									);
								}),
								(e.shareGroupRank = function (t, n, o) {
									e.core.PlatformManager.getInstance().shareGroupRank(
										t.title,
										t.imageUrl,
										n,
										o
									);
								}),
								(e.onRequestShareParam = function (t) {
									e.core.PlatformManager.getInstance().setOnRequestShareParam(
										t
									);
								});
						})(f || (f = {})),
						(function (e) {
							(function (e) {
								var t;
								function n(e) {
									switch (e) {
										case 'any':
											return t.any;
										case 'splash':
											return t.splash;
										case 'banner':
											return t.banner;
										case 'interstitial':
											return t.interstitial;
										case 'video':
											return t.video;
										case 'interaction':
											return t.interaction;
										case 'interstitialVideo':
											return t.interstitialVideo;
									}
									return null;
								}
								(function (e) {
									(e[(e.Inited = 0)] = 'Inited'),
										(e[(e.Loading = 1)] = 'Loading'),
										(e[(e.LoadSuccess = 2)] =
											'LoadSuccess'),
										(e[(e.LoadFail = 3)] = 'LoadFail'),
										(e[(e.Showing = 4)] = 'Showing'),
										(e[(e.ShowSuccess = 5)] =
											'ShowSuccess'),
										(e[(e.ShowFail = 6)] = 'ShowFail'),
										(e[(e.Closing = 7)] = 'Closing'),
										(e[(e.Closed = 8)] = 'Closed');
								})(e.AdStatus || (e.AdStatus = {})),
									(function (e) {
										(e.any = 'any'),
											(e.splash = 'splash'),
											(e.banner = 'banner'),
											(e.interstitial = 'interstitial'),
											(e.video = 'video'),
											(e.interaction = 'interaction'),
											(e.interstitialVideo =
												'interstitialVideo');
									})((t = e.AdType || (e.AdType = {})));
								var o = function () {
									(this.refreshInterval = 30),
										(this.loadFailCount = 0),
										(this.loadFailLastTime = 0);
								};
								e.AdSourcePlacement = o;
								var i = function () {
									this.adSourcePlacementList = new Array();
								};
								e.AdSource = i;
								var a = function () {
									(this.type = t.any),
										(this.refreshInterval = 30),
										(this.closeReopenInterval = 30),
										(this.adSourcePlacementList =
											new Map());
								};
								e.AdPosition = a;
								var r = (function () {
									function e() {
										(this.adSourceList = new Array()),
											(this.adSourcePlacementList =
												new Map()),
											(this.adPositionList = new Array());
									}
									e.fromJson = function (t) {
										if (t && t.adSources && t.adPositions)
											try {
												var n = new e();
												return n.parseAdConfig(t), n;
											} catch (u) {
												console.error(u);
											}
										return null;
									};
									var t = e.prototype;
									return (
										(t.parseAdConfig = function (e) {
											for (
												var t, r = s(e.adSources);
												!(t = r()).done;

											) {
												var c = t.value,
													l = new i();
												if (
													((l.name = c.name),
													(l.appId = c.appId),
													(l.appKey = c.appKey),
													c.placements)
												)
													for (
														var d,
															u = s(c.placements);
														!(d = u()).done;

													) {
														var f = d.value,
															h = new o();
														(h.adSource = l),
															(h.identifier =
																f.identifier),
															(h.type = n(
																f.type
															)),
															(h.placementId =
																f.placementId),
															l.adSourcePlacementList.push(
																h
															),
															this.adSourcePlacementList.set(
																l.name +
																	'.' +
																	h.identifier,
																h
															);
													}
												this.adSourceList.push(l);
											}
											for (
												var p, g = s(e.adPositions);
												!(p = g()).done;

											) {
												var m = p.value,
													y = new a();
												y.name = m.name;
												var A = n(m.type);
												A && (y.type = A),
													(y.percent = m.percent),
													m.refreshInterval &&
														(y.refreshInterval =
															m.refreshInterval),
													m.closeReopenInterval &&
														(y.refreshInterval =
															m.closeReopenInterval);
												for (
													var v,
														_ = s(
															m.adSourcePlacements
														);
													!(v = _()).done;

												) {
													var C = v.value,
														I = C.identifier,
														S =
															this.adSourcePlacementList.get(
																I
															);
													y.adSourcePlacementList.set(
														S,
														C.percent
													);
												}
												this.adPositionList.push(y);
											}
										}),
										(t.getAdPosition = function (e) {
											for (
												var t,
													n = s(this.adPositionList);
												!(t = n()).done;

											) {
												var o = t.value;
												if (o.name == e) return o;
											}
											return null;
										}),
										e
									);
								})();
								e.AdConfig = r;
							})(e.ads || (e.ads = {}));
						})(f || (f = {})),
						(function (e) {
							(function (e) {
								var t;
								(function (e) {
									(e[(e.CODE_UNKNOWN = 100)] =
										'CODE_UNKNOWN'),
										(e[(e.CODE_INIT_ERROR = 1001)] =
											'CODE_INIT_ERROR'),
										(e[(e.CODE_INTERNAL_ERROR = 1002)] =
											'CODE_INTERNAL_ERROR'),
										(e[(e.CODE_AD_PARAM_ERROR = 1003)] =
											'CODE_AD_PARAM_ERROR'),
										(e[(e.CODE_NO_NETWORK_CONNECT = 2e3)] =
											'CODE_NO_NETWORK_CONNECT'),
										(e[(e.CODE_NETWORK_ERROR = 2001)] =
											'CODE_NETWORK_ERROR'),
										(e[(e.CODE_NO_AD = 3e3)] =
											'CODE_NO_AD'),
										(e[(e.CODE_AD_LOAD_FAIL = 3001)] =
											'CODE_AD_LOAD_FAIL'),
										(e[(e.CODE_AD_NOT_READY = 3002)] =
											'CODE_AD_NOT_READY'),
										(e[(e.CODE_AD_SHOW_FAIL = 3003)] =
											'CODE_AD_SHOW_FAIL'),
										(e[(e.CODE_AD_CLOSED = 3004)] =
											'CODE_AD_CLOSED');
								})((t = e.AdErrorCode || (e.AdErrorCode = {}))),
									(e.AdError = (function () {
										function e(e) {
											switch (((this.code = e), e)) {
												case t.CODE_UNKNOWN:
													this.msg =
														'\u672a\u77e5\u9519\u8bef';
													break;
												case t.CODE_INIT_ERROR:
													this.msg =
														'\u521d\u59cb\u5316\u9519\u8bef';
													break;
												case t.CODE_INTERNAL_ERROR:
													this.msg =
														'\u5185\u90e8\u9519\u8bef';
													break;
												case t.CODE_AD_PARAM_ERROR:
													this.msg =
														'\u5e7f\u544a\u53c2\u6570\u9519\u8bef';
													break;
												case t.CODE_NO_NETWORK_CONNECT:
													this.msg =
														'\u65e0\u7f51\u7edc\u8fde\u63a5';
													break;
												case t.CODE_NETWORK_ERROR:
													this.msg =
														'\u7f51\u7edc\u9519\u8bef';
													break;
												case t.CODE_NO_AD:
													this.msg =
														'\u65e0\u5e7f\u544a\u586b\u5145';
													break;
												case t.CODE_AD_LOAD_FAIL:
													this.msg =
														'\u52a0\u8f7d\u5e7f\u544a\u5931\u8d25';
													break;
												case t.CODE_AD_NOT_READY:
													this.msg =
														'\u6ca1\u6709\u52a0\u8f7d\u6210\u529f\u7684\u5e7f\u544a';
													break;
												case t.CODE_AD_SHOW_FAIL:
													this.msg =
														'\u5e7f\u544a\u5c55\u793a\u5931\u8d25';
													break;
												case t.CODE_AD_CLOSED:
													this.msg =
														'\u5e7f\u544a\u5df2\u5173\u95ed';
											}
										}
										var n = e.prototype;
										return (
											(n.getCode = function () {
												return this.code;
											}),
											(n.setCode = function (e) {
												this.code = e;
											}),
											(n.getMsg = function () {
												return this.msg;
											}),
											(n.setMsg = function (e) {
												this.msg = e;
											}),
											(n.getSdkCode = function () {
												return this.sdkCode;
											}),
											(n.setSdkCode = function (e) {
												this.sdkCode = e;
											}),
											(n.getSdkMsg = function () {
												return this.sdkMsg;
											}),
											(n.setSdkMsg = function (e) {
												this.sdkMsg = e;
											}),
											(n.toString = function () {
												var e =
													'code: ' +
													this.code +
													', msg: ' +
													this.msg;
												return (
													this.sdkCode &&
														this.sdkCode.length >
															0 &&
														(e +=
															', sdkCode: ' +
															this.sdkCode),
													this.sdkMsg &&
														this.sdkMsg.length >
															0 &&
														(e +=
															', sdkMsg: ' +
															this.sdkMsg),
													e
												);
											}),
											e
										);
									})());
							})(e.ads || (e.ads = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.AdItem = (function () {
									function n(e) {
										(this.status = t.AdStatus.Inited),
											(this.loadingTime = 0),
											(this.loadFinishTime = 0),
											(this.isReward = !1),
											(this.openAdResultCallback = null),
											(this.onAdCloseCallback = null),
											(this.adItemParam = e);
									}
									var o = n.prototype;
									return (
										(o.loadAd = function () {
											console.log(
												'ad loadAd: ' +
													this.adItemParam.adSource
														.name +
													' ' +
													this.adItemParam
														.adSourcePlacement.type
											),
												this.onLoading();
										}),
										(o.showAd = function () {
											console.log(
												'ad showAd: ' +
													this.adItemParam.adSource
														.name +
													' ' +
													this.adItemParam
														.adSourcePlacement.type
											),
												this.onShowing();
										}),
										(o.closeAd = function () {
											console.log(
												'ad closeAd: ' +
													this.adItemParam.adSource
														.name +
													' ' +
													this.adItemParam
														.adSourcePlacement.type
											),
												this.isShowSuccess()
													? this.onClosing()
													: this.destroyAd();
										}),
										(o.destroyAd = function () {
											var e = this;
											this.status != t.AdStatus.Closing &&
												setTimeout(function () {
													e.onClosed();
												}, 3e3),
												this.status !=
													t.AdStatus.Closed &&
													((this.status =
														t.AdStatus.Closing),
													this.close(),
													setTimeout(function () {
														e.onClosed();
													}, 3e3));
										}),
										(o.getAdItemParam = function () {
											return this.adItemParam;
										}),
										(o.getAppId = function () {
											return this.adItemParam.getAppId();
										}),
										(o.getAppKey = function () {
											return this.adItemParam.getAppKey();
										}),
										(o.getAdPlacementId = function () {
											return this.adItemParam.getAdPlacementId();
										}),
										(o.onLoading = function () {
											(this.status != t.AdStatus.Inited &&
												this.status !=
													t.AdStatus.LoadFail &&
												this.status !=
													t.AdStatus.ShowFail &&
												this.status !=
													t.AdStatus.Closed) ||
												((this.status =
													t.AdStatus.Loading),
												(this.loadingTime =
													new Date().getTime()),
												t.AdManager.getInstance().onLoading(
													this
												),
												this.load());
										}),
										(o.onLoadSuccess = function () {
											(this.status !=
												t.AdStatus.Loading &&
												this.status !=
													t.AdStatus.LoadFail) ||
												(console.log(
													'ad onLoadSuccess: ' +
														this.adItemParam
															.adSource.name +
														' ' +
														this.adItemParam
															.adSourcePlacement
															.type
												),
												(this.status =
													t.AdStatus.LoadSuccess),
												(this.loadFinishTime =
													new Date().getTime()),
												t.AdManager.getInstance().onLoadSuccess(
													this
												));
										}),
										(o.onLoadFail = function (e) {
											this.status == t.AdStatus.Loading ||
											this.status ==
												t.AdStatus.LoadSuccess
												? (console.log(
														'ad onLoadFail: ' +
															this.adItemParam
																.adSource.name +
															' ' +
															this.adItemParam
																.adSourcePlacement
																.type +
															'; ' +
															e.toString()
												  ),
												  (this.status =
														t.AdStatus.LoadFail),
												  (this.loadFinishTime =
														new Date().getTime()),
												  t.AdManager.getInstance().onLoadFail(
														this,
														e
												  ))
												: this.status ==
														t.AdStatus.Showing &&
												  this.onShowFailed(e);
										}),
										(o.onShowing = function () {
											this.status ==
												t.AdStatus.LoadSuccess &&
												((this.status =
													t.AdStatus.Showing),
												t.AdManager.getInstance().onShowing(
													this
												),
												this.open());
										}),
										(o.onShowSuccess = function () {
											this.status == t.AdStatus.Showing &&
												(console.log(
													'ad onShowSuccess: ' +
														this.adItemParam
															.adSource.name +
														' ' +
														this.adItemParam
															.adSourcePlacement
															.type
												),
												(this.status =
													t.AdStatus.ShowSuccess),
												t.AdManager.getInstance().onShowSuccess(
													this
												),
												this.adItemParam.getAdType() ==
													t.AdType.video &&
													e.core.PlatformManager.getInstance().pauseMusic(),
												this.openAdResultCallback &&
													(this.openAdResultCallback(
														!0
													),
													(this.openAdResultCallback =
														null)));
										}),
										(o.onShowFailed = function (e) {
											this.status == t.AdStatus.Showing &&
												(console.log(
													'ad onShowFailed: ' +
														this.adItemParam
															.adSource.name +
														' ' +
														this.adItemParam
															.adSourcePlacement
															.type +
														'; ' +
														e.toString()
												),
												(this.status =
													t.AdStatus.ShowFail),
												t.AdManager.getInstance().onShowFailed(
													this,
													e
												),
												this.openAdResultCallback &&
													(this.openAdResultCallback(
														!1
													),
													(this.openAdResultCallback =
														null)));
										}),
										(o.onReward = function () {
											this.isReward ||
												(console.log(
													'ad onReward: ' +
														this.adItemParam
															.adSource.name +
														' ' +
														this.adItemParam
															.adSourcePlacement
															.type
												),
												(this.isReward = !0),
												t.AdManager.getInstance().onReward(
													this
												));
										}),
										(o.onClosing = function () {
											this.status != t.AdStatus.Closing &&
												this.status !=
													t.AdStatus.Closed &&
												((this.status =
													t.AdStatus.Closing),
												t.AdManager.getInstance().onClosing(
													this
												),
												this.close());
										}),
										(o.onClosed = function () {
											this.status != t.AdStatus.Closed &&
												(console.log(
													'ad onClosed: ' +
														this.adItemParam
															.adSource.name +
														' ' +
														this.adItemParam
															.adSourcePlacement
															.type
												),
												(this.status =
													t.AdStatus.Closed),
												t.AdManager.getInstance().onClosed(
													this
												),
												this.adItemParam.getAdType() ==
													t.AdType.video &&
													e.core.PlatformManager.getInstance().resumeMusic(),
												this.onAdCloseCallback &&
													(this.onAdCloseCallback(
														this.isReward
													),
													(this.onAdCloseCallback =
														null)));
										}),
										(o.onClicked = function () {
											t.AdManager.getInstance().onClicked(
												this
											);
										}),
										(o.isLoading = function () {
											return (
												this.status ==
												t.AdStatus.Loading
											);
										}),
										(o.isLoadSuccess = function () {
											return (
												this.status ==
												t.AdStatus.LoadSuccess
											);
										}),
										(o.isLoadFail = function () {
											return (
												this.status ==
												t.AdStatus.LoadFail
											);
										}),
										(o.isShow = function () {
											return (
												this.status ==
													t.AdStatus.Showing ||
												this.status ==
													t.AdStatus.ShowFail ||
												this.status ==
													t.AdStatus.ShowSuccess
											);
										}),
										(o.isShowSuccess = function () {
											return (
												this.status ==
												t.AdStatus.ShowSuccess
											);
										}),
										(o.isShowFail = function () {
											return (
												this.status ==
												t.AdStatus.ShowFail
											);
										}),
										(o.isClosed = function () {
											return (
												this.status ==
													t.AdStatus.Closing ||
												this.status == t.AdStatus.Closed
											);
										}),
										n
									);
								})();
							})(e.ads || (e.ads = {}));
						})(f || (f = {})),
						(function (e) {
							var t;
							((t = e.ads || (e.ads = {})).AdSourceParam =
								(function () {
									function e(e) {
										this.adSource = e;
									}
									var t = e.prototype;
									return (
										(t.getAppId = function () {
											return this.adSource.appId;
										}),
										(t.getAppKey = function () {
											return this.adSource.appKey;
										}),
										e
									);
								})()),
								(t.AdItemParam = (function () {
									function e(e, t) {
										(this.adSource = e),
											(this.adSourcePlacement = t);
									}
									var t = e.prototype;
									return (
										(t.getAdType = function () {
											return this.adSourcePlacement.type;
										}),
										(t.getAppId = function () {
											return this.adSource.appId;
										}),
										(t.getAppKey = function () {
											return this.adSource.appKey;
										}),
										(t.getAdPlacementId = function () {
											return this.adSourcePlacement
												.placementId;
										}),
										e
									);
								})());
						})(f || (f = {})),
						(function (e) {
							(function (e) {
								var t = (function () {
									function t(e) {
										(this.adSourceList = new Array()),
											(this.adPositionList = new Array()),
											(this.m_loadAdItems = new Map()),
											(this.m_usingAdItems = new Array()),
											(this.m_allAdPositionLoaders =
												new Array()),
											(this.adSourceList =
												e.adSourceList),
											(this.adPositionList =
												e.adPositionList);
									}
									t.create = function (e) {
										return new t(e);
									};
									var n = t.prototype;
									return (
										(n.onUpdate = function () {
											for (
												var e,
													t = new Array(),
													n = s(
														this
															.m_allAdPositionLoaders
													);
												!(e = n()).done;

											) {
												var o = e.value,
													i = o.adItem;
												!o.checkTimeout &&
													i &&
													this.checkAdItemLoadTimeout(
														i
													) &&
													t.push(o);
											}
											for (
												var a = 0, r = t;
												a < r.length;
												a++
											) {
												var c = r[a];
												c.checkTimeout ||
													((c.checkTimeout = !0),
													this.preloadAdPosition2(
														c.adPosition
													));
											}
										}),
										(n.initTask = function () {
											for (
												var t,
													n = this,
													o =
														this.adSourceList
															.length,
													i = 0,
													a = s(this.adSourceList);
												!(t = a()).done;

											) {
												var r = t.value,
													c = new e.AdSourceParam(r),
													l =
														e.AdManager.getInstance().getAdAgent(
															r.name
														);
												l &&
													l.loadAdSource(
														c,
														function () {
															++i >= o &&
																n.preloadAllAdPosition();
														}
													);
											}
										}),
										(n.hasAdPosition = function (e) {
											return (
												this.adPositionList.findIndex(
													function (t) {
														return t == e;
													}
												) >= 0
											);
										}),
										(n.getAdPosition = function (e) {
											return this.adPositionList.find(
												function (t) {
													return t.name == e;
												}
											);
										}),
										(n.preloadAllAdPosition = function () {
											for (
												var e,
													t = s(this.adPositionList);
												!(e = t()).done;

											) {
												var n = e.value;
												this.preloadAdPosition2(n);
											}
										}),
										(n.preloadAdPosition = function (e) {
											var t = this.getAdPosition(e);
											if (t)
												return this.preloadAdPosition2(
													t
												);
										}),
										(n.preloadAdPosition2 = function (t) {
											if (this.hasAdPosition(t)) {
												for (
													var n,
														o = s(
															this
																.m_allAdPositionLoaders
														);
													!(n = o()).done;

												) {
													var i = n.value;
													if (
														i.adPosition == t &&
														i.adItem &&
														(i.adItem.isLoadSuccess() ||
															(i.adItem.isLoading() &&
																!this.checkAdItemLoadTimeout(
																	i.adItem
																)))
													)
														return;
												}
												var a = new e.AdPositionLoader(
													t
												);
												this.m_allAdPositionLoaders.push(
													a
												),
													this.loadAdPositionLoader(
														a
													);
											}
										}),
										(n.getAdItems = function (e) {
											var t = this.m_loadAdItems.get(e);
											return (
												t ||
													((t = new Array()),
													this.m_loadAdItems.set(
														e,
														t
													)),
												t
											);
										}),
										(n.checkAdItemLoadTimeout = function (
											e
										) {
											return !!(
												e.isLoading() &&
												new Date().getTime() -
													e.loadingTime >
													1e4
											);
										}),
										(n.checkAdItemRefAndLoad = function (
											e
										) {
											if (e.adPosition) {
												for (
													var t,
														n = 0,
														o = s(
															this
																.m_allAdPositionLoaders
														);
													!(t = o()).done;

												) {
													var i = t.value;
													i.adItem &&
														i.adItem == e &&
														i.adPosition !=
															e.adPosition &&
														n++;
												}
												if (n > 0) {
													var a,
														r = this.getAdItems(
															e.adItemParam
																.adSourcePlacement
														);
													if (r.length > 0)
														for (
															var c, l = s(r);
															!(c = l()).done;

														) {
															var d = c.value;
															(this.checkAdItemLoadTimeout(
																d
															) &&
																!d.isLoadSuccess()) ||
																(a = d);
														}
													if (
														(a ||
															((a =
																this.createAdItem(
																	e
																		.adItemParam
																		.adSourcePlacement
																)) &&
																(r.push(a),
																a.loadAd())),
														a)
													)
														for (
															var u,
																f = s(
																	this
																		.m_allAdPositionLoaders
																);
															!(u = f()).done;

														) {
															var h = u.value;
															h.adItem &&
																h.adItem == e &&
																h.adPosition !=
																	e.adPosition &&
																(h.adItem = a);
														}
												}
											}
										}),
										(n.createAdItem = function (t) {
											var n = new e.AdItemParam(
													t.adSource,
													t
												),
												o =
													e.AdManager.getInstance().getAdAgent(
														t.adSource.name
													);
											if (o)
												switch (t.type) {
													case e.AdType.banner:
														return o.createBannerAd(
															n
														);
													case e.AdType.interstitial:
														return o.createInterstitialAd(
															n
														);
													case e.AdType.video:
														return o.createVideoAd(
															n
														);
													case e.AdType.interaction:
														return o.createInteractionAd(
															n
														);
													case e.AdType
														.interstitialVideo:
														return o.createInterstitialVideoAd(
															n
														);
												}
											return null;
										}),
										(n.loadAdPositionLoader = function (e) {
											var t = this;
											if (!e.allLoadFail) {
												for (
													var n,
														o = e.adPosition,
														i = new Map(),
														a = function () {
															var o = n.value,
																a = o[0],
																r = o[1];
															if (
																!(
																	e.failAdSourcePlacements.findIndex(
																		function (
																			e
																		) {
																			return (
																				e ==
																				a
																			);
																		}
																	) >= 0
																)
															) {
																if (
																	a.loadFailCount >
																	0
																) {
																	var s =
																		new Date().getTime() -
																		a.loadFailLastTime;
																	if (
																		a.loadFailCount <=
																		1
																	) {
																		if (
																			s <
																			1e4
																		)
																			return 'continue';
																	} else if (
																		a.loadFailCount <=
																		3
																	) {
																		if (
																			s <
																			3e4
																		)
																			return 'continue';
																	} else if (
																		a.loadFailCount <=
																		5
																	) {
																		if (
																			s <
																			12e4
																		)
																			return 'continue';
																	} else {
																		if (
																			!(
																				a.loadFailCount <=
																				10
																			)
																		)
																			return 'continue';
																		if (
																			s <
																			6e5
																		)
																			return 'continue';
																	}
																}
																if (
																	t.m_allAdPositionLoaders.findIndex(
																		function (
																			e
																		) {
																			var n =
																				e.adItem;
																			return !(
																				!n ||
																				n
																					.adItemParam
																					.adSourcePlacement !=
																					a ||
																				!t.checkAdItemLoadTimeout(
																					n
																				)
																			);
																		}
																	) >= 0
																)
																	return 'break';
																i.set(a, r);
															}
														},
														r = s(
															o.adSourcePlacementList
														);
													!(n = r()).done;

												) {
													var c = a();
													if (
														'continue' !== c &&
														'break' === c
													)
														break;
												}
												if (i.size > 0) {
													for (
														var l, d = 0, u = s(i);
														!(l = u()).done;

													) {
														var f = l.value;
														f[0], (d += f[1]);
													}
													if (d > 0)
														for (
															var h,
																p =
																	Math.random() *
																	d,
																g = 0,
																m = s(i);
															!(h = m()).done;

														) {
															var y = h.value,
																A = y[0];
															if (
																p < (g += y[1])
															) {
																var v = void 0,
																	_ =
																		this.getAdItems(
																			A
																		);
																if (
																	_.length > 0
																)
																	for (
																		var C,
																			I =
																				s(
																					_
																				);
																		!(C =
																			I())
																			.done;

																	) {
																		var S =
																			C.value;
																		if (
																			S.isLoading() &&
																			!this.checkAdItemLoadTimeout(
																				S
																			)
																		) {
																			v =
																				S;
																			break;
																		}
																		if (
																			S.isLoadSuccess()
																		) {
																			v =
																				S;
																			break;
																		}
																	}
																v
																	? (e.adItem =
																			v)
																	: ((v =
																			this.createAdItem(
																				A
																			)),
																	  (e.adItem =
																			v),
																	  v &&
																			(_.push(
																				v
																			),
																			v.loadAd()));
																break;
															}
														}
												} else
													(e.allLoadFail = !0),
														(e.failAdSourcePlacements.length = 0),
														(e.adItem = null),
														setTimeout(function () {
															(e.allLoadFail =
																!1),
																t.loadAdPositionLoader(
																	e
																);
														}, 1e4);
											}
										}),
										(n.isAdReady = function (e) {
											var t = this.getAdPosition(e);
											return !!t && this.isAdReady2(t);
										}),
										(n.isAdReady2 = function (e, t) {
											for (
												var n,
													o = s(
														this
															.m_allAdPositionLoaders
													);
												!(n = o()).done;

											) {
												var i = n.value;
												if (i.adPosition == e) {
													var a = i.adItem;
													if (a && a.isLoadSuccess())
														return !0;
													if (t && i.checkTimeout)
														return !0;
												}
											}
											return !1;
										}),
										(n.useAd = function (e) {
											var t = this.getAdPosition(e);
											return t ? this.useAd2(t) : null;
										}),
										(n.useAd2 = function (e) {
											for (
												var t,
													n = s(
														this
															.m_allAdPositionLoaders
													);
												!(t = n()).done;

											) {
												var o = t.value;
												if (o.adPosition == e) {
													var i = o.adItem;
													if (
														i &&
														i.isLoadSuccess()
													) {
														i.adPosition = e;
														for (
															var a =
																	this.getAdItems(
																		i
																			.adItemParam
																			.adSourcePlacement
																	),
																r = 0;
															r < a.length;
															r++
														)
															a[r] == i &&
																a.splice(r, 1);
														return (
															this.m_usingAdItems.push(
																i
															),
															i
														);
													}
												}
											}
											return null;
										}),
										(n.onLoading = function () {}),
										(n.onLoadSuccess = function () {}),
										(n.onLoadFail = function (e) {
											e.adItemParam.adSourcePlacement
												.loadFailCount++,
												(e.adItemParam.adSourcePlacement.loadFailLastTime =
													new Date().getTime());
											for (
												var t = this.getAdItems(
														e.adItemParam
															.adSourcePlacement
													),
													n = 0;
												n < t.length;
												n++
											)
												if (t[n] == e) {
													t.splice(n, 1), n--;
													break;
												}
											for (
												var o,
													i = s(
														this
															.m_allAdPositionLoaders
													);
												!(o = i()).done;

											) {
												var a = o.value;
												a.adItem == e &&
													(-1 ==
														a.failAdSourcePlacements.findIndex(
															function (t) {
																return (
																	t ==
																	e
																		.adItemParam
																		.adSourcePlacement
																);
															}
														) &&
														a.failAdSourcePlacements.push(
															e.adItemParam
																.adSourcePlacement
														),
													this.loadAdPositionLoader(
														a
													));
											}
											e.destroyAd();
										}),
										(n.onShowing = function () {}),
										(n.onShowSuccess = function () {}),
										(n.onShowFailed = function (e) {
											e.adItemParam.adSourcePlacement
												.loadFailCount++,
												(e.adItemParam.adSourcePlacement.loadFailLastTime =
													new Date().getTime());
											for (
												var t = 0;
												t < this.m_usingAdItems.length;
												t++
											)
												if (
													this.m_usingAdItems[t] == e
												) {
													this.m_usingAdItems.splice(
														t,
														1
													),
														t--;
													break;
												}
											for (
												var n,
													o = s(
														this
															.m_allAdPositionLoaders
													);
												!(n = o()).done;

											) {
												var i = n.value;
												i.adItem == e &&
													(-1 ==
														i.failAdSourcePlacements.findIndex(
															function (t) {
																return (
																	t ==
																	e
																		.adItemParam
																		.adSourcePlacement
																);
															}
														) &&
														i.failAdSourcePlacements.push(
															e.adItemParam
																.adSourcePlacement
														),
													this.loadAdPositionLoader(
														i
													));
											}
											e.destroyAd();
										}),
										(n.onReward = function () {}),
										(n.onClosing = function () {}),
										(n.onClosed = function (e) {
											for (
												var t = 0;
												t < this.m_usingAdItems.length;
												t++
											)
												if (
													this.m_usingAdItems[t] == e
												) {
													this.m_usingAdItems.splice(
														t,
														1
													),
														t--;
													break;
												}
											for (
												var n = 0;
												n <
												this.m_allAdPositionLoaders
													.length;
												n++
											) {
												var o =
													this.m_allAdPositionLoaders[
														n
													];
												o.adItem == e &&
													o.adPosition ==
														e.adPosition &&
													(this.m_allAdPositionLoaders.splice(
														n,
														1
													),
													n--);
											}
											this.preloadAdPosition2(
												e.adPosition
											),
												this.checkAdItemRefAndLoad(e);
										}),
										(n.onClicked = function () {}),
										t
									);
								})();
								e.AdLoader = t;
							})(e.ads || (e.ads = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								var n = function () {
										(this.lastTime = new Date().getTime()),
											(this.status = 0);
									},
									o = (function () {
										function o() {
											(this.adConfig = null),
												(this.adLoader = null),
												(this.openedBannerRecord =
													new Map()),
												(this.updateTimerId = null),
												(this.adAgents = new Map());
										}
										o.getInstance = function () {
											return (
												this._instance ||
													((o._instance = new o()),
													o._instance.init()),
												this._instance
											);
										};
										var i = o.prototype;
										return (
											(i.init = function () {
												var t = this,
													n =
														e.core.PlatformManager.getInstance().getPlatformAdAgent();
												n &&
													n.init(function (e) {
														e &&
															t.adAgents.set(
																n.name,
																n
															),
															t.loadAdConfig();
													});
											}),
											(i.loadAdConfig = function () {
												var n =
													e.AppConfigManager.getInstance()
														.getAppConfig()
														.getProperty(
															'adConfig'
														);
												(this.adConfig =
													t.AdConfig.fromJson(n)),
													this.adConfig &&
														((this.adLoader =
															t.AdLoader.create(
																this.adConfig
															)),
														this.adLoader.initTask(),
														clearInterval(
															this.updateTimerId
														),
														(this.updateTimerId =
															setInterval(
																this.onUpdate.bind(
																	this
																),
																1e3
															)));
											}),
											(i.onUpdate = function () {
												this.adLoader.onUpdate();
												for (
													var e,
														t =
															new Date().getTime(),
														n = s(
															this
																.openedBannerRecord
														);
													!(e = n()).done;

												) {
													var o = e.value,
														i = o[0],
														a = o[1];
													if (a.openedAdItem)
														if (
															a.openedAdItem.isShow()
														) {
															if (
																((a.status = 1),
																a.refreshInterval >
																	0 &&
																	t -
																		a.lastTime >
																		1e3 *
																			a.refreshInterval)
															) {
																a.lastTime = t;
																var r =
																	this.adLoader.getAdPosition(
																		i
																	);
																r &&
																	(this.handleOpenAd2(
																		r,
																		null,
																		null
																	) ||
																		((a.status = 0),
																		(a.openedAdItem =
																			null)));
															}
														} else
															a.openedAdItem.isClosed() &&
																((a.status = 2),
																(a.lastTime =
																	t),
																(a.openedAdItem =
																	null));
													else if (0 == a.status) {
														if (
															t - a.lastTime >=
															3e3
														) {
															a.lastTime = t;
															var c =
																this.adLoader.getAdPosition(
																	i
																);
															c &&
																this.adLoader.isAdReady2(
																	c
																) &&
																this.handleOpenAd2(
																	c,
																	null,
																	null
																);
															continue;
														}
													} else if (
														2 == a.status &&
														a.closeReopenInterval >
															0 &&
														t - a.lastTime >
															1e3 *
																a.closeReopenInterval
													) {
														(a.status = 0),
															(a.lastTime = t);
														var l =
															this.adLoader.getAdPosition(
																i
															);
														l &&
															this.adLoader.isAdReady2(
																l,
																!0
															) &&
															this.handleOpenAd2(
																l,
																null,
																null
															);
													}
												}
											}),
											(i.getAdAgent = function (e) {
												return this.adAgents.get(e);
											}),
											(i.isAdReady = function (e) {
												return (
													!!this.adLoader &&
													this.adLoader.isAdReady(e)
												);
											}),
											(i.preloadAd = function (e) {
												this.adLoader.preloadAdPosition(
													e
												);
											}),
											(i.openAd = function (e, o, i) {
												if (this.adLoader) {
													var a =
														this.adLoader.getAdPosition(
															e
														);
													if (a) {
														var r = !0;
														if (
															(a.percent &&
																a.percent <
																	100 &&
																(r =
																	100 *
																		Math.random() <
																	a.percent),
															r &&
																a.type ==
																	t.AdType
																		.banner)
														) {
															var s =
																this.openedBannerRecord.get(
																	a.name
																);
															s ||
																((s = new n()),
																this.openedBannerRecord.set(
																	a.name,
																	s
																)),
																(s.status = 0),
																(s.refreshInterval =
																	a.refreshInterval),
																(s.closeReopenInterval =
																	a.closeReopenInterval);
														}
														return void this.handleOpenAd2(
															a,
															o,
															i
														);
													}
												}
												o && o(!1);
											}),
											(i.handleOpenAd = function (
												e,
												t,
												n
											) {
												if (this.adLoader) {
													var o =
														this.adLoader.getAdPosition(
															e
														);
													if (o)
														return this.handleOpenAd2(
															o,
															t,
															n
														);
												}
												return null;
											}),
											(i.handleOpenAd2 = function (
												e,
												n,
												o
											) {
												e.type == t.AdType.banner &&
													this.handleCloseAd(e.name);
												var i = this.adLoader.useAd2(e);
												if (i) {
													if (
														e.type ==
														t.AdType.banner
													) {
														var a =
															this.openedBannerRecord.get(
																e.name
															);
														a &&
															((a.refreshInterval =
																e.refreshInterval),
															(a.closeReopenInterval =
																e.closeReopenInterval),
															(a.status = 1),
															(a.lastTime =
																new Date().getTime()),
															(a.openedAdItem =
																i));
													}
													(i.adPosition = e),
														(i.openAdResultCallback =
															n),
														(i.onAdCloseCallback =
															o),
														i.showAd();
												} else n && n(!1);
												return i;
											}),
											(i.closeAd = function (e) {
												var t =
													this.openedBannerRecord.get(
														e
													);
												t &&
													(this.openedBannerRecord.delete(
														e
													),
													t.openedAdItem &&
														t.openedAdItem.closeAd()),
													this.handleCloseAd(e);
											}),
											(i.handleCloseAd = function (e) {
												var t =
													this.openedBannerRecord.get(
														e
													);
												if (
													(t &&
														1 == t.status &&
														t.openedAdItem &&
														t.openedAdItem.isShow() &&
														t.openedAdItem.closeAd(),
													this.adLoader)
												)
													for (
														var n,
															o = s(
																this.adLoader
																	.m_usingAdItems
															);
														!(n = o()).done;

													) {
														var i = n.value;
														i &&
															i.adPosition.name ==
																e &&
															i.isShow() &&
															i.closeAd();
													}
											}),
											(i.closeAllBanner = function () {
												if (
													this.openedBannerRecord
														.size > 0
												) {
													for (
														var e,
															n = s(
																this
																	.openedBannerRecord
															);
														!(e = n()).done;

													) {
														var o = e.value,
															i = (o[0], o[1]);
														i.openedAdItem &&
															i.openedAdItem.closeAd();
													}
													this.openedBannerRecord.clear();
												}
												for (
													var a,
														r = s(
															this.adLoader
																.adPositionList
														);
													!(a = r()).done;

												) {
													var c = a.value;
													c &&
														c.type ==
															t.AdType.banner &&
														this.closeAd(c.name);
												}
											}),
											(i.loadExpressAd = function () {}),
											(i.openExpressAd = function () {}),
											(i.onLoading = function (e) {
												this.adLoader.onLoading(e);
											}),
											(i.onLoadSuccess = function (e) {
												if (
													(this.adLoader.onLoadSuccess(
														e
													),
													e.adItemParam
														.adSourcePlacement
														.type ==
														t.AdType.banner)
												)
													for (
														var n,
															o = s(
																this
																	.openedBannerRecord
															);
														!(n = o()).done;

													) {
														var i = n.value,
															a = i[0],
															r = i[1];
														0 != r.status ||
															r.openedAdItem ||
															(this.isAdReady(
																a
															) &&
																this.handleOpenAd(
																	a,
																	null,
																	null
																));
													}
											}),
											(i.onLoadFail = function (e, t) {
												this.adLoader.onLoadFail(e, t);
											}),
											(i.onShowing = function (e) {
												this.adLoader.onShowing(e);
											}),
											(i.onShowSuccess = function (e) {
												this.adLoader.onShowSuccess(e);
											}),
											(i.onShowFailed = function (e, n) {
												if (
													e.adItemParam
														.adSourcePlacement
														.type == t.AdType.banner
												)
													for (
														var o,
															i = s(
																this
																	.openedBannerRecord
															);
														!(o = i()).done;

													) {
														var a = o.value,
															r = (a[0], a[1]);
														1 == r.status &&
															e ==
																r.openedAdItem &&
															((r.status = 0),
															(r.openedAdItem =
																null),
															(r.lastTime =
																new Date().getTime() -
																2e3));
													}
												this.adLoader.onShowFailed(
													e,
													n
												);
											}),
											(i.onReward = function (e) {
												this.adLoader.onReward(e);
											}),
											(i.onClosing = function (e) {
												this.adLoader.onClosing(e);
											}),
											(i.onClosed = function (e) {
												this.adLoader.onClosed(e);
											}),
											(i.onClicked = function (e) {
												this.adLoader.onReward(e);
											}),
											o
										);
									})();
								t.AdManager = o;
							})(e.ads || (e.ads = {}));
						})(f || (f = {})),
						(function (e) {
							(e.ads || (e.ads = {})).AdPositionLoader =
								(function () {
									return function (e) {
										(this.failAdSourcePlacements =
											new Array()),
											(this.allLoadFail = !1),
											(this.checkTimeout = !1),
											(this.adPosition = e);
									};
								})();
						})(f || (f = {})),
						(function (e) {
							var t;
							((t = e.ads || (e.ads = {})).BaseBannerAdItem =
								(function (e) {
									function t() {
										return e.apply(this, arguments) || this;
									}
									return a(t, e), t;
								})(t.AdItem)),
								(t.BaseInterstitialAdItem = (function (e) {
									function t() {
										return e.apply(this, arguments) || this;
									}
									return (
										a(t, e),
										(t.prototype.close = function () {}),
										t
									);
								})(t.AdItem)),
								(t.BaseVideoAdItem = (function (e) {
									function t() {
										return e.apply(this, arguments) || this;
									}
									return (
										a(t, e),
										(t.prototype.close = function () {}),
										t
									);
								})(t.AdItem)),
								(t.BaseInteractionAdItem = (function (e) {
									function t() {
										return e.apply(this, arguments) || this;
									}
									return (
										a(t, e),
										(t.prototype.close = function () {}),
										t
									);
								})(t.AdItem)),
								(t.BaseInterstitialVideoAdItem = (function (e) {
									function t() {
										return e.apply(this, arguments) || this;
									}
									return (
										a(t, e),
										(t.prototype.close = function () {}),
										t
									);
								})(t.AdItem)),
								(t.BaseAdAgent = (function () {
									function e() {}
									var t = e.prototype;
									return (
										(t.init = function (e) {
											e(!0);
										}),
										(t.loadAdSource = function (e, t) {
											t(!0);
										}),
										(t.createBannerAd = function () {
											return null;
										}),
										(t.createInterstitialAd = function () {
											return null;
										}),
										(t.createVideoAd = function () {
											return null;
										}),
										(t.createInteractionAd = function () {
											return null;
										}),
										(t.createInterstitialVideoAd =
											function () {
												return null;
											}),
										e
									);
								})());
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								var n = (function () {
									function t() {
										this.analytics = null;
									}
									t.getInstance = function () {
										return (
											this.instance ||
												((this.instance = new t()),
												this.instance.init()),
											this.instance
										);
									};
									var n = t.prototype;
									return (
										(n.init = function () {
											this.analytics =
												e.core.PlatformManager.getInstance().getPlatformAnalytics();
										}),
										(n.profileSignIn = function (e) {
											this.analytics &&
												this.analytics.profileSignIn(e);
										}),
										(n.profileSignIn2 = function (e, t) {
											this.analytics &&
												this.analytics.profileSignIn2(
													e,
													t
												);
										}),
										(n.profileSignOff = function () {
											this.analytics &&
												this.analytics.profileSignOff();
										}),
										(n.setPlayerLevel = function (e) {
											this.analytics &&
												this.analytics.setPlayerLevel(
													e
												);
										}),
										(n.pay = function (e, t, n) {
											this.analytics &&
												this.analytics.pay(e, t, n);
										}),
										(n.pay2 = function (e, t, n, o, i) {
											this.analytics &&
												this.analytics.pay2(
													e,
													t,
													n,
													o,
													i
												);
										}),
										(n.buy = function (e, t, n) {
											this.analytics &&
												this.analytics.buy(e, t, n);
										}),
										(n.use = function (e, t, n) {
											this.analytics &&
												this.analytics.use(e, t, n);
										}),
										(n.bonus = function (e, t) {
											this.analytics &&
												this.analytics.bonus(e, t);
										}),
										(n.bonus2 = function (e, t, n, o) {
											this.analytics &&
												this.analytics.bonus2(
													e,
													t,
													n,
													o
												);
										}),
										(n.startLevel = function (e) {
											this.analytics &&
												this.analytics.startLevel(e);
										}),
										(n.finishLevel = function (e, t) {
											this.analytics &&
												this.analytics.finishLevel(
													e,
													t
												);
										}),
										(n.failLevel = function (e, t) {
											this.analytics &&
												this.analytics.failLevel(e, t);
										}),
										(n.event = function (e) {
											this.analytics &&
												this.analytics.event(e);
										}),
										(n.event2 = function (e, t) {
											this.analytics &&
												this.analytics.event2(e, t);
										}),
										(n.event3 = function (e, t) {
											this.analytics &&
												this.analytics.event3(e, t);
										}),
										(n.event4 = function (e, t, n) {
											this.analytics &&
												this.analytics.event4(e, t, n);
										}),
										t
									);
								})();
								(n.instance = null), (t.AnalyticsManager = n);
							})(e.analytics || (e.analytics = {}));
						})(f || (f = {})),
						(function (e) {
							(function (e) {
								var t = (function () {
									function e() {}
									var t = e.prototype;
									return (
										(t.profileSignIn = function () {}),
										(t.profileSignIn2 = function () {}),
										(t.profileSignOff = function () {}),
										(t.setPlayerLevel = function () {}),
										(t.pay = function () {}),
										(t.pay2 = function () {}),
										(t.buy = function () {}),
										(t.use = function () {}),
										(t.bonus = function () {}),
										(t.bonus2 = function () {}),
										(t.startLevel = function () {}),
										(t.finishLevel = function () {}),
										(t.failLevel = function () {}),
										(t.event = function () {}),
										(t.event2 = function () {}),
										(t.event3 = function () {}),
										(t.event4 = function () {}),
										e
									);
								})();
								(e.BaseAnalytics = t),
									(e.NodeAnalytics = (function (e) {
										function t() {
											return (
												e.apply(this, arguments) || this
											);
										}
										return a(t, e), t;
									})(t));
							})(e.analytics || (e.analytics = {}));
						})(f || (f = {})),
						((f || (f = {})).AppConfigImpl = (function () {
							function e() {
								this.properties = new Map();
							}
							var t = e.prototype;
							return (
								(t.getProperty = function (e, t) {
									var n = this.properties.get(e);
									return n || (n = t || null), n;
								}),
								(t.getPropertyString = function (e) {
									try {
										return (
											this.getProperty(e).toString() || ''
										);
									} catch (u) {
										console.log(u);
									}
									return '';
								}),
								(t.setProperty = function (e, t) {
									this.properties.set(e, t);
								}),
								i(e, [
									{
										key: 'appId',
										get: function () {
											return this.getPropertyString(
												'appId'
											);
										}
									},
									{
										key: 'projectId',
										get: function () {
											return this.getPropertyString(
												'projectId'
											);
										}
									},
									{
										key: 'channelId',
										get: function () {
											return this.getPropertyString(
												'channelId'
											);
										}
									},
									{
										key: 'packageName',
										get: function () {
											return this.getPropertyString(
												'packageName'
											);
										}
									},
									{
										key: 'appName',
										get: function () {
											return this.getPropertyString(
												'appName'
											);
										}
									},
									{
										key: 'versionName',
										get: function () {
											return this.getPropertyString(
												'versionName'
											);
										}
									},
									{
										key: 'versionCode',
										get: function () {
											return this.getPropertyString(
												'versionCode'
											);
										}
									}
								]),
								e
							);
						})()),
						(function (e) {
							var t = (function () {
								function t() {
									this.appConfig = new e.AppConfigImpl();
								}
								t.getInstance = function () {
									return (
										this._instance ||
											(t._instance = new t()),
										this._instance
									);
								};
								var n = t.prototype;
								return (
									(n.getAppConfig = function () {
										return this.appConfig;
									}),
									(n.setAppConfig = function (e) {
										for (var t in e)
											this.appConfig.setProperty(t, e[t]);
									}),
									t
								);
							})();
							e.AppConfigManager = t;
						})(f || (f = {})),
						(function (e) {
							var t = function () {};
							(t.URL_DOMAIN_LOGIN = t.URL_DOMAIN = ''),
								(t.URL_DOMAIN_LOGIN_INTERFACE =
									'users/login_by_source_id_0'),
								(t.URL_DOMAIN_SUBMITUSERInfo_INTERFACE =
									'users/improve_user_baseI_info_0'),
								(t.URL_DOMAIN_GET_NATIVE_WXLOGIN_MSG =
									'login/get_wx_login_user_msg'),
								(e.ConstInner = t);
						})(f || (f = {})),
						(function (e) {
							(e.core || (e.core = {})).BasePlatform =
								(function () {
									function e() {}
									var t = e.prototype;
									return (
										(t.getPlatformAdAgent = function () {
											return null;
										}),
										(t.getPlatformAnalytics = function () {
											return null;
										}),
										(t.getPlatformPay = function () {
											return null;
										}),
										(t.getPlatformWithdraw = function () {
											return null;
										}),
										(t.getPlatformPromoteAgent =
											function () {
												return null;
											}),
										(t.doGetAntiAddictionInfo = function (
											e
										) {
											e(0, '', -1);
										}),
										(t.isShare = function () {
											return !1;
										}),
										(t.share = function () {
											return !1;
										}),
										(t.shareGroupRank = function () {
											return !1;
										}),
										(t.showToast = function () {
											return !1;
										}),
										(t.isSupportLogin = function () {
											return !1;
										}),
										(t.sdkLogin = function () {}),
										(t.hasVibrate = function () {
											return !1;
										}),
										(t.vibrate = function () {}),
										(t.cancelVibrate = function () {}),
										(t.loginTP = function () {}),
										e
									);
								})();
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								var n = (function () {
									function n() {
										(this.platform = null),
											(this.loginType = 0),
											(this.guestUser = null);
									}
									n.getInstance = function () {
										return (
											this._instance ||
												((this._instance = new n()),
												this._instance.init()),
											this._instance
										);
									};
									var o = n.prototype;
									return (
										(o.init = function () {
											var n = this.decryptStr(
												localStorage.getItem(
													'ly_last_userInfo'
												)
											);
											if (n && n.length > 0) {
												var o = JSON.parse(
													n,
													function (t, n) {
														return 'userInfo' == t
															? e.UserInfoImpl.fromJsonString(
																	n
															  )
															: n;
													}
												);
												this.lastLoginUserInfo = o;
											}
											for (
												var i = 0,
													a = [
														t.NativePlatform,
														t.LyH5EnvPlatform,
														t.TtPlatform,
														t.QQPlatform,
														t.WxPlatform,
														t.OppoPlatform,
														t.VivoPlatform,
														t.MeizuPlatform,
														t.BaiduPlatform,
														t.QttPlatform,
														t.LianShangPlatform,
														t.HelloPlatform,
														t.HtmlPlatfrom
													];
												i < a.length;
												i++
											) {
												var r = a[i];
												if (r && r.checkIsPlatform()) {
													this.platform = new r();
													break;
												}
											}
											this.platform &&
												this.platform.init();
										}),
										(o.getPlatformType = function () {
											return this.platform
												? this.platform.getPlatformType()
												: 0;
										}),
										(o.getPlatformAdAgent = function () {
											return this.platform
												? this.platform.getPlatformAdAgent()
												: null;
										}),
										(o.getPlatformAnalytics = function () {
											return this.platform
												? this.platform.getPlatformAnalytics()
												: null;
										}),
										(o.getPlatformPay = function () {
											return this.platform
												? this.platform.getPlatformPay()
												: null;
										}),
										(o.getPlatformWithdraw = function () {
											return this.platform
												? this.platform.getPlatformWithdraw()
												: null;
										}),
										(o.getPlatformPromoteAgent =
											function () {
												return this.platform
													? this.platform.getPlatformPromoteAgent()
													: null;
											}),
										(o.onPauseMusic = function (e) {
											this.pauseMusicFunc = e;
										}),
										(o.pauseMusic = function () {
											this.pauseMusicFunc &&
												this.pauseMusicFunc();
										}),
										(o.onResumeMusic = function (e) {
											this.resumeMusicFunc = e;
										}),
										(o.resumeMusic = function () {
											this.resumeMusicFunc &&
												this.resumeMusicFunc();
										}),
										(o.isShare = function () {
											return (
												!!this.platform &&
												this.platform.isShare()
											);
										}),
										(o.share = function (e, t, n, o) {
											this.platform
												? this.platform.share(
														e,
														t,
														n,
														o
												  )
												: n && n(!1);
										}),
										(o.shareGroupRank = function (
											e,
											t,
											n,
											o
										) {
											this.platform
												? this.platform.shareGroupRank(
														e,
														t,
														n,
														o
												  )
												: n && n(!1);
										}),
										(o.getShareParam = function () {
											return this.onRequestShareParam
												? this.onRequestShareParam()
												: null;
										}),
										(o.setOnRequestShareParam = function (
											e
										) {
											this.onRequestShareParam = e;
										}),
										(o.showToast = function (e) {
											return (
												!!this.platform &&
												this.platform.showToast(e)
											);
										}),
										(o.login = function (e) {
											var t = this;
											1 != this.loginType
												? this.platform
													? this.platform.login(
															function (n) {
																if (n) {
																	t.loginType = 1;
																	var o =
																		t.platform.getUser();
																	o &&
																		o.getUserInfo() &&
																		((t.lastLoginUserInfo =
																			void 0),
																		t.saveLoginUserInfo(
																			t.loginType,
																			o.getUserInfo()
																		));
																}
																e(n);
															}
													  )
													: e(!1)
												: e(!0);
										}),
										(o.loginTP = function (e, t, n) {
											var o = this;
											this.platform
												? this.platform.loginTP(
														e,
														function (n) {
															o.loginType = 1;
															var i =
																o.platform.getUser();
															i &&
																i.getUserInfo() &&
																((o.lastLoginUserInfo =
																	void 0),
																o.saveLoginUserInfo(
																	o.loginType,
																	i.getUserInfo(),
																	e
																)),
																t(n);
														},
														n
												  )
												: n('');
										}),
										(o.loginGuest = function (e) {
											(this.guestUser =
												new t.LocalUser()),
												this.guestUser.syncThirdUserInfo(),
												(this.loginType = 2),
												this.guestUser &&
													this.guestUser.getUserInfo() &&
													((this.lastLoginUserInfo =
														void 0),
													this.saveLoginUserInfo(
														this.loginType,
														this.guestUser.getUserInfo()
													)),
												e(!0);
										}),
										(o.logout = function () {
											this.platform &&
												this.platform.logout(),
												(e.LyHttp1.cookie = null),
												(this.loginType = 0);
										}),
										(o.getLoginType = function () {
											return this.loginType;
										}),
										(o.checkThirdAuthUserInfo = function (
											e,
											t
										) {
											this.platform
												? this.platform.checkThirdAuthUserInfo(
														e,
														t
												  )
												: e && e(!0);
										}),
										(o.getUser = function () {
											return 2 == this.loginType
												? this.guestUser
												: this.platform.getUser();
										}),
										(o.getLoginUserInfo = function () {
											var e = this.platform.getUser();
											return e && e.getUserInfo()
												? e.getUserInfo()
												: this.lastLoginUserInfo
												? this.lastLoginUserInfo
														.userInfo
												: null;
										}),
										(o.saveLoginUserInfo = function (
											e,
											t,
											n
										) {
											var o = {
												loginType: e,
												thirdLoginType: n,
												userInfo: t.toJsonString()
											};
											localStorage.setItem(
												'ly_last_userInfo',
												this.encryptStr(
													JSON.stringify(o)
												)
											);
										}),
										(o.getThirdUserInfo = function (e) {
											var t = this;
											this.getThirdUserInfoOriginal(
												function (n) {
													var o =
														t.parseThirdUserInfoOriginal(
															n
														);
													e && e(o);
												}
											);
										}),
										(o.getThirdUserInfoOriginal = function (
											e
										) {
											return this.platform
												? this.platform.getThirdUserInfoOriginal(
														e
												  )
												: null;
										}),
										(o.parseThirdUserInfoOriginal =
											function (e) {
												return this.platform
													? this.platform.parseThirdUserInfoOriginal(
															e
													  )
													: null;
											}),
										(o.doGetAntiAddictionInfo = function (
											e
										) {
											this.platform &&
												this.platform.doGetAntiAddictionInfo(
													e
												);
										}),
										(o.isSupportLogin = function (e) {
											this.platform &&
												this.platform.isSupportLogin(e);
										}),
										(o.sdkLogin = function (e, t) {
											this.platform &&
												this.platform.sdkLogin(e, t);
										}),
										(o.hasVibrate = function () {
											this.platform &&
												this.platform.hasVibrate();
										}),
										(o.vibrate = function (e, t) {
											this.platform &&
												this.platform.vibrate(e, t);
										}),
										(o.cancelVibrate = function () {
											this.platform &&
												this.platform.cancelVibrate();
										}),
										(o.encryptStr = function (e) {
											if (e && e.length > 0) {
												for (
													var t = String.fromCharCode(
															e.charCodeAt(0) +
																e.length
														),
														n = 1;
													n < e.length;
													n++
												)
													t += String.fromCharCode(
														e.charCodeAt(n) +
															e.charCodeAt(n - 1)
													);
												return escape(t);
											}
											return null;
										}),
										(o.decryptStr = function (e) {
											if (e && e.length > 0) {
												e = unescape(e);
												for (
													var t = String.fromCharCode(
															e.charCodeAt(0) -
																e.length
														),
														n = 1;
													n < e.length;
													n++
												)
													t += String.fromCharCode(
														e.charCodeAt(n) -
															t.charCodeAt(n - 1)
													);
												return t;
											}
											return null;
										}),
										n
									);
								})();
								t.PlatformManager = n;
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							var t = (function () {
								function t() {
									(this.rank = -1),
										(this.user_id = -1),
										(this.user_name = ''),
										(this.user_sex = 0),
										(this.user_image = ''),
										(this.max_score = 0),
										(this.user_gate_all = 0),
										(this.day_max_score = 0),
										(this.user_gold = 0);
								}
								return (
									(t.toRankItem = function (t) {
										var n = new e.RankItemImpl();
										return (
											(n.userName = t.user_name),
											(n.sex = t.user_sex),
											(n.score = t.max_score),
											(n.headImgUrl = t.user_image),
											(n.stage = t.user_gate_all),
											(n.challengeMinDuration =
												t.day_max_score),
											(n.gold = t.user_gold),
											n
										);
									}),
									t
								);
							})();
							e.NetRankData = (function () {
								function n() {
									(this.all_rank = null),
										(this.my_rank = null);
								}
								return (
									(n.toRank = function (n, o) {
										for (
											var i,
												a = new e.RankImpl(o),
												r = s(n.all_rank);
											!(i = r()).done;

										) {
											var c = i.value,
												l = t.toRankItem(c);
											a.addRankItem(l);
										}
										return (
											(a.selfRankItem = t.toRankItem(
												n.my_rank
											)),
											(a.selfRankId = n.my_rank.rank),
											a
										);
									}),
									n
								);
							})();
						})(f || (f = {})),
						(function (e) {
							var t = (function () {
									function t() {
										(this.selfRankItem =
											new e.RankItemImpl()),
											(this.selfRankId = -1),
											(this.rankItems = new Array());
									}
									return (
										(t.fromJsonString = function (n) {
											try {
												var o = JSON.parse(
														n,
														function (t, n) {
															if (
																'selfRankItem' ==
																t
															) {
																var o =
																	new e.RankItemImpl();
																return (
																	n &&
																		n.rankItemData &&
																		(o.rankItemData =
																			n.rankItemData),
																	o
																);
															}
															if (
																'rankItems' == t
															) {
																for (
																	var i,
																		a =
																			new Array(),
																		r =
																			s(
																				n
																			);
																	!(i = r())
																		.done;

																) {
																	var c =
																			i.value,
																		l =
																			new e.RankItemImpl();
																	(l.rankItemData =
																		c.rankItemData),
																		a.push(
																			l
																		);
																}
																return a;
															}
															return n;
														}
													),
													i = new t();
												return Object.assign(i, o), i;
											} catch (a) {
												console.log(a);
											}
											return null;
										}),
										(t.prototype.toJsonString =
											function () {
												return JSON.stringify(this);
											}),
										t
									);
								})(),
								n = (function () {
									function e(e) {
										(this.rankData = new t()),
											(this.rankMode = e);
									}
									e.fromJsonString = function (n) {
										var o = t.fromJsonString(n);
										if (o) {
											var i = new e(o.rankMode);
											return (i.rankData = o), i;
										}
										return null;
									};
									var n = e.prototype;
									return (
										(n.toJsonString = function () {
											return this.rankData.toJsonString();
										}),
										(n.addRankItem = function (e) {
											this.rankData.rankItems.push(e);
										}),
										(n.sort = function () {
											this.rankData.rankItems.sort(
												function (e, t) {
													return t.score - e.score;
												}
											);
											for (
												var e = 0;
												e <
												this.rankData.rankItems.length;
												e++
											) {
												var t =
													this.rankData.rankItems[e];
												if (
													this.selfRankItem
														.headImgUrl ==
													t.headImgUrl
												)
													return (
														(this.rankData.selfRankId =
															e + 1),
														void (this.rankData.selfRankItem.score =
															t.score)
													);
											}
											this.rankData.selfRankId = -1;
										}),
										(n.getRankItem = function (e) {
											return this.rankItems[e - 1];
										}),
										i(e, [
											{
												key: 'rankMode',
												get: function () {
													return this.rankData
														.rankMode;
												},
												set: function (e) {
													this.rankData.rankMode = e;
												}
											},
											{
												key: 'selfRankItem',
												get: function () {
													return this.rankData
														.selfRankItem;
												},
												set: function (e) {
													this.rankData.selfRankItem =
														e;
												}
											},
											{
												key: 'selfRankId',
												get: function () {
													return this.rankData
														.selfRankId;
												},
												set: function (e) {
													this.rankData.selfRankId =
														e;
												}
											},
											{
												key: 'rankItems',
												get: function () {
													return this.rankData
														.rankItems;
												}
											}
										]),
										e
									);
								})();
							e.RankImpl = n;
						})(f || (f = {})),
						(function (e) {
							var t = function () {
								(this.userName = ''),
									(this.sex = 0),
									(this.score = 0),
									(this.headImgUrl = ''),
									(this.stage = 0),
									(this.challengeMinDuration = 0),
									(this.gold = 0);
							};
							(e.RankItemData = t),
								(e.RankItemImpl = (function () {
									function e() {
										this.rankItemData = new t();
									}
									return (
										i(e, [
											{
												key: 'userName',
												get: function () {
													return this.rankItemData
														.userName;
												},
												set: function (e) {
													this.rankItemData.userName =
														e;
												}
											},
											{
												key: 'sex',
												get: function () {
													return this.rankItemData
														.sex;
												},
												set: function (e) {
													this.rankItemData.sex = e;
												}
											},
											{
												key: 'score',
												get: function () {
													return this.rankItemData
														.score;
												},
												set: function (e) {
													this.rankItemData.score = e;
												}
											},
											{
												key: 'gold',
												get: function () {
													return this.rankItemData
														.gold;
												},
												set: function (e) {
													this.rankItemData.gold = e;
												}
											},
											{
												key: 'headImgUrl',
												get: function () {
													return this.rankItemData
														.headImgUrl;
												},
												set: function (e) {
													this.rankItemData.headImgUrl =
														e;
												}
											},
											{
												key: 'stage',
												get: function () {
													return this.rankItemData
														.stage;
												},
												set: function (e) {
													this.rankItemData.stage = e;
												}
											},
											{
												key: 'challengeMinDuration',
												get: function () {
													return this.rankItemData
														.challengeMinDuration;
												},
												set: function (e) {
													this.rankItemData.challengeMinDuration =
														e;
												}
											}
										]),
										e
									);
								})());
						})(f || (f = {})),
						(function (e) {
							var t = (function () {
								function t() {
									(this.onRankChangeListeners = new Array()),
										(this.weekRank = new e.RankImpl(
											e.Constants.RankMode_week
										)),
										(this.allRank = new e.RankImpl(
											e.Constants.RankMode_all
										));
								}
								t.getInstance = function () {
									return (
										this._instance ||
											((this._instance = new t()),
											this._instance.init()),
										this._instance
									);
								};
								var n = t.prototype;
								return (
									(n.init = function () {}),
									(n.getRank = function (t, n) {
										t == e.Constants.RankMode_week
											? this.weekRank
												? n && n(this.weekRank)
												: this.updateRank(t, n)
											: t ==
											  e.Constants.RankMode_friendWeek
											? this.getFriendWeekRank(n)
											: t ==
											  e.Constants.RankMode_friendAll
											? this.getFriendAllRank(n)
											: t ==
											  e.Constants.RankMode_groupWeek
											? this.getGroupWeekRank(n)
											: t == e.Constants.RankMode_groupAll
											? this.getGroupAllRank(n)
											: n && n(null);
									}),
									(n.updateRank = function (t, n, o) {
										var i = this;
										if (
											(void 0 === o && (o = 0),
											t == e.Constants.RankMode_week)
										) {
											if (
												1 !=
												e.core.PlatformManager.getInstance().getLoginType()
											)
												return void (n && n(null));
											var a = e.getSelfUser().getUserId();
											if (!a) return void (n && n(null));
											var r =
													e.ConstInner.URL_DOMAIN +
													'rank/get_all_user_rank_0',
												s = JSON.stringify({
													user_id: Number.parseInt(a),
													start_num: 0,
													end_num: 99,
													game: e.getAppConfig()
														.appId,
													rank_type: o
												});
											e.LyHttp1.post(r, s, function (o) {
												var a = new e.RankImpl(t);
												if (0 == o.code)
													try {
														var s =
															new e.NetRankData();
														return (
															Object.assign(
																s,
																o.data
															),
															void (
																(a =
																	e.NetRankData.toRank(
																		s,
																		t
																	)) &&
																((i.weekRank =
																	a),
																n && n(a),
																i.rankChanged(
																	t,
																	a
																))
															)
														);
													} catch (r) {
														console.log(r);
													}
												n && n(null);
											});
										} else
											t == e.Constants.RankMode_all
												? n && n(this.allRank)
												: t ==
												  e.Constants
														.RankMode_friendWeek
												? this.getFriendWeekRank(n)
												: t ==
												  e.Constants.RankMode_friendAll
												? this.getFriendAllRank(n)
												: n && n(null);
									}),
									(n.onRankChange = function (e) {
										this.onRankChangeListeners.push(e);
									}),
									(n.rankChanged = function (e, t) {
										for (
											var n,
												o = s(
													this.onRankChangeListeners
												);
											!(n = o()).done;

										)
											(0, n.value)(e, t);
									}),
									(n.getFriendWeekRank = function (e) {
										e && e(null);
									}),
									(n.getFriendAllRank = function (e) {
										e && e(null);
									}),
									(n.getGroupWeekRank = function (e) {
										e && e(null);
									}),
									(n.getGroupAllRank = function (e) {
										e && e(null);
									}),
									t
								);
							})();
							e.RankManager = t;
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.UserImpl = (function () {
									function n() {
										(this.userInfo = null),
											(this.userGoods = null),
											(this.userSign = new t.UserSignImpl(
												this
											));
									}
									var o = n.prototype;
									return (
										(o.setUserInfo = function (e) {
											(this.userInfo = e),
												(this.userGoods =
													new t.UserGoodsImpl(this));
										}),
										(o.syncThirdUserInfo = function (e) {
											var n = this;
											t.PlatformManager.getInstance().getThirdUserInfo(
												function (t) {
													t
														? (t.userName &&
																(n.userInfo.userName =
																	t.userName),
														  t.sex &&
																(n.userInfo.sex =
																	t.sex),
														  t.headImgUrl &&
																(n.userInfo.headImgUrl =
																	t.headImgUrl),
														  n.submitAllUserInfo(),
														  n.submitUserGoods(),
														  e && e(0))
														: e && e(1);
												}
											);
										}),
										(o.getUserInfo = function () {
											return this.userInfo;
										}),
										(o.getUserInfoJsonStr = function () {
											return this.userInfo.toJsonString();
										}),
										(o.getUserId = function () {
											return this.userInfo.userId;
										}),
										(o.getCookie = function () {
											return e.LyHttp1.cookie;
										}),
										(o.applyUserParams = function (t) {
											t.has(e.Constants.User_Info_Name) &&
												(this.userInfo.userName = t.get(
													e.Constants.User_Info_Name
												)),
												t.has(
													e.Constants.User_Info_Image
												) &&
													(this.userInfo.headImgUrl =
														t.get(
															e.Constants
																.User_Info_Image
														)),
												t.has(
													e.Constants.User_Info_Sex
												) &&
													(this.userInfo.sex = t.get(
														e.Constants
															.User_Info_Sex
													));
										}),
										(o.submitAllUserInfo = function (t) {
											var n = new Map();
											n.set(
												e.Constants.User_Info_Name,
												this.userInfo.userName
											),
												n.set(
													e.Constants.User_Info_Sex,
													this.userInfo.sex
												),
												n.set(
													e.Constants.User_Info_Image,
													this.userInfo.headImgUrl
												),
												this.submitUserInfo(n, t);
										}),
										(o.getUserGoods = function () {
											return this.userGoods;
										}),
										(o.getUserSign = function () {
											return this.userSign;
										}),
										(o.submitGold = function () {}),
										n
									);
								})();
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.LocalUser = (function (t) {
									a(o, t);
									var n = o.prototype;
									function o() {
										var n,
											o = (n =
												t.call(this) ||
												this).decryptStr(
												localStorage.getItem(
													'ly_userInfo'
												) || ''
											),
											i =
												e.UserInfoImpl.fromJsonString(
													o
												);
										return (
											i || (i = new e.UserInfoImpl()),
											i.userId || (i.userId = n.genUID()),
											n.setUserInfo(i),
											n
										);
									}
									return (
										(n.genUID = function () {
											var e =
													'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
														''
													),
												t = 'TMP';
											t += new Date().getTime();
											for (
												var n = e.length, o = 0;
												o < 60;
												o++
											)
												t +=
													e[
														Math.round(
															Math.random() * n
														)
													];
											return t.substr(0, 64);
										}),
										(n.submitUserInfo = function (e, t) {
											this.applyUserParams(e),
												localStorage.setItem(
													'ly_userInfo',
													this.encryptStr(
														this.getUserInfoJsonStr()
													) || ''
												),
												t && t(0);
										}),
										(n.submitChallengeDuration = function (
											e,
											t
										) {
											e <= 0 && t && t(1),
												e >=
													this.userInfo
														.score_everyday &&
													t &&
													t(1),
												(this.userInfo.score_everyday =
													e),
												localStorage.setItem(
													'ly_userInfo',
													this.getUserInfoJsonStr()
												),
												t && t(0);
										}),
										(n.submitStage = function (e, t) {
											e > 0 || (t && t(1)),
												(this.userInfo.stage += e),
												localStorage.setItem(
													'ly_userInfo',
													this.getUserInfoJsonStr()
												),
												t && t(0);
										}),
										(n.submitGold = function (e, t) {
											this.userInfo.userId
												? ((this.userInfo.gold += e),
												  localStorage.setItem(
														'ly_userInfo',
														this.encryptStr(
															this.getUserInfoJsonStr()
														) || ''
												  ),
												  t && t(0))
												: t && t(1);
										}),
										(n.submitScore = function (t, n) {
											t >= 0 || (n && n(1));
											var o = !1;
											t != this.userInfo.score_all &&
												((this.userInfo.score_all = t),
												(o = !0));
											var i = new Date();
											e.TimeUtil.isSameWeek(
												i,
												new Date(
													this.userInfo.score_week_times
												)
											)
												? t >
														this.userInfo
															.score_week &&
												  ((this.userInfo.score_week =
														t),
												  (this.userInfo.score_week_times =
														i.getTime()),
												  (o = !0))
												: ((this.userInfo.score_week =
														t),
												  (this.userInfo.score_week_times =
														i.getTime()),
												  (o = !0)),
												o &&
													localStorage.setItem(
														'ly_userInfo',
														this.encryptStr(
															this.getUserInfoJsonStr()
														) || ''
													),
												n && n(0);
										}),
										(n.submitUserGoods = function (e) {
											localStorage.setItem(
												'ly_userInfo',
												this.encryptStr(
													this.getUserInfoJsonStr()
												) || ''
											),
												e && e(0);
										}),
										(n.encryptStr = function (e) {
											for (
												var t = String.fromCharCode(
														e.charCodeAt(0) +
															e.length
													),
													n = 1;
												n < e.length;
												n++
											)
												t += String.fromCharCode(
													e.charCodeAt(n) +
														e.charCodeAt(n - 1)
												);
											return escape(t);
										}),
										(n.decryptStr = function (e) {
											e = unescape(e);
											for (
												var t = String.fromCharCode(
														e.charCodeAt(0) -
															e.length
													),
													n = 1;
												n < e.length;
												n++
											)
												t += String.fromCharCode(
													e.charCodeAt(n) -
														t.charCodeAt(n - 1)
												);
											return t;
										}),
										o
									);
								})(t.UserImpl);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.NetUserInfo = (function () {
									function t() {
										(this.user_name = ''),
											(this.user_sex = 0),
											(this.user_level = 0),
											(this.user_upgrade_exp = 0),
											(this.user_now_exp = 0),
											(this.user_gold = 0),
											(this.user_diamonds = 0),
											(this.max_score = 0),
											(this.week_max_score = 0),
											(this.daily_share_time = 0),
											(this.user_gate_all = 0),
											(this.day_max_score = 0);
									}
									return (
										(t.prototype.toUserInfo = function () {
											var t = new e.UserInfoImpl();
											(t.userId = this.user_id),
												(t.userName = this.user_name),
												(t.sex = this.user_sex),
												(t.headImgUrl =
													this.user_image),
												(t.stage = this.user_gate_all);
											var n = this.user_props
												? e.Convert.stringToMap_number(
														this.user_props
												  )
												: null;
											return (
												(t.goodses = n || new Map()),
												(t.score_all = this.max_score),
												(t.score_week =
													this.week_max_score),
												(t.score_everyday =
													this.day_max_score),
												(t.gold = this.user_gold),
												t
											);
										}),
										t
									);
								})();
								var o = function () {
									(this.user_level = 0),
										(this.user_upgrade_exp = 0),
										(this.user_now_exp = 0),
										(this.user_gold = 0),
										(this.user_diamonds = 0),
										(this.user_gate_all = 0),
										(this.max_score = 0),
										(this.week_max_score = 0),
										(this.day_max_score = 0);
								};
								t.NetUser = (function (t) {
									function i() {
										var o;
										return (
											((o =
												t.call(this) ||
												this).tempUserInfo = null),
											(o.tempUserInfo =
												new e.UserInfoImpl()),
											t.prototype.setUserInfo.call(
												n(o),
												o.tempUserInfo
											),
											o
										);
									}
									a(i, t);
									var r = i.prototype;
									return (
										(r.setUserInfo = function (e) {
											if (
												(t.prototype.setUserInfo.call(
													this,
													e
												),
												this.tempUserInfo)
											) {
												for (
													var n,
														o = s(
															this.tempUserInfo
																.goodses
														);
													!(n = o()).done;

												) {
													var i = n.value,
														a = i[0],
														r = i[1],
														c = e.goodses.get(a);
													isNaN(c) && (c = 0),
														(c += r),
														e.goodses.set(a, c);
												}
												(this.tempUserInfo = null),
													this.submitUserGoods();
											}
										}),
										(r.login = function (e) {
											e(1);
										}),
										(r.submitUserInfo = function (t, n) {
											var o = this;
											if (this.userInfo.userId) {
												var i =
													e.ConstInner
														.URL_DOMAIN_LOGIN +
													e.ConstInner
														.URL_DOMAIN_SUBMITUSERInfo_INTERFACE;
												t.set(
													'user_id',
													Number.parseInt(
														this.userInfo.userId
													)
												),
													t.set(
														'user_game',
														e.getAppConfig().appId
													);
												var a =
													e.Convert.MapToString(t);
												e.LyHttp1.post(
													i,
													a,
													function (e) {
														0 == e.code
															? (o.applyUserParams(
																	t
															  ),
															  n && n(0))
															: 200 !=
															  e.http_status
															? n && n(-1)
															: n && n(1);
													}
												);
											} else n && n(1);
										}),
										(r.submitChallengeDuration = function (
											t,
											n
										) {
											var i = this;
											if (this.userInfo.userId) {
												t <= 0 && n && n(1),
													t >=
														this.userInfo
															.score_everyday &&
														n &&
														n(1);
												var a =
														e.ConstInner
															.URL_DOMAIN_LOGIN +
														'users/update_user_info_0',
													r = JSON.stringify({
														user_id:
															Number.parseInt(
																this.getUserId()
															),
														day_max_score: t
													});
												e.LyHttp1.post(
													a,
													r,
													function (e) {
														if (0 == e.code) {
															try {
																var a = new o();
																Object.assign(
																	a,
																	e.data
																),
																	(i.userInfo.score_everyday =
																		a.day_max_score);
															} catch (t) {
																console.log(t);
															}
															n && n(0);
														} else
															200 != e.http_status
																? n && n(-1)
																: n && n(1);
													}
												);
											} else n && n(1);
										}),
										(r.submitStage = function (t, n) {
											var i = this;
											if (this.userInfo.userId) {
												t > 0 || (n && n(1));
												var a =
														e.ConstInner
															.URL_DOMAIN_LOGIN +
														'users/update_user_info_0',
													r = JSON.stringify({
														user_id:
															Number.parseInt(
																this.getUserId()
															),
														user_gate_count: t
													});
												e.LyHttp1.post(
													a,
													r,
													function (e) {
														if (0 == e.code) {
															try {
																var a = new o();
																Object.assign(
																	a,
																	e.data
																),
																	(i.userInfo.stage =
																		a.user_gate_all);
															} catch (t) {
																console.log(t);
															}
															n && n(0);
														} else
															200 != e.http_status
																? n && n(-1)
																: n && n(1);
													}
												);
											} else n && n(1);
										}),
										(r.submitGold = function (t, n) {
											var i = this;
											if (this.userInfo.userId)
												if (t != this.userInfo.gold) {
													var a =
															e.ConstInner
																.URL_DOMAIN_LOGIN +
															'users/update_user_info_0',
														r = JSON.stringify({
															user_id:
																Number.parseInt(
																	this.getUserId()
																),
															user_gold: t
														});
													e.LyHttp1.post(
														a,
														r,
														function (e) {
															if (0 == e.code) {
																try {
																	var a =
																		new o();
																	Object.assign(
																		a,
																		e.data
																	),
																		(i.userInfo.gold =
																			a.user_gold);
																} catch (t) {
																	console.log(
																		t
																	);
																}
																n && n(0);
															} else
																200 !=
																e.http_status
																	? n && n(-1)
																	: n && n(1);
														}
													);
												} else n && n(1);
											else n && n(1);
										}),
										(r.submitScore = function (t, n) {
											var i = this;
											if (this.userInfo.userId)
												if (t >= 0) {
													var a =
															e.ConstInner
																.URL_DOMAIN_LOGIN +
															'users/update_user_info_0',
														r = JSON.stringify({
															user_id:
																Number.parseInt(
																	this.getUserId()
																),
															max_score: t
														});
													e.LyHttp1.post(
														a,
														r,
														function (e) {
															if (0 == e.code) {
																try {
																	var a =
																		new o();
																	Object.assign(
																		a,
																		e.data
																	),
																		(i.userInfo.score_all =
																			a.max_score),
																		(i.userInfo.score_week =
																			a.week_max_score);
																} catch (t) {
																	console.log(
																		t
																	);
																}
																n && n(0);
															} else
																200 !=
																e.http_status
																	? n && n(-1)
																	: n && n(1);
														}
													);
												} else n && n(1);
											else n && n(1);
										}),
										(r.submitUserGoods = function (t) {
											if (this.userInfo.userId) {
												var n =
														e.ConstInner
															.URL_DOMAIN_LOGIN +
														'users/update_user_props_info_0',
													o = JSON.stringify({
														user_id:
															Number.parseInt(
																this.getUserId()
															),
														user_props:
															this.userGoods.toJsonString()
													});
												e.LyHttp1.post(
													n,
													o,
													function (e) {
														0 == e.code
															? t && t(0)
															: 200 !=
															  e.http_status
															? t && t(-1)
															: t && t(1);
													}
												);
											} else t && t(1);
										}),
										i
									);
								})(t.UserImpl);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(e.core || (e.core = {})).UserGoodsImpl =
								(function () {
									function t(e) {
										this.user = e;
									}
									var n = t.prototype;
									return (
										(n.toJsonString = function () {
											return e.Convert.MapToString(
												this.goodses
											);
										}),
										(n.hasGoods = function (e) {
											return this.goodses.has(e);
										}),
										(n.removeGoods = function (e) {
											this.goodses.delete(e);
										}),
										(n.getGoodsNum = function (e, t) {
											var n = this.goodses.get(e);
											return (
												isNaN(n) && (n = t),
												isNaN(n) && (n = 0),
												n
											);
										}),
										(n.addGoodsNum = function (e, t, n, o) {
											var i = this.getGoodsNum(e, n);
											this.setGoodsNum(e, i + t, o);
										}),
										(n.useGoodsNum = function (e, t, n, o) {
											var i = this.getGoodsNum(e, n);
											return (
												i >= t &&
												(this.setGoodsNum(e, i - t, o),
												!0)
											);
										}),
										(n.setGoodsNum = function (e, t, n) {
											isNaN(t) ||
												(this.goodses.set(e, t),
												(n || null == n || null == n) &&
													this.submit());
										}),
										(n.submit = function (e) {
											this.user.submitUserGoods(e);
										}),
										i(t, [
											{
												key: 'goodses',
												get: function () {
													return this.user.getUserInfo()
														.goodses;
												}
											}
										]),
										t
									);
								})();
						})(f || (f = {})),
						(function (e) {
							var t = (function () {
								function t() {
									(this.userId = ''),
										(this.userName = ''),
										(this.sex = 0),
										(this.headImgUrl = ''),
										(this.stage = 0),
										(this.gold = 0),
										(this.score_all = 0),
										(this.score_week = 0),
										(this.score_week_times = 0),
										(this.score_everyday = 0),
										(this.goodses = new Map());
								}
								return (
									(t.fromJsonString = function (n) {
										try {
											var o = JSON.parse(
													n,
													function (t, n) {
														return 'goodses' == t
															? e.Convert.stringToMap_number(
																	n
															  ) || new Map()
															: n;
													}
												),
												i = new t();
											return Object.assign(i, o), i;
										} catch (a) {
											console.log(a);
										}
										return null;
									}),
									(t.prototype.toJsonString = function () {
										var t = this;
										return JSON.stringify(
											this,
											function (n, o) {
												return 'goodses' == n
													? e.Convert.MapToString(
															t.goodses
													  )
													: o;
											}
										);
									}),
									t
								);
							})();
							e.UserInfoData = t;
							var n = (function () {
								function e() {
									this.userInfoData = new t();
								}
								return (
									(e.fromJsonString = function (n) {
										var o = t.fromJsonString(n);
										if (o) {
											var i = new e();
											return (i.userInfoData = o), i;
										}
										return null;
									}),
									(e.prototype.toJsonString = function () {
										return this.userInfoData.toJsonString();
									}),
									i(e, [
										{
											key: 'userId',
											get: function () {
												return this.userInfoData.userId;
											},
											set: function (e) {
												this.userInfoData.userId = e;
											}
										},
										{
											key: 'userName',
											get: function () {
												return this.userInfoData
													.userName;
											},
											set: function (e) {
												this.userInfoData.userName = e;
											}
										},
										{
											key: 'sex',
											get: function () {
												return this.userInfoData.sex;
											},
											set: function (e) {
												this.userInfoData.sex = e;
											}
										},
										{
											key: 'headImgUrl',
											get: function () {
												return this.userInfoData
													.headImgUrl;
											},
											set: function (e) {
												this.userInfoData.headImgUrl =
													e;
											}
										},
										{
											key: 'stage',
											get: function () {
												return this.userInfoData.stage;
											},
											set: function (e) {
												this.userInfoData.stage = e;
											}
										},
										{
											key: 'gold',
											get: function () {
												return this.userInfoData.gold;
											},
											set: function (e) {
												this.userInfoData.gold = e;
											}
										},
										{
											key: 'goodses',
											get: function () {
												return this.userInfoData
													.goodses;
											},
											set: function (e) {
												this.userInfoData.goodses = e;
											}
										},
										{
											key: 'score_all',
											get: function () {
												return this.userInfoData
													.score_all;
											},
											set: function (e) {
												this.userInfoData.score_all = e;
											}
										},
										{
											key: 'score_week',
											get: function () {
												return this.userInfoData
													.score_week;
											},
											set: function (e) {
												this.userInfoData.score_week =
													e;
											}
										},
										{
											key: 'score_everyday',
											get: function () {
												return this.userInfoData
													.score_everyday;
											},
											set: function (e) {
												this.userInfoData.score_everyday =
													e;
											}
										},
										{
											key: 'score_week_times',
											get: function () {
												return this.userInfoData
													.score_week_times;
											},
											set: function (e) {
												this.userInfoData.score_week_times =
													e;
											}
										}
									]),
									e
								);
							})();
							e.UserInfoImpl = n;
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								var n = (function () {
									function t(e) {
										(this.user = null), (this.user = e);
									}
									var n = t.prototype;
									return (
										(n.getLastSignDate = function () {
											return this.user
												.getUserGoods()
												.getGoodsNum(
													t.UserSignKey_LastSignDate
												);
										}),
										(n.getSignNum = function () {
											return this.user
												.getUserGoods()
												.getGoodsNum(
													t.UserSignKey_SignNum
												);
										}),
										(n.resetSignNum = function () {
											this.user
												.getUserGoods()
												.setGoodsNum(
													t.UserSignKey_SignNum,
													0
												);
										}),
										(n.getCurrentDate = function () {
											return e.TimeUtil.getDate();
										}),
										(n.isNeedSign = function () {
											var e = this.getCurrentDate(),
												t = this.getLastSignDate();
											return e >= 0 && t >= 0 && e > t;
										}),
										(n.sign = function (e) {
											var n = this;
											this.isNeedSign() || (e && e(1));
											var o = this.getLastSignDate(),
												i = this.getSignNum();
											this.user
												.getUserGoods()
												.setGoodsNum(
													t.UserSignKey_LastSignDate,
													this.getCurrentDate(),
													!1
												),
												this.user
													.getUserGoods()
													.setGoodsNum(
														t.UserSignKey_SignNum,
														i + 1,
														!1
													),
												this.user.submitUserGoods(
													function (a) {
														0 == a
															? e && e(0)
															: (n.user
																	.getUserGoods()
																	.setGoodsNum(
																		t.UserSignKey_LastSignDate,
																		o,
																		!1
																	),
															  n.user
																	.getUserGoods()
																	.setGoodsNum(
																		t.UserSignKey_SignNum,
																		i,
																		!1
																	),
															  e && e(a));
													}
												);
										}),
										(n.getLastAndCurrentIntervalSignDay =
											function () {
												var e = this.getLastSignDate(),
													t = this.getCurrentDate();
												return e <= 0 || t <= 0
													? 0
													: this.getIntervalDay(e, t);
											}),
										(n.getIntervalDay = function (e, t) {
											var n = new Date(
												this.convertDate(e)
											).getTime();
											return (
												(new Date(
													this.convertDate(t)
												).getTime() -
													n) /
												864e5
											);
										}),
										(n.convertDate = function (e) {
											var t = e % 1e4;
											return new Date(
												e / 1e4,
												t / 100 - 1,
												t % 100,
												0,
												0,
												0
											);
										}),
										t
									);
								})();
								(n.UserSignKey_LastSignDate = -1),
									(n.UserSignKey_SignNum = -2),
									(t.UserSignImpl = n);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (e) {
								e.BaseWithdraw = (function () {
									function t() {}
									var n = t.prototype;
									return (
										(n.checkCanBonus = function () {
											var t =
												e.PlatformManager.getInstance().getLoginUserInfo();
											return !!(
												t &&
												t.userId &&
												t.userId.length > 0
											);
										}),
										(n.takeBonusRequest = function () {}),
										(n.takeBonusByPosID = function () {}),
										t
									);
								})();
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (e) {
								var t = (function () {
									function t() {}
									t.getInstance = function () {
										return (
											this.instance ||
												((this.instance = new t()),
												this.instance.init()),
											this.instance
										);
									};
									var n = t.prototype;
									return (
										(n.init = function () {}),
										(n.checkCanBonus = function () {
											return (
												!!this.withdraw &&
												this.withdraw.checkCanBonus()
											);
										}),
										(n.takeBonus = function (e, t) {
											this.withdraw
												? this.withdraw.takeBonusRequest(
														e,
														t
												  )
												: t &&
												  t(
														!1,
														'\u63d0\u73b0\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55'
												  );
										}),
										(n.takeBonusByPosID = function (e, t) {
											this.withdraw &&
												this.withdraw.takeBonusByPosID(
													e,
													t
												);
										}),
										i(t, [
											{
												key: 'withdraw',
												get: function () {
													return e.PlatformManager.getInstance().getPlatformWithdraw();
												}
											}
										]),
										t
									);
								})();
								(t.instance = null), (e.WithDrawManager = t);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(e.payApi || (e.payApi = {})).BasePay =
								(function () {
									function e() {}
									var t = e.prototype;
									return (
										(t.isPay = function () {
											return !1;
										}),
										(t.pay = function () {}),
										(t.payOrderNum = function () {}),
										(t.checkWaitHandleOrder = function (e) {
											e([]);
										}),
										e
									);
								})();
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								var n = (function () {
									function t() {
										this.pays = null;
									}
									t.getInstance = function () {
										return (
											this.instance ||
												((this.instance = new t()),
												this.instance.init()),
											this.instance
										);
									};
									var n = t.prototype;
									return (
										(n.init = function () {
											this.pays =
												e.core.PlatformManager.getInstance().getPlatformPay();
										}),
										(n.isPay = function () {
											var e = !1;
											return (
												this.pays &&
													(e = this.pays.isPay()),
												e
											);
										}),
										(n.pay = function (e, t) {
											this.pays && this.pays.pay(e, t);
										}),
										(n.payOrderNum = function (e, t) {
											this.pays &&
												this.pays.payOrderNum(e, t);
										}),
										(n.checkWaitHandleOrder = function (e) {
											this.pays &&
												this.pays.checkWaitHandleOrder(
													e
												);
										}),
										t
									);
								})();
								(n.instance = null), (t.PayManager = n);
							})(e.payApi || (e.payApi = {}));
						})(f || (f = {})),
						(function (e) {
							(function (e) {
								(function (e) {
									var t = function () {};
									e.PromoteItemImpl = (function () {
										function n() {
											this.promoteItemParam = new t();
										}
										return (
											(n.prototype.open = function () {
												e.PromoteManager.getInstance().openPromoteItem(
													this
												);
											}),
											i(n, [
												{
													key: 'position',
													get: function () {
														return this
															.promoteItemParam
															.position;
													},
													set: function (e) {
														this.promoteItemParam.position =
															e;
													}
												},
												{
													key: 'title',
													get: function () {
														return this
															.promoteItemParam
															.title;
													},
													set: function (e) {
														this.promoteItemParam.title =
															e;
													}
												},
												{
													key: 'iconUrl',
													get: function () {
														return this
															.promoteItemParam
															.iconUrl;
													},
													set: function (e) {
														this.promoteItemParam.iconUrl =
															e;
													}
												},
												{
													key: 'packageName',
													get: function () {
														return this
															.promoteItemParam
															.packageName;
													},
													set: function (e) {
														this.promoteItemParam.packageName =
															e;
													}
												},
												{
													key: 'path',
													get: function () {
														return this
															.promoteItemParam
															.path;
													},
													set: function (e) {
														this.promoteItemParam.path =
															e;
													}
												},
												{
													key: 'extra',
													get: function () {
														return this
															.promoteItemParam
															.extra;
													},
													set: function (e) {
														this.promoteItemParam.extra =
															e;
													}
												}
											]),
											n
										);
									})();
								})(e.promote || (e.promote = {}));
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (e) {
								(function (t) {
									t.BasePromoteAgent = (function () {
										function e() {
											(this.updateStatus = 0),
												(this.updateFinishTasks =
													new Array());
										}
										var t = e.prototype;
										return (
											(t.init = function () {
												this.updatePromoteItem();
											}),
											(t.onUpdatePromoteItemFinish =
												function () {
													var e = this;
													(this.updateStatus = 2),
														this.updateFinishTasks.forEach(
															function (t, n) {
																t(),
																	e.updateFinishTasks.splice(
																		n
																	);
															}
														);
												}),
											(t.getPromoteItem = function (
												e,
												t
											) {
												var n = this;
												if (2 == this.updateStatus) {
													for (
														var o,
															i = s(
																this
																	.promoteItemList
															);
														!(o = i()).done;

													) {
														var a = o.value;
														if (a.position == e)
															return void t(a);
													}
													t(null);
												} else
													this.updateFinishTasks.push(
														function () {
															n.getPromoteItem(
																e,
																t
															);
														}
													);
											}),
											e
										);
									})();
									var n = (function () {
										function t() {}
										t.getInstance = function () {
											return (
												this._instance ||
													((this._instance = new t()),
													this._instance.init()),
												this._instance
											);
										};
										var n = t.prototype;
										return (
											(n.init = function () {
												(this.promoteAgent =
													e.PlatformManager.getInstance().getPlatformPromoteAgent()),
													this.promoteAgent &&
														this.promoteAgent.init();
											}),
											(n.isPromote = function () {
												return !!this.promoteAgent;
											}),
											(n.getPromoteItem = function (
												e,
												t
											) {
												this.promoteAgent
													? this.promoteAgent.getPromoteItem(
															e,
															t
													  )
													: t && t(null);
											}),
											(n.updatePromoteItem = function (
												e
											) {
												this.promoteAgent
													? this.promoteAgent.updatePromoteItem(
															e
													  )
													: e && e(1);
											}),
											(n.openPromoteItem = function (e) {
												this.promoteAgent &&
													this.promoteAgent.openPromoteItem(
														e
													);
											}),
											t
										);
									})();
									t.PromoteManager = n;
								})(e.promote || (e.promote = {}));
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						((f || (f = {})).Convert = (function () {
							function e() {}
							return (
								(e.MapToObj = function (e) {
									var t = Object.create(null);
									return (
										e.forEach(function (e, n) {
											t[n] = e;
										}),
										t
									);
								}),
								(e.MapToString = function (e) {
									var t = this.MapToObj(e);
									try {
										return JSON.stringify(t);
									} catch (n) {
										console.log(n);
									}
								}),
								(e.objToMap = function (e) {
									for (
										var t = new Map(),
											n = 0,
											o = Object.keys(e);
										n < o.length;
										n++
									) {
										var i = o[n];
										t.set(i, e[i]);
									}
									return t;
								}),
								(e.stringToMap = function (e) {
									try {
										var t = JSON.parse(e);
										return this.objToMap(t);
									} catch (u) {
										console.log(u);
									}
									return null;
								}),
								(e.objToMap_number = function (e) {
									for (
										var t = new Map(),
											n = 0,
											o = Object.keys(e);
										n < o.length;
										n++
									) {
										var i = o[n];
										try {
											var a = Number.parseInt(i);
											a && !isNaN(a) && t.set(a, e[i]);
										} catch (r) {}
									}
									return t;
								}),
								(e.stringToMap_number = function (e) {
									try {
										var t = JSON.parse(e);
										return this.objToMap_number(t);
									} catch (u) {
										console.log(u);
									}
								}),
								e
							);
						})()),
						((f || (f = {})).Crypt = (function () {
							function e() {}
							return (
								(e.encode = function (e) {
									for (
										var t = String.fromCharCode(
												e.charCodeAt(0) + e.length
											),
											n = 1;
										n < e.length;
										n++
									)
										t += String.fromCharCode(
											e.charCodeAt(n) +
												e.charCodeAt(n - 1)
										);
									return escape(t);
								}),
								(e.decode = function (e) {
									e = unescape(e);
									for (
										var t = String.fromCharCode(
												e.charCodeAt(0) - e.length
											),
											n = 1;
										n < e.length;
										n++
									)
										t += String.fromCharCode(
											e.charCodeAt(n) -
												t.charCodeAt(n - 1)
										);
									return t;
								}),
								e
							);
						})()),
						(function (e) {
							var t = function () {
									(this.timeout = 1e4), (this.async = !0);
								},
								n = function () {};
							(e.HttpResponse = n),
								(e.HttpUtil = (function () {
									function e() {}
									return (
										(e.quest = function (e, t) {
											var o = e.url,
												i = e.method,
												a = e.data,
												r =
													(e.timeout,
													new XMLHttpRequest()),
												s = new n();
											(s.xhr = r),
												(r.timeout = null),
												(r._timerID = setTimeout(
													function () {
														cc.log(
															'\u8fde\u63a5\u8d85\u65f6',
															o
														);
													},
													1500
												));
											var c = new Date().getTime();
											if (
												((r.withCredentials = !0),
												(r.onreadystatechange =
													function () {
														if (
															(cc.log(
																'onreadystatechange:',
																r.readyState,
																r.status
															),
															4 == r.readyState &&
																((s.status =
																	r.status),
																(s.status_message =
																	r.statusText),
																r.status >=
																	200 &&
																	r.status <
																		400 &&
																	(s.body =
																		r.responseText),
																r._timerID &&
																	(clearTimeout(
																		r._timerID
																	),
																	(r._timerID =
																		null)),
																t))
														) {
															var e =
																new Date().getTime();
															(s.duration =
																e - c),
																t(s),
																(t = null);
														}
													}),
												r.open(i, o, e.async),
												r.setRequestHeader(
													'Content-Type',
													'application/json;charset=UTF-8'
												),
												e.cookie &&
													e.cookie.length > 0 &&
													r.setRequestHeader(
														'cookie',
														e.cookie
													),
												'object' == typeof a)
											)
												try {
													a = JSON.stringify(a);
												} catch (l) {
													console.error(
														'--ERROR data'
													);
												}
											r.send(a);
										}),
										(e.get = function (e, n, o) {
											var i = new t();
											'object' == typeof e
												? Object.assign(i, e)
												: 'string' == typeof e &&
												  (i.url = e),
												(i.method = 'get'),
												(i.cookie = n),
												this.quest(i, o);
										}),
										(e.post = function (e, n, o, i) {
											var a = new t();
											'object' == typeof e
												? Object.assign(a, e)
												: 'string' == typeof e &&
												  (a.url = e),
												(a.method = 'post'),
												(a.data = n),
												(a.cookie = o),
												this.quest(a, i);
										}),
										(e.getQueryString = function (e, t) {
											try {
												var o = new RegExp(
														'(^|&)' +
															t +
															'=([^&]*)(&|$)',
														'i'
													),
													i = e.substr(1).match(o);
												if (i) return unescape(i[2]);
											} catch (n) {}
											return null;
										}),
										(e.getQueryInt = function (e, t) {
											try {
												var o = Number.parseInt(
													this.getQueryString(e, t)
												);
												if (isNaN(o)) return null;
											} catch (n) {}
											return null;
										}),
										e
									);
								})());
						})(f || (f = {})),
						(function (e) {
							var t = (function () {
								function e() {
									this.code = -1;
								}
								return (
									(e.parse = function (t) {
										var n = new e();
										(n.http_status = t.status),
											(n.http_status_message =
												t.status_message),
											(n.duration = t.duration);
										try {
											var o = JSON.parse(t.body);
											(n.code = o.code),
												(n.data = o.data),
												o.msg && (n.msg = o.msg);
										} catch (i) {
											console.log(i);
										}
										return n;
									}),
									e
								);
							})();
							(e.LyHttpResponse = t),
								(e.LyHttp1 = (function () {
									function n() {}
									return (
										(n.get = function (n, o) {
											var i = this;
											e.HttpUtil.get(
												n,
												this.cookie,
												function (e) {
													o &&
														((i.cookie =
															e.xhr.getResponseHeader(
																'Set-Cookie'
															)),
														o(t.parse(e)));
												}
											);
										}),
										(n.post = function (n, o, i) {
											var a = this;
											e.HttpUtil.post(
												n,
												o,
												this.cookie,
												function (e) {
													i &&
														((a.cookie =
															e.xhr.getResponseHeader(
																'Set-Cookie'
															)),
														i(t.parse(e)));
												}
											);
										}),
										n
									);
								})());
						})(f || (f = {}));
					var f,
						h = 0,
						p = '',
						g = 8;
					function m(e, t) {
						(e[t >> 5] |= 128 << t % 32),
							(e[14 + (((t + 64) >>> 9) << 4)] = t);
						for (
							var n = 1732584193,
								o = -271733879,
								i = -1732584194,
								a = 271733878,
								r = 0;
							r < e.length;
							r += 16
						) {
							var s = n,
								c = o,
								l = i,
								d = a;
							(n = A(n, o, i, a, e[r + 0], 7, -680876936)),
								(a = A(a, n, o, i, e[r + 1], 12, -389564586)),
								(i = A(i, a, n, o, e[r + 2], 17, 606105819)),
								(o = A(o, i, a, n, e[r + 3], 22, -1044525330)),
								(n = A(n, o, i, a, e[r + 4], 7, -176418897)),
								(a = A(a, n, o, i, e[r + 5], 12, 1200080426)),
								(i = A(i, a, n, o, e[r + 6], 17, -1473231341)),
								(o = A(o, i, a, n, e[r + 7], 22, -45705983)),
								(n = A(n, o, i, a, e[r + 8], 7, 1770035416)),
								(a = A(a, n, o, i, e[r + 9], 12, -1958414417)),
								(i = A(i, a, n, o, e[r + 10], 17, -42063)),
								(o = A(o, i, a, n, e[r + 11], 22, -1990404162)),
								(n = A(n, o, i, a, e[r + 12], 7, 1804603682)),
								(a = A(a, n, o, i, e[r + 13], 12, -40341101)),
								(i = A(i, a, n, o, e[r + 14], 17, -1502002290)),
								(n = v(
									n,
									(o = A(
										o,
										i,
										a,
										n,
										e[r + 15],
										22,
										1236535329
									)),
									i,
									a,
									e[r + 1],
									5,
									-165796510
								)),
								(a = v(a, n, o, i, e[r + 6], 9, -1069501632)),
								(i = v(i, a, n, o, e[r + 11], 14, 643717713)),
								(o = v(o, i, a, n, e[r + 0], 20, -373897302)),
								(n = v(n, o, i, a, e[r + 5], 5, -701558691)),
								(a = v(a, n, o, i, e[r + 10], 9, 38016083)),
								(i = v(i, a, n, o, e[r + 15], 14, -660478335)),
								(o = v(o, i, a, n, e[r + 4], 20, -405537848)),
								(n = v(n, o, i, a, e[r + 9], 5, 568446438)),
								(a = v(a, n, o, i, e[r + 14], 9, -1019803690)),
								(i = v(i, a, n, o, e[r + 3], 14, -187363961)),
								(o = v(o, i, a, n, e[r + 8], 20, 1163531501)),
								(n = v(n, o, i, a, e[r + 13], 5, -1444681467)),
								(a = v(a, n, o, i, e[r + 2], 9, -51403784)),
								(i = v(i, a, n, o, e[r + 7], 14, 1735328473)),
								(n = _(
									n,
									(o = v(
										o,
										i,
										a,
										n,
										e[r + 12],
										20,
										-1926607734
									)),
									i,
									a,
									e[r + 5],
									4,
									-378558
								)),
								(a = _(a, n, o, i, e[r + 8], 11, -2022574463)),
								(i = _(i, a, n, o, e[r + 11], 16, 1839030562)),
								(o = _(o, i, a, n, e[r + 14], 23, -35309556)),
								(n = _(n, o, i, a, e[r + 1], 4, -1530992060)),
								(a = _(a, n, o, i, e[r + 4], 11, 1272893353)),
								(i = _(i, a, n, o, e[r + 7], 16, -155497632)),
								(o = _(o, i, a, n, e[r + 10], 23, -1094730640)),
								(n = _(n, o, i, a, e[r + 13], 4, 681279174)),
								(a = _(a, n, o, i, e[r + 0], 11, -358537222)),
								(i = _(i, a, n, o, e[r + 3], 16, -722521979)),
								(o = _(o, i, a, n, e[r + 6], 23, 76029189)),
								(n = _(n, o, i, a, e[r + 9], 4, -640364487)),
								(a = _(a, n, o, i, e[r + 12], 11, -421815835)),
								(i = _(i, a, n, o, e[r + 15], 16, 530742520)),
								(n = C(
									n,
									(o = _(
										o,
										i,
										a,
										n,
										e[r + 2],
										23,
										-995338651
									)),
									i,
									a,
									e[r + 0],
									6,
									-198630844
								)),
								(a = C(a, n, o, i, e[r + 7], 10, 1126891415)),
								(i = C(i, a, n, o, e[r + 14], 15, -1416354905)),
								(o = C(o, i, a, n, e[r + 5], 21, -57434055)),
								(n = C(n, o, i, a, e[r + 12], 6, 1700485571)),
								(a = C(a, n, o, i, e[r + 3], 10, -1894986606)),
								(i = C(i, a, n, o, e[r + 10], 15, -1051523)),
								(o = C(o, i, a, n, e[r + 1], 21, -2054922799)),
								(n = C(n, o, i, a, e[r + 8], 6, 1873313359)),
								(a = C(a, n, o, i, e[r + 15], 10, -30611744)),
								(i = C(i, a, n, o, e[r + 6], 15, -1560198380)),
								(o = C(o, i, a, n, e[r + 13], 21, 1309151649)),
								(n = C(n, o, i, a, e[r + 4], 6, -145523070)),
								(a = C(a, n, o, i, e[r + 11], 10, -1120210379)),
								(i = C(i, a, n, o, e[r + 2], 15, 718787259)),
								(o = C(o, i, a, n, e[r + 9], 21, -343485551)),
								(n = S(n, s)),
								(o = S(o, c)),
								(i = S(i, l)),
								(a = S(a, d));
						}
						return Array(n, o, i, a);
					}
					function y(e, t, n, o, i, a) {
						return S(L(S(S(t, e), S(o, a)), i), n);
					}
					function A(e, t, n, o, i, a, r) {
						return y((t & n) | (~t & o), e, t, i, a, r);
					}
					function v(e, t, n, o, i, a, r) {
						return y((t & o) | (n & ~o), e, t, i, a, r);
					}
					function _(e, t, n, o, i, a, r) {
						return y(t ^ n ^ o, e, t, i, a, r);
					}
					function C(e, t, n, o, i, a, r) {
						return y(n ^ (t | ~o), e, t, i, a, r);
					}
					function I(e, t) {
						var n = w(e);
						n.length > 16 && (n = m(n, e.length * g));
						for (
							var o = Array(16), i = Array(16), a = 0;
							a < 16;
							a++
						)
							(o[a] = 909522486 ^ n[a]),
								(i[a] = 1549556828 ^ n[a]);
						var r = m(o.concat(w(t)), 512 + t.length * g);
						return m(i.concat(r), 640);
					}
					function S(e, t) {
						var n = (65535 & e) + (65535 & t);
						return (
							(((e >> 16) + (t >> 16) + (n >> 16)) << 16) |
							(65535 & n)
						);
					}
					function L(e, t) {
						return (e << t) | (e >>> (32 - t));
					}
					function w(e) {
						for (
							var t = Array(), n = (1 << g) - 1, o = 0;
							o < e.length * g;
							o += g
						)
							t[o >> 5] |= (e.charCodeAt(o / g) & n) << o % 32;
						return t;
					}
					function P(e) {
						for (
							var t = '', n = (1 << g) - 1, o = 0;
							o < 32 * e.length;
							o += g
						)
							t += String.fromCharCode(
								(e[o >> 5] >>> o % 32) & n
							);
						return t;
					}
					function E(e) {
						for (
							var t = h ? '0123456789ABCDEF' : '0123456789abcdef',
								n = '',
								o = 0;
							o < 4 * e.length;
							o++
						)
							n +=
								t.charAt(
									(e[o >> 2] >> ((o % 4) * 8 + 4)) & 15
								) + t.charAt((e[o >> 2] >> ((o % 4) * 8)) & 15);
						return n;
					}
					function N(e) {
						for (var t = '', n = 0; n < 4 * e.length; n += 3)
							for (
								var o =
										(((e[n >> 2] >> ((n % 4) * 8)) & 255) <<
											16) |
										(((e[(n + 1) >> 2] >>
											(((n + 1) % 4) * 8)) &
											255) <<
											8) |
										((e[(n + 2) >> 2] >>
											(((n + 2) % 4) * 8)) &
											255),
									i = 0;
								i < 4;
								i++
							)
								8 * n + 6 * i > 32 * e.length
									? (t += p)
									: (t +=
											'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
												(o >> (6 * (3 - i))) & 63
											));
						return t;
					}
					((f || (f = {})).MD5 = (function () {
						function e() {}
						return (
							(e.hex_md5 = function (e) {
								return E(m(w(e), e.length * g));
							}),
							(e.b64_md5 = function (e) {
								return N(m(w(e), e.length * g));
							}),
							(e.str_md5 = function (e) {
								return P(m(w(e), e.length * g));
							}),
							(e.hex_hmac_md5 = function (e, t) {
								return E(I(e, t));
							}),
							(e.b64_hmac_md5 = function (e, t) {
								return N(I(e, t));
							}),
							(e.str_hmac_md5 = function (e, t) {
								return P(I(e, t));
							}),
							e
						);
					})()),
						((f || (f = {})).TimeUtil = (function () {
							function e() {}
							return (
								(e.getDate = function () {
									var e,
										t,
										n = new Date(),
										o = '';
									return (
										(o += n.getFullYear()),
										(o +=
											(e = n.getMonth() + 1) >= 10
												? e
												: '0' + e),
										(o +=
											(t = n.getDate()) >= 10
												? t
												: '0' + t),
										Number.parseInt(o)
									);
								}),
								(e.isThisWeek = function (e) {
									return this.isSameWeek(e, new Date());
								}),
								(e.isSameWeek = function (e, t) {
									try {
										var n = Math.trunc(e.getTime() / 864e5),
											o = Math.trunc(t.getTime() / 864e5);
										return (
											Math.trunc((n + 3) / 7) ==
											Math.trunc((o + 3) / 7)
										);
									} catch (i) {
										console.log(i);
									}
									return !1;
								}),
								e
							);
						})()),
						(function (e) {
							var t = !1,
								n = 0,
								o = {};
							e.Withdraw = (function () {
								function i() {}
								return (
									(i.setDebug = function (e) {
										t = e;
									}),
									(i.setLimit = function (e) {
										void 0 === e && (e = 30), (n = e);
									}),
									(i.setGear = function (e) {
										void 0 === e && (e = { 30: !0 }),
											(o = e);
									}),
									(i.withdraw = function (e, n) {
										var o = this;
										t
											? 'function' == typeof n &&
											  n(!0, null)
											: this.login(function (t, i) {
													t
														? o.checkWithdraw(
																t,
																e,
																n
														  )
														: n &&
														  n(
																!1,
																i ||
																	'\u6e38\u5ba2\u4e0d\u80fd\u63d0\u73b0!'
														  );
											  });
									}),
									(i.login = function (t) {
										if ('object' == typeof lynative)
											if (lynative.isSupportLogin('wx'))
												try {
													lynative.login(
														'wx',
														function (o) {
															var i = o.openId;
															if (i) {
																var a = '' + i;
																e.LyHttp1.get(
																	a,
																	function (
																		e
																	) {
																		if (
																			0 ==
																				e.code &&
																			e.data
																		) {
																			var o =
																				e.data;
																			if (
																				i ===
																				o.user_id
																			)
																				if (
																					o.total_amount >
																					n
																				)
																					t &&
																						t(
																							null,
																							'\u91d1\u989d\u4e0d\u8db3\uff0c\u63d0\u73b0\u5931\u8d25!'
																						);
																				else {
																					var a =
																						{
																							id: o.user_id,
																							max: o.max_amount,
																							total: o.total_amount
																						};
																					t &&
																						t(
																							a,
																							''
																						);
																				}
																			else
																				t &&
																					t(
																						null,
																						'\u7528\u6237\u4fe1\u606f\u5f02\u5e38, \u8bf7\u7a0d\u540e\u91cd\u8bd5!'
																					);
																		} else
																			t &&
																				t(
																					null,
																					'\u83b7\u53d6\u670d\u52a1\u5668\u767b\u9646\u4fe1\u606f\u5931\u8d25!'
																				);
																	}
																);
															} else
																t &&
																	t(
																		null,
																		'\u83b7\u53d6\u4fe1\u606f\u5931\u8d25, \u6388\u6743\u5931\u8d25!'
																	);
														},
														function (e) {
															t &&
																t(
																	null,
																	'\u5fae\u4fe1\u767b\u9646\u5931\u8d25' +
																		e
																);
														}
													);
												} catch (o) {
													t &&
														t(
															null,
															'\u53d1\u751f\u672a\u77e5\u9519\u8bef:' +
																o
														);
												}
											else
												t &&
													t(
														null,
														'\u4e0d\u652f\u6301\u5fae\u4fe1\u767b\u9646'
													);
										else
											t &&
												t(
													null,
													'\u5f53\u524d\u5e73\u53f0\u4e0d\u652f\u6301\u5fae\u4fe1\u767b\u9646'
												);
									}),
									(i.checkWithdraw = function (t, i, a) {
										if (i > t.max)
											a &&
												a(
													!1,
													'\u63d0\u73b0\u5931\u8d25\uff0c\u7a0d\u540e\u8bf7\u91cd\u8bd5!'
												);
										else if (t.total + i > n)
											a &&
												a(
													!1,
													'\u63d0\u73b0\u5931\u8d25\uff0c\u7a0d\u540e\u8bf7\u91cd\u8bd5!'
												);
										else {
											var r = parseInt(t.id),
												s = e.MD5.hex_md5(
													i +
														'' +
														r +
														'Struggle for a better future'
												),
												c = null;
											o[i]
												? ((c = {
														user_id: r,
														sign: s,
														amount: i,
														is_open: !0
												  }),
												  e.LyHttp1.post(
														'',
														c,
														function (e) {
															var t =
																0 === e.code;
															a &&
																a(
																	t,
																	t
																		? '\u606d\u559c\u60a8, \u63d0\u73b0\u6210\u529f!'
																		: '\u63d0\u73b0\u5931\u8d25\uff0c\u7a0d\u540e\u8bf7\u91cd\u8bd5!'
																);
														}
												  ))
												: a &&
												  a(
														!1,
														'\u51fa\u73b0\u672a\u77e5\u9519\u8bef, \u8bf7\u7a0d\u540e\u518d\u8bd5!'
												  );
										}
									}),
									i
								);
							})();
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.NativePlatform = (function (n) {
									function o() {
										var e;
										return (
											((e =
												n.apply(this, arguments) ||
												this).user = null),
											(e.nativeAnalyticsEvent = null),
											(e.withdraw = null),
											e
										);
									}
									a(o, n),
										(o.checkIsPlatform = function () {
											return (
												'object' ==
												typeof window.lynative
											);
										});
									var i = o.prototype;
									return (
										(i.getPlatformType = function () {
											return 1 ==
												lynative.nativePlatformType
												? e.PlatformDefine
														.Native_Android
												: 2 ==
												  lynative.nativePlatformType
												? e.PlatformDefine.Native_IOS
												: e.PlatformDefine
														.Native_Android;
										}),
										(i.init = function () {
											lynative.init();
											var n = {
												appId: lynative.getAppid(),
												projectId:
													lynative.getPrjectId(),
												channelId:
													lynative.getChannelId(),
												packageName:
													lynative.getPackageName(),
												appName: lynative.getAppName(),
												versionName:
													lynative.getVersionName(),
												versionCode:
													lynative.getVersionCode()
											};
											(e.getAppConfig = function () {
												return n;
											}),
												(e.isExitGame =
													lynative.isExitGame),
												(e.openExitGame =
													lynative.openExitGame),
												(e.isBadWord =
													lynative.isBadWord),
												(e.isComment =
													lynative.isComment),
												(e.openComment =
													lynative.openComment),
												(e.doGetAntiAddictionInfo =
													lynative.doGetAntiAddictionInfo),
												(e.isPromote = function () {
													return !0;
												}),
												(e.getPromoteItem =
													lynative.getPromoteItem),
												(e.core.promote = null),
												(e.switchOnAd =
													lynative.switchOnAd),
												(e.switchOffAd =
													lynative.switchOffAd),
												(e.getAdPositionParam =
													lynative.getAdPositionParam),
												(e.isAdReady =
													lynative.isAdReady),
												(e.openAd = lynative.openAd),
												(e.closeAd = lynative.closeAd),
												(e.closeAllBannerAd =
													lynative.closeAllBannerAd),
												(e.loadExpressAd =
													lynative.loadExpressAd),
												(e.openExpressAd =
													lynative.openExpressAd),
												(e.ads = null),
												(this.nativeAnalyticsEvent =
													lynative.analytics.event);
											var o = lynative.analytics;
											(e.analytics = o),
												(e.analytics.event =
													this.analyticsEvent.bind(
														this
													)),
												(e.isPay =
													lynative.payApi.isPay),
												(e.pay =
													this.payApiPay.bind(this)),
												(e.payOrderNum =
													lynative.payApi.payOrderNum),
												(e.checkWaitHandleOrder =
													lynative.payApi.checkWaitHandleOrder),
												(e.hasVibrate =
													lynative.hasVibrate),
												(e.vibrate = lynative.vibrate),
												(e.cancelVibrate =
													lynative.cancelVibrate),
												(e.isSupportLogin =
													lynative.isSupportLogin),
												(e.isEnableShare =
													lynative.isEnableShare),
												(e.isSupportShare =
													lynative.isSupportShare),
												(e.shareText =
													lynative.shareText),
												(e.sharePicture =
													lynative.sharePicture),
												(e.shareWebpage =
													lynative.shareWebpage),
												(e.shareMiniApp =
													lynative.shareMiniApp);
											var i =
												t.PlatformManager.getInstance()
													.lastLoginUserInfo;
											return (
												i &&
													'wx' == i.thirdLoginType &&
													(this.withdraw =
														new t.NativeWithdraw()),
												!0
											);
										}),
										(i.analyticsEvent = function () {
											for (
												var t = arguments.length,
													n = new Array(t),
													o = 0;
												o < t;
												o++
											)
												n[o] = arguments[o];
											1 == n.length
												? this.nativeAnalyticsEvent(
														n[0]
												  )
												: 2 == n.length
												? 'string' == typeof n[1]
													? this.nativeAnalyticsEvent(
															n[0],
															n[1]
													  )
													: ((n[1] =
															e.Convert.MapToObj(
																n[1]
															)),
													  this.nativeAnalyticsEvent(
															n[0],
															n[1]
													  ))
												: 3 == n.length &&
												  ((n[1] = e.Convert.MapToObj(
														n[1]
												  )),
												  this.nativeAnalyticsEvent(
														n[0],
														n[1],
														n[2]
												  ));
										}),
										(i.payApiPay = function (t, n) {
											var o = e.Convert.MapToObj(t);
											lynative.payApi.pay(o, n);
										}),
										(i.showToast = function (e) {
											return lynative.showToast(e);
										}),
										(i.login = function (e) {
											var n = this;
											console.log('native login'),
												(this.user = null);
											var o = new t.NativeUser();
											o.login(function (t) {
												0 == t
													? ((n.user = o), e(!0))
													: e(!1);
											});
										}),
										(i.loginTP = function (e, n, o) {
											var i = this;
											console.log('native loginTP'),
												(this.user = null),
												'wx' == e &&
												lynative.isSupportLogin(e)
													? lynative.login(
															e,
															function (e) {
																if (e.openId) {
																	var a =
																		new t.NativeWxUser();
																	a.login(
																		function (
																			r
																		) {
																			if (
																				0 ==
																				r
																			) {
																				(i.user =
																					a),
																					(i.withdraw =
																						new t.NativeWithdraw());
																				var s =
																						a.getUserInfo(),
																					c =
																						{
																							timestamp:
																								e.timestamp,
																							token: e.token,
																							openId: e.openId,
																							userName:
																								s
																									? a.getUserInfo()
																											.userName
																									: null,
																							sex: s
																								? s.sex
																								: 0,
																							headImgUrl:
																								s
																									? a.getUserInfo()
																											.headImgUrl
																									: null
																						};
																				n(
																					c
																				);
																			} else
																				o(
																					'\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25!'
																				);
																		},
																		e
																	);
																} else
																	o(
																		'\u83b7\u53d6\u4fe1\u606f\u5931\u8d25, \u6388\u6743\u5931\u8d25!'
																	);
															},
															function (e) {
																o(e);
															}
													  )
													: o(
															'\u4e0d\u652f\u6301\u6b64\u767b\u5f55\u65b9\u5f0f!'
													  );
										}),
										(i.logout = function () {
											this.user = null;
										}),
										(i.checkThirdAuthUserInfo = function (
											e,
											t
										) {
											this.user &&
												t &&
												this.user.syncThirdUserInfo(),
												e(!0);
										}),
										(i.getUser = function () {
											return this.user;
										}),
										(i.getThirdUserInfoOriginal = function (
											e
										) {
											e && e(null);
										}),
										(i.parseThirdUserInfoOriginal =
											function () {
												return null;
											}),
										(i.getPlatformWithdraw = function () {
											return this.withdraw;
										}),
										o
									);
								})(t.BasePlatform);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.NativeUser = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									return (
										a(o, n),
										(o.prototype.login = function (n) {
											var o,
												i = this,
												a =
													e.ConstInner
														.URL_DOMAIN_LOGIN +
													e.ConstInner
														.URL_DOMAIN_LOGIN_INTERFACE;
											(o =
												1 == lynative.nativePlatformType
													? 'android'
													: 2 ==
													  lynative.nativePlatformType
													? 'ios'
													: 'native'),
												lynative.getChannelId() &&
													lynative.getChannelId()
														.length > 0 &&
													(o +=
														'_' +
														lynative.getChannelId());
											var r = {
												source: o,
												source_id:
													lynative.getDeviceId(),
												game: e.getAppConfig().appId
											};
											console.log(
												'native login data: ' +
													JSON.stringify(r)
											),
												e.LyHttp1.post(
													{ url: a, timeout: 5e3 },
													JSON.stringify(r),
													function (e) {
														console.log(
															'native login code: ' +
																e.code
														);
														var a = 1;
														if (0 == e.code)
															try {
																var r =
																	new t.NetUserInfo();
																Object.assign(
																	r,
																	e.data
																),
																	i.setUserInfo(
																		r.toUserInfo()
																	),
																	i.syncThirdUserInfo(),
																	(a = 0);
															} catch (o) {
																(a = 1),
																	console.log(
																		o
																	);
															}
														else a = -1;
														n(a);
													}
												);
										}),
										o
									);
								})(t.NetUser);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.NativeWithdraw = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									a(o, n);
									var i = o.prototype;
									return (
										(i.takeBonusRequest = function (n, o) {
											var i =
												t.PlatformManager.getInstance().getLoginUserInfo();
											if (i && i.userId) {
												var a = parseInt(i.userId),
													r = {
														user_id: a,
														sign: e.MD5.hex_md5(
															n +
																'' +
																a +
																'Struggle for a better future'
														),
														amount: n,
														is_open: !0
													},
													s = JSON.stringify(r);
												e.LyHttp1.post(
													'',
													s,
													function (e) {
														var t = 0 === e.code;
														o &&
															o(
																t,
																t
																	? '\u606d\u559c\u60a8, \u63d0\u73b0\u6210\u529f!'
																	: '\u63d0\u73b0\u5931\u8d25\uff0c\u7a0d\u540e\u8bf7\u91cd\u8bd5!'
															);
													}
												);
											} else
												o &&
													o(
														!1,
														'\u63d0\u73b0\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55!'
													);
										}),
										(i.takeBonusByPosID = function (n, o) {
											var i =
												t.PlatformManager.getInstance().getLoginUserInfo();
											if (i && i.userId) {
												var a = parseInt(i.userId);
												this.getTaskBonusConfig(
													a,
													function (t) {
														var i;
														if (t && t.length)
															for (
																var r = 0;
																r < t.length;
																r++
															) {
																var s = t[r];
																if (
																	n ==
																	s.position
																) {
																	i =
																		s.product_id;
																	break;
																}
															}
														if (i) {
															var c = {
																	user_id: a,
																	product_id:
																		i
																},
																l =
																	JSON.stringify(
																		c
																	);
															e.LyHttp1.post(
																'',
																l,
																function (e) {
																	var t =
																		0 ===
																		e.code;
																	o &&
																		o(
																			t,
																			t
																				? '\u606d\u559c\u60a8, \u63d0\u73b0\u6210\u529f!'
																				: '\u63d0\u73b0\u5931\u8d25\uff0c\u7a0d\u540e\u8bf7\u91cd\u8bd5!'
																		);
																}
															);
														} else
															o &&
																o(
																	!1,
																	'\u63d0\u73b0\u5931\u8d25\uff0c\u7a0d\u540e\u8bf7\u91cd\u8bd5!'
																);
													}
												);
											} else
												o &&
													o(
														!1,
														'\u63d0\u73b0\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55!'
													);
										}),
										(i.getTaskBonusConfig = function (
											t,
											n
										) {
											e.LyHttp1.get('', function (e) {
												0 == e.code
													? n(e.data)
													: (n(e.data),
													  console.log(
															'\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25',
															e.msg
													  ));
											});
										}),
										o
									);
								})(t.BaseWithdraw);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.NativeWxUser = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									return (
										a(o, n),
										(o.prototype.login = function (n, o) {
											var i = this,
												a = o.openId,
												r =
													e.ConstInner
														.URL_DOMAIN_LOGIN +
													e.ConstInner
														.URL_DOMAIN_GET_NATIVE_WXLOGIN_MSG +
													'?user_id=' +
													a;
											e.LyHttp1.get(r, function (e) {
												console.log(
													'native login code: ' +
														e.code
												);
												var o = 1;
												if (0 == e.code)
													try {
														var r = e.data,
															s =
																new t.NetUserInfo();
														(s.user_id = r.user_id),
															(s.user_name =
																r.nick_name),
															(s.user_sex =
																r.sex),
															(s.user_image =
																r.head_image),
															i.setUserInfo(
																s.toUserInfo()
															),
															i.syncThirdUserInfo(),
															(o = 0);
													} catch (a) {
														(o = 1), console.log(a);
													}
												else
													console.log(
														'\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25',
														e.msg
													),
														(o = -1);
												n(o);
											});
										}),
										o
									);
								})(t.NativeUser);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.LyH5EnvPlatform = (function (n) {
									function o() {
										var e;
										return (
											((e =
												n.apply(this, arguments) ||
												this).user = null),
											e
										);
									}
									a(o, n),
										(o.checkIsPlatform = function () {
											return (
												'object' ==
												typeof window.lyh5env
											);
										});
									var i = o.prototype;
									return (
										(i.getPlatformType = function () {
											return e.PlatformDefine.LyH5Game;
										}),
										(i.init = function () {
											return (
												lyh5env.init(),
												(e.isAdReady =
													lyh5env.isAdReady),
												(e.openAd = lyh5env.openAd),
												(e.closeAd = lyh5env.closeAd),
												(e.closeAllBannerAd =
													lyh5env.closeAllBannerAd),
												(e.ads = null),
												!0
											);
										}),
										(i.showToast = function (e) {
											return lyh5env.showToast(e);
										}),
										(i.login = function (e) {
											console.log('lyh5env login'),
												(this.user =
													new t.LyH5EnvUser()),
												this.user.login(function (t) {
													e(0 == t);
												});
										}),
										(i.logout = function () {
											this.user = null;
										}),
										(i.checkThirdAuthUserInfo =
											function () {}),
										(i.getUser = function () {
											return this.user;
										}),
										(i.getThirdUserInfoOriginal =
											function () {}),
										(i.parseThirdUserInfoOriginal =
											function () {
												return null;
											}),
										o
									);
								})(t.BasePlatform);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								(function (t) {
									t.LyH5EnvPromoteAgent = (function (n) {
										function o() {
											return (
												n.apply(this, arguments) || this
											);
										}
										a(o, n);
										var i = o.prototype;
										return (
											(i.parsePromoteList = function (e) {
												if (e)
													for (
														var n, o = s(e);
														!(n = o()).done;

													) {
														var i = n.value,
															a =
																new t.PromoteItemImpl();
														(a.position =
															i.position),
															(a.title = i.title),
															(a.iconUrl =
																i.iconUrl),
															(a.packageName =
																i.appId),
															this.promoteItemList.push(
																a
															);
													}
											}),
											(i.updatePromoteItem = function (
												t
											) {
												var n = this;
												this.updateStatus = 1;
												var o = {
														device_id:
															lyh5env.getDeviceId(),
														appId: lyh5env.getAppid(),
														appName:
															lyh5env.getAppName(),
														version: Number(
															lyh5env.getVersion()
														)
													},
													i = JSON.stringify(o);
												e.HttpUtil.post(
													'',
													i,
													null,
													function (o) {
														var i =
															e.LyHttpResponse.parse(
																o
															);
														if (
															0 == i.code &&
															i.data
														) {
															var a = JSON.parse(
																i.data
															);
															a
																? (n.parsePromoteList(
																		a
																  ),
																  n.onUpdatePromoteItemFinish(),
																  t && t(0))
																: t && t(1);
														} else t && t(-1);
													}
												);
											}),
											(i.openPromoteItem = function (e) {
												try {
													lyh5env.navigateToMiniProgram &&
														lyh5env.navigateToMiniProgram(
															{
																appId: e.packageName
															}
														);
												} catch (t) {
													console.log(t);
												}
											}),
											o
										);
									})(t.BasePromoteAgent);
								})(t.promote || (t.promote = {}));
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.LyH5EnvUser = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									return (
										a(o, n),
										(o.prototype.login = function (n) {
											var o = this,
												i =
													e.ConstInner
														.URL_DOMAIN_LOGIN +
													e.ConstInner
														.URL_DOMAIN_LOGIN_INTERFACE,
												a = {
													source: 'lyh5env',
													source_id:
														lyh5env.getDeviceId(),
													game: e.getAppConfig().appId
												};
											console.log(
												'lyh5env login data: ' +
													JSON.stringify(a)
											),
												e.LyHttp1.post(
													{ url: i, timeout: 5e3 },
													JSON.stringify(a),
													function (e) {
														console.log(
															'lyh5env login code: ' +
																e.code
														);
														var i = 1;
														if (0 == e.code)
															try {
																var r =
																	new t.NetUserInfo();
																Object.assign(
																	r,
																	e.data
																),
																	o.setUserInfo(
																		r.toUserInfo()
																	),
																	o.syncThirdUserInfo(),
																	(i = 0);
															} catch (a) {
																(i = 1),
																	console.log(
																		a
																	);
															}
														else i = -1;
														n(i);
													}
												);
										}),
										o
									);
								})(t.NetUser);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (e) {
								var t = (function (t) {
									function n() {
										return t.apply(this, arguments) || this;
									}
									a(n, t);
									var o = n.prototype;
									return (
										(o.load = function () {
											var t = this;
											try {
												var n = tt.getSystemInfoSync(),
													o = n.screenWidth,
													i = n.screenHeight,
													a = tt.createBannerAd({
														adUnitId:
															this.getAdPlacementId(),
														style: {
															left: 0,
															width: 200,
															top: o - 112.5
														}
													});
												(a.style.left =
													(o - 200) / 4 - 8),
													a.onResize(function (e) {
														(a.style.top =
															i - e.height),
															(a.style.left =
																(o - e.width) /
																2);
													}),
													a.onLoad(function () {
														t.onLoadSuccess();
													}),
													a.onError(function (n) {
														var o = new e.AdError(
															e.AdErrorCode.CODE_AD_LOAD_FAIL
														);
														o.setSdkCode(n.errCode),
															o.setSdkMsg(
																n.errMsg
															),
															t.onLoadFail(o);
													}),
													(this.bannerAd = a);
											} catch (s) {
												var r = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												r.setMsg(s.toString()),
													this.onLoadFail(r);
											}
										}),
										(o.open = function () {
											var t = this;
											if (this.bannerAd)
												this.bannerAd
													.show()
													.then(function () {
														t.onShowSuccess();
													})
													.catch(function (n) {
														console.log(
															'\u5e7f\u544a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898',
															n
														);
														var o = new e.AdError(
															e.AdErrorCode.CODE_AD_SHOW_FAIL
														);
														o.setSdkCode(n.errCode),
															o.setSdkMsg(
																n.errMsg
															),
															t.onShowFailed(o);
													});
											else {
												var n = new e.AdError(
													e.AdErrorCode.CODE_AD_SHOW_FAIL
												);
												n.setMsg(
													'\u65e0\u5b9e\u4f8b\u5316\u5e7f\u544a'
												),
													this.onShowFailed(n);
											}
										}),
										(o.close = function () {
											this.bannerAd &&
												(this.bannerAd.hide(),
												this.bannerAd.destroy()),
												this.onClosed();
										}),
										(o.destroy = function () {
											this.bannerAd &&
												this.bannerAd.destroy();
										}),
										n
									);
								})(e.BaseBannerAdItem);
								e.TtBannerAdItem = t;
								var n = (function () {
									function e(e) {
										var t = this;
										(this.status = 0),
											(this.onLoadListenerList =
												new Array()),
											(this.rewardedVideoAd =
												tt.createRewardedVideoAd({
													adUnitId: e
												})),
											this.rewardedVideoAd.onLoad(
												function () {
													(t.status = 1),
														t.onStatusChange();
												}
											),
											this.rewardedVideoAd.onError(
												function () {
													(t.status = 2),
														t.onStatusChange();
												}
											),
											this.rewardedVideoAd.onClose(
												function (e) {
													(t.status = 4),
														t.onStatusChange(),
														((e && e.isEnded) ||
															void 0 === e) &&
														t.onAdCloseCallback
															? t.onAdCloseCallback(
																	!0
															  )
															: t.onAdCloseCallback &&
															  t.onAdCloseCallback(
																	!1
															  );
												}
											);
									}
									e.getVideoAd = function (t) {
										var n = this.videoAdList.get(t);
										return (
											n
												? n.load()
												: ((n = new e(t)),
												  this.videoAdList.set(t, n)),
											n
										);
									};
									var t = e.prototype;
									return (
										(t.load = function () {
											this.rewardedVideoAd.load();
										}),
										(t.isReady = function () {
											return 1 == this.status;
										}),
										(t.onStatusChange = function () {
											for (
												var e,
													t = this.isReady(),
													n = s(
														this.onLoadListenerList
													);
												!(e = n()).done;

											) {
												var o = e.value;
												t
													? o.onLoadSuccess()
													: o.onLoading();
											}
										}),
										(t.onLoadListener = function (e) {
											this.isReady() && e.onLoadSuccess(),
												this.onLoadListenerList.push(e);
										}),
										(t.offLoadListener = function (e) {
											var t =
												this.onLoadListenerList.findIndex(
													function (t) {
														return t == e;
													}
												);
											this.onLoadListenerList.splice(
												t,
												1
											);
										}),
										(t.open = function (e, t) {
											var n = this;
											this.isReady()
												? ((this.status = 3),
												  e(!0),
												  (this.onAdCloseCallback = t),
												  this.rewardedVideoAd
														.show()
														.catch(function () {
															e(!1),
																n.rewardedVideoAd.load();
														}))
												: e(!1);
										}),
										e
									);
								})();
								n.videoAdList = new Map();
								var o = (function (o) {
									function i() {
										return o.apply(this, arguments) || this;
									}
									a(i, o);
									var r = i.prototype;
									return (
										(r.load = function () {
											try {
												n.getVideoAd(
													this.getAdPlacementId()
												).onLoadListener(this);
											} catch (t) {
												var o = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												o.setMsg(t.toString()),
													this.onLoadFail(o);
											}
										}),
										(r.open = function () {
											var t = this,
												o = n.getVideoAd(
													this.getAdPlacementId()
												);
											o.offLoadListener(this),
												o.open(
													function (n) {
														n
															? t.onShowSuccess()
															: t.onShowFailed(
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_SHOW_FAIL
																	)
															  );
													},
													function (e) {
														e && t.onReward(),
															t.onClosed();
													}
												);
										}),
										i
									);
								})(e.BaseVideoAdItem);
								e.TtVideoAdItem = o;
								var r = (function () {
									function t(e) {
										var t = this;
										(this.status = 0),
											(this.onLoadListenerList =
												new Array()),
											(this.adUnitId = e),
											(this.intertitialAd =
												tt.createInterstitialAd({
													adUnitId: e
												})),
											this.intertitialAd.onLoad(
												function () {
													(t.status = 1),
														t.onStatusChange();
												}
											),
											this.intertitialAd.onError(
												function () {
													t.onStatusChange();
												}
											),
											this.intertitialAd.onClose(
												function () {
													(t.status = 4),
														t.onStatusChange();
												}
											),
											this.load();
									}
									t.getVideoAd = function (e) {
										var n = this.intertitialAdList.get(e);
										return (
											n &&
												((2 != n.status &&
													4 != n.status) ||
													(n.destroy(), (n = null))),
											n
												? n.load()
												: ((n = new t(e)),
												  this.intertitialAdList.set(
														e,
														n
												  )),
											n
										);
									};
									var n = t.prototype;
									return (
										(n.load = function () {
											this.intertitialAd.load();
										}),
										(n.destroy = function () {
											this.intertitialAd.destroy();
										}),
										(n.onStatusChange = function () {
											if (1 == this.status)
												for (
													var n,
														o = s(
															this
																.onLoadListenerList
														);
													!(n = o()).done;

												)
													n.value.onLoadSuccess();
											if (2 == this.status) {
												this.intertitialAd.destroy();
												var i = new t(this.adUnitId);
												t.intertitialAdList.set(
													this.adUnitId,
													i
												);
												for (
													var a,
														r = s(
															this
																.onLoadListenerList
														);
													!(a = r()).done;

												)
													a.value.onLoadFail(
														new e.AdError(
															e.AdErrorCode.CODE_AD_LOAD_FAIL
														)
													);
											}
											4 == this.status &&
												this.onAdCloseCallback &&
												this.onAdCloseCallback(!1);
										}),
										(n.isReady = function () {
											return 1 == this.status;
										}),
										(n.isClose = function () {
											return 4 == this.status;
										}),
										(n.onLoadListener = function (e) {
											this.isReady() && e.onLoadSuccess(),
												this.onLoadListenerList.push(e);
										}),
										(n.offLoadListener = function (e) {
											var t =
												this.onLoadListenerList.findIndex(
													function (t) {
														return t == e;
													}
												);
											this.onLoadListenerList.splice(
												t,
												1
											);
										}),
										(n.open = function (e, t) {
											var n = this;
											this.isReady()
												? this.intertitialAd
														.show()
														.then(function () {
															(n.status = 3),
																(n.onAdCloseCallback =
																	t),
																e(!0);
														})
														.catch(function () {
															e(!1);
														})
												: e(!1);
										}),
										t
									);
								})();
								r.intertitialAdList = new Map();
								var c = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									a(o, n);
									var i = o.prototype;
									return (
										(i.load = function () {
											try {
												r.getVideoAd(
													this.getAdPlacementId()
												).onLoadListener(this);
											} catch (t) {
												var n = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												n.setMsg(t.toString()),
													this.onLoadFail(n);
											}
										}),
										(i.open = function () {
											var t = this,
												n = r.getVideoAd(
													this.getAdPlacementId()
												);
											n.offLoadListener(this),
												n.open(
													function (n) {
														if (n)
															t.onShowSuccess();
														else {
															var o =
																new e.AdError(
																	e.AdErrorCode.CODE_AD_SHOW_FAIL
																);
															t.onShowFailed(o);
														}
													},
													function () {
														t.onClosed();
													}
												);
										}),
										o
									);
								})(e.BaseInterstitialAdItem);
								(e.TtInterstitialItem = c),
									(e.TtAdAgent = (function (e) {
										function n() {
											return (
												e.apply(this, arguments) || this
											);
										}
										a(n, e);
										var r = n.prototype;
										return (
											(r.isSupported = function () {
												return !0;
											}),
											(r.isDev = function () {
												return (
													'devtools' ==
													tt.getSystemInfoSync()
														.platform
												);
											}),
											(r.createBannerAd = function (e) {
												return !this.isSupported() ||
													this.isDev()
													? null
													: this.ttbannerAdItem
													? this.ttbannerAdItem
													: ((this.ttbannerAdItem =
															new t(e)),
													  this.ttbannerAdItem);
											}),
											(r.createVideoAd = function (e) {
												return this.isSupported()
													? new o(e)
													: null;
											}),
											(r.createInterstitialAd = function (
												e
											) {
												return this.isSupported()
													? new c(e)
													: null;
											}),
											i(n, [
												{
													key: 'name',
													get: function () {
														return 'tt';
													}
												}
											]),
											n
										);
									})(e.BaseAdAgent));
							})(e.ads || (e.ads = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.TtPlatform = (function (n) {
									function o() {
										var e;
										return (
											((e =
												n.apply(this, arguments) ||
												this).user = null),
											(e.shareTicket = null),
											(e.adAgent = null),
											e
										);
									}
									a(o, n),
										(o.checkIsPlatform = function () {
											return 'object' == typeof window.tt;
										});
									var i = o.prototype;
									return (
										(i.getPlatformType = function () {
											return e.PlatformDefine.TouTiaoGame;
										}),
										(i.init = function () {
											var e = this;
											if (tt.getLaunchOptionsSync) {
												var n =
													tt.getLaunchOptionsSync();
												n &&
													this.setShareTicket(
														n.shareTicket
													);
											}
											if (
												(tt.showShareMenu({}),
												tt.onShareAppMessage(
													function () {
														var n =
															t.PlatformManager.getInstance().getShareParam();
														if (n) {
															e.shareId =
																new Date().getTime();
															var o =
																'ly_share_id=&' +
																e.shareId;
															return {
																title: n.title,
																imageUrl:
																	n.imageUrl,
																query: o
															};
														}
													}
												),
												tt.onShow(function () {}),
												tt.getUpdateManager)
											) {
												var o = tt.getUpdateManager();
												o.onCheckForUpdate(function (
													e
												) {
													e.hasUpdate &&
														console.log(
															'\u7528\u6237\u65b0\u7248\u672c\u66f4\u65b0\u4e86...'
														);
												}),
													o.onUpdateReady(
														function () {
															tt.showModal({
																title: '\u66f4\u65b0\u63d0\u793a',
																content:
																	'\u65b0\u7248\u672c\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u662f\u5426\u91cd\u542f\u5e94\u7528\uff1f',
																success:
																	function (
																		e
																	) {
																		e.confirm &&
																			o.applyUpdate();
																	}
															});
														}
													),
													o.onUpdateFailed(
														function () {
															tt.showModal({
																title: '\u66f4\u65b0\u63d0\u793a',
																content:
																	'\u65b0\u7248\u672c\u4e0b\u8f7d\u5931\u8d25',
																showCancel: !1
															});
														}
													);
											}
											return !0;
										}),
										(i.getPlatformAdAgent = function () {
											return (
												this.adAgent ||
													(this.adAgent =
														new e.ads.TtAdAgent()),
												this.adAgent
											);
										}),
										(i.setShareTicket = function (e) {
											console.log(
												'this shareTicket = ' +
													this.shareTicket +
													', new shareTicket = ' +
													e
											),
												e &&
													'string' == typeof e &&
													e.length > 0 &&
													(this.shareTicket = e);
										}),
										(i.shareAnalytics = function () {
											var t = null;
											try {
												(t = e
													.getSelfUser()
													.getUserId()),
													(t = Number.parseInt(t));
											} catch (o) {
												console.log(o);
											}
											var n = { user_id: t };
											e.LyHttp1.post(
												e.ConstInner.URL_DOMAIN +
													'users/upload_share_time_0',
												JSON.stringify(n),
												function (e) {
													e.code;
												}
											);
										}),
										(i.isShare = function () {
											return !0;
										}),
										(i.share = function (e, t, n, o) {
											this.shareId = new Date().getTime();
											var i =
												'ly_share_id=' + this.shareId;
											return (
												o &&
													o.forEach(function (e, t) {
														i += '&' + t + '=' + e;
													}),
												tt.shareAppMessage({
													title: e,
													imageUrl: t,
													query: i,
													success: function () {
														n(!0);
													},
													fail: function () {
														n(!1);
													}
												}),
												!0
											);
										}),
										(i.showToast = function (e) {
											return (
												tt.showToast({
													title: e,
													icon: 'none'
												}),
												!0
											);
										}),
										(i.login = function (e) {
											var n = this;
											tt.login({
												force: !1,
												success: function (o) {
													(n.user = new t.TtUser()),
														n.user.login(function (
															t
														) {
															e(0 == t);
														},
														o);
												},
												fail: function () {
													e(!1);
												}
											});
										}),
										(i.logout = function () {
											this.user = null;
										}),
										(i.checkThirdAuthUserInfo = function (
											e,
											t
										) {
											var n = this;
											try {
												tt.getSetting({
													success: function (o) {
														o.authSetting &&
														o.authSetting[
															'scope.userInfo'
														]
															? (n.user &&
																	t &&
																	n.user.syncThirdUserInfo(),
															  e(!0))
															: e(!1);
													},
													fail: function () {
														e(!1);
													}
												});
											} catch (o) {
												console.log(o), e(!1);
											}
										}),
										(i.getUser = function () {
											return this.user;
										}),
										(i.getThirdUserInfoOriginal = function (
											e
										) {
											this.checkThirdAuthUserInfo(
												function (t) {
													t
														? tt.getUserInfo({
																success:
																	function (
																		t
																	) {
																		var n =
																			t.userInfo;
																		e &&
																			e(
																				n
																			);
																	},
																fail: function () {
																	e &&
																		e(null);
																}
														  })
														: e && e(null);
												},
												!1
											);
										}),
										(i.parseThirdUserInfoOriginal =
											function (t) {
												if (t) {
													var n =
														new e.UserInfoImpl();
													return (
														t.nickName.length > 0 &&
															(n.userName =
																t.nickName),
														(n.sex = t.gender),
														(n.headImgUrl =
															t.avatarUrl),
														(n.score_all = 0),
														(n.score_week = 0),
														n
													);
												}
												return null;
											}),
										(i.hasVibrate = function () {
											return !0;
										}),
										(i.vibrate = function () {
											tt.vibrateLong({
												success: function (e) {
													console.log('' + e);
												},
												fail: function () {
													console.log(
														'vibrateLong\u8c03\u7528\u5931\u8d25'
													);
												}
											});
										}),
										o
									);
								})(t.BasePlatform);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.TtUser = (function (n) {
									function o() {
										var e;
										return (
											((e =
												n.apply(this, arguments) ||
												this).userSourceId = ''),
											e
										);
									}
									a(o, n);
									var i = o.prototype;
									return (
										(i.login = function (n, o) {
											var i = this,
												a =
													e.ConstInner
														.URL_DOMAIN_LOGIN +
													e.ConstInner
														.URL_DOMAIN_LOGIN_INTERFACE,
												r = null,
												s = null;
											if (null == o.code)
												if (
													(r =
														localStorage.getItem(
															'userSourceId'
														))
												)
													s = {
														source: 'web',
														source_id: r,
														game: e.getAppConfig()
															.appId
													};
												else {
													var c =
															new Date().getTime(),
														l =
															'' +
															this.randomString(
																8
															) +
															c;
													(s = {
														source: 'web',
														source_id: l,
														game: e.getAppConfig()
															.appId
													}),
														localStorage.setItem(
															'userSourceId',
															l
														);
												}
											else
												(r = o.code),
													(s = {
														source: 'tt',
														source_id: o.code,
														game: e.getAppConfig()
															.appId
													});
											e.LyHttp1.post(
												{ url: a, timeout: 5e3 },
												JSON.stringify(s),
												function (e) {
													var o = 1;
													if (0 == e.code)
														try {
															var s =
																new t.NetUserInfo();
															Object.assign(
																s,
																e.data
															),
																i.setUserInfo(
																	s.toUserInfo()
																),
																i.syncThirdUserInfo(),
																!r &&
																	e.data
																		.sourceId &&
																	((i.userSourceId =
																		e.data.sourceId),
																	localStorage.setItem(
																		'userSourceId',
																		i.userSourceId
																	)),
																(o = 0);
														} catch (a) {
															(o = 1),
																console.log(a);
														}
													else o = -1;
													n(o);
												}
											);
										}),
										(i.randomString = function (e) {
											e = e || 6;
											for (
												var t =
														'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678',
													n = t.length,
													o = '',
													i = 0;
												i < e;
												i++
											)
												o += t.charAt(
													Math.floor(
														Math.random() * n
													)
												);
											return o;
										}),
										o
									);
								})(t.NetUser);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (e) {
								var t = (function (t) {
									function n() {
										return t.apply(this, arguments) || this;
									}
									a(n, t);
									var o = n.prototype;
									return (
										(o.load = function () {
											var t = this;
											try {
												var n =
														qq.getSystemInfoSync()
															.screenWidth,
													o =
														qq.getSystemInfoSync()
															.screenHeight,
													i = qq.createBannerAd({
														adUnitId:
															this.getAdPlacementId(),
														style: {
															left: 0,
															top: o - 100,
															width: n
														}
													});
												i.onLoad(function () {
													t.onLoadSuccess();
												}),
													i.onError(function (n) {
														var o = new e.AdError(
															e.AdErrorCode.CODE_AD_LOAD_FAIL
														);
														o.setSdkCode(n.errCode),
															o.setSdkMsg(
																n.errMsg
															),
															t.onLoadFail(o);
													}),
													i.onResize(function () {
														var e =
																i.style
																	.realWidth,
															t =
																i.style
																	.realHeight,
															a = (n - e) / 2,
															r = o - t;
														(i.style.left = a),
															(i.style.top = r);
													}),
													(this.bannerAd = i);
											} catch (r) {
												var a = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												a.setMsg(r.toString()),
													this.onLoadFail(a);
											}
										}),
										(o.open = function () {
											if (this.bannerAd)
												this.onShowSuccess(),
													this.bannerAd.show();
											else {
												var t = new e.AdError(
													e.AdErrorCode.CODE_AD_SHOW_FAIL
												);
												t.setMsg(
													'\u65e0\u5b9e\u4f8b\u5316\u5e7f\u544a'
												),
													this.onShowFailed(t);
											}
										}),
										(o.close = function () {
											this.bannerAd &&
												(this.bannerAd.destroy(),
												(this.bannerAd = null)),
												this.onClosed();
										}),
										(o.destroy = function () {
											this.bannerAd &&
												this.bannerAd.destroy();
										}),
										n
									);
								})(e.BaseBannerAdItem);
								e.QQBannerAdItem = t;
								var n = (function () {
									function e(e) {
										var t = this;
										(this.status = 0),
											(this.onLoadListenerList =
												new Array()),
											(this.rewardedVideoAd =
												qq.createRewardedVideoAd({
													adUnitId: e
												})),
											this.rewardedVideoAd.onLoad(
												function () {
													(t.status = 1),
														t.onStatusChange();
												}
											),
											this.rewardedVideoAd.onError(
												function () {
													(t.status = 2),
														t.onStatusChange();
												}
											),
											this.rewardedVideoAd.onClose(
												function (e) {
													(t.status = 4),
														t.onStatusChange(),
														((e && e.isEnded) ||
															void 0 === e) &&
														t.onAdCloseCallback
															? t.onAdCloseCallback(
																	!0
															  )
															: t.onAdCloseCallback &&
															  t.onAdCloseCallback(
																	!1
															  );
												}
											);
									}
									e.getVideoAd = function (t) {
										var n = this.videoAdList.get(t);
										return (
											n ||
												((n = new e(t)),
												this.videoAdList.set(t, n)),
											n
										);
									};
									var t = e.prototype;
									return (
										(t.isReady = function () {
											return 1 == this.status;
										}),
										(t.onStatusChange = function () {
											for (
												var e,
													t = this.isReady(),
													n = s(
														this.onLoadListenerList
													);
												!(e = n()).done;

											) {
												var o = e.value;
												t
													? o.onLoadSuccess()
													: o.onLoading();
											}
										}),
										(t.onLoadListener = function (e) {
											this.isReady() && e.onLoadSuccess(),
												this.onLoadListenerList.push(e);
										}),
										(t.offLoadListener = function (e) {
											var t =
												this.onLoadListenerList.findIndex(
													function (t) {
														return t == e;
													}
												);
											this.onLoadListenerList.splice(
												t,
												1
											);
										}),
										(t.open = function (e, t) {
											var n = this;
											this.isReady()
												? ((this.status = 3),
												  e(!0),
												  (this.onAdCloseCallback = t),
												  this.rewardedVideoAd
														.show()
														.catch(function () {
															e(!1),
																n.rewardedVideoAd.load();
														}))
												: e(!1);
										}),
										e
									);
								})();
								n.videoAdList = new Map();
								var o = (function (o) {
									function i() {
										return o.apply(this, arguments) || this;
									}
									a(i, o);
									var r = i.prototype;
									return (
										(r.load = function () {
											try {
												n.getVideoAd(
													this.getAdPlacementId()
												).onLoadListener(this);
											} catch (t) {
												var o = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												o.setMsg(t.toString()),
													this.onLoadFail(o);
											}
										}),
										(r.open = function () {
											var t = this,
												o = n.getVideoAd(
													this.getAdPlacementId()
												);
											o.offLoadListener(this),
												o.open(
													function (n) {
														n
															? t.onShowSuccess()
															: t.onShowFailed(
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_SHOW_FAIL
																	)
															  );
													},
													function (e) {
														e && t.onReward(),
															t.onClosed();
													}
												);
										}),
										i
									);
								})(e.BaseVideoAdItem);
								e.QQVideoAdItem = o;
								var r = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									a(o, n);
									var i = o.prototype;
									return (
										(i.load = function () {
											var n = this;
											try {
												(this.interstitialAd =
													qq.createInterstitialAd({
														adUnitId:
															this.getAdPlacementId()
													})),
													this.interstitialAd.onLoad(
														function () {
															n.onLoadSuccess();
														}
													),
													this.interstitialAd.onError(
														function (t) {
															var o =
																new e.AdError(
																	e.AdErrorCode.CODE_AD_LOAD_FAIL
																);
															o.setSdkCode(
																t.errCode
															),
																o.setSdkMsg(
																	t.errMsg
																),
																n.onLoadFail(o);
														}
													);
											} catch (t) {
												var o = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												o.setMsg(t.toString()),
													this.onLoadFail(o);
											}
										}),
										(i.open = function () {
											var t = this;
											if (this.interstitialAd) {
												var n =
													this.interstitialAd.show();
												n &&
													n
														.then(function () {
															console.log(
																'interstitial\u5e7f\u544a\u5c55\u793a\u6210\u529f'
															),
																t.onShowSuccess(),
																t.interstitialAd.onClose(
																	function () {
																		t.close();
																	}
																);
														})
														.catch(function (n) {
															console.log(
																'interstitial\u5e7f\u544a\u5c55\u793a\u5931\u8d25',
																n
															);
															var o =
																new e.AdError(
																	e.AdErrorCode.CODE_AD_LOAD_FAIL
																);
															o.setSdkCode(
																'' + n.errCode
															),
																o.setSdkMsg(
																	'' +
																		n.errMsg
																),
																t.onShowFailed(
																	o
																);
														});
											}
										}),
										(i.close = function () {
											this.interstitialAd &&
												(this.interstitialAd.destroy(),
												(this.interstitialAd = null),
												this.onClosed());
										}),
										o
									);
								})(e.BaseInterstitialAdItem);
								(e.QQInterstitialAdItem = r),
									(e.QQAdAgent = (function (e) {
										function n() {
											return (
												e.apply(this, arguments) || this
											);
										}
										a(n, e);
										var s = n.prototype;
										return (
											(s.isSupported = function () {
												return !0;
											}),
											(s.isDev = function () {
												return (
													'devtools' ==
													qq.getSystemInfoSync()
														.platform
												);
											}),
											(s.createBannerAd = function (e) {
												return !this.isSupported() ||
													this.isDev()
													? null
													: this.qqbannerAdItem &&
													  this.qqbannerAdItem.isShow()
													? this.qqbannerAdItem
													: ((this.qqbannerAdItem =
															new t(e)),
													  this.qqbannerAdItem);
											}),
											(s.createVideoAd = function (e) {
												return this.isSupported()
													? new o(e)
													: null;
											}),
											(s.createInterstitialAd = function (
												e
											) {
												return this.isSupported() &&
													qq.createInterstitialAd
													? new r(e)
													: null;
											}),
											i(n, [
												{
													key: 'name',
													get: function () {
														return 'qq';
													}
												}
											]),
											n
										);
									})(e.BaseAdAgent));
							})(e.ads || (e.ads = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.QQPlatform = (function (n) {
									function o() {
										var e;
										return (
											((e =
												n.apply(this, arguments) ||
												this).user = null),
											(e.shareTicket = null),
											(e.adAgent = null),
											(e.analytics = null),
											(e.promoteAgent = null),
											(e.shareTime = null),
											e
										);
									}
									a(o, n),
										(o.checkIsPlatform = function () {
											return 'object' == typeof window.qq;
										});
									var i = o.prototype;
									return (
										(i.getPlatformType = function () {
											return e.PlatformDefine.QQminiGame;
										}),
										(i.init = function () {
											var e = this;
											if (qq.getLaunchOptionsSync) {
												var n =
													qq.getLaunchOptionsSync();
												n &&
													this.setShareTicket(
														n.shareTicket
													);
											}
											if (
												(qq.showShareMenu({
													showShareItems: [
														'qq',
														'qzone',
														'wechatFriends',
														'wechatMoment'
													]
												}),
												qq.onShareAppMessage(
													function () {
														var n =
															t.PlatformManager.getInstance().getShareParam();
														if (n) {
															(e.shareId =
																new Date().getTime()),
																(e.shareCallback =
																	null);
															var o =
																'ly_share_id=&' +
																e.shareId;
															return {
																title: n.title,
																imageUrl:
																	n.imageUrl,
																query: o
															};
														}
													}
												),
												qq.onShow(function (t) {
													setTimeout(function () {
														var n;
														null !=
															e.shareCallback &&
															((n =
																new Date().getTime() -
																	e.shareTime >
																4e3),
															e.setShareTicket(
																t.shareTicket
															),
															e.shareCallback &&
																e.shareCallback(
																	n
																),
															(e.shareCallback =
																null));
													}, 1e3);
												}),
												qq.getUpdateManager)
											) {
												var o = qq.getUpdateManager();
												o.onCheckForUpdate(function (
													e
												) {
													e.hasUpdate &&
														console.log(
															'\u7528\u6237\u65b0\u7248\u672c\u66f4\u65b0\u4e86...'
														);
												}),
													o.onUpdateReady(
														function () {
															qq.showModal({
																title: '\u66f4\u65b0\u63d0\u793a',
																content:
																	'\u65b0\u7248\u672c\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u662f\u5426\u91cd\u542f\u5e94\u7528\uff1f',
																success:
																	function (
																		e
																	) {
																		e.confirm &&
																			o.applyUpdate();
																	}
															});
														}
													),
													o.onUpdateFailed(
														function () {
															tt.showModal({
																title: '\u66f4\u65b0\u63d0\u793a',
																content:
																	'\u65b0\u7248\u672c\u4e0b\u8f7d\u5931\u8d25',
																showCancel: !1
															});
														}
													);
											}
											return !0;
										}),
										(i.getPlatformAdAgent = function () {
											return (
												this.adAgent ||
													(this.adAgent =
														new e.ads.QQAdAgent()),
												this.adAgent
											);
										}),
										(i.getPlatformAnalytics = function () {
											return (
												this.analytics ||
													(this.analytics =
														new e.analytics.Ald()),
												this.analytics
											);
										}),
										(i.share = function (e, t, n, o) {
											(this.shareId =
												new Date().getTime()),
												(this.shareTime = this.shareId),
												(this.shareCallback = n);
											var i =
												'ly_share_id=' + this.shareId;
											return (
												o &&
													o.forEach(function (e, t) {
														i += '&' + t + '=' + e;
													}),
												qq.shareAppMessage({
													title: e,
													imageUrl: t,
													query: i
												}),
												!0
											);
										}),
										(i.showToast = function (e) {
											return (
												qq.showToast({
													title: e,
													icon: 'none'
												}),
												!0
											);
										}),
										(i.login = function (e) {
											var n = this;
											qq.login({
												success: function (o) {
													(n.user = new t.QQUser()),
														n.user.login(function (
															t
														) {
															e(0 == t);
														},
														o);
												},
												fail: function () {
													e(!1);
												}
											});
										}),
										(i.logout = function () {
											this.user = null;
										}),
										(i.checkThirdAuthUserInfo = function (
											e,
											t
										) {
											var n = this;
											try {
												qq.getSetting({
													success: function (o) {
														o.authSetting &&
														o.authSetting[
															'scope.userInfo'
														]
															? (n.user &&
																	t &&
																	n.user.syncThirdUserInfo(),
															  e(!0))
															: e(!1);
													},
													fail: function () {
														e(!1);
													}
												});
											} catch (o) {
												console.log(o), e(!1);
											}
										}),
										(i.getUser = function () {
											return this.user;
										}),
										(i.getThirdUserInfoOriginal = function (
											e
										) {
											this.checkThirdAuthUserInfo(
												function (t) {
													t
														? qq.getUserInfo({
																success:
																	function (
																		t
																	) {
																		var n =
																			t.userInfo;
																		e &&
																			e(
																				n
																			);
																	},
																fail: function () {
																	e &&
																		e(null);
																}
														  })
														: e && e(null);
												},
												!1
											);
										}),
										(i.parseThirdUserInfoOriginal =
											function (t) {
												if (t) {
													var n =
														new e.UserInfoImpl();
													return (
														(n.userName =
															t.nickName),
														(n.sex = t.gender),
														(n.headImgUrl =
															t.avatarUrl),
														(n.score_all = 0),
														(n.score_week = 0),
														n
													);
												}
												return null;
											}),
										(i.setShareTicket = function (e) {
											console.log(
												'this shareTicket = ' +
													this.shareTicket +
													', new shareTicket = ' +
													e
											),
												e &&
													'string' == typeof e &&
													e.length > 0 &&
													(this.shareTicket = e);
										}),
										(i.isShare = function () {
											return !0;
										}),
										(i.hasVibrate = function () {
											return !0;
										}),
										(i.vibrate = function () {
											qq.vibrateShort({});
										}),
										o
									);
								})(t.BasePlatform);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.QQUser = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									return (
										a(o, n),
										(o.prototype.login = function (n, o) {
											var i = this,
												a =
													e.ConstInner
														.URL_DOMAIN_LOGIN +
													e.ConstInner
														.URL_DOMAIN_LOGIN_INTERFACE,
												r = {
													source: 'qq',
													source_id: o.code,
													game: e.getAppConfig().appId
												};
											e.LyHttp1.post(
												{ url: a, timeout: 5e3 },
												JSON.stringify(r),
												function (e) {
													var o = 1;
													if (0 == e.code)
														try {
															var r =
																new t.NetUserInfo();
															Object.assign(
																r,
																e.data
															),
																i.setUserInfo(
																	r.toUserInfo()
																),
																i.syncThirdUserInfo(),
																(o = 0);
														} catch (a) {
															(o = 1),
																console.log(a);
														}
													else o = -1;
													n(o);
												}
											);
										}),
										o
									);
								})(t.NetUser);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (e) {
								var t = (function (t) {
									function n() {
										return t.apply(this, arguments) || this;
									}
									a(n, t);
									var o = n.prototype;
									return (
										(o.load = function () {
											var t = this;
											try {
												var n =
														wx.getSystemInfoSync()
															.screenWidth,
													o =
														wx.getSystemInfoSync()
															.screenHeight,
													i = wx.createBannerAd({
														adUnitId:
															this.getAdPlacementId(),
														style: {
															left: 0,
															top: o,
															width: 0.8 * n
														}
													});
												i.onLoad(function () {
													t.onLoadSuccess();
												}),
													i.onError(function (n) {
														var o = new e.AdError(
															e.AdErrorCode.CODE_AD_LOAD_FAIL
														);
														o.setSdkCode(n.errCode),
															o.setSdkMsg(
																n.errMsg
															),
															t.onLoadFail(o);
													}),
													i.onResize(function () {
														var e =
																i.style
																	.realWidth,
															t =
																i.style
																	.realHeight,
															a = (n - e) / 2,
															r = o - t - 7;
														(i.style.left = a),
															(i.style.top = r);
													}),
													(this.bannerAd = i);
											} catch (r) {
												var a = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												a.setMsg(r.toString()),
													this.onLoadFail(a);
											}
										}),
										(o.open = function () {
											this.bannerAd &&
												(this.onShowSuccess(),
												this.bannerAd.show());
										}),
										(o.close = function () {
											this.bannerAd &&
												(this.onClosed(),
												this.bannerAd.destroy(),
												(this.bannerAd = null));
										}),
										n
									);
								})(e.BaseBannerAdItem);
								e.WxBannerAdItem = t;
								var n = (function () {
									function e(e) {
										var t = this;
										(this.status = 0),
											(this.onLoadListenerList =
												new Array()),
											(this.rewardedVideoAd =
												wx.createRewardedVideoAd({
													adUnitId: e
												})),
											this.rewardedVideoAd.onLoad(
												function () {
													(t.status = 1),
														t.onStatusChange();
												}
											),
											this.rewardedVideoAd.onError(
												function () {
													(t.status = 2),
														t.onStatusChange();
												}
											),
											this.rewardedVideoAd.onClose(
												function (e) {
													(t.status = 4),
														t.onStatusChange(),
														((e && e.isEnded) ||
															void 0 === e) &&
														t.onAdCloseCallback
															? t.onAdCloseCallback(
																	!0
															  )
															: t.onAdCloseCallback &&
															  t.onAdCloseCallback(
																	!1
															  );
												}
											);
									}
									e.getVideoAd = function (t) {
										var n = this.videoAdList.get(t);
										return (
											n ||
												((n = new e(t)),
												this.videoAdList.set(t, n)),
											n
										);
									};
									var t = e.prototype;
									return (
										(t.isReady = function () {
											return 1 == this.status;
										}),
										(t.onStatusChange = function () {
											for (
												var e,
													t = this.isReady(),
													n = s(
														this.onLoadListenerList
													);
												!(e = n()).done;

											) {
												var o = e.value;
												t
													? o.onLoadSuccess()
													: o.onLoading();
											}
										}),
										(t.onLoadListener = function (e) {
											this.isReady() && e.onLoadSuccess(),
												this.onLoadListenerList.push(e);
										}),
										(t.offLoadListener = function (e) {
											var t =
												this.onLoadListenerList.findIndex(
													function (t) {
														return t == e;
													}
												);
											this.onLoadListenerList.splice(
												t,
												1
											);
										}),
										(t.open = function (e, t) {
											var n = this;
											this.isReady()
												? ((this.status = 3),
												  e(!0),
												  (this.onAdCloseCallback = t),
												  this.rewardedVideoAd
														.show()
														.catch(function () {
															e(!1),
																n.rewardedVideoAd.load();
														}))
												: e(!1);
										}),
										e
									);
								})();
								n.videoAdList = new Map();
								var o = (function (o) {
									function i() {
										return o.apply(this, arguments) || this;
									}
									a(i, o);
									var r = i.prototype;
									return (
										(r.load = function () {
											try {
												n.getVideoAd(
													this.getAdPlacementId()
												).onLoadListener(this);
											} catch (t) {
												var o = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												o.setMsg(t.toString()),
													this.onLoadFail(o);
											}
										}),
										(r.open = function () {
											var t = this,
												o = n.getVideoAd(
													this.getAdPlacementId()
												);
											o.offLoadListener(this),
												o.open(
													function (n) {
														n
															? t.onShowSuccess()
															: t.onShowFailed(
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_SHOW_FAIL
																	)
															  );
													},
													function (e) {
														e && t.onReward(),
															t.onClosed();
													}
												);
										}),
										i
									);
								})(e.BaseVideoAdItem);
								e.WxVideoAdItem = o;
								var r = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									a(o, n);
									var i = o.prototype;
									return (
										(i.load = function () {
											var n = this;
											try {
												(this.interstitialAd =
													wx.createInterstitialAd({
														adUnitId:
															this.getAdPlacementId()
													})),
													this.interstitialAd.onLoad(
														function () {
															n.onLoadSuccess();
														}
													),
													this.interstitialAd.onError(
														function (t) {
															var o =
																new e.AdError(
																	e.AdErrorCode.CODE_AD_LOAD_FAIL
																);
															o.setSdkCode(
																t.errCode
															),
																o.setSdkMsg(
																	t.errMsg
																),
																n.onLoadFail(o);
														}
													);
											} catch (t) {
												var o = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												o.setMsg(t.toString()),
													this.onLoadFail(o);
											}
										}),
										(i.open = function () {
											this.interstitialAd &&
												(this.onShowSuccess(),
												this.interstitialAd.show());
										}),
										(i.close = function () {
											this.interstitialAd &&
												(this.onClosed(),
												this.interstitialAd.offError(),
												this.interstitialAd.offLoad(),
												(this.interstitialAd = null));
										}),
										o
									);
								})(e.BaseInterstitialAdItem);
								(e.WxInterstitialAdItem = r),
									(e.WxAdAgent = (function (e) {
										function n() {
											return (
												e.apply(this, arguments) || this
											);
										}
										a(n, e);
										var s = n.prototype;
										return (
											(s.isSupported = function () {
												return (
													wx.getSystemInfoSync()
														.version >= '2.0.4'
												);
											}),
											(s.isDev = function () {
												return (
													'devtools' ==
													wx.getSystemInfoSync()
														.platform
												);
											}),
											(s.createBannerAd = function (e) {
												return !this.isSupported() ||
													this.isDev()
													? null
													: new t(e);
											}),
											(s.createVideoAd = function (e) {
												return this.isSupported()
													? new o(e)
													: null;
											}),
											(s.createInterstitialAd = function (
												e
											) {
												return wx.getSystemInfoSync()
													.version >= '2.6.0'
													? new r(e)
													: null;
											}),
											i(n, [
												{
													key: 'name',
													get: function () {
														return 'wx';
													}
												}
											]),
											n
										);
									})(e.BaseAdAgent));
							})(e.ads || (e.ads = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.Ald = (function (t) {
									function n() {
										return t.apply(this, arguments) || this;
									}
									a(n, t);
									var o = n.prototype;
									return (
										(o.summitChapterEndedData = function (
											t,
											n,
											o
										) {
											wx.aldStage &&
												wx.aldStage.onEnd({
													stageId: t,
													stageName: n,
													userId: e
														.getSelfUser()
														.getUserInfo().userId,
													event: o
														? 'complete'
														: 'fail'
												});
										}),
										(o.use = function (t, n) {
											try {
												var o = JSON.parse(t),
													i = o.level,
													a = o.name,
													r = o.propName,
													s = o.propId;
												wx.aldStage &&
													wx.aldStage.onRunning({
														stageId: i,
														stageName: a,
														userId: e
															.getSelfUser()
															.getUserInfo()
															.userId,
														event: 'tools',
														params: {
															itemName: r,
															itemIdL: s,
															itemCount: n
														}
													});
											} catch (c) {
												console.log(c);
											}
										}),
										(o.startLevel = function (t) {
											try {
												var n =
														t.match(
															/\d+\.?\d*$/g
														)[0],
													o = n,
													i = n;
												wx.aldStage &&
													wx.aldStage.onStart({
														stageId: o,
														stageName: i,
														userId: e
															.getSelfUser()
															.getUserInfo()
															.userId
													});
											} catch (a) {
												console.log(a);
											}
										}),
										(o.finishLevel = function (e) {
											try {
												var t =
														e.match(
															/\d+\.?\d*$/g
														)[0],
													n = t,
													o = t;
												this.summitChapterEndedData(
													n,
													o,
													!0
												);
											} catch (i) {
												console.log(i);
											}
										}),
										(o.failLevel = function (e) {
											try {
												var t =
														e.match(
															/\d+\.?\d*$/g
														)[0],
													n = t,
													o = t;
												this.summitChapterEndedData(
													n,
													o,
													!1
												);
											} catch (i) {
												console.log(i);
											}
										}),
										n
									);
								})(t.BaseAnalytics);
							})(e.analytics || (e.analytics = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.WxPlatform = (function (n) {
									function o() {
										var e;
										return (
											((e =
												n.apply(this, arguments) ||
												this).user = null),
											(e.shareTicket = null),
											(e.adAgent = null),
											(e.analytics = null),
											(e.promoteAgent = null),
											(e.shareTime = null),
											e
										);
									}
									a(o, n),
										(o.checkIsPlatform = function () {
											return 'object' == typeof window.wx;
										});
									var i = o.prototype;
									return (
										(i.getPlatformType = function () {
											return e.PlatformDefine.WeChatGame;
										}),
										(i.init = function () {
											var n = this;
											if (wx.getLaunchOptionsSync) {
												var o =
													wx.getLaunchOptionsSync();
												o &&
													this.setShareTicket(
														o.shareTicket
													);
											}
											if (
												(wx.showShareMenu({}),
												wx.onShareAppMessage(
													function () {
														var e =
															t.PlatformManager.getInstance().getShareParam();
														if (e) {
															(n.shareId =
																new Date().getTime()),
																(n.shareCallback =
																	null);
															var o =
																'ly_share_id=&' +
																n.shareId;
															return {
																title: e.title,
																imageUrl:
																	e.imageUrl,
																query: o
															};
														}
													}
												),
												wx.onShow(function (e) {
													setTimeout(function () {
														var t;
														null !=
															n.shareCallback &&
															((t =
																new Date().getTime() -
																	n.shareTime >
																4e3),
															n.setShareTicket(
																e.shareTicket
															),
															n.shareAnalytics(),
															n.shareCallback &&
																n.shareCallback(
																	t
																),
															(n.shareCallback =
																null));
													}, 1e3);
												}),
												wx.getUpdateManager)
											) {
												var i = wx.getUpdateManager();
												i.onCheckForUpdate(function (
													e
												) {
													e.hasUpdate &&
														console.log(
															'\u7528\u6237\u65b0\u7248\u672c\u66f4\u65b0\u4e86...'
														);
												}),
													i.onUpdateReady(
														function () {
															wx.showModal({
																title: '\u66f4\u65b0\u63d0\u793a',
																content:
																	'\u65b0\u7248\u672c\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u662f\u5426\u91cd\u542f\u5e94\u7528\uff1f',
																success:
																	function (
																		e
																	) {
																		e.confirm &&
																			i.applyUpdate();
																	}
															});
														}
													),
													i.onUpdateFailed(
														function () {
															wx.showModal({
																title: '\u66f4\u65b0\u63d0\u793a',
																content:
																	'\u65b0\u7248\u672c\u4e0b\u8f7d\u5931\u8d25',
																showCancel: !1
															});
														}
													);
											}
											return (
												e.RankManager &&
													((e.RankManager.getInstance().getFriendWeekRank =
														this.getFriendWeek.bind(
															this
														)),
													(e.RankManager.getInstance().getFriendAllRank =
														this.getFriendAllRank.bind(
															this
														)),
													(e.RankManager.getInstance().getGroupWeekRank =
														this.getGroupWeekRank.bind(
															this
														)),
													(e.RankManager.getInstance().getGroupAllRank =
														this.getGroupAllRank.bind(
															this
														)),
													e.RankManager.getInstance().onRankChange(
														function (t, n) {
															if (
																t ==
																e.Constants
																	.RankMode_week
															) {
																var o = {};
																(o.lyLib2 = {
																	action: 'setRank_week',
																	data: n.toJsonString()
																}),
																	wx
																		.getOpenDataContext()
																		.postMessage(
																			o
																		);
															} else if (
																t ==
																e.Constants
																	.RankMode_all
															) {
																var i = {};
																(i.lyLib2 = {
																	action: 'setRank_all',
																	data: n.toJsonString()
																}),
																	wx
																		.getOpenDataContext()
																		.postMessage(
																			i
																		);
															}
														}
													)),
												!0
											);
										}),
										(i.getPlatformAdAgent = function () {
											return (
												this.adAgent ||
													(this.adAgent =
														new e.ads.WxAdAgent()),
												this.adAgent
											);
										}),
										(i.getPlatformAnalytics = function () {
											return (
												this.analytics ||
													(this.analytics =
														new e.analytics.Ald()),
												this.analytics
											);
										}),
										(i.getPlatformPromoteAgent =
											function () {
												return (
													this.promoteAgent ||
														(this.promoteAgent =
															new t.promote.WXPromoteAgent()),
													this.promoteAgent
												);
											}),
										(i.setShareTicket = function (e) {
											if (
												(console.log(
													'this shareTicket = ' +
														this.shareTicket +
														', new shareTicket = ' +
														e
												),
												e &&
													'string' == typeof e &&
													e.length > 0)
											) {
												this.shareTicket = e;
												var t = {};
												(t.lyLib2 = {
													action: 'setShareTicket',
													data: e
												}),
													wx
														.getOpenDataContext()
														.postMessage(t);
											}
										}),
										(i.shareAnalytics = function () {
											var t = null;
											try {
												(t = e
													.getSelfUser()
													.getUserId()),
													(t = Number.parseInt(t));
											} catch (o) {
												console.log(o);
											}
											var n = { user_id: t };
											e.LyHttp1.post(
												e.ConstInner.URL_DOMAIN +
													'users/upload_share_time_0',
												JSON.stringify(n),
												function (e) {
													e.code;
												}
											);
										}),
										(i.isShare = function () {
											return !0;
										}),
										(i.share = function (e, t, n, o) {
											(this.shareId =
												new Date().getTime()),
												(this.shareTime = this.shareId),
												(this.shareCallback = n);
											var i =
												'ly_share_id=' + this.shareId;
											return (
												o &&
													o.forEach(function (e, t) {
														i += '&' + t + '=' + e;
													}),
												wx.shareAppMessage({
													title: e,
													imageUrl: t,
													query: i
												}),
												!0
											);
										}),
										(i.shareGroupRank = function (
											e,
											t,
											n,
											o
										) {
											var i = this;
											return (
												wx.updateShareMenu({
													withShareTicket: !0,
													complete: function () {
														i.share(
															e,
															t,
															function (e) {
																wx.updateShareMenu(
																	{
																		withShareTicket:
																			!1
																	}
																),
																	n && n(e);
															},
															o
														);
													}
												}),
												!0
											);
										}),
										(i.showToast = function (e) {
											return (
												wx.showToast({
													title: e,
													icon: 'none'
												}),
												!0
											);
										}),
										(i.login = function (e) {
											var n = this;
											wx.login({
												success: function (o) {
													(n.user = new t.WxUser()),
														n.user.login(function (
															t
														) {
															e(0 == t);
														},
														o);
												},
												fail: function () {
													e(!1);
												}
											});
										}),
										(i.logout = function () {
											this.user = null;
										}),
										(i.checkThirdAuthUserInfo = function (
											e,
											t
										) {
											var n = this;
											try {
												wx.getSetting({
													success: function (o) {
														o.authSetting &&
														o.authSetting[
															'scope.userInfo'
														]
															? (n.user &&
																	t &&
																	n.user.syncThirdUserInfo(),
															  e(!0))
															: e(!1);
													},
													fail: function () {
														e(!1);
													}
												});
											} catch (o) {
												console.log(o), e(!1);
											}
										}),
										(i.getUser = function () {
											return this.user;
										}),
										(i.getThirdUserInfoOriginal = function (
											e
										) {
											this.checkThirdAuthUserInfo(
												function (t) {
													t
														? wx.getUserInfo({
																success:
																	function (
																		t
																	) {
																		var n =
																			t.userInfo;
																		e &&
																			e(
																				n
																			);
																	},
																fail: function () {
																	e &&
																		e(null);
																}
														  })
														: e && e(null);
												},
												!1
											);
										}),
										(i.parseThirdUserInfoOriginal =
											function (t) {
												if (t) {
													var n =
														new e.UserInfoImpl();
													return (
														(n.userName =
															t.nickName),
														(n.sex = t.gender),
														(n.headImgUrl =
															t.avatarUrl),
														(n.score_all = 0),
														(n.score_week = 0),
														n
													);
												}
												return null;
											}),
										(i.getWxRank = function (t, n) {
											var o = null,
												i = wx.getOpenDataContext();
											i.canvas &&
												(o = e.RankImpl.fromJsonString(
													i.canvas[t]
												)),
												n && n(o);
										}),
										(i.getFriendWeek = function (t) {
											this.getWxRank(
												'ly_friendWeekRank',
												function (n) {
													n ||
														(n = new e.RankImpl(
															e.Constants.RankMode_friendWeek
														)),
														t && t(n);
												}
											);
										}),
										(i.getFriendAllRank = function (t) {
											this.getWxRank(
												'ly_friendAllRank',
												function (n) {
													n ||
														(n = new e.RankImpl(
															e.Constants.RankMode_friendAll
														)),
														t && t(n);
												}
											);
										}),
										(i.getGroupWeekRank = function (t) {
											var n = this;
											this.getWxRank(
												'ly_groupWeekRank',
												function (o) {
													o ||
														(n.shareTicket &&
															'string' ==
																typeof n.shareTicket &&
															n.shareTicket
																.length > 0 &&
															(o = new e.RankImpl(
																e.Constants.RankMode_groupWeek
															))),
														t && t(o);
												}
											);
										}),
										(i.getGroupAllRank = function (t) {
											var n = this;
											this.getWxRank(
												'ly_groupAllRank',
												function (o) {
													o ||
														(n.shareTicket &&
															'string' ==
																typeof n.shareTicket &&
															n.shareTicket
																.length > 0 &&
															(o = new e.RankImpl(
																e.Constants.RankMode_groupAll
															))),
														t && t(o);
												}
											);
										}),
										o
									);
								})(t.BasePlatform);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								(function (t) {
									t.WXPromoteAgent = (function (n) {
										function o() {
											return (
												n.apply(this, arguments) || this
											);
										}
										a(o, n);
										var i = o.prototype;
										return (
											(i.parsePromoteList = function (e) {
												if (
													((this.promoteItemList =
														new Array()),
													e)
												) {
													var n = new Array();
													Object.assign(n, e);
													for (
														var o = 0, i = n;
														o < i.length;
														o++
													) {
														var a = i[o],
															r =
																new t.PromoteItemImpl();
														(r.position =
															a.promotePosition),
															(r.title = a.name),
															(r.iconUrl = a.img),
															(r.packageName =
																a.appID),
															(r.path = a.path),
															(r.extra =
																a.extra_data),
															this.promoteItemList.push(
																r
															);
													}
												}
											}),
											(i.updatePromoteItem = function (
												t
											) {
												var n = this;
												(this.updateStatus = 1),
													e.LyHttp1.get(
														e.ConstInner
															.URL_DOMAIN +
															'lwgame/get_recommend_game?game=' +
															e.getAppConfig()
																.appId,
														function (e) {
															if (
																0 == e.code &&
																e.data
															) {
																var o =
																	JSON.parse(
																		e.data
																	);
																o
																	? (n.parsePromoteList(
																			o.list
																	  ),
																	  n.onUpdatePromoteItemFinish())
																	: t && t(1);
															} else t && t(-1);
														}
													);
											}),
											(i.openPromoteItem = function (e) {
												try {
													wx.navigateToMiniProgram &&
														wx.navigateToMiniProgram(
															{
																appId: e.packageName,
																path: e.path,
																extraData:
																	e.extra
															}
														);
												} catch (t) {
													console.log(t);
												}
											}),
											o
										);
									})(t.BasePromoteAgent);
								})(t.promote || (t.promote = {}));
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.WxUser = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									a(o, n);
									var i = o.prototype;
									return (
										(i.login = function (n, o) {
											var i = this,
												a =
													e.ConstInner
														.URL_DOMAIN_LOGIN +
													e.ConstInner
														.URL_DOMAIN_LOGIN_INTERFACE,
												r = {
													source: 'wx',
													source_id: o.code,
													game: e.getAppConfig().appId
												};
											e.LyHttp1.post(
												{ url: a, timeout: 5e3 },
												JSON.stringify(r),
												function (e) {
													var o = 1;
													if (0 == e.code)
														try {
															var r =
																new t.NetUserInfo();
															Object.assign(
																r,
																e.data
															),
																i.setUserInfo(
																	r.toUserInfo()
																),
																i.syncThirdUserInfo(),
																i.setWxSubUserInfo(),
																(o = 0);
														} catch (a) {
															(o = 1),
																console.log(a);
														}
													else o = -1;
													n(o);
												}
											);
										}),
										(i.setWxSubUserInfo = function () {
											var e = this.getUserInfo();
											if (e) {
												var t = {};
												(t.lyLib2 = {
													action: 'setUserInfo',
													data: e.toJsonString()
												}),
													wx
														.getOpenDataContext()
														.postMessage(t);
											}
										}),
										(i.submitScore = function (e, t) {
											var o = this;
											n.prototype.submitScore.call(
												this,
												e,
												function (e) {
													0 == e &&
														o.setWxSubUserInfo(),
														t && t(e);
												}
											);
										}),
										o
									);
								})(t.NetUser);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (e) {
								var t = (function (t) {
									function n() {
										return t.apply(this, arguments) || this;
									}
									a(n, t);
									var o = n.prototype;
									return (
										(o.load = function () {
											var t = this;
											try {
												(this.bannerAd =
													qg.createBannerAd({
														posId: this.getAdPlacementId()
													})),
													this.bannerAd.onError(
														function (n) {
															var o =
																new e.AdError(
																	e.AdErrorCode.CODE_AD_LOAD_FAIL
																);
															o.setSdkCode(
																'' + n.code
															),
																o.setSdkMsg(
																	'' + n.msg
																),
																t.onLoadFail(o);
														}
													),
													this.onLoadSuccess();
											} catch (o) {
												var n = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												n.setMsg(o.toString()),
													this.onLoadFail(n);
											}
										}),
										(o.open = function () {
											var e = this;
											this.bannerAd &&
												(this.bannerAd.onShow(
													function () {
														e.onShowSuccess();
													}
												),
												this.bannerAd.onHide(
													function () {
														e.bannerAd &&
															(e.bannerAd.offShow(),
															e.bannerAd.offHide(),
															(e.bannerAd =
																null)),
															e.onClosed();
													}
												),
												this.bannerAd.show());
										}),
										(o.close = function () {
											this.bannerAd &&
												(this.bannerAd.offShow(),
												this.bannerAd.offHide(),
												this.bannerAd.hide(),
												(this.bannerAd = null),
												this.onClosed());
										}),
										n
									);
								})(e.BaseBannerAdItem);
								e.OppoBannerAdItem = t;
								var n = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									a(o, n);
									var i = o.prototype;
									return (
										(i.load = function () {
											var n = this;
											try {
												(this.interstitialAd =
													qg.createInsertAd({
														posId: this.getAdPlacementId()
													})),
													console.log(
														this.interstitialAd
													),
													this.interstitialAd.onError(
														function (t) {
															if (
																n.isLoadSuccess()
															) {
																var o =
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_SHOW_FAIL
																	);
																o.setSdkCode(
																	'' + t.code
																),
																	o.setSdkMsg(
																		'' +
																			t.msg
																	),
																	n.onShowFailed(
																		o
																	);
															} else {
																var i =
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_LOAD_FAIL
																	);
																i.setSdkCode(
																	'' + t.code
																),
																	i.setSdkMsg(
																		'' +
																			t.msg
																	),
																	n.onLoadFail(
																		i
																	);
															}
														}
													),
													this.interstitialAd.onLoad(
														function () {
															n.onLoadSuccess();
														}
													),
													this.interstitialAd.load();
											} catch (t) {
												var o = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												o.setMsg(t.toString()),
													this.onLoadFail(o);
											}
										}),
										(i.open = function () {
											var e = this;
											this.interstitialAd &&
												(this.interstitialAd.onClose(
													function () {
														e.interstitialAd.destroy(),
															e.onClosed();
													}
												),
												this.interstitialAd.onShow(
													function () {
														e.onShowSuccess();
													}
												),
												this.interstitialAd.show());
										}),
										o
									);
								})(e.BaseInterstitialAdItem);
								e.OppoInterstitialAdItem = n;
								var o = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									a(o, n);
									var i = o.prototype;
									return (
										(i.load = function () {
											var n = this;
											try {
												this.videoAd ||
													((this.videoAd =
														qg.createRewardedVideoAd(
															{
																posId: this.getAdPlacementId()
															}
														)),
													this.videoAd.onError(
														function (t) {
															if (
																n.isLoadSuccess()
															) {
																var o =
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_SHOW_FAIL
																	);
																o.setSdkCode(
																	'' + t.code
																),
																	o.setSdkMsg(
																		'' +
																			t.msg
																	),
																	n.onShowFailed(
																		o
																	);
															} else {
																var i =
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_LOAD_FAIL
																	);
																i.setSdkCode(
																	'' + t.code
																),
																	i.setSdkMsg(
																		'' +
																			t.msg
																	),
																	n.onLoadFail(
																		i
																	);
															}
														}
													),
													this.videoAd.onLoad(
														function () {
															n.onLoadSuccess();
														}
													)),
													this.videoAd.load();
											} catch (t) {
												var o = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												o.setMsg(t.toString()),
													this.onLoadFail(o);
											}
										}),
										(i.open = function () {
											var e = this;
											this.videoAd &&
												(this.videoAd.onVideoStart(
													function () {
														e.onShowSuccess();
													}
												),
												this.videoAd.onClose(function (
													t
												) {
													t.isEnded
														? (e.onReward(),
														  console.log(
																'\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u5b8c\u6210\uff0c\u53d1\u653e\u5956\u52b1'
														  ))
														: console.log(
																'\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u53d6\u6d88\u5173\u95ed\uff0c\u4e0d\u53d1\u653e\u5956\u52b1'
														  ),
														(e.videoAd = null),
														e.onClosed();
												}),
												this.videoAd.show());
										}),
										(i.close = function () {}),
										o
									);
								})(e.BaseVideoAdItem);
								e.OppoVideoAdItem = o;
								var r = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									a(o, n);
									var i = o.prototype;
									return (
										(i.load = function () {
											var n = this;
											try {
												(this.interstitialVideoAd =
													qg.createInterstitialVideoAd(
														{
															adUnitId:
																this.getAdPlacementId()
														}
													)),
													this.interstitialVideoAd.onError(
														function (t) {
															if (
																n.isLoadSuccess()
															) {
																var o =
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_SHOW_FAIL
																	);
																o.setSdkCode(
																	'' + t.code
																),
																	o.setSdkMsg(
																		'' +
																			t.msg
																	),
																	n.onShowFailed(
																		o
																	);
															} else {
																var i =
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_LOAD_FAIL
																	);
																i.setSdkCode(
																	'' + t.code
																),
																	i.setSdkMsg(
																		'' +
																			t.msg
																	),
																	n.onLoadFail(
																		i
																	);
															}
														}
													),
													this.interstitialVideoAd.onLoad(
														function () {
															n.onLoadSuccess();
														}
													),
													this.interstitialVideoAd.load();
											} catch (t) {
												var o = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												o.setMsg(t.toString()),
													this.onLoadFail(o);
											}
										}),
										(i.open = function () {
											var e = this;
											this.interstitialVideoAd &&
												(this.interstitialVideoAd.onClose(
													function () {
														e.interstitialVideoAd.destroy(),
															e.onClosed();
													}
												),
												this.interstitialVideoAd.onShow(
													function () {
														e.onShowSuccess();
													}
												),
												this.interstitialVideoAd.show());
										}),
										o
									);
								})(e.BaseInterstitialVideoAdItem);
								(e.OppoInterstitialVideoAdItem = r),
									(e.OppoAdAgent = (function (e) {
										function s() {
											return (
												e.apply(this, arguments) || this
											);
										}
										a(s, e);
										var c = s.prototype;
										return (
											(c.loadAdSource = function (e, t) {
												try {
													var o = e.getAppId();
													qg.initAdService({
														appId: o,
														isDebug: !1,
														success: function () {
															t(!0);
														},
														fail: function (e) {
															console.log(
																'oppo ad init fail:' +
																	e.code +
																	e.msg
															),
																t(!1);
														}
													});
												} catch (n) {
													console.log(n), t(!1);
												}
											}),
											(c.createBannerAd = function (e) {
												return qg.createBannerAd
													? new t(e)
													: null;
											}),
											(c.createInterstitialAd = function (
												e
											) {
												if (qg.createInsertAd)
													return new n(e);
											}),
											(c.createVideoAd = function (e) {
												return qg.createRewardedVideoAd
													? new o(e)
													: null;
											}),
											(c.createInterstitialVideoAd =
												function (e) {
													if (
														qg.createInterstitialVideoAd
													)
														return new r(e);
												}),
											i(s, [
												{
													key: 'name',
													get: function () {
														return 'oppo_quickgame';
													}
												}
											]),
											s
										);
									})(e.BaseAdAgent));
							})(e.ads || (e.ads = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.OppoPlatform = (function (n) {
									function o() {
										var e;
										return (
											((e =
												n.apply(this, arguments) ||
												this).user = null),
											(e.adAgent = null),
											(e.thirdUserInfoOriginal = null),
											e
										);
									}
									a(o, n),
										(o.checkIsPlatform = function () {
											return (
												'object' == typeof window.qg &&
												'OPPO' ==
													window.qg.getProvider()
											);
										});
									var i = o.prototype;
									return (
										(i.getPlatformType = function () {
											return e.PlatformDefine
												.OppoQuickGame;
										}),
										(i.init = function () {
											return !0;
										}),
										(i.getPlatformAdAgent = function () {
											return (
												this.adAgent ||
													(this.adAgent =
														new e.ads.OppoAdAgent()),
												this.adAgent
											);
										}),
										(i.login = function (n) {
											var o = this;
											console.log('oppo third login'),
												qg.login({
													pkgName:
														e.getAppConfig()
															.packageName,
													success: function (e) {
														console.log(
															'oppo third login success: ' +
																JSON.stringify(
																	e
																)
														),
															(o.thirdUserInfoOriginal =
																e),
															(o.user =
																new t.OppoUser()),
															o.user.login(
																function (e) {
																	n(0 == e);
																},
																e
															);
													},
													fail: function (e) {
														console.log(
															'oppo third login fail: ' +
																JSON.stringify(
																	e
																)
														),
															n(!1);
													}
												});
										}),
										(i.logout = function () {
											this.user = null;
										}),
										(i.checkThirdAuthUserInfo = function (
											e,
											t
										) {
											this.user &&
												t &&
												this.user.syncThirdUserInfo(),
												e(!0);
										}),
										(i.getUser = function () {
											return this.user;
										}),
										(i.getThirdUserInfoOriginal = function (
											e
										) {
											e && e(this.thirdUserInfoOriginal);
										}),
										(i.parseThirdUserInfoOriginal =
											function (t) {
												if (t) {
													var n =
														new e.UserInfoImpl();
													return (
														(n.userName =
															t.nickName),
														(n.sex =
															'M' == t.sex
																? 1
																: 2),
														(n.headImgUrl =
															t.avatar),
														(n.score_all = 0),
														(n.score_week = 0),
														n
													);
												}
												return null;
											}),
										(i.showToast = function (e) {
											return (
												qg.showToast({
													title: e,
													icon: 'none'
												}),
												!0
											);
										}),
										o
									);
								})(t.BasePlatform);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.OppoUser = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									return (
										a(o, n),
										(o.prototype.login = function (n, o) {
											var i = this,
												a =
													e.ConstInner
														.URL_DOMAIN_LOGIN +
													e.ConstInner
														.URL_DOMAIN_LOGIN_INTERFACE,
												r = {
													source: 'oppo',
													source_id: o.uid,
													game: e.getAppConfig().appId
												};
											console.log(
												'oppo login data: ' +
													JSON.stringify(r)
											),
												e.LyHttp1.post(
													{ url: a, timeout: 5e3 },
													JSON.stringify(r),
													function (e) {
														console.log(
															'oppo login code: ' +
																e.code
														);
														var o = 1;
														if (0 == e.code)
															try {
																var r =
																	new t.NetUserInfo();
																Object.assign(
																	r,
																	e.data
																),
																	i.setUserInfo(
																		r.toUserInfo()
																	),
																	i.syncThirdUserInfo(),
																	(o = 0);
															} catch (a) {
																(o = 1),
																	console.log(
																		a
																	);
															}
														else o = -1;
														n(o);
													}
												);
										}),
										o
									);
								})(t.NetUser);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (e) {
								var t = (function (t) {
									function n() {
										return t.apply(this, arguments) || this;
									}
									a(n, t);
									var o = n.prototype;
									return (
										(o.load = function () {
											var t = this;
											if (
												qg.getSystemInfoSync()
													.platformVersionCode >= 1031
											)
												try {
													(this.bannerAd =
														qg.createBannerAd({
															posId: this.getAdPlacementId(),
															style: {}
														})),
														this.bannerAd.onError(
															function (n) {
																var o =
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_LOAD_FAIL
																	);
																o.setSdkCode(
																	'' +
																		n.errCode
																),
																	o.setSdkMsg(
																		'' +
																			n.errMsg
																	),
																	t.onLoadFail(
																		o
																	);
															}
														),
														this.bannerAd.onLoad(
															function () {
																t.onLoadSuccess();
															}
														);
												} catch (i) {
													var n = new e.AdError(
														e.AdErrorCode.CODE_AD_LOAD_FAIL
													);
													n.setMsg(i.toString()),
														this.onLoadFail(n);
												}
											else {
												var o = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												o.setMsg(
													'\u5f53\u524d\u5f15\u64ce\u7248\u672c\u4e0d\u652f\u6301\u5e7f\u544a'
												),
													this.onLoadFail(o);
											}
										}),
										(o.open = function () {
											var t = this;
											if (this.bannerAd) {
												var n = this.bannerAd.show();
												n &&
													n
														.then(function () {
															console.log(
																'banner\u5e7f\u544a\u5c55\u793a\u6210\u529f'
															),
																t.onShowSuccess(),
																t.bannerAd.onClose(
																	function () {
																		t.close();
																	}
																);
														})
														.catch(function (n) {
															console.log(
																'banner\u5e7f\u544a\u5c55\u793a\u5931\u8d25',
																n
															);
															var o =
																new e.AdError(
																	e.AdErrorCode.CODE_AD_LOAD_FAIL
																);
															o.setSdkCode(
																'' + n.errCode
															),
																o.setSdkMsg(
																	'' +
																		n.errMsg
																),
																t.onShowFailed(
																	o
																);
														});
											}
										}),
										(o.close = function () {
											this.bannerAd &&
												(this.bannerAd.hide(),
												this.bannerAd.destroy(),
												this.bannerAd.offClose(),
												(this.bannerAd = null),
												this.onClosed());
										}),
										n
									);
								})(e.BaseBannerAdItem);
								e.VivoBannerAdItem = t;
								var n = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									a(o, n);
									var i = o.prototype;
									return (
										(i.load2 = function () {
											var n = this;
											if (
												qg.getSystemInfoSync()
													.platformVersionCode >= 1031
											)
												try {
													(this.interstitialAd =
														qg.createInterstitialAd(
															{
																posId: this.getAdPlacementId()
															}
														)),
														this.interstitialAd.onError(
															function (t) {
																var o =
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_LOAD_FAIL
																	);
																o.setSdkCode(
																	'' +
																		t.errCode
																),
																	o.setSdkMsg(
																		'' +
																			t.errMsg
																	),
																	n.onLoadFail(
																		o
																	);
															}
														),
														this.interstitialAd.onLoad(
															function () {
																n.onLoadSuccess();
															}
														);
												} catch (t) {
													var o = new e.AdError(
														e.AdErrorCode.CODE_AD_LOAD_FAIL
													);
													o.setMsg(t.toString()),
														this.onLoadFail(o);
												}
											else {
												var i = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												i.setMsg(
													'\u5f53\u524d\u5f15\u64ce\u7248\u672c\u4e0d\u652f\u6301\u5e7f\u544a'
												),
													this.onLoadFail(i);
											}
										}),
										(i.load = function () {
											this.onLoadSuccess();
										}),
										(i.open = function () {
											var t = this;
											(this.interstitialAd =
												qg.createInterstitialAd({
													posId: this.getAdPlacementId()
												})),
												this.interstitialAd.onError(
													function (n) {
														var o = new e.AdError(
															e.AdErrorCode.CODE_AD_LOAD_FAIL
														);
														o.setSdkCode(
															'' + n.errCode
														),
															o.setSdkMsg(
																'' + n.errMsg
															),
															t.onLoadFail(o);
													}
												),
												this.interstitialAd.onLoad(
													function () {
														t.onLoadSuccess(),
															t.open2();
													}
												);
										}),
										(i.open2 = function () {
											var t = this,
												n = this.interstitialAd.show();
											n &&
												n
													.then(function () {
														t.onShowSuccess(),
															t.interstitialAd.onClose(
																function () {
																	t.onClosed();
																}
															);
													})
													.catch(function (n) {
														var o = new e.AdError(
															e.AdErrorCode.CODE_AD_LOAD_FAIL
														);
														o.setSdkCode(
															'' + n.errCode
														),
															o.setSdkMsg(
																'' + n.errMsg
															),
															console.log(
																'\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u5931\u8d25',
																n
															),
															t.onShowFailed(o);
													});
										}),
										o
									);
								})(e.BaseInterstitialAdItem);
								(n.interstitialAdMap = new Map()),
									(n.allInterstitialAdItems = new Map()),
									(e.VivoInterstitialAdItem = n);
								var o = (function () {
									function t(t) {
										var n = this;
										(this.status = 0),
											(this.onLoadListenerList =
												new Array()),
											(this.rewardedVideoAd =
												qg.createRewardedVideoAd({
													adUnitId: t
												})),
											this.rewardedVideoAd.onLoad(
												function () {
													(n.status = 1),
														n.onStatusChange();
												}
											),
											this.rewardedVideoAd.onError(
												function () {
													n.status = 2;
													var t = new e.AdError(
														e.AdErrorCode.CODE_AD_LOAD_FAIL
													);
													t.setMsg(
														'\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25'
													),
														n.onStatusChange(t);
												}
											),
											this.rewardedVideoAd.onClose(
												function (e) {
													(n.status = 4),
														n.onStatusChange(),
														((e && e.isEnded) ||
															void 0 === e) &&
														n.onAdCloseCallback
															? n.onAdCloseCallback(
																	!0
															  )
															: n.onAdCloseCallback &&
															  n.onAdCloseCallback(
																	!1
															  );
												}
											);
									}
									t.getVideoAd = function (e) {
										var n = this.videoAdList.get(e);
										return (
											n ||
												((n = new t(e)),
												this.videoAdList.set(e, n)),
											n
										);
									};
									var n = t.prototype;
									return (
										(n.loadAd = function () {
											var t = this;
											console.log(
												'\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d - loadAd'
											),
												this.rewardedVideoAd
													? this.rewardedVideoAd
															.load()
															.then(function () {
																(t.status = 1),
																	t.onStatusChange(),
																	console.log(
																		'\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u6210\u529f - loadAd'
																	);
															})
															.catch(function () {
																t.status = 2;
																var n =
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_LOAD_FAIL
																	);
																n.setMsg(
																	'\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25'
																),
																	t.onStatusChange(
																		n
																	);
															})
													: console.log(
															'\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d - not find this.rewardedVideoAd'
													  );
										}),
										(n.isReady = function () {
											return 1 == this.status;
										}),
										(n.isLoadFail = function () {
											return 2 == this.status;
										}),
										(n.isShowSuccess = function () {
											return 3 == this.status;
										}),
										(n.isClose = function () {
											return 4 == this.status;
										}),
										(n.isShowFail = function () {
											return 5 == this.status;
										}),
										(n.onStatusChange = function (e) {
											for (
												var t,
													n = this.isReady(),
													o = s(
														this.onLoadListenerList
													);
												!(t = o()).done;

											) {
												var i = t.value;
												n
													? i.onLoadSuccess()
													: this.isLoadFail()
													? (e && i.onLoadFail(e),
													  i.onLoading())
													: this.isShowSuccess() &&
													  i.onShowSuccess();
											}
										}),
										(n.onLoadListener = function (e) {
											this.isReady() && e.onLoadSuccess(),
												this.onLoadListenerList.push(e);
										}),
										(n.offLoadListener = function (e) {
											var t =
												this.onLoadListenerList.findIndex(
													function (t) {
														return t == e;
													}
												);
											this.onLoadListenerList.splice(
												t,
												1
											);
										}),
										(n.open = function (e, t) {
											var n = this;
											this.isReady()
												? ((this.status = 3),
												  (this.onAdCloseCallback = t),
												  this.rewardedVideoAd
														.show()
														.then(function () {
															e(!0),
																console.log(
																	'\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u6210\u529f'
																);
														})
														.catch(function (t) {
															console.log(
																'\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u5931\u8d25',
																t
															),
																e(!1),
																n.rewardedVideoAd.load();
														}))
												: e(!1);
										}),
										t
									);
								})();
								o.videoAdList = new Map();
								var r = (function (n) {
									function i() {
										return n.apply(this, arguments) || this;
									}
									a(i, n);
									var r = i.prototype;
									return (
										(r.load = function () {
											if (
												(console.log(
													'\u6fc0\u52b1\u89c6\u9891\u5e7f\u544aload'
												),
												qg.getSystemInfoSync()
													.platformVersionCode >=
													1041)
											)
												try {
													var n = o.getVideoAd(
														this.getAdPlacementId()
													);
													n.onLoadListener(this),
														n.loadAd();
												} catch (t) {
													var i = new e.AdError(
														e.AdErrorCode.CODE_AD_LOAD_FAIL
													);
													i.setMsg(t.toString()),
														this.onLoadFail(i);
												}
											else {
												var a = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												a.setMsg(
													'\u5f53\u524d\u5f15\u64ce\u7248\u672c\u4e0d\u652f\u6301\u539f\u751f\u5e7f\u544a'
												),
													this.onLoadFail(a);
											}
										}),
										(r.open = function () {
											var t = this,
												n = o.getVideoAd(
													this.getAdPlacementId()
												);
											n.offLoadListener(this),
												n.open(
													function (n) {
														n
															? t.onShowSuccess()
															: t.onShowFailed(
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_SHOW_FAIL
																	)
															  );
													},
													function (e) {
														e && t.onReward(),
															t.onClosed();
													}
												);
										}),
										i
									);
								})(e.BaseVideoAdItem);
								(e.VivoVideoAdItem = r),
									(e.VivoAdAgent = (function (e) {
										function o() {
											return (
												e.apply(this, arguments) || this
											);
										}
										a(o, e);
										var s = o.prototype;
										return (
											(s.loadAdSource = function (e, t) {
												try {
													qg.getSystemInfoSync()
														.platformVersionCode >=
														1031 && t(!0);
												} catch (n) {
													console.log(n), t(!1);
												}
											}),
											(s.createBannerAd = function (e) {
												return qg.createBannerAd
													? new t(e)
													: null;
											}),
											(s.createInterstitialAd = function (
												e
											) {
												return qg.createInterstitialAd
													? new n(e)
													: null;
											}),
											(s.createVideoAd = function (e) {
												return qg.createRewardedVideoAd
													? new r(e)
													: null;
											}),
											i(o, [
												{
													key: 'name',
													get: function () {
														return 'vivo_quickgame';
													}
												}
											]),
											o
										);
									})(e.BaseAdAgent));
							})(e.ads || (e.ads = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.VivoPlatform = (function (n) {
									function o() {
										var e;
										return (
											((e =
												n.apply(this, arguments) ||
												this).user = null),
											(e.adAgent = null),
											(e.userInfo = null),
											e
										);
									}
									a(o, n),
										(o.checkIsPlatform = function () {
											return (
												'object' == typeof window.qg &&
												'vivo' ==
													window.qg.getProvider()
											);
										});
									var i = o.prototype;
									return (
										(i.getPlatformType = function () {
											return e.PlatformDefine
												.VivoQuickGame;
										}),
										(i.init = function () {
											return !0;
										}),
										(i.getPlatformAdAgent = function () {
											return (
												this.adAgent ||
													(this.adAgent =
														new e.ads.VivoAdAgent()),
												this.adAgent
											);
										}),
										(i.login = function (e) {
											var n = this,
												o =
													localStorage.getItem(
														'vivoToken'
													);
											o && this.checkTokenAlive()
												? qg.getProfile({
														token: o,
														success: function (o) {
															(n.userInfo = o),
																(n.user =
																	new t.VivoUser()),
																n.user.login(
																	function (
																		t
																	) {
																		e(
																			0 ==
																				t
																		);
																	},
																	o
																);
														},
														fail: function () {
															e(!1);
														}
												  })
												: qg.authorize({
														type: 'token',
														success: function (o) {
															localStorage.setItem(
																'vivoToken',
																o.accessToken
															),
																localStorage.setItem(
																	'tokenAliveTime',
																	1e3 *
																		o.expiresIn +
																		new Date().getTime() +
																		''
																),
																qg.getProfile({
																	token: o.accessToken,
																	success:
																		function (
																			o
																		) {
																			(n.userInfo =
																				o),
																				(n.user =
																					new t.VivoUser()),
																				n.user.login(
																					function (
																						t
																					) {
																						e(
																							0 ==
																								t
																						);
																					},
																					o
																				);
																		},
																	fail: function () {
																		e(!1);
																	}
																});
														},
														fail: function () {
															e(!1);
														}
												  });
										}),
										(i.checkTokenAlive = function () {
											var e = !1,
												t =
													localStorage.getItem(
														'tokenAliveTime'
													);
											if (t)
												try {
													parseInt(t) >
														new Date().getTime() +
															1e3 && (e = !0);
												} catch (n) {
													return !1;
												}
											return e;
										}),
										(i.logout = function () {
											this.user = null;
										}),
										(i.checkThirdAuthUserInfo =
											function () {}),
										(i.getUser = function () {
											return this.user;
										}),
										(i.getThirdUserInfoOriginal = function (
											e
										) {
											var t = this.userInfo;
											e && e(t);
										}),
										(i.parseThirdUserInfoOriginal =
											function (t) {
												if (t) {
													var n =
														new e.UserInfoImpl();
													return (
														(n.userName =
															t.nickname),
														(n.headImgUrl =
															t.avatar),
														n
													);
												}
												return null;
											}),
										(i.showToast = function (e) {
											return (
												qg.showToast({ message: e }), !0
											);
										}),
										(i.hasVibrate = function () {
											return !0;
										}),
										(i.vibrate = function () {
											qg.vibrateLong();
										}),
										o
									);
								})(t.BasePlatform);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.VivoUser = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									return (
										a(o, n),
										(o.prototype.login = function (n, o) {
											var i = this,
												a =
													e.ConstInner
														.URL_DOMAIN_LOGIN +
													e.ConstInner
														.URL_DOMAIN_LOGIN_INTERFACE,
												r = {
													source: 'vivo',
													source_id: o.openid,
													game: e.getAppConfig().appId
												};
											console.log(
												'vivo login data: ' +
													JSON.stringify(r)
											),
												e.LyHttp1.post(
													{ url: a, timeout: 5e3 },
													JSON.stringify(r),
													function (e) {
														console.log(
															'vivo login code: ' +
																e.code
														);
														var o = 1;
														if (0 == e.code)
															try {
																var r =
																	new t.NetUserInfo();
																Object.assign(
																	r,
																	e.data
																),
																	i.setUserInfo(
																		r.toUserInfo()
																	),
																	i.syncThirdUserInfo(),
																	(o = 0);
															} catch (a) {
																(o = 1),
																	console.log(
																		a
																	);
															}
														else o = -1;
														n(o);
													}
												);
										}),
										o
									);
								})(t.NetUser);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (e) {
								var t = (function (t) {
									function o() {
										return t.apply(this, arguments) || this;
									}
									a(o, t);
									var i = o.prototype;
									return (
										(i.load = function () {
											var t = this,
												o = qg.getSystemInfoSync();
											try {
												var i = o.screenWidth,
													a = o.screenHeight,
													r = i - 20;
												(this.bannerAd =
													qg.createBannerAd({
														adUnitId:
															this.getAdPlacementId(),
														style: {
															left: (i - r) / 2,
															top: a,
															width: r
														}
													})),
													this.bannerAd.onError(
														function (n) {
															var o =
																new e.AdError(
																	e.AdErrorCode.CODE_AD_LOAD_FAIL
																);
															o.setSdkCode(
																'' + n.errCode
															),
																o.setSdkMsg(
																	'' +
																		n.errMsg
																),
																t.onLoadFail(o);
														}
													),
													this.bannerAd.onLoad(
														function () {
															t.onLoadSuccess();
														}
													);
											} catch (n) {
												var s = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												s.setMsg(n.toString()),
													this.onLoadFail(s);
											}
										}),
										(i.open = function () {
											this.bannerAd &&
												(this.bannerAd.show(),
												this.onShowSuccess());
										}),
										(i.close = function () {
											this.bannerAd &&
												(this.bannerAd.hide(),
												this.bannerAd.offClose &&
													this.bannerAd.offClose(),
												(this.bannerAd = null),
												this.onClosed());
										}),
										o
									);
								})(e.BaseBannerAdItem);
								e.MeizuBannerAdItem = t;
								var n = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									a(o, n);
									var i = o.prototype;
									return (
										(i.load = function () {
											var n = this;
											try {
												(this.interstitialAd =
													qg.createInsertAd({
														adUnitId:
															this.getAdPlacementId()
													})),
													console.log(
														this.interstitialAd
													),
													this.interstitialAd.onError(
														function (t) {
															if (
																n.isLoadSuccess()
															) {
																var o =
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_SHOW_FAIL
																	);
																o.setSdkCode(
																	'' + t.code
																),
																	o.setSdkMsg(
																		'' +
																			t.msg
																	),
																	n.onShowFailed(
																		o
																	);
															} else {
																var i =
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_LOAD_FAIL
																	);
																i.setSdkCode(
																	'' + t.code
																),
																	i.setSdkMsg(
																		'' +
																			t.msg
																	),
																	n.onLoadFail(
																		i
																	);
															}
														}
													),
													this.interstitialAd.onLoad(
														function () {
															n.onLoadSuccess();
														}
													),
													this.interstitialAd.load();
											} catch (t) {
												var o = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												o.setMsg(t.toString()),
													this.onLoadFail(o);
											}
										}),
										(i.open = function () {
											var e = this;
											this.interstitialAd &&
												(this.interstitialAd.onClose(
													function () {
														e.interstitialAd.destroy(),
															e.onClosed();
													}
												),
												this.interstitialAd.show(),
												this.onShowSuccess());
										}),
										o
									);
								})(e.BaseInterstitialAdItem);
								e.MeizuInterstitialAdItem = n;
								var o = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									a(o, n);
									var i = o.prototype;
									return (
										(i.load = function () {
											var n = this;
											try {
												this.videoAd ||
													((this.videoAd =
														qg.createRewardedVideoAd(
															{
																adUnitId:
																	this.getAdPlacementId()
															}
														)),
													this.videoAd.onError(
														function (t) {
															if (
																n.isLoadSuccess()
															) {
																var o =
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_SHOW_FAIL
																	);
																o.setSdkCode(
																	'' +
																		t.errCode
																),
																	o.setSdkMsg(
																		'' +
																			t.errMsg
																	),
																	n.onShowFailed(
																		o
																	);
															} else {
																var i =
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_LOAD_FAIL
																	);
																i.setSdkCode(
																	'' +
																		t.errCode
																),
																	i.setSdkMsg(
																		'' +
																			t.errMsg
																	),
																	n.onLoadFail(
																		i
																	);
															}
														}
													),
													this.videoAd.onLoad(
														function () {
															n.onLoadSuccess();
														}
													)),
													this.videoAd.load();
											} catch (t) {
												var o = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												o.setMsg(t.toString()),
													this.onLoadFail(o);
											}
										}),
										(i.open = function () {
											var t = this;
											if (this.videoAd)
												this.videoAd.onClose(
													function () {
														t.onReward(),
															console.log(
																'\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u5b8c\u6210\uff0c\u53d1\u653e\u5956\u52b1'
															),
															(t.videoAd = null),
															t.onClosed();
													}
												),
													this.videoAd.show(),
													this.onShowSuccess();
											else {
												var n = new e.AdError(
													e.AdErrorCode.CODE_AD_SHOW_FAIL
												);
												n.setMsg(
													'\u5c55\u793a\u5931\u8d25\uff0c\u5e7f\u544a\u5df2\u88ab\u9500\u6bc1'
												),
													this.onShowFailed(n);
											}
										}),
										o
									);
								})(e.BaseVideoAdItem);
								(e.MeizuVideoAdItem = o),
									(e.MeizuAdAgent = (function (e) {
										function r() {
											return (
												e.apply(this, arguments) || this
											);
										}
										a(r, e);
										var s = r.prototype;
										return (
											(s.loadAdSource = function (e, t) {
												t(!0);
											}),
											(s.createBannerAd = function (e) {
												return qg.createBannerAd
													? new t(e)
													: null;
											}),
											(s.createVideoAd = function (e) {
												return qg.createRewardedVideoAd
													? new o(e)
													: null;
											}),
											(s.createInterstitialAd = function (
												e
											) {
												return qg.createInsertAd
													? new n(e)
													: null;
											}),
											i(r, [
												{
													key: 'name',
													get: function () {
														return 'mz_quickgame';
													}
												}
											]),
											r
										);
									})(e.BaseAdAgent));
							})(e.ads || (e.ads = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.MeizuPlatform = (function (n) {
									function o() {
										var e;
										return (
											((e =
												n.apply(this, arguments) ||
												this).user = null),
											(e.adAgent = null),
											e
										);
									}
									a(o, n),
										(o.checkIsPlatform = function () {
											return (
												'object' == typeof window.qg &&
												'Meizu' ==
													window.qg.getProvider()
											);
										});
									var i = o.prototype;
									return (
										(i.getPlatformType = function () {
											return e.PlatformDefine
												.MeizuMiniGame;
										}),
										(i.init = function () {
											return !0;
										}),
										(i.getPlatformAdAgent = function () {
											return (
												this.adAgent ||
													(this.adAgent =
														new e.ads.MeizuAdAgent()),
												this.adAgent
											);
										}),
										(i.login = function (e) {
											(this.user = new t.HtmlUser()),
												this.user.login(function (t) {
													e(0 == t);
												});
										}),
										(i.logout = function () {
											this.user = null;
										}),
										(i.checkThirdAuthUserInfo =
											function () {}),
										(i.getUser = function () {
											return this.user;
										}),
										(i.getThirdUserInfoOriginal =
											function () {}),
										(i.parseThirdUserInfoOriginal =
											function () {
												return null;
											}),
										(i.showToast = function (e) {
											return (
												mz.showToast({
													message: e,
													duration: 2e3
												}),
												!0
											);
										}),
										(i.hasVibrate = function () {
											return !0;
										}),
										(i.vibrate = function (e) {
											e < 400
												? mz.vibrateShort()
												: mz.vibrateLong();
										}),
										o
									);
								})(t.BasePlatform);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (e) {
								var t = (function (t) {
									function n() {
										var e;
										return (
											((e =
												t.apply(this, arguments) ||
												this).isFirstLoad = !0),
											e
										);
									}
									a(n, t);
									var o = n.prototype;
									return (
										(o.load = function () {
											var t = this,
												n = 3e4;
											this.isFirstLoad &&
												((this.isFirstLoad = !1),
												(n = 6e3)),
												setTimeout(function () {
													try {
														var n =
																swan.getSystemInfoSync(),
															o = n.screenWidth,
															i = n.screenHeight,
															a =
																swan.createBannerAd(
																	{
																		appSid: t.getAppId(),
																		adUnitId:
																			t.getAdPlacementId(),
																		style: {
																			left: 0,
																			top:
																				i -
																				100,
																			width: o
																		}
																	}
																);
														(a.style.width = o),
															(a.style.left =
																(o -
																	a.style
																		.width) /
																2),
															(a.style.top =
																i - 100),
															a.onLoad(
																function () {
																	console.log(
																		'\u767e\u5ea6 - banner - onLoad'
																	),
																		t.onLoadSuccess();
																}
															),
															a.onError(function (
																n
															) {
																console.log(
																	'\u767e\u5ea6 - banner - onError - ',
																	n.errCode,
																	n.errMsg
																);
																var o =
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_LOAD_FAIL
																	);
																o.setSdkCode(
																	n.errCode
																),
																	o.setSdkMsg(
																		n.errMsg
																	),
																	t.onLoadFail(
																		o
																	);
															}),
															(t.bannerAd = a);
													} catch (s) {
														console.log(
															'\u767e\u5ea6 - banner - Error - ',
															s
														);
														var r = new e.AdError(
															e.AdErrorCode.CODE_AD_LOAD_FAIL
														);
														r.setMsg(s.toString()),
															t.onLoadFail(r);
													}
												}, n);
										}),
										(o.open = function () {
											var e = this;
											this.bannerAd &&
												this.bannerAd
													.show()
													.then(function () {
														e.onShowSuccess();
													})
													.catch(function (e) {
														console.log(
															'\u767e\u5ea6 - banner - \u5e7f\u544a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898',
															e
														);
													});
										}),
										(o.close = function () {
											this.bannerAd &&
												(this.onClosed(),
												this.bannerAd.destroy(),
												(this.bannerAd = null));
										}),
										n
									);
								})(e.BaseBannerAdItem);
								e.BaiduBannerAdItem = t;
								var n = (function () {
									function e(e, t) {
										var n = this;
										(this.status = 0),
											(this.onLoadListenerList =
												new Array()),
											(this.rewardedVideoAd =
												swan.createRewardedVideoAd({
													appSid: e,
													adUnitId: t
												})),
											this.rewardedVideoAd.onLoad(
												function () {
													(n.status = 1),
														n.onStatusChange(),
														console.log(
															'\u767e\u5ea6 - \u89c6\u9891\u5e7f\u544a - \u52a0\u8f7d\u6210\u529f'
														);
												}
											),
											this.rewardedVideoAd.onError(
												function (e) {
													(n.status = 2),
														n.onStatusChange(),
														console.log(
															'\u767e\u5ea6 - \u89c6\u9891\u5e7f\u544a - \u52a0\u8f7d\u5931\u8d25 - err:',
															e
														);
												}
											),
											this.rewardedVideoAd.onClose(
												function (e) {
													if (
														((n.status = 4),
														n.onStatusChange(),
														((e && e.isEnded) ||
															void 0 === e) &&
															n.onAdCloseCallback)
													)
														return (
															console.log(
																'\u767e\u5ea6 - \u89c6\u9891\u5e7f\u544a - \u770b\u5b8c\u5173\u95ed'
															),
															void n.onAdCloseCallback(
																!0
															)
														);
													n.onAdCloseCallback &&
														(console.log(
															'\u767e\u5ea6 - \u89c6\u9891\u5e7f\u544a - \u672a\u770b\u5b8c\u5173\u95ed'
														),
														n.onAdCloseCallback(
															!1
														));
												}
											),
											this.rewardedVideoAd
												.load()
												.then()
												.catch(function (e) {
													console.log(
														'\u767e\u5ea6 - \u89c6\u9891\u5e7f\u544a - load err:',
														e
													);
												});
									}
									e.getVideoAd = function (t, n) {
										var o = this.videoAdList.get(n);
										return (
											o ||
												((o = new e(t, n)),
												this.videoAdList.set(n, o)),
											o
										);
									};
									var t = e.prototype;
									return (
										(t.isReady = function () {
											return 1 == this.status;
										}),
										(t.onStatusChange = function () {
											for (
												var e,
													t = this.isReady(),
													n = s(
														this.onLoadListenerList
													);
												!(e = n()).done;

											) {
												var o = e.value;
												t
													? o.onLoadSuccess()
													: o.onLoading();
											}
										}),
										(t.onLoadListener = function (e) {
											this.isReady() && e.onLoadSuccess(),
												this.onLoadListenerList.push(e);
										}),
										(t.offLoadListener = function (e) {
											var t =
												this.onLoadListenerList.findIndex(
													function (t) {
														return t == e;
													}
												);
											this.onLoadListenerList.splice(
												t,
												1
											);
										}),
										(t.open = function (e, t) {
											var n = this;
											this.isReady()
												? ((this.status = 3),
												  e(!0),
												  (this.onAdCloseCallback = t),
												  this.rewardedVideoAd
														.show()
														.then()
														.catch(function (t) {
															console.log(
																'\u767e\u5ea6 - \u64ad\u653e\u89c6\u9891\u5931\u8d25 - err:',
																t
															),
																e(!1),
																n.rewardedVideoAd.load();
														}))
												: e(!1);
										}),
										e
									);
								})();
								n.videoAdList = new Map();
								var o = (function (o) {
									function i() {
										return o.apply(this, arguments) || this;
									}
									a(i, o);
									var r = i.prototype;
									return (
										(r.load = function () {
											try {
												n.getVideoAd(
													this.getAppId(),
													this.getAdPlacementId()
												).onLoadListener(this);
											} catch (t) {
												var o = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												o.setMsg(t.toString()),
													this.onLoadFail(o);
											}
										}),
										(r.open = function () {
											var t = this,
												o = n.getVideoAd(
													this.getAppId(),
													this.getAdPlacementId()
												);
											o.offLoadListener(this),
												o.open(
													function (n) {
														n
															? t.onShowSuccess()
															: t.onShowFailed(
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_SHOW_FAIL
																	)
															  );
													},
													function (e) {
														e && t.onReward(),
															t.onClosed();
													}
												);
										}),
										i
									);
								})(e.BaseVideoAdItem);
								(e.BaiduVideoAdItem = o),
									(e.BaiduAdAgent = (function (e) {
										function n() {
											return (
												e.apply(this, arguments) || this
											);
										}
										a(n, e);
										var r = n.prototype;
										return (
											(r.isSupported = function () {
												return !0;
											}),
											(r.createBannerAd = function (e) {
												return this.isSupported()
													? new t(e)
													: null;
											}),
											(r.createVideoAd = function (e) {
												return this.isSupported()
													? new o(e)
													: null;
											}),
											i(n, [
												{
													key: 'name',
													get: function () {
														return 'swan';
													}
												}
											]),
											n
										);
									})(e.BaseAdAgent));
							})(e.ads || (e.ads = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.BaiduPlatform = (function (n) {
									function o() {
										var e;
										return (
											((e =
												n.apply(this, arguments) ||
												this).user = null),
											(e.shareTicket = null),
											(e.adAgent = null),
											e
										);
									}
									a(o, n),
										(o.checkIsPlatform = function () {
											return (
												'object' == typeof window.swan
											);
										});
									var i = o.prototype;
									return (
										(i.getPlatformType = function () {
											return e.PlatformDefine.BaiduGame;
										}),
										(i.init = function () {
											var e = this;
											if (swan.getLaunchOptionsSync) {
												var n =
													swan.getLaunchOptionsSync();
												console.log(
													'launchOptionsSync:',
													n.query
												);
											}
											if (
												(swan.showShareMenu({}),
												swan.onShareAppMessage(
													function () {
														var n =
															t.PlatformManager.getInstance().getShareParam();
														if (n) {
															e.shareId =
																new Date().getTime();
															var o =
																'ly_share_id=&' +
																e.shareId;
															return {
																title: n.title,
																imageUrl:
																	n.imageUrl,
																query: o,
																success:
																	function (
																		e
																	) {
																		console.log(
																			'\u767e\u5ea6 - onShareAppMessage share success',
																			JSON.stringify(
																				e
																			)
																		);
																	},
																fail: function (
																	e
																) {
																	console.log(
																		'\u767e\u5ea6 - onShareAppMessage share fail',
																		JSON.stringify(
																			e
																		)
																	);
																}
															};
														}
													}
												),
												swan.onShow(function (t) {
													t &&
														t.shareTicket &&
														e.setShareTicket(
															t.shareTicket
														);
												}),
												swan.getUpdateManager)
											) {
												var o = swan.getUpdateManager();
												o.onCheckForUpdate(function (
													e
												) {
													return console.log(e);
												}),
													o.onUpdateReady(
														function () {
															swan.showModal({
																title: '\u6709\u65b0\u7248\u672c',
																content:
																	'\u66f4\u65b0 ready\uff0c \u662f\u5426\u91cd\u542f\u6e38\u620f',
																success:
																	function (
																		e
																	) {
																		e.confirm &&
																			o.applyUpdate();
																	}
															});
														}
													),
													o.onUpdateFailed(
														function () {
															return console.log(
																'\u767e\u5ea6 - onUpdateFailed - \u66f4\u65b0\u5931\u8d25'
															);
														}
													);
											}
											return !0;
										}),
										(i.getPlatformAdAgent = function () {
											return (
												this.adAgent ||
													(this.adAgent =
														new e.ads.BaiduAdAgent()),
												this.adAgent
											);
										}),
										(i.setShareTicket = function (e) {
											console.log(
												'this shareTicket = ' +
													this.shareTicket +
													', new shareTicket = ' +
													e
											),
												e &&
													'string' == typeof e &&
													e.length > 0 &&
													(this.shareTicket = e);
										}),
										(i.isShare = function () {
											return !0;
										}),
										(i.share = function (e, t, n, o) {
											this.shareId = new Date().getTime();
											var i =
												'ly_share_id=' + this.shareId;
											return (
												o &&
													o.forEach(function (e, t) {
														i += '&' + t + '=' + e;
													}),
												swan.shareAppMessage({
													title: e,
													imageUrl: t,
													query: i,
													success: function () {
														console.log(
															'\u767e\u5ea6 - \u5206\u4eab\u6210\u529f'
														),
															n(!0);
													},
													fail: function () {
														console.log(
															'\u767e\u5ea6 - \u5206\u4eab\u5931\u8d25'
														),
															n(!1);
													}
												}),
												!0
											);
										}),
										(i.showToast = function (e) {
											return (
												swan.showToast({
													title: e,
													icon: 'none',
													duration: 1e3,
													success: function () {
														console.log(
															'\u767e\u5ea6 - \u63d0\u793a\u6846\u663e\u793a\u6210\u529f'
														);
													}
												}),
												!0
											);
										}),
										(i.login = function (e) {
											var n = this;
											swan.getSwanId({
												success: function (o) {
													n.selfSwanId =
														o.data.swanid;
													var i = n.selfSwanId.substr(
														0,
														32
													);
													console.log(
														'\u767e\u5ea6 swanId = ',
														n.selfSwanId,
														'\n swanId32 = ',
														i
													),
														(n.user =
															new t.HtmlUser()),
														n.user.login(
															function (t) {
																0 == t
																	? (console.log(
																			'\u767e\u5ea6 - \u670d\u52a1\u5668 \u767b\u5f55\u6210\u529f'
																	  ),
																	  e(!0))
																	: (console.log(
																			'\u767e\u5ea6 - \u670d\u52a1\u5668 \u767b\u5f55\u5931\u8d25'
																	  ),
																	  e(!1));
															},
															{ code: i }
														);
												}
											});
										}),
										(i.logout = function () {
											this.user = null;
										}),
										(i.checkThirdAuthUserInfo = function (
											e
										) {
											e(!1);
										}),
										(i.getUser = function () {
											return this.user;
										}),
										(i.getThirdUserInfoOriginal =
											function () {}),
										(i.parseThirdUserInfoOriginal =
											function () {
												return null;
											}),
										o
									);
								})(t.BasePlatform);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.BaiduUser = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									return (
										a(o, n),
										(o.prototype.login = function (n, o) {
											var i = this,
												a =
													e.ConstInner
														.URL_DOMAIN_LOGIN +
													e.ConstInner
														.URL_DOMAIN_LOGIN_INTERFACE,
												r = {
													source: 'bdu',
													source_id: o.code,
													game: e.getAppConfig().appId
												};
											console.log(
												'baidu login data: ' +
													JSON.stringify(r)
											),
												e.LyHttp1.post(
													{ url: a, timeout: 5e3 },
													JSON.stringify(r),
													function (e) {
														console.log(
															'baidu login code: ' +
																e.code
														);
														var o = 1;
														if (0 == e.code)
															try {
																var r =
																	new t.NetUserInfo();
																Object.assign(
																	r,
																	e.data
																),
																	i.setUserInfo(
																		r.toUserInfo()
																	),
																	i.syncThirdUserInfo(),
																	(o = 0);
															} catch (a) {
																(o = 1),
																	console.log(
																		'baidu login error:',
																		a
																	);
															}
														else o = -1;
														n(o);
													}
												);
										}),
										o
									);
								})(t.NetUser);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (e) {
								var t = (function (e) {
									function t() {
										return e.apply(this, arguments) || this;
									}
									a(t, e);
									var n = t.prototype;
									return (
										(n.load = function () {
											qttGame && this.onLoadSuccess();
										}),
										(n.open = function () {
											qttGame.showBanner(),
												this.onShowSuccess();
										}),
										(n.close = function () {
											qttGame.hideBanner(),
												this.onClosed();
										}),
										t
									);
								})(e.BaseBannerAdItem);
								e.QttBannerAdItem = t;
								var n = function () {};
								e.optionsAd = n;
								var o = (function (t) {
									function o() {
										return t.apply(this, arguments) || this;
									}
									a(o, t);
									var i = o.prototype;
									return (
										(i.load = function () {
											var t = this;
											if (qttGame) {
												var o = new n(),
													i = Math.floor(
														3 * Math.random() + 1
													);
												(o.gametype = i),
													(o.rewardtype = 1),
													(o.data = {}),
													(o.data.title =
														'\u5237\u65b0\u9053\u5177'),
													(o.data.url =
														'//newidea4-gamecenter-frontend.1sapp.com/game/prod/fkxxl_img/1.png'),
													(this.optionsAd = o),
													(o.callback = function (n) {
														1 == n
															? (t.onReward(),
															  t.onClosed())
															: 0 == n
															? t.onShowFailed(
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_SHOW_FAIL
																	)
															  )
															: t.onClosed();
													}),
													this.onLoadSuccess();
											}
										}),
										(i.open = function () {
											qttGame.showHDAD(this.optionsAd);
										}),
										o
									);
								})(e.BaseInteractionAdItem);
								e.QttInterationAdItem = o;
								var r = (function (t) {
									function o() {
										return t.apply(this, arguments) || this;
									}
									a(o, t);
									var i = o.prototype;
									return (
										(i.load = function () {
											qttGame && this.onLoadSuccess();
										}),
										(i.open = function () {
											var t = this,
												o = new n(),
												i = Math.floor(
													3 * Math.random() + 1
												);
											(o.gametype = i),
												(o.rewardtype = 1),
												(o.data = {}),
												(o.data.title =
													'\u5237\u65b0\u9053\u5177'),
												(o.data.url =
													'//newidea4-gamecenter-frontend.1sapp.com/game/prod/fkxxl_img/1.png'),
												this.onShowSuccess(),
												qttGame.showVideo(function (n) {
													0 == n
														? t.onShowFailed(
																new e.AdError(
																	e.AdErrorCode.CODE_AD_SHOW_FAIL
																)
														  )
														: (1 == n &&
																t.onReward(),
														  t.onClosed());
												}, o);
										}),
										o
									);
								})(e.BaseVideoAdItem);
								(e.QttVideoAdItem = r),
									(e.QttAdAgent = (function (e) {
										function n() {
											return (
												e.apply(this, arguments) || this
											);
										}
										a(n, e);
										var s = n.prototype;
										return (
											(s.isSupported = function () {
												return !0;
											}),
											(s.createBannerAd = function (e) {
												return new t(e);
											}),
											(s.createVideoAd = function (e) {
												return this.isSupported()
													? new r(e)
													: null;
											}),
											(s.createInteractionAd = function (
												e
											) {
												return this.isSupported()
													? new o(e)
													: null;
											}),
											i(n, [
												{
													key: 'name',
													get: function () {
														return 'qtt';
													}
												}
											]),
											n
										);
									})(e.BaseAdAgent));
							})(e.ads || (e.ads = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.QttPlatform = (function (n) {
									function o() {
										var e;
										return (
											((e =
												n.apply(this, arguments) ||
												this).user = null),
											(e.adAgent = null),
											e
										);
									}
									a(o, n),
										(o.checkIsPlatform = function () {
											return (
												'object' ==
												typeof window.qttGame
											);
										});
									var i = o.prototype;
									return (
										(i.getPlatformType = function () {
											return e.PlatformDefine.QTTGame;
										}),
										(i.init = function () {
											return !0;
										}),
										(i.getPlatformAdAgent = function () {
											return (
												this.adAgent ||
													(this.adAgent =
														new e.ads.QttAdAgent()),
												this.adAgent
											);
										}),
										(i.isShare = function () {
											return !1;
										}),
										(i.login = function (e) {
											(this.user = new t.HtmlUser()),
												this.user.login(function (t) {
													e(0 == t);
												});
										}),
										(i.logout = function () {
											this.user = null;
										}),
										(i.checkThirdAuthUserInfo =
											function () {}),
										(i.getUser = function () {
											return this.user;
										}),
										(i.getThirdUserInfoOriginal =
											function () {}),
										(i.parseThirdUserInfoOriginal =
											function () {
												return null;
											}),
										o
									);
								})(t.BasePlatform);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (e) {
								var t = (function (t) {
									function o() {
										return t.apply(this, arguments) || this;
									}
									a(o, t);
									var i = o.prototype;
									return (
										(i.load = function () {
											var t = this,
												o = wuji.getSystemInfoSync();
											try {
												var i = o.windowWidth,
													a = o.windowHeight,
													r = i - 20;
												(this.bannerAd =
													qg.createBannerAd({
														posId: this.getAdPlacementId(),
														style: {
															left: (i - r) / 2,
															top: a,
															width: r
														}
													})),
													this.bannerAd.onError(
														function (n) {
															var o =
																new e.AdError(
																	e.AdErrorCode.CODE_AD_LOAD_FAIL
																);
															o.setSdkCode(
																'' + n.errCode
															),
																o.setSdkMsg(
																	'' +
																		n.errMsg
																),
																t.onLoadFail(o);
														}
													),
													this.bannerAd.onLoad(
														function () {
															t.onLoadSuccess();
														}
													);
											} catch (n) {
												var s = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												s.setMsg(n.toString()),
													this.onLoadFail(s);
											}
										}),
										(i.open = function () {
											var t = this;
											this.bannerAd &&
												this.bannerAd
													.show()
													.then(function () {
														console.log(
															'banner\u5e7f\u544a\u5c55\u793a\u6210\u529f'
														),
															t.onShowSuccess(),
															t.bannerAd
																.onClose &&
																t.bannerAd.onClose(
																	function () {
																		t.close();
																	}
																);
													})
													.catch(function (n) {
														console.log(
															'banner\u5e7f\u544a\u5c55\u793a\u5931\u8d25',
															n
														);
														var o = new e.AdError(
															e.AdErrorCode.CODE_AD_LOAD_FAIL
														);
														o.setSdkCode(
															'' + n.errCode
														),
															o.setSdkMsg(
																'' + n.errMsg
															),
															t.onShowFailed(o);
													});
										}),
										(i.close = function () {
											this.bannerAd &&
												(this.bannerAd.hide(),
												this.bannerAd.destroy(),
												this.bannerAd.offClose &&
													this.bannerAd.offClose(),
												(this.bannerAd = null),
												this.onClosed());
										}),
										o
									);
								})(e.BaseBannerAdItem);
								e.LianShangBannerAdItem = t;
								var n = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									a(o, n);
									var i = o.prototype;
									return (
										(i.load = function () {
											var n = this;
											try {
												this.videoAd ||
													((this.videoAd =
														wuji.createRewardedVideoAd(
															{
																adUnitId:
																	this.getAdPlacementId()
															}
														)),
													this.videoAd.onError(
														function (t) {
															if (
																n.isLoadSuccess()
															) {
																var o =
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_SHOW_FAIL
																	);
																o.setSdkCode(
																	'' +
																		t.errCode
																),
																	o.setSdkMsg(
																		'' +
																			t.errMsg
																	),
																	n.onShowFailed(
																		o
																	);
															} else {
																var i =
																	new e.AdError(
																		e.AdErrorCode.CODE_AD_LOAD_FAIL
																	);
																i.setSdkCode(
																	'' +
																		t.errCode
																),
																	i.setSdkMsg(
																		'' +
																			t.errMsg
																	),
																	n.onLoadFail(
																		i
																	);
															}
														}
													),
													this.videoAd.onLoad(
														function () {
															n.onLoadSuccess();
														}
													)),
													this.videoAd.load();
											} catch (t) {
												var o = new e.AdError(
													e.AdErrorCode.CODE_AD_LOAD_FAIL
												);
												o.setMsg(t.toString()),
													this.onLoadFail(o);
											}
										}),
										(i.open = function () {
											var t = this;
											if (this.videoAd)
												this.videoAd.onClose(function (
													e
												) {
													e.isEnded
														? (t.onReward(),
														  console.log(
																'\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u5b8c\u6210\uff0c\u53d1\u653e\u5956\u52b1'
														  ))
														: console.log(
																'\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u53d6\u6d88\u5173\u95ed\uff0c\u4e0d\u53d1\u653e\u5956\u52b1'
														  ),
														(t.videoAd = null),
														t.onClosed();
												}),
													this.videoAd
														.show()
														.then(function () {
															console.log(
																'\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u6210\u529f'
															),
																t.onShowSuccess();
														})
														.catch(function (n) {
															console.log(n);
															var o =
																new e.AdError(
																	e.AdErrorCode.CODE_AD_SHOW_FAIL
																);
															o.setMsg(
																n.toString()
															),
																t.onShowFailed(
																	o
																);
														});
											else {
												var n = new e.AdError(
													e.AdErrorCode.CODE_AD_SHOW_FAIL
												);
												n.setMsg(
													'\u5c55\u793a\u5931\u8d25\uff0c\u5e7f\u544a\u5df2\u88ab\u9500\u6bc1'
												),
													this.onShowFailed(n);
											}
										}),
										o
									);
								})(e.BaseVideoAdItem);
								(e.LianShangVideoAdItem = n),
									(e.LianShangAdAgent = (function (e) {
										function o() {
											return (
												e.apply(this, arguments) || this
											);
										}
										a(o, e);
										var r = o.prototype;
										return (
											(r.loadAdSource = function (e, t) {
												t(!0);
											}),
											(r.createBannerAd = function (e) {
												return wuji.createBannerAd
													? new t(e)
													: null;
											}),
											(r.createVideoAd = function (e) {
												return wuji.createRewardedVideoAd
													? new n(e)
													: null;
											}),
											i(o, [
												{
													key: 'name',
													get: function () {
														return 'lianshang_miniapp';
													}
												}
											]),
											o
										);
									})(e.BaseAdAgent));
							})(e.ads || (e.ads = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.LianShangPlatform = (function (n) {
									function o() {
										var e;
										return (
											((e =
												n.apply(this, arguments) ||
												this).user = null),
											(e.adAgent = null),
											e
										);
									}
									a(o, n),
										(o.checkIsPlatform = function () {
											return (
												'object' == typeof window.wuji
											);
										});
									var i = o.prototype;
									return (
										(i.getPlatformType = function () {
											return e.PlatformDefine
												.LianShangMiniGame;
										}),
										(i.init = function () {
											return !0;
										}),
										(i.getPlatformAdAgent = function () {
											return (
												this.adAgent ||
													(this.adAgent =
														new e.ads.LianShangAdAgent()),
												this.adAgent
											);
										}),
										(i.login = function (e) {
											(this.user = new t.HtmlUser()),
												this.user.login(function (t) {
													e(0 == t);
												});
										}),
										(i.logout = function () {
											this.user = null;
										}),
										(i.checkThirdAuthUserInfo =
											function () {}),
										(i.getUser = function () {
											return this.user;
										}),
										(i.getThirdUserInfoOriginal =
											function () {}),
										(i.parseThirdUserInfoOriginal =
											function () {
												return null;
											}),
										(i.showToast = function (e) {
											return (
												wuji.showToast({
													title: e,
													duration: 2e3
												}),
												!0
											);
										}),
										(i.hasVibrate = function () {
											return !0;
										}),
										(i.vibrate = function (e) {
											e < 400
												? wuji.vibrateShort()
												: wuji.vibrateLong();
										}),
										o
									);
								})(t.BasePlatform);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (e) {
								var t = (function (t) {
									function n() {
										return t.apply(this, arguments) || this;
									}
									a(n, t);
									var o = n.prototype;
									return (
										(o.load = function () {
											jhy && this.onLoadSuccess();
										}),
										(o.open = function () {
											var t = this;
											jhy.startRewardVideo({
												playSuccess: function (e) {
													console.log(
														'\u64ad\u653e\u6210\u529f',
														e
													),
														t.onShowSuccess();
												},
												palyComplete: function (e) {
													console.log(
														'\u64ad\u653e\u5b8c\u6210',
														e
													),
														t.onReward();
												},
												close: function (e) {
													console.log(
														'\u5173\u95ed\u89c6\u9891',
														e
													),
														t.onClosed();
												},
												playFail: function (n) {
													console.log(
														'\u64ad\u653e\u5931\u8d25',
														n
													);
													var o = new e.AdError(
														e.AdErrorCode.CODE_AD_SHOW_FAIL
													);
													t.onShowFailed(o);
												}
											});
										}),
										n
									);
								})(e.BaseVideoAdItem);
								(e.HelloVideoAdItem = t),
									(e.HelloAdAgent = (function (e) {
										function n() {
											return (
												e.apply(this, arguments) || this
											);
										}
										a(n, e);
										var o = n.prototype;
										return (
											(o.isSupported = function () {
												return !0;
											}),
											(o.createVideoAd = function (e) {
												return this.isSupported()
													? new t(e)
													: null;
											}),
											i(n, [
												{
													key: 'name',
													get: function () {
														return 'hello';
													}
												}
											]),
											n
										);
									})(e.BaseAdAgent));
							})(e.ads || (e.ads = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.HelloPlatform = (function (n) {
									function o() {
										var e;
										return (
											((e =
												n.apply(this, arguments) ||
												this).user = null),
											(e.adAgent = null),
											e
										);
									}
									a(o, n),
										(o.checkIsPlatform = function () {
											return (
												'object' == typeof window.jhy
											);
										});
									var i = o.prototype;
									return (
										(i.getPlatformType = function () {
											return e.PlatformDefine
												.HelloMiniGame;
										}),
										(i.init = function () {
											return !0;
										}),
										(i.getPlatformAdAgent = function () {
											return (
												this.adAgent ||
													(this.adAgent =
														new e.ads.HelloAdAgent()),
												this.adAgent
											);
										}),
										(i.isShare = function () {
											return !1;
										}),
										(i.login = function (e) {
											var n = this;
											jhy.login({
												success: function (o) {
													console.log(
														'\u767b\u5f55\u6210\u529f',
														o
													),
														(n.user =
															new t.HelloUser()),
														n.user.login(function (
															t
														) {
															e(0 == t);
														},
														o);
												},
												fail: function (t) {
													console.log(
														'\u767b\u5f55\u5931\u8d25',
														t
													),
														e(!1);
												}
											});
										}),
										(i.logout = function () {
											this.user = null;
										}),
										(i.checkThirdAuthUserInfo =
											function () {}),
										(i.getUser = function () {
											return this.user;
										}),
										(i.getThirdUserInfoOriginal =
											function () {}),
										(i.parseThirdUserInfoOriginal =
											function () {
												return null;
											}),
										o
									);
								})(t.BasePlatform);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.HelloUser = (function (n) {
									function o() {
										return n.apply(this, arguments) || this;
									}
									return (
										a(o, n),
										(o.prototype.login = function (n, o) {
											var i = this,
												a =
													e.ConstInner
														.URL_DOMAIN_LOGIN +
													e.ConstInner
														.URL_DOMAIN_LOGIN_INTERFACE,
												r = {
													source: 'hellobike',
													source_id: o.code,
													game: e.getAppConfig().appId
												};
											e.LyHttp1.post(
												{ url: a, timeout: 5e3 },
												JSON.stringify(r),
												function (e) {
													var o = 1;
													if (0 == e.code)
														try {
															var r =
																new t.NetUserInfo();
															Object.assign(
																r,
																e.data
															),
																i.setUserInfo(
																	r.toUserInfo()
																),
																i.syncThirdUserInfo(),
																(o = 0);
														} catch (a) {
															(o = 1),
																console.log(a);
														}
													else o = -1;
													n(o);
												}
											);
										}),
										o
									);
								})(t.NetUser);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.HtmlPlatfrom = (function (n) {
									function o() {
										var e;
										return (
											((e =
												n.apply(this, arguments) ||
												this).user = null),
											e
										);
									}
									a(o, n),
										(o.checkIsPlatform = function () {
											if ('object' == typeof window.cc) {
												var e = window.cc;
												if (
													100 == e.sys.platform ||
													101 == e.sys.platform
												)
													return !0;
											}
											return !1;
										});
									var i = o.prototype;
									return (
										(i.getPlatformType = function () {
											return e.PlatformDefine.Web;
										}),
										(i.init = function () {
											return !0;
										}),
										(i.isShare = function () {
											return !1;
										}),
										(i.login = function (e) {
											(this.user = new t.HtmlUser()),
												this.user.login(function (t) {
													e(0 == t);
												});
										}),
										(i.logout = function () {
											this.user = null;
										}),
										(i.checkThirdAuthUserInfo =
											function () {}),
										(i.getUser = function () {
											return this.user;
										}),
										(i.getThirdUserInfoOriginal =
											function () {}),
										(i.parseThirdUserInfoOriginal =
											function () {
												return null;
											}),
										o
									);
								})(t.BasePlatform);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(function (e) {
							(function (t) {
								t.HtmlUser = (function (n) {
									function o() {
										var e;
										return (
											((e =
												n.apply(this, arguments) ||
												this).userSourceId = null),
											e
										);
									}
									a(o, n);
									var i = o.prototype;
									return (
										(i.randomString = function (e) {
											e = e || 32;
											for (
												var t =
														'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
															''
														),
													n =
														new Date().getTime() +
														'_',
													o = 0;
												o < e;
												o++
											)
												n +=
													t[
														Math.round(
															Math.random() *
																t.length
														)
													];
											return n.substr(0, e);
										}),
										(i.login = function (n, o) {
											var i = this;
											void 0 === o && (o = null);
											var a = e.getAppConfig().appId;
											if (a) {
												var r = !0,
													s = localStorage.getItem(
														'userSourceId_' + a
													);
												s ||
													((r = !1),
													(s =
														o && o.code
															? o.code
															: a +
															  '_' +
															  this.randomString(
																	64
															  )),
													localStorage.setItem(
														'userSourceId_' + a,
														this.userSourceId
													));
												var c =
														e.ConstInner
															.URL_DOMAIN_LOGIN +
														e.ConstInner
															.URL_DOMAIN_LOGIN_INTERFACE,
													l = {
														source: 'web',
														source_id: s,
														game: a
													};
												console.log(
													'HtmlUser - data:',
													l
												),
													e.LyHttp1.post(
														{
															url: c,
															timeout: 1e4
														},
														JSON.stringify(l),
														function (e) {
															var o = 1;
															if (
																(console.log(
																	'HtmlUser - lyHttpResponse:',
																	e
																),
																0 == e.code)
															)
																try {
																	var s =
																		new t.NetUserInfo();
																	Object.assign(
																		s,
																		e.data
																	),
																		i.setUserInfo(
																			s.toUserInfo()
																		),
																		r ||
																			(i.userSourceId =
																				e.data.sourceId),
																		i.syncThirdUserInfo(),
																		(o = 0);
																} catch (a) {
																	(o = 1),
																		console.log(
																			a
																		);
																}
															else o = -1;
															n(o);
														}
													);
											} else n(1);
										}),
										o
									);
								})(t.NetUser);
							})(e.core || (e.core = {}));
						})(f || (f = {})),
						(('undefined' == typeof window ? e : window).lyLib2 =
							f),
						cc._RF.pop();
				}).call(
					this,
					'undefined' != typeof global
						? global
						: 'undefined' != typeof self
						? self
						: 'undefined' != typeof window
						? window
						: {}
				);
			},
			{}
		],
		oppoBigPicAd: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '35120zItqhAoIEtDUlnW7F2', 'oppoBigPicAd'),
					cc._RF.pop();
			},
			{}
		],
		oppoIconAd: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, 'a4092EYFZZDjZYgGdzylvgQ', 'oppoIconAd'),
					cc._RF.pop();
			},
			{}
		],
		oppoMoreGame: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, 'eed9a8grf9EIo2u+9qkAnMf', 'oppoMoreGame'),
					cc._RF.pop();
			},
			{}
		],
		oppoReBannerAd: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '47f05EqZS5MYYuX/c3DLcqx', 'oppoReBannerAd'),
					cc._RF.pop();
			},
			{}
		],
		oppoReNineAd: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '44e9eN4ru9LP7J5Aav4CdaI', 'oppoReNineAd'),
					cc._RF.pop();
			},
			{}
		],
		oppoShortcutInstalled: [
			function (e, t) {
				'use strict';
				cc._RF.push(
					t,
					'dd877xWP4VH9KytHHg3sHuP',
					'oppoShortcutInstalled'
				),
					cc._RF.pop();
			},
			{}
		],
		protocalHallLayer: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, '10e00ByGfpIsbRZUitc4qjm', 'protocalHallLayer');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyControl'),
					s = cc._decorator,
					c = s.ccclass;
				s.property;
				var l = (function (e) {
					function t() {
						return (null !== e && e.apply(this, arguments)) || this;
					}
					return (
						i(t, e),
						(t.prototype.onLoad = function () {
							cc.game.addPersistRootNode(this.node),
								cc.view.setDesignResolutionSize(
									1080,
									1920,
									cc.ResolutionPolicy.FIXED_WIDTH
								);
						}),
						(t.prototype.onClickSure = function () {
							this.node.removeFromParent(),
								r.LyControl.setIsShowProtocal();
						}),
						(t.prototype.onClickExit = function () {
							r.LyControl.showToast(
								'\u9700\u8981\u70b9\u51fb\u540c\u610f\u624d\u80fd\u5f00\u59cb\u6e38\u620f\u54e6'
							);
						}),
						(t.prototype.onClickUser = function () {
							r.LyControl.showUserProLayer();
						}),
						(t.prototype.onClickPrivate = function () {
							r.LyControl.showPrivateProLayer();
						}),
						a([c], t)
					);
				})(cc.Component);
				(n.default = l), cc._RF.pop();
			},
			{ './LyControl': 'LyControl' }
		],
		protocalLayer: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, '8d023312URHgpF70VGAMvLJ', 'protocalLayer');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyConfig'),
					s = e('./LyControl'),
					c = cc._decorator,
					l = c.ccclass,
					d = c.property,
					u = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.contentNode = null), (t.isPrivate = !0), t
							);
						}
						return (
							i(t, e),
							(t.prototype.start = function () {
								this.updateContent();
							}),
							(t.prototype.onEnable = function () {
								s.LyControl.closeAd(r.LyConfig.AD_NAME.BANNER);
							}),
							(t.prototype.onDisable = function () {
								s.LyControl.openAd(r.LyConfig.AD_NAME.BANNER);
							}),
							(t.prototype.updateContent = function () {
								var e = this;
								if (this.isPrivate)
									for (
										var t = function (t) {
												setTimeout(function () {
													cc.loader.load(
														'',
														function (n, o) {
															cc.log(
																'Should load a texture from external url: ' +
																	(o instanceof
																		cc.Texture2D)
															);
															var i =
																new cc.SpriteFrame(
																	o
																);
															e.contentNode.children[
																t
															].getComponent(
																cc.Sprite
															).spriteFrame = i;
														}
													);
												}, 100 * t);
											},
											n = 0;
										n < this.contentNode.childrenCount;
										n++
									)
										t(n);
								else {
									var o = function (t) {
										setTimeout(function () {
											cc.loader.load('', function (n, o) {
												cc.log(
													'Should load a texture from external url: ' +
														(o instanceof
															cc.Texture2D)
												);
												var i = new cc.SpriteFrame(o);
												e.contentNode.children[
													t
												].getComponent(
													cc.Sprite
												).spriteFrame = i;
											});
										}, 100 * t);
									};
									for (
										n = 0;
										n < this.contentNode.childrenCount;
										n++
									)
										o(n);
								}
							}),
							(t.prototype.onClickExit = function () {
								this.node.removeFromParent();
							}),
							a([d(cc.Node)], t.prototype, 'contentNode', void 0),
							a(
								[d(cc.Boolean)],
								t.prototype,
								'isPrivate',
								void 0
							),
							a([l], t)
						);
					})(cc.Component);
				(n.default = u), cc._RF.pop();
			},
			{ './LyConfig': 'LyConfig', './LyControl': 'LyControl' }
		],
		qqBlockAd: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, 'e8968KIHI1EULc9ZSc990JB', 'qqBlockAd');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyConfig'),
					s = e('./LyControl'),
					c = e('./qqModule'),
					l = cc._decorator,
					d = l.ccclass,
					u = l.property,
					f = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (t.initShow = !0), t;
						}
						return (
							i(t, e),
							(t.prototype.onEnable = function () {
								r.LyConfig.LY_LIB_TYPE == r.LIB_TYPE.MINI &&
								s.LyControl.getPlatformType() ==
									r.LyConfig.PlatformDefine.QQminiGame
									? ((this.node.active = !0),
									  this.initShow && this.openAd())
									: (this.node.active = !1);
							}),
							(t.prototype.onDisable = function () {
								c.qqModule.closeBlockAd();
							}),
							(t.prototype.openAd = function () {
								if (
									r.LyConfig.LY_LIB_TYPE == r.LIB_TYPE.MINI &&
									s.LyControl.getPlatformType() ==
										r.LyConfig.PlatformDefine.QQminiGame
								) {
									var e = this.node.convertToWorldSpaceAR(
											cc.v2(0, 0)
										),
										t = qq.getSystemInfoSync().screenHeight,
										n = t - (t * e.y) / cc.winSize.height;
									c.qqModule.openBlockAd({
										left: 0,
										top: n,
										size: 5,
										orientation: !0
									});
								}
							}),
							a([u(cc.Boolean)], t.prototype, 'initShow', void 0),
							a([d], t)
						);
					})(cc.Component);
				(n.default = f), cc._RF.pop();
			},
			{
				'./LyConfig': 'LyConfig',
				'./LyControl': 'LyControl',
				'./qqModule': 'qqModule'
			}
		],
		qqBox: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, 'bd40aT1MSBNi7ZXYd38gWB+', 'qqBox');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyConfig'),
					s = e('./LyControl'),
					c = cc._decorator,
					l = c.ccclass;
				c.property;
				var d = (function (e) {
					function t() {
						return (null !== e && e.apply(this, arguments)) || this;
					}
					return (
						i(t, e),
						(t.prototype.start = function () {
							r.LyConfig.LY_LIB_TYPE == r.LIB_TYPE.MINI &&
							s.LyControl.getPlatformType() ==
								r.LyConfig.PlatformDefine.QQminiGame
								? (this.node.active = !0)
								: (this.node.active = !1);
						}),
						(t.prototype.openAd = function () {
							var e = qq.createAppBox({
								adUnitId: 'b0bbb53c43b030e7a74bde88806f2651'
							});
							e.load().then(function () {
								e.show();
							});
						}),
						a([l], t)
					);
				})(cc.Component);
				(n.default = d), cc._RF.pop();
			},
			{ './LyConfig': 'LyConfig', './LyControl': 'LyControl' }
		],
		qqModule: [
			function (e, t, n) {
				'use strict';
				cc._RF.push(t, 'dabdbZsDxJNs6JJX8Ffpvs8', 'qqModule');
				var o,
					i = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.qqModule =
						n.BlockAd =
						n.InterstitialAd =
						n.VideoAd =
						n.BannerAd =
							void 0);
				var a,
					r = e('./LyConfig'),
					s = e('./LyUtils'),
					c = cc._decorator,
					l = c.ccclass;
				c.property,
					((a = o || (o = {})).BANNER =
						'4f514c6258c227b3bc60201966b5a379'),
					(a.VIDEO = '1385d157a9ca54916883ba1980966895'),
					(a.INTERSTITIAL = '6d9ff593091a205d225efc4008ba01e7'),
					(a.BLOCK = '5aa657e172b41f510a162ba500cd0f00'),
					(a.NATIVE_RE_FL = ''),
					(a.NATIVE_RE_NINE = ''),
					(a.NATIVE_RE_BANNER = ''),
					(a.NATIVE_ICON = ''),
					(a.NATIVE_BIG_PIC = ''),
					(a.NATIVE_SMALL_PIC = ''),
					(a.NATIVE_MORE_PIC = '');
				var d = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.load = function () {
							console.log('qqAd banner load success'),
								t.bannerAd.show();
						}),
						(e.openAd = function () {
							if (t.bannerAd) t.bannerAd.show();
							else {
								console.log('\u52a0\u8f7dbanner');
								var e = qq.getSystemInfoSync(),
									n = e.screenWidth,
									o = e.screenHeight;
								(t.bannerAd = qq.createBannerAd({
									adUnitId: t.adUnitId,
									style: { left: 0, top: o - 100, width: n }
								})),
									t.bannerAd.onResize(function () {
										var e = t.bannerAd.style.realWidth,
											i = t.bannerAd.style.realHeight,
											a = (n - e) / 2,
											r = o - i;
										(t.bannerAd.style.left = a),
											(t.bannerAd.style.top = r);
									}),
									t.bannerAd.onLoad(t.load),
									t.bannerAd.onError(function (e) {
										console.error(
											'qqAd banner load error : ',
											e
										);
									});
							}
						}),
						(e.close = function () {
							t.bannerAd && t.bannerAd.hide();
						}),
						(e.destoryAd = function () {
							t.bannerAd &&
								(t.bannerAd.hide(), (t.bannerAd = null));
						}),
						(e.adUnitId = o.BANNER),
						(e.bannerAd = null),
						(t = i([l], e))
					);
				})();
				n.BannerAd = d;
				var u = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.onLoad = function () {
							(t.isReady = !0),
								console.log(
									'qqAd - video - onLoad - ',
									t.isReady
								);
						}),
						(e.onError = function (e) {
							console.log(
								'qqAd - video - onError:',
								e && e.errCode,
								e && e.errMsg
							);
						}),
						(e.onClose = function (e) {
							console.log('qqAd - video - onClose'),
								e && e.isEnded
									? (console.log(
											'qqAd - video - onClose - \u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1'
									  ),
									  console.log(
											'VideoAd.closeAdCallback = ',
											t.closeAdCallback
									  ),
									  'function' == typeof t.closeAdCallback &&
											t.closeAdCallback(!0))
									: (console.log(
											'qqAd - video - onClose - \u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1'
									  ),
									  'function' == typeof t.closeAdCallback &&
											t.closeAdCallback(!1)),
								setTimeout(function () {
									(t.openAdCallback = null),
										(t.closeAdCallback = null);
								}, 10),
								t.videoAd &&
									(t.videoAd.offLoad(t.onLoad),
									t.videoAd.offError(t.onError),
									t.videoAd.offClose(t.onClose));
						}),
						(e.isAdReady = function () {
							return t.isReady;
						}),
						(e.openAd = function (e, n) {
							(t.isReady = !1),
								t.videoAd ||
									(t.videoAd = qq.createRewardedVideoAd({
										adUnitId: t.adUnitId
									})),
								t.videoAd.onLoad(t.onLoad),
								t.videoAd.onError(t.onError);
							var o = t.videoAd.load();
							o &&
								o
									.then(function () {
										console.log(
											'qqAd - video - preloadAd - \u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u6210\u529f'
										);
										var o = t.videoAd.show();
										o
											? (o
													.then(function () {
														console.log(
															'qqAd - video - openAd - \u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u6210\u529f'
														),
															'function' ==
																typeof e &&
																e(!0);
													})
													.catch(function (t) {
														console.log(
															'qqAd - video - openAd - \u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u5931\u8d25',
															t
														),
															'function' ==
																typeof e &&
																e(!1);
													}),
											  (t.closeAdCallback = n),
											  t.videoAd.onClose(t.onClose),
											  console.log(
													'\u8bbe\u7f6e\u5173\u95ed\u56de\u8c03~~~~~~~~~~~~~~'
											  ))
											: (console.log(
													'qqAd - video - openAd - t_ad = null'
											  ),
											  'function' == typeof n && n(!1));
									})
									.catch(function () {
										e(!1);
									});
						}),
						(e.close = function () {}),
						(e.adUnitId = o.VIDEO),
						(e.videoAd = null),
						(e.isReady = !1),
						(e.openAdCallback = null),
						(e.closeAdCallback = null),
						(t = i([l], e))
					);
				})();
				n.VideoAd = u;
				var f = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.onLoad = function () {
							(t.isReady = !0),
								console.log(
									'qqAd - video - onLoad - ',
									t.isReady
								);
						}),
						(e.onError = function (e) {
							console.log(
								'qqAd - video - onError:',
								e && e.errCode,
								e && e.errMsg
							);
						}),
						(e.onClose = function (e) {
							console.log('qqAd - video - onClose'),
								e && e.isEnded
									? (console.log(
											'qqAd - video - onClose - \u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1'
									  ),
									  console.log(
											'InterstitialAd.closeAdCallback = ',
											t.closeAdCallback
									  ),
									  'function' == typeof t.closeAdCallback &&
											t.closeAdCallback(!0))
									: (console.log(
											'qqAd - video - onClose - \u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1'
									  ),
									  'function' == typeof t.closeAdCallback &&
											t.closeAdCallback(!1)),
								setTimeout(function () {
									(t.openAdCallback = null),
										(t.closeAdCallback = null);
								}, 10),
								t.interAd &&
									(t.interAd.offLoad(t.onLoad),
									t.interAd.offError(t.onError),
									t.interAd.offClose(t.onClose));
						}),
						(e.isAdReady = function () {
							return t.isReady;
						}),
						(e.openAd = function (e, n) {
							(t.isReady = !1),
								t.interAd ||
									(t.interAd = qq.createInterstitialAd({
										adUnitId: t.adUnitId
									})),
								t.interAd.onLoad(t.onLoad),
								t.interAd.onError(t.onError);
							var o = t.interAd.load();
							o &&
								o
									.then(function () {
										console.log(
											'qqAd - inter - preloadAd - \u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u6210\u529f'
										);
										var o = t.interAd.show();
										o
											? (o
													.then(function () {
														console.log(
															'qqAd - inter - openAd - \u63d2\u5c4f\u5e7f\u544a\u663e\u793a\u6210\u529f'
														),
															'function' ==
																typeof e &&
																e(!0);
													})
													.catch(function (t) {
														console.log(
															'qqAd - inter - openAd - \u63d2\u5c4f\u5e7f\u544a\u663e\u793a\u5931\u8d25',
															t
														),
															'function' ==
																typeof e &&
																e(!1);
													}),
											  (t.closeAdCallback = n),
											  t.interAd.onClose(t.onClose),
											  console.log(
													'\u8bbe\u7f6e\u5173\u95ed\u56de\u8c03~~~~~~~~~~~~~~'
											  ))
											: (console.log(
													'qqAd - inter - openAd - t_ad = null'
											  ),
											  'function' == typeof n && n(!1));
									})
									.catch(function () {
										e(!1);
									});
						}),
						(e.close = function () {}),
						(e.adUnitId = o.INTERSTITIAL),
						(e.interAd = null),
						(e.isReady = !1),
						(e.openAdCallback = null),
						(e.closeAdCallback = null),
						(t = i([l], e))
					);
				})();
				n.InterstitialAd = f;
				var h = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.onLoad = function () {
							console.log('qqAd BlockAd load success');
						}),
						(e.onError = function (e) {
							console.error('qqAd BlockAd load error : ', e);
						}),
						(e.openAd = function (e) {
							if (!t.reFlAd) {
								var n = qq.getSystemInfoSync();
								(t.reFlAd = qq.createBlockAd({
									adUnitId: t.adUnitId,
									style: { left: e.left, top: e.top },
									size: e.size,
									orientation:
										1 == e.orientation
											? 'landscape'
											: 'vertical'
								})),
									t.reFlAd.onResize(function () {
										var o = t.reFlAd.style.width,
											i = n.screenWidth - o + 200,
											a = e.top;
										(t.reFlAd.style.left = i),
											(t.reFlAd.style.top = a);
									}),
									t.reFlAd.onLoad(t.onLoad),
									t.reFlAd.onError(t.onError);
							}
							t.reFlAd.show();
						}),
						(e.close = function () {
							t.reFlAd &&
								(t.reFlAd.hide(),
								t.reFlAd.offLoad(t.onLoad),
								t.reFlAd.offError(t.onError),
								t.reFlAd.destroy(),
								(t.reFlAd = null));
						}),
						(e.adUnitId = o.BLOCK),
						(e.reFlAd = null),
						(t = i([l], e))
					);
				})();
				n.BlockAd = h;
				var p = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.log = function (e) {
							console.log(e);
						}),
						(e.getAdClass = function (e) {
							var t = null,
								n = s.LyUtils._checkAdType(e);
							return (
								n == r.LyConfig.AD_KIND.BANNER
									? (t = d)
									: n == r.LyConfig.AD_KIND.VIDEO
									? (t = u)
									: n == r.LyConfig.AD_KIND.INTER
									? (t = f)
									: console.error(
											'\u6ca1\u6709\u627e\u5230\u6307\u5b9aoppo\u5e7f\u544a \uff1a ',
											e
									  ),
								t
							);
						}),
						(e.judgeCanShowSpecialAd = function () {
							var e = new Date().getTime(),
								n = e - t.lastAddBannerTime;
							return (
								console.log('passTime = ', n),
								n > 6e4
									? ((t.oneMinShowCount = 1),
									  (t.lastAddBannerTime = e))
									: t.oneMinShowCount < 2 &&
									  (t.oneMinShowCount += 1),
								!0
							);
						}),
						(e.openAd = function (e, t, n) {
							var o = s.LyUtils._checkAdType(e);
							o == r.LyConfig.AD_KIND.BANNER
								? d.openAd()
								: o == r.LyConfig.AD_KIND.VIDEO
								? u.openAd(t, n)
								: o == r.LyConfig.AD_KIND.INTER &&
								  f.openAd(null, n);
						}),
						(e.openBlockAd = function (e) {
							h.openAd(e);
						}),
						(e.closeBlockAd = function () {
							h.close();
						}),
						(e.closeAd = function (e) {
							var n = t.getAdClass(e);
							n.close && n.close();
						}),
						(e.loadAd = function (e, n) {
							t.getAdClass(e).load(n);
						}),
						(e.getNativeData = function (e) {
							var n = null;
							return (
								this.judgeCanShowSpecialAd() &&
									(n = t.getAdClass(e).getAdDatas()),
								n
							);
						}),
						(e.reportAdShow = function (e, n) {
							t.getAdClass(e).reportAdShow(n);
						}),
						(e.reportAdClick = function (e, n) {
							t.getAdClass(e).reportAdClick(n);
						}),
						(e.destoryAd = function (e) {
							t.getAdClass(e).destoryAd();
						}),
						(e.isAdReady = function (e) {
							var t = s.LyUtils._checkAdType(e),
								n = !1;
							return (
								t == r.LyConfig.AD_KIND.BANNER
									? (n = !0)
									: t == r.LyConfig.AD_KIND.VIDEO
									? (n = u.isAdReady())
									: t == r.LyConfig.AD_KIND.INTER &&
									  (n = f.isAdReady()),
								n
							);
						}),
						(e.lastAddBannerTime = -1),
						(e.oneMinShowCount = 0),
						(t = i([l], e))
					);
				})();
				(n.qqModule = p), cc._RF.pop();
			},
			{ './LyConfig': 'LyConfig', './LyUtils': 'LyUtils' }
		],
		vivoBigPicAd: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '18e9fvI8LVNyZz/2wBNQdp0', 'vivoBigPicAd'),
					cc._RF.pop();
			},
			{}
		],
		vivoIconAd: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '26113Y6wgBNL4EFakau0P4R', 'vivoIconAd'),
					cc._RF.pop();
			},
			{}
		],
		vivoMoreGame: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '8d5eaOOf7xM+IKrUYZS0Olx', 'vivoMoreGame'),
					cc._RF.pop();
			},
			{}
		],
		vivoReBannerAd: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, 'f6cd7HzLghJpaTDE4H3t2NG', 'vivoReBannerAd'),
					cc._RF.pop();
			},
			{}
		],
		vivoReNineAd: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '51721Zoha9KvrRC4iaW50Xi', 'vivoReNineAd'),
					cc._RF.pop();
			},
			{}
		],
		vivoShortcutInstalled: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(
					t,
					'b3a43QAfc5FCq3bQSLZUsHA',
					'vivoShortcutInstalled'
				);
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyConfig'),
					s = e('./LyControl'),
					c = e('./LyUtils'),
					l = cc._decorator,
					d = l.ccclass;
				l.property;
				var u = (function (e) {
					function t() {
						return (null !== e && e.apply(this, arguments)) || this;
					}
					return (
						i(t, e),
						(t.prototype.onLoad = function () {}),
						(t.prototype.CreateDeskTag = function () {
							var e = this;
							qg.hasShortcutInstalled({
								success: function (t) {
									0 == t
										? qg.installShortcut({
												success: function () {
													console.log(
														'CreateDeskTag success'
													),
														(e.node.active = !1);
												},
												fail: function (e) {
													c.LyUtils.showToast(
														'\u6dfb\u52a0\u684c\u9762\u5931\u8d25,\u8bf7\u7a0d\u540e\u518d\u8bd5'
													),
														console.log(
															'\u6388\u6743\u5931\u8d25,\u8bf7\u7a0d\u540e\u518d\u8bd5',
															e
														);
												},
												complete: function () {}
										  })
										: c.LyUtils.showToast(
												'\u56fe\u6807\u5df2\u5b58\u5728'
										  );
								},
								fail: function () {},
								complete: function () {}
							});
						}),
						(t.prototype.onEnable = function () {
							var e = this;
							s.LyControl.getPlatformType() ==
							r.LyConfig.PlatformDefine.VivoQuickGame
								? qg.hasShortcutInstalled({
										success: function (t) {
											e.node.active = 0 == t;
										},
										fail: function () {},
										complete: function () {}
								  })
								: (e.node.active = !1);
						}),
						a([d], t)
					);
				})(cc.Component);
				(n.default = u), cc._RF.pop();
			},
			{
				'./LyConfig': 'LyConfig',
				'./LyControl': 'LyControl',
				'./LyUtils': 'LyUtils'
			}
		],
		vivoSudokuAd: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '5da57LsviBLa6vYqNgyl0Lp', 'vivoSudokuAd'),
					cc._RF.pop();
			},
			{}
		],
		wxBoxBanner: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, '287dcsSnS9BS5XY7/2sZ5yc', 'wxBoxBanner');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyConfig'),
					s = e('./LyControl'),
					c = e('./wxModule'),
					l = cc._decorator,
					d = l.ccclass,
					u = l.property,
					f = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (t.boxType = 1), t;
						}
						return (
							i(t, e),
							(t.prototype.start = function () {}),
							(t.prototype.onEnable = function () {
								r.LyConfig.LY_LIB_TYPE == r.LIB_TYPE.MINI &&
								s.LyControl.getPlatformType() ==
									r.LyConfig.PlatformDefine.WeChatGame
									? ((this.node.active = !0), this.openAd())
									: (this.node.active = !1);
							}),
							(t.prototype.onDisable = function () {
								c.wxModule.closeCustomAd(3);
							}),
							(t.prototype.openAd = function () {
								var e = s.LyControl.getScreeSize();
								c.wxModule.openCustomAd(3, 0, e.height / 2);
							}),
							a([u(cc.Integer)], t.prototype, 'boxType', void 0),
							a([d], t)
						);
					})(cc.Component);
				(n.default = f), cc._RF.pop();
			},
			{
				'./LyConfig': 'LyConfig',
				'./LyControl': 'LyControl',
				'./wxModule': 'wxModule'
			}
		],
		wxBox: [
			function (e, t, n) {
				'use strict';
				var o;
				cc._RF.push(t, '3cbf7SbC+RC44ESQVzJ7kgo', 'wxBox');
				var i =
						((o = function (e, t) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(
											t,
											n
										) && (e[n] = t[n]);
								})(e, t);
						}),
						function (e, t) {
							function n() {
								this.constructor = e;
							}
							o(e, t),
								(e.prototype =
									null === t
										? Object.create(t)
										: ((n.prototype = t.prototype),
										  new n()));
						}),
					a = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = e('./LyConfig'),
					s = e('./LyControl'),
					c = e('./LyUtils'),
					l = e('./wxModule'),
					d = cc._decorator,
					u = d.ccclass,
					f = d.property,
					h = (function (e) {
						function t() {
							var t =
								(null !== e && e.apply(this, arguments)) ||
								this;
							return (
								(t.boxType = 1),
								(t.delayShowTime = 100),
								(t.canClick = !1),
								(t.initShow = !1),
								(t.changeTop = !1),
								t
							);
						}
						return (
							i(t, e),
							(t.prototype.start = function () {}),
							(t.prototype.onEnable = function () {
								r.LyConfig.LY_LIB_TYPE == r.LIB_TYPE.MINI &&
								s.LyControl.getPlatformType() ==
									r.LyConfig.PlatformDefine.WeChatGame
									? ((this.node.active = !0),
									  this.initShow && this.openAd())
									: (this.node.active = !1);
							}),
							(t.prototype.onDisable = function () {
								this.initShow &&
									l.wxModule.closeCustomAd(this.boxType);
							}),
							(t.prototype.openAd = function () {
								var e = this;
								setTimeout(function () {
									var t = c.LyUtils.getAdPosByNode(e.node),
										n = s.LyControl.getScreeSize(),
										o = n.height / 2,
										i = t.left;
									2 == e.boxType && (i = (2 * n.width) / 25),
										l.wxModule.openCustomAd(
											e.boxType,
											i,
											o
										);
								}, this.delayShowTime);
							}),
							(t.prototype.onClickAd = function () {
								if (this.canClick) {
									var e = c.LyUtils.getAdPosByNode(this.node),
										t = s.LyControl.getScreeSize(),
										n = t.height / 2,
										o = e.left;
									2 == this.boxType &&
										(o = (2 * t.width) / 25),
										l.wxModule.openCustomAd(
											this.boxType,
											o,
											n
										);
								}
							}),
							a([f(cc.Integer)], t.prototype, 'boxType', void 0),
							a(
								[f(cc.Integer)],
								t.prototype,
								'delayShowTime',
								void 0
							),
							a([f(cc.Boolean)], t.prototype, 'canClick', void 0),
							a([f(cc.Boolean)], t.prototype, 'initShow', void 0),
							a(
								[f(cc.Boolean)],
								t.prototype,
								'changeTop',
								void 0
							),
							a([u], t)
						);
					})(cc.Component);
				(n.default = h), cc._RF.pop();
			},
			{
				'./LyConfig': 'LyConfig',
				'./LyControl': 'LyControl',
				'./LyUtils': 'LyUtils',
				'./wxModule': 'wxModule'
			}
		],
		wxModule: [
			function (e, t, n) {
				'use strict';
				cc._RF.push(t, '99c16/fF8xPj4pA0XPJJLOz', 'wxModule');
				var o,
					i = function (e, t, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? t
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											t,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(e, t, n, o);
						else
							for (var s = e.length - 1; s >= 0; s--)
								(i = e[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(t, n, r)
											: i(t, n)) || r);
						return a > 3 && r && Object.defineProperty(t, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.wxModule =
						n.CustomAd_3 =
						n.CustomAd_2 =
						n.CustomAd_1 =
						n.InterstitialAd =
						n.VideoAd =
						n.BannerAd =
							void 0);
				var a,
					r = e('./LyConfig'),
					s = e('./LyUtils'),
					c = cc._decorator,
					l = c.ccclass;
				c.property,
					((a = o || (o = {})).BANNER = 'adunit-55c338bc425c2043'),
					(a.VIDEO = 'adunit-adbeda09ad21453b'),
					(a.INTERSTITIAL = 'adunit-b8ac9b581164eb06'),
					(a.CUSTOM_1 = 'adunit-d9ce93cf9e972d82'),
					(a.CUSTOM_2 = 'adunit-9fb45394361acd74'),
					(a.CUSTOM_3 = 'adunit-337e7b5ccbff5739');
				var d = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.load = function () {
							console.log('wxAd banner load success'),
								t.bannerAd.show();
						}),
						(e.openAd = function () {
							if (t.bannerAd) t.bannerAd.show();
							else {
								console.log('\u52a0\u8f7dbanner');
								var e = wx.getSystemInfoSync(),
									n = e.screenWidth,
									o = e.screenHeight;
								(t.bannerAd = wx.createBannerAd({
									adUnitId: t.adUnitId,
									style: { left: 0, top: o - 100, width: n }
								})),
									(t.bannerAd.style.width = n),
									(t.bannerAd.style.left =
										(n - t.bannerAd.style.width) / 2),
									(t.bannerAd.style.top = o - 80),
									t.bannerAd.onLoad(t.load),
									t.bannerAd.onError(function (e) {
										console.error(
											'wxAd banner load error : ',
											e
										);
									});
							}
						}),
						(e.close = function () {
							t.bannerAd && t.bannerAd.hide();
						}),
						(e.destoryAd = function () {
							t.bannerAd &&
								(t.bannerAd.hide(), (t.bannerAd = null));
						}),
						(e.adUnitId = o.BANNER),
						(e.bannerAd = null),
						(t = i([l], e))
					);
				})();
				n.BannerAd = d;
				var u = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.onLoad = function () {
							(t.isReady = !0),
								console.log(
									'wxAd - video - onLoad - ',
									t.isReady
								);
						}),
						(e.onError = function (e) {
							console.log(
								'wxAd - video - onError:',
								e && e.errCode,
								e && e.errMsg
							);
						}),
						(e.onClose = function (e) {
							console.log('wxAd - video - onClose'),
								e && e.isEnded
									? (console.log(
											'wxAd - video - onClose - \u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1'
									  ),
									  console.log(
											'VideoAd.closeAdCallback = ',
											t.closeAdCallback
									  ),
									  'function' == typeof t.closeAdCallback &&
											t.closeAdCallback(!0))
									: (console.log(
											'wxAd - video - onClose - \u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1'
									  ),
									  'function' == typeof t.closeAdCallback &&
											t.closeAdCallback(!1)),
								setTimeout(function () {
									(t.openAdCallback = null),
										(t.closeAdCallback = null);
								}, 10),
								t.videoAd &&
									(t.videoAd.offLoad(t.onLoad),
									t.videoAd.offError(t.onError),
									t.videoAd.offClose(t.onClose));
						}),
						(e.isAdReady = function () {
							return t.isReady;
						}),
						(e.openAd = function (e, n) {
							(t.isReady = !1),
								t.videoAd ||
									(t.videoAd = wx.createRewardedVideoAd({
										adUnitId: t.adUnitId
									})),
								t.videoAd.onLoad(t.onLoad),
								t.videoAd.onError(t.onError);
							var o = t.videoAd.load();
							o &&
								o
									.then(function () {
										console.log(
											'wxAd - video - preloadAd - \u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u6210\u529f'
										);
										var o = t.videoAd.show();
										o
											? (o
													.then(function () {
														console.log(
															'wxAd - video - openAd - \u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u6210\u529f'
														),
															'function' ==
																typeof e &&
																e(!0);
													})
													.catch(function (t) {
														console.log(
															'wxAd - video - openAd - \u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u5931\u8d25',
															t
														),
															'function' ==
																typeof e &&
																e(!1);
													}),
											  (t.closeAdCallback = n),
											  t.videoAd.onClose(t.onClose),
											  console.log(
													'\u8bbe\u7f6e\u5173\u95ed\u56de\u8c03~~~~~~~~~~~~~~'
											  ))
											: (console.log(
													'wxAd - video - openAd - t_ad = null'
											  ),
											  'function' == typeof n && n(!1));
									})
									.catch(function () {
										e(!1);
									});
						}),
						(e.close = function () {}),
						(e.adUnitId = o.VIDEO),
						(e.videoAd = null),
						(e.isReady = !1),
						(e.openAdCallback = null),
						(e.closeAdCallback = null),
						(t = i([l], e))
					);
				})();
				n.VideoAd = u;
				var f = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.onLoad = function () {
							(t.isReady = !0),
								console.log(
									'wxAd - InterstitialAd - onLoad - ',
									t.isReady
								);
						}),
						(e.onError = function (e) {
							console.log(
								'wxAd - InterstitialAd - onError:',
								e && e.errCode,
								e && e.errMsg
							);
						}),
						(e.onClose = function (e) {
							console.log('wxAd - InterstitialAd - onClose'),
								e && e.isEnded
									? (console.log(
											'wxAd - InterstitialAd - onClose - \u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1'
									  ),
									  console.log(
											'InterstitialAd.closeAdCallback = ',
											t.closeAdCallback
									  ),
									  'function' == typeof t.closeAdCallback &&
											t.closeAdCallback(!0))
									: (console.log(
											'wxAd - InterstitialAd - onClose - \u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1'
									  ),
									  'function' == typeof t.closeAdCallback &&
											t.closeAdCallback(!1)),
								setTimeout(function () {
									(t.openAdCallback = null),
										(t.closeAdCallback = null);
								}, 10),
								t.interAd &&
									(t.interAd.offLoad(t.onLoad),
									t.interAd.offError(t.onError),
									t.interAd.offClose(t.onClose));
						}),
						(e.isAdReady = function () {
							return t.isReady;
						}),
						(e.openAd = function (e, n) {
							(t.isReady = !1),
								t.interAd ||
									(t.interAd = wx.createInterstitialAd({
										adUnitId: t.adUnitId
									})),
								t.interAd.onLoad(t.onLoad),
								t.interAd.onError(t.onError);
							var o = t.interAd.load();
							o &&
								o
									.then(function () {
										console.log(
											'wxAd - inter - preloadAd - \u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u6210\u529f'
										);
										var o = t.interAd.show();
										o
											? (o
													.then(function () {
														console.log(
															'wxAd - inter - openAd - \u63d2\u5c4f\u5e7f\u544a\u663e\u793a\u6210\u529f'
														),
															'function' ==
																typeof e &&
																e(!0);
													})
													.catch(function (t) {
														console.log(
															'wxAd - inter - openAd - \u63d2\u5c4f\u5e7f\u544a\u663e\u793a\u5931\u8d25',
															t
														),
															'function' ==
																typeof e &&
																e(!1);
													}),
											  (t.closeAdCallback = n),
											  t.interAd.onClose(t.onClose),
											  console.log(
													'\u8bbe\u7f6e\u5173\u95ed\u56de\u8c03~~~~~~~~~~~~~~'
											  ))
											: (console.log(
													'wxAd - inter - openAd - t_ad = null'
											  ),
											  'function' == typeof n && n(!1));
									})
									.catch(function () {
										e(!1);
									});
						}),
						(e.close = function () {}),
						(e.adUnitId = o.INTERSTITIAL),
						(e.interAd = null),
						(e.isReady = !1),
						(e.openAdCallback = null),
						(e.closeAdCallback = null),
						(t = i([l], e))
					);
				})();
				n.InterstitialAd = f;
				var h = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.onLoad = function () {
							(t.isReady = !0),
								console.log(
									'wxAd - CustomAd_1 - onLoad - ',
									t.isReady
								),
								t.ad.show();
						}),
						(e.onError = function (e) {
							console.log(
								'wxAd - CustomAd_1 - onError:',
								e && e.errCode,
								e && e.errMsg
							),
								t.ad &&
									(t.ad.offLoad(t.onLoad),
									t.ad.offError(t.onError),
									t.ad.destroy(),
									setTimeout(function () {
										t.ad = null;
									}, 100)),
								(t.isReady = !1);
						}),
						(e.openAd = function (e, n) {
							console.log('left1 = ', e),
								console.log('top1 = ', n),
								t.ad
									? t.ad.show()
									: ((t.ad = wx.createCustomAd({
											adUnitId: t.adUnitId,
											adIntervals: 30,
											style: { left: e, top: n }
									  })),
									  t.ad.onLoad(t.onLoad),
									  t.ad.onError(t.onError));
						}),
						(e.isShow = function () {
							var e = !1;
							return t.ad && (e = t.ad.isShow()), e;
						}),
						(e.closeAd = function () {
							t.isShow() && t.ad.hide();
						}),
						(e.adUnitId = o.CUSTOM_1),
						(e.ad = null),
						(e.isReady = !1),
						(t = i([l], e))
					);
				})();
				n.CustomAd_1 = h;
				var p = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.onLoad = function () {
							(t.isReady = !0),
								console.log(
									'wxAd - CustomAd_2 - onLoad - ',
									t.isReady
								),
								t.ad.show();
						}),
						(e.onError = function (e) {
							console.log(
								'wxAd - CustomAd_2 - onError:',
								e && e.errCode,
								e && e.errMsg
							),
								t.ad &&
									(t.ad.offLoad(t.onLoad),
									t.ad.offError(t.onError),
									t.ad.destroy(),
									setTimeout(function () {
										t.ad = null;
									}, 100)),
								(t.isReady = !1);
						}),
						(e.openAd = function (e, n) {
							console.log('left2 = ', 0),
								console.log('top2 = ', n),
								t.ad
									? t.ad.show()
									: ((t.ad = wx.createCustomAd({
											adUnitId: t.adUnitId,
											adIntervals: 30,
											style: { left: 0, top: n }
									  })),
									  t.ad.onLoad(t.onLoad),
									  t.ad.onError(t.onError));
						}),
						(e.isShow = function () {
							var e = !1;
							return t.ad && (e = t.ad.isShow()), e;
						}),
						(e.closeAd = function () {
							t.isShow() && t.ad.hide();
						}),
						(e.adUnitId = o.CUSTOM_2),
						(e.ad = null),
						(e.isReady = !1),
						(t = i([l], e))
					);
				})();
				n.CustomAd_2 = p;
				var g = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.onLoad = function () {
							(t.isReady = !0),
								console.log(
									'wxAd - CustomAd_3 - onLoad - ',
									t.isReady
								),
								t.ad.show();
						}),
						(e.onError = function (e) {
							console.log(
								'wxAd - CustomAd_3 - onError:',
								e && e.errCode,
								e && e.errMsg
							),
								t.ad &&
									(t.ad.offLoad(t.onLoad),
									t.ad.offError(t.onError),
									t.ad.destroy(),
									setTimeout(function () {
										t.ad = null;
									}, 100)),
								(t.isReady = !1);
						}),
						(e.openAd = function (e, n) {
							console.log('left3 = ', e),
								console.log('top3 = ', n),
								t.ad
									? t.ad.show()
									: ((t.ad = wx.createCustomAd({
											adUnitId: t.adUnitId,
											adIntervals: 30,
											style: { left: e, top: n }
									  })),
									  t.ad.onLoad(t.onLoad),
									  t.ad.onError(t.onError));
						}),
						(e.isShow = function () {
							var e = !1;
							return t.ad && (e = t.ad.isShow()), e;
						}),
						(e.closeAd = function () {
							t.isShow() && t.ad.hide();
						}),
						(e.adUnitId = o.CUSTOM_3),
						(e.ad = null),
						(e.isReady = !1),
						(t = i([l], e))
					);
				})();
				n.CustomAd_3 = g;
				var m = (function () {
					function e() {}
					var t;
					return (
						(t = e),
						(e.init = function () {}),
						(e.log = function (e) {
							console.log(e);
						}),
						(e.getAdClass = function (e) {
							var t = null,
								n = s.LyUtils._checkAdType(e);
							return (
								n == r.LyConfig.AD_KIND.BANNER
									? (t = d)
									: n == r.LyConfig.AD_KIND.VIDEO
									? (t = u)
									: n == r.LyConfig.AD_KIND.INTER
									? (t = f)
									: console.error(
											'\u6ca1\u6709\u627e\u5230\u6307\u5b9aoppo\u5e7f\u544a \uff1a ',
											e
									  ),
								t
							);
						}),
						(e.judgeCanShowSpecialAd = function () {
							var e = new Date().getTime(),
								n = e - t.lastAddBannerTime;
							return (
								console.log('passTime = ', n),
								n > 6e4
									? ((t.oneMinShowCount = 1),
									  (t.lastAddBannerTime = e))
									: t.oneMinShowCount < 2 &&
									  (t.oneMinShowCount += 1),
								!0
							);
						}),
						(e.openAd = function (e, t, n) {
							var o = s.LyUtils._checkAdType(e);
							o == r.LyConfig.AD_KIND.BANNER
								? d.openAd()
								: o == r.LyConfig.AD_KIND.VIDEO
								? u.openAd(t, n)
								: o == r.LyConfig.AD_KIND.INTER &&
								  f.openAd(null, n);
						}),
						(e.isAdReady = function (e) {
							var t = s.LyUtils._checkAdType(e),
								n = !1;
							return (
								t == r.LyConfig.AD_KIND.BANNER
									? (n = !0)
									: t == r.LyConfig.AD_KIND.VIDEO
									? (n = u.isAdReady())
									: t == r.LyConfig.AD_KIND.INTER &&
									  (n = f.isAdReady()),
								n
							);
						}),
						(e.closeAd = function (e) {
							var n = t.getAdClass(e);
							n.close && n.close();
						}),
						(e.loadAd = function (e, n) {
							t.getAdClass(e).load(n);
						}),
						(e.getNativeData = function (e) {
							var n = null;
							return (
								this.judgeCanShowSpecialAd() &&
									(n = t.getAdClass(e).getAdDatas()),
								n
							);
						}),
						(e.reportAdShow = function (e, n) {
							t.getAdClass(e).reportAdShow(n);
						}),
						(e.reportAdClick = function (e, n) {
							t.getAdClass(e).reportAdClick(n);
						}),
						(e.destoryAd = function (e) {
							t.getAdClass(e).destoryAd();
						}),
						(e.openCustomAd = function (e, t, n) {
							void 0 === t && (t = 0),
								void 0 === n && (n = 0),
								1 == e
									? h.openAd(t, n)
									: 2 == e
									? p.openAd(t, n)
									: 3 == e && g.openAd(t, n);
						}),
						(e.closeCustomAd = function (e) {
							1 == e
								? h.closeAd()
								: 2 == e
								? p.closeAd()
								: 3 == e && g.closeAd();
						}),
						(e.getScreenSize = function () {
							var e = wx.getSystemInfoSync(),
								t = e.screenWidth,
								n = e.screenHeight;
							return new cc.Size(t, n);
						}),
						(e.lastAddBannerTime = -1),
						(e.oneMinShowCount = 0),
						(t = i([l], e))
					);
				})();
				(n.wxModule = m), cc._RF.pop();
			},
			{ './LyConfig': 'LyConfig', './LyUtils': 'LyUtils' }
		],
		wxPromoteBanner: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '792d5VPWclOxKC0haRQUB31', 'wxPromoteBanner');
				var n = e('./wxPromoteManager'),
					o = e('./wxPromoteItem');
				cc.Class({
					extends: cc.Component,
					properties: {
						prefabWXPromoteItem: cc.Prefab,
						scrollView: cc.ScrollView,
						nodeContent: cc.Node
					},
					onLoad: function () {
						var e = this;
						(this.node.active = !1),
							(ly.getPlatformType() ==
								ly.PlatformDefine.WeChatGame ||
								n.IS_DEBUG) &&
								(n.init(),
								this.scheduleOnce(function () {
									if (n.isOpen()) {
										e.node.active || (e.node.active = !0);
										var t = n.getData();
										e.setBanner(t),
											e.scrollView.node.on(
												'scroll-began',
												e.scrollBegan,
												e
											),
											e.scrollView.node.on(
												'scroll-ended',
												e.scrollEnded,
												e
											);
									}
								}, 0.5));
					},
					scrollBegan: function () {
						var e = this.scrollView.getScrollOffset();
						this.lastScrollOffsetX = e.x;
					},
					scrollEnded: function () {
						var e = this.scrollView.getScrollOffset();
						this.lastScrollOffsetX > e.x
							? (this.xOffset = -n.SCROLL_SPEED)
							: (this.xOffset = n.SCROLL_SPEED);
					},
					onEnable: function () {
						this.resumeScroll();
					},
					onDisable: function () {
						this.pauseScroll();
					},
					onDestroy: function () {
						this.stopScrollAni();
					},
					startScrollAni: function () {
						var e = this;
						this.scheduleOnce(function () {
							var t = e.nodeContent.parent;
							t.width <= e.nodeContent.width &&
								((e.xOffset = n.SCROLL_SPEED),
								(e.xRight = e.nodeContent.x),
								(e.xLeft =
									e.nodeContent.x -
									(e.nodeContent.width - t.width)),
								e.schedule(e.updateScroll, n.INTERVAL_SCROLL));
						}, 0.5);
					},
					updateScroll: function (e) {
						this.isPauseScroll ||
							(this.nodeContent.x > this.xRight
								? ((this.nodeContent.x = this.xRight),
								  (this.xOffset = -n.SCROLL_SPEED))
								: this.nodeContent.x < this.xLeft &&
								  ((this.nodeContent.x = this.xLeft),
								  (this.xOffset = n.SCROLL_SPEED)),
							(this.nodeContent.x += this.xOffset),
							(this.updateIconInterval += e),
							this.updateIconInterval >= n.INTERVAL_UPDATE_ICON &&
								((this.updateIconInterval -=
									n.INTERVAL_UPDATE_ICON),
								this.promoteItems[
									Math.floor(
										Math.random() * this.promoteItems.length
									)
								].updateGameIcon()));
					},
					pauseScroll: function () {
						this.isPauseScroll = !0;
					},
					resumeScroll: function () {
						this.isPauseScroll = !1;
					},
					stopScrollAni: function () {
						this.unschedule(this.updateScroll);
					},
					setBanner: function (e) {
						(this.updateIconInterval = 0), (this.promoteItems = []);
						for (var t = 0; t < e.length; t++)
							this.addPromoteItem(e[t]);
						this.startScrollAni();
					},
					addPromoteItem: function (e) {
						var t = cc.instantiate(this.prefabWXPromoteItem);
						t.parent = this.nodeContent;
						var n = t.getComponent(o);
						n.setItem(e), this.promoteItems.push(n);
					}
				}),
					cc._RF.pop();
			},
			{
				'./wxPromoteItem': 'wxPromoteItem',
				'./wxPromoteManager': 'wxPromoteManager'
			}
		],
		wxPromoteFloat: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '050fcYBLkNAVKmPB6lB2/zZ', 'wxPromoteFloat');
				var n = e('./wxPromoteManager'),
					o = e('./wxPromoteItem');
				cc.Class({
					extends: cc.Component,
					properties: {
						prefabWXPromoteItem: cc.Prefab,
						nodePos: { type: cc.Node, default: [] }
					},
					onLoad: function () {
						var e = this;
						(this.node.active = !1),
							(ly.getPlatformType() ==
								ly.PlatformDefine.WeChatGame ||
								n.IS_DEBUG) &&
								(n.init(),
								this.scheduleOnce(function () {
									n.isOpen() &&
										(e.node.active || (e.node.active = !0),
										(e.promoteData = n.getData()),
										e.initPromoteItems(),
										e.startChangePromoteItem());
								}, 0.5));
					},
					onDestroy: function () {
						this.stopChangePromoteItem();
					},
					onEnable: function () {
						this.resumeChangePromoteItem();
					},
					onDisable: function () {
						this.pauseChangePromoteItem();
					},
					initPromoteItems: function () {
						this.promoteItems = [];
						for (var e = 0; e < this.nodePos.length; e++) {
							var t = cc.instantiate(this.prefabWXPromoteItem);
							(t.parent = this.nodePos[e]),
								t.runAction(
									cc.repeatForever(
										cc.sequence(
											cc.delayTime(Math.random()),
											cc.spawn(
												cc.scaleTo(0.5, 1.1),
												cc.sequence(
													cc.rotateTo(0.25, 7),
													cc.rotateTo(0.25, -7)
												)
											),
											cc.spawn(
												cc.scaleTo(0.5, 1),
												cc.sequence(
													cc.rotateTo(0.25, 7),
													cc.rotateTo(0.25, -7)
												)
											),
											cc.rotateTo(0.25, 0),
											cc.delayTime(1.3)
										)
									)
								);
							var n = t.getComponent(o),
								i =
									this.promoteData[
										Math.floor(
											this.promoteData.length *
												Math.random()
										)
									];
							n.setItem(i), this.promoteItems.push(n);
						}
					},
					startChangePromoteItem: function () {
						this.schedule(
							this.changePromoteItem,
							n.INTERVAL_UPDATE_ITEM
						);
					},
					changePromoteItem: function () {
						if (!this.isPauseChange) {
							var e = this.promoteItems.length,
								t = Math.floor(e * Math.random()),
								n =
									this.promoteData[
										Math.floor(
											this.promoteData.length *
												Math.random()
										)
									];
							this.promoteItems[t] &&
								n &&
								this.promoteItems[t].setItem(n);
						}
					},
					pauseChangePromoteItem: function () {
						this.isPauseChange = !0;
					},
					resumeChangePromoteItem: function () {
						this.isPauseChange = !1;
					},
					stopChangePromoteItem: function () {
						this.unschedule(this.changePromoteItem);
					},
					onClickedBtnClose: function () {
						var e = this;
						console.log('chenfneg ----- this.ndoe', this.node.name),
							this.stopChangePromoteItem(),
							this.scheduleOnce(function () {
								e.node.active = !1;
							}, 0.02),
							(this.node.active = !1);
					}
				}),
					cc._RF.pop();
			},
			{
				'./wxPromoteItem': 'wxPromoteItem',
				'./wxPromoteManager': 'wxPromoteManager'
			}
		],
		wxPromoteInterstitial: [
			function (e, t) {
				'use strict';
				cc._RF.push(
					t,
					'60845z0n5lAbYqNcqin8YtW',
					'wxPromoteInterstitial'
				);
				var n = e('./wxPromoteManager'),
					o = e('./wxPromoteItem');
				cc.Class({
					extends: cc.Component,
					properties: {
						prefabWXPromoteItem: cc.Prefab,
						scrollView: cc.ScrollView,
						nodeContent: cc.Node
					},
					onLoad: function () {
						var e = this;
						(this.node.active = !1),
							(ly.getPlatformType() ==
								ly.PlatformDefine.WeChatGame ||
								n.IS_DEBUG) &&
								(n.init(),
								this.scheduleOnce(function () {
									if (n.isOpen()) {
										e.node.active || (e.node.active = !0);
										var t = n.getData();
										e.setPromoteData(t),
											e.scrollView.node.on(
												'scroll-began',
												e.scrollBegan,
												e
											),
											e.scrollView.node.on(
												'scroll-ended',
												e.scrollEnded,
												e
											);
									}
								}, 0.5));
					},
					scrollBegan: function () {
						var e = this.scrollView.getScrollOffset();
						this.lastScrollOffsetY = e.y;
					},
					scrollEnded: function () {
						var e = this.scrollView.getScrollOffset();
						this.lastScrollOffsetY > e.y
							? (this.yOffset = -n.SCROLL_SPEED)
							: (this.yOffset = n.SCROLL_SPEED);
					},
					onEnable: function () {
						this.resumeScroll();
					},
					onDisable: function () {
						this.pauseScroll();
					},
					onDestroy: function () {
						this.stopScrollAni();
					},
					startScrollAni: function () {
						var e = this;
						this.scheduleOnce(function () {
							var t = e.nodeContent.parent;
							t.height <= e.nodeContent.height &&
								((e.yOffset = n.SCROLL_SPEED),
								(e.yUp =
									e.nodeContent.y +
									(e.nodeContent.height - t.height)),
								(e.yBottom = e.nodeContent.y),
								e.schedule(e.updateScroll, n.INTERVAL_SCROLL));
						}, 0.5);
					},
					updateScroll: function (e) {
						this.isPauseScroll ||
							(this.nodeContent.y > this.yUp
								? ((this.nodeContent.y = this.yUp),
								  (this.yOffset = -n.SCROLL_SPEED))
								: this.nodeContent.y < this.yBottom &&
								  ((this.nodeContent.y = this.yBottom),
								  (this.yOffset = n.SCROLL_SPEED)),
							(this.nodeContent.y += this.yOffset),
							(this.updateIconInterval += e),
							this.updateIconInterval >= n.INTERVAL_UPDATE_ICON &&
								((this.updateIconInterval -=
									n.INTERVAL_UPDATE_ICON),
								this.promoteItems[
									Math.floor(
										Math.random() * this.promoteItems.length
									)
								].updateGameIcon()));
					},
					pauseScroll: function () {
						this.isPauseScroll = !0;
					},
					resumeScroll: function () {
						this.isPauseScroll = !1;
					},
					stopScrollAni: function () {
						this.unschedule(this.updateScroll);
					},
					setPromoteData: function (e) {
						(this.updateIconInterval = 0), (this.promoteItems = []);
						for (var t = 0; t < 3; t++)
							for (var n = 0; n < e.length; n++)
								this.addPromoteItem(e[n]);
						this.startScrollAni();
					},
					addPromoteItem: function (e) {
						var t = cc.instantiate(this.prefabWXPromoteItem);
						t.parent = this.nodeContent;
						var n = t.getComponent(o);
						n.setItem(e), this.promoteItems.push(n);
					}
				}),
					cc._RF.pop();
			},
			{
				'./wxPromoteItem': 'wxPromoteItem',
				'./wxPromoteManager': 'wxPromoteManager'
			}
		],
		wxPromoteItem: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, 'e47e5I20bJAUYdWeZ8TPTmB', 'wxPromoteItem');
				var n = e('./wxPromoteManager');
				cc.Class({
					extends: cc.Component,
					properties: { spIcon: cc.Sprite, labName: cc.Label },
					setItem: function (e) {
						void 0 === e &&
							(e = {
								id: 'wxjofsdjaiofjsofj',
								images: [],
								gameName: '\u4e00\u8df3\u5230\u5e95',
								status: 1
							}),
							(this.id = e.id),
							(this.gameName = e.gameName),
							(this.images = e.images),
							(this.labName.string = '' + this.gameName),
							this.updateGameIcon();
					},
					updateGameIcon: function () {
						var e = this,
							t =
								this.images[
									Math.floor(
										Math.random() * this.images.length
									)
								];
						n.getSpriteFrame(t, function (t) {
							e.spIcon
								? (e.spIcon.spriteFrame = t)
								: console.error(
										'wxPromoteItem - setItem - not find this.spIcon'
								  );
						});
					},
					onClickedItem: function () {
						n.goToMini(this.id);
					}
				}),
					cc._RF.pop();
			},
			{ './wxPromoteManager': 'wxPromoteManager' }
		],
		wxPromoteManager: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, 'e8a9f5M3thOoq7eDdiJj/28', 'wxPromoteManager');
				var n = e('./UtilNet'),
					o = [
						"'wxc90e45815ac7846c'",
						"'wxb244aee47d6402ad'",
						"'wx2d9736d8e4c7ffc0'",
						"'wx068ddd4abec43ab4'",
						"'wxe2dd59a6efde47cd'",
						"'wx5d5d63f397df29d1'",
						"'wx7a1e15ec974b94ec'",
						"'wx07ac5ca282ddaf64'",
						"'wxf59799c385d60a03'",
						"'wxaf1e3cf261d0625b'"
					],
					i = !1,
					a = null,
					r = !1,
					s = {
						IS_DEBUG: !1,
						isBackMian: !1,
						init: function () {
							var e = this;
							if (!r) {
								for (
									var t = "'wx348208006eb38e70'", i = 0;
									i < o.length;
									i++
								)
									t += ',' + o[i];
								var a = JSON.stringify({ appId: t });
								n.post('', a, function (t) {
									e.parseResponeseData(t);
								});
							}
						},
						SCROLL_SPEED: 0.5,
						INTERVAL_SCROLL: 0.01,
						INTERVAL_UPDATE_ICON: 0.5,
						INTERVAL_UPDATE_ITEM: 1,
						parseResponeseData: function (e) {
							if (
								(console.log(
									'wxPromoteManager - parseResponeseData - data:',
									e
								),
								e)
							) {
								var t = e.code;
								if (0 == t) {
									if (e && e.data) {
										(i = !0), (a = e.data);
										for (var n = 0; n < a.length; n++) {
											var o = a[n],
												c = JSON.parse(o.images),
												l = [];
											for (var d in c) l.push(c[d]);
											o.images = l;
										}
										console.log(
											'wxPromoteManager - parseResponeseData - _promoteData:',
											a
										);
									} else
										console.error(
											'wxPromoteManager - parseResponeseData - not find data'
										),
											(i = !1),
											(a = null);
									return void (r = !0);
								}
								2001 == t
									? console.error(
											'wxPromoteManager - parseResponeseData - \u53c2\u6570\u6821\u9a8c id\u4e0d\u80fd\u4e3a\u7a7a.'
									  )
									: 4004 == t
									? console.error(
											'wxPromoteManager - parseResponeseData - \u8bf7\u6c42\u65b9\u5f0f\u9519\u8bef \u53ea\u652f\u6301GET\u65b9\u5f0f\u8bf7\u6c42.'
									  )
									: 4006 == t
									? console.error(
											'wxPromoteManager - parseResponeseData - \u67e5\u8be2\u9519\u8bef\u6216\u67e5\u8be2\u6570\u636e\u4e3a\u7a7a.'
									  )
									: 4007 == t
									? (console.error(
											'wxPromoteManager - parseResponeseData - \u5fae\u4fe1\u6e38\u620f\u4e92\u63a8\u914d\u7f6e\u5df2\u5173\u95ed.'
									  ),
									  (r = !0))
									: console.log(
											'wxPromoteManager - parseResponeseData - \u672a\u77e5\u9519\u8bef.',
											e
									  );
							}
							(i = !1),
								(a = null),
								s.IS_DEBUG &&
									((i = !0),
									(a = [
										{
											gameName:
												'\u4e00\u8df3\u5230\u5e95',
											id: 'wx068ddd4abec43ab4',
											images: [
												'http://oss.leyungame.com/wx_push_img/03e947ff-246f-4da6-9ac2-490b5beddbd0.png',
												'http://oss.leyungame.com/wx_push_img/80a88fa2-5635-4571-bf06-5b27a887c0ee.png',
												'http://oss.leyungame.com/wx_push_img/67f8aee0-3874-4e7a-bfb2-39e23d4f4ffd.png'
											]
										},
										{
											gameName:
												'\u9752\u86d9\u8df3\u4e00\u8df3',
											id: 'wx2d9736d8e4c7ffc0',
											images: [
												'http://oss.leyungame.com/wx_push_img/03e947ff-246f-4da6-9ac2-490b5beddbd0.png',
												'http://oss.leyungame.com/wx_push_img/80a88fa2-5635-4571-bf06-5b27a887c0ee.png',
												'http://oss.leyungame.com/wx_push_img/67f8aee0-3874-4e7a-bfb2-39e23d4f4ffd.png'
											]
										},
										{
											gameName:
												'\u6eda\u52a8\u7684\u8ff7\u5bab',
											id: 'wx4aaa8e654c6e3e53',
											images: [
												'http://oss.leyungame.com/wx_push_img/03e947ff-246f-4da6-9ac2-490b5beddbd0.png',
												'http://oss.leyungame.com/wx_push_img/80a88fa2-5635-4571-bf06-5b27a887c0ee.png',
												'http://oss.leyungame.com/wx_push_img/67f8aee0-3874-4e7a-bfb2-39e23d4f4ffd.png'
											]
										},
										{
											gameName:
												'\u5f00\u5fc3\u70ae\u624b',
											id: 'wx6e9e54a4ab7a7d7c',
											images: [
												'http://oss.leyungame.com/wx_push_img/03e947ff-246f-4da6-9ac2-490b5beddbd0.png',
												'http://oss.leyungame.com/wx_push_img/80a88fa2-5635-4571-bf06-5b27a887c0ee.png',
												'http://oss.leyungame.com/wx_push_img/67f8aee0-3874-4e7a-bfb2-39e23d4f4ffd.png'
											]
										},
										{
											gameName:
												'\u738b\u8005\u795e\u5077',
											id: 'wx833bd8975758d115',
											images: [
												'http://oss.leyungame.com/wx_push_img/03e947ff-246f-4da6-9ac2-490b5beddbd0.png',
												'http://oss.leyungame.com/wx_push_img/80a88fa2-5635-4571-bf06-5b27a887c0ee.png',
												'http://oss.leyungame.com/wx_push_img/67f8aee0-3874-4e7a-bfb2-39e23d4f4ffd.png'
											]
										},
										{
											gameName:
												'\u8fdb\u51fb\u5427\u65b9\u5757',
											id: 'wxa626134f20d8f284',
											images: [
												'http://oss.leyungame.com/wx_push_img/03e947ff-246f-4da6-9ac2-490b5beddbd0.png',
												'http://oss.leyungame.com/wx_push_img/80a88fa2-5635-4571-bf06-5b27a887c0ee.png',
												'http://oss.leyungame.com/wx_push_img/67f8aee0-3874-4e7a-bfb2-39e23d4f4ffd.png'
											]
										},
										{
											gameName:
												'\u62c9\u9488\u6211\u6700\u725b',
											id: 'wxb244aee47d6402ad',
											images: [
												'http://oss.leyungame.com/wx_push_img/03e947ff-246f-4da6-9ac2-490b5beddbd0.png',
												'http://oss.leyungame.com/wx_push_img/80a88fa2-5635-4571-bf06-5b27a887c0ee.png',
												'http://oss.leyungame.com/wx_push_img/67f8aee0-3874-4e7a-bfb2-39e23d4f4ffd.png'
											]
										},
										{
											gameName:
												'\u679c\u51bb\u897f\u65bd',
											id: 'wxc90e45815ac7846c',
											images: [
												'http://oss.leyungame.com/wx_push_img/03e947ff-246f-4da6-9ac2-490b5beddbd0.png',
												'http://oss.leyungame.com/wx_push_img/80a88fa2-5635-4571-bf06-5b27a887c0ee.png',
												'http://oss.leyungame.com/wx_push_img/67f8aee0-3874-4e7a-bfb2-39e23d4f4ffd.png'
											]
										},
										{
											gameName:
												'\u8df3\u52a8\u7684\u7403\u7403',
											id: 'wxe2dd59a6efde47cd',
											images: [
												'http://oss.leyungame.com/wx_push_img/03e947ff-246f-4da6-9ac2-490b5beddbd0.png',
												'http://oss.leyungame.com/wx_push_img/80a88fa2-5635-4571-bf06-5b27a887c0ee.png',
												'http://oss.leyungame.com/wx_push_img/67f8aee0-3874-4e7a-bfb2-39e23d4f4ffd.png'
											]
										},
										{
											gameName:
												'\u524d\u4e16\u4eca\u751f\u8bb0',
											id: 'wxf59799c385d60a03',
											images: [
												'http://oss.leyungame.com/wx_push_img/03e947ff-246f-4da6-9ac2-490b5beddbd0.png',
												'http://oss.leyungame.com/wx_push_img/80a88fa2-5635-4571-bf06-5b27a887c0ee.png',
												'http://oss.leyungame.com/wx_push_img/67f8aee0-3874-4e7a-bfb2-39e23d4f4ffd.png'
											]
										}
									]));
						},
						isOpen: function () {
							return i;
						},
						getData: function () {
							return a;
						}
					},
					c = [];
				(s.getSpriteFrame = function (e, t) {
					void 0 === t && (t = function () {}),
						c[e]
							? 'function' == typeof t && t(c[e])
							: cc.loader.load(
									{ url: e, type: 'png' },
									function (n, o) {
										n
											? console.error(
													'PromoteManager - getSpriteFrame:',
													n
											  )
											: ((c[e] = new cc.SpriteFrame(o)),
											  'function' == typeof t &&
													t(c[e]));
									}
							  );
				}),
					(s.goToMini = function (e) {
						'object' == typeof wx &&
							'function' == typeof wx.navigateToMiniProgram &&
							wx.navigateToMiniProgram({ appId: e });
					}),
					(t.exports = s),
					cc._RF.pop();
			},
			{ './UtilNet': 'UtilNet' }
		],
		wxPromoteSidebar: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, 'd9922JG7qdH3LHDW9pZzuQW', 'wxPromoteSidebar');
				var n = e('./wxPromoteManager'),
					o = e('./wxPromoteItem');
				cc.Class({
					extends: cc.Component,
					properties: {
						prefabWXPromoteItem: cc.Prefab,
						nodePanel: cc.Node,
						scrollView: cc.ScrollView,
						nodeContent: cc.Node
					},
					onLoad: function () {
						var e = this;
						(this.node.active = !1),
							(ly.getPlatformType() ==
								ly.PlatformDefine.WeChatGame ||
								n.IS_DEBUG) &&
								((this.panelOriginPos =
									this.nodePanel.position),
								(this.panelTargetPos = cc.v2(
									this.panelOriginPos.x +
										this.nodePanel.width,
									this.panelOriginPos.y
								)),
								(this.isChangePanelStatus = !1),
								(this.isShowPanel = !1),
								n.init(),
								this.scheduleOnce(function () {
									if (n.isOpen()) {
										e.node.active || (e.node.active = !0);
										var t = n.getData();
										e.setBanner(t),
											e.scrollView.node.on(
												'scroll-began',
												e.scrollBegan,
												e
											),
											e.scrollView.node.on(
												'scroll-ended',
												e.scrollEnded,
												e
											);
									}
								}, 0.5));
					},
					scrollBegan: function () {
						var e = this.scrollView.getScrollOffset();
						this.lastScrollOffsetY = e.y;
					},
					scrollEnded: function () {
						var e = this.scrollView.getScrollOffset();
						this.lastScrollOffsetY > e.y
							? (this.yOffset = -n.SCROLL_SPEED)
							: (this.yOffset = n.SCROLL_SPEED);
					},
					onEnable: function () {
						this.resumeScroll();
					},
					onDisable: function () {
						this.pauseScroll();
					},
					onDestroy: function () {
						this.stopScrollAni();
					},
					startScrollAni: function () {
						var e = this;
						this.scheduleOnce(function () {
							var t = e.nodeContent.parent;
							t.height <= e.nodeContent.height &&
								((e.yOffset = n.SCROLL_SPEED),
								(e.yUp =
									e.nodeContent.y +
									(e.nodeContent.height - t.height)),
								(e.yBottom = e.nodeContent.y),
								e.schedule(e.updateScroll, n.INTERVAL_SCROLL));
						}, 0.5);
					},
					updateScroll: function (e) {
						this.isPauseScroll ||
							(this.nodeContent.y > this.yUp
								? ((this.nodeContent.y = this.yUp),
								  (this.yOffset = -n.SCROLL_SPEED))
								: this.nodeContent.y < this.yBottom &&
								  ((this.nodeContent.y = this.yBottom),
								  (this.yOffset = n.SCROLL_SPEED)),
							(this.nodeContent.y += this.yOffset),
							(this.updateIconInterval += e),
							this.updateIconInterval >= n.INTERVAL_UPDATE_ICON &&
								((this.updateIconInterval -=
									n.INTERVAL_UPDATE_ICON),
								this.promoteItems[
									Math.floor(
										Math.random() * this.promoteItems.length
									)
								].updateGameIcon()));
					},
					pauseScroll: function () {
						this.isPauseScroll = !0;
					},
					resumeScroll: function () {
						this.isPauseScroll = !1;
					},
					stopScrollAni: function () {
						this.unschedule(this.updateScroll);
					},
					setBanner: function (e) {
						(this.updateIconInterval = 0), (this.promoteItems = []);
						for (var t = 0; t < 4; t++)
							for (var n = 0; n < e.length; n++)
								this.addPromoteItem(e[n]);
						this.startScrollAni();
					},
					addPromoteItem: function (e) {
						var t = cc.instantiate(this.prefabWXPromoteItem);
						t.parent = this.nodeContent;
						var n = t.getComponent(o);
						n.setItem(e), this.promoteItems.push(n);
					},
					onClickedBtnMore: function () {
						var e = this;
						this.isChangePanelStatus ||
							((this.isChangePanelStatus = !0),
							this.showPromotePanel(
								!this.isShowPanel,
								function () {
									e.isChangePanelStatus = !1;
								}
							));
					},
					showPromotePanel: function (e, t, n) {
						var o = this;
						if (
							(void 0 === n && (n = 0.2),
							(this.isShowPanel = e),
							e)
						) {
							this.panelTargetPos.add(cc.v2(30, 0));
							var i = this.panelTargetPos;
							cc.tween(this.nodePanel)
								.call(function () {
									o.nodePanel.position = o.panelOriginPos;
								})
								.to(
									2 * n,
									{ position: i },
									{ easing: 'elasticOut' }
								)
								.call(function () {
									(o.nodePanel.position = o.panelTargetPos),
										'function' == typeof t && t();
								})
								.start();
						} else
							this.nodePanel.runAction(
								cc.sequence(
									cc.callFunc(function () {
										o.nodePanel.position = o.panelTargetPos;
									}),
									cc.moveTo(n, this.panelOriginPos),
									cc.callFunc(function () {
										(o.nodePanel.position =
											o.panelOriginPos),
											'function' == typeof t && t();
									})
								)
							);
					}
				}),
					cc._RF.pop();
			},
			{
				'./wxPromoteItem': 'wxPromoteItem',
				'./wxPromoteManager': 'wxPromoteManager'
			}
		],
		wxPromoteSplash: [
			function (e, t) {
				'use strict';
				cc._RF.push(t, '091c8ERfqFHm5nLTJk1eW8M', 'wxPromoteSplash');
				var n = e('./wxPromoteManager'),
					o = e('./wxPromoteItem');
				cc.Class({
					extends: cc.Component,
					properties: {
						prefabWXPromoteItem: cc.Prefab,
						prefabWXPromoteItemH: cc.Prefab,
						scrollViewH: cc.ScrollView,
						nodeContentH: cc.Node,
						scrollViewV: cc.ScrollView,
						nodeContentV: cc.Node,
						nameBGColorArr: [cc.Color]
					},
					onLoad: function () {
						var e = this;
						(this.scrollViewVItemCount = 0),
							(this.node.active = !1),
							(ly.getPlatformType() ==
								ly.PlatformDefine.WeChatGame ||
								n.IS_DEBUG) &&
								(n.init(),
								this.scheduleOnce(function () {
									if (n.isOpen()) {
										e.node.active || (e.node.active = !0);
										var t = n.getData();
										e.setPromoteDataH(t),
											e.scrollViewH.node.on(
												'scroll-began',
												e.scrollBeganH,
												e
											),
											e.scrollViewH.node.on(
												'scroll-ended',
												e.scrollEndedH,
												e
											),
											e.setPromoteDataV(t),
											e.scrollViewV.node.on(
												'scroll-began',
												e.scrollBeganV,
												e
											),
											e.scrollViewV.node.on(
												'scroll-ended',
												e.scrollEndedV,
												e
											);
									}
								}, 0.5));
					},
					onEnable: function () {
						this.resumeScrollH(), this.resumeScrollV();
					},
					onDisable: function () {
						this.pauseScrollH(), this.pauseScrollV();
					},
					onDestroy: function () {
						this.stopScrollAniH(), this.stopScrollAniV();
					},
					scrollBeganH: function () {
						var e = this.scrollView.getScrollOffset();
						this.lastScrollOffsetX = e.x;
					},
					scrollEndedH: function () {
						var e = this.scrollView.getScrollOffset();
						this.lastScrollOffsetX > e.x
							? (this.xOffset = -n.SCROLL_SPEED)
							: (this.xOffset = n.SCROLL_SPEED);
					},
					startScrollAni: function () {
						var e = this;
						this.scheduleOnce(function () {
							var t = e.nodeContentH.parent;
							t.width <= e.nodeContentH.width &&
								((e.xOffset = n.SCROLL_SPEED),
								(e.xRight = e.nodeContentH.x),
								(e.xLeft =
									e.nodeContentH.x -
									(e.nodeContentH.width - t.width)),
								e.schedule(e.updateScrollH, n.INTERVAL_SCROLL));
						}, 0.5);
					},
					updateScrollH: function (e) {
						this.isPauseScroll ||
							(this.nodeContentH.x > this.xRight
								? ((this.nodeContentH.x = this.xRight),
								  (this.xOffset = -n.SCROLL_SPEED))
								: this.nodeContentH.x < this.xLeft &&
								  ((this.nodeContentH.x = this.xLeft),
								  (this.xOffset = n.SCROLL_SPEED)),
							(this.nodeContentH.x += this.xOffset),
							(this.updateIconIntervalH += e),
							this.updateIconIntervalH >=
								n.INTERVAL_UPDATE_ICON &&
								((this.updateIconIntervalH -=
									n.INTERVAL_UPDATE_ICON),
								this.promoteItemsH[
									Math.floor(
										Math.random() *
											this.promoteItemsH.length
									)
								].updateGameIcon()),
							(this.updateIconIntervalV += e),
							this.updateIconIntervalV >=
								n.INTERVAL_UPDATE_ICON &&
								((this.updateIconIntervalV -=
									n.INTERVAL_UPDATE_ICON),
								this.promoteItemsV[
									Math.floor(
										Math.random() *
											this.promoteItemsV.length
									)
								].updateGameIcon()));
					},
					pauseScrollH: function () {
						this.isPauseScroll = !0;
					},
					resumeScrollH: function () {
						this.isPauseScroll = !1;
					},
					stopScrollAniH: function () {
						this.unschedule(this.updateScrollH);
					},
					setPromoteDataH: function (e) {
						(this.updateIconIntervalH = 0),
							(this.promoteItemsH = []);
						for (var t = 0; t < e.length; t++)
							this.addPromoteItemH(e[t]);
						this.startScrollAni();
					},
					addPromoteItemH: function (e) {
						var t = cc.instantiate(this.prefabWXPromoteItemH);
						t.parent = this.nodeContentH;
						var n = t.getComponent(o);
						n.setItem(e), this.promoteItemsH.push(n);
					},
					scrollBeganV: function () {
						var e = this.scrollViewV.getScrollOffset();
						this.lastScrollOffsetY = e.y;
					},
					scrollEndedV: function () {
						var e = this.scrollViewV.getScrollOffset();
						this.lastScrollOffsetY > e.y
							? (this.yOffset = -n.SCROLL_SPEED)
							: (this.yOffset = n.SCROLL_SPEED);
					},
					startScrollAniV: function () {
						var e = this;
						this.scheduleOnce(function () {
							var t = e.nodeContentV.parent;
							t.height <= e.nodeContentV.height &&
								((e.yOffset = n.SCROLL_SPEED),
								(e.yUp =
									e.nodeContentV.y +
									(e.nodeContentV.height - t.height)),
								(e.yBottom = e.nodeContentV.y),
								e.schedule(e.updateScrollV, n.INTERVAL_SCROLL));
						}, 0.5);
					},
					updateScrollV: function () {
						this.isPauseScroll ||
							(this.nodeContentV.y > this.yUp
								? ((this.nodeContentV.y = this.yUp),
								  (this.yOffset = -n.SCROLL_SPEED))
								: this.nodeContentV.y < this.yBottom &&
								  ((this.nodeContentV.y = this.yBottom),
								  (this.yOffset = n.SCROLL_SPEED)),
							(this.nodeContentV.y += this.yOffset));
					},
					pauseScrollV: function () {
						this.isPauseScroll = !0;
					},
					resumeScrollV: function () {
						this.isPauseScroll = !1;
					},
					stopScrollAniV: function () {
						this.unschedule(this.updateScrollV);
					},
					setPromoteDataV: function (e) {
						(this.updateIconIntervalV = 0),
							(this.promoteItemsV = []);
						for (var t = 0; t < 4; t++)
							for (var n = 0; n < e.length; n++)
								this.addPromoteItemV(e[n]);
						this.startScrollAniV();
					},
					addPromoteItemV: function (e) {
						var t = cc.instantiate(this.prefabWXPromoteItem);
						t.parent = this.nodeContentV;
						var n =
							this.scrollViewVItemCount %
							this.nameBGColorArr.length;
						(t
							.getChildByName('content')
							.getChildByName('nameBG').color =
							this.nameBGColorArr[n]),
							this.scrollViewVItemCount++;
						var i = t.getComponent(o);
						i.setItem(e), this.promoteItemsV.push(i);
					},
					setCloseCallfunc: function (e) {
						this._closeCallfunc = e;
					},
					onClickedBtnClose: function () {
						(this.node.active = !1),
							'function' == typeof this._closeCallfunc &&
								this._closeCallfunc(),
							(this._closeCallfunc = null);
					}
				}),
					cc._RF.pop();
			},
			{
				'./wxPromoteItem': 'wxPromoteItem',
				'./wxPromoteManager': 'wxPromoteManager'
			}
		]
	},
	{},
	[
		'YYGplatform',
		'BaiDuAppBoxAd',
		'ExpressAdComponent',
		'FeedbackBtn',
		'LNGcommon',
		'LyConcealAdConfig',
		'LyConfig',
		'LyControl',
		'LyProbability',
		'LyUtils',
		'LyVideoSpControl',
		'Mcomm',
		'MiniGameControl',
		'NativeChannelControl',
		'NativeLianYunControl',
		'OppoAd',
		'PrivacyBtn',
		'ProtocalBtn',
		'RecorderAd',
		'ToastScript',
		'UtilNet',
		'VivoAd',
		'VivoDatas',
		'baiDuAd',
		'baseAdNode',
		'btnBreathAnim',
		'btnDelayShow',
		'btnOppogdjc',
		'btnScaleAnim',
		'expressAd',
		'gameSaveFishAddCoinBtn',
		'gameSaveFishAddCoinLayer',
		'gameSaveFishAnimPin',
		'gameSaveFishBoxLayer',
		'gameSaveFishBoxNode',
		'gameSaveFishCoinFlyAnim',
		'gameSaveFishConcatBase',
		'gameSaveFishCrab',
		'gameSaveFishCreateCount',
		'gameSaveFishDirtyWater',
		'gameSaveFishEditScene',
		'gameSaveFishEditScene2',
		'gameSaveFishElemMoveControl',
		'gameSaveFishFish',
		'gameSaveFishGameConfig',
		'gameSaveFishGameData',
		'gameSaveFishGameEndLayer',
		'gameSaveFishGameManager',
		'gameSaveFishGameUtils',
		'gameSaveFishGuideLayer',
		'gameSaveFishHomeManager',
		'gameSaveFishLoadingScene',
		'gameSaveFishLockFishLayer',
		'gameSaveFishMainScene',
		'gameSaveFishNodePoolUtils',
		'gameSaveFishPin',
		'gameSaveFishPoint',
		'gameSaveFishRotationPin',
		'gameSaveFishSelectFishLayer',
		'gameSaveFishSelectItem',
		'gameSaveFishSettingLayer',
		'gameSaveFishTouchMovePin',
		'gameSaveFishVideoLayer',
		'gameSaveFishViewControl',
		'gameSaveFishVirus',
		'gameSaveFishWater',
		'gameSaveFishWoodSwitch',
		'gameSaveFishlvManager',
		'handNodeAnim',
		'leYunGame',
		'lygame',
		'oppoBigPicAd',
		'oppoIconAd',
		'oppoMoreGame',
		'oppoReBannerAd',
		'oppoReNineAd',
		'oppoShortcutInstalled',
		'protocalHallLayer',
		'protocalLayer',
		'qqBlockAd',
		'qqBox',
		'qqModule',
		'vivoBigPicAd',
		'vivoIconAd',
		'vivoMoreGame',
		'vivoReBannerAd',
		'vivoReNineAd',
		'vivoShortcutInstalled',
		'vivoSudokuAd',
		'wxBox',
		'wxBoxBanner',
		'wxModule',
		'wxPromoteBanner',
		'wxPromoteFloat',
		'wxPromoteInterstitial',
		'wxPromoteItem',
		'wxPromoteManager',
		'wxPromoteSidebar',
		'wxPromoteSplash'
	]
);

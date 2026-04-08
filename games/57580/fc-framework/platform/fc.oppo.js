window.fc = window.fc || {}, window.fc.platform = window.fc.platform || {},
	function(e, t) {
		"use strict";
		var i = fc.define.Event,
			o = fc.define.SceneId,
			s = fc.framework.Audio,
			a = fc.framework.GameFrame,
			n = fc.framework.Channel,
			r = fc.plugin.BannerCtrl,
			c = fc.plugin.BlockAdCtrl,
			d = fc.plugin.AdditiveUICtrl,
			l = fc.view.ActivityCenter;
		t.ClassUtils.regClass("fc.oppo.UserPrivacyPage", class extends fc.plugin.BaseView {
			constructor() {
				super(), this.agreement = null, this.okBtn = null, this.noBtn = null, this.privacyBtn = null, this.txt = null, this.prevX = 0, this.prevY = 0, this.middleUI = null, this.isLoading = !0
			}
			initView(e) {
				e && null != e.isLoading && (this.isLoading = e.isLoading)
			}
			onAwake() {
				super.onAwake(), fc.view.linkView2Script(this, this.owner, ["okBtn", "agreement", "noBtn", "privacyBtn", "middleUI"]), this.okBtn.on(t.Event.CLICK, this, this.onAgreeAd), this.noBtn.on(t.Event.CLICK, this, this.onCloseView), this.privacyBtn.on(t.Event.CLICK, this, this.openPrivacy)
			}
			onStart() {
				super.onStart();
				let e = this.agreement.text;
				e = e.replace("南京奇卡信息科技有限公司", a.pluginCfg.pg_company_name || "南京奇卡信息科技有限公司"), this.agreement.text = e, this.isLoading ? this.noBtn.text = "Disagree with " : this.noBtn.text = "Close", this.isLoading && a.playerInfo.isAgreeAd && 1 == a.playerInfo.isAgreeAd && a.closeView(this.owner)
			}
			onDestroy() {
				super.onDestroy(), this.okBtn.off(t.Event.CLICK, this, this.onAgreeAd), this.noBtn.off(t.Event.CLICK, this, this.onCloseView), this.privacyBtn.off(t.Event.CLICK, this, this.openPrivacy)
			}
			onCloseView() {
				a.playClickSound(), this.isLoading ? window.fc.adapter.Channel.exitApplication() : a.closeView(this.owner)
			}
			onAgreeAd() {
				a.playClickSound(), a.savePlayerInfo({
					isAgreeAd: 1
				}), console.log(a.playerInfo.isAgreeAd, "===========保存用户选择=================="), a.closeView(this.owner)
			}
			openPrivacy() {
				a.playClickSound(), this.createText()
			}
			createText() {
				this.txt = new t.Text, this.txt.overflow = t.Text.SCROLL;
				let e = "用户隐私政策条款\n发布日期：2021年9月1日\n生效日期：2021年9月1日\n南京奇卡信息科技有限公司（以下称“我们”或“本公司”）注重保护用户个人隐私。本《用户隐私政策条款》（以下简称本条款解释了用户（“您”）个人信息（以下称“信息”）收集和使用的有关情况，本条款与您使用本 公司提供的所有服务（包括但不限于游戏服务）息息相关，您应仔细阅读并确认您已充Min理解且同意本条款内容。如果您Disagree with 本条款的任何内容，您应立即停止使用本公司的服务。当您使用或继续使用本公司提供的任一服务时，即表示您已同意我们按照本条款来合法收集、使用和保护您的个人信息。\n    本条款包含如下内容：\n    一、我们收集您的如下信息\n   二、我们按照以下原则存储您的信息\n   三、我们通过以下方式使用您的信息\n    四、我们在以下方面共享您的信息\n    五、您可以通过如下方式管理您的信息\n    六、我们通过如下措施管理保护您的信息\n    七、我们对未成年人个人信息的保护\n    八、修订与通知\n     一、我们收集您的如下信息    在您使用本公司游戏服务的过程中，本公司会按照如下方式收集您在使用服务时主动提供的或因为使用服务而产生的信息，用以向您提供、优化我们的服务以及保障您的账户安全：  当您注册或使用本公司的游戏服务时，我们会收集您的网络身份标识信息及个人常用设备信息，用于标记您为本公司的游戏用户。如果您使用微信或QQ关联登录我们的游戏，我们会收集您微信或QQ的唯一标识、头像、昵称，用于保存您的登录信息，以便您在不同设备登录。 为了更好地向您提供游戏服务，改善游戏体验，我们可对您QQ帐号、微信账号或游戏账号中的昵称、头像以及在本公司运营的游戏中的相关操作信息、游戏信息等信息（以下称“该等信息”。该等信息具体包括但不限于您的登录状态、对战信息/状态、成就信息等）进行收集和使用，并可向您本人或其他用户或好友展示该等信息。我们可能会视游戏产品具体情况为您提供相关权限，以便您可以对是否展示前述相关信息进行相应设置。 为满足相关法律法规政策及相关主管部门的要求，游戏用户需进行实名认证以继续使用和享受我们的游戏。我们会在获得您同意或您主动提供的情况下收集您的实名身份信息（包括姓名、身份证号、照片等信息），该信息属于敏感信息，拒绝提供实名身份信息可能会导致您无法登陆本公司游戏或在使用本公司游戏过程中受到相应限制。除此之外，您可以根据自身需求选择填写性别、地区等信息。 为保障您正常使用我们的服务，维护游戏基础功能的正常运行，优化游戏产品性能，提升您的游戏体验并保障您的账号安全，我们会收集您的设备信息（包括设备ID、设备名称、设备类型和版本、系统版本、IP地址、MAC地址、应用ID、网络类型等）。 当您使用我们的游戏服务时，我们会收集您的游戏日志信息，例如登录日志、物品日志、游戏对局信息、交友记录等，以便您能够在客户端查看您的游戏历史记录，同时用于游戏运营统计Min析、客服投诉处理及其他游戏安全Min析，并为提升您的游戏体验，我们可能把前述信息同步至该游戏后续版本或您正在使用的我们提供的其他产品中。 当您使用游戏产品的消费功能时，我们会收集您的充值记录、消费记录等信息，以便您查询您的交易记录，同时尽最大程度保护您的虚拟物品安全。充值记录、消费记录属于敏感信息，收集上述信息为实现游戏产品的消费功能所必须，否则将无法完成交易。 为保障您的游戏账号安全，营造公平、健康及安全的游戏环境，我们会收集您的游戏识别信息、硬件及操作系统信息、进程及游戏崩溃记录等信息，以用于打击破坏游戏公平环境或干扰、破坏游戏服务正常进行的行为（如用于检测盗版、扫描外挂、防止作弊等）。 当您在游戏中通过文字、图片、语音、视频及其他方式与其他玩家进行互动，我们可能会收集并保存您发送的上述信息内容用于过滤色情、暴力、政治、辱骂、恶意广告等不当内容，以此净化游戏环境，维护健康的上网环境。 如您希望与附近的游戏玩家互动，在您授权同意后，我们会收集您的地理位置信息，用于寻找附近的游戏玩家，以便您与附近的玩家匹配、组队等。地理位置信息属于敏感信息，拒绝提供该信息只会导致您无法实现与附近的游戏玩家互动，但不影响您正常使用游戏的其他功能，您也可以随时Cancel您的地理位置信息授权。 根据相关法律法规及国家标准，以下情形中，我们可能会收集、使用您的相关个人信息而无需征求您的授权同意： 与国家安全、国防安全等国家利益直接相关的；与公共安全、公共卫生、公共知情等重大公共利益直接相关的； 与犯罪侦查、起诉、审判和判决执行等直接相关的； 出于维护您或其他个人的生命、财产、声誉等重大合法权益但又很难得到本人同意的； 所收集的个人信息是您自行向社会公众公开的； 从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道； 根据您要求签订和履行合同所必需的； 用于维护所提供的产品或服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障； 为开展合法的新闻报道所必需的； 出于公共利益开展统计或学术研究所必要，且其对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的； 法律法规规定的其他情形。 请您理解，我们向您提供的功能和服务是不断更新和发展的，如果某一功能或服务未在前述说明中且收集了您的信息，我们会通过页面Tips、交互流程、网站公告等方式另行向您说明信息收集的内容、范围和目的，以征得您的同意。\n    二、我们按照以下原则存储您的信息  我们会通过安全的方式存储您的信息，包括本地存储（例如利用APP进行数据缓存）、数据库和服务器日志。一般情况下，我们只会在为实现服务目的所必需的时间内或法律法规规定的条件下存储您的个人信息。 我们会按照法律法规规定，将境内收集的用户个人信息存储于中国境内。 当我们的产品或服务发生停止运营的情况时，我们将根据相关法律法规规定进行公告通知，并依法保障您的合法权益。 \n   三、我们通过以下方式使用您的信息  您登录游戏时，我们使用您提供的账号等网络身份标识信息，用于识别和（或）确认您的身份。 我们会根据您的信息向您提供、维护、改进我们的服务，使我们的服务更能符合您的要求，让您在使用我们的服务时获得更好地体验。 我们会对您的服务使用情况信息进行统计，以展示我们产品或服务的整体使用趋势。但这些统计信息中不包含您的任何身份识别信息。 我们将会在本条款所涵盖的用途内使用收集的信息。如我们使用您的个人信息超出了与收集时所声称的目的及具有直接或合理关联的范围，我们将在使用您的个人信息前，再次向您告知并征得您的明示同意。\n    四、我们在以下方面共享您的信息  您Min享的信息  我们的很多服务都允许您与其他人Min享您的相关信息，并且您可以控制Min享的方式。您可以按照我们服务中的设置或我们提供的指引删除您公开Min享的信息。但请注意，这些Min享信息可能由其他用户或不受我们控制的第三方独立地保存。  您的个人信息是我们为您提供服务的重要部Min，我们会遵循法律规定对您的信息承担保密义务。除以下情形外，我们不会将您的信息披露给第三方： 我们会为了协助解决争议而向投诉人/被投诉人披露您的信息，以便双方处理可能产生的权利纠纷。 您出现违反中国有关法律、法规规定或者违反您与本公司签署的协议（包括在线签署的电子协议）时需要向第三方披露的情形。 根据法律法规的规定或行政或司法机构的要求，对外披露您的信息。 经过您的授权或同意的其他需要共享您信息的情况。\n    五、您可以通过如下方式管理您的信息    在您使用我们的游戏服务期间，我们可能会视游戏产品具体情况为您提供相应的操作设置，以便您可以查询、删除、更新或撤回您的相关个人信息，您可参考相应游戏产品的具体指引进行操作。\n     六、我们通过如下措施管理保护您的信息    本公司严格保护您的信息安全。我们将提供如下方法管理保护您的信息：  我们使用各种管理制度、安全制度等来管理规范您信息的存储和使用。 我们采用符合标准的安全防护措施，信息加密等技术措施，来防止您的信息遭到未经授权的访问、使用、修改，避免您信息的损坏或丢失。 请您妥善保护自己的信息，仅在必要的情形下向他人提供。如您发现自己的信息泄密，尤其是你的账户及密码发生泄露，请您立即联络我们的客服，以便我们采取相应措施。\n    七、我们对未成年人个人信息的保护    我们非常重视对未成年人个人信息的保护。如果您是未成年人，在使用我们的游戏前，您应取得您父母或法定监护人的同意。我们将根据国家相关法律法规的规定保护您的信息。    我们只会在法律允许、父母或法定监护人明确同意或保护未成年人所必要的情况下使用或公开披露此信息。    我们会积极按照国家防沉迷政策要求，通过启动防沉迷系统保护未成年人的合法权益。我们会通过实名身份等信息校验判断相关账号的实名信息是否为未成年人，进而决定是否将此账号纳入到防沉迷体系中。另外，我们会收集您的登录时间、游戏时长等信息，通过从系统层面自动干预和限制未成年人游戏时间、启用强制下线功能等方式，引导未成年人合理游戏，并在疑似未成年人消费后尝试联系其监护人进行提醒、确认与处理，帮助未成年人健康上网。\n     八、修订与通知    为给你提供更好的服务，服务内容将不时变化，本条款也将随之调整。我们在调整后的条款生效前会在相关服务中发出更新公告并提醒您相关内容的更新，也请您访问相关官方网站以便及时了解最新的隐私条款。\n  联系邮箱：2847925549@qq.com";
				e = e.replace("南京奇卡信息科技有限公司", a.pluginCfg.pg_company_name || "南京奇卡信息科技有限公司"), this.txt.text = e, this.txt.size(this.middleUI.getChildAt(0)
						.width - 60, this.okBtn.y - this.middleUI.getChildAt(0)
						.y - 60), this.txt.x = this.middleUI.width - this.txt.width >> 1, this.txt.y = this.middleUI.getChildAt(0)
					.y + 40, this.txt.borderColor = "#FFFF00", this.txt.bgColor = "#FFFFFF", this.txt.fontSize = 25, this.txt.color = "#000000", this.middleUI.addChild(this.txt), this.txt.wordWrap = !0, this.txt.zOrder = 10, this.txt.on(t.Event.MOUSE_DOWN, this, this.startScrollText)
			}
			startScrollText(e) {
				this.prevX = this.txt.mouseX, this.prevY = this.txt.mouseY, t.stage.on(t.Event.MOUSE_MOVE, this, this.scrollText), t.stage.on(t.Event.MOUSE_UP, this, this.finishScrollText)
			}
			finishScrollText(e) {
				t.stage.off(t.Event.MOUSE_MOVE, this, this.scrollText), t.stage.off(t.Event.MOUSE_UP, this, this.finishScrollText)
			}
			scrollText(e) {
				var t = this.txt.mouseX,
					i = this.txt.mouseY;
				this.txt.scrollX += this.prevX - t, this.txt.scrollY += this.prevY - i, this.prevX = t, this.prevY = i
			}
		});
		t.ClassUtils.regClass("fc.view.UserPrivacyBtn", class extends t.Script {
			constructor() {
				super(), this.clickTime = 0
			}
			onAwake() {
				this.owner.mouseEnabled = !0,
				this.owner.visible = false
			}
			onStart() {}
			onClick() {
				// a.playClickSound(), a.openView("UserPrivacy", {
				// 	isLoading: !1
				// })
				console.log("是你吗")
			}
		});
		t.ClassUtils.regClass("fc.view.CustomAdPage", class extends fc.plugin.BaseView {
			constructor() {
				super(), this.outTime = !1
			}
			onAwake() {
				super.onAwake(), this.owner.visible = !1, console.log("CustomAdPage loaded"), n.createCustomAd(t.Handler.create(this, this.closeView), a.pluginCfg.pg_custom_adunit, 0, 0, 0), n.loadCustomAd(t.Handler.create(this, this.onAdLoaded), t.Handler.create(this, this.closeView)), this.owner.timerOnce(5e3, this, this.onLoadOutTime), t.stage.on(i.UI_VIEW_CLOSED, this, this.onViewClosed)
			}
			onLoadOutTime() {
				this.outTime = !0, this.closeView()
			}
			onAdLoaded() {
				console.log("customad ready"), this.outTime ? console.log("customad load out time") : (this.owner.visible = !0, this.owner.clearTimer(this, this.onLoadOutTime))
			}
			onViewClosed(e, t) {
				"CustomAd" != t && (this.outTime = !0, this.owner.frameOnce(1, this, this.closeView))
			}
			onDestroy() {
				// console.log("customad onDestroy"), t.stage.off(i.UI_VIEW_CLOSED, this, this.onViewClosed), n.destroyCustomAd(), super.onDestroy()
			}
			closeView() {
				// console.log("原生模板插屏广告关闭----------------"), t.MouseManager.enabled = !0, n.destroyCustomAd(), a.closeView(this.owner)
			}
		});
		t.ClassUtils.regClass("fc.view.CustomBannerAdPage", class extends fc.plugin.BaseView {
			constructor() {
				super(), this.outTime = !1, this.switch = 0
			}
			onAwake() {
				super.onAwake(), l.isNativeActive() ? (t.stage.on(i.UI_VIEW_CLOSED, this, this.onViewClosed), t.stage.on(i.DEVICE_SHOW, this, this.onAppShow), t.stage.on(i.HIDE_NATIVEBANNER, this, this.hideNativeBanner), t.stage.on(i.SHOW_NATIVEBANNER, this, this.showNativeBanner), this.switch = a.pluginCfg.pg_custom_change_switch || 0, 0 == this.switch && this.loadAd(), this.owner.timerLoop(a.pluginCfg.pg_banner_refresh_time, this, this.loadAd, null, !1)) : (n.showBannerAd(), this.owner.frameOnce(1, this, this.closeView))
			}
			loadAd() {
				this.owner.visible = !1, console.log("CustomBannerAdPage loaded"), n.createCustomAd(t.Handler.create(this, this.onAdLoadedFailed), 0 == this.switch ? a.pluginCfg.pg_leftright_adunit : a.pluginCfg.pg_custom_adunit, 0, 0, 1), n.loadCustomAd(t.Handler.create(this, this.onAdLoaded), t.Handler.create(this, this.onAdLoadedFailed))
			}
			onAdLoaded() {
				console.log("customad ready"), this.outTime ? console.log("customad load out time") : this.owner.visible = !0
			}
			onAdLoadedFailed() {
				this.owner.clearTimer(this, this.loadAd), this.owner.timerLoop(a.pluginCfg.pg_banner_refresh_time, this, this.loadAd, null, !1)
			}
			closeView() {
				console.log("原生模板插屏广告关闭----------------"), n.destroyCustomAd(), a.closeView(this.owner)
			}
			onDestroy() {
				n.destroyCustomAd(), super.onDestroy(), t.stage.off(i.DEVICE_SHOW, this, this.onAppShow), t.stage.off(i.UI_VIEW_CLOSED, this, this.onViewClosed), t.stage.off(i.HIDE_NATIVEBANNER, this, this.hideNativeBanner), t.stage.off(i.SHOW_NATIVEBANNER, this, this.showNativeBanner), this.owner.clearTimer(this, this.loadAd)
			}
			hideNativeBanner() {
				this.owner.visible = !1, this.owner.clearTimer(this, this.loadAd), n.destroyCustomAd()
			}
			showNativeBanner() {
				this.owner.visible = !0, this.onAppShow()
			}
			onAppShow() {
				this.owner.clearTimer(this, this.loadAd), 0 == this.switch && this.loadAd(), this.owner.timerLoop(a.pluginCfg.pg_banner_refresh_time, this, this.loadAd, null, !1)
			}
			onViewClosed(e, t) {
				t != fc.view.ViewId.NativeAdb && t != fc.view.ViewId.NativeAdm && t != fc.view.ViewId.NativeAdn && t != fc.view.ViewId.Sign && t != fc.view.ViewId.Turntable && t != fc.view.ViewId.Store && t != fc.view.ViewId.NativeBannerAd && t != fc.view.ViewId.NativeAdbOppo && t != fc.view.ViewId.NativeAdi && (this.isAdReady = !0, this.owner.frameOnce(1, this, this.closeView))
			}
		});
		var h = {
				Award: {
					url: "fc-layout/view/AwardPage.scene",
					script: "fc.view.AwardPage"
				},
				Loading: {
					url: "fc-layout/view/LoadingPage.scene",
					script: "fc.view.LoadingPage"
				},
				Home: {
					url: "fc-layout/view/HomePage.scene",
					script: "fc.view.HomePage"
				},
				Game: {
					url: "fc-layout/view/GamePage.scene",
					script: "fc.view.GamePage"
				},
				Success: {
					url: "fc-layout/view/SuccessPage.scene",
					script: "fc.view.SuccessPage"
				},
				Failed: {
					url: "fc-layout/view/FailedPage.scene",
					script: "fc.view.FailedPage"
				},
				AdHome: {
					url: "fc-layout/view/AdHomePage.scene",
					script: "fc.view.AdHomePage"
				},
				MoreInfo: {
					url: "fc-layout/view/MoreInfoPage.scene",
					script: "fc.view.MoreInfoPage"
				},
				Knock: {
					url: "fc-layout/view/KnockPage.scene",
					script: "fc.view.KnockPage"
				},
				Sign: {
					url: "fc-layout/view/SignPage.scene",
					script: "fc.view.SignPage"
				},
				Store: {
					url: "fc-layout/view/StorePage.scene",
					script: "fc.view.StorePage"
				},
				Strength: {
					url: "fc-layout/view/StrengthPage.scene",
					script: "fc.view.StrengthPage"
				},
				SecretBox: {
					url: "fc-layout/view/SecretBoxPage.scene",
					script: "fc.view.SecretBoxPage"
				},
				SecretAward: {
					url: "fc-layout/view/SecretAwardPage.scene",
					script: "fc.view.SecretAwardPage"
				},
				ShareRec: {
					url: "fc-layout/view/ShareRecPage.scene",
					script: "fc.view.ShareRecPage"
				},
				Trial: {
					url: "fc-layout/view/TrialPage.scene",
					script: "fc.view.TrialPage"
				},
				Turntable: {
					url: "fc-layout/view/TurntablePage.scene",
					script: "fc.view.TurntablePage"
				},
				InsertAd: {
					url: "fc-layout/view/VideoPage.scene",
					script: "fc.view.InsertAdPage"
				},
				FullScreenAd: {
					url: "fc-layout/view/VideoPage.scene",
					script: "fc.view.FullScreenAdPage"
				},
				NativeAdbOppo: {
					url: "fc-layout/view/NativeAdbPageOppo.scene",
					script: "fc.view.NativeAdPage"
				},
				NativeAdb: {
					url: "fc-layout/view/NativeAdbPage.scene",
					script: "fc.view.NativeAdPage"
				},
				NativeAdm: {
					url: "fc-layout/view/NativeAdmPage.scene",
					script: "fc.view.NativeAdPage"
				},
				NativeAdn: {
					url: "fc-layout/view/NativeAdnPage.scene",
					script: "fc.view.NativeAdPage"
				},
				NativeAdi: {
					url: "fc-layout/view/NativeAdiPage.scene",
					script: "fc.view.NativeAdPage"
				},
				NativeBannerAd: {
					url: "fc-layout/view/NativeAdBannerPage.scene",
					script: "fc.view.NativeBannerAdPage"
				},
				UserPrivacy: {
					url: "fc-layout/view/UserPrivacyPage.scene",
					script: "fc.view.UserPrivacyPage"
				},
				ChooseSkillAd: {
					url: "fc-layout/view/ChooseSkillPage.scene",
					script: "fc.view.ChooseSkillPage"
				},
				CustomBannerAd: {
					url: "fc-layout/view/EmptyPage.scene",
					script: "fc.view.CustomBannerAdPage"
				},
				CustomAd: {
					url: "fc-layout/view/NativeCustomAdPage.scene",
					script: "fc.view.CustomAdPage"
				},
				HomeSetting: {
					url: "fc-layout/view/HomeSettingPage.scene",
					script: "fc.view.HomeSettingPage"
				},
				GameSetting: {
					url: "fc-layout/view/GameSettingPage.scene",
					script: "fc.view.GameSettingPage"
				}
			},
			p = {
				loading: {
					type: "sequence",
					array: [{
						viewId: "Loading"
					}, {
						viewId: "UserPrivacy",
						checkCode: 100,
						zOrder: 2
					}]
				},
				home: {
					type: "sync",
					array: [{
						viewId: "Home",
						zOrder: 1
					}, {
						viewId: "Sign",
						checkCode: 1,
						zOrder: 2
					}, {
						viewId: "Store",
						checkCode: 2,
						zOrder: 2,
						delay: 200
					}]
				},
				prepare: {
					type: "sync",
					array: [{
						viewId: "CustomAd",
						checkCode: 9,
						zOrder: 1
					}, {
						viewId: "Trial",
						checkCode: 3,
						zOrder: 0
					}]
				},
				game: {
					type: "sync",
					array: [{
						viewId: "Game"
					}]
				},
				showSuccess: {
					type: "sync",
					array: [{
						viewId: "CustomAd",
						checkCode: 10,
						zOrder: 1
					}, {
						viewId: "SecretAward",
						checkCode: 7,
						zOrder: 0,
						delay: 1e3
					}]
				},
				showFailed: {
					type: "sync",
					array: [{
						viewId: "CustomAd",
						checkCode: 7,
						zOrder: 1
					}, {
						viewId: "SecretBox",
						checkCode: 7,
						zOrder: 0,
						delay: 1e3
					}]
				},
				success: {
					type: "sequence",
					array: [{
						viewId: "Success"
					}]
				},
				failed: {
					type: "sequence",
					array: [{
						viewId: "Failed"
					}]
				},
				over: {
					type: "sequence",
					array: []
				}
			},
			w = {
				Failed: {
					x: 0,
					y: 270,
					size: 5,
					delay: 10
				},
				Success: {
					x: 0,
					y: 270,
					size: 5,
					delay: 10
				}
			},
			g = {
				Home: {
					delay: 10
				}
			},
			v = {
				Loading: [{
					viewUrl: "fc-layout/prefab/additive/Agerating8.json",
					parentRoot: "middleUI",
					x: 0,
					y: 500
				}],
				Home: [{
					viewUrl: "fc-layout/prefab/additive/GoldShowAdd.json",
					parentRoot: "topUI",
					x: 32,
					y: 60,
					scriptType: "fc.view.GoldShowAdd"
				}, {
					viewUrl: "fc-layout/prefab/additive/StrengthShowAdd.json",
					parentRoot: "topUI",
					x: 32,
					y: 150,
					scriptType: "fc.view.StrengthShowAdd",
					checkCode: 2
				}, {
					viewUrl: "fc-layout/prefab/additive/MoreRecommendBtn.json",
					parentRoot: "middleUI",
					x: 42,
					y: 331,
					scriptType: "fc.view.MoreGameBoxBtn"
				}, {
					viewUrl: "fc-layout/prefab/additive/StartGame.json",
					parentRoot: "bottomUI",
					x: 375,
					y: 359,
					scriptType: "fc.view.AniLoopPlay"
				}, {
					viewUrl: "fc-layout/prefab/additive/UserPrivacyBtn.json",
					parentRoot: "middleUI",
					x: 0,
					y: 160,
					scriptType: "fc.view.UserPrivacyBtn"
				}, {
					viewUrl: "fc-layout/prefab/additive/SettingBtn.json",
					parentRoot: "topUI",
					x: 700,
					y: 150,
					scriptType: "fc.view.HomeSettingBtn"
				}],
				HomeSetting: [{
					viewUrl: "fc-layout/prefab/additive/UserPrivacyTextBtn.json",
					parentRoot: "middleUI",
					x: 375,
					y: 330,
					scriptType: "fc.view.UserPrivacyBtn"
				}],
				Game: [{
					viewUrl: "fc-layout/prefab/additive/GoldShow.json",
					parentRoot: "topUI",
					x: 32,
					y: 60,
					scriptType: "fc.view.GoldShow"
				}, {
					viewUrl: "fc-layout/prefab/additive/StrengthShow.json",
					parentRoot: "topUI",
					x: 32,
					y: 150,
					scriptType: "fc.view.StrengthShow",
					checkCode: 2
				}, {
					viewUrl: "fc-layout/prefab/additive/ResetBtn.json",
					parentRoot: "topUI",
					x: 30,
					y: 420,
					scriptType: "fc.view.ResetBtn",
					checkCode: 3
				}, {
					viewUrl: "fc-layout/prefab/additive/NativeIconAd.json",
					parentRoot: "middleUI",
					checkCode: 4,
					x: 650,
					y: 0,
					scriptType: "fc.view.NativeIconAd"
				}, {
					viewUrl: "fc-layout/prefab/additive/SettingBtn.json",
					parentRoot: "topUI",
					x: 700,
					y: 100,
					scriptType: "fc.view.GameSettingBtn"
				}],
				Failed: [{
					viewUrl: "fc-layout/prefab/additive/FailEmoji.json",
					parentRoot: "topUI",
					x: 375,
					y: 370,
					scriptType: "fc.view.AniLoopPlay"
				}],
				Success: [{
					viewUrl: "fc-layout/prefab/additive/SuccessEmoji.json",
					parentRoot: "topUI",
					x: 375,
					y: 370,
					scriptType: "fc.view.AniLoopPlay"
				}]
			},
			f = {
				userId: "1",
				isNew: 1,
				isInGuide: 1,
				signedDays: 0,
				signTime: 0,
				levelId: 1,
				gold: 0,
				strength: 5,
				sound: 1,
				music: 1,
				vibrate: 1,
				goodsInUse: [0],
				goodsInBag: [
					[0]
				]
			};

		function isAdditiveUIVisible(e) {
			return !e || (1 == e ? l.isEnableExportAd() : 2 == e ? l.isStrengthOpened() : 3 == e ? l.isResetGameOpened() : 4 == e && l.isNativeActive())
		}

		function isViewValid(e) {
			return !e || (1 == e ? l.isEnablePopSign() : 2 == e ? l.isEnablePopStore() : 3 == e ? l.isEnablePopTrial() : 4 == e ? l.isEnablePopHomeAd() : 5 == e ? l.isEnablePopNativeAd() && l.isNativeActive() : 6 == e ? l.isEnablePopNativeAd() : 7 == e ? l.isEnablePopSecretAward() : 8 == e ? l.isNativeActive() : 9 == e ? l.isEnablePopTrial() && l.isNativeActive() : 10 == e ? l.isEnablePopSecretAward() && l.isNativeActive() : 104 == e ? l.isEnablePopVip() : 100 == e && (console.log(a.playerInfo.isAgreeAd, "================用户协议=============", JSON.stringify(a.playerInfo)), 0 == l.gameTime && (!a.playerInfo.isAgreeAd || 0 == a.playerInfo.isAgreeAd)))
		}
		class u extends t.Script {
			static get playerInfo() {
				return a.playerInfo
			}
			static set playerInfo(e) {
				if (e) {
					for (var t = Object.keys(e), i = 0; i < t.length; i++) a.playerInfo[t[i]] = e[t[i]];
					t.length > 0 && a.savePlayerInfo(e)
				}
			}
			static init(e) {
				t.stage.addComponent(u), t.stage.addComponent(r), t.stage.addComponent(c), t.stage.addComponent(d), t.stage.addComponent(l), a.startUp(e || `config/${this.platformTag}/appConfig.${this.platformTag}.json`, u.platformTag, h, p, f)
			}
			constructor() {
				super(), this.NativeAdmPopTime = -1
			}
			onAwake() {
				a.setViewValidCheckFun(isViewValid), r.bannerConfig = g, c.blockConfig = w, d.additiveUIConfig = v, d.checkFun = isAdditiveUIVisible, t.stage.once(i.LAUNCH_COMPLETED, this, this.onLaunchResReady), t.stage.on(i.UI_SCENE_LOADED, this, this.onSceneLoaded), t.stage.on(i.UI_SCENE_UNLOADED, this, this.onSceneUnloaded), t.stage.on(i.UI_VIEW_CLOSED, this, this.onViewClosed), t.stage.on(i.UI_VIEW_OPENED, this, this.onViewOpened), t.stage.on(i.GAME_START, this, this.onGameStart)
			}
			onDestroy() {
				t.stage.off(i.UI_SCENE_LOADED, this, this.onSceneLoaded), t.stage.off(i.UI_SCENE_UNLOADED, this, this.onSceneUnloaded), t.stage.off(i.UI_VIEW_CLOSED, this, this.onViewClosed), t.stage.off(i.UI_VIEW_OPENED, this, this.onViewOpened), t.stage.off(i.GAME_START, this, this.onGameStart)
			}
			onLaunchResReady(e) {
				var t = a.pluginCfg;
				t && (null == t.pg_share_opened && (t.pg_share_opened = 0), a.pluginCfg.pg_video_style = t.pg_video_style || [0, 3, 4], a.pluginCfg.pg_ad_img_switch = t.pg_ad_img_switch || 0)
			}
			onUpdate() {
				a.gameSceneId != fc.define.SceneId.Game || 0 == l.isMistakenActive() || a.isGamePaused || !a.pluginCfg.pg_native_gap_time || a.pluginCfg.pg_native_gap_time <= 0 || this.NativeAdmPopTime <= 0 || Date.now() - this.NativeAdmPopTime > a.pluginCfg.pg_native_gap_time && (this.NativeAdmPopTime = -1, a.pause(), 1 == a.pluginCfg.pg_choose_skill_switch ? a.openView("ChooseSkillAd") : a.openView("NativeAdi"))
			}
			onGameStart() {
				this.NativeAdmPopTime = Date.now()
			}
			onSceneUnloaded(e) {
				e == o.Game && s.stopMusic()
			}
			onSceneLoaded(e) {
				e == o.Game && a.appInfo.bgm && s.playMusic(a.appInfo.bgm)
			}
			onViewClosed(e, t) {
				"Failed" != t && "Success" != t || l.isHomeAutoShowGameBox(), "NativeAdi" != t && "ChooseSkillAd" != t || a.gameSceneId == fc.define.SceneId.Game && (this.NativeAdmPopTime = Date.now(), a.resume())
			}
			onViewOpened(e, i) {
				if (("Success" == i || "Failed" == i) && fc.view.ActivityCenter.isMistakenActive() && 3 == fc.view.ActivityCenter.gameTime) {
					var o = t.Handler.create(this, function(e) {
						e && 0 == e.hasIcon && fc.framework.Channel.createDesktopIcon(null)
					});
					fc.framework.Channel.hasDesktopIcon(o)
				}
			}
		}
		u.platformTag = "oppo", e.PlatformConfig = u
	}(window.fc.platform, Laya);
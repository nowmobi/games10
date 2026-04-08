window.fc = window.fc || {}, window.fc.view = window.fc.view || {},
    function (e, t) {
        "use strict";
        var i = fc.framework.GameFrame,
            s = fc.framework.Channel,
            n = fc.framework.MiscUtils,
            o = fc.plugin.BannerCtrl,
            a = fc.define.Event;

        function linkView2Script(e, t, i) {
            var s;
            if (s = t.getChildByName("fullUI")) {
                for (let t = i.length - 1; t >= 0; t--) {
                    const n = s.getChildByName(i[t]);
                    n && (e[i[t]] = n, i.splice(t, 1))
                }
                if (0 == i.length) return
            }
            if (s = t.getChildByName("topUI")) {
                for (let t = i.length - 1; t >= 0; t--) {
                    const n = s.getChildByName(i[t]);
                    n && (e[i[t]] = n, i.splice(t, 1))
                }
                if (0 == i.length) return
            }
            if (s = t.getChildByName("middleUI")) {
                for (let t = i.length - 1; t >= 0; t--) {
                    const n = s.getChildByName(i[t]);
                    n && (e[i[t]] = n, i.splice(t, 1))
                }
                if (0 == i.length) return
            }
            if (s = t.getChildByName("bottomUI")) {
                for (let t = i.length - 1; t >= 0; t--) {
                    const n = s.getChildByName(i[t]);
                    n && (e[i[t]] = n, i.splice(t, 1))
                }
                if (0 == i.length) return
            }
            if (s = t) {
                for (let t = i.length - 1; t >= 0; t--) {
                    const n = s.getChildByName(i[t]);
                    n && (e[i[t]] = n, i.splice(t, 1))
                }
                if (0 == i.length) return
            }
        }

        function getReliveType() {
            var e = i.pluginCfg;
            if (!e) return 0;
            var t = function () {
                var e = i.getLocalStorage("fc_reliveInfo");
                if (e) {
                    var t = e.split(","),
                        s = t[t.length - 1];
                    return s = Number(s), n.isToday(s) ? Number(t[0]) : 0
                }
                return 0
            }();
            if (e.pg_revive_video_num) {
                if (-1 == e.pg_revive_video_num && s.isVideoEnable()) return 1;
                if (t < e.pg_revive_video_num && s.isVideoEnable()) return 1
            }
            if (e.pg_revive_share_num) {
                if (-1 == e.pg_revive_share_num && s.isShareEnable()) return 2;
                if (t < e.pg_revive_share_num && s.isShareEnable()) return 2
            }
            return 0
        }

        function accRelivedTimeToday() {
            var e = i.getLocalStorage("fc_reliveInfo");
            if (e) {
                var t = e.split(","),
                    s = Number(t[0]);
                s++, i.setLocalStorage("fc_reliveInfo", `${s},${Date.now()}`)
            } else i.setLocalStorage("fc_reliveInfo", `1,${Date.now()}`)
        }

        function video2Strength() {
            return i.pluginCfg && i.pluginCfg.pg_video_2_sp ? i.pluginCfg.pg_video_2_sp :
                10
        }

        function getMaxStrength() {
            var e = i.pluginCfg;
            return e && e.pg_sp_max ? e.pg_sp_max : -1
        }

        function isMistakenActive() {
            var e = i.pluginCfg;
            return e && e.pg_switch && i.appInfo.version != e.pg_version && i.playerInfo
                .levelId >= e.pg_ad_lv
        }

        function isVideoMistakenActive() {
            return isMistakenActive() && i.pluginCfg.pg_ad_switch
        }

        function isNativeMistakenActive() {
            return isMistakenActive() && !!i.pluginCfg.pg_native_btn_switch
        }

        function isNativeTouchMistakenActive() {
            return isMistakenActive() && 0 != i.pluginCfg.pg_native_touch_switch &&
                !isNativeMistakenActive()
        }

        function isNativeMoveMistakenActive() {
            return isMistakenActive() && 0 != i.pluginCfg.pg_native_move_switch
        }

        function isVideoImgBtnMistakenActive() {
            return isMistakenActive() && i.pluginCfg.pg_ad_switch && 0 != i.pluginCfg
                .pg_ad_img_switch
        }

        function isNativeActive() {
            return isMistakenActive() && i.playerInfo.levelId >= i.pluginCfg.pg_ad_native_lv
        }

        function isNativeCloseBtnOpenAd() {
            var e = i.pluginCfg.pg_closebtn_nativead || 0;
            return isMistakenActive() && e > 0 && 100 * Math.random() < e
        }

        function isAwardCloseBtnOpenAd() {
            var e = i.pluginCfg.pg_awardbtn_nativead || 0;
            return isMistakenActive() && e > 0 && 100 * Math.random() < e
        }

        function getBtnMistakenStyle() {
            return i.pluginCfg && i.pluginCfg.pg_button_show_style ? i.pluginCfg
                .pg_button_show_style : 0
        }

        function getBtnMoveDuaration() {
            return i.pluginCfg && i.pluginCfg.pg_text_move_time ? i.pluginCfg.pg_text_move_time :
                0
        }

        function getMistakenBannerDelay() {
            return i.pluginCfg && i.pluginCfg.pg_mistaken_banner_delay ? i.pluginCfg
                .pg_mistaken_banner_delay : 1e3
        }

        function getMistakenBannerDuaration() {
            return i.pluginCfg && i.pluginCfg.pg_mistaken_banner_duaration ? i.pluginCfg
                .pg_mistaken_banner_duaration : 3e3
        }

        function getBtnDelayTime() {
            return i.pluginCfg ? i.pluginCfg.pg_button_delay_time : 0
        }

        function isEnableCancelVideoModal() {
            var e = i.pluginCfg;
            return e && e.pg_version != i.appInfo.version && e.pg_switch && 1 ==
                e.pg_video_cancel_switch
        }

        function showModal(e) {
            s.showModal(i.langCfg.videocanceltitle, i.langCfg.videocanceldesc,
                i.langCfg.ok, i.langCfg.cancel, e)
        }

        function isVipValid() {
            var e = i.playerInfo;
            return null != e.vipTimestamp && Date.now() - e.vipTimestamp <
                864e5
        }
        t.ClassUtils.regClass("fc.view.IntroducePage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.introduce = null
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["introduce"]), i.pluginCfg.introduceCfg &&
                    (this.introduce.skin = i.pluginCfg.introduceCfg),
                    this.introduce.on(t.Event.CLICK, this, this.closeIntroduce)
            }
            onDestroy() {
                super.onDestroy(), this.introduce.off(t.Event.CLICK,
                    this, this.closeIntroduce)
            }
            closeIntroduce() {
                i.closeView(this.owner)
            }
        });
        t.ClassUtils.regClass("fc.view.LoadingPage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.gameTip = null, this.loadingLab =
                    null, this.loadingImg = null, this.loadingProgress =
                    null, this.mDstVal = 0, this.mCurVal = 0, this.mTotalWidth =
                    1, this.autoClose = !1, this.startTime = 0
            }
            onAwake() {
                if (super.onAwake(), linkView2Script(this, this.owner,
                    ["gameTip", "loadingLab", "loadingImg",
                        "loadingProgress"
                    ]), fc.platform.PlatformConfig.platformTag.indexOf(
                        "iptv") >= 0) this.gameTip && (this.gameTip.visible = !
                            1);
                else if (this.gameTip) {
                    this.gameTip.getChildByName("Copyright")
                        .visible = !0;
                    let e = this.gameTip.getChildByName("Copyright")
                        .text;
                    if (e = e.replace("南京奇卡信息科技有限公司", i.appInfo.copyright ||
                        "南京奇卡信息科技有限公司"), this.gameTip.getChildByName(
                            "Copyright")
                            .text = e, i.appInfo.srNumber) {
                        this.gameTip.getChildByName("SrNumber")
                            .visible = !0;
                        let e = this.gameTip.getChildByName(
                            "SrNumber")
                            .text;
                        e = e.replace("000000", i.appInfo.srNumber),
                            this.gameTip.getChildByName("SrNumber")
                                .text = e
                    }
                }
                this.loadingImg && (this.mTotalWidth = this.loadingImg
                    .displayWidth), t.stage.on(a.LOADING_PROGRESS,
                        this, this.onLoadInfoUpdate), t.stage.on(a.UI_LOADING_COMPLETED,
                            this, this.onLoadingCompleted)
            }
            onDestroy() {
                super.onDestroy(), t.stage.off(a.LOADING_PROGRESS,
                    this, this.onLoadInfoUpdate), t.stage.off(a
                        .UI_LOADING_COMPLETED, this, this.onLoadingCompleted
                    )
            }
            onStart() {
                i.openView("Logo", null, null), this.startTime =
                    Date.now()

            }
            onLoadInfoUpdate(e) {
                this.mDstVal = e
            }
            onLoadingCompleted() {
                this.autoClose = !0, console.log(
                    `onLoadingCompleted Cost: ${Date.now() - this.startTime}`
                )
            }
            onUpdate() {
                if (this.mCurVal < this.mDstVal) {
                    this.mCurVal += .005 * t.timer.delta, this.mCurVal >
                        this.mDstVal && (this.mCurVal = this.mDstVal);
                    const e = this.mCurVal;
                    this.loadingProgress.width = this.mTotalWidth *
                        e, this.loadingLab.text =
                        `${Math.floor(100 * e)}%`
                }
                this.autoClose && this.mCurVal >= 1 && Date.now() -
                    this.startTime > 3e3 && (this.autoClose = !1,
                        this.closeLoading(), console.log(
                            `Loading Cost: ${Date.now() - this.startTime}`
                        ))
            }
            closeLoading() {
                B.isEnableLoadingVideo() ? this.owner.frameOnce(2,
                    this, this.playVideo) : (i.closeView("Logo"),
                        i.closeView("Loading"))
            }
            playVideo() {
                s.playVideo(t.Handler.create(this, function () {
                    i.closeView("Logo"), i.closeView(
                        "Loading")
                }), t.Handler.create(this, function () {
                    i.closeView("Logo"), i.closeView(
                        "Loading")
                }), t.Handler.create(this, function () {
                    i.closeView("Logo"), i.closeView(
                        "Loading")
                }))
            }
        });
        t.ClassUtils.regClass("fc.view.UserPrivacyPage", class extends fc.plugin
            .BaseView {
            constructor() {
                super(), this.agreement = null, this.privacyTxt =
                    null, this.okBtn = null, this.noBtn = null,
                    this.privacyBtn = null, this.txt = null, this.prevX =
                    0, this.prevY = 0, this.middleUI = null, this.isLoading = !
                    0
            }
            initView(e) {
                e && null != e.isLoading && (this.isLoading = e.isLoading)
            }
            onAwake() {
                super.onAwake(), fc.view.linkView2Script(this, this
                    .owner, ["okBtn", "agreement", "noBtn",
                    "privacyBtn", "privacyTxt", "middleUI"
                ]), this.okBtn.on(t.Event.CLICK, this, this
                    .onAgreeAd), this.noBtn.on(t.Event.CLICK,
                        this, this.onCloseView), this.privacyBtn.on(
                            t.Event.CLICK, this, this.openPrivacy)
            }
            onStart() {
                super.onStart();
                let e = this.agreement.text;
                e = e.replace("南京奇卡信息科技有限公司", i.pluginCfg.pg_company_name ||
                    "南京奇卡信息科技有限公司"), this.agreement.text = e,
                    this.isLoading ? this.noBtn.text = "Disagree with " : this
                        .noBtn.text = "Close", this.isLoading && i.playerInfo
                            .isAgreeAd && 1 == i.playerInfo.isAgreeAd && i.closeView(
                                this.owner)
                this.onAgreeAd()
            }
            onDestroy() {
                super.onDestroy(), this.okBtn.off(t.Event.CLICK,
                    this, this.onAgreeAd), this.noBtn.off(t.Event
                        .CLICK, this, this.onCloseView), this.privacyBtn
                            .off(t.Event.CLICK, this, this.openPrivacy)
            }
            onCloseView() {
                i.playClickSound(), this.isLoading ? window.fc.adapter
                    .Channel.exitApplication() : i.closeView(this.owner)
            }
            onAgreeAd() {
                i.playClickSound(), i.savePlayerInfo({
                    isAgreeAd: 1
                }), console.log(i.playerInfo.isAgreeAd,
                    "===========保存用户选择=================="),
                    window.fc.adapter.Channel && window.fc.adapter.Channel
                        .setAgreeAd && window.fc.adapter.Channel.setAgreeAd(),
                    i.closeView(this.owner)
            }
            openPrivacy() {
                i.playClickSound(), this.createText()
            }
            createText() {
                this.privacyTxt.visible = !0, this.privacyTxt.vScrollBarSkin =
                    "";
                let e = this.privacyTxt.getChildByName("html");
                e.style.fontSize = 25, e.width = this.privacyTxt.width -
                    20;
                let t = e._innerHTML;
                t = t.replace("南京奇卡信息科技有限公司", i.pluginCfg.pg_company_name ||
                    "南京奇卡信息科技有限公司"), e.innerHTML = t
            }
        });
        t.ClassUtils.regClass("fc.view.HomePage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.signBtn = null, this.storeBtn = null,
                    this.shareBtn = null,
                    this.turntableBtn = null
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["signBtn", "storeBtn", "shareBtn",
                        "startBtn", "turntableBtn"
                    ]), this.signBtn.visible = B.isSignOpened(),
                    this.shareBtn.visible = B.isShareOpened(), this
                        .storeBtn.visible = B.isStoreOpened(), this.turntableBtn
                            .visible = B.isTurntableOpened(), this.signBtn.on(
                                t.Event.CLICK, this, this.openSign), this.storeBtn
                                    .on(t.Event.CLICK, this, this.openStore), this.shareBtn
                                        .on(t.Event.CLICK, this, this.openShare), this.turntableBtn
                                            .on(t.Event.CLICK, this, this.openTurntable), t
                                                .stage.on(a.UI_VIEW_OPENED, this, this.onViewOpened),
                    t.stage.on(a.UI_VIEW_CLOSED, this, this.onViewClosed)
            }
            onDestroy() {
                super.onDestroy(), this.signBtn.off(t.Event.CLICK,
                    this, this.openSign), this.storeBtn.off(t.Event
                        .CLICK, this, this.openStore), this.shareBtn
                            .off(t.Event.CLICK, this, this.openShare),

                    this.turntableBtn.off(t.Event.CLICK, this, this
                        .openTurntable), t.stage.off(a.UI_VIEW_OPENED,
                            this, this.onViewOpened), t.stage.off(a.UI_VIEW_CLOSED,
                                this, this.onViewClosed)
            }
            openSign() {
                i.playClickSound(), i.openView(w.Sign, null, null)
            }
            openStore() {
                i.playClickSound(), i.openView(w.Store, null, null)
            }
            openTurntable() {
                i.playClickSound(), i.openView(w.Turntable, null,
                    null)
            }
            openShare() {
                i.playClickSound(), s.shareAppMessage({
                    title: B.getShareTitle(),
                    imageUrl: B.getShareImage(),
                    desc: B.getShareDesc()
                })
            }
            startGame() {
                i.playClickSound(), B.isEnableStartVideo() ? (this.startBtn
                    .mouseEnabled = !1, s.playVideo(t.Handler.create(
                        this,
                        function () {
                            this.playGame(), this.startBtn.mouseEnabled = !
                                0
                        }), t.Handler.create(this, function () {
                            this.playGame(), this.startBtn.mouseEnabled = !
                                0
                        }), t.Handler.create(this, function () {
                            this.playGame(), this.startBtn.mouseEnabled = !
                                0
                        }))) : this.playGame()
            }
            playGame() {

                var e = i.playerInfo;
                B.isStrengthOpened() ? e.strength >= B.getGameCostStrength() ?
                    (e.strength -= B.getGameCostStrength(), i.savePlayerInfo({
                        strength: e.strength
                    }), i.go2Game(), i.closeView(this.owner), t
                        .stage.event(a.STRENGTH_UPDATE)) : i.openView(
                            w.Strength, null, null) : (i.go2Game(), i.closeView(
                                this.owner))
            }
            onViewOpened(e, t) {
                "Store" == t && (this.owner.visible = !1)
            }
            onViewClosed(e, t) {
                "Store" == t && (this.owner.visible = !0)
            }
        });
        t.ClassUtils.regClass("fc.view.GamePage", class extends fc.plugin.BaseView {
            constructor() {
                super()
            }
            onAwake() {
                super.onAwake()
            }
            onDestroy() {
                super.onDestroy()
            }
        });
        t.ClassUtils.regClass("fc.view.FailedPage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.awardLab = null, this.awardBox = null,
                    this.awardVal = null, this.reliveBtn = null,
                    this.continueBtn = 0, this.reliveType = 0
            }
            initView(e) {
                this.awardVal = e && e.award ? e.award : 0
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["reliveBtn", "continueBtn", "awardLab",
                        "awardBox"
                    ]), this.reliveBtn.on(t.Event.CLICK, this,
                        this.on2Relive), this.continueBtn.addComponent(
                            d)
                            .viewId = this.owner.viewId, this.continueBtn.on(
                                d.EVENT_CLICK_MISLEAD_BTN, this, this.on2Continue
                            ), this.freshReliveBtn(), this.reliveBtn.visible = !
                            1, this.awardBox.visible = !1, this.awardLab.visible = !
                            1
            }
            onStart() {
                super.onStart(), this.awardVal > 0 && (this.awardLab
                    .value = `${this.awardVal}`, this.awardBox.visible = !
                    0, this.awardLab.visible = !0), this.freshReliveBtn()
            }
            onDestroy() {
                super.onDestroy(), this.reliveBtn.off(t.Event.CLICK,
                    this, this.on2Relive), this.continueBtn.off(
                        d.EVENT_CLICK_MISLEAD_BTN, this, this.on2Continue
                    )
            }
            on2Relive() {
                i.playClickSound(), 1 == this.reliveType ? (this.reliveBtn
                    .mouseEnabled = !1, this.continueBtn.mouseEnabled = !
                    1, s.playVideo(t.Handler.create(this,
                        function () {
                            i.go2Relive(), i.closeView(this
                                .owner),
                                accRelivedTimeToday()
                        }), t.Handler.create(this, function () {
                            this.reliveBtn.mouseEnabled = !
                                0, this.continueBtn.mouseEnabled = !
                                0
                        }), t.Handler.create(this, function () {
                            this.reliveBtn.mouseEnabled = !
                                0, this.continueBtn.mouseEnabled = !
                                0, this.freshReliveBtn(), i
                                    .showToastMsg(i.langCfg.novideotxt)
                        }))) : 2 == this.reliveType && (this.reliveBtn
                            .mouseEnabled = !1, this.continueBtn.mouseEnabled = !
                            1, t.stage.timerOnce(1e3, this, () => {
                                this.reliveBtn.mouseEnabled = !0,
                                    this.continueBtn.mouseEnabled = !
                                    0
                            }), t.stage.once(a.DEVICE_HIDE, this, this.onShareOpen),
                            s.shareAppMessage({
                                title: B.getShareTitle(),
                                imageUrl: B.getShareImage(),
                                desc: B.getShareDesc()
                            }, t.Handler.create(this, function () {
                                i.go2Relive(), i.closeView(this
                                    .owner),
                                    accRelivedTimeToday()
                            }), t.Handler.create(this, function () {
                                this.reliveBtn.mouseEnabled = !
                                    0, this.continueBtn.mouseEnabled = !
                                    0
                            })))
            }
            on2Continue() {
                i.playClickSound(), this.awardVal > 0 ? i.overGame({
                    gold: i.playerInfo.gold + this.awardVal
                }) : i.overGame(), i.closeView(this.owner)
            }
            freshReliveBtn() {
                var e;
                !(e = i.pluginCfg) || !e.pg_revive_share_num && !e.pg_revive_video_num ||
                    !e.pg_revive_per_game || i.relivedTime >= e.pg_revive_per_game &&
                    e.pg_revive_per_game > 0 || !getReliveType() ?
                    (this.reliveBtn.visible = !1, this.reliveBtn.alpha =
                        0) : (this.reliveType = getReliveType(), 0 ==
                            this.reliveType ? this.reliveBtn.visible = !
                            1 : (this.reliveBtn.visible = !0, this.reliveBtn
                                .skin = 1 == this.reliveType && s.isVideoEnable() ?
                                    "fc-res/main/img_btn_video_relive.png" :
                                    "fc-res/main/img_btn_share_relive.png")
                    )
            }
        });
        t.ClassUtils.regClass("fc.view.SuccessPage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.homeBtn = null, this.playVideoBtn =
                    null, this.awardLab = null, this.awardBox =
                    null, this.awardVal = 0
            }
            initView(e) {
                this.awardVal = e && e.award ? e.award : 0
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["homeBtn", "playVideoBtn", "awardLab",
                        "awardBox"
                    ]), this.homeBtn.addComponent(d)
                        .viewId = this.owner.viewId, this.homeBtn.on(d.EVENT_CLICK_MISLEAD_BTN,
                            this, this.on2Home), this.playVideoBtn.on(t
                                .Event.CLICK, this, this.onPlayVideo), this
                                    .playVideoBtn.visible = !1, this.awardBox.visible = !
                                    1, this.awardLab.visible = !1
            }
            onStart() {
                super.onStart(), this.awardVal > 0 && (this.awardLab
                    .value = `${this.awardVal}`, this.playVideoBtn
                        .visible = s.isVideoEnable(), this.awardBox
                            .visible = !0, this.awardLab.visible = !0)
            }
            onDestroy() {
                super.onDestroy(), this.homeBtn.off(d.EVENT_CLICK_MISLEAD_BTN,
                    this, this.on2Home), this.playVideoBtn.off(
                        t.Event.CLICK, this, this.onPlayVideo)
            }
            on2Home() {
                this.homeBtn.mouseEnabled = !1, this.playVideoBtn.mouseEnabled = !
                    1, i.playClickSound(), i.overGame({
                        levelId: i.playerInfo.levelId + 1,
                        gold: i.playerInfo.gold + this.awardVal
                    }), i.closeView(this.owner)
            }
            onPlayVideo() {
                i.playClickSound(), s.isVideoEnable() ? (this.homeBtn
                    .mouseEnabled = !1, this.playVideoBtn.mouseEnabled = !
                    1, s.playVideo(t.Handler.create(this,
                        function () {
                            i.overGame({
                                levelId: i.playerInfo
                                    .levelId + 1,
                                gold: i.playerInfo.gold +
                                    2 * this.awardVal
                            }), i.closeView(this.owner)
                        }), t.Handler.create(this, function () {
                            this.homeBtn.mouseEnabled = !0,
                                this.playVideoBtn.mouseEnabled = !
                                0
                        }), t.Handler.create(this, function () {
                            this.homeBtn.mouseEnabled = !0,
                                this.playVideoBtn.mouseEnabled = !
                                0, i.showToastMsg(i.langCfg
                                    .novideotxt)
                        }))) : i.showToastMsg(i.langCfg.novideotxt)
            }
        });
        t.ClassUtils.regClass("fc.view.AwardPage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.awardDesc = null, this.confirmBtn =
                    null, this.awardObj = null, this.mTexture =
                    null, this.awardData = null, this.initialized = !
                    1
            }
            initView(e) {
                this.initialized = !1, this.awardData = e
            }
            showAward() {
                1 != i.pluginCfg.modelPreviewByImage ? (this.mTexture =
                    new t.Texture(fc.plugin.TextureCamera.RenderTexture,
                        t.Texture.DEF_UV), this.awardObj.graphics
                            .drawTexture(this.mTexture), t.stage.event(
                                a.TEXTURE_CAMERA_INIT, [this.awardData.subPkg,
                                this.awardData.prefab, this.awardData
                                    .showAnim
                            ])) : this.awardObj.skin = this.awardData
                                .iconUrl
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["awardObj", "awardDesc", "confirmBtn"]),
                    this.confirmBtn.on(t.Event.CLICK, this, this.closeView)
            }
            onUpdate() {
                this.initialized || (this.initialized = !0, this.showAward())
            }
            onDestroy() {
                super.onDestroy(), this.mTexture && (this.awardObj.graphics
                    .clear(), this.mTexture.bitmap = null, this
                        .mTexture.destroy(), this.mTexture = null),
                    t.stage.event(a.TEXTURE_CAMERA_CLEAR), this.confirmBtn
                        .off(t.Event.CLICK, this, this.closeView)
            }
            closeView() {
                var e = i.playerInfo;
                e.goodsInUse[this.awardData.type] = this.awardData.id,
                    e.goodsInBag[this.awardData.type].push(this.awardData
                        .id), i.savePlayerInfo(e), i.showToastMsg(
                            `${i.langCfg.gettxt} ${this.awardData.name}`
                        ), i.playClickSound(), i.closeView(this.owner)
            }
        });
        t.ClassUtils.regClass("fc.view.UnlockPage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.playBtn = null, this.s_switchPos =
                    null, this.s_allAd = null, this.s_miniCancel =
                    null, this.s_cancelDelay_0 = null, this.s_cancelDelay_1 =
                    null, this.s_checkMove = null, this.trialObj =
                    null, this.curBtnGroup = null, this.mTexture =
                    null, this.mCurTrialGoods = null
            }
            initView(e) {
                this.mNextStepCb = e && e.nextCb ? e.nextCb : null
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["playBtn", "trialObj", "s_switchPos",
                        "s_allAd", "s_miniCancel",
                        "s_cancelDelay_0", "s_cancelDelay_1",
                        "s_checkMove"
                    ]), this.s_switchPos.visible = !1, this.s_allAd
                        .visible = !1, this.s_miniCancel.visible = !1,
                    this.s_cancelDelay_0.visible = !1, this.s_cancelDelay_1
                        .visible = !1, this.s_checkMove.visible = !1;
                let e = i.pluginCfg.pg_video_style;
                switch (isMistakenActive() ? e[Math.floor(Math.random() *
                    e.length)] : 0) {
                    case 0:
                        this.s_switchPos.visible = !0, this.s_switchPos
                            .addComponent(p), this.curBtnGroup =
                            this.s_switchPos;
                        break;
                    case 1:
                        this.s_allAd.visible = !0, this.s_allAd.addComponent(
                            u), this.curBtnGroup = this.s_allAd;
                        break;
                    case 2:
                        this.s_miniCancel.visible = !0, this.s_miniCancel
                            .addComponent(m), this.curBtnGroup =
                            this.s_miniCancel;
                        break;
                    case 3:
                        this.s_cancelDelay_0.visible = !0, this.s_cancelDelay_0
                            .addComponent(v), this.curBtnGroup =
                            this.s_cancelDelay_0;
                        break;
                    case 4:
                        this.s_cancelDelay_1.visible = !0, this.s_cancelDelay_1
                            .addComponent(v), this.curBtnGroup =
                            this.s_cancelDelay_1;
                        break;
                    case 5:
                        this.s_checkMove.visible = !0, this.s_checkMove
                            .addComponent(f), this.curBtnGroup =
                            this.s_checkMove, i.closeView(w.NativeAdb),
                            t.stage.timerOnce(1e3, this, () => {
                                o.hideBanner(w.Unlock)
                            }, null, !1)
                }
                for (var s = i.goodsCfg, n = i.playerInfo, l = [],
                    h = 0; h < s.length; h++) {
                    var r = s[h];
                    for (let e = 0; e < r.length; e++) {
                        const t = r[e];
                        0 != t.recommend && -1 == n.goodsInBag[h].indexOf(
                            e) && l.push(t)
                    }
                }
                this.mCurTrialGoods = l[Math.floor(Math.random() *
                    l.length)], 1 != i.pluginCfg.modelPreviewByImage ?
                        (this.mTexture = new t.Texture(fc.plugin.TextureCamera
                            .RenderTexture, t.Texture.DEF_UV), this
                                .trialObj.graphics.drawTexture(this.mTexture),
                            t.stage.event(a.TEXTURE_CAMERA_INIT, [this.mCurTrialGoods
                                .subPkg, this.mCurTrialGoods.prefab,
                            this.mCurTrialGoods.showAnim
                            ])) : this.trialObj.skin = this.mCurTrialGoods
                                .iconUrl, t.stage.on(g.PLAY_VIDEO, this, this.openVideo),
                    t.stage.on(g.JUMP_AWARD, this, this.closeView),
                    isVideoImgBtnMistakenActive() && this.playBtn.on(
                        t.Event.CLICK, this, this.openVideo)
            }
            onDestroy() {
                super.onDestroy(), this.mTexture && (this.trialObj.graphics
                    .clear(), this.mTexture.bitmap = null, this
                        .mTexture.destroy(), this.mTexture = null,
                    t.stage.event(a.TEXTURE_CAMERA_CLEAR)), t.stage
                        .off(g.PLAY_VIDEO, this, this.openVideo), t.stage
                            .off(g.JUMP_AWARD, this, this.closeView),
                    isVideoImgBtnMistakenActive() && this.playBtn.off(
                        t.Event.CLICK, this, this.openVideo)
            }
            closeView() {
                i.closeView(this.owner)
            }
            unlockGoods() {
                var e = i.playerInfo;
                e.goodsInUse[this.mCurTrialGoods.type] = this.mCurTrialGoods
                    .id, e.goodsInBag[this.mCurTrialGoods.type].push(
                        this.mCurTrialGoods.id), i.savePlayerInfo(e),
                    i.showToastMsg(
                        `${i.langCfg.gettxt} ${this.mCurTrialGoods.name}`
                    ), t.stage.event(a.CHANGE_CUR_MODEL, [this.mCurTrialGoods
                        .prefab, this.mCurTrialGoods.showAnim,
                    this.mCurTrialGoods
                    ]), this.owner.timerOnce(1e3, this, function () {
                        i.closeView(this.owner)
                    })
            }
            openVideo() {
                i.playClickSound(), s.isVideoEnable() ? (this.curBtnGroup
                    .mouseEnabled = !1, this.playBtn.visible = !
                    1, s.playVideo(t.Handler.create(this,
                        function () {
                            this.unlockGoods()
                        }), t.Handler.create(this, function () {
                            this.curBtnGroup.mouseEnabled = !
                                0, this.playBtn.visible = !
                                0, isEnableCancelVideoModal() &&
                                showModal(t.Handler.create(
                                    this,
                                    function (e) {
                                        e && e.confirm &&
                                            this.openVideo()
                                    }))
                        }), t.Handler.create(this, function () {
                            this.curBtnGroup.mouseEnabled = !
                                0, this.playBtn.visible = !
                                0, i.showToastMsg(i.langCfg
                                    .novideotxt)
                        }))) : i.showToastMsg(i.langCfg.novideotxt)
            }
        });
        t.ClassUtils.regClass("fc.view.AdHomePage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.continueBtn = null, this.clickNum = 1,
                    this.bannerVisible = !1, this.frameNum = 0,
                    this.enalbeBanner = !0
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["continueBtn"]), this.continueBtn.addComponent(
                        d)
                        .viewId = this.owner.viewId, this.continueBtn.on(
                            d.EVENT_CLICK_MISLEAD_BTN, this, this.onContinue
                        ), t.stage.on(a.DEVICE_HIDE, this, this.onAppHide),
                    t.stage.on(a.DEVICE_SHOW, this, this.onAppShow)
            }
            onDestroy() {
                super.onDestroy(), this.continueBtn.off(d.EVENT_CLICK_MISLEAD_BTN,
                    this, this.onContinue), t.stage.off(a.DEVICE_HIDE,
                        this, this.onAppHide), t.stage.off(a.DEVICE_SHOW,
                            this, this.onAppShow)
            }
            onEnable() {
                super.onEnable()
            }
            onStart() {
                super.onStart()
            }
            onContinue() {
                i.playClickSound(), s.hideBannerAd(), i.closeView(
                    this.owner)
            }
            onAppHide() {
                s.hideBannerAd()
            }
            onAppShow() {
                s.hideBannerAd(), i.playClickSound(), i.closeView(
                    this.owner)
            }
        });
        t.ClassUtils.regClass("fc.view.MoreInfoPage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.closeBtn = null
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["closeBtn"]), this.closeBtn.addComponent(d)
                        .viewId = this.owner.viewId, this.closeBtn.on(d
                            .EVENT_CLICK_MISLEAD_BTN, this, this.closeView
                        )
            }
            onDestroy() {
                super.onDestroy(), this.closeBtn.off(d.EVENT_CLICK_MISLEAD_BTN,
                    this, this.closeView)
            }
            closeView() {
                i.playClickSound(), i.closeView(this.owner)
            }
        });
        t.ClassUtils.regClass("fc.view.KnockPage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.openBtn = null, this.closeBtn = null,
                    this.progressBar = null, this.progressBg = null,
                    this.mHammerAni = null, this.mIsAdOpened = !1,
                    this.progressWidth = 1, this.progressHeight = 1,
                    this.mOpenProgress = 0, this.mNextStepCb = null
            }
            initView(e) {
                this.mNextStepCb = e
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["openBtn", "closeBtn", "progressBar",
                        "progressBg"
                    ]), this.mOpenProgress = 0, this.mIsAdOpened = !
                    1, this.progressWidth = this.progressBg.displayWidth,
                    this.progressHeight = this.progressBg.displayHeight,
                    this.mHammerAni = this.owner.knockAni, this.openBtn
                        .on(t.Event.MOUSE_UP, this, this.onFingerUp),
                    this.closeBtn.on(t.Event.MOUSE_UP, this, this.onCloseView),
                    this.closeBtn.visible = !isMistakenActive()
            }
            onDestroy() {
                super.onDestroy(), this.openBtn.off(t.Event.MOUSE_UP,
                    this, this.onFingerUp), this.closeBtn.off(t
                        .Event.MOUSE_UP, this, this.onCloseView), t
                            .stage.off(a.DEVICE_SHOW, this, this.onTreasureOpen),
                    this.mIsAdOpened && fc.framework.Channel.hideBannerAd()
            }
            onUpdate() {
                this.mOpenProgress >= 1 || (this.mOpenProgress -= i
                    .pluginCfg.pg_fastclick_progress_back, this
                        .mOpenProgress = Math.max(0, this.mOpenProgress),
                    this.updateOpenPorgress(this.mOpenProgress)
                )
            }
            onFingerUp() {
                var e;
                i.playClickSound(), this.mOpenProgress >= 1 || (
                    this.mOpenProgress += i.pluginCfg.pg_fastclick_progress_add,
                    !this.mIsAdOpened && (e = this.mOpenProgress) >
                    i.pluginCfg.pg_fastclick_ad_percent[0] && e <
                    i.pluginCfg.pg_fastclick_ad_percent[1] && (
                        this.mIsAdOpened = !0, s.showBannerAd(),
                        t.stage.on(a.DEVICE_SHOW, this, this.onTreasureOpen),
                        this.owner.timerOnce(2e3, this,
                            function () {
                                s.hideBannerAd()
                            })), this.mOpenProgress >= 1 &&
                    this.onTreasureOpen(), this.updateOpenPorgress(
                        this.mOpenProgress), this.mHammerAni &&
                    this.mHammerAni.play(0, !1))
            }
            onTreasureOpen() {
                s.hideBannerAd(), this.owner.timerOnce(500, null,
                    function () {
                        i.showToastMsg("Claim100金币"), i.playerInfo
                            .gold += 100, i.savePlayerInfo({
                                gold: i.playerInfo.gold
                            })
                    }), t.stage.event(a.KNOCK_COMPLETED), t.timer
                        .once(1e3, this, this.onCloseView)
            }
            onCloseView() {
                i.playClickSound(), i.closeView(this.owner)
            }
            updateOpenPorgress(e) {
                var t = Math.min(1, Math.max(0, e));
                this.progressWidth < this.progressHeight ? this.progressBar &&
                    (this.progressBar.height = Math.max(1, this.progressHeight *
                        t)) : this.progressBar && (this.progressBar
                            .width = Math.max(1, this.progressWidth * t)
                        )
            }
        });
        t.ClassUtils.regClass("fc.view.NativeAdPage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.nativeAd = null, this.adImage = null,
                    this.adTitle = null, this.adDesc = null, this.adBtn =
                    null, this.closeBtn = null, this.nativeAdId =
                    null, this.adBg = null, this.passedTime = 0,
                    this.isAdReady = !1, this.initialized = !1
            }
            onAwake() {
                if (super.onAwake(), linkView2Script(this, this.owner,
                    ["nativeAd"]), this.adBg = this.nativeAd.getChildByName(
                        "adBg"), this.adImage = this.nativeAd.getChildByName(
                            "adImage"), this.adTitle = this.nativeAd.getChildByName(
                                "adTitle"), this.adDesc = this.nativeAd.getChildByName(
                                    "adDesc"), this.adBtn = this.nativeAd.getChildByName(
                                        "adBtn"), this.closeBtn = this.nativeAd.getChildByName(
                                            "closeBtn"), this.closeBtn2 = this.nativeAd
                                                .getChildByName("closeBtn2"), this.closeBtn2 &&
                    (this.closeBtn2.visible =
                        isNativeMistakenActive(),
                        isNativeMistakenActive() && Math.random() >
                        .5)) {
                    var e = this.closeBtn2.x,
                        i = this.closeBtn2.y,
                        s = this.closeBtn.x,
                        n = this.closeBtn.y;
                    this.closeBtn.x = e, this.closeBtn.y = i, this.closeBtn2
                        .x = s, this.closeBtn2.y = n
                }
                this.closeBtn3 = this.nativeAd.getChildByName(
                    "closeBtn3"), this.closeBtn3 && (this.closeBtn3
                        .visible = isNativeTouchMistakenActive()),
                    this.closeBtn4 = this.nativeAd.getChildByName(
                        "closeBtn4"), this.closeBtn4 && (this.closeBtn4
                            .on(t.Event.CLICK, this, this.closeView),
                            this.closeBtn4.addComponent(r)), this.adBtn2 =
                    this.nativeAd.getChildByName("adBtn2"), this.adBtn2 &&
                    (this.adBtn2.visible = isNativeMistakenActive()),
                    this.nativeAd.parent.visible = !1, this.nativeAd
                        .alpha = 0, this.isAdReady = !1, this.passedTime =
                    0, this.initialized = !0, t.stage.on(a.UI_VIEW_CLOSED,
                        this, this.onViewClosed), t.stage.event(a.HIDE_NATIVEBANNER)
            }
            onStart() {
                this.isAdReady = !1, this.passedTime = 0, s.createNativeAd(
                    t.Handler.create(this, this.onAdError)), s.loadNativeAd(
                        t.Handler.create(this, this.onAdLoaded), t.Handler
                            .create(this, this.onAdError))
            }
            onUpdate() {
                this.isAdReady || (this.passedTime += t.timer.delta,
                    this.passedTime >= 5e3 && (this.isAdReady = !
                        0, this.closeView()))
            }
            onDestroy() {
                super.onDestroy(), this.adBg.off(t.Event.CLICK,
                    this, this.openAd), this.adBtn.off(t.Event.CLICK,
                        this, this.openAd), this.closeBtn.off(t.Event
                            .CLICK, this, this.closeAd), t.stage.off(a.UI_VIEW_CLOSED,
                                this, this.onViewClosed), this.adBg.off(t.Event
                                    .MOUSE_MOVE, this, this.onTouchMove), t.stage
                                        .off(a.JUMP_AWARD_IN_NATIVEAD, this, this.onOpenNativeAd)
            }
            onViewClosed(e, t) {
                t != fc.view.ViewId.NativeAdb && t != fc.view.ViewId
                    .NativeAdm && t != fc.view.ViewId.NativeAdn &&
                    t != fc.view.ViewId.NativeBannerAd && t != fc.view
                        .ViewId.NativeAdbOppo && t != fc.view.ViewId.NativeAdi &&
                    (this.isAdReady = !0, this.owner.frameOnce(1,
                        this, this.closeView))
            }
            onAdError(e) {
                this.isAdReady = !0, console.log("onNativeAdError",
                    e), console.log(e), this.owner && this.owner
                        .frameOnce(1, this, this.closeView)
            }
            onAdLoaded(e) {
                if (console.log("onNativeAdLoaded", e), this.isAdReady = !
                    0, e && e.adList && 0 != e.adList.length) {
                    this.adBg.on(t.Event.CLICK, this, this.openAd),
                        this.adBg.on(t.Event.MOUSE_MOVE, this, this
                            .onTouchMove);
                    var i, n = e.adList[Math.floor(Math.random() *
                        e.adList.length)];
                    i = n.imgUrlList && n.imgUrlList.length > 0 ? n
                        .imgUrlList[Math.floor(Math.random() * n.imgUrlList
                            .length)] : n.iconUrlList && n.iconUrlList
                                .length > 0 ? n.iconUrlList[Math.floor(Math
                                    .random() * n.iconUrlList.length)] : n.icon ?
                        n.icon : n.logoUrl ? n.logoUrl : null, this
                            .nativeAdId = n.adId, console.log(
                                "onAdLoaded:" + n.title), null != i &&
                        this.adImage.loadImage(i, null), this.adDesc
                            .text = n.desc || n.title, this.adTitle.text =
                        n.title, this.adBtn.label = "View ads", this.adBtn
                            .on(t.Event.CLICK, this, this.openAd), this
                                .adBtn2 && this.adBtn2.on(t.Event.CLICK,
                                    this, this.openAd), this.closeBtn3 ?
                            isNativeTouchMistakenActive() ? (this.closeBtn
                                .mouseEnabled = !1, this.closeBtn3.mouseEnabled = !
                                0, this.closeBtn3 && this.closeBtn3.on(
                                    t.Event.CLICK, this, this.closeAd)) :
                                (this.closeBtn.mouseEnabled = !0, this.closeBtn3
                                    .mouseEnabled = !1, this.closeBtn.on(t.Event
                                        .CLICK, this, this.closeAd)) : (
                                this.closeBtn.mouseEnabled = !0, this.closeBtn
                                    .on(t.Event.CLICK, this, this.closeAd)),
                        this.nativeAd.alpha = 1, this.nativeAd.parent
                            .visible = !0, this.closeBtn.addComponent(r),
                        s.reportNativeAdShow(this.nativeAdId),
                        console.log("reportNativeAdShow:", this.nativeAdId),
                        t.stage.on(a.JUMP_AWARD_IN_NATIVEAD, this,
                            this.onOpenNativeAd)
                } else this.owner.frameOnce(1, this, this.closeView)
            }
            closeAd() {
                isNativeCloseBtnOpenAd() ? this.openAd() : (i.playClickSound(),
                    this.closeView())
            }
            closeView() {
                i.closeView(this.owner), t.stage.event(a.SHOW_NATIVEBANNER)
            }
            openAd() {
                i.playClickSound(), s.reportNativeAdClick(this.nativeAdId),
                    console.log("reportNativeAdClick:", this.nativeAdId),
                    i.closeView(this.owner)
            }
            onTouchMove(e) {
                isNativeMoveMistakenActive() && (this.adBg.off(t.Event
                    .MOUSE_MOVE, this, this.onTouchMove),
                    this.adBg.off(t.Event.CLICK, this, this.openAd),
                    this.openAd())
            }
            onOpenNativeAd() {
                isAwardCloseBtnOpenAd() && (this.openAd(), t.stage.off(
                    a.JUMP_AWARD_IN_NATIVEAD, this, this.onOpenNativeAd
                ))
            }
        });
        t.ClassUtils.regClass("fc.view.NativeBannerAdPage", class extends fc.plugin
            .BaseView {
            constructor() {
                super(), this.nativeAd = null, this.adImage = null,
                    this.adTitle = null, this.adDesc = null, this.adBtn =
                    null, this.closeBtn = null, this.nativeAdId =
                    null, this.adBg = null, this.passedTime = 0,
                    this.isAdReady = !1, this.initialized = !1
            }
            onAwake() {
                super.onAwake(), fc.view.linkView2Script(this, this
                    .owner, ["nativeAd"]), this.adBg = this.nativeAd
                        .getChildByName("adBg"), this.adImage = this.nativeAd
                            .getChildByName("adImage"), this.adTitle = this
                                .nativeAd.getChildByName("adTitle"), this.adDesc =
                    this.nativeAd.getChildByName("adDesc"), this.adBtn =
                    this.nativeAd.getChildByName("adBtn"), this.closeBtn =
                    this.nativeAd.getChildByName("closeBtn"), this.closeBtn2 =
                    this.nativeAd.getChildByName("closeBtn2"), this
                        .closeBtn2 && (this.closeBtn2.visible =
                            isNativeTouchMistakenActive()), this.nativeAd
                                .visible = !1, this.nativeAd.alpha = 0, this.isAdReady = !
                                1, this.passedTime = 0, this.initialized = !0,
                    t.stage.on(a.UI_VIEW_CLOSED, this, this.onViewClosed),
                    t.stage.on(a.DEVICE_SHOW, this, this.onAppShow),
                    t.stage.on(a.HIDE_NATIVEBANNER, this, this.hideNativeBanner),
                    t.stage.on(a.SHOW_NATIVEBANNER, this, this.showNativeBanner)
            }
            onStart() {
                isNativeActive() ? (this.loadAd(), this.owner.timerLoop(
                    i.pluginCfg.pg_banner_refresh_time,
                    this, this.loadAd, null, !1)) : (s.showBannerAd(),
                        this.owner.frameOnce(1, this, this.closeView)
                )
            }
            loadAd() {
                console.log("加载原生banner"), this.isAdReady = !1,
                    this.passedTime = 0, s.createNativeAd(t.Handler
                        .create(this, this.onAdError)), s.loadNativeAd(
                            t.Handler.create(this, this.onAdLoaded), t.Handler
                                .create(this, this.onAdError))
            }
            onDestroy() {
                super.onDestroy(), this.adBg.off(t.Event.CLICK,
                    this, this.openAd), this.adBg.off(t.Event.MOUSE_MOVE,
                        this, this.onTouchMove), this.adBtn.off(t.Event
                            .CLICK, this, this.openAd), this.closeBtn.off(
                                t.Event.CLICK, this, this.closeAd), this.closeBtn2 &&
                    this.closeBtn2.off(t.Event.CLICK, this, this.closeAd),
                    t.stage.off(a.DEVICE_SHOW, this, this.onAppShow),
                    t.stage.off(a.UI_VIEW_CLOSED, this, this.onViewClosed),
                    t.stage.off(a.HIDE_NATIVEBANNER, this, this.hideNativeBanner),
                    t.stage.off(a.SHOW_NATIVEBANNER, this, this.showNativeBanner),
                    this.owner.clearTimer(this, this.loadAd)
            }
            onViewClosed(e, t) {
                t != fc.view.ViewId.NativeAdb && t != fc.view.ViewId
                    .NativeAdm && t != fc.view.ViewId.NativeAdn &&
                    t != fc.view.ViewId.Sign && t != fc.view.ViewId
                        .Turntable && t != fc.view.ViewId.Store && t !=
                    fc.view.ViewId.NativeBannerAd && t != fc.view.ViewId
                        .NativeAdbOppo && t != fc.view.ViewId.NativeAdi &&
                    t != fc.view.ViewId.ChooseSkillAd && (this.isAdReady = !
                        0, this.owner.frameOnce(1, this, this.closeView)
                    )
            }
            onAdError(e) {
                console.log("onNativeAdError", e), console.log(e),
                    this.nativeAd.visible = !1
            }
            onAdLoaded(e) {
                if (console.log("onNativeAdLoaded", e), this.isAdReady = !
                    0, e && e.adList && 0 != e.adList.length) {
                    this.adBg.on(t.Event.CLICK, this, this.openAd),
                        this.adBg.on(t.Event.MOUSE_MOVE, this, this
                            .onTouchMove);
                    var i, n = e.adList[Math.floor(Math.random() *
                        e.adList.length)];
                    i = n.iconUrlList && n.iconUrlList.length > 0 ?
                        n.iconUrlList[Math.floor(Math.random() * n.iconUrlList
                            .length)] : n.icon ? n.icon : n.imgUrlList &&
                                n.imgUrlList.length > 0 ? n.imgUrlList[Math
                                    .floor(Math.random() * n.imgUrlList.length)
                            ] : n.logoUrl ? n.logoUrl : null, this.nativeAdId =
                        n.adId, console.log("onAdLoaded:" + n.title),
                        null != i && this.adImage.loadImage(i, null),
                        this.adDesc.text = n.desc || n.title || "",
                        this.adTitle.text = n.title || n.source,
                        this.adBtn.label = n.clickBtnTxt && n.clickBtnTxt
                            .length > 0 ? n.clickBtnTxt : "View ads", this.adBtn
                                .on(t.Event.CLICK, this, this.openAd),
                        isNativeTouchMistakenActive() ? (this.closeBtn2 &&
                            (this.closeBtn2.mouseEnabled = !0),
                            this.closeBtn && (this.closeBtn.mouseEnabled = !
                                1), this.closeBtn2 && this.closeBtn2
                                    .on(t.Event.CLICK, this, this.closeAd)) :
                            (this.closeBtn2 && (this.closeBtn2.mouseEnabled = !
                                1), this.closeBtn && (this.closeBtn
                                    .mouseEnabled = !0), this.closeBtn.on(
                                        t.Event.CLICK, this, this.closeAd)),
                        this.nativeAd.visible = !0, this.nativeAd.alpha =
                        1, s.reportNativeAdShow(this.nativeAdId),
                        console.log("reportNativeAdShow:", this.nativeAdId),
                        s.hideBannerAd()
                }
            }
            closeAd() {
                isNativeCloseBtnOpenAd() ? this.openAd() : (i.playClickSound(),
                    this.closeView())
            }
            closeView() {
                this.owner.clearTimer(this, this.loadAd), i.closeView(
                    this.owner)
            }
            openAd() {
                s.reportNativeAdClick(this.nativeAdId), console.log(
                    "reportNativeAdClick:", this.nativeAdId),
                    this.owner.clearTimer(this, this.loadAd), this.adBg
                        .off(t.Event.CLICK, this, this.openAd), this.adBg
                            .off(t.Event.MOUSE_MOVE, this, this.onTouchMove)
            }
            onAppShow() {
                this.owner.clearTimer(this, this.loadAd), this.loadAd(),
                    this.owner.timerLoop(i.pluginCfg.pg_banner_refresh_time,
                        this, this.loadAd, null, !1)
            }
            onTouchMove(e) {
                isNativeMoveMistakenActive() && this.openAd()
            }
            hideNativeBanner() {
                this.nativeAd.visible = !1, this.owner.clearTimer(
                    this, this.loadAd)
            }
            showNativeBanner() {
                isNativeActive() && (this.loadAd(), this.owner.timerLoop(
                    i.pluginCfg.pg_banner_refresh_time,
                    this, this.loadAd, null, !1))
            }
        });
        t.ClassUtils.regClass("fc.view.NativeIconAd", class extends t.Script {
            constructor() {
                super(), this.nativeAd = null, this.adImage = null,
                    this.adTitle = null, this.adDesc = null, this.adBtn =
                    null, this.closeBtn = null, this.nativeAdId =
                    null, this.adBg = null, this.passedTime = 0,
                    this.isAdReady = !1, this.initialized = !1
            }
            onAwake() {
                super.onAwake(), fc.view.linkView2Script(this, this
                    .owner, ["nativeAd"]), this.adBg = this.nativeAd
                        .getChildByName("adBg"), this.adImage = this.nativeAd
                            .getChildByName("adImage"), this.adTitle = this
                                .nativeAd.getChildByName("adTitle"), this.adDesc =
                    this.nativeAd.getChildByName("adDesc"), this.adBtn =
                    this.nativeAd.getChildByName("adBtn"), this.closeBtn =
                    this.nativeAd.getChildByName("closeBtn"), this.closeBtn2 =
                    this.nativeAd.getChildByName("closeBtn2"), this
                        .closeBtn2 && (this.closeBtn2.visible =
                            isNativeTouchMistakenActive()), this.nativeAd
                                .alpha = 0, this.isAdReady = !1, this.passedTime =
                    0, this.initialized = !0, t.stage.on(a.UI_VIEW_CLOSED,
                        this, this.onViewClosed), t.stage.on(a.DEVICE_SHOW,
                            this, this.onAppShow)
            }
            onStart() {
                isNativeActive() && (this.loadAd(), this.owner.timerLoop(
                    i.pluginCfg.pg_banner_refresh_time,
                    this, this.loadAd, null, !1))
            }
            loadAd() {
                console.log("加载原生icon"), this.isAdReady = !1, this.passedTime =
                    0, s.createNativeAd(t.Handler.create(this, this
                        .onAdError)), s.loadNativeAd(t.Handler.create(
                            this, this.onAdLoaded), t.Handler.create(
                                this, this.onAdError))
            }
            onDestroy() {
                super.onDestroy(), this.adBg.off(t.Event.CLICK,
                    this, this.openAd), this.adBg.off(t.Event.MOUSE_MOVE,
                        this, this.onTouchMove), this.adBtn.off(t.Event
                            .CLICK, this, this.skipAd), this.closeBtn.off(
                                t.Event.CLICK, this, this.closeAd), this.closeBtn2 &&
                    this.closeBtn2.off(t.Event.CLICK, this, this.closeAd),
                    t.stage.off(a.DEVICE_SHOW, this, this.onAppShow),
                    t.stage.off(a.UI_VIEW_CLOSED, this, this.onViewClosed),
                    this.owner.clearTimer(this, this.loadAd)
            }
            onViewClosed(e, t) { }
            onAdError(e) {
                console.log("onNativeAdError", e), console.log(e)
            }
            onAdLoaded(e) {
                if (console.log("onNativeAdLoaded", e), this.isAdReady = !
                    0, e && e.adList && 0 != e.adList.length) {
                    this.adBg.on(t.Event.CLICK, this, this.openAd),
                        this.adBg.on(t.Event.MOUSE_MOVE, this, this
                            .onTouchMove);
                    var i, n = e.adList[Math.floor(Math.random() *
                        e.adList.length)];
                    i = n.icon ? n.icon : n.iconUrlList && n.iconUrlList
                        .length > 0 ? n.iconUrlList[Math.floor(Math
                            .random() * n.iconUrlList.length)] : n.imgUrlList &&
                                n.imgUrlList.length > 0 ? n.imgUrlList[Math
                                    .floor(Math.random() * n.imgUrlList.length)
                    ] : n.logoUrl ? n.logoUrl : null, this.nativeAdId =
                        n.adId, console.log("onAdLoaded:" + n.title),
                        null != i && this.adImage.loadImage(i, null),
                        this.adDesc.text = n.desc, this.adTitle.text =
                        n.title, this.adBtn.label = n.clickBtnTxt &&
                            n.clickBtnTxt.length > 0 ? n.clickBtnTxt :
                            "View ads", isNativeTouchMistakenActive() ? (
                                this.closeBtn2 && (this.closeBtn2.mouseEnabled = !
                                    0), this.closeBtn && (this.closeBtn
                                        .mouseEnabled = !1), this.closeBtn2 &&
                                this.closeBtn2.on(t.Event.CLICK, this,
                                    this.closeAd)) : (this.closeBtn2 &&
                                        (this.closeBtn2.mouseEnabled = !1),
                                        this.closeBtn && (this.closeBtn.mouseEnabled = !
                                            0), this.closeBtn.on(t.Event.CLICK,
                                                this, this.closeAd)), this.owner.visible = !
                                                0, this.nativeAd.alpha = 1, s.reportNativeAdShow(
                                                    this.nativeAdId), console.log(
                                                        "reportNativeAdShow:", this.nativeAdId),
                        t.Tween.clearAll(this.owner), this.owner.rotation =
                        0, t.Tween.to(this.owner, {
                            rotation: 5
                        }, 250, t.Ease.linearNone, t.Handler.create(
                            this,
                            function () {
                                t.Tween.to(this.owner, {
                                    rotation: 0
                                }, 250, t.Ease.linearNone,
                                    null)
                            }))
                }
            }
            closeAd() {
                isNativeCloseBtnOpenAd() ? this.openAd() : (i.playClickSound(),
                    this.closeView())
            }
            closeView() {
                this.owner.clearTimer(this, this.loadAd), this.owner
                    .visible = !1
            }
            openAd() {
                s.reportNativeAdClick(this.nativeAdId), console.log(
                    "reportNativeAdClick:", this.nativeAdId),
                    this.owner.clearTimer(this, this.loadAd), this.adBg
                        .off(t.Event.CLICK, this, this.openAd), this.adBg
                            .off(t.Event.MOUSE_MOVE, this, this.onTouchMove)
            }
            onAppShow() {
                this.owner.clearTimer(this, this.loadAd), this.loadAd(),
                    this.owner.timerLoop(i.pluginCfg.pg_banner_refresh_time,
                        this, this.loadAd, null, !1)
            }
            onTouchMove(e) {
                isNativeMoveMistakenActive() && this.openAd()
            }
        });
        t.ClassUtils.regClass("fc.view.ChooseSkillPage", class extends fc.plugin
            .BaseView {
            constructor() {
                super(), this.nativeAd = null, this.videoAd1 = null,
                    this.videoAd2 = null, this.adBtn = null, this.closeBtn =
                    null, this.nativeAdId = null, this.passedTime =
                    0, this.isAdReady = !1, this.initialized = !1,
                    this.posThreeY = [155, 375, 595]
            }
            onAwake() {
                if (super.onAwake(), linkView2Script(this, this.owner,
                    ["nativeAd", "videoAd1", "videoAd2"]), this
                        .adBtn = this.owner.getChildByName("middleUI")
                            .getChildByName("adBtn"), this.closeBtn = this.owner
                                .getChildByName("middleUI")
                                .getChildByName("closeBtn2"), this.adBtn &&
                                isNativeActive() && Math.random() > .5) {
                    var e = this.adBtn.x,
                        i = this.adBtn.y,
                        s = this.closeBtn.x,
                        n = this.closeBtn.y;
                    this.closeBtn.x = e, this.closeBtn.y = i, this.adBtn
                        .x = s, this.adBtn.y = n
                }
                this.adBtn.visible = !1, this.closeBtn.mouseEnabled = !
                    0, this.closeBtn.on(t.Event.CLICK, this, this.closeAd),
                    this.nativeAd.parent.visible = !1, this.nativeAd
                        .alpha = 0, this.isAdReady = !1, this.passedTime =
                    0, this.initialized = !0, t.stage.on(a.UI_VIEW_CLOSED,
                        this, this.onViewClosed), t.stage.event(a.HIDE_NATIVEBANNER)
            }
            onStart() {
                i.pluginCfg.pg_choose_skills || this.closeView(),
                    this.isAdReady = !1, this.passedTime = 0, this.nativeAd
                        .parent.visible = !0;
                let e = null;
                var n = i.pluginCfg.pg_choose_skills.concat();
                console.log("skillCfg:", n);
                for (let t = 0; t < n.length; t++) {
                    let i = n[t];
                    if (0 == i.adtype) {
                        e = i;
                        break
                    }
                }
                if (e && isNativeActive()) {
                    let i = n.indexOf(e);
                    n.splice(i, 1), console.log("skillCfg remvoed:",
                        n), s.createNativeAd(t.Handler.create(
                            this, this.onAdError)), s.loadNativeAd(
                                t.Handler.create(this, this.onAdLoaded),
                                t.Handler.create(this, this.onAdError));
                    let o = Math.floor(Math.random() * this.posThreeY
                        .length);
                    this.nativeAd.x = this.posThreeY[o], this.posThreeY
                        .splice(o, 1), this.videoAd1.x = this.posThreeY[
                        0], this.videoAd2.x = this.posThreeY[1]
                } else this.videoAd1.x = 265, this.videoAd2.x = 486;
                if (n.length > 0) {
                    this.videoAd1.visible = !0, this.videoAd2.visible = !
                        0;
                    let e = n[Math.floor(Math.random() * n.length)];
                    this.videoAd1.getChildByName("adImage")
                        .skin = e.icon, this.videoAd1.getChildByName(
                            "adTitle")
                            .text = e.name, this.videoAd1.getChildByName(
                                "adImage")
                                .on(t.Event.CLICK, this, this.openVideoAd,
                                    [e]), e = n[Math.floor(Math.random() *
                                        n.length)], this.videoAd2.getChildByName(
                                            "adImage")
                                            .skin = e.icon, this.videoAd2.getChildByName(
                                                "adTitle")
                                                .text = e.name, this.videoAd2.getChildByName(
                                                    "adImage")
                                                    .on(t.Event.CLICK, this, this.openVideoAd,
                                                        [e])
                } else this.videoAd1.visible = !1, this.videoAd2.visible = !
                    1
            }
            onDestroy() {
                super.onDestroy(), this.nativeAd.getChildByName(
                    "adImage")
                    .off(t.Event.CLICK, this, this.openAd), this.adBtn
                        .off(t.Event.CLICK, this, this.openAd), this.closeBtn
                            .off(t.Event.CLICK, this, this.closeAd), t.stage
                                .off(a.UI_VIEW_CLOSED, this, this.onViewClosed),
                    this.nativeAd.getChildByName("adImage")
                        .off(t.Event.MOUSE_MOVE, this, this.onTouchMove)
            }
            onViewClosed(e, t) {
                t != fc.view.ViewId.NativeAdb && t != fc.view.ViewId
                    .NativeAdm && t != fc.view.ViewId.NativeAdn &&
                    t != fc.view.ViewId.NativeBannerAd && t != fc.view
                        .ViewId.NativeAdbOppo && t != fc.view.ViewId.NativeAdi &&
                    t != fc.view.ViewId.ChooseSkillAd && (this.isAdReady = !
                        0, this.owner.frameOnce(1, this, this.closeView)
                    )
            }
            onAdError(e) {
                this.isAdReady = !0, console.log("onNativeAdError",
                    e), console.log(e), this.nativeAd.visible = !
                    1, this.adBtn.visible = !1
            }
            onAdLoaded(e) {
                if (console.log("onNativeAdLoaded", e), this.isAdReady = !
                    0, !e || !e.adList || 0 == e.adList.length)
                    return this.nativeAd.visible = !1, void (this.adBtn
                        .visible = !1);
                this.nativeAd.getChildByName("adImage")
                    .on(t.Event.CLICK, this, this.openAd), this.nativeAd
                        .getChildByName("adImage")
                        .on(t.Event.MOUSE_MOVE, this, this.onTouchMove);
                var i, n = e.adList[Math.floor(Math.random() * e.adList
                    .length)];
                i = n.iconUrlList && n.iconUrlList.length > 0 ? n.iconUrlList[
                    Math.floor(Math.random() * n.iconUrlList.length)
                ] : n.icon ? n.icon : n.imgUrlList && n.imgUrlList
                    .length > 0 ? n.imgUrlList[Math.floor(Math.random() *
                        n.imgUrlList.length)] : n.logoUrl ? n.logoUrl :
                    null, this.nativeAdId = n.adId, console.log(
                        "onAdLoaded:" + n.title), null != i && this
                            .nativeAd.getChildByName("adImage")
                            .loadImage(i, null), this.nativeAd.getChildByName(
                                "adTitle")
                                .text = n.title, this.adBtn.label = "View ads",
                    this.adBtn.visible = !0, this.adBtn.on(t.Event.CLICK,
                        this, this.openAd), this.nativeAd.alpha = 1,
                    this.closeBtn.addComponent(r), s.reportNativeAdShow(
                        this.nativeAdId), console.log(
                            "reportNativeAdShow:", this.nativeAdId)
            }
            closeAd() {
                isNativeCloseBtnOpenAd() ? this.openAd() : (i.playClickSound(),
                    this.closeView())
            }
            closeView() {
                i.closeView(this.owner), t.stage.event(a.SHOW_NATIVEBANNER)
            }
            openAd() {
                i.playClickSound(), s.reportNativeAdClick(this.nativeAdId),
                    console.log("reportNativeAdClick:", this.nativeAdId),
                    i.closeView(this.owner)
            }
            onTouchMove(e) {
                isNativeMoveMistakenActive() && (this.nativeAd.getChildByName(
                    "adImage")
                    .off(t.Event.MOUSE_MOVE, this, this.onTouchMove),
                    this.nativeAd.getChildByName("adImage")
                        .off(t.Event.CLICK, this, this.openAd),
                    this.openAd())
            }
            openVideoAd(e) {
                // s.isVideoEnable() ? (this.adBtn.mouseEnabled = !1,
                //     this.closeBtn.mouseEnabled = !1, s.playVideo(
                //         t.Handler.create(this, function () {
                //             t.stage.event(a.CHOOSE_SKILLED,
                //                 e), this.closeView()
                //         }), t.Handler.create(this, function () {
                //             this.adBtn.mouseEnabled = !0,
                //                 this.closeBtn.mouseEnabled = !
                //                 0, isEnableCancelVideoModal() &&
                //                 showModal(t.Handler.create(
                //                     this,
                //                     function (t) {
                //                         t && t.confirm &&
                //                             this.openVideoAd(
                //                                 e)
                //                     }))
                //         }), t.Handler.create(this, function () {
                //             this.adBtn.mouseEnabled = !0,
                //                 this.closeBtn.mouseEnabled = !
                //                 0, i.showToastMsg(i.langCfg
                //                     .novideotxt)
                //         }))) : (i.showToastMsg(i.langCfg.novideotxt2),
                //             this.adBtn.mouseEnabled = !0, this.closeBtn
                //                 .mouseEnabled = !0)
                t.stage.event(a.CHOOSE_SKILLED,
                    e), this.closeView()
            }
        });
        t.ClassUtils.regClass("fc.view.SignPage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.closeBtn = null, this.awardList =
                    null, this.signBtn = null, this.signBtnLab =
                    null, this.videoBtn = null
            }
            onAwake() {
                // super.onAwake(), linkView2Script(this, this.owner,
                //     ["closeBtn", "awardList", "signBtn",
                //         "videoBtn"
                //     ]);
                // var e = i.playerInfo;
                // this.initAwardList();
                // var s = e.signedDays;
                // if (n.isToday(e.signTime)) this.freshAwardListState(
                //     s - 1, !0), this.videoBtn.visible = !1,
                //     this.signBtn.visible = !1;
                // else {
                //     if (this.freshAwardListState(s, !1), this.videoBtn
                //         .visible = !0, this.signBtn.visible = !0,
                //         isMistakenActive() && Math.random() > .5) {
                //         var o = this.signBtn.y,
                //             a = this.videoBtn.y;
                //         this.signBtn.y = a, this.videoBtn.y = o
                //     }
                //     this.signBtn.addComponent(d)
                //         .viewId = this.owner.viewId, this.signBtn.on(
                //             d.EVENT_CLICK_MISLEAD_BTN, this, this.onSign
                //         ), this.closeBtn.addComponent(r)
                // }
                // this.closeBtn.on(t.Event.CLICK, this, this.onClose),
                //     this.videoBtn.on(t.Event.CLICK, this, this.onVideoAward)
            }
            onDestroy() {
                super.onDestroy(), this.signBtn.off(d.EVENT_CLICK_MISLEAD_BTN,
                    this, this.onSign), this.closeBtn.off(t.Event
                        .CLICK, this, this.onClose), this.videoBtn.off(
                            t.Event.CLICK, this, this.onVideoAward)
            }
            onSign() {
                i.playClickSound();
                var e = i.playerInfo;
                if (!n.isToday(e.signTime)) {
                    var s = e.signedDays,
                        o = i.pluginCfg.signAward[s].count;
                    i.savePlayerInfo({
                        signTime: Date.now(),
                        signedDays: e.signedDays + 1,
                        gold: e.gold + o
                    }), t.stage.event(a.GOLD_UPDATE), i.closeView(
                        this.owner), i.showToastMsg(
                            `${i.langCfg.getcointxt} ${o}`)
                }
            }
            onClose() {
                i.playClickSound(), i.closeView(this.owner)
            }
            onVideoAward() {
                i.playClickSound();
                var e = i.playerInfo;
                var n = fc.framework.MiscUtils;
                if (!n.isToday(e.signTime))
                    var s = e.signedDays,
                        n = 2 * i.pluginCfg.signAward[
                            s].count;
                i.savePlayerInfo({
                    signTime: Date.now(),
                    signedDays: e.signedDays +
                        1,
                    gold: e.gold +
                        n
                }), t.stage.event(a.GOLD_UPDATE),
                    i.showToastMsg(
                        `${i.langCfg.getcointxt} ${n}`
                    ), i.closeView(o)
                // if (s.isVideoEnable()) {
                //     this.signBtn.mouseEnabled = !1, this.videoBtn
                //         .mouseEnabled = !1, this.closeBtn.mouseEnabled = !
                //         1;
                //     var o = this.owner;
                //     s.playVideo(t.Handler.create(this, function () {
                //         var s = e.signedDays,
                //             n = 2 * i.pluginCfg.signAward[
                //                 s].count;
                //         i.savePlayerInfo({
                //             signTime: Date.now(),
                //             signedDays: e.signedDays +
                //                 1,
                //             gold: e.gold +
                //                 n
                //         }), t.stage.event(a.GOLD_UPDATE),
                //             i.showToastMsg(
                //                 `${i.langCfg.getcointxt} ${n}`
                //             ), i.closeView(o)
                //     }), t.Handler.create(this, function () {
                //         this.signBtn.mouseEnabled = !
                //             0, this.videoBtn.mouseEnabled = !
                //             0, this.closeBtn.mouseEnabled = !
                //             0,
                //             isEnableCancelVideoModal() &&
                //             showModal(t.Handler.create(
                //                 this,
                //                 function (e) {
                //                     e && e.confirm &&
                //                         this.onVideoAward()
                //                 }))
                //     }), t.Handler.create(this, function () {
                //         this.signBtn.mouseEnabled = !
                //             0, this.videoBtn.mouseEnabled = !
                //             0, this.closeBtn.mouseEnabled = !
                //             0, i.showToastMsg(i.langCfg
                //                 .novideotxt)
                //     }))
                // } else i.showToastMsg(i.langCfg.novideotxt2),

                //     this.signBtn.mouseEnabled = !0, this.videoBtn
                //         .mouseEnabled = !0, this.closeBtn.mouseEnabled = !
                //         0
            }
            initAwardList() {
                // var e = i.pluginCfg.signAward;
                // for (let i = 0; i < e.length; i++) {
                //     const n = this.awardList.getChildAt(i);
                //     if (null == n) return void console.warn(
                //         "[SignPage]initAwardList:",
                //         "invalid sign idx");
                //     const o = e[i];
                //     if (o.icon) {
                //         var t = n.getChildByName("icon");
                //         t.skin && (t.skin = o.icon)
                //     }
                //     if (o.count) {
                //         var s = n.getChildByName("award");
                //         s && (s.text = `x${o.count}`)
                //     }
                // }
            }
            freshAwardListState(e, t) {
                // const i = "fc-res/sign/img_state_frame_signed.png";
                // for (let s = 0; s < this.awardList.numChildren - 1; s++) {
                //     const n = this.awardList.getChildAt(s),
                //         o = n.getChildByName("state"),
                //         a = n.getChildByName("icon"),
                //         l = n.getChildByName("day"),
                //         h = n.getChildByName("title"),
                //         r = n.getChildByName("award");
                //     e > s ? (n.skin =
                //         "fc-res/sign/img_state_signed.png", o.visible = !
                //         0, o.skin = i, a.gray = !0, l.gray = !0,
                //         l.color = "#4e7699", h.gray = !0, h.color =
                //         "#4e7699", r.gray = !0, r.color =
                //         "#4e7699") : e == s ? (n.skin =
                //             "fc-res/sign/img_state_today.png", o.visible = !
                //             0, o.skin = t ? i :
                //                 "fc-res/sign/img_state_frame_today.png",
                //             a.gray = !1, l.gray = !1, l.color =
                //             "#7b6637", h.gray = !1, h.color =
                //             "#7b6637", r.gray = !1, r.color =
                //             "#7b6637") : (n.skin =
                //                 "fc-res/sign/img_state_unsigned.png", o
                //                     .visible = !1, a.gray = !1, l.gray = !1,
                //                 l.color = "#7b6637", h.gray = !1, h.color =
                //                 "#7b6637", r.gray = !1, r.color =
                //                 "#7b6637")
                // }
            }
        });
        t.ClassUtils.regClass("fc.view.StrengthPage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.closeBtn = null, this.videoBtn = null
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["closeBtn", "videoBtn"]), this.closeBtn.addComponent(
                        r), this.closeBtn && this.closeBtn.on(t.Event
                            .CLICK, this, this.closeView), this.videoBtn &&
                    this.videoBtn.on(t.Event.CLICK, this, this.openVideo)
            }
            onDestroy() {
                super.onDestroy(), this.closeBtn && this.closeBtn.off(
                    t.Event.CLICK, this, this.closeView), this.videoBtn &&
                    this.videoBtn.off(t.Event.CLICK, this, this.openVideo)
            }
            closeView() {
                i.playClickSound(), i.closeView(this.owner)
            }
            openVideo() {
                i.playClickSound(), s.isVideoEnable() ? (this.videoBtn
                    .mouseEnabled = !1, this.closeBtn.mouseEnabled = !
                    1, s.playVideo(t.Handler.create(this,
                        function () {
                            var e = i.playerInfo;
                            e.strength += video2Strength(),
                                i.savePlayerInfo({
                                    strength: e.strength
                                }), t.stage.event(a.STRENGTH_UPDATE),
                                this.closeView()
                        }), t.Handler.create(this, function () {
                            this.videoBtn.mouseEnabled = !0,
                                this.closeBtn.mouseEnabled = !
                                0, isEnableCancelVideoModal() &&
                                showModal(t.Handler.create(
                                    this,
                                    function (e) {
                                        e && e.confirm &&
                                            this.openVideo()
                                    }))
                        }), t.Handler.create(this, function () {
                            this.videoBtn.mouseEnabled = !0,
                                this.closeBtn.mouseEnabled = !
                                0, i.showToastMsg(i.langCfg
                                    .novideotxt)
                        }))) : i.showToastMsg(i.langCfg.novideotxt2)
            }
        });
        t.ClassUtils.regClass("fc.view.StorePage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.pageTag = null, this.goodsList = null,
                    this.closeBtn = null, this.showObj = null, this
                        .mTexture = null, this.goodsName = null, this.goodsNameBg =
                    null, this.goldVal = null, this.goodsType = 0,
                    this.goodsIdx = 0, this.doubleClickBuy = !1,
                    this.curSelectIdx = -1
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["pageTag", "goodsList", "closeBtn",
                        "showObj", "goodsName", "goodsNameBg",
                        "goldVal"
                    ]), this.doubleClickBuy = !!i.pluginCfg &&
                    1 == i.pluginCfg.pg_store_double_click_buy;
                var e = i.pluginCfg ? i.pluginCfg.storeCfg : null;
                if (null != e) {
                    var s = [];
                    for (let t = 0; t < e.length; t++) s.push({
                        skin: e[t]
                    });
                    this.pageTag.selectHandler = t.Handler.create(
                        this, this.onSelectTab, null, !1), this
                            .pageTag.renderHandler = t.Handler.create(
                                this, this.onRenderTab, null, !1), this
                                    .pageTag.array = s, this.pageTag.selectedIndex =
                        0, this.pageTag.selectEnable = !0, this.pageTag
                            .hScrollBarSkin = ""
                } else this.pageTag.visible = !1, this.onSelectTab(
                    0);
                this.goodsList.selectHandler = t.Handler.create(
                    this, this.onSelectItem, null, !1), this.goodsList
                        .renderHandler = t.Handler.create(this, this.onRenderItem,
                            null, !1), this.goodsList.vScrollBarSkin =
                    "", this.goodsName.visible = !1, this.goodsNameBg
                        .visible = !1, this.goldVal.value = i.playerInfo
                            .gold.toString(), 1 != i.pluginCfg.modelPreviewByImage &&
                    (this.mTexture = new t.Texture(fc.plugin.TextureCamera
                        .RenderTexture, t.Texture.DEF_UV), this
                            .showObj.graphics.drawTexture(this.mTexture)
                    ), this.closeBtn && this.closeBtn.on(t.Event.CLICK,
                        this, this.closeView), t.stage.on(a.GOLD_UPDATE,
                            this, this.updateGold), t.stage.on(a.STORE_UPDATE,
                                this, this.updateStore)
            }
            onDestroy() {
                super.onDestroy(), this.mTexture && (this.showObj.graphics
                    .clear(), this.mTexture.bitmap = null, this
                        .mTexture.destroy(), this.mTexture = null,
                    t.stage.event(a.TEXTURE_CAMERA_CLEAR)), t.stage
                        .off(a.GOLD_UPDATE, this, this.updateGold)
            }
            updateGold() {
                this.goldVal.value = i.playerInfo.gold.toString()
            }
            updateStore() {
                this.onSelectTab(this.goodsType)
            }
            onSelectTab(e) {
                if (this.curSelectIdx = -1, null != this.pageTag.array &&
                    0 != this.pageTag.array.length) {
                    var s = this.pageTag.getItem(this.goodsType),
                        n = this.goodsType;
                    if (this.goodsType = e, this.pageTag.setItem(n,
                        s), -1 != e) {
                        this.goodsType = e;
                        var o = this.pageTag.getItem(this.goodsType);
                        this.pageTag.setItem(this.goodsType, o);
                        var l = i.goodsCfg[this.goodsType];
                        this.goodsList.array = l, this.goodsList.selectedIndex = -
                            1, this.goodsIdx = i.playerInfo.goodsInUse[
                            this.goodsType], -1 == this.goodsIdx &&
                            (this.goodsIdx = 0);
                        for (let e = 0; e < l.length; e++) {
                            const s = l[e];
                            if (s.id == this.goodsIdx) {
                                this.goodsList.selectedIndex = e, 1 !=
                                    i.pluginCfg.modelPreviewByImage ?
                                    t.stage.event(a.TEXTURE_CAMERA_INIT,
                                        [s.subPkg, s.prefab, s.showAnim]
                                    ) : this.showObj.skin = s.iconUrl;
                                break
                            }
                        }
                    }
                }
            }
            onRenderTab(e, t) {
                e.index = t == this.pageTag.selectedIndex ? 1 : 0
            }
            onSelectItem(e) {
                if (null != this.goodsList.array && 0 != this.goodsList
                    .array.length && -1 != e) {
                    (h = this.goodsList.getItem(this.goodsIdx))
                        .update = !h.update, this.goodsList.setItem(
                            this.goodsIdx, h), i.playClickSound(),
                        this.goodsIdx = e;
                    var n = this.goodsList.array[this.goodsIdx];
                    n.name && n.name.length > 0 ? (this.goodsName.text =
                        n.name, this.goodsName.visible = !0,
                        this.goodsNameBg.visible = !0) : (this.goodsName
                            .visible = !1, this.goodsNameBg.visible = !
                            1);
                    var o = !1,
                        l = i.playerInfo;
                    if (-1 != l.goodsInBag[this.goodsType].indexOf(
                        n.id)) this.doubleClickBuy && this.curSelectIdx !=
                            e || (l.goodsInUse[this.goodsType] = this.goodsIdx,
                                i.savePlayerInfo(l), t.stage.event(a.STORE_USE_ITEM,
                                    [this.goodsType, n]));
                    else if (!this.doubleClickBuy || this.curSelectIdx ==
                        e)
                        if (0 == n.buy) l.gold >= n.price ? (l.gold -=
                            n.price, l.goodsInUse[this.goodsType] =
                            this.goodsIdx, l.goodsInBag[this.goodsType]
                                .push(this.goodsIdx), i.savePlayerInfo(
                                    l), i.showToastMsg(
                                        `${i.langCfg.gettxt} ${n.name}`
                                    ), t.stage.event(a.GOLD_UPDATE), t.stage
                                        .event(a.STORE_UNLOCK_ITEM, [this.goodsType,
                                            n
                                        ]), t.stage.event(a.STORE_USE_ITEM,
                                            [this.goodsType, n])) : (i.showToastMsg(
                                                i.langCfg.nocointxt), t.stage.event(
                                                    a.STORE_PREVIEW, [this.goodsType,
                                                    n
                                                ])), (h = this.goodsList.getItem(
                                                    this.goodsIdx))
                                                    .update = !h.update, this.goodsList.setItem(
                                                        this.goodsIdx, h);
                        else if (1 == n.buy) {
                            var h;
                            s.isVideoEnable() ? (this.goodsList.mouseEnabled = !
                                1, this.pageTag.mouseEnabled = !1,
                                s.playVideo(t.Handler.create(this,
                                    function () {
                                        this.goodsList.mouseEnabled = !
                                            0, this.pageTag.mouseEnabled = !
                                            0, l.goodsInUse[
                                            this.goodsType] =
                                            this.goodsIdx, l.goodsInBag[
                                                this.goodsType]
                                                .push(this.goodsIdx),
                                            i.savePlayerInfo(l);
                                        var e = this.goodsList.getItem(
                                            this.goodsIdx);
                                        e.update = !e.update,
                                            this.goodsList.setItem(
                                                this.goodsIdx,
                                                e), t.stage.event(
                                                    a.STORE_UNLOCK_ITEM,
                                                    [this.goodsType,
                                                        n
                                                    ]), t.stage.event(
                                                        a.STORE_USE_ITEM,
                                                        [this.goodsType,
                                                            n
                                                        ]), i.showToastMsg(
                                                            `${i.langCfg.gettxt} ${n.name}`
                                                        )
                                    }), t.Handler.create(this,
                                        function () {
                                            this.goodsList.mouseEnabled = !
                                                0, this.pageTag.mouseEnabled = !
                                                0,
                                                isEnableCancelVideoModal() &&
                                                showModal(t.Handler
                                                    .create(this,
                                                        function (t) {
                                                            t && t.confirm &&
                                                                this
                                                                    .onSelectItem(
                                                                        e
                                                                    )
                                                        }))
                                        }), t.Handler.create(this,
                                            function () {
                                                this.goodsList.mouseEnabled = !
                                                    0, this.pageTag.mouseEnabled = !
                                                    0, i.showToastMsg(i
                                                        .langCfg.novideotxt
                                                    ), t.stage.event(a.STORE_PREVIEW,
                                                        [this.goodsType,
                                                            n
                                                        ])
                                            }))) : (i.showToastMsg(i.langCfg
                                                .novideotxt), (h = this.goodsList
                                                    .getItem(this.goodsIdx))
                                                    .update = !h.update, this.goodsList
                                                        .setItem(this.goodsIdx, h), t.stage
                                                            .event(a.STORE_PREVIEW, [this.goodsType,
                                                                n
                                                            ]))
                        } else 2 == n.buy && (o = !0, i.showToastMsg(n.unlockDesc ?
                            n.unlockDesc : i.langCfg.unlock), t
                                .stage.event(a.STORE_PREVIEW, [this.goodsType,
                                    n
                                ]));
                    1 != i.pluginCfg.modelPreviewByImage ? o && n.lockPrefab ?
                        t.stage.event(a.TEXTURE_CAMERA_INIT, [n.subPkg,
                        n.lockPrefab, n.showAnim
                        ]) : t.stage.event(a.TEXTURE_CAMERA_INIT, [
                            n.subPkg, n.prefab, n.showAnim
                        ]) : o && n.lockIcon ? this.showObj.skin =
                            n.lockIcon : this.showObj.skin = n.iconUrl,
                        this.curSelectIdx = e, this.goodsList._selectedIndex = -
                        1
                }
            }
            onRenderItem(e, t) {
                var s = this.goodsList.array[t];
                if (s) {
                    var n = i.playerInfo.goodsInBag[this.goodsType],
                        o = i.playerInfo.goodsInUse[this.goodsType],
                        a = e.getChildByName("price"),
                        l = e.getChildByName("bg"),
                        h = e.getChildByName("icon"); - 1 != n.indexOf(
                            s.id) ? (l.index = t == o ? 2 : 3, a.visible = !
                                1, h.skin = s.iconUrl) : (0 == s.buy ?
                                    (l.index = 0, a.visible = !0, a.value =
                                        s.price.toString()) : 1 == s.buy ?
                                        (l.index = 1, a.visible = !1) : 2 == s.buy &&
                                        (l.index = 4, a.visible = !1), h.skin =
                                    2 == s.buy && s.lockIcon ? s.lockIcon :
                                        s.iconUrl)
                } else console.warn("[StorePage]onRenderItem:",
                    "invalid goodsData, ", t)
            }
            closeView() {
                i.playClickSound(), i.closeView(this.owner)
            }
        });
        t.ClassUtils.regClass("fc.view.VipPage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.vipStateDesc = null, this.vipAwardDesc =
                    null, this.vipBtn = null, this.vipBtnIcon =
                    null, this.vipBtnDesc = null, this.closeBtn =
                    null, this.vipExchangeType = null
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["vipStateDesc", "vipAwardDesc", "closeBtn",
                        "vipBtn", "vipBtnIcon", "vipBtnDesc"
                    ]);
                var e = null == i.playerInfo.vipTimestamp ? 0 : i.playerInfo
                    .vipTimestamp;
                e = Date.now() - e;
                var n = i.pluginCfg.pg_vip_config;
                e > 864e5 ? (this.vipAwardDesc.text = n.awardDesc,
                    this.vipExchangeType = n.exchangeType, 1 ==
                        this.vipExchangeType && 0 == s.isVideoEnable() &&
                        1 == s.isShareEnable() ? this.vipExchangeType =
                    0 : 0 == this.vipExchangeType && 0 == s.isShareEnable() &&
                    (this.vipExchangeType = 1), this.freshExchangeBtn(),
                    this.vipBtn.on(t.Event.CLICK, this, this.exchangeVip),
                    this.vipStateDesc.text = i.langCfg.becomeVip
                ) : (this.closeBtn.y = this.vipBtn.y, this.vipBtn
                    .visible = !1, this.vipBtn.visible = !1,
                    this.vipBtnIcon.visible = !1, this.vipBtnDesc
                        .visible = !1, e = (864e5 - e) / 6e4, this.vipStateDesc
                            .text = i.langCfg.vipLeft + Math.floor(e) +
                    i.langCfg.vipTimeUnit), this.closeBtn.on(t.Event
                        .CLICK, this, this.closePage)
            }
            onDestroy() {
                this.vipBtn.off(t.Event.CLICK, this, this.exchangeVip),
                    this.closeBtn.off(t.Event.CLICK, this, this.closePage)
            }
            exchangeVip() {
                i.playClickSound(), this.vipBtn.mouseEnabled = !1,
                    this.closeBtn.mouseEnabled = !1, 0 == this.vipExchangeType ?
                        (this.vipBtn.mouseEnabled = !0, this.closeBtn.mouseEnabled = !
                            0, s.shareAppMessage(null, t.Handler.create(
                                this, this.onExchengeSuccess), t.Handler
                                    .create(this, function () {
                                        this.vipBtn.mouseEnabled = !0,
                                            this.closeBtn.mouseEnabled = !
                                            0
                                    }))) : (s.playVideo(t.Handler.create(
                                        this, this.onExchengeSuccess), t.Handler
                                            .create(this, function () {
                                                this.onExchengeSuccess()
                                            }), t.Handler.create(this, function () {
                                                this.vipBtn.mouseEnabled = !0,
                                                    this.closeBtn.mouseEnabled = !
                                                    0
                                            })), s.playVideo(t.Handler.create(this,
                                                this.onExchengeSuccess), t.Handler.create(
                                                    this,
                                                    function () {
                                                        this.vipBtn.mouseEnabled = !0,
                                                            this.closeBtn.mouseEnabled = !
                                                            0, B.isEnableCancelVideoModal() &&
                                                            B.showVideoConfirmModal(t.Handler
                                                                .create(this, function (
                                                                    e) {
                                                                    e && e.confirm &&
                                                                        this.exchangeVip()
                                                                }))
                                                    }), t.Handler.create(this, function () {
                                                        this.vipBtn.mouseEnabled = !0,
                                                            this.closeBtn.mouseEnabled = !
                                                            0
                                                    })))
            }
            closePage() {
                i.closeView(this.owner)
            }
            freshExchangeBtn() {
                0 == this.vipExchangeType ? (this.vipBtnDesc.text =
                    "Min享领取", this.vipBtnIcon.skin =
                    "fc-res/tip/btn_icon_share.png") : (this.vipBtnDesc
                        .text = "Watch An Ad", this.vipBtnIcon.skin =
                        "fc-res/tip/btn_icon_video.png")
            }
            onExchengeSuccess() {
                if (!isVipValid()) {
                    this.vipBtn.mouseEnabled = !0, this.closeBtn.mouseEnabled = !
                        0, i.savePlayerInfo({
                            isVip: 1,
                            vipTimestamp: Date.now()
                        }), t.stage.event(fc.define.Event.VIP_UPDATE);
                    var e = Date.now() - i.playerInfo.vipTimestamp,
                        n = i.pluginCfg.pg_vip_config;
                    e > 864e5 ? (this.vipAwardDesc.text = n.awardDesc,
                        this.vipExchangeType = n.exchangeType,
                        1 == this.vipExchangeType && 0 == s.isVideoEnable() &&
                            1 == s.isShareEnable() ? this.vipExchangeType =
                        0 : 0 == this.vipExchangeType && 0 == s
                            .isShareEnable() && (this.vipExchangeType =
                                1), this.freshExchangeBtn(), this.vipBtn
                                    .on(t.Event.CLICK, this, this.exchangeVip),
                        this.vipStateDesc.text = i.langCfg.becomeVip
                    ) : (this.closeBtn.y = this.vipBtn.y, this.vipBtn
                        .visible = !1, this.vipBtn.visible = !1,
                        this.vipBtnIcon.visible = !1, this.vipBtnDesc
                            .visible = !1, e = (864e5 - e) / 6e4,
                        this.vipStateDesc.text = i.langCfg.vipLeft +
                        Math.floor(e) + i.langCfg.vipTimeUnit)
                }
            }
        });
        t.ClassUtils.regClass("fc.view.SecretBoxPage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.awardList = null, this.closeBtn =
                    null, this.videoBtn = null, this.videoDesc =
                    null, this.keyIcon = null, this.keyNum = null,
                    this.keyVal = 3
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["awardList", "closeBtn", "videoBtn",
                        "videoDesc", "keyIcon", "keyNum"
                    ]), this.closeBtn && this.closeBtn.on(t.Event
                        .CLICK, this, this.closeView), this.videoBtn &&
                    this.videoBtn.on(t.Event.CLICK, this, this.playVideoGetKey),
                    isMistakenActive() ? this.closeBtn.visible = !1 :
                        this.closeBtn.visible = !0, this.videoBtn.visible = !
                        1, this.videoDesc.visible = !1, this.keyIcon.visible = !
                        0, this.keyNum.visible = !0, this.keyNum.value =
                    `*${this.keyVal}`, this.awardList.selectEnable = !
                    0, this.awardList.selectHandler = t.Handler.create(
                        this, this.openBox, null, !1), this.awardList
                            .renderHandler = t.Handler.create(this, this.renderBox,
                                null, !1);
                var e = [],
                    s = i.pluginCfg.secretBox;
                for (let t = 0; t < s.length; t++) e.push(t);
                for (var n = []; e.length > 0;) {
                    const t = Math.floor(Math.random() * e.length),
                        i = e[t];
                    e.splice(t, 1);
                    var o = s[i];
                    o.opened = 0, n.push(o)
                }
                this.awardList.array = n
            }
            onDestroy() {
                super.onDestroy()
            }
            renderBox(e, t) {
                var s = this.awardList.array[t],
                    n = e.getChildByName("box"),
                    o = e.getChildByName("gold"),
                    a = e.getChildByName("num"),
                    l = e.getChildByName("icon");
                if (1 == s.opened)
                    if (n.visible = !1, null == s.goodsType) o.visible = !
                        0, a.visible = !0, a.value = s.count.toString(),
                        l.visible = !1;
                    else {
                        o.visible = !1, a.visible = !1, l.visible = !
                            0;
                        var h = i.goodsCfg[s.goodsType];
                        for (let e = 0; e < h.length; e++)
                            if (h[e].id == s.goodsId) {
                                l.skin = h[e].iconUrl;
                                break
                            }
                    }
                else o.visible = !1, a.visible = !1, l.visible = !1,
                    n.visible = !0, s.ad ? n.skin =
                        "fc-res/secretBox/img_box_video.png" : n.skin =
                    "fc-res/secretBox/img_box_normal.png"
            }
            openBox(e) {
                if (i.playClickSound(), -1 != e) {
                    this.awardList._selectedIndex = -1;
                    var t = this.awardList.getItem(e);
                    t.opened || (t.ad ? this.playVideoOpenBox(e) :
                        this.keyVal > 0 ? this.saveAward(e) :
                            isVideoMistakenActive() ? this.playVideoGetKey() :
                                i.showToastMsg(i.langCfg.nokeytxt))
                }
            }
            closeView() {
                i.playClickSound(), i.closeView(this.owner)
            }
            playVideoOpenBox(e) {
                i.playClickSound(), s.isVideoEnable() ? (this.awardList
                    .mouseEnabled = !1, this.closeBtn.mouseEnabled = !
                    1, this.videoBtn.mouseEnabled = !1, s.playVideo(
                        t.Handler.create(this, function () {
                            this.awardList.mouseEnabled = !
                                0, this.closeBtn.mouseEnabled = !
                                0, this.videoBtn.mouseEnabled = !
                                0, this.saveAward(e)
                        }), t.Handler.create(this, function () {
                            this.awardList.mouseEnabled = !
                                0, this.closeBtn.mouseEnabled = !
                                0, this.videoBtn.mouseEnabled = !
                                0, isEnableCancelVideoModal() &&
                                showModal(t.Handler.create(
                                    this,
                                    function (t) {
                                        t && t.confirm &&
                                            this.playVideoOpenBox(
                                                e)
                                    }))
                        }), t.Handler.create(this, function () {
                            this.awardList.mouseEnabled = !
                                0, this.closeBtn.mouseEnabled = !
                                0, this.videoBtn.mouseEnabled = !
                                0, i.showToastMsg(i.langCfg
                                    .novideotxt)
                        }))) : i.showToastMsg(i.langCfg.novideotxt)
            }
            playVideoGetKey() {
                i.playClickSound(), s.isVideoEnable() ? (this.awardList
                    .mouseEnabled = !1, this.closeBtn.mouseEnabled = !
                    1, this.videoBtn.mouseEnabled = !1, s.playVideo(
                        t.Handler.create(this, function () {
                            this.awardList.mouseEnabled = !
                                0, this.closeBtn.mouseEnabled = !
                                0, this.videoBtn.mouseEnabled = !
                                0, this.keyVal = 3, this.keyNum
                                    .visible = !0, this.keyNum.value =
                                `*${this.keyVal}`, this.keyIcon
                                    .visible = !0, this.videoBtn
                                        .visible = !1, this.videoDesc
                                            .visible = !1
                        }), t.Handler.create(this, function () {
                            this.awardList.mouseEnabled = !
                                0, this.closeBtn.mouseEnabled = !
                                0, this.videoBtn.mouseEnabled = !
                                0, isEnableCancelVideoModal() &&
                                showModal(t.Handler.create(
                                    this,
                                    function (e) {
                                        e && e.confirm &&
                                            this.playVideoGetKey()
                                    }))
                        }), t.Handler.create(this, function () {
                            this.awardList.mouseEnabled = !
                                0, this.closeBtn.mouseEnabled = !
                                0, this.videoBtn.mouseEnabled = !
                                0, i.showToastMsg(i.langCfg
                                    .novideotxt)
                        }))) : i.showToastMsg(i.langCfg.novideotxt)
            }
            saveAward(e) {
                i.playClickSound();
                var t = this.awardList.array[e];
                if (null == t.goodsType) i.savePlayerInfo({
                    gold: i.playerInfo.gold + t.count
                }), i.showToastMsg(
                    `${i.langCfg.getcointxt} ${t.count}`);
                else {
                    var s = i.goodsCfg[t.goodsType];
                    for (let e = 0; e < s.length; e++)
                        if (s[e].id == t.goodsId) {
                            i.playerInfo.goodsInBag[t.goodsType].push(
                                t.goodsId), i.savePlayerInfo(i.playerInfo),
                                i.showToastMsg(
                                    `${i.langCfg.gettxt} ${s[e].name}`
                                );
                            break
                        }
                }
                var n = this.awardList.getItem(e);
                n.opened = 1, n.update = !n.update, this.awardList.setItem(
                    e, n), t.ad || (this.keyVal -= 1, this.keyNum
                        .value = `*${this.keyVal}`), 0 == this.keyVal &&
                    (this.keyNum.visible = !1, this.keyIcon.visible = !
                        1, this.videoBtn.visible = !0, this.videoDesc
                            .visible = !0, this.closeBtn.visible = !0,
                        this.closeBtn.addComponent(r), i.showToastMsg(
                            i.langCfg.nokeytxt))
            }
        });
        t.ClassUtils.regClass("fc.view.SecretAwardPage", class extends fc.plugin
            .BaseView {
            constructor() {
                super(), this.playBtn = null, this.s_switchPos =
                    null, this.s_allAd = null, this.s_miniCancel =
                    null, this.s_cancelDelay_0 = null, this.s_cancelDelay_1 =
                    null, this.s_checkMove = null, this.curBtnGroup =
                    null
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["playBtn", "s_switchPos", "s_allAd",
                        "s_miniCancel", "s_cancelDelay_0",
                        "s_cancelDelay_1", "s_checkMove"
                    ]), this.s_switchPos.visible = !1, this.s_allAd
                        .visible = !1, this.s_miniCancel.visible = !1,
                    this.s_cancelDelay_0.visible = !1, this.s_cancelDelay_1
                        .visible = !1, this.s_checkMove.visible = !1;
                let e = i.pluginCfg.pg_video_style;
                switch (isMistakenActive() ? e[Math.floor(Math.random() *
                    e.length)] : 0) {
                    case 0:
                        this.s_switchPos.visible = !0, this.s_switchPos
                            .addComponent(p), this.curBtnGroup =
                            this.s_switchPos;
                        break;
                    case 1:
                        this.s_allAd.visible = !0, this.s_allAd.addComponent(
                            u), this.curBtnGroup = this.s_allAd;
                        break;
                    case 2:
                        this.s_miniCancel.visible = !0, this.s_miniCancel
                            .addComponent(m), this.curBtnGroup =
                            this.s_miniCancel;
                        break;
                    case 3:
                        this.s_cancelDelay_0.visible = !0, this.s_cancelDelay_0
                            .addComponent(v), this.curBtnGroup =
                            this.s_cancelDelay_0;
                        break;
                    case 4:
                        this.s_cancelDelay_1.visible = !0, this.s_cancelDelay_1
                            .addComponent(v), this.curBtnGroup =
                            this.s_cancelDelay_1;
                        break;
                    case 5:
                        this.s_checkMove.visible = !0, this.s_checkMove
                            .addComponent(f), this.curBtnGroup =
                            this.s_checkMove, i.closeView(w.NativeAdb),
                            t.stage.timerOnce(1e3, this, () => {
                                o.hideBanner(w.SecretAward)
                            }, null, !1)
                }
                t.stage.on(g.PLAY_VIDEO, this, this.openVideo), t.stage
                    .on(g.JUMP_AWARD, this, this.onJumpAward),
                    isVideoImgBtnMistakenActive() && this.playBtn.on(
                        t.Event.CLICK, this, this.openVideo)
            }
            onDestroy() {
                super.onDestroy(), t.stage.off(g.PLAY_VIDEO, this,
                    this.openVideo), t.stage.off(g.JUMP_AWARD,
                        this, this.onJumpAward),
                    isVideoImgBtnMistakenActive() && this.playBtn.off(
                        t.Event.CLICK, this, this.openVideo)
            }
            onGetAward() {
                var e = 0,
                    s = i.pluginCfg.secretAward;
                for (let t = 0; t < s.length; t++) {
                    const i = s[t];
                    e += i.rate ? i.rate : 1
                }
                var n = Math.floor(Math.random() * e),
                    o = s.length - 1;
                for (let e = 0; e < s.length; e++) {
                    const t = s[e];
                    if ((n -= t.rate ? t.rate : 1) <= 0) {
                        o = e;
                        break
                    }
                }
                var l = i.pluginCfg.secretAward[o];
                this.saveAward(l), t.stage.event(a.GOLD_UPDATE), i.closeView(
                    this.owner)
            }
            onJumpAward() {
                t.stage.event(a.JUMP_AWARD_IN_NATIVEAD), i.playClickSound(),
                    i.closeView(this.owner)
            }
            saveAward(e) {
                if (null == e.goodsType) i.savePlayerInfo({
                    gold: i.playerInfo.gold + e.count
                }), i.showToastMsg(
                    `${i.langCfg.getcointxt} ${e.count}`), t.stage
                        .event(a.GOLD_UPDATE);
                else {
                    var s = i.goodsCfg[e.goodsType];
                    for (let t = 0; t < s.length; t++)
                        if (s[t].id == e.goodsId) {
                            i.playerInfo.goodsInBag[e.goodsType].push(
                                e.goodsId), i.savePlayerInfo(i.playerInfo),
                                i.showToastMsg(
                                    `${i.langCfg.gettxt} ${s[t].name}`
                                );
                            break
                        }
                }
            }
            openVideo() {
                i.playClickSound(), s.isVideoEnable() ? (this.curBtnGroup
                    .mouseEnabled = !1, this.playBtn.visible = !
                    1, s.playVideo(t.Handler.create(this,
                        function () {
                            this.onGetAward()
                        }), t.Handler.create(this, function () {
                            this.curBtnGroup.mouseEnabled = !
                                0, this.playBtn.visible = !
                                0, isEnableCancelVideoModal() &&
                                showModal(t.Handler.create(
                                    this,
                                    function (e) {
                                        e && e.confirm &&
                                            this.openVideo()
                                    }))
                        }), t.Handler.create(this, function () {
                            this.curBtnGroup.mouseEnabled = !
                                0, this.playBtn.visible = !
                                0, i.showToastMsg(i.langCfg
                                    .novideotxt)
                        }))) : i.showToastMsg(i.langCfg.novideotxt)
            }
        });
        t.ClassUtils.regClass("fc.view.TrialPage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.playBtn = null, this.s_switchPos =
                    null, this.s_allAd = null, this.s_miniCancel =
                    null, this.s_cancelDelay_0 = null, this.s_cancelDelay_1 =
                    null, this.s_checkMove = null, this.trialObj =
                    null, this.curBtnGroup = null, this.mTexture =
                    null, this.mCurTrialGoods = null
            }
            initView(e) {
                this.mNextStepCb = e && e.nextCb ? e.nextCb : null
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["playBtn", "trialObj", "s_switchPos",
                        "s_allAd", "s_miniCancel",
                        "s_cancelDelay_0", "s_cancelDelay_1",
                        "s_checkMove"
                    ]), this.s_switchPos.visible = !1, this.s_allAd
                        .visible = !1, this.s_miniCancel.visible = !1,
                    this.s_cancelDelay_0.visible = !1, this.s_cancelDelay_1
                        .visible = !1, this.s_checkMove.visible = !1;
                let e = i.pluginCfg.pg_video_style;
                switch (isMistakenActive() ? e[Math.floor(Math.random() *
                    e.length)] : 0) {
                    case 0:
                        this.s_switchPos.visible = !0, this.s_switchPos
                            .addComponent(p), this.curBtnGroup =
                            this.s_switchPos;
                        break;
                    case 1:
                        this.s_allAd.visible = !0, this.s_allAd.addComponent(
                            u), this.curBtnGroup = this.s_allAd;
                        break;
                    case 2:
                        this.s_miniCancel.visible = !0, this.s_miniCancel
                            .addComponent(m), this.curBtnGroup =
                            this.s_miniCancel;
                        break;
                    case 3:
                        this.s_cancelDelay_0.visible = !0, this.s_cancelDelay_0
                            .addComponent(v), this.curBtnGroup =
                            this.s_cancelDelay_0;
                        break;
                    case 4:
                        this.s_cancelDelay_1.visible = !0, this.s_cancelDelay_1
                            .addComponent(v), this.curBtnGroup =
                            this.s_cancelDelay_1;
                        break;
                    case 5:
                        this.s_checkMove.visible = !0, this.s_checkMove
                            .addComponent(f), this.curBtnGroup =
                            this.s_checkMove, i.closeView(w.NativeAdb),
                            t.stage.timerOnce(1e3, this, () => {
                                o.hideBanner(w.Trial)
                            }, null, !1)
                }
                for (var s = i.goodsCfg, n = i.playerInfo, l = [],
                    h = 0; h < s.length; h++) {
                    var r = s[h];
                    for (let e = 0; e < r.length; e++) {
                        const t = r[e];
                        0 != t.recommend && -1 == n.goodsInBag[h].indexOf(
                            e) && l.push(t)
                    }
                }
                this.mCurTrialGoods = l[Math.floor(Math.random() *
                    l.length)], 1 != i.pluginCfg.modelPreviewByImage ?
                        (this.mTexture = new t.Texture(fc.plugin.TextureCamera
                            .RenderTexture, t.Texture.DEF_UV), this
                                .trialObj.graphics.drawTexture(this.mTexture),
                            t.stage.event(a.TEXTURE_CAMERA_INIT, [this.mCurTrialGoods
                                .subPkg, this.mCurTrialGoods.prefab,
                            this.mCurTrialGoods.showAnim
                            ])) : this.trialObj.skin = this.mCurTrialGoods
                                .iconUrl, t.stage.on(g.PLAY_VIDEO, this, this.openVideo),
                    t.stage.on(g.JUMP_AWARD, this, this.closeView),
                    isVideoImgBtnMistakenActive() && this.playBtn.on(
                        t.Event.CLICK, this, this.openVideo)
            }
            onDestroy() {
                super.onDestroy(), this.mTexture && (this.trialObj.graphics
                    .clear(), this.mTexture.bitmap = null, this
                        .mTexture.destroy(), this.mTexture = null,
                    t.stage.event(a.TEXTURE_CAMERA_CLEAR)), t.stage
                        .off(g.PLAY_VIDEO, this, this.openVideo), t.stage
                            .off(g.JUMP_AWARD, this, this.closeView),
                    isVideoMistakenActive() && this.playBtn.off(t.Event
                        .CLICK, this, this.openVideo)
            }
            closeView() {
                i.closeView(this.owner)
            }
            changeMainRole() {
                t.stage.event(a.CHANGE_CUR_MODEL, [this.mCurTrialGoods
                    .prefab, this.mCurTrialGoods.showAnim,
                this.mCurTrialGoods
                ]), this.owner.timerOnce(1e3, this, function () {
                    i.closeView(this.owner)
                })
            }
            openVideo() {
                i.playClickSound(), s.isVideoEnable() ? (this.curBtnGroup
                    .mouseEnabled = !1, this.playBtn.visible = !
                    1, s.playVideo(t.Handler.create(this,
                        function () {
                            this.changeMainRole()
                        }), t.Handler.create(this, function () {
                            this.curBtnGroup.mouseEnabled = !
                                0, this.playBtn.visible = !
                                0, isEnableCancelVideoModal() &&
                                showModal(t.Handler.create(
                                    this,
                                    function (e) {
                                        e && e.confirm &&
                                            this.openVideo()
                                    }))
                        }), t.Handler.create(this, function () {
                            this.curBtnGroup.mouseEnabled = !
                                0, this.playBtn.visible = !
                                0, i.showToastMsg(i.langCfg
                                    .novideotxt)
                        }))) : i.showToastMsg(i.langCfg.novideotxt)
            }
        });
        t.ClassUtils.regClass("fc.view.PropTrialPage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.playBtn = null, this.s_switchPos =
                    null, this.s_allAd = null, this.s_miniCancel =
                    null, this.s_cancelDelay_0 = null, this.s_cancelDelay_1 =
                    null, this.s_checkMove = null, this.curBtnGroup =
                    null, this.autoClose = null
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.View, [
                    "playBtn", "s_switchPos", "s_allAd",
                    "s_miniCancel", "s_cancelDelay_0",
                    "s_cancelDelay_1", "s_checkMove"
                ]), this.s_switchPos.visible = !1, this.s_allAd
                    .visible = !1, this.s_miniCancel.visible = !1,
                    this.s_cancelDelay_0.visible = !1, this.s_cancelDelay_1
                        .visible = !1, this.s_checkMove.visible = !1;
                let e = i.pluginCfg.pg_video_style;
                switch (isMistakenActive() ? e[Math.floor(Math.random() *
                    e.length)] : 0) {
                    case 0:
                        this.s_switchPos.visible = !0, this.s_switchPos
                            .addComponent(p), this.curBtnGroup =
                            this.s_switchPos;
                        break;
                    case 1:
                        this.s_allAd.visible = !0, this.s_allAd.addComponent(
                            u), this.curBtnGroup = this.s_allAd;
                        break;
                    case 2:
                        this.s_miniCancel.visible = !0, this.s_miniCancel
                            .addComponent(m), this.curBtnGroup =
                            this.s_miniCancel;
                        break;
                    case 3:
                        this.s_cancelDelay_0.visible = !0, this.s_cancelDelay_0
                            .addComponent(v), this.curBtnGroup =
                            this.s_cancelDelay_0;
                        break;
                    case 4:
                        this.s_cancelDelay_1.visible = !0, this.s_cancelDelay_1
                            .addComponent(v), this.curBtnGroup =
                            this.s_cancelDelay_1;
                        break;
                    case 5:
                        this.s_checkMove.visible = !0, this.s_checkMove
                            .addComponent(f), this.curBtnGroup =
                            this.s_checkMove, i.closeView(w.NativeAdb),
                            t.stage.timerOnce(1e3, this, function () {
                                o.hideBanner(w.PropTrial)
                            }, null, !1)
                }
                for (var s = i.goodsCfg, n = i.playerInfo, a = [],
                    l = 0; l < s.length; l++) {
                    var h = s[l];
                    for (let e = 0; e < h.length; e++) {
                        const t = h[e];
                        0 != t.recommend && -1 == n.goodsInBag[l].indexOf(
                            e) && a.push(t)
                    }
                }
                t.stage.on(g.PLAY_VIDEO, this, this.openVideo), t.stage
                    .on(g.JUMP_AWARD, this, this.closeView),
                    isVideoImgBtnMistakenActive() && this.playBtn.on(
                        t.Event.CLICK, this, this.openVideo)
            }
            onDestroy() {
                super.onDestroy(), t.stage.off(g.PLAY_VIDEO, this,
                    this.openVideo), t.stage.off(g.JUMP_AWARD,
                        this, this.closeView),
                    isVideoMistakenActive() && this.playBtn.off(t.Event
                        .CLICK, this, this.openVideo)
            }
            onUpdate() {
                this.autoClose && (this.autoClose = !1, i.closeView(
                    this.View))
            }
            closeView() {
                i.closeView(this.View)
            }
            changeMainRole() {
                this.autoClose = !0, t.stage.event(a.TRIALPROP)
            }
            openVideo() {
                i.playClickSound(), s.isVideoEnable() ? (this.curBtnGroup
                    .mouseEnabled = !1, this.playBtn.visible = !
                    1, s.playVideo(t.Handler.create(this,
                        function () {
                            this.changeMainRole()
                        }), t.Handler.create(this, function () {
                            this.curBtnGroup.mouseEnabled = !
                                0, this.playBtn.visible = !
                                0, isEnableCancelVideoModal() &&
                                showModal(t.Handler.create(
                                    this,
                                    function (e) {
                                        e && e.confirm &&
                                            this.openVideo()
                                    }))
                        }), t.Handler.create(this, function () {
                            this.curBtnGroup.mouseEnabled = !
                                0, this.playBtn.visible = !
                                0, i.showToastMsg(i.langCfg
                                    .novideotxt)
                        }))) : i.showToastMsg(i.langCfg.novideotxt)
            }
        });
        t.ClassUtils.regClass("fc.view.TurntablePage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.playBtn = null, this.s_switchPos =
                    null, this.s_allAd = null, this.s_miniCancel =
                    null, this.s_cancelDelay_0 = null, this.s_cancelDelay_1 =
                    null, this.s_checkMove = null, this.awardList =
                    null, this.maxSpd = 360, this.minSpd = 30, this
                        .spdAcc = 66, this.rotSpd = 0, this.running = !
                        1, this.eugler = 0, this.step = 0, this.awardIdx =
                    0, this.awardRangeS = 0, this.awardRangeE = 0,
                    this.curBtnGroup = null
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["playBtn", "awardList", "s_switchPos",
                        "s_allAd", "s_miniCancel",
                        "s_cancelDelay_0", "s_cancelDelay_1",
                        "s_checkMove"
                    ]), this.s_switchPos.visible = !1, this.s_allAd
                        .visible = !1, this.s_miniCancel.visible = !1,
                    this.s_cancelDelay_0.visible = !1, this.s_cancelDelay_1
                        .visible = !1, this.s_checkMove.visible = !1;
                let e = i.pluginCfg.pg_video_style;
                switch (isMistakenActive() ? e[Math.floor(Math.random() *
                    e.length)] : 0) {
                    case 0:
                        this.s_switchPos.visible = !0, this.s_switchPos
                            .addComponent(p), this.curBtnGroup =
                            this.s_switchPos;
                        break;
                    case 1:
                        this.s_allAd.visible = !0, this.s_allAd.addComponent(
                            u), this.curBtnGroup = this.s_allAd;
                        break;
                    case 2:
                        this.s_miniCancel.visible = !0, this.s_miniCancel
                            .addComponent(m), this.curBtnGroup =
                            this.s_miniCancel;
                        break;
                    case 3:
                        this.s_cancelDelay_0.visible = !0, this.s_cancelDelay_0
                            .addComponent(v), this.curBtnGroup =
                            this.s_cancelDelay_0;
                        break;
                    case 4:
                        this.s_cancelDelay_1.visible = !0, this.s_cancelDelay_1
                            .addComponent(v), this.curBtnGroup =
                            this.s_cancelDelay_1;
                        break;
                    case 5:
                        this.s_checkMove.visible = !0, this.s_checkMove
                            .addComponent(f), this.curBtnGroup =
                            this.s_checkMove, i.closeView(w.NativeAdb),
                            t.stage.timerOnce(1e3, this, () => {
                                o.hideBanner(w.Turntable)
                            }, null, !1)
                }
                t.stage.on(g.PLAY_VIDEO, this, this.openVideo), t.stage
                    .on(g.JUMP_AWARD, this, this.closeView),
                    isVideoImgBtnMistakenActive() && this.playBtn.on(
                        t.Event.CLICK, this, this.openVideo), this.initAward()
            }
            onDestroy() {
                super.onDestroy(), t.stage.off(g.PLAY_VIDEO, this,
                    this.openVideo), t.stage.off(g.JUMP_AWARD,
                        this, this.closeView),
                    isVideoMistakenActive() && this.playBtn.off(t.Event
                        .CLICK, this, this.openVideo)
            }
            onUpdate() {
                if (this.running)
                    if (this.eugler += .001 * t.timer.delta * this.rotSpd,
                        0 == this.step) this.rotSpd += .001 * t.timer
                            .delta * this.spdAcc, this.rotSpd >= this.maxSpd &&
                            (this.step = 1, this.rotSpd = this.maxSpd),
                            this.awardList.rotation = this.eugler;
                    else if (1 == this.step) this.rotSpd -= .001 *
                        t.timer.delta * this.spdAcc, this.rotSpd <=
                        this.minSpd && (this.step = 2, this.rotSpd =
                            this.minSpd), this.awardList.rotation =
                        this.eugler;
                    else if (2 == this.step) {
                        var e = this.eugler % 360;
                        e < 0 && (e += 360), this.awardRangeS < this.awardRangeE ?
                            e < this.awardRangeE && e > this.awardRangeS &&
                            (this.step = 3) : e < this.awardRangeE && e >
                                0 ? this.step = 3 : e < 360 && e > this.awardRangeS &&
                            (this.step = 3), this.awardList.rotation =
                            this.eugler
                    } else 3 == this.step && (this.running = !1, this.saveAward(
                        this.awardIdx))
            }
            initAward() {
                var e = i.pluginCfg.turntableAward;
                for (let o = 0; o < this.awardList.numChildren; o++) {
                    const a = this.awardList.getChildAt(o),
                        l = e[o];
                    var t = a.getChildByName("num"),
                        s = a.getChildByName("icon");
                    if (null == l.goodsType) t.visible = !0, t.value =
                        l.count.toString();
                    else {
                        t.visible = !1;
                        var n = i.goodsCfg[l.goodsType];
                        for (let e = 0; e < n.length; e++)
                            if (n[e].id == l.goodsId) {
                                s.skin = n[e].iconUrl;
                                break
                            }
                    }
                }
            }
            closeView() {
                i.closeView(this.owner)
            }
            rotateTurntable() {
                this.step = 0, this.running = !0, this.rotSpd =
                    this.minSpd;
                var e = 0,
                    t = i.pluginCfg.turntableAward;
                for (let i = 0; i < t.length; i++) {
                    const s = t[i];
                    e += s.rate ? s.rate : 1
                }
                var s = Math.floor(Math.random() * e);
                this.awardIdx = t.length - 1;
                for (let e = 0; e < t.length; e++) {
                    const i = t[e];
                    if ((s -= i.rate ? i.rate : 1) <= 0) {
                        this.awardIdx = e;
                        break
                    }
                }
                this.awardRangeS = 45 * this.awardIdx - 15, this.awardRangeS <
                    0 && (this.awardRangeS += 360), this.awardRangeE =
                    45 * this.awardIdx + 15
            }
            saveAward(e) {
                var s = i.pluginCfg.turntableAward[e];
                if (null == s.goodsType) i.savePlayerInfo({
                    gold: i.playerInfo.gold + s.count
                }), i.showToastMsg(
                    `${i.langCfg.getcointxt} ${s.count}`), t.stage
                        .event(a.GOLD_UPDATE);
                else {
                    var n = i.goodsCfg[s.goodsType];
                    for (let e = 0; e < n.length; e++)
                        if (n[e].id == s.goodsId) {
                            i.playerInfo.goodsInBag[s.goodsType].push(
                                s.goodsId), i.savePlayerInfo(i.playerInfo),
                                i.showToastMsg(
                                    `${i.langCfg.gettxt} ${n[e].name}`
                                );
                            break
                        }
                }
                this.running = !1, this.curBtnGroup && (this.curBtnGroup
                    .visible = !0), this.playBtn.visible = !0
            }
            openVideo() {
                i.playClickSound(), s.isVideoEnable() ? (this.curBtnGroup
                    .visible = !1, this.playBtn.visible = !1, s
                        .playVideo(t.Handler.create(this, function () {
                            this.rotateTurntable()
                        }), t.Handler.create(this, function () {
                            this.curBtnGroup.visible = !0,
                                this.playBtn.visible = !0,
                                isEnableCancelVideoModal() &&
                                showModal(t.Handler.create(
                                    this,
                                    function (e) {
                                        e && e.confirm &&
                                            this.openVideo()
                                    }))
                        }), t.Handler.create(this, function () {
                            this.curBtnGroup.visible = !0,
                                this.playBtn.visible = !0,
                                i.showToastMsg(i.langCfg.novideotxt)
                        }))) : i.showToastMsg(i.langCfg.novideotxt)
            }
        });
        t.ClassUtils.regClass("fc.view.InsertAdPage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.outTime = !1
            }
            onAwake() {
                super.onAwake(), this.owner.visible = !1, console.log(
                    "insertAdPage loaded"), s.loadInsertAd(t.Handler
                        .create(this, this.onVideoLoaded), t.Handler
                            .create(this, this.closeView)) || i.closeView(
                                this.owner), this.owner.timerOnce(5e3, this,
                                    this.onLoadOutTime), t.stage.on(a.DEVICE_HIDE,
                                        this, this.onAppHide), t.stage.on(a.DEVICE_SHOW,
                                            this, this.onAppShow)
            }
            onDestroy() {
                super.onDestroy(), t.stage.off(a.DEVICE_HIDE, this,
                    this.onAppHide), t.stage.off(a.DEVICE_SHOW,
                        this, this.onAppShow)
            }
            onLoadOutTime() {
                this.outTime = !0, i.closeView(this.owner)
            }
            onVideoLoaded() {
                console.log("insertAd ready"), this.outTime ?
                    console.log("insertAd load out time") : (this.owner
                        .visible = !0, this.owner.clearTimer(this,
                            this.onLoadOutTime), s.showInsertAd(t.Handler
                                .create(this, this.onVideoClose), t.Handler
                                    .create(this, this.closeView)) || i.closeView(
                                        this.owner))
            }
            onVideoClose() {
                i.closeView(this.owner)
            }
            closeView() {
                i.closeView(this.owner)
            }
            onAppHide() { }
            onAppShow() {
                this.closeView()
            }
        });
        t.ClassUtils.regClass("fc.view.FullScreenAdPage", class extends fc.plugin
            .BaseView {
            constructor() {
                super()
            }
            onAwake() {
                super.onAwake(), console.log(
                    "fullScreenAdPage loaded"), s.loadFullScreenAd(
                        t.Handler.create(this, this.onVideoLoaded),
                        t.Handler.create(this, this.closeView)) ||
                    i.closeView(this.owner), this.owner.timerOnce(
                        5e3, this, this.onLoadOutTime)
            }
            onLoadOutTime() {
                this.outTime = !0, i.closeView(this.owner)
            }
            onVideoLoaded() {
                console.log("fullScreenAd ready"), this.outTime ?
                    console.log("fullScreenAd load out time") : (
                        this.owner.clearTimer(this, this.onLoadOutTime),
                        s.showFullScreenAd(t.Handler.create(this,
                            this.onVideoClose), t.Handler.create(
                                this, this.closeView)) || i.closeView(
                                    this.owner))
            }
            onVideoClose() {
                i.closeView(this.owner)
            }
            closeView() {
                i.closeView(this.owner)
            }
        });
        t.ClassUtils.regClass("fc.view.ExitPage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.confirmBtn = null, this.cancelBtn =
                    null
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["confirmBtn", "cancelBtn"]), this.confirmBtn
                        .on(t.Event.CLICK, this, this.exitGame), this.cancelBtn
                            .on(t.Event.CLICK, this, this.backGame)
            }
            onDestroy() {
                super.onDestroy(), this.confirmBtn.off(t.Event.CLICK,
                    this, this.exitGame), this.cancelBtn.off(t.Event
                        .CLICK, this, this.backGame)
            }
            exitGame() {
                i.playClickSound(), i.exitApplication()
            }
            backGame() {
                i.playClickSound(), i.closeView(this.owner)
            }
        });
        t.ClassUtils.regClass("fc.view.PausePage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.continueBtn = null, this.backHomeBtn =
                    null
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["continueBtn", "backHomeBtn"]), i.pause(),
                    this.continueBtn.on(t.Event.CLICK, this, this.continueGame),
                    this.backHomeBtn.on(t.Event.CLICK, this, this.backHome)
            }
            onDestroy() {
                super.onDestroy(), i.resume(), this.continueBtn.off(
                    t.Event.CLICK, this, this.continueGame),
                    this.backHomeBtn.off(t.Event.CLICK, this, this.backHome)
            }
            continueGame() {
                i.resume(), i.playClickSound(), i.closeView(this.owner)
            }
            backHome() {
                i.back2Home(), i.playClickSound(), i.closeAllViews()
            }
        });
        t.ClassUtils.regClass("fc.view.GameSettingPage", class extends fc.plugin
            .BaseView {
            constructor() {
                super(), this.continueBtn = null, this.backHomeBtn =
                    null, this.closeBtn = null, this.soundBtn =
                    null, this.musicBtn = null, this.vibratBtn =
                    null
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["continueBtn", "backHomeBtn", "closeBtn",
                        "soundBtn", "musicBtn", "vibratBtn"
                    ]), i.pause(), this.musicBtn.visible = null !=
                    i.appInfo.bgm && i.appInfo.bgm.length > 0, this
                        .continueBtn.on(t.Event.CLICK, this, this.continueGame),
                    this.closeBtn.on(t.Event.CLICK, this, this.continueGame),
                    this.backHomeBtn.on(t.Event.CLICK, this, this.backHome),
                    this.soundBtn.on(t.Event.CLICK, this, this.onSound),
                    this.musicBtn.on(t.Event.CLICK, this, this.onMusic),
                    this.vibratBtn.on(t.Event.CLICK, this, this.onVibrat)
            }
            onDestroy() {
                super.onDestroy(), i.resume(), this.continueBtn.off(
                    t.Event.CLICK, this, this.continueGame),
                    this.closeBtn.off(t.Event.CLICK, this, this.continueGame),
                    this.backHomeBtn.off(t.Event.CLICK, this, this.backHome),
                    this.soundBtn.off(t.Event.CLICK, this, this.onSound),
                    this.musicBtn.off(t.Event.CLICK, this, this.onMusic),
                    this.vibratBtn.off(t.Event.CLICK, this, this.onVibrat)
            }
            onStart() {
                super.onStart(), this.updateUI()
            }
            updateUI() {
                this.MiddleUI.visible = !0, this.MiddleUI.scaleX =
                    .1, this.MiddleUI.scaleY = .1, t.Tween.to(this.MiddleUI, {
                        scaleX: 1,
                        scaleY: 1
                    }, 200, null), this.soundBtn.index = fc.framework
                        .GameFrame.playerInfo.sound, this.musicBtn.index =
                    fc.framework.GameFrame.playerInfo.music, this.vibratBtn
                        .index = fc.framework.GameFrame.playerInfo.vibrate
            }
            continueGame() {
                i.playClickSound(), i.closeView(this.owner)
            }
            backHome() {
                i.back2Home(), i.playClickSound(), i.closeAllViews()
            }
            onSound() {
                fc.framework.GameFrame.playClickSound(), 1 == fc.framework
                    .GameFrame.playerInfo.sound ? (fc.framework.GameFrame
                        .savePlayerInfo({
                            sound: 0
                        }), fc.framework.Audio.stopAllSound()) : fc
                            .framework.GameFrame.savePlayerInfo({
                                sound: 1
                            }), this.soundBtn.index = fc.framework.GameFrame
                                .playerInfo.sound
            }
            onMusic() {
                fc.framework.GameFrame.playClickSound(), 1 == fc.framework
                    .GameFrame.playerInfo.music ? (fc.framework.GameFrame
                        .savePlayerInfo({
                            music: 0
                        }), fc.framework.Audio.stopMusic()) : (fc.framework
                            .GameFrame.savePlayerInfo({
                                music: 1
                            }), fc.framework.Audio.playMusic(fc.framework
                                .GameFrame.appInfo.bgm)), this.musicBtn
                                    .index = fc.framework.GameFrame.playerInfo.music
            }
            onVibrat() {
                fc.framework.GameFrame.playClickSound(), 1 == fc.framework
                    .GameFrame.playerInfo.vibrate ? fc.framework.GameFrame
                        .savePlayerInfo({
                            vibrate: 0
                        }) : fc.framework.GameFrame.savePlayerInfo({
                            vibrate: 1
                        }), this.vibratBtn.index = fc.framework.GameFrame
                            .playerInfo.vibrate
            }
        });
        t.ClassUtils.regClass("fc.view.HomeSettingPage", class extends fc.plugin
            .BaseView {
            constructor() {
                super(), this.closeBtn = null, this.soundBtn = null,
                    this.musicBtn = null, this.vibratBtn = null,
                    this.version = null
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["closeBtn", "soundBtn", "musicBtn",
                        "vibratBtn", "version"
                    ]), i.pause(), this.musicBtn.visible = null !=
                    i.appInfo.bgm && i.appInfo.bgm.length > 0, this
                        .closeBtn.on(t.Event.CLICK, this, this.continueGame),
                    this.soundBtn.on(t.Event.CLICK, this, this.onSound),
                    this.musicBtn.on(t.Event.CLICK, this, this.onMusic),
                    this.vibratBtn.on(t.Event.CLICK, this, this.onVibrat)
            }
            onDestroy() {
                super.onDestroy(), i.resume(), this.closeBtn.off(t.Event
                    .CLICK, this, this.continueGame), this.soundBtn
                        .off(t.Event.CLICK, this, this.onSound), this.musicBtn
                            .off(t.Event.CLICK, this, this.onMusic), this.vibratBtn
                                .off(t.Event.CLICK, this, this.onVibrat)
            }
            onStart() {
                super.onStart(), this.updateUI()
            }
            updateUI() {
                this.MiddleUI.visible = !0, this.MiddleUI.scaleX =
                    .1, this.MiddleUI.scaleY = .1, t.Tween.to(this.MiddleUI, {
                        scaleX: 1,
                        scaleY: 1
                    }, 200, null), this.soundBtn.index = fc.framework
                        .GameFrame.playerInfo.sound, this.musicBtn.index =
                    fc.framework.GameFrame.playerInfo.music, this.vibratBtn
                        .index = fc.framework.GameFrame.playerInfo.vibrate,
                    this.version.text = "V" + fc.framework.GameFrame
                        .appInfo.version
            }
            continueGame() {
                i.playClickSound(), i.closeView(this.owner)
            }
            onSound() {
                fc.framework.GameFrame.playClickSound(), 1 == fc.framework
                    .GameFrame.playerInfo.sound ? (fc.framework.GameFrame
                        .savePlayerInfo({
                            sound: 0
                        }), fc.framework.Audio.stopAllSound()) : fc
                            .framework.GameFrame.savePlayerInfo({
                                sound: 1
                            }), this.soundBtn.index = fc.framework.GameFrame
                                .playerInfo.sound
            }
            onMusic() {
                fc.framework.GameFrame.playClickSound(), 1 == fc.framework
                    .GameFrame.playerInfo.music ? (fc.framework.GameFrame
                        .savePlayerInfo({
                            music: 0
                        }), fc.framework.Audio.stopMusic()) : fc.framework
                            .GameFrame.savePlayerInfo({
                                music: 1
                            }), this.musicBtn.index = fc.framework.GameFrame
                                .playerInfo.music
            }
            onVibrat() {
                fc.framework.GameFrame.playClickSound(), 1 == fc.framework
                    .GameFrame.playerInfo.vibrate ? fc.framework.GameFrame
                        .savePlayerInfo({
                            vibrate: 0
                        }) : fc.framework.GameFrame.savePlayerInfo({
                            vibrate: 1
                        }), this.vibratBtn.index = fc.framework.GameFrame
                            .playerInfo.vibrate
            }
        });
        t.ClassUtils.regClass("fc.view.RelivePage", class extends fc.plugin.BaseView {
            constructor() {
                super(), this.leftTime, this.mTimeLeft = 0
            }
            initView(e) {
                this.mTimeLeft = e.reliveWaiting, 1 == fc.framework
                    .GameFrame.pluginCfg.reliveNative && fc.framework
                        .GameFrame.appInfo.version != fc.framework.GameFrame
                            .pluginCfg.pg_version && fc.framework.GameFrame
                                .openView(fc.view.ViewId.NativeAdb, null, null)
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["leftTime", "backHomeBtn"])
            }
            onUpdate() {
                this.mTimeLeft <= 0 || (this.mTimeLeft -= t.timer.delta,
                    this.leftTime.text = Math.round(this.mTimeLeft /
                        1e3)
                        .toString(), this.mTimeLeft <= 0 && (i.closeView(
                            this.owner), fc.framework.GameFrame
                                .closeView(fc.view.ViewId.NativeAdb)))
            }
        });
        class l extends t.Script {
            constructor() {
                super(), this.goldVal = null
            }
            onAwake() {
                linkView2Script(this, this.owner, ["goldVal"]), t.stage
                    .on(a.GOLD_UPDATE, this, this.onGoldUpdate), this.goldVal
                        .value = i.playerInfo.gold.toString()
                this.owner.on(t.Event.CLICK, this,
                    this.toAddGold)
            }
            onDestroy() {
                t.stage.off(a.GOLD_UPDATE, this, this.onGoldUpdate)
            }
            onGoldUpdate(e) {
                this.goldVal.value = null != e ? e.toString() : i.playerInfo
                    .gold.toString()
            }
            toAddGold() {
                i.playClickSound(), (s.playVideo(t.Handler.create(
                        this,
                        function () {
                            if (YYGGames.rewardReady) {
                                YYGGames.showReward(() => {


                                    YYGGames.showTip("You got 1000 coins")

                                    var e = i.playerInfo;
                                    e.gold += i.pluginCfg && i.pluginCfg
                                        .pg_video_2_gold ? i.pluginCfg
                                        .pg_video_2_gold : 1e3, i.savePlayerInfo({
                                            gold: e.gold
                                        }), t.stage.event(a.GOLD_UPDATE),
                                        this.owner.mouseEnabled = !0
                                });
                            } else {
                                this.owner.mouseEnabled = !0
                                YYGGames.showTip('No Available Video');
                            }
                        }), t.Handler.create(this, function () {
                            this.owner.mouseEnabled = !0
                        }), t.Handler.create(this, function () {
                            this.owner.mouseEnabled = !0, i
                                .showToastMsg(i.langCfg.novideotxt)
                        })))
            }
        }
        t.ClassUtils.regClass("fc.view.GoldShow", l);
        t.ClassUtils.regClass("fc.view.GoldShowAdd", class extends l {
            constructor() {
                super()
            }
            onAwake() {
                super.onAwake(), this.owner.on(t.Event.CLICK, this,
                    this.toAddGold)
            }
            onDestroy() {
                super.onDestroy(), this.owner.off(t.Event.CLICK,
                    this, this.toAddGold)
            }
            toAddGold() {
                i.playClickSound(), s.isVideoEnable() ? (this.owner
                    .mouseEnabled = !1, s.playVideo(t.Handler.create(
                        this,
                        function () {
                            var e = i.playerInfo;
                            e.gold += i.pluginCfg && i.pluginCfg
                                .pg_video_2_gold ? i.pluginCfg
                                .pg_video_2_gold : 1e3, i.savePlayerInfo({
                                    gold: e.gold
                                }), t.stage.event(a.GOLD_UPDATE),
                                this.owner.mouseEnabled = !
                                0
                        }), t.Handler.create(this, function () {
                            this.owner.mouseEnabled = !0
                        }), t.Handler.create(this, function () {
                            this.owner.mouseEnabled = !0, i
                                .showToastMsg(i.langCfg.novideotxt)
                        }))) : i.showToastMsg(i.langCfg.novideotxt)
            }
        });
        class h extends t.Script {
            constructor() {
                super(), this.strengthVal = null, this.passedTime = 0,
                    this.spRecoverInterval = 6e4, this.spRecoverTimeStamp =
                    0
            }
            onAwake() {
                linkView2Script(this, this.owner, ["strengthVal"]), t.stage
                    .on(a.STRENGTH_UPDATE, this, this.onStrengthUpdate);
                var e, s, n = i.playerInfo;
                this.strengthVal.value = n.strength.toString(), this.spRecoverInterval =
                    (e = i.pluginCfg) && e.pg_sp_recover_interval ? 6e4 *
                        e.pg_sp_recover_interval : 6e4, this.spRecoverTimeStamp =
                    (s = i.getLocalStorage("fc_spRecoverTimestamp")) ?
                        Number(s) : (i.setLocalStorage(
                            "fc_spRecoverTimestamp", Date.now()), 0)
            }
            onDestroy() {
                t.stage.off(a.STRENGTH_UPDATE, this, this.onStrengthUpdate)
            }
            onUpdate() {
                var e, s;
                if (!(i.playerInfo.strength >= getMaxStrength()) && (
                    this.passedTime = Date.now() - this.spRecoverTimeStamp,
                    this.passedTime > this.spRecoverInterval)) {
                    var n = Math.floor(this.passedTime / this.spRecoverInterval);
                    this.spRecoverTimeStamp = Date.now() - this.passedTime %
                        this.spRecoverInterval;
                    var o = i.playerInfo;
                    o.strength += n * ((s = i.pluginCfg) && s.pg_sp_recover_per_time ?
                        s.pg_sp_recover_per_time : 0), o.strength >
                        getMaxStrength() && (o.strength =
                            getMaxStrength()), i.savePlayerInfo({
                                strength: i.playerInfo.strength
                            }), t.stage.event(a.STRENGTH_UPDATE), e = this.spRecoverTimeStamp,
                        i.setLocalStorage("fc_spRecoverTimestamp", e ||
                            Date.now())
                }
            }
            onStrengthUpdate() {
                var e = i.playerInfo;
                this.strengthVal.value = e.strength.toString()
            }
        }
        t.ClassUtils.regClass("fc.view.StrengthShow", h);
        t.ClassUtils.regClass("fc.view.StrengthShowAdd", class extends h {
            constructor() {
                super()
            }
            onAwake() {
                super.onAwake(), this.owner.on(t.Event.CLICK, this,
                    this.toAddStrength)
            }
            onDestroy() {
                super.onDestroy(), this.owner.off(t.Event.CLICK,
                    this, this.toAddStrength)
            }
            toAddStrength() {
                i.playClickSound(), s.isVideoEnable() ? (this.owner
                    .mouseEnabled = !1, s.playVideo(t.Handler.create(
                        this,
                        function () {
                            var e = i.playerInfo;
                            e.strength += video2Strength(),
                                i.savePlayerInfo({
                                    strength: e.strength
                                }), t.stage.event(a.STRENGTH_UPDATE),
                                this.owner.mouseEnabled = !
                                0
                        }), t.Handler.create(this, function () {
                            this.owner.mouseEnabled = !0
                        }), t.Handler.create(this, function () {
                            this.owner.mouseEnabled = !0, i
                                .showToastMsg(i.langCfg.novideotxt)
                        }))) : i.showToastMsg(i.langCfg.novideotxt)
            }
        });
        t.ClassUtils.regClass("fc.view.VipBtn", class extends t.Script {
            constructor() {
                super(), this.lightBg = null, this.vipIcon = null,
                    this.animTime = 0
            }
            onAwake() {
                super.onAwake(), linkView2Script(this, this.owner,
                    ["lightBg", "vipIcon"])
            }
            onUpdate() {
                this.animTime += t.timer.delta, this.lightBg.rotation =
                    .001 * this.animTime * Number(90), this.vipIcon
                        .scaleX = this.vipIcon.scaleY = 1 + .1 * Math.abs(
                            Math.sin(this.animTime / 1e3 * Math.PI))
            }
            onClick() {
                i.openView(w.Vip, null, null)
            }
        });
        t.ClassUtils.regClass("fc.view.ResetBtn", class extends t.Script {
            constructor() {
                super()
            }
            onAwake() {
                super.onAwake(), this.owner.on(t.Event.CLICK, this,
                    this.resetGame)
            }
            onDestroy() {
                super.onDestroy(), this.owner.off(t.Event.CLICK,
                    this, this.resetGame)
            }
            resetGame() {
                i.playClickSound(), i.resetGame(), i.closeAllViews()
            }
        });
        class r extends t.Script {
            constructor() {
                super()
            }
            onStart() {
                if (super.onStart(), isMistakenActive()) {
                    var e = getBtnDelayTime();
                    e && (this.owner.visible = !1, t.stage.timerOnce(e,
                        this, this.onShowBtn, null, !1))
                }
            }
            onDestroy() {
                t.stage.clearTimer(this, this.onShowBtn)
            }
            onShowBtn() {
                this.owner.visible = !0
            }
            onClick() {
                this.owner.event(d.EVENT_CLICK_MISLEAD_BTN)
            }
        }
        t.ClassUtils.regClass("fc.view.DelayShowMisleadBtn", r);
        t.ClassUtils.regClass("fc.view.DelayMoveMisleadBtn", class extends t.Script {
            constructor() {
                super()
            }
            onStart() {
                if (super.onStart(), isMistakenActive()) {
                    var e = getBtnMoveDuaration();
                    if (0 != e) {
                        this.owner.mouseEnabled = !1;
                        var i = this.owner.y;
                        this.owner.y = 640 - this.owner.height, t.Tween
                            .to(this.owner, {
                                y: i
                            }, e, null, t.Handler.create(this,
                                function () {
                                    this.owner.mouseEnabled = !
                                        0
                                }), e)
                    }
                }
            }
            onDestroy() {
                t.Tween.clearAll(this.owner)
            }
            onClick() {
                this.owner.event(d.EVENT_CLICK_MISLEAD_BTN)
            }
        });
        t.ClassUtils.regClass("fc.view.DelayEnable", class extends t.Script {
            constructor() {
                super(), this.clickNum = 0, this.viewId = "", this.bannerDelay =
                    1e3, this.bannerLive = 3e3
            }
            onStart() {
                super.onStart(), this.clickNum = 0,
                    isMistakenActive() && (this.bannerDelay =
                        getMistakenBannerDelay(), this.bannerLive =
                        getMistakenBannerDuaration())
            }
            onUpdate() {
                0 != isMistakenActive() && 0 != this.clickNum && (
                    this.bannerDelay > 0 ? (this.bannerDelay -=
                        t.timer.delta, this.bannerDelay <= 0 &&
                        (o.showBanner(this.viewId), this.bannerLive +=
                            this.bannerDelay)) : this.bannerLive >
                            0 && (this.bannerLive -= t.timer.delta,
                                this.bannerLive <= 0 && o.hideBanner(
                                    this.viewId)))
            }
            onClick() {
                0 == this.clickNum && isMistakenActive() ? this.clickNum++
                    : this.owner.event(d.EVENT_CLICK_MISLEAD_BTN)
            }
        });
        class d extends t.Script {
            constructor() {
                super(), this.clickNum = 0, this.viewId = "", this.bannerDelay =
                    1e3, this.bannerLive = 3e3
            }
            onStart() {
                if (super.onStart(), this.clickNum = 0,
                    isMistakenActive()) {
                    this.bannerDelay = getMistakenBannerDelay(), this.bannerLive =
                        getMistakenBannerDuaration();
                    var e = getBtnMistakenStyle();
                    if (0 == e) {
                        var i = getBtnMoveDuaration();
                        if (0 == i) return;
                        this.owner.mouseEnabled = !1;
                        var s = this.owner.y;
                        this.owner.y = 640 - this.owner.height, t.Tween
                            .to(this.owner, {
                                y: s
                            }, i, null, t.Handler.create(this,
                                function () {
                                    this.owner.mouseEnabled = !0
                                }), i)
                    } else if (1 == e) {
                        var n = getBtnDelayTime();
                        if (0 == n) return;
                        this.owner.visible = !1, t.stage.timerOnce(n,
                            this, this.onShowBtn, null, !1)
                    } else 2 == e && o.hideBanner(this.viewId)
                }
            }
            onDestroy() {
                t.Tween.clearAll(this.owner), t.stage.clearTimer(this,
                    this.onShowBtn)
            }
            onUpdate() {
                0 != isMistakenActive() && 2 == getBtnMistakenStyle() &&
                    0 != this.clickNum && (this.bannerDelay > 0 ? (this
                        .bannerDelay -= t.timer.delta, this.bannerDelay <=
                        0 && (o.showBanner(this.viewId), this.bannerLive +=
                            this.bannerDelay)) : this.bannerLive >
                            0 && (this.bannerLive -= t.timer.delta, this.bannerLive <=
                                0 && o.hideBanner(this.viewId)))
            }
            onShowBtn() {
                this.owner.visible = !0
            }
            onClick() {
                0 == this.clickNum && isMistakenActive() && 2 ==
                    getBtnMistakenStyle() ? this.clickNum++ : this.owner
                        .event(d.EVENT_CLICK_MISLEAD_BTN)
            }
        }
        d.EVENT_CLICK_MISLEAD_BTN = "EVENT_CLICK_MISLEAD_BTN", t.ClassUtils.regClass(
            "fc.view.MisleadBtn", d);
        t.ClassUtils.regClass("fc.view.MoreRecommendBtn", class extends t.Script {
            constructor() {
                super(), this.pageId = "MoreInfo"
            }
            initView(e) {
                this.pageId = e.relativeView ? e.relativeView :
                    this.pageId
            }
            onAwake() {
                this.owner.mouseEnabled = !0
            }
            onClick() {
                i.playClickSound(), this.owner.mouseEnabled = !1, i
                    .openView(this.pageId, null, t.Handler.create(
                        this,
                        function () {
                            this.owner.mouseEnabled = !0
                        }), !1)
            }
        });
        t.ClassUtils.regClass("fc.view.MoreGameBtn", class extends t.Script {
            constructor() {
                super()
            }
            onAwake() {
                this.owner.mouseEnabled = !0
            }
            onClick() {
                i.playClickSound(), this.owner.mouseEnabled = !1, i
                    .openView("AdHome3", null, t.Handler.create(
                        this,
                        function () {
                            this.owner.mouseEnabled = !0
                        }), !1)
            }
        });
        t.ClassUtils.regClass("fc.view.MoreGameBoxBtn", class extends t.Script {
            constructor() {
                super(), this.clickTime = 0
            }
            onAwake() {
                this.owner.mouseEnabled = !0
            }
            onStart() {
                this.owner.visible = s.isGameBoxValid()
            }
            onClick() {
                if (i.playClickSound(), Date.now() - this.clickTime <
                    1e3) console.log(
                        "MoreGameBoxBtn click too often");
                else {
                    this.clickTime = Date.now();
                    var e = t.Handler.create(this, function (e) {
                        e ? (i.showToastMsg("暂无更多游戏!"),
                            console.log(
                                "MoreGameBoxBtn errorMsg",
                                e)) : (console.log(
                                    "MoreGameBoxBtn open"),
                                    t.stage.event(a.HIDE_NATIVEBANNER)
                        )
                    }),
                        n = t.Handler.create(this, function () {
                            console.log("MoreGameBoxBtn close"),
                                t.stage.event(a.SHOW_NATIVEBANNER)
                        });
                    s.showGameBox(e, e, n)
                }
            }
        });
        t.ClassUtils.regClass("fc.view.BoxPortalAd", class extends t.Script {
            constructor() {
                super()
            }
            onAwake() {
                this.owner.mouseEnabled = !0, this.owner.scaleX = 0,
                    this.owner.scaleY = 0
            }
            onStart() {
                this.owner.visible = !1;
                var e = t.Handler.create(this, function (e) {
                    e && console.log(
                        "MoreGameBoxBtn errorMsg", e)
                }),
                    i = t.Handler.create(this, function () {
                        console.log("MoreGameBoxBtn close")
                    });
                s.showGameBox(e, e, i, this.owner.y)
            }
            onDestroy() {
                console.log("销毁九宫格广告"), s.hideGameBox()
            }
            onDisable() {
                console.log("销毁九宫格广告onDisable"), s.hideGameBox()
            }
        });
        t.ClassUtils.regClass("fc.view.DesktopIcon", class extends t.Script {
            constructor() {
                super()
            }
            onAwake() {
                this.owner.mouseEnabled = !0
            }
            onStart() {
                this.owner.visible = !1;
                var e = t.Handler.create(this, function (e) {
                    e && 0 == e.hasIcon && (this.owner.visible = !
                        0)
                });
                fc.framework.Channel.hasDesktopIcon(e)
            }
            onClick() {
                i.playClickSound();
                var e = t.Handler.create(this, function (e) {
                    e && 0 == e.hasIcon && (fc.framework.Channel
                        .createDesktopIcon(null), this.owner
                            .visible = !1)
                });
                fc.framework.Channel.hasDesktopIcon(e)
            }
        });
        t.ClassUtils.regClass("fc.view.ClearAccountBtn", class extends t.Script {
            constructor() {
                super()
            }
            onAwake() {
                this.owner.mouseEnabled = !0
            }
            onStart() { }
            onClick() {
                i.playClickSound(), s.showModal("注销账号",
                    "注销之后所有游戏数据都将清空。", "Cancel", "确定", t.Handler.create(
                        this, () => { }), t.Handler.create(this,
                            () => {
                                t.LocalStorage.clear(), s.callFunc(
                                    "exitApplication")
                            }))
            }
        });
        t.ClassUtils.regClass("fc.view.HomeSettingBtn", class extends t.Script {
            constructor() {
                super()
            }
            onAwake() {


                this.owner.mouseEnabled = !0
                if (!YYGGames.audioEngine.pause) {
                    this.owner.skin = "gameui/sound-on.png";

                }
                else {
                    this.owner.skin = "gameui/sound-off.png";
                }
            }
            onStart() { }
            onClick() {
                console.log(this.owner.name + " click");
                YYGGames.audioEngine.pause = !YYGGames.audioEngine.pause;
                // Laya.Tween.from(this.soundBtn, { scaleX: 0.9, scaleY: 0.9 }, 100);
                if (!YYGGames.audioEngine.pause) {
                    this.owner.skin = "gameui/sound-on.png";
                    if(!YYGGames.gameBox.visible)
                    YYGGames.audioEngine.playMusic("music/bg.mp3");
                   // t.Instance.playMusic("bg.mp3")
                }
                else {
                    this.owner.skin = "gameui/sound-off.png";
                }
                // i.playClickSound(), fc.framework.GameFrame.openView(
                //     "HomeSetting", {}, null)
            }
        });
        t.ClassUtils.regClass("fc.view.GameSettingBtn", class extends t.Script {
            constructor() {
                super()
            }
            onAwake() {
                this.owner.mouseEnabled = !0
            }
            onStart() { }
            onClick() {
                i.playClickSound(), fc.framework.GameFrame.openView(
                    "GameSetting", {}, null)
            }
        });
        t.ClassUtils.regClass("fc.view.AdHomeBtn", class extends t.Script {
            constructor() {
                super()
            }
            onAwake() {
                this.owner.mouseEnabled = !0
            }
            onClick() {
                i.playClickSound(), this.owner.mouseEnabled = !1, i
                    .openView("AdHome", null, t.Handler.create(this,
                        function () {
                            this.owner.mouseEnabled = !0
                        }), !1)
            }
        });
        t.ClassUtils.regClass("fc.view.BackHomeBtn", class extends t.Script {
            constructor() {
                super()
            }
            onAwake() {
                this.owner.mouseEnabled = !0
            }
            onClick() {
                i.playClickSound(), this.owner.mouseEnabled = !1, i
                    .go2Home(), i.closeAllViews()
            }
        });
        t.ClassUtils.regClass("fc.view.AniLoopPlay", class extends t.Script {
            constructor() {
                super()
            }
            onStart() {
                super.onStart();
                for (const e in this.owner)
                    if (Object.prototype.hasOwnProperty.call(this.owner,
                        e)) {
                        const i = this.owner[e];
                        i && "object" == typeof i && i instanceof t
                            .FrameAnimation && (i.stop(), i.play(0,
                                !0))
                    }
            }
        });
        t.ClassUtils.regClass("fc.view.LevInfo", class extends t.Script {
            constructor() {
                super(), this.mCurLev = null, this.mDesc = null
            }
            onAwake() {
                this.mDesc = this.owner.getChildByName("desc"),
                    this.mDesc.text = i.langCfg.level, this.mCurLev =
                    this.owner.getChildByName("levId"), this.mCurLev
                        .text = `${i.playerInfo.levelId + 1}`
            }
        });
        class c extends t.Script {
            constructor() {
                super(), this.finger = null, this.animTime = 0
            }
            onAwake() {
                this.finger = this.owner.getChildByName("finger"), t.stage
                    .on(t.Event.MOUSE_MOVE, this, this.onHideGuide)
            }
            onDestroy() {
                t.stage.off(t.Event.MOUSE_MOVE, this, this.onHideGuide)
            }
            onHideGuide() {
                this.owner.visible = !1, t.stage.off(t.Event.CLICK,
                    this, this.onHideGuide)
            }
            onUpdate() {
                if (this.animTime += t.timer.delta, this.animTime > c.animFullDuration &&
                    (this.animTime %= c.animFullDuration), this.animTime <=
                    c.animQuarDuration) {
                    var e = this.animTime / c.animQuarDuration;
                    e = t.MathUtil.lerp(2 * Math.PI, Math.PI, e), this.finger
                        .x = 275 + 75 * Math.sin(e), this.finger.y =
                        210 + 75 * Math.cos(e)
                } else if (this.animTime <= c.animHalfDuration) {
                    e = (this.animTime - c.animQuarDuration) / c.animQuarDuration;
                    var i = 75 * Math.cos(e * Math.PI),
                        s = t.MathUtil.lerp(275, 480, e);
                    this.finger.x = s, this.finger.y = 210 - i
                } else if (this.animTime <= c.animHalfDuration + c.animQuarDuration) {
                    e = (this.animTime - c.animHalfDuration) / c.animQuarDuration;
                    e = t.MathUtil.lerp(0, Math.PI, e), this.finger.x =
                        480 + 75 * Math.sin(e), this.finger.y = 210 +
                        75 * Math.cos(e)
                } else {
                    e = (this.animTime - c.animHalfDuration - c.animQuarDuration) /
                        c.animQuarDuration, i = 75 * Math.cos(e * Math.PI),
                        s = t.MathUtil.lerp(480, 275, e);
                    this.finger.x = s, this.finger.y = 210 - i
                }
            }
        }
        c.animQuarDuration = 1e3, c.animHalfDuration = 2 * c.animQuarDuration,
            c.animFullDuration = 4 * c.animQuarDuration, t.ClassUtils.regClass(
                "fc.view.RingGuide", c);
        t.ClassUtils.regClass("fc.view.LeftRightGuide", class extends t.Script {
            constructor() {
                super(), this.finger = null, this.light = null,
                    this.passedTime = null
            }
            onAwake() {
                this.finger = this.owner.getChildByName("finger"),
                    this.light = this.owner.getChildByName("arrow")
                        .getChildByName("cursor")
            }
            onEnable() {
                this.passedTime = 0
            }
            onDisable() { }
            onUpdate() {
                this.light.x += .001 * t.timer.delta * 800, this.light
                    .x > 921 && (this.light.x -= 921), this.passedTime +=
                    .001 * t.timer.delta, this.finger.x = 230 + 160 *
                    Math.sin(this.passedTime * Math.PI)
            }
        });
        t.ClassUtils.regClass("fc.view.UserPrivacyBtn", class extends t.Script {
            constructor() {
                super(), this.clickTime = 0
            }
            onAwake() {
                this.owner.mouseEnabled = !0
            }
            onStart() { }
            onClick() {
                // i.playClickSound(), i.openView("UserPrivacy", {
                //     isLoading: !1
                // })
                console.log("是你吗")

            }
        });
        t.ClassUtils.regClass("fc.view.StageProgress", class extends t.Script {
            constructor() {
                super(), this.mLevelId = null, this.mPlayerCurPos =
                    null, this.mPlayerFullLine = null, this.mPlayerNewDist =
                    null
            }
            onAwake() {
                this.mLevelId = this.owner.getChildByName("levelId"),
                    this.mLevelId.text = (i.playerInfo.levelId + 1)
                        .toString(), this.mPlayerFullLine = this.owner.getChildByName(
                            "playerFullLine"), this.mPlayerFullLine.width =
                    64, this.mPlayerCurPos = this.owner.getChildByName(
                        "playerCurPos"), this.mPlayerCurPos.x = 80,
                    this.mPlayerNewDist = 0, t.stage.on(a.LEVEL_PROGRESS_UPDATE,
                        this, this.onLevelProgressUpdate)
            }
            onDestroy() {
                t.stage.off(a.LEVEL_PROGRESS_UPDATE, this, this.onLevelProgressUpdate)
            }
            onLevelProgressUpdate(e) {
                this.mPlayerNewDist = 390 * Math.min(1, e), this.mPlayerFullLine
                    .width = 64 + this.mPlayerNewDist, this.mPlayerCurPos
                        .x = 80 + this.mPlayerNewDist
            }
        });
        class g { }
        g.PLAY_VIDEO = "PLAY_VIDEO", g.JUMP_AWARD = "JUMP_AWARD";
        class p extends t.Script {
            constructor() {
                super(), this.firstBtn = null, this.secondBtn = null,
                    this.skinRoot = "", this.playBtnIdx = 0, this.jumpCount =
                    0
            }
            onAwake() {
                this.firstBtn = this.owner.getChildByName("firstBtn"),
                    this.secondBtn = this.owner.getChildByName(
                        "secondBtn"), this.skinRoot = this.firstBtn.skin,
                    this.skinRoot = this.skinRoot.substring(0, this.skinRoot
                        .lastIndexOf("/") + 1), this.firstBtn && this.firstBtn
                            .on(t.Event.CLICK, this, this.onClickFstBtn), this.secondBtn &&
                    this.secondBtn.on(t.Event.CLICK, this, this.onClickSndBtn),
                    isVideoMistakenActive() ? (this.playBtnIdx = Math.floor(
                        2 * Math.random()), 0 == this.playBtnIdx ?
                            (this.firstBtn.skin = this.skinRoot +
                                "img_suiji.png", this.secondBtn.skin = this
                                    .skinRoot + "img_suihou.png") : (this.firstBtn
                                        .skin = this.skinRoot + "img_suihou.png",
                                        this.secondBtn.skin = this.skinRoot +
                                        "img_suiji.png")) : (this.playBtnIdx = 0,
                                            this.firstBtn.skin = this.skinRoot +
                                            "img_shipin.png", this.secondBtn.skin = this.skinRoot +
                                            "img_tiaoguo.png")
            }
            onDestroy() {
                this.firstBtn && this.firstBtn.off(t.Event.CLICK, this,
                    this.onClickFstBtn), this.secondBtn && this.secondBtn
                        .off(t.Event.CLICK, this, this.onClickSndBtn)
            }
            onClickFstBtn() {
                i.playClickSound(), 0 != this.playBtnIdx ? this.jumpAward() :
                    t.stage.event(g.PLAY_VIDEO)
            }
            onClickSndBtn() {
                i.playClickSound(), 1 != this.playBtnIdx ? this.jumpAward() :
                    t.stage.event(g.PLAY_VIDEO)
            }
            jumpAward() {
                !isVideoMistakenActive() || !i.pluginCfg.pg_video_probability ||
                    1 == this.jumpCount || Math.random() >= i.pluginCfg
                        .pg_video_probability ? t.stage.event(g.JUMP_AWARD) :
                    (this.jumpCount = 1, t.stage.event(g.PLAY_VIDEO))
            }
        }
        class u extends t.Script {
            constructor() {
                super(), this.playVideoBtn = null, this.jumpBtn = null,
                    this.checkBtn = null, this.checkBlock = null, this.skinRoot =
                    "", this.jumpCount = 0
            }
            onAwake() {
                this.playVideoBtn = this.owner.getChildByName(
                    "playVideoBtn"), this.jumpBtn = this.owner.getChildByName(
                        "jumpBtn"), this.checkBtn = this.owner.getChildByName(
                            "checkBtn"), this.checkBlock = this.checkBtn &&
                            this.checkBtn.getChildByName("checkBlock"), this.skinRoot =
                    this.playVideoBtn.skin, this.skinRoot = this.skinRoot
                        .substring(0, this.skinRoot.lastIndexOf("/") + 1),
                    this.playVideoBtn && this.playVideoBtn.on(t.Event.CLICK,
                        this, this.openVideo), this.jumpBtn && this.jumpBtn
                            .on(t.Event.CLICK, this, this.toJump), this.checkBtn &&
                    this.checkBtn.on(t.Event.CLICK, this, this.onClickCheck),
                    this.checkBlock && (isVideoMistakenActive() ? (this
                        .checkBlock.visible = !0, this.playVideoBtn
                            .skin = this.skinRoot + "img_liji.png",
                        this.jumpBtn.skin = this.skinRoot +
                        "img_zanshi.png") : (this.checkBlock.visible = !
                            1, this.playVideoBtn.skin = this.skinRoot +
                            "img_liji.png", this.jumpBtn.skin = this.skinRoot +
                            "img_zanbu.png"))
            }
            onDestroy() {
                this.playVideoBtn && this.playVideoBtn.off(t.Event.CLICK,
                    this, this.openVideo), this.jumpBtn && this.jumpBtn
                        .off(t.Event.CLICK, this, this.toJump), this.checkBtn &&
                    this.checkBtn.off(t.Event.CLICK, this, this.onClickCheck)
            }
            openVideo() {
                i.playClickSound(), t.stage.event(g.PLAY_VIDEO)
            }
            toJump() {
                i.playClickSound(), this.checkBlock && this.checkBlock.visible ?
                    t.stage.event(g.PLAY_VIDEO) : this.jumpAward()
            }
            onClickCheck() {
                i.playClickSound(), this.checkBlock && (this.checkBlock
                    .visible = !this.checkBlock.visible, this.checkBlock
                        .visible ? (this.playVideoBtn.skin = this.skinRoot +
                            "img_liji.png", this.jumpBtn.skin = this.skinRoot +
                            "img_zanshi.png") : (this.playVideoBtn.skin =
                                this.skinRoot + "img_liji.png", this.jumpBtn
                                    .skin = this.skinRoot + "img_zanbu.png"))
            }
            jumpAward() {
                !isVideoMistakenActive() || !i.pluginCfg.pg_video_probability ||
                    1 == this.jumpCount || Math.random() >= i.pluginCfg
                        .pg_video_probability ? t.stage.event(g.JUMP_AWARD) :
                    (this.jumpCount = 1, t.stage.event(g.PLAY_VIDEO))
            }
        }
        class v extends t.Script {
            constructor() {
                super(), this.playVideoBtn = null, this.jumpBtn = null,
                    this.skinRoot = "", this.jumpCount = 0
            }
            onAwake() {
                this.playVideoBtn = this.owner.getChildByName(
                    "playVideoBtn"), this.jumpBtn = this.owner.getChildByName(
                        "jumpBtn"), this.skinRoot = this.playVideoBtn.skin,
                    this.skinRoot = this.skinRoot.substring(0, this.skinRoot
                        .lastIndexOf("/") + 1), this.playVideoBtn &&
                    this.playVideoBtn.on(t.Event.CLICK, this, this.openVideo),
                    this.jumpBtn && this.jumpBtn.on(t.Event.CLICK, this,
                        this.toJump), isVideoMistakenActive() ? (this.jumpBtn
                            .visible = !1, this.owner.timerOnce(
                                getBtnDelayTime(), this,
                                function () {
                                    this.jumpBtn.visible = !0
                                })) : this.jumpBtn.visible = !0
            }
            onDestroy() {
                this.playVideoBtn && this.playVideoBtn.off(t.Event.CLICK,
                    this, this.openVideo), this.jumpBtn && this.jumpBtn
                        .off(t.Event.CLICK, this, this.toJump)
            }
            openVideo() {
                i.playClickSound(), t.stage.event(g.PLAY_VIDEO)
            }
            toJump() {
                i.playClickSound(), this.jumpAward()
            }
            jumpAward() {
                !isVideoMistakenActive() || !i.pluginCfg.pg_video_probability ||
                    1 == this.jumpCount || Math.random() >= i.pluginCfg
                        .pg_video_probability ? t.stage.event(g.JUMP_AWARD) :
                    (this.jumpCount = 1, t.stage.event(g.PLAY_VIDEO))
            }
        }
        class m extends t.Script {
            constructor() {
                super(), this.opBtn = null, this.exitBtn = null, this.checkBtn =
                    null, this.checkBlock = null, this.skinRoot = "",
                    this.jumpCount = 0
            }
            onAwake() {
                this.opBtn = this.owner.getChildByName("opBtn"), this.exitBtn =
                    this.owner.getChildByName("exitBtn"), this.checkBtn =
                    this.owner.getChildByName("checkBtn"), this.checkBlock =
                    this.checkBtn && this.checkBtn.getChildByName(
                        "checkBlock"), this.skinRoot = this.opBtn.skin,
                    this.skinRoot = this.skinRoot.substring(0, this.skinRoot
                        .lastIndexOf("/") + 1), this.opBtn && this.opBtn
                            .on(t.Event.CLICK, this, this.onClickBtn), this.exitBtn &&
                    this.exitBtn.on(t.Event.CLICK, this, this.toJump),
                    this.checkBtn && this.checkBtn.on(t.Event.CLICK,
                        this, this.onClickCheck), this.checkBlock && (
                            isVideoMistakenActive() ? (this.checkBlock.visible = !
                                0, this.opBtn.skin = this.skinRoot +
                                "img_lingqu.png") : (this.checkBlock.visible = !
                                    1, this.opBtn.skin = this.skinRoot +
                                    "img_fangqi.png"))
            }
            onDestroy() {
                this.opBtn && this.opBtn.off(t.Event.CLICK, this, this.onClickBtn),
                    this.exitBtn && this.opBtn.off(t.Event.CLICK, this,
                        this.toJump), this.checkBtn && this.checkBtn.off(
                            t.Event.CLICK, this, this.onClickCheck)
            }
            onClickCheck() {
                i.playClickSound(), this.checkBlock && (this.checkBlock
                    .visible = !this.checkBlock.visible, this.checkBlock
                        .visible ? this.opBtn.skin = this.skinRoot +
                        "img_lingqu.png" : this.opBtn.skin = this.skinRoot +
                        "img_fangqi.png")
            }
            onClickBtn() {
                i.playClickSound(), this.checkBlock && this.checkBlock.visible ?
                    t.stage.event(g.PLAY_VIDEO) : this.jumpAward()
            }
            toJump() {
                i.playClickSound(), this.jumpAward()
            }
            openVideo() {
                i.playClickSound(), t.stage.event(g.PLAY_VIDEO)
            }
            jumpAward() {
                !isVideoMistakenActive() || !i.pluginCfg.pg_video_probability ||
                    1 == this.jumpCount || Math.random() >= i.pluginCfg
                        .pg_video_probability ? t.stage.event(g.JUMP_AWARD) :
                    (this.jumpCount = 1, t.stage.event(g.PLAY_VIDEO))
            }
        }
        class f extends t.Script {
            constructor() {
                super(), this.opBtn = null, this.checkBtn = null, this.checkBlock =
                    null, this.skinRoot = "", this.jumpCount = 0
            }
            onAwake() {
                this.opBtn = this.owner.getChildByName("opBtn"), this.checkBtn =
                    this.owner.getChildByName("checkBtn"), this.checkBlock =
                    this.checkBtn && this.checkBtn.getChildByName(
                        "checkBlock"), this.skinRoot = this.opBtn.skin,
                    this.skinRoot = this.skinRoot.substring(0, this.skinRoot
                        .lastIndexOf("/") + 1), this.opBtn && this.opBtn
                            .on(t.Event.CLICK, this, this.onClickBtn), this.checkBtn &&
                    this.checkBtn.on(t.Event.CLICK, this, this.onClickCheck),
                    this.checkBtn && (isVideoMistakenActive() ? (this.checkBlock
                        .visible = !0, this.checkBtn.y = 600, this.opBtn
                            .skin = this.skinRoot + "img_liji.png") : (
                        this.checkBlock.visible = !1, this.opBtn.skin =
                        this.skinRoot + "img_tiaoguo.png"))
            }
            onDestroy() {
                this.opBtn && this.opBtn.off(t.Event.CLICK, this, this.onClickBtn),
                    this.checkBtn && this.checkBtn.off(t.Event.CLICK,
                        this, this.onClickCheck)
            }
            onClickCheck() {
                this.checkBlock && (this.checkBlock.visible = !this.checkBlock
                    .visible, this.checkBlock.visible ? this.opBtn.skin =
                        this.skinRoot + "img_liji.png" : this.opBtn.skin =
                    this.skinRoot + "img_tiaoguo.png")
            }
            onClickBtn() {
                i.playClickSound(), this.checkBlock && this.checkBlock.visible ?
                    t.stage.event(g.PLAY_VIDEO) : this.jumpAward()
            }
            openVideo() {
                i.playClickSound(), t.stage.event(g.PLAY_VIDEO)
            }
            jumpAward() {
                !isVideoMistakenActive() || !i.pluginCfg.pg_video_probability ||
                    1 == this.jumpCount || Math.random() >= i.pluginCfg
                        .pg_video_probability ? t.stage.event(g.JUMP_AWARD) :
                    (this.jumpCount = 1, t.stage.event(g.PLAY_VIDEO))
            }
        }
        class w { }
        w.Introduce = "Introduce", w.Loading = "Loading", w.Home = "Home", w.Game =
            "Game", w.Success = "Success", w.Failed = "Failed", w.AdHome =
            "AdHome", w.AdHome2 = "AdHome2", w.AdHome3 = "AdHome3", w.Award =
            "Award", w.Unlock = "Unlock", w.MoreInfo = "MoreInfo", w.Knock =
            "Knock", w.Sign = "Sign", w.Store = "Store", w.Strength =
            "Strength", w.SecretBox = "SecretBox", w.SecretAward =
            "SecretAward", w.PropTrial = "PropTrial", w.Trial = "Trial", w.Turntable =
            "Turntable", w.InsertAd = "InsertAd", w.FullScreenAd =
            "FullScreenAd", w.NativeAdb = "NativeAdb", w.NativeAdbOppo =
            "NativeAdbOppo", w.NativeBannerAd = "NativeBannerAd", w.NativeAdm =
            "NativeAdm", w.NativeAdn = "NativeAdn", w.NativeAdi = "NativeAdi",
            w.ChooseSkillAd = "ChooseSkillAd", w.ShareRec = "ShareRec", w.Pause =
            "Pause", w.Exit = "Exit", w.Vip = "Vip", w.Relive = "Relive", w.UserPrivacy =
            "UserPrivacy";
        class C { }
        C.Guide = 100, C.Sign = 101, C.Store = 102, C.Trial = 103, C.Vip = 104,
            C.ShareRec = 105, C.Turntable = 106, C.SecretBox = 107, C.SecretAward =
            108, C.NativeAd = 200, C.InsertAd = 201, C.FullScreenAd = 202, C.MoreGame =
            300;
        class B extends t.Script {
            static isVip() {
                return 1 == i.playerInfo.isVip
            }
            static isVipValid() {
                return isVipValid()
            }
            static isVipOpened() {
                var e = i.pluginCfg;
                return e && null != e.pg_vip_config
            }
            static isMistakenActive() {
                return isMistakenActive()
            }
            static isVideoMistakenActive() {
                return isVideoMistakenActive()
            }
            static isNativeMistakenActive() {
                return isNativeMistakenActive()
            }
            static isNativeTouchMistakenActive() {
                return isNativeTouchMistakenActive()
            }
            static isNativeActive() {
                return isNativeActive()
            }
            static isAwardCloseBtnOpenAd() {
                return isAwardCloseBtnOpenAd()
            }
            static isHomeAutoShowGameBox() {
                return isMistakenActive() && i.pluginCfg.pg_auto_show_gamebox &&
                    1 == i.pluginCfg.pg_auto_show_gamebox
            }
            static isNativeMoveMistakenActive() {
                return isNativeMoveMistakenActive()
            }
            static isNativeBgMistakenActive() {
                return 0 != i.pluginCfg.pg_native_bg_switch
            }
            static isNativeCloseBtnOpenAd() {
                return isNativeCloseBtnOpenAd()
            }
            static isVideoImgBtnMistakenActive() {
                return isVideoImgBtnMistakenActive()
            }
            static isEnableCancelVideoModal() {
                return isEnableCancelVideoModal()
            }
            static showVideoConfirmModal(e) {
                showModal(e)
            }
            static isResetGameOpened() {
                var e = i.pluginCfg;
                return e && 1 == e.pg_reset_switch
            }
            static isStrengthOpened() {
                var e = i.pluginCfg;
                return e && e.pg_sp_switch && e.pg_sp_cost && e.pg_sp_max
            }
            static isSignOpened() {
                var e = i.pluginCfg;
                return e && 0 != e.pg_sign_opened && i.playerInfo.signedDays <
                    7
            }
            static isTurntableOpened() {
                var e = i.pluginCfg;
                return e && 0 != e.pg_turntable_opened
            }
            static isStoreOpened() {
                var e = i.pluginCfg;
                return e && 0 != e.pg_store_opened
            }
            static isShareOpened() {
                var e = i.pluginCfg;
                return e && 0 != e.pg_share_opened
            }
            static isRecommendOpened() {
                var e = i.pluginCfg;
                return e && 0 != e.pg_recommend_opened
            }
            static isEnableExportAd() {
                var e = i.pluginCfg;
                return e && i.appInfo.version != e.pg_version && e.pg_switch &&
                    e.pg_jump_switch && i.playerInfo.levelId >= e.pg_jump_lv
            }
            static isEnablePopNativeAd() {
                return this.gameTime >= 1 && !this.isEnablePopSign() &&
                    !this.isEnablePopStore()
            }
            static isEnablePopHomeAd() {
                return this.isEnableExportAd() && !this.isEnablePopStore() &&
                    !this.isEnablePopSign() && 1 == i.pluginCfg.pg_dialog_jump &&
                    this.gameTime >= 1
            }
            static isEnablePopAdHome() {
                return this.isEnableExportAd() && 1 == i.pluginCfg.pg_full_screen_jump
            }
            static isEnablePopSign() {
                return this.isSignOpened() && 1 == this.gameTime && i.playerInfo
                    .signedDays < 7
            }
            static isEnablePopStore() {
                return this.isStoreOpened() && (1 == this.gameTime && i
                    .playerInfo.signedDays >= 7 || 2 == this.gameTime
                )
            }
            static isEnableStartVideo() {
                return this.isMistakenActive() && 1 == i.pluginCfg.pg_start_video_switch
            }
            static isEnableLoadingVideo() {
                return this.isMistakenActive() && 1 == i.pluginCfg.pg_first_video_switch
            }
            static isEnablePopTrial() {
                var e = i.pluginCfg,
                    t = i.playerInfo;
                if (!e || 1 != e.pg_trial_switch || null == t.levelId ||
                    t.levelId < e.pg_trial_lv) return !1;
                var s = i.goodsCfg;
                for (let e = 0; e < s.length; e++) {
                    var n = s[e];
                    for (let i = 0; i < n.length; i++) {
                        const s = n[i];
                        if (0 != s.recommend && -1 == t.goodsInBag[e].indexOf(
                            s.id)) return !0
                    }
                }
                return !1
            }
            static isEnablePopCrazyKnock() {
                var e = i.pluginCfg,
                    s = i.playerInfo,
                    n = t.Browser.onWeiXin ? t.Browser.onAndroid ?
                        "android" : "ios" : "unknown";
                return e && i.appInfo.version != e.pg_version && e.pg_switch &&
                    e.pg_fastclick_switch > 0 && e.pg_fastclick_system &&
                    -1 == e.pg_fastclick_system.indexOf(n) && s.levelId >
                    e.pg_fastclick_switch && s.levelId % e.pg_fastclick_switch ==
                    0 && this.todayKnockTime < e.pg_fastclick_num
            }
            static isEnablePopSecretAward() {
                var e = i.pluginCfg;
                return e && 1 == e.pg_lucky_reward_switch
            }
            static isEnablePopInsertAd() {
                return s.isInsertAdEnable() && !this.isEnablePopStore() &&
                    !this.isEnablePopSign() && this.gameTime >= 1
            }
            static isEnablePopShareRec() {
                return s.canShareRecorder()
            }
            static isEnablePopVip() {
                return 0 == this.isVipValid() && this.isVipOpened() &&
                    1 == this.gameTime
            }
            static loadExportAd(e) {
                var s = i.pluginCfg;
                if (s && s.pg_export_list && s.pg_export_list.length >
                    0) {
                    var n = t.loader.getRes(s.pg_export_list);
                    n ? t.stage.frameOnce(1, this, function () {
                        e(n)
                    }) : t.loader.load(s.pg_export_list, t.Handler.create(
                        this,
                        function (t) {
                            e(t)
                        }))
                } else t.stage.frameOnce(1, this, function () {
                    e([])
                })
            }
            static navigate2Mini(e, t, i, n) {
                s.navigate2Mini(e.app_id, e.path, e.extra_data, t, i, n)
            }
            static getGameCostStrength() {
                var e = i.pluginCfg;
                return e && null != e.pg_sp_cost ? e.pg_sp_cost : 0
            }
            static getShareImage() {
                var e = i.pluginCfg;
                return e ? e.pg_share_img : null
            }
            static getShareTitle() {
                var e = i.pluginCfg;
                return e ? e.pg_share_title : null
            }
            static getShareTopic() {
                var e = i.pluginCfg;
                return e ? e.pg_share_topic : null
            }
            static getShareDesc() {
                var e = i.pluginCfg;
                return e ? e.pg_share_desc : null
            }
            static getShareRecAward() {
                var e = i.pluginCfg;
                return e ? e.pg_share_rec_award : null
            }
            constructor() {
                super()
            }
            onAwake() {
                t.stage.once(a.LAUNCH_COMPLETED, this, this.onLaunchResReady),
                    t.stage.on(a.UI_VIEW_CLOSED, this, this.onViewClosed),
                    t.stage.on(a.GAME_PREPARE, this, this.onGamePrepare)
            }
            onLaunchResReady() {
                B.gameTime = 0;
                var e = i.getLocalStorage("fc_knockTime");
                if (e) {
                    var t = e.split(","),
                        o = t[t.length - 1];
                    o = Number(o), n.isToday(o) ? B.todayKnockTime =
                        Number(t[0]) : B.todayKnockTime = 0
                } else B.todayKnockTime = 0;
                var a = i.getLocalStorage("fc_totalGameTime");
                n.isEmptyString(a) ? B.totalGameTime = 0 : B.totalGameTime =
                    Number(a), i.setLocalStorage("fc_totalGameTime", B.totalGameTime);
                var l = {},
                    h = i.pluginCfg;
                h && (l.appId = i.appInfo.appId, l.shareImgUrl = h.pg_share_img,
                    l.shareTitle = h.pg_share_title, l.shareDesc =
                    h.pg_share_desc, l.bannerAdUnitId = h.pg_banner_adunit,
                    l.bannerAdScale = .8, l.nativeAdUnitId = h.pg_native_adunit,
                    l.videoAdUnitId = h.pg_video_adunit, l.insertAdUnitId =
                    h.pg_full_screen_adunit, l.fullSceenAdUnitId =
                    h.pg_full_screen_adunit, l.adMaxCount = h.pg_ad_max_count ||
                    20, l.gameBoxUnitId = h.pg_game_box_adunit, l.gameBannerUnitId =
                    h.pg_game_banner_adunit, l.blockAdUnitId = h.pg_block_adunit,
                    l.customAdUnitId = h.pg_custom_adunit, i.isGMMode =
                    1 == h.pg_gm_mode), s.initAdService(l)
            }
            onViewClosed(e, t) {
                0 == t.indexOf("Knock") && (B.todayKnockTime++, i.setLocalStorage(
                    "fc_knockTime",
                    `${B.todayKnockTime},${Date.now()}`))
            }
            onGamePrepare() {
                B.gameTime++, B.totalGameTime++, i.setLocalStorage(
                    "fc_totalGameTime", B.totalGameTime)
            }
        }
        B.gameTime = 0, B.totalGameTime = 0, B.todayKnockTime = 0, e.ViewId = w,
            e.ViewCheckCode = C, e.ActivityCenter = B, e.DelayShow = r, e.MisleadBtn =
            d, e.VideoAwardEvent = g, e.VideoAwardStrategy_SwitchPos = p, e.VideoAwardStrategy_AllAd =
            u, e.VideoAwardStrategy_MiniCancel = m, e.VideoAwardStrategy_CancelDelay =
            v, e.VideoAwardStrategy_CheckMove = f, e.linkView2Script =
            linkView2Script
    }(window.fc.view, Laya);
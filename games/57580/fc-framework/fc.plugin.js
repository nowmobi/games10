window.fc = window.fc || {},
window.fc.plugin = window.fc.plugin || {},
function(t, i) {
    "use strict";
    var e, s = fc.define.Event, n = fc.define.Layout, o = fc.define.JoystickCode, h = fc.framework.Device, r = fc.framework.Channel, l = fc.framework.Resource, a = fc.framework.GameFrame;
    class d {
        static printPoolInfo() {
            for (var t in console.log("ObjectPool.poolStatus:" + JSON.stringify(this.poolStatus)),
            this.poolStatus)
                this.poolStatus.hasOwnProperty(t) && i.Pool.clearBySign(t);
            this.poolStatus = {}
        }
        static recoverSprite3d(t) {
            t.removeSelf(),
            null != t._fc_sign && (t.__InPool || (this.poolStatus[t._fc_sign] || (this.poolStatus[t._fc_sign] = {}),
            this.poolStatus[t._fc_sign].free ? this.poolStatus[t._fc_sign].free += 1 : this.poolStatus[t._fc_sign].free = 1,
            i.Pool.recover(t._fc_sign, t)))
        }
        static getSprite3d(t, e) {
            var s = e || t.url;
            this.poolStatus[s] ? this.poolStatus[s].total += 1 : (this.poolStatus[s] = {},
            this.poolStatus[s].total = 1);
            var n = this;
            return i.Pool.getItemByCreateFun(s, function() {
                return n.createSprite3d(t, s)
            })
        }
        static createSprite3d(t, e) {
            var s = i.Sprite3D.instantiate(t, null, !1, i.Vector3._ZERO.clone());
            return s._fc_sign = e,
            s
        }
        static getEmptySprite3d(t) {
            var e = t;
            this.poolStatus[e] ? this.poolStatus[e].total += 1 : (this.poolStatus[e] = {},
            this.poolStatus[e].total = 1);
            var s = this;
            return i.Pool.getItemByCreateFun(e, function() {
                return s.createEmptySprite3d(t)
            })
        }
        static createEmptySprite3d(t) {
            var e = new i.Sprite3D;
            return e._fc_sign = t,
            e
        }
    }
    d.poolStatus = {};
    class c extends i.Script3D {
        constructor() {
            super()
        }
        get Sprite() {
            return this.owner
        }
        get Transform() {
            return this.Sprite.transform
        }
        get Animator() {
            return this.owner.getComponent(i.Animator)
        }
        get Rigidbody() {
            return this.owner.getComponent(i.Rigidbody3D)
        }
        get PhysicsCollider() {
            return this.owner.getComponent(i.PhysicsCollider)
        }
        findChild(t) {
            if (null == t || "" == t)
                return null;
            var i = t.split("/")
              , e = this.Sprite;
            for (let t = 0; t < i.length; t++)
                if (null == (e = e.getChildByName(i[t])))
                    return null;
            return e
        }
    }
    i.ClassUtils.regClass("fc.plugin.GameObj", c);
    class m extends i.Script {
        initView(t) {}
        get View() {
            return this.owner
        }
        get FullUI() {
            return this.fullUI
        }
        get TopUI() {
            return this.topUI
        }
        get MiddleUI() {
            return this.middleUI
        }
        get BottomUI() {
            return this.bottomUI
        }
        get LeftFloatUI() {
            return this.leftFloatUI
        }
        get RightFloatUI() {
            return this.rightFloatUI
        }
        constructor() {
            super(),
            this.active = !1,
            this.topUI = null,
            this.middleUI = null,
            this.bottomUI = null,
            this.leftFloatUI = null,
            this.rightFloatUI = null,
            this.fullUI = null,
            this.applyStatusBar = !0,
            this.isFull = !0,
            this.vLayout = n.VERTICAL_MIDDLE,
            this.hLayout = n.HORIZONTAL_CENTER,
            this.viewName = ""
        }
        applyLayout() {
            var t = this.owner;
            this.isFull ? (t.top = 0,
            t.bottom = 0,
            t.left = 0,
            t.right = 0) : (0 == this.vLayout ? t.top = 0 : 1 == this.vLayout ? t.centerY = 0 : t.bottom = 0,
            0 == this.hLayout ? t.left = 0 : 1 == this.hLayout ? t.centerX = 0 : t.right = 0),
            this.topUI && (this.topUI.top = h.statusBarHeight * i.stage.height / h.screenHeight,
            this.topUI.centerX = 0),
            this.middleUI && (this.middleUI.centerY = 0,
            this.middleUI.centerX = 0),
            this.bottomUI && (this.bottomUI.bottom = 0,
            this.bottomUI.centerX = 0),
            this.leftFloatUI && (this.leftFloatUI.left = 0,
            this.leftFloatUI.bottom = 0,
            this.leftFloatUI.top = 0),
            this.rightFloatUI && (this.rightFloatUI.left = i.stage.width - this.rightFloatUI.width,
            this.rightFloatUI.centerY = 0,
            this.rightFloatUI.bottom = 0,
            this.rightFloatUI.top = 0),
            this.fullUI && (this.fullUI.top = 0,
            this.fullUI.bottom = 0,
            this.fullUI.left = 0,
            this.fullUI.right = 0)
        }
        onAwake() {
            this.topUI = this.owner.getChildByName("topUI"),
            this.middleUI = this.owner.getChildByName("middleUI"),
            this.bottomUI = this.owner.getChildByName("bottomUI"),
            this.leftFloatUI = this.owner.getChildByName("leftFloatUI"),
            this.rightFloatUI = this.owner.getChildByName("rightFloatUI"),
            this.fullUI = this.owner.getChildByName("fullUI"),
            this.viewName = this.owner.url,
            this.viewName = this.viewName.substring(this.viewName.lastIndexOf("/") + 1, this.viewName.lastIndexOf("."))
        }
        onStart() {
            this.applyLayout()
        }
        onEnable() {
            this.applyLayout()
        }
    }
    i.ClassUtils.regClass("fc.plugin.BaseView", m);
    class u extends i.Script3D {
        static createEffect(t) {
            null != t && (t.createTime = i.timer.currTimer,
            this.effectWaitingList.push(t),
            1 == this.effectWaitingList.length && this.instanceEffectDelay(2))
        }
        static instanceEffectDelay(t) {
            i.timer.frameOnce(t, this, this.instanceEffect, [t])
        }
        static instanceEffect(t) {
            var e = this.effectWaitingList.shift();
            i.timer.currTimer - e.createTime > e.duaration ? this.effectWaitingList.length > 0 && this.instanceEffectDelay(t) : (l.loadSprite3dAsyn(e.sign, i.Handler.create(this, this.onEffectReady, [e]), null, e.subPkg),
            this.effectWaitingList.length > 0 && this.instanceEffectDelay(t))
        }
        static onEffectReady(t, e) {
            if (!(i.timer.currTimer - t.createTime > t.duaration)) {
                var s = i.Sprite3D.instantiate(e, null, !1, i.Vector3._ZERO.clone());
                if (null != s && !t.parent.destroyed && null != t.parent.parent) {
                    t.parent.addChild(s),
                    s.name = t.customId,
                    null == t.isWorldSpace || (t.isWorldSpace ? (!t.position || (s.transform.position = t.position),
                    !t.rotation || (s.transform.rotation = t.rotation)) : (!t.position || (s.transform.localPosition = t.position),
                    !t.rotation || (s.transform.localRotation = t.rotation)));
                    var n = s.getComponent(u);
                    null == n && (n = s.addComponent(u)),
                    n.delay = t.duaration,
                    t.disableDepthTest && this.diableDepthTest(s)
                }
            }
        }
        static diableDepthTest(t) {
            if (t instanceof i.ShuriKenParticle3D) {
                var e = t.particleRenderer.sharedMaterial;
                e.depthTest = i.RenderState.DEPTHTEST_ALWAYS,
                t.particleRenderer.sharedMaterial = e
            }
            for (let i = 0; i < t.numChildren; i++)
                this.diableDepthTest(t.getChildAt(i))
        }
        constructor() {
            super(),
            this.delay = Number.MAX_VALUE
        }
        cleanNode() {
            this.owner.destroy(!0)
        }
        onUpdate() {
            this.delay < 0 || (this.delay -= i.timer.delta,
            this.delay <= 0 && (this.delay = -1,
            this.owner.destroy(!0)))
        }
        onDestroy() {
            this.delay = -1
        }
    }
    u.effectWaitingList = [];
    class f extends i.Script3D {
        constructor() {
            super(),
            this.listener = null,
            this.triggerComponent = null
        }
        static add(t, i) {
            if (null != t && null != i) {
                var e = t.owner.getComponent(f);
                e || (e = t.owner.addComponent(f)),
                e.listener = i,
                e.triggerComponent = t,
                e.listener == e && console.warn("Trigger3dListener", "listener can't be self")
            }
        }
        static remove(t, i) {
            if (null != t) {
                var e = t.owner.getComponent(f);
                e && (e.listener = null,
                e.triggerComponent = null)
            }
        }
        onTriggerEnter(t, i, e) {
            this.listener != this && null != this.listener && this.listener.on3dTriggerEnter && this.listener.on3dTriggerEnter(t, i || this.triggerComponent, e)
        }
        onTriggerExit(t, i, e) {
            this.listener != this && null != this.listener && this.listener.on3dTriggerEnter && this.listener.on3dTriggerExit(t, i || this.triggerComponent, e)
        }
        onTriggerStay(t, i, e) {
            this.listener != this && null != this.listener && this.listener.on3dTriggerStay && this.listener.on3dTriggerStay(t, i || this.triggerComponent, e)
        }
        onDestroy() {
            this.listener = null,
            this.triggerComponent = null
        }
    }
    class g extends i.Script3D {
        constructor() {
            super(),
            this.listener = null,
            this.collisionComponent = null
        }
        static add(t, i) {
            if (null != t && null != i) {
                var e = t.owner.getComponent(g);
                e || (e = t.owner.addComponent(g)),
                e.listener = i,
                e.collisionComponent = t,
                e.listener == e && console.warn("Trigger3dListener", "listener can't be self")
            }
        }
        static remove(t, i) {
            if (null != t) {
                var e = t.owner.getComponent(g);
                e && (e.listener = null,
                e.collisionComponent = null)
            }
        }
        onCollisionEnter(t) {
            this.listener != this && null != this.listener && this.listener.on3dCollisionEnter && this.listener.on3dCollisionEnter(t)
        }
        onCollisionStay(t) {
            this.listener != this && null != this.listener && this.listener.on3dCollisionStay && this.listener.on3dCollisionStay(t)
        }
        onCollisionExit(t) {
            this.listener != this && null != this.listener && this.listener.on3dCollisionExit && this.listener.on3dCollisionExit(t)
        }
        onDestroy() {
            this.listener = null,
            this.collisionComponent = null
        }
    }
    class p extends i.Script3D {
        static add(t, i) {
            var e = t.owner.getComponent(p);
            null == e && (e = t.owner.addComponent(p)),
            e.listener = i
        }
        static remove(t, i) {
            var e = t.owner.getComponent(p);
            null != e && (e.listener = null)
        }
        constructor() {
            super(),
            this.listener = null
        }
        onAnimEvt(...t) {
            this.listener && this.listener.onAnimEvt && this.listener.onAnimEvt(...t)
        }
    }
    class I extends i.AnimatorStateScript {
        constructor() {
            super(),
            this.stateName = "",
            this.animator = null,
            this.listener = null
        }
        static add(t, i, e) {
            var s = t.getControllerLayer(0).getAnimatorState(i);
            if (null != s) {
                var n = s.getScript(I);
                null == n && (n = s.addScript(I)),
                n.stateName = i,
                n.animator = t,
                n.listener = e
            }
        }
        static remove(t, i, e) {
            var s = t.getControllerLayer(0).getAnimatorState(i);
            null != s && (null != (e = s.getScript(I)) && (e.stateName = null,
            e.animator = null,
            e.listener = null))
        }
        onStateEnter() {
            this.listener && this.listener.onAnimStateEnter && this.listener.onAnimStateEnter(this.stateName, this.animator)
        }
        onStateUpdate() {
            this.listener && this.listener.onAnimStateUpdate && this.listener.onAnimStateUpdate(this.stateName, this.animator)
        }
        onStateExit() {
            this.listener && this.listener.onAnimStateExit && this.listener.onAnimStateExit(this.stateName, this.animator)
        }
    }
    class w extends i.Script3D {
        constructor() {
            super(),
            this.mRenderCamera = null,
            this.mRenderModelSlot = null,
            this.mAnimator = null,
            this.mModel = null,
            this.mRenderTexture = null,
            this.mPrefab = null,
            this.mAnimState = null,
            this.mRenderLayer = 5,
            this.mIdx = 0
        }
        onAwake() {
            this.mIdx = w.id,
            w.id++,
            this.mRenderCamera = this.owner.getChildByName("renderCamera"),
            this.mRenderModelSlot = this.owner.getChildByName("renderModelSlot"),
            this.mRenderCamera.active = !0,
            this.mRenderModelSlot.active = !0,
            this.mRenderTexture = new i.RenderTexture(w.width,w.height,i.RenderTexture.FORMAT_R8G8B8A8),
            this.mRenderCamera.renderTarget = this.mRenderTexture,
            this.mRenderCamera.renderingOrder = -1,
            this.mRenderCamera.cullingMask = 0,
            this.mRenderCamera.cullingMask = 1 << this.mRenderLayer,
            this.mRenderCamera.clearFlag = i.BaseCamera.CLEARFLAG_SOLIDCOLOR,
            this.mRenderCamera.clearColor = new i.Vector4(0,0,0,0),
            0 == this.mIdx && (w.RenderTexture = this.mRenderTexture),
            w.RenderTextureArr.push(this.mRenderTexture),
            i.stage.on(s.TEXTURE_CAMERA_INIT, this, this.onInitTextureCamera),
            i.stage.on(s.TEXTURE_CAMERA_CLEAR, this, this.onClearTextureCamera)
        }
        onDestroy() {
            i.stage.off(s.TEXTURE_CAMERA_INIT, this, this.onInitTextureCamera),
            i.stage.off(s.TEXTURE_CAMERA_CLEAR, this, this.onClearTextureCamera)
        }
        onInitTextureCamera(t, i, e, s) {
            s || 0 != this.mIdx ? s == this.mIdx && this.renderModel(t, i, e) : this.renderModel(t, i, e)
        }
        onClearTextureCamera(t) {
            t || 0 != this.mIdx ? t == this.mIdx && this.clearModel() : this.clearModel()
        }
        renderModel(t, e, s) {
            null != e && 0 != e.length ? e != this.mPrefab && (this.playAnimation(s),
            this.mPrefab = e,
            l.loadSprite3dAsyn(e, i.Handler.create(this, this.onModelReady, [e]), null, t)) : this.onClearTextureCamera()
        }
        clearModel() {
            this.mAnimState = null,
            this.mAnimator = null,
            this.mPrefab = null,
            this.mModel && this.mModel.destroy(),
            this.mModel = null
        }
        playAnimation(t) {
            this.mAnimState = t,
            this.mAnimator && this.mAnimState && this.mAnimator.play(this.mAnimState)
        }
        onModelReady(t, i) {
            if (this.mPrefab == t) {
                var e = this.mAnimState;
                this.clearModel(),
                this.mModel = d.getSprite3d(i, t),
                this.mRenderModelSlot.addChild(this.mModel),
                this.mModel.transform.localPosition.setValue(0, 0, 0),
                this.mModel.transform.localPosition = this.mModel.transform.localPosition,
                this.mModel.transform.localRotationEuler.setValue(0, 0, 0),
                this.mModel.transform.localRotationEuler = this.mModel.transform.localRotationEuler,
                this.updateLayer(this.mModel),
                this.mAnimState = e,
                this.mAnimState && (this.mAnimator = this.findAnimator(this.mModel)),
                this.playAnimation(this.mAnimState)
            }
        }
        updateLayer(t) {
            t.layer = this.mRenderLayer;
            for (let i = 0; i < t.numChildren; i++) {
                const e = t.getChildAt(i);
                this.updateLayer(e)
            }
        }
        findAnimator(t) {
            if (e = t.getComponent(i.Animator))
                return e;
            for (let i = 0; i < t.numChildren; i++) {
                const s = t.getChildAt(i);
                var e;
                if (null != (e = this.findAnimator(s)))
                    return e
            }
            return null
        }
    }
    w.RenderTexture = null,
    w.width = 512,
    w.height = 512,
    w.id = 0,
    w.RenderTextureArr = [],
    function(t) {
        t[t.Static = 0] = "Static",
        t[t.Dynamic = 1] = "Dynamic"
    }(e || (e = {}));
    class C extends i.Script {
        constructor() {
            super(),
            this.config = null,
            this.otherViews = [],
            this.passedTime = 0,
            this.uiReady = !1,
            this.uiVisible = !0,
            this.uiHasShow = !1,
            this.showNativeHandler = null,
            this.hideNativeHandler = null
        }
        onStart() {
            if (this.owner.viewId && (this.config = E.bannerConfig[this.owner.viewId],
            this.uiReady = this.config && !this.config.delay,
            this.uiVisible = this.config && 0 != this.config.visible,
            this.config)) {
                var t = E.userSetting[this.owner.viewId];
                if (t && (this.uiVisible = this.uiVisible && !!t.visible,
                E.userSetting[this.owner.viewId] = null),
                E.bannerRefreshInterval) {
                    var i = Date.now();
                    i - E.bannerCreateTime >= E.bannerRefreshInterval && (r.destroyBannerAd(),
                    r.createBannerAd(),
                    E.bannerCreateTime = i)
                } else
                    r.destroyBannerAd(),
                    r.createBannerAd()
            }
        }
        onEnable() {
            i.stage.on(s.UI_VIEW_CLOSED, this, this.onViewClosed),
            i.stage.on(s.UI_VIEW_OPENED, this, this.onViewOpened),
            i.stage.on(E.EVENT_SHOW_BANNER, this, this.onShowBanner),
            i.stage.on(E.EVENT_HIDE_BANNER, this, this.onHideBanner),
            this.showBanner()
        }
        onDisable() {
            i.stage.off(s.UI_VIEW_CLOSED, this, this.onViewClosed),
            i.stage.off(s.UI_VIEW_OPENED, this, this.onViewOpened),
            i.stage.off(E.EVENT_SHOW_BANNER, this, this.onShowBanner),
            i.stage.off(E.EVENT_HIDE_BANNER, this, this.onHideBanner),
            this.hideBanner()
        }
        onDestroy() {
            i.stage.off(s.UI_VIEW_CLOSED, this, this.onViewClosed),
            i.stage.off(s.UI_VIEW_OPENED, this, this.onViewOpened),
            i.stage.off(E.EVENT_SHOW_BANNER, this, this.onShowBanner),
            i.stage.off(E.EVENT_HIDE_BANNER, this, this.onHideBanner),
            this.hideBanner()
        }
        onUpdate() {
            this.config && this.owner.viewId && (this.uiReady || (this.config.delay ? this.config.delay >= 0 && (this.passedTime += i.timer.delta,
            this.passedTime > this.config.delay && (this.uiReady = !0,
            this.showBanner())) : (this.uiReady = !0,
            this.showBanner())))
        }
        onViewOpened(t, i, e) {
            e.zOrder < this.owner.zOrder || (this.otherViews.push(i),
            this.hideBanner())
        }
        onViewClosed(t, i) {
            var e = this.otherViews.indexOf(i);
            e < 0 || (this.otherViews.splice(e, 1),
            this.showBanner())
        }
        onShowBanner(t) {
            t == this.owner.viewId && (this.uiVisible = !0,
            this.showBanner())
        }
        onHideBanner(t) {
            t == this.owner.viewId && (this.uiVisible = !1,
            this.hideBanner())
        }
        showBanner() {
            0 == this.otherViews.length && this.uiVisible && 0 == this.uiHasShow && this.uiReady && (this.uiHasShow = !0,
            r.showBannerAd())
        }
        hideBanner() {
            this.uiHasShow && (r.hideBannerAd(),
            this.uiHasShow = !1)
        }
    }
    class E extends i.Script {
        static showBanner(t) {
            this.userSetting[t] = this.userSetting[t] || {},
            this.userSetting[t].visible = !0,
            i.stage.event(E.EVENT_SHOW_BANNER, t)
        }
        static hideBanner(t) {
            this.bannerConfig && (this.userSetting[t] = this.bannerConfig[t] || {},
            this.userSetting[t].visible = !1,
            i.stage.event(E.EVENT_HIDE_BANNER, t))
        }
        constructor() {
            super()
        }
        onAwake() {
            i.stage.once(s.LAUNCH_COMPLETED, this, this.onLaunchResReady),
            i.stage.on(s.UI_VIEW_OPENED, this, this.onViewOpened)
        }
        onDestroy() {
            i.stage.off(s.UI_VIEW_OPENED, this, this.onViewOpened)
        }
        onLaunchResReady() {
            var t = a.pluginCfg;
            t && (t.bannerConfig && (E.bannerConfig = t.bannerConfig),
            E.bannerRefreshInterval = t.pg_banner_refresh_time)
        }
        onViewOpened(t, i, e) {
            e.addComponent(C)
        }
    }
    E.EVENT_SHOW_BANNER = "BANNERCTRL_EVENT_SHOW_BANNER",
    E.EVENT_HIDE_BANNER = "BANNERCTRL_EVENT_HIDE_BANNER",
    E.userSetting = {},
    E.bannerConfig = {},
    E.bannerCreateTime = 0,
    E.bannerRefreshInterval = 3e4,
    i.ClassUtils.regClass("fc.plugin.BannerCtrl", E);
    class S extends i.Script {
        constructor() {
            super(),
            this.config = null,
            this.otherViews = [],
            this.passedTime = 0,
            this.uiReady = !1,
            this.uiVisible = !0,
            this.uiHasShow = !1,
            this.showNativeHandler = null,
            this.hideNativeHandler = null
        }
        onStart() {
            if (this.owner.viewId && (this.config = y.blockConfig[this.owner.viewId],
            this.uiReady = this.config && !this.config.delay,
            this.uiVisible = !0,
            this.config)) {
                var t = y.userSetting[this.owner.viewId];
                t && (this.uiVisible = !!t.visible,
                y.userSetting[this.owner.viewId] = null),
                r.createGameBanner(null, this.config)
            }
        }
        onEnable() {
            i.stage.on(s.UI_VIEW_CLOSED, this, this.onViewClosed),
            i.stage.on(s.UI_VIEW_OPENED, this, this.onViewOpened),
            i.stage.on(y.EVENT_SHOW_BLOCK, this, this.onShowBlock),
            i.stage.on(y.EVENT_HIDE_BLOCK, this, this.onHideBlock),
            this.showBlock()
        }
        onDisable() {
            i.stage.off(s.UI_VIEW_CLOSED, this, this.onViewClosed),
            i.stage.off(s.UI_VIEW_OPENED, this, this.onViewOpened),
            i.stage.off(y.EVENT_SHOW_BLOCK, this, this.onShowBlock),
            i.stage.off(y.EVENT_HIDE_BLOCK, this, this.onHideBlock),
            this.hideBlock()
        }
        onDestroy() {
            i.stage.off(s.UI_VIEW_CLOSED, this, this.onViewClosed),
            i.stage.off(s.UI_VIEW_OPENED, this, this.onViewOpened),
            i.stage.off(y.EVENT_SHOW_BLOCK, this, this.onShowBlock),
            i.stage.off(y.EVENT_HIDE_BLOCK, this, this.onHideBlock),
            this.hideBlock()
        }
        onUpdate() {
            this.config && this.owner.viewId && (this.uiReady || (this.config.delay ? this.config.delay >= 0 && (this.passedTime += i.timer.delta,
            this.passedTime > this.config.delay && (this.uiReady = !0,
            this.showBlock())) : (this.uiReady = !0,
            this.showBlock())))
        }
        onViewOpened(t, i, e) {
            e.zOrder < this.owner.zOrder || (this.otherViews.push(i),
            this.hideBlock())
        }
        onViewClosed(t, i) {
            var e = this.otherViews.indexOf(i);
            e < 0 || (this.otherViews.splice(e, 1),
            this.showBlock())
        }
        onShowBlock(t) {
            t == this.owner.viewId && (this.uiVisible = !0,
            this.showBlock())
        }
        onHideBlock(t) {
            t == this.owner.viewId && (this.uiVisible = !1,
            this.hideBlock())
        }
        showBlock() {
            0 == this.otherViews.length && this.uiVisible && 0 == this.uiHasShow && this.uiReady && (this.uiHasShow = !0,
            r.showGameBanner())
        }
        hideBlock() {
            this.uiHasShow && (r.hideGameBanner(),
            this.uiHasShow = !1)
        }
    }
    class y extends i.Script {
        static showBlock(t) {
            this.userSetting[t] = this.userSetting[t] || {},
            this.userSetting[t].visible = !0,
            i.stage.event(y.EVENT_SHOW_BLOCK, t)
        }
        static hideBlock(t) {
            this.blockConfig && (this.userSetting[t] = this.blockConfig[t] || {},
            this.userSetting[t].visible = !1,
            i.stage.event(y.EVENT_HIDE_BLOCK, t))
        }
        constructor() {
            super()
        }
        onAwake() {
            i.stage.once(s.LAUNCH_COMPLETED, this, this.onLaunchResReady),
            i.stage.on(s.UI_VIEW_OPENED, this, this.onViewOpened)
        }
        onDestroy() {
            i.stage.off(s.UI_VIEW_OPENED, this, this.onViewOpened)
        }
        onLaunchResReady() {
            var t = a.pluginCfg;
            t && t.blockConfig && (y.blockConfig = t.blockConfig)
        }
        onViewOpened(t, i, e) {
            e.addComponent(S)
        }
    }
    y.EVENT_SHOW_BLOCK = "BLOCKCTRL_EVENT_SHOW_BLOCK",
    y.EVENT_HIDE_BLOCK = "BLOCKCTRL_EVENT_HIDE_BLOCK",
    y.userSetting = {},
    y.blockConfig = {},
    i.ClassUtils.regClass("fc.plugin.BlockAdCtrl", y);
    class v extends i.Script {
        constructor() {
            super(),
            this.config = null,
            this.adView = null,
            this.monitorOtherPageOpen = !1,
            this.visibleArr = null
        }
        onEnable() {}
        onDisable() {
            this.monitorOtherPageOpen && (i.stage.off(s.UI_VIEW_OPENED, this, this.onViewOpened),
            i.stage.off(s.UI_VIEW_CLOSED, this, this.onViewClosed))
        }
        onDestroy() {
            if (null != this.adView) {
                for (var t = 0; t < this.adView.length; t++)
                    if (null != this.adView[t]) {
                        if (this.config[t].scriptType) {
                            var e = i.ClassUtils.getClass(this.config[t].scriptType)
                              , s = this.adView[t].getComponent(e);
                            s && s.releaseView && s.releaseView()
                        }
                        this.adView[t].destroy()
                    }
                this.adView = null
            }
        }
        onStart() {
            if (!this.adView && null != x.additiveUIConfig && this.owner.viewId && (this.config = x.additiveUIConfig[this.owner.viewId],
            this.config)) {
                this.monitorOtherPageOpen = !1;
                for (var t = 0; t < this.config.length; t++) {
                    (e = this.config[t]).active && !e.active() || (this.monitorOtherPageOpen = this.monitorOtherPageOpen || e.isHide)
                }
                this.monitorOtherPageOpen && (i.stage.on(s.UI_VIEW_OPENED, this, this.onViewOpened),
                i.stage.on(s.UI_VIEW_CLOSED, this, this.onViewClosed)),
                this.adView = [];
                for (t = 0; t < this.config.length; t++) {
                    var e;
                    if ((e = this.config[t]).parentRoot && this.owner.getChildByName(e.parentRoot))
                        if (e.viewUrl && 0 != e.viewUrl.length)
                            if (e.scriptType && !i.ClassUtils.getClass(e.scriptType))
                                console.warn(this.owner.viewId, "invalid additiveUIConfig.scriptType", t),
                                this.adView.push(null);
                            else {
                                if (!e.checkCode || !x.checkFun || x.checkFun(e.checkCode)) {
                                    i.loader.create(e.viewUrl, i.Handler.create(this, this.onPrefabReady, [this.owner.viewId]), null, i.Loader.PREFAB);
                                    break
                                }
                                console.warn(this.owner.viewId, "invalid additiveUIConfig", t),
                                this.adView.push(null)
                            }
                        else
                            console.warn(this.owner.viewId, "invalid additiveUIConfig.prefab", t),
                            this.adView.push(null);
                    else
                        console.warn(this.owner.viewId, "invalid additiveUIConfig.parentRoot", t),
                        this.adView.push(null)
                }
            }
        }
        onPrefabReady(t, e) {
            if (!this.destroyed) {
                var s = this.config[this.adView.length]
                  , n = e.create();
                if (this.owner.getChildByName(s.parentRoot).addChild(n),
                n.pos(s.x, s.y),
                s.scale && n.scale(s.scale, s.scale),
                s.scriptType) {
                    var o = i.ClassUtils.getClass(s.scriptType)
                      , h = n.getComponent(o);
                    null == h && (h = n.addComponent(o)),
                    h.initView && h.initView(s)
                }
                this.adView.push(n);
                for (var r = this.adView.length; r < this.config.length; r++) {
                    var l = this.config[r];
                    if (l.parentRoot && this.owner.getChildByName(l.parentRoot))
                        if (l.viewUrl && 0 != l.viewUrl.length)
                            if (l.scriptType && !i.ClassUtils.getClass(l.scriptType))
                                console.warn(t, "invalid additiveUIConfig.scriptType", r),
                                this.adView.push(null);
                            else {
                                if (!l.checkCode || !x.checkFun || x.checkFun(l.checkCode)) {
                                    i.loader.create(l.viewUrl, i.Handler.create(this, this.onPrefabReady, [t]), null, i.Loader.PREFAB);
                                    break
                                }
                                console.warn(t, "invalid additiveUIConfig", r),
                                this.adView.push(null)
                            }
                        else
                            console.warn(t, "invalid additiveUIConfig.prefab", r),
                            this.adView.push(null);
                    else
                        console.warn(t, "invalid additiveUIConfig.parentRoot", r),
                        this.adView.push(null)
                }
                this.adView.length == this.config.length && this.owner.timerOnce(100, this, function() {
                    this.owner.event(x.ADDITIVE_UI_LOAD_COMPLETED)
                })
            }
        }
        onViewOpened(t) {
            if (t && this.adView) {
                this.visibleArr = [];
                for (var i = 0; i < this.adView.length; i++)
                    null != this.adView[i] && this.config[i].isHide && (this.visibleArr[i] = this.adView[i].visible,
                    this.adView[i].visible = !1)
            }
        }
        onViewClosed(t) {
            if (t && this.adView) {
                if (!this.visibleArr)
                    return;
                for (var i = 0; i < this.adView.length; i++)
                    null != this.adView[i] && this.config[i].isHide && this.visibleArr[i] && (this.adView[i].visible = this.visibleArr[i])
            }
        }
    }
    class x extends i.Script {
        constructor() {
            super()
        }
        onAwake() {
            i.stage.once(s.LAUNCH_COMPLETED, this, this.onLaunchResReady),
            i.stage.on(s.UI_VIEW_OPENED, this, this.onViewOpened)
        }
        onDestroy() {
            i.stage.off(s.UI_VIEW_OPENED, this, this.onViewOpened)
        }
        onLaunchResReady() {
            var t = a.pluginCfg;
            if (t.additiveUIConfig) {
                for (var i = x.additiveUIConfig || {}, e = Object.keys(t.additiveUIConfig), s = 0; s < e.length; s++)
                    i[e[s]] = t.additiveUIConfig[e[s]];
                x.additiveUIConfig = i
            }
        }
        onViewOpened(t, i, e) {
            e.addComponent(v)
        }
    }
    x.ADDITIVE_UI_LOAD_COMPLETED = "ADDITIVE_UI_LOAD_COMPLETED",
    x.additiveUIConfig = null,
    x.checkFun = null,
    i.ClassUtils.regClass("fc.plugin.AdditiveUICtrl", x);
    class _ extends i.Script {
        constructor() {
            super(),
            this.selectedItem = null,
            this.comps = null,
            this.layerIdx = 0,
            this.compIdx = 0,
            this.layerInfo = null,
            this.backComp = null,
            this.backView = null,
            this.confirmComp = null,
            this.confirmView = null,
            this.otherViews = [],
            this.guideFinger = null,
            this.localPoint = new i.Point,
            this.listIdx = 0,
            this.openTime = 0,
            this.lastClick = 0,
            this.jumpNum = 0,
            this.hasInitialized = !0
        }
        onAwake() {
            this.openTime = Date.now(),
            this.lastClick = Date.now()
        }
        onStart() {
            if (this.hasInitialized = !0,
            this.owner.viewId) {
                var t = V.viewConfig[this.owner.viewId];
                null != t && (this.hasInitialized = !1,
                this.compIdx = t.defaultCompIdx ? t.defaultCompIdx : 0,
                this.layerIdx = t.defaultLayerIdx ? t.defaultLayerIdx : 0,
                this.backComp = t.backComp,
                this.backView = t.backView,
                this.confirmComp = t.confirmComp,
                this.confirmView = t.confirmView,
                t.comps && t.comps.length > 0 && t.comps[0].length > 0 ? (this.comps = t.comps,
                this.layerIdx >= this.comps.length && (this.layerIdx = 0),
                this.compIdx >= this.comps[this.layerIdx].length && (this.compIdx = 0),
                this.updateFocus(this.findItem(this.comps[this.layerIdx][this.compIdx].viewPath)),
                this.owner.once(x.ADDITIVE_UI_LOAD_COMPLETED, this, this.onAdditiveUIReady),
                i.loader.create(V.guideFinger, i.Handler.create(this, this.onPrefabReady), null, i.Loader.PREFAB)) : this.comps = null,
                i.stage.on(s.JOYSTICK_KEY_DOWN, this, this.onJoystickKeyUp))
            }
        }
        onEnable() {
            i.stage.on(s.UI_VIEW_CLOSED, this, this.onViewClosed),
            i.stage.on(s.UI_VIEW_OPENED, this, this.onViewOpened)
        }
        onDisable() {
            i.stage.off(s.UI_VIEW_CLOSED, this, this.onViewClosed),
            i.stage.off(s.UI_VIEW_OPENED, this, this.onViewOpened)
        }
        onDestroy() {
            i.stage.off(s.UI_VIEW_CLOSED, this, this.onViewClosed),
            i.stage.off(s.UI_VIEW_OPENED, this, this.onViewOpened),
            i.stage.off(s.JOYSTICK_KEY_DOWN, this, this.onJoystickKeyUp)
        }
        onUpdate() {
            0 == this.hasInitialized && null != this.comps && this.comps.length > 0 && this.updateFocus(this.findItem(this.comps[this.layerIdx][this.compIdx].viewPath))
        }
        onPrefabReady(t) {
            this.destroyed || (this.guideFinger = t.create(),
            this.owner.addChild(this.guideFinger),
            this.updateFocus(this.findItem(this.comps[this.layerIdx][this.compIdx].viewPath)),
            this.guideFinger.visible = 0 == this.otherViews.length)
        }
        onAdditiveUIReady() {
            this.updateFocus(this.findItem(this.comps[this.layerIdx][this.compIdx].viewPath))
        }
        onViewOpened(t, i, e) {
            e.zOrder < this.owner.zOrder || (this.otherViews.push(i),
            this.guideFinger && (this.guideFinger.visible = !1))
        }
        onViewClosed(t, i) {
            var e = this.otherViews.indexOf(i);
            e < 0 || (this.otherViews.splice(e, 1),
            0 == this.otherViews.length && this.guideFinger && (this.guideFinger.visible = !0,
            this.freshFocus()))
        }
        onJoystickKeyUp(t, e) {
            if (i.MouseManager.enabled && 0 != e && !(this.otherViews.length > 0 || t == o.UNDEFINE))
                switch (t) {
                case o.ESCAPE:
                    this.doneBack();
                    break;
                case o.OK:
                    this.confirmSelected();
                    break;
                case o.LEFT:
                    this.selectLeftComp();
                    break;
                case o.RIGHT:
                    this.selectRightComp();
                    break;
                case o.UP:
                    this.selectPreLayer();
                    break;
                case o.DOWN:
                    this.selectNextLayer()
                }
        }
        doneBack() {
            if (Date.now() - this.openTime < 400)
                console.debug("click too quickly");
            else if (Date.now() - this.lastClick < 400)
                console.debug("click too quickly");
            else {
                if (this.lastClick = Date.now(),
                this.backComp) {
                    var t = this.findItem(this.backComp);
                    if (t)
                        return void t.event(i.Event.CLICK)
                }
                this.backView ? a.openView(this.backView) : a.closeView(this.owner)
            }
        }
        confirmSelected() {
            if (Date.now() - this.lastClick < 400)
                console.debug("click too quickly");
            else {
                if (this.lastClick = Date.now(),
                this.comps) {
                    var t = this.comps[this.layerIdx][this.compIdx]
                      , e = this.findItem(t.clickPath ? t.clickPath : t.viewPath);
                    return e instanceof i.List ? (e.selectedIndex = -1,
                    void (e.selectedIndex = this.listIdx)) : void (e ? e.event(i.Event.CLICK, {
                        type: i.Event.CLICK
                    }) : console.log("selectedItem is undefine"))
                }
                if (this.confirmComp) {
                    var s = this.findItem(this.confirmComp);
                    if (s)
                        return void s.event(i.Event.CLICK)
                }
                this.confirmView && a.openView(this.confirmView)
            }
        }
        confirmSelectListItem() {
            if (Date.now() - this.lastClick < 400)
                console.debug("click too quickly");
            else {
                if (this.lastClick = Date.now(),
                this.comps) {
                    var t = this.comps[this.layerIdx][this.compIdx]
                      , e = this.findItem(t.clickPath ? t.clickPath : t.viewPath);
                    return e instanceof i.List ? (e.selectedIndex = -1,
                    void (e.selectedIndex = this.listIdx)) : void (e ? e.event(i.Event.CLICK, {
                        type: i.Event.CLICK
                    }) : console.log("selectedItem is undefine"))
                }
                if (this.confirmComp) {
                    var s = this.findItem(this.confirmComp);
                    if (s)
                        return void s.event(i.Event.CLICK)
                }
                this.confirmView && a.openView(this.confirmView)
            }
        }
        selectLeftComp() {
            if (this.comps) {
                var t = this.findItem(this.comps[this.layerIdx][this.compIdx].viewPath);
                if (t instanceof i.List && this.listIdx - 1 >= 0)
                    return this.listIdx--,
                    t.scrollTo(this.listIdx),
                    this.updateFocus(t.getCell(this.listIdx)),
                    void (t.selectedIndex = this.listIdx);
                null != t && t.event(s.JOYSTICK_LEAVE);
                var e = this.compIdx - 1;
                e < 0 && (e = this.comps[this.layerIdx].length - 1);
                var n = this.findItem(this.comps[this.layerIdx][e].viewPath);
                if (null == n || 0 == n.visible) {
                    if (this.jumpNum > this.comps[this.layerIdx].length)
                        return;
                    return this.jumpNum++,
                    this.compIdx = e,
                    void this.selectLeftComp()
                }
                if (this.compIdx = e,
                null != n && n.event(s.JOYSTICK_ENTER),
                n instanceof i.List)
                    return this.listIdx = n.selectedIndex,
                    -1 == this.listIdx && (this.listIdx = 0),
                    this.updateFocus(n.getCell(this.listIdx)),
                    void (n.selectedIndex = this.listIdx);
                this.updateFocus(n)
            }
        }
        selectRightComp() {
            if (this.comps) {
                var t = this.findItem(this.comps[this.layerIdx][this.compIdx].viewPath);
                if (t instanceof i.List && this.listIdx + 1 < t.array.length)
                    return this.listIdx++,
                    t.scrollTo(this.listIdx),
                    this.updateFocus(t.getCell(this.listIdx)),
                    void (t.selectedIndex = this.listIdx);
                null != t && t.event(s.JOYSTICK_LEAVE);
                var e = this.compIdx + 1;
                e == this.comps[this.layerIdx].length && (e = 0);
                var n = this.findItem(this.comps[this.layerIdx][e].viewPath);
                if (null == n || 0 == n.visible) {
                    if (this.jumpNum > this.comps[this.layerIdx].length)
                        return;
                    return this.jumpNum++,
                    this.compIdx = e,
                    void this.selectRightComp()
                }
                if (this.compIdx = e,
                null != n && n.event(s.JOYSTICK_ENTER),
                n instanceof i.List)
                    return this.listIdx = n.selectedIndex,
                    -1 == this.listIdx && (this.listIdx = 0),
                    n.scrollTo(this.listIdx),
                    this.updateFocus(n.getCell(this.listIdx)),
                    void (n.selectedIndex = this.listIdx);
                this.updateFocus(n)
            }
        }
        selectPreLayer() {
            if (this.comps) {
                var t = this.findItem(this.comps[this.layerIdx][this.compIdx].viewPath);
                if (t instanceof i.List && t.repeatX && this.listIdx - t.repeatX >= 0)
                    return this.listIdx -= t.repeatX,
                    t.scrollTo(this.listIdx),
                    this.updateFocus(t.getCell(this.listIdx)),
                    void (t.selectedIndex = this.listIdx);
                null != t && t.event(s.JOYSTICK_LEAVE);
                var e = this.layerIdx - 1;
                e < 0 && (e = this.comps.length - 1);
                var n = this.findItem(this.comps[e][0].viewPath);
                if (null == n || 0 == n.visible) {
                    if (this.jumpNum > this.comps.length)
                        return;
                    return this.jumpNum++,
                    this.layerIdx = e,
                    this.compIdx = 0,
                    void this.selectPreLayer()
                }
                if (this.layerIdx = e,
                this.compIdx = 0,
                null != n && n.event(s.JOYSTICK_ENTER),
                n instanceof i.List)
                    return this.listIdx = n.selectedIndex,
                    -1 == this.listIdx && (this.listIdx = 0),
                    n.scrollTo(this.listIdx),
                    this.updateFocus(n.getCell(this.listIdx)),
                    void (n.selectedIndex = this.listIdx);
                this.updateFocus(n)
            }
        }
        selectNextLayer() {
            if (this.comps) {
                var t = this.findItem(this.comps[this.layerIdx][this.compIdx].viewPath);
                if (t instanceof i.List && t.repeatX && this.listIdx + t.repeatX < t.array.length)
                    return this.listIdx += t.repeatX,
                    t.scrollTo(this.listIdx),
                    this.updateFocus(t.getCell(this.listIdx)),
                    void (t.selectedIndex = this.listIdx);
                null != t && t.event(s.JOYSTICK_LEAVE);
                var e = this.layerIdx + 1;
                e >= this.comps.length && (e = 0);
                var n = this.findItem(this.comps[e][0].viewPath);
                if (null == n || 0 == n.visible) {
                    if (this.jumpNum > this.comps.length)
                        return;
                    return this.jumpNum++,
                    this.layerIdx = e,
                    this.compIdx = 0,
                    void this.selectNextLayer()
                }
                if (this.layerIdx = e,
                this.compIdx = 0,
                null != n && n.event(s.JOYSTICK_ENTER),
                n instanceof i.List)
                    return this.listIdx = n.selectedIndex,
                    -1 == this.listIdx && (this.listIdx = 0),
                    n.scrollTo(this.listIdx),
                    this.updateFocus(n.getCell(this.listIdx)),
                    void (n.selectedIndex = this.listIdx);
                this.updateFocus(n)
            }
        }
        freshFocus() {
            var t = this.findItem(this.comps[this.layerIdx][this.compIdx].viewPath);
            if (0 != t.visible)
                return t instanceof i.List ? (this.listIdx = t.selectedIndex,
                -1 == this.listIdx && (this.listIdx = 0),
                this.updateFocus(t.getCell(this.listIdx)),
                void (t.selectedIndex = this.listIdx)) : void this.updateFocus(t)
        }
        updateFocus(t) {
            null != t && null != this.guideFinger && (this.hasInitialized = !0,
            this.localPoint.x = .75 * t.width,
            this.localPoint.y = .75 * t.height,
            t.localToGlobal(this.localPoint, !1, this.owner),
            this.guideFinger.pos(this.localPoint.x, this.localPoint.y),
            this.guideFinger.ef_finger.stop(),
            this.guideFinger.ef_finger.play(0, !0),
            t.event(s.JOYSTICK_FOCUS_ON, [t]),
            this.jumpNum = 0)
        }
        findItem(t) {
            var i = t.split("/")
              , e = this.owner;
            for (let t = 0; t < i.length && null != e; t++)
                e = e.getChildByName(i[t]);
            return e
        }
    }
    class V extends i.Script {
        constructor() {
            super()
        }
        onAwake() {
            fc.framework.Joystick.init(),
            i.stage.once(s.LAUNCH_COMPLETED, this, this.onLaunchResReady),
            i.stage.on(s.UI_VIEW_OPENED, this, this.onViewOpened)
        }
        onDestroy() {
            i.stage.off(s.UI_VIEW_OPENED, this, this.onViewOpened)
        }
        onViewOpened(t, i, e) {
            e.addComponent(_)
        }
        onLaunchResReady() {
            var t = a.pluginCfg;
            if (t.uiJoystickConfig) {
                for (var i = V.viewConfig, e = Object.keys(t.uiJoystickConfig), s = 0; s < e.length; s++)
                    i[e[s]] = t.uiJoystickConfig[e[s]];
                V.viewConfig = i
            }
        }
    }
    V.viewConfig = {},
    V.guideFinger = "fc-layout/prefab/guide/ef_finger.json",
    i.ClassUtils.regClass("fc.plugin.UIJoystickCtrl", V);
    class D {
        constructor() {
            this.mJoyStickWorking = !1,
            this.mJoyStickDirection = new i.Vector3,
            this.mJoyStickStatus = 0
        }
        init() {
            i.stage.on(s.JOYSTICK_KEY_DOWN, this, this.onJoystickKeyDown),
            i.stage.on(s.JOYSTICK_KEY_UP, this, this.onJoystickKeyUp)
        }
        release() {
            i.stage.off(s.JOYSTICK_KEY_DOWN, this, this.onJoystickKeyDown),
            i.stage.off(s.JOYSTICK_KEY_UP, this, this.onJoystickKeyUp)
        }
        update() {
            fc.framework.GameFrame.isGamePaused || (0 != this.mJoyStickStatus && (this.mJoyStickDirection.setValue(0, 0),
            0 != (this.mJoyStickStatus & o.UP) && (this.mJoyStickDirection.y -= 1),
            0 != (this.mJoyStickStatus & o.DOWN) && (this.mJoyStickDirection.y += 1),
            0 != (this.mJoyStickStatus & o.LEFT) && (this.mJoyStickDirection.x -= 1),
            0 != (this.mJoyStickStatus & o.RIGHT) && (this.mJoyStickDirection.x += 1),
            i.stage.event(s.GAMEPAD_DIRECTION_UPDATE, [this.mJoyStickDirection.x, this.mJoyStickDirection.y, 1])),
            this.mJoyStickWorking)
        }
        onJoystickKeyDown(t) {
            t != o.UP && t != o.DOWN && t != o.LEFT && t != o.RIGHT || (this.mJoyStickStatus |= t,
            this.mJoyStickDirection.setValue(0, 0),
            0 != (this.mJoyStickStatus & o.UP) && (this.mJoyStickDirection.y -= 1),
            0 != (this.mJoyStickStatus & o.DOWN) && (this.mJoyStickDirection.y += 1),
            0 != (this.mJoyStickStatus & o.LEFT) && (this.mJoyStickDirection.x -= 1),
            0 != (this.mJoyStickStatus & o.RIGHT) && (this.mJoyStickDirection.x += 1),
            i.stage.event(s.GAMEPAD_DIRECTION_UPDATE, [this.mJoyStickDirection.x, this.mJoyStickDirection.y, 1]))
        }
        onJoystickKeyUp(t) {
            t != o.UP && t != o.DOWN && t != o.LEFT && t != o.RIGHT || (this.mJoyStickStatus & t && (this.mJoyStickStatus ^= t),
            0 == this.mJoyStickStatus ? i.stage.event(s.GAMEPAD_DIRECTION_UPDATE, [0, 0, 0]) : (this.mJoyStickDirection.setValue(0, 0),
            0 != (this.mJoyStickStatus & o.UP) && (this.mJoyStickDirection.y -= 1),
            0 != (this.mJoyStickStatus & o.DOWN) && (this.mJoyStickDirection.y += 1),
            0 != (this.mJoyStickStatus & o.LEFT) && (this.mJoyStickDirection.x -= 1),
            0 != (this.mJoyStickStatus & o.RIGHT) && (this.mJoyStickDirection.x += 1),
            i.stage.event(s.GAMEPAD_DIRECTION_UPDATE, [this.mJoyStickDirection.x, this.mJoyStickDirection.y, 1])))
        }
    }
    class T {
        constructor() {
            this.mArrowPad = null,
            this.mJoystick = null,
            this.mMaxDist = 100,
            this.mCurPos = new i.Vector3,
            this.mNewPos = new i.Vector3
        }
        init(t) {
            this.mArrowPad = t,
            this.mJoystick = t.getChildByName("JoyStick"),
            this.mArrowPad.alpha = 0,
            i.stage.on(i.Event.MOUSE_DOWN, this, this.onTouchOn),
            i.stage.on(i.Event.MOUSE_MOVE, this, this.onTouchMove),
            i.stage.on(i.Event.MOUSE_UP, this, this.onTouchRelease)
        }
        release() {
            i.stage.off(i.Event.MOUSE_DOWN, this, this.onTouchOn),
            i.stage.off(i.Event.MOUSE_MOVE, this, this.onTouchMove),
            i.stage.off(i.Event.MOUSE_UP, this, this.onTouchRelease)
        }
        onTouchOn() {
            this.mArrowPad.alpha = .5,
            this.mArrowPad.x = i.stage.mouseX,
            this.mArrowPad.y = i.stage.mouseY,
            this.mJoystick.x = this.mArrowPad.pivotX,
            this.mJoystick.y = this.mArrowPad.pivotY,
            this.mCurPos.setValue(this.mArrowPad.x, this.mArrowPad.y, 0),
            i.stage.event(s.GAMEPAD_DIRECTION_UPDATE, [0, 0, 1])
        }
        onTouchMove() {
            this.mNewPos.setValue(i.stage.mouseX, i.stage.mouseY, 0),
            i.stage.event(s.GAMEPAD_DIRECTION_UPDATE, [this.mNewPos.x - this.mCurPos.x, this.mNewPos.y - this.mCurPos.y, 1]);
            var t = i.Vector3.distance(this.mCurPos, this.mNewPos);
            t < this.mMaxDist ? (this.mJoystick.x = this.mNewPos.x - this.mCurPos.x + this.mArrowPad.pivotX,
            this.mJoystick.y = this.mNewPos.y - this.mCurPos.y + this.mArrowPad.pivotY) : (this.mArrowPad.x += (this.mNewPos.x - this.mCurPos.x) * (1 - this.mMaxDist / t),
            this.mArrowPad.y += (this.mNewPos.y - this.mCurPos.y) * (1 - this.mMaxDist / t),
            this.mJoystick.x = (this.mNewPos.x - this.mCurPos.x) * this.mMaxDist / t + this.mArrowPad.pivotX,
            this.mJoystick.y = (this.mNewPos.y - this.mCurPos.y) * this.mMaxDist / t + this.mArrowPad.pivotY,
            this.mCurPos.setValue(this.mArrowPad.x, this.mArrowPad.y, 0))
        }
        onTouchRelease() {
            this.mArrowPad.alpha = 0,
            i.stage.event(s.GAMEPAD_DIRECTION_UPDATE, [0, 0, 0])
        }
    }
    class O extends i.Script {
        constructor() {
            super(),
            this.joystickCtrl = new D,
            this.touchCtrl = new T
        }
        onAwake() {
            this.joystickCtrl.init(),
            this.touchCtrl.init(this.owner)
        }
        onDestroy() {
            this.joystickCtrl.release(),
            this.touchCtrl.release()
        }
        onUpdate() {
            this.joystickCtrl.update()
        }
    }
    i.ClassUtils.regClass("fc.plugin.GameCtrlPad", O),
    t.ObjectPool = d,
    t.GameObj = c,
    t.BaseView = m,
    t.Effect3d = u,
    t.Collision3dListener = g,
    t.Trigger3dListener = f,
    t.AnimEventListener = p,
    t.AnimStateListener = I,
    t.TextureCamera = w,
    t.SceneLoopMode = e,
    t.LoopScene = class extends i.Script3D {
        constructor() {
            super(),
            this.mSubScenes = [],
            this.mLoopMode = e.Static,
            this.mInterval = 0,
            this.mIncDist = 0,
            this.mInitialized = !1,
            this.mLoopThreshold = 0,
            this.mPassedDist = 0
        }
        setLoopMode(t) {
            this.mLoopMode = t
        }
        setLoopThreshold(t) {
            this.mLoopThreshold = t
        }
        reset() {
            this.mPassedDist = 0;
            for (let t = 0; t < this.mSubScenes.length; t++)
                this.mSubScenes[t].transform.localPositionZ = (t - 1) * this.mInterval
        }
        updateScene(t) {
            if (this.mInitialized && t)
                if (this.mLoopMode == e.Static)
                    if (t > 0)
                        for (let i = this.mSubScenes.length - 1; i >= 0; i--) {
                            const e = this.mSubScenes[i];
                            e.transform.localPositionZ - t < -this.mLoopThreshold ? (e.transform.localPositionZ += this.mIncDist - t,
                            this.mSubScenes.splice(i, 1),
                            this.mSubScenes.push(e)) : e.transform.localPositionZ -= t
                        }
                    else
                        for (let i = 0; i < this.mSubScenes.length; i++) {
                            const e = this.mSubScenes[i];
                            e.transform.localPositionZ - t > this.mIncDist - this.mLoopThreshold ? (e.transform.localPositionZ -= this.mIncDist + t,
                            this.mSubScenes.splice(i, 1),
                            this.mSubScenes.unshift(e)) : e.transform.localPositionZ -= t
                        }
                else if (this.mPassedDist += t,
                t > 0)
                    for (let t = this.mSubScenes.length - 1; t >= 0; t--) {
                        const i = this.mSubScenes[t];
                        this.mPassedDist - i.transform.localPositionZ > this.mLoopThreshold && (i.transform.localPositionZ += this.mIncDist,
                        this.mSubScenes.splice(t, 1),
                        this.mSubScenes.push(i))
                    }
                else
                    for (let t = 0; t < this.mSubScenes.length; t++) {
                        const i = this.mSubScenes[t];
                        i.transform.localPositionZ - this.mPassedDist > this.mIncDist - this.mLoopThreshold && (i.transform.localPositionZ -= this.mIncDist,
                        this.mSubScenes.splice(t, 1),
                        this.mSubScenes.unshift(i))
                    }
        }
        onAwake() {
            for (let t = 0; t < this.owner.numChildren; t++) {
                const i = this.owner.getChildAt(t);
                this.mSubScenes.push(i)
            }
            this.mSubScenes.length <= 2 ? console.warn("LoopScene:", "sub scenes num less or equal 2") : (this.mInitialized = !0,
            this.mInterval = this.mSubScenes[1].transform.localPositionZ - this.mSubScenes[0].transform.localPositionZ,
            this.mIncDist = (this.mSubScenes.length - 1) * this.mInterval,
            this.mLoopThreshold = this.mInterval)
        }
        onDestroy() {}
    }
    ,
    t.LoopBoard = class extends i.Script3D {
        constructor() {
            super(),
            this.mMaterial = null,
            this.mScale = 1
        }
        reset() {
            this.mMaterial && (this.mMaterial.tilingOffsetZ = 0)
        }
        setMoveScale(t) {
            t && (this.mScale = t)
        }
        updateBoard(t) {
            this.mMaterial && (this.mMaterial.tilingOffsetZ += t * this.mScale)
        }
        onAwake() {
            this.mMaterial = this.owner.meshRenderer.sharedMaterial
        }
        onDestroy() {
            this.mMaterial = null
        }
    }
    ,
    t.BannerCtrl = E,
    t.BlockAdCtrl = y,
    t.AdditiveUICtrl = x,
    t.UIJoystickCtrl = V,
    t.GameCtrlPad = O
}(window.fc.plugin, Laya);

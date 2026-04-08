
class FillImage extends Laya.Sprite {
    constructor() {
        super();
        this._scaleByTile = false;
        this._scale9Grid = null;
        this._skin = "";
        /**
         * 是否需要构建
         */
        this._needRebuild = 0;
        /**
         * 轴心
         */
        this._fillOrigin = 0;
        /**
         * 填充进度  0-1;
         */
        this._fillAmount = 0;
        /**
         * 是否顺时针
         */
        this._fillClockwise = true;
        this._mask = null;
        this._sprite = null;
  

        this.mouseEnabled = false;
        /**
         * 填充方式
         * Horizontal 1
         * Vertical 2
         * Radial90 3
         * Radial180 4
         * Radial360 5
         */
        this.fillMethod = 1;
    
    }
    get fillMethod() {
        return this._fillMethod;
    }
    set fillMethod(value) {
        if (this._fillMethod != value) {
            this._fillMethod = value;
            if (this._fillMethod != 0) {
                if (!this._mask) {
                    this._mask = new Laya.Sprite();
                    this._mask.width = this.width;
                    this._mask.height = this.height;
                    this._mask.mouseEnabled = false;
                }
                this.mask = this._mask;
                this.markChanged(2);
            }
            else if (this.mask) {
                this._mask.graphics.clear();
                this.mask = null;
            }
        }
    }
    get fillOrigin() {
        return this._fillOrigin;
    }
    set fillOrigin(value) {
        if (this._fillOrigin != value) {
            this._fillOrigin = value;
            if (this._fillMethod != 0)
                this.markChanged(2);
        }
    }
    get fillClockwise() {
        return this._fillClockwise;
    }
    set fillClockwise(value) {
        if (this._fillClockwise != value) {
            this._fillClockwise = value;
            if (this._fillMethod != 0)
                this.markChanged(2);
        }
    }
    get fillAmount() {
        return this._fillAmount;
    }
    set fillAmount(value) {
        if (this._fillAmount != value) {
            this._fillAmount = value;
            if (this._fillMethod != 0)
                this.markChanged(2);
        }
    }
    get skin() {
        return this._skin;
    }
    set skin(value) {
        if (this._skin != value) {
            this._skin = value;
            if (value) {
                var source = Laya.Loader.getRes(value);
                if (source) {
                    this.texture = source;
                }
                else
                    Laya.loader.load(this._skin, Laya.Handler.create(this, (source) => {
                        this.texture = source;
                    }));
            }
            else {
                this.texture = null;
            }
        }
    }
    get texture() {
        return this._source;
    }
    set texture(value) {
        if (this._source != value) {
            this._source = value;
            if (this["_width"] == 0) {
                if (this._source)
                    this.size(this._source.width, this._source.height);
                else
                    this.size(0, 0);
            }
            this.repaint();
            this.markChanged(1);
        }
    }
    markChanged(flag) {
        if (!this._needRebuild) {
            this._needRebuild = flag;
            Laya.timer.callLater(this, this.rebuild);
        }
        else
            this._needRebuild |= flag;
    }
    rebuild() {
        if ((this._needRebuild & 1) != 0)
            this.doDraw();
        if ((this._needRebuild & 2) != 0 && this._fillMethod != 0)
            this.doFill();
        this._needRebuild = 0;
    }
    doFill() {
        var w = this.width;
        var h = this.height;
        var g = this._mask.graphics;
        g.clear();
        if (w == 0 || h == 0)
            return;
        var points = this.fillHorizontal(w, h, this._fillOrigin, this._fillAmount);
        if (points == null) {
            //不知道为什么，不这样操作一下空白的遮罩不能生效
            this.mask = null;
            this.mask = this._mask;
            return;
        }
        g.drawPoly(0, 0, points, "#FFFFFF");
    }
    fillHorizontal(w, h, origin, amount) {
        if (amount == 0)return null;
        var w2 = w * amount;
        if (origin == 0 || origin == 2)
            return [0, 0, w2, 0, w2, h, 0, h];
        else
            return [w, 0, w, h, w - w2, h, w - w2, 0];
    }
    doDraw() {
        var w = this["_width"];
        var h = this["_height"];
        var g = this.graphics;
        var tex = this._source;
        g.clear();
        if (tex == null || w == 0 || h == 0) {
            return;
        }
        if (this._scaleByTile) {
            g.fillTexture(tex, 0, 0, w, h);
        }
        else if (this._scale9Grid != null) {
            if (!this._sizeGrid) {
                var tw = tex.width;
                var th = tex.height;
                var left = this._scale9Grid.x;
                var right = Math.max(tw - this._scale9Grid.right, 0);
                var top = this._scale9Grid.y;
                var bottom = Math.max(th - this._scale9Grid.bottom, 0);
                this._sizeGrid = [top, right, bottom, left];
            }
            g.draw9Grid(tex, 0, 0, w, h, this._sizeGrid);
        }
        else {
            g.drawImage(tex, 0, 0, w, h);
        }
    }
}

Laya.FillImage =FillImage;
Laya.ClassUtils.regClass("Laya.FillImage", FillImage);

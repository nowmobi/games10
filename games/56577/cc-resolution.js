window.resolution = (function (exports) {
    class Resolution {
        constructor() {
            this.scaleX = 1;
            this.scaleY = 1;
            this.loadNum = 0;
            this._width = 0;
            this._height = 0;
        }

        init(designWidth, designHeight, cb = new Function()) {
            console.error("resolutionInit", designWidth, designHeight);
            this.designWidth = designWidth / 2;
            this.designHeight = designHeight / 2;
            this.container = document.querySelector("#Game");
            const userAgent = window.navigator.userAgent;
            this.onMobile = userAgent.indexOf("Mobile") > -1;
            this.onSafari = userAgent.indexOf("Safari") > -1;
            window.addEventListener("resize", () => {
                this.resize();
            });
            window.addEventListener("orientationchange", (e) => {
                this.resize();
            });
            setTimeout(() => {
                this.resize();
                cb && cb();
            }, 0.1e3);

        }

        get width() {
            return this._width;
        }
        get height() {
            return this._height;
        }


        get clientWidth() {
            return window.innerWidth || document.body.clientWidth;
        }
        get clientHeight() {
            return window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;
        }

        resize() {
            console.error("resize");
            var scaleX = this.clientWidth / this.designWidth;
            var scaleY = this.clientHeight / this.designHeight;
            var canvasWidth = this.designWidth;
            var canvasHeight = this.designHeight;
            var canvasStyle = this.container.style;
            scaleX = scaleY = Math.min(scaleX, scaleY);
            canvasWidth = Math.ceil(this.designWidth * scaleX);
            canvasHeight = Math.ceil(this.designHeight * scaleY);

            this._width = canvasWidth;
            this._height = canvasHeight;

            canvasStyle.width = canvasWidth + "px";
            canvasStyle.height = canvasHeight + "px";
            if (this.onMobile && this.onSafari && window.innerWidth > window.innerHeight && window.innerHeight != document.documentElement.clientHeight) {
                canvasStyle.marginTop = ((window.innerHeight - document.documentElement.clientHeight) / 2) + "px";
            } else {
                canvasStyle.marginTop = "0px";
            }
        }

    }
    return new Resolution();
}({}));






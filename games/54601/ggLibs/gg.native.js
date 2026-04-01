!function (e) {
  var t = {
    native: {
      postMsg: function (e, t, a) {
        return new Promise((n, o) => {
          let i = !1;
          let r = new Laya.HttpRequest();
          r.send(e, t, "post", "json", a);
          r.once(Laya.Event.COMPLETE, this, e => {
            i || (i = !0, n(e));
          });
          Laya.timer.once(3500, this, () => {
            i || (i = !0, o("请求超时!" + e));
          });
        });
      },
      loadRes: function (e) {
        return new Promise((t, a) => {
          Laya.loader.load(e, Laya.Handler.create(this, e => {
            t(e);
          }));
        });
      },
      eventMsg: function (e, t) {
        Laya.stage.event(e, t);
      },
      getSaveData: function (e) {
        return Laya.LocalStorage.getItem(e);
      },
      setSaveData: function (e, t) {
        return Laya.LocalStorage.setItem(e, t);
      }
    }
  };
  var a = "undefined" != typeof window ? window : global;
  a.gg = a.gg || {};
  a.gg.native = t.native;
}();
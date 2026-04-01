!function (e) {
  var n = {
    adapter: {
      init: function () {
        gg.platform.launchOptions = {};
        console.log("adapter初始化完成");
      },
      login: function (e) {
        e = e || {};
        return new Promise((n, o) => {
          if (null != e.testOpenId && e.testOpenId.length > 0) {
            var t = {
              cName: gg.platform.config.platform,
              gName: gg.platform.config.gameTag,
              userId: e.testOpenId,
              sVersion: 0
            };

            console.error("loginlogin")
            gg.native.postMsg(gg.platform.serverUrl + "/players/getSave", t).then(e => {

              console.error("getSave",e)

              200 == e.code ? n({
                openid: "1",
                serverTime: new Date().getTime(),
                sVersion: 0,
                pwd: "abc",
                fType: -1,
                isGm: !0,
                isWhite: !1,
                loginDay: 1,
                saveData: e.data
              }) : (console.log("login 调用失败", e.msg, e.data), o("a:" + e.msg));
            }).catch(e => {
              console.log("login 调用失败", e);
              o("b:" + e);
            });
          } else {
            n({
              openid: "1",
              serverTime: new Date().getTime(),
              sVersion: 0,
              pwd: "abc",
              fType: -1,
              isGm: !0,
              isWhite: !1,
              loginDay: 1
            });
          }
        });
      },
      refreshSession: function () {
        return new Promise((e, n) => {
          e(null);
        });
      },
      playVideo: function () {
        return new Promise((e, n) => {
          my.showReward({
            rewardComplete: () => {
              e(!0);
            },
            rewardDismissed: () => {
              e(false);
            }
          })
        });
      },
      loadSubPack: function (e, n) {
        return new Promise((e, n) => {
          e(!0);
        });
      },
      getSystemInfo: function () {
        return new Promise((e, n) => {
          n();
        });
      },
      restartProgram: function () {
        window.location.reload();
      }
    }
  };
  var o = "undefined" != typeof window ? window : global;
  o.gg = o.gg || {};
  o.gg.adapter = n.adapter;
}();
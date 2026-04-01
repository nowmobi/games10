!function (e) {
  var r;
  var a;
  var t;
  r = new Date().getTime();
  a = null;
  t = null;
  var g = {
    platform: {
      init: function () {
        return new Promise((e, r) => {
          gg.native.loadRes("config/gameCfg.json").then(r => {
            "string" == typeof r && (r = JSON.parse(r));
            gg.platform.config = r;
            gg.platform.loginDay = -1;
            gg.platform.videoNum = 0;
            gg.platform.serverTime = new Date().getTime();
            gg.adapter.init();
            console.log("platform 初始化完成");
            e();
          });
          null != t && (clearInterval(t), t = null);
          t = setInterval(() => {
            gg.platform.serverTime += 1e3;
          }, 1e3);
        });
      },
      login: function (e) {
        return gg.adapter.login ? new Promise((r, t) => {
          null != a && (clearInterval(a), a = null);
          gg.adapter.login(e).then(e => {
            gg.platform._userId = e.openid;
            gg.platform._pwd = e.pwd;
            gg.platform.isWhite = e.isWhite;
            gg.platform.isGm = e.isGm;
            gg.platform.isBan = !0 === e.isBan;
            gg.platform.loginDay = e.loginDay;
            gg.platform.videoNum = e.acvNum;
            gg.platform.sVersion = e.sVersion;
            gg.platform.serverTime = e.serverTime;
            if (gg.platform.isBan && !gg.platform.isWhite) {
              t("您的账号已被限制登录");
            } else {
              gg.platform.pointData("登录成功", {
                day: gg.platform.loginDay
              });
              let t = gg.native.getSaveData(gg.platform.config.gameTag + "@" + gg.platform._userId);
              null != t && "" != t && (t = JSON.parse(t), e.sVersion <= t.sVersion && (e.saveData = t.saveData));
              r(e);
              null != a && clearInterval(a);
              a = setInterval(gg.platform.refreshSession, 6e5);
              if (e.sVersion <= 3 && null != gg.platform.launchOptions.query && null != gg.platform.launchOptions.query.ggshareid) {
                let e = gg.platform.decryptUserId(gg.platform.launchOptions.query.ggshareid);
                gg.platform.userShare_upload(null, e);
              }
            }
          }).catch(e => {
            gg.platform.pointData("登录失败", {
              msg: e.substring(0, 10)
            });
            t(e);
          });
        }) : (console.log("login 在此平台不存在"), new Promise((e, r) => {
          r();
        }));
      },
      userSave_upload: function (e, a, t) {
        if (null == gg.platform._userId) {
          return new Promise((e, r) => {
            r("未登录");
          });
        }
        if ("1" != gg.platform._userId && (!0 === a || new Date().getTime() - r > 6e4)) {
          gg.platform.sVersion++;
          r = new Date().getTime();
          let a = {
            cName: gg.platform.config.platform,
            gName: gg.platform.config.gameTag,
            userId: gg.platform._userId,
            sVersion: gg.platform.sVersion,
            data: JSON.stringify(e)
          };
          gg.native.postMsg(gg.platform.serverUrl + "/players/save", a, ["Authorizationpwd", gg.platform._pwd]).then(e => {
            200 != e.code && gg.platform.restartProgram();
          }).catch(() => {
            t && gg.platform.restartProgram();
          });
        } else {
          gg.native.setSaveData(gg.platform.config.gameTag + "@" + gg.platform._userId, JSON.stringify({
            saveData: e,
            sVersion: gg.platform.sVersion
          }));
        }
        return new Promise((e, r) => {
          e({
            code: 200,
            msg: "success"
          });
        });
      },
      encryptUserId: function (e) {
        let r = [];
        for (let a = 0; a < e.length; a++) {
          r.push(e.charAt(a));
        }
        r = r.reverse();
        for (let e = 0, a = Math.floor(r.length / 2); e < a; e++) {
          let t = r[e];
          r[e] = r[e + a];
          r[e + a] = t;
        }
        for (let e = 0; e < r.length - 2; e += 3) {
          let a = r[e];
          let t = r[e + 1];
          let g = r[e + 2];
          e % 2 == 0 ? (r[e] = t, r[e + 1] = g, r[e + 2] = a) : (r[e] = a, r[e + 1] = g, r[e + 2] = t);
        }
        let a = "";
        for (let e = 0; e < r.length; e++) {
          a += r[e];
        }
        return a;
      },
      decryptUserId: function (e) {
        let r = [];
        for (let a = 0; a < e.length; a++) {
          r.push(e.charAt(a));
        }
        for (let e = 0; e < r.length - 2; e += 3) {
          let a = r[e];
          let t = r[e + 1];
          let g = r[e + 2];
          e % 2 == 0 ? (r[e] = g, r[e + 1] = a, r[e + 2] = t) : (r[e] = a, r[e + 1] = g, r[e + 2] = t);
        }
        for (let e = 0, a = Math.floor(r.length / 2); e < a; e++) {
          let t = r[e];
          r[e] = r[e + a];
          r[e + a] = t;
        }
        r = r.reverse();
        let a = "";
        for (let e = 0; e < r.length; e++) {
          a += r[e];
        }
        return a;
      },
      userCheat: function () {
        let e = {
          cName: gg.platform.config.platform,
          gName: gg.platform.config.gameTag,
          userId: gg.platform._userId
        };
        gg.native.postMsg(gg.platform.serverUrl + "/players/gameCheat", e, ["Authorizationpwd", gg.platform._pwd]).then(() => {
          gg.platform.restartProgram();
        }).catch(() => {});
      },
      gameRank_upload: function (e, r, a, t, g, o) {
        return new Promise((n, l) => {
          if (null == e || "" == e || "number" != typeof r || null == t || null == g) {
            console.log("排行榜---上传信息有误");
            return void l("排行榜---上传信息有误");
          }
          if (null == gg.platform._userId) {
            return void l("排行榜---用户未登录");
          }
          if (gg.platform.isWhite) {
            return void l("白名单不进入排行榜");
          }
          if (gg.platform.isBan) {
            return void l("封禁账号不进入排行榜");
          }
          null == o && (o = {});
          let i = {
            cName: gg.platform.config.platform,
            gName: gg.platform.config.gameTag,
            rName: e,
            userId: gg.platform._userId,
            score: r,
            cBefore: a,
            userName: t,
            userIcon: g,
            data: JSON.stringify(o)
          };
          gg.native.postMsg(gg.platform.serverUrl + "/gameRank/record", i, ["Authorizationpwd", gg.platform._pwd]).then(e => {
            200 == e.code ? n("成功") : l(e.msg);
          }).catch(e => {
            l(e);
          });
        });
      },
      gameRank_get: function (e) {
        return new Promise((r, a) => {
          ggRankData = gg.native.getSaveData("ggRankData_" + e);
          "string" == typeof ggRankData && ggRankData.length > 0 ? (ggRankData = JSON.parse(ggRankData), new Date().getTime() - ggRankData.saveTime > 6e4 && (ggRankData = null)) : ggRankData = null;
          if (null != ggRankData) {
            r(ggRankData.data);
          } else {
            let t = {
              cName: gg.platform.config.platform,
              gName: gg.platform.config.gameTag,
              rName: e,
              userId: gg.platform._userId
            };
            gg.native.postMsg(gg.platform.serverUrl + "/gameRank/get", t, ["Authorizationpwd", gg.platform._pwd]).then(t => {
              if (200 == t.code) {
                let a = {};
                a.data = t.data;
                a.saveTime = new Date().getTime();
                gg.native.setSaveData("ggRankData_" + e, JSON.stringify(a));
                r(t.data);
              } else {
                a(t.msg);
              }
            }).catch(e => {
              a(e);
            });
          }
        });
      },
      userShare_get: function () {
        return new Promise((e, r) => {
          let a = {
            cName: gg.platform.config.platform,
            gName: gg.platform.config.gameTag,
            userId: gg.platform._userId
          };
          gg.native.postMsg(gg.platform.serverUrl + "/players/getShareData", a, ["Authorizationpwd", gg.platform._pwd]).then(a => {
            200 == a.code ? e(a.data) : r(a.msg);
          }).catch(e => {
            r(e);
          });
        });
      },
      userShare_upload: function (e, r) {
        return new Promise((a, t) => {
          let g = {
            cName: gg.platform.config.platform,
            gName: gg.platform.config.gameTag,
            userId: gg.platform._userId,
            shareId_from: r,
            shareData: e
          };
          gg.native.postMsg(gg.platform.serverUrl + "/players/uploadShareData", g, ["Authorizationpwd", gg.platform._pwd]).then(e => {
            200 == e.code ? a(e.msg) : t(e.msg);
          }).catch(e => {
            t(e);
          });
        });
      },
      loadingSuccess: function () {
        gg.platform.pointData("加载成功", {
          day: gg.platform.loginDay
        });
      },
      refreshSession: function () {
        return gg.adapter.refreshSession ? gg.adapter.refreshSession() : (console.log("refreshSession 在此平台不存在"), new Promise((e, r) => {
          r();
        }));
      },
      getUserInfo: function () {
        return gg.adapter.getUserInfo ? gg.adapter.getUserInfo() : (console.log("getUserInfo 在此平台不存在"), new Promise((e, r) => {
          r();
        }));
      },
      getUserProfile: function () {
        return gg.adapter.getUserProfile ? gg.adapter.getUserProfile() : (console.log("getUserProfile 在此平台不存在"), new Promise((e, r) => {
          r();
        }));
      },
      playVideo: function (e) {
        return gg.adapter.playVideo ? gg.adapter.playVideo(e) : (
          console.log("playVideo 在此平台不存在"), new Promise((e, r) => {
          r();
        }));
      },
      shareAppMessage: function (e) {
        return null == gg.platform._userId ? new Promise((e, r) => {
          r("未登录");
        }) : (null == (e = e || {}).query ? e.query = "ggshareid=" + gg.platform.encryptUserId(gg.platform._userId) : e.query += "&ggshareid=" + gg.platform.encryptUserId(gg.platform._userId), gg.adapter.shareAppMessage ? gg.adapter.shareAppMessage(e) : (console.log("shareAppMessage 在此平台不存在"), new Promise((e, r) => {
          r();
        })));
      },
      vibrate: function (e) {
        if (gg.adapter.vibrate) {
          return gg.adapter.vibrate(e);
        }
      },
      previewImage: function (e) {
        if (gg.adapter.previewImage) {
          return gg.adapter.previewImage(e);
        }
      },
      recorder_start: function () {
        if (gg.adapter.recorder_start) {
          return gg.adapter.recorder_start();
        }
      },
      recorder_stop: function () {
        if (gg.adapter.recorder_stop) {
          return gg.adapter.recorder_stop();
        }
      },
      recorder_share: function () {
        if (gg.adapter.recorder_share) {
          return gg.adapter.recorder_share();
        }
      },
      pointData: function (e, r) {
        if (!gg.platform.isBan && !gg.platform.isWhite) {
          null != r && "object" == typeof r && (r = JSON.stringify(r));
          return gg.adapter.pointData ? gg.adapter.pointData(e, r) : void 0;
        }
      },
      loadSubPack: function (e, r) {
        if (gg.adapter.loadSubPack) {
          return gg.adapter.loadSubPack(e, r);
        }
      },
      getSystemInfo: function () {
        if (gg.adapter.getSystemInfo) {
          return gg.adapter.getSystemInfo();
        }
      },
      joinGroup: function (e) {
        if (gg.adapter.joinGroup) {
          return gg.adapter.joinGroup(e);
        }
      },
      setClipboardData: function (e) {
        if (gg.adapter.setClipboardData) {
          return gg.adapter.setClipboardData(e);
        }
      },
      checkShortcut: function () {
        return gg.adapter.checkShortcut ? gg.adapter.checkShortcut() : new Promise((e, r) => {
          r();
        });
      },
      addShortcut: function () {
        return gg.adapter.addShortcut ? gg.adapter.addShortcut() : new Promise((e, r) => {
          r();
        });
      },
      openAwemeUserProfile: function () {
        return gg.adapter.openAwemeUserProfile ? gg.adapter.openAwemeUserProfile() : new Promise((e, r) => {
          r();
        });
      },
      checkScene: function (e) {
        return gg.adapter.checkScene ? gg.adapter.checkScene(e) : new Promise((e, r) => {
          r();
        });
      },
      navigateToScene: function (e) {
        return gg.adapter.navigateToScene ? gg.adapter.navigateToScene(e) : new Promise((e, r) => {
          r();
        });
      },
      restartProgram: function () {
        if (gg.adapter.restartProgram) {
          return gg.adapter.restartProgram();
        }
      },
      qf_addEventToSdk: function (e, r) {
        if (gg.adapter.qf_addEventToSdk) {
          return gg.adapter.qf_addEventToSdk(e, r);
        }
      },
      qf_uploadRoleInfo: function (e, r, a) {
        if (gg.adapter.qf_uploadRoleInfo) {
          return gg.adapter.qf_uploadRoleInfo(e, r, a);
        }
      }
    }
  };
  var o = "undefined" != typeof window ? window : global;
  o.gg = o.gg || {};
  o.gg.platform = g.platform;
  o.gg.platform.serverUrl = "https://www.greatgood666.com";
}();
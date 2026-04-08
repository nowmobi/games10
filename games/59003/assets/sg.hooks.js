var SG_Hooks = {
    debug: true,

    getLanguage: function(supportedLanguages) {
        return SG.initLangs(supportedLanguages);
    },

    start: function() {
        SG_Hooks.debug && console.log('game started');
        SG.trigger({
            type: 'start'
        });
        //gdsdk.showAd();

        ysdk.adv.showFullscreenAdv({
            callbacks: {
                onClose: function(wasShown) {
                    // some action after close
                },
                onError: function(error) {
                    // some action on error
                }
            }
        })
	console.log("jjjj")
    },

    levelUp: function(level, score, callback) {
        SG_Hooks.debug && console.log('level up:' + level + '/' + score);
        SG.trigger({
            type: 'levelUp',
            level: level,
            lastLevelScore: score
        }, callback);
        // updateShare(level+1,score); 
        // Play68.setRankingLevelScoreDesc(level+1,score);
        console.log("poioioip")

        if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
            sdk.showBanner();
        }
      
    },

    gameOver: function(level, score, callback) {
        SG_Hooks.debug && console.log('game over:' + level + '/' + score);
        SG.trigger({
            type: 'gameOver',
            score: score
        }, callback);
        console.log("poppp")
    },

    gameCompleted: function(score, callback) {
        SG_Hooks.debug && console.log('game completed:' + score);
        SG.trigger({
            type: 'gameCompleted',
            score: score
        }, callback);
        console.log("pojp")
    },

    gamePause: function(state, callback) { // state: on|off
        SG_Hooks.debug && console.log('game pause:' + state);
        SG.trigger({
            type: 'gamePause',
            state: state
        }, callback);
    },

    gameRestart: function(callback) {
        SG_Hooks.debug && console.log('game restart:');
        SG.trigger({
            type: 'gameRestart'
        }, callback);
        // gdsdk.showAd();
    },

    selectMainMenu: function(callback) {
        SG_Hooks.debug && console.log('selectMainMenu:');
        SG.trigger({
            type: 'selectMainMenu'
        }, callback);
		console.log("tyopp")
    },

    selectLevel: function(level, callback) {
        SG_Hooks.debug && console.log('selectLevel:' + level);
        SG.trigger({
            type: 'selectLevel',
            level: level
        }, callback);
    },

    setSound: function(state, callback) { // state: on|off
        SG_Hooks.debug && console.log('setSound:' + state);
        SG.trigger({
            type: 'gameCompleted',
            state: state
        }, callback);
    },

    setOrientationHandler: function(f) {
        SG.setOrientationHandler(f);
    },

    setResizeHandler: function(f) {
        SG.setResizeHandler(f);
    }
};
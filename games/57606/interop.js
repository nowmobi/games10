var advcb = null;

function onGPInit(gp){
	
	window.share = function(){
		gp.socials.share({
    	text: "This is the scariest horror movie I've ever played. Do you want to be really scared? This way for you!"
		});
	};
	
  if(gp != null){
	  gp.ads.on('fullscreen:close', (success) => {
		  if(advcb != null)
			advcb.onClose();
	  });
	  
	  gp.ads.on('rewarded:close', (success) => {
		  if(advcb != null){
				advcb.onRewarded();
		  cb.onClose();}
      });
      // Получена награда
      gp.ads.on('rewarded:reward', () => {});
  }
	
  window.ysdk = {adv: {
    showFullscreenAdv: function(info){

      const cb = info.callbacks;

      if(gp == null){
        cb.onClose();
        return;
      }
	  
	  advcb = cb;

      gp.ads.showFullscreen();			
    },
    showRewardedVideo: function(info){
      const cb = info.callbacks;

      if(gp == null){
        cb.onRewarded();
        cb.onClose();
        return;
      }
	  
	  advcb = cb;

      gp.ads.showRewardedVideo();      
    },
    hideBannerAdv: function(){
      if(gp != null)gp.ads.closeSticky();
    },
    showBannerAdv: function(){
      if(gp != null)gp.ads.showSticky();
    }
  }};
  window.isMobile = true;
  if(isMobile)  unityInstance.SendMessage('Main Camera', 'isMobile');
  window.lang = 'en';
  unityInstance.SendMessage('Main Camera', 'SetLang', lang);
  window.lb = null;
  window.ghost = $('#ghost');
  storage();
  unityInstance.SendMessage('Main Camera', 'SetRawSave', JSON.stringify(storage.getraw()));
  unityInstance.SendMessage('Main Camera', 'LoadComplite');
  $('canvas').css({'width':'100%','height':'100%'});
}

function InitSDK(){

  var apiurl = 'https://gamepush.com/sdk/gamepush.js?projectId=17271&publicToken=zGnl2W3KMtoppkOXaqLybJFTKYTEmXjw&callback=onGPInit';
  var initFunc = function(){
    console.log("gp init");
  }

  var t = document.getElementsByTagName('script')[0];
  var s = document.createElement('script');
  s.src = apiurl;
  s.async = true;
  t.parentNode.insertBefore(s, t);
  s.onload = initFunc;

  s.onerror = function() {
    onGPInit(null);
  }
}

function screem(){
  ghost.show();
  setTimeout(function(){
    unityInstance.SendMessage('Player', 'screem_end');
    ghost.hide();
  },1500);
}

function PushSave(json){
  const js = JSON.parse(json);
  for(key in js){
    storage.set(key, js[key]);
  }
  storage.push();
}

var advscr = false;

function showInterestial(){
  yabanner(() =>{
    unityInstance.SendMessage('Finish', 'BannerEnd');
  });
}

function playInterestial(){
	yabanner(() =>{
		unityInstance.SendMessage('Player', 'playInterestialCallback');
	});
}

function yabanner(end){
	if(advscr) return;
 advscr = true;
 unityInstance.SendMessage('Player', 'PreBanner');
  ysdk.adv.showFullscreenAdv({callbacks: {onClose: function(){
    unityInstance.SendMessage('Player', 'PostBanner');
	  end();
	  advscr = false;
	}}});
}

function ShowReward() {
  advscr = true;
  unityInstance.SendMessage('Player', 'PreBanner');
  ysdk.adv.showRewardedVideo({
    callbacks: {
      onClose: function() {
        advscr = false;
        unityInstance.SendMessage('Player', 'OnRewardEnd'); // Post banner автоматически сработает
      },
      onRewarded: function(){

      }
    }
  });
}

document.addEventListener("visibilitychange", function() {
	  if (document.visibilityState === "hidden") {
      unityInstance.SendMessage('Player', 'PreBanner');
    } else if(!advscr) {
      unityInstance.SendMessage('Player', 'PostBanner');
    }
});

function WorldLoaded() {
}

function promptStars(){
  ysdk.feedback.requestReview().then(({ feedbackSent }) => {
    if(feedbackSent){
      unityInstance.SendMessage('Player', 'OnFeedbackComplite');
    }
  });
}

function ScoreToLead(score){

}

function mbshowadv(){
  if(mbshowadv.allowshowadv){
    showAdvOverlay(function(){
      setTimeout(function(){
        mbshowadv.allowshowadv = true;
      }, 130 * 1000);
    });
    mbshowadv.allowshowadv = false;
  }
}

mbshowadv.allowshowadv = true;

function showAdvOverlay(callback){
  __lockplay__ = true;
  const overlay = getOverlay().css({'font-size':'6vh', 'color':'white'});

  overlay.append(
    $('<div>').text(lang=='ru' ? 'Сейчас будет реклама': 'Now there will be advertising'),
    $('<div class="advtimer">').text('3')
  );

  unityInstance.SendMessage('Player', 'PreBanner');

  var n = 3;

  var interval = setInterval(function(){
    n--;
    $('.advtimer').text(n);
    if(n == 0){
      clearInterval(interval);
      yabanner(function(){
        ayouReadyScreen(overlay, function(){
          $('.overlay').remove();
          __lockplay__ = false;
          unityInstance.SendMessage('Player', 'PostBanner');
          callback();
        });
      });
    }
  },1000);

  overlay.append(overlay);
}

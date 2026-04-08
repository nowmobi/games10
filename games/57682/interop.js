function gpinit(gp){
  if(gp != null){
		gp.ads.on('fullscreen:close', (success) => {
			if(window.adscb == null) return;
			window.adscb.onClose();
		});

		gp.ads.on('rewarded:close', (success) => {
			if(window.adscb == null) return;
			window.adscb.onRewarded();
			window.adscb.onClose();
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

		window.adscb = cb;

		gp.ads.showFullscreen();
	},
	showRewardedVideo: function(info){
		const cb = info.callbacks;

		if(gp == null){
			cb.onRewarded();
			cb.onClose();
			return;
		}

		window.adscb = cb;
		gp.ads.showRewardedVideo();
		// Показать rewarded video, возвращает промис
	}}};

  window.isMobile = true;
  unityInstance.SendMessage('Main Camera', 'isMobile');
  window.lang = 'en';
  unityInstance.SendMessage('Main Camera', 'SetLang', 'en');
  window.lb = null;

  document.addEventListener("visibilitychange", OnVisibleChanged);
  storage(() =>{
    unityInstance.SendMessage('Main Camera', 'SetRawSave', JSON.stringify(storage.getraw()));
    $('canvas').css({'width':'100%','height':'100%'});
	   unityInstance.SendMessage('Main Camera', 'LoadComplite');
  });
}

function InitSDK(){
  const apiurl = 'https://gamepush.com/sdk/gamepush.js?projectId=17179&publicToken=U4OqkGt0eKgITkS3n4mzjE04rdbn6We0&callback=gpinit';
  const initFunc = function(){
	console.log("gp init");
  }

  const t = document.getElementsByTagName('script')[0];
  const s = document.createElement('script');
  s.src = apiurl;
  s.async = true;
  t.parentNode.insertBefore(s, t);
  s.onload = initFunc;

  s.onerror = function() {
		gpinit(null);
  }
}

function OnVisibleChanged(){
	if (document.visibilityState === "hidden") {
      unityInstance.SendMessage('Interop', 'PreBanner');
    } else if(!advscr) {
      unityInstance.SendMessage('Interop', 'PostBanner');
    }
}

function GamePlayStart(){

}

function GamePlayStop(){

}

var lbc = null;
var locksl = false;
function showleads(){

  if(locksl)return;
  locksl=true;

  if(window.lb != null){

    if(lbc != null){
      showlb(lbc);
      return;
    }

    lb.getLeaderboardEntries('lead', {quantityTop:50}).then(result => {
      lbc = result;
      showlb(lbc);
      setTimeout(()=>{
        window.lbc = null;
      },16000);
    });
  } else {
  locksl = false;
  }
}

function showlb(result){
  const lb_data = $('<div class="leaderbord_data_rows">');
  const players = result.entries;

  if(players.length == 0){
    lb_data.html(lang == 'ru' ? "<p><center>Пусто</center></p>" : "<p><center>Empty</center></p>")
  }

  for(let i = 0; i < players.length; i++){
    const p = players[i];

    const avatar = p.player.getAvatarSrc();
    let nick = p.player.publicName;
    if(nick == ''){
      nick = lang == 'ru' ? "Аноним" : "Anonymous";
    }
    const score = p.score;

    lb_data.append(getRow([
      getColumn('<span>№'+parseInt(i+1)+'</span>'),
      getColumn("<img src='"+avatar+"'>"),
      getColumn('<span>'+nick+'</span>'),
      getColumn('<span>'+score+'</span>')
    ]));
  }

  const o = getOverlay();
  o.append(
    $('<div class="leaderbords">').append(getCurlb()),
    $('<p>').append(
      $('<button>').text(lang == 'ru' ? "Назад" : "Back").click(function(){
        $('.overlay').remove();
        locksl = false;
        unityInstance.SendMessage('Interop', 'PostBanner');
      })
    )
  ).hide().show(200);

  unityInstance.SendMessage('Interop', 'PreBanner');

  function getCurlb(){
    return $('<div class="leaderbord">').append([
      $('<h3>').text(lang == 'ru' ? 'Лучшие игроки' : 'The best players'),
      $('<div class="leaderbord_data">').append(lb_data)
    ]);
  }

  function getRow(data){
    return $('<div class="row">').append(data);
  }

  function getColumn(data){
    return $('<div class="col">').append(data);
  }
}

function getOverlay(){
  const overlay = $('<div class="overlay">').css({
    'position': 'fixed',
    'top': 0,
    'left': 0,
    'color':'white',
    'width': '100%',
    'height': '100%',
    'background': 'rgba(0,0,0,0.9)',
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'z-index': 9999
  });

  const content = $('<div>').css({'text-align':'center'});//блок content, чтобы центрировать

  $('body').append(overlay.append(content));

  return content;
}

function PushSave(json){
  const js = JSON.parse(json);
  for(key in js){
    storage.set(key, js[key]);
  }
  storage.push();
}

var advscr = false;

function yabanner(){
  if(advscr)return;
 advscr = true;
 unityInstance.SendMessage('Interop', 'PreBanner');
  ysdk.adv.showFullscreenAdv({callbacks: {onClose: function(){
    unityInstance.SendMessage('Interop', 'PostBanner');
	advscr = false;
	}}});
}

function yarbanner() {
  if(advscr)return;
  advscr = true;
  var RWW = false;
  unityInstance.SendMessage('Interop', 'PreBanner');
  ysdk.adv.showRewardedVideo({
    callbacks: {
      onClose: function() {
        advscr = false;
        unityInstance.SendMessage('Interop', 'PostBanner');
		if(RWW)unityInstance.SendMessage('Interop', 'REWARDCOMPLITE');
      },
      onRewarded: function(){
		RWW = true;
      }
    }
  });
}


function WorldLoaded() {
}

function ScoreToLead(score){	
}

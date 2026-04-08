class DateTimeClock {
  constructor(seconds) {
    this.inner = new Date();
    this.seconds = seconds;
  }

  check() {
    const now = new Date();
    const x = (now - this.inner) / 1000 > this.seconds;

    if (x) this.inner = now;

    return x;
  }

  checkNoUpdate() {
    return (new Date() - this.inner) / 1000 > this.seconds;
  }

  getSecondsNoUpdate() {
    return this.seconds - (new Date() - this.inner) / 1000;
  }

  getProc()
  {
    const tmp = (new Date() - this.inner) / (this.seconds * 1000);

    return tmp >= 1 ? 1 : tmp;
  }

  checkWithDeltaSeconds() {
    const now = new Date();
    const deltaSeconds = (now - this.inner) / 1000;

    const x = deltaSeconds > this.seconds;

    if (x) this.inner = now;

    return [x, deltaSeconds];
  }

  checkWithPercentage() {
    const now = new Date();
    const percentage = (now - this.inner) / (this.seconds * 1000);

    const x = percentage >= 1;

    if (x) this.inner = now;

    return [x, percentage];
  }
}

function gpinit(gp){
const dtc123 = new DateTimeClock(15);
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

		if(gp == null || !dtc123.check()){
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

  storage(() =>{
    unityInstance.SendMessage('Main Camera', 'SetRawSave', JSON.stringify(storage.getraw()));    
    $('canvas').css({'width':'100%','height':'100%'});
	
	gp.ads.on('preloader:close', (success) => {
		unityInstance.SendMessage('Main Camera', 'LoadComplite');
	});
	gp.ads.showPreloader();
  });
}

function InitSDK(){
  const apiurl = 'https://gamepush.com/sdk/gamepush.js?projectId=15991&publicToken=8tHdDgscatNeN6T5HmBJw6La1QRZknzw&callback=gpinit';
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

function PushSave(json){
  const js = JSON.parse(json);
  for(key in js){
    storage.set(key, js[key]);
  }
  storage.push();
}
var advscr = false;

function showadv(){
  if(advscr) return;
  advscr = true;
  unityInstance.SendMessage('Main Camera', 'PreBanner');
   ysdk.adv.showFullscreenAdv({callbacks: {onClose: function(){
 	  advscr = false;
 	  unityInstance.SendMessage('Main Camera', 'advend');
    unityInstance.SendMessage('Main Camera', 'PostBanner');
 	}}});
}

function ShowReward() {
  advscr = true;
  unityInstance.SendMessage('Main Camera', 'PreBanner');
  ysdk.adv.showRewardedVideo({
    callbacks: {
      onClose: function() {
        advscr = false;
        unityInstance.SendMessage('Main Camera', 'advend');
        unityInstance.SendMessage('Main Camera', 'PostBanner');
      },
      onRewarded: function(){
        unityInstance.SendMessage('Main Camera', 'OnReward');
      }
    }
  });
}

document.addEventListener("visibilitychange", function() {
	  if (document.visibilityState === "hidden") {
      unityInstance.SendMessage('Main Camera', 'PreBanner');
    } else if(!advscr) {
      unityInstance.SendMessage('Main Camera', 'PostBanner');
    }
});

function WorldLoaded() {
		
}

function promptStars(){

}

function ScoreToLead(score){
}

var lbc = null, lbf = false;
function showleads(){

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
      $('<button class="button25">').text(lang == 'ru' ? "Назад" : "Back").click(function(){
        $('.jsoverlay').remove();
        lbf = false;
      })
    )
  ).hide().show(200);

  function getCurlb(){
    return $('<div class="leaderbord">').append([
      $('<h3 style="color:white">').text(lang == 'ru' ? 'Топ игроков по очкам' : 'Top player by score'),
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
  const overlay = $('<div class="jsoverlay">').css({
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

  const content = $('<div>').css({'text-align':'center'});
  $('body').append(overlay.append(content));
  return content;
}

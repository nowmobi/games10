


window.onload = function() {
	$('#game_preloader').fadeOut(1000)
	try {
		tech_core.init_sdk(function() {
			console.log(tech_core.game_loaded,   tech_core.sdk_ready)
			if (tech_core.game_loaded && tech_core.sdk_ready) {
				game_core.start_game();
			}
		});
	} catch (err) {
		
		console.log(err)
	}
	
	if (PLATFORM_TYPE != 'yandex') {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		    // код для мобильных устройств
		    tech_core.user_type = 'mobile';
		  } else {
		    tech_core.user_type = 'desktop';
		    // код для обычных устройств
		}
	}
	graph_core.resize_screen();
	graph_core.translate()
	console.log('сборка', build)
	tech_core.game_loaded = true;
	if (tech_core.game_loaded && tech_core.sdk_ready) {
		game_core.start_game();
	}
	//game_core.start_game();
}	





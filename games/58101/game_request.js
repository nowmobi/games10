
class GameRequest {
	constructor() {	
		this.game_data_exists = false;
		this.emitter = new Phaser.Events.EventEmitter();		
	}

	init() {	
		this.game_data_exists = true;
	}

	get_time(full = false) {
		if (full) return Date.now()
		else return Date.now() / 1000;
	}

	request(obj, on_complete) {
		let use_server = ('use_server' in loading_vars && loading_vars['use_server']);
		if (use_server) {
			// in case you have server logic 
		}
		else {
			this.local_request(obj, res => {
				this.update_user_data(res, on_complete);
			});
		}
	}

	update_user_data(res, on_complete) {
		let key;
		for (key in res)
			if (key in game_data['user_data'])
				game_data['user_data'][key] = res[key];
		
		this.save_user_data();
		on_complete(res);
			
	}

	save_user_data() {
		if (is_localhost) {
			localStorage.setItem(loading_vars['game_id'] + '_' + `user_data`, JSON.stringify(game_data['user_data']));
		}
		else if (loading_vars['net_id'] === 'y') {
			YAPI.setItem(loading_vars['game_id'] + '_' + `user_data`, JSON.stringify(game_data['user_data']));
		}
	}

	local_request(obj, on_complete) {
		if ('get_game_info' in obj) this.get_game_info_local(obj, on_complete);
		if ('level_complete' in obj) this.level_complete_local(obj, on_complete);
		if ('update_purchase' in obj) this.update_purchase_local(obj, on_complete);
		if ('set_options' in obj) this.set_options_local(obj, on_complete);
		if ('select_language' in obj) this.select_language_local(obj, on_complete);
	}

	select_language_local(obj, on_complete) {
		game_data['user_data']['lang'] = obj['lang'];
		on_complete({'success': true, 'lang': obj['lang']});
	}

	set_options_local(obj, on_complete) {
		game_data['user_data']['sound'] = obj['sound'];
		game_data['user_data']['music'] = obj['music'];
		on_complete({'success': true});
	}

	update_payments_obj(item_info) {
		let payments = game_data['user_data']['payments'];
		payments['total'] += 1;
	}

	update_purchase_local(obj, on_complete) {
		let item_info = obj['item_info'];
		if (item_info['id'] == 'remove_ad') {

		}

		this.update_payments_obj(obj['item_info']);
		on_complete({'success': true,
					'payments': game_data['user_data']['payments']
		});

	}

	level_complete_local(obj, on_complete) {
		let star_collected = obj['star_collected'];
		let level_id = obj['level_id'];
		let success = true;
		let levels_passed = game_data['user_data']['levels_passed'];
		let response = {};
		if (!((level_id - 1) in levels_passed && levels_passed[level_id - 1] === 1)) {
			if (star_collected) {
				levels_passed[level_id - 1] = 1;
				response['happy_moment'] = true;
			}
			else {
				levels_passed[level_id - 1] = 0;
			}
			
		}

		response['success'] = success;
		response['levels_passed'] = levels_passed;
		on_complete(response);
	}

	get_game_info_local(obj, on_complete) {
		if (is_localhost) {
			let saved_user_data = localStorage.getItem(loading_vars['game_id'] + '_' + `user_data`);
			if (saved_user_data && !('clear_storage' in game_data && game_data['clear_storage'])) {
				saved_user_data = JSON.parse(saved_user_data);
				if (saved_user_data) {
					game_data['new_user'] = false;
					game_data['user_data'] = saved_user_data;
					for (let key in local_user_data)
						if (!(key in saved_user_data)) 
							game_data['user_data'][key] = local_user_data[key];
				}
				else {
					game_data['new_user'] = true;
					game_data['user_data'] = local_user_data;
				}
			}
			else {
				game_data['new_user'] = true;
				game_data['user_data'] = local_user_data;
			}
		}
		else if (loading_vars['net_id'] === 'y') {
			let saved_user_data = YAPI.getItem(loading_vars['game_id'] + '_' + `user_data`);
			if (saved_user_data && !('clear_storage' in game_data && game_data['clear_storage'])) {
				saved_user_data = JSON.parse(saved_user_data);
				if (saved_user_data) {
					game_data['new_user'] = false;
					game_data['user_data'] = saved_user_data;
					for (let key in local_user_data)
						if (!(key in saved_user_data)) 
							game_data['user_data'][key] = local_user_data[key];
				}
				else {
					game_data['new_user'] = true;
					game_data['user_data'] = local_user_data;
				}
			}
			else {
				game_data['new_user'] = true;
				game_data['user_data'] = local_user_data;
			}
		}
		else {
			game_data['new_user'] = true;
			game_data['user_data'] = local_user_data;
		}
		

		let user_id;
		let curent_day_id = this.get_day_id();
		let new_user = ('new_user' in game_data && game_data['new_user']);
		if (!('user_id' in game_data['user_data'])) {								
			user_id = this.generate_user_id();				
			game_data['user_data']['user_id'] = user_id;
		}

		user_id = game_data['user_data']['user_id'];
		if (!('start_day_id' in game_data['user_data'])) game_data['user_data']['start_day_id'] = curent_day_id;

		if (new_user && game_data['new_lang']) game_data['user_data']['lang'] = game_data['new_lang'];
		
		if (!('session_id' in game_data['user_data'])) game_data['user_data']['session_id'] = 0;
		game_data['user_data']['session_id']++;
		let session_id = loading_vars['game_id'] + '_' + loading_vars['net_id'] + '_' + user_id + '_' + game_data['user_data']['session_id'];

		let ret_obj = {
			'success':true, 
			'session_id': session_id, 
			'user_id': user_id, 
			'day_id': curent_day_id, 
			'new_user': new_user,
			'platform_data': game_data,
			'user_data': game_data['user_data'],
		}
		
		game_data['last_request'] = 'get_game_info';
		on_complete(ret_obj);
	}
	//========================
	update_language() {

	}

	get_day_id() {
		return parseInt(new Date().getTime() / 86400000) - 17336;
	}

	generate_user_id() {
		let dt = new Date().getTime();
		let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			let r = (dt + Math.random()*16)%16 | 0;
			dt = Math.floor(dt/16);
			return (c=='x' ? r :(r&0x3|0x8)).toString(16);
		});
		return uuid;		
	}
	//========================
}

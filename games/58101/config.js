let game_data = {
    'clear_storage': false, // if set true the progress resets
    'test_ad': false, // if set false test ad overlay will no appear
    'urls': { // path urls object
		'audio': 'assets/audio/',
	},
    'graphics': {}, // object to save some generated graphics
    'styles': { // different styles used for the text
		'light_text': {fontSize: 30, color:'#fff', stroke: '#000', strokeThickness: 5},
		'title': { fontSize: 40, color:'#ffffff', stroke: '#000', strokeThickness: 3}
	},
    'ads': { // configuration of ads
        'interstitial': {
            'event_mult': {
                'level_lost': 1, 'level_win': 0.3,
                'level_start': 0, 'change_scene': 0
            }
		},
        'rewarded': {}
	},
    // how many tries given to certain puzzle type
    // if you want to set specific tries amount to specific level
    // set tries_allowed: {number} to a level
    'tries_allowed': {
        'crop': 3,
        'shadow': 3,
        'word': 3,
        'related': 3
    },
    // listing the starting and ending indexes of icons
    // this is needed to assign random icons to a level if necessary
    'emojies': {
        'animal': {
            'start_index': 0,
            'end_index': 115,
        },
        'flag': {
            'start_index': 0,
            'end_index': 264,
        },
        'food': {
            'start_index': 0,
            'end_index': 27,
        },
        'object': {
            'start_index': 0,
            'end_index': 340,
        },
        'people': {
            'start_index': 0,
            'end_index': 580,
        },
        'smile': {
            'start_index': 0,
            'end_index': 455,
        },
        'symbol': {
            'start_index': 0,
            'end_index': 216,
        },
        'travel': {
            'start_index': 0,
            'end_index': 220,
        },
    },
    'langs': ['en', 'fr', 'de', 'es', 'it'], // languages presented in the game
    'new_lang': 'en', // when an user opens game for a first time then english language will be set
    'shop': { // shop config
        'purchase': [ // purchase positions
            {'id': 'remove_ad', 'price': 3.99}
        ]
    },
    'demo_limit_level': 10,
    // user data object. If saved data exists then here it will be stored.
    // Otherwise, local_user_data will be stored here
    'user_data': {}
}

let local_user_data = {
    'sound': 1, // if 0 sound will be disabled
    'music': 1, // if 0 music will be disabled
    'levels_passed': [], // array to save progress
    // if 1 - passed with a star
    // if 0 - passed without a star
    // example
    // 'levels_passed': [1, 0, 1, 1, 1, 1, 1,1, 1, 1,1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1,1, 1, 1,1, 1, 1, 0, 1, 1 ],
    'payments': {'total': 0}, // payments info
    'lang': 'en', // select language
}

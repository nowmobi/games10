// перепроверить скейлы у типов пазлов +++
// поставить ограничения на значения в пазлах например related не больше 4 +++
// туториальные надписи +++
// допереводить фразы +++
// проверить не ломается ли дизайн если включить таймер +++
// удалять картинки из кеша +++
// level_failed подобрать грустное эмоджи +++
// поменять чуть цвета графики +++
// звуки на действия +++
// комменты для 6 типов уровней
let levels = [
	{
		id: 1,
		type: 'link',
		time: -1, // time parameter. If -1 is set then timer will be off

		// level items. There are 3 pairs in this level.
		// if you want you can remove or add more pairs
		items: [
			['flag/flag_230', 'travel/travel_172'], // pair 1
            ['flag/flag_193', 'travel/travel_220'], // pair 2
            ['flag/flag_15', 'travel/travel_166'] // pair 3
			// ['path1', 'path2'] // pair 4 example
		]
	},
	{
		id: 2,
		type: 'memory',
		time: 15, // time in seconds
		col: 3, // column amount
		row: 2, // row amount
		// 3 emojis that will be used in the level
		// if you want you can remove or add more pairs
		items: [
			'smile/smile_12',
            'smile/smile_13',
            'smile/smile_14'
		]
	},
	{
		id: 3,
		time: -1, // time parameter. If -1 is set then timer will be off
		type: 'word',
		// tries_allowed: 3, // allowed tries
		phrase_id: 'lion', // phrase_id will get corresponding value from language.xml
		col: 3, // column amount
		row: 3, // row amount
		// correct 2 items
		// if you want you can remove or add more items
		items_target: [
			'animal/animal_15',
			'object/object_99'
		],
		// extra items that will be used
		// If the number of items is not sufficient, random items will be used
		items_extra: [
			'animal/animal_82',
			'animal/animal_4',
			'travel/travel_10',
			'object/object_145'
		]
	},
	{
		id: 4,
		time: -1, // time parameter. If -1 is set then timer will be off
		type: 'related',
		// tries_allowed: 3, // allowed tries
		// there are 3 stages on this level
		// if you want you can remove or add more stages
		groups: [
			['food/food_3','food/food_4','food/food_8'], // group 1
			['smile/smile_373','smile/smile_382','smile/smile_344'], // group 2
			['smile/smile_12','smile/smile_441','smile/smile_444'] // group 3
		],
		related_items: [
			'food/food_10', // belongs to the 1 group
			'smile/smile_366', // belongs to the 2 group
			'smile/smile_439' // belongs to the 3 group
		]
	},
	{
		id: 5,
		time: -1, // time parameter. If -1 is set then timer will be off
		type: 'shadow',
		// tries_allowed: 3, // allowed tries
		// there are 3 shadow items on this level
		// if you want you can remove or add more items
		items: [
			'food/food_69', // 1 item
			'food/food_75', // 2 item
			'food/food_77' // 3 item
		]
	},
	{
		id: 6,
		time: -1, // time parameter. If -1 is set then timer will be off
		type: 'crop',
		// tries_allowed: 3, // allowed tries
		// crop type can be 2 types: vertical or horizontal
		crop_type: 'vertical', // horizontal

		// there are 3 crop items on this level
		// if you want you can remove or add more items
		items: [
			'smile/smile_12', // 1 item
			'smile/smile_13', // 2 item
			'smile/smile_14' // 3 item
		]
	},
	{
		id: 7,
		type: 'link',
		time: -1,
		items: [
			['animal/animal_65', 'food/food_60'],
            ['animal/animal_28', 'food/food_87'],
            ['animal/animal_105', 'food/food_90']
		]
	},
	{
		id: 8,
		type: 'memory',
		time: 15,
		col: 3,
		row: 4,
		items: [
			'food/food_95',
            'food/food_117',
            'food/food_76',
            'food/food_32',
            'food/food_8',
            'food/food_10',
		]
	},
	{
		id: 9,
		time: -1,
		type: 'word',
		phrase_id: 'iphone',
		col: 3,
		row: 4,
		items_target: [
			'food/food_8',
			'object/object_59'
		],
		items_extra: [
			'food/food_28',
			'food/food_10',
			'object/object_68',
			'object/object_42'
		]
	},
	{
		id: 10,
		time: -1,
		type: 'related',
		groups: [
			['food/food_69','food/food_75','food/food_77'],
			['object/object_181','object/object_178','object/object_176'],
			['travel/travel_122','travel/travel_125','travel/travel_137']
		],
		related_items: [
			'food/food_65',
			'object/object_180',
			'travel/travel_127'
		]
	},
	{
		id: 11,
		time: -1,
		type: 'shadow',
		items: [
			'nature/nature_16',
			'animal/animal_3',
			'travel/travel_4'

		]
	},
	{
		id: 12,
		time: -1,
		type: 'crop',
		crop_type: 'horizontal',
		items: [
			'travel/travel_154',
			'nature/nature_13',
			'smile/smile_32'
		]
	},
	{
		id: 13,
		type: 'link',
		time: -1,
		items: [
			['travel/travel_19', 'travel/travel_9'],
            ['animal/animal_29', 'animal/animal_32'],
            ['nature/nature_2', 'animal/animal_105']
		]
	},
	{
		id: 14,
		type: 'memory',
		time: 15,
		col: 3,
		row: 4,
		items: [
			'animal/animal_107',
            'animal/animal_99',
            'animal/animal_93',
            'animal/animal_81',
            'animal/animal_76',
            'animal/animal_74'
		]
	},
	{
		id: 15,
		time: -1,
		type: 'word',
		phrase_id: 'ninja_turtles',
		col: 3,
		row: 4,
		items_target: [
			'animal/animal_84',
			'object/object_164'
		],
		items_extra: [
			'nature/nature_14',
			'smile/smile_1',
			'smile/smile_31',
			'object/object_165'
		]
	},
	{
		id: 16,
		time: -1,
		type: 'related',
		groups: [
			['food/food_104','food/food_103','food/food_112'],
			['object/object_68','object/object_69','object/object_70'],
			['travel/travel_12','travel/travel_19','travel/travel_9']
		],
		related_items: [
			'food/food_105',
			'object/object_66',
			'travel/travel_1'
		]
	},
	{
		id: 17,
		time: -1,
		type: 'shadow',
		items: [
			'people/people_555',
			'people/people_548',
			'people/people_544'

		]
	},
	{
		id: 18,
		time: -1,
		type: 'crop',
		crop_type: 'vertical',
		items: [
			'people/people_4',
			'people/people_560',
			'people/people_563'
		]
	},
	{
		id: 19,
		type: 'link',
		time: -1,
		items: [
			['smile/smile_307', 'object/object_221'],
            ['smile/smile_13', 'travel/travel_33'],
            ['object/object_126', 'smile/smile_14']
		]
	},
	{
		id: 20,
		type: 'memory',
		time: 20,
		col: 4,
		row: 4,
		items: [
			'flag/flag_1',
            'flag/flag_240',
            'flag/flag_174',
			'flag/flag_178',
            'flag/flag_166',
			'flag/flag_167',
            'flag/flag_73',
            'flag/flag_158'
		]
	},
	{
		id: 21,
		time: -1,
		type: 'word',
		phrase_id: 'star_wars',
		col: 3,
		row: 4,
		items_target: [
			'travel/travel_29',
			'object/object_293'
		],
		items_extra: [
			'object/object_296',
			'object/object_273',
			'people/people_0',
			'object/object_290'
		]
	},
	{
		id: 22,
		time: -1,
		type: 'related',
		groups: [
			['animal/animal_107','animal/animal_106','animal/animal_105'],
			['nature/nature_5','nature/nature_10','nature/nature_8'],
			['food/food_46','food/food_47','food/food_50']
		],
		related_items: [
			'animal/animal_104',
			'nature/nature_7',
			'food/food_48'
		]
	},
	{
		id: 23,
		time: -1,
		type: 'shadow',
		items: [
			'food/food_44',
			'food/food_41',
			'food/food_20'

		]
	},
	{
		id: 24,
		time: -1,
		type: 'crop',
		crop_type: 'vertical',
		items: [
			'travel/travel_11',
			'animal/animal_8',
			'smile/smile_5'
		]
	},
	{
		id: 25,
		type: 'link',
		time: -1,
		items: [
			['smile/smile_284', 'travel/travel_80'],
			['people/people_561', 'travel/travel_114'],
			['object/object_337', 'object/object_3']
		]
	},
	{
		id: 26,
		type: 'memory',
		time: 8,
		col: 4,
		row: 2,
		items: [
			'object/object_137',
			'object/object_138',
			'object/object_139',
			'object/object_140',
		]
	},
	{
		id: 27,
		time: -1,
		type: 'word',
		phrase_id: 'nemo',
		col: 3,
		row: 3,
		items_target: [
			'object/object_34',
			'animal/animal_95'
		],
		items_extra: [
			'animal/animal_89',
			'animal/animal_83',
			'animal/animal_69',
			'travel/travel_10',
			'object/object_38',
			'object/object_55'
		]
	},
	{
		id: 28,
		time: -1,
		type: 'related',
		groups: [
			['smile/smile_424','smile/smile_423','object/object_91'],
			['smile/smile_307','smile/smile_409','object/object_221'],
			['food/food_43','food/food_47','food/food_46']
		],
		related_items: [
			'smile/smile_332',
			'object/object_118',
			'food/food_45'
		]
	},
	{
		id: 29,
		time: -1,
		type: 'shadow',
		items: [
			'flag/flag_11',
			'animal/animal_80',
			'travel/travel_4'
		]
	},
	{
		id: 30,
		time: -1,
		type: 'crop',
		crop_type: 'vertical', // horizontal
		items: [
			'smile/smile_8',
			'smile/smile_23',
			'smile/smile_52'
		]
	},

	{
		id: 31,
		type: 'link',
		time: -1,
		items: [
			['animal/animal_26', 'symbol/symbol_166'],
			['symbol/symbol_161', 'object/object_282'],
			['object/object_42', 'symbol/symbol_136']
		]
	},

	//
	{
		id: 32,
		type: 'memory',
		time: 6,
		col: 2,
		row: 3,
		items: [
			'object/object_9',
			'object/object_38',
			'object/object_97'
		]
	},
	{
		id: 33,
		time: -1,
		type: 'word',
		phrase_id: 'blue_blood',
		col: 3,
		row: 3,
		items_target: [
			'symbol/symbol_34',
			'object/object_266'
		],
		items_extra: [
			'animal/animal_82',
			'symbol/symbol_0',
			'symbol/symbol_33',
			'object/object_265'
		]
	},
	{
		id: 34,
		time: -1,
		type: 'related',
		groups: [
			['smile/smile_329','smile/smile_330','smile/smile_331'],
			['smile/smile_320','smile/smile_321','smile/smile_326'],
			['smile/smile_16','smile/smile_17','smile/smile_18']
		],
		related_items: [
			'animal/animal_0',
			'smile/smile_323',
			'smile/smile_19'
		]
	},
	{
		id: 35,
		time: -1,
		type: 'shadow',
		items: [
			'people/people_4',
			'people/people_563',
			'symbol/symbol_113'
		]
	},
	{
		id: 36,
		time: -1,
		type: 'crop',
		crop_type: 'horizontal', // horizontal
		items: [
			'symbol/symbol_115',
			'food/food_15',
			'nature/nature_16'
		]
	},


	{
		id: 37,
		type: 'link',
		time: -1,
		items: [
			['travel/travel_3', 'animal/animal_90'],
			['travel/travel_32', 'animal/animal_9'],
			['object/object_160', 'animal/animal_95']
		]
	},

	//
	{
		id: 38,
		type: 'memory',
		time: 20,
		col: 4,
		row: 4,
		items: [
			'object/object_161',
			'object/object_178',
			'object/object_93',
			'smile/smile_12',
			'smile/smile_13',
			'smile/smile_31',
			'smile/smile_283',
			'smile/smile_41',
		]
	},
	{
		id: 39,
		time: -1,
		type: 'word',
		phrase_id: 'lamb',
		col: 3,
		row: 3,
		items_target: [
			'smile/smile_434',
			'animal/animal_34'
		],
		items_extra: [
			'animal/animal_13',
			'smile/smile_432',
			'smile/smile_441',
			'animal/animal_99',
			'food/food_39',
			'food/food_21'
		]
	},
	{
		id: 40,
		time: -1,
		type: 'related',
		groups: [
			['people/people_7','people/people_14','people/people_35'],
			['people/people_18','people/people_19','people/people_36'],
			['people/people_20','people/people_21','people/people_22']
		],
		related_items: [
			'people/people_534',
			'people/people_42',
			'people/people_32'
		]
	},
	{
		id: 41,
		time: -1,
		type: 'shadow',
		items: [
			'nature/nature_0',
			'travel/travel_192',
			'food/food_128'
		]
	},
	{
		id: 42,
		time: -1,
		type: 'crop',
		crop_type: 'vertical', // horizontal
		items: [
			'animal/animal_24',
			'food/food_15',
			'animal/animal_8'
		]
	},
	{
		id: 43,
		type: 'link',
		time: -1,
		items: [
			['smile/smile_244', 'smile/smile_299'],
			['smile/smile_316', 'object/object_284'],
			['smile/smile_301', 'smile/smile_300']
		]
	},
	
	//
	{
		id: 44,
		type: 'memory',
		time: 6,
		col: 4,
		row: 2,
		items: [
			'smile/smile_13',
			'smile/smile_5',
			'smile/smile_51',
			'smile/smile_24'
		]
	},
	{
		id: 45,
		time: -1,
		type: 'word',
		phrase_id: 'black_panther',
		col: 3,
		row: 3,
		items_target: [
			'symbol/symbol_40',
			'animal/animal_18'
		],
		items_extra: [
			'animal/animal_13',
			'symbol/symbol_46',
			'symbol/symbol_194',
			'object/object_165'
		]
	},
	{
		id: 46,
		time: -1,
		type: 'related',
		groups: [
			['food/food_103','food/food_106','food/food_32'],
			['food/food_41','food/food_40','food/food_42'],
			['food/food_7','food/food_12','food/food_3']
		],
		related_items: [
			'food/food_43',
			'food/food_126',
			'food/food_4'
		]
	},
	{
		id: 47,
		time: -1,
		type: 'shadow',
		items: [
			'travel/travel_179',
			'travel/travel_178',
			'travel/travel_177'
		]
	},
	{
		id: 48,
		time: -1,
		type: 'crop',
		crop_type: 'vertical', // horizontal
		items: [
			'animal/animal_2',
			'animal/animal_11',
			'animal/animal_28'
		]
	},

	{
		id: 49,
		type: 'link',
		time: -1,
		items: [
			['food/food_45', 'symbol/symbol_95'],
			['food/food_112', 'symbol/symbol_93'],
			['food/food_102', 'symbol/symbol_94']
		]
	},
	
	//
	{
		id: 50,
		type: 'memory',
		time: 12,
		col: 5,
		row: 2,
		items: [
			'travel/travel_6',
			'travel/travel_78',
			'travel/travel_94',
			'travel/travel_100',
			'travel/travel_144'
		]
	},
	{
		id: 51,
		time: -1,
		type: 'word',
		phrase_id: 'love',
		col: 4,
		row: 4,
		items_target: [
			'smile/smile_344',
			'object/object_184',
			'smile/smile_422',
		],
		items_extra: [
			'animal/animal_82',
			'symbol/symbol_0',
			'symbol/symbol_33',
			'object/object_265'
		]
	},
	{
		id: 52,
		time: -1,
		type: 'related',
		groups: [
			['animal/animal_83','animal/animal_84','animal/animal_86'],
			['animal/animal_91','animal/animal_93','animal/animal_89'],
			['animal/animal_26','animal/animal_23','animal/animal_41']
		],
		related_items: [
			'animal/animal_90',
			'animal/animal_95',
			'animal/animal_36'
		]
	},
	{
		id: 53,
		time: -1,
		type: 'shadow',
		items: [
			'animal/animal_53',
			'animal/animal_39',
			'animal/animal_38'
		]
	},
	{
		id: 54,
		time: -1,
		type: 'crop',
		crop_type: 'horizontal', // horizontal
		items: [
			'travel/travel_6',
			'travel/travel_12',
			'travel/travel_86'
		]
	},
	{
		id: 55,
		type: 'link',
		time: -1,
		items: [
			['food/food_27', 'smile/smile_31'],
			['food/food_21', 'smile/smile_4'],
			['food/food_57', 'smile/smile_5']
		]
	},
	{
		id: 56,
		type: 'memory',
		time: 14,
		col: 4,
		row: 3,
		items: [
			'symbol/symbol_95',
			'symbol/symbol_94',
			'symbol/symbol_93',
			'symbol/symbol_92',
			'symbol/symbol_91',
			'symbol/symbol_90'
		]
	},
	{
		id: 57,
		time: -1,
		type: 'word',
		phrase_id: 'burger_king',
		col: 3,
		row: 3,
		items_target: [
			'food/food_43',
			'object/object_99'
		],
		items_extra: [
			'smile/smile_37',
			'smile/smile_45',
			'food/food_44',
			'food/food_46'
		]
	},
	{
		id: 58,
		time: -1,
		type: 'related',
		groups: [
			['object/object_187','object/object_185','object/object_184'],
			['object/object_167','object/object_169','object/object_168'],
			['food/food_32','food/food_103','food/food_43']
		],
		related_items: [
			'object/object_186',
			'object/object_170',
			'food/food_106'
		]
	},
	{
		id: 59,
		time: -1,
		type: 'shadow',
		items: [
			'object/object_137',
			'object/object_139',
			'object/object_140'
		]
	},
	{
		id: 60,
		time: -1,
		type: 'crop',
		crop_type: 'horizontal', // vertical
		items: [
			'symbol/symbol_188',
			'symbol/symbol_190',
			'symbol/symbol_193',
			'symbol/symbol_194'
		]
	},
	{
		id: 61,
		type: 'link',
		time: -1,
		items: [
			['smile/smile_382', 'symbol/symbol_95'], // 1
			['smile/smile_373', 'symbol/symbol_94'], // 2
			['smile/smile_366', 'symbol/symbol_93'] // 3
		]
	},
	{
		id: 62,
		type: 'memory',
		time: 11,
		col: 4,
		row: 3,
		items: [
			'travel/travel_99',
			'travel/travel_98',
			'travel/travel_97',
			'travel/travel_96',
			'travel/travel_91',
			'travel/travel_86'
		]
	},
	{
		id: 63,
		time: -1,
		type: 'word',
		phrase_id: 'puppy',
		col: 3,
		row: 3,
		items_target: [
			'animal/animal_4',
			'smile/smile_366'
		],
		items_extra: [
			'smile/smile_424',
			'smile/smile_431',
			'food/food_5',
			'nature/nature_7'
		]
	},
	{
		id: 64,
		time: -1,
		type: 'related',
		groups: [
			['food/food_13','food/food_16','food/food_73'],
			['food/food_41','food/food_42','food/food_126'],
			['food/food_122','food/food_109','food/food_103']
		],
		related_items: [
			'food/food_23',
			'food/food_40',
			'food/food_121'
		]
	},
	{
		id: 65,
		time: -1,
		type: 'shadow',
		items: [
			'object/object_297',
			'object/object_298',
			'object/object_299',
			'object/object_287'
		]
	},
	{
		id: 66,
		time: -1,
		type: 'crop',
		crop_type: 'horizontal', // vertical
		items: [
			'object/object_8',
			'object/object_9',
			'object/object_10',
			'object/object_11'
		]
	},
	{
		id: 67,
		type: 'link',
		time: -1,
		items: [
			['smile/smile_449', 'object/object_95'],
			['smile/smile_307', 'object/object_118'], 
			['smile/smile_68', 'object/object_120'] 
		]
	},
	{
		id: 68,
		type: 'memory',
		time: 18,
		col: 4,
		row: 4,
		items: [
			'travel/travel_185',
			'travel/travel_184',
			'travel/travel_183',
			'travel/travel_182',
			'travel/travel_180',
			'travel/travel_179',
			'travel/travel_177',
			'travel/travel_178',
		]
	},
	{
		id: 69,
		time: -1,
		type: 'word',
		phrase_id: 'starbucks',
		col: 3,
		row: 3,
		items_target: [
			'travel/travel_29',
			'object/object_13'
		],
		items_extra: [
			'travel/travel_111',
			'symbol/symbol_13',
			'nature/nature_8',
			'object/object_59'
		]
	},
	{
		id: 70,
		time: -1,
		type: 'related',
		groups: [
			['object/object_59','object/object_68','object/object_105'],
			['object/object_95','object/object_123','object/object_173'],
			['object/object_55','object/object_113','object/object_120']
		],
		related_items: [
			'object/object_101',
			'object/object_24',
			'object/object_153'
		]
	},
	{
		id: 71,
		time: -1,
		type: 'shadow',
		items: [
			'object/object_333',
			'object/object_332',
			'object/object_330',
			'object/object_329'
		]
	},
	{
		id: 72,
		time: -1,
		type: 'crop',
		crop_type: 'horizontal', // vertical
		items: [
			'object/object_220',
			'object/object_221',
			'object/object_218',
			'object/object_161'
		]
	},
	{
		id: 73,
		type: 'link',
		time: -1,
		items: [
			['food/food_23', 'food/food_73'], // ququ 
			['food/food_60', 'food/food_61'], // egg
			['food/food_31', 'food/food_47'] // bread
		]
	},
	{
		id: 74,
		type: 'memory',
		time: 8,
		col: 4,
		row: 2,
		items: [
			'smile/smile_68',
			'smile/smile_112',
			'smile/smile_136',
			'smile/smile_142',
		]
	},
	{
		id: 75,
		time: -1,
		type: 'word',
		phrase_id: 'beauty_beast',
		col: 3,
		row: 3,
		items_target: [
			'people/people_121',
			'smile/smile_209'
		],
		items_extra: [
			'people/people_496',
			'people/people_487',
			'food/food_59',
			'nature/nature_8'
		]
	},
	{
		id: 76,
		time: -1,
		type: 'related',
		groups: [
			['object/object_333','object/object_329','object/object_310'],
			['object/object_137','object/object_138','object/object_139'],
			['object/object_63','object/object_64','object/object_65']
		],
		related_items: [
			'object/object_311',
			'object/object_140',
			'object/object_66'
		]
	},
	{
		id: 77,
		time: -1,
		type: 'shadow',
		items: [
			'object/object_248',
			'object/object_254',
			'object/object_251',
			'object/object_243'
		]
	},
	{
		id: 78,
		time: -1,
		type: 'crop',
		crop_type: 'horizontal', // vertical
		items: [
			'object/object_137',
			'object/object_138',
			'object/object_139',
			'object/object_140'
		]
	},
	{
		id: 79,
		type: 'link',
		time: -1,
		items: [
			['food/food_43', 'object/object_99'], // burger 
			['food/food_44', 'smile/smile_148'], // potat
			['food/food_84', 'food/food_108'] // coffee
		]
	},
	{
		id: 80,
		type: 'memory',
		time: 8,
		col: 2,
		row: 4,
		items: [
			'smile/smile_415',
			'smile/smile_416',
			'smile/smile_417',
			'smile/smile_418',
		]
	},
	{
		id: 81,
		time: -1,
		type: 'word',
		phrase_id: 'game_thrones',
		col: 3,
		row: 3,
		items_target: [
			'object/object_148',
			'object/object_99'
		],
		items_extra: [
			'travel/travel_8',
			'animal/animal_10',
			'object/object_251',
			'object/object_139'
		]
	},
	{
		id: 82,
		time: -1,
		type: 'related',
		groups: [
			['animal/animal_51','animal/animal_50','animal/animal_51'],
			['animal/animal_53','animal/animal_72','animal/animal_73'],
			['animal/animal_83','animal/animal_85','animal/animal_86']
		],
		related_items: [
			'animal/animal_49',
			'animal/animal_76',
			'animal/animal_84'
		]
	},
	{
		id: 83,
		time: -1,
		type: 'shadow',
		items: [
			'object/object_166',
			'object/object_167',
			'object/object_168',
			'object/object_169'
		]
	},
	{
		id: 84,
		time: -1,
		type: 'crop',
		crop_type: 'vertical', // horizontal
		items: [
			'flag/flag_167',
			'flag/flag_158',
			'flag/flag_125',
			'flag/flag_48'
		]
	},
	{
		id: 85,
		type: 'link',
		time: -1,
		items: [
			['object/object_199', 'animal/animal_57'], // panda
			['smile/smile_362', 'animal/animal_48'], // rabbit
			['travel/travel_0', 'animal/animal_92'] // kit
		]
	},
	{
		id: 86,
		type: 'memory',
		time: 10,
		col: 5,
		row: 2,
		items: [
			'object/object_13',
			'object/object_12',
			'object/object_71',
			'object/object_132',
			'object/object_146',
		]
	},
	{
		id: 87,
		time: -1,
		type: 'word',
		phrase_id: 'game_candle',
		col: 6,
		row: 4,
		items_target: [
			'object/object_148',
			'symbol/symbol_108',
			'object/object_13',
			'object/object_32'
		],
		items_extra: [
			'travel/travel_153',
			'animal/animal_32',
			'object/object_46',
			'object/object_31',
			'object/object_181',
			'object/object_276',
			'object/object_282',
			'object/object_333'
		]
	},
	{
		id: 88,
		time: -1,
		type: 'related',
		groups: [
			['people/people_329','people/people_333','people/people_335'],
			['people/people_314','people/people_320','people/people_322'],
			['people/people_339','people/people_340','people/people_344']
		],
		related_items: [
			'people/people_338',
			'people/people_326',
			'people/people_346'
		]
	},
	{
		id: 89,
		time: -1,
		type: 'shadow',
		items: [
			'object/object_93',
			'object/object_95',
			'object/object_94',
			'object/object_96'
		]
	},
	{
		id: 90,
		time: -1,
		type: 'crop',
		crop_type: 'vertical', // horizontal
		items: [
			'flag/flag_70',
			'flag/flag_75',
			'flag/flag_117',
			'flag/flag_180'
		]
	},
	{
		id: 91,
		type: 'link',
		time: -1,
		items: [
			['animal/animal_4', 'smile/smile_325'],
			['animal/animal_2', 'travel/travel_169'], 
			['animal/animal_15', 'object/object_99'],
			['food/food_30', 'animal/animal_50']
		]
	},
	{
		id: 92,
		type: 'memory',
		time: 10,
		col: 2,
		row: 5,
		items: [
			'object/object_148',
			'object/object_147',
			'object/object_145',
			'object/object_144',
			'object/object_154',
		]
	},
	{
		id: 93,
		time: -1,
		type: 'word',
		phrase_id: 'instant_success',
		col: 4,
		row: 4,
		items_target: [
			'smile/smile_357',
			'object/object_186'
		],
		items_extra: [
			'smile/smile_349',
			'smile/smile_420',
			'people/people_4',
			'object/object_239',
			'object/object_309'
		]
	},
	{
		id: 94,
		time: -1,
		type: 'related',
		groups: [
			['travel/travel_81','travel/travel_86','travel/travel_92'],
			['object/object_252','object/object_253','object/object_255'],
			['people/people_304','people/people_307','people/people_309']
		],
		related_items: [
			'travel/travel_91',
			'object/object_250',
			'people/people_312'
		]
	},
	{
		id: 95,
		time: -1,
		type: 'shadow',
		items: [
			'object/object_35',
			'object/object_36',
			'object/object_37',
			'object/object_38'
		]
	},
	{
		id: 96,
		time: -1,
		type: 'crop',
		crop_type: 'vertical', // horizontal
		items: [
			'food/food_87',
			'food/food_89',
			'food/food_81',
			'food/food_78'
		]
	},
	{
		id: 97,
		type: 'link',
		time: -1,
		items: [
			['object/object_138', 'object/object_139'],
			['object/object_137', 'object/object_140'], 
			['object/object_97', 'animal/animal_49'] 
		]
	},
	{
		id: 98,
		type: 'memory',
		time: 30,
		col: 5,
		row: 4,
		items: [
			'object/object_181',
			'object/object_179',
			'object/object_208',
			'object/object_207',
			'object/object_204',
			'smile/smile_5',
			'smile/smile_64',
			'smile/smile_284',
			'smile/smile_399',
			'smile/smile_430',
		]
	},
	{
		id: 99,
		time: -1,
		type: 'word',
		phrase_id: 'bad_hair',
		col: 6,
		row: 4,
		items_target: [
			'smile/smile_127',
			'object/object_309'
		],
		items_extra: [
			'smile/smile_148',
			'smile/smile_363',
			'people/people_561',
			'object/object_191',
			'object/object_250',
			'object/object_302'
		]
	},
	{
		id: 100,
		time: -1,
		type: 'related',
		groups: [
			['object/object_9','object/object_13','object/object_6'],
			['object/object_37','object/object_36','object/object_42'],
			['object/object_103','object/object_104','object/object_101']
		],
		related_items: [
			'object/object_10',
			'object/object_40',
			'object/object_102'
		]
	},
	{
		id: 101,
		time: -1,
		type: 'shadow',
		items: [
			'object/object_3',
			'object/object_6',
			'object/object_9',
			'object/object_18'
		]
	},
	{
		id: 102,
		time: -1,
		type: 'crop',
		crop_type: 'vertical', // horizontal
		items: [
			'animal/animal_105',
			'animal/animal_104',
			'animal/animal_113',
			'animal/animal_108'
		]
	},
]
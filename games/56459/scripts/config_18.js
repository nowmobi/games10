// В этом разделе основные переменные
const PLATFORM_TYPE = 'gm'
const build = 65;
var SHOULD_LOAD_PROGRESS = true
var MAKE_SCREEN_ON_X = false
var HIDE_VERSION = false;

var FORCE_TV_VERSION = false;

var DEFAULT_LANG = 'en'
var yandex_metrika = true
var YM_NUMBER = 97154085

var ANIMATION = true;
var SHOW_STRIKE_BLOCK = true
var PROGRESS_BAR_TYPE = 2;

const UPDATE_BTN_SELECTOR = '';
const UPDATE_MOBILE_BTN_SELECTOR = '';

const AD_DELAY = 20*1000
const AD_INTERVAL = 2*60*1000

// vk
const VK_APP_ID = 51404440;
const VK_APP_LINK = "https://vk.com/app51404440"

// sber
const SBER_APP_NAME = 'Викторина: Марвел'
const SBER_APP_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmZjAwMThiNWZhMGIzNzczNTYwM2ZiZDcyMjliNDY2MDNmNTEwMzI0YzQ0ODlkZjIwNWM1YTczMDM5NTk2Yzk5NDdhYTYiLCJhdWQiOiJWUFMiLCJleHAiOjE2NDg4OTY5NTgsImlhdCI6MTY0ODgxMDU0OCwiaXNzIjoiS0VZTUFTVEVSIiwidHlwZSI6IkJlYXJlciIsImp0aSI6IjRkNTA1ZTBkLWZlZjQtNGQyZS04MTEyLWYwNThlNDU1NWY4MiIsInNpZCI6IjllNTBmYzQ3LWY4MDAtNDg0ZC05YzVjLTUyMzJlMDY3ZGMxOSJ9.IyMSsjNAQJoJ7eZPT90vA6IU7ff8hZUwbO4gvXZCtFgyMil0QxlUPjqy9eA4aexvC4_jLMek2GMUA44dUfYTYKxhTXbhSHddrvqqyRi6jUhkdSdmvtpv9TXhIyuRM9KTPa9UQPveMVxYbzi9dHZKy8aEWfsSwmH_YL2THzBQzVUj7d8EbZ-FZqWaVOm8gN3M-jY6G4jSmASO3m4tPYKIig5uy6f2S6rJWNO2GIb4_CsyXM_GzEOmDOYf7jfcl9n0ygYMWQ-GhvWE-EbLpJi7Vb3DnyTv_QvKBxEndrPcxyGROoV31suI01qsm9VUIAehEn3dHnoums0A2NiJn6CQq2xzul6peZakbhaE_BmX4f1Tm7g5TlYcfU_ghtlhTF9Tt8FjlT2D2yNRUNHcL75eFLAEiM9hsf4MVtmEUp3reaXaxB5F-xl6Ar2jFriKRLtEGSOJQs1VlWLv4Ss9DtkrjLB8WkcGzAIYRM9AIVlFvanowJYMGLxg2Llgk6tIH_XfPUnOC1XIQttEKWgQE61yDLzyyhBsrG17PhR-pCNqzUsnqrHwiwJnUDMxgV5e-Kqk4AAEBo4X8xSI0N0L9BOcgooYrbVL0W1Q9dIW02rM5X642fzp9HuRy3nc2G9bzIT4eLD40TV0c1GUDrGZKU6pHqxmOjgoDOkNwjmZUBdXMTg';
const SBER_testing = false

// gamemonetize
const GM_APP_ID = 'p5t1fa570lc2qs3dwfy57z1xpmxwix1f'

// gamedistribution
const GD_APP_ID = "05ff9c8b10a447739074c8c676a3193b"
const GD_AD_DEBUG = true;

var CAMERA_ZOOM = 1.5;

// условные единицы
var sqrs_in_h = 12

// кол-во фильмов
var FILMS_AMOUNT = 100
// 
var WINNER_STREAK = 100

// задержка после ответа
var NEXT_QUESTION_DELAY = 200*ANIMATION

var DELAY_BEFORE_FLASHING = 600*ANIMATION;
var FLASH_DELAY_1 = 1000*ANIMATION;
var FLASH_DELAY_2 = 50*ANIMATION;

// после какого вопроса просят отзыв
var REVIEW_QUESTION_NUM = 8;

var JOIN_GROUP_NUM = 16;

var STORAGE_FIELD = "marvel_quiz_data"


var MARK_RIGHT_ANS = true


var tv_moves = {
	"game": {
		1: {
			"ArrowLeft": 2,
			"ArrowRight": 2,
			"ArrowUp": 3,
			"ArrowDown": 3
		},
		2: {
			"ArrowLeft": 1,
			"ArrowRight": 1,
			"ArrowUp": 4,
			"ArrowDown": 4
		},
		3: {
			"ArrowLeft": 4,
			"ArrowRight": 4,
			"ArrowUp": 1,
			"ArrowDown": 1
		},
		4: {
			"ArrowLeft": 3,
			"ArrowRight": 3,
			"ArrowUp": 2,
			"ArrowDown": 2
		},
	}
}

// пропорции блоков
// пропорции блоков
const proportions = {
	"gv_top_block": {
		"h": 96/825
	},
	"gv_tb_left_block": {
		"prop": 275/96
	},
	"gv_tb_right_block": {
		"prop": 501/235
	},
	"gv_left_block": {
		"prop": 80/1012
	},
	"gv_title_block": {
		"prop": 600/40,
		"h": 0.065
	},
	"gv_frame_block": {
		"prop": 635/360,
		"h": 340/750
	},
	"gv_fb_pic": {
		"prop": 600/400
	},
	"gv_buttons_block": {
		"prop": 620/170,
		"h": 175/750
	},
	"gv_bb_button": {
		"prop": 439/104,
		"h": 80/825
	},
	"mobile_gv_top_block": {
		"h": 80/850
	},
	"mobile_gv_tb_left_block": {
		"prop": 170/80
	},
	"mobile_gv_tb_right_block": {
		"prop": 501/235
	},
	"mobile_gv_title_block": {
		"prop": 320/28,
		"w": 320/410
	},
	"mobile_gv_frame_block": {
		"prop": 494/437,
		"w": 320/410
	},
	"mobile_gv_buttons_block": {
		"prop": 295/330,
		"w": 290/410,
		'h': 330/850
	},
	"gv_strike_block": {
		"prop": 894/457
	},
	"gv_game_over_block": {
		"prop": 770/510
	},
	"gv_gob_pic_result": {
		"prop": 310/80
	},
	"mobile_gv_game_over_block": {
		"prop": 740/720
	}
}


var rangs = {
	'0': {
		"ru": "уровень 0",
		"en": "level 0",
		"tr": "seviye 0"
	},
	"1": {
		"ru": "уровень 1",
		"en": "level 1",
		"tr": "seviye 1"
	},
	"3": {
		"ru": "уровень 2",
		"en": "level 2",
		"tr": "seviye 2"
	},
	"5": {
		"ru": "уровень 3",
		"en": "level 3",
		"tr": "seviye 3"
	},
	"10": {
		"ru": "уровень 4",
		"en": "level 4",
		"tr": "seviye 4"
	},
	"15": {
		"ru": "уровень 5",
		"en": "level 5",
		"tr": "seviye 5"
	},
	"20": {
		"ru": "уровень 6",
		"en": "level 6",
		"tr": "seviye 6"
	},
	"30": {
		"ru": "уровень 7",
		"en": "level 7",
		"tr": "seviye 7"
	},
	"50": {
		"ru": "уровень 8",
		"en": "level 8",
		"tr": "seviye 8"
	},
	"99": {
		"ru": "уровень 9",
		"en": "level 9",
		"tr": "seviye 9"
	}
}




// В этом разделе локализация на другие языки разных разделов игры
var text = {
	'title': {
		"ru": "Викторина: Марвел",
		"en": "Quiz: Marvel",
		"tr": "Bilgi Yarışması: Marvel"
	},
	"gv_tb_left_block_span": {
		"ru": "из",
		"en": "in",
		"tr": "içinde"
	},
	"gv_gob_pic_result_1": {
		"ru": "Правильных ответов: ",
		"en": "Right answers: ",
		"tr": "Doğru cevaplar: "
	},
	"gv_gob_pic_result_2": {
		"ru": "Ранг: ",
		"en": "Rang: ",
		"tr": "Rütbe: "
	},
	"gv_gob_button_1_text": {
		"ru": "Заново",
		"en": "Restart",
		"tr": "Yeniden Başlat"
	},
	"gv_gob_button_2_text": {
		"ru": "Получить ❤️ за рекламу",
		"en": "Get ❤️ by video ad",
		"tr": "Reklam ile ❤️ al"
	},
	"gv_winner_button_1_text": {
		"ru": "Скоро выйдет новая викторина!",
		"en": "New quiz coming soon",
		"tr": "Yakında yeni bir bilgi yarışması çıkacak!"
	},
	"gv_winner_button_2_text": {
		"ru": "Начать заново",
		"en": "Restart",
		"tr": "Yeniden Başlat"
	},
	"gv_get_review_button_1_text": {
		"ru": "Оценить",
		"en": "Rate",
		"tr": "Değerlendir"
	},
	"gv_get_review_button_2_text": {
		"ru": "Оценить позже...",
		"en": "Rate later...",
		"tr": "Daha sonra değerlendir..."
	},
	"gv_title_block": {
		"ru": "Выберите правильный ответ:",
		"en": "Choose the right answer:",
		"tr": "Doğru cevabı seçin:"
	},
	"gv_tb_left_block_span": {
		"ru": "Вопрос",
		"en": "Question",
		"tr": "Soru"
	},
	"gv_gob_button_1_hp_btn1": {
		"ru": "Нет!",
		"en": "No!",
		"tr": "Hayır!"
	},
	"gv_gob_button_1_hp_btn2": {
		"ru": "Выйти",
		"en": "Quit",
		"tr": "Çık"
	},
	"link_to_group_other_quizes": {
		"ru": "Другие наши викторины!",
		"en": "Our other quizzes!",
		"tr": "Diğer bilgi yarışmalarımız!"
	},
	"join_group_btn_text": {
	    "ru": "Вступить в группу!",
	    "en": "Join the group!",
	    "tr": "Gruba katıl!"
	},
	"join_group_later_btn_text": {
	    "ru": "Позже вступить",
	    "en": "Join later",
	    "tr": "Daha sonra katıl"
	},
	"join_group_link_text": {
	    "ru": "Вступить!",
	    "en": "Join!",
	    "tr": "Katıl!"
	}

}


// for instant translate of existing html elements
var html_elements_text = {

}

var my_html_elements_text = {
	"gv_gob_pic_go_title": {
		"ru": "Игра окончена!",
		"en": "Game over!",
		"tr": "Oyun bitti!"
	},
	"gv_gob_pic_exit_block_title": {
		"ru": "Вы точно хотите покинуть игру?",
		"en": "Are you sure you want to quit the game?",
		"tr": "Oyunu bırakmak istediğinizden emin misiniz?"
	},
	"gv_gob_pic_review_block_title": {
		"ru": "Оцените игру!",
		"en": "Rate the game!",
		"tr": "Oyunu değerlendirin!"
	},
	"gv_gob_pic_review_block_text1": {
		"ru": "Нравится игра?\nОцените её!",
		"en": "Like the game?\nRate it!",
		"tr": "Oyunu beğendiniz mi?\nDeğerlendirin!"
	},
	"gv_gob_pic_review_block_text2": {
		"ru": "И мы будем продолжать радовать Вас другими викторинами!",
		"en": "And we will keep delighting you with other quizzes!",
		"tr": "Ve sizi diğer bilgi yarışmalarımızla da memnun etmeye devam edeceğiz!"
	},
	"gv_gob_pic_join_block_title": {
		"ru": "Нравится игра?",
		"en": "Like the game?",
		"tr": "Oyunu beğendiniz mi?"
	},
	"gv_gob_pic_join_block_text1": {
		"ru": "Вступайте в нашу группу, чтобы оставаться в курсе новостей",
		"en": "Join our group to stay updated",
		"tr": "Güncel kalmak için grubumuza katılın"
	},
	"gv_gob_pic_winner_block_title": {
		"ru": "Ты мститель!",
		"en": "You are an Avenger!",
		"tr": "Sen bir Yenilmezsin!"
	},
	"gv_gob_pic_winner_block_text1": {
		"ru": "Поздравляем!\nТы прошёл викторину!",
		"en": "Congratulations!\nYou completed the quiz!",
		"tr": "Tebrikler!\nBilgi yarışmasını tamamladın!"
	},
	"gv_gob_pic_winner_block_text2": {
		"ru": "Ждём тебя в других викторинах",
		"en": "We look forward to seeing you in other quizzes",
		"tr": "Diğer bilgi yarışmalarımızda da seni görmek için sabırsızlanıyoruz"
	}
}





var questions = {
	"1": {
		"type": "1",
		"question": {
			"ru": "Кто сконструировал щит Капитана Америки",
			"en": "Who designed Captain America's shield?",
			"tr": "Kaptan Amerika'nın kalkanını kim tasarladı?"
		},
		"right_answer": {
			"ru": "Говард Старк",
			"en": "Howard Stark",
			"tr": "Howard Stark"
		},
		"wrong_answers": {
			"ru": [
				"Тони Старк",
				"Хэнк Пим",
				"Брюс Беннер",
			],
			"en": [
				"Tony Stark",
				"Hank Pym",
				"Bruce Banner",
			],
			"tr": [
				"Tony Stark",
				"Hank Pym",
				"Bruce Banner",
			]
		}
	},
	"2": {
		"type": 1,
		"question": {
			"ru": "Залежи какого металла в большом количестве обнаружены в Ваканде?",
			"en": "What metal is found in large quantities in Wakanda?",
			"tr": "Wakanda'da büyük miktarlarda bulunan metal nedir?"
		},
		"right_answer": {
			"ru": "Вибраниума",
			"en": "Vibranium",
			"tr": "Vibranyum"
		},
		"wrong_answers": {
			"ru": [
				"Адамантия",
				"Металла Уру",
				"Терригена",
			],
			"en": [
				"Adamantium",
				"Uru metal",
				"Terrigen",
			],
			"tr": [
				"Adamantium",
				"Uru metali",
				"Terrigen",
			]
		}
	},
	"3": {
		"type": 1,
		"question": {
			"ru": 'Автор фразы: "Гений,миллиардер, плейбой, филантроп"?',
			"en": 'Who said the phrase: "Genius, billionaire, playboy, philanthropist"?',
			"tr": 'Bu ifadeyi kim söyledi: "Dahi, milyarder, playboy, hayırsever"?'
		},
		"right_answer": {
			"ru": "Тони Старк",
			"en": "Tony Stark",
			"tr": "Tony Stark"
		},
		"wrong_answers": {
			"ru": [
				"Говард Старк",
				"Ник Фьюри",
				"Брюс Уэйн",
			],
			"en": [
				"Howard Stark",
				"Nick Fury",
				"Bruce Wayne",
			],
			"tr": [
				"Howard Stark",
				"Nick Fury",
				"Bruce Wayne",
			]
		}
	},
	"4": {
		"type": 1,
		"question": {
			"ru": "Какой способностью обладал Магнето?",
			"en": "What ability did Magneto have?",
			"tr": "Magneto'nun hangi yeteneği vardı?"
		},
		"right_answer": {
			"ru": "Управлением металлом",
			"en": "Controlling metal",
			"tr": "Metali kontrol etme"
		},
		"wrong_answers": {
			"ru": [
				"Телепатией",
				"Телекинезом",
				"Способностью принимать любой облик",
			],
			"en": [
				"Telepathy",
				"Telekinesis",
				"Shape-shifting",
			],
			"tr": [
				"Telepati",
				"Telekinezi",
				"Şekil değiştirme",
			]
		}
	},
	"5": {
		"type": 1,
		"question": {
			"ru": "Из какого металла сделаны когти Росомахи?",
			"en": "What metal are Wolverine's claws made of?",
			"tr": "Wolverine'in pençeleri hangi metalden yapılmıştır?"
		},
		"right_answer": {
			"ru": "Из адамантия",
			"en": "Adamantium",
			"tr": "Adamantium"
		},
		"wrong_answers": {
			"ru": [
				"Из вибраниума",
				"Из метеоритного железа",
				"Из стали",
			],
			"en": [
				"Vibranium",
				"Meteorite iron",
				"Steel",
			],
			"tr": [
				"Vibranyum",
				"Meteor demiri",
				"Çelik",
			]
		}
	},
	"6": {
		"type": 1,
		"question": {
			"ru": "Око Агамотто позволяет владельцу:",
			"en": "The Eye of Agamotto allows its owner to:",
			"tr": "Agamotto'nun Gözü sahibine ne sağlar?"
		},
		"right_answer": {
			"ru": "Управлять потоками времени",
			"en": "Control time",
			"tr": "Zamanı kontrol etme"
		},
		"wrong_answers": {
			"ru": [
				"Путешествовать в пространстве",
				"Жить вечно",
				"Стать неуязвимым",
			],
			"en": [
				"Travel through space",
				"Live forever",
				"Become invincible",
			],
			"tr": [
				"Uzayda yolculuk etme",
				"Sonsuza dek yaşama",
				"Yenilmez olma",
			]
		}
	},
	"7": {
		"type": 1,
		"question": {
			"ru": "Настоящее имя Звездного Лорда:",
			"en": "Star-Lord's real name:",
			"tr": "Star-Lord'un gerçek adı nedir?"
		},
		"right_answer": {
			"ru": "Питер Квилл",
			"en": "Peter Quill",
			"tr": "Peter Quill"
		},
		"wrong_answers": {
			"ru": [
				"Питер Паркер",
				"Баки Барнс",
				"Стив Роджерс",
			],
			"en": [
				"Peter Parker",
				"Bucky Barnes",
				"Steve Rogers",
			],
			"tr": [
				"Peter Parker",
				"Bucky Barnes",
				"Steve Rogers",
			]
		}
	},
	"8": {
		"type": 1,
		"question": {
			"ru": "Кем был Доктор Стрэндж до становления магом?",
			"en": "What was Doctor Strange before becoming a sorcerer?",
			"tr": "Doktor Strange, büyücü olmadan önce neydi?"
		},
		"right_answer": {
			"ru": "Нейрохирургом",
			"en": "Neurosurgeon",
			"tr": "Nöroşirürjiyen"
		},
		"wrong_answers": {
			"ru": [
				"Водителем",
				"Наемником",
				"Стоматологом",
			],
			"en": [
				"Driver",
				"Mercenary",
				"Dentist",
			],
			"tr": [
				"Sürücü",
				"Paralı asker",
				"Diş hekimi",
			]
		}
	},
	"9": {
		"type": 1,
		"question": {
			"ru": "Фиолетовый камень бесконечности давал контроль над: …",
			"en": "The purple Infinity Stone gave control over: ...",
			"tr": "Mor Sonsuzluk Taşı kontrol sağlar: ..."
		},
		"right_answer": {
			"ru": "Силой",
			"en": "Power",
			"tr": "Güç"
		},
		"wrong_answers": {
			"ru": [
				"Временем",
				"Душой",
				"Реальностью"
			],
			"en": [
				"Time",
				"Soul",
				"Reality"
			],
			"tr": [
				"Zaman",
				"Ruh",
				"Gerçeklik"
			]
		}
	},
	"10": {
		"type": 1,
		"question": {
			"ru": "Какой камень бесконечности обладает силой межпространственных перемещений?",
			"en": "Which Infinity Stone has the power of interdimensional travel?",
			"tr": "Hangi Sonsuzluk Taşı, boyutlar arası seyahat gücüne sahiptir?"
		},
		"right_answer": {
			"ru": "Синий",
			"en": "Blue",
			"tr": "Mavi"
		},
		"wrong_answers": {
			"ru": [
				"Красный",
				"Желтый",
				"Зеленый"
			],
			"en": [
				"Red",
				"Yellow",
				"Green"
			],
			"tr": [
				"Kırmızı",
				"Sarı",
				"Yeşil"
			]
		}
	},
	"11": {
		"type": 1,
		"question": {
			"ru": "Камень Разума содержался внутри:",
			"en": "The Mind Stone was contained within:",
			"tr": "Zihin Taşı, içinde bulunuyordu:"
		},
		"right_answer": {
			"ru": "Скипетра Локи",
			"en": "Loki's Scepter",
			"tr": "Loki'nin Asası"
		},
		"wrong_answers": {
			"ru": [
				"Эфира",
				"Тессеракта",
				"Ока Агамотто"
			],
			"en": [
				"Aether",
				"Tesseract",
				"Eye of Agamotto"
			],
			"tr": [
				"Eter",
				"Tesseract",
				"Agamotto'nun Gözü"
			]
		}
	},
	"12": {
		"type": 1,
		"question": {
			"ru": "Кто руководил захватом Нью-Йорка при помощи читаури?",
			"en": "Who led the invasion of New York with the Chitauri?",
			"tr": "Chitauri ile New York işgalini kim yönetti?"
		},
		"right_answer": {
			"ru": "Локи",
			"en": "Loki",
			"tr": "Loki"
		},
		"wrong_answers": {
			"ru": [
				"Красный Череп",
				"Танос",
				"Ронан"
			],
			"en": [
				"Red Skull",
				"Thanos",
				"Ronan"
			],
			"tr": [
				"Kızıl Kafatası",
				"Thanos",
				"Ronan"
			]
		}
	},
	"13": {
		"type": 1,
		"question": {
			"ru": "Куда доктор Стивен Стрэндж поехал за исцелением?",
			"en": "Where did Doctor Stephen Strange go for healing?",
			"tr": "Doktor Stephen Strange, iyileşmek için nereye gitti?"
		},
		"right_answer": {
			"ru": "В Непал",
			"en": "Nepal",
			"tr": "Nepal"
		},
		"wrong_answers": {
			"ru": [
				"В Китай",
				"В Монголию",
				"В Индию"
			],
			"en": [
				"China",
				"Mongolia",
				"India"
			],
			"tr": [
				"Çin",
				"Moğolistan",
				"Hindistan"
			]
		}
	},
	"14": {
		"type": 1,
		"question": {
			"ru": "Родной мир Локи:",
			"en": "Loki's home world:",
			"tr": "Loki'nin memleketi:"
		},
		"right_answer": {
			"ru": "Йотунхейм",
			"en": "Jotunheim",
			"tr": "Jotunheim"
		},
		"wrong_answers": {
			"ru": [
				"Мидгард",
				"Асгард",
				"Альвхейм"
			],
			"en": [
				"Midgard",
				"Asgard",
				"Alfheim"
			],
			"tr": [
				"Midgard",
				"Asgard",
				"Alfheim"
			]
		}
	},
	"15": {
		"type": 1,
		"question": {
			"ru": "Организация, осуществляющая контроль над угрозами человечеству:",
			"en": "The organization overseeing threats to humanity:",
			"tr": "İnsanlığa yönelik tehditleri kontrol eden organizasyon:"
		},
		"right_answer": {
			"ru": "Щ.И.Т.",
			"en": "S.H.I.E.L.D.",
			"tr": "S.H.I.E.L.D."
		},
		"wrong_answers": {
			"ru": [
				"Гидра",
				"М.Е.Ч.",
				"А.И.М"
			],
			"en": [
				"Hydra",
				"S.W.O.R.D.",
				"A.I.M."
			],
			"tr": [
				"Hydra",
				"S.W.O.R.D.",
				"A.I.M."
			]
		}
	},
	"16": {
		"type": 1,
		"question": {
			"ru": "Кого Танос принёс в жертву, чтобы получить камень души?",
			"en": "Whom did Thanos sacrifice to obtain the Soul Stone?",
			"tr": "Ruh Taşı'nı elde etmek için Thanos kimi kurban etti?"
		},
		"right_answer": {
			"ru": "Гамору",
			"en": "Gamora",
			"tr": "Gamora"
		},
		"wrong_answers": {
			"ru": [
				"Небулу",
				"Ронана",
				"Себя"
			],
			"en": [
				"Nebula",
				"Ronan",
				"Himself"
			],
			"tr": [
				"Nebula",
				"Ronan",
				"Kendini"
			]
		}
	},
	"17": {
		"type": 1,
		"question": {
			"ru": '"Я есть грут." Чья это фраза?',
			"en": '"I am Groot." Whose phrase is this?',
			"tr": "\"Ben Groot'um.\" Bu kimin sözü?"
		},
		"right_answer": {
			"ru": "Грута",
			"en": "Groot",
			"tr": "Groot"
		},
		"wrong_answers": {
			"ru": [
				"Таноса",
				"Человека паука",
				"Железного человека"
			],
			"en": [
				"Thanos",
				"Spider-Man",
				"Iron Man"
			],
			"tr": [
				"Thanos",
				"Örümcek Adam",
				"Demir Adam"
			]
		}
	},

	

	"18": {
		"type": 1,
		"question": {
			"ru": "Как звали сестру короля Т’Чаллы?",
			"en": "What was the name of King T'Challa's sister?",
			"tr": "Kral T'Challa'nın kız kardeşinin adı neydi?"
		},
		"right_answer": 
			{
			"ru": "Шури",
			"en": "Shuri",
			"tr": "Shuri"
		},
		"wrong_answers": {
			"ru": [
				"Гамора",
				"Рамонда",
				"Окойе"
			],
			"en": [
				"Gamora",
				"Ramonda",
				"Okoye"
			],
			"tr": [
				"Gamora",
				"Ramonda",
				"Okoye"
			]
		}
	},
	"19": {
		"type": 1,
		"question": {
			"ru": "Какое настоящее имя у Соколиного глаза?",
			"en": "What is Hawkeye's real name?",
			"tr": "Hawkeye'nin gerçek adı nedir?"
		},
		"right_answer": {
			"ru": "Клинт Бартон",
			"en": "Clint Barton",
			"tr": "Clint Barton"
		},
		"wrong_answers": {
			"ru": [
				"Стив Роджерс",
				"Сэмюэль Уилсон",
				"Баки Барнс"
			],
			"en": [
				"Steve Rogers",
				"Samuel Wilson",
				"Bucky Barnes"
			],
			"tr": [
				"Steve Rogers",
				"Samuel Wilson",
				"Bucky Barnes"
			]
		}
	},
	"20": {
		"type": 1,
		"question": {
			"ru": "Из людей икс только она умела принимать любой облик:",
			"en": "Among the X-Men, she was the only one who could take any form:",
			"tr": "X-Men arasında, sadece o herhangi bir şekil alabilirdi:"
		},
		"right_answer": {
			"ru": "Мистик",
			"en": "Mystique",
			"tr": "Mystique"
		},
		"wrong_answers": {
			"ru": [
				"Шторм",
				"Феникс",
				"Роуг"
			],
			"en": [
				"Storm",
				"Phoenix",
				"Rogue"
			],
			"tr": [
				"Storm",
				"Phoenix",
				"Rogue"
			]
		}
	},
	"21": {
		"type": 1,
		"question": {
			"ru": "Устройство, усиливающее способности профессора Ксавьера:",
			"en": "The device that enhances Professor Xavier's abilities:",
			"tr": "Profesör Xavier'ın yeteneklerini artıran cihaz:"
		},
		"right_answer": {
			"ru": "Церебро",
			"en": "Cerebro",
			"tr": "Cerebro"
		},
		"wrong_answers": {
			"ru": [
				"Спутник “Вероника”",
				"Комплекс “Иерихон”",
				"Частицы Пима"
			],
			"en": [
				"S.H.I.E.L.D. Helicarrier",
				"Jericho Missile",
				"Pym Particles"
			],
			"tr": [
				"S.H.I.E.L.D. Helicarrier",
				"Jericho Füzesi",
				"Pym Particles"
			]
		}
	},
	"22": {
		"type": 1,
		"question": {
			"ru": "Кто создал устройство, определяющее мутантов и роботов для борьбы с ними? (Коротышка который)",
			"en": "Who created the device that detects mutants and robots to fight against them? (The short guy)",
			"tr": "Mutantları ve onlarla savaşmak için robotları tespit eden cihazı kim yarattı? (Kısa adam)"
		},
		"right_answer": {
			"ru": "Боливар Траск",
			"en": "Bolivar Trask",
			"tr": "Bolivar Trask"
		},
		"wrong_answers": {
			"ru": [
				"Уильям Страйкер",
				"Говард Старк",
				"Арним Зола"
			],
			"en": [
				"William Stryker",
				"Howard Stark",
				"Arnim Zola"
			],
			"tr": [
				"William Stryker",
				"Howard Stark",
				"Arnim Zola"
			]
		}
	},
	"23": {
		"type": 1,
		"question": {
			"ru": "Имя сестры Гаморы:",
			"en": "Name of Gamora's sister:",
			"tr": "Gamora'nın kız kardeşinin adı:"
		},
		"right_answer": {
			"ru": "Небула",
			"en": "Nebula",
			"tr": "Nebula"
		},
		"wrong_answers": {
			"ru": [
				"Ванда",
				"Наташа",
				"Кэрол"
			],
			"en": [
				"Wanda",
				"Natasha",
				"Carol"
			],
			"tr": [
				"Wanda",
				"Natasha",
				"Carol"
			]
		}
	},
	
	
	"24": {
		"type": 1,
		"question": {
			"ru": "Кем являлся Ракета, напарник Грута?",
			"en": "Who was Rocket, Groot's partner?",
			"tr": "Groot'un ortağı Rocket kimdi?"
		},
		"right_answer": {
			"ru": "Енотом",
			"en": "A raccoon",
			"tr": "Bir rakun"
		},
		"wrong_answers": {
			"ru": ["Хомяком", "Собакой", "Человеком"],
			"en": ["A hamster", "A dog", "A human"],
			"tr": ["Bir hamster", "Bir köpek", "Bir insan"]
		}
	},
	"25": {
		"type": 1,
		"question": {
			"ru": "Из какого мира был родом Тор?",
			"en": "Which realm was Thor from?",
			"tr": "Thor hangi diyardan geliyordu?"
		},
		"right_answer": {
			"ru": "Асгард",
			"en": "Asgard",
			"tr": "Asgard"
		},
		"wrong_answers": {
			"ru": ["Олимп", "Земля", "Йотунхейм"],
			"en": ["Olympus", "Earth", "Jotunheim"],
			"tr": ["Olimpos", "Dünya", "Jotunheim"]
		}
	},
	"26": {
		"type": 1,
		"question": {
			"ru": "Каким образом асгардцы попадали в другие миры?",
			"en": "How did the Asgardians travel to other worlds?",
			"tr": "Asgardlılar diğer dünyalara nasıl seyahat ederdi?"
		},
		"right_answer": {
			"ru": "Через радужный мост",
			"en": "Via the Bifrost",
			"tr": "Bifrost ile"
		},
		"wrong_answers": {
			"ru": ["Через портал", "При помощи тессеракта", "Через квантовую телепортацию"],
			"en": ["Through a portal", "Using the Tesseract", "Via quantum teleportation"],
			"tr": ["Bir portal aracılığıyla", "Tesseract kullanarak", "Kuantum teleportasyon yoluyla"]
		}
	},
	"27": {
		"type": 1,
		"question": {
			"ru": "Против кого боролись Валькирии и потерпели неудачу?",
			"en": "Who did the Valkyries fight and lose to?",
			"tr": "Valkyries kime karşı savaştı ve yenildi?"
		},
		"right_answer": {
			"ru": "Против Хелы",
			"en": "Hela",
			"tr": "Hela'ya karşı"
		},
		"wrong_answers": {
			"ru": ["Против Суртура", "Против Халка", "Против ледяных великанов"],
			"en": ["Surtur", "Hulk", "Frost Giants"],
			"tr": ["Surtur'a karşı", "Hulk'a karşı", "Buz Devlerine karşı"]
		}
	},
	"28": {
		"type": 1,
		"question": {
			"ru": "Прозвище “Зимний Солдат” получил …",
			"en": "The nickname 'Winter Soldier' was given to ...",
			"tr": "'Kış Askeri' lakabı kime verilmiştir?"
		},
		"right_answer": {
			"ru": "Баки Барнс",
			"en": "Bucky Barnes",
			"tr": "Bucky Barnes"
		},
		"wrong_answers": {
			"ru": ["Стив Роджерс", "Сэм Уилсон", "Джек Роллинс"],
			"en": ["Steve Rogers", "Sam Wilson", "Jack Rollins"],
			"tr": ["Steve Rogers", "Sam Wilson", "Jack Rollins"]
		}
	},
	"29": {
		"type": 1,
		"question": {
			"ru": "Кого из Мстителей подчинил Локи при помощи Скипетра:",
			"en": "Which Avenger did Loki control with the Scepter?",
			"tr": "Loki'nin Asa ile kontrol ettiği Avenger kimdi?"
		},
		"right_answer": {
			"ru": "Соколиного глаза",
			"en": "Hawkeye",
			"tr": "Hawkeye"
		},
		"wrong_answers": {
			"ru": ["Тони Старка", "Наташу Романов", "Брюса Беннера"],
			"en": ["Tony Stark", "Natasha Romanoff", "Bruce Banner"],
			"tr": ["Tony Stark", "Natasha Romanoff", "Bruce Banner"]
		}
	},
	"30": {
		"type": 1,
		"question": {
			"ru": "Как звали первого виртуального помощника Тони Старка?",
			"en": "What was the name of Tony Stark's first virtual assistant?",
			"tr": "Tony Stark'ın ilk sanal asistanının adı neydi?"
		},
		"right_answer": {
			"ru": "Джарвис",
			"en": "JARVIS",
			"tr": "JARVIS"
		},
		"wrong_answers": {
			"ru": ["Пятница", "Вероника", "Дубина"],
			"en": ["Friday", "Veronica", "Dummy"],
			"tr": ["Cuma", "Veronica", "Dummy"]
		}
	},
	"31": {
		"type": 1,
		"question": {
			"ru": "Кто на вопрос “Ценой чего?” отвечает “Ценой всего”?",
			"en": "Who answers 'Everything' to the question 'At what cost?'",
			"tr": "'Ne pahasına?' sorusuna 'Her şey' diye cevap veren kimdir?"
		},
		"right_answer": {
			"ru": "Танос",
			"en": "Thanos",
			"tr": "Thanos"
		},
		"wrong_answers": {
			"ru": ["Локи", "Ронан", "Железный человек"],
			"en": ["Loki", "Ronan", "Iron Man"],
			"tr": ["Loki", "Ronan", "Demir Adam"]
		}
	},
	"32": {
		"type": 1,
		"question": {
			"ru": "Кто создал Альтрона в фильме “Мстители: Эра Альтрона”?",
			"en": "Who created Ultron in 'Avengers: Age of Ultron'?",
			"tr": "'Avengers: Ultron Çağı' filminde Ultron'u kim yarattı?"
		},
		"right_answer": {
			"ru": "Тони Старк",
			"en": "Tony Stark",
			"tr": "Tony Stark"
		},
		"wrong_answers": {
			"ru": ["Говард Старк", "Хэнк Пим", "Норман Озборн"],
			"en": ["Howard Stark", "Hank Pym", "Norman Osborn"],
			"tr": ["Howard Stark", "Hank Pym", "Norman Osborn"]
		}
	},
	
	"33": {
		"type": 1,
		"question": {
			"ru": "Настоящее имя Зеленого Гоблина?",
			"en": "What is the real name of the Green Goblin?",
			"tr": "Green Goblin'in gerçek adı nedir?"
		},
		"right_answer": {
			"ru": "Норман Озборн",
			"en": "Norman Osborn",
			"tr": "Norman Osborn"
		},
		"wrong_answers": {
			"ru": ["Питер Паркер", "Отто Октавиус", "Эдди Брок"],
			"en": ["Peter Parker", "Otto Octavius", "Eddie Brock"],
			"tr": ["Peter Parker", "Otto Octavius", "Eddie Brock"]
		}
	},
	"34": {
		"type": 1,
		"question": {
			"ru": "Настоящее имя Человека-Паука",
			"en": "What is Spider-Man's real name?",
			"tr": "Örümcek Adam'ın gerçek adı nedir?"
		},
		"right_answer": {
			"ru": "Питер Паркер",
			"en": "Peter Parker",
			"tr": "Peter Parker"
		},
		"wrong_answers": {
			"ru": ["Эдди Брок", "Гарри Озборн", "Питер Квилл"],
			"en": ["Eddie Brock", "Harry Osborn", "Peter Quill"],
			"tr": ["Eddie Brock", "Harry Osborn", "Peter Quill"]
		}
	},
	"35": {
		"type": 1,
		"question": {
			"ru": "Как звали биологического отца Локи?",
			"en": "What was the name of Loki's biological father?",
			"tr": "Loki'nin biyolojik babasının adı neydi?"
		},
		"right_answer": {
			"ru": "Лафей",
			"en": "Laufey",
			"tr": "Laufey"
		},
		"wrong_answers": {
			"ru": ["Один", "Имир", "Эгир"],
			"en": ["Odin", "Ymir", "Aegir"],
			"tr": ["Odin", "Ymir", "Aegir"]
		}
	},
	"36": {
		"type": 1,
		"question": {
			"ru": "Сколько было камней бесконечности?",
			"en": "How many Infinity Stones were there?",
			"tr": "Kaç tane Sonsuzluk Taşı vardı?"
		},
		"right_answer": {
			"ru": "6",
			"en": "6",
			"tr": "6"
		},
		"wrong_answers": {
			"ru": ["5", "7", "4"],
			"en": ["5", "7", "4"],
			"tr": ["5", "7", "4"]
		}
	},
	"37": {
		"type": 1,
		"question": {
			"ru": "Какой элемент использовал Тони Старк для грудного реактора до открытия Нового Элемента?",
			"en": "What element did Tony Stark use for his arc reactor before discovering the new element?",
			"tr": "Tony Stark, yeni elementi keşfetmeden önce göğüs reaktörü için hangi elementi kullandı?"
		},
		"right_answer": {
			"ru": "Палладий",
			"en": "Palladium",
			"tr": "Palladyum"
		},
		"wrong_answers": {
			"ru": ["Никель", "Золото", "Дармштадтий"],
			"en": ["Nickel", "Gold", "Darmstadtium"],
			"tr": ["Nikel", "Altın", "Darmstadtium"]
		}
	},
	"38": {
		"type": 1,
		"question": {
			"ru": "С кем пришел доктор Стрэндж договориться?",
			"en": "Who did Doctor Strange come to bargain with?",
			"tr": "Doktor Strange, kiminle pazarlık yapmaya geldi?"
		},
		"right_answer": {
			"ru": "С Дормамму",
			"en": "Dormammu",
			"tr": "Dormammu"
		},
		"wrong_answers": {
			"ru": ["С Таносом", "С Суртуром", "С Халком"],
			"en": ["Thanos", "Surtur", "Hulk"],
			"tr": ["Thanos", "Surtur", "Hulk"]
		}
	},
	"39": {
		"type": 1,
		"question": {
			"ru": "Кто спас учеников школы Ксавьера, когда она взорвалась?",
			"en": "Who saved the students of Xavier's School when it exploded?",
			"tr": "Xavier Okulu patladığında öğrencileri kim kurtardı?"
		},
		"right_answer": {
			"ru": "Ртуть",
			"en": "Quicksilver",
			"tr": "Quicksilver"
		},
		"wrong_answers": {
			"ru": ["Магнето", "Они сами спаслись", "Профессор Ксавьер"],
			"en": ["Magneto", "They saved themselves", "Professor Xavier"],
			"tr": ["Magneto", "Kendilerini kurtardılar", "Profesör Xavier"]
		}
	},
	"40": {
		"type": 1,
		"question": {
			"ru": "Настоящее имя Ртути?",
			"en": "What is Quicksilver's real name?",
			"tr": "Quicksilver'ın gerçek adı nedir?"
		},
		"right_answer": {
			"ru": "Пьетро Максимофф",
			"en": "Pietro Maximoff",
			"tr": "Pietro Maximoff"
		},
		"wrong_answers": {
			"ru": ["Питер Квилл", "Питер Паркер", "Барри Аллен"],
			"en": ["Peter Quill", "Peter Parker", "Barry Allen"],
			"tr": ["Peter Quill", "Peter Parker", "Barry Allen"]
		}
	},
		"41": {
		"type": 1,
		"question": {
			"ru": "Кого Тони Старк называл “Капитаном Сосулькой”?",
			"en": "Who did Tony Stark call 'Capsicle'?",
			"tr": "Tony Stark kime 'Buz Adam' diyordu?"
		},
		"right_answer": {
			"ru": "Стива Роджерса",
			"en": "Steve Rogers",
			"tr": "Steve Rogers"
		},
		"wrong_answers": {
			"ru": ["Сэма Уилсона", "Джеймса Роудса", "Баки Барнс"],
			"en": ["Sam Wilson", "James Rhodes", "Bucky Barnes"],
			"tr": ["Sam Wilson", "James Rhodes", "Bucky Barnes"]
		}
	},
	"42": {
		"type": 1,
		"question": {
			"ru": "Какой пароль был у полковника Роудса?",
			"en": "What was Colonel Rhodes' password?",
			"tr": "Albay Rhodes'un şifresi neydi?"
		},
		"right_answer": {
			"ru": "Воитель рулид",
			"en": "War Machine rocks",
			"tr": "War Machine süper"
		},
		"wrong_answers": {
			"ru": ["Железный Патриот", "Златовласка", "Я круче Старка"],
			"en": ["Iron Patriot", "Goldilocks", "I'm better than Stark"],
			"tr": ["Iron Patriot", "Goldilocks", "Stark'tan daha iyiyim"]
		}
	},
	"43": {
		"type": 1,
		"question": {
			"ru": "Из какого материала был сделан Мьёльнир?",
			"en": "What material was Mjolnir made from?",
			"tr": "Mjolnir hangi malzemeden yapılmıştı?"
		},
		"right_answer": {
			"ru": "Из металла Уру",
			"en": "Uru metal",
			"tr": "Uru metali"
		},
		"wrong_answers": {
			"ru": ["Из вибраниума", "Из адамантия", "Из сплава вибраниума и адамантия"],
			"en": ["Vibranium", "Adamantium", "An alloy of Vibranium and Adamantium"],
			"tr": ["Vibranyum", "Adamantium", "Vibranyum ve Adamantium alaşımı"]
		}
	},
	"44": {
		"type": 1,
		"question": {
			"ru": "Кто разрушил Мьёльнир?",
			"en": "Who destroyed Mjolnir?",
			"tr": "Mjolnir'i kim yok etti?"
		},
		"right_answer": {
			"ru": "Хэла",
			"en": "Hela",
			"tr": "Hela"
		},
		"wrong_answers": {
			"ru": ["Локи", "Один", "Его никто не разрушал, просто Тор его потерял"],
			"en": ["Loki", "Odin", "No one destroyed it, Thor just lost it"],
			"tr": ["Loki", "Odin", "Kimse onu yok etmedi, Thor sadece kaybetti"]
		}
	},
	"45": {
		"type": 1,
		"question": {
			"ru": "Сестра Тора была богиней чего?",
			"en": "Thor's sister was the goddess of what?",
			"tr": "Thor'un kız kardeşi ne tanrıçasıydı?"
		},
		"right_answer": {
			"ru": "Смерти",
			"en": "Death",
			"tr": "Ölüm"
		},
		"wrong_answers": {
			"ru": ["Хитрости", "Мудрости", "Молотов"],
			"en": ["Trickery", "Wisdom", "Thunder"],
			"tr": ["Hile", "Bilgelik", "Şimşek"]
		}
	},
	"46": {
		"type": 1,
		"question": {
			"ru": "Как называется оружие Тора, которое он раздобыл взамен Мьёльнира?",
			"en": "What is the name of the weapon Thor obtained to replace Mjolnir?",
			"tr": "Thor'un Mjolnir'in yerine aldığı silahın adı nedir?"
		},
		"right_answer": {
			"ru": "Громобой",
			"en": "Stormbreaker",
			"tr": "Stormbreaker"
		},
		"wrong_answers": {
			"ru": ["Тор понял, что ему не нужно оружие, поскольку он сам оружие", "Скипетр Локи", "Гунгнир"],
			"en": ["Thor realized he didn't need a weapon, as he himself is a weapon", "Loki's Scepter", "Gungnir"],
			"tr": ["Thor, silaha ihtiyacı olmadığını, çünkü kendisinin bir silah olduğunu fark etti", "Loki'nin Asa", "Gungnir"]
		}
	},
	"47": {
		"type": 1,
		"question": {
			"ru": "На какой планете Тор сделал своё новое оружие?",
			"en": "On which planet did Thor forge his new weapon?",
			"tr": "Thor yeni silahını hangi gezegende dövdü?"
		},
		"right_answer": {
			"ru": "На Нидавеллире",
			"en": "Nidavellir",
			"tr": "Nidavellir"
		},
		"wrong_answers": {
			"ru": ["На Земле", "В Асгарде", "Тор не делал новое оружие, его старое устраивало"],
			"en": ["On Earth", "In Asgard", "Thor didn't forge a new weapon, he was satisfied with the old one"],
			"tr": ["Dünya'da", "Asgard'da", "Thor yeni bir silah dövmedi, eski silahıyla memnundu"]
		}
	},
	"48": {
		"type": 1,
		"question": {
			"ru": "Как звали дочь Тони Старка?",
			"en": "What was the name of Tony Stark's daughter?",
			"tr": "Tony Stark'ın kızının adı neydi?"
		},
		"right_answer": {
			"ru": "Морган",
			"en": "Morgan",
			"tr": "Morgan"
		},
		"wrong_answers": {
			"ru": ["Марго", "Меган", "Мерида"],
			"en": ["Margot", "Megan", "Merida"],
			"tr": ["Margot", "Megan", "Merida"]
		}
	},
	"49": {
		"type": 1,
		"question": {
			"ru": "Кто помог Тони Старку сбежать из плена Десяти колец?",
			"en": "Who helped Tony Stark escape from the Ten Rings' captivity?",
			"tr": "Tony Stark'a On Yüzük esaretinden kaçmasına kim yardım etti?"
		},
		"right_answer": {
			"ru": "Хо Инсен",
			"en": "Ho Yinsen",
			"tr": "Ho Yinsen"
		},
		"wrong_answers": {
			"ru": ["Никто не помогал", "Полковник Роудс", "Стив Роджерс"],
			"en": ["No one helped", "Colonel Rhodes", "Steve Rogers"],
			"tr": ["Kimse yardım etmedi", "Albay Rhodes", "Steve Rogers"]
		}
	},
	"50": {
		"type": 1,
		"question": {
			"ru": "Какая способность была у Росомахи?",
			"en": "What ability did Wolverine have?",
			"tr": "Wolverine'in hangi yeteneği vardı?"
		},
		"right_answer": {
			"ru": "Регенерация и когти",
			"en": "Regeneration and claws",
			"tr": "Yenilenme ve pençeler"
		},
		"wrong_answers": {
			"ru": ["Суперскорость", "Телекинез и телепатия", "У него не было суперспособности. Его так называли из-за характера."],
			"en": ["Super speed", "Telekinesis and telepathy", "He didn't have a superpower. He was called that because of his character."],
			"tr": ["Süper hız", "Telekinezi ve telepati", "Onun süper gücü yoktu. Ona karakterinden dolayı öyle deniyordu."]
		}
	},
	"51": {
		"type": 1,
		"question": {
			"ru": "Как звали маму Тора?",
			"en": "What was Thor's mother's name?",
			"tr": "Thor'un annesinin adı neydi?"
		},
		"right_answer": {
			"ru": "Фригга",
			"en": "Frigga",
			"tr": "Frigga"
		},
		"wrong_answers": {
			"ru": ["Хела", "Брунгильда", "Сиф"],
			"en": ["Hela", "Brunhilde", "Sif"],
			"tr": ["Hela", "Brunhilde", "Sif"]
		}
	},
	"52": {
		"type": 1,
		"question": {
			"ru": "Какая версия костюма железного человека решила проблему обледенения",
			"en": "Which version of Iron Man's suit solved the icing problem?",
			"tr": "Demir Adam'ın kostümünün hangi versiyonu donma sorununu çözdü?"
		},
		"right_answer": {
			"ru": "Марк 3",
			"en": "Mark 3",
			"tr": "Mark 3"
		},
		"wrong_answers": {
			"ru": ["Марк 2", "Марк 5", "У Тони Старка все костюмы были неуязвимы к обледенению"],
			"en": ["Mark 2", "Mark 5", "All of Tony Stark's suits were impervious to icing"],
			"tr": ["Mark 2", "Mark 5", "Tony Stark'ın tüm kostümleri donmaya karşı dayanıklıydı"]
		}
	},
	"53": {
		"type": 1,
		"question": {
			"ru": "Что захотел поесть Тони Старк после битвы в Нью-Йорке с Читаури?",
			"en": "What did Tony Stark want to eat after the battle in New York with the Chitauri?",
			"tr": "Tony Stark, Chitauri'yle New York'taki savaştan sonra ne yemek istedi?"
		},
		"right_answer": {
			"ru": "Шаурму",
			"en": "Shawarma",
			"tr": "Şaşlık"
		},
		"wrong_answers": {
			"ru": ["Пиццу", "Бургер", "Шашлыки"],
			"en": ["Pizza", "Burger", "Kebab"],
			"tr": ["Pizza", "Burger", "Kebap"]
		}
	},
	"54": {
		"type": 1,
		"question": {
			"ru": "Как называлась планета, откуда Танос родом?",
			"en": "What was the name of the planet where Thanos was from?",
			"tr": "Thanos'un nereden geldiği gezegenin adı neydi?"
		},
		"right_answer": {
			"ru": "Титан",
			"en": "Titan",
			"tr": "Titan"
		},
		"wrong_answers": {
			"ru": ["Сакаар", "Вормир", "Свартальфахейм"],
			"en": ["Sakaar", "Vormir", "Svartalfheim"],
			"tr": ["Sakaar", "Vormir", "Svartalfheim"]
		}
	},
	"55": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?"
		},
		"right_answer": {
			"ru": "Железный Человек",
			"en": "Iron Man",
			"tr": "Demir Adam"
		},
		"wrong_answers": {
			"ru": ["Звездный лорд", "Альтрон", "Воитель"],
			"en": ["Star-Lord", "Ultron", "War Machine"],
			"tr": ["Yıldız Lordu", "Ultron", "Savaş Makinesi"]
		}
	},
	"56": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?",
		},
		"right_answer": {
			"ru": "Капитан Америка",
			"en": "Captain America",
			"tr": "Kaptan Amerika"
		},
		"wrong_answers": {
			"ru": [
				"Зимний солдат",
				"Воитель",
				"Сокол",
			],
			"en": [
				"Winter Soldier",
				"War Machine",
				"Falcon",
			],
			"tr": [
				"Kış Askeri",
				"Savaş Makinesi",
				"Şahin"
			]
		}
	},
	"57": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?",
		},
		"right_answer": {
			"ru": "Соколиный глаз",
			"en": "Hawkeye",
			"tr": "Hawkeye"
		},
		"wrong_answers": {
			"ru": [
				"Капитан Америка",
				"Ник Фьюри",
				"Фил Колсон",
			],
			"en": [
				"Captain America",
				"Nick Fury",
				"Phil Coulson",
			],
			"tr": [
				"Kaptan Amerika",
				"Nick Fury",
				"Phil Coulson"
			]
		}
	},
	"58": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?",
		},
		"right_answer": {
			"ru": "Халк",
			"en": "Hulk",
			"tr": "Hulk"
		},
		"wrong_answers": {
			"ru": [
				"Существо",
				"Вижн",
				"Мистерио",
			],
			"en": [
				"The Thing",
				"Vision",
				"Mysterio",
			],
			"tr": [
				"Şey",
				"Vision",
				"Mysterio"
			]
		}
	},
	"59": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?",
		},
		"right_answer": {
			"ru": "Черная вдова",
			"en": "Black Widow",
			"tr": "Kara Dul"
		},
		"wrong_answers": {
			"ru": [
				"Оса",
				"Мистик",
				"Джин Грей",
			],
			"en": [
				"Wasp",
				"Mystique",
				"Jean Grey",
			],
			"tr": [
				"Eşek Arısı",
				"Mystique",
				"Jean Grey"
			]
		}
	},
	"60": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?",
		},
		"right_answer": {
			"ru": "Тор",
			"en": "Thor",
			"tr": "Thor"
		},
		"wrong_answers": {
			"ru": [
				"Локи",
				"Один",
				"Хеймдалль",
			],
			"en": [
				"Loki",
				"Odin",
				"Heimdall",
			],
			"tr": [
				"Loki",
				"Odin",
				"Heimdall"
			]
		}
	},
	"61": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?",
		},
		"right_answer": {
			"ru": "Локи",
			"en": "Loki",
			"tr": "Loki"
		},
		"wrong_answers": {
			"ru": [
				"Тор",
				"Мистерио",
				"Доктор Дум",
			],
			"en": [
				"Thor",
				"Mysterio",
				"Doctor Doom",
			],
			"tr": [
				"Thor",
				"Mysterio",
				"Doktor Doom"
			]
		}
	},
	"62": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?",
		},
		"right_answer": {
			"ru": "Ник Фьюри",
			"en": "Nick Fury",
			"tr": "Nick Fury"
		},
		"wrong_answers": {
			"ru": [
				"Красный череп (до мутации)",
				"Фил Колсон",
				"Хэнк Пим",
			],
			"en": [
				"Red Skull (before mutation)",
				"Phil Coulson",
				"Hank Pym",
			],
			"tr": [
				"Kızıl Kafatası (mutasyondan önce)",
				"Phil Coulson",
				"Hank Pym"
			]
		}
	},
		"63": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?"
		},
		"right_answer": {
			"ru": "Фил Колсон",
			"en": "Phil Coulson",
			"tr": "Phil Coulson"
		},
		"wrong_answers": {
			"ru": [
				"Ник Фьюри",
				"Говард Старк",
				"Хэнк Пим",
			],
			"en": [
				"Nick Fury",
				"Howard Stark",
				"Hank Pym",
			],
			"tr": [
				"Nick Fury",
				"Howard Stark",
				"Hank Pym"
			]
		}
	},
	"64": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?"
		},
		"right_answer": {
			"ru": "Зимний солдат",
			"en": "Winter Soldier",
			"tr": "Kış Askeri"
		},
		"wrong_answers": {
			"ru": [
				"Капитан Америка",
				"Сокол",
				"Воитель",
			],
			"en": [
				"Captain America",
				"Falcon",
				"War Machine",
			],
			"tr": [
				"Kaptan Amerika",
				"Şahin",
				"Savaş Makinesi"
			]
		}
	},
	"65": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?"
		},
		"right_answer": {
			"ru": "Сокол",
			"en": "Falcon",
			"tr": "Şahin"
		},
		"wrong_answers": {
			"ru": [
				"Капитан Америка",
				"Воитель",
				"Соколиный глаз",
			],
			"en": [
				"Captain America",
				"War Machine",
				"Hawkeye",
			],
			"tr": [
				"Kaptan Amerika",
				"Savaş Makinesi",
				"Hawkeye"
			]
		}
	},
	"66": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?"
		},
		"right_answer": {
			"ru": "Человек-Паук",
			"en": "Spider-Man",
			"tr": "Örümcek Adam"
		},
		"wrong_answers": {
			"ru": [
				"Дэдпул",
				"Вижн",
				"Человек-Муравей",
			],
			"en": [
				"Deadpool",
				"Vision",
				"Ant-Man",
			],
			"tr": [
				"Deadpool",
				"Vision",
				"Karınca Adam"
			]
		}
	},
	"67": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?"
		},
		"right_answer": {
			"ru": "Человек-Муравей",
			"en": "Ant-Man",
			"tr": "Karınca Adam"
		},
		"wrong_answers": {
			"ru": [
				"Железный Человек",
				"Оса",
				"Красный шершень",
			],
			"en": [
				"Iron Man",
				"Wasp",
				"Red Hornet",
			],
			"tr": [
				"Demir Adam",
				"Eşek Arısı",
				"Kırmızı Eşek Arısı"
			]
		}
	},
	"68": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?"
		},
		"right_answer": {
			"ru": "Оса",
			"en": "Wasp",
			"tr": "Eşek Arısı"
		},
		"wrong_answers": {
			"ru": [
				"Мистик",
				"Джин Грей",
				"Гамора",
			],
			"en": [
				"Mystique",
				"Jean Grey",
				"Gamora",
			],
			"tr": [
				"Mystique",
				"Jean Grey",
				"Gamora"
			]
		}
	},
	"69": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?"
		},
		"right_answer": {
			"ru": "Танос",
			"en": "Thanos",
			"tr": "Thanos"
		},
		"wrong_answers": {
			"ru": [
				"Ронан",
				"Доктор Дум",
				"Суртур",
			],
			"en": [
				"Ronan",
				"Doctor Doom",
				"Surtur",
			],
			"tr": [
				"Ronan",
				"Doktor Doom",
				"Surtur"
			]
		}
	},
	"70": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?"
		},
		"right_answer": {
			"ru": "Ронан",
			"en": "Ronan",
			"tr": "Ronan"
		},
		"wrong_answers": {
			"ru": [
				"Танос",
				"Доктор Дум",
				"Магнето",
			],
			"en": [
				"Thanos",
				"Doctor Doom",
				"Magneto",
			],
			"tr": [
				"Thanos",
				"Doktor Doom",
				"Mıknatıs"
			]
		}
	},
	"71": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?"
		},
		"right_answer": {
			"ru": "Магнето",
			"en": "Magneto",
			"tr": "Mıknatıs"
		},
		"wrong_answers": {
			"ru": [
				"Доктор Дум",
				"Звездный лорд",
				"Железный человек",
			],
			"en": [
				"Doctor Doom",
				"Star-Lord",
				"Iron Man",
			],
			"tr": [
				"Doktor Doom",
				"Yıldız Lordu",
				"Demir Adam"
			]
		}
	},
	"72": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?"
		},
		"right_answer": {
			"ru": "Мистик",
			"en": "Mystique",
			"tr": "Mystique"
		},
		"wrong_answers": {
			"ru": [
				"Роуг",
				"Джин Грей",
				"Шторм",
			],
			"en": [
				"Rogue",
				"Jean Grey",
				"Storm",
			],
			"tr": [
				"Rogue",
				"Jean Grey",
				"Fırtına"
			]
		}
	},
	"73": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?"
		},
		"right_answer": {
			"ru": "Профессор Ксавьер",
			"en": "Professor Xavier",
			"tr": "Profesör Xavier"
		},
		"wrong_answers": {
			"ru": [
				"Эрик Леншерр",
				"Доктор Дум",
				"Вижн",
			],
			"en": [
				"Erik Lensherr",
				"Doctor Doom",
				"Vision",
			],
			"tr": [
				"Erik Lensherr",
				"Doktor Doom",
				"Vision"
			]
		}
	},
	"74": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?"
		},
		"right_answer": {
			"ru": "Ртуть",
			"en": "Quicksilver",
			"tr": "Quicksilver"
		},
		"wrong_answers": {
			"ru": [
				"Флэш",
				"Меркурий",
				"Литий",
			],
			"en": [
				"Flash",
				"Mercury",
				"Lithium",
			],
			"tr": [
				"Flash",
				"Cıva",
				"Lityum"
			]
		}
	},
	"75": {
		"type": 2,
		"question": {
			"ru": "Кто это изображен?",
			"en": "Who is depicted here?",
			"tr": "Burada kim tasvir edilmiştir?"
		},
		"right_answer": {
			"ru": "Джин Грей",
			"en": "Jean Grey",
			"tr": "Jean Grey"
		},
		"wrong_answers": {
			"ru": [
				"Ванда",
				"Небула",
				"Гамора",
			],
			"en": [
				"Wanda",
				"Nebula",
				"Gamora",
			],
			"tr": [
				"Wanda",
				"Nebula",
				"Gamora"
			]
		}
	},

	"76": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Шторм",
	        "en": "Storm",
	        "tr": "Fırtına"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Ванда",
	            "Джин Грей",
	            "Джейн Фостер"
	        ],
	        "en": [
	            "Wanda",
	            "Jean Grey",
	            "Jane Foster"
	        ],
	        "tr": [
	            "Wanda",
	            "Jean Grey",
	            "Jane Foster"
	        ]
	    }
	},
	"77": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Циклоп",
	        "en": "Cyclops",
	        "tr": "Siklop"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Звёздный лорд",
	            "Соколиный глаз",
	            "Мистерио"
	        ],
	        "en": [
	            "Star-Lord",
	            "Hawkeye",
	            "Mysterio"
	        ],
	        "tr": [
	            "Yıldız-Lord",
	            "Şahingöz",
	            "Mysterio"
	        ]
	    }
	},
	"78": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Воитель",
	        "en": "War Machine",
	        "tr": "Savaş Makinesi"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Железный человек",
	            "Альтрон",
	            "Вижн"
	        ],
	        "en": [
	            "Iron Man",
	            "Ultron",
	            "Vision"
	        ],
	        "tr": [
	            "Demir Adam",
	            "Ultron",
	            "Vision"
	        ]
	    }
	},
	"79": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Красный череп",
	        "en": "Red Skull",
	        "tr": "Kızıl Kafatası"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Доктор Дум",
	            "Танос",
	            "Ронан"
	        ],
	        "en": [
	            "Doctor Doom",
	            "Thanos",
	            "Ronan"
	        ],
	        "tr": [
	            "Doktor Doom",
	            "Thanos",
	            "Ronan"
	        ]
	    }
	},
	"80": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Гамора",
	        "en": "Gamora",
	        "tr": "Gamora"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Небула",
	            "Капитан Марвел",
	            "Шури"
	        ],
	        "en": [
	            "Nebula",
	            "Captain Marvel",
	            "Shuri"
	        ],
	        "tr": [
	            "Nebula",
	            "Kaptan Marvel",
	            "Shuri"
	        ]
	    }
	},
	"81": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Небула",
	        "en": "Nebula",
	        "tr": "Nebula"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Гамора",
	            "Ванда",
	            "Шури"
	        ],
	        "en": [
	            "Gamora",
	            "Wanda",
	            "Shuri"
	        ],
	        "tr": [
	            "Gamora",
	            "Wanda",
	            "Shuri"
	        ]
	    }
	},
	"82": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Звёздный лорд",
	        "en": "Star-Lord",
	        "tr": "Yıldız-Lord"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Железный человек",
	            "Сокол",
	            "Воитель"
	        ],
	        "en": [
	            "Iron Man",
	            "Falcon",
	            "War Machine"
	        ],
	        "tr": [
	            "Demir Adam",
	            "Şahin",
	            "Savaş Makinesi"
	        ]
	    }
	},
	"83": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Дракс",
	        "en": "Drax",
	        "tr": "Drax"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Существо",
	            "Грут",
	            "Ракета"
	        ],
	        "en": [
	            "The Thing",
	            "Groot",
	            "Rocket"
	        ],
	        "tr": [
	            "Şey",
	            "Groot",
	            "Roket"
	        ]
	    }
	},
	"84": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Грут",
	        "en": "Groot",
	        "tr": "Groot"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Дракс",
	            "Ронан",
	            "Танос"
	        ],
	        "en": [
	            "Drax",
	            "Ronan",
	            "Thanos"
	        ],
	        "tr": [
	            "Drax",
	            "Ronan",
	            "Thanos"
	        ]
	    }
	},
	"85": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Ракета",
	        "en": "Rocket",
	        "tr": "Roket"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Грут",
	            "Магнето",
	            "Танос"
	        ],
	        "en": [
	            "Groot",
	            "Magneto",
	            "Thanos"
	        ],
	        "tr": [
	            "Groot",
	            "Magneto",
	            "Thanos"
	        ]
	    }
	},


    "86": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Росомаха",
	        "en": "Wolverine",
	        "tr": "Wolverine"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Дракс",
	            "Магнето",
	            "Циклоп"
	        ],
	        "en": [
	            "Drax",
	            "Magneto",
	            "Cyclops"
	        ],
	        "tr": [
	            "Drax",
	            "Magneto",
	            "Cyclops"
	        ]
	    }
	},
	"87": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Шури",
	        "en": "Shuri",
	        "tr": "Shuri"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Небула",
	            "Капитан Марвел",
	            "Гамора"
	        ],
	        "en": [
	            "Nebula",
	            "Captain Marvel",
	            "Gamora"
	        ],
	        "tr": [
	            "Nebula",
	            "Kaptan Marvel",
	            "Gamora"
	        ]
	    }
	},
	"88": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Король Тчалла",
	        "en": "King T'Challa",
	        "tr": "Kral T'Challa"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Циклоп",
	            "Вижн",
	            "Капитан Америка"
	        ],
	        "en": [
	            "Cyclops",
	            "Vision",
	            "Captain America"
	        ],
	        "tr": [
	            "Cyclops",
	            "Vision",
	            "Kaptan Amerika"
	        ]
	    }
	},
	"89": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Алая ведьма",
	        "en": "Scarlet Witch",
	        "tr": "Kızıl Cadı"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Небула",
	            "Капитан Марвел",
	            "Джин Грей"
	        ],
	        "en": [
	            "Nebula",
	            "Captain Marvel",
	            "Jean Grey"
	        ],
	        "tr": [
	            "Nebula",
	            "Kaptan Marvel",
	            "Jean Grey"
	        ]
	    }
	},
	"90": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Вижн",
	        "en": "Vision",
	        "tr": "Vision"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Доктор Стрэндж",
	            "Росомаха",
	            "Коллекционер"
	        ],
	        "en": [
	            "Doctor Strange",
	            "Wolverine",
	            "The Collector"
	        ],
	        "tr": [
	            "Doktor Strange",
	            "Wolverine",
	            "Koleksiyoncu"
	        ]
	    }
	},


    "91": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Альтрон",
	        "en": "Ultron",
	        "tr": "Ultron"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Ронан",
	            "Танос",
	            "Кицилий"
	        ],
	        "en": [
	            "Ronan",
	            "Thanos",
	            "Kaecilius"
	        ],
	        "tr": [
	            "Ronan",
	            "Thanos",
	            "Kaecilius"
	        ]
	    }
	},
	"92": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Доктор Стрэндж",
	        "en": "Doctor Strange",
	        "tr": "Doktor Strange"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Кицилий",
	            "Вижн",
	            "Циклоп"
	        ],
	        "en": [
	            "Kaecilius",
	            "Vision",
	            "Cyclops"
	        ],
	        "tr": [
	            "Kaecilius",
	            "Vision",
	            "Cyclops"
	        ]
	    }
	},
	"93": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Кицилий",
	        "en": "Kaecilius",
	        "tr": "Kaecilius"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Дормамму",
	            "Вижн",
	            "Зимний солдат"
	        ],
	        "en": [
	            "Dormammu",
	            "Vision",
	            "Winter Soldier"
	        ],
	        "tr": [
	            "Dormammu",
	            "Vision",
	            "Kış Askeri"
	        ]
	    }
	},
	"94": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Дормамму",
	        "en": "Dormammu",
	        "tr": "Dormammu"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Кицилий",
	            "Йонду Удонта",
	            "Черная пантера"
	        ],
	        "en": [
	            "Kaecilius",
	            "Yondu Udonta",
	            "Black Panther"
	        ],
	        "tr": [
	            "Kaecilius",
	            "Yondu Udonta",
	            "Kara Panter"
	        ]
	    }
	},
	"95": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Коллекционер",
	        "en": "The Collector",
	        "tr": "Koleksiyoncu"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Йонду Удонта",
	            "Кицилий",
	            "Ртуть"
	        ],
	        "en": [
	            "Yondu Udonta",
	            "Kaecilius",
	            "Quicksilver"
	        ],
	        "tr": [
	            "Yondu Udonta",
	            "Kaecilius",
	            "Quicksilver"
	        ]
	    }
	},


    "96": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Йонду Удонта",
	        "en": "Yondu Udonta",
	        "tr": "Yondu Udonta"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Магнето",
	            "Черная пантера",
	            "Ронан"
	        ],
	        "en": [
	            "Magneto",
	            "Black Panther",
	            "Ronan"
	        ],
	        "tr": [
	            "Magneto",
	            "Kara Panter",
	            "Ronan"
	        ]
	    }
	},
	"97": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Призрак",
	        "en": "Ghost",
	        "tr": "Hayalet"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Оса",
	            "Черная пантера",
	            "Шури"
	        ],
	        "en": [
	            "Wasp",
	            "Black Panther",
	            "Shuri"
	        ],
	        "tr": [
	            "Eşekarısı",
	            "Kara Panter",
	            "Shuri"
	        ]
	    }
	},
	"98": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Капитан Марвел",
	        "en": "Captain Marvel",
	        "tr": "Kaptan Marvel"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Небула",
	            "Гамора",
	            "Шури"
	        ],
	        "en": [
	            "Nebula",
	            "Gamora",
	            "Shuri"
	        ],
	        "tr": [
	            "Nebula",
	            "Gamora",
	            "Shuri"
	        ]
	    }
	},
	"99": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Зверь",
	        "en": "Beast",
	        "tr": "Canavar"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Черная пантера",
	            "Капитан Америка",
	            "Профессор Ксавьер"
	        ],
	        "en": [
	            "Black Panther",
	            "Captain America",
	            "Professor X"
	        ],
	        "tr": [
	            "Kara Panter",
	            "Kaptan Amerika",
	            "Profesör X"
	        ]
	    }
	},
	"100": {
	    "type": 2,
	    "question": {
	        "ru": "Кто это изображен?",
	        "en": "Who is depicted?",
	        "tr": "Kim tasvir edilmiştir?"
	    },
	    "right_answer": {
	        "ru": "Черная пантера",
	        "en": "Black Panther",
	        "tr": "Kara Panter"
	    },
	    "wrong_answers": {
	        "ru": [
	            "Циклоп",
	            "Ртуть",
	            "Призрак"
	        ],
	        "en": [
	            "Cyclops",
	            "Quicksilver",
	            "Ghost"
	        ],
	        "tr": [
	            "Cyclops",
	            "Quicksilver",
	            "Hayalet"
	        ]
	    }
}
	
}

var sorted_questions = [
  '56', '60', '58', '69', '90', '55', '66', '34', '100',
  '84', '17', '68', '86', '61', '98', '92', '99', '67',
  '85', '57', '3',  '80', '50', '64', '79', '91', '23',
  '59', '94', '62', '65', '24', '88', '89', '82', '72',
  '16', '45', '81', '8',  '15', '30', '83', '71', '77',
  '32', '87', '28', '33', '25', '76', '95', '46', '96',
  '5',  '74', '2',  '4',  '20', '26', '18', '41', '54',
  '1',  '53', '97', '78', '47', '63', '93', '21', '27',
  '12', '37', '51', '73', '7',  '39', '10', '36', '70',
  '38', '43', '44', '31', '29', '14', '13', '6',  '19',
  '75', '52', '48', '40', '42', '9',  '49', '22', '11',
  '35'
]

var strike_block_texts = {
    "0": {
        "ru": "Продолжай в том же духе!",
        "en": "Keep up the good work!",
        "tr": "İyi çalışmaya devam et!"
    },
    "1": {
        "ru": "Я чувствую в тебе потенциал!",
        "en": "I sense potential in you!",
        "tr": "Sende potansiyel görüyorum!"
    },
    "3": {
        "ru": "Зачем нужна армия, когда есть такой ты?",
        "en": "Who needs an army when there's someone like you?",
        "tr": "Senin gibi biri varken orduya ne gerek var?"
    },
    "5": {
        "ru": "Ты достоен поднять молот Тора!",
        "en": "You are worthy of lifting Thor's hammer!",
        "tr": "Thor'un çekicini kaldırmaya layıksın!"
    },
    "10": {
        "ru": "Это что, мой будущий напарник?",
        "en": "Is this my future partner?",
        "tr": "Bu benim gelecekteki partnerim mi?"
    },
    "15": {
        "ru": "Ты готов стать Стражем галактики?",
        "en": "Are you ready to become a Guardian of the Galaxy?",
        "tr": "Galaksinin Koruyucusu olmaya hazır mısın?"
    },
    "20": {
        "ru": "Ты как Тессеракт: никогда не знаешь, чем удивит.",
        "en": "You are like the Tesseract: always full of surprises.",
        "tr": "Sen Tesseract gibisin: her zaman sürprizlerle dolusun."
    },
    "30": {
        "ru": "Ты идешь по верному пути!",
        "en": "You are on the right path!",
        "tr": "Doğru yoldasın!"
    },
    "50": {
        "ru": "Такие как ты делают наш мир лучше!",
        "en": "People like you make our world better!",
        "tr": "Senin gibi insanlar dünyamızı daha iyi hale getiriyor!"
    },
    "99": {
        "ru": "Просто ЛУЧШИЙ! (и это ты!)",
        "en": "Simply the BEST! (and that's you!)",
        "tr": "Basitçe EN İYİSİ! (ve bu sensin!)"
    }
}

var make_screenshot = function() {
    console.log('making screen')
}
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 32,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"library/images/storage_atlas_.png", id:"storage_atlas_"},
		{src:"library/images/storage_atlas_2.png", id:"storage_atlas_2"},
		{src:"library/images/storage_atlas_3.png", id:"storage_atlas_3"},
		{src:"library/images/storage_atlas_4.png", id:"storage_atlas_4"},
		{src:"library/images/storage_atlas_5.png", id:"storage_atlas_5"},
		{src:"library/images/storage_atlas_6.png", id:"storage_atlas_6"},
		{src:"library/images/storage_atlas_7.png", id:"storage_atlas_7"},
		{src:"library/images/storage_atlas_8.png", id:"storage_atlas_8"},
		{src:"library/images/storage_atlas_9.png", id:"storage_atlas_9"},
		{src:"library/images/storage_atlas_10.png", id:"storage_atlas_10"},
		{src:"library/images/storage_atlas_11.png", id:"storage_atlas_11"},
		{src:"library/images/storage_atlas_12.png", id:"storage_atlas_12"},
		{src:"library/images/storage_atlas_13.png", id:"storage_atlas_13"},
		{src:"library/images/storage_atlas_14.png", id:"storage_atlas_14"},
		{src:"library/images/storage_atlas_15.png", id:"storage_atlas_15"},
		{src:"library/images/storage_atlas_16.png", id:"storage_atlas_16"},
		{src:"library/images/storage_atlas_17.png", id:"storage_atlas_17"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,0,620,620],[0,622,620,620],[622,622,620,620],[622,0,620,620]]},
		{name:"storage_atlas_5", frames: [[0,622,620,620],[0,0,620,620],[622,622,620,620],[622,0,620,620]]},
		{name:"storage_atlas_6", frames: [[622,622,620,620],[0,0,620,620],[0,622,620,620],[622,0,620,620]]},
		{name:"storage_atlas_7", frames: [[622,0,620,620],[0,622,600,600],[602,622,600,600],[1204,622,596,585],[0,0,620,620]]},
		{name:"storage_atlas_8", frames: [[0,0,597,581],[0,583,1600,200],[502,785,500,500],[1004,785,500,500],[1141,0,500,500],[0,785,500,500],[599,0,540,540]]},
		{name:"storage_atlas_9", frames: [[502,502,500,500],[0,0,500,500],[0,502,500,500],[502,0,500,500],[1004,0,500,500],[1004,502,500,500]]},
		{name:"storage_atlas_10", frames: [[1004,502,500,500],[1004,0,500,500],[502,0,500,500],[0,0,500,500],[502,502,500,500],[0,502,500,500]]},
		{name:"storage_atlas_11", frames: [[1346,502,400,400],[1284,904,400,400],[0,502,500,500],[502,0,500,500],[1004,0,500,500],[0,0,500,500],[502,502,440,440],[944,502,400,400],[642,944,640,280],[0,1004,640,280]]},
		{name:"storage_atlas_12", frames: [[1196,704,500,300],[1196,402,500,300],[804,1006,500,300],[402,0,400,400],[0,0,400,400],[402,804,400,400],[804,0,400,400],[0,402,400,400],[0,804,400,400],[1206,0,400,400],[402,402,400,400],[804,402,390,390]]},
		{name:"storage_atlas_13", frames: [[462,644,460,320],[0,0,500,300],[964,0,460,320],[924,966,460,320],[0,946,460,320],[462,966,460,320],[924,644,460,320],[924,322,460,320],[0,624,460,320],[0,302,460,320],[462,322,460,320],[502,0,460,320]]},
		{name:"storage_atlas_14", frames: [[1438,382,350,350],[352,1026,350,350],[734,734,350,350],[382,322,350,350],[734,382,350,350],[382,674,350,350],[1086,734,350,350],[1438,734,350,350],[0,704,350,350],[1086,382,350,350],[0,1056,340,340],[0,322,380,380],[1386,0,380,380],[924,0,460,320],[0,0,460,320],[462,0,460,320],[704,1086,340,280],[1046,1086,340,280],[1388,1086,340,280]]},
		{name:"storage_atlas_15", frames: [[684,282,340,280],[1026,282,340,280],[1368,282,340,280],[684,564,340,280],[684,846,340,280],[1026,564,340,280],[1368,846,340,280],[1026,846,340,280],[1368,564,340,280],[1026,0,340,280],[342,564,340,280],[1368,0,340,280],[684,0,340,280],[342,846,340,280],[342,0,340,280],[342,282,340,280],[0,564,340,280],[0,282,340,280],[0,0,340,280],[0,846,340,280]]},
		{name:"storage_atlas_16", frames: [[1550,494,190,190],[1248,302,300,300],[946,302,300,300],[1240,1039,120,120],[1362,1039,120,120],[1550,302,190,190],[1240,1234,120,120],[1510,1012,120,120],[342,0,220,413],[1704,686,90,90],[1522,686,180,180],[1484,1134,120,120],[1362,1161,120,120],[1606,1234,120,120],[1484,1256,120,120],[1632,1112,120,120],[946,604,190,190],[1288,957,220,80],[946,955,340,80],[1138,604,186,188],[324,1321,100,73],[1362,1283,99,100],[1515,868,150,142],[1742,302,50,210],[1188,1037,50,297],[1326,604,194,178],[1326,784,187,171],[946,796,187,132],[1138,794,186,159],[644,1208,190,190],[836,1208,190,190],[342,415,300,300],[342,717,300,300],[342,1019,300,300],[644,302,300,300],[866,0,300,300],[564,0,300,300],[1168,0,300,300],[1470,0,300,300],[644,604,300,300],[644,906,300,300],[1028,1139,120,120],[1028,1261,120,120],[1667,868,120,120],[202,1128,120,120],[202,1250,120,120],[1667,990,120,120],[946,1037,240,100],[0,1128,200,200],[0,0,340,280],[0,564,340,280],[0,846,340,280],[0,282,340,280]]},
		{name:"storage_atlas_17", frames: [[431,276,50,50],[186,333,60,24],[431,328,48,48],[62,332,48,48],[463,0,40,55],[463,57,40,43],[215,82,10,11],[82,0,69,94],[372,276,57,60],[124,96,23,38],[463,144,31,31],[62,280,50,50],[235,0,40,147],[186,241,60,90],[401,184,60,90],[124,266,60,90],[339,184,60,90],[62,188,60,90],[0,276,60,90],[248,276,60,90],[310,276,60,90],[0,184,60,90],[277,184,60,90],[401,0,60,90],[124,174,60,90],[339,0,60,90],[153,82,60,90],[339,92,60,90],[62,96,60,90],[401,92,60,90],[215,149,60,90],[0,92,60,90],[277,92,60,90],[153,0,80,80],[277,0,60,90],[463,102,40,40],[0,0,80,90]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.again_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg_popup_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_result_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.completed_ray_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.decor_pocket_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.decor_start_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.decor_title_result_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.genshin_star_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.genshin_star_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero_main_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero_main_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.number_level_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.number_level_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.number_level_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.number_level_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.number_level_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.number_level_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.number_level_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.number_level_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.number_level_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.number_level_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.number_timer_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.number_timer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.number_timer_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.number_timer_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.number_timer_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.number_timer_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.number_timer_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.number_timer_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.number_timer_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.number_timer_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_11_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_12_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_13_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_14_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_15_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_16_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_17_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_18_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_19_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_20_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_21_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_22_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_23_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_24_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_25_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_26_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_27_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_28_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_29_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_30_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_31_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_32_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_33_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_34_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_35_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_36_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_37_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_38_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_39_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_40_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_41_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_42_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_43_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_44_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_45_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_46_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_47_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_48_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_49_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_50_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_substrate_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_substrate_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_substrate_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.puzzle_substrate_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.separator_level_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.separator_timer_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.substrate_level_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.timer_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.tip_puzzle_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_completed_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.title_completed_de_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_completed_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_completed_es_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_completed_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_completed_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_completed_id_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_completed_it_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.title_completed_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.title_completed_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.title_completed_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_completed_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.title_completed_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_result_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.title_result_de_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_result_en_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.title_result_es_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_result_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.title_result_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_result_id_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_result_it_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_result_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_result_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_result_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_result_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_result_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_start_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_start_de_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_start_en_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_start_es_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_start_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_start_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_start_id_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_start_it_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_start_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_start_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.title_start_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_start_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_start_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.window_popup_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.redirect_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.redirect_2_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.redirect_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.redirect_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.redirect_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.redirect_0_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-200,400,400);
p.frameBounds = [rect];


(lib.redirect_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Eh8+Au4MAAAhdvMD59AAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.preloader_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F77EBB").s().p("AiVAAICVhiICWBiIiWBjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F82991").s().p("AkqAAIEqjGIErDGIkrDHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-20,60,40);
p.frameBounds = [rect];


(lib.preloader_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],11.5,20,-14.9,-25.9).s().p("AiOELQh+gFguhRQgvhQA7hsQA7hwCEhMQCBhLB9AEQB9AEAvBRQAvBSg7BrQg6BviDBMQh7BIh4AAIgNAAg");
	this.shape.setTransform(-54,-91.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-4.4,11.6,5.8,-15.6).s().p("AgqB0QhJgNgmgpQgogqATgwQASgwA/gZQBBgaBHANQBKAKAmAqQAmAqgSAuQgTAxg/AYQgtAUgyAAQgTAAgVgDg");
	this.shape_1.setTransform(0.2,-117.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// graph
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.976],-1.6,-202.4,-1.4,65.4).s().p("AsdJ+QlLkIAAl2QAAl1FLkIQFKkIHTAAQHTAAFLEIQFLEIAAF1QAAF2lLEIQlLEInTAAQnTAAlKkIg");
	this.shape_2.setTransform(0.5,-47.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// graph
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(152,172,255,0)","#BFC2FF"],[0,1],0.9,8.8,0.9,75.8).s().p("AtnDnQlXlWgRngQAVFiFTD9QFpEQH+AAQH/AAFpkQQFQj7AYlfQgTHdlVFUQlpFpn/AAQn+AAlplpg");
	this.shape_3.setTransform(0,64.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// graph
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,145,175,0)","#E023A0","rgba(205,24,144,0)"],[0,0.667,1],33.4,-45.3,0,33.4,-45.3,220.8).s().p("AvdPeQmZmagBpEQABpDGZmaQGamZJDgBQJEABGaGZQGZGaABJDQgBJEmZGaQmaGZpEABQpDgBmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// graph
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F252BC","#F87BCE"],[0,1],0,124.2,0,-135.9).s().p("AvdPeQmZmagBpEQABpDGZmaQGamZJDgBQJEABGaGZQGZGaABJDQgBJEmZGaQmaGZpEABQpDgBmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// graph
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("AvcPeQmbmaAApEQAApDGbmZQGZmbJDAAQJEAAGaGbQGZGZAAJDQAAJEmZGaQmaGZpEAAQpDAAmZmZg");
	this.shape_6.setTransform(4.7,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,284.7,284.7);
p.frameBounds = [rect];


(lib.preloader_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E22AA1").ss(12,1,1).p("AjPI5IKCl0QBIgpAdhOQAchOgchMQgchOhJgpIqCl0QhIgqhRAOQhSAPg1A/Qg2BAAABTIAALlQAABSA1BAQA1BABSAOQBRAPBJgpg");
	this.shape.setTransform(4.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#DDDDDD"],[0,1],9.3,-48,-25.7,63.1).s().p("AlpJTQhSgOg1hAQg1hAAAhSIAArlQAAhTA2hAQA1g/BSgPQBRgOBIAqIKCF0QBJApAcBOQAcBMgcBOQgdBOhIApIqCF0Qg1Aeg6AAQgVAAgWgEg");
	this.shape_1.setTransform(4.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.4,-66,122.1,132);
p.frameBounds = [rect];


(lib.preloader_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A07FeQigAAAAihIAAl5QAAihCgAAMAp3AAAQCgAAAAChIAAF5QAAChigAAg");
	this.shape.setTransform(150,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,70);
p.frameBounds = [rect];


(lib.preloader_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("A0TgGIAAhkMAonAAAIAABkQqGBxqKAAQqIAAqPhxg");
	this.shape.setTransform(130,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,260,21.5);
p.frameBounds = [rect];


(lib.preloader_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F77EBB","#F82991"],[0,1],0,17,0,-17).s().p("Ax8CqQhHAAgygyQgygyABhGQgBhFAygyQAygyBHABMAj5AAAQBHgBAyAyQAxAyAABFQAABGgxAyQgyAyhHAAg");
	this.shape.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F77EBB","#F82991"],[0,1],0,-25,0,25).s().p("AyvD5QhTABg6g7Qg6g7AAhTIAAhiQAAhTA6g6QA6g6BTAAMAlfAAAQBTAAA6A6QA6A6ABBTIAABiQgBBTg6A7Qg6A7hTgBg");
	this.shape_1.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,280,50);
p.frameBounds = [rect];


(lib.preloader_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#66CCFF","#6699FF","#66CCFF"],[0,0.494,1],20,15,20,-15).s().p("A0TCVIAAkqMAonAAAIAAEqg");
	this.shape.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,260,30);
p.frameBounds = [rect];


(lib.preloader_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.preloader_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F82991").s().p("AgKDkQgUgHgWgOQhZgygrgmQgygsgdgwQgkg5ABg4QAAhRA/glQApgZAxAAQA5AAAnAZQAcAQAVAgQAVggAdgQQAmgZA6AAQAyAAAoAZQBAAlAABRQAAA4gkA5QgdAwgyAsQgrAmhZAyQgWAOgTAHQgHACgFAAQgFAAgFgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-23,60,46.1);
p.frameBounds = [rect];


(lib.preloader_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F77EBB").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300,1.333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.orientation_lock_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFAtIEQAAQAAjMiRiRQiPiRjPAAQiqAAiABjIk1k0QEBjiFeAAQGAAAEQERQEQERABF/IEHAAInmNIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-88.5,180,177.1);
p.frameBounds = [rect];


(lib.orientation_lock_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhTBUQgkgjABgxQgBgxAkgiQAjgjAwAAQAyAAAiAjQAjAiAAAxQAAAxgjAjQgiAjgyAAQgwAAgjgjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect];


(lib.orientation_lock_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AkgA8QgaAAgRgSQgSgRAAgZQAAgYASgRQARgSAaAAIJBAAQAZAAASASQASARAAAYQAAAZgSARQgSASgZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-6,70,12);
p.frameBounds = [rect];


(lib.orientation_lock_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiwCwQhIhJgBhnQAAgWAFgWQAMhLA4g5QA5g4BLgMQAQgEASAAIAKgBIAOABQBeAEBEBEQBKBKAABmQAABnhKBJQhJBKhnAAQhmAAhKhKgAgKikQg+ADgsAtQgxAxAABDQAAATAEASQAJAuAkAiQAxAxBDAAQBEAAAxgxQAxgxAAhEQAAhDgxgxQgigkgugJQgLgDgMAAIgOgBIgKABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.orientation_lock_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A1FbVMAAAg2pMAqLAAAMAAAA2pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-175,270,350);
p.frameBounds = [rect];


(lib.orientation_lock_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgRzAnEQiVgBhphpQhqhpAAiVMAAAhC3QAAiVBqhpQBphpCVgBMAjnAAAQCVABBpBpQBqBpAACVMAAABC3QAACVhqBpQhpBpiVABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-250,300,500);
p.frameBounds = [rect];


(lib.instruction_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("text", "100px 'Arial'");
	this.text.lineHeight = 114;
	this.text.lineWidth = 317;
	this.text.setTransform(-158.4,-55.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160.4,-57.8,321,115.8);
p.frameBounds = [rect];


(lib.instruction_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300,1.333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.window_popup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.window_popup_img();
	this.instance.setTransform(-170,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-140,340,280);
p.frameBounds = [rect];


(lib.tip_puzzle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.tip_puzzle_img();
	this.instance.setTransform(-80,-80,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.timer_bg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.timer_bg_img();
	this.instance.setTransform(-120,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-50,240,100);
p.frameBounds = [rect];


(lib.puzzle_substrate_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_substrate_4_img();
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,540,540);
p.frameBounds = [rect];


(lib.puzzle_substrate_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_substrate_3_img();
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,440,440);
p.frameBounds = [rect];


(lib.puzzle_substrate_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_substrate_2_img();
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,390,390);
p.frameBounds = [rect];


(lib.puzzle_substrate_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_substrate_1_img();
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,340,340);
p.frameBounds = [rect];


(lib.puzzle_50_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_50_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_49_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_49_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_48_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_48_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_47_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_47_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_46_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_46_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_45_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_45_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_44_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_44_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_43_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_43_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_42_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_42_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_41_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_41_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_40_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_40_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_39_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_39_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_38_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_38_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_37_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_37_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_36_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_36_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_35_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_35_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_34_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_34_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_33_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_33_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_32_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_32_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_31_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_31_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,500);
p.frameBounds = [rect];


(lib.puzzle_30_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_30_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,400,400);
p.frameBounds = [rect];


(lib.puzzle_29_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_29_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,400,400);
p.frameBounds = [rect];


(lib.puzzle_28_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_28_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,400,400);
p.frameBounds = [rect];


(lib.puzzle_27_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_27_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,400,400);
p.frameBounds = [rect];


(lib.puzzle_26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_26_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,400,400);
p.frameBounds = [rect];


(lib.puzzle_25_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_25_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,400,400);
p.frameBounds = [rect];


(lib.puzzle_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_24_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,400,400);
p.frameBounds = [rect];


(lib.puzzle_23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_23_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,400,400);
p.frameBounds = [rect];


(lib.puzzle_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_22_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,400,400);
p.frameBounds = [rect];


(lib.puzzle_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_21_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,400,400);
p.frameBounds = [rect];


(lib.puzzle_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_20_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,350,350);
p.frameBounds = [rect];


(lib.puzzle_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_19_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,350,350);
p.frameBounds = [rect];


(lib.puzzle_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_18_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,350,350);
p.frameBounds = [rect];


(lib.puzzle_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_17_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,350,350);
p.frameBounds = [rect];


(lib.puzzle_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_16_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,350,350);
p.frameBounds = [rect];


(lib.puzzle_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_15_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,350,350);
p.frameBounds = [rect];


(lib.puzzle_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_14_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,350,350);
p.frameBounds = [rect];


(lib.puzzle_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_13_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,350,350);
p.frameBounds = [rect];


(lib.puzzle_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_12_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,350,350);
p.frameBounds = [rect];


(lib.puzzle_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_11_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,350,350);
p.frameBounds = [rect];


(lib.puzzle_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_10_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,300);
p.frameBounds = [rect];


(lib.puzzle_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_9_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,300);
p.frameBounds = [rect];


(lib.puzzle_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_8_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,300);
p.frameBounds = [rect];


(lib.puzzle_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_7_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,300);
p.frameBounds = [rect];


(lib.puzzle_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_6_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,300);
p.frameBounds = [rect];


(lib.puzzle_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_5_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,300);
p.frameBounds = [rect];


(lib.puzzle_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_4_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,300);
p.frameBounds = [rect];


(lib.puzzle_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_3_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,300);
p.frameBounds = [rect];


(lib.puzzle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,300);
p.frameBounds = [rect];


(lib.puzzle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.puzzle_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,300);
p.frameBounds = [rect];


(lib.PiecesPuzzle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 3.0
		*/
		this.gotoAndStop(0);
		/*
		глобальные переменные
		*/
		var _that = this;
		_that.ts_num = 0;
		_that.rs_num = 0;
		_that.bs_num = 0;
		_that.ls_num = 0;
		_that.targetX_num = 0;
		_that.targetY_num = 0;
		/*
		локальные переменные
		*/
		var _thorn_str = "default";
		var _color_str = "#ffffff";
		var _partWidth_num = 100;
		var _partHeight_num = 100;
		var _j_num = 0;
		var _i_num = 0;
		var _stroke_bool = false;
		/*
		рисуем кусочек пазла
		*/
		this.initFunc = function(picture_img, thorn_str, color_str, partWidth_num, partHeight_num, j_num, i_num, ts_num, rs_num, bs_num, ls_num, stroke_bool)
		{
			/*
			
			*/
			if (ts_num !== undefined)
			{
				_that.ts_num = Number(ts_num);
			}
			if (rs_num !== undefined)
			{
				_that.rs_num = Number(rs_num);
			}
			if (bs_num !== undefined)
			{
				_that.bs_num = Number(bs_num);
			}
			if (ls_num !== undefined)
			{
				_that.ls_num = Number(ls_num);
			}
			/*
			
			*/
			if (thorn_str !== undefined)
			{
				_thorn_str = String(thorn_str);
			}
			if (color_str !== undefined)
			{
				_color_str = String(color_str);
			}
			if (partWidth_num !== undefined)
			{
				_partWidth_num = Number(partWidth_num);
			}
			if (partHeight_num !== undefined)
			{
				_partHeight_num = Number(partHeight_num);
			}
			if (j_num !== undefined)
			{
				_j_num = Number(j_num);
			}
			if (i_num !== undefined)
			{
				_i_num = Number(i_num);
			}
			if (stroke_bool !== undefined)
			{
				_stroke_bool = Boolean(stroke_bool);
			}
			/*
			рисуем невидимую подложку для кусочка пазла
			*/
			var hit_shape = new createjs.Shape();
			hit_shape.graphics.beginFill("rgba(0, 0, 0, 0.01)");
			hit_shape.graphics.drawRect(0, 0, _partWidth_num, _partHeight_num);
			hit_shape.graphics.endFill();
			_that.addChild(hit_shape);
			hit_shape.x = 0;
			hit_shape.y = 0;
			/*
			рисуем картинку в кусочке пазла
			*/
			var picture_shape = new createjs.Shape();
			picture_shape.graphics.setStrokeStyle(0).beginStroke(color_str);
			picture_shape.graphics.beginBitmapFill(picture_img, "no-repeat", new createjs.Matrix2D(1, 0, 0, 1, -_partWidth_num * _j_num, -_partHeight_num * _i_num));
			
			_drawFigureFunc(picture_shape, _partWidth_num, _partHeight_num);
			
			picture_shape.graphics.endFill();
			_that.addChild(picture_shape);
			/*
			рисуем обводку для кусочка пазла, если это требуется
			*/
			if (_stroke_bool)
			{
				var stroke_shape = new createjs.Shape();
				stroke_shape.graphics.setStrokeStyle(3, 1, 1).beginStroke(color_str);
				stroke_shape.graphics.beginFill("rgba(0, 0, 0, 0.001)");
				
				_drawFigureFunc(stroke_shape, _partWidth_num, _partHeight_num);
				
				stroke_shape.graphics.endFill();
				_that.addChild(stroke_shape);
			}
		}
		/*
		рисуем отдельный кусочек пазла
		*/
		function _drawFigureFunc(figure_shape, partWidth_num, partHeight_num)
		{
			if (_thorn_str == "studless")
			{
				/*
				_that.ts_num = 0;
				_that.rs_num = 0;
				_that.bs_num = 0;
				_that.ls_num = 0;
				*/
				figure_shape.graphics.moveTo(0, 0);
				figure_shape.graphics.lineTo(partWidth_num, 0);
				figure_shape.graphics.lineTo(partWidth_num, partHeight_num);
				figure_shape.graphics.lineTo(0, partHeight_num);
				figure_shape.graphics.lineTo(0, 0);
			}
			else if (_thorn_str == "square")
			{
				figure_shape.graphics.moveTo(0, 0);
				
				if (_that.ts_num == 0)
				{
					
				}
				else if (_that.ts_num == -1)
				{
					figure_shape.graphics.lineTo(partWidth_num / 3, 0);
					figure_shape.graphics.lineTo(partWidth_num / 3, partHeight_num / 5);
					figure_shape.graphics.lineTo(partWidth_num / 3 * 2, partHeight_num / 5);
					figure_shape.graphics.lineTo(partWidth_num / 3 * 2, 0);
				}
				else if (_that.ts_num == 1)
				{
					figure_shape.graphics.lineTo(partWidth_num / 3, 0);
					figure_shape.graphics.lineTo(partWidth_num / 3, -partHeight_num / 5);
					figure_shape.graphics.lineTo(partWidth_num / 3 * 2, -partHeight_num / 5);
					figure_shape.graphics.lineTo(partWidth_num / 3 * 2, 0);
				}
				
				figure_shape.graphics.lineTo(partWidth_num, 0);
				
				if (_that.rs_num == 0)
				{
					
				}
				else if (_that.rs_num == -1)
				{
					figure_shape.graphics.lineTo(partWidth_num, partHeight_num / 3);
					figure_shape.graphics.lineTo(partWidth_num / 5 * 4, partHeight_num / 3);
					figure_shape.graphics.lineTo(partWidth_num / 5 * 4, partHeight_num / 3 * 2);
					figure_shape.graphics.lineTo(partWidth_num, partHeight_num / 3 * 2);
				}
				else if (_that.rs_num == 1)
				{
					figure_shape.graphics.lineTo(partWidth_num, partHeight_num / 3);
					figure_shape.graphics.lineTo(partWidth_num / 5 * 6, partHeight_num / 3);
					figure_shape.graphics.lineTo(partWidth_num / 5 * 6, partHeight_num / 3 * 2);
					figure_shape.graphics.lineTo(partWidth_num, partHeight_num / 3 * 2);
				}
				
				figure_shape.graphics.lineTo(partWidth_num, partHeight_num);
				
				if (_that.bs_num == 0)
				{
					
				}
				else if (_that.bs_num == -1)
				{
					figure_shape.graphics.lineTo(partWidth_num / 3 * 2, partHeight_num);
					figure_shape.graphics.lineTo(partWidth_num / 3 * 2, partHeight_num / 5 * 4);
					figure_shape.graphics.lineTo(partWidth_num / 3, partHeight_num / 5 * 4);
					figure_shape.graphics.lineTo(partWidth_num / 3, partHeight_num);
				}
				else if (_that.bs_num == 1)
				{
					figure_shape.graphics.lineTo(partWidth_num / 3 * 2, partHeight_num);
					figure_shape.graphics.lineTo(partWidth_num / 3 * 2, partHeight_num / 5 * 6);
					figure_shape.graphics.lineTo(partWidth_num / 3, partHeight_num / 5 * 6);
					figure_shape.graphics.lineTo(partWidth_num / 3, partHeight_num);
				}
				
				figure_shape.graphics.lineTo(0, partHeight_num);
				
				if (_that.ls_num == 0)
				{
					
				}
				else if (_that.ls_num == -1)
				{
					figure_shape.graphics.lineTo(0, partHeight_num / 3 * 2);
					figure_shape.graphics.lineTo(partWidth_num / 5, partHeight_num / 3 * 2);
					figure_shape.graphics.lineTo(partWidth_num / 5, partHeight_num / 3);
					figure_shape.graphics.lineTo(0, partHeight_num / 3);
				}
				else if (_that.ls_num == 1)
				{
					figure_shape.graphics.lineTo(0, partHeight_num / 3 * 2);
					figure_shape.graphics.lineTo(-partWidth_num / 5, partHeight_num / 3 * 2);
					figure_shape.graphics.lineTo(-partWidth_num / 5, partHeight_num / 3);
					figure_shape.graphics.lineTo(0, partHeight_num / 3);
				}
				
				figure_shape.graphics.lineTo(0, 0);
			}
			else if (_thorn_str == "triangle")
			{
				figure_shape.graphics.moveTo(0, 0);
				
				if (_that.ts_num == 0)
				{
					
				}
				else if (_that.ts_num == -1)
				{
					figure_shape.graphics.lineTo(partWidth_num / 3, 0);
					figure_shape.graphics.lineTo(partWidth_num / 2, partHeight_num / 3);
					figure_shape.graphics.lineTo(partWidth_num / 3 * 2, 0);
				}
				else if (_that.ts_num == 1)
				{
					figure_shape.graphics.lineTo(partWidth_num / 3, 0);
					figure_shape.graphics.lineTo(partWidth_num / 2, -partHeight_num / 3);
					figure_shape.graphics.lineTo(partWidth_num / 3 * 2, 0);
				}
				
				figure_shape.graphics.lineTo(partWidth_num, 0);
				
				if (_that.rs_num == 0)
				{
					
				}
				else if (_that.rs_num == -1)
				{
					figure_shape.graphics.lineTo(partWidth_num, partHeight_num / 3);
					figure_shape.graphics.lineTo(partWidth_num / 3 * 2, partHeight_num / 2);
					figure_shape.graphics.lineTo(partWidth_num, partHeight_num / 3 * 2);
				}
				else if (_that.rs_num == 1)
				{
					figure_shape.graphics.lineTo(partWidth_num, partHeight_num / 3);
					figure_shape.graphics.lineTo(partWidth_num / 3 * 4, partHeight_num / 2);
					figure_shape.graphics.lineTo(partWidth_num, partHeight_num / 3 * 2);
				}
				
				figure_shape.graphics.lineTo(partWidth_num, partHeight_num);
				
				if (_that.bs_num == 0)
				{
					
				}
				else if (_that.bs_num == -1)
				{
					figure_shape.graphics.lineTo(partWidth_num / 3 * 2, partHeight_num);
					figure_shape.graphics.lineTo(partWidth_num / 2, partHeight_num / 3 * 2);
					figure_shape.graphics.lineTo(partWidth_num / 3, partHeight_num);
				}
				else if (_that.bs_num == 1)
				{
					figure_shape.graphics.lineTo(partWidth_num / 3 * 2, partHeight_num);
					figure_shape.graphics.lineTo(partWidth_num / 2, partHeight_num / 3 * 4);
					figure_shape.graphics.lineTo(partWidth_num / 3, partHeight_num);
				}
				
				figure_shape.graphics.lineTo(0, partHeight_num);
				
				if (_that.ls_num == 0)
				{
					
				}
				else if (_that.ls_num == -1)
				{
					figure_shape.graphics.lineTo(0, partHeight_num / 3 * 2);
					figure_shape.graphics.lineTo(partWidth_num / 3, partHeight_num / 2);
					figure_shape.graphics.lineTo(0, partHeight_num / 3);
				}
				else if (_that.ls_num == 1)
				{
					figure_shape.graphics.lineTo(0, partHeight_num / 3 * 2);
					figure_shape.graphics.lineTo(-partWidth_num / 3, partHeight_num / 2);
					figure_shape.graphics.lineTo(0, partHeight_num / 3);
				}
				
				figure_shape.graphics.lineTo(0, 0);
			}
			else if (_thorn_str == "mushroom")
			{
				figure_shape.graphics.moveTo(0, 0);
				
				if (_that.ts_num == 0)
				{
					
				}
				else if (_that.ts_num == -1)
				{
					figure_shape.graphics.lineTo(partWidth_num / 5 * 2, 0);
					figure_shape.graphics.lineTo(partWidth_num / 5 * 2, partHeight_num / 10);
					figure_shape.graphics.curveTo(partWidth_num / 4, partHeight_num / 3, partWidth_num / 2, partHeight_num / 3);
					figure_shape.graphics.curveTo(partWidth_num / 4 * 3, partHeight_num / 3, partWidth_num / 5 * 3, partHeight_num / 10);
					figure_shape.graphics.lineTo(partWidth_num / 5 * 3, 0);
				}
				else if (_that.ts_num == 1)
				{
					figure_shape.graphics.lineTo(partWidth_num / 5 * 2, 0);
					figure_shape.graphics.lineTo(partWidth_num / 5 * 2, -partHeight_num / 10);
					figure_shape.graphics.curveTo(partWidth_num / 4, -partHeight_num / 3, partWidth_num / 2, -partHeight_num / 3);
					figure_shape.graphics.curveTo(partWidth_num / 4 * 3, -partHeight_num / 3, partWidth_num / 5 * 3, -partHeight_num / 10);
					figure_shape.graphics.lineTo(partWidth_num / 5 * 3, 0);
				}
				
				figure_shape.graphics.lineTo(partWidth_num, 0);
				
				if (_that.rs_num == 0)
				{
					
				}
				else if (_that.rs_num == -1)
				{
					figure_shape.graphics.lineTo(partWidth_num, partHeight_num / 5 * 2);
					figure_shape.graphics.lineTo(partWidth_num / 10 * 9, partHeight_num / 5 * 2);
					figure_shape.graphics.curveTo(partWidth_num / 3 * 2, partHeight_num / 4, partWidth_num / 3 * 2, partHeight_num / 2);
					figure_shape.graphics.curveTo(partWidth_num / 3 * 2, partHeight_num / 4 * 3, partWidth_num / 10 * 9, partHeight_num / 5 * 3);
					figure_shape.graphics.lineTo(partWidth_num, partHeight_num / 5 * 3);
				}
				else if (_that.rs_num == 1)
				{
					figure_shape.graphics.lineTo(partWidth_num, partHeight_num / 5 * 2);
					figure_shape.graphics.lineTo(partWidth_num / 10 * 11, partHeight_num / 5 * 2);
					figure_shape.graphics.curveTo(partWidth_num / 3 * 4, partHeight_num / 4, partWidth_num / 3 * 4, partHeight_num / 2);
					figure_shape.graphics.curveTo(partWidth_num / 3 * 4, partHeight_num / 4 * 3, partWidth_num / 10 * 11, partHeight_num / 5 * 3);
					figure_shape.graphics.lineTo(partWidth_num, partHeight_num / 5 * 3);
				}
				
				figure_shape.graphics.lineTo(partWidth_num, partHeight_num);
				
				if (_that.bs_num == 0)
				{
					
				}
				else if (_that.bs_num == -1)
				{
					figure_shape.graphics.lineTo(partWidth_num / 5 * 3, partHeight_num);
					figure_shape.graphics.lineTo(partWidth_num / 5 * 3, partHeight_num / 10 * 9);
					figure_shape.graphics.curveTo(partWidth_num / 4 * 3, partHeight_num / 3 * 2, partWidth_num / 2, partHeight_num / 3 * 2);
					figure_shape.graphics.curveTo(partWidth_num / 4, partHeight_num / 3 * 2, partWidth_num / 5 * 2, partHeight_num / 10 * 9);
					figure_shape.graphics.lineTo(partWidth_num / 5 * 2, partHeight_num);
				}
				else if (_that.bs_num == 1)
				{
					figure_shape.graphics.lineTo(partWidth_num / 5 * 3, partHeight_num);
					figure_shape.graphics.lineTo(partWidth_num / 5 * 3, partHeight_num / 10 * 11);
					figure_shape.graphics.curveTo(partWidth_num / 4 * 3, partHeight_num / 3 * 4, partWidth_num / 2, partHeight_num / 3 * 4);
					figure_shape.graphics.curveTo(partWidth_num / 4, partHeight_num / 3 * 4, partWidth_num / 5 * 2, partHeight_num / 10 * 11);
					figure_shape.graphics.lineTo(partWidth_num / 5 * 2, partHeight_num);
				}
				
				figure_shape.graphics.lineTo(0, partHeight_num);
				
				if (_that.ls_num == 0)
				{
					
				}
				else if (_that.ls_num == -1)
				{
					figure_shape.graphics.lineTo(0, partHeight_num / 5 * 3);
					figure_shape.graphics.lineTo(partWidth_num / 10, partHeight_num / 5 * 3);
					figure_shape.graphics.curveTo(partWidth_num / 3, partHeight_num / 4 * 3, partWidth_num / 3, partHeight_num / 2);
					figure_shape.graphics.curveTo(partWidth_num / 3, partHeight_num / 4, partWidth_num / 10, partHeight_num / 5 * 2);
					figure_shape.graphics.lineTo(0, partHeight_num / 5 * 2);
				}
				else if (_that.ls_num == 1)
				{
					figure_shape.graphics.lineTo(0, partHeight_num / 5 * 3);
					figure_shape.graphics.lineTo(-partWidth_num / 10, partHeight_num / 5 * 3);
					figure_shape.graphics.curveTo(-partWidth_num / 3, partHeight_num / 4 * 3, -partWidth_num / 3, partHeight_num / 2);
					figure_shape.graphics.curveTo(-partWidth_num / 3, partHeight_num / 4, -partWidth_num / 10, partHeight_num / 5 * 2);
					figure_shape.graphics.lineTo(0, partHeight_num / 5 * 2);
				}
				
				figure_shape.graphics.lineTo(0, 0);
			}
			else
			{
				figure_shape.graphics.moveTo(0, 0);
				
				if (_that.ts_num == 0)
				{
					
				}
				else if (_that.ts_num == -1)
				{
					figure_shape.graphics.lineTo(partWidth_num / 3, 0);
					figure_shape.graphics.curveTo(partWidth_num / 4, partHeight_num / 3, partWidth_num / 2, partHeight_num / 3);
					figure_shape.graphics.curveTo(partWidth_num / 4 * 3, partHeight_num / 3, partWidth_num / 3 * 2, 0);
				}
				else if (_that.ts_num == 1)
				{
					figure_shape.graphics.lineTo(partWidth_num / 3, 0);
					figure_shape.graphics.curveTo(partWidth_num / 4, -partHeight_num / 3, partWidth_num / 2, -partHeight_num / 3);
					figure_shape.graphics.curveTo(partWidth_num / 4 * 3, -partHeight_num / 3, partWidth_num / 3 * 2, 0);
				}
				
				figure_shape.graphics.lineTo(partWidth_num, 0);
				
				if (_that.rs_num == 0)
				{
					
				}
				else if (_that.rs_num == -1)
				{
					figure_shape.graphics.lineTo(partWidth_num, partHeight_num / 3);
					figure_shape.graphics.curveTo(partWidth_num / 3 * 2, partHeight_num / 4, partWidth_num / 3 * 2, partHeight_num / 2);
					figure_shape.graphics.curveTo(partWidth_num / 3 * 2, partHeight_num / 4 * 3, partWidth_num, partHeight_num / 3 * 2);
				}
				else if (_that.rs_num == 1)
				{
					figure_shape.graphics.lineTo(partWidth_num, partHeight_num / 3);
					figure_shape.graphics.curveTo(partWidth_num / 3 * 4, partHeight_num / 4, partWidth_num / 3 * 4, partHeight_num / 2);
					figure_shape.graphics.curveTo(partWidth_num / 3 * 4, partHeight_num / 4 * 3, partWidth_num, partHeight_num / 3 * 2);
				}
				
				figure_shape.graphics.lineTo(partWidth_num, partHeight_num);
				
				if (_that.bs_num == 0)
				{
					
				}
				else if (_that.bs_num == -1)
				{
					figure_shape.graphics.lineTo(partWidth_num / 3 * 2, partHeight_num);
					figure_shape.graphics.curveTo(partWidth_num / 4 * 3, partHeight_num / 3 * 2, partWidth_num / 2, partHeight_num / 3 * 2);
					figure_shape.graphics.curveTo(partWidth_num / 4, partHeight_num / 3 * 2, partWidth_num / 3, partHeight_num);
				}
				else if (_that.bs_num == 1)
				{
					figure_shape.graphics.lineTo(partWidth_num / 3 * 2, partHeight_num);
					figure_shape.graphics.curveTo(partWidth_num / 4 * 3, partHeight_num / 3 * 4, partWidth_num / 2, partHeight_num / 3 * 4);
					figure_shape.graphics.curveTo(partWidth_num / 4, partHeight_num / 3 * 4, partWidth_num / 3, partHeight_num);
				}
				
				figure_shape.graphics.lineTo(0, partHeight_num);
				
				if (_that.ls_num == 0)
				{
					
				}
				else if (_that.ls_num == -1)
				{
					figure_shape.graphics.lineTo(0, partHeight_num / 3 * 2);
					figure_shape.graphics.curveTo(partWidth_num / 3, partHeight_num / 4 * 3, partWidth_num / 3, partHeight_num / 2);
					figure_shape.graphics.curveTo(partWidth_num / 3, partHeight_num / 4, 0, partHeight_num / 3);
				}
				else if (_that.ls_num == 1)
				{
					figure_shape.graphics.lineTo(0, partHeight_num / 3 * 2);
					figure_shape.graphics.curveTo(-partWidth_num / 3, partHeight_num / 4 * 3, -partWidth_num / 3, partHeight_num / 2);
					figure_shape.graphics.curveTo(-partWidth_num / 3, partHeight_num / 4, 0, partHeight_num / 3);
				}
				
				figure_shape.graphics.lineTo(0, 0);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,200);
p.frameBounds = [rect];


(lib.hero_main_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_main_2_img();
	this.instance.setTransform(-298.5,-290.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-298.5,-290.5,597,581);
p.frameBounds = [rect];


(lib.hero_main_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_main_1_img();
	this.instance.setTransform(-298,-292.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-298,-292.5,596,585);
p.frameBounds = [rect];


(lib.decor_start_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_start_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.decor_pocket_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_pocket_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,220,413);
p.frameBounds = [rect];


(lib.completed_ray_light_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.completed_ray_light_1_img();
	this.instance.setTransform(-300,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-300,600,600);
p.frameBounds = [rect];


(lib.body_title_result_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// decor
	this.instance = new lib.decor_title_result_img();
	this.instance.setTransform(90,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.89,scaleY:0.89,x:105,y:55},0).wait(2).to({scaleX:1,scaleY:1,x:85,y:50},0).wait(1).to({x:90},0).wait(1).to({x:85},0).wait(2).to({scaleX:0.89,scaleY:0.89,x:110,y:65},0).to({_off:true},1).wait(1).to({_off:false,x:105,y:55},0).wait(1).to({y:65},0).to({_off:true},1).wait(1).to({_off:false,scaleX:1,scaleY:1,x:90,y:50},0).wait(1));

	// graph
	this.instance_1 = new lib.title_result_en_img();
	this.instance_1.setTransform(-310,-310);

	this.instance_2 = new lib.title_result_ru_img();
	this.instance_2.setTransform(-310,-310);

	this.instance_3 = new lib.title_result_de_img();
	this.instance_3.setTransform(-310,-310);

	this.instance_4 = new lib.title_result_fr_img();
	this.instance_4.setTransform(-310,-315);

	this.instance_5 = new lib.title_result_it_img();
	this.instance_5.setTransform(-310,-315);

	this.instance_6 = new lib.title_result_es_img();
	this.instance_6.setTransform(-310,-315);

	this.instance_7 = new lib.title_result_pt_img();
	this.instance_7.setTransform(-310,-315);

	this.instance_8 = new lib.title_result_tr_img();
	this.instance_8.setTransform(-310,-315);

	this.instance_9 = new lib.title_result_ja_img();
	this.instance_9.setTransform(-310,-310);

	this.instance_10 = new lib.title_result_hi_img();
	this.instance_10.setTransform(-310,-315);

	this.instance_11 = new lib.title_result_ar_img();
	this.instance_11.setTransform(-310,-310);

	this.instance_12 = new lib.title_result_id_img();
	this.instance_12.setTransform(-310,-315);

	this.instance_13 = new lib.title_result_zh_img();
	this.instance_13.setTransform(-310,-310);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).wait(1));

	// bg
	this.instance_14 = new lib.bg_title_result_img();
	this.instance_14.setTransform(-310,-310);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-310,-310,620,620);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-310,-315,620,625), rect, rect, rect, rect, new cjs.Rectangle(-310,-310,620,620), new cjs.Rectangle(-310,-315,620,625), new cjs.Rectangle(-310,-310,620,620), new cjs.Rectangle(-310,-315,620,625), new cjs.Rectangle(-310,-310,620,620)];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-230,-160);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-230,-160);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-230,-160);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-230,-160);

	this.instance_4 = new lib.title_it_img();
	this.instance_4.setTransform(-230,-160);

	this.instance_5 = new lib.title_es_img();
	this.instance_5.setTransform(-230,-160);

	this.instance_6 = new lib.title_pt_img();
	this.instance_6.setTransform(-230,-160);

	this.instance_7 = new lib.title_tr_img();
	this.instance_7.setTransform(-230,-160);

	this.instance_8 = new lib.title_ja_img();
	this.instance_8.setTransform(-230,-160);

	this.instance_9 = new lib.title_hi_img();
	this.instance_9.setTransform(-230,-160);

	this.instance_10 = new lib.title_ar_img();
	this.instance_10.setTransform(-230,-160);

	this.instance_11 = new lib.title_id_img();
	this.instance_11.setTransform(-230,-160);

	this.instance_12 = new lib.title_zh_img();
	this.instance_12.setTransform(-230,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-160,460,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_completed_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_completed_en_img();
	this.instance.setTransform(-170,-140);

	this.instance_1 = new lib.title_completed_ru_img();
	this.instance_1.setTransform(-170,-140);

	this.instance_2 = new lib.title_completed_de_img();
	this.instance_2.setTransform(-170,-140);

	this.instance_3 = new lib.title_completed_fr_img();
	this.instance_3.setTransform(-170,-140);

	this.instance_4 = new lib.title_completed_it_img();
	this.instance_4.setTransform(-170,-140);

	this.instance_5 = new lib.title_completed_es_img();
	this.instance_5.setTransform(-170,-140);

	this.instance_6 = new lib.title_completed_pt_img();
	this.instance_6.setTransform(-170,-140);

	this.instance_7 = new lib.title_completed_tr_img();
	this.instance_7.setTransform(-170,-140);

	this.instance_8 = new lib.title_completed_ja_img();
	this.instance_8.setTransform(-170,-140);

	this.instance_9 = new lib.title_completed_hi_img();
	this.instance_9.setTransform(-170,-140);

	this.instance_10 = new lib.title_completed_ar_img();
	this.instance_10.setTransform(-170,-140);

	this.instance_11 = new lib.title_completed_id_img();
	this.instance_11.setTransform(-170,-140);

	this.instance_12 = new lib.title_completed_zh_img();
	this.instance_12.setTransform(-170,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-140,340,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-230,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-160,460,320);
p.frameBounds = [rect];


(lib.bg_popup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_popup_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.area_pocket_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("EgRLAg0MAAAhBnMAiWAAAMAAABBng");
	this.shape.setTransform(110,210);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,220,420);
p.frameBounds = [rect];


(lib.curtain_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_3_img();
	this.instance.setTransform(-300,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-300,600,600);
p.frameBounds = [rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(400,300,1.333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.copyright_body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// text
	this.instance = new lib.copyright_title_en_img();
	this.instance.setTransform(-250,-150);

	this.instance_1 = new lib.copyright_title_ru_img();
	this.instance_1.setTransform(-250,-150);

	this.instance_2 = new lib.copyright_title_tr_img();
	this.instance_2.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.copyright_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.copyright_1_img();
	this.instance.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect];


(lib.copyright_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Eh8+Au4MAAAhdvMD59AAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.simple_timer_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.separator_timer_img();
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.simple_timer_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// numbers
	this.instance = new lib.number_timer_0_img();
	this.instance.setTransform(-30,-45);

	this.instance_1 = new lib.number_timer_1_img();
	this.instance_1.setTransform(-30,-45);

	this.instance_2 = new lib.number_timer_2_img();
	this.instance_2.setTransform(-30,-45);

	this.instance_3 = new lib.number_timer_3_img();
	this.instance_3.setTransform(-30,-45);

	this.instance_4 = new lib.number_timer_4_img();
	this.instance_4.setTransform(-30,-45);

	this.instance_5 = new lib.number_timer_5_img();
	this.instance_5.setTransform(-30,-45);

	this.instance_6 = new lib.number_timer_6_img();
	this.instance_6.setTransform(-30,-45);

	this.instance_7 = new lib.number_timer_7_img();
	this.instance_7.setTransform(-30,-45);

	this.instance_8 = new lib.number_timer_8_img();
	this.instance_8.setTransform(-30,-45);

	this.instance_9 = new lib.number_timer_9_img();
	this.instance_9.setTransform(-30,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-45,60,90);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.simple_level_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// numbers
	this.instance = new lib.number_level_0_img();
	this.instance.setTransform(-30,-45);

	this.instance_1 = new lib.number_level_1_img();
	this.instance_1.setTransform(-30,-45);

	this.instance_2 = new lib.number_level_2_img();
	this.instance_2.setTransform(-30,-45);

	this.instance_3 = new lib.number_level_3_img();
	this.instance_3.setTransform(-30,-45);

	this.instance_4 = new lib.number_level_4_img();
	this.instance_4.setTransform(-30,-45);

	this.instance_5 = new lib.number_level_5_img();
	this.instance_5.setTransform(-30,-45);

	this.instance_6 = new lib.number_level_6_img();
	this.instance_6.setTransform(-30,-45);

	this.instance_7 = new lib.number_level_7_img();
	this.instance_7.setTransform(-30,-45);

	this.instance_8 = new lib.number_level_8_img();
	this.instance_8.setTransform(-30,-45);

	this.instance_9 = new lib.number_level_9_img();
	this.instance_9.setTransform(-30,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

	// substrate
	this.instance_10 = new lib.substrate_level_img();
	this.instance_10.setTransform(-40,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-45,80,90);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.simple_level_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// numbers
	this.instance = new lib.number_level_0_img();
	this.instance.setTransform(-30,-45);

	this.instance_1 = new lib.number_level_1_img();
	this.instance_1.setTransform(-30,-45);

	this.instance_2 = new lib.number_level_2_img();
	this.instance_2.setTransform(-30,-45);

	this.instance_3 = new lib.number_level_3_img();
	this.instance_3.setTransform(-30,-45);

	this.instance_4 = new lib.number_level_4_img();
	this.instance_4.setTransform(-30,-45);

	this.instance_5 = new lib.number_level_5_img();
	this.instance_5.setTransform(-30,-45);

	this.instance_6 = new lib.number_level_6_img();
	this.instance_6.setTransform(-30,-45);

	this.instance_7 = new lib.number_level_7_img();
	this.instance_7.setTransform(-30,-45);

	this.instance_8 = new lib.number_level_8_img();
	this.instance_8.setTransform(-30,-45);

	this.instance_9 = new lib.number_level_9_img();
	this.instance_9.setTransform(-30,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

	// substrate
	this.instance_10 = new lib.substrate_level_img();
	this.instance_10.setTransform(-40,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-45,80,90);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.separator_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.separator_level_img();
	this.instance.setTransform(-30,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-45,60,90);
p.frameBounds = [rect];


(lib.ParticleGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_explosion_1_img();
	this.instance.setTransform(-18,-18,0.75,0.75);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-16,-16,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, new cjs.Rectangle(-16,-16,32,32)];


(lib.genshin_star_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.genshin_star_2_img();
	this.instance.setTransform(-30,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-12,60,24);
p.frameBounds = [rect];


(lib.genshin_star_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.genshin_star_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.bubble_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(600,275,1,0.917);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,550);
p.frameBounds = [rect];


(lib.blinking_light_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_img();
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.sound_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.sound_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.social_network_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{vk:0,fb:1,youtube:2,twitter:3});

	// graph
	this.instance = new lib.social_network_1_img();
	this.instance.setTransform(-60,-60);

	this.instance_1 = new lib.social_network_2_img();
	this.instance_1.setTransform(-60,-60);

	this.instance_2 = new lib.social_network_3_img();
	this.instance_2.setTransform(-60,-60);

	this.instance_3 = new lib.social_network_4_img();
	this.instance_3.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect];


(lib.remove_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// bg
	this.instance = new lib.remove_1_img();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, null];


(lib.play_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.photo_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.more_games_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_19_img();
	this.instance.setTransform(-0.4,-0.2,0.26,0.26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.4,-0.2,8.1,8);
p.frameBounds = [rect];


(lib.more_games_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_18_img();
	this.instance.setTransform(0,0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0.1,16.6,27.4);
p.frameBounds = [rect];


(lib.more_games_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_17_img();
	this.instance.setTransform(-0.1,-0.1,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.1,-0.1,23.8,24);
p.frameBounds = [rect];


(lib.more_games_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,50,50);
p.frameBounds = [rect];


(lib.more_games_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_16_img();
	this.instance.setTransform(2.7,-7.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(2.7,-7.5,41.1,43.2);
p.frameBounds = [rect];


(lib.more_games_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_6_img();
	this.instance.setTransform(-69.8,-64.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.8,-64.1,139.7,128.2);
p.frameBounds = [rect];


(lib.more_games_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_15_img();
	this.instance.setTransform(0,0,0.822,0.822);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,82.2,60);
p.frameBounds = [rect];


(lib.more_games_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_14_img();
	this.instance.setTransform(0.3,0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.3,0.1,49.7,67.7);
p.frameBounds = [rect];


(lib.more_games_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_13_img();
	this.instance.setTransform(0.1,-0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.1,-0.1,7.2,7.9);
p.frameBounds = [rect];


(lib.more_games_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_10_img();
	this.instance.setTransform(0,1.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,1.5,133.9,135.4);
p.frameBounds = [rect];


(lib.more_games_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_9_img();
	this.instance.setTransform(0.1,-0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.1,-0.1,133.9,114.5);
p.frameBounds = [rect];


(lib.more_games_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_8_img();
	this.instance.setTransform(-0.1,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.1,0,134.7,95.1);
p.frameBounds = [rect];


(lib.more_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_7_img();
	this.instance.setTransform(-0.3,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.3,0,134.7,123.1);
p.frameBounds = [rect];


(lib.logotype_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logotype_img();
	this.instance.setTransform(-170,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4CGPQihABAAigIAAnfQAAigChABMAwFAAAQChgBAACgIAAHfQAACgihgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-40,340,80);
p.frameBounds = [rect];


(lib.logo_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_1_img();
	this.instance.setTransform(-110,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At5GPQhWABg+g+Qg9g9AAhYIAAl5QAAhYA9g9QA+g+BWABIbzAAQBWgBA+A+QA9A9AABYIAAF5QAABYg9A9Qg+A+hWgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-40,220,80);
p.frameBounds = [rect];


(lib.instruction_1_mc_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.full_screen_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.full_screen_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.full_screen_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.full_screen_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.free_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.free_games_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.Cursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Aj2D3QhnhnAAiQQAAiPBnhnQBnhnCPAAQCQAABnBnQBnBnAACPQAACQhnBnQhnBniQAAQiPAAhnhng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect];


(lib.credits_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.bg_small_buttons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_small_buttons_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.bg_large_buttons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_large_buttons_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.beam_light_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0.024,0.494,0.984],-75.1,0,74.9,0).s().p("EgLsAnEMAAAhOHIXZAAMAAABOHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-250,150,500);
p.frameBounds = [rect];


(lib.banner_play_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.banner_play_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.banner_play_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.banner_play_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.again_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.again_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.body_title_antiblocking_ads_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_antiblocking_ads_en_img();
	this.instance.setTransform(-320,-140);

	this.instance_1 = new lib.title_antiblocking_ads_ru_img();
	this.instance_1.setTransform(-320,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-320,-140,640,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.antiblocking_ads_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300,1.35,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAdedIgdgkIgcAkI9OAAMAAAg85MA7VAAAMAAAA85g");
	mask.setTransform(0,5);

	// image_1
	this.instance = new lib.redirect_4_mc();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({alpha:0.012},15).to({_off:true},1).wait(149).to({_off:false,scaleX:0.5,scaleY:0.5,x:95,y:95},0).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},15).wait(1));

	// image_2
	this.instance_1 = new lib.redirect_5_mc();
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(55).to({alpha:0.012},15).to({_off:true},1).wait(39).to({_off:false,scaleX:0.5,scaleY:0.5,x:-95,y:-95},0).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},15).wait(56));

	// image_1
	this.instance_2 = new lib.redirect_4_mc();
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).wait(70).to({_off:true},1).wait(55));

	// bg
	this.instance_3 = new lib.redirect_3_mc();
	this.instance_3.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(220));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggyAlgMAAAhK/MBBlAAAMAAABK/g");
	this.shape.setTransform(0,50,1,1.083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,520);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.preloader_13_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.25,scaleY:1.25,x:-10},5).to({x:10},10).to({scaleX:1,scaleY:1,x:0},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.4,-66,122.1,132);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-61.2,-69.3,128.2,138.6), new cjs.Rectangle(-66,-72.6,134.3,145.1), new cjs.Rectangle(-70.8,-75.9,140.4,151.8), new cjs.Rectangle(-75.7,-79.2,146.5,158.4), new cjs.Rectangle(-80.5,-82.5,152.7,165), new cjs.Rectangle(-78.4,-82.5,152.6,165), new cjs.Rectangle(-76.4,-82.5,152.6,165), new cjs.Rectangle(-74.4,-82.5,152.6,165), new cjs.Rectangle(-72.4,-82.5,152.6,165), new cjs.Rectangle(-70.5,-82.5,152.6,165), new cjs.Rectangle(-68.5,-82.5,152.6,165), new cjs.Rectangle(-66.5,-82.5,152.6,165), new cjs.Rectangle(-64.5,-82.5,152.6,165), new cjs.Rectangle(-62.5,-82.5,152.6,165), new cjs.Rectangle(-60.5,-82.5,152.7,165), new cjs.Rectangle(-59.7,-79.2,146.5,158.4), new cjs.Rectangle(-58.9,-75.9,140.4,151.8), new cjs.Rectangle(-58.1,-72.6,134.3,145.1), new cjs.Rectangle(-57.2,-69.3,128.2,138.6), rect=new cjs.Rectangle(-56.4,-66,122.1,132), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.preloader_16_mc();
	this.instance.setTransform(8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.preloader_15_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,284.7,284.7);
p.frameBounds = [rect];


(lib.preloader_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_14_mc();
	this.instance.setTransform(0,0.1,0.462,0.462,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AntHuQjOjNAAkhQAAkgDOjOQAygyA5gmQCph1DZAAQDaAACqB1QA4AmAzAyQDMDOABEgQgBEhjMDNQjODOkhAAQkgAAjNjOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7J8QkHkIgBl0QABlzEHkIQBChBBHgxQDbiWEXAAQEYAADbCWQBIAxBBBBQEIEIAAFzQAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.preloader_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// decor
	this.instance = new lib.preloader_18_mc();
	this.instance.setTransform(130,32,0.4,0.4);

	this.instance_1 = new lib.preloader_18_mc();
	this.instance_1.setTransform(130,-2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(100));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAVCVIgVgYIgUAYIxtAAQg7gBgqgrQgrgqgCg8IAAgFQACg8ArgqQAqgrA7gCIRtAAIAUAaIAVgaIRtAAQA7ACArArQAqAqACA8IAAAFQgCA8gqAqQgrArg7ABg");
	mask.setTransform(130,15);

	// shadow
	this.instance_2 = new lib.preloader_10_mc();

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// animation
	this.instance_3 = new lib.preloader_7_mc();
	this.instance_3.setTransform(0,0,0.003,1);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1},99).wait(1));

	// bg
	this.instance_4 = new lib.preloader_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

	// shadow
	this.instance_5 = new lib.preloader_11_mc();
	this.instance_5.setTransform(-20,-20);
	this.instance_5.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,70);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_2_mc();
	this.instance.setTransform(-525,0);

	this.instance_1 = new lib.preloader_2_mc();
	this.instance_1.setTransform(-455,0);

	this.instance_2 = new lib.preloader_2_mc();
	this.instance_2.setTransform(-385,0);

	this.instance_3 = new lib.preloader_2_mc();
	this.instance_3.setTransform(-315,0);

	this.instance_4 = new lib.preloader_2_mc();
	this.instance_4.setTransform(-245,0);

	this.instance_5 = new lib.preloader_2_mc();
	this.instance_5.setTransform(-105.5,0);

	this.instance_6 = new lib.preloader_2_mc();
	this.instance_6.setTransform(-175,0);

	this.instance_7 = new lib.preloader_2_mc();
	this.instance_7.setTransform(525,0);

	this.instance_8 = new lib.preloader_2_mc();
	this.instance_8.setTransform(455,0);

	this.instance_9 = new lib.preloader_2_mc();
	this.instance_9.setTransform(385,0);

	this.instance_10 = new lib.preloader_2_mc();
	this.instance_10.setTransform(315,0);

	this.instance_11 = new lib.preloader_2_mc();
	this.instance_11.setTransform(245,0);

	this.instance_12 = new lib.preloader_2_mc();
	this.instance_12.setTransform(175,0);

	this.instance_13 = new lib.preloader_2_mc();
	this.instance_13.setTransform(105,0);

	this.instance_14 = new lib.preloader_2_mc();
	this.instance_14.setTransform(35,0);

	this.instance_15 = new lib.preloader_2_mc();
	this.instance_15.setTransform(-35,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-555,-23,1110,46.1);
p.frameBounds = [rect];


(lib.preloader_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_2_mc();
	this.instance.setTransform(-560,0);

	this.instance_1 = new lib.preloader_2_mc();
	this.instance_1.setTransform(-490,0);

	this.instance_2 = new lib.preloader_2_mc();
	this.instance_2.setTransform(-420,0);

	this.instance_3 = new lib.preloader_2_mc();
	this.instance_3.setTransform(-350,0);

	this.instance_4 = new lib.preloader_2_mc();
	this.instance_4.setTransform(-280,0);

	this.instance_5 = new lib.preloader_2_mc();
	this.instance_5.setTransform(-210,0);

	this.instance_6 = new lib.preloader_2_mc();
	this.instance_6.setTransform(-140,0);

	this.instance_7 = new lib.preloader_2_mc();
	this.instance_7.setTransform(-70,0);

	this.instance_8 = new lib.preloader_2_mc();
	this.instance_8.setTransform(560,0);

	this.instance_9 = new lib.preloader_2_mc();
	this.instance_9.setTransform(490,0);

	this.instance_10 = new lib.preloader_2_mc();
	this.instance_10.setTransform(420,0);

	this.instance_11 = new lib.preloader_2_mc();
	this.instance_11.setTransform(350,0);

	this.instance_12 = new lib.preloader_2_mc();
	this.instance_12.setTransform(280,0);

	this.instance_13 = new lib.preloader_2_mc();
	this.instance_13.setTransform(210,0);

	this.instance_14 = new lib.preloader_2_mc();
	this.instance_14.setTransform(140,0);

	this.instance_15 = new lib.preloader_2_mc();
	this.instance_15.setTransform(70,0);

	this.instance_16 = new lib.preloader_2_mc();
	this.instance_16.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-590,-23,1180,46.1);
p.frameBounds = [rect];


(lib.preloader_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_4_mc();
	this.instance.setTransform(400,50);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.preloader_4_mc();
	this.instance_1.setTransform(400,550);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.preloader_3_mc();
	this.instance_2.setTransform(400,500);
	this.instance_2.alpha = 0.148;

	this.instance_3 = new lib.preloader_3_mc();
	this.instance_3.setTransform(400,100);
	this.instance_3.alpha = 0.148;

	this.instance_4 = new lib.preloader_4_mc();
	this.instance_4.setTransform(400,450);
	this.instance_4.alpha = 0.102;

	this.instance_5 = new lib.preloader_4_mc();
	this.instance_5.setTransform(400,150);
	this.instance_5.alpha = 0.102;

	this.instance_6 = new lib.preloader_3_mc();
	this.instance_6.setTransform(400,400);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.preloader_3_mc();
	this.instance_7.setTransform(400,200);
	this.instance_7.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_8 = new lib.preloader_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.orientation_lock_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_8_mc();
	this.instance.setTransform(60,0);

	this.instance_1 = new lib.orientation_lock_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-12,107,24);
p.frameBounds = [rect];


(lib.title_result_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_result_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-309.5,-309.5,620,620);
p.frameBounds = [rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_title_mc();
	this.instance.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-160.5,460,320.5);
p.frameBounds = [rect];


(lib.title_completed_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_completed_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// decor
	this.instance = new lib.window_popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-140,340,280);
p.frameBounds = [rect];


(lib.tip_puzzle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.tip_puzzle_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({scaleX:0.63,scaleY:0.63},0).to({scaleX:1,scaleY:1,alpha:1},5).to({x:260},20).to({scaleX:0.63,scaleY:0.63,alpha:0.012},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-50,-50,100,100), new cjs.Rectangle(-55.9,-55.9,112,112), new cjs.Rectangle(-61.9,-61.9,124,124), new cjs.Rectangle(-67.9,-67.9,136,136), new cjs.Rectangle(-73.9,-73.9,148,148), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-67,-80,160,160), new cjs.Rectangle(-54,-80,160,160), new cjs.Rectangle(-41,-80,160,160), new cjs.Rectangle(-28,-80,160,160), new cjs.Rectangle(-15,-80,160,160), new cjs.Rectangle(-2,-80,160,160), new cjs.Rectangle(11,-80,160,160), new cjs.Rectangle(24,-80,160,160), new cjs.Rectangle(37,-80,160,160), new cjs.Rectangle(50,-80,160,160), new cjs.Rectangle(63,-80,160,160), new cjs.Rectangle(76,-80,160,160), new cjs.Rectangle(89,-80,160,160), new cjs.Rectangle(102,-80,160,160), new cjs.Rectangle(115,-80,160,160), new cjs.Rectangle(128,-80,160,160), new cjs.Rectangle(141,-80,160,160), new cjs.Rectangle(154,-80,160,160), new cjs.Rectangle(167,-80,160,160), new cjs.Rectangle(180,-80,160,160), new cjs.Rectangle(186,-74,148,148), new cjs.Rectangle(192,-68,136,136), new cjs.Rectangle(198,-61.9,124,124), new cjs.Rectangle(204,-55.9,112,112), new cjs.Rectangle(210,-50,100,100)];


(lib.pocket_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_pocket_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.area_mc = new lib.area_pocket_mc();

	this.timeline.addTween(cjs.Tween.get(this.area_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,220,420);
p.frameBounds = [rect];


(lib.panel_50_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_50_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_49_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_49_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_48_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_48_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_47_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_47_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_46_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_46_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_45_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_45_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_44_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_44_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_43_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_43_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_42_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_42_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_41_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_41_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_40_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_40_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_39_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_39_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_38_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_38_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_37_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_37_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_36_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_36_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_35_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_35_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_34_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_34_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_33_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_33_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_32_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_32_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_31_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_31_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-20,770,540);
p.frameBounds = [rect];


(lib.panel_30_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-330,-20);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_30_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-20,750,440);
p.frameBounds = [rect];


(lib.panel_29_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-330,-20);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_29_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-20,750,440);
p.frameBounds = [rect];


(lib.panel_28_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-330,-20);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_28_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-20,750,440);
p.frameBounds = [rect];


(lib.panel_27_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-330,-20);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_27_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-20,750,440);
p.frameBounds = [rect];


(lib.panel_26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-330,-20);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_26_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-20,750,440);
p.frameBounds = [rect];


(lib.panel_25_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-330,-20);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_25_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-20,750,440);
p.frameBounds = [rect];


(lib.panel_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-330,-20);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_24_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-20,750,440);
p.frameBounds = [rect];


(lib.panel_23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-330,-20);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_23_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-20,750,440);
p.frameBounds = [rect];


(lib.panel_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-330,-20);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_22_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-20,750,440);
p.frameBounds = [rect];


(lib.panel_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-330,-20);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_21_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-20,750,440);
p.frameBounds = [rect];


(lib.panel_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-340,-40);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_20_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-40,710,420);
p.frameBounds = [rect];


(lib.panel_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-340,-40);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_19_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-40,710,420);
p.frameBounds = [rect];


(lib.panel_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-340,-40);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_18_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-40,710,420);
p.frameBounds = [rect];


(lib.panel_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-340,-40);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_17_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-40,710,420);
p.frameBounds = [rect];


(lib.panel_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-340,-40);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_16_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-40,710,420);
p.frameBounds = [rect];


(lib.panel_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-340,-40);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_15_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-40,710,420);
p.frameBounds = [rect];


(lib.panel_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-340,-40);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_14_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-40,710,420);
p.frameBounds = [rect];


(lib.panel_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-340,-40);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_13_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-40,710,420);
p.frameBounds = [rect];


(lib.panel_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-340,-40);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_12_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-40,710,420);
p.frameBounds = [rect];


(lib.panel_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-340,-40);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_11_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-40,710,420);
p.frameBounds = [rect];


(lib.panel_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-360,-60);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-60,680,420);
p.frameBounds = [rect];


(lib.panel_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-360,-60);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-60,680,420);
p.frameBounds = [rect];


(lib.panel_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-360,-60);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-60,680,420);
p.frameBounds = [rect];


(lib.panel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-360,-60);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-60,680,420);
p.frameBounds = [rect];


(lib.panel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-360,-60);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-60,680,420);
p.frameBounds = [rect];


(lib.panel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-360,-60);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-60,680,420);
p.frameBounds = [rect];


(lib.panel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-360,-60);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-60,680,420);
p.frameBounds = [rect];


(lib.panel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-360,-60);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-60,680,420);
p.frameBounds = [rect];


(lib.panel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-360,-60);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-60,680,420);
p.frameBounds = [rect];


(lib.panel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tip
	this.tip_mc = new lib.tip_puzzle_2_mc();
	this.tip_mc.setTransform(-260,150);

	this.timeline.addTween(cjs.Tween.get(this.tip_mc).wait(1));

	// pocket
	this.pocket_mc = new lib.pocket_mc();
	this.pocket_mc.setTransform(-360,-60);

	this.timeline.addTween(cjs.Tween.get(this.pocket_mc).wait(1));

	// puzzle
	this.puzzle_mc = new lib.puzzle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.puzzle_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.puzzle_substrate_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-60,680,420);
p.frameBounds = [rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero_main_2_mc();
	this.instance.setTransform(240,315);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({alpha:0.012},15).wait(90).to({alpha:1},15).wait(1));

	// animation
	this.instance_1 = new lib.hero_main_1_mc();
	this.instance_1.setTransform(220,315);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({alpha:1},15).wait(60).to({alpha:0.012},15).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78,22.5,616.5,585);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.completed_ray_light_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.completed_ray_light_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90},49).to({rotation:180},50).to({rotation:270},50).to({rotation:360},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-300,600,600);
p.frameBounds = [rect, new cjs.Rectangle(-309.1,-309.1,618.2,618.2), new cjs.Rectangle(-317.9,-317.9,635.8,635.8), new cjs.Rectangle(-327.3,-327.2,654.6,654.6), new cjs.Rectangle(-335.4,-335.4,670.8,670.8), new cjs.Rectangle(-343.2,-343.2,686.6,686.6), new cjs.Rectangle(-351.5,-351.5,703.2,703.2), new cjs.Rectangle(-358.7,-358.6,717.4,717.4), new cjs.Rectangle(-365.4,-365.4,731,731), new cjs.Rectangle(-372.6,-372.5,745.2,745.2), new cjs.Rectangle(-378.6,-378.6,757.3,757.3), new cjs.Rectangle(-384.3,-384.3,768.7,768.7), new cjs.Rectangle(-390.1,-390.1,780.4,780.4), new cjs.Rectangle(-395,-395.1,790.2,790.2), new cjs.Rectangle(-399.6,-399.6,799.3,799.3), new cjs.Rectangle(-404.1,-404.2,808.4,808.4), new cjs.Rectangle(-407.9,-407.9,815.8,815.8), new cjs.Rectangle(-411.2,-411.2,822.5,822.5), new cjs.Rectangle(-414.4,-414.4,829,829), new cjs.Rectangle(-416.9,-416.9,834,834), new cjs.Rectangle(-419,-419,838.2,838.2), new cjs.Rectangle(-420.9,-420.9,841.9,841.9), new cjs.Rectangle(-422.2,-422.1,844.4,844.4), new cjs.Rectangle(-423,-423,846.1,846.1), rect=new cjs.Rectangle(-423.5,-423.5,847.1,847.1), rect, new cjs.Rectangle(-423.1,-423,846.1,846.1), new cjs.Rectangle(-422.2,-422.1,844.4,844.4), new cjs.Rectangle(-420.9,-420.9,841.9,841.9), new cjs.Rectangle(-419.1,-419,838.2,838.2), new cjs.Rectangle(-417,-416.9,834,834), new cjs.Rectangle(-414.5,-414.4,829,829), new cjs.Rectangle(-411.3,-411.2,822.5,822.5), new cjs.Rectangle(-407.9,-407.9,815.8,815.8), new cjs.Rectangle(-404.2,-404.2,808.4,808.4), new cjs.Rectangle(-399.6,-399.6,799.3,799.3), new cjs.Rectangle(-395.1,-395.1,790.2,790.2), new cjs.Rectangle(-390.2,-390.1,780.4,780.4), new cjs.Rectangle(-384.3,-384.3,768.7,768.7), new cjs.Rectangle(-378.6,-378.6,757.3,757.3), new cjs.Rectangle(-372.6,-372.5,745.2,745.2), new cjs.Rectangle(-365.5,-365.4,731,731), new cjs.Rectangle(-358.7,-358.6,717.4,717.4), new cjs.Rectangle(-351.6,-351.5,703.2,703.2), new cjs.Rectangle(-343.3,-343.2,686.6,686.6), new cjs.Rectangle(-335.4,-335.4,670.8,670.8), new cjs.Rectangle(-327.3,-327.2,654.6,654.6), new cjs.Rectangle(-317.9,-317.9,635.8,635.8), new cjs.Rectangle(-309.1,-309.1,618.2,618.2), new cjs.Rectangle(-300,-300,600,600), new cjs.Rectangle(-309,-309,618.1,618.1), new cjs.Rectangle(-317.8,-317.8,635.7,635.7), new cjs.Rectangle(-326.3,-326.2,652.6,652.6), new cjs.Rectangle(-334.4,-334.4,668.8,668.8), new cjs.Rectangle(-343.1,-343,686.2,686.2), new cjs.Rectangle(-350.6,-350.5,701.2,701.2), new cjs.Rectangle(-357.7,-357.6,715.4,715.4), new cjs.Rectangle(-364.5,-364.5,729.1,729.1), new cjs.Rectangle(-371,-370.9,742,742), new cjs.Rectangle(-377.1,-377,754.2,754.2), new cjs.Rectangle(-383.4,-383.4,766.8,766.8), new cjs.Rectangle(-388.8,-388.7,777.6,777.6), new cjs.Rectangle(-393.8,-393.7,787.6,787.6), new cjs.Rectangle(-398.4,-398.3,796.8,796.8), new cjs.Rectangle(-403,-403,806.1,806.1), new cjs.Rectangle(-406.9,-406.8,813.8,813.8), new cjs.Rectangle(-410.3,-410.2,820.6,820.6), new cjs.Rectangle(-413.4,-413.3,826.7,826.7), new cjs.Rectangle(-416,-415.9,832,832), new cjs.Rectangle(-418.3,-418.2,836.5,836.5), new cjs.Rectangle(-420.3,-420.2,840.6,840.6), new cjs.Rectangle(-421.7,-421.7,843.4,843.4), new cjs.Rectangle(-422.7,-422.7,845.5,845.5), new cjs.Rectangle(-423.4,-423.3,846.7,846.7), new cjs.Rectangle(-424.2,-424.2,848.5,848.5), new cjs.Rectangle(-423.4,-423.3,846.7,846.7), new cjs.Rectangle(-422.7,-422.7,845.5,845.5), new cjs.Rectangle(-421.7,-421.7,843.4,843.4), new cjs.Rectangle(-420.3,-420.3,840.6,840.6), new cjs.Rectangle(-418.3,-418.2,836.5,836.5), new cjs.Rectangle(-416,-416,832,832), new cjs.Rectangle(-413.4,-413.4,826.7,826.7), new cjs.Rectangle(-410.3,-410.3,820.6,820.6), new cjs.Rectangle(-406.9,-406.9,813.8,813.8), new cjs.Rectangle(-403,-403,806.1,806.1), new cjs.Rectangle(-398.4,-398.4,796.8,796.8), new cjs.Rectangle(-393.8,-393.8,787.6,787.6), new cjs.Rectangle(-388.8,-388.8,777.6,777.6), new cjs.Rectangle(-383.4,-383.4,766.8,766.8), new cjs.Rectangle(-377.1,-377.1,754.2,754.2), new cjs.Rectangle(-371,-371,742,742), new cjs.Rectangle(-364.5,-364.5,729.1,729.1), new cjs.Rectangle(-357.7,-357.7,715.4,715.4), new cjs.Rectangle(-350.6,-350.6,701.2,701.2), new cjs.Rectangle(-343.1,-343.1,686.2,686.2), new cjs.Rectangle(-334.4,-334.4,668.8,668.8), new cjs.Rectangle(-326.3,-326.3,652.6,652.6), new cjs.Rectangle(-317.8,-317.8,635.7,635.7), new cjs.Rectangle(-309,-309.1,618.1,618.1), new cjs.Rectangle(-300,-300,600,600), new cjs.Rectangle(-309.1,-309,618.1,618.1), new cjs.Rectangle(-317.8,-317.8,635.7,635.7), new cjs.Rectangle(-326.3,-326.3,652.6,652.6), new cjs.Rectangle(-334.4,-334.4,668.8,668.8), new cjs.Rectangle(-343.1,-343.1,686.2,686.2), new cjs.Rectangle(-350.6,-350.6,701.2,701.2), new cjs.Rectangle(-357.7,-357.7,715.4,715.4), new cjs.Rectangle(-364.5,-364.5,729.1,729.1), new cjs.Rectangle(-371,-371,742,742), new cjs.Rectangle(-377.1,-377.1,754.2,754.2), new cjs.Rectangle(-383.4,-383.4,766.8,766.8), new cjs.Rectangle(-388.8,-388.8,777.6,777.6), new cjs.Rectangle(-393.8,-393.8,787.6,787.6), new cjs.Rectangle(-398.4,-398.4,796.8,796.8), new cjs.Rectangle(-403,-403,806.1,806.1), new cjs.Rectangle(-406.9,-406.9,813.8,813.8), new cjs.Rectangle(-410.3,-410.3,820.6,820.6), new cjs.Rectangle(-413.4,-413.4,826.7,826.7), new cjs.Rectangle(-416,-416,832,832), new cjs.Rectangle(-418.2,-418.3,836.5,836.5), new cjs.Rectangle(-420.3,-420.3,840.6,840.6), new cjs.Rectangle(-421.7,-421.7,843.4,843.4), new cjs.Rectangle(-422.7,-422.7,845.5,845.5), new cjs.Rectangle(-423.3,-423.4,846.7,846.7), new cjs.Rectangle(-424.2,-424.2,848.5,848.5), new cjs.Rectangle(-423.3,-423.4,846.7,846.7), new cjs.Rectangle(-422.7,-422.7,845.5,845.5), new cjs.Rectangle(-421.7,-421.7,843.4,843.4), new cjs.Rectangle(-420.2,-420.3,840.6,840.6), new cjs.Rectangle(-418.2,-418.3,836.5,836.5), new cjs.Rectangle(-415.9,-416,832,832), new cjs.Rectangle(-413.3,-413.4,826.7,826.7), new cjs.Rectangle(-410.2,-410.3,820.6,820.6), new cjs.Rectangle(-406.8,-406.9,813.8,813.8), new cjs.Rectangle(-403,-403,806.1,806.1), new cjs.Rectangle(-398.3,-398.4,796.8,796.8), new cjs.Rectangle(-393.7,-393.8,787.6,787.6), new cjs.Rectangle(-388.7,-388.8,777.6,777.6), new cjs.Rectangle(-383.4,-383.4,766.8,766.8), new cjs.Rectangle(-377,-377.1,754.2,754.2), new cjs.Rectangle(-370.9,-371,742,742), new cjs.Rectangle(-364.5,-364.5,729.1,729.1), new cjs.Rectangle(-357.6,-357.7,715.4,715.4), new cjs.Rectangle(-350.5,-350.6,701.2,701.2), new cjs.Rectangle(-343,-343.1,686.2,686.2), new cjs.Rectangle(-334.4,-334.4,668.8,668.8), new cjs.Rectangle(-326.2,-326.3,652.6,652.6), new cjs.Rectangle(-317.8,-317.8,635.7,635.7), new cjs.Rectangle(-309,-309,618.1,618.1), new cjs.Rectangle(-300,-300,600,600), new cjs.Rectangle(-309,-309.1,618.1,618.1), new cjs.Rectangle(-317.8,-317.8,635.7,635.7), new cjs.Rectangle(-326.2,-326.3,652.6,652.6), new cjs.Rectangle(-334.4,-334.4,668.8,668.8), new cjs.Rectangle(-343,-343.1,686.2,686.2), new cjs.Rectangle(-350.5,-350.6,701.2,701.2), new cjs.Rectangle(-357.7,-357.7,715.4,715.4), new cjs.Rectangle(-364.5,-364.5,729.1,729.1), new cjs.Rectangle(-370.9,-371,742,742), new cjs.Rectangle(-377,-377.1,754.2,754.2), new cjs.Rectangle(-383.4,-383.4,766.8,766.8), new cjs.Rectangle(-388.7,-388.8,777.6,777.6), new cjs.Rectangle(-393.7,-393.8,787.6,787.6), new cjs.Rectangle(-398.3,-398.4,796.8,796.8), new cjs.Rectangle(-403,-403,806.1,806.1), new cjs.Rectangle(-406.8,-406.9,813.8,813.8), new cjs.Rectangle(-410.2,-410.3,820.6,820.6), new cjs.Rectangle(-413.3,-413.4,826.7,826.7), new cjs.Rectangle(-415.9,-416,832,832), new cjs.Rectangle(-418.2,-418.2,836.5,836.5), new cjs.Rectangle(-420.2,-420.3,840.6,840.6), new cjs.Rectangle(-421.7,-421.7,843.4,843.4), new cjs.Rectangle(-422.7,-422.7,845.5,845.5), new cjs.Rectangle(-423.3,-423.3,846.7,846.7), new cjs.Rectangle(-424.2,-424.2,848.5,848.5), new cjs.Rectangle(-423.3,-423.3,846.7,846.7), new cjs.Rectangle(-422.7,-422.7,845.5,845.5), new cjs.Rectangle(-421.7,-421.7,843.4,843.4), new cjs.Rectangle(-420.2,-420.2,840.6,840.6), new cjs.Rectangle(-418.2,-418.2,836.5,836.5), new cjs.Rectangle(-415.9,-415.9,832,832), new cjs.Rectangle(-413.3,-413.3,826.7,826.7), new cjs.Rectangle(-410.2,-410.2,820.6,820.6), new cjs.Rectangle(-406.8,-406.8,813.8,813.8), new cjs.Rectangle(-403,-403,806.1,806.1), new cjs.Rectangle(-398.3,-398.3,796.8,796.8), new cjs.Rectangle(-393.7,-393.7,787.6,787.6), new cjs.Rectangle(-388.7,-388.7,777.6,777.6), new cjs.Rectangle(-383.4,-383.4,766.8,766.8), new cjs.Rectangle(-377,-377,754.2,754.2), new cjs.Rectangle(-370.9,-370.9,742,742), new cjs.Rectangle(-364.5,-364.5,729.1,729.1), new cjs.Rectangle(-357.7,-357.6,715.4,715.4), new cjs.Rectangle(-350.5,-350.5,701.2,701.2), new cjs.Rectangle(-343,-343,686.2,686.2), new cjs.Rectangle(-334.4,-334.4,668.8,668.8), new cjs.Rectangle(-326.2,-326.2,652.6,652.6), new cjs.Rectangle(-317.8,-317.8,635.7,635.7), new cjs.Rectangle(-309,-309,618.1,618.1), new cjs.Rectangle(-300,-300,600,600)];


(lib.body_title_start_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// decor
	this.instance = new lib.decor_start_mc();
	this.instance.setTransform(0,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// graph
	this.instance_1 = new lib.title_start_en_img();
	this.instance_1.setTransform(-170,-140);

	this.instance_2 = new lib.title_start_ru_img();
	this.instance_2.setTransform(-170,-140);

	this.instance_3 = new lib.title_start_de_img();
	this.instance_3.setTransform(-170,-140);

	this.instance_4 = new lib.title_start_fr_img();
	this.instance_4.setTransform(-170,-140);

	this.instance_5 = new lib.title_start_it_img();
	this.instance_5.setTransform(-170,-140);

	this.instance_6 = new lib.title_start_es_img();
	this.instance_6.setTransform(-170,-140);

	this.instance_7 = new lib.title_start_pt_img();
	this.instance_7.setTransform(-170,-140);

	this.instance_8 = new lib.title_start_tr_img();
	this.instance_8.setTransform(-170,-140);

	this.instance_9 = new lib.title_start_ja_img();
	this.instance_9.setTransform(-170,-140);

	this.instance_10 = new lib.title_start_hi_img();
	this.instance_10.setTransform(-170,-140);

	this.instance_11 = new lib.title_start_ar_img();
	this.instance_11.setTransform(-170,-140);

	this.instance_12 = new lib.title_start_id_img();
	this.instance_12.setTransform(-170,-140);

	this.instance_13 = new lib.title_start_zh_img();
	this.instance_13.setTransform(-170,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-140,340,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_title_completed_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.title_completed_mc();
	this.instance.setTransform(0.5,0,1,1,0,0,0,0.5,0);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07,x:0.6,alpha:1},9).to({scaleX:1,scaleY:1,x:0.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-140,340,280);
p.frameBounds = [rect, new cjs.Rectangle(-171.3,-141.1,342.7,282.2), new cjs.Rectangle(-172.6,-142.2,345.4,284.5), new cjs.Rectangle(-174,-143.3,348.1,286.7), new cjs.Rectangle(-175.3,-144.4,350.8,288.9), new cjs.Rectangle(-176.6,-145.5,353.5,291.1), new cjs.Rectangle(-178,-146.6,356.2,293.4), new cjs.Rectangle(-179.3,-147.7,358.9,295.6), new cjs.Rectangle(-180.7,-148.8,361.5,297.8), new cjs.Rectangle(-182.1,-150,364.2,300), new cjs.Rectangle(-179.6,-147.9,359.4,296), new cjs.Rectangle(-177.2,-145.9,354.5,292), new cjs.Rectangle(-174.8,-143.9,349.7,288), new cjs.Rectangle(-172.4,-141.9,344.9,284), new cjs.Rectangle(-170,-140,340,280)];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:32,end:74});

	// timeline functions:
	this.frame_74 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(1));

	// logo
	this.instance = new lib.curtain_4_mc();
	this.instance.setTransform(400.1,300.1,0.5,0.5,0,0,0,0.1,0.1);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:400,y:300,alpha:1},15).wait(19).to({scaleX:0.5,scaleY:0.5,alpha:0.012},11).to({_off:true},1).wait(20));

	// curtain_1
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(-1000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:0},23).wait(19).to({x:-1000},30).wait(2));

	// curtain_2
	this.instance_2 = new lib.curtain_2_mc();
	this.instance_2.setTransform(1000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:0},23).wait(19).to({x:1000},30).wait(2));

	// bg
	this.instance_3 = new lib.curtain_3_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).wait(19).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1400,0,3600,600);
p.frameBounds = [rect, rect, new cjs.Rectangle(-1356.5,0,3513.1,600), new cjs.Rectangle(-1313,0,3426.1,600), new cjs.Rectangle(-1269.5,0,3339.1,600), new cjs.Rectangle(-1226.1,0,3252.2,600), new cjs.Rectangle(-1182.6,0,3165.2,600), new cjs.Rectangle(-1139.1,0,3078.3,600), new cjs.Rectangle(-1095.6,0,2991.3,600), new cjs.Rectangle(-1052.1,0,2904.3,600), new cjs.Rectangle(-1008.7,0,2817.4,600), new cjs.Rectangle(-965.2,0,2730.4,600), new cjs.Rectangle(-921.7,0,2643.5,600), new cjs.Rectangle(-878.2,0,2556.5,600), new cjs.Rectangle(-834.8,0,2469.6,600), new cjs.Rectangle(-791.3,0,2382.6,600), new cjs.Rectangle(-747.8,0,2295.7,600), new cjs.Rectangle(-704.3,0,2208.7,600), new cjs.Rectangle(-660.8,0,2121.7,600), new cjs.Rectangle(-617.4,0,2034.8,600), new cjs.Rectangle(-573.9,0,1947.8,600), new cjs.Rectangle(-530.4,0,1860.9,600), new cjs.Rectangle(-486.9,0,1773.9,600), new cjs.Rectangle(-443.4,0,1686.9,600), rect=new cjs.Rectangle(-400,0,1600,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-433.3,0,1666.7,600), new cjs.Rectangle(-466.6,0,1733.3,600), new cjs.Rectangle(-500,0,1800,600), new cjs.Rectangle(-533.3,0,1866.7,600), new cjs.Rectangle(-566.6,0,1933.3,600), new cjs.Rectangle(-600,0,2000,600), new cjs.Rectangle(-633.3,0,2066.7,600), new cjs.Rectangle(-666.6,0,2133.3,600), new cjs.Rectangle(-700,0,2200,600), new cjs.Rectangle(-733.3,0,2266.7,600), new cjs.Rectangle(-766.6,0,2333.3,600), new cjs.Rectangle(-800,0,2400,600), new cjs.Rectangle(-833.3,0,2466.7,600), new cjs.Rectangle(-866.6,0,2533.3,600), new cjs.Rectangle(-900,0,2600,600), new cjs.Rectangle(-933.3,0,2666.7,600), new cjs.Rectangle(-966.6,0,2733.3,600), new cjs.Rectangle(-1000,0,2800,600), new cjs.Rectangle(-1033.3,0,2866.7,600), new cjs.Rectangle(-1066.6,0,2933.3,600), new cjs.Rectangle(-1100,0,3000,600), new cjs.Rectangle(-1133.3,0,3066.7,600), new cjs.Rectangle(-1166.6,0,3133.3,600), new cjs.Rectangle(-1200,0,3200,600), new cjs.Rectangle(-1233.3,0,3266.7,600), new cjs.Rectangle(-1266.6,0,3333.3,600), new cjs.Rectangle(-1300,0,3400,600), new cjs.Rectangle(-1333.3,0,3466.7,600), new cjs.Rectangle(-1366.6,0,3533.3,600), rect=new cjs.Rectangle(-1400,0,3600,600), rect];


(lib.copyright_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.copyright_body_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect];


(lib.copyright_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.copyright_title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.copyright_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect];


(lib.copyright_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.copyright_3_mc();
	this.instance.setTransform(200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(50,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(46.3,106.8,302.5,181.5), new cjs.Rectangle(35.2,97.1,309.9,186), new cjs.Rectangle(16.7,81.1,322.2,193.4), new cjs.Rectangle(-9.3,58.6,339.5,203.7), new cjs.Rectangle(-42.6,29.7,361.7,217.1), new cjs.Rectangle(-83.3,-5.5,388.9,233.4), new cjs.Rectangle(-131.4,-47.2,421,252.6), new cjs.Rectangle(-187,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


(lib.simple_timer_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.simple_timer_6_mc();
	this.instance.setTransform(0,15);

	this.instance_1 = new lib.simple_timer_6_mc();
	this.instance_1.setTransform(0,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-35,40,70);
p.frameBounds = [rect];


(lib.simple_timer_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chars
	this.char_0 = new lib.simple_timer_2_mc();
	this.char_0.setTransform(25,0);

	this.char_1 = new lib.simple_timer_2_mc();
	this.char_1.setTransform(-25,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.char_1},{t:this.char_0}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-45,110,90);
p.frameBounds = [rect];


(lib.simple_timer_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chars
	this.char_0 = new lib.simple_timer_2_mc();
	this.char_0.setTransform(25,0);

	this.char_1 = new lib.simple_timer_2_mc();
	this.char_1.setTransform(-25,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.char_1},{t:this.char_0}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-45,110,90);
p.frameBounds = [rect];


(lib.simple_timer_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chars
	this.char_0 = new lib.simple_timer_2_mc();
	this.char_0.setTransform(25,0);

	this.char_1 = new lib.simple_timer_2_mc();
	this.char_1.setTransform(-25,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.char_1},{t:this.char_0}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-45,110,90);
p.frameBounds = [rect];


(lib.simple_timer_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.0
		*/
		this.stop();
		this.mouseEnabled = false;
		this.mouseChildren = false;
		/*
		
		*/
		var _that = this;
		_that.value_num = 0;
		/*
		
		*/
		_updateValueFunc();
		/*
		
		*/
		_that.setValueFunc = function(value_num)
		{
			/*
			
			*/
			if(value_num !== undefined)
			{
				_that.value_num = Number(value_num);
			}
			/*
			
			*/
			_updateValueFunc();
		}
		/*
		
		*/
		function _updateValueFunc()
		{
			/*
			
			*/
			var minute_num = Math.floor(_that.value_num / 60);
			var second_num = _that.value_num % 60;
			var hour_num = Math.floor(minute_num / 60);
			minute_num = minute_num % 60;
			/*
			
			*/
			_updateCharsFunc(_that.hour_mc, hour_num);
			_updateCharsFunc(_that.minute_mc, minute_num);
			_updateCharsFunc(_that.second_mc, second_num);
		}
		/*
		
		*/
		function _updateCharsFunc(target_mc, value_num)
		{
			target_mc.gotoAndStop(0);
			target_mc.char_0.gotoAndStop(value_num % 10);
			target_mc.char_1.gotoAndStop(Math.floor(value_num / 10));
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.instance = new lib.simple_timer_7_mc();
	this.instance.setTransform(65,0);

	this.instance_1 = new lib.simple_timer_7_mc();
	this.instance_1.setTransform(-65,0);

	this.second_mc = new lib.simple_timer_5_mc();
	this.second_mc.setTransform(130,0);

	this.minute_mc = new lib.simple_timer_4_mc();

	this.hour_mc = new lib.simple_timer_3_mc();
	this.hour_mc.setTransform(-130,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hour_mc},{t:this.minute_mc},{t:this.second_mc},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185,-45,370,90);
p.frameBounds = [rect];


(lib.simple_level_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chars
	this.char_1 = new lib.simple_level_2_mc();
	this.char_1.setTransform(28,0);

	this.char_0 = new lib.simple_level_1_mc();
	this.char_0.setTransform(-28,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.char_0},{t:this.char_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-45,136,90);
p.frameBounds = [rect];


(lib.simple_level_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chars
	this.char_1 = new lib.simple_level_2_mc();
	this.char_1.setTransform(28,0);

	this.char_0 = new lib.simple_level_1_mc();
	this.char_0.setTransform(-28,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.char_0},{t:this.char_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-45,136,90);
p.frameBounds = [rect];


(lib.simple_level_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2024 edapskov v 4.0
		*/
		createjs.EventDispatcher.initialize(this);
		/*
		
		*/
		this.gotoAndStop(0);
		this.chars_mc.gotoAndStop(0);
		/*
		
		*/
		var _that = this;
		var _value_num = 0;
		var _value_str = "0";
		var _maxChars_num = Number(this.chars_mc.numChildren);
		/*
		
		*/
		_updateValueFunc();
		/*
		
		*/
		this.setValueFunc = function(value_num)
		{
			/*
			
			*/
			if(value_num === undefined)
			{
				value_num = 0;
			}
			else
			{
				value_num = Number(value_num);
			}
			/*
			
			*/
			_value_num = value_num;
			/*
			
			*/
			_updateValueFunc();
		}
		/*
		
		*/
		function _updateValueFunc()
		{
			/*
			
			*/
			_value_str = _value_num.toString();
			_value_str = String(_value_str).trim();
			/*
			
			*/
			if(_value_str.length > _maxChars_num)
			{
				_value_str = _value_str.substr(0, _maxChars_num);
			}
			/*
			
			*/
			var i = 0;
			var l = _value_str.length;
			var char_mc;
			while(i < _maxChars_num)
			{
				/*
				
				*/
				if(_that.chars_mc["char_" + i])
				{
					/*
					
					*/
					char_mc = _that.chars_mc["char_" + i];
					char_mc.name = "char_" + i;
					/*
					
					*/
					if(i < l)
					{
						char_mc.visible = true;
						char_mc.gotoAndStop(parseInt(_value_str.charAt(i)));
					}
					else
					{
						char_mc.visible = false;
						char_mc.gotoAndStop(0);
					}
				}
				/*
				
				*/
				i++;
			}
		}
		/*
		
		*/
		function _getNumberValueFunc()
		{
			/*
			
			*/
			var result_num = parseInt(_value_str);
			/*
			
			*/
			if(isNaN(result_num))
			{
				result_num = 0;
			}
			/*
			
			*/
			return result_num;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.chars_mc = new lib.simple_level_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.chars_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-45,136,90);
p.frameBounds = [rect];


(lib.simple_level_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2024 edapskov v 4.0
		*/
		createjs.EventDispatcher.initialize(this);
		/*
		
		*/
		this.gotoAndStop(0);
		this.chars_mc.gotoAndStop(0);
		/*
		
		*/
		var _that = this;
		var _value_num = 0;
		var _value_str = "0";
		var _maxChars_num = Number(this.chars_mc.numChildren);
		/*
		
		*/
		_updateValueFunc();
		/*
		
		*/
		this.setValueFunc = function(value_num)
		{
			/*
			
			*/
			if(value_num === undefined)
			{
				value_num = 0;
			}
			else
			{
				value_num = Number(value_num);
			}
			/*
			
			*/
			_value_num = value_num;
			/*
			
			*/
			_updateValueFunc();
		}
		/*
		
		*/
		function _updateValueFunc()
		{
			/*
			
			*/
			_value_str = _value_num.toString();
			_value_str = String(_value_str).trim();
			/*
			
			*/
			if(_value_str.length > _maxChars_num)
			{
				_value_str = _value_str.substr(0, _maxChars_num);
			}
			/*
			
			*/
			var i = Number(_maxChars_num - 1);
			var j = Number(_value_str.length - 1);
			var char_mc;
			while(i >= 0)
			{
				/*
				
				*/
				if(_that.chars_mc["char_" + i])
				{
					/*
					
					*/
					char_mc = _that.chars_mc["char_" + i];
					char_mc.name = "char_" + i;
					/*
					
					*/
					if(j >= 0)
					{
						char_mc.visible = true;
						char_mc.gotoAndStop(parseInt(_value_str.charAt(j)));
					}
					else
					{
						char_mc.visible = false;
						char_mc.gotoAndStop(0);
					}
				}
				/*
				
				*/
				i--;
				j--;
			}
		}
		/*
		
		*/
		function _getNumberValueFunc()
		{
			/*
			
			*/
			var result_num = parseInt(_value_str);
			/*
			
			*/
			if(isNaN(result_num))
			{
				result_num = 0;
			}
			/*
			
			*/
			return result_num;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.chars_mc = new lib.simple_level_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.chars_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-45,136,90);
p.frameBounds = [rect];


(lib.gravity_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.genshin_star_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// animation
	this.instance = new lib.genshin_star_3_mc();
	this.instance.setTransform(-29.9,30,0.599,0.599,135,0,0,-0.1,0);
	this.instance.alpha = 0.102;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,x:-46,y:46.1,alpha:0.801},5).to({regX:0,regY:0,scaleX:0.6,scaleY:0.6,x:-64,y:64,alpha:0.102},10).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.genshin_star_3_mc();
	this.instance_1.setTransform(-30,-30,0.599,0.599,-134.9,0,0,0.1,0);
	this.instance_1.alpha = 0.102;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,rotation:-135,x:-46,y:-46,alpha:0.801},5).to({regX:0.1,scaleX:0.6,scaleY:0.6,rotation:-134.9,x:-64,y:-64,alpha:0.102},10).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.genshin_star_3_mc();
	this.instance_2.setTransform(30.1,30.1,0.599,0.599,45.1,0,0,0.1,0);
	this.instance_2.alpha = 0.102;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,rotation:45,x:46,y:46,alpha:0.801},5).to({regX:0.1,scaleX:0.6,scaleY:0.6,rotation:45.1,x:64.1,y:64.1,alpha:0.102},10).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.genshin_star_3_mc();
	this.instance_3.setTransform(30.1,-30,0.599,0.599,-44.9,0,0,0.1,0);
	this.instance_3.alpha = 0.102;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,rotation:-45,x:46,y:-46,alpha:0.801},5).to({regX:0.1,scaleX:0.6,scaleY:0.6,rotation:-44.9,x:64.1,y:-64,alpha:0.102},10).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.genshin_star_2_mc();
	this.instance_4.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0.801},4).to({rotation:45},5).to({rotation:90},5).wait(5).to({scaleX:0.8,scaleY:0.8,alpha:0.102},10).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-68.4,-68.4,136.9,136.9), new cjs.Rectangle(-75.4,-75.4,150.9,150.9), new cjs.Rectangle(-80.6,-80.6,161.3,161.3), new cjs.Rectangle(-83.6,-83.6,167.3,167.3), new cjs.Rectangle(-84.9,-84.9,169.8,169.8), new cjs.Rectangle(-83.7,-83.6,167.4,167.4), new cjs.Rectangle(-80.6,-80.6,161.3,161.3), new cjs.Rectangle(-75.5,-75.5,151.1,151.1), new cjs.Rectangle(-68.6,-68.6,137.2,137.2), new cjs.Rectangle(-60,-60,120,120), rect=new cjs.Rectangle(-60,-59.9,120,120), rect, new cjs.Rectangle(-64.5,-64.4,129,129.1), new cjs.Rectangle(-70.2,-70,140.2,140.2), new cjs.Rectangle(-75.7,-75.7,151.4,151.4), new cjs.Rectangle(-76.3,-76.3,152.6,152.6), new cjs.Rectangle(-76.9,-76.9,153.8,153.8), new cjs.Rectangle(-77.5,-77.5,155,155), new cjs.Rectangle(-78,-78,156.1,156.1), new cjs.Rectangle(-78.7,-78.7,157.4,157.4), new cjs.Rectangle(-79.3,-79.3,158.6,158.7), new cjs.Rectangle(-79.9,-79.9,159.9,159.9), new cjs.Rectangle(-80.5,-80.5,161.1,161.1), new cjs.Rectangle(-81.1,-81.1,162.3,162.3), new cjs.Rectangle(-81.8,-81.8,163.6,163.6), null];


(lib.blinking_light_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.102},19).to({scaleX:1,scaleY:1,alpha:0.602},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, new cjs.Rectangle(-24.7,-24.7,49.5,49.5), new cjs.Rectangle(-24.4,-24.4,49,49), new cjs.Rectangle(-24.2,-24.2,48.4,48.4), new cjs.Rectangle(-23.9,-23.9,47.9,47.9), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.4,-23.4,46.8,46.8), new cjs.Rectangle(-23.1,-23.1,46.3,46.3), new cjs.Rectangle(-22.8,-22.8,45.8,45.8), new cjs.Rectangle(-22.6,-22.6,45.3,45.3), new cjs.Rectangle(-22.3,-22.3,44.8,44.8), new cjs.Rectangle(-22.1,-22.1,44.2,44.2), new cjs.Rectangle(-21.8,-21.8,43.7,43.7), new cjs.Rectangle(-21.5,-21.5,43.2,43.2), new cjs.Rectangle(-21.3,-21.3,42.7,42.7), new cjs.Rectangle(-21,-21,42.1,42.1), new cjs.Rectangle(-20.7,-20.7,41.6,41.6), new cjs.Rectangle(-20.5,-20.5,41.1,41.1), new cjs.Rectangle(-20.2,-20.2,40.6,40.6), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-20.2,-20.2,40.5,40.5), new cjs.Rectangle(-20.4,-20.4,41,41), new cjs.Rectangle(-20.7,-20.7,41.5,41.5), new cjs.Rectangle(-20.9,-20.9,42,42), new cjs.Rectangle(-21.2,-21.2,42.5,42.5), new cjs.Rectangle(-21.4,-21.4,43,43), new cjs.Rectangle(-21.7,-21.7,43.5,43.5), new cjs.Rectangle(-21.9,-21.9,44,44), new cjs.Rectangle(-22.2,-22.2,44.5,44.5), new cjs.Rectangle(-22.4,-22.4,45,45), new cjs.Rectangle(-22.7,-22.7,45.5,45.5), new cjs.Rectangle(-22.9,-22.9,46,46), new cjs.Rectangle(-23.2,-23.2,46.5,46.5), new cjs.Rectangle(-23.4,-23.4,47,47), new cjs.Rectangle(-23.7,-23.7,47.5,47.5), new cjs.Rectangle(-23.9,-23.9,48,48), new cjs.Rectangle(-24.2,-24.2,48.5,48.5), new cjs.Rectangle(-24.4,-24.4,49,49), new cjs.Rectangle(-24.7,-24.7,49.5,49.5), new cjs.Rectangle(-25,-25,50,50)];


(lib.sound_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.sound_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.sound_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.sound_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({rotation:-10},5).to({rotation:10},10).to({rotation:0},5).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-59.9,-59.9,120,120), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), rect=new cjs.Rectangle(-60,-60,120,120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.sound_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.sound_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({rotation:-10},5).to({rotation:10},10).to({rotation:0},5).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-59.9,-59.9,120,120), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), rect=new cjs.Rectangle(-60,-60,120,120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.social_network_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		@author edapskov
		@copyright 2023 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = true;
		this.mouseChildren = true;
		this.cursor = "pointer";
		this.addEventListener("click", _onClickSocialNetworkMcFunc, false);
		/*
		
		*/
		var enSocialNetwork_arr = ["fb", "youtube", "twitter"];
		var ruSocialNetwork_arr = ["vk", "vk", "youtube"];
		var social_network_str = enSocialNetwork_arr[Math.floor(Math.random() * enSocialNetwork_arr.length)];
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			social_network_str = ruSocialNetwork_arr[Math.floor(Math.random() * ruSocialNetwork_arr.length)];
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(0);
		this.body_mc.gotoAndStop(social_network_str);
		/*
		
		*/
		function _onClickSocialNetworkMcFunc(event)
		{
			if(social_network_str == "fb")
			{
				window.open("https://facebook.com/dlgirlsgames", '_blank');
			}
			if(social_network_str == "vk")
			{
				window.open("https://vk.com/dlgirls", '_blank');
			}
			if(social_network_str == "youtube")
			{
				window.open("https://youtube.com/channel/UC7WA6wxCaCbCoLrQu-SbA8g", '_blank');
			}
			if(social_network_str == "twitter")
			{
				window.open("https://twitter.com/DLstudio_2012", '_blank');
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.social_network_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmDGEQihihAAjjQAAjiChihQChihDiAAQDjAAChChQCiChgBDiQABDjiiChQihChjjAAQjiAAihihg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.remove_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_mc();
	this.instance.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-35,-35,70,70), new cjs.Rectangle(-40,-40,80,80)];


(lib.play_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:5},5).to({x:-5},10).to({x:0},5).wait(81));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,195,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,190,190), new cjs.Rectangle(-96,-95,191,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-100,-95,195,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-96,-95,191,190), rect=new cjs.Rectangle(-95,-95,190,190), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.photo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.photo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.more_games_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_7_mc();
	this.instance.setTransform(97.9,45,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_1 = new lib.more_games_7_mc();
	this.instance_1.setTransform(127.2,56.6,1.553,1.553,0,0,0,3.5,3.9);

	this.instance_2 = new lib.more_games_7_mc();
	this.instance_2.setTransform(117.9,50.5,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_3 = new lib.more_games_7_mc();
	this.instance_3.setTransform(26.9,80,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_4 = new lib.more_games_7_mc();
	this.instance_4.setTransform(56.4,108.1,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_5 = new lib.more_games_7_mc();
	this.instance_5.setTransform(71.4,113.1,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_6 = new lib.more_games_11_mc();
	this.instance_6.setTransform(94.6,90.6,0.964,0.964,-15,0,0,22.1,10);

	this.instance_7 = new lib.more_games_13_mc();
	this.instance_7.setTransform(16,64.1,0.987,0.987,60,0,0,11.8,12);

	this.instance_8 = new lib.more_games_13_mc();
	this.instance_8.setTransform(64,100.6,1.051,1.051,0,0,0,11.9,11.9);

	this.instance_9 = new lib.more_games_12_img();
	this.instance_9.setTransform(10.7,37.7);

	this.instance_10 = new lib.more_games_14_mc();
	this.instance_10.setTransform(82,109.1,0.929,0.929,180,0,0,8.3,13.3);

	this.instance_11 = new lib.more_games_9_mc();
	this.instance_11.setTransform(79.8,80.3,1,1,0,0,0,41.1,30);

	this.instance_12 = new lib.more_games_15_mc();
	this.instance_12.setTransform(81.5,45.2,2.743,2.743,0,0,0,3.8,3.8);

	this.instance_13 = new lib.more_games_14_mc();
	this.instance_13.setTransform(53.4,48.6,1.196,1.196,150,0,0,8.3,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 3
	this.instance_14 = new lib.more_games_11_img();
	this.instance_14.setTransform(95,33.3,0.897,0.897,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 2
	this.instance_15 = new lib.more_games_4_img();
	this.instance_15.setTransform(26.4,5.4,0.339,0.339,-15);

	this.instance_16 = new lib.more_games_5_img();
	this.instance_16.setTransform(98.4,5.1,0.239,0.239,30);

	this.instance_17 = new lib.more_games_2_img();
	this.instance_17.setTransform(107,0,0.529,0.529,15);

	this.instance_18 = new lib.more_games_3_img();
	this.instance_18.setTransform(44.2,4.7,0.316,0.316);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,150.7,122.4);
p.frameBounds = [rect];


(lib.more_games_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_12_mc();
	this.instance.setTransform(-4.8,-46.8,0.322,0.322,0,0,0,25,25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:-46.9},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:-46.8},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:-46.9},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:-46.8},4).to({_off:true},1).wait(32));

	// animation
	this.instance_1 = new lib.more_games_12_mc();
	this.instance_1.setTransform(-4.8,25.2,0.322,0.322,0,0,0,25,25);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:25.1},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:25.2},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:25.1},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:25.2},4).to({_off:true},1).wait(37));

	// animation
	this.instance_2 = new lib.more_games_12_mc();
	this.instance_2.setTransform(-45.1,-28.6,0.418,0.418,0,0,0,25,25);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(41));

	// animation
	this.instance_3 = new lib.more_games_12_mc();
	this.instance_3.setTransform(17.9,11.3,0.418,0.418,0,0,0,25,25);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(48));

	// animation
	this.instance_4 = new lib.more_games_8_mc();
	this.instance_4.setTransform(38.3,-2.7,1,1,-105,0,0,24.9,33.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({rotation:0,x:62.7,y:23.2},11,cjs.Ease.get(1)).wait(54).to({scaleX:0.69,scaleY:0.69,rotation:-105,x:34.8,y:7.2},12,cjs.Ease.get(-1)).to({_off:true},2).wait(8));

	// animation
	this.instance_5 = new lib.more_games_5_mc();
	this.instance_5.setTransform(0.2,-6.5,1.074,0.924,0,0,0,67.1,57.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({regX:67.2,scaleX:0.96,scaleY:0.83,y:-5},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:0.57,y:-25.8},2).to({regX:67.1,scaleX:1.07,scaleY:0.07,y:-58.5},4).to({_off:true},1).wait(72).to({_off:false},0).to({scaleY:0.92,y:-6.5},7).to({y:-4.5},2).to({y:-6.5},2).wait(3));

	// animation
	this.instance_6 = new lib.more_games_3_mc();
	this.instance_6.setTransform(0.3,21.9,1.074,1.074,0,0,0,67.2,47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({scaleX:0.96,scaleY:0.96,x:0.2,y:20.3},4,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07,x:0.3,y:21.9},4,cjs.Ease.get(1)).wait(82).to({y:23.9},2).to({y:21.9},2).wait(3));

	// animation
	this.instance_7 = new lib.more_games_4_mc();
	this.instance_7.setTransform(3,2.2,0.815,0.685,0,0,0,75.3,61.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).to({scaleX:1,scaleY:0.84,x:3.5,y:-3.3},6).to({scaleY:1.09,y:-18.8},6,cjs.Ease.get(1)).to({scaleY:1,y:-13.3},2).wait(58).to({scaleY:0.88,y:-5.7},6).to({regX:75.4,scaleX:0.91,scaleY:0.79,y:1.4},7).to({_off:true},1).wait(7));

	// animation
	this.instance_8 = new lib.more_games_2_mc();
	this.instance_8.setTransform(0.3,6.9,1.074,1.074,0,0,0,67.2,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({scaleX:0.96,scaleY:0.96,x:0.2},4,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07,x:0.3},4,cjs.Ease.get(1)).wait(82).to({y:8.9},2).to({y:6.9},2).wait(3));

	// animation
	this.instance_9 = new lib.more_games_6_mc();
	this.instance_9.setTransform(0.2,-61.5,1.074,0.039,0,180,0,67.1,57.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20).to({_off:false},0).to({regY:57.1,scaleY:0.29,y:-72.8},5).wait(60).to({regY:57.5,scaleY:0.04,y:-61.5},6,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// graph
	this.instance_10 = new lib.more_games_10_mc();
	this.instance_10.setTransform(2.2,16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.3,-59.4,145,139.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-72.2,-59.3,144.9,139.5), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-72.3,-59.4,145,139.6), new cjs.Rectangle(-71.8,-58.9,144,139.1), new cjs.Rectangle(-70.3,-57.6,142.4,137.8), new cjs.Rectangle(-68,-55.4,140.1,135.6), new cjs.Rectangle(-67.6,-52.3,139.7,132.6), new cjs.Rectangle(-68,-55.5,140.1,135.7), new cjs.Rectangle(-70.4,-58.6,142.5,138.9), new cjs.Rectangle(-71.8,-59.5,144,139.7), new cjs.Rectangle(-72.3,-60.3,146.5,140.6), new cjs.Rectangle(-72.2,-61.3,148.7,141.6), new cjs.Rectangle(-72.2,-62.2,151.1,142.5), new cjs.Rectangle(-72.2,-64.6,151.1,144.8), new cjs.Rectangle(-72.2,-71.8,158.9,152), new cjs.Rectangle(-72.2,-77.7,164.1,158), new cjs.Rectangle(-72.2,-83.3,166.4,163.6), new cjs.Rectangle(-72.2,-89.6,166.5,169.9), new cjs.Rectangle(-72.2,-96,165.6,176.2), new cjs.Rectangle(-72.2,-95.9,164.1,176.2), new cjs.Rectangle(-72.2,-95.9,162.5,176.2), new cjs.Rectangle(-72.2,-95.9,161.1,176.2), new cjs.Rectangle(-72.2,-95.9,160.2,176.2), rect=new cjs.Rectangle(-72.2,-95.9,160,176.2), rect, rect, rect, rect, new cjs.Rectangle(-74.5,-95.9,162.3,176.2), rect=new cjs.Rectangle(-72.2,-95.9,160,176.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-74.5,-95.9,162.3,176.2), rect=new cjs.Rectangle(-72.2,-95.9,160,176.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-72.3,-96,160.1,176.2), new cjs.Rectangle(-72.2,-95.1,160.6,175.4), new cjs.Rectangle(-72.2,-92.5,161.4,172.7), new cjs.Rectangle(-72.2,-88.1,162.1,168.3), new cjs.Rectangle(-72.2,-82,162.5,162.3), new cjs.Rectangle(-72.2,-74.2,162.4,154.4), new cjs.Rectangle(-72.2,-64.6,161.3,144.8), new cjs.Rectangle(-72.2,-62.2,158.6,142.5), new cjs.Rectangle(-72.2,-61.8,153.8,142), new cjs.Rectangle(-72.2,-61.4,148,141.6), new cjs.Rectangle(-72.2,-61,147.1,141.2), new cjs.Rectangle(-72.2,-60.6,146,140.8), new cjs.Rectangle(-72.2,-60.2,145,140.4), new cjs.Rectangle(-72.2,-59.8,144.9,140), new cjs.Rectangle(-72.3,-59.4,145,139.6), new cjs.Rectangle(-72.2,-58.3,144.9,138.5), new cjs.Rectangle(-72.3,-57.4,145,137.6), new cjs.Rectangle(-72.2,-58.3,144.9,138.6), rect=new cjs.Rectangle(-72.3,-59.4,145,139.6), rect, rect];


(lib.logo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak2F3QgagPgdgZIABAAQh0hjg1hFIgFgIIgCgBIgKgOIgBgCQgpAyhWBFQgWASgTALQgNAHgNgFQgWgGgZgLQhmgyg0gnQg7gvgmg1QgWgfgNggQgPgggEgiQgLhiA/g0QAnghA2gGQAdgEAaAEQAbgJAfgDQAjgEAjADQAWACAVAFQAjgZA0gGIAAAAIACAAIAKgBIACAAIADAAQAeg8A+gcQA/geBHAKQBSANAyAuQAkAgAZA2QAmgsAsgVIAAAAQA+gfBPANQBIAKAzAvQAPAOAMAPQAwAJAdAbQAXAVAQAiQAYgcAdgOQAegOAlABIgDgHIgCgNIAAgBIAAgBIgBgDIAAgBQgGg2AigcQAWgSAdgEQAhgDAZANQASAJAPASQAKgWAQgMIgBAAQAWgTAhgDQAdgEAZANQApATAGA2IAAADIABAOIAAAFIAHgIIA/gsIADgBIACgBIAIgDQA4gXA6ANQAxAJAjAkQAYAYARAlIAFAKIAAADQAKAZAGAcIAAABIACAPIAAAAQAEAlgEAqIgBALQgJBIgiBNQgeBDhLBnQgSAagTASQgLALgPgBQgaAAgfgGIAAAAQh+gXhDgcQhOghg5gvQgigdgZggIgaAVIgBAAIAEAIQABAFgKADQgIACgLgBQgqAZhDAeQgXAKgSAFQgMADgKgGQgRgKgTgQQgogjgcgcQgFAGgFACQgRAGgQAEQgiAhgoAfIgBAAIgBABQhGAyiJA9QgiAPgeAIIgLACQgMAAgLgHg");

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(-220,0,1,1,30);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({regX:-0.1,regY:0.1,scaleX:0.53,scaleY:0.53,x:-200.1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:29.9,x:0},15).to({regX:0.1,regY:-0.1,scaleX:0.53,scaleY:0.53,rotation:30,x:200.1},15).wait(1));

	// graph
	this.instance_1 = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-40,220,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.instruction_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.instruction_1_mc_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.full_screen_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// icon
	this.instance = new lib.full_screen_1_mc();

	this.instance_1 = new lib.full_screen_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.free_games_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.free_games_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:-5},5).to({y:0},5).to({y:-5},5).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-65,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-65,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-60,120,120)];


(lib.free_games_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.free_games_3_mc();
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// icon
	this.instance_1 = new lib.free_games_1_mc();
	this.instance_1.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.credits_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.credits_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.banner_play_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.banner_play_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:0.83,scaleY:0.83,x:-5},10).to({x:5},10).to({scaleX:1,scaleY:1,x:0},10).wait(21));

	// bg
	this.instance_1 = new lib.banner_play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.banner_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.banner_play_0_mc();
	this.instance.setTransform(-50,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.banner_2_img();
	this.instance_1.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUUMAAAgomIcHAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,275);
p.frameBounds = [rect];


(lib.banner_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.banner_play_0_mc();
	this.instance.setTransform(50,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.banner_1_img();
	this.instance_1.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUTMAAAgolIcHAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,275);
p.frameBounds = [rect];


(lib.again_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.again_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.title_antiblocking_ads_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_antiblocking_ads_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-320,-140,640,280);
p.frameBounds = [rect];


(lib.antiblocking_ads_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.title_antiblocking_ads_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-320,-140,640,280);
p.frameBounds = [rect];


(lib.redirect_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.remove_btn = new lib.remove_btn();
	this.remove_btn.setTransform(580,115);
	new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.remove_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

	// banner
	this.banner_mc = new lib.redirect_2_mc();
	this.banner_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.banner_mc).wait(1));

	// bg
	this.instance = new lib.redirect_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,610);
p.frameBounds = [rect];


(lib.preloader_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.preloader_6_mc();
	this.indicator_mc.setTransform(-130,-15);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-35,300,70);
p.frameBounds = [rect];


(lib.orientation_lock_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_7_mc();
	this.instance.setTransform(-18.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-12,107,24);
p.frameBounds = [rect];


(lib.orientation_lock_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_9_mc();
	this.instance.setTransform(0,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.orientation_lock_5_mc();
	this.instance_1.setTransform(0,210);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.orientation_lock_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.orientation_lock_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-250,300,500);
p.frameBounds = [rect];


(lib.orientation_lock_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_10_mc();
	this.instance.setTransform(440,210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.orientation_lock_2_mc();
	this.instance_1.setTransform(210,280.1,0.833,0.833,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.orientation_lock_2_mc();
	this.instance_2.setTransform(510,430,0.833,0.833,90);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(85,71.7,633.3,483.3);
p.frameBounds = [rect];


(lib.orientation_lock_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhduAwcMAAAhg2MC7dAAAMAAABg2g");
	this.shape.setTransform(400,300,1.35,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.InstructionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.remove_btn = new lib.remove_btn();
	this.remove_btn.setTransform(750,50);
	new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.remove_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

	// text
	this.instance = new lib.instruction_2_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.instruction_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.title_start_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_start_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// decor
	this.instance = new lib.window_popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-140,340,280);
p.frameBounds = [rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(400.1,570.1,0.647,0.647,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// result
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(400,255);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// title
	this.instance = new lib.title_result_mc();
	this.instance.setTransform(400.5,300.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_1_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-9.5,1600,620);
p.frameBounds = [rect];


(lib.animation_title_start_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// animation
	this.instance = new lib.title_start_mc();
	this.instance.setTransform(0.5,0,1,1,0,0,0,0.5,0);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.06,scaleY:1.06,x:0.6,alpha:0.672},15).to({scaleX:1,scaleY:1,x:0.5,alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-140,340,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-170.6,-140.5,341.4,281.1), new cjs.Rectangle(-171.3,-141,342.7,282.2), new cjs.Rectangle(-171.9,-141.6,344,283.3), new cjs.Rectangle(-172.6,-142.1,345.4,284.4), new cjs.Rectangle(-173.3,-142.7,346.7,285.5), new cjs.Rectangle(-173.9,-143.2,348,286.6), new cjs.Rectangle(-174.6,-143.8,349.4,287.7), new cjs.Rectangle(-175.2,-144.3,350.7,288.8), new cjs.Rectangle(-175.9,-144.9,352,289.9), new cjs.Rectangle(-176.6,-145.4,353.4,291), new cjs.Rectangle(-177.2,-146,354.7,292.1), new cjs.Rectangle(-177.9,-146.5,356,293.2), new cjs.Rectangle(-178.6,-147.1,357.4,294.3), new cjs.Rectangle(-179.2,-147.6,358.7,295.4), new cjs.Rectangle(-180,-148.2,360,296.4), new cjs.Rectangle(-177.9,-146.5,356,293.2), new cjs.Rectangle(-175.9,-144.9,352,289.9), new cjs.Rectangle(-173.9,-143.2,348,286.6), new cjs.Rectangle(-171.9,-141.6,344,283.3), new cjs.Rectangle(-170,-140,340,280)];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1400,0,3600,600);
p.frameBounds = [rect];


(lib.CopyrightScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.copyright_2_mc();
	this.screen_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

	// bg
	this.instance = new lib.copyright_1_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.simple_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// currentLevel
	this.currentLevel_mc = new lib.simple_level_3_mc();
	this.currentLevel_mc.setTransform(-78,0);

	this.timeline.addTween(cjs.Tween.get(this.currentLevel_mc).wait(1));

	// separator
	this.instance = new lib.separator_level_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// totalLevels
	this.totalLevels_mc = new lib.simple_level_4_mc();
	this.totalLevels_mc.setTransform(78,0);

	this.timeline.addTween(cjs.Tween.get(this.totalLevels_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146,-45,292,90);
p.frameBounds = [rect];


(lib.GravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2019 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		var body_mc = this.body_mc;
		body_mc.gotoAndStop(0);
		var example_mc = body_mc.example_mc;
		example_mc.gotoAndStop(0);
		example_mc.visible = false;
		/*
		переменные
		*/
		var _that = this;
		var _particleMaxSpeed_num = 4;
		var _particleFadeSpeed_num = 0.01;
		var _particleTotal_num = 25;
		var _particleRange_num = 100;
		var _gravity_num = 0.4;
		/*
		функция добавления частиц
		*/
		function _createExplosionFunc()
		{
			/*
			
			*/
			var particle_mc;
			var i = 0;
			/*
			
			*/
			while (i < _particleTotal_num)
			{
				/*
				
				*/
				var particle_mc = new lib.ParticleGravityExplosionMC();
				body_mc.addChild(particle_mc);
				particle_mc.gotoAndStop(0);
				particle_mc.gotoAndStop(Math.floor(Math.random() * particle_mc.totalFrames));
				particle_mc.x = 0;
				particle_mc.y = 0;
				particle_mc.rotation = Math.random() * 360;
				particle_mc.alpha = Math.random() * (1 - 0.5) + 0.5;
				/*
				
				*/
				particle_mc.boundyLeft_num = - _particleRange_num;
				particle_mc.boundyTop_num = - _particleRange_num;
				particle_mc.boundyRight_num = _particleRange_num;
				particle_mc.boundyBottom_num = _particleRange_num;
				/*
				
				*/
				particle_mc.speedX_num = Math.random() * _particleMaxSpeed_num - Math.random() * _particleMaxSpeed_num;
				particle_mc.speedY_num = Math.random() * _particleMaxSpeed_num - (Math.random() * _particleMaxSpeed_num);
				particle_mc.speedX_num *= _particleMaxSpeed_num;
				particle_mc.speedY_num *= _particleMaxSpeed_num;
				/*
				
				*/
				particle_mc.fadeSpeed_num = Math.random() * _particleFadeSpeed_num;
				/*
				
				*/
				particle_mc.addEventListener("tick", _onTickParticleFunc, false);
				/*
				
				*/
				i++;
			}
		}
		/*
		обновляем в каждом кадре
		*/
		function _onTickParticleFunc(event)
		{
			/*
			получаем частицу
			*/
			var target_mc = event.target;
			//target_mc.gotoAndStop(0);
			/*
			
			*/
			target_mc.alpha -= target_mc.fadeSpeed_num;
			target_mc.x += target_mc.speedX_num;
			target_mc.y += target_mc.speedY_num;
			/*
			
			*/
			if(target_mc.speedY_num < _particleMaxSpeed_num)
			{
				target_mc.speedY_num += _gravity_num;
			}
			/*
			
			*/
			if (target_mc.alpha <= 0 ||	target_mc.x < target_mc.boundyLeft_num || target_mc.x > target_mc.boundyRight_num || target_mc.y < target_mc.boundyTop_num || target_mc.y > target_mc.boundyBottom_num)
			{
				/*
				
				*/
				target_mc.parent.removeChild(target_mc);
				/*
				
				*/
				_particleTotal_num--;
				if(_particleTotal_num <= 0)
				{
					_that.parent.removeChild(_that);
				}
			}
		}
		/*
		запускаем
		*/
		_createExplosionFunc();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.gravity_explosion_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.genshin_star_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2023 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		/*
		
		*/
		var _body_mc = this.body_mc;
		_body_mc.gotoAndStop(0);
		_body_mc.loop = false;
		_body_mc.visible = false;
		/*
		
		*/
		var _timeOut_id;
		/*
		
		*/
		function _initAnimationBarbieStarFunc()
		{
			if(_timeOut_id != null)
			{
				clearTimeout(_timeOut_id);
			}
			timeOut_id = setTimeout(_startAnimationBarbieStarFunc, 1000 + (Math.random() * 2000));
		}
		/*
		
		*/
		function _startAnimationBarbieStarFunc()
		{
			try
			{
				/*
				
				*/
				_body_mc.gotoAndPlay(0);
				_body_mc.visible = true;
				/*
				
				*/
				_initAnimationBarbieStarFunc();
			}
			catch(event)
			{
				
			}
			finally
			{
				
			}
		}
		/*
		
		*/
		_initAnimationBarbieStarFunc();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.genshin_star_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.blinking_light_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2019 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		/*
		
		*/
		var _body_mc = this.body_mc;
		_body_mc.gotoAndStop(0);
		_body_mc.visible = false;
		/*
		
		*/
		var timeOut_id = setTimeout(_startAnimationBlinkingLightFunc, Math.random() * 2000);
		function _startAnimationBlinkingLightFunc()
		{
			/*
			
			*/
			clearTimeout(timeOut_id);
			/*
			
			*/
			_body_mc.play();
			_body_mc.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.blinking_light_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.sound_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// icon
	this.instance = new lib.sound_1_mc();

	this.instance_1 = new lib.sound_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect];


(lib.more_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApNOEQhXgBg9g9Qg9g+gBhWIAA1jQABhWA9g+QA9g9BXgBISbAAQBWABA+A9QA9A+ABBWIAAVjQgBBWg9A+Qg+A9hWABg");
	this.shape.setTransform(0,-9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-99,160,180);
p.frameBounds = [rect];


(lib.more_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-99,160,180);
p.frameBounds = [rect, rect, rect, rect];


(lib.logo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_0_mc();
	this.instance.setTransform(0,0,0.909,0.909);

	this.instance_1 = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.909,scaleY:0.909,alpha:0.801}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-372.6,-230.8,472.7,461.7);
p.frameBounds = [rect, new cjs.Rectangle(-110,-40,220,80), new cjs.Rectangle(-100,-36.3,200,72.7), new cjs.Rectangle(-110,-40,220,80)];


(lib.instruction_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_0_mc();
	this.instance.setTransform(0,0,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect, rect, rect];


(lib.free_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_0_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-55,-55,110,110), new cjs.Rectangle(-60,-60,120,120)];


(lib.credits_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_0_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-55,-55,110,110), new cjs.Rectangle(-60,-60,120,120)];


(lib.again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.again_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect];


(lib.AntiBlockingAdsScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.remove_btn = new lib.remove_btn();
	this.remove_btn.setTransform(750,50);
	new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.remove_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

	// text
	this.instance = new lib.antiblocking_ads_2_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.antiblocking_ads_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.RedirectScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.redirect_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,610);
p.frameBounds = [rect];


(lib.PreloaderScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_mc = new lib.preloader_5_mc();
	this.logo_mc.setTransform(400,260);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

	// play
	this.play_mc = new lib.preloader_12_mc();
	this.play_mc.setTransform(400,495);

	this.timeline.addTween(cjs.Tween.get(this.play_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.preloader_9_mc();
	this.indicator_mc.setTransform(400,495);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.bg_mc = new lib.preloader_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.OrientationLockScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.orientation_lock_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,800.5,0.75,0.75,0,0,0,0.7,0.7);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(700,500);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,500);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(400,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.social_network_mc}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(720,-200,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-200,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.199;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-319.9,1600,1165);
p.frameBounds = [rect];


(lib.completed_ray_light_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// decor
	this.instance = new lib.genshin_star_mc();
	this.instance.setTransform(-169.9,-14.9,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_1 = new lib.genshin_star_mc();
	this.instance_1.setTransform(200.1,60.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_2 = new lib.genshin_star_mc();
	this.instance_2.setTransform(180.1,-99.9,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_3 = new lib.genshin_star_mc();
	this.instance_3.setTransform(-89.9,170.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_4 = new lib.genshin_star_mc();
	this.instance_4.setTransform(-94.9,-174.9,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_5 = new lib.genshin_star_mc();
	this.instance_5.setTransform(95.1,175.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_6 = new lib.genshin_star_mc();
	this.instance_6.setTransform(110.1,-204.9,0.5,0.5,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},14).wait(1));

	// animation
	this.instance_7 = new lib.completed_ray_light_2_mc();
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({scaleX:0.67,scaleY:0.67},0).to({scaleX:1,scaleY:1,alpha:0.602},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-300,600,600);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-200,-200,400,400), new cjs.Rectangle(-209.9,-209.9,420,420), new cjs.Rectangle(-219.9,-219.9,440,440), new cjs.Rectangle(-229.9,-229.9,460,460), new cjs.Rectangle(-239.9,-239.9,480,480), new cjs.Rectangle(-249.9,-249.9,500,500), new cjs.Rectangle(-259.9,-259.9,520,520), new cjs.Rectangle(-269.9,-269.9,540,540), new cjs.Rectangle(-279.9,-279.9,560,560), new cjs.Rectangle(-289.9,-289.9,580,580), new cjs.Rectangle(-300,-300,600,600)];


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.popup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.animation_title_start_mc();
	this.instance.setTransform(140,280);

	this.instance_1 = new lib.animation_title_completed_mc();
	this.instance_1.setTransform(140,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.completed_ray_light_1_mc();
	this.instance_2.setTransform(140,280);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// bg
	this.instance_3 = new lib.bg_popup_mc();
	this.instance_3.alpha = 0.602;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect, new cjs.Rectangle(-200,-20,1200,620)];


(lib.LocationScreen_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_50_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_49_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_48_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_47_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_46_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_45_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_44_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_43_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_42_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_41_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_40_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_39_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_38_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_37_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_36_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_35_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_34_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_33_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_32_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_31_mc();
	this.panel_mc.setTransform(270,50);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_30_mc();
	this.panel_mc.setTransform(350,100);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_29_mc();
	this.panel_mc.setTransform(350,100);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_28_mc();
	this.panel_mc.setTransform(350,100);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_27_mc();
	this.panel_mc.setTransform(350,100);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_26_mc();
	this.panel_mc.setTransform(350,100);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_25_mc();
	this.panel_mc.setTransform(350,100);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_24_mc();
	this.panel_mc.setTransform(350,100);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_23_mc();
	this.panel_mc.setTransform(350,100);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_22_mc();
	this.panel_mc.setTransform(350,100);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_21_mc();
	this.panel_mc.setTransform(350,100);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_20_mc();
	this.panel_mc.setTransform(360,120);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_19_mc();
	this.panel_mc.setTransform(360,120);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_18_mc();
	this.panel_mc.setTransform(360,120);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_17_mc();
	this.panel_mc.setTransform(360,120);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_16_mc();
	this.panel_mc.setTransform(360,120);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_15_mc();
	this.panel_mc.setTransform(360,120);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_14_mc();
	this.panel_mc.setTransform(360,120);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_13_mc();
	this.panel_mc.setTransform(360,120);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_12_mc();
	this.panel_mc.setTransform(360,120);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_11_mc();
	this.panel_mc.setTransform(360,120);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_10_mc();
	this.panel_mc.setTransform(380,140);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_9_mc();
	this.panel_mc.setTransform(380,140);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_8_mc();
	this.panel_mc.setTransform(380,140);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_7_mc();
	this.panel_mc.setTransform(380,140);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_6_mc();
	this.panel_mc.setTransform(380,140);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_5_mc();
	this.panel_mc.setTransform(380,140);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_4_mc();
	this.panel_mc.setTransform(380,140);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_3_mc();
	this.panel_mc.setTransform(380,140);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_2_mc();
	this.panel_mc.setTransform(380,140);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// puzzle
	this.panel_mc = new lib.panel_1_mc();
	this.panel_mc.setTransform(380,140);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// level
	this.simple_level_comp = new lib.simple_level_mc();
	this.simple_level_comp.setTransform(130,40,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.simple_level_comp).wait(1));

	// timer
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(130.2,550.2,0.511,0.511,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// decor
	this.instance = new lib.timer_bg_mc();
	this.instance.setTransform(130,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1161.9);
p.frameBounds = [rect];


(lib.bubble_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.2
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		var container_mc = this.container_mc;
		container_mc.gotoAndStop(0);
		var _containerBounds_rect = container_mc.getBounds();
		/*
		константы
		*/
		var _SPEED_NUM = 0.75;
		var _CURRENT_NUM = 0.25;
		var _BUBBLE_DIAMETER_NUM = 50;
		/*
		создаём n-ое количество пузырей
		*/
		_createBubblesFunc(16);
		/*
		функция, создающая пузыри
		*/
		function _createBubblesFunc(bubbles_num) 
		{
			/*
			переменные
			*/
			var randomScale_num;
			var i = 0;
			/*
			цикл
			*/
			while (i < bubbles_num) 
			{
				/*
				создаём пузырь
				*/
				var bubble_mc = new lib.Bubble();
				container_mc.addChild(bubble_mc);
				bubble_mc.gotoAndStop(0);
				bubble_mc.gotoAndStop(Math.floor(Math.random() * bubble_mc.totalFrames));
				bubble_mc.rad = Math.random() * _CURRENT_NUM - Math.random() * _CURRENT_NUM;
				randomScale_num = Math.random() * (1 - 0.5) + 0.5;
				bubble_mc.scaleX = randomScale_num;
				bubble_mc.scaleY = randomScale_num;
				bubble_mc.alpha = randomScale_num;
				bubble_mc.x = Math.random() * _containerBounds_rect.width;
				bubble_mc.y = Math.random() * _containerBounds_rect.height;
				bubble_mc.addEventListener("tick", _onTickBubbleFunc, false);
				/*
				обновление итератора
				*/
				i++;
			}
		}
		/*
		обновляем в каждом кадре
		*/
		function _onTickBubbleFunc(event)
		{
			/*
			получаем пузырь
			*/
			var target_mc = event.target;
			target_mc.gotoAndStop(0);
			/*
			обновляем координаты
			*/
			target_mc.x -= target_mc.rad;
			target_mc.y -= _SPEED_NUM;
			/*
			если пузырь уходит за границы, то исправляем это
			*/
			if (target_mc.y <= 0)
			{
				target_mc.y = _containerBounds_rect.height - _BUBBLE_DIAMETER_NUM;
			}
			if (target_mc.x >= _containerBounds_rect.width - _BUBBLE_DIAMETER_NUM)
			{
				target_mc.x = 1;
			}
			if (target_mc.x <= 0)
			{
				target_mc.x = _containerBounds_rect.width - _BUBBLE_DIAMETER_NUM;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bubble
	this.instance = new lib.Bubble();
	this.instance.setTransform(600,650);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.bubble_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,675);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,1000.5,0.75,0.75,0,0,0,0.7,0.7);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,800,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(745,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(210,480);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.play_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.social_network_mc}]}).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.102;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// heroes
	this.instance_1 = new lib.heroes_0_mc();
	this.instance_1.setTransform(326,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// title
	this.instance_2 = new lib.title_mc();
	this.instance_2.setTransform(220.5,220.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1325.9);
p.frameBounds = [rect];


(lib.storage_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(70));

	// storage
	this.text = new cjs.Text("storage", "64px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 74;
	this.text.lineWidth = 252;
	this.text.setTransform(128.2,2);

	this.instance = new lib.PreloaderScreen();

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.LocationScreen_1();

	this.instance_4 = new lib.LocationScreen_2();

	this.instance_5 = new lib.LocationScreen_3();

	this.instance_6 = new lib.LocationScreen_4();

	this.instance_7 = new lib.LocationScreen_5();

	this.instance_8 = new lib.LocationScreen_6();

	this.instance_9 = new lib.LocationScreen_7();

	this.instance_10 = new lib.LocationScreen_8();

	this.instance_11 = new lib.LocationScreen_9();

	this.instance_12 = new lib.LocationScreen_10();

	this.instance_13 = new lib.LocationScreen_11();

	this.instance_14 = new lib.LocationScreen_12();

	this.instance_15 = new lib.LocationScreen_13();

	this.instance_16 = new lib.LocationScreen_14();

	this.instance_17 = new lib.LocationScreen_15();

	this.instance_18 = new lib.LocationScreen_16();

	this.instance_19 = new lib.LocationScreen_17();

	this.instance_20 = new lib.LocationScreen_18();

	this.instance_21 = new lib.LocationScreen_19();

	this.instance_22 = new lib.LocationScreen_20();

	this.instance_23 = new lib.LocationScreen_21();

	this.instance_24 = new lib.LocationScreen_22();

	this.instance_25 = new lib.LocationScreen_23();

	this.instance_26 = new lib.LocationScreen_24();

	this.instance_27 = new lib.LocationScreen_25();

	this.instance_28 = new lib.LocationScreen_26();

	this.instance_29 = new lib.LocationScreen_27();

	this.instance_30 = new lib.LocationScreen_28();

	this.instance_31 = new lib.LocationScreen_29();

	this.instance_32 = new lib.LocationScreen_30();

	this.instance_33 = new lib.LocationScreen_31();

	this.instance_34 = new lib.LocationScreen_32();

	this.instance_35 = new lib.LocationScreen_33();

	this.instance_36 = new lib.LocationScreen_34();

	this.instance_37 = new lib.LocationScreen_35();

	this.instance_38 = new lib.LocationScreen_36();

	this.instance_39 = new lib.LocationScreen_37();

	this.instance_40 = new lib.LocationScreen_38();

	this.instance_41 = new lib.LocationScreen_39();

	this.instance_42 = new lib.LocationScreen_40();

	this.instance_43 = new lib.LocationScreen_41();

	this.instance_44 = new lib.LocationScreen_42();

	this.instance_45 = new lib.LocationScreen_43();

	this.instance_46 = new lib.LocationScreen_44();

	this.instance_47 = new lib.LocationScreen_45();

	this.instance_48 = new lib.LocationScreen_46();

	this.instance_49 = new lib.LocationScreen_47();

	this.instance_50 = new lib.LocationScreen_48();

	this.instance_51 = new lib.LocationScreen_49();

	this.instance_52 = new lib.LocationScreen_50();

	this.instance_53 = new lib.RedirectScreen();

	this.instance_54 = new lib.ResultScreen();

	this.instance_55 = new lib.InstructionScreen();

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(280,50);

	this.instance_56 = new lib.Cursor();
	this.instance_56.setTransform(200,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(120.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(50.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_57 = new lib.PiecesPuzzle();

	this.instance_58 = new lib.OrientationLockScreen();

	this.instance_59 = new lib.CurtainScreen();

	this.instance_60 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_56},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[]},1).to({state:[{t:this.instance_60}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, new cjs.Rectangle(-400,-280.8,1600,1325.9), rect=new cjs.Rectangle(-400,-280.8,1600,1161.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,0,1600,610), new cjs.Rectangle(-400,-319.9,1600,1165), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(15,15,283,70), null, new cjs.Rectangle(-410,-10,1620,620), new cjs.Rectangle(-1400,0,3600,600), rect=null, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


// stage content:
(lib.storage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// storage
	this.instance = new lib.storage_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(400,300,256.5,75.5);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
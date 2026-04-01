/*
* @author edapskov
* @copyright 2019 edapskov v 7.001
*/
function Application()
{
	/*
	константы
	*/
	var _CWIDTH = 800;
	var _CHEIGHT = 600;
	var _BGWIDTH = 1600;
	var _BGHEIGHT = 600;
	var _INDENT = 10;
	var _BGCOLOR = "#000000";
	var _FONT = "Arial";
	var _TITLE = "Incredible Princesses and Villains Puzzle";
	var _LINKTOGAME = "https://dl-girls.com";
	var _DELAY = 1;
	var _LANGUAGE = "en";
	/*
	публичные переменные
	*/
	this.copyright = "© DL-Studio, v 7.001";
	/*
	приватные переменные
	*/
	var _stage;
	var _main;
	var _level_1_mc;
	var _level_2_mc;
	var _counterPieces_num;
	var _totalPieces_num;
	var _before;
	var _cursor;
	var _shadowScreen;
	var _debugger;
	var _soundManager;
	var _fullScreenCanvasManager;
	var _information = {
		currentLocation:null,
		currentNameLocation:null,
		totalLocations:null,
		userIime:null,
		timeout_id:null,
		interval_id:null,
		locations:{
			location_1:{
				thorn:"studless",
				puzzleWidth:300,
				puzzleHeight:300,
				columns:2,
				rows:2,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_2:{
				thorn:"studless",
				puzzleWidth:300,
				puzzleHeight:300,
				columns:2,
				rows:2,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_3:{
				thorn:"default",
				puzzleWidth:300,
				puzzleHeight:300,
				columns:2,
				rows:2,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_4:{
				thorn:"default",
				puzzleWidth:300,
				puzzleHeight:300,
				columns:2,
				rows:2,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_5:{
				thorn:"square",
				puzzleWidth:300,
				puzzleHeight:300,
				columns:2,
				rows:2,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_6:{
				thorn:"triangle",
				puzzleWidth:300,
				puzzleHeight:300,
				columns:2,
				rows:2,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_7:{
				thorn:"mushroom",
				puzzleWidth:300,
				puzzleHeight:300,
				columns:2,
				rows:2,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_8:{
				thorn:"studless",
				puzzleWidth:300,
				puzzleHeight:300,
				columns:3,
				rows:3,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_9:{
				thorn:"default",
				puzzleWidth:300,
				puzzleHeight:300,
				columns:3,
				rows:3,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_10:{
				thorn:"mushroom",
				puzzleWidth:300,
				puzzleHeight:300,
				columns:3,
				rows:3,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_11:{
				thorn:"studless",
				puzzleWidth:350,
				puzzleHeight:350,
				columns:3,
				rows:3,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_12:{
				thorn:"studless",
				puzzleWidth:350,
				puzzleHeight:350,
				columns:3,
				rows:3,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_13:{
				thorn:"default",
				puzzleWidth:350,
				puzzleHeight:350,
				columns:3,
				rows:3,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_14:{
				thorn:"default",
				puzzleWidth:350,
				puzzleHeight:350,
				columns:3,
				rows:3,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_15:{
				thorn:"square",
				puzzleWidth:350,
				puzzleHeight:350,
				columns:3,
				rows:3,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_16:{
				thorn:"triangle",
				puzzleWidth:350,
				puzzleHeight:350,
				columns:3,
				rows:3,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_17:{
				thorn:"mushroom",
				puzzleWidth:350,
				puzzleHeight:350,
				columns:3,
				rows:3,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_18:{
				thorn:"studless",
				puzzleWidth:350,
				puzzleHeight:350,
				columns:4,
				rows:4,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_19:{
				thorn:"default",
				puzzleWidth:350,
				puzzleHeight:350,
				columns:4,
				rows:4,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_20:{
				thorn:"mushroom",
				puzzleWidth:350,
				puzzleHeight:350,
				columns:4,
				rows:4,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_21:{
				thorn:"studless",
				puzzleWidth:400,
				puzzleHeight:400,
				columns:3,
				rows:4,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_22:{
				thorn:"studless",
				puzzleWidth:400,
				puzzleHeight:400,
				columns:4,
				rows:3,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_23:{
				thorn:"default",
				puzzleWidth:400,
				puzzleHeight:400,
				columns:4,
				rows:4,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_24:{
				thorn:"default",
				puzzleWidth:400,
				puzzleHeight:400,
				columns:4,
				rows:4,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_25:{
				thorn:"square",
				puzzleWidth:400,
				puzzleHeight:400,
				columns:4,
				rows:4,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_26:{
				thorn:"triangle",
				puzzleWidth:400,
				puzzleHeight:400,
				columns:4,
				rows:4,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_27:{
				thorn:"studless",
				puzzleWidth:400,
				puzzleHeight:400,
				columns:4,
				rows:4,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_28:{
				thorn:"studless",
				puzzleWidth:400,
				puzzleHeight:400,
				columns:4,
				rows:3,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_29:{
				thorn:"default",
				puzzleWidth:400,
				puzzleHeight:400,
				columns:4,
				rows:4,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_30:{
				thorn:"mushroom",
				puzzleWidth:400,
				puzzleHeight:400,
				columns:4,
				rows:4,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_31:{
				thorn:"studless",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:4,
				rows:5,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_32:{
				thorn:"studless",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:5,
				rows:4,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_33:{
				thorn:"default",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:5,
				rows:5,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_34:{
				thorn:"square",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:5,
				rows:5,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_35:{
				thorn:"default",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:5,
				rows:5,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_36:{
				thorn:"triangle",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:5,
				rows:5,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_37:{
				thorn:"mushroom",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:5,
				rows:5,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_38:{
				thorn:"square",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:5,
				rows:5,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_39:{
				thorn:"default",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:5,
				rows:5,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_40:{
				thorn:"mushroom",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:5,
				rows:5,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_41:{
				thorn:"studless",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:4,
				rows:5,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_42:{
				thorn:"default",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:5,
				rows:5,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_43:{
				thorn:"square",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:5,
				rows:5,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_44:{
				thorn:"triangle",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:5,
				rows:5,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_45:{
				thorn:"mushroom",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:5,
				rows:5,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_46:{
				thorn:"studless",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:6,
				rows:6,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_47:{
				thorn:"studless",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:6,
				rows:5,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_48:{
				thorn:"default",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:6,
				rows:6,
				showHint:true,
				selected:null,
				completed:null,
				userIime:null
			},
			location_49:{
				thorn:"default",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:6,
				rows:6,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			},
			location_50:{
				thorn:"square",
				puzzleWidth:500,
				puzzleHeight:500,
				columns:6,
				rows:6,
				showHint:false,
				selected:null,
				completed:null,
				userIime:null
			}
		}
	};
	var _currentMainScreen_mc;
	var _currentBeforeScreen_mc;
	var _action_mc;
	/*
	
	*/
	this.initFunc = function()
	{
		/*
		
		*/
		var canvas = document.getElementById("canvas");
		/*
		
		*/
		var elementTitle = document.getElementsByTagName("title")[0];
		elementTitle.innerHTML = _TITLE;
		/*
		добавляем контекстное меню
		*/
		try
		{
			var contextmenu = document.createElement("menu");
			document.body.appendChild(contextmenu);
			contextmenu.type = "context";
			contextmenu.id = "contextmenu";
			var menuitem_1 = document.createElement("menuitem");
			contextmenu.appendChild(menuitem_1);
			menuitem_1.innerHTML = "&nbsp;" + _TITLE + "&nbsp;";
			menuitem_1.addEventListener("click", _onClickLogoBtnFunc, false);
			var menuitem_2 = document.createElement("menuitem");
			contextmenu.appendChild(menuitem_2);
			menuitem_2.innerHTML = "&nbsp;" + this.copyright + "&nbsp;";
			menuitem_2.addEventListener("click", _onClickCopyrightMenuItemFunc, false);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
		/*
		
		*/
		_stage = new createjs.Stage(canvas);
		if(createjs.Touch.isSupported())
		{
			/*
			
			*/
			createjs.Touch.enable(_stage);
			/*
			
			*/
			_stage.addEventListener("stagemousedown", _onStageMouseDownFunc, false);
			_stage.addEventListener("stagemousemove", _onStageMouseMoveFunc, false);
			_stage.addEventListener("stagemouseup", _onStageMouseUpFunc, false);
		}
		else
		{
			/*
			
			*/
			_stage.enableMouseOver(10);
			/*
			
			*/
			_stage.addEventListener("stagemousemove", _onStageMouseMoveFunc, false);
		}
		/*
		
		*/
		createjs.Ticker.addEventListener("tick", _onTickFunc, false);
		createjs.Ticker.framerate = lib.properties.fps;
		/*
		
		*/
		var container = new createjs.Container();
		var backgroundContainer = new createjs.Shape();
		backgroundContainer.graphics.beginFill(_BGCOLOR);
		backgroundContainer.graphics.drawRect(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		backgroundContainer.graphics.endFill();
		container.addChild(backgroundContainer);
		_stage.addChild(container);
		/*
		
		*/
		var maskContainer = new createjs.Shape();
		maskContainer.graphics.beginFill(_BGCOLOR);
		maskContainer.graphics.drawRect(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		maskContainer.graphics.endFill();
		maskContainer.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		maskContainer.mouseChildren = false;
		maskContainer.mouseEnabled = false;
		container.mask = maskContainer;
		/*
		контейнер для основной программы
		*/
		_main = new createjs.Container();
		container.addChild(_main);
		/*
		
		*/
		_soundManager = new Edapskov_SoundManager();
		_soundManager.initFunc();
		_soundManager.setInvisibleFunc(false);
		//_soundManager.setVolumeFunc(0.4);
		/*
		
		*/
		_fullScreenCanvasManager = new Edapskov_FullScreenCanvasManager();
		_fullScreenCanvasManager.initFunc();
		/*
		контейнер для вспомогательных окон
		*/
		_before = new createjs.Container();
		container.addChild(_before);
		/*
		
		*/
		_cursor = new createjs.Container();
		container.addChild(_cursor);
		_cursorUpdateFunc();
		/*
		
		*/
		_shadowScreen = new createjs.Container();
		container.addChild(_shadowScreen);
		// затемнение
		var shadowContainer = new createjs.Container();
		_shadowScreen.addChild(shadowContainer);
		shadowContainer.name = "shadowContainer";
		var shadowContainer_part_1 = new createjs.Shape();
		shadowContainer_part_1.graphics.beginFill(_BGCOLOR);
		shadowContainer_part_1.graphics.drawRect(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		shadowContainer_part_1.graphics.endFill();
		shadowContainer.addChild(shadowContainer_part_1);
		try
		{
			var shadowContainer_part_2 = new createjs.Shape();
			shadowContainer_part_2.graphics.beginRadialGradientFill([_BGCOLOR, _BGCOLOR], [0, 1], _BGWIDTH / 2, _CHEIGHT / 2, 0, _BGWIDTH / 2, _CHEIGHT / 2, (_BGWIDTH + _CHEIGHT) / 2);
			shadowContainer_part_2.graphics.drawRect(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
			shadowContainer_part_2.graphics.endFill();
			shadowContainer.addChild(shadowContainer_part_2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
		shadowContainer.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		// контейнер для анимации перехода
		var curtainContainer = new createjs.Container();
		_shadowScreen.addChild(curtainContainer);
		curtainContainer.name = "curtainContainer";
		// делаем некликабельным
		_shadowScreen.mouseChildren = false;
		_shadowScreen.mouseEnabled = false;
		/*
		контейнер для вывода сообщения о запрете поворота экрана
		*/
		_orientationLock = new createjs.Container();
		container.addChild(_orientationLock);
		/*
		
		*/
		_debugger = new Edapskov_Debugger();
		_debugger.initFunc(container, _CWIDTH, _CHEIGHT);
		/*
		
		*/
		window.addEventListener("keydown", _onKeyPressFunc, false);
		window.addEventListener("resize", _onResizeWindowFunc, false);
		window.addEventListener("orientationchange", _onResizeWindowFunc, false);
		_onResizeWindowFunc();
		/*
		понакупают айфончиков...
		*/
		_initOrientationChangeIphoneFunc();
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_preloaderFunc);
	}
	/*
	
	*/
	this.stopAppFunc = function()
	{
		_stopAppFunc();
	}
	this.playAppFunc = function()
	{
		_playAppFunc();
	}
	this.addSoundFunc = function(nameSound_str, initVolume_num)
	{
		if(initVolume_num === undefined)
		{
			initVolume_num = 1;
		}
		_soundManager.addSoundFunc(nameSound_str, 0, 0, 0, initVolume_num, 0);
	}
	/*
	
	*/
	function _onResizeWindowFunc()
	{
		/*
		
		*/
		var innerWidth_num = window.innerWidth;
		var innerHeight_num = window.innerHeight;
		var devicePixelRatio_num = 1;
		if(window.devicePixelRatio)
		{
			devicePixelRatio_num = window.devicePixelRatio;
		}
		/*
		
		*/
		var ratio_num = _CWIDTH / _CHEIGHT;
		var windowRatio_num = innerWidth_num / innerHeight_num;
		var scale_num = innerWidth_num / _CWIDTH;
		if (windowRatio_num > ratio_num)
		{
			scale_num = innerHeight_num / _CHEIGHT;
		}
		/*
		костыль, ограничивающий масштабирование в Firefox
		*/
		/*
		var userAgent_str = navigator.userAgent.toLowerCase();
		if(userAgent_str.indexOf("firefox") >= 0)
		{
			if(scale_num > 1)
			{
				scale_num = 1;
			}
		}
		*/
		/*
		
		*/
		_stage.canvas.width = Math.round(innerWidth_num * devicePixelRatio_num);
		_stage.canvas.height = Math.round(innerHeight_num * devicePixelRatio_num);
		/*
		
		*/
		_stage.canvas.style.width = innerWidth_num + "px";
		_stage.canvas.style.height = innerHeight_num + "px";
		/*
		
		*/
		_stage.scaleX = scale_num * devicePixelRatio_num;
		_stage.scaleY = scale_num * devicePixelRatio_num;
		/*
		
		*/
		_stage.x = Math.round(((innerWidth_num - (_CWIDTH * scale_num)) / 2) * devicePixelRatio_num);
		_stage.y = Math.round(((innerHeight_num - (_CHEIGHT * scale_num)) / 2) * devicePixelRatio_num);
		/*
		выводим сообщение о запрете поворота экрана
		*/
		_clearContainerFunc(_orientationLock);
		if(!_isLandscapeOrientationFunc())
		{
			if(lib.OrientationLockScreen)
			{
				var orientationLock_mc = new lib.OrientationLockScreen();
				_orientationLock.addChild(orientationLock_mc);
				orientationLock_mc.gotoAndStop(0);
				if(orientationLock_mc.screen_mc)
				{
					orientationLock_mc.screen_mc.gotoAndStop(0);
					orientationLock_mc.screen_mc.addEventListener("click", _onClickScreenMcOrientationLockScreenFunc, false);
				}
			}
		}
		/*
		
		*/
		_stage.update();
	}
	function _isLandscapeOrientationFunc()
	{
		/*
		
		*/
		var landscapeOrientation_bool = true;
		var platform_str = navigator.platform.toLowerCase();
		/*
		
		*/
		if(window.screen.orientation)
		{
			if(window.screen.orientation.type)
			{
				if(window.screen.orientation.type == "portrait-primary" || window.screen.orientation.type == "portrait-secondary")
				{
					landscapeOrientation_bool = false;
				}
			}
		}
		/*
		понакупают айфончиков...
		*/
		if(platform_str == "iphone" || platform_str == "ipad")
		{
			/*
			проверка через availHeight и availWidth
			*/
			/*
			if(window.screen.availHeight > window.screen.availWidth)
			{
				landscapeOrientation_bool = false;
			}
			*/
			/*
			проверка через медиа-запросы
			*/
			/*
			if(window.matchMedia("(orientation: portrait)").matches)
			{
				landscapeOrientation_bool = false;
			}
			*/
		}
		/*
		
		*/
		return landscapeOrientation_bool;
	}
	function _onClickScreenMcOrientationLockScreenFunc(event)
	{
		
	}
	/*
	понакупают айфончиков...
	*/
	function _initOrientationChangeIphoneFunc()
	{
		var platform_str = navigator.platform.toLowerCase();
		if(platform_str == "iphone" || platform_str == "ipad")
		{
			_information.windowInnerWidth_num = window.innerWidth;
			setInterval(_checkOrientationChangeIphoneFunc, 100);
		}
	}
	function _checkOrientationChangeIphoneFunc()
	{
		if(_information.windowInnerWidth_num != window.innerWidth)
		{
			_information.windowInnerWidth_num = window.innerWidth;
			_onResizeWindowFunc();
		}
	}
	/*
	==============================================================================================================
	Прелоадер
	==============================================================================================================
	*/
	function _preloaderFunc()
	{
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentMainScreen_mc = new lib.PreloaderScreen();
		_main.addChild(_currentMainScreen_mc);
		_currentMainScreen_mc.gotoAndStop(0);
		/*
		
		*/
		_currentMainScreen_mc.logo_mc.gotoAndStop(0);
		var logo_img = new Image();
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAYAAAB65WHVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNkRERDc2ODJBOTFFRTExQTFDMEQ4MDEzQUJCMkI5NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OURDRTQyODkxNTIxMUVFQjUwMkRDOUI1NDBGODhEMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OURDRTQyNzkxNTIxMUVFQjUwMkRDOUI1NDBGODhEMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0QTg4M0MzOTUyOTFFRTExQTFDMEQ4MDEzQUJCMkI5NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNkRERDc2ODJBOTFFRTExQTFDMEQ4MDEzQUJCMkI5NSIvPiA8L3JkZjpEZXNjcmlwdGlv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";
		var logo_bitmap = new createjs.Bitmap(logo_img);
		_currentMainScreen_mc.logo_mc.addChild(logo_bitmap);
		logo_bitmap.x = -180;
		logo_bitmap.y = -180;
		_currentMainScreen_mc.logo_mc.scaleX = 0.95;
		_currentMainScreen_mc.logo_mc.scaleY = 0.95;
		/*
		_currentMainScreen_mc.logo_mc.mouseChildren = false;
		_currentMainScreen_mc.logo_mc.mouseEnabled = true;
		_currentMainScreen_mc.logo_mc.cursor = "pointer";
		_currentMainScreen_mc.logo_mc.addEventListener("click", _onClickPreloaderBtnFunc, false);
		_currentMainScreen_mc.logo_mc.addEventListener("mouseover", _onMouseOverPreloaderMcFunc, false);
		_currentMainScreen_mc.logo_mc.addEventListener("mouseout", _onMouseOutPreloaderMcFunc, false);
		*/
		/*
		
		*/
		_currentMainScreen_mc.play_mc.gotoAndStop(0);
		_currentMainScreen_mc.play_mc.visible = false;
		_currentMainScreen_mc.play_mc.mouseChildren = false;
		_currentMainScreen_mc.play_mc.mouseEnabled = false;
		/*
		
		*/
		_currentMainScreen_mc.indicator_mc.gotoAndStop(0);
		_currentMainScreen_mc.indicator_mc.mouseChildren = false;
		_currentMainScreen_mc.indicator_mc.mouseEnabled = false;
		_currentMainScreen_mc.indicator_mc.indicator_mc.gotoAndStop(0);
		_currentMainScreen_mc.indicator_mc.indicator_mc.loop = false;
		_currentMainScreen_mc.indicator_mc.indicator_mc.alpha = 1;
		/*
		
		*/
		var loadQueue = new createjs.LoadQueue();
		loadQueue.installPlugin(createjs.Sound);
		createjs.Sound.alternateExtensions = ["mp3"];
		/*
		слушаем события
		*/
		loadQueue.addEventListener("error", _onErrorLoadManifestFunc, false);
		loadQueue.addEventListener("progress", _onProgressLoadManifestFunc, false);
		loadQueue.addEventListener("fileload", _onFileLoadManifestFunc, false);
		loadQueue.addEventListener("complete", _onCompleteLoadManifestFunc, false);
		/*
		создаём очередь на загрузку, но запрещаем саму загрузку
		*/
		loadQueue.loadManifest(lib.properties.manifest, false);
		/*
		загружаем звук
		*/
		loadQueue.loadFile({id:"background_sound", src:"library/sounds/background_sound.ogg"});
		loadQueue.loadFile({id:"click_sound", src:"library/sounds/click_sound.ogg"});
		loadQueue.loadFile({id:"click_2_sound", src:"library/sounds/click_2_sound.ogg"});
		loadQueue.loadFile({id:"click_3_sound", src:"library/sounds/click_3_sound.ogg"});
		loadQueue.loadFile({id:"completed_sound", src:"library/sounds/completed_sound.ogg"});
		loadQueue.loadFile({id:"victory_sound", src:"library/sounds/victory_sound.ogg"});
		loadQueue.loadFile({id:"photo_sound", src:"library/sounds/photo_sound.ogg"});
		/*
		добавляем в очередь кое-что из своего
		*/
		loadQueue.loadFile({id:"bitmapdata", src:"library/js/bitmapdata.js"});
		loadQueue.loadFile({id:"blob", src:"library/js/blob.js"});
		loadQueue.loadFile({id:"canvastoblob", src:"library/js/canvastoblob.js"});
		loadQueue.loadFile({id:"filesaver", src:"library/js/filesaver.js"});
		/*
		запускаем загрузку
		*/
		loadQueue.load();
	}
	function _onMouseOverPreloaderMcFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 4) * 1000);
	}
	function _onMouseOutPreloaderMcFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:0.95, scaleY:0.95}, (_DELAY / 2) * 1000);
	}
	function _onErrorLoadManifestFunc(event)
	{
		trace("Could not load: " + event.data.src + " !", 2);
	}
	function _onProgressLoadManifestFunc(event)
	{
		var totalFrames_num = _currentMainScreen_mc.indicator_mc.indicator_mc.totalFrames;
		var currentFrame_num = Math.floor(totalFrames_num * event.progress);
		if(currentFrame_num > totalFrames_num)
		{
			currentFrame_num = totalFrames_num;
		}
		else if(currentFrame_num < 0)
		{
			currentFrame_num = totalFrames_num;
		}
		_currentMainScreen_mc.indicator_mc.indicator_mc.gotoAndStop(currentFrame_num);
	}
	function _onFileLoadManifestFunc(event)
	{
		if (event.item.type == "image")
		{
			images[event.item.id] = event.result;
		}
	}
	function _onCompleteLoadManifestFunc(event)
	{
		/*
		
		*/
		var queue = event.target;
		var ssMetadata = lib.ssMetadata;
		for(i = 0; i < ssMetadata.length; i++)
		{
			ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
		}
		/*
		
		*/
		_onCompleteLoadAppFunc();
	}
	/*
	
	*/
	function _onCompleteLoadAppFunc()
	{
		/*
		
		*/
		createjs.Tween.get(_currentMainScreen_mc.indicator_mc).wait(0).to({alpha:0.01, scaleX:0.04, scaleY:0.04, visible:false}, _DELAY * 1000, createjs.Ease.cubicInOut);
		/*
		
		*/
		_currentMainScreen_mc.play_mc.cursor = "pointer";
		_currentMainScreen_mc.play_mc.mouseChildren = false;
		_currentMainScreen_mc.play_mc.mouseEnabled = true;
		_currentMainScreen_mc.play_mc.alpha = 0.01;
		_currentMainScreen_mc.play_mc.scaleX = 0.04;
		_currentMainScreen_mc.play_mc.scaleY = 0.04;
		_currentMainScreen_mc.play_mc.addEventListener("click", _onClickPlayAppBtnFunc, false);
		_currentMainScreen_mc.play_mc.addEventListener("mouseover", _onMouseOverPreloaderMcFunc, false);
		_currentMainScreen_mc.play_mc.addEventListener("mouseout", _onMouseOutPreloaderMcFunc, false);
		createjs.Tween.get(_currentMainScreen_mc.play_mc).wait(_DELAY * 1000).to({alpha:1, scaleX:0.9, scaleY:0.9}, _DELAY * 1000, createjs.Ease.bounceInOut);
		_currentMainScreen_mc.play_mc.visible = true;
		/*
		
		*/
		var bodyCursor_mc = new lib.Cursor();
		bodyCursor_mc.gotoAndStop(0);
		bodyCursor_mc.name = "body_mc";
		_cursor.addChild(bodyCursor_mc);
		_cursor.mouseChildren = false;
		_cursor.mouseEnabled = false;
		/*
		
		*/
		_onResizeWindowFunc();
	}
	/*
	
	*/
	function _onClickPlayAppBtnFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("background_sound", 0, 0, -1, 0.2, 0);
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_welcomeFunc);
	}
	/*
	==============================================================================================================
	Окно приветствия
	==============================================================================================================
	*/
	function _welcomeFunc()
	{
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentMainScreen_mc = new lib.WelcomeScreen();
		_main.addChild(_currentMainScreen_mc);
		_currentMainScreen_mc.gotoAndStop(0);
		/*
		
		*/
		_currentMainScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		if(_currentMainScreen_mc.credits_btn)
		{
			_currentMainScreen_mc.credits_btn.addEventListener("click", _onClickCreditsBtnFunc, false);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.instruction_btn)
		{
			_currentMainScreen_mc.instruction_btn.addEventListener("click", _onClickInstructionBtnFunc, false);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.moreGames_btn)
		{
			_currentMainScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.freeGames_mc)
		{
			_currentMainScreen_mc.freeGames_mc.addEventListener("click", _onClickFreeGamesMcFunc, false);
		}
		/*
		
		*/
		_currentMainScreen_mc.play_btn.addEventListener("click", _onClickPlayBtnFunc, false);
		/*
		
		*/
		if(_currentMainScreen_mc.bg)
		{
			_currentMainScreen_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		}
		/*
		
		*/
		_soundManager.updateSoundMcFunc(_currentMainScreen_mc);
		/*
		
		*/
		_fullScreenCanvasManager.updateFullScreenMcFunc(_currentMainScreen_mc);
		/*
		
		*/
		_cursorUpdateFunc();
	}
	/*
	
	*/
	function _onClickPlayBtnFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClickPlayBtnFunc, false);
		/*
		
		*/
		_resetFunc();
		/*
		СОХРАНЕНИЕ ИГРЫ
		*/
		_loadGameFunc();
		/*
		
		*/
		_soundManager.removeAllSoundExceptNameFunc(["background_sound", "click_sound"]);
		/*
		
		*/
		//_animationTransitionBetweenScenesFunc(_selectionFunc);
		//_animationTransitionBetweenScenesFunc(_selectionFunc, 0, 1, null, true);
		_animationTransitionBetweenScenesFunc(_puzzleFunc, 0, 1, null, true);
	}
	/*
	
	*/
	function _onClickCreditsBtnFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_copyrightFunc();
	}
	/*
	
	*/
	function _onClickInstructionBtnFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_simpleScreenFunc, 0, _DELAY / 2, ["InstructionScreen"]);
	}
	/*
	
	*/
	function _resetFunc()
	{
		/*
		
		*/
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		if(_information.interval_id != null)
		{
			clearInterval(_information.interval_id);
		}
		/*
		
		*/
		_information.currentLocation = 1;
		_information.currentNameLocation = "location_" + _information.currentLocation;
		_information.totalLocations = 0;
		_information.userIime = 0;
		for(var propLocation in _information.locations)
		{
			if(_information.locations.hasOwnProperty(propLocation))
			{
				_information.locations[propLocation].selected = false;
				_information.locations[propLocation].completed = false;
				_information.totalLocations++;
			}
		}
	}
	/*
	==============================================================================================================
	Окно выбора
	==============================================================================================================
	*/
	function _selectionFunc()
	{
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentMainScreen_mc = new lib.SelectionScreen();
		_main.addChild(_currentMainScreen_mc);
		_currentMainScreen_mc.gotoAndStop(0);
		/*
		
		*/
		_currentMainScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		if(_currentMainScreen_mc.moreGames_btn)
		{
			_currentMainScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		_updateSelectionLocationFunc();
		/*
		
		*/
		/*
		if(_currentMainScreen_mc.bg)
		{
			_currentMainScreen_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		}
		*/
		/*
		
		*/
		_soundManager.updateSoundMcFunc(_currentMainScreen_mc);
		/*
		
		*/
		_fullScreenCanvasManager.updateFullScreenMcFunc(_currentMainScreen_mc);
		/*
		
		*/
		_cursorUpdateFunc();
	}
	/*
	
	*/
	function _updateSelectionLocationFunc()
	{
		/*
		
		*/
		var locations_mc;
		var location_mc;
		var temp_arr;
		var counter_num;
		/*
		
		*/
		if(_currentMainScreen_mc.locations_mc)
		{
			/*
			
			*/
			locations_mc = _currentMainScreen_mc.locations_mc;
			locations_mc.gotoAndStop(0);
			/*
			
			*/
			for(var prop in _information.locations)
			{
				if(_information.locations.hasOwnProperty(prop))
				{
					/*
					
					*/
					if(locations_mc[prop])
					{
						/*
						
						*/
						location_mc = locations_mc[prop];
						location_mc.gotoAndStop(1);
						location_mc.name = prop;
						/*
						
						*/
						temp_arr = prop.split("_");
						counter_num = parseInt(temp_arr[1]);
						/*
						
						*/
						if(counter_num < _information.currentLocation)
						{
							location_mc.gotoAndStop(2);
							location_mc.mouseEnabled = false;
							location_mc.mouseChildren = false;
							location_mc.cursor = "default";
						}
						else if(counter_num > _information.currentLocation)
						{
							location_mc.gotoAndStop(3);
							location_mc.mouseEnabled = false;
							location_mc.mouseChildren = false;
							location_mc.cursor = "default";
						}
						else
						{
							location_mc.scaleX = 1;
							location_mc.scaleY = 1;
							if(!_information.locations[prop].selected)
							{
								location_mc.gotoAndStop(0);
								location_mc.mouseEnabled = true;
								location_mc.mouseChildren = false;
								location_mc.cursor = "pointer";
								location_mc.addEventListener("mouseover", _onMouseOverLocationFunc, false);
								location_mc.addEventListener("mouseout", _onMouseOutLocationFunc, false);
								location_mc.addEventListener("click", _onClickLocationFunc, false);
							}
							else
							{
								location_mc.gotoAndStop(1);
								location_mc.mouseEnabled = false;
								location_mc.mouseChildren = false;
								location_mc.cursor = "default";
								location_mc.removeEventListener("mouseover", _onMouseOverLocationFunc, false);
								location_mc.removeEventListener("mouseout", _onMouseOutLocationFunc, false);
								location_mc.removeEventListener("click", _onClickLocationFunc, false);
							}
							
						}
					}
				}
			}
		}
	}
	function _onMouseOverLocationFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1.06, scaleY:1.06}, (_DELAY / 5) * 1000);
	}
	function _onMouseOutLocationFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
	}
	function _onClickLocationFunc(event)
	{
		/*
		
		*/
		var location_mc = event.currentTarget;
		var location_str = location_mc.name;
		/*
		
		*/
		var point_obj = location_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_2_sound", 0, 0, 0, 0.05, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_information.currentNameLocation = location_str;
		var temp_arr = location_str.split("_");
		_information.currentLocation = parseInt(temp_arr[1]);
		_information.locations[_information.currentNameLocation].selected = true;
		/*
		
		*/
		_updateSelectionLocationFunc();
		/*
		
		*/
		var gravityExplosion_mc = new lib.GravityExplosionMC();
		_before.addChild(gravityExplosion_mc);
		gravityExplosion_mc.gotoAndStop(0);
		point_obj = location_mc.localToLocal(event.localX, event.localY, _before);
		gravityExplosion_mc.x = point_obj.x;
		gravityExplosion_mc.y = point_obj.y;
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_puzzleFunc, 0, 1, null, true);
		/*
		
		*/
		if(_skippedLocationsFunc() == 5)
		{
			_addAdsFunc();
		}
	}
	/*
	==============================================================================================================
	Окно игры
	==============================================================================================================
	*/
	function _puzzleFunc()
	{
		/*
		
		*/
		_information.locations[_information.currentNameLocation].selected = true;
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentMainScreen_mc = new lib["LocationScreen_" + _information.currentLocation]();
		_main.addChild(_currentMainScreen_mc);
		_currentMainScreen_mc.gotoAndStop(0);
		/*
		
		*/
		_currentMainScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		if(_currentMainScreen_mc.moreGames_btn)
		{
			_currentMainScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		_currentMainScreen_mc.popup_mc.gotoAndStop(0);
		_currentMainScreen_mc.popup_mc.mouseEnabled = true;
		_currentMainScreen_mc.popup_mc.mouseChildren = true;
		_currentMainScreen_mc.popup_mc.cursor = "pointer";
		_currentMainScreen_mc.popup_mc.visible = true;
		_currentMainScreen_mc.popup_mc.addEventListener("click", _onClickStartGamePopupFunc, false);
		/*
		счётчик уровней, если требуется
		*/
		if(_currentMainScreen_mc.simple_level_comp)
		{
			/*
			
			*/
			_currentMainScreen_mc.simple_level_comp.gotoAndStop(0);
			_currentMainScreen_mc.simple_level_comp.mouseChildren = false;
			_currentMainScreen_mc.simple_level_comp.mouseEnabled = false;
			/*
			
			*/
			if(_currentMainScreen_mc.simple_level_comp.currentLevel_mc)
			{
				_currentMainScreen_mc.simple_level_comp.currentLevel_mc.gotoAndStop(0);
				_currentMainScreen_mc.simple_level_comp.currentLevel_mc.setValueFunc(_information.currentLocation);
			}
			/*
			
			*/
			if(_currentMainScreen_mc.simple_level_comp.totalLevels_mc)
			{
				_currentMainScreen_mc.simple_level_comp.totalLevels_mc.gotoAndStop(0);
				_currentMainScreen_mc.simple_level_comp.totalLevels_mc.setValueFunc(_information.totalLocations);
			}
		}
		/*
		
		*/
		var puzzle_mc = new lib["puzzle_" + _information.currentLocation + "_mc"]();
		puzzle_mc.gotoAndStop(0);
		if(puzzle_mc.bitmapCache)
		{
			puzzle_mc.updateCache();
		}
		else
		{
			puzzle_mc.cache(0, 0, _information.locations[_information.currentNameLocation].puzzleWidth, _information.locations[_information.currentNameLocation].puzzleHeight, 1);
		}
		var puzzle_image = new Image();
		puzzle_image.src = puzzle_mc.getCacheDataURL();
		puzzle_image.addEventListener("load", _onLoadPuzzleImageFunc, false);
		/*
		
		*/
		/*
		if(_currentMainScreen_mc.bg)
		{
			_currentMainScreen_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		}
		*/
		/*
		
		*/
		_soundManager.updateSoundMcFunc(_currentMainScreen_mc);
		/*
		
		*/
		_fullScreenCanvasManager.updateFullScreenMcFunc(_currentMainScreen_mc);
		/*
		
		*/
		_cursorUpdateFunc();
	}
	/*
	
	*/
	function _onClickStartGamePopupFunc(event)
	{
		/*
		
		*/
		var popup_mc = event.currentTarget;
		popup_mc.mouseEnabled = false;
		popup_mc.mouseChildren = false;
		popup_mc.cursor = "default";
		popup_mc.visible = false;
		popup_mc.removeEventListener("click", _onClickStartGamePopupFunc, false);
		/*
		
		*/
		var point_obj = popup_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_3_sound", 0, 0, 0, 0.05, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_information.locations[_information.currentNameLocation].userIime = 0;
		if(_information.interval_id != null)
		{
			clearInterval(_information.interval_id);
		}
		_information.interval_id = setInterval(_onTickIntervalFunc, 1000);
		/*
		
		*/
		var gravityExplosion_mc = new lib.GravityExplosionMC();
		_before.addChild(gravityExplosion_mc);
		gravityExplosion_mc.gotoAndStop(0);
		point_obj = popup_mc.localToLocal(event.localX, event.localY, _before);
		gravityExplosion_mc.x = point_obj.x;
		gravityExplosion_mc.y = point_obj.y;
	}
	/*
	
	*/
	function _onLoadPuzzleImageFunc(event)
	{
		/*
		
		*/
		var puzzle_image = event.currentTarget;
		puzzle_image.removeEventListener("load", _onLoadPuzzleImageFunc, false);
		/*
		
		*/
		_currentMainScreen_mc.panel_mc.gotoAndStop(0);
		/*
		
		*/
		var tip_mc;
		if(_currentMainScreen_mc.panel_mc.tip_mc)
		{
			tip_mc = _currentMainScreen_mc.panel_mc.tip_mc;
			tip_mc.gotoAndPlay(0);
			tip_mc.mouseChildren = false;
			tip_mc.mouseEnabled = false;
			tip_mc.visible = true;
		}
		/*
		
		*/
		var puzzle_mc = _currentMainScreen_mc.panel_mc.puzzle_mc;
		puzzle_mc.gotoAndStop(0);
		var puzzle_bound = puzzle_mc.getBounds();
		puzzle_mc.filters = [new createjs.ColorMatrixFilter(new createjs.ColorMatrix().adjustSaturation(-100))];
		if(puzzle_mc.bitmapCache)
		{
			puzzle_mc.updateCache();
		}
		else
		{
			puzzle_mc.cache(puzzle_bound.x, puzzle_bound.y, puzzle_bound.width, puzzle_bound.height, 1);
		}
		if(_information.locations[_information.currentNameLocation].showHint)
		{
			puzzle_mc.alpha = 0.4;
		}
		else
		{
			puzzle_mc.visible = false;
		}
		/*
		
		*/
		_level_1_mc = new createjs.Container();
		_currentMainScreen_mc.panel_mc.addChild(_level_1_mc);
		_level_1_mc.visible = false;
		/*
		
		*/
		_level_2_mc = new createjs.Container();
		_currentMainScreen_mc.panel_mc.addChild(_level_2_mc);
		/*
		
		*/
		_counterPieces_num = 0;
		_totalPieces_num = _counterPieces_num;
		/*
		
		*/
		var thorn_str = _information.locations[_information.currentNameLocation].thorn;
		var piecesWidth_num = Math.ceil(_information.locations[_information.currentNameLocation].puzzleWidth / _information.locations[_information.currentNameLocation].columns);
		var piecesHeight_num = Math.ceil(_information.locations[_information.currentNameLocation].puzzleHeight / _information.locations[_information.currentNameLocation].rows);
		/*
		
		*/
		var pocket_mc = _currentMainScreen_mc.panel_mc.pocket_mc;
		pocket_mc.gotoAndStop(0);
		var pocket_bound;
		if(pocket_mc.area_mc)
		{
			pocket_mc.area_mc.gotoAndStop(0);
			pocket_mc.area_mc.x = 0;
			pocket_mc.area_mc.y = 0;
			pocket_bound = pocket_mc.area_mc.getBounds();
			pocket_mc.area_mc.alpha = 0.01;
		}
		else
		{
			pocket_bound = pocket_mc.getBounds();
			pocket_mc.alpha = 0.01;
		}
		var piecesPuzzleX_num = pocket_mc.x;
		var pocketY_num = pocket_mc.y;
		if(piecesWidth_num < pocket_bound.width)
		{
			piecesPuzzleX_num += (pocket_bound.width - piecesWidth_num) / 2;
		}
		var piecesPuzzleInterval_num = 0;
		if(piecesHeight_num < pocket_bound.height)
		{
			piecesPuzzleInterval_num = Math.round((pocket_bound.height - piecesHeight_num) / (_information.locations[_information.currentNameLocation].columns * _information.locations[_information.currentNameLocation].rows - 1));
		}
		/*
		
		*/
		var i = 0;
		var j;
		var ts_num;
		var rs_num;
		var bs_num;
		var ls_num;
		var piecesPuzzle_mc;
		var piecesPuzzle_bound;
		/*
		
		*/
		while (i < _information.locations[_information.currentNameLocation].rows)
		{
			/*
			
			*/
			j = 0;
			/*
			
			*/
			while (j < _information.locations[_information.currentNameLocation].columns)
			{
				if(i == 0)
				{
					ts_num = 0;
					bs_num = _randomSideFunc();
				}
				else if((i+1) == _information.locations[_information.currentNameLocation].rows)
				{
					ts_num = _contrastFunc(_level_1_mc.getChildByName('part_' + (i - 1) + '_' + j).bs_num);
					bs_num = 0;
				}
				else
				{
					ts_num = _contrastFunc(_level_1_mc.getChildByName('part_' + (i - 1) + '_' + j).bs_num);
					bs_num = _randomSideFunc();
				}
				if(j == 0)
				{
					ls_num = 0;
					rs_num = _randomSideFunc();
				}
				else if((j+1) == _information.locations[_information.currentNameLocation].columns)
				{
					ls_num = _contrastFunc(_level_1_mc.getChildByName('part_' + i + '_' + (j - 1)).rs_num);
					rs_num = 0;
				}
				else
				{
					ls_num = _contrastFunc(_level_1_mc.getChildByName('part_' + i + '_' + (j - 1)).rs_num);
					rs_num = _randomSideFunc();
				}
				/*
				
				*/
				var piecesPuzzle_mc = new lib.PiecesPuzzle();
				piecesPuzzle_mc.gotoAndStop(0);
				piecesPuzzle_mc.initFunc(puzzle_image, thorn_str, "#ffffff", piecesWidth_num, piecesHeight_num, j, i, ts_num, rs_num, bs_num, ls_num, true);
				_level_1_mc.addChild(piecesPuzzle_mc);
				piecesPuzzle_mc.name = "part_" + i + "_" + j;
				piecesPuzzle_mc.x = piecesWidth_num * j;
				piecesPuzzle_mc.y = piecesHeight_num * i;
				/*
				
				*/
				piecesPuzzle_mc = new lib.PiecesPuzzle();
				piecesPuzzle_mc.gotoAndStop(0);
				piecesPuzzle_mc.initFunc(puzzle_image, thorn_str, "#ffffff", piecesWidth_num, piecesHeight_num, j, i, ts_num, rs_num, bs_num, ls_num, true);
				_level_2_mc.addChild(piecesPuzzle_mc);
				_level_2_mc.setChildIndex(piecesPuzzle_mc, Math.floor(Math.random() * (_level_2_mc.numChildren - 1)));
				piecesPuzzle_mc.name = "part_" + i + "_" + j;
				piecesPuzzle_mc.mouseEnabled = true;
				piecesPuzzle_mc.mouseChildren = false;
				piecesPuzzle_mc.cursor = "pointer";
				piecesPuzzle_mc.addEventListener("mousedown", _onMouseDownPiecesPuzzleFunc, false);
				piecesPuzzle_mc.addEventListener("pressmove", _onPressMovePiecesPuzzleFunc, false);
				piecesPuzzle_mc.addEventListener("pressup", _onPressUpPiecesPuzzleFunc, false);
				/*
				
				*/
				piecesPuzzle_mc.setBounds(-piecesWidth_num, -piecesHeight_num, piecesWidth_num * 3, piecesHeight_num * 3);
				piecesPuzzle_bound = piecesPuzzle_mc.getBounds();
				piecesPuzzle_mc.cache(piecesPuzzle_bound.x, piecesPuzzle_bound.y, piecesPuzzle_bound.width, piecesPuzzle_bound.height);
				/*
				
				*/
				piecesPuzzle_mc.targetX_num = 0;
				piecesPuzzle_mc.targetY_num = 0;
				piecesPuzzle_mc.width_num = piecesWidth_num;
				piecesPuzzle_mc.height_num = piecesHeight_num;
				/*
				
				*/
				_counterPieces_num++;
				/*
				
				*/
				j++;
			}
			/*
			
			*/
			i++;
		}
		/*
		
		*/
		_totalPieces_num = _counterPieces_num;
		/*
		
		*/
		i = 0;
		/*
		
		*/
		while (i < _level_2_mc.numChildren)
		{
			/*
			
			*/
			piecesPuzzle_mc = _level_2_mc.getChildAt(i);
			piecesPuzzle_mc.x = piecesPuzzleX_num;
			piecesPuzzle_mc.y = pocketY_num + (piecesPuzzleInterval_num * i);
			/*
			
			*/
			i++;
		}
		/*
		
		*/
		/*
		_information.locations[_information.currentNameLocation].userIime = 0;
		if(_information.interval_id != null)
		{
			clearInterval(_information.interval_id);
		}
		_information.interval_id = setInterval(_onTickIntervalFunc, 1000);
		*/
	}
	/*
	
	*/
	function _onMouseDownPiecesPuzzleFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		currentTarget_mc.targetX_num = event.localX;
		currentTarget_mc.targetY_num = event.localY;
		_level_2_mc.setChildIndex(currentTarget_mc, _level_2_mc.numChildren - 1);
		/*
		
		*/
		currentTarget_mc.shadow = new createjs.Shadow("rgba(0, 0, 0, 0.3)", 5, 5, 5);
		currentTarget_mc.updateCache();
	}
	function _onPressMovePiecesPuzzleFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		var coord_point = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		/*
		ограничения для перетаскивания - можно смело убирать
		*/
		if(coord_point.x < currentTarget_mc.targetX_num)
		{
			coord_point.x = currentTarget_mc.targetX_num;
		}
		if(coord_point.x > (_CWIDTH - (currentTarget_mc.width_num - currentTarget_mc.targetX_num)))
		{
			coord_point.x = _CWIDTH - (currentTarget_mc.width_num - currentTarget_mc.targetX_num);
		}
		if(coord_point.y < currentTarget_mc.targetY_num)
		{
			coord_point.y = currentTarget_mc.targetY_num;
		}
		if(coord_point.y > (_CHEIGHT - (currentTarget_mc.height_num - currentTarget_mc.targetY_num)))
		{
			coord_point.y = _CHEIGHT - (currentTarget_mc.height_num - currentTarget_mc.targetY_num);
		}
		/*
		
		*/
		coord_point = _stage.localToLocal(coord_point.x, coord_point.y, _level_2_mc);
		currentTarget_mc.x = coord_point.x - currentTarget_mc.targetX_num;
		currentTarget_mc.y = coord_point.y - currentTarget_mc.targetY_num;
	}
	function _onPressUpPiecesPuzzleFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		var currentTarget_str = currentTarget_mc.name;
		var target_mc = _level_1_mc.getChildByName(currentTarget_str);
		var coord_point = target_mc.localToLocal(0, 0, currentTarget_mc);
		if(target_mc.hitTest(coord_point.x + currentTarget_mc.targetX_num, coord_point.y + currentTarget_mc.targetY_num))
		{
			/*
			
			*/
			var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
			_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.05, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
			/*
			
			*/
			currentTarget_mc.mouseEnabled = false;
			currentTarget_mc.mouseChildren = false;
			currentTarget_mc.cursor = "default";
			currentTarget_mc.removeEventListener("mousedown", _onMouseDownPiecesPuzzleFunc, false);
			currentTarget_mc.removeEventListener("pressmove", _onPressMovePiecesPuzzleFunc, false);
			currentTarget_mc.removeEventListener("pressup", _onPressUpPiecesPuzzleFunc, false);
			createjs.Tween.get(currentTarget_mc).wait(0).to({x:target_mc.x, y:target_mc.y}, (_DELAY / 4) * 1000);
			/*
			
			*/
			_counterPieces_num--;
			if((_totalPieces_num - _counterPieces_num) == 1)
			{
				_deleteTipFunc();
			}
			if(_counterPieces_num <= 0)
			{
				_completedPuzzleFunc();
			}
		}
		/*
		
		*/
		currentTarget_mc.shadow = null;
		currentTarget_mc.updateCache();
	}
	/*
	
	*/
	function _deleteTipFunc()
	{
		if(_currentMainScreen_mc.panel_mc.tip_mc)
		{
			createjs.Tween.get(_currentMainScreen_mc.panel_mc.tip_mc).wait(0).to({alpha:0.01, visible:false}, _DELAY * 1000);
		}
	}
	/*
	
	*/
	function _completedPuzzleFunc()
	{
		/*
		
		*/
		_soundManager.addSoundFunc("completed_sound", 0, 0, 0, 0.1, 0);
		/*
		
		*/
		_currentMainScreen_mc.popup_mc.gotoAndStop(1);
		_currentMainScreen_mc.popup_mc.visible = true;
		/*
		
		*/
		var puzzle_mc = _currentMainScreen_mc.panel_mc.puzzle_mc;
		puzzle_mc.visible = true;
		puzzle_mc.alpha = 1;
		var puzzle_bound = puzzle_mc.getBounds();
		puzzle_mc.filters = [];
		if(puzzle_mc.bitmapCache)
		{
			puzzle_mc.updateCache();
		}
		else
		{
			puzzle_mc.cache(puzzle_bound.x, puzzle_bound.y, puzzle_bound.width, puzzle_bound.height, 2);
		}
		/*
		
		*/
		createjs.Tween.get(_level_2_mc).wait(0).to({alpha:0.01}, _DELAY * 1000);
		/*
		
		*/
		_information.userIime += _information.locations[_information.currentNameLocation].userIime;
		if(_information.interval_id != null)
		{
			clearInterval(_information.interval_id);
		}
		/*
		
		*/
		_information.locations[_information.currentNameLocation].completed = true;
		_information.currentLocation++;
		_information.currentNameLocation = "location_" + _information.currentLocation;
		/*
		СОХРАНЕНИЕ ИГРЫ
		*/
		_saveGameFunc();
		/*
		
		*/
		new Edapskov_Flickering(_before, _currentMainScreen_mc.panel_mc, ["#ffffff", "#ffffcc"], 8, 24);
		/*
		
		*/
		if(_information.currentLocation > _information.totalLocations)
		{
			_animationTransitionBetweenScenesFunc(_resultFunc, 3, 1, null, true);
		}
		else
		{
			/*
			
			*/
			if(_skippedLocationsFunc() == 5)
			{
				_addAdsFunc();
			}
			if(_skippedLocationsFunc() == 15)
			{
				_addAdsFunc();
			}
			if(_skippedLocationsFunc() == 25)
			{
				_addAdsFunc();
			}
			if(_skippedLocationsFunc() == 35)
			{
				_addAdsFunc();
			}
			if(_skippedLocationsFunc() == 45)
			{
				_addAdsFunc();
			}
			/*
			исключение
			*/
			//_animationTransitionBetweenScenesFunc(_selectionFunc, 3, 1, null, true);
			_animationTransitionBetweenScenesFunc(_puzzleFunc, 3, 1, null, true);
		}
	}
	/*
	
	*/
	function _randomSideFunc()
	{
		var side_arr = [-1, 1];
		return side_arr[Math.floor(Math.random() * side_arr.length)];
	}
	/*
	
	*/
	function _contrastFunc(side_num)
	{
		var result_num = 0;
		if(side_num == -1)
		{
			result_num = 1;
		}
		else if(side_num == 1)
		{
			result_num = -1;
		}
		return result_num;
	}
	/*
	
	*/
	function _onTickIntervalFunc()
	{
		/*
		
		*/
		_information.locations[_information.currentNameLocation].userIime++;
		/*
		
		*/
		_currentMainScreen_mc.simple_timer_comp.gotoAndStop(0);
		_currentMainScreen_mc.simple_timer_comp.setValueFunc(_information.locations[_information.currentNameLocation].userIime);
	}
	/*
	
	*/
	function _skippedLocationsFunc()
	{
		/*
		
		*/
		var skipped_num = 0;
		/*
		
		*/
		for(var prop in _information.locations)
		{
			if(_information.locations.hasOwnProperty(prop))
			{
				if(!_information.locations[prop].completed)
				{
					skipped_num++;
				}
			}
		}
		/*
		
		*/
		return skipped_num;
	}
	/*
	==============================================================================================================
	СОХРАНЕНИЕ ИГРЫ
	==============================================================================================================
	*/
	/*
	загружаем сохраненные необходимые данные приложения
	*/
	function _loadGameFunc()
	{
		/*
		
		*/
		var keyLocalStorage_str = _getSafeTitleGameFunc();
		/*
		
		*/
		var loadInformation_obj = new Edapskov_LocalStorage().loadFunc(keyLocalStorage_str);
		//console.log("Загружено: ");
		//console.log(loadInformation_obj);
		/*
		
		*/
		if(loadInformation_obj != null)
		{
			if(loadInformation_obj.hasOwnProperty("currentLocation"))
			{
				if(loadInformation_obj.currentLocation <= _information.totalLocations)
				{
					/*
					
					*/
					_information.currentLocation = loadInformation_obj.currentLocation;
					_information.currentNameLocation = "location_" + _information.currentLocation;
					/*
					
					*/
					if(loadInformation_obj.hasOwnProperty("userIime"))
					{
						_information.userIime = loadInformation_obj.userIime;
					}
				}
			}
		}
	}
	/*
	сохраняем необходимые данные приложения
	*/
	function _saveGameFunc()
	{
		/*
		
		*/
		var loadInformation_obj = {};
		loadInformation_obj.currentLocation = _information.currentLocation;
		loadInformation_obj.userIime = _information.userIime;
		/*
		
		*/
		var keyLocalStorage_str = _getSafeTitleGameFunc();
		/*
		
		*/
		//console.log("Сохранено: ");
		//console.log(loadInformation_obj);
		new Edapskov_LocalStorage().saveFunc(keyLocalStorage_str, loadInformation_obj);
	}
	/*
	
	*/
	function _getSafeTitleGameFunc()
	{
		/*
		
		*/
		var safeTitleGame_str = _TITLE.replace(/[^a-z0-9]/gi, "").trim();
		/*
		
		*/
		return safeTitleGame_str;
	}
	/*
	==============================================================================================================
	Окно редиректа
	==============================================================================================================
	*/
	function _redirectFunc()
	{
		/*
		
		*/
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		/*
		
		*/
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentBeforeScreen_mc = new lib.RedirectScreen();
		_before.addChild(_currentBeforeScreen_mc);
		_currentBeforeScreen_mc.gotoAndStop(0);
		_currentBeforeScreen_mc.body_mc.gotoAndStop(0);
		/*
		
		*/
		if(_currentBeforeScreen_mc.body_mc.banner_mc)
		{
			_currentBeforeScreen_mc.body_mc.banner_mc.cursor = "pointer";
			_currentBeforeScreen_mc.body_mc.banner_mc.addEventListener("click", _onClickPlayRedirectBtnFunc, false);
		}
		/*
		
		*/
		if(_currentBeforeScreen_mc.body_mc.remove_btn)
		{
			_currentBeforeScreen_mc.body_mc.remove_btn.addEventListener("click", _onClickCancelRedirectBtnFunc, false);
		}
	}
	/*
	
	*/
	function _onClickPlayRedirectBtnFunc(event)
	{
		/*
		
		*/
		var currentTarget_btn = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_btn.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.3, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		currentTarget_btn.removeEventListener("click", _onClickPlayRedirectBtnFunc, false);
		/*
		
		*/
		window.open("https://dl-girls.com/content/folder_1714229232" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
	}
	/*
	
	*/
	function _onClickCancelRedirectBtnFunc(event)
	{
		/*
		
		*/
		var currentTarget_btn = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_btn.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.3, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		currentTarget_btn.removeEventListener("click", _onClickCancelRedirectBtnFunc, false);
		/*
		
		*/
		_clearContainerFunc(_before);
	}
	/*
	==============================================================================================================
	Окно результатов
	==============================================================================================================
	*/
	function _resultFunc()
	{
		/*
		
		*/
		_soundManager.addSoundFunc("victory_sound", 0, 0, 0, 0.1, 0);
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentMainScreen_mc = new lib.ResultScreen();
		_main.addChild(_currentMainScreen_mc);
		_currentMainScreen_mc.gotoAndStop(0);
		_currentMainScreen_mc.addEventListener("click", _onClickResultScreenFunc, false);
		/*
		
		*/
		_currentMainScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		_currentMainScreen_mc.photoContainer_mc.gotoAndStop(0);
		_currentMainScreen_mc.photoContainer_mc.logo_btn.visible = false;
		/*
		
		*/
		if(_currentMainScreen_mc.moreGames_btn)
		{
			_currentMainScreen_mc.moreGames_btn.cursor = "pointer";
			_currentMainScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.banner_1_mc)
		{
			_currentMainScreen_mc.banner_1_mc.cursor = "pointer";
			_currentMainScreen_mc.banner_1_mc.addEventListener("click", _onClickBannerMcFunc_1, false);
		}
		if(_currentMainScreen_mc.banner_2_mc)
		{
			_currentMainScreen_mc.banner_2_mc.cursor = "pointer";
			_currentMainScreen_mc.banner_2_mc.addEventListener("click", _onClickBannerMcFunc_2, false);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.freeGames_mc)
		{
			_currentMainScreen_mc.freeGames_mc.addEventListener("click", _onClickFreeGamesMcFunc, false);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.photo_btn)
		{
			_currentMainScreen_mc.photo_btn.addEventListener("click", _onClickPhotoBtnFunc, false);
		}
		/*
		
		*/
		_currentMainScreen_mc.playAgain_btn.addEventListener("click", _onClickPlayBtnFunc, false);
		/*
		
		*/
		_currentMainScreen_mc.photoContainer_mc.simple_timer_comp.gotoAndStop(0);
		_currentMainScreen_mc.photoContainer_mc.simple_timer_comp.setValueFunc(_information.userIime);
		/*
		редирект
		*/
		/*
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		_information.timeout_id = setTimeout(_redirectFunc, 6000);
		*/
		/*
		
		*/
		if(_currentMainScreen_mc.photoContainer_mc.bg)
		{
			_currentMainScreen_mc.photoContainer_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		}
		/*
		
		*/
		_soundManager.updateSoundMcFunc(_currentMainScreen_mc);
		/*
		
		*/
		_fullScreenCanvasManager.updateFullScreenMcFunc(_currentMainScreen_mc);
		/*
		
		*/
		_cursorUpdateFunc();
	}
	/*
	
	*/
	function _onClickResultScreenFunc(event)
	{
		//trace(event);
	}
	/*
	
	*/
	function _onClickPhotoBtnFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("photo_sound", 0, 0, 0, 1, 0, true);
		/*
		
		*/
		_updateVisibleDisplayObjectFunc(_currentMainScreen_mc, false);
		_currentMainScreen_mc.photoContainer_mc.visible = true;
		_currentMainScreen_mc.photoContainer_mc.logo_btn.visible = true;
		/*
		
		*/
		_stage.update();
		/*
		
		*/
		try
		{
			var canvas = document.getElementById("canvas");
			canvas.toBlobHD(function(blob){saveAs(blob, _TITLE + ".png");}, "image/png");
		}
		catch(event)
		{
			/*
			
			*/
			trace(event, 1);
			/*
			
			*/
			_createBackupPhotoFunc();
		}
		finally
		{
			_currentMainScreen_mc.photoContainer_mc.logo_btn.visible = false;
			_updateVisibleDisplayObjectFunc(_currentMainScreen_mc);
		}
	}
	function _createBackupPhotoFunc()
	{
		/*
		
		*/
		var photoContainer_mc = new lib.photoContainer_mc();
		photoContainer_mc.y = _CHEIGHT;
		photoContainer_mc.mouseEnabled = false;
		photoContainer_mc.mouseChildren = false;
		photoContainer_mc.gotoAndStop(0);
		/*
		
		*/
		photoContainer_mc.simple_timer_comp.gotoAndStop(0);
		photoContainer_mc.simple_timer_comp.setValueFunc(_information.userIime);
		/*
		
		*/
		photoContainer_mc.cache(0, 0, _CWIDTH, _CHEIGHT, 0.8);
		new Edapskov_ScreenshotWindow(_TITLE, photoContainer_mc.getCacheDataURL());
		delete photoContainer_mc;
	}
	function _updateVisibleDisplayObjectFunc(container_mc, visible_bool)
	{
		/*
		
		*/
		if(visible_bool === undefined)
		{
			visible_bool = true;
		}
		else
		{
			visible_bool = Number(visible_bool);
		}
		/*
		
		*/
		var displayObject;
		var totalDisplayObjects_uint;
		var i = 0;
		/*
		
		*/
		if(container_mc.numChildren)
		{
			/*
			
			*/
			totalDisplayObjects_uint = container_mc.numChildren;
			/*
			
			*/
			while(i < totalDisplayObjects_uint)
			{
				/*
				
				*/
				displayObject = container_mc.getChildAt(i);
				if(displayObject.hasOwnProperty("visible"))
				{
					displayObject.visible = visible_bool;
				}
				/*
				
				*/
				i++;
			}
		}
	}
	/*
	==============================================================================================================
	Вспомогательные окна
	==============================================================================================================
	*/
	/*
	Credits
	*/
	function _copyrightFunc()
	{
		/*
		
		*/
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentBeforeScreen_mc = new lib.CopyrightScreen();
		_before.addChild(_currentBeforeScreen_mc);
		_currentBeforeScreen_mc.gotoAndStop(0);
		/*
		
		*/
		_currentBeforeScreen_mc.cursor = "pointer";
		_currentBeforeScreen_mc.addEventListener("click", _onClickCopyrightScreenFunc, false);
	}
	function _onClickCopyrightScreenFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClickCopyrightScreenFunc, false);
		/*
		
		*/
		_clearContainerFunc(_before);
	}
	/*
	простое окно с кнопкой закрытия
	*/
	function _simpleScreenFunc(nameScreen_str)
	{
		/*
		
		*/
		if(nameScreen_str !== undefined)
		{
			/*
			
			*/
			nameScreen_str = String(nameScreen_str);
			/*
			
			*/
			_clearContainerFunc(_before);
			/*
			
			*/
			_currentBeforeScreen_mc = new lib[nameScreen_str]();
			_before.addChild(_currentBeforeScreen_mc);
			_currentBeforeScreen_mc.gotoAndStop(0);
			/*
			
			*/
			if(_currentBeforeScreen_mc.screen_mc)
			{
				_currentBeforeScreen_mc.screen_mc.addEventListener("click", _onClickScreenMcSimpleScreenFunc, false);
			}
			/*
			
			*/
			if(_currentBeforeScreen_mc.remove_btn)
			{
				_currentBeforeScreen_mc.remove_btn.addEventListener("click", _onClickRemoveBtnSimpleScreenFunc, false);
			}
		}
	}
	function _onClickScreenMcSimpleScreenFunc(event)
	{
		
	}
	function _onClickRemoveBtnSimpleScreenFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClickRemoveBtnSimpleScreenFunc, false);
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_removeSimpleScreenFunc, 0, _DELAY / 2);
	}
	function _removeSimpleScreenFunc()
	{
		_clearContainerFunc(_before);
	}
	/*
	==============================================================================================================
	Вспомогательные методы
	==============================================================================================================
	*/
	/*
	функция для перехода между локациями
	*/
	function _animationTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr, animated_bool)
	{
		/*
		
		*/
		if(delayTime_num === undefined)
		{
			delayTime_num = 0;
		}
		else
		{
			delayTime_num = Number(delayTime_num);
		}
		if(time_num === undefined)
		{
			time_num = 1;
		}
		else
		{
			time_num = Number(time_num);
		}
		if(arrayParams_arr === undefined)
		{
			arrayParams_arr = null;
		}
		if(animated_bool === undefined)
		{
			animated_bool = false;
		}
		else
		{
			animated_bool = Boolean(animated_bool);
		}
		/*
		проверяем переменные
		*/
		if(time_num < 0)
		{
			time_num = 0;
		}
		/*
		блокировать
		*/
		_main.mouseEnabled = false;
		_main.mouseChildren = false;
		_before.mouseEnabled = false;
		_before.mouseChildren = false;
		/*
		
		*/
		if(animated_bool)
		{
			_onStartAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr);
		}
		else
		{
			_onStartNonAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr);
		}
	}
	function _onStartNonAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr)
	{
		createjs.Tween.get(_shadowScreen.getChildByName("shadowContainer")).wait(delayTime_num * 1000).to({alpha:1}, time_num * 1000).call(_onMidNonAnimatedTransitionBetweenScenesFunc, [func, time_num, arrayParams_arr], this);
	}
	function _onMidNonAnimatedTransitionBetweenScenesFunc(func, time_num, arrayParams_arr)
	{
		/*
		обновление
		*/
		_updateSceneTransitionBetweenScenesFunc(func, arrayParams_arr);
		/*
		появление
		*/
		createjs.Tween.get(_shadowScreen.getChildByName("shadowContainer")).wait(0).to({alpha:0.01}, time_num * 1000).call(_onFinishTransitionBetweenScenesFunc);
	}
	function _onStartAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr)
	{
		/*
		
		*/
		var curtainContainer = _shadowScreen.getChildByName("curtainContainer");
		var curtainScreen_mc;
		var animation_mc;
		/*
		
		*/
		if(lib.hasOwnProperty("CurtainScreen"))
		{
			/*
			
			*/
			curtainScreen_mc = new lib.CurtainScreen();
			curtainScreen_mc.gotoAndStop(0);
			/*
			
			*/
			if(curtainScreen_mc.body_mc)
			{
				/*
				
				*/
				curtainContainer.addChild(curtainScreen_mc);
				/*
				
				*/
				animation_mc = curtainScreen_mc.body_mc;
				animation_mc.gotoAndStop(0);
				/*
				
				*/
				var timelineControl = new Edapskov_TimelineControl(animation_mc);
				timelineControl.gotoFunc("mid", 1, delayTime_num, [animation_mc, func, arrayParams_arr]);
				timelineControl.addEventListener("completed_timeline", _onMidAnimatedTransitionBetweenScenesFunc, false);
			}
			else
			{
				_onStartNonAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr);
			}
		}
		else
		{
			_onStartNonAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr);
		}
	}
	function _onMidAnimatedTransitionBetweenScenesFunc(event)
	{
		/*
		
		*/
		var animation_mc = event.params[0];
		var func = event.params[1];
		var arrayParams_arr = event.params[2];
		/*
		обновление
		*/
		_updateSceneTransitionBetweenScenesFunc(func, arrayParams_arr);
		/*
		появление
		*/
		var timelineControl = new Edapskov_TimelineControl(animation_mc);
		timelineControl.gotoFunc("end", 1, 0);
		timelineControl.addEventListener("completed_timeline", _onFinishTransitionBetweenScenesFunc, false);
	}
	function _onFinishTransitionBetweenScenesFunc(event)
	{
		/*
		
		*/
		_clearContainerFunc(_shadowScreen.getChildByName("curtainContainer"));
		/*
		разблокировать
		*/
		_main.mouseEnabled = true;
		_main.mouseChildren = true;
		_before.mouseEnabled = true;
		_before.mouseChildren = true;
	}
	function _updateSceneTransitionBetweenScenesFunc(func, arrayParams_arr)
	{
		/*
		
		*/
		if(arrayParams_arr === undefined)
		{
			arrayParams_arr = null;
		}
		/*
		запуск функции
		*/
		if(arrayParams_arr !== null)
		{
			func(arrayParams_arr);
		}
		else
		{
			func();
		}
	}
	/*
	обновление
	*/
	function _onTickFunc(event)
	{
		/*
		
		*/
		if(_debugger.getVisibleFunc())
		{
			_debugger.updateFpsFunc(Math.round(event.currentTarget.getMeasuredFPS()) + " / " + event.currentTarget.framerate);
		}
		/*
		
		*/
		_stage.update();
	}
	/*
	управление курсором
	*/
	function _cursorUpdateFunc(nameCursor_str)
	{
		/*
		
		*/
		if(nameCursor_str === undefined)
		{
			nameCursor_str = "default";
		}
		/*
		
		*/
		if(_cursor.getChildByName("body_mc"))
		{
			var bodyCursor_mc = _cursor.getChildByName("body_mc");
			bodyCursor_mc.gotoAndStop(nameCursor_str);
		}
		/*
		
		*/
		if(nameCursor_str === "default")
		{
			_mouseShowFunc();
			_cursor.visible = false;
		}
		else
		{
			_mouseHideFunc();
			_cursor.visible = true;
		}
	}
	function _cursorAnimationFunc()
	{
		var animation_mc;
		if(_cursor["body_mc"])
		{
			animation_mc = _cursor["body_mc"];
			animation_mc.play();
		}
	}
	function _mouseHideFunc()
	{
		if(!createjs.Touch.isSupported())
		{
			_stage.enableMouseOver(0);
			_stage.canvas.style.cursor = "none";
		}
	}
	function _mouseShowFunc()
	{
		if(!createjs.Touch.isSupported())
		{
			_stage.enableMouseOver(10);
			_stage.canvas.style.cursor = "auto";
		}
	}
	function _updateCoordinatesCursorFunc(newX_num, newY_num)
	{
		var point_obj = _stage.localToLocal(newX_num, newY_num, _cursor.parent); 
		_cursor.x = point_obj.x;
		_cursor.y = point_obj.y;
	}
	function _onStageMouseDownFunc(event)
	{
		_cursor.alpha = 1;
		_updateCoordinatesCursorFunc(event.localX, event.localY);
	}
	function _onStageMouseMoveFunc(event)
	{
		_updateCoordinatesCursorFunc(event.localX, event.localY);
	}
	function _onStageMouseUpFunc(event)
	{
		_cursor.alpha = 0.01;
	}
	/*
	очистка контейнеров
	*/
	function _clearContainerFunc(container)
	{
		container.removeAllChildren();
	}
	/*
	поиск лейблов в мувиках
	*/
	function _hasLabelInMovieClipFunc(movieClip_mc, label_str)
	{
		/*
		
		*/
		var result_bool = false;
		var labels_arr = movieClip_mc.labels;
		var i = 0;
		var l = labels_arr.length;
		/*
		
		*/
		while (i < l)
		{
			/*
			
			*/
			if (label_str === labels_arr[i].label)
			{
				result_bool = true;
			}
			/*
			
			*/
			i++;
		}
		/*
		
		*/
		return result_bool;
	}
	/*
	обработка событий клавиатуры
	*/
	function _onKeyPressFunc(event)
	{
		/*
		
		*/
		var keyCode_num = event.which || event.keyCode;
		var keyChar_str = String.fromCharCode(keyCode_num);
		var shiftKey_bool = event.shiftKey;
		var ctrlKey_bool = event.ctrlKey;
		var altKey_bool = event.altKey;
		/*
		
		*/
		if(keyCode_num === 68)
		{
			if(ctrlKey_bool && altKey_bool)
			{
				_debugger.toggleVisibleFunc();
			}
		}
		else if(keyCode_num === 65)
		{
			if(ctrlKey_bool && altKey_bool)
			{
				alert("edapskov");
			}
		}
	}
	/*
	остановка - запуск приложения
	*/
	function _stopAppFunc()
	{
		/*
		
		*/
		createjs.Ticker.removeEventListener("tick", _onTickFunc, false);
		/*
		
		*/
		_soundManager.setInvisibleFunc(true);
		/*
		
		*/
		trace("Application is stopped!", 1)
	}
	function _playAppFunc()
	{
		/*
		на всякий случай возвращаем фокус на окно после работы стороннего скрипта
		*/
		window.focus();
		/*
		
		*/
		createjs.Ticker.addEventListener("tick", _onTickFunc, false);
		/*
		
		*/
		_soundManager.setInvisibleFunc(false);
		/*
		
		*/
		trace("Application is running!", 1)
	}
	/*
	встроенная реклама
	*/
	function _addAdsFunc()
	{
		try
		{
			if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined')
			{
				trace("Commercial break!")
				sdk.showBanner();
			}
		}
		catch(event)
		{
			/*
			
			*/
			trace(event, 1);
			/*
			
			*/
			_playAppFunc();
		}
		finally
		{
			
		}
	}
	this.showRewardFunc = function()
	{
		
	}
	this.showAntiBlockingAdsFunc = function()
	{
		_simpleScreenFunc("AntiBlockingAdsScreen");
	}
	/*
	
	*/
	function _onClickPreloaderBtnFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + window.location.href + "&utm_medium=game_referral|preloader&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickLogoBtnFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + window.location.href + "&utm_medium=game_referral|logo&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickBannerMcFunc_1(event)
	{
		window.open("https://dl-girls.com/index.php?controller=article&action=index&id=1" + "&utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickBannerMcFunc_2(event)
	{
		window.open("https://dl-girls.com/index.php?controller=article&action=index&id=1" + "&utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickFreeGamesMcFunc(event)
	{
		window.open("https://dl-girls.com/index.php?controller=free&action=index&utm_source=" + window.location.href + "&utm_medium=game_referral|free&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickMoreGamesBtnFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	/*
	ссылочка на разработчиков
	*/
	function _onClickCopyrightMenuItemFunc(event)
	{
		window.open("http://dlstudio.edapskov.ru", '_blank');
	}
}
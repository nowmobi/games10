/*
* @author edapskov
* @copyright 2019 edapskov v 2.013
* for CreateJS 1.0
*/
/*
==============================================================================================================
Sound Manager
==============================================================================================================
*/
function Edapskov_SoundManager()
{
	/*
	публичные переменные
	*/
	this.copyright = "© edapskov";
	/*
	приватные переменные
	*/
	var _sound_mc;
	var _arr = new Object();
	var _volume_num = 1; // уровень звука в приложении
	var _volumeUser_num = 1; // уровень звука, который установил пользователь - низший приоритет
	var _blockFocus_bool = false; // приложение не в фокусе - средний приоритет
	var _blockScript_bool = false; // скрипт отключает звук - высший приоритет
	/*
	
	*/
	this.initFunc = function()
	{
		/*
		
		*/
		var loadVolume_num = new Edapskov_LocalStorage().loadFunc("volume");
		if(loadVolume_num != null)
		{
			/*
			
			*/
			loadVolume_num = _verifyVolumeFunc(loadVolume_num);
			/*
			
			*/
			/*
			if(loadVolume_num > 0)
			{
				_volumeUser_num = _volume_num = loadVolume_num;
			}
			*/
			_volumeUser_num = _volume_num = loadVolume_num;
		}
		/*
		правильно - использовать Visibility API, но оно, ебать, странное...
		кстати, Visibility API и старые focus-blur работают немного по-разному...
		*/
		if (document.visibilityState)
		{
			_onVisibilityChangeFunc();
			document.addEventListener("visibilitychange", _onVisibilityChangeFunc, false);
		}
		else
		{
			_updateFocusEventFunc();
		}
		/*
		старый способ через focus-blur - внимание, может конфликтовать со сторонними скриптами
		*/
		//_updateFocusEventFunc();
		/*
		это, конечно, перебор, но меня заставили...
		*/
		/*
		try
		{
			if(!new Edapskov_Utilities().isMobileFunc())
			{
				document.body.addEventListener("mouseenter", _onFocusWindowFunc, false);
				document.body.addEventListener("mouseleave", _onBlurWindowFunc, false);
			}
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
		*/
	}
	/*
	========================================
	открытые методы
	========================================
	*/
	/*
	
	*/
	this.updateSoundMcFunc = function(container)
	{
		if(container.sound_mc)
		{
			/*
			
			*/
			_sound_mc = container.sound_mc;
			_sound_mc.gotoAndStop(0);
			_sound_mc.mouseChildren = false;
			_sound_mc.mouseEnabled = true;
			_sound_mc.cursor = "pointer";
			_sound_mc.addEventListener("click", _onClickSoundMcFunc, false);
			/*
			
			*/
			_updateSoundMcFunc();
		}
	}
	/*
	
	*/
	this.addSoundFunc = function(nameSound_str, delay_num, offset_num, loops_num, initVolume_num, initPan_num, constant_bool)
	{
		/*
		
		*/
		if(delay_num === undefined)
		{
			delay_num = 0;
		}
		else
		{
			delay_num = Number(delay_num);
		}
		if(offset_num === undefined)
		{
			offset_num = 0;
		}
		else
		{
			offset_num = Number(offset_num);
		}
		if(loops_num === undefined)
		{
			loops_num = 1;
		}
		else
		{
			loops_num = Number(loops_num);
		}
		if(initVolume_num === undefined)
		{
			initVolume_num = 1;
		}
		else
		{
			initVolume_num = _verifyVolumeFunc(initVolume_num);
		}
		if(initPan_num === undefined)
		{
			initPan_num = 0;
		}
		else
		{
			initPan_num = _verifyPanFunc(initPan_num);
		}
		if(constant_bool === undefined)
		{
			constant_bool = false;
		}
		else
		{
			constant_bool = Boolean(constant_bool);
		}
		/*
		
		*/
		var uid_str = "sound_" + createjs.UID.get();
		/*
		
		*/
		try
		{
			var playPropsConfig = new createjs.PlayPropsConfig();
			if(constant_bool)
			{
				playPropsConfig.set({interrupt: createjs.Sound.INTERRUPT_ANY, delay:delay_num * 1000, offset:offset_num * 1000, loop:loops_num, volume:initVolume_num, pan:initPan_num});
			}
			else
			{
				playPropsConfig.set({interrupt: createjs.Sound.INTERRUPT_ANY, delay:delay_num * 1000, offset:offset_num * 1000, loop:loops_num, volume:_volume_num * initVolume_num, pan:initPan_num});
			}
			var sndChannel = createjs.Sound.play(nameSound_str, playPropsConfig);
			sndChannel.addEventListener("complete", _onSoundCompleteFunc, false);
			sndChannel.addEventListener("failed", _onSoundFailedFunc, false);
			_arr[uid_str] = {sndChannel:sndChannel, nameSound:nameSound_str, initVolume:initVolume_num, initPan:initPan_num, constant:constant_bool};
		}
		catch(event)
		{
			trace(event, 2);
			uid_str = null;
		}
		finally
		{
			
		}
		/*
		
		*/
		return uid_str;
	}
	/*
	остановить воспроизведение конкретного звука по уникальному идентификатору
	*/
	this.removeSoundUIDFunc = function(uid_str)
	{
		return _removeSoundUIDFunc(uid_str);
	}
	/*
	остановить воспроизведение конкретного звука по имени
	*/
	this.removeSoundNameFunc = function(nameSound_str)
	{
		/*
		
		*/
		var result_bool = false;
		/*
		
		*/
		if(nameSound_str !== undefined)
		{
			for(var prop in _arr)
			{
				if(_arr.hasOwnProperty(prop))
				{
					if(_arr[prop].nameSound === nameSound_str)
					{
						result_bool = _removeSoundUIDFunc(prop);;
					}
				}
			}
		}
		/*
		
		*/
		return result_bool;
	}
	/*
	остановить воспроизведение всех звуков, кроме звука с указанным уникальным идентификатором
	*/
	this.removeAllSoundExceptUIDFunc = function(arrayUID_arr)
	{
		/*
		
		*/
		var result_bool = false;
		var flag_bool;
		/*
		
		*/
		if(arrayUID_arr !== undefined)
		{
			for (var prop in _arr)
			{
				if(_arr.hasOwnProperty(prop))
				{
					/*
					
					*/
					flag_bool = true;
					/*
					
					*/
					for(var i = 0; i < arrayUID_arr.length; i++)
					{
						if(prop === arrayUID_arr[i])
						{
							flag_bool = false;
							break;
						}
					}
					/*
					
					*/
					if(flag_bool)
					{
						result_bool = _removeSoundUIDFunc(prop);
					}
				}
			}
		}
		/*
		
		*/
		return result_bool;
	}
	/*
	остановить воспроизведение всех звуков, кроме звука с указанным именем
	*/
	this.removeAllSoundExceptNameFunc = function(arrayName_arr)
	{
		/*
		
		*/
		var result_bool = false;
		var flag_bool;
		/*
		
		*/
		if(arrayName_arr !== undefined)
		{
			for (var prop in _arr)
			{
				if(_arr.hasOwnProperty(prop))
				{
					/*
					
					*/
					flag_bool = true;
					/*
					
					*/
					for(var i = 0; i < arrayName_arr.length; i++)
					{
						if(_arr[prop].nameSound === arrayName_arr[i])
						{
							flag_bool = false;
							break;
						}
					}
					/*
					
					*/
					if(flag_bool)
					{
						result_bool = _removeSoundUIDFunc(prop);
					}
				}
			}
		}
		/*
		
		*/
		return result_bool;
	}
	/*
	
	*/
	this.panFromStageFunc = function(coordX_num, stageWidth_num)
	{
		/*
		
		*/
		if(coordX_num === undefined)
		{
			coordX_num = 400;
		}
		if(stageWidth_num === undefined)
		{
			stageWidth_num = 800;
		}
		/*
		
		*/
		var result_num = 0;
		var halfStageWidth_num = stageWidth_num / 2;
		/*
		
		*/
		if(coordX_num < 0)
		{
			result_num = -1;
		}
		else if(coordX_num > stageWidth_num)
		{
			result_num = 1;
		}
		else
		{
			result_num = (coordX_num / halfStageWidth_num) - 1;
		}
		/*
		
		*/
		return result_num;
	}
	/*
	
	*/
	this.getVolumeFunc = function()
	{
		return _volume_num;
	}
	this.setVolumeFunc = function(volume_num)
	{
		/*
		
		*/
		if(volume_num === undefined)
		{
			volume_num = 1;
		}
		/*
		
		*/
		_volumeUser_num = volume_num;
		/*
		
		*/
		_changeVolumeFunc();
	}
	/*
	
	*/
	this.getInvisibleFunc = function()
	{
		return _blockScript_bool;
	}
	this.setInvisibleFunc = function(invisible_bool)
	{
		_setInvisibleFunc(invisible_bool);
	}
	/*
	========================================
	закрытые методы
	========================================
	*/
	/*
	
	*/
	function _setInvisibleFunc(invisible_bool)
	{
		/*
		
		*/
		if(invisible_bool === undefined)
		{
			invisible_bool = false;
		}
		else
		{
			invisible_bool = Boolean(invisible_bool);
		}
		/*
		
		*/
		_blockScript_bool = invisible_bool;
		/*
		
		*/
		_changeVolumeFunc();
	}
	/*
	
	*/
	function _updateSoundMcFunc()
	{
		if(_sound_mc)
		{
			if(_sound_mc.totalFrames > 1)
			{
				if(_volume_num <= 0)
				{
					_sound_mc.gotoAndStop(0);
				}
				else
				{
					_sound_mc.gotoAndStop(1);
				}
			}
		}
	}
	/*
	
	*/
	function _changeSoundTransformFunc(uid_str)
	{
		/*
		
		*/
		var result_bool = false;
		/*
		
		*/
		if(_arr.hasOwnProperty(uid_str))
		{
			if(!_arr[uid_str].constant)
			{
				var playPropsConfig = new createjs.PlayPropsConfig();
				playPropsConfig.set({volume:_volume_num * _arr[uid_str].initVolume, pan:_arr[uid_str].initPan});
				_arr[uid_str].sndChannel.applyPlayProps(playPropsConfig);
				result_bool = true;
			}
		}
		/*
		
		*/
		return result_bool;
	}
	function _changeAllSoundTransformFunc()
	{
		for (var prop in _arr)
		{
			if(_arr.hasOwnProperty(prop))
			{
				_changeSoundTransformFunc(prop);
			}
		}
	}
	/*
	
	*/
	function _changeVolumeFunc()
	{
		/*
		
		*/
		if(_blockScript_bool)
		{
			_volume_num = 0;
		}
		else
		{
			if(_blockFocus_bool)
			{
				_volume_num = 0;
			}
			else
			{
				_volume_num = _volumeUser_num;
			}
		}
		/*
		
		*/
		new Edapskov_LocalStorage().saveFunc("volume", _volumeUser_num);
		/*
		
		*/
		_changeAllSoundTransformFunc();
		/*
		
		*/
		_updateSoundMcFunc();
	}
	/*
	
	*/
	function _verifyVolumeFunc(n)
	{
		/*
		
		*/
		n = Number(n);
		/*
		
		*/
		if(n < 0)
		{
			n = 0;
		}
		else if(n > 1)
		{
			n = 1;
		}
		/*
		
		*/
		return n;
	}
	/*
	
	*/
	function _verifyPanFunc(n)
	{
		/*
		
		*/
		n = Number(n);
		/*
		
		*/
		if(n < -1)
		{
			n = -1;
		}
		else if(n > 1)
		{
			n = 1;
		}
		/*
		
		*/
		return n;
	}
	/*
	
	*/
	function _onClickSoundMcFunc(event)
	{
		/*
		
		*/
		if(_blockFocus_bool)
		{
			/*
			
			*/
			_blockFocus_bool = false;
			/*
			
			*/
			window.focus();
			/*
			
			*/
			_volumeUser_num = 1;
		}
		else
		{
			if (_volumeUser_num > 0)
			{
				_volumeUser_num = 0;
			}
			else
			{
				_volumeUser_num = 1;
			}
		}
		/*
		
		*/
		_changeVolumeFunc();
	}
	/*
	
	*/
	function _removeSoundUIDFunc(uid_str)
	{
		/*
		
		*/
		var result_bool = false;
		/*
		
		*/
		if(uid_str !== undefined)
		{
			if(_arr.hasOwnProperty(uid_str))
			{
				var sndChannel = _arr[uid_str].sndChannel;
				sndChannel.removeEventListener("failed", _onSoundFailedFunc, false);
				sndChannel.removeEventListener("complete", _onSoundCompleteFunc, false);
				//sndChannel.destroy();
				sndChannel.stop();
				delete _arr[uid_str];
				result_bool = true;
			}
		}
		/*
		
		*/
		return result_bool;
	}
	/*
	
	*/
	function _onSoundFailedFunc(event)
	{
		trace(event, 2)
	}
	function _onSoundCompleteFunc(event)
	{
		var sndChannel = event.target;
		for (var prop in _arr)
		{
			if(_arr.hasOwnProperty(prop))
			{
				if (_arr[prop].sndChannel == sndChannel)
				{
					_removeSoundUIDFunc(prop);
				}
			}
		}
	}
	/*
	
	*/
	function _onVisibilityChangeFunc()
	{
		if ((document.visibilityState === "hidden") || (document.hidden))
		{
			/*
			
			*/
			_blockFocus_bool = true;
			/*
			
			*/
			_changeVolumeFunc();
		}
		else
		{
			/*
			
			*/
			_blockFocus_bool = false;
			/*
			
			*/
			_changeVolumeFunc();
		}
	}
	function _updateFocusEventFunc()
	{
		window.focus();
		window.addEventListener("focus", _onFocusWindowFunc, false);
		window.addEventListener("blur", _onBlurWindowFunc, false);
		document.body.addEventListener("mouseenter", _onMouseEnterFunc, false);
	}
	function _onFocusWindowFunc(event)
	{
		/*
		
		*/
		_blockFocus_bool = false;
		/*
		
		*/
		_changeVolumeFunc();
	}
	function _onBlurWindowFunc(event)
	{
		/*
		
		*/
		_blockFocus_bool = true;
		/*
		
		*/
		_changeVolumeFunc();
	}
	function _onMouseEnterFunc(event)
	{
		window.focus();
	}
}
/*
==============================================================================================================
FullScreen Canvas Manager
==============================================================================================================
*/
function Edapskov_FullScreenCanvasManager()
{
	/*
	публичные переменные
	*/
	this.copyright = "© edapskov";
	/*
	приватные переменные
	*/
	var _canvas;
	var _fullScreen_mc;
	/*
	
	*/
	this.initFunc = function()
	{
		/*
		
		*/
		_canvas = document.getElementById("canvas");
		/*
		
		*/
		_canvas.addEventListener("fullscreenchange", _onFullScreenChangeFunc, false);
		_canvas.addEventListener("mozfullscreenchange", _onFullScreenChangeFunc, false);
		_canvas.addEventListener("webkitfullscreenchange", _onFullScreenChangeFunc, false);
		_canvas.addEventListener("msfullscreenchange", _onFullScreenChangeFunc, false);
		/*
		
		*/
		_canvas.addEventListener("fullscreenerror", _onFullScreenErrorFunc, false);
	}
	/*
	
	*/
	this.updateFullScreenMcFunc = function(container)
	{
		if(container.fullScreen_mc)
		{
			/*
			
			*/
			_fullScreen_mc = container.fullScreen_mc;
			_fullScreen_mc.gotoAndStop(0);
			/*
			
			*/
			if(_isFullScreenAPIFunc())
			{
				/*
				
				*/
				_fullScreen_mc.alpha = 1;
				_fullScreen_mc.visible = true;
				_fullScreen_mc.mouseChildren = false;
				_fullScreen_mc.mouseEnabled = true;
				_fullScreen_mc.cursor = "pointer";
				_fullScreen_mc.addEventListener("click", _onClickFullScreenMcFunc, false);
				/*
				
				*/
				_updateFullScreenMcFunc();
			}
			else
			{
				_fullScreen_mc.alpha = 0;
				_fullScreen_mc.visible = false;
				_fullScreen_mc.mouseChildren = false;
				_fullScreen_mc.mouseEnabled = false;
			}
		}
	}
	/*
	
	*/
	function _updateFullScreenMcFunc()
	{
		if(_fullScreen_mc)
		{
			if(_fullScreen_mc.totalFrames > 1)
			{
				if(_isFullScreenFunc())
				{
					_fullScreen_mc.gotoAndStop(1);
				}
				else
				{
					_fullScreen_mc.gotoAndStop(0);
				}
			}
		}
	}
	/*
	
	*/
	function _onClickFullScreenMcFunc(event)
	{
		_toggleFullScreenFunc();
	}
	/*
	
	*/
	function _onFullScreenChangeFunc(event)
	{
		_updateFullScreenMcFunc();
	}
	/*
	
	*/
	function _onFullScreenErrorFunc(event)
	{
		if(_fullScreen_mc)
		{
			_fullScreen_mc.alpha = 0;
			_fullScreen_mc.visible = false;
			_fullScreen_mc.mouseChildren = false;
			_fullScreen_mc.mouseEnabled = false;
		}
	}
	/*
	
	*/
	function _toggleFullScreenFunc()
	{
		if(_isFullScreenFunc())
		{
			_endFullScreenFunc();
		}
		else
		{
			_beginFullScreenFunc();
		}
	}
	function _beginFullScreenFunc()
	{
		if(_canvas.requestFullscreen)
		{
			_canvas.requestFullscreen();
		}
		else if(_canvas.webkitRequestFullscreen)
		{
			_canvas.webkitRequestFullscreen();
		}
		else if(_canvas.mozRequestFullScreen)
		{
			_canvas.mozRequestFullScreen();
		}
		else if(_canvas.msRequestFullscreen)
		{
			_canvas.msRequestFullscreen();
		}
	}
	function _endFullScreenFunc()
	{
		if(document.cancelFullScreen)
		{
			document.cancelFullScreen();
		}
		else if(document.exitFullscreen)
		{
			document.exitFullscreen();
		}
		else if(document.webkitCancelFullScreen)
		{
			document.webkitCancelFullScreen();
		}
		else if(document.mozCancelFullScreen)
		{
			document.mozCancelFullScreen();
		}
		else if(document.msExitFullscreen)
		{
			document.msExitFullscreen();
		}
	}
	function _isFullScreenFunc()
	{
		/*
		
		*/
		var result_bool = false;
		/*
		
		*/
		if(document.fullscreenElement != null || document.mozFullScreenElement != null || document.webkitFullscreenElement != null || document.msFullscreenElement != null)
		{
			result_bool = true;
		}
		/*
		
		*/
		return result_bool;
	}
	function _isFullScreenAPIFunc()
	{
		/*
		
		*/
		var result_bool = false;
		var userAgent_str;
		/*
		
		*/
		if(document.fullScreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled)
		{
			result_bool = true;
		}
		/*
		браузеры-исключения
		*/
		if(result_bool)
		{
			userAgent_str = navigator.userAgent;
			if(userAgent_str.search(/Android/) >= 0 && userAgent_str.search(/YaSearchBrowser/) >= 0)
			{
				result_bool = false;
			}
		}
		/*
		
		*/
		return result_bool;
	}
}
/*
==============================================================================================================
Local Storage
==============================================================================================================
*/
function Edapskov_LocalStorage()
{
	/*
	константы
	*/
	var _NAME_LS = "edapskov";
	/*
	публичные переменные
	*/
	this.copyright = "© edapskov";
	/*
	
	*/
	this.initFunc = function()
	{
		
	}
	/*
	сохранение данных
	*/
	this.saveFunc = function(prop, val)
	{
		/*
		
		*/
		var result = null;
		var obj;
		/*
		
		*/
		try 
		{
			if (window.localStorage)
			{
				if(window.localStorage.hasOwnProperty(_NAME_LS))
				{
					obj = JSON.parse(window.localStorage[_NAME_LS]);
					obj[prop] = val;
					window.localStorage[_NAME_LS] = JSON.stringify(obj);
				}
				else
				{
					obj = {prop:val};
					window.localStorage[_NAME_LS] = JSON.stringify(obj)
				}
			}
			else
			{
				trace("Этот браузер НЕ поддерживает sessionStorage", 2);
			}
		}
		catch (event)
		{
			trace("Ошибка / ошибки при попытке сохранения sessionStorage! Возможно, проблема в сохраняемом объекте...", 2);
		}
		/*
		
		*/
		return result;
	}
	/*
	загрузка значения по имени переменной
	*/
	this.loadFunc = function(prop)
	{
		/*
		
		*/
		var result = null;
		var obj;
		/*
		
		*/
		try 
		{
			if (window.localStorage)
			{
				if(window.localStorage.hasOwnProperty(_NAME_LS))
				{
					obj = JSON.parse(window.localStorage[_NAME_LS]);
					if(obj.hasOwnProperty(prop))
					{
						result = obj[prop];
					}
				}
			}
			else
			{
				trace("Этот браузер НЕ поддерживает sessionStorage", 2);
			}
		}
		catch (event)
		{
			trace("Этот браузер НЕ работает с sessionStorage", 2);
		}
		/*
		
		*/
		return result;
	}
	/*
	уничтожение данных
	*/
	this.clearAllFunc = function()
	{
		/*
		
		*/
		var result = false;
		var obj;
		/*
		
		*/
		try 
		{
			if (window.localStorage)
			{
				if(window.localStorage.hasOwnProperty(_NAME_LS))
				{
					delete window.localStorage[_NAME_LS];
					result = true;
				}
			}
			else
			{
				trace("Этот браузер НЕ поддерживает sessionStorage", 2);
			}
		}
		catch (event)
		{
			trace("Этот браузер НЕ работает с sessionStorage", 2);
		}
		/*
		
		*/
		return result;
	}
	this.clearPropertyFunc = function(prop)
	{
		/*
		
		*/
		var result = false;
		var obj;
		/*
		
		*/
		try 
		{
			if (window.localStorage)
			{
				if(window.localStorage.hasOwnProperty(_NAME_LS))
				{
					obj = JSON.parse(window.localStorage[_NAME_LS]);
					if(obj.hasOwnProperty(prop))
					{
						delete obj[prop];
						result = true;
					}
					window.localStorage[_NAME_LS] = JSON.stringify(obj);
				}
			}
			else
			{
				trace("Этот браузер НЕ поддерживает sessionStorage", 2);
			}
		}
		catch (event)
		{
			trace("Этот браузер НЕ работает с sessionStorage", 2);
		}
		/*
		
		*/
		return result;
	}
	/*
	проверяем наличие свойства
	*/
	this.hasPropertyFunc = function(prop)
	{
		/*
		
		*/
		var result = false;
		var obj;
		/*
		
		*/
		try 
		{
			if (window.localStorage)
			{
				if(window.localStorage.hasOwnProperty(_NAME_LS))
				{
					obj = JSON.parse(window.localStorage[_NAME_LS]);
					if(obj.hasOwnProperty(prop))
					{
						result = true;
					}
				}
			}
			else
			{
				trace("Этот браузер НЕ поддерживает sessionStorage", 2);
			}
		}
		catch (event)
		{
			trace("Этот браузер НЕ работает с sessionStorage", 2);
		}
		/*
		
		*/
		return result;
	}
}
/*
==============================================================================================================
Debugger
==============================================================================================================
*/
function Edapskov_Debugger()
{
	/*
	константы
	*/
	var _OUTPUT_WIDTH = 300;
	var _OUTPUT_HEIGHT = 100;
	var _FPS_WIDTH = 100;
	var _FPS_HEIGHT = 50;
	var _INDENT = 10;
	/*
	публичные переменные
	*/
	this.copyright = "© edapskov";
	/*
	приватные переменные
	*/
	var _container;
	var _outputText;
	var _fpsText;
	var _visible;
	/*
	
	*/
	this.initFunc = function(container, width, height)
	{
		/*
		
		*/
		_container = new createjs.Container();
		container.addChild(_container);
		_container.mouseEnabled = false;
		_container.mouseChildren = false;
		/*
		
		*/
		var outputContainer = new createjs.Container();
		_container.addChild(outputContainer);
		var bgOutputContainer = new createjs.Shape();
		bgOutputContainer.graphics.beginFill("rgba(0, 0, 0, 0.4)");
		bgOutputContainer.graphics.drawRect(0, 0, _OUTPUT_WIDTH, _OUTPUT_HEIGHT);
		bgOutputContainer.graphics.endFill();
		outputContainer.addChild(bgOutputContainer);
		outputContainer.x = 0;
		outputContainer.y = 0;
		/*
		
		*/
		_outputText = new createjs.Text();
		_outputText.name = "outputText";
		_outputText.color = "#ffffff";
		_outputText.font = "bold 16px Arial";
		_outputText.lineWidth = _OUTPUT_WIDTH - (_INDENT * 2);
		_outputText.textAlign = "left";
		_outputText.text = "";
		outputContainer.addChild(_outputText)
		_outputText.x = _INDENT;
		_outputText.y = _INDENT;
		/*
		
		*/
		var maskOutputContainer = new createjs.Shape();
		maskOutputContainer.graphics.beginFill("rgba(0, 0, 0, 1)");
		maskOutputContainer.graphics.drawRect(0, 0, _OUTPUT_WIDTH, _OUTPUT_HEIGHT);
		maskOutputContainer.graphics.endFill();
		maskOutputContainer.x = 0;
		maskOutputContainer.y = 0;
		_outputText.mask = maskOutputContainer;
		/*
		
		*/
		var fpsContainer = new createjs.Container();
		_container.addChild(fpsContainer);
		var bgFpsContainer = new createjs.Shape();
		bgFpsContainer.graphics.beginFill("rgba(0, 0, 0, 0.4)");
		bgFpsContainer.graphics.drawRect(0, 0, _FPS_WIDTH, _FPS_HEIGHT);
		bgFpsContainer.graphics.endFill();
		fpsContainer.addChild(bgFpsContainer);
		fpsContainer.x = width - _FPS_WIDTH;
		fpsContainer.y = 0;
		/*
		
		*/
		_fpsText = new createjs.Text();
		_fpsText.name = "fpsText";
		_fpsText.color = "#ffffff";
		_fpsText.font = "bold 24px Arial";
		_fpsText.lineWidth = _FPS_WIDTH;
		_fpsText.lineHeight = _FPS_HEIGHT;
		_fpsText.outline = 0;
		_fpsText.textAlign = "center";
		_fpsText.textBaseline = "middle";
		_fpsText.text = "FPS";
		fpsContainer.addChild(_fpsText)
		_fpsText.x = 50;
		_fpsText.y = 25;
		/*
		
		*/
		_visible = false;
		_updateVisibleFunc();
	}
	/*
	
	*/
	this.updateOutputFunc = function(output_str)
	{
		/*
		
		*/
		if(output_str === undefined)
		{
			output_str = "";
		}
		else
		{
			output_str = String(output_str) + "\n";
		}
		/*
		
		*/
		_outputText.text = output_str;
	}
	/*
	
	*/
	this.updateFpsFunc = function(fps_str)
	{
		/*
		
		*/
		if(fps_str === undefined)
		{
			fps_str = "FPS";
		}
		else
		{
			fps_str = String(fps_str);
		}
		/*
		
		*/
		_fpsText.text = fps_str;
	}
	/*
	
	*/
	this.setVisibleFunc = function(visible_bool)
	{
		/*
		
		*/
		if(visible_bool === undefined)
		{
			visible_bool = false;
		}
		else
		{
			visible_bool = Boolean(visible_bool);
		}
		/*
		
		*/
		_visible = visible_bool;
		/*
		
		*/
		_updateVisibleFunc();
	}
	this.getVisibleFunc = function()
	{
		return _visible;
	}
	this.toggleVisibleFunc = function()
	{
		/*
		
		*/
		if(_visible)
		{
			_visible = false;
		}
		else
		{
			_visible = true;
		}
		/*
		
		*/
		_updateVisibleFunc();
	}
	/*
	
	*/
	function _updateVisibleFunc()
	{
		_container.visible = _visible;
	}
}
/*
==============================================================================================================
Filters
==============================================================================================================
*/
function Edapskov_Glow(displayObject, delay_num, color_str, blur_num)
{
	/*
	публичные переменные
	*/
	this.copyright = "© edapskov";
	/*
	приватные переменные
	*/
	var initialColor_str = "#ffffff";
	var initialBlur_num = 0;
	/*
	
	*/
	if(displayObject !== undefined)
	{
		/*
		
		*/
		if(displayObject.shadow)
		{
			initialColor_str = displayObject.shadow.color;
			initialBlur_num = displayObject.shadow.blur;
		}
		if(delay_num === undefined)
		{
			delay_num = 0;
		}
		if(color_str === undefined)
		{
			color_str = "#ffffff";
		}
		if(blur_num === undefined)
		{
			blur_num = 5;
		}
		/*
		
		*/
		var glow = new createjs.Shadow(initialColor_str, 0, 0, initialBlur_num);
		if(delay_num > 0)
		{
			createjs.Tween.get(glow).wait(0).to({color:color_str, offsetX:0, offsetY:0, blur:blur_num}, delay_num * 1000);
		}
		displayObject.shadow = glow;
	}
}
function Edapskov_AnimateShadow(displayObject, delay_num, color_str, blur_num)
{
	/*
	константы
	*/
	var _RAD = 6.28;
	/*
	публичные переменные
	*/
	this.copyright = "© edapskov";
	/*
	приватные переменные
	*/
	var _displayObject;
	var _delay_num;
	var _color_str;
	var _blur_num;
	var _angle;
	var _firstTime;
	/*
	
	*/
	if(displayObject !== undefined)
	{
		/*
		
		*/
		_displayObject = displayObject;
		/*
		
		*/
		if(delay_num === undefined)
		{
			_delay_num = 1000;
		}
		else
		{
			_delay_num = Number(delay_num) * 1000;
		}
		if(color_str === undefined)
		{
			_color_str = "#ff0000";
		}
		else
		{
			_color_str = color_str;
		}
		if(blur_num === undefined)
		{
			_blur_num = 5;
		}
		else
		{
			_blur_num = Number(blur_num);
		}
		/*
		
		*/
		_angle = _RAD;
		_firstTime = new Date().getTime();
		/*
		
		*/
		_displayObject.addEventListener("tick", _onTickFunc, false);
	}
	/*
	
	*/
	function _onTickFunc()
	{
		try
		{
			var shadow = new createjs.Shadow(_color_str, Math.sin(_angle) * _blur_num, Math.cos(_angle) * _blur_num, _blur_num);
			_displayObject.shadow = shadow;
			var currentTime = new Date().getTime();
			_angle = (((_firstTime + _delay_num) - currentTime) / _delay_num) * _RAD;
			if(_angle <= 0)
			{
				_displayObject.removeEventListener("tick", _onTickFunc, false);
			}
		}
		catch(event)
		{
			_displayObject.removeEventListener("tick", _onTickFunc, false);
		}
	}
}
function Edapskov_Grayscale(displayObject, scale_num)
{
	/*
	публичные переменные
	*/
	this.copyright = "© edapskov";
	/*
	
	*/
	if((displayObject != undefined) && (displayObject.hasOwnProperty("filters")))
	{
		/*
		
		*/
		if(scale_num !== undefined)
		{
			scale_num = Number(scale_num);
		}
		else
		{
			scale_num = 2;
		}
		/*
		
		*/
		var bounds = displayObject.getBounds();
		var matrix = new createjs.ColorMatrix().adjustSaturation(-100);
		var grayscale = new createjs.ColorMatrixFilter(matrix);
		/*
		
		*/
		if(displayObject.filters == null)
		{
			displayObject.filters = [grayscale];
		}
		else
		{
			displayObject.filters.push(grayscale);
		}
		/*
		
		*/
		if(displayObject.bitmapCache)
		{
			displayObject.updateCache();
		}
		else
		{
			displayObject.cache(bounds.x, bounds.y, bounds.width, bounds.height, scale_num);
		}
	}
}
function Edapskov_Sepia(displayObject, scale_num)
{
	/*
	публичные переменные
	*/
	this.copyright = "© edapskov";
	/*
	
	*/
	if((displayObject != undefined) && (displayObject.hasOwnProperty("filters")))
	{
		/*
		
		*/
		if(scale_num !== undefined)
		{
			scale_num = Number(scale_num);
		}
		else
		{
			scale_num = 2;
		}
		/*
		
		*/
		var bounds = displayObject.getBounds();
		var sepia = new createjs.ColorMatrixFilter([0.39, 0.77, 0.19, 0, 0, 0.35, 0.68, 0.17, 0, 0, 0.27, 0.53, 0.13, 0, 0, 0, 0, 0, 1, 0]);
		/*
		
		*/
		if(displayObject.filters == null)
		{
			displayObject.filters = [sepia];
		}
		else
		{
			displayObject.filters.push(sepia);
		}
		/*
		
		*/
		if(displayObject.bitmapCache)
		{
			displayObject.updateCache();
		}
		else
		{
			displayObject.cache(bounds.x, bounds.y, bounds.width, bounds.height, scale_num);
		}
	}
}
/*
==============================================================================================================
New Window
==============================================================================================================
*/
function Edapskov_NewWindow(title_str, content_str)
{
	/*
	публичные переменные
	*/
	this.copyright = "© edapskov";
	/*
	
	*/
	var _newWindow = window.open("", title_str);
	_newWindow.document.write('<!DOCTYPE html><html><head><title>' + title_str + '</title></head><body bgcolor="#000000">' + content_str + '</body></html>');
	_newWindow.document.close();
}
function Edapskov_ScreenshotWindow(title_str, src_str)
{
	/*
	публичные переменные
	*/
	this.copyright = "© edapskov";
	/*
	
	*/
	var _newWindow = window.open("", title_str);
	_newWindow.document.write('<!DOCTYPE html><html><head><meta charset="utf-8" /><title>' + title_str + '</title><style>*{margin:0px;padding:0px;color:#ffffff;}html{overflow: hidden;}body{background-color:#333333;}img{box-shadow:0 0 10px rgba(0,0,0,0.6);}</style><script type="text/javascript">window.addEventListener("load", onLoadWindowFunc, false);function onLoadWindowFunc(event){this.removeEventListener("load", onLoadWindowFunc, false);this.addEventListener("resize", onResizeWindowFunc, false);updateSizeWindowFunc();}function onResizeWindowFunc(event){updateSizeWindowFunc();}function updateSizeWindowFunc(){var screenshot_img = document.getElementById("screenshot");screenshot_img.style.marginLeft = ((window.innerWidth - screenshot_img.width) / 2) + "px";screenshot_img.style.marginTop = ((window.innerHeight - screenshot_img.height) / 2) + "px";}</script></head><body><img id="screenshot" src="' + src_str + '"></body></html>');
	_newWindow.document.close();
}
function Edapskov_PrintWindow(title_str, src_str)
{
	/*
	публичные переменные
	*/
	this.copyright = "© edapskov";
	/*
	
	*/
	var _newWindow = window.open("", title_str);
	_newWindow.document.write('<!DOCTYPE html><html><head><meta charset="utf-8" /><title>' + title_str + '</title><style>*{margin:0px;padding:0px;color:#ffffff;}html{overflow: hidden;}body{background-color:#333333;}img{box-shadow:0 0 10px rgba(0,0,0,0.6);}</style><script type="text/javascript">window.addEventListener("load", onLoadWindowFunc, false);function onLoadWindowFunc(event){this.removeEventListener("load", onLoadWindowFunc, false);this.addEventListener("resize", onResizeWindowFunc, false);updateSizeWindowFunc();}function onResizeWindowFunc(event){updateSizeWindowFunc();}function updateSizeWindowFunc(){var screenshot_img = document.getElementById("screenshot");screenshot_img.style.marginLeft = ((window.innerWidth - screenshot_img.width) / 2) + "px";screenshot_img.style.marginTop = ((window.innerHeight - screenshot_img.height) / 2) + "px";}</script></head><body><img id="screenshot" src="' + src_str + '"></body></html>');
	_newWindow.document.close();
	/*
	
	*/
	_newWindow.focus();
	_newWindow.print();
	_newWindow.close();
}
/*
==============================================================================================================
Utilities
==============================================================================================================
*/
function Edapskov_Utilities()
{
	/*
	публичные переменные
	*/
	this.copyright = "© edapskov";
	/*
	
	*/
	this.isMobileFunc = function()
	{
		var result_bool = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
		return result_bool;
	}
	/*
	
	*/
	this.getRectFunc = function(fromDisplayObject, toDisplayObject)
	{
		/*
		
		*/
		var result_rect = new createjs.Rectangle(0, 0, 0, 0);
		/*
		
		*/
		try
		{
			if((fromDisplayObject !== undefined) && (toDisplayObject !== undefined))
			{
				var bounds = fromDisplayObject.getBounds();
				var point = fromDisplayObject.localToLocal(bounds.x, bounds.y, toDisplayObject);
				result_rect.x = point.x;
				result_rect.y = point.y;
				point = fromDisplayObject.localToLocal(bounds.x + bounds.width, bounds.y, toDisplayObject);
				result_rect.width = Math.abs(point.x - result_rect.x)
				point = fromDisplayObject.localToLocal(bounds.x, bounds.y + bounds.height, toDisplayObject);
				result_rect.height = Math.abs(point.y - result_rect.y)
			}
		}
		catch(event)
		{
			result_rect = null;
		}
		/*
		
		*/
		return result_rect;
	}
}
/*
==============================================================================================================
Particles
==============================================================================================================
*/
function Edapskov_Glitter(colors_str, rad_num, shape_num)
{
	/*
	публичные переменные
	*/
	this.copyright = "© edapskov";
	this.life = 1;
	/*
	
	*/
	if(colors_str === undefined)
	{
		colors_str = "#ffffff";
	}
	else
	{
		colors_str = String(colors_str);
	}
	if(rad_num === undefined)
	{
		rad_num = 16;
	}
	else
	{
		rad_num = Number(rad_num);
	}
	if(shape_num === undefined)
	{
		shape_num = 1;
	}
	else
	{
		shape_num = Number(shape_num);
	}
	/*
	
	*/
	var container = new createjs.Container();
	var thickness_num = Math.ceil(rad_num / rad_num);
	var diameter_num = rad_num * 2;
	/*
	
	*/
	if(shape_num === 1)
	{
		var shape_1_1 = new createjs.Shape();
		shape_1_1.graphics.setStrokeStyle(0).beginStroke("rgba(255, 255, 255, 0)");
		shape_1_1.graphics.beginRadialGradientFill([colors_str, colors_str], [0, 1], 0, 0, rad_num, 0, 0, 0);
		shape_1_1.graphics.moveTo(-thickness_num, -thickness_num);
		shape_1_1.graphics.lineTo(0, -rad_num);
		shape_1_1.graphics.lineTo(thickness_num, -thickness_num);
		shape_1_1.graphics.lineTo(rad_num, 0);
		shape_1_1.graphics.lineTo(thickness_num, thickness_num);
		shape_1_1.graphics.lineTo(0, rad_num);
		shape_1_1.graphics.lineTo(-thickness_num, thickness_num);
		shape_1_1.graphics.lineTo(-rad_num, 0);
		shape_1_1.graphics.lineTo(-thickness_num, -thickness_num);
		shape_1_1.graphics.endFill();
		shape_1_1.graphics.beginFill(colors_str);
		shape_1_1.graphics.drawCircle(0, 0, thickness_num * 3);
		shape_1_1.graphics.endFill();
		shape_1_1.graphics.beginRadialGradientFill(["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 0)"], [0, 1], 0, 0, 0, 0, 0, rad_num);
		shape_1_1.graphics.drawCircle(0, 0, rad_num);
		shape_1_1.graphics.endFill();
		container.addChild(shape_1_1);
	}
	else
	{
		var shape_1_0 = new createjs.Shape();
		shape_1_0.graphics.beginFill(colors_str);
		shape_1_0.graphics.drawCircle(0, 0, rad_num);
		shape_1_0.graphics.endFill();
		container.addChild(shape_1_0);
	}
	/*
	
	*/
	container.mouseEnabled = false;
	container.mouseChildren = false;
	if(container.bitmapCache)
	{
		container.updateCache();
	}
	else
	{
		container.cache(-rad_num, -rad_num, rad_num * 2, rad_num * 2);
	}
	/*
	
	*/
	return container;
}
function Edapskov_Flickering(containerDisplayObject, targetDisplayObject, colors_arr, particles_num, rad_num, turnEveryTick_num, glitter_str)
{
	/*
	публичные переменные
	*/
	this.copyright = "© edapskov";
	/*
	приватные переменные
	*/
	var _particles_arr;
	var _targetDisplayObject;
	var _container;
	var _colors_arr;
	var _particles_num;
	var _rad_num;
	var _turnEveryTick_num;
	var _glitter_str;
	var _area_rect;
	var _currentCount_num;
	var _maxParticles_num;
	/*
	
	*/
	if((containerDisplayObject !== undefined) && (targetDisplayObject !== undefined))
	{
		/*
		
		*/
		_particles_arr = new Array();
		/*
		
		*/
		_targetDisplayObject = targetDisplayObject;
		/*
		
		*/
		_container = new createjs.Container();
		containerDisplayObject.addChild(_container);
		_container.mouseEnabled = false;
		_container.mouseChildren = false;
		/*
		
		*/
		if(colors_arr === undefined)
		{
			_colors_arr = ["#ffffff", "#ffffcc"];
		}
		else
		{
			if(!colors_arr instanceof Array)
			{
				_colors_arr = ["#ffffff", "#ffffcc"];
			}
			else
			{
				_colors_arr = colors_arr;
			}
		}
		if(particles_num !== undefined)
		{
			_particles_num = Number(particles_num);
		}
		else
		{
			_particles_num = 20;
		}
		if(rad_num !== undefined)
		{
			_rad_num = Number(rad_num);
		}
		else
		{
			_rad_num = 16;
		}
		if(turnEveryTick_num !== undefined)
		{
			_turnEveryTick_num = Number(turnEveryTick_num);
		}
		else
		{
			_turnEveryTick_num = 12;
		}
		if(glitter_str !== undefined)
		{
			_glitter_str = String(glitter_str);
			if(!lib.hasOwnProperty(_glitter_str))
			{
				_glitter_str = null;
			}
		}
		else
		{
			_glitter_str = null;
		}
		/*
		
		*/
		_area_rect = new Edapskov_Utilities().getRectFunc(_targetDisplayObject, _container);
		/*
		
		*/
		if(_area_rect != null)
		{
			/*
			чтобы не перегружать мелкие элементы
			*/
			_maxParticles_num = particles_num;
			if(_area_rect.width != null && _area_rect.height != null)
			{
				_maxParticles_num = Math.ceil((_area_rect.width * _area_rect.height) / (_rad_num * _rad_num));
			}
			/*
			
			*/
			_currentCount_num = 0;
			_container.addEventListener("tick", _onTickFunc, false);
		}
	}
	/*
	
	*/
	function _onTickFunc()
	{
		try
		{
			/*
			
			*/
			var glitter;
			var randX_num;
			var randY_num;
			var numChildrens_num;
			var i;
			/*
			
			*/
			if (_currentCount_num < _particles_num)
			{
				/*
				
				*/
				randX_num = Math.ceil(Math.random() * _area_rect.width + _area_rect.x);
				randY_num = Math.ceil(Math.random() * _area_rect.height + _area_rect.y);
				/*
				
				*/
				var point = _container.localToLocal(randX_num, randY_num, _targetDisplayObject);
				if (_targetDisplayObject.hitTest(point.x, point.y))
				{
					/*
					
					*/
					if(_glitter_str != null)
					{
						glitter = new lib[_glitter_str]();
					}
					else
					{
						glitter = new Edapskov_Glitter(_colors_arr[Math.floor(Math.random() * _colors_arr.length)], _rad_num);
					}
					/*
					
					*/
					_container.addChild(glitter);
					glitter.x = randX_num;
					glitter.y = randY_num;
					glitter.scaleX = glitter.scaleY = 0;
					/*
					
					*/
					_particles_arr.push([glitter, 1]);
					/*
					чтобы не перегружать мелкие элементы
					*/
					if(_particles_arr.length >= _maxParticles_num)
					{
						_particles_num = _maxParticles_num;
					}
				}
			}
			/*
			
			*/
			numChildrens_num = _particles_arr.length;
			if (numChildrens_num > 0)
			{
				i = 0;
				while (i < numChildrens_num)
				{
					glitter = _particles_arr[i][0];
					glitter.rotation +=  _turnEveryTick_num;
					_particles_arr[i][1] -= 0.02;
					if (_particles_arr[i][1] > 0.5)
					{
						glitter.scaleX +=  0.04;
						glitter.scaleY +=  0.04;
					}
					else if (_particles_arr[i][1] <= 0)
					{
						numChildrens_num--;
						_particles_arr.splice(i, 1);
						glitter.parent.removeChild(glitter);
					}
					else
					{
						glitter.scaleX -=  0.04;
						glitter.scaleY -=  0.04;
					}
					i++;
				}
			}
			else
			{
				if (_currentCount_num > _particles_num)
				{
					_container.removeEventListener("tick", _onTickFunc, false);
					_container.parent.removeChild(_container);
				}
			}
			/*
			
			*/
			_currentCount_num++;
		}
		catch(event)
		{
			_container.removeEventListener("tick", _onTickFunc, false);
			_container.parent.removeChild(_container);
		}
	}
}
function Edapskov_Evaporation(containerDisplayObject, targetDisplayObject, colors_arr, particles_num, rad_num, loop_bool)
{
	/*
	публичные переменные
	*/
	this.copyright = "© edapskov";
	/*
	приватные переменные
	*/
	var _particles_arr;
	var _targetDisplayObject;
	var _container;
	var _colors_arr;
	var _particles_num;
	var _rad_num;
	var _loop_bool;
	var _rect;
	var _oscillation_num;
	var _speed_num = 2;
	var _currentCount_num;
	/*
	
	*/
	if((containerDisplayObject !== undefined) && (targetDisplayObject !== undefined))
	{
		/*
		
		*/
		_particles_arr = new Array();
		/*
		
		*/
		_targetDisplayObject = targetDisplayObject;
		/*
		
		*/
		_container = new createjs.Container();
		containerDisplayObject.addChild(_container);
		_container.mouseEnabled = false;
		_container.mouseChildren = false;
		/*
		
		*/
		if(colors_arr === undefined)
		{
			_colors_arr = ["#ffffff", "#ffffcc"];
		}
		else
		{
			if(!colors_arr instanceof Array)
			{
				_colors_arr = ["#ffffff", "#ffffcc"];
			}
			else
			{
				_colors_arr = colors_arr;
			}
		}
		if(particles_num !== undefined)
		{
			_particles_num = Number(particles_num);
		}
		else
		{
			_particles_num = 20;
		}
		if(rad_num !== undefined)
		{
			_rad_num = Number(rad_num);
		}
		else
		{
			_rad_num = 16;
		}
		if(loop_bool !== undefined)
		{
			_loop_bool = Boolean(loop_bool);
		}
		else
		{
			_loop_bool = false;
		}
		/*
		
		*/
		_rect = new Edapskov_Utilities().getRectFunc(_targetDisplayObject, _container);
		/*
		
		*/
		if(_rect != null)
		{
			/*
			
			*/
			_oscillation_num = Math.ceil((_rect.width +_rect.height) / 60);
			/*
			
			*/
			_currentCount_num = 0;
			_container.addEventListener("tick", _onTickFunc, false);
		}
	}
	/*
	
	*/
	function _onTickFunc()
	{
		try
		{
			/*
			
			*/
			var glitter;
			var randX_num;
			var randY_num;
			var point;
			var numChildrens_num;
			var i;
			/*
			
			*/
			if (_currentCount_num < _particles_num)
			{
				randX_num = Math.ceil(Math.random() * _rect.width + _rect.x);
				randY_num = Math.ceil(Math.random() * _rect.height + _rect.y);
				point = _container.localToLocal(randX_num, randY_num, _targetDisplayObject);
				if (_targetDisplayObject.hitTest(point.x, point.y))
				{
					/*
					
					*/
					glitter = new Edapskov_Glitter(_colors_arr[Math.floor(Math.random() * _colors_arr.length)], _rad_num);
					_container.addChild(glitter);
					glitter.x = randX_num;
					glitter.y = randY_num;
					glitter.life = glitter.alpha = glitter.scaleX = glitter.scaleY = Math.random() * (1 - 0.1) + 0.1;
					/*
					
					*/
					_particles_arr.push([glitter, 1]);
				}
			}
			/*
			
			*/
			numChildrens_num = _particles_arr.length;
			if (numChildrens_num > 0)
			{
				i = 0;
				while (i < numChildrens_num)
				{
					glitter = _particles_arr[i][0];
					glitter.rotation +=  5;
					glitter.life -= 0.005;
					if (glitter.life > 0)
					{
						glitter.x = Math.sin(glitter.y / _oscillation_num) * _oscillation_num + glitter.x;
						glitter.y = glitter.y - _speed_num;
						//glitter.scaleX = glitter.scaleY = (glitter.scaleY * glitter.life);
					}
					else
					{
						if(_loop_bool)
						{
							randX_num = Math.ceil(Math.random() * _rect.width + _rect.x);
							randY_num = Math.ceil(Math.random() * _rect.height + _rect.y);
							point = _container.localToLocal(randX_num, randY_num, _targetDisplayObject);
							if (_targetDisplayObject.hitTest(point.x, point.y))
							{
								//glitter.life = 1;
								glitter.x = randX_num;
								glitter.y = randY_num;
								glitter.life = glitter.alpha = glitter.scaleX = glitter.scaleY = Math.random() * (1 - 0.1) + 0.1;
							}
						}
						else
						{
							numChildrens_num--;
							_particles_arr.splice(i, 1);
							glitter.parent.removeChild(glitter);
						}
					}
					i++;
				}
			}
			else
			{
				if (_currentCount_num > _particles_num)
				{
					_container.removeEventListener("tick", _onTickFunc, false);
					_container.parent.removeChild(_container);
				}
			}
			/*
			
			*/
			_currentCount_num++;
		}
		catch(event)
		{
			_container.removeEventListener("tick", _onTickFunc, false);
			_container.parent.removeChild(_container);
		}
	}
}
/*
==============================================================================================================
Управление временной шкалой
==============================================================================================================
*/
function Edapskov_TimelineControl(currentMovieClip_mc)
{
	/*
	
	*/
	createjs.EventDispatcher.initialize(this);
	/*
	публичные переменные
	*/
	this.copyright = "© edapskov";
	/*
	приватные переменные
	*/
	var _that = this;
	var _currentMovieClip_mc;
	var _totalFrames_num;
	var _beginFrame_num;
	var _targetFrame_num;
	var _currentFrame_num;
	var _counterFrames_num;
	var _direction_num;
	var _speed_num;
	var _params_arr;
	/*
	
	*/
	if(currentMovieClip_mc !== undefined)
	{
		_currentMovieClip_mc = currentMovieClip_mc;
		_totalFrames_num = _currentMovieClip_mc.totalFrames;
	}
	/*
	
	*/
	this.gotoFunc = function(targetFrame, speed_num, delay_num, params_arr)
	{
		_gotoFunc(targetFrame, speed_num, delay_num, params_arr);
	}
	/*
	
	*/
	this.gotoEndFunc = function(params_arr)
	{
		_gotoFunc(undefined, undefined, undefined, params_arr);
	}
	/*
	
	*/
	function _gotoFunc(targetFrame, speed_num, delay_num, params_arr)
	{
		if(_currentMovieClip_mc !== null)
		{
			/*
			
			*/
			if(targetFrame === undefined)
			{
				_targetFrame_num = _totalFrames_num - 1;
			}
			else
			{
				if(typeof targetFrame === "string")
				{
					_targetFrame_num = _returnNumFrameFunc(targetFrame);
				}
				else
				{
					_targetFrame_num = Number(targetFrame);
				}
			}
			if(speed_num === undefined)
			{
				_speed_num = 1;
			}
			else
			{
				_speed_num = Math.abs(Number(speed_num));
			}
			if(delay_num === undefined)
			{
				delay_num = 0;
			}
			else
			{
				delay_num = Number(delay_num);
			}
			if(params_arr === undefined)
			{
				_params_arr = new Array();
			}
			else
			{
				if(!params_arr instanceof Array)
				{
					_params_arr = new Array();
				}
				else
				{
					_params_arr = params_arr;
				}
			}
			/*
			
			*/
			_counterFrames_num = 0;
			/*
			
			*/
			_beginFrame_num = _currentFrame_num = _currentMovieClip_mc.currentFrame;
			/*
			
			*/
			if (_beginFrame_num !== _targetFrame_num)
			{
				/*
				
				*/
				if (_targetFrame_num > _beginFrame_num)
				{
					_direction_num = 1;
				}
				else if (_targetFrame_num < _beginFrame_num)
				{
					_direction_num = -1;
				}
				else
				{
					_direction_num = 0;
				}
				/*
				
				*/
				_currentMovieClip_mc.removeEventListener("tick", _onTickFunc, false);
				/*
				
				*/
				setTimeout(_onStartGotoFunc, delay_num * 1000);
			}
		}
	}
	function _onStartGotoFunc()
	{
		_currentMovieClip_mc.addEventListener("tick", _onTickFunc, false);
	}
	/*
	в каждом кадре
	*/
	function _onTickFunc(event)
	{
		/*
		
		*/
		_counterFrames_num += 1;
		/*
		
		*/
		var newFrame_num = Math.round(_beginFrame_num + _direction_num * (_counterFrames_num * _speed_num));
		/*
		
		*/
		try
		{
			/*
			
			*/
			_currentFrame_num = newFrame_num;
			/*
			
			*/
			_currentMovieClip_mc.gotoAndStop(_currentFrame_num);
			/*
			
			*/
			_onChangeTimelineFunc();
			/*
			
			*/
			if (_direction_num < 0)
			{
				if (newFrame_num <= _targetFrame_num)
				{
					/*
					
					*/
					newFrame_num = _targetFrame_num;
					/*
					
					*/
					_onCompletedTimelineFunc();
					/*
					
					*/
					_currentMovieClip_mc.removeEventListener("tick", _onTickFunc, false);
				}
			}
			if (_direction_num > 0)
			{
				if (newFrame_num >= _targetFrame_num)
				{
					/*
					
					*/
					newFrame_num = _targetFrame_num;
					/*
					
					*/
					_onCompletedTimelineFunc();
					/*
					
					*/
					_currentMovieClip_mc.removeEventListener("tick", _onTickFunc, false);
				}
			}
		}
		catch(event)
		{
			_currentMovieClip_mc.removeEventListener("tick", _onTickFunc, false);
		}
	}
	function _onChangeTimelineFunc()
	{
		var user_event = new createjs.Event("change_timeline");
		user_event.position = _currentFrame_num;
		user_event.label = _returnLabelFrameFunc(_currentFrame_num);
		user_event.params = _params_arr;
		_that.dispatchEvent(user_event);
	}
	function _onCompletedTimelineFunc()
	{
		var user_event = new createjs.Event("completed_timeline");
		user_event.position = _currentFrame_num;
		user_event.label = _returnLabelFrameFunc(_currentFrame_num);
		user_event.params = _params_arr;
		_that.dispatchEvent(user_event);
	}
	/*
	переводит название кадра в номер кадра
	*/
	function _returnNumFrameFunc(target_str)
	{
		/*
		
		*/
		var frame_num = _totalFrames_num;
		var labels_arr = _currentMovieClip_mc.labels;
		var i = 0;
		var l = labels_arr.length;
		/*
		
		*/
		while (i < l)
		{
			/*
			
			*/
			if (target_str === labels_arr[i].label)
			{
				frame_num = labels_arr[i].position;
			}
			/*
			
			*/
			i++;
		}
		/*
		
		*/
		return frame_num;
	}
	/*
	переводит номер кадра в название
	*/
	function _returnLabelFrameFunc(target_num)
	{
		/*
		
		*/
		var label_str = null;
		var labels_arr = _currentMovieClip_mc.labels;
		var i = 0;
		var l = labels_arr.length;
		/*
		
		*/
		while (i < l)
		{
			/*
			
			*/
			if (target_num === labels_arr[i].position)
			{
				label_str = labels_arr[i].label;
			}
			/*
			
			*/
			i++;
		}
		/*
		
		*/
		return label_str;
	}
}
/*
==============================================================================================================
Анимация счётчика в текстовом поле
==============================================================================================================
*/
function Edapskov_AnimationUintInTextField(textField_txt, startValue_num, finalValue_num, step_num, prefix_str, postfix_str, delay_num)
{
	/*
	
	*/
	createjs.EventDispatcher.initialize(this);
	/*
	публичные переменные
	*/
	this.copyright = "© edapskov";
	/*
	приватные переменные
	*/
	var _that = this;
	var _textField_txt;
	var _startValue_num;
	var _currentValue_num;
	var _finalValue_num;
	var _step_num;
	var _prefix_str;
	var _postfix_str;
	var _delay_num;
	/*
	
	*/
	if((textField_txt !== undefined) && (startValue_num !== undefined) && (finalValue_num !== undefined))
	{
		if(textField_txt.hasOwnProperty("text"))
		{
			/*
			
			*/
			_textField_txt = textField_txt;
			_startValue_num = Number(startValue_num);
			_currentValue_num = _startValue_num;
			_finalValue_num = Number(finalValue_num);
			/*
			
			*/
			if(step_num !== undefined)
			{
				_step_num = Number(step_num);
			}
			else
			{
				_step_num = 0;
			}
			if(prefix_str !== undefined)
			{
				_prefix_str = String(prefix_str);
			}
			else
			{
				_prefix_str = "";
			}
			if(postfix_str !== undefined)
			{
				_postfix_str = String(postfix_str);
			}
			else
			{
				_postfix_str = "";
			}
			if(delay_num !== undefined)
			{
				_delay_num = Number(delay_num);
			}
			else
			{
				_delay_num = 0;
			}
			/*
			
			*/
			if(_startValue_num > _finalValue_num)
			{
				_step_num = -_step_num;
			}
			/*
			
			*/
			_updateTextFieldFunc(_startValue_num);
			/*
			
			*/
			setTimeout(_startFunc, _delay_num * 1000);
		}
	}
	/*
	
	*/
	function _startFunc()
	{
		_textField_txt.addEventListener("tick", _onTickFunc, false);
	}
	function _completedFunc()
	{
		/*
		
		*/
		_textField_txt.removeEventListener("tick", _onTickFunc, false);
		/*
		
		*/
		var user_event = new createjs.Event("completed_animation");
		user_event.currentValue = _currentValue_num;
		_that.dispatchEvent(user_event);
	}
	/*
	
	*/
	function _onTickFunc(event)
	{
		if(_textField_txt != null)
		{
			if(_currentValue_num !== _finalValue_num)
			{
				if(_step_num === 0)
				{
					_currentValue_num += Math.round((_finalValue_num - _currentValue_num) / 2);
				}
				else
				{
					_currentValue_num += _step_num;
					if((_startValue_num < _finalValue_num) && (_currentValue_num > _finalValue_num))
					{
						_currentValue_num = _finalValue_num;
					}
					if((_startValue_num > _finalValue_num) && (_currentValue_num < _finalValue_num))
					{
						_currentValue_num = _finalValue_num;
					}
				}
			}
			else
			{
				_completedFunc();
			}
			/*
			
			*/
			_updateTextFieldFunc(_currentValue_num);
		}
		else
		{
			_completedFunc();
		}
	}
	/*
	
	*/
	function _updateTextFieldFunc(val_num)
	{
		_textField_txt.text = _prefix_str + val_num + postfix_str;
	}
}
/*
==============================================================================================================
Глобальные функции
==============================================================================================================
*/
/*
православный trace
*/
function trace(expression, flag_num)
{
	if(expression === undefined)
	{
		expression = "Пугающая пустота...";
	}
	if(flag_num === undefined)
	{
		console.log(expression);
	}
	else if(flag_num === 1)
	{
		console.warn(expression)
	}
	else if(flag_num === 2)
	{
		console.error(expression)
	}
}
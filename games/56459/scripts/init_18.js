(function($){
    $.fn.offsetRelative = function(top){
        var $this = $(this);
        var $parent = $this.offsetParent();
        var offset = $this.position();
        if(!top) return offset; // Didn't pass a 'top' element 
        else if($parent.get(0).tagName == "BODY") return offset; // Reached top of document
        else if($(top,$parent).length) return offset; // Parent element contains the 'top' element we want the offset to be relative to 
        else if($parent[0] == $(top)[0]) return offset; // Reached the 'top' element we want the offset to be relative to 
        else { // Get parent's relative offset
            var parent_offset = $parent.offsetRelative(top);
            offset.top += parent_offset.top;
            offset.left += parent_offset.left;
            return offset;
        }
    };

    $.fn.positionRelative = function(top){
        return $(this).offsetRelative(top);
    };
}(jQuery));
// техническое ядро
var tech_core = {
    "user_type": 'none',
    "sdk": "",
    "sdk_ready": false,
    "game_loaded": false,
    "ysdk_flags": 0,
    "platform": PLATFORM_TYPE,
    "mouse_down": false,
    "mouse_x": 0,
    "mouse_y": 0,
    "last_interstitial_ad_show": 0,
    "last_interstitial_ad_open": 0,
    "launch_time": Date.now(),
    "tv_data": {
        "cursor_pos": 1,
        "cur_window": "game",
        "strike_block_opened": false,
        "buttons_active": true,
        "last_press_back_time": 0
    },
    "init_sdk": function(success_callback) {
        // инициализция SDK
       if (PLATFORM_TYPE == 'yandex') {
            YaGames
                .init({
                    adv: {
                        onAdvClose: wasShown => {
                            console.info('[yandex] adv closed!');
                        }
                    }
                })
                .then(y_sdk => {
                    y_sdk.getStorage().then(safeStorage => Object.defineProperty(window, 'localStorage', { get: () => safeStorage }))
                    .then(() => {
                       localStorage.setItem('key', '[yandex] safe storage is working');
                       console.log(localStorage.getItem('key'))
                    })
                    tech_core.sdk = y_sdk;
                    tech_core.user_type = y_sdk.deviceInfo.type
                    graph_core.lang = tech_core.sdk.environment.i18n.lang
                    if (['ru', 'en', 'tr'].includes(graph_core.lang) == false) {
                        graph_core.lang = 'en';
                    }
                    if (y_sdk.deviceInfo.type != 'tv') {
                        y_sdk.adv.showFullscreenAdv({
                            callbacks: {
                                onOpen: function() {

                                    tech_core.last_interstitial_ad_open = Date.now();

                                },
                                onClose: function(wasShown) {
                                // some action after close
                                    if (wasShown) {
                                        tech_core.send_ym_report('fullscreen_adv_shown')
                                        tech_core.last_interstitial_ad_show = Date.now();
                                        if (tech_core.last_interstitial_ad_show - tech_core.last_interstitial_ad_open > 3000) {
                                            tech_core.send_ym_report('fullscreen_adv_3_sec')
                                        }
                                    }
                                },
                                onError: function(error) {
                                    // some action on error
                                }
                            }
                        })
                    }
                    if (y_sdk.deviceInfo.type == 'tv') {
                        tech_core.send_ym_report('visit_ya_tv')
                    }
                    console.log(y_sdk.deviceInfo.type)
                    //tech_core.user_type = 'tv'
                    tech_core.set_control(tech_core.user_type)
                    
                    console.log('[yandex] yandex sdk ready')
                    y_sdk.getFlags()
                    .then(flags => {
                        // flags содержит объект с флагами.
                        console.log('[yndx tech_core] flags: ', flags);
                        tech_core.ysdk_flags = flags; 
                        tech_core.sdk_ready = true;
                        success_callback()
                    });
                })
                
        } else if (PLATFORM_TYPE == 'vk') {
            VK.init(function() {
                 // API initialization succeeded
                 // Your code here
                 console.log('[vk] VK SDK inited')
                 tech_core.sdk_ready = true;
                 success_callback()
              }, function() {
                 // API initialization failed
                 // Can reload page here
                 console.log('[vk] VK SDK failed to init')
            }, '5.131');


            var user_id = null;   // user's id
            var app_id = VK_APP_ID;  // your app's id
             
            admanInit({
                user_id: user_id,
                app_id: VK_APP_ID,
                type: 'preloader',         // 'preloader' or 'rewarded' (default - 'preloader')
                params: {preview: 1}   // to verify the correct operation of advertising
            }, onAdsReady, onNoAds);
             
            function onAdsReady(adman) {
              adman.onStarted(function () {});
              adman.onCompleted(function() {});          
              adman.onSkipped(function() {});          
              adman.onClicked(function() {});
              adman.start('preroll');

              vkBridge.send("VKWebAppShowNativeAds", {ad_format:"preloader"})
                .then(data => console.log('[vk]', data.result))
                .catch(error => console.log('[vk]', error));
            };
            function onNoAds() {
                console.log('[vk] no ads')
            };

            // подгружает рекламу
            vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "reward"});
            vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
        } else if (PLATFORM_TYPE == 'sber') {
            var onSuccess = () => {
                tech_core.sdk_ready = true
                success_callback()
                console.log('[sber] AdSdk Inited');
            };
            var onError = (err) => {
                console.error('[sber] AdSDK Init Error', err);
            };
            const token = SBER_APP_TOKEN;
            const initPhrase = 'Запусти ' + SBER_APP_NAME;

            add_inner_script_to_head(`
                  window.assistant.createAssistant({
                         getState: () => {
                                return {};
                         },
                  });
           `);
            
            if (SBER_testing == true) {
                window.SberDevicesAdSDK.initDev({ token: token, initPhrase: initPhrase, onSuccess, onError, test: true });
            } else {
                window.SberDevicesAdSDK.init({onSuccess, onError, test: false})
            }       
        } else if (PLATFORM_TYPE == 'gm') {
            window.SDK_OPTIONS = {
                gameId: GM_APP_ID,
                onEvent: function (a) {
                    switch (a.name) {
                        case "SDK_GAME_PAUSE":
                
                        // pause game logic / mute audio
                        break;
                        case "SDK_GAME_START":
                            
                            // advertisement done, resume game logic and unmute audio
                        break;
                        case "SDK_READY":
                            console.log('[gm] sdk ready')
                            tech_core.sdk_ready = true
                            success_callback()
                            // when sdk is ready
                        break;
                    }
                }     
            };
            (function (a, b, c) {
                var d = a.getElementsByTagName(b)[0];
                a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "https://api.gamemonetize.com/sdk.js", d.parentNode.insertBefore(a, d))
            })(document, "script", "gamemonetize-sdk"); 
        } else if (PLATFORM_TYPE == 'gd') {
            window["GD_OPTIONS"] = {
                "gameId": GD_APP_ID,
                "advertisementSettings": {
                    "debug": GD_AD_DEBUG, // Enable IMA SDK debugging.
                    "autoplay": false, // Don't use this because of browser video autoplay restrictions.
                    "locale": "en", // Locale used in IMA SDK, this will localize the "Skip ad after x seconds" phrases.
                },
                "onEvent": function(event) {
                    switch (event.name) {
                        case "SDK_GAME_START":
                        // advertisement done, resume game logic and unmute audio

                        break;
                        case "SDK_GAME_PAUSE":
                            // pause game logic / mute audio
                            back_music.mute(true)
                            Howler.volume(0);
                            break;
                        case "SDK_GDPR_TRACKING":
                            // this event is triggered when your user doesn't want to be tracked
                            break;
                        case "SDK_GDPR_TARGETING":
                            // this event is triggered when your user doesn't want personalised targeting of ads and such
                            break;
                    }
                },
            };
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://html5.api.gamedistribution.com/main.min.js';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'gamedistribution-jssdk'));
            success_callback()
        }
    },
    
    "get_group": function(film_num) {
        var group;
        for (var i = 1; i <= groups.length; i++) {
            if (groups[i].includes(film_num) == true) {
                group = i
            }
        }
        return group
    },
    "get_answers": function(question_num) {
        var all_answers = questions[question_num]['wrong_answers'][graph_core.lang]
        var right_ans = questions[question_num]['right_answer'][graph_core.lang]


        var answers = get_random_elements(all_answers, 3)
        var right_ans_index = Math.floor(Math.random() * 4)
        answers.splice(right_ans_index, 0, right_ans)

        return answers

    },
    "load_progress": function() {

        if (SHOULD_LOAD_PROGRESS) {
            var data = window.localStorageFallback.getItem(STORAGE_FIELD)

            if (data != null) {
                //game_core.data = data
                game_core.data = JSON.parse(window.localStorageFallback.getItem(STORAGE_FIELD))

            }

            //if (game_core.data.available_questions == undefined || game_core.data.available_questions.length == 0) {
            game_core.data.available_questions = []
            console.log("!!!", game_core.data.available_questions)
            // firstly add question with no misses
            for (var i = 0; i < FILMS_AMOUNT; i++) {
                var question_num;
                if (tech_core.ysdk_flags.SORTED_QUESTIONS == '1') {
                    question_num = Number(sorted_questions[i]);
                } else {
                    question_num = i+1;
                }
                if (game_core.data.history.includes(question_num) == false && game_core.data.mistakes_history.includes(question_num) == false) {
                    game_core.data.available_questions.push(question_num)
                }
            }
            console.log("!!!", game_core.data.available_questions)
            // then with misses
            // firstly add question with no misses
            for (var i = 0; i < FILMS_AMOUNT; i++) {
                var question_num;
                if (tech_core.ysdk_flags.SORTED_QUESTIONS == '1') {
                    question_num = Number(sorted_questions[i]);
                } else {
                    question_num = i+1;
                }
                if (game_core.data.mistakes_history.includes(question_num)) {
                    game_core.data.available_questions.push(question_num)
                }
            }
            console.log("!!!", game_core.data.available_questions)
            //}
        } else {
            game_core.data.available_questions = []
            // firstly add question with no misses
            for (var i = 0; i < FILMS_AMOUNT; i++) {
                var question_num;
                if (tech_core.ysdk_flags.SORTED_QUESTIONS == '1') {
                    question_num = Number(sorted_questions[i]);
                } else {
                    question_num = i+1;
                }
                if (game_core.data.history.includes(question_num) == false && game_core.data.mistakes_history.includes(question_num) == false) {
                    game_core.data.available_questions.push(question_num)
                }
            }

            // then with misses
            // firstly add question with no misses
            for (var i = 0; i < FILMS_AMOUNT; i++) {
                var question_num;
                if (tech_core.ysdk_flags.SORTED_QUESTIONS == '1') {
                    question_num = Number(sorted_questions[i]);
                } else {
                    question_num = i+1;
                }
                if (game_core.data.mistakes_history.includes(question_num)) {
                    game_core.data.available_questions.push(question_num)
                }
            }
        }
        
    },
    "save_progress": function() {
        window.localStorageFallback.setItem(STORAGE_FIELD, JSON.stringify(game_core.data))
    },
    "show_rewarded_video": function(success_callback) {
        tech_core.send_ym_report('rewarded_video_try');
        if (tech_core.platform == 'yandex') {
            tech_core.sdk.adv.showRewardedVideo({
                callbacks: {
                    onOpen: () => {
                        console.log('[yandex] Video ad open.');
                        tech_core.send_ym_report('rewarded_video_open');
                    },
                    onRewarded: () => {
                        console.log('[yandex] Rewarded!');
                        success_callback()
                        tech_core.send_ym_report('rewarded_video_rewarded')
                    },
                    onClose: () => {
                        console.log('[yandex] Video ad closed.');
                    }, 
                    onError: (e) => {
                        console.log('[yandex] Error while open video ad:', e);
                    }
                }
            })
        } else if (tech_core.platform == 'sber') {
             window.SberDevicesAdSDK.runVideoAd({
                onSuccess: function() {
                    success_callback();
                    tech_core.send_ym_report('rewarded_video_rewarded')
                }, 
                onError: function(e) {
                    console.log(e)
                }, 
                mute: false,
            });
        } else if (tech_core.platform == 'vk') {
            
            vkBridge.send("VKWebAppShowNativeAds", {ad_format:"reward"})
            .then(function(data) {
                success_callback()
                tech_core.send_ym_report('rewarded_video_rewarded')
            })
            .catch(error => console.log(error));
            vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "reward", "use_waterfall": true});
        } else if (tech_core.platform == 'gm') {
            if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
                sdk.showBanner();
                success_callback();
            }
        }
    },
    "send_ym_report": function(msg) {
        ym(YM_NUMBER, 'reachGoal', msg)
    },
    "show_interstitial_ad": function() {
        
        if ((Date.now() - tech_core.last_interstitial_ad_show > AD_INTERVAL && Date.now() - tech_core.launch_time > AD_DELAY) || tech_core.ysdk_flags.EXPERIMENT_1 == '1' || tech_core.platform == 'gm') {
            tech_core.send_ym_report('fullscreen_adv_try')
            if (tech_core.platform == 'yandex') {
                tech_core.sdk.adv.showFullscreenAdv({
                    callbacks: {
                        onOpen: function() {

                            tech_core.last_interstitial_ad_open = Date.now();

                        },
                        onClose: function(wasShown) {
                        // some action after close
                            if (wasShown) {
                                tech_core.send_ym_report('fullscreen_adv_shown')
                                tech_core.last_interstitial_ad_show = Date.now();
                                if (tech_core.last_interstitial_ad_show - tech_core.last_interstitial_ad_show > 3000) {
                                    tech_core.send_ym_report('fullscreen_adv_3_sec')
                                }
                            }
                        },
                        onError: function(error) {
                            // some action on error
                        }
                    }
                })
            } else if (tech_core.platform == 'sber') {
                var onSuccess = function() {
                    tech_core.last_interstitial_ad_show = Date.now();
                    tech_core.send_ym_report('fullscreen_adv_shown')
                }
                var onError = function(e) {
                    console.log(e)
                }
                window.SberDevicesAdSDK.runBanner({
                    onSuccess,
                    onError,
                });
            } else if (tech_core.platform == 'vk') {
                vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});

                vkBridge.send("VKWebAppShowNativeAds", {ad_format:"interstitial"})
                    .then(function(data) {
                        tech_core.last_interstitial_ad_show = Date.now();
                        tech_core.send_ym_report('fullscreen_adv_shown')
                    })
                    .catch(error => console.log(error));
            } else if (tech_core.platform == 'gm') {
                if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
                    sdk.showBanner();
                }
            }
        }
    },
    show_interstitial_ad_callback: function(success_callback, fail_callback) {
        if ((Date.now() - tech_core.last_interstitial_ad_show > AD_INTERVAL && Date.now() - tech_core.launch_time > AD_DELAY) || tech_core.ysdk_flags.EXPERIMENT_1 == '1') {
            tech_core.send_ym_report('fullscreen_adv_try')
            if (tech_core.platform == 'yandex') {
                tech_core.sdk.adv.showFullscreenAdv({
                    callbacks: {
                        onOpen: function() {

                            tech_core.last_interstitial_ad_open = Date.now();

                        },
                        onClose: function(wasShown) {
                        // some action after close
                            if (wasShown) {
                                success_callback();
                                tech_core.send_ym_report('fullscreen_adv_shown')
                                tech_core.last_interstitial_ad_show = Date.now();
                                if (tech_core.last_interstitial_ad_show - tech_core.last_interstitial_ad_open > 3000) {
                                    tech_core.send_ym_report('fullscreen_adv_3_sec')
                                }
                                
                            } else {
                                fail_callback();
                            }
                        },
                        onError: function(error) {
                            // some action on error
                           fail_callback();
                        }
                    }
                })
            } else if (tech_core.platform == 'sber') {
                var onSuccess = function() {
                    success_callback();
                    tech_core.last_interstitial_ad_show = Date.now();
                    tech_core.send_ym_report('fullscreen_adv_shown')

                }
                var onError = function(e) {
                    console.log(e);
                    fail_callback();
                }
                window.SberDevicesAdSDK.runBanner({
                    onSuccess,
                    onError,
                });
            } else if (tech_core.platform == 'vk') {
                vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});

                vkBridge.send("VKWebAppShowNativeAds", {ad_format:"interstitial"})
                    .then(function(data) {
                        success_callback();
                        tech_core.last_interstitial_ad_show = Date.now();
                        tech_core.send_ym_report('fullscreen_adv_shown')
                    })
                    .catch(function(error){
                        console.log(error)
                        fail_callback();
                    });
            }
        }
    },
    "open_group": function() {
        
        window.open("https://vk.com/ingenium_games", "_blank");
        return false
    },
    "invite_friend": function() {
        if (tech_core.platform == 'vk') {
            vkBridge.send("VKWebAppShowInviteBox", {})
            .then(function(data) {
                console.log('[vk]', data)
                tech_core.send_ym_report('invite_friend')
            })
            .catch(function(error) {
                console.log('[vk]', error)
            });
        }
    },
    "add_game_to_menu": function() {
        if (tech_core.platform == 'vk') {
            vkBridge.send("VKWebAppAddToFavorites")
            .then(function(data) {
                if (data.type == 'VKWebAppAddToFavoritesResult') {
                    if (data.result) {
                        // чувак добавил в избранное наше приложение
                        tech_core.send_ym_report('add_to_fav')
                    }
                }
            })
        }
    },
    "join_group": function() {
        if (tech_core.platform == 'vk') {
            vkBridge.send("VKWebAppJoinGroup", {"group_id": 212602446})
            .then(function(data) {
                if (data.type == 'VKWebAppJoinGroupResult') {
                    if (data.result) {
                        // чувак успешно вступил в группу
                        tech_core.send_ym_report('joined_group')
                    }
                }
            })
        }
        graph_core.hide_join_group_block();
        game_core.get_next_answer(false);
        game_core.data.joined_group = true
        tech_core.save_progress();
    },
    "send_post": function() {
        if (tech_core.platform == 'vk') {
            
            var message = ''   

            if (game_core.data.streak == 1) {
                message = text.VK_POST_MESSAGE_1[graph_core.lang];
            } else if (game_core.data.streak == 3) {
                message = text.VK_POST_MESSAGE_2[graph_core.lang];
            } else if (game_core.data.streak == 5) {
                message = text.VK_POST_MESSAGE_3[graph_core.lang];
            } else if (game_core.data.streak == 10) {
                message = text.VK_POST_MESSAGE_4[graph_core.lang];
            } else if (game_core.data.streak == 15) {
                message = text.VK_POST_MESSAGE_5[graph_core.lang];
            } else if (game_core.data.streak == 20) {
                message = text.VK_POST_MESSAGE_6[graph_core.lang];
            } else if (game_core.data.streak == 30) {
                message = text.VK_POST_MESSAGE_7[graph_core.lang];
            } else if (game_core.data.streak == 50) {
                message = text.VK_POST_MESSAGE_8[graph_core.lang];
            } else if (game_core.data.streak == WINNER_STREAK) {
                message = text.VK_POST_MESSAGE_9[graph_core.lang];
            }

            vkBridge.send("VKWebAppShowWallPostBox", {
                "message": message,
                "attachments": "https://vk.com/app"+VK_APP_ID
            })
            
        }
    },
    "reset_progress": function() {
        game_core.data = {
            "history": [],
            "mistakes_history": [],
            "lifes": 3,
            "streak": 0,
            "streak_history": ['0'],
            "right_answers": 0,
            "gotten_review": false,
            "joined_group": false,
            "available_questions": [],
        }
        for (var i = 0; i < FILMS_AMOUNT; i++) {
            game_core.data.available_questions.append(i+1)
        }
        tech_core.save_progress();
    },
    "set_control": function(user_type) {
        $('body').mousedown(function(event) {
            tech_core.mouse_down = true
        })

        $('body').mouseup(function(event) {
            tech_core.mouse_down = false
        })

        if (MAKE_SCREEN_ON_X) {
            $( 'body' ).keydown(function( event ) {
                //console.log(event.which)
                if ( event.which == 88 ) {
                    //event.preventDefault();
                    make_screenshot();
                } else if (event.which == 90) {
                    if (graph_core.lang == 'ru') {
                        graph_core.translate('en');
                    } else if (graph_core.lang == 'en') {
                        graph_core.translate('tr')
                    } else if (graph_core.lang == 'tr') {
                        graph_core.translate('ru')
                    }
                }
            })
        }

        if (user_type == 'desktop') {
            $('body').mouseup(function(event) {
                tech_core.mouse_down = false
            })

            $('body').mousemove(function(event) {
                tech_core.mouse_x = event.pageX;
                tech_core.mouse_y = event.pageY;
            })

        
        } else if (user_type == 'mobile') {
        
            $('body').bind('touchstart', function(e) {
                var touches = e.originalEvent.touches || e.originalEvent.changedTouches;
                var touch = touches[touches.length-1]
                var x = touch.pageX;
                var y = touch.pageY;
                tech_core.mouse_x = x;
                tech_core.mouse_y = y;
                tech_core.mouse_down = true;
            })
        

            $("body").bind('touchend', function() {
                tech_core.mouse_down = false
                
            })

            $("body").bind('touchmove', function(e) {
                var touches = e.originalEvent.touches || e.originalEvent.changedTouches;
                var touch = touches[touches.length-1]
                var x = touch.pageX;
                var y = touch.pageY;
                tech_core.mouse_x = x;
                tech_core.mouse_y = y;
                
            })
        } else if (user_type == 'tv') {
            graph_core.tv_update_cursor();
            if (tech_core.platform == 'yandex') {
                window.addEventListener("keydown", function(event) {
                    
                    if (event.code == 'Enter' || event.key == 'Enter') {
                        if (tech_core.tv_data.strike_block_opened) {
                            graph_core.hide_strike_block();
                            game_core.get_next_answer(false);
                        } else if (tech_core.tv_data.cur_window == 'game') {
                            game_core.answer_question(document.getElementById(tech_core.tv_data.cursor_pos))
                        } else if (tech_core.tv_data.cur_window == 'gov_block') {
                            //if (tech_core.tv_data.cursor_pos == 1) {
                                game_core.restart_game();
                            //} else {
                                //game_core.recover_heart();
                            //}
                        } else if (tech_core.tv_data.cur_window == 'winner_block') {
                            if (tech_core.tv_data.cursor_pos == 2) {
                                game_core.restart_game();
                            } else {
                                //alert("1")
                                if (graph_core.lang == 'ru') {
                                    window.open("https://yandex.ru/games/developer?name=Ingenium%20dev&query=quiz","_self")
                                } else {
                                    window.open("https://yandex.com/games/developer?name=Ingenium%20dev&query=quiz","_self")
                                }
                            }
                        } else if (tech_core.tv_data.cur_window == 'exit_block') {
                            if (tech_core.tv_data.cursor_pos == 1) {
                                graph_core.hide_exit_block();
                            } else {
                                game_core.exit_game();
                            }
                        }
                    } else if (['ArrowLeft', "ArrowRight", "ArrowUp","ArrowDown"].includes(event.key) == true && tech_core.tv_data.buttons_active) {
                        if (tech_core.tv_data.cur_window == 'game') {
                            tech_core.tv_data.cursor_pos = tv_moves[tech_core.tv_data.cur_window][tech_core.tv_data.cursor_pos][event.key]
                            graph_core.tv_update_cursor();
                        } else if (tech_core.tv_data.cur_window == 'gov_block' || tech_core.tv_data.cur_window == 'winner_block' || tech_core.tv_data.cur_window == 'exit_block') {
                            if (tech_core.tv_data.cursor_pos == 1) {
                                tech_core.tv_data.cursor_pos = 2
                            } else {
                                tech_core.tv_data.cursor_pos = 1
                            }
                            graph_core.tv_update_cursor();
                        }
                    }
                      
                })

                tech_core.sdk.onEvent(tech_core.sdk.EVENTS.HISTORY_BACK, () => {
                    if (Date.now() - tech_core.tv_data.last_press_back_time < 300) {
                        graph_core.show_exit_block();
                    }
                    tech_core.tv_data.last_press_back_time = Date.now()
                });
            }
        }
    }
}

// графическое ядро
var graph_core = {
    "winW": 0,
    "winH": 0,
    "user_type": 'none',
    "lang": DEFAULT_LANG,
    "resize_screen": function() {},
    "cur_gob_block_type": "none",
    "translate": function(lang = this.lang) {
        document.title = text.title[lang]

        for (var selector in html_elements_text) {
            $('#'+selector).text(text[lang])
        }

        for (var id in my_html_elements_text) {
            graph_core.all_html_blocks[id].options.text = my_html_elements_text[id][lang]
        }


        graph_core.lang = lang;

        // translate cur question
        console.log(game_core.data.history)
        if (game_core.data.history.length > 0) {
            graph_core.update_step_text()
            game_core.create_question(game_core.data.history[game_core.data.history.length-1], true)
        }
        if (graph_core.cur_gob_block_type == "game_over") {
            graph_core.update_game_over_block();
        }
        if (graph_core.cur_gob_block_type == "join_group") {
            graph_core.update_join_group_block();
        }
        if (graph_core.cur_gob_block_type == "get_review") {
            graph_core.update_get_review_block();
        }
        if (graph_core.cur_gob_block_type == "exit") {
            graph_core.update_exit_block();
        }
        if (graph_core.cur_gob_block_type == "winner") {
            graph_core.update_winner_block();

        }
        graph_core.update_strike_block()
        
        graph_core.resize_screen();
    },
    "all_html_blocks": {},
    "open_game_viewport": function() {
        //$('#game_viewport').css('display', 'block')
        $('#game_viewport').fadeIn(ANIMATION*1000)
    },
    "change_frame": function(question_num) {
        var question = questions[String(question_num)];
        var question_text = question.question[graph_core.lang];

        var winW = graph_core.winW;
        var winH = graph_core.winH;
        var ratio = winW / winH

        if (question.type == 2) {
            if (graph_core.user_type == 'mobile' || ratio <= 0.6 ) {
                $("#gv_frame_block").css('display', "block");
                $('#gv_frame_block_2').css('background', "url('images/quadro.png')");
                $("#gv_frame_block").css('background', 'url("images/50-80_jpg/'+question_num+'.jpg")');
                $("#gv_frame_block").css('z-index', 2);
            } else if (graph_core.user_type == 'pc' && ratio >= 0.6) {
                $("#gv_frame_block_2").css('background', 'url("images/50-80_jpg/'+question_num+'.jpg")');
                $("#gv_frame_block").css('z-index', 0);
            }
            $('#gv_title_block center').text(question_text)
            $('#gv_fb2_text').text('')
        } else if (question.type == 1) {
            $("#gv_frame_block").css('display', "none");
            var img_num = Math.floor(Math.random() * 15) + 1; 
           
            if (graph_core.user_type == 'pc' && ratio >= 0.6) {
                $('#gv_frame_block_2').css('background', "url('images/lotr.png')");

            } else if (graph_core.user_type == 'mobile' || ratio <= 0.6) {
                $('#gv_frame_block_2').css('background', "url('images/quadro.png')");
            }
            
            $('#gv_title_block center').text(text.gv_title_block[graph_core.lang])
            $('#gv_fb2_text').text(question_text)
        }
        $("#gv_frame_block").css('background-position', "center");
        $("#gv_frame_block_2").css('background-position', "center");

        $("#gv_frame_block").css('background-size', "101%");
        $("#gv_frame_block_2").css('background-size', "101%");
        
    },
    "update_buttons": function(answers) {
        $('.gv_bb_button_red').attr('class', 'gv_bb_button')
        $('.gv_bb_button_green').attr('class', 'gv_bb_button')
        //$('.gv_bb_button').css('background', 'url("images/Button_off.png")')
        //$('.gv_bb_button').css('background-size', '100%')

        //$('.gv_bb_button:hover').css('background', 'url("images/Button_on.png")')
        //$('.gv_bb_button:hover').css('background-size', '100%')

        $('#button_1 .gv_bb_button_text').text(answers[0])
        $('#button_2 .gv_bb_button_text').text(answers[1])
        $('#button_3 .gv_bb_button_text').text(answers[2])
        $('#button_4 .gv_bb_button_text').text(answers[3])

        $('.gv_bb_button_text').css('font-size', get_size('.gv_bb_button').y*0.27)
    },
    "reset_buttons": function() {
        $('.gv_bb_button_red').attr('class', 'gv_bb_button')
        $('.gv_bb_button_green').attr('class', 'gv_bb_button')

        if (tech_core.user_type == 'tv') {
            $('.gv_bb_button_hover').attr('class', 'gv_bb_button')
        }

        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };

        if (isMobile.any() != null) {
            $('.gv_bb_button').attr('class', 'gv_bb_button nohover')
            $('.gv_gob_button').attr('class', 'gv_gob_button nohover')
        }

        if (tech_core.user_type == 'tv') {
            tech_core.tv_data.cursor_pos = 1;
            graph_core.tv_update_cursor();
        }
    },
    "update_step_text": function() {
        var step = game_core.data.history.length-1;

        //$('#gv_tb_left_block_span').text((step+1) + ' '+ text['gv_tb_left_block_span'][graph_core.lang] + ' 99')
        $('#gv_tb_left_block_span').text(text.gv_tb_left_block_span[graph_core.lang] + ' '+ (step+1))
    },
    "update_progress_bar": function(type) {
        if (type == 1) {
            var full_step_h = get_size('#gv_left_block').y * (512/754);

            var step_h = full_step_h / FILMS_AMOUNT;

            set_size('#gv_left_block_progress_hider2', get_size('#gv_left_block').x, full_step_h - step_h*game_core.data.streak )
        } else if (type == 2) {
            
            var full_step_h = 88.6/850 * get_size('#gv_left_block').y;
            var circle_h = 29/850 * get_size('#gv_left_block').y;
            var margin = 20/850 * get_size('#gv_left_block').y;
            if (game_core.data.streak == 0) {
                set_size('#gv_left_block_progress_hider', 'none', get_size('#gv_left_block').y - margin)
            } else if (game_core.data.streak == 1) {
                set_size('#gv_left_block_progress_hider', 'none', get_size('#gv_left_block').y - margin - circle_h)
            } else if (game_core.data.streak > 1 && game_core.data.streak <= 3) {
                var cur_step_h = ((game_core.data.streak - 1) / (3-1)) * full_step_h
                set_size('#gv_left_block_progress_hider', 'none', get_size('#gv_left_block').y - margin - circle_h - cur_step_h)
            } else if (game_core.data.streak > 3 && game_core.data.streak <= 5) {
                var cur_step_h = ((game_core.data.streak - 3) / (5-3)) * full_step_h
                set_size('#gv_left_block_progress_hider', 'none', get_size('#gv_left_block').y - margin - circle_h - full_step_h - cur_step_h)
            } else if (game_core.data.streak > 5 && game_core.data.streak <= 10) {
                var cur_step_h = ((game_core.data.streak - 5) / (10-5)) * full_step_h
                set_size('#gv_left_block_progress_hider', 'none', get_size('#gv_left_block').y - margin - circle_h - full_step_h*2 - cur_step_h)
            } else if (game_core.data.streak > 10 && game_core.data.streak <= 15) {
                var cur_step_h = ((game_core.data.streak - 10) / (15-10)) * full_step_h
                set_size('#gv_left_block_progress_hider', 'none', get_size('#gv_left_block').y - margin - circle_h - full_step_h*3 - cur_step_h)
            } else if (game_core.data.streak > 15 && game_core.data.streak <= 20) {
                var cur_step_h = ((game_core.data.streak - 15) / (20-15)) * full_step_h
                set_size('#gv_left_block_progress_hider', 'none', get_size('#gv_left_block').y - margin - circle_h - full_step_h*4 - cur_step_h)
            } else if (game_core.data.streak > 20 && game_core.data.streak <= 35) {
                var cur_step_h = ((game_core.data.streak - 20) / (35-20)) * full_step_h
                set_size('#gv_left_block_progress_hider', 'none', get_size('#gv_left_block').y - margin - circle_h - full_step_h*5 - cur_step_h)
            } else if (game_core.data.streak > 35 && game_core.data.streak <= 50) {
                var cur_step_h = ((game_core.data.streak - 35) / (50-35)) * full_step_h
                set_size('#gv_left_block_progress_hider', 'none', get_size('#gv_left_block').y - margin - circle_h - full_step_h*6 - cur_step_h)
            } else if (game_core.data.streak > 50 && game_core.data.streak <= 101) {
                var cur_step_h = ((game_core.data.streak - 50) / (101-50)) * full_step_h
                set_size('#gv_left_block_progress_hider', 'none', get_size('#gv_left_block').y - margin - circle_h - full_step_h*7 - cur_step_h)
            }        
        }
    },
    "destroy_heart": function() {
        var id = '#heart_' + (3-game_core.data.lifes)
        $(id).attr('src', 'images/heart_off.png')
    },
    "recover_heart": function() {
        var id = '#heart_' + (4-game_core.data.lifes)
        $(id).attr('src', 'images/heart_on.png')
    },
    "update_hearts": function() {
        if (game_core.data.lifes == 2) {
            $('#heart_1').attr('src', 'images/heart_off.png')
        } else if (game_core.data.lifes == 1) {
            $('#heart_1').attr('src', 'images/heart_off.png')
            $('#heart_2').attr('src', 'images/heart_off.png')
        } else if (game_core.data.lifes == 0) {
            $('#heart_1').attr('src', 'images/heart_off.png')
            $('#heart_2').attr('src', 'images/heart_off.png')
            $('#heart_3').attr('src', 'images/heart_off.png')
            
        }
    },
    "make_button_green": function(id) {
        var btn_id = '#button_' + id;

        $(btn_id).attr('class', 'gv_bb_button_green')

        //$(btn_id).css('background', 'url("images/Button_yes.png")')
        //$(btn_id).css('background-size', '100%')
    },
    "make_button_red": function(id) {
        var btn_id = '#button_' + id;

        $(btn_id).attr('class', 'gv_bb_button_red')
        
    },
    "update_streak_counter": function() {
        $('#gv_lb_strike_counter').text(game_core.data.streak)
    },
    "show_strike_block": function() {
        

        
        if (game_core.data.streak == 1) {
            tech_core.send_ym_report('1_answer')
            $('#gv_gob_pic').css('background', 'url("images/card_1.png")')
        } else if (game_core.data.streak == 3) {
            tech_core.send_ym_report('3_answers')
            $('#gv_gob_pic').css('background', 'url("images/card_2.png")')
        } else if (game_core.data.streak == 5) {
            tech_core.send_ym_report('5_answers')
            $('#gv_gob_pic').css('background', 'url("images/card_3.png")')
        } else if (game_core.data.streak == 10) {
            tech_core.send_ym_report('10_answers')
            $('#gv_gob_pic').css('background', 'url("images/card_4.png")')
        } else if (game_core.data.streak == 15) {
            tech_core.send_ym_report('15_answers')
            $('#gv_gob_pic').css('background', 'url("images/card_5.png")')
        } else if (game_core.data.streak == 20) {
            tech_core.send_ym_report('20_answers')
            $('#gv_gob_pic').css('background', 'url("images/card_6.png")')
        } else if (game_core.data.streak == 30) {
            tech_core.send_ym_report('30_answers')
            $('#gv_gob_pic').css('background', 'url("images/card_7.png")')
        } else if (game_core.data.streak == 50) {
            tech_core.send_ym_report('50_answers')
            $('#gv_gob_pic').css('background', 'url("images/card_8.png")')
        } else if (game_core.data.streak == FILMS_AMOUNT) {
            tech_core.send_ym_report('99_answers')
            $('#gv_gob_pic').css('background', 'url("images/card_9.png")')
        }
        $('#gv_gob_pic').css('background-size', '100%')

        if (tech_core.user_type == 'tv') {
            tech_core.tv_data.strike_block_opened = true
            $('#tv_text').css('display', 'block')
        }

        if (tech_core.platform != 'vk') {
            $('#gv_strike_block_back').fadeIn(ANIMATION*1000)
        } else {
            $('#gv_gob_pic_result').css('display', 'none')
        
        
            $('#gv_gob_button_1_hp').attr('id', 'gv_gob_button_1')


            $('#link_to_group').css('display', 'none')
            $('#gv_gob_button_1 .gv_gob_button_text').css('display', 'table-cell')

            $('#gv_gob_button_1 .gv_gob_button_text').text('Поделиться на странице')
            $('#gv_gob_button_1 .gv_gob_button_text').attr('onclick', "tech_core.send_post();graph_core.hide_strike_block();game_core.get_next_answer(false);")         

            $('#gv_gob_button_2 .gv_gob_button_text').text('Дальше')
            $('#gv_gob_button_2 .gv_gob_button_text').attr('onclick', "graph_core.hide_strike_block();game_core.get_next_answer(false);")   

            $('#gv_gob_button_1').attr('id', 'gv_gob_button_1_hp')

            $('#gv_game_over_block_back').fadeIn(ANIMATION*1000)

        }


    },
    "hide_strike_block": function() {
        //$('#gv_strike_block_back').fadeOut(ANIMATION*1000)
        $('#gv_strike_block_back').css('display', 'none')
        if (tech_core.platform == 'vk') {
            $('#gv_game_over_block_back').css('display', 'none')
        }

        if (tech_core.user_type == 'tv') {
            tech_core.tv_data.strike_block_opened = false
        }
    },
    "update_strike_block": function() {
        if (game_core.data.streak == 1) {
            $('#gv_strike_block').css('background', 'url("images/card_1.jpg")')
        } else if (game_core.data.streak == 3) {
            $('#gv_strike_block').css('background', 'url("images/card_2.jpg")')
        } else if (game_core.data.streak == 5) {
            $('#gv_strike_block').css('background', 'url("images/card_3.jpg")')
        } else if (game_core.data.streak == 10) {
            $('#gv_strike_block').css('background', 'url("images/card_4.jpg")')
        } else if (game_core.data.streak == 15) {
            $('#gv_strike_block').css('background', 'url("images/card_5.jpg")')
        } else if (game_core.data.streak == 20) {
            $('#gv_strike_block').css('background', 'url("images/card_6.jpg")')
        } else if (game_core.data.streak == 30) {
            $('#gv_strike_block').css('background', 'url("images/card_7.jpg")')
        } else if (game_core.data.streak == 50) {
            $('#gv_strike_block').css('background', 'url("images/card_8.jpg")')
        } else if (game_core.data.streak == 99) {
            $('#gv_strike_block').css('background', 'url("images/card_9.jpg")')
        }
        $('#gv_strike_block').css('background-position', 'center')
        $('#gv_strike_block').css('background-size', '101%')
        var radius = get_size('#gv_strike_block').x * 0.04;
        $('#gv_strike_block').css('border-radius', radius+'px')
        /*
        console.log(strike_block_texts, game_core.data.streak)
        
        var font_size = Math.min(get_size('#gv_strike_block_text').y, get_size('#gv_strike_block_text').x / (strike_block_texts[String(game_core.data.streak)][graph_core.lang]).length * 1.5)
        $('#gv_strike_block_text').css('font-size', font_size + 'px')
        */
        if (strike_block_texts[String(game_core.data.streak)] != undefined) {
            graph_core.all_html_blocks['gv_strike_block_text2'].options.text = strike_block_texts[String(game_core.data.streak)][graph_core.lang]
        }
        gv_strike_block_back.recalculate();

    },
    "update_game_over_block": function() {
        var html_result = ``

        html_result += text.gv_gob_pic_result_1[graph_core.lang];
        html_result += game_core.data.right_answers;
        html_result += '<br>'
        html_result += text.gv_gob_pic_result_2[graph_core.lang]

        //if ([1,3,5,10,15,20,35,50,70].includes(game_core.data.streak)) {
            html_result += rangs[String(game_core.data.cur_streak_point)][graph_core.lang]

        //}

        $('#gv_gob_button_1 .gv_gob_button_text').text(text.gv_gob_button_1_text[graph_core.lang])
        $('#gv_gob_button_2 .gv_gob_button_text').text(text.gv_gob_button_2_text[graph_core.lang])
        $('#gv_gob_pic_result').html(html_result)

        $('#gv_gob_pic').css('background', 'url("images/card_10.jpg")')
        $('#gv_gob_pic').css('background-size', '100%')

        $('#gv_gob_pic_result').css('display', 'block')
        
       
        
        $('#gv_gob_button_1_hp').attr('id', 'gv_gob_button_1')

        $('#link_to_group').css('display', 'none')
        $('#gv_gob_button_1 .gv_gob_button_text').css('display', 'table-cell')

        $('#gv_gob_button_1 .gv_gob_button_text').text(text.gv_gob_button_1_text[graph_core.lang])
        $('#gv_gob_button_1 .gv_gob_button_text').attr('onclick', "game_core.restart_game();")

        $('#gv_gob_button_2 .gv_gob_button_text').text(text.gv_gob_button_2_text[graph_core.lang])
        $('#gv_gob_button_2 .gv_gob_button_text').attr('onclick', "game_core.recover_heart();")

        if (tech_core.user_type == 'tv') {
             $('.gv_gob_button').css('display', 'none')
            tech_core.tv_data.cur_window = 'gov_block'
            tech_core.tv_data.cursor_pos = 1;
            tech_core.tv_data.buttons_active = true
            graph_core.tv_update_cursor();


            $('#gv_gob_button_1, #gv_gob_button_2').css('display', 'none')
            $('#gv_gov_tv_text').css('display', 'block')

        }

        // новые разделы

        $('#gv_gob_pic_exit_block_title').css('display', 'none')
        $('#gv_gob_pic_join_block_title').css('display', 'none')

        $('#gv_gob_pic_join_block_text1').css('display', 'none')

        $('#gv_gob_pic_review_block_title').css('display', 'none');
        $('#gv_gob_pic_review_block_text1').css('display', 'none');
        $('#gv_gob_pic_review_block_text2').css('display', 'none');

        $('#gv_gob_pic_go_title').css('display', 'none');

        $('#gv_gob_pic_winner_block_title').css('display', 'none');
        $('#gv_gob_pic_winner_block_text1').css('display', 'none');
        $('#gv_gob_pic_winner_block_text2').css('display', 'none');


        $('#gv_gob_pic_go_title').css('display', 'block');
        gv_game_over_block_back.recalculate();
    },
    "show_game_over_block": function() {
        graph_core.cur_gob_block_type = "game_over";
        graph_core.update_game_over_block();
        $('#gv_game_over_block_back').fadeIn(1000*ANIMATION)

    },
    "hide_game_over_block": function() {
        graph_core.cur_gob_block_type = "none";
        $('#gv_game_over_block_back').fadeOut(ANIMATION*1000)
    },
    "update_winner_block": function() {
        $('#gv_gob_button_1').attr('id', 'gv_gob_button_1_hp')
        tech_core.tv_data.cur_window = 'winner_block'
        

        $('#gv_gob_pic').css('background', 'url("images/card11.jpg")')
        $('#gv_gob_pic').css('background-size', '100%')

        $('#gv_gob_pic_result').css('display', 'none')

        $('#link_to_group').text(text.link_to_group_other_quizes[graph_core.lang]);
        if (graph_core.lang == 'ru') {
            $('#link_to_group').attr('href', 'https://yandex.ru/games/developer?name=Ingenium%20dev&query=quiz');
        } else {
            $('#link_to_group').attr('href', 'https://yandex.com/games/developer?name=Ingenium%20dev&query=quiz');
        }
        $('#link_to_group').css('display', 'table-cell')

        $('#gv_gob_button_1_hp .gv_gob_button_text').css('display', 'none')

        

        $('#gv_gob_button_1_hp .gv_gob_button_text').text(text.gv_winner_button_1_text[graph_core.lang])
        $('#gv_gob_button_1_hp .gv_gob_button_text').attr('onclick', "game_core.go_to_hp_quiz();")

        $('#gv_gob_button_2 .gv_gob_button_text').text(text.gv_winner_button_2_text[graph_core.lang])
        $('#gv_gob_button_2 .gv_gob_button_text').attr('onclick', "game_core.restart_game();")

        if (tech_core.user_type == 'tv') {
            tech_core.tv_data.cur_window = 'winner_block'
            tech_core.tv_data.buttons_active = true
            tech_core.tv_data.cursor_pos = 1
            graph_core.tv_update_cursor();
        }

        $('#gv_gob_pic_exit_block_title').css('display', 'none')
        $('#gv_gob_pic_join_block_title').css('display', 'none')

        $('#gv_gob_pic_join_block_text1').css('display', 'none')

        $('#gv_gob_pic_review_block_title').css('display', 'none');
        $('#gv_gob_pic_review_block_text1').css('display', 'none');
        $('#gv_gob_pic_review_block_text2').css('display', 'none');

        $('#gv_gob_pic_go_title').css('display', 'none');

        $('#gv_gob_pic_winner_block_title').css('display', 'block');
        $('#gv_gob_pic_winner_block_text1').css('display', 'block');
        $('#gv_gob_pic_winner_block_text2').css('display', 'block');

        gv_game_over_block_back.recalculate();
    },
    "show_winner_block": function() {
        graph_core.cur_gob_block_type = "winner";
        graph_core.update_winner_block();
        $('#gv_game_over_block_back').fadeIn(ANIMATION*1000)
    },
    "hide_winner_block": function() {
        graph_core.cur_gob_block_type = "none";
        $('#gv_game_over_block_back').fadeOut(ANIMATION*1000)
    },
    "try_to_show_get_review_block": function() {
        if (tech_core.platform == 'yandex') {
            tech_core.sdk.feedback.canReview()
            .then(({ value, reason }) => {
                if (value) {
                    graph_core.show_get_review_block();
                    /*tech_core.sdk.feedback.requestReview()
                    .then(({ feedbackSent }) => {
                        console.log(feedbackSent);
                        graph_core.hide_get_review_block();
                        
                    })
                    */
                } else {
                    // we cant show get review block
                    console.log(reason)
                    // moving on
                    game_core.get_next_answer();
                }
            })
        } else {
            graph_core.show_get_review_block();
        }
    },
    "update_get_review_block": function() {
        $('#gv_gob_pic_result').css('display', 'none')
        $('#gv_gob_button_1_hp').attr('id', 'gv_gob_button_1')

        if (tech_core.platform == 'vk') {
            $('#gv_gob_button_1 .gv_gob_button_text').text(text.join_group_btn_text[graph_core.lang])
            $('#gv_gob_button_2 .gv_gob_button_text').text(text.join_group_later_btn_text[graph_core.lang])
            $('#gv_gob_pic').css('background', 'url("images/card13.jpg")')
        } else {
            $('#gv_gob_button_1 .gv_gob_button_text').text(text.gv_get_review_button_1_text[graph_core.lang])
            $('#gv_gob_button_2 .gv_gob_button_text').text(text.gv_get_review_button_2_text[graph_core.lang])
            $('#gv_gob_pic').css('background', 'url("images/card12.jpg")')


            $('#gv_gob_pic_exit_block_title').css('display', 'none')
            $('#gv_gob_pic_join_block_title').css('display', 'none')

            $('#gv_gob_pic_join_block_text1').css('display', 'none')

            $('#gv_gob_pic_review_block_title').css('display', 'none');
            $('#gv_gob_pic_review_block_text1').css('display', 'none');
            $('#gv_gob_pic_review_block_text2').css('display', 'none');

            $('#gv_gob_pic_go_title').css('display', 'none');

            $('#gv_gob_pic_winner_block_title').css('display', 'none');
            $('#gv_gob_pic_winner_block_text1').css('display', 'none');
            $('#gv_gob_pic_winner_block_text2').css('display', 'none');

            $('#gv_gob_pic_review_block_title').css('display', 'block');
            $('#gv_gob_pic_review_block_text1').css('display', 'block');
            $('#gv_gob_pic_review_block_text2').css('display', 'block');
            

        }

        $('#link_to_group').css('display', 'none')
        $('#gv_gob_button_1 .gv_gob_button_text').css('display', 'table-cell')

        $('#gv_gob_pic').css('background-size', '100%')
        
        $('#gv_gob_button_1 .gv_gob_button_text').attr('onclick', "game_core.get_review();graph_core.hide_get_review_block();")

        $('#gv_gob_button_1').attr('id', 'gv_gob_button_1_hp')

        $('#gv_gob_button_2 .gv_gob_button_text').text(text.gv_get_review_button_2_text[graph_core.lang])
        $('#gv_gob_button_2 .gv_gob_button_text').attr('onclick', "graph_core.hide_get_review_block();game_core.get_next_answer(false);")
        gv_game_over_block_back.recalculate();

    },
    "show_get_review_block": function() {
        tech_core.send_ym_report('view_group_block')
        if (game_core.data.lifes > 0) {
            graph_core.cur_gob_block_type = "get_review";
            graph_core.update_get_review_block();
            $('#gv_game_over_block_back').fadeIn(ANIMATION*1000)
        }
    },
    "hide_get_review_block": function() {
        graph_core.cur_gob_block_type = "none";
        $('#gv_game_over_block_back').css('display', 'none')
    },
    "update_join_group_block": function() {
        $('#gv_gob_pic_result').css('display', 'none')

        $('#gv_gob_button_1_hp').attr('id', 'gv_gob_button_1')


        $('#gv_gob_button_1 .gv_gob_button_text').text(text.join_group_btn_text[graph_core.lang])
        $('#gv_gob_button_2 .gv_gob_button_text').text(text.join_group_later_btn_text[graph_core.lang])
        $('#gv_gob_pic').css('background', 'url("images/card13.jpg")')
        

        $('#gv_gob_pic').css('background-size', '100%')
            

        if (tech_core.platform == 'vk') {
            $('#gv_gob_button_1 .gv_gob_button_text').css('display', 'table-cell')
            $('#gv_gob_button_1 .gv_gob_button_text').attr('onclick', "tech_core.join_group();")
        } else {
            $('#link_to_group').attr('href', 'https://vk.com/ingenium_games');
            $('#link_to_group').text(text.join_group_link_text[graph_core.lang])
            $('#link_to_group').css('display', 'table-cell')
            $('#gv_gob_button_1 .gv_gob_button_text').css('display', 'none')
        }
        
        $('#gv_gob_button_1').attr('id', 'gv_gob_button_1_hp')

        //$('#gv_gob_button_2 .gv_gob_button_text').text(text.gv_get_review_button_2_text[graph_core.lang])
        $('#gv_gob_button_2 .gv_gob_button_text').attr('onclick', "graph_core.hide_join_group_block();game_core.get_next_answer(false);")

        $('#gv_gob_pic_exit_block_title').css('display', 'none')
        $('#gv_gob_pic_join_block_title').css('display', 'none')

        $('#gv_gob_pic_join_block_text1').css('display', 'none')

        $('#gv_gob_pic_review_block_title').css('display', 'none');
        $('#gv_gob_pic_review_block_text1').css('display', 'none');
        $('#gv_gob_pic_review_block_text2').css('display', 'none');

        $('#gv_gob_pic_go_title').css('display', 'none');

        $('#gv_gob_pic_winner_block_title').css('display', 'none');
        $('#gv_gob_pic_winner_block_text1').css('display', 'none');
        $('#gv_gob_pic_winner_block_text2').css('display', 'none');

        $('#gv_gob_pic_join_block_title').css('display', 'block')
        $('#gv_gob_pic_join_block_text1').css('display', 'block')

        gv_game_over_block_back.recalculate()
    },
    "show_join_group_block": function() {
        if (game_core.data.lifes > 0) {
            graph_core.cur_gob_block_type = "join_group";
            graph_core.update_join_group_block();
            $('#gv_game_over_block_back').fadeIn(ANIMATION*1000)
        }
    },  
    "hide_join_group_block": function() {
        graph_core.cur_gob_block_type = "none";
        $('#gv_game_over_block_back').css('display', 'none')
    },
    "recover_all_hearts": function() {
        $('#heart_1').attr('src', 'images/heart_on.png');
        $('#heart_2').attr('src', 'images/heart_on.png');
        $('#heart_3').attr('src', 'images/heart_on.png');
    },
    "deactivate_buttons": function() {
        $('.gv_bb_button_text').attr('onclick', '')
        if (tech_core.user_type == 'tv') {
            tech_core.tv_data.buttons_active = false
        }
    },
    "activate_buttons": function() {
        $('.gv_bb_button_text').attr('onclick', 'game_core.answer_question(this);')
        if (tech_core.user_type == 'tv') {
            tech_core.tv_data.buttons_active = true
        }
    },
    "tv_update_cursor": function() {
        for (var i = 1; i <= 4; i++) {
            var el = document.getElementById('button_'+(i))
            el.classList.remove('gv_bb_button_hover')
            el.classList.add('gv_bb_button')
        }
       
        
        for (var i = 2; i <= 2; i++) {
            var el = document.getElementById('gv_gob_button_'+(i))
            el.classList.remove('gv_gob_button_hover')
            el.classList.add('gv_gob_button')
        }
        
        $('#gv_gob_button_1_hp_hover').attr('id', 'gv_gob_button_1_hp')
        if (tech_core.tv_data.cur_window == 'game') {

            


            var cursor_id = '#button_' + tech_core.tv_data.cursor_pos;
            $(cursor_id).attr('class', 'gv_bb_button_hover')
        } else if (tech_core.tv_data.cur_window == 'gov_block') {
            


            var cursor_id = '#gv_gob_button_' + tech_core.tv_data.cursor_pos;
            $(cursor_id).attr('class', 'gv_gob_button_hover')
        } else if (tech_core.tv_data.cur_window == 'winner_block' || tech_core.tv_data.cur_window == 'exit_block') {
            //$('#gv_gob_button_1').css('background-image', 'url("images/Button_hp.png")')
            //$('#gv_gob_button_2').css('background-image', 'url("images/Button_off.png")')
            $('#gv_gob_button_1_hp_hover').attr('id', 'gv_gob_button_1_hp')

            for (var i = 2; i <= 2; i++) {
                var el = document.getElementById('gv_gob_button_'+(i))
                el.classList.remove('gv_gob_button_hover')
                el.classList.add('gv_gob_button')
            }

            if (tech_core.tv_data.cursor_pos == 1) {
                $('#gv_gob_button_1_hp').attr('id', 'gv_gob_button_1_hp_hover')
                
            } else {
                $('#gv_gob_button_1_hp_hover').attr('id', 'gv_gob_button_1_hp')
                var el = document.getElementById('gv_gob_button_'+(tech_core.tv_data.cursor_pos))
                el.classList.remove('gv_gob_button')
                el.classList.add('gv_gob_button_hover')
            }
        }

        for (var i = 1; i <= 4; i++) {
            var el = document.getElementById('button_'+(i))
            el.classList.remove('gv_bb_button_hover')
            el.classList.add('gv_bb_button')
        }
       
        
        for (var i = 2; i <= 2; i++) {
            var el = document.getElementById('gv_gob_button_'+(i))
            el.classList.remove('gv_gob_button_hover')
            el.classList.add('gv_gob_button')
        }
        
        $('#gv_gob_button_1_hp_hover').attr('id', 'gv_gob_button_1_hp')
        if (tech_core.tv_data.cur_window == 'game') {

            


            var cursor_id = '#button_' + tech_core.tv_data.cursor_pos;
            $(cursor_id).attr('class', 'gv_bb_button_hover')
        } else if (tech_core.tv_data.cur_window == 'gov_block') {
            


            var cursor_id = '#gv_gob_button_' + tech_core.tv_data.cursor_pos;
            $(cursor_id).attr('class', 'gv_gob_button_hover')
        } else if (tech_core.tv_data.cur_window == 'winner_block' || tech_core.tv_data.cur_window == 'exit_block') {
            //$('#gv_gob_button_1').css('background-image', 'url("images/Button_hp.png")')
            //$('#gv_gob_button_2').css('background-image', 'url("images/Button_off.png")')
            $('#gv_gob_button_1_hp_hover').attr('id', 'gv_gob_button_1_hp')

            for (var i = 2; i <= 2; i++) {
                var el = document.getElementById('gv_gob_button_'+(i))
                el.classList.remove('gv_gob_button_hover')
                el.classList.add('gv_gob_button')
            }

            if (tech_core.tv_data.cursor_pos == 1) {
                $('#gv_gob_button_1_hp').attr('id', 'gv_gob_button_1_hp_hover')
                
            } else {
                $('#gv_gob_button_1_hp_hover').attr('id', 'gv_gob_button_1_hp')
                var el = document.getElementById('gv_gob_button_'+(tech_core.tv_data.cursor_pos))
                el.classList.remove('gv_gob_button')
                el.classList.add('gv_gob_button_hover')
            }
        }
    },
    "update_exit_block": function() {
        $('#gv_gob_button_1').attr('id', 'gv_gob_button_1_hp')
        $('#gv_gob_button_1_hp_hover').attr('id', 'gv_gob_button_1_hp')


        $('#gv_gov_tv_text').css('display', 'none')
        $('#gv_gob_pic_result').css('display', 'none')

        $('.gv_gob_button').css('display', 'block')
        $('#gv_gob_button_1_hp').css('display', 'block')

        $('#gv_gob_button_1_hp .gv_gob_button_text').text(text.gv_gob_button_1_hp_btn1[graph_core.lang])
        $('#gv_gob_button_2 .gv_gob_button_text').text(text.gv_gob_button_1_hp_btn2[graph_core.lang])
        $('#gv_gob_pic').css('background', 'url("images/card14.jpg")')
        

        $('#gv_gob_pic').css('background-size', '100%')

        
        $('#link_to_group').css('display', 'none')

        $('#gv_gob_button_1 .gv_gob_button_text .gv_gob_button').css('display', 'table-cell')


        $('#gv_gob_pic').css('background-size', '100%')
        
        $('#gv_gob_button_1 .gv_gob_button_text').attr('onclick', "graph_core.hide_exit_block();")
        $('#gv_gob_button_2 .gv_gob_button_text').attr('onclick', "game_core.exit_game();")

        if (tech_core.user_type == 'tv') {
            tech_core.tv_data.cur_window = 'exit_block'
            tech_core.tv_data.buttons_active = true
            tech_core.tv_data.cursor_pos = 1
            graph_core.tv_update_cursor();
        }

        $('#gv_gob_pic_exit_block_title').css('display', 'none')
        $('#gv_gob_pic_join_block_title').css('display', 'none')

        $('#gv_gob_pic_join_block_text1').css('display', 'none')

        $('#gv_gob_pic_review_block_title').css('display', 'none');
        $('#gv_gob_pic_review_block_text1').css('display', 'none');
        $('#gv_gob_pic_review_block_text2').css('display', 'none');

        $('#gv_gob_pic_go_title').css('display', 'none');

        $('#gv_gob_pic_winner_block_title').css('display', 'none');
        $('#gv_gob_pic_winner_block_text1').css('display', 'none');
        $('#gv_gob_pic_winner_block_text2').css('display', 'none');

        $('#gv_gob_pic_exit_block_title').css('display', 'block')
        $('#gv_gob_pic_go_title').css('display', 'none');

        gv_game_over_block_back.recalculate();
    },
    "show_exit_block": function() {
        graph_core.cur_gob_block_type = "exit";
        graph_core.update_exit_block();
        $('#gv_game_over_block_back').fadeIn(ANIMATION*1000)
    },
    "hide_exit_block": function() {
        graph_core.cur_gob_block_type = "none";
        $('#gv_game_over_block_back').css('display', 'none')
        if (tech_core.user_type == 'tv') {
            tech_core.tv_data.cur_window = 'game'
            tech_core.tv_data.buttons_active = true
            tech_core.tv_data.cursor_pos = 1
            graph_core.tv_update_cursor();
        }
    }
}

// игровой объект
var game_core = {
    "data": {
        "history": [],
        "mistakes_history": [],
        "lifes": 3,
        "streak": 0,
        "streak_history": ['0'],
        "right_answers": 0,
        "gotten_review": false,
        "joined_group": false,
        "available_questions": [],
        "cur_streak_point": 0
    },
    "start_game": function() {
        $('#gv_gob_button_1').attr('id', 'gv_gob_button_1_hp')
        //$('.gv_gob_button #gv_gob_button_1').css('background-image', 'url("images/Button_hp.png"); !important')
        //$('.gv_gob_button_hover #gv_gob_button_1').css('background-image', 'url("images/Button_hp_on.png")')

        if (tech_core.platform == 'yandex') {
            tech_core.send_ym_report('visit_ya_games')
        } else if (tech_core.platform == 'vk') {
            tech_core.send_ym_report('visit_vk')
        } else if (tech_core.platform == 'sber') {
            tech_core.send_ym_report('visit_sber')
        } else if (tech_core.platform == 'crazygames') {
            tech_core.send_ym_report('visit_crazygames')
        } else if (tech_core.platform == 'gamedistribution') {
            tech_core.send_ym_report('visit_gamedistribution')
        }



        graph_core.open_game_viewport();
        
        tech_core.load_progress();
        

        // предзагрузка всех карточек
        $('body').append('<img src="images/card_2.png" class="hidden">')
        $('body').append('<img src="images/card_3.png" class="hidden">')
        $('body').append('<img src="images/card_4.png" class="hidden">')
        $('body').append('<img src="images/card_5.png" class="hidden">')
        $('body').append('<img src="images/card_6.png" class="hidden">')
        $('body').append('<img src="images/card_7.png" class="hidden">')
        $('body').append('<img src="images/card_8.png" class="hidden">')
        $('body').append('<img src="images/card_9.png" class="hidden">')
        $('body').append('<img src="images/card_10.png" class="hidden">')

        if (game_core.data.history.length > 0) {
            var last_question = game_core.data.history[game_core.data.history.length-1]
            game_core.data.history.pop();
            game_core.create_question(last_question)
        } else {

            //game_core.data.history.push(Math.floor(Math.random()*FILMS_AMOUNT))
            //var last_question = game_core.data.history[game_core.data.history.length-1]
            game_core.data.history.pop();
            var next_quest_num;
            if (tech_core.ysdk_flags.SORTED_QUESTIONS == '1') {
                next_quest_num = game_core.data.available_questions[0];
            } else {
                next_quest_num = get_random_elements(game_core.data.available_questions)[0]
            }
            //var next_quest_num = get_random_elements(game_core.data.available_questions)[0]
            game_core.create_question(next_quest_num)

        }

        

        graph_core.update_progress_bar(PROGRESS_BAR_TYPE);
        graph_core.update_streak_counter();
        graph_core.update_strike_block();
        graph_core.update_step_text();
        graph_core.update_hearts();

        if (game_core.data.lifes < 1) {
            graph_core.show_game_over_block();
            game_core.restart_game();
        }

        if (tech_core.sdk.features && tech_core.sdk.features.LoadingAPI) {
            tech_core.sdk.features.LoadingAPI.ready(); // Показываем SDK, что игра загрузилась и можно начинать играть.
        }
    },
    "create_question": function(question_num, recreating = false) {
        //console.log(question_num)
        //question_num = 51;
        graph_core.change_frame(question_num)

        var answers = tech_core.get_answers(question_num)

        graph_core.update_buttons(answers)
        if (!recreating) {
            game_core.data.history.push(question_num)

            ym_params_obj = {};
            Object.defineProperty(ym_params_obj, "question_"+question_num, {
              value: "opened",
              writable: true,
              enumerable: true,
              configurable: true,
            });
            ym(YM_NUMBER, "params", ym_params_obj)
        }

    },
    "get_next_answer": function(flash = true) {
        
        if (flash == false) {
            ANIMATION = false
        }
        
        
        
        if (game_core.data.lifes < 1) {
            // проиграли
            tech_core.send_ym_report('game_over')
            graph_core.update_game_over_block();
            graph_core.show_game_over_block();
            tech_core.save_progress();
        } else {

            if (game_core.data.streak == WINNER_STREAK || (game_core.data.history.length >= FILMS_AMOUNT && game_core.data.mistakes_history.length == 0)) {
                graph_core.show_winner_block();
            } else {
                //var next_quest_num = get_random_num(1, FILMS_AMOUNT, game_core.data.history)
                var next_quest_num;
                if (tech_core.ysdk_flags.SORTED_QUESTIONS == '1') {
                    next_quest_num = game_core.data.available_questions[0];
                } else {
                    next_quest_num = get_random_elements(game_core.data.available_questions)[0]
                }
                console.log(next_quest_num)
                // делаем предзагрузку
                //$('#frame_preloader').attr('src', "images/frames/"+next_quest_num+".jpg");
                setTimeout(function() {
                    if (tech_core.platform != 'yandex' || tech_core.ysdk_flags.EXPERIMENT_1 == '1') {
                        tech_core.show_interstitial_ad();
                    }
                    $('#game_viewport').fadeOut(ANIMATION*FLASH_DELAY_1)
                    

                    setTimeout(function() { 
                        if (game_core.data.history.length < FILMS_AMOUNT) {
                            $('#game_viewport').fadeIn(ANIMATION*FLASH_DELAY_2)
                            
                            game_core.create_question(next_quest_num);
                            graph_core.update_step_text();
                        } else {
                            $('#game_viewport').fadeIn(ANIMATION*FLASH_DELAY_2)
                            game_core.create_question(next_quest_num);
                            graph_core.update_step_text();
                        }
                        tech_core.save_progress();
                        graph_core.activate_buttons();
                        graph_core.reset_buttons();
                        if (flash == false) {
                            ANIMATION = 1
                        }
                    }, ANIMATION*FLASH_DELAY_1)
                }, ANIMATION*DELAY_BEFORE_FLASHING)
            }
        }
    },
    "answer_question": function(button_html) {

        var answer_text = button_html.innerText;
        var right_ans_id;
        for (var i=0; i < 4; i++) {
            if ($('#'+(i+1)).text() == questions[game_core.data.history[game_core.data.history.length-1]]['right_answer'][graph_core.lang]) {
                right_ans_id = i;
            }
        }

        //console.log(button_html)

        // RIGHT ANSWER
        if (questions[game_core.data.history[game_core.data.history.length-1]]['right_answer'][graph_core.lang] == answer_text) {
            graph_core.make_button_green(button_html.id)
            game_core.data.streak += 1
            game_core.data.right_answers +=1    
            var right_ans_film = game_core.data.history[game_core.data.history.length-1];
            // исправили ошибку
            if (game_core.data.mistakes_history.includes(right_ans_film)) {
                game_core.data.mistakes_history = delete_val(game_core.data.mistakes_history, right_ans_film)

            }
            game_core.data.available_questions = delete_val(game_core.data.available_questions, right_ans_film)
            ym_params_obj = {};
            Object.defineProperty(ym_params_obj, "question_"+game_core.data.history[game_core.data.history.length-1], {
              value: "right",
              writable: true,
              enumerable: true,
              configurable: true,
            });
            ym(YM_NUMBER, "params", ym_params_obj)
        } else {
        // WRONG ANSWER
            var right_ans_film = game_core.data.history[game_core.data.history.length-1];
            //game_core.data.streak = 0
            tech_core.send_ym_report('mistake')
            game_core.data.lifes -= 1
            graph_core.destroy_heart();
            graph_core.make_button_red(button_html.id)
            if (MARK_RIGHT_ANS) {
                graph_core.make_button_green(right_ans_id+1)
            }
            if (game_core.data.mistakes_history.includes(right_ans_film) == false) {
                game_core.data.mistakes_history.push(right_ans_film)
            }

            // moving hard question to the end
            if (tech_core.ysdk_flags.SORTED_QUESTIONS == '1') {
                game_core.data.available_questions = delete_val(game_core.data.available_questions, right_ans_film)
                game_core.data.available_questions.push(right_ans_film)
            }

            ym_params_obj = {};
            Object.defineProperty(ym_params_obj, "question_"+game_core.data.history[game_core.data.history.length-1], {
              value: "wrong",
              writable: true,
              enumerable: true,
              configurable: true,
            });
            ym(YM_NUMBER, "params", ym_params_obj)
        }

        graph_core.deactivate_buttons();

        graph_core.update_progress_bar(PROGRESS_BAR_TYPE);
        graph_core.update_streak_counter();
        graph_core.update_strike_block();

        if ([1,3,5,10,15,20,30,50,FILMS_AMOUNT].includes(game_core.data.streak)) {
            game_core.data.cur_streak_point = game_core.data.streak;
        }

        if ([1,3,5,10,15,20,30,50,FILMS_AMOUNT].includes(game_core.data.streak) && game_core.data.streak_history.includes(game_core.data.streak) == false && SHOW_STRIKE_BLOCK) {
            game_core.data.streak_history.push(game_core.data.streak)
            graph_core.update_strike_block();
            graph_core.show_strike_block();
        } else if ([1,3,5,10,15,20,30,50,FILMS_AMOUNT].includes(game_core.data.streak) == false && game_core.data.history.length > 8 && game_core.data.gotten_review == false && tech_core.user_type != 'tv' && game_core.data.lifes > 0) {
            game_core.data.gotten_review = true
            if (tech_core.platform != 'vk') {
                graph_core.try_to_show_get_review_block();
            } else {
                graph_core.show_join_group_block();
                game_core.data.joined_group = true;
                tech_core.save_progress();
            }
        } else if ([1,3,5,10,15,20,30,50,FILMS_AMOUNT].includes(game_core.data.streak) == false && game_core.data.history.length > 16 && game_core.data.joined_group == false && tech_core.user_type != 'tv') {
            if (tech_core.platform != 'vk' && tech_core.platform != 'yandex') {
                game_core.data.joined_group = true
                graph_core.show_join_group_block();
                tech_core.save_progress();
            } else {
                game_core.get_next_answer();
            }
        } else {
            game_core.get_next_answer();
        }

        
        
    },
    "restart_game": function() {
        var gotten_review = game_core.data.gotten_review;
        var joined_group = game_core.data.joined_group;
        var streak_history = game_core.data.streak_history;


        game_core.data = {
            "history": [],
            "mistakes_history": [],
            "lifes": 3,
            "streak": 0,
            "streak_history": streak_history,
            "right_answers": 0,
            "gotten_review": gotten_review,
            "joined_group": joined_group,
            "available_questions": [],
            "cur_streak_point": 0
        }

        for (var i = 0; i < FILMS_AMOUNT; i++) {
            if (tech_core.ysdk_flags.SORTED_QUESTIONS == '1') {
                game_core.data.available_questions.push(Number(sorted_questions[i]));
            } else {
                game_core.data.available_questions.push(i+1);
            }
        }

        graph_core.hide_game_over_block();
        game_core.create_question(Math.floor(Math.random()*FILMS_AMOUNT)+1)
        graph_core.reset_buttons();
        graph_core.update_progress_bar(PROGRESS_BAR_TYPE);
        graph_core.update_streak_counter();
        graph_core.update_strike_block();
        graph_core.update_step_text();

        graph_core.recover_all_hearts();

        tech_core.save_progress();
        graph_core.activate_buttons();

        if (tech_core.user_type == 'tv') {
            tech_core.tv_data.cur_window = 'game'
            graph_core.tv_update_cursor();
        }
    },
    "recover_heart": function() {
        if (tech_core.ysdk_flags.EXPERIMENT_1 != '1') {
            tech_core.show_rewarded_video(function() {
                game_core.data.lifes += 1
                graph_core.recover_heart();
                graph_core.hide_game_over_block();
                graph_core.reset_buttons();
                graph_core.activate_buttons();
                if (tech_core.user_type == 'tv') {
                    tech_core.tv_data.cur_window = 'game'
                    graph_core.tv_update_cursor();
                }
                tech_core.save_progress();
            })
        } else {
            tech_core.show_interstitial_ad_callback(function() {
                game_core.data.lifes += 1
                graph_core.recover_heart();
                graph_core.hide_game_over_block();
                graph_core.reset_buttons();
                graph_core.activate_buttons();
                if (tech_core.user_type == 'tv') {
                    tech_core.tv_data.cur_window = 'game'
                    graph_core.tv_update_cursor();
                }
                tech_core.save_progress();
            }, function() {
                //console.log('[tech_core] experiment 1 failed');
                tech_core.show_rewarded_video(function() {
                    game_core.data.lifes += 1
                    graph_core.recover_heart();
                    graph_core.hide_game_over_block();
                    graph_core.reset_buttons();
                    graph_core.activate_buttons();
                    if (tech_core.user_type == 'tv') {
                        tech_core.tv_data.cur_window = 'game'
                        graph_core.tv_update_cursor();
                    }
                    tech_core.save_progress();
                })
            })
        }

    },
    "go_to_hp_quiz": function() {
        
    },
    "get_review": function() {
        
        if (tech_core.platform == 'yandex') {
            tech_core.send_ym_report('review_btn')
            tech_core.sdk.feedback.canReview()
                .then(({ value, reason }) => {
                    if (value) {
                        tech_core.sdk.feedback.requestReview()
                            .then(({ feedbackSent }) => {
                                console.log(feedbackSent);
                                if (feedbackSent) {
                                    tech_core.send_ym_report('got_review')
                                    game_core.data.gotten_review = true;
                                }
                                graph_core.hide_get_review_block();
                                
                                tech_core.save_progress();
                                game_core.get_next_answer(false);
                        })
                } else {
                    console.log(reason)
                    graph_core.hide_get_review_block();
                    //game_core.data.gotten_review = true;
                    tech_core.save_progress();
                    game_core.get_next_answer(false);
                }
            })

        } else if (tech_core.platform == 'sber') {
            tech_core.send_ym_report('review_btn')
            var assistantRef = window.SberDevicesAdSDK.getAssistantRef();
            var assistant = assistantRef.current;
            assistant.sendData({ action: { action_id: 'SHOW_RATING_SUGGEST'} });
            //graph_core.hide_get_review_block();
            graph_core.hide_get_review_block();
            game_core.data.gotten_review = true;
            tech_core.save_progress();
            game_core.get_next_answer(false);
        } else if (tech_core.platform == 'vk') {
            tech_core.send_ym_report('join_group_btn')
            window.open("https://vk.com/ingenium_games", "_blank");
            return false
        }
        
    },
    "answer_question_right": function(amount) {
        var right_ans_id;
        for (var i=0; i < 4; i++) {
            if ($('#'+(i+1)).text() == questions[game_core.data.history[game_core.data.history.length-1]]['right_answer'][graph_core.lang]) {
                right_ans_id = i;
            }
        }
        console.log($('#'+(right_ans_id+1)))
        game_core.answer_question(document.getElementById((right_ans_id+1)))
    },
    "force_restart_game": function() {
        game_core.data = {
            "history": [],
            "mistakes_history": [],
            "lifes": 3,
            "streak": 0,
            "streak_history": ['0'],
            "right_answers": 0,
            "gotten_review": false,
            "joined_group": false,
            "available_questions": [],
            "cur_streak_point": 0
        }
        tech_core.save_progress();
        game_core.start_game();
    },
    "answers_all_questions_right": function() {
        for (var i = 0; i < FILMS_AMOUNT; i++) {
            setTimeout(function() {
                game_core.answer_question_right();
            }, 500)
        }
    },
    "exit_game": function() {
        if (tech_core.platform == 'yandex') {
            tech_core.sdk.dispatchEvent(tech_core.sdk.EVENTS.EXIT);
        }
    },
    "answer_questions_right": function(amount=1) {
        for (var i = 0; i < amount; i++) {
            setTimeout(function() {
                game_core.answer_question_right();
            }, 500)
        }
    },
}

make_screenshot = function() {
    console.log('making screen')
}



var noPX = function(string) {
    return string.slice(0, string.length-2);
}

var num = function(variable) {
    return Number(variable);
}

var set_size = function(el_id, w='none', h='none') {
    if (w != 'none') {
       $(el_id).css('width', w);
    }
    if (h != 'none') {
        $(el_id).css('height', h);
    }
}

var get_size = function(selector) {
    var el = $(selector);

    return {"x": num(noPX(el.css('width'))), "y": num(noPX(el.css('height')))}
}


var my_html_block = function(id, html_element, options = {}, big_block = false, add_to_big_blocks = 'none') {
    this.id = id;
    this.html_element = html_element;
    this.children = {};
    this.options = options;
    this.big_block = big_block;
    this.parent_id = -1;

    graph_core.all_html_blocks[id] = this;

    if (html_element == 'global_popup') {
        var big_block_div = document.createElement("div");
        big_block_div.id = id;

        this.parent_id = 'game_viewport';

        this.html_element = big_block_div;
        $('body').append(big_block_div)
    } else {

        if (big_block == true) {
            var big_block_div = document.createElement("div");
            big_block_div.id = id;

            if (big_block) {
                if (add_to_big_blocks == 'none') {
                    
                    add_to_big_blocks = true;
                }
            }
            if (add_to_big_blocks) {
                big_block_div.classList.add('big_block');
                graph_core.big_blocks_ids.push(id);
            }
            this.html_element = big_block_div;
            $('body').append(big_block_div)
        }
    }

    //this.size_x = num(noPX(this.html_element.css('width')))
    //this.size_y = num(noPX(this.html_element.css('height')))

    this.get_size = function() {
        //console.log(this.html_element.offsetWidth)
        var display_state = $('#' + this.id).css('display');

        $('#' + this.id).css('display', 'block');
        $('#' + this.id).css('opacity', '0%');

        var size = this.html_element.getBoundingClientRect()
        
        $('#' + this.id).css('display', display_state);
        $('#' + this.id).css('opacity', '100%');

        return {
            "x": size.width,
            "y": size.height
        }
    }

    this.get_pos = function() {
        return this.html_element.getBoundingClientRect();
    }


    this.add_block = function(id, options) {
        if (options.text_padding_w == undefined) {
            options.text_padding_w = 1;
        }

        if (options.text_padding_h == undefined) {
            options.text_padding_h = 1;
        }

        var new_html_element = document.createElement("div");
        if (options.textarea) {
            new_html_element = document.createElement('textarea');
        }
        //console.log('adding block')
        //console.log(new_html_element, this, this.html_element)

        new_html_element.id = id;
        var parent_size = this.get_size();

        if (options.is_prop) {
            var width = Math.min(parent_size.x * options.ratio_x, parent_size.y * options.ratio_y * options.ratio)



            //set_size(selector, width, width / options.ratio)

            new_html_element.style.width = width + "px";
            new_html_element.style.height = width/options.ratio + "px";

        } else {
            new_html_element.style.width = parent_size.x * options.ratio_x + "px";
            new_html_element.style.height = parent_size.y * options.ratio_y + "px";

            //console.log(parent_size.x)
        }



        if (options.pos_mode == 'center') {
            //new_html_element.style.position = 'absolute'
            
            new_html_element.style.left = (parent_size.x-num(noPX(new_html_element.style.width)))/2 + "px";
            new_html_element.style.top = (parent_size.y-num(noPX(new_html_element.style.height)))/2 + "px";
            
        } else {
            if (options.pos_x_mode == "attach_right") {
                new_html_element.style.left = (document.getElementById(options.pos_x_attach_id).getBoundingClientRect().right - num(noPX(new_html_element.style.width))) + ( num(noPX(new_html_element.style.width)) * options.margin_x) + 'px';
            } else if (options.pos_x_mode == "attach_left") {
                new_html_element.style.left = (document.getElementById(options.pos_x_attach_id).getBoundingClientRect().right)  + ( num(noPX(new_html_element.style.width)) * options.margin_x) + 'px';
                
            } else if (options.pos_x_mode == "attach_left_left") {
                new_html_element.style.left = (document.getElementById(options.pos_x_attach_id).getBoundingClientRect().left)  + ( num(noPX(new_html_element.style.width)) * options.margin_x) + 'px';
                
            } else {
                if (options.pos_x) {
                    new_html_element.style.left = (parent_size.x-num(noPX(new_html_element.style.width)))*options.pos_x + "px";
                }
            }

            if (options.pos_y_mode == "attach_bottom") {
                new_html_element.style.top = (document.getElementById(options.pos_y_attach_id).bottom - num(noPX(new_html_element.style.height))) + ( num(noPX(new_html_element.style.height)) * options.margin_y) + 'px';
            } else if (options.pos_y_mode == "attach_top") {

                new_html_element.style.top = (document.getElementById(options.pos_y_attach_id).getBoundingClientRect().bottom)  + (num(noPX(new_html_element.style.height)) * options.margin_y) + 'px';
                
            }
             else if (options.pos_y_mode == "attach_top_top") {
                //console.log(options.pos_y_attach_id, document.getElementById(options.pos_y_attach_id).getBoundingClientRect().top, )
                //console.log($('#'+options.pos_y_attach_id).offsetRelative().top)
                new_html_element.style.top = ($('#'+options.pos_y_attach_id).offsetRelative().top)  + (num(noPX(new_html_element.style.height)) * options.margin_y) + 'px';
                
            } else {
                if (options.pos_y) {
                    new_html_element.style.top = (parent_size.y-num(noPX(new_html_element.style.height)))*options.pos_y + "px";
                }
            }

            
        }


    
        if (options.color) {
            new_html_element.style.backgroundColor = options.color;
        }
        
        if (options.background) {
            new_html_element.style.background = options.background;
            new_html_element.style['background-size'] = '100%'
        }

        if (options['border-radius']) {
            new_html_element.style['border-radius'] = options['border-radius'];
        }

        if (options.onclick) {
            new_html_element.setAttribute('onclick', options.onclick);
            if (options.onclick != "") {
                new_html_element.style['cursor'] = 'pointer';
            } else {
                new_html_element.style['cursor'] = 'cursor'
            }
        }

        if (options.style) {
            for (var i in options.style) {
                new_html_element.style[i] = options.style[i];
            }
        }

        // если это ячейка таблицы
        if (options.table_cell_num != undefined) {
            var parent_size_x = parent_size.x;
            var block_size_x = num(noPX(new_html_element.style.width));

            var cols = Math.floor(parent_size_x/block_size_x);

            var cell_x_pos = (options.table_cell_num % cols)/cols ;
            var cell_y_pos = (options.table_cell_num / cols);

            new_html_element.style.left = (parent_size.x-num(noPX(new_html_element.style.width)))*cell_x_pos + "px";

            new_html_element.style.top = num(noPX(new_html_element.style.height))*cell_y_pos + "px";
                    
        }

        $('#'+this.id).append(new_html_element)

        if (options.text) {
            var text_div = document.createElement("div");

            text_div.style.width = num(noPX(new_html_element.style.width)) * options.text_padding_w + 'px';
            text_div.style.height = num(noPX(new_html_element.style.height)) * options.text_padding_h + 'px';

            text_div.setAttribute('class', 'text_div')

            
            var text_div2 = document.createElement("span");
            text_div2.setAttribute('class', 'text')

            

            var words = options.text.replace("{coin}", "{}").split(" ");
            

            var font_size = 1;

            if (words.length == 1 || options['1_line_text']) {
                font_size = Math.min(num(noPX(new_html_element.style.height)) * 0.75 * options.text_padding_h, num(noPX(new_html_element.style.width)) / options.text.length * 1.8* options.text_padding_w);
            } else {
                // будем смотреть по кол-ву строк
                //var max_font_size = 1;
                for (var rows = 1; rows < 10; rows += 1) {
                    // примерное число символов в строке
                    var symbols_in_row = options.text.length / rows;

                    font_size = Math.max(Math.min(num(noPX(new_html_element.style.height))/rows * 0.75 * options.text_padding_h, num(noPX(new_html_element.style.width)) / symbols_in_row * 1.8 * options.text_padding_w), font_size)
                }
            }

            if (options.strict_font_size) {
                font_size = options.strict_font_size * parent_size.y;
            }
        
            text_div2.style['font-size'] = font_size + 'px';

            
            if (options.text.includes("{coin}")) {
                //options.text = options.text.replace("{coin}", "<img src='./images/coin_little.png' height='"+font_size+"' > </img>")
            }

            
            text_div2.innerHTML = options.text.replace("{coin}", "<img src='./images/coin_little.png' height='"+font_size+"' > </img>")
            
            text_div.appendChild(text_div2);
            new_html_element.appendChild(text_div)


            console.log(id)
            var text_div_size = get_size('#'+id + ' .text_div');

            //console.log(id, text_div_size)

            text_div.style.left = (num(noPX(new_html_element.style.width)) - text_div_size.x) / 2 + 'px';
            text_div.style.top = (num(noPX(new_html_element.style.height)) - text_div_size.y) / 2 + 'px';

            
            var text_div2_size = get_size('#'+id + ' .text_div .text');

            text_div2.style.left = (num(noPX(new_html_element.style.width)) * options.text_padding_w - text_div2_size.x) / 2 + 'px';
            text_div2.style.top = (num(noPX(new_html_element.style.height)) * options.text_padding_h - text_div2_size.y) / 2 + 'px';
            

            if (options.text_color) {
                text_div2.style.color = options.text_color;
            }

            if (options.text_align) {
                text_div2.style["text-align"] = options.text_align;
            }
        }

        
        this.children[id] = new my_html_block(id, new_html_element, options);
        console.log('this.id', this.id)
        this.children[id].parent_id = this.id;
        graph_core.all_html_blocks[id] = this.children[id];
    }

    this.recalculate = function(parent='none') {

        if (parent == 'none' && this.big_block == false) {
            parent = graph_core.all_html_blocks[this.parent_id]
            console.log(parent, this.parent_id, graph_core.all_html_blocks)
        }
        
        var display_state = $('#' + this.id).css('display');

        $('#' + this.id).css('display', 'block');
        $('#' + this.id).css('opacity', '0%');

        var parents_chain = [];

        var parent_id = this.id;
        var child_id = this.id;

        while (parent_id != -1) {
            child_id = parent_id;
            parent_id = graph_core.all_html_blocks[child_id].parent_id;
            parents_chain.push({
                "id": parent_id,
                "display_state": $('#' + parent_id).css('display')
            })
            $('#' + parent_id).css('display', 'block');
            $('#' + parent_id).css('opacity', '0%');
        }

        if (this.big_block) {
            set_size('#'+this.id, graph_core.winW, graph_core.winH);
        } else {
            if (this.options.text_padding_w == undefined) {
                this.options.text_padding_w = 1;
                
            }

            if (this.options.text_padding_h == undefined) {
                this.options.text_padding_h = 1;
            }
            
            if (parent != undefined) {

                var parent_size = parent.get_size();


                //console.log('id: ', this.id)
                //console.log(parent_size)
                if (this.options.is_prop) {
                    var width = Math.min(parent_size.x * this.options.ratio_x, parent_size.y * this.options.ratio_y * this.options.ratio)

                    //set_size(this.id, width, width / this.options.ratio)

                    this.html_element.style.width = width + "px";
                    this.html_element.style.height = width/this.options.ratio + "px";

                } else {
                    this.html_element.style.width = parent_size.x * this.options.ratio_x + "px";
                    this.html_element.style.height = parent_size.y * this.options.ratio_y + "px";
                }

                if (this.options.pos_mode == 'center') {
                    //new_html_element.style.position = 'absolute'
                    
                    this.html_element.style.left = (parent_size.x-num(noPX(this.html_element.style.width)))/2 + "px";
                    this.html_element.style.top = (parent_size.y-num(noPX(this.html_element.style.height)))/2 + "px";
                    
                }  else {
                    if (this.options.pos_x_mode == "attach_right") {
                        this.html_element.style.left =  (document.getElementById(this.options.pos_x_attach_id).getBoundingClientRect().right - num(noPX(this.html_element.style.width))) + (num(noPX(this.html_element.style.width)) * this.options.margin_x) + 'px';
                    } else if (options.pos_x_mode == "attach_left") {
                        this.html_element.style.left = (document.getElementById(this.options.pos_x_attach_id).getBoundingClientRect().right)  + (num(noPX(this.html_element.style.width)) * this.options.margin_x) + 'px';
                        
                    } else if (options.pos_x_mode == "attach_left_left") {
                        this.html_element.style.left = (document.getElementById(this.options.pos_x_attach_id).getBoundingClientRect().left)  + (num(noPX(this.html_element.style.width)) * this.options.margin_x) + 'px';
                    } else if (options.pos_x_mode == 'v2_attach_left') {
                        this.html_element.style.left = -document.getElementById(this.options.pos_x_attach_id).getBoundingClientRect().left +(document.getElementById(this.options.pos_x_attach_id).getBoundingClientRect().right) + (num(noPX(this.html_element.style.width)) * this.options.margin_x) + 'px';
                    
                    } else {
                        if (this.options.pos_x) {
                            this.html_element.style.left = (parent_size.x-num(noPX(this.html_element.style.width)))*this.options.pos_x + "px";
                        }
                    } 

                    if (this.options.pos_y_mode == "attach_bottom") {
                        this.html_element.style.top = (document.getElementById(this.options.pos_y_attach_id).getBoundingClientRect().bottom - num(noPX(this.html_element.style.height)))  + (num(noPX(this.html_element.style.height)) * this.options.margin_y) + 'px';
                    } else if (this.options.pos_y_mode == "attach_top") {
                        this.html_element.style.top = (document.getElementById(this.options.pos_y_attach_id).getBoundingClientRect().bottom)  + (num(noPX(this.html_element.style.height)) * this.options.margin_y) + 'px';
                    
                    } else if (this.options.pos_y_mode == "attach_top_top") {

                        this.html_element.style.top = ($('#'+options.pos_y_attach_id).offsetRelative().top)  + (num(noPX(this.html_element.style.height)) * this.options.margin_y) + 'px';
                    
                    }  else {

                        if (this.options.pos_y) {
                            this.html_element.style.top = (parent_size.y-num(noPX(this.html_element.style.height)))*this.options.pos_y + "px";
                        }
                    }
                }

                if (this.options.table_cell_num != undefined) {
                    var parent_size_x = parent_size.x;
                    var block_size_x = num(noPX(this.html_element.style.width));

                    var cols = Math.floor(parent_size_x/block_size_x);
                    var x_margin = (parent_size_x - block_size_x*cols)/(cols+1);

                    var cell_x_pos = x_margin + (this.options.table_cell_num % cols)*(x_margin+block_size_x);
                    
                    var cell_y_pos = Math.floor(this.options.table_cell_num / cols);

                    this.html_element.style.left = cell_x_pos + "px";

                    this.html_element.style.top = num(noPX(this.html_element.style.height))*cell_y_pos + "px";
                            
                }


                if (this.options.text) {
                    //console.log('text')
                    //new_html_element.textContent = options.text;

                    var words = (this.options.text.replace("{coin}","{}")).replace('{yan}', "{}").split(" ");

                    var actual_text = (this.options.text.replace("{coin}", "{}")).replace('{yan}', '{}');

                    
                    
                    var font_size = 1;

                    
                    var text_div = document.querySelector('#'+this.id + ' .text_div')
                    text_div.style.width = num(noPX(this.html_element.style.width)) * this.options.text_padding_w + "px";
                    text_div.style.height = num(noPX(this.html_element.style.height)) * this.options.text_padding_h + "px";

                    var text_div2 = document.querySelector('#'+this.id + ' .text_div .text')
                    text_div2.style.display = 'inline';
                    //text_div2.style.width = text_div.style.width
                    //text_div2.style.height = text_div.style.height 
                    console.log(this.html_element.style.width, this.html_element.style.height, "<---------")
                    if (words.length == 1 || this.options['1_line_text']) {
                        font_size = Math.min(num(noPX(this.html_element.style.height)) * 0.75 * this.options.text_padding_h, num(noPX(this.html_element.style.width)) * this.options.text_padding_w /  this.options.text.length * 1.8);
                    } else {
                        // будем смотреть по кол-ву строк
                        //var max_font_size = 1;
                        for (var rows = 1; rows < 10; rows += 1) {
                            // примерное число символов в строке
                            var symbols_in_row = actual_text.length / rows;

                            //console.log(symbols_in_row)

                            font_size = Math.max(Math.min(num(noPX(this.html_element.style.height))/rows * 0.75 * this.options.text_padding_h, num(noPX(this.html_element.style.width)) / symbols_in_row * 1.8 * this.options.text_padding_w), font_size)
                        }
                        
                    }


                    //text_div2.innerHTML = options.text.replace("{coin}", "<img src='./images/coin_little.png' height='"+font_size+"' > </img>")
                    var html = this.options.text.replace("{coin}", "<img class='coin_ico' src='./images/coin_little.png' style='top: "+font_size*0.2+"px;' height='"+font_size*1.2+"' > </img>");
                    html = html.replace("{yan}", "<img class='coin_ico' src='./images/yans.svg' style='top: "+font_size*0.2+"px;' height='"+font_size*1.2+"' > </img>");

                    text_div2.innerHTML = html;

                    if (this.options.strict_font_size) {
                        font_size = this.options.strict_font_size * parent_size.y;
                    }

                    //console.log('font_size: ', font_size);

                    text_div2.style['font-size'] = font_size + 'px';


                    

                    var text_div_size =  get_size('#'+this.id + ' .text_div');



                    text_div.style.left = (num(noPX(this.html_element.style.width)) - text_div_size.x) / 2 + 'px';
                    text_div.style.top = (num(noPX(this.html_element.style.height)) - text_div_size.y) / 2 + 'px';
                    text_div.style.position = 'absolute';


                    text_div2.style.display = 'block';
                    text_div2.style.position = 'absolute';
                    

                    var text_div2_size = get_size('#'+this.id + ' .text_div .text');
                        

                    text_div2.style.left = (num(noPX(this.html_element.style.width)) * this.options.text_padding_w - text_div2_size.x) / 2 + 'px';
                    text_div2.style.top = (num(noPX(this.html_element.style.height)) * this.options.text_padding_h - text_div2_size.y) / 2 + 'px';
                    
                    if (num(noPX(text_div2.style.top)) < 0) {
                        text_div2.style['font-size'] = num(noPX(text_div2.style['font-size'])) / (1 + Math.abs(num(noPX(text_div2.style.top))) / (num(noPX(this.html_element.style.height)) * this.options.text_padding_h)) + "px";
                        var text_div2_size = get_size('#'+this.id + ' .text_div .text');
                        text_div2.style.top = (num(noPX(this.html_element.style.height)) * this.options.text_padding_h - text_div2_size.y) / 2 + 'px';
                        
                    }

                    
                }

                if (this.options.background) {
                    this.html_element.style.background = this.options.background;
                    this.html_element.style['background-size'] = '100%'
                }

                if (this.options.onclick != undefined) {

                    this.html_element.setAttribute('onclick', this.options.onclick);
                    if (this.options.onclick == "") {
                        this.html_element.style['cursor'] = 'default';
                    } else {
                        this.html_element.style['cursor'] = 'pointer';
                        
                    }
                }
            }
        }

        for (var i in this.children) {

            this.children[i].recalculate(this);
        }

        //var display_state = $('#' + this.id).css('display');

        $('#' + this.id).css('display', display_state);
        $('#' + this.id).css('opacity', '100%');
        
        for (var i in parents_chain) {
            
            $('#' + parents_chain[i].id).css('display', parents_chain[i].display_state);
            $('#' + parents_chain[i].id).css('opacity', '100%');
        }
    }
}


$('#gv_strike_block').append('<div style="position: absolute; color: white; font-family: font_1;" id="gv_strike_block_text"></div>')


var gv_strike_block_back = new my_html_block('gv_strike_block_back', document.getElementById('gv_strike_block_back'), {})
var gv_strike_block = new my_html_block('gv_strike_block', document.getElementById('gv_strike_block'), {})
var block = new my_html_block('gv_strike_block_text', document.getElementById('gv_strike_block_text'), {})


graph_core.all_html_blocks['gv_strike_block_back'].children['gv_strike_block'] = (graph_core.all_html_blocks['gv_strike_block'])
graph_core.all_html_blocks['gv_strike_block'].children['gv_strike_block_text'] = (graph_core.all_html_blocks['gv_strike_block_text'])

graph_core.all_html_blocks['gv_strike_block'].parent_id = 'gv_strike_block_back';
graph_core.all_html_blocks['gv_strike_block_text'].parent_id = 'gv_strike_block';

graph_core.all_html_blocks['gv_strike_block_text'].add_block('gv_strike_block_text2', {
    "ratio_x": 1,
    "ratio_y": 1,
    "pos_y": 0.5,
    "pos_x": 0.5,
    "text": "grgr ",
    "text_color": "#ffffff",
    "1_line_text": true,
    "text_align": "center"
})

$('#gv_strike_block_text2').css('position', 'absolute')


// game over block 

var gv_game_over_block_back = new my_html_block('gv_game_over_block_back', document.getElementById('gv_game_over_block_back'), {})
var gv_game_over_block = new my_html_block('gv_game_over_block', document.getElementById('gv_game_over_block'), {})
var gv_gob_pic = new my_html_block('gv_gob_pic', document.getElementById('gv_gob_pic'), {})

graph_core.all_html_blocks['gv_game_over_block_back'].children['gv_game_over_block'] = (graph_core.all_html_blocks['gv_game_over_block'])
graph_core.all_html_blocks['gv_game_over_block'].children['gv_gob_pic'] = (graph_core.all_html_blocks['gv_gob_pic'])

graph_core.all_html_blocks['gv_game_over_block'].parent_id = 'gv_game_over_block_back';
graph_core.all_html_blocks['gv_gob_pic'].parent_id = 'gv_game_over_block';


graph_core.all_html_blocks['gv_gob_pic'].add_block('gv_gob_pic_go_title', {
    "ratio_x": 1,
    "ratio_y": 0.17,
    "pos_y": 0.05,
    "pos_x": 0.5,
    "text": "Игра окончена!",
    "text_color": "#ffffff",
    "1_line_text": true,
    "text_align": "center"
})

$('#gv_gob_pic_go_title').css('position', 'absolute')
$('#gv_gob_pic_go_title').css('font-family', 'font_1')


graph_core.all_html_blocks['gv_gob_pic'].add_block('gv_gob_pic_exit_block_title', {
    "ratio_x": 1,
    "ratio_y": 0.17,
    "pos_y": 0.05,
    "pos_x": 0.5,
    "text": "Вы точно хотите покинуть игру?",
    "text_color": "#ffffff",
    "1_line_text": true,
    "text_align": "center"
})

$('#gv_gob_pic_exit_block_title').css('position', 'absolute')
$('#gv_gob_pic_exit_block_title').css('font-family', 'font_1')


// REVIEW BLOCK
graph_core.all_html_blocks['gv_gob_pic'].add_block('gv_gob_pic_review_block_title', {
    "ratio_x": 1,
    "ratio_y": 0.17,
    "pos_y": 0.05,
    "pos_x": 0.5,
    "text": "Оцените игру!",
    "text_color": "#ffffff",
    "1_line_text": true,
    "text_align": "center"
})

$('#gv_gob_pic_review_block_title').css('position', 'absolute')
$('#gv_gob_pic_review_block_title').css('font-family', 'font_1')

graph_core.all_html_blocks['gv_gob_pic'].add_block('gv_gob_pic_review_block_text1', {
    "ratio_x": 420/900,
    "ratio_y": 100/450,
    "pos_y": 180/450,
    "pos_x": 0.86,
    "text": "Нравится игра?\nОцените её!",
    "text_color": "#ffffff",
    //"background": "red",
    "1_line_text": false,
    "text_align": "center"
})

$('#gv_gob_pic_review_block_text1').css('position', 'absolute')
$('#gv_gob_pic_review_block_text1').css('font-family', 'font_1')

graph_core.all_html_blocks['gv_gob_pic'].add_block('gv_gob_pic_review_block_text2', {
    "ratio_x": 470/900,
    "ratio_y": 150/450,
    "pos_y": 400/450,
    "pos_x": 0.9,
    "text": "И мы будем продолжать радовать Вас другими викторинами!",
    "text_color": "#ffffff",
    //"background": "red",
    "1_line_text": false,
    "text_align": "center"
})

$('#gv_gob_pic_review_block_text2').css('position', 'absolute')
$('#gv_gob_pic_review_block_text2').css('font-family', 'font_1')


// JOIN GROUP BLOCK
graph_core.all_html_blocks['gv_gob_pic'].add_block('gv_gob_pic_join_block_title', {
    "ratio_x": 1,
    "ratio_y": 0.17,
    "pos_y": 0.05,
    "pos_x": 0.5,
    "text": "Нравится игра?",
    "text_color": "#ffffff",
    "1_line_text": true,
    "text_align": "center"
})

$('#gv_gob_pic_join_block_title').css('position', 'absolute')
$('#gv_gob_pic_join_block_title').css('font-family', 'font_1')

graph_core.all_html_blocks['gv_gob_pic'].add_block('gv_gob_pic_join_block_text1', {
    "ratio_x": 440/900,
    "ratio_y": 220/450,
    "pos_y": 270/450,
    "pos_x": 0.9,
    "text": "Вступайте в нашу группу, чтобы оставаться в курсе новостей",
    "text_color": "#ffffff",
    //"background": "red",
    "1_line_text": false,
    "text_align": "center"
})

$('#gv_gob_pic_join_block_text1').css('position', 'absolute')
$('#gv_gob_pic_join_block_text1').css('font-family', 'font_1')

// WINNER BLOCK
graph_core.all_html_blocks['gv_gob_pic'].add_block('gv_gob_pic_winner_block_title', {
    "ratio_x": 1,
    "ratio_y": 0.17,
    "pos_y": 0.05,
    "pos_x": 0.5,
    "text": "Ты мститель!",
    "text_color": "#ffffff",
    "1_line_text": true,
    "text_align": "center"
})

$('#gv_gob_pic_winner_block_title').css('position', 'absolute')
$('#gv_gob_pic_winner_block_title').css('font-family', 'font_1')

graph_core.all_html_blocks['gv_gob_pic'].add_block('gv_gob_pic_winner_block_text1', {
    "ratio_x": 420/900,
    "ratio_y": 100/450,
    "pos_y": 180/450,
    "pos_x": 0.9,
    "text": "Поздравляем!\nТы прошёл викторину!",
    "text_color": "#ffffff",
    //"background": "red",
    "1_line_text": false,
    "text_align": "center"
})

$('#gv_gob_pic_winner_block_text1').css('position', 'absolute')
$('#gv_gob_pic_winner_block_text1').css('font-family', 'font_1')

graph_core.all_html_blocks['gv_gob_pic'].add_block('gv_gob_pic_winner_block_text2', {
    "ratio_x": 420/900,
    "ratio_y": 120/450,
    "pos_y": 360/450,
    "pos_x": 0.9,
    "text": "Ждём тебя в других викторинах",
    "text_color": "#ffffff",
    //"background": "red",
    "1_line_text": false,
    "text_align": "center"
})

$('#gv_gob_pic_winner_block_text2').css('position', 'absolute')
$('#gv_gob_pic_winner_block_text2').css('font-family', 'font_1')

var test_strike_block = function(streak) {
    game_core.data.streak = streak;
    graph_core.update_strike_block();
    graph_core.show_strike_block();
}

var change_lang = function() {
    if (graph_core.lang == 'ru') {
        graph_core.translate('en');
    } else if (graph_core.lang == 'en') {
        graph_core.translate('tr')
    } else if (graph_core.lang == 'tr') {
        graph_core.translate('ru')
    }
}
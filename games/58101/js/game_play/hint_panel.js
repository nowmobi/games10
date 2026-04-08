let HintPanel = new Phaser.Class({
 
	Extends: Phaser.GameObjects.Container,   

	initialize:

	function HintPanel (scene)
	{
		this.scene = game_data['scene'];
		Phaser.GameObjects.Container.call(this, this.scene, 0, 0);        
		this.emitter = new Phaser.Events.EventEmitter();
	},

	init(params) {
        this.moving_holder = params['moving_holder'];
        this.btn_hint = new CustomButton(this.scene, 0, 0, () => {
            if (game_data['game_play'].allow_click) this.handler_hint();
        }, 'common1', 'btn_level_unlocked1', 'btn_level_unlocked2', 'btn_level_unlocked1', this, null, null, 0.6);
        this.add(this.btn_hint);
        let ico = new Phaser.GameObjects.Image(this.scene, 0, 0,'common1', 'hint').setScale(0.65);
        this.btn_hint.add(ico);

        this.price_cont = new Phaser.GameObjects.Container(this.scene, -40, 20);
        this.add(this.price_cont);
        ico = new Phaser.GameObjects.Image(this.scene, 0, 0, 'common1', 'rewarded_ad').setScale(0.9);
        this.price_cont.add(ico);
    },

    handler_hint() {
        let level_type = game_data['game_play'].get_level_type();
        if (level_type === 'link') {
            let candidates = game_data['game_play'].puzzle.get_candidates().filter(item => !item.hint_set);
            let items = game_data['game_play'].puzzle.items;
            if (candidates.length) {
                game_data['utils'].show_rewarded_ad(res => {
                    if (res['success']) {
                        game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'hint'});
                        this.emitter.emit('EVENT', {'event': 'update_money'});
                        let candidate = Phaser.Utils.Array.GetRandom(candidates);
                        let candidate2 = items.find(el => {
                            let related_id = candidate.data.get('related_id');
                            let related_id2 = el.data.get('related_id');
                            if (candidate !== el && related_id === related_id2) return true;
                        })
                        candidate.hint_set = true;
                        let pt_start = new Phaser.Geom.Point(candidate.x, candidate.y);
                        pt_start = game_data['utils'].toGlobal(candidate.parentContainer, pt_start);
                        let pt_end = game_data['utils'].toGlobal(candidate2.parentContainer, new Phaser.Geom.Point(candidate2.x, candidate2.y));
                        game_data['game_play'].puzzle.show_hint(pt_start, pt_end);
                    }
                    else {
                        // show_tip
                        let pt = game_data['utils'].toGlobal(this.btn_hint, new Phaser.Geom.Point(0, 0));
                        game_data['utils'].show_tip({'pt': pt, 'scene_id': 'game_tip', 'item_id': 'shop', 'phrase_id': '2', 'forced': true, 'values': []});
                    }
                });
            }
            else {
                console.log('no candidates')
            }
        }
        else if (level_type === 'memory') {
            let candidates = game_data['game_play'].puzzle.get_candidates().filter(item => !item.hint_set);
            
            if (candidates.length) {
                game_data['utils'].show_rewarded_ad(res => {
                    if (res['success']) {
                        game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'hint'});
                        let target_arr = candidates;
                        let candidates_opened = candidates.filter(item => item.opened);
                        if (candidates_opened.length) {
                            target_arr = candidates_opened;
                        }
                        let candidate1 = Phaser.Utils.Array.RemoveRandomElement(target_arr);
                        let rank1 = candidate1.get_rank();
                        let candidate2 = candidates.find(c => candidate1 !== c && c.get_rank() === rank1);
                        // if (!candidate2) debugger
                        candidate1.hint_set = true;
                        candidate2.hint_set = true;
                        this.emitter.emit('EVENT', {'event': 'pause_timer'});
                        let pt_start = game_data['utils'].toGlobal(this.btn_hint.parentContainer, new Phaser.Geom.Point(this.btn_hint.x, this.btn_hint.y));
                        let pt_end1 = game_data['utils'].toGlobal(candidate1.parentContainer, new Phaser.Geom.Point(candidate1.x, candidate1.y));
                        let pt1 = new Phaser.Geom.Point((2 * pt_start.x + pt_end1.x) / 3, pt_start.y - 200);
                        let pt2 = new Phaser.Geom.Point((pt_start.x + 2 * pt_end1.x) / 3, pt_end1.y + 200);	
    
                        let pt_end2 = game_data['utils'].toGlobal(candidate2.parentContainer, new Phaser.Geom.Point(candidate2.x, candidate2.y));
                        let pt3 = new Phaser.Geom.Point((2 * pt_start.x + pt_end2.x) / 3, pt_start.y - 200);
                        let pt4 = new Phaser.Geom.Point((pt_start.x + 2 * pt_end2.x) / 3, pt_end2.y + 200);	
                        this.create_emitter_hint(pt_start, pt1, pt2, pt_end1, () => {          
                        });
                        this.create_emitter_hint(pt_start, pt3, pt4, pt_end2, () => {
                            if(!candidate1.opened) candidate1.handler_click();
                            candidate2.handler_click();
                            this.emitter.emit('EVENT', {'event': 'resume_timer'});            
                        });
                    }
                    else {
                        // show_tip
                        let pt = game_data['utils'].toGlobal(this.btn_hint, new Phaser.Geom.Point(0, 0));
                        game_data['utils'].show_tip({'pt': pt, 'scene_id': 'game_tip', 'item_id': 'shop', 'phrase_id': '2', 'forced': true, 'values': []});
                    }
                });
            }
            else {
                console.log('no candidates')
            }
        }
        else if (level_type === 'word') {
            let candidates = game_data['game_play'].puzzle.get_candidates().filter(item => !item.hint_set);
            
            if (candidates.length) {
                game_data['utils'].show_rewarded_ad(res => {
                    if (res['success']) {
                        game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'hint'});
                        let candidate = Phaser.Utils.Array.RemoveRandomElement(candidates);
                        game_data['game_play'].puzzle.check_item(candidate);
                    }
                    else {
                        // show_tip
                        let pt = game_data['utils'].toGlobal(this.btn_hint, new Phaser.Geom.Point(0, 0));
                        game_data['utils'].show_tip({'pt': pt, 'scene_id': 'game_tip', 'item_id': 'shop', 'phrase_id': '2', 'forced': true, 'values': []});
                    }
                });
            }
        }
        else if (level_type === 'related') {
            let candidates = game_data['game_play'].puzzle.get_candidates().filter(item => !item.hint_set);
            if (candidates.length) {
                game_data['utils'].show_rewarded_ad(res => {
                    if (res['success']) {
                        game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'hint'});
                        let candidate = Phaser.Utils.Array.RemoveRandomElement(candidates);
                        candidate.hint_set = true;
                        let pt_start = game_data['utils'].toGlobal(this.btn_hint.parentContainer, new Phaser.Geom.Point(this.btn_hint.x, this.btn_hint.y));
                        let pt_end1 = game_data['utils'].toGlobal(candidate.parentContainer, new Phaser.Geom.Point(candidate.x, candidate.y));
                        let pt1 = new Phaser.Geom.Point((2 * pt_start.x + pt_end1.x) / 3, pt_start.y - 200);
                        let pt2 = new Phaser.Geom.Point((pt_start.x + 2 * pt_end1.x) / 3, pt_end1.y + 200);	
                        if (candidates.length === 0) this.emitter.emit('EVENT', {'event': 'pause_timer'});
                        this.create_emitter_hint(pt_start, pt1, pt2, pt_end1, () => {   
                            game_data['game_play'].puzzle.check_item(candidate, true);       
                        });
                    }
                    else {
                        // show_tip
                        let pt = game_data['utils'].toGlobal(this.btn_hint, new Phaser.Geom.Point(0, 0));
                        game_data['utils'].show_tip({'pt': pt, 'scene_id': 'game_tip', 'item_id': 'shop', 'phrase_id': '2', 'forced': true, 'values': []});
                    }
                });                    
            }
        }
        else if (level_type === 'shadow') {
            let candidates = game_data['game_play'].puzzle.get_candidates().filter(item => !item.hint_set);
            if (candidates.length) {
                game_data['utils'].show_rewarded_ad(res => {
                    if (res['success']) {
                        game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'hint'});
                        let candidate = Phaser.Utils.Array.RemoveRandomElement(candidates);
                        candidate.hint_set = true;
                        let candidate2 = game_data['game_play'].puzzle.get_shadow_items().find(el => el.id === candidate.id);
                        let pt_start = game_data['utils'].toGlobal(this.btn_hint.parentContainer, new Phaser.Geom.Point(this.btn_hint.x, this.btn_hint.y));
                        let pt_end1 = game_data['utils'].toGlobal(candidate.parentContainer, new Phaser.Geom.Point(candidate.x, candidate.y));
                        let pt1 = new Phaser.Geom.Point((2 * pt_start.x + pt_end1.x) / 3, pt_start.y - 200);
                        let pt2 = new Phaser.Geom.Point((pt_start.x + 2 * pt_end1.x) / 3, pt_end1.y + 200);	
                        this.emitter.emit('EVENT', {'event': 'pause_timer'});
                        this.create_emitter_hint(pt_start, pt1, pt2, pt_end1, () => {   
                            game_data['game_play'].puzzle.check_item(candidate, candidate2, true); 
                            if (candidates.length > 0) this.emitter.emit('EVENT', {'event': 'resume_timer'});     
                        });
                    }
                    else {
                        // show_tip
                        let pt = game_data['utils'].toGlobal(this.btn_hint, new Phaser.Geom.Point(0, 0));
                        game_data['utils'].show_tip({'pt': pt, 'scene_id': 'game_tip', 'item_id': 'shop', 'phrase_id': '2', 'forced': true, 'values': []});
                    }
                });
            }
        }
        else if (level_type === 'crop') {
            let candidates = game_data['game_play'].puzzle.get_candidates().filter(item => !item.hint_set);
            if (candidates.length) {
                game_data['utils'].show_rewarded_ad(res => {
                    if (res['success']) {
                        game_data['audio_manager'].sound_event({'play': true, 'sound_name': 'hint'});
                        let candidate = Phaser.Utils.Array.RemoveRandomElement(candidates);
                        candidate.hint_set = true;
                        let candidate2 = game_data['game_play'].puzzle.get_crop_items().find(el => el.id === candidate.id);
                        let pt_start = game_data['utils'].toGlobal(this.btn_hint.parentContainer, new Phaser.Geom.Point(this.btn_hint.x, this.btn_hint.y));
                        let pt_end1 = game_data['utils'].toGlobal(candidate.parentContainer, new Phaser.Geom.Point(candidate.x, candidate.y));
                        let pt1 = new Phaser.Geom.Point((2 * pt_start.x + pt_end1.x) / 3, pt_start.y - 200);
                        let pt2 = new Phaser.Geom.Point((pt_start.x + 2 * pt_end1.x) / 3, pt_end1.y + 200);
                        this.emitter.emit('EVENT', {'event': 'pause_timer'});
                        this.create_emitter_hint(pt_start, pt1, pt2, pt_end1, () => {   
                            game_data['game_play'].puzzle.check_item(candidate, candidate2, true);
                            if (candidates.length > 0) this.emitter.emit('EVENT', {'event': 'resume_timer'}); 
                        });
                    }
                    else {
                        // show_tip
                        let pt = game_data['utils'].toGlobal(this.btn_hint, new Phaser.Geom.Point(0, 0));
                        game_data['utils'].show_tip({'pt': pt, 'scene_id': 'game_tip', 'item_id': 'shop', 'phrase_id': '2', 'forced': true, 'values': []});
                    }
                });
            }
        }
    },

    create_emitter_hint(pt_start, pt1, pt2, pt_end, on_complete = () => {}) {
		let timeout = 10;
		let key = 'particle16';
		
        timeout = 450;
        let curve = new Phaser.Curves.CubicBezier(pt_start, pt1, pt2, pt_end);
        key = Math.random() < 0.5 ? 'particle15' : 'particle16';
        let prtcl = game_data['scene'].add.particles(0,0,'common1', {
            frame: key,
            scale: { start: 1.5, end: 0.3 },
            speed: { min: -15, max: 15 },
            frequency: 25,
            maxParticles: 20, //30 , 25
            blendMode: 'ADD',
            emitZone: { type: 'edge', source: curve, quantity: 20, yoyo: false }
        });
        let prtcl2;
        this.moving_holder.add(prtcl);
        setTimeout(() => {
            key = Math.random() < 0.5 ? 'particle15' : 'particle16' 
            prtcl2 = game_data['scene'].add.particles(0,0,'common1', {
                frame: key,
                scale: { start: 1.5, end: 0.3 },
                speed: { min: -15, max: 15 },
                frequency: 25,
                maxParticles: 18,
                blendMode: 'ADD',
                emitZone: { type: 'edge', source: curve, quantity: 18, yoyo: false }
            });
            this.moving_holder.add(prtcl2);
        }, 20);

        setTimeout(() => {
            on_complete();
        }, timeout);
		
	},

    destroy_level() {

    }

});
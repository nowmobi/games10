
let tw,popup_hammer,popup_nodiamond,popup_switch,popup_shuffle
let diamond
let w = 720
let h = 1280
import { GAMEOPTIONS } from "../scene/GameOption.js"
import Tween from "../plugin/TweenObject.js"
import eventsCenter from "../plugin/EventsCenter.js"

export default class PopupItem {
    constructor()
    {
        
    }


    CheckPopup(scene,item){
        tw = new Tween()

        diamond= localStorage.getItem(gamesAPI.config.storageKey + 'diamond')

        switch (item) {
            case 'hammer':
                if (diamond>=100) {
                    this.ShowPopUpHammer(scene)
                    eventsCenter.emit('use_item','hammer')

                }
                else{
                    this.ShowPopupNoDiamond(scene,w,h)
                    eventsCenter.emit('use_item','show_popup')

                }
                break;
            case 'switch':
                if (diamond>=100) {
                    this.ShowPopUpSwitch(scene)
                    eventsCenter.emit('use_item','switch')

                }
                else{
                    this.ShowPopupNoDiamond(scene,w,h)
                    eventsCenter.emit('use_item','show_popup')

                }
                break;
            case 'shuffle':
                if (diamond>=200) {
                    this.ShowPopUpShuffle(scene)
                }
                else{
                    this.ShowPopupNoDiamond(scene,w,h)
                    eventsCenter.emit('use_item','show_popup')
                }
                break;
        
            default:
                break;
        }
    }

    ShowPopupNoDiamond(scene,w,h){
        let bg = scene.add.rectangle(w/2,h/2,720,1280,'0x000000')
            bg.alpha = 0.9
        let txt = scene.add.text(w/2,h/2,"Not enough diamond",{
                fontFamily: 'cosmic', 
                fontSize:55
            })
            txt.setOrigin(0.5,0.5)
        
        let btnClose = scene.add.image(650,50,'btnClose')
            btnClose.setScale(0.8)
            btnClose.setInteractive()
            btnClose.on('pointerdown', function () {
                tw.BtnClickAnim(scene,btnClose,'btnClose')
            });
        popup_nodiamond = scene.add.container(0,0,[bg,txt,btnClose])
    }

    ShowPopUpHammer(scene)
    {
        let top_bg = scene.add.rectangle(0,0,1280,180,'0x000000')
            top_bg.setOrigin(0,0)
        
        let bottom_bg = scene.add.rectangle(0,1280,1280,200,'0x000000')
            bottom_bg.setOrigin(0,1)
        
        let light = scene.add.image(720/2,100,'light')
            light.alpha = 0.8
            light.setScale(0.6)
            tw.ObjectRotation(scene,light)
        
        let hammer_icon = scene.add.image(light.x,light.y,'hammer')
            hammer_icon.alpha = 0.8
            hammer_icon.setScale(0.4)

        let btnClose = scene.add.image(650,50,'btnClose')
            btnClose.setScale(0.8)
            btnClose.setInteractive()
            btnClose.setInteractive().on('pointerdown', function () {
                tw.BtnClickAnim(scene,btnClose,'btnClose')
            });

        let txt = scene.add.text(720/2,bottom_bg.y-bottom_bg.displayHeight/2,"Select Any Block To Destroy",{
                fontFamily: 'cosmic', 
                fontSize:50
            })
            txt.setOrigin(0.5,0.5)
        popup_hammer = scene.add.container(0,0,[top_bg,bottom_bg,light,hammer_icon,btnClose,txt])
    }



    ShowPopUpSwitch(scene)
    {
        
        let top_bg = scene.add.rectangle(0,0,1280,180,'0x000000')
            top_bg.setOrigin(0,0)
        
        let bottom_bg = scene.add.rectangle(0,1280,1280,200,'0x000000')
            bottom_bg.setOrigin(0,1)
        
        let light = scene.add.image(720/2,100,'light')
            light.alpha = 0.8
            light.setScale(0.6)
            tw.ObjectRotation(scene,light)

        let switch_boder = scene.add.image(light.x,light.y,'boder')
            switch_boder.setScale(0.4)
        let switch_icon = scene.add.image(light.x,light.y,'btnSwitch')
            // switch_icon.alpha = 0.8
            // switch_icon.setScale(0.4)

        let btnClose = scene.add.image(650,50,'btnClose')
            btnClose.setScale(0.8)
            btnClose.setInteractive()
            btnClose.setInteractive().on('pointerdown', function () {
                tw.BtnClickAnim(scene,btnClose,'btnClose')
            });

        let txt = scene.add.text(720/2,bottom_bg.y-bottom_bg.displayHeight/2,"Switch Two Block",{
                fontFamily: 'cosmic', 
                fontSize:50
            })
            txt.setOrigin(0.5,0.5)
        popup_switch = scene.add.container(0,0,[top_bg,bottom_bg,light,switch_boder,switch_icon,btnClose,txt])
    }


    ShowPopUpShuffle(scene)
    {
        
        let top_bg = scene.add.rectangle(0,0,1280,180,'0x000000')
            top_bg.setOrigin(0,0)
        
        let bottom_bg = scene.add.rectangle(0,1280,1280,200,'0x000000')
            bottom_bg.setOrigin(0,1)
        
        let light = scene.add.image(720/2,100,'light')
            light.alpha = 0.8
            light.setScale(0.6)
            tw.ObjectRotation(scene,light)

        let shuffle_boder = scene.add.image(light.x,light.y,'boder')
            shuffle_boder.setScale(0.4)
        let shuffle_icon = scene.add.image(light.x,light.y,'btnShuffle')
            // switch_icon.alpha = 0.8
            // switch_icon.setScale(0.4)

        let btnClose = scene.add.image(650,50,'btnClose')
            btnClose.setScale(0.8)
            btnClose.setInteractive()
            btnClose.setInteractive().on('pointerdown', function () {
                tw.BtnClickAnim(scene,btnClose,'btnClose')
            });

        let btnShuffle = scene.add.image(720/2,1130,'Shuffle')
            btnShuffle.setInteractive()
            btnShuffle.on('pointerdown', function () {
                scene.tweens.add({
                    targets: btnShuffle,
                    scale: { from : btnShuffle.scale-0.15, to : btnShuffle.scale},
                    ease: 'Bounce',
                    duration: 500,
                    onComplete: function(){
                        show_ad();
                        eventsCenter.emit('use_item','shuffle')
                        // reward_shuffle(eventsCenter)
                        // showRewardsAd(eventsCenter);
                        popup_shuffle.destroy()
                    }
                })
                
            });
        popup_shuffle = scene.add.container(0,0,[top_bg,bottom_bg,light,shuffle_boder,shuffle_icon,btnClose,btnShuffle])
    }

    HidePopup(scene){
        eventsCenter.emit('use_item','hide_popup')
        if (popup_hammer!=undefined) {
            popup_hammer.destroy()
        }
        if (popup_nodiamond!=undefined) {
            popup_nodiamond.destroy()
        }
        if (popup_switch!=undefined) {
            popup_switch.destroy()
        }
        if (popup_shuffle!=undefined) {
            popup_shuffle.destroy()
        }
    }
   
}





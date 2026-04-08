import eventsCenter from "./EventsCenter.js"
import PopupHammer from "../popup/PopupItem.js"

let popup_hammer
let scene2
export default class Tween {
    constructor()
    {


    }

    BtnClickAnim(scene,a,btnType)
        {
            scene2 = scene
            scene.tweens.add({
                targets: a,
                scale: { from : a.scale-0.15, to : a.scale},
                ease: 'Bounce',
                duration: 500,
                onComplete: onComplete.bind(scene,btnType),
            })
        }

    ObjectMove(scene,object,x,y){
        scene.tweens.add({
            targets: object,
            props: {
                x: { value: x, duration: 800, ease: 'Bounce' },
                y: { value: y, duration: 800, ease: 'Bounce' }
            },
            // position: { from : a.scale-0.15, to : a.scale},
            // ease: 'Bounce',
            // duration: 500,
            // onComplete: onComplete.bind(scene,btnType),
        })
    }

    ObjectRotation(scene,object){
        scene.tweens.addCounter({
            from: 0,
            to: 360,
            duration: 30000,
            onUpdate: function(tween) {
                object.angle = tween.getValue()
            },
            repeat : -1
        })
    }
}


function onComplete(btnType) {
    
    switch (btnType) {
        case 'hammer':
            popup_hammer = new PopupHammer()
            popup_hammer.CheckPopup(scene2,'hammer')
            break;
        case 'switch':
            popup_hammer = new PopupHammer()
            popup_hammer.CheckPopup(scene2,'switch')
            break;
        case 'shuffle':
            popup_hammer = new PopupHammer()
            popup_hammer.CheckPopup(scene2,'shuffle')
            break;
        case 'btnClose':
            // console.log('ppppppppppp')
            popup_hammer.HidePopup(scene2)     
            break;
        case 'remove_block':    
            break;
        case 'btnSound':
                 break;
        case 'btnHome':
            this.scene.start('game_menu')
            break;
        case 'btnReload':
            this.scene.start('game_play')
            break;
        case 'btnPlay':
                // const fx = this.cameras.main.postFX.addWipe(0.3, 1, 1);
                // this.scene.transition({
                //     target: 'game_play',
                //     duration: 700,
                //     moveBelow: true,
                //     onUpdate: (progress) => {
                //         fx.progress = progress;
                //     }
                //  });
                show_ad();
                this.scene.start('game_play')
                break;
        default:
            break;
    }
    
}
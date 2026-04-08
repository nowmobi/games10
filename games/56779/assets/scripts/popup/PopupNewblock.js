
const font_style={
    font: "30px Arial Black",
    fill: '#fff'
}
let tw,popup_newblock,popup_removeblock
import { GAMEOPTIONS } from "../scene/GameOption.js"
import Tween from "../plugin/TweenObject.js"
import eventsCenter from '../plugin/EventsCenter.js'

export default class PopupNewblock {
    constructor()
    {


    }

    ShowPopUpNewBlock(scene,x,y,tint,value)
    {   
        tw = new Tween()
        let txt_value = value
        let bg = scene.add.rectangle(x,y,x*2,y*2,'0x000000')
            bg.alpha = 0.9
        
        let boder = scene.add.rectangle(x,y,450,700)
            boder.setStrokeStyle(5, 0xffffff);


        let text = scene.add.text(x,350,"New Block Unlock",{
            fontFamily: 'cosmic', 
            fontSize:45
        })
            text.setOrigin(0.5,0.5)

        let light = scene.add.image(x,y,'light')
            light.alpha = 0.8
            tw.ObjectRotation(scene,light)
        
        let block = scene.add.image(x,y,'block').setScale(GAMEOPTIONS.BLOCK_SCALE_DEFAULT)
            block.tint = tint

        let star_bg = scene.add.image(block.x,block.y,'star_bg').setScale(GAMEOPTIONS.BLOCK_SCALE_DEFAULT)
        let crown = scene.add.image(block.x,block.y-65,'crown').setScale(GAMEOPTIONS.BLOCK_SCALE_DEFAULT-0.2)


        if (txt_value >1000 && txt_value < 1000000)
            {
                txt_value=Math.trunc(txt_value/1000)+"K"
        
            }
            if (txt_value >1000000){
                txt_value=Math.trunc(txt_value/1000000)+'M'
            }
        let txt = scene.add.text(x,y,txt_value,{
            fontFamily: 'cosmic', 
            fontSize:55
        })
            txt.setOrigin(0.5,0.5)

        let txt_TaptoClose = scene.add.text(x,1050,"Tap To Close",{
                fontFamily: 'cosmic', 
                fontSize:55
            })
            txt_TaptoClose.setOrigin(0.5,0.5)
            txt_TaptoClose.setInteractive()
            scene.tweens.add({
                targets: txt_TaptoClose,
                alpha: { from : txt_TaptoClose.alpha, to : 0},
                duration: 1000,
                yoyo:true,
                repeat : -1
                // onComplete: onComplete.bind(scene,btnType),
            })
            txt_TaptoClose.on('pointerdown', function () {

                // BlockClick(scene,this)
                scene.tweens.add({
                    targets: popup_newblock,
                    y: { from : popup_newblock.y, to : 2000},
                    duration: 500,
                    onComplete: function(){
                        popup_newblock.destroy()
                        PopupRemoveBlock(scene,x,y,tint,value)

                    }
                })
            });
        popup_newblock = scene.add.container(0,-1500,[bg,boder,text,light,block,txt,txt_TaptoClose,star_bg,crown])
        scene.tweens.add({
            targets: popup_newblock,
            y: { from : popup_newblock.y, to : 0},
            duration: 1000,
            ease: 'Bounce'
        })
        // popup.setScale(0.5)

    }
}


function PopupRemoveBlock(scene,x,y,tint,value){
   
    value= GAMEOPTIONS.value[0]/2
    let txt_value = value
    let bg = scene.add.rectangle(x,y,x*2,y*2,'0x000000')
            bg.alpha = 0.9
        
        let boder = scene.add.rectangle(x,y,450,700)
            boder.setStrokeStyle(5, 0xffffff);


        let text = scene.add.text(x,350,"Remove Block",{
            fontFamily: 'cosmic', 
            fontSize:55
        })
            text.setOrigin(0.5,0.5)

        let light = scene.add.image(x,y,'light')
            light.alpha = 0.8
            tw.ObjectRotation(scene,light)
        
        let block = scene.add.image(x,y,'block').setScale(GAMEOPTIONS.BLOCK_SCALE_DEFAULT)
            block.tint = GAMEOPTIONS.colors[GAMEOPTIONS.colors.length-1]


        if (txt_value >1000 && txt_value < 1000000)
                {
                    txt_value=Math.trunc(txt_value/1000)+"K"
            
                }
                if (txt_value >1000000){
                    txt_value=Math.trunc(txt_value/1000000)+'M'
                }
        let txt = scene.add.text(x,y,txt_value,{
            fontFamily: 'cosmic', 
            fontSize:35
        })
            txt.setOrigin(0.5,0.5)
        
        let btnRemoveBlock = scene.add.image(x,900,'btnRemove')
            btnRemoveBlock.setInteractive()
            btnRemoveBlock.on('pointerdown', function () {
                scene.tweens.add({
                    targets: btnRemoveBlock,
                    scale: { from : btnRemoveBlock.scale-0.15, to : btnRemoveBlock.scale},
                    ease: 'Bounce',
                    duration: 500,
                    onComplete: function(){
                        show_ad();
                        eventsCenter.emit('remove_block',value)
                        popup_removeblock.destroy()
                    }
                })
             
            });
        popup_removeblock = scene.add.container(0,0,[bg,boder,text,light,block,txt,btnRemoveBlock])


}



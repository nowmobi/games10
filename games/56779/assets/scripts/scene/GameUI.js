

let tw
import Tween from "../plugin/TweenObject.js"

export default class GameUI {
    constructor()
    {


    }

    CreateItemUI(scene){
        CreateUIHammer(scene)
        CreateUISwitch(scene)
        CreateUIShuffle(scene)

    }
    
}

function CreateUIHammer(scene){
    tw = new Tween()
    let hammer_boder = scene.add.image(0,0,'boder').setScale(0.4)
    let hammer_icon = scene.add.image(0,0,'hammer').setScale(0.35)
    let txt = scene.add.text(hammer_icon.x-15,hammer_icon.y+60,"100",{
        fontFamily: 'cosmic', 
        fontSize:35
    })
    let diamond = scene.add.image(txt.x+45,txt.y+3,'diamond1').setScale(0.4)

        txt.setOrigin(0.5,0.5)
    let btnHammer = scene.add.container(200,1130,[hammer_boder,hammer_icon,diamond,txt])
        btnHammer.setSize(hammer_boder.displayWidth,hammer_boder.displayWidth)
        btnHammer.setInteractive().on('pointerdown', function () {
            tw.BtnClickAnim(scene,btnHammer,'hammer')
        });

}

function CreateUISwitch(scene){
    tw = new Tween()
    let switch_boder = scene.add.image(0,0,'boder').setScale(0.4)
    let switch_icon = scene.add.image(0,0,'btnSwitch')
    let txt = scene.add.text(switch_icon.x-15,switch_icon.y+60,"100",{
        fontFamily: 'cosmic', 
        fontSize:35
    })
    let diamond = scene.add.image(txt.x+45,txt.y+3,'diamond1').setScale(0.4)

        txt.setOrigin(0.5,0.5)
    let btnSwitch = scene.add.container(720/2,1130,[switch_boder,switch_icon,diamond,txt])
        btnSwitch.setSize(switch_boder.displayWidth,switch_boder.displayWidth)
        btnSwitch.setInteractive().on('pointerdown', function () {
            tw.BtnClickAnim(scene,btnSwitch,'switch')
        });
}

function CreateUIShuffle(scene){
    tw = new Tween()
    let shuffle_boder = scene.add.image(0,0,'boder').setScale(0.4)
    let shuffle_icon = scene.add.image(0,0,'btnShuffle')
    let txt = scene.add.text(shuffle_icon.x-15,shuffle_icon.y+60,"200",{
        fontFamily: 'cosmic', 
        fontSize:35
    })
    let diamond = scene.add.image(txt.x+45,txt.y+3,'diamond1').setScale(0.4)
        txt.setOrigin(0.5,0.5)
    
    let btnShuffle = scene.add.container(520,1130,[shuffle_boder,shuffle_icon,diamond,txt])
        btnShuffle.setSize(shuffle_boder.displayWidth,shuffle_boder.displayWidth)
        btnShuffle.setInteractive().on('pointerdown', function () {
            tw.BtnClickAnim(scene,btnShuffle,'shuffle')
        });
}






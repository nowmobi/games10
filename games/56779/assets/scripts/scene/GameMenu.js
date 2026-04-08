
import Tween from "../plugin/TweenObject.js";
import { GAMEOPTIONS } from "./GameOption.js";

let tw,w,h

export default class GameMenu extends Phaser.Scene {

    constructor() {
        super({ key: 'game_menu' })
    }

    create()
    {
        w= 720
        h = 1280
        // let bg = this.add.rectangle(360,640,2000,2000,'0x2f0045')
        let bg = this.add.rectangle(w/2,h/2,2000,2000,'0x38B6FF')
        this.bg2= this.add.tileSprite(360,640,720,1280,'bg')

        // let bg/2 = this.add.image(w/2,h/2,'bg')
        initGameDistributionSDK(this);
        UIDiamond(this);
        UIHigthScore(this)
        UICenter(this)
        this.cameras.main.fadeIn(300, 0, 0, 0)

    }


    update(){
        this.bg2.tilePositionY += 0.5
    }
}



function UICenter(scene) {

    tw= new Tween()

    let light = scene.add.image(w/2,h/2-100,'light')
        light.alpha = 0.7
        tw.ObjectRotation(scene,light)
    let block = scene.add.image(light.x,light.y,'block').setScale(0.6)
        block.tint = GAMEOPTIONS.colors[GAMEOPTIONS.colors.length-1]

    let crown = scene.add.image(block.x,block.y - 90,'crown')
        crown.setScale(0.5)
    
    let star_bg = scene.add.image(block.x,block.y,'star_bg').setScale(0.6)
    let value = GAMEOPTIONS.value[GAMEOPTIONS.value.length-1]
    let txt = scene.add.text(block.x,block.y,value,{
            fontFamily: 'cosmic', 
            fontSize:55
        })
        txt.setOrigin(0.5,0.5)
        txt.setStroke('#000', 2);

    let btnPlay = scene.add.image(0, 800, "btnPlay").setScale(1.5).setInteractive()
        btnPlay.on('pointerdown', function (pointer) {
            // Tween.tween(scene,btnPlay,'btnPlay')
            tw.BtnClickAnim(scene,btnPlay,'btnPlay')
        })
    tw.ObjectMove(scene,btnPlay,360,800)  


}


function UIDiamond(scene) {
    // let number_diamond = localStorage.getItem('diamond')
    // if (number_diamond==null) {
    //     number_diamond=GAMEOPTIONS.START_DIAMOND
    //     // number_diamond=500
    //     localStorage.setItem('diamond',number_diamond)
    // }
    let number_diamond=GAMEOPTIONS.START_DIAMOND
    //     // number_diamond=500
    localStorage.setItem(gamesAPI.config.storageKey + 'diamond',number_diamond)
    let b = scene.add.rectangle(0, 0, 160, 40).setStrokeStyle(2, 0xffffff);
    let d = scene.add.image(b.x-55,b.y+3,'diamond1')
        d.setScale(0.5)
    let  txtDiamond= scene.add.text(d.x+25, b.y,number_diamond,{
            fontFamily: 'cosmic', 
            fontSize:30
        })
        txtDiamond.setOrigin(0,0.5)

    // let txt = scene.add.text(100,100,'test abcn ', {fontFamily: 'cosmic', fontSize:50})
    let btnDiamond = scene.add.container(620,50,[b,d,txtDiamond])
}

function UIHigthScore(scene) {
    let hightScore = localStorage.getItem(gamesAPI.config.storageKey + 'hscore')
    if (hightScore==null) {
        hightScore=0
        localStorage.setItem(gamesAPI.config.storageKey + 'hscore',hightScore)
    }
    let boder = scene.add.rectangle(0, 0, 160, 40).setStrokeStyle(2, 0xffffff);
    let crown = scene.add.image(boder.x-55,boder.y+3,'crown').setScale(0.3)
    let txtHightScore= scene.add.text(crown.x+25, boder.y,hightScore,{
        fontFamily: 'cosmic', 
        fontSize:30
    })
    txtHightScore.setOrigin(0,0.5)
    let btnHighScore = scene.add.container(100,50,[boder,crown,txtHightScore])
}
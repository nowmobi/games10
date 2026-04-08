

let tw
let w,h
import Tween from "../plugin/TweenObject.js";
export default class GameOver extends Phaser.Scene {

    constructor() {
        super({ key: 'game_over' })
    }

    create()
    {
        this.cameras.main.fadeIn(500, 0, 0, 0)

        w=720
        h=1280

        UI(this);
    }
}

function UI(scene) {
    tw= new Tween()

    let hscore = localStorage.getItem(gamesAPI.config.storageKey + 'hscore')
    let diamond = localStorage.getItem(gamesAPI.config.storageKey + 'diamond')
    if (hscore==null) hscore = 0
    let bg = scene.add.image(w/2,h/2,'bg')
    let bg_gameover = scene.add.image(w/2,-1000,'bg_gameover').setScale(1.3)
    let light = scene.add.image(w/2,600,'light').setScale(2)
        light.alpha = 0.4

    let boder = scene.add.rectangle(w/2,light.y+100,600,300)
        boder.setStrokeStyle(4, 0xffffff);
    let crown_icon = scene.add.image(200,640,'crown').setScale(0.8)
    let txtHightScore = scene.add.text(crown_icon.x+crown_icon.displayWidth*0.8/2, crown_icon.y,' : '+hscore, {
            fontFamily: 'cosmic', 
            fontSize:80
        });
        txtHightScore.setOrigin(0,0.5);
    
    let diamond_icon = scene.add.image(200,760,'diamond1').setScale(1.2)
    let txtDiamond = scene.add.text(diamond_icon.x+diamond_icon.displayWidth*1.2/2, diamond_icon.y,' : '+diamond, {
            fontFamily: 'cosmic', 
            fontSize:80
        });
        txtDiamond.setOrigin(0,0.5);



    let btnReplay = scene.add.image(w/2, 2000, "btnReplay").setScale(1.5).setInteractive()
        btnReplay.on('pointerdown', function (pointer) {
            tw.BtnClickAnim(scene,btnReplay,'btnReload')
        })

    tw.ObjectMove(scene,btnReplay,w/2,960)  
    tw.ObjectMove(scene,bg_gameover,w/2,400)  


}
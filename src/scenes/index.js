import Phaser from 'phaser';
import MainMenuScene from './scenes/MainMenuScene.js';
import KitchenScene from './scenes/KitchenScene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [MainMenuScene, KitchenScene]
};

const physics = {
    default : 'arcade',
    arcade : {
        debug : false
    }
}

const game = new Phaser.Game(config);

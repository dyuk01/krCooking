import Phaser from 'phaser';
import FarmScene from './scenes/FarmScene.js';
import KitchenScene from './scenes/KitchenScene.js';
import SaltPondScene from './scenes/SaltPondScene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [FarmScene, KitchenScene, SaltPondScene]
};

const game = new Phaser.Game(config);

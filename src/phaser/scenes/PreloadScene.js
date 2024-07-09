import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload() {
        // Load map JSON
        this.load.tilemapTiledJSON('map', 'assets/map.json');

        // Load tilesets
        this.load.image('tiles', 'assets/tileset.png');

        // Load other assets (player, resources, etc.)
        this.load.image('cucumber', 'assets/cucumber.png');
        this.load.image('salt', 'assets/salt.png');
        this.load.image('water', 'assets/water.png');
        this.load.image('chili', 'assets/chili.png');
        this.load.image('basket', 'assets/basket.png');
        this.load.image('player', 'assets/player.png');
    }

    create() {
        this.scene.start('GameScene');
    }
}

export default PreloadScene;
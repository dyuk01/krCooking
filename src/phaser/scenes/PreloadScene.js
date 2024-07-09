import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload() {
        // Load map JSON
        this.load.tilemapTiledJSON('map', 'assets/tileset/main_map.json');

        // Load tilesets
        this.load.image('water', 'src/assets/tileset/water.png');
        this.load.image('tree_rock', 'src/assets/tileset/tree_rock.png');
        this.load.image('house', 'src/assets/tileset/house.png');
        this.load.image('cave_ladder', 'src/assets/tileset/cave_ladder.png');
        this.load.image('cave_wall', 'src/assets/tileset/cave_wall.png');
        this.load.image('grass', 'src/assets/tileset/grass.png');
        this.load.image('hills', 'src/assets/tileset/hills.png');
        this.load.image('farm', 'src/assets/tileset/farm.png');

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
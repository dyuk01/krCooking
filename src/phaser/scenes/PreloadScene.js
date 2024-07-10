import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    // Load map JSON
    this.load.tilemapTiledJSON('map', 'assets/tileset/main_map.json');

    // Load tilesets
    this.load.image('tileset_water', 'assets/tileset/water.png');
    this.load.image('tileset_tree_rock', 'assets/tileset/tree_rock.png');
    this.load.image('tileset_house', 'assets/tileset/house.png');
    this.load.image('tileset_cave_ladder', 'assets/tileset/cave_ladder.png');
    this.load.image('tileset_cave_wall', 'assets/tileset/cave_wall.png');
    this.load.image('tileset_grass', 'assets/tileset/grass.png');
    this.load.image('tileset_hills', 'assets/tileset/hills.png');
    this.load.image('tileset_farm', 'assets/tileset/farm.png');

    // Load other assets (player, resources, etc.)
    this.load.image('resource_cucumber', 'assets/cucumber.png');
    this.load.image('resource_salt', 'assets/salt.png');
    this.load.image('resource_water', 'assets/water.png');
    this.load.image('resource_chili', 'assets/chili.png');
    this.load.image('basket', 'assets/basket.png');
    this.load.image('player', 'assets/player.png');
  }

  create() {
    this.scene.start('GameScene');
  }
}

export default PreloadScene;
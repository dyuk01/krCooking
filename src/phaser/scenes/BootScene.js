import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    // Load any assets needed for the preload scene
  }

  create() {
    this.scene.start('PreloadScene');
  }
}

export default BootScene;
class FarmScene extends Phaser.Scene {
    constructor() {
        super({ key: 'FarmScene' });
    }

    preload() {
        // Load assets specific to farm scene
        this.load.image('background', 'assets/images/sky.png');
    }

    create() {
        // Add background and interactive objects
        this.add.image(400, 300, 'background');
    }

    collectItem(item) {
        item.destroy();
        // Add item to inventory logic
    }

    update() {
        // Update logic for farm scene
    }
}

export default FarmScene;

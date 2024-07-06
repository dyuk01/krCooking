class FarmScene extends Phaser.Scene {
    constructor() {
        super({ key: 'FarmScene' });
    }

    preload() {
        // Load assets specific to farm scene
        this.load.image('background', 'assets/images/farm-background.png');
        this.load.image('basket', 'assets/images/basket.png');
    }

    create() {
        // Add background and interactive objects
        this.add.image(400, 300, 'background');
        const basket = this.add.sprite(100, 100, 'basket').setInteractive();
        basket.on('pointerdown', () => {
            this.collectItem(basket);
        });
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

import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    create() {
        // Create the tilemap
        const map = this.make.tilemap({ key: 'map' });

        // Add the tileset image to the map
        const tileset = map.addTilesetImage('tileset', 'tiles');

        // Create the layers (background, obstacles, etc.)
        const backgroundLayer = map.createLayer('water', tileset);
        const obstaclesLayer = map.createLayer('Obstacles', tileset);

        // Set collision on the obstacles layer
        obstaclesLayer.setCollisionByProperty({ collides: true });

        // Create player, basket, and resources
        this.player = this.physics.add.sprite(100, 100, 'player');
        this.basket = this.physics.add.staticSprite(200, 200, 'basket');

        this.resources = this.physics.add.group({
            key: ['cucumber', 'salt', 'water', 'chili'],
            repeat: 10,
            setXY: { x: 20, y: 20, stepX: 70 }
        });

        // Add collisions
        this.physics.add.collider(this.player, obstaclesLayer);
        this.physics.add.collider(this.player, this.resources, this.collectResource, null, this);
        this.physics.add.overlap(this.player, this.basket, this.storeResource, null, this);

        // Enable cursor input
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        // Handle player movement
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
        } else {
            this.player.setVelocityX(0);
        }

        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-160);
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(160);
        } else {
            this.player.setVelocityY(0);
        }
    }

    collectResource(player, resource) {
        resource.disableBody(true, true);
        // Update React state with collected resource
        window.dispatchEvent(new CustomEvent('resource-collected', { detail: resource.texture.key }));
    }

    storeResource(player, basket) {
        // Handle storing resources and dish creation logic
        window.dispatchEvent(new Event('store-resource'));
    }
}

export default GameScene;
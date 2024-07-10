import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    create() {
        // Create the tilemap
        const map = this.make.tilemap({ key: 'map' });

        // Add the tileset images to the map
        const tilesetWater = map.addTilesetImage('water', 'tileset_water');
        const tilesetTreeRock = map.addTilesetImage('tree_rock', 'tileset_tree_rock');
        const tilesetHouse = map.addTilesetImage('house', 'tileset_house');
        const tilesetCaveLadder = map.addTilesetImage('cave_ladder', 'tileset_cave_ladder');
        const tilesetCaveWall = map.addTilesetImage('cave_wall', 'tileset_cave_wall');
        const tilesetGrass = map.addTilesetImage('grass', 'tileset_grass');
        const tilesetHills = map.addTilesetImage('hills', 'tileset_hills');
        const tilesetFarm = map.addTilesetImage('farm', 'tileset_farm');

        // Create the layers (background, obstacles, etc.)
        const landLayer = map.createLayer('land', tilesetGrass);
        const waterLayer = map.createLayer('water', tilesetWater);
        const landDecoLayer = map.createLayer('land_deco', [tilesetGrass, tilesetTreeRock]);
        const houseFloorLayer = map.createLayer('house_floor', tilesetHouse);
        const houseWallLayer = map.createLayer('house_wall', tilesetHouse);
        const hillLayer = map.createLayer('hill', tilesetHills);
        const farmLayer = map.createLayer('farm', tilesetFarm);
        const mineLayer = map.createLayer('mine', tilesetCaveWall);
        const treesLayer = map.createLayer('trees', tilesetTreeRock);
        const plantsLayer = map.createLayer('plants', tilesetTreeRock);

        // Create player
        this.player = this.physics.add.sprite(100, 100, 'player');

        // Create player animations (if needed)
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.player.anims.play('walk');

        // Create basket and resources
        this.basket = this.physics.add.staticSprite(200, 200, 'basket');

        this.resources = this.physics.add.group({
            key: ['resource_cucumber', 'resource_salt', 'resource_water', 'resource_chili'],
            repeat: 10,
            setXY: { x: 20, y: 20, stepX: 70 }
        });

        // Add collisions
        // this.physics.add.collider(this.player, obstaclesLayer);
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
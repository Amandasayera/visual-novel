const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false // Set to true for debugging physics
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let background;
let foreground;
let player;
let textGroup;
let cursors;

const triggerPoints = [
    { x: 600, y: window.innerHeight / 2, content: "Welcome to the adventure!", range: 50 },
    { x: 800, y: 300, content: "Hello, adventurer!", range: 100 },
    { x: 1000, y: 700, content: "Welcome to the enchanted meadow!", range: 50 },
    // Add more trigger points as needed
];

function preload() {
    this.load.image('background', './img/wormworld2.png');
    this.load.image('player', './img/orb1.png');
    this.load.image('foreground', './img/.png');
    this.load.image('arrow', './img/mask.png');
   
}

function create() {
    this.physics.world.setBounds(0, 0, 2000, 13000);

    background = this.add.image(0, 0, 'background').setOrigin(0, 0);

    player = this.physics.add.sprite(200, window.innerHeight / 2, 'player').setOrigin(0.5, 0.5);
    player.setCollideWorldBounds(true);

    foreground = this.add.image(0, 0, 'foreground').setOrigin(0, 0);

    this.cameras.main.setBounds(0, 0, 2000, 13000);
    this.cameras.main.startFollow(player, false, 0.5, 0.5);

    textGroup = this.add.group();

    cursors = this.input.keyboard.createCursorKeys();

    // Create the first image button at coordinates (600, 500)
    const button1 = this.add.image(8944, 600, 'wormholebuttonbutton');
    button1.setOrigin(0.5);
    button1.setScale(0.5);

    const buttonText1 = this.add.text(600, 500, 'Yes 1', { color: '#000', fontSize: '20px' }).setOrigin(0.5);

    button1.setInteractive();
    button1.on('pointerdown', function () {
        console.log('Button 1 Clicked!');
        // Redirect to the desired page for button 1
        window.location.href = 'dirt.html';
    });

    const buttonGroup1 = this.add.group();
    buttonGroup1.add(button1);
    buttonGroup1.add(buttonText1);

    // Create the second image button at coordinates (800, 500)
    const button2 = this.add.image(11700, 500, 'mushroomyesbutton');
    button2.setOrigin(0.5);
    button2.setScale(0.5);

    const buttonText2 = this.add.text(800, 500, 'Yes 2', { color: '#000', fontSize: '20px' }).setOrigin(0.5);

    button2.setInteractive();
    button2.on('pointerdown', function () {
        console.log('Button 2 Clicked!');
        // Redirect to the desired page for button 2
        window.location.href = 'forestgamecont.html';
    });

    const buttonGroup2 = this.add.group();
    buttonGroup2.add(button2);
    buttonGroup2.add(buttonText2);



    
    const button3 = this.add.image(170, 100, 'arrow');
    button1.setOrigin(0.5);
    button1.setScale(0.5);

    const buttonText3 = this.add.text(600, 500, 'Yes 1', { color: '#000', fontSize: '20px' }).setOrigin(0.5);

    button3.setInteractive();
    button3.on('pointerdown', function () {
        console.log('Button 3 Clicked!');
        currentPage = 'biome.html';
        history.pushState({ page: currentPage }, null, currentPage);
        window.location.href = currentPage;
    });

    const buttonGroup3 = this.add.group();
    buttonGroup3.add(button3);
    buttonGroup3.add(buttonText3);


    
}



function createText(x, y, content) {
    const text = this.add.text(x, y, content, {
        fontFamily: '"ocr-a-std", monospace',
        fontSize: 20,
        color: '#ffff00',

        padding: {
            top: 5,
            bottom: 5,
            left: 10,
            right: 10
        }
    }).setOrigin(0.5);

    textGroup.add(text);

    // Set a timer to destroy the text after a certain duration (e.g., 2000 milliseconds or 2 seconds)
    this.time.delayedCall(1000, () => {
        text.destroy();
    });
}

function checkTriggers() {
    const playerX = player.x;
    const playerY = player.y;

    for (const point of triggerPoints) {
        const { x, y, content, range } = point;

        if (Math.abs(playerX - x) < range && Math.abs(playerY - y) < range) {
            createText.call(this, x, y, content);
        }
    }
}

function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-300);
    } else if (cursors.right.isDown) {
        player.setVelocityX(300);
    } else {
        player.setVelocityX(0);
    }

    if (cursors.up.isDown) {
        player.setVelocityY(-300);
    } else if (cursors.down.isDown) {
        player.setVelocityY(300);
    } else {
        player.setVelocityY(0);
    }

    checkTriggers.call(this);
}

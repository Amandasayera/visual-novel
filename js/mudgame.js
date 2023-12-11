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

let currentPage = 'biome.html'; // Set the default page

const game = new Phaser.Game(config);

let background;
let foreground;
let player;
let textGroup;
let cursors;

const triggerPoints = [
    { x: 1750, y: window.innerHeight / 2, content: ".", range: 50 },
    { x: 2856, y: 300, content: "You have landed in the Sundarbans", range: 200 },
    { x: 5380, y:300, content: "Our home, the Subdarbans in Bangladesh", range: 200 },
    { x: 5470, y:330, content: "is the largest mangrove in the world", range: 200 },
    { x: 5800, y:300, content: "Mangroves absorb 5 times the amount", range: 200 },
    { x: 5800, y:330, content: "of carbon than other forest types", range: 200 },
    { x: 8200, y:300, content: "Its fed with water from the Ganges Delta river", range: 200 },
    { x: 8870, y:300, content: "Hey you", range: 100 },
    { x: 9100, y:340, content: "Name´s Muddy, Mudskipper", range: 200 },
    { x: 10517, y:300, content: "I´m a fish created in the deep waters", range: 100 },
    { x: 10600, y:340, content: "And slowly, I evolved to be able", range: 100 },
    { x: 10740, y:380, content: "to breathe both in water and on land", range: 100 },
  
    // Add more trigger points as needed
];

function preload() {
    this.load.image('background', './img/mudworld1wip.png');
    this.load.image('player', './img/orb1.png');
    this.load.image('foreground', './img/mudworld1wiptrans.png');
    this.load.image('mudbutton', './img/mudbutton2.png');
    this.load.image('mushroomyesbutton', './img/yesmud.png');
    this.load.image('arrow', './img/mudarrow.png');
}

function create() {
    this.physics.world.setBounds(0, 0, 15000, 1000);

    background = this.add.image(0, 0, 'background').setOrigin(0, 0);

    player = this.physics.add.sprite(200, window.innerHeight / 2, 'player').setOrigin(0.5, 0.5);
    player.setCollideWorldBounds(true);

    foreground = this.add.image(0, 0, 'foreground').setOrigin(0, 0);

    this.cameras.main.setBounds(0, 0, 15000, 1000);
    this.cameras.main.startFollow(player, false, 0.5, 0.5);

    textGroup = this.add.group();

    cursors = this.input.keyboard.createCursorKeys();

    const button1 = this.add.image(14780, 500, 'mudbutton');
    button1.setOrigin(0.5);
    button1.setScale(0.5);

    const buttonText1 = this.add.text(600, 500, '.', { color: '#000', fontSize: '2px' }).setOrigin(0.5);

    button1.setInteractive();
    button1.on('pointerdown', function () {
        console.log('Button 1 Clicked!');
        currentPage = 'mudskippergamecont.html';
        history.pushState({ page: currentPage }, null, currentPage);
        window.location.href = currentPage;
    });

    const buttonGroup1 = this.add.group();
    buttonGroup1.add(button1);
    buttonGroup1.add(buttonText1);

    const button2 = this.add.image(14400, 600, 'mushroomyesbutton');
    button2.setOrigin(0.5);
    button2.setScale(0.5);

    const buttonText2 = this.add.text(800, 500, '.', { color: '#000', fontSize: '2px' }).setOrigin(0.5);

    button2.setInteractive();
    button2.on('pointerdown', function () {
        console.log('Button 2 Clicked!');
        currentPage = 'evolution.html';
        history.pushState({ page: currentPage }, null, currentPage);
        window.location.href = currentPage;
    });

    const buttonGroup2 = this.add.group();
    buttonGroup2.add(button2);
    buttonGroup2.add(buttonText2);

    


    const button3 = this.add.image(100, 60, 'arrow');
    button1.setOrigin(0.5);
    button1.setScale(0.5);

    const buttonText3 = this.add.text(600, 500, '.', { color: '#000', fontSize: '2px' }).setOrigin(0.5);

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

window.addEventListener('popstate', function (event) {
    if (event.state) {
        currentPage = event.state.page;
    } else {
        // If there's no state, set the default page (biomes.html in this case)
        currentPage = 'biome.html';
    }
    
    // Navigate to the updated currentPage
    window.location.href = currentPage;
});


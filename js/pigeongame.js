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
    { x: 10000, y: window.innerHeight / 2, content: ".", range: 50 }, // Beginning of the image
    { x: 10000, y: 300, content: ".", range: 100 }, // Adjusted range for the second point
    { x: 10000, y: 700, content: ".", range: 50 },
    // Add more trigger points as needed
];


function preload() {
    this.load.image('background', './img/pigeonbackground.png');
    this.load.image('player', './img/orb1.png');
    this.load.image('foreground', './img/pigeonbackgroundtrans.png');
    this.load.image('testbuttons', './img/pig1.png'); // Adjust the path accordingly
    this.load.image('mushroomyesbutton', './img/pig2.png'); // Adjust the path accordingly
    this.load.image('mushroomnobutton', './img/pig3.png'); // Adjust the path accordingly
    this.load.image('kiwibutton', './img/pig4.png'); // Adjust the path accordingly
    this.load.image('arrow', './img/pigarrow.png');

}


function create() {
    this.physics.world.setBounds(0, 0, 12000, 2000);


    background = this.add.image(0, 0, 'background').setOrigin(0, 0);


    player = this.physics.add.sprite(200, window.innerHeight / 2, 'player').setOrigin(0.5, 0.5);
    player.setCollideWorldBounds(true);


    foreground = this.add.image(0, 0, 'foreground').setOrigin(0, 0);
    this.physics.add.collider(player, foreground); // Enable collision with foreground


    this.cameras.main.setBounds(0, 0, 12000, 2000);
    this.cameras.main.startFollow(player, false, 0.5, 0.5);


    textGroup = this.add.group();


    cursors = this.input.keyboard.createCursorKeys();


    // Create the first image button at coordinates (600, 500)
    const button1 = this.add.image(270, 500, 'testbuttons');
    button1.setOrigin(0.5);
    button1.setScale(0.5);


    // Add the hover effect to make the button spin
    button1.setInteractive();
    button1.on('pointerover', function () {
        this.clearTint(); // Clear the tint on pointer over
        this.scene.tweens.add({
            targets: this,
            rotation: Math.PI * 2, // Rotate 360 degrees
            ease: 'Linear',
            duration: 2500, // Animation duration in milliseconds
            repeat: 0, // Set to 0 for no repetition
        });
    });






    const buttonText1 = this.add.text(600, 500, '.', { color: '#000', fontSize: '2px' }).setOrigin(0.5);

    button1.setInteractive();
    button1.on('pointerdown', function () {
        console.log('Button 1 Clicked!');
        // Redirect to the desired page for button 1
        window.location.href = 'duva1.html';
    });

    const buttonGroup1 = this.add.group();
    buttonGroup1.add(button1);
    buttonGroup1.add(buttonText1);

    // Create the second image button at coordinates (800, 500)
    const button2 = this.add.image(700, 100, 'mushroomyesbutton');
    button2.setOrigin(0.5);
    button2.setScale(0.5);


    // Add the hover effect to make the button spin
    button2.setInteractive();
    button2.on('pointerover', function () {
        this.clearTint(); // Clear the tint on pointer over
        this.scene.tweens.add({
            targets: this,
            rotation: Math.PI * 2, // Rotate 360 degrees
            ease: 'Linear',
            duration: 2500, // Animation duration in milliseconds
            repeat: 0, // Set to 0 for no repetition
        });
    });


    const buttonText2 = this.add.text(800, 500, '.', { color: '#000', fontSize: '2px' }).setOrigin(0.5);

    button2.setInteractive();
    button2.on('pointerdown', function () {
        console.log('Button 2 Clicked!');
        // Redirect to the desired page for button 2
        window.location.href = 'duva2.html';
    });

    const buttonGroup2 = this.add.group();
    buttonGroup2.add(button2);
    buttonGroup2.add(buttonText2);

    // Create the third image button at coordinates (800, 500)
    const button3 = this.add.image(800, 400, 'mushroomnobutton');
    button3.setOrigin(0.5);
    button3.setScale(0.5);

    // Add the hover effect to make the button spin
    button3.setInteractive();
    button3.on('pointerover', function () {
        this.clearTint(); // Clear the tint on pointer over
        this.scene.tweens.add({
            targets: this,
            rotation: Math.PI * 2, // Rotate 360 degrees
            ease: 'Linear',
            duration: 2500, // Animation duration in milliseconds
            repeat: 0, // Set to 0 for no repetition
        });
    });







    const buttonText3 = this.add.text(900, 500, '.', { color: '#000', fontSize: '2px' }).setOrigin(0.5);

    button3.setInteractive();
    button3.on('pointerdown', function () {
        console.log('Button 3 Clicked!');
        // Redirect to the desired page for button 3
        window.location.href = 'pigeon3.html';
    });

    const buttonGroup3 = this.add.group();
    buttonGroup3.add(button3);
    buttonGroup3.add(buttonText3);

    // Create the fourth image button at coordinates (800, 500)
    const button4 = this.add.image(1200, 250, 'kiwibutton');
    button4.setOrigin(0.5);
    button4.setScale(0.5);


    // Add the hover effect to make the button spin
    button4.setInteractive();
    button4.on('pointerover', function () {
        this.clearTint(); // Clear the tint on pointer over
        this.scene.tweens.add({
            targets: this,
            rotation: Math.PI * 2, // Rotate 360 degrees
            ease: 'Linear',
            duration: 2500, // Animation duration in milliseconds
            repeat: 0, // Set to 0 for no repetition
        });
    });


    const buttonText4 = this.add.text(800, 500, '.', { color: '#000', fontSize: '2px' }).setOrigin(0.5);

    button4.setInteractive();
    button4.on('pointerdown', function () {
        console.log('Button 4 Clicked!');
        // Redirect to the desired page for button 4
        window.location.href = 'pigeon4.html';
    });

    const buttonGroup4 = this.add.group();
    buttonGroup4.add(button4);
    buttonGroup4.add(buttonText4);



    const button5 = this.add.image(70, 45, 'arrow');
    button5.setOrigin(0.5);
    button5.setScale(0.5);

    const buttonText5 = this.add.text(600, 500, '.', { color: '#000', fontSize: '2px' }).setOrigin(0.5);

    button5.setInteractive();
    button5.on('pointerdown', function () {
        console.log('Button 5 Clicked!');
        currentPage = 'biome.html';
        history.pushState({ page: currentPage }, null, currentPage);
        window.location.href = currentPage;
    });

    const buttonGroup5 = this.add.group();
    buttonGroup5.add(button5);
    buttonGroup5.add(buttonText5);






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


        // Adjust the range based on the individual trigger point
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

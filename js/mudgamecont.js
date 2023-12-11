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
    { x: 490, y: window.innerHeight / 2, content: "underwater I don´t see very well!", range: 200 }, // Beginning of the image
    { x: 500, y: 340, content: "Much like your eyes, my eyesight is adapted to land", range: 200 }, // Adjusted range for the second point
    { x: 1027, y: 300, content: "I´m also the only fish in the world that blinks!", range: 200 }, // Adjusted range for the second point
    { x: 1300, y: 360, content: "I need to keep my eyes moist when i´m on land", range: 200 }, // Adjusted range for the second point
    { x: 2200, y: 300, content: "What am I up to, you ask?", range: 200 },
    { x: 2623, y: 300, content: "I´,m just a dad guarding my lil eggs in my cozy mud-burrow", range: 200 },
    { x: 3200, y: 300, content: "Alrighty, enough about that", range: 200 },
    { x: 3785, y: 300, content: "Time for dinner now, don´t you think?", range: 200 },
    { x: 4300, y: 350, content: "Let me show you my favourite food", range: 200 },
    { x: 6629, y: 300, content: "What´s your favourite food?", range: 200 },
    { x: 7000, y: 350, content: "...I sure hope it´s not this...", range: 200 },
    { x: 9000, y: 350, content: "Speaking of humans...", range: 200 },
    { x: 10700, y: 300, content: "Scientists use me as a tool to measure water pollution", range: 200 },
    { x: 10800, y: 390, content: "toxic chemicals collect in my gills", range: 200 },
    { x: 11300, y: 300, content: "...Either way", range: 200 },
    { x: 11300, y: 350, content: "you wanna know something really important?", range: 200 },
    { x: 13480, y: 300, content: "Now, I just have a last question for you", range: 100 },
    { x: 14000, y: 430, content: "Will you watch the moon with me for a moment?", range: 100 },
    
    // Add more trigger points as needed
];


function preload() {
    this.load.image('background', './img/mudworld2wip.png');
    this.load.image('player', './img/orb1.png');
    this.load.image('foreground', './img/mudworld2wiptrans.png');
    this.load.image('arrow', './img/mudarrow.png');
    this.load.image('mudbutton', './img/mudarrow.png');
    
 

   
   
    
    
}


function create() {
    this.physics.world.setBounds(0, 0, 15898, 1000);

    background = this.add.image(0, 0, 'background').setOrigin(0, 0);

    player = this.physics.add.sprite(200, window.innerHeight / 2, 'player').setOrigin(0.5, 0.5);
    player.setCollideWorldBounds(true);

    foreground = this.add.image(0, 0, 'foreground').setOrigin(0, 0);





    this.cameras.main.setBounds(0, 0, 15898, 1000);
    this.cameras.main.startFollow(player, false, 0.5, 0.5);

    textGroup = this.add.group();

    cursors = this.input.keyboard.createCursorKeys();

    // Create the first image button at coordinates (600, 500)
    const button1 = this.add.image(15700, 500, 'mudbutton');
    button1.setOrigin(0.5);
    button1.setScale(0.5);

    const buttonText1 = this.add.text(600, 500, 'Yes 1', { color: '#000', fontSize: '20px' }).setOrigin(0.5);

    button1.setInteractive();
    button1.on('pointerdown', function () {
        console.log('Button 1 Clicked!');
        // Redirect to the desired page for button 1
        window.location.href = 'mudgamecont.html';
    });

    const buttonGroup1 = this.add.group();
    buttonGroup1.add(button1);
    buttonGroup1.add(buttonText1);


    


    const button3 = this.add.image(100, 80, 'arrow');
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




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

// ... Your other Phaser code

// Add a new HTML element for the visual novel
const visualNovelContainer = document.createElement('div');
visualNovelContainer.id = 'visual-novel-container';
visualNovelContainer.innerHTML = `
    <!-- Copy your visual novel HTML here -->
`;
document.body.appendChild(visualNovelContainer);

// Adjust styling based on your needs
visualNovelContainer.style.position = 'absolute';
visualNovelContainer.style.top = '0';
visualNovelContainer.style.left = '0';

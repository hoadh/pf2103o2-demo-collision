let gameScreen = document.getElementById("game_screen");
let context = gameScreen.getContext("2d");

const height = 500, width = 800;

let game = new Game(width, height, context);
game.start();

window.addEventListener("keydown", function(e) {
    let keyCode = e.keyCode;
    switch (keyCode) {
        case 37: game.movePlayerLeft(); break;
        case 39: game.movePlayerRight(); break;
    }
});
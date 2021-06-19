let gameScreen = document.getElementById("game_screen");
let context = gameScreen.getContext("2d");

const height = 500, width = 800;

let game = new Game(width, height, context);
game.start();
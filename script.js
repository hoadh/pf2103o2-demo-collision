let gameScreen = document.getElementById("game_screen");
let context = gameScreen.getContext("2d");

const height = 500, width = 500;

let game = new Game(height, width, context);
game.start();
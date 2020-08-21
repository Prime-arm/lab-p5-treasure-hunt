const game = new Game();

function preload () {
  game.preloadGame();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setupGame();
}

function draw() {
  clear();
  game.drawGrid();
  game.drawGame();
}

function keyPressed() {
  game.player.moveDown();
  game.player.moveUp();
  game.player.moveRight();
  game.player.moveLeft();
}

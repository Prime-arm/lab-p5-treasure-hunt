class Game {
constructor() {
  this.gridx = 0;
  this.gridy = 0;
}

preloadGame() {
  this.playerImage = loadImage('../assets/character-down.png');
}

setupGame() {
  this.player = new Player;
  this.player.image = this.playerImage;
}

  drawGrid() {
    // Iteration 1
    for (let i = 0; i <= WIDTH; i += 100) {
      line(i, 0, i, WIDTH);
      line(0, i, HEIGHT, i);
    }
    
  }

  drawGame() {
    this.player.drawPlayer();
  } 
}
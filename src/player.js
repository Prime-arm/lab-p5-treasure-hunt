class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.image
    }
  
    moveUp() {
      if (keyCode === 87) {
        this.y -= 100
      }
    }
  
    moveDown() {
      if (keyCode === 83) {
        this.y += 100
      }
    }
  
    moveRight() {
      if (keyCode === 65) {
        this.x -= 100
      }
    }
  
    moveLeft() {
      if (keyCode === 68) {
        this.x += 100
      }
    }
  
    drawPlayer () {
      image(this.image, this.x, this.y, 100, 100);
    }
  }
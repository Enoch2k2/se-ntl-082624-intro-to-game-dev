class Player {
  constructor() {
    this.x = (game.width / 2) - 20;
    this.y = (game.height / 2) - 20;
    this.width = 40;
    this.height = 40;
    this.color = 'blue'
    this.speed = 1.5
    this.facing = 'up'
    this.moving = false
  }

  update() {
    if(this.moving) {
      this.move()
      this.boundary()
    }
  }

  draw() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  move() {
    switch(this.facing) {
      case 'up':
        this.y -= this.speed
        break;
      case 'down':
        this.y += this.speed
        break;
      case 'left':
        this.x -= this.speed
        break;
      case 'right':
        this.x += this.speed
        break;
    }
  }

  boundary() {
    // make sure the player movement is valid
    if(player.x <= 0) {
      player.x = 0
    } else if ((player.x + player.width) >= game.width) {
      player.x = game.width - player.width
    } else if (player.y <= 0) {
      player.y = 0
    } else if ((player.y + player.height) >= game.height) {
      player.y = game.height - player.height
    }
  }
}
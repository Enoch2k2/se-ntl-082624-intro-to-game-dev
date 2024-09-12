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
    this.canFire = true
    this.fireDelay = 250
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

  shootLaser() {
    const offset = 1
    let laserbeam
    if(this.canFire) {
      this.canFire = false
      setTimeout(() => this.canFire = true, this.fireDelay)
      switch(player.facing) {
        case "up":
          laserbeam = new LaserBeam(
            player.x + (player.width / 2) - 3.5,
            player.y - (30 + offset),
            7,
            30,
            player.facing
          )
          laserbeams.push(laserbeam)
          break
        case "down":
          laserbeam = new LaserBeam(
            player.x + (player.width / 2) - 3.5,
            player.y + player.height + offset,
            7,
            30,
            player.facing
          )
          laserbeams.push(laserbeam)
          break
        case "left":
          laserbeam = new LaserBeam(
            player.x - (30 + offset),
            player.y + (player.height / 2) - 3.5,
            30,
            7,
            player.facing
          )
          laserbeams.push(laserbeam)
          break
        case "right":
          laserbeam = new LaserBeam(
            player.x + player.height + offset,
            player.y + (player.height / 2) - 3.5,
            30,
            7,
            player.facing
          )
          laserbeams.push(laserbeam)
          break
      }
    }
  }
}
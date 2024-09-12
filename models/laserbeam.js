class LaserBeam {
  constructor(x, y, width, height, direction) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.direction = direction
    this.speed = 3
    this.color = "green"
  }

  update() {
    let idx = laserbeams.indexOf(this)
    switch(this.direction) {
      case "up":
        this.y -= this.speed
        if(this.y + this.height <= 0) {
          laserbeams.splice(idx, 1)
        }
        
        break
      case "down":
        this.y += this.speed
        if(this.y >= game.height) {
          laserbeams.splice(idx, 1)
        }
        break
      case "left":
        this.x -= this.speed
        if(this.x + this.width <= 0) {
          laserbeams.splice(idx, 1)
        }
        break
      case "right":
        this.x += this.speed
        if(this.x >= game.width) {
          laserbeams.splice(idx, 1)
        }
        break
    }
  }

  draw() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

}
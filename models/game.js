class Game {
  constructor() {
    this.backgroundColor = 'black'
    this.width = 800
    this.height = 600
  }

  update() {

  }

  draw() {
    ctx.fillStyle = this.backgroundColor
    ctx.fillRect(0, 0, this.width, this.height)
  }
}
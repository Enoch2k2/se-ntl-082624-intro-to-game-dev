function setupControls() {
  document.addEventListener('keydown', movePlayer)
  document.addEventListener('keyup', stopPlayer)
}

function  movePlayer(e) {
  switch(e.which) {
    case W_KEY:
      player.facing = "up"
      player.moving = true
      break;
    case S_KEY:
      player.facing = "down"
      player.moving = true
      break;
    case A_KEY:
      player.facing = "left"
      player.moving = true
      break;
    case D_KEY:
      player.facing = "right"
      player.moving = true
      break;
  }
}

function stopPlayer(e) {
  switch(e.which) {
    case W_KEY:
      player.moving = false
      break;
    case S_KEY:
      player.moving = false
      break;
    case A_KEY:
      player.moving = false
      break;
    case D_KEY:
      player.moving = false
      break;
  }
}

function update() {
  game.update()
  player.update()
}

function draw() {
  game.draw()
  player.draw()
}

function gameLoop() {
  update()
  draw()
  animate(gameLoop)
}

function setup() {
  game = new Game()
  player = new Player()
  setupControls()
  animate(gameLoop)
}

setup()
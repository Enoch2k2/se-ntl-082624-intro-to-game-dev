function setupControls() {
  document.addEventListener('keydown', playerControlsDown)
  document.addEventListener('keyup', stopPlayer)
}

function  playerControlsDown(e) {
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
    case SPACEBAR:
      player.shootLaser()
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
  laserbeams.forEach(laserbeam => laserbeam.update())
}

function draw() {
  game.draw()
  player.draw()
  laserbeams.forEach(laserbeam => laserbeam.draw())
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
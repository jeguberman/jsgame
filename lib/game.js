class Game {

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

}

Game.BG_COLOR = "#000000";
Game.WIDTH = 600;
Game.HEIGHT = 600;
Game.FPS = 32;

module.exports = Game;

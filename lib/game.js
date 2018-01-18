import MovingObject from './moving_object';
import Controller from './controller';


class Game {

  constructor(){
    this.allObjects = [this.createObject()];
  }

  createObject(){
    return (
      new MovingObject({
        pos: [40,40],
        vel: [1,0],
        width: 20,
        height: 40
      })
    );
  }



  step(delta){
    this.allObjects.forEach(
      (object) => object.move(delta)
    );
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.WIDTH, Game.HEIGHT);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.WIDTH, Game.HEIGHT);

    this.allObjects.forEach((object) => {
      object.draw(ctx);
    });
  }

}

Game.BG_COLOR = "#000000";
Game.WIDTH = 600;
Game.HEIGHT = 600;
Game.FPS = 60;

const NORMAL_TIME_FRAME_DELTA = 1000/Game.FPS;

module.exports = Game;

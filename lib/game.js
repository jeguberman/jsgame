import MovingObject from './moving_object';
import Controller from './controller';



class Game {

  constructor(){
    this.movingObjects = [
      new MovingObject({
        pos: [150,150],
        vel: [1,0],
        width: 20,
        height: 40,
      }),
      new MovingObject({
        pos: [450,450],
        vel: [-1,-4],
        width: 20,
        height: 40
      })
    ];

    this.staticObjects = [
      new MovingObject({
        pos:[0,500],
        width: 300,
        height: 10,

      })
    ];
    this.controls();

  }

  controls(){
    document.addEventListener('keydown',(e)=>{
      switch (e.key){
        case 'ArrowUp':
        console.log("up!");
        break;
        case 'ArrowDown':
        console.log("down!");
        break;
        case 'ArrowLeft':
        console.log("left!");
        break;
        case 'ArrowRight':
        console.log("right!");
        break;
      }
    },false);
  }

  createObject(x,y){
    return (
      new MovingObject({
        pos: [150,150],
        vel: [1,0],
        width: 20,
        height: 40,
        rotation: 0.01
      })
    );
  }



  step(delta){
    this.movingObjects.forEach(
      (object) => object.move(delta)
    );
  }

  drawCosmo(ctx){
    ctx.save();
    ctx.translate(Game.WIDTH/2, Game.HEIGHT/2);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(-10, -15, 10, 30 );
    ctx.restore();
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.WIDTH, Game.HEIGHT);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.WIDTH, Game.HEIGHT);

    this.drawCosmo(ctx);

    this.movingObjects.forEach((object) => {
      object.draw(ctx);
    });

    this.staticObjects.forEach((object) => {
      object.draw(ctx);
    });

    // ctx.rotate(0.01);


  }

}

Game.BG_COLOR = "#000000";
Game.WIDTH = 600;
Game.HEIGHT = 600;
Game.FPS = 60;

const NORMAL_TIME_FRAME_DELTA = 1000/Game.FPS;

module.exports = Game;

import MovingObject from './moving_object';




class Game {

  constructor(){
    this.allObjects = [
      new MovingObject({
        pos: [150,150],
        width: 20,
        height: 40,
      }),
      new MovingObject({
        pos: [450,450],
        width: 20,
        height: 40,
      })
    ];
    this.controls();

  }

  controls(){
    document.addEventListener('keydown',(e)=>{
      switch (e.key){
        case 'ArrowUp':
        this.allObjects.forEach(
          (obj) => obj.accelerate(1,-1)
        );
        break;

        case 'ArrowDown':
        this.allObjects.forEach(
          (obj) => obj.accelerate(1,1)
        );
        break;
      }
    },false);

    document.addEventListener('keyup',(e)=>{
      switch (e.key){
        case 'ArrowUp':
        this.allObjects.forEach(
          (obj) => obj.accelerate([0,-1])
        );
        break;

        case 'ArrowDown':
        this.allObjects.forEach(
          (obj) => obj.accelerate([0,1])
        );
        break;
      }
    },false);
  }





  step(delta){
    this.moveObjs(delta);
  }

  moveObjs(delta){
    this.allObjects.forEach(
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

    this.allObjects.forEach((object) => {
      object.draw(ctx);
    });

    // ctx.rotate(0.01);


  }

}

Game.BG_COLOR = "#000000";
Game.WIDTH = 600;
Game.HEIGHT = 600;
Game.FPS = 60;
Game.MAX_SPEED = 10;

const NORMAL_TIME_FRAME_DELTA = 1000/Game.FPS;

module.exports = Game;

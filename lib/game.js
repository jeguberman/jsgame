import MovingObject from './moving_object';
import Controller from './controller';




class Game {

  constructor(){
    this.movingObjects = [
      new MovingObject({
        pos: [150,150],
        vel: [0,1],
        width: 20,
        height: 40,
      }),
      // new MovingObject({
      //   pos: [450,450],
      //   vel: [-1,-4],
      //   width: 20,
      //   height: 40
      // })
    ];

    this.player = new MovingObject({
      pos: [150, 300],
      vel: [0,1],
      width: 20,
      height: 60,
      color: '#dd4444'
    });

    this.staticObjects = [
      new MovingObject({
        pos: [0,420],
        vel: [0,1],
        width: 200,
        height: 40,
        color: '#a11aaa'

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


  step(delta){
    this.moveObjects(delta);
    this.checkCollisions();
  }

  moveObjects(delta){
    this.player.move(delta);

    this.movingObjects.forEach(
      (object) => object.move(delta)
    );
  }

  checkCollisions(){
    this.staticObjects.forEach(
      (obj) => this.player.checkCollisions(obj)
    );
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.WIDTH, Game.HEIGHT);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.WIDTH, Game.HEIGHT);


    this.player.draw(ctx);

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

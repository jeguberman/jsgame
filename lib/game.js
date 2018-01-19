import MovingObject from './moving_object';
import Controller from './controller';
import Player from './player';


class Game {

  constructor(){
    this.allObjects = [
      new Player({game: this}),
      new MovingObject({
        pos: [150,150],
        vel: [0,1],
        width: 20,
        height: 40,
        game: this
      }),
      new MovingObject({
        pos: [0,420],
        vel: [0,0],
        width: 400,
        height: 40,
        color: '#a11aaa',
        game: this,
        static: true,
        name: "ground"
      })
    ];

    this.player = this.allObjects[0];
    this.gravity = 0.02;

    this.controls();

  }

  controls(){
    document.addEventListener('keydown',(e)=>{
      this.player.handleKeys(e.key);
    },true);

    // document.addEventListener('keyup',(e)=>{
    //   this.player.handleKeys(e.key);
    // },false);
  }


  step(delta){
    this.moveObjects(delta);
    this.checkCollisions();
  }

  moveObjects(delta){
    this.allObjects.forEach(
      (object) => object.move(delta)
    );
  }

  checkCollisions(){
    this.allObjects.forEach(
      (objA) => {
        this.allObjects.forEach(
          (objB) => {
            objA.checkCollisions(objB);
          }
        );
      }
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

import MovingObject from './moving_object';
import Controller from './controller';
import Player from './player';


class Game {

  constructor(){
    this.allObjects = [
      new Player({game: this}),

      new MovingObject({
        pos: [100,320],
        vel: [0,0],
        width: 300,
        height: 40,
        color: '#a11aaa',
        game: this,
        static: true,
        name: "leftground"
      }),


    ];

    this.player = this.allObjects[0];
    this.gravity = 0.02;

    this.controls();

    this.bg = new Image();
    this.bg.src = '/Users/johnguberman/workspace/App Academy/job_search/jsgame/assets/SNES - Super Mario World - Backgrounds.png';

  }

  controls(){

    document.addEventListener('keydown',(e)=>{
      this.handleKeydown(e.key);
    });

    document.addEventListener('keyup', (e)=>{
      this.handleKeyup(e.key);
    });

  }

  handleKeyup(key){
    // console.log("up " + key)
    switch (key){
      case 'ArrowLeft' :
      this.player.LbrakeOn();
      break;
      case 'ArrowRight':
      this.player.RbrakeOn();
      break;
      case 'a' :
      this.player.LbrakeOn();
      break;
      case 'd':
      this.player.RbrakeOn();
      break;
      case ' ':
      this.player.outJump();
      break;
    }
  }

  handleKeydown(key){
    // console.log("down " + key)
    switch (key){
      case 'ArrowLeft' :
      this.player.Lwalk();
      break;
      case 'ArrowRight':
      this.player.Rwalk(1);
      break;
      case 'a' :
      this.player.Lwalk();
      break;
      case 'd':
      this.player.Rwalk(1);
      break;
      case ' ':
      this.player.jump();
      break;
    }
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
    // ctx.fillRect(0, 0, Game.WIDTH, Game.HEIGHT);
    ctx.drawImage(this.bg,-515,-435);
    this.allObjects.forEach((object) => {
      object.draw(ctx);
    });

  }

}

Game.BG_COLOR = "#000000";
Game.WIDTH = 500;
Game.HEIGHT = 435;
Game.FPS = 60;


const NORMAL_TIME_FRAME_DELTA = 1000/Game.FPS;

module.exports = Game;

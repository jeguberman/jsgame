import MovingObject from './moving_object';
import Images from './images';
import Player from './player';
import Coin from './coin';


class Game {

  constructor(){
    this.allObjects = [
      new Player({game: this}),

      new MovingObject({
        pos: [96,320],
        vel: [0,0],
        sprite: Images.ground,
        color: '#a11aaa',
        game: this,
        static: true,
        name: "ground",
        src: "assets/18X2blocks.png"
      }),

      new Coin({
        pos: [208,204],
        vel: [0,0],
        color: '#a11aaa',
        game: this,
        static: true,
        name: "coin",
        src: "assets/coin.png",
        sprite: Images.coin,
      }),


    ];

    this.player = this.allObjects[0];
    this.gravity = 0.75;

    this.controls();

    this.bg = new Image();
    this.bg.src = 'assets/SNES - Super Mario World - Backgrounds.png';

    this.coincount = 0;
    this.coincountDisplay = $("#coincount");
    this.coincountDisplay.text(this.coincount);

  }

  incrementCoincount(){
    this.coincount +=1;
    this.coincountDisplay.text(this.coincount);
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

  step(velocityScale){
    this.destroy();
    this.moveObjects(velocityScale);
    this.checkCollisions();
  }

  destroy(){
    this.allObjects = this.allObjects.filter(
      (object) => object.sprite !== Images.destroy
    );
  }

  moveObjects(velocityScale){
    this.allObjects.forEach(
      (object) => object.move(velocityScale)
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
    ctx.drawImage(this.bg,-515,-435);
    this.allObjects.forEach((object) => {
      object.draw(ctx);
    });

  }

}

Game.BG_COLOR = "#000000";
Game.WIDTH = 480;
Game.HEIGHT = 435;
Game.FPS = 60;


const NORMAL_TIME_FRAME_DELTA = 1000/Game.FPS;

module.exports = Game;

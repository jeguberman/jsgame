import MovingObject from './moving_object';
import Images from './images';
import Player from './player';
import Coin from './coin';
import Lakitu from './lakitu';
import Spiny from './spiny';


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

      new Lakitu({
        pos: [100, 105],
        game: this,
        sprite: Images.lakituInit
      }),

    ];

    this.player = this.allObjects[0];
    this.gravity = 0.75;

    this.controls();

    this.bg = new Image();
    this.bg.src = 'assets/SNES - Super Mario World - Backgrounds.png';

    this.lakitus = 0;

    debugger
    this.coincount = 0;
    this.coincountDisplay = $("#coincount");
    this.coincountDisplay.text(this.coincount);
    this.gameOver = false;
    this.restart = false;
    this.triggerRestart = this.triggerRestart.bind(this);

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
    if(!this.gameOver){
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
  }

  handleKeydown(key){
    // console.log("down " + key)
    if(!this.gameOver){
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
  }

  step(velocityScale){
    // console.log(this.allObjects[this.allObjects.length-1].name);
    this.destroy();
    this.moveObjects(velocityScale);
    if(!this.gameOver){this.checkCollisions();}
  }

  destroy(){
    this.allObjects = this.allObjects.filter(
      (object) => object.sprite !== Images.destroy && object.pos[1] < Game.HEIGHT
    );
  }

  triggerGameOver(){
    if(!this.gameOver){
      this.gameOver = true;
      this.gravity = 0.5;
      this.allObjects.push(this.allObjects.shift());
      this.allObjects.forEach(
        (object) => object.fullStop()
      );
      this.player.gameOver();
      setTimeout(this.triggerRestart, 10000);
    }
  }

  triggerRestart(){
    this.restart = true;
  }

  moveObjects(velocityScale){
    // console.log(Math.max(this.allObjects.map((el)=>el.vel[0])));

    this.allObjects.forEach(
      (object) => object.move(velocityScale)
    );

  }

  incrementCoincount(){
    this.coincount += 1;
    this.coincountDisplay.text(this.coincount);
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
    // console.log(this.allObjects.length);
    ctx.clearRect(0, 0, Game.WIDTH, Game.HEIGHT);
    ctx.drawImage(this.bg,-515,-435);
    ctx.fillStyle = Game.BG_COLOR;
    // ctx.fillRect(0, 115, Game.WIDTH, 1);
    // ctx.fillRect(170, 0, 80, Game.HEIGHT);
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

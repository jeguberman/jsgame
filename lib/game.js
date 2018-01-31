import MovingObject from './moving_object';
import Images from './images';
import Player from './player';
import Coin from './coin';
import Lakitu from './lakitu';
import Spiny from './spiny';


class Game {

  constructor(){
    this.allObjects = [

      new MovingObject({
        game: this,
        static: true,
        name: "startScreen",
        src: "assets/startscreen.jpg",
        sprite: Images.startScreen
      }),

      // new Player({game: this}),
      //
      // new MovingObject({
      //   pos: [96,320],
      //   vel: [0,0],
      //   sprite: Images.ground,
      //   color: '#a11aaa',
      //   game: this,
      //   static: true,
      //   name: "ground",
      //   src: "assets/18X2blocks.png"
      // }),
      //
      // new Lakitu({
      //   pos: [100, 105],
      //   game: this,
      //   sprite: Images.lakituInit
      // }),

    ];


    this.gravity = 0.75;

    this.controls();

    this.bg = new Image();
    this.bg.src = 'assets/SNES - Super Mario World - Backgrounds.png';

    this.lakitus = 0;

    this.coincount = 0;

    this.coincountDisplay = $("#coincount");
    this.coincountDisplay.text(this.coincount);
    this.gameOver = false;
    this.restart = false;

    this.endGame = this.endGame.bind(this);
    this.startMenu = true;

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
      case 'Enter':
      if(this.startMenu === true){
        this.startGame();
      }
      break;
    }
  }

  startGame(){
      this.startMenu = false;
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
        })
      ];
    this.player = this.allObjects[0];
    this.lakitus = 0;

    this.coincount = 0;
    this.gameOver = false;
    this.restart = false;
    // this.controls();
  }

  endGame(){

    if(this.startMenu === false){
      this.startMenu = true;
      this.allObjects = [

        new MovingObject({
          game: this,
          static: true,
          name: "startScreen",
          src: "assets/startscreen.jpg",
          sprite: Images.startScreen
        })
      ];
    }
  }

  step(velocityScale){
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
      // this.allObjects.push(this.allObjects.shift());
      this.allObjects.forEach(
        (object) => object.fullStop()
      );
      this.player.gameOver();
    }
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

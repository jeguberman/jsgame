import merge from 'lodash/merge';
import Images from './images';

class MovingObject{

  constructor(options){
    options = merge(
      {},
      {
        pos:[0,0],
        vel:[0,0],
        acc:[0,0],
        term: 10,
        maxGround: 5,

        color:"#ffffff",

        sprite: Images.movingObjectDefault,

        static: false,
        name: undefined

      },
      options
    );

    this.pos = options.pos;
    this.vel = options.vel;
    this.acc = options.acc;
    this.term = options.term;
    this.maxGround = options.maxGround;

    this.image = new Image();
    this.image.src = './assets/singleblock.png';
    this.sprite = options.sprite;

    this.game = options.game;
    this.color = options.color;

    this.static = options.static;
    this.name = options.name;

  }

  move(velocityScale){
    this.vel = [(this.vel[0] + (velocityScale * this.acc[0])), (this.vel[1] + (velocityScale * this.acc[1]))];
    this.terminalVelocity();
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  }

  terminalVelocity(){
    if(this.vel[1] > this.term){
      this.vel[1] = this.term;
    }
    if(this.vel[0] > this.term){
      this.vel[0] = this.term;
    }
    if(this.vel[1] < this.term * -1){
      this.vel[1] = this.term * -1;
    }
    if(this.vel[0] < this.term * -1){
      this.vel[0] = this.term * -1;
    }
  }

  checkCollisions(obj){
    this.footCollision(obj);
    this.rightCollision(obj);
    this.leftCollision(obj);
  }

  rightCollision(obj){
    if(
      this !== obj &&
      this.pos[0] + this.sprite.width >= obj.pos[0] && //right side collision
      this.pos[0] < obj.pos[0] +obj.sprite.width && //not cleared left side
      ((this.pos[1] > obj.pos[1] && this.pos[1] < obj.pos[1] + obj.sprite.height) || //head check
      (this.pos[1] + this.sprite.height > obj.pos[1] && this.pos[1] + this.sprite.height < obj.pos[1] + obj.sprite.height)) && //foot check
      (this.vel[0]>0)
    ){
      this.staticBlock(()=>{
        this.vel[0] = -0.7;
        this.acc[0] = 0;
      });
    }
  }

  leftCollision(obj){
    if(
      this !== obj &&
      this.pos[0] <= obj.pos[0] + obj.with && //left side collision
      this.pos[0]+this.sprite.width > obj.pos[0] && //not cleared right side
      ((this.pos[1] > obj.pos[1] && this.pos[1] < obj.pos[1] + obj.sprite.height) || //head check
      (this.pos[1] + this.sprite.height > obj.pos[1] && this.pos[1] + this.sprite.height < obj.pos[1] + obj.sprite.height)) && //foot check
      (this.vel[0]<0)
    ){
      this.staticBlock(()=>{
        this.vel[0] = 0.7;
        this.acc[0] = 0;
      });
    }
  }

  footCorrect(obj){
    if(this.pos[0] > obj.pos[0] || this.pos[0]+this.sprite.width < obj.pos[0] + obj.sprite.width){
      this.pos[1] = obj.pos[1] - this.sprite.height;
    }
  }

  footCollision(obj){
    if(
      this !== obj &&
      this.pos[1] + this.sprite.height > obj.pos[1] &&
      this.pos[1] + this.sprite.height < obj.pos[1] + obj.sprite.height &&
      this.pos[0] < obj.pos[0] + obj.sprite.width &&
      this.pos[0] + this.sprite.width > obj.pos[0]
    ){
      this.vel[1] = 0;
      this.acc[1] = 0;
      this.staticBlock(()=>{
        this.footCorrect(obj);
      });
    }else{
      this.staticBlock(()=>{
        this.acc[1] = this.acc[1] + this.game.gravity;
      });
    }
  }


  staticBlock(callback){
    if (!this.static){
      callback();
    }
  }


  draw(ctx){
    // debugger
    // ctx.save();
    const pattern = ctx.createPattern(this.image, 'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect (this.pos[0], this.pos[1], this.sprite.width, this.sprite.height);
    // ctx.drawImage(this.image, this.sprite.imageX, this.sprite.imageY, this.sprite.width, this.sprite.height, this.pos[0], this.pos[1], this.sprite.width, this.sprite.height);
    // ctx.restore();
  }
}

module.exports = MovingObject;

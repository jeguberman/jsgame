import MovingObject from './moving_object';
import Images from './images';
import merge from 'lodash/merge';

class Player extends MovingObject{

  constructor(options){
    options = merge(
      {
        pos:[210,260],
        vel:[0,0],
        acc:[0,0],
        term: 100,

        color:"#ff3333",

        name: "player"
      },
      options
    );
    super(options);
    this.jumpAcc = -8;
    this.walkAcc = 0.4;
    this.inJump = false;
    this.Lbrake = true;
    this.Rbrake = true;
    this.breakConst = 0.75;

    this.image = new Image();
    this.sprite = Images.marioStandRight;
    this.height = this.sprite.height;
    this.width = this.sprite.width;


  }

  speedLessThanMaxGround(){
    if(this.vel[0] < this.maxGround && this.vel[0] > this.maxGround*-1){
      return true;
    }else{
      return false;
    }
  }

  jump(){
    if(!this.inJump){
      this.vel[1] = this.vel[1]+this.jumpAcc;
      this.inJumpOn();
    }
  }

  inJumpOn(){
    this.inJump = true;
  }

  outJump(){
    this.vel[1] = 0;
    this.inJump = false;
  }


  Lwalk(){
    this.changeSprite(Images.marioStandLeft);
    if(this.speedLessThanMaxGround){
      if(this.vel[0] > 0){this.vel[0]=0.7;}
      this.acc[0] = (this.walkAcc * -1);
    }
    this.LbrakeOff();
  }

  LbrakeOff(){
    this.Lbrake=false;
  }

  LbrakeOn(){
    this.Lbrake = true;
  }

  Rwalk(){
    if(this.speedLessThanMaxGround){
      if(this.vel[0] < 0){this.vel[0]=-0.7;}
      this.acc[0] = (this.walkAcc);
    }
    this.RbrakeOff();
  }

  RbrakeOff(){
    this.Rbrake=false;
  }

  RbrakeOn(){
    this.Rbrake = true;
  }

  brakeCheck(){
    if(this.Lbrake && this.vel[0]<0){
      this.acc[0] = this.acc[0]*this.breakConst;
      this.vel[0] = this.vel[0]*this.breakConst;
    }
    if(this.Rbrake && this.vel[0]>0){
      this.acc[0] = this.acc[0]*this.breakConst;
      this.vel[0] = this.vel[0]*this.breakConst;
    }

  }

  terminalVelocity(){
    if(this.vel[1] > this.term){
      this.vel[1] = this.term;
    }
    if(this.vel[0] > this.maxGround){
      this.vel[0] = this.maxGround;
    }
    if(this.vel[1] < this.term * -1){
      this.vel[1] = this.term * -1;
    }
    if(this.vel[0] < this.maxGround * -1){
      this.vel[0] = this.maxGround * -1;
    }
  }

  move(delta){
    // console.log(this.vel[0])
    this.brakeCheck();
    this.vel = [(this.vel[0] + (delta * this.acc[0])), (this.vel[1] + (delta * this.acc[1]))];
    this.terminalVelocity();
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  }

  changeSprite(newImage){
    this.sprite = newImage;
    this.height = this.sprite.height;
    this.width = this.sprite.width;
    this.image.src = newImage.src;
  }

  draw(ctx){
    this.image.src = this.sprite.src;
    ctx.save();
    ctx.fillStyle = this.color;
    // ctx.fillRect (this.pos[0], this.pos[1], this.sprite.width, this.sprite.height);
    ctx.drawImage(this.image, this.sprite.imageX, this.sprite.imageY, this.sprite.width, this.sprite.height, this.pos[0], this.pos[1], this.sprite.width, this.sprite.height);
    ctx.restore();
  }

}
module.exports = Player;

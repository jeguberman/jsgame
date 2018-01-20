import MovingObject from './moving_object';
import merge from 'lodash/merge';

class Player extends MovingObject{

  constructor(options){
    options = merge(
      {
        pos:[410,360],
        vel:[0,0],
        acc:[0,0],
        term: 100,

        color:"#ff3333",
        width:35,
        height:50,

        name: "player"
      },
      options
    );
    super(options);
    this.jumpAcc = -15;
    this.walkAcc = 0.4;
    this.inJump = false;
    this.Lbrake = true;
    this.Rbrake = true;
    this.breakConst = 0.75;
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
    this.inJump = false;
  }


  Lwalk(){
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

}
module.exports = Player;

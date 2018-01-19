import MovingObject from './moving_object';
import merge from 'lodash/merge';

class Player extends MovingObject{

  constructor(options){
    options = merge(
      {
        pos:[410,360],
        vel:[0,0],
        acc:[0,0],
        term: 10,

        color:"#ff3333",
        width:35,
        height:50,

        name: "player"
      },
      options
    );
    super(options);
    this.jumpAcc = -0.5;
    this.walkAcc = 0.02;
    this.inJump = false;
    this.brake = false;
  }

  speedLessThanMaxGround(){
    if(this.vel[0] < this.maxGround && this.vel[0] > this.maxGround*-1){
      return true;
    }else{
      return false;
    }
  }

  walk(val){
    if(this.speedLessThanMaxGround){
      this.acc[0] = this.acc[0]+(this.walkAcc * val);
    }
    this.brakeOff();
  }

  jump(){
    if(!this.inJump){
      this.acc[1] = this.acc[1]+this.jumpAcc;
      this.inJump = true;
    }
  }

  outJump(){
    this.inJump = false;
  }

  brakeOff(){
    // console.log('off');
    this.brake=false;
  }

  brakeOn(){
    // console.log('on');
    this.brake = true;
  }

  brakeCheck(){
    if(this.brake){
      // this.acc[0] = this.acc[0] + this.vel[0] * -0.5;
      this.acc[0] = this.acc[0]*0.01;
      this.vel[0] = this.vel[0]*0.01;
    }
  }

  brakeCheck2(){
    if(this.brake && -10 < this.vel[0] && this.vel[0] < 10){
      this.vel[0]=0;
      this.acc[0]=0;
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
    this.brakeCheck();
    this.vel = [(this.vel[0] + (delta * this.acc[0])), (this.vel[1] + (delta * this.acc[1]))];
    this.terminalVelocity();
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    this.brakeCheck2();
    // console.log(this.vel[0]);

  }

}
module.exports = Player;

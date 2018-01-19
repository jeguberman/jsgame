import MovingObject from './moving_object';
import merge from 'lodash/merge';

class Player extends MovingObject{

  constructor(options){
    options = merge(
      {
        pos:[110,200],
        vel:[0,0],
        acc:[0,0],
        term: 10,

        color:"#ff3333",
        width:35,
        height:55,

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



  jump(){
    if(!this.inJump){
      this.acc[1] = this.acc[1]+this.jumpAcc;
      this.inJump = true;
    }
  }

  footCollision(obj){
    if(
      this !== obj &&
      this.pos[1] + this.height > obj.pos[1] &&
      this.pos[0] < obj.pos[0] + obj.width &&
      this.pos[0] + this.width > obj.pos[0]
    ){
      this.vel[1] = 0;
      this.acc[1] = 0;
      this.staticBlock(()=>this.pos[1] = obj.pos[1] - this.height);
      this.inJump = false;
    }else{
      this.staticBlock(()=>{this.acc[1] = this.acc[1] + this.game.gravity;});
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
    console.log(this.vel[0]);

  }

}
module.exports = Player;

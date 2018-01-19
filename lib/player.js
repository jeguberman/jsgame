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
    this.inJump = false;
    this.brake = false;
  }



  walk(val){
    if(this.vel[0] < this.maxGround && this.vel[0] > this.maxGround*-1){
      this.acc[0] = this.acc[0]+val;
    }
  }

  brakeCheck(){
    if(this.brake){
      this.acc[0] = 0;
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

}
module.exports = Player;

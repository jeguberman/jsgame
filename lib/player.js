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
    this.yBeforeJump = this.pos[1]+this.height;
    this.jumpAcc = -0.5;
  }

  handleKeys(key, delta){

    // console.log(key)
    switch (key){
      case 'ArrowUp':
      console.log("up!");
      break;
      case 'ArrowDown':
      console.log("down!");
      break;
      case 'ArrowLeft':
      console.log("left!");
      break;
      case 'ArrowRight':
      console.log("right!");
      break;
      case ' ':
      this.jump();
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

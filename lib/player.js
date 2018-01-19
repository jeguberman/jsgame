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

    console.log(key)
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

    this.acc[1] = this.acc[1]+this.jumpAcc;

  }

}
module.exports = Player;

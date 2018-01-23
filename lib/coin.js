import MovingObject from './moving_object';
import Images from './images';

class Coin extends MovingObject{
  constructor(options){
    super(options);
    this.collected = false;
  }

  checkCollisions(obj){
    this.gravityControl(obj);
    this.playerCollision(obj);
  }

  playerCollision(obj){
    if(this.boxCollision(obj)){
      if(obj.name==="player"){
          this.sprite = Images.destroy;
          this.game.incrementCoincount();
      }
    }
  }

  // verticalStop(obj){
  //   if(obj.name==="ground"){
  //     this.vel[1] = this.vel[1] * -0.7;
  //     this.acc[1] = 0;
  //     this.staticBlock(()=>{
  //       this.footCorrect(obj);
  //     });
  //   }
  // }

}

export default Coin;

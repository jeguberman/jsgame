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
    // this.rightCollision(obj);
    // this.leftCollision(obj);
  }

  playerCollision(obj){
    if(this.boxCollision(obj)){
      if(obj.name==="player"){
          this.sprite = Images.destroy;
      }
    }
  }

}

export default Coin;

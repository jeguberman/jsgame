import MovingObject from './moving_object';
import Images from './images';

class Spiny extends MovingObject{
  constructor(options){
    super(options);
    this.image.src = "assets/lakitu.png";
    this.sprite = Images.spinyRollA;
    this.name = "spiny";
    this.inroll = true;
    this.center=this.pos.map((el)=>el+8);
    this.collisionType = "radial";
  }

  checkCollisions(obj){
    this.gravityControl(obj);
    if(obj.name === "player"){
      if(this.boxCollision(obj)){
        this.game.triggerGameOver();
      }
    }
  }

  boxCollision(obj){
    let DeltaX = this.getDelta(0, obj);
    let DeltaY = this.getDelta(1, obj);
    // console.log(DeltaX * DeltaX + DeltaY * DeltaY);
    return (DeltaX * DeltaX + DeltaY * DeltaY) < 64;
  }

  getDelta(axis, obj){
    const dim = axis === 0 ? "width" : "height";
    const least = Math.min(this.center[axis], obj.pos[axis] + obj.sprite[dim]);
    const comperand = Math.max(obj.pos[axis], least);
    return this.center[axis] - comperand;
  }


}

module.exports = Spiny;

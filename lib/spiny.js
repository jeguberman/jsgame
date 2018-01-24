import MovingObject from './moving_object';
import Images from './images';

class Spiny extends MovingObject{
  constructor(options){
    super(options);
    this.image.src = "assets/lakitu.png";
    this.sprite = Images.spinyRollA;
    this.minVel = 1;
    this.name = "spiny";
    this.inroll = true;

    this.collisionType = "radial";
    this.updateCenter();
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

  ensureHorizontalMovement(){
    if(!this.game.gameOver){
      if(this.vel[0] < this.minVel && this.vel[0] >= 0){
        this.vel[0] = this.minVel;
      }else if(this.vel[0] > -this.minVel && this.vel[0] < 0){
        this.vel[0] = this.minVel*-1;
      }
    }
  }

  updateCenter(){
    this.center=this.pos.map((el)=>el+8);
  }

  move(velocityScale){
    if(!this.gameOver){
    this.updateCenter();
    this.ensureHorizontalMovement();
    this.vel = [(this.vel[0] + (velocityScale * this.acc[0])), (this.vel[1] + (velocityScale * this.acc[1]))];
    this.terminalVelocity();
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    }
  }


}

module.exports = Spiny;

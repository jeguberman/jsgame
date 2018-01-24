import MovingObject from './moving_object';
import Images from './images';
import merge from 'lodash/merge';

class Coin extends MovingObject{
  constructor(options){
    super(options);
    this.collected = false;
    this.minVel = 2.2;
    this.name = "coin";
    this.image.src = "assets/coin.png";
    this.sprite = Images.coin;
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

  verticalStop(obj){
    if(obj.name==="ground"){
      this.vel[1] = this.vel[1] * -0.7;
      this.acc[1] = 0;
      this.staticBlock(()=>{
        this.footCorrect(obj);
      });
    }
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

  move(velocityScale){
    if(!this.gameOver){
    this.ensureHorizontalMovement();
    this.vel = [(this.vel[0] + (velocityScale * this.acc[0])), (this.vel[1] + (velocityScale * this.acc[1]))];
    this.terminalVelocity();
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    }
  }

}

export default Coin;

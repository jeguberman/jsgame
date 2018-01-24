import merge from 'lodash/merge';
import MovingObject from './moving_object';
import Images from './images';

class Lakitu extends MovingObject{
  constructor(options){
    super(options);
    this.term = 3;

    this.safeWindow = 1500;
    this.toss = this.toss.bind(this);
    this.changeSprite = this.changeSprite.bind(this);
    setTimeout(this.toss, this.safeWindow);
  }

  toss(){
    this.changeSprite();

  }

  changeSprite(){
    if(this.sprite === Images.lakituA){
      this.sprite = Images.lakituAthrow;
      this.setNewSafeWindow();
      setTimeout(this.changeSprite,650);
    }else{
      this.sprite = Images.lakituA;
      setTimeout(this.toss, this.safeWindow);
    }
  }

  setNewSafeWindow(){
    this.safeWindow = (Math.floor(Math.random()*4) + 1.2) * 400;
  }




  move(velocityScale){
    let n = 50;
    if(this.pos[0] < 220 - n){
      this.acc[0] = 0.09;
    }else if(this.pos[0] > (220 + n)){
      this.acc[0] = -0.09;
    }

    if(this.pos[1] < 115){
      this.acc[1] = 0.07*(1-(this.pos[1]/115));
    }else if(this.pos[1] > 115){
      this.acc[1] = -0.07*(1-(115/this.pos[1]));
    }
    this.vel = [(this.vel[0] + (velocityScale * this.acc[0])), (this.vel[1] + (velocityScale * this.acc[1]))];
    this.terminalVelocity();
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  }


}

module.exports = Lakitu;

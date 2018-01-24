import merge from 'lodash/merge';
import MovingObject from './moving_object';
import Images from './images';
import Coin from './coin';

class Lakitu extends MovingObject{
  constructor(options){
    super(options);
    this.game.lakitus += 1;
    this.term = 3;

    this.safeWindow = 1500;

    this.toss = this.toss.bind(this);
    this.changeSprite = this.changeSprite.bind(this);
    this.spawnLakitu = this.spawnLakitu.bind(this);
    this.addLakitu = this.addLakitu.bind(this);
    this.maxLakitus = 4;

    this.static = true;
    this.image.src = "assets/lakitu.png";
    this.sprite = Images.lakituA;
    this.nextThing = this.spawnCoin();
    this.loadThing();

    setTimeout(()=>this.toss(this.nextThing), this.safeWindow);
    setTimeout(this.addLakitu, 10000);
  }

  toss(){
    if(!this.game.gameOver){
      this.thingGetsLakituPos();
      this.changeSprite();
      this.tossThing(this.nextThing);
      this.setNewSafeWindow();
      setTimeout(this.toss, (this.safeWindow+650));
      this.loadThing();
    }
  }

  thingGetsLakituPos(){
    this.nextThing.pos=this.pos;
  }

  changeSprite(){
    if(!this.game.gameOver){
      if(this.sprite === Images.lakituA){
        this.sprite = Images.lakituAthrow;
        setTimeout(this.changeSprite, 650);
      }else{
        this.sprite = Images.lakituA;
      }
    }
  }

  tossThing(obj){
    if(this.game.allObjects.length < 20){
      this.game.allObjects.push(obj);
    }
  }

  addLakitu(){
    if(this.game.lakitus < this.maxLakitus){
      this.nextThing = this.spawnLakitu();
    }
  }

  loadThing(){
    switch(Math.floor(Math.random()*3)){
      case 0,1:
        this.nextThing = this.spawnCoin();
        break;
      case 2:
        this.nextThing = this.spawnCoin();
        break;
      case 3:
        this.nextThing = this.spawnCoin();
        break;
    }
  }

  spawnCoin(){
    return new Coin({
      pos: null,
      vel: [this.vel[0], -3],
      game: this.game
    });
  }

  spawnLakitu(){
    return new Lakitu({
      pos: [this.pos[0]+1,this.pos[1]+1],
      vel: [this.vel[0]*-1, -2],
      game: this.game
    });
  }



  setNewSafeWindow(){
    this.safeWindow = ((Math.floor(Math.random()*4) + 1.2) * 400);
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

    if(this.pos[1] > 200){
      this.pos[1] = 200;
    }
    this.vel = [(this.vel[0] + (velocityScale * this.acc[0])), (this.vel[1] + (velocityScale * this.acc[1]))];
    this.terminalVelocity();
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  }


}

module.exports = Lakitu;

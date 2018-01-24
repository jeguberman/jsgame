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
    this.thunkish = this.thunkish.bind(this);
    this.maxLakitus = 4;

    this.static = true;
    this.image.src = "assets/lakitu.png";
    this.sprite = Images.lakituA;
    this.nextThing = this.spawnCoin();
    this.readyThing();

    setTimeout(()=>this.toss(this.nextThing), this.safeWindow);
    setTimeout(this.addLakitu, 10000);
  }

  thunkish(){
    //sometimes they aren't throwing coins. you created this function to make sure you aren't hitting the initialized setTimeout twice. make spinies next
    this.toss(this.nextThing);
  }

  toss(){
    this.readyThing();
    this.changeSprite();
    this.createThing(this.nextThing);
    setTimeout(this.toss, this.safeWindow);
  }

  createThing(obj){
    if(this.game.allObjects.length < 20){
      this.game.allObjects.push(obj);
    }
  }

  addLakitu(){
    if(this.game.lakitus < this.maxLakitus){
      this.changeSprite();
      this.createThing(this.spawnLakitu());
    }
  }

  readyThing(){
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
      pos: this.pos,
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

  changeSprite(){
    if(this.sprite === Images.lakituA){
      this.sprite = Images.lakituAthrow;
      this.setNewSafeWindow();
      setTimeout(this.changeSprite,650);
    }else{
      this.sprite = Images.lakituA;
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

    if(this.pos[1] > 200){
      this.pos[1] = 200;
    }
    this.vel = [(this.vel[0] + (velocityScale * this.acc[0])), (this.vel[1] + (velocityScale * this.acc[1]))];
    this.terminalVelocity();
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  }


}

module.exports = Lakitu;

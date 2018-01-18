import merge from 'lodash/merge';




class MovingObject{

  constructor(options){
    options = merge(
      {
        pos:[0,0],
        vel:[0,0],
        acc:[0,0],
        term: 10,

        color:"#ffffff",
        width:10,
        height:10,

        static: false,
        name: undefined

      },
      options
    );

    this.pos = options.pos;
    this.vel = options.vel;
    this.acc = options.acc;
    this.term = options.term;

    this.game = options.game;
    this.color = options.color;
    this.width = options.width;
    this.height = options.height;
    this.game = options.game;

    this.static = options.static;
    this.name = options.name;

    this.footCollision = this.footCollision.bind(this);

  }


  move(delta){
    this.vel = [this.vel[0] + this.acc[0], this.vel[1] + this.acc[1]];
    this.terminalVelocity();
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  }

  accelerate(add,val){
    this.acc[add] += val;
  }

  terminalVelocity(){
    if(this.vel[1] > this.term){
      this.vel[1] = this.term;
    }
    if(this.vel[0] > this.term){
      this.vel[0] = this.term;
    }
    if(this.vel[1] < this.term * -1){
      this.vel[1] = this.term * -1;
    }
    if(this.vel[0] < this.term * -1){
      this.vel[0] = this.term * -1;
    }
  }

  checkCollisions(obj){
    this.footCollision(obj);
  }

  footCollision(obj){

    if(
      this !== obj &&
      this.pos[1] + this.height > obj.pos[1] &&
      this.pos[0] < obj.pos[0]+obj.width &&
      this.pos[0] + this.width > obj.pos[0]
    ){
      this.vel = [this.vel[0],0];
      this.acc = [this.acc[0],0];
    }else{
      if(!this.static){
        this.acc[1] = this.acc[1]+this.game.gravity;
      }
    }
  }

  draw(ctx){
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect (this.pos[0], this.pos[1], this.width, this.height);
    ctx.restore();
  }
}

module.exports = MovingObject;

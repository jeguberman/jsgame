import merge from 'lodash/merge';




class MovingObject{

  constructor(options){
    options = merge(
      {
        pos:[0,0],
        vel:[0,0],
        acc:[0,0],
        term: 10,
        maxGround: 5,

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
    this.maxGround = options.maxGround;


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
    this.vel = [(this.vel[0] + (delta * this.acc[0])), (this.vel[1] + (delta * this.acc[1]))];
    this.terminalVelocity();
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
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
    this.rightCollision(obj);
    this.leftCollision(obj);
  }

  rightCollision(obj){
    if(
      this !== obj &&
      this.pos[0] + this.width >= obj.pos[0] && //right side collision
      this.pos[0] < obj.pos[0] +obj.width && //not cleared left side
      ((this.pos[1] > obj.pos[1] && this.pos[1] < obj.pos[1] + obj.height) || //head check
      (this.pos[1] + this.height > obj.pos[1] && this.pos[1] + this.height < obj.pos[1] + obj.height)) && //foot check
      (this.vel[0]>0)
    ){
      this.staticBlock(()=>{
        this.vel[0] = -0.7;
        this.acc[0] = 0;
      });
    }
  }

  leftCollision(obj){
    if(
      this !== obj &&
      this.pos[0] <= obj.pos[0] + obj.with && //left side collision
      this.pos[0]+this.width > obj.pos[0] && //not cleared right side
      ((this.pos[1] > obj.pos[1] && this.pos[1] < obj.pos[1] + obj.height) || //head check
      (this.pos[1] + this.height > obj.pos[1] && this.pos[1] + this.height < obj.pos[1] + obj.height)) && //foot check
      (this.vel[0]<0)
    ){
      this.staticBlock(()=>{
        this.vel[0] = 0.7;
        this.acc[0] = 0;
      });
    }
  }

  footCorrect(obj){
    if(this.pos[0] > obj.pos[0] || this.pos[0]+this.width < obj.pos[0] + obj.width){
      this.pos[1] = obj.pos[1] - this.height;
    }
  }

  footCollision(obj){
    if(
      this !== obj &&
      this.pos[1] + this.height > obj.pos[1] &&
      this.pos[1] + this.height < obj.pos[1] + obj.height &&
      this.pos[0] < obj.pos[0] + obj.width &&
      this.pos[0] + this.width > obj.pos[0]
    ){
      this.vel[1] = 0;
      this.acc[1] = 0;
      this.staticBlock(()=>{
        this.footCorrect(obj);
      });
    }else{
      this.staticBlock(()=>{
        this.acc[1] = this.acc[1] + this.game.gravity;
      });
    }
  }


  staticBlock(callback){
    if (!this.static){
      callback();
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

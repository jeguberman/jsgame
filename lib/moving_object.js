import merge from 'lodash/merge';
const Radians = (n) =>{return(n*(Math.PI/180));};
class MovingObject{

  constructor(options){
    options = merge(
      {
        pos:[0,0],
        vel:[0,0],
        color:"#ffffff",
        width:10,
        height:10,
        rotation: 0,
        rVel: 0
      },
      options
    );

    this.pos = options.pos;
    this.vel = options.vel;
    this.game = options.game;
    this.color = options.color;
    this.width = options.width;
    this.height = options.height;
    this.rotation = options.rotation;
    this.rVel = options.rVel;

    this.xCenter = this.pos[0]+(this.width/2);
    this.yCenter = this.pos[1]+(this.height/2);
    this.xOrigin = (this.width/2) * -1;
    this.yOrigin = (this.height/2) * -1;
  }

  move(delta){
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    this.rotation = this.rotation + this.rVel;
    this.xCenter = this.pos[0]+(this.width/2);
    this.yCenter = this.pos[1]+(this.height/2);
    this.xOrigin = (this.width/2) * -1;
    this.yOrigin = (this.height/2) * -1;
  }

  draw(ctx){
    ctx.save();
    ctx.translate(this.xCenter, this.yCenter);
    ctx.rotate(Radians(this.rotation));
    ctx.fillStyle = this.color;
    ctx.fillRect (this.xOrigin, this.yOrigin, this.width, this.height);
    ctx.restore();
  }
}

module.exports = MovingObject;

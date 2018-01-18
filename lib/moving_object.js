import merge from 'lodash/merge';

class MovingObject{

  constructor(options){
    options = merge(
      {
        pos:[0,0],
        vel:[0,0],
        color:"#ffffff",
        width:10,
        height:10,
      },
      options
    );

    this.pos = options.pos;
    this.vel = options.vel;
    this.game = options.game;
    this.color = options.color;
    this.width = options.width;
    this.height = options.height;
  }

  move(delta){

    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  }

  draw(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect (this.pos[0], this.pos[1], this.width, this.height);
  }
}

module.exports = MovingObject;

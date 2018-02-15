//breadcrumbs: Elise said something about a single source of truth for state. Currently the sprite is just a store of animation data. I think what elise is getting at is closer to a redux cycle.

//that is to say, the gameSpaceObject knows what the current frame and frame data is, passes that information to the sprite, and the sprite returns the frame data for the next state.

import merge from 'lodash/merge';

export default class Sprite{
  constructor(options){
    // this.src = options.src;
    this.src = new Image();
    this.src.src = options.src;
    this.animations = {};

  }

  hook(owner){
    owner.sprite = this;
    this.owner = owner;
    this.state = this.owner.state;
    this.faceRight = this.owner.faceRight;

  }

  state(){
    return this.owner.state;
  }

  updateOwner(){
    this.state = this.owner.state;
    this.faceRight = this.owner.faceRight;

  }

  set(cycle){this.animations[cycle.name] = cycle;}

  get(string){return this.animations[string];}

  step(){
    let currentCel = this.animations[this.state].advance();
    merge(this, currentCel);
  }

  draw(ctx){
    this.updateOwner();
    this.step();
    ctx.save();
    ctx.fillStyle = "red";
    ctx.fillRect(this.owner.pos[0], this.owner.pos[1], this.width, this.height);
// debugger
    ctx.drawImage(this.src, this.sX, this.sY, this.width, this.height, this.owner.pos[0], this.owner.pos[1], this.width, this.height);
    ctx.restore();
  }
}

//breadcrumbs: Elise said something about a single source of truth for state. Currently the sprite is just a store of animation data. I think what elise is getting at is closer to a redux cycle.

//that is to say, the gameSpaceObject knows what the current frame and frame data is, passes that information to the sprite, and the sprite returns the frame data for the next state.


import merge from 'lodash/merge';

export class Sprite{
  constructor(options){
    this.src = options.src;
    //string representing where to key in to states library, represents gameObjects state.
    this.animations = {};
  }

  hook(owner){
    owner.sprite = this;
    this.owner = owner;
    this.state = owner.state;
    this.faceRight = owner.faceRight;
    owner.stateSet = this.animations;
  }

  set(cycle){this.animations[cycle.name] = cycle;}
  get(string){return this.animations[string];}

  draw(ctx){
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect (this.pos[0], this.pos[1], this.sprite.width, this.sprite.height);
    ctx.drawImage(this.sprite.src, this.sprite.sX, this.sprite.sY, this.sprite.width, this.sprite.height, this.pos[0], this.pos[1], this.sprite.width, this.sprite.height);
    ctx.restore();
  }
}





export function cel(options){
  return merge({},
    options,
    { sX: 0, sY: 0, sW: 16, sH: 16, frameCount: 5 }
  );
}

export function animationCycle(name = undefined){
  return{
    cels: [],
    idx: 0,
    frameIdx: 0,
    name: undefined,
    rightFace: true,
    push:(cel)=>cels.push(cel),
    add:(cel)=>cels.push(cel),

    incrementIndex:()=>{
      frameIdx += 1;
      if (frameIdx > currentCell.frameCount){
        frameIdx = 0;
        idx += 1;
        if(idx > cels.length-1){
          idx = 0;
        }
      }
    },

    advance: ()=>{
      let currentCel = cels[idx];
      incrementIndex();
      return currentCel;
    }
  };
}

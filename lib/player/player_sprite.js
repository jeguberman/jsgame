import { Sprite, cel, animationCycle } from '../components/sprite.js';

const PlayerSprite = new Sprite({src: 'assets/mario_sprites.png'});

const StandRightCel = cel({sX:4, sY:55, width:15, height: 28, frameCount: 1});

const StandRight = new animationCycle("standRight");

PlayerSprite.set(StandRight);


const mario = {
  stand:{},
  walk:{},
  jump:{},
  fall:{},
  skid:{},
  crouch:{},
  dead:{},
  deflt:{}
};

module.exports = PlayerSprite;

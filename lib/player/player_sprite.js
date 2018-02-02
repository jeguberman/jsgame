import { Sprite, cel, animationCycle } from '../components/sprite.js';

const PlayerSprite = new Sprite({src: 'assets/mario_sprites.png'});

const StandRightCel = cel({sx:4, sY:55, width:15, height: 28, frameCount: 1});

const StandRight = new animationCycle("standRight");

PlayerSprite.set(StandRight);

module.exports = PlayerSprite;

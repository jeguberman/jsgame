import Game from './lib/game';
import Renderer from './lib/renderer';
// import Controllr from './lib/controller';
const Util = require('./util.js');

const util = new Util();

Your models are falling into your ground,and your space bar is comboing. check to see if you are on the ground before triggering jump actions and fix the ground check;

const trueGame = ()=>{
  const view = document.getElementById('view');
  view.width = Game.WIDTH;
  view.height = Game.HEIGHT;

  let ctx = view.getContext('2d');
  const game = new Game();
  const renderer = new Renderer(game, ctx);

  renderer.start(ctx);
};

const falseGame = () => {
  const stage = document.getElementById('view');
  stage.width = Game.WIDTH;
  stage.height = Game.HEIGHT;

  let ctx = stage.getContext('2d');

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, stage.width, stage.height);
  // Draw a non-transformed red rectangle on the left



  stage.addEventListener('mousemove', util.handleMouse);
};


const switcher = (n) => {
  if(n){
    return trueGame;
  }else{
    return falseGame;
  }
};

document.addEventListener('DOMContentLoaded', switcher(1));

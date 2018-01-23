import Game from './lib/game';
import Renderer from './lib/renderer';
// import Controllr from './lib/controller';
const Util = require('./util.js');

const util = new Util();


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
  // const stage = document.getElementById('view');
  // stage.width = Game.WIDTH;
  // stage.height = Game.HEIGHT;
  //
  // const ctx = stage.getContext('2d');

  $("#coincount").append("free");





};


const switcher = (n) => {
  if(n){
    return trueGame;
  }else{
    return falseGame;
  }
};

document.addEventListener('DOMContentLoaded', switcher(1));

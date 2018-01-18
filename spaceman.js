import Game from './lib/game';
import Renderer from './lib/renderer';
// import Controllr from './lib/controller';


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

  ctx.translate(Game.WIDTH/2, Game.HEIGHT/2);
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  ctx.translate(100, 0);
  ctx.fillRect(-5, -10, 10, 20);

};


const switcher = (n) => {
  if(n){
    return trueGame;
  }else{
    return falseGame;
  }
};

document.addEventListener('DOMContentLoaded', switcher(1));

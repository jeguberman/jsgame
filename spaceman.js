import Game from './lib/game';
import Renderer from './lib/renderer';

document.addEventListener('DOMContentLoaded',()=>{
  const view = document.getElementById('view');
  view.width = Game.WIDTH;
  view.height = Game.HEIGHT;

  let ctx = view.getContext('2d');
  const game = new Game();
  const renderer = new Renderer(game, ctx);
  renderer.start(ctx);



});

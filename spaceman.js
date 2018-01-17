const Game = require("./lib/game");
const GameView = require("./lib/game_view.js");

document.addEventListener('DOMContentLoaded',()=>{
  const view = document.getElementById('view');
  view.width = Game.WIDTH;
  view.height = Game.HEIGHT;

  let ctx = view.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(0,0,Game.WIDTH,Game.HEIGHT);
});

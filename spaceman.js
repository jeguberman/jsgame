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
  const stage = document.getElementById('view');
  stage.width = Game.WIDTH;
  stage.height = Game.HEIGHT;

  const ctx = stage.getContext('2d');

  let block = new Image();
  block.src = '/Users/johnguberman/workspace/App Academy/job_search/jsgame/assets/singleblock.png';
  const drawPattern = () => {
    ctx.fillStyle = ctx.createPattern(block, "repeat");

    ctx.fillRect(0, 0, Game.WIDTH, Game.HEIGHT);
    coin.render();
  };
  block.onload = drawPattern;


  let coinImage = new Image();
  coinImage.src = '/Users/johnguberman/workspace/App Academy/job_search/jsgame/assets/coin_test.png';

  function sprite (options) {

    var that = {};



    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

    that.render =  () => {
      that.context.fillStyle = 'red';
      // that.context.fillRect(0,0,that.width,that.height);
      that.context.drawImage(
        that.image,
        0,
        0,
        that.width,
        that.height,
        0,
        0,
        that.width,
        that.height
      );
    };

    return that;
  }

  var coin = sprite({
    context: ctx,
    width: 40,
    height: 40,
    image: coinImage
  });
  // 40,40



};


const switcher = (n) => {
  if(n){
    return trueGame;
  }else{
    return falseGame;
  }
};

document.addEventListener('DOMContentLoaded', switcher(1));

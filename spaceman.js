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

  const renderer = new Renderer(ctx);

  renderer.start(ctx);
};

const falseGame = () => {
  class Thing{
    constructor(){
      this.value = 2;
    }
  }

  class ToInherit{
    constructor(){
      this.iVal = 9;
      const me = this;
    }

    iAdd(){
      console.log(this.val + this.iVal);
    }

    inh(obj){}

  }





};


const switcher = (n) => {
  if(n){
    return trueGame;
  }else{
    return falseGame;
  }
};

document.addEventListener('DOMContentLoaded', switcher(1));

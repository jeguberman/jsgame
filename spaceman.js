import Game from './lib/game';
import Renderer from './lib/renderer';
import merge from 'lodash/merge';
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

  // class AThing{
  //   constructor(){
  //     this.AVal = 1;
  //   }
  //   func(){
  //     console.log("from A");
  //   }
  //   Afunc(){
  //     console.log(this.AVAL);
  //   }
  // }


  const BThing = () => {
    return {
      BVAL: 2,
      func: function(){
        console.log("from B");
      },

      Bfunc: function(){
        console.log(this.BVAL);
      },

      otherFunc: function(){
        this.Afunc();
      }
    };
  };

  const AThing = () => {
    return {
      AVAL: "A",
      func: function(){
        console.log("from A");
      },

      Afunc: function(){
        console.log(this.AVAL);
      }
    };
  };

  let a = new AThing();
  let b = new BThing();
  let ab = merge({},a,b);
  // ab.__proto__ = merge({},a.__proto__,b.__proto__);
  let ap = a.__proto__;
  let bp = b.__proto__;
  let abp = Object.create({},ap,bp);
  // ab.func();
  debugger
};


const switcher = (n) => {
  if(n){
    return trueGame;
  }else{
    return falseGame;
  }
};

document.addEventListener('DOMContentLoaded', switcher(1));

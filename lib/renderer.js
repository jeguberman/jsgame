import Game from './game';
import Menu from './menu';

class Viewer{
  constructor(ctx){
    this.ctx = ctx;
    this.game = new Game();
    this.normalTimeDelta = 1000/this.game.FPS;
  }

  start(){
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  renderGame(velocityScale){
    this.game.step(velocityScale);
    this.game.draw(this.ctx);
  }

  animate(time){
    const timeDelta = time - this.lastTime;
    const idealDelta = 1000/60;
    const velocityScale = timeDelta / idealDelta;
    this.renderGame(velocityScale);
    this.lastTime = time;
    requestAnimationFrame(this.animate.bind(this));
  }

}


module.exports = Viewer;

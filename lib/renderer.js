class Renderer{
  constructor(game, ctx){
    this.game=game;
    this.ctx = ctx;
    this.normalTimeDelta = 1000/game.FPS;
  }

  start(){
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time){
    const timeDelta = time - this.lastTime;
    const idealDelta = 1000/60;
    const velocityScale = timeDelta / idealDelta;
    this.game.step(velocityScale);
    this.game.draw(this.ctx);
    this.lastTime = time;
    requestAnimationFrame(this.animate.bind(this));
  }

}

// const NORMAL_TIME_FRAME_DELTA = 1000/Game.FPS;


module.exports = Renderer;

import MovingObject from './moving_object';
import merge from 'lodash/merge';

class Player extends MovingObject{

  constructor(options){
    options = merge(
      {
        pos:[110,300],
        vel:[0,0],
        acc:[0,0.75],
        term: 10,

        color:"#ff3333",
        width:35,
        height:55
      },
      options
    );
    super(options);
  }

  handleKeys(key){

  }

}
module.exports = Player;

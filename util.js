class Util{
  constructor(){
    this.handleMouse = this.handleMouse.bind(this);
  }
  handleMouse(e){
    console.log('this');
    console.log(e.clientX);
    this.someFunc();
  }
  someFunc(){
    console.log('didit');
  }
}

module.exports = Util;

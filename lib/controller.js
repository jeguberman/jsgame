class Controller{

  controls(){
    return ()=>document.addEventListener('keydown',(e)=>console.log(e.key),false);
  }

}
module.exports = Controller;

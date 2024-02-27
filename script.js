var container =document.querySelector(".container");
var icon = document.querySelector("i");

container.addEventListener('dblclick',()=>{
  icon.style.transform = 'translate(-50%,-50%) scale(1)';
  setTimeout(function(){
  icon.style.transform = 'translate(-50%,-50%) scale(0)';
  },2000)

  
})

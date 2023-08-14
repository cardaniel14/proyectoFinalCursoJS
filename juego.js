let p = document.getElementsByClassName("p")
let div2 = document.getElementById("pJuego")

function reStart(){
    window.location.href = "juego.html";
}

function allowDrop(event) {    
    event.preventDefault();
  }
  
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
function drop(event) {        
    for(para of p){
        para.remove()
    }
    div2.remove()
    event.preventDefault();
    
    
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    event.target.appendChild(draggedElement);
    
    draggedElement.draggable=false;
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      const svg1 = document.querySelector(".svg1");
      
    svg1.style.display = "block";
  }, 2000); 
});

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      const svg2 = document.querySelector(".svg2");
      
    svg2.style.display = "block";
  }, 4000); 
});
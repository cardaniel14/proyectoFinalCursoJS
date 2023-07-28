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
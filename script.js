let btnHistoria = document.querySelector(".boton");
let btnJuego = document.querySelector(".btnjuego");
let duracion = document.getElementById("duracionVideo");
let current = document.getElementById("current");
let video = document.querySelector("video");
let repro;
let play = document.querySelector(".fa-play");
let pause = document.querySelector(".fa-pause");

video.onloadedmetadata = function() {
    
    let minutos = parseInt(this.duration/60);
    let segundos= parseInt(this.duration%60);
    if(minutos===10){
        duracion.innerText=`/${minutos}:${segundos}`
    } else {
        duracion.innerText=`/0${minutos}:${segundos}`
    }
  };


let historiaLi = document.querySelectorAll("li")[0];
let juguemosLi = document.querySelectorAll("li")[1];

historiaLi.addEventListener("click", ()=>{
    window.location.href= "historia.html";
});

juguemosLi.addEventListener("click", ()=>{
    window.location.href = "juego.html";
});

play.addEventListener("click",()=>{
    video.play();
    repro = setInterval(()=>{
        let currentMinutes = Math.floor(video.currentTime/60);
        let currentSeconds = Math.floor(((video.currentTime/60)%1)*60);

        current.textContent=`${currentMinutes}:${currentSeconds}`
         
        if(currentSeconds < 10){
            current.textContent=`0${currentMinutes}:0${currentSeconds}`
            } else if (currentSeconds>=10||currentMinutes<10){
                current.textContent=`0${currentMinutes}:${currentSeconds}` 
            }
       },1000);

});

pause.addEventListener("click",()=>{
    video.pause();    
});

function botonIndex(){
    btnHistoria.addEventListener("click", ()=>{
        window.location.href= "historia.html";
});

btnJuego.addEventListener("click", ()=>{
    window.location.href = "juego.html";
});
};
botonIndex();
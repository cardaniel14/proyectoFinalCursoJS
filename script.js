const duracion = document.getElementById("duracionVideo");
const current = document.getElementById("current");
const video = document.querySelector("video");
let repro;

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const svg1 = document.querySelector(".svg1");

    svg1.style.display = "block";
  }, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const svg2 = document.querySelector(".svg2");

    svg2.style.display = "block";
  }, 4000);
});


function btnHistoria() {
  window.location.href = "historia.html";
}

function btnJuego() {
  window.location.href = "juego.html";
}

video.onloadedmetadata = function () {
  let minutos = parseInt(this.duration / 60);
  let segundos = parseInt(this.duration % 60);
  if (minutos === 10) {
    duracion.innerText = `/${minutos}:${segundos}`
  } else {
    duracion.innerText = `/0${minutos}:${segundos}`
  }
}


function play() {
  video.play();
  repro = setInterval(() => {
    let currentMinutes = Math.floor(video.currentTime / 60);
    let currentSeconds = Math.floor(((video.currentTime / 60) % 1) * 60);

    current.textContent = `${currentMinutes}:${currentSeconds}`

    if (currentSeconds < 10) {
      current.textContent = `0${currentMinutes}:0${currentSeconds}`
    } else if (currentSeconds >= 10 || currentMinutes < 10) {
      current.textContent = `0${currentMinutes}:${currentSeconds}`
    }
  }, 1000);

};

function pause() {
  video.pause();
};





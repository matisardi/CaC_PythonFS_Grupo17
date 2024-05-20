let images = [          //imágenes para el fondo, la última está en el css y se ve primera
    "./img/sports-roller-00.jpg",
    "./img/sports-ride-bike-00.jpg",
    "./img/sport-football-trainer-00.jpg",
    "./img/sport-running-00.jpg"
];
let frases = [
    "... y en que lugares practicarlos",
    "Disfrutá de un momento con amigos...",
    "... mientras realizás una actividad saludable!",
    "Enterate de los deportes que podés hacer al aire libre..."
];
let fraseColor = [
    "black",
    "white",
    "white",
    "black"
];
const bgMain = document.querySelector('#inicio');
const fraseActual = document.querySelector('#inicio p');
let intervalo;
let cambio = 0;

function cambiaFondo() {
    bgMain.style.backgroundImage = "url(" + images[cambio] + ")";  //cambia imagen de fondo
    fraseActual.innerHTML = frases[cambio];
    fraseActual.style.color = fraseColor[cambio];
    cambio++;
    if (cambio >= images.length) cambio = 0;
}

intervalo = setInterval(cambiaFondo, 5000);   //llama función cambiaFondo luego de 5 seg

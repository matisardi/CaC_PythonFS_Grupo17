let images = [          //imágenes para el fondo, la última está en el css y se ve primera
    "./img/sports-roller-00.jpg",
    "./img/sports-ride-bike-00.jpg",
    "./img/sport-football-trainer-00.jpg",
    "./img/sport-running-00.jpg"
];
const bgMain = document.querySelector('main');
let intervalo;
let img = 0;

function cambiaFondo() {
    bgMain.style.backgroundImage = "url(" + images[img] + ")";  //cambia imagen de fondo
    img++;
    if (img >= images.length) img = 0;
}

intervalo = setInterval(cambiaFondo, 5000);                     //llama función cambiaFondo luego de 5 seg

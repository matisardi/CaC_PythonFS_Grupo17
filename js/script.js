let images = [          //imágenes para el fondo, la última está en el css y se ve primera
    '../img/football-trainer-teaching-his-pupils.jpg',
    '../img/young-sportive-couple-doing-yoga-fitness-people-summer-park.jpg',
    '../img/man-woman-running-track-side-view.jpg',
    '../img/people-stretching-park.jpg'
];
const bgMain = document.getElementById("imgMain");
let intervalo;
let img;

function cambiaFondo() {
    bgMain.style.backgroundImage = "url(" + images[img] + ")";  //cambia imagen de fondo
    img++;
    if (img >= images.length) img = 0;
}

for (img = 0; img < images.length; img++) {                     //precarga imágenes
    bgMain.style.backgroundImage = "url(" + images[img] + ")";
}

img = 0;
intervalo = setInterval(cambiaFondo, 5000);                     //llama función cambiaFondo luego de 5 seg

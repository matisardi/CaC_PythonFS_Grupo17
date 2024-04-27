let images = [          //imágenes para el fondo, la última está en el css y se ve primera
    "../img/people-stretching-park_modif.jpg",
    "../img/football-trainer-teaching-his-pupils_modif.jpg",
    "../img/young-sportive-couple-doing-yoga-fitness-people-summer-park_modif.jpg",
    "../img/man-woman-running-track-side-view_modif.jpg"
];
const bodyBefore = document.styleSheets[0].cssRules[1];
const bgMain = document.getElementById("imgMain");
let intervalo;
let img = 0;

// for (let i = 0; i < images.length; i++) {                       //precarga imágenes
//     bodyBefore.style.content = "url(" + images[i] + ")";
// }

// let intBodyBefore = setInterval(function() {                    //precarga imágenes
//     let i = 0;
//     bodyBefore.style.content = "url(" + images[i] + ")";
//     i++;
//     if (i >= images.length) clearInterval(intBodyBefore);
// }, 200);

function cambiaFondo() {
    bgMain.style.backgroundImage = "url(" + images[img] + ")";  //cambia imagen de fondo
    img++;
    if (img >= images.length) img = 0;
}

intervalo = setInterval(cambiaFondo, 5000);                     //llama función cambiaFondo luego de 5 seg

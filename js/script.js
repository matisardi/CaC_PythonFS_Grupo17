let images = [
    '../img/people-stretching-park.jpg',
    '../img/football-trainer-teaching-his-pupils.jpg',
    '../img/young-sportive-couple-doing-yoga-fitness-people-summer-park.jpg',
    '../img/man-woman-running-track-side-view.jpg'
];
const bgMain = document.getElementById("imgMain");
let intervaloFondo;
let img = 0;

function cambiaFondo() {
    bgMain.style.backgroundImage = "url(" + images[img] + ")";
    // bgMain.style = {
    //     backgroundImage : "url(" + images[img] + ")"
    // }
    img++;
    if (img >= images.length) img = 0;
}

intervaloFondo = setInterval(cambiaFondo, 5000);

console.log("hola");
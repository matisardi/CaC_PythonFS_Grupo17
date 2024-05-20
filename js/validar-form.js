const formulario = document.querySelector('#formRegistro');
let mensaje = document.querySelector('#respuestaForm');

function validarDatos() {
    let nombre = document.querySelector('#nombre').value;
    let apellido = document.querySelector('#apellido').value;
    let edad = document.querySelector('#edad').value;
    let correo = document.querySelector('#correo').value;
    
    let soloPalabras = /^[a-z\s]+$/i;
    // let solonumpositivo = /^[0-9]+$/;
    let emailValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let validos = true;
    let msgError = 'Datos inválidos: ';
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(correo);

    if (!soloPalabras.test(nombre)) {
        validos = false;
        msgError += "nombre "
    }
    if (!soloPalabras.test(apellido)) {
        validos = false;
        msgError += "apellido "
    }
    if (edad === '' || !Number.isInteger(Number(edad))) { 
        validos = false;
        msgError += "edad "
    }
    if (!emailValido.test(correo)) {
        validos = false;
        msgError += "correo "
    }
    if (validos) {
        mensaje.innerHTML = `Se guardaron tus datos ${nombre} ${apellido}, te enviaremos información a ${correo}`;
        console.log('Datos ingresados correctamente.')
    } else {
        mensaje.innerHTML = msgError;
        console.log(msgError);
    }
}

formulario.addEventListener('submit', evento => {
    validarDatos();
    evento.preventDefault();
})

console.log('Fin del algoritmo');
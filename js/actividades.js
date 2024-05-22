document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto

        // Obtener el nombre y comentario del formulario
        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        // Crear un nuevo elemento de comentario
        const newComment = document.createElement('p');
        newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;

        // Agregar el nuevo comentario a la lista
        commentList.appendChild(newComment);

        // Limpiar los campos del formulario
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
    });
});

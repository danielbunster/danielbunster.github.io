// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.getElementById('titulo');
    const boton = document.getElementById('boton');

    // Cambiar el texto inicial
    titulo.textContent = "¡Hola Mundo!";

    // Evento al hacer clic en el botón
    boton.addEventListener('click', () => {
        alert('¡Funciona perfectamente desde GitHub Pages!');
        titulo.style.color = '#28a745'; // Cambia el color a verde
    });
});

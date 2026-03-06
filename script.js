// IDs-Cuestionario
const formQuiz = document.getElementById('lofiQuiz');
const bloqueCuestionario = document.getElementById('quizBlock');
const bloqueResultado = document.getElementById('quizResult');
// Programamos qué pasa cuando se envía el formulario
formQuiz.onsubmit = function(e) {
// e.preventdefault-Evita que la pagina se vuelva a cargar al eniviar el formulario 
e.preventDefault();
// 1.- Oculta el cuestionario dejando visible solo el cuadro de texto de agradecimiento 
bloqueCuestionario.style.display = 'none';
// 2.- Mostramos el mensaje de agradecimiento
bloqueResultado.style.display = 'block';
// 3.- Escribimos lo que queremos mostarar al usuario al concluir el cuestionario 
bloqueResultado.innerHTML = `<h2 style="color: #e94560;"> Gracias por tu respuesta :)</h2>
                             <p> Abajo encontratas albunes que podrian gustarte </p>`
};
// IDs-carrucel 
const carousel = document.getElementById('carousel');
const audio = document.getElementById('lofiTrack');
const statusText = document.getElementById('status');
// 1.- Función para mover el Carrusel
function scrollCarousel(direction) {
const scrollAmount = 310; // Ancho de imagen y margen
carousel.scrollLeft += direction * scrollAmount; // Movimiento del carrucel "toma el valor actual y súmale lo siguiente" 
}
// 2.- Eventos de botones de flechas
document.getElementById('btnPrev').onclick = () => scrollCarousel(-1); // Esta linea resta -310px se mueve a la izquierda
document.getElementById('btnNext').onclick = () => scrollCarousel(1);  // Esta linea suma 310px se mueve a la derecha 
// 3.- Evento de Teclado con el evento del obejto , le dice al navegador que este atento a cuando haya un evento de teclado y ejecute la funcion de movimiento 
window.onkeydown = (e) => {
    if (e.key === "ArrowLeft") scrollCarousel(-1);
    if (e.key === "ArrowRight") scrollCarousel(1);
};
// 4.-ID del audio y el Control de Audio esta atento al evento del boton de audio y ejecuta la reproduccion 
const btnAudio = document.getElementById('btnAudio');
btnAudio.onclick = () => {
    if (audio.paused) {
        audio.play();
        statusText.innerText = "Disfruta la pieza que elegimos para ti :)";
    } else {
        audio.pause();
        statusText.innerText = "Presiona nuevamente para seguir disfrutando =D";
    }
}
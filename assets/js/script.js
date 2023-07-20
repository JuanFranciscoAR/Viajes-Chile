// Agregamos el evento de scroll para detectar cuando se hace scroll
window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");

    // Obtenemos la posición vertical del scroll
    var scrollPosition = window.scrollY;

    // Agregamos o quitamos la clase "scrolled" dependiendo de la posición del scroll
    if (scrollPosition > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

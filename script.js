document.addEventListener("DOMContentLoaded", function() {
    
    var titulo = document.getElementById("saludo");
    titulo.style.textAlign = "center";

   
    var boton = document.querySelector("button");
    boton.style.display = "block";
    boton.style.margin = "0 auto";

    function cambiarNombre() {
        var nombre = prompt("¿Cuál es tu nombre?");
        if (nombre) {
            titulo.textContent = "Hola, " + "¡" + nombre + "!";
        }
    }

    boton.addEventListener("click", cambiarNombre);
});

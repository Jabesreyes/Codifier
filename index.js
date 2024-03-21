document.addEventListener("DOMContentLoaded", function() {
    const btnEncriptar = document.getElementById("btn-encriptar");
    const btnDesencriptar = document.getElementById("btn-desencriptar");

    // Configurando el boton Encriptar como seleccionado por defecto
    btnEncriptar.classList.add("selected");

    // Agregando eventos clic a los botones
    btnEncriptar.addEventListener("click", function() {
        btnEncriptar.classList.add("selected");
        btnDesencriptar.classList.remove("selected");
    });

    btnDesencriptar.addEventListener("click", function() {
        btnDesencriptar.classList.add("selected");
        btnEncriptar.classList.remove("selected");
    });
});

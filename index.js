document.addEventListener("DOMContentLoaded", function() {
    const btnEncriptar = document.getElementById("btn-encriptar");
    const btnDesencriptar = document.getElementById("btn-desencriptar");

    function Encriptar(){
        let texto = document.getElementById("texto").value;
        let mensajeEncriptado = document.getElementById("mensaje");


        if (texto.length === 0) {
            swal("Texto Vacío", "Por favor ingrese un texto para encriptar", "warning");
            return;
        }else if (!/^[a-z]+$/.test(texto)) {
            swal("Texto Invalido", "Porfavor, ingresa solamente texto en minuscula y sin caracteres especiales o acentos", "warning");
            return; 
        }

        let encriptado = texto
                    .replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/a/g, "ai")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");
        
        mensajeEncriptado.textContent = encriptado;

        document.getElementById("muñeco").style.display = "none";
        document.getElementById("ningun").style.display = "none";

        document.getElementById("copiar").style.display = "block";
        
    }   
    // Configurando el boton Encriptar como seleccionado por defecto
    btnEncriptar.classList.add("selected");

    // Agregando eventos clic a los botones
    btnEncriptar.addEventListener("click", function() {
        btnEncriptar.classList.add("selected");
        btnDesencriptar.classList.remove("selected");    
        Encriptar();    
    });

    btnDesencriptar.addEventListener("click", function() {
        btnDesencriptar.classList.add("selected");
        btnEncriptar.classList.remove("selected");
    });
    // QUITA EL BOTON DE COPIAR TEXTO
    document.getElementById("copiar").style.display = "none";

});


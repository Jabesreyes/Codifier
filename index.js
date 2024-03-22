document.addEventListener("DOMContentLoaded", function() {
    const btnEncriptar = document.getElementById("btn-encriptar");
    const btnDesencriptar = document.getElementById("btn-desencriptar");
    const btnCopiar = document.getElementById("copiar");

    // Funcion para copiar el texto encriptado
    function CopiarTexto() {
        let text = document.getElementById("mensaje");
        navigator.clipboard.writeText(text.textContent);
        swal("Texto Copiado", "El texto encriptado ha sido copiado al portapapeles", "success");
    }

    // Funcion para encriptar el texto
    function Encriptar(){
        // Obteniendo el texto ingresado por el usuario
        let texto = document.getElementById("texto").value;
        // Obteniendo el elemento donde se mostrará el mensaje encriptado y declarandolo
        let mensajeEncriptado = document.getElementById("mensaje");


        if (texto.length === 0) {
            swal("Texto Vacío", "Por favor ingrese un texto para encriptar", "warning");
            return;
        } else if (!/^[a-z\s]+$/.test(texto)) {
            // Si el texto contiene caracteres especiales o numeros, mostrar un mensaje de error
            swal("Texto Invalido", "Por favor, ingresa solamente texto en minúscula y sin caracteres especiales o acentos", "warning");
            return; 
        }
        // Encriptando el texto utilizando .replace que utiliza las vocales como parametro inicial y g como global para que sea sensible a todas las vocales
        let encriptado = texto
                    .replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/a/g, "ai")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");
        
        mensajeEncriptado.textContent = encriptado;

        // Haciendo que el mensaje encriptado sea visible y que el muñeco y el mensaje de error sean invisibles y el boton de copiar visible
        document.getElementById("muñeco").style.display = "none";
        document.getElementById("ningun").style.display = "none";

        document.getElementById("copiar").style.display = "block";

        swal("Texto Encriptado", "El texto ha sido encriptado correctamente", "success");
    }   

    function Desencriptar(){
        // Obteniendo el texto ingresado por el usuari
        let texto = document.getElementById("texto").value;
        // Obteniendo el elemento donde se mostrará el mensaje desencriptado y declarandolo
        let mensajeDesencriptado = document.getElementById("mensaje");


        if (texto.length === 0) {
            swal("Texto Vacío", "Por favor ingrese un texto para desencriptar", "warning");
            return;
        } else if (!/^[a-z\s]+$/.test(texto)) {
            // Si el texto contiene caracteres especiales o numeros, mostrar un mensaje de error
            swal("Texto Invalido", "Por favor, ingresa solamente texto en minúscula y sin caracteres especiales o acentos", "warning");
            return; 
        }
        
        let desencriptado = texto
                    .replace(/enter/g, "e")
                    .replace(/imes/g, "i")
                    .replace(/ai/g, "a")
                    .replace(/ober/g, "o")
                    .replace(/ufat/g, "u");
        
        mensajeDesencriptado.textContent = desencriptado;

        // Haciendo que el mensaje desencriptado sea visible y que el muñeco y el mensaje de error sean invisibles y el boton de copiar visible
        document.getElementById("muñeco").style.display = "none";
        document.getElementById("ningun").style.display = "none";

        document.getElementById("copiar").style.display = "block";

        swal("Texto Desencriptado", "El texto ha sido desencriptado correctamente", "success");
    }


    btnCopiar.addEventListener("click", function() {
        CopiarTexto();
    });
    
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

        Desencriptar();
    });
    // Quita el boton de copiar al cargar la pagina
    document.getElementById("copiar").style.display = "none";

});


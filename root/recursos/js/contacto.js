import { crearMensaje } from "./validacion.js";

const $formulario = document.getElementById("formulario")
const numeroWhatsApp = '5493517019291'; 

$formulario.addEventListener("submit", (evento) => {

    const resultadoErrores = crearMensaje()

    evento.preventDefault()

    if(resultadoErrores > 0) {
        return
            
    } else {
        // 2. Recupera los valores de los campos
        const nombre = document.getElementById('id-nombre').value;
        const email = document.getElementById('id-email').value;
        const telefono = document.getElementById('id-telefono').value;
        const comentario = document.getElementById('id-comentario').value;

        // 3. Construye el mensaje con los datos (usando \n para saltos de línea)
        // Se usa encodeURIComponent para manejar espacios y caracteres especiales de la URL.
        const mensajeBase = `¡Hola! Quiero sumar mi viñedo a Mini Wine Argentina.

*•Nombre del viñedo*: ${nombre}

*•Email*: ${email}

*•Teléfono*: ${telefono}

*•Comentario*: 
${comentario}
`;
        const mensajeCodificado = encodeURIComponent(mensajeBase);

        // 4. Crea la URL completa de WhatsApp
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

        // 5. Redirige al usuario a la URL de WhatsApp
        // Usa window.location.href para la misma pestaña, o window.open(urlWhatsApp, '_blank') para una nueva pestaña.
        window.open(urlWhatsApp, '_blank');
    }

})
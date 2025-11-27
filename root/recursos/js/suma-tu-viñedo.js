import {mostrarMensajeError, crearMensajeWhatsapp} from "./validacion.js";

const $contenedorErrores = document.getElementById("formulario__errores")
const $formularioSumaTuViñedo = document.getElementById("formulario-suma-tu-viñedo")
const numeroWhatsApp = '5493517019291'; 

$formularioSumaTuViñedo.addEventListener("submit", (evento) => {
    // 2. Recupera los valores de los campos
    const $nombre = document.getElementById('id-nombre').value.trim();
    const $email = document.getElementById('id-email').value.trim();
    const $telefono = document.getElementById('id-telefono').value.trim();
    const $comentario = document.getElementById('id-comentario').value.trim();

    const mensajeSumaTuViñedo = `Mensaje proveniente de *Sumá tu viñedo*:

    *•Nombre del viñedo*: ${$nombre}

    *•Email*: ${$email}

    *•Teléfono*: ${$telefono}

    *•Comentario*: 
    ${$comentario}
    `
    evento.preventDefault()

    const errores = mostrarMensajeError($contenedorErrores, $nombre, $email, $telefono, $comentario)

    if(errores === 0) {
        crearMensajeWhatsapp(mensajeSumaTuViñedo, numeroWhatsApp)
    }
})
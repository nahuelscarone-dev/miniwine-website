import { validarCampos } from "./validacion.js";

const $formulario = document.getElementById("formulario")

const $contenedor = document.getElementById("formulario__errores")

$formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const $nombre = document.getElementById("id-nombre").value.trim()
    const $email = document.getElementById("id-email").value.trim()
    const $telefono = document.getElementById("id-telefono").value.trim()
    const $comentario = document.getElementById("id-comentario").value.trim()

    const errores = validarCampos($nombre, $email, $telefono, $comentario)

    if(errores.length === 0) {
        $contenedor.innerHTML = ""
        $formulario.submit()
        $contenedor.innerHTML = "El formulario fue enviado exitosamente"
        $contenedor.style.color = "#7aff73"
        document.getElementById("id-nombre").value = ""
        document.getElementById("id-email").value = ""
        document.getElementById("id-telefono").value = ""
        document.getElementById("id-comentario").value = ""
    } else {
        // errores.forEach(element => {
        //     $contenedor.innerHTML = errores.join("<br>")
        // });
        $contenedor.innerHTML = errores[0]
        $contenedor.style.color = "#ff4545";
        
        // .join("<br>")
    }
})
function validarNombre(nombre, errores) {

    if(nombre === "") {
        errores.push("El nombre no puede estar vacío.")
    }
    if (nombre.length < 2) {
        errores.push("El nombre es demasiado corto.");
    }
    if (nombre.length > 50) {
        errores.push("El nombre es demasiado largo.");
    }

    const nombreRegex = /^(?=.*[a-zA-ZÁÉÍÓÚáéíóúñÑüÜ])[a-zA-ZÁÉÍÓÚáéíóúñÑüÜ0-9\s'-]+$/

    if(nombreRegex.test(nombre) === false) {
        errores.push("El nombre no es válido.");
    }
}

function validarEmail(email, errores) {
 
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    
    if(emailRegex.test(email) === false) {
        errores.push("El email no es válido.")
    }
}

function validarTelefono(telefono, errores) {
    const telefonoRegex = /^\+?\d[\d\s\-()]{8,14}\d$/

    // if(telefeno.trim() === "") {
    //     errores.push("El teléfono no puede estar vacío.")
    // }

    if(telefonoRegex.test(telefono) === false) {
        errores.push("El teléfono no es válido.")
    }
}

function validarComentario(comentario, errores) {
    if(comentario === "") {
        errores.push("El comentario no puede estar vacío.")
    }

    if (comentario.length < 10) {
        errores.push("El comentario es demasiado corto.");
    }

    const comentarioRegex = /^(?=.*[a-zA-ZÁÉÍÓÚáéíóúñÑüÜ]).+$/

    if(comentarioRegex.test(comentario) === false) {
        errores.push("El comentario no es válido.")
    }
}

function validarCampos(nombre, email, telefono, comentario) {
    const errores = []
    validarNombre(nombre, errores)
    validarEmail(email, errores)
    validarTelefono(telefono, errores)
    validarComentario(comentario, errores)

    return errores
}

function crearMensaje() {
    // evento.preventDefault()

    const $contenedor = document.getElementById("formulario__errores")
    const $nombre = document.getElementById("id-nombre").value.trim()
    const $email = document.getElementById("id-email").value.trim()
    const $telefono = document.getElementById("id-telefono").value.trim()
    const $comentario = document.getElementById("id-comentario").value.trim()

    const errores = validarCampos($nombre, $email, $telefono, $comentario)

    if(errores.length === 0) {
        $contenedor.innerHTML = ""
    } else {
        $contenedor.innerHTML = errores[0]
        $contenedor.style.color = "#ff4545";
    }

    return errores.length
}

export {crearMensaje}
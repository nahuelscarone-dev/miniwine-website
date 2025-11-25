const $boton = document.getElementById("navegacion__boton")
const $navegacion = document.getElementById("navegacion")
const $overlay = document.getElementById("overlay-menu")

const $menu = document.getElementById("navegacion");

const mediaQuery = window.matchMedia("(min-width: 768px)");

$boton.addEventListener("click", () => {
    // if($navegacion.style.display === "flex") {
    //     $navegacion.style.display = "none"

    // } else {
    //     $navegacion.style.display = "flex"
    // }

    $navegacion.classList.toggle("navegacion--abierta")
    $overlay.classList.toggle("overlay-menu--abierto")
    document.body.classList.toggle("no-scroll")
})

function chequearAncho(e) {
    if (e.matches) {  
        // Pantalla >= 768px
        $menu.classList.remove("navegacion--abierta");
        $overlay.classList.remove("overlay-menu--abierto")
        document.body.classList.remove("no-scroll"); // si bloqueás scroll
    }
}

mediaQuery.addEventListener("change", chequearAncho);
import { obtenerDatos } from "./datos.js";
import { renderizarCatalogo } from "./renderizado.js";

const datos = await obtenerDatos("./datos/catalogo.json");
const $contenedor = document.getElementById("seccion-productos")
const $filtroPresentacion = document.getElementById("id-presentacion")
const $filtroOrdenar = document.getElementById("id-ordenar")

filtrarProductos();

$filtroPresentacion.addEventListener("change", filtrarProductos)
$filtroOrdenar.addEventListener("change", filtrarProductos)

function filtrarProductos() {

    const presentacionElegida = Number($filtroPresentacion.value)
    const ordenElegido = $filtroOrdenar.value

    let datosFiltrados = [...datos]

    if(presentacionElegida !== 0) {
        datosFiltrados = datosFiltrados.filter(
            producto => producto.presentacion === presentacionElegida
        )
    }

    switch (ordenElegido) {
        case "menor":
            datosFiltrados.sort(function(a, b) {
                if (a.precio < b.precio) return -1;
                if (a.precio > b.precio) return 1;
                return 0;
            });
            break;

        case "mayor":
            datosFiltrados.sort(function(a, b) {
                if (a.precio > b.precio) return -1;
                if (a.precio < b.precio) return 1;
                return 0;
            });
            break;

        case "nuevo":
        default:
            datosFiltrados.sort(function(a, b) {
                if (a.id > b.id) return -1;
                if (a.id < b.id) return 1;
                return 0;
            });
            break;

        /*
            número negativo → a va ANTES que b
            número positivo → b va ANTES que a
            0 → deja el orden igual
        */
    }

    renderizarCatalogo(datosFiltrados, $contenedor)
}


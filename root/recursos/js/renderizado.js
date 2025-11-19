function renderizarCatalogo(arreglo, $contenedor) {
    let HTMLproductos = ""
    arreglo.forEach(element => {

        const HTMLproducto = `

        <article class="tarjeta-producto">
            <div class="tarjeta-producto__contenedor-titulo">
                <h2 class="tarjeta-producto__titulo">${element.nombre}</h2>
            </div>
            
            <div class="tarjeta-producto__imagen-contenedor">
                <img class="tarjeta-producto__imagen" src="${element.imagen.src}" alt="${element.imagen.alt}">
            </div>
    
            <div class="tarjeta-producto__contenedor-parrafo">
                <p class="tarjeta-producto__parrafo">${element.descripcion}</p>
            </div>

            <div class="tarjeta-producto__contenedor-precio">
                <p class="tarjeta-producto__precio"><strong>$${element.precio}</strong></p>
            </div>
        </article>
        `
        
        HTMLproductos += HTMLproducto
    });

    $contenedor.innerHTML = HTMLproductos
}

export {renderizarCatalogo}
async function obtenerDatos(url){

    const respuesta = await fetch(url)
    
    const datos = await respuesta.json()
    
    return datos
}

export {obtenerDatos}
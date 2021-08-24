const colecionesPermitidas = (coleccion = '' , colecciones = []) => {
    const incluida = colecciones.includes(coleccion);

    if(!incluida){
        throw new Error(`La colección ${ coleccion } no es valida ${colecciones } .`);
    }
    return true;
}
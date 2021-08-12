
const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
  };


  const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, rows, totalPages, currentPage };
  };

 const  validaNulls = async( valor ) => {

  let isNull = true;

  if(valor != null || valor != undefined){
    isNull = false;
  }

  return isNull;

  }

  const validaLista = async( arreglo ) => {
    let isArray = false;
       
    if(Array.isArray(arreglo)){
      if(arreglo.length != undefined  || arreglo.length != null){
        isArray = true;
     }
    } 

    return isArray;
  }

  const validaListaVacia = async ( arreglo ) => {

    let isArrayVacio = true;

    if(arreglo.length > 0 ){
      isArrayVacio = false;
    }

    return isArrayVacio;

  }



  module.exports = {
    getPagination,
    getPagingData,
    validaLista,
    validaListaVacia,
    validaNulls
  }
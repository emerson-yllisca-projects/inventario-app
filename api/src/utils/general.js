
const getPagination = (page, size) => {

    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;
  
    return { 
      limit, 
      offset 
    };
  };

  const getPagingData = (data, page, limit) => {

    const { count: totalItems, rows } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { 
      totalItems, 
      rows, 
      totalPages, 
      currentPage 
    };
  };

  const getErrorResponse = (res , error)  => {

    return res.status(500).json({
      ok:false , 
      Message: 'Hubo un error inesperado',
      Error:error.message
    });

  }

  const getNotFoundResponse = (res , model ) => {
    return res.status(401).json({
      ok:false,
      Message:`Not Found ${model}`
    });
  }

  const StatusSucessResponses = ( res) => {
    return res.status(200)
  }

  module.exports = {
    getPagination,
    getPagingData,
    getErrorResponse,
    StatusSucessResponses,
    getNotFoundResponse
  }
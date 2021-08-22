const _ = require('lodash');

const { Productos , Marca , Proveedor , Categorias } = require('../models');
const { getPagination , getPagingData , getErrorResponse } = require('../utils/general')
const { buscarProductoPorId, buscarMarcasPorId, buscarProveedorPorId, buscarCategoriaPorId } = require('../utils/modelosUtils')
const logger = require('../../config/server/logger');

const getAll = async ( req , res ) => {

  const { page } = req.query; 

  logger.info('Listando los Productos..');
  
  try {    

    const { limit, offset } = getPagination(page, 10);
    
    const data = await Productos.findAndCountAll({
      offset,
      limit,
      include: [
          {
            model: Marca,
            as:'marca'
          },
          {
            model:Proveedor,
            as:'proveedor'
          },
          {
            model:Categorias,
            as:'categoria'
          }
      ]
    });
  
    logger.info('Paginando Productos...');

    const response = getPagingData(data, page, limit);
  
    return res.json({
      ok:true,
      response
    });

  } catch (error) {return getErrorResponse(res, error);}
   
}

const getOne = async( req , res ) => {

  const { id } = req.query;

  try {
    
    let data = await buscarProductoPorId(id);

    if(!data){
        data = {};
    }

    return res.status(200).json({
        ok:true,
        producto:data
    });
    
  } catch (error) {
    return getErrorResponse(res , error);
  }
}

const create = async ( req , res ) => {

  let productoTemp = {};

  let data = _.pick( req.body , [
    'nombre_producto',
    'descripcion_producto',
    'marca_id',
    'categoria_id',
    'proveedor_id',
    'precio',
    'stock'
  ]);

  data.createdAt = new Date();
  data.updatedAt = new Date();

  try {

    const existeMarca = await buscarMarcasPorId(data.marca_id);
 
    if(!existeMarca){
      return res.status( 404 ).json({
        ok:false,
        Message:`La marca con id ${data.marca_id} no existe`
      })
    }

    const existeProveedor = await buscarProveedorPorId(data.proveedor_id);

    if(!existeProveedor){
      return res.status( 404 ).json({
        ok:false,
        Message:`El proveedor con id ${data.proveedor_id} no existe`
      });
    }

    const existeCategorias = await buscarCategoriaPorId(data.categoria_id);

    if(!existeCategorias){
      return res.status( 404 ).json({
        ok:false,
        Message:`La categoria con id ${data.categoria_id} no existe`
      });
    }

    productoTemp =   JSON.parse(JSON.stringify(await Productos.create(data)));
    const nuevoProducto = await buscarProductoPorId(productoTemp.id);
    
    return res.status(201).json({
     ok:true,
     message:'Producto creado',
     product:nuevoProducto
   });
    
  } catch (error) {
    return getErrorResponse(res, error)  
  }
  
}

const update = async (req , res ) => {
  
}

module.exports = {
    getAll,
    getOne,
    create,
    update
}
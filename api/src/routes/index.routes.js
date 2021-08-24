const { Router } = require('express');
const productosRoutes = require('./productos.routes');
const categoriasRoutes = require('./categorias.routes');
const marcasRoutes = require('./marcas.routes');
const proveedorRoutes = require('./proveedores.routes');
const uploadsRoutes = require('./uploads.routes');
const router = Router();
router.use('/categorias' , categoriasRoutes);
router.use('/marcas' , marcasRoutes);
router.use('/productos' , productosRoutes);
router.use('/proveedores' , proveedorRoutes);
router.use('/uploads' , uploadsRoutes)

module.exports = router;

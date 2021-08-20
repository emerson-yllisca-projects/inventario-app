const { Router } = require('express');
const productosRoutes = require('./productos.routes');
const categoriasRoutes = require('./categorias.routes');
const marcasRoutes = require('./marcas.routes');
const proveedorRoutes = require('./proveedores.routes');

const router = Router();
router.use('/categorias' , categoriasRoutes);
router.use('/marcas' , marcasRoutes);
router.use('/productos' , productosRoutes);
router.use('/proveedores' , proveedorRoutes);

module.exports = router;

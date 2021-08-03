const { Router } = require('express');
const productosRoutes = require('./productos.routes');
const categoriasRoutes = require('./categorias.routes');
const marcasRoutes = require('./marcas.routes');

const router = Router();
router.use('/productos' , productosRoutes);
router.use('/categorias' , categoriasRoutes);
router.use('/marcas' , marcasRoutes)
module.exports = router;

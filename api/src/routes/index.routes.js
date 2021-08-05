const { Router } = require('express');
const productosRoutes = require('./productos.routes');
const categoriasRoutes = require('./categorias.routes');
const marcasRoutes = require('./marcas.routes');

const router = Router();
router.use('/categorias' , categoriasRoutes);
router.use('/marcas' , marcasRoutes)
router.use('/productos' , productosRoutes);
module.exports = router;

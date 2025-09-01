const express = require('express');
const router = express.Router();
const producto = require('../controllers/producto.controller');

//mostrar img en el frontend
router.get('/productos', producto.mostrarProductos); //mustra todos los productos

//paneladmin
router.post('/crearproducto', producto.crearProducto);//creas producto (panel-admin)
router.put('/productos/:id', producto.actualizarProducto);
router.delete('/productos/:id', producto.eliminarProducto);


module.exports = router;
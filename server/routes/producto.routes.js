const express = require('express');
const router = express.Router();
const producto = require('../controllers/producto.controller');

router.post('/crearproducto', producto.crearProducto);//creas producto (panel-admin)

module.exports = router;
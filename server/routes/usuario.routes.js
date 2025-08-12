const express = require('express');
const router = express.Router();
const usuario = require('../controllers/usuario.controller');

//ruta de los usuarios
router.post("/registro", usuario.crearUsuario); //ruta que crea usuarios

module.exports = router;










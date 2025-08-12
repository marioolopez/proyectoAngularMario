const express = require('express');
const router = express.Router();
const usuario = require('../controllers/usuario.controller');

//ruta de los usuarios
router.post("/registro", usuario.crearUsuario); //ruta que crea usuarios
router.post("/comprobar", usuario.comprobarUsuario); //comprueba el mail a la hora de crear uno nuevo

module.exports = router;










const express = require('express');
const router = express.Router();
const usuario = require('../controllers/usuario.controller');

//ruta de los usuarios
router.post("/registronuevo", usuario.crearUsuario);

//para PANEL ADMIN
router.get("/", usuario.mostrarUsuario);     //listar todos primero
router.put("/:id", usuario.actualizarUsuario);  
router.delete("/:id", usuario.eliminarUsuario); 

//buscar un usuario por mail (login)
router.get("/:email", usuario.comprobarUsuario);



module.exports = router;
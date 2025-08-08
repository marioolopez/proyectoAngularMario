const usuario = require('../models/usuario');
const usuarioController = {};  //es una forma de inicializar un objeto


//crear usuario
usuarioController.crearUsuario = async(req, res) =>{

    const { email } = req.body; //lo recoges por el cuerpo de el html
    const existeUsuario = await usuario.findOne

};



const usuario = require('../models/usuario');
const usuarioController = {};  //es una forma de inicializar un objeto

//crear usuario
usuarioController.crearUsuario = async(req, res) =>{
    try{
    const { email } = req.body; //lo recoges por el cuerpo de el html
    const existeUsuario = await usuario.findOne({email});

    if(existeUsuario){
        return res.json("El usuario ya existe");
    }
    else{
        const nuevoUsuario = new usuario({
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            email: req.body.email,
            contra: req.body.contra,
            rol: req.body.rol,
        });
        await nuevoUsuario.save();
        res.json({status :"Usuario registrado correctamente"});
    }
    }catch(error){
        res.status(500).json({status:"Error al registrar!"})
    }
};



module.exports = usuarioController;
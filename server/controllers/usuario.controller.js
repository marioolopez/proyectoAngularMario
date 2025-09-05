const usuario = require('../models/usuario');
const usuarioController = {}; //es una forma de inicializar un objeto


//muestra en panel admin todos los usuarios(clientes)
usuarioController.mostrarUsuario = async(req, res) =>{
    try {
    const usuarios = await usuario.find();
    res.json(usuarios);
    }catch (err) {
    res.status(500).json({message:'Error al obtener usuarios'});
    }
};



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



//actualizar usuario
usuarioController.actualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuarioActualizado = await usuario.findByIdAndUpdate(id, req.body, { new: true });
    res.json(usuarioActualizado);
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizar usuario' });
  }
};



//eliminar usuario
usuarioController.eliminarUsuario = async (req, res) => {
  try {
    await usuario.findByIdAndDelete(req.params.id);
    res.json({ status: "Usuario eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar usuario' });
  }
};



//metodo para comprar usuarios de la bbdd a la hora de IniciarSesion
usuarioController.comprobarUsuario = async(req, res) =>{
    const emailExistente = await usuario.findOne({ email: req.params.email }); //devuelve por parametros el email de la persona
    if(emailExistente){
        return res.json(emailExistente);
    }else{
        return res.status(400).json({message: 'Usuario no encontrado!'});
    }
};  



module.exports = usuarioController;
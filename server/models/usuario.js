const mongoose = require("mongoose");
const {Schema} = mongoose;

const usuarioEsquema = new Schema({
    nombre : {type: String, required: true},
    contra : {type: String, required: true},
    direccion: {type: String, required: true},
    telefono : {type: String, required: true},
    email : {type: String, required: true},
    rol : {type:String, default: 'Cliente'}
});

module.exports = mongoose.model('usuario', usuarioEsquema);
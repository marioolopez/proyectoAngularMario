const mongoose = require('mongoose');
const {Schema} = mongoose;

const productoEsquema = new Schema({
    nombreProducto : {type: String, required: true},
    stockDisponible : {type: Number, required: true},
    precio: {type: Number, required: true},
    cantidadCogida: {type: Number, required: true},
    tipoProducto: {type: String, required: true},
    imagen : {type: String, required: true}
});

module.exports = mongoose.model('producto', productoEsquema);
const mongoose = require('mongoose');
const {Schema} = mongoose;

const carritoEsquema = new Schema({
    emailUsuario: String,
    productos: [{
        nombreProd: {type:String, required: true},
        cantidad: {type: Number, default: 1}, //por defecto sera 1
        precio: {type: Number},
        stock: {type:Number}
    }],
    total : {type: Number, required: true} //total de la compra de ese usuario
});

module.exports = mongoose.model('carrito', carritoEsquema);
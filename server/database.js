const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/TDeElectrica';

mongoose.connect(URI)
    .then(db => console.log('conexion exitosa a la base de datos'))
    .catch(err => console.log('error en la conexion'));
module.exports = mongoose;
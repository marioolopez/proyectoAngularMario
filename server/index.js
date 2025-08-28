const express = require('express'); 
const app = express(); 
const morgan = require('morgan');
const cors = require('cors');
app.use(cors({origin: 'http://localhost:4200'}))
const { mongoose } = require ('./database.js');

app.use(morgan('dev'))
app.use(express.json())
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log("servidor ejecutandose en el puerto ", app.get('port'));
})

//solo hacer esta parte para registrar usuarios
app.use('/usuarios',require('./routes/usuario.routes')); //la primera palabra es como se te va a crear en la bbdd
app.use('/producto', require('./routes/producto.routes.js'));
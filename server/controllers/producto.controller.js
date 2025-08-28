const Producto = require('../models/producto');
const productoController = {};


//metodo para crear el producto (panel-admin)
productoController.crearProducto = async (req, res) => {
  const productoExistente = await Producto.findOne({ nombre: req.body.nombre });
  if (productoExistente) {
    return res.status(400).json({ status: 'El nombre del producto ya existe' });
  }
  
  try {
    const nuevoProd = new Producto({
      nombreProducto: req.body.nombreProducto,
      stockDisponible: req.body.stockDisponible,
      precio: req.body.precio,
      cantidadCogida: req.body.cantidadCogida,
      tipoProducto: req.body.tipoProducto,
      imagen: req.body.imagen
    });

    await nuevoProd.save();
    res.status(201).json(nuevoProd);
  } catch (error) {
    res.status(500).json({ status: 'Error al crear el producto', error });
  }
};

module.exports = productoController;
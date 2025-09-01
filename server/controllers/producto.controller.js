const Producto = require('../models/producto');
const productoController = {};


//mostrar productos en el frontend(imagenes)
productoController.mostrarProductos = async(req, res) =>{
  try{
    const productos = await Producto.find();
    res.json(productos);
  }catch(error){
    res.status(500).json({ message: 'Error al obtener los productos', error });
  }
};


//crear el producto (paneladmin)
productoController.crearProducto = async (req, res) => {
  const productoExistente = await Producto.findOne({ nombreProducto: req.body.nombreProducto });
  if (productoExistente) {
    return res.status(400).json({ status: 'El nombre del producto ya existe' });
  }
  try {
    const nuevoProd = new Producto({
      nombreProducto: req.body.nombreProducto,
      stockDisponible: req.body.stockDisponible,
      precio: req.body.precio,
      tipoProducto: req.body.tipoProducto,
      imagen: req.body.imagen
    });

    await nuevoProd.save();
    res.status(201).json(nuevoProd);
  } catch (error) {
    res.status(500).json({ status: 'Error al crear el producto', error });
  }
};


//actualizar productos (paneladmin)
productoController.actualizarProducto = async(req, res) =>{
    const { id } = req.params;
    const productosActualizado = await Producto.findByIdAndUpdate(id, req.body, { new : true});
    res.json(productosActualizado);
};



//eliminar productos (paneladmin)
productoController.eliminarProducto = async(req, res) =>{
  const { id } = req.params;
  const productoEliminado = await Producto.findByIdAndDelete(id);
  if(!productoEliminado){
    return res.status(404).json({message: 'Producto no encontrado'});
  }
  res.json({message: 'Producto eliminado correctamente'});
};



module.exports = productoController;
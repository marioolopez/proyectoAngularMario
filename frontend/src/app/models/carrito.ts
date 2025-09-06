export class Carrito {
  _id: string;
  emailUsuario:string;
  productos: ProductoCarrito[]; //productos en el carrito
  totalCarrito: number;
  constructor(){
    this._id = '';
    this.emailUsuario = '';
    this.productos = [];
    this.totalCarrito = 0;
  }
}


export class ProductoCarrito {
  nombreProd: string;
  cantidad: number;
  precio: number;
  stock: number;
  constructor(){
    this.nombreProd = '';
    this.cantidad = 0;
    this.precio = 0;
    this.stock = 0;
  }
}

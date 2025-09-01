export class Producto {
  _id: string;
  nombreProducto: string;
  stockDisponible: number;
  precio: number;
  tipoProducto: string;
  imagen: string
  constructor(){
    this._id = '';
    this.nombreProducto = '';
    this.stockDisponible = 0;
    this.precio = 0;
    this.tipoProducto = '';
    this.imagen = '';
  }
}

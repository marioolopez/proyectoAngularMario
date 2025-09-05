import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductoService{
  readonly url="http://localhost:3000/producto/";
  Productos:Array<Producto>=[]; //array de productos
  Prod: Producto; //objeto producto

  constructor(private http: HttpClient) {
    this.Prod = new Producto();
  }

  //PANEL ADMIN DE PRODUCTOS CRUD
  crearProducto(Prod: Producto){ //crear producto
    return this.http.post(this.url+'crearproducto', Prod);
  }

  mostrarProductos(){ //para mostrar todos los productos en la vista
    return this.http.get<Producto[]>(this.url+'productos');
  }

  eliminarProducto(id: string){ //eliminamos producto (por id)
    return this.http.delete(this.url+'productos/'+id);
  }

  actualizarProducto(Prod: Producto){ //actualizamos producto (por id)
    return this.http.put(this.url+'productos/'+Prod._id, Prod);
  }
}

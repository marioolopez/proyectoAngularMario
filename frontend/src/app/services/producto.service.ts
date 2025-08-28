import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  readonly url="http://localhost:3000/producto/";
  Productos:Array<Producto>=[]; //array de productos
  Prod: Producto; //objeto producto

  constructor(private http: HttpClient) {
    this.Prod = new Producto();
  }

  crearProducto(Prod: Producto){ //crear producto
    return this.http.post(this.url+'crearproducto', Prod);
  }

}

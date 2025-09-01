import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';
@Component({
  selector: 'app-productos',
  imports: [FormsModule, CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent{
  @Input() productoEnviado!: Producto; //recibimos el producto del padre (que es un unico producto)
  constructor(){}

  agregarAlCarrito(){}

}

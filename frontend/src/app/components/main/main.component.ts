import { Component } from '@angular/core'
import { LatizqComponent } from "../latizq/latizq.component";
import { LatdrchComponent } from "../latdrch/latdrch.component";
import { ProductoService } from '../../services/producto.service';
import { ProductosComponent } from "../productos/productos.component";
import { Producto } from '../../models/producto';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main',
  imports: [LatizqComponent,CommonModule, LatdrchComponent, ProductosComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  public productosTodos: Producto[] = [];
  constructor(public productosService: ProductoService){}

  ngOnInit(): void {
    this.productosService.mostrarProductos().subscribe({
      next: (productos: Producto[]) => {
        this.productosTodos = productos; //guardamos en el service
      },
      error: (err) => {
        console.error("Error al cargar productos:", err);
      }
    });
  }
}

import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-panel-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './panel-admin.component.html',
  styleUrl: './panel-admin.component.css'
})
export class PanelAdminComponent {
  seccion: string = 'productos'; // pestaña activa
  producto: Producto = new Producto();

  constructor(private productoService: ProductoService) {}

  crearProducto() {
    if (!this.producto.nombreProducto || !this.producto.precio) {
      alert("Rellena al menos nombre y precio");
      return;
    }

    this.productoService.crearProducto(this.producto).subscribe({
      next: (res) => {
        alert("Producto creado correctamente ✅");
        this.producto = new Producto(); // limpiar formulario
      },
      error: (err) => {
        console.error(err);
        alert("Error al crear producto ❌");
      }
    });
  }
}

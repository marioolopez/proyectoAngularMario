import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
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
export class PanelAdminComponent implements OnInit{
  public productos: Producto[] = [];
  seccion: string = 'productos'; // pestaña activa
  producto: Producto = new Producto();

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void { //se ejecuta una vez antes de entrar para cargar todo bien
    this.conseguirProductos();
  }

  //cargarProductos (para refrescar lista)
  conseguirProductos(){
    this.productoService.mostrarProductos().subscribe((productos: Producto[]) =>{
      this.productos = productos;
    });
  }

  //metodo para crear el producto
  crearProducto() {
  if(!this.producto.nombreProducto || !this.producto.precio || !this.producto.stockDisponible || !this.producto.imagen || !this.producto.tipoProducto) {
    alert('Faltan campos por rellenar');
    return;
  }

  this.productoService.crearProducto(this.producto).subscribe({
    next: (res) => {
      alert("Producto creado correctamente ✅");
      this.producto = new Producto(); //limpiar formulario
      this.conseguirProductos(); //refrescar lista
    }
    });
  }

  //metodo para modificar el producto
  editarProducto(producto: Producto){
    this.productoService.Prod.nombreProducto = producto.nombreProducto;
    this.productoService.Prod.stockDisponible = producto.stockDisponible;
    this.productoService.Prod.precio = producto.precio;
    this.productoService.Prod.tipoProducto = producto.tipoProducto;
    this.productoService.Prod.imagen = producto.imagen;
  }

  //metodo para eliminar el producto (bien)
  eliminarProducto(id : string){
    if(confirm("¿Desea eliminar el producto?")){
        this.productoService.eliminarProducto(id).subscribe(res =>{
        alert("Producto eliminado correctamente!");
        this.conseguirProductos(); //refresco la lista
      });
    }
  }

  //limpiar panel
  limpiarPanel(){
     this.producto = new Producto();
  }




















  //metodo para crear un usuario



  //metodo para editar un usuario



  //metodo para eliminar un usuario


}

import { UsuarioService } from './../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { Usuario } from '../../models/usuario';
@Component({
  selector: 'app-panel-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './panel-admin.component.html',
  styleUrl: './panel-admin.component.css'
})
export class PanelAdminComponent implements OnInit{
  //productos
  public productos: Producto[] = [];
  public producto: Producto = new Producto();

  //usuarios
  public usuarios: Usuario[] = [];
  public usuario: Usuario = new Usuario();

  seccion: string = 'productos'; //pestaña activa

  constructor(public productoService: ProductoService, public usuarioService: UsuarioService) {}

  ngOnInit(): void { //se ejecuta una vez antes de entrar para cargar todo bien
    this.conseguirProductos();
    this.conseguirUsuarios();
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

    if(this.producto._id){ //si el id esta, pues modificas, si no esta creas
      this.productoService.actualizarProducto(this.producto).subscribe({
        next: (res) =>{
          alert("producto actualizado!");
          this.producto = new Producto();
          this.conseguirProductos();
        }
      });
    }
    else{ //en caso de que no exista el id, creamos el producto
      this.productoService.crearProducto(this.producto).subscribe({
      next: (res) => {
        alert("Producto creado correctamente ✅");
        this.producto = new Producto();
        this.conseguirProductos();
      }
      });
    }
  }

  //metodo para modificar el producto
  editarProducto(producto: Producto){
    this.producto = { ...producto };
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
  limpiarProducto(){
     this.producto = new Producto();
  }




//--------------------- USUARIOS ---------------------------





  conseguirUsuarios(){
    this.usuarioService.mostrarUsuarios().subscribe((usuarios: Usuario[]) =>{
      this.usuarios = usuarios;
    });
  }


  //metodo para crear un usuario
  crearUsuario(){
    if(this.usuario._id){
      this.usuarioService.actualizarUsuario(this.usuario).subscribe(()=>{
        alert("Usuario actualizado!");
        this.usuario = new Usuario();
        this.conseguirUsuarios();
      });
    } else {
      this.usuarioService.crearUsuario(this.usuario).subscribe(()=>{
        alert("Usuario creado!");
        this.usuario = new Usuario();
        this.conseguirUsuarios();
      });
    }
  }


  //metodo para editar un usuario
  editarUsuario(usuario: Usuario){
    this.usuario = { ...usuario };
  }


  //metodo para eliminar un usuario
  eliminarUsuario(id:string){
    if(confirm("¿Desea eliminar el usuario?")){
      this.usuarioService.eliminarUsuario(id).subscribe(()=>{
        alert("Usuario eliminado!");
        this.conseguirUsuarios();
      });
    }
  }

  //limpiar usuario
  limpiarUsuario(){
    this.usuario = new Usuario();
  }

}

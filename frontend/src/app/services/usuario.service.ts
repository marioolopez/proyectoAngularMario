import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  Usu: Usuario; //un solo usuario
  Usuarios:Array<Usuario>=[];
  emailUsuarioLogado: string;

  readonly url = "http://localhost:3000/usuarios/";
  constructor(private http:HttpClient) {
    this.Usu = new Usuario();
    this.Usuarios = [];
    this.emailUsuarioLogado = "";
  }

  crearUsuario(Usu:Usuario){ //crear usuarios en el panel de registro
    return this.http.post(this.url+"registronuevo", Usu);
  }

  comprobarMail(email: string){ //para el login, que el correo sea ese
    return this.http.get<Usuario>(this.url+email);
  }

  //PANEL ADMIN DE USUARIOS CRUD

  actualizarUsuario(usuario:Usuario){ //actualiza el usuario por id
    return this.http.put(this.url + usuario._id, usuario);
  }

  eliminarUsuario(id:string){
    return this.http.delete(this.url + id);
  }

  mostrarUsuarios(){
    return this.http.get<Usuario[]>(this.url);
  }

}

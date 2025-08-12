import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
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

  crearUsuario(Usu:Usuario){
    return this.http.post(this.url+"registro", Usu);
  }

}

import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; // <-- IMPORTANTE
@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public encR : boolean = false;
  public muestraEmlpe: boolean = false;
  public nomPersona: boolean = false;

  constructor(public usuario: UsuarioService){} //importar el servicio

  //solo del registro

  ocultarRegistro(){ //una vez iniciemos sesion
     this.encR = false;
  }
  registrarUsuario(recogerForm: NgForm): void {
    if(!recogerForm.valid){
      alert("Faltan datos por rellenar!");
    }
    else{ this.usuario.crearUsuario(this.usuario.Usu).subscribe((usu) =>{
        alert("usuario creado");
    });}
  }


  //inicio de sesion
  inicioSesion(){

  }
}

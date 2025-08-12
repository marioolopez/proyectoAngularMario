import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; // <-- IMPORTANTE
import { empty } from 'rxjs';
@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //variables para el registro
  public encR : boolean = false;
  public muestraEmlpe: boolean = false;
  public nomPersona: boolean = false;

  //variables para el inicio de sesion
  public encI: boolean = false;

  constructor(public usuario: UsuarioService){} //importar el servicio

  //solo del registro
  ocultarRegistro(){ //una vez iniciemos sesion
     this.encR = !this.encR;
  }
  registrarUsuario(recogerDatosRegistro: NgForm): void {
    this.encI = false; //si le damos a registro y el inicio esta desplegado, lo cerramos.
    if(!recogerDatosRegistro.valid){
        alert("Faltan datos por rellenar!");
        return
    }
    else{ this.usuario.crearUsuario(this.usuario.Usu).subscribe((usu) =>{
        alert("usuario creado");
      });
    }
  }


  //inicio de sesion
  ocultarInicioSesion(){
    this.encI = !this.encI;
  }
  inicioSesionUsu(recogerDatosInicio:NgForm){
    this.encR = false;
    if(!recogerDatosInicio.valid) {
      alert("Faltan datos por rellenar!");
      return;
    }
    else{
      alert("Los campos estan llenos!");
    }

  }
}

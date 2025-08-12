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

  //tenemos que decir que si una persona tiene un correo igual a otra que ya esta registrada, esta, ya no puede registrarse
  registrarUsuario(recogerDatosRegistro: NgForm): void {
    this.encI = false; //si le damos a registro y el inicio esta desplegado, lo cerramos.

    if(!recogerDatosRegistro.valid){
        alert("Faltan datos por rellenar!");
        return;
    }

    this.usuario.comprobarMail(this.usuario.Usu.email).subscribe((res: any) =>{
      if(res.status == "el usuario ya esta registrado"){ //nose si va a funcionar
        alert("este correo ya esta registrado!");
        return;
      }
      else{
        this.usuario.crearUsuario(this.usuario.Usu).subscribe((usu) =>{
          alert("usuario creado!");
          //borramos campos
          this.usuario.Usu.nombre = "";
          this.usuario.Usu.email = "";
          this.usuario.Usu.contra = "";
          this.usuario.Usu.direccion = "";
          this.usuario.Usu.telefono = "";
       });
      }
    });

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

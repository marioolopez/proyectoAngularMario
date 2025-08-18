import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; // <-- IMPORTANTE
import { Usuario } from '../../models/usuario';
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






  //Inicio de Sesion
  ocultarInicioSesion(){
    this.encI = !this.encI;
  }
  inicioSesionUsu(recogerDatosInicio:NgForm){
    if(!recogerDatosInicio.valid){
      alert("Faltan datos por rellenar!");
      return;
    }
    else{
      const {email, contra} = recogerDatosInicio.value; //coges la info del email y la contraseña
      this.usuario.comprobarMail(email).subscribe(
        (res: Usuario) => {
          if(res && res.contra === contra){
            alert("Entrando con el usuario "+res.email);

            if(res.rol.trim() === "Admin".trim()){
              alert("La persona logada es ADMINISTRADOR!");
              return;
            }
            else{
              alert("La persona ES UN CLIENTE!");
              return;
            }

          }
          else{
            alert("Los datos de inicio de sesion son invalidos!");
            return;
          }
        },
        (err) => {
            if(err.status === 404) {
              alert("Usuario no encontrado");
            }
        }
      );
    }
  }
}

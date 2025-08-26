import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //ocultar registros e inicio de sesion (SOLO LOS PANELES)
  public encR: boolean = false;
  public encI: boolean = false;

  //varibles para hacer y desaparecer botones y estado del usuario
  public nombreUsuario: string = "";
  public botonAdmin: boolean = false;
  public usuarioLogado: boolean = false;

  constructor(public usuario: UsuarioService) {}

  ocultarRegistro() {
    this.encR = !this.encR;
  }
  ocultarInicioSesion() {
    this.encI = !this.encI;
  }

  registrarUsuario(recogerDatosRegistro: NgForm): void {
    this.encI = false;

    if(!recogerDatosRegistro.valid) {
      alert("Faltan datos por rellenar!");
      return;
    }

    this.usuario.comprobarMail(this.usuario.Usu.email).subscribe(
      (res: any) => {
        if (res && res.email) {
          alert("Este correo ya está registrado!");
          return;
        }

        this.usuario.crearUsuario(this.usuario.Usu).subscribe(() => {
          alert("Usuario creado correctamente!");
          this.usuario.Usu = new Usuario();
        });
      },
      (error) => {
        if (error.status === 400 || error.status === 404) {
          this.usuario.crearUsuario(this.usuario.Usu).subscribe(() => {
            alert("Usuario creado correctamente!");
            this.usuario.Usu = new Usuario();
          });
        } else {
          console.error("Error inesperado al comprobar email:", error);
        }
      }
    );
  }

  inicioSesionUsu(recogerDatosInicio: NgForm) {
    if(!recogerDatosInicio.valid) {
      alert("Faltan datos por rellenar!");
      return;
    }

    const { email, contra } = recogerDatosInicio.value; //recibimos los datos de las cajas de texto
    this.usuario.comprobarMail(email).subscribe(
      (res: Usuario) => {
        if(res && res.contra === contra) { //si el usuario existe y la contraseña que introdujo es igual el usuario es la misma que la de la bbdd se permite iniciar sesion

          this.nombreUsuario = res.nombre; //cuando se loguea, aparece el nombre del usuario
          this.usuarioLogado = true;
          this.encI = false;//quitas el panel InicioSesion

          if (res.rol.trim().toLowerCase() === "admin") { //si el rol es "admin"
            this.botonAdmin = true; //se activa el boton admin
          } else {
            this.botonAdmin = false; //sino no se activa
          }

        } else { //si no coincide la contraseña ponemos un mensaje
          alert("Contraseña incorrecta");
        }
      },
      (err) => {
        if (err.status === 400 || err.status === 404) {
          alert("Usuario no encontrado");
        }
      }
    );
  }

  cerrarSesionUsuarioLogado() {
    this.nombreUsuario = ""; //el nombre a vacío
    this.botonAdmin = false; //hacemos desaparecer el boton admin
    this.usuarioLogado = false; //de deslogea el usuario
    this.usuario.Usu = new Usuario(); //limpiar el objeto en el servicio
  }

}

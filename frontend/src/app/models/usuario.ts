export class Usuario {

  _id: string;
  nombre: string;
  contra: string;
  direccion: string;
  rol: string;
  telefono:string;
  email:string;

  constructor(){
  this._id = '';
      this.nombre = '';
      this.contra ='';
      this.direccion='';
      this.rol='SuperUsuario';
      this.telefono='';
      this.email='';
  }

}

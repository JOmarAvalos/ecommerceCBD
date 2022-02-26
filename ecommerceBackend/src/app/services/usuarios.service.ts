import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlConsulta  = 'https://cbd.ds-ti.com/webServices/wsBack_UsuariosConsulta.php';
  private urlRegistra  = 'https://cbd.ds-ti.com/webServices/wsBack_UsuarioRegistro.php';
  private urlActualiza = 'https://cbd.ds-ti.com/webServices/wsBack_UsuarioActualiza.php';


  constructor( private http: HttpClient ) { }


  obtenerTodos() {
    return this.http.get(
      `${ this.urlConsulta }`
    );
  }


  obtener(id: number) {
    return this.http.get(
      `${ this.urlConsulta }` + `?id=${ id }`
    );
  }


  registrar( usuario: any ) {

    const usuarioUpper: String = usuario.usuario.toUpperCase( );
    const nombreUpper: String = usuario.nombre.toUpperCase( );
    const paternoUpper: String = usuario.paterno.toUpperCase( );
    const maternoUpper: String = usuario.materno.toUpperCase( );

    return this.http.get(
      `${ this.urlRegistra }` + `?usuario=${ usuarioUpper }&contrasena=${ usuario.contrasena }&nombre=${ nombreUpper }&paterno=${ paternoUpper }&materno=${ maternoUpper }&email=${ usuario.email }&perfil=${ usuario.perfil }&estatus=${ usuario.estatus }`
    );
  }


  actualiza( usuario: any ) {

    const nombreUpper: String = usuario.nombre.toUpperCase( );
    const paternoUpper: String = usuario.paterno.toUpperCase( );
    const maternoUpper: String = usuario.materno.toUpperCase( );

    return this.http.get(
      `${ this.urlActualiza }` + `?id=${ usuario.id }&contrasena=${ usuario.contrasena }&nombre=${ nombreUpper }&paterno=${ paternoUpper }&materno=${ maternoUpper }&email=${ usuario.email }&perfil=${ usuario.perfil }&estatus=${ usuario.estatus }`
    );
  }

}

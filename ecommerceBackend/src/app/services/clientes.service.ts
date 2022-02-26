import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private urlConsulta  = 'https://cbd.ds-ti.com/webServices/wsBack_ClientesConsulta.php';
  private urlRegistra  = 'https://cbd.ds-ti.com/webServices/wsBack_ClientesRegistro.php';
  private urlActualiza = 'https://cbd.ds-ti.com/webServices/wsBack_ClientesActualiza.php';

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

  registrar( cliente: any ) {

    const nombreUpper: String = cliente.nombre.toUpperCase( );
    const paternoUpper: String = cliente.paterno.toUpperCase( );
    const maternoUpper: String = cliente.materno.toUpperCase( );

    return this.http.get(
      `${ this.urlRegistra }` + `?nombre=${ nombreUpper }&paterno=${ paternoUpper }&materno=${ maternoUpper }&email=${ cliente.email }&telefono=${ cliente.telefono }&fchnacimiento=${ cliente.fchnacimiento }&genero=${ cliente.genero }&ubicacion=${ cliente.ubicacion }&tipo=${ cliente.tipo }&estatus=${ cliente.estatus }`
    );
  }

  actualiza( cliente: any ) {

    const nombreUpper: String = cliente.nombre.toUpperCase( );
    const paternoUpper: String = cliente.paterno.toUpperCase( );
    const maternoUpper: String = cliente.materno.toUpperCase( );

    return this.http.get(
      `${ this.urlActualiza }` + `?id=${ cliente.id }&nombre=${ nombreUpper }&paterno=${ paternoUpper }&materno=${ maternoUpper }&email=${ cliente.email }&contrasena=${ cliente.contrasena }&telefono=${ cliente.telefono }&fchnacimiento=${ cliente.fchnacimiento }&genero=${ cliente.genero }&ubicacion=${ cliente.ubicacion }&tipo=${ cliente.tipo }&estatus=${ cliente.estatus }`
    );
  }

}

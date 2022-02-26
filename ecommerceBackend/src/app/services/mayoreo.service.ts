import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MayoreoService {

  private urlConsulta  = 'https://cbd.ds-ti.com/webServices/wsBack_MayoreoConsulta.php';
  private urlRegistra  = 'https://cbd.ds-ti.com/webServices/wsBack_MayoreoRegistro.php';
  private urlActualiza = 'https://cbd.ds-ti.com/webServices/wsBack_MayoreoActualiza.php';

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


  registrar( mayoreo: any ) {
    return this.http.get(
      `${ this.urlRegistra }` + `?nombre=${ mayoreo.nombre }&email=${ mayoreo.email }&mensaje=${ mayoreo.mensaje }&estatus=${ mayoreo.estatus }`
    );
  }


  actualiza( mayoreo: any ) {
    return this.http.get(
      `${ this.urlActualiza }` + `?id=${ mayoreo.id }&nombre=${ mayoreo.nombre }&email=${ mayoreo.email }&mensaje=${ mayoreo.mensaje }&estatus=${ mayoreo.estatus }`
    );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MayoreoService {

  private urlMayoreoConsulta  = 'https://cbd.ds-ti.com/webServices/wsBack_MayoreoConsulta.php';
  private urlMayoreoRegistra  = 'https://cbd.ds-ti.com/webServices/wsBack_MayoreoRegistro.php';
  private urlMayoreoActualiza = 'https://cbd.ds-ti.com/webServices/wsBack_MayoreoActualiza.php';
  private urlMayoreoSeguimientoConsulta  = 'https://cbd.ds-ti.com/webServices/wsBack_MayoreoSeguimientoConsulta.php';
  private urlMayoreoSeguimientoRegistra  = 'https://cbd.ds-ti.com/webServices/wsBack_MayoreoSeguimientoRegistro.php';


  constructor( private http: HttpClient ) { }


  obtenerTodos() {
    return this.http.get(
      `${ this.urlMayoreoConsulta }`
    );
  }


  obtener(id: number) {
    return this.http.get(
      `${ this.urlMayoreoConsulta }` + `?id=${ id }`
    );
  }


  registrar( mayoreo: any ) {
    return this.http.get(
      `${ this.urlMayoreoRegistra }` + `?nombre=${ mayoreo.nombre }&email=${ mayoreo.email }&mensaje=${ mayoreo.mensaje }&estatus=${ mayoreo.estatus }`
    );
  }


  actualiza( mayoreo: any ) {
    return this.http.get(
      `${ this.urlMayoreoActualiza }` + `?id=${ mayoreo.id }&nombre=${ mayoreo.nombre }&email=${ mayoreo.email }&mensaje=${ mayoreo.mensaje }&estatus=${ mayoreo.estatus }`
    );
  }


  obtenerSeguimiento(id: number) {
    return this.http.get(
      `${ this.urlMayoreoSeguimientoConsulta }` + `?id=${ id }`
    );
  }


  registrarSeguimiento( mayoreoSeguimiento: any, id: any ) {
    return this.http.get(
      `${ this.urlMayoreoSeguimientoRegistra }` + `?idVentaMayoreo=${ id }&mensaje=${ mayoreoSeguimiento.mensaje }`
    );
  }


}

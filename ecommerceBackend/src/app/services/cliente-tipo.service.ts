import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClienteTipoService {

  private urlConsulta = 'https://cbd.ds-ti.com/webServices/wsBack_ClienteTipoConsulta.php';
  private urlRegistra = 'https://cbd.ds-ti.com/webServices/wsBack_ClienteTipoRegistro.php';
  private urlActualiza = 'https://cbd.ds-ti.com/webServices/wsBack_ClienteTipoActualiza.php';

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

  obtenerActivos() {
    return this.http.get(
      `${ this.urlConsulta }` + `?estatus=1`
    );
  }

  registrar( clienteTipo: any ) {

    return this.http.get(
      `${ this.urlRegistra }` + `?nombre=${ clienteTipo.nombre }&estatus=${ clienteTipo.estatus }`
    );
  }

  actualiza( clienteTipo: any ) {

    return this.http.get(
      `${ this.urlActualiza }` + `?id=${ clienteTipo.id }&nombre=${ clienteTipo.nombre }&estatus=${ clienteTipo.estatus }`
    );
  }

}

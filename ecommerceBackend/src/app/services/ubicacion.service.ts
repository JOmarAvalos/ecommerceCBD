import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private url = 'https://cbd.ds-ti.com/webServices/wsBack_UbicacionConsulta.php';

  constructor( private http: HttpClient ) { }

  obtenerTodos() {
    return this.http.get(
      `${ this.url }`
    );
  }

  obtenerActivos() {
    return this.http.get(
      `${ this.url }` + `?estatus=1`
    );
  }

}

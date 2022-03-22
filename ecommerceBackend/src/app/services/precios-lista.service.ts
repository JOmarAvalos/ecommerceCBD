import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PreciosListaService {

  private urlConsulta  = 'https://cbd.ds-ti.com/webServices/wsBack_PreciosListaConsulta.php';

  constructor( private http: HttpClient ) { }

  obtenerTodos() {
    return this.http.get(
      `${ this.urlConsulta }`
    );
  }

}

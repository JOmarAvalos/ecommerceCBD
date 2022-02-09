import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MayoreoService {

  private url = 'https://cbd.ds-ti.com/webServices/wsBack_MayoreoConsulta.php';

  constructor( private http: HttpClient ) { }

  obtenerTodos() {
    return this.http.get(
      `${ this.url }`
    );
  }

}

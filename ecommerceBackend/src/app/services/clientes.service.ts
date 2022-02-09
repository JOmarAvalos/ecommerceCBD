import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url = 'https://cbd.ds-ti.com/webServices/wsBack_ClientesConsulta.php';

  constructor( private http: HttpClient ) { }

  obtenerTodos() {
    return this.http.get(
      `${ this.url }`
    );
  }

  obtener(id: number) {
    return this.http.get(
      `${ this.url }` + `?id=${ id }`
    );
  }

}

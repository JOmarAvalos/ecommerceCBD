import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioPerfilService {

  private url = 'https://cbd.ds-ti.com/webServices/wsBack_UsuarioPerfilConsulta.php';

  constructor( private http: HttpClient ) { }

  obtenerTodos() {
    return this.http.get(
      `${ this.url }`
    );
  }

}

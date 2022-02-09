import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = 'https://cbd.ds-ti.com/webServices/wsBack_UsuariosConsulta.php';

  constructor( private http: HttpClient ) { }

  obtenerTodos() {
    return this.http.get(
      `${ this.url }`
    );
  }

}

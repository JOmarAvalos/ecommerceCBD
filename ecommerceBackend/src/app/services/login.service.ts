import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'https://cbd.ds-ti.com/webServices/wsBack_LoginConsulta.php';

  constructor( private http: HttpClient ) { }

  logout() {}

  login( usuario: UsuarioModel ) {
    return this.http.get(
      `${ this.url }` + `?usuario=${ usuario.usuario }&contrasena=${ usuario.contrasena }`
    );
  } 

}

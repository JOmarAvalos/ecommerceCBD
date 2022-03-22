import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private urlConsulta = 'https://cbd.ds-ti.com/webServices/wsFront_ArticulosConsulta.php';

  constructor( private http: HttpClient ) { }

  obtenerPorId(id: number) {
    return this.http.get(
      `${ this.urlConsulta }` + `?id=${ id }`
    );
  }

  obtenerPorCategoria(id: number) {
    return this.http.get(
      `${ this.urlConsulta }` + `?cat=${ id }`
    );
  }

}

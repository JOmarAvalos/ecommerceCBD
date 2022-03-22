import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlConsulta = 'https://cbd.ds-ti.com/webServices/wsFront_CategoriaConsulta.php';

  constructor( private http: HttpClient ) { }

  obtenerActivos() {
    return this.http.get(
      `${ this.urlConsulta }`
    );
  }

  obtener(id: number) {
    return this.http.get(
      `${ this.urlConsulta }` + `?id=${ id }`
    );
  }

}

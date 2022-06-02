import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformesService {

  private urlInformeCategoria   = 'https://cbd.ds-ti.com/webServices/wsFront_InformeCategoriaConsulta.php';
  private urlInformeProducto    = 'https://cbd.ds-ti.com/webServices/wsFront_InformeProductoConsulta.php';
  private urlInformeSabor       = 'https://cbd.ds-ti.com/webServices/wsFront_InformeSaborConsulta.php';

  constructor( private http: HttpClient ) { }

  obtenerCategorias() {
    return this.http.get(
      `${ this.urlInformeCategoria }`
    );
  }

  obtenerProductos(cat: number) {
    return this.http.get(
      `${ this.urlInformeProducto }` + `?cat=${ cat }`
    );
  }

  obtenerSabores(nom: string) {
    return this.http.get(
      `${ this.urlInformeSabor }` + `?nom=${ nom }`
    );
  }

}

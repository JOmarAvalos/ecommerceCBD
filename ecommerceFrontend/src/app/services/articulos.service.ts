import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private urlConsulta   = 'https://cbd.ds-ti.com/webServices/wsFront_ArticulosConsulta.php';
  private urlConsultaV2 = 'https://cbd.ds-ti.com/webServices/wsFront_ArticulosConsulta_v2.php';
  private urlConsultaConcentracion = 'https://cbd.ds-ti.com/webServices/wsFront_ArticuloConcentracionConsulta.php';
  private urlConsultaPresentacion = 'https://cbd.ds-ti.com/webServices/wsFront_ArticuloPresentacionConsulta.php';
  private urlConsultaSabor = 'https://cbd.ds-ti.com/webServices/wsFront_ArticuloSaborConsulta.php';
  private urlArticuloImagen = 'https://cbd.ds-ti.com/webServices/wsFront_ArticuloImagen.php';


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

  obtenerPorCategoriaV2(id: number) {
    return this.http.get(
      `${ this.urlConsultaV2 }` + `?cat=${ id }`
    );
  }

  obtenerImagenPrincipal(name: string) {
    return this.http.get(
      `${ this.urlConsultaV2 }` + `?name=${ name }`
    );
  }

  obtenerConcentraciones(name: string) {
    return this.http.get(
      `${ this.urlConsultaConcentracion }` + `?name=${ name }`
    );
  }

  obtenerPresentaciones(name: string) {
    return this.http.get(
      `${ this.urlConsultaPresentacion }` + `?name=${ name }`
    );
  }

  obtenerSabores(name: string) {
    return this.http.get(
      `${ this.urlConsultaSabor }` + `?name=${ name }`
    );
  }

  obtenerImagen(nom: string, con: string, pre: string, sab: string) {
    return this.http.get(
      `${ this.urlArticuloImagen }` + `?nom=${ nom }&con=${ con }&pre=${ pre }&sab=${ sab }`
    );
  }

}

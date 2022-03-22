import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlConsulta = 'https://cbd.ds-ti.com/webServices/wsBack_CategoriaConsulta.php';
  private urlRegistra = 'https://cbd.ds-ti.com/webServices/wsBack_CategoriaRegistro.php';
  private urlActualiza = 'https://cbd.ds-ti.com/webServices/wsBack_CategoriaActualiza.php';

  constructor( private http: HttpClient ) { }

  obtenerTodos() {
    return this.http.get(
      `${ this.urlConsulta }`
    );
  }

  obtener(id: number) {
    return this.http.get(
      `${ this.urlConsulta }` + `?id=${ id }`
    );
  }

  obtenerActivos() {
    return this.http.get(
      `${ this.urlConsulta }` + `?estatus=1`
    );
  }

  registrar( articuloCategoria: any ) {

    return this.http.get(
      `${ this.urlRegistra }` + `?nombre=${ articuloCategoria.nombre }&estatus=${ articuloCategoria.estatus }`
    );
  }

  actualiza( articuloCategoria: any ) {

    return this.http.get(
      `${ this.urlActualiza }` + `?id=${ articuloCategoria.id }&nombre=${ articuloCategoria.nombre }&estatus=${ articuloCategoria.estatus }`
    );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  private urlConsulta = 'https://cbd.ds-ti.com/webServices/wsBack_SubcategoriaConsulta.php';
  private urlRegistra = 'https://cbd.ds-ti.com/webServices/wsBack_SubcategoriaRegistro.php';
  private urlActualiza = 'https://cbd.ds-ti.com/webServices/wsBack_SubcategoriaActualiza.php';

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

  registrar( articuloSubcategoria: any ) {

    return this.http.get(
      `${ this.urlRegistra }` + `?nombre=${ articuloSubcategoria.nombre }&estatus=${ articuloSubcategoria.estatus }`
    );
  }

  actualiza( articuloSubcategoria: any ) {

    return this.http.get(
      `${ this.urlActualiza }` + `?id=${ articuloSubcategoria.id }&nombre=${ articuloSubcategoria.nombre }&estatus=${ articuloSubcategoria.estatus }`
    );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  private urlConsulta = 'https://cbd.ds-ti.com/webServices/wsBack_MarcaConsulta.php';
  private urlRegistra = 'https://cbd.ds-ti.com/webServices/wsBack_MarcaRegistro.php';
  private urlActualiza = 'https://cbd.ds-ti.com/webServices/wsBack_MarcaActualiza.php';

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

  registrar( articuloMarca: any ) {

    return this.http.get(
      `${ this.urlRegistra }` + `?nombre=${ articuloMarca.nombre }&estatus=${ articuloMarca.estatus }`
    );
  }

  actualiza( articuloMarca: any ) {

    return this.http.get(
      `${ this.urlActualiza }` + `?id=${ articuloMarca.id }&nombre=${ articuloMarca.nombre }&estatus=${ articuloMarca.estatus }`
    );
  }

}

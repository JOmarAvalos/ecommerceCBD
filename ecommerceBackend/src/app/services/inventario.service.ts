import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private urlConsulta  = 'https://cbd.ds-ti.com/webServices/wsBack_InventarioConsulta.php';
  private urlRegistra  = 'https://cbd.ds-ti.com/webServices/wsBack_InventarioRegistro.php';
  private urlActualiza = 'https://cbd.ds-ti.com/webServices/wsBack_InventarioActualiza.php';

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

  registrar( articulo: any ) {
    return this.http.get(
      `${ this.urlRegistra }` + `?marca=${ articulo.marca }&sku=${ articulo.sku }&nombre=${ articulo.nombre }&categoria=${ articulo.categoria }&subcategoria=${ articulo.subcategoria }&concentracion=${ articulo.concentracion }&presentacion=${ articulo.presentacion }&sabor=${ articulo.sabor }&descripcioncorta=${ articulo.descripcioncorta }&descripcionlarga=${ articulo.descripcionlarga }&precio=${ articulo.precio }&preciocondescuento=${ articulo.preciocondescuento }&inventariocantidad=${ articulo.inventariocantidad }&estatus=${ articulo.estatus }`
    );
  }

  actualiza( articulo: any ) {
    return this.http.get(
      `${ this.urlActualiza }` + `?id=${ articulo.id }&marca=${ articulo.marca }&sku=${ articulo.sku }&nombre=${ articulo.nombre }&categoria=${ articulo.categoria }&subcategoria=${ articulo.subcategoria }&concentracion=${ articulo.concentracion }&presentacion=${ articulo.presentacion }&sabor=${ articulo.sabor }&descripcioncorta=${ articulo.descripcioncorta }&descripcionlarga=${ articulo.descripcionlarga }&precio=${ articulo.precio }&preciocondescuento=${ articulo.preciocondescuento }&inventariocantidad=${ articulo.inventariocantidad }&estatus=${ articulo.estatus }`
    );
  }

}

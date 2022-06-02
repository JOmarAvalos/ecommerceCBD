import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../../services/articulos.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styles: [
  ]
})
export class ArticuloComponent implements OnInit {

  articuloName: string = '';
  articuloGeneral: any = [];
  concentraciones: any = [];
  presentaciones: any = [];
  sabores: any = [];
  articuloImagen: any = [];
  articuloImagenStr: string = '';
  articuloExistencia: string = '';


  constructor( private activatedRoute: ActivatedRoute,
               private articulosService: ArticulosService,
               private _location: Location ) { 

    this.activatedRoute.params.subscribe( params => {
      this.articuloName = params.name;

      // Articulos
      this.articulosService.obtenerImagenPrincipal(params.name)
        .subscribe( (resp: any) => {
        this.articuloGeneral = resp;
      });

      // Concentraciones
      this.articulosService.obtenerConcentraciones(params.name)
        .subscribe( (resp: any) => {
        this.concentraciones = resp;
      });


      // Presentaciones
      this.articulosService.obtenerPresentaciones(params.name)
        .subscribe( (resp: any) => {
        this.presentaciones = resp;
      });

      // Sabores
      this.articulosService.obtenerSabores(params.name)
        .subscribe( (resp: any) => {
        this.sabores = resp;
      });

    });
  }

  ngOnInit(): void {
  }

  openConcentracion(nom: any, con: any, pre: any, sab: any) {
    this.articulosService.obtenerImagen(nom, con, pre, sab)
      .subscribe( (resp: any) => {
        this.articuloImagen = resp;
        this.articuloImagenStr = resp[0].imagen_principal;
        this.articuloExistencia = resp[0].inventario_cantidad;
      });
  }

  openPresentacion(nom: any, con: any, pre: any, sab: any) {
    this.articulosService.obtenerImagen(nom, con, pre, sab)
      .subscribe( (resp: any) => {
        this.articuloImagen = resp;
        this.articuloImagenStr = resp[0].imagen_principal;
        this.articuloExistencia = resp[0].inventario_cantidad;
      });
  }

  openSabor(nom: any, con: any, pre: any, sab: any) {
    this.articulosService.obtenerImagen(nom, con, pre, sab)
      .subscribe( (resp: any) => {
        this.articuloImagen = resp;
        this.articuloImagenStr = resp[0].imagen_principal;
        this.articuloExistencia = resp[0].inventario_cantidad;
      });
  }

  regresar() {
    this._location.back();
  }

}

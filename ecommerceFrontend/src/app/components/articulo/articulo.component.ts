import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../../services/articulos.service';

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


  constructor( private activatedRoute: ActivatedRoute,
               private articulosService: ArticulosService ) { 

    this.activatedRoute.params.subscribe( params => {
      this.articuloName = params.name;

      // Articulos
      this.articulosService.obtenerImagenPrincipal(params.name)
        .subscribe( (resp: any) => {
        this.articuloGeneral = resp;
        console.log(this.articuloGeneral);
      });

      // Concentraciones
      this.articulosService.obtenerConcentraciones(params.name)
        .subscribe( (resp: any) => {
        this.concentraciones = resp;
        console.log(this.concentraciones);
      });


      // Presentaciones
      this.articulosService.obtenerPresentaciones(params.name)
        .subscribe( (resp: any) => {
        this.presentaciones = resp;
        console.log(this.presentaciones);
      });

      // Sabores
      this.articulosService.obtenerSabores(params.name)
        .subscribe( (resp: any) => {
        this.sabores = resp;
        console.log(this.sabores);
      });

    });
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';
import { ArticulosService } from '../../services/articulos.service';
import { Location } from '@angular/common'


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styles: [
  ]
})
export class TiendaComponent implements OnInit {

  categoria: any = [];
  articulos: any = [];

  constructor( private activatedRoute: ActivatedRoute,
               private categoriaService: CategoriaService,
               private articulosService: ArticulosService,
               private _location: Location ) {

    this.activatedRoute.params.subscribe( params => {

      // Categorias
      this.categoriaService.obtener(params.id)
        .subscribe( (resp: any) => {
        this.categoria = resp;
        console.log(this.categoria);
      });

      // Articulos
      this.articulosService.obtenerPorCategoriaV2(params.id)
        .subscribe( (resp: any) => {
        this.articulos = resp;
        console.log(this.articulos);
      });

    });


  }

  ngOnInit(): void {
  }

  regresar() {
    this._location.back();
  }

}

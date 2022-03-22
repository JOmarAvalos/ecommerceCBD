import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {

  categorias: any = [];

  constructor( private categoriaService: CategoriaService ) {

    // Categorias
    this.categoriaService.obtenerActivos()
      .subscribe( (resp: any) => {
        this.categorias = resp;
      });

  }

  ngOnInit(): void {
  }

}

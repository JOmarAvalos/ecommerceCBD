import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { InformesService } from '../../services/informes.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {

  categorias: any = [];
  informesCategorias: any = [];
  informesProductos: any = [];
  informesSabores: any = [];
  showBotonInforme: Boolean = false;
  informeFile: String = '';

  constructor( private categoriaService: CategoriaService, 
               private informesService: InformesService ) {

    // Categorias
    this.categoriaService.obtenerActivos()
      .subscribe( (resp: any) => {
        this.categorias = resp;
      });

    // Informe categorias
    this.informesService.obtenerCategorias()
      .subscribe( (resp: any) => {
        this.informesCategorias = resp;
      });

  }

  ngOnInit(): void {
  }

  openProductList(cat: any) {
    // Informe productos
    this.informesSabores = [];
    this.showBotonInforme = false;
    if (cat == '') {
      this.informesProductos = [];
    }else{
      this.informesService.obtenerProductos(cat)
      .subscribe( (resp: any) => {
        this.informesProductos = resp;
      });
    }
  }

  openSaborList(nom: any) {
    // Informe sabor
    this.showBotonInforme = false;
    if (nom == '') {
      this.informesSabores = [];
    }else{
      this.informesService.obtenerSabores(nom)
      .subscribe( (resp: any) => {
        this.informesSabores = resp;
      });
    }
  }

  openBotonDescarga(informe: any) {
    if (informe == '') {
      this.showBotonInforme = false;
    }else{
      this.showBotonInforme = true;
      this.informeFile = informe;
    }
  }

}

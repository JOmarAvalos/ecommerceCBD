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

  displayStyleNuestra  = "none";
  displayStyleQuienes  = "none";
  displayStyleValores  = "none";
  displayStylePorque   = "none";
  displayStyleGarantia = "none";

  
  openPopupNuestra() {
    this.displayStyleNuestra = "block";
  }
  closePopupNuestra() {
    this.displayStyleNuestra = "none";
  }

  openPopupQuienes() {
    this.displayStyleQuienes = "block";
  }
  closePopupQuienes() {
    this.displayStyleQuienes = "none";
  }

  openPopupValores() {
    this.displayStyleValores = "block";
  }
  closePopupValores() {
    this.displayStyleValores = "none";
  }

  openPopupPorque() {
    this.displayStylePorque = "block";
  }
  closePopupPorque() {
    this.displayStylePorque = "none";
  }

  openPopupGarantia() {
    this.displayStyleGarantia = "block";
  }
  closePopupGarantia() {
    this.displayStyleGarantia = "none";
  }

}

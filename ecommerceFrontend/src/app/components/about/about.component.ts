import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

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

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-nota2',
  templateUrl: './nota2.component.html',
  styles: [
  ]
})
export class Nota2Component implements OnInit {

  constructor( private _location: Location ) { }

  ngOnInit(): void {
  }

  regresar() {
    this._location.back();
  }

}

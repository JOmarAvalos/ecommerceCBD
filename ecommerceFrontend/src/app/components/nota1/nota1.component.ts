import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-nota1',
  templateUrl: './nota1.component.html',
  styles: [
  ]
})
export class Nota1Component implements OnInit {

  constructor( private _location: Location ) { }

  ngOnInit(): void {
  }

  regresar() {
    this._location.back();
  }

}

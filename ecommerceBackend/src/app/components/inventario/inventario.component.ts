import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../services/inventario.service';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styles: [
  ]
})

export class InventarioComponent implements OnInit {

  inventario: any = [];

  constructor( private inventarioService: InventarioService, private http: HttpClient) { 

    this.inventarioService.obtenerTodos() 
      .subscribe( (resp: any) => {
        this.inventario = resp;
        console.log(resp);
      });
  }

  ngOnInit(): void {
  }

}

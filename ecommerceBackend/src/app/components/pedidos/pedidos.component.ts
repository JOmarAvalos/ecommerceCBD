import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styles: [
  ]
})
export class PedidosComponent implements OnInit {

  pedidos: any = [];

  constructor( private pedidosService: PedidosService, private http: HttpClient) {

    this.pedidosService.obtenerTodos() 
      .subscribe( (resp: any) => {
        this.pedidos = resp;
        console.log(resp);
      });
  }

  ngOnInit(): void {
  }

}

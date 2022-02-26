import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';
import { ScriptLoaderService } from '../../script-loader.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styles: [
  ]
})
export class PedidosComponent implements OnInit {

  pedidos: any = [];

  constructor( private pedidosService: PedidosService, private http: HttpClient, private scriptLoader: ScriptLoaderService ) {

    this.pedidosService.obtenerTodos() 
      .subscribe( (resp: any) => {
        this.pedidos = resp;
        console.log(resp);
      });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.scriptLoader.load(
        'assets/js/lib/jquery.min.js',
        'assets/js/lib/jquery.nanoscroller.min.js',
        'assets/js/lib/sidebar.js',
        'assets/js/lib/bootstrap.min.js',
        'assets/js/scripts.js'
    );
  }
  
}

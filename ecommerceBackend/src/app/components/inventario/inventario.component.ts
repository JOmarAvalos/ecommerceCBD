import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../services/inventario.service';
import { ScriptLoaderService } from '../../script-loader.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styles: [
  ]
})

export class InventarioComponent implements OnInit {

  inventario: any = [];

  constructor( private inventarioService: InventarioService, private http: HttpClient, private scriptLoader: ScriptLoaderService ) { 

    this.inventarioService.obtenerTodos() 
      .subscribe( (resp: any) => {
        this.inventario = resp;
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

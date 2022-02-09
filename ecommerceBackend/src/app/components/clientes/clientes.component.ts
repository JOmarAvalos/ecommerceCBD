import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {

  clientes: any = [];

  constructor( private clientesService: ClientesService, private http: HttpClient ) {

    this.clientesService.obtenerTodos()
      .subscribe( (resp: any) => {
        this.clientes = resp;
        /*console.log(resp);*/
      });
  }

  ngOnInit(): void {
  }

  onEdit(id: number) {
    console.log(id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  usuarios: any = [];

  constructor( private usuariosService: UsuariosService, private http: HttpClient) { 

    this.usuariosService.obtenerTodos() 
      .subscribe( (resp: any) => {
        this.usuarios = resp;
        console.log(resp);
      });
  }

  ngOnInit(): void {
  }

}

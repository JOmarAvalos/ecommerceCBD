import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuario.model';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel;
  respuesta: any = [];
  recordarUsuario: boolean = false;

  constructor( private login: LoginService, private router: Router ) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();

    /*if ( localStorage.getItem('usuario') ) {
      this.usuario.usuario = localStorage.getItem('usuario');
      this.recordarUsuario = true;
    }*/
  }

  onSubmit( form: NgForm ) {

    if ( form.invalid ) { return; }

    Swal.fire({ 
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();
    
    this.login.login( this.usuario )
      .subscribe( resp => {

        console.log(resp)
        this.respuesta = resp;
        
        if (this.respuesta.success == 1) {
          
          Swal.close();

          /*if ( this.recordarUsuario ) {
            localStorage.setItem('usuario', this.usuario.usuario);
          }*/
          this.router.navigateByUrl('/dashboard');

        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error al autenticar',
            text: this.respuesta.message
          })
        }
      });

  }
}

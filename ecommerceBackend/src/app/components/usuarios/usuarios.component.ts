import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioPerfilService } from 'src/app/services/usuario-perfil.service';
import { ScriptLoaderService } from '../../script-loader.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})


export class UsuariosComponent implements OnInit {

  forma!: FormGroup;
  usuario: any = [];
  usuarios: any = [];
  usuarioPerfil: any = [];
  respuesta: any = [];
  mensajeError: boolean = false;

  constructor( private usuariosService: UsuariosService, 
               private http: HttpClient, 
               private scriptLoader: ScriptLoaderService, 
               private usuarioPerfilService: UsuarioPerfilService, 
               private fb: FormBuilder ) {

    this.crearFormulario();

    // Usuarios
    this.usuariosService.obtenerTodos()
      .subscribe( (resp: any) => {
        this.usuarios = resp;
        // console.log(resp);
      });

    // Perfil de usuarios
    this.usuarioPerfilService.obtenerTodos()
      .subscribe( (resp: any) => {
        this.usuarioPerfil = resp;
        // console.log(resp);
      });
  }


  ngOnInit(): void {
    this.forma.reset();
  }


  get usuarioNoValido() { return this.forma.get('usuario')?.invalid && this.forma.get('usuario')?.touched; }
  get contrasenaNoValido() { return this.forma.get('contrasena')?.invalid && this.forma.get('contrasena')?.touched; }
  get nombreNoValido() { return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched; }
  get paternoNoValido() { return this.forma.get('paterno')?.invalid && this.forma.get('paterno')?.touched; }
  get emailNoValido() { return this.forma.get('email')?.invalid && this.forma.get('email')?.touched; }
  get perfilNoValido() { return this.forma.get('perfil')?.invalid && this.forma.get('perfil')?.touched; }
  get estatusNoValido() { return this.forma.get('estatus')?.invalid && this.forma.get('estatus')?.touched; }


  crearFormulario() {

    this.forma = this.fb.group({
      id:         [],
      usuario:    ['', [ Validators.required, Validators.minLength(8) ]],
      contrasena: ['', [ Validators.required, Validators.minLength(8) ]],
      nombre:     ['', [ Validators.required ]],
      paterno:    ['', [ Validators.required ]],
      materno:    [''],
      email:      ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ]],
      perfil:     ['', [ Validators.required ]],
      estatus:    ['', [ Validators.required ]]
    });
  }


  nuevo() {
    this.forma.reset();
    this.forma.get('usuario')?.enable();
  }


  guardar() {
    // console.log( this.forma );
    if ( this.forma.value.id == null ) {
      // Nuevo

      this.forma.get('contrasena')?.setValidators( [Validators.required, Validators.minLength(8)]);

      if ( this.forma.invalid ) {
        return Object.values( this.forma.controls ).forEach( control => {
          control.markAsTouched();
        });
      }

      this.usuariosService.registrar( this.forma.value )
      .subscribe( (resp: any) => {
        // console.log(resp);
        this.respuesta = resp;

        if (this.respuesta.success == 1) {
          window.location.reload();
        } else {
          this.mensajeError = true;
        }
      });


    } else {
      // Actualizar

      this.forma.get('contrasena')?.clearValidators();
      this.forma.get('contrasena')?.updateValueAndValidity();

      if ( this.forma.invalid ) {
        return Object.values( this.forma.controls ).forEach( control => {
          control.markAsTouched();
        });
      }

      this.usuariosService.actualiza( this.forma.value )
      .subscribe( (resp: any) => {
        // console.log(resp);
        this.respuesta = resp;

        if (this.respuesta.success == 1) {
          window.location.reload();
        } else {
          this.mensajeError = true;
        }
      });

    }
  }


  editar( id: number ) {
    // console.log('Editar usuario: ' + id);

    this.usuariosService.obtener(id)
      .subscribe( (resp: any) => {
        // console.log(resp);
        this.respuesta = resp;
        // console.log(this.respuesta[0].usuario);

        this.forma.reset ({
          id:         this.respuesta[0].cve_usuario,
          usuario:    this.respuesta[0].usuario,
          contrasena: this.respuesta[0].contrasena,
          nombre:     this.respuesta[0].nombre,
          paterno:    this.respuesta[0].paterno,
          materno:    this.respuesta[0].materno,
          email:      this.respuesta[0].email,
          perfil:     this.respuesta[0].id_perfil,
          estatus:    this.respuesta[0].ban_activo
        });

        this.forma.get('usuario')?.disable();

      }
    );
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

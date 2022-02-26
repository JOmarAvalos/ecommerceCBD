import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { GeneroService } from '../../services/genero.service';
import { UbicacionService } from '../../services/ubicacion.service';
import { ClienteTipoService } from '../../services/cliente-tipo.service';
import { ScriptLoaderService } from '../../script-loader.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})


export class ClientesComponent implements OnInit {

  forma!: FormGroup;
  cliente: any = [];
  clientes: any = [];
  generos: any = [];
  ubicaciones: any = [];
  clienteTipos: any = [];
  respuesta: any = [];
  mensajeError: boolean = false;

  constructor( private clientesService: ClientesService, 
               private http: HttpClient, 
               private scriptLoader: ScriptLoaderService,
               private generoService: GeneroService,
               private ubicacionService: UbicacionService,
               private clienteTipoService: ClienteTipoService,
               private fb: FormBuilder ) {

    this.crearFormulario();

    this.clientesService.obtenerTodos()
      .subscribe( (resp: any) => {
        this.clientes = resp;
        /*console.log(resp);*/
      });

    // Genero
    this.generoService.obtenerTodos()
      .subscribe( (resp: any) => {
        this.generos = resp;
        // console.log(resp);
      });

    // Ubicacion
    this.ubicacionService.obtenerTodos()
      .subscribe( (resp: any) => {
        this.ubicaciones = resp;
        // console.log(resp);
      });

    // Cliente tipo
    this.clienteTipoService.obtenerTodos()
      .subscribe( (resp: any) => {
        this.clienteTipos = resp;
        // console.log(resp);
      });


  }

  ngOnInit(): void {
    this.forma.reset();
  }

  get nombreNoValido() { return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched; }
  get paternoNoValido() { return this.forma.get('paterno')?.invalid && this.forma.get('paterno')?.touched; }
  get emailNoValido() { return this.forma.get('email')?.invalid && this.forma.get('email')?.touched; }
  get contrasenaNoValido() { return this.forma.get('contrasena')?.invalid && this.forma.get('contrasena')?.touched; }
  get telefonoNoValido() { return this.forma.get('telefono')?.invalid && this.forma.get('telefono')?.touched; }
  get fchNacimientoNoValido() { return this.forma.get('fchnacimiento')?.invalid && this.forma.get('fchnacimiento')?.touched; }
  get generoNoValido() { return this.forma.get('genero')?.invalid && this.forma.get('genero')?.touched; }
  get ubicacionNoValido() { return this.forma.get('ubicacion')?.invalid && this.forma.get('ubicacion')?.touched; }
  get tipoNoValido() { return this.forma.get('tipo')?.invalid && this.forma.get('tipo')?.touched; }
  get estatusNoValido() { return this.forma.get('estatus')?.invalid && this.forma.get('estatus')?.touched; }

  crearFormulario() {

    this.forma = this.fb.group({
      id:            [],
      nombre:        ['', [ Validators.required ]],
      paterno:       ['', [ Validators.required ]],
      materno:       [''],
      email:         ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ]],
      contrasena:    ['', [ Validators.required, Validators.minLength(8) ]],
      telefono:      ['', [ Validators.required ]],
      fchnacimiento: ['', [ Validators.required ]],
      genero:        ['', [ Validators.required ]],
      ubicacion:     ['', [ Validators.required ]],
      tipo:          ['', [ Validators.required ]],
      estatus:       ['', [ Validators.required ]]
    });
  }


  nuevo() {
    this.forma.reset();
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

      this.clientesService.registrar( this.forma.value )
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

      this.clientesService.actualiza( this.forma.value )
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

    this.clientesService.obtener(id)
      .subscribe( (resp: any) => {
        console.log(resp);
        this.respuesta = resp;
        // console.log(this.respuesta[0].usuario);

        this.forma.reset ({
          id:            this.respuesta[0].cve_cliente,
          nombre:        this.respuesta[0].nombre,
          paterno:       this.respuesta[0].paterno,
          materno:       this.respuesta[0].materno,
          email:         this.respuesta[0].email,
          contrasena:    this.respuesta[0].contrasena,
          telefono:      this.respuesta[0].telefono,
          fchnacimiento: this.respuesta[0].fch_nacimiento,
          genero:        this.respuesta[0].id_genero,
          ubicacion:     this.respuesta[0].id_ubicacion,
          tipo:          this.respuesta[0].id_tipo_cliente,
          estatus:       this.respuesta[0].ban_activo
        });

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

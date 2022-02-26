import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MayoreoService } from '../../services/mayoreo.service';
import { ScriptLoaderService } from '../../script-loader.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-mayoreo',
  templateUrl: './mayoreo.component.html',
  styles: [
  ]
})


export class MayoreoComponent implements OnInit {

  forma!: FormGroup;
  mayoreo: any = [];
  mayoreos: any = [];
  respuesta: any = [];
  mensajeError: boolean = false;

  constructor( private mayoreoService: MayoreoService, 
               private http: HttpClient, 
               private scriptLoader: ScriptLoaderService,
               private fb: FormBuilder) {

    this.crearFormulario();


    // Mayoreos
    this.mayoreoService.obtenerTodos()
      .subscribe( (resp: any) => {
        this.mayoreo = resp;
        console.log(resp);
      });
  }

  ngOnInit(): void {
    this.forma.reset();
  }


  get nombreNoValido() { return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched; }
  get emailNoValido() { return this.forma.get('email')?.invalid && this.forma.get('email')?.touched; }
  get mensajeNoValido() { return this.forma.get('mensaje')?.invalid && this.forma.get('mensaje')?.touched; }
  get estatusNoValido() { return this.forma.get('estatus')?.invalid && this.forma.get('estatus')?.touched; }


  crearFormulario() {

    this.forma = this.fb.group({
      id:         [],
      nombre:     ['', [ Validators.required ]],
      email:      ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ]],
      mensaje:    ['', [ Validators.required ]],
      estatus:    ['', [ Validators.required ]]
    });
  }


  nuevo() {
    this.forma.reset();
  }


  guardar() {
    // console.log( this.forma );

    if ( this.forma.invalid ) {
      return Object.values( this.forma.controls ).forEach( control => {
        control.markAsTouched();
      });
    }

    if ( this.forma.value.id == null ) {
      // Nuevo

      this.mayoreoService.registrar( this.forma.value )
      .subscribe( (resp: any) => {
        console.log(resp);
        this.respuesta = resp;

        if (this.respuesta.success == 1) {
          window.location.reload();
        } else {
          this.mensajeError = true;
        }
      });


    } else {
      // Actualizar

      this.mayoreoService.actualiza( this.forma.value )
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

    this.mayoreoService.obtener(id)
      .subscribe( (resp: any) => {
        // console.log(resp);
        this.respuesta = resp;
        // console.log(this.respuesta[0].nombre);

        this.forma.reset ({
          id:         this.respuesta[0].cve_venta_mayoreo,
          nombre:     this.respuesta[0].nombre,
          email:      this.respuesta[0].email,
          mensaje:    this.respuesta[0].mensaje,
          estatus:    this.respuesta[0].ban_activo
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

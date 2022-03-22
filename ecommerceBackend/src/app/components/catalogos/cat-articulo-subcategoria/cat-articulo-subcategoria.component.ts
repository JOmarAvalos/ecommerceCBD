import { Component, OnInit } from '@angular/core';
import { SubcategoriaService } from '../../../services/subcategoria.service';
import { ScriptLoaderService } from '../../../script-loader.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cat-articulo-subcategoria',
  templateUrl: './cat-articulo-subcategoria.component.html',
  styles: [
  ]
})

export class CatArticuloSubcategoriaComponent implements OnInit {

  forma!: FormGroup;
  subcategorias: any = [];
  respuesta: any = [];
  mensajeError: boolean = false;

  // Parametros Paginacion.
  currentPage: number = 1;
  itemsPerPage: number = 10;
  previousLabel: string = 'Anterior';
  nextLabel: string = 'Siguiente';
  responsive: boolean = true;

  constructor( private subcategoriaService: SubcategoriaService,
               private scriptLoader: ScriptLoaderService,
               private fb: FormBuilder ) {

    this.crearFormulario();

    // Loading icon
    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    // Subcategoria
    this.subcategoriaService.obtenerTodos()
      .subscribe( (resp: any) => {
        this.subcategorias = resp;
        Swal.close();
        // console.log(resp);
      });

  }

  ngOnInit(): void {
    this.forma.reset();
  }

  get nombreNoValido() { return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched; }
  get estatusNoValido() { return this.forma.get('estatus')?.invalid && this.forma.get('estatus')?.touched; }


  crearFormulario() {

    this.forma = this.fb.group({
      id:            [],
      nombre:        ['', [ Validators.required ]],
      estatus:       ['', [ Validators.required ]]
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

      this.subcategoriaService.registrar( this.forma.value )
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

      this.subcategoriaService.actualiza( this.forma.value )
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

    this.subcategoriaService.obtener(id)
      .subscribe( (resp: any) => {
        console.log(resp);
        this.respuesta = resp;
        // console.log(this.respuesta[0].usuario);

        this.forma.reset ({
          id:            this.respuesta[0].cve_subcategoria_articulo,
          nombre:        this.respuesta[0].nombre,
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

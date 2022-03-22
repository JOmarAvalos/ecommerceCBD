import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../services/inventario.service';
import { CategoriaService } from '../../services/categoria.service';
import { SubcategoriaService } from '../../services/subcategoria.service';
import { MarcasService } from '../../services/marcas.service';
import { ScriptLoaderService } from '../../script-loader.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styles: [
  ]
})

export class InventarioComponent implements OnInit {

  forma!: FormGroup;
  articulo: any = [];
  inventario: any = [];
  categorias: any = [];
  subcategorias: any = [];
  marcas: any = [];
  respuesta: any = [];
  mensajeError: boolean = false;

  // Parametros Paginacion.
  currentPage: number = 1;
  itemsPerPage: number = 10;
  previousLabel: string = 'Anterior';
  nextLabel: string = 'Siguiente';
  responsive: boolean = true;


  constructor( private inventarioService: InventarioService,
               private http: HttpClient,
               private scriptLoader: ScriptLoaderService,
               private categoriaService: CategoriaService,
               private subcategoriaService: SubcategoriaService,
               private marcasService: MarcasService,
               private fb: FormBuilder ) {


    this.crearFormulario();


    // Loading icon
    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor...'
    });
    Swal.showLoading();


    this.inventarioService.obtenerTodos()
      .subscribe( (resp: any) => {
        this.inventario = resp;
        Swal.close();
        // console.log(resp);
      });

    // Categorias
    this.categoriaService.obtenerActivos()
      .subscribe( (resp: any) => {
        this.categorias = resp;
        // console.log(resp);
      });

    // Subcategorias
    this.subcategoriaService.obtenerActivos()
      .subscribe( (resp: any) => {
        this.subcategorias = resp;
        // console.log(resp);
      });

    // Marcas
    this.marcasService.obtenerActivos()
      .subscribe( (resp: any) => {
        this.marcas = resp;
        // console.log(resp);
      });
  }

  ngOnInit(): void {
    this.forma.reset();
  }

  get marcaNoValido() { return this.forma.get('marca')?.invalid && this.forma.get('marca')?.touched; }
  get skuNoValido() { return this.forma.get('sku')?.invalid && this.forma.get('sku')?.touched; }
  get nombreNoValido() { return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched; }
  get categoriaNoValido() { return this.forma.get('categoria')?.invalid && this.forma.get('categoria')?.touched; }
  get descripcionCortaNoValido() { return this.forma.get('descripcioncorta')?.invalid && this.forma.get('descripcioncorta')?.touched; }
  get descripcionLargaNoValido() { return this.forma.get('descripcionlarga')?.invalid && this.forma.get('descripcionlarga')?.touched; }
  get precioNoValido() { return this.forma.get('precio')?.invalid && this.forma.get('precio')?.touched; }
  get inventarioCantidadNoValido() { return this.forma.get('inventariocantidad')?.invalid && this.forma.get('inventariocantidad')?.touched; }
  get estatusNoValido() { return this.forma.get('estatus')?.invalid && this.forma.get('estatus')?.touched; }


  crearFormulario() {

    this.forma = this.fb.group({
      id:                 [],
      marca:              ['', [ Validators.required ]],
      sku:                ['', [ Validators.required ]],
      nombre:             ['', [ Validators.required ]],
      categoria:          ['', [ Validators.required ]],
      subcategoria:       [],
      concentracion:      [],
      presentacion:       [],
      sabor:              [],
      descripcioncorta:   ['', [ Validators.required ]],
      descripcionlarga:   ['', [ Validators.required ]],
      precio:             ['', [ Validators.required ]],
      preciocondescuento: [],
      inventariocantidad: ['', [ Validators.required ]],
      estatus:            ['', [ Validators.required ]]
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

      this.inventarioService.registrar( this.forma.value )
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

      this.inventarioService.actualiza( this.forma.value )
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

    this.inventarioService.obtener(id)
      .subscribe( (resp: any) => {
        // console.log(resp);
        this.respuesta = resp;
        // console.log(this.respuesta[0].nombre);

        this.forma.reset ({
          id:                 this.respuesta[0].cve_articulo,
          marca:              this.respuesta[0].id_marca,
          sku:                this.respuesta[0].sku,
          nombre:             this.respuesta[0].nombre,
          categoria:          this.respuesta[0].id_categoria_articulo,
          subcategoria:       this.respuesta[0].id_subcategoria_articulo,
          concentracion:      this.respuesta[0].concentracion,
          presentacion:       this.respuesta[0].presentacion,
          sabor:              this.respuesta[0].sabor,
          descripcioncorta:   this.respuesta[0].descripcion_corta,
          descripcionlarga:   this.respuesta[0].descripcion_larga,
          precio:             this.respuesta[0].precio,
          preciocondescuento: this.respuesta[0].precio_con_descuento,
          inventariocantidad: this.respuesta[0].inventario_cantidad,
          estatus:            this.respuesta[0].ban_activo
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

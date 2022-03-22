import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MayoreoService } from '../../../services/mayoreo.service';



@Component({
  selector: 'app-mayoreo-seguimiento',
  templateUrl: './mayoreo-seguimiento.component.html',
  styles: [
  ]
})


export class MayoreoSeguimientoComponent implements OnInit {

  forma!: FormGroup;
  mayoreoSeguimiento: any = [];
  respuesta: any = [];
  mensajeError: boolean = false;
  myId: String = '';
  

  constructor( private activatedRoute: ActivatedRoute,
               private mayoreoService: MayoreoService,
               private fb: FormBuilder ) {

    this.crearFormulario();

    this.activatedRoute.params.subscribe( params => {

      // Mayoreo seguimiento
      this.mayoreoService.obtenerSeguimiento(params['id'])
      .subscribe( (resp: any) => {
        this.mayoreoSeguimiento = resp;
        console.log(resp);
      });
    });
  }


  ngOnInit(): void {
    this.forma.reset();
  }


  get mensajeNoValido() { return this.forma.get('mensaje')?.invalid && this.forma.get('mensaje')?.touched; }


  crearFormulario() {
    this.forma = this.fb.group({
      id:         [],
      mensaje:    ['', [ Validators.required ]]
    });
  }

  guardar() {
    console.log( this.forma );

    this.myId = (<HTMLInputElement>document.getElementById('id')).value;

    if ( this.forma.invalid ) {
      return Object.values( this.forma.controls ).forEach( control => {
        control.markAsTouched();
      });
    }

    this.mayoreoService.registrarSeguimiento( this.forma.value, this.myId )
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

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MayoreoService } from '../../services/mayoreo.service';

@Component({
  selector: 'app-mayoreo',
  templateUrl: './mayoreo.component.html',
  styles: [
  ]
})
export class MayoreoComponent implements OnInit {

  mayoreo: any = [];

  constructor( private mayoreoService: MayoreoService, private http: HttpClient) { 

    this.mayoreoService.obtenerTodos() 
      .subscribe( (resp: any) => {
        this.mayoreo = resp;
        console.log(resp);
      });
  }

  ngOnInit(): void {
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PreciosListaService } from '../../../services/precios-lista.service';
import { ExcelServicesService } from '../../../services/excel-services.service';
import { ScriptLoaderService } from '../../../script-loader.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-rep-lista-precios',
  templateUrl: './rep-lista-precios.component.html',
  styles: [
  ]
})
export class RepListaPreciosComponent implements OnInit {

  preciosLista: any = [];


  // Parametros Paginacion.
  currentPage: number   = 1;
  itemsPerPage: number  = 10;
  previousLabel: string = 'Anterior';
  nextLabel: string     = 'Siguiente';
  responsive: boolean   = true;

  constructor( private preciosListaService: PreciosListaService,
               private http: HttpClient,
               private scriptLoader: ScriptLoaderService,
               private excelService: ExcelServicesService ) {

    // Loading icon
    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.preciosListaService.obtenerTodos()
      .subscribe( (resp: any) => {
        this.preciosLista = resp;
        Swal.close();
        // console.log(resp);
      });
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.preciosLista, 'lista_precios');
  }

  exportAsPDF(): void {
    // Extraemos el
    const DATA: any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      // doc.fromHTML(DATA,  bufferX, bufferY, 0);
      return doc;
    }).then((docResult) => {
      docResult.save('lista_precios_export_' + new Date().getTime() + '.pdf');
    });
  }

  ngOnInit(): void {
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

import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../../script-loader.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: [
  ]
})
export class BlogComponent implements OnInit {

  constructor( private scriptLoader: ScriptLoaderService ) { }

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

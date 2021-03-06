import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MiCuentaComponent } from './components/mi-cuenta/mi-cuenta.component';
import { TerminosComponent } from './components/terminos/terminos.component';
import { PoliticaComponent } from './components/politica/politica.component';
import { EnConstruccionComponent } from './components/en-construccion/en-construccion.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { FaqComponent } from './components/faq/faq.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { Nota1Component } from './components/nota1/nota1.component';
import { Nota2Component } from './components/nota2/nota2.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MiCuentaComponent,
    TerminosComponent,
    PoliticaComponent,
    EnConstruccionComponent,
    TiendaComponent,
    ArticuloComponent,
    FaqComponent,
    BlogComponent,
    AboutComponent,
    Nota1Component,
    Nota2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

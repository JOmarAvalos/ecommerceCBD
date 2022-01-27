import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BlogComponent } from './components/blog/blog.component';
import { FaqComponent } from './components/faq/faq.component';
import { MiCuentaComponent } from './components/mi-cuenta/mi-cuenta.component';
import { TerminosComponent } from './components/terminos/terminos.component';
import { PoliticaComponent } from './components/politica/politica.component';
import { MayoreoComponent } from './components/mayoreo/mayoreo.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { EnConstruccionComponent } from './components/en-construccion/en-construccion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TiendaComponent,
    AcercaDeComponent,
    BlogComponent,
    FaqComponent,
    MiCuentaComponent,
    TerminosComponent,
    PoliticaComponent,
    MayoreoComponent,
    CalculadoraComponent,
    EnConstruccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

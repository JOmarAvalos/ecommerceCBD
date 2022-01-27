import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
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


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'acercaDe', component: AcercaDeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'miCuenta', component: MiCuentaComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'politica', component: PoliticaComponent },
  { path: 'mayoreo', component: MayoreoComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'enConstruccion', component: EnConstruccionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'enConstruccion'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

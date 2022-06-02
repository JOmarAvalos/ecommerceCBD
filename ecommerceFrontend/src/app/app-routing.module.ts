import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
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


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'miCuenta', component: MiCuentaComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'politica', component: PoliticaComponent },
  { path: 'enConstruccion', component: EnConstruccionComponent },
  { path: 'tienda/:id', component: TiendaComponent },
  { path: 'articulo/:name', component: ArticuloComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

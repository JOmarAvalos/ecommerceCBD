import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { InicioComponent } from './components/inicio/inicio.component';
import { MiCuentaComponent } from './components/mi-cuenta/mi-cuenta.component';
import { TerminosComponent } from './components/terminos/terminos.component';
import { PoliticaComponent } from './components/politica/politica.component';
import { EnConstruccionComponent } from './components/en-construccion/en-construccion.component';
import { TiendaComponent } from './components/tienda/tienda.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'miCuenta', component: MiCuentaComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'politica', component: PoliticaComponent },
  { path: 'enConstruccion', component: EnConstruccionComponent },
  { path: 'tienda/:id', component: TiendaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

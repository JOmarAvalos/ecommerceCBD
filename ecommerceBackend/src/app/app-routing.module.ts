import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { BlogComponent } from './components/blog/blog.component';
import { FrontComponent } from './components/front/front.component';
import { MayoreoComponent } from './components/mayoreo/mayoreo.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';


const routes: Routes = [
 { path: 'login', component: LoginComponent },
 { path: 'dashboard', component: DashboardComponent},
 { path: 'clientes', component: ClientesComponent},
 { path: 'pedidos', component: PedidosComponent},
 { path: 'inventario', component: InventarioComponent},
 { path: 'usuarios', component: UsuariosComponent},
 { path: 'reportes', component: ReportesComponent},
 { path: 'blog', component: BlogComponent},
 { path: 'front', component: FrontComponent},
 { path: 'mayoreo', component: MayoreoComponent},
 { path: 'mi-perfil', component: MiPerfilComponent},
 { path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

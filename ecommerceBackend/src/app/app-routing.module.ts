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
import { MayoreoSeguimientoComponent } from './components/mayoreo/mayoreo-seguimiento/mayoreo-seguimiento.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { CatalogosComponent } from './components/catalogos/catalogos.component';
import { CatClienteTipoComponent } from './components/catalogos/cat-cliente-tipo/cat-cliente-tipo.component';
import { CatArticuloMarcaComponent } from './components/catalogos/cat-articulo-marca/cat-articulo-marca.component';
import { CatArticuloCategoriaComponent } from './components/catalogos/cat-articulo-categoria/cat-articulo-categoria.component';
import { CatArticuloSubcategoriaComponent } from './components/catalogos/cat-articulo-subcategoria/cat-articulo-subcategoria.component';
import { RepListaPreciosComponent } from './components/reportes/rep-lista-precios/rep-lista-precios.component';

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
 { path: 'mayoreo-seguimiento/:id', component: MayoreoSeguimientoComponent},
 { path: 'mi-perfil', component: MiPerfilComponent},
 { path: 'catalogos', component: CatalogosComponent},
 { path: 'cat-cliente-tipo', component: CatClienteTipoComponent},
 { path: 'cat-articulo-marca', component: CatArticuloMarcaComponent},
 { path: 'cat-articulo-categoria', component: CatArticuloCategoriaComponent},
 { path: 'cat-articulo-subcategoria', component: CatArticuloSubcategoriaComponent},
 { path: 'rep-lista-precios', component: RepListaPreciosComponent},
 { path: '**', pathMatch: 'full', redirectTo: 'login'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

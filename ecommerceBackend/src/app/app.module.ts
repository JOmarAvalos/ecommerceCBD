import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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

// Componentes compartidos
import { MenuComponent } from './components/shared/menu/menu.component';
import { HeaderComponent } from './components/shared/header/header.component';

import { ScriptLoaderService } from './script-loader.service';
import { CatClienteTipoComponent } from './components/catalogos/cat-cliente-tipo/cat-cliente-tipo.component';
import { CatArticuloMarcaComponent } from './components/catalogos/cat-articulo-marca/cat-articulo-marca.component';
import { CatArticuloCategoriaComponent } from './components/catalogos/cat-articulo-categoria/cat-articulo-categoria.component';
import { CatArticuloSubcategoriaComponent } from './components/catalogos/cat-articulo-subcategoria/cat-articulo-subcategoria.component';
import { RepListaPreciosComponent } from './components/reportes/rep-lista-precios/rep-lista-precios.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ClientesComponent,
    PedidosComponent,
    InventarioComponent,
    UsuariosComponent,
    ReportesComponent,
    BlogComponent,
    FrontComponent,
    MayoreoComponent,
    MiPerfilComponent,
    MenuComponent,
    HeaderComponent,
    MayoreoSeguimientoComponent,
    CatalogosComponent,
    CatClienteTipoComponent,
    CatArticuloMarcaComponent,
    CatArticuloCategoriaComponent,
    CatArticuloSubcategoriaComponent,
    RepListaPreciosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    ScriptLoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

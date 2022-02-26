import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

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

// Componentes compartidos
import { MenuComponent } from './components/shared/menu/menu.component';
import { HeaderComponent } from './components/shared/header/header.component';

import { ScriptLoaderService } from './script-loader.service';

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ScriptLoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

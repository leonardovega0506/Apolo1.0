import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from '../app/views/login/login.component';
import {AuthInterceptor, authInterceptorProviders} from '../app/services/utils/auth.interceptor';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {DashboardAdminComponent  } from '../app/views/admin/dashboard-admin/dashboard-admin.component';
import { DashboardReciboComponent } from './views/recibo/dashboard-recibo/dashboard-recibo.component';
import { DashboardAlmacenComponent } from './views/almacen/dashboard-almacen/dashboard-almacen.component';
import { DashboardComprasComponent } from './views/compras/dashboard-compras/dashboard-compras.component';
import { DashboardFotoComponent } from './views/foto/dashboard-foto/dashboard-foto.component';
import { RegistrosCompletosComponent } from './views/admin/registros-completos/registros-completos.component';
import { DetalleRegistroComponent } from './views/recibo/detalle-registro/detalle-registro.component';
import { SidebarComponent } from './views/admin/sidebar/sidebar.component';
import { NavbarComponent } from './views/admin/navbar/navbar.component';
import { OrdenesAdminComponent } from './views/admin/ordenes-admin/ordenes-admin.component';
import { ItemAdminComponent } from './views/admin/item-admin/item-admin.component';
import { UsuariosComponent } from './views/admin/usuarios/usuarios.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrosDetallesCompletosComponent } from './views/admin/registros-detalles-completos/registros-detalles-completos.component';
import { AsignarProductoAdminComponent } from './views/admin/asignar-producto-admin/asignar-producto-admin.component';
import { AgregarItemComponent } from './views/admin/agregar-item/agregar-item.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardAdminComponent,
    DashboardReciboComponent,
    DashboardAlmacenComponent,
    DashboardComprasComponent,
    DashboardFotoComponent,
    RegistrosCompletosComponent,
    DetalleRegistroComponent,
    SidebarComponent,
    NavbarComponent,
    OrdenesAdminComponent,
    ItemAdminComponent,
    UsuariosComponent,
    RegistrosDetallesCompletosComponent,
    AsignarProductoAdminComponent,
    AgregarItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

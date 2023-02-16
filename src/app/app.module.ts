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
import { SidebarComponent } from './views/admin/sidebar/sidebar.component';
import { NavbarComponent } from './views/admin/navbar/navbar.component';
import { OrdenesAdminComponent } from './views/admin/ordenes-admin/ordenes-admin.component';
import { ItemAdminComponent } from './views/admin/item-admin/item-admin.component';
import { UsuariosComponent } from './views/admin/usuarios/usuarios.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrosDetallesCompletosComponent } from './views/admin/registros-detalles-completos/registros-detalles-completos.component';
import { AsignarProductoAdminComponent } from './views/admin/asignar-producto-admin/asignar-producto-admin.component';
import { AgregarItemComponent } from './views/admin/agregar-item/agregar-item.component';
import { DetalleProductoComponent } from './views/admin/detalle-producto/detalle-producto.component';
import { SidebarAlmacenComponent } from './views/almacen/sidebar-almacen/sidebar-almacen.component';
import { RegistrosAlmacenComponent } from './views/almacen/registros-almacen/registros-almacen.component';
import { ProductosAlmacenComponent } from './views/almacen/productos-almacen/productos-almacen.component';
import { AccionesRegistroComponent } from './views/almacen/acciones-registro/acciones-registro.component';
import { RegistroFotoComponent } from './views/foto/registro-foto/registro-foto.component';
import { SidebarFotoComponent } from './views/foto/sidebar-foto/sidebar-foto.component';
import { ItemsFotoComponent } from './views/foto/items-foto/items-foto.component';
import { AccionesFotoComponent } from './views/foto/acciones-foto/acciones-foto.component';
import { DetalleItemFotoComponent } from './views/foto/detalle-item-foto/detalle-item-foto.component';
import { SidebarReciboComponent } from './views/recibo/sidebar-recibo/sidebar-recibo.component';
import { RegistrosReciboComponent } from './views/recibo/registros-recibo/registros-recibo.component';
import { ItemsReciboComponent } from './views/recibo/items-recibo/items-recibo.component';
import { DetalleItemReciboComponent } from './views/recibo/detalle-item-recibo/detalle-item-recibo.component';
import { AccionesReciboComponent } from './views/recibo/acciones-recibo/acciones-recibo.component';
import { SidebarComprasComponent } from './views/compras/sidebar-compras/sidebar-compras.component';
import { RegistrosComprasComponent } from './views/compras/registros-compras/registros-compras.component';
import { AccionesComprasComponent } from './views/compras/acciones-compras/acciones-compras.component';
import { ItemsComprasComponent } from './views/compras/items-compras/items-compras.component';
import { DetalleItemComprasComponent } from './views/compras/detalle-item-compras/detalle-item-compras.component';
import { AgregarItemComprasComponent } from './views/compras/agregar-item-compras/agregar-item-compras.component';
import { OrdenesComprasComponent } from './views/compras/ordenes-compras/ordenes-compras.component';
import { AsignarProductoComprasComponent } from './views/compras/asignar-producto-compras/asignar-producto-compras.component';
//Import de Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';




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
    SidebarComponent,
    NavbarComponent,
    OrdenesAdminComponent,
    ItemAdminComponent,
    UsuariosComponent,
    RegistrosDetallesCompletosComponent,
    AsignarProductoAdminComponent,
    AgregarItemComponent,
    DetalleProductoComponent,
    SidebarAlmacenComponent,
    RegistrosAlmacenComponent,
    ProductosAlmacenComponent,
    AccionesRegistroComponent,
    RegistroFotoComponent,
    SidebarFotoComponent,
    ItemsFotoComponent,
    AccionesFotoComponent,
    DetalleItemFotoComponent,
    SidebarReciboComponent,
    RegistrosReciboComponent,
    ItemsReciboComponent,
    DetalleItemReciboComponent,
    AccionesReciboComponent,
    SidebarComprasComponent,
    RegistrosComprasComponent,
    AccionesComprasComponent,
    ItemsComprasComponent,
    DetalleItemComprasComponent,
    AgregarItemComprasComponent,
    OrdenesComprasComponent,
    AsignarProductoComprasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    //Iniciamos import de Angular Material
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

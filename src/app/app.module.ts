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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardAdminComponent,
    DashboardReciboComponent,
    DashboardAlmacenComponent,
    DashboardComprasComponent,
    DashboardFotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

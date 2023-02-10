import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './services/guards/admin/admin.guard';
import { AlmacenGuard } from './services/guards/almacen/almacen.guard';
import { ComprasGuard } from './services/guards/compras/compras.guard';
import { FotoGuard } from './services/guards/foto/foto.guard';
import { ReciboGuard } from './services/guards/recibo/recibo.guard';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';
import { DashboardAlmacenComponent } from './views/almacen/dashboard-almacen/dashboard-almacen.component';
import { DashboardComprasComponent } from './views/compras/dashboard-compras/dashboard-compras.component';
import { DashboardFotoComponent } from './views/foto/dashboard-foto/dashboard-foto.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardReciboComponent } from './views/recibo/dashboard-recibo/dashboard-recibo.component';

const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'admin',component:DashboardAdminComponent,pathMatch:'full',canActivate:[AdminGuard]},
  {path: 'almacen',component:DashboardAlmacenComponent,pathMatch:'full',canActivate:[AlmacenGuard]},
  {path: 'compras',component:DashboardComprasComponent,pathMatch:'full',canActivate:[ComprasGuard]},
  {path:'foto',component:DashboardFotoComponent,pathMatch:'full',canActivate:[FotoGuard]},
  {path:'recibo',component:DashboardReciboComponent,pathMatch:'full',canActivate:[ReciboGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

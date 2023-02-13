import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './services/guards/admin/admin.guard';
import { AlmacenGuard } from './services/guards/almacen/almacen.guard';
import { ComprasGuard } from './services/guards/compras/compras.guard';
import { FotoGuard } from './services/guards/foto/foto.guard';
import { ReciboGuard } from './services/guards/recibo/recibo.guard';
import { AgregarItemComponent } from './views/admin/agregar-item/agregar-item.component';
import { AsignarProductoAdminComponent } from './views/admin/asignar-producto-admin/asignar-producto-admin.component';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';
import { ItemAdminComponent } from './views/admin/item-admin/item-admin.component';
import { OrdenesAdminComponent } from './views/admin/ordenes-admin/ordenes-admin.component';
import { RegistrosCompletosComponent } from './views/admin/registros-completos/registros-completos.component';
import { RegistrosDetallesCompletosComponent } from './views/admin/registros-detalles-completos/registros-detalles-completos.component';
import { UsuariosComponent } from './views/admin/usuarios/usuarios.component';
import { DashboardAlmacenComponent } from './views/almacen/dashboard-almacen/dashboard-almacen.component';
import { DashboardComprasComponent } from './views/compras/dashboard-compras/dashboard-compras.component';
import { DashboardFotoComponent } from './views/foto/dashboard-foto/dashboard-foto.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardReciboComponent } from './views/recibo/dashboard-recibo/dashboard-recibo.component';


const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'admin',component:DashboardAdminComponent,canActivate:[AdminGuard],children:[
    {path:'registros',component:RegistrosCompletosComponent},
    {path:'ordenes',component:OrdenesAdminComponent},
    {path:'items',component:ItemAdminComponent},
    {path:'usuarios',component:UsuariosComponent},
    {path:'detalleRegistros/:id',component:RegistrosDetallesCompletosComponent},
    {path:'asignarProducto/:id',component:AsignarProductoAdminComponent},
    {path:'agregar-item',component:AgregarItemComponent}
  ]},
  {path: 'almacen',component:DashboardAlmacenComponent,pathMatch:'full',canActivate:[AlmacenGuard]},
  {path: 'compras',component:DashboardComprasComponent,pathMatch:'full',canActivate:[ComprasGuard]},
  {path:'foto',component:DashboardFotoComponent,pathMatch:'full',canActivate:[FotoGuard]},
  {path:'recibo',component:DashboardReciboComponent,pathMatch:'full',canActivate:[ReciboGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

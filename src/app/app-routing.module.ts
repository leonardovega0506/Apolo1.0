import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './services/guards/admin/admin.guard';
import { AlmacenGuard } from './services/guards/almacen/almacen.guard';
import { ComprasGuard } from './services/guards/compras/compras.guard';
import { FotoGuard } from './services/guards/foto/foto.guard';
import { ReciboGuard } from './services/guards/recibo/recibo.guard';
import { AgregarItemComponent } from './views/admin/agregar-item/agregar-item.component';
import { AsignarProductoAdminComponent } from './views/admin/asignar-producto-admin/asignar-producto-admin.component';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';
import { DetalleProductoComponent } from './views/admin/detalle-producto/detalle-producto.component';
import { ItemAdminComponent } from './views/admin/item-admin/item-admin.component';
import { OrdenesAdminComponent } from './views/admin/ordenes-admin/ordenes-admin.component';
import { RegistrosCompletosComponent } from './views/admin/registros-completos/registros-completos.component';
import { RegistrosDetallesCompletosComponent } from './views/admin/registros-detalles-completos/registros-detalles-completos.component';
import { UsuariosComponent } from './views/admin/usuarios/usuarios.component';
import { AccionesRegistroComponent } from './views/almacen/acciones-registro/acciones-registro.component';
import { DashboardAlmacenComponent } from './views/almacen/dashboard-almacen/dashboard-almacen.component';
import { ProductosAlmacenComponent } from './views/almacen/productos-almacen/productos-almacen.component';
import { RegistrosAlmacenComponent } from './views/almacen/registros-almacen/registros-almacen.component';
import { AccionesComprasComponent } from './views/compras/acciones-compras/acciones-compras.component';
import { AgregarItemComprasComponent } from './views/compras/agregar-item-compras/agregar-item-compras.component';
import { AsignarProductoComprasComponent } from './views/compras/asignar-producto-compras/asignar-producto-compras.component';
import { DashboardComprasComponent } from './views/compras/dashboard-compras/dashboard-compras.component';
import { DetalleItemComprasComponent } from './views/compras/detalle-item-compras/detalle-item-compras.component';
import { ItemsComprasComponent } from './views/compras/items-compras/items-compras.component';
import { OrdenesComprasComponent } from './views/compras/ordenes-compras/ordenes-compras.component';
import { RegistrosComprasComponent } from './views/compras/registros-compras/registros-compras.component';
import { AccionesFotoComponent } from './views/foto/acciones-foto/acciones-foto.component';
import { DashboardFotoComponent } from './views/foto/dashboard-foto/dashboard-foto.component';
import { DetalleItemFotoComponent } from './views/foto/detalle-item-foto/detalle-item-foto.component';
import { ItemsFotoComponent } from './views/foto/items-foto/items-foto.component';
import { RegistroFotoComponent } from './views/foto/registro-foto/registro-foto.component';
import { LoginComponent } from './views/login/login.component';
import { AccionesReciboComponent } from './views/recibo/acciones-recibo/acciones-recibo.component';
import { DashboardReciboComponent } from './views/recibo/dashboard-recibo/dashboard-recibo.component';
import { DetalleItemReciboComponent } from './views/recibo/detalle-item-recibo/detalle-item-recibo.component';
import { ItemsReciboComponent } from './views/recibo/items-recibo/items-recibo.component';
import { RegistrosReciboComponent } from './views/recibo/registros-recibo/registros-recibo.component';


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
    {path:'agregar-item',component:AgregarItemComponent},
    {path:'detalle-item/:itemCode',component:DetalleProductoComponent}
  ]},
  {path: 'almacen',component:DashboardAlmacenComponent,canActivate:[AlmacenGuard], children:[
    {path:"registros",component:RegistrosAlmacenComponent},
    {path:'items',component:ProductosAlmacenComponent},
    {path:'acciones-almacen/:idRegistro',component:AccionesRegistroComponent}
  ]},
  {path: 'compras',component:DashboardComprasComponent,canActivate:[ComprasGuard], children:[
    {path:'registros',component:RegistrosComprasComponent},
    {path:'acciones-compras/:idRegistro',component:AccionesComprasComponent},
    {path:'items',component:ItemsComprasComponent},
    {path:'detalle-item/:itemCode',component:DetalleItemComprasComponent},
    {path:'agregar-item',component:AgregarItemComprasComponent},
    {path:'ordenes',component:OrdenesComprasComponent},
    {path:'asignarProducto/:id',component:AsignarProductoComprasComponent}
]},
  {path:'foto',component:DashboardFotoComponent,canActivate:[FotoGuard], children:[
    {path:'registros',component:RegistroFotoComponent},
    {path:'items',component:ItemsFotoComponent},
    {path:'acciones-foto/:idRegistro',component:AccionesFotoComponent},
    {path:'detalle-item/:itemCode',component:DetalleItemFotoComponent}
  ]},
  {path:'recibo',component:DashboardReciboComponent,canActivate:[ReciboGuard],children:[
    {path:'registros',component:RegistrosReciboComponent},
    {path:'items',component:ItemsReciboComponent},
    {path:'detalle-item/:itemCode',component:DetalleItemReciboComponent},
    {path:'acciones-recibo/:idRegistro',component:AccionesReciboComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

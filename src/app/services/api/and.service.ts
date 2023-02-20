import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from '../utils/helper';

@Injectable({
  providedIn: 'root'
})
export class AndService {

  //Status del Servicio
  public andStatus = new Subject<boolean>();

  //Base del proyecto
  baseAnd: string = `${baseUrl}`

  //Constructor
  constructor(private http: HttpClient) { }


  /* ***Productos*** */
  //Listar los Productos
  public listaItems() {
    return this.http.get(this.baseAnd + "/items");
  }

  //Obtener el producto por el codigo
  public obtenerItemByItemCode(itemCode: any) {
    return this.http.get(this.baseAnd + "/items/itemCode/" + itemCode);
  }

  //Crear Un Producto en MySQL y SAP
  public crearItem(formItem: any) {
    return this.http.post(this.baseAnd + "/items", formItem);
  }

  //Actualizar un Producto en MySQL y SAP
  public actualizarItem(formItem: any) {
    return this.http.put(this.baseAnd + "/items", formItem);
  }

  /* ***Ordenes*** */

  //Asignar una orden en MySQL desde SAP
  public asignarOrden(docEntry: any, id: any) {
    return this.http.get(this.baseAnd + "/ordenes/asignarOrden/" + id + "?docEntry=" + docEntry);
  }

  //Listar las ordenes
  public listaOrdenes() {
    return this.http.get(this.baseAnd + "/ordenes");
  }

  //Obtener la orden por el ID
  public obtenerOrdenById(id: any) {
    return this.http.get(this.baseAnd + "/ordenes/id/" + id);
  }

  //Obtener la orden por el numero de entrada
  public obtenerOrdenByDocEntry(docEntry: any) {
    return this.http.get(this.baseAnd + "/ordenes/docEntry/" + docEntry);
  }
  //Crear una Orden a MySQL
  public crearOrden(form: any) {
    return this.http.post(this.baseAnd + "/ordenes", form);
  }

  //Agregar ProductoResurtido a un orden en MySQL
  public agregarItemR(itemCode: any, cantidad: any, precio: any, id: any) {
    return this.http.post(this.baseAnd + "/ordenes/agregarItemR/" + id + "?itemCode=" + itemCode + "&precio=" + precio + "&cantidad=" + cantidad, id);
  }

  //Agregar Producto Nuevo a una Orden en MySQL
  public agregarItemN(itemCode: any, cantidad: any, precio: any, id: any) {
    return this.http.post(this.baseAnd + "/ordenes/agregarItemN/" + id + "?itemCode=" + itemCode + "&precio=" + precio + "&cantidad=" + cantidad, id);
  }

  /* ***Registros*** */
  //Listar todos los registros de tiempo
  public listarRegistros() {
    return this.http.get(this.baseAnd + "/registros");
  }
  //Obtener el registro de tiempo por el id
  public obtenerRegistroByID(id: any) {
    return this.http.get(this.baseAnd + "/registros/" + id);
  }

  //Crear un registro de tiempo
  public crearRegistro(numeroEntrada?: any) {
    if (numeroEntrada != 0) {
      return this.http.post(this.baseAnd + "/registros/crear?numeroEntrada=" + numeroEntrada, numeroEntrada);
    }
    else {
      return this.http.post(this.baseAnd + "/registros/crear?numeroEntrada=0", 0);
    }
  }

  //Generar el Tiempo para Almacen
  public generarTiempoAlmacen(idRegistro: any) {
    return this.http.put(this.baseAnd + "/registros/almacen/" + idRegistro, idRegistro);
  }

  //Generar el Tiempo para Foto tomada
  public generarTiempoFoto(idRegistro: any) {
    return this.http.put(this.baseAnd + "/registros/foto-t/" + idRegistro, idRegistro);
  }

  //Generar el Tiempo para Muestra mandada a compras
  public generarTiempoCompraMM(idRegistro: any) {
    return this.http.put(this.baseAnd + "/registros/compra-m/" + idRegistro, idRegistro);
  }

  //Generar el Tiempo para Transito
  public generarTiempoTransito(idRegistro: any) {
    return this.http.put(this.baseAnd + "/registros/transito/" + idRegistro, idRegistro);
  }

  //Generar el Tiempo para Orden Liberada
  public generarTiempoReciboL(idRegistro: any) {
    return this.http.put(this.baseAnd + "/registros/recibo-l" + idRegistro, idRegistro);
  }

  //Generar el tiempo para Liberar Muestra
  public generarTiempoCompraMuestraL(idRegistro: any) {
    return this.http.put(this.baseAnd + "/registros/compra-l/" + idRegistro, idRegistro);
  }

  //Generar El tiempo para pendiente de foto
  public generarTiempoCompraMF(idRegistro: any) {
    return this.http.put(this.baseAnd + "/registros/compra-f/" + idRegistro, idRegistro);
  }

  /* ***Usuarios*** */
  //Listar los Usuarios
  public listaUsuarios() {
    return this.http.get(this.baseAnd + "/auth/usuarios");
  }

  //Crear un Usuario
  public crearUsuario(form: any) {
    return this.http.post(this.baseAnd + "/auth/usuario?rol=" + form.area, form);
  }

}

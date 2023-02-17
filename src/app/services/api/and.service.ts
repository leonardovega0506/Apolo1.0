import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../utils/helper';

@Injectable({
  providedIn: 'root'
})
export class AndService {
  
  baseAnd:string= `${baseUrl}`

  constructor(private http:HttpClient) { }

  public listarRegistros(){
    return this.http.get(this.baseAnd+"/registros");
  }

  public listaOrdenes(){
    return this.http.get(this.baseAnd+"/ordenes");
  }
  public listaItems(){
    return this.http.get(this.baseAnd+"/items");
  }
  public listaUsuarios(){
    return this.http.get(this.baseAnd+"/auth/usuarios");
  }
  public obtenerRegistroByID(id:any){
    return this.http.get(this.baseAnd+"/registros/"+id);
  }
  public obtenerOrdenById(id:any){
    return this.http.get(this.baseAnd+"/ordenes/id/"+id);
  }
  public obtenerOrdenByDocEntry(docEntry:any){
    return this.http.get(this.baseAnd+"/ordenes/docEntry/"+docEntry);
  }
  public obtenerItemByItemCode(itemCode:any){
    return this.http.get(this.baseAnd+"/items/itemCode/"+itemCode);
  }
  public asignarOrden(docEntry:any,id:any){
    return this.http.get(this.baseAnd+"/ordenes/asignarOrden/"+id+"?docEntry="+docEntry);
  }
  public crearRegistro(numeroEntrada?:any){
    if(numeroEntrada!=0){
    return this.http.post(this.baseAnd+"/registros/crear?numeroEntrada="+numeroEntrada,numeroEntrada);
    }
    else{
      return this.http.post(this.baseAnd+"/registros/crear?numeroEntrada=0",0);
    }
  }
  public crearOrden(form:any){
    return this.http.post(this.baseAnd+"/ordenes",form);
  }
  public crearUsuario(form:any){
    return this.http.post(this.baseAnd+"/auth/usuario?rol="+form.area,form);
  }
  public agregarItemR(itemCode:any,cantidad:any,precio:any,id:any){
    return this.http.post(this.baseAnd+"/ordenes/agregarItemR/"+id+"?itemCode="+itemCode+"&precio="+precio+"&cantidad="+cantidad,id);
  }
  public agregarItemN(itemCode:any,cantidad:any,precio:any,id:any){
    return this.http.post(this.baseAnd+"/ordenes/agregarItemN/"+id+"?itemCode="+itemCode+"&precio="+precio+"&cantidad="+cantidad,id);
  }
  public crearItem(formItem:any){
    return this.http.post(this.baseAnd+"/items",formItem);
  }
  public actualizarItem(formItem:any){
    return this.http.put(this.baseAnd+"/items",formItem);
  }
  public generarTiempoAlmacen(idRegistro:any){
    return this.http.put(this.baseAnd+"/registros/almacen/"+idRegistro,idRegistro);
  }
  public generarTiempoFoto(idRegistro:any){
    return this.http.put(this.baseAnd+"/registros/foto-t/"+idRegistro,idRegistro);
  }
  public generarTiempoCompraMM(idRegistro:any){
    return this.http.put(this.baseAnd+"/registros/compra-m/"+idRegistro,idRegistro);
  }
  public generarTiempoTransito(idRegistro:any){
    return this.http.put(this.baseAnd+"/registros/transito/"+idRegistro,idRegistro);  
  }
  public generarTiempoReciboL(idRegistro:any){
    return this.http.put(this.baseAnd+"/registros/recibo-l"+idRegistro,idRegistro);
  }
  public generarTiempoCompraMuestraL(idRegistro:any){
    return this.http.put(this.baseAnd+"/registros/compra-l/"+idRegistro,idRegistro);
  }
  public generarTiempoCompraMF(idRegistro:any){
    return this.http.put(this.baseAnd+"/registros/compra-f/"+idRegistro,idRegistro);
  }
}

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
  public agregarItemR(itemCode:any,cantidad:any,precio:any,id:any){
    return this.http.post(this.baseAnd+"/ordenes/agregarItemR/"+id+"?itemCode="+itemCode+"&precio="+precio+"&cantidad="+cantidad,id);
  }
  public agregarItemN(itemCode:any,cantidad:any,precio:any,id:any){
    return this.http.post(this.baseAnd+"/ordenes/agregarItemN/"+id+"?itemCode="+itemCode+"&precio="+precio+"&cantidad="+cantidad,id);
  }
  public crearItem(formItem:any){
    return this.http.post(this.baseAnd+"/items",formItem);
  }
}

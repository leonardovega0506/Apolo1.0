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
}

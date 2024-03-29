import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../utils/helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Constructor
  constructor(private http: HttpClient) { }

  //Uri de la API
  baseAuth: string = `${baseUrl}/auth`

  //Generamos el token 
  public loginToken(loginForm: any) {
    return this.http.post(this.baseAuth + "/login", loginForm);
  }

  //Establecemos el token en el LocalStorage
  public loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  //Cerramos sesion y eliminamos el token de LocalStorage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  //Obtenemos el token de LocalStorage
  public getToken() {
    return localStorage.getItem('token');
  }

  //Obtenemos el user de LoaclStorage
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    }
    else {
      this.logout();
      return null;
    }
  }

  //Obtenemos los roles del Usuario
  public getUserRoles() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  //Obtenemos el usuario ingresado
  public getCurrentUser() {
    return this.http.get(this.baseAuth + "/actual");
  }

  //Verificamos que el usuario este conectado
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    }
    else {
      return true;
    }
  }

  //Establecemos el user en el LocalStorage
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }




}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  proceedLogin(usercred: any) {
    return this.http.post('https://product-catalog-api.onrender.com/login', usercred)
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }
}

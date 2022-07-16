import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {LoginInterface} from "../../interfaces/auth/login-interface";
import {Observable, Subscription} from "rxjs";
import {map} from "rxjs/operators";
import {SellerUserInterface} from "../../interfaces/auth/seller-user-interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  sellerLogin(login: LoginInterface) {
    return this.http.post('/api/auth/seller/login', login)
  }

  sellerCheck():Observable<any>{
    return this.http.get('/api/auth/seller',{observe: 'response'})
  }

}

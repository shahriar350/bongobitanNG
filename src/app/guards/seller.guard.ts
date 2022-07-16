import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {AuthService} from "../services/auth/auth.service";
import {map} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {SellerUserInterface} from "../interfaces/auth/seller-user-interface";
import {response} from "express";
import {stat} from "fs";

@Injectable({
  providedIn: 'root'
})
export class SellerGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUserAccess()
  }


  checkUserAccess() {
    return this.authService.sellerCheck().pipe(map(response => {

      if (response.status === 200) {
        return true
      } else {
        this.router.navigate(['/auth/seller/login'])
        return false
      }
    }))
    // return false
  }

}

import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from './common/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,private readonly storeageService: StorageService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return this.storeageService.get("current_user").then(
       (value) => {
         if(value == null){
           this.router.navigateByUrl("/login");
           return false;
         }else{
           return true;
         }
       },
       () => {
        this.router.navigateByUrl("/login");
         return false;
       }
     );
     
  }
  
}

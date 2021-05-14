import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { user } from '../login/interface/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor {

  constructor(private readonly storage: StorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.storage.get("current_user")).pipe(
      switchMap(
        (user: user) => {
          if (user !== null) {
            const token = user.token;
            const headers = {
              'Authorization': `Bearer ${token}`,
            };
  
            req = req.clone({
              setHeaders: headers
            });
            
            
            return next.handle(req);
          }
        }
      )
    ) 
  }
}

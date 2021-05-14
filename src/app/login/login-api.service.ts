import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestService } from '../common/http-request.service';
import { user } from './interface/user';

@Injectable({
  providedIn: 'root'
})
export class LoginAPIServiceService {

  constructor(private readonly httpRequestService: HttpRequestService) { 

  }

  login(): Observable<user>{
    return this.httpRequestService.get("https://zztest.free.beeceptor.com/login");
  }
}

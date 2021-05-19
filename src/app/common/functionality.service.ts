import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {

  private functionalities : {};

  constructor(private readonly httpReqeust: HttpRequestService) { }

  init(): Promise<any> {
    return this.httpReqeust.get("https://run.mocky.io/v3/e1756337-ff28-494e-ae67-1aa2615d5dea").pipe(map((data) => {
      this.functionalities = data.data;
    })).toPromise();
  }

  isFunctionEnabled(key: string): boolean{
    return this.functionalities[key];
  }
}

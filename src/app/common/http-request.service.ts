import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private httpClient: HttpClient) { }

  get(url: string): Observable<any>{
    return this.httpClient.get(url);
  }

  post(url: string, body: any){
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  
    return this.httpClient.post(url,body, {'headers': headers});
  }

  
}

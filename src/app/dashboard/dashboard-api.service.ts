import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestService } from '../common/http-request.service';
import { DashboardData } from './interface/dashboard-data';

@Injectable({
  providedIn: 'root'
})
export class DashboardAPIService {

  constructor(private readonly httpRequestService: HttpRequestService) { }

  loadData(): Observable<DashboardData>{
    //return this.httpRequestService.get("https://zztest.free.beeceptor.com/dashboard/loaddata");
    return this.httpRequestService.get("https://run.mocky.io/v3/c0f8faad-2cb6-4139-ab29-59460a2874ea");
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FunctionalityKeys } from '../common/function/function.constant';
import { DashboardAPIService } from './dashboard-api.service';
import { BrokerageAccount, OutstandingExceptions, OutstandingProfileActions } from './interface/dashboard-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {

  private subscription = new Subscription();

  public outstandingProfileActions: OutstandingProfileActions[];

  public outstandingExceptions: OutstandingExceptions[];

  public brokerageAccount: BrokerageAccount[];
  
  readonly FunctionalityKeys = FunctionalityKeys;

  constructor(private readonly apiService : DashboardAPIService) {
    
   }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
   this.subscription.add(this.apiService.loadData().subscribe(
      (data) => {
        this.outstandingExceptions = data.OutstandingExceptions;
        this.outstandingProfileActions = data.OutstandingProfileActions;
        this.brokerageAccount = data.BrokerageAccount;
      }
    )
   )
  }

}

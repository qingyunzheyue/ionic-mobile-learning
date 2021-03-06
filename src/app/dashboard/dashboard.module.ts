import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { StatusTagComponent } from './status-tag/status-tag.component';
import { MyCommonModule } from '../common/mycommon.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    MyCommonModule
  ],
  declarations: [DashboardPage,StatusTagComponent]

})
export class DashboardPageModule {}

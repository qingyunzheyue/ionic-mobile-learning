import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpIntercepterService } from './common/http-intercepter.service';
import { FunctionalityService } from './common/functionality.service';
import { HttpRequestService } from './common/http-request.service';
import { CommonModule } from '@angular/common';

export function initFunctionality(functionalities: FunctionalityService){
  return () => functionalities.init();
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule, IonicStorageModule.forRoot(),HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },{provide: APP_INITIALIZER, useFactory: initFunctionality, deps:[FunctionalityService],multi: true},{ provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterService, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}

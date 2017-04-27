// import 'zone.js';
// import 'reflect-metadata';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { LoginPopupComponent } from './login_popup/login.popup.com';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BusinessComponent } from './business/business.component';
import { FastServiceComponent } from './fast_service/fast.service.component';
import { OtherServiceComponent } from './other_service/other.service.component';

import { FlowComponent } from './flow_center/flow.component';
import { QueryComponent } from './query_com/query.component';
import { OtherComponent } from './other_com/other.component';

import { AppRoutingModule }  from './app-routing.module';
import { WebWorker } from './flow_center/web.work';
import { CookieService } from './service/cookie.service';
import { DataService } from './service/data.service'; 



@NgModule({
	imports: [ 
  		BrowserModule,
  		FormsModule,
      HttpModule,
      AppRoutingModule
	],
  declarations: [ 
  		AppComponent,
      LoginPopupComponent,
      NavbarComponent,
      TopbarComponent,
      BusinessComponent,
      FastServiceComponent,
      OtherServiceComponent,
      FlowComponent,
      QueryComponent,
      OtherComponent
	],
  providers: [
      WebWorker,
      CookieService,
      DataService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

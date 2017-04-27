import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusinessComponent } from './business/business.component';
import { FlowComponent } from './flow_center/flow.component';
import { QueryComponent } from './query_com/query.component';
import { OtherComponent } from './other_com/other.component';

const routes: Routes = [
  { path: '', redirectTo: '/business', pathMatch: 'full' },
  { path: 'flowCenter',  component: FlowComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'queryCenter',     component: QueryComponent },
  { path: 'other',     component: OtherComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

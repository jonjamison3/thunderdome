import { NgModule }            from '@angular/core';
import { ApizComponent }       from './apiz.component';
import { ApizRoutingModule }             from './apiz-routing.module';

@NgModule({
  imports: [  ApizRoutingModule ],
  declarations: [
    ApizComponent,
  ]
})
export class ApizModule { }
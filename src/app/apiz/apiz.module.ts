import { NgModule }            from '@angular/core';
import { ApizComponent }       from './apiz.component';
import { routing }             from './apiz.routing';

@NgModule({
  imports: [  routing ],
  declarations: [
    ApizComponent,
  ]
})
export class ApizModule { }
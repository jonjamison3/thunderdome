import { NgModule }            from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ApizComponent }       from './apiz.component';
import { ApizRoutingModule }             from './apiz-routing.module';
import {ApizLanderComponent} from './apiz-lander/apiz-lander.component'; 

@NgModule({
  imports: [  
    CommonModule, 
    ApizRoutingModule 
    ],
  declarations: [
    ApizComponent,
    ApizLanderComponent
  ]
})
export class ApizModule { }
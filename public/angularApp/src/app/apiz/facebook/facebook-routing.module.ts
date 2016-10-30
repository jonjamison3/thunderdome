import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { FacebookComponent }      from './facebook.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'facebook',
        component: FacebookComponent,
      }
    ])
  ], 
  exports: [
    RouterModule
  ]
})
export class FacebookRoutingModule {}
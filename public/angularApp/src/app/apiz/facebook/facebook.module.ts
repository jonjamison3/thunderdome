import { NgModule }            from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FacebookRoutingModule } from './facebook-routing.module';
import { FacebookComponent }      from './facebook.component';
import {UserSearchComponent} from './user-search/user-search.component';

@NgModule({
  imports: [  CommonModule, FacebookRoutingModule ],
  declarations: [
    FacebookComponent,
    UserSearchComponent
  ]
})
export class FacebookModule { }
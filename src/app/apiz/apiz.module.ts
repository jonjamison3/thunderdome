import { NgModule }            from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApizComponent }       from './apiz.component';
import { ApizRoutingModule } from './apiz-routing.module';
import { UserSearchComponent } from './facebook/user-search/user-search.component';
import { UserSearchService } from './facebook/user-search/user-search.service';
import { ApiLanderComponent }       from './api-lander/api-lander.component';
import { FacebookComponent }      from './facebook/facebook.component';

@NgModule({
  imports: [
    ApizRoutingModule,
    FormsModule
  ],
  declarations: [
    ApizComponent,
    ApiLanderComponent,
    FacebookComponent,
    UserSearchComponent
  ],
  providers: [
    UserSearchService
  ]
})
export class ApizModule { }

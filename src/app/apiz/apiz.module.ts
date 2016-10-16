import { NgModule }            from '@angular/core';
import { ApizComponent }       from './apiz.component';
import {ApizRoutingModule} from './apiz-routing.module';
import { FixedSearchComponent } from './spotify/fixed-search/fixed-search.component';
import { DynamicSearchComponent } from './spotify/dynamic-search/dynamic-search.component';
import { UserSearchComponent } from './facebook/user-search/user-search.component';
import { UserSearchService } from './facebook/user-search/user-search.service';
import {SpotifyModule} from './spotify/spotify.module';

import { FacebookComponent }      from './facebook/facebook.component';
@NgModule({
  imports: [
    ApizRoutingModule,
    SpotifyModule
  ],
  declarations: [
    ApizComponent,
    FacebookComponent,
  ],
  providers: [
    UserSearchService
  ]
})
export class ApizModule { }

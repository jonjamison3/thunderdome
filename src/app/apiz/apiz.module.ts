import { NgModule }            from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ApizRoutingModule }             from './apiz.routing';
import { ApizComponent }       from './apiz.component';
import { FormsModule } from '@angular/forms';
import { FacebookComponent } from './facebook/facebook.component';
import { UserSearchComponent } from './facebook/user-search/user-search.component';
import { UserSearchService } from './facebook/user-search/user-search.service';
import { SpotifyService } from './spotify/spotify.service';
import { SpotifyComponent } from './spotify/spotify.component';
import {
      DataTableModule,
      DataGridModule
     } from 'primeng/primeng';
import { FixedSearchComponent } from './spotify/fixed-search/fixed-search.component';
import { DynamicSearchComponent } from './spotify/dynamic-search/dynamic-search.component';

@NgModule({
  imports: [
     ApizRoutingModule,
     CommonModule,
     FormsModule,
     DataGridModule,
     DataTableModule
  ],
  declarations: [
    ApizComponent,
    FacebookComponent,
    UserSearchComponent,
    SpotifyComponent,
    FixedSearchComponent,
    DynamicSearchComponent
  ],
  providers: [
    UserSearchService,
    SpotifyService
    ]
})
export class ApizModule {}
import { NgModule }            from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpotifyComponent }       from './spotify.component';
import { FixedSearchComponent }       from './fixed-search/fixed-search.component';
import { DynamicSearchComponent }       from './dynamic-search/dynamic-search.component';
import { SpotifyService }       from './spotify.service';
import { SpotifyRoutingModule } from './spotify-routing.module';
import {
  DataTableModule,
  SharedModule,
  InputTextModule
} from 'primeng/primeng';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SpotifyRoutingModule,
    DataTableModule,
    InputTextModule,
    SharedModule,
  ],
  declarations: [
    SpotifyComponent,
    DynamicSearchComponent,
    FixedSearchComponent
  ],
  providers: [
    SpotifyService
  ]
})
export class SpotifyModule { }

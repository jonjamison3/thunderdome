import { NgModule }            from '@angular/core';
import { SpotifyComponent }       from './spotify.component';
import { FixedSearchComponent }       from './fixed-search/fixed-search.component';
import { DynamicSearchComponent }       from './dynamic-search/dynamic-search.component';
import { SpotifyService }       from './spotify.service';
import {DataTableModule, SharedModule, InputTextModule} from 'primeng/primeng';
@NgModule({
  imports: [ DataTableModule, InputTextModule, SharedModule ],
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

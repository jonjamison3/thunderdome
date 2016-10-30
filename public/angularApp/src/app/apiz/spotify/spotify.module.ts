import { NgModule }            from '@angular/core';
import { CommonModule }   from '@angular/common';
import { SpotifyRoutingModule } from './spotify-routing.module';
import { SpotifyComponent }      from './spotify.component';
import { FixedSearchComponent }      from './fixed-search/fixed-search.component';
import { DynamicSearchComponent }      from './dynamic-search/dynamic-search.component';

@NgModule({
  imports: [  CommonModule, SpotifyRoutingModule ],
  declarations: [
    SpotifyComponent,
    DynamicSearchComponent,
    FixedSearchComponent
  ]
})
export class SpotifyModule { }
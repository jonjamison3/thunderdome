import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpotifyComponent }      from './spotify.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
            path: 'spotify',
            component: SpotifyComponent
      }
    ])
  ], 
  exports: [
    RouterModule
  ]
})
export class SpotifyRoutingModule {}
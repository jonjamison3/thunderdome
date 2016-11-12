import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ApizComponent }       from './apiz.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { FacebookComponent } from './facebook/facebook.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'apiz',
        children: [
          { path: '', component: ApizComponent },
          { path: 'about', component: ApizComponent },
          { path: 'spotify', component: SpotifyComponent },
          { path: 'facebook', component: FacebookComponent }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class ApizRoutingModule {}

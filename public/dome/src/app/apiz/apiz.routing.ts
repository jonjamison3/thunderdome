import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ApizComponent }       from './apiz.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { FacebookComponent } from './facebook/facebook.component';
import { WikiComponent } from './wiki/wiki.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'apiz',
        component: ApizComponent,
        children: [
          { path: '', component: SpotifyComponent },
          { path: 'spotify', component: SpotifyComponent },
          { path: 'facebook', component: FacebookComponent },
          { path: 'wiki', component: WikiComponent }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class ApizRoutingModule {}

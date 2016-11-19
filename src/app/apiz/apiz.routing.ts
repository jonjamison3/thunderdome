import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ApizComponent }       from './apiz.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { FacebookComponent } from './facebook/facebook.component';
import { SnapchatComponent } from './snapchat/snapchat.component';


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
          { path: 'snapchat', component: SnapchatComponent }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class ApizRoutingModule {}

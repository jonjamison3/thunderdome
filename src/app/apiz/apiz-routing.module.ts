import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ApizComponent }       from './apiz.component';
import { FacebookComponent }      from './facebook/facebook.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        children: [
          { path: '',    component: ApizComponent },
          //{ path: 'spotify', component: SpotifyComponent },
          { path: 'spotify', loadChildren: 'app/apiz/spotify/spotify.module#SpotifyModule' },
          { path: 'facebook', component: FacebookComponent }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ApizRoutingModule {}

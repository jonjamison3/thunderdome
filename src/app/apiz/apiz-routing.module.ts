import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ApizComponent }       from './apiz.component';
import { ApiLanderComponent }       from './api-lander/api-lander.component';
import { FacebookComponent }      from './facebook/facebook.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ApizComponent,
        children: [
          { path: '', component: ApiLanderComponent },
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

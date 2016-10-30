import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApizComponent }      from './apiz.component';
import {ApizLanderComponent} from './apiz-lander/apiz-lander.component'; 
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'apiz',
        component: ApizComponent,
        children: [
          {
            path: '/',
            component: ApizLanderComponent
          },
          {
            path: 'spotify',
            loadChildren: 'app/apiz/spotify/spotify.module#SpotifyModule'
          },
          {
            path: 'facebook',
            loadChildren: 'app/apiz/facebook/facebook.module#FacebookModule'
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
})
export class ApizRoutingModule {}
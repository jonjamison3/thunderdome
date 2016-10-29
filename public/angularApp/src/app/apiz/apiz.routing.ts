import { ModuleWithProviders } from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { ApizComponent }       from './apiz.component';
import {SpotifyComponent} from './spotify/spotify.component';
import {FacebookComponent} from './facebook/facebook.component';

const routes: Routes = [
  { path: '',
    component: ApizComponent,
    children: [
      { path: '',    component: ApizComponent },
      { path: 'spotify', component: SpotifyComponent },
      { path: 'facebook', component: FacebookComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
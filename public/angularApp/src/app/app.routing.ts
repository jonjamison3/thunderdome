import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApizComponent }      from './apiz/apiz.component';
import { AboutComponent }      from './about/about.component';
import { LandingComponent }      from './landing/landing.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'home',
    component: LandingComponent
  },
  {
    path: 'apiz',
    component: ApizComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
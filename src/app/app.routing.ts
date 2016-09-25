import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApizComponent }      from './apiz/apiz.component';
import { AboutComponent }      from './about/about.component';
import { DashboardComponent }      from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'home',
    component: DashboardComponent
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
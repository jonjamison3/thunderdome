import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent }      from './app.component';
import { AboutComponent }      from './about/about.component';
import { LandingComponent }      from './landing/landing.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
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
        loadChildren: 'app/apiz/apiz.module#ApizModule'
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ], 
  exports: [
    RouterModule
  ],
  declarations: [
  ],
  bootstrap: [ AppComponent ]

})
export class AppRoutingModule {}
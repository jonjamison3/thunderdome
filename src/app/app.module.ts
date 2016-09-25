import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { ApizComponent } from './apiz/apiz.component';
import { AboutComponent } from './about/about.component';
import {TabMenuModule,
        InputTextModule,
        MenuModule
      } from 'primeng/primeng';
import { NavComponent } from './shared/nav/nav.component';
import { TitleComponent } from './title/title.component';
import { LandingComponent } from './landing/landing.component';
import {SpotifyService} from './apiz/spotify.service';
@NgModule({
  declarations: [
    AppComponent,
    ApizComponent,
    AboutComponent,
    NavComponent,
    TitleComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    TabMenuModule,
    MenuModule,
    InputTextModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

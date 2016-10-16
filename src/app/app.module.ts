
import './rxjs-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ApizComponent } from './apiz/apiz.component';
import { AboutComponent } from './about/about.component';
import {
        TabMenuModule,
        SharedModule,
        MenuModule
      } from 'primeng/primeng';
import {ApizModule} from './apiz/apiz.module';
import {SpotifyModule} from './apiz/spotify/spotify.module';
import { NavComponent } from './shared/nav/nav.component';
import { TitleComponent } from './title/title.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavComponent,
    TitleComponent,
    LandingComponent,
    HeaderComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SpotifyModule,
    TabMenuModule,
    MenuModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

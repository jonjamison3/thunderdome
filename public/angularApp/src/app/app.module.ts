
import './rxjs-extensions';
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
        DataTableModule,
        SharedModule,
        MenuModule
      } from 'primeng/primeng';
import { NavComponent } from './shared/nav/nav.component';
import { TitleComponent } from './title/title.component';
import { LandingComponent } from './landing/landing.component';
import {SpotifyService} from './apiz/spotify/spotify.service';
import { SpotifyComponent } from './apiz/spotify/spotify.component';
import { HeaderComponent } from './shared/header/header.component';
import { FixedSearchComponent } from './apiz/spotify/fixed-search/fixed-search.component';
import { DynamicSearchComponent } from './apiz/spotify/dynamic-search/dynamic-search.component';
import { UserSearchComponent } from './apiz/facebook/user-search/user-search.component';
import { UserSearchService } from './apiz/facebook/user-search/user-search.service';
import {ApizModule} from './apiz/apiz.module';

@NgModule({
  declarations: [
    AppComponent,
    ApizComponent,
    AboutComponent,
    NavComponent,
    TitleComponent,
    LandingComponent,
    SpotifyComponent,
    HeaderComponent,
    FixedSearchComponent,
    DynamicSearchComponent,
    UserSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    TabMenuModule,
    MenuModule,
    InputTextModule,
    DataTableModule,
    SharedModule,
    ApizModule
  ],
  providers: [SpotifyService, UserSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }


import './rxjs-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ApizComponent } from './apiz/apiz.component';
import { AboutComponent } from './about/about.component';
import {TabMenuModule,
        SharedModule,
        MenuModule
      } from 'primeng/primeng';
import { NavComponent } from './shared/nav/nav.component';
import { TitleComponent } from './title/title.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './shared/header/header.component';
import {ApizModule} from './apiz/apiz.module';

@NgModule({
  declarations: [
    AppComponent,
  //  ApizComponent,
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
    HttpModule,
    AppRoutingModule,
    TabMenuModule,
    MenuModule,
    SharedModule,
    ApizModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

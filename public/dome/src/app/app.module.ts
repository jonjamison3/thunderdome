

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {
        TabMenuModule,
        SharedModule,
        MenuModule
      } from 'primeng/primeng'; 
import { ApizModule } from './apiz/apiz.module';
import { NavModule } from './shared/modules/nav/nav.module';
import { TitleComponent } from './title/title.component';
import { LandingComponent } from './landing/landing.component'; 
import { HeaderModule } from './shared/modules/header/header.module';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TitleComponent,
    LandingComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    ApizModule,
    HttpModule,
    AppRoutingModule,
    TabMenuModule,
    MenuModule,
    SharedModule,
    HeaderModule,
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

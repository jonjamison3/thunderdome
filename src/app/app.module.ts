import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { ApizComponent } from './apiz/apiz.component';
import { AboutComponent } from './about/about.component';
import {TabMenuModule, MenuModule} from 'primeng/primeng';
import { NavComponent } from './shared/nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TitleComponent } from './title/title.component';
@NgModule({
  declarations: [
    AppComponent,
    ApizComponent,
    AboutComponent,
    NavComponent,
    DashboardComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    TabMenuModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

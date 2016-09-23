import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { ApizComponent } from './apiz/apiz.component';
import { AboutComponent } from './about/about.component';
import {TabMenuModule, MenuItem} from 'primeng/primeng';
@NgModule({
  declarations: [
    AppComponent,
    ApizComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from "./nav.component";
import { SharedModule } from 'primeng/primeng'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [ NavComponent ],
  exports: [NavComponent]
})
export class NavModule { }

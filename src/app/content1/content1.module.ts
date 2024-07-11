import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content1Component } from './content1.component';
import { Content1RoutingModule } from './content1-routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [Content1Component],
  imports: [
    CommonModule,
    Content1RoutingModule,
    FormsModule,
  ]
})
export class Content1Module { }

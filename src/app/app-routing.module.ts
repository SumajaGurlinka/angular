// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Content2Component } from './content2/content2.component';
const routes: Routes = [
  { path: '', redirectTo: '/content1', pathMatch: 'full' },
  { path: 'content1', loadChildren: './content1/content1.module#Content1Module' },
  { path: 'content2', component: Content2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

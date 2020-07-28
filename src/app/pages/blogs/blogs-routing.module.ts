import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { Routes, RouterModule } from '@angular/router';


const routes : Routes = [{path:'', component: BlogsComponent}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class BlogsRoutingModule { }

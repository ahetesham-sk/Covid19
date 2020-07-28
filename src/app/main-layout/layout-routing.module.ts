import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('../pages/dashboard/dashboard.module').then((m) => m.DashboardModule)},
      { path: 'employee', loadChildren: () => import('../pages/employee/employee.module').then((m) => m.EmployeeModule)},
      {path : 'blogs', loadChildren:() => import('../pages/blogs/blogs.module').then((m) => m.BlogsModule)}
    ]
  },
  { path: '**', redirectTo:'/login', pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

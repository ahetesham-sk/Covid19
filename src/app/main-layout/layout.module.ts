import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  bootstrap:[LayoutComponent]
})
export class LayoutModule { }

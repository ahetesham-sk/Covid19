import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
var body = $('body');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleSideNav(){
    body.toggleClass('sidebar-icon-only');
  }

  logout(){
    this.router.navigate(['/login']);
  }

}

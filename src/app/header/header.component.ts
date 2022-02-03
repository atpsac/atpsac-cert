import { Component, OnInit } from '@angular/core';
import { ToggleMenuService } from '../services/menu/toggle-menu.service';
import { LoginService } from '../services/security/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: string

  constructor() { }

  ngOnInit(): void {


  }

  toggleMenu() {
  }

  logOut() {
  }
}

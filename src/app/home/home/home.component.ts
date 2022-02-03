import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoginService } from 'src/app/services/security/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  today = new Date()
  constructor(protected loginService: LoginService,
    private docTitleService: Title) {}

  ngOnInit(): void {
    this.docTitleService.setTitle('Home - ' + environment.appTitle)
  }

}

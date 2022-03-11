import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/security/login.service'
import { UserLogin } from 'src/app/entities/security/user-login'
import { SessionStorageService } from 'src/app/services/session-storage.service'
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new UserLogin()
  invalidUser = false
  disableButton = false;
  returnUrl: string

  constructor(protected loginService: LoginService, 
    protected sessionStorage: SessionStorageService, 
    private route: ActivatedRoute,
    private router: Router,
    private docTitleService: Title) { }


  ngOnInit(): void {
    this.docTitleService.setTitle('Iniciar Sesión - ' + environment.appTitle)
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submit() {
    this.disableButton = true
    this.loginService.login(this.login).subscribe(e => {
    console.log(e)
      this.sessionStorage.setSession(e)
      this.router.navigate([this.returnUrl]);
      this.disableButton = false
    }, (e: HttpErrorResponse) => {
      this.invalidUser = true
      this.disableButton = false
    })


  }

}

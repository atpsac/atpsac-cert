import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SessionStorageService } from '../session-storage.service';
import { ResponseLogin } from 'src/app/entities/security/response-login';
import { catchError } from 'rxjs/operators';
import { LoginService } from '../security/login.service';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenInterceptor implements HttpInterceptor {

  constructor(protected loginService: LoginService) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    let session: ResponseLogin = this.loginService.getLogin()

    if (session) {
      request = request.clone({
        setHeaders: {
          authorization: `Bearer ${ session.token }`
        }
      });
    } 
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      console.log(JSON.stringify(error));
      if (error.status == 403 || error.status == 401) {
        this.loginService.logout()
      }

      return throwError(error.message)
    }))

  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';
import { User } from '../../entities/security/user';
// import { PageRequest, Page } from 'src/app/utils/paginator/page-utils';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected client: HttpClient) { }
  
  // createUser(entity: User): Observable<User> {
  //   return this.client.post<User>(`${environment.baseUrl}/security/users`, entity)
  // }

  // getById(user: User): Observable<User> {
  
  //   return this.client.get<User>(environment.baseUrl + '/security/users/' + user.id)
  // }

  // editUser(user: User): Observable<User> {
  
  //   return this.client.put<User>(environment.baseUrl + '/security/users/' + user.id, user);
  // }

  // getAll(request: PageRequest<User>): Observable<Page<User>> {
  
  //   const params = new HttpParams().set('json', JSON.stringify(request));
    
  //   return this.client.get<Page<User>>(environment.baseUrl + '/security/users',{params})
    
  // }

  // delete(user: User): Observable<User> {
  //   return this.client.delete<User>(environment.baseUrl + '/security/users/' + user.id)
  // }

  // public export(filter: PageRequest<User>): Observable<any> {       
  //   return this.client.post(`${environment.baseUrl}/security/export/user`, filter)
  // }



}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PageRequest } from '../../../utils/paginator/page-utils';
import { User } from '../../../entities/security/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  constructor(protected client: HttpClient) { }


  getAll(): Observable<any> {
    return this.client.get('assets/producer.json');
  }

}

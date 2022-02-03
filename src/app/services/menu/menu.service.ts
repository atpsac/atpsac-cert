import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/entities/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(protected client: HttpClient) { }


  
}


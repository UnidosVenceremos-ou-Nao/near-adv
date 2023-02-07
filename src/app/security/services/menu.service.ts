import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private baseUrl = environment.url;

  constructor(public http: HttpClient) {}

  buscarAdmin() {
    return this.http.get(`${this.baseUrl}/menu/admin`);
  }

  cadastrar(menu: Menu) {
    return this.http.post(`${this.baseUrl}/menu`, menu);
  }
}

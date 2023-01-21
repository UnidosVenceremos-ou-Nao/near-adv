import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  private token = new BehaviorSubject<string>('');
  constructor() {}

  getToken() {
    this.token.subscribe((x) => {
      return x;
    });
  }

  setToken(valor: any) {
    this.token.next(valor);
  }

  clearLocalStorage() {
    window.localStorage.clear();
  }
}

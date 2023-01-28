import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenericService<T> {
  constructor(protected http: HttpClient) {}

  get() {}
}

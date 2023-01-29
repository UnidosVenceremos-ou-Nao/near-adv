import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CrudOperations<T, ID> {
  save(t: T): Observable<T>;
  update(id: ID, t: T): Observable<T>;
  findOne(id: ID): Observable<T>;
  findAll(): Observable<T[]>;
  delete(id: ID): Observable<any>;
}
@Injectable({
  providedIn: 'root',
})
export abstract class GenericService<T, ID> implements CrudOperations<T, ID> {
  url: string = '';

  constructor(protected _http: HttpClient, protected _base: string) {}

  save(t: T): Observable<T> {
    return this._http.post<T>(`${this.url}`, t);
  }

  update(id: ID, obj: T): Observable<T> {
    return this._http.put<T>(`${this.url}/${id}`, obj);
  }

  findOne(id: ID): Observable<T> {
    return this._http.get<T>(`${this.url}/${id}`);
  }

  findAll(): Observable<T[]> {
    return this._http.get<T[]>(`${this.url}`);
  }

  delete(id: ID): Observable<T> {
    return this._http.delete<T>(`${this.url}/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { GenericService } from './../../../../shared/sistema/service/generic.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}
}

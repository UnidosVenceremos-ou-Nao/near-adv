import { environment } from './../../../../../environments/environment';
import { Usuario } from './../../../../security/interfaces/firebaseuser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/shared/sistema/service/generic.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService extends GenericService<Usuario, number> {
  constructor(protected http: HttpClient) {
    super(http, `${environment.url}/bookmarks`);
  }
}

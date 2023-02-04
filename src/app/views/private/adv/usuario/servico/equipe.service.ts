import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/shared/sistema/service/generic.service';
import { environment } from '../../../../../../environments/environment';
import { Usuario } from '../../../../../security/interfaces/firebaseuser';

@Injectable({
  providedIn: 'root',
})
export class EquipeService extends GenericService<Usuario, number> {
  constructor(protected http: HttpClient) {
    super(http, `${environment.url}/bookmarks`);
  }
}

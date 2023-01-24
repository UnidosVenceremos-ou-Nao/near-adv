import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Usuario } from '../interfaces/firebaseuser';
import { Perfil } from '../interfaces/perfil';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  public loggedUser = new Subject<any>();
  constructor() {}

  USUARIO_LOCAL_HISTORY = 'USUARIO';
  TOKEN_LOCAL_HISTORY = 'TOKEN';

  public setUsuario(usuario: Usuario) {
    localStorage.setItem(this.USUARIO_LOCAL_HISTORY, JSON.stringify(usuario));
  }

  public setToken(bearer: any) {
    localStorage.setItem(this.TOKEN_LOCAL_HISTORY, bearer);
  }

  public setIdUsuario(id: Number) {
    let usuario = this.getUsuario();
    localStorage.removeItem(this.USUARIO_LOCAL_HISTORY);
    this.setUsuario(usuario);
  }

  getUsuario(): Usuario {
    let usuarioJson: any = localStorage.getItem(this.USUARIO_LOCAL_HISTORY);
    let usuario: Usuario = JSON.parse(usuarioJson);
    return usuario;
  }

  getUsuarioId(): Number {
    let usuarioJson: any = localStorage.getItem(this.USUARIO_LOCAL_HISTORY);
    let usuario: Usuario = JSON.parse(usuarioJson);
    return usuario.id;
  }

  getUsuarioNome(): string {
    let usuarioJson: any = localStorage.getItem(this.USUARIO_LOCAL_HISTORY);
    let usuario: Usuario = JSON.parse(usuarioJson);
    return usuario.nome;
  }

  getUsuarioPerfil(): Perfil {
    let usuarioJson: any = localStorage.getItem(this.USUARIO_LOCAL_HISTORY);
    let usuario: Usuario = JSON.parse(usuarioJson);
    return (<any>Perfil)[usuario.perfil];
  }

  getToken(): string {
    let token: any = localStorage.getItem(this.TOKEN_LOCAL_HISTORY);
    return token;
  }

  getFirebaseUser() {
    return JSON.parse(localStorage.getItem('user')!);
  }

  removeToken() {
    localStorage.removeItem(this.TOKEN_LOCAL_HISTORY);
  }
}

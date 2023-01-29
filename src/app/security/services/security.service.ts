import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Usuario } from '../interfaces/firebaseuser';
import { Perfil } from '../interfaces/perfil';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  public loggedUser = new BehaviorSubject<string>('');
  public token = new BehaviorSubject<string>('');

  constructor() {}

  USUARIO_LOCAL_HISTORY = 'USUARIO';
  TOKEN_LOCAL_HISTORY = 'TOKEN';

  public setUsuario(usuario: Usuario) {
    localStorage.setItem(this.USUARIO_LOCAL_HISTORY, JSON.stringify(usuario));
  }

  public setToken(bearer: any) {
    debugger;
    this.token.next(bearer);
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

  getToken(): Observable<string> {
    return this.token.asObservable();
  }

  getFirebaseUser() {
    return JSON.parse(localStorage.getItem('user')!);
  }

  removeToken() {
    this.token.next('');
  }
}

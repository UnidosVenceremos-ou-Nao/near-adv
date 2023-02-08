import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbNavChangeEvent, NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';
import { SecurityService } from '../services/security.service';
import { NovoUsuario, Usuario } from './../interfaces/firebaseuser';
import { LoginService } from './../services/login.service';
@Component({
  selector: 'sdv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  visualizarSenha: boolean = false;
  textoBotao: string = 'Acessar';
  exibirBotaoCancelar: boolean = false;
  usuario: Usuario = new Usuario();
  novoUsuario: NovoUsuario = new NovoUsuario();

  constructor(
    private router: Router,
    protected config: NgbNavConfig,
    private securityService: SecurityService,
    private loginService: LoginService
  ) {
    config.destroyOnHide = false;
    config.roles = false;
  }
  ngOnInit() {
    localStorage.clear();
  }

  acessar() {
    this.loginService.SignIn(this.usuario);
  }

  criarUsuario() {
    this.loginService.signUp(this.novoUsuario);
  }

  changeCampoSenha(event: any) {
    this.visualizarSenha = event.target.checked;
  }

  onNavChange(changeEvent: NgbNavChangeEvent) {
    this.usuario = new Usuario();
    this.novoUsuario = new NovoUsuario();

    this.textoBotao = 'Acessar';
    this.exibirBotaoCancelar = false;

    if (changeEvent.nextId === 2) {
      this.exibirBotaoCancelar = true;
      this.textoBotao = 'Confirmar';
    }
  }

  cancelar() {
    this.textoBotao = 'Acessar';
    this.exibirBotaoCancelar = false;
  }

  confirmar(nav: any) {
    if (nav.activeId === 1) {
      this.acessar();
    } else if (nav.activeId === 2) {
      debugger;
      this.criarUsuario();
    }
  }
}

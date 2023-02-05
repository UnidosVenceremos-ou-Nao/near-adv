import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbNavChangeEvent, NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';
import { SecurityService } from '../services/security.service';
import { LoginService } from './../services/login.service';
@Component({
  selector: 'sdv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formulario = new FormGroup({
    email: new FormControl(),
    senha: new FormControl(),
  });
  visualizarSenha: boolean = false;
  textoBotao: string = 'Acessar';
  exibirBotaoCancelar: boolean = false;

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
    let email = this.formulario.controls['email'].value;
    let password = this.formulario.controls['senha'].value;

    this.loginService.SignIn(email, password);

    // let usuario: NovoUsuario = new NovoUsuario();

    // usuario.email = 'paulomesquita0@gmail.com';
    // usuario.senha = '123456';
    // usuario.celular = '123456';

    // this.loginService.signUp(usuario);
  }

  changeCampoSenha(event: any) {
    this.visualizarSenha = event.target.checked;
  }

  onNavChange(changeEvent: NgbNavChangeEvent) {
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
}

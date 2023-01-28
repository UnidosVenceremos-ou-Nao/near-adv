import { NovoUsuario } from './../interfaces/firebaseuser';
import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from '../services/security.service';
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

  constructor(
    private router: Router,
    private securityService: SecurityService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    localStorage.clear();
  }

  acessar() {
    // let email = this.formulario.controls['email'].value;
    // let password = this.formulario.controls['senha'].value;

    // this.loginService.SignIn(email, password);

    let usuario: NovoUsuario = new NovoUsuario();

    usuario.email = 'paulomesquita0@gmail.com';
    usuario.senha = '123456';
    usuario.celular = '123456';

    this.loginService.signUp(usuario);
  }
}

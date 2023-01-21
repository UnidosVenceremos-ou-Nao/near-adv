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
    usuario: new FormControl(),
    senha: new FormControl(),
  });

  constructor(
    private router: Router,
    private securityService: SecurityService,
    private loginService: LoginService
  ) {}

  ngOnInit() {}

  acessar() {
    localStorage.clear();

    let email = this.formulario.controls['usuario'].value;
    let password = this.formulario.controls['senha'].value;

    this.loginService.SignIn(email, password);
  }
}
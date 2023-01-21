import { SecurityService } from './../services/security.service';
import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'sdv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formulario = new FormGroup({
    usuario: new FormControl(''),
    senha: new FormControl(''),
  });

  constructor(
    private router: Router,
    private securityService: SecurityService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.securityService.clearLocalStorage();
  }

  acessar() {
    if (!this.formulario.valid) {
      console.log('ERRO');
      return false;
    }
    this.securityService.setToken('TESTE');

    setTimeout(() => {
      return this.loginService.acessar();
    }, 500);
    return true;
  }
}

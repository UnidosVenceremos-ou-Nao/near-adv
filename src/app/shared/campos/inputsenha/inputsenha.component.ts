import { Router } from '@angular/router';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'near-senha',
  templateUrl: './inputsenha.component.html',
  styleUrls: ['./inputsenha.component.scss'],
})
export class InputSenhaComponent {
  @Input() nome: string = '';
  @Input() valorInicial: any = '';
  @Input() tipo: any = 'password';
  @Input() desabilitar: any = false;
  @Output() valor = new EventEmitter();

  visualizarSenha: boolean = false;
  tituloClaro: any = false;

  onChange(item: any) {
    this.valor.emit(item.target.value);
  }
  verSenha(event: any) {
    this.visualizarSenha = event.target.checked;
  }
  constructor(route: Router) {
    if (route.routerState.snapshot.url.includes('login')) {
      this.tituloClaro = true;
    }
  }
}

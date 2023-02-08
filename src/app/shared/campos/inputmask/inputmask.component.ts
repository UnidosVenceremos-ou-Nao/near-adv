import { Router } from '@angular/router';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'near-mask',
  templateUrl: './inputmask.component.html',
  styleUrls: ['./inputmask.component.scss'],
})
export class InputMaskComponent {
  @Input('nome') nome: string = '';
  @Input('valorInicial') valorInicial: any = '';
  @Input('identificador') identificador: string = '';
  @Input('desabilitar') desabilitar: any = false;
  @Input('mascara') mascara?: string = '';
  tituloClaro: boolean = false;

  @Output() valor = new EventEmitter();

  onChange(item: any) {
    this.valor.emit(item.target.value);
  }

  constructor(route: Router) {
    if (route.routerState.snapshot.url.includes('login')) {
      this.tituloClaro = true;
    }
  }
}

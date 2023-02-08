import { Router } from '@angular/router';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'near-text',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.scss'],
})
export class InputTextComponent {
  @Input() nome: string = '';
  @Input() valorInicial: any = '';
  @Input() identificador: string = '';
  @Input() desabilitar: any = false;

  @Output() valor = new EventEmitter();

  tituloClaro: boolean = false;

  onChange(item: any) {
    this.valor.emit(item.target.value);
  }

  constructor(route: Router) {
    if (route.routerState.snapshot.url.includes('login')) {
      this.tituloClaro = true;
    }
  }
}

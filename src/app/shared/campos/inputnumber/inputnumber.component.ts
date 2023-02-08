import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'near-number',
  templateUrl: './inputnumber.component.html',
  styleUrls: ['./inputnumber.component.scss'],
})
export class InputNumberComponent {
  @Input() nome: string = '';
  @Input() valorInicial: any;
  @Input() desabilitar: any = false;

  // padrão: 100
  @Input() tamanho: number = 100;

  @Output() valor = new EventEmitter();

  onChange(valor: any) {
    if (String(valor.target.value).length > this.tamanho) {
      valor.target.value = String(valor.target.value).substring(
        0,
        this.tamanho
      );
    } else {
      this.valor.emit(valor.target.value);
    }
  }
}

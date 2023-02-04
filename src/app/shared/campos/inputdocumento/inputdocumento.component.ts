import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'near-documento',
  templateUrl: './inputdocumento.component.html',
  styleUrls: ['./inputdocumento.component.scss'],
})
export class InputCpfCnpjComponent {
  @Input('nome') nome: string = '';
  @Input('valorInicial') valorInicial: any = '';
  @Input('identificador') identificador: string = '';
  @Input('desabilitar') desabilitar: any = false;
  @Input('mascara') mascara: string = '';

  @Output() valor = new EventEmitter();

  onChange(item: any) {
    this.valor.emit(item.target.value);
  }
}

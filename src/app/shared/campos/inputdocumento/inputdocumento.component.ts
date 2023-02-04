import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MascaraDocumento, TipoMascara } from './../../interfaces/campo';

@Component({
  selector: 'near-documento',
  templateUrl: './inputdocumento.component.html',
  styleUrls: ['./inputdocumento.component.scss'],
})
export class InputCpfCnpjComponent {
  @Input() nome: string = '';
  @Input() valorInicial: any = '';
  @Input() identificador: string = '';
  @Input() desabilitar: any = false;
  @Input() mascara: string = '000.000.000-00||00.000.000/0000-00';
  @Input() tipo: string = '';

  @Output() valor = new EventEmitter();

  ngOnInit() {
    this.getTipoMascara();
  }

  onChange(item: any) {
    this.valor.emit(item.target.value);
  }

  getTipoMascara() {
    if (this.tipo.toUpperCase() == TipoMascara.CPF) {
      this.mascara = MascaraDocumento.CPF;
    } else if (this.tipo.toUpperCase() == TipoMascara.CPF) {
      this.mascara = MascaraDocumento.CPF;
    }
  }
}

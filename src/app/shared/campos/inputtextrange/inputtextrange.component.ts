import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'near-textrange',
  templateUrl: './inputtextrange.component.html',
  styleUrls: ['./inputtextrange.component.scss'],
})
export class InputtextrangeComponent {
  @Input() nome = '';
  @Input() identificador: string = '';
  @Input() valorInicial: any = '';
  @Input() valorFinal: any = '';
  @Input() desabilitar: boolean = true;

  @Output() changeIncial = new EventEmitter();
  @Output() changeFinal = new EventEmitter();

  onChangeInicial(item: any) {
    this.changeIncial.emit(item.target.value);
  }

  onChangeFinal(item: any) {
    this.changeFinal.emit(item.target.value);
  }
}

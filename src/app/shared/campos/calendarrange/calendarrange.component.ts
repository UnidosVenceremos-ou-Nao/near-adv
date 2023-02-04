import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'near-calendarrange',
  templateUrl: './calendarrange.component.html',
  styleUrls: ['./calendarrange.component.scss'],
})
export class DaterangeComponent {
  @Input() nome = 'Teste';
  @Input() identificador = 'tst';
  @Input() valorInicial: any = '';
  @Input() valorFinal: any = '';
  @Input() desabilitar: boolean = false;

  @Output() changeIncial = new EventEmitter();
  @Output() changeFinal = new EventEmitter();

  onChangeInicial(item: any) {
    this.changeIncial.emit(item.target.value);
  }

  onChangeFinal(item: any) {
    this.changeFinal.emit(item.target.value);
  }
}

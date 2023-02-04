import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'near-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  @Input() nome = 'Teste';
  @Input() identificador = 'tst';
  @Input() valorInicial: any = '';
  @Input() valorFinal: any = '';
  @Input() desabilitar: boolean = false;

  @Output() changeIncial = new EventEmitter();

  onChange(item: any) {
    this.changeIncial.emit(item.target.value);
  }
}

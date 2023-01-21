import { Component, Input } from '@angular/core';

@Component({
  selector: 'adv-daterange',
  templateUrl: './daterange.component.html',
  styleUrls: ['./daterange.component.scss'],
})
export class DaterangeComponent {
  @Input() titulo = 'Teste';
  @Input() identificador = 'tst';
  @Input() dataInicial: any = '';
  @Input() dataFinal: any = '';
  @Input() desabilitar: boolean = false;
}

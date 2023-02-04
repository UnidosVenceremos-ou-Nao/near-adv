import { Component, Input } from '@angular/core';

@Component({
  selector: 'near-daterange',
  templateUrl: './daterange.component.html',
  styleUrls: ['./daterange.component.scss'],
})
export class DaterangeComponent {
  @Input() nome = 'Teste';
  @Input() identificador = 'tst';
  @Input() valorInicial: any = '';
  @Input() valorFinal: any = '';
  @Input() desabilitar: boolean = false;
}

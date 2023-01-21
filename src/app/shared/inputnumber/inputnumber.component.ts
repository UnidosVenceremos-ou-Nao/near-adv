import { Component, Input } from '@angular/core';

@Component({
  selector: 'adv-inputnumber',
  templateUrl: './inputnumber.component.html',
  styleUrls: ['./inputnumber.component.scss'],
})
export class InputnumberComponent {
  @Input('nome') nome: string = '';
  @Input('valor') valorInicial: any;
  @Input('identificador') identificador: string = 'abc';
  @Input('desabilitar') desabilitar: any = false;
}

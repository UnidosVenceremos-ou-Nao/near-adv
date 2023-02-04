import { Component, Input } from '@angular/core';

@Component({
  selector: 'near-number',
  templateUrl: './inputnumber.component.html',
  styleUrls: ['./inputnumber.component.scss'],
})
export class InputNumberComponent {
  @Input('nome') nome: string = '';
  @Input('valorInicial') valorInicial: any;
  @Input('identificador') identificador: string = 'abc';
  @Input('desabilitar') desabilitar: any = false;
}

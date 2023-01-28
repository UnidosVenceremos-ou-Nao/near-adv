import { Component, Input } from '@angular/core';

@Component({
  selector: 'adv-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.scss'],
})
export class InputtextComponent {
  @Input('nome') nome: string = '';
  @Input('valorInicial') valorInicial: any = '';
  @Input('identificador') identificador: string = '';
  @Input('desabilitar') desabilitar: any = false;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'adv-inputmask',
  templateUrl: './inputmask.component.html',
  styleUrls: ['./inputmask.component.scss'],
})
export class InputmaskComponent {
  @Input('nome') nome: string = '';
  @Input('valorInicial') valorInicial: any = '';
  @Input('identificador') identificador: string = '';
  @Input('desabilitar') desabilitar: any = false;
  @Input('mascara') mascara: string = '';
}

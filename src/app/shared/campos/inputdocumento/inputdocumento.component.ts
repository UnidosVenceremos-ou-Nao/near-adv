import { Component, Input } from '@angular/core';

@Component({
  selector: 'adv-inputdocumento',
  templateUrl: './inputdocumento.component.html',
  styleUrls: ['./inputdocumento.component.scss'],
})
export class InputCpfCnpjComponent {
  @Input('nome') nome: string = '';
  @Input('valorInicial') valorInicial: any = '';
  @Input('identificador') identificador: string = '';
  @Input('desabilitar') desabilitar: any = false;
  @Input('mascara') mascara: string = '';
}

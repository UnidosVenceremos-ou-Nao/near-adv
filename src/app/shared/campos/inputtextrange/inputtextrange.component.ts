import { Component, Input } from '@angular/core';

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
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'adv-inputtextrange',
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

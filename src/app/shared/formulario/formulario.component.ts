import { Component, Input } from '@angular/core';

@Component({
  selector: 'adv-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  @Input() titulo: string = '';
}

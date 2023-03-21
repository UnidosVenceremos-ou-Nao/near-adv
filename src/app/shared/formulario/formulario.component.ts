import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Campo } from '../interfaces/campo';

@Component({
  selector: 'near-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  classe = 'col-sm-12 col-md-6 col-lg-4 col-xl-3';

  @Input() titulo: string = '';
  @Input() operacao: string = '';
  @Input() listaCampos: Campo[] = [];

  @Output() salvar = new EventEmitter<Event>();
  @Output() cancelar = new EventEmitter<Event>();

  save(event: any) {
    this.salvar.next(event);
  }

  cancel(event: any) {
    this.cancelar.next(event);
  }
}

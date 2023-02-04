import {
  Component,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Campo } from '../../security/interfaces/campo';

@Component({
  selector: 'adv-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  classe = 'col-sm-12 col-md-6 col-lg-4 col-xl-3';

  @Input() titulo: string = '';
  @Input() operacao: string = '';
  @Input() listaCampos: Campo[] = [];

  @Output() salvarEvent = new EventEmitter<Event>();
  @Output() cancelarEvent = new EventEmitter<Event>();

  salvar(event: any) {
    this.salvarEvent.next(event);
  }

  cancelar(event: any) {
    this.cancelarEvent.next(event);
  }
}

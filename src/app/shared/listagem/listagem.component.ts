import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'adv-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent {
  @Input() titulo: string = '';

  @Input() verBotaoNovo: boolean = true;
  @Output() criar = new EventEmitter<Event>();

  @Input() tituloBotaoSecundario: string = '';
  @Input() verBotaoSecundario: boolean = false;
  @Output() botaoSecundario = new EventEmitter<Event>();

  clickBotaoNovo(event: any) {
    this.criar.next(event);
  }

  clickBotaoSecundario(event: any) {
    this.botaoSecundario.next(event);
  }
}

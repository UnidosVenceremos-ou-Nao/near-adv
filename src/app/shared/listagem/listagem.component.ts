import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'near-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent {
  @Input() titulo: string = '';

  @Input() verBotaoNovo: boolean = true;
  @Output() novoEvent = new EventEmitter<Event>();

  novo(event: any) {
    this.novoEvent.next(event);
  }
}

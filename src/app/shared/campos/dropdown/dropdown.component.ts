import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'near-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() nome = '';
  @Input() ativo = false;
  @Input() valorInicial: any;
  @Input() opcoes: any[] = [];

  @Output() valor = new EventEmitter();

  selectedItem: any;
  placeholder = 'Não itens para serem exibidos';

  onSelectionChange(item: any) {
    this.selectedItem = item;
    this.valor.emit(item.target.value);
  }
}

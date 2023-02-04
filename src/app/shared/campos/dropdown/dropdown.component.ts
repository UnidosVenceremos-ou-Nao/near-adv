import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'near-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() nome = 'Testando asda ';
  @Input() ativo = false;
  @Input() opcoes: any[] = [];
  @Output() selected = new EventEmitter();

  selectedItem: any;
  placeholder = 'Não itens para serem exibidos';

  onSelectionChange(item: any) {
    this.selectedItem = item;
    this.selected.emit(item);
  }
}

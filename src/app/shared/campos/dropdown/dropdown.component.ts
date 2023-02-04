import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'adv-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() nome = 'Testando asda ';
  @Input() ativo = false;
  @Input() items: any[] = [
    { label: 'Item 1', value: 'item-1' },
    { label: 'Item 2', value: 'item-2' },
    { label: 'Item 3', value: 'item-3' },
  ];
  @Output() selected = new EventEmitter();

  selectedItem: any;
  placeholder = 'Não itens para serem exibidos';

  onSelectionChange(item: any) {
    debugger;
    this.selectedItem = item;
    this.selected.emit(item);
  }
}

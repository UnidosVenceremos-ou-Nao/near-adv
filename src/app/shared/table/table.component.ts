import { Component } from '@angular/core';
import { lista } from '../lista';

@Component({
  selector: 'adv-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  lista = lista;
}

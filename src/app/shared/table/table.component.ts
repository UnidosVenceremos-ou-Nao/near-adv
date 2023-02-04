import { Component } from '@angular/core';
import { lista } from '../lista';

@Component({
  selector: 'near-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  lista = lista;
}

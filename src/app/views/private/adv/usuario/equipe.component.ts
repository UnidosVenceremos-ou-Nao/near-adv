import { Equipe } from './servico/equipe';
import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'near-equipe',
  templateUrl: './equipe.component.html',
  standalone: true,
  imports: [SharedModule],
  styleUrls: ['./equipe.component.scss'],
})
export class EquipeComponent {
  titulo = 'Equipe';
  operacao = 'listagem';
  filtro: Equipe = new Equipe();

  opcoesCargo = [
    { label: 'Advogado', value: 'Advogado' },
    { label: 'Item 2', value: 'item-2' },
    { label: 'Item 3', value: 'item-3' },
  ];

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }

  novo(valor: any) {
    this.operacao = 'cadastro';
  }

  teste(valor: any) {
    console.log(valor);
  }
}

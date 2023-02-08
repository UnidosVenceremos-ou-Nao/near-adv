import { Cliente } from './servico/cliente';
import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from '../../../../shared/shared.module';
import * as ESTADOS from '../../../../shared/json/estados.json';
import * as NACIONALIDADES from '../../../../shared/json/nacionalidades.json';

@Component({
  selector: 'near-cliente',
  templateUrl: './cliente.component.html',
  standalone: true,
  imports: [SharedModule],
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent {
  titulo = 'Cliente';
  operacao = 'listagem';
  filtro: Cliente = new Cliente();

  opcoesEstadoCivil = [
    { label: 'Solteiro(a)', value: 'Solteiro(a)' },
    { label: 'Casado(a)', value: 'Casado(a)' },
    { label: 'Separado(a) Judicialmente', value: 'Separado(a) Judicialmente' },
    { label: 'Divorciado(a)', value: 'Divorciado(a)' },
    { label: 'Viúvo(a)', value: 'Viúvo(a)' },
    { label: 'União Estável', value: 'União Estável' },
  ];

  opcoesEstadoOab = ESTADOS;
  opcoesNacionalidades = NACIONALIDADES;

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }

  novo(valor: any) {
    this.operacao = 'cadastrar';
  }

  teste(valor: any) {
    console.log(valor);
  }
}

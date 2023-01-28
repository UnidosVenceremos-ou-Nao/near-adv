import { Component } from '@angular/core';
import { Input } from 'src/app/security/interfaces/inputType';

@Component({
  selector: 'adv-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  classe = 'col-sm-12 col-lg-4';
  lista: Input[] = [
    {
      nome: 'TESTE 1',
      desabilitar: false,
      classe: 'col-sm-12 col-lg-4',
      tipo: 'inputtext',
      valorInicial: 'TESTE',
    },
    {
      nome: 'TESTE 2',
      desabilitar: false,
      classe: 'col-sm-12 col-lg-4',
      tipo: 'inputnumber',
      valorInicial: 0,
    },
    {
      nome: 'TESTE 3',
      desabilitar: false,
      classe: 'col-sm-12 col-lg-4',
      tipo: 'inputmask',
      valorInicial: 'TESTE',
      mascara: '000.000.000-00',
    },
    {
      nome: 'TESTE 4',
      desabilitar: false,
      classe: '',
      tipo: 'inputdocumento',
      valorInicial: 'TESTE',
    },
    {
      nome: 'TESTE 5',
      desabilitar: false,
      classe: '',
      tipo: 'inputtextrange',
      valorInicial: 'TESTE',
      valorFinal: 'TESTE',
    },
    {
      nome: 'TESTE 6',
      desabilitar: false,
      classe: '',
      tipo: 'daterange',
      valorInicial: 'TESTE',
    },
  ];
}

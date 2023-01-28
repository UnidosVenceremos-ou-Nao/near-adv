export interface Input {
  nome: string;
  tipo: TipoInput;
  desabilitar: boolean;
  valorInicial: string | number;
  valorFinal?: string | number;
  mascara?: string;
  classe?: string;
}

type TipoInput =
  | 'daterange'
  | 'inputdocumento'
  | 'inputmask'
  | 'inputnumber'
  | 'inputtext'
  | 'inputtextrange';

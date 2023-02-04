export interface Campo {
  nome: string;
  tipo: TipoInput;
  desabilitar: boolean;
  valorInicial: string | number;
  valorFinal?: string | number;
  mascara?: string;
  classe?: string;
}
export enum MascaraDocumento {
  CPF = '000.000.000-00',
  CNPJ = '00.000.000/0000-00',
}

export enum TipoMascara {
  CPF = 'CPF',
  CNPJ = 'CNPJ',
}

type TipoInput =
  | 'daterange'
  | 'inputdocumento'
  | 'inputmask'
  | 'inputnumber'
  | 'inputtext'
  | 'inputtextrange';

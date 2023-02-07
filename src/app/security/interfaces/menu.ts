export class MenuItem {
  id?: String;
  nome?: String;
  icone?: String;
  ativo?: Boolean;
  path?: String;
}

export class Menu {
  modulos?: Modulo[];
}

export class Modulo extends MenuItem {
  itens?: Item[];
}

export class Item extends MenuItem {
  subItens?: SubItem[];
}

export class SubItem extends MenuItem {}

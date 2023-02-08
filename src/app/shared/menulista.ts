export const LISTA_MENU = [
  {
    modulo: 'adv',
    icone: 'scale-balanced',
    ativo: true,
    nome: 'TESTE 1',
    itensMenu: [
      {
        titulo: 'Dashboard',
        path: '',
        ativo: false,
        children: [
          {
            nome: 'Início',
            path: 'inicio',
            icone: 'user',
            ativo: true,
          },
          {
            nome: 'Teste',
            path: 'teste',
            icone: 'user',
            ativo: false,
          },
        ],
      },
      {
        titulo: 'Cliente',
        path: 'cliente',
        ativo: true,
      },
      {
        titulo: 'Agenda',
        path: 'cliente',
        ativo: true,
      },
    ],
  },
  {
    modulo: 'outro',
    icone: 'camera-retro',
    ativo: false,
    nome: 'TESTE 2',
    itensMenu: [],
  },
];

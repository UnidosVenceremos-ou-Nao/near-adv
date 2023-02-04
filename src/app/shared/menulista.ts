export const LISTA_MENU = [
  {
    modulo: 'adv',
    icone: 'scale-balanced',
    ativo: true,
    tooltip: 'TESTE 1',
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
        titulo: 'Equipe',
        path: 'equipe',
        ativo: true,
      },
      {
        titulo: 'Agenda',
        path: 'equipe',
        ativo: true,
      },
    ],
  },
  {
    modulo: 'outro',
    icone: 'camera-retro',
    ativo: false,
    tooltip: 'TESTE 2',
    itensMenu: [],
  },
];

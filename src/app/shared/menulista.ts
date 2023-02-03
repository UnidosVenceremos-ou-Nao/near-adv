export const LISTA_MENU = [
  {
    modulo: 'adv',
    icone: 'scale-balanced',
    ativo: true,
    tooltip: 'TESTE 1',
    itensMenu: [
      {
        titulo: 'Dashboard',
        ativo: false,
        children: [
          {
            nome: 'Início',
            path: 'adv/inicio',
            icone: 'user',
            ativo: true,
          },
          {
            nome: 'Usuário',
            path: 'adv/usuario',
            icone: 'user',
            ativo: true,
          },
          {
            nome: 'Teste',
            path: 'adv/teste',
            icone: 'user',
            ativo: false,
            children: [
              {
                path: 'adv/fulano',
                nome: 'Clientes',
              },
            ],
          },
        ],
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

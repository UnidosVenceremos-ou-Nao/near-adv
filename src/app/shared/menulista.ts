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
            path: 'inicio',
            icone: 'user',
            ativo: true,
          },
          {
            nome: 'Usuário',
            path: 'usuario',
            icone: 'user',
            ativo: true,
          },
          {
            nome: 'Teste',
            path: 'teste',
            icone: 'user',
            ativo: false,
            children: [
              {
                path: 'fulano',
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

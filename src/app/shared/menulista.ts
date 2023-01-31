export const LISTA_MENU = [
  {
    modulo: 'adv',
    icone: 'fa-scale-balanced',
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
            icone: 'fas fa-user',
            ativo: true,
          },
          {
            nome: 'Usuário',
            path: 'usuario',
            icone: 'fas fa-user',
            ativo: true,
          },
          {
            nome: 'Teste',
            path: 'teste',
            icone: 'fas fa-user',
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
    icone: 'fa-camera-retro',
    ativo: false,
    tooltip: 'TESTE 2',
    itensMenu: [],
  },
];

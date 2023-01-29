import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'sdv-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  navs = [
    {
      titulo: 'Dashboard',
      ativo: false,
      children: [
        {
          nome: 'Início',
          path: 'inicio',
          icone: 'fas fa-user',
          disabled: true,
        },
        {
          nome: 'Usuário',
          path: 'usuario',
          icone: 'fas fa-user',
          disabled: true,
        },
        {
          nome: 'Teste',
          path: 'teste',
          icone: 'fas fa-user',
          disabled: false,
          children: [
            {
              path: 'fulano',
              nome: 'Clientes',
            },
          ],
        },
      ],
    },
    {
      titulo: 'Clientes',
      ativo: true,
      children: [
        {
          nome: 'Início',
          path: 'inicio1',
          icone: 'fas fa-user',
          disabled: true,
        },
        {
          nome: 'Usuário',
          path: 'usuario1',
          icone: 'fas fa-user',
          disabled: true,
        },
        {
          nome: 'Teste',
          path: 'teste2',
          icone: 'fas fa-user',
          disabled: false,
          children: [
            {
              path: 'fulano',
              nome: 'Clientes',
            },
          ],
        },
      ],
    },
  ];
  @Input() isExpanded: boolean = true;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sdv-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }
  imageLogo: string = 'src/assets/images/nearhub.png';

  navs = [
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
    {
      titulo: 'Clientes',
      ativo: true,
      children: [
        {
          nome: 'Início',
          path: 'inicio1',
          icone: 'fas fa-user',
          ativo: true,
        },
        {
          nome: 'Usuário',
          path: 'usuario1',
          icone: 'fas fa-user',
          ativo: true,
        },
        {
          nome: 'Teste',
          path: 'teste2',
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
  ];

  modulos = [
    {
      icone: 'fa-scale-balanced',
      ativo: true,
      tooltip: 'TESTE 1',
    },
    {
      icone: 'fa-camera-retro',
      ativo: false,
      tooltip: 'TESTE 2',
    },
  ];
  @Input() isExpanded: boolean = true;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
}

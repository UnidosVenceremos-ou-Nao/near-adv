import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { LISTA_MENU } from './../menulista';

@Component({
  selector: 'sdv-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() isExpanded: boolean = true;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  imageLogo: string = 'src/assets/images/nearhub.png';

  menu: any = [];
  modulos: any;
  moduloAtivo = '';

  showMenu = false;
  x = 0;
  y = 0;

  constructor(library: FaIconLibrary, protected route: ActivatedRoute) {
    library.addIconPacks(fas, fab);

    this.moduloAtivo = route.snapshot.data['modulo'];
    this.getMenu();
  }

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

  ngOnInit() {}

  getMenu() {
    const lista = LISTA_MENU;

    this.modulos = lista.filter((obj) => {
      const { itensMenu, ...newList } = obj;
      return newList;
    });

    for (const obj of lista) {
      if (obj.modulo === this.moduloAtivo) {
        this.menu.push(...obj.itensMenu);
      }
    }
    debugger;
  }
}

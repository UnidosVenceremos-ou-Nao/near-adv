import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RouterState, ActivatedRoute } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { LISTA_MENU } from './../menulista';

@Component({
  selector: 'sdv-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  imageLogo: string = 'src/assets/images/nearhub.png';

  menu = [];

  @Input() isExpanded: boolean = true;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(library: FaIconLibrary, protected route: ActivatedRoute) {
    // library.addIconPacks(fas, fab);
    console.log(route.snapshot.data['modulo']);

    debugger;
    this.teste();
  }

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

  ngOnInit() {}

  teste() {
    const lista = LISTA_MENU;
    lista.forEach((x) => {
      debugger;
    });
  }
}

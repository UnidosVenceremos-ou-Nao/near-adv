import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { LISTA_MENU } from './../menulista';

@Component({
  selector: 'sdv-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  constructor(library: FaIconLibrary, protected activeRoute: ActivatedRoute) {
    // library.addIconPacks(fas, fab);
  }
  imageLogo: string = 'src/assets/images/nearhub.png';

  menu = LISTA_MENU;

  @Input() isExpanded: boolean = true;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

  ngOnInit() {
    let a = this.activeRoute.snapshot.params;
    debugger;
  }

  getModuloMenu() {}
}

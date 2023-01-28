import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'adv-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent {
  titulo = 'Listagem de Usuário(s)';

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }

  novo(valor: any) {
    console.log(valor);
  }
}

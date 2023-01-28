import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { DaterangeComponent } from './campos/daterange/daterange.component';
import { InputCpfCnpjComponent } from './campos/inputdocumento/inputdocumento.component';
import { InputmaskComponent } from './campos/inputmask/inputmask.component';
import { InputnumberComponent } from './campos/inputnumber/inputnumber.component';
import { InputtextComponent } from './campos/inputtext/inputtext.component';
import { InputtextrangeComponent } from './campos/inputtextrange/inputtextrange.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListagemComponent } from './listagem/listagem.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
@NgModule({
  declarations: [
    NavbarComponent,
    FormularioComponent,
    DaterangeComponent,
    InputtextComponent,
    InputnumberComponent,
    InputmaskComponent,
    InputtextrangeComponent,
    InputCpfCnpjComponent,
    TableComponent,
    ListagemComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule, NgxMaskDirective],
  exports: [
    NavbarComponent,
    FormularioComponent,
    DaterangeComponent,
    InputmaskComponent,
    InputCpfCnpjComponent,
    InputtextrangeComponent,
    InputtextComponent,
    NgxMaskDirective,
    ListagemComponent,
    FontAwesomeModule,
    TableComponent,
    InputnumberComponent,
  ],
  providers: [provideNgxMask()],
})
export class SharedModule {}

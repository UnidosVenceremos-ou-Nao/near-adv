import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { DaterangeComponent } from './campos/daterange/daterange.component';
import { InputCpfCnpjComponent } from './campos/inputdocumento/inputdocumento.component';
import { InputMaskComponent } from './campos/inputmask/inputmask.component';
import { InputNumberComponent } from './campos/inputnumber/inputnumber.component';
import { InputTextComponent } from './campos/inputtext/inputtext.component';
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
    InputTextComponent,
    InputNumberComponent,
    InputMaskComponent,
    InputtextrangeComponent,
    InputCpfCnpjComponent,
    TableComponent,
    ListagemComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    NgxMaskDirective,
    NgbAccordionModule,
  ],
  exports: [
    CommonModule,
    DaterangeComponent,
    FormularioComponent,
    InputNumberComponent,
    InputMaskComponent,
    InputCpfCnpjComponent,
    InputtextrangeComponent,
    InputTextComponent,
    NavbarComponent,
    ListagemComponent,
    TableComponent,

    FontAwesomeModule,
    NgbAccordionModule,

    NgxMaskDirective,
  ],
  providers: [provideNgxMask()],
})
export class SharedModule {}

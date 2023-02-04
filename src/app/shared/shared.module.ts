import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { DaterangeComponent } from './campos/calendarrange/calendarrange.component';
import { DropdownComponent } from './campos/dropdown/dropdown.component';
import { InputCpfCnpjComponent } from './campos/inputdocumento/inputdocumento.component';
import { InputMaskComponent } from './campos/inputmask/inputmask.component';
import { InputNumberComponent } from './campos/inputnumber/inputnumber.component';
import { InputTextComponent } from './campos/inputtext/inputtext.component';
import { InputtextrangeComponent } from './campos/inputtextrange/inputtextrange.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListagemComponent } from './listagem/listagem.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { CalendarComponent } from './campos/calendar/calendar.component';
@NgModule({
  declarations: [
    DaterangeComponent,
    DropdownComponent,
    FormularioComponent,
    InputCpfCnpjComponent,
    InputMaskComponent,
    InputNumberComponent,
    InputTextComponent,
    InputtextrangeComponent,
    ListagemComponent,
    NavbarComponent,
    TableComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    NgxMaskDirective,
    NgbAccordionModule,
  ],
  exports: [
    CommonModule,
    DaterangeComponent,
    DropdownComponent,
    FormularioComponent,
    InputCpfCnpjComponent,
    InputNumberComponent,
    CalendarComponent,
    InputMaskComponent,
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

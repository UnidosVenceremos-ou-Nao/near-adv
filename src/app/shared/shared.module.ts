import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { DaterangeComponent } from './daterange/daterange.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InputCpfCnpjComponent } from './inputdocumento/inputdocumento.component';
import { InputmaskComponent } from './inputmask/inputmask.component';
import { InputnumberComponent } from './inputnumber/inputnumber.component';
import { InputtextComponent } from './inputtext/inputtext.component';
import { InputtextrangeComponent } from './inputtextrange/inputtextrange.component';
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
    TableComponent,
    InputnumberComponent,
  ],
  providers: [provideNgxMask()],
})
export class SharedModule {}

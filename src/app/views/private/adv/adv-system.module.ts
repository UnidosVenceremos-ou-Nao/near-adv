import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvSystemRoutingModule } from './adv-system-routing.module';
import { AdvSystemComponent } from './adv-system.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdvSystemComponent],
  imports: [CommonModule, SharedModule, AdvSystemRoutingModule],
})
export class AdvSystemModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [PrivateComponent, HomeComponent, UsuarioComponent],
  imports: [CommonModule, PrivateRoutingModule, SharedModule],
})
export class PrivateModule {}

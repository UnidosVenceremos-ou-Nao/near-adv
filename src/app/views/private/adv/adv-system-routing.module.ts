import { UsuarioComponent } from './usuario/usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvSystemComponent } from './adv-system.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdvSystemComponent,
    children: [
      {
        path: 'inicio',
        component: HomeComponent,
      },
      {
        path: 'usuario',
        component: UsuarioComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvSystemRoutingModule {}

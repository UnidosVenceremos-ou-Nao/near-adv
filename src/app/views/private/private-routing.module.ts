import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'adv',
        data: { modulo: 'adv' },
        loadChildren: () =>
          import('./adv/adv-system.module').then((m) => m.AdvSystemModule),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.routes').then((m) => m.adminRoutes),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}

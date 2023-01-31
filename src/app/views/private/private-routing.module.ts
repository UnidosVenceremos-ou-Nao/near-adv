import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'adv',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'adv',
        loadChildren: () =>
          import('./adv/adv-system.module').then((m) => m.AdvSystemModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}

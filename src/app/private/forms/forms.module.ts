import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAdminGuard } from '../../guards/is-admin.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [isAdminGuard],
    children: [
      {
        path: 'template-driven-form',
        loadChildren: () => import('./tempate-driven-form/tempate-driven-form.module').then(m => m.TempateDrivenFormModule),
      },
      {
        path: 'data-driven-form',
        loadChildren: () => import('./data-driven-form/data-driven-form.module').then(m => m.DataDrivenFormModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FormsModule { }

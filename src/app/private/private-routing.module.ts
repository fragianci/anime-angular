import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EserciziComponent } from './esercizi/esercizi.component';
import { DetailComponent } from './home/detail/detail.component';

/** @link {https://medium.com/@oranaki9910/how-to-create-a-dynamic-layout-using-a-named-router-outlet-in-angular-8f211afe4ea2} **/

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
      },
      {
        path: 'esercizi',
        component: EserciziComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PrivateRoutingModule {}

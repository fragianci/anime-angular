import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EserciziComponent } from './esercizi/esercizi.component';
import { DetailComponent } from './home/detail/detail.component';
import { HomeComponent } from './home/home.component';
import { FirstOutletComponent } from './outlet/first-outlet/first-outlet.component';
import { NewRedirectComponent } from './outlet/new-redirect/new-redirect.component';
import { OutletComponent } from './outlet/outlet.component';
import { SecondOutletComponent } from './outlet/second-outlet/second-outlet.component';

/** @link {https://medium.com/@oranaki9910/how-to-create-a-dynamic-layout-using-a-named-router-outlet-in-angular-8f211afe4ea2} **/

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        // path: 'detail/:id',
        path: 'anime/:id',
        component: DetailComponent,
        outlet: 'details',
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
        path: 'first-outlet-example',
        component: OutletComponent,
        children: [
          {
            path: '',
            component: FirstOutletComponent,
            outlet: 'first',
          },
          {
            path: '',
            component: SecondOutletComponent,
            outlet: 'second',
          },
        ],
      },
      {
        path: 'second-outlet-example',
        component: OutletComponent,
        children: [
          {
            path: '',
            component: FirstOutletComponent,
            outlet: 'first',
          },
          {
            path: '',
            component: NewRedirectComponent,
            outlet: 'second',
          },
        ],
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

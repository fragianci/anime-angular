import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'public',
        loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
      },
      {
        path: 'private',
        loadChildren: () => import('./private/private.module').then(m => m.PrivateModule),
        canActivate: [authGuard],
      },
      {
        path: 'notFound',
        component: NotFoundComponent,
      },
      {
        path: '',
        redirectTo: 'private',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'notFound',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

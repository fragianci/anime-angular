import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TempateDrivenFormComponent } from './tempate-driven-form.component';
import { SharedModule } from '../../../shared/shared.module';
import { checkFormGuard } from '../../../guards/check-form.guard';

const routes: Routes = [
  {
    path: '',
    component: TempateDrivenFormComponent,
    canDeactivate: [checkFormGuard]
  }
];

@NgModule({
  declarations: [
    TempateDrivenFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TempateDrivenFormModule { }

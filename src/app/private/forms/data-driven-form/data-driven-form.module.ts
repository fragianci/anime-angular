import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDrivenFormComponent } from './data-driven-form.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: DataDrivenFormComponent
  }
];

@NgModule({
  declarations: [
    DataDrivenFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DataDrivenFormModule { }

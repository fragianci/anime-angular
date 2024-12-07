import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PrivateRoutingModule } from './private-routing.module';

@NgModule({
  declarations: [
    // EserciziComponent,
  ],
  imports: [CommonModule, SharedModule, PrivateRoutingModule],
})
export class PrivateModule {}

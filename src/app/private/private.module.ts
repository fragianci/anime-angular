import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EserciziComponent } from './esercizi/esercizi.component';
import { DetailComponent } from './home/detail/detail.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './home/list/list.component';
import { PrivateRoutingModule } from './private-routing.module';
import { ShadowSettingsComponent } from './home/shadow-settings/shadow-settings.component';
import { OutletComponent } from './outlet/outlet.component';
import { FirstOutletComponent } from './outlet/first-outlet/first-outlet.component';
import { SecondOutletComponent } from './outlet/second-outlet/second-outlet.component';
import { RedirectComponent } from './outlet/redirect/redirect.component';
import { NewRedirectComponent } from './outlet/new-redirect/new-redirect.component';

@NgModule({
  declarations: [
    // EserciziComponent,
    HomeComponent,
    ListComponent,
    DetailComponent,
    ShadowSettingsComponent,
    OutletComponent,
    FirstOutletComponent,
    SecondOutletComponent,
    RedirectComponent,
    NewRedirectComponent,
  ],
  imports: [CommonModule, SharedModule, PrivateRoutingModule],
})
export class PrivateModule {}

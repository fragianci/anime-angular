import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DetailComponent } from './detail/detail.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListComponent } from './list/list.component';
import { ShadowSettingsComponent } from './shadow-settings/shadow-settings.component';

@NgModule({
  declarations: [HomeComponent, ListComponent, DetailComponent, ShadowSettingsComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}

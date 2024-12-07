import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { EserciziComponent } from './private/esercizi/esercizi.component';

const MODULES = [BrowserModule, AppRoutingModule, SharedModule];

@NgModule({
  declarations: [AppComponent, EserciziComponent],
  imports: [...MODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

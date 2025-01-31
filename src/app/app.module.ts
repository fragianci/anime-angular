import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { EserciziComponent } from './private/esercizi/esercizi.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './shared/services/interceptor.service';

const MODULES = [BrowserModule, AppRoutingModule, SharedModule];

@NgModule({
  declarations: [AppComponent, EserciziComponent],
  imports: [...MODULES],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

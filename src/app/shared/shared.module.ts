import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LikeComponent } from './components/like/like.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RandomCharacterComponent } from './components/random-character/random-character.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CustomShadowDirective } from './directives/custom-shadow.directive';
import { UnlessDirective } from './directives/unless.directive';
import { TruncatePipe } from './pipes/truncate.pipe';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  LikeComponent,
  SearchbarComponent,
  NotFoundComponent,
  ErrorHandlerComponent,
  RandomCharacterComponent,
  SpinnerComponent,
];

const DIRECTIVES = [UnlessDirective, CustomShadowDirective];

const PIPES = [TruncatePipe];

const MODULES = [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...DIRECTIVES, ...MODULES, ...PIPES],
})
export class SharedModule {}

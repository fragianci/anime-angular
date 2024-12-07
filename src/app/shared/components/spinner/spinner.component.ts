import { Component } from '@angular/core';

@Component({
  selector: 'anime-spinner',
  template: `
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  `,
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {}

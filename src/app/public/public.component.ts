import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'anime-public',
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
})
export class PublicComponent {
  constructor(private router: Router) {}

  headerContent() {
    this.router.navigate([
      {
        outlets: {
          navbar: ['header-content'],
        },
      },
    ]);
  }

  otherContent() {
    this.router.navigate([
      {
        outlets: {
          primary: [''],
          other: ['other-content'],
        },
      },
    ]);
  }
}

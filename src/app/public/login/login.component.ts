import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/user.model';
import { CanDeactivateComponent, CanDeactivateType } from '../../guards/check-form.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'anime-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements CanDeactivateComponent {
  user: User = new User();

  constructor(private readonly router: Router, private readonly authService: AuthService) {}

  canDeactivate(): CanDeactivateType {
    return new Observable(observer => {
      if (this.user.email.length && this.user.password.length) {
        observer.next(true);
      } else confirm('Attenzione! Alcuni campi non sono stati completati');
    });
  }

  login() {
    if (this.user.email.length && this.user.password.length) {
      console.log(this.user);

      this.authService.login(this.user);
    }
    this.router.navigate(['private/home']);
  }
}

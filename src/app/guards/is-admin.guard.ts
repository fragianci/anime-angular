import { CanActivateChildFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { inject } from '@angular/core';
import { map, Observable } from 'rxjs';

export const isAdminGuard: CanActivateChildFn =
  (childRoute, state): Observable<boolean | UrlTree> => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    return authService.getProfile$()
      .pipe(
        map((user) => {
          if (!user.isAdmin)
            alert('Non hai l\'autorizzazione per accedere');
          return user.isAdmin;
        })
      );
  };

import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state): Observable<boolean | UrlTree> => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.getProfile$().pipe(
    map(user => {
      // usare createUrlTree in una guardia evita effetti collaterali, usare navigate potrebbe causare problemi di race conditions: la navigazione potrebbe iniziare prima o dopo che Angular abbia processato il risultato della guardia
      return user.isLogged ? true : router.createUrlTree(['/public']);
    })
  );
};

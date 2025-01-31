import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  private pendingRequests: number = 0;
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;

    return next.handle(authReq).pipe(
      tap(event => {
        if (event.type === 0) this.pendingRequests++;
        else this.pendingRequests = 0;
        console.log('evento: ', this.pendingRequests);
      }),
      catchError(err => {
        console.log('errore: ', err);
        return throwError(() => err);
      })
    );
  }
}

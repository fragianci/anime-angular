import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  nameTakens: string[] = ['Matteo', 'Marco'];

  constructor() { }

  // Custom validator sincrono
  hasNumber() {
    return (control: FormControl) => {
      console.log(typeof control.value);

      return new RegExp(/[0-9]/).test(control.value)
        ? { containsNumbers: true } : null;
    };
  }

  // Custom validator asincrono
  nameTakenAsync() {
    let value: string = '';
    return (control: FormControl): Observable<ValidationErrors | null> => {
      return of(
        this.nameTakens.map(name => {
          value = control.value;
          return name.toLowerCase();
        })
          .includes(value.toLowerCase()))
        .pipe(
          delay(1000),
          map(res => {
            return res ? { usernameExists: true } : null;
          })
        );
    };
  }

}

import { Component, ViewChild } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { FormControl, NgForm } from '@angular/forms';
import { CanDeactivateComponent, CanDeactivateType } from '../../../guards/check-form.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'anime-tempate-driven-form',
  templateUrl: './tempate-driven-form.component.html',
  styleUrl: './tempate-driven-form.component.scss'
})
export class TempateDrivenFormComponent implements CanDeactivateComponent {
  @ViewChild('myForm') myForm!: NgForm;
  user: User = new User();

  send() {
    console.log(this.myForm);
  }

  get passwordForm() {
    return (this.myForm?.form.controls['password'] as FormControl);
  }

  canDeactivate(): CanDeactivateType {
    return new Observable(observer => {
      if (this.myForm.invalid)
        confirm('Attenzione! il form non è completo');
      else
        observer.next(true);
    });
  }
}

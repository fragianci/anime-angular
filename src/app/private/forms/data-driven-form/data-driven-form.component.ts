import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../shared/models/user.model';
import { AuthService } from '../../../shared/services/auth.service';
import { tap } from 'rxjs';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'anime-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrl: './data-driven-form.component.scss'
})
export class DataDrivenFormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});
  user: User = new User();
  isTypePassword: boolean = true;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required], [this.userService.nameTakenAsync()]],
      surname: ['', [Validators.required], []],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), this.userService.hasNumber()], []],
      infoUser: this.formBuilder.group({
        street: ['', [Validators.required, Validators.email]],
        birthCity: ['', []]
      })
    });

    this.authService.getProfile$()
      .subscribe({
        next: user => {
          // this.myForm.patchValue(user);
          // this.nameForm.setValue('Nome default');
          console.log('getProfile: ', user);

        }
      });

    this.stradaForm.valueChanges
      .pipe(
        tap(res => {
          // console.log(this.passwordForm);
          if (res.length)
            console.log('scrivendo');

        })
      )
      .subscribe();
    // this.myForm.valueChanges.
    // this.myForm.statusChanges.

  }

  send() {
    const randomId = Math.round(Math.random() * 100);
    console.log(randomId);

    this.authService.updateUser(new User({ id: randomId, ...this.myForm.value }));
  }

  /** Type Assertion */
  get infoUserGroup() {
    return (this.myForm.get('infoUser') as FormGroup);
  }

  get nameForm() {
    return (this.myForm.get('name') as FormControl);
  }

  get passwordForm() {
    return (this.myForm.get('password') as FormControl);
  }

  get surnameForm() {
    return (this.myForm.get('surname') as FormControl);
  }

  get emailForm() {
    return (this.myForm.get('email') as FormControl);
  }

  get stradaForm() {
    return (this.infoUserGroup.get('street') as FormControl);
  }

  changeTypePassword() {
    this.isTypePassword = !this.isTypePassword;
  }
}

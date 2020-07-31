import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupRequestPayload } from './singup-request.payload';
import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupRequestPayload: SignupRequestPayload;
  signupForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.signupRequestPayload = {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
    };
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '/^(?=.*d)(?=.*[!#$%&?])(?=.*[a-zA-Z])[a-zA-Z0-9!#$%&?]{8,}$/'
        ),
      ]),
    });
  }

  signup() {
    this.signupRequestPayload.email = this.signupForm.get('email').value;
    this.signupRequestPayload.name = this.signupForm.get('name').value;
    this.signupRequestPayload.phoneNumber = this.signupForm.get(
      'phoneNumber'
    ).value;
    this.signupRequestPayload.password = this.signupForm.get('password').value;

    this.authService.signup(this.signupRequestPayload).subscribe(
      (data) => {
        this.toastr.success('Registration successfull');
        this.router.navigate(['/login'], {
          queryParams: { registered: 'true' },
        });
      },
      (error) => {
        console.log(error);
        this.toastr.error('Registration Failed! Please try again');
      }
    );
  }
}

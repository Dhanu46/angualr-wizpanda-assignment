import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  user: User = {
    userName: '',
    password: '',
    email: '',
  };
  public registerNow() {
    console.log('hello');
  }
}

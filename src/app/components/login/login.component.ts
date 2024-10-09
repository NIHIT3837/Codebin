import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule], // Ensure ReactiveFormsModule is imported
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Corrected 'styleUrl' to 'styleUrls'
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  login() {
    console.log(this.loginForm.value);
  }

  Reset() {
    this.loginForm.reset();
  }
}

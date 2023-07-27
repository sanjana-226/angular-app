import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { RouterLink, RouterOutlet } from "@angular/router";
import { AuthService } from "src/app/auth.service";
// import { NgModel } from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, RouterLink,ReactiveFormsModule,],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
    });
  }
  onLogin(event: Event) {
    event.preventDefault(); // Prevent default form submission
    if (this.userForm.valid) {
      const email = this.userForm.get('email')?.value;
      const password = this.userForm.get('password')?.value;

      this.authService.login(email, password)
        .then((response) => {
          // Handle the login response
          console.log('Login successful:', response);
        })
        .catch((error) => {
          // Handle login error
          console.error('Login error:', error);
        });
    } else {
      // Form is not valid, show error messages or perform necessary actions.
    }
  // onLogin(email: string, password: string) {
  //   this.authService
  //     .login(email, password)
  //     .then((response) => {})
  //     .catch((error) => {});
  }
}

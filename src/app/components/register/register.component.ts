import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterLink, RouterOutlet } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: "app-register",
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  applyForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
    name: new FormControl("", Validators.required),
    job: new FormControl("", Validators.required),
  });
  constructor(private authService: AuthService) {}

  onRegister() {
    if (this.applyForm.valid) {
      const email = this.applyForm.get("email")?.value;
      const password = this.applyForm.get("password")?.value;

      if (email && password) {
        this.authService
          .register(email, password)
          .then((response) => {
            console.log("Registration successful:", response);
          })
          .catch((error) => {
            console.error("Registration error:", error);
          });
      } else {
        console.error("Email or password is missing.");
      }
    } else {
    }
  }
}

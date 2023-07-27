import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RouterLink, RouterOutlet } from "@angular/router";
import { AuthService } from "src/app/auth.service";
@Component({
  selector: "app-register",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  applyForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
    name: new FormControl(""),
    job: new FormControl(""),
  });
  constructor(private authService: AuthService) {}

  onRegister(email: string, password: string) {
    this.authService
      .register(email, password)
      .then((response) => {
      })
      .catch((error) => {
      });
  }
}

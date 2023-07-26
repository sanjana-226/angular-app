import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder,Validators } from "@angular/forms";
import { RouterLink, RouterOutlet } from "@angular/router";
// import { NgModel } from "@angular/forms";
@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
// export class LoginComponent {
//   applyForm = new FormGroup({
//     email: new FormControl(""),
//     password: new FormControl(""),
//   });
// }

// export class LoginComponent {
//   email: string = "";
//   password: string = "";

//   createUser() {
//     if (this.email && this.password) {
//       const userData = {
//         email: this.email,
//         password: this.password,
//       };

//       fetch("https://reqres.in/api/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log("User created:", data);
//           // You can handle success here, such as showing a success message to the user.
//         })
//         .catch((error) => {
//           console.error("Error creating user:", error);
//           // You can handle errors here, such as showing an error message to the user.
//         });
//     }
//   }
// }
export class LoginComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
    });
  }

  createUser() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;

      fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("User created:", data);
          // You can handle success here, such as showing a success message to the user.
        })
        .catch((error) => {
          console.error("Error creating user:", error);
          // You can handle errors here, such as showing an error message to the user.
        });
    }
  }
}

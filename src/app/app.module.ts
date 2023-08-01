import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { ApiService } from "./services/api.service";
import { AuthService } from "./services/auth.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RegisterComponent,
    LoginComponent,
  ],
  providers:[ApiService,AuthService],
  declarations:[]
})
export class AppModule {}

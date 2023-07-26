import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";

import { HttpClientModule } from "@angular/common/http";
import { PhotosComponent } from "./components/photos/photos.component";
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RegisterComponent,
    LoginComponent,
    RouterModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  
  declarations: [
    PhotosComponent
  ],
})
export class AppModule {}

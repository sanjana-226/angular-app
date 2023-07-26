import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
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
  ],
  // providers: [AlbumsService, PostsService, TodoService],
  bootstrap: [],
  declarations: [PhotosComponent],
})
export class AppModule {}

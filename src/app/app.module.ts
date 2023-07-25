import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

// import { AppComponent } from "./app.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
// import { DashboardComponent } from "./components/dashboard/dashboard.component";
// import { PostsComponent } from "./components/posts/posts.component";
// import { TodoComponent } from "./components/todo/todo.component";
// import { AlbumComponent } from "./components/album/album.component";

import { HttpClientModule } from "@angular/common/http";
// import { HttpClient } from '@angular/common/http';
// import { AlbumsService } from "./services/albums.service";
// import { PostsService } from "./services/posts.service";
// import { TodoService } from "./services/todo.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RegisterComponent,
    LoginComponent,
    RouterModule,
  ],
  // providers: [AlbumsService, PostsService, TodoService],
  bootstrap: [],
  declarations: [],
})
export class AppModule {}

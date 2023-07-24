import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, TodoComponent, PostsComponent, AlbumComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

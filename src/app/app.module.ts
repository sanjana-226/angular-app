import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsService } from './services/albums.service';
import { PostsService } from './services/posts.service';
import { TodoService } from './services/todo.service';

@NgModule({
  imports: [BrowserModule, RegisterComponent, LoginComponent, RouterModule, HttpClientModule],
  // providers: [AlbumsService,PostsService,TodoService],
  bootstrap: [],
  declarations: [],
})
export class AppModule {}

import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoComponent } from './todo/todo.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumComponent } from './album/album.component';

const routeConfig: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'login',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'register',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'dashboard',
  },
  {
    path: 'dashboard/todo',
    component: TodoComponent,
    title: 'todo',
  },
  {
    path: 'dashboard/posts',
    component: PostsComponent,
    title: 'posts',
  },
  {
    path: 'dashboard/album',
    component: AlbumComponent,
    title: 'album',
  },
];

export default routeConfig;

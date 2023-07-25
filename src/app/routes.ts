import { Routes } from "@angular/router";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { TodoComponent } from "./components/todo/todo.component";
import { PostsComponent } from "./components/posts/posts.component";
import { AlbumComponent } from "./components/album/album.component";

const routeConfig: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "dashboard/todo",
    component: TodoComponent,
  },
  {
    path: "dashboard/posts",
    component: PostsComponent,
  },
  {
    path: "dashboard/album",
    component: AlbumComponent,
  },
];

export default routeConfig;

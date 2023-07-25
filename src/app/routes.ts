import { Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TodoComponent } from "./todo/todo.component";
import { PostsComponent } from "./posts/posts.component";
import { AlbumComponent } from "./album/album.component";

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

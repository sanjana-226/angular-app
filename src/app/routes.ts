import { Routes } from "@angular/router";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
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
    path: "todo",
    component: TodoComponent,
  },
  {
    path: "posts",
    component: PostsComponent,
  },
  {
    path: "album",
    component: AlbumComponent,
  },
];

export default routeConfig;

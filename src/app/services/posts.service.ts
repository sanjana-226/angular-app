import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { PostsModel } from "../models/posts.model";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};
@Injectable({
  providedIn: "root"
})
export class PostsService {
  private postsUrl: string = "https://jsonplaceholder.typicode.com/albums";
  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostsModel[]> {
    return this.http.get<PostsModel[]>(this.postsUrl);
  }
}

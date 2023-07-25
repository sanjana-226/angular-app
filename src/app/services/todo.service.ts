import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { TodoModel } from "../models/todo.model";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};
@Injectable({
  providedIn: "root"
})
export class TodoService {
  private todoUrl: string = "https://jsonplaceholder.typicode.com/albums";
  constructor(private http: HttpClient) {}

  getTodo(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(this.todoUrl);
  }
}

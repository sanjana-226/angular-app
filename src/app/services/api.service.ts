import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpHandler,
} from "@angular/common/http";
import { Observable, map } from "rxjs";
import { MovieModel } from "../models/movies.model";
import { MovieCommentModel } from "../models/moviecomment.model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  baseUri: string = "http://localhost:3000/";
  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) {}

  getMovies(): Observable<MovieModel[]> {
    let url = `${this.baseUri}`;
    console.log("getMovies");
    return this.http.get<MovieModel[]>(url, { headers: this.headers });
  }

  getComments(): Observable<MovieCommentModel[]> {
    let url = `${this.baseUri}`;
    console.log("getComments");
    return this.http.get<MovieCommentModel[]>(url, { headers: this.headers });
  }
}

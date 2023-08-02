import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,HttpHandler
} from "@angular/common/http";
import { Observable ,map} from "rxjs";
import { MovieModel } from "../models/movies.model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  baseUri: string = "http://localhost:3000/";
  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private htttp: HttpClient) {}

  getMovies(): Observable<MovieModel[]> {
    let url = `${this.baseUri}`;
    return this.htttp.get<MovieModel[]>(url, { headers: this.headers });
  }
}

import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,HttpHandler
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  baseUri: string = "http://localhost:3000/movie";
  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private htttp: HttpClient) {}

  getMovie(): Observable<any> {
    let url = `${this.baseUri}`;
    return this.htttp.get(url, { headers: this.headers });
  }
}

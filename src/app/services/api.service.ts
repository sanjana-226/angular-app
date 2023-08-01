import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  baseUri: string = "http://localhost:3000/router";
  headers = new HttpHeaders().set("Content-Type", "application/json");
  
  constructor(private htttp: HttpClient) {}
  
  getMovie(id: Number): Observable<any> {
    let url = `${this.baseUri}/${id}`;
    return this.htttp.get(url, { headers: this.headers });
  }
  
}

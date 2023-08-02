import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,HttpHandler
} from "@angular/common/http";
import { Observable } from "rxjs";
import { MovieModel } from "../models/movies.model";
import { map } from "rxjs";

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

  // getMovie(): Observable<MovieModel> {
  //   let url = `${this.baseUri}`;
  //   return this.htttp.get(url, { headers: this.headers }).pipe(
  //     map((response: Object) => {
  //       // Use type assertion to let TypeScript know that 'response' has the properties we expect
  //       const movie: MovieModel = {
  //         name: (response as any).name, // Assuming 'name' is a property in the response object
  //         year: (response as any).year, // Assuming 'year' is a property in the response object
  //         // Add other properties of MovieModel as needed
  //       };
  //       return movie;
  //     })
  //   );
  // }

  // getMovie(): Observable<MovieModel> {
  //   let url = `${this.baseUri}`;
  //   return this.htttp.get(url, { headers: this.headers }).pipe(
  //     map((response: Object) => {
  //       // Here, you should convert the 'response' Object to 'MovieModel'
  //       // For example, if MovieModel is a class with 'name' and 'year' properties:
  //       const movie: MovieModel = {
  //         name: response['name'], // Assuming 'name' is a property in the response object
  //         year: response['year'], // Assuming 'year' is a property in the response object
  //         // Add other properties of MovieModel as needed
  //       };
  //       return movie;
  //     })
  //   );
  // }
  // getMovie(): Observable<MovieModel> {
  //   let url = `${this.baseUri}`;
  //   return this.htttp.get(url, { headers: this.headers })
  // }
}

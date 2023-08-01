// api.service.ts
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private apiUrl = 'http://27.59.160.57:3000';
  // private apiUrl = "192.168.96.171";
  // private apiUrl = " 27.59.160.57";

 
  constructor() {}

  async getMovies() {
    const response = await fetch(`${this.apiUrl}/api/movies`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
}

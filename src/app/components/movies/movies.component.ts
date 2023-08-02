//movies.component.ts
import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { MovieModel } from "src/app/models/movies.model";
import { MatCardModule } from "@angular/material/card";
import { HttpClient } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-movies",
  standalone: true,
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
  imports: [CommonModule, RouterLink, MatCardModule,HttpClientModule],
  providers: [HttpClient,ApiService],
})
export class MoviesComponent {
  movies: MovieModel[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }
  async fetchMovies() {
    try {
      const fetchedMovies = await this.apiService.getMovies().toPromise();
      this.movies = fetchedMovies || []; 
    } catch (error) {
      console.error('Error fetching movies:', (error as Error).message);
    }
  }
}

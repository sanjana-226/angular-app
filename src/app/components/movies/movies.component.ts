//movies.component.ts
import { Component, OnInit } from "@angular/core";
import { ApiService } from "backend/api.service";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { MovieModel } from "src/app/models/movies.model";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-movies",
  standalone: true,
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
  imports: [CommonModule, RouterLink, MatCardModule],
  providers: [ApiService],
})
export class MoviesComponent implements OnInit {
  movies: MovieModel[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  async fetchMovies() {
    try {
      this.movies = await this.apiService.getMovies();
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
}

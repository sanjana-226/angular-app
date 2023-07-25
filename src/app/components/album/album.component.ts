import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AlbumModel } from "../../models/album.model";
import { AlbumsService } from "src/app/services/albums.service";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
@Component({
  selector: "app-album",
  standalone: true,
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.css"],
  imports: [RouterLink, CommonModule,MatCardModule],
  providers:[AlbumsService]
})

export class AlbumComponent implements OnInit {
  albums: AlbumModel[]=[]; // Assuming the API response returns an array of objects

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => {
        this.albums = data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
}

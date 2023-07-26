import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AlbumModel } from "../../models/album.model";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatDialog } from "@angular/material/dialog";
import { PhotosComponent } from "../photos/photos.component";
@Component({
  selector: "app-album",
  standalone: true,
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.css"],
  imports: [RouterLink, CommonModule, MatCardModule],
})
export class AlbumComponent implements OnInit {
  albums: AlbumModel[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((albumsData) => {
        this.albums = albumsData;
        const fetchPhotosPromises = this.albums.map((album) =>
          fetch(
            `https://jsonplaceholder.typicode.com/albums/${album.id}/photos`
          ).then((response) => response.json())
        );

        Promise.all(fetchPhotosPromises)
          .then((photosData) => {
            photosData.forEach((photos, index) => {
              this.albums[index].photos = photos;
            });
          })
          .catch((error) => {
            console.error("Error fetching photos:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching albums:", error);
      });
  }
  openImage(imageUrl: string) {
    this.dialog.open(PhotosComponent, {
      data: { imageUrl }, // Pass the image URL as data to the modal
    });
  }
}

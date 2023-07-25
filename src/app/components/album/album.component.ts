import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AlbumModel } from "../../models/album.model";
import { AlbumsService } from "src/app/services/albums.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-album",
  standalone: true,
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.css"],
  imports: [RouterLink, CommonModule],
  providers:[AlbumsService]
})
export class AlbumComponent implements OnInit {
  albums!: AlbumModel[];
  constructor(private albumsService: AlbumsService) {}

  getAlbums(): void {
    this.albumsService
      .getAlbums()
      .subscribe((albums) => (this.albums = albums));
  }

  ngOnInit() {
    this.getAlbums();
  }
}

// import { Component, OnInit } from "@angular/core";
// import { RouterLink } from "@angular/router";
// import { albumModel } from "../../models/album.model";
// import { AlbumsService } from "../../services/albums.service";
// import { CommonModule } from "@angular/common";
// @Component({
//   selector: "app-album",
//   standalone: true,
//   templateUrl: "./album.component.html",
//   styleUrls: ["./album.component.css"],
//   imports: [RouterLink, CommonModule],
// })
// export class AlbumComponent implements OnInit {
//   albums: albumModel[];
//   constructor(private albumsService: AlbumsService) {}

//   getAlbums(): void {
//     this.albumsService
//       .getAlbums()
//       .subscribe((albums) => (this.albums = albums));
//   }

//   ngOnInit() {
//     this.getAlbums();
//   }
// }

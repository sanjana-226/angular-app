import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { AlbumModel } from "../models/album.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AlbumsService {
  private albumsUrl: string = "https://jsonplaceholder.typicode.com/albums";

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<AlbumModel[]> {
    return this.http.get<AlbumModel[]>(this.albumsUrl);
  }
  albums: any[] = [];

  ngOnInit() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
}

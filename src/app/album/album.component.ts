import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-album",
  standalone: true,
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.css"],
  imports: [RouterLink],

})
export class AlbumComponent {}

import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-album",
  standalone: true,
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.css"],
  imports: [RouterLink],
})
export class AlbumComponent {
  myStringifiedJson: any;

  constructor() {}

  ngOnInit() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => console.log(json));
    // .then(json => {
    //   this.myStringifiedJson = json;
    //   console.log(this.myStringifiedJson.map(t => t['title']));    // <-- print here
    // });
  }
}

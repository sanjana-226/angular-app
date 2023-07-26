import { Component ,OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-image-details",
  standalone: true,
  templateUrl: "./image-details.component.html",
  styleUrls: ["./image-details.component.css"],
})
export class ImageDetailsComponent implements OnInit {
  imageUrl!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.imageUrl = decodeURIComponent(params.get("imageUrl")??"");
    });
  }
}

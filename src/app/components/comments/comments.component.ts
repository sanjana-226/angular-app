import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommentModel } from "src/app/models/comments.model";
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: "app-comments",
  standalone:true,
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"],
  imports:[CommonModule,MatCardModule,],
})
export class CommentsComponent implements OnInit {
  postId!: number;
  comments: CommentModel[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const postIdParam = params.get('postId');
      if (postIdParam !== null) {
        this.postId = +postIdParam;
        this.fetchCommentsForPost(this.postId);
      } else {
        // Handle the case where postId is not available
        console.error('Post ID is not available.');
      }
    });
  }

  fetchCommentsForPost(postId: number) {
    // Assuming you have the endpoint to fetch comments by postId
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((data: CommentModel[]) => {
        this.comments = data;
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }
}

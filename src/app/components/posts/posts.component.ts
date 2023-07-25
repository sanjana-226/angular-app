import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostsModel } from 'src/app/models/posts.model';
import { OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule,RouterLink,MatCardModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts: PostsModel[]=[]; // Assuming the API response returns an array of objects

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.posts = data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
}
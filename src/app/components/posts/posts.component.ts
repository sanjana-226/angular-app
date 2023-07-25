import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostsModel } from 'src/app/models/posts.model';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

}

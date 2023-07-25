import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TodoModel } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

}
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterLink } from "@angular/router";
import { TodoModel } from "src/app/models/todo.model";
import { OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule],
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  tasks: TodoModel[] = []; // Assuming the API response returns an array of objects

  ngOnInit() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => {
        this.tasks = data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  done(task: TodoModel) {
    task.completed = !task.completed;
  }
}

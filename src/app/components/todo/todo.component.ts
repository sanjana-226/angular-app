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
  tasks: TodoModel[] = []; 

  ngOnInit() {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
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
  newTask() {
    var taskTitle = document.getElementById("newTaskId");
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: taskTitle, 
        id: 1, 
        userId: 1, 
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json)); // add to the dom?
  }
}

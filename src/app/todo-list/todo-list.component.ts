import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Person } from 'src/models/Person';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Person[] = [];
  newTodoInput = new FormControl('');

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.getPeople().subscribe(response => {
      this.todos = response;
    });
  }

  addNewTodo(): void {
    this.todos.push(this.newTodoInput.value);
    this.newTodoInput.setValue('');
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
  }
}

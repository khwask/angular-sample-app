import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList = [
    {id: 1, name: 'test', priority: 0},
    {id: 2, name: 'sample', priority: 0}
  ];

  columnsName = ['id', 'name', 'priority'];

  constructor() { }

  ngOnInit() {
  }

}

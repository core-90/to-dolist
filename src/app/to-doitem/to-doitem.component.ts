import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-doitem',
  templateUrl: './to-doitem.component.html',
  styleUrls: ['./to-doitem.component.scss']
})
export class ToDoitemComponent implements OnInit {
  
  itemCount: number;
  todoItemText: string;
  todoItems = [];

  ngOnInit() {
  	this.itemCount = this.todoItems.length;
  }

  addTodoItem() {
  	this.todoItemText = '';
	this.todoItems.push(this.todoItemText);
  	this.itemCount = this.todoItems.length;
  }

  //constructor() { }

  /*ngOnInit(): void {
  }*/

}

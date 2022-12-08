import { Component } from '@angular/core';
import { TodoItem } from './models/TodoItem';
import { TodoList } from './models/TodoList';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private todoList = new TodoList('cesar', [
    new TodoItem('feed the cat'),
    new TodoItem('wash the dishes'),
    new TodoItem('learn angular'),
  ]);

  get userName(): string {
    return this.todoList.user;
  }

  get remainingTodos(): number {
    return (
      this.todoList
        .items
        .filter(item => !item.complete)
        .length
    );
  }
}

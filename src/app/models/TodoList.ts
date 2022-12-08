import { TodoItem } from "./TodoItem";


export class TodoList {
  constructor(
    public user: string,
    private todoList: TodoItem[] = []
  ) { }

  get items(): readonly TodoItem[] {
    return this.todoList;
  }

  addItem(item: TodoItem) {
    this.todoList.push(item);
  }
}

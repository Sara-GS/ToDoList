import {TodoItem} from "./todoitem"
export class TodoList{
  constructor(public user: string, public todoItems: TodoItem[]) {}
  get items(): TodoItem[]{
    return this.todoItems;
  }
  addItems(task:string){
    this.todoItems.push(new TodoItem(task));

  }
}

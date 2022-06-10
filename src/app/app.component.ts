import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista de tareas';
  constructor(private router: Router) {}

  Listar():any {
    this.router.navigate(['listar']);
  }

  Nuevo():any {
    this.router.navigate(['add']);
  }
}

// import { Component } from '@angular/core';
// import { TodoItem } from './todoitem';
// import { TodoList } from './todoList';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   private list = new TodoList("Sara",
//   [
//     new TodoItem("Estudiar Java", true),
//     new TodoItem("Estudiar Angular", true),
//     new TodoItem("Aprender a debugear", true),
//     new TodoItem("Llorar mucho porque no me va a dar tiempo a todo", true),
//   ])

//   get username(){
//     return "Sara";
//   }
//   get itemCount(): number{
//     return this.list.items.filter(item => item.complete).length;
//   }
//   showComplete = false;
//   get items(): readonly TodoItem[]{
//     return this.list.items.filter(item => item.showComplete|| !item.complete);
//   }
//   agregarItem(newItem: string){
//     if (newItem!=''){
//       this.list.addItem(newItem);
//     }
//   }

// }

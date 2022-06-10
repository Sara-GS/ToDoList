export class TodoItem {
  task: string;
  complete: boolean;

constructor (taskValue: string, completeValue: boolean = false){
  this.task = taskValue;
  this.complete = completeValue;
}
}

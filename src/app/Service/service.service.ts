import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../Modelo/task';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Url: string = 'http://localhost:8080/tasks';


 constructor(private http:HttpClient) { }
  getTasks(){
    return this.http.get<Task[]>(this.Url);
  }

  createTask(task: Task){
    return this.http.post<Task>(this.Url, task);
  }
  getTaskId(id: number){
    return this.http.get<Task>(this.Url +'/' + id);
  }
  updateTask(task:Task){
    return this.http.put<Task>(this.Url +'/' + task.id, task);
  }

  deleteTask(task:Task){
    return this.http.delete<Task>(this.Url +'/'+task.id);
  }
}

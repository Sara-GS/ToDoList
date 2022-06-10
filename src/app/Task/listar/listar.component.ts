import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/Modelo/Task';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  tasks: Task[] = [];


  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getTasks().subscribe(data=> this.tasks=data)
  }

  Editar(task: Task): void {

    localStorage.setItem('id', task.id.toString());
    this.router.navigate(['edit']);
  }

  Delete(task: Task): void {
     this.service.deleteTask(task).subscribe(data => this.tasks = this.tasks.filter(p => p.id !== task.id));
     alert("Tarea eliminada");
  }
}

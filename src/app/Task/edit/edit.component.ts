import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/Modelo/Task';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  task= new Task();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem('id');
    this.service.getTaskId(+id).subscribe(data => {
      this.task=data;
    });
  }

  Actualizar(task: Task){
    this.service.updateTask(task).subscribe(data => {
      this.task = data;
      alert("Se ha modificado la tarea");
      this.router.navigate(['listar'])
    });
  }
}

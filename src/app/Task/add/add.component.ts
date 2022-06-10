import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/Modelo/Task';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  modelTask = new Task();

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  Guardar(task: Task) {
    this.service.createTask(task).subscribe(data => {
      alert('Se agregó correctamente su nueva tarea');
      this.router.navigate(['listar']);
    });
}
}

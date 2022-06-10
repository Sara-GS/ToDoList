import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Task/add/add.component';
import { EditComponent } from './Task/edit/edit.component';
import { ListarComponent } from './Task/listar/listar.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add', component:AddComponent},
  {path:'edit', component:EditComponent},
  {path:'**', redirectTo: 'listar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

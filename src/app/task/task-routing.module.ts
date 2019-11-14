import { PrimeTaskListComponent } from './components/prime-task-list/prime-task-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
  { path: 'list', component: TaskListComponent },
  { path: 'primelist', component: PrimeTaskListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }

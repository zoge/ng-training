import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';
import { AgePipe } from './pipes/age.pipe';
import { PrimeTaskListComponent } from './components/prime-task-list/prime-task-list.component';

@NgModule({
  declarations: [TaskListComponent, TaskListItemComponent, AgePipe, PrimeTaskListComponent],
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule,
    TableModule,
  ]
})
export class TaskModule { }

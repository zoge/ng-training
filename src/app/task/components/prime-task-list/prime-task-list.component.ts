import { Component, OnInit } from '@angular/core';
import { TaskDto } from '../../dtos/task.dto';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-prime-task-list',
  templateUrl: './prime-task-list.component.html',
  styleUrls: ['./prime-task-list.component.css']
})
export class PrimeTaskListComponent implements OnInit {

  public tasks: TaskDto[] = [];
  constructor(private taskService: TaskService) { }
  cols: any[];
  ngOnInit() {
    this.taskService.list().subscribe(
      tasks => {
        this.tasks = tasks;
      },
      error => {
        console.log(error);
      }
    );
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'is_done', header: 'Done' },
    ];
  }
  onRowEditSave(task: TaskDto) {
    console.log('Row edit saved', task);
  }
  dataTableOnChange($event, col, rowData, rowIndex, dt ) {
    console.log('onChange', $event, col, rowData, dt);
  }
}

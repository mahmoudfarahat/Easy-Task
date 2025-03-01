import { Component, input, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required:true}) userId: string | undefined;
@Input({required:true}) name: string | undefined;

tasks =  dummyTasks


get selectedUserTasks(){
  return this.tasks.filter(task => task.userId === this.userId);
}

}

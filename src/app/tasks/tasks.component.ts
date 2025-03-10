import { Component, input, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required:true}) userId!: string ;
@Input({required:true}) name: string | undefined;

isAddingTask = false;

tasks =  dummyTasks


get selectedUserTasks(){
  return this.tasks.filter(task => task.userId === this.userId);
}

onCompleteTask(id: string){
    this.tasks = this.tasks.filter(task => task.id !== id);
 }


 onStartAddTask(){
    this.isAddingTask = true;
 }

 onCancelAddTask(){
   this.isAddingTask = false;
 }

 onAddTask(taskData: NewTask){
   this.tasks.push({
     id: new Date().getTime().toString(),
     userId: this.userId,
     title: taskData.title,
     summary: taskData.summary,
     dueDate: taskData.date
   });
   this.isAddingTask = false;
 }
}

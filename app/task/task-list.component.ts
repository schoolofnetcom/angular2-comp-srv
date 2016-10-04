import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Task} from './task';
import {TaskService} from "./task.service";

declare var module: any;

@Component({
    selector: 'task-list',
    templateUrl: 'task-list.component.html',
    moduleId: module.id
})
export class TaskListComponent implements OnInit{

    tasks:Task[];
    selectedTask:Task;

    constructor(private taskService: TaskService, private router: Router){}

    goToEdit(id: number){
        this.router.navigate(['tasks', id, 'edit']);
    }

    deleteTask(id: number){
        this.taskService.deleteTask(id);
    }

    ngOnInit(): void {
        this.tasks = this.taskService.getTasks();
    }

}

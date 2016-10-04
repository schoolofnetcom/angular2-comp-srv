import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Task} from "./task";
import {TaskService} from "./task.service";
import {MessageService} from "../message.service";

declare var module: any;
@Component({
    selector: 'task-edit',
    templateUrl: 'task-edit.component.html',
    moduleId: module.id
})
export class TaskEditComponent implements OnInit{
    task: Task;

    constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private router: Router,
        private messageService: MessageService
    ){}

    submit(){
        this.messageService.messages.push({
            type: 'success',
            message: 'Tarefa alterada com sucesso'
        });
        this.router.navigate(['tasks','list']);
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.task = this.taskService.getTask(id);
            if(!this.task){
                alert('Tarefa não existe');
            }
        });
    }
}
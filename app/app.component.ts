import {Component, OnInit} from '@angular/core';
import {MessageService, Alert} from "./message.service";

declare var module: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    moduleId: module.id
})
export class AppComponent implements OnInit{
    messages: Alert[];

    constructor(private messageService: MessageService){}

    ngOnInit(): void {
        this.messages = this.messageService.messages;
    }

}

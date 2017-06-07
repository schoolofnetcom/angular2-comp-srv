import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {TaskEditComponent} from "./task/task-edit.component";
import {TaskListComponent} from "./task/task-list.component";
import {routing} from "./app.routing";
import {TaskService} from "./task/task.service";
import {TaskNewComponent} from "./task/task-new.component";
import {AlertModule} from 'ng2-bootstrap';
import {MessageService} from "./message.service";


@NgModule({
    imports: [BrowserModule, FormsModule, routing, AlertModule],
    declarations: [
        AppComponent, TaskEditComponent, TaskListComponent, TaskNewComponent
    ],
    bootstrap: [AppComponent],
    providers: [TaskService, MessageService]
})
export class AppModule{

}
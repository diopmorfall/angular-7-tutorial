import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
    selector: 'app-todos-list',
    templateUrl: './todos-list.component.html',
    styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit, OnDestroy {

    private _subscriptions: Subscription[] = [];
    todos: Todo[] = [];
    constructor(private _todoService: TodoService) { }

    //todo: method that changes the state of the todo

    ngOnInit(): void {
        this._subscriptions.push(
            this._todoService.getTodos().subscribe(todos => this.todos = todos)
        );
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach(sub => sub.unsubscribe());
    }

}

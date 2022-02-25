import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
    selector: 'app-todo-infos',
    templateUrl: './todo-infos.component.html',
    styleUrls: ['./todo-infos.component.scss']
})
export class TodoInfosComponent implements OnInit {

    todo!: Todo;
    constructor(private _activeRoute: ActivatedRoute, private _todoService: TodoService) { }

    ngOnInit(): void {
        const id = Number(this._activeRoute.snapshot.paramMap.get('id'));
        this._todoService.getTodo(id).subscribe(todo => this.todo = todo);
    }

}

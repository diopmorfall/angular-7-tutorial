import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
    selector: '[app-todo-details]',
    templateUrl: './todo-details.component.html',
    styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

    @Input() todo: Todo | undefined;
    constructor() { }

    ngOnInit(): void {
    }

}

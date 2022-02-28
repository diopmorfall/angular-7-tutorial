import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, forkJoin, Subscription } from 'rxjs';
import { filter, take, first, toArray, switchMap, distinct, map, tap } from 'rxjs/operators';
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

        //forkJoin
        // this._subscriptions.push(
        //     this._todoService.getTodos().pipe(
        //         switchMap(todos => todos), //? kinda starts a cycle, where I do some operations
        //         filter(todo => todo.title.length > 60),
        //         distinct(todo => todo.id),
        //         toArray(), //? use it at the end of switchMap, to get all the results in an array
        //     ).subscribe(todos => this.todos = todos)
        // );

        // forkJoin([
        //     //* I'm taking the final value that each observer returns, 
        //     this._todoService.getTodos().pipe(
        //         switchMap(todos => todos),
        //         filter(todo => todo.title.length > 30),
        //         toArray(),
        //     ),
        //     this._todoService.getTodos().pipe(
        //         switchMap(todos => todos),
        //         filter(todo => todo.title.length > 50),                
        //         toArray()
        //     ),
        //     this._todoService.timer().pipe(tap(res => console.log('TIMER' ,res)))
        // ]).pipe(
        //     tap(([res1, res2, timer]) => console.log('timer', timer)),
        //     map(([res1, res2]) => res1.concat(res2)),
        //     tap(todos => console.log('original todos', todos)),
        //     switchMap(res => res),
        //     distinct(todo => todo.id),
        //     toArray(),
        //     tap(todos => console.log('filtered todos', todos)), 
        //     first()//? does a generic operation            
        // ).subscribe(todos => this.todos = todos );

        forkJoin([
            this._todoService.timer().pipe(tap(res => console.log('TIMER', res))),
            this._todoService.getTodos().pipe(
                tap(todos => console.log('todos', todos)),
                switchMap(todos => todos),
                filter(todo => todo.title.length > 30),
                toArray(),
                switchMap(todos => this._todoService.getByTodoId(todos[0].id))
            )
        ]).pipe(
            tap(todos => console.log('forkJoin', todos)),
            switchMap(([timer, todo]) => this._todoService.updateById({timer: timer, id: todo.id}))
        ).subscribe(todo => console.log('DONE', todo))

        // this._todoService.getTodos().pipe(
        //     tap(todos => console.log('todos', todos)),
        //     switchMap(todos => todos),
        //     filter(todo => todo.title.length > 30),
        //     toArray(),
        //     switchMap(todos => this._todoService.getByTodoId(todos[0].id))
        // ).subscribe(todo => console.log('DONE', todo))

        // const subscribe = join.subscribe(response => console.log(response));
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach(sub => sub.unsubscribe());
    }

}

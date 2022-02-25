import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { TodosListComponent } from '../components/todos-list/todos-list.component';
import { ITodo } from '../interfaces/todo.interface';
import { Todo } from '../models/todo';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor(private _http: HttpClient) { }

    getTodos(): Observable<Todo[]> {
        return this._http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
        .pipe(
            map(todos => todos.map(todo => new Todo(todo.userId, todo.id, todo.title, todo.isCompleted)))
        );
    }

    getTodo(id: number){
        return this._http.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + id).pipe(
            filter(todo => todo.id === id)
        )
    }

    getTodoByUser(userId: number){
        return this._http.get<ITodo>('https://jsonplaceholder.typicode.com/todos?userId=' + userId).pipe(
            filter(todo => todo.userId === userId)
        )
    }

    //todo: get todos by userId or not completed
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { map, filter, tap, switchMap , toArray, distinct, take} from 'rxjs/operators';
import { TodosListComponent } from '../components/todos-list/todos-list.component';
import { ITodo } from '../interfaces/todo.interface';
import { Todo } from '../models/todo';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor(private _http: HttpClient) { }

    timer(): Observable<number>{
        return interval(1000).pipe(take(5))
    }

    getByTodoId(id: number):Observable<{id:number}>{
        console.log('getByTodoId', id)
        return of({id: 123})
    }

    updateById(payload: { id: number, timer: number}):Observable<any>{
        console.log('updateById', payload)
        return of('pippo')
    }

    getTodos(): Observable<Todo[]> {
        return this._http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
        .pipe(
            map(todos => todos.map(todo => new Todo(todo.userId, todo.id, todo.title, todo.isCompleted))),
            // map(todos => todos.filter(todo => todo.title.length > 50)),
            // map(todos => {
            //     let tmp: Todo[] = []
            //     todos.forEach(todo => {
            //         if(tmp.indexOf(todo) === -1){
            //             tmp.push(todo)
            //         }
            //     })
            //     return tmp
            // }),
            // switchMap(todos => todos), //? kinda starts a cycle, where I do some operations
            // filter(todo => todo.title.length > 50),
            // distinct(todo => todo.id),
            // toArray(), //? use it at the end of switchMap, to get all the results in an array
            
            //* if each component needs different data, I can filter it in each one of them
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

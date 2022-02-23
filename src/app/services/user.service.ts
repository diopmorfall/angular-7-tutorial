import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from '../interfaces/user.interface';
import { User } from '../models/user';
//* makes our service injectable as a dependency
@Injectable({
    providedIn: 'root' //? inserting the class in providers[] of app.module.ts (root injector)
    //* it's done via treeshaking: checks if the class was invoked in at least one constructor
    //* and if it doesn't, it won't be included in the final bundle/transpiled
})
export class UserService {

    constructor(private _http: HttpClient) { 
        //* injecting a service inside another service (yes we can do it)
        console.log('UserService instantiated');
        //! works when the service is instantiated somewhere in the app
    }

    fetchUsers(): Observable<User[]>{
        //* fetchUsers returns an Observable of an array of User objects,
        //* and the response will be formatted as the IUser interface
        return this._http.get<IUser[]>('https://jsonplaceholder.typicode.com/users',)
            //? <IUser> is a generic, sets the format we want to return (an array of IUser objects)
            //todo: always create an interface in this case, to structure the data
            .pipe( //* the request returns an observable object
            //? we can take various operators, and run them in the order we insert them
                map(users => users.map(user => new User(user.id, user.name, user.email, user.phone, user.website)))
                    //? just transforming the information object that I'm receiving; in this case:
                    //* I operate on the response array (users array), and for each item (user)
                    //* I create a new User object with its properties
            );
    }
}

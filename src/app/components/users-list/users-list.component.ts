import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { filter, first, Subject, Subscription, take, takeUntil } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { UserListDetailsComponent } from '../user-list-details/user-list-details.component';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {

    private _usersSubscription!: Subscription; //? type: Subscription, but it doesn't work
    public users: User[] = [];
    private subs: Subscription[] = [];
    private obs$: Subject<any> = new Subject();
    @ViewChildren('rows') trRows!: QueryList<UserListDetailsComponent>;
    //* this decorator looks for the variable called rows in the template
    //? angular creates QueryList instead of arrays of the same elements <specifying the type>

    constructor(private _userService: UserService) {
        //* now the service is instantiated, so we can access to it
        //! when we instantiate it, we should use it
        //! the component is only for the interaction with the user; the service has the business logic
    }

    deleteUser(id: number) {
        this.users = this.users.filter(user => {
            //? returning the elements of the array that match the condition
            return user.id !== id;
        });
    }

    //* Hook methods

    ngOnInit(): void { //* executed when all the directives, events, properties ecc are initialized
        //? from now on, they'll be accessible
        //? this.subs.push(this._userService.fetchUsers().subscribe(users => this.users = users));
        //? we could make an array that stores each subscription, and then []
        this._userService.fetchUsers().pipe(
            takeUntil(this.obs$)
            //* looks for this object in the observable array we return, until it finds it
            // filter(users => users && users.length > 0),
            // take(1), //? takes the first element
            // first(users => users && users.length > 0)
        ).subscribe(users => this.users = users)
        //* subscribe will execute the callback, to access the data stream
    }

    ngAfterViewChecked(): void {
        console.log("View checked", this.trRows)
    }

    ngAfterViewInit(): void {
        console.log("View init", this.trRows);
    }

    ngOnDestroy(): void { //? executed when we delete the component
        //? this.subs.forEach(sub => sub?.unsubscribe())
        //? we just unsubscribe from them []; but it's a loop, heavier than the latter approach
        this.obs$.next({});
        this.obs$.complete(); //* and when we destroy the component, it destroys itself
        //* we can unsubscribe from the observable when we don't need it
        //! if we don't, it could receive data that'll elaborate while we do something else
    }
}

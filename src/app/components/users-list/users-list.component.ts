import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-users-list',
	templateUrl: './users-list.component.html',
	styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {

    private _usersSubscription: any; //? type: Subscription, but it doesn't work
    public users: User[] = [ ];

	constructor(private _userService: UserService) { 
        //* now the service is instantiated, so we can access to it
        //! when we instantiate it, we should use it
        //! the component is only for the interaction with the user; the service has the business logic
    }

    deleteUser(id: number){
        this.users = this.users.filter(user => {
            //? returning the elements of the array that match the condition
            return user.id !== id;
        });
    }

    //* Hook methods

	ngOnInit(): void { //* executed when all the directives, events, properties ecc are initialized
        //? from now on, they'll be accessible
        this._userService.fetchUsers().subscribe(users => this.users = users);
        //* subscribe will execute the callback once it'll receive the data stream
	}

    ngOnDestroy(): void { //? executed when we delete the component
        this._usersSubscription.unsubscribe();
        //* we can unsubscribe from the observable when we don't need it
        //! if we don't, it could receive data that'll elaborate while we do something else
    }
}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-users-list',
	templateUrl: './users-list.component.html',
	styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    
    public users: User[] = [ ];

	constructor(private _userService: UserService) { 
        //* now the service is instantiated, so we can access to it
        //! when we instantiate it, we should use it
        //! the component is only for the interaction with the user; the service has the business logic
    }

	ngOnInit(): void { //? executed when the app starts, but the thing is asynchronous
        this._userService.fetchUsers().subscribe(users => this.users = users);
        //* subscribe will execute the callback once it'll receive the data stream
	}

    deleteUser(id: number){
        this.users = this.users.filter(user => {
            //? returning the elements of the array that match the condition
            return user.id !== id;
        });
    }
}
